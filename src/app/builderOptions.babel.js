import builderText from 'i18n!translations/builder/nls/template';

export const featureServiceDefaults = {
  basic: {
    fieldSettings: [{
      required: true,
      type: 'photo',
      fieldID: 'PrimaryPhoto',
      label: builderText.contribute.defaultForm.photo.label,
      placeholder: builderText.contribute.defaultForm.photo.placeholder,
      attributeName: builderText.contribute.defaultForm.photo.attribute,
      isAttachment: true,
      validations: ['required'],
      extras: {
        dataType: 'photo',
        photoSettings: [{
          name: 'PrimaryPhoto',
          smallestSide: 1000
        },{
          name: 'PrimaryThumbnail',
          height: 200,
          width: 200
        }]
      }
    },
    {
      required: true,
      type: 'text',
      fieldID: 'NAME_ORG',
      label: builderText.contribute.defaultForm.name_org.label,
      attributeName: builderText.contribute.defaultForm.name_org.attribute,
      placeholder: builderText.contribute.defaultForm.name_org.placeholder,
      validations: ['required']
    },{
      required: true,
      type: 'location',
      fieldID: 'LocationName',
      label: builderText.contribute.defaultForm.location.label,
      attributeName: builderText.contribute.defaultForm.location.attribute,
      placeholder: builderText.contribute.defaultForm.location.placeholder,
      validations: ['required'],
      extras: {
        dataType: 'location',
        storeGeometry: true
      }
    },
    {
      required: true,
      type: 'dropdown',
      fieldID: 'goal',
      label: 'Goal',
      attributeName: 'goal',
      placeholder: 'Select your goal',
      validations: ['required'],
      options: [
        { value: 1, label: 'Goal 1' },
        { value: 2, label: 'Goal 2' },
        { value: 3, label: 'Goal 3' },
        { value: 4, label: 'Goal 4' },
        { value: 5, label: 'Goal 5' },
        { value: 6, label: 'Goal 6' },
        { value: 7, label: 'Goal 7' },
        { value: 8, label: 'Goal 8' },
        { value: 9, label: 'Goal 9' },
        { value: 10, label: 'Goal 10' },
        { value: 11, label: 'Goal 11' },
        { value: 12, label: 'Goal 12' },
        { value: 13, label: 'Goal 13' },
        { value: 14, label: 'Goal 14' },
        { value: 15, label: 'Goal 15' },
        { value: 16, label: 'Goal 16' },
        { value: 17, label: 'Goal 17' },
        { value: 18, label: 'All' }
      ]
    },
    {
      required: true,
      type: 'textarea',
      fieldID: 'Why',
      label: 'Why?',
      attributeName: builderText.contribute.defaultForm.why.attribute,
      placeholder: builderText.contribute.defaultForm.why.placeholder,
      validations: ['required', 'arcgisSupportedHtml']
    }]
  }
};

export default {
  featureServiceDefaults
};
