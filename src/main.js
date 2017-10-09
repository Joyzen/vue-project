import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import VueAMap from 'vue-amap';

Vue.use(ElementUI);
Vue.use(VueAMap);
console.log(VueAMap)
VueAMap.initAMapApiLoader({
  key: '75b4cb472f9ba90cc6dd2d178b8c09f0',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
});

window.vm = new Vue({
  el: '#app',
  render: h => h(App)
})
