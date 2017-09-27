!function(e,i){"object"==typeof exports&&"object"==typeof module?module.exports=i(require("react"),require("prop-types")):"function"==typeof define&&define.amd?define(["react","prop-types"],i):"object"==typeof exports?exports.SmartBanner=i(require("react"),require("prop-types")):e.SmartBanner=i(e.React,e.PropTypes)}(this,function(e,i){return function(e){function i(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}var t={};return i.m=e,i.c=t,i.i=function(e){return e},i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},i.p="",i(i.s=6)}([function(e,i){var i=e.exports=function(e){e||(e={}),"string"==typeof e&&(e={cookie:e}),void 0===e.cookie&&(e.cookie="");var i={};return i.get=function(i){for(var t=e.cookie.split(/;\s*/),n=0;n<t.length;n++){var s=t[n].split("=");if(unescape(s[0])===i)return unescape(s[1])}},i.set=function(i,t,n){n||(n={});var s=escape(i)+"="+escape(t);return n.expires&&(s+="; expires="+n.expires),n.path&&(s+="; path="+escape(n.path)),e.cookie=s,s},i};if("undefined"!=typeof document){var t=i(document);i.get=t.get,i.set=t.set}},function(i,t){i.exports=e},function(e,i){},function(e,i,t){var n;!function(s,o){"use strict";var r="",a="?",p="function",l="undefined",c="object",u="string",d="model",w="name",m="type",f="vendor",h="version",g="architecture",b="console",v="mobile",y="tablet",k="smarttv",x="wearable",S={extend:function(e,i){var t={};for(var n in e)i[n]&&i[n].length%2==0?t[n]=i[n].concat(e[n]):t[n]=e[n];return t},has:function(e,i){return"string"==typeof e&&-1!==i.toLowerCase().indexOf(e.toLowerCase())},lowerize:function(e){return e.toLowerCase()},major:function(e){return typeof e===u?e.replace(/[^\d\.]/g,"").split(".")[0]:o},trim:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},E={rgx:function(){for(var e,i,t,n,s,r,a,u=0,d=arguments;u<d.length&&!r;){var w=d[u],m=d[u+1];if(typeof e===l){e={};for(n in m)m.hasOwnProperty(n)&&(s=m[n],typeof s===c?e[s[0]]=o:e[s]=o)}for(i=t=0;i<w.length&&!r;)if(r=w[i++].exec(this.getUA()))for(n=0;n<m.length;n++)a=r[++t],s=m[n],typeof s===c&&s.length>0?2==s.length?typeof s[1]==p?e[s[0]]=s[1].call(this,a):e[s[0]]=s[1]:3==s.length?typeof s[1]!==p||s[1].exec&&s[1].test?e[s[0]]=a?a.replace(s[1],s[2]):o:e[s[0]]=a?s[1].call(this,a,s[2]):o:4==s.length&&(e[s[0]]=a?s[3].call(this,a.replace(s[1],s[2])):o):e[s]=a||o;u+=2}return e},str:function(e,i){for(var t in i)if(typeof i[t]===c&&i[t].length>0){for(var n=0;n<i[t].length;n++)if(S.has(i[t][n],e))return t===a?o:t}else if(S.has(i[t],e))return t===a?o:t;return e}},A={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2000:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},T={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[w,h],[/(opios)[\/\s]+([\w\.]+)/i],[[w,"Opera Mini"],h],[/\s(opr)\/([\w\.]+)/i],[[w,"Opera"],h],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]+)*/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i],[w,h],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[w,"IE"],h],[/(edge)\/((\d+)?[\w\.]+)/i],[w,h],[/(yabrowser)\/([\w\.]+)/i],[[w,"Yandex"],h],[/(comodo_dragon)\/([\w\.]+)/i],[[w,/_/g," "],h],[/(micromessenger)\/([\w\.]+)/i],[[w,"WeChat"],h],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[h,[w,"MIUI Browser"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[w,/(.+)/,"$1 WebView"],h],[/android.+samsungbrowser\/([\w\.]+)/i,/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[h,[w,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i,/(qqbrowser)[\/\s]?([\w\.]+)/i],[w,h],[/(uc\s?browser)[\/\s]?([\w\.]+)/i,/ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i,/juc.+(ucweb)[\/\s]?([\w\.]+)/i],[[w,"UCBrowser"],h],[/(dolfin)\/([\w\.]+)/i],[[w,"Dolphin"],h],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[w,"Chrome"],h],[/;fbav\/([\w\.]+);/i],[h,[w,"Facebook"]],[/fxios\/([\w\.-]+)/i],[h,[w,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[h,[w,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[h,w],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[w,[h,E.str,A.browser.oldsafari.version]],[/(konqueror)\/([\w\.]+)/i,/(webkit|khtml)\/([\w\.]+)/i],[w,h],[/(navigator|netscape)\/([\w\.-]+)/i],[[w,"Netscape"],h],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]+)*/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[w,h]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[g,"amd64"]],[/(ia32(?=;))/i],[[g,S.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[g,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[g,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[g,/ower/,"",S.lowerize]],[/(sun4\w)[;\)]/i],[[g,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[g,S.lowerize]]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],[d,f,[m,y]],[/applecoremedia\/[\w\.]+ \((ipad)/],[d,[f,"Apple"],[m,y]],[/(apple\s{0,1}tv)/i],[[d,"Apple TV"],[f,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[f,d,[m,y]],[/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],[d,[f,"Amazon"],[m,y]],[/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],[[d,E.str,A.device.amazon.model],[f,"Amazon"],[m,v]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[d,f,[m,v]],[/\((ip[honed|\s\w*]+);/i],[d,[f,"Apple"],[m,v]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[f,d,[m,v]],[/\(bb10;\s(\w+)/i],[d,[f,"BlackBerry"],[m,v]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],[d,[f,"Asus"],[m,y]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[f,"Sony"],[d,"Xperia Tablet"],[m,y]],[/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i],[[f,"Sony"],[d,"Xperia Phone"],[m,v]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[f,d,[m,b]],[/android.+;\s(shield)\sbuild/i],[d,[f,"Nvidia"],[m,b]],[/(playstation\s[34portablevi]+)/i],[d,[f,"Sony"],[m,b]],[/(sprint\s(\w+))/i],[[f,E.str,A.device.sprint.vendor],[d,E.str,A.device.sprint.model],[m,v]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],[f,d,[m,y]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w+)*/i,/(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],[f,[d,/_/g," "],[m,v]],[/(nexus\s9)/i],[d,[f,"HTC"],[m,y]],[/(nexus\s6p)/i],[d,[f,"Huawei"],[m,v]],[/(microsoft);\s(lumia[\s\w]+)/i],[f,d,[m,v]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[d,[f,"Microsoft"],[m,b]],[/(kin\.[onetw]{3})/i],[[d,/\./g," "],[f,"Microsoft"],[m,v]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w+)*/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[d,[f,"Motorola"],[m,v]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[d,[f,"Motorola"],[m,y]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[f,S.trim],[d,S.trim],[m,k]],[/hbbtv.+maple;(\d+)/i],[[d,/^/,"SmartTV"],[f,"Samsung"],[m,k]],[/\(dtv[\);].+(aquos)/i],[d,[f,"Sharp"],[m,k]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[f,"Samsung"],d,[m,y]],[/smart-tv.+(samsung)/i],[f,[m,k],d],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,/sec-((sgh\w+))/i],[[f,"Samsung"],d,[m,v]],[/sie-(\w+)*/i],[d,[f,"Siemens"],[m,v]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]+)*/i],[[f,"Nokia"],d,[m,v]],[/android\s3\.[\s\w;-]{10}(a\d{3})/i],[d,[f,"Acer"],[m,y]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[f,"LG"],d,[m,y]],[/(lg) netcast\.tv/i],[f,d,[m,k]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w+)*/i],[d,[f,"LG"],[m,v]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[d,[f,"Lenovo"],[m,y]],[/linux;.+((jolla));/i],[f,d,[m,v]],[/((pebble))app\/[\d\.]+\s/i],[f,d,[m,x]],[/android.+;\s(glass)\s\d/i],[d,[f,"Google"],[m,x]],[/android.+(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w)?)\s+build/i],[[d,/_/g," "],[f,"Xiaomi"],[m,v]],[/android.+a000(1)\s+build/i],[d,[f,"OnePlus"],[m,v]],[/\s(tablet)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[m,S.lowerize],f,d]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[h,[w,"EdgeHTML"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[w,h],[/rv\:([\w\.]+).*(gecko)/i],[h,w]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[w,h],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[w,[h,E.str,A.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[w,"Windows"],[h,E.str,A.os.windows.version]],[/\((bb)(10);/i],[[w,"BlackBerry"],h],[/(blackberry)\w*\/?([\w\.]+)*/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,/linux;.+(sailfish);/i],[w,h],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],[[w,"Symbian"],h],[/\((series40);/i],[w],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[w,"Firefox OS"],h],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w+)*/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i,/(hurd|linux)\s?([\w\.]+)*/i,/(gnu)\s?([\w\.]+)*/i],[w,h],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[w,"Chromium OS"],h],[/(sunos)\s?([\w\.]+\d)*/i],[[w,"Solaris"],h],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],[w,h],[/(haiku)\s(\w+)/i],[w,h],[/(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i],[[w,"iOS"],[h,/_/g,"."]],[/(mac\sos\sx)\s?([\w\s\.]+\w)*/i,/(macintosh|mac(?=_powerpc)\s)/i],[[w,"Mac OS"],[h,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w\.]+)*/i],[w,h]]},O=function(e,i){if(!(this instanceof O))return new O(e,i).getResult();var t=e||(s&&s.navigator&&s.navigator.userAgent?s.navigator.userAgent:r),n=i?S.extend(T,i):T;return this.getBrowser=function(){var e=E.rgx.apply(this,n.browser);return e.major=S.major(e.version),e},this.getCPU=function(){return E.rgx.apply(this,n.cpu)},this.getDevice=function(){return E.rgx.apply(this,n.device)},this.getEngine=function(){return E.rgx.apply(this,n.engine)},this.getOS=function(){return E.rgx.apply(this,n.os)},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return t},this.setUA=function(e){return t=e,this},this};O.VERSION="0.7.12",O.BROWSER={NAME:w,MAJOR:"major",VERSION:h},O.CPU={ARCHITECTURE:g},O.DEVICE={MODEL:d,VENDOR:f,TYPE:m,CONSOLE:b,MOBILE:v,SMARTTV:k,TABLET:y,WEARABLE:x,EMBEDDED:"embedded"},O.ENGINE={NAME:w,VERSION:h},O.OS={NAME:w,VERSION:h},typeof i!==l?(typeof e!==l&&e.exports&&(i=e.exports=O),i.UAParser=O):"function"===p&&t(5)?(n=function(){return O}.call(i,t,i,e))!==o&&(e.exports=n):s.UAParser=O;var N=s.jQuery||s.Zepto;if(typeof N!==l){var M=new O;N.ua=M.getResult(),N.ua.get=function(){return M.getUA()},N.ua.set=function(e){M.setUA(e);var i=M.getResult();for(var t in i)N.ua[t]=i[t]}}}("object"==typeof window?window:this)},function(e,t){e.exports=i},function(e,i){(function(i){e.exports=i}).call(i,{})},function(e,i,t){"use strict";function n(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}function s(e,i){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!i||"object"!=typeof i&&"function"!=typeof i?e:i}function o(e,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function, not "+typeof i);e.prototype=Object.create(i&&i.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),i&&(Object.setPrototypeOf?Object.setPrototypeOf(e,i):e.__proto__=i)}Object.defineProperty(i,"__esModule",{value:!0});var r=t(1),a=t.n(r),p=t(4),l=t.n(p),c=t(2),u=(t.n(c),function(){function e(e,i){for(var t=0;t<i.length;t++){var n=i[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(i,t,n){return t&&e(i.prototype,t),n&&e(i,n),i}}()),d="undefined"!=typeof window,w=void 0,m=void 0,f=function(e){var i=new Date;return i.setDate(i.getDate()+e),i.toUTCString()},h=function(e){function i(e){n(this,i);var o=s(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,e));return o.hide=function(){d&&window.document.querySelector("html").classList.remove("smartbanner-show")},o.show=function(){d&&window.document.querySelector("html").classList.add("smartbanner-show")},o.close=function(){o.hide(),m.set("smartbanner-closed","true",{path:"/",expires:f(o.props.daysHidden)}),o.props.onClose&&"function"==typeof o.props.onClose&&o.props.onClose()},o.install=function(){o.hide(),m.set("smartbanner-installed","true",{path:"/",expires:f(o.props.daysReminder)}),o.props.onInstall&&"function"==typeof o.props.onInstall&&o.props.onInstall()},w=t(3),m=t(0),o.state={type:"",appId:"",settings:{}},o}return o(i,e),u(i,[{key:"componentWillMount",value:function(){this.setType(this.props.force)}},{key:"componentWillReceiveProps",value:function(e){e.force!==this.props.force&&this.setType(e.force)}},{key:"setType",value:function(e){var i=this,t=void 0;if(d){var n=w(window.navigator.userAgent);e?t=e:"Windows Phone"===n.os.name||"Windows Mobile"===n.os.name?t="windows":"iOS"===n.os.name&&(this.props.ignoreIosVersion||parseInt(n.os.version,10)<6||"Mobile Safari"!==n.browser.name)?t="ios":"Amazon"===n.device.vender||"Silk"===n.browser.name?t="kindle":"Android"===n.os.name&&(t="android")}this.setState({type:t},function(){t&&i.setSettingsByType()})}},{key:"setSettingsByType",value:function(){var e=this,i={ios:{appMeta:function(){return e.props.appMeta.ios},iconRels:["apple-touch-icon-precomposed","apple-touch-icon"],getStoreLink:function(){return"https://itunes.apple.com/"+e.props.appStoreLanguage+"/app/id"}},android:{appMeta:function(){return e.props.appMeta.android},iconRels:["android-touch-icon","apple-touch-icon-precomposed","apple-touch-icon"],getStoreLink:function(){return"http://play.google.com/store/apps/details?id="}},windows:{appMeta:function(){return e.props.appMeta.windows},iconRels:["windows-touch-icon","apple-touch-icon-precomposed","apple-touch-icon"],getStoreLink:function(){return"http://www.windowsphone.com/s?appid="}},kindle:{appMeta:function(){return e.props.appMeta.kindle},iconRels:["windows-touch-icon","apple-touch-icon-precomposed","apple-touch-icon"],getStoreLink:function(){return"amzn://apps/android?asin="}}};this.setState({settings:i[this.state.type]},function(){e.state.type&&e.parseAppId()})}},{key:"parseAppId",value:function(){if(!d)return"";var e=window.document.querySelector('meta[name="'+this.state.settings.appMeta()+'"]');if(!e)return"";var i="";return i="windows"===this.state.type?e.getAttribute("content"):/app-id=([^\s,]+)/.exec(e.getAttribute("content"))[1],this.setState({appId:i}),i}},{key:"retrieveInfo",value:function(){var e=this.props.url||this.state.settings.getStoreLink()+this.state.appId,i="\n      "+this.props.price[this.state.type]+" - "+this.props.storeText[this.state.type],t=void 0;if(d)for(var n=0,s=this.state.settings.iconRels.length;n<s;n++){var o=window.document.querySelector('link[rel="'+this.state.settings.iconRels[n]+'"]');if(o){t=o.getAttribute("href");break}}return{icon:t,link:e,inStore:i}}},{key:"render",value:function(){if(!d)return a.a.createElement("div",null);if(!this.state.type||window.navigator.standalone||m.get("smartbanner-closed")||m.get("smartbanner-installed"))return a.a.createElement("div",null);if(!this.state.appId)return a.a.createElement("div",null);this.show();var e=this.retrieveInfo(),i=e.icon,t=e.link,n=e.inStore,s="smartbanner smartbanner-"+this.state.type,o={backgroundImage:"url("+i+")"};return a.a.createElement("div",{className:s},a.a.createElement("div",{className:"smartbanner-container"},a.a.createElement("a",{className:"smartbanner-close",onClick:this.close},"×"),a.a.createElement("span",{className:"smartbanner-icon",style:o}),a.a.createElement("div",{className:"smartbanner-info"},a.a.createElement("div",{className:"smartbanner-title"},this.props.title),a.a.createElement("div",{className:"smartbanner-author"},this.props.author),a.a.createElement("div",{className:"smartbanner-description"},n)),a.a.createElement("div",{className:"smartbanner-wrapper"},a.a.createElement("a",{href:t,onClick:this.install,className:"smartbanner-button"},a.a.createElement("span",{className:"smartbanner-button-text"},this.props.button)))))}}]),i}(r.Component);h.propTypes={daysHidden:l.a.number,daysReminder:l.a.number,appStoreLanguage:l.a.string,button:l.a.string,storeText:l.a.objectOf(l.a.string),price:l.a.objectOf(l.a.string),force:l.a.string,title:l.a.string,author:l.a.string,url:l.a.string,ignoreIosVersion:l.a.bool,appMeta:l.a.shape({android:l.a.string,ios:l.a.string,windows:l.a.string,kindle:l.a.string}),onClose:l.a.func,onInstall:l.a.func},h.defaultProps={daysHidden:15,daysReminder:90,appStoreLanguage:d?(window.navigator.language||window.navigator.userLanguage).slice(-2)||"us":"us",button:"View",storeText:{ios:"On the App Store",android:"In Google Play",windows:"In Windows Store",kindle:"In the Amazon Appstore"},price:{ios:"Free",android:"Free",windows:"Free",kindle:"Free"},force:"",title:"",author:"",appMeta:{ios:"apple-itunes-app",android:"google-play-app",windows:"msApplication-ID",kindle:"kindle-fire-app"}},i.default=h}])});