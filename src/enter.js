import Vue from 'vue'
import VueRouter from 'vue-router'
import ListAdd from './component/listadd.vue'
import ListShow from './component/listshow.vue'
import ListItem from './component/listitem.vue'
import ListEditor from './component/listeditor.vue'
import Dice from './component/dice.vue'
import './style/reset.css'
import './style/lifedice.css'
import './script/storage.js'



Vue.config.debug = true;
Vue.use(VueRouter);
window.listData = {
  "data" : [{
    "title" : "列表1",
    "content" : [{
        "text" : "内容"
    },{
        "text" : "内容"
    },{
        "text" : "内容"
    }],
    "styleObject" : {
      "left" : 0,
      "transform" : 0
    }
  },{
    "title" : "列表2",
    "content" : [{
        "text" : "内容"
    },{
        "text" : "内容"
    },{
        "text" : "内容"
    }],
    "styleObject" : {
      "left" : 0,
      "transform" : 0
    }
  },{
    "title" : "列表3",
    "content" : [{
        "text" : "内容"
    },{
        "text" : "内容"
    },{
        "text" : "内容"
    }],
    "styleObject" : {
      "left" : 0,
      "transform" : 0
    }
  },{
    "title" : "列表4",
    "content" : [{
        "text" : "内容"
    },{
        "text" : "内容"
    },{
        "text" : "内容"
    }],
    "styleObject" : {
      "left" : 0,
      "transform" : 0
    }
  },{
    "title" : "列表5",
    "content" : [{
        "text" : "内容"
    },{
        "text" : "内容"
    },{
        "text" : "内容"
    }],
    "styleObject" : {
      "left" : 0,
      "transform" : 0
    }
  }]
}
const router = new VueRouter({
  mode: 'history',
  base: '/archives/lifeDice2',
  routes: [
    {
      path: '',
      component: ListShow
    },
    {
      path: '/listshow',
      component: ListShow
    },
    {
      path : '/listadd',
      component : ListAdd
    },
    {
      path: '/listitem/:id',
      component: ListItem
    },
    {
      path: '/listeditor/:id',
      component: ListEditor
    },
    {
    	path : '/dice/:id',
    	component : Dice
    }
  ]
})
window.app = new Vue({
  router: router,
  data : {
    list : storage.fetch()
  },
  watch: {
    list: {
      handler: function (lists) {
        storage.save(lists)
      },
      deep: true
    }
  }
}).$mount('#life-dice')
