(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"2Gk/":function(t,e,a){},IGkE:function(t,e,a){"use strict";var s={props:["header"]},n=a("KHd+"),i=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"py-12 px-4 text-center "},[a("div",{staticClass:"w-full max-w-2xl mx-auto"},[a("span",{staticClass:"font-semibold"},[t._v(t._s(t.header.title))]),a("h2",{staticClass:"text-4xl mt-2 mb-6 leading-tight font-semibold font-heading"},[t._v("\n      "+t._s(t.header.subtitle)+"\n    ")]),a("p",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"mb-8 text-gray-700 leading-relaxed",domProps:{innerHTML:t._s(t.header.content)}}),a("div",[t.header.btn1?a("g-link",{staticClass:"rounded-md learn-button px-5 py-3 mr-3 font-semibold",attrs:{to:t.header.link1}},[t._v(t._s(t.header.btn1))]):t._e(),t.header.btn2?a("g-link",{staticClass:"rounded-md learn-button px-5 py-3 mr-3 font-semibold",attrs:{to:t.header.link2}},[t._v(t._s(t.header.btn2))]):t._e()],1)])])}),[],!1,null,null,null);e.a=i.exports},MtIX:function(t,e,a){"use strict";var s={props:["title","excerpt","altImg","image","button","link"],computed:{img:function(){return this.image?this.image.src?this.image.src:this.image:""}}},n=(a("u0Xl"),a("KHd+")),i=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"py-12 px-4"},[a("div",{staticClass:"flex flex-wrap items-center text-center lg:text-left -mx-2"},[a("div",{staticClass:"lg:w-1/2 px-2 lg:pr-10 mt-10 lg:mt-0 order-1 lg:order-none"},[a("h2",{staticClass:"text-5xl lg:text-8xl mb-6 leading-tight font-semibold font-heading"},[t._v("\n        "+t._s(t.title)+"\n      ")]),a("p",{staticClass:"mb-8 text-gray-700 leading-relaxed"},[t._v(t._s(t.excerpt))]),t.button?a("div",[t.link.includes("http")?a("a",{staticClass:"inline-block py-4 px-8 mr-6 leading-none text-white bg-gray-900 hover:bg-gray-700 font-semibold rounded shadow",attrs:{target:"_blank",href:t.link}},[t._v(t._s(t.button))]):a("a",{staticClass:"inline-block py-4 px-8 mr-6 leading-none text-white bg-gray-900 hover:bg-gray-700 font-semibold rounded shadow",attrs:{href:t.link}},[t._v(t._s(t.button))])]):t._e()]),a("div",{staticClass:"lg:w-1/2 px-2"},[a("g-image",{attrs:{src:t.img,alt:t.altImg}})],1)])])}),[],!1,null,"827af0f4",null);e.a=i.exports},RRjm:function(t,e,a){"use strict";var s={props:["cta"]},n=a("KHd+"),i=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"py-12 px-4 text-center"},[a("div",{staticClass:"w-full max-w-2xl mx-auto"},[a("h2",{staticClass:"text-4xl leading-tight font-semibold font-heading"},[t._v("\n      "+t._s(t.cta.title)+"\n    ")]),a("p",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"mt-6 mb-8 text-gray-700 leading-relaxed",domProps:{innerHTML:t._s(t.cta.content)}}),t.cta.button?a("g-link",{staticClass:"rounded-md learn-button px-5 py-3 mr-3 font-semibold",attrs:{to:t.cta.link}},[t._v(t._s(t.cta.button))]):t._e()],1)])}),[],!1,null,null,null);e.a=i.exports},T4s8:function(t,e,a){},akyF:function(t,e,a){"use strict";var s={computed:{img:function(){return this.card.image.src?"background-image:url("+this.card.image.src+")":this.card.image}},props:["card"]},n=a("KHd+"),i=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"lg:py-12 lg:flex lg:justify-center flex flex-col"},[a("div",{staticClass:"bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg"},[a("div",{staticClass:"lg:w-1/2"},[a("div",{staticClass:"h-64 bg-cover lg:rounded-lg lg:h-full",style:t.img})]),a("div",{staticClass:"py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2"},[a("h2",{staticClass:"text-3xl text-gray-700 font-bold"},[t._v(t._s(t.card.title))]),a("p",{staticClass:"mt-4 text-gray-700"},[t._v(t._s(t.card.excerpt))]),t.card.button?a("div",{staticClass:"mt-8"},[t.card.link.includes("http")?a("a",{staticClass:"bg-gray-900 learn-button hover:bg-gray-700 text-gray-100 px-5 py-3 font-semibold rounded",attrs:{target:"_blank",href:t.card.link}},[t._v(t._s(t.card.button))]):a("a",{staticClass:"bg-gray-900 learn-button hover:bg-gray-700 text-gray-100 px-5 py-3 font-semibold rounded",attrs:{href:t.card.link}},[t._v(t._s(t.card.button))])]):t._e()])])])])}),[],!1,null,null,null);e.a=i.exports},bMn3:function(t,e,a){"use strict";var s={props:["contacts"]},n=a("KHd+"),i=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-white"},[a("div",{staticClass:"max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8"},[a("div",{staticClass:"grid grid-cols-1 gap-16"},[a("div",{staticClass:"lg:grid lg:grid-cols-3 lg:gap-8"},[a("h2",{staticClass:"text-4xl mb-6 leading-tight font-semibold font-heading"},[t._v("\n          Get in touch\n        ")]),a("div",{staticClass:"mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2"},t._l(t.contacts,(function(e,s){return a("div",{key:s},[a("h4",{staticClass:"text-lg leading-6 font-medium text-gray-700"},[t._v("\n              "+t._s(e.title)+"\n            ")]),a("div",{staticClass:"mt-2 text-base leading-6 text-gray-500"},[a("div",[t._v("\n                "+t._s(e.mail)+"\n              ")])]),a("div",{staticClass:"mt-1"},[t._v("\n              "+t._s(e.phone)+"\n            ")])])})),0)])])]),a("div",{staticClass:"border-t-2 border-gray-100"})])}),[],!1,null,null,null);e.a=i.exports},fuxi:function(t,e,a){"use strict";var s={props:["logos"],methods:{img:function(t){return t?t.src?t.src:t:""}}},n=a("KHd+"),i=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"pt-8 px-4 text-center",attrs:{id:"partners"}},[t._m(0),a("div",{staticClass:"flex flex-wrap -mx-8"},t._l(t.logos,(function(e,s){return a("g-link",{key:s,staticClass:"w-1/2 md:w-1/6 px-8 mb-8",attrs:{to:e.url,target:"_blank"}},[a("g-image",{attrs:{src:t.img(e.image)}})],1)})),1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"max-w-2xl mx-auto mb-8"},[e("h2",{staticClass:"text-4xl leading-tight mb-6 font-semibold font-heading"},[this._v("\n      MEET SOME OF OUR PARTNERS\n    ")]),e("p",{staticClass:"text-gray-400 leading-relaxed"})])}],!1,null,null,null);e.a=i.exports},hcyh:function(t,e,a){"use strict";var s={props:["main","features"]},n=a("KHd+"),i=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"py-12 px-4",attrs:{id:"features"}},[a("h2",{staticClass:"text-4xl text-center mb-12 font-semibold font-heading"},[t._v("\n    "+t._s(t.main.title)+"\n  ")]),a("div",{staticClass:"flex flex-wrap mx-4 mb-6"},t._l(t.features,(function(e){return a("div",{key:e.id,staticClass:"lg:w-1/2 px-4 mb-6 text-center"},[e.svg?a("g-image",{staticClass:"w-10 h-10 mx-auto",attrs:{src:e.svg.src,alt:e.svg}}):t._e(),a("h3",{staticClass:"text-xl my-3 font-semibold font-heading"},[t._v("\n        "+t._s(e.title)+"\n      ")]),a("p",{staticClass:"text-sm text-gray-700 leading-relaxed"},[t._v("\n        "+t._s(e.excerpt)+"\n      ")])],1)})),0),t.main.btn?a("div",{staticClass:"text-center"},[a("g-link",{staticClass:"bg-gray-900 learn-button hover:bg-gray-700 text-gray-100 px-5 py-3 mr-3 font-semibold rounded shadow",attrs:{to:t.main.link}},[t._v(t._s(t.main.btn))]),a("p",{staticClass:"text-sm text-gray-400 mt-5"},[t._v("\n      "+t._s(t.main.excerpt)+"\n    ")])],1):t._e()])}),[],!1,null,null,null);e.a=i.exports},jHya:function(t,e,a){"use strict";var s={props:["products"],methods:{img:function(t){return t?t.src?t.src:t:""}}},n=(a("xEPE"),a("KHd+")),i=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"grid grid-cols-1 py-12 gap-4 sm:grid-cols-3"},t._l(t.products,(function(e,s){return a("div",{key:s,staticClass:"p-2 sm:p-0 text-center cursor-pointer"},[a("div",{staticClass:"max-w-sm rounded overflow-hidden shadow-lg hover:bg-white transition duration-500 bg-white"},[a("div",{staticClass:"px-6 py-4"},[a("g-image",{attrs:{src:t.img(e.image)}}),a("p",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"text-gray-700 text-base",domProps:{innerHTML:t._s(e.content)}})],1)])])})),0)])}),[],!1,null,"9574c2f2",null);e.a=i.exports},nD9k:function(t,e,a){"use strict";a("T4s8")},pCoO:function(t,e,a){},phRe:function(t,e,a){"use strict";var s={props:["signup"]},n=a("KHd+"),i=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"py-8 px-4"},[a("div",{staticClass:"flex flex-wrap items-center -mx-4"},[a("div",{staticClass:"w-full lg:w-4/6 px-4 mb-8 lg:mb-0 text-center lg:text-left"},[a("h2",{staticClass:"text-xl font-semibold font-heading"},[t._v("\n        "+t._s(t.signup.title)+"\n      ")])]),a("div",{staticClass:"w-full lg:w-2/6 px-4 text-center"},[t.signup.button1?a("g-link",{staticClass:"bg-gray-900 learn-button hover:bg-gray-700 text-gray-100 px-5 py-3 mr-3 font-semibold rounded shadow",attrs:{to:t.signup.link1}},[t._v(t._s(t.signup.button1))]):t._e(),t.signup.button2?a("g-link",{staticClass:"text-gray-900 bg-transparent hover:underline",attrs:{to:t.signup.link2}},[t._v(t._s(t.signup.button2))]):t._e()],1)])])}),[],!1,null,null,null);e.a=i.exports},qaXD:function(t,e,a){"use strict";var s={props:["main","sections"]},n=a("KHd+"),i=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"py-12 px-4 text-center"},[a("h2",{staticClass:"text-4xl mb-6 leading-tight font-semibold font-heading"},[t._v("\n    "+t._s(t.main.title)+"\n  ")]),a("p",{staticClass:"text-gray-700 mb-10"},[t._v(t._s(t.main.description))]),a("div",{staticClass:"flex flex-wrap -mx-8"},t._l(t.sections,(function(e,s){return a("div",{key:s,staticClass:"w-1/2 md:w-1/6 px-8 mb-8 active--exact active"},[a("g-link",{attrs:{to:e.url}},[a("g-image",{staticClass:"w-1/8 mx-auto mb-8 h-30",attrs:{src:e.svg.src,alt:e.title}})],1),a("p",{staticClass:"text-lg leading-tight text-gray-700 mb-6 mx-3"},[a("span",[t._v(t._s(e.title))])]),a("p",{staticClass:"text-gray-700"},[t._v("\n        "+t._s(e.excerpt)+"\n      ")])],1)})),0),a("div",[t.main.button?a("g-link",{staticClass:"bg-gray-900 learn-button hover:bg-gray-700 text-gray-100 px-5 py-3 mr-3 font-semibold rounded shadow",attrs:{to:t.main.link}},[t._v(t._s(t.main.button))]):t._e()],1)])}),[],!1,null,null,null);e.a=i.exports},u0Xl:function(t,e,a){"use strict";a("2Gk/")},xEPE:function(t,e,a){"use strict";a("pCoO")},zwLt:function(t,e,a){"use strict";a.r(e);var s=a("akyF"),n=a("MtIX"),i={props:["slides"],data:function(){return{activeIndex:0}},methods:{setActive:function(t){this.activeIndex=t}}},l=a("KHd+"),r=Object(l.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"my-12"},[a("nav",{staticClass:"inline-block w-1/4 border-r-2 border-gray-200"},t._l(t.slides,(function(e,s){return a("a",{key:s,staticClass:"mt-1 capitalize group flex items-center px-3 py-2 text-sm leading-5 font-medium hover:text-gray-900 hover:bg-gray-400 focus:outline-none transition border-blue-500 hover:bg-gray-100 transition ease-in-out duration-150",class:{"border-r-3 border-blue-500 hover:bg-gray-100":t.activeIndex===s},attrs:{href:"#"+s},on:{click:function(e){return t.setActive(s)}}},[a("span",{staticClass:"truncate"},[t._v(" "+t._s(e.title)+" ")])])})),0),a("div",{staticClass:"content inline-block h-full w-3/4 align-top p-5 transition ease-in-out duration-150"})])}),[],!1,null,null,null).exports,o=a("bMn3"),c=a("IGkE"),g={props:["HIWData","main"]},d=Object(l.a)(g,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"py-12 px-4"},[a("div",{staticClass:"flex flex-wrap items-center text-center lg:text-left -mx-2"},[a("div",{staticClass:"lg:w-1/2 px-2"},[a("g-image",{staticClass:"g-image g-image--lazy g-image--loading",attrs:{src:t.main.image.src,alt:t.main.title}})],1),a("div",{staticClass:"lg:w-1/2 px-2 lg:pl-16 mt-10 lg:mt-0"},[a("h2",{staticClass:"text-4xl px-4 mb-4 leading-tight font-semibold font-heading"},[t._v("\n        "+t._s(t.main.title)+"\n      ")]),t._l(t.HIWData,(function(e,s){return a("div",{key:s,staticClass:"p-4 mb-4",class:{"rounded shadow-md":s%2!=0}},[a("h3",{staticClass:"text-2xl mb-2 font-semibold font-heading"},[t._v("\n          "+t._s(e.title)+"\n        ")]),a("p",{staticClass:"text-gray-700 leading-relaxed"},[t._v("\n          "+t._s(e.excerpt)+"\n        ")])])}))],2)])])}),[],!1,null,null,null).exports,m=a("jHya"),u=a("hcyh"),p=a("fuxi"),x=a("RRjm"),v=a("phRe"),h=a("qaXD"),f={props:["split"]},_=Object(l.a)(f,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"relative bg-gray-800"},[a("div",{staticClass:"h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2"},[a("g-image",{staticClass:"w-full h-full object-cover",attrs:{src:t.split.image,alt:"Support team"}})],1),a("div",{staticClass:"relative max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16"},[a("div",{staticClass:"md:ml-auto md:w-1/2 md:pl-10"},[a("div",{staticClass:"text-base leading-6 font-semibold uppercase tracking-wider text-gray-300"},[t._v("\n        "+t._s(t.split.subtitle)+"\n      ")]),a("h2",{staticClass:"mt-2 text-white text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10"},[t._v("\n        "+t._s(t.split.title)+"\n      ")]),a("p",{staticClass:"mt-3 text-lg leading-7 text-gray-300"},[t._v("\n        "+t._s(t.split.excerpt)+"\n      ")]),a("div",{staticClass:"mt-8"},[a("div",{staticClass:"inline-flex rounded-md shadow"},[a("a",{staticClass:"mt-2 text-gray-900 bg-white hover:text-gray-600 shadow px-6 py-3 inline-flex items-center text-base rounded shadow leading-none font-semibold",attrs:{href:t.split.sourceUrl}},[t._v("\n            "+t._s(t.split.btnTxt)+"\n            "),a("svg",{staticClass:"-mr-1 ml-3 h-5 w-5 text-gray-400",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[a("path",{attrs:{d:"M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"}}),a("path",{attrs:{d:"M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"}})])])])])])])])}),[],!1,null,null,null).exports,b={components:{NewCard:s.a,Header:n.a,VerticalNav:r,GetInTouch:o.a,SolutionsHeader:c.a,HowItWorks:d,ShowcaseProducts:m.a,Features:u.a,logoShowcase:p.a,CallToAction:x.a,SignUp:v.a,Comparison:h.a,SplitWithImage:_},metaInfo:function(){return{title:this.$page.markdownPage.title}}},C=(a("nD9k"),null),w=Object(l.a)(b,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",{attrs:{hideHeader:!0,disableScroll:!0}},[a("div",{staticClass:"container sm:pxi-0 mx-auto overflow-x-hidden py-5"},[t.$page.markdownPage.header?a("SolutionsHeader",{attrs:{header:t.$page.markdownPage.header}}):t._e(),t.$page.markdownPage&&t.$page.markdownPage.solution_image2?a("g-image",{attrs:{src:t.$page.markdownPage.solution_image2.src}}):t._e(),t.$page.markdownPage.headerSolution4?a("SolutionsHeader",{attrs:{header:t.$page.markdownPage.headerSolution4}}):t._e(),t.$page.markdownPage.solution_image3?a("g-image",{attrs:{src:t.$page.markdownPage.solution_image3.src}}):t._e(),"contact"!==t.$page.markdownPage.id&&t.$page.markdownPage.header_title&&""!=t.$page.markdownPage.header_title?a("Header",{attrs:{title:t.$page.markdownPage.header_title,image:t.$page.markdownPage.header_image,altImg:t.$page.markdownPage.header_altImg,excerpt:t.$page.markdownPage.header_excerpt,button:t.$page.markdownPage.button,link:t.$page.markdownPage.link}}):t._e(),t.$page.markdownPage.headerSolution?a("SolutionsHeader",{attrs:{header:t.$page.markdownPage.headerSolution}}):t._e(),t.$page.markdownPage.solution_image?a("g-image",{attrs:{src:t.$page.markdownPage.solution_image.src}}):t._e(),[a("ClientOnly",[t.$page.markdownPage.comparisonSecs&&t.$page.markdownPage.comparisonSecs.length>0?a("Comparison",{attrs:{main:t.$page.markdownPage.comparisonMain,sections:t.$page.markdownPage.comparisonSecs}}):t._e()],1)],[a("ClientOnly",[t.$page.markdownPage.cta?a("CallToAction",{attrs:{cta:t.$page.markdownPage.cta}}):t._e()],1)]],2)])}),[],!1,null,"560cc5aa",null);"function"==typeof C&&C(w);e.default=w.exports}}]);