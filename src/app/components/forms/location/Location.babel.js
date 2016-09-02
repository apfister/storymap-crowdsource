import $ from 'jquery';
import React from 'react'; // eslint-disable-line no-unused-vars
import ReactDOM from 'reactDom';
import Geocoder from 'esri/dijit/Geocoder';
import LocateButton from 'esri/dijit/LocateButton';
import Locator from 'esri/tasks/locator';
import {getIcon} from 'babel/utils/helper/icons/IconGenerator';
import Helper from 'babel/utils/helper/Helper';
import Validator from 'babel/utils/validations/Validator';
import IconTooltip from 'babel/components/helper/tooltip/IconTooltip';
import FormGroup from 'babel/components/forms/base/FormGroup';
import ViewerText from 'i18n!translations/viewer/nls/template';

export default class Location extends FormGroup {

  constructor(props) {
    super(props);

    this.defaultValidations = ['location'];

    this.input = {
      value: false
    };
    this.locator = new Locator('//geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer');

    this.onSelect = this.onSelect.bind(this);
    this.onAutocomplete = this.onAutocomplete.bind(this);
    this.onClear = this.onClear.bind(this);
    this.onBlur = this.onBlur.bind(this);

    this.reverseGeocode = this.reverseGeocode.bind(this);
  }

  componentDidMount() {
    const geocoderNode = ReactDOM.findDOMNode(this.geocoderContainer);
    const locatorNode = ReactDOM.findDOMNode(this.locatorContainer);

    $(geocoderNode).append($('<div class="geocoder-container"></div>'));
    $(locatorNode).append($('<div class="locator-container"></div>'));

    this.geocoderContainer = $(geocoderNode).find('.geocoder-container');
    this.locatorContainer = $(locatorNode).find('.locator-container');

    this.geocoder = new Geocoder({
      autoComplete: true,
      highlightLocation: true,
      minCharacters: 1,
      map: this.props.map,
      theme: 'calcite-geocoder',
      arcgisGeocoder: {
        // categories: ['City', 'Subregion', 'Region', 'Country']
        categories: ['Populated Place'],
        outFields: 'Country'
      }
    },this.geocoderContainer[0]);

    this.countryStash = [{CountryName: 'Argentina', ThreeDigitCountryCode: 'ARG'}, {CountryName: 'Australia', ThreeDigitCountryCode: 'AUS'}, {CountryName: 'Austria', ThreeDigitCountryCode: 'AUT'}, {CountryName: 'Belgium', ThreeDigitCountryCode: 'BEL'}, {CountryName: 'Brazil', ThreeDigitCountryCode: 'BRA'}, {CountryName: 'Bulgaria', ThreeDigitCountryCode: 'BGR'}, {CountryName: 'Canada', ThreeDigitCountryCode: 'CAN'}, {CountryName: 'Chile', ThreeDigitCountryCode: 'CHL'}, {CountryName: 'Croatia', ThreeDigitCountryCode: 'HRV'}, {CountryName: 'Czech Republic', ThreeDigitCountryCode: 'CZE'}, {CountryName: 'Denmark', ThreeDigitCountryCode: 'DNK'}, {CountryName: 'Estonia', ThreeDigitCountryCode: 'EST'}, {CountryName: 'Finland', ThreeDigitCountryCode: 'FIN'}, {CountryName: 'France', ThreeDigitCountryCode: 'FRA'}, {CountryName: 'Germany', ThreeDigitCountryCode: 'DEU'}, {CountryName: 'Greece', ThreeDigitCountryCode: 'GRC'}, {CountryName: 'Guatemala', ThreeDigitCountryCode: 'GTM'}, {CountryName: 'Hong Kong', ThreeDigitCountryCode: 'HKG'}, {CountryName: 'Ireland', ThreeDigitCountryCode: 'IRL'}, {CountryName: 'Israel', ThreeDigitCountryCode: 'ISR'}, {CountryName: 'Italy', ThreeDigitCountryCode: 'ITA'}, {CountryName: 'Japan', ThreeDigitCountryCode: 'JPN'}, {CountryName: 'Latvia', ThreeDigitCountryCode: 'LVA'}, {CountryName: 'Liechtenstein', ThreeDigitCountryCode: 'LIE'}, {CountryName: 'Lithuania', ThreeDigitCountryCode: 'LTU'}, {CountryName: 'Luxembourg', ThreeDigitCountryCode: 'LUX'}, {CountryName: 'Malaysia', ThreeDigitCountryCode: 'MYS'}, {CountryName: 'Mexico', ThreeDigitCountryCode: 'MEX'}, {CountryName: 'Netherlands', ThreeDigitCountryCode: 'NLD'}, {CountryName: 'New Zealand', ThreeDigitCountryCode: 'NZL'}, {CountryName: 'Norway', ThreeDigitCountryCode: 'NOR'}, {CountryName: 'Poland', ThreeDigitCountryCode: 'POL'}, {CountryName: 'Portugal', ThreeDigitCountryCode: 'PRT'}, {CountryName: 'Puerto Rico', ThreeDigitCountryCode: 'PRI'}, {CountryName: 'Romania', ThreeDigitCountryCode: 'ROU'}, {CountryName: 'Russian Federation', ThreeDigitCountryCode: 'RUS'}, {CountryName: 'Singapore', ThreeDigitCountryCode: 'SGP'}, {CountryName: 'Slovak Republic', ThreeDigitCountryCode: 'SVK'}, {CountryName: 'Spain', ThreeDigitCountryCode: 'ESP'}, {CountryName: 'Suriname', ThreeDigitCountryCode: 'SUR'}, {CountryName: 'Sweden', ThreeDigitCountryCode: 'SWE'}, {CountryName: 'Switzerland', ThreeDigitCountryCode: 'CHE'}, {CountryName: 'Turkey', ThreeDigitCountryCode: 'TUR'}, {CountryName: 'United Kingdom', ThreeDigitCountryCode: 'GBR'}, {CountryName: 'United States', ThreeDigitCountryCode: 'USA'}, {CountryName: 'Uruguay', ThreeDigitCountryCode: 'URY'}, {CountryName: 'Andorra', ThreeDigitCountryCode: 'AND'}, {CountryName: 'Bahamas', ThreeDigitCountryCode: 'BHS'}, {CountryName: 'Bahrain', ThreeDigitCountryCode: 'BHR'}, {CountryName: 'Botswana', ThreeDigitCountryCode: 'BWA'}, {CountryName: 'Brunei Darussalam', ThreeDigitCountryCode: 'BRN'}, {CountryName: 'Cayman Islands', ThreeDigitCountryCode: 'CYM'}, {CountryName: 'China', ThreeDigitCountryCode: 'CHN'}, {CountryName: 'Colombia', ThreeDigitCountryCode: 'COL'}, {CountryName: 'Costa Rica', ThreeDigitCountryCode: 'CRI'}, {CountryName: 'French Guyana', ThreeDigitCountryCode: 'GUF'}, {CountryName: 'Gibraltar', ThreeDigitCountryCode: 'GIB'}, {CountryName: 'Guadeloupe', ThreeDigitCountryCode: 'GLP'}, {CountryName: 'Hungary', ThreeDigitCountryCode: 'HUN'}, {CountryName: 'Iceland', ThreeDigitCountryCode: 'ISL'}, {CountryName: 'India', ThreeDigitCountryCode: 'IND'}, {CountryName: 'Indonesia', ThreeDigitCountryCode: 'IDN'}, {CountryName: 'Jordan', ThreeDigitCountryCode: 'JOR'}, {CountryName: 'Kuwait', ThreeDigitCountryCode: 'KWT'}, {CountryName: 'Lebanon', ThreeDigitCountryCode: 'LBN'}, {CountryName: 'Macau', ThreeDigitCountryCode: 'MAC'}, {CountryName: 'Malta', ThreeDigitCountryCode: 'MLT'}, {CountryName: 'Martinique', ThreeDigitCountryCode: 'MTQ'}, {CountryName: 'Monaco', ThreeDigitCountryCode: 'MCO'}, {CountryName: 'Namibia', ThreeDigitCountryCode: 'NAM'}, {CountryName: 'Oman', ThreeDigitCountryCode: 'OMN'}, {CountryName: 'Panama', ThreeDigitCountryCode: 'PAN'}, {CountryName: 'Peru', ThreeDigitCountryCode: 'PER'}, {CountryName: 'Philippines', ThreeDigitCountryCode: 'PHL'}, {CountryName: 'Qatar', ThreeDigitCountryCode: 'QAT'}, {CountryName: 'Reunion', ThreeDigitCountryCode: 'REU'}, {CountryName: 'San Marino', ThreeDigitCountryCode: 'SMR'}, {CountryName: 'Saudi Arabia', ThreeDigitCountryCode: 'SAU'}, {CountryName: 'Slovenia', ThreeDigitCountryCode: 'SVN'}, {CountryName: 'South Africa', ThreeDigitCountryCode: 'ZAF'}, {CountryName: 'South Korea', ThreeDigitCountryCode: 'KOR'}, {CountryName: 'St. Barthelemy', ThreeDigitCountryCode: 'BLM'}, {CountryName: 'Thailand', ThreeDigitCountryCode: 'THA'}, {CountryName: 'United Arab Emirates', ThreeDigitCountryCode: 'ARE'}, {CountryName: 'US Virgin Islands', ThreeDigitCountryCode: 'VIR'}, {CountryName: 'Vatican City', ThreeDigitCountryCode: 'VAT'}, {CountryName: 'Albania', ThreeDigitCountryCode: 'ALB'}, {CountryName: 'Belarus', ThreeDigitCountryCode: 'BLR'}, {CountryName: 'Belize', ThreeDigitCountryCode: 'BLZ'}, {CountryName: 'Bosnia and Herzegovina', ThreeDigitCountryCode: 'BIH'}, {CountryName: 'Cambodia', ThreeDigitCountryCode: 'KHM'}, {CountryName: 'Egypt', ThreeDigitCountryCode: 'EGY'}, {CountryName: 'Guam', ThreeDigitCountryCode: 'GUM'}, {CountryName: 'Kazakhstan', ThreeDigitCountryCode: 'KAZ'}, {CountryName: 'Kenya', ThreeDigitCountryCode: 'KEN'}, {CountryName: 'Kosovo', ThreeDigitCountryCode: 'RKS'}, {CountryName: 'Lesotho', ThreeDigitCountryCode: 'LSO'}, {CountryName: 'Macedonia', ThreeDigitCountryCode: 'MKD'}, {CountryName: 'Moldova', ThreeDigitCountryCode: 'MDA'}, {CountryName: 'Montenegro', ThreeDigitCountryCode: 'MNE'}, {CountryName: 'Morocco', ThreeDigitCountryCode: 'MAR'}, {CountryName: 'Mozambique', ThreeDigitCountryCode: 'MOZ'}, {CountryName: 'Nigeria', ThreeDigitCountryCode: 'NGA'}, {CountryName: 'Serbia', ThreeDigitCountryCode: 'SRB'}, {CountryName: 'Swaziland', ThreeDigitCountryCode: 'SWZ'}, {CountryName: 'Taiwan', ThreeDigitCountryCode: 'TWN'}, {CountryName: 'Ukraine', ThreeDigitCountryCode: 'UKR'}, {CountryName: 'Venezuela', ThreeDigitCountryCode: 'VEN'}, {CountryName: 'Vietnam', ThreeDigitCountryCode: 'VNM'} ];

    this.locateButton = new LocateButton({
      map: this.props.map,
      theme: 'calcite-locate'
    },this.locatorContainer[0]);

    this.locatorContainer = $(locatorNode).find('.calcite-locate');
    this.locatorContainer.find('.zoomLocateButton').addClass('btn btn-default btn-sm').html('<div class="locator-icon">\
      <img class="loading-gif" src="resources/images/loader-light.gif" alt="' + ViewerText.contribute.form.location.gettingLocation + '">' + getIcon('location') + '</div>\
      <span class="locating-text">' + ViewerText.contribute.form.location.gettingLocation + '\</span>\
      <span class="locate-text">' + ViewerText.contribute.form.location.locate + '\</span>');

    this.geocoderSeachButton = $(geocoderNode).find('.esriGeocoderSearch');
    this.geocoderSeachButton.attr('tabindex',-1);

    this.geocoderResetButton = $(geocoderNode).find('.esriGeocoderReset');
    this.geocoderResetButton.attr('tabindex',-1);

    this.geocoderInput = $(geocoderNode).find('input');
    this.geocoderInput.addClass('form-control');
    this.geocoderInput.attr('id',this.props.id);

    this.geocoderAutocomplete = $(geocoderNode).find('.esriGeocoderResults');
    this.geocoderAutocomplete.addClass('form-control');

    this.locateButton.on('locate',this.reverseGeocode);
    this.locatorContainer.on('keypress',(e) => {
      if (e.which === 13) {
        this.locateButton.locate();
      }
    });

    this.addInputAttributes();

    this.validator = new Validator({
      validations: this.getValidations(),
      attribute: this.props.attribute || this.props.label
    });

    this.geocoder.on('auto-complete',this.onAutocomplete);
    this.geocoder.on('clear',this.onClear);
    this.geocoder.on('select',this.onSelect);
    this.geocoderInput.on('blur',this.onBlur);

    this.geocoder.startup();
    this.locateButton.startup();
  }

  componentDidUpdate() {
    this.addInputAttributes();
    this.validator.setValidations(this.getValidations());
  }

  componentWillUnmount() {
    this.geocoder.clear();
    this.locateButton.clear();
    this.geocoder.destroy();
    this.locateButton.destroy();
  }

  render() {

    const inputClasses = Helper.classnames([this.props.className,'location','form-geocoder','form-group',{
      'required': this.props.required,
      'has-error': !this.state.isValid
    }]);

    // NO LOCATE button
    return (
      <div className={inputClasses}>
        <label htmlFor={this.props.id} className="control-label">{this.props.label}</label>
        {this.props.tooltip ? <IconTooltip className="form-tooltip" {...this.props.tooltip} /> : null}
        <div
          className="geocoder"
          ref={(ref) => this.geocoderContainer = ref}>
        </div>
        {this.getErrorMessage ? this.getErrorMessage() : null}
      </div>
    );

    // ORIGINAL

    // return (
    //   <div className={inputClasses}>
    //     <label htmlFor={this.props.id} className="control-label">{this.props.label}</label>
    //     {this.props.tooltip ? <IconTooltip className="form-tooltip" {...this.props.tooltip} /> : null}
    //     <div
    //       className="geocoder"
    //       ref={(ref) => this.geocoderContainer = ref}>
    //     </div>
    //     <div
    //       className="locator"
    //       ref={(ref) => this.locatorContainer = ref}>
    //     </div>
    //     {this.getErrorMessage ? this.getErrorMessage() : null}
    //   </div>
    // );
  }

  addInputAttributes() {
    $.each(this.props.inputAttr,(key,value) => {
      this.geocoderInput.attr(key,value);
    });
  }

  onSelect(selection) {
    this.locateButton.clear();
    if (selection.result) {
      this.input.value = {
        inputVal: this.geocoderInput.val(),
        dataVal: {
          name: selection.result.name,
          geometry: selection.result.feature.geometry
        }
      };
      
      const selC = this.countryStash.filter( (c) => {
         if (c.ThreeDigitCountryCode === selection.result.feature.attributes.Country) {
          return true;
         }
        }
      );

      if (selC && selC[0]) {
        window.selectedCountry = selC[0].CountryName;
      } else {
        const name = selection.result.name;
        
        let countryTry = '';

        try {
          countryTry = name.substr(name.lastIndexOf(',')+1, name.length).trim();
        } catch (e) {
          countryTry = selection.result.feature.attributes.Country;
        }
        
        window.selectedCountry = countryTry;
      }

      window.selectedISO3Digit = selection.result.feature.attributes.Country;

    }
    this.validateForm();
  }

  onClear() {
    this.input.value = {
      inputVal: this.geocoderInput.val(),
      dataVal: false
    };
    if (this.state.changed) {
      this.validateForm();
    }
  }

  onAutocomplete() {
    this.input.value = {
      inputVal: this.geocoderInput.val(),
      dataVal: this.geocoder.results.length === 0 ? 'no results' : false
    };
    if (!this.state.changed) {
      this.setState({
        changed: true
      });
    }
    this.validateForm();
  }

  onBlur() {
    setTimeout(() => {
      this.validateForm();
      if (!this.input.value.dataVal && !this.geocoderAutocomplete.is(':visible') && this.geocoder.results && this.geocoder.results.length > 0) {
        this.geocoder._findThenSelect(this.geocoder.results[0]);
      }
    },0);
  }

  reverseGeocode(response) {
    this.geocoder.clear();
    if (response && response.graphic) {
      this.locator.locationToAddress(response.graphic.geometry,100, (res) => {
        if (res.address && res.address.Match_addr) {
          this.geocoderInput.val(res.address.Match_addr);
          this.input.value = {
            inputVal: this.geocoderInput.val(),
            dataVal: {
              name: res.address.Match_addr,
              geometry: response.graphic.geometry
            }
          };
        } else {
          const name = response.position.coords.latitude + ', ' + response.position.coords.longitude;

          this.geocoderInput.val(res.address.Match_addr);
          this.input.value = {
            inputVal: this.geocoderInput.val(),
            dataVal: {
              name: name,
              geometry: response.graphic.geometry
            }
          };
        }
        this.validateForm();
      });
    }
  }
}
