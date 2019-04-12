require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["__extends"] = __extends;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (immutable) */ __webpack_exports__["__rest"] = __rest;
/* harmony export (immutable) */ __webpack_exports__["__decorate"] = __decorate;
/* harmony export (immutable) */ __webpack_exports__["__param"] = __param;
/* harmony export (immutable) */ __webpack_exports__["__metadata"] = __metadata;
/* harmony export (immutable) */ __webpack_exports__["__awaiter"] = __awaiter;
/* harmony export (immutable) */ __webpack_exports__["__generator"] = __generator;
/* harmony export (immutable) */ __webpack_exports__["__exportStar"] = __exportStar;
/* harmony export (immutable) */ __webpack_exports__["__values"] = __values;
/* harmony export (immutable) */ __webpack_exports__["__read"] = __read;
/* harmony export (immutable) */ __webpack_exports__["__spread"] = __spread;
/* harmony export (immutable) */ __webpack_exports__["__await"] = __await;
/* harmony export (immutable) */ __webpack_exports__["__asyncGenerator"] = __asyncGenerator;
/* harmony export (immutable) */ __webpack_exports__["__asyncDelegator"] = __asyncDelegator;
/* harmony export (immutable) */ __webpack_exports__["__asyncValues"] = __asyncValues;
/* harmony export (immutable) */ __webpack_exports__["__makeTemplateObject"] = __makeTemplateObject;
/* harmony export (immutable) */ __webpack_exports__["__importStar"] = __importStar;
/* harmony export (immutable) */ __webpack_exports__["__importDefault"] = __importDefault;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { if (o[n]) i[n] = function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; }; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator];
    return m ? m.call(o) : typeof __values === "function" ? __values(o) : o[Symbol.iterator]();
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var dotenv = tslib_1.__importStar(__webpack_require__(27));
var package_json_1 = tslib_1.__importDefault(__webpack_require__(28));
var errors_json_1 = tslib_1.__importDefault(__webpack_require__(29));
var messages_json_1 = tslib_1.__importDefault(__webpack_require__(30));
dotenv.config();
var isTestEnvironment = "development" === 'test';
exports.default = {
    errors: errors_json_1.default,
    messages: messages_json_1.default,
    name: package_json_1.default.name,
    version: package_json_1.default.version,
    googleClientId: process.env.GOOGLE_CLIENT_ID,
    host: process.env.APP_HOST || '127.0.0.1',
    dbConnectionString: process.env.DB_HOST,
    environment: "development" || 'development',
    appUrl: process.env.APP_URL || 'http://localhost:8888',
    port: (isTestEnvironment ? process.env.TEST_APP_PORT : process.env.APP_PORT) ||
        '8000',
    auth: {
        saltRounds: process.env.SALT_ROUNDS || 11,
        accessTokenDuration: process.env.ACCESS_TOKEN_DURATION || '24h',
        refreshTokenDuration: process.env.REFRESH_TOKEN_DURATION || '24h',
        accessTokenSecretKey: process.env.ACCESS_TOKEN_SECRET_KEY || '<ACCESS_TOKEN_SECRET_KEY>',
        refreshTokenSecretKey: process.env.REFRESH_TOKEN_SECRET_KEY || '<REFRESH_TOKEN_SECRET_KEY>'
    },
    logging: {
        dir: process.env.LOGGING_DIR || 'logs',
        level: process.env.LOGGING_LEVEL || 'debug',
        maxSize: process.env.LOGGING_MAX_SIZE || '20m',
        maxFiles: process.env.LOGGING_MAX_FILES || '7d',
        datePattern: process.env.LOGGING_DATE_PATTERN || 'YYYY-MM-DD'
    },
    ERROR_MESSAGE: {
        POST_ID_NOT_FOUND: 'Post id not found',
        TOKEN_REQUIRED: 'Token is required to login',
        INVALID_GOOGLE_CLIENT_ID: 'Invalid google client id',
        INVALID_ACTION: 'You can not perform this action'
    }
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("http-status-codes");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
__webpack_require__(24);
var fs = tslib_1.__importStar(__webpack_require__(25));
var winston = tslib_1.__importStar(__webpack_require__(26));
var config_1 = tslib_1.__importDefault(__webpack_require__(1));
var _a = config_1.default.logging, level = _a.level, maxSize = _a.maxSize, maxFiles = _a.maxFiles, datePattern = _a.datePattern, logDir = _a.dir;
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}
var transports = [
    new winston.transports.DailyRotateFile({
        maxSize: maxSize,
        maxFiles: maxFiles,
        datePattern: datePattern,
        zippedArchive: true,
        filename: logDir + "/" + level + "-%DATE%.log"
    })
];
if (true) {
    transports.push(new winston.transports.Console({
        level: level,
        colorize: true,
        timestamp: function () { return new Date().toISOString(); }
    }));
}
var logger = new winston.Logger({ transports: transports });
exports.default = logger;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var HttpStatus = tslib_1.__importStar(__webpack_require__(2));
var Error_1 = tslib_1.__importDefault(__webpack_require__(11));
var UnauthorizedError = (function (_super) {
    tslib_1.__extends(UnauthorizedError, _super);
    function UnauthorizedError(message) {
        var _this = _super.call(this, message, HttpStatus.UNAUTHORIZED) || this;
        _this.message = message;
        return _this;
    }
    return UnauthorizedError;
}(Error_1.default));
exports.default = UnauthorizedError;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var HttpStatus = tslib_1.__importStar(__webpack_require__(2));
var Error_1 = tslib_1.__importDefault(__webpack_require__(11));
var BadRequestError = (function (_super) {
    tslib_1.__extends(BadRequestError, _super);
    function BadRequestError(message) {
        var _this = _super.call(this, message, HttpStatus.BAD_REQUEST) || this;
        _this.message = message;
        return _this;
    }
    return BadRequestError;
}(Error_1.default));
exports.default = BadRequestError;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var logger_1 = tslib_1.__importDefault(__webpack_require__(4));
var config_1 = tslib_1.__importDefault(__webpack_require__(1));
var ErrorType_1 = tslib_1.__importDefault(__webpack_require__(10));
var BadRequestError_1 = tslib_1.__importDefault(__webpack_require__(6));
var UnauthorizedError_1 = tslib_1.__importDefault(__webpack_require__(5));
var jwt = tslib_1.__importStar(__webpack_require__(9));
var errors = config_1.default.errors;
var tokenErrorMessageMap = (_a = {},
    _a[ErrorType_1.default.INVALID] = errors.invalidToken,
    _a[ErrorType_1.default.EXPIRED] = errors.accessTokenExpired,
    _a);
function authenticate(req, res, next) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var response, err_1, tokenErrorMessage;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    res.locals.accessToken = String(req.headers.authorization).replace('Bearer ', '');
                    if (!req.headers.authorization || !res.locals.accessToken) {
                        throw new BadRequestError_1.default(errors.noToken);
                    }
                    logger_1.default.debug('JWT: Verifying token - ', req.headers.authorization, res.locals.accessToken);
                    return [4, jwt.verifyAccessToken(res.locals.accessToken)];
                case 1:
                    response = _a.sent();
                    res.locals.loggedInPayload = response;
                    logger_1.default.debug('JWT: Authentication verified - ', JSON.stringify(res.locals.loggedInPayload, null, 2));
                    next();
                    return [3, 3];
                case 2:
                    err_1 = _a.sent();
                    tokenErrorMessage = tokenErrorMessageMap[err_1.name];
                    logger_1.default.error('JWT: Authentication failed -', err_1.message);
                    if (tokenErrorMessage) {
                        logger_1.default.error('JWT: Token error -', tokenErrorMessage);
                        next(new UnauthorizedError_1.default(tokenErrorMessage));
                    }
                    else {
                        next(err_1);
                    }
                    return [3, 3];
                case 3: return [2];
            }
        });
    });
}
exports.default = authenticate;
var _a;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var jsonwebtoken_1 = tslib_1.__importDefault(__webpack_require__(31));
var logger_1 = tslib_1.__importDefault(__webpack_require__(4));
var config_1 = tslib_1.__importDefault(__webpack_require__(1));
var _a = config_1.default.auth, accessTokenDuration = _a.accessTokenDuration, accessTokenSecretKey = _a.accessTokenSecretKey, refreshTokenDuration = _a.refreshTokenDuration, refreshTokenSecretKey = _a.refreshTokenSecretKey;
function generateAccessToken(data) {
    logger_1.default.debug('JWT: Generating access token - ', JSON.stringify({ data: data, expiresIn: accessTokenDuration }, null, 2));
    return jsonwebtoken_1.default.sign(data, accessTokenSecretKey, { expiresIn: accessTokenDuration });
}
exports.generateAccessToken = generateAccessToken;
function generateRefreshToken(data) {
    logger_1.default.debug('JWT: Generating refresh token -', JSON.stringify({ data: data, expiresIn: refreshTokenDuration }, null, 2));
    return jsonwebtoken_1.default.sign(data, refreshTokenSecretKey, { expiresIn: refreshTokenDuration });
}
exports.generateRefreshToken = generateRefreshToken;
function verifyAccessToken(token) {
    return jsonwebtoken_1.default.verify(token, accessTokenSecretKey);
}
exports.verifyAccessToken = verifyAccessToken;
function verifyRefreshToken(token) {
    return jsonwebtoken_1.default.verify(token, refreshTokenSecretKey);
}
exports.verifyRefreshToken = verifyRefreshToken;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ErrorType;
(function (ErrorType) {
    ErrorType["INVALID"] = "JsonWebTokenError";
    ErrorType["EXPIRED"] = "TokenExpiredError";
    ErrorType["NO_ROWS_UPDATED_ERROR"] = "No Rows Updated";
})(ErrorType || (ErrorType = {}));
exports.default = ErrorType;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Error = (function () {
    function Error(message, statusCode) {
        this.isCustom = true;
        this.message = message;
        this.statusCode = statusCode;
    }
    return Error;
}());
exports.default = Error;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var UserDao = tslib_1.__importStar(__webpack_require__(33));
function fetchAll(searchKey) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var users;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, UserDao.fetchAll(searchKey)];
                case 1:
                    users = _a.sent();
                    return [2, users];
            }
        });
    });
}
exports.fetchAll = fetchAll;
function create(user) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var users;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, UserDao.create(user)];
                case 1:
                    users = _a.sent();
                    return [2, users];
            }
        });
    });
}
exports.create = create;
function update(id, user) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var updateUser;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, UserDao.update(id, user)];
                case 1:
                    updateUser = _a.sent();
                    return [2, updateUser];
            }
        });
    });
}
exports.update = update;
function getById(id) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var updateUser;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, UserDao.getById(id)];
                case 1:
                    updateUser = _a.sent();
                    return [2, updateUser];
            }
        });
    });
}
exports.getById = getById;
function findByGoogleId(id) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var updateUser;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, UserDao.findByGoogleId(id)];
                case 1:
                    updateUser = _a.sent();
                    return [2, updateUser];
            }
        });
    });
}
exports.findByGoogleId = findByGoogleId;
function updateRefreshToken(user, refreshToken) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var updateUser;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, UserDao.updateRefreshToken(user, refreshToken)];
                case 1:
                    updateUser = _a.sent();
                    return [2, updateUser];
            }
        });
    });
}
exports.updateRefreshToken = updateRefreshToken;
function findUserDetail(id) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var updateUser;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, UserDao.findUserDetail(id)];
                case 1:
                    updateUser = _a.sent();
                    return [2, updateUser];
            }
        });
    });
}
exports.findUserDetail = findUserDetail;
function removeSession(user, token) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var index;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    index = user.refreshToken.indexOf(token);
                    if (!(index > -1)) return [3, 2];
                    user.refreshToken = user.refreshToken.splice(index, 1);
                    return [4, UserDao.update(user._id, user)];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [2, []];
            }
        });
    });
}
exports.removeSession = removeSession;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var config_1 = tslib_1.__importDefault(__webpack_require__(1));
var google_auth_library_1 = __webpack_require__(35);
var UnauthorizedError_1 = tslib_1.__importDefault(__webpack_require__(5));
function verifyGoogleAccount(token) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var client;
        return tslib_1.__generator(this, function (_a) {
            client = new google_auth_library_1.OAuth2Client(config_1.default.googleClientId, '', '');
            return [2, new Promise(function (resolve, reject) {
                    if (!token) {
                        throw new Error('No token');
                    }
                    client
                        .verifyIdToken({ idToken: token, audience: config_1.default.googleClientId })
                        .then(function (login) {
                        var payload = login.getPayload();
                        if (payload['aud'] === config_1.default.googleClientId) {
                            resolve({
                                userId: payload.sub,
                                email: payload.email,
                                name: payload.name,
                                imageUrl: payload.picture
                            });
                        }
                        else {
                            throw new UnauthorizedError_1.default(config_1.default.ERROR_MESSAGE.INVALID_GOOGLE_CLIENT_ID);
                        }
                    })
                        .catch(function (err) { return reject(err); });
                })];
        });
    });
}
exports.verifyGoogleAccount = verifyGoogleAccount;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var config_1 = tslib_1.__importDefault(__webpack_require__(1));
var UnauthorizedError_1 = tslib_1.__importDefault(__webpack_require__(5));
var CommentDao = tslib_1.__importStar(__webpack_require__(44));
function create(comment, postId, userId) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var newComment;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, CommentDao.create(comment, postId, userId)];
                case 1:
                    newComment = _a.sent();
                    return [2, newComment];
            }
        });
    });
}
exports.create = create;
function findByPostId(postId) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var newComment;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, CommentDao.findByPostId(postId)];
                case 1:
                    newComment = _a.sent();
                    return [2, newComment];
            }
        });
    });
}
exports.findByPostId = findByPostId;
function createSubComment(subComment, commentId, userId) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var newComment;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, CommentDao.createSubComment(subComment, commentId, userId)];
                case 1:
                    newComment = _a.sent();
                    return [2, newComment];
            }
        });
    });
}
exports.createSubComment = createSubComment;
function updateSubComment(subComment, commentId, subCommentId, currentUserId) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var newComment;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, CommentDao.updateSubComment(subComment, commentId, subCommentId, currentUserId)];
                case 1:
                    newComment = _a.sent();
                    return [2, newComment];
            }
        });
    });
}
exports.updateSubComment = updateSubComment;
function update(id, comment, currentUserId) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var fetchComment, updateComment;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, CommentDao.getById(id)];
                case 1:
                    fetchComment = _a.sent();
                    if (currentUserId !== fetchComment.users.toString()) {
                        throw new UnauthorizedError_1.default(config_1.default.ERROR_MESSAGE.INVALID_ACTION);
                    }
                    return [4, CommentDao.update(id, {
                            description: comment.description
                        })];
                case 2:
                    updateComment = _a.sent();
                    return [2, updateComment];
            }
        });
    });
}
exports.update = update;
function removeSubComment(commentId, userId) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var newComment;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, CommentDao.removeSubComment(commentId, userId)];
                case 1:
                    newComment = _a.sent();
                    return [2, newComment];
            }
        });
    });
}
exports.removeSubComment = removeSubComment;
function deleteById(id) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var posts;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, CommentDao.deleteById(id)];
                case 1:
                    posts = _a.sent();
                    return [2, posts];
            }
        });
    });
}
exports.deleteById = deleteById;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var HttpStatus = tslib_1.__importStar(__webpack_require__(2));
var commentService = tslib_1.__importStar(__webpack_require__(14));
var BadRequestError_1 = tslib_1.__importDefault(__webpack_require__(6));
var config_1 = tslib_1.__importDefault(__webpack_require__(1));
function create(req, res, next) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var commentPayload, response, err_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    commentPayload = req.body;
                    if (!req.params.postId) {
                        throw new BadRequestError_1.default(config_1.default.ERROR_MESSAGE.POST_ID_NOT_FOUND);
                    }
                    return [4, commentService.create(commentPayload, req.params.postId, res.locals.loggedInPayload.id)];
                case 1:
                    response = _a.sent();
                    res.status(HttpStatus.OK).json({
                        code: HttpStatus.OK,
                        data: response,
                        message: "created"
                    });
                    return [3, 3];
                case 2:
                    err_1 = _a.sent();
                    next(err_1);
                    return [3, 3];
                case 3: return [2];
            }
        });
    });
}
exports.create = create;
function editSubComment(req, res, next) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var subCommentPayload, response, err_2;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    subCommentPayload = req.body;
                    return [4, commentService.updateSubComment(subCommentPayload, req.params.id, req.params.subCommentId, res.locals.loggedInPayload.id)];
                case 1:
                    response = _a.sent();
                    res.status(HttpStatus.OK).json({
                        code: HttpStatus.OK,
                        data: response,
                        message: "created"
                    });
                    return [3, 3];
                case 2:
                    err_2 = _a.sent();
                    next(err_2);
                    return [3, 3];
                case 3: return [2];
            }
        });
    });
}
exports.editSubComment = editSubComment;
function createSubComment(req, res, next) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var subCommentPayload, response, err_3;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    subCommentPayload = req.body;
                    return [4, commentService.createSubComment(subCommentPayload, req.params.id, res.locals.loggedInPayload.id)];
                case 1:
                    response = _a.sent();
                    res.status(HttpStatus.OK).json({
                        code: HttpStatus.OK,
                        data: response,
                        message: "created"
                    });
                    return [3, 3];
                case 2:
                    err_3 = _a.sent();
                    next(err_3);
                    return [3, 3];
                case 3: return [2];
            }
        });
    });
}
exports.createSubComment = createSubComment;
function deleteById(req, res, next) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var response, err_4;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4, commentService.deleteById(req.params.id)];
                case 1:
                    response = _a.sent();
                    res.status(HttpStatus.OK).json({
                        code: HttpStatus.OK,
                        data: response,
                        message: "Deleted"
                    });
                    return [3, 3];
                case 2:
                    err_4 = _a.sent();
                    next(err_4);
                    return [3, 3];
                case 3: return [2];
            }
        });
    });
}
exports.deleteById = deleteById;
function update(req, res, next) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var commentPayload, response, err_5;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    commentPayload = req.body;
                    return [4, commentService.update(req.params.id, commentPayload, res.locals.loggedInPayload.id)];
                case 1:
                    response = _a.sent();
                    res.status(HttpStatus.OK).json({
                        code: HttpStatus.OK,
                        data: response,
                        message: "abc"
                    });
                    return [3, 3];
                case 2:
                    err_5 = _a.sent();
                    next(err_5);
                    return [3, 3];
                case 3: return [2];
            }
        });
    });
}
exports.update = update;
function removeSubComment(req, res, next) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var response, err_6;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4, commentService.removeSubComment(req.params.id, req.params.subCommentId)];
                case 1:
                    response = _a.sent();
                    res.status(HttpStatus.OK).json({
                        code: HttpStatus.OK,
                        data: response,
                        message: "Deleted"
                    });
                    return [3, 3];
                case 2:
                    err_6 = _a.sent();
                    next(err_6);
                    return [3, 3];
                case 3: return [2];
            }
        });
    });
}
exports.removeSubComment = removeSubComment;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var app_1 = tslib_1.__importDefault(__webpack_require__(17));
var config_1 = tslib_1.__importDefault(__webpack_require__(1));
var logger_1 = tslib_1.__importDefault(__webpack_require__(4));
var nodeErrorHandler_1 = tslib_1.__importDefault(__webpack_require__(49));
var mongoose_1 = tslib_1.__importDefault(__webpack_require__(7));
var port = config_1.default.port, host = config_1.default.host, dbConnectionString = config_1.default.dbConnectionString;
var options = { server: { socketOptions: { keepAlive: 1 } } };
mongoose_1.default.connect(dbConnectionString, options);
mongoose_1.default.connection.on("connected", function (err) {
    console.log("Connected to DB using chain: " + dbConnectionString);
});
mongoose_1.default.connection.on("error", function (err) {
    console.log(err);
});
app_1.default
    .listen(+port, host, function () {
    logger_1.default.info("Server started at http://" + host + ":" + port);
})
    .on("error", nodeErrorHandler_1.default);


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var cors_1 = tslib_1.__importDefault(__webpack_require__(18));
var helmet_1 = tslib_1.__importDefault(__webpack_require__(19));
var morgan_1 = tslib_1.__importDefault(__webpack_require__(20));
var express_1 = tslib_1.__importDefault(__webpack_require__(3));
var body_parser_1 = tslib_1.__importDefault(__webpack_require__(21));
var routes_1 = tslib_1.__importDefault(__webpack_require__(22));
var config_1 = tslib_1.__importDefault(__webpack_require__(1));
var notFoundHandler_1 = tslib_1.__importDefault(__webpack_require__(47));
var genericErrorHandler_1 = tslib_1.__importDefault(__webpack_require__(48));
var name = config_1.default.name, version = config_1.default.version;
var app = express_1.default();
app.locals.name = name;
app.locals.version = version;
app.use(cors_1.default());
app.use(helmet_1.default());
app.use(morgan_1.default("dev"));
app.use(body_parser_1.default.json({
    limit: "50mb"
}));
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use("/api", routes_1.default);
app.use(genericErrorHandler_1.default);
app.use(notFoundHandler_1.default);
exports.default = app;


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var express_1 = __webpack_require__(3);
var user_1 = tslib_1.__importDefault(__webpack_require__(23));
var auth_1 = tslib_1.__importDefault(__webpack_require__(36));
var post_1 = tslib_1.__importDefault(__webpack_require__(39));
var comment_1 = tslib_1.__importDefault(__webpack_require__(46));
var router = express_1.Router();
router.get('/', function (req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    res.json({
        name: req.app.locals.name,
        version: req.app.locals.version
    });
});
router.use('/auth', auth_1.default);
router.use('/users', user_1.default);
router.use('/posts', post_1.default);
router.use('/comments', comment_1.default);
exports.default = router;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var express_1 = __webpack_require__(3);
var authenticate_1 = tslib_1.__importDefault(__webpack_require__(8));
var userController = tslib_1.__importStar(__webpack_require__(32));
var router = express_1.Router();
router.get('/', authenticate_1.default, userController.getAll);
router.post('/signup', userController.create);
router.put('/', authenticate_1.default, userController.update);
router.get('/:id', userController.getById);
router.get('/profile', authenticate_1.default, userController.getUserDetail);
exports.default = router;


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("winston-daily-rotate-file");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("winston");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = {"name":"typescript-api-starter","version":"0.1.0","description":"Starter for Node.js express API with Typescript","main":"index.js","repository":{"type":"git","url":"git@github.com:cham11ng/typescript-api-starter.git"},"engines":{"node":">= 8.9.4","npm":">= 5.6.0"},"scripts":{"start:dev":"backpack","start":"node build/main.js","clean":"rimraf build","prepush":"yarn build","precommit":"lint-staged","transpile":"backpack build","build":"run-s clean lint:fix transpile","test":"jest --config jest.json","lint":"tslint src/**/*.{ts,js} test/**/*.{ts,js}","lint:fix":"tslint --fix src/**/*.{ts,js} test/**/*.{ts,js}","prettify":"prettier --single-quote --parser typescript --print-width 120 --write scripts/*.ts src/**/*.{ts,js} test/**/*.{ts,js}"},"lint-staged":{"linters":{"*.{ts, js}":["tslint --fix src/**/*.{ts,js} test/**/*.{ts,js}","prettier --single-quote --parser typescript --print-width 120 --write scripts/*.ts src/**/*.{ts,js} test/**/*.{ts,js}","git add"]}},"private":true,"license":"MIT","keywords":["api","es6","node","express","javascript","typescript"],"dependencies":{"bcrypt":"^2.0.1","body-parser":"^1.18.3","chalk":"^2.3.0","cors":"^2.8.4","dotenv":"^5.0.0","express":"^4.16.2","google-auth-library":"^3.1.2","helmet":"^3.10.0","http-status-codes":"^1.3.0","joi":"^13.1.2","jsonwebtoken":"^8.2.1","mongoose":"^5.4.22","morgan":">=1.9.1","winston":"^2.4.0","winston-daily-rotate-file":"^3.1.3"},"devDependencies":{"@types/mongoose":"^5.3.24","@types/winston":"^2.3.7","@types/bcrypt":"^2.0.0","@types/cors":"^2.8.3","@types/dotenv":"^4.0.2","@types/helmet":"^0.0.37","@types/express":"^4.11.1","@types/jest":"^22.2.3","@types/joi":"^13.0.5","@types/jsonwebtoken":"^7.2.7","@types/morgan":"^1.7.35","backpack-core":"^0.7.0","fork-ts-checker-webpack-plugin":"^0.4.1","husky":"^0.14.3","jest":"^22.4.3","lint-staged":"^7.0.5","npm-run-all":"^4.1.2","prettier":"^1.10.2","rimraf":"^2.6.2","ts-jest":"^22.4.5","ts-loader":"^3.5.0","ts-node":"^6.0.1","tslint":"^5.9.1","tslint-config-prettier":"^1.7.0","tslint-consistent-codestyle":"^1.11.1","typescript":"^2.8.3"}}

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = {"portInUse":"Port is already in use.","invalidToken":"Your token is invalid.","invalidCredentials":"Invalid Credentials","accessTokenExpired":"Access token expired.","noToken":"No token in authorization header.","sessionNotMaintained":"Session not maintained.","refreshTokenExpired":"Session has been expired.","portRequirePrivilege":"Port requires elevated privileges.","unAuthorized":"You are not authorized to perform this action."}

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = {"auth":{"loginSuccess":"Login successful.","logoutSuccess":"Logout successful.","invalidCredentials":"Invalid Credentials","accessTokenRefreshed":"Access token refreshed successfully."},"users":{"insert":"User inserted successfully.","fetch":"User detail fetched successfully.","delete":"User removed successfully.","fetchAll":"List of users."}}

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var HttpStatus = tslib_1.__importStar(__webpack_require__(2));
var config_1 = tslib_1.__importDefault(__webpack_require__(1));
var userService = tslib_1.__importStar(__webpack_require__(12));
var authService = tslib_1.__importStar(__webpack_require__(13));
var messages = config_1.default.messages;
function getAll(req, res, next) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var searchKey, response, err_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    searchKey = req.query.searchKey || '';
                    return [4, userService.fetchAll(searchKey)];
                case 1:
                    response = _a.sent();
                    res.status(HttpStatus.OK).json({
                        code: HttpStatus.OK,
                        data: response,
                        message: messages.users.fetchAll
                    });
                    return [3, 3];
                case 2:
                    err_1 = _a.sent();
                    next(err_1);
                    return [3, 3];
                case 3: return [2];
            }
        });
    });
}
exports.getAll = getAll;
function create(req, res, next) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var userPayload, payload, user, newUser, response, err_2;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    userPayload = req.body;
                    return [4, authService.verifyGoogleAccount(userPayload.token)];
                case 1:
                    payload = _a.sent();
                    return [4, userService.findByGoogleId(payload.userId)];
                case 2:
                    user = _a.sent();
                    if (user.length) {
                        throw new Error('User already existed');
                    }
                    newUser = {
                        name: payload.name,
                        email: payload.email,
                        userId: payload.userId,
                        image: payload.imageUrl
                    };
                    return [4, userService.create(newUser)];
                case 3:
                    response = _a.sent();
                    console.log('created user ', response);
                    res.status(HttpStatus.OK).json({
                        code: HttpStatus.OK,
                        data: response,
                        message: messages.users.insert
                    });
                    return [3, 5];
                case 4:
                    err_2 = _a.sent();
                    console.log('TODO: No user found', err_2);
                    next(err_2);
                    return [3, 5];
                case 5: return [2];
            }
        });
    });
}
exports.create = create;
function update(req, res, next) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var userPayload, response, err_3;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    userPayload = req.body;
                    return [4, userService.update(res.locals.loggedInPayload.id, userPayload)];
                case 1:
                    response = _a.sent();
                    res.status(HttpStatus.OK).json({
                        code: HttpStatus.OK,
                        data: response,
                        message: messages.users.insert
                    });
                    return [3, 3];
                case 2:
                    err_3 = _a.sent();
                    next(err_3);
                    return [3, 3];
                case 3: return [2];
            }
        });
    });
}
exports.update = update;
function getById(req, res, next) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var response, err_4;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4, userService.getById(req.params.id)];
                case 1:
                    response = _a.sent();
                    res.status(HttpStatus.OK).json({
                        code: HttpStatus.OK,
                        data: response,
                        message: messages.users.insert
                    });
                    return [3, 3];
                case 2:
                    err_4 = _a.sent();
                    next(err_4);
                    return [3, 3];
                case 3: return [2];
            }
        });
    });
}
exports.getById = getById;
function getUserDetail(req, res, next) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var response, err_5;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4, userService.getById(res.locals.loggedInPayload.id)];
                case 1:
                    response = _a.sent();
                    res.status(HttpStatus.OK).json({
                        code: HttpStatus.OK,
                        data: response,
                        message: messages.users.insert
                    });
                    return [3, 3];
                case 2:
                    err_5 = _a.sent();
                    next(err_5);
                    return [3, 3];
                case 3: return [2];
            }
        });
    });
}
exports.getUserDetail = getUserDetail;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var userModel_1 = tslib_1.__importDefault(__webpack_require__(34));
function create(user) {
    return new Promise(function (resolve, reject) {
        var UserModel = new userModel_1.default(user);
        UserModel.save()
            .then(function (user) { return resolve(user); })
            .catch(function (err) { return reject(err); });
    });
}
exports.create = create;
function fetchAll(searchKey) {
    return new Promise(function (resolve, reject) {
        var option = {};
        if (searchKey) {
            option.name = searchKey;
        }
        userModel_1.default.find(option)
            .then(function (user) { return resolve(user); })
            .catch(function (err) { return reject(err); });
    });
}
exports.fetchAll = fetchAll;
function update(id, user) {
    return new Promise(function (resolve, reject) {
        userModel_1.default.findOneAndUpdate({ _id: id }, user)
            .then(function (user) { return resolve(user); })
            .catch(function (err) { return reject(err); });
    });
}
exports.update = update;
function getById(id) {
    return new Promise(function (resolve, reject) {
        userModel_1.default.findById(id).select('name email image')
            .then(function (user) { return resolve(user); })
            .catch(function (err) { return reject(err); });
    });
}
exports.getById = getById;
function findByGoogleId(id) {
    return new Promise(function (resolve, reject) {
        userModel_1.default.find({ userId: id })
            .then(function (user) { return resolve(user); })
            .catch(function (err) { return reject(err); });
    });
}
exports.findByGoogleId = findByGoogleId;
function updateRefreshToken(user, refreshToken) {
    return new Promise(function (resolve, reject) {
        user[0].refreshToken.push(refreshToken);
        userModel_1.default.findOneAndUpdate({ _id: user[0]._id }, user[0])
            .then(function (user) { return resolve(user); })
            .catch(function (err) { return reject(err); });
    });
}
exports.updateRefreshToken = updateRefreshToken;
function findUserDetail(id) {
    return new Promise(function (resolve, reject) {
        userModel_1.default.findById(id)
            .then(function (user) { return resolve(user); })
            .catch(function (err) { return reject(err); });
    });
}
exports.findUserDetail = findUserDetail;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var mongoose_1 = tslib_1.__importDefault(__webpack_require__(7));
var Schema = mongoose_1.default.Schema;
exports.Users = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    userId: {
        type: String
    },
    image: {
        type: String
    },
    refreshToken: {
        type: Array
    }
});
module.exports = exports = mongoose_1.default.model('users', exports.Users);


/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("google-auth-library");

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var express_1 = __webpack_require__(3);
var authController = tslib_1.__importStar(__webpack_require__(37));
var validateRefreshToken_1 = tslib_1.__importDefault(__webpack_require__(38));
var router = express_1.Router();
router.post('/login', authController.login);
router.post('/logout', validateRefreshToken_1.default, authController.logout);
router.post('/refresh-token', validateRefreshToken_1.default, authController.getAccesstoken);
exports.default = router;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var config_1 = tslib_1.__importDefault(__webpack_require__(1));
var BadRequestError_1 = tslib_1.__importDefault(__webpack_require__(6));
var utilService = tslib_1.__importStar(__webpack_require__(9));
var HttpStatus = tslib_1.__importStar(__webpack_require__(2));
var authService = tslib_1.__importStar(__webpack_require__(13));
var userService = tslib_1.__importStar(__webpack_require__(12));
function login(req, res, next) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var loginPayload, payload, user, newUser, tokenData, accessToken, refreshToken, response, err_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    if (!req.body.token) {
                        throw new BadRequestError_1.default(config_1.default.ERROR_MESSAGE.TOKEN_REQUIRED);
                    }
                    loginPayload = req.body;
                    return [4, authService.verifyGoogleAccount(loginPayload.token)];
                case 1:
                    payload = _a.sent();
                    return [4, userService.findByGoogleId(payload.userId)];
                case 2:
                    user = _a.sent();
                    if (!!user.length) return [3, 4];
                    newUser = {
                        name: payload.name,
                        email: payload.email,
                        userId: payload.userId,
                        image: payload.imageUrl
                    };
                    return [4, userService.create(newUser)];
                case 3:
                    user = _a.sent();
                    user = [user];
                    _a.label = 4;
                case 4:
                    tokenData = { id: user[0]._id };
                    accessToken = utilService.generateAccessToken(tokenData);
                    refreshToken = utilService.generateRefreshToken(tokenData);
                    response = {
                        accessToken: accessToken,
                        refreshToken: refreshToken,
                        name: user[0].name,
                        email: user[0].email,
                        image: user[0].image,
                        id: user[0]._id
                    };
                    res.status(HttpStatus.OK).json({
                        code: HttpStatus.OK,
                        data: response,
                        message: 'created'
                    });
                    return [3, 6];
                case 5:
                    err_1 = _a.sent();
                    console.log('TODO: No user found', err_1);
                    next(err_1);
                    return [3, 6];
                case 6: return [2];
            }
        });
    });
}
exports.login = login;
function getAccesstoken(req, res, next) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var tokenData, accessToken;
        return tslib_1.__generator(this, function (_a) {
            try {
                tokenData = { id: res.locals.loggedInPayload.id };
                accessToken = utilService.generateAccessToken(tokenData);
                res.status(HttpStatus.OK).json({
                    accessToken: accessToken,
                    code: HttpStatus.OK,
                    message: 'genereated'
                });
            }
            catch (error) {
                next(error);
            }
            return [2];
        });
    });
}
exports.getAccesstoken = getAccesstoken;
function logout(req, res, next) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var token, user, response, error_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    token = req.body.refreshToken;
                    return [4, userService.findUserDetail(res.locals.loggedInPayload.id)];
                case 1:
                    user = _a.sent();
                    if (!user) return [3, 3];
                    return [4, userService.removeSession(user, token)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    response = [];
                    res.status(HttpStatus.OK).json({
                        response: response,
                        code: HttpStatus.OK,
                        message: 'genereated'
                    });
                    return [3, 5];
                case 4:
                    error_1 = _a.sent();
                    next(error_1);
                    return [3, 5];
                case 5: return [2];
            }
        });
    });
}
exports.logout = logout;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var jwt = tslib_1.__importStar(__webpack_require__(9));
var logger_1 = tslib_1.__importDefault(__webpack_require__(4));
var config_1 = tslib_1.__importDefault(__webpack_require__(1));
var ErrorType_1 = tslib_1.__importDefault(__webpack_require__(10));
var BadRequestError_1 = tslib_1.__importDefault(__webpack_require__(6));
var UnauthorizedError_1 = tslib_1.__importDefault(__webpack_require__(5));
var errors = config_1.default.errors;
var tokenErrorMessageMap = (_a = {},
    _a[ErrorType_1.default.INVALID] = errors.invalidToken,
    _a[ErrorType_1.default.EXPIRED] = errors.refreshTokenExpired,
    _a);
function validateRefreshToken(req, res, next) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var response, tokenErrorMessage;
        return tslib_1.__generator(this, function (_a) {
            try {
                res.locals.refreshToken = String(req.headers.authorization).replace('Bearer ', '');
                if (!req.headers.authorization || !res.locals.refreshToken) {
                    throw new BadRequestError_1.default(errors.noToken);
                }
                logger_1.default.debug('JWT: Verifying token - ', res.locals.refreshToken);
                response = jwt.verifyRefreshToken(res.locals.refreshToken);
                res.locals.loggedInPayload = response;
                logger_1.default.debug('JWT: Authentication verified - ', JSON.stringify(res.locals.loggedInPayload, null, 2));
                next();
            }
            catch (err) {
                tokenErrorMessage = tokenErrorMessageMap[err.name];
                logger_1.default.error('JWT: Authentication failed -', err.message);
                if (tokenErrorMessage) {
                    logger_1.default.error('JWT: Token error -', tokenErrorMessage);
                    next(new UnauthorizedError_1.default(tokenErrorMessage));
                }
                else {
                    next(err);
                }
            }
            return [2];
        });
    });
}
exports.default = validateRefreshToken;
var _a;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var express_1 = __webpack_require__(3);
var authenticate_1 = tslib_1.__importDefault(__webpack_require__(8));
var postController = tslib_1.__importStar(__webpack_require__(40));
var commentController = tslib_1.__importStar(__webpack_require__(15));
var router = express_1.Router();
router.get("/", postController.getAll);
router.get("/:id", postController.getById);
router.post("/", authenticate_1.default, postController.create);
router.post("/:postId/comments", authenticate_1.default, commentController.create);
router.delete("/:id", authenticate_1.default, postController.deletePostById);
router.put("/:id", authenticate_1.default, postController.update);
exports.default = router;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var HttpStatus = tslib_1.__importStar(__webpack_require__(2));
var postService = tslib_1.__importStar(__webpack_require__(41));
var commentService = tslib_1.__importStar(__webpack_require__(14));
function create(req, res, next) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var postPayload, response, err_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    postPayload = req.body;
                    return [4, postService.create(res.locals.loggedInPayload.id, postPayload)];
                case 1:
                    response = _a.sent();
                    res.status(HttpStatus.OK).json({
                        code: HttpStatus.OK,
                        data: response,
                        message: 'created'
                    });
                    return [3, 3];
                case 2:
                    err_1 = _a.sent();
                    next(err_1);
                    return [3, 3];
                case 3: return [2];
            }
        });
    });
}
exports.create = create;
function getById(req, res, next) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var post, comments, response, err_2;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4, postService.getById(req.params.id)];
                case 1:
                    post = _a.sent();
                    return [4, commentService.findByPostId(req.params.id)];
                case 2:
                    comments = _a.sent();
                    response = {
                        comments: comments,
                        id: post._id,
                        users: post.users,
                        title: post.title,
                        description: post.description
                    };
                    res.status(HttpStatus.OK).json({
                        code: HttpStatus.OK,
                        data: response,
                        message: 'data'
                    });
                    return [3, 4];
                case 3:
                    err_2 = _a.sent();
                    next(err_2);
                    return [3, 4];
                case 4: return [2];
            }
        });
    });
}
exports.getById = getById;
function getAll(req, res, next) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var searchKey, response, err_3;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    searchKey = req.query.searchKey || '';
                    return [4, postService.fetchAll(searchKey)];
                case 1:
                    response = _a.sent();
                    res.status(HttpStatus.OK).json({
                        code: HttpStatus.OK,
                        data: response,
                        message: 'All post'
                    });
                    return [3, 3];
                case 2:
                    err_3 = _a.sent();
                    next(err_3);
                    return [3, 3];
                case 3: return [2];
            }
        });
    });
}
exports.getAll = getAll;
function deletePostById(req, res, next) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var response, err_4;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4, postService.deleteById(req.params.id, res.locals.loggedInPayload.id)];
                case 1:
                    response = _a.sent();
                    res.status(HttpStatus.OK).json({
                        code: HttpStatus.OK,
                        data: response,
                        message: 'Deleted'
                    });
                    return [3, 3];
                case 2:
                    err_4 = _a.sent();
                    next(err_4);
                    return [3, 3];
                case 3: return [2];
            }
        });
    });
}
exports.deletePostById = deletePostById;
function update(req, res, next) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var postPayload, response, err_5;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    postPayload = req.body;
                    return [4, postService.updateById(req.params.id, postPayload)];
                case 1:
                    _a.sent();
                    return [4, postService.getById(req.params.id)];
                case 2:
                    response = _a.sent();
                    res.status(HttpStatus.OK).json({
                        code: HttpStatus.OK,
                        data: response,
                        message: 'Updated'
                    });
                    return [3, 4];
                case 3:
                    err_5 = _a.sent();
                    next(err_5);
                    return [3, 4];
                case 4: return [2];
            }
        });
    });
}
exports.update = update;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var PostDao = tslib_1.__importStar(__webpack_require__(42));
var UnauthorizedError_1 = tslib_1.__importDefault(__webpack_require__(5));
var config_1 = tslib_1.__importDefault(__webpack_require__(1));
function create(userId, post) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var posts;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    post.users = {
                        _id: userId
                    };
                    return [4, PostDao.create(post)];
                case 1:
                    posts = _a.sent();
                    return [2, posts];
            }
        });
    });
}
exports.create = create;
function getById(id) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var updateUser;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, PostDao.getById(id)];
                case 1:
                    updateUser = _a.sent();
                    return [2, updateUser];
            }
        });
    });
}
exports.getById = getById;
function fetchAll(searchKey) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var users;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, PostDao.fetchAll(searchKey)];
                case 1:
                    users = _a.sent();
                    return [2, users];
            }
        });
    });
}
exports.fetchAll = fetchAll;
function deleteById(id, currentUserId) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var currentPost;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, PostDao.getById(id)];
                case 1:
                    currentPost = _a.sent();
                    if (currentUserId != currentPost.users._id) {
                        throw new UnauthorizedError_1.default(config_1.default.ERROR_MESSAGE.INVALID_ACTION);
                    }
                    return [4, PostDao.deleteById(id)];
                case 2:
                    _a.sent();
                    return [2, []];
            }
        });
    });
}
exports.deleteById = deleteById;
function updateById(id, post) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var updateUser;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, PostDao.updateById(id, post)];
                case 1:
                    updateUser = _a.sent();
                    return [2, updateUser];
            }
        });
    });
}
exports.updateById = updateById;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var postModel_1 = tslib_1.__importDefault(__webpack_require__(43));
function create(post) {
    return new Promise(function (resolve, reject) {
        var PostModel = new postModel_1.default(post);
        PostModel.save()
            .then(function (post) { return resolve(post); })
            .catch(function (err) { return reject(err); });
    });
}
exports.create = create;
function getById(id) {
    return new Promise(function (resolve, reject) {
        postModel_1.default.findById(id)
            .populate("users", "name")
            .then(function (user) { return resolve(user); })
            .catch(function (err) { return reject(err); });
    });
}
exports.getById = getById;
function fetchAll(searchKey) {
    return new Promise(function (resolve, reject) {
        var searchOption = {};
        if (searchKey) {
            searchOption.title = new RegExp(searchKey, 'i');
        }
        postModel_1.default.find(searchOption)
            .populate("users", "name")
            .then(function (user) { return resolve(user); })
            .catch(function (err) { return reject(err); });
    });
}
exports.fetchAll = fetchAll;
function deleteById(id) {
    return new Promise(function (resolve, reject) {
        postModel_1.default.deleteOne({ _id: id })
            .then(function (user) { return resolve(user); })
            .catch(function (err) { return reject(err); });
    });
}
exports.deleteById = deleteById;
function updateById(id, data) {
    return new Promise(function (resolve, reject) {
        postModel_1.default.findOneAndUpdate({ _id: id }, data, { new: true })
            .then(function (user) { return resolve(user); })
            .catch(function (err) { return reject(err); });
    });
}
exports.updateById = updateById;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var mongoose_1 = tslib_1.__importDefault(__webpack_require__(7));
var Schema = mongoose_1.default.Schema;
var Posts = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    users: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    }
});
module.exports = exports = mongoose_1.default.model('posts', Posts);


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var commentModel_1 = tslib_1.__importDefault(__webpack_require__(45));
var config_1 = tslib_1.__importDefault(__webpack_require__(1));
var UnauthorizedError_1 = tslib_1.__importDefault(__webpack_require__(5));
function create(comment, postId, userId) {
    return new Promise(function (resolve, reject) {
        var buildComment = {
            description: comment.description || '',
            posts: {
                _id: postId
            },
            users: {
                _id: userId
            }
        };
        var CommentModel = new commentModel_1.default(buildComment);
        CommentModel.save()
            .then(function (commentDetail) { return resolve(commentDetail); })
            .catch(function (err) { return reject(err); });
    });
}
exports.create = create;
function findByPostId(postId) {
    return new Promise(function (resolve, reject) {
        var option = {};
        if (!postId) {
            throw new Error('Please provide post id.');
        }
        option = {
            posts: postId
        };
        commentModel_1.default.find(option)
            .populate('users', 'name')
            .populate({
            path: 'sub_comments.users',
            model: 'users',
            select: 'name'
        })
            .then(function (user) { return resolve(user); })
            .catch(function (err) { return reject(err); });
    });
}
exports.findByPostId = findByPostId;
function createSubComment(subComment, commentId, userId) {
    return new Promise(function (resolve, reject) {
        var sub_comment = {
            description: subComment.description || '',
            users: {
                _id: userId
            }
        };
        commentModel_1.default.findOneAndUpdate({ _id: commentId }, { $push: { sub_comments: sub_comment } })
            .then(function (commentDetail) { return resolve(commentDetail); })
            .catch(function (err) { return reject(err); });
    });
}
exports.createSubComment = createSubComment;
function updateSubComment(subComment, commentId, subCommentId, currentUserId) {
    return new Promise(function (resolve, reject) {
        commentModel_1.default.findById(commentId)
            .then(function (comment) {
            var subDoc = comment.sub_comments.id(subCommentId);
            console.log('subDoc.users', subDoc.users);
            console.log('currentUserId', currentUserId);
            if (subDoc.users.toString() !== currentUserId) {
                throw new UnauthorizedError_1.default(config_1.default.ERROR_MESSAGE.INVALID_ACTION);
            }
            console.log(subDoc);
            subDoc.set({ description: subComment.description || '' });
            comment
                .save()
                .then(function (savedComment) {
                resolve(savedComment);
            })
                .catch(function (err) {
                reject(err);
            });
        })
            .catch(function (err) { return reject(err); });
    });
}
exports.updateSubComment = updateSubComment;
function deleteById(id) {
    return new Promise(function (resolve, reject) {
        commentModel_1.default.deleteOne({ _id: id })
            .then(function (user) { return resolve(user); })
            .catch(function (err) { return reject(err); });
    });
}
exports.deleteById = deleteById;
function update(id, comment) {
    return new Promise(function (resolve, reject) {
        commentModel_1.default.findOneAndUpdate({ _id: id }, comment)
            .then(function (comment) { return resolve(comment); })
            .catch(function (err) { return reject(err); });
    });
}
exports.update = update;
function getById(id) {
    return new Promise(function (resolve, reject) {
        commentModel_1.default.findById(id)
            .then(function (user) { return resolve(user); })
            .catch(function (err) { return reject(err); });
    });
}
exports.getById = getById;
function removeSubComment(commentId, subCommentId) {
    return new Promise(function (resolve, reject) {
        commentModel_1.default.findById(commentId)
            .then(function (comment) {
            comment.sub_comments.id(subCommentId).remove();
            comment
                .save()
                .then(function (savedComment) {
                resolve(savedComment);
            })
                .catch(function (err) {
                reject(err);
            });
        })
            .catch(function (err) { return reject(err); });
    });
}
exports.removeSubComment = removeSubComment;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var mongoose_1 = tslib_1.__importDefault(__webpack_require__(7));
var Schema = mongoose_1.default.Schema;
var childSchema = new Schema({ description: {
        type: String,
        required: true
    },
    users: { type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    } });
var Comments = new Schema({
    description: {
        type: String,
        required: true
    },
    users: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    posts: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'posts',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    sub_comments: [childSchema]
});
module.exports = exports = mongoose_1.default.model('comments', Comments);


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var express_1 = __webpack_require__(3);
var commentController = tslib_1.__importStar(__webpack_require__(15));
var authenticate_1 = tslib_1.__importDefault(__webpack_require__(8));
var router = express_1.Router();
router.put('/:id/sub-comments', authenticate_1.default, commentController.createSubComment);
router.put('/:id/sub-comments/:subCommentId', authenticate_1.default, commentController.editSubComment);
router.delete('/:id', authenticate_1.default, commentController.deleteById);
router.put('/:id', authenticate_1.default, commentController.update);
router.delete('/:id/sub-comments/:subCommentId', commentController.removeSubComment);
exports.default = router;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var HttpStatus = tslib_1.__importStar(__webpack_require__(2));
function notFoundError(req, res, next) {
    res.status(HttpStatus.NOT_FOUND).json({
        error: {
            code: HttpStatus.NOT_FOUND,
            message: HttpStatus.getStatusText(HttpStatus.NOT_FOUND)
        }
    });
}
exports.default = notFoundError;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var HttpStatus = tslib_1.__importStar(__webpack_require__(2));
var logger_1 = tslib_1.__importDefault(__webpack_require__(4));
function genericErrorHandler(err, req, res, next) {
    var error = buildError(err);
    logger_1.default.error('Error: ', JSON.stringify({ name: err.name, message: err.message }, null, 2));
    logger_1.default.error('Error stack trace: ', err.stack);
    res.status(error.code).json(error);
}
exports.default = genericErrorHandler;
function buildError(err) {
    if (err.isJoi) {
        return {
            code: HttpStatus.BAD_REQUEST,
            message: HttpStatus.getStatusText(HttpStatus.BAD_REQUEST),
            data: err.details &&
                err.details.map(function (error) { return ({
                    param: error.path.join('.'),
                    message: error.message
                }); })
        };
    }
    if (err.isBoom) {
        return {
            code: err.output.statusCode,
            message: err.output.payload.message || err.output.payload.error
        };
    }
    if (err.isCustom) {
        return {
            code: err.statusCode,
            message: err.message
        };
    }
    return {
        code: HttpStatus.INTERNAL_SERVER_ERROR,
        message: HttpStatus.getStatusText(HttpStatus.INTERNAL_SERVER_ERROR)
    };
}


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var config_1 = tslib_1.__importDefault(__webpack_require__(1));
var logger_1 = tslib_1.__importDefault(__webpack_require__(4));
var errors = config_1.default.errors;
function nodeErrorHandler(err) {
    switch (err.code) {
        case 'EACCES':
            logger_1.default.error(errors.portRequirePrivilege);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            logger_1.default.error(errors.portInUse);
            process.exit(1);
            break;
        default:
            throw err;
    }
}
exports.default = nodeErrorHandler;


/***/ })
/******/ ]);
//# sourceMappingURL=main.map