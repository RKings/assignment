webpackJsonp([1,2],[,,,,,,,,,,,,,,function(e,t,a){"use strict";var s=a(3),n=a(8),i=a(42),r=a(43);s.a.use(n.d);var o={},c={},l={},u={breakpoints:i.a,instagram:r.a},d=new n.d.Store({state:o,mutations:c,actions:l,modules:u});t.a=d},,,function(e,t,a){var s=a(2)(a(47),a(84),null,null);e.exports=s.exports},function(e,t,a){var s=a(2)(a(49),a(80),null,null);e.exports=s.exports},,function(e,t,a){"use strict";var s=a(3),n=a(90),i=a.n(n),r=a(116),o=(a.n(r),a(70)),c=a.n(o),l=a(41),u=a(14);a.d(t,"a",function(){return d}),s.a.use(i.a),a.i(r.sync)(u.a,l.a);var d=new s.a(Object.assign({router:l.a,store:u.a},c.a))},function(e,t,a){"use strict";var s=a(66),n=a.n(s);window.Promise=window.Promise||n.a},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(65),n=a.n(s);n.a.install({onUpdateReady:function(){console.log("update ready"),n.a.applyUpdate()},onUpdated:function(){console.log("updated"),location.reload()}})},,,,,,,,,,,,,,,,,,,function(e,t,a){"use strict";var s=a(3),n=a(88),i=(a(14),a(77)),r=a.n(i),o=a(76),c=a.n(o);s.a.use(n.a);var l=[{path:"/",redirect:"/home"},{name:"home",path:"/home",components:{default:r.a}},{name:"contact",path:"/contact",components:{default:c.a}}],u=new n.a({mode:"history",routes:l});u.beforeEach(function(e,t,a){window.scrollTo(0,0),a()}),t.a=u},function(e,t,a){"use strict";var s=(a(3),{breakpoints:{s:"576px",m:"768px",l:"992px",xl:"1240px"}});t.a={namespaced:!0,state:s}},function(e,t,a){"use strict";var s=a(3),n=a(23),i=a.n(n),r={accessToken:"1518255452.1677ed0.197ccd0398734505bc7347053075d221",baseUrl:"https://api.instagram.com/v1",request:"/users/self/media/recent/"},o={getFeed:function(e){return e.instagramFeed?e.instagramFeed:{}}},c={requestFeed:function(e,t){var a=e.commit;i.a.create({baseURL:r.baseUrl,timeout:3e3}).get(r.request+"?count="+t+"&access_token="+r.accessToken).then(function(e){a("SET_INSTAGRAM_FEED",JSON.parse(e.request.response))}).catch(function(e){console.error(e)})}},l={SET_INSTAGRAM_FEED:function(e,t){t.hasOwnProperty("data")&&(t=t.data),s.a.set(e,"instagramFeed",t)}};t.a={namespaced:!0,state:r,getters:o,mutations:l,actions:c}},,,function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(97);a.n(s);t.default={name:"dept-contact-form",data:function(){return{firstName:"",surname:"",eMail:"",telephone:null,message:"",submitted:!1,noticeMessage:"Please complete the form and try again.",successMessage:"Thank you, we have received your message.",errorMessage:"Something went wrong, please try again.",formSend:!1}},methods:{submit:function(){this.submitted=!0,0==this.$v.$invalid&&this.feedback("success"),this.toTop()},toTop:function(){scrollTo(window.scrollY,window.scrollX+this.$el.getBoundingClientRect().top)},feedback:function(e){"success"==e?(this.formSend=!0,this.noticeMessage=this.successMessage):this.noticeMessage=this.errorMessage}},validations:{firstName:{required:s.required,minLength:a.i(s.minLength)(2)},surname:{required:s.required,between:a.i(s.minLength)(2)},eMail:{required:s.required,email:s.email},telephone:{},message:{required:s.required}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"dept-footer"}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"dept-hamburger",props:["menuOpen"]}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(72),n=a.n(s);t.default={name:"dept-header",components:{deptHamburger:n.a},data:function(){return{menuOpen:!1,lastToggle:0}},methods:{menuToggle:function(){var e=Date.now();if(e-this.lastToggle>350){this.lastToggle=e;var t=this.$el.querySelector(".header__navigation"),a=this.menuOpen?350:0;setTimeout(function(){return t.classList.toggle("header__navigation--visible")},a),setTimeout(function(){return t.classList.toggle("header__navigation--show")},50),this.menuOpen=!this.menuOpen}}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(45),n=a(67),i=a.n(n),r=a(8);t.default={name:"dept-hero",methods:{jumpToBottom:function(){var e=this.$el.getBoundingClientRect();i()(this.$el,{offset:e.height-150,duration:300})}},computed:Object.assign({},a.i(r.c)("breakpoints",["breakpoints"])),mounted:function(){var e=this.$el;new s.a(e,{loop:!0,loopedSlides:1,navigation:{nextEl:".hero__button--next",prevEl:".hero__button--prev"}})}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(8);t.default={name:"dept-instafeed",data:function(){return{count:10}},computed:Object.assign({},a.i(s.a)("instagram",["getFeed"]),{emptyFeed:function(){return!this.getFeed.length}}),methods:Object.assign({},a.i(s.b)("instagram",["requestFeed"])),mounted:function(){this.requestFeed(this.count)}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"dept-welcome"}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(18),n=a.n(s),i=a(17),r=a.n(i),o=a(71),c=a.n(o);t.default={components:{DeptHeader:n.a,DeptContactForm:c.a,DeptFooter:r.a}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(18),n=a.n(s),i=a(73),r=a.n(i),o=a(75),c=a.n(o),l=a(74),u=a.n(l),d=a(17),m=a.n(d);t.default={components:{DeptHeader:n.a,DeptHero:r.a,DeptWelcome:c.a,DeptInstafeed:u.a,DeptFooter:m.a}}},,,,,,,function(e,t){},function(e,t,a){e.exports=a.p+"static/media/beng-xlarge.bb2ec683.jpg"},function(e,t,a){e.exports=a.p+"static/media/walibi-xlarge.31aea65f.jpg"},,,,,,,function(e,t,a){a(61);var s=a(2)(null,a(79),null,null);e.exports=s.exports},function(e,t,a){var s=a(2)(a(46),a(78),null,null);e.exports=s.exports},function(e,t,a){var s=a(2)(a(48),a(87),null,null);e.exports=s.exports},function(e,t,a){var s=a(2)(a(50),a(85),null,null);e.exports=s.exports},function(e,t,a){var s=a(2)(a(51),a(82),null,null);e.exports=s.exports},function(e,t,a){var s=a(2)(a(52),a(86),null,null);e.exports=s.exports},function(e,t,a){var s=a(2)(a(53),a(83),null,null);e.exports=s.exports},function(e,t,a){var s=a(2)(a(54),a(81),null,null);e.exports=s.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"contact-form"},[a("div",{staticClass:"contact-form__wrapper"},[a("h1",{staticClass:"contact-form__title"},[e._v("\n            We would love to hear from you\n        ")]),e._v(" "),a("div",{staticClass:"contact-form__form"},[e.submitted&&(e.$v.$invalid||e.formSend)?a("div",{staticClass:"contact-form__notice"},[a("div",{staticClass:"contact-form__notice-icon",class:{"contact-form__notice-icon--check":e.formSend}}),a("span",[e._v(e._s(e.noticeMessage))])]):e._e(),e._v(" "),e.formSend?e._e():a("form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[a("div",{staticClass:"contact-form__form-wrapper"},[a("div",{staticClass:"contact-form__input",class:{"contact-form__input--checked":!e.$v.firstName.$invalid}},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.firstName.$model,expression:"$v.firstName.$model",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"First name"},domProps:{value:e.$v.firstName.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.firstName,"$model",t.target.value.trim())},blur:function(t){e.$forceUpdate()}}}),e._v(" "),e.submitted&&e.$v.firstName.$invalid?a("div",{staticClass:"contact-form__input-validation-fail"},[a("div",{staticClass:"contact-form__arrow"}),e._v(" "),a("span",[e._v("We need your first name.")])]):e._e()]),e._v(" "),a("div",{staticClass:"contact-form__input",class:{"contact-form__input--checked":!e.$v.surname.$invalid}},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.surname.$model,expression:"$v.surname.$model",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"Last name"},domProps:{value:e.$v.surname.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.surname,"$model",t.target.value.trim())},blur:function(t){e.$forceUpdate()}}}),e._v(" "),e.submitted&&e.$v.surname.$invalid?a("div",{staticClass:"contact-form__input-validation-fail"},[a("div",{staticClass:"contact-form__arrow"}),e._v(" "),a("span",[e._v("We need your last name.")])]):e._e()]),e._v(" "),a("div",{staticClass:"contact-form__input",class:{"contact-form__input--checked":!e.$v.eMail.$invalid}},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.eMail.$model,expression:"$v.eMail.$model",modifiers:{trim:!0}}],attrs:{type:"email",placeholder:"Your E-mail"},domProps:{value:e.$v.eMail.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.eMail,"$model",t.target.value.trim())},blur:function(t){e.$forceUpdate()}}}),e._v(" "),e.submitted&&e.$v.eMail.$invalid?a("div",{staticClass:"contact-form__input-validation-fail"},[a("div",{staticClass:"contact-form__arrow"}),e._v(" "),a("span",[e._v("Please use a valid e-mail address.")])]):e._e()]),e._v(" "),a("div",{staticClass:"contact-form__input"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.telephone.$model,expression:"$v.telephone.$model",modifiers:{trim:!0}}],attrs:{type:"tel",placeholder:"Your Phone number (optional)"},domProps:{value:e.$v.telephone.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.telephone,"$model",t.target.value.trim())},blur:function(t){e.$forceUpdate()}}})]),e._v(" "),a("div",{staticClass:"contact-form__input",class:{"contact-form__input--checked":!e.$v.message.$invalid}},[a("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.message.$model,expression:"$v.message.$model",modifiers:{trim:!0}}],attrs:{placeholder:"Your message..."},domProps:{value:e.$v.message.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.message,"$model",t.target.value.trim())},blur:function(t){e.$forceUpdate()}}}),e._v(" "),e.submitted&&e.$v.message.$invalid?a("div",{staticClass:"contact-form__input-validation-fail"},[a("div",{staticClass:"contact-form__arrow"}),e._v(" "),a("span",[e._v("Sorry, your message can’t be empty.")])]):e._e()])]),e._v(" "),a("input",{attrs:{type:"submit",value:"Send"}})])])])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"header"},[a("div",{staticClass:"header__wrapper"},[a("div",{staticClass:"header__hamburger",on:{click:e.menuToggle}},[a("dept-hamburger",{attrs:{"menu-open":e.menuOpen}})],1),e._v(" "),a("div",{staticClass:"header__logo"}),e._v(" "),a("nav",{staticClass:"header__navigation"},[a("router-link",{staticClass:"header__link",attrs:{to:"/home"}},[e._v("Home")]),e._v(" "),a("router-link",{staticClass:"header__link",attrs:{to:"/people"}},[e._v("People")]),e._v(" "),a("router-link",{staticClass:"header__link",attrs:{to:"/contact"}},[e._v("Contact")])],1)])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page"},[a("dept-header"),e._v(" "),a("dept-hero"),e._v(" "),a("dept-welcome"),e._v(" "),a("dept-instafeed"),e._v(" "),a("dept-footer")],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"instafeed"},[e._m(0),e._v(" "),a("div",{staticClass:"instafeed__grid"},[e._l(e.getFeed,function(t){return a("div",{staticClass:"instafeed__item"},[a("picture",[a("source",{attrs:{srcset:t.images.low_resolution.url,media:"(max-width: 340px)"}}),e._v(" "),a("source",{attrs:{srcset:t.images.standard_resolution.url,media:"(min-width: 341px)"}}),e._v(" "),a("img",{attrs:{src:t.images.standard_resolution.url,alt:t.caption.text}})]),e._v(" "),a("div",{staticClass:"instafeed__caption"},[a("p",[e._v(e._s(t.caption.text))])]),e._v(" "),a("a",{staticClass:"instafeed__hittarget",attrs:{href:t.link,target:"_blank"}})])}),e._v(" "),e.emptyFeed?a("div",{staticClass:"instafeed__spinner"}):e._e()],2)])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"instafeed__intro"},[a("h2",{staticClass:"instafeed__title"},[e._v("Follow us on Instagram")]),e._v(" "),a("a",{staticClass:"instafeed__account",attrs:{href:"https://www.instagram.com/tamtamnl/",target:"_blank"}},[e._v("@tamtamnl")])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page"},[a("dept-header"),e._v(" "),a("dept-contact-form"),e._v(" "),a("dept-footer")],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",{staticClass:"footer"},[a("a",{staticClass:"footer__icon footer__icon--facebook",attrs:{href:"http://www.facebook.com",target:"_blank"}}),e._v(" "),a("a",{staticClass:"footer__icon footer__icon--twitter",attrs:{href:"http://www.twitter.com",target:"_blank"}}),e._v(" "),a("a",{staticClass:"footer__icon footer__icon--instagram",attrs:{href:"http://www.instagram.com",target:"_blank"}})])}]}},function(e,t,a){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hero swiper-container"},[e._m(0),e._v(" "),a("div",{staticClass:"hero__nav"},[a("div",{staticClass:"hero__button hero__button--prev"}),e._v(" "),a("a",{staticClass:"hero__button",attrs:{href:"#"},on:{click:function(e){e.preventDefault()}}},[e._v("View Case")]),e._v(" "),a("div",{staticClass:"hero__button hero__button--next"})]),e._v(" "),a("div",{staticClass:"hero__cta"},[a("div",{staticClass:"hero__cta-button",on:{click:e.jumpToBottom}}),e._v(" "),a("div",{staticClass:"hero__cta-chevron"})])])},staticRenderFns:[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"swiper-wrapper"},[s("div",{staticClass:"hero__slide swiper-slide"},[s("picture",[s("img",{staticClass:"hero__image",attrs:{src:a(63),alt:"walibi"}})]),e._v(" "),s("h2",{staticClass:"hero__title"},[e._v("Walibi")])]),e._v(" "),s("div",{staticClass:"hero__slide swiper-slide"},[s("picture",[s("img",{staticClass:"hero__image",attrs:{src:a(62),alt:"beeld en geluid"}})]),e._v(" "),s("h2",{staticClass:"hero__title"},[e._v("Beeld en Geluid")])])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"welcome"},[a("h1",[e._v("We are Tam Tam")]),e._v(" "),a("p",[e._v("\n        Tam Tam is a full service digital agency focusing on Dutch Digital Service Design. We combine strategy, design, technology and interaction to make the digital interactions between company and customer valuable and memorable. We work for awesome brands with a team of 120 digitals from our office in Amsterdam. Making great work and having a blast doing it. That’s what we believe in.\n    ")])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("svg",{staticClass:"hamburger",class:{"hamburger--open":e.menuOpen},attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"24px",height:"22px",viewBox:"0 0 24 22","enable-background":"new 0 0 24 22","xml:space":"preserve"}},[a("rect",{staticClass:"hamburger__top-bar",attrs:{y:"0",fill:"#FFFFFF",width:"24",height:"4"}}),e._v(" "),a("rect",{staticClass:"hamburger__middle-bar",attrs:{y:"9",fill:"#FFFFFF",width:"24",height:"4"}}),e._v(" "),a("rect",{staticClass:"hamburger__middle-bar-2",attrs:{y:"9",fill:"#FFFFFF",width:"24",height:"4"}}),e._v(" "),a("rect",{staticClass:"hamburger__bottom-bar",attrs:{y:"18",fill:"#FFFFFF",width:"24",height:"4"}})])},staticRenderFns:[]}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=(a(21),a(20));a(22),s.a.$mount("#app")}],[117]);
//# sourceMappingURL=client.9b5c92be.js.map