// index
import '../css/reset.css';
import '../css/index.styl';

import {Dom} from './class';

import {ERR_OK} from './public';

const $ = require('jquery');

const $Item = $('.item');

const dom = new Dom({
  el: $Item[0]
});

console.log(dom);

console.log($Item.length + ' : ' + ERR_OK + 'hahaha');