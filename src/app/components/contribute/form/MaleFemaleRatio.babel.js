import $ from 'jquery';
import React from 'react';
// import Helper from 'babel/utils/helper/Helper';
// import Input from 'babel/components/forms/input/Input';
// import Textarea from 'babel/components/forms/textarea/Textarea';
// import Location from 'babel/components/forms/location/Location';
// import RadioImageGroup from 'babel/components/forms/radioImageGroup/RadioImageGroup';
// import Photo from 'babel/components/forms/photo/Photo';
// import TermsAndConditions from 'babel/components/forms/termsAndConditions/TermsAndConditions';
// import ViewerText from 'i18n!translations/viewer/nls/template';
import 'bootstrap/transition';

export default class MaleFemaleRatio extends React.Component {
  
  constructor(props) {
    super(props);
  }

  componentDidMount() {

    // set width of container
    $('.ratio-holder').outerWidth( $('.contribute-panel').outerWidth() );

    window.ratioKeeper = {};
    window.doRatioUpdate = function () {
      let counter = 0, female = 0, male = 0;

      let femaleRatio = 0, maleRatio = 0;

      for (let key in window.ratioKeeper) { 
        const val = window.ratioKeeper[key];

        if (val === 'Male') {
          male++;
        } else if (val === 'Female') {
          female++;
        }
        counter++; 
      }

      maleRatio = Math.round( (male / counter) * 100 );
      femaleRatio = Math.round( (female / counter) * 100 );

      $('.ratio .male label').text(maleRatio);
      $('.ratio .female label').text(femaleRatio);

      // do some math to adjust for scale 3 - 15
      // found a sample using this method for using custom slide ranges @ https://github.com/tovic/simple-custom-range-slider#examples
      const max = 10, min = 2;

      const maleEm = ((maleRatio/100)*(max-min)) + min;

      const femaleEm = ((femaleRatio/100)*(max-min)) + min;

      // adjust the icon size
      $('.man').animate({fontSize: maleEm + 'em'});
      $('.woman').animate({fontSize: femaleEm + 'em'});
    };
  }

  render() {
    return (
      <div className="row ratio-row">
        <div className="col-xs-12 ratio-col">
          <div className="ratio-holder">
            <h3 className="ratio-title">View Your Ratio</h3>
            <div className="background">
              <div className="left-side">
                <i className="fa fa-female woman" aria-hidden="true"></i>
              </div>
              <div className="right-side">
                <i className="fa fa-male man" aria-hidden="true"></i>
              </div>
            </div>
            
            <div className="ratio">
              <div className="female">
                <label>0</label>
              </div>
              <div className="sep">
                :
              </div>
              <div className="male">
                <label>0</label>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }

}