import $ from 'jquery';
import 'babel/utils/jquery/JqueryUtils';
import React from 'react';
import ReactDOM from 'reactDom';
import Helper from 'babel/utils/helper/Helper';

export const VideoLoader = class VideoLoader extends React.Component {

  constructor(props) {
    super(props);

    this.checkVisible = this.checkVisible.bind(this);

    this.state = {
      visible: false,
      loaded: false,
      height: false,
      width: false
    };
  }

  componentDidMount() {
    this.markAsLoaded = (width,height) => {
      this.setState({
        loaded: true,
        height,
        width
      });
      this.props.onLoad();
    };

    this._scrollableParents = $(ReactDOM.findDOMNode(this)).parents().filter(function(){
      return $(this).isScrollable();
    });

    this._scrollableParents.on('scroll', this.checkVisible);
    this.checkVisible();
  }

  componentDidUpdate() {
    if (!this.state.visible) {
      this.checkVisible();
    }
  }

  componentWillUnmount() {
    this.onVisible();

    this.markAsLoaded = () => {};
  }

  onVisible() {
    this._scrollableParents.off('scroll', this.checkVisible);
  }

  checkVisible() {
    const threshold = this.props.threshold;
    const bounds = ReactDOM.findDOMNode(this).getBoundingClientRect();
    const scrollTop = window.pageYOffset;
    const top = bounds.top + scrollTop;
    const height = bounds.bottom - bounds.top;

    if (top === 0 || (top <= (scrollTop + window.innerHeight + threshold)
                      && (top + height) > (scrollTop - threshold))) {

      // const preload = new Image();

      // preload.onerror = () => {
      //   this.props.onError();
      // };
      // preload.onload = () => {
      //   this.markAsLoaded(preload.width,preload.height);
      // };
      // preload.src = this.props.src;

      this.markAsLoaded(480,360);

      this.setState({ visible: true });
      this.onVisible();
    }
  }
  render() {

    return (
      <div className="media-section">
        <video autoPlay controls onCanPlay={this.props.onCanPlay.bind(this, true)} onError={this.props.onError.bind(this, false)}>
          <source src={this.props.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );

  }

};

VideoLoader.propTypes = {
  autoSizeDiv: React.PropTypes.bool,
  scrollContainers: React.PropTypes.array,
  src: React.PropTypes.string,
  style: React.PropTypes.shape({
    backgroundPosition: React.PropTypes.string,
    backgroundRepeat: React.PropTypes.string,
    backgroundSize: React.PropTypes.string
  }),
  threshold: React.PropTypes.number,
  onLoad: React.PropTypes.func,
  onError: React.PropTypes.func
};

VideoLoader.defaultProps = {
  autoSizeDiv: false,
  scrollContainers: [],
  src: '',
  style: {},
  threshold: 200,
  onLoad: () => {},
  onError: () => {}
};

export default VideoLoader;
