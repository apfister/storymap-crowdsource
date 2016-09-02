import $ from 'jquery';
import React from 'react';
import Helper from 'babel/utils/helper/Helper';
import {getIcon} from 'babel/utils/helper/icons/IconGenerator';
import viewerText from 'i18n!translations/viewer/nls/template';

const titleAttrText = viewerText.sharing.buttonTitleAttr;

export const ShareButtonMy = class ShareButtonMy extends React.Component {

  constructor(props) {
    super(props);

    // Autobind methods
    this.shareFacebook = this.shareFacebook.bind(this);
  }

  render() {

    // const shareClass = Helper.classnames(
    //   [ (this.props.className === 'twitterMyShare') ? 'twitter' : this.props.className, 
    //     (this.props.type === 'twitterMyShare') ? 'twitter' : this.props.type, {
    //   'share': true,
    //   'share-btn': true,
    //   'text-btn': true
    // }]);
    
    const shareClass = Helper.classnames([this.props.className, this.props.type, {
      'share': true,
      'share-btn': true,
      'text-btn': false,
      'btn': true,
      'btn-default': true,
      'share-my': true
    }]);

    let icon = '';

    if (this.props.type === 'twitterMyShare') {
      icon = getIcon('twitter');
    } else {
      icon = getIcon(this.props.type);
    }
    
    const iconHtml = {
      __html: icon + ' Share on Twitter'
    };

    return (
      <button className={shareClass} dangerouslySetInnerHTML={iconHtml} title={titleAttrText[this.props.type]} onClick={this.onShare.bind(this,this.props.type)}></button>
    );
  }

  onShare(type) {
    switch (type) {
      case 'facebook':
        this.shareFacebook();
        break;
      case 'twitter':
        this.shareTwitter();
        break;
      case 'twitterMyShare':
        this.shareTwitterMyShare();
        break;
      case 'link':
        this.props.shareLinkAction();
        break;
    }
  }

  shareFacebook() {
    const urlParams = {
      app_id: this.props.appId, // eslint-disable-line camelcase
      display: 'popup',
      href: Helper.getSharingUrl()
    };

    window.open('https://www.facebook.com/dialog/share?' + $.param(urlParams),'_blank','toolbar=0,status=0,width=626,height=436');
  }

  shareInstagram() {

  }

  shareTwitter() {
    const urlParams = {
      text: this.props.twitter.text,
      related: this.props.twitter.related,
      url: Helper.getSharingUrl()
    };

    if (this.props.twitter.hashtags && this.props.twitter.hashtags.length > 0) {
      urlParams.hashtags = this.props.twitter.hashtags;
    }
    if (this.props.twitter.twitterHandle && this.props.twitter.twitterHandle.length > 0) {
      urlParams.via = this.props.twitter.twitterHandle.search('@') === 0 ? this.props.twitter.twitterHandle.slice(1) : this.props.twitter.twitterHandle;
    }

    window.open('https://twitter.com/intent/tweet?' + $.param(urlParams),'_blank','toolbar=0,status=0,width=550,height=420');
  }

  shareTwitterMyShare() {
    const myCountry = window.selectedCountry;

    let inText = this.props.config.text;

    const finalText = inText.templateString({ 
      templates: [
        { string: '${myCountry}', replace: myCountry.replace(/ /g, '') },
        { string: '${myRatio}', replace: window.myRatio }
      ] 
    });

    const urlParams = {
      text: finalText,
      related: this.props.config.related,
      url: this.props.config.url
    };

    if (this.props.config.hashtags && this.props.config.hashtags.length > 0) {
      urlParams.hashtags = this.props.config.hashtags;
    }
    if (this.props.config.twitterHandle && this.props.config.twitterHandle.length > 0) {
      urlParams.via = this.props.config.twitterHandle.search('@') === 0 ? this.props.config.twitterHandle.slice(1) : this.props.config.twitterHandle;
    }

    window.open('https://twitter.com/intent/tweet?' + $.param(urlParams),'_blank','toolbar=0,status=0,width=550,height=420');
  }

  get sharingUrl() {

  }

};

ShareButtonMy.propTypes = {
  type: React.PropTypes.string,
  appId: React.PropTypes.string,
  twitter: React.PropTypes.shape({
    hashtags: React.PropTypes.string,
    related: React.PropTypes.string,
    text: React.PropTypes.string,
    twitterHandle: React.PropTypes.string
  }),
  shareLinkAction: React.PropTypes.func
};

ShareButtonMy.defaultProps = {
  type: 'link',
  appId: 'false',
  shareLinkAction: () => {}
};

export default ShareButtonMy;
