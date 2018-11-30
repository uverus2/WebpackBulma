import '../main.scss';

import Home from '../html/index.html';
import image1 from '../img/20181120_092709-1.jpg'
//import php from '../php/'
//import black from '../fonts/Loto-Black.ttf'

// Javascript 
import Vue from 'vue';
import VeeValidate from 'vee-validate';
import quote from './quote.vue';


import vueValidation from './vueValidations.vue';

Vue.use(VeeValidate);

Vue.component('validate', vueValidation);
Vue.component('quote', quote);

const app = new Vue({
    el: '#valid',


})