'use strict';

import '@babel/polyfill';
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);

import 'fetch-polyfill';
import 'es6-promise';
import 'formdata-polyfill';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/PopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import ChengeIMG from './modules/ChengeIMG';
import ValidationFormInput from './modules/ValidationFormInput';
import calc from './modules/calc';
import sendForm from './modules/sendForm';

countTimer('01 december 2020');
toggleMenu();
togglePopUp();
tabs();
slider();
ChengeIMG();
ValidationFormInput();
calc(100);
sendForm();