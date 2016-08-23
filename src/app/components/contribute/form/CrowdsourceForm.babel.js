import $ from 'jquery';
import React from 'react';
import Helper from 'babel/utils/helper/Helper';
import Input from 'babel/components/forms/input/Input';
import Textarea from 'babel/components/forms/textarea/Textarea';
import Location from 'babel/components/forms/location/Location';
import RadioImageGroup from 'babel/components/forms/radioImageGroup/RadioImageGroup';
import SubmitterTypeRadioGroup from 'babel/components/forms/submitterTypeRadioGroup/SubmitterTypeRadioGroup';
import SubmitterTypeInput from 'babel/components/forms/submitterTypeInput/SubmitterTypeInput';
import Photo from 'babel/components/forms/photo/Photo';
import Select from 'babel/components/forms/select/Select';
import TermsAndConditions from 'babel/components/forms/termsAndConditions/TermsAndConditions';
import ViewerText from 'i18n!translations/viewer/nls/template';
import 'bootstrap/transition';

export default class CrowdsourceForm extends React.Component {

  constructor(props) {
    super(props);

    this._formId = 'VIEWER_CONTRIBUTE_MAIN';

    this.state = {
      isValid: false
    };

    this.formItemStatus = {};
    this.graphic = {
      attributes: {}
    };

    // Add visible and non-vetted values by default
    this.graphic.attributes[this.props.vettedField] = 0;
    this.graphic.attributes[this.props.hiddenField] = 0;

    this.changedCompareString = JSON.stringify(this.graphic);

    this.onSave = this.onSave.bind(this);
    this.onClose = this.onClose.bind(this);
    this.getFormField = this.getFormField.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  render() {
    const termsOptions = {
      formId: this._formId,
      id: 'termsAndCondtions',
      label: ViewerText.contribute.form.termsAndConditions.label,
      terms: this.props.termsAndConditions,
      inputAttr: {
        type: 'checkbox'
      }
    };

    const saveBtnClasses = Helper.classnames(['btn','btn-success','btn-block','save-btn'], {
      disabled: !this.state.isValid || this.props.saving
    });

    const closeBtnClasses = Helper.classnames(['btn','btn-primary','btn-block','close-btn']);

    return (
      <div className="row ratio-padder">
        <div className="close-button-wrapper">
          <button type="button" className="close" aria-label="Close" onClick={this.onClose}>
            <span aria-hidden="true" dangerouslySetInnerHTML={{__html: '&times;'}}></span>
          </button>
        </div>
        <div className="col-xs-12">
          <h3 className="form-title">{this.props.title}</h3>
          <form onSubmit={(e) => {
              e.preventDefault();
            }}>
          {this.props.fields.map(this.getFormField)}
            <TermsAndConditions {...termsOptions}></TermsAndConditions>
          </form>
          <button type="button" className={saveBtnClasses} onClick={this.onSave}>
            {this.props.saving ? ViewerText.common.buttons.saving : ViewerText.contribute.form.save}
          </button>
          <button type="button" className={closeBtnClasses} onClick={this.onClose}>
            { ViewerText.common.buttons.close }
          </button>
          <p className="required-warning"><small>{ViewerText.contribute.form.requiredWarning}</small></p>
        </div>
      </div>
    );
  }

  onSave() {
    if (!this.props.saving && this.state.isValid) {
      this.props.saveAction(this.graphic);
    }
  }

  onClose() {
    // TODO make a nicer confirm dialog
    if (JSON.stringify(this.graphic) === this.changedCompareString) {
      this.props.closeAction();
    } else {
      const confirmed = confirm(ViewerText.contribute.form.changedCloseWarning); //eslint-disable-line no-alert

      if (confirmed) {
        this.props.closeAction();
      }
    }
  }

  getFieldDefinitionValue(name,key) {
    let value;

    this.props.fieldDefinitions.map((current) => {
      if (current.name === name && current[key]) {
        value = current[key];
      }
    });

    return value;
  }

  getFormField(field,index) {

    // skip showing the actual Photo picker. don't need it
    if (field.type === 'photo') {
      return '';
    }

    const self = this;

    if (this.formItemStatus[field.fieldID] === undefined) {
      this.formItemStatus[field.fieldID] = false;
    }

    const defaults = {
      contributing: true,
      required: field.required,
      formId: this._formId,
      id: field.fieldID,
      key: index,
      label: field.label,
      attribute: field.attributeName,
      validations: field.validations,
      extras: field.extras,
      handleChange: function(res) {
        if (res.valid){
          if (field.extras && field.extras.dataType) {
            switch (field.extras.dataType) {
              case 'photo':
                if (typeof res.value === 'object') {
                  Object.keys(res.value).forEach((currentVal) => {
                    const value = {
                      attachment: true,
                      type: 'photo',
                      ext: res.value[currentVal].ext,
                      source: res.value[currentVal].source
                    };

                    self.graphic.attributes[currentVal] = value;
                  });
                }
                break;
              case 'location':
                if (res.value.dataVal && res.value.dataVal.name) {
                  self.graphic.attributes[field.fieldID] = res.value.dataVal.name;
                }
                if (field.extras.storeGeometry && res.value.dataVal && res.value.dataVal.geometry) {
                  self.graphic.geometry = res.value.dataVal.geometry;
                }
                break;
            }
          } else if (res.value && !res.value.inputVal) {
            self.graphic.attributes[field.fieldID] = res.value;
          }
        }
        self.handleFieldChange(field.fieldID,res.valid);
      }
    };

    if (field.type === 'text' || field.type === 'textarea' || field.type === 'location' || field.type === 'select') {
      const maxLength = this.getFieldDefinitionValue(field.fieldID,'length');
      const options = {
        inputAttr: {
          type: field.type,
          placeholder: field.placeholder,
          maxLength
        }
      };

      const settings = $.extend(true,{},defaults,options);

      switch (field.type) {
        case 'textarea':
          return <Textarea {...settings}></Textarea>;
        case 'location':
          return <Location map={this.props.map} {...settings}></Location>;
        case 'select':
          settings.options = field.options || [];

          return <Select {...settings}></Select>;
        default:
          return <Input {...settings}></Input>;
        }
    } else if (field.type === 'photo') {
      const options = {
        placeholder: field.placeholder
      };

      const settings = $.extend(true,{},defaults,options);

      settings.validations = [];

      return <Photo {...settings}></Photo>;
    } else if (field.type === 'radio-image-group') {

      const options = {
        options: field.options
      };

      const settings = $.extend(true,{},defaults,options);

      settings.validations = [];

      return <RadioImageGroup {...settings}></RadioImageGroup>;
    } else if (field.type === 'submitter-type-radio-group') {
      const options = {
        options: field.options
      };

      const settings = $.extend(true,{},defaults,options);

      settings.validations = [];

      options.options.forEach(function (opt) {
        if (opt.withNumber) {
          let newDefaults = $.extend(true, {}, defaults, opt.withNumberSettings);
          newDefaults.id = opt.withNumberSettings.fieldID;
          newDefaults.attribute = opt.withNumberSettings.attributeName;
          delete newDefaults.label;
          newDefaults.inputAttr = { 
            placeholder: opt.withNumberSettings.placeholder || '', 
            disabled: 'disabled'
          };
          opt.withNumberSettings = newDefaults;
          // opt.withNumberSettings = $.extend(true, {}, newDefaults, opt.withNumberSettings);
        }
      }, this);

      return <SubmitterTypeRadioGroup {...settings}></SubmitterTypeRadioGroup>;
    } else if (field.type === 'submitter-type-input') {
      const options = {
        options: field.options
      };

      const settings = $.extend(true,{},defaults,options);

      settings.validations = [];

      return <SubmitterTypeInput {...settings}></SubmitterTypeInput>;
    }
  }

  handleFormChange(valid) {
    if (this.props.handleChange) {
      this.props.handleChange(valid);
    }
    this.setState({
      isValid: valid
    });
  }

  handleFieldChange(item,valid) {
    let formValid = true;

    this.formItemStatus[item] = valid;

    Object.keys(this.formItemStatus).forEach((current) => {
      if (current !== 'LOCAL_COMM_SPORTS_COACH' && 
          current !== 'LOCAL_COMM_RELIGIOUS_SPIRITUAL_LEADER' && 
          current !== 'NUMBER_IN_GROUP') {

        if (!this.formItemStatus[current]) {
          formValid = false;
        }
      }
    });

    this.handleFormChange(formValid);
  }
}

CrowdsourceForm.propTypes = {
  vettedField: React.PropTypes.string,
  hiddenField: React.PropTypes.string,
  title: React.PropTypes.string,
  fields: React.PropTypes.array,
  fieldDefinitions: React.PropTypes.array,
  map: React.PropTypes.shape({}),
  saving: React.PropTypes.bool,
  closeAction: React.PropTypes.func,
  saveAction: React.PropTypes.func
};

CrowdsourceForm.defaultProps = {
  vettedField: 'Vetted',
  hiddenField: 'Hidden',
  title: '',
  fields: [],
  fieldDefinitions: [],
  map: {},
  saving: false,
  closeAction: () => {},
  saveAction: () => {}
};
