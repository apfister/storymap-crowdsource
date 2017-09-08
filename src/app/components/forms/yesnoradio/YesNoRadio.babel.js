import $ from 'jquery';
import React from 'react'; // eslint-disable-line no-unused-vars
import Helper from 'babel/utils/helper/Helper';
import IconTooltip from 'babel/components/helper/tooltip/IconTooltip';
import FormGroup from 'babel/components/forms/base/FormGroup';
import 'babel/utils/helper/strings/StringUtils';
import viewerText from 'i18n!translations/viewer/nls/template';

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

    super.onChange();
  }

  render() {

    const inputClasses = Helper.classnames([this.props.className,'yesno-group','form-group',{
      'required': this.props.required,
      'has-error': !this.state.isValid
    }]);

    const livingArchiveNls = viewerText.livingArchive;

    let educatorRole = this.props.subOptions.EDUCATOR_ROLE.label;

    let educatorRoleOpts = this.props.subOptions.EDUCATOR_ROLE.options;

    let eduNumStudents = this.props.subOptions.EDUCATOR_NUM_STUDENTS.label;

    let eduClassAgeRange = this.props.subOptions.EDUCATOR_CLASS_AGE_RANGE.label;

    let stuHeaderLabel = this.props.subOptions.STUDENT_INDIVIDUAL_CLASS.headerLabel;

    let stuRepOptions = this.props.subOptions.STUDENT_INDIVIDUAL_CLASS.options;

    let studentClassAgeRangeLabel = this.props.subOptions.STUDENT_INDIVIDUAL_CLASS.studentClassAgeRangeLabel;

    if (livingArchiveNls) {
      try {
        educatorRole = livingArchiveNls.form.fields.EDUCATOR_ROLE.label;
        educatorRoleOpts = livingArchiveNls.form.fields.EDUCATOR_ROLE.options;
        eduNumStudents = livingArchiveNls.form.fields.EDUCATOR_NUM_STUDENTS.label;
        eduClassAgeRange = livingArchiveNls.form.fields.EDUCATOR_CLASS_AGE_RANGE.label;
        stuHeaderLabel = livingArchiveNls.form.fields.STUDENT_INDIVIDUAL_CLASS.headerLabel;
        stuRepOptions = livingArchiveNls.form.fields.STUDENT_INDIVIDUAL_CLASS.options;
        studentClassAgeRangeLabel = livingArchiveNls.form.fields.STUDENT_INDIVIDUAL_CLASS.studentClassAgeRangeLabel;
      } catch (e) {
        console.log(e);
      }
    }

    return (
      <div className={inputClasses}>
        <label htmlFor={this.props.id} className="control-label">{this.props.label}</label>
        {this.props.tooltip ? <IconTooltip className="form-tooltip" {...this.props.tooltip} /> : null}
          <div className="holder">
          {this.props.options.map((current, index) => {

            const id = this.props.id + '_' + current.value;

            let lbl = current.label;

            if (livingArchiveNls) {
              try {
                lbl = livingArchiveNls.form.fields.EDUCATOR_STUDENT.options[index].label;
              } catch (e) {
                lbl = current.label;
              }
            }

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

                    <div className="yesno-label">{lbl || current.value}</div>

                </label>
              </div>
            );
          })}
          </div>
          <div className="edu-role">
            <label id="lblEducatorRole" htmlFor="selEduRole">{educatorRole}</label>
            <select id="selEduRole">
              { educatorRoleOpts.map( (opt) => {
                  return <option key={opt.value} value={opt.value}>{opt.label}</option>;
                })
              }
            </select>
            <br />
            <div className="edu-num-students">
              <label id="lblEduNumStudents" htmlFor="txtEduNumStudents">{eduNumStudents}</label>
              <br />
              <input id="txtEduNumStudents" placeholder="5" className="form-control" />
            </div>
            <br />
            <div className="edu-class-age-range">
              <label id="lblSelClassAgeRange">{eduClassAgeRange}</label>
              <br />
              <select id="selClassAgeRange">
                <option value="0 - 11">0 - 11</option>
                <option value="12 - 15">12 - 15</option>
                <option value="16 +">16 +</option>
              </select>
            </div>
          </div>
          <div className="stu-role">
            <label id="lblEducatorRole" htmlFor="rdoIndividual">{stuHeaderLabel}</label>
            <br />
            {
              stuRepOptions.map( (opt) => {
                const inputId = (opt.value === 'An Individual') ? 'rdoIndividual' : 'rdoGroup';

                const lblId = (opt.value === 'An Individual') ? 'lblIndividual' : 'lblGroup';

                const rando = Math.floor(Math.random() * 300) + 1;

                const holderKey = `holder_${rando}`;

                return (
                  <div key={holderKey}>
                    <input key={inputId} id={inputId} name="studentRepresentingClassSize" type="radio" value={opt.value} />
                    <label key={lblId} htmlFor={inputId}>{opt.label}</label>
                    <br />
                  </div>
                );
              })
            }

            <input type="text" id="txtStudentRepresentingClassSize" disabled className="form-control" />
            <br />
            <label>{studentClassAgeRangeLabel}</label>
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
