(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-help-help"],{"02a4":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={uIcon:n("8811").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-collapse-item",style:[t.itemStyle]},[n("v-uni-view",{staticClass:"u-collapse-head",style:[t.headStyle],attrs:{"hover-stay-time":200,"hover-class":t.hoverClass},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.headClick.apply(void 0,arguments)}}},[t.$slots["title-all"]?t._t("title-all"):[t.$slots["title"]?t._t("title"):n("v-uni-view",{staticClass:"u-collapse-title u-line-1",style:[{textAlign:t.align?t.align:"left"},t.isShow&&t.activeStyle&&!t.arrow?t.activeStyle:""]},[t._v(t._s(t.title))]),n("v-uni-view",{staticClass:"u-icon-wrap"},[t.arrow?n("u-icon",{staticClass:"u-arrow-down-icon",class:{"u-arrow-down-icon-active":t.isShow},attrs:{color:t.arrowColor,name:"arrow-down"}}):t._e()],1)]],2),n("v-uni-view",{staticClass:"u-collapse-body",style:[{height:t.isShow?t.height+"px":"0"}]},[n("v-uni-view",{staticClass:"u-collapse-content",style:[t.bodyStyle],attrs:{id:t.elId}},[t._t("default")],2)],1)],1)},a=[]},"163b":function(t,e,n){"use strict";n.r(e);var i=n("b12b"),r=n("4c3e");for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n("1b0f");var o,s=n("f0c5"),l=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"ced9efa4",null,!1,i["a"],o);e["default"]=l.exports},"1b0f":function(t,e,n){"use strict";var i=n("7c66"),r=n.n(i);r.a},"2d2f":function(t,e,n){var i=n("b320");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("47faec7e",i,!0,{sourceMap:!1,shadowMode:!1})},3286:function(t,e,n){"use strict";n("4160"),n("a15b"),n("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"u-collapse",props:{accordion:{type:Boolean,default:!0},headStyle:{type:Object,default:function(){return{}}},bodyStyle:{type:Object,default:function(){return{}}},itemStyle:{type:Object,default:function(){return{}}},arrow:{type:Boolean,default:!0},arrowColor:{type:String,default:"#909399"},hoverClass:{type:String,default:"u-hover-class"}},created:function(){this.childrens=[]},data:function(){return{}},methods:{init:function(){this.childrens.forEach((function(t,e){t.init()}))},onChange:function(){var t=[];this.childrens.forEach((function(e,n){e.isShow&&t.push(e.nameSync)})),this.accordion&&(t=t.join("")),this.$emit("change",t)}}};e.default=i},"4c3e":function(t,e,n){"use strict";n.r(e);var i=n("3286"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},"54b8":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{itemList:[{head:"番职圈是什么？",body:"番职圈-为番职学生打造的社交圈子以及在线约课平台。免费发布动态、约课信息，分享大学校园生活，找到适合自己的约课对象。"},{head:"我不是模特，可以约课吗？",body:"约课上的模特，并不是专业模特的意思。在这里，任何想拍照的人都可以叫做模特，如果您想拍照，您可以在发布约课需求时选择模特。"},{head:"什么叫做互勉(互免)？",body:"互勉约课，也叫互免约课，是双方互相免费的意思。摄影师与模特双方以促进彼此的技能或者为出作品为目的，双方任何一方都不收取费用的约课。"},{head:"我的联系方式会被别人看到吗？",body:"您的联系方式，只有您给某个人发送'约课请求'后，对方才能查看您的联系方式。"},{head:"如何修改个人资料？",body:"进入个人中心，点击个人资料方可修改。"}],itemStyle:{marginLeft:"20rpx"}}}};e.default=i},"54f1":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */',""]),t.exports=e},"7c66":function(t,e,n){var i=n("54f1");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("2c4aff0f",i,!0,{sourceMap:!1,shadowMode:!1})},"8fa4":function(t,e,n){"use strict";n.r(e);var i=n("54b8"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},"9f01":function(t,e,n){"use strict";n.r(e);var i=n("02a4"),r=n("a3d1");for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n("abbf");var o,s=n("f0c5"),l=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"2677eae9",null,!1,i["a"],o);e["default"]=l.exports},a3d1:function(t,e,n){"use strict";n.r(e);var i=n("b852"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},abbf:function(t,e,n){"use strict";var i=n("2d2f"),r=n.n(i);r.a},b12b:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-collapse"},[t._t("default")],2)},a=[]},b316:function(t,e,n){"use strict";n.r(e);var i=n("ba9b"),r=n("8fa4");for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);var o,s=n("f0c5"),l=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"530f2f4f",null,!1,i["a"],o);e["default"]=l.exports},b320:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-collapse-head[data-v-2677eae9]{position:relative;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#303133;font-size:%?30?%;line-height:1;padding:%?24?% 0;text-align:left}.u-collapse-title[data-v-2677eae9]{-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:hidden}.u-arrow-down-icon[data-v-2677eae9]{-webkit-transition:all .3s;transition:all .3s;margin-right:%?20?%;margin-left:%?14?%}.u-arrow-down-icon-active[data-v-2677eae9]{-webkit-transform:rotate(180deg);transform:rotate(180deg);-webkit-transform-origin:center center;transform-origin:center center}.u-collapse-body[data-v-2677eae9]{overflow:hidden;-webkit-transition:all .3s;transition:all .3s}.u-collapse-content[data-v-2677eae9]{overflow:hidden;font-size:%?28?%;color:#909399;text-align:left}',""]),t.exports=e},b852:function(t,e,n){"use strict";n("d81d"),n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"u-collapse-item",props:{title:{type:String,default:""},align:{type:String,default:"left"},disabled:{type:Boolean,default:!1},open:{type:Boolean,default:!1},name:{type:[Number,String],default:""},activeStyle:{type:Object,default:function(){return{}}},index:{type:[String,Number],default:""}},data:function(){return{isShow:!1,elId:this.$u.guid(),height:0,headStyle:{},bodyStyle:{},itemStyle:{},arrowColor:"",hoverClass:"",arrow:!0}},watch:{open:function(t){this.isShow=t}},created:function(){this.parent=!1,this.isShow=this.open},methods:{init:function(){var t=this;this.parent=this.$u.$parent.call(this,"u-collapse"),this.parent&&(this.nameSync=this.name?this.name:this.parent.childrens.length,this.parent.childrens.push(this),this.headStyle=this.parent.headStyle,this.bodyStyle=this.parent.bodyStyle,this.arrowColor=this.parent.arrowColor,this.hoverClass=this.parent.hoverClass,this.arrow=this.parent.arrow,this.itemStyle=this.parent.itemStyle),this.$nextTick((function(){t.queryRect()}))},headClick:function(){var t=this;this.disabled||(this.parent&&1==this.parent.accordion&&this.parent.childrens.map((function(e){t!=e&&(e.isShow=!1)})),this.isShow=!this.isShow,this.$emit("change",{index:this.index,show:this.isShow}),this.isShow&&this.parent&&this.parent.onChange(),this.$forceUpdate())},queryRect:function(){var t=this;this.$uGetRect("#"+this.elId).then((function(e){t.height=e.height}))}},mounted:function(){this.init()}};e.default=i},ba9b:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={uCollapse:n("163b").default,uCollapseItem:n("9f01").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("u-collapse",{attrs:{"item-style":t.itemStyle}},t._l(t.itemList,(function(e,i){return n("u-collapse-item",{key:i,attrs:{title:e.head}},[t._v(t._s(e.body))])})),1)],1)},a=[]}}]);