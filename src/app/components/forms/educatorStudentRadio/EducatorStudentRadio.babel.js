import $ from 'jquery';
import React from 'react'; // eslint-disable-line no-unused-vars
import Helper from 'babel/utils/helper/Helper';
import IconTooltip from 'babel/components/helper/tooltip/IconTooltip';
import FormGroup from 'babel/components/forms/base/FormGroup';
import 'babel/utils/helper/strings/StringUtils';

export default class EducatorStudentRadio extends FormGroup {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.input = {
      value: this.props.defaultValue
    };
    super.componentDidMount();
  }

  onChange(e) {
    this.input.value = e.target.value;

    // if (e.target.name !== 'GENDER') {
    //   const ratioKeeper = window.ratioKeeper;
    //
    //   ratioKeeper[this.props.id] = e.target.value;
    //
    //   window.doRatioUpdate();
    // }

    super.onChange();
  }

  render() {

    const inputClasses = Helper.classnames([this.props.className,'form-group', 'edu-selector',{
      'required': this.props.required,
      'has-error': !this.state.isValid
    }]);

    return (
      <div className={inputClasses}>
        <label htmlFor={this.props.id} className="control-label">{this.props.label}</label>
        {this.props.tooltip ? <IconTooltip className="form-tooltip" {...this.props.tooltip} /> : null}

        <div className="holder">
          { this.props.options.map((current) => {
            const id = (this.props.id + current.value + '').toCamelCase();

            const labelClassName = 'holder-label ' + current.labelClass;

            return (
              <div className="radio edu-radio" key={id}>
                <input
                  checked={current.value === this.props.defaultValue ? 'checked' : null}
                  id={id}
                  type="radio"
                  name={this.props.id}
                  value={current.value}
                   />

                <label className={labelClassName} htmlFor="">{current.label || current.value}</label>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

$.extend(true,EducatorStudentRadio.propTypes,{
  options: React.PropTypes.array
});

$.extend(true,EducatorStudentRadio.defaultProps,{
  options: []
});
