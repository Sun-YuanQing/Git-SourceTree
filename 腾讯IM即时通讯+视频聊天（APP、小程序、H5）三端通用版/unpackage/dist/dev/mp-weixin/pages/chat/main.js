(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/chat/main"],{

/***/ 63:
/*!*********************************************************************************************************************!*\
  !*** E:/HMTL5_Demo/myGit-wrok/Git-SourceTree/腾讯IM即时通讯+视频聊天（APP、小程序、H5）三端通用版/main.js?{"page":"pages%2Fchat%2Fmain"} ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _main = _interopRequireDefault(__webpack_require__(/*! ./pages/chat/main.vue */ 64));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_main.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 64:
/*!**************************************************************************************************!*\
  !*** E:/HMTL5_Demo/myGit-wrok/Git-SourceTree/腾讯IM即时通讯+视频聊天（APP、小程序、H5）三端通用版/pages/chat/main.vue ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_vue_vue_type_template_id_4a46e5e7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.vue?vue&type=template&id=4a46e5e7& */ 65);
/* harmony import */ var _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.vue?vue&type=script&lang=js& */ 67);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _main_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.vue?vue&type=style&index=0&lang=scss& */ 69);
/* harmony import */ var _D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _main_vue_vue_type_template_id_4a46e5e7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _main_vue_vue_type_template_id_4a46e5e7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _main_vue_vue_type_template_id_4a46e5e7___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/chat/main.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 65:
/*!*********************************************************************************************************************************!*\
  !*** E:/HMTL5_Demo/myGit-wrok/Git-SourceTree/腾讯IM即时通讯+视频聊天（APP、小程序、H5）三端通用版/pages/chat/main.vue?vue&type=template&id=4a46e5e7& ***!
  \*********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_main_vue_vue_type_template_id_4a46e5e7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./main.vue?vue&type=template&id=4a46e5e7& */ 66);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_main_vue_vue_type_template_id_4a46e5e7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_main_vue_vue_type_template_id_4a46e5e7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_main_vue_vue_type_template_id_4a46e5e7___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_main_vue_vue_type_template_id_4a46e5e7___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 66:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/HMTL5_Demo/myGit-wrok/Git-SourceTree/腾讯IM即时通讯+视频聊天（APP、小程序、H5）三端通用版/pages/chat/main.vue?vue&type=template&id=4a46e5e7& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  if (!_vm._isMounted) {
    _vm.e0 = function($event) {
      _vm.isFocus = true
    }

    _vm.e1 = function($event) {
      _vm.isFocus = false
    }

    _vm.e2 = function($event) {
      _vm.rateModal = !_vm.rateModal
    }
  }
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 67:
/*!***************************************************************************************************************************!*\
  !*** E:/HMTL5_Demo/myGit-wrok/Git-SourceTree/腾讯IM即时通讯+视频聊天（APP、小程序、H5）三端通用版/pages/chat/main.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./main.vue?vue&type=script&lang=js& */ 68);
/* harmony import */ var _D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 68:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/HMTL5_Demo/myGit-wrok/Git-SourceTree/腾讯IM即时通讯+视频聊天（APP、小程序、H5）三端通用版/pages/chat/main.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;






































































































































































































































































var _vuex = __webpack_require__(/*! vuex */ 16);



var _emojiMap = __webpack_require__(/*! ../../utils/emojiMap */ 21);




var _index = __webpack_require__(/*! ../../utils/index */ 18);function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}



var audioContext = wx.createInnerAudioContext();
var recorderManager = wx.getRecorderManager();
var recordOptions = {
  duration: 60000,
  sampleRate: 44100,
  numberOfChannels: 1,
  encodeBitRate: 192000,
  format: 'aac' // 音频格式，选择此格式创建的音频消息，可以在即时通信 IM 全平台（Android、iOS、微信小程序和Web）互通
};var _default =
{
  data: function data() {
    return {
      messageContent: '',
      conversation: {},
      messageKey: '',
      lastMsgTime: '',
      count: 15,
      isEmojiOpen: false,
      isMoreOpen: false,
      isFocus: false,
      isGroup: false,
      messageList: [],
      emojiName: _emojiMap.emojiName,
      emojiMap: _emojiMap.emojiMap,
      emojiUrl: _emojiMap.emojiUrl,
      height: 0,
      modalVisible: false,
      downloadInfo: {},
      percent: 0,
      sysInfo: {},
      customModalVisible: false,
      customData: '',
      customDescription: '',
      customExtension: '',
      focusedInput: '',
      safeBottom: 34,
      isRecord: false,
      isRecording: false,
      canSend: true,
      startPoint: 0,
      title: '正在录音',
      rateModal: false,
      rate: 5,
      isShow: false,
      faceUrl: 'https://webim-1252463788.file.myqcloud.com/assets/face-elem/',
      emojiShow: true,
      revokeModal: false,
      revokeMessage: {},
      currentTime: 0,
      currentTimeID: '',
      isIphoneX: true,
      set: '' };

  },
  components: {},


  onShow: function onShow() {
    this.isShow = true;
    var that = this;
    this.currentTimeID = setInterval(function () {
      that.currentTime = new Date().getTime() / 1000;
    }, 3000);
  },
  onLoad: function onLoad(options) {var _this = this;
    this.set = options.toAccount;
    // 设置header——聊天对象昵称或群名
    wx.setNavigationBarTitle({
      title: this.set });

    // this.height = this.sysInfo.windowHeight
    this.height = '';
    var query = wx.createSelectorQuery();
    var that = this;
    wx.$app.on(this.TIM.EVENT.MESSAGE_RECEIVED, function () {
      query.select('#chat').boundingClientRect(function (res) {
        if (res.bottom - that.height < 150) {
          that.scrollToBottom();
        }
      }).exec();
    });
    var interval = setInterval(function () {
      if (_this.currentMessageList.length !== 0) {
        _this.scrollToBottom();
        clearInterval(interval);
      }
    }, 600);
    this.$bus.$off('atUser');
    this.$bus.$on('atUser', function (user) {
      _this.messageContent += user.userID;
      _this.messageContent += ' ';
    });
    recorderManager.onStart(function () {
      console.log('recorder start');
    });
    recorderManager.onPause(function () {
      console.log('recorder pause');
    });
    recorderManager.onStop(function (res) {
      console.log('recorder stop');
      wx.hideLoading();
      if (_this.canSend) {
        if (res.duration < 1000) {
          _this.$store.commit('showToast', {
            title: '录音时间太短' });

        } else {
          var message = wx.$app.createAudioMessage({
            to: _this.$store.getters.toAccount,
            conversationType: _this.$store.getters.currentConversationType,
            payload: {
              file: res } });


          _this.$store.commit('sendMessage', message);
          wx.$app.sendMessage(message);
        }
      }
    });
  },
  // 退出聊天页面的时候所有状态清空
  onUnload: function onUnload() {var _this2 = this;
    clearInterval(this.currentTimeID);
    wx.$app.setMessageRead({
      conversationID: this.$store.state.conversation.currentConversationID });

    this.isEmojiOpen = false;
    this.rateModal = false;
    this.isMoreOpen = false;
    this.messageContent = '';
    this.isShow = false;
    // eslint-disable-next-line
    var pages = getCurrentPages();
    // 若是由群组会话跳转到C2C会话，则在C2C会话 unload （返回上一层页面） 时，跳转到index页
    // 原因：若直接从C2C会话返回群组会话，由于此时currentConversation和currentMessageList已变更，会导致数据不一致的问题，简单起见，直接跳回index
    var hasGroupChat = pages.find(function (item) {return item.options.type === _this2.TIM.TYPES.CONV_GROUP;});
    if (hasGroupChat) {
      wx.switchTab({
        url: '../index/main' });

    }
  },
  onPullDownRefresh: function onPullDownRefresh() {
    (0, _index.throttle)(this.getMessageList, 1000)();
  },
  computed: _objectSpread({},
  (0, _vuex.mapState)({
    currentMessageList: function currentMessageList(state) {
      var list = state.conversation.currentMessageList;
      // 对list中的表情包消息进行预处理，template中无法执行js语法
      for (var i = 0; i < list.length; i++) {
        if (list[i].type === 'TIMFaceElem') {
          var data = list[i].payload.data;
          list[i].payload.data = data.indexOf('@2x') > 0 ? data : "".concat(data, "@2x");
        }
      }
      return list;
    },
    currentConversation: function currentConversation(state) {return state.conversation.currentConversation;},
    myInfo: function myInfo(state) {return state.user.myInfo;},
    sysInfo: function sysInfo(state) {return state.global.systemInfo;} })),



  methods: {
    onChange: function onChange(e) {
      this.rate = e.mp.detail.index;
    },
    // 提示前往设置页
    toSettingPage: function toSettingPage(options) {
      wx.showModal({
        title: '授权提示',
        content: options.content,
        success: function success(tipRes) {
          if (tipRes.confirm) {
            wx.openSetting({
              success: function success(settingRes) {
                options.suc && options.suc(settingRes);
              },
              fail: function fail() {
                options.fail && options.fail();
              } });

          } else {
            options.cancel && options.cancel();
          }
        } });

    },
    // 长按录音，监听在页面最外层div，如果是放在button的话，手指上划离开button后获取距离变化有bug
    handleLongPress: function handleLongPress(e) {var _this3 = this;
      this.startPoint = e.touches[0];
      if (e.target.id === 'record') {
        wx.getSetting({
          success: function success(res) {
            var auth = res.authSetting['scope.record'];
            if (auth === true) {// 用户已经同意授权
              _this3.title = '正在录音';
              _this3.isRecording = true;
              _this3.startRecording();
              _this3.canSend = true;
            } else if (auth === false) {// 首次发起授权
              _this3.toSettingPage({
                content: '请前往设置页打开麦克风',
                suc: function suc(res) {
                  if (!res.authSetting['scope.record']) {
                    _this3.isRecord = false;
                  }
                },
                fail: function fail() {
                  _this3.isRecord = false;
                },
                cancel: function cancel() {
                  _this3.isRecord = false;
                } });

            }
          },
          fail: function fail() {} });

      }
    },
    chooseRecord: function chooseRecord() {var _this4 = this;
      this.isRecord = !this.isRecord;
      if (this.isRecord) {
        wx.getSetting({
          success: function success(res) {
            if (res.authSetting['scope.record'] === false) {// 已申请授权，但已被用户拒绝
              _this4.toSettingPage({
                content: '请前往设置页打开麦克风',
                suc: function suc(res) {
                  if (!res.authSetting['scope.record']) {
                    _this4.isRecord = false;
                  }
                },
                fail: function fail() {
                  _this4.isRecord = false;
                },
                cancel: function cancel() {
                  _this4.isRecord = false;
                } });

            }
          },
          fail: function fail() {
            wx.showToast({
              title: '获取授权信息失败',
              icon: 'none',
              duration: 1500 });

          } });

      }
    },
    // 录音时的手势上划移动距离对应文案变化
    handleTouchMove: function handleTouchMove(e) {
      if (this.isRecording) {
        if (this.startPoint.clientY - e.touches[e.touches.length - 1].clientY > 100) {
          this.title = '松开手指，取消发送';
          this.canSend = false;
        } else if (this.startPoint.clientY - e.touches[e.touches.length - 1].clientY > 20) {
          this.title = '上划可取消';
          this.canSend = true;
        } else {
          this.title = '正在录音';
          this.canSend = true;
        }
      }
    },
    // 手指离开页面滑动
    handleTouchEnd: function handleTouchEnd() {
      this.isRecording = false;
      wx.hideLoading();
      recorderManager.stop();
    },
    // 开始录音
    startRecording: function startRecording() {
      recorderManager.start(recordOptions);
    },
    // 滚动到列表bottom
    scrollToBottom: function scrollToBottom() {
      if (this.isShow) {
        wx.pageScrollTo({
          scrollTop: 99999 });

      }
    },
    customModal: function customModal() {
      this.customModalVisible = !this.customModalVisible;
      this.handleClose();
    },
    sendCustomMessage: function sendCustomMessage() {
      if (this.customData.length === 0 && this.customDescription.length === 0 && this.customExtension.length === 0) {
        this.$store.commit('showToast', {
          title: '不能为空' });

        return;
      }
      var message = wx.$app.createCustomMessage({
        to: this.$store.getters.toAccount,
        conversationType: this.$store.getters.currentConversationType,
        payload: {
          data: this.customData,
          description: this.customDescription,
          extension: this.customExtension } });


      this.$store.commit('sendMessage', message);
      wx.$app.sendMessage(message);
      this.customModal();
      this.customData = '';
      this.customDescription = '';
      this.customExtension = '';
    },
    // 失去焦点
    loseFocus: function loseFocus() {
      this.handleClose();
    },
    // 下载文件模态框
    handleModalShow: function handleModalShow() {
      this.modalVisible = !this.modalVisible;
    },
    // 下载文件前判断小程序是否支持预览，只支持 office 相关文件预览
    handleDownload: function handleDownload(message) {
      var fileType = message.fileUrl.slice(message.fileUrl.lastIndexOf('.')).toLowerCase();
      var allow = ['doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'pdf'];
      if (allow.indexOf(fileType) > -1) {
        this.percent = 0;
        this.downloadInfo = message;
        this.handleModalShow();
      } else {
        this.$store.commit('showToast', {
          title: '小程序不支持该文件预览哦',
          icon: 'none',
          duration: 2000 });

      }
    },
    download: function download() {
      var that = this;
      var downloadTask = wx.downloadFile({
        url: that.downloadInfo.fileUrl,
        success: function success(res) {
          console.log('start downloading: ');
        },
        fail: function fail(_ref)

        {var errMsg = _ref.errMsg;
          that.$store.commit('showToast', {
            title: '文件下载出错',
            icon: 'none',
            duration: 1500 });

          that.handleModalShow();
        },
        complete: function complete(res) {
          downloadTask = null;
          wx.openDocument({
            filePath: res.tempFilePath,
            success: function success(res) {
              console.log('open file fail', res);
              that.$store.commit('showToast', {
                title: '打开文档成功',
                icon: 'none',
                duration: 1000 });

              that.percent = 0;
              that.handleModalShow();
            },
            fail: function fail(err) {
              console.log('open file fail', err);
              that.$store.commit('showToast', {
                title: '小程序不支持该文件预览哦',
                icon: 'none',
                duration: 2000 });

              that.handleModalShow();
            } });

        } });

      downloadTask.onProgressUpdate(function (res) {
        that.percent = res.progress;
      });
    },
    // 群简介或者人简介
    toDetail: function toDetail(_ref2)

    {var userID = _ref2.userID;
      if (userID) {
        wx.navigateTo({
          url: "../user-profile/main?userID=".concat(userID) });

        return;
      }
      var conversationID = this.currentConversation.conversationID;
      this.isGroup = this.currentConversation.type === this.TIM.TYPES.CONV_GROUP;
      if (this.isGroup) {
        wx.navigateTo({
          url: '../group-profile/main' });

      } else {
        var _userID = conversationID.substring(3);
        wx.navigateTo({
          url: "../user-profile/main?userID=".concat(_userID) });

      }
    },
    // 获取消息
    getMessageList: function getMessageList() {
      this.$store.dispatch('getMessageList');
      wx.stopPullDownRefresh();
    },
    // 处理emoji选项卡
    handleEmoji: function handleEmoji() {
      if (this.isFocus) {
        this.isFocus = false;
        this.isMoreOpen = false;
        this.isEmojiOpen = true;
      } else {
        this.isEmojiOpen = !this.isEmojiOpen;
        this.isMoreOpen = false;
      }
    },
    // 处理更多选项卡
    handleMore: function handleMore() {
      if (this.isFocus) {
        this.isFocus = false;
        this.isEmojiOpen = false;
        this.isMoreOpen = true;
      } else {
        this.isMoreOpen = !this.isMoreOpen;
        this.isEmojiOpen = false;
      }
    },
    // 选项卡关闭
    handleClose: function handleClose() {
      this.rateModal = false;
      this.isFocus = false;
      this.isMoreOpen = false;
      this.isEmojiOpen = false;
    },
    isnull: function isnull(content) {
      if (content === '') {
        return true;
      }
      var reg = '^[ ]+$';
      var re = new RegExp(reg);
      return re.test(content);
    },
    // 发送text message 包含 emoji
    sendMessage: function sendMessage() {var _this5 = this;
      if (!this.isnull(this.messageContent)) {
        var message = wx.$app.createTextMessage({
          to: this.$store.getters.toAccount,
          conversationType: this.$store.getters.currentConversationType,
          payload: {
            text: this.messageContent } });


        var index = this.$store.state.conversation.currentMessageList.length;
        this.$store.commit('sendMessage', message);
        wx.$app.sendMessage(message).catch(function () {
          _this5.$store.commit('changeMessageStatus', index);
        });
        this.messageContent = '';
      } else {
        this.$store.commit('showToast', {
          title: '消息不能为空' });

      }
      this.isFocus = false;
      this.isEmojiOpen = false;
      this.isMoreOpen = false;
    },
    sendPhoto: function sendPhoto(name) {var _this6 = this;
      var self = this;
      if (name === 'album') {
        this.chooseImage(name);
      } else if (name === 'camera') {
        wx.getSetting({
          success: function success(res) {
            if (res.authSetting['scope.camera'] === false) {// 已申请授权，但用户已拒绝
              _this6.toSettingPage({
                content: '请前往设置页打开摄像头' });

            } else if (!res.authSetting['scope.camera']) {// 未申请授权，唤起授权
              wx.authorize({
                scope: 'scope.camera',
                success: function success() {
                  self.chooseImage(name);
                } });

            } else {
              self.chooseImage(name);
            }
          } });

      }
    },
    videoError: function videoError(e) {
      console.log(e);
      this.$store.commit('showToast', {
        title: "\u89C6\u9891\u51FA\u73B0\u9519\u8BEF\uFF0C\u9519\u8BEF\u4FE1\u606F".concat(e.mp.detail.errMsg),
        duration: 1500 });

    },
    chooseImage: function chooseImage(name) {
      var self = this;
      var message = {};
      wx.chooseImage({
        sourceType: [name],
        count: 1,
        success: function success(res) {
          message = wx.$app.createImageMessage({
            to: self.$store.getters.toAccount,
            conversationType: self.$store.getters.currentConversationType,
            payload: {
              file: res },

            onProgress: function onProgress(percent) {
              self.percent = percent;
            } });

          self.$store.commit('sendMessage', message);
          wx.$app.sendMessage(message).then(function () {
            self.percent = 0;
          }).catch(function (err) {
            console.log(err);
          });
        } });

      this.handleClose();
    },
    previewImage: function previewImage(src) {
      wx.previewImage({
        current: src, // 当前显示图片的http链接
        urls: [src] });

    },
    // 发消息选中emoji
    chooseEmoji: function chooseEmoji(item) {
      this.messageContent += item;
    },
    // 重发消息
    handleResend: function handleResend(message) {
      if (message.status === 'fail') {
        wx.$app.resendMessage(message);
      }
    },
    sendSurvey: function sendSurvey() {
      if (this.customExtension) {
        var message = wx.$app.createCustomMessage({
          to: this.$store.getters.toAccount,
          conversationType: this.$store.getters.currentConversationType,
          payload: {
            data: 'survey',
            description: String(this.rate),
            extension: this.customExtension } });


        this.rate = 0;
        this.customExtension = '';
        this.$store.commit('sendMessage', message);
        wx.$app.sendMessage(message);
        this.handleClose();
      } else {
        this.$store.commit('showToast', {
          title: '建议不要为空哦！' });

      }
    },
    // 播放音频
    openAudio: function openAudio(audio) {
      var that = this;
      audioContext.src = audio.url;
      audioContext.play();
      audioContext.onPlay(function () {});
      audioContext.onEnded(function () {
        wx.hideToast();
      });
      audioContext.onError(function () {
        that.$store.commit('showToast', {
          title: '小程序暂不支持播放该音频格式',
          icon: 'none',
          duration: 2000 });

      });
    },
    // 发送视频消息
    video: function video() {
      var that = this;
      wx.chooseVideo({
        sourceType: ['album', 'camera'],
        maxDuration: 60,
        camera: 'back',
        success: function success(res) {
          var message = wx.$app.createVideoMessage({
            to: that.$store.getters.toAccount,
            conversationType: that.$store.getters.currentConversationType,
            payload: {
              file: res } });


          that.$store.commit('sendMessage', message);
          wx.$app.sendMessage(message);
          that.handleClose();
        } });

    },
    getRandomInt: function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    },
    videoCall: function videoCall() {
      var options = {
        call_id: '',
        version: 3,
        room_id: this.getRandomInt(0, 42949),
        action: 0,
        duration: 0,
        invited_list: [] };

      var args = JSON.stringify(options);
      var message = wx.$app.createCustomMessage({
        to: this.$store.getters.toAccount,
        conversationType: this.$store.getters.currentConversationType,
        payload: {
          data: args,
          description: '',
          extension: '' } });


      this.$store.commit('sendMessage', message);
      wx.$app.sendMessage(message);
      var url = "../call/main?args=".concat(args, "&&from=").concat(message.from, "&&to=").concat(message.to);
      wx.navigateTo({
        url: url });

      this.handleClose();
    },
    handleEmojiShow: function handleEmojiShow() {
      this.emojiShow = true;
    },
    // 长按消息触发是否撤回
    handleMessage: function handleMessage(message) {
      if (message.from === this.myInfo.userID) {
        var revokeTimeout = 2 * 60 * 1000;
        var now = new Date().getTime();
        if (now - message.time * 1000 < revokeTimeout) {
          this.revokeModal = true;
          this.revokeMessage = message;
        }
      }
    },
    // 撤回消息
    handleRevokeMessage: function handleRevokeMessage() {var _this7 = this;
      wx.$app.revokeMessage(this.revokeMessage).then(function (res) {
        _this7.revokeModal = false;
        _this7.$store.commit('showToast', {
          title: '撤回成功',
          duration: 500 });

      });
    },
    // 撤回后时间限制内，重新编辑
    reEdit: function reEdit(message) {
      this.messageContent = message.payload.text;
    } } };exports.default = _default;

/***/ }),

/***/ 69:
/*!************************************************************************************************************************************!*\
  !*** E:/HMTL5_Demo/myGit-wrok/Git-SourceTree/腾讯IM即时通讯+视频聊天（APP、小程序、H5）三端通用版/pages/chat/main.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_main_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./main.vue?vue&type=style&index=0&lang=scss& */ 70);
/* harmony import */ var _D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_main_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_main_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_main_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_main_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_soft_HBulider_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_main_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 70:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/HMTL5_Demo/myGit-wrok/Git-SourceTree/腾讯IM即时通讯+视频聊天（APP、小程序、H5）三端通用版/pages/chat/main.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[63,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/chat/main.js.map