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
        const fieldClasses = Helper.classnames(['field-display', 'field-' + current]);
        const fieldProps = this.props.fields[current];

        if (fieldProps && (fieldProps.type === 'textarea' || fieldProps.type === 'text') ) {

          if (current === 'OPEN_INPUT_CONNECT_TWITTER') {
            let txt = attributes[current];

            if (txt && txt !== '') {
              txt = `<p style="font-size:smaller;margin-bottom: 2px;color: rgba(102, 102, 102, 0.6);">Connect with us on Twitter</p> ${txt}`;
            }

            return (<Autolinker key={current} className={fieldClasses} text={txt}></Autolinker>);

          } else if (current === 'OPEN_INPUT_SHARE') {
            let txt = attributes[current];

            if (txt && txt !== '') {
              txt = `<p style="font-size:smaller;margin-bottom: 2px;color: rgba(102, 102, 102, 0.6);">I'd like to share</p> ${txt}`;
            }

            return (<Autolinker key={current} className={fieldClasses} text={txt}></Autolinker>);

          }

          return (<Autolinker key={current} className={fieldClasses} text={attributes[current]}></Autolinker>);
        } else {
          if (current === 'LESSON_SDG_GOAL') {
            let txt = attributes[current];

            if (txt && txt !== '') {
              txt = `<p style="font-size:smaller;margin-bottom: 2px;color: rgba(102, 102, 102, 0.6);">Our Lesson was about</p> ${txt}`;
            }

            return (<Autolinker key={current} className={fieldClasses} text={txt}></Autolinker>);
          }

          return (<p key={current} className={fieldClasses}>{attributes[current]}</p>);
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
