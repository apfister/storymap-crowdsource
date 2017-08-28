import $ from 'jquery';
import React from 'react'; // eslint-disable-line no-unused-vars
import Helper from 'babel/utils/helper/Helper';
import FormGroup from 'babel/components/forms/base/FormGroup';
import Logger from 'babel/utils/logging/Logger';
import IconTooltip from 'babel/components/helper/tooltip/IconTooltip';
import ViewerText from 'i18n!translations/viewer/nls/template';

const formText = ViewerText.forms.select;

// const _logger = new Logger({
//   source: 'Select'
// });

// const _onError = function onError(err) {
//   _logger.logMessage({
//     type: 'error',
//     error: err
//   });
// };

export default class FoodProjectRating extends FormGroup {

  constructor(props) {
    super(props);

    this.state = {
      rating: 1
    };
  }

  componentDidMount() {
    this.input = {
      value: this.props.defaultValue
    };

    super.componentDidMount();
    window.ts = this.input;
  }

  onChange(e) {
    this.input.value = parseInt(e.target.value);

    const selectedValue = e.target.value;

    const name = e.target.name;

    // console.log(name, selectedValue);

    super.onChange();
  }

  render() {

    const inputClasses = Helper.classnames([this.props.className,'fp-group','form-group',{
      'required': false,
      'has-error': false
    }]);

    return (
      <div className={inputClasses}>
        <label htmlFor={this.props.id} className="control-label">{this.props.label}</label>
        {this.props.tooltip ? <IconTooltip className="form-tooltip" {...this.props.tooltip} /> : null}
          <div className="fp-selector" key={this.props.id}>
          {this.props.options.map((current) => {
            const id = 'fp-' + current.id;

            const value = current.value;

            const lblClassName = 'score-fp ' + id;

            return (
              <div className="score-fp-holder" key={id}>
                <input
                  id={id}
                  type="radio"
                  name="fp-score"
                  value={value}
                  checked={current.value === this.props.defaultValue ? 'checked' : null}
                  onChange={this.onChange} />

                <label
                  className={lblClassName}
                  htmlFor={id}>
                </label>
              </div>
            );
          })}
          </div>
          {this.getErrorMessage ? this.getErrorMessage() : null}
      </div>
    );
  }

}

$.extend(true,FoodProjectRating.propTypes,{
  noDefaultSelection: React.PropTypes.bool,
  options: React.PropTypes.array
});

$.extend(true,FoodProjectRating.defaultProps,{
  noDefaultSelection: false,
  options: []
});
