(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3be26e44"],{"0cca":function(s,e,a){"use strict";a.r(e);var t=function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("section",{staticClass:"index-section"},[a("div",{staticClass:"messages"},[a("div",{staticClass:"new-msg"},[a("div",{staticClass:"top"},[a("router-link",{attrs:{to:"/"}},[s._v("主页")]),a("em",[s._v(" / ")]),a("span",[s._v("新消息")])],1),a("Msg",{attrs:{readMessages:s.message.hasnot_read_messages,loading:s.loading}})],1),a("div",{staticClass:"past-times"},[a("div",{staticClass:"top"},[s._v("已读消息")]),a("Msg",{attrs:{readMessages:s.message.has_read_messages,loading:s.loading}})],1)]),a("Sidebar")],1)},n=[],i=a("365c"),o=function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("div",{staticClass:"msg-list"},[a("div",{directives:[{name:"show",rawName:"v-show",value:s.loading,expression:"loading"}],staticClass:"msg-loading"}),a("div",{directives:[{name:"show",rawName:"v-show",value:0===s.readMessages.length,expression:"readMessages.length === 0"}]},[s._v("暂无消息")]),a("ul",{directives:[{name:"show",rawName:"v-show",value:s.readMessages.length>0,expression:"readMessages.length > 0"}]},s._l(s.readMessages,function(e,t){return a("li",{key:e.id},["reply"===e.type?a("div",[a("router-link",{attrs:{to:"/user/"+e.author.loginname}},[s._v(s._s(e.author.loginname))]),a("span",[s._v(" 回复了你的话题")]),a("router-link",{attrs:{to:"/topic/"+e.topic.id}},[s._v(s._s(e.topic.title))])],1):"at"===e.type?a("div",[a("router-link",{attrs:{to:"/user/"+e.author.loginname}},[s._v(s._s(e.author.loginname))]),a("span",[s._v(" 在话题")]),a("router-link",{attrs:{to:"/topic/"+e.topic.id}},[s._v(s._s(e.topic.title))]),a("span",[s._v(" 中@了你")])],1):s._e()])}),0)])},r=[],l={name:"msg",props:{loading:{type:Boolean,default:!0},readMessages:{type:Array,default:function(){return[]}}}},c=l,d=(a("17b4"),a("2877")),g=Object(d["a"])(c,o,r,!1,null,"ef8d1076",null),u=g.exports,v={name:"messages",data:function(){return{loading:!0,message:{has_read_messages:[],hasnot_read_messages:[]}}},components:{Msg:u},created:function(){this.fetchMessages()},methods:{fetchMessages:function(){var s=this;this.$axios.get(i["a"].fetchMessages).then(function(e){s.loading=!1,s.message=e.data.data,s.$axios.post(i["a"].messageMarkAll)})}}},m=v,p=(a("8e2e"),Object(d["a"])(m,t,n,!1,null,"137da0d2",null));e["default"]=p.exports},"17b4":function(s,e,a){"use strict";var t=a("ba7c"),n=a.n(t);n.a},"8e2e":function(s,e,a){"use strict";var t=a("92cf"),n=a.n(t);n.a},"92cf":function(s,e,a){},ba7c:function(s,e,a){}}]);
//# sourceMappingURL=chunk-3be26e44.f47043e6.js.map