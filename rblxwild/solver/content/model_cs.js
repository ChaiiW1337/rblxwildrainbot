!function(e,a){"object"==typeof exports&&"undefined"!=typeof module?a(exports,require("@tensorflow/tfjs-converter"),require("@tensorflow/tfjs-core")):"function"==typeof define&&define.amd?define(["exports","@tensorflow/tfjs-converter","@tensorflow/tfjs-core"],a):a((e=e||self)._cs=e._cs||{},e.tf,e.tf)}(this,function(e,m,u){"use strict";function t(e,d,s,r){return new(s=s||Promise)(function(i,a){function n(e){try{t(r.next(e))}catch(e){a(e)}}function m(e){try{t(r.throw(e))}catch(e){a(e)}}function t(e){var a;e.done?i(e.value):((a=e.value)instanceof s?a:new s(function(e){e(a)})).then(n,m)}t((r=r.apply(e,d||[])).next())})}function f(n,m){var t,d,s,r={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]},e={next:a(0),throw:a(1),return:a(2)};return"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function a(i){return function(e){var a=[i,e];if(t)throw new TypeError("Generator is already executing.");for(;r;)try{if(t=1,d&&(s=2&a[0]?d.return:a[0]?d.throw||((s=d.return)&&s.call(d),0):d.next)&&!(s=s.call(d,a[1])).done)return s;switch(d=0,(a=s?[2&a[0],s.value]:a)[0]){case 0:case 1:s=a;break;case 4:return r.label++,{value:a[1],done:!1};case 5:r.label++,d=a[1],a=[0];continue;case 7:a=r.ops.pop(),r.trys.pop();continue;default:if(!((s=0<(s=r.trys).length&&s[s.length-1])||6!==a[0]&&2!==a[0])){r=0;continue}if(3===a[0]&&(!s||a[1]>s[0]&&a[1]<s[3])){r.label=a[1];break}if(6===a[0]&&r.label<s[1]){r.label=s[1],s=a;break}if(s&&r.label<s[2]){r.label=s[2],r.ops.push(a);break}s[2]&&r.ops.pop(),r.trys.pop();continue}a=m.call(n,r)}catch(e){a=[6,e],d=0}finally{t=s=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}}}var b={1:{name:"/m/01g317",id:1,displayName:"person"},2:{name:"/m/0199g",id:2,displayName:"bicycle"},3:{name:"/m/0k4j",id:3,displayName:"car"},4:{name:"/m/04_sv",id:4,displayName:"motorcycle"},5:{name:"/m/05czz6l",id:5,displayName:"airplane"},6:{name:"/m/01bjv",id:6,displayName:"bus"},7:{name:"/m/07jdr",id:7,displayName:"train"},8:{name:"/m/07r04",id:8,displayName:"truck"},9:{name:"/m/019jd",id:9,displayName:"boat"},10:{name:"/m/015qff",id:10,displayName:"traffic light"},11:{name:"/m/01pns0",id:11,displayName:"fire hydrant"},13:{name:"/m/02pv19",id:13,displayName:"stop sign"},14:{name:"/m/015qbp",id:14,displayName:"parking meter"},15:{name:"/m/0cvnqh",id:15,displayName:"bench"},16:{name:"/m/015p6",id:16,displayName:"bird"},17:{name:"/m/01yrx",id:17,displayName:"cat"},18:{name:"/m/0bt9lr",id:18,displayName:"dog"},19:{name:"/m/03k3r",id:19,displayName:"horse"},20:{name:"/m/07bgp",id:20,displayName:"sheep"},21:{name:"/m/01xq0k1",id:21,displayName:"cow"},22:{name:"/m/0bwd_0j",id:22,displayName:"elephant"},23:{name:"/m/01dws",id:23,displayName:"bear"},24:{name:"/m/0898b",id:24,displayName:"zebra"},25:{name:"/m/03bk1",id:25,displayName:"giraffe"},27:{name:"/m/01940j",id:27,displayName:"backpack"},28:{name:"/m/0hnnb",id:28,displayName:"umbrella"},31:{name:"/m/080hkjn",id:31,displayName:"handbag"},32:{name:"/m/01rkbr",id:32,displayName:"tie"},33:{name:"/m/01s55n",id:33,displayName:"suitcase"},34:{name:"/m/02wmf",id:34,displayName:"frisbee"},35:{name:"/m/071p9",id:35,displayName:"skis"},36:{name:"/m/06__v",id:36,displayName:"snowboard"},37:{name:"/m/018xm",id:37,displayName:"sports ball"},38:{name:"/m/02zt3",id:38,displayName:"kite"},39:{name:"/m/03g8mr",id:39,displayName:"baseball bat"},40:{name:"/m/03grzl",id:40,displayName:"baseball glove"},41:{name:"/m/06_fw",id:41,displayName:"skateboard"},42:{name:"/m/019w40",id:42,displayName:"surfboard"},43:{name:"/m/0dv9c",id:43,displayName:"tennis racket"},44:{name:"/m/04dr76w",id:44,displayName:"bottle"},46:{name:"/m/09tvcd",id:46,displayName:"wine glass"},47:{name:"/m/08gqpm",id:47,displayName:"cup"},48:{name:"/m/0dt3t",id:48,displayName:"fork"},49:{name:"/m/04ctx",id:49,displayName:"knife"},50:{name:"/m/0cmx8",id:50,displayName:"spoon"},51:{name:"/m/04kkgm",id:51,displayName:"bowl"},52:{name:"/m/09qck",id:52,displayName:"banana"},53:{name:"/m/014j1m",id:53,displayName:"apple"},54:{name:"/m/0l515",id:54,displayName:"sandwich"},55:{name:"/m/0cyhj_",id:55,displayName:"orange"},56:{name:"/m/0hkxq",id:56,displayName:"broccoli"},57:{name:"/m/0fj52s",id:57,displayName:"carrot"},58:{name:"/m/01b9xk",id:58,displayName:"hot dog"},59:{name:"/m/0663v",id:59,displayName:"pizza"},60:{name:"/m/0jy4k",id:60,displayName:"donut"},61:{name:"/m/0fszt",id:61,displayName:"cake"},62:{name:"/m/01mzpv",id:62,displayName:"chair"},63:{name:"/m/02crq1",id:63,displayName:"couch"},64:{name:"/m/03fp41",id:64,displayName:"potted plant"},65:{name:"/m/03ssj5",id:65,displayName:"bed"},67:{name:"/m/04bcr3",id:67,displayName:"dining table"},70:{name:"/m/09g1w",id:70,displayName:"toilet"},72:{name:"/m/07c52",id:72,displayName:"tv"},73:{name:"/m/01c648",id:73,displayName:"laptop"},74:{name:"/m/020lf",id:74,displayName:"mouse"},75:{name:"/m/0qjjc",id:75,displayName:"remote"},76:{name:"/m/01m2v",id:76,displayName:"keyboard"},77:{name:"/m/050k8",id:77,displayName:"cell phone"},78:{name:"/m/0fx9l",id:78,displayName:"microwave"},79:{name:"/m/029bxz",id:79,displayName:"oven"},80:{name:"/m/01k6s3",id:80,displayName:"toaster"},81:{name:"/m/0130jx",id:81,displayName:"sink"},82:{name:"/m/040b_t",id:82,displayName:"refrigerator"},84:{name:"/m/0bt_c3",id:84,displayName:"book"},85:{name:"/m/01x3z",id:85,displayName:"clock"},86:{name:"/m/02s195",id:86,displayName:"vase"},87:{name:"/m/01lsmm",id:87,displayName:"scissors"},88:{name:"/m/0kmg4",id:88,displayName:"teddy bear"},89:{name:"/m/03wvsk",id:89,displayName:"hair drier"},90:{name:"/m/012xff",id:90,displayName:"toothbrush"}},d=(a.prototype.getPrefix=function(e){return"lite_mobilenet_v2"===e?"ssd"+e:"ssd_"+e},a.prototype.load=function(){return t(this,void 0,void 0,function(){var a,i,n;return f(this,function(e){switch(e.label){case 0:return a=this,[4,m.loadGraphModel(this.modelPath)];case 1:return a.model=e.sent(),i=u.zeros([1,300,300,3],"int32"),[4,this.model.executeAsync(i)];case 2:return n=e.sent(),[4,Promise.all(n.map(function(e){return e.data()}))];case 3:return e.sent(),n.map(function(e){return e.dispose()}),i.dispose(),[2]}})})},a.prototype.infer=function(p,c,y){return t(this,void 0,void 0,function(){var a,i,n,m,t,d,s,r,o,l;return f(this,function(e){switch(e.label){case 0:return a=u.tidy(function(){return p instanceof u.Tensor||(p=u.browser.fromPixels(p)),u.expandDims(p)}),i=a.shape[1],n=a.shape[2],[4,this.model.executeAsync(a)];case 1:return m=e.sent(),s=m[0].dataSync(),t=m[1].dataSync(),a.dispose(),u.dispose(m),s=this.calculateMaxScores(s,m[0].shape[1],m[0].shape[2]),d=s[0],s=s[1],r=u.getBackend(),"webgl"===u.getBackend()&&u.setBackend("cpu"),o=u.tidy(function(){var e=u.tensor2d(t,[m[1].shape[1],m[1].shape[3]]);return u.image.nonMaxSuppression(e,d,c,y,y)}),l=o.dataSync(),o.dispose(),r!==u.getBackend()&&u.setBackend(r),[2,this.buildDetectedObjects(n,i,t,d,l,s)]}})})},a.prototype.buildDetectedObjects=function(e,a,i,n,m,t){for(var d=m.length,s=[],r=0;r<d;r++){for(var o=[],l=0;l<4;l++)o[l]=i[4*m[r]+l];var p=o[0]*a,c=o[1]*e,y=o[2]*a,u=o[3]*e;o[0]=c,o[1]=p,o[2]=u-c,o[3]=y-p,s.push({bbox:o,class:b[t[m[r]]+1].displayName,score:n[m[r]]})}return s},a.prototype.calculateMaxScores=function(e,a,i){for(var n=[],m=[],t=0;t<a;t++){for(var d=Number.MIN_VALUE,s=-1,r=0;r<i;r++)e[t*i+r]>d&&(d=e[t*i+r],s=r);n[t]=d,m[t]=s}return[n,m]},a.prototype.detect=function(a,i,n){return void 0===i&&(i=20),void 0===n&&(n=.5),t(this,void 0,void 0,function(){return f(this,function(e){return[2,this.infer(a,i,n)]})})},a.prototype.dispose=function(){null!=this.model&&this.model.dispose()},a);function a(e,a){this.modelPath=a||"https://storage.googleapis.com/tfjs-models/savedmodel/"+this.getPrefix(e)+"/model.json"}e.ObjectDetection=d,e.load=function(n){return void 0===n&&(n={}),t(this,void 0,void 0,function(){var a,i;return f(this,function(e){switch(e.label){case 0:if(null==u)throw new Error("Cannot find TensorFlow.js. If you are using a <script> tag, please also include @tensorflow/tfjs on the page before using this model.");if(i=n.base||"lite_mobilenet_v2",a=n.modelUrl,-1===["mobilenet_v1","mobilenet_v2","lite_mobilenet_v2"].indexOf(i))throw new Error("ObjectDetection constructed with invalid base model "+i+". Valid names are 'mobilenet_v1', 'mobilenet_v2' and 'lite_mobilenet_v2'.");return[4,(i=new d(i,a)).load()];case 1:return e.sent(),[2,i]}})})},e.version="2.2.2",Object.defineProperty(e,"__esModule",{value:!0})});