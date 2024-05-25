/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@vizuaalog/bulmajs/src/ConfigBag.js":
/*!**********************************************************!*\
  !*** ./node_modules/@vizuaalog/bulmajs/src/ConfigBag.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ConfigBag)
/* harmony export */ });
/**
 * Object to hold a plugin's configuration
 * @class ConfigBag
 * @since 0.11.0
 * @author Thomas Erbe <vizuaalog@gmail.com>
 */
class ConfigBag {
    constructor(initialConfig = []) {
        if(typeof initialConfig !== 'object') {
            throw new TypeError('initialConfig must be of type object.');
        }

        this._items = initialConfig;
    }

    /**
     * Set a new config property
     * @param {string} key The config property's key
     * @param {mixed} value The config property's value
     */
    set(key, value) {
        if(!key || !value) {
            throw new Error('A key and value must be provided when setting a new option.');
        }

        this._items[key] = value;
    }

    /**
     * Check if a key exists
     * @param {string} key
     * @returns {boolean}
     */
    has(key) {
        if(!key) {
            throw new Error('A key must be provided.');
        }

        return (this._items.hasOwnProperty(key) && this._items[key]);
    }

    /**
     * Get a property by it's key. Returns the defaultValue if it doesn't exists
     * @param {string} key 
     * @param {mixed} defaultValue
     * @returns {mixed}
     */
    get(key, defaultValue = null) {
        if(defaultValue && !this.has(key)) {
            if(typeof defaultValue === 'function') {
                return defaultValue();
            }
            
            return defaultValue;
        }

        return this._items[key];
    }
}

/***/ }),

/***/ "./node_modules/@vizuaalog/bulmajs/src/Data.js":
/*!*****************************************************!*\
  !*** ./node_modules/@vizuaalog/bulmajs/src/Data.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Data {
    constructor() {
        this._data = {};
    }

    set(uid, key, value) {
        if(!this._data.hasOwnProperty(uid)) {
            this._data[uid] = {};
        }

        this._data[uid][key] = value;
    }

    get(uid, key) {
        if(!this._data.hasOwnProperty(uid)) {
            return undefined;
        }

        return this._data[uid][key];
    }

    destroy(uid) {
        if(this._data.hasOwnProperty(uid)) {
            delete this._data[uid];
        }
    }
}

Data.uid = 1;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Data);

/***/ }),

/***/ "./node_modules/@vizuaalog/bulmajs/src/bulma.js":
/*!******************************************************!*\
  !*** ./node_modules/@vizuaalog/bulmajs/src/bulma.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./node_modules/@vizuaalog/bulmajs/src/core.js");
/* harmony import */ var _plugins_notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugins/notification */ "./node_modules/@vizuaalog/bulmajs/src/plugins/notification.js");
/* harmony import */ var _plugins_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plugins/navbar */ "./node_modules/@vizuaalog/bulmajs/src/plugins/navbar.js");
/* harmony import */ var _plugins_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plugins/message */ "./node_modules/@vizuaalog/bulmajs/src/plugins/message.js");
/* harmony import */ var _plugins_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plugins/dropdown */ "./node_modules/@vizuaalog/bulmajs/src/plugins/dropdown.js");
/* harmony import */ var _plugins_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plugins/modal */ "./node_modules/@vizuaalog/bulmajs/src/plugins/modal.js");
/* harmony import */ var _plugins_alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plugins/alert */ "./node_modules/@vizuaalog/bulmajs/src/plugins/alert.js");
/* harmony import */ var _plugins_file__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./plugins/file */ "./node_modules/@vizuaalog/bulmajs/src/plugins/file.js");
/* harmony import */ var _plugins_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./plugins/tabs */ "./node_modules/@vizuaalog/bulmajs/src/plugins/tabs.js");
/* harmony import */ var _plugins_panelTabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./plugins/panelTabs */ "./node_modules/@vizuaalog/bulmajs/src/plugins/panelTabs.js");
/* eslint no-unused-vars: 0 */












/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/@vizuaalog/bulmajs/src/core.js":
/*!*****************************************************!*\
  !*** ./node_modules/@vizuaalog/bulmajs/src/core.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Data */ "./node_modules/@vizuaalog/bulmajs/src/Data.js");


/**
 * Wrap an element around Bulma.
 * @param {String|HTMLElement} selector The selector or HTMLElement to wrap.
 */
function Bulma(selector) {
    if (!(this instanceof Bulma)) {
        return new Bulma(selector);
    }

    if (selector instanceof Bulma) {
        return selector;
    }

    if (selector instanceof HTMLElement) {
        this._elem = selector;
    } else {
        this._elem = document.querySelector(selector);
    }

    if (!selector) {
        this._elem = document.createElement('div');
    }

    if (!this._elem.hasOwnProperty(Bulma.id)) {
        this._elem[Bulma.id] = _Data__WEBPACK_IMPORTED_MODULE_0__["default"].uid++;
    }

    return this;
}

/**
 * Current BulmaJS version.
 * @type {String}
 */
Bulma.VERSION = '0.12.1';

/**
 * Unique ID of Bulma
 * @type {String}
 */
Bulma.id = 'bulma-' + new Date().getTime();

/**
 * Global data cache for HTML elements
 * @type {Data}
 */
Bulma.cache = new _Data__WEBPACK_IMPORTED_MODULE_0__["default"]();

/**
 * An index of the registered plugins
 * @type {Object}
 */
Bulma.plugins = {};

/**
 * Helper method to create a new plugin.
 * @param  {String} key The plugin's key
 * @param  {Object} config The config to be passed to the plugin
 * @return {Object} The newly created plugin instance
 */
Bulma.create = (key, config) => {
    if (!key || !Bulma.plugins.hasOwnProperty(key)) {
        throw new Error('[BulmaJS] A plugin with the key \'' + key + '\' has not been registered.');
    }

    return new Bulma.plugins[key].handler(config);
};

/**
 * Register a new plugin
 * @param  {String} key The key to register the plugin under
 * @param  {Object} plugin The plugin's main constructor
 * @param  {number?} priority The priority this plugin has over other plugins. Higher means the plugin is registered before lower.
 * @return {undefined}
 */
Bulma.registerPlugin = (key, plugin, priority = 0) => {
    if (!key) {
        throw new Error('[BulmaJS] Key attribute is required.');
    }

    Bulma.plugins[key] = {
        priority: priority,
        handler: plugin
    };

    Bulma.prototype[key] = function (config) {
        return new Bulma.plugins[key].handler(config, this);
    };
};

/**
 * Parse the HTML DOM searching for data-bulma attributes. We will then pass
 * each element to the appropriate plugin to handle the required processing.
 * @param  {HTMLElement} root The root of the document we're going to parse.
 * @return {undefined}
 */
Bulma.parseDocument = (root = document) => {
    let sortedPlugins = Object.keys(Bulma.plugins)
        .sort((a, b) => Bulma.plugins[a].priority < Bulma.plugins[b].priority);

    Bulma.each(sortedPlugins, (key) => {
        if (!Bulma.plugins[key].handler.hasOwnProperty('parseDocument')) {
            // eslint-disable-next-line no-console
            console.error('[BulmaJS] Plugin ' + key + ' does not have a parseDocument method. Automatic document parsing is not possible for this plugin.');
            return;
        }

        Bulma.plugins[key].handler.parseDocument(root);
    });
};

/**
 * Create an element and assign classes
 * @param {string} name The name of the element to create
 * @param {array} classes An array of classes to add to the element
 * @return {HTMLElement} The newly created element
 */
Bulma.createElement = (name, classes) => {
    if (!classes) {
        classes = [];
    }

    if (typeof classes === 'string') {
        classes = [classes];
    }

    let elem = document.createElement(name);

    Bulma.each(classes, (className) => {
        elem.classList.add(className);
    });

    return elem;
};

/**
 * Find an element otherwise create a new one.
 * @param {string} query The CSS selector query to find
 * @param {HTMLElement|null} parent The parent we want to search/create within
 * @param {[string]} elemName The name of the element to create
 * @param {[array]} classes The classes to apply to the element
 * @returns {HTMLElement} The HTML element we found or created
 */
Bulma.findOrCreateElement = (query, parent = document, elemName = 'div', classes = []) => {
    var elem = parent.querySelector(query);

    if (!elem) {
        if (classes.length === 0) {
            classes = query.split('.').filter((item) => {
                return item;
            });
        }

        var newElem = Bulma.createElement(elemName, classes);

        parent.appendChild(newElem);

        return newElem;
    }

    return elem;
};

/**
 * For loop helper
 * @param {*} objects The array/object to loop through
 * @param {*} callback The callback used for each item
 */
Bulma.each = (objects, callback) => {
    let i;

    for (i = 0; i < objects.length; i++) {
        callback(objects[i], i);
    }
};

/**
 * Make an AJAX GET request to the specified URL. Stripping any script tags from the response.
 * @param {*} url The url to send the request to
 * @returns {Promise} Returns a promise containing the response HTML or error
 */
Bulma.ajax = (url) => {
    return new Promise((resolve, reject) => {
        var request = new XMLHttpRequest();
        request.open('GET', url, true);

        request.onload = () => {
            if (request.status >= 200 && request.status < 400) {
                resolve(Bulma._stripScripts(request.responseText));
            } else {
                reject();
            }
        };

        request.onerror = () => reject();

        request.send();
    });
};

/**
 * Strip any script tags from a HTML string.
 * @param {string} htmlString 
 * @returns {string} The cleaned HTML string
 * 
 * @private
 */
Bulma._stripScripts = (htmlString) => {
    var div = document.createElement('div');
    div.innerHTML = htmlString;

    var scripts = div.getElementsByTagName('script');

    var i = scripts.length;

    while (i--) {
        scripts[i].parentNode.removeChild(scripts[i]);
    }

    return div.innerHTML.replace(/  +/g, ' ');
};

/**
 * Grabs a configuration property from the window.bulmaOptions global, if it's defined,
 * returns defaultValue otherwise.
 * @param {string} key The name of the option to check for
 * @param {*} [defaultValue=null] A default value of the key is not found
 */
Bulma.getGlobalConfig = function (key, defaultValue = null) {
    if (!window.hasOwnProperty('bulmaOptions')) {
        return defaultValue;
    }

    if (!window.bulmaOptions.hasOwnProperty(key)) {
        return defaultValue;
    }

    return window.bulmaOptions[key];
};

/**
 * Get or set custom data on a Bulma element.
 * @type {String} key
 * @type {any} value
 * @returns {Bulma}
 */
Bulma.prototype.data = function (key, value) {
    if (!value) {
        return Bulma.cache.get(this._elem[Bulma.id], key);
    }

    Bulma.cache.set(this._elem[Bulma.id], key, value);

    return this;
};

/**
 * Destroy the data for an element.
 * @returns {Bulma}
 */
Bulma.prototype.destroyData = function () {
    Bulma.cache.destroy(this._elem[Bulma.id]);

    return this;
};

/**
 * Returns the internal HTMLElement we're wrapping.
 *
 * @returns {HTMLElement}
 */
Bulma.prototype.getElement = function () {
    return this._elem;
};

document.addEventListener('DOMContentLoaded', () => {
    if (Bulma.getGlobalConfig('autoParseDocument', true)) {
        Bulma.parseDocument();
    }

    if (Bulma.getGlobalConfig('onLoaded')) {
        Bulma.getGlobalConfig('onLoaded')();
    }
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bulma);


/***/ }),

/***/ "./node_modules/@vizuaalog/bulmajs/src/dismissableComponent.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@vizuaalog/bulmajs/src/dismissableComponent.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DismissableComponent)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./node_modules/@vizuaalog/bulmajs/src/core.js");
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugin */ "./node_modules/@vizuaalog/bulmajs/src/plugin.js");



/**
 * @module DismissableComponent
 * @since  0.2.0
 * @author  Thomas Erbe <vizuaalog@gmail.com>
 */
class DismissableComponent extends _plugin__WEBPACK_IMPORTED_MODULE_1__["default"] {
    /**
     * Returns an object containing the default config for this plugin.
     * @returns {object} The default config object.
     */
    static defaultConfig() {
        return {
            isDismissable: false,
            destroyOnDismiss: true,
            element: null
        };
    }

    /**
     * Plugin constructor
     * @param  {string} name Plugin's name
     * @param  {Object} config Plugin's config
     * @return {this} The new plugin instance
     */
    constructor(name, config, root) {
        if(!root._elem.classList.contains(name)) {
            config['parent'] = root;
            root = null;
        }

        super(config, root);

        /**
         * The name of this component, this will be used as the root class
         * @type {string}
         */
        this.name = name;

        /**
        * Body text.
        * @type {string}
        */
        this.body = this.config.get('body');
        
        /**
        * Color modifier.
        * @type {string} Possible values are null, primary, info, success, warning, danger
        */
        this.color = this.config.get('color');
        
        /**
        * How long to wait before auto dismissing the component.
        * @type {int|null} If null component must be dismissed manually.
        */
        this.dismissInterval = this.config.get('dismissInterval') ? this.createDismissInterval(this.config.get('dismissInterval')) : null;
        
        /**
        * Does this component have a dismiss button?
        * @type {Boolean}
        */
        this.isDismissable = this.config.get('isDismissable');
        
        /**
        * Should this component be destroyed when it is dismissed.
        * @type {Boolean}
        */
        this.destroyOnDismiss = this.config.get('destroyOnDismiss');

        // TODO: Make internal element references all be a Bulma instance. This will keep consistency.
        if(!(this.parent instanceof _core__WEBPACK_IMPORTED_MODULE_0__["default"])) {
            this.parent = (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this.parent);
        }
        
        /**
        * The root element.
        * @type {HTMLElement|null} If this is not provided a new element will be created.
        */
        this.root = this.config.get('root', this.createRootElement.bind(this));
        
        /**
        * The element used to close the component.
        * @type {HTMLElement}
        */
        this.closeButton = this.config.get('closeButton', this.createCloseButton());

        if(this.body) {
            this.insertBody();
        }

        if(this.color) {
            this.setColor();
        }
    }

    /**
     * Create the main element.
     * @return {HTMLElement}
     */
    createRootElement() {
        let elem = document.createElement('div');
        elem.classList.add(this.name, 'is-hidden');
        elem.setAttribute('data-bulma-attached', 'attached');

        this.parent.getElement().appendChild(elem);

        return elem;
    }

    /**
     * Show the component.
     * @return {undefined}
     */
    show() {
        this.root.classList.remove('is-hidden');
    }

    /**
     * Hide the component.
     * @return {undefined}
     */
    hide() {
        this.root.classList.add('is-hidden');
    }

    /**
     * Insert the body text into the component.
     * @return {undefined}
     */
    insertBody() {
        this.root.innerHTML = this.body;
    }

    /**
     * Create the element that will be used to close the component.
     * @return {HTMLElement} The newly created close button
     */
    createCloseButton() {
        var closeButton = document.createElement('button');
        closeButton.setAttribute('type', 'button');
        closeButton.classList.add('delete');

        return closeButton;
    }

    /**
     * Create an interval to dismiss the component after the set number of ms.
     * @param  {int} interval The time to wait before dismissing the component
     * @return {undefined}
     */
    createDismissInterval(interval) {
        return setInterval(() => {
            this.handleCloseEvent();
        }, interval);
    }

    /**
     * Insert the close button before our content.
     * @return {undefined}
     */
    prependCloseButton() {
        this.root.insertBefore(this.closeButton, this.root.firstChild);
    }

    /**
     * Setup the event listener for the close button.
     * @return {undefined}
     */
    setupCloseEvent() {
        this.closeButton.addEventListener('click', this.handleCloseEvent.bind(this));
    }

    /**
     * Handle the event when our close button is clicked.
     * @return {undefined}
     */
    handleCloseEvent() {
        this.trigger('dismissed');
        
        if(this.destroyOnDismiss) {
            this.destroy();
        } else {
            this.hide();
        }

        this.trigger('close');
    }

    /**
     * Set the colour of the component.
     * @return {undefined}
     */
    setColor() {
        this.root.classList.add('is-' + this.color);
    }

    /**
     * Destroy the component, removing the event listener, interval and element.
     * @return {undefined}
     */
    destroy() {
        super.destroy();
        
        if(this.closeButton) {
            this.closeButton.removeEventListener('click', this.handleCloseEvent.bind(this));
        }

        clearInterval(this.dismissInterval);

        this.parent.getElement().removeChild(this.root);
        this.parent = null;
        this.root = null;

        this.trigger('destroyed');
    }
}

/***/ }),

/***/ "./node_modules/@vizuaalog/bulmajs/src/plugin.js":
/*!*******************************************************!*\
  !*** ./node_modules/@vizuaalog/bulmajs/src/plugin.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Plugin)
/* harmony export */ });
/* harmony import */ var _ConfigBag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConfigBag */ "./node_modules/@vizuaalog/bulmajs/src/ConfigBag.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core */ "./node_modules/@vizuaalog/bulmajs/src/core.js");



/**
 * Base plugin class. Provides basic, common functionality.
 * @class Plugin
 * @since 0.7.0
 * @author  Thomas Erbe <vizuaalog@gmail.com>
 */
class Plugin {
    /**
     * Returns an object containing the default config for this plugin.
     * @returns {object} The default config object.
     */
    static defaultConfig() {
        return {};
    }

    /**
     * Create a plugin.
     * @param {object} config The config for this plugin
     */
    constructor(config = {}, root) {
        config.root = (root instanceof _core__WEBPACK_IMPORTED_MODULE_1__["default"]) ? root._elem : root;

        this.config = new _ConfigBag__WEBPACK_IMPORTED_MODULE_0__["default"]({...this.constructor.defaultConfig(), ...config});

        if(!root && !this.config.has('parent')) {
            throw new Error('A plugin requires a root and/or a parent.');
        }

        this.parent = this.config.get('parent', config.root ? config.root.parentNode : null);

        this._events = {};
    }

    on(event, callback) {
        if(!this._events.hasOwnProperty(event)) {
            this._events[event] = [];
        }

        this._events[event].push(callback);
    }

    trigger(event, data = {}) {
        if(!this._events.hasOwnProperty(event)) {
            return;
        }

        for(let i = 0; i < this._events[event].length; i++) {
            this._events[event][i](data);
        }
    }

    destroy() {
        (0,_core__WEBPACK_IMPORTED_MODULE_1__["default"])(this.root).destroyData();
    }
}

/***/ }),

/***/ "./node_modules/@vizuaalog/bulmajs/src/plugins/alert.js":
/*!**************************************************************!*\
  !*** ./node_modules/@vizuaalog/bulmajs/src/plugins/alert.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Alert: () => (/* binding */ Alert),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./node_modules/@vizuaalog/bulmajs/src/core.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ "./node_modules/@vizuaalog/bulmajs/src/plugins/modal.js");



/**
 * @module Alert
 * @since  0.8.0
 * @author  Thomas Erbe <vizuaalog@gmail.com>
 */
class Alert extends _modal__WEBPACK_IMPORTED_MODULE_1__.Modal {
    /**
     * Handle parsing the DOM.
     * @param {HTMLElement} element The root element for this accordion
     * @return {undefined}
     */
    static parseDocument() {}

    /**
     * Returns an object containing the default config for this plugin.
     * @returns {object} The default config object.
     */
    static defaultConfig() {
        return {
            type: 'info',
            title: '',
            body: '',
            confirm: 'Okay',
            cancel: null,
            style: 'card',
            parent: document.body,
            showHeader: true
        };
    }

    /**
     * Plugin constructor
     * @param  {Object} config The config object for this plugin
     * @return {this} The newly created plugin instance
     */
    constructor(config, root) {
        super(config, root);

        this.root.classList.add('alert');

        (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this.root).data('alert', this);

        this.trigger('init');

        this.open();
    }

    /**
     * Create the alerts structure
     * @returns {void}
     */
    createCardStructure() {
        if(this.config.get('showHeader')) {
            /** @param {HTMLElement} */
            this.header = _core__WEBPACK_IMPORTED_MODULE_0__["default"].findOrCreateElement('.modal-card-head', this.content, 'header', ['modal-card-head', 'has-background-' + this.config.get('type')]);

            /** @param {HTMLElement} */
            var textColor = this.config.get('type') == 'warning' ? 'black' : 'white';
            this.headerTitle = _core__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('p', ['modal-card-title', 'has-text-' + textColor]);
            this.headerTitle.innerHTML = this.title;
            this.header.appendChild(this.headerTitle);
        }

        /** @param {HTMLElement} */
        this.cardBody = _core__WEBPACK_IMPORTED_MODULE_0__["default"].findOrCreateElement('.modal-card-body', this.content, 'section');
        if(!this.cardBody.innerHTML) {
            this.cardBody.innerHTML = this.body;
        }

        /** @param {HTMLElement} */
        this.footer = _core__WEBPACK_IMPORTED_MODULE_0__["default"].findOrCreateElement('.modal-card-foot', this.content, 'footer');
    }

    /**
     * Go through the provided buttons option and create the buttons.
     * @returns {void}
     */
    createButtons() {
        var defaultButtonOptions = { close: true, destroy: true, onClick: function() {} };

        var confirmOptions = this.config.get('confirm');
        if(typeof confirmOptions === 'string') {
            confirmOptions = {
                label: confirmOptions,
                classes: []
            };
        }
        confirmOptions = { ...defaultButtonOptions, ...confirmOptions};

        var confirmButton = _core__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('button', ['button', 'is-' + this.config.get('type')].concat(confirmOptions.classes));
        confirmButton.innerHTML = confirmOptions.label;
        confirmButton.addEventListener('click', e => {
            confirmOptions.onClick(e);

            if(confirmOptions.close) {
                this.close();
            }

            if(confirmOptions.destroy) {
                this.destroy();
            }
        });
        this.footer.appendChild(confirmButton);

        if(this.config.get('cancel')) {
            var cancelOptions = this.config.get('cancel');
            if(typeof cancelOptions === 'string') {
                cancelOptions = {
                    label: cancelOptions,
                    classes: []
                };
            }
            cancelOptions = { ...defaultButtonOptions, ...cancelOptions};

            var cancelButton = _core__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('button', ['button'].concat(cancelOptions.classes));
            cancelButton.innerHTML = cancelOptions.label;
            cancelButton.addEventListener('click', e => {
                cancelOptions.onClick(e);

                if(cancelOptions.close) {
                    this.close();
                }

                if(cancelOptions.destroy) {
                    this.destroy();
                }
            });
            this.footer.appendChild(cancelButton);
        }
    }
}

_core__WEBPACK_IMPORTED_MODULE_0__["default"].registerPlugin('alert', Alert);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/@vizuaalog/bulmajs/src/plugins/dropdown.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@vizuaalog/bulmajs/src/plugins/dropdown.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dropdown: () => (/* binding */ Dropdown),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./node_modules/@vizuaalog/bulmajs/src/core.js");
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../plugin */ "./node_modules/@vizuaalog/bulmajs/src/plugin.js");



/**
 * @module Dropdown
 * @since  0.1.0
 * @author  Thomas Erbe <vizuaalog@gmail.com>
 */
class Dropdown extends _plugin__WEBPACK_IMPORTED_MODULE_1__["default"] {
    /**
     * Handle parsing the DOMs data attribute API.
     * @param {HtmlElement} element The root element for this instance
     * @return {undefined}
     */
    static parseDocument(context) {
        let elements;

        if (typeof context.classList === 'object' && context.classList.contains('dropdown')) {
            elements = [context];
        } else {
            elements = context.querySelectorAll('.dropdown');
        }

        _core__WEBPACK_IMPORTED_MODULE_0__["default"].each(elements, (element) => {
            (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(element).dropdown();
        });
    }

    /**
     * Plugin constructor
     * @param  {Object} config The config object for this plugin
     * @return {this} The newly created instance
     */
    constructor(config, root) {
        super(config, root);

        /**
         * The root dropdown element.
         * @type {HTMLElement}
         */
        this.root = this.config.get('root');
        this.root.setAttribute('data-bulma-attached', 'attached');

        /**
         * The element to trigger when clicked.
         * @type {HTMLElement}
         */
        this.triggerElement = this.root.querySelector('.dropdown-trigger');

        this.registerEvents();

        (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this.root).data('dropdown', this);

        this.trigger('init');
    }

    /**
     * Register all the events this module needs.
     * @return {undefined}
     */
    registerEvents() {
        this.triggerElement.addEventListener('click', this.handleTriggerClick.bind(this));
    }

    /**
     * Handle the click event on the trigger.
     * @return {undefined}
     */
    handleTriggerClick() {
        if (this.root.classList.contains('is-active')) {
            this.root.classList.remove('is-active');

            this.trigger('close');
        } else {
            this.root.classList.add('is-active');

            this.trigger('open');
        }
    }
}

_core__WEBPACK_IMPORTED_MODULE_0__["default"].registerPlugin('dropdown', Dropdown);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/@vizuaalog/bulmajs/src/plugins/file.js":
/*!*************************************************************!*\
  !*** ./node_modules/@vizuaalog/bulmajs/src/plugins/file.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   File: () => (/* binding */ File),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./node_modules/@vizuaalog/bulmajs/src/core.js");
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../plugin */ "./node_modules/@vizuaalog/bulmajs/src/plugin.js");



/**
 * @module File
 * @since  0.1.0
 * @author  Thomas Erbe <vizuaalog@gmail.com>
 */
class File extends _plugin__WEBPACK_IMPORTED_MODULE_1__["default"] {
    /**
     * Handle parsing the DOMs data attribute API.
     * @param {HTMLElement} element The root element for this plugin
     * @return {undefined}
     */
    static parseDocument(context) {
        let elements;

        if (typeof context.classList === 'object' && context.classList.contains('file')) {
            elements = [context];
        } else {
            elements = context.querySelectorAll('.file');
        }

        _core__WEBPACK_IMPORTED_MODULE_0__["default"].each(elements, (element) => {
            (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(element).file();
        });
    }

    /**
     * Plugin constructor
     * @param  {Object} config The config object for this plugin
     * @return {this} The newly created plugin instance
     */
    constructor(config, root) {
        super(config, root);

        /**
         * The root file element.
         * @type {HTMLElement}
         */
        this.root = this.config.get('root');
        this.root.setAttribute('data-bulma-attached', 'attached');

        /**
         * The element to use as the trigger.
         * @type {HTMLELement}
         */
        this.input = this.root.querySelector('input');

        /**
         * The element to show the file name.
         * @type {HTMLElement}
         */
        this.filename = this.root.querySelector('.file-name');

        this.registerEvents();

        (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this.root).data('file', this);

        this.trigger('init');
    }

    /**
     * Register all the events this module needs.
     * @return {undefined}
     */
    registerEvents() {
        if (this.filename) {
            this.input.addEventListener('change', this.handleTriggerChange.bind(this));
        }

        this.root.addEventListener('dragover', (e) => {
            e.preventDefault();
            this.addHoverClass();
        });

        this.root.addEventListener('dragleave', (e) => {
            e.preventDefault();
            this.addHoverClass();
        });

        this.root.addEventListener('drop', (e) => {
            e.preventDefault();
            this.removeHoverClass();
            this.input.files = e.dataTransfer.files;
        });
    }

    /**
     * Handle the click event on the trigger.
     * @param  {Object} event The event object
     * @return {undefined}
     */
    handleTriggerChange(event) {
        if (event.target.files.length === 0) {
            this.clearFileName();
        }

        if (event.target.files.length === 1) {
            this.setFileName(event.target.files[0].name);
        }

        if (event.target.files.length > 1) {
            this.setFileName(event.target.files.length + ' files');
        }

        this.trigger('changed', event);
    }

    /**
     * Clear the file name element.
     * @return {undefined}
     */
    clearFileName() {
        this.filename.innerHTML = '';
    }

    /**
     * Get the selected file's name
     * 
     * @returns {string}
     */
    getFilename() {
        return this.filename.innerHTML;
    }

    /**
     * Set the text for the file name element.
     * @param {string} value The name of the file to update the label with
     * @return {undefined}
     */
    setFileName(value) {
        this.filename.innerHTML = value;
    }

    /**
     * Add hover class to root element.
     * @return {undefined}
     */
    addHoverClass() {
        this.root.classList.add('is-hovered');
    }

    /**
     * Remove hover class from root element.
     * @return {undefined}
     */
    removeHoverClass() {
        this.root.classList.remove('is-hovered');
    }
}

_core__WEBPACK_IMPORTED_MODULE_0__["default"].registerPlugin('file', File);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/@vizuaalog/bulmajs/src/plugins/message.js":
/*!****************************************************************!*\
  !*** ./node_modules/@vizuaalog/bulmajs/src/plugins/message.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Message: () => (/* binding */ Message),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./node_modules/@vizuaalog/bulmajs/src/core.js");
/* harmony import */ var _dismissableComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dismissableComponent */ "./node_modules/@vizuaalog/bulmajs/src/dismissableComponent.js");



/**
 * @module Message
 * @since  0.1.0
 * @author  Thomas Erbe <vizuaalog@gmail.com>
 * @extends DismissableComponent
 */
class Message extends _dismissableComponent__WEBPACK_IMPORTED_MODULE_1__["default"] {
    /**
     * Handle parsing the DOMs data attribute API.
     * @param {HTMLElement} element The root element for this plugin
     * @return {undefined}
     */
    static parseDocument(context) {
        let elements;

        if (typeof context.classList === 'object' && context.classList.container('.message')) {
            elements = [context];
        } else {
            elements = context.querySelectorAll('.message');
        }

        _core__WEBPACK_IMPORTED_MODULE_0__["default"].each(elements, (element) => {
            let closeBtn = element.querySelector('.delete');

            (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(element).message({
                body: null,
                closeButton: closeBtn,
                isDismissable: !!closeBtn,
                destroyOnDismiss: true,
                dismissInterval: element.hasAttribute('data-dismiss-interval') ? element.getAttribute('data-dismiss-interval') : null
            });
        });
    }

    /**
     * Plugin constructor
     * @param  {Object} config The config object for this plugin
     * @return {this} The newly created instance
     */
    constructor(config, root) {
        super('message', config, root);

        /**
         * The size of the message
         * @type {String} Possible values are small, normal, medium or large
         */
        this.size = this.config.get('size');

        /**
         * The title of the message
         * @type {String}
         */
        this.title = this.config.get('title');

        if (this.title) {
            this.createMessageHeader();
        }

        // TODO: Move this into the DismissableComponent class. Due to the required
        // changes between different components, we may need a way to trigger this
        // when the component is ready.
        if (this.isDismissable) {
            if (!this.config.get('closeButton')) {
                this.prependCloseButton();
            }

            this.setupCloseEvent();
        }

        if (this.size) {
            this.setSize();
        }

        (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this.root).data('message', this);

        this.trigger('init');
    }

    /**
     * Create the message header
     * @return {undefined}
     */
    createMessageHeader() {
        let header = document.createElement('div');
        header.classList.add('message-header');

        header.innerHTML = '<p>' + this.title + '</p>';

        this.title = header;

        this.root.insertBefore(this.title, this.root.firstChild);
    }

    /**
     * Set the size of the message.
     * @return {undefined}
     */
    setSize() {
        this.root.classList.add('is-' + this.size);
    }

    /**
     * Insert the body text into the component.
     * @return {undefined}
     */
    insertBody() {
        let body = document.createElement('div');
        body.classList.add('message-body');
        body.innerHTML = this.body;

        this.root.appendChild(body);
    }

    /**
     * Insert the close button before our content.
     * @return {undefined}
     */
    prependCloseButton() {
        this.title.appendChild(this.closeButton);
    }
}

_core__WEBPACK_IMPORTED_MODULE_0__["default"].registerPlugin('message', Message);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/@vizuaalog/bulmajs/src/plugins/modal.js":
/*!**************************************************************!*\
  !*** ./node_modules/@vizuaalog/bulmajs/src/plugins/modal.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Modal: () => (/* binding */ Modal),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./node_modules/@vizuaalog/bulmajs/src/core.js");
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../plugin */ "./node_modules/@vizuaalog/bulmajs/src/plugin.js");



/**
 * @module Modal
 * @since  0.1.0
 * @author  Thomas Erbe <vizuaalog@gmail.com>
 */
class Modal extends _plugin__WEBPACK_IMPORTED_MODULE_1__["default"] {
    /**
     * Handle parsing the DOM.
     * @param {HTMLElement} element The root element for this accordion
     * @return {undefined}
     */
    static parseDocument() {}

    /**
     * Returns an object containing the default config for this plugin.
     * @returns {object} The default config object.
     */
    static defaultConfig() {
        return {
            style: 'card',
            closable: true
        };
    }

    /**
     * Plugin constructor
     * @param  {Object} config The config object for this plugin
     * @return {this} The newly created plugin instance
     */
    constructor(config, root) {
        super(config, root);

        /** @param {string} */
        this.style = this.config.get('style');

        /** @param {HTMLElement} */
        this.root = this.config.get('root');
        
        if(!this.root.classList.contains('modal')) {
            this.root.classList.add('modal');
        }

        if(!this.parent) {
            if(!this.root.parentNode) {
                this.parent = document.body;

                this.parent.appendChild(this.root);
            } else {
                this.parent = this.root.parentNode;
            }
        } else {
            this.parent.appendChild(this.root);
        }

        /** @param {HTMLElement} */
        this.background = _core__WEBPACK_IMPORTED_MODULE_0__["default"].findOrCreateElement('.modal-background', this.root);

        /** @param {HTMLElement} */
        this.content = this.style === 'card' ? _core__WEBPACK_IMPORTED_MODULE_0__["default"].findOrCreateElement('.modal-card', this.root) : _core__WEBPACK_IMPORTED_MODULE_0__["default"].findOrCreateElement('.modal-content', this.root);

        /** @param {boolean} */
        this.closable = this.config.get('closable');

        /** @param {string|null} */
        this.body = this.config.get('body');

        /** @param {string|null} */
        this.title = this.config.get('title');

        if(this.config.get('bodyUrl')) {
            _core__WEBPACK_IMPORTED_MODULE_0__["default"].ajax(this.config.get('bodyUrl'))
                .then((response) => {
                    this.body = response;
                    this.buildModal();
                });
        } else {
            this.buildModal();
        }

        (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this.root).data('modal', this);

        this.trigger('init');
    }

    // Build the modal's HTML
    buildModal() {
        if(this.style === 'card') {
            this.createCardStructure();
        } else {
            if(!this.content.innerHTML) {
                this.content.innerHTML = this.body;
            }
        }

        if(this.closable) {
            /** @param {HTMLElement} */
            this.closeButton = this.style === 'card' ? _core__WEBPACK_IMPORTED_MODULE_0__["default"].findOrCreateElement('.delete', this.header, 'button') : _core__WEBPACK_IMPORTED_MODULE_0__["default"].findOrCreateElement('.modal-close', this.root, 'button');
        }

        if(this.style === 'card') {
            this.createButtons();
        }

        this.setupEvents();
    }

    /**
     * Create the card style structure
     * @returns {void}
     */
    createCardStructure() {
        /** @param {HTMLElement} */
        this.header = _core__WEBPACK_IMPORTED_MODULE_0__["default"].findOrCreateElement('.modal-card-head', this.content, 'header');

        /** @param {HTMLElement} */
        this.headerTitle = _core__WEBPACK_IMPORTED_MODULE_0__["default"].findOrCreateElement('.modal-card-title', this.header, 'p');
        if(!this.headerTitle.innerHTML) {
            this.headerTitle.innerHTML = this.title;
        }

        /** @param {HTMLElement} */
        this.cardBody = _core__WEBPACK_IMPORTED_MODULE_0__["default"].findOrCreateElement('.modal-card-body', this.content, 'section');
        if(!this.cardBody.innerHTML) {
            this.cardBody.innerHTML = this.body;
        }

        /** @param {HTMLElement} */
        this.footer = _core__WEBPACK_IMPORTED_MODULE_0__["default"].findOrCreateElement('.modal-card-foot', this.content, 'footer');
    }

    /**
     * Setup the events used by this modal.
     * @returns {void}
     */
    setupEvents() {
        if(this.closable) {
            this.closeButton.addEventListener('click', this.close.bind(this));

            this.keyupListenerBound = (evt) => this.keyupListener(evt);
            document.addEventListener('keyup', this.keyupListenerBound);

            this.background.addEventListener('click', this.close.bind(this));
        }
    }

    /**
     * Go through the provided buttons option and create the buttons.
     * @returns {void}
     */
    createButtons() {
        var buttonsConfig = this.config.get('buttons', []);
        var modal = this;

        _core__WEBPACK_IMPORTED_MODULE_0__["default"].each(buttonsConfig, function(buttonConfig) {
            var button = _core__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('button', buttonConfig.classes);
            button.innerHTML = buttonConfig.label;

            button.addEventListener('click', function(event) {
                buttonConfig.onClick(event);
            });

            modal.footer.appendChild(button);
        });
    }

    /**
     * Open the modal
     * @returns {void}
     */
    open() {
        this.root.classList.add('is-active');
        document.documentElement.classList.add('is-clipped');

        this.trigger('open');
    }

    /**
     * Close the modal
     * @returns {void} 
     */
    close() {
        this.root.classList.remove('is-active');
        document.documentElement.classList.remove('is-clipped');

        this.trigger('close');
    }

    keyupListener(event) {
        if(!this.root.classList.contains('is-active')) {
            return;
        }

        let key = event.key || event.keyCode;

        if(key === 'Escape' || key === 'Esc' || key === 27) {
            this.close();
        }
    }

    /**
     * Destroy this modal, unregistering element references and removing the modal.
     * @returns {void}
     */
    destroy() {
        super.destroy();
        
        this.root.remove();

        this.parent = null;
        this.root = null;
        this.background = null;
        this.content = null;

        if(this.style === 'card') {
            this.header = null;
            this.headerTitle = null;
            this.cardBody = null;
            this.footer = null;
        }

        if(this.closable) {
            this.closeButton = null;

            document.removeEventListener('keyup', this.keyupListenerBound);
        }

        this.config.gets = [];

        this.trigger('destroyed');
    }
}

_core__WEBPACK_IMPORTED_MODULE_0__["default"].registerPlugin('modal', Modal);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/@vizuaalog/bulmajs/src/plugins/navbar.js":
/*!***************************************************************!*\
  !*** ./node_modules/@vizuaalog/bulmajs/src/plugins/navbar.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Navbar: () => (/* binding */ Navbar),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./node_modules/@vizuaalog/bulmajs/src/core.js");
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../plugin */ "./node_modules/@vizuaalog/bulmajs/src/plugin.js");



/**
 * @module Navbar
 * @since  0.1.0
 * @author  Thomas Erbe <vizuaalog@gmail.com>
 */
class Navbar extends _plugin__WEBPACK_IMPORTED_MODULE_1__["default"] {
    /**
     * Handle parsing the DOMs data attribute API.
     * @param {HTMLElement} element The root element for this instance
     * @return {undefined}
     */
    static parseDocument(context) {
        let elements;

        if (typeof context.classList === 'object' && context.classList.contains('navbar')) {
            elements = [context];
        } else {
            elements = context.querySelectorAll('.navbar');
        }

        _core__WEBPACK_IMPORTED_MODULE_0__["default"].each(elements, (element) => {
            (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(element).navbar({
                sticky: element.hasAttribute('data-sticky') ? true : false,
                stickyOffset: element.hasAttribute('data-sticky-offset') ? element.getAttribute('data-sticky-offset') : 0,
                hideOnScroll: element.hasAttribute('data-hide-on-scroll') ? true : false,
                tolerance: element.hasAttribute('data-tolerance') ? element.getAttribute('data-tolerance') : 0,
                hideOffset: element.hasAttribute('data-hide-offset') ? element.getAttribute('data-hide-offset') : null,
                shadow: element.hasAttribute('data-sticky-shadow') ? true : false
            });
        });
    }

    /**
     * Returns an object containing the default config for this plugin.
     * @returns {object} The default config object.
     */
    static defaultconfig() {
        return {
            sticky: false,
            stickyOffset: 0,
            hideOnScroll: false,
            tolerance: 0,
            hideOffset: null,
            shadow: false
        };
    }

    /**
     * Plugin constructor
     * @param  {Object} config The config object for this plugin
     * @return {this} The newly created plugin instance
     */
    constructor(config, root) {
        super(config, root);

        // Work out the parent if it hasn't been supplied as an option.
        if (this.parent === null) {
            this.parent = this.config.get('root').parentNode;
        }

        /**
         * The root navbar element.
         * @type {HTMLElement}
         */
        this.root = this.config.get('root');
        this.root.setAttribute('data-bulma-attached', 'attached');

        /**
         * The element used for the trigger.
         * @type {HTMLElement}
         */
        this.triggerElement = this.root.querySelector('.navbar-burger');

        /**
         * The target element.
         * @type {HTMLELement}
         */
        this.target = this.root.querySelector('.navbar-menu');

        /**
         * Should this navbar stick to the top of the page?
         * @type {boolean}
         */
        this.sticky = typeof window === 'object' && !!this.config.get('sticky');

        /**
         * The offset in pixels before the navbar will stick to the top of the page
         * @type {number}
         */
        this.stickyOffset = parseInt(this.config.get('stickyOffset'));

        /**
         * Should the navbar hide when scrolling? Note: this just applies a 'is-hidden-scroll' class.
         * @type {boolean}
         */
        this.hideOnScroll = !!this.config.get('hideOnScroll');

        /**
         * The amount of tolerance required before checking the navbar should hide/show
         * @type {number}
         */
        this.tolerance = parseInt(this.config.get('tolerance'));

        /**
         * Add a shadow when the navbar is sticky?
         * @type {boolean}
         */
        this.shadow = !!this.config.get('shadow');

        /**
         * The offset in pixels before the navbar will be hidden, defaults to the height of the navbar
         * @type {number}
         */
        this.hideOffset = parseInt(this.config.get('hideOffset', Math.max(this.root.scrollHeight, this.stickyOffset)));

        /**
         * The last scroll Y known, this is used to calculate scroll direction
         * @type {number}
         */
        this.lastScrollY = 0;

        /**
         * An array of any navbar dropdowns
         * @type {NodeList}
         */
        this.dropdowns = this.root.querySelectorAll('.navbar-item.has-dropdown:not(.is-hoverable)');

        /**
         * Bind the relevant event handlers to this instance. So that we can remove them if needed
         */
        this.handleScroll = this.handleScroll.bind(this);

        (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this.root).data('navbar', this);

        this.registerEvents();
    }

    /**
     * Register all the events this module needs.
     * @return {undefined}
     */
    registerEvents() {
        if(this.triggerElement) {
            this.triggerElement.addEventListener('click', this.handleTriggerClick.bind(this));
        }

        if (this.sticky) {
            this.enableSticky();
        }

        _core__WEBPACK_IMPORTED_MODULE_0__["default"].each(this.dropdowns, (dropdown) => {
            dropdown.addEventListener('click', this.handleDropdownTrigger);
        });
    }

    /**
     * Handle the click event on the trigger.
     * @return {undefined}
     */
    handleTriggerClick() {
        if (this.target.classList.contains('is-active')) {
            this.target.classList.remove('is-active');
            this.triggerElement.classList.remove('is-active');
        } else {
            this.target.classList.add('is-active');
            this.triggerElement.classList.add('is-active');
        }
    }

    /**
     * Handle the scroll event
     * @return {undefined}
     */
    handleScroll() {
        this.toggleSticky(window.pageYOffset);
    }

    /**
     * Handle the click handler for any dropdowns found within the navbar
     */
    handleDropdownTrigger() {
        if (this.classList.contains('is-active')) {
            this.classList.remove('is-active');
        } else {
            this.classList.add('is-active');
        }
    }

    /**
     * Enable the sticky feature by attaching the scroll event.
     */
    enableSticky() {
        window.addEventListener('scroll', this.handleScroll);
        this.root.setAttribute('data-sticky', '');
        this.sticky = true;
    }

    /**
     * Disable the sticky feature by removing the scroll event.
     */
    disableSticky() {
        window.removeEventListener('scroll', this.handleScroll);
        this.root.removeAttribute('data-sticky');
        this.sticky = false;
    }

    /**
     * Enable hide on scroll. Also enable sticky if it's not already.
     */
    enableHideOnScroll() {
        if (!this.sticky) {
            this.enableSticky();
        }

        this.root.setAttribute('data-hide-on-scroll', '');
        this.hideOnScroll = true;
    }

    /**
     * Disable hide on scroll, and show the navbar again if it's hidden.
     */
    disableHideOnScroll() {
        this.root.removeAttribute('data-hide-on-scroll');
        this.hideOnScroll = false;
        this.root.classList.remove('is-hidden-scroll');
    }

    /**
     * Toggle the navbar's sticky state
     * @param {number} scrollY The amount of pixels that has been scrolled
     * @return {undefined}
     */
    toggleSticky(scrollY) {
        if (scrollY > this.stickyOffset) {
            this.root.classList.add('is-fixed-top');
            document.body.classList.add('has-navbar-fixed-top');

            if (this.shadow) {
                this.root.classList.add('has-shadow');
            }
        } else {
            this.root.classList.remove('is-fixed-top');
            document.body.classList.remove('has-navbar-fixed-top');

            if (this.shadow) {
                this.root.classList.remove('has-shadow');
            }
        }

        if (this.hideOnScroll) {
            let scrollDirection = this.calculateScrollDirection(scrollY, this.lastScrollY);
            let triggeredTolerance = this.difference(scrollY, this.lastScrollY) >= this.tolerance;

            if (scrollDirection === 'down') {
                // only hide the navbar at the top if we reach a certain offset so the hiding is more smooth
                let isBeyondTopOffset = scrollY > this.hideOffset;
                if (triggeredTolerance && isBeyondTopOffset) {
                    this.root.classList.add('is-hidden-scroll');
                }
            } else {
                // if scrolling up to the very top where the navbar would be by default always show it
                let isAtVeryTop = scrollY < this.hideOffset;
                if (triggeredTolerance || isAtVeryTop) {
                    this.root.classList.remove('is-hidden-scroll');
                }
            }

            this.lastScrollY = scrollY;
        }
    }

    difference(a, b) {
        if (a > b) {
            return a - b;
        } else {
            return b - a;
        }
    }

    calculateScrollDirection(currentY, lastY) {
        return currentY >= lastY ? 'down' : 'up';
    }
}

_core__WEBPACK_IMPORTED_MODULE_0__["default"].registerPlugin('navbar', Navbar);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/@vizuaalog/bulmajs/src/plugins/notification.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@vizuaalog/bulmajs/src/plugins/notification.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Notification: () => (/* binding */ Notification),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./node_modules/@vizuaalog/bulmajs/src/core.js");
/* harmony import */ var _dismissableComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dismissableComponent */ "./node_modules/@vizuaalog/bulmajs/src/dismissableComponent.js");



/**
 * @module Notification
 * @since  0.1.0
 * @author  Thomas Erbe <vizuaalog@gmail.com>
 * @extends DismissableComponent
 */
class Notification extends _dismissableComponent__WEBPACK_IMPORTED_MODULE_1__["default"] {
    /**
     * Handle parsing the DOMs data attribute API.
     * @param {HTMLElement} element The root element for this instance
     * @return {undefined}
     */
    static parseDocument(context) {
        let elements;

        if (typeof context.classList === 'object' && context.classList.contains('notification')) {
            elements = [context];
        } else {
            elements = context.querySelectorAll('.notification');
        }

        _core__WEBPACK_IMPORTED_MODULE_0__["default"].each(elements, (element) => {
            let bulmaElement = (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(element);

            if (bulmaElement.data('notification')) {
                return;
            }

            let closeBtn = element.querySelector('.delete');

            bulmaElement.notification({
                body: null,
                closeButton: closeBtn,
                isDismissable: !!closeBtn,
                destroyOnDismiss: true,
                dismissInterval: element.hasAttribute('data-dismiss-interval') ? element.getAttribute('data-dismiss-interval') : null
            });
        });
    }

    /**
     * Plugin constructor
     * @param  {Object} config The config object for this plugin
     * @return {this} The newly created instance
     */
    constructor(config, root) {
        super('notification', config, root);

        // TODO: Move this into the DismissableComponent class. Due to the required
        // changes between different components, we may need a way to trigger this
        // when the component is ready.
        if (this.isDismissable) {
            if (!this.config.has('closeButton')) {
                this.prependCloseButton();
            }

            this.setupCloseEvent();
        }

        (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this.root).data('notification', this);

        this.trigger('init');
    }
}

_core__WEBPACK_IMPORTED_MODULE_0__["default"].registerPlugin('notification', Notification);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/@vizuaalog/bulmajs/src/plugins/panelTabs.js":
/*!******************************************************************!*\
  !*** ./node_modules/@vizuaalog/bulmajs/src/plugins/panelTabs.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanelTabs: () => (/* binding */ PanelTabs),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./node_modules/@vizuaalog/bulmajs/src/core.js");
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../plugin */ "./node_modules/@vizuaalog/bulmajs/src/plugin.js");



/**
 * @module PanelTabs
 * @since  0.12.0
 * @author  Thomas Erbe <vizuaalog@gmail.com>
 */
class PanelTabs extends _plugin__WEBPACK_IMPORTED_MODULE_1__["default"] {
    /**
     * Handle parsing the DOMs data attribute API.
     * @param {HTMLElement} context The root element for this instance
     * @returns {undefined}
     */
    static parseDocument(context) {
        let elements;

        if (typeof context.classList === 'object' && context.classList.contains('panel')) {
            elements = [context];
        } else {
            elements = context.querySelectorAll('.panel');
        }

        _core__WEBPACK_IMPORTED_MODULE_0__["default"].each(elements, (element) => {
            if(element.querySelector('.panel-tabs') === null) {
                return;
            }

            (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(element).panelTabs();
        });
    }

    /**
     * Returns an object containing the default config for this plugin.
     * @returns {object} The default config object.
     */
    static defaultConfig() {
        return {};
    }

    /**
     * Plugin constructor
     * @param  {Object} config The config object for this plugin
     * @return {this} The newly created instance
     */
    constructor(config, root) {
        super(config, root);

        /**
         * The root tab element
         * @param {HTMLElement}
         */
        this.root = this.config.get('root');
        this.root.setAttribute('data-bulma-attached', 'attached');

        /**
         * The tab nav container
         * @param {HTMLElement}
         */
        this.nav = this.findNav();

        /**
         * The tab's nav items
         * @param {HTMLElement[]}
         */
        this.navItems = this.findNavItems();

        /**
         * The tab's content items
         * @param {HTMLElement[]}
         */
        this.contentItems = this.findContentItems();

        this.setupNavEvents();

        this.on('init', this.showActiveTab.bind(this));

        (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this.root).data('panelTabs', this);

        this.trigger('init');
    }

    /**
     * Find the tab navigation container.
     * @returns {HTMLElement} The navigation container
     */
    findNav() {
        return this.root.querySelector('.panel-tabs');
    }

    /**
     * Find each individual tab item
     * @returns {NodeListOf<Element>} An array of the found items
     */
    findNavItems() {
        return this.nav.querySelectorAll('a');
    }

    /**
     * Find each individual content item
     * @returns {NodeListOf<Element>} An array of the found items
     */
    findContentItems() {
        return this.root.querySelectorAll('.panel-block[data-category]');
    }

    /**
     * Setup the events to handle tab changing
     * @returns {void}
     */
    setupNavEvents() {
        _core__WEBPACK_IMPORTED_MODULE_0__["default"].each(this.navItems, (navItem) => {
            navItem.addEventListener('click', () => {
                this.setActive(navItem.getAttribute('data-target'));
            });
        });
    }

    /**
     * Show the correct category and mark the tab as active.
     * 
     * @param {string|null} category The new category to set
     */
    setActive(category) {
        this.navItems.forEach((item) => {
            if(item.getAttribute('data-target') === category) {
                item.classList.add('is-active');
            } else {
                item.classList.remove('is-active');
            }
        });

        this.contentItems.forEach((item) => {
            if(item.getAttribute('data-category') === category || category === null) {
                item.classList.remove('is-hidden');
            } else {
                item.classList.add('is-hidden');
            }
        });
    }

    /**
     * This is called on init and will setup the panel tabs for the current active tab, if any
     */
    showActiveTab() {
        let activeNavFound = false;

        _core__WEBPACK_IMPORTED_MODULE_0__["default"].each(this.navItems, (navItem) => {
            if(navItem.classList.contains('is-active')) {
                this.setActive(navItem.getAttribute('data-target'));
                activeNavFound = true;
            }
        });

        // If no nav item has is-active then use the first one
        if(!activeNavFound) {
            this.setActive(this.navItems[0].getAttribute('data-target'));
        }
    }
}

_core__WEBPACK_IMPORTED_MODULE_0__["default"].registerPlugin('panelTabs', PanelTabs);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/@vizuaalog/bulmajs/src/plugins/tabs.js":
/*!*************************************************************!*\
  !*** ./node_modules/@vizuaalog/bulmajs/src/plugins/tabs.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tabs: () => (/* binding */ Tabs),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./node_modules/@vizuaalog/bulmajs/src/core.js");
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../plugin */ "./node_modules/@vizuaalog/bulmajs/src/plugin.js");



/**
 * @module Tabs
 * @since  0.4.0
 * @author  Thomas Erbe <vizuaalog@gmail.com>
 */
class Tabs extends _plugin__WEBPACK_IMPORTED_MODULE_1__["default"] {
    /**
     * Handle parsing the DOMs data attribute API.
     * @param {HTMLElement} element The root element for this instance
     * @returns {undefined}
     */
    static parseDocument(context) {
        let elements;

        if (typeof context.classList === 'object' && context.classList.has('tabs-wrapper')) {
            elements = [context];
        } else {
            elements = context.querySelectorAll('.tabs-wrapper');
        }

        _core__WEBPACK_IMPORTED_MODULE_0__["default"].each(elements, (element) => {
            (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(element).tabs({
                hover: element.hasAttribute('data-hover') ? true : false
            });
        });
    }

    /**
     * Returns an object containing the default config for this plugin.
     * @returns {object} The default config object.
     */
    static defaultConfig() {
        return {
            hover: false
        };
    }

    /**
     * Plugin constructor
     * @param  {Object} config The config object for this plugin
     * @return {this} The newly created instance
     */
    constructor(config, root) {
        super(config, root);

        /**
         * The root tab element
         * @param {HTMLElement}
         */
        this.root = this.config.get('root');
        this.root.setAttribute('data-bulma-attached', 'attached');

        /**
         * Whether the tabs should be changed when the nav item is hovered over
         * @param {boolean}
         */
        this.hover = this.config.get('hover');

        /**
         * The tab nav container
         * @param {HTMLElement}
         */
        this.nav = this.findNav();

        /**
         * The tab's nav items
         * @param {HTMLElement[]}
         */
        this.navItems = this.findNavItems();

        /**
         * The tab content container
         * @param {HTMLElement}
         */
        this.content = this.findContent();

        /**
         * The tab's content items
         * @param {HTMLElement[]}
         */
        this.contentItems = this.findContentItems();

        this.setupNavEvents();

        (0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this.root).data('tabs', this);

        this.trigger('init');
    }

    /**
     * Find the tab navigation container.
     * @returns {HTMLElement} The navigation container
     */
    findNav() {
        return this.root.querySelector('.tabs');
    }

    /**
     * Find each individual tab item
     * @returns {HTMLElement[]} An array of the found items
     */
    findNavItems() {
        return this.nav.querySelectorAll('li');
    }

    /**
     * Find the tab content container.
     * @returns {HTMLElement} The content container
     */
    findContent() {
        return this.root.querySelector('.tabs-content');
    }

    /**
     * Find each individual content item
     * @returns {HTMLElement[]} An array of the found items
     */
    findContentItems() {
        // We have to use the root here as the querySelectorAll API doesn't
        // support using '>' as the first character. So we have to have a
        // class to start with.
        return this.root.querySelectorAll('.tabs-content > ul > li');
    }

    /**
     * Setup the events to handle tab changing
     * @returns {void}
     */
    setupNavEvents() {
        _core__WEBPACK_IMPORTED_MODULE_0__["default"].each(this.navItems, (navItem, index) => {
            navItem.addEventListener('click', () => {
                this.setActive(index);
            });

            if (this.hover) {
                navItem.addEventListener('mouseover', () => {
                    this.setActive(index);
                });
            }
        });
    }

    /**
     * Set the provided tab's index as the active tab.
     * 
     * @param {integer} index The new index to set
     */
    setActive(index) {
        _core__WEBPACK_IMPORTED_MODULE_0__["default"].each(this.navItems, (navItem) => {
            navItem.classList.remove('is-active');
        });

        _core__WEBPACK_IMPORTED_MODULE_0__["default"].each(this.contentItems, (contentItem) => {
            contentItem.classList.remove('is-active');
        });

        this.navItems[index].classList.add('is-active');
        this.contentItems[index].classList.add('is-active');
    }
}

_core__WEBPACK_IMPORTED_MODULE_0__["default"].registerPlugin('tabs', Tabs);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vizuaalog_bulmajs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vizuaalog/bulmajs */ "./node_modules/@vizuaalog/bulmajs/src/bulma.js");

/*import './bootstrap';

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();
*/

// var modal = Bulma().modal({
//     title: 'Hello world',
//     body: 'This is the body'
// });

// You can now call methods on modal
// modal.open();

// Or if you have the HTML already
// var modal = Bulma('.my-modal').modal();
// modal.open();

/***/ }),

/***/ "./resources/css/bulmaswatch.min.css":
/*!*******************************************!*\
  !*** ./resources/css/bulmaswatch.min.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/css/admin.css":
/*!*********************************!*\
  !*** ./resources/css/admin.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/app": 0,
/******/ 			"css/admin": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app","css/admin"], () => (__webpack_require__("./resources/js/app.js")))
/******/ 	__webpack_require__.O(undefined, ["css/app","css/admin"], () => (__webpack_require__("./resources/css/bulmaswatch.min.css")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app","css/admin"], () => (__webpack_require__("./resources/css/admin.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;