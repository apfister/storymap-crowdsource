import $ from 'jquery';
import { combineReducers } from 'redux';
import {
  UPDATE_SETTINGS_COMMON_SHARING_SERVICES,
  UPDATE_SETTINGS_COMMON_SHARING_TWITTER
} from 'babel/constants/actionsTypes/Settings';

const defaultServices = {
  facebook: true,
  twitter: true,
  link: true
};

const defaultTwitter = {
  text: '',
  related: 'EsriStoryMaps'
};

const defaultMyShare = {
  text: 'foo'
};

export const services = function (state = defaultServices, action) {
  switch (action.type) {
    case UPDATE_SETTINGS_COMMON_SHARING_SERVICES:
      return $.extend(true,{},state,action.settings);
    default:
      return state;
  }
};

export const twitter = function (state = defaultTwitter, action) {
  switch (action.type) {
    case UPDATE_SETTINGS_COMMON_SHARING_TWITTER:
      return $.extend(true,{},state,action.settings);
    default:
      return state;
  }
};

export const myShare = function (state = defaultMyShare, action) {
  switch (action.type) {
    case 'UPDATE_SETTINGS_COMMON_SHARING_MY_SHARE':
      return $.extend(true,{},state,action.settings);
    default:
      return state;
  }
};

export const sharing = combineReducers({
  services,
  twitter,
  myShare
});

export default sharing;
