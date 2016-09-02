import $ from 'jquery';
import React from 'react'; //eslint-disable-line no-unused-vars
import Deferred from 'dojo/Deferred';
import lang from 'dojo/_base/lang';
import esriRequest from 'esri/request';
import Helper from 'babel/utils/helper/Helper';
import AppStore from 'babel/store/AppStore';
import AppActions from 'babel/actions/AppActions';
import MapActions from 'babel/actions/MapActions';
import Logger from 'babel/utils/logging/Logger';
import viewerText from 'i18n!translations/viewer/nls/template';
import 'babel/utils/helper/strings/StringUtils';

import html2canvas from 'lib/html2canvas/dist/html2canvas.min';

const _logger = new Logger({source: 'Contribute Controller'});

const _onError = function onError(error) {
  _logger.logMessage({
    type: 'error',
    error
  });
};

// const _onStatus = function onStatus(message,debugOnly) {
//   _logger.logMessage({
//     type: 'status',
//     debugOnly,
//     message
//   });
// };

export default class ContributeController {

  constructor() {

    this.savingGraphic = false;

    // Autobind methods
    this.updateAppState = this.updateAppState.bind(this);
    this.checkContributeView = this.checkContributeView.bind(this);
    this.saveGraphic = this.saveGraphic.bind(this);
    this.finishSave = this.finishSave.bind(this);
    this.displayContributionShownAfterReviewMessage = this.displayContributionShownAfterReviewMessage.bind(this);
    this.displayContributeErrorMessage = this.displayContributeErrorMessage.bind(this);
    this.hideUncompleted = this.hideUncompleted.bind(this);

    // Subscribe to state changes
    this.updateAppState();
    this.unsubscribeAppStore = AppStore.subscribe(this.updateAppState);
  }

  updateAppState() {
    this.appState = AppStore.getState();

    this.checkContributeView();
    this.saveGraphic();
  }

  checkContributeView() {
    if (lang.getObject('appState.app.contributing.active',false,this) && lang.getObject('appState.app.contributing.view',false,this) === 'login' && lang.getObject('appState.user.contributor',false,this)) {
      AppActions.updateContributeState({
        view: 'form'
      });
    }
  }

  saveGraphic() {

    if (!this.savingGraphic && lang.getObject('appState.app.contributing.saving',false,this) && typeof lang.getObject('appState.app.contributing.graphic',false,this) === 'object') {
      this.savingGraphic = true;
      const layer = lang.getObject('appState.app.map.layer',false,this);
      const token = lang.getObject('appState.app.portal.user.credential.token',false,this);
      const graphic = $.extend(true,{},lang.getObject('appState.app.contributing.graphic',false,this));

      // for some reason, the form was not picking up the selected value automatically.
      // so i'm manually searching for the selected value from the radio group, and making sure it's added to the graphic's attributes
      if (!graphic.attributes.ENTERED_BY) {
        const val = $('input[name=ENTERED_BY]:checked', 'form').val();

        graphic.attributes.ENTERED_BY = val;

        // just remove the attribute for NUMBER_IN_GROUP if 'Individual' is selected
        if (val === 'Individual' && graphic.attributes.NUMBER_IN_GROUP) {
          delete graphic.attributes.NUMBER_IN_GROUP;
        }
      }

      // check for and capture login service
      if (window.loginService) {
        graphic.attributes.LOGIN_SERVICE = window.loginService;
      }

      // add in atts for country roll up
      graphic.attributes.COUNTRY_NAME = window.selectedCountry;
      graphic.attributes.COUNTRY_ISO3_DIGIT = window.selectedISO3Digit;

      // add in the numbers for female/male ratio
      graphic.attributes.RATIO_MALE = window.maleRatio || 0;
      graphic.attributes.RATIO_FEMALE = window.femaleRatio || 0;

      window.myRatio = window.femaleRatio + ':' + window.maleRatio;

      const attachments = [];

      const uploadAttachments = function uploadAttachments(oid) {
        const dfd = new Deferred();
        let uploadsFinished = 0;

        const url = layer.url.stripTrailingSlash() + '/' + oid + '/addAttachment';

        attachments.forEach((current) => {
          const formdata = new FormData();

          formdata.append('attachment', current.attachment, current.filename);
          formdata.append('f', 'json');
          if (token) {
            formdata.append('token',token);
          }

          esriRequest({
            url,
            handleAs: 'json',
            form: formdata
          },{
            usePost: true
          }).then((res) => {
            if (res.addAttachmentResult && res.addAttachmentResult.success) {
              ++uploadsFinished;
              if (uploadsFinished === attachments.length) {
                dfd.resolve();
              }
            } else {
              _onError(res);
              dfd.reject();
            }
          },(err) => {
            _onError(err);
            dfd.reject();
          });
        });

        return dfd;

      };

      const generateRatioThumbnail = function () {
        const dfd = new Deferred();

        var div = $('#toExport');

        div.children('.ratio').css('visibility', 'hidden');

        var w = div.width();

        var h = div.height();

        window.html2canvas(div, {
          width: w,
          height: h,
          onrendered: function(canvas) {
            canvas.toBlob( (blob) => {

              div.children('.ratio').css('visibility', 'visible');

              attachments.push({
                field: 'PrimaryThumbnail',
                filename: 'PrimaryThumbnail.png',
                attachment: blob,
                url: false
              });

              dfd.resolve();

            }, 'image/png');

          }
        });

        return dfd;
      };

      const generateRatioImage = function () {
        const dfd = new Deferred();

        var div = $('#toExport');

        var w = div.width();

        var h = div.height();

        var testcanvas = document.createElement('canvas');

        testcanvas.width = w*2;
        testcanvas.height = h*2;
        testcanvas.style.width = w + 'px';
        testcanvas.style.height = h + 'px';

        var context = testcanvas.getContext('2d');

        // this was for the first way exporting to try and calculate the new X,Y origins for scaling up the image
        // var newX = Math.round( (div.position().left + parseInt(div.css('marginLeft')) )*2 ) * -1;
        //not really sure why this constant seems to hold true
        // var newY = -260;
        //console.log(newX, newY);

        var newX = -1577;

        // this works for development in "edit" mode
        // var newY = -353;
        
        // this works for production. no "edit=true" in URL
        var newY = -200;

        context.translate(newX, newY);
        context.scale(2,2);

        window.html2canvas(div, {
          canvas: testcanvas,
          width: w,
          height: h,
          onrendered: function(canvas) {

            // var img = canvas.toDataURL("image/png");
            canvas.toBlob( (blob) => {

              attachments.push({
                field: 'PrimaryPhoto',
                filename: 'PrimaryPhoto.png',
                attachment: blob,
                url: false
              });

              dfd.resolve();

            }, 'image/png');

            // download(img, "ratio", "image/png");
          }
        });

        return dfd;
      };

      Object.keys(graphic.attributes).forEach((key) => {
        const value = graphic.attributes[key];

        if (typeof value === 'object' && value.attachment && value.type) {
          switch (value.type) {
            case 'photo':
              attachments.push({
                field: key,
                filename: key + value.ext,
                attachment: Helper.attachmentUtils.dataURItoBlob(value.source),
                url: false
              });
              delete graphic.attributes[key];
              break;
            default:

          }
        } else if (typeof value === 'object') {
          graphic.attributes[key] = JSON.stringify(value);
        } else if (typeof value === 'string') {
          graphic.attributes[key] = value.sanitizeHtml();
        }
      });

      const adds = JSON.stringify([].concat(graphic));
      const url = layer.url.stripTrailingSlash() + '/applyEdits';
      const content = {
        f: 'json',
        token,
        adds
      };

      esriRequest({
        url,
        handleAs: 'json',
        content
      },{
        usePost: true
      }).then((res) => {
        if ($.isArray(res.addResults) && res.addResults[0] && res.addResults[0].success) {
          const oid = res.addResults[0].objectId;

          window.shareFID = res.addResults[0].objectId;

          MapActions.selectFeatures(oid);

          generateRatioThumbnail().then( () => {

            generateRatioImage().then( () => {

              uploadAttachments(oid).then(this.finishSave,(err) => {
                _onError(err);
                this.hideUncompleted(oid);
                this.displayContributeErrorMessage();
              });

            });

          });

          // uploadAttachments(oid).then(this.finishSave,(err) => {
          //   _onError(err);
          //   this.hideUncompleted(oid);
          //   this.displayContributeErrorMessage();
          // });

        }
      },(err) => {
        // TODO Handle errors in crowdsource form
        AppActions.updateContributeState({
          saving: false
        });
        _onError(err);
        this.displayContributeErrorMessage();
      });
    }
  }

  finishSave() {
    AppActions.updateContributeState({
      active: false,
      saving: false,
      graphic: false
    });
    this.savingGraphic = false;

    const query = lang.getObject('appState.items.app.data.values.settings.components.map.crowdsourceLayer.visibleFeaturesQuery',false,this);

    if ($.isArray(query) && query.indexOf('vetted:new') < 0) {
        this.displayContributionShownAfterReviewMessage();
    }
    if (lang.getObject('appState.app.map.originalObject.refreshCrowdsourceLayer',false,this)) {
        this.appState.app.map.originalObject.refreshCrowdsourceLayer();
    }

    window.showMyShare = true;

  }

  displayContributionShownAfterReviewMessage() {
    if (!lang.getObject('appState.mode.isBuilder',false,this)) {
      const removeContributionShownAfterReviewMessage = function() {
        AppActions.removeNotifications({
          id: 'contributionNotfication_contributionShownAfterReview'
        });
      };

      AppActions.addNotifications({
        id: 'contributionNotfication_contributionShownAfterReview',
        type: 'info',
        content: (
          <div>
            <p><strong>{viewerText.contribute.messages.contributionShownAfterReview.title}</strong></p>
            <p>{viewerText.contribute.messages.contributionShownAfterReview.body}</p>
            <button className="btn btn-primary" onClick={removeContributionShownAfterReviewMessage}>{viewerText.contribute.messages.contributionShownAfterReview.confirmBtn}</button>
          </div>
        )
      });
    }
  }

  displayContributeErrorMessage() {
    const reload = function() {
      window.location.reload();
    };

    AppActions.addNotifications({
      id: 'contributionNotfication_contributionError',
      type: 'error',
      content: (
        <div>
          <p><strong>{viewerText.contribute.messages.contributionError.title}</strong></p>
          <p>{viewerText.contribute.messages.contributionError.body}</p>
        <button className="btn btn-primary" onClick={reload}>{viewerText.contribute.messages.contributionError.confirmBtn}</button>
        </div>
      )
    });
  }

  hideUncompleted(objectId) {
    const layer = lang.getObject('appState.app.map.layer',false,this);
    const token = lang.getObject('appState.app.portal.user.credential.token',false,this);
    const oidField = lang.getObject('appState.app.map.layer.objectIdField',false,this);
    const hiddenField = lang.getObject('appState.items.app.data.values.settings.components.map.crowdsourceLayer.hiddenField',false,this);
    const graphic = {
      attributes: {}
    };

    graphic.attributes[oidField] = objectId;
    graphic.attributes[hiddenField] = 1;

    const updates = JSON.stringify([].concat(graphic));
    const url = layer.url.stripTrailingSlash() + '/applyEdits';
    const content = {
      f: 'json',
      token,
      updates
    };

    esriRequest({
      url,
      handleAs: 'json',
      content
    },{
      usePost: true
    });
  }

}
