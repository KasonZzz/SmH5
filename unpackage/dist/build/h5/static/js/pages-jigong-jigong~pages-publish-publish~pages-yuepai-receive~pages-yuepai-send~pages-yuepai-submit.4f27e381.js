(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-jigong-jigong~pages-publish-publish~pages-yuepai-receive~pages-yuepai-send~pages-yuepai-submit"],{"056a":function(t,e,n){var i=n("caf7");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("0ea6f66b",i,!0,{sourceMap:!1,shadowMode:!1})},"0965":function(t,e,n){"use strict";var i=n("0979"),o=n.n(i);o.a},"0979":function(t,e,n){var i=n("970d");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("6181f3ac",i,!0,{sourceMap:!1,shadowMode:!1})},"0a47":function(t,e,n){"use strict";n.r(e);var i=n("e859"),o=n("9d2b");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("0965");var r,l=n("f0c5"),c=Object(l["a"])(o["default"],i["b"],i["c"],!1,null,"386306c2",null,!1,i["a"],r);e["default"]=c.exports},"51b04":function(t,e,n){"use strict";var i=n("056a"),o=n.n(i);o.a},"580b":function(t,e,n){"use strict";n.r(e);var i=n("9248"),o=n("d056");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("51b04");var r,l=n("f0c5"),c=Object(l["a"])(o["default"],i["b"],i["c"],!1,null,"18d2347f",null,!1,i["a"],r);e["default"]=c.exports},"6ec9":function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"u-notice-bar",props:{list:{type:Array,default:function(){return[]}},type:{type:String,default:"warning"},volumeIcon:{type:Boolean,default:!0},volumeSize:{type:[Number,String],default:34},moreIcon:{type:Boolean,default:!1},closeIcon:{type:Boolean,default:!1},autoplay:{type:Boolean,default:!0},color:{type:String,default:""},bgColor:{type:String,default:""},mode:{type:String,default:"horizontal"},show:{type:Boolean,default:!0},fontSize:{type:[Number,String],default:28},duration:{type:[Number,String],default:2e3},speed:{type:[Number,String],default:160},isCircular:{type:Boolean,default:!0},playState:{type:String,default:"play"},disableTouch:{type:Boolean,default:!0},borderRadius:{type:[Number,String],default:0},padding:{type:[Number,String],default:"18rpx 24rpx"},noListHidden:{type:Boolean,default:!0}},computed:{isShow:function(){return 0!=this.show&&(1!=this.noListHidden||0!=this.list.length)}},methods:{click:function(t){this.$emit("click",t)},close:function(){this.$emit("close")},getMore:function(){this.$emit("getMore")},end:function(){this.$emit("end")}}};e.default=i},9248:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={uIcon:n("8811").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-notice-bar",class:[t.type?"u-type-"+t.type+"-light-bg":""],style:{background:t.computeBgColor,padding:t.padding}},[n("v-uni-view",{staticClass:"u-icon-wrap"},[t.volumeIcon?n("u-icon",{staticClass:"u-left-icon",attrs:{name:"volume-fill",size:t.volumeSize,color:t.computeColor}}):t._e()],1),n("v-uni-swiper",{staticClass:"u-swiper",attrs:{"disable-touch":t.disableTouch,autoplay:t.autoplay&&"play"==t.playState,vertical:t.vertical,circular:!0,interval:t.duration},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}}},t._l(t.list,(function(e,i){return n("v-uni-swiper-item",{key:i,staticClass:"u-swiper-item"},[n("v-uni-view",{staticClass:"u-news-item u-line-1",class:["u-type-"+t.type],style:[t.textStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click(i)}}},[t._v(t._s(e))])],1)})),1),n("v-uni-view",{staticClass:"u-icon-wrap"},[t.moreIcon?n("u-icon",{staticClass:"u-right-icon",attrs:{name:"arrow-right",size:26,color:t.computeColor},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getMore.apply(void 0,arguments)}}}):t._e(),t.closeIcon?n("u-icon",{staticClass:"u-right-icon",attrs:{name:"close",size:24,color:t.computeColor},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}}):t._e()],1)],1)},a=[]},"970d":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-notice-bar-wrap[data-v-386306c2]{overflow:hidden}.u-notice-bar[data-v-386306c2]{padding:%?18?% %?24?%;overflow:hidden}.u-direction-row[data-v-386306c2]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.u-left-icon[data-v-386306c2]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center}.u-notice-box[data-v-386306c2]{-webkit-box-flex:1;-webkit-flex:1;flex:1;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\noverflow:hidden;margin-left:%?12?%}.u-right-icon[data-v-386306c2]{margin-left:%?12?%;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center}.u-notice-content[data-v-386306c2]{line-height:1;white-space:nowrap;font-size:%?26?%;-webkit-animation:u-loop-animation-data-v-386306c2 10s linear infinite both;animation:u-loop-animation-data-v-386306c2 10s linear infinite both;text-align:right;padding-left:100%}@-webkit-keyframes u-loop-animation-data-v-386306c2{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}100%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@keyframes u-loop-animation-data-v-386306c2{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}100%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}',""]),t.exports=e},"9d2b":function(t,e,n){"use strict";n.r(e);var i=n("6ec9"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},c10f:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={uIcon:n("8811").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("v-uni-view",{staticClass:"u-notice-bar",class:[t.type?"u-type-"+t.type+"-light-bg":""],style:{background:t.computeBgColor,padding:t.padding}},[n("v-uni-view",{staticClass:"u-direction-row"},[n("v-uni-view",{staticClass:"u-icon-wrap"},[t.volumeIcon?n("u-icon",{staticClass:"u-left-icon",attrs:{name:"volume-fill",size:t.volumeSize,color:t.computeColor}}):t._e()],1),n("v-uni-view",{staticClass:"u-notice-box",attrs:{id:"u-notice-box"}},[n("v-uni-view",{staticClass:"u-notice-content",style:{animationDuration:t.animationDuration,animationPlayState:t.animationPlayState},attrs:{id:"u-notice-content"}},[n("v-uni-text",{staticClass:"u-notice-text",class:["u-type-"+t.type],style:[t.textStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}},[t._v(t._s(t.showText))])],1)],1),n("v-uni-view",{staticClass:"u-icon-wrap"},[t.moreIcon?n("u-icon",{staticClass:"u-right-icon",attrs:{name:"arrow-right",size:26,color:t.computeColor},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getMore.apply(void 0,arguments)}}}):t._e(),t.closeIcon?n("u-icon",{staticClass:"u-right-icon",attrs:{name:"close",size:24,color:t.computeColor},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}}):t._e()],1)],1)],1):t._e()},a=[]},c297:function(t,e,n){"use strict";var i=n("e42c"),o=n.n(i);o.a},c6bf:function(t,e,n){"use strict";n.r(e);var i=n("c10f"),o=n("ea88");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("c297");var r,l=n("f0c5"),c=Object(l["a"])(o["default"],i["b"],i["c"],!1,null,"4bc00da4",null,!1,i["a"],r);e["default"]=c.exports},caf7:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-notice-bar[data-v-18d2347f]{width:100%;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;padding:%?18?% %?24?%;overflow:hidden}.u-swiper[data-v-18d2347f]{font-size:%?26?%;height:%?32?%;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-flex:1;-webkit-flex:1;flex:1;margin-left:%?12?%}.u-swiper-item[data-v-18d2347f]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;overflow:hidden}.u-news-item[data-v-18d2347f]{overflow:hidden}.u-right-icon[data-v-18d2347f]{margin-left:%?12?%;display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.u-left-icon[data-v-18d2347f]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}',""]),t.exports=e},d056:function(t,e,n){"use strict";n.r(e);var i=n("f3c2"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},d288:function(t,e,n){"use strict";n("a15b"),n("a9e3"),n("d3b7"),n("ac1f"),n("3ca3"),n("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{list:{type:Array,default:function(){return[]}},type:{type:String,default:"warning"},volumeIcon:{type:Boolean,default:!0},moreIcon:{type:Boolean,default:!1},closeIcon:{type:Boolean,default:!1},autoplay:{type:Boolean,default:!0},color:{type:String,default:""},bgColor:{type:String,default:""},show:{type:Boolean,default:!0},fontSize:{type:[Number,String],default:26},volumeSize:{type:[Number,String],default:34},speed:{type:[Number,String],default:160},playState:{type:String,default:"play"},padding:{type:[Number,String],default:"18rpx 24rpx"}},data:function(){return{textWidth:0,boxWidth:0,animationDuration:"10s",animationPlayState:"paused",showText:""}},watch:{list:{immediate:!0,handler:function(t){var e=this;this.showText=t.join("，"),this.$nextTick((function(){e.initSize()}))}},playState:function(t){this.animationPlayState="play"==t?"running":"paused"},speed:function(t){this.initSize()}},computed:{computeColor:function(){return this.color?this.color:"none"==this.type?"#606266":this.type},textStyle:function(){var t={};return this.color?t.color=this.color:"none"==this.type&&(t.color="#606266"),t.fontSize=this.fontSize+"rpx",t},computeBgColor:function(){return this.bgColor?this.bgColor:"none"==this.type?"transparent":void 0}},mounted:function(){var t=this;this.$nextTick((function(){t.initSize()}))},methods:{initSize:function(){var t=this,e=[],n=new Promise((function(e,n){uni.createSelectorQuery().in(t).select("#u-notice-content").boundingClientRect().exec((function(n){t.textWidth=n[0].width,e()}))}));e.push(n),Promise.all(e).then((function(){t.animationDuration="".concat(t.textWidth/uni.upx2px(t.speed),"s"),t.animationPlayState="paused",setTimeout((function(){"play"==t.playState&&t.autoplay&&(t.animationPlayState="running")}),10)}))},click:function(t){this.$emit("click")},close:function(){this.$emit("close")},getMore:function(){this.$emit("getMore")}}};e.default=i},d6c3:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-notice-bar[data-v-4bc00da4]{padding:%?18?% %?24?%;overflow:hidden}.u-direction-row[data-v-4bc00da4]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.u-left-icon[data-v-4bc00da4]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.u-notice-box[data-v-4bc00da4]{-webkit-box-flex:1;-webkit-flex:1;flex:1;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\noverflow:hidden;margin-left:%?12?%}.u-right-icon[data-v-4bc00da4]{margin-left:%?12?%;display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.u-notice-content[data-v-4bc00da4]{-webkit-animation:u-loop-animation-data-v-4bc00da4 10s linear infinite both;animation:u-loop-animation-data-v-4bc00da4 10s linear infinite both;text-align:right;padding-left:100%;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-flex-wrap:nowrap;flex-wrap:nowrap}.u-notice-text[data-v-4bc00da4]{font-size:%?26?%;word-break:keep-all;white-space:nowrap}@-webkit-keyframes u-loop-animation-data-v-4bc00da4{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}100%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@keyframes u-loop-animation-data-v-4bc00da4{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}100%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}',""]),t.exports=e},e42c:function(t,e,n){var i=n("d6c3");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("a9dc30f0",i,!0,{sourceMap:!1,shadowMode:!1})},e859:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={uRowNotice:n("c6bf").default,uColumnNotice:n("580b").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isShow?n("v-uni-view",{staticClass:"u-notice-bar-wrap",style:{borderRadius:t.borderRadius+"rpx"}},["horizontal"==t.mode&&t.isCircular?[n("u-row-notice",{attrs:{type:t.type,color:t.color,bgColor:t.bgColor,list:t.list,volumeIcon:t.volumeIcon,moreIcon:t.moreIcon,volumeSize:t.volumeSize,closeIcon:t.closeIcon,mode:t.mode,fontSize:t.fontSize,speed:t.speed,playState:t.playState,padding:t.padding},on:{getMore:function(e){arguments[0]=e=t.$handleEvent(e),t.getMore.apply(void 0,arguments)},close:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}})]:t._e(),"vertical"==t.mode||"horizontal"==t.mode&&!t.isCircular?[n("u-column-notice",{attrs:{type:t.type,color:t.color,bgColor:t.bgColor,list:t.list,volumeIcon:t.volumeIcon,moreIcon:t.moreIcon,closeIcon:t.closeIcon,mode:t.mode,volumeSize:t.volumeSize,"disable-touch":t.disableTouch,fontSize:t.fontSize,duration:t.duration,playState:t.playState,padding:t.padding},on:{getMore:function(e){arguments[0]=e=t.$handleEvent(e),t.getMore.apply(void 0,arguments)},close:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)},end:function(e){arguments[0]=e=t.$handleEvent(e),t.end.apply(void 0,arguments)}}})]:t._e()],2):t._e()},a=[]},ea88:function(t,e,n){"use strict";n.r(e);var i=n("d288"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},f3c2:function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{list:{type:Array,default:function(){return[]}},type:{type:String,default:"warning"},volumeIcon:{type:Boolean,default:!0},moreIcon:{type:Boolean,default:!1},closeIcon:{type:Boolean,default:!1},autoplay:{type:Boolean,default:!0},color:{type:String,default:""},bgColor:{type:String,default:""},direction:{type:String,default:"row"},show:{type:Boolean,default:!0},fontSize:{type:[Number,String],default:26},duration:{type:[Number,String],default:2e3},volumeSize:{type:[Number,String],default:34},speed:{type:Number,default:160},isCircular:{type:Boolean,default:!0},mode:{type:String,default:"horizontal"},playState:{type:String,default:"play"},disableTouch:{type:Boolean,default:!0},padding:{type:[Number,String],default:"18rpx 24rpx"}},computed:{computeColor:function(){return this.color?this.color:"none"==this.type?"#606266":this.type},textStyle:function(){var t={};return this.color?t.color=this.color:"none"==this.type&&(t.color="#606266"),t.fontSize=this.fontSize+"rpx",t},vertical:function(){return"horizontal"!=this.mode},computeBgColor:function(){return this.bgColor?this.bgColor:"none"==this.type?"transparent":void 0}},data:function(){return{}},methods:{click:function(t){this.$emit("click",t)},close:function(){this.$emit("close")},getMore:function(){this.$emit("getMore")},change:function(t){var e=t.detail.current;e==this.list.length-1&&this.$emit("end")}}};e.default=i}}]);