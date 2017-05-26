/*! pulltorefresh 2.0.0 @copyright dailc https://github.com/dailc/pullToRefresh-h5-iscroll */
!function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="https://github.com/dailc/pullToRefresh-h5-iscroll/dist/",t(t.s=18)}({0:function(e,t,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e){!function(){e.uuid=function(e,t){var n,o="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),i=[];if(t=t||o.length,e)for(n=0;n<e;n++)i[n]=o[0|Math.random()*t];else{var r;for(i[8]=i[13]=i[18]=i[23]="-",i[14]="4",n=0;n<36;n++)i[n]||(r=0|16*Math.random(),i[n]=o[19==n?3&r|8:r])}return i.join("")},e.noop=function(){},e.extend=function(){var t,n,i,r,s,a,u=arguments[0]||{},c=1,l=arguments.length,f=!1;for("boolean"==typeof u&&(f=u,u=arguments[c]||{},c++),"object"===(void 0===u?"undefined":o(u))||e.isFunction(u)||(u={}),c===l&&(u=this,c--);c<l;c++)if(null!=(t=arguments[c]))for(n in t)i=u[n],r=t[n],u!==r&&(f&&r&&(e.isPlainObject(r)||(s=e.isArray(r)))?(s?(s=!1,a=i&&e.isArray(i)?i:[]):a=i&&e.isPlainObject(i)?i:{},u[n]=e.extend(f,a,r)):void 0!==r&&(u[n]=r));return u},e.isFunction=function(t){return"function"===e.type(t)},e.isPlainObject=function(t){return e.isObject(t)&&!e.isWindow(t)&&Object.getPrototypeOf(t)===Object.prototype},e.isArray=Array.isArray||function(e){return e instanceof Array},e.isWindow=function(e){return null!=e&&e===e.window},e.isObject=function(t){return"object"===e.type(t)},e.type=function(e){return null==e?String(e):t[{}.toString.call(e)]||"object"},e.each=function(e,t,n){if(!e)return this;if("number"==typeof e.length)[].every.call(e,function(e,n){return t.call(e,n,e)!==!1});else for(var o in e)if(n){if(e.hasOwnProperty(o)&&t.call(e[o],o,e[o])===!1)return e}else if(t.call(e[o],o,e[o])===!1)return e;return this},e.later=function(t,n,o,i){n=n||0;var r,s,a=t,u=i;return"string"==typeof t&&(a=o[t]),r=function(){a.apply(o,e.isArray(u)?u:[u])},s=setTimeout(r,n),{id:s,cancel:function(){clearTimeout(s)}}};var t={};e.each(["Boolean","Number","String","Function","Array","Date","RegExp","Object","Error"],function(e,n){t["[object "+n+"]"]=n.toLowerCase()}),function(){function t(t){this.os={},this.os.name="browser";var n=[function(){var e=t.match(/(Android);?[\s\/]+([\d.]+)?/);return e&&(this.os.android=!0,this.os.version=e[2],this.os.isBadAndroid=!/Chrome\/\d/.test(window.navigator.appVersion),this.os.name+="_Android",this.os.name+="_mobile"),this.os.android===!0},function(){var e=t.match(/(iPhone\sOS)\s([\d_]+)/);if(e)this.os.ios=this.os.iphone=!0,this.os.version=e[2].replace(/_/g,"."),this.os.name+="_iphone",this.os.name+="_mobile";else{var n=t.match(/(iPad).*OS\s([\d_]+)/);n&&(this.os.ios=this.os.ipad=!0,this.os.version=n[2].replace(/_/g,"."),this.os.name+="_iOS",this.os.name+="_mobile")}return this.os.ios===!0}];[].every.call(n,function(t){return!t.call(e)})}t.call(e,navigator.userAgent)}(),function(){function t(e){this.os=this.os||{},e.match(/EpointEJS/i)&&(this.os.ejs=!0,this.os.name+="_ejs"),e.match(/DingTalk/i)&&(this.os.dd=!0,this.os.name+="_dd")}t.call(e,navigator.userAgent)}()}(),function(){var t=!1,n=/xyz/.test(function(){xyz})?/\b_super\b/:/.*/,o=function(){};o.extend=function(e){function o(){!t&&this.init&&this.init.apply(this,arguments)}var i=this.prototype;t=!0;var r=new this;t=!1;for(var s in e)r[s]="function"==typeof e[s]&&"function"==typeof i[s]&&n.test(e[s])?function(e,t){return function(){var n=this._super;this._super=i[e];var o=t.apply(this,arguments);return this._super=n,o}}(s,e[s]):e[s];return o.prototype=r,o.prototype.constructor=o,o.extend=this.extend,o},e.Class=o,e.initReady=function(e){return window.mui?mui.ready(function(){e&&e(!1)}):e&&e(!1),window}}(),function(){function t(e,t,n){var o={type:"V6数据格式"};if(e&&e.ReturnInfo&&"1"==e.ReturnInfo.Code)if(e&&e.BusinessInfo&&"1"==e.BusinessInfo.Code){o.errorType="null";var i="接口请求成功,后台业务逻辑处理成功!";if(e&&e.BusinessInfo&&e.BusinessInfo.Description&&(i=e.BusinessInfo.Description),n.description=i,0===(t=t||0)||"0"===t)n.code=1;else if(1===t||"1"===t)if(e&&e.UserArea){if(n.code=1,e.UserArea.PageInfo&&e.UserArea.PageInfo.TotalNumCount){var r=parseInt(e.UserArea.PageInfo.TotalNumCount);r=r||0,n.totalCount=r}else n.totalCount=0;if(e.UserArea.InfoList&&e.UserArea.InfoList[0]&&e.UserArea.InfoList[0].Info){for(var s=[],a=0,u=e.UserArea.InfoList.length;a<u;a++)s.push(e.UserArea.InfoList[a].Info);n.data=s}else{n.data=null;for(var c in e.UserArea)if(Array.isArray(e.UserArea[c])){if(n.data=e.UserArea[c],"InfoList"===c)break}else if("InfoList"===c){e.UserArea[c]&&e.UserArea[c].Info?n.data=e.UserArea[c].Info:n.data=e.UserArea[c];break}}}else n.code=0,n.description="接口返回列表数据格式不符合规范!";else if(2===t||"2"===t)if(e&&e.UserArea){n.code=1;var l=0;for(var c in e.UserArea)l++,n.data=e.UserArea[c];l>1&&(n.data=e.UserArea)}else n.code=0,n.description="接口返回详情数据格式不符合规范!";else n.code=0,n.description="处理接口数据错误,传入类别不在处理范围!"}else{o.errorType="2",n.code=0;var i="接口请求错误,后台业务逻辑处理出错!";e&&e.BusinessInfo&&e.BusinessInfo.Description&&(i=e.BusinessInfo.Description),n.description=i}else{o.errorType="1",n.code=0;var i="接口请求错误,后台程序处理出错!";e&&e.ReturnInfo&&e.ReturnInfo.Description&&(i=e.ReturnInfo.Description),n.description=i}return n.debugInfo=o,n}function n(e,t,n){var o={type:"V7数据格式"};if(e&&1==e.code){n.code=1;var i="接口请求成功!";e.description&&(i=e.description),n.description=i,n.data=e.data}else{n.code=0;var i="接口请求错误,返回状态出错!";e&&e.description&&(i=e.description),n.description=i}return n.debugInfo=o,n}e.handleStandardResponse=function(e,o){var i={code:0,description:"",data:null,debugInfo:{type:"未知数据格式"}};return e?(e&&e.ReturnInfo?i=t(e,o,i):!e||null==e.code&&null==e.description?(i.code=0,i.description="接口数据返回格式不正确,不是V6也不是F9!",i.debugInfo.data=e):i=n(e,o,i),i):(i.description="接口返回数据为空!",i)}}()}(e.exports={})},1:function(e,t,n){"use strict";e.exports={namespace:"PullToRefreshTools.",generateGlobalObj:function(e,t,n){if(n){var o=n.split("."),i=o.length;this.getNameSpaceObj(e,o,i-1)[o[i-1]]=t}},getNameSpaceObj:function(e,t,n){for(var o=e,i=0;i<n;i++){var r=t[i];o[r]=o[r]||{},o=o[r]}return o}}},18:function(e,t,n){"use strict";e.exports=n(7)},7:function(e,t,n){"use strict";var o,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(t){function r(e,t){"object"!==(void 0===e?"undefined":i(e))?this.element=e:(t=e,this.element=t.element),this.element=this.element||f.element,"string"==typeof this.element&&(this.element=document.querySelector(this.element)),this.options=c.extend(!0,{},f,t)}function s(){var e=u.options.down.callback;e&&e.apply(u)}function a(){var e=u.options.up.callback;e&&e.apply(u)}var u,c=n(0),l=n(1),f={down:{height:75,contentdown:"下拉可以刷新",contentover:"释放立即刷新",contentrefresh:"正在刷新",callback:c.noop},up:{auto:!1,offset:100,show:!0,contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了",callback:c.noop},element:"#pullrefresh"};r.prototype.init=function(){var e,t=this;e={pullRefresh:{container:t.element,down:t.options.down?c.extend(!0,{},t.options.down,{callback:s}):null,up:t.options.up?c.extend(!0,{},t.options.up,{callback:a}):null}},mui.init(e),c.initReady(function(){t.initData()})},r.prototype.initData=function(){var e=this;e.isLoadingMore=!1,e.isNoMoreData=!1,e.finished=!1},r.prototype.pullupLoading=function(){var e=this;e.options.up&&(e.isLoadingMore||(e.isNoMoreData&&mui(e.element).pullRefresh().refresh(!0),mui(e.element).pullRefresh().pullupLoading(),window.plus&&"Android"===plus.os.name||mui(e.element).pullRefresh().scrollTo(0,0,100),e.isLoadingMore=!0))},r.prototype.resetLoadingState=function(e,t){var n=this;e&&mui(n.element).pullRefresh().endPulldownToRefresh(),t?(mui(n.element).pullRefresh().endPullupToRefresh(!0),n.isNoMoreData=!0,n.finished=!0):mui(n.element).pullRefresh().endPullupToRefresh(!1),n.isLoadingMore=!1},r.prototype.refresh=function(){var e=this;e.isNoMoreData&&(mui(e.element).pullRefresh().refresh(!0),e.isNoMoreData=!1,e.finished=!1)},r.prototype.endPullDownToRefresh=function(){this.resetLoadingState(!0,!1)},r.prototype.endPullUpToRefresh=function(e){this.resetLoadingState(!1,e)},t.initPullToRefresh=function(e,t){return u||(u=new r(e,t),u.init()),u},void 0!==e&&e.exports?e.exports=t:void 0!==(o=function(){return t}.call(t,n,t,e))&&(e.exports=o),l.generateGlobalObj(window,t,l.namespace+"skin.muidefault")}({})}});