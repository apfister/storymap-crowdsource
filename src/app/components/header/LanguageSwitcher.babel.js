import $ from 'jquery';
import React from 'react';
import viewerText from 'i18n!translations/viewer/nls/template';

export const LanguageSwitcher = class LanguageSwitcher extends React.Component {

  constructor(props) {
    super(props);
  }

  onChange(e) {
    const lang = e.target.value;

    if (lang === 'en') {
      window.location = window.location.origin + '/index.html';
    } else if (window.location.search && window.location.search !== '') {
      const newUrl = window.location.origin + '/index.html?locale=' + lang;

      window.location = newUrl;
    } else {
      window.location = window.location.href + '?locale=' + lang;
    }
  }

  render() {

    const languages = this.props.supportedLanguages;

    if (languages &&
        languages.length === 1 &&
        languages[0].code === 'en') {

      return null;
    }

    const vt = viewerText;

    const livingArchiveText = viewerText.livingArchive;

    const classNames = 'lang-select form-control center-block';

    let locale = 'en';

    let foundLanguage = languages[0];

    if (window.location.search && window.location.search !== '') {

      const inLocale = window.location.search.substr(window.location.search.indexOf('=')+1);

      foundLanguage = languages.filter((lang) => {
        if (lang.code === inLocale) {
          return true;
        }
      })[0];

      if (!foundLanguage) {
        foundLanguage = languages[0];
      }

    }

    $('.lang-select option').filter(
      (indx,item) => {
        return $(item).text() === foundLanguage.label;
      }).prop('selected', true);

    return (
      <select
        onChange={this.onChange}
        className={classNames}>
          {this.props.supportedLanguages.map( (item) => {
            return <option key={item.code} value={item.code}>{item.label}</option>;
          }) }

      </select>
    );
  }
};

export default LanguageSwitcher;
