import React from 'react';
import Helper from 'babel/utils/helper/Helper';
import ShareButtonMy from 'babel/components/helper/sharing/ShareButtonMy';

export const ShareButtonPaneMy = class ShareButtonPaneMy extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const shareClass = Helper.classnames([this.props.className, {
      'sharing-buttons': true
    }]);
    // const facebookBtn = this.props.config.services.facebook ? <ShareButtonMy type="facebook" appId={this.props.config.appIds.facebook} /> : null;
    const twitProps = {
      text: this.props.config.text,
      related: this.props.config.related,
      url: this.props.config.url
    };
    const twitterBtn = <ShareButtonMy type="twitterMyShare" config={twitProps} />;
    // const linkBtn = this.props.config.services.link ? <ShareButtonMy type="link" shareLinkAction={this.props.config.shareLinkAction} /> : null;

    return (
      <span className={shareClass}>
        {twitterBtn}
      </span>
    );
  }
};

ShareButtonPaneMy.propTypes = {
  config: React.PropTypes.shape({
    services: React.PropTypes.shape({
      facebook: React.PropTypes.bool,
      twitter: React.PropTypes.bool,
      twitterMyShare: React.PropTypes.bool,
      link: React.PropTypes.bool
    }),
    appIds: React.PropTypes.shape({
      facebook: React.PropTypes.string
    }),
    twitter: React.PropTypes.shape({
      hashtags: React.PropTypes.string,
      text: React.PropTypes.string,
      twitterHandle: React.PropTypes.string
    }),
    twitterMyShare: React.PropTypes.shape({
      hashtags: React.PropTypes.string,
      text: React.PropTypes.string,
      twitterHandle: React.PropTypes.string
    })
  })
};

ShareButtonPaneMy.defaultProps = {
  config: {
    services: {
      facebook: false,
      twitter: false,
      twitterMyShare: true,
      link: false
    }
  }
};

export default ShareButtonPaneMy;
