(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-lupus-rating"] = factory();
	else
		root["vue-lupus-rating"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "1afc":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "3ab7":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ae7f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lupus_rating_star_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3ab7");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lupus_rating_star_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lupus_rating_star_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lupus_rating_star_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "b4dd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lupus_rating_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1afc");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lupus_rating_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lupus_rating_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lupus_rating_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"20939888-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lupus-rating.vue?vue&type=template&id=49215341&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"lupus-rating",class:{'readonly': _vm.readonly},on:{"mouseleave":function($event){return _vm.hover(false)}}},[_c('lupus-rating-star',{class:_vm.style1,nativeOn:{"click":function($event){return _vm.vote(1)},"mouseenter":function($event){return _vm.hover(1)}}}),_c('lupus-rating-star',{class:_vm.style2,nativeOn:{"click":function($event){return _vm.vote(2)},"mouseenter":function($event){return _vm.hover(2)}}}),_c('lupus-rating-star',{class:_vm.style3,nativeOn:{"click":function($event){return _vm.vote(3)},"mouseenter":function($event){return _vm.hover(3)}}}),_c('lupus-rating-star',{class:_vm.style4,nativeOn:{"click":function($event){return _vm.vote(4)},"mouseenter":function($event){return _vm.hover(4)}}}),_c('lupus-rating-star',{class:_vm.style5,nativeOn:{"click":function($event){return _vm.vote(5)},"mouseenter":function($event){return _vm.hover(5)}}}),_c('div',{staticClass:"lupus-rating__count"},[_vm._v("("+_vm._s(_vm.internal_votecount)+")")])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/lupus-rating.vue?vue&type=template&id=49215341&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"20939888-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lupus-rating-star.vue?vue&type=template&id=6a218262&
var lupus_rating_starvue_type_template_id_6a218262_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"lupus-rating-star"},[_c('svg',{attrs:{"viewBox":"0 0 20 20","version":"1.1","xmlns":"http://www.w3.org/2000/svg"}},[_c('defs',[_c('clipPath',{attrs:{"id":"cut-off-right"}},[_c('rect',{attrs:{"x":"11","y":"0","width":"10","height":"20"}})])]),_c('g',{attrs:{"id":"GRIDS","stroke":"none","stroke-width":"1","fill":"none","fill-rule":"evenodd"}},[_c('g',{attrs:{"id":"starfill","fill-rule":"nonzero"}},[_c('g',{attrs:{"id":"intro"}},[_c('g',{attrs:{"id":"rating"}},[_c('g',{attrs:{"id":"ic_star_rate_black_18px"}},[_c('polygon',{attrs:{"id":"Shape","points":"10 15.2916667 16.1833333 19.7916667 13.8166667 12.525 20 8.125 12.4166667 8.125 10 0.625 7.58333333 8.125 0 8.125 6.18333333 12.525 3.81666667 19.7916667"}})])])])]),_c('g',{attrs:{"id":"starfill2","fill-rule":"nonzero","clip-path":"url(#cut-off-right)"}},[_c('g',{attrs:{"id":"intro"}},[_c('g',{attrs:{"id":"rating"}},[_c('g',{attrs:{"id":"ic_star_rate_black_18px"}},[_c('polygon',{attrs:{"id":"Shape","points":"10 15.2916667 16.1833333 19.7916667 13.8166667 12.525 20 8.125 12.4166667 8.125 10 0.625 7.58333333 8.125 0 8.125 6.18333333 12.525 3.81666667 19.7916667"}})])])])])])])])}
var lupus_rating_starvue_type_template_id_6a218262_staticRenderFns = []


// CONCATENATED MODULE: ./src/lupus-rating-star.vue?vue&type=template&id=6a218262&

// EXTERNAL MODULE: ./src/lupus-rating-star.vue?vue&type=style&index=0&lang=scss&
var lupus_rating_starvue_type_style_index_0_lang_scss_ = __webpack_require__("ae7f");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/lupus-rating-star.vue

var script = {}



/* normalize component */

var component = normalizeComponent(
  script,
  lupus_rating_starvue_type_template_id_6a218262_render,
  lupus_rating_starvue_type_template_id_6a218262_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var lupus_rating_star = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lupus-rating.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var lupus_ratingvue_type_script_lang_js_ = ({
  name: 'lupus-rating',
  props: {
    'currentrating': null,
    'votecount': null,
    'alreadyvoted': null,
    'readonly': null,
    'entityid': {
      type: String,
      required: true
    },
    'entitytype': {
      type: String,
      required: true
    },
    'entitybundle': {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      voted: false,
      hovered: false,
      internal_votecount: 0
    };
  },
  mounted: function mounted() {
    if (this.alreadyvoted) {
      this.voted = this.alreadyvoted;
    }

    if (this.votecount) {
      this.internal_votecount = this.votecount;
    }
  },
  components: {
    'lupus-rating-star': lupus_rating_star
  },
  computed: {
    rating: function rating() {
      var integerPart = Math.floor(this.currentrating);
      var decimalPart = this.currentrating - integerPart;
      var rating = integerPart;

      if (decimalPart >= 0.3 && decimalPart < 0.7) {
        rating = rating + 0.5;
      }

      if (decimalPart >= 0.7) {
        rating = rating + 1;
      }

      return rating;
    },
    style1: function style1() {
      return {
        'hovered': this.hovered >= 1,
        'highlighted': this.voted >= 1,
        'voted': this.rating >= 1 && !this.voted,
        'voted-half': this.rating === 0.5 && !this.voted
      };
    },
    style2: function style2() {
      return {
        'hovered': this.hovered >= 2,
        'highlighted': this.voted >= 2,
        'voted': this.rating >= 2 && !this.voted,
        'voted-half': this.rating === 1.5 && !this.voted
      };
    },
    style3: function style3() {
      return {
        'hovered': this.hovered >= 3,
        'highlighted': this.voted >= 3,
        'voted': this.rating >= 3 && !this.voted,
        'voted-half': this.rating === 2.5 && !this.voted
      };
    },
    style4: function style4() {
      return {
        'hovered': this.hovered >= 4,
        'highlighted': this.voted >= 4,
        'voted': this.rating >= 4 && !this.voted,
        'voted-half': this.rating === 3.5 && !this.voted
      };
    },
    style5: function style5() {
      return {
        'hovered': this.hovered >= 5,
        'highlighted': this.voted >= 5,
        'voted': this.rating >= 5 && !this.voted,
        'voted-half': this.rating === 4.5 && !this.voted
      };
    }
  },
  methods: {
    vote: function vote(_vote) {
      if (this.readonly) {
        return false;
      }

      if (!this.alreadyvoted && !this.voted) {
        if (this.votecount) {
          this.internal_votecount = parseInt(this.internal_votecount) + 1;
        } else {
          this.internal_votecount = 1;
        }
      }

      this.voted = _vote;
      var votedata = {
        vote: _vote,
        entityid: this.entityid,
        entitytype: this.entitytype,
        entitybundle: this.entitybundle
      };
      this.$emit('vote', votedata);
    },
    hover: function hover(index) {
      if (this.readonly) {
        return false;
      }

      this.hovered = index;
    }
  }
});
// CONCATENATED MODULE: ./src/lupus-rating.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_lupus_ratingvue_type_script_lang_js_ = (lupus_ratingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/lupus-rating.vue?vue&type=style&index=0&lang=scss&
var lupus_ratingvue_type_style_index_0_lang_scss_ = __webpack_require__("b4dd");

// CONCATENATED MODULE: ./src/lupus-rating.vue






/* normalize component */

var lupus_rating_component = normalizeComponent(
  src_lupus_ratingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var lupus_rating = (lupus_rating_component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (lupus_rating);



/***/ })

/******/ })["default"];
});
//# sourceMappingURL=vue-lupus-rating.umd.js.map