import $ from 'jquery';
import React from 'react'; // eslint-disable-line no-unused-vars
import Helper from 'babel/utils/helper/Helper';
import IconTooltip from 'babel/components/helper/tooltip/IconTooltip';
import FormGroup from 'babel/components/forms/base/FormGroup';
import 'babel/utils/helper/strings/StringUtils';

export default class RadioInput extends FormGroup {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.input = {
      value: this.props.defaultValue
    };

    $('input[type=radio][name=studentRepresentingClassSize]').change( function () {
      if (this.id === 'rdoGroup') {
        $('#txtStudentRepresentingClassSize').prop('disabled', false);
      } else {
        $('#txtStudentRepresentingClassSize').prop('disabled', true);
      }
    });

    super.componentDidMount();
  }

  onChange(e) {
    this.input.value = e.target.value;

    const selectedValue = e.target.value;

    const name = e.target.name;

    if (name === 'EDUCATOR_STUDENT') {
      if (selectedValue === 'Educator') {
        $('.stu-role').hide();
        $('.edu-role').show();

      } else {
        $('.edu-role').hide();
        $('.stu-role').show();
      }
    }

    console.log(name);

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

    const inputClasses = Helper.classnames([this.props.className,'yesno-group','form-group',{
      'required': this.props.required,
      'has-error': !this.state.isValid
    }]);

    return (
      <div className={inputClasses}>
        <label htmlFor={this.props.id} className="control-label">{this.props.label}</label>
        {this.props.tooltip ? <IconTooltip className="form-tooltip" {...this.props.tooltip} /> : null}
          <div className="holder">
          {this.props.options.map((current) => {
            // const id = (this.props.id + current.value + '').toCamelCase();
            const id = this.props.id + '_' + current.value;

            return (
              <div className="radio yesno-group" key={id}>
                <label htmlFor={id}>
                  <input
                    type="radio"
                    name={this.props.id}
                    id={id}
                    value={current.value}
                    checked={current.value === this.props.defaultValue ? 'checked' : null}
                    onChange={this.onChange}
                    onBlur={this.onBlur} />

                    <i className={current.imageClass}></i>

                    <div className="yesno-label">{current.label || current.value}</div>

                </label>
              </div>
            );
          })}
          </div>
          <div className="edu-role">
            <label id="lblEducatorRole" htmlFor="selEduRole">What is Your Role as an Educator?</label>
            <select id="selEduRole">
              <option value="Professional Educator">Professional Educator</option>
              <option value="Youth Group Leader">Youth Group Leader</option>
              <option value="Young Person (Peer Educator)">Young Person (Peer Educator)</option>
              <option value="Civil Society Volunteer">Civil Society Volunteer</option>
              <option value="Other">Other</option>
            </select>
            <br />
            <div className="edu-num-students">
              <label id="lblEduNumStudents" htmlFor="txtEduNumStudents">How Many Students Have you Shared the Goals With?</label>
              <br />
              <input id="txtEduNumStudents" placeholder="5" className="form-control" />
            </div>
            <br />
            <div className="edu-class-age-range">
              <label id="lblSelClassAgeRange">Select Your Class Age Range</label>
              <br />
              <select id="selClassAgeRange">
                <option value="0 - 11">0 - 11</option>
                <option value="12 - 15">12 - 15</option>
                <option value="16 +">16 +</option>
              </select>
            </div>
          </div>
          <div className="stu-role">
            <label id="lblEducatorRole" htmlFor="rdoIndividual">As a Student, are you </label>
            <br />
            <input id="rdoIndividual" name="studentRepresentingClassSize" type="radio" value="Individual" />
            <label htmlFor="rdoIndividual"> An Individual</label>
            <br />
            <input id="rdoGroup" name="studentRepresentingClassSize" type="radio" value="Class, School, or Group" />
            <label htmlFor="rdoGroup"> Representing a Class, School, or Group of</label>
            <br />
            <input type="text" id="txtStudentRepresentingClassSize" disabled className="form-control" />
            <br />
            <label> Select Your Age Range</label>
            <br />
            <select id="selStudentClassAgeRange">
              <option value="0 - 11">0 - 11</option>
              <option value="12 - 15">12 - 15</option>
              <option value="16 +">16 +</option>
            </select>
          </div>
          {this.getErrorMessage ? this.getErrorMessage() : null}
      </div>
    );
  }
}

$.extend(true,RadioInput.propTypes,{
  options: React.PropTypes.array
});

$.extend(true,RadioInput.defaultProps,{
  options: []
});
