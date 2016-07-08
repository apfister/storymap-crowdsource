import builderText from 'i18n!translations/builder/nls/template';

export const featureServiceDefaults = {
  basic: {
    fieldSettings: [
    {
      required: true,
      type: 'text',
      fieldID: 'NAME',
      label: builderText.contribute.defaultForm.name.label,
      attributeName: builderText.contribute.defaultForm.name.attribute,
      placeholder: builderText.contribute.defaultForm.name.placeholder,
      validations: ['required','arcgisSupportedHtml']
    },{
      required: true,
      type: 'location',
      fieldID: 'LOCATION_NAME',
      label: builderText.contribute.defaultForm.location.label,
      attributeName: builderText.contribute.defaultForm.location.attribute,
      placeholder: builderText.contribute.defaultForm.location.placeholder,
      validations: ['required'],
      extras: {
        dataType: 'location',
        storeGeometry: true
      }
    },{
      required: true,
      type: 'radio-group',
      fieldID: 'NATL_POL_LEADER_PRIME_MINISTER',
      label: builderText.contribute.defaultForm.natl_pm.label,
      attributeName: builderText.contribute.defaultForm.natl_pm.attribute,
      placeholder: builderText.contribute.defaultForm.natl_pm.placeholder,
      validations: ['required'],
      options: [
        { value: 'Male' },
        { value: 'Female' }
      ]
    }]
  }
};

export default {
  featureServiceDefaults
};
