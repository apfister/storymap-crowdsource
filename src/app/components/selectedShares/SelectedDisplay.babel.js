import React from 'react';
import Helper from 'babel/utils/helper/Helper';
import LazyImage from 'babel/components/helper/lazyImage/LazyImage';
import VideoLoader from 'babel/components/helper/videoLoader/VideoLoader';
import Autolinker from 'babel/components/helper/autolinker/Autolinker';
import viewerText from 'i18n!translations/viewer/nls/template';
import builderText from 'mode!isBuilder?i18n!translations/builder/nls/template';

export default class SelectedShares extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      mediaLoaded: false
    };

    // autobind methods
    this.getMedia = this.getMedia.bind(this);
    this.onMediaLoad = this.onMediaLoad.bind(this);
    this.getFieldLayout = this.getFieldLayout.bind(this);
  }

  componentDidUpdate(nextProps) {
    if (this.props.feature[this.props.attributePath][this.props.layer.objectIdField] !== nextProps.feature[nextProps.attributePath][nextProps.layer.objectIdField]) {
      this.setState({
        mediaLoaded: false
      });
    }
  }

  render() {

    const mainClasses = Helper.classnames([this.props.className,this.props.classNames,'selected-display']);
    const attributes = this.props.feature[this.props.attributePath];

    return (
      <div className={mainClasses} onScroll={this.props.onScroll}>
        { this.getMedia() }
        { this.state.mediaLoaded ? (this.state.mediaLoaded === 'failed' ?
          (
            <div className="padded-column">
            <div className="info-section">
              <div className="review-section alert alert-danger">
                {viewerText.errors.selectedDisplay.noPhoto}
              </div>
              {/* <h4 className="share-title">{attributes[this.props.primaryField]}</h4> */}
              <p className="share-location-wrapper"><small className="share-location">{attributes[this.props.secondaryField]}</small></p>
            { this.props.displayOrder.map(this.getFieldLayout.bind(this,attributes))}
            </div>
            {this.props.reviewEnabled ? (
              <div className="review-section alert alert-info">
                <h6 className="review-header">{builderText.review.selectedShare.header}</h6>
                <div className="btn-group">
                  <button type="button" className={Helper.classnames(['btn'],{
                      'btn-default': attributes[this.props.vettedField] !== 1,
                      'btn-primary': attributes[this.props.vettedField] === 1
                    })} onClick={this.props.approveAction.bind(null,attributes[this.props.idField])}>{viewerText.selectedShares.review.options.approve}</button>
                  <button type="button" className={Helper.classnames(['btn'],{
                      'btn-default': attributes[this.props.vettedField] !== 2,
                      'btn-danger': attributes[this.props.vettedField] === 2
                    })} onClick={this.props.rejectAction.bind(null,attributes[this.props.idField])}>{viewerText.selectedShares.review.options.reject}</button>
                </div>
              </div>
            ) : null}
            </div>
          ) : (
          <div className="padded-column">
          <div className="info-section">
            {/* <h4 className="share-title">{attributes[this.props.primaryField]}</h4> */}
            <p className="share-location-wrapper"><small className="share-location">{attributes[this.props.secondaryField]}</small></p>
            <hr />
          { this.props.displayOrder.map(this.getFieldLayout.bind(this,attributes))}
          </div>
          {this.props.reviewEnabled ? (
            <div className="review-section alert alert-info">
              <h6 className="review-header">{builderText.review.selectedShare.header}</h6>
              <div className="btn-group">
                <button type="button" className={Helper.classnames(['btn'],{
                    'btn-default': attributes[this.props.vettedField] !== 1,
                    'btn-primary': attributes[this.props.vettedField] === 1
                  })} onClick={this.props.approveAction.bind(null,attributes[this.props.idField])}>{viewerText.selectedShares.review.options.approve}</button>
                <button type="button" className={Helper.classnames(['btn'],{
                    'btn-default': attributes[this.props.vettedField] !== 2,
                    'btn-danger': attributes[this.props.vettedField] === 2
                  })} onClick={this.props.rejectAction.bind(null,attributes[this.props.idField])}>{viewerText.selectedShares.review.options.reject}</button>
              </div>
            </div>
          ) : null}
          </div>
        )) : (
          <div className="loading">
            <img className="loading-gif" src="resources/images/loader-light.gif" alt={viewerText.loading.general} />
            <p>{viewerText.loading.general}</p>
          </div>
        ) }
      </div>
    );
  }

  getMedia() {
    const media = this.props.media;
    const attributes = this.props.feature[this.props.attributePath];
    const fieldProps = this.props.fields[media.field];

    switch (media.type) {
      case 'video':
        // add video
        break;
      default:
        let photoUrl;

        if (fieldProps.isAttachment) {
          const attachmentUrl = Helper.attachmentUtils.getAttachmentUrlsByStringMatch({
            layer: this.props.layer,
            feature: this.props.feature,
            match: media.field,
            position: 0
          })[0] || '';

          photoUrl = Helper.attachmentUtils.checkForCredential({
            url: attachmentUrl,
            layer: this.props.layer
          });
        } else {
          photoUrl = Helper.attachmentUtils.checkForCredential({
            url: this.props.thumbnailUrlPrepend + attributes[media.field] + this.props.thumbnailUrlAppend,
            layer: this.props.layer
          });
        }

        // return (
        //   <div className="media-section">
        //     <VideoLoader
        //       src={photoUrl}
        //       onCanPlay={this.onMediaLoad.bind(this,true)}
        //       onError={this.onMediaLoad.bind(this,false)}>
        //     </VideoLoader>
        //   </div>
        // );

        return (
          <div className="media-section">
            <LazyImage
              key={photoUrl}
              className="media-photo"
              autoSizeDiv={true}
              src={photoUrl}
              onLoad={this.onMediaLoad.bind(this,true)}
              onError={this.onMediaLoad.bind(this,false)}>
            </LazyImage>
          </div>
        );
    }
  }

  onMediaLoad(success) {
    this.setState({
      mediaLoaded: success ? true : 'failed'
    });
  }

  getFieldLayout(attributes,current) {

    if (typeof current === 'string') {

      if (attributes[current] === null || attributes[current] === undefined) {
        return null;
      }

      const fieldClasses = Helper.classnames(['field-display', 'field-' + current]);

      const livingArchiveNls = viewerText.livingArchive;

      let fieldLabel = current;

      console.log('current', current);

      if (current === 'EDUCATOR_ROLE' ||
          current === 'EDUCATOR_NUM_STUDENTS' ||
          current === 'EDUCATOR_CLASS_AGE_RANGE' ||
          current === 'STUDENT_AGE_RANGE' ||
          current === 'STUDENT_INDIVIDUAL_CLASS') {

        fieldLabel = this.props.fields.EDUCATOR_STUDENT.subOptions[current].label;
      } else {
        fieldLabel = this.props.fields[current].label;
      }

      if (livingArchiveNls) {
        try {
          const f = livingArchiveNls.form.fields[current];

          if (f && f.label) {
            fieldLabel = f.label;
          }
        } catch (e) {
          console.log(e);
        }
      }

      let fieldValue = attributes[current];

      if (current === 'OPEN_INPUT_CONNECT_TWITTER') {
        return (
          <div className="selected-field-label-holder" key={current}>
            <p className="selected-field-label">{fieldLabel}</p>
            <Autolinker className={fieldClasses} text={fieldValue}></Autolinker>
          </div>
        );
      } else if (current === 'FOOD_PROJECT_SCORE') {

        const foodIds = {
          1: 'c3c997c7e8ed4e188147c62dfdbc2897',
          2: '58725b7391914c90a19d92988013e8c8',
          3: 'c3a124eb569e4b3b9079bd847e5dc982',
          4: 'c7e6ac7a55704c3fa53a079da7841d1a',
          5: 'b19223ad2525469cb33b065ecfc49e8d'
        };

        const val = parseInt(attributes[current]);

        const foodId = foodIds[val];

        const foodImgUrl = `//theworldslesson.maps.arcgis.com/sharing/rest/content/items/${foodId}/data`;

        return (
          <div className="selected-field-label-holder" key={current}>
            <p className="selected-field-label">{fieldLabel}</p>
            <img className="food-score-img" src={foodImgUrl} />
          </div>
        );
      } else {
        return (
          <div className="selected-field-label-holder" key={current}>
            <p className="selected-field-label">{fieldLabel}</p>
            <span className={fieldClasses}>{fieldValue}</span>
          </div>
        );
      }

    }
  }

}

SelectedShares.propTypes = {
  reviewEnabled: React.PropTypes.bool,
  approveAction: React.PropTypes.func,
  rejectAction: React.PropTypes.func,
  feature: React.PropTypes.shape({
    attributes: React.PropTypes.shape({})
  }),
  displayOrder: React.PropTypes.array,
  attributePath: React.PropTypes.string.isRequired,
  idField: React.PropTypes.string.isRequired,
  primaryField: React.PropTypes.string.isRequired,
  secondaryField: React.PropTypes.string.isRequired,
  vettedField: React.PropTypes.string,
  media: React.PropTypes.shape({
    type: React.PropTypes.string,
    field: React.PropTypes.string
  }),
  thumbnailUrlPrepend: React.PropTypes.string,
  thumbnailUrlAppend: React.PropTypes.string,
  layer: React.PropTypes.oneOfType([
    React.PropTypes.shape({
      url: React.PropTypes.string,
      credential: React.PropTypes.shape({
        server: React.PropTypes.string,
        token: React.PropTypes.string
      })
    }),
    React.PropTypes.bool
  ])
};

SelectedShares.defaultProps = {
  feature: {
    attributes: {}
  },
  displayOrder: [],
  thumbnailUrlPrepend: '',
  thumbnailUrlAppend: '',
  reviewEnabled: false,
  approveAction: () => {},
  rejectAction: () => {}
};
