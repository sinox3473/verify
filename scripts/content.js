(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
  var __esm = (fn3, res) => function __init() {
    return fn3 && (res = (0, fn3[__getOwnPropNames(fn3)[0]])(fn3 = 0)), res;
  };
  var __commonJS = (cb, mod2) => function __require() {
    return mod2 || (0, cb[__getOwnPropNames(cb)[0]])((mod2 = { exports: {} }).exports, mod2), mod2.exports;
  };
  var __export = (target, all) => {
    for (var name2 in all)
      __defProp(target, name2, { get: all[name2], enumerable: true });
  };
  var __copyProps = (to4, from8, except, desc) => {
    if (from8 && typeof from8 === "object" || typeof from8 === "function") {
      for (let key of __getOwnPropNames(from8))
        if (!__hasOwnProp.call(to4, key) && key !== except)
          __defProp(to4, key, { get: () => from8[key], enumerable: !(desc = __getOwnPropDesc(from8, key)) || desc.enumerable });
    }
    return to4;
  };
  var __reExport = (target, mod2, secondTarget) => (__copyProps(target, mod2, "default"), secondTarget && __copyProps(secondTarget, mod2, "default"));
  var __toESM = (mod2, isNodeMode, target) => (target = mod2 != null ? __create(__getProtoOf(mod2)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod2 || !mod2.__esModule ? __defProp(target, "default", { value: mod2, enumerable: true }) : target,
    mod2
  ));
  var __toCommonJS = (mod2) => __copyProps(__defProp({}, "__esModule", { value: true }), mod2);

  // node_modules/base64-js/index.js
  var require_base64_js = __commonJS({
    "node_modules/base64-js/index.js"(exports) {
      "use strict";
      init_shims();
      exports.byteLength = byteLength;
      exports.toByteArray = toByteArray;
      exports.fromByteArray = fromByteArray;
      var lookup = [];
      var revLookup = [];
      var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
      var code2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      for (i4 = 0, len = code2.length; i4 < len; ++i4) {
        lookup[i4] = code2[i4];
        revLookup[code2.charCodeAt(i4)] = i4;
      }
      var i4;
      var len;
      revLookup["-".charCodeAt(0)] = 62;
      revLookup["_".charCodeAt(0)] = 63;
      function getLens(b64) {
        var len2 = b64.length;
        if (len2 % 4 > 0) {
          throw new Error("Invalid string. Length must be a multiple of 4");
        }
        var validLen = b64.indexOf("=");
        if (validLen === -1) validLen = len2;
        var placeHoldersLen = validLen === len2 ? 0 : 4 - validLen % 4;
        return [validLen, placeHoldersLen];
      }
      __name(getLens, "getLens");
      function byteLength(b64) {
        var lens = getLens(b64);
        var validLen = lens[0];
        var placeHoldersLen = lens[1];
        return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
      }
      __name(byteLength, "byteLength");
      function _byteLength(b64, validLen, placeHoldersLen) {
        return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
      }
      __name(_byteLength, "_byteLength");
      function toByteArray(b64) {
        var tmp;
        var lens = getLens(b64);
        var validLen = lens[0];
        var placeHoldersLen = lens[1];
        var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
        var curByte = 0;
        var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
        var i5;
        for (i5 = 0; i5 < len2; i5 += 4) {
          tmp = revLookup[b64.charCodeAt(i5)] << 18 | revLookup[b64.charCodeAt(i5 + 1)] << 12 | revLookup[b64.charCodeAt(i5 + 2)] << 6 | revLookup[b64.charCodeAt(i5 + 3)];
          arr[curByte++] = tmp >> 16 & 255;
          arr[curByte++] = tmp >> 8 & 255;
          arr[curByte++] = tmp & 255;
        }
        if (placeHoldersLen === 2) {
          tmp = revLookup[b64.charCodeAt(i5)] << 2 | revLookup[b64.charCodeAt(i5 + 1)] >> 4;
          arr[curByte++] = tmp & 255;
        }
        if (placeHoldersLen === 1) {
          tmp = revLookup[b64.charCodeAt(i5)] << 10 | revLookup[b64.charCodeAt(i5 + 1)] << 4 | revLookup[b64.charCodeAt(i5 + 2)] >> 2;
          arr[curByte++] = tmp >> 8 & 255;
          arr[curByte++] = tmp & 255;
        }
        return arr;
      }
      __name(toByteArray, "toByteArray");
      function tripletToBase64(num) {
        return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
      }
      __name(tripletToBase64, "tripletToBase64");
      function encodeChunk(uint8, start, end) {
        var tmp;
        var output = [];
        for (var i5 = start; i5 < end; i5 += 3) {
          tmp = (uint8[i5] << 16 & 16711680) + (uint8[i5 + 1] << 8 & 65280) + (uint8[i5 + 2] & 255);
          output.push(tripletToBase64(tmp));
        }
        return output.join("");
      }
      __name(encodeChunk, "encodeChunk");
      function fromByteArray(uint8) {
        var tmp;
        var len2 = uint8.length;
        var extraBytes = len2 % 3;
        var parts = [];
        var maxChunkLength = 16383;
        for (var i5 = 0, len22 = len2 - extraBytes; i5 < len22; i5 += maxChunkLength) {
          parts.push(encodeChunk(uint8, i5, i5 + maxChunkLength > len22 ? len22 : i5 + maxChunkLength));
        }
        if (extraBytes === 1) {
          tmp = uint8[len2 - 1];
          parts.push(
            lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "=="
          );
        } else if (extraBytes === 2) {
          tmp = (uint8[len2 - 2] << 8) + uint8[len2 - 1];
          parts.push(
            lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "="
          );
        }
        return parts.join("");
      }
      __name(fromByteArray, "fromByteArray");
    }
  });

  // node_modules/ieee754/index.js
  var require_ieee754 = __commonJS({
    "node_modules/ieee754/index.js"(exports) {
      init_shims();
      exports.read = function(buffer, offset, isLE2, mLen, nBytes) {
        var e2, m3;
        var eLen = nBytes * 8 - mLen - 1;
        var eMax = (1 << eLen) - 1;
        var eBias = eMax >> 1;
        var nBits = -7;
        var i4 = isLE2 ? nBytes - 1 : 0;
        var d4 = isLE2 ? -1 : 1;
        var s3 = buffer[offset + i4];
        i4 += d4;
        e2 = s3 & (1 << -nBits) - 1;
        s3 >>= -nBits;
        nBits += eLen;
        for (; nBits > 0; e2 = e2 * 256 + buffer[offset + i4], i4 += d4, nBits -= 8) {
        }
        m3 = e2 & (1 << -nBits) - 1;
        e2 >>= -nBits;
        nBits += mLen;
        for (; nBits > 0; m3 = m3 * 256 + buffer[offset + i4], i4 += d4, nBits -= 8) {
        }
        if (e2 === 0) {
          e2 = 1 - eBias;
        } else if (e2 === eMax) {
          return m3 ? NaN : (s3 ? -1 : 1) * Infinity;
        } else {
          m3 = m3 + Math.pow(2, mLen);
          e2 = e2 - eBias;
        }
        return (s3 ? -1 : 1) * m3 * Math.pow(2, e2 - mLen);
      };
      exports.write = function(buffer, value, offset, isLE2, mLen, nBytes) {
        var e2, m3, c6;
        var eLen = nBytes * 8 - mLen - 1;
        var eMax = (1 << eLen) - 1;
        var eBias = eMax >> 1;
        var rt3 = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
        var i4 = isLE2 ? 0 : nBytes - 1;
        var d4 = isLE2 ? 1 : -1;
        var s3 = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
        value = Math.abs(value);
        if (isNaN(value) || value === Infinity) {
          m3 = isNaN(value) ? 1 : 0;
          e2 = eMax;
        } else {
          e2 = Math.floor(Math.log(value) / Math.LN2);
          if (value * (c6 = Math.pow(2, -e2)) < 1) {
            e2--;
            c6 *= 2;
          }
          if (e2 + eBias >= 1) {
            value += rt3 / c6;
          } else {
            value += rt3 * Math.pow(2, 1 - eBias);
          }
          if (value * c6 >= 2) {
            e2++;
            c6 /= 2;
          }
          if (e2 + eBias >= eMax) {
            m3 = 0;
            e2 = eMax;
          } else if (e2 + eBias >= 1) {
            m3 = (value * c6 - 1) * Math.pow(2, mLen);
            e2 = e2 + eBias;
          } else {
            m3 = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e2 = 0;
          }
        }
        for (; mLen >= 8; buffer[offset + i4] = m3 & 255, i4 += d4, m3 /= 256, mLen -= 8) {
        }
        e2 = e2 << mLen | m3;
        eLen += mLen;
        for (; eLen > 0; buffer[offset + i4] = e2 & 255, i4 += d4, e2 /= 256, eLen -= 8) {
        }
        buffer[offset + i4 - d4] |= s3 * 128;
      };
    }
  });

  // node_modules/buffer/index.js
  var require_buffer = __commonJS({
    "node_modules/buffer/index.js"(exports) {
      "use strict";
      init_shims();
      var base642 = require_base64_js();
      var ieee754 = require_ieee754();
      var customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? Symbol["for"]("nodejs.util.inspect.custom") : null;
      exports.Buffer = Buffer3;
      exports.SlowBuffer = SlowBuffer;
      exports.INSPECT_MAX_BYTES = 50;
      var K_MAX_LENGTH = 2147483647;
      exports.kMaxLength = K_MAX_LENGTH;
      Buffer3.TYPED_ARRAY_SUPPORT = typedArraySupport();
      if (!Buffer3.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
        console.error(
          "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
        );
      }
      function typedArraySupport() {
        try {
          const arr = new Uint8Array(1);
          const proto = { foo: /* @__PURE__ */ __name(function() {
            return 42;
          }, "foo") };
          Object.setPrototypeOf(proto, Uint8Array.prototype);
          Object.setPrototypeOf(arr, proto);
          return arr.foo() === 42;
        } catch (e2) {
          return false;
        }
      }
      __name(typedArraySupport, "typedArraySupport");
      Object.defineProperty(Buffer3.prototype, "parent", {
        enumerable: true,
        get: /* @__PURE__ */ __name(function() {
          if (!Buffer3.isBuffer(this)) return void 0;
          return this.buffer;
        }, "get")
      });
      Object.defineProperty(Buffer3.prototype, "offset", {
        enumerable: true,
        get: /* @__PURE__ */ __name(function() {
          if (!Buffer3.isBuffer(this)) return void 0;
          return this.byteOffset;
        }, "get")
      });
      function createBuffer(length2) {
        if (length2 > K_MAX_LENGTH) {
          throw new RangeError('The value "' + length2 + '" is invalid for option "size"');
        }
        const buf = new Uint8Array(length2);
        Object.setPrototypeOf(buf, Buffer3.prototype);
        return buf;
      }
      __name(createBuffer, "createBuffer");
      function Buffer3(arg, encodingOrOffset, length2) {
        if (typeof arg === "number") {
          if (typeof encodingOrOffset === "string") {
            throw new TypeError(
              'The "string" argument must be of type string. Received type number'
            );
          }
          return allocUnsafe2(arg);
        }
        return from8(arg, encodingOrOffset, length2);
      }
      __name(Buffer3, "Buffer");
      Buffer3.poolSize = 8192;
      function from8(value, encodingOrOffset, length2) {
        if (typeof value === "string") {
          return fromString4(value, encodingOrOffset);
        }
        if (ArrayBuffer.isView(value)) {
          return fromArrayView(value);
        }
        if (value == null) {
          throw new TypeError(
            "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value
          );
        }
        if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
          return fromArrayBuffer(value, encodingOrOffset, length2);
        }
        if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) {
          return fromArrayBuffer(value, encodingOrOffset, length2);
        }
        if (typeof value === "number") {
          throw new TypeError(
            'The "value" argument must not be of type number. Received type number'
          );
        }
        const valueOf = value.valueOf && value.valueOf();
        if (valueOf != null && valueOf !== value) {
          return Buffer3.from(valueOf, encodingOrOffset, length2);
        }
        const b6 = fromObject(value);
        if (b6) return b6;
        if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") {
          return Buffer3.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length2);
        }
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value
        );
      }
      __name(from8, "from");
      Buffer3.from = function(value, encodingOrOffset, length2) {
        return from8(value, encodingOrOffset, length2);
      };
      Object.setPrototypeOf(Buffer3.prototype, Uint8Array.prototype);
      Object.setPrototypeOf(Buffer3, Uint8Array);
      function assertSize3(size3) {
        if (typeof size3 !== "number") {
          throw new TypeError('"size" argument must be of type number');
        } else if (size3 < 0) {
          throw new RangeError('The value "' + size3 + '" is invalid for option "size"');
        }
      }
      __name(assertSize3, "assertSize");
      function alloc(size3, fill, encoding) {
        assertSize3(size3);
        if (size3 <= 0) {
          return createBuffer(size3);
        }
        if (fill !== void 0) {
          return typeof encoding === "string" ? createBuffer(size3).fill(fill, encoding) : createBuffer(size3).fill(fill);
        }
        return createBuffer(size3);
      }
      __name(alloc, "alloc");
      Buffer3.alloc = function(size3, fill, encoding) {
        return alloc(size3, fill, encoding);
      };
      function allocUnsafe2(size3) {
        assertSize3(size3);
        return createBuffer(size3 < 0 ? 0 : checked(size3) | 0);
      }
      __name(allocUnsafe2, "allocUnsafe");
      Buffer3.allocUnsafe = function(size3) {
        return allocUnsafe2(size3);
      };
      Buffer3.allocUnsafeSlow = function(size3) {
        return allocUnsafe2(size3);
      };
      function fromString4(string2, encoding) {
        if (typeof encoding !== "string" || encoding === "") {
          encoding = "utf8";
        }
        if (!Buffer3.isEncoding(encoding)) {
          throw new TypeError("Unknown encoding: " + encoding);
        }
        const length2 = byteLength(string2, encoding) | 0;
        let buf = createBuffer(length2);
        const actual = buf.write(string2, encoding);
        if (actual !== length2) {
          buf = buf.slice(0, actual);
        }
        return buf;
      }
      __name(fromString4, "fromString");
      function fromArrayLike(array) {
        const length2 = array.length < 0 ? 0 : checked(array.length) | 0;
        const buf = createBuffer(length2);
        for (let i4 = 0; i4 < length2; i4 += 1) {
          buf[i4] = array[i4] & 255;
        }
        return buf;
      }
      __name(fromArrayLike, "fromArrayLike");
      function fromArrayView(arrayView) {
        if (isInstance(arrayView, Uint8Array)) {
          const copy = new Uint8Array(arrayView);
          return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
        }
        return fromArrayLike(arrayView);
      }
      __name(fromArrayView, "fromArrayView");
      function fromArrayBuffer(array, byteOffset, length2) {
        if (byteOffset < 0 || array.byteLength < byteOffset) {
          throw new RangeError('"offset" is outside of buffer bounds');
        }
        if (array.byteLength < byteOffset + (length2 || 0)) {
          throw new RangeError('"length" is outside of buffer bounds');
        }
        let buf;
        if (byteOffset === void 0 && length2 === void 0) {
          buf = new Uint8Array(array);
        } else if (length2 === void 0) {
          buf = new Uint8Array(array, byteOffset);
        } else {
          buf = new Uint8Array(array, byteOffset, length2);
        }
        Object.setPrototypeOf(buf, Buffer3.prototype);
        return buf;
      }
      __name(fromArrayBuffer, "fromArrayBuffer");
      function fromObject(obj) {
        if (Buffer3.isBuffer(obj)) {
          const len = checked(obj.length) | 0;
          const buf = createBuffer(len);
          if (buf.length === 0) {
            return buf;
          }
          obj.copy(buf, 0, 0, len);
          return buf;
        }
        if (obj.length !== void 0) {
          if (typeof obj.length !== "number" || numberIsNaN(obj.length)) {
            return createBuffer(0);
          }
          return fromArrayLike(obj);
        }
        if (obj.type === "Buffer" && Array.isArray(obj.data)) {
          return fromArrayLike(obj.data);
        }
      }
      __name(fromObject, "fromObject");
      function checked(length2) {
        if (length2 >= K_MAX_LENGTH) {
          throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
        }
        return length2 | 0;
      }
      __name(checked, "checked");
      function SlowBuffer(length2) {
        if (+length2 != length2) {
          length2 = 0;
        }
        return Buffer3.alloc(+length2);
      }
      __name(SlowBuffer, "SlowBuffer");
      Buffer3.isBuffer = /* @__PURE__ */ __name(function isBuffer(b6) {
        return b6 != null && b6._isBuffer === true && b6 !== Buffer3.prototype;
      }, "isBuffer");
      Buffer3.compare = /* @__PURE__ */ __name(function compare2(a4, b6) {
        if (isInstance(a4, Uint8Array)) a4 = Buffer3.from(a4, a4.offset, a4.byteLength);
        if (isInstance(b6, Uint8Array)) b6 = Buffer3.from(b6, b6.offset, b6.byteLength);
        if (!Buffer3.isBuffer(a4) || !Buffer3.isBuffer(b6)) {
          throw new TypeError(
            'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
          );
        }
        if (a4 === b6) return 0;
        let x6 = a4.length;
        let y5 = b6.length;
        for (let i4 = 0, len = Math.min(x6, y5); i4 < len; ++i4) {
          if (a4[i4] !== b6[i4]) {
            x6 = a4[i4];
            y5 = b6[i4];
            break;
          }
        }
        if (x6 < y5) return -1;
        if (y5 < x6) return 1;
        return 0;
      }, "compare");
      Buffer3.isEncoding = /* @__PURE__ */ __name(function isEncoding(encoding) {
        switch (String(encoding).toLowerCase()) {
          case "hex":
          case "utf8":
          case "utf-8":
          case "ascii":
          case "latin1":
          case "binary":
          case "base64":
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return true;
          default:
            return false;
        }
      }, "isEncoding");
      Buffer3.concat = /* @__PURE__ */ __name(function concat3(list, length2) {
        if (!Array.isArray(list)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        }
        if (list.length === 0) {
          return Buffer3.alloc(0);
        }
        let i4;
        if (length2 === void 0) {
          length2 = 0;
          for (i4 = 0; i4 < list.length; ++i4) {
            length2 += list[i4].length;
          }
        }
        const buffer = Buffer3.allocUnsafe(length2);
        let pos = 0;
        for (i4 = 0; i4 < list.length; ++i4) {
          let buf = list[i4];
          if (isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) {
              if (!Buffer3.isBuffer(buf)) buf = Buffer3.from(buf);
              buf.copy(buffer, pos);
            } else {
              Uint8Array.prototype.set.call(
                buffer,
                buf,
                pos
              );
            }
          } else if (!Buffer3.isBuffer(buf)) {
            throw new TypeError('"list" argument must be an Array of Buffers');
          } else {
            buf.copy(buffer, pos);
          }
          pos += buf.length;
        }
        return buffer;
      }, "concat");
      function byteLength(string2, encoding) {
        if (Buffer3.isBuffer(string2)) {
          return string2.length;
        }
        if (ArrayBuffer.isView(string2) || isInstance(string2, ArrayBuffer)) {
          return string2.byteLength;
        }
        if (typeof string2 !== "string") {
          throw new TypeError(
            'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string2
          );
        }
        const len = string2.length;
        const mustMatch = arguments.length > 2 && arguments[2] === true;
        if (!mustMatch && len === 0) return 0;
        let loweredCase = false;
        for (; ; ) {
          switch (encoding) {
            case "ascii":
            case "latin1":
            case "binary":
              return len;
            case "utf8":
            case "utf-8":
              return utf8ToBytes2(string2).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return len * 2;
            case "hex":
              return len >>> 1;
            case "base64":
              return base64ToBytes(string2).length;
            default:
              if (loweredCase) {
                return mustMatch ? -1 : utf8ToBytes2(string2).length;
              }
              encoding = ("" + encoding).toLowerCase();
              loweredCase = true;
          }
        }
      }
      __name(byteLength, "byteLength");
      Buffer3.byteLength = byteLength;
      function slowToString(encoding, start, end) {
        let loweredCase = false;
        if (start === void 0 || start < 0) {
          start = 0;
        }
        if (start > this.length) {
          return "";
        }
        if (end === void 0 || end > this.length) {
          end = this.length;
        }
        if (end <= 0) {
          return "";
        }
        end >>>= 0;
        start >>>= 0;
        if (end <= start) {
          return "";
        }
        if (!encoding) encoding = "utf8";
        while (true) {
          switch (encoding) {
            case "hex":
              return hexSlice(this, start, end);
            case "utf8":
            case "utf-8":
              return utf8Slice(this, start, end);
            case "ascii":
              return asciiSlice(this, start, end);
            case "latin1":
            case "binary":
              return latin1Slice(this, start, end);
            case "base64":
              return base64Slice(this, start, end);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return utf16leSlice(this, start, end);
            default:
              if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
              encoding = (encoding + "").toLowerCase();
              loweredCase = true;
          }
        }
      }
      __name(slowToString, "slowToString");
      Buffer3.prototype._isBuffer = true;
      function swap(b6, n5, m3) {
        const i4 = b6[n5];
        b6[n5] = b6[m3];
        b6[m3] = i4;
      }
      __name(swap, "swap");
      Buffer3.prototype.swap16 = /* @__PURE__ */ __name(function swap16() {
        const len = this.length;
        if (len % 2 !== 0) {
          throw new RangeError("Buffer size must be a multiple of 16-bits");
        }
        for (let i4 = 0; i4 < len; i4 += 2) {
          swap(this, i4, i4 + 1);
        }
        return this;
      }, "swap16");
      Buffer3.prototype.swap32 = /* @__PURE__ */ __name(function swap32() {
        const len = this.length;
        if (len % 4 !== 0) {
          throw new RangeError("Buffer size must be a multiple of 32-bits");
        }
        for (let i4 = 0; i4 < len; i4 += 4) {
          swap(this, i4, i4 + 3);
          swap(this, i4 + 1, i4 + 2);
        }
        return this;
      }, "swap32");
      Buffer3.prototype.swap64 = /* @__PURE__ */ __name(function swap64() {
        const len = this.length;
        if (len % 8 !== 0) {
          throw new RangeError("Buffer size must be a multiple of 64-bits");
        }
        for (let i4 = 0; i4 < len; i4 += 8) {
          swap(this, i4, i4 + 7);
          swap(this, i4 + 1, i4 + 6);
          swap(this, i4 + 2, i4 + 5);
          swap(this, i4 + 3, i4 + 4);
        }
        return this;
      }, "swap64");
      Buffer3.prototype.toString = /* @__PURE__ */ __name(function toString3() {
        const length2 = this.length;
        if (length2 === 0) return "";
        if (arguments.length === 0) return utf8Slice(this, 0, length2);
        return slowToString.apply(this, arguments);
      }, "toString");
      Buffer3.prototype.toLocaleString = Buffer3.prototype.toString;
      Buffer3.prototype.equals = /* @__PURE__ */ __name(function equals4(b6) {
        if (!Buffer3.isBuffer(b6)) throw new TypeError("Argument must be a Buffer");
        if (this === b6) return true;
        return Buffer3.compare(this, b6) === 0;
      }, "equals");
      Buffer3.prototype.inspect = /* @__PURE__ */ __name(function inspect() {
        let str = "";
        const max = exports.INSPECT_MAX_BYTES;
        str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
        if (this.length > max) str += " ... ";
        return "<Buffer " + str + ">";
      }, "inspect");
      if (customInspectSymbol) {
        Buffer3.prototype[customInspectSymbol] = Buffer3.prototype.inspect;
      }
      Buffer3.prototype.compare = /* @__PURE__ */ __name(function compare2(target, start, end, thisStart, thisEnd) {
        if (isInstance(target, Uint8Array)) {
          target = Buffer3.from(target, target.offset, target.byteLength);
        }
        if (!Buffer3.isBuffer(target)) {
          throw new TypeError(
            'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target
          );
        }
        if (start === void 0) {
          start = 0;
        }
        if (end === void 0) {
          end = target ? target.length : 0;
        }
        if (thisStart === void 0) {
          thisStart = 0;
        }
        if (thisEnd === void 0) {
          thisEnd = this.length;
        }
        if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
          throw new RangeError("out of range index");
        }
        if (thisStart >= thisEnd && start >= end) {
          return 0;
        }
        if (thisStart >= thisEnd) {
          return -1;
        }
        if (start >= end) {
          return 1;
        }
        start >>>= 0;
        end >>>= 0;
        thisStart >>>= 0;
        thisEnd >>>= 0;
        if (this === target) return 0;
        let x6 = thisEnd - thisStart;
        let y5 = end - start;
        const len = Math.min(x6, y5);
        const thisCopy = this.slice(thisStart, thisEnd);
        const targetCopy = target.slice(start, end);
        for (let i4 = 0; i4 < len; ++i4) {
          if (thisCopy[i4] !== targetCopy[i4]) {
            x6 = thisCopy[i4];
            y5 = targetCopy[i4];
            break;
          }
        }
        if (x6 < y5) return -1;
        if (y5 < x6) return 1;
        return 0;
      }, "compare");
      function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
        if (buffer.length === 0) return -1;
        if (typeof byteOffset === "string") {
          encoding = byteOffset;
          byteOffset = 0;
        } else if (byteOffset > 2147483647) {
          byteOffset = 2147483647;
        } else if (byteOffset < -2147483648) {
          byteOffset = -2147483648;
        }
        byteOffset = +byteOffset;
        if (numberIsNaN(byteOffset)) {
          byteOffset = dir ? 0 : buffer.length - 1;
        }
        if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
        if (byteOffset >= buffer.length) {
          if (dir) return -1;
          else byteOffset = buffer.length - 1;
        } else if (byteOffset < 0) {
          if (dir) byteOffset = 0;
          else return -1;
        }
        if (typeof val === "string") {
          val = Buffer3.from(val, encoding);
        }
        if (Buffer3.isBuffer(val)) {
          if (val.length === 0) {
            return -1;
          }
          return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
        } else if (typeof val === "number") {
          val = val & 255;
          if (typeof Uint8Array.prototype.indexOf === "function") {
            if (dir) {
              return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            } else {
              return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
            }
          }
          return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
        }
        throw new TypeError("val must be string, number or Buffer");
      }
      __name(bidirectionalIndexOf, "bidirectionalIndexOf");
      function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
        let indexSize = 1;
        let arrLength = arr.length;
        let valLength = val.length;
        if (encoding !== void 0) {
          encoding = String(encoding).toLowerCase();
          if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
            if (arr.length < 2 || val.length < 2) {
              return -1;
            }
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
          }
        }
        function read2(buf, i5) {
          if (indexSize === 1) {
            return buf[i5];
          } else {
            return buf.readUInt16BE(i5 * indexSize);
          }
        }
        __name(read2, "read");
        let i4;
        if (dir) {
          let foundIndex = -1;
          for (i4 = byteOffset; i4 < arrLength; i4++) {
            if (read2(arr, i4) === read2(val, foundIndex === -1 ? 0 : i4 - foundIndex)) {
              if (foundIndex === -1) foundIndex = i4;
              if (i4 - foundIndex + 1 === valLength) return foundIndex * indexSize;
            } else {
              if (foundIndex !== -1) i4 -= i4 - foundIndex;
              foundIndex = -1;
            }
          }
        } else {
          if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
          for (i4 = byteOffset; i4 >= 0; i4--) {
            let found = true;
            for (let j7 = 0; j7 < valLength; j7++) {
              if (read2(arr, i4 + j7) !== read2(val, j7)) {
                found = false;
                break;
              }
            }
            if (found) return i4;
          }
        }
        return -1;
      }
      __name(arrayIndexOf, "arrayIndexOf");
      Buffer3.prototype.includes = /* @__PURE__ */ __name(function includes(val, byteOffset, encoding) {
        return this.indexOf(val, byteOffset, encoding) !== -1;
      }, "includes");
      Buffer3.prototype.indexOf = /* @__PURE__ */ __name(function indexOf(val, byteOffset, encoding) {
        return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
      }, "indexOf");
      Buffer3.prototype.lastIndexOf = /* @__PURE__ */ __name(function lastIndexOf(val, byteOffset, encoding) {
        return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
      }, "lastIndexOf");
      function hexWrite(buf, string2, offset, length2) {
        offset = Number(offset) || 0;
        const remaining = buf.length - offset;
        if (!length2) {
          length2 = remaining;
        } else {
          length2 = Number(length2);
          if (length2 > remaining) {
            length2 = remaining;
          }
        }
        const strLen = string2.length;
        if (length2 > strLen / 2) {
          length2 = strLen / 2;
        }
        let i4;
        for (i4 = 0; i4 < length2; ++i4) {
          const parsed = parseInt(string2.substr(i4 * 2, 2), 16);
          if (numberIsNaN(parsed)) return i4;
          buf[offset + i4] = parsed;
        }
        return i4;
      }
      __name(hexWrite, "hexWrite");
      function utf8Write(buf, string2, offset, length2) {
        return blitBuffer(utf8ToBytes2(string2, buf.length - offset), buf, offset, length2);
      }
      __name(utf8Write, "utf8Write");
      function asciiWrite(buf, string2, offset, length2) {
        return blitBuffer(asciiToBytes(string2), buf, offset, length2);
      }
      __name(asciiWrite, "asciiWrite");
      function base64Write(buf, string2, offset, length2) {
        return blitBuffer(base64ToBytes(string2), buf, offset, length2);
      }
      __name(base64Write, "base64Write");
      function ucs2Write(buf, string2, offset, length2) {
        return blitBuffer(utf16leToBytes(string2, buf.length - offset), buf, offset, length2);
      }
      __name(ucs2Write, "ucs2Write");
      Buffer3.prototype.write = /* @__PURE__ */ __name(function write(string2, offset, length2, encoding) {
        if (offset === void 0) {
          encoding = "utf8";
          length2 = this.length;
          offset = 0;
        } else if (length2 === void 0 && typeof offset === "string") {
          encoding = offset;
          length2 = this.length;
          offset = 0;
        } else if (isFinite(offset)) {
          offset = offset >>> 0;
          if (isFinite(length2)) {
            length2 = length2 >>> 0;
            if (encoding === void 0) encoding = "utf8";
          } else {
            encoding = length2;
            length2 = void 0;
          }
        } else {
          throw new Error(
            "Buffer.write(string, encoding, offset[, length]) is no longer supported"
          );
        }
        const remaining = this.length - offset;
        if (length2 === void 0 || length2 > remaining) length2 = remaining;
        if (string2.length > 0 && (length2 < 0 || offset < 0) || offset > this.length) {
          throw new RangeError("Attempt to write outside buffer bounds");
        }
        if (!encoding) encoding = "utf8";
        let loweredCase = false;
        for (; ; ) {
          switch (encoding) {
            case "hex":
              return hexWrite(this, string2, offset, length2);
            case "utf8":
            case "utf-8":
              return utf8Write(this, string2, offset, length2);
            case "ascii":
            case "latin1":
            case "binary":
              return asciiWrite(this, string2, offset, length2);
            case "base64":
              return base64Write(this, string2, offset, length2);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return ucs2Write(this, string2, offset, length2);
            default:
              if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
              encoding = ("" + encoding).toLowerCase();
              loweredCase = true;
          }
        }
      }, "write");
      Buffer3.prototype.toJSON = /* @__PURE__ */ __name(function toJSON() {
        return {
          type: "Buffer",
          data: Array.prototype.slice.call(this._arr || this, 0)
        };
      }, "toJSON");
      function base64Slice(buf, start, end) {
        if (start === 0 && end === buf.length) {
          return base642.fromByteArray(buf);
        } else {
          return base642.fromByteArray(buf.slice(start, end));
        }
      }
      __name(base64Slice, "base64Slice");
      function utf8Slice(buf, start, end) {
        end = Math.min(buf.length, end);
        const res = [];
        let i4 = start;
        while (i4 < end) {
          const firstByte = buf[i4];
          let codePoint = null;
          let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
          if (i4 + bytesPerSequence <= end) {
            let secondByte, thirdByte, fourthByte, tempCodePoint;
            switch (bytesPerSequence) {
              case 1:
                if (firstByte < 128) {
                  codePoint = firstByte;
                }
                break;
              case 2:
                secondByte = buf[i4 + 1];
                if ((secondByte & 192) === 128) {
                  tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                  if (tempCodePoint > 127) {
                    codePoint = tempCodePoint;
                  }
                }
                break;
              case 3:
                secondByte = buf[i4 + 1];
                thirdByte = buf[i4 + 2];
                if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                  tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                  if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                    codePoint = tempCodePoint;
                  }
                }
                break;
              case 4:
                secondByte = buf[i4 + 1];
                thirdByte = buf[i4 + 2];
                fourthByte = buf[i4 + 3];
                if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                  tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                  if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                    codePoint = tempCodePoint;
                  }
                }
            }
          }
          if (codePoint === null) {
            codePoint = 65533;
            bytesPerSequence = 1;
          } else if (codePoint > 65535) {
            codePoint -= 65536;
            res.push(codePoint >>> 10 & 1023 | 55296);
            codePoint = 56320 | codePoint & 1023;
          }
          res.push(codePoint);
          i4 += bytesPerSequence;
        }
        return decodeCodePointsArray(res);
      }
      __name(utf8Slice, "utf8Slice");
      var MAX_ARGUMENTS_LENGTH = 4096;
      function decodeCodePointsArray(codePoints) {
        const len = codePoints.length;
        if (len <= MAX_ARGUMENTS_LENGTH) {
          return String.fromCharCode.apply(String, codePoints);
        }
        let res = "";
        let i4 = 0;
        while (i4 < len) {
          res += String.fromCharCode.apply(
            String,
            codePoints.slice(i4, i4 += MAX_ARGUMENTS_LENGTH)
          );
        }
        return res;
      }
      __name(decodeCodePointsArray, "decodeCodePointsArray");
      function asciiSlice(buf, start, end) {
        let ret = "";
        end = Math.min(buf.length, end);
        for (let i4 = start; i4 < end; ++i4) {
          ret += String.fromCharCode(buf[i4] & 127);
        }
        return ret;
      }
      __name(asciiSlice, "asciiSlice");
      function latin1Slice(buf, start, end) {
        let ret = "";
        end = Math.min(buf.length, end);
        for (let i4 = start; i4 < end; ++i4) {
          ret += String.fromCharCode(buf[i4]);
        }
        return ret;
      }
      __name(latin1Slice, "latin1Slice");
      function hexSlice(buf, start, end) {
        const len = buf.length;
        if (!start || start < 0) start = 0;
        if (!end || end < 0 || end > len) end = len;
        let out = "";
        for (let i4 = start; i4 < end; ++i4) {
          out += hexSliceLookupTable[buf[i4]];
        }
        return out;
      }
      __name(hexSlice, "hexSlice");
      function utf16leSlice(buf, start, end) {
        const bytes = buf.slice(start, end);
        let res = "";
        for (let i4 = 0; i4 < bytes.length - 1; i4 += 2) {
          res += String.fromCharCode(bytes[i4] + bytes[i4 + 1] * 256);
        }
        return res;
      }
      __name(utf16leSlice, "utf16leSlice");
      Buffer3.prototype.slice = /* @__PURE__ */ __name(function slice2(start, end) {
        const len = this.length;
        start = ~~start;
        end = end === void 0 ? len : ~~end;
        if (start < 0) {
          start += len;
          if (start < 0) start = 0;
        } else if (start > len) {
          start = len;
        }
        if (end < 0) {
          end += len;
          if (end < 0) end = 0;
        } else if (end > len) {
          end = len;
        }
        if (end < start) end = start;
        const newBuf = this.subarray(start, end);
        Object.setPrototypeOf(newBuf, Buffer3.prototype);
        return newBuf;
      }, "slice");
      function checkOffset(offset, ext, length2) {
        if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
        if (offset + ext > length2) throw new RangeError("Trying to access beyond buffer length");
      }
      __name(checkOffset, "checkOffset");
      Buffer3.prototype.readUintLE = Buffer3.prototype.readUIntLE = /* @__PURE__ */ __name(function readUIntLE(offset, byteLength2, noAssert) {
        offset = offset >>> 0;
        byteLength2 = byteLength2 >>> 0;
        if (!noAssert) checkOffset(offset, byteLength2, this.length);
        let val = this[offset];
        let mul = 1;
        let i4 = 0;
        while (++i4 < byteLength2 && (mul *= 256)) {
          val += this[offset + i4] * mul;
        }
        return val;
      }, "readUIntLE");
      Buffer3.prototype.readUintBE = Buffer3.prototype.readUIntBE = /* @__PURE__ */ __name(function readUIntBE(offset, byteLength2, noAssert) {
        offset = offset >>> 0;
        byteLength2 = byteLength2 >>> 0;
        if (!noAssert) {
          checkOffset(offset, byteLength2, this.length);
        }
        let val = this[offset + --byteLength2];
        let mul = 1;
        while (byteLength2 > 0 && (mul *= 256)) {
          val += this[offset + --byteLength2] * mul;
        }
        return val;
      }, "readUIntBE");
      Buffer3.prototype.readUint8 = Buffer3.prototype.readUInt8 = /* @__PURE__ */ __name(function readUInt8(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 1, this.length);
        return this[offset];
      }, "readUInt8");
      Buffer3.prototype.readUint16LE = Buffer3.prototype.readUInt16LE = /* @__PURE__ */ __name(function readUInt16LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 2, this.length);
        return this[offset] | this[offset + 1] << 8;
      }, "readUInt16LE");
      Buffer3.prototype.readUint16BE = Buffer3.prototype.readUInt16BE = /* @__PURE__ */ __name(function readUInt16BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 2, this.length);
        return this[offset] << 8 | this[offset + 1];
      }, "readUInt16BE");
      Buffer3.prototype.readUint32LE = Buffer3.prototype.readUInt32LE = /* @__PURE__ */ __name(function readUInt32LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
      }, "readUInt32LE");
      Buffer3.prototype.readUint32BE = Buffer3.prototype.readUInt32BE = /* @__PURE__ */ __name(function readUInt32BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
      }, "readUInt32BE");
      Buffer3.prototype.readBigUInt64LE = defineBigIntMethod(/* @__PURE__ */ __name(function readBigUInt64LE(offset) {
        offset = offset >>> 0;
        validateNumber(offset, "offset");
        const first = this[offset];
        const last = this[offset + 7];
        if (first === void 0 || last === void 0) {
          boundsError(offset, this.length - 8);
        }
        const lo4 = first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
        const hi3 = this[++offset] + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + last * 2 ** 24;
        return BigInt(lo4) + (BigInt(hi3) << BigInt(32));
      }, "readBigUInt64LE"));
      Buffer3.prototype.readBigUInt64BE = defineBigIntMethod(/* @__PURE__ */ __name(function readBigUInt64BE(offset) {
        offset = offset >>> 0;
        validateNumber(offset, "offset");
        const first = this[offset];
        const last = this[offset + 7];
        if (first === void 0 || last === void 0) {
          boundsError(offset, this.length - 8);
        }
        const hi3 = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
        const lo4 = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last;
        return (BigInt(hi3) << BigInt(32)) + BigInt(lo4);
      }, "readBigUInt64BE"));
      Buffer3.prototype.readIntLE = /* @__PURE__ */ __name(function readIntLE(offset, byteLength2, noAssert) {
        offset = offset >>> 0;
        byteLength2 = byteLength2 >>> 0;
        if (!noAssert) checkOffset(offset, byteLength2, this.length);
        let val = this[offset];
        let mul = 1;
        let i4 = 0;
        while (++i4 < byteLength2 && (mul *= 256)) {
          val += this[offset + i4] * mul;
        }
        mul *= 128;
        if (val >= mul) val -= Math.pow(2, 8 * byteLength2);
        return val;
      }, "readIntLE");
      Buffer3.prototype.readIntBE = /* @__PURE__ */ __name(function readIntBE(offset, byteLength2, noAssert) {
        offset = offset >>> 0;
        byteLength2 = byteLength2 >>> 0;
        if (!noAssert) checkOffset(offset, byteLength2, this.length);
        let i4 = byteLength2;
        let mul = 1;
        let val = this[offset + --i4];
        while (i4 > 0 && (mul *= 256)) {
          val += this[offset + --i4] * mul;
        }
        mul *= 128;
        if (val >= mul) val -= Math.pow(2, 8 * byteLength2);
        return val;
      }, "readIntBE");
      Buffer3.prototype.readInt8 = /* @__PURE__ */ __name(function readInt8(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 1, this.length);
        if (!(this[offset] & 128)) return this[offset];
        return (255 - this[offset] + 1) * -1;
      }, "readInt8");
      Buffer3.prototype.readInt16LE = /* @__PURE__ */ __name(function readInt16LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 2, this.length);
        const val = this[offset] | this[offset + 1] << 8;
        return val & 32768 ? val | 4294901760 : val;
      }, "readInt16LE");
      Buffer3.prototype.readInt16BE = /* @__PURE__ */ __name(function readInt16BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 2, this.length);
        const val = this[offset + 1] | this[offset] << 8;
        return val & 32768 ? val | 4294901760 : val;
      }, "readInt16BE");
      Buffer3.prototype.readInt32LE = /* @__PURE__ */ __name(function readInt32LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
      }, "readInt32LE");
      Buffer3.prototype.readInt32BE = /* @__PURE__ */ __name(function readInt32BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
      }, "readInt32BE");
      Buffer3.prototype.readBigInt64LE = defineBigIntMethod(/* @__PURE__ */ __name(function readBigInt64LE(offset) {
        offset = offset >>> 0;
        validateNumber(offset, "offset");
        const first = this[offset];
        const last = this[offset + 7];
        if (first === void 0 || last === void 0) {
          boundsError(offset, this.length - 8);
        }
        const val = this[offset + 4] + this[offset + 5] * 2 ** 8 + this[offset + 6] * 2 ** 16 + (last << 24);
        return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
      }, "readBigInt64LE"));
      Buffer3.prototype.readBigInt64BE = defineBigIntMethod(/* @__PURE__ */ __name(function readBigInt64BE(offset) {
        offset = offset >>> 0;
        validateNumber(offset, "offset");
        const first = this[offset];
        const last = this[offset + 7];
        if (first === void 0 || last === void 0) {
          boundsError(offset, this.length - 8);
        }
        const val = (first << 24) + // Overflow
        this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
        return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last);
      }, "readBigInt64BE"));
      Buffer3.prototype.readFloatLE = /* @__PURE__ */ __name(function readFloatLE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return ieee754.read(this, offset, true, 23, 4);
      }, "readFloatLE");
      Buffer3.prototype.readFloatBE = /* @__PURE__ */ __name(function readFloatBE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return ieee754.read(this, offset, false, 23, 4);
      }, "readFloatBE");
      Buffer3.prototype.readDoubleLE = /* @__PURE__ */ __name(function readDoubleLE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 8, this.length);
        return ieee754.read(this, offset, true, 52, 8);
      }, "readDoubleLE");
      Buffer3.prototype.readDoubleBE = /* @__PURE__ */ __name(function readDoubleBE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 8, this.length);
        return ieee754.read(this, offset, false, 52, 8);
      }, "readDoubleBE");
      function checkInt(buf, value, offset, ext, max, min) {
        if (!Buffer3.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
        if (offset + ext > buf.length) throw new RangeError("Index out of range");
      }
      __name(checkInt, "checkInt");
      Buffer3.prototype.writeUintLE = Buffer3.prototype.writeUIntLE = /* @__PURE__ */ __name(function writeUIntLE(value, offset, byteLength2, noAssert) {
        value = +value;
        offset = offset >>> 0;
        byteLength2 = byteLength2 >>> 0;
        if (!noAssert) {
          const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
          checkInt(this, value, offset, byteLength2, maxBytes, 0);
        }
        let mul = 1;
        let i4 = 0;
        this[offset] = value & 255;
        while (++i4 < byteLength2 && (mul *= 256)) {
          this[offset + i4] = value / mul & 255;
        }
        return offset + byteLength2;
      }, "writeUIntLE");
      Buffer3.prototype.writeUintBE = Buffer3.prototype.writeUIntBE = /* @__PURE__ */ __name(function writeUIntBE(value, offset, byteLength2, noAssert) {
        value = +value;
        offset = offset >>> 0;
        byteLength2 = byteLength2 >>> 0;
        if (!noAssert) {
          const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
          checkInt(this, value, offset, byteLength2, maxBytes, 0);
        }
        let i4 = byteLength2 - 1;
        let mul = 1;
        this[offset + i4] = value & 255;
        while (--i4 >= 0 && (mul *= 256)) {
          this[offset + i4] = value / mul & 255;
        }
        return offset + byteLength2;
      }, "writeUIntBE");
      Buffer3.prototype.writeUint8 = Buffer3.prototype.writeUInt8 = /* @__PURE__ */ __name(function writeUInt8(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 1, 255, 0);
        this[offset] = value & 255;
        return offset + 1;
      }, "writeUInt8");
      Buffer3.prototype.writeUint16LE = Buffer3.prototype.writeUInt16LE = /* @__PURE__ */ __name(function writeUInt16LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
        this[offset] = value & 255;
        this[offset + 1] = value >>> 8;
        return offset + 2;
      }, "writeUInt16LE");
      Buffer3.prototype.writeUint16BE = Buffer3.prototype.writeUInt16BE = /* @__PURE__ */ __name(function writeUInt16BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
        this[offset] = value >>> 8;
        this[offset + 1] = value & 255;
        return offset + 2;
      }, "writeUInt16BE");
      Buffer3.prototype.writeUint32LE = Buffer3.prototype.writeUInt32LE = /* @__PURE__ */ __name(function writeUInt32LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
        this[offset + 3] = value >>> 24;
        this[offset + 2] = value >>> 16;
        this[offset + 1] = value >>> 8;
        this[offset] = value & 255;
        return offset + 4;
      }, "writeUInt32LE");
      Buffer3.prototype.writeUint32BE = Buffer3.prototype.writeUInt32BE = /* @__PURE__ */ __name(function writeUInt32BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
        this[offset] = value >>> 24;
        this[offset + 1] = value >>> 16;
        this[offset + 2] = value >>> 8;
        this[offset + 3] = value & 255;
        return offset + 4;
      }, "writeUInt32BE");
      function wrtBigUInt64LE(buf, value, offset, min, max) {
        checkIntBI(value, min, max, buf, offset, 7);
        let lo4 = Number(value & BigInt(4294967295));
        buf[offset++] = lo4;
        lo4 = lo4 >> 8;
        buf[offset++] = lo4;
        lo4 = lo4 >> 8;
        buf[offset++] = lo4;
        lo4 = lo4 >> 8;
        buf[offset++] = lo4;
        let hi3 = Number(value >> BigInt(32) & BigInt(4294967295));
        buf[offset++] = hi3;
        hi3 = hi3 >> 8;
        buf[offset++] = hi3;
        hi3 = hi3 >> 8;
        buf[offset++] = hi3;
        hi3 = hi3 >> 8;
        buf[offset++] = hi3;
        return offset;
      }
      __name(wrtBigUInt64LE, "wrtBigUInt64LE");
      function wrtBigUInt64BE(buf, value, offset, min, max) {
        checkIntBI(value, min, max, buf, offset, 7);
        let lo4 = Number(value & BigInt(4294967295));
        buf[offset + 7] = lo4;
        lo4 = lo4 >> 8;
        buf[offset + 6] = lo4;
        lo4 = lo4 >> 8;
        buf[offset + 5] = lo4;
        lo4 = lo4 >> 8;
        buf[offset + 4] = lo4;
        let hi3 = Number(value >> BigInt(32) & BigInt(4294967295));
        buf[offset + 3] = hi3;
        hi3 = hi3 >> 8;
        buf[offset + 2] = hi3;
        hi3 = hi3 >> 8;
        buf[offset + 1] = hi3;
        hi3 = hi3 >> 8;
        buf[offset] = hi3;
        return offset + 8;
      }
      __name(wrtBigUInt64BE, "wrtBigUInt64BE");
      Buffer3.prototype.writeBigUInt64LE = defineBigIntMethod(/* @__PURE__ */ __name(function writeBigUInt64LE(value, offset = 0) {
        return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
      }, "writeBigUInt64LE"));
      Buffer3.prototype.writeBigUInt64BE = defineBigIntMethod(/* @__PURE__ */ __name(function writeBigUInt64BE(value, offset = 0) {
        return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
      }, "writeBigUInt64BE"));
      Buffer3.prototype.writeIntLE = /* @__PURE__ */ __name(function writeIntLE(value, offset, byteLength2, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
          const limit = Math.pow(2, 8 * byteLength2 - 1);
          checkInt(this, value, offset, byteLength2, limit - 1, -limit);
        }
        let i4 = 0;
        let mul = 1;
        let sub = 0;
        this[offset] = value & 255;
        while (++i4 < byteLength2 && (mul *= 256)) {
          if (value < 0 && sub === 0 && this[offset + i4 - 1] !== 0) {
            sub = 1;
          }
          this[offset + i4] = (value / mul >> 0) - sub & 255;
        }
        return offset + byteLength2;
      }, "writeIntLE");
      Buffer3.prototype.writeIntBE = /* @__PURE__ */ __name(function writeIntBE(value, offset, byteLength2, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
          const limit = Math.pow(2, 8 * byteLength2 - 1);
          checkInt(this, value, offset, byteLength2, limit - 1, -limit);
        }
        let i4 = byteLength2 - 1;
        let mul = 1;
        let sub = 0;
        this[offset + i4] = value & 255;
        while (--i4 >= 0 && (mul *= 256)) {
          if (value < 0 && sub === 0 && this[offset + i4 + 1] !== 0) {
            sub = 1;
          }
          this[offset + i4] = (value / mul >> 0) - sub & 255;
        }
        return offset + byteLength2;
      }, "writeIntBE");
      Buffer3.prototype.writeInt8 = /* @__PURE__ */ __name(function writeInt8(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 1, 127, -128);
        if (value < 0) value = 255 + value + 1;
        this[offset] = value & 255;
        return offset + 1;
      }, "writeInt8");
      Buffer3.prototype.writeInt16LE = /* @__PURE__ */ __name(function writeInt16LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
        this[offset] = value & 255;
        this[offset + 1] = value >>> 8;
        return offset + 2;
      }, "writeInt16LE");
      Buffer3.prototype.writeInt16BE = /* @__PURE__ */ __name(function writeInt16BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
        this[offset] = value >>> 8;
        this[offset + 1] = value & 255;
        return offset + 2;
      }, "writeInt16BE");
      Buffer3.prototype.writeInt32LE = /* @__PURE__ */ __name(function writeInt32LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
        this[offset] = value & 255;
        this[offset + 1] = value >>> 8;
        this[offset + 2] = value >>> 16;
        this[offset + 3] = value >>> 24;
        return offset + 4;
      }, "writeInt32LE");
      Buffer3.prototype.writeInt32BE = /* @__PURE__ */ __name(function writeInt32BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
        if (value < 0) value = 4294967295 + value + 1;
        this[offset] = value >>> 24;
        this[offset + 1] = value >>> 16;
        this[offset + 2] = value >>> 8;
        this[offset + 3] = value & 255;
        return offset + 4;
      }, "writeInt32BE");
      Buffer3.prototype.writeBigInt64LE = defineBigIntMethod(/* @__PURE__ */ __name(function writeBigInt64LE(value, offset = 0) {
        return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
      }, "writeBigInt64LE"));
      Buffer3.prototype.writeBigInt64BE = defineBigIntMethod(/* @__PURE__ */ __name(function writeBigInt64BE(value, offset = 0) {
        return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
      }, "writeBigInt64BE"));
      function checkIEEE754(buf, value, offset, ext, max, min) {
        if (offset + ext > buf.length) throw new RangeError("Index out of range");
        if (offset < 0) throw new RangeError("Index out of range");
      }
      __name(checkIEEE754, "checkIEEE754");
      function writeFloat(buf, value, offset, littleEndian, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
          checkIEEE754(buf, value, offset, 4, 34028234663852886e22, -34028234663852886e22);
        }
        ieee754.write(buf, value, offset, littleEndian, 23, 4);
        return offset + 4;
      }
      __name(writeFloat, "writeFloat");
      Buffer3.prototype.writeFloatLE = /* @__PURE__ */ __name(function writeFloatLE(value, offset, noAssert) {
        return writeFloat(this, value, offset, true, noAssert);
      }, "writeFloatLE");
      Buffer3.prototype.writeFloatBE = /* @__PURE__ */ __name(function writeFloatBE(value, offset, noAssert) {
        return writeFloat(this, value, offset, false, noAssert);
      }, "writeFloatBE");
      function writeDouble(buf, value, offset, littleEndian, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
          checkIEEE754(buf, value, offset, 8, 17976931348623157e292, -17976931348623157e292);
        }
        ieee754.write(buf, value, offset, littleEndian, 52, 8);
        return offset + 8;
      }
      __name(writeDouble, "writeDouble");
      Buffer3.prototype.writeDoubleLE = /* @__PURE__ */ __name(function writeDoubleLE(value, offset, noAssert) {
        return writeDouble(this, value, offset, true, noAssert);
      }, "writeDoubleLE");
      Buffer3.prototype.writeDoubleBE = /* @__PURE__ */ __name(function writeDoubleBE(value, offset, noAssert) {
        return writeDouble(this, value, offset, false, noAssert);
      }, "writeDoubleBE");
      Buffer3.prototype.copy = /* @__PURE__ */ __name(function copy(target, targetStart, start, end) {
        if (!Buffer3.isBuffer(target)) throw new TypeError("argument should be a Buffer");
        if (!start) start = 0;
        if (!end && end !== 0) end = this.length;
        if (targetStart >= target.length) targetStart = target.length;
        if (!targetStart) targetStart = 0;
        if (end > 0 && end < start) end = start;
        if (end === start) return 0;
        if (target.length === 0 || this.length === 0) return 0;
        if (targetStart < 0) {
          throw new RangeError("targetStart out of bounds");
        }
        if (start < 0 || start >= this.length) throw new RangeError("Index out of range");
        if (end < 0) throw new RangeError("sourceEnd out of bounds");
        if (end > this.length) end = this.length;
        if (target.length - targetStart < end - start) {
          end = target.length - targetStart + start;
        }
        const len = end - start;
        if (this === target && typeof Uint8Array.prototype.copyWithin === "function") {
          this.copyWithin(targetStart, start, end);
        } else {
          Uint8Array.prototype.set.call(
            target,
            this.subarray(start, end),
            targetStart
          );
        }
        return len;
      }, "copy");
      Buffer3.prototype.fill = /* @__PURE__ */ __name(function fill(val, start, end, encoding) {
        if (typeof val === "string") {
          if (typeof start === "string") {
            encoding = start;
            start = 0;
            end = this.length;
          } else if (typeof end === "string") {
            encoding = end;
            end = this.length;
          }
          if (encoding !== void 0 && typeof encoding !== "string") {
            throw new TypeError("encoding must be a string");
          }
          if (typeof encoding === "string" && !Buffer3.isEncoding(encoding)) {
            throw new TypeError("Unknown encoding: " + encoding);
          }
          if (val.length === 1) {
            const code2 = val.charCodeAt(0);
            if (encoding === "utf8" && code2 < 128 || encoding === "latin1") {
              val = code2;
            }
          }
        } else if (typeof val === "number") {
          val = val & 255;
        } else if (typeof val === "boolean") {
          val = Number(val);
        }
        if (start < 0 || this.length < start || this.length < end) {
          throw new RangeError("Out of range index");
        }
        if (end <= start) {
          return this;
        }
        start = start >>> 0;
        end = end === void 0 ? this.length : end >>> 0;
        if (!val) val = 0;
        let i4;
        if (typeof val === "number") {
          for (i4 = start; i4 < end; ++i4) {
            this[i4] = val;
          }
        } else {
          const bytes = Buffer3.isBuffer(val) ? val : Buffer3.from(val, encoding);
          const len = bytes.length;
          if (len === 0) {
            throw new TypeError('The value "' + val + '" is invalid for argument "value"');
          }
          for (i4 = 0; i4 < end - start; ++i4) {
            this[i4 + start] = bytes[i4 % len];
          }
        }
        return this;
      }, "fill");
      var errors = {};
      function E5(sym, getMessage, Base) {
        var _a3;
        errors[sym] = (_a3 = class extends Base {
          constructor() {
            super();
            Object.defineProperty(this, "message", {
              value: getMessage.apply(this, arguments),
              writable: true,
              configurable: true
            });
            this.name = `${this.name} [${sym}]`;
            this.stack;
            delete this.name;
          }
          get code() {
            return sym;
          }
          set code(value) {
            Object.defineProperty(this, "code", {
              configurable: true,
              enumerable: true,
              value,
              writable: true
            });
          }
          toString() {
            return `${this.name} [${sym}]: ${this.message}`;
          }
        }, __name(_a3, "NodeError"), _a3);
      }
      __name(E5, "E");
      E5(
        "ERR_BUFFER_OUT_OF_BOUNDS",
        function(name2) {
          if (name2) {
            return `${name2} is outside of buffer bounds`;
          }
          return "Attempt to access memory outside buffer bounds";
        },
        RangeError
      );
      E5(
        "ERR_INVALID_ARG_TYPE",
        function(name2, actual) {
          return `The "${name2}" argument must be of type number. Received type ${typeof actual}`;
        },
        TypeError
      );
      E5(
        "ERR_OUT_OF_RANGE",
        function(str, range, input) {
          let msg = `The value of "${str}" is out of range.`;
          let received = input;
          if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
            received = addNumericalSeparator(String(input));
          } else if (typeof input === "bigint") {
            received = String(input);
            if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
              received = addNumericalSeparator(received);
            }
            received += "n";
          }
          msg += ` It must be ${range}. Received ${received}`;
          return msg;
        },
        RangeError
      );
      function addNumericalSeparator(val) {
        let res = "";
        let i4 = val.length;
        const start = val[0] === "-" ? 1 : 0;
        for (; i4 >= start + 4; i4 -= 3) {
          res = `_${val.slice(i4 - 3, i4)}${res}`;
        }
        return `${val.slice(0, i4)}${res}`;
      }
      __name(addNumericalSeparator, "addNumericalSeparator");
      function checkBounds(buf, offset, byteLength2) {
        validateNumber(offset, "offset");
        if (buf[offset] === void 0 || buf[offset + byteLength2] === void 0) {
          boundsError(offset, buf.length - (byteLength2 + 1));
        }
      }
      __name(checkBounds, "checkBounds");
      function checkIntBI(value, min, max, buf, offset, byteLength2) {
        if (value > max || value < min) {
          const n5 = typeof min === "bigint" ? "n" : "";
          let range;
          if (byteLength2 > 3) {
            if (min === 0 || min === BigInt(0)) {
              range = `>= 0${n5} and < 2${n5} ** ${(byteLength2 + 1) * 8}${n5}`;
            } else {
              range = `>= -(2${n5} ** ${(byteLength2 + 1) * 8 - 1}${n5}) and < 2 ** ${(byteLength2 + 1) * 8 - 1}${n5}`;
            }
          } else {
            range = `>= ${min}${n5} and <= ${max}${n5}`;
          }
          throw new errors.ERR_OUT_OF_RANGE("value", range, value);
        }
        checkBounds(buf, offset, byteLength2);
      }
      __name(checkIntBI, "checkIntBI");
      function validateNumber(value, name2) {
        if (typeof value !== "number") {
          throw new errors.ERR_INVALID_ARG_TYPE(name2, "number", value);
        }
      }
      __name(validateNumber, "validateNumber");
      function boundsError(value, length2, type) {
        if (Math.floor(value) !== value) {
          validateNumber(value, type);
          throw new errors.ERR_OUT_OF_RANGE(type || "offset", "an integer", value);
        }
        if (length2 < 0) {
          throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
        }
        throw new errors.ERR_OUT_OF_RANGE(
          type || "offset",
          `>= ${type ? 1 : 0} and <= ${length2}`,
          value
        );
      }
      __name(boundsError, "boundsError");
      var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
      function base64clean(str) {
        str = str.split("=")[0];
        str = str.trim().replace(INVALID_BASE64_RE, "");
        if (str.length < 2) return "";
        while (str.length % 4 !== 0) {
          str = str + "=";
        }
        return str;
      }
      __name(base64clean, "base64clean");
      function utf8ToBytes2(string2, units) {
        units = units || Infinity;
        let codePoint;
        const length2 = string2.length;
        let leadSurrogate = null;
        const bytes = [];
        for (let i4 = 0; i4 < length2; ++i4) {
          codePoint = string2.charCodeAt(i4);
          if (codePoint > 55295 && codePoint < 57344) {
            if (!leadSurrogate) {
              if (codePoint > 56319) {
                if ((units -= 3) > -1) bytes.push(239, 191, 189);
                continue;
              } else if (i4 + 1 === length2) {
                if ((units -= 3) > -1) bytes.push(239, 191, 189);
                continue;
              }
              leadSurrogate = codePoint;
              continue;
            }
            if (codePoint < 56320) {
              if ((units -= 3) > -1) bytes.push(239, 191, 189);
              leadSurrogate = codePoint;
              continue;
            }
            codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
          } else if (leadSurrogate) {
            if ((units -= 3) > -1) bytes.push(239, 191, 189);
          }
          leadSurrogate = null;
          if (codePoint < 128) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
          } else if (codePoint < 2048) {
            if ((units -= 2) < 0) break;
            bytes.push(
              codePoint >> 6 | 192,
              codePoint & 63 | 128
            );
          } else if (codePoint < 65536) {
            if ((units -= 3) < 0) break;
            bytes.push(
              codePoint >> 12 | 224,
              codePoint >> 6 & 63 | 128,
              codePoint & 63 | 128
            );
          } else if (codePoint < 1114112) {
            if ((units -= 4) < 0) break;
            bytes.push(
              codePoint >> 18 | 240,
              codePoint >> 12 & 63 | 128,
              codePoint >> 6 & 63 | 128,
              codePoint & 63 | 128
            );
          } else {
            throw new Error("Invalid code point");
          }
        }
        return bytes;
      }
      __name(utf8ToBytes2, "utf8ToBytes");
      function asciiToBytes(str) {
        const byteArray = [];
        for (let i4 = 0; i4 < str.length; ++i4) {
          byteArray.push(str.charCodeAt(i4) & 255);
        }
        return byteArray;
      }
      __name(asciiToBytes, "asciiToBytes");
      function utf16leToBytes(str, units) {
        let c6, hi3, lo4;
        const byteArray = [];
        for (let i4 = 0; i4 < str.length; ++i4) {
          if ((units -= 2) < 0) break;
          c6 = str.charCodeAt(i4);
          hi3 = c6 >> 8;
          lo4 = c6 % 256;
          byteArray.push(lo4);
          byteArray.push(hi3);
        }
        return byteArray;
      }
      __name(utf16leToBytes, "utf16leToBytes");
      function base64ToBytes(str) {
        return base642.toByteArray(base64clean(str));
      }
      __name(base64ToBytes, "base64ToBytes");
      function blitBuffer(src2, dst, offset, length2) {
        let i4;
        for (i4 = 0; i4 < length2; ++i4) {
          if (i4 + offset >= dst.length || i4 >= src2.length) break;
          dst[i4 + offset] = src2[i4];
        }
        return i4;
      }
      __name(blitBuffer, "blitBuffer");
      function isInstance(obj, type) {
        return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
      }
      __name(isInstance, "isInstance");
      function numberIsNaN(obj) {
        return obj !== obj;
      }
      __name(numberIsNaN, "numberIsNaN");
      var hexSliceLookupTable = (function() {
        const alphabet3 = "0123456789abcdef";
        const table = new Array(256);
        for (let i4 = 0; i4 < 16; ++i4) {
          const i16 = i4 * 16;
          for (let j7 = 0; j7 < 16; ++j7) {
            table[i16 + j7] = alphabet3[i4] + alphabet3[j7];
          }
        }
        return table;
      })();
      function defineBigIntMethod(fn3) {
        return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn3;
      }
      __name(defineBigIntMethod, "defineBigIntMethod");
      function BufferBigIntNotDefined() {
        throw new Error("BigInt not supported");
      }
      __name(BufferBigIntNotDefined, "BufferBigIntNotDefined");
    }
  });

  // node_modules/process/browser.js
  var require_browser = __commonJS({
    "node_modules/process/browser.js"(exports, module) {
      init_shims();
      var process3 = module.exports = {};
      var cachedSetTimeout;
      var cachedClearTimeout;
      function defaultSetTimout() {
        throw new Error("setTimeout has not been defined");
      }
      __name(defaultSetTimout, "defaultSetTimout");
      function defaultClearTimeout() {
        throw new Error("clearTimeout has not been defined");
      }
      __name(defaultClearTimeout, "defaultClearTimeout");
      (function() {
        try {
          if (typeof setTimeout === "function") {
            cachedSetTimeout = setTimeout;
          } else {
            cachedSetTimeout = defaultSetTimout;
          }
        } catch (e2) {
          cachedSetTimeout = defaultSetTimout;
        }
        try {
          if (typeof clearTimeout === "function") {
            cachedClearTimeout = clearTimeout;
          } else {
            cachedClearTimeout = defaultClearTimeout;
          }
        } catch (e2) {
          cachedClearTimeout = defaultClearTimeout;
        }
      })();
      function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) {
          return setTimeout(fun, 0);
        }
        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
          cachedSetTimeout = setTimeout;
          return setTimeout(fun, 0);
        }
        try {
          return cachedSetTimeout(fun, 0);
        } catch (e2) {
          try {
            return cachedSetTimeout.call(null, fun, 0);
          } catch (e3) {
            return cachedSetTimeout.call(this, fun, 0);
          }
        }
      }
      __name(runTimeout, "runTimeout");
      function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) {
          return clearTimeout(marker);
        }
        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
          cachedClearTimeout = clearTimeout;
          return clearTimeout(marker);
        }
        try {
          return cachedClearTimeout(marker);
        } catch (e2) {
          try {
            return cachedClearTimeout.call(null, marker);
          } catch (e3) {
            return cachedClearTimeout.call(this, marker);
          }
        }
      }
      __name(runClearTimeout, "runClearTimeout");
      var queue = [];
      var draining = false;
      var currentQueue;
      var queueIndex = -1;
      function cleanUpNextTick() {
        if (!draining || !currentQueue) {
          return;
        }
        draining = false;
        if (currentQueue.length) {
          queue = currentQueue.concat(queue);
        } else {
          queueIndex = -1;
        }
        if (queue.length) {
          drainQueue();
        }
      }
      __name(cleanUpNextTick, "cleanUpNextTick");
      function drainQueue() {
        if (draining) {
          return;
        }
        var timeout = runTimeout(cleanUpNextTick);
        draining = true;
        var len = queue.length;
        while (len) {
          currentQueue = queue;
          queue = [];
          while (++queueIndex < len) {
            if (currentQueue) {
              currentQueue[queueIndex].run();
            }
          }
          queueIndex = -1;
          len = queue.length;
        }
        currentQueue = null;
        draining = false;
        runClearTimeout(timeout);
      }
      __name(drainQueue, "drainQueue");
      process3.nextTick = function(fun) {
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1) {
          for (var i4 = 1; i4 < arguments.length; i4++) {
            args[i4 - 1] = arguments[i4];
          }
        }
        queue.push(new Item(fun, args));
        if (queue.length === 1 && !draining) {
          runTimeout(drainQueue);
        }
      };
      function Item(fun, array) {
        this.fun = fun;
        this.array = array;
      }
      __name(Item, "Item");
      Item.prototype.run = function() {
        this.fun.apply(null, this.array);
      };
      process3.title = "browser";
      process3.browser = true;
      process3.env = {};
      process3.argv = [];
      process3.version = "";
      process3.versions = {};
      function noop() {
      }
      __name(noop, "noop");
      process3.on = noop;
      process3.addListener = noop;
      process3.once = noop;
      process3.off = noop;
      process3.removeListener = noop;
      process3.removeAllListeners = noop;
      process3.emit = noop;
      process3.prependListener = noop;
      process3.prependOnceListener = noop;
      process3.listeners = function(name2) {
        return [];
      };
      process3.binding = function(name2) {
        throw new Error("process.binding is not supported");
      };
      process3.cwd = function() {
        return "/";
      };
      process3.chdir = function(dir) {
        throw new Error("process.chdir is not supported");
      };
      process3.umask = function() {
        return 0;
      };
    }
  });

  // src/shims.js
  var import_buffer, import_process;
  var init_shims = __esm({
    "src/shims.js"() {
      import_buffer = __toESM(require_buffer(), 1);
      import_process = __toESM(require_browser(), 1);
      BigInt.prototype.toJSON = function() {
        return this.toString();
      };
      if (typeof globalThis.process === "undefined") {
        globalThis.process = import_process.default;
      }
      if (typeof globalThis.Buffer === "undefined") {
        globalThis.Buffer = import_buffer.Buffer;
      }
    }
  });

  // node_modules/events/events.js
  var require_events = __commonJS({
    "node_modules/events/events.js"(exports, module) {
      "use strict";
      init_shims();
      var R4 = typeof Reflect === "object" ? Reflect : null;
      var ReflectApply = R4 && typeof R4.apply === "function" ? R4.apply : /* @__PURE__ */ __name(function ReflectApply2(target, receiver, args) {
        return Function.prototype.apply.call(target, receiver, args);
      }, "ReflectApply");
      var ReflectOwnKeys;
      if (R4 && typeof R4.ownKeys === "function") {
        ReflectOwnKeys = R4.ownKeys;
      } else if (Object.getOwnPropertySymbols) {
        ReflectOwnKeys = /* @__PURE__ */ __name(function ReflectOwnKeys2(target) {
          return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
        }, "ReflectOwnKeys");
      } else {
        ReflectOwnKeys = /* @__PURE__ */ __name(function ReflectOwnKeys2(target) {
          return Object.getOwnPropertyNames(target);
        }, "ReflectOwnKeys");
      }
      function ProcessEmitWarning(warning) {
        if (console && console.warn) console.warn(warning);
      }
      __name(ProcessEmitWarning, "ProcessEmitWarning");
      var NumberIsNaN = Number.isNaN || /* @__PURE__ */ __name(function NumberIsNaN2(value) {
        return value !== value;
      }, "NumberIsNaN");
      function EventEmitter() {
        EventEmitter.init.call(this);
      }
      __name(EventEmitter, "EventEmitter");
      module.exports = EventEmitter;
      module.exports.once = once;
      EventEmitter.EventEmitter = EventEmitter;
      EventEmitter.prototype._events = void 0;
      EventEmitter.prototype._eventsCount = 0;
      EventEmitter.prototype._maxListeners = void 0;
      var defaultMaxListeners = 10;
      function checkListener(listener) {
        if (typeof listener !== "function") {
          throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
        }
      }
      __name(checkListener, "checkListener");
      Object.defineProperty(EventEmitter, "defaultMaxListeners", {
        enumerable: true,
        get: /* @__PURE__ */ __name(function() {
          return defaultMaxListeners;
        }, "get"),
        set: /* @__PURE__ */ __name(function(arg) {
          if (typeof arg !== "number" || arg < 0 || NumberIsNaN(arg)) {
            throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + ".");
          }
          defaultMaxListeners = arg;
        }, "set")
      });
      EventEmitter.init = function() {
        if (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) {
          this._events = /* @__PURE__ */ Object.create(null);
          this._eventsCount = 0;
        }
        this._maxListeners = this._maxListeners || void 0;
      };
      EventEmitter.prototype.setMaxListeners = /* @__PURE__ */ __name(function setMaxListeners(n5) {
        if (typeof n5 !== "number" || n5 < 0 || NumberIsNaN(n5)) {
          throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n5 + ".");
        }
        this._maxListeners = n5;
        return this;
      }, "setMaxListeners");
      function _getMaxListeners(that) {
        if (that._maxListeners === void 0)
          return EventEmitter.defaultMaxListeners;
        return that._maxListeners;
      }
      __name(_getMaxListeners, "_getMaxListeners");
      EventEmitter.prototype.getMaxListeners = /* @__PURE__ */ __name(function getMaxListeners() {
        return _getMaxListeners(this);
      }, "getMaxListeners");
      EventEmitter.prototype.emit = /* @__PURE__ */ __name(function emit(type) {
        var args = [];
        for (var i4 = 1; i4 < arguments.length; i4++) args.push(arguments[i4]);
        var doError = type === "error";
        var events = this._events;
        if (events !== void 0)
          doError = doError && events.error === void 0;
        else if (!doError)
          return false;
        if (doError) {
          var er3;
          if (args.length > 0)
            er3 = args[0];
          if (er3 instanceof Error) {
            throw er3;
          }
          var err = new Error("Unhandled error." + (er3 ? " (" + er3.message + ")" : ""));
          err.context = er3;
          throw err;
        }
        var handler = events[type];
        if (handler === void 0)
          return false;
        if (typeof handler === "function") {
          ReflectApply(handler, this, args);
        } else {
          var len = handler.length;
          var listeners = arrayClone(handler, len);
          for (var i4 = 0; i4 < len; ++i4)
            ReflectApply(listeners[i4], this, args);
        }
        return true;
      }, "emit");
      function _addListener(target, type, listener, prepend) {
        var m3;
        var events;
        var existing;
        checkListener(listener);
        events = target._events;
        if (events === void 0) {
          events = target._events = /* @__PURE__ */ Object.create(null);
          target._eventsCount = 0;
        } else {
          if (events.newListener !== void 0) {
            target.emit(
              "newListener",
              type,
              listener.listener ? listener.listener : listener
            );
            events = target._events;
          }
          existing = events[type];
        }
        if (existing === void 0) {
          existing = events[type] = listener;
          ++target._eventsCount;
        } else {
          if (typeof existing === "function") {
            existing = events[type] = prepend ? [listener, existing] : [existing, listener];
          } else if (prepend) {
            existing.unshift(listener);
          } else {
            existing.push(listener);
          }
          m3 = _getMaxListeners(target);
          if (m3 > 0 && existing.length > m3 && !existing.warned) {
            existing.warned = true;
            var w4 = new Error("Possible EventEmitter memory leak detected. " + existing.length + " " + String(type) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            w4.name = "MaxListenersExceededWarning";
            w4.emitter = target;
            w4.type = type;
            w4.count = existing.length;
            ProcessEmitWarning(w4);
          }
        }
        return target;
      }
      __name(_addListener, "_addListener");
      EventEmitter.prototype.addListener = /* @__PURE__ */ __name(function addListener(type, listener) {
        return _addListener(this, type, listener, false);
      }, "addListener");
      EventEmitter.prototype.on = EventEmitter.prototype.addListener;
      EventEmitter.prototype.prependListener = /* @__PURE__ */ __name(function prependListener(type, listener) {
        return _addListener(this, type, listener, true);
      }, "prependListener");
      function onceWrapper() {
        if (!this.fired) {
          this.target.removeListener(this.type, this.wrapFn);
          this.fired = true;
          if (arguments.length === 0)
            return this.listener.call(this.target);
          return this.listener.apply(this.target, arguments);
        }
      }
      __name(onceWrapper, "onceWrapper");
      function _onceWrap(target, type, listener) {
        var state = { fired: false, wrapFn: void 0, target, type, listener };
        var wrapped = onceWrapper.bind(state);
        wrapped.listener = listener;
        state.wrapFn = wrapped;
        return wrapped;
      }
      __name(_onceWrap, "_onceWrap");
      EventEmitter.prototype.once = /* @__PURE__ */ __name(function once2(type, listener) {
        checkListener(listener);
        this.on(type, _onceWrap(this, type, listener));
        return this;
      }, "once");
      EventEmitter.prototype.prependOnceListener = /* @__PURE__ */ __name(function prependOnceListener(type, listener) {
        checkListener(listener);
        this.prependListener(type, _onceWrap(this, type, listener));
        return this;
      }, "prependOnceListener");
      EventEmitter.prototype.removeListener = /* @__PURE__ */ __name(function removeListener(type, listener) {
        var list, events, position, i4, originalListener;
        checkListener(listener);
        events = this._events;
        if (events === void 0)
          return this;
        list = events[type];
        if (list === void 0)
          return this;
        if (list === listener || list.listener === listener) {
          if (--this._eventsCount === 0)
            this._events = /* @__PURE__ */ Object.create(null);
          else {
            delete events[type];
            if (events.removeListener)
              this.emit("removeListener", type, list.listener || listener);
          }
        } else if (typeof list !== "function") {
          position = -1;
          for (i4 = list.length - 1; i4 >= 0; i4--) {
            if (list[i4] === listener || list[i4].listener === listener) {
              originalListener = list[i4].listener;
              position = i4;
              break;
            }
          }
          if (position < 0)
            return this;
          if (position === 0)
            list.shift();
          else {
            spliceOne(list, position);
          }
          if (list.length === 1)
            events[type] = list[0];
          if (events.removeListener !== void 0)
            this.emit("removeListener", type, originalListener || listener);
        }
        return this;
      }, "removeListener");
      EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
      EventEmitter.prototype.removeAllListeners = /* @__PURE__ */ __name(function removeAllListeners(type) {
        var listeners, events, i4;
        events = this._events;
        if (events === void 0)
          return this;
        if (events.removeListener === void 0) {
          if (arguments.length === 0) {
            this._events = /* @__PURE__ */ Object.create(null);
            this._eventsCount = 0;
          } else if (events[type] !== void 0) {
            if (--this._eventsCount === 0)
              this._events = /* @__PURE__ */ Object.create(null);
            else
              delete events[type];
          }
          return this;
        }
        if (arguments.length === 0) {
          var keys2 = Object.keys(events);
          var key;
          for (i4 = 0; i4 < keys2.length; ++i4) {
            key = keys2[i4];
            if (key === "removeListener") continue;
            this.removeAllListeners(key);
          }
          this.removeAllListeners("removeListener");
          this._events = /* @__PURE__ */ Object.create(null);
          this._eventsCount = 0;
          return this;
        }
        listeners = events[type];
        if (typeof listeners === "function") {
          this.removeListener(type, listeners);
        } else if (listeners !== void 0) {
          for (i4 = listeners.length - 1; i4 >= 0; i4--) {
            this.removeListener(type, listeners[i4]);
          }
        }
        return this;
      }, "removeAllListeners");
      function _listeners(target, type, unwrap) {
        var events = target._events;
        if (events === void 0)
          return [];
        var evlistener = events[type];
        if (evlistener === void 0)
          return [];
        if (typeof evlistener === "function")
          return unwrap ? [evlistener.listener || evlistener] : [evlistener];
        return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
      }
      __name(_listeners, "_listeners");
      EventEmitter.prototype.listeners = /* @__PURE__ */ __name(function listeners(type) {
        return _listeners(this, type, true);
      }, "listeners");
      EventEmitter.prototype.rawListeners = /* @__PURE__ */ __name(function rawListeners(type) {
        return _listeners(this, type, false);
      }, "rawListeners");
      EventEmitter.listenerCount = function(emitter, type) {
        if (typeof emitter.listenerCount === "function") {
          return emitter.listenerCount(type);
        } else {
          return listenerCount.call(emitter, type);
        }
      };
      EventEmitter.prototype.listenerCount = listenerCount;
      function listenerCount(type) {
        var events = this._events;
        if (events !== void 0) {
          var evlistener = events[type];
          if (typeof evlistener === "function") {
            return 1;
          } else if (evlistener !== void 0) {
            return evlistener.length;
          }
        }
        return 0;
      }
      __name(listenerCount, "listenerCount");
      EventEmitter.prototype.eventNames = /* @__PURE__ */ __name(function eventNames() {
        return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
      }, "eventNames");
      function arrayClone(arr, n5) {
        var copy = new Array(n5);
        for (var i4 = 0; i4 < n5; ++i4)
          copy[i4] = arr[i4];
        return copy;
      }
      __name(arrayClone, "arrayClone");
      function spliceOne(list, index) {
        for (; index + 1 < list.length; index++)
          list[index] = list[index + 1];
        list.pop();
      }
      __name(spliceOne, "spliceOne");
      function unwrapListeners(arr) {
        var ret = new Array(arr.length);
        for (var i4 = 0; i4 < ret.length; ++i4) {
          ret[i4] = arr[i4].listener || arr[i4];
        }
        return ret;
      }
      __name(unwrapListeners, "unwrapListeners");
      function once(emitter, name2) {
        return new Promise(function(resolve, reject) {
          function errorListener(err) {
            emitter.removeListener(name2, resolver);
            reject(err);
          }
          __name(errorListener, "errorListener");
          function resolver() {
            if (typeof emitter.removeListener === "function") {
              emitter.removeListener("error", errorListener);
            }
            resolve([].slice.call(arguments));
          }
          __name(resolver, "resolver");
          ;
          eventTargetAgnosticAddListener(emitter, name2, resolver, { once: true });
          if (name2 !== "error") {
            addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
          }
        });
      }
      __name(once, "once");
      function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
        if (typeof emitter.on === "function") {
          eventTargetAgnosticAddListener(emitter, "error", handler, flags);
        }
      }
      __name(addErrorHandlerIfEventEmitter, "addErrorHandlerIfEventEmitter");
      function eventTargetAgnosticAddListener(emitter, name2, listener, flags) {
        if (typeof emitter.on === "function") {
          if (flags.once) {
            emitter.once(name2, listener);
          } else {
            emitter.on(name2, listener);
          }
        } else if (typeof emitter.addEventListener === "function") {
          emitter.addEventListener(name2, /* @__PURE__ */ __name(function wrapListener(arg) {
            if (flags.once) {
              emitter.removeEventListener(name2, wrapListener);
            }
            listener(arg);
          }, "wrapListener"));
        } else {
          throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
        }
      }
      __name(eventTargetAgnosticAddListener, "eventTargetAgnosticAddListener");
    }
  });

  // node_modules/@walletconnect/time/node_modules/tslib/tslib.es6.js
  var tslib_es6_exports = {};
  __export(tslib_es6_exports, {
    __assign: () => __assign,
    __asyncDelegator: () => __asyncDelegator,
    __asyncGenerator: () => __asyncGenerator,
    __asyncValues: () => __asyncValues,
    __await: () => __await,
    __awaiter: () => __awaiter,
    __classPrivateFieldGet: () => __classPrivateFieldGet,
    __classPrivateFieldSet: () => __classPrivateFieldSet,
    __createBinding: () => __createBinding,
    __decorate: () => __decorate,
    __exportStar: () => __exportStar,
    __extends: () => __extends,
    __generator: () => __generator,
    __importDefault: () => __importDefault,
    __importStar: () => __importStar,
    __makeTemplateObject: () => __makeTemplateObject,
    __metadata: () => __metadata,
    __param: () => __param,
    __read: () => __read,
    __rest: () => __rest,
    __spread: () => __spread,
    __spreadArrays: () => __spreadArrays,
    __values: () => __values
  });
  function __extends(d4, b6) {
    extendStatics(d4, b6);
    function __2() {
      this.constructor = d4;
    }
    __name(__2, "__");
    d4.prototype = b6 === null ? Object.create(b6) : (__2.prototype = b6.prototype, new __2());
  }
  function __rest(s3, e2) {
    var t = {};
    for (var p5 in s3) if (Object.prototype.hasOwnProperty.call(s3, p5) && e2.indexOf(p5) < 0)
      t[p5] = s3[p5];
    if (s3 != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i4 = 0, p5 = Object.getOwnPropertySymbols(s3); i4 < p5.length; i4++) {
        if (e2.indexOf(p5[i4]) < 0 && Object.prototype.propertyIsEnumerable.call(s3, p5[i4]))
          t[p5[i4]] = s3[p5[i4]];
      }
    return t;
  }
  function __decorate(decorators, target, key, desc) {
    var c6 = arguments.length, r3 = c6 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d4;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r3 = Reflect.decorate(decorators, target, key, desc);
    else for (var i4 = decorators.length - 1; i4 >= 0; i4--) if (d4 = decorators[i4]) r3 = (c6 < 3 ? d4(r3) : c6 > 3 ? d4(target, key, r3) : d4(target, key)) || r3;
    return c6 > 3 && r3 && Object.defineProperty(target, key, r3), r3;
  }
  function __param(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  }
  function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
  }
  function __awaiter(thisArg, _arguments, P6, generator) {
    function adopt(value) {
      return value instanceof P6 ? value : new P6(function(resolve) {
        resolve(value);
      });
    }
    __name(adopt, "adopt");
    return new (P6 || (P6 = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e2) {
          reject(e2);
        }
      }
      __name(fulfilled, "fulfilled");
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e2) {
          reject(e2);
        }
      }
      __name(rejected, "rejected");
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      __name(step, "step");
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }
  function __generator(thisArg, body) {
    var _5 = { label: 0, sent: /* @__PURE__ */ __name(function() {
      if (t[0] & 1) throw t[1];
      return t[1];
    }, "sent"), trys: [], ops: [] }, f6, y5, t, g4;
    return g4 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g4[Symbol.iterator] = function() {
      return this;
    }), g4;
    function verb(n5) {
      return function(v6) {
        return step([n5, v6]);
      };
    }
    __name(verb, "verb");
    function step(op) {
      if (f6) throw new TypeError("Generator is already executing.");
      while (_5) try {
        if (f6 = 1, y5 && (t = op[0] & 2 ? y5["return"] : op[0] ? y5["throw"] || ((t = y5["return"]) && t.call(y5), 0) : y5.next) && !(t = t.call(y5, op[1])).done) return t;
        if (y5 = 0, t) op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _5.label++;
            return { value: op[1], done: false };
          case 5:
            _5.label++;
            y5 = op[1];
            op = [0];
            continue;
          case 7:
            op = _5.ops.pop();
            _5.trys.pop();
            continue;
          default:
            if (!(t = _5.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _5 = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _5.label = op[1];
              break;
            }
            if (op[0] === 6 && _5.label < t[1]) {
              _5.label = t[1];
              t = op;
              break;
            }
            if (t && _5.label < t[2]) {
              _5.label = t[2];
              _5.ops.push(op);
              break;
            }
            if (t[2]) _5.ops.pop();
            _5.trys.pop();
            continue;
        }
        op = body.call(thisArg, _5);
      } catch (e2) {
        op = [6, e2];
        y5 = 0;
      } finally {
        f6 = t = 0;
      }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
    __name(step, "step");
  }
  function __createBinding(o5, m3, k6, k22) {
    if (k22 === void 0) k22 = k6;
    o5[k22] = m3[k6];
  }
  function __exportStar(m3, exports) {
    for (var p5 in m3) if (p5 !== "default" && !exports.hasOwnProperty(p5)) exports[p5] = m3[p5];
  }
  function __values(o5) {
    var s3 = typeof Symbol === "function" && Symbol.iterator, m3 = s3 && o5[s3], i4 = 0;
    if (m3) return m3.call(o5);
    if (o5 && typeof o5.length === "number") return {
      next: /* @__PURE__ */ __name(function() {
        if (o5 && i4 >= o5.length) o5 = void 0;
        return { value: o5 && o5[i4++], done: !o5 };
      }, "next")
    };
    throw new TypeError(s3 ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function __read(o5, n5) {
    var m3 = typeof Symbol === "function" && o5[Symbol.iterator];
    if (!m3) return o5;
    var i4 = m3.call(o5), r3, ar4 = [], e2;
    try {
      while ((n5 === void 0 || n5-- > 0) && !(r3 = i4.next()).done) ar4.push(r3.value);
    } catch (error) {
      e2 = { error };
    } finally {
      try {
        if (r3 && !r3.done && (m3 = i4["return"])) m3.call(i4);
      } finally {
        if (e2) throw e2.error;
      }
    }
    return ar4;
  }
  function __spread() {
    for (var ar4 = [], i4 = 0; i4 < arguments.length; i4++)
      ar4 = ar4.concat(__read(arguments[i4]));
    return ar4;
  }
  function __spreadArrays() {
    for (var s3 = 0, i4 = 0, il = arguments.length; i4 < il; i4++) s3 += arguments[i4].length;
    for (var r3 = Array(s3), k6 = 0, i4 = 0; i4 < il; i4++)
      for (var a4 = arguments[i4], j7 = 0, jl = a4.length; j7 < jl; j7++, k6++)
        r3[k6] = a4[j7];
    return r3;
  }
  function __await(v6) {
    return this instanceof __await ? (this.v = v6, this) : new __await(v6);
  }
  function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g4 = generator.apply(thisArg, _arguments || []), i4, q3 = [];
    return i4 = {}, verb("next"), verb("throw"), verb("return"), i4[Symbol.asyncIterator] = function() {
      return this;
    }, i4;
    function verb(n5) {
      if (g4[n5]) i4[n5] = function(v6) {
        return new Promise(function(a4, b6) {
          q3.push([n5, v6, a4, b6]) > 1 || resume(n5, v6);
        });
      };
    }
    __name(verb, "verb");
    function resume(n5, v6) {
      try {
        step(g4[n5](v6));
      } catch (e2) {
        settle(q3[0][3], e2);
      }
    }
    __name(resume, "resume");
    function step(r3) {
      r3.value instanceof __await ? Promise.resolve(r3.value.v).then(fulfill, reject) : settle(q3[0][2], r3);
    }
    __name(step, "step");
    function fulfill(value) {
      resume("next", value);
    }
    __name(fulfill, "fulfill");
    function reject(value) {
      resume("throw", value);
    }
    __name(reject, "reject");
    function settle(f6, v6) {
      if (f6(v6), q3.shift(), q3.length) resume(q3[0][0], q3[0][1]);
    }
    __name(settle, "settle");
  }
  function __asyncDelegator(o5) {
    var i4, p5;
    return i4 = {}, verb("next"), verb("throw", function(e2) {
      throw e2;
    }), verb("return"), i4[Symbol.iterator] = function() {
      return this;
    }, i4;
    function verb(n5, f6) {
      i4[n5] = o5[n5] ? function(v6) {
        return (p5 = !p5) ? { value: __await(o5[n5](v6)), done: n5 === "return" } : f6 ? f6(v6) : v6;
      } : f6;
    }
    __name(verb, "verb");
  }
  function __asyncValues(o5) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m3 = o5[Symbol.asyncIterator], i4;
    return m3 ? m3.call(o5) : (o5 = typeof __values === "function" ? __values(o5) : o5[Symbol.iterator](), i4 = {}, verb("next"), verb("throw"), verb("return"), i4[Symbol.asyncIterator] = function() {
      return this;
    }, i4);
    function verb(n5) {
      i4[n5] = o5[n5] && function(v6) {
        return new Promise(function(resolve, reject) {
          v6 = o5[n5](v6), settle(resolve, reject, v6.done, v6.value);
        });
      };
    }
    __name(verb, "verb");
    function settle(resolve, reject, d4, v6) {
      Promise.resolve(v6).then(function(v7) {
        resolve({ value: v7, done: d4 });
      }, reject);
    }
    __name(settle, "settle");
  }
  function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, "raw", { value: raw });
    } else {
      cooked.raw = raw;
    }
    return cooked;
  }
  function __importStar(mod2) {
    if (mod2 && mod2.__esModule) return mod2;
    var result = {};
    if (mod2 != null) {
      for (var k6 in mod2) if (Object.hasOwnProperty.call(mod2, k6)) result[k6] = mod2[k6];
    }
    result.default = mod2;
    return result;
  }
  function __importDefault(mod2) {
    return mod2 && mod2.__esModule ? mod2 : { default: mod2 };
  }
  function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
      throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
  }
  function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
      throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
  }
  var extendStatics, __assign;
  var init_tslib_es6 = __esm({
    "node_modules/@walletconnect/time/node_modules/tslib/tslib.es6.js"() {
      init_shims();
      extendStatics = /* @__PURE__ */ __name(function(d4, b6) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d5, b7) {
          d5.__proto__ = b7;
        } || function(d5, b7) {
          for (var p5 in b7) if (b7.hasOwnProperty(p5)) d5[p5] = b7[p5];
        };
        return extendStatics(d4, b6);
      }, "extendStatics");
      __name(__extends, "__extends");
      __assign = /* @__PURE__ */ __name(function() {
        __assign = Object.assign || /* @__PURE__ */ __name(function __assign3(t) {
          for (var s3, i4 = 1, n5 = arguments.length; i4 < n5; i4++) {
            s3 = arguments[i4];
            for (var p5 in s3) if (Object.prototype.hasOwnProperty.call(s3, p5)) t[p5] = s3[p5];
          }
          return t;
        }, "__assign");
        return __assign.apply(this, arguments);
      }, "__assign");
      __name(__rest, "__rest");
      __name(__decorate, "__decorate");
      __name(__param, "__param");
      __name(__metadata, "__metadata");
      __name(__awaiter, "__awaiter");
      __name(__generator, "__generator");
      __name(__createBinding, "__createBinding");
      __name(__exportStar, "__exportStar");
      __name(__values, "__values");
      __name(__read, "__read");
      __name(__spread, "__spread");
      __name(__spreadArrays, "__spreadArrays");
      __name(__await, "__await");
      __name(__asyncGenerator, "__asyncGenerator");
      __name(__asyncDelegator, "__asyncDelegator");
      __name(__asyncValues, "__asyncValues");
      __name(__makeTemplateObject, "__makeTemplateObject");
      __name(__importStar, "__importStar");
      __name(__importDefault, "__importDefault");
      __name(__classPrivateFieldGet, "__classPrivateFieldGet");
      __name(__classPrivateFieldSet, "__classPrivateFieldSet");
    }
  });

  // node_modules/@walletconnect/time/dist/cjs/utils/delay.js
  var require_delay = __commonJS({
    "node_modules/@walletconnect/time/dist/cjs/utils/delay.js"(exports) {
      "use strict";
      init_shims();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.delay = void 0;
      function delay(timeout) {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(true);
          }, timeout);
        });
      }
      __name(delay, "delay");
      exports.delay = delay;
    }
  });

  // node_modules/@walletconnect/time/dist/cjs/constants/misc.js
  var require_misc = __commonJS({
    "node_modules/@walletconnect/time/dist/cjs/constants/misc.js"(exports) {
      "use strict";
      init_shims();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ONE_THOUSAND = exports.ONE_HUNDRED = void 0;
      exports.ONE_HUNDRED = 100;
      exports.ONE_THOUSAND = 1e3;
    }
  });

  // node_modules/@walletconnect/time/dist/cjs/constants/time.js
  var require_time = __commonJS({
    "node_modules/@walletconnect/time/dist/cjs/constants/time.js"(exports) {
      "use strict";
      init_shims();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ONE_YEAR = exports.FOUR_WEEKS = exports.THREE_WEEKS = exports.TWO_WEEKS = exports.ONE_WEEK = exports.THIRTY_DAYS = exports.SEVEN_DAYS = exports.FIVE_DAYS = exports.THREE_DAYS = exports.ONE_DAY = exports.TWENTY_FOUR_HOURS = exports.TWELVE_HOURS = exports.SIX_HOURS = exports.THREE_HOURS = exports.ONE_HOUR = exports.SIXTY_MINUTES = exports.THIRTY_MINUTES = exports.TEN_MINUTES = exports.FIVE_MINUTES = exports.ONE_MINUTE = exports.SIXTY_SECONDS = exports.THIRTY_SECONDS = exports.TEN_SECONDS = exports.FIVE_SECONDS = exports.ONE_SECOND = void 0;
      exports.ONE_SECOND = 1;
      exports.FIVE_SECONDS = 5;
      exports.TEN_SECONDS = 10;
      exports.THIRTY_SECONDS = 30;
      exports.SIXTY_SECONDS = 60;
      exports.ONE_MINUTE = exports.SIXTY_SECONDS;
      exports.FIVE_MINUTES = exports.ONE_MINUTE * 5;
      exports.TEN_MINUTES = exports.ONE_MINUTE * 10;
      exports.THIRTY_MINUTES = exports.ONE_MINUTE * 30;
      exports.SIXTY_MINUTES = exports.ONE_MINUTE * 60;
      exports.ONE_HOUR = exports.SIXTY_MINUTES;
      exports.THREE_HOURS = exports.ONE_HOUR * 3;
      exports.SIX_HOURS = exports.ONE_HOUR * 6;
      exports.TWELVE_HOURS = exports.ONE_HOUR * 12;
      exports.TWENTY_FOUR_HOURS = exports.ONE_HOUR * 24;
      exports.ONE_DAY = exports.TWENTY_FOUR_HOURS;
      exports.THREE_DAYS = exports.ONE_DAY * 3;
      exports.FIVE_DAYS = exports.ONE_DAY * 5;
      exports.SEVEN_DAYS = exports.ONE_DAY * 7;
      exports.THIRTY_DAYS = exports.ONE_DAY * 30;
      exports.ONE_WEEK = exports.SEVEN_DAYS;
      exports.TWO_WEEKS = exports.ONE_WEEK * 2;
      exports.THREE_WEEKS = exports.ONE_WEEK * 3;
      exports.FOUR_WEEKS = exports.ONE_WEEK * 4;
      exports.ONE_YEAR = exports.ONE_DAY * 365;
    }
  });

  // node_modules/@walletconnect/time/dist/cjs/constants/index.js
  var require_constants = __commonJS({
    "node_modules/@walletconnect/time/dist/cjs/constants/index.js"(exports) {
      "use strict";
      init_shims();
      Object.defineProperty(exports, "__esModule", { value: true });
      var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
      tslib_1.__exportStar(require_misc(), exports);
      tslib_1.__exportStar(require_time(), exports);
    }
  });

  // node_modules/@walletconnect/time/dist/cjs/utils/convert.js
  var require_convert = __commonJS({
    "node_modules/@walletconnect/time/dist/cjs/utils/convert.js"(exports) {
      "use strict";
      init_shims();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.fromMiliseconds = exports.toMiliseconds = void 0;
      var constants_1 = require_constants();
      function toMiliseconds(seconds) {
        return seconds * constants_1.ONE_THOUSAND;
      }
      __name(toMiliseconds, "toMiliseconds");
      exports.toMiliseconds = toMiliseconds;
      function fromMiliseconds(miliseconds) {
        return Math.floor(miliseconds / constants_1.ONE_THOUSAND);
      }
      __name(fromMiliseconds, "fromMiliseconds");
      exports.fromMiliseconds = fromMiliseconds;
    }
  });

  // node_modules/@walletconnect/time/dist/cjs/utils/index.js
  var require_utils = __commonJS({
    "node_modules/@walletconnect/time/dist/cjs/utils/index.js"(exports) {
      "use strict";
      init_shims();
      Object.defineProperty(exports, "__esModule", { value: true });
      var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
      tslib_1.__exportStar(require_delay(), exports);
      tslib_1.__exportStar(require_convert(), exports);
    }
  });

  // node_modules/@walletconnect/time/dist/cjs/watch.js
  var require_watch = __commonJS({
    "node_modules/@walletconnect/time/dist/cjs/watch.js"(exports) {
      "use strict";
      init_shims();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Watch = void 0;
      var _Watch = class _Watch {
        constructor() {
          this.timestamps = /* @__PURE__ */ new Map();
        }
        start(label) {
          if (this.timestamps.has(label)) {
            throw new Error(`Watch already started for label: ${label}`);
          }
          this.timestamps.set(label, { started: Date.now() });
        }
        stop(label) {
          const timestamp = this.get(label);
          if (typeof timestamp.elapsed !== "undefined") {
            throw new Error(`Watch already stopped for label: ${label}`);
          }
          const elapsed = Date.now() - timestamp.started;
          this.timestamps.set(label, { started: timestamp.started, elapsed });
        }
        get(label) {
          const timestamp = this.timestamps.get(label);
          if (typeof timestamp === "undefined") {
            throw new Error(`No timestamp found for label: ${label}`);
          }
          return timestamp;
        }
        elapsed(label) {
          const timestamp = this.get(label);
          const elapsed = timestamp.elapsed || Date.now() - timestamp.started;
          return elapsed;
        }
      };
      __name(_Watch, "Watch");
      var Watch = _Watch;
      exports.Watch = Watch;
      exports.default = Watch;
    }
  });

  // node_modules/@walletconnect/time/dist/cjs/types/watch.js
  var require_watch2 = __commonJS({
    "node_modules/@walletconnect/time/dist/cjs/types/watch.js"(exports) {
      "use strict";
      init_shims();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.IWatch = void 0;
      var _IWatch = class _IWatch {
      };
      __name(_IWatch, "IWatch");
      var IWatch = _IWatch;
      exports.IWatch = IWatch;
    }
  });

  // node_modules/@walletconnect/time/dist/cjs/types/index.js
  var require_types = __commonJS({
    "node_modules/@walletconnect/time/dist/cjs/types/index.js"(exports) {
      "use strict";
      init_shims();
      Object.defineProperty(exports, "__esModule", { value: true });
      var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
      tslib_1.__exportStar(require_watch2(), exports);
    }
  });

  // node_modules/@walletconnect/time/dist/cjs/index.js
  var require_cjs = __commonJS({
    "node_modules/@walletconnect/time/dist/cjs/index.js"(exports) {
      "use strict";
      init_shims();
      Object.defineProperty(exports, "__esModule", { value: true });
      var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
      tslib_1.__exportStar(require_utils(), exports);
      tslib_1.__exportStar(require_watch(), exports);
      tslib_1.__exportStar(require_types(), exports);
      tslib_1.__exportStar(require_constants(), exports);
    }
  });

  // node_modules/quick-format-unescaped/index.js
  var require_quick_format_unescaped = __commonJS({
    "node_modules/quick-format-unescaped/index.js"(exports, module) {
      "use strict";
      init_shims();
      function tryStringify(o5) {
        try {
          return JSON.stringify(o5);
        } catch (e2) {
          return '"[Circular]"';
        }
      }
      __name(tryStringify, "tryStringify");
      module.exports = format;
      function format(f6, args, opts) {
        var ss2 = opts && opts.stringify || tryStringify;
        var offset = 1;
        if (typeof f6 === "object" && f6 !== null) {
          var len = args.length + offset;
          if (len === 1) return f6;
          var objects = new Array(len);
          objects[0] = ss2(f6);
          for (var index = 1; index < len; index++) {
            objects[index] = ss2(args[index]);
          }
          return objects.join(" ");
        }
        if (typeof f6 !== "string") {
          return f6;
        }
        var argLen = args.length;
        if (argLen === 0) return f6;
        var str = "";
        var a4 = 1 - offset;
        var lastPos = -1;
        var flen = f6 && f6.length || 0;
        for (var i4 = 0; i4 < flen; ) {
          if (f6.charCodeAt(i4) === 37 && i4 + 1 < flen) {
            lastPos = lastPos > -1 ? lastPos : 0;
            switch (f6.charCodeAt(i4 + 1)) {
              case 100:
              // 'd'
              case 102:
                if (a4 >= argLen)
                  break;
                if (args[a4] == null) break;
                if (lastPos < i4)
                  str += f6.slice(lastPos, i4);
                str += Number(args[a4]);
                lastPos = i4 + 2;
                i4++;
                break;
              case 105:
                if (a4 >= argLen)
                  break;
                if (args[a4] == null) break;
                if (lastPos < i4)
                  str += f6.slice(lastPos, i4);
                str += Math.floor(Number(args[a4]));
                lastPos = i4 + 2;
                i4++;
                break;
              case 79:
              // 'O'
              case 111:
              // 'o'
              case 106:
                if (a4 >= argLen)
                  break;
                if (args[a4] === void 0) break;
                if (lastPos < i4)
                  str += f6.slice(lastPos, i4);
                var type = typeof args[a4];
                if (type === "string") {
                  str += "'" + args[a4] + "'";
                  lastPos = i4 + 2;
                  i4++;
                  break;
                }
                if (type === "function") {
                  str += args[a4].name || "<anonymous>";
                  lastPos = i4 + 2;
                  i4++;
                  break;
                }
                str += ss2(args[a4]);
                lastPos = i4 + 2;
                i4++;
                break;
              case 115:
                if (a4 >= argLen)
                  break;
                if (lastPos < i4)
                  str += f6.slice(lastPos, i4);
                str += String(args[a4]);
                lastPos = i4 + 2;
                i4++;
                break;
              case 37:
                if (lastPos < i4)
                  str += f6.slice(lastPos, i4);
                str += "%";
                lastPos = i4 + 2;
                i4++;
                a4--;
                break;
            }
            ++a4;
          }
          ++i4;
        }
        if (lastPos === -1)
          return f6;
        else if (lastPos < flen) {
          str += f6.slice(lastPos);
        }
        return str;
      }
      __name(format, "format");
    }
  });

  // node_modules/pino/browser.js
  var require_browser2 = __commonJS({
    "node_modules/pino/browser.js"(exports, module) {
      "use strict";
      init_shims();
      var format = require_quick_format_unescaped();
      module.exports = pino;
      var _console = pfGlobalThisOrFallback().console || {};
      var stdSerializers = {
        mapHttpRequest: mock,
        mapHttpResponse: mock,
        wrapRequestSerializer: passthrough,
        wrapResponseSerializer: passthrough,
        wrapErrorSerializer: passthrough,
        req: mock,
        res: mock,
        err: asErrValue,
        errWithCause: asErrValue
      };
      function levelToValue(level, logger) {
        return level === "silent" ? Infinity : logger.levels.values[level];
      }
      __name(levelToValue, "levelToValue");
      var baseLogFunctionSymbol = Symbol("pino.logFuncs");
      var hierarchySymbol = Symbol("pino.hierarchy");
      var logFallbackMap = {
        error: "log",
        fatal: "error",
        warn: "error",
        info: "log",
        debug: "log",
        trace: "log"
      };
      function appendChildLogger(parentLogger, childLogger) {
        const newEntry = {
          logger: childLogger,
          parent: parentLogger[hierarchySymbol]
        };
        childLogger[hierarchySymbol] = newEntry;
      }
      __name(appendChildLogger, "appendChildLogger");
      function setupBaseLogFunctions(logger, levels, proto) {
        const logFunctions = {};
        levels.forEach((level) => {
          logFunctions[level] = proto[level] ? proto[level] : _console[level] || _console[logFallbackMap[level] || "log"] || noop;
        });
        logger[baseLogFunctionSymbol] = logFunctions;
      }
      __name(setupBaseLogFunctions, "setupBaseLogFunctions");
      function shouldSerialize(serialize, serializers) {
        if (Array.isArray(serialize)) {
          const hasToFilter = serialize.filter(function(k6) {
            return k6 !== "!stdSerializers.err";
          });
          return hasToFilter;
        } else if (serialize === true) {
          return Object.keys(serializers);
        }
        return false;
      }
      __name(shouldSerialize, "shouldSerialize");
      function pino(opts) {
        opts = opts || {};
        opts.browser = opts.browser || {};
        const transmit2 = opts.browser.transmit;
        if (transmit2 && typeof transmit2.send !== "function") {
          throw Error("pino: transmit option must have a send function");
        }
        const proto = opts.browser.write || _console;
        if (opts.browser.write) opts.browser.asObject = true;
        const serializers = opts.serializers || {};
        const serialize = shouldSerialize(opts.browser.serialize, serializers);
        let stdErrSerialize = opts.browser.serialize;
        if (Array.isArray(opts.browser.serialize) && opts.browser.serialize.indexOf("!stdSerializers.err") > -1) stdErrSerialize = false;
        const customLevels = Object.keys(opts.customLevels || {});
        const levels = ["error", "fatal", "warn", "info", "debug", "trace"].concat(customLevels);
        if (typeof proto === "function") {
          levels.forEach(function(level2) {
            proto[level2] = proto;
          });
        }
        if (opts.enabled === false || opts.browser.disabled) opts.level = "silent";
        const level = opts.level || "info";
        const logger = Object.create(proto);
        if (!logger.log) logger.log = noop;
        setupBaseLogFunctions(logger, levels, proto);
        appendChildLogger({}, logger);
        Object.defineProperty(logger, "levelVal", {
          get: getLevelVal
        });
        Object.defineProperty(logger, "level", {
          get: getLevel,
          set: setLevel
        });
        const setOpts = {
          transmit: transmit2,
          serialize,
          asObject: opts.browser.asObject,
          asObjectBindingsOnly: opts.browser.asObjectBindingsOnly,
          formatters: opts.browser.formatters,
          levels,
          timestamp: getTimeFunction(opts),
          messageKey: opts.messageKey || "msg",
          onChild: opts.onChild || noop
        };
        logger.levels = getLevels(opts);
        logger.level = level;
        logger.isLevelEnabled = function(level2) {
          if (!this.levels.values[level2]) {
            return false;
          }
          return this.levels.values[level2] >= this.levels.values[this.level];
        };
        logger.setMaxListeners = logger.getMaxListeners = logger.emit = logger.addListener = logger.on = logger.prependListener = logger.once = logger.prependOnceListener = logger.removeListener = logger.removeAllListeners = logger.listeners = logger.listenerCount = logger.eventNames = logger.write = logger.flush = noop;
        logger.serializers = serializers;
        logger._serialize = serialize;
        logger._stdErrSerialize = stdErrSerialize;
        logger.child = function(...args) {
          return child.call(this, setOpts, ...args);
        };
        if (transmit2) logger._logEvent = createLogEventShape();
        function getLevelVal() {
          return levelToValue(this.level, this);
        }
        __name(getLevelVal, "getLevelVal");
        function getLevel() {
          return this._level;
        }
        __name(getLevel, "getLevel");
        function setLevel(level2) {
          if (level2 !== "silent" && !this.levels.values[level2]) {
            throw Error("unknown level " + level2);
          }
          this._level = level2;
          set2(this, setOpts, logger, "error");
          set2(this, setOpts, logger, "fatal");
          set2(this, setOpts, logger, "warn");
          set2(this, setOpts, logger, "info");
          set2(this, setOpts, logger, "debug");
          set2(this, setOpts, logger, "trace");
          customLevels.forEach((level3) => {
            set2(this, setOpts, logger, level3);
          });
        }
        __name(setLevel, "setLevel");
        function child(setOpts2, bindings, childOptions) {
          if (!bindings) {
            throw new Error("missing bindings for child Pino");
          }
          childOptions = childOptions || {};
          if (serialize && bindings.serializers) {
            childOptions.serializers = bindings.serializers;
          }
          const childOptionsSerializers = childOptions.serializers;
          if (serialize && childOptionsSerializers) {
            var childSerializers = Object.assign({}, serializers, childOptionsSerializers);
            var childSerialize = opts.browser.serialize === true ? Object.keys(childSerializers) : serialize;
            delete bindings.serializers;
            applySerializers([bindings], childSerialize, childSerializers, this._stdErrSerialize);
          }
          function Child(parent) {
            this._childLevel = (parent._childLevel | 0) + 1;
            this.bindings = bindings;
            if (childSerializers) {
              this.serializers = childSerializers;
              this._serialize = childSerialize;
            }
            if (transmit2) {
              this._logEvent = createLogEventShape(
                [].concat(parent._logEvent.bindings, bindings)
              );
            }
          }
          __name(Child, "Child");
          Child.prototype = this;
          const newLogger = new Child(this);
          appendChildLogger(this, newLogger);
          newLogger.child = function(...args) {
            return child.call(this, setOpts2, ...args);
          };
          newLogger.level = childOptions.level || this.level;
          setOpts2.onChild(newLogger);
          return newLogger;
        }
        __name(child, "child");
        return logger;
      }
      __name(pino, "pino");
      function getLevels(opts) {
        const customLevels = opts.customLevels || {};
        const values = Object.assign({}, pino.levels.values, customLevels);
        const labels = Object.assign({}, pino.levels.labels, invertObject(customLevels));
        return {
          values,
          labels
        };
      }
      __name(getLevels, "getLevels");
      function invertObject(obj) {
        const inverted = {};
        Object.keys(obj).forEach(function(key) {
          inverted[obj[key]] = key;
        });
        return inverted;
      }
      __name(invertObject, "invertObject");
      pino.levels = {
        values: {
          fatal: 60,
          error: 50,
          warn: 40,
          info: 30,
          debug: 20,
          trace: 10
        },
        labels: {
          10: "trace",
          20: "debug",
          30: "info",
          40: "warn",
          50: "error",
          60: "fatal"
        }
      };
      pino.stdSerializers = stdSerializers;
      pino.stdTimeFunctions = Object.assign({}, { nullTime, epochTime, unixTime, isoTime });
      function getBindingChain(logger) {
        const bindings = [];
        if (logger.bindings) {
          bindings.push(logger.bindings);
        }
        let hierarchy = logger[hierarchySymbol];
        while (hierarchy.parent) {
          hierarchy = hierarchy.parent;
          if (hierarchy.logger.bindings) {
            bindings.push(hierarchy.logger.bindings);
          }
        }
        return bindings.reverse();
      }
      __name(getBindingChain, "getBindingChain");
      function set2(self2, opts, rootLogger, level) {
        Object.defineProperty(self2, level, {
          value: levelToValue(self2.level, rootLogger) > levelToValue(level, rootLogger) ? noop : rootLogger[baseLogFunctionSymbol][level],
          writable: true,
          enumerable: true,
          configurable: true
        });
        if (self2[level] === noop) {
          if (!opts.transmit) return;
          const transmitLevel = opts.transmit.level || self2.level;
          const transmitValue = levelToValue(transmitLevel, rootLogger);
          const methodValue = levelToValue(level, rootLogger);
          if (methodValue < transmitValue) return;
        }
        self2[level] = createWrap(self2, opts, rootLogger, level);
        const bindings = getBindingChain(self2);
        if (bindings.length === 0) {
          return;
        }
        self2[level] = prependBindingsInArguments(bindings, self2[level]);
      }
      __name(set2, "set");
      function prependBindingsInArguments(bindings, logFunc) {
        return function() {
          return logFunc.apply(this, [...bindings, ...arguments]);
        };
      }
      __name(prependBindingsInArguments, "prependBindingsInArguments");
      function createWrap(self2, opts, rootLogger, level) {
        return /* @__PURE__ */ (function(write) {
          return /* @__PURE__ */ __name(function LOG() {
            const ts2 = opts.timestamp();
            const args = new Array(arguments.length);
            const proto = Object.getPrototypeOf && Object.getPrototypeOf(this) === _console ? _console : this;
            for (var i4 = 0; i4 < args.length; i4++) args[i4] = arguments[i4];
            var argsIsSerialized = false;
            if (opts.serialize) {
              applySerializers(args, this._serialize, this.serializers, this._stdErrSerialize);
              argsIsSerialized = true;
            }
            if (opts.asObject || opts.formatters) {
              write.call(proto, ...asObject(this, level, args, ts2, opts));
            } else write.apply(proto, args);
            if (opts.transmit) {
              const transmitLevel = opts.transmit.level || self2._level;
              const transmitValue = levelToValue(transmitLevel, rootLogger);
              const methodValue = levelToValue(level, rootLogger);
              if (methodValue < transmitValue) return;
              transmit(this, {
                ts: ts2,
                methodLevel: level,
                methodValue,
                transmitLevel,
                transmitValue: rootLogger.levels.values[opts.transmit.level || self2._level],
                send: opts.transmit.send,
                val: levelToValue(self2._level, rootLogger)
              }, args, argsIsSerialized);
            }
          }, "LOG");
        })(self2[baseLogFunctionSymbol][level]);
      }
      __name(createWrap, "createWrap");
      function asObject(logger, level, args, ts2, opts) {
        const {
          level: levelFormatter,
          log: logObjectFormatter = /* @__PURE__ */ __name((obj) => obj, "logObjectFormatter")
        } = opts.formatters || {};
        const argsCloned = args.slice();
        let msg = argsCloned[0];
        const logObject = {};
        let lvl = (logger._childLevel | 0) + 1;
        if (lvl < 1) lvl = 1;
        if (ts2) {
          logObject.time = ts2;
        }
        if (levelFormatter) {
          const formattedLevel = levelFormatter(level, logger.levels.values[level]);
          Object.assign(logObject, formattedLevel);
        } else {
          logObject.level = logger.levels.values[level];
        }
        if (opts.asObjectBindingsOnly) {
          if (msg !== null && typeof msg === "object") {
            while (lvl-- && typeof argsCloned[0] === "object") {
              Object.assign(logObject, argsCloned.shift());
            }
          }
          const formattedLogObject = logObjectFormatter(logObject);
          return [formattedLogObject, ...argsCloned];
        } else {
          if (msg !== null && typeof msg === "object") {
            while (lvl-- && typeof argsCloned[0] === "object") {
              Object.assign(logObject, argsCloned.shift());
            }
            msg = argsCloned.length ? format(argsCloned.shift(), argsCloned) : void 0;
          } else if (typeof msg === "string") msg = format(argsCloned.shift(), argsCloned);
          if (msg !== void 0) logObject[opts.messageKey] = msg;
          const formattedLogObject = logObjectFormatter(logObject);
          return [formattedLogObject];
        }
      }
      __name(asObject, "asObject");
      function applySerializers(args, serialize, serializers, stdErrSerialize) {
        for (const i4 in args) {
          if (stdErrSerialize && args[i4] instanceof Error) {
            args[i4] = pino.stdSerializers.err(args[i4]);
          } else if (typeof args[i4] === "object" && !Array.isArray(args[i4]) && serialize) {
            for (const k6 in args[i4]) {
              if (serialize.indexOf(k6) > -1 && k6 in serializers) {
                args[i4][k6] = serializers[k6](args[i4][k6]);
              }
            }
          }
        }
      }
      __name(applySerializers, "applySerializers");
      function transmit(logger, opts, args, argsIsSerialized = false) {
        const send = opts.send;
        const ts2 = opts.ts;
        const methodLevel = opts.methodLevel;
        const methodValue = opts.methodValue;
        const val = opts.val;
        const bindings = logger._logEvent.bindings;
        if (!argsIsSerialized) {
          applySerializers(
            args,
            logger._serialize || Object.keys(logger.serializers),
            logger.serializers,
            logger._stdErrSerialize === void 0 ? true : logger._stdErrSerialize
          );
        }
        logger._logEvent.ts = ts2;
        logger._logEvent.messages = args.filter(function(arg) {
          return bindings.indexOf(arg) === -1;
        });
        logger._logEvent.level.label = methodLevel;
        logger._logEvent.level.value = methodValue;
        send(methodLevel, logger._logEvent, val);
        logger._logEvent = createLogEventShape(bindings);
      }
      __name(transmit, "transmit");
      function createLogEventShape(bindings) {
        return {
          ts: 0,
          messages: [],
          bindings: bindings || [],
          level: { label: "", value: 0 }
        };
      }
      __name(createLogEventShape, "createLogEventShape");
      function asErrValue(err) {
        const obj = {
          type: err.constructor.name,
          msg: err.message,
          stack: err.stack
        };
        for (const key in err) {
          if (obj[key] === void 0) {
            obj[key] = err[key];
          }
        }
        return obj;
      }
      __name(asErrValue, "asErrValue");
      function getTimeFunction(opts) {
        if (typeof opts.timestamp === "function") {
          return opts.timestamp;
        }
        if (opts.timestamp === false) {
          return nullTime;
        }
        return epochTime;
      }
      __name(getTimeFunction, "getTimeFunction");
      function mock() {
        return {};
      }
      __name(mock, "mock");
      function passthrough(a4) {
        return a4;
      }
      __name(passthrough, "passthrough");
      function noop() {
      }
      __name(noop, "noop");
      function nullTime() {
        return false;
      }
      __name(nullTime, "nullTime");
      function epochTime() {
        return Date.now();
      }
      __name(epochTime, "epochTime");
      function unixTime() {
        return Math.round(Date.now() / 1e3);
      }
      __name(unixTime, "unixTime");
      function isoTime() {
        return new Date(Date.now()).toISOString();
      }
      __name(isoTime, "isoTime");
      function pfGlobalThisOrFallback() {
        function defd(o5) {
          return typeof o5 !== "undefined" && o5;
        }
        __name(defd, "defd");
        try {
          if (typeof globalThis !== "undefined") return globalThis;
          Object.defineProperty(Object.prototype, "globalThis", {
            get: /* @__PURE__ */ __name(function() {
              delete Object.prototype.globalThis;
              return this.globalThis = this;
            }, "get"),
            configurable: true
          });
          return globalThis;
        } catch (e2) {
          return defd(self) || defd(window) || defd(this) || {};
        }
      }
      __name(pfGlobalThisOrFallback, "pfGlobalThisOrFallback");
      module.exports.default = pino;
      module.exports.pino = pino;
    }
  });

  // node_modules/@walletconnect/window-getters/dist/cjs/index.js
  var require_cjs2 = __commonJS({
    "node_modules/@walletconnect/window-getters/dist/cjs/index.js"(exports) {
      "use strict";
      init_shims();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getLocalStorage = exports.getLocalStorageOrThrow = exports.getCrypto = exports.getCryptoOrThrow = exports.getLocation = exports.getLocationOrThrow = exports.getNavigator = exports.getNavigatorOrThrow = exports.getDocument = exports.getDocumentOrThrow = exports.getFromWindowOrThrow = exports.getFromWindow = void 0;
      function getFromWindow(name2) {
        let res = void 0;
        if (typeof window !== "undefined" && typeof window[name2] !== "undefined") {
          res = window[name2];
        }
        return res;
      }
      __name(getFromWindow, "getFromWindow");
      exports.getFromWindow = getFromWindow;
      function getFromWindowOrThrow(name2) {
        const res = getFromWindow(name2);
        if (!res) {
          throw new Error(`${name2} is not defined in Window`);
        }
        return res;
      }
      __name(getFromWindowOrThrow, "getFromWindowOrThrow");
      exports.getFromWindowOrThrow = getFromWindowOrThrow;
      function getDocumentOrThrow() {
        return getFromWindowOrThrow("document");
      }
      __name(getDocumentOrThrow, "getDocumentOrThrow");
      exports.getDocumentOrThrow = getDocumentOrThrow;
      function getDocument() {
        return getFromWindow("document");
      }
      __name(getDocument, "getDocument");
      exports.getDocument = getDocument;
      function getNavigatorOrThrow() {
        return getFromWindowOrThrow("navigator");
      }
      __name(getNavigatorOrThrow, "getNavigatorOrThrow");
      exports.getNavigatorOrThrow = getNavigatorOrThrow;
      function getNavigator() {
        return getFromWindow("navigator");
      }
      __name(getNavigator, "getNavigator");
      exports.getNavigator = getNavigator;
      function getLocationOrThrow() {
        return getFromWindowOrThrow("location");
      }
      __name(getLocationOrThrow, "getLocationOrThrow");
      exports.getLocationOrThrow = getLocationOrThrow;
      function getLocation() {
        return getFromWindow("location");
      }
      __name(getLocation, "getLocation");
      exports.getLocation = getLocation;
      function getCryptoOrThrow() {
        return getFromWindowOrThrow("crypto");
      }
      __name(getCryptoOrThrow, "getCryptoOrThrow");
      exports.getCryptoOrThrow = getCryptoOrThrow;
      function getCrypto() {
        return getFromWindow("crypto");
      }
      __name(getCrypto, "getCrypto");
      exports.getCrypto = getCrypto;
      function getLocalStorageOrThrow() {
        return getFromWindowOrThrow("localStorage");
      }
      __name(getLocalStorageOrThrow, "getLocalStorageOrThrow");
      exports.getLocalStorageOrThrow = getLocalStorageOrThrow;
      function getLocalStorage() {
        return getFromWindow("localStorage");
      }
      __name(getLocalStorage, "getLocalStorage");
      exports.getLocalStorage = getLocalStorage;
    }
  });

  // node_modules/@walletconnect/window-metadata/dist/cjs/index.js
  var require_cjs3 = __commonJS({
    "node_modules/@walletconnect/window-metadata/dist/cjs/index.js"(exports) {
      "use strict";
      init_shims();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getWindowMetadata = void 0;
      var window_getters_1 = require_cjs2();
      function getWindowMetadata() {
        let doc;
        let loc;
        try {
          doc = window_getters_1.getDocumentOrThrow();
          loc = window_getters_1.getLocationOrThrow();
        } catch (e2) {
          return null;
        }
        function getIcons() {
          const links = doc.getElementsByTagName("link");
          const icons2 = [];
          for (let i4 = 0; i4 < links.length; i4++) {
            const link = links[i4];
            const rel = link.getAttribute("rel");
            if (rel) {
              if (rel.toLowerCase().indexOf("icon") > -1) {
                const href = link.getAttribute("href");
                if (href) {
                  if (href.toLowerCase().indexOf("https:") === -1 && href.toLowerCase().indexOf("http:") === -1 && href.indexOf("//") !== 0) {
                    let absoluteHref = loc.protocol + "//" + loc.host;
                    if (href.indexOf("/") === 0) {
                      absoluteHref += href;
                    } else {
                      const path = loc.pathname.split("/");
                      path.pop();
                      const finalPath = path.join("/");
                      absoluteHref += finalPath + "/" + href;
                    }
                    icons2.push(absoluteHref);
                  } else if (href.indexOf("//") === 0) {
                    const absoluteUrl = loc.protocol + href;
                    icons2.push(absoluteUrl);
                  } else {
                    icons2.push(href);
                  }
                }
              }
            }
          }
          return icons2;
        }
        __name(getIcons, "getIcons");
        function getWindowMetadataOfAny(...args) {
          const metaTags = doc.getElementsByTagName("meta");
          for (let i4 = 0; i4 < metaTags.length; i4++) {
            const tag = metaTags[i4];
            const attributes = ["itemprop", "property", "name"].map((target) => tag.getAttribute(target)).filter((attr) => {
              if (attr) {
                return args.includes(attr);
              }
              return false;
            });
            if (attributes.length && attributes) {
              const content = tag.getAttribute("content");
              if (content) {
                return content;
              }
            }
          }
          return "";
        }
        __name(getWindowMetadataOfAny, "getWindowMetadataOfAny");
        function getName() {
          let name3 = getWindowMetadataOfAny("name", "og:site_name", "og:title", "twitter:title");
          if (!name3) {
            name3 = doc.title;
          }
          return name3;
        }
        __name(getName, "getName");
        function getDescription() {
          const description2 = getWindowMetadataOfAny("description", "og:description", "twitter:description", "keywords");
          return description2;
        }
        __name(getDescription, "getDescription");
        const name2 = getName();
        const description = getDescription();
        const url = loc.origin;
        const icons = getIcons();
        const meta = {
          description,
          url,
          icons,
          name: name2
        };
        return meta;
      }
      __name(getWindowMetadata, "getWindowMetadata");
      exports.getWindowMetadata = getWindowMetadata;
    }
  });

  // node_modules/blakejs/util.js
  var require_util = __commonJS({
    "node_modules/blakejs/util.js"(exports, module) {
      init_shims();
      var ERROR_MSG_INPUT = "Input must be an string, Buffer or Uint8Array";
      function normalizeInput(input) {
        let ret;
        if (input instanceof Uint8Array) {
          ret = input;
        } else if (typeof input === "string") {
          const encoder2 = new TextEncoder();
          ret = encoder2.encode(input);
        } else {
          throw new Error(ERROR_MSG_INPUT);
        }
        return ret;
      }
      __name(normalizeInput, "normalizeInput");
      function toHex3(bytes) {
        return Array.prototype.map.call(bytes, function(n5) {
          return (n5 < 16 ? "0" : "") + n5.toString(16);
        }).join("");
      }
      __name(toHex3, "toHex");
      function uint32ToHex(val) {
        return (4294967296 + val).toString(16).substring(1);
      }
      __name(uint32ToHex, "uint32ToHex");
      function debugPrint(label, arr, size3) {
        let msg = "\n" + label + " = ";
        for (let i4 = 0; i4 < arr.length; i4 += 2) {
          if (size3 === 32) {
            msg += uint32ToHex(arr[i4]).toUpperCase();
            msg += " ";
            msg += uint32ToHex(arr[i4 + 1]).toUpperCase();
          } else if (size3 === 64) {
            msg += uint32ToHex(arr[i4 + 1]).toUpperCase();
            msg += uint32ToHex(arr[i4]).toUpperCase();
          } else throw new Error("Invalid size " + size3);
          if (i4 % 6 === 4) {
            msg += "\n" + new Array(label.length + 4).join(" ");
          } else if (i4 < arr.length - 2) {
            msg += " ";
          }
        }
        console.log(msg);
      }
      __name(debugPrint, "debugPrint");
      function testSpeed(hashFn, N12, M5) {
        let startMs = (/* @__PURE__ */ new Date()).getTime();
        const input = new Uint8Array(N12);
        for (let i4 = 0; i4 < N12; i4++) {
          input[i4] = i4 % 256;
        }
        const genMs = (/* @__PURE__ */ new Date()).getTime();
        console.log("Generated random input in " + (genMs - startMs) + "ms");
        startMs = genMs;
        for (let i4 = 0; i4 < M5; i4++) {
          const hashHex = hashFn(input);
          const hashMs = (/* @__PURE__ */ new Date()).getTime();
          const ms2 = hashMs - startMs;
          startMs = hashMs;
          console.log("Hashed in " + ms2 + "ms: " + hashHex.substring(0, 20) + "...");
          console.log(
            Math.round(N12 / (1 << 20) / (ms2 / 1e3) * 100) / 100 + " MB PER SECOND"
          );
        }
      }
      __name(testSpeed, "testSpeed");
      module.exports = {
        normalizeInput,
        toHex: toHex3,
        debugPrint,
        testSpeed
      };
    }
  });

  // node_modules/blakejs/blake2b.js
  var require_blake2b = __commonJS({
    "node_modules/blakejs/blake2b.js"(exports, module) {
      init_shims();
      var util = require_util();
      function ADD64AA(v7, a4, b6) {
        const o0 = v7[a4] + v7[b6];
        let o1 = v7[a4 + 1] + v7[b6 + 1];
        if (o0 >= 4294967296) {
          o1++;
        }
        v7[a4] = o0;
        v7[a4 + 1] = o1;
      }
      __name(ADD64AA, "ADD64AA");
      function ADD64AC(v7, a4, b0, b1) {
        let o0 = v7[a4] + b0;
        if (b0 < 0) {
          o0 += 4294967296;
        }
        let o1 = v7[a4 + 1] + b1;
        if (o0 >= 4294967296) {
          o1++;
        }
        v7[a4] = o0;
        v7[a4 + 1] = o1;
      }
      __name(ADD64AC, "ADD64AC");
      function B2B_GET32(arr, i4) {
        return arr[i4] ^ arr[i4 + 1] << 8 ^ arr[i4 + 2] << 16 ^ arr[i4 + 3] << 24;
      }
      __name(B2B_GET32, "B2B_GET32");
      function B2B_G(a4, b6, c6, d4, ix, iy) {
        const x0 = m3[ix];
        const x1 = m3[ix + 1];
        const y0 = m3[iy];
        const y1 = m3[iy + 1];
        ADD64AA(v6, a4, b6);
        ADD64AC(v6, a4, x0, x1);
        let xor0 = v6[d4] ^ v6[a4];
        let xor1 = v6[d4 + 1] ^ v6[a4 + 1];
        v6[d4] = xor1;
        v6[d4 + 1] = xor0;
        ADD64AA(v6, c6, d4);
        xor0 = v6[b6] ^ v6[c6];
        xor1 = v6[b6 + 1] ^ v6[c6 + 1];
        v6[b6] = xor0 >>> 24 ^ xor1 << 8;
        v6[b6 + 1] = xor1 >>> 24 ^ xor0 << 8;
        ADD64AA(v6, a4, b6);
        ADD64AC(v6, a4, y0, y1);
        xor0 = v6[d4] ^ v6[a4];
        xor1 = v6[d4 + 1] ^ v6[a4 + 1];
        v6[d4] = xor0 >>> 16 ^ xor1 << 16;
        v6[d4 + 1] = xor1 >>> 16 ^ xor0 << 16;
        ADD64AA(v6, c6, d4);
        xor0 = v6[b6] ^ v6[c6];
        xor1 = v6[b6 + 1] ^ v6[c6 + 1];
        v6[b6] = xor1 >>> 31 ^ xor0 << 1;
        v6[b6 + 1] = xor0 >>> 31 ^ xor1 << 1;
      }
      __name(B2B_G, "B2B_G");
      var BLAKE2B_IV32 = new Uint32Array([
        4089235720,
        1779033703,
        2227873595,
        3144134277,
        4271175723,
        1013904242,
        1595750129,
        2773480762,
        2917565137,
        1359893119,
        725511199,
        2600822924,
        4215389547,
        528734635,
        327033209,
        1541459225
      ]);
      var SIGMA8 = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        14,
        10,
        4,
        8,
        9,
        15,
        13,
        6,
        1,
        12,
        0,
        2,
        11,
        7,
        5,
        3,
        11,
        8,
        12,
        0,
        5,
        2,
        15,
        13,
        10,
        14,
        3,
        6,
        7,
        1,
        9,
        4,
        7,
        9,
        3,
        1,
        13,
        12,
        11,
        14,
        2,
        6,
        5,
        10,
        4,
        0,
        15,
        8,
        9,
        0,
        5,
        7,
        2,
        4,
        10,
        15,
        14,
        1,
        11,
        12,
        6,
        8,
        3,
        13,
        2,
        12,
        6,
        10,
        0,
        11,
        8,
        3,
        4,
        13,
        7,
        5,
        15,
        14,
        1,
        9,
        12,
        5,
        1,
        15,
        14,
        13,
        4,
        10,
        0,
        7,
        6,
        3,
        9,
        2,
        8,
        11,
        13,
        11,
        7,
        14,
        12,
        1,
        3,
        9,
        5,
        0,
        15,
        4,
        8,
        6,
        2,
        10,
        6,
        15,
        14,
        9,
        11,
        3,
        0,
        8,
        12,
        2,
        13,
        7,
        1,
        4,
        10,
        5,
        10,
        2,
        8,
        4,
        7,
        6,
        1,
        5,
        15,
        11,
        9,
        14,
        3,
        12,
        13,
        0,
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        14,
        10,
        4,
        8,
        9,
        15,
        13,
        6,
        1,
        12,
        0,
        2,
        11,
        7,
        5,
        3
      ];
      var SIGMA82 = new Uint8Array(
        SIGMA8.map(function(x6) {
          return x6 * 2;
        })
      );
      var v6 = new Uint32Array(32);
      var m3 = new Uint32Array(32);
      function blake2bCompress(ctx, last) {
        let i4 = 0;
        for (i4 = 0; i4 < 16; i4++) {
          v6[i4] = ctx.h[i4];
          v6[i4 + 16] = BLAKE2B_IV32[i4];
        }
        v6[24] = v6[24] ^ ctx.t;
        v6[25] = v6[25] ^ ctx.t / 4294967296;
        if (last) {
          v6[28] = ~v6[28];
          v6[29] = ~v6[29];
        }
        for (i4 = 0; i4 < 32; i4++) {
          m3[i4] = B2B_GET32(ctx.b, 4 * i4);
        }
        for (i4 = 0; i4 < 12; i4++) {
          B2B_G(0, 8, 16, 24, SIGMA82[i4 * 16 + 0], SIGMA82[i4 * 16 + 1]);
          B2B_G(2, 10, 18, 26, SIGMA82[i4 * 16 + 2], SIGMA82[i4 * 16 + 3]);
          B2B_G(4, 12, 20, 28, SIGMA82[i4 * 16 + 4], SIGMA82[i4 * 16 + 5]);
          B2B_G(6, 14, 22, 30, SIGMA82[i4 * 16 + 6], SIGMA82[i4 * 16 + 7]);
          B2B_G(0, 10, 20, 30, SIGMA82[i4 * 16 + 8], SIGMA82[i4 * 16 + 9]);
          B2B_G(2, 12, 22, 24, SIGMA82[i4 * 16 + 10], SIGMA82[i4 * 16 + 11]);
          B2B_G(4, 14, 16, 26, SIGMA82[i4 * 16 + 12], SIGMA82[i4 * 16 + 13]);
          B2B_G(6, 8, 18, 28, SIGMA82[i4 * 16 + 14], SIGMA82[i4 * 16 + 15]);
        }
        for (i4 = 0; i4 < 16; i4++) {
          ctx.h[i4] = ctx.h[i4] ^ v6[i4] ^ v6[i4 + 16];
        }
      }
      __name(blake2bCompress, "blake2bCompress");
      var parameterBlock = new Uint8Array([
        0,
        0,
        0,
        0,
        //  0: outlen, keylen, fanout, depth
        0,
        0,
        0,
        0,
        //  4: leaf length, sequential mode
        0,
        0,
        0,
        0,
        //  8: node offset
        0,
        0,
        0,
        0,
        // 12: node offset
        0,
        0,
        0,
        0,
        // 16: node depth, inner length, rfu
        0,
        0,
        0,
        0,
        // 20: rfu
        0,
        0,
        0,
        0,
        // 24: rfu
        0,
        0,
        0,
        0,
        // 28: rfu
        0,
        0,
        0,
        0,
        // 32: salt
        0,
        0,
        0,
        0,
        // 36: salt
        0,
        0,
        0,
        0,
        // 40: salt
        0,
        0,
        0,
        0,
        // 44: salt
        0,
        0,
        0,
        0,
        // 48: personal
        0,
        0,
        0,
        0,
        // 52: personal
        0,
        0,
        0,
        0,
        // 56: personal
        0,
        0,
        0,
        0
        // 60: personal
      ]);
      function blake2bInit(outlen, key, salt, personal) {
        if (outlen === 0 || outlen > 64) {
          throw new Error("Illegal output length, expected 0 < length <= 64");
        }
        if (key && key.length > 64) {
          throw new Error("Illegal key, expected Uint8Array with 0 < length <= 64");
        }
        if (salt && salt.length !== 16) {
          throw new Error("Illegal salt, expected Uint8Array with length is 16");
        }
        if (personal && personal.length !== 16) {
          throw new Error("Illegal personal, expected Uint8Array with length is 16");
        }
        const ctx = {
          b: new Uint8Array(128),
          h: new Uint32Array(16),
          t: 0,
          // input count
          c: 0,
          // pointer within buffer
          outlen
          // output length in bytes
        };
        parameterBlock.fill(0);
        parameterBlock[0] = outlen;
        if (key) parameterBlock[1] = key.length;
        parameterBlock[2] = 1;
        parameterBlock[3] = 1;
        if (salt) parameterBlock.set(salt, 32);
        if (personal) parameterBlock.set(personal, 48);
        for (let i4 = 0; i4 < 16; i4++) {
          ctx.h[i4] = BLAKE2B_IV32[i4] ^ B2B_GET32(parameterBlock, i4 * 4);
        }
        if (key) {
          blake2bUpdate(ctx, key);
          ctx.c = 128;
        }
        return ctx;
      }
      __name(blake2bInit, "blake2bInit");
      function blake2bUpdate(ctx, input) {
        for (let i4 = 0; i4 < input.length; i4++) {
          if (ctx.c === 128) {
            ctx.t += ctx.c;
            blake2bCompress(ctx, false);
            ctx.c = 0;
          }
          ctx.b[ctx.c++] = input[i4];
        }
      }
      __name(blake2bUpdate, "blake2bUpdate");
      function blake2bFinal(ctx) {
        ctx.t += ctx.c;
        while (ctx.c < 128) {
          ctx.b[ctx.c++] = 0;
        }
        blake2bCompress(ctx, true);
        const out = new Uint8Array(ctx.outlen);
        for (let i4 = 0; i4 < ctx.outlen; i4++) {
          out[i4] = ctx.h[i4 >> 2] >> 8 * (i4 & 3);
        }
        return out;
      }
      __name(blake2bFinal, "blake2bFinal");
      function blake2b(input, key, outlen, salt, personal) {
        outlen = outlen || 64;
        input = util.normalizeInput(input);
        if (salt) {
          salt = util.normalizeInput(salt);
        }
        if (personal) {
          personal = util.normalizeInput(personal);
        }
        const ctx = blake2bInit(outlen, key, salt, personal);
        blake2bUpdate(ctx, input);
        return blake2bFinal(ctx);
      }
      __name(blake2b, "blake2b");
      function blake2bHex(input, key, outlen, salt, personal) {
        const output = blake2b(input, key, outlen, salt, personal);
        return util.toHex(output);
      }
      __name(blake2bHex, "blake2bHex");
      module.exports = {
        blake2b,
        blake2bHex,
        blake2bInit,
        blake2bUpdate,
        blake2bFinal
      };
    }
  });

  // node_modules/blakejs/blake2s.js
  var require_blake2s = __commonJS({
    "node_modules/blakejs/blake2s.js"(exports, module) {
      init_shims();
      var util = require_util();
      function B2S_GET32(v7, i4) {
        return v7[i4] ^ v7[i4 + 1] << 8 ^ v7[i4 + 2] << 16 ^ v7[i4 + 3] << 24;
      }
      __name(B2S_GET32, "B2S_GET32");
      function B2S_G(a4, b6, c6, d4, x6, y5) {
        v6[a4] = v6[a4] + v6[b6] + x6;
        v6[d4] = ROTR32(v6[d4] ^ v6[a4], 16);
        v6[c6] = v6[c6] + v6[d4];
        v6[b6] = ROTR32(v6[b6] ^ v6[c6], 12);
        v6[a4] = v6[a4] + v6[b6] + y5;
        v6[d4] = ROTR32(v6[d4] ^ v6[a4], 8);
        v6[c6] = v6[c6] + v6[d4];
        v6[b6] = ROTR32(v6[b6] ^ v6[c6], 7);
      }
      __name(B2S_G, "B2S_G");
      function ROTR32(x6, y5) {
        return x6 >>> y5 ^ x6 << 32 - y5;
      }
      __name(ROTR32, "ROTR32");
      var BLAKE2S_IV = new Uint32Array([
        1779033703,
        3144134277,
        1013904242,
        2773480762,
        1359893119,
        2600822924,
        528734635,
        1541459225
      ]);
      var SIGMA = new Uint8Array([
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        14,
        10,
        4,
        8,
        9,
        15,
        13,
        6,
        1,
        12,
        0,
        2,
        11,
        7,
        5,
        3,
        11,
        8,
        12,
        0,
        5,
        2,
        15,
        13,
        10,
        14,
        3,
        6,
        7,
        1,
        9,
        4,
        7,
        9,
        3,
        1,
        13,
        12,
        11,
        14,
        2,
        6,
        5,
        10,
        4,
        0,
        15,
        8,
        9,
        0,
        5,
        7,
        2,
        4,
        10,
        15,
        14,
        1,
        11,
        12,
        6,
        8,
        3,
        13,
        2,
        12,
        6,
        10,
        0,
        11,
        8,
        3,
        4,
        13,
        7,
        5,
        15,
        14,
        1,
        9,
        12,
        5,
        1,
        15,
        14,
        13,
        4,
        10,
        0,
        7,
        6,
        3,
        9,
        2,
        8,
        11,
        13,
        11,
        7,
        14,
        12,
        1,
        3,
        9,
        5,
        0,
        15,
        4,
        8,
        6,
        2,
        10,
        6,
        15,
        14,
        9,
        11,
        3,
        0,
        8,
        12,
        2,
        13,
        7,
        1,
        4,
        10,
        5,
        10,
        2,
        8,
        4,
        7,
        6,
        1,
        5,
        15,
        11,
        9,
        14,
        3,
        12,
        13,
        0
      ]);
      var v6 = new Uint32Array(16);
      var m3 = new Uint32Array(16);
      function blake2sCompress(ctx, last) {
        let i4 = 0;
        for (i4 = 0; i4 < 8; i4++) {
          v6[i4] = ctx.h[i4];
          v6[i4 + 8] = BLAKE2S_IV[i4];
        }
        v6[12] ^= ctx.t;
        v6[13] ^= ctx.t / 4294967296;
        if (last) {
          v6[14] = ~v6[14];
        }
        for (i4 = 0; i4 < 16; i4++) {
          m3[i4] = B2S_GET32(ctx.b, 4 * i4);
        }
        for (i4 = 0; i4 < 10; i4++) {
          B2S_G(0, 4, 8, 12, m3[SIGMA[i4 * 16 + 0]], m3[SIGMA[i4 * 16 + 1]]);
          B2S_G(1, 5, 9, 13, m3[SIGMA[i4 * 16 + 2]], m3[SIGMA[i4 * 16 + 3]]);
          B2S_G(2, 6, 10, 14, m3[SIGMA[i4 * 16 + 4]], m3[SIGMA[i4 * 16 + 5]]);
          B2S_G(3, 7, 11, 15, m3[SIGMA[i4 * 16 + 6]], m3[SIGMA[i4 * 16 + 7]]);
          B2S_G(0, 5, 10, 15, m3[SIGMA[i4 * 16 + 8]], m3[SIGMA[i4 * 16 + 9]]);
          B2S_G(1, 6, 11, 12, m3[SIGMA[i4 * 16 + 10]], m3[SIGMA[i4 * 16 + 11]]);
          B2S_G(2, 7, 8, 13, m3[SIGMA[i4 * 16 + 12]], m3[SIGMA[i4 * 16 + 13]]);
          B2S_G(3, 4, 9, 14, m3[SIGMA[i4 * 16 + 14]], m3[SIGMA[i4 * 16 + 15]]);
        }
        for (i4 = 0; i4 < 8; i4++) {
          ctx.h[i4] ^= v6[i4] ^ v6[i4 + 8];
        }
      }
      __name(blake2sCompress, "blake2sCompress");
      function blake2sInit(outlen, key) {
        if (!(outlen > 0 && outlen <= 32)) {
          throw new Error("Incorrect output length, should be in [1, 32]");
        }
        const keylen = key ? key.length : 0;
        if (key && !(keylen > 0 && keylen <= 32)) {
          throw new Error("Incorrect key length, should be in [1, 32]");
        }
        const ctx = {
          h: new Uint32Array(BLAKE2S_IV),
          // hash state
          b: new Uint8Array(64),
          // input block
          c: 0,
          // pointer within block
          t: 0,
          // input count
          outlen
          // output length in bytes
        };
        ctx.h[0] ^= 16842752 ^ keylen << 8 ^ outlen;
        if (keylen > 0) {
          blake2sUpdate(ctx, key);
          ctx.c = 64;
        }
        return ctx;
      }
      __name(blake2sInit, "blake2sInit");
      function blake2sUpdate(ctx, input) {
        for (let i4 = 0; i4 < input.length; i4++) {
          if (ctx.c === 64) {
            ctx.t += ctx.c;
            blake2sCompress(ctx, false);
            ctx.c = 0;
          }
          ctx.b[ctx.c++] = input[i4];
        }
      }
      __name(blake2sUpdate, "blake2sUpdate");
      function blake2sFinal(ctx) {
        ctx.t += ctx.c;
        while (ctx.c < 64) {
          ctx.b[ctx.c++] = 0;
        }
        blake2sCompress(ctx, true);
        const out = new Uint8Array(ctx.outlen);
        for (let i4 = 0; i4 < ctx.outlen; i4++) {
          out[i4] = ctx.h[i4 >> 2] >> 8 * (i4 & 3) & 255;
        }
        return out;
      }
      __name(blake2sFinal, "blake2sFinal");
      function blake2s(input, key, outlen) {
        outlen = outlen || 32;
        input = util.normalizeInput(input);
        const ctx = blake2sInit(outlen, key);
        blake2sUpdate(ctx, input);
        return blake2sFinal(ctx);
      }
      __name(blake2s, "blake2s");
      function blake2sHex(input, key, outlen) {
        const output = blake2s(input, key, outlen);
        return util.toHex(output);
      }
      __name(blake2sHex, "blake2sHex");
      module.exports = {
        blake2s,
        blake2sHex,
        blake2sInit,
        blake2sUpdate,
        blake2sFinal
      };
    }
  });

  // node_modules/blakejs/index.js
  var require_blakejs = __commonJS({
    "node_modules/blakejs/index.js"(exports, module) {
      init_shims();
      var b2b = require_blake2b();
      var b2s = require_blake2s();
      module.exports = {
        blake2b: b2b.blake2b,
        blake2bHex: b2b.blake2bHex,
        blake2bInit: b2b.blake2bInit,
        blake2bUpdate: b2b.blake2bUpdate,
        blake2bFinal: b2b.blake2bFinal,
        blake2s: b2s.blake2s,
        blake2sHex: b2s.blake2sHex,
        blake2sInit: b2s.blake2sInit,
        blake2sUpdate: b2s.blake2sUpdate,
        blake2sFinal: b2s.blake2sFinal
      };
    }
  });

  // node_modules/@walletconnect/environment/node_modules/tslib/tslib.es6.js
  var tslib_es6_exports2 = {};
  __export(tslib_es6_exports2, {
    __assign: () => __assign2,
    __asyncDelegator: () => __asyncDelegator2,
    __asyncGenerator: () => __asyncGenerator2,
    __asyncValues: () => __asyncValues2,
    __await: () => __await2,
    __awaiter: () => __awaiter2,
    __classPrivateFieldGet: () => __classPrivateFieldGet2,
    __classPrivateFieldSet: () => __classPrivateFieldSet2,
    __createBinding: () => __createBinding2,
    __decorate: () => __decorate2,
    __exportStar: () => __exportStar2,
    __extends: () => __extends2,
    __generator: () => __generator2,
    __importDefault: () => __importDefault2,
    __importStar: () => __importStar2,
    __makeTemplateObject: () => __makeTemplateObject2,
    __metadata: () => __metadata2,
    __param: () => __param2,
    __read: () => __read2,
    __rest: () => __rest2,
    __spread: () => __spread2,
    __spreadArrays: () => __spreadArrays2,
    __values: () => __values2
  });
  function __extends2(d4, b6) {
    extendStatics2(d4, b6);
    function __2() {
      this.constructor = d4;
    }
    __name(__2, "__");
    d4.prototype = b6 === null ? Object.create(b6) : (__2.prototype = b6.prototype, new __2());
  }
  function __rest2(s3, e2) {
    var t = {};
    for (var p5 in s3) if (Object.prototype.hasOwnProperty.call(s3, p5) && e2.indexOf(p5) < 0)
      t[p5] = s3[p5];
    if (s3 != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i4 = 0, p5 = Object.getOwnPropertySymbols(s3); i4 < p5.length; i4++) {
        if (e2.indexOf(p5[i4]) < 0 && Object.prototype.propertyIsEnumerable.call(s3, p5[i4]))
          t[p5[i4]] = s3[p5[i4]];
      }
    return t;
  }
  function __decorate2(decorators, target, key, desc) {
    var c6 = arguments.length, r3 = c6 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d4;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r3 = Reflect.decorate(decorators, target, key, desc);
    else for (var i4 = decorators.length - 1; i4 >= 0; i4--) if (d4 = decorators[i4]) r3 = (c6 < 3 ? d4(r3) : c6 > 3 ? d4(target, key, r3) : d4(target, key)) || r3;
    return c6 > 3 && r3 && Object.defineProperty(target, key, r3), r3;
  }
  function __param2(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  }
  function __metadata2(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
  }
  function __awaiter2(thisArg, _arguments, P6, generator) {
    function adopt(value) {
      return value instanceof P6 ? value : new P6(function(resolve) {
        resolve(value);
      });
    }
    __name(adopt, "adopt");
    return new (P6 || (P6 = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e2) {
          reject(e2);
        }
      }
      __name(fulfilled, "fulfilled");
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e2) {
          reject(e2);
        }
      }
      __name(rejected, "rejected");
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      __name(step, "step");
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }
  function __generator2(thisArg, body) {
    var _5 = { label: 0, sent: /* @__PURE__ */ __name(function() {
      if (t[0] & 1) throw t[1];
      return t[1];
    }, "sent"), trys: [], ops: [] }, f6, y5, t, g4;
    return g4 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g4[Symbol.iterator] = function() {
      return this;
    }), g4;
    function verb(n5) {
      return function(v6) {
        return step([n5, v6]);
      };
    }
    __name(verb, "verb");
    function step(op) {
      if (f6) throw new TypeError("Generator is already executing.");
      while (_5) try {
        if (f6 = 1, y5 && (t = op[0] & 2 ? y5["return"] : op[0] ? y5["throw"] || ((t = y5["return"]) && t.call(y5), 0) : y5.next) && !(t = t.call(y5, op[1])).done) return t;
        if (y5 = 0, t) op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _5.label++;
            return { value: op[1], done: false };
          case 5:
            _5.label++;
            y5 = op[1];
            op = [0];
            continue;
          case 7:
            op = _5.ops.pop();
            _5.trys.pop();
            continue;
          default:
            if (!(t = _5.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _5 = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _5.label = op[1];
              break;
            }
            if (op[0] === 6 && _5.label < t[1]) {
              _5.label = t[1];
              t = op;
              break;
            }
            if (t && _5.label < t[2]) {
              _5.label = t[2];
              _5.ops.push(op);
              break;
            }
            if (t[2]) _5.ops.pop();
            _5.trys.pop();
            continue;
        }
        op = body.call(thisArg, _5);
      } catch (e2) {
        op = [6, e2];
        y5 = 0;
      } finally {
        f6 = t = 0;
      }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
    __name(step, "step");
  }
  function __createBinding2(o5, m3, k6, k22) {
    if (k22 === void 0) k22 = k6;
    o5[k22] = m3[k6];
  }
  function __exportStar2(m3, exports) {
    for (var p5 in m3) if (p5 !== "default" && !exports.hasOwnProperty(p5)) exports[p5] = m3[p5];
  }
  function __values2(o5) {
    var s3 = typeof Symbol === "function" && Symbol.iterator, m3 = s3 && o5[s3], i4 = 0;
    if (m3) return m3.call(o5);
    if (o5 && typeof o5.length === "number") return {
      next: /* @__PURE__ */ __name(function() {
        if (o5 && i4 >= o5.length) o5 = void 0;
        return { value: o5 && o5[i4++], done: !o5 };
      }, "next")
    };
    throw new TypeError(s3 ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function __read2(o5, n5) {
    var m3 = typeof Symbol === "function" && o5[Symbol.iterator];
    if (!m3) return o5;
    var i4 = m3.call(o5), r3, ar4 = [], e2;
    try {
      while ((n5 === void 0 || n5-- > 0) && !(r3 = i4.next()).done) ar4.push(r3.value);
    } catch (error) {
      e2 = { error };
    } finally {
      try {
        if (r3 && !r3.done && (m3 = i4["return"])) m3.call(i4);
      } finally {
        if (e2) throw e2.error;
      }
    }
    return ar4;
  }
  function __spread2() {
    for (var ar4 = [], i4 = 0; i4 < arguments.length; i4++)
      ar4 = ar4.concat(__read2(arguments[i4]));
    return ar4;
  }
  function __spreadArrays2() {
    for (var s3 = 0, i4 = 0, il = arguments.length; i4 < il; i4++) s3 += arguments[i4].length;
    for (var r3 = Array(s3), k6 = 0, i4 = 0; i4 < il; i4++)
      for (var a4 = arguments[i4], j7 = 0, jl = a4.length; j7 < jl; j7++, k6++)
        r3[k6] = a4[j7];
    return r3;
  }
  function __await2(v6) {
    return this instanceof __await2 ? (this.v = v6, this) : new __await2(v6);
  }
  function __asyncGenerator2(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g4 = generator.apply(thisArg, _arguments || []), i4, q3 = [];
    return i4 = {}, verb("next"), verb("throw"), verb("return"), i4[Symbol.asyncIterator] = function() {
      return this;
    }, i4;
    function verb(n5) {
      if (g4[n5]) i4[n5] = function(v6) {
        return new Promise(function(a4, b6) {
          q3.push([n5, v6, a4, b6]) > 1 || resume(n5, v6);
        });
      };
    }
    __name(verb, "verb");
    function resume(n5, v6) {
      try {
        step(g4[n5](v6));
      } catch (e2) {
        settle(q3[0][3], e2);
      }
    }
    __name(resume, "resume");
    function step(r3) {
      r3.value instanceof __await2 ? Promise.resolve(r3.value.v).then(fulfill, reject) : settle(q3[0][2], r3);
    }
    __name(step, "step");
    function fulfill(value) {
      resume("next", value);
    }
    __name(fulfill, "fulfill");
    function reject(value) {
      resume("throw", value);
    }
    __name(reject, "reject");
    function settle(f6, v6) {
      if (f6(v6), q3.shift(), q3.length) resume(q3[0][0], q3[0][1]);
    }
    __name(settle, "settle");
  }
  function __asyncDelegator2(o5) {
    var i4, p5;
    return i4 = {}, verb("next"), verb("throw", function(e2) {
      throw e2;
    }), verb("return"), i4[Symbol.iterator] = function() {
      return this;
    }, i4;
    function verb(n5, f6) {
      i4[n5] = o5[n5] ? function(v6) {
        return (p5 = !p5) ? { value: __await2(o5[n5](v6)), done: n5 === "return" } : f6 ? f6(v6) : v6;
      } : f6;
    }
    __name(verb, "verb");
  }
  function __asyncValues2(o5) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m3 = o5[Symbol.asyncIterator], i4;
    return m3 ? m3.call(o5) : (o5 = typeof __values2 === "function" ? __values2(o5) : o5[Symbol.iterator](), i4 = {}, verb("next"), verb("throw"), verb("return"), i4[Symbol.asyncIterator] = function() {
      return this;
    }, i4);
    function verb(n5) {
      i4[n5] = o5[n5] && function(v6) {
        return new Promise(function(resolve, reject) {
          v6 = o5[n5](v6), settle(resolve, reject, v6.done, v6.value);
        });
      };
    }
    __name(verb, "verb");
    function settle(resolve, reject, d4, v6) {
      Promise.resolve(v6).then(function(v7) {
        resolve({ value: v7, done: d4 });
      }, reject);
    }
    __name(settle, "settle");
  }
  function __makeTemplateObject2(cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, "raw", { value: raw });
    } else {
      cooked.raw = raw;
    }
    return cooked;
  }
  function __importStar2(mod2) {
    if (mod2 && mod2.__esModule) return mod2;
    var result = {};
    if (mod2 != null) {
      for (var k6 in mod2) if (Object.hasOwnProperty.call(mod2, k6)) result[k6] = mod2[k6];
    }
    result.default = mod2;
    return result;
  }
  function __importDefault2(mod2) {
    return mod2 && mod2.__esModule ? mod2 : { default: mod2 };
  }
  function __classPrivateFieldGet2(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
      throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
  }
  function __classPrivateFieldSet2(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
      throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
  }
  var extendStatics2, __assign2;
  var init_tslib_es62 = __esm({
    "node_modules/@walletconnect/environment/node_modules/tslib/tslib.es6.js"() {
      init_shims();
      extendStatics2 = /* @__PURE__ */ __name(function(d4, b6) {
        extendStatics2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d5, b7) {
          d5.__proto__ = b7;
        } || function(d5, b7) {
          for (var p5 in b7) if (b7.hasOwnProperty(p5)) d5[p5] = b7[p5];
        };
        return extendStatics2(d4, b6);
      }, "extendStatics");
      __name(__extends2, "__extends");
      __assign2 = /* @__PURE__ */ __name(function() {
        __assign2 = Object.assign || /* @__PURE__ */ __name(function __assign3(t) {
          for (var s3, i4 = 1, n5 = arguments.length; i4 < n5; i4++) {
            s3 = arguments[i4];
            for (var p5 in s3) if (Object.prototype.hasOwnProperty.call(s3, p5)) t[p5] = s3[p5];
          }
          return t;
        }, "__assign");
        return __assign2.apply(this, arguments);
      }, "__assign");
      __name(__rest2, "__rest");
      __name(__decorate2, "__decorate");
      __name(__param2, "__param");
      __name(__metadata2, "__metadata");
      __name(__awaiter2, "__awaiter");
      __name(__generator2, "__generator");
      __name(__createBinding2, "__createBinding");
      __name(__exportStar2, "__exportStar");
      __name(__values2, "__values");
      __name(__read2, "__read");
      __name(__spread2, "__spread");
      __name(__spreadArrays2, "__spreadArrays");
      __name(__await2, "__await");
      __name(__asyncGenerator2, "__asyncGenerator");
      __name(__asyncDelegator2, "__asyncDelegator");
      __name(__asyncValues2, "__asyncValues");
      __name(__makeTemplateObject2, "__makeTemplateObject");
      __name(__importStar2, "__importStar");
      __name(__importDefault2, "__importDefault");
      __name(__classPrivateFieldGet2, "__classPrivateFieldGet");
      __name(__classPrivateFieldSet2, "__classPrivateFieldSet");
    }
  });

  // node_modules/@walletconnect/environment/dist/cjs/crypto.js
  var require_crypto = __commonJS({
    "node_modules/@walletconnect/environment/dist/cjs/crypto.js"(exports) {
      "use strict";
      init_shims();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.isBrowserCryptoAvailable = exports.getSubtleCrypto = exports.getBrowerCrypto = void 0;
      function getBrowerCrypto() {
        return (globalThis === null || globalThis === void 0 ? void 0 : globalThis.crypto) || (globalThis === null || globalThis === void 0 ? void 0 : globalThis.msCrypto) || {};
      }
      __name(getBrowerCrypto, "getBrowerCrypto");
      exports.getBrowerCrypto = getBrowerCrypto;
      function getSubtleCrypto() {
        const browserCrypto = getBrowerCrypto();
        return browserCrypto.subtle || browserCrypto.webkitSubtle;
      }
      __name(getSubtleCrypto, "getSubtleCrypto");
      exports.getSubtleCrypto = getSubtleCrypto;
      function isBrowserCryptoAvailable() {
        return !!getBrowerCrypto() && !!getSubtleCrypto();
      }
      __name(isBrowserCryptoAvailable, "isBrowserCryptoAvailable");
      exports.isBrowserCryptoAvailable = isBrowserCryptoAvailable;
    }
  });

  // node_modules/@walletconnect/environment/dist/cjs/env.js
  var require_env = __commonJS({
    "node_modules/@walletconnect/environment/dist/cjs/env.js"(exports) {
      "use strict";
      init_shims();
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.isBrowser = exports.isNode = exports.isReactNative = void 0;
      function isReactNative() {
        return typeof document === "undefined" && typeof navigator !== "undefined" && navigator.product === "ReactNative";
      }
      __name(isReactNative, "isReactNative");
      exports.isReactNative = isReactNative;
      function isNode2() {
        return typeof process !== "undefined" && typeof process.versions !== "undefined" && typeof process.versions.node !== "undefined";
      }
      __name(isNode2, "isNode");
      exports.isNode = isNode2;
      function isBrowser() {
        return !isReactNative() && !isNode2();
      }
      __name(isBrowser, "isBrowser");
      exports.isBrowser = isBrowser;
    }
  });

  // node_modules/@walletconnect/environment/dist/cjs/index.js
  var require_cjs4 = __commonJS({
    "node_modules/@walletconnect/environment/dist/cjs/index.js"(exports) {
      "use strict";
      init_shims();
      Object.defineProperty(exports, "__esModule", { value: true });
      var tslib_1 = (init_tslib_es62(), __toCommonJS(tslib_es6_exports2));
      tslib_1.__exportStar(require_crypto(), exports);
      tslib_1.__exportStar(require_env(), exports);
    }
  });

  // node_modules/ws/browser.js
  var require_browser3 = __commonJS({
    "node_modules/ws/browser.js"(exports, module) {
      "use strict";
      init_shims();
      module.exports = function() {
        throw new Error(
          "ws does not work in the browser. Browser clients must use the native WebSocket object"
        );
      };
    }
  });

  // src/scripts/content.ts
  init_shims();

  // node_modules/@walletconnect/core/dist/index.js
  init_shims();
  var import_events7 = __toESM(require_events(), 1);

  // node_modules/@walletconnect/heartbeat/dist/index.es.js
  init_shims();
  var import_events = __toESM(require_events());
  var import_time = __toESM(require_cjs());

  // node_modules/@walletconnect/events/dist/esm/index.js
  init_shims();

  // node_modules/@walletconnect/events/dist/esm/events.js
  init_shims();
  var _IEvents = class _IEvents {
  };
  __name(_IEvents, "IEvents");
  var IEvents = _IEvents;

  // node_modules/@walletconnect/heartbeat/dist/index.es.js
  var _n = class _n extends IEvents {
    constructor(e2) {
      super();
    }
  };
  __name(_n, "n");
  var n = _n;
  var s = import_time.FIVE_SECONDS;
  var r = { pulse: "heartbeat_pulse" };
  var _i = class _i extends n {
    constructor(e2) {
      super(e2), this.events = new import_events.EventEmitter(), this.interval = s, this.interval = e2?.interval || s;
    }
    static async init(e2) {
      const t = new _i(e2);
      return await t.init(), t;
    }
    async init() {
      await this.initialize();
    }
    stop() {
      clearInterval(this.intervalRef);
    }
    on(e2, t) {
      this.events.on(e2, t);
    }
    once(e2, t) {
      this.events.once(e2, t);
    }
    off(e2, t) {
      this.events.off(e2, t);
    }
    removeListener(e2, t) {
      this.events.removeListener(e2, t);
    }
    async initialize() {
      this.intervalRef = setInterval(() => this.pulse(), (0, import_time.toMiliseconds)(this.interval));
    }
    pulse() {
      this.events.emit(r.pulse);
    }
  };
  __name(_i, "i");
  var i = _i;

  // node_modules/@walletconnect/core/node_modules/@walletconnect/keyvaluestorage/dist/index.es.js
  init_shims();

  // node_modules/@walletconnect/core/node_modules/unstorage/dist/index.mjs
  init_shims();

  // node_modules/destr/dist/index.mjs
  init_shims();
  var suspectProtoRx = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
  var suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
  var JsonSigRx = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
  function jsonParseTransform(key, value) {
    if (key === "__proto__" || key === "constructor" && value && typeof value === "object" && "prototype" in value) {
      warnKeyDropped(key);
      return;
    }
    return value;
  }
  __name(jsonParseTransform, "jsonParseTransform");
  function warnKeyDropped(key) {
    console.warn(`[destr] Dropping "${key}" key to prevent prototype pollution.`);
  }
  __name(warnKeyDropped, "warnKeyDropped");
  function destr(value, options = {}) {
    if (typeof value !== "string") {
      return value;
    }
    if (value[0] === '"' && value[value.length - 1] === '"' && value.indexOf("\\") === -1) {
      return value.slice(1, -1);
    }
    const _value = value.trim();
    if (_value.length <= 9) {
      switch (_value.toLowerCase()) {
        case "true": {
          return true;
        }
        case "false": {
          return false;
        }
        case "undefined": {
          return void 0;
        }
        case "null": {
          return null;
        }
        case "nan": {
          return Number.NaN;
        }
        case "infinity": {
          return Number.POSITIVE_INFINITY;
        }
        case "-infinity": {
          return Number.NEGATIVE_INFINITY;
        }
      }
    }
    if (!JsonSigRx.test(value)) {
      if (options.strict) {
        throw new SyntaxError("[destr] Invalid JSON");
      }
      return value;
    }
    try {
      if (suspectProtoRx.test(value) || suspectConstructorRx.test(value)) {
        if (options.strict) {
          throw new Error("[destr] Possible prototype pollution");
        }
        return JSON.parse(value, jsonParseTransform);
      }
      return JSON.parse(value);
    } catch (error) {
      if (options.strict) {
        throw error;
      }
      return value;
    }
  }
  __name(destr, "destr");

  // node_modules/@walletconnect/core/node_modules/unstorage/dist/shared/unstorage.zVDD2mZo.mjs
  init_shims();
  function wrapToPromise(value) {
    if (!value || typeof value.then !== "function") {
      return Promise.resolve(value);
    }
    return value;
  }
  __name(wrapToPromise, "wrapToPromise");
  function asyncCall(function_, ...arguments_) {
    try {
      return wrapToPromise(function_(...arguments_));
    } catch (error) {
      return Promise.reject(error);
    }
  }
  __name(asyncCall, "asyncCall");
  function isPrimitive(value) {
    const type = typeof value;
    return value === null || type !== "object" && type !== "function";
  }
  __name(isPrimitive, "isPrimitive");
  function isPureObject(value) {
    const proto = Object.getPrototypeOf(value);
    return !proto || proto.isPrototypeOf(Object);
  }
  __name(isPureObject, "isPureObject");
  function stringify(value) {
    if (isPrimitive(value)) {
      return String(value);
    }
    if (isPureObject(value) || Array.isArray(value)) {
      return JSON.stringify(value);
    }
    if (typeof value.toJSON === "function") {
      return stringify(value.toJSON());
    }
    throw new Error("[unstorage] Cannot stringify value!");
  }
  __name(stringify, "stringify");
  var BASE64_PREFIX = "base64:";
  function serializeRaw(value) {
    if (typeof value === "string") {
      return value;
    }
    return BASE64_PREFIX + base64Encode(value);
  }
  __name(serializeRaw, "serializeRaw");
  function deserializeRaw(value) {
    if (typeof value !== "string") {
      return value;
    }
    if (!value.startsWith(BASE64_PREFIX)) {
      return value;
    }
    return base64Decode(value.slice(BASE64_PREFIX.length));
  }
  __name(deserializeRaw, "deserializeRaw");
  function base64Decode(input) {
    if (globalThis.Buffer) {
      return Buffer.from(input, "base64");
    }
    return Uint8Array.from(
      globalThis.atob(input),
      (c6) => c6.codePointAt(0)
    );
  }
  __name(base64Decode, "base64Decode");
  function base64Encode(input) {
    if (globalThis.Buffer) {
      return Buffer.from(input).toString("base64");
    }
    return globalThis.btoa(String.fromCodePoint(...input));
  }
  __name(base64Encode, "base64Encode");
  function normalizeKey(key) {
    if (!key) {
      return "";
    }
    return key.split("?")[0]?.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || "";
  }
  __name(normalizeKey, "normalizeKey");
  function joinKeys(...keys2) {
    return normalizeKey(keys2.join(":"));
  }
  __name(joinKeys, "joinKeys");
  function normalizeBaseKey(base3) {
    base3 = normalizeKey(base3);
    return base3 ? base3 + ":" : "";
  }
  __name(normalizeBaseKey, "normalizeBaseKey");
  function filterKeyByDepth(key, depth) {
    if (depth === void 0) {
      return true;
    }
    let substrCount = 0;
    let index = key.indexOf(":");
    while (index > -1) {
      substrCount++;
      index = key.indexOf(":", index + 1);
    }
    return substrCount <= depth;
  }
  __name(filterKeyByDepth, "filterKeyByDepth");
  function filterKeyByBase(key, base3) {
    if (base3) {
      return key.startsWith(base3) && key[key.length - 1] !== "$";
    }
    return key[key.length - 1] !== "$";
  }
  __name(filterKeyByBase, "filterKeyByBase");

  // node_modules/@walletconnect/core/node_modules/unstorage/dist/index.mjs
  function defineDriver(factory) {
    return factory;
  }
  __name(defineDriver, "defineDriver");
  var DRIVER_NAME = "memory";
  var memory = defineDriver(() => {
    const data = /* @__PURE__ */ new Map();
    return {
      name: DRIVER_NAME,
      getInstance: /* @__PURE__ */ __name(() => data, "getInstance"),
      hasItem(key) {
        return data.has(key);
      },
      getItem(key) {
        return data.get(key) ?? null;
      },
      getItemRaw(key) {
        return data.get(key) ?? null;
      },
      setItem(key, value) {
        data.set(key, value);
      },
      setItemRaw(key, value) {
        data.set(key, value);
      },
      removeItem(key) {
        data.delete(key);
      },
      getKeys() {
        return [...data.keys()];
      },
      clear() {
        data.clear();
      },
      dispose() {
        data.clear();
      }
    };
  });
  function createStorage(options = {}) {
    const context = {
      mounts: { "": options.driver || memory() },
      mountpoints: [""],
      watching: false,
      watchListeners: [],
      unwatch: {}
    };
    const getMount = /* @__PURE__ */ __name((key) => {
      for (const base3 of context.mountpoints) {
        if (key.startsWith(base3)) {
          return {
            base: base3,
            relativeKey: key.slice(base3.length),
            driver: context.mounts[base3]
          };
        }
      }
      return {
        base: "",
        relativeKey: key,
        driver: context.mounts[""]
      };
    }, "getMount");
    const getMounts = /* @__PURE__ */ __name((base3, includeParent) => {
      return context.mountpoints.filter(
        (mountpoint) => mountpoint.startsWith(base3) || includeParent && base3.startsWith(mountpoint)
      ).map((mountpoint) => ({
        relativeBase: base3.length > mountpoint.length ? base3.slice(mountpoint.length) : void 0,
        mountpoint,
        driver: context.mounts[mountpoint]
      }));
    }, "getMounts");
    const onChange = /* @__PURE__ */ __name((event, key) => {
      if (!context.watching) {
        return;
      }
      key = normalizeKey(key);
      for (const listener of context.watchListeners) {
        listener(event, key);
      }
    }, "onChange");
    const startWatch = /* @__PURE__ */ __name(async () => {
      if (context.watching) {
        return;
      }
      context.watching = true;
      for (const mountpoint in context.mounts) {
        context.unwatch[mountpoint] = await watch(
          context.mounts[mountpoint],
          onChange,
          mountpoint
        );
      }
    }, "startWatch");
    const stopWatch = /* @__PURE__ */ __name(async () => {
      if (!context.watching) {
        return;
      }
      for (const mountpoint in context.unwatch) {
        await context.unwatch[mountpoint]();
      }
      context.unwatch = {};
      context.watching = false;
    }, "stopWatch");
    const runBatch = /* @__PURE__ */ __name((items, commonOptions, cb) => {
      const batches = /* @__PURE__ */ new Map();
      const getBatch = /* @__PURE__ */ __name((mount) => {
        let batch = batches.get(mount.base);
        if (!batch) {
          batch = {
            driver: mount.driver,
            base: mount.base,
            items: []
          };
          batches.set(mount.base, batch);
        }
        return batch;
      }, "getBatch");
      for (const item of items) {
        const isStringItem = typeof item === "string";
        const key = normalizeKey(isStringItem ? item : item.key);
        const value = isStringItem ? void 0 : item.value;
        const options2 = isStringItem || !item.options ? commonOptions : { ...commonOptions, ...item.options };
        const mount = getMount(key);
        getBatch(mount).items.push({
          key,
          value,
          relativeKey: mount.relativeKey,
          options: options2
        });
      }
      return Promise.all([...batches.values()].map((batch) => cb(batch))).then(
        (r3) => r3.flat()
      );
    }, "runBatch");
    const storage = {
      // Item
      hasItem(key, opts = {}) {
        key = normalizeKey(key);
        const { relativeKey, driver } = getMount(key);
        return asyncCall(driver.hasItem, relativeKey, opts);
      },
      getItem(key, opts = {}) {
        key = normalizeKey(key);
        const { relativeKey, driver } = getMount(key);
        return asyncCall(driver.getItem, relativeKey, opts).then(
          (value) => destr(value)
        );
      },
      getItems(items, commonOptions = {}) {
        return runBatch(items, commonOptions, (batch) => {
          if (batch.driver.getItems) {
            return asyncCall(
              batch.driver.getItems,
              batch.items.map((item) => ({
                key: item.relativeKey,
                options: item.options
              })),
              commonOptions
            ).then(
              (r3) => r3.map((item) => ({
                key: joinKeys(batch.base, item.key),
                value: destr(item.value)
              }))
            );
          }
          return Promise.all(
            batch.items.map((item) => {
              return asyncCall(
                batch.driver.getItem,
                item.relativeKey,
                item.options
              ).then((value) => ({
                key: item.key,
                value: destr(value)
              }));
            })
          );
        });
      },
      getItemRaw(key, opts = {}) {
        key = normalizeKey(key);
        const { relativeKey, driver } = getMount(key);
        if (driver.getItemRaw) {
          return asyncCall(driver.getItemRaw, relativeKey, opts);
        }
        return asyncCall(driver.getItem, relativeKey, opts).then(
          (value) => deserializeRaw(value)
        );
      },
      async setItem(key, value, opts = {}) {
        if (value === void 0) {
          return storage.removeItem(key);
        }
        key = normalizeKey(key);
        const { relativeKey, driver } = getMount(key);
        if (!driver.setItem) {
          return;
        }
        await asyncCall(driver.setItem, relativeKey, stringify(value), opts);
        if (!driver.watch) {
          onChange("update", key);
        }
      },
      async setItems(items, commonOptions) {
        await runBatch(items, commonOptions, async (batch) => {
          if (batch.driver.setItems) {
            return asyncCall(
              batch.driver.setItems,
              batch.items.map((item) => ({
                key: item.relativeKey,
                value: stringify(item.value),
                options: item.options
              })),
              commonOptions
            );
          }
          if (!batch.driver.setItem) {
            return;
          }
          await Promise.all(
            batch.items.map((item) => {
              return asyncCall(
                batch.driver.setItem,
                item.relativeKey,
                stringify(item.value),
                item.options
              );
            })
          );
        });
      },
      async setItemRaw(key, value, opts = {}) {
        if (value === void 0) {
          return storage.removeItem(key, opts);
        }
        key = normalizeKey(key);
        const { relativeKey, driver } = getMount(key);
        if (driver.setItemRaw) {
          await asyncCall(driver.setItemRaw, relativeKey, value, opts);
        } else if (driver.setItem) {
          await asyncCall(driver.setItem, relativeKey, serializeRaw(value), opts);
        } else {
          return;
        }
        if (!driver.watch) {
          onChange("update", key);
        }
      },
      async removeItem(key, opts = {}) {
        if (typeof opts === "boolean") {
          opts = { removeMeta: opts };
        }
        key = normalizeKey(key);
        const { relativeKey, driver } = getMount(key);
        if (!driver.removeItem) {
          return;
        }
        await asyncCall(driver.removeItem, relativeKey, opts);
        if (opts.removeMeta || opts.removeMata) {
          await asyncCall(driver.removeItem, relativeKey + "$", opts);
        }
        if (!driver.watch) {
          onChange("remove", key);
        }
      },
      // Meta
      async getMeta(key, opts = {}) {
        if (typeof opts === "boolean") {
          opts = { nativeOnly: opts };
        }
        key = normalizeKey(key);
        const { relativeKey, driver } = getMount(key);
        const meta = /* @__PURE__ */ Object.create(null);
        if (driver.getMeta) {
          Object.assign(meta, await asyncCall(driver.getMeta, relativeKey, opts));
        }
        if (!opts.nativeOnly) {
          const value = await asyncCall(
            driver.getItem,
            relativeKey + "$",
            opts
          ).then((value_) => destr(value_));
          if (value && typeof value === "object") {
            if (typeof value.atime === "string") {
              value.atime = new Date(value.atime);
            }
            if (typeof value.mtime === "string") {
              value.mtime = new Date(value.mtime);
            }
            Object.assign(meta, value);
          }
        }
        return meta;
      },
      setMeta(key, value, opts = {}) {
        return this.setItem(key + "$", value, opts);
      },
      removeMeta(key, opts = {}) {
        return this.removeItem(key + "$", opts);
      },
      // Keys
      async getKeys(base3, opts = {}) {
        base3 = normalizeBaseKey(base3);
        const mounts = getMounts(base3, true);
        let maskedMounts = [];
        const allKeys = [];
        let allMountsSupportMaxDepth = true;
        for (const mount of mounts) {
          if (!mount.driver.flags?.maxDepth) {
            allMountsSupportMaxDepth = false;
          }
          const rawKeys = await asyncCall(
            mount.driver.getKeys,
            mount.relativeBase,
            opts
          );
          for (const key of rawKeys) {
            const fullKey = mount.mountpoint + normalizeKey(key);
            if (!maskedMounts.some((p5) => fullKey.startsWith(p5))) {
              allKeys.push(fullKey);
            }
          }
          maskedMounts = [
            mount.mountpoint,
            ...maskedMounts.filter((p5) => !p5.startsWith(mount.mountpoint))
          ];
        }
        const shouldFilterByDepth = opts.maxDepth !== void 0 && !allMountsSupportMaxDepth;
        return allKeys.filter(
          (key) => (!shouldFilterByDepth || filterKeyByDepth(key, opts.maxDepth)) && filterKeyByBase(key, base3)
        );
      },
      // Utils
      async clear(base3, opts = {}) {
        base3 = normalizeBaseKey(base3);
        await Promise.all(
          getMounts(base3, false).map(async (m3) => {
            if (m3.driver.clear) {
              return asyncCall(m3.driver.clear, m3.relativeBase, opts);
            }
            if (m3.driver.removeItem) {
              const keys2 = await m3.driver.getKeys(m3.relativeBase || "", opts);
              return Promise.all(
                keys2.map((key) => m3.driver.removeItem(key, opts))
              );
            }
          })
        );
      },
      async dispose() {
        await Promise.all(
          Object.values(context.mounts).map((driver) => dispose(driver))
        );
      },
      async watch(callback) {
        await startWatch();
        context.watchListeners.push(callback);
        return async () => {
          context.watchListeners = context.watchListeners.filter(
            (listener) => listener !== callback
          );
          if (context.watchListeners.length === 0) {
            await stopWatch();
          }
        };
      },
      async unwatch() {
        context.watchListeners = [];
        await stopWatch();
      },
      // Mount
      mount(base3, driver) {
        base3 = normalizeBaseKey(base3);
        if (base3 && context.mounts[base3]) {
          throw new Error(`already mounted at ${base3}`);
        }
        if (base3) {
          context.mountpoints.push(base3);
          context.mountpoints.sort((a4, b6) => b6.length - a4.length);
        }
        context.mounts[base3] = driver;
        if (context.watching) {
          Promise.resolve(watch(driver, onChange, base3)).then((unwatcher) => {
            context.unwatch[base3] = unwatcher;
          }).catch(console.error);
        }
        return storage;
      },
      async unmount(base3, _dispose = true) {
        base3 = normalizeBaseKey(base3);
        if (!base3 || !context.mounts[base3]) {
          return;
        }
        if (context.watching && base3 in context.unwatch) {
          context.unwatch[base3]?.();
          delete context.unwatch[base3];
        }
        if (_dispose) {
          await dispose(context.mounts[base3]);
        }
        context.mountpoints = context.mountpoints.filter((key) => key !== base3);
        delete context.mounts[base3];
      },
      getMount(key = "") {
        key = normalizeKey(key) + ":";
        const m3 = getMount(key);
        return {
          driver: m3.driver,
          base: m3.base
        };
      },
      getMounts(base3 = "", opts = {}) {
        base3 = normalizeKey(base3);
        const mounts = getMounts(base3, opts.parents);
        return mounts.map((m3) => ({
          driver: m3.driver,
          base: m3.mountpoint
        }));
      },
      // Aliases
      keys: /* @__PURE__ */ __name((base3, opts = {}) => storage.getKeys(base3, opts), "keys"),
      get: /* @__PURE__ */ __name((key, opts = {}) => storage.getItem(key, opts), "get"),
      set: /* @__PURE__ */ __name((key, value, opts = {}) => storage.setItem(key, value, opts), "set"),
      has: /* @__PURE__ */ __name((key, opts = {}) => storage.hasItem(key, opts), "has"),
      del: /* @__PURE__ */ __name((key, opts = {}) => storage.removeItem(key, opts), "del"),
      remove: /* @__PURE__ */ __name((key, opts = {}) => storage.removeItem(key, opts), "remove")
    };
    return storage;
  }
  __name(createStorage, "createStorage");
  function watch(driver, onChange, base3) {
    return driver.watch ? driver.watch((event, key) => onChange(event, base3 + key)) : () => {
    };
  }
  __name(watch, "watch");
  async function dispose(driver) {
    if (typeof driver.dispose === "function") {
      await asyncCall(driver.dispose);
    }
  }
  __name(dispose, "dispose");

  // node_modules/idb-keyval/dist/index.js
  init_shims();
  function promisifyRequest(request) {
    return new Promise((resolve, reject) => {
      request.oncomplete = request.onsuccess = () => resolve(request.result);
      request.onabort = request.onerror = () => reject(request.error);
    });
  }
  __name(promisifyRequest, "promisifyRequest");
  function createStore(dbName, storeName) {
    let dbp;
    const getDB = /* @__PURE__ */ __name(() => {
      if (dbp)
        return dbp;
      const request = indexedDB.open(dbName);
      request.onupgradeneeded = () => request.result.createObjectStore(storeName);
      dbp = promisifyRequest(request);
      dbp.then((db) => {
        db.onclose = () => dbp = void 0;
      }, () => {
      });
      return dbp;
    }, "getDB");
    return (txMode, callback) => getDB().then((db) => callback(db.transaction(storeName, txMode).objectStore(storeName)));
  }
  __name(createStore, "createStore");
  var defaultGetStoreFunc;
  function defaultGetStore() {
    if (!defaultGetStoreFunc) {
      defaultGetStoreFunc = createStore("keyval-store", "keyval");
    }
    return defaultGetStoreFunc;
  }
  __name(defaultGetStore, "defaultGetStore");
  function get(key, customStore = defaultGetStore()) {
    return customStore("readonly", (store) => promisifyRequest(store.get(key)));
  }
  __name(get, "get");
  function set(key, value, customStore = defaultGetStore()) {
    return customStore("readwrite", (store) => {
      store.put(value, key);
      return promisifyRequest(store.transaction);
    });
  }
  __name(set, "set");
  function del(key, customStore = defaultGetStore()) {
    return customStore("readwrite", (store) => {
      store.delete(key);
      return promisifyRequest(store.transaction);
    });
  }
  __name(del, "del");
  function clear(customStore = defaultGetStore()) {
    return customStore("readwrite", (store) => {
      store.clear();
      return promisifyRequest(store.transaction);
    });
  }
  __name(clear, "clear");
  function eachCursor(store, callback) {
    store.openCursor().onsuccess = function() {
      if (!this.result)
        return;
      callback(this.result);
      this.result.continue();
    };
    return promisifyRequest(store.transaction);
  }
  __name(eachCursor, "eachCursor");
  function keys(customStore = defaultGetStore()) {
    return customStore("readonly", (store) => {
      if (store.getAllKeys) {
        return promisifyRequest(store.getAllKeys());
      }
      const items = [];
      return eachCursor(store, (cursor) => items.push(cursor.key)).then(() => items);
    });
  }
  __name(keys, "keys");

  // node_modules/@walletconnect/safe-json/dist/esm/index.js
  init_shims();
  var JSONStringify = /* @__PURE__ */ __name((data) => JSON.stringify(data, (_5, value) => typeof value === "bigint" ? value.toString() + "n" : value), "JSONStringify");
  var JSONParse = /* @__PURE__ */ __name((json) => {
    const numbersBiggerThanMaxInt = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g;
    const serializedData = json.replace(numbersBiggerThanMaxInt, '$1"$2n"$3');
    return JSON.parse(serializedData, (_5, value) => {
      const isCustomFormatBigInt = typeof value === "string" && value.match(/^\d+n$/);
      if (isCustomFormatBigInt)
        return BigInt(value.substring(0, value.length - 1));
      return value;
    });
  }, "JSONParse");
  function safeJsonParse(value) {
    if (typeof value !== "string") {
      throw new Error(`Cannot safe json parse value of type ${typeof value}`);
    }
    try {
      return JSONParse(value);
    } catch (_a3) {
      return value;
    }
  }
  __name(safeJsonParse, "safeJsonParse");
  function safeJsonStringify(value) {
    return typeof value === "string" ? value : JSONStringify(value) || "";
  }
  __name(safeJsonStringify, "safeJsonStringify");

  // node_modules/@walletconnect/core/node_modules/@walletconnect/keyvaluestorage/dist/index.es.js
  var x = "idb-keyval";
  var z = /* @__PURE__ */ __name((i4 = {}) => {
    const t = i4.base && i4.base.length > 0 ? `${i4.base}:` : "", e2 = /* @__PURE__ */ __name((s3) => t + s3, "e");
    let n5;
    return i4.dbName && i4.storeName && (n5 = createStore(i4.dbName, i4.storeName)), { name: x, options: i4, async hasItem(s3) {
      return !(typeof await get(e2(s3), n5) > "u");
    }, async getItem(s3) {
      return await get(e2(s3), n5) ?? null;
    }, setItem(s3, a4) {
      return set(e2(s3), a4, n5);
    }, removeItem(s3) {
      return del(e2(s3), n5);
    }, getKeys() {
      return keys(n5);
    }, clear() {
      return clear(n5);
    } };
  }, "z");
  var D = "WALLET_CONNECT_V2_INDEXED_DB";
  var E = "keyvaluestorage";
  var __ = class __ {
    constructor() {
      this.indexedDb = createStorage({ driver: z({ dbName: D, storeName: E }) });
    }
    async getKeys() {
      return this.indexedDb.getKeys();
    }
    async getEntries() {
      return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map((t) => [t.key, t.value]);
    }
    async getItem(t) {
      const e2 = await this.indexedDb.getItem(t);
      if (e2 !== null) return e2;
    }
    async setItem(t, e2) {
      await this.indexedDb.setItem(t, safeJsonStringify(e2));
    }
    async removeItem(t) {
      await this.indexedDb.removeItem(t);
    }
  };
  __name(__, "_");
  var _ = __;
  var l2 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
  var c = { exports: {} };
  (function() {
    let i4;
    function t() {
    }
    __name(t, "t");
    i4 = t, i4.prototype.getItem = function(e2) {
      return this.hasOwnProperty(e2) ? String(this[e2]) : null;
    }, i4.prototype.setItem = function(e2, n5) {
      this[e2] = String(n5);
    }, i4.prototype.removeItem = function(e2) {
      delete this[e2];
    }, i4.prototype.clear = function() {
      const e2 = this;
      Object.keys(e2).forEach(function(n5) {
        e2[n5] = void 0, delete e2[n5];
      });
    }, i4.prototype.key = function(e2) {
      return e2 = e2 || 0, Object.keys(this)[e2];
    }, i4.prototype.__defineGetter__("length", function() {
      return Object.keys(this).length;
    }), typeof l2 < "u" && l2.localStorage ? c.exports = l2.localStorage : typeof window < "u" && window.localStorage ? c.exports = window.localStorage : c.exports = new t();
  })();
  function k(i4) {
    var t;
    return [i4[0], safeJsonParse((t = i4[1]) != null ? t : "")];
  }
  __name(k, "k");
  var _K = class _K {
    constructor() {
      this.localStorage = c.exports;
    }
    async getKeys() {
      return Object.keys(this.localStorage);
    }
    async getEntries() {
      return Object.entries(this.localStorage).map(k);
    }
    async getItem(t) {
      const e2 = this.localStorage.getItem(t);
      if (e2 !== null) return safeJsonParse(e2);
    }
    async setItem(t, e2) {
      this.localStorage.setItem(t, safeJsonStringify(e2));
    }
    async removeItem(t) {
      this.localStorage.removeItem(t);
    }
  };
  __name(_K, "K");
  var K = _K;
  var N = "wc_storage_version";
  var y = 1;
  var O = /* @__PURE__ */ __name(async (i4, t, e2) => {
    const n5 = N, s3 = await t.getItem(n5);
    if (s3 && s3 >= y) {
      e2(t);
      return;
    }
    const a4 = await i4.getKeys();
    if (!a4.length) {
      e2(t);
      return;
    }
    const m3 = [];
    for (; a4.length; ) {
      const r3 = a4.shift();
      if (!r3) continue;
      const o5 = r3.toLowerCase();
      if (o5.includes("wc@") || o5.includes("walletconnect") || o5.includes("wc_") || o5.includes("wallet_connect")) {
        const f6 = await i4.getItem(r3);
        await t.setItem(r3, f6), m3.push(r3);
      }
    }
    await t.setItem(n5, y), e2(t), j(i4, m3);
  }, "O");
  var j = /* @__PURE__ */ __name(async (i4, t) => {
    t.length && t.forEach(async (e2) => {
      await i4.removeItem(e2);
    });
  }, "j");
  var _h = class _h {
    constructor() {
      this.initialized = false, this.setInitialized = (e2) => {
        this.storage = e2, this.initialized = true;
      };
      const t = new K();
      this.storage = t;
      try {
        const e2 = new _();
        O(t, e2, this.setInitialized);
      } catch {
        this.initialized = true;
      }
    }
    async getKeys() {
      return await this.initialize(), this.storage.getKeys();
    }
    async getEntries() {
      return await this.initialize(), this.storage.getEntries();
    }
    async getItem(t) {
      return await this.initialize(), this.storage.getItem(t);
    }
    async setItem(t, e2) {
      return await this.initialize(), this.storage.setItem(t, e2);
    }
    async removeItem(t) {
      return await this.initialize(), this.storage.removeItem(t);
    }
    async initialize() {
      this.initialized || await new Promise((t) => {
        const e2 = setInterval(() => {
          this.initialized && (clearInterval(e2), t());
        }, 20);
      });
    }
  };
  __name(_h, "h");
  var h = _h;

  // node_modules/@walletconnect/logger/dist/index.es.js
  init_shims();
  var import_pino = __toESM(require_browser2());
  var import_pino2 = __toESM(require_browser2());
  var b = { level: "info" };
  var l3 = "custom_context";
  var i2 = 1e3 * 1024;
  var C = Object.defineProperty;
  var B = /* @__PURE__ */ __name((r3, e2, t) => e2 in r3 ? C(r3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r3[e2] = t, "B");
  var s2 = /* @__PURE__ */ __name((r3, e2, t) => B(r3, typeof e2 != "symbol" ? e2 + "" : e2, t), "s");
  var _S = class _S {
    constructor(e2) {
      s2(this, "nodeValue"), s2(this, "sizeInBytes"), s2(this, "next"), this.nodeValue = e2, this.sizeInBytes = new TextEncoder().encode(this.nodeValue).length, this.next = null;
    }
    get value() {
      return this.nodeValue;
    }
    get size() {
      return this.sizeInBytes;
    }
  };
  __name(_S, "S");
  var S = _S;
  var _v = class _v {
    constructor(e2) {
      s2(this, "lengthInNodes"), s2(this, "sizeInBytes"), s2(this, "head"), s2(this, "tail"), s2(this, "maxSizeInBytes"), this.head = null, this.tail = null, this.lengthInNodes = 0, this.maxSizeInBytes = e2, this.sizeInBytes = 0;
    }
    append(e2) {
      const t = new S(e2);
      if (t.size > this.maxSizeInBytes) throw new Error(`[LinkedList] Value too big to insert into list: ${e2} with size ${t.size}`);
      for (; this.size + t.size > this.maxSizeInBytes; ) this.shift();
      this.head ? (this.tail && (this.tail.next = t), this.tail = t) : (this.head = t, this.tail = t), this.lengthInNodes++, this.sizeInBytes += t.size;
    }
    shift() {
      if (!this.head) return;
      const e2 = this.head;
      this.head = this.head.next, this.head || (this.tail = null), this.lengthInNodes--, this.sizeInBytes -= e2.size;
    }
    toArray() {
      const e2 = [];
      let t = this.head;
      for (; t !== null; ) e2.push(t.value), t = t.next;
      return e2;
    }
    get length() {
      return this.lengthInNodes;
    }
    get size() {
      return this.sizeInBytes;
    }
    toOrderedArray() {
      return Array.from(this);
    }
    [Symbol.iterator]() {
      let e2 = this.head;
      return { next: /* @__PURE__ */ __name(() => {
        if (!e2) return { done: true, value: null };
        const t = e2.value;
        return e2 = e2.next, { done: false, value: t };
      }, "next") };
    }
  };
  __name(_v, "v");
  var v = _v;
  var _2 = Object.defineProperty;
  var x2 = /* @__PURE__ */ __name((r3, e2, t) => e2 in r3 ? _2(r3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r3[e2] = t, "x");
  var a2 = /* @__PURE__ */ __name((r3, e2, t) => x2(r3, typeof e2 != "symbol" ? e2 + "" : e2, t), "a");
  var _L = class _L {
    constructor(e2, t = i2) {
      a2(this, "logs"), a2(this, "level"), a2(this, "levelValue"), a2(this, "MAX_LOG_SIZE_IN_BYTES"), this.level = e2 ?? "error", this.levelValue = import_pino.levels.values[this.level], this.MAX_LOG_SIZE_IN_BYTES = t, this.logs = new v(this.MAX_LOG_SIZE_IN_BYTES);
    }
    forwardToConsole(e2, t) {
      t === import_pino.levels.values.error ? console.error(e2) : t === import_pino.levels.values.warn ? console.warn(e2) : t === import_pino.levels.values.debug ? console.debug(e2) : t === import_pino.levels.values.trace ? console.trace(e2) : console.log(e2);
    }
    appendToLogs(e2) {
      this.logs.append(safeJsonStringify({ timestamp: (/* @__PURE__ */ new Date()).toISOString(), log: e2 }));
      const t = typeof e2 == "string" ? JSON.parse(e2).level : e2.level;
      t >= this.levelValue && this.forwardToConsole(e2, t);
    }
    getLogs() {
      return this.logs;
    }
    clearLogs() {
      this.logs = new v(this.MAX_LOG_SIZE_IN_BYTES);
    }
    getLogArray() {
      return Array.from(this.logs);
    }
    logsToBlob(e2) {
      const t = this.getLogArray();
      return t.push(safeJsonStringify({ extraMetadata: e2 })), new Blob(t, { type: "application/json" });
    }
  };
  __name(_L, "L");
  var L = _L;
  var z2 = Object.defineProperty;
  var T = /* @__PURE__ */ __name((r3, e2, t) => e2 in r3 ? z2(r3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r3[e2] = t, "T");
  var k2 = /* @__PURE__ */ __name((r3, e2, t) => T(r3, typeof e2 != "symbol" ? e2 + "" : e2, t), "k");
  var _E = class _E {
    constructor(e2, t = i2) {
      k2(this, "baseChunkLogger"), this.baseChunkLogger = new L(e2, t);
    }
    write(e2) {
      this.baseChunkLogger.appendToLogs(e2);
    }
    getLogs() {
      return this.baseChunkLogger.getLogs();
    }
    clearLogs() {
      this.baseChunkLogger.clearLogs();
    }
    getLogArray() {
      return this.baseChunkLogger.getLogArray();
    }
    logsToBlob(e2) {
      return this.baseChunkLogger.logsToBlob(e2);
    }
    downloadLogsBlobInBrowser(e2) {
      const t = URL.createObjectURL(this.logsToBlob(e2)), o5 = document.createElement("a");
      o5.href = t, o5.download = `walletconnect-logs-${(/* @__PURE__ */ new Date()).toISOString()}.txt`, document.body.appendChild(o5), o5.click(), document.body.removeChild(o5), URL.revokeObjectURL(t);
    }
  };
  __name(_E, "E");
  var E2 = _E;
  var A = Object.defineProperty;
  var $ = /* @__PURE__ */ __name((r3, e2, t) => e2 in r3 ? A(r3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r3[e2] = t, "$");
  var N2 = /* @__PURE__ */ __name((r3, e2, t) => $(r3, typeof e2 != "symbol" ? e2 + "" : e2, t), "N");
  var _j = class _j {
    constructor(e2, t = i2) {
      N2(this, "baseChunkLogger"), this.baseChunkLogger = new L(e2, t);
    }
    write(e2) {
      this.baseChunkLogger.appendToLogs(e2);
    }
    getLogs() {
      return this.baseChunkLogger.getLogs();
    }
    clearLogs() {
      this.baseChunkLogger.clearLogs();
    }
    getLogArray() {
      return this.baseChunkLogger.getLogArray();
    }
    logsToBlob(e2) {
      return this.baseChunkLogger.logsToBlob(e2);
    }
  };
  __name(_j, "j");
  var j2 = _j;
  var P = Object.defineProperty;
  var V = Object.defineProperties;
  var G = Object.getOwnPropertyDescriptors;
  var p = Object.getOwnPropertySymbols;
  var M = Object.prototype.hasOwnProperty;
  var U = Object.prototype.propertyIsEnumerable;
  var f = /* @__PURE__ */ __name((r3, e2, t) => e2 in r3 ? P(r3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r3[e2] = t, "f");
  var g = /* @__PURE__ */ __name((r3, e2) => {
    for (var t in e2 || (e2 = {})) M.call(e2, t) && f(r3, t, e2[t]);
    if (p) for (var t of p(e2)) U.call(e2, t) && f(r3, t, e2[t]);
    return r3;
  }, "g");
  var h2 = /* @__PURE__ */ __name((r3, e2) => V(r3, G(e2)), "h");
  function D2(r3) {
    return h2(g({}, r3), { level: r3?.level || b.level });
  }
  __name(D2, "D");
  function y2(r3, e2, t = l3) {
    return r3[t] = e2, r3;
  }
  __name(y2, "y");
  function w(r3, e2 = l3) {
    return r3[e2] || "";
  }
  __name(w, "w");
  function m(r3, e2, t = l3) {
    const o5 = w(r3, t);
    return o5.trim() ? `${o5}/${e2}` : e2;
  }
  __name(m, "m");
  function X(r3, e2, t = l3) {
    const o5 = m(r3, e2, t), u2 = r3.child({ context: o5 });
    return y2(u2, o5, t);
  }
  __name(X, "X");
  function I(r3) {
    var e2, t;
    const o5 = new E2((e2 = r3.opts) == null ? void 0 : e2.level, r3.maxSizeInBytes);
    return { logger: (0, import_pino.default)(h2(g({}, r3.opts), { level: "trace", browser: h2(g({}, (t = r3.opts) == null ? void 0 : t.browser), { write: /* @__PURE__ */ __name((u2) => o5.write(u2), "write") }) })), chunkLoggerController: o5 };
  }
  __name(I, "I");
  function O2(r3) {
    var e2;
    const t = new j2((e2 = r3.opts) == null ? void 0 : e2.level, r3.maxSizeInBytes);
    return { logger: (0, import_pino.default)(h2(g({}, r3.opts), { level: "trace" }), t), chunkLoggerController: t };
  }
  __name(O2, "O");
  function Y(r3) {
    return typeof r3.loggerOverride < "u" && typeof r3.loggerOverride != "string" ? { logger: r3.loggerOverride, chunkLoggerController: null } : typeof window < "u" ? I(r3) : O2(r3);
  }
  __name(Y, "Y");

  // node_modules/@walletconnect/types/dist/index.js
  init_shims();
  var import_events4 = __toESM(require_events());
  var a3 = Object.defineProperty;
  var u = /* @__PURE__ */ __name((e2, s3, r3) => s3 in e2 ? a3(e2, s3, { enumerable: true, configurable: true, writable: true, value: r3 }) : e2[s3] = r3, "u");
  var c3 = /* @__PURE__ */ __name((e2, s3, r3) => u(e2, typeof s3 != "symbol" ? s3 + "" : s3, r3), "c");
  var _h2 = class _h2 extends IEvents {
    constructor(s3) {
      super(), this.opts = s3, c3(this, "protocol", "wc"), c3(this, "version", 2);
    }
  };
  __name(_h2, "h");
  var h3 = _h2;
  var p2 = Object.defineProperty;
  var b2 = /* @__PURE__ */ __name((e2, s3, r3) => s3 in e2 ? p2(e2, s3, { enumerable: true, configurable: true, writable: true, value: r3 }) : e2[s3] = r3, "b");
  var v2 = /* @__PURE__ */ __name((e2, s3, r3) => b2(e2, typeof s3 != "symbol" ? s3 + "" : s3, r3), "v");
  var _I = class _I extends IEvents {
    constructor(s3, r3) {
      super(), this.core = s3, this.logger = r3, v2(this, "records", /* @__PURE__ */ new Map());
    }
  };
  __name(_I, "I");
  var I2 = _I;
  var _y = class _y {
    constructor(s3, r3) {
      this.logger = s3, this.core = r3;
    }
  };
  __name(_y, "y");
  var y3 = _y;
  var _m = class _m extends IEvents {
    constructor(s3, r3) {
      super(), this.relayer = s3, this.logger = r3;
    }
  };
  __name(_m, "m");
  var m2 = _m;
  var _d = class _d extends IEvents {
    constructor(s3) {
      super();
    }
  };
  __name(_d, "d");
  var d = _d;
  var _f = class _f {
    constructor(s3, r3, t, q3) {
      this.core = s3, this.logger = r3, this.name = t;
    }
  };
  __name(_f, "f");
  var f2 = _f;
  var _P = class _P extends IEvents {
    constructor(s3, r3) {
      super(), this.relayer = s3, this.logger = r3;
    }
  };
  __name(_P, "P");
  var P2 = _P;
  var _S2 = class _S2 extends IEvents {
    constructor(s3, r3) {
      super(), this.core = s3, this.logger = r3;
    }
  };
  __name(_S2, "S");
  var S2 = _S2;
  var _M = class _M {
    constructor(s3, r3, t) {
      this.core = s3, this.logger = r3, this.store = t;
    }
  };
  __name(_M, "M");
  var M2 = _M;
  var _O = class _O {
    constructor(s3, r3) {
      this.projectId = s3, this.logger = r3;
    }
  };
  __name(_O, "O");
  var O3 = _O;
  var _R = class _R {
    constructor(s3, r3, t) {
      this.core = s3, this.logger = r3, this.telemetryEnabled = t;
    }
  };
  __name(_R, "R");
  var R = _R;
  var T2 = Object.defineProperty;
  var k3 = /* @__PURE__ */ __name((e2, s3, r3) => s3 in e2 ? T2(e2, s3, { enumerable: true, configurable: true, writable: true, value: r3 }) : e2[s3] = r3, "k");
  var i3 = /* @__PURE__ */ __name((e2, s3, r3) => k3(e2, typeof s3 != "symbol" ? s3 + "" : s3, r3), "i");
  var _J = class _J {
    constructor(s3) {
      this.opts = s3, i3(this, "protocol", "wc"), i3(this, "version", 2);
    }
  };
  __name(_J, "J");
  var J = _J;
  var _V = class _V {
    constructor(s3) {
      this.client = s3;
    }
  };
  __name(_V, "V");
  var V2 = _V;

  // node_modules/@walletconnect/core/dist/index.js
  var import_time4 = __toESM(require_cjs(), 1);

  // node_modules/@walletconnect/relay-auth/dist/index.es.js
  init_shims();
  var import_time2 = __toESM(require_cjs());
  function En(t) {
    return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
  }
  __name(En, "En");
  function fe(t, ...e2) {
    if (!En(t)) throw new Error("Uint8Array expected");
    if (e2.length > 0 && !e2.includes(t.length)) throw new Error("Uint8Array expected of length " + e2 + ", got length=" + t.length);
  }
  __name(fe, "fe");
  function De(t, e2 = true) {
    if (t.destroyed) throw new Error("Hash instance has been destroyed");
    if (e2 && t.finished) throw new Error("Hash#digest() has already been called");
  }
  __name(De, "De");
  function gn(t, e2) {
    fe(t);
    const n5 = e2.outputLen;
    if (t.length < n5) throw new Error("digestInto() expects output buffer of length at least " + n5);
  }
  __name(gn, "gn");
  var it = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
  var _t = /* @__PURE__ */ __name((t) => new DataView(t.buffer, t.byteOffset, t.byteLength), "_t");
  function yn(t) {
    if (typeof t != "string") throw new Error("utf8ToBytes expected string, got " + typeof t);
    return new Uint8Array(new TextEncoder().encode(t));
  }
  __name(yn, "yn");
  function de(t) {
    return typeof t == "string" && (t = yn(t)), fe(t), t;
  }
  __name(de, "de");
  var _xn = class _xn {
    clone() {
      return this._cloneInto();
    }
  };
  __name(_xn, "xn");
  var xn = _xn;
  function Bn(t) {
    const e2 = /* @__PURE__ */ __name((r3) => t().update(de(r3)).digest(), "e"), n5 = t();
    return e2.outputLen = n5.outputLen, e2.blockLen = n5.blockLen, e2.create = () => t(), e2;
  }
  __name(Bn, "Bn");
  function he(t = 32) {
    if (it && typeof it.getRandomValues == "function") return it.getRandomValues(new Uint8Array(t));
    if (it && typeof it.randomBytes == "function") return it.randomBytes(t);
    throw new Error("crypto.getRandomValues must be defined");
  }
  __name(he, "he");
  function Cn(t, e2, n5, r3) {
    if (typeof t.setBigUint64 == "function") return t.setBigUint64(e2, n5, r3);
    const o5 = BigInt(32), s3 = BigInt(4294967295), a4 = Number(n5 >> o5 & s3), u2 = Number(n5 & s3), i4 = r3 ? 4 : 0, D4 = r3 ? 0 : 4;
    t.setUint32(e2 + i4, a4, r3), t.setUint32(e2 + D4, u2, r3);
  }
  __name(Cn, "Cn");
  var _An = class _An extends xn {
    constructor(e2, n5, r3, o5) {
      super(), this.blockLen = e2, this.outputLen = n5, this.padOffset = r3, this.isLE = o5, this.finished = false, this.length = 0, this.pos = 0, this.destroyed = false, this.buffer = new Uint8Array(e2), this.view = _t(this.buffer);
    }
    update(e2) {
      De(this);
      const { view: n5, buffer: r3, blockLen: o5 } = this;
      e2 = de(e2);
      const s3 = e2.length;
      for (let a4 = 0; a4 < s3; ) {
        const u2 = Math.min(o5 - this.pos, s3 - a4);
        if (u2 === o5) {
          const i4 = _t(e2);
          for (; o5 <= s3 - a4; a4 += o5) this.process(i4, a4);
          continue;
        }
        r3.set(e2.subarray(a4, a4 + u2), this.pos), this.pos += u2, a4 += u2, this.pos === o5 && (this.process(n5, 0), this.pos = 0);
      }
      return this.length += e2.length, this.roundClean(), this;
    }
    digestInto(e2) {
      De(this), gn(e2, this), this.finished = true;
      const { buffer: n5, view: r3, blockLen: o5, isLE: s3 } = this;
      let { pos: a4 } = this;
      n5[a4++] = 128, this.buffer.subarray(a4).fill(0), this.padOffset > o5 - a4 && (this.process(r3, 0), a4 = 0);
      for (let l7 = a4; l7 < o5; l7++) n5[l7] = 0;
      Cn(r3, o5 - 8, BigInt(this.length * 8), s3), this.process(r3, 0);
      const u2 = _t(e2), i4 = this.outputLen;
      if (i4 % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
      const D4 = i4 / 4, c6 = this.get();
      if (D4 > c6.length) throw new Error("_sha2: outputLen bigger than state");
      for (let l7 = 0; l7 < D4; l7++) u2.setUint32(4 * l7, c6[l7], s3);
    }
    digest() {
      const { buffer: e2, outputLen: n5 } = this;
      this.digestInto(e2);
      const r3 = e2.slice(0, n5);
      return this.destroy(), r3;
    }
    _cloneInto(e2) {
      e2 || (e2 = new this.constructor()), e2.set(...this.get());
      const { blockLen: n5, buffer: r3, length: o5, finished: s3, destroyed: a4, pos: u2 } = this;
      return e2.length = o5, e2.pos = u2, e2.finished = s3, e2.destroyed = a4, o5 % n5 && e2.buffer.set(r3), e2;
    }
  };
  __name(_An, "An");
  var An = _An;
  var wt = BigInt(2 ** 32 - 1);
  var St = BigInt(32);
  function le(t, e2 = false) {
    return e2 ? { h: Number(t & wt), l: Number(t >> St & wt) } : { h: Number(t >> St & wt) | 0, l: Number(t & wt) | 0 };
  }
  __name(le, "le");
  function mn(t, e2 = false) {
    let n5 = new Uint32Array(t.length), r3 = new Uint32Array(t.length);
    for (let o5 = 0; o5 < t.length; o5++) {
      const { h: s3, l: a4 } = le(t[o5], e2);
      [n5[o5], r3[o5]] = [s3, a4];
    }
    return [n5, r3];
  }
  __name(mn, "mn");
  var _n2 = /* @__PURE__ */ __name((t, e2) => BigInt(t >>> 0) << St | BigInt(e2 >>> 0), "_n");
  var Sn = /* @__PURE__ */ __name((t, e2, n5) => t >>> n5, "Sn");
  var vn = /* @__PURE__ */ __name((t, e2, n5) => t << 32 - n5 | e2 >>> n5, "vn");
  var In = /* @__PURE__ */ __name((t, e2, n5) => t >>> n5 | e2 << 32 - n5, "In");
  var Un = /* @__PURE__ */ __name((t, e2, n5) => t << 32 - n5 | e2 >>> n5, "Un");
  var Tn = /* @__PURE__ */ __name((t, e2, n5) => t << 64 - n5 | e2 >>> n5 - 32, "Tn");
  var Fn = /* @__PURE__ */ __name((t, e2, n5) => t >>> n5 - 32 | e2 << 64 - n5, "Fn");
  var Nn = /* @__PURE__ */ __name((t, e2) => e2, "Nn");
  var Ln = /* @__PURE__ */ __name((t, e2) => t, "Ln");
  var On = /* @__PURE__ */ __name((t, e2, n5) => t << n5 | e2 >>> 32 - n5, "On");
  var Hn = /* @__PURE__ */ __name((t, e2, n5) => e2 << n5 | t >>> 32 - n5, "Hn");
  var zn = /* @__PURE__ */ __name((t, e2, n5) => e2 << n5 - 32 | t >>> 64 - n5, "zn");
  var Mn = /* @__PURE__ */ __name((t, e2, n5) => t << n5 - 32 | e2 >>> 64 - n5, "Mn");
  function qn(t, e2, n5, r3) {
    const o5 = (e2 >>> 0) + (r3 >>> 0);
    return { h: t + n5 + (o5 / 2 ** 32 | 0) | 0, l: o5 | 0 };
  }
  __name(qn, "qn");
  var $n = /* @__PURE__ */ __name((t, e2, n5) => (t >>> 0) + (e2 >>> 0) + (n5 >>> 0), "$n");
  var kn = /* @__PURE__ */ __name((t, e2, n5, r3) => e2 + n5 + r3 + (t / 2 ** 32 | 0) | 0, "kn");
  var Rn = /* @__PURE__ */ __name((t, e2, n5, r3) => (t >>> 0) + (e2 >>> 0) + (n5 >>> 0) + (r3 >>> 0), "Rn");
  var jn = /* @__PURE__ */ __name((t, e2, n5, r3, o5) => e2 + n5 + r3 + o5 + (t / 2 ** 32 | 0) | 0, "jn");
  var Zn = /* @__PURE__ */ __name((t, e2, n5, r3, o5) => (t >>> 0) + (e2 >>> 0) + (n5 >>> 0) + (r3 >>> 0) + (o5 >>> 0), "Zn");
  var Gn = /* @__PURE__ */ __name((t, e2, n5, r3, o5, s3) => e2 + n5 + r3 + o5 + s3 + (t / 2 ** 32 | 0) | 0, "Gn");
  var x3 = { fromBig: le, split: mn, toBig: _n2, shrSH: Sn, shrSL: vn, rotrSH: In, rotrSL: Un, rotrBH: Tn, rotrBL: Fn, rotr32H: Nn, rotr32L: Ln, rotlSH: On, rotlSL: Hn, rotlBH: zn, rotlBL: Mn, add: qn, add3L: $n, add3H: kn, add4L: Rn, add4H: jn, add5H: Gn, add5L: Zn };
  var [Vn, Yn] = (() => x3.split(["0x428a2f98d728ae22", "0x7137449123ef65cd", "0xb5c0fbcfec4d3b2f", "0xe9b5dba58189dbbc", "0x3956c25bf348b538", "0x59f111f1b605d019", "0x923f82a4af194f9b", "0xab1c5ed5da6d8118", "0xd807aa98a3030242", "0x12835b0145706fbe", "0x243185be4ee4b28c", "0x550c7dc3d5ffb4e2", "0x72be5d74f27b896f", "0x80deb1fe3b1696b1", "0x9bdc06a725c71235", "0xc19bf174cf692694", "0xe49b69c19ef14ad2", "0xefbe4786384f25e3", "0x0fc19dc68b8cd5b5", "0x240ca1cc77ac9c65", "0x2de92c6f592b0275", "0x4a7484aa6ea6e483", "0x5cb0a9dcbd41fbd4", "0x76f988da831153b5", "0x983e5152ee66dfab", "0xa831c66d2db43210", "0xb00327c898fb213f", "0xbf597fc7beef0ee4", "0xc6e00bf33da88fc2", "0xd5a79147930aa725", "0x06ca6351e003826f", "0x142929670a0e6e70", "0x27b70a8546d22ffc", "0x2e1b21385c26c926", "0x4d2c6dfc5ac42aed", "0x53380d139d95b3df", "0x650a73548baf63de", "0x766a0abb3c77b2a8", "0x81c2c92e47edaee6", "0x92722c851482353b", "0xa2bfe8a14cf10364", "0xa81a664bbc423001", "0xc24b8b70d0f89791", "0xc76c51a30654be30", "0xd192e819d6ef5218", "0xd69906245565a910", "0xf40e35855771202a", "0x106aa07032bbd1b8", "0x19a4c116b8d2d0c8", "0x1e376c085141ab53", "0x2748774cdf8eeb99", "0x34b0bcb5e19b48a8", "0x391c0cb3c5c95a63", "0x4ed8aa4ae3418acb", "0x5b9cca4f7763e373", "0x682e6ff3d6b2b8a3", "0x748f82ee5defb2fc", "0x78a5636f43172f60", "0x84c87814a1f0ab72", "0x8cc702081a6439ec", "0x90befffa23631e28", "0xa4506cebde82bde9", "0xbef9a3f7b2c67915", "0xc67178f2e372532b", "0xca273eceea26619c", "0xd186b8c721c0c207", "0xeada7dd6cde0eb1e", "0xf57d4f7fee6ed178", "0x06f067aa72176fba", "0x0a637dc5a2c898a6", "0x113f9804bef90dae", "0x1b710b35131c471b", "0x28db77f523047d84", "0x32caab7b40c72493", "0x3c9ebe0a15c9bebc", "0x431d67c49c100d4c", "0x4cc5d4becb3e42b6", "0x597f299cfc657e2a", "0x5fcb6fab3ad6faec", "0x6c44198c4a475817"].map((t) => BigInt(t))))();
  var P3 = new Uint32Array(80);
  var Q = new Uint32Array(80);
  var _Jn = class _Jn extends An {
    constructor() {
      super(128, 64, 16, false), this.Ah = 1779033703, this.Al = -205731576, this.Bh = -1150833019, this.Bl = -2067093701, this.Ch = 1013904242, this.Cl = -23791573, this.Dh = -1521486534, this.Dl = 1595750129, this.Eh = 1359893119, this.El = -1377402159, this.Fh = -1694144372, this.Fl = 725511199, this.Gh = 528734635, this.Gl = -79577749, this.Hh = 1541459225, this.Hl = 327033209;
    }
    get() {
      const { Ah: e2, Al: n5, Bh: r3, Bl: o5, Ch: s3, Cl: a4, Dh: u2, Dl: i4, Eh: D4, El: c6, Fh: l7, Fl: p5, Gh: w4, Gl: h6, Hh: g4, Hl: S5 } = this;
      return [e2, n5, r3, o5, s3, a4, u2, i4, D4, c6, l7, p5, w4, h6, g4, S5];
    }
    set(e2, n5, r3, o5, s3, a4, u2, i4, D4, c6, l7, p5, w4, h6, g4, S5) {
      this.Ah = e2 | 0, this.Al = n5 | 0, this.Bh = r3 | 0, this.Bl = o5 | 0, this.Ch = s3 | 0, this.Cl = a4 | 0, this.Dh = u2 | 0, this.Dl = i4 | 0, this.Eh = D4 | 0, this.El = c6 | 0, this.Fh = l7 | 0, this.Fl = p5 | 0, this.Gh = w4 | 0, this.Gl = h6 | 0, this.Hh = g4 | 0, this.Hl = S5 | 0;
    }
    process(e2, n5) {
      for (let d4 = 0; d4 < 16; d4++, n5 += 4) P3[d4] = e2.getUint32(n5), Q[d4] = e2.getUint32(n5 += 4);
      for (let d4 = 16; d4 < 80; d4++) {
        const m3 = P3[d4 - 15] | 0, F2 = Q[d4 - 15] | 0, q3 = x3.rotrSH(m3, F2, 1) ^ x3.rotrSH(m3, F2, 8) ^ x3.shrSH(m3, F2, 7), z6 = x3.rotrSL(m3, F2, 1) ^ x3.rotrSL(m3, F2, 8) ^ x3.shrSL(m3, F2, 7), I3 = P3[d4 - 2] | 0, O6 = Q[d4 - 2] | 0, ot2 = x3.rotrSH(I3, O6, 19) ^ x3.rotrBH(I3, O6, 61) ^ x3.shrSH(I3, O6, 6), tt3 = x3.rotrSL(I3, O6, 19) ^ x3.rotrBL(I3, O6, 61) ^ x3.shrSL(I3, O6, 6), st3 = x3.add4L(z6, tt3, Q[d4 - 7], Q[d4 - 16]), at = x3.add4H(st3, q3, ot2, P3[d4 - 7], P3[d4 - 16]);
        P3[d4] = at | 0, Q[d4] = st3 | 0;
      }
      let { Ah: r3, Al: o5, Bh: s3, Bl: a4, Ch: u2, Cl: i4, Dh: D4, Dl: c6, Eh: l7, El: p5, Fh: w4, Fl: h6, Gh: g4, Gl: S5, Hh: v6, Hl: L3 } = this;
      for (let d4 = 0; d4 < 80; d4++) {
        const m3 = x3.rotrSH(l7, p5, 14) ^ x3.rotrSH(l7, p5, 18) ^ x3.rotrBH(l7, p5, 41), F2 = x3.rotrSL(l7, p5, 14) ^ x3.rotrSL(l7, p5, 18) ^ x3.rotrBL(l7, p5, 41), q3 = l7 & w4 ^ ~l7 & g4, z6 = p5 & h6 ^ ~p5 & S5, I3 = x3.add5L(L3, F2, z6, Yn[d4], Q[d4]), O6 = x3.add5H(I3, v6, m3, q3, Vn[d4], P3[d4]), ot2 = I3 | 0, tt3 = x3.rotrSH(r3, o5, 28) ^ x3.rotrBH(r3, o5, 34) ^ x3.rotrBH(r3, o5, 39), st3 = x3.rotrSL(r3, o5, 28) ^ x3.rotrBL(r3, o5, 34) ^ x3.rotrBL(r3, o5, 39), at = r3 & s3 ^ r3 & u2 ^ s3 & u2, Ct3 = o5 & a4 ^ o5 & i4 ^ a4 & i4;
        v6 = g4 | 0, L3 = S5 | 0, g4 = w4 | 0, S5 = h6 | 0, w4 = l7 | 0, h6 = p5 | 0, { h: l7, l: p5 } = x3.add(D4 | 0, c6 | 0, O6 | 0, ot2 | 0), D4 = u2 | 0, c6 = i4 | 0, u2 = s3 | 0, i4 = a4 | 0, s3 = r3 | 0, a4 = o5 | 0;
        const At3 = x3.add3L(ot2, st3, Ct3);
        r3 = x3.add3H(At3, O6, tt3, at), o5 = At3 | 0;
      }
      ({ h: r3, l: o5 } = x3.add(this.Ah | 0, this.Al | 0, r3 | 0, o5 | 0)), { h: s3, l: a4 } = x3.add(this.Bh | 0, this.Bl | 0, s3 | 0, a4 | 0), { h: u2, l: i4 } = x3.add(this.Ch | 0, this.Cl | 0, u2 | 0, i4 | 0), { h: D4, l: c6 } = x3.add(this.Dh | 0, this.Dl | 0, D4 | 0, c6 | 0), { h: l7, l: p5 } = x3.add(this.Eh | 0, this.El | 0, l7 | 0, p5 | 0), { h: w4, l: h6 } = x3.add(this.Fh | 0, this.Fl | 0, w4 | 0, h6 | 0), { h: g4, l: S5 } = x3.add(this.Gh | 0, this.Gl | 0, g4 | 0, S5 | 0), { h: v6, l: L3 } = x3.add(this.Hh | 0, this.Hl | 0, v6 | 0, L3 | 0), this.set(r3, o5, s3, a4, u2, i4, D4, c6, l7, p5, w4, h6, g4, S5, v6, L3);
    }
    roundClean() {
      P3.fill(0), Q.fill(0);
    }
    destroy() {
      this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
  };
  __name(_Jn, "Jn");
  var Jn = _Jn;
  var Kn = Bn(() => new Jn());
  var vt = BigInt(0);
  var be = BigInt(1);
  var Wn = BigInt(2);
  function It(t) {
    return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
  }
  __name(It, "It");
  function Ut(t) {
    if (!It(t)) throw new Error("Uint8Array expected");
  }
  __name(Ut, "Ut");
  function Tt(t, e2) {
    if (typeof e2 != "boolean") throw new Error(t + " boolean expected, got " + e2);
  }
  __name(Tt, "Tt");
  var Xn = Array.from({ length: 256 }, (t, e2) => e2.toString(16).padStart(2, "0"));
  function Ft(t) {
    Ut(t);
    let e2 = "";
    for (let n5 = 0; n5 < t.length; n5++) e2 += Xn[t[n5]];
    return e2;
  }
  __name(Ft, "Ft");
  function pe(t) {
    if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
    return t === "" ? vt : BigInt("0x" + t);
  }
  __name(pe, "pe");
  var K3 = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
  function we(t) {
    if (t >= K3._0 && t <= K3._9) return t - K3._0;
    if (t >= K3.A && t <= K3.F) return t - (K3.A - 10);
    if (t >= K3.a && t <= K3.f) return t - (K3.a - 10);
  }
  __name(we, "we");
  function Ee(t) {
    if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
    const e2 = t.length, n5 = e2 / 2;
    if (e2 % 2) throw new Error("hex string expected, got unpadded hex of length " + e2);
    const r3 = new Uint8Array(n5);
    for (let o5 = 0, s3 = 0; o5 < n5; o5++, s3 += 2) {
      const a4 = we(t.charCodeAt(s3)), u2 = we(t.charCodeAt(s3 + 1));
      if (a4 === void 0 || u2 === void 0) {
        const i4 = t[s3] + t[s3 + 1];
        throw new Error('hex string expected, got non-hex character "' + i4 + '" at index ' + s3);
      }
      r3[o5] = a4 * 16 + u2;
    }
    return r3;
  }
  __name(Ee, "Ee");
  function Pn(t) {
    return pe(Ft(t));
  }
  __name(Pn, "Pn");
  function Et(t) {
    return Ut(t), pe(Ft(Uint8Array.from(t).reverse()));
  }
  __name(Et, "Et");
  function ge(t, e2) {
    return Ee(t.toString(16).padStart(e2 * 2, "0"));
  }
  __name(ge, "ge");
  function Nt(t, e2) {
    return ge(t, e2).reverse();
  }
  __name(Nt, "Nt");
  function W(t, e2, n5) {
    let r3;
    if (typeof e2 == "string") try {
      r3 = Ee(e2);
    } catch (s3) {
      throw new Error(t + " must be hex string or Uint8Array, cause: " + s3);
    }
    else if (It(e2)) r3 = Uint8Array.from(e2);
    else throw new Error(t + " must be hex string or Uint8Array");
    const o5 = r3.length;
    if (typeof n5 == "number" && o5 !== n5) throw new Error(t + " of length " + n5 + " expected, got " + o5);
    return r3;
  }
  __name(W, "W");
  function ye(...t) {
    let e2 = 0;
    for (let r3 = 0; r3 < t.length; r3++) {
      const o5 = t[r3];
      Ut(o5), e2 += o5.length;
    }
    const n5 = new Uint8Array(e2);
    for (let r3 = 0, o5 = 0; r3 < t.length; r3++) {
      const s3 = t[r3];
      n5.set(s3, o5), o5 += s3.length;
    }
    return n5;
  }
  __name(ye, "ye");
  var Lt = /* @__PURE__ */ __name((t) => typeof t == "bigint" && vt <= t, "Lt");
  function Qn(t, e2, n5) {
    return Lt(t) && Lt(e2) && Lt(n5) && e2 <= t && t < n5;
  }
  __name(Qn, "Qn");
  function ft(t, e2, n5, r3) {
    if (!Qn(e2, n5, r3)) throw new Error("expected valid " + t + ": " + n5 + " <= n < " + r3 + ", got " + e2);
  }
  __name(ft, "ft");
  function tr(t) {
    let e2;
    for (e2 = 0; t > vt; t >>= be, e2 += 1) ;
    return e2;
  }
  __name(tr, "tr");
  var er = /* @__PURE__ */ __name((t) => (Wn << BigInt(t - 1)) - be, "er");
  var nr = { bigint: /* @__PURE__ */ __name((t) => typeof t == "bigint", "bigint"), function: /* @__PURE__ */ __name((t) => typeof t == "function", "function"), boolean: /* @__PURE__ */ __name((t) => typeof t == "boolean", "boolean"), string: /* @__PURE__ */ __name((t) => typeof t == "string", "string"), stringOrUint8Array: /* @__PURE__ */ __name((t) => typeof t == "string" || It(t), "stringOrUint8Array"), isSafeInteger: /* @__PURE__ */ __name((t) => Number.isSafeInteger(t), "isSafeInteger"), array: /* @__PURE__ */ __name((t) => Array.isArray(t), "array"), field: /* @__PURE__ */ __name((t, e2) => e2.Fp.isValid(t), "field"), hash: /* @__PURE__ */ __name((t) => typeof t == "function" && Number.isSafeInteger(t.outputLen), "hash") };
  function Ot(t, e2, n5 = {}) {
    const r3 = /* @__PURE__ */ __name((o5, s3, a4) => {
      const u2 = nr[s3];
      if (typeof u2 != "function") throw new Error("invalid validator function");
      const i4 = t[o5];
      if (!(a4 && i4 === void 0) && !u2(i4, t)) throw new Error("param " + String(o5) + " is invalid. Expected " + s3 + ", got " + i4);
    }, "r");
    for (const [o5, s3] of Object.entries(e2)) r3(o5, s3, false);
    for (const [o5, s3] of Object.entries(n5)) r3(o5, s3, true);
    return t;
  }
  __name(Ot, "Ot");
  function xe(t) {
    const e2 = /* @__PURE__ */ new WeakMap();
    return (n5, ...r3) => {
      const o5 = e2.get(n5);
      if (o5 !== void 0) return o5;
      const s3 = t(n5, ...r3);
      return e2.set(n5, s3), s3;
    };
  }
  __name(xe, "xe");
  var M3 = BigInt(0);
  var N3 = BigInt(1);
  var nt = BigInt(2);
  var rr = BigInt(3);
  var Ht = BigInt(4);
  var Be = BigInt(5);
  var Ce = BigInt(8);
  function H(t, e2) {
    const n5 = t % e2;
    return n5 >= M3 ? n5 : e2 + n5;
  }
  __name(H, "H");
  function or(t, e2, n5) {
    if (e2 < M3) throw new Error("invalid exponent, negatives unsupported");
    if (n5 <= M3) throw new Error("invalid modulus");
    if (n5 === N3) return M3;
    let r3 = N3;
    for (; e2 > M3; ) e2 & N3 && (r3 = r3 * t % n5), t = t * t % n5, e2 >>= N3;
    return r3;
  }
  __name(or, "or");
  function J2(t, e2, n5) {
    let r3 = t;
    for (; e2-- > M3; ) r3 *= r3, r3 %= n5;
    return r3;
  }
  __name(J2, "J");
  function Ae(t, e2) {
    if (t === M3) throw new Error("invert: expected non-zero number");
    if (e2 <= M3) throw new Error("invert: expected positive modulus, got " + e2);
    let n5 = H(t, e2), r3 = e2, o5 = M3, s3 = N3;
    for (; n5 !== M3; ) {
      const u2 = r3 / n5, i4 = r3 % n5, D4 = o5 - s3 * u2;
      r3 = n5, n5 = i4, o5 = s3, s3 = D4;
    }
    if (r3 !== N3) throw new Error("invert: does not exist");
    return H(o5, e2);
  }
  __name(Ae, "Ae");
  function sr(t) {
    const e2 = (t - N3) / nt;
    let n5, r3, o5;
    for (n5 = t - N3, r3 = 0; n5 % nt === M3; n5 /= nt, r3++) ;
    for (o5 = nt; o5 < t && or(o5, e2, t) !== t - N3; o5++) if (o5 > 1e3) throw new Error("Cannot find square root: likely non-prime P");
    if (r3 === 1) {
      const a4 = (t + N3) / Ht;
      return function(i4, D4) {
        const c6 = i4.pow(D4, a4);
        if (!i4.eql(i4.sqr(c6), D4)) throw new Error("Cannot find square root");
        return c6;
      };
    }
    const s3 = (n5 + N3) / nt;
    return function(u2, i4) {
      if (u2.pow(i4, e2) === u2.neg(u2.ONE)) throw new Error("Cannot find square root");
      let D4 = r3, c6 = u2.pow(u2.mul(u2.ONE, o5), n5), l7 = u2.pow(i4, s3), p5 = u2.pow(i4, n5);
      for (; !u2.eql(p5, u2.ONE); ) {
        if (u2.eql(p5, u2.ZERO)) return u2.ZERO;
        let w4 = 1;
        for (let g4 = u2.sqr(p5); w4 < D4 && !u2.eql(g4, u2.ONE); w4++) g4 = u2.sqr(g4);
        const h6 = u2.pow(c6, N3 << BigInt(D4 - w4 - 1));
        c6 = u2.sqr(h6), l7 = u2.mul(l7, h6), p5 = u2.mul(p5, c6), D4 = w4;
      }
      return l7;
    };
  }
  __name(sr, "sr");
  function ir(t) {
    if (t % Ht === rr) {
      const e2 = (t + N3) / Ht;
      return function(r3, o5) {
        const s3 = r3.pow(o5, e2);
        if (!r3.eql(r3.sqr(s3), o5)) throw new Error("Cannot find square root");
        return s3;
      };
    }
    if (t % Ce === Be) {
      const e2 = (t - Be) / Ce;
      return function(r3, o5) {
        const s3 = r3.mul(o5, nt), a4 = r3.pow(s3, e2), u2 = r3.mul(o5, a4), i4 = r3.mul(r3.mul(u2, nt), a4), D4 = r3.mul(u2, r3.sub(i4, r3.ONE));
        if (!r3.eql(r3.sqr(D4), o5)) throw new Error("Cannot find square root");
        return D4;
      };
    }
    return sr(t);
  }
  __name(ir, "ir");
  var ur = /* @__PURE__ */ __name((t, e2) => (H(t, e2) & N3) === N3, "ur");
  var cr = ["create", "isValid", "is0", "neg", "inv", "sqrt", "sqr", "eql", "add", "sub", "mul", "pow", "div", "addN", "subN", "mulN", "sqrN"];
  function ar(t) {
    const e2 = { ORDER: "bigint", MASK: "bigint", BYTES: "isSafeInteger", BITS: "isSafeInteger" }, n5 = cr.reduce((r3, o5) => (r3[o5] = "function", r3), e2);
    return Ot(t, n5);
  }
  __name(ar, "ar");
  function fr(t, e2, n5) {
    if (n5 < M3) throw new Error("invalid exponent, negatives unsupported");
    if (n5 === M3) return t.ONE;
    if (n5 === N3) return e2;
    let r3 = t.ONE, o5 = e2;
    for (; n5 > M3; ) n5 & N3 && (r3 = t.mul(r3, o5)), o5 = t.sqr(o5), n5 >>= N3;
    return r3;
  }
  __name(fr, "fr");
  function Dr(t, e2) {
    const n5 = new Array(e2.length), r3 = e2.reduce((s3, a4, u2) => t.is0(a4) ? s3 : (n5[u2] = s3, t.mul(s3, a4)), t.ONE), o5 = t.inv(r3);
    return e2.reduceRight((s3, a4, u2) => t.is0(a4) ? s3 : (n5[u2] = t.mul(s3, n5[u2]), t.mul(s3, a4)), o5), n5;
  }
  __name(Dr, "Dr");
  function me(t, e2) {
    const n5 = e2 !== void 0 ? e2 : t.toString(2).length, r3 = Math.ceil(n5 / 8);
    return { nBitLength: n5, nByteLength: r3 };
  }
  __name(me, "me");
  function _e(t, e2, n5 = false, r3 = {}) {
    if (t <= M3) throw new Error("invalid field: expected ORDER > 0, got " + t);
    const { nBitLength: o5, nByteLength: s3 } = me(t, e2);
    if (s3 > 2048) throw new Error("invalid field: expected ORDER of <= 2048 bytes");
    let a4;
    const u2 = Object.freeze({ ORDER: t, isLE: n5, BITS: o5, BYTES: s3, MASK: er(o5), ZERO: M3, ONE: N3, create: /* @__PURE__ */ __name((i4) => H(i4, t), "create"), isValid: /* @__PURE__ */ __name((i4) => {
      if (typeof i4 != "bigint") throw new Error("invalid field element: expected bigint, got " + typeof i4);
      return M3 <= i4 && i4 < t;
    }, "isValid"), is0: /* @__PURE__ */ __name((i4) => i4 === M3, "is0"), isOdd: /* @__PURE__ */ __name((i4) => (i4 & N3) === N3, "isOdd"), neg: /* @__PURE__ */ __name((i4) => H(-i4, t), "neg"), eql: /* @__PURE__ */ __name((i4, D4) => i4 === D4, "eql"), sqr: /* @__PURE__ */ __name((i4) => H(i4 * i4, t), "sqr"), add: /* @__PURE__ */ __name((i4, D4) => H(i4 + D4, t), "add"), sub: /* @__PURE__ */ __name((i4, D4) => H(i4 - D4, t), "sub"), mul: /* @__PURE__ */ __name((i4, D4) => H(i4 * D4, t), "mul"), pow: /* @__PURE__ */ __name((i4, D4) => fr(u2, i4, D4), "pow"), div: /* @__PURE__ */ __name((i4, D4) => H(i4 * Ae(D4, t), t), "div"), sqrN: /* @__PURE__ */ __name((i4) => i4 * i4, "sqrN"), addN: /* @__PURE__ */ __name((i4, D4) => i4 + D4, "addN"), subN: /* @__PURE__ */ __name((i4, D4) => i4 - D4, "subN"), mulN: /* @__PURE__ */ __name((i4, D4) => i4 * D4, "mulN"), inv: /* @__PURE__ */ __name((i4) => Ae(i4, t), "inv"), sqrt: r3.sqrt || ((i4) => (a4 || (a4 = ir(t)), a4(u2, i4))), invertBatch: /* @__PURE__ */ __name((i4) => Dr(u2, i4), "invertBatch"), cmov: /* @__PURE__ */ __name((i4, D4, c6) => c6 ? D4 : i4, "cmov"), toBytes: /* @__PURE__ */ __name((i4) => n5 ? Nt(i4, s3) : ge(i4, s3), "toBytes"), fromBytes: /* @__PURE__ */ __name((i4) => {
      if (i4.length !== s3) throw new Error("Field.fromBytes: expected " + s3 + " bytes, got " + i4.length);
      return n5 ? Et(i4) : Pn(i4);
    }, "fromBytes") });
    return Object.freeze(u2);
  }
  __name(_e, "_e");
  var Se = BigInt(0);
  var gt = BigInt(1);
  function zt(t, e2) {
    const n5 = e2.negate();
    return t ? n5 : e2;
  }
  __name(zt, "zt");
  function ve(t, e2) {
    if (!Number.isSafeInteger(t) || t <= 0 || t > e2) throw new Error("invalid window size, expected [1.." + e2 + "], got W=" + t);
  }
  __name(ve, "ve");
  function Mt(t, e2) {
    ve(t, e2);
    const n5 = Math.ceil(e2 / t) + 1, r3 = 2 ** (t - 1);
    return { windows: n5, windowSize: r3 };
  }
  __name(Mt, "Mt");
  function dr(t, e2) {
    if (!Array.isArray(t)) throw new Error("array expected");
    t.forEach((n5, r3) => {
      if (!(n5 instanceof e2)) throw new Error("invalid point at index " + r3);
    });
  }
  __name(dr, "dr");
  function hr(t, e2) {
    if (!Array.isArray(t)) throw new Error("array of scalars expected");
    t.forEach((n5, r3) => {
      if (!e2.isValid(n5)) throw new Error("invalid scalar at index " + r3);
    });
  }
  __name(hr, "hr");
  var qt = /* @__PURE__ */ new WeakMap();
  var Ie = /* @__PURE__ */ new WeakMap();
  function $t(t) {
    return Ie.get(t) || 1;
  }
  __name($t, "$t");
  function lr(t, e2) {
    return { constTimeNegate: zt, hasPrecomputes(n5) {
      return $t(n5) !== 1;
    }, unsafeLadder(n5, r3, o5 = t.ZERO) {
      let s3 = n5;
      for (; r3 > Se; ) r3 & gt && (o5 = o5.add(s3)), s3 = s3.double(), r3 >>= gt;
      return o5;
    }, precomputeWindow(n5, r3) {
      const { windows: o5, windowSize: s3 } = Mt(r3, e2), a4 = [];
      let u2 = n5, i4 = u2;
      for (let D4 = 0; D4 < o5; D4++) {
        i4 = u2, a4.push(i4);
        for (let c6 = 1; c6 < s3; c6++) i4 = i4.add(u2), a4.push(i4);
        u2 = i4.double();
      }
      return a4;
    }, wNAF(n5, r3, o5) {
      const { windows: s3, windowSize: a4 } = Mt(n5, e2);
      let u2 = t.ZERO, i4 = t.BASE;
      const D4 = BigInt(2 ** n5 - 1), c6 = 2 ** n5, l7 = BigInt(n5);
      for (let p5 = 0; p5 < s3; p5++) {
        const w4 = p5 * a4;
        let h6 = Number(o5 & D4);
        o5 >>= l7, h6 > a4 && (h6 -= c6, o5 += gt);
        const g4 = w4, S5 = w4 + Math.abs(h6) - 1, v6 = p5 % 2 !== 0, L3 = h6 < 0;
        h6 === 0 ? i4 = i4.add(zt(v6, r3[g4])) : u2 = u2.add(zt(L3, r3[S5]));
      }
      return { p: u2, f: i4 };
    }, wNAFUnsafe(n5, r3, o5, s3 = t.ZERO) {
      const { windows: a4, windowSize: u2 } = Mt(n5, e2), i4 = BigInt(2 ** n5 - 1), D4 = 2 ** n5, c6 = BigInt(n5);
      for (let l7 = 0; l7 < a4; l7++) {
        const p5 = l7 * u2;
        if (o5 === Se) break;
        let w4 = Number(o5 & i4);
        if (o5 >>= c6, w4 > u2 && (w4 -= D4, o5 += gt), w4 === 0) continue;
        let h6 = r3[p5 + Math.abs(w4) - 1];
        w4 < 0 && (h6 = h6.negate()), s3 = s3.add(h6);
      }
      return s3;
    }, getPrecomputes(n5, r3, o5) {
      let s3 = qt.get(r3);
      return s3 || (s3 = this.precomputeWindow(r3, n5), n5 !== 1 && qt.set(r3, o5(s3))), s3;
    }, wNAFCached(n5, r3, o5) {
      const s3 = $t(n5);
      return this.wNAF(s3, this.getPrecomputes(s3, n5, o5), r3);
    }, wNAFCachedUnsafe(n5, r3, o5, s3) {
      const a4 = $t(n5);
      return a4 === 1 ? this.unsafeLadder(n5, r3, s3) : this.wNAFUnsafe(a4, this.getPrecomputes(a4, n5, o5), r3, s3);
    }, setWindowSize(n5, r3) {
      ve(r3, e2), Ie.set(n5, r3), qt.delete(n5);
    } };
  }
  __name(lr, "lr");
  function br(t, e2, n5, r3) {
    if (dr(n5, t), hr(r3, e2), n5.length !== r3.length) throw new Error("arrays of points and scalars must have equal length");
    const o5 = t.ZERO, s3 = tr(BigInt(n5.length)), a4 = s3 > 12 ? s3 - 3 : s3 > 4 ? s3 - 2 : s3 ? 2 : 1, u2 = (1 << a4) - 1, i4 = new Array(u2 + 1).fill(o5), D4 = Math.floor((e2.BITS - 1) / a4) * a4;
    let c6 = o5;
    for (let l7 = D4; l7 >= 0; l7 -= a4) {
      i4.fill(o5);
      for (let w4 = 0; w4 < r3.length; w4++) {
        const h6 = r3[w4], g4 = Number(h6 >> BigInt(l7) & BigInt(u2));
        i4[g4] = i4[g4].add(n5[w4]);
      }
      let p5 = o5;
      for (let w4 = i4.length - 1, h6 = o5; w4 > 0; w4--) h6 = h6.add(i4[w4]), p5 = p5.add(h6);
      if (c6 = c6.add(p5), l7 !== 0) for (let w4 = 0; w4 < a4; w4++) c6 = c6.double();
    }
    return c6;
  }
  __name(br, "br");
  function pr(t) {
    return ar(t.Fp), Ot(t, { n: "bigint", h: "bigint", Gx: "field", Gy: "field" }, { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" }), Object.freeze({ ...me(t.n, t.nBitLength), ...t, p: t.Fp.ORDER });
  }
  __name(pr, "pr");
  var G2 = BigInt(0);
  var j3 = BigInt(1);
  var yt = BigInt(2);
  var wr = BigInt(8);
  var Er = { zip215: true };
  function gr(t) {
    const e2 = pr(t);
    return Ot(t, { hash: "function", a: "bigint", d: "bigint", randomBytes: "function" }, { adjustScalarBytes: "function", domain: "function", uvRatio: "function", mapToCurve: "function" }), Object.freeze({ ...e2 });
  }
  __name(gr, "gr");
  function yr(t) {
    const e2 = gr(t), { Fp: n5, n: r3, prehash: o5, hash: s3, randomBytes: a4, nByteLength: u2, h: i4 } = e2, D4 = yt << BigInt(u2 * 8) - j3, c6 = n5.create, l7 = _e(e2.n, e2.nBitLength), p5 = e2.uvRatio || ((y5, f6) => {
      try {
        return { isValid: true, value: n5.sqrt(y5 * n5.inv(f6)) };
      } catch {
        return { isValid: false, value: G2 };
      }
    }), w4 = e2.adjustScalarBytes || ((y5) => y5), h6 = e2.domain || ((y5, f6, b6) => {
      if (Tt("phflag", b6), f6.length || b6) throw new Error("Contexts/pre-hash are not supported");
      return y5;
    });
    function g4(y5, f6) {
      ft("coordinate " + y5, f6, G2, D4);
    }
    __name(g4, "g");
    function S5(y5) {
      if (!(y5 instanceof d4)) throw new Error("ExtendedPoint expected");
    }
    __name(S5, "S");
    const v6 = xe((y5, f6) => {
      const { ex: b6, ey: E5, ez: B3 } = y5, C5 = y5.is0();
      f6 == null && (f6 = C5 ? wr : n5.inv(B3));
      const A4 = c6(b6 * f6), U3 = c6(E5 * f6), _5 = c6(B3 * f6);
      if (C5) return { x: G2, y: j3 };
      if (_5 !== j3) throw new Error("invZ was invalid");
      return { x: A4, y: U3 };
    }), L3 = xe((y5) => {
      const { a: f6, d: b6 } = e2;
      if (y5.is0()) throw new Error("bad point: ZERO");
      const { ex: E5, ey: B3, ez: C5, et: A4 } = y5, U3 = c6(E5 * E5), _5 = c6(B3 * B3), T4 = c6(C5 * C5), $3 = c6(T4 * T4), R4 = c6(U3 * f6), V5 = c6(T4 * c6(R4 + _5)), Y4 = c6($3 + c6(b6 * c6(U3 * _5)));
      if (V5 !== Y4) throw new Error("bad point: equation left != right (1)");
      const Z2 = c6(E5 * B3), X5 = c6(C5 * A4);
      if (Z2 !== X5) throw new Error("bad point: equation left != right (2)");
      return true;
    });
    const _d2 = class _d2 {
      constructor(f6, b6, E5, B3) {
        this.ex = f6, this.ey = b6, this.ez = E5, this.et = B3, g4("x", f6), g4("y", b6), g4("z", E5), g4("t", B3), Object.freeze(this);
      }
      get x() {
        return this.toAffine().x;
      }
      get y() {
        return this.toAffine().y;
      }
      static fromAffine(f6) {
        if (f6 instanceof _d2) throw new Error("extended point not allowed");
        const { x: b6, y: E5 } = f6 || {};
        return g4("x", b6), g4("y", E5), new _d2(b6, E5, j3, c6(b6 * E5));
      }
      static normalizeZ(f6) {
        const b6 = n5.invertBatch(f6.map((E5) => E5.ez));
        return f6.map((E5, B3) => E5.toAffine(b6[B3])).map(_d2.fromAffine);
      }
      static msm(f6, b6) {
        return br(_d2, l7, f6, b6);
      }
      _setWindowSize(f6) {
        q3.setWindowSize(this, f6);
      }
      assertValidity() {
        L3(this);
      }
      equals(f6) {
        S5(f6);
        const { ex: b6, ey: E5, ez: B3 } = this, { ex: C5, ey: A4, ez: U3 } = f6, _5 = c6(b6 * U3), T4 = c6(C5 * B3), $3 = c6(E5 * U3), R4 = c6(A4 * B3);
        return _5 === T4 && $3 === R4;
      }
      is0() {
        return this.equals(_d2.ZERO);
      }
      negate() {
        return new _d2(c6(-this.ex), this.ey, this.ez, c6(-this.et));
      }
      double() {
        const { a: f6 } = e2, { ex: b6, ey: E5, ez: B3 } = this, C5 = c6(b6 * b6), A4 = c6(E5 * E5), U3 = c6(yt * c6(B3 * B3)), _5 = c6(f6 * C5), T4 = b6 + E5, $3 = c6(c6(T4 * T4) - C5 - A4), R4 = _5 + A4, V5 = R4 - U3, Y4 = _5 - A4, Z2 = c6($3 * V5), X5 = c6(R4 * Y4), et3 = c6($3 * Y4), pt3 = c6(V5 * R4);
        return new _d2(Z2, X5, pt3, et3);
      }
      add(f6) {
        S5(f6);
        const { a: b6, d: E5 } = e2, { ex: B3, ey: C5, ez: A4, et: U3 } = this, { ex: _5, ey: T4, ez: $3, et: R4 } = f6;
        if (b6 === BigInt(-1)) {
          const re3 = c6((C5 - B3) * (T4 + _5)), oe3 = c6((C5 + B3) * (T4 - _5)), mt3 = c6(oe3 - re3);
          if (mt3 === G2) return this.double();
          const se4 = c6(A4 * yt * R4), ie3 = c6(U3 * yt * $3), ue = ie3 + se4, ce2 = oe3 + re3, ae3 = ie3 - se4, Dn3 = c6(ue * mt3), dn3 = c6(ce2 * ae3), hn3 = c6(ue * ae3), ln3 = c6(mt3 * ce2);
          return new _d2(Dn3, dn3, ln3, hn3);
        }
        const V5 = c6(B3 * _5), Y4 = c6(C5 * T4), Z2 = c6(U3 * E5 * R4), X5 = c6(A4 * $3), et3 = c6((B3 + C5) * (_5 + T4) - V5 - Y4), pt3 = X5 - Z2, ee4 = X5 + Z2, ne3 = c6(Y4 - b6 * V5), un3 = c6(et3 * pt3), cn3 = c6(ee4 * ne3), an3 = c6(et3 * ne3), fn3 = c6(pt3 * ee4);
        return new _d2(un3, cn3, fn3, an3);
      }
      subtract(f6) {
        return this.add(f6.negate());
      }
      wNAF(f6) {
        return q3.wNAFCached(this, f6, _d2.normalizeZ);
      }
      multiply(f6) {
        const b6 = f6;
        ft("scalar", b6, j3, r3);
        const { p: E5, f: B3 } = this.wNAF(b6);
        return _d2.normalizeZ([E5, B3])[0];
      }
      multiplyUnsafe(f6, b6 = _d2.ZERO) {
        const E5 = f6;
        return ft("scalar", E5, G2, r3), E5 === G2 ? F2 : this.is0() || E5 === j3 ? this : q3.wNAFCachedUnsafe(this, E5, _d2.normalizeZ, b6);
      }
      isSmallOrder() {
        return this.multiplyUnsafe(i4).is0();
      }
      isTorsionFree() {
        return q3.unsafeLadder(this, r3).is0();
      }
      toAffine(f6) {
        return v6(this, f6);
      }
      clearCofactor() {
        const { h: f6 } = e2;
        return f6 === j3 ? this : this.multiplyUnsafe(f6);
      }
      static fromHex(f6, b6 = false) {
        const { d: E5, a: B3 } = e2, C5 = n5.BYTES;
        f6 = W("pointHex", f6, C5), Tt("zip215", b6);
        const A4 = f6.slice(), U3 = f6[C5 - 1];
        A4[C5 - 1] = U3 & -129;
        const _5 = Et(A4), T4 = b6 ? D4 : n5.ORDER;
        ft("pointHex.y", _5, G2, T4);
        const $3 = c6(_5 * _5), R4 = c6($3 - j3), V5 = c6(E5 * $3 - B3);
        let { isValid: Y4, value: Z2 } = p5(R4, V5);
        if (!Y4) throw new Error("Point.fromHex: invalid y coordinate");
        const X5 = (Z2 & j3) === j3, et3 = (U3 & 128) !== 0;
        if (!b6 && Z2 === G2 && et3) throw new Error("Point.fromHex: x=0 and x_0=1");
        return et3 !== X5 && (Z2 = c6(-Z2)), _d2.fromAffine({ x: Z2, y: _5 });
      }
      static fromPrivateKey(f6) {
        return O6(f6).point;
      }
      toRawBytes() {
        const { x: f6, y: b6 } = this.toAffine(), E5 = Nt(b6, n5.BYTES);
        return E5[E5.length - 1] |= f6 & j3 ? 128 : 0, E5;
      }
      toHex() {
        return Ft(this.toRawBytes());
      }
    };
    __name(_d2, "d");
    let d4 = _d2;
    d4.BASE = new d4(e2.Gx, e2.Gy, j3, c6(e2.Gx * e2.Gy)), d4.ZERO = new d4(G2, j3, j3, G2);
    const { BASE: m3, ZERO: F2 } = d4, q3 = lr(d4, u2 * 8);
    function z6(y5) {
      return H(y5, r3);
    }
    __name(z6, "z");
    function I3(y5) {
      return z6(Et(y5));
    }
    __name(I3, "I");
    function O6(y5) {
      const f6 = n5.BYTES;
      y5 = W("private key", y5, f6);
      const b6 = W("hashed private key", s3(y5), 2 * f6), E5 = w4(b6.slice(0, f6)), B3 = b6.slice(f6, 2 * f6), C5 = I3(E5), A4 = m3.multiply(C5), U3 = A4.toRawBytes();
      return { head: E5, prefix: B3, scalar: C5, point: A4, pointBytes: U3 };
    }
    __name(O6, "O");
    function ot2(y5) {
      return O6(y5).pointBytes;
    }
    __name(ot2, "ot");
    function tt3(y5 = new Uint8Array(), ...f6) {
      const b6 = ye(...f6);
      return I3(s3(h6(b6, W("context", y5), !!o5)));
    }
    __name(tt3, "tt");
    function st3(y5, f6, b6 = {}) {
      y5 = W("message", y5), o5 && (y5 = o5(y5));
      const { prefix: E5, scalar: B3, pointBytes: C5 } = O6(f6), A4 = tt3(b6.context, E5, y5), U3 = m3.multiply(A4).toRawBytes(), _5 = tt3(b6.context, U3, C5, y5), T4 = z6(A4 + _5 * B3);
      ft("signature.s", T4, G2, r3);
      const $3 = ye(U3, Nt(T4, n5.BYTES));
      return W("result", $3, n5.BYTES * 2);
    }
    __name(st3, "st");
    const at = Er;
    function Ct3(y5, f6, b6, E5 = at) {
      const { context: B3, zip215: C5 } = E5, A4 = n5.BYTES;
      y5 = W("signature", y5, 2 * A4), f6 = W("message", f6), b6 = W("publicKey", b6, A4), C5 !== void 0 && Tt("zip215", C5), o5 && (f6 = o5(f6));
      const U3 = Et(y5.slice(A4, 2 * A4));
      let _5, T4, $3;
      try {
        _5 = d4.fromHex(b6, C5), T4 = d4.fromHex(y5.slice(0, A4), C5), $3 = m3.multiplyUnsafe(U3);
      } catch {
        return false;
      }
      if (!C5 && _5.isSmallOrder()) return false;
      const R4 = tt3(B3, T4.toRawBytes(), _5.toRawBytes(), f6);
      return T4.add(_5.multiplyUnsafe(R4)).subtract($3).clearCofactor().equals(d4.ZERO);
    }
    __name(Ct3, "Ct");
    return m3._setWindowSize(8), { CURVE: e2, getPublicKey: ot2, sign: st3, verify: Ct3, ExtendedPoint: d4, utils: { getExtendedPublicKey: O6, randomPrivateKey: /* @__PURE__ */ __name(() => a4(n5.BYTES), "randomPrivateKey"), precompute(y5 = 8, f6 = d4.BASE) {
      return f6._setWindowSize(y5), f6.multiply(BigInt(3)), f6;
    } } };
  }
  __name(yr, "yr");
  BigInt(0), BigInt(1);
  var kt = BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949");
  var Ue = BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");
  BigInt(0);
  var xr = BigInt(1);
  var Te = BigInt(2);
  BigInt(3);
  var Br = BigInt(5);
  var Cr = BigInt(8);
  function Ar(t) {
    const e2 = BigInt(10), n5 = BigInt(20), r3 = BigInt(40), o5 = BigInt(80), s3 = kt, u2 = t * t % s3 * t % s3, i4 = J2(u2, Te, s3) * u2 % s3, D4 = J2(i4, xr, s3) * t % s3, c6 = J2(D4, Br, s3) * D4 % s3, l7 = J2(c6, e2, s3) * c6 % s3, p5 = J2(l7, n5, s3) * l7 % s3, w4 = J2(p5, r3, s3) * p5 % s3, h6 = J2(w4, o5, s3) * w4 % s3, g4 = J2(h6, o5, s3) * w4 % s3, S5 = J2(g4, e2, s3) * c6 % s3;
    return { pow_p_5_8: J2(S5, Te, s3) * t % s3, b2: u2 };
  }
  __name(Ar, "Ar");
  function mr(t) {
    return t[0] &= 248, t[31] &= 127, t[31] |= 64, t;
  }
  __name(mr, "mr");
  function _r(t, e2) {
    const n5 = kt, r3 = H(e2 * e2 * e2, n5), o5 = H(r3 * r3 * e2, n5), s3 = Ar(t * o5).pow_p_5_8;
    let a4 = H(t * r3 * s3, n5);
    const u2 = H(e2 * a4 * a4, n5), i4 = a4, D4 = H(a4 * Ue, n5), c6 = u2 === t, l7 = u2 === H(-t, n5), p5 = u2 === H(-t * Ue, n5);
    return c6 && (a4 = i4), (l7 || p5) && (a4 = D4), ur(a4, n5) && (a4 = H(-a4, n5)), { isValid: c6 || l7, value: a4 };
  }
  __name(_r, "_r");
  var Sr = (() => _e(kt, void 0, true))();
  var vr = (() => ({ a: BigInt(-1), d: BigInt("37095705934669439343138083508754565189542113879843219016388785533085940283555"), Fp: Sr, n: BigInt("7237005577332262213973186563042994240857116359379907606001950938285454250989"), h: Cr, Gx: BigInt("15112221349535400772501151409588531511454012693041857206046113283949847762202"), Gy: BigInt("46316835694926478169428394003475163141307993866256225615783033603165251855960"), hash: Kn, randomBytes: he, adjustScalarBytes: mr, uvRatio: _r }))();
  var Rt = (() => yr(vr))();
  var jt = "EdDSA";
  var Zt = "JWT";
  var ut = ".";
  var Dt = "base64url";
  var Gt = "utf8";
  var xt = "utf8";
  var Vt = ":";
  var Yt = "did";
  var Jt = "key";
  var dt = "base58btc";
  var Kt = "z";
  var Wt = "K36";
  var Ne = 32;
  function Xt(t) {
    return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
  }
  __name(Xt, "Xt");
  function Le(t = 0) {
    return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? Xt(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
  }
  __name(Le, "Le");
  function Oe(t, e2) {
    e2 || (e2 = t.reduce((o5, s3) => o5 + s3.length, 0));
    const n5 = Le(e2);
    let r3 = 0;
    for (const o5 of t) n5.set(o5, r3), r3 += o5.length;
    return Xt(n5);
  }
  __name(Oe, "Oe");
  function Ir(t, e2) {
    if (t.length >= 255) throw new TypeError("Alphabet too long");
    for (var n5 = new Uint8Array(256), r3 = 0; r3 < n5.length; r3++) n5[r3] = 255;
    for (var o5 = 0; o5 < t.length; o5++) {
      var s3 = t.charAt(o5), a4 = s3.charCodeAt(0);
      if (n5[a4] !== 255) throw new TypeError(s3 + " is ambiguous");
      n5[a4] = o5;
    }
    var u2 = t.length, i4 = t.charAt(0), D4 = Math.log(u2) / Math.log(256), c6 = Math.log(256) / Math.log(u2);
    function l7(h6) {
      if (h6 instanceof Uint8Array || (ArrayBuffer.isView(h6) ? h6 = new Uint8Array(h6.buffer, h6.byteOffset, h6.byteLength) : Array.isArray(h6) && (h6 = Uint8Array.from(h6))), !(h6 instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
      if (h6.length === 0) return "";
      for (var g4 = 0, S5 = 0, v6 = 0, L3 = h6.length; v6 !== L3 && h6[v6] === 0; ) v6++, g4++;
      for (var d4 = (L3 - v6) * c6 + 1 >>> 0, m3 = new Uint8Array(d4); v6 !== L3; ) {
        for (var F2 = h6[v6], q3 = 0, z6 = d4 - 1; (F2 !== 0 || q3 < S5) && z6 !== -1; z6--, q3++) F2 += 256 * m3[z6] >>> 0, m3[z6] = F2 % u2 >>> 0, F2 = F2 / u2 >>> 0;
        if (F2 !== 0) throw new Error("Non-zero carry");
        S5 = q3, v6++;
      }
      for (var I3 = d4 - S5; I3 !== d4 && m3[I3] === 0; ) I3++;
      for (var O6 = i4.repeat(g4); I3 < d4; ++I3) O6 += t.charAt(m3[I3]);
      return O6;
    }
    __name(l7, "l");
    function p5(h6) {
      if (typeof h6 != "string") throw new TypeError("Expected String");
      if (h6.length === 0) return new Uint8Array();
      var g4 = 0;
      if (h6[g4] !== " ") {
        for (var S5 = 0, v6 = 0; h6[g4] === i4; ) S5++, g4++;
        for (var L3 = (h6.length - g4) * D4 + 1 >>> 0, d4 = new Uint8Array(L3); h6[g4]; ) {
          var m3 = n5[h6.charCodeAt(g4)];
          if (m3 === 255) return;
          for (var F2 = 0, q3 = L3 - 1; (m3 !== 0 || F2 < v6) && q3 !== -1; q3--, F2++) m3 += u2 * d4[q3] >>> 0, d4[q3] = m3 % 256 >>> 0, m3 = m3 / 256 >>> 0;
          if (m3 !== 0) throw new Error("Non-zero carry");
          v6 = F2, g4++;
        }
        if (h6[g4] !== " ") {
          for (var z6 = L3 - v6; z6 !== L3 && d4[z6] === 0; ) z6++;
          for (var I3 = new Uint8Array(S5 + (L3 - z6)), O6 = S5; z6 !== L3; ) I3[O6++] = d4[z6++];
          return I3;
        }
      }
    }
    __name(p5, "p");
    function w4(h6) {
      var g4 = p5(h6);
      if (g4) return g4;
      throw new Error(`Non-${e2} character`);
    }
    __name(w4, "w");
    return { encode: l7, decodeUnsafe: p5, decode: w4 };
  }
  __name(Ir, "Ir");
  var Ur = Ir;
  var Tr = Ur;
  var He = /* @__PURE__ */ __name((t) => {
    if (t instanceof Uint8Array && t.constructor.name === "Uint8Array") return t;
    if (t instanceof ArrayBuffer) return new Uint8Array(t);
    if (ArrayBuffer.isView(t)) return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
    throw new Error("Unknown type, must be binary type");
  }, "He");
  var Fr = /* @__PURE__ */ __name((t) => new TextEncoder().encode(t), "Fr");
  var Nr = /* @__PURE__ */ __name((t) => new TextDecoder().decode(t), "Nr");
  var _Lr = class _Lr {
    constructor(e2, n5, r3) {
      this.name = e2, this.prefix = n5, this.baseEncode = r3;
    }
    encode(e2) {
      if (e2 instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e2)}`;
      throw Error("Unknown type, must be binary type");
    }
  };
  __name(_Lr, "Lr");
  var Lr = _Lr;
  var _Or = class _Or {
    constructor(e2, n5, r3) {
      if (this.name = e2, this.prefix = n5, n5.codePointAt(0) === void 0) throw new Error("Invalid prefix character");
      this.prefixCodePoint = n5.codePointAt(0), this.baseDecode = r3;
    }
    decode(e2) {
      if (typeof e2 == "string") {
        if (e2.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e2)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
        return this.baseDecode(e2.slice(this.prefix.length));
      } else throw Error("Can only multibase decode strings");
    }
    or(e2) {
      return ze(this, e2);
    }
  };
  __name(_Or, "Or");
  var Or = _Or;
  var _Hr = class _Hr {
    constructor(e2) {
      this.decoders = e2;
    }
    or(e2) {
      return ze(this, e2);
    }
    decode(e2) {
      const n5 = e2[0], r3 = this.decoders[n5];
      if (r3) return r3.decode(e2);
      throw RangeError(`Unable to decode multibase string ${JSON.stringify(e2)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
    }
  };
  __name(_Hr, "Hr");
  var Hr = _Hr;
  var ze = /* @__PURE__ */ __name((t, e2) => new Hr({ ...t.decoders || { [t.prefix]: t }, ...e2.decoders || { [e2.prefix]: e2 } }), "ze");
  var _zr = class _zr {
    constructor(e2, n5, r3, o5) {
      this.name = e2, this.prefix = n5, this.baseEncode = r3, this.baseDecode = o5, this.encoder = new Lr(e2, n5, r3), this.decoder = new Or(e2, n5, o5);
    }
    encode(e2) {
      return this.encoder.encode(e2);
    }
    decode(e2) {
      return this.decoder.decode(e2);
    }
  };
  __name(_zr, "zr");
  var zr = _zr;
  var Bt = /* @__PURE__ */ __name(({ name: t, prefix: e2, encode: n5, decode: r3 }) => new zr(t, e2, n5, r3), "Bt");
  var ht = /* @__PURE__ */ __name(({ prefix: t, name: e2, alphabet: n5 }) => {
    const { encode: r3, decode: o5 } = Tr(n5, e2);
    return Bt({ prefix: t, name: e2, encode: r3, decode: /* @__PURE__ */ __name((s3) => He(o5(s3)), "decode") });
  }, "ht");
  var Mr = /* @__PURE__ */ __name((t, e2, n5, r3) => {
    const o5 = {};
    for (let c6 = 0; c6 < e2.length; ++c6) o5[e2[c6]] = c6;
    let s3 = t.length;
    for (; t[s3 - 1] === "="; ) --s3;
    const a4 = new Uint8Array(s3 * n5 / 8 | 0);
    let u2 = 0, i4 = 0, D4 = 0;
    for (let c6 = 0; c6 < s3; ++c6) {
      const l7 = o5[t[c6]];
      if (l7 === void 0) throw new SyntaxError(`Non-${r3} character`);
      i4 = i4 << n5 | l7, u2 += n5, u2 >= 8 && (u2 -= 8, a4[D4++] = 255 & i4 >> u2);
    }
    if (u2 >= n5 || 255 & i4 << 8 - u2) throw new SyntaxError("Unexpected end of data");
    return a4;
  }, "Mr");
  var qr = /* @__PURE__ */ __name((t, e2, n5) => {
    const r3 = e2[e2.length - 1] === "=", o5 = (1 << n5) - 1;
    let s3 = "", a4 = 0, u2 = 0;
    for (let i4 = 0; i4 < t.length; ++i4) for (u2 = u2 << 8 | t[i4], a4 += 8; a4 > n5; ) a4 -= n5, s3 += e2[o5 & u2 >> a4];
    if (a4 && (s3 += e2[o5 & u2 << n5 - a4]), r3) for (; s3.length * n5 & 7; ) s3 += "=";
    return s3;
  }, "qr");
  var k4 = /* @__PURE__ */ __name(({ name: t, prefix: e2, bitsPerChar: n5, alphabet: r3 }) => Bt({ prefix: e2, name: t, encode(o5) {
    return qr(o5, r3, n5);
  }, decode(o5) {
    return Mr(o5, r3, n5, t);
  } }), "k");
  var $r = Bt({ prefix: "\0", name: "identity", encode: /* @__PURE__ */ __name((t) => Nr(t), "encode"), decode: /* @__PURE__ */ __name((t) => Fr(t), "decode") });
  var kr = Object.freeze({ __proto__: null, identity: $r });
  var Rr = k4({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
  var jr = Object.freeze({ __proto__: null, base2: Rr });
  var Zr = k4({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
  var Gr = Object.freeze({ __proto__: null, base8: Zr });
  var Vr = ht({ prefix: "9", name: "base10", alphabet: "0123456789" });
  var Yr = Object.freeze({ __proto__: null, base10: Vr });
  var Jr = k4({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 });
  var Kr = k4({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
  var Wr = Object.freeze({ __proto__: null, base16: Jr, base16upper: Kr });
  var Xr = k4({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 });
  var Pr = k4({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 });
  var Qr = k4({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 });
  var to = k4({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 });
  var eo = k4({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 });
  var no = k4({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 });
  var ro = k4({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 });
  var oo = k4({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 });
  var so = k4({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
  var io = Object.freeze({ __proto__: null, base32: Xr, base32upper: Pr, base32pad: Qr, base32padupper: to, base32hex: eo, base32hexupper: no, base32hexpad: ro, base32hexpadupper: oo, base32z: so });
  var uo = ht({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" });
  var co = ht({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
  var ao = Object.freeze({ __proto__: null, base36: uo, base36upper: co });
  var fo = ht({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" });
  var Do = ht({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
  var ho = Object.freeze({ __proto__: null, base58btc: fo, base58flickr: Do });
  var lo = k4({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 });
  var bo = k4({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 });
  var po = k4({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 });
  var wo = k4({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
  var Eo = Object.freeze({ __proto__: null, base64: lo, base64pad: bo, base64url: po, base64urlpad: wo });
  var Me = Array.from("\u{1F680}\u{1FA90}\u2604\u{1F6F0}\u{1F30C}\u{1F311}\u{1F312}\u{1F313}\u{1F314}\u{1F315}\u{1F316}\u{1F317}\u{1F318}\u{1F30D}\u{1F30F}\u{1F30E}\u{1F409}\u2600\u{1F4BB}\u{1F5A5}\u{1F4BE}\u{1F4BF}\u{1F602}\u2764\u{1F60D}\u{1F923}\u{1F60A}\u{1F64F}\u{1F495}\u{1F62D}\u{1F618}\u{1F44D}\u{1F605}\u{1F44F}\u{1F601}\u{1F525}\u{1F970}\u{1F494}\u{1F496}\u{1F499}\u{1F622}\u{1F914}\u{1F606}\u{1F644}\u{1F4AA}\u{1F609}\u263A\u{1F44C}\u{1F917}\u{1F49C}\u{1F614}\u{1F60E}\u{1F607}\u{1F339}\u{1F926}\u{1F389}\u{1F49E}\u270C\u2728\u{1F937}\u{1F631}\u{1F60C}\u{1F338}\u{1F64C}\u{1F60B}\u{1F497}\u{1F49A}\u{1F60F}\u{1F49B}\u{1F642}\u{1F493}\u{1F929}\u{1F604}\u{1F600}\u{1F5A4}\u{1F603}\u{1F4AF}\u{1F648}\u{1F447}\u{1F3B6}\u{1F612}\u{1F92D}\u2763\u{1F61C}\u{1F48B}\u{1F440}\u{1F62A}\u{1F611}\u{1F4A5}\u{1F64B}\u{1F61E}\u{1F629}\u{1F621}\u{1F92A}\u{1F44A}\u{1F973}\u{1F625}\u{1F924}\u{1F449}\u{1F483}\u{1F633}\u270B\u{1F61A}\u{1F61D}\u{1F634}\u{1F31F}\u{1F62C}\u{1F643}\u{1F340}\u{1F337}\u{1F63B}\u{1F613}\u2B50\u2705\u{1F97A}\u{1F308}\u{1F608}\u{1F918}\u{1F4A6}\u2714\u{1F623}\u{1F3C3}\u{1F490}\u2639\u{1F38A}\u{1F498}\u{1F620}\u261D\u{1F615}\u{1F33A}\u{1F382}\u{1F33B}\u{1F610}\u{1F595}\u{1F49D}\u{1F64A}\u{1F639}\u{1F5E3}\u{1F4AB}\u{1F480}\u{1F451}\u{1F3B5}\u{1F91E}\u{1F61B}\u{1F534}\u{1F624}\u{1F33C}\u{1F62B}\u26BD\u{1F919}\u2615\u{1F3C6}\u{1F92B}\u{1F448}\u{1F62E}\u{1F646}\u{1F37B}\u{1F343}\u{1F436}\u{1F481}\u{1F632}\u{1F33F}\u{1F9E1}\u{1F381}\u26A1\u{1F31E}\u{1F388}\u274C\u270A\u{1F44B}\u{1F630}\u{1F928}\u{1F636}\u{1F91D}\u{1F6B6}\u{1F4B0}\u{1F353}\u{1F4A2}\u{1F91F}\u{1F641}\u{1F6A8}\u{1F4A8}\u{1F92C}\u2708\u{1F380}\u{1F37A}\u{1F913}\u{1F619}\u{1F49F}\u{1F331}\u{1F616}\u{1F476}\u{1F974}\u25B6\u27A1\u2753\u{1F48E}\u{1F4B8}\u2B07\u{1F628}\u{1F31A}\u{1F98B}\u{1F637}\u{1F57A}\u26A0\u{1F645}\u{1F61F}\u{1F635}\u{1F44E}\u{1F932}\u{1F920}\u{1F927}\u{1F4CC}\u{1F535}\u{1F485}\u{1F9D0}\u{1F43E}\u{1F352}\u{1F617}\u{1F911}\u{1F30A}\u{1F92F}\u{1F437}\u260E\u{1F4A7}\u{1F62F}\u{1F486}\u{1F446}\u{1F3A4}\u{1F647}\u{1F351}\u2744\u{1F334}\u{1F4A3}\u{1F438}\u{1F48C}\u{1F4CD}\u{1F940}\u{1F922}\u{1F445}\u{1F4A1}\u{1F4A9}\u{1F450}\u{1F4F8}\u{1F47B}\u{1F910}\u{1F92E}\u{1F3BC}\u{1F975}\u{1F6A9}\u{1F34E}\u{1F34A}\u{1F47C}\u{1F48D}\u{1F4E3}\u{1F942}");
  var go = Me.reduce((t, e2, n5) => (t[n5] = e2, t), []);
  var yo = Me.reduce((t, e2, n5) => (t[e2.codePointAt(0)] = n5, t), []);
  function xo(t) {
    return t.reduce((e2, n5) => (e2 += go[n5], e2), "");
  }
  __name(xo, "xo");
  function Bo(t) {
    const e2 = [];
    for (const n5 of t) {
      const r3 = yo[n5.codePointAt(0)];
      if (r3 === void 0) throw new Error(`Non-base256emoji character: ${n5}`);
      e2.push(r3);
    }
    return new Uint8Array(e2);
  }
  __name(Bo, "Bo");
  var Co = Bt({ prefix: "\u{1F680}", name: "base256emoji", encode: xo, decode: Bo });
  var Ao = Object.freeze({ __proto__: null, base256emoji: Co });
  var mo = $e;
  var qe = 128;
  var _o = 127;
  var So = ~_o;
  var vo = Math.pow(2, 31);
  function $e(t, e2, n5) {
    e2 = e2 || [], n5 = n5 || 0;
    for (var r3 = n5; t >= vo; ) e2[n5++] = t & 255 | qe, t /= 128;
    for (; t & So; ) e2[n5++] = t & 255 | qe, t >>>= 7;
    return e2[n5] = t | 0, $e.bytes = n5 - r3 + 1, e2;
  }
  __name($e, "$e");
  var Io = Pt;
  var Uo = 128;
  var ke = 127;
  function Pt(t, r3) {
    var n5 = 0, r3 = r3 || 0, o5 = 0, s3 = r3, a4, u2 = t.length;
    do {
      if (s3 >= u2) throw Pt.bytes = 0, new RangeError("Could not decode varint");
      a4 = t[s3++], n5 += o5 < 28 ? (a4 & ke) << o5 : (a4 & ke) * Math.pow(2, o5), o5 += 7;
    } while (a4 >= Uo);
    return Pt.bytes = s3 - r3, n5;
  }
  __name(Pt, "Pt");
  var To = Math.pow(2, 7);
  var Fo = Math.pow(2, 14);
  var No = Math.pow(2, 21);
  var Lo = Math.pow(2, 28);
  var Oo = Math.pow(2, 35);
  var Ho = Math.pow(2, 42);
  var zo = Math.pow(2, 49);
  var Mo = Math.pow(2, 56);
  var qo = Math.pow(2, 63);
  var $o = /* @__PURE__ */ __name(function(t) {
    return t < To ? 1 : t < Fo ? 2 : t < No ? 3 : t < Lo ? 4 : t < Oo ? 5 : t < Ho ? 6 : t < zo ? 7 : t < Mo ? 8 : t < qo ? 9 : 10;
  }, "$o");
  var ko = { encode: mo, decode: Io, encodingLength: $o };
  var Re = ko;
  var je = /* @__PURE__ */ __name((t, e2, n5 = 0) => (Re.encode(t, e2, n5), e2), "je");
  var Ze = /* @__PURE__ */ __name((t) => Re.encodingLength(t), "Ze");
  var Qt = /* @__PURE__ */ __name((t, e2) => {
    const n5 = e2.byteLength, r3 = Ze(t), o5 = r3 + Ze(n5), s3 = new Uint8Array(o5 + n5);
    return je(t, s3, 0), je(n5, s3, r3), s3.set(e2, o5), new Ro(t, n5, e2, s3);
  }, "Qt");
  var _Ro = class _Ro {
    constructor(e2, n5, r3, o5) {
      this.code = e2, this.size = n5, this.digest = r3, this.bytes = o5;
    }
  };
  __name(_Ro, "Ro");
  var Ro = _Ro;
  var Ge = /* @__PURE__ */ __name(({ name: t, code: e2, encode: n5 }) => new jo(t, e2, n5), "Ge");
  var _jo = class _jo {
    constructor(e2, n5, r3) {
      this.name = e2, this.code = n5, this.encode = r3;
    }
    digest(e2) {
      if (e2 instanceof Uint8Array) {
        const n5 = this.encode(e2);
        return n5 instanceof Uint8Array ? Qt(this.code, n5) : n5.then((r3) => Qt(this.code, r3));
      } else throw Error("Unknown type, must be binary type");
    }
  };
  __name(_jo, "jo");
  var jo = _jo;
  var Ve = /* @__PURE__ */ __name((t) => async (e2) => new Uint8Array(await crypto.subtle.digest(t, e2)), "Ve");
  var Zo = Ge({ name: "sha2-256", code: 18, encode: Ve("SHA-256") });
  var Go = Ge({ name: "sha2-512", code: 19, encode: Ve("SHA-512") });
  var Vo = Object.freeze({ __proto__: null, sha256: Zo, sha512: Go });
  var Ye = 0;
  var Yo = "identity";
  var Je = He;
  var Jo = /* @__PURE__ */ __name((t) => Qt(Ye, Je(t)), "Jo");
  var Ko = { code: Ye, name: Yo, encode: Je, digest: Jo };
  var Wo = Object.freeze({ __proto__: null, identity: Ko });
  new TextEncoder(), new TextDecoder();
  var Ke = { ...kr, ...jr, ...Gr, ...Yr, ...Wr, ...io, ...ao, ...ho, ...Eo, ...Ao };
  ({ ...Vo, ...Wo });
  function We(t, e2, n5, r3) {
    return { name: t, prefix: e2, encoder: { name: t, prefix: e2, encode: n5 }, decoder: { decode: r3 } };
  }
  __name(We, "We");
  var Xe = We("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1)));
  var te = We("ascii", "a", (t) => {
    let e2 = "a";
    for (let n5 = 0; n5 < t.length; n5++) e2 += String.fromCharCode(t[n5]);
    return e2;
  }, (t) => {
    t = t.substring(1);
    const e2 = Le(t.length);
    for (let n5 = 0; n5 < t.length; n5++) e2[n5] = t.charCodeAt(n5);
    return e2;
  });
  var Pe = { utf8: Xe, "utf-8": Xe, hex: Ke.base16, latin1: te, ascii: te, binary: te, ...Ke };
  function ct(t, e2 = "utf8") {
    const n5 = Pe[e2];
    if (!n5) throw new Error(`Unsupported encoding "${e2}"`);
    return (e2 === "utf8" || e2 === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(t.buffer, t.byteOffset, t.byteLength).toString("utf8") : n5.encoder.encode(t).substring(1);
  }
  __name(ct, "ct");
  function rt(t, e2 = "utf8") {
    const n5 = Pe[e2];
    if (!n5) throw new Error(`Unsupported encoding "${e2}"`);
    return (e2 === "utf8" || e2 === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? Xt(globalThis.Buffer.from(t, "utf-8")) : n5.decoder.decode(`${n5.prefix}${t}`);
  }
  __name(rt, "rt");
  function lt(t) {
    return safeJsonParse(ct(rt(t, Dt), Gt));
  }
  __name(lt, "lt");
  function bt(t) {
    return ct(rt(safeJsonStringify(t), Gt), Dt);
  }
  __name(bt, "bt");
  function Qe(t) {
    const e2 = rt(Wt, dt), n5 = Kt + ct(Oe([e2, t]), dt);
    return [Yt, Jt, n5].join(Vt);
  }
  __name(Qe, "Qe");
  function en(t) {
    return ct(t, Dt);
  }
  __name(en, "en");
  function nn(t) {
    return rt(t, Dt);
  }
  __name(nn, "nn");
  function rn(t) {
    return rt([bt(t.header), bt(t.payload)].join(ut), xt);
  }
  __name(rn, "rn");
  function on(t) {
    return [bt(t.header), bt(t.payload), en(t.signature)].join(ut);
  }
  __name(on, "on");
  function sn(t) {
    const e2 = t.split(ut), n5 = lt(e2[0]), r3 = lt(e2[1]), o5 = nn(e2[2]), s3 = rt(e2.slice(0, 2).join(ut), xt);
    return { header: n5, payload: r3, signature: o5, data: s3 };
  }
  __name(sn, "sn");
  function Po(t = he(Ne)) {
    const e2 = Rt.getPublicKey(t);
    return { secretKey: Oe([t, e2]), publicKey: e2 };
  }
  __name(Po, "Po");
  async function Qo(t, e2, n5, r3, o5 = (0, import_time2.fromMiliseconds)(Date.now())) {
    const s3 = { alg: jt, typ: Zt }, a4 = Qe(r3.publicKey), u2 = o5 + n5, i4 = { iss: a4, sub: t, aud: e2, iat: o5, exp: u2 }, D4 = rn({ header: s3, payload: i4 }), c6 = Rt.sign(D4, r3.secretKey.slice(0, 32));
    return on({ header: s3, payload: i4, signature: c6 });
  }
  __name(Qo, "Qo");

  // node_modules/@walletconnect/utils/dist/index.js
  init_shims();

  // node_modules/detect-browser/es/index.js
  init_shims();
  var __spreadArray = function(to4, from8, pack) {
    if (pack || arguments.length === 2) for (var i4 = 0, l7 = from8.length, ar4; i4 < l7; i4++) {
      if (ar4 || !(i4 in from8)) {
        if (!ar4) ar4 = Array.prototype.slice.call(from8, 0, i4);
        ar4[i4] = from8[i4];
      }
    }
    return to4.concat(ar4 || Array.prototype.slice.call(from8));
  };
  var BrowserInfo = (
    /** @class */
    /* @__PURE__ */ (function() {
      function BrowserInfo2(name2, version3, os2) {
        this.name = name2;
        this.version = version3;
        this.os = os2;
        this.type = "browser";
      }
      __name(BrowserInfo2, "BrowserInfo");
      return BrowserInfo2;
    })()
  );
  var NodeInfo = (
    /** @class */
    /* @__PURE__ */ (function() {
      function NodeInfo2(version3) {
        this.version = version3;
        this.type = "node";
        this.name = "node";
        this.os = process.platform;
      }
      __name(NodeInfo2, "NodeInfo");
      return NodeInfo2;
    })()
  );
  var SearchBotDeviceInfo = (
    /** @class */
    /* @__PURE__ */ (function() {
      function SearchBotDeviceInfo2(name2, version3, os2, bot) {
        this.name = name2;
        this.version = version3;
        this.os = os2;
        this.bot = bot;
        this.type = "bot-device";
      }
      __name(SearchBotDeviceInfo2, "SearchBotDeviceInfo");
      return SearchBotDeviceInfo2;
    })()
  );
  var BotInfo = (
    /** @class */
    /* @__PURE__ */ (function() {
      function BotInfo2() {
        this.type = "bot";
        this.bot = true;
        this.name = "bot";
        this.version = null;
        this.os = null;
      }
      __name(BotInfo2, "BotInfo");
      return BotInfo2;
    })()
  );
  var ReactNativeInfo = (
    /** @class */
    /* @__PURE__ */ (function() {
      function ReactNativeInfo2() {
        this.type = "react-native";
        this.name = "react-native";
        this.version = null;
        this.os = null;
      }
      __name(ReactNativeInfo2, "ReactNativeInfo");
      return ReactNativeInfo2;
    })()
  );
  var SEARCHBOX_UA_REGEX = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/;
  var SEARCHBOT_OS_REGEX = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/;
  var REQUIRED_VERSION_PARTS = 3;
  var userAgentRules = [
    ["aol", /AOLShield\/([0-9\._]+)/],
    ["edge", /Edge\/([0-9\._]+)/],
    ["edge-ios", /EdgiOS\/([0-9\._]+)/],
    ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
    ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
    ["samsung", /SamsungBrowser\/([0-9\.]+)/],
    ["silk", /\bSilk\/([0-9._-]+)\b/],
    ["miui", /MiuiBrowser\/([0-9\.]+)$/],
    ["beaker", /BeakerBrowser\/([0-9\.]+)/],
    ["edge-chromium", /EdgA?\/([0-9\.]+)/],
    [
      "chromium-webview",
      /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/
    ],
    ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
    ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
    ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
    ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
    ["fxios", /FxiOS\/([0-9\.]+)/],
    ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
    ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
    ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
    ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
    ["pie", /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],
    ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
    ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
    ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
    ["ie", /MSIE\s(7\.0)/],
    ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
    ["android", /Android\s([0-9\.]+)/],
    ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
    ["safari", /Version\/([0-9\._]+).*Safari/],
    ["facebook", /FB[AS]V\/([0-9\.]+)/],
    ["instagram", /Instagram\s([0-9\.]+)/],
    ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
    ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
    ["curl", /^curl\/([0-9\.]+)$/],
    ["searchbot", SEARCHBOX_UA_REGEX]
  ];
  var operatingSystemRules = [
    ["iOS", /iP(hone|od|ad)/],
    ["Android OS", /Android/],
    ["BlackBerry OS", /BlackBerry|BB10/],
    ["Windows Mobile", /IEMobile/],
    ["Amazon OS", /Kindle/],
    ["Windows 3.11", /Win16/],
    ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
    ["Windows 98", /(Windows 98)|(Win98)/],
    ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
    ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
    ["Windows Server 2003", /(Windows NT 5.2)/],
    ["Windows Vista", /(Windows NT 6.0)/],
    ["Windows 7", /(Windows NT 6.1)/],
    ["Windows 8", /(Windows NT 6.2)/],
    ["Windows 8.1", /(Windows NT 6.3)/],
    ["Windows 10", /(Windows NT 10.0)/],
    ["Windows ME", /Windows ME/],
    ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
    ["Open BSD", /OpenBSD/],
    ["Sun OS", /SunOS/],
    ["Chrome OS", /CrOS/],
    ["Linux", /(Linux)|(X11)/],
    ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
    ["QNX", /QNX/],
    ["BeOS", /BeOS/],
    ["OS/2", /OS\/2/]
  ];
  function detect(userAgent) {
    if (!!userAgent) {
      return parseUserAgent(userAgent);
    }
    if (typeof document === "undefined" && typeof navigator !== "undefined" && navigator.product === "ReactNative") {
      return new ReactNativeInfo();
    }
    if (typeof navigator !== "undefined") {
      return parseUserAgent(navigator.userAgent);
    }
    return getNodeVersion();
  }
  __name(detect, "detect");
  function matchUserAgent(ua2) {
    return ua2 !== "" && userAgentRules.reduce(function(matched, _a3) {
      var browser = _a3[0], regex = _a3[1];
      if (matched) {
        return matched;
      }
      var uaMatch = regex.exec(ua2);
      return !!uaMatch && [browser, uaMatch];
    }, false);
  }
  __name(matchUserAgent, "matchUserAgent");
  function parseUserAgent(ua2) {
    var matchedRule = matchUserAgent(ua2);
    if (!matchedRule) {
      return null;
    }
    var name2 = matchedRule[0], match = matchedRule[1];
    if (name2 === "searchbot") {
      return new BotInfo();
    }
    var versionParts = match[1] && match[1].split(".").join("_").split("_").slice(0, 3);
    if (versionParts) {
      if (versionParts.length < REQUIRED_VERSION_PARTS) {
        versionParts = __spreadArray(__spreadArray([], versionParts, true), createVersionParts(REQUIRED_VERSION_PARTS - versionParts.length), true);
      }
    } else {
      versionParts = [];
    }
    var version3 = versionParts.join(".");
    var os2 = detectOS(ua2);
    var searchBotMatch = SEARCHBOT_OS_REGEX.exec(ua2);
    if (searchBotMatch && searchBotMatch[1]) {
      return new SearchBotDeviceInfo(name2, version3, os2, searchBotMatch[1]);
    }
    return new BrowserInfo(name2, version3, os2);
  }
  __name(parseUserAgent, "parseUserAgent");
  function detectOS(ua2) {
    for (var ii3 = 0, count = operatingSystemRules.length; ii3 < count; ii3++) {
      var _a3 = operatingSystemRules[ii3], os2 = _a3[0], regex = _a3[1];
      var match = regex.exec(ua2);
      if (match) {
        return os2;
      }
    }
    return null;
  }
  __name(detectOS, "detectOS");
  function getNodeVersion() {
    var isNode2 = typeof process !== "undefined" && process.version;
    return isNode2 ? new NodeInfo(process.version.slice(1)) : null;
  }
  __name(getNodeVersion, "getNodeVersion");
  function createVersionParts(count) {
    var output = [];
    for (var ii3 = 0; ii3 < count; ii3++) {
      output.push("0");
    }
    return output;
  }
  __name(createVersionParts, "createVersionParts");

  // node_modules/@walletconnect/utils/dist/index.js
  var import_time3 = __toESM(require_cjs(), 1);
  var import_window_getters = __toESM(require_cjs2(), 1);
  var import_window_metadata = __toESM(require_cjs3(), 1);

  // node_modules/ox/_esm/index.js
  init_shims();

  // node_modules/ox/_esm/core/Errors.js
  init_shims();

  // node_modules/ox/_esm/core/internal/errors.js
  init_shims();

  // node_modules/ox/_esm/core/version.js
  init_shims();
  var version = "0.1.1";

  // node_modules/ox/_esm/core/internal/errors.js
  function getVersion() {
    return version;
  }
  __name(getVersion, "getVersion");

  // node_modules/ox/_esm/core/Errors.js
  var _BaseError = class _BaseError extends Error {
    constructor(shortMessage, options = {}) {
      const details = (() => {
        if (options.cause instanceof _BaseError) {
          if (options.cause.details)
            return options.cause.details;
          if (options.cause.shortMessage)
            return options.cause.shortMessage;
        }
        if (options.cause && "details" in options.cause && typeof options.cause.details === "string")
          return options.cause.details;
        if (options.cause?.message)
          return options.cause.message;
        return options.details;
      })();
      const docsPath = (() => {
        if (options.cause instanceof _BaseError)
          return options.cause.docsPath || options.docsPath;
        return options.docsPath;
      })();
      const docsBaseUrl = "https://oxlib.sh";
      const docs = `${docsBaseUrl}${docsPath ?? ""}`;
      const message = [
        shortMessage || "An error occurred.",
        ...options.metaMessages ? ["", ...options.metaMessages] : [],
        ...details || docsPath ? [
          "",
          details ? `Details: ${details}` : void 0,
          docsPath ? `See: ${docs}` : void 0
        ] : []
      ].filter((x6) => typeof x6 === "string").join("\n");
      super(message, options.cause ? { cause: options.cause } : void 0);
      Object.defineProperty(this, "details", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, "docs", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, "docsPath", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, "shortMessage", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, "cause", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "BaseError"
      });
      Object.defineProperty(this, "version", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: `ox@${getVersion()}`
      });
      this.cause = options.cause;
      this.details = details;
      this.docs = docs;
      this.docsPath = docsPath;
      this.shortMessage = shortMessage;
    }
    walk(fn3) {
      return walk(this, fn3);
    }
  };
  __name(_BaseError, "BaseError");
  var BaseError = _BaseError;
  function walk(err, fn3) {
    if (fn3?.(err))
      return err;
    if (err && typeof err === "object" && "cause" in err && err.cause)
      return walk(err.cause, fn3);
    return fn3 ? null : err;
  }
  __name(walk, "walk");

  // node_modules/ox/_esm/core/Hash.js
  init_shims();

  // node_modules/@noble/hashes/esm/_md.js
  init_shims();

  // node_modules/@noble/hashes/esm/utils.js
  init_shims();

  // node_modules/@noble/hashes/esm/crypto.js
  init_shims();
  var crypto2 = typeof globalThis === "object" && "crypto" in globalThis ? globalThis.crypto : void 0;

  // node_modules/@noble/hashes/esm/utils.js
  function isBytes(a4) {
    return a4 instanceof Uint8Array || ArrayBuffer.isView(a4) && a4.constructor.name === "Uint8Array";
  }
  __name(isBytes, "isBytes");
  function anumber(n5) {
    if (!Number.isSafeInteger(n5) || n5 < 0)
      throw new Error("positive integer expected, got " + n5);
  }
  __name(anumber, "anumber");
  function abytes(b6, ...lengths) {
    if (!isBytes(b6))
      throw new Error("Uint8Array expected");
    if (lengths.length > 0 && !lengths.includes(b6.length))
      throw new Error("Uint8Array expected of length " + lengths + ", got length=" + b6.length);
  }
  __name(abytes, "abytes");
  function ahash(h6) {
    if (typeof h6 !== "function" || typeof h6.create !== "function")
      throw new Error("Hash should be wrapped by utils.createHasher");
    anumber(h6.outputLen);
    anumber(h6.blockLen);
  }
  __name(ahash, "ahash");
  function aexists(instance, checkFinished = true) {
    if (instance.destroyed)
      throw new Error("Hash instance has been destroyed");
    if (checkFinished && instance.finished)
      throw new Error("Hash#digest() has already been called");
  }
  __name(aexists, "aexists");
  function aoutput(out, instance) {
    abytes(out);
    const min = instance.outputLen;
    if (out.length < min) {
      throw new Error("digestInto() expects output buffer of length at least " + min);
    }
  }
  __name(aoutput, "aoutput");
  function u32(arr) {
    return new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
  }
  __name(u32, "u32");
  function clean(...arrays) {
    for (let i4 = 0; i4 < arrays.length; i4++) {
      arrays[i4].fill(0);
    }
  }
  __name(clean, "clean");
  function createView(arr) {
    return new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
  }
  __name(createView, "createView");
  function rotr(word, shift) {
    return word << 32 - shift | word >>> shift;
  }
  __name(rotr, "rotr");
  var isLE = /* @__PURE__ */ (() => new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68)();
  function byteSwap(word) {
    return word << 24 & 4278190080 | word << 8 & 16711680 | word >>> 8 & 65280 | word >>> 24 & 255;
  }
  __name(byteSwap, "byteSwap");
  function byteSwap32(arr) {
    for (let i4 = 0; i4 < arr.length; i4++) {
      arr[i4] = byteSwap(arr[i4]);
    }
    return arr;
  }
  __name(byteSwap32, "byteSwap32");
  var swap32IfBE = isLE ? (u2) => u2 : byteSwap32;
  function utf8ToBytes(str) {
    if (typeof str !== "string")
      throw new Error("string expected");
    return new Uint8Array(new TextEncoder().encode(str));
  }
  __name(utf8ToBytes, "utf8ToBytes");
  function toBytes(data) {
    if (typeof data === "string")
      data = utf8ToBytes(data);
    abytes(data);
    return data;
  }
  __name(toBytes, "toBytes");
  function concatBytes(...arrays) {
    let sum = 0;
    for (let i4 = 0; i4 < arrays.length; i4++) {
      const a4 = arrays[i4];
      abytes(a4);
      sum += a4.length;
    }
    const res = new Uint8Array(sum);
    for (let i4 = 0, pad3 = 0; i4 < arrays.length; i4++) {
      const a4 = arrays[i4];
      res.set(a4, pad3);
      pad3 += a4.length;
    }
    return res;
  }
  __name(concatBytes, "concatBytes");
  var _Hash = class _Hash {
  };
  __name(_Hash, "Hash");
  var Hash = _Hash;
  function createHasher(hashCons) {
    const hashC = /* @__PURE__ */ __name((msg) => hashCons().update(toBytes(msg)).digest(), "hashC");
    const tmp = hashCons();
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = () => hashCons();
    return hashC;
  }
  __name(createHasher, "createHasher");
  function randomBytes(bytesLength = 32) {
    if (crypto2 && typeof crypto2.getRandomValues === "function") {
      return crypto2.getRandomValues(new Uint8Array(bytesLength));
    }
    if (crypto2 && typeof crypto2.randomBytes === "function") {
      return Uint8Array.from(crypto2.randomBytes(bytesLength));
    }
    throw new Error("crypto.getRandomValues must be defined");
  }
  __name(randomBytes, "randomBytes");

  // node_modules/@noble/hashes/esm/_md.js
  function setBigUint64(view, byteOffset, value, isLE2) {
    if (typeof view.setBigUint64 === "function")
      return view.setBigUint64(byteOffset, value, isLE2);
    const _32n2 = BigInt(32);
    const _u32_max = BigInt(4294967295);
    const wh = Number(value >> _32n2 & _u32_max);
    const wl = Number(value & _u32_max);
    const h6 = isLE2 ? 4 : 0;
    const l7 = isLE2 ? 0 : 4;
    view.setUint32(byteOffset + h6, wh, isLE2);
    view.setUint32(byteOffset + l7, wl, isLE2);
  }
  __name(setBigUint64, "setBigUint64");
  function Chi(a4, b6, c6) {
    return a4 & b6 ^ ~a4 & c6;
  }
  __name(Chi, "Chi");
  function Maj(a4, b6, c6) {
    return a4 & b6 ^ a4 & c6 ^ b6 & c6;
  }
  __name(Maj, "Maj");
  var _HashMD = class _HashMD extends Hash {
    constructor(blockLen, outputLen, padOffset, isLE2) {
      super();
      this.finished = false;
      this.length = 0;
      this.pos = 0;
      this.destroyed = false;
      this.blockLen = blockLen;
      this.outputLen = outputLen;
      this.padOffset = padOffset;
      this.isLE = isLE2;
      this.buffer = new Uint8Array(blockLen);
      this.view = createView(this.buffer);
    }
    update(data) {
      aexists(this);
      data = toBytes(data);
      abytes(data);
      const { view, buffer, blockLen } = this;
      const len = data.length;
      for (let pos = 0; pos < len; ) {
        const take = Math.min(blockLen - this.pos, len - pos);
        if (take === blockLen) {
          const dataView = createView(data);
          for (; blockLen <= len - pos; pos += blockLen)
            this.process(dataView, pos);
          continue;
        }
        buffer.set(data.subarray(pos, pos + take), this.pos);
        this.pos += take;
        pos += take;
        if (this.pos === blockLen) {
          this.process(view, 0);
          this.pos = 0;
        }
      }
      this.length += data.length;
      this.roundClean();
      return this;
    }
    digestInto(out) {
      aexists(this);
      aoutput(out, this);
      this.finished = true;
      const { buffer, view, blockLen, isLE: isLE2 } = this;
      let { pos } = this;
      buffer[pos++] = 128;
      clean(this.buffer.subarray(pos));
      if (this.padOffset > blockLen - pos) {
        this.process(view, 0);
        pos = 0;
      }
      for (let i4 = pos; i4 < blockLen; i4++)
        buffer[i4] = 0;
      setBigUint64(view, blockLen - 8, BigInt(this.length * 8), isLE2);
      this.process(view, 0);
      const oview = createView(out);
      const len = this.outputLen;
      if (len % 4)
        throw new Error("_sha2: outputLen should be aligned to 32bit");
      const outLen = len / 4;
      const state = this.get();
      if (outLen > state.length)
        throw new Error("_sha2: outputLen bigger than state");
      for (let i4 = 0; i4 < outLen; i4++)
        oview.setUint32(4 * i4, state[i4], isLE2);
    }
    digest() {
      const { buffer, outputLen } = this;
      this.digestInto(buffer);
      const res = buffer.slice(0, outputLen);
      this.destroy();
      return res;
    }
    _cloneInto(to4) {
      to4 || (to4 = new this.constructor());
      to4.set(...this.get());
      const { blockLen, buffer, length: length2, finished, destroyed, pos } = this;
      to4.destroyed = destroyed;
      to4.finished = finished;
      to4.length = length2;
      to4.pos = pos;
      if (length2 % blockLen)
        to4.buffer.set(buffer);
      return to4;
    }
    clone() {
      return this._cloneInto();
    }
  };
  __name(_HashMD, "HashMD");
  var HashMD = _HashMD;
  var SHA256_IV = /* @__PURE__ */ Uint32Array.from([
    1779033703,
    3144134277,
    1013904242,
    2773480762,
    1359893119,
    2600822924,
    528734635,
    1541459225
  ]);

  // node_modules/@noble/hashes/esm/sha3.js
  init_shims();

  // node_modules/@noble/hashes/esm/_u64.js
  init_shims();
  var U32_MASK64 = /* @__PURE__ */ BigInt(2 ** 32 - 1);
  var _32n = /* @__PURE__ */ BigInt(32);
  function fromBig(n5, le3 = false) {
    if (le3)
      return { h: Number(n5 & U32_MASK64), l: Number(n5 >> _32n & U32_MASK64) };
    return { h: Number(n5 >> _32n & U32_MASK64) | 0, l: Number(n5 & U32_MASK64) | 0 };
  }
  __name(fromBig, "fromBig");
  function split(lst, le3 = false) {
    const len = lst.length;
    let Ah = new Uint32Array(len);
    let Al = new Uint32Array(len);
    for (let i4 = 0; i4 < len; i4++) {
      const { h: h6, l: l7 } = fromBig(lst[i4], le3);
      [Ah[i4], Al[i4]] = [h6, l7];
    }
    return [Ah, Al];
  }
  __name(split, "split");
  var rotlSH = /* @__PURE__ */ __name((h6, l7, s3) => h6 << s3 | l7 >>> 32 - s3, "rotlSH");
  var rotlSL = /* @__PURE__ */ __name((h6, l7, s3) => l7 << s3 | h6 >>> 32 - s3, "rotlSL");
  var rotlBH = /* @__PURE__ */ __name((h6, l7, s3) => l7 << s3 - 32 | h6 >>> 64 - s3, "rotlBH");
  var rotlBL = /* @__PURE__ */ __name((h6, l7, s3) => h6 << s3 - 32 | l7 >>> 64 - s3, "rotlBL");

  // node_modules/@noble/hashes/esm/sha3.js
  var _0n = BigInt(0);
  var _1n = BigInt(1);
  var _2n = BigInt(2);
  var _7n = BigInt(7);
  var _256n = BigInt(256);
  var _0x71n = BigInt(113);
  var SHA3_PI = [];
  var SHA3_ROTL = [];
  var _SHA3_IOTA = [];
  for (let round = 0, R4 = _1n, x6 = 1, y5 = 0; round < 24; round++) {
    [x6, y5] = [y5, (2 * x6 + 3 * y5) % 5];
    SHA3_PI.push(2 * (5 * y5 + x6));
    SHA3_ROTL.push((round + 1) * (round + 2) / 2 % 64);
    let t = _0n;
    for (let j7 = 0; j7 < 7; j7++) {
      R4 = (R4 << _1n ^ (R4 >> _7n) * _0x71n) % _256n;
      if (R4 & _2n)
        t ^= _1n << (_1n << /* @__PURE__ */ BigInt(j7)) - _1n;
    }
    _SHA3_IOTA.push(t);
  }
  var IOTAS = split(_SHA3_IOTA, true);
  var SHA3_IOTA_H = IOTAS[0];
  var SHA3_IOTA_L = IOTAS[1];
  var rotlH = /* @__PURE__ */ __name((h6, l7, s3) => s3 > 32 ? rotlBH(h6, l7, s3) : rotlSH(h6, l7, s3), "rotlH");
  var rotlL = /* @__PURE__ */ __name((h6, l7, s3) => s3 > 32 ? rotlBL(h6, l7, s3) : rotlSL(h6, l7, s3), "rotlL");
  function keccakP(s3, rounds = 24) {
    const B3 = new Uint32Array(5 * 2);
    for (let round = 24 - rounds; round < 24; round++) {
      for (let x6 = 0; x6 < 10; x6++)
        B3[x6] = s3[x6] ^ s3[x6 + 10] ^ s3[x6 + 20] ^ s3[x6 + 30] ^ s3[x6 + 40];
      for (let x6 = 0; x6 < 10; x6 += 2) {
        const idx1 = (x6 + 8) % 10;
        const idx0 = (x6 + 2) % 10;
        const B0 = B3[idx0];
        const B1 = B3[idx0 + 1];
        const Th = rotlH(B0, B1, 1) ^ B3[idx1];
        const Tl = rotlL(B0, B1, 1) ^ B3[idx1 + 1];
        for (let y5 = 0; y5 < 50; y5 += 10) {
          s3[x6 + y5] ^= Th;
          s3[x6 + y5 + 1] ^= Tl;
        }
      }
      let curH = s3[2];
      let curL = s3[3];
      for (let t = 0; t < 24; t++) {
        const shift = SHA3_ROTL[t];
        const Th = rotlH(curH, curL, shift);
        const Tl = rotlL(curH, curL, shift);
        const PI = SHA3_PI[t];
        curH = s3[PI];
        curL = s3[PI + 1];
        s3[PI] = Th;
        s3[PI + 1] = Tl;
      }
      for (let y5 = 0; y5 < 50; y5 += 10) {
        for (let x6 = 0; x6 < 10; x6++)
          B3[x6] = s3[y5 + x6];
        for (let x6 = 0; x6 < 10; x6++)
          s3[y5 + x6] ^= ~B3[(x6 + 2) % 10] & B3[(x6 + 4) % 10];
      }
      s3[0] ^= SHA3_IOTA_H[round];
      s3[1] ^= SHA3_IOTA_L[round];
    }
    clean(B3);
  }
  __name(keccakP, "keccakP");
  var _Keccak = class _Keccak extends Hash {
    // NOTE: we accept arguments in bytes instead of bits here.
    constructor(blockLen, suffix, outputLen, enableXOF = false, rounds = 24) {
      super();
      this.pos = 0;
      this.posOut = 0;
      this.finished = false;
      this.destroyed = false;
      this.enableXOF = false;
      this.blockLen = blockLen;
      this.suffix = suffix;
      this.outputLen = outputLen;
      this.enableXOF = enableXOF;
      this.rounds = rounds;
      anumber(outputLen);
      if (!(0 < blockLen && blockLen < 200))
        throw new Error("only keccak-f1600 function is supported");
      this.state = new Uint8Array(200);
      this.state32 = u32(this.state);
    }
    clone() {
      return this._cloneInto();
    }
    keccak() {
      swap32IfBE(this.state32);
      keccakP(this.state32, this.rounds);
      swap32IfBE(this.state32);
      this.posOut = 0;
      this.pos = 0;
    }
    update(data) {
      aexists(this);
      data = toBytes(data);
      abytes(data);
      const { blockLen, state } = this;
      const len = data.length;
      for (let pos = 0; pos < len; ) {
        const take = Math.min(blockLen - this.pos, len - pos);
        for (let i4 = 0; i4 < take; i4++)
          state[this.pos++] ^= data[pos++];
        if (this.pos === blockLen)
          this.keccak();
      }
      return this;
    }
    finish() {
      if (this.finished)
        return;
      this.finished = true;
      const { state, suffix, pos, blockLen } = this;
      state[pos] ^= suffix;
      if ((suffix & 128) !== 0 && pos === blockLen - 1)
        this.keccak();
      state[blockLen - 1] ^= 128;
      this.keccak();
    }
    writeInto(out) {
      aexists(this, false);
      abytes(out);
      this.finish();
      const bufferOut = this.state;
      const { blockLen } = this;
      for (let pos = 0, len = out.length; pos < len; ) {
        if (this.posOut >= blockLen)
          this.keccak();
        const take = Math.min(blockLen - this.posOut, len - pos);
        out.set(bufferOut.subarray(this.posOut, this.posOut + take), pos);
        this.posOut += take;
        pos += take;
      }
      return out;
    }
    xofInto(out) {
      if (!this.enableXOF)
        throw new Error("XOF is not possible for this instance");
      return this.writeInto(out);
    }
    xof(bytes) {
      anumber(bytes);
      return this.xofInto(new Uint8Array(bytes));
    }
    digestInto(out) {
      aoutput(out, this);
      if (this.finished)
        throw new Error("digest() was already called");
      this.writeInto(out);
      this.destroy();
      return out;
    }
    digest() {
      return this.digestInto(new Uint8Array(this.outputLen));
    }
    destroy() {
      this.destroyed = true;
      clean(this.state);
    }
    _cloneInto(to4) {
      const { blockLen, suffix, outputLen, rounds, enableXOF } = this;
      to4 || (to4 = new _Keccak(blockLen, suffix, outputLen, enableXOF, rounds));
      to4.state32.set(this.state32);
      to4.pos = this.pos;
      to4.posOut = this.posOut;
      to4.finished = this.finished;
      to4.rounds = rounds;
      to4.suffix = suffix;
      to4.outputLen = outputLen;
      to4.enableXOF = enableXOF;
      to4.destroyed = this.destroyed;
      return to4;
    }
  };
  __name(_Keccak, "Keccak");
  var Keccak = _Keccak;
  var gen = /* @__PURE__ */ __name((suffix, blockLen, outputLen) => createHasher(() => new Keccak(blockLen, suffix, outputLen)), "gen");
  var keccak_256 = /* @__PURE__ */ (() => gen(1, 136, 256 / 8))();

  // node_modules/@noble/hashes/esm/sha2.js
  init_shims();
  var SHA256_K = /* @__PURE__ */ Uint32Array.from([
    1116352408,
    1899447441,
    3049323471,
    3921009573,
    961987163,
    1508970993,
    2453635748,
    2870763221,
    3624381080,
    310598401,
    607225278,
    1426881987,
    1925078388,
    2162078206,
    2614888103,
    3248222580,
    3835390401,
    4022224774,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    2554220882,
    2821834349,
    2952996808,
    3210313671,
    3336571891,
    3584528711,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    2177026350,
    2456956037,
    2730485921,
    2820302411,
    3259730800,
    3345764771,
    3516065817,
    3600352804,
    4094571909,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    2227730452,
    2361852424,
    2428436474,
    2756734187,
    3204031479,
    3329325298
  ]);
  var SHA256_W = /* @__PURE__ */ new Uint32Array(64);
  var _SHA256 = class _SHA256 extends HashMD {
    constructor(outputLen = 32) {
      super(64, outputLen, 8, false);
      this.A = SHA256_IV[0] | 0;
      this.B = SHA256_IV[1] | 0;
      this.C = SHA256_IV[2] | 0;
      this.D = SHA256_IV[3] | 0;
      this.E = SHA256_IV[4] | 0;
      this.F = SHA256_IV[5] | 0;
      this.G = SHA256_IV[6] | 0;
      this.H = SHA256_IV[7] | 0;
    }
    get() {
      const { A: A4, B: B3, C: C5, D: D4, E: E5, F: F2, G: G4, H: H3 } = this;
      return [A4, B3, C5, D4, E5, F2, G4, H3];
    }
    // prettier-ignore
    set(A4, B3, C5, D4, E5, F2, G4, H3) {
      this.A = A4 | 0;
      this.B = B3 | 0;
      this.C = C5 | 0;
      this.D = D4 | 0;
      this.E = E5 | 0;
      this.F = F2 | 0;
      this.G = G4 | 0;
      this.H = H3 | 0;
    }
    process(view, offset) {
      for (let i4 = 0; i4 < 16; i4++, offset += 4)
        SHA256_W[i4] = view.getUint32(offset, false);
      for (let i4 = 16; i4 < 64; i4++) {
        const W15 = SHA256_W[i4 - 15];
        const W22 = SHA256_W[i4 - 2];
        const s0 = rotr(W15, 7) ^ rotr(W15, 18) ^ W15 >>> 3;
        const s1 = rotr(W22, 17) ^ rotr(W22, 19) ^ W22 >>> 10;
        SHA256_W[i4] = s1 + SHA256_W[i4 - 7] + s0 + SHA256_W[i4 - 16] | 0;
      }
      let { A: A4, B: B3, C: C5, D: D4, E: E5, F: F2, G: G4, H: H3 } = this;
      for (let i4 = 0; i4 < 64; i4++) {
        const sigma1 = rotr(E5, 6) ^ rotr(E5, 11) ^ rotr(E5, 25);
        const T1 = H3 + sigma1 + Chi(E5, F2, G4) + SHA256_K[i4] + SHA256_W[i4] | 0;
        const sigma0 = rotr(A4, 2) ^ rotr(A4, 13) ^ rotr(A4, 22);
        const T22 = sigma0 + Maj(A4, B3, C5) | 0;
        H3 = G4;
        G4 = F2;
        F2 = E5;
        E5 = D4 + T1 | 0;
        D4 = C5;
        C5 = B3;
        B3 = A4;
        A4 = T1 + T22 | 0;
      }
      A4 = A4 + this.A | 0;
      B3 = B3 + this.B | 0;
      C5 = C5 + this.C | 0;
      D4 = D4 + this.D | 0;
      E5 = E5 + this.E | 0;
      F2 = F2 + this.F | 0;
      G4 = G4 + this.G | 0;
      H3 = H3 + this.H | 0;
      this.set(A4, B3, C5, D4, E5, F2, G4, H3);
    }
    roundClean() {
      clean(SHA256_W);
    }
    destroy() {
      this.set(0, 0, 0, 0, 0, 0, 0, 0);
      clean(this.buffer);
    }
  };
  __name(_SHA256, "SHA256");
  var SHA256 = _SHA256;
  var sha256 = /* @__PURE__ */ createHasher(() => new SHA256());

  // node_modules/ox/_esm/core/Bytes.js
  init_shims();

  // node_modules/ox/node_modules/@noble/curves/esm/abstract/utils.js
  init_shims();
  var _0n2 = /* @__PURE__ */ BigInt(0);
  var _1n2 = /* @__PURE__ */ BigInt(1);
  function isBytes2(a4) {
    return a4 instanceof Uint8Array || ArrayBuffer.isView(a4) && a4.constructor.name === "Uint8Array";
  }
  __name(isBytes2, "isBytes");
  function abytes2(item) {
    if (!isBytes2(item))
      throw new Error("Uint8Array expected");
  }
  __name(abytes2, "abytes");
  function abool(title, value) {
    if (typeof value !== "boolean")
      throw new Error(title + " boolean expected, got " + value);
  }
  __name(abool, "abool");
  function numberToHexUnpadded(num) {
    const hex = num.toString(16);
    return hex.length & 1 ? "0" + hex : hex;
  }
  __name(numberToHexUnpadded, "numberToHexUnpadded");
  function hexToNumber(hex) {
    if (typeof hex !== "string")
      throw new Error("hex string expected, got " + typeof hex);
    return hex === "" ? _0n2 : BigInt("0x" + hex);
  }
  __name(hexToNumber, "hexToNumber");
  var hasHexBuiltin = (
    // @ts-ignore
    typeof Uint8Array.from([]).toHex === "function" && typeof Uint8Array.fromHex === "function"
  );
  var hexes = /* @__PURE__ */ Array.from({ length: 256 }, (_5, i4) => i4.toString(16).padStart(2, "0"));
  function bytesToHex(bytes) {
    abytes2(bytes);
    if (hasHexBuiltin)
      return bytes.toHex();
    let hex = "";
    for (let i4 = 0; i4 < bytes.length; i4++) {
      hex += hexes[bytes[i4]];
    }
    return hex;
  }
  __name(bytesToHex, "bytesToHex");
  var asciis = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
  function asciiToBase16(ch) {
    if (ch >= asciis._0 && ch <= asciis._9)
      return ch - asciis._0;
    if (ch >= asciis.A && ch <= asciis.F)
      return ch - (asciis.A - 10);
    if (ch >= asciis.a && ch <= asciis.f)
      return ch - (asciis.a - 10);
    return;
  }
  __name(asciiToBase16, "asciiToBase16");
  function hexToBytes(hex) {
    if (typeof hex !== "string")
      throw new Error("hex string expected, got " + typeof hex);
    if (hasHexBuiltin)
      return Uint8Array.fromHex(hex);
    const hl = hex.length;
    const al = hl / 2;
    if (hl % 2)
      throw new Error("hex string expected, got unpadded hex of length " + hl);
    const array = new Uint8Array(al);
    for (let ai2 = 0, hi3 = 0; ai2 < al; ai2++, hi3 += 2) {
      const n1 = asciiToBase16(hex.charCodeAt(hi3));
      const n22 = asciiToBase16(hex.charCodeAt(hi3 + 1));
      if (n1 === void 0 || n22 === void 0) {
        const char = hex[hi3] + hex[hi3 + 1];
        throw new Error('hex string expected, got non-hex character "' + char + '" at index ' + hi3);
      }
      array[ai2] = n1 * 16 + n22;
    }
    return array;
  }
  __name(hexToBytes, "hexToBytes");
  function bytesToNumberBE(bytes) {
    return hexToNumber(bytesToHex(bytes));
  }
  __name(bytesToNumberBE, "bytesToNumberBE");
  function bytesToNumberLE(bytes) {
    abytes2(bytes);
    return hexToNumber(bytesToHex(Uint8Array.from(bytes).reverse()));
  }
  __name(bytesToNumberLE, "bytesToNumberLE");
  function numberToBytesBE(n5, len) {
    return hexToBytes(n5.toString(16).padStart(len * 2, "0"));
  }
  __name(numberToBytesBE, "numberToBytesBE");
  function numberToBytesLE(n5, len) {
    return numberToBytesBE(n5, len).reverse();
  }
  __name(numberToBytesLE, "numberToBytesLE");
  function ensureBytes(title, hex, expectedLength) {
    let res;
    if (typeof hex === "string") {
      try {
        res = hexToBytes(hex);
      } catch (e2) {
        throw new Error(title + " must be hex string or Uint8Array, cause: " + e2);
      }
    } else if (isBytes2(hex)) {
      res = Uint8Array.from(hex);
    } else {
      throw new Error(title + " must be hex string or Uint8Array");
    }
    const len = res.length;
    if (typeof expectedLength === "number" && len !== expectedLength)
      throw new Error(title + " of length " + expectedLength + " expected, got " + len);
    return res;
  }
  __name(ensureBytes, "ensureBytes");
  function concatBytes2(...arrays) {
    let sum = 0;
    for (let i4 = 0; i4 < arrays.length; i4++) {
      const a4 = arrays[i4];
      abytes2(a4);
      sum += a4.length;
    }
    const res = new Uint8Array(sum);
    for (let i4 = 0, pad3 = 0; i4 < arrays.length; i4++) {
      const a4 = arrays[i4];
      res.set(a4, pad3);
      pad3 += a4.length;
    }
    return res;
  }
  __name(concatBytes2, "concatBytes");
  var isPosBig = /* @__PURE__ */ __name((n5) => typeof n5 === "bigint" && _0n2 <= n5, "isPosBig");
  function inRange(n5, min, max) {
    return isPosBig(n5) && isPosBig(min) && isPosBig(max) && min <= n5 && n5 < max;
  }
  __name(inRange, "inRange");
  function aInRange(title, n5, min, max) {
    if (!inRange(n5, min, max))
      throw new Error("expected valid " + title + ": " + min + " <= n < " + max + ", got " + n5);
  }
  __name(aInRange, "aInRange");
  function bitLen(n5) {
    let len;
    for (len = 0; n5 > _0n2; n5 >>= _1n2, len += 1)
      ;
    return len;
  }
  __name(bitLen, "bitLen");
  var bitMask = /* @__PURE__ */ __name((n5) => (_1n2 << BigInt(n5)) - _1n2, "bitMask");
  var u8n = /* @__PURE__ */ __name((len) => new Uint8Array(len), "u8n");
  var u8fr = /* @__PURE__ */ __name((arr) => Uint8Array.from(arr), "u8fr");
  function createHmacDrbg(hashLen, qByteLen, hmacFn) {
    if (typeof hashLen !== "number" || hashLen < 2)
      throw new Error("hashLen must be a number");
    if (typeof qByteLen !== "number" || qByteLen < 2)
      throw new Error("qByteLen must be a number");
    if (typeof hmacFn !== "function")
      throw new Error("hmacFn must be a function");
    let v6 = u8n(hashLen);
    let k6 = u8n(hashLen);
    let i4 = 0;
    const reset = /* @__PURE__ */ __name(() => {
      v6.fill(1);
      k6.fill(0);
      i4 = 0;
    }, "reset");
    const h6 = /* @__PURE__ */ __name((...b6) => hmacFn(k6, v6, ...b6), "h");
    const reseed = /* @__PURE__ */ __name((seed = u8n(0)) => {
      k6 = h6(u8fr([0]), seed);
      v6 = h6();
      if (seed.length === 0)
        return;
      k6 = h6(u8fr([1]), seed);
      v6 = h6();
    }, "reseed");
    const gen2 = /* @__PURE__ */ __name(() => {
      if (i4++ >= 1e3)
        throw new Error("drbg: tried 1000 values");
      let len = 0;
      const out = [];
      while (len < qByteLen) {
        v6 = h6();
        const sl = v6.slice();
        out.push(sl);
        len += v6.length;
      }
      return concatBytes2(...out);
    }, "gen");
    const genUntil = /* @__PURE__ */ __name((seed, pred) => {
      reset();
      reseed(seed);
      let res = void 0;
      while (!(res = pred(gen2())))
        reseed();
      reset();
      return res;
    }, "genUntil");
    return genUntil;
  }
  __name(createHmacDrbg, "createHmacDrbg");
  var validatorFns = {
    bigint: /* @__PURE__ */ __name((val) => typeof val === "bigint", "bigint"),
    function: /* @__PURE__ */ __name((val) => typeof val === "function", "function"),
    boolean: /* @__PURE__ */ __name((val) => typeof val === "boolean", "boolean"),
    string: /* @__PURE__ */ __name((val) => typeof val === "string", "string"),
    stringOrUint8Array: /* @__PURE__ */ __name((val) => typeof val === "string" || isBytes2(val), "stringOrUint8Array"),
    isSafeInteger: /* @__PURE__ */ __name((val) => Number.isSafeInteger(val), "isSafeInteger"),
    array: /* @__PURE__ */ __name((val) => Array.isArray(val), "array"),
    field: /* @__PURE__ */ __name((val, object) => object.Fp.isValid(val), "field"),
    hash: /* @__PURE__ */ __name((val) => typeof val === "function" && Number.isSafeInteger(val.outputLen), "hash")
  };
  function validateObject(object, validators, optValidators = {}) {
    const checkField = /* @__PURE__ */ __name((fieldName, type, isOptional) => {
      const checkVal = validatorFns[type];
      if (typeof checkVal !== "function")
        throw new Error("invalid validator function");
      const val = object[fieldName];
      if (isOptional && val === void 0)
        return;
      if (!checkVal(val, object)) {
        throw new Error("param " + String(fieldName) + " is invalid. Expected " + type + ", got " + val);
      }
    }, "checkField");
    for (const [fieldName, type] of Object.entries(validators))
      checkField(fieldName, type, false);
    for (const [fieldName, type] of Object.entries(optValidators))
      checkField(fieldName, type, true);
    return object;
  }
  __name(validateObject, "validateObject");
  function memoized(fn3) {
    const map = /* @__PURE__ */ new WeakMap();
    return (arg, ...args) => {
      const val = map.get(arg);
      if (val !== void 0)
        return val;
      const computed = fn3(arg, ...args);
      map.set(arg, computed);
      return computed;
    };
  }
  __name(memoized, "memoized");

  // node_modules/ox/_esm/core/Hex.js
  init_shims();

  // node_modules/ox/_esm/core/internal/bytes.js
  init_shims();
  function assertSize(bytes, size_) {
    if (size(bytes) > size_)
      throw new SizeOverflowError({
        givenSize: size(bytes),
        maxSize: size_
      });
  }
  __name(assertSize, "assertSize");
  var charCodeMap = {
    zero: 48,
    nine: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102
  };
  function charCodeToBase16(char) {
    if (char >= charCodeMap.zero && char <= charCodeMap.nine)
      return char - charCodeMap.zero;
    if (char >= charCodeMap.A && char <= charCodeMap.F)
      return char - (charCodeMap.A - 10);
    if (char >= charCodeMap.a && char <= charCodeMap.f)
      return char - (charCodeMap.a - 10);
    return void 0;
  }
  __name(charCodeToBase16, "charCodeToBase16");
  function pad(bytes, options = {}) {
    const { dir, size: size3 = 32 } = options;
    if (size3 === 0)
      return bytes;
    if (bytes.length > size3)
      throw new SizeExceedsPaddingSizeError({
        size: bytes.length,
        targetSize: size3,
        type: "Bytes"
      });
    const paddedBytes = new Uint8Array(size3);
    for (let i4 = 0; i4 < size3; i4++) {
      const padEnd = dir === "right";
      paddedBytes[padEnd ? i4 : size3 - i4 - 1] = bytes[padEnd ? i4 : bytes.length - i4 - 1];
    }
    return paddedBytes;
  }
  __name(pad, "pad");

  // node_modules/ox/_esm/core/internal/hex.js
  init_shims();
  function assertSize2(hex, size_) {
    if (size2(hex) > size_)
      throw new SizeOverflowError2({
        givenSize: size2(hex),
        maxSize: size_
      });
  }
  __name(assertSize2, "assertSize");
  function assertStartOffset(value, start) {
    if (typeof start === "number" && start > 0 && start > size2(value) - 1)
      throw new SliceOffsetOutOfBoundsError2({
        offset: start,
        position: "start",
        size: size2(value)
      });
  }
  __name(assertStartOffset, "assertStartOffset");
  function assertEndOffset(value, start, end) {
    if (typeof start === "number" && typeof end === "number" && size2(value) !== end - start) {
      throw new SliceOffsetOutOfBoundsError2({
        offset: end,
        position: "end",
        size: size2(value)
      });
    }
  }
  __name(assertEndOffset, "assertEndOffset");
  function pad2(hex_, options = {}) {
    const { dir, size: size3 = 32 } = options;
    if (size3 === 0)
      return hex_;
    const hex = hex_.replace("0x", "");
    if (hex.length > size3 * 2)
      throw new SizeExceedsPaddingSizeError2({
        size: Math.ceil(hex.length / 2),
        targetSize: size3,
        type: "Hex"
      });
    return `0x${hex[dir === "right" ? "padEnd" : "padStart"](size3 * 2, "0")}`;
  }
  __name(pad2, "pad");
  function trim(value, options = {}) {
    const { dir = "left" } = options;
    let data = value.replace("0x", "");
    let sliceLength = 0;
    for (let i4 = 0; i4 < data.length - 1; i4++) {
      if (data[dir === "left" ? i4 : data.length - i4 - 1].toString() === "0")
        sliceLength++;
      else
        break;
    }
    data = dir === "left" ? data.slice(sliceLength) : data.slice(0, data.length - sliceLength);
    if (data === "0")
      return "0x";
    if (dir === "right" && data.length % 2 === 1)
      return `0x${data}0`;
    return `0x${data}`;
  }
  __name(trim, "trim");

  // node_modules/ox/_esm/core/Json.js
  init_shims();
  var bigIntSuffix = "#__bigint";
  function stringify2(value, replacer, space) {
    return JSON.stringify(value, (key, value2) => {
      if (typeof replacer === "function")
        return replacer(key, value2);
      if (typeof value2 === "bigint")
        return value2.toString() + bigIntSuffix;
      return value2;
    }, space);
  }
  __name(stringify2, "stringify");

  // node_modules/ox/_esm/core/Hex.js
  var hexes2 = /* @__PURE__ */ Array.from({ length: 256 }, (_v2, i4) => i4.toString(16).padStart(2, "0"));
  function assert(value, options = {}) {
    const { strict = false } = options;
    if (!value)
      throw new InvalidHexTypeError(value);
    if (typeof value !== "string")
      throw new InvalidHexTypeError(value);
    if (strict) {
      if (!/^0x[0-9a-fA-F]*$/.test(value))
        throw new InvalidHexValueError(value);
    }
    if (!value.startsWith("0x"))
      throw new InvalidHexValueError(value);
  }
  __name(assert, "assert");
  function concat(...values) {
    return `0x${values.reduce((acc, x6) => acc + x6.replace("0x", ""), "")}`;
  }
  __name(concat, "concat");
  function from(value) {
    if (value instanceof Uint8Array)
      return fromBytes(value);
    if (Array.isArray(value))
      return fromBytes(new Uint8Array(value));
    return value;
  }
  __name(from, "from");
  function fromBytes(value, options = {}) {
    let string2 = "";
    for (let i4 = 0; i4 < value.length; i4++)
      string2 += hexes2[value[i4]];
    const hex = `0x${string2}`;
    if (typeof options.size === "number") {
      assertSize2(hex, options.size);
      return padRight(hex, options.size);
    }
    return hex;
  }
  __name(fromBytes, "fromBytes");
  function fromNumber(value, options = {}) {
    const { signed, size: size3 } = options;
    const value_ = BigInt(value);
    let maxValue;
    if (size3) {
      if (signed)
        maxValue = (1n << BigInt(size3) * 8n - 1n) - 1n;
      else
        maxValue = 2n ** (BigInt(size3) * 8n) - 1n;
    } else if (typeof value === "number") {
      maxValue = BigInt(Number.MAX_SAFE_INTEGER);
    }
    const minValue = typeof maxValue === "bigint" && signed ? -maxValue - 1n : 0;
    if (maxValue && value_ > maxValue || value_ < minValue) {
      const suffix = typeof value === "bigint" ? "n" : "";
      throw new IntegerOutOfRangeError({
        max: maxValue ? `${maxValue}${suffix}` : void 0,
        min: `${minValue}${suffix}`,
        signed,
        size: size3,
        value: `${value}${suffix}`
      });
    }
    const stringValue = (signed && value_ < 0 ? (1n << BigInt(size3 * 8)) + BigInt(value_) : value_).toString(16);
    const hex = `0x${stringValue}`;
    if (size3)
      return padLeft(hex, size3);
    return hex;
  }
  __name(fromNumber, "fromNumber");
  function padLeft(value, size3) {
    return pad2(value, { dir: "left", size: size3 });
  }
  __name(padLeft, "padLeft");
  function padRight(value, size3) {
    return pad2(value, { dir: "right", size: size3 });
  }
  __name(padRight, "padRight");
  function slice(value, start, end, options = {}) {
    const { strict } = options;
    assertStartOffset(value, start);
    const value_ = `0x${value.replace("0x", "").slice((start ?? 0) * 2, (end ?? value.length) * 2)}`;
    if (strict)
      assertEndOffset(value_, start, end);
    return value_;
  }
  __name(slice, "slice");
  function size2(value) {
    return Math.ceil((value.length - 2) / 2);
  }
  __name(size2, "size");
  function trimLeft(value) {
    return trim(value, { dir: "left" });
  }
  __name(trimLeft, "trimLeft");
  function validate(value, options = {}) {
    const { strict = false } = options;
    try {
      assert(value, { strict });
      return true;
    } catch {
      return false;
    }
  }
  __name(validate, "validate");
  var _IntegerOutOfRangeError = class _IntegerOutOfRangeError extends BaseError {
    constructor({ max, min, signed, size: size3, value }) {
      super(`Number \`${value}\` is not in safe${size3 ? ` ${size3 * 8}-bit` : ""}${signed ? " signed" : " unsigned"} integer range ${max ? `(\`${min}\` to \`${max}\`)` : `(above \`${min}\`)`}`);
      Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Hex.IntegerOutOfRangeError"
      });
    }
  };
  __name(_IntegerOutOfRangeError, "IntegerOutOfRangeError");
  var IntegerOutOfRangeError = _IntegerOutOfRangeError;
  var _InvalidHexTypeError = class _InvalidHexTypeError extends BaseError {
    constructor(value) {
      super(`Value \`${typeof value === "object" ? stringify2(value) : value}\` of type \`${typeof value}\` is an invalid hex type.`, {
        metaMessages: ['Hex types must be represented as `"0x${string}"`.']
      });
      Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Hex.InvalidHexTypeError"
      });
    }
  };
  __name(_InvalidHexTypeError, "InvalidHexTypeError");
  var InvalidHexTypeError = _InvalidHexTypeError;
  var _InvalidHexValueError = class _InvalidHexValueError extends BaseError {
    constructor(value) {
      super(`Value \`${value}\` is an invalid hex value.`, {
        metaMessages: [
          'Hex values must start with `"0x"` and contain only hexadecimal characters (0-9, a-f, A-F).'
        ]
      });
      Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Hex.InvalidHexValueError"
      });
    }
  };
  __name(_InvalidHexValueError, "InvalidHexValueError");
  var InvalidHexValueError = _InvalidHexValueError;
  var _SizeOverflowError = class _SizeOverflowError extends BaseError {
    constructor({ givenSize, maxSize }) {
      super(`Size cannot exceed \`${maxSize}\` bytes. Given size: \`${givenSize}\` bytes.`);
      Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Hex.SizeOverflowError"
      });
    }
  };
  __name(_SizeOverflowError, "SizeOverflowError");
  var SizeOverflowError2 = _SizeOverflowError;
  var _SliceOffsetOutOfBoundsError = class _SliceOffsetOutOfBoundsError extends BaseError {
    constructor({ offset, position, size: size3 }) {
      super(`Slice ${position === "start" ? "starting" : "ending"} at offset \`${offset}\` is out-of-bounds (size: \`${size3}\`).`);
      Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Hex.SliceOffsetOutOfBoundsError"
      });
    }
  };
  __name(_SliceOffsetOutOfBoundsError, "SliceOffsetOutOfBoundsError");
  var SliceOffsetOutOfBoundsError2 = _SliceOffsetOutOfBoundsError;
  var _SizeExceedsPaddingSizeError = class _SizeExceedsPaddingSizeError extends BaseError {
    constructor({ size: size3, targetSize, type }) {
      super(`${type.charAt(0).toUpperCase()}${type.slice(1).toLowerCase()} size (\`${size3}\`) exceeds padding size (\`${targetSize}\`).`);
      Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Hex.SizeExceedsPaddingSizeError"
      });
    }
  };
  __name(_SizeExceedsPaddingSizeError, "SizeExceedsPaddingSizeError");
  var SizeExceedsPaddingSizeError2 = _SizeExceedsPaddingSizeError;

  // node_modules/ox/_esm/core/Bytes.js
  var encoder = /* @__PURE__ */ new TextEncoder();
  function assert2(value) {
    if (value instanceof Uint8Array)
      return;
    if (!value)
      throw new InvalidBytesTypeError(value);
    if (typeof value !== "object")
      throw new InvalidBytesTypeError(value);
    if (!("BYTES_PER_ELEMENT" in value))
      throw new InvalidBytesTypeError(value);
    if (value.BYTES_PER_ELEMENT !== 1 || value.constructor.name !== "Uint8Array")
      throw new InvalidBytesTypeError(value);
  }
  __name(assert2, "assert");
  function from2(value) {
    if (value instanceof Uint8Array)
      return value;
    if (typeof value === "string")
      return fromHex(value);
    return fromArray(value);
  }
  __name(from2, "from");
  function fromArray(value) {
    return value instanceof Uint8Array ? value : new Uint8Array(value);
  }
  __name(fromArray, "fromArray");
  function fromHex(value, options = {}) {
    const { size: size3 } = options;
    let hex = value;
    if (size3) {
      assertSize2(value, size3);
      hex = padRight(value, size3);
    }
    let hexString = hex.slice(2);
    if (hexString.length % 2)
      hexString = `0${hexString}`;
    const length2 = hexString.length / 2;
    const bytes = new Uint8Array(length2);
    for (let index = 0, j7 = 0; index < length2; index++) {
      const nibbleLeft = charCodeToBase16(hexString.charCodeAt(j7++));
      const nibbleRight = charCodeToBase16(hexString.charCodeAt(j7++));
      if (nibbleLeft === void 0 || nibbleRight === void 0) {
        throw new BaseError(`Invalid byte sequence ("${hexString[j7 - 2]}${hexString[j7 - 1]}" in "${hexString}").`);
      }
      bytes[index] = nibbleLeft * 16 + nibbleRight;
    }
    return bytes;
  }
  __name(fromHex, "fromHex");
  function fromString(value, options = {}) {
    const { size: size3 } = options;
    const bytes = encoder.encode(value);
    if (typeof size3 === "number") {
      assertSize(bytes, size3);
      return padRight2(bytes, size3);
    }
    return bytes;
  }
  __name(fromString, "fromString");
  function padRight2(value, size3) {
    return pad(value, { dir: "right", size: size3 });
  }
  __name(padRight2, "padRight");
  function size(value) {
    return value.length;
  }
  __name(size, "size");
  function validate2(value) {
    try {
      assert2(value);
      return true;
    } catch {
      return false;
    }
  }
  __name(validate2, "validate");
  var _InvalidBytesTypeError = class _InvalidBytesTypeError extends BaseError {
    constructor(value) {
      super(`Value \`${typeof value === "object" ? stringify2(value) : value}\` of type \`${typeof value}\` is an invalid Bytes value.`, {
        metaMessages: ["Bytes values must be of type `Bytes`."]
      });
      Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Bytes.InvalidBytesTypeError"
      });
    }
  };
  __name(_InvalidBytesTypeError, "InvalidBytesTypeError");
  var InvalidBytesTypeError = _InvalidBytesTypeError;
  var _SizeOverflowError2 = class _SizeOverflowError2 extends BaseError {
    constructor({ givenSize, maxSize }) {
      super(`Size cannot exceed \`${maxSize}\` bytes. Given size: \`${givenSize}\` bytes.`);
      Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Bytes.SizeOverflowError"
      });
    }
  };
  __name(_SizeOverflowError2, "SizeOverflowError");
  var SizeOverflowError = _SizeOverflowError2;
  var _SizeExceedsPaddingSizeError2 = class _SizeExceedsPaddingSizeError2 extends BaseError {
    constructor({ size: size3, targetSize, type }) {
      super(`${type.charAt(0).toUpperCase()}${type.slice(1).toLowerCase()} size (\`${size3}\`) exceeds padding size (\`${targetSize}\`).`);
      Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Bytes.SizeExceedsPaddingSizeError"
      });
    }
  };
  __name(_SizeExceedsPaddingSizeError2, "SizeExceedsPaddingSizeError");
  var SizeExceedsPaddingSizeError = _SizeExceedsPaddingSizeError2;

  // node_modules/ox/_esm/core/Hash.js
  function keccak256(value, options = {}) {
    const { as: as2 = typeof value === "string" ? "Hex" : "Bytes" } = options;
    const bytes = keccak_256(from2(value));
    if (as2 === "Bytes")
      return bytes;
    return fromBytes(bytes);
  }
  __name(keccak256, "keccak256");

  // node_modules/ox/_esm/core/Address.js
  init_shims();

  // node_modules/ox/_esm/core/Caches.js
  init_shims();

  // node_modules/ox/_esm/core/internal/lru.js
  init_shims();
  var _LruMap = class _LruMap extends Map {
    constructor(size3) {
      super();
      Object.defineProperty(this, "maxSize", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      this.maxSize = size3;
    }
    get(key) {
      const value = super.get(key);
      if (super.has(key) && value !== void 0) {
        this.delete(key);
        super.set(key, value);
      }
      return value;
    }
    set(key, value) {
      super.set(key, value);
      if (this.maxSize && this.size > this.maxSize) {
        const firstKey = this.keys().next().value;
        if (firstKey)
          this.delete(firstKey);
      }
      return this;
    }
  };
  __name(_LruMap, "LruMap");
  var LruMap = _LruMap;

  // node_modules/ox/_esm/core/Caches.js
  var caches = {
    checksum: /* @__PURE__ */ new LruMap(8192)
  };
  var checksum = caches.checksum;

  // node_modules/ox/_esm/core/PublicKey.js
  init_shims();
  function assert3(publicKey, options = {}) {
    const { compressed } = options;
    const { prefix, x: x6, y: y5 } = publicKey;
    if (compressed === false || typeof x6 === "bigint" && typeof y5 === "bigint") {
      if (prefix !== 4)
        throw new InvalidPrefixError({
          prefix,
          cause: new InvalidUncompressedPrefixError()
        });
      return;
    }
    if (compressed === true || typeof x6 === "bigint" && typeof y5 === "undefined") {
      if (prefix !== 3 && prefix !== 2)
        throw new InvalidPrefixError({
          prefix,
          cause: new InvalidCompressedPrefixError()
        });
      return;
    }
    throw new InvalidError({ publicKey });
  }
  __name(assert3, "assert");
  function from3(value) {
    const publicKey = (() => {
      if (validate(value))
        return fromHex2(value);
      if (validate2(value))
        return fromBytes2(value);
      const { prefix, x: x6, y: y5 } = value;
      if (typeof x6 === "bigint" && typeof y5 === "bigint")
        return { prefix: prefix ?? 4, x: x6, y: y5 };
      return { prefix, x: x6 };
    })();
    assert3(publicKey);
    return publicKey;
  }
  __name(from3, "from");
  function fromBytes2(publicKey) {
    return fromHex2(fromBytes(publicKey));
  }
  __name(fromBytes2, "fromBytes");
  function fromHex2(publicKey) {
    if (publicKey.length !== 132 && publicKey.length !== 130 && publicKey.length !== 68)
      throw new InvalidSerializedSizeError({ publicKey });
    if (publicKey.length === 130) {
      const x7 = BigInt(slice(publicKey, 0, 32));
      const y5 = BigInt(slice(publicKey, 32, 64));
      return {
        prefix: 4,
        x: x7,
        y: y5
      };
    }
    if (publicKey.length === 132) {
      const prefix2 = Number(slice(publicKey, 0, 1));
      const x7 = BigInt(slice(publicKey, 1, 33));
      const y5 = BigInt(slice(publicKey, 33, 65));
      return {
        prefix: prefix2,
        x: x7,
        y: y5
      };
    }
    const prefix = Number(slice(publicKey, 0, 1));
    const x6 = BigInt(slice(publicKey, 1, 33));
    return {
      prefix,
      x: x6
    };
  }
  __name(fromHex2, "fromHex");
  function toBytes2(publicKey, options = {}) {
    return fromHex(toHex(publicKey, options));
  }
  __name(toBytes2, "toBytes");
  function toHex(publicKey, options = {}) {
    assert3(publicKey);
    const { prefix, x: x6, y: y5 } = publicKey;
    const { includePrefix = true } = options;
    const publicKey_ = concat(
      includePrefix ? fromNumber(prefix, { size: 1 }) : "0x",
      fromNumber(x6, { size: 32 }),
      // If the public key is not compressed, add the y coordinate.
      typeof y5 === "bigint" ? fromNumber(y5, { size: 32 }) : "0x"
    );
    return publicKey_;
  }
  __name(toHex, "toHex");
  var _InvalidError = class _InvalidError extends BaseError {
    constructor({ publicKey }) {
      super(`Value \`${stringify2(publicKey)}\` is not a valid public key.`, {
        metaMessages: [
          "Public key must contain:",
          "- an `x` and `prefix` value (compressed)",
          "- an `x`, `y`, and `prefix` value (uncompressed)"
        ]
      });
      Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "PublicKey.InvalidError"
      });
    }
  };
  __name(_InvalidError, "InvalidError");
  var InvalidError = _InvalidError;
  var _InvalidPrefixError = class _InvalidPrefixError extends BaseError {
    constructor({ prefix, cause }) {
      super(`Prefix "${prefix}" is invalid.`, {
        cause
      });
      Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "PublicKey.InvalidPrefixError"
      });
    }
  };
  __name(_InvalidPrefixError, "InvalidPrefixError");
  var InvalidPrefixError = _InvalidPrefixError;
  var _InvalidCompressedPrefixError = class _InvalidCompressedPrefixError extends BaseError {
    constructor() {
      super("Prefix must be 2 or 3 for compressed public keys.");
      Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "PublicKey.InvalidCompressedPrefixError"
      });
    }
  };
  __name(_InvalidCompressedPrefixError, "InvalidCompressedPrefixError");
  var InvalidCompressedPrefixError = _InvalidCompressedPrefixError;
  var _InvalidUncompressedPrefixError = class _InvalidUncompressedPrefixError extends BaseError {
    constructor() {
      super("Prefix must be 4 for uncompressed public keys.");
      Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "PublicKey.InvalidUncompressedPrefixError"
      });
    }
  };
  __name(_InvalidUncompressedPrefixError, "InvalidUncompressedPrefixError");
  var InvalidUncompressedPrefixError = _InvalidUncompressedPrefixError;
  var _InvalidSerializedSizeError = class _InvalidSerializedSizeError extends BaseError {
    constructor({ publicKey }) {
      super(`Value \`${publicKey}\` is an invalid public key size.`, {
        metaMessages: [
          "Expected: 33 bytes (compressed + prefix), 64 bytes (uncompressed) or 65 bytes (uncompressed + prefix).",
          `Received ${size2(from(publicKey))} bytes.`
        ]
      });
      Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "PublicKey.InvalidSerializedSizeError"
      });
    }
  };
  __name(_InvalidSerializedSizeError, "InvalidSerializedSizeError");
  var InvalidSerializedSizeError = _InvalidSerializedSizeError;

  // node_modules/ox/_esm/core/Address.js
  var addressRegex = /^0x[a-fA-F0-9]{40}$/;
  function assert4(value, options = {}) {
    const { strict = true } = options;
    if (!addressRegex.test(value))
      throw new InvalidAddressError({
        address: value,
        cause: new InvalidInputError()
      });
    if (strict) {
      if (value.toLowerCase() === value)
        return;
      if (checksum2(value) !== value)
        throw new InvalidAddressError({
          address: value,
          cause: new InvalidChecksumError()
        });
    }
  }
  __name(assert4, "assert");
  function checksum2(address) {
    if (checksum.has(address))
      return checksum.get(address);
    assert4(address, { strict: false });
    const hexAddress = address.substring(2).toLowerCase();
    const hash = keccak256(fromString(hexAddress), { as: "Bytes" });
    const characters = hexAddress.split("");
    for (let i4 = 0; i4 < 40; i4 += 2) {
      if (hash[i4 >> 1] >> 4 >= 8 && characters[i4]) {
        characters[i4] = characters[i4].toUpperCase();
      }
      if ((hash[i4 >> 1] & 15) >= 8 && characters[i4 + 1]) {
        characters[i4 + 1] = characters[i4 + 1].toUpperCase();
      }
    }
    const result = `0x${characters.join("")}`;
    checksum.set(address, result);
    return result;
  }
  __name(checksum2, "checksum");
  function from4(address, options = {}) {
    const { checksum: checksumVal = false } = options;
    assert4(address);
    if (checksumVal)
      return checksum2(address);
    return address;
  }
  __name(from4, "from");
  function fromPublicKey(publicKey, options = {}) {
    const address = keccak256(`0x${toHex(publicKey).slice(4)}`).substring(26);
    return from4(`0x${address}`, options);
  }
  __name(fromPublicKey, "fromPublicKey");
  function isEqual(addressA, addressB) {
    assert4(addressA, { strict: false });
    assert4(addressB, { strict: false });
    return addressA.toLowerCase() === addressB.toLowerCase();
  }
  __name(isEqual, "isEqual");
  var _InvalidAddressError = class _InvalidAddressError extends BaseError {
    constructor({ address, cause }) {
      super(`Address "${address}" is invalid.`, {
        cause
      });
      Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Address.InvalidAddressError"
      });
    }
  };
  __name(_InvalidAddressError, "InvalidAddressError");
  var InvalidAddressError = _InvalidAddressError;
  var _InvalidInputError = class _InvalidInputError extends BaseError {
    constructor() {
      super("Address is not a 20 byte (40 hexadecimal character) value.");
      Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Address.InvalidInputError"
      });
    }
  };
  __name(_InvalidInputError, "InvalidInputError");
  var InvalidInputError = _InvalidInputError;
  var _InvalidChecksumError = class _InvalidChecksumError extends BaseError {
    constructor() {
      super("Address does not match its checksum counterpart.");
      Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Address.InvalidChecksumError"
      });
    }
  };
  __name(_InvalidChecksumError, "InvalidChecksumError");
  var InvalidChecksumError = _InvalidChecksumError;

  // node_modules/ox/_esm/core/Solidity.js
  init_shims();
  var maxInt8 = 2n ** (8n - 1n) - 1n;
  var maxInt16 = 2n ** (16n - 1n) - 1n;
  var maxInt24 = 2n ** (24n - 1n) - 1n;
  var maxInt32 = 2n ** (32n - 1n) - 1n;
  var maxInt40 = 2n ** (40n - 1n) - 1n;
  var maxInt48 = 2n ** (48n - 1n) - 1n;
  var maxInt56 = 2n ** (56n - 1n) - 1n;
  var maxInt64 = 2n ** (64n - 1n) - 1n;
  var maxInt72 = 2n ** (72n - 1n) - 1n;
  var maxInt80 = 2n ** (80n - 1n) - 1n;
  var maxInt88 = 2n ** (88n - 1n) - 1n;
  var maxInt96 = 2n ** (96n - 1n) - 1n;
  var maxInt104 = 2n ** (104n - 1n) - 1n;
  var maxInt112 = 2n ** (112n - 1n) - 1n;
  var maxInt120 = 2n ** (120n - 1n) - 1n;
  var maxInt128 = 2n ** (128n - 1n) - 1n;
  var maxInt136 = 2n ** (136n - 1n) - 1n;
  var maxInt144 = 2n ** (144n - 1n) - 1n;
  var maxInt152 = 2n ** (152n - 1n) - 1n;
  var maxInt160 = 2n ** (160n - 1n) - 1n;
  var maxInt168 = 2n ** (168n - 1n) - 1n;
  var maxInt176 = 2n ** (176n - 1n) - 1n;
  var maxInt184 = 2n ** (184n - 1n) - 1n;
  var maxInt192 = 2n ** (192n - 1n) - 1n;
  var maxInt200 = 2n ** (200n - 1n) - 1n;
  var maxInt208 = 2n ** (208n - 1n) - 1n;
  var maxInt216 = 2n ** (216n - 1n) - 1n;
  var maxInt224 = 2n ** (224n - 1n) - 1n;
  var maxInt232 = 2n ** (232n - 1n) - 1n;
  var maxInt240 = 2n ** (240n - 1n) - 1n;
  var maxInt248 = 2n ** (248n - 1n) - 1n;
  var maxInt256 = 2n ** (256n - 1n) - 1n;
  var minInt8 = -(2n ** (8n - 1n));
  var minInt16 = -(2n ** (16n - 1n));
  var minInt24 = -(2n ** (24n - 1n));
  var minInt32 = -(2n ** (32n - 1n));
  var minInt40 = -(2n ** (40n - 1n));
  var minInt48 = -(2n ** (48n - 1n));
  var minInt56 = -(2n ** (56n - 1n));
  var minInt64 = -(2n ** (64n - 1n));
  var minInt72 = -(2n ** (72n - 1n));
  var minInt80 = -(2n ** (80n - 1n));
  var minInt88 = -(2n ** (88n - 1n));
  var minInt96 = -(2n ** (96n - 1n));
  var minInt104 = -(2n ** (104n - 1n));
  var minInt112 = -(2n ** (112n - 1n));
  var minInt120 = -(2n ** (120n - 1n));
  var minInt128 = -(2n ** (128n - 1n));
  var minInt136 = -(2n ** (136n - 1n));
  var minInt144 = -(2n ** (144n - 1n));
  var minInt152 = -(2n ** (152n - 1n));
  var minInt160 = -(2n ** (160n - 1n));
  var minInt168 = -(2n ** (168n - 1n));
  var minInt176 = -(2n ** (176n - 1n));
  var minInt184 = -(2n ** (184n - 1n));
  var minInt192 = -(2n ** (192n - 1n));
  var minInt200 = -(2n ** (200n - 1n));
  var minInt208 = -(2n ** (208n - 1n));
  var minInt216 = -(2n ** (216n - 1n));
  var minInt224 = -(2n ** (224n - 1n));
  var minInt232 = -(2n ** (232n - 1n));
  var minInt240 = -(2n ** (240n - 1n));
  var minInt248 = -(2n ** (248n - 1n));
  var minInt256 = -(2n ** (256n - 1n));
  var maxUint8 = 2n ** 8n - 1n;
  var maxUint16 = 2n ** 16n - 1n;
  var maxUint24 = 2n ** 24n - 1n;
  var maxUint32 = 2n ** 32n - 1n;
  var maxUint40 = 2n ** 40n - 1n;
  var maxUint48 = 2n ** 48n - 1n;
  var maxUint56 = 2n ** 56n - 1n;
  var maxUint64 = 2n ** 64n - 1n;
  var maxUint72 = 2n ** 72n - 1n;
  var maxUint80 = 2n ** 80n - 1n;
  var maxUint88 = 2n ** 88n - 1n;
  var maxUint96 = 2n ** 96n - 1n;
  var maxUint104 = 2n ** 104n - 1n;
  var maxUint112 = 2n ** 112n - 1n;
  var maxUint120 = 2n ** 120n - 1n;
  var maxUint128 = 2n ** 128n - 1n;
  var maxUint136 = 2n ** 136n - 1n;
  var maxUint144 = 2n ** 144n - 1n;
  var maxUint152 = 2n ** 152n - 1n;
  var maxUint160 = 2n ** 160n - 1n;
  var maxUint168 = 2n ** 168n - 1n;
  var maxUint176 = 2n ** 176n - 1n;
  var maxUint184 = 2n ** 184n - 1n;
  var maxUint192 = 2n ** 192n - 1n;
  var maxUint200 = 2n ** 200n - 1n;
  var maxUint208 = 2n ** 208n - 1n;
  var maxUint216 = 2n ** 216n - 1n;
  var maxUint224 = 2n ** 224n - 1n;
  var maxUint232 = 2n ** 232n - 1n;
  var maxUint240 = 2n ** 240n - 1n;
  var maxUint248 = 2n ** 248n - 1n;
  var maxUint256 = 2n ** 256n - 1n;

  // node_modules/ox/_esm/core/Signature.js
  var Signature_exports = {};
  __export(Signature_exports, {
    InvalidRError: () => InvalidRError,
    InvalidSError: () => InvalidSError,
    InvalidSerializedSizeError: () => InvalidSerializedSizeError2,
    InvalidVError: () => InvalidVError,
    InvalidYParityError: () => InvalidYParityError,
    MissingPropertiesError: () => MissingPropertiesError,
    assert: () => assert5,
    extract: () => extract,
    from: () => from5,
    fromBytes: () => fromBytes3,
    fromDerBytes: () => fromDerBytes,
    fromDerHex: () => fromDerHex,
    fromHex: () => fromHex3,
    fromLegacy: () => fromLegacy,
    fromRpc: () => fromRpc,
    fromTuple: () => fromTuple,
    toBytes: () => toBytes3,
    toDerBytes: () => toDerBytes,
    toDerHex: () => toDerHex,
    toHex: () => toHex2,
    toLegacy: () => toLegacy,
    toRpc: () => toRpc,
    toTuple: () => toTuple,
    vToYParity: () => vToYParity,
    validate: () => validate3,
    yParityToV: () => yParityToV
  });
  init_shims();

  // node_modules/ox/node_modules/@noble/curves/esm/secp256k1.js
  init_shims();

  // node_modules/ox/node_modules/@noble/curves/esm/_shortw_utils.js
  init_shims();

  // node_modules/@noble/hashes/esm/hmac.js
  init_shims();
  var _HMAC = class _HMAC extends Hash {
    constructor(hash, _key) {
      super();
      this.finished = false;
      this.destroyed = false;
      ahash(hash);
      const key = toBytes(_key);
      this.iHash = hash.create();
      if (typeof this.iHash.update !== "function")
        throw new Error("Expected instance of class which extends utils.Hash");
      this.blockLen = this.iHash.blockLen;
      this.outputLen = this.iHash.outputLen;
      const blockLen = this.blockLen;
      const pad3 = new Uint8Array(blockLen);
      pad3.set(key.length > blockLen ? hash.create().update(key).digest() : key);
      for (let i4 = 0; i4 < pad3.length; i4++)
        pad3[i4] ^= 54;
      this.iHash.update(pad3);
      this.oHash = hash.create();
      for (let i4 = 0; i4 < pad3.length; i4++)
        pad3[i4] ^= 54 ^ 92;
      this.oHash.update(pad3);
      clean(pad3);
    }
    update(buf) {
      aexists(this);
      this.iHash.update(buf);
      return this;
    }
    digestInto(out) {
      aexists(this);
      abytes(out, this.outputLen);
      this.finished = true;
      this.iHash.digestInto(out);
      this.oHash.update(out);
      this.oHash.digestInto(out);
      this.destroy();
    }
    digest() {
      const out = new Uint8Array(this.oHash.outputLen);
      this.digestInto(out);
      return out;
    }
    _cloneInto(to4) {
      to4 || (to4 = Object.create(Object.getPrototypeOf(this), {}));
      const { oHash, iHash, finished, destroyed, blockLen, outputLen } = this;
      to4 = to4;
      to4.finished = finished;
      to4.destroyed = destroyed;
      to4.blockLen = blockLen;
      to4.outputLen = outputLen;
      to4.oHash = oHash._cloneInto(to4.oHash);
      to4.iHash = iHash._cloneInto(to4.iHash);
      return to4;
    }
    clone() {
      return this._cloneInto();
    }
    destroy() {
      this.destroyed = true;
      this.oHash.destroy();
      this.iHash.destroy();
    }
  };
  __name(_HMAC, "HMAC");
  var HMAC = _HMAC;
  var hmac = /* @__PURE__ */ __name((hash, key, message) => new HMAC(hash, key).update(message).digest(), "hmac");
  hmac.create = (hash, key) => new HMAC(hash, key);

  // node_modules/ox/node_modules/@noble/curves/esm/abstract/weierstrass.js
  init_shims();

  // node_modules/ox/node_modules/@noble/curves/esm/abstract/curve.js
  init_shims();

  // node_modules/ox/node_modules/@noble/curves/esm/abstract/modular.js
  init_shims();
  var _0n3 = BigInt(0);
  var _1n3 = BigInt(1);
  var _2n2 = /* @__PURE__ */ BigInt(2);
  var _3n = /* @__PURE__ */ BigInt(3);
  var _4n = /* @__PURE__ */ BigInt(4);
  var _5n = /* @__PURE__ */ BigInt(5);
  var _8n = /* @__PURE__ */ BigInt(8);
  function mod(a4, b6) {
    const result = a4 % b6;
    return result >= _0n3 ? result : b6 + result;
  }
  __name(mod, "mod");
  function pow2(x6, power, modulo) {
    let res = x6;
    while (power-- > _0n3) {
      res *= res;
      res %= modulo;
    }
    return res;
  }
  __name(pow2, "pow2");
  function invert(number, modulo) {
    if (number === _0n3)
      throw new Error("invert: expected non-zero number");
    if (modulo <= _0n3)
      throw new Error("invert: expected positive modulus, got " + modulo);
    let a4 = mod(number, modulo);
    let b6 = modulo;
    let x6 = _0n3, y5 = _1n3, u2 = _1n3, v6 = _0n3;
    while (a4 !== _0n3) {
      const q3 = b6 / a4;
      const r3 = b6 % a4;
      const m3 = x6 - u2 * q3;
      const n5 = y5 - v6 * q3;
      b6 = a4, a4 = r3, x6 = u2, y5 = v6, u2 = m3, v6 = n5;
    }
    const gcd2 = b6;
    if (gcd2 !== _1n3)
      throw new Error("invert: does not exist");
    return mod(x6, modulo);
  }
  __name(invert, "invert");
  function sqrt3mod4(Fp, n5) {
    const p1div4 = (Fp.ORDER + _1n3) / _4n;
    const root = Fp.pow(n5, p1div4);
    if (!Fp.eql(Fp.sqr(root), n5))
      throw new Error("Cannot find square root");
    return root;
  }
  __name(sqrt3mod4, "sqrt3mod4");
  function sqrt5mod8(Fp, n5) {
    const p5div8 = (Fp.ORDER - _5n) / _8n;
    const n22 = Fp.mul(n5, _2n2);
    const v6 = Fp.pow(n22, p5div8);
    const nv = Fp.mul(n5, v6);
    const i4 = Fp.mul(Fp.mul(nv, _2n2), v6);
    const root = Fp.mul(nv, Fp.sub(i4, Fp.ONE));
    if (!Fp.eql(Fp.sqr(root), n5))
      throw new Error("Cannot find square root");
    return root;
  }
  __name(sqrt5mod8, "sqrt5mod8");
  function tonelliShanks(P6) {
    if (P6 < BigInt(3))
      throw new Error("sqrt is not defined for small field");
    let Q5 = P6 - _1n3;
    let S5 = 0;
    while (Q5 % _2n2 === _0n3) {
      Q5 /= _2n2;
      S5++;
    }
    let Z2 = _2n2;
    const _Fp = Field(P6);
    while (FpLegendre(_Fp, Z2) === 1) {
      if (Z2++ > 1e3)
        throw new Error("Cannot find square root: probably non-prime P");
    }
    if (S5 === 1)
      return sqrt3mod4;
    let cc2 = _Fp.pow(Z2, Q5);
    const Q1div2 = (Q5 + _1n3) / _2n2;
    return /* @__PURE__ */ __name(function tonelliSlow(Fp, n5) {
      if (Fp.is0(n5))
        return n5;
      if (FpLegendre(Fp, n5) !== 1)
        throw new Error("Cannot find square root");
      let M5 = S5;
      let c6 = Fp.mul(Fp.ONE, cc2);
      let t = Fp.pow(n5, Q5);
      let R4 = Fp.pow(n5, Q1div2);
      while (!Fp.eql(t, Fp.ONE)) {
        if (Fp.is0(t))
          return Fp.ZERO;
        let i4 = 1;
        let t_tmp = Fp.sqr(t);
        while (!Fp.eql(t_tmp, Fp.ONE)) {
          i4++;
          t_tmp = Fp.sqr(t_tmp);
          if (i4 === M5)
            throw new Error("Cannot find square root");
        }
        const exponent = _1n3 << BigInt(M5 - i4 - 1);
        const b6 = Fp.pow(c6, exponent);
        M5 = i4;
        c6 = Fp.sqr(b6);
        t = Fp.mul(t, c6);
        R4 = Fp.mul(R4, b6);
      }
      return R4;
    }, "tonelliSlow");
  }
  __name(tonelliShanks, "tonelliShanks");
  function FpSqrt(P6) {
    if (P6 % _4n === _3n)
      return sqrt3mod4;
    if (P6 % _8n === _5n)
      return sqrt5mod8;
    return tonelliShanks(P6);
  }
  __name(FpSqrt, "FpSqrt");
  var FIELD_FIELDS = [
    "create",
    "isValid",
    "is0",
    "neg",
    "inv",
    "sqrt",
    "sqr",
    "eql",
    "add",
    "sub",
    "mul",
    "pow",
    "div",
    "addN",
    "subN",
    "mulN",
    "sqrN"
  ];
  function validateField(field) {
    const initial = {
      ORDER: "bigint",
      MASK: "bigint",
      BYTES: "isSafeInteger",
      BITS: "isSafeInteger"
    };
    const opts = FIELD_FIELDS.reduce((map, val) => {
      map[val] = "function";
      return map;
    }, initial);
    return validateObject(field, opts);
  }
  __name(validateField, "validateField");
  function FpPow(Fp, num, power) {
    if (power < _0n3)
      throw new Error("invalid exponent, negatives unsupported");
    if (power === _0n3)
      return Fp.ONE;
    if (power === _1n3)
      return num;
    let p5 = Fp.ONE;
    let d4 = num;
    while (power > _0n3) {
      if (power & _1n3)
        p5 = Fp.mul(p5, d4);
      d4 = Fp.sqr(d4);
      power >>= _1n3;
    }
    return p5;
  }
  __name(FpPow, "FpPow");
  function FpInvertBatch(Fp, nums, passZero = false) {
    const inverted = new Array(nums.length).fill(passZero ? Fp.ZERO : void 0);
    const multipliedAcc = nums.reduce((acc, num, i4) => {
      if (Fp.is0(num))
        return acc;
      inverted[i4] = acc;
      return Fp.mul(acc, num);
    }, Fp.ONE);
    const invertedAcc = Fp.inv(multipliedAcc);
    nums.reduceRight((acc, num, i4) => {
      if (Fp.is0(num))
        return acc;
      inverted[i4] = Fp.mul(acc, inverted[i4]);
      return Fp.mul(acc, num);
    }, invertedAcc);
    return inverted;
  }
  __name(FpInvertBatch, "FpInvertBatch");
  function FpLegendre(Fp, n5) {
    const p1mod2 = (Fp.ORDER - _1n3) / _2n2;
    const powered = Fp.pow(n5, p1mod2);
    const yes = Fp.eql(powered, Fp.ONE);
    const zero = Fp.eql(powered, Fp.ZERO);
    const no4 = Fp.eql(powered, Fp.neg(Fp.ONE));
    if (!yes && !zero && !no4)
      throw new Error("invalid Legendre symbol result");
    return yes ? 1 : zero ? 0 : -1;
  }
  __name(FpLegendre, "FpLegendre");
  function nLength(n5, nBitLength) {
    if (nBitLength !== void 0)
      anumber(nBitLength);
    const _nBitLength = nBitLength !== void 0 ? nBitLength : n5.toString(2).length;
    const nByteLength = Math.ceil(_nBitLength / 8);
    return { nBitLength: _nBitLength, nByteLength };
  }
  __name(nLength, "nLength");
  function Field(ORDER, bitLen2, isLE2 = false, redef = {}) {
    if (ORDER <= _0n3)
      throw new Error("invalid field: expected ORDER > 0, got " + ORDER);
    const { nBitLength: BITS, nByteLength: BYTES } = nLength(ORDER, bitLen2);
    if (BYTES > 2048)
      throw new Error("invalid field: expected ORDER of <= 2048 bytes");
    let sqrtP;
    const f6 = Object.freeze({
      ORDER,
      isLE: isLE2,
      BITS,
      BYTES,
      MASK: bitMask(BITS),
      ZERO: _0n3,
      ONE: _1n3,
      create: /* @__PURE__ */ __name((num) => mod(num, ORDER), "create"),
      isValid: /* @__PURE__ */ __name((num) => {
        if (typeof num !== "bigint")
          throw new Error("invalid field element: expected bigint, got " + typeof num);
        return _0n3 <= num && num < ORDER;
      }, "isValid"),
      is0: /* @__PURE__ */ __name((num) => num === _0n3, "is0"),
      isOdd: /* @__PURE__ */ __name((num) => (num & _1n3) === _1n3, "isOdd"),
      neg: /* @__PURE__ */ __name((num) => mod(-num, ORDER), "neg"),
      eql: /* @__PURE__ */ __name((lhs, rhs) => lhs === rhs, "eql"),
      sqr: /* @__PURE__ */ __name((num) => mod(num * num, ORDER), "sqr"),
      add: /* @__PURE__ */ __name((lhs, rhs) => mod(lhs + rhs, ORDER), "add"),
      sub: /* @__PURE__ */ __name((lhs, rhs) => mod(lhs - rhs, ORDER), "sub"),
      mul: /* @__PURE__ */ __name((lhs, rhs) => mod(lhs * rhs, ORDER), "mul"),
      pow: /* @__PURE__ */ __name((num, power) => FpPow(f6, num, power), "pow"),
      div: /* @__PURE__ */ __name((lhs, rhs) => mod(lhs * invert(rhs, ORDER), ORDER), "div"),
      // Same as above, but doesn't normalize
      sqrN: /* @__PURE__ */ __name((num) => num * num, "sqrN"),
      addN: /* @__PURE__ */ __name((lhs, rhs) => lhs + rhs, "addN"),
      subN: /* @__PURE__ */ __name((lhs, rhs) => lhs - rhs, "subN"),
      mulN: /* @__PURE__ */ __name((lhs, rhs) => lhs * rhs, "mulN"),
      inv: /* @__PURE__ */ __name((num) => invert(num, ORDER), "inv"),
      sqrt: redef.sqrt || ((n5) => {
        if (!sqrtP)
          sqrtP = FpSqrt(ORDER);
        return sqrtP(f6, n5);
      }),
      toBytes: /* @__PURE__ */ __name((num) => isLE2 ? numberToBytesLE(num, BYTES) : numberToBytesBE(num, BYTES), "toBytes"),
      fromBytes: /* @__PURE__ */ __name((bytes) => {
        if (bytes.length !== BYTES)
          throw new Error("Field.fromBytes: expected " + BYTES + " bytes, got " + bytes.length);
        return isLE2 ? bytesToNumberLE(bytes) : bytesToNumberBE(bytes);
      }, "fromBytes"),
      // TODO: we don't need it here, move out to separate fn
      invertBatch: /* @__PURE__ */ __name((lst) => FpInvertBatch(f6, lst), "invertBatch"),
      // We can't move this out because Fp6, Fp12 implement it
      // and it's unclear what to return in there.
      cmov: /* @__PURE__ */ __name((a4, b6, c6) => c6 ? b6 : a4, "cmov")
    });
    return Object.freeze(f6);
  }
  __name(Field, "Field");
  function getFieldBytesLength(fieldOrder) {
    if (typeof fieldOrder !== "bigint")
      throw new Error("field order must be bigint");
    const bitLength = fieldOrder.toString(2).length;
    return Math.ceil(bitLength / 8);
  }
  __name(getFieldBytesLength, "getFieldBytesLength");
  function getMinHashLength(fieldOrder) {
    const length2 = getFieldBytesLength(fieldOrder);
    return length2 + Math.ceil(length2 / 2);
  }
  __name(getMinHashLength, "getMinHashLength");
  function mapHashToField(key, fieldOrder, isLE2 = false) {
    const len = key.length;
    const fieldLen = getFieldBytesLength(fieldOrder);
    const minLen = getMinHashLength(fieldOrder);
    if (len < 16 || len < minLen || len > 1024)
      throw new Error("expected " + minLen + "-1024 bytes of input, got " + len);
    const num = isLE2 ? bytesToNumberLE(key) : bytesToNumberBE(key);
    const reduced = mod(num, fieldOrder - _1n3) + _1n3;
    return isLE2 ? numberToBytesLE(reduced, fieldLen) : numberToBytesBE(reduced, fieldLen);
  }
  __name(mapHashToField, "mapHashToField");

  // node_modules/ox/node_modules/@noble/curves/esm/abstract/curve.js
  var _0n4 = BigInt(0);
  var _1n4 = BigInt(1);
  function constTimeNegate(condition, item) {
    const neg = item.negate();
    return condition ? neg : item;
  }
  __name(constTimeNegate, "constTimeNegate");
  function validateW(W5, bits) {
    if (!Number.isSafeInteger(W5) || W5 <= 0 || W5 > bits)
      throw new Error("invalid window size, expected [1.." + bits + "], got W=" + W5);
  }
  __name(validateW, "validateW");
  function calcWOpts(W5, scalarBits) {
    validateW(W5, scalarBits);
    const windows = Math.ceil(scalarBits / W5) + 1;
    const windowSize = 2 ** (W5 - 1);
    const maxNumber = 2 ** W5;
    const mask = bitMask(W5);
    const shiftBy = BigInt(W5);
    return { windows, windowSize, mask, maxNumber, shiftBy };
  }
  __name(calcWOpts, "calcWOpts");
  function calcOffsets(n5, window2, wOpts) {
    const { windowSize, mask, maxNumber, shiftBy } = wOpts;
    let wbits = Number(n5 & mask);
    let nextN = n5 >> shiftBy;
    if (wbits > windowSize) {
      wbits -= maxNumber;
      nextN += _1n4;
    }
    const offsetStart = window2 * windowSize;
    const offset = offsetStart + Math.abs(wbits) - 1;
    const isZero = wbits === 0;
    const isNeg = wbits < 0;
    const isNegF = window2 % 2 !== 0;
    const offsetF = offsetStart;
    return { nextN, offset, isZero, isNeg, isNegF, offsetF };
  }
  __name(calcOffsets, "calcOffsets");
  function validateMSMPoints(points, c6) {
    if (!Array.isArray(points))
      throw new Error("array expected");
    points.forEach((p5, i4) => {
      if (!(p5 instanceof c6))
        throw new Error("invalid point at index " + i4);
    });
  }
  __name(validateMSMPoints, "validateMSMPoints");
  function validateMSMScalars(scalars, field) {
    if (!Array.isArray(scalars))
      throw new Error("array of scalars expected");
    scalars.forEach((s3, i4) => {
      if (!field.isValid(s3))
        throw new Error("invalid scalar at index " + i4);
    });
  }
  __name(validateMSMScalars, "validateMSMScalars");
  var pointPrecomputes = /* @__PURE__ */ new WeakMap();
  var pointWindowSizes = /* @__PURE__ */ new WeakMap();
  function getW(P6) {
    return pointWindowSizes.get(P6) || 1;
  }
  __name(getW, "getW");
  function wNAF(c6, bits) {
    return {
      constTimeNegate,
      hasPrecomputes(elm) {
        return getW(elm) !== 1;
      },
      // non-const time multiplication ladder
      unsafeLadder(elm, n5, p5 = c6.ZERO) {
        let d4 = elm;
        while (n5 > _0n4) {
          if (n5 & _1n4)
            p5 = p5.add(d4);
          d4 = d4.double();
          n5 >>= _1n4;
        }
        return p5;
      },
      /**
       * Creates a wNAF precomputation window. Used for caching.
       * Default window size is set by `utils.precompute()` and is equal to 8.
       * Number of precomputed points depends on the curve size:
       * 2^(𝑊−1) * (Math.ceil(𝑛 / 𝑊) + 1), where:
       * - 𝑊 is the window size
       * - 𝑛 is the bitlength of the curve order.
       * For a 256-bit curve and window size 8, the number of precomputed points is 128 * 33 = 4224.
       * @param elm Point instance
       * @param W window size
       * @returns precomputed point tables flattened to a single array
       */
      precomputeWindow(elm, W5) {
        const { windows, windowSize } = calcWOpts(W5, bits);
        const points = [];
        let p5 = elm;
        let base3 = p5;
        for (let window2 = 0; window2 < windows; window2++) {
          base3 = p5;
          points.push(base3);
          for (let i4 = 1; i4 < windowSize; i4++) {
            base3 = base3.add(p5);
            points.push(base3);
          }
          p5 = base3.double();
        }
        return points;
      },
      /**
       * Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
       * @param W window size
       * @param precomputes precomputed tables
       * @param n scalar (we don't check here, but should be less than curve order)
       * @returns real and fake (for const-time) points
       */
      wNAF(W5, precomputes, n5) {
        let p5 = c6.ZERO;
        let f6 = c6.BASE;
        const wo4 = calcWOpts(W5, bits);
        for (let window2 = 0; window2 < wo4.windows; window2++) {
          const { nextN, offset, isZero, isNeg, isNegF, offsetF } = calcOffsets(n5, window2, wo4);
          n5 = nextN;
          if (isZero) {
            f6 = f6.add(constTimeNegate(isNegF, precomputes[offsetF]));
          } else {
            p5 = p5.add(constTimeNegate(isNeg, precomputes[offset]));
          }
        }
        return { p: p5, f: f6 };
      },
      /**
       * Implements ec unsafe (non const-time) multiplication using precomputed tables and w-ary non-adjacent form.
       * @param W window size
       * @param precomputes precomputed tables
       * @param n scalar (we don't check here, but should be less than curve order)
       * @param acc accumulator point to add result of multiplication
       * @returns point
       */
      wNAFUnsafe(W5, precomputes, n5, acc = c6.ZERO) {
        const wo4 = calcWOpts(W5, bits);
        for (let window2 = 0; window2 < wo4.windows; window2++) {
          if (n5 === _0n4)
            break;
          const { nextN, offset, isZero, isNeg } = calcOffsets(n5, window2, wo4);
          n5 = nextN;
          if (isZero) {
            continue;
          } else {
            const item = precomputes[offset];
            acc = acc.add(isNeg ? item.negate() : item);
          }
        }
        return acc;
      },
      getPrecomputes(W5, P6, transform) {
        let comp = pointPrecomputes.get(P6);
        if (!comp) {
          comp = this.precomputeWindow(P6, W5);
          if (W5 !== 1)
            pointPrecomputes.set(P6, transform(comp));
        }
        return comp;
      },
      wNAFCached(P6, n5, transform) {
        const W5 = getW(P6);
        return this.wNAF(W5, this.getPrecomputes(W5, P6, transform), n5);
      },
      wNAFCachedUnsafe(P6, n5, transform, prev) {
        const W5 = getW(P6);
        if (W5 === 1)
          return this.unsafeLadder(P6, n5, prev);
        return this.wNAFUnsafe(W5, this.getPrecomputes(W5, P6, transform), n5, prev);
      },
      // We calculate precomputes for elliptic curve point multiplication
      // using windowed method. This specifies window size and
      // stores precomputed values. Usually only base point would be precomputed.
      setWindowSize(P6, W5) {
        validateW(W5, bits);
        pointWindowSizes.set(P6, W5);
        pointPrecomputes.delete(P6);
      }
    };
  }
  __name(wNAF, "wNAF");
  function pippenger(c6, fieldN, points, scalars) {
    validateMSMPoints(points, c6);
    validateMSMScalars(scalars, fieldN);
    const plength = points.length;
    const slength = scalars.length;
    if (plength !== slength)
      throw new Error("arrays of points and scalars must have equal length");
    const zero = c6.ZERO;
    const wbits = bitLen(BigInt(plength));
    let windowSize = 1;
    if (wbits > 12)
      windowSize = wbits - 3;
    else if (wbits > 4)
      windowSize = wbits - 2;
    else if (wbits > 0)
      windowSize = 2;
    const MASK = bitMask(windowSize);
    const buckets = new Array(Number(MASK) + 1).fill(zero);
    const lastBits = Math.floor((fieldN.BITS - 1) / windowSize) * windowSize;
    let sum = zero;
    for (let i4 = lastBits; i4 >= 0; i4 -= windowSize) {
      buckets.fill(zero);
      for (let j7 = 0; j7 < slength; j7++) {
        const scalar = scalars[j7];
        const wbits2 = Number(scalar >> BigInt(i4) & MASK);
        buckets[wbits2] = buckets[wbits2].add(points[j7]);
      }
      let resI = zero;
      for (let j7 = buckets.length - 1, sumI = zero; j7 > 0; j7--) {
        sumI = sumI.add(buckets[j7]);
        resI = resI.add(sumI);
      }
      sum = sum.add(resI);
      if (i4 !== 0)
        for (let j7 = 0; j7 < windowSize; j7++)
          sum = sum.double();
    }
    return sum;
  }
  __name(pippenger, "pippenger");
  function validateBasic(curve) {
    validateField(curve.Fp);
    validateObject(curve, {
      n: "bigint",
      h: "bigint",
      Gx: "field",
      Gy: "field"
    }, {
      nBitLength: "isSafeInteger",
      nByteLength: "isSafeInteger"
    });
    return Object.freeze({
      ...nLength(curve.n, curve.nBitLength),
      ...curve,
      ...{ p: curve.Fp.ORDER }
    });
  }
  __name(validateBasic, "validateBasic");

  // node_modules/ox/node_modules/@noble/curves/esm/abstract/weierstrass.js
  function validateSigVerOpts(opts) {
    if (opts.lowS !== void 0)
      abool("lowS", opts.lowS);
    if (opts.prehash !== void 0)
      abool("prehash", opts.prehash);
  }
  __name(validateSigVerOpts, "validateSigVerOpts");
  function validatePointOpts(curve) {
    const opts = validateBasic(curve);
    validateObject(opts, {
      a: "field",
      b: "field"
    }, {
      allowInfinityPoint: "boolean",
      allowedPrivateKeyLengths: "array",
      clearCofactor: "function",
      fromBytes: "function",
      isTorsionFree: "function",
      toBytes: "function",
      wrapPrivateKey: "boolean"
    });
    const { endo, Fp, a: a4 } = opts;
    if (endo) {
      if (!Fp.eql(a4, Fp.ZERO)) {
        throw new Error("invalid endo: CURVE.a must be 0");
      }
      if (typeof endo !== "object" || typeof endo.beta !== "bigint" || typeof endo.splitScalar !== "function") {
        throw new Error('invalid endo: expected "beta": bigint and "splitScalar": function');
      }
    }
    return Object.freeze({ ...opts });
  }
  __name(validatePointOpts, "validatePointOpts");
  var _DERErr = class _DERErr extends Error {
    constructor(m3 = "") {
      super(m3);
    }
  };
  __name(_DERErr, "DERErr");
  var DERErr = _DERErr;
  var DER = {
    // asn.1 DER encoding utils
    Err: DERErr,
    // Basic building block is TLV (Tag-Length-Value)
    _tlv: {
      encode: /* @__PURE__ */ __name((tag, data) => {
        const { Err: E5 } = DER;
        if (tag < 0 || tag > 256)
          throw new E5("tlv.encode: wrong tag");
        if (data.length & 1)
          throw new E5("tlv.encode: unpadded data");
        const dataLen = data.length / 2;
        const len = numberToHexUnpadded(dataLen);
        if (len.length / 2 & 128)
          throw new E5("tlv.encode: long form length too big");
        const lenLen = dataLen > 127 ? numberToHexUnpadded(len.length / 2 | 128) : "";
        const t = numberToHexUnpadded(tag);
        return t + lenLen + len + data;
      }, "encode"),
      // v - value, l - left bytes (unparsed)
      decode(tag, data) {
        const { Err: E5 } = DER;
        let pos = 0;
        if (tag < 0 || tag > 256)
          throw new E5("tlv.encode: wrong tag");
        if (data.length < 2 || data[pos++] !== tag)
          throw new E5("tlv.decode: wrong tlv");
        const first = data[pos++];
        const isLong = !!(first & 128);
        let length2 = 0;
        if (!isLong)
          length2 = first;
        else {
          const lenLen = first & 127;
          if (!lenLen)
            throw new E5("tlv.decode(long): indefinite length not supported");
          if (lenLen > 4)
            throw new E5("tlv.decode(long): byte length is too big");
          const lengthBytes = data.subarray(pos, pos + lenLen);
          if (lengthBytes.length !== lenLen)
            throw new E5("tlv.decode: length bytes not complete");
          if (lengthBytes[0] === 0)
            throw new E5("tlv.decode(long): zero leftmost byte");
          for (const b6 of lengthBytes)
            length2 = length2 << 8 | b6;
          pos += lenLen;
          if (length2 < 128)
            throw new E5("tlv.decode(long): not minimal encoding");
        }
        const v6 = data.subarray(pos, pos + length2);
        if (v6.length !== length2)
          throw new E5("tlv.decode: wrong value length");
        return { v: v6, l: data.subarray(pos + length2) };
      }
    },
    // https://crypto.stackexchange.com/a/57734 Leftmost bit of first byte is 'negative' flag,
    // since we always use positive integers here. It must always be empty:
    // - add zero byte if exists
    // - if next byte doesn't have a flag, leading zero is not allowed (minimal encoding)
    _int: {
      encode(num) {
        const { Err: E5 } = DER;
        if (num < _0n5)
          throw new E5("integer: negative integers are not allowed");
        let hex = numberToHexUnpadded(num);
        if (Number.parseInt(hex[0], 16) & 8)
          hex = "00" + hex;
        if (hex.length & 1)
          throw new E5("unexpected DER parsing assertion: unpadded hex");
        return hex;
      },
      decode(data) {
        const { Err: E5 } = DER;
        if (data[0] & 128)
          throw new E5("invalid signature integer: negative");
        if (data[0] === 0 && !(data[1] & 128))
          throw new E5("invalid signature integer: unnecessary leading zero");
        return bytesToNumberBE(data);
      }
    },
    toSig(hex) {
      const { Err: E5, _int: int, _tlv: tlv } = DER;
      const data = ensureBytes("signature", hex);
      const { v: seqBytes, l: seqLeftBytes } = tlv.decode(48, data);
      if (seqLeftBytes.length)
        throw new E5("invalid signature: left bytes after parsing");
      const { v: rBytes, l: rLeftBytes } = tlv.decode(2, seqBytes);
      const { v: sBytes, l: sLeftBytes } = tlv.decode(2, rLeftBytes);
      if (sLeftBytes.length)
        throw new E5("invalid signature: left bytes after parsing");
      return { r: int.decode(rBytes), s: int.decode(sBytes) };
    },
    hexFromSig(sig) {
      const { _tlv: tlv, _int: int } = DER;
      const rs2 = tlv.encode(2, int.encode(sig.r));
      const ss2 = tlv.encode(2, int.encode(sig.s));
      const seq = rs2 + ss2;
      return tlv.encode(48, seq);
    }
  };
  function numToSizedHex(num, size3) {
    return bytesToHex(numberToBytesBE(num, size3));
  }
  __name(numToSizedHex, "numToSizedHex");
  var _0n5 = BigInt(0);
  var _1n5 = BigInt(1);
  var _2n3 = BigInt(2);
  var _3n2 = BigInt(3);
  var _4n2 = BigInt(4);
  function weierstrassPoints(opts) {
    const CURVE = validatePointOpts(opts);
    const { Fp } = CURVE;
    const Fn4 = Field(CURVE.n, CURVE.nBitLength);
    const toBytes4 = CURVE.toBytes || ((_c2, point, _isCompressed) => {
      const a4 = point.toAffine();
      return concatBytes2(Uint8Array.from([4]), Fp.toBytes(a4.x), Fp.toBytes(a4.y));
    });
    const fromBytes4 = CURVE.fromBytes || ((bytes) => {
      const tail = bytes.subarray(1);
      const x6 = Fp.fromBytes(tail.subarray(0, Fp.BYTES));
      const y5 = Fp.fromBytes(tail.subarray(Fp.BYTES, 2 * Fp.BYTES));
      return { x: x6, y: y5 };
    });
    function weierstrassEquation(x6) {
      const { a: a4, b: b6 } = CURVE;
      const x22 = Fp.sqr(x6);
      const x32 = Fp.mul(x22, x6);
      return Fp.add(Fp.add(x32, Fp.mul(x6, a4)), b6);
    }
    __name(weierstrassEquation, "weierstrassEquation");
    function isValidXY(x6, y5) {
      const left = Fp.sqr(y5);
      const right = weierstrassEquation(x6);
      return Fp.eql(left, right);
    }
    __name(isValidXY, "isValidXY");
    if (!isValidXY(CURVE.Gx, CURVE.Gy))
      throw new Error("bad curve params: generator point");
    const _4a3 = Fp.mul(Fp.pow(CURVE.a, _3n2), _4n2);
    const _27b2 = Fp.mul(Fp.sqr(CURVE.b), BigInt(27));
    if (Fp.is0(Fp.add(_4a3, _27b2)))
      throw new Error("bad curve params: a or b");
    function isWithinCurveOrder(num) {
      return inRange(num, _1n5, CURVE.n);
    }
    __name(isWithinCurveOrder, "isWithinCurveOrder");
    function normPrivateKeyToScalar(key) {
      const { allowedPrivateKeyLengths: lengths, nByteLength, wrapPrivateKey, n: N12 } = CURVE;
      if (lengths && typeof key !== "bigint") {
        if (isBytes2(key))
          key = bytesToHex(key);
        if (typeof key !== "string" || !lengths.includes(key.length))
          throw new Error("invalid private key");
        key = key.padStart(nByteLength * 2, "0");
      }
      let num;
      try {
        num = typeof key === "bigint" ? key : bytesToNumberBE(ensureBytes("private key", key, nByteLength));
      } catch (error) {
        throw new Error("invalid private key, expected hex or " + nByteLength + " bytes, got " + typeof key);
      }
      if (wrapPrivateKey)
        num = mod(num, N12);
      aInRange("private key", num, _1n5, N12);
      return num;
    }
    __name(normPrivateKeyToScalar, "normPrivateKeyToScalar");
    function aprjpoint(other) {
      if (!(other instanceof Point))
        throw new Error("ProjectivePoint expected");
    }
    __name(aprjpoint, "aprjpoint");
    const toAffineMemo = memoized((p5, iz) => {
      const { px: x6, py: y5, pz: z6 } = p5;
      if (Fp.eql(z6, Fp.ONE))
        return { x: x6, y: y5 };
      const is0 = p5.is0();
      if (iz == null)
        iz = is0 ? Fp.ONE : Fp.inv(z6);
      const ax = Fp.mul(x6, iz);
      const ay = Fp.mul(y5, iz);
      const zz = Fp.mul(z6, iz);
      if (is0)
        return { x: Fp.ZERO, y: Fp.ZERO };
      if (!Fp.eql(zz, Fp.ONE))
        throw new Error("invZ was invalid");
      return { x: ax, y: ay };
    });
    const assertValidMemo = memoized((p5) => {
      if (p5.is0()) {
        if (CURVE.allowInfinityPoint && !Fp.is0(p5.py))
          return;
        throw new Error("bad point: ZERO");
      }
      const { x: x6, y: y5 } = p5.toAffine();
      if (!Fp.isValid(x6) || !Fp.isValid(y5))
        throw new Error("bad point: x or y not FE");
      if (!isValidXY(x6, y5))
        throw new Error("bad point: equation left != right");
      if (!p5.isTorsionFree())
        throw new Error("bad point: not in prime-order subgroup");
      return true;
    });
    const _Point = class _Point {
      constructor(px, py, pz) {
        if (px == null || !Fp.isValid(px))
          throw new Error("x required");
        if (py == null || !Fp.isValid(py) || Fp.is0(py))
          throw new Error("y required");
        if (pz == null || !Fp.isValid(pz))
          throw new Error("z required");
        this.px = px;
        this.py = py;
        this.pz = pz;
        Object.freeze(this);
      }
      // Does not validate if the point is on-curve.
      // Use fromHex instead, or call assertValidity() later.
      static fromAffine(p5) {
        const { x: x6, y: y5 } = p5 || {};
        if (!p5 || !Fp.isValid(x6) || !Fp.isValid(y5))
          throw new Error("invalid affine point");
        if (p5 instanceof _Point)
          throw new Error("projective point not allowed");
        const is0 = /* @__PURE__ */ __name((i4) => Fp.eql(i4, Fp.ZERO), "is0");
        if (is0(x6) && is0(y5))
          return _Point.ZERO;
        return new _Point(x6, y5, Fp.ONE);
      }
      get x() {
        return this.toAffine().x;
      }
      get y() {
        return this.toAffine().y;
      }
      /**
       * Takes a bunch of Projective Points but executes only one
       * inversion on all of them. Inversion is very slow operation,
       * so this improves performance massively.
       * Optimization: converts a list of projective points to a list of identical points with Z=1.
       */
      static normalizeZ(points) {
        const toInv = FpInvertBatch(Fp, points.map((p5) => p5.pz));
        return points.map((p5, i4) => p5.toAffine(toInv[i4])).map(_Point.fromAffine);
      }
      /**
       * Converts hash string or Uint8Array to Point.
       * @param hex short/long ECDSA hex
       */
      static fromHex(hex) {
        const P6 = _Point.fromAffine(fromBytes4(ensureBytes("pointHex", hex)));
        P6.assertValidity();
        return P6;
      }
      // Multiplies generator point by privateKey.
      static fromPrivateKey(privateKey) {
        return _Point.BASE.multiply(normPrivateKeyToScalar(privateKey));
      }
      // Multiscalar Multiplication
      static msm(points, scalars) {
        return pippenger(_Point, Fn4, points, scalars);
      }
      // "Private method", don't use it directly
      _setWindowSize(windowSize) {
        wnaf.setWindowSize(this, windowSize);
      }
      // A point on curve is valid if it conforms to equation.
      assertValidity() {
        assertValidMemo(this);
      }
      hasEvenY() {
        const { y: y5 } = this.toAffine();
        if (Fp.isOdd)
          return !Fp.isOdd(y5);
        throw new Error("Field doesn't support isOdd");
      }
      /**
       * Compare one point to another.
       */
      equals(other) {
        aprjpoint(other);
        const { px: X1, py: Y1, pz: Z1 } = this;
        const { px: X22, py: Y22, pz: Z2 } = other;
        const U1 = Fp.eql(Fp.mul(X1, Z2), Fp.mul(X22, Z1));
        const U22 = Fp.eql(Fp.mul(Y1, Z2), Fp.mul(Y22, Z1));
        return U1 && U22;
      }
      /**
       * Flips point to one corresponding to (x, -y) in Affine coordinates.
       */
      negate() {
        return new _Point(this.px, Fp.neg(this.py), this.pz);
      }
      // Renes-Costello-Batina exception-free doubling formula.
      // There is 30% faster Jacobian formula, but it is not complete.
      // https://eprint.iacr.org/2015/1060, algorithm 3
      // Cost: 8M + 3S + 3*a + 2*b3 + 15add.
      double() {
        const { a: a4, b: b6 } = CURVE;
        const b32 = Fp.mul(b6, _3n2);
        const { px: X1, py: Y1, pz: Z1 } = this;
        let X32 = Fp.ZERO, Y32 = Fp.ZERO, Z3 = Fp.ZERO;
        let t0 = Fp.mul(X1, X1);
        let t1 = Fp.mul(Y1, Y1);
        let t2 = Fp.mul(Z1, Z1);
        let t3 = Fp.mul(X1, Y1);
        t3 = Fp.add(t3, t3);
        Z3 = Fp.mul(X1, Z1);
        Z3 = Fp.add(Z3, Z3);
        X32 = Fp.mul(a4, Z3);
        Y32 = Fp.mul(b32, t2);
        Y32 = Fp.add(X32, Y32);
        X32 = Fp.sub(t1, Y32);
        Y32 = Fp.add(t1, Y32);
        Y32 = Fp.mul(X32, Y32);
        X32 = Fp.mul(t3, X32);
        Z3 = Fp.mul(b32, Z3);
        t2 = Fp.mul(a4, t2);
        t3 = Fp.sub(t0, t2);
        t3 = Fp.mul(a4, t3);
        t3 = Fp.add(t3, Z3);
        Z3 = Fp.add(t0, t0);
        t0 = Fp.add(Z3, t0);
        t0 = Fp.add(t0, t2);
        t0 = Fp.mul(t0, t3);
        Y32 = Fp.add(Y32, t0);
        t2 = Fp.mul(Y1, Z1);
        t2 = Fp.add(t2, t2);
        t0 = Fp.mul(t2, t3);
        X32 = Fp.sub(X32, t0);
        Z3 = Fp.mul(t2, t1);
        Z3 = Fp.add(Z3, Z3);
        Z3 = Fp.add(Z3, Z3);
        return new _Point(X32, Y32, Z3);
      }
      // Renes-Costello-Batina exception-free addition formula.
      // There is 30% faster Jacobian formula, but it is not complete.
      // https://eprint.iacr.org/2015/1060, algorithm 1
      // Cost: 12M + 0S + 3*a + 3*b3 + 23add.
      add(other) {
        aprjpoint(other);
        const { px: X1, py: Y1, pz: Z1 } = this;
        const { px: X22, py: Y22, pz: Z2 } = other;
        let X32 = Fp.ZERO, Y32 = Fp.ZERO, Z3 = Fp.ZERO;
        const a4 = CURVE.a;
        const b32 = Fp.mul(CURVE.b, _3n2);
        let t0 = Fp.mul(X1, X22);
        let t1 = Fp.mul(Y1, Y22);
        let t2 = Fp.mul(Z1, Z2);
        let t3 = Fp.add(X1, Y1);
        let t4 = Fp.add(X22, Y22);
        t3 = Fp.mul(t3, t4);
        t4 = Fp.add(t0, t1);
        t3 = Fp.sub(t3, t4);
        t4 = Fp.add(X1, Z1);
        let t5 = Fp.add(X22, Z2);
        t4 = Fp.mul(t4, t5);
        t5 = Fp.add(t0, t2);
        t4 = Fp.sub(t4, t5);
        t5 = Fp.add(Y1, Z1);
        X32 = Fp.add(Y22, Z2);
        t5 = Fp.mul(t5, X32);
        X32 = Fp.add(t1, t2);
        t5 = Fp.sub(t5, X32);
        Z3 = Fp.mul(a4, t4);
        X32 = Fp.mul(b32, t2);
        Z3 = Fp.add(X32, Z3);
        X32 = Fp.sub(t1, Z3);
        Z3 = Fp.add(t1, Z3);
        Y32 = Fp.mul(X32, Z3);
        t1 = Fp.add(t0, t0);
        t1 = Fp.add(t1, t0);
        t2 = Fp.mul(a4, t2);
        t4 = Fp.mul(b32, t4);
        t1 = Fp.add(t1, t2);
        t2 = Fp.sub(t0, t2);
        t2 = Fp.mul(a4, t2);
        t4 = Fp.add(t4, t2);
        t0 = Fp.mul(t1, t4);
        Y32 = Fp.add(Y32, t0);
        t0 = Fp.mul(t5, t4);
        X32 = Fp.mul(t3, X32);
        X32 = Fp.sub(X32, t0);
        t0 = Fp.mul(t3, t1);
        Z3 = Fp.mul(t5, Z3);
        Z3 = Fp.add(Z3, t0);
        return new _Point(X32, Y32, Z3);
      }
      subtract(other) {
        return this.add(other.negate());
      }
      is0() {
        return this.equals(_Point.ZERO);
      }
      wNAF(n5) {
        return wnaf.wNAFCached(this, n5, _Point.normalizeZ);
      }
      /**
       * Non-constant-time multiplication. Uses double-and-add algorithm.
       * It's faster, but should only be used when you don't care about
       * an exposed private key e.g. sig verification, which works over *public* keys.
       */
      multiplyUnsafe(sc2) {
        const { endo: endo2, n: N12 } = CURVE;
        aInRange("scalar", sc2, _0n5, N12);
        const I3 = _Point.ZERO;
        if (sc2 === _0n5)
          return I3;
        if (this.is0() || sc2 === _1n5)
          return this;
        if (!endo2 || wnaf.hasPrecomputes(this))
          return wnaf.wNAFCachedUnsafe(this, sc2, _Point.normalizeZ);
        let { k1neg, k1, k2neg, k2: k22 } = endo2.splitScalar(sc2);
        let k1p = I3;
        let k2p = I3;
        let d4 = this;
        while (k1 > _0n5 || k22 > _0n5) {
          if (k1 & _1n5)
            k1p = k1p.add(d4);
          if (k22 & _1n5)
            k2p = k2p.add(d4);
          d4 = d4.double();
          k1 >>= _1n5;
          k22 >>= _1n5;
        }
        if (k1neg)
          k1p = k1p.negate();
        if (k2neg)
          k2p = k2p.negate();
        k2p = new _Point(Fp.mul(k2p.px, endo2.beta), k2p.py, k2p.pz);
        return k1p.add(k2p);
      }
      /**
       * Constant time multiplication.
       * Uses wNAF method. Windowed method may be 10% faster,
       * but takes 2x longer to generate and consumes 2x memory.
       * Uses precomputes when available.
       * Uses endomorphism for Koblitz curves.
       * @param scalar by which the point would be multiplied
       * @returns New point
       */
      multiply(scalar) {
        const { endo: endo2, n: N12 } = CURVE;
        aInRange("scalar", scalar, _1n5, N12);
        let point, fake;
        if (endo2) {
          const { k1neg, k1, k2neg, k2: k22 } = endo2.splitScalar(scalar);
          let { p: k1p, f: f1p } = this.wNAF(k1);
          let { p: k2p, f: f2p } = this.wNAF(k22);
          k1p = wnaf.constTimeNegate(k1neg, k1p);
          k2p = wnaf.constTimeNegate(k2neg, k2p);
          k2p = new _Point(Fp.mul(k2p.px, endo2.beta), k2p.py, k2p.pz);
          point = k1p.add(k2p);
          fake = f1p.add(f2p);
        } else {
          const { p: p5, f: f6 } = this.wNAF(scalar);
          point = p5;
          fake = f6;
        }
        return _Point.normalizeZ([point, fake])[0];
      }
      /**
       * Efficiently calculate `aP + bQ`. Unsafe, can expose private key, if used incorrectly.
       * Not using Strauss-Shamir trick: precomputation tables are faster.
       * The trick could be useful if both P and Q are not G (not in our case).
       * @returns non-zero affine point
       */
      multiplyAndAddUnsafe(Q5, a4, b6) {
        const G4 = _Point.BASE;
        const mul = /* @__PURE__ */ __name((P6, a5) => a5 === _0n5 || a5 === _1n5 || !P6.equals(G4) ? P6.multiplyUnsafe(a5) : P6.multiply(a5), "mul");
        const sum = mul(this, a4).add(mul(Q5, b6));
        return sum.is0() ? void 0 : sum;
      }
      // Converts Projective point to affine (x, y) coordinates.
      // Can accept precomputed Z^-1 - for example, from invertBatch.
      // (x, y, z) ∋ (x=x/z, y=y/z)
      toAffine(iz) {
        return toAffineMemo(this, iz);
      }
      isTorsionFree() {
        const { h: cofactor, isTorsionFree } = CURVE;
        if (cofactor === _1n5)
          return true;
        if (isTorsionFree)
          return isTorsionFree(_Point, this);
        throw new Error("isTorsionFree() has not been declared for the elliptic curve");
      }
      clearCofactor() {
        const { h: cofactor, clearCofactor } = CURVE;
        if (cofactor === _1n5)
          return this;
        if (clearCofactor)
          return clearCofactor(_Point, this);
        return this.multiplyUnsafe(CURVE.h);
      }
      toRawBytes(isCompressed = true) {
        abool("isCompressed", isCompressed);
        this.assertValidity();
        return toBytes4(_Point, this, isCompressed);
      }
      toHex(isCompressed = true) {
        abool("isCompressed", isCompressed);
        return bytesToHex(this.toRawBytes(isCompressed));
      }
    };
    __name(_Point, "Point");
    let Point = _Point;
    Point.BASE = new Point(CURVE.Gx, CURVE.Gy, Fp.ONE);
    Point.ZERO = new Point(Fp.ZERO, Fp.ONE, Fp.ZERO);
    const { endo, nBitLength } = CURVE;
    const wnaf = wNAF(Point, endo ? Math.ceil(nBitLength / 2) : nBitLength);
    return {
      CURVE,
      ProjectivePoint: Point,
      normPrivateKeyToScalar,
      weierstrassEquation,
      isWithinCurveOrder
    };
  }
  __name(weierstrassPoints, "weierstrassPoints");
  function validateOpts(curve) {
    const opts = validateBasic(curve);
    validateObject(opts, {
      hash: "hash",
      hmac: "function",
      randomBytes: "function"
    }, {
      bits2int: "function",
      bits2int_modN: "function",
      lowS: "boolean"
    });
    return Object.freeze({ lowS: true, ...opts });
  }
  __name(validateOpts, "validateOpts");
  function weierstrass(curveDef) {
    const CURVE = validateOpts(curveDef);
    const { Fp, n: CURVE_ORDER, nByteLength, nBitLength } = CURVE;
    const compressedLen = Fp.BYTES + 1;
    const uncompressedLen = 2 * Fp.BYTES + 1;
    function modN(a4) {
      return mod(a4, CURVE_ORDER);
    }
    __name(modN, "modN");
    function invN(a4) {
      return invert(a4, CURVE_ORDER);
    }
    __name(invN, "invN");
    const { ProjectivePoint: Point, normPrivateKeyToScalar, weierstrassEquation, isWithinCurveOrder } = weierstrassPoints({
      ...CURVE,
      toBytes(_c2, point, isCompressed) {
        const a4 = point.toAffine();
        const x6 = Fp.toBytes(a4.x);
        const cat = concatBytes2;
        abool("isCompressed", isCompressed);
        if (isCompressed) {
          return cat(Uint8Array.from([point.hasEvenY() ? 2 : 3]), x6);
        } else {
          return cat(Uint8Array.from([4]), x6, Fp.toBytes(a4.y));
        }
      },
      fromBytes(bytes) {
        const len = bytes.length;
        const head = bytes[0];
        const tail = bytes.subarray(1);
        if (len === compressedLen && (head === 2 || head === 3)) {
          const x6 = bytesToNumberBE(tail);
          if (!inRange(x6, _1n5, Fp.ORDER))
            throw new Error("Point is not on curve");
          const y22 = weierstrassEquation(x6);
          let y5;
          try {
            y5 = Fp.sqrt(y22);
          } catch (sqrtError) {
            const suffix = sqrtError instanceof Error ? ": " + sqrtError.message : "";
            throw new Error("Point is not on curve" + suffix);
          }
          const isYOdd = (y5 & _1n5) === _1n5;
          const isHeadOdd = (head & 1) === 1;
          if (isHeadOdd !== isYOdd)
            y5 = Fp.neg(y5);
          return { x: x6, y: y5 };
        } else if (len === uncompressedLen && head === 4) {
          const x6 = Fp.fromBytes(tail.subarray(0, Fp.BYTES));
          const y5 = Fp.fromBytes(tail.subarray(Fp.BYTES, 2 * Fp.BYTES));
          return { x: x6, y: y5 };
        } else {
          const cl = compressedLen;
          const ul = uncompressedLen;
          throw new Error("invalid Point, expected length of " + cl + ", or uncompressed " + ul + ", got " + len);
        }
      }
    });
    function isBiggerThanHalfOrder(number) {
      const HALF = CURVE_ORDER >> _1n5;
      return number > HALF;
    }
    __name(isBiggerThanHalfOrder, "isBiggerThanHalfOrder");
    function normalizeS(s3) {
      return isBiggerThanHalfOrder(s3) ? modN(-s3) : s3;
    }
    __name(normalizeS, "normalizeS");
    const slcNum = /* @__PURE__ */ __name((b6, from8, to4) => bytesToNumberBE(b6.slice(from8, to4)), "slcNum");
    const _Signature = class _Signature {
      constructor(r3, s3, recovery) {
        aInRange("r", r3, _1n5, CURVE_ORDER);
        aInRange("s", s3, _1n5, CURVE_ORDER);
        this.r = r3;
        this.s = s3;
        if (recovery != null)
          this.recovery = recovery;
        Object.freeze(this);
      }
      // pair (bytes of r, bytes of s)
      static fromCompact(hex) {
        const l7 = nByteLength;
        hex = ensureBytes("compactSignature", hex, l7 * 2);
        return new _Signature(slcNum(hex, 0, l7), slcNum(hex, l7, 2 * l7));
      }
      // DER encoded ECDSA signature
      // https://bitcoin.stackexchange.com/questions/57644/what-are-the-parts-of-a-bitcoin-transaction-input-script
      static fromDER(hex) {
        const { r: r3, s: s3 } = DER.toSig(ensureBytes("DER", hex));
        return new _Signature(r3, s3);
      }
      /**
       * @todo remove
       * @deprecated
       */
      assertValidity() {
      }
      addRecoveryBit(recovery) {
        return new _Signature(this.r, this.s, recovery);
      }
      recoverPublicKey(msgHash) {
        const { r: r3, s: s3, recovery: rec } = this;
        const h6 = bits2int_modN(ensureBytes("msgHash", msgHash));
        if (rec == null || ![0, 1, 2, 3].includes(rec))
          throw new Error("recovery id invalid");
        const radj = rec === 2 || rec === 3 ? r3 + CURVE.n : r3;
        if (radj >= Fp.ORDER)
          throw new Error("recovery id 2 or 3 invalid");
        const prefix = (rec & 1) === 0 ? "02" : "03";
        const R4 = Point.fromHex(prefix + numToSizedHex(radj, Fp.BYTES));
        const ir3 = invN(radj);
        const u1 = modN(-h6 * ir3);
        const u2 = modN(s3 * ir3);
        const Q5 = Point.BASE.multiplyAndAddUnsafe(R4, u1, u2);
        if (!Q5)
          throw new Error("point at infinify");
        Q5.assertValidity();
        return Q5;
      }
      // Signatures should be low-s, to prevent malleability.
      hasHighS() {
        return isBiggerThanHalfOrder(this.s);
      }
      normalizeS() {
        return this.hasHighS() ? new _Signature(this.r, modN(-this.s), this.recovery) : this;
      }
      // DER-encoded
      toDERRawBytes() {
        return hexToBytes(this.toDERHex());
      }
      toDERHex() {
        return DER.hexFromSig(this);
      }
      // padded bytes of r, then padded bytes of s
      toCompactRawBytes() {
        return hexToBytes(this.toCompactHex());
      }
      toCompactHex() {
        const l7 = nByteLength;
        return numToSizedHex(this.r, l7) + numToSizedHex(this.s, l7);
      }
    };
    __name(_Signature, "Signature");
    let Signature = _Signature;
    const utils = {
      isValidPrivateKey(privateKey) {
        try {
          normPrivateKeyToScalar(privateKey);
          return true;
        } catch (error) {
          return false;
        }
      },
      normPrivateKeyToScalar,
      /**
       * Produces cryptographically secure private key from random of size
       * (groupLen + ceil(groupLen / 2)) with modulo bias being negligible.
       */
      randomPrivateKey: /* @__PURE__ */ __name(() => {
        const length2 = getMinHashLength(CURVE.n);
        return mapHashToField(CURVE.randomBytes(length2), CURVE.n);
      }, "randomPrivateKey"),
      /**
       * Creates precompute table for an arbitrary EC point. Makes point "cached".
       * Allows to massively speed-up `point.multiply(scalar)`.
       * @returns cached point
       * @example
       * const fast = utils.precompute(8, ProjectivePoint.fromHex(someonesPubKey));
       * fast.multiply(privKey); // much faster ECDH now
       */
      precompute(windowSize = 8, point = Point.BASE) {
        point._setWindowSize(windowSize);
        point.multiply(BigInt(3));
        return point;
      }
    };
    function getPublicKey2(privateKey, isCompressed = true) {
      return Point.fromPrivateKey(privateKey).toRawBytes(isCompressed);
    }
    __name(getPublicKey2, "getPublicKey");
    function isProbPub(item) {
      if (typeof item === "bigint")
        return false;
      if (item instanceof Point)
        return true;
      const arr = ensureBytes("key", item);
      const len = arr.length;
      const fpl = Fp.BYTES;
      const compLen = fpl + 1;
      const uncompLen = 2 * fpl + 1;
      if (CURVE.allowedPrivateKeyLengths || nByteLength === compLen) {
        return void 0;
      } else {
        return len === compLen || len === uncompLen;
      }
    }
    __name(isProbPub, "isProbPub");
    function getSharedSecret2(privateA, publicB, isCompressed = true) {
      if (isProbPub(privateA) === true)
        throw new Error("first arg must be private key");
      if (isProbPub(publicB) === false)
        throw new Error("second arg must be public key");
      const b6 = Point.fromHex(publicB);
      return b6.multiply(normPrivateKeyToScalar(privateA)).toRawBytes(isCompressed);
    }
    __name(getSharedSecret2, "getSharedSecret");
    const bits2int = CURVE.bits2int || function(bytes) {
      if (bytes.length > 8192)
        throw new Error("input is too large");
      const num = bytesToNumberBE(bytes);
      const delta = bytes.length * 8 - nBitLength;
      return delta > 0 ? num >> BigInt(delta) : num;
    };
    const bits2int_modN = CURVE.bits2int_modN || function(bytes) {
      return modN(bits2int(bytes));
    };
    const ORDER_MASK = bitMask(nBitLength);
    function int2octets(num) {
      aInRange("num < 2^" + nBitLength, num, _0n5, ORDER_MASK);
      return numberToBytesBE(num, nByteLength);
    }
    __name(int2octets, "int2octets");
    function prepSig(msgHash, privateKey, opts = defaultSigOpts) {
      if (["recovered", "canonical"].some((k6) => k6 in opts))
        throw new Error("sign() legacy options not supported");
      const { hash, randomBytes: randomBytes2 } = CURVE;
      let { lowS, prehash, extraEntropy: ent } = opts;
      if (lowS == null)
        lowS = true;
      msgHash = ensureBytes("msgHash", msgHash);
      validateSigVerOpts(opts);
      if (prehash)
        msgHash = ensureBytes("prehashed msgHash", hash(msgHash));
      const h1int = bits2int_modN(msgHash);
      const d4 = normPrivateKeyToScalar(privateKey);
      const seedArgs = [int2octets(d4), int2octets(h1int)];
      if (ent != null && ent !== false) {
        const e2 = ent === true ? randomBytes2(Fp.BYTES) : ent;
        seedArgs.push(ensureBytes("extraEntropy", e2));
      }
      const seed = concatBytes2(...seedArgs);
      const m3 = h1int;
      function k2sig(kBytes) {
        const k6 = bits2int(kBytes);
        if (!isWithinCurveOrder(k6))
          return;
        const ik = invN(k6);
        const q3 = Point.BASE.multiply(k6).toAffine();
        const r3 = modN(q3.x);
        if (r3 === _0n5)
          return;
        const s3 = modN(ik * modN(m3 + r3 * d4));
        if (s3 === _0n5)
          return;
        let recovery = (q3.x === r3 ? 0 : 2) | Number(q3.y & _1n5);
        let normS = s3;
        if (lowS && isBiggerThanHalfOrder(s3)) {
          normS = normalizeS(s3);
          recovery ^= 1;
        }
        return new Signature(r3, normS, recovery);
      }
      __name(k2sig, "k2sig");
      return { seed, k2sig };
    }
    __name(prepSig, "prepSig");
    const defaultSigOpts = { lowS: CURVE.lowS, prehash: false };
    const defaultVerOpts = { lowS: CURVE.lowS, prehash: false };
    function sign2(msgHash, privKey, opts = defaultSigOpts) {
      const { seed, k2sig } = prepSig(msgHash, privKey, opts);
      const C5 = CURVE;
      const drbg = createHmacDrbg(C5.hash.outputLen, C5.nByteLength, C5.hmac);
      return drbg(seed, k2sig);
    }
    __name(sign2, "sign");
    Point.BASE._setWindowSize(8);
    function verify2(signature, msgHash, publicKey, opts = defaultVerOpts) {
      const sg = signature;
      msgHash = ensureBytes("msgHash", msgHash);
      publicKey = ensureBytes("publicKey", publicKey);
      const { lowS, prehash, format } = opts;
      validateSigVerOpts(opts);
      if ("strict" in opts)
        throw new Error("options.strict was renamed to lowS");
      if (format !== void 0 && format !== "compact" && format !== "der")
        throw new Error("format must be compact or der");
      const isHex = typeof sg === "string" || isBytes2(sg);
      const isObj = !isHex && !format && typeof sg === "object" && sg !== null && typeof sg.r === "bigint" && typeof sg.s === "bigint";
      if (!isHex && !isObj)
        throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");
      let _sig = void 0;
      let P6;
      try {
        if (isObj)
          _sig = new Signature(sg.r, sg.s);
        if (isHex) {
          try {
            if (format !== "compact")
              _sig = Signature.fromDER(sg);
          } catch (derError) {
            if (!(derError instanceof DER.Err))
              throw derError;
          }
          if (!_sig && format !== "der")
            _sig = Signature.fromCompact(sg);
        }
        P6 = Point.fromHex(publicKey);
      } catch (error) {
        return false;
      }
      if (!_sig)
        return false;
      if (lowS && _sig.hasHighS())
        return false;
      if (prehash)
        msgHash = CURVE.hash(msgHash);
      const { r: r3, s: s3 } = _sig;
      const h6 = bits2int_modN(msgHash);
      const is2 = invN(s3);
      const u1 = modN(h6 * is2);
      const u2 = modN(r3 * is2);
      const R4 = Point.BASE.multiplyAndAddUnsafe(P6, u1, u2)?.toAffine();
      if (!R4)
        return false;
      const v6 = modN(R4.x);
      return v6 === r3;
    }
    __name(verify2, "verify");
    return {
      CURVE,
      getPublicKey: getPublicKey2,
      getSharedSecret: getSharedSecret2,
      sign: sign2,
      verify: verify2,
      ProjectivePoint: Point,
      Signature,
      utils
    };
  }
  __name(weierstrass, "weierstrass");

  // node_modules/ox/node_modules/@noble/curves/esm/_shortw_utils.js
  function getHash(hash) {
    return {
      hash,
      hmac: /* @__PURE__ */ __name((key, ...msgs) => hmac(hash, key, concatBytes(...msgs)), "hmac"),
      randomBytes
    };
  }
  __name(getHash, "getHash");
  function createCurve(curveDef, defHash) {
    const create2 = /* @__PURE__ */ __name((hash) => weierstrass({ ...curveDef, ...getHash(hash) }), "create");
    return { ...create2(defHash), create: create2 };
  }
  __name(createCurve, "createCurve");

  // node_modules/ox/node_modules/@noble/curves/esm/secp256k1.js
  var secp256k1P = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f");
  var secp256k1N = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141");
  var _0n6 = BigInt(0);
  var _1n6 = BigInt(1);
  var _2n4 = BigInt(2);
  var divNearest = /* @__PURE__ */ __name((a4, b6) => (a4 + b6 / _2n4) / b6, "divNearest");
  function sqrtMod(y5) {
    const P6 = secp256k1P;
    const _3n3 = BigInt(3), _6n = BigInt(6), _11n = BigInt(11), _22n = BigInt(22);
    const _23n = BigInt(23), _44n = BigInt(44), _88n = BigInt(88);
    const b22 = y5 * y5 * y5 % P6;
    const b32 = b22 * b22 * y5 % P6;
    const b6 = pow2(b32, _3n3, P6) * b32 % P6;
    const b9 = pow2(b6, _3n3, P6) * b32 % P6;
    const b11 = pow2(b9, _2n4, P6) * b22 % P6;
    const b222 = pow2(b11, _11n, P6) * b11 % P6;
    const b44 = pow2(b222, _22n, P6) * b222 % P6;
    const b88 = pow2(b44, _44n, P6) * b44 % P6;
    const b176 = pow2(b88, _88n, P6) * b88 % P6;
    const b220 = pow2(b176, _44n, P6) * b44 % P6;
    const b223 = pow2(b220, _3n3, P6) * b32 % P6;
    const t1 = pow2(b223, _23n, P6) * b222 % P6;
    const t2 = pow2(t1, _6n, P6) * b22 % P6;
    const root = pow2(t2, _2n4, P6);
    if (!Fpk1.eql(Fpk1.sqr(root), y5))
      throw new Error("Cannot find square root");
    return root;
  }
  __name(sqrtMod, "sqrtMod");
  var Fpk1 = Field(secp256k1P, void 0, void 0, { sqrt: sqrtMod });
  var secp256k1 = createCurve({
    a: _0n6,
    b: BigInt(7),
    Fp: Fpk1,
    n: secp256k1N,
    Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
    Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
    h: BigInt(1),
    lowS: true,
    // Allow only low-S signatures by default in sign() and verify()
    endo: {
      // Endomorphism, see above
      beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
      splitScalar: /* @__PURE__ */ __name((k6) => {
        const n5 = secp256k1N;
        const a1 = BigInt("0x3086d221a7d46bcde86c90e49284eb15");
        const b1 = -_1n6 * BigInt("0xe4437ed6010e88286f547fa90abfe4c3");
        const a22 = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8");
        const b22 = a1;
        const POW_2_128 = BigInt("0x100000000000000000000000000000000");
        const c1 = divNearest(b22 * k6, n5);
        const c22 = divNearest(-b1 * k6, n5);
        let k1 = mod(k6 - c1 * a1 - c22 * a22, n5);
        let k22 = mod(-c1 * b1 - c22 * b22, n5);
        const k1neg = k1 > POW_2_128;
        const k2neg = k22 > POW_2_128;
        if (k1neg)
          k1 = n5 - k1;
        if (k2neg)
          k22 = n5 - k22;
        if (k1 > POW_2_128 || k22 > POW_2_128) {
          throw new Error("splitScalar: Endomorphism failed, k=" + k6);
        }
        return { k1neg, k1, k2neg, k2: k22 };
      }, "splitScalar")
    }
  }, sha256);

  // node_modules/ox/_esm/core/Signature.js
  function assert5(signature, options = {}) {
    const { recovered } = options;
    if (typeof signature.r === "undefined")
      throw new MissingPropertiesError({ signature });
    if (typeof signature.s === "undefined")
      throw new MissingPropertiesError({ signature });
    if (recovered && typeof signature.yParity === "undefined")
      throw new MissingPropertiesError({ signature });
    if (signature.r < 0n || signature.r > maxUint256)
      throw new InvalidRError({ value: signature.r });
    if (signature.s < 0n || signature.s > maxUint256)
      throw new InvalidSError({ value: signature.s });
    if (typeof signature.yParity === "number" && signature.yParity !== 0 && signature.yParity !== 1)
      throw new InvalidYParityError({ value: signature.yParity });
  }
  __name(assert5, "assert");
  function fromBytes3(signature) {
    return fromHex3(fromBytes(signature));
  }
  __name(fromBytes3, "fromBytes");
  function fromHex3(signature) {
    if (signature.length !== 130 && signature.length !== 132)
      throw new InvalidSerializedSizeError2({ signature });
    const r3 = BigInt(slice(signature, 0, 32));
    const s3 = BigInt(slice(signature, 32, 64));
    const yParity = (() => {
      const yParity2 = Number(`0x${signature.slice(130)}`);
      if (Number.isNaN(yParity2))
        return void 0;
      try {
        return vToYParity(yParity2);
      } catch {
        throw new InvalidYParityError({ value: yParity2 });
      }
    })();
    if (typeof yParity === "undefined")
      return {
        r: r3,
        s: s3
      };
    return {
      r: r3,
      s: s3,
      yParity
    };
  }
  __name(fromHex3, "fromHex");
  function extract(value) {
    if (typeof value.r === "undefined")
      return void 0;
    if (typeof value.s === "undefined")
      return void 0;
    return from5(value);
  }
  __name(extract, "extract");
  function from5(signature) {
    const signature_ = (() => {
      if (typeof signature === "string")
        return fromHex3(signature);
      if (signature instanceof Uint8Array)
        return fromBytes3(signature);
      if (typeof signature.r === "string")
        return fromRpc(signature);
      if (signature.v)
        return fromLegacy(signature);
      return {
        r: signature.r,
        s: signature.s,
        ...typeof signature.yParity !== "undefined" ? { yParity: signature.yParity } : {}
      };
    })();
    assert5(signature_);
    return signature_;
  }
  __name(from5, "from");
  function fromDerBytes(signature) {
    return fromDerHex(fromBytes(signature));
  }
  __name(fromDerBytes, "fromDerBytes");
  function fromDerHex(signature) {
    const { r: r3, s: s3 } = secp256k1.Signature.fromDER(from(signature).slice(2));
    return { r: r3, s: s3 };
  }
  __name(fromDerHex, "fromDerHex");
  function fromLegacy(signature) {
    return {
      r: signature.r,
      s: signature.s,
      yParity: vToYParity(signature.v)
    };
  }
  __name(fromLegacy, "fromLegacy");
  function fromRpc(signature) {
    const yParity = (() => {
      const v6 = signature.v ? Number(signature.v) : void 0;
      let yParity2 = signature.yParity ? Number(signature.yParity) : void 0;
      if (typeof v6 === "number" && typeof yParity2 !== "number")
        yParity2 = vToYParity(v6);
      if (typeof yParity2 !== "number")
        throw new InvalidYParityError({ value: signature.yParity });
      return yParity2;
    })();
    return {
      r: BigInt(signature.r),
      s: BigInt(signature.s),
      yParity
    };
  }
  __name(fromRpc, "fromRpc");
  function fromTuple(tuple) {
    const [yParity, r3, s3] = tuple;
    return from5({
      r: r3 === "0x" ? 0n : BigInt(r3),
      s: s3 === "0x" ? 0n : BigInt(s3),
      yParity: yParity === "0x" ? 0 : Number(yParity)
    });
  }
  __name(fromTuple, "fromTuple");
  function toBytes3(signature) {
    return fromHex(toHex2(signature));
  }
  __name(toBytes3, "toBytes");
  function toHex2(signature) {
    assert5(signature);
    const r3 = signature.r;
    const s3 = signature.s;
    const signature_ = concat(
      fromNumber(r3, { size: 32 }),
      fromNumber(s3, { size: 32 }),
      // If the signature is recovered, add the recovery byte to the signature.
      typeof signature.yParity === "number" ? fromNumber(yParityToV(signature.yParity), { size: 1 }) : "0x"
    );
    return signature_;
  }
  __name(toHex2, "toHex");
  function toDerBytes(signature) {
    const sig = new secp256k1.Signature(signature.r, signature.s);
    return sig.toDERRawBytes();
  }
  __name(toDerBytes, "toDerBytes");
  function toDerHex(signature) {
    const sig = new secp256k1.Signature(signature.r, signature.s);
    return `0x${sig.toDERHex()}`;
  }
  __name(toDerHex, "toDerHex");
  function toLegacy(signature) {
    return {
      r: signature.r,
      s: signature.s,
      v: yParityToV(signature.yParity)
    };
  }
  __name(toLegacy, "toLegacy");
  function toRpc(signature) {
    const { r: r3, s: s3, yParity } = signature;
    return {
      r: fromNumber(r3, { size: 32 }),
      s: fromNumber(s3, { size: 32 }),
      yParity: yParity === 0 ? "0x0" : "0x1"
    };
  }
  __name(toRpc, "toRpc");
  function toTuple(signature) {
    const { r: r3, s: s3, yParity } = signature;
    return [
      yParity ? "0x01" : "0x",
      r3 === 0n ? "0x" : trimLeft(fromNumber(r3)),
      s3 === 0n ? "0x" : trimLeft(fromNumber(s3))
    ];
  }
  __name(toTuple, "toTuple");
  function validate3(signature, options = {}) {
    try {
      assert5(signature, options);
      return true;
    } catch {
      return false;
    }
  }
  __name(validate3, "validate");
  function vToYParity(v6) {
    if (v6 === 0 || v6 === 27)
      return 0;
    if (v6 === 1 || v6 === 28)
      return 1;
    if (v6 >= 35)
      return v6 % 2 === 0 ? 1 : 0;
    throw new InvalidVError({ value: v6 });
  }
  __name(vToYParity, "vToYParity");
  function yParityToV(yParity) {
    if (yParity === 0)
      return 27;
    if (yParity === 1)
      return 28;
    throw new InvalidYParityError({ value: yParity });
  }
  __name(yParityToV, "yParityToV");
  var _InvalidSerializedSizeError2 = class _InvalidSerializedSizeError2 extends BaseError {
    constructor({ signature }) {
      super(`Value \`${signature}\` is an invalid signature size.`, {
        metaMessages: [
          "Expected: 64 bytes or 65 bytes.",
          `Received ${size2(from(signature))} bytes.`
        ]
      });
      Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Signature.InvalidSerializedSizeError"
      });
    }
  };
  __name(_InvalidSerializedSizeError2, "InvalidSerializedSizeError");
  var InvalidSerializedSizeError2 = _InvalidSerializedSizeError2;
  var _MissingPropertiesError = class _MissingPropertiesError extends BaseError {
    constructor({ signature }) {
      super(`Signature \`${stringify2(signature)}\` is missing either an \`r\`, \`s\`, or \`yParity\` property.`);
      Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Signature.MissingPropertiesError"
      });
    }
  };
  __name(_MissingPropertiesError, "MissingPropertiesError");
  var MissingPropertiesError = _MissingPropertiesError;
  var _InvalidRError = class _InvalidRError extends BaseError {
    constructor({ value }) {
      super(`Value \`${value}\` is an invalid r value. r must be a positive integer less than 2^256.`);
      Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Signature.InvalidRError"
      });
    }
  };
  __name(_InvalidRError, "InvalidRError");
  var InvalidRError = _InvalidRError;
  var _InvalidSError = class _InvalidSError extends BaseError {
    constructor({ value }) {
      super(`Value \`${value}\` is an invalid s value. s must be a positive integer less than 2^256.`);
      Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Signature.InvalidSError"
      });
    }
  };
  __name(_InvalidSError, "InvalidSError");
  var InvalidSError = _InvalidSError;
  var _InvalidYParityError = class _InvalidYParityError extends BaseError {
    constructor({ value }) {
      super(`Value \`${value}\` is an invalid y-parity value. Y-parity must be 0 or 1.`);
      Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Signature.InvalidYParityError"
      });
    }
  };
  __name(_InvalidYParityError, "InvalidYParityError");
  var InvalidYParityError = _InvalidYParityError;
  var _InvalidVError = class _InvalidVError extends BaseError {
    constructor({ value }) {
      super(`Value \`${value}\` is an invalid v value. v must be 27, 28 or >=35.`);
      Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: "Signature.InvalidVError"
      });
    }
  };
  __name(_InvalidVError, "InvalidVError");
  var InvalidVError = _InvalidVError;

  // node_modules/@scure/base/lib/esm/index.js
  init_shims();
  function isBytes3(a4) {
    return a4 instanceof Uint8Array || ArrayBuffer.isView(a4) && a4.constructor.name === "Uint8Array";
  }
  __name(isBytes3, "isBytes");
  function isArrayOf(isString, arr) {
    if (!Array.isArray(arr))
      return false;
    if (arr.length === 0)
      return true;
    if (isString) {
      return arr.every((item) => typeof item === "string");
    } else {
      return arr.every((item) => Number.isSafeInteger(item));
    }
  }
  __name(isArrayOf, "isArrayOf");
  function astr(label, input) {
    if (typeof input !== "string")
      throw new Error(`${label}: string expected`);
    return true;
  }
  __name(astr, "astr");
  function anumber2(n5) {
    if (!Number.isSafeInteger(n5))
      throw new Error(`invalid integer: ${n5}`);
  }
  __name(anumber2, "anumber");
  function aArr(input) {
    if (!Array.isArray(input))
      throw new Error("array expected");
  }
  __name(aArr, "aArr");
  function astrArr(label, input) {
    if (!isArrayOf(true, input))
      throw new Error(`${label}: array of strings expected`);
  }
  __name(astrArr, "astrArr");
  function anumArr(label, input) {
    if (!isArrayOf(false, input))
      throw new Error(`${label}: array of numbers expected`);
  }
  __name(anumArr, "anumArr");
  // @__NO_SIDE_EFFECTS__
  function chain(...args) {
    const id = /* @__PURE__ */ __name((a4) => a4, "id");
    const wrap = /* @__PURE__ */ __name((a4, b6) => (c6) => a4(b6(c6)), "wrap");
    const encode6 = args.map((x6) => x6.encode).reduceRight(wrap, id);
    const decode7 = args.map((x6) => x6.decode).reduce(wrap, id);
    return { encode: encode6, decode: decode7 };
  }
  __name(chain, "chain");
  // @__NO_SIDE_EFFECTS__
  function alphabet(letters) {
    const lettersA = typeof letters === "string" ? letters.split("") : letters;
    const len = lettersA.length;
    astrArr("alphabet", lettersA);
    const indexes = new Map(lettersA.map((l7, i4) => [l7, i4]));
    return {
      encode: /* @__PURE__ */ __name((digits) => {
        aArr(digits);
        return digits.map((i4) => {
          if (!Number.isSafeInteger(i4) || i4 < 0 || i4 >= len)
            throw new Error(`alphabet.encode: digit index outside alphabet "${i4}". Allowed: ${letters}`);
          return lettersA[i4];
        });
      }, "encode"),
      decode: /* @__PURE__ */ __name((input) => {
        aArr(input);
        return input.map((letter) => {
          astr("alphabet.decode", letter);
          const i4 = indexes.get(letter);
          if (i4 === void 0)
            throw new Error(`Unknown letter: "${letter}". Allowed: ${letters}`);
          return i4;
        });
      }, "decode")
    };
  }
  __name(alphabet, "alphabet");
  // @__NO_SIDE_EFFECTS__
  function join(separator = "") {
    astr("join", separator);
    return {
      encode: /* @__PURE__ */ __name((from8) => {
        astrArr("join.decode", from8);
        return from8.join(separator);
      }, "encode"),
      decode: /* @__PURE__ */ __name((to4) => {
        astr("join.decode", to4);
        return to4.split(separator);
      }, "decode")
    };
  }
  __name(join, "join");
  // @__NO_SIDE_EFFECTS__
  function padding(bits, chr = "=") {
    anumber2(bits);
    astr("padding", chr);
    return {
      encode(data) {
        astrArr("padding.encode", data);
        while (data.length * bits % 8)
          data.push(chr);
        return data;
      },
      decode(input) {
        astrArr("padding.decode", input);
        let end = input.length;
        if (end * bits % 8)
          throw new Error("padding: invalid, string should have whole number of bytes");
        for (; end > 0 && input[end - 1] === chr; end--) {
          const last = end - 1;
          const byte = last * bits;
          if (byte % 8 === 0)
            throw new Error("padding: invalid, string has too much padding");
        }
        return input.slice(0, end);
      }
    };
  }
  __name(padding, "padding");
  var gcd = /* @__PURE__ */ __name((a4, b6) => b6 === 0 ? a4 : gcd(b6, a4 % b6), "gcd");
  var radix2carry = /* @__PURE__ */ __name(/* @__NO_SIDE_EFFECTS__ */ (from8, to4) => from8 + (to4 - gcd(from8, to4)), "radix2carry");
  var powers = /* @__PURE__ */ (() => {
    let res = [];
    for (let i4 = 0; i4 < 40; i4++)
      res.push(2 ** i4);
    return res;
  })();
  function convertRadix2(data, from8, to4, padding2) {
    aArr(data);
    if (from8 <= 0 || from8 > 32)
      throw new Error(`convertRadix2: wrong from=${from8}`);
    if (to4 <= 0 || to4 > 32)
      throw new Error(`convertRadix2: wrong to=${to4}`);
    if (/* @__PURE__ */ radix2carry(from8, to4) > 32) {
      throw new Error(`convertRadix2: carry overflow from=${from8} to=${to4} carryBits=${/* @__PURE__ */ radix2carry(from8, to4)}`);
    }
    let carry = 0;
    let pos = 0;
    const max = powers[from8];
    const mask = powers[to4] - 1;
    const res = [];
    for (const n5 of data) {
      anumber2(n5);
      if (n5 >= max)
        throw new Error(`convertRadix2: invalid data word=${n5} from=${from8}`);
      carry = carry << from8 | n5;
      if (pos + from8 > 32)
        throw new Error(`convertRadix2: carry overflow pos=${pos} from=${from8}`);
      pos += from8;
      for (; pos >= to4; pos -= to4)
        res.push((carry >> pos - to4 & mask) >>> 0);
      const pow = powers[pos];
      if (pow === void 0)
        throw new Error("invalid carry");
      carry &= pow - 1;
    }
    carry = carry << to4 - pos & mask;
    if (!padding2 && pos >= from8)
      throw new Error("Excess padding");
    if (!padding2 && carry > 0)
      throw new Error(`Non-zero padding: ${carry}`);
    if (padding2 && pos > 0)
      res.push(carry >>> 0);
    return res;
  }
  __name(convertRadix2, "convertRadix2");
  // @__NO_SIDE_EFFECTS__
  function radix2(bits, revPadding = false) {
    anumber2(bits);
    if (bits <= 0 || bits > 32)
      throw new Error("radix2: bits should be in (0..32]");
    if (/* @__PURE__ */ radix2carry(8, bits) > 32 || /* @__PURE__ */ radix2carry(bits, 8) > 32)
      throw new Error("radix2: carry overflow");
    return {
      encode: /* @__PURE__ */ __name((bytes) => {
        if (!isBytes3(bytes))
          throw new Error("radix2.encode input should be Uint8Array");
        return convertRadix2(Array.from(bytes), 8, bits, !revPadding);
      }, "encode"),
      decode: /* @__PURE__ */ __name((digits) => {
        anumArr("radix2.decode", digits);
        return Uint8Array.from(convertRadix2(digits, bits, 8, revPadding));
      }, "decode")
    };
  }
  __name(radix2, "radix2");
  var base32 = /* @__PURE__ */ chain(/* @__PURE__ */ radix2(5), /* @__PURE__ */ alphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"), /* @__PURE__ */ padding(5), /* @__PURE__ */ join(""));

  // node_modules/ox/_esm/core/Secp256k1.js
  var Secp256k1_exports = {};
  __export(Secp256k1_exports, {
    createKeyPair: () => createKeyPair,
    getPublicKey: () => getPublicKey,
    getSharedSecret: () => getSharedSecret,
    noble: () => noble,
    randomPrivateKey: () => randomPrivateKey,
    recoverAddress: () => recoverAddress,
    recoverPublicKey: () => recoverPublicKey,
    sign: () => sign,
    verify: () => verify
  });
  init_shims();

  // node_modules/ox/_esm/core/internal/entropy.js
  init_shims();
  var extraEntropy = false;

  // node_modules/ox/_esm/core/Secp256k1.js
  var noble = secp256k1;
  function createKeyPair(options = {}) {
    const { as: as2 = "Hex" } = options;
    const privateKey = randomPrivateKey({ as: as2 });
    const publicKey = getPublicKey({ privateKey });
    return {
      privateKey,
      publicKey
    };
  }
  __name(createKeyPair, "createKeyPair");
  function getPublicKey(options) {
    const { privateKey } = options;
    const point = secp256k1.ProjectivePoint.fromPrivateKey(from(privateKey).slice(2));
    return from3(point);
  }
  __name(getPublicKey, "getPublicKey");
  function getSharedSecret(options) {
    const { as: as2 = "Hex", privateKey, publicKey } = options;
    const point = secp256k1.ProjectivePoint.fromHex(toHex(publicKey).slice(2));
    const sharedPoint = point.multiply(secp256k1.utils.normPrivateKeyToScalar(from(privateKey).slice(2)));
    const sharedSecret = sharedPoint.toRawBytes(true);
    if (as2 === "Hex")
      return fromBytes(sharedSecret);
    return sharedSecret;
  }
  __name(getSharedSecret, "getSharedSecret");
  function randomPrivateKey(options = {}) {
    const { as: as2 = "Hex" } = options;
    const bytes = secp256k1.utils.randomPrivateKey();
    if (as2 === "Hex")
      return fromBytes(bytes);
    return bytes;
  }
  __name(randomPrivateKey, "randomPrivateKey");
  function recoverAddress(options) {
    return fromPublicKey(recoverPublicKey(options));
  }
  __name(recoverAddress, "recoverAddress");
  function recoverPublicKey(options) {
    const { payload, signature } = options;
    const { r: r3, s: s3, yParity } = signature;
    const signature_ = new secp256k1.Signature(BigInt(r3), BigInt(s3)).addRecoveryBit(yParity);
    const point = signature_.recoverPublicKey(from(payload).substring(2));
    return from3(point);
  }
  __name(recoverPublicKey, "recoverPublicKey");
  function sign(options) {
    const { extraEntropy: extraEntropy2 = extraEntropy, hash, payload, privateKey } = options;
    const { r: r3, s: s3, recovery } = secp256k1.sign(from2(payload), from2(privateKey), {
      extraEntropy: typeof extraEntropy2 === "boolean" ? extraEntropy2 : from(extraEntropy2).slice(2),
      lowS: true,
      ...hash ? { prehash: true } : {}
    });
    return {
      r: r3,
      s: s3,
      yParity: recovery
    };
  }
  __name(sign, "sign");
  function verify(options) {
    const { address, hash, payload, publicKey, signature } = options;
    if (address)
      return isEqual(address, recoverAddress({ payload, signature }));
    return secp256k1.verify(signature, from2(payload), toBytes2(publicKey), ...hash ? [{ prehash: true, lowS: true }] : []);
  }
  __name(verify, "verify");

  // node_modules/bs58/src/esm/index.js
  init_shims();

  // node_modules/base-x/src/esm/index.js
  init_shims();
  function base(ALPHABET2) {
    if (ALPHABET2.length >= 255) {
      throw new TypeError("Alphabet too long");
    }
    const BASE_MAP = new Uint8Array(256);
    for (let j7 = 0; j7 < BASE_MAP.length; j7++) {
      BASE_MAP[j7] = 255;
    }
    for (let i4 = 0; i4 < ALPHABET2.length; i4++) {
      const x6 = ALPHABET2.charAt(i4);
      const xc2 = x6.charCodeAt(0);
      if (BASE_MAP[xc2] !== 255) {
        throw new TypeError(x6 + " is ambiguous");
      }
      BASE_MAP[xc2] = i4;
    }
    const BASE = ALPHABET2.length;
    const LEADER = ALPHABET2.charAt(0);
    const FACTOR = Math.log(BASE) / Math.log(256);
    const iFACTOR = Math.log(256) / Math.log(BASE);
    function encode6(source) {
      if (source instanceof Uint8Array) {
      } else if (ArrayBuffer.isView(source)) {
        source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
      } else if (Array.isArray(source)) {
        source = Uint8Array.from(source);
      }
      if (!(source instanceof Uint8Array)) {
        throw new TypeError("Expected Uint8Array");
      }
      if (source.length === 0) {
        return "";
      }
      let zeroes = 0;
      let length2 = 0;
      let pbegin = 0;
      const pend = source.length;
      while (pbegin !== pend && source[pbegin] === 0) {
        pbegin++;
        zeroes++;
      }
      const size3 = (pend - pbegin) * iFACTOR + 1 >>> 0;
      const b58 = new Uint8Array(size3);
      while (pbegin !== pend) {
        let carry = source[pbegin];
        let i4 = 0;
        for (let it1 = size3 - 1; (carry !== 0 || i4 < length2) && it1 !== -1; it1--, i4++) {
          carry += 256 * b58[it1] >>> 0;
          b58[it1] = carry % BASE >>> 0;
          carry = carry / BASE >>> 0;
        }
        if (carry !== 0) {
          throw new Error("Non-zero carry");
        }
        length2 = i4;
        pbegin++;
      }
      let it22 = size3 - length2;
      while (it22 !== size3 && b58[it22] === 0) {
        it22++;
      }
      let str = LEADER.repeat(zeroes);
      for (; it22 < size3; ++it22) {
        str += ALPHABET2.charAt(b58[it22]);
      }
      return str;
    }
    __name(encode6, "encode");
    function decodeUnsafe(source) {
      if (typeof source !== "string") {
        throw new TypeError("Expected String");
      }
      if (source.length === 0) {
        return new Uint8Array();
      }
      let psz = 0;
      let zeroes = 0;
      let length2 = 0;
      while (source[psz] === LEADER) {
        zeroes++;
        psz++;
      }
      const size3 = (source.length - psz) * FACTOR + 1 >>> 0;
      const b256 = new Uint8Array(size3);
      while (psz < source.length) {
        const charCode = source.charCodeAt(psz);
        if (charCode > 255) {
          return;
        }
        let carry = BASE_MAP[charCode];
        if (carry === 255) {
          return;
        }
        let i4 = 0;
        for (let it3 = size3 - 1; (carry !== 0 || i4 < length2) && it3 !== -1; it3--, i4++) {
          carry += BASE * b256[it3] >>> 0;
          b256[it3] = carry % 256 >>> 0;
          carry = carry / 256 >>> 0;
        }
        if (carry !== 0) {
          throw new Error("Non-zero carry");
        }
        length2 = i4;
        psz++;
      }
      let it4 = size3 - length2;
      while (it4 !== size3 && b256[it4] === 0) {
        it4++;
      }
      const vch = new Uint8Array(zeroes + (size3 - it4));
      let j7 = zeroes;
      while (it4 !== size3) {
        vch[j7++] = b256[it4++];
      }
      return vch;
    }
    __name(decodeUnsafe, "decodeUnsafe");
    function decode7(string2) {
      const buffer = decodeUnsafe(string2);
      if (buffer) {
        return buffer;
      }
      throw new Error("Non-base" + BASE + " character");
    }
    __name(decode7, "decode");
    return {
      encode: encode6,
      decodeUnsafe,
      decode: decode7
    };
  }
  __name(base, "base");
  var esm_default = base;

  // node_modules/bs58/src/esm/index.js
  var ALPHABET = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
  var esm_default2 = esm_default(ALPHABET);

  // node_modules/@msgpack/msgpack/dist.esm/index.mjs
  init_shims();

  // node_modules/@msgpack/msgpack/dist.esm/encode.mjs
  init_shims();

  // node_modules/@msgpack/msgpack/dist.esm/Encoder.mjs
  init_shims();

  // node_modules/@msgpack/msgpack/dist.esm/utils/utf8.mjs
  init_shims();
  function utf8Count(str) {
    const strLength = str.length;
    let byteLength = 0;
    let pos = 0;
    while (pos < strLength) {
      let value = str.charCodeAt(pos++);
      if ((value & 4294967168) === 0) {
        byteLength++;
        continue;
      } else if ((value & 4294965248) === 0) {
        byteLength += 2;
      } else {
        if (value >= 55296 && value <= 56319) {
          if (pos < strLength) {
            const extra = str.charCodeAt(pos);
            if ((extra & 64512) === 56320) {
              ++pos;
              value = ((value & 1023) << 10) + (extra & 1023) + 65536;
            }
          }
        }
        if ((value & 4294901760) === 0) {
          byteLength += 3;
        } else {
          byteLength += 4;
        }
      }
    }
    return byteLength;
  }
  __name(utf8Count, "utf8Count");
  function utf8EncodeJs(str, output, outputOffset) {
    const strLength = str.length;
    let offset = outputOffset;
    let pos = 0;
    while (pos < strLength) {
      let value = str.charCodeAt(pos++);
      if ((value & 4294967168) === 0) {
        output[offset++] = value;
        continue;
      } else if ((value & 4294965248) === 0) {
        output[offset++] = value >> 6 & 31 | 192;
      } else {
        if (value >= 55296 && value <= 56319) {
          if (pos < strLength) {
            const extra = str.charCodeAt(pos);
            if ((extra & 64512) === 56320) {
              ++pos;
              value = ((value & 1023) << 10) + (extra & 1023) + 65536;
            }
          }
        }
        if ((value & 4294901760) === 0) {
          output[offset++] = value >> 12 & 15 | 224;
          output[offset++] = value >> 6 & 63 | 128;
        } else {
          output[offset++] = value >> 18 & 7 | 240;
          output[offset++] = value >> 12 & 63 | 128;
          output[offset++] = value >> 6 & 63 | 128;
        }
      }
      output[offset++] = value & 63 | 128;
    }
  }
  __name(utf8EncodeJs, "utf8EncodeJs");
  var sharedTextEncoder = new TextEncoder();
  var TEXT_ENCODER_THRESHOLD = 50;
  function utf8EncodeTE(str, output, outputOffset) {
    sharedTextEncoder.encodeInto(str, output.subarray(outputOffset));
  }
  __name(utf8EncodeTE, "utf8EncodeTE");
  function utf8Encode(str, output, outputOffset) {
    if (str.length > TEXT_ENCODER_THRESHOLD) {
      utf8EncodeTE(str, output, outputOffset);
    } else {
      utf8EncodeJs(str, output, outputOffset);
    }
  }
  __name(utf8Encode, "utf8Encode");
  var CHUNK_SIZE = 4096;
  function utf8DecodeJs(bytes, inputOffset, byteLength) {
    let offset = inputOffset;
    const end = offset + byteLength;
    const units = [];
    let result = "";
    while (offset < end) {
      const byte1 = bytes[offset++];
      if ((byte1 & 128) === 0) {
        units.push(byte1);
      } else if ((byte1 & 224) === 192) {
        const byte2 = bytes[offset++] & 63;
        units.push((byte1 & 31) << 6 | byte2);
      } else if ((byte1 & 240) === 224) {
        const byte2 = bytes[offset++] & 63;
        const byte3 = bytes[offset++] & 63;
        units.push((byte1 & 31) << 12 | byte2 << 6 | byte3);
      } else if ((byte1 & 248) === 240) {
        const byte2 = bytes[offset++] & 63;
        const byte3 = bytes[offset++] & 63;
        const byte4 = bytes[offset++] & 63;
        let unit = (byte1 & 7) << 18 | byte2 << 12 | byte3 << 6 | byte4;
        if (unit > 65535) {
          unit -= 65536;
          units.push(unit >>> 10 & 1023 | 55296);
          unit = 56320 | unit & 1023;
        }
        units.push(unit);
      } else {
        units.push(byte1);
      }
      if (units.length >= CHUNK_SIZE) {
        result += String.fromCharCode(...units);
        units.length = 0;
      }
    }
    if (units.length > 0) {
      result += String.fromCharCode(...units);
    }
    return result;
  }
  __name(utf8DecodeJs, "utf8DecodeJs");
  var sharedTextDecoder = new TextDecoder();
  var TEXT_DECODER_THRESHOLD = 200;
  function utf8DecodeTD(bytes, inputOffset, byteLength) {
    const stringBytes = bytes.subarray(inputOffset, inputOffset + byteLength);
    return sharedTextDecoder.decode(stringBytes);
  }
  __name(utf8DecodeTD, "utf8DecodeTD");
  function utf8Decode(bytes, inputOffset, byteLength) {
    if (byteLength > TEXT_DECODER_THRESHOLD) {
      return utf8DecodeTD(bytes, inputOffset, byteLength);
    } else {
      return utf8DecodeJs(bytes, inputOffset, byteLength);
    }
  }
  __name(utf8Decode, "utf8Decode");

  // node_modules/@msgpack/msgpack/dist.esm/ExtensionCodec.mjs
  init_shims();

  // node_modules/@msgpack/msgpack/dist.esm/ExtData.mjs
  init_shims();
  var _ExtData = class _ExtData {
    constructor(type, data) {
      this.type = type;
      this.data = data;
    }
  };
  __name(_ExtData, "ExtData");
  var ExtData = _ExtData;

  // node_modules/@msgpack/msgpack/dist.esm/timestamp.mjs
  init_shims();

  // node_modules/@msgpack/msgpack/dist.esm/DecodeError.mjs
  init_shims();
  var _DecodeError = class _DecodeError extends Error {
    constructor(message) {
      super(message);
      const proto = Object.create(_DecodeError.prototype);
      Object.setPrototypeOf(this, proto);
      Object.defineProperty(this, "name", {
        configurable: true,
        enumerable: false,
        value: _DecodeError.name
      });
    }
  };
  __name(_DecodeError, "DecodeError");
  var DecodeError = _DecodeError;

  // node_modules/@msgpack/msgpack/dist.esm/utils/int.mjs
  init_shims();
  var UINT32_MAX = 4294967295;
  function setUint64(view, offset, value) {
    const high = value / 4294967296;
    const low = value;
    view.setUint32(offset, high);
    view.setUint32(offset + 4, low);
  }
  __name(setUint64, "setUint64");
  function setInt64(view, offset, value) {
    const high = Math.floor(value / 4294967296);
    const low = value;
    view.setUint32(offset, high);
    view.setUint32(offset + 4, low);
  }
  __name(setInt64, "setInt64");
  function getInt64(view, offset) {
    const high = view.getInt32(offset);
    const low = view.getUint32(offset + 4);
    return high * 4294967296 + low;
  }
  __name(getInt64, "getInt64");
  function getUint64(view, offset) {
    const high = view.getUint32(offset);
    const low = view.getUint32(offset + 4);
    return high * 4294967296 + low;
  }
  __name(getUint64, "getUint64");

  // node_modules/@msgpack/msgpack/dist.esm/timestamp.mjs
  var EXT_TIMESTAMP = -1;
  var TIMESTAMP32_MAX_SEC = 4294967296 - 1;
  var TIMESTAMP64_MAX_SEC = 17179869184 - 1;
  function encodeTimeSpecToTimestamp({ sec, nsec }) {
    if (sec >= 0 && nsec >= 0 && sec <= TIMESTAMP64_MAX_SEC) {
      if (nsec === 0 && sec <= TIMESTAMP32_MAX_SEC) {
        const rv = new Uint8Array(4);
        const view = new DataView(rv.buffer);
        view.setUint32(0, sec);
        return rv;
      } else {
        const secHigh = sec / 4294967296;
        const secLow = sec & 4294967295;
        const rv = new Uint8Array(8);
        const view = new DataView(rv.buffer);
        view.setUint32(0, nsec << 2 | secHigh & 3);
        view.setUint32(4, secLow);
        return rv;
      }
    } else {
      const rv = new Uint8Array(12);
      const view = new DataView(rv.buffer);
      view.setUint32(0, nsec);
      setInt64(view, 4, sec);
      return rv;
    }
  }
  __name(encodeTimeSpecToTimestamp, "encodeTimeSpecToTimestamp");
  function encodeDateToTimeSpec(date) {
    const msec = date.getTime();
    const sec = Math.floor(msec / 1e3);
    const nsec = (msec - sec * 1e3) * 1e6;
    const nsecInSec = Math.floor(nsec / 1e9);
    return {
      sec: sec + nsecInSec,
      nsec: nsec - nsecInSec * 1e9
    };
  }
  __name(encodeDateToTimeSpec, "encodeDateToTimeSpec");
  function encodeTimestampExtension(object) {
    if (object instanceof Date) {
      const timeSpec = encodeDateToTimeSpec(object);
      return encodeTimeSpecToTimestamp(timeSpec);
    } else {
      return null;
    }
  }
  __name(encodeTimestampExtension, "encodeTimestampExtension");
  function decodeTimestampToTimeSpec(data) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);
    switch (data.byteLength) {
      case 4: {
        const sec = view.getUint32(0);
        const nsec = 0;
        return { sec, nsec };
      }
      case 8: {
        const nsec30AndSecHigh2 = view.getUint32(0);
        const secLow32 = view.getUint32(4);
        const sec = (nsec30AndSecHigh2 & 3) * 4294967296 + secLow32;
        const nsec = nsec30AndSecHigh2 >>> 2;
        return { sec, nsec };
      }
      case 12: {
        const sec = getInt64(view, 4);
        const nsec = view.getUint32(0);
        return { sec, nsec };
      }
      default:
        throw new DecodeError(`Unrecognized data size for timestamp (expected 4, 8, or 12): ${data.length}`);
    }
  }
  __name(decodeTimestampToTimeSpec, "decodeTimestampToTimeSpec");
  function decodeTimestampExtension(data) {
    const timeSpec = decodeTimestampToTimeSpec(data);
    return new Date(timeSpec.sec * 1e3 + timeSpec.nsec / 1e6);
  }
  __name(decodeTimestampExtension, "decodeTimestampExtension");
  var timestampExtension = {
    type: EXT_TIMESTAMP,
    encode: encodeTimestampExtension,
    decode: decodeTimestampExtension
  };

  // node_modules/@msgpack/msgpack/dist.esm/ExtensionCodec.mjs
  var _ExtensionCodec = class _ExtensionCodec {
    constructor() {
      this.builtInEncoders = [];
      this.builtInDecoders = [];
      this.encoders = [];
      this.decoders = [];
      this.register(timestampExtension);
    }
    register({ type, encode: encode6, decode: decode7 }) {
      if (type >= 0) {
        this.encoders[type] = encode6;
        this.decoders[type] = decode7;
      } else {
        const index = -1 - type;
        this.builtInEncoders[index] = encode6;
        this.builtInDecoders[index] = decode7;
      }
    }
    tryToEncode(object, context) {
      for (let i4 = 0; i4 < this.builtInEncoders.length; i4++) {
        const encodeExt = this.builtInEncoders[i4];
        if (encodeExt != null) {
          const data = encodeExt(object, context);
          if (data != null) {
            const type = -1 - i4;
            return new ExtData(type, data);
          }
        }
      }
      for (let i4 = 0; i4 < this.encoders.length; i4++) {
        const encodeExt = this.encoders[i4];
        if (encodeExt != null) {
          const data = encodeExt(object, context);
          if (data != null) {
            const type = i4;
            return new ExtData(type, data);
          }
        }
      }
      if (object instanceof ExtData) {
        return object;
      }
      return null;
    }
    decode(data, type, context) {
      const decodeExt = type < 0 ? this.builtInDecoders[-1 - type] : this.decoders[type];
      if (decodeExt) {
        return decodeExt(data, type, context);
      } else {
        return new ExtData(type, data);
      }
    }
  };
  __name(_ExtensionCodec, "ExtensionCodec");
  var ExtensionCodec = _ExtensionCodec;
  ExtensionCodec.defaultCodec = new ExtensionCodec();

  // node_modules/@msgpack/msgpack/dist.esm/utils/typedArrays.mjs
  init_shims();
  function isArrayBufferLike(buffer) {
    return buffer instanceof ArrayBuffer || typeof SharedArrayBuffer !== "undefined" && buffer instanceof SharedArrayBuffer;
  }
  __name(isArrayBufferLike, "isArrayBufferLike");
  function ensureUint8Array(buffer) {
    if (buffer instanceof Uint8Array) {
      return buffer;
    } else if (ArrayBuffer.isView(buffer)) {
      return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
    } else if (isArrayBufferLike(buffer)) {
      return new Uint8Array(buffer);
    } else {
      return Uint8Array.from(buffer);
    }
  }
  __name(ensureUint8Array, "ensureUint8Array");

  // node_modules/@msgpack/msgpack/dist.esm/Encoder.mjs
  var DEFAULT_MAX_DEPTH = 100;
  var DEFAULT_INITIAL_BUFFER_SIZE = 2048;
  var _Encoder = class _Encoder {
    constructor(options) {
      this.entered = false;
      this.extensionCodec = options?.extensionCodec ?? ExtensionCodec.defaultCodec;
      this.context = options?.context;
      this.useBigInt64 = options?.useBigInt64 ?? false;
      this.maxDepth = options?.maxDepth ?? DEFAULT_MAX_DEPTH;
      this.initialBufferSize = options?.initialBufferSize ?? DEFAULT_INITIAL_BUFFER_SIZE;
      this.sortKeys = options?.sortKeys ?? false;
      this.forceFloat32 = options?.forceFloat32 ?? false;
      this.ignoreUndefined = options?.ignoreUndefined ?? false;
      this.forceIntegerToFloat = options?.forceIntegerToFloat ?? false;
      this.pos = 0;
      this.view = new DataView(new ArrayBuffer(this.initialBufferSize));
      this.bytes = new Uint8Array(this.view.buffer);
    }
    clone() {
      return new _Encoder({
        extensionCodec: this.extensionCodec,
        context: this.context,
        useBigInt64: this.useBigInt64,
        maxDepth: this.maxDepth,
        initialBufferSize: this.initialBufferSize,
        sortKeys: this.sortKeys,
        forceFloat32: this.forceFloat32,
        ignoreUndefined: this.ignoreUndefined,
        forceIntegerToFloat: this.forceIntegerToFloat
      });
    }
    reinitializeState() {
      this.pos = 0;
    }
    /**
     * This is almost equivalent to {@link Encoder#encode}, but it returns an reference of the encoder's internal buffer and thus much faster than {@link Encoder#encode}.
     *
     * @returns Encodes the object and returns a shared reference the encoder's internal buffer.
     */
    encodeSharedRef(object) {
      if (this.entered) {
        const instance = this.clone();
        return instance.encodeSharedRef(object);
      }
      try {
        this.entered = true;
        this.reinitializeState();
        this.doEncode(object, 1);
        return this.bytes.subarray(0, this.pos);
      } finally {
        this.entered = false;
      }
    }
    /**
     * @returns Encodes the object and returns a copy of the encoder's internal buffer.
     */
    encode(object) {
      if (this.entered) {
        const instance = this.clone();
        return instance.encode(object);
      }
      try {
        this.entered = true;
        this.reinitializeState();
        this.doEncode(object, 1);
        return this.bytes.slice(0, this.pos);
      } finally {
        this.entered = false;
      }
    }
    doEncode(object, depth) {
      if (depth > this.maxDepth) {
        throw new Error(`Too deep objects in depth ${depth}`);
      }
      if (object == null) {
        this.encodeNil();
      } else if (typeof object === "boolean") {
        this.encodeBoolean(object);
      } else if (typeof object === "number") {
        if (!this.forceIntegerToFloat) {
          this.encodeNumber(object);
        } else {
          this.encodeNumberAsFloat(object);
        }
      } else if (typeof object === "string") {
        this.encodeString(object);
      } else if (this.useBigInt64 && typeof object === "bigint") {
        this.encodeBigInt64(object);
      } else {
        this.encodeObject(object, depth);
      }
    }
    ensureBufferSizeToWrite(sizeToWrite) {
      const requiredSize = this.pos + sizeToWrite;
      if (this.view.byteLength < requiredSize) {
        this.resizeBuffer(requiredSize * 2);
      }
    }
    resizeBuffer(newSize) {
      const newBuffer = new ArrayBuffer(newSize);
      const newBytes = new Uint8Array(newBuffer);
      const newView = new DataView(newBuffer);
      newBytes.set(this.bytes);
      this.view = newView;
      this.bytes = newBytes;
    }
    encodeNil() {
      this.writeU8(192);
    }
    encodeBoolean(object) {
      if (object === false) {
        this.writeU8(194);
      } else {
        this.writeU8(195);
      }
    }
    encodeNumber(object) {
      if (!this.forceIntegerToFloat && Number.isSafeInteger(object)) {
        if (object >= 0) {
          if (object < 128) {
            this.writeU8(object);
          } else if (object < 256) {
            this.writeU8(204);
            this.writeU8(object);
          } else if (object < 65536) {
            this.writeU8(205);
            this.writeU16(object);
          } else if (object < 4294967296) {
            this.writeU8(206);
            this.writeU32(object);
          } else if (!this.useBigInt64) {
            this.writeU8(207);
            this.writeU64(object);
          } else {
            this.encodeNumberAsFloat(object);
          }
        } else {
          if (object >= -32) {
            this.writeU8(224 | object + 32);
          } else if (object >= -128) {
            this.writeU8(208);
            this.writeI8(object);
          } else if (object >= -32768) {
            this.writeU8(209);
            this.writeI16(object);
          } else if (object >= -2147483648) {
            this.writeU8(210);
            this.writeI32(object);
          } else if (!this.useBigInt64) {
            this.writeU8(211);
            this.writeI64(object);
          } else {
            this.encodeNumberAsFloat(object);
          }
        }
      } else {
        this.encodeNumberAsFloat(object);
      }
    }
    encodeNumberAsFloat(object) {
      if (this.forceFloat32) {
        this.writeU8(202);
        this.writeF32(object);
      } else {
        this.writeU8(203);
        this.writeF64(object);
      }
    }
    encodeBigInt64(object) {
      if (object >= BigInt(0)) {
        this.writeU8(207);
        this.writeBigUint64(object);
      } else {
        this.writeU8(211);
        this.writeBigInt64(object);
      }
    }
    writeStringHeader(byteLength) {
      if (byteLength < 32) {
        this.writeU8(160 + byteLength);
      } else if (byteLength < 256) {
        this.writeU8(217);
        this.writeU8(byteLength);
      } else if (byteLength < 65536) {
        this.writeU8(218);
        this.writeU16(byteLength);
      } else if (byteLength < 4294967296) {
        this.writeU8(219);
        this.writeU32(byteLength);
      } else {
        throw new Error(`Too long string: ${byteLength} bytes in UTF-8`);
      }
    }
    encodeString(object) {
      const maxHeaderSize = 1 + 4;
      const byteLength = utf8Count(object);
      this.ensureBufferSizeToWrite(maxHeaderSize + byteLength);
      this.writeStringHeader(byteLength);
      utf8Encode(object, this.bytes, this.pos);
      this.pos += byteLength;
    }
    encodeObject(object, depth) {
      const ext = this.extensionCodec.tryToEncode(object, this.context);
      if (ext != null) {
        this.encodeExtension(ext);
      } else if (Array.isArray(object)) {
        this.encodeArray(object, depth);
      } else if (ArrayBuffer.isView(object)) {
        this.encodeBinary(object);
      } else if (typeof object === "object") {
        this.encodeMap(object, depth);
      } else {
        throw new Error(`Unrecognized object: ${Object.prototype.toString.apply(object)}`);
      }
    }
    encodeBinary(object) {
      const size3 = object.byteLength;
      if (size3 < 256) {
        this.writeU8(196);
        this.writeU8(size3);
      } else if (size3 < 65536) {
        this.writeU8(197);
        this.writeU16(size3);
      } else if (size3 < 4294967296) {
        this.writeU8(198);
        this.writeU32(size3);
      } else {
        throw new Error(`Too large binary: ${size3}`);
      }
      const bytes = ensureUint8Array(object);
      this.writeU8a(bytes);
    }
    encodeArray(object, depth) {
      const size3 = object.length;
      if (size3 < 16) {
        this.writeU8(144 + size3);
      } else if (size3 < 65536) {
        this.writeU8(220);
        this.writeU16(size3);
      } else if (size3 < 4294967296) {
        this.writeU8(221);
        this.writeU32(size3);
      } else {
        throw new Error(`Too large array: ${size3}`);
      }
      for (const item of object) {
        this.doEncode(item, depth + 1);
      }
    }
    countWithoutUndefined(object, keys2) {
      let count = 0;
      for (const key of keys2) {
        if (object[key] !== void 0) {
          count++;
        }
      }
      return count;
    }
    encodeMap(object, depth) {
      const keys2 = Object.keys(object);
      if (this.sortKeys) {
        keys2.sort();
      }
      const size3 = this.ignoreUndefined ? this.countWithoutUndefined(object, keys2) : keys2.length;
      if (size3 < 16) {
        this.writeU8(128 + size3);
      } else if (size3 < 65536) {
        this.writeU8(222);
        this.writeU16(size3);
      } else if (size3 < 4294967296) {
        this.writeU8(223);
        this.writeU32(size3);
      } else {
        throw new Error(`Too large map object: ${size3}`);
      }
      for (const key of keys2) {
        const value = object[key];
        if (!(this.ignoreUndefined && value === void 0)) {
          this.encodeString(key);
          this.doEncode(value, depth + 1);
        }
      }
    }
    encodeExtension(ext) {
      if (typeof ext.data === "function") {
        const data = ext.data(this.pos + 6);
        const size4 = data.length;
        if (size4 >= 4294967296) {
          throw new Error(`Too large extension object: ${size4}`);
        }
        this.writeU8(201);
        this.writeU32(size4);
        this.writeI8(ext.type);
        this.writeU8a(data);
        return;
      }
      const size3 = ext.data.length;
      if (size3 === 1) {
        this.writeU8(212);
      } else if (size3 === 2) {
        this.writeU8(213);
      } else if (size3 === 4) {
        this.writeU8(214);
      } else if (size3 === 8) {
        this.writeU8(215);
      } else if (size3 === 16) {
        this.writeU8(216);
      } else if (size3 < 256) {
        this.writeU8(199);
        this.writeU8(size3);
      } else if (size3 < 65536) {
        this.writeU8(200);
        this.writeU16(size3);
      } else if (size3 < 4294967296) {
        this.writeU8(201);
        this.writeU32(size3);
      } else {
        throw new Error(`Too large extension object: ${size3}`);
      }
      this.writeI8(ext.type);
      this.writeU8a(ext.data);
    }
    writeU8(value) {
      this.ensureBufferSizeToWrite(1);
      this.view.setUint8(this.pos, value);
      this.pos++;
    }
    writeU8a(values) {
      const size3 = values.length;
      this.ensureBufferSizeToWrite(size3);
      this.bytes.set(values, this.pos);
      this.pos += size3;
    }
    writeI8(value) {
      this.ensureBufferSizeToWrite(1);
      this.view.setInt8(this.pos, value);
      this.pos++;
    }
    writeU16(value) {
      this.ensureBufferSizeToWrite(2);
      this.view.setUint16(this.pos, value);
      this.pos += 2;
    }
    writeI16(value) {
      this.ensureBufferSizeToWrite(2);
      this.view.setInt16(this.pos, value);
      this.pos += 2;
    }
    writeU32(value) {
      this.ensureBufferSizeToWrite(4);
      this.view.setUint32(this.pos, value);
      this.pos += 4;
    }
    writeI32(value) {
      this.ensureBufferSizeToWrite(4);
      this.view.setInt32(this.pos, value);
      this.pos += 4;
    }
    writeF32(value) {
      this.ensureBufferSizeToWrite(4);
      this.view.setFloat32(this.pos, value);
      this.pos += 4;
    }
    writeF64(value) {
      this.ensureBufferSizeToWrite(8);
      this.view.setFloat64(this.pos, value);
      this.pos += 8;
    }
    writeU64(value) {
      this.ensureBufferSizeToWrite(8);
      setUint64(this.view, this.pos, value);
      this.pos += 8;
    }
    writeI64(value) {
      this.ensureBufferSizeToWrite(8);
      setInt64(this.view, this.pos, value);
      this.pos += 8;
    }
    writeBigUint64(value) {
      this.ensureBufferSizeToWrite(8);
      this.view.setBigUint64(this.pos, value);
      this.pos += 8;
    }
    writeBigInt64(value) {
      this.ensureBufferSizeToWrite(8);
      this.view.setBigInt64(this.pos, value);
      this.pos += 8;
    }
  };
  __name(_Encoder, "Encoder");
  var Encoder = _Encoder;

  // node_modules/@msgpack/msgpack/dist.esm/encode.mjs
  function encode(value, options) {
    const encoder2 = new Encoder(options);
    return encoder2.encodeSharedRef(value);
  }
  __name(encode, "encode");

  // node_modules/@msgpack/msgpack/dist.esm/decode.mjs
  init_shims();

  // node_modules/@msgpack/msgpack/dist.esm/Decoder.mjs
  init_shims();

  // node_modules/@msgpack/msgpack/dist.esm/utils/prettyByte.mjs
  init_shims();
  function prettyByte(byte) {
    return `${byte < 0 ? "-" : ""}0x${Math.abs(byte).toString(16).padStart(2, "0")}`;
  }
  __name(prettyByte, "prettyByte");

  // node_modules/@msgpack/msgpack/dist.esm/CachedKeyDecoder.mjs
  init_shims();
  var DEFAULT_MAX_KEY_LENGTH = 16;
  var DEFAULT_MAX_LENGTH_PER_KEY = 16;
  var _CachedKeyDecoder = class _CachedKeyDecoder {
    constructor(maxKeyLength = DEFAULT_MAX_KEY_LENGTH, maxLengthPerKey = DEFAULT_MAX_LENGTH_PER_KEY) {
      this.hit = 0;
      this.miss = 0;
      this.maxKeyLength = maxKeyLength;
      this.maxLengthPerKey = maxLengthPerKey;
      this.caches = [];
      for (let i4 = 0; i4 < this.maxKeyLength; i4++) {
        this.caches.push([]);
      }
    }
    canBeCached(byteLength) {
      return byteLength > 0 && byteLength <= this.maxKeyLength;
    }
    find(bytes, inputOffset, byteLength) {
      const records = this.caches[byteLength - 1];
      FIND_CHUNK: for (const record of records) {
        const recordBytes = record.bytes;
        for (let j7 = 0; j7 < byteLength; j7++) {
          if (recordBytes[j7] !== bytes[inputOffset + j7]) {
            continue FIND_CHUNK;
          }
        }
        return record.str;
      }
      return null;
    }
    store(bytes, value) {
      const records = this.caches[bytes.length - 1];
      const record = { bytes, str: value };
      if (records.length >= this.maxLengthPerKey) {
        records[Math.random() * records.length | 0] = record;
      } else {
        records.push(record);
      }
    }
    decode(bytes, inputOffset, byteLength) {
      const cachedValue = this.find(bytes, inputOffset, byteLength);
      if (cachedValue != null) {
        this.hit++;
        return cachedValue;
      }
      this.miss++;
      const str = utf8DecodeJs(bytes, inputOffset, byteLength);
      const slicedCopyOfBytes = Uint8Array.prototype.slice.call(bytes, inputOffset, inputOffset + byteLength);
      this.store(slicedCopyOfBytes, str);
      return str;
    }
  };
  __name(_CachedKeyDecoder, "CachedKeyDecoder");
  var CachedKeyDecoder = _CachedKeyDecoder;

  // node_modules/@msgpack/msgpack/dist.esm/Decoder.mjs
  var STATE_ARRAY = "array";
  var STATE_MAP_KEY = "map_key";
  var STATE_MAP_VALUE = "map_value";
  var mapKeyConverter = /* @__PURE__ */ __name((key) => {
    if (typeof key === "string" || typeof key === "number") {
      return key;
    }
    throw new DecodeError("The type of key must be string or number but " + typeof key);
  }, "mapKeyConverter");
  var _StackPool = class _StackPool {
    constructor() {
      this.stack = [];
      this.stackHeadPosition = -1;
    }
    get length() {
      return this.stackHeadPosition + 1;
    }
    top() {
      return this.stack[this.stackHeadPosition];
    }
    pushArrayState(size3) {
      const state = this.getUninitializedStateFromPool();
      state.type = STATE_ARRAY;
      state.position = 0;
      state.size = size3;
      state.array = new Array(size3);
    }
    pushMapState(size3) {
      const state = this.getUninitializedStateFromPool();
      state.type = STATE_MAP_KEY;
      state.readCount = 0;
      state.size = size3;
      state.map = {};
    }
    getUninitializedStateFromPool() {
      this.stackHeadPosition++;
      if (this.stackHeadPosition === this.stack.length) {
        const partialState = {
          type: void 0,
          size: 0,
          array: void 0,
          position: 0,
          readCount: 0,
          map: void 0,
          key: null
        };
        this.stack.push(partialState);
      }
      return this.stack[this.stackHeadPosition];
    }
    release(state) {
      const topStackState = this.stack[this.stackHeadPosition];
      if (topStackState !== state) {
        throw new Error("Invalid stack state. Released state is not on top of the stack.");
      }
      if (state.type === STATE_ARRAY) {
        const partialState = state;
        partialState.size = 0;
        partialState.array = void 0;
        partialState.position = 0;
        partialState.type = void 0;
      }
      if (state.type === STATE_MAP_KEY || state.type === STATE_MAP_VALUE) {
        const partialState = state;
        partialState.size = 0;
        partialState.map = void 0;
        partialState.readCount = 0;
        partialState.type = void 0;
      }
      this.stackHeadPosition--;
    }
    reset() {
      this.stack.length = 0;
      this.stackHeadPosition = -1;
    }
  };
  __name(_StackPool, "StackPool");
  var StackPool = _StackPool;
  var HEAD_BYTE_REQUIRED = -1;
  var EMPTY_VIEW = new DataView(new ArrayBuffer(0));
  var EMPTY_BYTES = new Uint8Array(EMPTY_VIEW.buffer);
  try {
    EMPTY_VIEW.getInt8(0);
  } catch (e2) {
    if (!(e2 instanceof RangeError)) {
      throw new Error("This module is not supported in the current JavaScript engine because DataView does not throw RangeError on out-of-bounds access");
    }
  }
  var MORE_DATA = new RangeError("Insufficient data");
  var sharedCachedKeyDecoder = new CachedKeyDecoder();
  var _Decoder = class _Decoder {
    constructor(options) {
      this.totalPos = 0;
      this.pos = 0;
      this.view = EMPTY_VIEW;
      this.bytes = EMPTY_BYTES;
      this.headByte = HEAD_BYTE_REQUIRED;
      this.stack = new StackPool();
      this.entered = false;
      this.extensionCodec = options?.extensionCodec ?? ExtensionCodec.defaultCodec;
      this.context = options?.context;
      this.useBigInt64 = options?.useBigInt64 ?? false;
      this.rawStrings = options?.rawStrings ?? false;
      this.maxStrLength = options?.maxStrLength ?? UINT32_MAX;
      this.maxBinLength = options?.maxBinLength ?? UINT32_MAX;
      this.maxArrayLength = options?.maxArrayLength ?? UINT32_MAX;
      this.maxMapLength = options?.maxMapLength ?? UINT32_MAX;
      this.maxExtLength = options?.maxExtLength ?? UINT32_MAX;
      this.keyDecoder = options?.keyDecoder !== void 0 ? options.keyDecoder : sharedCachedKeyDecoder;
      this.mapKeyConverter = options?.mapKeyConverter ?? mapKeyConverter;
    }
    clone() {
      return new _Decoder({
        extensionCodec: this.extensionCodec,
        context: this.context,
        useBigInt64: this.useBigInt64,
        rawStrings: this.rawStrings,
        maxStrLength: this.maxStrLength,
        maxBinLength: this.maxBinLength,
        maxArrayLength: this.maxArrayLength,
        maxMapLength: this.maxMapLength,
        maxExtLength: this.maxExtLength,
        keyDecoder: this.keyDecoder
      });
    }
    reinitializeState() {
      this.totalPos = 0;
      this.headByte = HEAD_BYTE_REQUIRED;
      this.stack.reset();
    }
    setBuffer(buffer) {
      const bytes = ensureUint8Array(buffer);
      this.bytes = bytes;
      this.view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
      this.pos = 0;
    }
    appendBuffer(buffer) {
      if (this.headByte === HEAD_BYTE_REQUIRED && !this.hasRemaining(1)) {
        this.setBuffer(buffer);
      } else {
        const remainingData = this.bytes.subarray(this.pos);
        const newData = ensureUint8Array(buffer);
        const newBuffer = new Uint8Array(remainingData.length + newData.length);
        newBuffer.set(remainingData);
        newBuffer.set(newData, remainingData.length);
        this.setBuffer(newBuffer);
      }
    }
    hasRemaining(size3) {
      return this.view.byteLength - this.pos >= size3;
    }
    createExtraByteError(posToShow) {
      const { view, pos } = this;
      return new RangeError(`Extra ${view.byteLength - pos} of ${view.byteLength} byte(s) found at buffer[${posToShow}]`);
    }
    /**
     * @throws {@link DecodeError}
     * @throws {@link RangeError}
     */
    decode(buffer) {
      if (this.entered) {
        const instance = this.clone();
        return instance.decode(buffer);
      }
      try {
        this.entered = true;
        this.reinitializeState();
        this.setBuffer(buffer);
        const object = this.doDecodeSync();
        if (this.hasRemaining(1)) {
          throw this.createExtraByteError(this.pos);
        }
        return object;
      } finally {
        this.entered = false;
      }
    }
    *decodeMulti(buffer) {
      if (this.entered) {
        const instance = this.clone();
        yield* instance.decodeMulti(buffer);
        return;
      }
      try {
        this.entered = true;
        this.reinitializeState();
        this.setBuffer(buffer);
        while (this.hasRemaining(1)) {
          yield this.doDecodeSync();
        }
      } finally {
        this.entered = false;
      }
    }
    async decodeAsync(stream) {
      if (this.entered) {
        const instance = this.clone();
        return instance.decodeAsync(stream);
      }
      try {
        this.entered = true;
        let decoded = false;
        let object;
        for await (const buffer of stream) {
          if (decoded) {
            this.entered = false;
            throw this.createExtraByteError(this.totalPos);
          }
          this.appendBuffer(buffer);
          try {
            object = this.doDecodeSync();
            decoded = true;
          } catch (e2) {
            if (!(e2 instanceof RangeError)) {
              throw e2;
            }
          }
          this.totalPos += this.pos;
        }
        if (decoded) {
          if (this.hasRemaining(1)) {
            throw this.createExtraByteError(this.totalPos);
          }
          return object;
        }
        const { headByte, pos, totalPos } = this;
        throw new RangeError(`Insufficient data in parsing ${prettyByte(headByte)} at ${totalPos} (${pos} in the current buffer)`);
      } finally {
        this.entered = false;
      }
    }
    decodeArrayStream(stream) {
      return this.decodeMultiAsync(stream, true);
    }
    decodeStream(stream) {
      return this.decodeMultiAsync(stream, false);
    }
    async *decodeMultiAsync(stream, isArray) {
      if (this.entered) {
        const instance = this.clone();
        yield* instance.decodeMultiAsync(stream, isArray);
        return;
      }
      try {
        this.entered = true;
        let isArrayHeaderRequired = isArray;
        let arrayItemsLeft = -1;
        for await (const buffer of stream) {
          if (isArray && arrayItemsLeft === 0) {
            throw this.createExtraByteError(this.totalPos);
          }
          this.appendBuffer(buffer);
          if (isArrayHeaderRequired) {
            arrayItemsLeft = this.readArraySize();
            isArrayHeaderRequired = false;
            this.complete();
          }
          try {
            while (true) {
              yield this.doDecodeSync();
              if (--arrayItemsLeft === 0) {
                break;
              }
            }
          } catch (e2) {
            if (!(e2 instanceof RangeError)) {
              throw e2;
            }
          }
          this.totalPos += this.pos;
        }
      } finally {
        this.entered = false;
      }
    }
    doDecodeSync() {
      DECODE: while (true) {
        const headByte = this.readHeadByte();
        let object;
        if (headByte >= 224) {
          object = headByte - 256;
        } else if (headByte < 192) {
          if (headByte < 128) {
            object = headByte;
          } else if (headByte < 144) {
            const size3 = headByte - 128;
            if (size3 !== 0) {
              this.pushMapState(size3);
              this.complete();
              continue DECODE;
            } else {
              object = {};
            }
          } else if (headByte < 160) {
            const size3 = headByte - 144;
            if (size3 !== 0) {
              this.pushArrayState(size3);
              this.complete();
              continue DECODE;
            } else {
              object = [];
            }
          } else {
            const byteLength = headByte - 160;
            object = this.decodeString(byteLength, 0);
          }
        } else if (headByte === 192) {
          object = null;
        } else if (headByte === 194) {
          object = false;
        } else if (headByte === 195) {
          object = true;
        } else if (headByte === 202) {
          object = this.readF32();
        } else if (headByte === 203) {
          object = this.readF64();
        } else if (headByte === 204) {
          object = this.readU8();
        } else if (headByte === 205) {
          object = this.readU16();
        } else if (headByte === 206) {
          object = this.readU32();
        } else if (headByte === 207) {
          if (this.useBigInt64) {
            object = this.readU64AsBigInt();
          } else {
            object = this.readU64();
          }
        } else if (headByte === 208) {
          object = this.readI8();
        } else if (headByte === 209) {
          object = this.readI16();
        } else if (headByte === 210) {
          object = this.readI32();
        } else if (headByte === 211) {
          if (this.useBigInt64) {
            object = this.readI64AsBigInt();
          } else {
            object = this.readI64();
          }
        } else if (headByte === 217) {
          const byteLength = this.lookU8();
          object = this.decodeString(byteLength, 1);
        } else if (headByte === 218) {
          const byteLength = this.lookU16();
          object = this.decodeString(byteLength, 2);
        } else if (headByte === 219) {
          const byteLength = this.lookU32();
          object = this.decodeString(byteLength, 4);
        } else if (headByte === 220) {
          const size3 = this.readU16();
          if (size3 !== 0) {
            this.pushArrayState(size3);
            this.complete();
            continue DECODE;
          } else {
            object = [];
          }
        } else if (headByte === 221) {
          const size3 = this.readU32();
          if (size3 !== 0) {
            this.pushArrayState(size3);
            this.complete();
            continue DECODE;
          } else {
            object = [];
          }
        } else if (headByte === 222) {
          const size3 = this.readU16();
          if (size3 !== 0) {
            this.pushMapState(size3);
            this.complete();
            continue DECODE;
          } else {
            object = {};
          }
        } else if (headByte === 223) {
          const size3 = this.readU32();
          if (size3 !== 0) {
            this.pushMapState(size3);
            this.complete();
            continue DECODE;
          } else {
            object = {};
          }
        } else if (headByte === 196) {
          const size3 = this.lookU8();
          object = this.decodeBinary(size3, 1);
        } else if (headByte === 197) {
          const size3 = this.lookU16();
          object = this.decodeBinary(size3, 2);
        } else if (headByte === 198) {
          const size3 = this.lookU32();
          object = this.decodeBinary(size3, 4);
        } else if (headByte === 212) {
          object = this.decodeExtension(1, 0);
        } else if (headByte === 213) {
          object = this.decodeExtension(2, 0);
        } else if (headByte === 214) {
          object = this.decodeExtension(4, 0);
        } else if (headByte === 215) {
          object = this.decodeExtension(8, 0);
        } else if (headByte === 216) {
          object = this.decodeExtension(16, 0);
        } else if (headByte === 199) {
          const size3 = this.lookU8();
          object = this.decodeExtension(size3, 1);
        } else if (headByte === 200) {
          const size3 = this.lookU16();
          object = this.decodeExtension(size3, 2);
        } else if (headByte === 201) {
          const size3 = this.lookU32();
          object = this.decodeExtension(size3, 4);
        } else {
          throw new DecodeError(`Unrecognized type byte: ${prettyByte(headByte)}`);
        }
        this.complete();
        const stack = this.stack;
        while (stack.length > 0) {
          const state = stack.top();
          if (state.type === STATE_ARRAY) {
            state.array[state.position] = object;
            state.position++;
            if (state.position === state.size) {
              object = state.array;
              stack.release(state);
            } else {
              continue DECODE;
            }
          } else if (state.type === STATE_MAP_KEY) {
            if (object === "__proto__") {
              throw new DecodeError("The key __proto__ is not allowed");
            }
            state.key = this.mapKeyConverter(object);
            state.type = STATE_MAP_VALUE;
            continue DECODE;
          } else {
            state.map[state.key] = object;
            state.readCount++;
            if (state.readCount === state.size) {
              object = state.map;
              stack.release(state);
            } else {
              state.key = null;
              state.type = STATE_MAP_KEY;
              continue DECODE;
            }
          }
        }
        return object;
      }
    }
    readHeadByte() {
      if (this.headByte === HEAD_BYTE_REQUIRED) {
        this.headByte = this.readU8();
      }
      return this.headByte;
    }
    complete() {
      this.headByte = HEAD_BYTE_REQUIRED;
    }
    readArraySize() {
      const headByte = this.readHeadByte();
      switch (headByte) {
        case 220:
          return this.readU16();
        case 221:
          return this.readU32();
        default: {
          if (headByte < 160) {
            return headByte - 144;
          } else {
            throw new DecodeError(`Unrecognized array type byte: ${prettyByte(headByte)}`);
          }
        }
      }
    }
    pushMapState(size3) {
      if (size3 > this.maxMapLength) {
        throw new DecodeError(`Max length exceeded: map length (${size3}) > maxMapLengthLength (${this.maxMapLength})`);
      }
      this.stack.pushMapState(size3);
    }
    pushArrayState(size3) {
      if (size3 > this.maxArrayLength) {
        throw new DecodeError(`Max length exceeded: array length (${size3}) > maxArrayLength (${this.maxArrayLength})`);
      }
      this.stack.pushArrayState(size3);
    }
    decodeString(byteLength, headerOffset) {
      if (!this.rawStrings || this.stateIsMapKey()) {
        return this.decodeUtf8String(byteLength, headerOffset);
      }
      return this.decodeBinary(byteLength, headerOffset);
    }
    /**
     * @throws {@link RangeError}
     */
    decodeUtf8String(byteLength, headerOffset) {
      if (byteLength > this.maxStrLength) {
        throw new DecodeError(`Max length exceeded: UTF-8 byte length (${byteLength}) > maxStrLength (${this.maxStrLength})`);
      }
      if (this.bytes.byteLength < this.pos + headerOffset + byteLength) {
        throw MORE_DATA;
      }
      const offset = this.pos + headerOffset;
      let object;
      if (this.stateIsMapKey() && this.keyDecoder?.canBeCached(byteLength)) {
        object = this.keyDecoder.decode(this.bytes, offset, byteLength);
      } else {
        object = utf8Decode(this.bytes, offset, byteLength);
      }
      this.pos += headerOffset + byteLength;
      return object;
    }
    stateIsMapKey() {
      if (this.stack.length > 0) {
        const state = this.stack.top();
        return state.type === STATE_MAP_KEY;
      }
      return false;
    }
    /**
     * @throws {@link RangeError}
     */
    decodeBinary(byteLength, headOffset) {
      if (byteLength > this.maxBinLength) {
        throw new DecodeError(`Max length exceeded: bin length (${byteLength}) > maxBinLength (${this.maxBinLength})`);
      }
      if (!this.hasRemaining(byteLength + headOffset)) {
        throw MORE_DATA;
      }
      const offset = this.pos + headOffset;
      const object = this.bytes.subarray(offset, offset + byteLength);
      this.pos += headOffset + byteLength;
      return object;
    }
    decodeExtension(size3, headOffset) {
      if (size3 > this.maxExtLength) {
        throw new DecodeError(`Max length exceeded: ext length (${size3}) > maxExtLength (${this.maxExtLength})`);
      }
      const extType = this.view.getInt8(this.pos + headOffset);
      const data = this.decodeBinary(
        size3,
        headOffset + 1
        /* extType */
      );
      return this.extensionCodec.decode(data, extType, this.context);
    }
    lookU8() {
      return this.view.getUint8(this.pos);
    }
    lookU16() {
      return this.view.getUint16(this.pos);
    }
    lookU32() {
      return this.view.getUint32(this.pos);
    }
    readU8() {
      const value = this.view.getUint8(this.pos);
      this.pos++;
      return value;
    }
    readI8() {
      const value = this.view.getInt8(this.pos);
      this.pos++;
      return value;
    }
    readU16() {
      const value = this.view.getUint16(this.pos);
      this.pos += 2;
      return value;
    }
    readI16() {
      const value = this.view.getInt16(this.pos);
      this.pos += 2;
      return value;
    }
    readU32() {
      const value = this.view.getUint32(this.pos);
      this.pos += 4;
      return value;
    }
    readI32() {
      const value = this.view.getInt32(this.pos);
      this.pos += 4;
      return value;
    }
    readU64() {
      const value = getUint64(this.view, this.pos);
      this.pos += 8;
      return value;
    }
    readI64() {
      const value = getInt64(this.view, this.pos);
      this.pos += 8;
      return value;
    }
    readU64AsBigInt() {
      const value = this.view.getBigUint64(this.pos);
      this.pos += 8;
      return value;
    }
    readI64AsBigInt() {
      const value = this.view.getBigInt64(this.pos);
      this.pos += 8;
      return value;
    }
    readF32() {
      const value = this.view.getFloat32(this.pos);
      this.pos += 4;
      return value;
    }
    readF64() {
      const value = this.view.getFloat64(this.pos);
      this.pos += 8;
      return value;
    }
  };
  __name(_Decoder, "Decoder");
  var Decoder = _Decoder;

  // node_modules/@msgpack/msgpack/dist.esm/decode.mjs
  function decode(buffer, options) {
    const decoder = new Decoder(options);
    return decoder.decode(buffer);
  }
  __name(decode, "decode");

  // node_modules/uint8arrays/esm/src/index.js
  init_shims();

  // node_modules/uint8arrays/esm/src/compare.js
  init_shims();

  // node_modules/uint8arrays/esm/src/concat.js
  init_shims();

  // node_modules/uint8arrays/esm/src/alloc.js
  init_shims();

  // node_modules/uint8arrays/esm/src/util/as-uint8array.js
  init_shims();
  function asUint8Array(buf) {
    if (globalThis.Buffer != null) {
      return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
    }
    return buf;
  }
  __name(asUint8Array, "asUint8Array");

  // node_modules/uint8arrays/esm/src/alloc.js
  function allocUnsafe(size3 = 0) {
    if (globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null) {
      return asUint8Array(globalThis.Buffer.allocUnsafe(size3));
    }
    return new Uint8Array(size3);
  }
  __name(allocUnsafe, "allocUnsafe");

  // node_modules/uint8arrays/esm/src/concat.js
  function concat2(arrays, length2) {
    if (!length2) {
      length2 = arrays.reduce((acc, curr) => acc + curr.length, 0);
    }
    const output = allocUnsafe(length2);
    let offset = 0;
    for (const arr of arrays) {
      output.set(arr, offset);
      offset += arr.length;
    }
    return asUint8Array(output);
  }
  __name(concat2, "concat");

  // node_modules/uint8arrays/esm/src/equals.js
  init_shims();

  // node_modules/uint8arrays/esm/src/from-string.js
  init_shims();

  // node_modules/uint8arrays/esm/src/util/bases.js
  init_shims();

  // node_modules/multiformats/esm/src/basics.js
  init_shims();

  // node_modules/multiformats/esm/src/bases/identity.js
  var identity_exports = {};
  __export(identity_exports, {
    identity: () => identity
  });
  init_shims();

  // node_modules/multiformats/esm/src/bases/base.js
  init_shims();

  // node_modules/multiformats/esm/vendor/base-x.js
  init_shims();
  function base2(ALPHABET2, name2) {
    if (ALPHABET2.length >= 255) {
      throw new TypeError("Alphabet too long");
    }
    var BASE_MAP = new Uint8Array(256);
    for (var j7 = 0; j7 < BASE_MAP.length; j7++) {
      BASE_MAP[j7] = 255;
    }
    for (var i4 = 0; i4 < ALPHABET2.length; i4++) {
      var x6 = ALPHABET2.charAt(i4);
      var xc2 = x6.charCodeAt(0);
      if (BASE_MAP[xc2] !== 255) {
        throw new TypeError(x6 + " is ambiguous");
      }
      BASE_MAP[xc2] = i4;
    }
    var BASE = ALPHABET2.length;
    var LEADER = ALPHABET2.charAt(0);
    var FACTOR = Math.log(BASE) / Math.log(256);
    var iFACTOR = Math.log(256) / Math.log(BASE);
    function encode6(source) {
      if (source instanceof Uint8Array) ;
      else if (ArrayBuffer.isView(source)) {
        source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
      } else if (Array.isArray(source)) {
        source = Uint8Array.from(source);
      }
      if (!(source instanceof Uint8Array)) {
        throw new TypeError("Expected Uint8Array");
      }
      if (source.length === 0) {
        return "";
      }
      var zeroes = 0;
      var length2 = 0;
      var pbegin = 0;
      var pend = source.length;
      while (pbegin !== pend && source[pbegin] === 0) {
        pbegin++;
        zeroes++;
      }
      var size3 = (pend - pbegin) * iFACTOR + 1 >>> 0;
      var b58 = new Uint8Array(size3);
      while (pbegin !== pend) {
        var carry = source[pbegin];
        var i5 = 0;
        for (var it1 = size3 - 1; (carry !== 0 || i5 < length2) && it1 !== -1; it1--, i5++) {
          carry += 256 * b58[it1] >>> 0;
          b58[it1] = carry % BASE >>> 0;
          carry = carry / BASE >>> 0;
        }
        if (carry !== 0) {
          throw new Error("Non-zero carry");
        }
        length2 = i5;
        pbegin++;
      }
      var it22 = size3 - length2;
      while (it22 !== size3 && b58[it22] === 0) {
        it22++;
      }
      var str = LEADER.repeat(zeroes);
      for (; it22 < size3; ++it22) {
        str += ALPHABET2.charAt(b58[it22]);
      }
      return str;
    }
    __name(encode6, "encode");
    function decodeUnsafe(source) {
      if (typeof source !== "string") {
        throw new TypeError("Expected String");
      }
      if (source.length === 0) {
        return new Uint8Array();
      }
      var psz = 0;
      if (source[psz] === " ") {
        return;
      }
      var zeroes = 0;
      var length2 = 0;
      while (source[psz] === LEADER) {
        zeroes++;
        psz++;
      }
      var size3 = (source.length - psz) * FACTOR + 1 >>> 0;
      var b256 = new Uint8Array(size3);
      while (source[psz]) {
        var carry = BASE_MAP[source.charCodeAt(psz)];
        if (carry === 255) {
          return;
        }
        var i5 = 0;
        for (var it3 = size3 - 1; (carry !== 0 || i5 < length2) && it3 !== -1; it3--, i5++) {
          carry += BASE * b256[it3] >>> 0;
          b256[it3] = carry % 256 >>> 0;
          carry = carry / 256 >>> 0;
        }
        if (carry !== 0) {
          throw new Error("Non-zero carry");
        }
        length2 = i5;
        psz++;
      }
      if (source[psz] === " ") {
        return;
      }
      var it4 = size3 - length2;
      while (it4 !== size3 && b256[it4] === 0) {
        it4++;
      }
      var vch = new Uint8Array(zeroes + (size3 - it4));
      var j8 = zeroes;
      while (it4 !== size3) {
        vch[j8++] = b256[it4++];
      }
      return vch;
    }
    __name(decodeUnsafe, "decodeUnsafe");
    function decode7(string2) {
      var buffer = decodeUnsafe(string2);
      if (buffer) {
        return buffer;
      }
      throw new Error(`Non-${name2} character`);
    }
    __name(decode7, "decode");
    return {
      encode: encode6,
      decodeUnsafe,
      decode: decode7
    };
  }
  __name(base2, "base");
  var src = base2;
  var _brrp__multiformats_scope_baseX = src;
  var base_x_default = _brrp__multiformats_scope_baseX;

  // node_modules/multiformats/esm/src/bytes.js
  init_shims();
  var empty = new Uint8Array(0);
  var equals = /* @__PURE__ */ __name((aa2, bb) => {
    if (aa2 === bb)
      return true;
    if (aa2.byteLength !== bb.byteLength) {
      return false;
    }
    for (let ii3 = 0; ii3 < aa2.byteLength; ii3++) {
      if (aa2[ii3] !== bb[ii3]) {
        return false;
      }
    }
    return true;
  }, "equals");
  var coerce = /* @__PURE__ */ __name((o5) => {
    if (o5 instanceof Uint8Array && o5.constructor.name === "Uint8Array")
      return o5;
    if (o5 instanceof ArrayBuffer)
      return new Uint8Array(o5);
    if (ArrayBuffer.isView(o5)) {
      return new Uint8Array(o5.buffer, o5.byteOffset, o5.byteLength);
    }
    throw new Error("Unknown type, must be binary type");
  }, "coerce");
  var fromString2 = /* @__PURE__ */ __name((str) => new TextEncoder().encode(str), "fromString");
  var toString = /* @__PURE__ */ __name((b6) => new TextDecoder().decode(b6), "toString");

  // node_modules/multiformats/esm/src/bases/base.js
  var _Encoder2 = class _Encoder2 {
    constructor(name2, prefix, baseEncode) {
      this.name = name2;
      this.prefix = prefix;
      this.baseEncode = baseEncode;
    }
    encode(bytes) {
      if (bytes instanceof Uint8Array) {
        return `${this.prefix}${this.baseEncode(bytes)}`;
      } else {
        throw Error("Unknown type, must be binary type");
      }
    }
  };
  __name(_Encoder2, "Encoder");
  var Encoder2 = _Encoder2;
  var _Decoder2 = class _Decoder2 {
    constructor(name2, prefix, baseDecode) {
      this.name = name2;
      this.prefix = prefix;
      if (prefix.codePointAt(0) === void 0) {
        throw new Error("Invalid prefix character");
      }
      this.prefixCodePoint = prefix.codePointAt(0);
      this.baseDecode = baseDecode;
    }
    decode(text) {
      if (typeof text === "string") {
        if (text.codePointAt(0) !== this.prefixCodePoint) {
          throw Error(`Unable to decode multibase string ${JSON.stringify(text)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
        }
        return this.baseDecode(text.slice(this.prefix.length));
      } else {
        throw Error("Can only multibase decode strings");
      }
    }
    or(decoder) {
      return or2(this, decoder);
    }
  };
  __name(_Decoder2, "Decoder");
  var Decoder2 = _Decoder2;
  var _ComposedDecoder = class _ComposedDecoder {
    constructor(decoders) {
      this.decoders = decoders;
    }
    or(decoder) {
      return or2(this, decoder);
    }
    decode(input) {
      const prefix = input[0];
      const decoder = this.decoders[prefix];
      if (decoder) {
        return decoder.decode(input);
      } else {
        throw RangeError(`Unable to decode multibase string ${JSON.stringify(input)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
      }
    }
  };
  __name(_ComposedDecoder, "ComposedDecoder");
  var ComposedDecoder = _ComposedDecoder;
  var or2 = /* @__PURE__ */ __name((left, right) => new ComposedDecoder({
    ...left.decoders || { [left.prefix]: left },
    ...right.decoders || { [right.prefix]: right }
  }), "or");
  var _Codec = class _Codec {
    constructor(name2, prefix, baseEncode, baseDecode) {
      this.name = name2;
      this.prefix = prefix;
      this.baseEncode = baseEncode;
      this.baseDecode = baseDecode;
      this.encoder = new Encoder2(name2, prefix, baseEncode);
      this.decoder = new Decoder2(name2, prefix, baseDecode);
    }
    encode(input) {
      return this.encoder.encode(input);
    }
    decode(input) {
      return this.decoder.decode(input);
    }
  };
  __name(_Codec, "Codec");
  var Codec = _Codec;
  var from6 = /* @__PURE__ */ __name(({ name: name2, prefix, encode: encode6, decode: decode7 }) => new Codec(name2, prefix, encode6, decode7), "from");
  var baseX = /* @__PURE__ */ __name(({ prefix, name: name2, alphabet: alphabet3 }) => {
    const { encode: encode6, decode: decode7 } = base_x_default(alphabet3, name2);
    return from6({
      prefix,
      name: name2,
      encode: encode6,
      decode: /* @__PURE__ */ __name((text) => coerce(decode7(text)), "decode")
    });
  }, "baseX");
  var decode2 = /* @__PURE__ */ __name((string2, alphabet3, bitsPerChar, name2) => {
    const codes = {};
    for (let i4 = 0; i4 < alphabet3.length; ++i4) {
      codes[alphabet3[i4]] = i4;
    }
    let end = string2.length;
    while (string2[end - 1] === "=") {
      --end;
    }
    const out = new Uint8Array(end * bitsPerChar / 8 | 0);
    let bits = 0;
    let buffer = 0;
    let written = 0;
    for (let i4 = 0; i4 < end; ++i4) {
      const value = codes[string2[i4]];
      if (value === void 0) {
        throw new SyntaxError(`Non-${name2} character`);
      }
      buffer = buffer << bitsPerChar | value;
      bits += bitsPerChar;
      if (bits >= 8) {
        bits -= 8;
        out[written++] = 255 & buffer >> bits;
      }
    }
    if (bits >= bitsPerChar || 255 & buffer << 8 - bits) {
      throw new SyntaxError("Unexpected end of data");
    }
    return out;
  }, "decode");
  var encode2 = /* @__PURE__ */ __name((data, alphabet3, bitsPerChar) => {
    const pad3 = alphabet3[alphabet3.length - 1] === "=";
    const mask = (1 << bitsPerChar) - 1;
    let out = "";
    let bits = 0;
    let buffer = 0;
    for (let i4 = 0; i4 < data.length; ++i4) {
      buffer = buffer << 8 | data[i4];
      bits += 8;
      while (bits > bitsPerChar) {
        bits -= bitsPerChar;
        out += alphabet3[mask & buffer >> bits];
      }
    }
    if (bits) {
      out += alphabet3[mask & buffer << bitsPerChar - bits];
    }
    if (pad3) {
      while (out.length * bitsPerChar & 7) {
        out += "=";
      }
    }
    return out;
  }, "encode");
  var rfc4648 = /* @__PURE__ */ __name(({ name: name2, prefix, bitsPerChar, alphabet: alphabet3 }) => {
    return from6({
      prefix,
      name: name2,
      encode(input) {
        return encode2(input, alphabet3, bitsPerChar);
      },
      decode(input) {
        return decode2(input, alphabet3, bitsPerChar, name2);
      }
    });
  }, "rfc4648");

  // node_modules/multiformats/esm/src/bases/identity.js
  var identity = from6({
    prefix: "\0",
    name: "identity",
    encode: /* @__PURE__ */ __name((buf) => toString(buf), "encode"),
    decode: /* @__PURE__ */ __name((str) => fromString2(str), "decode")
  });

  // node_modules/multiformats/esm/src/bases/base2.js
  var base2_exports = {};
  __export(base2_exports, {
    base2: () => base22
  });
  init_shims();
  var base22 = rfc4648({
    prefix: "0",
    name: "base2",
    alphabet: "01",
    bitsPerChar: 1
  });

  // node_modules/multiformats/esm/src/bases/base8.js
  var base8_exports = {};
  __export(base8_exports, {
    base8: () => base8
  });
  init_shims();
  var base8 = rfc4648({
    prefix: "7",
    name: "base8",
    alphabet: "01234567",
    bitsPerChar: 3
  });

  // node_modules/multiformats/esm/src/bases/base10.js
  var base10_exports = {};
  __export(base10_exports, {
    base10: () => base10
  });
  init_shims();
  var base10 = baseX({
    prefix: "9",
    name: "base10",
    alphabet: "0123456789"
  });

  // node_modules/multiformats/esm/src/bases/base16.js
  var base16_exports = {};
  __export(base16_exports, {
    base16: () => base16,
    base16upper: () => base16upper
  });
  init_shims();
  var base16 = rfc4648({
    prefix: "f",
    name: "base16",
    alphabet: "0123456789abcdef",
    bitsPerChar: 4
  });
  var base16upper = rfc4648({
    prefix: "F",
    name: "base16upper",
    alphabet: "0123456789ABCDEF",
    bitsPerChar: 4
  });

  // node_modules/multiformats/esm/src/bases/base32.js
  var base32_exports = {};
  __export(base32_exports, {
    base32: () => base322,
    base32hex: () => base32hex,
    base32hexpad: () => base32hexpad,
    base32hexpadupper: () => base32hexpadupper,
    base32hexupper: () => base32hexupper,
    base32pad: () => base32pad,
    base32padupper: () => base32padupper,
    base32upper: () => base32upper,
    base32z: () => base32z
  });
  init_shims();
  var base322 = rfc4648({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5
  });
  var base32upper = rfc4648({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5
  });
  var base32pad = rfc4648({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5
  });
  var base32padupper = rfc4648({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5
  });
  var base32hex = rfc4648({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5
  });
  var base32hexupper = rfc4648({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5
  });
  var base32hexpad = rfc4648({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5
  });
  var base32hexpadupper = rfc4648({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5
  });
  var base32z = rfc4648({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5
  });

  // node_modules/multiformats/esm/src/bases/base36.js
  var base36_exports = {};
  __export(base36_exports, {
    base36: () => base36,
    base36upper: () => base36upper
  });
  init_shims();
  var base36 = baseX({
    prefix: "k",
    name: "base36",
    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
  });
  var base36upper = baseX({
    prefix: "K",
    name: "base36upper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  });

  // node_modules/multiformats/esm/src/bases/base58.js
  var base58_exports = {};
  __export(base58_exports, {
    base58btc: () => base58btc,
    base58flickr: () => base58flickr
  });
  init_shims();
  var base58btc = baseX({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
  });
  var base58flickr = baseX({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
  });

  // node_modules/multiformats/esm/src/bases/base64.js
  var base64_exports = {};
  __export(base64_exports, {
    base64: () => base64,
    base64pad: () => base64pad,
    base64url: () => base64url,
    base64urlpad: () => base64urlpad
  });
  init_shims();
  var base64 = rfc4648({
    prefix: "m",
    name: "base64",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    bitsPerChar: 6
  });
  var base64pad = rfc4648({
    prefix: "M",
    name: "base64pad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    bitsPerChar: 6
  });
  var base64url = rfc4648({
    prefix: "u",
    name: "base64url",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    bitsPerChar: 6
  });
  var base64urlpad = rfc4648({
    prefix: "U",
    name: "base64urlpad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
    bitsPerChar: 6
  });

  // node_modules/multiformats/esm/src/bases/base256emoji.js
  var base256emoji_exports = {};
  __export(base256emoji_exports, {
    base256emoji: () => base256emoji
  });
  init_shims();
  var alphabet2 = Array.from("\u{1F680}\u{1FA90}\u2604\u{1F6F0}\u{1F30C}\u{1F311}\u{1F312}\u{1F313}\u{1F314}\u{1F315}\u{1F316}\u{1F317}\u{1F318}\u{1F30D}\u{1F30F}\u{1F30E}\u{1F409}\u2600\u{1F4BB}\u{1F5A5}\u{1F4BE}\u{1F4BF}\u{1F602}\u2764\u{1F60D}\u{1F923}\u{1F60A}\u{1F64F}\u{1F495}\u{1F62D}\u{1F618}\u{1F44D}\u{1F605}\u{1F44F}\u{1F601}\u{1F525}\u{1F970}\u{1F494}\u{1F496}\u{1F499}\u{1F622}\u{1F914}\u{1F606}\u{1F644}\u{1F4AA}\u{1F609}\u263A\u{1F44C}\u{1F917}\u{1F49C}\u{1F614}\u{1F60E}\u{1F607}\u{1F339}\u{1F926}\u{1F389}\u{1F49E}\u270C\u2728\u{1F937}\u{1F631}\u{1F60C}\u{1F338}\u{1F64C}\u{1F60B}\u{1F497}\u{1F49A}\u{1F60F}\u{1F49B}\u{1F642}\u{1F493}\u{1F929}\u{1F604}\u{1F600}\u{1F5A4}\u{1F603}\u{1F4AF}\u{1F648}\u{1F447}\u{1F3B6}\u{1F612}\u{1F92D}\u2763\u{1F61C}\u{1F48B}\u{1F440}\u{1F62A}\u{1F611}\u{1F4A5}\u{1F64B}\u{1F61E}\u{1F629}\u{1F621}\u{1F92A}\u{1F44A}\u{1F973}\u{1F625}\u{1F924}\u{1F449}\u{1F483}\u{1F633}\u270B\u{1F61A}\u{1F61D}\u{1F634}\u{1F31F}\u{1F62C}\u{1F643}\u{1F340}\u{1F337}\u{1F63B}\u{1F613}\u2B50\u2705\u{1F97A}\u{1F308}\u{1F608}\u{1F918}\u{1F4A6}\u2714\u{1F623}\u{1F3C3}\u{1F490}\u2639\u{1F38A}\u{1F498}\u{1F620}\u261D\u{1F615}\u{1F33A}\u{1F382}\u{1F33B}\u{1F610}\u{1F595}\u{1F49D}\u{1F64A}\u{1F639}\u{1F5E3}\u{1F4AB}\u{1F480}\u{1F451}\u{1F3B5}\u{1F91E}\u{1F61B}\u{1F534}\u{1F624}\u{1F33C}\u{1F62B}\u26BD\u{1F919}\u2615\u{1F3C6}\u{1F92B}\u{1F448}\u{1F62E}\u{1F646}\u{1F37B}\u{1F343}\u{1F436}\u{1F481}\u{1F632}\u{1F33F}\u{1F9E1}\u{1F381}\u26A1\u{1F31E}\u{1F388}\u274C\u270A\u{1F44B}\u{1F630}\u{1F928}\u{1F636}\u{1F91D}\u{1F6B6}\u{1F4B0}\u{1F353}\u{1F4A2}\u{1F91F}\u{1F641}\u{1F6A8}\u{1F4A8}\u{1F92C}\u2708\u{1F380}\u{1F37A}\u{1F913}\u{1F619}\u{1F49F}\u{1F331}\u{1F616}\u{1F476}\u{1F974}\u25B6\u27A1\u2753\u{1F48E}\u{1F4B8}\u2B07\u{1F628}\u{1F31A}\u{1F98B}\u{1F637}\u{1F57A}\u26A0\u{1F645}\u{1F61F}\u{1F635}\u{1F44E}\u{1F932}\u{1F920}\u{1F927}\u{1F4CC}\u{1F535}\u{1F485}\u{1F9D0}\u{1F43E}\u{1F352}\u{1F617}\u{1F911}\u{1F30A}\u{1F92F}\u{1F437}\u260E\u{1F4A7}\u{1F62F}\u{1F486}\u{1F446}\u{1F3A4}\u{1F647}\u{1F351}\u2744\u{1F334}\u{1F4A3}\u{1F438}\u{1F48C}\u{1F4CD}\u{1F940}\u{1F922}\u{1F445}\u{1F4A1}\u{1F4A9}\u{1F450}\u{1F4F8}\u{1F47B}\u{1F910}\u{1F92E}\u{1F3BC}\u{1F975}\u{1F6A9}\u{1F34E}\u{1F34A}\u{1F47C}\u{1F48D}\u{1F4E3}\u{1F942}");
  var alphabetBytesToChars = alphabet2.reduce((p5, c6, i4) => {
    p5[i4] = c6;
    return p5;
  }, []);
  var alphabetCharsToBytes = alphabet2.reduce((p5, c6, i4) => {
    p5[c6.codePointAt(0)] = i4;
    return p5;
  }, []);
  function encode3(data) {
    return data.reduce((p5, c6) => {
      p5 += alphabetBytesToChars[c6];
      return p5;
    }, "");
  }
  __name(encode3, "encode");
  function decode3(str) {
    const byts = [];
    for (const char of str) {
      const byt = alphabetCharsToBytes[char.codePointAt(0)];
      if (byt === void 0) {
        throw new Error(`Non-base256emoji character: ${char}`);
      }
      byts.push(byt);
    }
    return new Uint8Array(byts);
  }
  __name(decode3, "decode");
  var base256emoji = from6({
    prefix: "\u{1F680}",
    name: "base256emoji",
    encode: encode3,
    decode: decode3
  });

  // node_modules/multiformats/esm/src/hashes/sha2-browser.js
  var sha2_browser_exports = {};
  __export(sha2_browser_exports, {
    sha256: () => sha2562,
    sha512: () => sha512
  });
  init_shims();

  // node_modules/multiformats/esm/src/hashes/hasher.js
  init_shims();

  // node_modules/multiformats/esm/src/hashes/digest.js
  init_shims();

  // node_modules/multiformats/esm/src/varint.js
  init_shims();

  // node_modules/multiformats/esm/vendor/varint.js
  init_shims();
  var encode_1 = encode4;
  var MSB = 128;
  var REST = 127;
  var MSBALL = ~REST;
  var INT = Math.pow(2, 31);
  function encode4(num, out, offset) {
    out = out || [];
    offset = offset || 0;
    var oldOffset = offset;
    while (num >= INT) {
      out[offset++] = num & 255 | MSB;
      num /= 128;
    }
    while (num & MSBALL) {
      out[offset++] = num & 255 | MSB;
      num >>>= 7;
    }
    out[offset] = num | 0;
    encode4.bytes = offset - oldOffset + 1;
    return out;
  }
  __name(encode4, "encode");
  var decode4 = read;
  var MSB$1 = 128;
  var REST$1 = 127;
  function read(buf, offset) {
    var res = 0, offset = offset || 0, shift = 0, counter = offset, b6, l7 = buf.length;
    do {
      if (counter >= l7) {
        read.bytes = 0;
        throw new RangeError("Could not decode varint");
      }
      b6 = buf[counter++];
      res += shift < 28 ? (b6 & REST$1) << shift : (b6 & REST$1) * Math.pow(2, shift);
      shift += 7;
    } while (b6 >= MSB$1);
    read.bytes = counter - offset;
    return res;
  }
  __name(read, "read");
  var N1 = Math.pow(2, 7);
  var N22 = Math.pow(2, 14);
  var N32 = Math.pow(2, 21);
  var N4 = Math.pow(2, 28);
  var N5 = Math.pow(2, 35);
  var N6 = Math.pow(2, 42);
  var N7 = Math.pow(2, 49);
  var N8 = Math.pow(2, 56);
  var N9 = Math.pow(2, 63);
  var length = /* @__PURE__ */ __name(function(value) {
    return value < N1 ? 1 : value < N22 ? 2 : value < N32 ? 3 : value < N4 ? 4 : value < N5 ? 5 : value < N6 ? 6 : value < N7 ? 7 : value < N8 ? 8 : value < N9 ? 9 : 10;
  }, "length");
  var varint = {
    encode: encode_1,
    decode: decode4,
    encodingLength: length
  };
  var _brrp_varint = varint;
  var varint_default = _brrp_varint;

  // node_modules/multiformats/esm/src/varint.js
  var decode5 = /* @__PURE__ */ __name((data, offset = 0) => {
    const code2 = varint_default.decode(data, offset);
    return [
      code2,
      varint_default.decode.bytes
    ];
  }, "decode");
  var encodeTo = /* @__PURE__ */ __name((int, target, offset = 0) => {
    varint_default.encode(int, target, offset);
    return target;
  }, "encodeTo");
  var encodingLength = /* @__PURE__ */ __name((int) => {
    return varint_default.encodingLength(int);
  }, "encodingLength");

  // node_modules/multiformats/esm/src/hashes/digest.js
  var create = /* @__PURE__ */ __name((code2, digest2) => {
    const size3 = digest2.byteLength;
    const sizeOffset = encodingLength(code2);
    const digestOffset = sizeOffset + encodingLength(size3);
    const bytes = new Uint8Array(digestOffset + size3);
    encodeTo(code2, bytes, 0);
    encodeTo(size3, bytes, sizeOffset);
    bytes.set(digest2, digestOffset);
    return new Digest(code2, size3, digest2, bytes);
  }, "create");
  var decode6 = /* @__PURE__ */ __name((multihash) => {
    const bytes = coerce(multihash);
    const [code2, sizeOffset] = decode5(bytes);
    const [size3, digestOffset] = decode5(bytes.subarray(sizeOffset));
    const digest2 = bytes.subarray(sizeOffset + digestOffset);
    if (digest2.byteLength !== size3) {
      throw new Error("Incorrect length");
    }
    return new Digest(code2, size3, digest2, bytes);
  }, "decode");
  var equals2 = /* @__PURE__ */ __name((a4, b6) => {
    if (a4 === b6) {
      return true;
    } else {
      return a4.code === b6.code && a4.size === b6.size && equals(a4.bytes, b6.bytes);
    }
  }, "equals");
  var _Digest = class _Digest {
    constructor(code2, size3, digest2, bytes) {
      this.code = code2;
      this.size = size3;
      this.digest = digest2;
      this.bytes = bytes;
    }
  };
  __name(_Digest, "Digest");
  var Digest = _Digest;

  // node_modules/multiformats/esm/src/hashes/hasher.js
  var from7 = /* @__PURE__ */ __name(({ name: name2, code: code2, encode: encode6 }) => new Hasher(name2, code2, encode6), "from");
  var _Hasher = class _Hasher {
    constructor(name2, code2, encode6) {
      this.name = name2;
      this.code = code2;
      this.encode = encode6;
    }
    digest(input) {
      if (input instanceof Uint8Array) {
        const result = this.encode(input);
        return result instanceof Uint8Array ? create(this.code, result) : result.then((digest2) => create(this.code, digest2));
      } else {
        throw Error("Unknown type, must be binary type");
      }
    }
  };
  __name(_Hasher, "Hasher");
  var Hasher = _Hasher;

  // node_modules/multiformats/esm/src/hashes/sha2-browser.js
  var sha = /* @__PURE__ */ __name((name2) => async (data) => new Uint8Array(await crypto.subtle.digest(name2, data)), "sha");
  var sha2562 = from7({
    name: "sha2-256",
    code: 18,
    encode: sha("SHA-256")
  });
  var sha512 = from7({
    name: "sha2-512",
    code: 19,
    encode: sha("SHA-512")
  });

  // node_modules/multiformats/esm/src/hashes/identity.js
  var identity_exports2 = {};
  __export(identity_exports2, {
    identity: () => identity2
  });
  init_shims();
  var code = 0;
  var name = "identity";
  var encode5 = coerce;
  var digest = /* @__PURE__ */ __name((input) => create(code, encode5(input)), "digest");
  var identity2 = {
    code,
    name,
    encode: encode5,
    digest
  };

  // node_modules/multiformats/esm/src/codecs/raw.js
  init_shims();

  // node_modules/multiformats/esm/src/codecs/json.js
  init_shims();
  var textEncoder = new TextEncoder();
  var textDecoder = new TextDecoder();

  // node_modules/multiformats/esm/src/index.js
  init_shims();

  // node_modules/multiformats/esm/src/cid.js
  init_shims();
  var _CID = class _CID {
    constructor(version3, code2, multihash, bytes) {
      this.code = code2;
      this.version = version3;
      this.multihash = multihash;
      this.bytes = bytes;
      this.byteOffset = bytes.byteOffset;
      this.byteLength = bytes.byteLength;
      this.asCID = this;
      this._baseCache = /* @__PURE__ */ new Map();
      Object.defineProperties(this, {
        byteOffset: hidden,
        byteLength: hidden,
        code: readonly,
        version: readonly,
        multihash: readonly,
        bytes: readonly,
        _baseCache: hidden,
        asCID: hidden
      });
    }
    toV0() {
      switch (this.version) {
        case 0: {
          return this;
        }
        default: {
          const { code: code2, multihash } = this;
          if (code2 !== DAG_PB_CODE) {
            throw new Error("Cannot convert a non dag-pb CID to CIDv0");
          }
          if (multihash.code !== SHA_256_CODE) {
            throw new Error("Cannot convert non sha2-256 multihash CID to CIDv0");
          }
          return _CID.createV0(multihash);
        }
      }
    }
    toV1() {
      switch (this.version) {
        case 0: {
          const { code: code2, digest: digest2 } = this.multihash;
          const multihash = create(code2, digest2);
          return _CID.createV1(this.code, multihash);
        }
        case 1: {
          return this;
        }
        default: {
          throw Error(`Can not convert CID version ${this.version} to version 0. This is a bug please report`);
        }
      }
    }
    equals(other) {
      return other && this.code === other.code && this.version === other.version && equals2(this.multihash, other.multihash);
    }
    toString(base3) {
      const { bytes, version: version3, _baseCache } = this;
      switch (version3) {
        case 0:
          return toStringV0(bytes, _baseCache, base3 || base58btc.encoder);
        default:
          return toStringV1(bytes, _baseCache, base3 || base322.encoder);
      }
    }
    toJSON() {
      return {
        code: this.code,
        version: this.version,
        hash: this.multihash.bytes
      };
    }
    get [Symbol.toStringTag]() {
      return "CID";
    }
    [Symbol.for("nodejs.util.inspect.custom")]() {
      return "CID(" + this.toString() + ")";
    }
    static isCID(value) {
      deprecate(/^0\.0/, IS_CID_DEPRECATION);
      return !!(value && (value[cidSymbol] || value.asCID === value));
    }
    get toBaseEncodedString() {
      throw new Error("Deprecated, use .toString()");
    }
    get codec() {
      throw new Error('"codec" property is deprecated, use integer "code" property instead');
    }
    get buffer() {
      throw new Error("Deprecated .buffer property, use .bytes to get Uint8Array instead");
    }
    get multibaseName() {
      throw new Error('"multibaseName" property is deprecated');
    }
    get prefix() {
      throw new Error('"prefix" property is deprecated');
    }
    static asCID(value) {
      if (value instanceof _CID) {
        return value;
      } else if (value != null && value.asCID === value) {
        const { version: version3, code: code2, multihash, bytes } = value;
        return new _CID(version3, code2, multihash, bytes || encodeCID(version3, code2, multihash.bytes));
      } else if (value != null && value[cidSymbol] === true) {
        const { version: version3, multihash, code: code2 } = value;
        const digest2 = decode6(multihash);
        return _CID.create(version3, code2, digest2);
      } else {
        return null;
      }
    }
    static create(version3, code2, digest2) {
      if (typeof code2 !== "number") {
        throw new Error("String codecs are no longer supported");
      }
      switch (version3) {
        case 0: {
          if (code2 !== DAG_PB_CODE) {
            throw new Error(`Version 0 CID must use dag-pb (code: ${DAG_PB_CODE}) block encoding`);
          } else {
            return new _CID(version3, code2, digest2, digest2.bytes);
          }
        }
        case 1: {
          const bytes = encodeCID(version3, code2, digest2.bytes);
          return new _CID(version3, code2, digest2, bytes);
        }
        default: {
          throw new Error("Invalid version");
        }
      }
    }
    static createV0(digest2) {
      return _CID.create(0, DAG_PB_CODE, digest2);
    }
    static createV1(code2, digest2) {
      return _CID.create(1, code2, digest2);
    }
    static decode(bytes) {
      const [cid, remainder] = _CID.decodeFirst(bytes);
      if (remainder.length) {
        throw new Error("Incorrect length");
      }
      return cid;
    }
    static decodeFirst(bytes) {
      const specs = _CID.inspectBytes(bytes);
      const prefixSize = specs.size - specs.multihashSize;
      const multihashBytes = coerce(bytes.subarray(prefixSize, prefixSize + specs.multihashSize));
      if (multihashBytes.byteLength !== specs.multihashSize) {
        throw new Error("Incorrect length");
      }
      const digestBytes = multihashBytes.subarray(specs.multihashSize - specs.digestSize);
      const digest2 = new Digest(specs.multihashCode, specs.digestSize, digestBytes, multihashBytes);
      const cid = specs.version === 0 ? _CID.createV0(digest2) : _CID.createV1(specs.codec, digest2);
      return [
        cid,
        bytes.subarray(specs.size)
      ];
    }
    static inspectBytes(initialBytes) {
      let offset = 0;
      const next = /* @__PURE__ */ __name(() => {
        const [i4, length2] = decode5(initialBytes.subarray(offset));
        offset += length2;
        return i4;
      }, "next");
      let version3 = next();
      let codec = DAG_PB_CODE;
      if (version3 === 18) {
        version3 = 0;
        offset = 0;
      } else if (version3 === 1) {
        codec = next();
      }
      if (version3 !== 0 && version3 !== 1) {
        throw new RangeError(`Invalid CID version ${version3}`);
      }
      const prefixSize = offset;
      const multihashCode = next();
      const digestSize = next();
      const size3 = offset + digestSize;
      const multihashSize = size3 - prefixSize;
      return {
        version: version3,
        codec,
        multihashCode,
        digestSize,
        multihashSize,
        size: size3
      };
    }
    static parse(source, base3) {
      const [prefix, bytes] = parseCIDtoBytes(source, base3);
      const cid = _CID.decode(bytes);
      cid._baseCache.set(prefix, source);
      return cid;
    }
  };
  __name(_CID, "CID");
  var CID = _CID;
  var parseCIDtoBytes = /* @__PURE__ */ __name((source, base3) => {
    switch (source[0]) {
      case "Q": {
        const decoder = base3 || base58btc;
        return [
          base58btc.prefix,
          decoder.decode(`${base58btc.prefix}${source}`)
        ];
      }
      case base58btc.prefix: {
        const decoder = base3 || base58btc;
        return [
          base58btc.prefix,
          decoder.decode(source)
        ];
      }
      case base322.prefix: {
        const decoder = base3 || base322;
        return [
          base322.prefix,
          decoder.decode(source)
        ];
      }
      default: {
        if (base3 == null) {
          throw Error("To parse non base32 or base58btc encoded CID multibase decoder must be provided");
        }
        return [
          source[0],
          base3.decode(source)
        ];
      }
    }
  }, "parseCIDtoBytes");
  var toStringV0 = /* @__PURE__ */ __name((bytes, cache, base3) => {
    const { prefix } = base3;
    if (prefix !== base58btc.prefix) {
      throw Error(`Cannot string encode V0 in ${base3.name} encoding`);
    }
    const cid = cache.get(prefix);
    if (cid == null) {
      const cid2 = base3.encode(bytes).slice(1);
      cache.set(prefix, cid2);
      return cid2;
    } else {
      return cid;
    }
  }, "toStringV0");
  var toStringV1 = /* @__PURE__ */ __name((bytes, cache, base3) => {
    const { prefix } = base3;
    const cid = cache.get(prefix);
    if (cid == null) {
      const cid2 = base3.encode(bytes);
      cache.set(prefix, cid2);
      return cid2;
    } else {
      return cid;
    }
  }, "toStringV1");
  var DAG_PB_CODE = 112;
  var SHA_256_CODE = 18;
  var encodeCID = /* @__PURE__ */ __name((version3, code2, multihash) => {
    const codeOffset = encodingLength(version3);
    const hashOffset = codeOffset + encodingLength(code2);
    const bytes = new Uint8Array(hashOffset + multihash.byteLength);
    encodeTo(version3, bytes, 0);
    encodeTo(code2, bytes, codeOffset);
    bytes.set(multihash, hashOffset);
    return bytes;
  }, "encodeCID");
  var cidSymbol = Symbol.for("@ipld/js-cid/CID");
  var readonly = {
    writable: false,
    configurable: false,
    enumerable: true
  };
  var hidden = {
    writable: false,
    enumerable: false,
    configurable: false
  };
  var version2 = "0.0.0-dev";
  var deprecate = /* @__PURE__ */ __name((range, message) => {
    if (range.test(version2)) {
      console.warn(message);
    } else {
      throw new Error(message);
    }
  }, "deprecate");
  var IS_CID_DEPRECATION = `CID.isCID(v) is deprecated and will be removed in the next major release.
Following code pattern:

if (CID.isCID(value)) {
  doSomethingWithCID(value)
}

Is replaced with:

const cid = CID.asCID(value)
if (cid) {
  // Make sure to use cid instead of value
  doSomethingWithCID(cid)
}
`;

  // node_modules/multiformats/esm/src/basics.js
  var bases = {
    ...identity_exports,
    ...base2_exports,
    ...base8_exports,
    ...base10_exports,
    ...base16_exports,
    ...base32_exports,
    ...base36_exports,
    ...base58_exports,
    ...base64_exports,
    ...base256emoji_exports
  };
  var hashes = {
    ...sha2_browser_exports,
    ...identity_exports2
  };

  // node_modules/uint8arrays/esm/src/util/bases.js
  function createCodec(name2, prefix, encode6, decode7) {
    return {
      name: name2,
      prefix,
      encoder: {
        name: name2,
        prefix,
        encode: encode6
      },
      decoder: { decode: decode7 }
    };
  }
  __name(createCodec, "createCodec");
  var string = createCodec("utf8", "u", (buf) => {
    const decoder = new TextDecoder("utf8");
    return "u" + decoder.decode(buf);
  }, (str) => {
    const encoder2 = new TextEncoder();
    return encoder2.encode(str.substring(1));
  });
  var ascii = createCodec("ascii", "a", (buf) => {
    let string2 = "a";
    for (let i4 = 0; i4 < buf.length; i4++) {
      string2 += String.fromCharCode(buf[i4]);
    }
    return string2;
  }, (str) => {
    str = str.substring(1);
    const buf = allocUnsafe(str.length);
    for (let i4 = 0; i4 < str.length; i4++) {
      buf[i4] = str.charCodeAt(i4);
    }
    return buf;
  });
  var BASES = {
    utf8: string,
    "utf-8": string,
    hex: bases.base16,
    latin1: ascii,
    ascii,
    binary: ascii,
    ...bases
  };
  var bases_default = BASES;

  // node_modules/uint8arrays/esm/src/from-string.js
  function fromString3(string2, encoding = "utf8") {
    const base3 = bases_default[encoding];
    if (!base3) {
      throw new Error(`Unsupported encoding "${encoding}"`);
    }
    if ((encoding === "utf8" || encoding === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null) {
      return asUint8Array(globalThis.Buffer.from(string2, "utf-8"));
    }
    return base3.decoder.decode(`${base3.prefix}${string2}`);
  }
  __name(fromString3, "fromString");

  // node_modules/uint8arrays/esm/src/to-string.js
  init_shims();
  function toString2(array, encoding = "utf8") {
    const base3 = bases_default[encoding];
    if (!base3) {
      throw new Error(`Unsupported encoding "${encoding}"`);
    }
    if ((encoding === "utf8" || encoding === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null) {
      return globalThis.Buffer.from(array.buffer, array.byteOffset, array.byteLength).toString("utf8");
    }
    return base3.encoder.encode(array).substring(1);
  }
  __name(toString2, "toString");

  // node_modules/uint8arrays/esm/src/xor.js
  init_shims();

  // node_modules/@walletconnect/relay-api/dist/index.es.js
  init_shims();
  var C2 = { waku: { publish: "waku_publish", batchPublish: "waku_batchPublish", subscribe: "waku_subscribe", batchSubscribe: "waku_batchSubscribe", subscription: "waku_subscription", unsubscribe: "waku_unsubscribe", batchUnsubscribe: "waku_batchUnsubscribe", batchFetchMessages: "waku_batchFetchMessages" }, irn: { publish: "irn_publish", batchPublish: "irn_batchPublish", subscribe: "irn_subscribe", batchSubscribe: "irn_batchSubscribe", subscription: "irn_subscription", unsubscribe: "irn_unsubscribe", batchUnsubscribe: "irn_batchUnsubscribe", batchFetchMessages: "irn_batchFetchMessages" }, iridium: { publish: "iridium_publish", batchPublish: "iridium_batchPublish", subscribe: "iridium_subscribe", batchSubscribe: "iridium_batchSubscribe", subscription: "iridium_subscription", unsubscribe: "iridium_unsubscribe", batchUnsubscribe: "iridium_batchUnsubscribe", batchFetchMessages: "iridium_batchFetchMessages" } };

  // node_modules/@walletconnect/utils/dist/index.js
  var import_blakejs = __toESM(require_blakejs(), 1);
  var Ae2 = ":";
  function Je2(t) {
    const [e2, n5] = t.split(Ae2);
    return { namespace: e2, reference: n5 };
  }
  __name(Je2, "Je");
  function Se2(t, e2) {
    return t.includes(":") ? [t] : e2.chains || [];
  }
  __name(Se2, "Se");
  var ri = Object.defineProperty;
  var oi = Object.defineProperties;
  var si = Object.getOwnPropertyDescriptors;
  var ar2 = Object.getOwnPropertySymbols;
  var ii = Object.prototype.hasOwnProperty;
  var ci = Object.prototype.propertyIsEnumerable;
  var en2 = /* @__PURE__ */ __name((t, e2, n5) => e2 in t ? ri(t, e2, { enumerable: true, configurable: true, writable: true, value: n5 }) : t[e2] = n5, "en");
  var ur2 = /* @__PURE__ */ __name((t, e2) => {
    for (var n5 in e2 || (e2 = {})) ii.call(e2, n5) && en2(t, n5, e2[n5]);
    if (ar2) for (var n5 of ar2(e2)) ci.call(e2, n5) && en2(t, n5, e2[n5]);
    return t;
  }, "ur");
  var fi = /* @__PURE__ */ __name((t, e2) => oi(t, si(e2)), "fi");
  var lr2 = /* @__PURE__ */ __name((t, e2, n5) => en2(t, typeof e2 != "symbol" ? e2 + "" : e2, n5), "lr");
  var dr2 = "ReactNative";
  var et = { reactNative: "react-native", node: "node", browser: "browser", unknown: "unknown" };
  var pr2 = "js";
  function rn2() {
    return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
  }
  __name(rn2, "rn");
  function It2() {
    return !(0, import_window_getters.getDocument)() && !!(0, import_window_getters.getNavigator)() && navigator.product === dr2;
  }
  __name(It2, "It");
  function li() {
    return It2() && typeof globalThis < "u" && typeof (globalThis == null ? void 0 : globalThis.Platform) < "u" && (globalThis == null ? void 0 : globalThis.Platform.OS) === "android";
  }
  __name(li, "li");
  function di() {
    return It2() && typeof globalThis < "u" && typeof (globalThis == null ? void 0 : globalThis.Platform) < "u" && (globalThis == null ? void 0 : globalThis.Platform.OS) === "ios";
  }
  __name(di, "di");
  function Wt2() {
    return !rn2() && !!(0, import_window_getters.getNavigator)() && !!(0, import_window_getters.getDocument)();
  }
  __name(Wt2, "Wt");
  function Vt2() {
    return It2() ? et.reactNative : rn2() ? et.node : Wt2() ? et.browser : et.unknown;
  }
  __name(Vt2, "Vt");
  function hi() {
    var t;
    try {
      return It2() && typeof globalThis < "u" && typeof (globalThis == null ? void 0 : globalThis.Application) < "u" ? (t = globalThis.Application) == null ? void 0 : t.applicationId : void 0;
    } catch {
      return;
    }
  }
  __name(hi, "hi");
  function gr2(t, e2) {
    const n5 = new URLSearchParams(t);
    return Object.entries(e2).sort(([r3], [o5]) => r3.localeCompare(o5)).forEach(([r3, o5]) => {
      o5 != null && n5.set(r3, String(o5));
    }), n5.toString();
  }
  __name(gr2, "gr");
  function pi(t) {
    var e2, n5;
    const r3 = br2();
    try {
      return t != null && t.url && r3.url && new URL(t.url).host !== new URL(r3.url).host && (console.warn(`The configured WalletConnect 'metadata.url':${t.url} differs from the actual page url:${r3.url}. This is probably unintended and can lead to issues.`), t.url = r3.url), (e2 = t?.icons) != null && e2.length && t.icons.length > 0 && (t.icons = t.icons.filter((o5) => o5 !== "")), fi(ur2(ur2({}, r3), t), { url: t?.url || r3.url, name: t?.name || r3.name, description: t?.description || r3.description, icons: (n5 = t?.icons) != null && n5.length && t.icons.length > 0 ? t.icons : r3.icons });
    } catch (o5) {
      return console.warn("Error populating app metadata", o5), t || r3;
    }
  }
  __name(pi, "pi");
  function br2() {
    return (0, import_window_metadata.getWindowMetadata)() || { name: "", description: "", url: "", icons: [""] };
  }
  __name(br2, "br");
  function yr2() {
    if (Vt2() === et.reactNative && typeof globalThis < "u" && typeof (globalThis == null ? void 0 : globalThis.Platform) < "u") {
      const { OS: n5, Version: r3 } = globalThis.Platform;
      return [n5, r3].join("-");
    }
    const t = detect();
    if (t === null) return "unknown";
    const e2 = t.os ? t.os.replace(" ", "").toLowerCase() : "unknown";
    return t.type === "browser" ? [e2, t.name, t.version].join("-") : [e2, t.version].join("-");
  }
  __name(yr2, "yr");
  function mr2() {
    var t;
    const e2 = Vt2();
    return e2 === et.browser ? [e2, ((t = (0, import_window_getters.getLocation)()) == null ? void 0 : t.host) || "unknown"].join(":") : e2;
  }
  __name(mr2, "mr");
  function wr2(t, e2, n5) {
    const r3 = yr2(), o5 = mr2();
    return [[t, e2].join("-"), [pr2, n5].join("-"), r3, o5].join("/");
  }
  __name(wr2, "wr");
  function bi({ protocol: t, version: e2, relayUrl: n5, sdkVersion: r3, auth: o5, projectId: s3, useOnCloseEvent: i4, bundleId: c6, packageName: f6 }) {
    const u2 = n5.split("?"), a4 = wr2(t, e2, r3), l7 = { auth: o5, ua: a4, projectId: s3, useOnCloseEvent: i4 || void 0, packageName: f6 || void 0, bundleId: c6 || void 0 }, d4 = gr2(u2[1] || "", l7);
    return u2[0] + "?" + d4;
  }
  __name(bi, "bi");
  function At(t, e2) {
    return t.filter((n5) => e2.includes(n5)).length === t.length;
  }
  __name(At, "At");
  function vi(t) {
    return Object.fromEntries(t.entries());
  }
  __name(vi, "vi");
  function xi(t) {
    return new Map(Object.entries(t));
  }
  __name(xi, "xi");
  function Ai(t = import_time3.FIVE_MINUTES, e2) {
    const n5 = (0, import_time3.toMiliseconds)(t || import_time3.FIVE_MINUTES);
    let r3, o5, s3, i4;
    return { resolve: /* @__PURE__ */ __name((c6) => {
      s3 && r3 && (clearTimeout(s3), r3(c6), i4 = Promise.resolve(c6));
    }, "resolve"), reject: /* @__PURE__ */ __name((c6) => {
      s3 && o5 && (clearTimeout(s3), o5(c6));
    }, "reject"), done: /* @__PURE__ */ __name(() => new Promise((c6, f6) => {
      if (i4) return c6(i4);
      s3 = setTimeout(() => {
        const u2 = new Error(e2);
        i4 = Promise.reject(u2), f6(u2);
      }, n5), r3 = c6, o5 = f6;
    }), "done") };
  }
  __name(Ai, "Ai");
  function Si(t, e2, n5) {
    return new Promise(async (r3, o5) => {
      const s3 = setTimeout(() => o5(new Error(n5)), e2);
      try {
        const i4 = await t;
        r3(i4);
      } catch (i4) {
        o5(i4);
      }
      clearTimeout(s3);
    });
  }
  __name(Si, "Si");
  function on2(t, e2) {
    if (typeof e2 == "string" && e2.startsWith(`${t}:`)) return e2;
    if (t.toLowerCase() === "topic") {
      if (typeof e2 != "string") throw new Error('Value must be "string" for expirer target type: topic');
      return `topic:${e2}`;
    } else if (t.toLowerCase() === "id") {
      if (typeof e2 != "number") throw new Error('Value must be "number" for expirer target type: id');
      return `id:${e2}`;
    }
    throw new Error(`Unknown expirer target type: ${t}`);
  }
  __name(on2, "on");
  function Oi(t) {
    return on2("topic", t);
  }
  __name(Oi, "Oi");
  function Ni(t) {
    return on2("id", t);
  }
  __name(Ni, "Ni");
  function Ui(t) {
    const [e2, n5] = t.split(":"), r3 = { id: void 0, topic: void 0 };
    if (e2 === "topic" && typeof n5 == "string") r3.topic = n5;
    else if (e2 === "id" && Number.isInteger(Number(n5))) r3.id = Number(n5);
    else throw new Error(`Invalid target, expected id:number or topic:string, got ${e2}:${n5}`);
    return r3;
  }
  __name(Ui, "Ui");
  function _i2(t, e2) {
    return (0, import_time3.fromMiliseconds)((e2 || Date.now()) + (0, import_time3.toMiliseconds)(t));
  }
  __name(_i2, "_i");
  function Ri(t) {
    return Date.now() >= (0, import_time3.toMiliseconds)(t);
  }
  __name(Ri, "Ri");
  function $i(t, e2) {
    return `${t}${e2 ? `:${e2}` : ""}`;
  }
  __name($i, "$i");
  function ut2(t = [], e2 = []) {
    return [.../* @__PURE__ */ new Set([...t, ...e2])];
  }
  __name(ut2, "ut");
  async function Ti({ id: t, topic: e2, wcDeepLink: n5 }) {
    var r3;
    try {
      if (!n5) return;
      const o5 = typeof n5 == "string" ? JSON.parse(n5) : n5, s3 = o5?.href;
      if (typeof s3 != "string") return;
      const i4 = Br2(s3, t, e2), c6 = Vt2();
      if (c6 === et.browser) {
        if (!((r3 = (0, import_window_getters.getDocument)()) != null && r3.hasFocus())) {
          console.warn("Document does not have focus, skipping deeplink.");
          return;
        }
        Ir2(i4);
      } else c6 === et.reactNative && typeof (globalThis == null ? void 0 : globalThis.Linking) < "u" && await globalThis.Linking.openURL(i4);
    } catch (o5) {
      console.error(o5);
    }
  }
  __name(Ti, "Ti");
  function Br2(t, e2, n5) {
    const r3 = `requestId=${e2}&sessionTopic=${n5}`;
    t.endsWith("/") && (t = t.slice(0, -1));
    let o5 = `${t}`;
    if (t.startsWith("https://t.me")) {
      const s3 = t.includes("?") ? "&startapp=" : "?startapp=";
      o5 = `${o5}${s3}${Or2(r3, true)}`;
    } else o5 = `${o5}/wc?${r3}`;
    return o5;
  }
  __name(Br2, "Br");
  function Ir2(t) {
    let e2 = "_self";
    Sr2() ? e2 = "_top" : (Ar2() || t.startsWith("https://") || t.startsWith("http://")) && (e2 = "_blank"), window.open(t, e2, "noreferrer noopener");
  }
  __name(Ir2, "Ir");
  async function Ci(t, e2) {
    let n5 = "";
    try {
      if (Wt2() && (n5 = localStorage.getItem(e2), n5)) return n5;
      n5 = await t.getItem(e2);
    } catch (r3) {
      console.error(r3);
    }
    return n5;
  }
  __name(Ci, "Ci");
  function ji(t, e2) {
    if (!t.includes(e2)) return null;
    const n5 = t.split(/([&,?,=])/), r3 = n5.indexOf(e2);
    return n5[r3 + 2];
  }
  __name(ji, "ji");
  function Li() {
    return typeof crypto < "u" && crypto != null && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, (t) => {
      const e2 = Math.random() * 16 | 0;
      return (t === "x" ? e2 : e2 & 3 | 8).toString(16);
    });
  }
  __name(Li, "Li");
  function ki() {
    return typeof process < "u" && process.env.IS_VITEST === "true";
  }
  __name(ki, "ki");
  function Ar2() {
    return typeof window < "u" && (!!window.TelegramWebviewProxy || !!window.Telegram || !!window.TelegramWebviewProxyProto);
  }
  __name(Ar2, "Ar");
  function Sr2() {
    try {
      return window.self !== window.top;
    } catch {
      return false;
    }
  }
  __name(Sr2, "Sr");
  function Or2(t, e2 = false) {
    const n5 = Buffer.from(t).toString("base64");
    return e2 ? n5.replace(/[=]/g, "") : n5;
  }
  __name(Or2, "Or");
  function cn(t) {
    return Buffer.from(t, "base64").toString("utf-8");
  }
  __name(cn, "cn");
  function Pi(t) {
    return new Promise((e2) => setTimeout(e2, t));
  }
  __name(Pi, "Pi");
  var _Hi = class _Hi {
    constructor({ limit: e2 }) {
      lr2(this, "limit"), lr2(this, "set"), this.limit = e2, this.set = /* @__PURE__ */ new Set();
    }
    add(e2) {
      if (!this.set.has(e2)) {
        if (this.set.size >= this.limit) {
          const n5 = this.set.values().next().value;
          n5 && this.set.delete(n5);
        }
        this.set.add(e2);
      }
    }
    has(e2) {
      return this.set.has(e2);
    }
  };
  __name(_Hi, "Hi");
  var Hi = _Hi;
  var Ne2 = BigInt(2 ** 32 - 1);
  var Nr2 = BigInt(32);
  function Ur2(t, e2 = false) {
    return e2 ? { h: Number(t & Ne2), l: Number(t >> Nr2 & Ne2) } : { h: Number(t >> Nr2 & Ne2) | 0, l: Number(t & Ne2) | 0 };
  }
  __name(Ur2, "Ur");
  function _r2(t, e2 = false) {
    const n5 = t.length;
    let r3 = new Uint32Array(n5), o5 = new Uint32Array(n5);
    for (let s3 = 0; s3 < n5; s3++) {
      const { h: i4, l: c6 } = Ur2(t[s3], e2);
      [r3[s3], o5[s3]] = [i4, c6];
    }
    return [r3, o5];
  }
  __name(_r2, "_r");
  var Rr2 = /* @__PURE__ */ __name((t, e2, n5) => t >>> n5, "Rr");
  var $r2 = /* @__PURE__ */ __name((t, e2, n5) => t << 32 - n5 | e2 >>> n5, "$r");
  var St2 = /* @__PURE__ */ __name((t, e2, n5) => t >>> n5 | e2 << 32 - n5, "St");
  var Ot2 = /* @__PURE__ */ __name((t, e2, n5) => t << 32 - n5 | e2 >>> n5, "Ot");
  var de2 = /* @__PURE__ */ __name((t, e2, n5) => t << 64 - n5 | e2 >>> n5 - 32, "de");
  var he2 = /* @__PURE__ */ __name((t, e2, n5) => t >>> n5 - 32 | e2 << 64 - n5, "he");
  var Di = /* @__PURE__ */ __name((t, e2) => e2, "Di");
  var Vi = /* @__PURE__ */ __name((t, e2) => t, "Vi");
  var Mi = /* @__PURE__ */ __name((t, e2, n5) => t << n5 | e2 >>> 32 - n5, "Mi");
  var Ki = /* @__PURE__ */ __name((t, e2, n5) => e2 << n5 | t >>> 32 - n5, "Ki");
  var qi = /* @__PURE__ */ __name((t, e2, n5) => e2 << n5 - 32 | t >>> 64 - n5, "qi");
  var Fi = /* @__PURE__ */ __name((t, e2, n5) => t << n5 - 32 | e2 >>> 64 - n5, "Fi");
  function dt2(t, e2, n5, r3) {
    const o5 = (e2 >>> 0) + (r3 >>> 0);
    return { h: t + n5 + (o5 / 2 ** 32 | 0) | 0, l: o5 | 0 };
  }
  __name(dt2, "dt");
  var fn = /* @__PURE__ */ __name((t, e2, n5) => (t >>> 0) + (e2 >>> 0) + (n5 >>> 0), "fn");
  var an = /* @__PURE__ */ __name((t, e2, n5, r3) => e2 + n5 + r3 + (t / 2 ** 32 | 0) | 0, "an");
  var Zi = /* @__PURE__ */ __name((t, e2, n5, r3) => (t >>> 0) + (e2 >>> 0) + (n5 >>> 0) + (r3 >>> 0), "Zi");
  var Gi = /* @__PURE__ */ __name((t, e2, n5, r3, o5) => e2 + n5 + r3 + o5 + (t / 2 ** 32 | 0) | 0, "Gi");
  var zi = /* @__PURE__ */ __name((t, e2, n5, r3, o5) => (t >>> 0) + (e2 >>> 0) + (n5 >>> 0) + (r3 >>> 0) + (o5 >>> 0), "zi");
  var Yi = /* @__PURE__ */ __name((t, e2, n5, r3, o5, s3) => e2 + n5 + r3 + o5 + s3 + (t / 2 ** 32 | 0) | 0, "Yi");
  var Xt2 = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
  function Ue2(t) {
    return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
  }
  __name(Ue2, "Ue");
  function mt(t) {
    if (!Number.isSafeInteger(t) || t < 0) throw new Error("positive integer expected, got " + t);
  }
  __name(mt, "mt");
  function ht2(t, ...e2) {
    if (!Ue2(t)) throw new Error("Uint8Array expected");
    if (e2.length > 0 && !e2.includes(t.length)) throw new Error("Uint8Array expected of length " + e2 + ", got length=" + t.length);
  }
  __name(ht2, "ht");
  function _e2(t) {
    if (typeof t != "function" || typeof t.create != "function") throw new Error("Hash should be wrapped by utils.createHasher");
    mt(t.outputLen), mt(t.blockLen);
  }
  __name(_e2, "_e");
  function Nt2(t, e2 = true) {
    if (t.destroyed) throw new Error("Hash instance has been destroyed");
    if (e2 && t.finished) throw new Error("Hash#digest() has already been called");
  }
  __name(Nt2, "Nt");
  function un(t, e2) {
    ht2(t);
    const n5 = e2.outputLen;
    if (t.length < n5) throw new Error("digestInto() expects output buffer of length at least " + n5);
  }
  __name(un, "un");
  function pe2(t) {
    return new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4));
  }
  __name(pe2, "pe");
  function lt2(...t) {
    for (let e2 = 0; e2 < t.length; e2++) t[e2].fill(0);
  }
  __name(lt2, "lt");
  function ln(t) {
    return new DataView(t.buffer, t.byteOffset, t.byteLength);
  }
  __name(ln, "ln");
  function bt2(t, e2) {
    return t << 32 - e2 | t >>> e2;
  }
  __name(bt2, "bt");
  var Tr2 = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
  function Cr2(t) {
    return t << 24 & 4278190080 | t << 8 & 16711680 | t >>> 8 & 65280 | t >>> 24 & 255;
  }
  __name(Cr2, "Cr");
  var wt2 = Tr2 ? (t) => t : (t) => Cr2(t);
  function Wi(t) {
    for (let e2 = 0; e2 < t.length; e2++) t[e2] = Cr2(t[e2]);
    return t;
  }
  __name(Wi, "Wi");
  var Ut2 = Tr2 ? (t) => t : Wi;
  var jr2 = typeof Uint8Array.from([]).toHex == "function" && typeof Uint8Array.fromHex == "function";
  var Xi = Array.from({ length: 256 }, (t, e2) => e2.toString(16).padStart(2, "0"));
  function Jt2(t) {
    if (ht2(t), jr2) return t.toHex();
    let e2 = "";
    for (let n5 = 0; n5 < t.length; n5++) e2 += Xi[t[n5]];
    return e2;
  }
  __name(Jt2, "Jt");
  var vt2 = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
  function Lr2(t) {
    if (t >= vt2._0 && t <= vt2._9) return t - vt2._0;
    if (t >= vt2.A && t <= vt2.F) return t - (vt2.A - 10);
    if (t >= vt2.a && t <= vt2.f) return t - (vt2.a - 10);
  }
  __name(Lr2, "Lr");
  function Re2(t) {
    if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
    if (jr2) return Uint8Array.fromHex(t);
    const e2 = t.length, n5 = e2 / 2;
    if (e2 % 2) throw new Error("hex string expected, got unpadded hex of length " + e2);
    const r3 = new Uint8Array(n5);
    for (let o5 = 0, s3 = 0; o5 < n5; o5++, s3 += 2) {
      const i4 = Lr2(t.charCodeAt(s3)), c6 = Lr2(t.charCodeAt(s3 + 1));
      if (i4 === void 0 || c6 === void 0) {
        const f6 = t[s3] + t[s3 + 1];
        throw new Error('hex string expected, got non-hex character "' + f6 + '" at index ' + s3);
      }
      r3[o5] = i4 * 16 + c6;
    }
    return r3;
  }
  __name(Re2, "Re");
  function kr2(t) {
    if (typeof t != "string") throw new Error("string expected");
    return new Uint8Array(new TextEncoder().encode(t));
  }
  __name(kr2, "kr");
  function pt(t) {
    return typeof t == "string" && (t = kr2(t)), ht2(t), t;
  }
  __name(pt, "pt");
  function _t2(...t) {
    let e2 = 0;
    for (let r3 = 0; r3 < t.length; r3++) {
      const o5 = t[r3];
      ht2(o5), e2 += o5.length;
    }
    const n5 = new Uint8Array(e2);
    for (let r3 = 0, o5 = 0; r3 < t.length; r3++) {
      const s3 = t[r3];
      n5.set(s3, o5), o5 += s3.length;
    }
    return n5;
  }
  __name(_t2, "_t");
  var _$e = class _$e {
  };
  __name(_$e, "$e");
  var $e2 = _$e;
  function ge2(t) {
    const e2 = /* @__PURE__ */ __name((r3) => t().update(pt(r3)).digest(), "e"), n5 = t();
    return e2.outputLen = n5.outputLen, e2.blockLen = n5.blockLen, e2.create = () => t(), e2;
  }
  __name(ge2, "ge");
  function Ji(t) {
    const e2 = /* @__PURE__ */ __name((r3, o5) => t(o5).update(pt(r3)).digest(), "e"), n5 = t({});
    return e2.outputLen = n5.outputLen, e2.blockLen = n5.blockLen, e2.create = (r3) => t(r3), e2;
  }
  __name(Ji, "Ji");
  function Mt2(t = 32) {
    if (Xt2 && typeof Xt2.getRandomValues == "function") return Xt2.getRandomValues(new Uint8Array(t));
    if (Xt2 && typeof Xt2.randomBytes == "function") return Uint8Array.from(Xt2.randomBytes(t));
    throw new Error("crypto.getRandomValues must be defined");
  }
  __name(Mt2, "Mt");
  var Qi = BigInt(0);
  var be2 = BigInt(1);
  var tc = BigInt(2);
  var ec = BigInt(7);
  var nc = BigInt(256);
  var rc = BigInt(113);
  var Pr2 = [];
  var Hr2 = [];
  var Dr2 = [];
  for (let t = 0, e2 = be2, n5 = 1, r3 = 0; t < 24; t++) {
    [n5, r3] = [r3, (2 * n5 + 3 * r3) % 5], Pr2.push(2 * (5 * r3 + n5)), Hr2.push((t + 1) * (t + 2) / 2 % 64);
    let o5 = Qi;
    for (let s3 = 0; s3 < 7; s3++) e2 = (e2 << be2 ^ (e2 >> ec) * rc) % nc, e2 & tc && (o5 ^= be2 << (be2 << BigInt(s3)) - be2);
    Dr2.push(o5);
  }
  var Vr2 = _r2(Dr2, true);
  var oc = Vr2[0];
  var sc = Vr2[1];
  var Mr2 = /* @__PURE__ */ __name((t, e2, n5) => n5 > 32 ? qi(t, e2, n5) : Mi(t, e2, n5), "Mr");
  var Kr2 = /* @__PURE__ */ __name((t, e2, n5) => n5 > 32 ? Fi(t, e2, n5) : Ki(t, e2, n5), "Kr");
  function ic(t, e2 = 24) {
    const n5 = new Uint32Array(10);
    for (let r3 = 24 - e2; r3 < 24; r3++) {
      for (let i4 = 0; i4 < 10; i4++) n5[i4] = t[i4] ^ t[i4 + 10] ^ t[i4 + 20] ^ t[i4 + 30] ^ t[i4 + 40];
      for (let i4 = 0; i4 < 10; i4 += 2) {
        const c6 = (i4 + 8) % 10, f6 = (i4 + 2) % 10, u2 = n5[f6], a4 = n5[f6 + 1], l7 = Mr2(u2, a4, 1) ^ n5[c6], d4 = Kr2(u2, a4, 1) ^ n5[c6 + 1];
        for (let h6 = 0; h6 < 50; h6 += 10) t[i4 + h6] ^= l7, t[i4 + h6 + 1] ^= d4;
      }
      let o5 = t[2], s3 = t[3];
      for (let i4 = 0; i4 < 24; i4++) {
        const c6 = Hr2[i4], f6 = Mr2(o5, s3, c6), u2 = Kr2(o5, s3, c6), a4 = Pr2[i4];
        o5 = t[a4], s3 = t[a4 + 1], t[a4] = f6, t[a4 + 1] = u2;
      }
      for (let i4 = 0; i4 < 50; i4 += 10) {
        for (let c6 = 0; c6 < 10; c6++) n5[c6] = t[i4 + c6];
        for (let c6 = 0; c6 < 10; c6++) t[i4 + c6] ^= ~n5[(c6 + 2) % 10] & n5[(c6 + 4) % 10];
      }
      t[0] ^= oc[r3], t[1] ^= sc[r3];
    }
    lt2(n5);
  }
  __name(ic, "ic");
  var _Jn2 = class _Jn2 extends $e2 {
    constructor(e2, n5, r3, o5 = false, s3 = 24) {
      if (super(), this.pos = 0, this.posOut = 0, this.finished = false, this.destroyed = false, this.enableXOF = false, this.blockLen = e2, this.suffix = n5, this.outputLen = r3, this.enableXOF = o5, this.rounds = s3, mt(r3), !(0 < e2 && e2 < 200)) throw new Error("only keccak-f1600 function is supported");
      this.state = new Uint8Array(200), this.state32 = pe2(this.state);
    }
    clone() {
      return this._cloneInto();
    }
    keccak() {
      Ut2(this.state32), ic(this.state32, this.rounds), Ut2(this.state32), this.posOut = 0, this.pos = 0;
    }
    update(e2) {
      Nt2(this), e2 = pt(e2), ht2(e2);
      const { blockLen: n5, state: r3 } = this, o5 = e2.length;
      for (let s3 = 0; s3 < o5; ) {
        const i4 = Math.min(n5 - this.pos, o5 - s3);
        for (let c6 = 0; c6 < i4; c6++) r3[this.pos++] ^= e2[s3++];
        this.pos === n5 && this.keccak();
      }
      return this;
    }
    finish() {
      if (this.finished) return;
      this.finished = true;
      const { state: e2, suffix: n5, pos: r3, blockLen: o5 } = this;
      e2[r3] ^= n5, (n5 & 128) !== 0 && r3 === o5 - 1 && this.keccak(), e2[o5 - 1] ^= 128, this.keccak();
    }
    writeInto(e2) {
      Nt2(this, false), ht2(e2), this.finish();
      const n5 = this.state, { blockLen: r3 } = this;
      for (let o5 = 0, s3 = e2.length; o5 < s3; ) {
        this.posOut >= r3 && this.keccak();
        const i4 = Math.min(r3 - this.posOut, s3 - o5);
        e2.set(n5.subarray(this.posOut, this.posOut + i4), o5), this.posOut += i4, o5 += i4;
      }
      return e2;
    }
    xofInto(e2) {
      if (!this.enableXOF) throw new Error("XOF is not possible for this instance");
      return this.writeInto(e2);
    }
    xof(e2) {
      return mt(e2), this.xofInto(new Uint8Array(e2));
    }
    digestInto(e2) {
      if (un(e2, this), this.finished) throw new Error("digest() was already called");
      return this.writeInto(e2), this.destroy(), e2;
    }
    digest() {
      return this.digestInto(new Uint8Array(this.outputLen));
    }
    destroy() {
      this.destroyed = true, lt2(this.state);
    }
    _cloneInto(e2) {
      const { blockLen: n5, suffix: r3, outputLen: o5, rounds: s3, enableXOF: i4 } = this;
      return e2 || (e2 = new _Jn2(n5, r3, o5, i4, s3)), e2.state32.set(this.state32), e2.pos = this.pos, e2.posOut = this.posOut, e2.finished = this.finished, e2.rounds = s3, e2.suffix = r3, e2.outputLen = o5, e2.enableXOF = i4, e2.destroyed = this.destroyed, e2;
    }
  };
  __name(_Jn2, "Jn");
  var Jn2 = _Jn2;
  var cc = /* @__PURE__ */ __name((t, e2, n5) => ge2(() => new Jn2(e2, t, n5)), "cc");
  var fc = cc(1, 136, 256 / 8);
  function ac(t, e2, n5, r3) {
    if (typeof t.setBigUint64 == "function") return t.setBigUint64(e2, n5, r3);
    const o5 = BigInt(32), s3 = BigInt(4294967295), i4 = Number(n5 >> o5 & s3), c6 = Number(n5 & s3), f6 = r3 ? 4 : 0, u2 = r3 ? 0 : 4;
    t.setUint32(e2 + f6, i4, r3), t.setUint32(e2 + u2, c6, r3);
  }
  __name(ac, "ac");
  function uc(t, e2, n5) {
    return t & e2 ^ ~t & n5;
  }
  __name(uc, "uc");
  function lc(t, e2, n5) {
    return t & e2 ^ t & n5 ^ e2 & n5;
  }
  __name(lc, "lc");
  var _qr = class _qr extends $e2 {
    constructor(e2, n5, r3, o5) {
      super(), this.finished = false, this.length = 0, this.pos = 0, this.destroyed = false, this.blockLen = e2, this.outputLen = n5, this.padOffset = r3, this.isLE = o5, this.buffer = new Uint8Array(e2), this.view = ln(this.buffer);
    }
    update(e2) {
      Nt2(this), e2 = pt(e2), ht2(e2);
      const { view: n5, buffer: r3, blockLen: o5 } = this, s3 = e2.length;
      for (let i4 = 0; i4 < s3; ) {
        const c6 = Math.min(o5 - this.pos, s3 - i4);
        if (c6 === o5) {
          const f6 = ln(e2);
          for (; o5 <= s3 - i4; i4 += o5) this.process(f6, i4);
          continue;
        }
        r3.set(e2.subarray(i4, i4 + c6), this.pos), this.pos += c6, i4 += c6, this.pos === o5 && (this.process(n5, 0), this.pos = 0);
      }
      return this.length += e2.length, this.roundClean(), this;
    }
    digestInto(e2) {
      Nt2(this), un(e2, this), this.finished = true;
      const { buffer: n5, view: r3, blockLen: o5, isLE: s3 } = this;
      let { pos: i4 } = this;
      n5[i4++] = 128, lt2(this.buffer.subarray(i4)), this.padOffset > o5 - i4 && (this.process(r3, 0), i4 = 0);
      for (let l7 = i4; l7 < o5; l7++) n5[l7] = 0;
      ac(r3, o5 - 8, BigInt(this.length * 8), s3), this.process(r3, 0);
      const c6 = ln(e2), f6 = this.outputLen;
      if (f6 % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
      const u2 = f6 / 4, a4 = this.get();
      if (u2 > a4.length) throw new Error("_sha2: outputLen bigger than state");
      for (let l7 = 0; l7 < u2; l7++) c6.setUint32(4 * l7, a4[l7], s3);
    }
    digest() {
      const { buffer: e2, outputLen: n5 } = this;
      this.digestInto(e2);
      const r3 = e2.slice(0, n5);
      return this.destroy(), r3;
    }
    _cloneInto(e2) {
      e2 || (e2 = new this.constructor()), e2.set(...this.get());
      const { blockLen: n5, buffer: r3, length: o5, finished: s3, destroyed: i4, pos: c6 } = this;
      return e2.destroyed = i4, e2.finished = s3, e2.length = o5, e2.pos = c6, o5 % n5 && e2.buffer.set(r3), e2;
    }
    clone() {
      return this._cloneInto();
    }
  };
  __name(_qr, "qr");
  var qr2 = _qr;
  var Rt2 = Uint32Array.from([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]);
  var X2 = Uint32Array.from([3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428]);
  var J3 = Uint32Array.from([1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209]);
  var dc = Uint32Array.from([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]);
  var $t2 = new Uint32Array(64);
  var _hc = class _hc extends qr2 {
    constructor(e2 = 32) {
      super(64, e2, 8, false), this.A = Rt2[0] | 0, this.B = Rt2[1] | 0, this.C = Rt2[2] | 0, this.D = Rt2[3] | 0, this.E = Rt2[4] | 0, this.F = Rt2[5] | 0, this.G = Rt2[6] | 0, this.H = Rt2[7] | 0;
    }
    get() {
      const { A: e2, B: n5, C: r3, D: o5, E: s3, F: i4, G: c6, H: f6 } = this;
      return [e2, n5, r3, o5, s3, i4, c6, f6];
    }
    set(e2, n5, r3, o5, s3, i4, c6, f6) {
      this.A = e2 | 0, this.B = n5 | 0, this.C = r3 | 0, this.D = o5 | 0, this.E = s3 | 0, this.F = i4 | 0, this.G = c6 | 0, this.H = f6 | 0;
    }
    process(e2, n5) {
      for (let l7 = 0; l7 < 16; l7++, n5 += 4) $t2[l7] = e2.getUint32(n5, false);
      for (let l7 = 16; l7 < 64; l7++) {
        const d4 = $t2[l7 - 15], h6 = $t2[l7 - 2], y5 = bt2(d4, 7) ^ bt2(d4, 18) ^ d4 >>> 3, m3 = bt2(h6, 17) ^ bt2(h6, 19) ^ h6 >>> 10;
        $t2[l7] = m3 + $t2[l7 - 7] + y5 + $t2[l7 - 16] | 0;
      }
      let { A: r3, B: o5, C: s3, D: i4, E: c6, F: f6, G: u2, H: a4 } = this;
      for (let l7 = 0; l7 < 64; l7++) {
        const d4 = bt2(c6, 6) ^ bt2(c6, 11) ^ bt2(c6, 25), h6 = a4 + d4 + uc(c6, f6, u2) + dc[l7] + $t2[l7] | 0, m3 = (bt2(r3, 2) ^ bt2(r3, 13) ^ bt2(r3, 22)) + lc(r3, o5, s3) | 0;
        a4 = u2, u2 = f6, f6 = c6, c6 = i4 + h6 | 0, i4 = s3, s3 = o5, o5 = r3, r3 = h6 + m3 | 0;
      }
      r3 = r3 + this.A | 0, o5 = o5 + this.B | 0, s3 = s3 + this.C | 0, i4 = i4 + this.D | 0, c6 = c6 + this.E | 0, f6 = f6 + this.F | 0, u2 = u2 + this.G | 0, a4 = a4 + this.H | 0, this.set(r3, o5, s3, i4, c6, f6, u2, a4);
    }
    roundClean() {
      lt2($t2);
    }
    destroy() {
      this.set(0, 0, 0, 0, 0, 0, 0, 0), lt2(this.buffer);
    }
  };
  __name(_hc, "hc");
  var hc = _hc;
  var Fr2 = _r2(["0x428a2f98d728ae22", "0x7137449123ef65cd", "0xb5c0fbcfec4d3b2f", "0xe9b5dba58189dbbc", "0x3956c25bf348b538", "0x59f111f1b605d019", "0x923f82a4af194f9b", "0xab1c5ed5da6d8118", "0xd807aa98a3030242", "0x12835b0145706fbe", "0x243185be4ee4b28c", "0x550c7dc3d5ffb4e2", "0x72be5d74f27b896f", "0x80deb1fe3b1696b1", "0x9bdc06a725c71235", "0xc19bf174cf692694", "0xe49b69c19ef14ad2", "0xefbe4786384f25e3", "0x0fc19dc68b8cd5b5", "0x240ca1cc77ac9c65", "0x2de92c6f592b0275", "0x4a7484aa6ea6e483", "0x5cb0a9dcbd41fbd4", "0x76f988da831153b5", "0x983e5152ee66dfab", "0xa831c66d2db43210", "0xb00327c898fb213f", "0xbf597fc7beef0ee4", "0xc6e00bf33da88fc2", "0xd5a79147930aa725", "0x06ca6351e003826f", "0x142929670a0e6e70", "0x27b70a8546d22ffc", "0x2e1b21385c26c926", "0x4d2c6dfc5ac42aed", "0x53380d139d95b3df", "0x650a73548baf63de", "0x766a0abb3c77b2a8", "0x81c2c92e47edaee6", "0x92722c851482353b", "0xa2bfe8a14cf10364", "0xa81a664bbc423001", "0xc24b8b70d0f89791", "0xc76c51a30654be30", "0xd192e819d6ef5218", "0xd69906245565a910", "0xf40e35855771202a", "0x106aa07032bbd1b8", "0x19a4c116b8d2d0c8", "0x1e376c085141ab53", "0x2748774cdf8eeb99", "0x34b0bcb5e19b48a8", "0x391c0cb3c5c95a63", "0x4ed8aa4ae3418acb", "0x5b9cca4f7763e373", "0x682e6ff3d6b2b8a3", "0x748f82ee5defb2fc", "0x78a5636f43172f60", "0x84c87814a1f0ab72", "0x8cc702081a6439ec", "0x90befffa23631e28", "0xa4506cebde82bde9", "0xbef9a3f7b2c67915", "0xc67178f2e372532b", "0xca273eceea26619c", "0xd186b8c721c0c207", "0xeada7dd6cde0eb1e", "0xf57d4f7fee6ed178", "0x06f067aa72176fba", "0x0a637dc5a2c898a6", "0x113f9804bef90dae", "0x1b710b35131c471b", "0x28db77f523047d84", "0x32caab7b40c72493", "0x3c9ebe0a15c9bebc", "0x431d67c49c100d4c", "0x4cc5d4becb3e42b6", "0x597f299cfc657e2a", "0x5fcb6fab3ad6faec", "0x6c44198c4a475817"].map((t) => BigInt(t)));
  var pc = Fr2[0];
  var gc = Fr2[1];
  var Tt2 = new Uint32Array(80);
  var Ct = new Uint32Array(80);
  var _dn = class _dn extends qr2 {
    constructor(e2 = 64) {
      super(128, e2, 16, false), this.Ah = J3[0] | 0, this.Al = J3[1] | 0, this.Bh = J3[2] | 0, this.Bl = J3[3] | 0, this.Ch = J3[4] | 0, this.Cl = J3[5] | 0, this.Dh = J3[6] | 0, this.Dl = J3[7] | 0, this.Eh = J3[8] | 0, this.El = J3[9] | 0, this.Fh = J3[10] | 0, this.Fl = J3[11] | 0, this.Gh = J3[12] | 0, this.Gl = J3[13] | 0, this.Hh = J3[14] | 0, this.Hl = J3[15] | 0;
    }
    get() {
      const { Ah: e2, Al: n5, Bh: r3, Bl: o5, Ch: s3, Cl: i4, Dh: c6, Dl: f6, Eh: u2, El: a4, Fh: l7, Fl: d4, Gh: h6, Gl: y5, Hh: m3, Hl: w4 } = this;
      return [e2, n5, r3, o5, s3, i4, c6, f6, u2, a4, l7, d4, h6, y5, m3, w4];
    }
    set(e2, n5, r3, o5, s3, i4, c6, f6, u2, a4, l7, d4, h6, y5, m3, w4) {
      this.Ah = e2 | 0, this.Al = n5 | 0, this.Bh = r3 | 0, this.Bl = o5 | 0, this.Ch = s3 | 0, this.Cl = i4 | 0, this.Dh = c6 | 0, this.Dl = f6 | 0, this.Eh = u2 | 0, this.El = a4 | 0, this.Fh = l7 | 0, this.Fl = d4 | 0, this.Gh = h6 | 0, this.Gl = y5 | 0, this.Hh = m3 | 0, this.Hl = w4 | 0;
    }
    process(e2, n5) {
      for (let R4 = 0; R4 < 16; R4++, n5 += 4) Tt2[R4] = e2.getUint32(n5), Ct[R4] = e2.getUint32(n5 += 4);
      for (let R4 = 16; R4 < 80; R4++) {
        const Z2 = Tt2[R4 - 15] | 0, H3 = Ct[R4 - 15] | 0, j7 = St2(Z2, H3, 1) ^ St2(Z2, H3, 8) ^ Rr2(Z2, H3, 7), L3 = Ot2(Z2, H3, 1) ^ Ot2(Z2, H3, 8) ^ $r2(Z2, H3, 7), k6 = Tt2[R4 - 2] | 0, O6 = Ct[R4 - 2] | 0, T4 = St2(k6, O6, 19) ^ de2(k6, O6, 61) ^ Rr2(k6, O6, 6), C5 = Ot2(k6, O6, 19) ^ he2(k6, O6, 61) ^ $r2(k6, O6, 6), _5 = Zi(L3, C5, Ct[R4 - 7], Ct[R4 - 16]), p5 = Gi(_5, j7, T4, Tt2[R4 - 7], Tt2[R4 - 16]);
        Tt2[R4] = p5 | 0, Ct[R4] = _5 | 0;
      }
      let { Ah: r3, Al: o5, Bh: s3, Bl: i4, Ch: c6, Cl: f6, Dh: u2, Dl: a4, Eh: l7, El: d4, Fh: h6, Fl: y5, Gh: m3, Gl: w4, Hh: U3, Hl: F2 } = this;
      for (let R4 = 0; R4 < 80; R4++) {
        const Z2 = St2(l7, d4, 14) ^ St2(l7, d4, 18) ^ de2(l7, d4, 41), H3 = Ot2(l7, d4, 14) ^ Ot2(l7, d4, 18) ^ he2(l7, d4, 41), j7 = l7 & h6 ^ ~l7 & m3, L3 = d4 & y5 ^ ~d4 & w4, k6 = zi(F2, H3, L3, gc[R4], Ct[R4]), O6 = Yi(k6, U3, Z2, j7, pc[R4], Tt2[R4]), T4 = k6 | 0, C5 = St2(r3, o5, 28) ^ de2(r3, o5, 34) ^ de2(r3, o5, 39), _5 = Ot2(r3, o5, 28) ^ he2(r3, o5, 34) ^ he2(r3, o5, 39), p5 = r3 & s3 ^ r3 & c6 ^ s3 & c6, b6 = o5 & i4 ^ o5 & f6 ^ i4 & f6;
        U3 = m3 | 0, F2 = w4 | 0, m3 = h6 | 0, w4 = y5 | 0, h6 = l7 | 0, y5 = d4 | 0, { h: l7, l: d4 } = dt2(u2 | 0, a4 | 0, O6 | 0, T4 | 0), u2 = c6 | 0, a4 = f6 | 0, c6 = s3 | 0, f6 = i4 | 0, s3 = r3 | 0, i4 = o5 | 0;
        const g4 = fn(T4, _5, b6);
        r3 = an(g4, O6, C5, p5), o5 = g4 | 0;
      }
      ({ h: r3, l: o5 } = dt2(this.Ah | 0, this.Al | 0, r3 | 0, o5 | 0)), { h: s3, l: i4 } = dt2(this.Bh | 0, this.Bl | 0, s3 | 0, i4 | 0), { h: c6, l: f6 } = dt2(this.Ch | 0, this.Cl | 0, c6 | 0, f6 | 0), { h: u2, l: a4 } = dt2(this.Dh | 0, this.Dl | 0, u2 | 0, a4 | 0), { h: l7, l: d4 } = dt2(this.Eh | 0, this.El | 0, l7 | 0, d4 | 0), { h: h6, l: y5 } = dt2(this.Fh | 0, this.Fl | 0, h6 | 0, y5 | 0), { h: m3, l: w4 } = dt2(this.Gh | 0, this.Gl | 0, m3 | 0, w4 | 0), { h: U3, l: F2 } = dt2(this.Hh | 0, this.Hl | 0, U3 | 0, F2 | 0), this.set(r3, o5, s3, i4, c6, f6, u2, a4, l7, d4, h6, y5, m3, w4, U3, F2);
    }
    roundClean() {
      lt2(Tt2, Ct);
    }
    destroy() {
      lt2(this.buffer), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
  };
  __name(_dn, "dn");
  var dn = _dn;
  var _bc = class _bc extends dn {
    constructor() {
      super(48), this.Ah = X2[0] | 0, this.Al = X2[1] | 0, this.Bh = X2[2] | 0, this.Bl = X2[3] | 0, this.Ch = X2[4] | 0, this.Cl = X2[5] | 0, this.Dh = X2[6] | 0, this.Dl = X2[7] | 0, this.Eh = X2[8] | 0, this.El = X2[9] | 0, this.Fh = X2[10] | 0, this.Fl = X2[11] | 0, this.Gh = X2[12] | 0, this.Gl = X2[13] | 0, this.Hh = X2[14] | 0, this.Hl = X2[15] | 0;
    }
  };
  __name(_bc, "bc");
  var bc = _bc;
  var Q2 = Uint32Array.from([573645204, 4230739756, 2673172387, 3360449730, 596883563, 1867755857, 2520282905, 1497426621, 2519219938, 2827943907, 3193839141, 1401305490, 721525244, 746961066, 246885852, 2177182882]);
  var _yc = class _yc extends dn {
    constructor() {
      super(32), this.Ah = Q2[0] | 0, this.Al = Q2[1] | 0, this.Bh = Q2[2] | 0, this.Bl = Q2[3] | 0, this.Ch = Q2[4] | 0, this.Cl = Q2[5] | 0, this.Dh = Q2[6] | 0, this.Dl = Q2[7] | 0, this.Eh = Q2[8] | 0, this.El = Q2[9] | 0, this.Fh = Q2[10] | 0, this.Fl = Q2[11] | 0, this.Gh = Q2[12] | 0, this.Gl = Q2[13] | 0, this.Hh = Q2[14] | 0, this.Hl = Q2[15] | 0;
    }
  };
  __name(_yc, "yc");
  var yc = _yc;
  var Te2 = ge2(() => new hc());
  var mc = ge2(() => new dn());
  var wc = ge2(() => new bc());
  var vc = ge2(() => new yc());
  var xc = Uint8Array.from([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3, 11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6, 7, 1, 9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8, 9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13, 2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9, 12, 5, 1, 15, 14, 13, 4, 10, 0, 7, 6, 3, 9, 2, 8, 11, 13, 11, 7, 14, 12, 1, 3, 9, 5, 0, 15, 4, 8, 6, 2, 10, 6, 15, 14, 9, 11, 3, 0, 8, 12, 2, 13, 7, 1, 4, 10, 5, 10, 2, 8, 4, 7, 6, 1, 5, 15, 11, 9, 14, 3, 12, 13, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3, 11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6, 7, 1, 9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8, 9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13, 2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9]);
  var z3 = Uint32Array.from([4089235720, 1779033703, 2227873595, 3144134277, 4271175723, 1013904242, 1595750129, 2773480762, 2917565137, 1359893119, 725511199, 2600822924, 4215389547, 528734635, 327033209, 1541459225]);
  var S3 = new Uint32Array(32);
  function jt2(t, e2, n5, r3, o5, s3) {
    const i4 = o5[s3], c6 = o5[s3 + 1];
    let f6 = S3[2 * t], u2 = S3[2 * t + 1], a4 = S3[2 * e2], l7 = S3[2 * e2 + 1], d4 = S3[2 * n5], h6 = S3[2 * n5 + 1], y5 = S3[2 * r3], m3 = S3[2 * r3 + 1], w4 = fn(f6, a4, i4);
    u2 = an(w4, u2, l7, c6), f6 = w4 | 0, { Dh: m3, Dl: y5 } = { Dh: m3 ^ u2, Dl: y5 ^ f6 }, { Dh: m3, Dl: y5 } = { Dh: Di(m3, y5), Dl: Vi(m3) }, { h: h6, l: d4 } = dt2(h6, d4, m3, y5), { Bh: l7, Bl: a4 } = { Bh: l7 ^ h6, Bl: a4 ^ d4 }, { Bh: l7, Bl: a4 } = { Bh: St2(l7, a4, 24), Bl: Ot2(l7, a4, 24) }, S3[2 * t] = f6, S3[2 * t + 1] = u2, S3[2 * e2] = a4, S3[2 * e2 + 1] = l7, S3[2 * n5] = d4, S3[2 * n5 + 1] = h6, S3[2 * r3] = y5, S3[2 * r3 + 1] = m3;
  }
  __name(jt2, "jt");
  function Lt2(t, e2, n5, r3, o5, s3) {
    const i4 = o5[s3], c6 = o5[s3 + 1];
    let f6 = S3[2 * t], u2 = S3[2 * t + 1], a4 = S3[2 * e2], l7 = S3[2 * e2 + 1], d4 = S3[2 * n5], h6 = S3[2 * n5 + 1], y5 = S3[2 * r3], m3 = S3[2 * r3 + 1], w4 = fn(f6, a4, i4);
    u2 = an(w4, u2, l7, c6), f6 = w4 | 0, { Dh: m3, Dl: y5 } = { Dh: m3 ^ u2, Dl: y5 ^ f6 }, { Dh: m3, Dl: y5 } = { Dh: St2(m3, y5, 16), Dl: Ot2(m3, y5, 16) }, { h: h6, l: d4 } = dt2(h6, d4, m3, y5), { Bh: l7, Bl: a4 } = { Bh: l7 ^ h6, Bl: a4 ^ d4 }, { Bh: l7, Bl: a4 } = { Bh: de2(l7, a4, 63), Bl: he2(l7, a4, 63) }, S3[2 * t] = f6, S3[2 * t + 1] = u2, S3[2 * e2] = a4, S3[2 * e2 + 1] = l7, S3[2 * n5] = d4, S3[2 * n5 + 1] = h6, S3[2 * r3] = y5, S3[2 * r3 + 1] = m3;
  }
  __name(Lt2, "Lt");
  function Ec(t, e2 = {}, n5, r3, o5) {
    if (mt(n5), t < 0 || t > n5) throw new Error("outputLen bigger than keyLen");
    const { key: s3, salt: i4, personalization: c6 } = e2;
    if (s3 !== void 0 && (s3.length < 1 || s3.length > n5)) throw new Error("key length must be undefined or 1.." + n5);
    if (i4 !== void 0 && i4.length !== r3) throw new Error("salt must be undefined or " + r3);
    if (c6 !== void 0 && c6.length !== o5) throw new Error("personalization must be undefined or " + o5);
  }
  __name(Ec, "Ec");
  var _Bc = class _Bc extends $e2 {
    constructor(e2, n5) {
      super(), this.finished = false, this.destroyed = false, this.length = 0, this.pos = 0, mt(e2), mt(n5), this.blockLen = e2, this.outputLen = n5, this.buffer = new Uint8Array(e2), this.buffer32 = pe2(this.buffer);
    }
    update(e2) {
      Nt2(this), e2 = pt(e2), ht2(e2);
      const { blockLen: n5, buffer: r3, buffer32: o5 } = this, s3 = e2.length, i4 = e2.byteOffset, c6 = e2.buffer;
      for (let f6 = 0; f6 < s3; ) {
        this.pos === n5 && (Ut2(o5), this.compress(o5, 0, false), Ut2(o5), this.pos = 0);
        const u2 = Math.min(n5 - this.pos, s3 - f6), a4 = i4 + f6;
        if (u2 === n5 && !(a4 % 4) && f6 + u2 < s3) {
          const l7 = new Uint32Array(c6, a4, Math.floor((s3 - f6) / 4));
          Ut2(l7);
          for (let d4 = 0; f6 + n5 < s3; d4 += o5.length, f6 += n5) this.length += n5, this.compress(l7, d4, false);
          Ut2(l7);
          continue;
        }
        r3.set(e2.subarray(f6, f6 + u2), this.pos), this.pos += u2, this.length += u2, f6 += u2;
      }
      return this;
    }
    digestInto(e2) {
      Nt2(this), un(e2, this);
      const { pos: n5, buffer32: r3 } = this;
      this.finished = true, lt2(this.buffer.subarray(n5)), Ut2(r3), this.compress(r3, 0, true), Ut2(r3);
      const o5 = pe2(e2);
      this.get().forEach((s3, i4) => o5[i4] = wt2(s3));
    }
    digest() {
      const { buffer: e2, outputLen: n5 } = this;
      this.digestInto(e2);
      const r3 = e2.slice(0, n5);
      return this.destroy(), r3;
    }
    _cloneInto(e2) {
      const { buffer: n5, length: r3, finished: o5, destroyed: s3, outputLen: i4, pos: c6 } = this;
      return e2 || (e2 = new this.constructor({ dkLen: i4 })), e2.set(...this.get()), e2.buffer.set(n5), e2.destroyed = s3, e2.finished = o5, e2.length = r3, e2.pos = c6, e2.outputLen = i4, e2;
    }
    clone() {
      return this._cloneInto();
    }
  };
  __name(_Bc, "Bc");
  var Bc = _Bc;
  var _Ic = class _Ic extends Bc {
    constructor(e2 = {}) {
      const n5 = e2.dkLen === void 0 ? 64 : e2.dkLen;
      super(128, n5), this.v0l = z3[0] | 0, this.v0h = z3[1] | 0, this.v1l = z3[2] | 0, this.v1h = z3[3] | 0, this.v2l = z3[4] | 0, this.v2h = z3[5] | 0, this.v3l = z3[6] | 0, this.v3h = z3[7] | 0, this.v4l = z3[8] | 0, this.v4h = z3[9] | 0, this.v5l = z3[10] | 0, this.v5h = z3[11] | 0, this.v6l = z3[12] | 0, this.v6h = z3[13] | 0, this.v7l = z3[14] | 0, this.v7h = z3[15] | 0, Ec(n5, e2, 64, 16, 16);
      let { key: r3, personalization: o5, salt: s3 } = e2, i4 = 0;
      if (r3 !== void 0 && (r3 = pt(r3), i4 = r3.length), this.v0l ^= this.outputLen | i4 << 8 | 65536 | 1 << 24, s3 !== void 0) {
        s3 = pt(s3);
        const c6 = pe2(s3);
        this.v4l ^= wt2(c6[0]), this.v4h ^= wt2(c6[1]), this.v5l ^= wt2(c6[2]), this.v5h ^= wt2(c6[3]);
      }
      if (o5 !== void 0) {
        o5 = pt(o5);
        const c6 = pe2(o5);
        this.v6l ^= wt2(c6[0]), this.v6h ^= wt2(c6[1]), this.v7l ^= wt2(c6[2]), this.v7h ^= wt2(c6[3]);
      }
      if (r3 !== void 0) {
        const c6 = new Uint8Array(this.blockLen);
        c6.set(r3), this.update(c6);
      }
    }
    get() {
      let { v0l: e2, v0h: n5, v1l: r3, v1h: o5, v2l: s3, v2h: i4, v3l: c6, v3h: f6, v4l: u2, v4h: a4, v5l: l7, v5h: d4, v6l: h6, v6h: y5, v7l: m3, v7h: w4 } = this;
      return [e2, n5, r3, o5, s3, i4, c6, f6, u2, a4, l7, d4, h6, y5, m3, w4];
    }
    set(e2, n5, r3, o5, s3, i4, c6, f6, u2, a4, l7, d4, h6, y5, m3, w4) {
      this.v0l = e2 | 0, this.v0h = n5 | 0, this.v1l = r3 | 0, this.v1h = o5 | 0, this.v2l = s3 | 0, this.v2h = i4 | 0, this.v3l = c6 | 0, this.v3h = f6 | 0, this.v4l = u2 | 0, this.v4h = a4 | 0, this.v5l = l7 | 0, this.v5h = d4 | 0, this.v6l = h6 | 0, this.v6h = y5 | 0, this.v7l = m3 | 0, this.v7h = w4 | 0;
    }
    compress(e2, n5, r3) {
      this.get().forEach((f6, u2) => S3[u2] = f6), S3.set(z3, 16);
      let { h: o5, l: s3 } = Ur2(BigInt(this.length));
      S3[24] = z3[8] ^ s3, S3[25] = z3[9] ^ o5, r3 && (S3[28] = ~S3[28], S3[29] = ~S3[29]);
      let i4 = 0;
      const c6 = xc;
      for (let f6 = 0; f6 < 12; f6++) jt2(0, 4, 8, 12, e2, n5 + 2 * c6[i4++]), Lt2(0, 4, 8, 12, e2, n5 + 2 * c6[i4++]), jt2(1, 5, 9, 13, e2, n5 + 2 * c6[i4++]), Lt2(1, 5, 9, 13, e2, n5 + 2 * c6[i4++]), jt2(2, 6, 10, 14, e2, n5 + 2 * c6[i4++]), Lt2(2, 6, 10, 14, e2, n5 + 2 * c6[i4++]), jt2(3, 7, 11, 15, e2, n5 + 2 * c6[i4++]), Lt2(3, 7, 11, 15, e2, n5 + 2 * c6[i4++]), jt2(0, 5, 10, 15, e2, n5 + 2 * c6[i4++]), Lt2(0, 5, 10, 15, e2, n5 + 2 * c6[i4++]), jt2(1, 6, 11, 12, e2, n5 + 2 * c6[i4++]), Lt2(1, 6, 11, 12, e2, n5 + 2 * c6[i4++]), jt2(2, 7, 8, 13, e2, n5 + 2 * c6[i4++]), Lt2(2, 7, 8, 13, e2, n5 + 2 * c6[i4++]), jt2(3, 4, 9, 14, e2, n5 + 2 * c6[i4++]), Lt2(3, 4, 9, 14, e2, n5 + 2 * c6[i4++]);
      this.v0l ^= S3[0] ^ S3[16], this.v0h ^= S3[1] ^ S3[17], this.v1l ^= S3[2] ^ S3[18], this.v1h ^= S3[3] ^ S3[19], this.v2l ^= S3[4] ^ S3[20], this.v2h ^= S3[5] ^ S3[21], this.v3l ^= S3[6] ^ S3[22], this.v3h ^= S3[7] ^ S3[23], this.v4l ^= S3[8] ^ S3[24], this.v4h ^= S3[9] ^ S3[25], this.v5l ^= S3[10] ^ S3[26], this.v5h ^= S3[11] ^ S3[27], this.v6l ^= S3[12] ^ S3[28], this.v6h ^= S3[13] ^ S3[29], this.v7l ^= S3[14] ^ S3[30], this.v7h ^= S3[15] ^ S3[31], lt2(S3);
    }
    destroy() {
      this.destroyed = true, lt2(this.buffer32), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }
  };
  __name(_Ic, "Ic");
  var Ic = _Ic;
  var Ac = Ji((t) => new Ic(t));
  var Sc = "https://rpc.walletconnect.org/v1";
  function hn(t) {
    const e2 = `Ethereum Signed Message:
${t.length}`, n5 = new TextEncoder().encode(e2 + t);
    return "0x" + Buffer.from(fc(n5)).toString("hex");
  }
  __name(hn, "hn");
  async function Zr2(t, e2, n5, r3, o5, s3) {
    switch (n5.t) {
      case "eip191":
        return await Gr2(t, e2, n5.s);
      case "eip1271":
        return await zr2(t, e2, n5.s, r3, o5, s3);
      default:
        throw new Error(`verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${n5.t}`);
    }
  }
  __name(Zr2, "Zr");
  function Gr2(t, e2, n5) {
    const r3 = Signature_exports.fromHex(n5);
    return Secp256k1_exports.recoverAddress({ payload: hn(e2), signature: r3 }).toLowerCase() === t.toLowerCase();
  }
  __name(Gr2, "Gr");
  async function zr2(t, e2, n5, r3, o5, s3) {
    const i4 = Je2(r3);
    if (!i4.namespace || !i4.reference) throw new Error(`isValidEip1271Signature failed: chainId must be in CAIP-2 format, received: ${r3}`);
    try {
      const c6 = "0x1626ba7e", f6 = "0000000000000000000000000000000000000000000000000000000000000040", u2 = n5.substring(2), a4 = (u2.length / 2).toString(16).padStart(64, "0"), l7 = (e2.startsWith("0x") ? e2 : hn(e2)).substring(2), d4 = c6 + l7 + f6 + a4 + u2, h6 = await fetch(`${s3 || Sc}/?chainId=${r3}&projectId=${o5}`, { headers: { "Content-Type": "application/json" }, method: "POST", body: JSON.stringify({ id: Oc(), jsonrpc: "2.0", method: "eth_call", params: [{ to: t, data: d4 }, "latest"] }) }), { result: y5 } = await h6.json();
      return y5 ? y5.slice(0, c6.length).toLowerCase() === c6.toLowerCase() : false;
    } catch (c6) {
      return console.error("isValidEip1271Signature: ", c6), false;
    }
  }
  __name(zr2, "zr");
  function Oc() {
    return Date.now() + Math.floor(Math.random() * 1e3);
  }
  __name(Oc, "Oc");
  function Nc(t) {
    const e2 = atob(t), n5 = new Uint8Array(e2.length);
    for (let i4 = 0; i4 < e2.length; i4++) n5[i4] = e2.charCodeAt(i4);
    const r3 = n5[0];
    if (r3 === 0) throw new Error("No signatures found");
    const o5 = 1 + r3 * 64;
    if (n5.length < o5) throw new Error("Transaction data too short for claimed signature count");
    if (n5.length < 100) throw new Error("Transaction too short");
    const s3 = Buffer.from(t, "base64").slice(1, 65);
    return esm_default2.encode(s3);
  }
  __name(Nc, "Nc");
  function Uc(t) {
    const e2 = new Uint8Array(Buffer.from(t, "base64")), n5 = Array.from("TransactionData::").map((s3) => s3.charCodeAt(0)), r3 = new Uint8Array(n5.length + e2.length);
    r3.set(n5), r3.set(e2, n5.length);
    const o5 = Ac(r3, { dkLen: 32 });
    return esm_default2.encode(o5);
  }
  __name(Uc, "Uc");
  function _c(t) {
    const e2 = new Uint8Array(Te2(Yr2(t)));
    return esm_default2.encode(e2);
  }
  __name(_c, "_c");
  function Yr2(t) {
    if (t instanceof Uint8Array) return t;
    if (Array.isArray(t)) return new Uint8Array(t);
    if (typeof t == "object" && t != null && t.data) return new Uint8Array(Object.values(t.data));
    if (typeof t == "object" && t) return new Uint8Array(Object.values(t));
    throw new Error("getNearUint8ArrayFromBytes: Unexpected result type from bytes array");
  }
  __name(Yr2, "Yr");
  function Rc(t) {
    const e2 = Buffer.from(t, "base64"), n5 = decode(e2).txn;
    if (!n5) throw new Error("Invalid signed transaction: missing 'txn' field");
    const r3 = encode(n5), o5 = Buffer.from("TX"), s3 = Buffer.concat([o5, Buffer.from(r3)]), i4 = vc(s3);
    return base32.encode(i4).replace(/=+$/, "");
  }
  __name(Rc, "Rc");
  function pn(t) {
    const e2 = [];
    let n5 = BigInt(t);
    for (; n5 >= BigInt(128); ) e2.push(Number(n5 & BigInt(127) | BigInt(128))), n5 >>= BigInt(7);
    return e2.push(Number(n5)), Buffer.from(e2);
  }
  __name(pn, "pn");
  function $c(t) {
    const e2 = Buffer.from(t.signed.bodyBytes, "base64"), n5 = Buffer.from(t.signed.authInfoBytes, "base64"), r3 = Buffer.from(t.signature.signature, "base64"), o5 = [];
    o5.push(Buffer.from([10])), o5.push(pn(e2.length)), o5.push(e2), o5.push(Buffer.from([18])), o5.push(pn(n5.length)), o5.push(n5), o5.push(Buffer.from([26])), o5.push(pn(r3.length)), o5.push(r3);
    const s3 = Buffer.concat(o5), i4 = Te2(s3);
    return Buffer.from(i4).toString("hex").toUpperCase();
  }
  __name($c, "$c");
  function Tc(t) {
    var e2, n5;
    const r3 = [];
    try {
      if (typeof t == "string") return r3.push(t), r3;
      if (typeof t != "object") return r3;
      t != null && t.id && r3.push(t.id);
      const o5 = (n5 = (e2 = t?.capabilities) == null ? void 0 : e2.caip345) == null ? void 0 : n5.transactionHashes;
      o5 && r3.push(...o5);
    } catch (o5) {
      console.warn("getWalletSendCallsHashes failed: ", o5);
    }
    return r3;
  }
  __name(Tc, "Tc");
  var Cc = Object.defineProperty;
  var jc = Object.defineProperties;
  var Lc = Object.getOwnPropertyDescriptors;
  var Wr2 = Object.getOwnPropertySymbols;
  var kc = Object.prototype.hasOwnProperty;
  var Pc = Object.prototype.propertyIsEnumerable;
  var Xr2 = /* @__PURE__ */ __name((t, e2, n5) => e2 in t ? Cc(t, e2, { enumerable: true, configurable: true, writable: true, value: n5 }) : t[e2] = n5, "Xr");
  var gn2 = /* @__PURE__ */ __name((t, e2) => {
    for (var n5 in e2 || (e2 = {})) kc.call(e2, n5) && Xr2(t, n5, e2[n5]);
    if (Wr2) for (var n5 of Wr2(e2)) Pc.call(e2, n5) && Xr2(t, n5, e2[n5]);
    return t;
  }, "gn");
  var Jr2 = /* @__PURE__ */ __name((t, e2) => jc(t, Lc(e2)), "Jr");
  var Qr2 = "did:pkh:";
  var Hc = { eip155: "Ethereum", solana: "Solana", bip122: "Bitcoin" };
  var Dc = /* @__PURE__ */ __name((t) => t ? Hc[t] || t : "", "Dc");
  var ye2 = /* @__PURE__ */ __name((t) => t?.split(":"), "ye");
  var to2 = /* @__PURE__ */ __name((t) => {
    const e2 = t && ye2(t);
    if (e2) return t.includes(Qr2) ? e2[3] : e2[1];
  }, "to");
  var eo2 = /* @__PURE__ */ __name((t) => {
    const e2 = t && ye2(t);
    if (e2) return t.includes(Qr2) ? e2[2] : e2[0];
  }, "eo");
  var no2 = /* @__PURE__ */ __name((t) => {
    const e2 = t && ye2(t);
    if (e2) return e2[2] + ":" + e2[3];
  }, "no");
  var bn2 = /* @__PURE__ */ __name((t) => {
    const e2 = t && ye2(t);
    if (e2) return e2.pop();
  }, "bn");
  async function Vc(t) {
    const { cacao: e2, projectId: n5 } = t, { s: r3, p: o5 } = e2, s3 = ro2(o5, o5.iss), i4 = bn2(o5.iss);
    return await Zr2(i4, s3, r3, no2(o5.iss), n5);
  }
  __name(Vc, "Vc");
  var ro2 = /* @__PURE__ */ __name((t, e2) => {
    const n5 = eo2(e2);
    if (!n5) throw new Error("Invalid issuer: " + e2);
    const r3 = `${t.domain} wants you to sign in with your ${Dc(n5)} account:`, o5 = bn2(e2);
    if (!t.aud && !t.uri) throw new Error("Either `aud` or `uri` is required to construct the message");
    let s3 = t.statement || void 0;
    const i4 = `URI: ${t.aud || t.uri}`, c6 = `Version: ${t.version}`, f6 = `Chain ID: ${to2(e2)}`, u2 = `Nonce: ${t.nonce}`, a4 = `Issued At: ${t.iat}`, l7 = t.exp ? `Expiration Time: ${t.exp}` : void 0, d4 = t.nbf ? `Not Before: ${t.nbf}` : void 0, h6 = t.requestId ? `Request ID: ${t.requestId}` : void 0, y5 = t.resources ? `Resources:${t.resources.map((w4) => `
- ${w4}`).join("")}` : void 0, m3 = je2(t.resources);
    if (m3) {
      const w4 = kt2(m3);
      s3 = wn(s3, w4);
    }
    return [r3, o5, "", s3, "", i4, c6, f6, u2, a4, l7, d4, h6, y5].filter((w4) => w4 != null).join(`
`);
  }, "ro");
  function co2(t) {
    return Buffer.from(JSON.stringify(t)).toString("base64");
  }
  __name(co2, "co");
  function fo2(t) {
    return JSON.parse(Buffer.from(t, "base64").toString("utf-8"));
  }
  __name(fo2, "fo");
  function yt2(t) {
    if (!t) throw new Error("No recap provided, value is undefined");
    if (!t.att) throw new Error("No `att` property found");
    const e2 = Object.keys(t.att);
    if (!(e2 != null && e2.length)) throw new Error("No resources found in `att` property");
    e2.forEach((n5) => {
      const r3 = t.att[n5];
      if (Array.isArray(r3)) throw new Error(`Resource must be an object: ${n5}`);
      if (typeof r3 != "object") throw new Error(`Resource must be an object: ${n5}`);
      if (!Object.keys(r3).length) throw new Error(`Resource object is empty: ${n5}`);
      Object.keys(r3).forEach((o5) => {
        const s3 = r3[o5];
        if (!Array.isArray(s3)) throw new Error(`Ability limits ${o5} must be an array of objects, found: ${s3}`);
        if (!s3.length) throw new Error(`Value of ${o5} is empty array, must be an array with objects`);
        s3.forEach((i4) => {
          if (typeof i4 != "object") throw new Error(`Ability limits (${o5}) must be an array of objects, found: ${i4}`);
        });
      });
    });
  }
  __name(yt2, "yt");
  function ao2(t, e2, n5, r3 = {}) {
    return n5?.sort((o5, s3) => o5.localeCompare(s3)), { att: { [t]: yn2(e2, n5, r3) } };
  }
  __name(ao2, "ao");
  function yn2(t, e2, n5 = {}) {
    e2 = e2?.sort((o5, s3) => o5.localeCompare(s3));
    const r3 = e2.map((o5) => ({ [`${t}/${o5}`]: [n5] }));
    return Object.assign({}, ...r3);
  }
  __name(yn2, "yn");
  function Ce2(t) {
    return yt2(t), `urn:recap:${co2(t).replace(/=/g, "")}`;
  }
  __name(Ce2, "Ce");
  function kt2(t) {
    const e2 = fo2(t.replace("urn:recap:", ""));
    return yt2(e2), e2;
  }
  __name(kt2, "kt");
  function Zc(t, e2, n5) {
    const r3 = ao2(t, e2, n5);
    return Ce2(r3);
  }
  __name(Zc, "Zc");
  function mn2(t) {
    return t && t.includes("urn:recap:");
  }
  __name(mn2, "mn");
  function Gc(t, e2) {
    const n5 = kt2(t), r3 = kt2(e2), o5 = lo2(n5, r3);
    return Ce2(o5);
  }
  __name(Gc, "Gc");
  function lo2(t, e2) {
    yt2(t), yt2(e2);
    const n5 = Object.keys(t.att).concat(Object.keys(e2.att)).sort((o5, s3) => o5.localeCompare(s3)), r3 = { att: {} };
    return n5.forEach((o5) => {
      var s3, i4;
      Object.keys(((s3 = t.att) == null ? void 0 : s3[o5]) || {}).concat(Object.keys(((i4 = e2.att) == null ? void 0 : i4[o5]) || {})).sort((c6, f6) => c6.localeCompare(f6)).forEach((c6) => {
        var f6, u2;
        r3.att[o5] = Jr2(gn2({}, r3.att[o5]), { [c6]: ((f6 = t.att[o5]) == null ? void 0 : f6[c6]) || ((u2 = e2.att[o5]) == null ? void 0 : u2[c6]) });
      });
    }), r3;
  }
  __name(lo2, "lo");
  function wn(t = "", e2) {
    yt2(e2);
    const n5 = "I further authorize the stated URI to perform the following actions on my behalf: ";
    if (t.includes(n5)) return t;
    const r3 = [];
    let o5 = 0;
    Object.keys(e2.att).forEach((c6) => {
      const f6 = Object.keys(e2.att[c6]).map((l7) => ({ ability: l7.split("/")[0], action: l7.split("/")[1] }));
      f6.sort((l7, d4) => l7.action.localeCompare(d4.action));
      const u2 = {};
      f6.forEach((l7) => {
        u2[l7.ability] || (u2[l7.ability] = []), u2[l7.ability].push(l7.action);
      });
      const a4 = Object.keys(u2).map((l7) => (o5++, `(${o5}) '${l7}': '${u2[l7].join("', '")}' for '${c6}'.`));
      r3.push(a4.join(", ").replace(".,", "."));
    });
    const s3 = r3.join(" "), i4 = `${n5}${s3}`;
    return `${t ? t + " " : ""}${i4}`;
  }
  __name(wn, "wn");
  function zc(t) {
    var e2;
    const n5 = kt2(t);
    yt2(n5);
    const r3 = (e2 = n5.att) == null ? void 0 : e2.eip155;
    return r3 ? Object.keys(r3).map((o5) => o5.split("/")[1]) : [];
  }
  __name(zc, "zc");
  function Yc(t) {
    const e2 = kt2(t);
    yt2(e2);
    const n5 = [];
    return Object.values(e2.att).forEach((r3) => {
      Object.values(r3).forEach((o5) => {
        var s3;
        (s3 = o5?.[0]) != null && s3.chains && n5.push(o5[0].chains);
      });
    }), [...new Set(n5.flat())];
  }
  __name(Yc, "Yc");
  function je2(t) {
    if (!t) return;
    const e2 = t?.[t.length - 1];
    return mn2(e2) ? e2 : void 0;
  }
  __name(je2, "je");
  function po2(t) {
    return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
  }
  __name(po2, "po");
  function vn2(t) {
    if (typeof t != "boolean") throw new Error(`boolean expected, not ${t}`);
  }
  __name(vn2, "vn");
  function xn2(t) {
    if (!Number.isSafeInteger(t) || t < 0) throw new Error("positive integer expected, got " + t);
  }
  __name(xn2, "xn");
  function ot(t, ...e2) {
    if (!po2(t)) throw new Error("Uint8Array expected");
    if (e2.length > 0 && !e2.includes(t.length)) throw new Error("Uint8Array expected of length " + e2 + ", got length=" + t.length);
  }
  __name(ot, "ot");
  function go2(t, e2 = true) {
    if (t.destroyed) throw new Error("Hash instance has been destroyed");
    if (e2 && t.finished) throw new Error("Hash#digest() has already been called");
  }
  __name(go2, "go");
  function Wc(t, e2) {
    ot(t);
    const n5 = e2.outputLen;
    if (t.length < n5) throw new Error("digestInto() expects output buffer of length at least " + n5);
  }
  __name(Wc, "Wc");
  function Pt2(t) {
    return new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4));
  }
  __name(Pt2, "Pt");
  function Qt2(...t) {
    for (let e2 = 0; e2 < t.length; e2++) t[e2].fill(0);
  }
  __name(Qt2, "Qt");
  function Xc(t) {
    return new DataView(t.buffer, t.byteOffset, t.byteLength);
  }
  __name(Xc, "Xc");
  var Jc = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
  function Qc(t) {
    if (typeof t != "string") throw new Error("string expected");
    return new Uint8Array(new TextEncoder().encode(t));
  }
  __name(Qc, "Qc");
  function En2(t) {
    if (typeof t == "string") t = Qc(t);
    else if (po2(t)) t = Bn2(t);
    else throw new Error("Uint8Array expected, got " + typeof t);
    return t;
  }
  __name(En2, "En");
  function tf(t, e2) {
    if (e2 == null || typeof e2 != "object") throw new Error("options must be defined");
    return Object.assign(t, e2);
  }
  __name(tf, "tf");
  function ef(t, e2) {
    if (t.length !== e2.length) return false;
    let n5 = 0;
    for (let r3 = 0; r3 < t.length; r3++) n5 |= t[r3] ^ e2[r3];
    return n5 === 0;
  }
  __name(ef, "ef");
  var nf = /* @__PURE__ */ __name((t, e2) => {
    function n5(r3, ...o5) {
      if (ot(r3), !Jc) throw new Error("Non little-endian hardware is not yet supported");
      if (t.nonceLength !== void 0) {
        const a4 = o5[0];
        if (!a4) throw new Error("nonce / iv required");
        t.varSizeNonce ? ot(a4) : ot(a4, t.nonceLength);
      }
      const s3 = t.tagLength;
      s3 && o5[1] !== void 0 && ot(o5[1]);
      const i4 = e2(r3, ...o5), c6 = /* @__PURE__ */ __name((a4, l7) => {
        if (l7 !== void 0) {
          if (a4 !== 2) throw new Error("cipher output not supported");
          ot(l7);
        }
      }, "c");
      let f6 = false;
      return { encrypt(a4, l7) {
        if (f6) throw new Error("cannot encrypt() twice with same key + nonce");
        return f6 = true, ot(a4), c6(i4.encrypt.length, l7), i4.encrypt(a4, l7);
      }, decrypt(a4, l7) {
        if (ot(a4), s3 && a4.length < s3) throw new Error("invalid ciphertext length: smaller than tagLength=" + s3);
        return c6(i4.decrypt.length, l7), i4.decrypt(a4, l7);
      } };
    }
    __name(n5, "n");
    return Object.assign(n5, t), n5;
  }, "nf");
  function bo2(t, e2, n5 = true) {
    if (e2 === void 0) return new Uint8Array(t);
    if (e2.length !== t) throw new Error("invalid output length, expected " + t + ", got: " + e2.length);
    if (n5 && !of(e2)) throw new Error("invalid output, must be aligned");
    return e2;
  }
  __name(bo2, "bo");
  function yo2(t, e2, n5, r3) {
    if (typeof t.setBigUint64 == "function") return t.setBigUint64(e2, n5, r3);
    const o5 = BigInt(32), s3 = BigInt(4294967295), i4 = Number(n5 >> o5 & s3), c6 = Number(n5 & s3), f6 = r3 ? 4 : 0, u2 = r3 ? 0 : 4;
    t.setUint32(e2 + f6, i4, r3), t.setUint32(e2 + u2, c6, r3);
  }
  __name(yo2, "yo");
  function rf(t, e2, n5) {
    vn2(n5);
    const r3 = new Uint8Array(16), o5 = Xc(r3);
    return yo2(o5, 0, BigInt(e2), n5), yo2(o5, 8, BigInt(t), n5), r3;
  }
  __name(rf, "rf");
  function of(t) {
    return t.byteOffset % 4 === 0;
  }
  __name(of, "of");
  function Bn2(t) {
    return Uint8Array.from(t);
  }
  __name(Bn2, "Bn");
  var mo2 = /* @__PURE__ */ __name((t) => Uint8Array.from(t.split("").map((e2) => e2.charCodeAt(0))), "mo");
  var sf = mo2("expand 16-byte k");
  var cf = mo2("expand 32-byte k");
  var ff = Pt2(sf);
  var af = Pt2(cf);
  function K4(t, e2) {
    return t << e2 | t >>> 32 - e2;
  }
  __name(K4, "K");
  function In2(t) {
    return t.byteOffset % 4 === 0;
  }
  __name(In2, "In");
  var Le2 = 64;
  var uf = 16;
  var wo2 = 2 ** 32 - 1;
  var vo2 = new Uint32Array();
  function lf(t, e2, n5, r3, o5, s3, i4, c6) {
    const f6 = o5.length, u2 = new Uint8Array(Le2), a4 = Pt2(u2), l7 = In2(o5) && In2(s3), d4 = l7 ? Pt2(o5) : vo2, h6 = l7 ? Pt2(s3) : vo2;
    for (let y5 = 0; y5 < f6; i4++) {
      if (t(e2, n5, r3, a4, i4, c6), i4 >= wo2) throw new Error("arx: counter overflow");
      const m3 = Math.min(Le2, f6 - y5);
      if (l7 && m3 === Le2) {
        const w4 = y5 / 4;
        if (y5 % 4 !== 0) throw new Error("arx: invalid block position");
        for (let U3 = 0, F2; U3 < uf; U3++) F2 = w4 + U3, h6[F2] = d4[F2] ^ a4[U3];
        y5 += Le2;
        continue;
      }
      for (let w4 = 0, U3; w4 < m3; w4++) U3 = y5 + w4, s3[U3] = o5[U3] ^ u2[w4];
      y5 += m3;
    }
  }
  __name(lf, "lf");
  function df(t, e2) {
    const { allowShortKeys: n5, extendNonceFn: r3, counterLength: o5, counterRight: s3, rounds: i4 } = tf({ allowShortKeys: false, counterLength: 8, counterRight: false, rounds: 20 }, e2);
    if (typeof t != "function") throw new Error("core must be a function");
    return xn2(o5), xn2(i4), vn2(s3), vn2(n5), (c6, f6, u2, a4, l7 = 0) => {
      ot(c6), ot(f6), ot(u2);
      const d4 = u2.length;
      if (a4 === void 0 && (a4 = new Uint8Array(d4)), ot(a4), xn2(l7), l7 < 0 || l7 >= wo2) throw new Error("arx: counter overflow");
      if (a4.length < d4) throw new Error(`arx: output (${a4.length}) is shorter than data (${d4})`);
      const h6 = [];
      let y5 = c6.length, m3, w4;
      if (y5 === 32) h6.push(m3 = Bn2(c6)), w4 = af;
      else if (y5 === 16 && n5) m3 = new Uint8Array(32), m3.set(c6), m3.set(c6, 16), w4 = ff, h6.push(m3);
      else throw new Error(`arx: invalid 32-byte key, got length=${y5}`);
      In2(f6) || h6.push(f6 = Bn2(f6));
      const U3 = Pt2(m3);
      if (r3) {
        if (f6.length !== 24) throw new Error("arx: extended nonce must be 24 bytes");
        r3(w4, U3, Pt2(f6.subarray(0, 16)), U3), f6 = f6.subarray(16);
      }
      const F2 = 16 - o5;
      if (F2 !== f6.length) throw new Error(`arx: nonce must be ${F2} or 16 bytes`);
      if (F2 !== 12) {
        const Z2 = new Uint8Array(12);
        Z2.set(f6, s3 ? 0 : 12 - f6.length), f6 = Z2, h6.push(f6);
      }
      const R4 = Pt2(f6);
      return lf(t, w4, U3, R4, u2, a4, l7, i4), Qt2(...h6), a4;
    };
  }
  __name(df, "df");
  var W2 = /* @__PURE__ */ __name((t, e2) => t[e2++] & 255 | (t[e2++] & 255) << 8, "W");
  var _hf = class _hf {
    constructor(e2) {
      this.blockLen = 16, this.outputLen = 16, this.buffer = new Uint8Array(16), this.r = new Uint16Array(10), this.h = new Uint16Array(10), this.pad = new Uint16Array(8), this.pos = 0, this.finished = false, e2 = En2(e2), ot(e2, 32);
      const n5 = W2(e2, 0), r3 = W2(e2, 2), o5 = W2(e2, 4), s3 = W2(e2, 6), i4 = W2(e2, 8), c6 = W2(e2, 10), f6 = W2(e2, 12), u2 = W2(e2, 14);
      this.r[0] = n5 & 8191, this.r[1] = (n5 >>> 13 | r3 << 3) & 8191, this.r[2] = (r3 >>> 10 | o5 << 6) & 7939, this.r[3] = (o5 >>> 7 | s3 << 9) & 8191, this.r[4] = (s3 >>> 4 | i4 << 12) & 255, this.r[5] = i4 >>> 1 & 8190, this.r[6] = (i4 >>> 14 | c6 << 2) & 8191, this.r[7] = (c6 >>> 11 | f6 << 5) & 8065, this.r[8] = (f6 >>> 8 | u2 << 8) & 8191, this.r[9] = u2 >>> 5 & 127;
      for (let a4 = 0; a4 < 8; a4++) this.pad[a4] = W2(e2, 16 + 2 * a4);
    }
    process(e2, n5, r3 = false) {
      const o5 = r3 ? 0 : 2048, { h: s3, r: i4 } = this, c6 = i4[0], f6 = i4[1], u2 = i4[2], a4 = i4[3], l7 = i4[4], d4 = i4[5], h6 = i4[6], y5 = i4[7], m3 = i4[8], w4 = i4[9], U3 = W2(e2, n5 + 0), F2 = W2(e2, n5 + 2), R4 = W2(e2, n5 + 4), Z2 = W2(e2, n5 + 6), H3 = W2(e2, n5 + 8), j7 = W2(e2, n5 + 10), L3 = W2(e2, n5 + 12), k6 = W2(e2, n5 + 14);
      let O6 = s3[0] + (U3 & 8191), T4 = s3[1] + ((U3 >>> 13 | F2 << 3) & 8191), C5 = s3[2] + ((F2 >>> 10 | R4 << 6) & 8191), _5 = s3[3] + ((R4 >>> 7 | Z2 << 9) & 8191), p5 = s3[4] + ((Z2 >>> 4 | H3 << 12) & 8191), b6 = s3[5] + (H3 >>> 1 & 8191), g4 = s3[6] + ((H3 >>> 14 | j7 << 2) & 8191), x6 = s3[7] + ((j7 >>> 11 | L3 << 5) & 8191), E5 = s3[8] + ((L3 >>> 8 | k6 << 8) & 8191), I3 = s3[9] + (k6 >>> 5 | o5), v6 = 0, B3 = v6 + O6 * c6 + T4 * (5 * w4) + C5 * (5 * m3) + _5 * (5 * y5) + p5 * (5 * h6);
      v6 = B3 >>> 13, B3 &= 8191, B3 += b6 * (5 * d4) + g4 * (5 * l7) + x6 * (5 * a4) + E5 * (5 * u2) + I3 * (5 * f6), v6 += B3 >>> 13, B3 &= 8191;
      let A4 = v6 + O6 * f6 + T4 * c6 + C5 * (5 * w4) + _5 * (5 * m3) + p5 * (5 * y5);
      v6 = A4 >>> 13, A4 &= 8191, A4 += b6 * (5 * h6) + g4 * (5 * d4) + x6 * (5 * l7) + E5 * (5 * a4) + I3 * (5 * u2), v6 += A4 >>> 13, A4 &= 8191;
      let N12 = v6 + O6 * u2 + T4 * f6 + C5 * c6 + _5 * (5 * w4) + p5 * (5 * m3);
      v6 = N12 >>> 13, N12 &= 8191, N12 += b6 * (5 * y5) + g4 * (5 * h6) + x6 * (5 * d4) + E5 * (5 * l7) + I3 * (5 * a4), v6 += N12 >>> 13, N12 &= 8191;
      let D4 = v6 + O6 * a4 + T4 * u2 + C5 * f6 + _5 * c6 + p5 * (5 * w4);
      v6 = D4 >>> 13, D4 &= 8191, D4 += b6 * (5 * m3) + g4 * (5 * y5) + x6 * (5 * h6) + E5 * (5 * d4) + I3 * (5 * l7), v6 += D4 >>> 13, D4 &= 8191;
      let P6 = v6 + O6 * l7 + T4 * a4 + C5 * u2 + _5 * f6 + p5 * c6;
      v6 = P6 >>> 13, P6 &= 8191, P6 += b6 * (5 * w4) + g4 * (5 * m3) + x6 * (5 * y5) + E5 * (5 * h6) + I3 * (5 * d4), v6 += P6 >>> 13, P6 &= 8191;
      let $3 = v6 + O6 * d4 + T4 * l7 + C5 * a4 + _5 * u2 + p5 * f6;
      v6 = $3 >>> 13, $3 &= 8191, $3 += b6 * c6 + g4 * (5 * w4) + x6 * (5 * m3) + E5 * (5 * y5) + I3 * (5 * h6), v6 += $3 >>> 13, $3 &= 8191;
      let V5 = v6 + O6 * h6 + T4 * d4 + C5 * l7 + _5 * a4 + p5 * u2;
      v6 = V5 >>> 13, V5 &= 8191, V5 += b6 * f6 + g4 * c6 + x6 * (5 * w4) + E5 * (5 * m3) + I3 * (5 * y5), v6 += V5 >>> 13, V5 &= 8191;
      let q3 = v6 + O6 * y5 + T4 * h6 + C5 * d4 + _5 * l7 + p5 * a4;
      v6 = q3 >>> 13, q3 &= 8191, q3 += b6 * u2 + g4 * f6 + x6 * c6 + E5 * (5 * w4) + I3 * (5 * m3), v6 += q3 >>> 13, q3 &= 8191;
      let G4 = v6 + O6 * m3 + T4 * y5 + C5 * h6 + _5 * d4 + p5 * l7;
      v6 = G4 >>> 13, G4 &= 8191, G4 += b6 * a4 + g4 * u2 + x6 * f6 + E5 * c6 + I3 * (5 * w4), v6 += G4 >>> 13, G4 &= 8191;
      let M5 = v6 + O6 * w4 + T4 * m3 + C5 * y5 + _5 * h6 + p5 * d4;
      v6 = M5 >>> 13, M5 &= 8191, M5 += b6 * l7 + g4 * a4 + x6 * u2 + E5 * f6 + I3 * c6, v6 += M5 >>> 13, M5 &= 8191, v6 = (v6 << 2) + v6 | 0, v6 = v6 + B3 | 0, B3 = v6 & 8191, v6 = v6 >>> 13, A4 += v6, s3[0] = B3, s3[1] = A4, s3[2] = N12, s3[3] = D4, s3[4] = P6, s3[5] = $3, s3[6] = V5, s3[7] = q3, s3[8] = G4, s3[9] = M5;
    }
    finalize() {
      const { h: e2, pad: n5 } = this, r3 = new Uint16Array(10);
      let o5 = e2[1] >>> 13;
      e2[1] &= 8191;
      for (let c6 = 2; c6 < 10; c6++) e2[c6] += o5, o5 = e2[c6] >>> 13, e2[c6] &= 8191;
      e2[0] += o5 * 5, o5 = e2[0] >>> 13, e2[0] &= 8191, e2[1] += o5, o5 = e2[1] >>> 13, e2[1] &= 8191, e2[2] += o5, r3[0] = e2[0] + 5, o5 = r3[0] >>> 13, r3[0] &= 8191;
      for (let c6 = 1; c6 < 10; c6++) r3[c6] = e2[c6] + o5, o5 = r3[c6] >>> 13, r3[c6] &= 8191;
      r3[9] -= 8192;
      let s3 = (o5 ^ 1) - 1;
      for (let c6 = 0; c6 < 10; c6++) r3[c6] &= s3;
      s3 = ~s3;
      for (let c6 = 0; c6 < 10; c6++) e2[c6] = e2[c6] & s3 | r3[c6];
      e2[0] = (e2[0] | e2[1] << 13) & 65535, e2[1] = (e2[1] >>> 3 | e2[2] << 10) & 65535, e2[2] = (e2[2] >>> 6 | e2[3] << 7) & 65535, e2[3] = (e2[3] >>> 9 | e2[4] << 4) & 65535, e2[4] = (e2[4] >>> 12 | e2[5] << 1 | e2[6] << 14) & 65535, e2[5] = (e2[6] >>> 2 | e2[7] << 11) & 65535, e2[6] = (e2[7] >>> 5 | e2[8] << 8) & 65535, e2[7] = (e2[8] >>> 8 | e2[9] << 5) & 65535;
      let i4 = e2[0] + n5[0];
      e2[0] = i4 & 65535;
      for (let c6 = 1; c6 < 8; c6++) i4 = (e2[c6] + n5[c6] | 0) + (i4 >>> 16) | 0, e2[c6] = i4 & 65535;
      Qt2(r3);
    }
    update(e2) {
      go2(this), e2 = En2(e2), ot(e2);
      const { buffer: n5, blockLen: r3 } = this, o5 = e2.length;
      for (let s3 = 0; s3 < o5; ) {
        const i4 = Math.min(r3 - this.pos, o5 - s3);
        if (i4 === r3) {
          for (; r3 <= o5 - s3; s3 += r3) this.process(e2, s3);
          continue;
        }
        n5.set(e2.subarray(s3, s3 + i4), this.pos), this.pos += i4, s3 += i4, this.pos === r3 && (this.process(n5, 0, false), this.pos = 0);
      }
      return this;
    }
    destroy() {
      Qt2(this.h, this.r, this.buffer, this.pad);
    }
    digestInto(e2) {
      go2(this), Wc(e2, this), this.finished = true;
      const { buffer: n5, h: r3 } = this;
      let { pos: o5 } = this;
      if (o5) {
        for (n5[o5++] = 1; o5 < 16; o5++) n5[o5] = 0;
        this.process(n5, 0, true);
      }
      this.finalize();
      let s3 = 0;
      for (let i4 = 0; i4 < 8; i4++) e2[s3++] = r3[i4] >>> 0, e2[s3++] = r3[i4] >>> 8;
      return e2;
    }
    digest() {
      const { buffer: e2, outputLen: n5 } = this;
      this.digestInto(e2);
      const r3 = e2.slice(0, n5);
      return this.destroy(), r3;
    }
  };
  __name(_hf, "hf");
  var hf = _hf;
  function pf(t) {
    const e2 = /* @__PURE__ */ __name((r3, o5) => t(o5).update(En2(r3)).digest(), "e"), n5 = t(new Uint8Array(32));
    return e2.outputLen = n5.outputLen, e2.blockLen = n5.blockLen, e2.create = (r3) => t(r3), e2;
  }
  __name(pf, "pf");
  var gf = pf((t) => new hf(t));
  function bf(t, e2, n5, r3, o5, s3 = 20) {
    let i4 = t[0], c6 = t[1], f6 = t[2], u2 = t[3], a4 = e2[0], l7 = e2[1], d4 = e2[2], h6 = e2[3], y5 = e2[4], m3 = e2[5], w4 = e2[6], U3 = e2[7], F2 = o5, R4 = n5[0], Z2 = n5[1], H3 = n5[2], j7 = i4, L3 = c6, k6 = f6, O6 = u2, T4 = a4, C5 = l7, _5 = d4, p5 = h6, b6 = y5, g4 = m3, x6 = w4, E5 = U3, I3 = F2, v6 = R4, B3 = Z2, A4 = H3;
    for (let D4 = 0; D4 < s3; D4 += 2) j7 = j7 + T4 | 0, I3 = K4(I3 ^ j7, 16), b6 = b6 + I3 | 0, T4 = K4(T4 ^ b6, 12), j7 = j7 + T4 | 0, I3 = K4(I3 ^ j7, 8), b6 = b6 + I3 | 0, T4 = K4(T4 ^ b6, 7), L3 = L3 + C5 | 0, v6 = K4(v6 ^ L3, 16), g4 = g4 + v6 | 0, C5 = K4(C5 ^ g4, 12), L3 = L3 + C5 | 0, v6 = K4(v6 ^ L3, 8), g4 = g4 + v6 | 0, C5 = K4(C5 ^ g4, 7), k6 = k6 + _5 | 0, B3 = K4(B3 ^ k6, 16), x6 = x6 + B3 | 0, _5 = K4(_5 ^ x6, 12), k6 = k6 + _5 | 0, B3 = K4(B3 ^ k6, 8), x6 = x6 + B3 | 0, _5 = K4(_5 ^ x6, 7), O6 = O6 + p5 | 0, A4 = K4(A4 ^ O6, 16), E5 = E5 + A4 | 0, p5 = K4(p5 ^ E5, 12), O6 = O6 + p5 | 0, A4 = K4(A4 ^ O6, 8), E5 = E5 + A4 | 0, p5 = K4(p5 ^ E5, 7), j7 = j7 + C5 | 0, A4 = K4(A4 ^ j7, 16), x6 = x6 + A4 | 0, C5 = K4(C5 ^ x6, 12), j7 = j7 + C5 | 0, A4 = K4(A4 ^ j7, 8), x6 = x6 + A4 | 0, C5 = K4(C5 ^ x6, 7), L3 = L3 + _5 | 0, I3 = K4(I3 ^ L3, 16), E5 = E5 + I3 | 0, _5 = K4(_5 ^ E5, 12), L3 = L3 + _5 | 0, I3 = K4(I3 ^ L3, 8), E5 = E5 + I3 | 0, _5 = K4(_5 ^ E5, 7), k6 = k6 + p5 | 0, v6 = K4(v6 ^ k6, 16), b6 = b6 + v6 | 0, p5 = K4(p5 ^ b6, 12), k6 = k6 + p5 | 0, v6 = K4(v6 ^ k6, 8), b6 = b6 + v6 | 0, p5 = K4(p5 ^ b6, 7), O6 = O6 + T4 | 0, B3 = K4(B3 ^ O6, 16), g4 = g4 + B3 | 0, T4 = K4(T4 ^ g4, 12), O6 = O6 + T4 | 0, B3 = K4(B3 ^ O6, 8), g4 = g4 + B3 | 0, T4 = K4(T4 ^ g4, 7);
    let N12 = 0;
    r3[N12++] = i4 + j7 | 0, r3[N12++] = c6 + L3 | 0, r3[N12++] = f6 + k6 | 0, r3[N12++] = u2 + O6 | 0, r3[N12++] = a4 + T4 | 0, r3[N12++] = l7 + C5 | 0, r3[N12++] = d4 + _5 | 0, r3[N12++] = h6 + p5 | 0, r3[N12++] = y5 + b6 | 0, r3[N12++] = m3 + g4 | 0, r3[N12++] = w4 + x6 | 0, r3[N12++] = U3 + E5 | 0, r3[N12++] = F2 + I3 | 0, r3[N12++] = R4 + v6 | 0, r3[N12++] = Z2 + B3 | 0, r3[N12++] = H3 + A4 | 0;
  }
  __name(bf, "bf");
  var yf = df(bf, { counterRight: false, counterLength: 4, allowShortKeys: false });
  var mf = new Uint8Array(16);
  var xo2 = /* @__PURE__ */ __name((t, e2) => {
    t.update(e2);
    const n5 = e2.length % 16;
    n5 && t.update(mf.subarray(n5));
  }, "xo");
  var wf = new Uint8Array(32);
  function Eo2(t, e2, n5, r3, o5) {
    const s3 = t(e2, n5, wf), i4 = gf.create(s3);
    o5 && xo2(i4, o5), xo2(i4, r3);
    const c6 = rf(r3.length, o5 ? o5.length : 0, true);
    i4.update(c6);
    const f6 = i4.digest();
    return Qt2(s3, c6), f6;
  }
  __name(Eo2, "Eo");
  var vf = /* @__PURE__ */ __name((t) => (e2, n5, r3) => ({ encrypt(s3, i4) {
    const c6 = s3.length;
    i4 = bo2(c6 + 16, i4, false), i4.set(s3);
    const f6 = i4.subarray(0, -16);
    t(e2, n5, f6, f6, 1);
    const u2 = Eo2(t, e2, n5, f6, r3);
    return i4.set(u2, c6), Qt2(u2), i4;
  }, decrypt(s3, i4) {
    i4 = bo2(s3.length - 16, i4, false);
    const c6 = s3.subarray(0, -16), f6 = s3.subarray(-16), u2 = Eo2(t, e2, n5, c6, r3);
    if (!ef(f6, u2)) throw new Error("invalid tag");
    return i4.set(s3.subarray(0, -16)), t(e2, n5, i4, i4, 1), Qt2(u2), i4;
  } }), "vf");
  var Bo2 = nf({ blockSize: 64, nonceLength: 12, tagLength: 16 }, vf(yf));
  var _Io = class _Io extends $e2 {
    constructor(e2, n5) {
      super(), this.finished = false, this.destroyed = false, _e2(e2);
      const r3 = pt(n5);
      if (this.iHash = e2.create(), typeof this.iHash.update != "function") throw new Error("Expected instance of class which extends utils.Hash");
      this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
      const o5 = this.blockLen, s3 = new Uint8Array(o5);
      s3.set(r3.length > o5 ? e2.create().update(r3).digest() : r3);
      for (let i4 = 0; i4 < s3.length; i4++) s3[i4] ^= 54;
      this.iHash.update(s3), this.oHash = e2.create();
      for (let i4 = 0; i4 < s3.length; i4++) s3[i4] ^= 106;
      this.oHash.update(s3), lt2(s3);
    }
    update(e2) {
      return Nt2(this), this.iHash.update(e2), this;
    }
    digestInto(e2) {
      Nt2(this), ht2(e2, this.outputLen), this.finished = true, this.iHash.digestInto(e2), this.oHash.update(e2), this.oHash.digestInto(e2), this.destroy();
    }
    digest() {
      const e2 = new Uint8Array(this.oHash.outputLen);
      return this.digestInto(e2), e2;
    }
    _cloneInto(e2) {
      e2 || (e2 = Object.create(Object.getPrototypeOf(this), {}));
      const { oHash: n5, iHash: r3, finished: o5, destroyed: s3, blockLen: i4, outputLen: c6 } = this;
      return e2 = e2, e2.finished = o5, e2.destroyed = s3, e2.blockLen = i4, e2.outputLen = c6, e2.oHash = n5._cloneInto(e2.oHash), e2.iHash = r3._cloneInto(e2.iHash), e2;
    }
    clone() {
      return this._cloneInto();
    }
    destroy() {
      this.destroyed = true, this.oHash.destroy(), this.iHash.destroy();
    }
  };
  __name(_Io, "Io");
  var Io2 = _Io;
  var ke2 = /* @__PURE__ */ __name((t, e2, n5) => new Io2(t, e2).update(n5).digest(), "ke");
  ke2.create = (t, e2) => new Io2(t, e2);
  function xf(t, e2, n5) {
    return _e2(t), n5 === void 0 && (n5 = new Uint8Array(t.outputLen)), ke2(t, pt(n5), pt(e2));
  }
  __name(xf, "xf");
  var An2 = Uint8Array.from([0]);
  var Ao2 = Uint8Array.of();
  function Ef(t, e2, n5, r3 = 32) {
    _e2(t), mt(r3);
    const o5 = t.outputLen;
    if (r3 > 255 * o5) throw new Error("Length should be <= 255*HashLen");
    const s3 = Math.ceil(r3 / o5);
    n5 === void 0 && (n5 = Ao2);
    const i4 = new Uint8Array(s3 * o5), c6 = ke2.create(t, e2), f6 = c6._cloneInto(), u2 = new Uint8Array(c6.outputLen);
    for (let a4 = 0; a4 < s3; a4++) An2[0] = a4 + 1, f6.update(a4 === 0 ? Ao2 : u2).update(n5).update(An2).digestInto(u2), i4.set(u2, o5 * a4), c6._cloneInto(f6);
    return c6.destroy(), f6.destroy(), lt2(u2, An2), i4.slice(0, r3);
  }
  __name(Ef, "Ef");
  var Bf = /* @__PURE__ */ __name((t, e2, n5, r3, o5) => Ef(t, xf(t, e2, n5), r3, o5), "Bf");
  var Pe2 = Te2;
  var Sn2 = BigInt(0);
  var On2 = BigInt(1);
  function He2(t, e2 = "") {
    if (typeof t != "boolean") {
      const n5 = e2 && `"${e2}"`;
      throw new Error(n5 + "expected boolean, got type=" + typeof t);
    }
    return t;
  }
  __name(He2, "He");
  function Kt2(t, e2, n5 = "") {
    const r3 = Ue2(t), o5 = t?.length, s3 = e2 !== void 0;
    if (!r3 || s3 && o5 !== e2) {
      const i4 = n5 && `"${n5}" `, c6 = s3 ? ` of length ${e2}` : "", f6 = r3 ? `length=${o5}` : `type=${typeof t}`;
      throw new Error(i4 + "expected Uint8Array" + c6 + ", got " + f6);
    }
    return t;
  }
  __name(Kt2, "Kt");
  function De2(t) {
    const e2 = t.toString(16);
    return e2.length & 1 ? "0" + e2 : e2;
  }
  __name(De2, "De");
  function So2(t) {
    if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
    return t === "" ? Sn2 : BigInt("0x" + t);
  }
  __name(So2, "So");
  function Ve2(t) {
    return So2(Jt2(t));
  }
  __name(Ve2, "Ve");
  function Me2(t) {
    return ht2(t), So2(Jt2(Uint8Array.from(t).reverse()));
  }
  __name(Me2, "Me");
  function Nn2(t, e2) {
    return Re2(t.toString(16).padStart(e2 * 2, "0"));
  }
  __name(Nn2, "Nn");
  function Un2(t, e2) {
    return Nn2(t, e2).reverse();
  }
  __name(Un2, "Un");
  function tt(t, e2, n5) {
    let r3;
    if (typeof e2 == "string") try {
      r3 = Re2(e2);
    } catch (s3) {
      throw new Error(t + " must be hex string or Uint8Array, cause: " + s3);
    }
    else if (Ue2(e2)) r3 = Uint8Array.from(e2);
    else throw new Error(t + " must be hex string or Uint8Array");
    const o5 = r3.length;
    if (typeof n5 == "number" && o5 !== n5) throw new Error(t + " of length " + n5 + " expected, got " + o5);
    return r3;
  }
  __name(tt, "tt");
  var _n3 = /* @__PURE__ */ __name((t) => typeof t == "bigint" && Sn2 <= t, "_n");
  function If(t, e2, n5) {
    return _n3(t) && _n3(e2) && _n3(n5) && e2 <= t && t < n5;
  }
  __name(If, "If");
  function Rn2(t, e2, n5, r3) {
    if (!If(e2, n5, r3)) throw new Error("expected valid " + t + ": " + n5 + " <= n < " + r3 + ", got " + e2);
  }
  __name(Rn2, "Rn");
  function Oo2(t) {
    let e2;
    for (e2 = 0; t > Sn2; t >>= On2, e2 += 1) ;
    return e2;
  }
  __name(Oo2, "Oo");
  var me2 = /* @__PURE__ */ __name((t) => (On2 << BigInt(t)) - On2, "me");
  function Af(t, e2, n5) {
    if (typeof t != "number" || t < 2) throw new Error("hashLen must be a number");
    if (typeof e2 != "number" || e2 < 2) throw new Error("qByteLen must be a number");
    if (typeof n5 != "function") throw new Error("hmacFn must be a function");
    const r3 = /* @__PURE__ */ __name((h6) => new Uint8Array(h6), "r"), o5 = /* @__PURE__ */ __name((h6) => Uint8Array.of(h6), "o");
    let s3 = r3(t), i4 = r3(t), c6 = 0;
    const f6 = /* @__PURE__ */ __name(() => {
      s3.fill(1), i4.fill(0), c6 = 0;
    }, "f"), u2 = /* @__PURE__ */ __name((...h6) => n5(i4, s3, ...h6), "u"), a4 = /* @__PURE__ */ __name((h6 = r3(0)) => {
      i4 = u2(o5(0), h6), s3 = u2(), h6.length !== 0 && (i4 = u2(o5(1), h6), s3 = u2());
    }, "a"), l7 = /* @__PURE__ */ __name(() => {
      if (c6++ >= 1e3) throw new Error("drbg: tried 1000 values");
      let h6 = 0;
      const y5 = [];
      for (; h6 < e2; ) {
        s3 = u2();
        const m3 = s3.slice();
        y5.push(m3), h6 += s3.length;
      }
      return _t2(...y5);
    }, "l");
    return (h6, y5) => {
      f6(), a4(h6);
      let m3;
      for (; !(m3 = y5(l7())); ) a4();
      return f6(), m3;
    };
  }
  __name(Af, "Af");
  function Ke2(t, e2, n5 = {}) {
    if (!t || typeof t != "object") throw new Error("expected valid options object");
    function r3(o5, s3, i4) {
      const c6 = t[o5];
      if (i4 && c6 === void 0) return;
      const f6 = typeof c6;
      if (f6 !== s3 || c6 === null) throw new Error(`param "${o5}" is invalid: expected ${s3}, got ${f6}`);
    }
    __name(r3, "r");
    Object.entries(e2).forEach(([o5, s3]) => r3(o5, s3, false)), Object.entries(n5).forEach(([o5, s3]) => r3(o5, s3, true));
  }
  __name(Ke2, "Ke");
  function No2(t) {
    const e2 = /* @__PURE__ */ new WeakMap();
    return (n5, ...r3) => {
      const o5 = e2.get(n5);
      if (o5 !== void 0) return o5;
      const s3 = t(n5, ...r3);
      return e2.set(n5, s3), s3;
    };
  }
  __name(No2, "No");
  var st = BigInt(0);
  var nt2 = BigInt(1);
  var qt2 = BigInt(2);
  var Uo2 = BigInt(3);
  var _o2 = BigInt(4);
  var Ro2 = BigInt(5);
  var Sf = BigInt(7);
  var $o2 = BigInt(8);
  var Of = BigInt(9);
  var To2 = BigInt(16);
  function ct2(t, e2) {
    const n5 = t % e2;
    return n5 >= st ? n5 : e2 + n5;
  }
  __name(ct2, "ct");
  function gt2(t, e2, n5) {
    let r3 = t;
    for (; e2-- > st; ) r3 *= r3, r3 %= n5;
    return r3;
  }
  __name(gt2, "gt");
  function Co2(t, e2) {
    if (t === st) throw new Error("invert: expected non-zero number");
    if (e2 <= st) throw new Error("invert: expected positive modulus, got " + e2);
    let n5 = ct2(t, e2), r3 = e2, o5 = st, s3 = nt2;
    for (; n5 !== st; ) {
      const c6 = r3 / n5, f6 = r3 % n5, u2 = o5 - s3 * c6;
      r3 = n5, n5 = f6, o5 = s3, s3 = u2;
    }
    if (r3 !== nt2) throw new Error("invert: does not exist");
    return ct2(o5, e2);
  }
  __name(Co2, "Co");
  function $n2(t, e2, n5) {
    if (!t.eql(t.sqr(e2), n5)) throw new Error("Cannot find square root");
  }
  __name($n2, "$n");
  function jo2(t, e2) {
    const n5 = (t.ORDER + nt2) / _o2, r3 = t.pow(e2, n5);
    return $n2(t, r3, e2), r3;
  }
  __name(jo2, "jo");
  function Nf(t, e2) {
    const n5 = (t.ORDER - Ro2) / $o2, r3 = t.mul(e2, qt2), o5 = t.pow(r3, n5), s3 = t.mul(e2, o5), i4 = t.mul(t.mul(s3, qt2), o5), c6 = t.mul(s3, t.sub(i4, t.ONE));
    return $n2(t, c6, e2), c6;
  }
  __name(Nf, "Nf");
  function Uf(t) {
    const e2 = Ht2(t), n5 = Lo2(t), r3 = n5(e2, e2.neg(e2.ONE)), o5 = n5(e2, r3), s3 = n5(e2, e2.neg(r3)), i4 = (t + Sf) / To2;
    return (c6, f6) => {
      let u2 = c6.pow(f6, i4), a4 = c6.mul(u2, r3);
      const l7 = c6.mul(u2, o5), d4 = c6.mul(u2, s3), h6 = c6.eql(c6.sqr(a4), f6), y5 = c6.eql(c6.sqr(l7), f6);
      u2 = c6.cmov(u2, a4, h6), a4 = c6.cmov(d4, l7, y5);
      const m3 = c6.eql(c6.sqr(a4), f6), w4 = c6.cmov(u2, a4, m3);
      return $n2(c6, w4, f6), w4;
    };
  }
  __name(Uf, "Uf");
  function Lo2(t) {
    if (t < Uo2) throw new Error("sqrt is not defined for small field");
    let e2 = t - nt2, n5 = 0;
    for (; e2 % qt2 === st; ) e2 /= qt2, n5++;
    let r3 = qt2;
    const o5 = Ht2(t);
    for (; Po2(o5, r3) === 1; ) if (r3++ > 1e3) throw new Error("Cannot find square root: probably non-prime P");
    if (n5 === 1) return jo2;
    let s3 = o5.pow(r3, e2);
    const i4 = (e2 + nt2) / qt2;
    return function(f6, u2) {
      if (f6.is0(u2)) return u2;
      if (Po2(f6, u2) !== 1) throw new Error("Cannot find square root");
      let a4 = n5, l7 = f6.mul(f6.ONE, s3), d4 = f6.pow(u2, e2), h6 = f6.pow(u2, i4);
      for (; !f6.eql(d4, f6.ONE); ) {
        if (f6.is0(d4)) return f6.ZERO;
        let y5 = 1, m3 = f6.sqr(d4);
        for (; !f6.eql(m3, f6.ONE); ) if (y5++, m3 = f6.sqr(m3), y5 === a4) throw new Error("Cannot find square root");
        const w4 = nt2 << BigInt(a4 - y5 - 1), U3 = f6.pow(l7, w4);
        a4 = y5, l7 = f6.sqr(U3), d4 = f6.mul(d4, l7), h6 = f6.mul(h6, U3);
      }
      return h6;
    };
  }
  __name(Lo2, "Lo");
  function _f2(t) {
    return t % _o2 === Uo2 ? jo2 : t % $o2 === Ro2 ? Nf : t % To2 === Of ? Uf(t) : Lo2(t);
  }
  __name(_f2, "_f");
  var Rf = ["create", "isValid", "is0", "neg", "inv", "sqrt", "sqr", "eql", "add", "sub", "mul", "pow", "div", "addN", "subN", "mulN", "sqrN"];
  function $f(t) {
    const e2 = { ORDER: "bigint", MASK: "bigint", BYTES: "number", BITS: "number" }, n5 = Rf.reduce((r3, o5) => (r3[o5] = "function", r3), e2);
    return Ke2(t, n5), t;
  }
  __name($f, "$f");
  function Tf(t, e2, n5) {
    if (n5 < st) throw new Error("invalid exponent, negatives unsupported");
    if (n5 === st) return t.ONE;
    if (n5 === nt2) return e2;
    let r3 = t.ONE, o5 = e2;
    for (; n5 > st; ) n5 & nt2 && (r3 = t.mul(r3, o5)), o5 = t.sqr(o5), n5 >>= nt2;
    return r3;
  }
  __name(Tf, "Tf");
  function ko2(t, e2, n5 = false) {
    const r3 = new Array(e2.length).fill(n5 ? t.ZERO : void 0), o5 = e2.reduce((i4, c6, f6) => t.is0(c6) ? i4 : (r3[f6] = i4, t.mul(i4, c6)), t.ONE), s3 = t.inv(o5);
    return e2.reduceRight((i4, c6, f6) => t.is0(c6) ? i4 : (r3[f6] = t.mul(i4, r3[f6]), t.mul(i4, c6)), s3), r3;
  }
  __name(ko2, "ko");
  function Po2(t, e2) {
    const n5 = (t.ORDER - nt2) / qt2, r3 = t.pow(e2, n5), o5 = t.eql(r3, t.ONE), s3 = t.eql(r3, t.ZERO), i4 = t.eql(r3, t.neg(t.ONE));
    if (!o5 && !s3 && !i4) throw new Error("invalid Legendre symbol result");
    return o5 ? 1 : s3 ? 0 : -1;
  }
  __name(Po2, "Po");
  function Ho2(t, e2) {
    e2 !== void 0 && mt(e2);
    const n5 = e2 !== void 0 ? e2 : t.toString(2).length, r3 = Math.ceil(n5 / 8);
    return { nBitLength: n5, nByteLength: r3 };
  }
  __name(Ho2, "Ho");
  function Ht2(t, e2, n5 = false, r3 = {}) {
    if (t <= st) throw new Error("invalid field: expected ORDER > 0, got " + t);
    let o5, s3, i4 = false, c6;
    if (typeof e2 == "object" && e2 != null) {
      if (r3.sqrt || n5) throw new Error("cannot specify opts in two arguments");
      const d4 = e2;
      d4.BITS && (o5 = d4.BITS), d4.sqrt && (s3 = d4.sqrt), typeof d4.isLE == "boolean" && (n5 = d4.isLE), typeof d4.modFromBytes == "boolean" && (i4 = d4.modFromBytes), c6 = d4.allowedLengths;
    } else typeof e2 == "number" && (o5 = e2), r3.sqrt && (s3 = r3.sqrt);
    const { nBitLength: f6, nByteLength: u2 } = Ho2(t, o5);
    if (u2 > 2048) throw new Error("invalid field: expected ORDER of <= 2048 bytes");
    let a4;
    const l7 = Object.freeze({ ORDER: t, isLE: n5, BITS: f6, BYTES: u2, MASK: me2(f6), ZERO: st, ONE: nt2, allowedLengths: c6, create: /* @__PURE__ */ __name((d4) => ct2(d4, t), "create"), isValid: /* @__PURE__ */ __name((d4) => {
      if (typeof d4 != "bigint") throw new Error("invalid field element: expected bigint, got " + typeof d4);
      return st <= d4 && d4 < t;
    }, "isValid"), is0: /* @__PURE__ */ __name((d4) => d4 === st, "is0"), isValidNot0: /* @__PURE__ */ __name((d4) => !l7.is0(d4) && l7.isValid(d4), "isValidNot0"), isOdd: /* @__PURE__ */ __name((d4) => (d4 & nt2) === nt2, "isOdd"), neg: /* @__PURE__ */ __name((d4) => ct2(-d4, t), "neg"), eql: /* @__PURE__ */ __name((d4, h6) => d4 === h6, "eql"), sqr: /* @__PURE__ */ __name((d4) => ct2(d4 * d4, t), "sqr"), add: /* @__PURE__ */ __name((d4, h6) => ct2(d4 + h6, t), "add"), sub: /* @__PURE__ */ __name((d4, h6) => ct2(d4 - h6, t), "sub"), mul: /* @__PURE__ */ __name((d4, h6) => ct2(d4 * h6, t), "mul"), pow: /* @__PURE__ */ __name((d4, h6) => Tf(l7, d4, h6), "pow"), div: /* @__PURE__ */ __name((d4, h6) => ct2(d4 * Co2(h6, t), t), "div"), sqrN: /* @__PURE__ */ __name((d4) => d4 * d4, "sqrN"), addN: /* @__PURE__ */ __name((d4, h6) => d4 + h6, "addN"), subN: /* @__PURE__ */ __name((d4, h6) => d4 - h6, "subN"), mulN: /* @__PURE__ */ __name((d4, h6) => d4 * h6, "mulN"), inv: /* @__PURE__ */ __name((d4) => Co2(d4, t), "inv"), sqrt: s3 || ((d4) => (a4 || (a4 = _f2(t)), a4(l7, d4))), toBytes: /* @__PURE__ */ __name((d4) => n5 ? Un2(d4, u2) : Nn2(d4, u2), "toBytes"), fromBytes: /* @__PURE__ */ __name((d4, h6 = true) => {
      if (c6) {
        if (!c6.includes(d4.length) || d4.length > u2) throw new Error("Field.fromBytes: expected " + c6 + " bytes, got " + d4.length);
        const m3 = new Uint8Array(u2);
        m3.set(d4, n5 ? 0 : m3.length - d4.length), d4 = m3;
      }
      if (d4.length !== u2) throw new Error("Field.fromBytes: expected " + u2 + " bytes, got " + d4.length);
      let y5 = n5 ? Me2(d4) : Ve2(d4);
      if (i4 && (y5 = ct2(y5, t)), !h6 && !l7.isValid(y5)) throw new Error("invalid field element: outside of range 0..ORDER");
      return y5;
    }, "fromBytes"), invertBatch: /* @__PURE__ */ __name((d4) => ko2(l7, d4), "invertBatch"), cmov: /* @__PURE__ */ __name((d4, h6, y5) => y5 ? h6 : d4, "cmov") });
    return Object.freeze(l7);
  }
  __name(Ht2, "Ht");
  function Do2(t) {
    if (typeof t != "bigint") throw new Error("field order must be bigint");
    const e2 = t.toString(2).length;
    return Math.ceil(e2 / 8);
  }
  __name(Do2, "Do");
  function Vo2(t) {
    const e2 = Do2(t);
    return e2 + Math.ceil(e2 / 2);
  }
  __name(Vo2, "Vo");
  function Cf(t, e2, n5 = false) {
    const r3 = t.length, o5 = Do2(e2), s3 = Vo2(e2);
    if (r3 < 16 || r3 < s3 || r3 > 1024) throw new Error("expected " + s3 + "-1024 bytes of input, got " + r3);
    const i4 = n5 ? Me2(t) : Ve2(t), c6 = ct2(i4, e2 - nt2) + nt2;
    return n5 ? Un2(c6, o5) : Nn2(c6, o5);
  }
  __name(Cf, "Cf");
  var te2 = BigInt(0);
  var Ft2 = BigInt(1);
  function qe2(t, e2) {
    const n5 = e2.negate();
    return t ? n5 : e2;
  }
  __name(qe2, "qe");
  function Tn2(t, e2) {
    const n5 = ko2(t.Fp, e2.map((r3) => r3.Z));
    return e2.map((r3, o5) => t.fromAffine(r3.toAffine(n5[o5])));
  }
  __name(Tn2, "Tn");
  function Mo2(t, e2) {
    if (!Number.isSafeInteger(t) || t <= 0 || t > e2) throw new Error("invalid window size, expected [1.." + e2 + "], got W=" + t);
  }
  __name(Mo2, "Mo");
  function Cn2(t, e2) {
    Mo2(t, e2);
    const n5 = Math.ceil(e2 / t) + 1, r3 = 2 ** (t - 1), o5 = 2 ** t, s3 = me2(t), i4 = BigInt(t);
    return { windows: n5, windowSize: r3, mask: s3, maxNumber: o5, shiftBy: i4 };
  }
  __name(Cn2, "Cn");
  function Ko2(t, e2, n5) {
    const { windowSize: r3, mask: o5, maxNumber: s3, shiftBy: i4 } = n5;
    let c6 = Number(t & o5), f6 = t >> i4;
    c6 > r3 && (c6 -= s3, f6 += Ft2);
    const u2 = e2 * r3, a4 = u2 + Math.abs(c6) - 1, l7 = c6 === 0, d4 = c6 < 0, h6 = e2 % 2 !== 0;
    return { nextN: f6, offset: a4, isZero: l7, isNeg: d4, isNegF: h6, offsetF: u2 };
  }
  __name(Ko2, "Ko");
  function jf(t, e2) {
    if (!Array.isArray(t)) throw new Error("array expected");
    t.forEach((n5, r3) => {
      if (!(n5 instanceof e2)) throw new Error("invalid point at index " + r3);
    });
  }
  __name(jf, "jf");
  function Lf(t, e2) {
    if (!Array.isArray(t)) throw new Error("array of scalars expected");
    t.forEach((n5, r3) => {
      if (!e2.isValid(n5)) throw new Error("invalid scalar at index " + r3);
    });
  }
  __name(Lf, "Lf");
  var jn2 = /* @__PURE__ */ new WeakMap();
  var qo2 = /* @__PURE__ */ new WeakMap();
  function Ln2(t) {
    return qo2.get(t) || 1;
  }
  __name(Ln2, "Ln");
  function Fo2(t) {
    if (t !== te2) throw new Error("invalid wNAF");
  }
  __name(Fo2, "Fo");
  var _kf = class _kf {
    constructor(e2, n5) {
      this.BASE = e2.BASE, this.ZERO = e2.ZERO, this.Fn = e2.Fn, this.bits = n5;
    }
    _unsafeLadder(e2, n5, r3 = this.ZERO) {
      let o5 = e2;
      for (; n5 > te2; ) n5 & Ft2 && (r3 = r3.add(o5)), o5 = o5.double(), n5 >>= Ft2;
      return r3;
    }
    precomputeWindow(e2, n5) {
      const { windows: r3, windowSize: o5 } = Cn2(n5, this.bits), s3 = [];
      let i4 = e2, c6 = i4;
      for (let f6 = 0; f6 < r3; f6++) {
        c6 = i4, s3.push(c6);
        for (let u2 = 1; u2 < o5; u2++) c6 = c6.add(i4), s3.push(c6);
        i4 = c6.double();
      }
      return s3;
    }
    wNAF(e2, n5, r3) {
      if (!this.Fn.isValid(r3)) throw new Error("invalid scalar");
      let o5 = this.ZERO, s3 = this.BASE;
      const i4 = Cn2(e2, this.bits);
      for (let c6 = 0; c6 < i4.windows; c6++) {
        const { nextN: f6, offset: u2, isZero: a4, isNeg: l7, isNegF: d4, offsetF: h6 } = Ko2(r3, c6, i4);
        r3 = f6, a4 ? s3 = s3.add(qe2(d4, n5[h6])) : o5 = o5.add(qe2(l7, n5[u2]));
      }
      return Fo2(r3), { p: o5, f: s3 };
    }
    wNAFUnsafe(e2, n5, r3, o5 = this.ZERO) {
      const s3 = Cn2(e2, this.bits);
      for (let i4 = 0; i4 < s3.windows && r3 !== te2; i4++) {
        const { nextN: c6, offset: f6, isZero: u2, isNeg: a4 } = Ko2(r3, i4, s3);
        if (r3 = c6, !u2) {
          const l7 = n5[f6];
          o5 = o5.add(a4 ? l7.negate() : l7);
        }
      }
      return Fo2(r3), o5;
    }
    getPrecomputes(e2, n5, r3) {
      let o5 = jn2.get(n5);
      return o5 || (o5 = this.precomputeWindow(n5, e2), e2 !== 1 && (typeof r3 == "function" && (o5 = r3(o5)), jn2.set(n5, o5))), o5;
    }
    cached(e2, n5, r3) {
      const o5 = Ln2(e2);
      return this.wNAF(o5, this.getPrecomputes(o5, e2, r3), n5);
    }
    unsafe(e2, n5, r3, o5) {
      const s3 = Ln2(e2);
      return s3 === 1 ? this._unsafeLadder(e2, n5, o5) : this.wNAFUnsafe(s3, this.getPrecomputes(s3, e2, r3), n5, o5);
    }
    createCache(e2, n5) {
      Mo2(n5, this.bits), qo2.set(e2, n5), jn2.delete(e2);
    }
    hasCache(e2) {
      return Ln2(e2) !== 1;
    }
  };
  __name(_kf, "kf");
  var kf = _kf;
  function Pf(t, e2, n5, r3) {
    let o5 = e2, s3 = t.ZERO, i4 = t.ZERO;
    for (; n5 > te2 || r3 > te2; ) n5 & Ft2 && (s3 = s3.add(o5)), r3 & Ft2 && (i4 = i4.add(o5)), o5 = o5.double(), n5 >>= Ft2, r3 >>= Ft2;
    return { p1: s3, p2: i4 };
  }
  __name(Pf, "Pf");
  function Hf(t, e2, n5, r3) {
    jf(n5, t), Lf(r3, e2);
    const o5 = n5.length, s3 = r3.length;
    if (o5 !== s3) throw new Error("arrays of points and scalars must have equal length");
    const i4 = t.ZERO, c6 = Oo2(BigInt(o5));
    let f6 = 1;
    c6 > 12 ? f6 = c6 - 3 : c6 > 4 ? f6 = c6 - 2 : c6 > 0 && (f6 = 2);
    const u2 = me2(f6), a4 = new Array(Number(u2) + 1).fill(i4), l7 = Math.floor((e2.BITS - 1) / f6) * f6;
    let d4 = i4;
    for (let h6 = l7; h6 >= 0; h6 -= f6) {
      a4.fill(i4);
      for (let m3 = 0; m3 < s3; m3++) {
        const w4 = r3[m3], U3 = Number(w4 >> BigInt(h6) & u2);
        a4[U3] = a4[U3].add(n5[m3]);
      }
      let y5 = i4;
      for (let m3 = a4.length - 1, w4 = i4; m3 > 0; m3--) w4 = w4.add(a4[m3]), y5 = y5.add(w4);
      if (d4 = d4.add(y5), h6 !== 0) for (let m3 = 0; m3 < f6; m3++) d4 = d4.double();
    }
    return d4;
  }
  __name(Hf, "Hf");
  function Zo2(t, e2, n5) {
    if (e2) {
      if (e2.ORDER !== t) throw new Error("Field.ORDER must match order: Fp == p, Fn == n");
      return $f(e2), e2;
    } else return Ht2(t, { isLE: n5 });
  }
  __name(Zo2, "Zo");
  function Df(t, e2, n5 = {}, r3) {
    if (r3 === void 0 && (r3 = t === "edwards"), !e2 || typeof e2 != "object") throw new Error(`expected valid ${t} CURVE object`);
    for (const f6 of ["p", "n", "h"]) {
      const u2 = e2[f6];
      if (!(typeof u2 == "bigint" && u2 > te2)) throw new Error(`CURVE.${f6} must be positive bigint`);
    }
    const o5 = Zo2(e2.p, n5.Fp, r3), s3 = Zo2(e2.n, n5.Fn, r3), c6 = ["Gx", "Gy", "a", t === "weierstrass" ? "b" : "d"];
    for (const f6 of c6) if (!o5.isValid(e2[f6])) throw new Error(`CURVE.${f6} must be valid field element of CURVE.Fp`);
    return e2 = Object.freeze(Object.assign({}, e2)), { CURVE: e2, Fp: o5, Fn: s3 };
  }
  __name(Df, "Df");
  BigInt(0), BigInt(1), BigInt(2), BigInt(8), kr2("HashToScalar-");
  var we2 = BigInt(0);
  var ee = BigInt(1);
  var Fe = BigInt(2);
  function Vf(t) {
    return Ke2(t, { adjustScalarBytes: "function", powPminus2: "function" }), Object.freeze({ ...t });
  }
  __name(Vf, "Vf");
  function Mf(t) {
    const e2 = Vf(t), { P: n5, type: r3, adjustScalarBytes: o5, powPminus2: s3, randomBytes: i4 } = e2, c6 = r3 === "x25519";
    if (!c6 && r3 !== "x448") throw new Error("invalid type");
    const f6 = i4 || Mt2, u2 = c6 ? 255 : 448, a4 = c6 ? 32 : 56, l7 = BigInt(c6 ? 9 : 5), d4 = BigInt(c6 ? 121665 : 39081), h6 = c6 ? Fe ** BigInt(254) : Fe ** BigInt(447), y5 = c6 ? BigInt(8) * Fe ** BigInt(251) - ee : BigInt(4) * Fe ** BigInt(445) - ee, m3 = h6 + y5 + ee, w4 = /* @__PURE__ */ __name((p5) => ct2(p5, n5), "w"), U3 = F2(l7);
    function F2(p5) {
      return Un2(w4(p5), a4);
    }
    __name(F2, "F");
    function R4(p5) {
      const b6 = tt("u coordinate", p5, a4);
      return c6 && (b6[31] &= 127), w4(Me2(b6));
    }
    __name(R4, "R");
    function Z2(p5) {
      return Me2(o5(tt("scalar", p5, a4)));
    }
    __name(Z2, "Z");
    function H3(p5, b6) {
      const g4 = k6(R4(b6), Z2(p5));
      if (g4 === we2) throw new Error("invalid private or public key received");
      return F2(g4);
    }
    __name(H3, "H");
    function j7(p5) {
      return H3(p5, U3);
    }
    __name(j7, "j");
    function L3(p5, b6, g4) {
      const x6 = w4(p5 * (b6 - g4));
      return b6 = w4(b6 - x6), g4 = w4(g4 + x6), { x_2: b6, x_3: g4 };
    }
    __name(L3, "L");
    function k6(p5, b6) {
      Rn2("u", p5, we2, n5), Rn2("scalar", b6, h6, m3);
      const g4 = b6, x6 = p5;
      let E5 = ee, I3 = we2, v6 = p5, B3 = ee, A4 = we2;
      for (let D4 = BigInt(u2 - 1); D4 >= we2; D4--) {
        const P6 = g4 >> D4 & ee;
        A4 ^= P6, { x_2: E5, x_3: v6 } = L3(A4, E5, v6), { x_2: I3, x_3: B3 } = L3(A4, I3, B3), A4 = P6;
        const $3 = E5 + I3, V5 = w4($3 * $3), q3 = E5 - I3, G4 = w4(q3 * q3), M5 = V5 - G4, Y4 = v6 + B3, Yt3 = v6 - B3, ce2 = w4(Yt3 * $3), fe3 = w4(Y4 * q3), Qn3 = ce2 + fe3, tr2 = ce2 - fe3;
        v6 = w4(Qn3 * Qn3), B3 = w4(x6 * w4(tr2 * tr2)), E5 = w4(V5 * G4), I3 = w4(M5 * (V5 + w4(d4 * M5)));
      }
      ({ x_2: E5, x_3: v6 } = L3(A4, E5, v6)), { x_2: I3, x_3: B3 } = L3(A4, I3, B3);
      const N12 = s3(I3);
      return w4(E5 * N12);
    }
    __name(k6, "k");
    const O6 = { secretKey: a4, publicKey: a4, seed: a4 }, T4 = /* @__PURE__ */ __name((p5 = f6(a4)) => (ht2(p5, O6.seed), p5), "T");
    function C5(p5) {
      const b6 = T4(p5);
      return { secretKey: b6, publicKey: j7(b6) };
    }
    __name(C5, "C");
    return { keygen: C5, getSharedSecret: /* @__PURE__ */ __name((p5, b6) => H3(p5, b6), "getSharedSecret"), getPublicKey: /* @__PURE__ */ __name((p5) => j7(p5), "getPublicKey"), scalarMult: H3, scalarMultBase: j7, utils: { randomSecretKey: T4, randomPrivateKey: T4 }, GuBytes: U3.slice(), lengths: O6 };
  }
  __name(Mf, "Mf");
  var Kf = BigInt(1);
  var Go2 = BigInt(2);
  var qf = BigInt(3);
  var Ff = BigInt(5);
  var Zf = BigInt(8);
  var zo2 = BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed");
  var Gf = { p: zo2, n: BigInt("0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed"), h: Zf, a: BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec"), d: BigInt("0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3"), Gx: BigInt("0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a"), Gy: BigInt("0x6666666666666666666666666666666666666666666666666666666666666658") };
  function zf(t) {
    const e2 = BigInt(10), n5 = BigInt(20), r3 = BigInt(40), o5 = BigInt(80), s3 = zo2, c6 = t * t % s3 * t % s3, f6 = gt2(c6, Go2, s3) * c6 % s3, u2 = gt2(f6, Kf, s3) * t % s3, a4 = gt2(u2, Ff, s3) * u2 % s3, l7 = gt2(a4, e2, s3) * a4 % s3, d4 = gt2(l7, n5, s3) * l7 % s3, h6 = gt2(d4, r3, s3) * d4 % s3, y5 = gt2(h6, o5, s3) * h6 % s3, m3 = gt2(y5, o5, s3) * h6 % s3, w4 = gt2(m3, e2, s3) * a4 % s3;
    return { pow_p_5_8: gt2(w4, Go2, s3) * t % s3, b2: c6 };
  }
  __name(zf, "zf");
  function Yf(t) {
    return t[0] &= 248, t[31] &= 127, t[31] |= 64, t;
  }
  __name(Yf, "Yf");
  var Wf = Ht2(Gf.p, { isLE: true });
  var kn2 = (() => {
    const t = Wf.ORDER;
    return Mf({ P: t, type: "x25519", powPminus2: /* @__PURE__ */ __name((e2) => {
      const { pow_p_5_8: n5, b2: r3 } = zf(e2);
      return ct2(gt2(n5, qf, t) * r3, t);
    }, "powPminus2"), adjustScalarBytes: Yf });
  })();
  var Yo2 = /* @__PURE__ */ __name((t, e2) => (t + (t >= 0 ? e2 : -e2) / Wo2) / e2, "Yo");
  function Xf(t, e2, n5) {
    const [[r3, o5], [s3, i4]] = e2, c6 = Yo2(i4 * t, n5), f6 = Yo2(-o5 * t, n5);
    let u2 = t - c6 * r3 - f6 * s3, a4 = -c6 * o5 - f6 * i4;
    const l7 = u2 < Et2, d4 = a4 < Et2;
    l7 && (u2 = -u2), d4 && (a4 = -a4);
    const h6 = me2(Math.ceil(Oo2(n5) / 2)) + ne;
    if (u2 < Et2 || u2 >= h6 || a4 < Et2 || a4 >= h6) throw new Error("splitScalar (endomorphism): failed, k=" + t);
    return { k1neg: l7, k1: u2, k2neg: d4, k2: a4 };
  }
  __name(Xf, "Xf");
  function Pn2(t) {
    if (!["compact", "recovered", "der"].includes(t)) throw new Error('Signature format must be "compact", "recovered", or "der"');
    return t;
  }
  __name(Pn2, "Pn");
  function Hn2(t, e2) {
    const n5 = {};
    for (let r3 of Object.keys(e2)) n5[r3] = t[r3] === void 0 ? e2[r3] : t[r3];
    return He2(n5.lowS, "lowS"), He2(n5.prehash, "prehash"), n5.format !== void 0 && Pn2(n5.format), n5;
  }
  __name(Hn2, "Hn");
  var _Jf = class _Jf extends Error {
    constructor(e2 = "") {
      super(e2);
    }
  };
  __name(_Jf, "Jf");
  var Jf = _Jf;
  var xt2 = { Err: Jf, _tlv: { encode: /* @__PURE__ */ __name((t, e2) => {
    const { Err: n5 } = xt2;
    if (t < 0 || t > 256) throw new n5("tlv.encode: wrong tag");
    if (e2.length & 1) throw new n5("tlv.encode: unpadded data");
    const r3 = e2.length / 2, o5 = De2(r3);
    if (o5.length / 2 & 128) throw new n5("tlv.encode: long form length too big");
    const s3 = r3 > 127 ? De2(o5.length / 2 | 128) : "";
    return De2(t) + s3 + o5 + e2;
  }, "encode"), decode(t, e2) {
    const { Err: n5 } = xt2;
    let r3 = 0;
    if (t < 0 || t > 256) throw new n5("tlv.encode: wrong tag");
    if (e2.length < 2 || e2[r3++] !== t) throw new n5("tlv.decode: wrong tlv");
    const o5 = e2[r3++], s3 = !!(o5 & 128);
    let i4 = 0;
    if (!s3) i4 = o5;
    else {
      const f6 = o5 & 127;
      if (!f6) throw new n5("tlv.decode(long): indefinite length not supported");
      if (f6 > 4) throw new n5("tlv.decode(long): byte length is too big");
      const u2 = e2.subarray(r3, r3 + f6);
      if (u2.length !== f6) throw new n5("tlv.decode: length bytes not complete");
      if (u2[0] === 0) throw new n5("tlv.decode(long): zero leftmost byte");
      for (const a4 of u2) i4 = i4 << 8 | a4;
      if (r3 += f6, i4 < 128) throw new n5("tlv.decode(long): not minimal encoding");
    }
    const c6 = e2.subarray(r3, r3 + i4);
    if (c6.length !== i4) throw new n5("tlv.decode: wrong value length");
    return { v: c6, l: e2.subarray(r3 + i4) };
  } }, _int: { encode(t) {
    const { Err: e2 } = xt2;
    if (t < Et2) throw new e2("integer: negative integers are not allowed");
    let n5 = De2(t);
    if (Number.parseInt(n5[0], 16) & 8 && (n5 = "00" + n5), n5.length & 1) throw new e2("unexpected DER parsing assertion: unpadded hex");
    return n5;
  }, decode(t) {
    const { Err: e2 } = xt2;
    if (t[0] & 128) throw new e2("invalid signature integer: negative");
    if (t[0] === 0 && !(t[1] & 128)) throw new e2("invalid signature integer: unnecessary leading zero");
    return Ve2(t);
  } }, toSig(t) {
    const { Err: e2, _int: n5, _tlv: r3 } = xt2, o5 = tt("signature", t), { v: s3, l: i4 } = r3.decode(48, o5);
    if (i4.length) throw new e2("invalid signature: left bytes after parsing");
    const { v: c6, l: f6 } = r3.decode(2, s3), { v: u2, l: a4 } = r3.decode(2, f6);
    if (a4.length) throw new e2("invalid signature: left bytes after parsing");
    return { r: n5.decode(c6), s: n5.decode(u2) };
  }, hexFromSig(t) {
    const { _tlv: e2, _int: n5 } = xt2, r3 = e2.encode(2, n5.encode(t.r)), o5 = e2.encode(2, n5.encode(t.s)), s3 = r3 + o5;
    return e2.encode(48, s3);
  } };
  var Et2 = BigInt(0);
  var ne = BigInt(1);
  var Wo2 = BigInt(2);
  var Ze2 = BigInt(3);
  var Qf = BigInt(4);
  function re(t, e2) {
    const { BYTES: n5 } = t;
    let r3;
    if (typeof e2 == "bigint") r3 = e2;
    else {
      let o5 = tt("private key", e2);
      try {
        r3 = t.fromBytes(o5);
      } catch {
        throw new Error(`invalid private key: expected ui8a of size ${n5}, got ${typeof e2}`);
      }
    }
    if (!t.isValidNot0(r3)) throw new Error("invalid private key: out of range [1..N-1]");
    return r3;
  }
  __name(re, "re");
  function ta(t, e2 = {}) {
    const n5 = Df("weierstrass", t, e2), { Fp: r3, Fn: o5 } = n5;
    let s3 = n5.CURVE;
    const { h: i4, n: c6 } = s3;
    Ke2(e2, {}, { allowInfinityPoint: "boolean", clearCofactor: "function", isTorsionFree: "function", fromBytes: "function", toBytes: "function", endo: "object", wrapPrivateKey: "boolean" });
    const { endo: f6 } = e2;
    if (f6 && (!r3.is0(s3.a) || typeof f6.beta != "bigint" || !Array.isArray(f6.basises))) throw new Error('invalid endo: expected "beta": bigint and "basises": array');
    const u2 = Jo2(r3, o5);
    function a4() {
      if (!r3.isOdd) throw new Error("compression is not supported: Field does not have .isOdd()");
    }
    __name(a4, "a");
    function l7(_5, p5, b6) {
      const { x: g4, y: x6 } = p5.toAffine(), E5 = r3.toBytes(g4);
      if (He2(b6, "isCompressed"), b6) {
        a4();
        const I3 = !r3.isOdd(x6);
        return _t2(Xo(I3), E5);
      } else return _t2(Uint8Array.of(4), E5, r3.toBytes(x6));
    }
    __name(l7, "l");
    function d4(_5) {
      Kt2(_5, void 0, "Point");
      const { publicKey: p5, publicKeyUncompressed: b6 } = u2, g4 = _5.length, x6 = _5[0], E5 = _5.subarray(1);
      if (g4 === p5 && (x6 === 2 || x6 === 3)) {
        const I3 = r3.fromBytes(E5);
        if (!r3.isValid(I3)) throw new Error("bad point: is not on curve, wrong x");
        const v6 = m3(I3);
        let B3;
        try {
          B3 = r3.sqrt(v6);
        } catch (D4) {
          const P6 = D4 instanceof Error ? ": " + D4.message : "";
          throw new Error("bad point: is not on curve, sqrt error" + P6);
        }
        a4();
        const A4 = r3.isOdd(B3);
        return (x6 & 1) === 1 !== A4 && (B3 = r3.neg(B3)), { x: I3, y: B3 };
      } else if (g4 === b6 && x6 === 4) {
        const I3 = r3.BYTES, v6 = r3.fromBytes(E5.subarray(0, I3)), B3 = r3.fromBytes(E5.subarray(I3, I3 * 2));
        if (!w4(v6, B3)) throw new Error("bad point: is not on curve");
        return { x: v6, y: B3 };
      } else throw new Error(`bad point: got length ${g4}, expected compressed=${p5} or uncompressed=${b6}`);
    }
    __name(d4, "d");
    const h6 = e2.toBytes || l7, y5 = e2.fromBytes || d4;
    function m3(_5) {
      const p5 = r3.sqr(_5), b6 = r3.mul(p5, _5);
      return r3.add(r3.add(b6, r3.mul(_5, s3.a)), s3.b);
    }
    __name(m3, "m");
    function w4(_5, p5) {
      const b6 = r3.sqr(p5), g4 = m3(_5);
      return r3.eql(b6, g4);
    }
    __name(w4, "w");
    if (!w4(s3.Gx, s3.Gy)) throw new Error("bad curve params: generator point");
    const U3 = r3.mul(r3.pow(s3.a, Ze2), Qf), F2 = r3.mul(r3.sqr(s3.b), BigInt(27));
    if (r3.is0(r3.add(U3, F2))) throw new Error("bad curve params: a or b");
    function R4(_5, p5, b6 = false) {
      if (!r3.isValid(p5) || b6 && r3.is0(p5)) throw new Error(`bad point coordinate ${_5}`);
      return p5;
    }
    __name(R4, "R");
    function Z2(_5) {
      if (!(_5 instanceof O6)) throw new Error("ProjectivePoint expected");
    }
    __name(Z2, "Z");
    function H3(_5) {
      if (!f6 || !f6.basises) throw new Error("no endo");
      return Xf(_5, f6.basises, o5.ORDER);
    }
    __name(H3, "H");
    const j7 = No2((_5, p5) => {
      const { X: b6, Y: g4, Z: x6 } = _5;
      if (r3.eql(x6, r3.ONE)) return { x: b6, y: g4 };
      const E5 = _5.is0();
      p5 == null && (p5 = E5 ? r3.ONE : r3.inv(x6));
      const I3 = r3.mul(b6, p5), v6 = r3.mul(g4, p5), B3 = r3.mul(x6, p5);
      if (E5) return { x: r3.ZERO, y: r3.ZERO };
      if (!r3.eql(B3, r3.ONE)) throw new Error("invZ was invalid");
      return { x: I3, y: v6 };
    }), L3 = No2((_5) => {
      if (_5.is0()) {
        if (e2.allowInfinityPoint && !r3.is0(_5.Y)) return;
        throw new Error("bad point: ZERO");
      }
      const { x: p5, y: b6 } = _5.toAffine();
      if (!r3.isValid(p5) || !r3.isValid(b6)) throw new Error("bad point: x or y not field elements");
      if (!w4(p5, b6)) throw new Error("bad point: equation left != right");
      if (!_5.isTorsionFree()) throw new Error("bad point: not in prime-order subgroup");
      return true;
    });
    function k6(_5, p5, b6, g4, x6) {
      return b6 = new O6(r3.mul(b6.X, _5), b6.Y, b6.Z), p5 = qe2(g4, p5), b6 = qe2(x6, b6), p5.add(b6);
    }
    __name(k6, "k");
    const _O2 = class _O2 {
      constructor(p5, b6, g4) {
        this.X = R4("x", p5), this.Y = R4("y", b6, true), this.Z = R4("z", g4), Object.freeze(this);
      }
      static CURVE() {
        return s3;
      }
      static fromAffine(p5) {
        const { x: b6, y: g4 } = p5 || {};
        if (!p5 || !r3.isValid(b6) || !r3.isValid(g4)) throw new Error("invalid affine point");
        if (p5 instanceof _O2) throw new Error("projective point not allowed");
        return r3.is0(b6) && r3.is0(g4) ? _O2.ZERO : new _O2(b6, g4, r3.ONE);
      }
      static fromBytes(p5) {
        const b6 = _O2.fromAffine(y5(Kt2(p5, void 0, "point")));
        return b6.assertValidity(), b6;
      }
      static fromHex(p5) {
        return _O2.fromBytes(tt("pointHex", p5));
      }
      get x() {
        return this.toAffine().x;
      }
      get y() {
        return this.toAffine().y;
      }
      precompute(p5 = 8, b6 = true) {
        return C5.createCache(this, p5), b6 || this.multiply(Ze2), this;
      }
      assertValidity() {
        L3(this);
      }
      hasEvenY() {
        const { y: p5 } = this.toAffine();
        if (!r3.isOdd) throw new Error("Field doesn't support isOdd");
        return !r3.isOdd(p5);
      }
      equals(p5) {
        Z2(p5);
        const { X: b6, Y: g4, Z: x6 } = this, { X: E5, Y: I3, Z: v6 } = p5, B3 = r3.eql(r3.mul(b6, v6), r3.mul(E5, x6)), A4 = r3.eql(r3.mul(g4, v6), r3.mul(I3, x6));
        return B3 && A4;
      }
      negate() {
        return new _O2(this.X, r3.neg(this.Y), this.Z);
      }
      double() {
        const { a: p5, b: b6 } = s3, g4 = r3.mul(b6, Ze2), { X: x6, Y: E5, Z: I3 } = this;
        let v6 = r3.ZERO, B3 = r3.ZERO, A4 = r3.ZERO, N12 = r3.mul(x6, x6), D4 = r3.mul(E5, E5), P6 = r3.mul(I3, I3), $3 = r3.mul(x6, E5);
        return $3 = r3.add($3, $3), A4 = r3.mul(x6, I3), A4 = r3.add(A4, A4), v6 = r3.mul(p5, A4), B3 = r3.mul(g4, P6), B3 = r3.add(v6, B3), v6 = r3.sub(D4, B3), B3 = r3.add(D4, B3), B3 = r3.mul(v6, B3), v6 = r3.mul($3, v6), A4 = r3.mul(g4, A4), P6 = r3.mul(p5, P6), $3 = r3.sub(N12, P6), $3 = r3.mul(p5, $3), $3 = r3.add($3, A4), A4 = r3.add(N12, N12), N12 = r3.add(A4, N12), N12 = r3.add(N12, P6), N12 = r3.mul(N12, $3), B3 = r3.add(B3, N12), P6 = r3.mul(E5, I3), P6 = r3.add(P6, P6), N12 = r3.mul(P6, $3), v6 = r3.sub(v6, N12), A4 = r3.mul(P6, D4), A4 = r3.add(A4, A4), A4 = r3.add(A4, A4), new _O2(v6, B3, A4);
      }
      add(p5) {
        Z2(p5);
        const { X: b6, Y: g4, Z: x6 } = this, { X: E5, Y: I3, Z: v6 } = p5;
        let B3 = r3.ZERO, A4 = r3.ZERO, N12 = r3.ZERO;
        const D4 = s3.a, P6 = r3.mul(s3.b, Ze2);
        let $3 = r3.mul(b6, E5), V5 = r3.mul(g4, I3), q3 = r3.mul(x6, v6), G4 = r3.add(b6, g4), M5 = r3.add(E5, I3);
        G4 = r3.mul(G4, M5), M5 = r3.add($3, V5), G4 = r3.sub(G4, M5), M5 = r3.add(b6, x6);
        let Y4 = r3.add(E5, v6);
        return M5 = r3.mul(M5, Y4), Y4 = r3.add($3, q3), M5 = r3.sub(M5, Y4), Y4 = r3.add(g4, x6), B3 = r3.add(I3, v6), Y4 = r3.mul(Y4, B3), B3 = r3.add(V5, q3), Y4 = r3.sub(Y4, B3), N12 = r3.mul(D4, M5), B3 = r3.mul(P6, q3), N12 = r3.add(B3, N12), B3 = r3.sub(V5, N12), N12 = r3.add(V5, N12), A4 = r3.mul(B3, N12), V5 = r3.add($3, $3), V5 = r3.add(V5, $3), q3 = r3.mul(D4, q3), M5 = r3.mul(P6, M5), V5 = r3.add(V5, q3), q3 = r3.sub($3, q3), q3 = r3.mul(D4, q3), M5 = r3.add(M5, q3), $3 = r3.mul(V5, M5), A4 = r3.add(A4, $3), $3 = r3.mul(Y4, M5), B3 = r3.mul(G4, B3), B3 = r3.sub(B3, $3), $3 = r3.mul(G4, V5), N12 = r3.mul(Y4, N12), N12 = r3.add(N12, $3), new _O2(B3, A4, N12);
      }
      subtract(p5) {
        return this.add(p5.negate());
      }
      is0() {
        return this.equals(_O2.ZERO);
      }
      multiply(p5) {
        const { endo: b6 } = e2;
        if (!o5.isValidNot0(p5)) throw new Error("invalid scalar: out of range");
        let g4, x6;
        const E5 = /* @__PURE__ */ __name((I3) => C5.cached(this, I3, (v6) => Tn2(_O2, v6)), "E");
        if (b6) {
          const { k1neg: I3, k1: v6, k2neg: B3, k2: A4 } = H3(p5), { p: N12, f: D4 } = E5(v6), { p: P6, f: $3 } = E5(A4);
          x6 = D4.add($3), g4 = k6(b6.beta, N12, P6, I3, B3);
        } else {
          const { p: I3, f: v6 } = E5(p5);
          g4 = I3, x6 = v6;
        }
        return Tn2(_O2, [g4, x6])[0];
      }
      multiplyUnsafe(p5) {
        const { endo: b6 } = e2, g4 = this;
        if (!o5.isValid(p5)) throw new Error("invalid scalar: out of range");
        if (p5 === Et2 || g4.is0()) return _O2.ZERO;
        if (p5 === ne) return g4;
        if (C5.hasCache(this)) return this.multiply(p5);
        if (b6) {
          const { k1neg: x6, k1: E5, k2neg: I3, k2: v6 } = H3(p5), { p1: B3, p2: A4 } = Pf(_O2, g4, E5, v6);
          return k6(b6.beta, B3, A4, x6, I3);
        } else return C5.unsafe(g4, p5);
      }
      multiplyAndAddUnsafe(p5, b6, g4) {
        const x6 = this.multiplyUnsafe(b6).add(p5.multiplyUnsafe(g4));
        return x6.is0() ? void 0 : x6;
      }
      toAffine(p5) {
        return j7(this, p5);
      }
      isTorsionFree() {
        const { isTorsionFree: p5 } = e2;
        return i4 === ne ? true : p5 ? p5(_O2, this) : C5.unsafe(this, c6).is0();
      }
      clearCofactor() {
        const { clearCofactor: p5 } = e2;
        return i4 === ne ? this : p5 ? p5(_O2, this) : this.multiplyUnsafe(i4);
      }
      isSmallOrder() {
        return this.multiplyUnsafe(i4).is0();
      }
      toBytes(p5 = true) {
        return He2(p5, "isCompressed"), this.assertValidity(), h6(_O2, this, p5);
      }
      toHex(p5 = true) {
        return Jt2(this.toBytes(p5));
      }
      toString() {
        return `<Point ${this.is0() ? "ZERO" : this.toHex()}>`;
      }
      get px() {
        return this.X;
      }
      get py() {
        return this.X;
      }
      get pz() {
        return this.Z;
      }
      toRawBytes(p5 = true) {
        return this.toBytes(p5);
      }
      _setWindowSize(p5) {
        this.precompute(p5);
      }
      static normalizeZ(p5) {
        return Tn2(_O2, p5);
      }
      static msm(p5, b6) {
        return Hf(_O2, o5, p5, b6);
      }
      static fromPrivateKey(p5) {
        return _O2.BASE.multiply(re(o5, p5));
      }
    };
    __name(_O2, "O");
    let O6 = _O2;
    O6.BASE = new O6(s3.Gx, s3.Gy, r3.ONE), O6.ZERO = new O6(r3.ZERO, r3.ONE, r3.ZERO), O6.Fp = r3, O6.Fn = o5;
    const T4 = o5.BITS, C5 = new kf(O6, e2.endo ? Math.ceil(T4 / 2) : T4);
    return O6.BASE.precompute(8), O6;
  }
  __name(ta, "ta");
  function Xo(t) {
    return Uint8Array.of(t ? 2 : 3);
  }
  __name(Xo, "Xo");
  function Jo2(t, e2) {
    return { secretKey: e2.BYTES, publicKey: 1 + t.BYTES, publicKeyUncompressed: 1 + 2 * t.BYTES, publicKeyHasPrefix: true, signature: 2 * e2.BYTES };
  }
  __name(Jo2, "Jo");
  function ea(t, e2 = {}) {
    const { Fn: n5 } = t, r3 = e2.randomBytes || Mt2, o5 = Object.assign(Jo2(t.Fp, n5), { seed: Vo2(n5.ORDER) });
    function s3(h6) {
      try {
        return !!re(n5, h6);
      } catch {
        return false;
      }
    }
    __name(s3, "s");
    function i4(h6, y5) {
      const { publicKey: m3, publicKeyUncompressed: w4 } = o5;
      try {
        const U3 = h6.length;
        return y5 === true && U3 !== m3 || y5 === false && U3 !== w4 ? false : !!t.fromBytes(h6);
      } catch {
        return false;
      }
    }
    __name(i4, "i");
    function c6(h6 = r3(o5.seed)) {
      return Cf(Kt2(h6, o5.seed, "seed"), n5.ORDER);
    }
    __name(c6, "c");
    function f6(h6, y5 = true) {
      return t.BASE.multiply(re(n5, h6)).toBytes(y5);
    }
    __name(f6, "f");
    function u2(h6) {
      const y5 = c6(h6);
      return { secretKey: y5, publicKey: f6(y5) };
    }
    __name(u2, "u");
    function a4(h6) {
      if (typeof h6 == "bigint") return false;
      if (h6 instanceof t) return true;
      const { secretKey: y5, publicKey: m3, publicKeyUncompressed: w4 } = o5;
      if (n5.allowedLengths || y5 === m3) return;
      const U3 = tt("key", h6).length;
      return U3 === m3 || U3 === w4;
    }
    __name(a4, "a");
    function l7(h6, y5, m3 = true) {
      if (a4(h6) === true) throw new Error("first arg must be private key");
      if (a4(y5) === false) throw new Error("second arg must be public key");
      const w4 = re(n5, h6);
      return t.fromHex(y5).multiply(w4).toBytes(m3);
    }
    __name(l7, "l");
    return Object.freeze({ getPublicKey: f6, getSharedSecret: l7, keygen: u2, Point: t, utils: { isValidSecretKey: s3, isValidPublicKey: i4, randomSecretKey: c6, isValidPrivateKey: s3, randomPrivateKey: c6, normPrivateKeyToScalar: /* @__PURE__ */ __name((h6) => re(n5, h6), "normPrivateKeyToScalar"), precompute(h6 = 8, y5 = t.BASE) {
      return y5.precompute(h6, false);
    } }, lengths: o5 });
  }
  __name(ea, "ea");
  function na(t, e2, n5 = {}) {
    _e2(e2), Ke2(n5, {}, { hmac: "function", lowS: "boolean", randomBytes: "function", bits2int: "function", bits2int_modN: "function" });
    const r3 = n5.randomBytes || Mt2, o5 = n5.hmac || ((b6, ...g4) => ke2(e2, b6, _t2(...g4))), { Fp: s3, Fn: i4 } = t, { ORDER: c6, BITS: f6 } = i4, { keygen: u2, getPublicKey: a4, getSharedSecret: l7, utils: d4, lengths: h6 } = ea(t, n5), y5 = { prehash: false, lowS: typeof n5.lowS == "boolean" ? n5.lowS : false, format: void 0, extraEntropy: false }, m3 = "compact";
    function w4(b6) {
      const g4 = c6 >> ne;
      return b6 > g4;
    }
    __name(w4, "w");
    function U3(b6, g4) {
      if (!i4.isValidNot0(g4)) throw new Error(`invalid signature ${b6}: out of range 1..Point.Fn.ORDER`);
      return g4;
    }
    __name(U3, "U");
    function F2(b6, g4) {
      Pn2(g4);
      const x6 = h6.signature, E5 = g4 === "compact" ? x6 : g4 === "recovered" ? x6 + 1 : void 0;
      return Kt2(b6, E5, `${g4} signature`);
    }
    __name(F2, "F");
    const _R2 = class _R2 {
      constructor(g4, x6, E5) {
        this.r = U3("r", g4), this.s = U3("s", x6), E5 != null && (this.recovery = E5), Object.freeze(this);
      }
      static fromBytes(g4, x6 = m3) {
        F2(g4, x6);
        let E5;
        if (x6 === "der") {
          const { r: A4, s: N12 } = xt2.toSig(Kt2(g4));
          return new _R2(A4, N12);
        }
        x6 === "recovered" && (E5 = g4[0], x6 = "compact", g4 = g4.subarray(1));
        const I3 = i4.BYTES, v6 = g4.subarray(0, I3), B3 = g4.subarray(I3, I3 * 2);
        return new _R2(i4.fromBytes(v6), i4.fromBytes(B3), E5);
      }
      static fromHex(g4, x6) {
        return this.fromBytes(Re2(g4), x6);
      }
      addRecoveryBit(g4) {
        return new _R2(this.r, this.s, g4);
      }
      recoverPublicKey(g4) {
        const x6 = s3.ORDER, { r: E5, s: I3, recovery: v6 } = this;
        if (v6 == null || ![0, 1, 2, 3].includes(v6)) throw new Error("recovery id invalid");
        if (c6 * Wo2 < x6 && v6 > 1) throw new Error("recovery id is ambiguous for h>1 curve");
        const A4 = v6 === 2 || v6 === 3 ? E5 + c6 : E5;
        if (!s3.isValid(A4)) throw new Error("recovery id 2 or 3 invalid");
        const N12 = s3.toBytes(A4), D4 = t.fromBytes(_t2(Xo((v6 & 1) === 0), N12)), P6 = i4.inv(A4), $3 = H3(tt("msgHash", g4)), V5 = i4.create(-$3 * P6), q3 = i4.create(I3 * P6), G4 = t.BASE.multiplyUnsafe(V5).add(D4.multiplyUnsafe(q3));
        if (G4.is0()) throw new Error("point at infinify");
        return G4.assertValidity(), G4;
      }
      hasHighS() {
        return w4(this.s);
      }
      toBytes(g4 = m3) {
        if (Pn2(g4), g4 === "der") return Re2(xt2.hexFromSig(this));
        const x6 = i4.toBytes(this.r), E5 = i4.toBytes(this.s);
        if (g4 === "recovered") {
          if (this.recovery == null) throw new Error("recovery bit must be present");
          return _t2(Uint8Array.of(this.recovery), x6, E5);
        }
        return _t2(x6, E5);
      }
      toHex(g4) {
        return Jt2(this.toBytes(g4));
      }
      assertValidity() {
      }
      static fromCompact(g4) {
        return _R2.fromBytes(tt("sig", g4), "compact");
      }
      static fromDER(g4) {
        return _R2.fromBytes(tt("sig", g4), "der");
      }
      normalizeS() {
        return this.hasHighS() ? new _R2(this.r, i4.neg(this.s), this.recovery) : this;
      }
      toDERRawBytes() {
        return this.toBytes("der");
      }
      toDERHex() {
        return Jt2(this.toBytes("der"));
      }
      toCompactRawBytes() {
        return this.toBytes("compact");
      }
      toCompactHex() {
        return Jt2(this.toBytes("compact"));
      }
    };
    __name(_R2, "R");
    let R4 = _R2;
    const Z2 = n5.bits2int || function(g4) {
      if (g4.length > 8192) throw new Error("input is too large");
      const x6 = Ve2(g4), E5 = g4.length * 8 - f6;
      return E5 > 0 ? x6 >> BigInt(E5) : x6;
    }, H3 = n5.bits2int_modN || function(g4) {
      return i4.create(Z2(g4));
    }, j7 = me2(f6);
    function L3(b6) {
      return Rn2("num < 2^" + f6, b6, Et2, j7), i4.toBytes(b6);
    }
    __name(L3, "L");
    function k6(b6, g4) {
      return Kt2(b6, void 0, "message"), g4 ? Kt2(e2(b6), void 0, "prehashed message") : b6;
    }
    __name(k6, "k");
    function O6(b6, g4, x6) {
      if (["recovered", "canonical"].some((V5) => V5 in x6)) throw new Error("sign() legacy options not supported");
      const { lowS: E5, prehash: I3, extraEntropy: v6 } = Hn2(x6, y5);
      b6 = k6(b6, I3);
      const B3 = H3(b6), A4 = re(i4, g4), N12 = [L3(A4), L3(B3)];
      if (v6 != null && v6 !== false) {
        const V5 = v6 === true ? r3(h6.secretKey) : v6;
        N12.push(tt("extraEntropy", V5));
      }
      const D4 = _t2(...N12), P6 = B3;
      function $3(V5) {
        const q3 = Z2(V5);
        if (!i4.isValidNot0(q3)) return;
        const G4 = i4.inv(q3), M5 = t.BASE.multiply(q3).toAffine(), Y4 = i4.create(M5.x);
        if (Y4 === Et2) return;
        const Yt3 = i4.create(G4 * i4.create(P6 + Y4 * A4));
        if (Yt3 === Et2) return;
        let ce2 = (M5.x === Y4 ? 0 : 2) | Number(M5.y & ne), fe3 = Yt3;
        return E5 && w4(Yt3) && (fe3 = i4.neg(Yt3), ce2 ^= 1), new R4(Y4, fe3, ce2);
      }
      __name($3, "$");
      return { seed: D4, k2sig: $3 };
    }
    __name(O6, "O");
    function T4(b6, g4, x6 = {}) {
      b6 = tt("message", b6);
      const { seed: E5, k2sig: I3 } = O6(b6, g4, x6);
      return Af(e2.outputLen, i4.BYTES, o5)(E5, I3);
    }
    __name(T4, "T");
    function C5(b6) {
      let g4;
      const x6 = typeof b6 == "string" || Ue2(b6), E5 = !x6 && b6 !== null && typeof b6 == "object" && typeof b6.r == "bigint" && typeof b6.s == "bigint";
      if (!x6 && !E5) throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");
      if (E5) g4 = new R4(b6.r, b6.s);
      else if (x6) {
        try {
          g4 = R4.fromBytes(tt("sig", b6), "der");
        } catch (I3) {
          if (!(I3 instanceof xt2.Err)) throw I3;
        }
        if (!g4) try {
          g4 = R4.fromBytes(tt("sig", b6), "compact");
        } catch {
          return false;
        }
      }
      return g4 || false;
    }
    __name(C5, "C");
    function _5(b6, g4, x6, E5 = {}) {
      const { lowS: I3, prehash: v6, format: B3 } = Hn2(E5, y5);
      if (x6 = tt("publicKey", x6), g4 = k6(tt("message", g4), v6), "strict" in E5) throw new Error("options.strict was renamed to lowS");
      const A4 = B3 === void 0 ? C5(b6) : R4.fromBytes(tt("sig", b6), B3);
      if (A4 === false) return false;
      try {
        const N12 = t.fromBytes(x6);
        if (I3 && A4.hasHighS()) return false;
        const { r: D4, s: P6 } = A4, $3 = H3(g4), V5 = i4.inv(P6), q3 = i4.create($3 * V5), G4 = i4.create(D4 * V5), M5 = t.BASE.multiplyUnsafe(q3).add(N12.multiplyUnsafe(G4));
        return M5.is0() ? false : i4.create(M5.x) === D4;
      } catch {
        return false;
      }
    }
    __name(_5, "_");
    function p5(b6, g4, x6 = {}) {
      const { prehash: E5 } = Hn2(x6, y5);
      return g4 = k6(g4, E5), R4.fromBytes(b6, "recovered").recoverPublicKey(g4).toBytes();
    }
    __name(p5, "p");
    return Object.freeze({ keygen: u2, getPublicKey: a4, getSharedSecret: l7, utils: d4, lengths: h6, Point: t, sign: T4, verify: _5, recoverPublicKey: p5, Signature: R4, hash: e2 });
  }
  __name(na, "na");
  function ra(t) {
    const e2 = { a: t.a, b: t.b, p: t.Fp.ORDER, n: t.n, h: t.h, Gx: t.Gx, Gy: t.Gy }, n5 = t.Fp;
    let r3 = t.allowedPrivateKeyLengths ? Array.from(new Set(t.allowedPrivateKeyLengths.map((i4) => Math.ceil(i4 / 2)))) : void 0;
    const o5 = Ht2(e2.n, { BITS: t.nBitLength, allowedLengths: r3, modFromBytes: t.wrapPrivateKey }), s3 = { Fp: n5, Fn: o5, allowInfinityPoint: t.allowInfinityPoint, endo: t.endo, isTorsionFree: t.isTorsionFree, clearCofactor: t.clearCofactor, fromBytes: t.fromBytes, toBytes: t.toBytes };
    return { CURVE: e2, curveOpts: s3 };
  }
  __name(ra, "ra");
  function oa(t) {
    const { CURVE: e2, curveOpts: n5 } = ra(t), r3 = { hmac: t.hmac, randomBytes: t.randomBytes, lowS: t.lowS, bits2int: t.bits2int, bits2int_modN: t.bits2int_modN };
    return { CURVE: e2, curveOpts: n5, hash: t.hash, ecdsaOpts: r3 };
  }
  __name(oa, "oa");
  function sa(t, e2) {
    const n5 = e2.Point;
    return Object.assign({}, e2, { ProjectivePoint: n5, CURVE: Object.assign({}, t, Ho2(n5.Fn.ORDER, n5.Fn.BITS)) });
  }
  __name(sa, "sa");
  function ia(t) {
    const { CURVE: e2, curveOpts: n5, hash: r3, ecdsaOpts: o5 } = oa(t), s3 = ta(e2, n5), i4 = na(s3, r3, o5);
    return sa(t, i4);
  }
  __name(ia, "ia");
  function Dn(t, e2) {
    const n5 = /* @__PURE__ */ __name((r3) => ia({ ...t, hash: r3 }), "n");
    return { ...n5(e2), create: n5 };
  }
  __name(Dn, "Dn");
  var Qo2 = { p: BigInt("0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff"), n: BigInt("0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551"), h: BigInt(1), a: BigInt("0xffffffff00000001000000000000000000000000fffffffffffffffffffffffc"), b: BigInt("0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b"), Gx: BigInt("0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296"), Gy: BigInt("0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5") };
  var ts = { p: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000ffffffff"), n: BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffc7634d81f4372ddf581a0db248b0a77aecec196accc52973"), h: BigInt(1), a: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000fffffffc"), b: BigInt("0xb3312fa7e23ee7e4988e056be3f82d19181d9c6efe8141120314088f5013875ac656398d8a2ed19d2a85c8edd3ec2aef"), Gx: BigInt("0xaa87ca22be8b05378eb1c71ef320ad746e1d3b628ba79b9859f741e082542a385502f25dbf55296c3a545e3872760ab7"), Gy: BigInt("0x3617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da3113b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f") };
  var es = { p: BigInt("0x1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"), n: BigInt("0x01fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa51868783bf2f966b7fcc0148f709a5d03bb5c9b8899c47aebb6fb71e91386409"), h: BigInt(1), a: BigInt("0x1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc"), b: BigInt("0x0051953eb9618e1c9a1f929a21a0b68540eea2da725b99b315f3b8b489918ef109e156193951ec7e937b1652c0bd3bb1bf073573df883d2c34f1ef451fd46b503f00"), Gx: BigInt("0x00c6858e06b70404e9cd9e3ecb662395b4429c648139053fb521f828af606b4d3dbaa14b5e77efe75928fe1dc127a2ffa8de3348b3c1856a429bf97e7e31c2e5bd66"), Gy: BigInt("0x011839296a789a3bc0045c8a5fb42c7d1bd998f54449579b446817afbd17273e662c97ee72995ef42640c550b9013fad0761353c7086a272c24088be94769fd16650") };
  var ca = Ht2(Qo2.p);
  var fa = Ht2(ts.p);
  var aa = Ht2(es.p);
  var ua = Dn({ ...Qo2, Fp: ca, lowS: false }, Te2);
  Dn({ ...ts, Fp: fa, lowS: false }, wc), Dn({ ...es, Fp: aa, lowS: false, allowedPrivateKeyLengths: [130, 131, 132] }, mc);
  var la = ua;
  var Vn2 = "base10";
  var rt2 = "base16";
  var oe = "base64pad";
  var Ge2 = "base64url";
  var se = "utf8";
  var Mn2 = 0;
  var ie = 1;
  var ve2 = 2;
  var da = 0;
  var ns = 1;
  var xe2 = 12;
  var Kn2 = 32;
  function ha() {
    const t = kn2.utils.randomPrivateKey(), e2 = kn2.getPublicKey(t);
    return { privateKey: toString2(t, rt2), publicKey: toString2(e2, rt2) };
  }
  __name(ha, "ha");
  function pa() {
    const t = Mt2(Kn2);
    return toString2(t, rt2);
  }
  __name(pa, "pa");
  function ga(t, e2) {
    const n5 = kn2.getSharedSecret(fromString3(t, rt2), fromString3(e2, rt2)), r3 = Bf(Pe2, n5, void 0, void 0, Kn2);
    return toString2(r3, rt2);
  }
  __name(ga, "ga");
  function ba(t) {
    const e2 = Pe2(fromString3(t, rt2));
    return toString2(e2, rt2);
  }
  __name(ba, "ba");
  function ya(t) {
    const e2 = Pe2(fromString3(t, se));
    return toString2(e2, rt2);
  }
  __name(ya, "ya");
  function qn2(t) {
    return fromString3(`${t}`, Vn2);
  }
  __name(qn2, "qn");
  function Zt2(t) {
    return Number(toString2(t, Vn2));
  }
  __name(Zt2, "Zt");
  function rs(t) {
    return t.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
  }
  __name(rs, "rs");
  function os(t) {
    const e2 = t.replace(/-/g, "+").replace(/_/g, "/"), n5 = (4 - e2.length % 4) % 4;
    return e2 + "=".repeat(n5);
  }
  __name(os, "os");
  function ma(t) {
    const e2 = qn2(typeof t.type < "u" ? t.type : Mn2);
    if (Zt2(e2) === ie && typeof t.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
    const n5 = typeof t.senderPublicKey < "u" ? fromString3(t.senderPublicKey, rt2) : void 0, r3 = typeof t.iv < "u" ? fromString3(t.iv, rt2) : Mt2(xe2), o5 = fromString3(t.symKey, rt2), s3 = Bo2(o5, r3).encrypt(fromString3(t.message, se)), i4 = Fn2({ type: e2, sealed: s3, iv: r3, senderPublicKey: n5 });
    return t.encoding === Ge2 ? rs(i4) : i4;
  }
  __name(ma, "ma");
  function wa(t) {
    const e2 = fromString3(t.symKey, rt2), { sealed: n5, iv: r3 } = ze2({ encoded: t.encoded, encoding: t.encoding }), o5 = Bo2(e2, r3).decrypt(n5);
    if (o5 === null) throw new Error("Failed to decrypt");
    return toString2(o5, se);
  }
  __name(wa, "wa");
  function va(t, e2) {
    const n5 = qn2(ve2), r3 = Mt2(xe2), o5 = fromString3(t, se), s3 = Fn2({ type: n5, sealed: o5, iv: r3 });
    return e2 === Ge2 ? rs(s3) : s3;
  }
  __name(va, "va");
  function xa(t, e2) {
    const { sealed: n5 } = ze2({ encoded: t, encoding: e2 });
    return toString2(n5, se);
  }
  __name(xa, "xa");
  function Fn2(t) {
    if (Zt2(t.type) === ve2) return toString2(concat2([t.type, t.sealed]), oe);
    if (Zt2(t.type) === ie) {
      if (typeof t.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
      return toString2(concat2([t.type, t.senderPublicKey, t.iv, t.sealed]), oe);
    }
    return toString2(concat2([t.type, t.iv, t.sealed]), oe);
  }
  __name(Fn2, "Fn");
  function ze2(t) {
    const e2 = (t.encoding || oe) === Ge2 ? os(t.encoded) : t.encoded, n5 = fromString3(e2, oe), r3 = n5.slice(da, ns), o5 = ns;
    if (Zt2(r3) === ie) {
      const f6 = o5 + Kn2, u2 = f6 + xe2, a4 = n5.slice(o5, f6), l7 = n5.slice(f6, u2), d4 = n5.slice(u2);
      return { type: r3, sealed: d4, iv: l7, senderPublicKey: a4 };
    }
    if (Zt2(r3) === ve2) {
      const f6 = n5.slice(o5), u2 = Mt2(xe2);
      return { type: r3, sealed: f6, iv: u2 };
    }
    const s3 = o5 + xe2, i4 = n5.slice(o5, s3), c6 = n5.slice(s3);
    return { type: r3, sealed: c6, iv: i4 };
  }
  __name(ze2, "ze");
  function Ea(t, e2) {
    const n5 = ze2({ encoded: t, encoding: e2?.encoding });
    return ss({ type: Zt2(n5.type), senderPublicKey: typeof n5.senderPublicKey < "u" ? toString2(n5.senderPublicKey, rt2) : void 0, receiverPublicKey: e2?.receiverPublicKey });
  }
  __name(Ea, "Ea");
  function ss(t) {
    const e2 = t?.type || Mn2;
    if (e2 === ie) {
      if (typeof t?.senderPublicKey > "u") throw new Error("missing sender public key");
      if (typeof t?.receiverPublicKey > "u") throw new Error("missing receiver public key");
    }
    return { type: e2, senderPublicKey: t?.senderPublicKey, receiverPublicKey: t?.receiverPublicKey };
  }
  __name(ss, "ss");
  function Ba(t) {
    return t.type === ie && typeof t.senderPublicKey == "string" && typeof t.receiverPublicKey == "string";
  }
  __name(Ba, "Ba");
  function Ia(t) {
    return t.type === ve2;
  }
  __name(Ia, "Ia");
  function is(t) {
    const e2 = Buffer.from(t.x, "base64"), n5 = Buffer.from(t.y, "base64");
    return concat2([new Uint8Array([4]), e2, n5]);
  }
  __name(is, "is");
  function Aa(t, e2) {
    const [n5, r3, o5] = t.split("."), s3 = Buffer.from(os(o5), "base64");
    if (s3.length !== 64) throw new Error("Invalid signature length");
    const i4 = s3.slice(0, 32), c6 = s3.slice(32, 64), f6 = `${n5}.${r3}`, u2 = Pe2(f6), a4 = is(e2);
    if (!la.verify(concat2([i4, c6]), u2, a4)) throw new Error("Invalid signature");
    return sn(t).payload;
  }
  __name(Aa, "Aa");
  var cs = "irn";
  function Sa(t) {
    return t?.relay || { protocol: cs };
  }
  __name(Sa, "Sa");
  function Oa(t) {
    const e2 = C2[t];
    if (typeof e2 > "u") throw new Error(`Relay Protocol not supported: ${t}`);
    return e2;
  }
  __name(Oa, "Oa");
  var Na = Object.defineProperty;
  var Ua = Object.defineProperties;
  var _a = Object.getOwnPropertyDescriptors;
  var fs = Object.getOwnPropertySymbols;
  var Ra = Object.prototype.hasOwnProperty;
  var $a = Object.prototype.propertyIsEnumerable;
  var as = /* @__PURE__ */ __name((t, e2, n5) => e2 in t ? Na(t, e2, { enumerable: true, configurable: true, writable: true, value: n5 }) : t[e2] = n5, "as");
  var Zn2 = /* @__PURE__ */ __name((t, e2) => {
    for (var n5 in e2 || (e2 = {})) Ra.call(e2, n5) && as(t, n5, e2[n5]);
    if (fs) for (var n5 of fs(e2)) $a.call(e2, n5) && as(t, n5, e2[n5]);
    return t;
  }, "Zn");
  var Ta = /* @__PURE__ */ __name((t, e2) => Ua(t, _a(e2)), "Ta");
  function us(t, e2 = "-") {
    const n5 = {}, r3 = "relay" + e2;
    return Object.keys(t).forEach((o5) => {
      if (o5.startsWith(r3)) {
        const s3 = o5.replace(r3, ""), i4 = t[o5];
        n5[s3] = i4;
      }
    }), n5;
  }
  __name(us, "us");
  function Ca(t) {
    if (!t.includes("wc:")) {
      const u2 = cn(t);
      u2 != null && u2.includes("wc:") && (t = u2);
    }
    t = t.includes("wc://") ? t.replace("wc://", "") : t, t = t.includes("wc:") ? t.replace("wc:", "") : t;
    const e2 = t.indexOf(":"), n5 = t.indexOf("?") !== -1 ? t.indexOf("?") : void 0, r3 = t.substring(0, e2), o5 = t.substring(e2 + 1, n5).split("@"), s3 = typeof n5 < "u" ? t.substring(n5) : "", i4 = new URLSearchParams(s3), c6 = Object.fromEntries(i4.entries()), f6 = typeof c6.methods == "string" ? c6.methods.split(",") : void 0;
    return { protocol: r3, topic: ls(o5[0]), version: parseInt(o5[1], 10), symKey: c6.symKey, relay: us(c6), methods: f6, expiryTimestamp: c6.expiryTimestamp ? parseInt(c6.expiryTimestamp, 10) : void 0 };
  }
  __name(Ca, "Ca");
  function ls(t) {
    return t.startsWith("//") ? t.substring(2) : t;
  }
  __name(ls, "ls");
  function ds(t, e2 = "-") {
    const n5 = "relay", r3 = {};
    return Object.keys(t).forEach((o5) => {
      const s3 = o5, i4 = n5 + e2 + s3;
      t[s3] && (r3[i4] = t[s3]);
    }), r3;
  }
  __name(ds, "ds");
  function ja(t) {
    const e2 = new URLSearchParams(), n5 = Zn2(Zn2(Ta(Zn2({}, ds(t.relay)), { symKey: t.symKey }), t.expiryTimestamp && { expiryTimestamp: t.expiryTimestamp.toString() }), t.methods && { methods: t.methods.join(",") });
    return Object.entries(n5).sort(([r3], [o5]) => r3.localeCompare(o5)).forEach(([r3, o5]) => {
      o5 !== void 0 && e2.append(r3, String(o5));
    }), `${t.protocol}:${t.topic}@${t.version}?${e2}`;
  }
  __name(ja, "ja");
  function La(t, e2, n5) {
    return `${t}?wc_ev=${n5}&topic=${e2}`;
  }
  __name(La, "La");
  var ka = Object.defineProperty;
  var Pa = Object.defineProperties;
  var Ha = Object.getOwnPropertyDescriptors;
  var hs = Object.getOwnPropertySymbols;
  var Da = Object.prototype.hasOwnProperty;
  var Va = Object.prototype.propertyIsEnumerable;
  var ps = /* @__PURE__ */ __name((t, e2, n5) => e2 in t ? ka(t, e2, { enumerable: true, configurable: true, writable: true, value: n5 }) : t[e2] = n5, "ps");
  var Ma = /* @__PURE__ */ __name((t, e2) => {
    for (var n5 in e2 || (e2 = {})) Da.call(e2, n5) && ps(t, n5, e2[n5]);
    if (hs) for (var n5 of hs(e2)) Va.call(e2, n5) && ps(t, n5, e2[n5]);
    return t;
  }, "Ma");
  var Ka = /* @__PURE__ */ __name((t, e2) => Pa(t, Ha(e2)), "Ka");
  function Gt2(t) {
    const e2 = [];
    return t.forEach((n5) => {
      const [r3, o5] = n5.split(":");
      e2.push(`${r3}:${o5}`);
    }), e2;
  }
  __name(Gt2, "Gt");
  function gs(t) {
    const e2 = [];
    return Object.values(t).forEach((n5) => {
      e2.push(...Gt2(n5.accounts));
    }), [...new Set(e2)];
  }
  __name(gs, "gs");
  function qa(t) {
    const e2 = [];
    return Object.values(t).forEach((n5) => {
      e2.push(...n5.methods);
    }), [...new Set(e2)];
  }
  __name(qa, "qa");
  function Fa(t) {
    const e2 = [];
    return Object.values(t).forEach((n5) => {
      e2.push(...n5.events);
    }), [...new Set(e2)];
  }
  __name(Fa, "Fa");
  function bs(t, e2) {
    const n5 = [];
    return Object.values(t).forEach((r3) => {
      Gt2(r3.accounts).includes(e2) && n5.push(...r3.methods);
    }), n5;
  }
  __name(bs, "bs");
  function ys(t, e2) {
    const n5 = [];
    return Object.values(t).forEach((r3) => {
      Gt2(r3.accounts).includes(e2) && n5.push(...r3.events);
    }), n5;
  }
  __name(ys, "ys");
  function Ga(t) {
    var e2;
    const { proposal: { requiredNamespaces: n5, optionalNamespaces: r3 = {} }, supportedNamespaces: o5 } = t, s3 = Ee2(n5), i4 = Ee2(r3), c6 = {};
    Object.keys(o5).forEach((a4) => {
      const l7 = o5[a4].chains, d4 = o5[a4].methods, h6 = o5[a4].events, y5 = o5[a4].accounts;
      l7.forEach((m3) => {
        if (!y5.some((w4) => w4.includes(m3))) throw new Error(`No accounts provided for chain ${m3} in namespace ${a4}`);
      }), c6[a4] = { chains: l7, methods: d4, events: h6, accounts: y5 };
    });
    const f6 = _s(n5, c6, "approve()");
    if (f6) throw new Error(f6.message);
    const u2 = {};
    if (!Object.keys(n5).length && !Object.keys(r3).length) return c6;
    Object.keys(s3).forEach((a4) => {
      const l7 = o5[a4].chains.filter((m3) => {
        var w4, U3;
        return (U3 = (w4 = s3[a4]) == null ? void 0 : w4.chains) == null ? void 0 : U3.includes(m3);
      }), d4 = o5[a4].methods.filter((m3) => {
        var w4, U3;
        return (U3 = (w4 = s3[a4]) == null ? void 0 : w4.methods) == null ? void 0 : U3.includes(m3);
      }), h6 = o5[a4].events.filter((m3) => {
        var w4, U3;
        return (U3 = (w4 = s3[a4]) == null ? void 0 : w4.events) == null ? void 0 : U3.includes(m3);
      }), y5 = l7.map((m3) => o5[a4].accounts.filter((w4) => w4.includes(`${m3}:`))).flat();
      u2[a4] = { chains: l7, methods: d4, events: h6, accounts: y5 };
    }), Object.keys(i4).forEach((a4) => {
      var l7, d4, h6, y5, m3, w4;
      if (!o5[a4]) return;
      const U3 = (d4 = (l7 = i4[a4]) == null ? void 0 : l7.chains) == null ? void 0 : d4.filter((H3) => o5[a4].chains.includes(H3)), F2 = o5[a4].methods.filter((H3) => {
        var j7, L3;
        return (L3 = (j7 = i4[a4]) == null ? void 0 : j7.methods) == null ? void 0 : L3.includes(H3);
      }), R4 = o5[a4].events.filter((H3) => {
        var j7, L3;
        return (L3 = (j7 = i4[a4]) == null ? void 0 : j7.events) == null ? void 0 : L3.includes(H3);
      }), Z2 = U3?.map((H3) => o5[a4].accounts.filter((j7) => j7.includes(`${H3}:`))).flat();
      u2[a4] = { chains: ut2((h6 = u2[a4]) == null ? void 0 : h6.chains, U3), methods: ut2((y5 = u2[a4]) == null ? void 0 : y5.methods, F2), events: ut2((m3 = u2[a4]) == null ? void 0 : m3.events, R4), accounts: ut2((w4 = u2[a4]) == null ? void 0 : w4.accounts, Z2) };
    });
    for (const [a4, l7] of Object.entries(u2)) (l7.accounts.length === 0 || ((e2 = l7?.chains) == null ? void 0 : e2.length) === 0) && delete u2[a4];
    return u2;
  }
  __name(Ga, "Ga");
  function Gn2(t) {
    return t.includes(":");
  }
  __name(Gn2, "Gn");
  function ms(t) {
    return Gn2(t) ? t.split(":")[0] : t;
  }
  __name(ms, "ms");
  function Ee2(t) {
    var e2, n5, r3;
    const o5 = {};
    if (!Ye2(t)) return o5;
    for (const [s3, i4] of Object.entries(t)) {
      const c6 = Gn2(s3) ? [s3] : i4.chains, f6 = i4.methods || [], u2 = i4.events || [], a4 = ms(s3);
      o5[a4] = Ka(Ma({}, o5[a4]), { chains: ut2(c6, (e2 = o5[a4]) == null ? void 0 : e2.chains), methods: ut2(f6, (n5 = o5[a4]) == null ? void 0 : n5.methods), events: ut2(u2, (r3 = o5[a4]) == null ? void 0 : r3.events) });
    }
    return o5;
  }
  __name(Ee2, "Ee");
  function ws(t) {
    const e2 = {};
    return t?.forEach((n5) => {
      var r3;
      const [o5, s3] = n5.split(":");
      e2[o5] || (e2[o5] = { accounts: [], chains: [], events: [], methods: [] }), e2[o5].accounts.push(n5), (r3 = e2[o5].chains) == null || r3.push(`${o5}:${s3}`);
    }), e2;
  }
  __name(ws, "ws");
  function za(t, e2) {
    e2 = e2.map((r3) => r3.replace("did:pkh:", ""));
    const n5 = ws(e2);
    for (const [r3, o5] of Object.entries(n5)) o5.methods ? o5.methods = ut2(o5.methods, t) : o5.methods = t, o5.events = ["chainChanged", "accountsChanged"];
    return n5;
  }
  __name(za, "za");
  function Ya(t, e2) {
    var n5, r3, o5, s3, i4, c6;
    const f6 = Ee2(t), u2 = Ee2(e2), a4 = {}, l7 = Object.keys(f6).concat(Object.keys(u2));
    for (const d4 of l7) a4[d4] = { chains: ut2((n5 = f6[d4]) == null ? void 0 : n5.chains, (r3 = u2[d4]) == null ? void 0 : r3.chains), methods: ut2((o5 = f6[d4]) == null ? void 0 : o5.methods, (s3 = u2[d4]) == null ? void 0 : s3.methods), events: ut2((i4 = f6[d4]) == null ? void 0 : i4.events, (c6 = u2[d4]) == null ? void 0 : c6.events) };
    return a4;
  }
  __name(Ya, "Ya");
  var vs = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } };
  var xs = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
  function Bt2(t, e2) {
    const { message: n5, code: r3 } = xs[t];
    return { message: e2 ? `${n5} ${e2}` : n5, code: r3 };
  }
  __name(Bt2, "Bt");
  function zt2(t, e2) {
    const { message: n5, code: r3 } = vs[t];
    return { message: e2 ? `${n5} ${e2}` : n5, code: r3 };
  }
  __name(zt2, "zt");
  function Be2(t, e2) {
    return Array.isArray(t) ? typeof e2 < "u" && t.length ? t.every(e2) : true : false;
  }
  __name(Be2, "Be");
  function Ye2(t) {
    return Object.getPrototypeOf(t) === Object.prototype && Object.keys(t).length;
  }
  __name(Ye2, "Ye");
  function Dt2(t) {
    return typeof t > "u";
  }
  __name(Dt2, "Dt");
  function ft2(t, e2) {
    return e2 && Dt2(t) ? true : typeof t == "string" && !!t.trim().length;
  }
  __name(ft2, "ft");
  function We2(t, e2) {
    return e2 && Dt2(t) ? true : typeof t == "number" && !isNaN(t);
  }
  __name(We2, "We");
  function Wa(t, e2) {
    const { requiredNamespaces: n5 } = e2, r3 = Object.keys(t.namespaces), o5 = Object.keys(n5);
    let s3 = true;
    return At(o5, r3) ? (r3.forEach((i4) => {
      const { accounts: c6, methods: f6, events: u2 } = t.namespaces[i4], a4 = Gt2(c6), l7 = n5[i4];
      (!At(Se2(i4, l7), a4) || !At(l7.methods, f6) || !At(l7.events, u2)) && (s3 = false);
    }), s3) : false;
  }
  __name(Wa, "Wa");
  function Ie2(t) {
    return ft2(t, false) && t.includes(":") ? t.split(":").length === 2 : false;
  }
  __name(Ie2, "Ie");
  function Es(t) {
    if (ft2(t, false) && t.includes(":")) {
      const e2 = t.split(":");
      if (e2.length === 3) {
        const n5 = e2[0] + ":" + e2[1];
        return !!e2[2] && Ie2(n5);
      }
    }
    return false;
  }
  __name(Es, "Es");
  function Xa(t) {
    function e2(n5) {
      try {
        return typeof new URL(n5) < "u";
      } catch {
        return false;
      }
    }
    __name(e2, "e");
    try {
      if (ft2(t, false)) {
        if (e2(t)) return true;
        const n5 = cn(t);
        return e2(n5);
      }
    } catch {
    }
    return false;
  }
  __name(Xa, "Xa");
  function Ja(t) {
    var e2;
    return (e2 = t?.proposer) == null ? void 0 : e2.publicKey;
  }
  __name(Ja, "Ja");
  function Qa(t) {
    return t?.topic;
  }
  __name(Qa, "Qa");
  function tu(t, e2) {
    let n5 = null;
    return ft2(t?.publicKey, false) || (n5 = Bt2("MISSING_OR_INVALID", `${e2} controller public key should be a string`)), n5;
  }
  __name(tu, "tu");
  function zn2(t) {
    let e2 = true;
    return Be2(t) ? t.length && (e2 = t.every((n5) => ft2(n5, false))) : e2 = false, e2;
  }
  __name(zn2, "zn");
  function Bs(t, e2, n5) {
    let r3 = null;
    return Be2(e2) && e2.length ? e2.forEach((o5) => {
      r3 || Ie2(o5) || (r3 = zt2("UNSUPPORTED_CHAINS", `${n5}, chain ${o5} should be a string and conform to "namespace:chainId" format`));
    }) : Ie2(t) || (r3 = zt2("UNSUPPORTED_CHAINS", `${n5}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), r3;
  }
  __name(Bs, "Bs");
  function Is(t, e2, n5) {
    let r3 = null;
    return Object.entries(t).forEach(([o5, s3]) => {
      if (r3) return;
      const i4 = Bs(o5, Se2(o5, s3), `${e2} ${n5}`);
      i4 && (r3 = i4);
    }), r3;
  }
  __name(Is, "Is");
  function As(t, e2) {
    let n5 = null;
    return Be2(t) ? t.forEach((r3) => {
      n5 || Es(r3) || (n5 = zt2("UNSUPPORTED_ACCOUNTS", `${e2}, account ${r3} should be a string and conform to "namespace:chainId:address" format`));
    }) : n5 = zt2("UNSUPPORTED_ACCOUNTS", `${e2}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), n5;
  }
  __name(As, "As");
  function Ss(t, e2) {
    let n5 = null;
    return Object.values(t).forEach((r3) => {
      if (n5) return;
      const o5 = As(r3?.accounts, `${e2} namespace`);
      o5 && (n5 = o5);
    }), n5;
  }
  __name(Ss, "Ss");
  function Os(t, e2) {
    let n5 = null;
    return zn2(t?.methods) ? zn2(t?.events) || (n5 = zt2("UNSUPPORTED_EVENTS", `${e2}, events should be an array of strings or empty array for no events`)) : n5 = zt2("UNSUPPORTED_METHODS", `${e2}, methods should be an array of strings or empty array for no methods`), n5;
  }
  __name(Os, "Os");
  function Yn2(t, e2) {
    let n5 = null;
    return Object.values(t).forEach((r3) => {
      if (n5) return;
      const o5 = Os(r3, `${e2}, namespace`);
      o5 && (n5 = o5);
    }), n5;
  }
  __name(Yn2, "Yn");
  function eu(t, e2, n5) {
    let r3 = null;
    if (t && Ye2(t)) {
      const o5 = Yn2(t, e2);
      o5 && (r3 = o5);
      const s3 = Is(t, e2, n5);
      s3 && (r3 = s3);
    } else r3 = Bt2("MISSING_OR_INVALID", `${e2}, ${n5} should be an object with data`);
    return r3;
  }
  __name(eu, "eu");
  function Ns(t, e2) {
    let n5 = null;
    if (t && Ye2(t)) {
      const r3 = Yn2(t, e2);
      r3 && (n5 = r3);
      const o5 = Ss(t, e2);
      o5 && (n5 = o5);
    } else n5 = Bt2("MISSING_OR_INVALID", `${e2}, namespaces should be an object with data`);
    return n5;
  }
  __name(Ns, "Ns");
  function Us(t) {
    return ft2(t.protocol, true);
  }
  __name(Us, "Us");
  function nu(t, e2) {
    let n5 = false;
    return e2 && !t ? n5 = true : t && Be2(t) && t.length && t.forEach((r3) => {
      n5 = Us(r3);
    }), n5;
  }
  __name(nu, "nu");
  function ru(t) {
    return typeof t == "number";
  }
  __name(ru, "ru");
  function ou(t) {
    return typeof t < "u" && typeof t !== null;
  }
  __name(ou, "ou");
  function su(t) {
    return !(!t || typeof t != "object" || !t.code || !We2(t.code, false) || !t.message || !ft2(t.message, false));
  }
  __name(su, "su");
  function iu(t) {
    return !(Dt2(t) || !ft2(t.method, false));
  }
  __name(iu, "iu");
  function cu(t) {
    return !(Dt2(t) || Dt2(t.result) && Dt2(t.error) || !We2(t.id, false) || !ft2(t.jsonrpc, false));
  }
  __name(cu, "cu");
  function fu(t) {
    return !(Dt2(t) || !ft2(t.name, false));
  }
  __name(fu, "fu");
  function au(t, e2) {
    return !(!Ie2(e2) || !gs(t).includes(e2));
  }
  __name(au, "au");
  function uu(t, e2, n5) {
    return ft2(n5, false) ? bs(t, e2).includes(n5) : false;
  }
  __name(uu, "uu");
  function lu(t, e2, n5) {
    return ft2(n5, false) ? ys(t, e2).includes(n5) : false;
  }
  __name(lu, "lu");
  function _s(t, e2, n5) {
    let r3 = null;
    const o5 = du(t), s3 = hu(e2), i4 = Object.keys(o5), c6 = Object.keys(s3), f6 = Rs(Object.keys(t)), u2 = Rs(Object.keys(e2)), a4 = f6.filter((l7) => !u2.includes(l7));
    return a4.length && (r3 = Bt2("NON_CONFORMING_NAMESPACES", `${n5} namespaces keys don't satisfy requiredNamespaces.
      Required: ${a4.toString()}
      Received: ${Object.keys(e2).toString()}`)), At(i4, c6) || (r3 = Bt2("NON_CONFORMING_NAMESPACES", `${n5} namespaces chains don't satisfy required namespaces.
      Required: ${i4.toString()}
      Approved: ${c6.toString()}`)), Object.keys(e2).forEach((l7) => {
      if (!l7.includes(":") || r3) return;
      const d4 = Gt2(e2[l7].accounts);
      d4.includes(l7) || (r3 = Bt2("NON_CONFORMING_NAMESPACES", `${n5} namespaces accounts don't satisfy namespace accounts for ${l7}
        Required: ${l7}
        Approved: ${d4.toString()}`));
    }), i4.forEach((l7) => {
      r3 || (At(o5[l7].methods, s3[l7].methods) ? At(o5[l7].events, s3[l7].events) || (r3 = Bt2("NON_CONFORMING_NAMESPACES", `${n5} namespaces events don't satisfy namespace events for ${l7}`)) : r3 = Bt2("NON_CONFORMING_NAMESPACES", `${n5} namespaces methods don't satisfy namespace methods for ${l7}`));
    }), r3;
  }
  __name(_s, "_s");
  function du(t) {
    const e2 = {};
    return Object.keys(t).forEach((n5) => {
      var r3;
      n5.includes(":") ? e2[n5] = t[n5] : (r3 = t[n5].chains) == null || r3.forEach((o5) => {
        e2[o5] = { methods: t[n5].methods, events: t[n5].events };
      });
    }), e2;
  }
  __name(du, "du");
  function Rs(t) {
    return [...new Set(t.map((e2) => e2.includes(":") ? e2.split(":")[0] : e2))];
  }
  __name(Rs, "Rs");
  function hu(t) {
    const e2 = {};
    return Object.keys(t).forEach((n5) => {
      if (n5.includes(":")) e2[n5] = t[n5];
      else {
        const r3 = Gt2(t[n5].accounts);
        r3?.forEach((o5) => {
          e2[o5] = { accounts: t[n5].accounts.filter((s3) => s3.includes(`${o5}:`)), methods: t[n5].methods, events: t[n5].events };
        });
      }
    }), e2;
  }
  __name(hu, "hu");
  function pu(t, e2) {
    return We2(t, false) && t <= e2.max && t >= e2.min;
  }
  __name(pu, "pu");
  function gu() {
    const t = Vt2();
    return new Promise((e2) => {
      switch (t) {
        case et.browser:
          e2($s());
          break;
        case et.reactNative:
          e2(Ts());
          break;
        case et.node:
          e2(Cs());
          break;
        default:
          e2(true);
      }
    });
  }
  __name(gu, "gu");
  function $s() {
    return Wt2() && navigator?.onLine;
  }
  __name($s, "$s");
  async function Ts() {
    if (It2() && typeof globalThis < "u" && globalThis != null && globalThis.NetInfo) {
      const t = await (globalThis == null ? void 0 : globalThis.NetInfo.fetch());
      return t?.isConnected;
    }
    return true;
  }
  __name(Ts, "Ts");
  function Cs() {
    return true;
  }
  __name(Cs, "Cs");
  function bu(t) {
    switch (Vt2()) {
      case et.browser:
        js(t);
        break;
      case et.reactNative:
        Ls(t);
        break;
      case et.node:
        break;
    }
  }
  __name(bu, "bu");
  function js(t) {
    !It2() && Wt2() && (window.addEventListener("online", () => t(true)), window.addEventListener("offline", () => t(false)));
  }
  __name(js, "js");
  function Ls(t) {
    It2() && typeof globalThis < "u" && globalThis != null && globalThis.NetInfo && globalThis?.NetInfo.addEventListener((e2) => t(e2?.isConnected));
  }
  __name(Ls, "Ls");
  function yu() {
    var t;
    return Wt2() && (0, import_window_getters.getDocument)() ? ((t = (0, import_window_getters.getDocument)()) == null ? void 0 : t.visibilityState) === "visible" : true;
  }
  __name(yu, "yu");
  var Wn2 = {};
  var _mu = class _mu {
    static get(e2) {
      return Wn2[e2];
    }
    static set(e2, n5) {
      Wn2[e2] = n5;
    }
    static delete(e2) {
      delete Wn2[e2];
    }
  };
  __name(_mu, "mu");
  var mu = _mu;
  function ks(t) {
    const e2 = esm_default2.decode(t);
    if (e2.length < 33) throw new Error("Too short to contain a public key");
    return e2.slice(1, 33);
  }
  __name(ks, "ks");
  function Ps({ publicKey: t, signature: e2, payload: n5 }) {
    var r3;
    const o5 = Xn2(n5.method), s3 = 128 | parseInt(((r3 = n5.version) == null ? void 0 : r3.toString()) || "4"), i4 = vu(n5.address), c6 = n5.era === "00" ? new Uint8Array([0]) : Xn2(n5.era);
    if (c6.length !== 1 && c6.length !== 2) throw new Error("Invalid era length");
    const f6 = parseInt(n5.nonce, 16), u2 = new Uint8Array([f6 & 255, f6 >> 8 & 255]), a4 = BigInt(`0x${wu(n5.tip)}`), l7 = Eu(a4), d4 = new Uint8Array([0, ...t, i4, ...e2, ...c6, ...u2, ...l7, ...o5]), h6 = xu(d4.length + 1);
    return new Uint8Array([...h6, s3, ...d4]);
  }
  __name(Ps, "Ps");
  function Hs(t) {
    const e2 = Xn2(t), n5 = (0, import_blakejs.blake2b)(e2, void 0, 32);
    return "0x" + Buffer.from(n5).toString("hex");
  }
  __name(Hs, "Hs");
  function Xn2(t) {
    return new Uint8Array(t.replace(/^0x/, "").match(/.{1,2}/g).map((e2) => parseInt(e2, 16)));
  }
  __name(Xn2, "Xn");
  function wu(t) {
    return t.startsWith("0x") ? t.slice(2) : t;
  }
  __name(wu, "wu");
  function vu(t) {
    const e2 = esm_default2.decode(t)[0];
    return e2 === 42 ? 0 : e2 === 60 ? 2 : 1;
  }
  __name(vu, "vu");
  function xu(t) {
    if (t < 64) return new Uint8Array([t << 2]);
    if (t < 16384) {
      const e2 = t << 2 | 1;
      return new Uint8Array([e2 & 255, e2 >> 8 & 255]);
    } else if (t < 1 << 30) {
      const e2 = t << 2 | 2;
      return new Uint8Array([e2 & 255, e2 >> 8 & 255, e2 >> 16 & 255, e2 >> 24 & 255]);
    } else throw new Error("Compact encoding > 2^30 not supported");
  }
  __name(xu, "xu");
  function Eu(t) {
    if (t < BigInt(1) << BigInt(6)) return new Uint8Array([Number(t << BigInt(2))]);
    if (t < BigInt(1) << BigInt(14)) {
      const e2 = t << BigInt(2) | BigInt(1);
      return new Uint8Array([Number(e2 & BigInt(255)), Number(e2 >> BigInt(8) & BigInt(255))]);
    } else if (t < BigInt(1) << BigInt(30)) {
      const e2 = t << BigInt(2) | BigInt(2);
      return new Uint8Array([Number(e2 & BigInt(255)), Number(e2 >> BigInt(8) & BigInt(255)), Number(e2 >> BigInt(16) & BigInt(255)), Number(e2 >> BigInt(24) & BigInt(255))]);
    } else throw new Error("BigInt compact encoding not supported > 2^30");
  }
  __name(Eu, "Eu");
  function Bu(t) {
    const e2 = Uint8Array.from(Buffer.from(t.signature, "hex")), n5 = ks(t.transaction.address), r3 = Ps({ publicKey: n5, signature: e2, payload: t.transaction }), o5 = Buffer.from(r3).toString("hex");
    return Hs(o5);
  }
  __name(Bu, "Bu");
  function Iu({ logger: t, name: e2 }) {
    const n5 = typeof t == "string" ? Y({ opts: { level: t, name: e2 } }).logger : t;
    return n5.level = typeof t == "string" ? t : t.level, n5;
  }
  __name(Iu, "Iu");

  // node_modules/@walletconnect/jsonrpc-provider/dist/index.es.js
  init_shims();
  var import_events5 = __toESM(require_events());

  // node_modules/@walletconnect/jsonrpc-utils/dist/esm/index.js
  var esm_exports = {};
  __export(esm_exports, {
    DEFAULT_ERROR: () => DEFAULT_ERROR,
    IBaseJsonRpcProvider: () => n4,
    IEvents: () => e,
    IJsonRpcConnection: () => o2,
    IJsonRpcProvider: () => r2,
    INTERNAL_ERROR: () => INTERNAL_ERROR,
    INVALID_PARAMS: () => INVALID_PARAMS,
    INVALID_REQUEST: () => INVALID_REQUEST,
    METHOD_NOT_FOUND: () => METHOD_NOT_FOUND,
    PARSE_ERROR: () => PARSE_ERROR,
    RESERVED_ERROR_CODES: () => RESERVED_ERROR_CODES,
    SERVER_ERROR: () => SERVER_ERROR,
    SERVER_ERROR_CODE_RANGE: () => SERVER_ERROR_CODE_RANGE,
    STANDARD_ERROR_MAP: () => STANDARD_ERROR_MAP,
    formatErrorMessage: () => formatErrorMessage,
    formatJsonRpcError: () => formatJsonRpcError,
    formatJsonRpcRequest: () => formatJsonRpcRequest,
    formatJsonRpcResult: () => formatJsonRpcResult,
    getBigIntRpcId: () => getBigIntRpcId,
    getError: () => getError,
    getErrorByCode: () => getErrorByCode,
    isHttpUrl: () => isHttpUrl,
    isJsonRpcError: () => isJsonRpcError,
    isJsonRpcPayload: () => isJsonRpcPayload,
    isJsonRpcRequest: () => isJsonRpcRequest,
    isJsonRpcResponse: () => isJsonRpcResponse,
    isJsonRpcResult: () => isJsonRpcResult,
    isJsonRpcValidationInvalid: () => isJsonRpcValidationInvalid,
    isLocalhostUrl: () => isLocalhostUrl,
    isNodeJs: () => isNodeJs,
    isReservedErrorCode: () => isReservedErrorCode,
    isServerErrorCode: () => isServerErrorCode,
    isValidDefaultRoute: () => isValidDefaultRoute,
    isValidErrorCode: () => isValidErrorCode,
    isValidLeadingWildcardRoute: () => isValidLeadingWildcardRoute,
    isValidRoute: () => isValidRoute,
    isValidTrailingWildcardRoute: () => isValidTrailingWildcardRoute,
    isValidWildcardRoute: () => isValidWildcardRoute,
    isWsUrl: () => isWsUrl,
    parseConnectionError: () => parseConnectionError,
    payloadId: () => payloadId,
    validateJsonRpcError: () => validateJsonRpcError
  });
  init_shims();

  // node_modules/@walletconnect/jsonrpc-utils/dist/esm/constants.js
  init_shims();
  var PARSE_ERROR = "PARSE_ERROR";
  var INVALID_REQUEST = "INVALID_REQUEST";
  var METHOD_NOT_FOUND = "METHOD_NOT_FOUND";
  var INVALID_PARAMS = "INVALID_PARAMS";
  var INTERNAL_ERROR = "INTERNAL_ERROR";
  var SERVER_ERROR = "SERVER_ERROR";
  var RESERVED_ERROR_CODES = [-32700, -32600, -32601, -32602, -32603];
  var SERVER_ERROR_CODE_RANGE = [-32e3, -32099];
  var STANDARD_ERROR_MAP = {
    [PARSE_ERROR]: { code: -32700, message: "Parse error" },
    [INVALID_REQUEST]: { code: -32600, message: "Invalid Request" },
    [METHOD_NOT_FOUND]: { code: -32601, message: "Method not found" },
    [INVALID_PARAMS]: { code: -32602, message: "Invalid params" },
    [INTERNAL_ERROR]: { code: -32603, message: "Internal error" },
    [SERVER_ERROR]: { code: -32e3, message: "Server error" }
  };
  var DEFAULT_ERROR = SERVER_ERROR;

  // node_modules/@walletconnect/jsonrpc-utils/dist/esm/error.js
  init_shims();
  function isServerErrorCode(code2) {
    return code2 <= SERVER_ERROR_CODE_RANGE[0] && code2 >= SERVER_ERROR_CODE_RANGE[1];
  }
  __name(isServerErrorCode, "isServerErrorCode");
  function isReservedErrorCode(code2) {
    return RESERVED_ERROR_CODES.includes(code2);
  }
  __name(isReservedErrorCode, "isReservedErrorCode");
  function isValidErrorCode(code2) {
    return typeof code2 === "number";
  }
  __name(isValidErrorCode, "isValidErrorCode");
  function getError(type) {
    if (!Object.keys(STANDARD_ERROR_MAP).includes(type)) {
      return STANDARD_ERROR_MAP[DEFAULT_ERROR];
    }
    return STANDARD_ERROR_MAP[type];
  }
  __name(getError, "getError");
  function getErrorByCode(code2) {
    const match = Object.values(STANDARD_ERROR_MAP).find((e2) => e2.code === code2);
    if (!match) {
      return STANDARD_ERROR_MAP[DEFAULT_ERROR];
    }
    return match;
  }
  __name(getErrorByCode, "getErrorByCode");
  function validateJsonRpcError(response) {
    if (typeof response.error.code === "undefined") {
      return { valid: false, error: "Missing code for JSON-RPC error" };
    }
    if (typeof response.error.message === "undefined") {
      return { valid: false, error: "Missing message for JSON-RPC error" };
    }
    if (!isValidErrorCode(response.error.code)) {
      return {
        valid: false,
        error: `Invalid error code type for JSON-RPC: ${response.error.code}`
      };
    }
    if (isReservedErrorCode(response.error.code)) {
      const error = getErrorByCode(response.error.code);
      if (error.message !== STANDARD_ERROR_MAP[DEFAULT_ERROR].message && response.error.message === error.message) {
        return {
          valid: false,
          error: `Invalid error code message for JSON-RPC: ${response.error.code}`
        };
      }
    }
    return { valid: true };
  }
  __name(validateJsonRpcError, "validateJsonRpcError");
  function parseConnectionError(e2, url, type) {
    return e2.message.includes("getaddrinfo ENOTFOUND") || e2.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${type} RPC url at ${url}`) : e2;
  }
  __name(parseConnectionError, "parseConnectionError");

  // node_modules/@walletconnect/jsonrpc-utils/dist/esm/env.js
  var env_exports = {};
  __export(env_exports, {
    isNodeJs: () => isNodeJs
  });
  init_shims();
  var import_environment = __toESM(require_cjs4());
  __reExport(env_exports, __toESM(require_cjs4()));
  var isNodeJs = import_environment.isNode;

  // node_modules/@walletconnect/jsonrpc-utils/dist/esm/index.js
  __reExport(esm_exports, env_exports);

  // node_modules/@walletconnect/jsonrpc-utils/dist/esm/format.js
  init_shims();
  function payloadId(entropy = 3) {
    const date = Date.now() * Math.pow(10, entropy);
    const extra = Math.floor(Math.random() * Math.pow(10, entropy));
    return date + extra;
  }
  __name(payloadId, "payloadId");
  function getBigIntRpcId(entropy = 6) {
    return BigInt(payloadId(entropy));
  }
  __name(getBigIntRpcId, "getBigIntRpcId");
  function formatJsonRpcRequest(method, params, id) {
    return {
      id: id || payloadId(),
      jsonrpc: "2.0",
      method,
      params
    };
  }
  __name(formatJsonRpcRequest, "formatJsonRpcRequest");
  function formatJsonRpcResult(id, result) {
    return {
      id,
      jsonrpc: "2.0",
      result
    };
  }
  __name(formatJsonRpcResult, "formatJsonRpcResult");
  function formatJsonRpcError(id, error, data) {
    return {
      id,
      jsonrpc: "2.0",
      error: formatErrorMessage(error, data)
    };
  }
  __name(formatJsonRpcError, "formatJsonRpcError");
  function formatErrorMessage(error, data) {
    if (typeof error === "undefined") {
      return getError(INTERNAL_ERROR);
    }
    if (typeof error === "string") {
      error = Object.assign(Object.assign({}, getError(SERVER_ERROR)), { message: error });
    }
    if (typeof data !== "undefined") {
      error.data = data;
    }
    if (isReservedErrorCode(error.code)) {
      error = getErrorByCode(error.code);
    }
    return error;
  }
  __name(formatErrorMessage, "formatErrorMessage");

  // node_modules/@walletconnect/jsonrpc-utils/dist/esm/routing.js
  init_shims();
  function isValidRoute(route) {
    if (route.includes("*")) {
      return isValidWildcardRoute(route);
    }
    if (/\W/g.test(route)) {
      return false;
    }
    return true;
  }
  __name(isValidRoute, "isValidRoute");
  function isValidDefaultRoute(route) {
    return route === "*";
  }
  __name(isValidDefaultRoute, "isValidDefaultRoute");
  function isValidWildcardRoute(route) {
    if (isValidDefaultRoute(route)) {
      return true;
    }
    if (!route.includes("*")) {
      return false;
    }
    if (route.split("*").length !== 2) {
      return false;
    }
    if (route.split("*").filter((x6) => x6.trim() === "").length !== 1) {
      return false;
    }
    return true;
  }
  __name(isValidWildcardRoute, "isValidWildcardRoute");
  function isValidLeadingWildcardRoute(route) {
    return !isValidDefaultRoute(route) && isValidWildcardRoute(route) && !route.split("*")[0].trim();
  }
  __name(isValidLeadingWildcardRoute, "isValidLeadingWildcardRoute");
  function isValidTrailingWildcardRoute(route) {
    return !isValidDefaultRoute(route) && isValidWildcardRoute(route) && !route.split("*")[1].trim();
  }
  __name(isValidTrailingWildcardRoute, "isValidTrailingWildcardRoute");

  // node_modules/@walletconnect/jsonrpc-utils/dist/esm/types.js
  init_shims();

  // node_modules/@walletconnect/jsonrpc-types/dist/index.es.js
  init_shims();
  var _e3 = class _e3 {
  };
  __name(_e3, "e");
  var e = _e3;
  var _o3 = class _o3 extends e {
    constructor(c6) {
      super();
    }
  };
  __name(_o3, "o");
  var o2 = _o3;
  var _n4 = class _n4 extends e {
    constructor() {
      super();
    }
  };
  __name(_n4, "n");
  var n4 = _n4;
  var _r3 = class _r3 extends n4 {
    constructor(c6) {
      super();
    }
  };
  __name(_r3, "r");
  var r2 = _r3;

  // node_modules/@walletconnect/jsonrpc-utils/dist/esm/url.js
  init_shims();
  var HTTP_REGEX = "^https?:";
  var WS_REGEX = "^wss?:";
  function getUrlProtocol(url) {
    const matches = url.match(new RegExp(/^\w+:/, "gi"));
    if (!matches || !matches.length)
      return;
    return matches[0];
  }
  __name(getUrlProtocol, "getUrlProtocol");
  function matchRegexProtocol(url, regex) {
    const protocol = getUrlProtocol(url);
    if (typeof protocol === "undefined")
      return false;
    return new RegExp(regex).test(protocol);
  }
  __name(matchRegexProtocol, "matchRegexProtocol");
  function isHttpUrl(url) {
    return matchRegexProtocol(url, HTTP_REGEX);
  }
  __name(isHttpUrl, "isHttpUrl");
  function isWsUrl(url) {
    return matchRegexProtocol(url, WS_REGEX);
  }
  __name(isWsUrl, "isWsUrl");
  function isLocalhostUrl(url) {
    return new RegExp("wss?://localhost(:d{2,5})?").test(url);
  }
  __name(isLocalhostUrl, "isLocalhostUrl");

  // node_modules/@walletconnect/jsonrpc-utils/dist/esm/validators.js
  init_shims();
  function isJsonRpcPayload(payload) {
    return typeof payload === "object" && "id" in payload && "jsonrpc" in payload && payload.jsonrpc === "2.0";
  }
  __name(isJsonRpcPayload, "isJsonRpcPayload");
  function isJsonRpcRequest(payload) {
    return isJsonRpcPayload(payload) && "method" in payload;
  }
  __name(isJsonRpcRequest, "isJsonRpcRequest");
  function isJsonRpcResponse(payload) {
    return isJsonRpcPayload(payload) && (isJsonRpcResult(payload) || isJsonRpcError(payload));
  }
  __name(isJsonRpcResponse, "isJsonRpcResponse");
  function isJsonRpcResult(payload) {
    return "result" in payload;
  }
  __name(isJsonRpcResult, "isJsonRpcResult");
  function isJsonRpcError(payload) {
    return "error" in payload;
  }
  __name(isJsonRpcError, "isJsonRpcError");
  function isJsonRpcValidationInvalid(validation) {
    return "error" in validation && validation.valid === false;
  }
  __name(isJsonRpcValidationInvalid, "isJsonRpcValidationInvalid");

  // node_modules/@walletconnect/jsonrpc-provider/dist/index.es.js
  var _o4 = class _o4 extends r2 {
    constructor(t) {
      super(t), this.events = new import_events5.EventEmitter(), this.hasRegisteredEventListeners = false, this.connection = this.setConnection(t), this.connection.connected && this.registerEventListeners();
    }
    async connect(t = this.connection) {
      await this.open(t);
    }
    async disconnect() {
      await this.close();
    }
    on(t, e2) {
      this.events.on(t, e2);
    }
    once(t, e2) {
      this.events.once(t, e2);
    }
    off(t, e2) {
      this.events.off(t, e2);
    }
    removeListener(t, e2) {
      this.events.removeListener(t, e2);
    }
    async request(t, e2) {
      return this.requestStrict(formatJsonRpcRequest(t.method, t.params || [], t.id || getBigIntRpcId().toString()), e2);
    }
    async requestStrict(t, e2) {
      return new Promise(async (i4, s3) => {
        if (!this.connection.connected) try {
          await this.open();
        } catch (n5) {
          s3(n5);
        }
        this.events.on(`${t.id}`, (n5) => {
          isJsonRpcError(n5) ? s3(n5.error) : i4(n5.result);
        });
        try {
          await this.connection.send(t, e2);
        } catch (n5) {
          s3(n5);
        }
      });
    }
    setConnection(t = this.connection) {
      return t;
    }
    onPayload(t) {
      this.events.emit("payload", t), isJsonRpcResponse(t) ? this.events.emit(`${t.id}`, t) : this.events.emit("message", { type: t.method, data: t.params });
    }
    onClose(t) {
      t && t.code === 3e3 && this.events.emit("error", new Error(`WebSocket connection closed abnormally with code: ${t.code} ${t.reason ? `(${t.reason})` : ""}`)), this.events.emit("disconnect");
    }
    async open(t = this.connection) {
      this.connection === t && this.connection.connected || (this.connection.connected && this.close(), typeof t == "string" && (await this.connection.open(t), t = this.connection), this.connection = this.setConnection(t), await this.connection.open(), this.registerEventListeners(), this.events.emit("connect"));
    }
    async close() {
      await this.connection.close();
    }
    registerEventListeners() {
      this.hasRegisteredEventListeners || (this.connection.on("payload", (t) => this.onPayload(t)), this.connection.on("close", (t) => this.onClose(t)), this.connection.on("error", (t) => this.events.emit("error", t)), this.connection.on("register_error", (t) => this.onClose()), this.hasRegisteredEventListeners = true);
    }
  };
  __name(_o4, "o");
  var o3 = _o4;

  // node_modules/@walletconnect/jsonrpc-ws-connection/dist/index.es.js
  init_shims();
  var import_events6 = __toESM(require_events());
  var v3 = /* @__PURE__ */ __name(() => typeof WebSocket < "u" ? WebSocket : typeof globalThis < "u" && typeof globalThis.WebSocket < "u" ? globalThis.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : require_browser3(), "v");
  var w2 = /* @__PURE__ */ __name(() => typeof WebSocket < "u" || typeof globalThis < "u" && typeof globalThis.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u", "w");
  var d2 = /* @__PURE__ */ __name((r3) => r3.split("?")[0], "d");
  var h4 = 10;
  var b3 = v3();
  var _f3 = class _f3 {
    constructor(e2) {
      if (this.url = e2, this.events = new import_events6.EventEmitter(), this.registering = false, !isWsUrl(e2)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${e2}`);
      this.url = e2;
    }
    get connected() {
      return typeof this.socket < "u";
    }
    get connecting() {
      return this.registering;
    }
    on(e2, t) {
      this.events.on(e2, t);
    }
    once(e2, t) {
      this.events.once(e2, t);
    }
    off(e2, t) {
      this.events.off(e2, t);
    }
    removeListener(e2, t) {
      this.events.removeListener(e2, t);
    }
    async open(e2 = this.url) {
      await this.register(e2);
    }
    async close() {
      return new Promise((e2, t) => {
        if (typeof this.socket > "u") {
          t(new Error("Connection already closed"));
          return;
        }
        this.socket.onclose = (n5) => {
          this.onClose(n5), e2();
        }, this.socket.close();
      });
    }
    async send(e2) {
      typeof this.socket > "u" && (this.socket = await this.register());
      try {
        this.socket.send(safeJsonStringify(e2));
      } catch (t) {
        this.onError(e2.id, t);
      }
    }
    register(e2 = this.url) {
      if (!isWsUrl(e2)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${e2}`);
      if (this.registering) {
        const t = this.events.getMaxListeners();
        return (this.events.listenerCount("register_error") >= t || this.events.listenerCount("open") >= t) && this.events.setMaxListeners(t + 1), new Promise((n5, s3) => {
          this.events.once("register_error", (o5) => {
            this.resetMaxListeners(), s3(o5);
          }), this.events.once("open", () => {
            if (this.resetMaxListeners(), typeof this.socket > "u") return s3(new Error("WebSocket connection is missing or invalid"));
            n5(this.socket);
          });
        });
      }
      return this.url = e2, this.registering = true, new Promise((t, n5) => {
        const s3 = (0, esm_exports.isReactNative)() ? void 0 : { rejectUnauthorized: !isLocalhostUrl(e2) }, o5 = new b3(e2, [], s3);
        w2() ? o5.onerror = (i4) => {
          const a4 = i4;
          n5(this.emitError(a4.error));
        } : o5.on("error", (i4) => {
          n5(this.emitError(i4));
        }), o5.onopen = () => {
          this.onOpen(o5), t(o5);
        };
      });
    }
    onOpen(e2) {
      e2.onmessage = (t) => this.onPayload(t), e2.onclose = (t) => this.onClose(t), this.socket = e2, this.registering = false, this.events.emit("open");
    }
    onClose(e2) {
      this.socket = void 0, this.registering = false, this.events.emit("close", e2);
    }
    onPayload(e2) {
      if (typeof e2.data > "u") return;
      const t = typeof e2.data == "string" ? safeJsonParse(e2.data) : e2.data;
      this.events.emit("payload", t);
    }
    onError(e2, t) {
      const n5 = this.parseError(t), s3 = n5.message || n5.toString(), o5 = formatJsonRpcError(e2, s3);
      this.events.emit("payload", o5);
    }
    parseError(e2, t = this.url) {
      return parseConnectionError(e2, d2(t), "WS");
    }
    resetMaxListeners() {
      this.events.getMaxListeners() > h4 && this.events.setMaxListeners(h4);
    }
    emitError(e2) {
      const t = this.parseError(new Error(e2?.message || `WebSocket connection failed for host: ${d2(this.url)}`));
      return this.events.emit("register_error", t), t;
    }
  };
  __name(_f3, "f");
  var f3 = _f3;

  // node_modules/@walletconnect/core/dist/index.js
  var import_window_getters2 = __toESM(require_cjs2(), 1);
  var Ue3 = "wc";
  var Fe2 = 2;
  var ge3 = "core";
  var W3 = `${Ue3}@2:${ge3}:`;
  var Et3 = { name: ge3, logger: "error" };
  var It3 = { database: ":memory:" };
  var Tt3 = "crypto";
  var Me3 = "client_ed25519_seed";
  var Ct2 = import_time4.ONE_DAY;
  var Pt3 = "keychain";
  var St3 = "0.3";
  var Ot3 = "messages";
  var Rt3 = "0.3";
  var At2 = import_time4.SIX_HOURS;
  var xt3 = "publisher";
  var Nt3 = "irn";
  var $t3 = "error";
  var Ke3 = "wss://relay.walletconnect.org";
  var zt3 = "relayer";
  var C3 = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" };
  var Lt3 = "_subscription";
  var M4 = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" };
  var kt3 = 0.1;
  var Pe3 = "2.23.0";
  var ee2 = { link_mode: "link_mode", relay: "relay" };
  var ye3 = { inbound: "inbound", outbound: "outbound" };
  var jt3 = "0.3";
  var Ut3 = "WALLETCONNECT_CLIENT_ID";
  var Be3 = "WALLETCONNECT_LINK_MODE_APPS";
  var j4 = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" };
  var Ft3 = "subscription";
  var Mt3 = "0.3";
  var Qs = import_time4.FIVE_SECONDS * 1e3;
  var Kt3 = "pairing";
  var Bt3 = "0.3";
  var oe2 = { wc_pairingDelete: { req: { ttl: import_time4.ONE_DAY, prompt: false, tag: 1e3 }, res: { ttl: import_time4.ONE_DAY, prompt: false, tag: 1001 } }, wc_pairingPing: { req: { ttl: import_time4.THIRTY_SECONDS, prompt: false, tag: 1002 }, res: { ttl: import_time4.THIRTY_SECONDS, prompt: false, tag: 1003 } }, unregistered_method: { req: { ttl: import_time4.ONE_DAY, prompt: false, tag: 0 }, res: { ttl: import_time4.ONE_DAY, prompt: false, tag: 0 } } };
  var ae2 = { create: "pairing_create", expire: "pairing_expire", delete: "pairing_delete", ping: "pairing_ping" };
  var V3 = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" };
  var Vt3 = "history";
  var qt3 = "0.3";
  var Gt3 = "expirer";
  var q = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" };
  var Wt3 = "0.3";
  var Ht3 = "verify-api";
  var ir2 = "https://verify.walletconnect.com";
  var Yt2 = "https://verify.walletconnect.org";
  var be3 = Yt2;
  var Jt3 = `${be3}/v3`;
  var Xt3 = [ir2, Yt2];
  var Zt3 = "echo";
  var Qt3 = "https://echo.walletconnect.com";
  var Y2 = { pairing_started: "pairing_started", pairing_uri_validation_success: "pairing_uri_validation_success", pairing_uri_not_expired: "pairing_uri_not_expired", store_new_pairing: "store_new_pairing", subscribing_pairing_topic: "subscribing_pairing_topic", subscribe_pairing_topic_success: "subscribe_pairing_topic_success", existing_pairing: "existing_pairing", pairing_not_expired: "pairing_not_expired", emit_inactive_pairing: "emit_inactive_pairing", emit_session_proposal: "emit_session_proposal", subscribing_to_pairing_topic: "subscribing_to_pairing_topic" };
  var X3 = { no_wss_connection: "no_wss_connection", no_internet_connection: "no_internet_connection", malformed_pairing_uri: "malformed_pairing_uri", active_pairing_already_exists: "active_pairing_already_exists", subscribe_pairing_topic_failure: "subscribe_pairing_topic_failure", pairing_expired: "pairing_expired", proposal_expired: "proposal_expired", proposal_listener_not_found: "proposal_listener_not_found" };
  var rr3 = { session_approve_started: "session_approve_started", proposal_not_expired: "proposal_not_expired", session_namespaces_validation_success: "session_namespaces_validation_success", create_session_topic: "create_session_topic", subscribing_session_topic: "subscribing_session_topic", subscribe_session_topic_success: "subscribe_session_topic_success", publishing_session_approve: "publishing_session_approve", session_approve_publish_success: "session_approve_publish_success", store_session: "store_session", publishing_session_settle: "publishing_session_settle", session_settle_publish_success: "session_settle_publish_success", session_request_response_started: "session_request_response_started", session_request_response_validation_success: "session_request_response_validation_success", session_request_response_publish_started: "session_request_response_publish_started" };
  var nr3 = { no_internet_connection: "no_internet_connection", no_wss_connection: "no_wss_connection", proposal_expired: "proposal_expired", subscribe_session_topic_failure: "subscribe_session_topic_failure", session_approve_publish_failure: "session_approve_publish_failure", session_settle_publish_failure: "session_settle_publish_failure", session_approve_namespace_validation_failure: "session_approve_namespace_validation_failure", proposal_not_found: "proposal_not_found", session_request_response_validation_failure: "session_request_response_validation_failure", session_request_response_publish_failure: "session_request_response_publish_failure" };
  var or3 = { authenticated_session_approve_started: "authenticated_session_approve_started", authenticated_session_not_expired: "authenticated_session_not_expired", chains_caip2_compliant: "chains_caip2_compliant", chains_evm_compliant: "chains_evm_compliant", create_authenticated_session_topic: "create_authenticated_session_topic", cacaos_verified: "cacaos_verified", store_authenticated_session: "store_authenticated_session", subscribing_authenticated_session_topic: "subscribing_authenticated_session_topic", subscribe_authenticated_session_topic_success: "subscribe_authenticated_session_topic_success", publishing_authenticated_session_approve: "publishing_authenticated_session_approve", authenticated_session_approve_publish_success: "authenticated_session_approve_publish_success" };
  var ar3 = { no_internet_connection: "no_internet_connection", no_wss_connection: "no_wss_connection", missing_session_authenticate_request: "missing_session_authenticate_request", session_authenticate_request_expired: "session_authenticate_request_expired", chains_caip2_compliant_failure: "chains_caip2_compliant_failure", chains_evm_compliant_failure: "chains_evm_compliant_failure", invalid_cacao: "invalid_cacao", subscribe_authenticated_session_topic_failure: "subscribe_authenticated_session_topic_failure", authenticated_session_approve_publish_failure: "authenticated_session_approve_publish_failure", authenticated_session_pending_request_not_found: "authenticated_session_pending_request_not_found" };
  var ei = 0.1;
  var ti = "event-client";
  var ii2 = 86400;
  var si2 = "https://pulse.walletconnect.org/batch";
  function cr2(r3, e2) {
    if (r3.length >= 255) throw new TypeError("Alphabet too long");
    for (var t = new Uint8Array(256), i4 = 0; i4 < t.length; i4++) t[i4] = 255;
    for (var s3 = 0; s3 < r3.length; s3++) {
      var n5 = r3.charAt(s3), o5 = n5.charCodeAt(0);
      if (t[o5] !== 255) throw new TypeError(n5 + " is ambiguous");
      t[o5] = s3;
    }
    var a4 = r3.length, c6 = r3.charAt(0), h6 = Math.log(a4) / Math.log(256), l7 = Math.log(256) / Math.log(a4);
    function g4(u2) {
      if (u2 instanceof Uint8Array || (ArrayBuffer.isView(u2) ? u2 = new Uint8Array(u2.buffer, u2.byteOffset, u2.byteLength) : Array.isArray(u2) && (u2 = Uint8Array.from(u2))), !(u2 instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
      if (u2.length === 0) return "";
      for (var m3 = 0, D4 = 0, w4 = 0, E5 = u2.length; w4 !== E5 && u2[w4] === 0; ) w4++, m3++;
      for (var L3 = (E5 - w4) * l7 + 1 >>> 0, I3 = new Uint8Array(L3); w4 !== E5; ) {
        for (var k6 = u2[w4], T4 = 0, S5 = L3 - 1; (k6 !== 0 || T4 < D4) && S5 !== -1; S5--, T4++) k6 += 256 * I3[S5] >>> 0, I3[S5] = k6 % a4 >>> 0, k6 = k6 / a4 >>> 0;
        if (k6 !== 0) throw new Error("Non-zero carry");
        D4 = T4, w4++;
      }
      for (var O6 = L3 - D4; O6 !== L3 && I3[O6] === 0; ) O6++;
      for (var te4 = c6.repeat(m3); O6 < L3; ++O6) te4 += r3.charAt(I3[O6]);
      return te4;
    }
    __name(g4, "g");
    function y5(u2) {
      if (typeof u2 != "string") throw new TypeError("Expected String");
      if (u2.length === 0) return new Uint8Array();
      var m3 = 0;
      if (u2[m3] !== " ") {
        for (var D4 = 0, w4 = 0; u2[m3] === c6; ) D4++, m3++;
        for (var E5 = (u2.length - m3) * h6 + 1 >>> 0, L3 = new Uint8Array(E5); u2[m3]; ) {
          var I3 = t[u2.charCodeAt(m3)];
          if (I3 === 255) return;
          for (var k6 = 0, T4 = E5 - 1; (I3 !== 0 || k6 < w4) && T4 !== -1; T4--, k6++) I3 += a4 * L3[T4] >>> 0, L3[T4] = I3 % 256 >>> 0, I3 = I3 / 256 >>> 0;
          if (I3 !== 0) throw new Error("Non-zero carry");
          w4 = k6, m3++;
        }
        if (u2[m3] !== " ") {
          for (var S5 = E5 - w4; S5 !== E5 && L3[S5] === 0; ) S5++;
          for (var O6 = new Uint8Array(D4 + (E5 - S5)), te4 = D4; S5 !== E5; ) O6[te4++] = L3[S5++];
          return O6;
        }
      }
    }
    __name(y5, "y");
    function _5(u2) {
      var m3 = y5(u2);
      if (m3) return m3;
      throw new Error(`Non-${e2} character`);
    }
    __name(_5, "_");
    return { encode: g4, decodeUnsafe: y5, decode: _5 };
  }
  __name(cr2, "cr");
  var hr2 = cr2;
  var lr3 = hr2;
  var ri2 = /* @__PURE__ */ __name((r3) => {
    if (r3 instanceof Uint8Array && r3.constructor.name === "Uint8Array") return r3;
    if (r3 instanceof ArrayBuffer) return new Uint8Array(r3);
    if (ArrayBuffer.isView(r3)) return new Uint8Array(r3.buffer, r3.byteOffset, r3.byteLength);
    throw new Error("Unknown type, must be binary type");
  }, "ri");
  var ur3 = /* @__PURE__ */ __name((r3) => new TextEncoder().encode(r3), "ur");
  var dr3 = /* @__PURE__ */ __name((r3) => new TextDecoder().decode(r3), "dr");
  var _pr = class _pr {
    constructor(e2, t, i4) {
      this.name = e2, this.prefix = t, this.baseEncode = i4;
    }
    encode(e2) {
      if (e2 instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e2)}`;
      throw Error("Unknown type, must be binary type");
    }
  };
  __name(_pr, "pr");
  var pr3 = _pr;
  var _gr = class _gr {
    constructor(e2, t, i4) {
      if (this.name = e2, this.prefix = t, t.codePointAt(0) === void 0) throw new Error("Invalid prefix character");
      this.prefixCodePoint = t.codePointAt(0), this.baseDecode = i4;
    }
    decode(e2) {
      if (typeof e2 == "string") {
        if (e2.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e2)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
        return this.baseDecode(e2.slice(this.prefix.length));
      } else throw Error("Can only multibase decode strings");
    }
    or(e2) {
      return ni(this, e2);
    }
  };
  __name(_gr, "gr");
  var gr3 = _gr;
  var _yr = class _yr {
    constructor(e2) {
      this.decoders = e2;
    }
    or(e2) {
      return ni(this, e2);
    }
    decode(e2) {
      const t = e2[0], i4 = this.decoders[t];
      if (i4) return i4.decode(e2);
      throw RangeError(`Unable to decode multibase string ${JSON.stringify(e2)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
    }
  };
  __name(_yr, "yr");
  var yr3 = _yr;
  var ni = /* @__PURE__ */ __name((r3, e2) => new yr3({ ...r3.decoders || { [r3.prefix]: r3 }, ...e2.decoders || { [e2.prefix]: e2 } }), "ni");
  var _br = class _br {
    constructor(e2, t, i4, s3) {
      this.name = e2, this.prefix = t, this.baseEncode = i4, this.baseDecode = s3, this.encoder = new pr3(e2, t, i4), this.decoder = new gr3(e2, t, s3);
    }
    encode(e2) {
      return this.encoder.encode(e2);
    }
    decode(e2) {
      return this.decoder.decode(e2);
    }
  };
  __name(_br, "br");
  var br3 = _br;
  var Se3 = /* @__PURE__ */ __name(({ name: r3, prefix: e2, encode: t, decode: i4 }) => new br3(r3, e2, t, i4), "Se");
  var me3 = /* @__PURE__ */ __name(({ prefix: r3, name: e2, alphabet: t }) => {
    const { encode: i4, decode: s3 } = lr3(t, e2);
    return Se3({ prefix: r3, name: e2, encode: i4, decode: /* @__PURE__ */ __name((n5) => ri2(s3(n5)), "decode") });
  }, "me");
  var mr3 = /* @__PURE__ */ __name((r3, e2, t, i4) => {
    const s3 = {};
    for (let l7 = 0; l7 < e2.length; ++l7) s3[e2[l7]] = l7;
    let n5 = r3.length;
    for (; r3[n5 - 1] === "="; ) --n5;
    const o5 = new Uint8Array(n5 * t / 8 | 0);
    let a4 = 0, c6 = 0, h6 = 0;
    for (let l7 = 0; l7 < n5; ++l7) {
      const g4 = s3[r3[l7]];
      if (g4 === void 0) throw new SyntaxError(`Non-${i4} character`);
      c6 = c6 << t | g4, a4 += t, a4 >= 8 && (a4 -= 8, o5[h6++] = 255 & c6 >> a4);
    }
    if (a4 >= t || 255 & c6 << 8 - a4) throw new SyntaxError("Unexpected end of data");
    return o5;
  }, "mr");
  var fr2 = /* @__PURE__ */ __name((r3, e2, t) => {
    const i4 = e2[e2.length - 1] === "=", s3 = (1 << t) - 1;
    let n5 = "", o5 = 0, a4 = 0;
    for (let c6 = 0; c6 < r3.length; ++c6) for (a4 = a4 << 8 | r3[c6], o5 += 8; o5 > t; ) o5 -= t, n5 += e2[s3 & a4 >> o5];
    if (o5 && (n5 += e2[s3 & a4 << t - o5]), i4) for (; n5.length * t & 7; ) n5 += "=";
    return n5;
  }, "fr");
  var x4 = /* @__PURE__ */ __name(({ name: r3, prefix: e2, bitsPerChar: t, alphabet: i4 }) => Se3({ prefix: e2, name: r3, encode(s3) {
    return fr2(s3, i4, t);
  }, decode(s3) {
    return mr3(s3, i4, t, r3);
  } }), "x");
  var Dr3 = Se3({ prefix: "\0", name: "identity", encode: /* @__PURE__ */ __name((r3) => dr3(r3), "encode"), decode: /* @__PURE__ */ __name((r3) => ur3(r3), "decode") });
  var vr2 = Object.freeze({ __proto__: null, identity: Dr3 });
  var _r4 = x4({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
  var wr3 = Object.freeze({ __proto__: null, base2: _r4 });
  var Er2 = x4({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
  var Ir3 = Object.freeze({ __proto__: null, base8: Er2 });
  var Tr3 = me3({ prefix: "9", name: "base10", alphabet: "0123456789" });
  var Cr3 = Object.freeze({ __proto__: null, base10: Tr3 });
  var Pr3 = x4({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 });
  var Sr3 = x4({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
  var Or3 = Object.freeze({ __proto__: null, base16: Pr3, base16upper: Sr3 });
  var Rr3 = x4({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 });
  var Ar3 = x4({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 });
  var xr2 = x4({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 });
  var Nr3 = x4({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 });
  var $r3 = x4({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 });
  var zr3 = x4({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 });
  var Lr3 = x4({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 });
  var kr3 = x4({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 });
  var jr3 = x4({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
  var Ur3 = Object.freeze({ __proto__: null, base32: Rr3, base32upper: Ar3, base32pad: xr2, base32padupper: Nr3, base32hex: $r3, base32hexupper: zr3, base32hexpad: Lr3, base32hexpadupper: kr3, base32z: jr3 });
  var Fr3 = me3({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" });
  var Mr3 = me3({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
  var Kr3 = Object.freeze({ __proto__: null, base36: Fr3, base36upper: Mr3 });
  var Br3 = me3({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" });
  var Vr3 = me3({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
  var qr3 = Object.freeze({ __proto__: null, base58btc: Br3, base58flickr: Vr3 });
  var Gr3 = x4({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 });
  var Wr3 = x4({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 });
  var Hr3 = x4({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 });
  var Yr3 = x4({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
  var Jr3 = Object.freeze({ __proto__: null, base64: Gr3, base64pad: Wr3, base64url: Hr3, base64urlpad: Yr3 });
  var oi2 = Array.from("\u{1F680}\u{1FA90}\u2604\u{1F6F0}\u{1F30C}\u{1F311}\u{1F312}\u{1F313}\u{1F314}\u{1F315}\u{1F316}\u{1F317}\u{1F318}\u{1F30D}\u{1F30F}\u{1F30E}\u{1F409}\u2600\u{1F4BB}\u{1F5A5}\u{1F4BE}\u{1F4BF}\u{1F602}\u2764\u{1F60D}\u{1F923}\u{1F60A}\u{1F64F}\u{1F495}\u{1F62D}\u{1F618}\u{1F44D}\u{1F605}\u{1F44F}\u{1F601}\u{1F525}\u{1F970}\u{1F494}\u{1F496}\u{1F499}\u{1F622}\u{1F914}\u{1F606}\u{1F644}\u{1F4AA}\u{1F609}\u263A\u{1F44C}\u{1F917}\u{1F49C}\u{1F614}\u{1F60E}\u{1F607}\u{1F339}\u{1F926}\u{1F389}\u{1F49E}\u270C\u2728\u{1F937}\u{1F631}\u{1F60C}\u{1F338}\u{1F64C}\u{1F60B}\u{1F497}\u{1F49A}\u{1F60F}\u{1F49B}\u{1F642}\u{1F493}\u{1F929}\u{1F604}\u{1F600}\u{1F5A4}\u{1F603}\u{1F4AF}\u{1F648}\u{1F447}\u{1F3B6}\u{1F612}\u{1F92D}\u2763\u{1F61C}\u{1F48B}\u{1F440}\u{1F62A}\u{1F611}\u{1F4A5}\u{1F64B}\u{1F61E}\u{1F629}\u{1F621}\u{1F92A}\u{1F44A}\u{1F973}\u{1F625}\u{1F924}\u{1F449}\u{1F483}\u{1F633}\u270B\u{1F61A}\u{1F61D}\u{1F634}\u{1F31F}\u{1F62C}\u{1F643}\u{1F340}\u{1F337}\u{1F63B}\u{1F613}\u2B50\u2705\u{1F97A}\u{1F308}\u{1F608}\u{1F918}\u{1F4A6}\u2714\u{1F623}\u{1F3C3}\u{1F490}\u2639\u{1F38A}\u{1F498}\u{1F620}\u261D\u{1F615}\u{1F33A}\u{1F382}\u{1F33B}\u{1F610}\u{1F595}\u{1F49D}\u{1F64A}\u{1F639}\u{1F5E3}\u{1F4AB}\u{1F480}\u{1F451}\u{1F3B5}\u{1F91E}\u{1F61B}\u{1F534}\u{1F624}\u{1F33C}\u{1F62B}\u26BD\u{1F919}\u2615\u{1F3C6}\u{1F92B}\u{1F448}\u{1F62E}\u{1F646}\u{1F37B}\u{1F343}\u{1F436}\u{1F481}\u{1F632}\u{1F33F}\u{1F9E1}\u{1F381}\u26A1\u{1F31E}\u{1F388}\u274C\u270A\u{1F44B}\u{1F630}\u{1F928}\u{1F636}\u{1F91D}\u{1F6B6}\u{1F4B0}\u{1F353}\u{1F4A2}\u{1F91F}\u{1F641}\u{1F6A8}\u{1F4A8}\u{1F92C}\u2708\u{1F380}\u{1F37A}\u{1F913}\u{1F619}\u{1F49F}\u{1F331}\u{1F616}\u{1F476}\u{1F974}\u25B6\u27A1\u2753\u{1F48E}\u{1F4B8}\u2B07\u{1F628}\u{1F31A}\u{1F98B}\u{1F637}\u{1F57A}\u26A0\u{1F645}\u{1F61F}\u{1F635}\u{1F44E}\u{1F932}\u{1F920}\u{1F927}\u{1F4CC}\u{1F535}\u{1F485}\u{1F9D0}\u{1F43E}\u{1F352}\u{1F617}\u{1F911}\u{1F30A}\u{1F92F}\u{1F437}\u260E\u{1F4A7}\u{1F62F}\u{1F486}\u{1F446}\u{1F3A4}\u{1F647}\u{1F351}\u2744\u{1F334}\u{1F4A3}\u{1F438}\u{1F48C}\u{1F4CD}\u{1F940}\u{1F922}\u{1F445}\u{1F4A1}\u{1F4A9}\u{1F450}\u{1F4F8}\u{1F47B}\u{1F910}\u{1F92E}\u{1F3BC}\u{1F975}\u{1F6A9}\u{1F34E}\u{1F34A}\u{1F47C}\u{1F48D}\u{1F4E3}\u{1F942}");
  var Xr3 = oi2.reduce((r3, e2, t) => (r3[t] = e2, r3), []);
  var Zr3 = oi2.reduce((r3, e2, t) => (r3[e2.codePointAt(0)] = t, r3), []);
  function Qr3(r3) {
    return r3.reduce((e2, t) => (e2 += Xr3[t], e2), "");
  }
  __name(Qr3, "Qr");
  function en3(r3) {
    const e2 = [];
    for (const t of r3) {
      const i4 = Zr3[t.codePointAt(0)];
      if (i4 === void 0) throw new Error(`Non-base256emoji character: ${t}`);
      e2.push(i4);
    }
    return new Uint8Array(e2);
  }
  __name(en3, "en");
  var tn = Se3({ prefix: "\u{1F680}", name: "base256emoji", encode: Qr3, decode: en3 });
  var sn2 = Object.freeze({ __proto__: null, base256emoji: tn });
  var rn3 = ci2;
  var ai = 128;
  var nn2 = 127;
  var on3 = ~nn2;
  var an2 = Math.pow(2, 31);
  function ci2(r3, e2, t) {
    e2 = e2 || [], t = t || 0;
    for (var i4 = t; r3 >= an2; ) e2[t++] = r3 & 255 | ai, r3 /= 128;
    for (; r3 & on3; ) e2[t++] = r3 & 255 | ai, r3 >>>= 7;
    return e2[t] = r3 | 0, ci2.bytes = t - i4 + 1, e2;
  }
  __name(ci2, "ci");
  var cn2 = Ve3;
  var hn2 = 128;
  var hi2 = 127;
  function Ve3(r3, i4) {
    var t = 0, i4 = i4 || 0, s3 = 0, n5 = i4, o5, a4 = r3.length;
    do {
      if (n5 >= a4) throw Ve3.bytes = 0, new RangeError("Could not decode varint");
      o5 = r3[n5++], t += s3 < 28 ? (o5 & hi2) << s3 : (o5 & hi2) * Math.pow(2, s3), s3 += 7;
    } while (o5 >= hn2);
    return Ve3.bytes = n5 - i4, t;
  }
  __name(Ve3, "Ve");
  var ln2 = Math.pow(2, 7);
  var un2 = Math.pow(2, 14);
  var dn2 = Math.pow(2, 21);
  var pn2 = Math.pow(2, 28);
  var gn3 = Math.pow(2, 35);
  var yn3 = Math.pow(2, 42);
  var bn3 = Math.pow(2, 49);
  var mn3 = Math.pow(2, 56);
  var fn2 = Math.pow(2, 63);
  var Dn2 = /* @__PURE__ */ __name(function(r3) {
    return r3 < ln2 ? 1 : r3 < un2 ? 2 : r3 < dn2 ? 3 : r3 < pn2 ? 4 : r3 < gn3 ? 5 : r3 < yn3 ? 6 : r3 < bn3 ? 7 : r3 < mn3 ? 8 : r3 < fn2 ? 9 : 10;
  }, "Dn");
  var vn3 = { encode: rn3, decode: cn2, encodingLength: Dn2 };
  var li2 = vn3;
  var ui = /* @__PURE__ */ __name((r3, e2, t = 0) => (li2.encode(r3, e2, t), e2), "ui");
  var di2 = /* @__PURE__ */ __name((r3) => li2.encodingLength(r3), "di");
  var qe3 = /* @__PURE__ */ __name((r3, e2) => {
    const t = e2.byteLength, i4 = di2(r3), s3 = i4 + di2(t), n5 = new Uint8Array(s3 + t);
    return ui(r3, n5, 0), ui(t, n5, i4), n5.set(e2, s3), new _n5(r3, t, e2, n5);
  }, "qe");
  var __n = class __n {
    constructor(e2, t, i4, s3) {
      this.code = e2, this.size = t, this.digest = i4, this.bytes = s3;
    }
  };
  __name(__n, "_n");
  var _n5 = __n;
  var pi2 = /* @__PURE__ */ __name(({ name: r3, code: e2, encode: t }) => new wn2(r3, e2, t), "pi");
  var _wn = class _wn {
    constructor(e2, t, i4) {
      this.name = e2, this.code = t, this.encode = i4;
    }
    digest(e2) {
      if (e2 instanceof Uint8Array) {
        const t = this.encode(e2);
        return t instanceof Uint8Array ? qe3(this.code, t) : t.then((i4) => qe3(this.code, i4));
      } else throw Error("Unknown type, must be binary type");
    }
  };
  __name(_wn, "wn");
  var wn2 = _wn;
  var gi = /* @__PURE__ */ __name((r3) => async (e2) => new Uint8Array(await crypto.subtle.digest(r3, e2)), "gi");
  var En3 = pi2({ name: "sha2-256", code: 18, encode: gi("SHA-256") });
  var In3 = pi2({ name: "sha2-512", code: 19, encode: gi("SHA-512") });
  var Tn3 = Object.freeze({ __proto__: null, sha256: En3, sha512: In3 });
  var yi = 0;
  var Cn3 = "identity";
  var bi2 = ri2;
  var Pn3 = /* @__PURE__ */ __name((r3) => qe3(yi, bi2(r3)), "Pn");
  var Sn3 = { code: yi, name: Cn3, encode: bi2, digest: Pn3 };
  var On3 = Object.freeze({ __proto__: null, identity: Sn3 });
  new TextEncoder(), new TextDecoder();
  var mi = { ...vr2, ...wr3, ...Ir3, ...Cr3, ...Or3, ...Ur3, ...Kr3, ...qr3, ...Jr3, ...sn2 };
  ({ ...Tn3, ...On3 });
  function fi2(r3) {
    return globalThis.Buffer != null ? new Uint8Array(r3.buffer, r3.byteOffset, r3.byteLength) : r3;
  }
  __name(fi2, "fi");
  function Rn3(r3 = 0) {
    return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? fi2(globalThis.Buffer.allocUnsafe(r3)) : new Uint8Array(r3);
  }
  __name(Rn3, "Rn");
  function Di2(r3, e2, t, i4) {
    return { name: r3, prefix: e2, encoder: { name: r3, prefix: e2, encode: t }, decoder: { decode: i4 } };
  }
  __name(Di2, "Di");
  var vi2 = Di2("utf8", "u", (r3) => "u" + new TextDecoder("utf8").decode(r3), (r3) => new TextEncoder().encode(r3.substring(1)));
  var Ge3 = Di2("ascii", "a", (r3) => {
    let e2 = "a";
    for (let t = 0; t < r3.length; t++) e2 += String.fromCharCode(r3[t]);
    return e2;
  }, (r3) => {
    r3 = r3.substring(1);
    const e2 = Rn3(r3.length);
    for (let t = 0; t < r3.length; t++) e2[t] = r3.charCodeAt(t);
    return e2;
  });
  var An3 = { utf8: vi2, "utf-8": vi2, hex: mi.base16, latin1: Ge3, ascii: Ge3, binary: Ge3, ...mi };
  function xn3(r3, e2 = "utf8") {
    const t = An3[e2];
    if (!t) throw new Error(`Unsupported encoding "${e2}"`);
    return (e2 === "utf8" || e2 === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? fi2(globalThis.Buffer.from(r3, "utf-8")) : t.decoder.decode(`${t.prefix}${r3}`);
  }
  __name(xn3, "xn");
  var Nn3 = Object.defineProperty;
  var $n3 = /* @__PURE__ */ __name((r3, e2, t) => e2 in r3 ? Nn3(r3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r3[e2] = t, "$n");
  var J4 = /* @__PURE__ */ __name((r3, e2, t) => $n3(r3, typeof e2 != "symbol" ? e2 + "" : e2, t), "J");
  var __i = class __i {
    constructor(e2, t) {
      this.core = e2, this.logger = t, J4(this, "keychain", /* @__PURE__ */ new Map()), J4(this, "name", Pt3), J4(this, "version", St3), J4(this, "initialized", false), J4(this, "storagePrefix", W3), J4(this, "init", async () => {
        if (!this.initialized) {
          const i4 = await this.getKeyChain();
          typeof i4 < "u" && (this.keychain = i4), this.initialized = true;
        }
      }), J4(this, "has", (i4) => (this.isInitialized(), this.keychain.has(i4))), J4(this, "set", async (i4, s3) => {
        this.isInitialized(), this.keychain.set(i4, s3), await this.persist();
      }), J4(this, "get", (i4) => {
        this.isInitialized();
        const s3 = this.keychain.get(i4);
        if (typeof s3 > "u") {
          const { message: n5 } = Bt2("NO_MATCHING_KEY", `${this.name}: ${i4}`);
          throw new Error(n5);
        }
        return s3;
      }), J4(this, "del", async (i4) => {
        this.isInitialized(), this.keychain.delete(i4), await this.persist();
      }), this.core = e2, this.logger = X(t, this.name);
    }
    get context() {
      return w(this.logger);
    }
    get storageKey() {
      return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
    }
    async setKeyChain(e2) {
      await this.core.storage.setItem(this.storageKey, vi(e2));
    }
    async getKeyChain() {
      const e2 = await this.core.storage.getItem(this.storageKey);
      return typeof e2 < "u" ? xi(e2) : void 0;
    }
    async persist() {
      await this.setKeyChain(this.keychain);
    }
    isInitialized() {
      if (!this.initialized) {
        const { message: e2 } = Bt2("NOT_INITIALIZED", this.name);
        throw new Error(e2);
      }
    }
  };
  __name(__i, "_i");
  var _i3 = __i;
  var zn3 = Object.defineProperty;
  var Ln3 = /* @__PURE__ */ __name((r3, e2, t) => e2 in r3 ? zn3(r3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r3[e2] = t, "Ln");
  var R2 = /* @__PURE__ */ __name((r3, e2, t) => Ln3(r3, typeof e2 != "symbol" ? e2 + "" : e2, t), "R");
  var _wi = class _wi {
    constructor(e2, t, i4) {
      this.core = e2, this.logger = t, R2(this, "name", Tt3), R2(this, "keychain"), R2(this, "randomSessionIdentifier", pa()), R2(this, "initialized", false), R2(this, "clientId"), R2(this, "init", async () => {
        this.initialized || (await this.keychain.init(), this.initialized = true);
      }), R2(this, "hasKeys", (s3) => (this.isInitialized(), this.keychain.has(s3))), R2(this, "getClientId", async () => {
        if (this.isInitialized(), this.clientId) return this.clientId;
        const s3 = await this.getClientSeed(), n5 = Po(s3), o5 = Qe(n5.publicKey);
        return this.clientId = o5, o5;
      }), R2(this, "generateKeyPair", () => {
        this.isInitialized();
        const s3 = ha();
        return this.setPrivateKey(s3.publicKey, s3.privateKey);
      }), R2(this, "signJWT", async (s3) => {
        this.isInitialized();
        const n5 = await this.getClientSeed(), o5 = Po(n5), a4 = this.randomSessionIdentifier, c6 = Ct2;
        return await Qo(a4, s3, c6, o5);
      }), R2(this, "generateSharedKey", (s3, n5, o5) => {
        this.isInitialized();
        const a4 = this.getPrivateKey(s3), c6 = ga(a4, n5);
        return this.setSymKey(c6, o5);
      }), R2(this, "setSymKey", async (s3, n5) => {
        this.isInitialized();
        const o5 = n5 || ba(s3);
        return await this.keychain.set(o5, s3), o5;
      }), R2(this, "deleteKeyPair", async (s3) => {
        this.isInitialized(), await this.keychain.del(s3);
      }), R2(this, "deleteSymKey", async (s3) => {
        this.isInitialized(), await this.keychain.del(s3);
      }), R2(this, "encode", async (s3, n5, o5) => {
        this.isInitialized();
        const a4 = ss(o5), c6 = safeJsonStringify(n5);
        if (Ia(a4)) return va(c6, o5?.encoding);
        if (Ba(a4)) {
          const y5 = a4.senderPublicKey, _5 = a4.receiverPublicKey;
          s3 = await this.generateSharedKey(y5, _5);
        }
        const h6 = this.getSymKey(s3), { type: l7, senderPublicKey: g4 } = a4;
        return ma({ type: l7, symKey: h6, message: c6, senderPublicKey: g4, encoding: o5?.encoding });
      }), R2(this, "decode", async (s3, n5, o5) => {
        this.isInitialized();
        const a4 = Ea(n5, o5);
        if (Ia(a4)) {
          const c6 = xa(n5, o5?.encoding);
          return safeJsonParse(c6);
        }
        if (Ba(a4)) {
          const c6 = a4.receiverPublicKey, h6 = a4.senderPublicKey;
          s3 = await this.generateSharedKey(c6, h6);
        }
        try {
          const c6 = this.getSymKey(s3), h6 = wa({ symKey: c6, encoded: n5, encoding: o5?.encoding });
          return safeJsonParse(h6);
        } catch (c6) {
          this.logger.error(`Failed to decode message from topic: '${s3}', clientId: '${await this.getClientId()}'`), this.logger.error(c6);
        }
      }), R2(this, "getPayloadType", (s3, n5 = oe) => {
        const o5 = ze2({ encoded: s3, encoding: n5 });
        return Zt2(o5.type);
      }), R2(this, "getPayloadSenderPublicKey", (s3, n5 = oe) => {
        const o5 = ze2({ encoded: s3, encoding: n5 });
        return o5.senderPublicKey ? toString2(o5.senderPublicKey, rt2) : void 0;
      }), this.core = e2, this.logger = X(t, this.name), this.keychain = i4 || new _i3(this.core, this.logger);
    }
    get context() {
      return w(this.logger);
    }
    async setPrivateKey(e2, t) {
      return await this.keychain.set(e2, t), e2;
    }
    getPrivateKey(e2) {
      return this.keychain.get(e2);
    }
    async getClientSeed() {
      let e2 = "";
      try {
        e2 = this.keychain.get(Me3);
      } catch {
        e2 = pa(), await this.keychain.set(Me3, e2);
      }
      return xn3(e2, "base16");
    }
    getSymKey(e2) {
      return this.keychain.get(e2);
    }
    isInitialized() {
      if (!this.initialized) {
        const { message: e2 } = Bt2("NOT_INITIALIZED", this.name);
        throw new Error(e2);
      }
    }
  };
  __name(_wi, "wi");
  var wi = _wi;
  var kn3 = Object.defineProperty;
  var jn3 = Object.defineProperties;
  var Un3 = Object.getOwnPropertyDescriptors;
  var Ei = Object.getOwnPropertySymbols;
  var Fn3 = Object.prototype.hasOwnProperty;
  var Mn3 = Object.prototype.propertyIsEnumerable;
  var We3 = /* @__PURE__ */ __name((r3, e2, t) => e2 in r3 ? kn3(r3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r3[e2] = t, "We");
  var Kn3 = /* @__PURE__ */ __name((r3, e2) => {
    for (var t in e2 || (e2 = {})) Fn3.call(e2, t) && We3(r3, t, e2[t]);
    if (Ei) for (var t of Ei(e2)) Mn3.call(e2, t) && We3(r3, t, e2[t]);
    return r3;
  }, "Kn");
  var Bn3 = /* @__PURE__ */ __name((r3, e2) => jn3(r3, Un3(e2)), "Bn");
  var K5 = /* @__PURE__ */ __name((r3, e2, t) => We3(r3, typeof e2 != "symbol" ? e2 + "" : e2, t), "K");
  var _Ii = class _Ii extends y3 {
    constructor(e2, t) {
      super(e2, t), this.logger = e2, this.core = t, K5(this, "messages", /* @__PURE__ */ new Map()), K5(this, "messagesWithoutClientAck", /* @__PURE__ */ new Map()), K5(this, "name", Ot3), K5(this, "version", Rt3), K5(this, "initialized", false), K5(this, "storagePrefix", W3), K5(this, "init", async () => {
        if (!this.initialized) {
          this.logger.trace("Initialized");
          try {
            const i4 = await this.getRelayerMessages();
            typeof i4 < "u" && (this.messages = i4);
            const s3 = await this.getRelayerMessagesWithoutClientAck();
            typeof s3 < "u" && (this.messagesWithoutClientAck = s3), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", size: this.messages.size });
          } catch (i4) {
            this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(i4);
          } finally {
            this.initialized = true;
          }
        }
      }), K5(this, "set", async (i4, s3, n5) => {
        this.isInitialized();
        const o5 = ya(s3);
        let a4 = this.messages.get(i4);
        if (typeof a4 > "u" && (a4 = {}), typeof a4[o5] < "u") return o5;
        if (a4[o5] = s3, this.messages.set(i4, a4), n5 === ye3.inbound) {
          const c6 = this.messagesWithoutClientAck.get(i4) || {};
          this.messagesWithoutClientAck.set(i4, Bn3(Kn3({}, c6), { [o5]: s3 }));
        }
        return await this.persist(), o5;
      }), K5(this, "get", (i4) => {
        this.isInitialized();
        let s3 = this.messages.get(i4);
        return typeof s3 > "u" && (s3 = {}), s3;
      }), K5(this, "getWithoutAck", (i4) => {
        this.isInitialized();
        const s3 = {};
        for (const n5 of i4) {
          const o5 = this.messagesWithoutClientAck.get(n5) || {};
          s3[n5] = Object.values(o5);
        }
        return s3;
      }), K5(this, "has", (i4, s3) => {
        this.isInitialized();
        const n5 = this.get(i4), o5 = ya(s3);
        return typeof n5[o5] < "u";
      }), K5(this, "ack", async (i4, s3) => {
        this.isInitialized();
        const n5 = this.messagesWithoutClientAck.get(i4);
        if (typeof n5 > "u") return;
        const o5 = ya(s3);
        delete n5[o5], Object.keys(n5).length === 0 ? this.messagesWithoutClientAck.delete(i4) : this.messagesWithoutClientAck.set(i4, n5), await this.persist();
      }), K5(this, "del", async (i4) => {
        this.isInitialized(), this.messages.delete(i4), this.messagesWithoutClientAck.delete(i4), await this.persist();
      }), this.logger = X(e2, this.name), this.core = t;
    }
    get context() {
      return w(this.logger);
    }
    get storageKey() {
      return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
    }
    get storageKeyWithoutClientAck() {
      return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name + "_withoutClientAck";
    }
    async setRelayerMessages(e2) {
      await this.core.storage.setItem(this.storageKey, vi(e2));
    }
    async setRelayerMessagesWithoutClientAck(e2) {
      await this.core.storage.setItem(this.storageKeyWithoutClientAck, vi(e2));
    }
    async getRelayerMessages() {
      const e2 = await this.core.storage.getItem(this.storageKey);
      return typeof e2 < "u" ? xi(e2) : void 0;
    }
    async getRelayerMessagesWithoutClientAck() {
      const e2 = await this.core.storage.getItem(this.storageKeyWithoutClientAck);
      return typeof e2 < "u" ? xi(e2) : void 0;
    }
    async persist() {
      await this.setRelayerMessages(this.messages), await this.setRelayerMessagesWithoutClientAck(this.messagesWithoutClientAck);
    }
    isInitialized() {
      if (!this.initialized) {
        const { message: e2 } = Bt2("NOT_INITIALIZED", this.name);
        throw new Error(e2);
      }
    }
  };
  __name(_Ii, "Ii");
  var Ii = _Ii;
  var Vn3 = Object.defineProperty;
  var qn3 = Object.defineProperties;
  var Gn3 = Object.getOwnPropertyDescriptors;
  var Ti2 = Object.getOwnPropertySymbols;
  var Wn3 = Object.prototype.hasOwnProperty;
  var Hn3 = Object.prototype.propertyIsEnumerable;
  var He3 = /* @__PURE__ */ __name((r3, e2, t) => e2 in r3 ? Vn3(r3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r3[e2] = t, "He");
  var ce = /* @__PURE__ */ __name((r3, e2) => {
    for (var t in e2 || (e2 = {})) Wn3.call(e2, t) && He3(r3, t, e2[t]);
    if (Ti2) for (var t of Ti2(e2)) Hn3.call(e2, t) && He3(r3, t, e2[t]);
    return r3;
  }, "ce");
  var Ci2 = /* @__PURE__ */ __name((r3, e2) => qn3(r3, Gn3(e2)), "Ci");
  var G3 = /* @__PURE__ */ __name((r3, e2, t) => He3(r3, typeof e2 != "symbol" ? e2 + "" : e2, t), "G");
  var _Yn = class _Yn extends m2 {
    constructor(e2, t) {
      super(e2, t), this.relayer = e2, this.logger = t, G3(this, "events", new import_events7.EventEmitter()), G3(this, "name", xt3), G3(this, "queue", /* @__PURE__ */ new Map()), G3(this, "publishTimeout", (0, import_time4.toMiliseconds)(import_time4.ONE_MINUTE)), G3(this, "initialPublishTimeout", (0, import_time4.toMiliseconds)(import_time4.ONE_SECOND * 15)), G3(this, "needsTransportRestart", false), G3(this, "publish", async (i4, s3, n5) => {
        var o5, a4, c6, h6, l7;
        this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: i4, message: s3, opts: n5 } });
        const g4 = n5?.ttl || At2, y5 = n5?.prompt || false, _5 = n5?.tag || 0, u2 = n5?.id || getBigIntRpcId().toString(), m3 = Oa(Sa().protocol), D4 = { id: u2, method: n5?.publishMethod || m3.publish, params: ce({ topic: i4, message: s3, ttl: g4, prompt: y5, tag: _5, attestation: n5?.attestation }, n5?.tvf) }, w4 = `Failed to publish payload, please try again. id:${u2} tag:${_5}`;
        try {
          Dt2((o5 = D4.params) == null ? void 0 : o5.prompt) && ((a4 = D4.params) == null || delete a4.prompt), Dt2((c6 = D4.params) == null ? void 0 : c6.tag) && ((h6 = D4.params) == null || delete h6.tag);
          const E5 = new Promise(async (L3) => {
            const I3 = /* @__PURE__ */ __name(({ id: T4 }) => {
              var S5;
              ((S5 = D4.id) == null ? void 0 : S5.toString()) === T4.toString() && (this.removeRequestFromQueue(T4), this.relayer.events.removeListener(C3.publish, I3), L3());
            }, "I");
            this.relayer.events.on(C3.publish, I3);
            const k6 = Si(new Promise((T4, S5) => {
              this.rpcPublish(D4, n5).then(T4).catch((O6) => {
                this.logger.warn(O6, O6?.message), S5(O6);
              });
            }), this.initialPublishTimeout, `Failed initial publish, retrying.... id:${u2} tag:${_5}`);
            try {
              await k6, this.events.removeListener(C3.publish, I3);
            } catch (T4) {
              this.queue.set(u2, { request: D4, opts: n5, attempt: 1 }), this.logger.warn(T4, T4?.message);
            }
          });
          this.logger.trace({ type: "method", method: "publish", params: { id: u2, topic: i4, message: s3, opts: n5 } }), await Si(E5, this.publishTimeout, w4);
        } catch (E5) {
          if (this.logger.debug("Failed to Publish Payload"), this.logger.error(E5), (l7 = n5?.internal) != null && l7.throwOnFailedPublish) throw E5;
        } finally {
          this.queue.delete(u2);
        }
      }), G3(this, "publishCustom", async (i4) => {
        var s3, n5, o5, a4, c6;
        this.logger.debug("Publishing custom payload"), this.logger.trace({ type: "method", method: "publishCustom", params: i4 });
        const { payload: h6, opts: l7 = {} } = i4, { attestation: g4, tvf: y5, publishMethod: _5, prompt: u2, tag: m3, ttl: D4 = import_time4.FIVE_MINUTES } = l7, w4 = l7.id || getBigIntRpcId().toString(), E5 = Oa(Sa().protocol), L3 = _5 || E5.publish, I3 = { id: w4, method: L3, params: ce(Ci2(ce({}, h6), { ttl: D4, prompt: u2, tag: m3, attestation: g4 }), y5) }, k6 = `Failed to publish custom payload, please try again. id:${w4} tag:${m3}`;
        try {
          Dt2((s3 = I3.params) == null ? void 0 : s3.prompt) && ((n5 = I3.params) == null || delete n5.prompt), Dt2((o5 = I3.params) == null ? void 0 : o5.tag) && ((a4 = I3.params) == null || delete a4.tag);
          const T4 = new Promise(async (S5) => {
            const O6 = /* @__PURE__ */ __name(({ id: Z2 }) => {
              var we4;
              ((we4 = I3.id) == null ? void 0 : we4.toString()) === Z2.toString() && (this.removeRequestFromQueue(Z2), this.relayer.events.removeListener(C3.publish, O6), S5());
            }, "O");
            this.relayer.events.on(C3.publish, O6);
            const te4 = Si(new Promise((Z2, we4) => {
              this.rpcPublish(I3, l7).then(Z2).catch((Ee3) => {
                this.logger.warn(Ee3, Ee3?.message), we4(Ee3);
              });
            }), this.initialPublishTimeout, `Failed initial custom payload publish, retrying.... method:${L3} id:${w4} tag:${m3}`);
            try {
              await te4, this.events.removeListener(C3.publish, O6);
            } catch (Z2) {
              this.queue.set(w4, { request: I3, opts: l7, attempt: 1 }), this.logger.warn(Z2, Z2?.message);
            }
          });
          this.logger.trace({ type: "method", method: "publish", params: { id: w4, payload: h6, opts: l7 } }), await Si(T4, this.publishTimeout, k6);
        } catch (T4) {
          if (this.logger.debug("Failed to Publish Payload"), this.logger.error(T4), (c6 = l7?.internal) != null && c6.throwOnFailedPublish) throw T4;
        } finally {
          this.queue.delete(w4);
        }
      }), G3(this, "on", (i4, s3) => {
        this.events.on(i4, s3);
      }), G3(this, "once", (i4, s3) => {
        this.events.once(i4, s3);
      }), G3(this, "off", (i4, s3) => {
        this.events.off(i4, s3);
      }), G3(this, "removeListener", (i4, s3) => {
        this.events.removeListener(i4, s3);
      }), this.relayer = e2, this.logger = X(t, this.name), this.registerEventListeners();
    }
    get context() {
      return w(this.logger);
    }
    async rpcPublish(e2, t) {
      this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: e2 });
      const i4 = await this.relayer.request(e2);
      return this.relayer.events.emit(C3.publish, ce(ce({}, e2), t)), this.logger.debug("Successfully Published Payload"), i4;
    }
    removeRequestFromQueue(e2) {
      this.queue.delete(e2);
    }
    checkQueue() {
      this.queue.forEach(async (e2, t) => {
        var i4;
        const s3 = e2.attempt + 1;
        this.queue.set(t, Ci2(ce({}, e2), { attempt: s3 })), this.logger.warn({}, `Publisher: queue->publishing: ${e2.request.id}, tag: ${(i4 = e2.request.params) == null ? void 0 : i4.tag}, attempt: ${s3}`), await this.rpcPublish(e2.request, e2.opts), this.logger.warn({}, `Publisher: queue->published: ${e2.request.id}`);
      });
    }
    registerEventListeners() {
      this.relayer.core.heartbeat.on(r.pulse, () => {
        if (this.needsTransportRestart) {
          this.needsTransportRestart = false, this.relayer.events.emit(C3.connection_stalled);
          return;
        }
        this.checkQueue();
      }), this.relayer.on(C3.message_ack, (e2) => {
        this.removeRequestFromQueue(e2.id.toString());
      });
    }
  };
  __name(_Yn, "Yn");
  var Yn3 = _Yn;
  var Jn3 = Object.defineProperty;
  var Xn3 = /* @__PURE__ */ __name((r3, e2, t) => e2 in r3 ? Jn3(r3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r3[e2] = t, "Xn");
  var he3 = /* @__PURE__ */ __name((r3, e2, t) => Xn3(r3, typeof e2 != "symbol" ? e2 + "" : e2, t), "he");
  var _Zn = class _Zn {
    constructor() {
      he3(this, "map", /* @__PURE__ */ new Map()), he3(this, "set", (e2, t) => {
        const i4 = this.get(e2);
        this.exists(e2, t) || this.map.set(e2, [...i4, t]);
      }), he3(this, "get", (e2) => this.map.get(e2) || []), he3(this, "exists", (e2, t) => this.get(e2).includes(t)), he3(this, "delete", (e2, t) => {
        if (typeof t > "u") {
          this.map.delete(e2);
          return;
        }
        if (!this.map.has(e2)) return;
        const i4 = this.get(e2);
        if (!this.exists(e2, t)) return;
        const s3 = i4.filter((n5) => n5 !== t);
        if (!s3.length) {
          this.map.delete(e2);
          return;
        }
        this.map.set(e2, s3);
      }), he3(this, "clear", () => {
        this.map.clear();
      });
    }
    get topics() {
      return Array.from(this.map.keys());
    }
  };
  __name(_Zn, "Zn");
  var Zn3 = _Zn;
  var Qn2 = Object.defineProperty;
  var eo3 = Object.defineProperties;
  var to3 = Object.getOwnPropertyDescriptors;
  var Pi2 = Object.getOwnPropertySymbols;
  var io2 = Object.prototype.hasOwnProperty;
  var so2 = Object.prototype.propertyIsEnumerable;
  var Ye3 = /* @__PURE__ */ __name((r3, e2, t) => e2 in r3 ? Qn2(r3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r3[e2] = t, "Ye");
  var fe2 = /* @__PURE__ */ __name((r3, e2) => {
    for (var t in e2 || (e2 = {})) io2.call(e2, t) && Ye3(r3, t, e2[t]);
    if (Pi2) for (var t of Pi2(e2)) so2.call(e2, t) && Ye3(r3, t, e2[t]);
    return r3;
  }, "fe");
  var Je3 = /* @__PURE__ */ __name((r3, e2) => eo3(r3, to3(e2)), "Je");
  var f4 = /* @__PURE__ */ __name((r3, e2, t) => Ye3(r3, typeof e2 != "symbol" ? e2 + "" : e2, t), "f");
  var _Si = class _Si extends P2 {
    constructor(e2, t) {
      super(e2, t), this.relayer = e2, this.logger = t, f4(this, "subscriptions", /* @__PURE__ */ new Map()), f4(this, "topicMap", new Zn3()), f4(this, "events", new import_events7.EventEmitter()), f4(this, "name", Ft3), f4(this, "version", Mt3), f4(this, "pending", /* @__PURE__ */ new Map()), f4(this, "cached", []), f4(this, "initialized", false), f4(this, "storagePrefix", W3), f4(this, "subscribeTimeout", (0, import_time4.toMiliseconds)(import_time4.ONE_MINUTE)), f4(this, "initialSubscribeTimeout", (0, import_time4.toMiliseconds)(import_time4.ONE_SECOND * 15)), f4(this, "clientId"), f4(this, "batchSubscribeTopicsLimit", 500), f4(this, "init", async () => {
        this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), await this.restore()), this.initialized = true;
      }), f4(this, "subscribe", async (i4, s3) => {
        var n5;
        this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: i4, opts: s3 } });
        try {
          const o5 = Sa(s3), a4 = { topic: i4, relay: o5, transportType: s3?.transportType };
          (n5 = s3?.internal) != null && n5.skipSubscribe || this.pending.set(i4, a4);
          const c6 = await this.rpcSubscribe(i4, o5, s3);
          return typeof c6 == "string" && (this.onSubscribe(c6, a4), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: i4, opts: s3 } })), c6;
        } catch (o5) {
          throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(o5), o5;
        }
      }), f4(this, "unsubscribe", async (i4, s3) => {
        this.isInitialized(), typeof s3?.id < "u" ? await this.unsubscribeById(i4, s3.id, s3) : await this.unsubscribeByTopic(i4, s3);
      }), f4(this, "isSubscribed", (i4) => new Promise((s3) => {
        s3(this.topicMap.topics.includes(i4));
      })), f4(this, "isKnownTopic", (i4) => new Promise((s3) => {
        s3(this.topicMap.topics.includes(i4) || this.pending.has(i4) || this.cached.some((n5) => n5.topic === i4));
      })), f4(this, "on", (i4, s3) => {
        this.events.on(i4, s3);
      }), f4(this, "once", (i4, s3) => {
        this.events.once(i4, s3);
      }), f4(this, "off", (i4, s3) => {
        this.events.off(i4, s3);
      }), f4(this, "removeListener", (i4, s3) => {
        this.events.removeListener(i4, s3);
      }), f4(this, "start", async () => {
        await this.onConnect();
      }), f4(this, "stop", async () => {
        await this.onDisconnect();
      }), f4(this, "restart", async () => {
        await this.restore(), await this.onRestart();
      }), f4(this, "checkPending", async () => {
        if (this.pending.size === 0 && (!this.initialized || !this.relayer.connected)) return;
        const i4 = [];
        this.pending.forEach((s3) => {
          i4.push(s3);
        }), await this.batchSubscribe(i4);
      }), f4(this, "registerEventListeners", () => {
        this.relayer.core.heartbeat.on(r.pulse, async () => {
          await this.checkPending();
        }), this.events.on(j4.created, async (i4) => {
          const s3 = j4.created;
          this.logger.info(`Emitting ${s3}`), this.logger.debug({ type: "event", event: s3, data: i4 }), await this.persist();
        }), this.events.on(j4.deleted, async (i4) => {
          const s3 = j4.deleted;
          this.logger.info(`Emitting ${s3}`), this.logger.debug({ type: "event", event: s3, data: i4 }), await this.persist();
        });
      }), this.relayer = e2, this.logger = X(t, this.name), this.clientId = "";
    }
    get context() {
      return w(this.logger);
    }
    get storageKey() {
      return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name;
    }
    get length() {
      return this.subscriptions.size;
    }
    get ids() {
      return Array.from(this.subscriptions.keys());
    }
    get values() {
      return Array.from(this.subscriptions.values());
    }
    get topics() {
      return this.topicMap.topics;
    }
    get hasAnyTopics() {
      return this.topicMap.topics.length > 0 || this.pending.size > 0 || this.cached.length > 0 || this.subscriptions.size > 0;
    }
    hasSubscription(e2, t) {
      let i4 = false;
      try {
        i4 = this.getSubscription(e2).topic === t;
      } catch {
      }
      return i4;
    }
    reset() {
      this.cached = [], this.initialized = true;
    }
    onDisable() {
      this.values.length > 0 && (this.cached = this.values), this.subscriptions.clear(), this.topicMap.clear();
    }
    async unsubscribeByTopic(e2, t) {
      const i4 = this.topicMap.get(e2);
      await Promise.all(i4.map(async (s3) => await this.unsubscribeById(e2, s3, t)));
    }
    async unsubscribeById(e2, t, i4) {
      this.logger.debug("Unsubscribing Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e2, id: t, opts: i4 } });
      try {
        const s3 = Sa(i4);
        await this.restartToComplete({ topic: e2, id: t, relay: s3 }), await this.rpcUnsubscribe(e2, t, s3);
        const n5 = zt2("USER_DISCONNECTED", `${this.name}, ${e2}`);
        await this.onUnsubscribe(e2, t, n5), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e2, id: t, opts: i4 } });
      } catch (s3) {
        throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(s3), s3;
      }
    }
    async rpcSubscribe(e2, t, i4) {
      var s3, n5;
      const o5 = await this.getSubscriptionId(e2);
      if ((s3 = i4?.internal) != null && s3.skipSubscribe) return o5;
      (!i4 || i4?.transportType === ee2.relay) && await this.restartToComplete({ topic: e2, id: e2, relay: t });
      const a4 = { method: Oa(t.protocol).subscribe, params: { topic: e2 } };
      this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: a4 });
      const c6 = (n5 = i4?.internal) == null ? void 0 : n5.throwOnFailedPublish;
      try {
        if (i4?.transportType === ee2.link_mode) return setTimeout(() => {
          (this.relayer.connected || this.relayer.connecting) && this.relayer.request(a4).catch((g4) => this.logger.warn(g4));
        }, (0, import_time4.toMiliseconds)(import_time4.ONE_SECOND)), o5;
        const h6 = new Promise(async (g4) => {
          const y5 = /* @__PURE__ */ __name((_5) => {
            _5.topic === e2 && (this.events.removeListener(j4.created, y5), g4(_5.id));
          }, "y");
          this.events.on(j4.created, y5);
          try {
            const _5 = await Si(new Promise((u2, m3) => {
              this.relayer.request(a4).catch((D4) => {
                this.logger.warn(D4, D4?.message), m3(D4);
              }).then(u2);
            }), this.initialSubscribeTimeout, `Subscribing to ${e2} failed, please try again`);
            this.events.removeListener(j4.created, y5), g4(_5);
          } catch {
          }
        }), l7 = await Si(h6, this.subscribeTimeout, `Subscribing to ${e2} failed, please try again`);
        if (!l7 && c6) throw new Error(`Subscribing to ${e2} failed, please try again`);
        return l7 ? o5 : null;
      } catch (h6) {
        if (this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(C3.connection_stalled), c6) throw h6;
      }
      return null;
    }
    async rpcBatchSubscribe(e2) {
      if (!e2.length) return;
      const t = e2[0].relay, i4 = { method: Oa(t.protocol).batchSubscribe, params: { topics: e2.map((s3) => s3.topic) } };
      this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i4 });
      try {
        await await Si(new Promise((s3) => {
          this.relayer.request(i4).catch((n5) => this.logger.warn(n5)).then(s3);
        }), this.subscribeTimeout, "rpcBatchSubscribe failed, please try again");
      } catch {
        this.relayer.events.emit(C3.connection_stalled);
      }
    }
    async rpcBatchFetchMessages(e2) {
      if (!e2.length) return;
      const t = e2[0].relay, i4 = { method: Oa(t.protocol).batchFetchMessages, params: { topics: e2.map((n5) => n5.topic) } };
      this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i4 });
      let s3;
      try {
        s3 = await await Si(new Promise((n5, o5) => {
          this.relayer.request(i4).catch((a4) => {
            this.logger.warn(a4), o5(a4);
          }).then(n5);
        }), this.subscribeTimeout, "rpcBatchFetchMessages failed, please try again");
      } catch {
        this.relayer.events.emit(C3.connection_stalled);
      }
      return s3;
    }
    rpcUnsubscribe(e2, t, i4) {
      const s3 = { method: Oa(i4.protocol).unsubscribe, params: { topic: e2, id: t } };
      return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: s3 }), this.relayer.request(s3);
    }
    onSubscribe(e2, t) {
      this.setSubscription(e2, Je3(fe2({}, t), { id: e2 })), this.pending.delete(t.topic);
    }
    onBatchSubscribe(e2) {
      e2.length && e2.forEach((t) => {
        this.setSubscription(t.id, fe2({}, t)), this.pending.delete(t.topic);
      });
    }
    async onUnsubscribe(e2, t, i4) {
      this.events.removeAllListeners(t), this.hasSubscription(t, e2) && this.deleteSubscription(t, i4), await this.relayer.messages.del(e2);
    }
    async setRelayerSubscriptions(e2) {
      await this.relayer.core.storage.setItem(this.storageKey, e2);
    }
    async getRelayerSubscriptions() {
      return await this.relayer.core.storage.getItem(this.storageKey);
    }
    setSubscription(e2, t) {
      this.logger.debug("Setting subscription"), this.logger.trace({ type: "method", method: "setSubscription", id: e2, subscription: t }), this.addSubscription(e2, t);
    }
    addSubscription(e2, t) {
      this.subscriptions.set(e2, fe2({}, t)), this.topicMap.set(t.topic, e2), this.events.emit(j4.created, t);
    }
    getSubscription(e2) {
      this.logger.debug("Getting subscription"), this.logger.trace({ type: "method", method: "getSubscription", id: e2 });
      const t = this.subscriptions.get(e2);
      if (!t) {
        const { message: i4 } = Bt2("NO_MATCHING_KEY", `${this.name}: ${e2}`);
        throw new Error(i4);
      }
      return t;
    }
    deleteSubscription(e2, t) {
      this.logger.debug("Deleting subscription"), this.logger.trace({ type: "method", method: "deleteSubscription", id: e2, reason: t });
      const i4 = this.getSubscription(e2);
      this.subscriptions.delete(e2), this.topicMap.delete(i4.topic, e2), this.events.emit(j4.deleted, Je3(fe2({}, i4), { reason: t }));
    }
    async persist() {
      await this.setRelayerSubscriptions(this.values), this.events.emit(j4.sync);
    }
    async onRestart() {
      if (this.cached.length) {
        const e2 = [...this.cached], t = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
        for (let i4 = 0; i4 < t; i4++) {
          const s3 = e2.splice(0, this.batchSubscribeTopicsLimit);
          await this.batchSubscribe(s3);
        }
      }
      this.events.emit(j4.resubscribed);
    }
    async restore() {
      try {
        const e2 = await this.getRelayerSubscriptions();
        if (typeof e2 > "u" || !e2.length) return;
        if (this.subscriptions.size && !e2.every((t) => {
          var i4;
          return t.topic === ((i4 = this.subscriptions.get(t.id)) == null ? void 0 : i4.topic);
        })) {
          const { message: t } = Bt2("RESTORE_WILL_OVERRIDE", this.name);
          throw this.logger.error(t), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(t);
        }
        this.cached = e2, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({ type: "method", method: "restore", subscriptions: this.values });
      } catch (e2) {
        this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(e2);
      }
    }
    async batchSubscribe(e2) {
      e2.length && (await this.rpcBatchSubscribe(e2), this.onBatchSubscribe(await Promise.all(e2.map(async (t) => Je3(fe2({}, t), { id: await this.getSubscriptionId(t.topic) })))));
    }
    async batchFetchMessages(e2) {
      if (!e2.length) return;
      this.logger.trace(`Fetching batch messages for ${e2.length} subscriptions`);
      const t = await this.rpcBatchFetchMessages(e2);
      t && t.messages && (await Pi((0, import_time4.toMiliseconds)(import_time4.ONE_SECOND)), await this.relayer.handleBatchMessageEvents(t.messages));
    }
    async onConnect() {
      await this.restart(), this.reset();
    }
    onDisconnect() {
      this.onDisable();
    }
    isInitialized() {
      if (!this.initialized) {
        const { message: e2 } = Bt2("NOT_INITIALIZED", this.name);
        throw new Error(e2);
      }
    }
    async restartToComplete(e2) {
      !this.relayer.connected && !this.relayer.connecting && (this.cached.push(e2), await this.relayer.transportOpen());
    }
    async getClientId() {
      return this.clientId || (this.clientId = await this.relayer.core.crypto.getClientId()), this.clientId;
    }
    async getSubscriptionId(e2) {
      return ya(e2 + await this.getClientId());
    }
  };
  __name(_Si, "Si");
  var Si2 = _Si;
  var ro3 = Object.defineProperty;
  var Oi2 = Object.getOwnPropertySymbols;
  var no3 = Object.prototype.hasOwnProperty;
  var oo2 = Object.prototype.propertyIsEnumerable;
  var Xe3 = /* @__PURE__ */ __name((r3, e2, t) => e2 in r3 ? ro3(r3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r3[e2] = t, "Xe");
  var Ri2 = /* @__PURE__ */ __name((r3, e2) => {
    for (var t in e2 || (e2 = {})) no3.call(e2, t) && Xe3(r3, t, e2[t]);
    if (Oi2) for (var t of Oi2(e2)) oo2.call(e2, t) && Xe3(r3, t, e2[t]);
    return r3;
  }, "Ri");
  var p3 = /* @__PURE__ */ __name((r3, e2, t) => Xe3(r3, typeof e2 != "symbol" ? e2 + "" : e2, t), "p");
  var _Ai = class _Ai extends d {
    constructor(e2) {
      var t;
      super(e2), p3(this, "protocol", "wc"), p3(this, "version", 2), p3(this, "core"), p3(this, "logger"), p3(this, "events", new import_events7.EventEmitter()), p3(this, "provider"), p3(this, "messages"), p3(this, "subscriber"), p3(this, "publisher"), p3(this, "name", zt3), p3(this, "transportExplicitlyClosed", false), p3(this, "initialized", false), p3(this, "connectionAttemptInProgress", false), p3(this, "relayUrl"), p3(this, "projectId"), p3(this, "packageName"), p3(this, "bundleId"), p3(this, "hasExperiencedNetworkDisruption", false), p3(this, "pingTimeout"), p3(this, "heartBeatTimeout", (0, import_time4.toMiliseconds)(import_time4.THIRTY_SECONDS + import_time4.FIVE_SECONDS)), p3(this, "reconnectTimeout"), p3(this, "connectPromise"), p3(this, "reconnectInProgress", false), p3(this, "requestsInFlight", []), p3(this, "connectTimeout", (0, import_time4.toMiliseconds)(import_time4.ONE_SECOND * 15)), p3(this, "request", async (i4) => {
        var s3, n5;
        this.logger.debug("Publishing Request Payload");
        const o5 = i4.id || getBigIntRpcId().toString();
        await this.toEstablishConnection();
        try {
          this.logger.trace({ id: o5, method: i4.method, topic: (s3 = i4.params) == null ? void 0 : s3.topic }, "relayer.request - publishing...");
          const a4 = `${o5}:${((n5 = i4.params) == null ? void 0 : n5.tag) || ""}`;
          this.requestsInFlight.push(a4);
          const c6 = await this.provider.request(i4);
          return this.requestsInFlight = this.requestsInFlight.filter((h6) => h6 !== a4), c6;
        } catch (a4) {
          throw this.logger.debug(`Failed to Publish Request: ${o5}`), a4;
        }
      }), p3(this, "resetPingTimeout", () => {
        rn2() && (clearTimeout(this.pingTimeout), this.pingTimeout = setTimeout(() => {
          var i4, s3, n5, o5;
          try {
            this.logger.debug({}, "pingTimeout: Connection stalled, terminating..."), (o5 = (n5 = (s3 = (i4 = this.provider) == null ? void 0 : i4.connection) == null ? void 0 : s3.socket) == null ? void 0 : n5.terminate) == null || o5.call(n5);
          } catch (a4) {
            this.logger.warn(a4, a4?.message);
          }
        }, this.heartBeatTimeout));
      }), p3(this, "onPayloadHandler", (i4) => {
        this.onProviderPayload(i4), this.resetPingTimeout();
      }), p3(this, "onConnectHandler", () => {
        this.logger.warn({}, "Relayer connected \u{1F6DC}"), this.startPingTimeout(), this.events.emit(C3.connect);
      }), p3(this, "onDisconnectHandler", () => {
        this.logger.warn({}, "Relayer disconnected \u{1F6D1}"), this.requestsInFlight = [], this.onProviderDisconnect();
      }), p3(this, "onProviderErrorHandler", (i4) => {
        this.logger.fatal(`Fatal socket error: ${i4.message}`), this.events.emit(C3.error, i4), this.logger.fatal("Fatal socket error received, closing transport"), this.transportClose();
      }), p3(this, "registerProviderListeners", () => {
        this.provider.on(M4.payload, this.onPayloadHandler), this.provider.on(M4.connect, this.onConnectHandler), this.provider.on(M4.disconnect, this.onDisconnectHandler), this.provider.on(M4.error, this.onProviderErrorHandler);
      }), this.core = e2.core, this.logger = Iu({ logger: (t = e2.logger) != null ? t : $t3, name: this.name }), this.messages = new Ii(this.logger, e2.core), this.subscriber = new Si2(this, this.logger), this.publisher = new Yn3(this, this.logger), this.projectId = e2?.projectId, this.relayUrl = e2?.relayUrl || Ke3, li() ? this.packageName = hi() : di() && (this.bundleId = hi()), this.provider = {};
    }
    async init() {
      this.logger.trace("Initialized"), this.registerEventListeners(), await Promise.all([this.messages.init(), this.subscriber.init()]), this.initialized = true, this.transportOpen().catch((e2) => this.logger.warn(e2, e2?.message));
    }
    get context() {
      return w(this.logger);
    }
    get connected() {
      var e2, t, i4;
      return ((i4 = (t = (e2 = this.provider) == null ? void 0 : e2.connection) == null ? void 0 : t.socket) == null ? void 0 : i4.readyState) === 1 || false;
    }
    get connecting() {
      var e2, t, i4;
      return ((i4 = (t = (e2 = this.provider) == null ? void 0 : e2.connection) == null ? void 0 : t.socket) == null ? void 0 : i4.readyState) === 0 || this.connectPromise !== void 0 || false;
    }
    async publish(e2, t, i4) {
      this.isInitialized(), await this.publisher.publish(e2, t, i4), await this.recordMessageEvent({ topic: e2, message: t, publishedAt: Date.now(), transportType: ee2.relay }, ye3.outbound);
    }
    async publishCustom(e2) {
      this.isInitialized(), await this.publisher.publishCustom(e2);
    }
    async subscribe(e2, t) {
      var i4, s3, n5;
      this.isInitialized(), (!(t != null && t.transportType) || t?.transportType === "relay") && await this.toEstablishConnection();
      const o5 = typeof ((i4 = t?.internal) == null ? void 0 : i4.throwOnFailedPublish) > "u" ? true : (s3 = t?.internal) == null ? void 0 : s3.throwOnFailedPublish;
      let a4 = ((n5 = this.subscriber.topicMap.get(e2)) == null ? void 0 : n5[0]) || "", c6;
      const h6 = /* @__PURE__ */ __name((l7) => {
        l7.topic === e2 && (this.subscriber.off(j4.created, h6), c6());
      }, "h");
      return await Promise.all([new Promise((l7) => {
        c6 = l7, this.subscriber.on(j4.created, h6);
      }), new Promise(async (l7, g4) => {
        a4 = await this.subscriber.subscribe(e2, Ri2({ internal: { throwOnFailedPublish: o5 } }, t)).catch((y5) => {
          o5 && g4(y5);
        }) || a4, l7();
      })]), a4;
    }
    async unsubscribe(e2, t) {
      this.isInitialized(), await this.subscriber.unsubscribe(e2, t);
    }
    on(e2, t) {
      this.events.on(e2, t);
    }
    once(e2, t) {
      this.events.once(e2, t);
    }
    off(e2, t) {
      this.events.off(e2, t);
    }
    removeListener(e2, t) {
      this.events.removeListener(e2, t);
    }
    async transportDisconnect() {
      this.provider.disconnect && (this.hasExperiencedNetworkDisruption || this.connected) ? await Si(this.provider.disconnect(), 2e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.onProviderDisconnect();
    }
    async transportClose() {
      this.transportExplicitlyClosed = true, await this.transportDisconnect();
    }
    async transportOpen(e2) {
      if (!this.subscriber.hasAnyTopics) {
        this.logger.info("Starting WS connection skipped because the client has no topics to work with.");
        return;
      }
      if (this.connectPromise ? (this.logger.debug({}, "Waiting for existing connection attempt to resolve..."), await this.connectPromise, this.logger.debug({}, "Existing connection attempt resolved")) : (this.connectPromise = new Promise(async (t, i4) => {
        await this.connect(e2).then(t).catch(i4).finally(() => {
          this.connectPromise = void 0;
        });
      }), await this.connectPromise), !this.connected) throw new Error(`Couldn't establish socket connection to the relay server: ${this.relayUrl}`);
    }
    async restartTransport(e2) {
      this.logger.debug({}, "Restarting transport..."), !this.connectionAttemptInProgress && (this.relayUrl = e2 || this.relayUrl, await this.confirmOnlineStateOrThrow(), await this.transportClose(), await this.transportOpen());
    }
    async confirmOnlineStateOrThrow() {
      if (!await gu()) throw new Error("No internet connection detected. Please restart your network and try again.");
    }
    async handleBatchMessageEvents(e2) {
      if (e2?.length === 0) {
        this.logger.trace("Batch message events is empty. Ignoring...");
        return;
      }
      const t = e2.sort((i4, s3) => i4.publishedAt - s3.publishedAt);
      this.logger.debug(`Batch of ${t.length} message events sorted`);
      for (const i4 of t) try {
        await this.onMessageEvent(i4);
      } catch (s3) {
        this.logger.warn(s3, "Error while processing batch message event: " + s3?.message);
      }
      this.logger.trace(`Batch of ${t.length} message events processed`);
    }
    async onLinkMessageEvent(e2, t) {
      const { topic: i4 } = e2;
      if (!t.sessionExists) {
        const s3 = _i2(import_time4.FIVE_MINUTES), n5 = { topic: i4, expiry: s3, relay: { protocol: "irn" }, active: false };
        await this.core.pairing.pairings.set(i4, n5);
      }
      this.events.emit(C3.message, e2), await this.recordMessageEvent(e2, ye3.inbound);
    }
    async connect(e2) {
      await this.confirmOnlineStateOrThrow(), e2 && e2 !== this.relayUrl && (this.relayUrl = e2, await this.transportDisconnect()), this.connectionAttemptInProgress = true, this.transportExplicitlyClosed = false;
      let t = 1;
      for (; t < 6; ) {
        try {
          if (this.transportExplicitlyClosed) break;
          this.logger.debug({}, `Connecting to ${this.relayUrl}, attempt: ${t}...`), await this.createProvider(), await new Promise(async (i4, s3) => {
            const n5 = /* @__PURE__ */ __name(() => {
              s3(new Error("Connection interrupted while trying to connect"));
            }, "n");
            this.provider.once(M4.disconnect, n5), await Si(new Promise((o5, a4) => {
              this.provider.connect().then(o5).catch(a4);
            }), this.connectTimeout, `Socket stalled when trying to connect to ${this.relayUrl}`).catch((o5) => {
              s3(o5);
            }).finally(() => {
              this.provider.off(M4.disconnect, n5), clearTimeout(this.reconnectTimeout);
            }), await new Promise(async (o5, a4) => {
              const c6 = /* @__PURE__ */ __name(() => {
                s3(new Error("Connection interrupted while trying to subscribe"));
              }, "c");
              this.provider.once(M4.disconnect, c6), await this.subscriber.start().then(o5).catch(a4).finally(() => {
                this.provider.off(M4.disconnect, c6);
              });
            }), this.hasExperiencedNetworkDisruption = false, i4();
          });
        } catch (i4) {
          await this.subscriber.stop();
          const s3 = i4;
          this.logger.warn({}, s3.message), this.hasExperiencedNetworkDisruption = true;
        } finally {
          this.connectionAttemptInProgress = false;
        }
        if (this.connected) {
          this.logger.debug({}, `Connected to ${this.relayUrl} successfully on attempt: ${t}`);
          break;
        }
        await new Promise((i4) => setTimeout(i4, (0, import_time4.toMiliseconds)(t * 1))), t++;
      }
    }
    startPingTimeout() {
      var e2, t, i4, s3, n5;
      if (rn2()) try {
        (t = (e2 = this.provider) == null ? void 0 : e2.connection) != null && t.socket && ((n5 = (s3 = (i4 = this.provider) == null ? void 0 : i4.connection) == null ? void 0 : s3.socket) == null || n5.on("ping", () => {
          this.resetPingTimeout();
        })), this.resetPingTimeout();
      } catch (o5) {
        this.logger.warn(o5, o5?.message);
      }
    }
    async createProvider() {
      this.provider.connection && this.unregisterProviderListeners();
      const e2 = await this.core.crypto.signJWT(this.relayUrl);
      this.provider = new o3(new f3(bi({ sdkVersion: Pe3, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: e2, useOnCloseEvent: true, bundleId: this.bundleId, packageName: this.packageName }))), this.registerProviderListeners();
    }
    async recordMessageEvent(e2, t) {
      const { topic: i4, message: s3 } = e2;
      await this.messages.set(i4, s3, t);
    }
    async shouldIgnoreMessageEvent(e2) {
      const { topic: t, message: i4 } = e2;
      if (!i4 || i4.length === 0) return this.logger.warn(`Ignoring invalid/empty message: ${i4}`), true;
      if (!await this.subscriber.isKnownTopic(t)) return this.logger.warn(`Ignoring message for unknown topic ${t}`), true;
      const s3 = this.messages.has(t, i4);
      return s3 && this.logger.warn(`Ignoring duplicate message: ${i4}`), s3;
    }
    async onProviderPayload(e2) {
      if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: e2 }), isJsonRpcRequest(e2)) {
        if (!e2.method.endsWith(Lt3)) return;
        const t = e2.params, { topic: i4, message: s3, publishedAt: n5, attestation: o5 } = t.data, a4 = { topic: i4, message: s3, publishedAt: n5, transportType: ee2.relay, attestation: o5 };
        this.logger.debug("Emitting Relayer Payload"), this.logger.trace(Ri2({ type: "event", event: t.id }, a4)), this.events.emit(t.id, a4), await this.acknowledgePayload(e2), await this.onMessageEvent(a4);
      } else isJsonRpcResponse(e2) && this.events.emit(C3.message_ack, e2);
    }
    async onMessageEvent(e2) {
      await this.shouldIgnoreMessageEvent(e2) || (await this.recordMessageEvent(e2, ye3.inbound), this.events.emit(C3.message, e2));
    }
    async acknowledgePayload(e2) {
      const t = formatJsonRpcResult(e2.id, true);
      await this.provider.connection.send(t);
    }
    unregisterProviderListeners() {
      this.provider.off(M4.payload, this.onPayloadHandler), this.provider.off(M4.connect, this.onConnectHandler), this.provider.off(M4.disconnect, this.onDisconnectHandler), this.provider.off(M4.error, this.onProviderErrorHandler), clearTimeout(this.pingTimeout);
    }
    async registerEventListeners() {
      let e2 = await gu();
      bu(async (t) => {
        e2 !== t && (e2 = t, t ? await this.transportOpen().catch((i4) => this.logger.error(i4, i4?.message)) : (this.hasExperiencedNetworkDisruption = true, await this.transportDisconnect(), this.transportExplicitlyClosed = false));
      }), this.core.heartbeat.on(r.pulse, async () => {
        if (!this.transportExplicitlyClosed && !this.connected && yu()) try {
          await this.confirmOnlineStateOrThrow(), await this.transportOpen();
        } catch (t) {
          this.logger.warn(t, t?.message);
        }
      });
    }
    async onProviderDisconnect() {
      clearTimeout(this.pingTimeout), this.events.emit(C3.disconnect), this.connectionAttemptInProgress = false, !this.reconnectInProgress && (this.reconnectInProgress = true, await this.subscriber.stop(), this.subscriber.hasAnyTopics && (this.transportExplicitlyClosed || (this.reconnectTimeout = setTimeout(async () => {
        await this.transportOpen().catch((e2) => this.logger.error(e2, e2?.message)), this.reconnectTimeout = void 0, this.reconnectInProgress = false;
      }, (0, import_time4.toMiliseconds)(kt3)))));
    }
    isInitialized() {
      if (!this.initialized) {
        const { message: e2 } = Bt2("NOT_INITIALIZED", this.name);
        throw new Error(e2);
      }
    }
    async toEstablishConnection() {
      if (await this.confirmOnlineStateOrThrow(), !this.connected) {
        if (this.connectPromise) {
          await this.connectPromise;
          return;
        }
        await this.connect();
      }
    }
  };
  __name(_Ai, "Ai");
  var Ai2 = _Ai;
  function ao3(r3, e2) {
    return r3 === e2 || Number.isNaN(r3) && Number.isNaN(e2);
  }
  __name(ao3, "ao");
  function xi2(r3) {
    return Object.getOwnPropertySymbols(r3).filter((e2) => Object.prototype.propertyIsEnumerable.call(r3, e2));
  }
  __name(xi2, "xi");
  function Ni2(r3) {
    return r3 == null ? r3 === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(r3);
  }
  __name(Ni2, "Ni");
  var co3 = "[object RegExp]";
  var ho2 = "[object String]";
  var lo3 = "[object Number]";
  var uo2 = "[object Boolean]";
  var $i2 = "[object Arguments]";
  var po3 = "[object Symbol]";
  var go3 = "[object Date]";
  var yo3 = "[object Map]";
  var bo3 = "[object Set]";
  var mo3 = "[object Array]";
  var fo3 = "[object Function]";
  var Do3 = "[object ArrayBuffer]";
  var Ze3 = "[object Object]";
  var vo3 = "[object Error]";
  var _o5 = "[object DataView]";
  var wo3 = "[object Uint8Array]";
  var Eo3 = "[object Uint8ClampedArray]";
  var Io3 = "[object Uint16Array]";
  var To3 = "[object Uint32Array]";
  var Co3 = "[object BigUint64Array]";
  var Po3 = "[object Int8Array]";
  var So3 = "[object Int16Array]";
  var Oo3 = "[object Int32Array]";
  var Ro3 = "[object BigInt64Array]";
  var Ao3 = "[object Float32Array]";
  var xo3 = "[object Float64Array]";
  function No3() {
  }
  __name(No3, "No");
  function zi2(r3) {
    if (!r3 || typeof r3 != "object") return false;
    const e2 = Object.getPrototypeOf(r3);
    return e2 === null || e2 === Object.prototype || Object.getPrototypeOf(e2) === null ? Object.prototype.toString.call(r3) === "[object Object]" : false;
  }
  __name(zi2, "zi");
  function $o3(r3, e2, t) {
    return De3(r3, e2, void 0, void 0, void 0, void 0, t);
  }
  __name($o3, "$o");
  function De3(r3, e2, t, i4, s3, n5, o5) {
    const a4 = o5(r3, e2, t, i4, s3, n5);
    if (a4 !== void 0) return a4;
    if (typeof r3 == typeof e2) switch (typeof r3) {
      case "bigint":
      case "string":
      case "boolean":
      case "symbol":
      case "undefined":
        return r3 === e2;
      case "number":
        return r3 === e2 || Object.is(r3, e2);
      case "function":
        return r3 === e2;
      case "object":
        return ve3(r3, e2, n5, o5);
    }
    return ve3(r3, e2, n5, o5);
  }
  __name(De3, "De");
  function ve3(r3, e2, t, i4) {
    if (Object.is(r3, e2)) return true;
    let s3 = Ni2(r3), n5 = Ni2(e2);
    if (s3 === $i2 && (s3 = Ze3), n5 === $i2 && (n5 = Ze3), s3 !== n5) return false;
    switch (s3) {
      case ho2:
        return r3.toString() === e2.toString();
      case lo3: {
        const c6 = r3.valueOf(), h6 = e2.valueOf();
        return ao3(c6, h6);
      }
      case uo2:
      case go3:
      case po3:
        return Object.is(r3.valueOf(), e2.valueOf());
      case co3:
        return r3.source === e2.source && r3.flags === e2.flags;
      case fo3:
        return r3 === e2;
    }
    t = t ?? /* @__PURE__ */ new Map();
    const o5 = t.get(r3), a4 = t.get(e2);
    if (o5 != null && a4 != null) return o5 === e2;
    t.set(r3, e2), t.set(e2, r3);
    try {
      switch (s3) {
        case yo3: {
          if (r3.size !== e2.size) return false;
          for (const [c6, h6] of r3.entries()) if (!e2.has(c6) || !De3(h6, e2.get(c6), c6, r3, e2, t, i4)) return false;
          return true;
        }
        case bo3: {
          if (r3.size !== e2.size) return false;
          const c6 = Array.from(r3.values()), h6 = Array.from(e2.values());
          for (let l7 = 0; l7 < c6.length; l7++) {
            const g4 = c6[l7], y5 = h6.findIndex((_5) => De3(g4, _5, void 0, r3, e2, t, i4));
            if (y5 === -1) return false;
            h6.splice(y5, 1);
          }
          return true;
        }
        case mo3:
        case wo3:
        case Eo3:
        case Io3:
        case To3:
        case Co3:
        case Po3:
        case So3:
        case Oo3:
        case Ro3:
        case Ao3:
        case xo3: {
          if (typeof Buffer < "u" && Buffer.isBuffer(r3) !== Buffer.isBuffer(e2) || r3.length !== e2.length) return false;
          for (let c6 = 0; c6 < r3.length; c6++) if (!De3(r3[c6], e2[c6], c6, r3, e2, t, i4)) return false;
          return true;
        }
        case Do3:
          return r3.byteLength !== e2.byteLength ? false : ve3(new Uint8Array(r3), new Uint8Array(e2), t, i4);
        case _o5:
          return r3.byteLength !== e2.byteLength || r3.byteOffset !== e2.byteOffset ? false : ve3(new Uint8Array(r3), new Uint8Array(e2), t, i4);
        case vo3:
          return r3.name === e2.name && r3.message === e2.message;
        case Ze3: {
          if (!(ve3(r3.constructor, e2.constructor, t, i4) || zi2(r3) && zi2(e2))) return false;
          const h6 = [...Object.keys(r3), ...xi2(r3)], l7 = [...Object.keys(e2), ...xi2(e2)];
          if (h6.length !== l7.length) return false;
          for (let g4 = 0; g4 < h6.length; g4++) {
            const y5 = h6[g4], _5 = r3[y5];
            if (!Object.hasOwn(e2, y5)) return false;
            const u2 = e2[y5];
            if (!De3(_5, u2, y5, r3, e2, t, i4)) return false;
          }
          return true;
        }
        default:
          return false;
      }
    } finally {
      t.delete(r3), t.delete(e2);
    }
  }
  __name(ve3, "ve");
  function zo3(r3, e2) {
    return $o3(r3, e2, No3);
  }
  __name(zo3, "zo");
  var Lo3 = Object.defineProperty;
  var Li2 = Object.getOwnPropertySymbols;
  var ko3 = Object.prototype.hasOwnProperty;
  var jo3 = Object.prototype.propertyIsEnumerable;
  var Qe2 = /* @__PURE__ */ __name((r3, e2, t) => e2 in r3 ? Lo3(r3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r3[e2] = t, "Qe");
  var ki2 = /* @__PURE__ */ __name((r3, e2) => {
    for (var t in e2 || (e2 = {})) ko3.call(e2, t) && Qe2(r3, t, e2[t]);
    if (Li2) for (var t of Li2(e2)) jo3.call(e2, t) && Qe2(r3, t, e2[t]);
    return r3;
  }, "ki");
  var U2 = /* @__PURE__ */ __name((r3, e2, t) => Qe2(r3, typeof e2 != "symbol" ? e2 + "" : e2, t), "U");
  var _ji = class _ji extends f2 {
    constructor(e2, t, i4, s3 = W3, n5 = void 0) {
      super(e2, t, i4, s3), this.core = e2, this.logger = t, this.name = i4, U2(this, "map", /* @__PURE__ */ new Map()), U2(this, "version", jt3), U2(this, "cached", []), U2(this, "initialized", false), U2(this, "getKey"), U2(this, "storagePrefix", W3), U2(this, "recentlyDeleted", []), U2(this, "recentlyDeletedLimit", 200), U2(this, "init", async () => {
        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((o5) => {
          this.getKey && o5 !== null && !Dt2(o5) ? this.map.set(this.getKey(o5), o5) : Ja(o5) ? this.map.set(o5.id, o5) : Qa(o5) && this.map.set(o5.topic, o5);
        }), this.cached = [], this.initialized = true);
      }), U2(this, "set", async (o5, a4) => {
        this.isInitialized(), this.map.has(o5) ? await this.update(o5, a4) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: o5, value: a4 }), this.map.set(o5, a4), await this.persist());
      }), U2(this, "get", (o5) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: o5 }), this.getData(o5))), U2(this, "getAll", (o5) => (this.isInitialized(), o5 ? this.values.filter((a4) => Object.keys(o5).every((c6) => zo3(a4[c6], o5[c6]))) : this.values)), U2(this, "update", async (o5, a4) => {
        this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: o5, update: a4 });
        const c6 = ki2(ki2({}, this.getData(o5)), a4);
        this.map.set(o5, c6), await this.persist();
      }), U2(this, "delete", async (o5, a4) => {
        this.isInitialized(), this.map.has(o5) && (this.logger.debug("Deleting value"), this.logger.trace({ type: "method", method: "delete", key: o5, reason: a4 }), this.map.delete(o5), this.addToRecentlyDeleted(o5), await this.persist());
      }), this.logger = X(t, this.name), this.storagePrefix = s3, this.getKey = n5;
    }
    get context() {
      return w(this.logger);
    }
    get storageKey() {
      return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
    }
    get length() {
      return this.map.size;
    }
    get keys() {
      return Array.from(this.map.keys());
    }
    get values() {
      return Array.from(this.map.values());
    }
    addToRecentlyDeleted(e2) {
      this.recentlyDeleted.push(e2), this.recentlyDeleted.length >= this.recentlyDeletedLimit && this.recentlyDeleted.splice(0, this.recentlyDeletedLimit / 2);
    }
    async setDataStore(e2) {
      await this.core.storage.setItem(this.storageKey, e2);
    }
    async getDataStore() {
      return await this.core.storage.getItem(this.storageKey);
    }
    getData(e2) {
      const t = this.map.get(e2);
      if (!t) {
        if (this.recentlyDeleted.includes(e2)) {
          const { message: s3 } = Bt2("MISSING_OR_INVALID", `Record was recently deleted - ${this.name}: ${e2}`);
          throw this.logger.error(s3), new Error(s3);
        }
        const { message: i4 } = Bt2("NO_MATCHING_KEY", `${this.name}: ${e2}`);
        throw this.logger.error(i4), new Error(i4);
      }
      return t;
    }
    async persist() {
      await this.setDataStore(this.values);
    }
    async restore() {
      try {
        const e2 = await this.getDataStore();
        if (typeof e2 > "u" || !e2.length) return;
        if (this.map.size) {
          const { message: t } = Bt2("RESTORE_WILL_OVERRIDE", this.name);
          throw this.logger.error(t), new Error(t);
        }
        this.cached = e2, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({ type: "method", method: "restore", value: this.values });
      } catch (e2) {
        this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e2);
      }
    }
    isInitialized() {
      if (!this.initialized) {
        const { message: e2 } = Bt2("NOT_INITIALIZED", this.name);
        throw new Error(e2);
      }
    }
  };
  __name(_ji, "ji");
  var ji2 = _ji;
  var Uo3 = Object.defineProperty;
  var Fo3 = /* @__PURE__ */ __name((r3, e2, t) => e2 in r3 ? Uo3(r3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r3[e2] = t, "Fo");
  var d3 = /* @__PURE__ */ __name((r3, e2, t) => Fo3(r3, typeof e2 != "symbol" ? e2 + "" : e2, t), "d");
  var _Ui = class _Ui {
    constructor(e2, t) {
      this.core = e2, this.logger = t, d3(this, "name", Kt3), d3(this, "version", Bt3), d3(this, "events", new import_events7.default()), d3(this, "pairings"), d3(this, "initialized", false), d3(this, "storagePrefix", W3), d3(this, "ignoredPayloadTypes", [ie]), d3(this, "registeredMethods", []), d3(this, "init", async () => {
        this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = true, this.logger.trace("Initialized"));
      }), d3(this, "register", ({ methods: i4 }) => {
        this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...i4])];
      }), d3(this, "create", async (i4) => {
        this.isInitialized();
        const s3 = pa(), n5 = await this.core.crypto.setSymKey(s3), o5 = _i2(import_time4.FIVE_MINUTES), a4 = { protocol: Nt3 }, c6 = { topic: n5, expiry: o5, relay: a4, active: false, methods: i4?.methods }, h6 = ja({ protocol: this.core.protocol, version: this.core.version, topic: n5, symKey: s3, relay: a4, expiryTimestamp: o5, methods: i4?.methods });
        return this.events.emit(ae2.create, c6), this.core.expirer.set(n5, o5), await this.pairings.set(n5, c6), await this.core.relayer.subscribe(n5, { transportType: i4?.transportType, internal: i4?.internal }), { topic: n5, uri: h6 };
      }), d3(this, "pair", async (i4) => {
        this.isInitialized();
        const s3 = this.core.eventClient.createEvent({ properties: { topic: i4?.uri, trace: [Y2.pairing_started] } });
        this.isValidPair(i4, s3);
        const { topic: n5, symKey: o5, relay: a4, expiryTimestamp: c6, methods: h6 } = Ca(i4.uri);
        s3.props.properties.topic = n5, s3.addTrace(Y2.pairing_uri_validation_success), s3.addTrace(Y2.pairing_uri_not_expired);
        let l7;
        if (this.pairings.keys.includes(n5)) {
          if (l7 = this.pairings.get(n5), s3.addTrace(Y2.existing_pairing), l7.active) throw s3.setError(X3.active_pairing_already_exists), new Error(`Pairing already exists: ${n5}. Please try again with a new connection URI.`);
          s3.addTrace(Y2.pairing_not_expired);
        }
        const g4 = c6 || _i2(import_time4.FIVE_MINUTES), y5 = { topic: n5, relay: a4, expiry: g4, active: false, methods: h6 };
        this.core.expirer.set(n5, g4), await this.pairings.set(n5, y5), s3.addTrace(Y2.store_new_pairing), i4.activatePairing && await this.activate({ topic: n5 }), this.events.emit(ae2.create, y5), s3.addTrace(Y2.emit_inactive_pairing), this.core.crypto.keychain.has(n5) || await this.core.crypto.setSymKey(o5, n5), s3.addTrace(Y2.subscribing_pairing_topic);
        try {
          await this.core.relayer.confirmOnlineStateOrThrow();
        } catch {
          s3.setError(X3.no_internet_connection);
        }
        try {
          await this.core.relayer.subscribe(n5, { relay: a4 });
        } catch (_5) {
          throw s3.setError(X3.subscribe_pairing_topic_failure), _5;
        }
        return s3.addTrace(Y2.subscribe_pairing_topic_success), y5;
      }), d3(this, "activate", async ({ topic: i4 }) => {
        this.isInitialized();
        const s3 = _i2(import_time4.FIVE_MINUTES);
        this.core.expirer.set(i4, s3), await this.pairings.update(i4, { active: true, expiry: s3 });
      }), d3(this, "ping", async (i4) => {
        this.isInitialized(), await this.isValidPing(i4), this.logger.warn("ping() is deprecated and will be removed in the next major release.");
        const { topic: s3 } = i4;
        if (this.pairings.keys.includes(s3)) {
          const n5 = await this.sendRequest(s3, "wc_pairingPing", {}), { done: o5, resolve: a4, reject: c6 } = Ai();
          this.events.once($i("pairing_ping", n5), ({ error: h6 }) => {
            h6 ? c6(h6) : a4();
          }), await o5();
        }
      }), d3(this, "updateExpiry", async ({ topic: i4, expiry: s3 }) => {
        this.isInitialized(), await this.pairings.update(i4, { expiry: s3 });
      }), d3(this, "updateMetadata", async ({ topic: i4, metadata: s3 }) => {
        this.isInitialized(), await this.pairings.update(i4, { peerMetadata: s3 });
      }), d3(this, "getPairings", () => (this.isInitialized(), this.pairings.values)), d3(this, "disconnect", async (i4) => {
        this.isInitialized(), await this.isValidDisconnect(i4);
        const { topic: s3 } = i4;
        this.pairings.keys.includes(s3) && (await this.sendRequest(s3, "wc_pairingDelete", zt2("USER_DISCONNECTED")), await this.deletePairing(s3));
      }), d3(this, "formatUriFromPairing", (i4) => {
        this.isInitialized();
        const { topic: s3, relay: n5, expiry: o5, methods: a4 } = i4, c6 = this.core.crypto.keychain.get(s3);
        return ja({ protocol: this.core.protocol, version: this.core.version, topic: s3, symKey: c6, relay: n5, expiryTimestamp: o5, methods: a4 });
      }), d3(this, "sendRequest", async (i4, s3, n5) => {
        const o5 = formatJsonRpcRequest(s3, n5), a4 = await this.core.crypto.encode(i4, o5), c6 = oe2[s3].req;
        return this.core.history.set(i4, o5), this.core.relayer.publish(i4, a4, c6), o5.id;
      }), d3(this, "sendResult", async (i4, s3, n5) => {
        const o5 = formatJsonRpcResult(i4, n5), a4 = await this.core.crypto.encode(s3, o5), c6 = (await this.core.history.get(s3, i4)).request.method, h6 = oe2[c6].res;
        await this.core.relayer.publish(s3, a4, h6), await this.core.history.resolve(o5);
      }), d3(this, "sendError", async (i4, s3, n5) => {
        const o5 = formatJsonRpcError(i4, n5), a4 = await this.core.crypto.encode(s3, o5), c6 = (await this.core.history.get(s3, i4)).request.method, h6 = oe2[c6] ? oe2[c6].res : oe2.unregistered_method.res;
        await this.core.relayer.publish(s3, a4, h6), await this.core.history.resolve(o5);
      }), d3(this, "deletePairing", async (i4, s3) => {
        await this.core.relayer.unsubscribe(i4), await Promise.all([this.pairings.delete(i4, zt2("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(i4), s3 ? Promise.resolve() : this.core.expirer.del(i4)]);
      }), d3(this, "cleanup", async () => {
        const i4 = this.pairings.getAll().filter((s3) => Ri(s3.expiry));
        await Promise.all(i4.map((s3) => this.deletePairing(s3.topic)));
      }), d3(this, "onRelayEventRequest", async (i4) => {
        const { topic: s3, payload: n5 } = i4;
        switch (n5.method) {
          case "wc_pairingPing":
            return await this.onPairingPingRequest(s3, n5);
          case "wc_pairingDelete":
            return await this.onPairingDeleteRequest(s3, n5);
          default:
            return await this.onUnknownRpcMethodRequest(s3, n5);
        }
      }), d3(this, "onRelayEventResponse", async (i4) => {
        const { topic: s3, payload: n5 } = i4, o5 = (await this.core.history.get(s3, n5.id)).request.method;
        switch (o5) {
          case "wc_pairingPing":
            return this.onPairingPingResponse(s3, n5);
          default:
            return this.onUnknownRpcMethodResponse(o5);
        }
      }), d3(this, "onPairingPingRequest", async (i4, s3) => {
        const { id: n5 } = s3;
        try {
          this.isValidPing({ topic: i4 }), await this.sendResult(n5, i4, true), this.events.emit(ae2.ping, { id: n5, topic: i4 });
        } catch (o5) {
          await this.sendError(n5, i4, o5), this.logger.error(o5);
        }
      }), d3(this, "onPairingPingResponse", (i4, s3) => {
        const { id: n5 } = s3;
        setTimeout(() => {
          isJsonRpcResult(s3) ? this.events.emit($i("pairing_ping", n5), {}) : isJsonRpcError(s3) && this.events.emit($i("pairing_ping", n5), { error: s3.error });
        }, 500);
      }), d3(this, "onPairingDeleteRequest", async (i4, s3) => {
        const { id: n5 } = s3;
        try {
          this.isValidDisconnect({ topic: i4 }), await this.deletePairing(i4), this.events.emit(ae2.delete, { id: n5, topic: i4 });
        } catch (o5) {
          await this.sendError(n5, i4, o5), this.logger.error(o5);
        }
      }), d3(this, "onUnknownRpcMethodRequest", async (i4, s3) => {
        const { id: n5, method: o5 } = s3;
        try {
          if (this.registeredMethods.includes(o5)) return;
          const a4 = zt2("WC_METHOD_UNSUPPORTED", o5);
          await this.sendError(n5, i4, a4), this.logger.error(a4);
        } catch (a4) {
          await this.sendError(n5, i4, a4), this.logger.error(a4);
        }
      }), d3(this, "onUnknownRpcMethodResponse", (i4) => {
        this.registeredMethods.includes(i4) || this.logger.error(zt2("WC_METHOD_UNSUPPORTED", i4));
      }), d3(this, "isValidPair", (i4, s3) => {
        var n5;
        if (!ou(i4)) {
          const { message: a4 } = Bt2("MISSING_OR_INVALID", `pair() params: ${i4}`);
          throw s3.setError(X3.malformed_pairing_uri), new Error(a4);
        }
        if (!Xa(i4.uri)) {
          const { message: a4 } = Bt2("MISSING_OR_INVALID", `pair() uri: ${i4.uri}`);
          throw s3.setError(X3.malformed_pairing_uri), new Error(a4);
        }
        const o5 = Ca(i4?.uri);
        if (!((n5 = o5?.relay) != null && n5.protocol)) {
          const { message: a4 } = Bt2("MISSING_OR_INVALID", "pair() uri#relay-protocol");
          throw s3.setError(X3.malformed_pairing_uri), new Error(a4);
        }
        if (!(o5 != null && o5.symKey)) {
          const { message: a4 } = Bt2("MISSING_OR_INVALID", "pair() uri#symKey");
          throw s3.setError(X3.malformed_pairing_uri), new Error(a4);
        }
        if (o5 != null && o5.expiryTimestamp && (0, import_time4.toMiliseconds)(o5?.expiryTimestamp) < Date.now()) {
          s3.setError(X3.pairing_expired);
          const { message: a4 } = Bt2("EXPIRED", "pair() URI has expired. Please try again with a new connection URI.");
          throw new Error(a4);
        }
      }), d3(this, "isValidPing", async (i4) => {
        if (!ou(i4)) {
          const { message: n5 } = Bt2("MISSING_OR_INVALID", `ping() params: ${i4}`);
          throw new Error(n5);
        }
        const { topic: s3 } = i4;
        await this.isValidPairingTopic(s3);
      }), d3(this, "isValidDisconnect", async (i4) => {
        if (!ou(i4)) {
          const { message: n5 } = Bt2("MISSING_OR_INVALID", `disconnect() params: ${i4}`);
          throw new Error(n5);
        }
        const { topic: s3 } = i4;
        await this.isValidPairingTopic(s3);
      }), d3(this, "isValidPairingTopic", async (i4) => {
        if (!ft2(i4, false)) {
          const { message: s3 } = Bt2("MISSING_OR_INVALID", `pairing topic should be a string: ${i4}`);
          throw new Error(s3);
        }
        if (!this.pairings.keys.includes(i4)) {
          const { message: s3 } = Bt2("NO_MATCHING_KEY", `pairing topic doesn't exist: ${i4}`);
          throw new Error(s3);
        }
        if (Ri(this.pairings.get(i4).expiry)) {
          await this.deletePairing(i4);
          const { message: s3 } = Bt2("EXPIRED", `pairing topic: ${i4}`);
          throw new Error(s3);
        }
      }), this.core = e2, this.logger = X(t, this.name), this.pairings = new ji2(this.core, this.logger, this.name, this.storagePrefix);
    }
    get context() {
      return w(this.logger);
    }
    isInitialized() {
      if (!this.initialized) {
        const { message: e2 } = Bt2("NOT_INITIALIZED", this.name);
        throw new Error(e2);
      }
    }
    registerRelayerEvents() {
      this.core.relayer.on(C3.message, async (e2) => {
        const { topic: t, message: i4, transportType: s3 } = e2;
        if (this.pairings.keys.includes(t) && s3 !== ee2.link_mode && !this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(i4))) try {
          const n5 = await this.core.crypto.decode(t, i4);
          isJsonRpcRequest(n5) ? (this.core.history.set(t, n5), await this.onRelayEventRequest({ topic: t, payload: n5 })) : isJsonRpcResponse(n5) && (await this.core.history.resolve(n5), await this.onRelayEventResponse({ topic: t, payload: n5 }), this.core.history.delete(t, n5.id)), await this.core.relayer.messages.ack(t, i4);
        } catch (n5) {
          this.logger.error(n5);
        }
      });
    }
    registerExpirerEvents() {
      this.core.expirer.on(q.expired, async (e2) => {
        const { topic: t } = Ui(e2.target);
        t && this.pairings.keys.includes(t) && (await this.deletePairing(t, true), this.events.emit(ae2.expire, { topic: t }));
      });
    }
  };
  __name(_Ui, "Ui");
  var Ui2 = _Ui;
  var Mo3 = Object.defineProperty;
  var Ko3 = /* @__PURE__ */ __name((r3, e2, t) => e2 in r3 ? Mo3(r3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r3[e2] = t, "Ko");
  var N10 = /* @__PURE__ */ __name((r3, e2, t) => Ko3(r3, typeof e2 != "symbol" ? e2 + "" : e2, t), "N");
  var _Fi = class _Fi extends I2 {
    constructor(e2, t) {
      super(e2, t), this.core = e2, this.logger = t, N10(this, "records", /* @__PURE__ */ new Map()), N10(this, "events", new import_events7.EventEmitter()), N10(this, "name", Vt3), N10(this, "version", qt3), N10(this, "cached", []), N10(this, "initialized", false), N10(this, "storagePrefix", W3), N10(this, "init", async () => {
        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i4) => this.records.set(i4.id, i4)), this.cached = [], this.registerEventListeners(), this.initialized = true);
      }), N10(this, "set", (i4, s3, n5) => {
        if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({ type: "method", method: "set", topic: i4, request: s3, chainId: n5 }), this.records.has(s3.id)) return;
        const o5 = { id: s3.id, topic: i4, request: { method: s3.method, params: s3.params || null }, chainId: n5, expiry: _i2(import_time4.THIRTY_DAYS) };
        this.records.set(o5.id, o5), this.persist(), this.events.emit(V3.created, o5);
      }), N10(this, "resolve", async (i4) => {
        if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({ type: "method", method: "update", response: i4 }), !this.records.has(i4.id)) return;
        const s3 = await this.getRecord(i4.id);
        typeof s3.response > "u" && (s3.response = isJsonRpcError(i4) ? { error: i4.error } : { result: i4.result }, this.records.set(s3.id, s3), this.persist(), this.events.emit(V3.updated, s3));
      }), N10(this, "get", async (i4, s3) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({ type: "method", method: "get", topic: i4, id: s3 }), await this.getRecord(s3))), N10(this, "delete", (i4, s3) => {
        this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({ type: "method", method: "delete", id: s3 }), this.values.forEach((n5) => {
          if (n5.topic === i4) {
            if (typeof s3 < "u" && n5.id !== s3) return;
            this.records.delete(n5.id), this.events.emit(V3.deleted, n5);
          }
        }), this.persist();
      }), N10(this, "exists", async (i4, s3) => (this.isInitialized(), this.records.has(s3) ? (await this.getRecord(s3)).topic === i4 : false)), N10(this, "on", (i4, s3) => {
        this.events.on(i4, s3);
      }), N10(this, "once", (i4, s3) => {
        this.events.once(i4, s3);
      }), N10(this, "off", (i4, s3) => {
        this.events.off(i4, s3);
      }), N10(this, "removeListener", (i4, s3) => {
        this.events.removeListener(i4, s3);
      }), this.logger = X(t, this.name);
    }
    get context() {
      return w(this.logger);
    }
    get storageKey() {
      return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
    }
    get size() {
      return this.records.size;
    }
    get keys() {
      return Array.from(this.records.keys());
    }
    get values() {
      return Array.from(this.records.values());
    }
    get pending() {
      const e2 = [];
      return this.values.forEach((t) => {
        if (typeof t.response < "u") return;
        const i4 = { topic: t.topic, request: formatJsonRpcRequest(t.request.method, t.request.params, t.id), chainId: t.chainId };
        return e2.push(i4);
      }), e2;
    }
    async setJsonRpcRecords(e2) {
      await this.core.storage.setItem(this.storageKey, e2);
    }
    async getJsonRpcRecords() {
      return await this.core.storage.getItem(this.storageKey);
    }
    getRecord(e2) {
      this.isInitialized();
      const t = this.records.get(e2);
      if (!t) {
        const { message: i4 } = Bt2("NO_MATCHING_KEY", `${this.name}: ${e2}`);
        throw new Error(i4);
      }
      return t;
    }
    async persist() {
      await this.setJsonRpcRecords(this.values), this.events.emit(V3.sync);
    }
    async restore() {
      try {
        const e2 = await this.getJsonRpcRecords();
        if (typeof e2 > "u" || !e2.length) return;
        if (this.records.size) {
          const { message: t } = Bt2("RESTORE_WILL_OVERRIDE", this.name);
          throw this.logger.error(t), new Error(t);
        }
        this.cached = e2, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", records: this.values });
      } catch (e2) {
        this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e2);
      }
    }
    registerEventListeners() {
      this.events.on(V3.created, (e2) => {
        const t = V3.created;
        this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, record: e2 });
      }), this.events.on(V3.updated, (e2) => {
        const t = V3.updated;
        this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, record: e2 });
      }), this.events.on(V3.deleted, (e2) => {
        const t = V3.deleted;
        this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, record: e2 });
      }), this.core.heartbeat.on(r.pulse, () => {
        this.cleanup();
      });
    }
    cleanup() {
      try {
        this.isInitialized();
        let e2 = false;
        this.records.forEach((t) => {
          (0, import_time4.toMiliseconds)(t.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${t.id}`), this.records.delete(t.id), this.events.emit(V3.deleted, t, false), e2 = true);
        }), e2 && this.persist();
      } catch (e2) {
        this.logger.warn(e2);
      }
    }
    isInitialized() {
      if (!this.initialized) {
        const { message: e2 } = Bt2("NOT_INITIALIZED", this.name);
        throw new Error(e2);
      }
    }
  };
  __name(_Fi, "Fi");
  var Fi2 = _Fi;
  var Bo3 = Object.defineProperty;
  var Vo3 = /* @__PURE__ */ __name((r3, e2, t) => e2 in r3 ? Bo3(r3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r3[e2] = t, "Vo");
  var z4 = /* @__PURE__ */ __name((r3, e2, t) => Vo3(r3, typeof e2 != "symbol" ? e2 + "" : e2, t), "z");
  var _Mi = class _Mi extends S2 {
    constructor(e2, t) {
      super(e2, t), this.core = e2, this.logger = t, z4(this, "expirations", /* @__PURE__ */ new Map()), z4(this, "events", new import_events7.EventEmitter()), z4(this, "name", Gt3), z4(this, "version", Wt3), z4(this, "cached", []), z4(this, "initialized", false), z4(this, "storagePrefix", W3), z4(this, "init", async () => {
        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i4) => this.expirations.set(i4.target, i4)), this.cached = [], this.registerEventListeners(), this.initialized = true);
      }), z4(this, "has", (i4) => {
        try {
          const s3 = this.formatTarget(i4);
          return typeof this.getExpiration(s3) < "u";
        } catch {
          return false;
        }
      }), z4(this, "set", (i4, s3) => {
        this.isInitialized();
        const n5 = this.formatTarget(i4), o5 = { target: n5, expiry: s3 };
        this.expirations.set(n5, o5), this.checkExpiry(n5, o5), this.events.emit(q.created, { target: n5, expiration: o5 });
      }), z4(this, "get", (i4) => {
        this.isInitialized();
        const s3 = this.formatTarget(i4);
        return this.getExpiration(s3);
      }), z4(this, "del", (i4) => {
        if (this.isInitialized(), this.has(i4)) {
          const s3 = this.formatTarget(i4), n5 = this.getExpiration(s3);
          this.expirations.delete(s3), this.events.emit(q.deleted, { target: s3, expiration: n5 });
        }
      }), z4(this, "on", (i4, s3) => {
        this.events.on(i4, s3);
      }), z4(this, "once", (i4, s3) => {
        this.events.once(i4, s3);
      }), z4(this, "off", (i4, s3) => {
        this.events.off(i4, s3);
      }), z4(this, "removeListener", (i4, s3) => {
        this.events.removeListener(i4, s3);
      }), this.logger = X(t, this.name);
    }
    get context() {
      return w(this.logger);
    }
    get storageKey() {
      return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
    }
    get length() {
      return this.expirations.size;
    }
    get keys() {
      return Array.from(this.expirations.keys());
    }
    get values() {
      return Array.from(this.expirations.values());
    }
    formatTarget(e2) {
      if (typeof e2 == "string") return Oi(e2);
      if (typeof e2 == "number") return Ni(e2);
      const { message: t } = Bt2("UNKNOWN_TYPE", `Target type: ${typeof e2}`);
      throw new Error(t);
    }
    async setExpirations(e2) {
      await this.core.storage.setItem(this.storageKey, e2);
    }
    async getExpirations() {
      return await this.core.storage.getItem(this.storageKey);
    }
    async persist() {
      await this.setExpirations(this.values), this.events.emit(q.sync);
    }
    async restore() {
      try {
        const e2 = await this.getExpirations();
        if (typeof e2 > "u" || !e2.length) return;
        if (this.expirations.size) {
          const { message: t } = Bt2("RESTORE_WILL_OVERRIDE", this.name);
          throw this.logger.error(t), new Error(t);
        }
        this.cached = e2, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({ type: "method", method: "restore", expirations: this.values });
      } catch (e2) {
        this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(e2);
      }
    }
    getExpiration(e2) {
      const t = this.expirations.get(e2);
      if (!t) {
        const { message: i4 } = Bt2("NO_MATCHING_KEY", `${this.name}: ${e2}`);
        throw this.logger.warn(i4), new Error(i4);
      }
      return t;
    }
    checkExpiry(e2, t) {
      const { expiry: i4 } = t;
      (0, import_time4.toMiliseconds)(i4) - Date.now() <= 0 && this.expire(e2, t);
    }
    expire(e2, t) {
      this.expirations.delete(e2), this.events.emit(q.expired, { target: e2, expiration: t });
    }
    checkExpirations() {
      this.core.relayer.connected && this.expirations.forEach((e2, t) => this.checkExpiry(t, e2));
    }
    registerEventListeners() {
      this.core.heartbeat.on(r.pulse, () => this.checkExpirations()), this.events.on(q.created, (e2) => {
        const t = q.created;
        this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e2 }), this.persist();
      }), this.events.on(q.expired, (e2) => {
        const t = q.expired;
        this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e2 }), this.persist();
      }), this.events.on(q.deleted, (e2) => {
        const t = q.deleted;
        this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e2 }), this.persist();
      });
    }
    isInitialized() {
      if (!this.initialized) {
        const { message: e2 } = Bt2("NOT_INITIALIZED", this.name);
        throw new Error(e2);
      }
    }
  };
  __name(_Mi, "Mi");
  var Mi2 = _Mi;
  var qo3 = Object.defineProperty;
  var Go3 = /* @__PURE__ */ __name((r3, e2, t) => e2 in r3 ? qo3(r3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r3[e2] = t, "Go");
  var P4 = /* @__PURE__ */ __name((r3, e2, t) => Go3(r3, typeof e2 != "symbol" ? e2 + "" : e2, t), "P");
  var _Ki = class _Ki extends M2 {
    constructor(e2, t, i4) {
      super(e2, t, i4), this.core = e2, this.logger = t, this.store = i4, P4(this, "name", Ht3), P4(this, "abortController"), P4(this, "isDevEnv"), P4(this, "verifyUrlV3", Jt3), P4(this, "storagePrefix", W3), P4(this, "version", Fe2), P4(this, "publicKey"), P4(this, "fetchPromise"), P4(this, "init", async () => {
        var s3;
        this.isDevEnv || (this.publicKey = await this.store.getItem(this.storeKey), this.publicKey && (0, import_time4.toMiliseconds)((s3 = this.publicKey) == null ? void 0 : s3.expiresAt) < Date.now() && (this.logger.debug("verify v2 public key expired"), await this.removePublicKey()));
      }), P4(this, "register", async (s3) => {
        if (!Wt2() || this.isDevEnv) return;
        const n5 = window.location.origin, { id: o5, decryptedId: a4 } = s3, c6 = `${this.verifyUrlV3}/attestation?projectId=${this.core.projectId}&origin=${n5}&id=${o5}&decryptedId=${a4}`;
        try {
          const h6 = (0, import_window_getters2.getDocument)(), l7 = this.startAbortTimer(import_time4.ONE_SECOND * 5), g4 = await new Promise((y5, _5) => {
            const u2 = /* @__PURE__ */ __name(() => {
              window.removeEventListener("message", D4), h6.body.removeChild(m3), _5("attestation aborted");
            }, "u");
            this.abortController.signal.addEventListener("abort", u2);
            const m3 = h6.createElement("iframe");
            m3.src = c6, m3.style.display = "none", m3.addEventListener("error", u2, { signal: this.abortController.signal });
            const D4 = /* @__PURE__ */ __name((w4) => {
              if (w4.data && typeof w4.data == "string") try {
                const E5 = JSON.parse(w4.data);
                if (E5.type === "verify_attestation") {
                  if (sn(E5.attestation).payload.id !== o5) return;
                  clearInterval(l7), h6.body.removeChild(m3), this.abortController.signal.removeEventListener("abort", u2), window.removeEventListener("message", D4), y5(E5.attestation === null ? "" : E5.attestation);
                }
              } catch (E5) {
                this.logger.warn(E5);
              }
            }, "D");
            h6.body.appendChild(m3), window.addEventListener("message", D4, { signal: this.abortController.signal });
          });
          return this.logger.debug(g4, "jwt attestation"), g4;
        } catch (h6) {
          this.logger.warn(h6);
        }
        return "";
      }), P4(this, "resolve", async (s3) => {
        if (this.isDevEnv) return "";
        const { attestationId: n5, hash: o5, encryptedId: a4 } = s3;
        if (n5 === "") {
          this.logger.debug("resolve: attestationId is empty, skipping");
          return;
        }
        if (n5) {
          if (sn(n5).payload.id !== a4) return;
          const h6 = await this.isValidJwtAttestation(n5);
          if (h6) {
            if (!h6.isVerified) {
              this.logger.warn("resolve: jwt attestation: origin url not verified");
              return;
            }
            return h6;
          }
        }
        if (!o5) return;
        const c6 = this.getVerifyUrl(s3?.verifyUrl);
        return this.fetchAttestation(o5, c6);
      }), P4(this, "fetchAttestation", async (s3, n5) => {
        this.logger.debug(`resolving attestation: ${s3} from url: ${n5}`);
        const o5 = this.startAbortTimer(import_time4.ONE_SECOND * 5), a4 = await fetch(`${n5}/attestation/${s3}?v2Supported=true`, { signal: this.abortController.signal });
        return clearTimeout(o5), a4.status === 200 ? await a4.json() : void 0;
      }), P4(this, "getVerifyUrl", (s3) => {
        let n5 = s3 || be3;
        return Xt3.includes(n5) || (this.logger.info(`verify url: ${n5}, not included in trusted list, assigning default: ${be3}`), n5 = be3), n5;
      }), P4(this, "fetchPublicKey", async () => {
        try {
          this.logger.debug(`fetching public key from: ${this.verifyUrlV3}`);
          const s3 = this.startAbortTimer(import_time4.FIVE_SECONDS), n5 = await fetch(`${this.verifyUrlV3}/public-key`, { signal: this.abortController.signal });
          return clearTimeout(s3), await n5.json();
        } catch (s3) {
          this.logger.warn(s3);
        }
      }), P4(this, "persistPublicKey", async (s3) => {
        this.logger.debug(s3, "persisting public key to local storage"), await this.store.setItem(this.storeKey, s3), this.publicKey = s3;
      }), P4(this, "removePublicKey", async () => {
        this.logger.debug("removing verify v2 public key from storage"), await this.store.removeItem(this.storeKey), this.publicKey = void 0;
      }), P4(this, "isValidJwtAttestation", async (s3) => {
        const n5 = await this.getPublicKey();
        try {
          if (n5) return this.validateAttestation(s3, n5);
        } catch (a4) {
          this.logger.error(a4), this.logger.warn("error validating attestation");
        }
        const o5 = await this.fetchAndPersistPublicKey();
        try {
          if (o5) return this.validateAttestation(s3, o5);
        } catch (a4) {
          this.logger.error(a4), this.logger.warn("error validating attestation");
        }
      }), P4(this, "getPublicKey", async () => this.publicKey ? this.publicKey : await this.fetchAndPersistPublicKey()), P4(this, "fetchAndPersistPublicKey", async () => {
        if (this.fetchPromise) return await this.fetchPromise, this.publicKey;
        this.fetchPromise = new Promise(async (n5) => {
          const o5 = await this.fetchPublicKey();
          o5 && (await this.persistPublicKey(o5), n5(o5));
        });
        const s3 = await this.fetchPromise;
        return this.fetchPromise = void 0, s3;
      }), P4(this, "validateAttestation", (s3, n5) => {
        const o5 = Aa(s3, n5.publicKey), a4 = { hasExpired: (0, import_time4.toMiliseconds)(o5.exp) < Date.now(), payload: o5 };
        if (a4.hasExpired) throw this.logger.warn("resolve: jwt attestation expired"), new Error("JWT attestation expired");
        return { origin: a4.payload.origin, isScam: a4.payload.isScam, isVerified: a4.payload.isVerified };
      }), this.logger = X(t, this.name), this.abortController = new AbortController(), this.isDevEnv = ki(), this.init();
    }
    get storeKey() {
      return this.storagePrefix + this.version + this.core.customStoragePrefix + "//verify:public:key";
    }
    get context() {
      return w(this.logger);
    }
    startAbortTimer(e2) {
      return this.abortController = new AbortController(), setTimeout(() => this.abortController.abort(), (0, import_time4.toMiliseconds)(e2));
    }
  };
  __name(_Ki, "Ki");
  var Ki2 = _Ki;
  var Wo3 = Object.defineProperty;
  var Ho3 = /* @__PURE__ */ __name((r3, e2, t) => e2 in r3 ? Wo3(r3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r3[e2] = t, "Ho");
  var Bi = /* @__PURE__ */ __name((r3, e2, t) => Ho3(r3, typeof e2 != "symbol" ? e2 + "" : e2, t), "Bi");
  var _Vi = class _Vi extends O3 {
    constructor(e2, t) {
      super(e2, t), this.projectId = e2, this.logger = t, Bi(this, "context", Zt3), Bi(this, "registerDeviceToken", async (i4) => {
        const { clientId: s3, token: n5, notificationType: o5, enableEncrypted: a4 = false } = i4, c6 = `${Qt3}/${this.projectId}/clients`;
        await fetch(c6, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ client_id: s3, type: o5, token: n5, always_raw: a4 }) });
      }), this.logger = X(t, this.context);
    }
  };
  __name(_Vi, "Vi");
  var Vi2 = _Vi;
  var Yo3 = Object.defineProperty;
  var qi2 = Object.getOwnPropertySymbols;
  var Jo3 = Object.prototype.hasOwnProperty;
  var Xo2 = Object.prototype.propertyIsEnumerable;
  var et2 = /* @__PURE__ */ __name((r3, e2, t) => e2 in r3 ? Yo3(r3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r3[e2] = t, "et");
  var _e4 = /* @__PURE__ */ __name((r3, e2) => {
    for (var t in e2 || (e2 = {})) Jo3.call(e2, t) && et2(r3, t, e2[t]);
    if (qi2) for (var t of qi2(e2)) Xo2.call(e2, t) && et2(r3, t, e2[t]);
    return r3;
  }, "_e");
  var A2 = /* @__PURE__ */ __name((r3, e2, t) => et2(r3, typeof e2 != "symbol" ? e2 + "" : e2, t), "A");
  var _Gi = class _Gi extends R {
    constructor(e2, t, i4 = true) {
      super(e2, t, i4), this.core = e2, this.logger = t, A2(this, "context", ti), A2(this, "storagePrefix", W3), A2(this, "storageVersion", ei), A2(this, "events", /* @__PURE__ */ new Map()), A2(this, "shouldPersist", false), A2(this, "init", async () => {
        if (!ki()) try {
          const s3 = { eventId: Li(), timestamp: Date.now(), domain: this.getAppDomain(), props: { event: "INIT", type: "", properties: { client_id: await this.core.crypto.getClientId(), user_agent: wr2(this.core.relayer.protocol, this.core.relayer.version, Pe3) } } };
          await this.sendEvent([s3]);
        } catch (s3) {
          this.logger.warn(s3);
        }
      }), A2(this, "createEvent", (s3) => {
        const { event: n5 = "ERROR", type: o5 = "", properties: { topic: a4, trace: c6 } } = s3, h6 = Li(), l7 = this.core.projectId || "", g4 = Date.now(), y5 = _e4({ eventId: h6, timestamp: g4, props: { event: n5, type: o5, properties: { topic: a4, trace: c6 } }, bundleId: l7, domain: this.getAppDomain() }, this.setMethods(h6));
        return this.telemetryEnabled && (this.events.set(h6, y5), this.shouldPersist = true), y5;
      }), A2(this, "getEvent", (s3) => {
        const { eventId: n5, topic: o5 } = s3;
        if (n5) return this.events.get(n5);
        const a4 = Array.from(this.events.values()).find((c6) => c6.props.properties.topic === o5);
        if (a4) return _e4(_e4({}, a4), this.setMethods(a4.eventId));
      }), A2(this, "deleteEvent", (s3) => {
        const { eventId: n5 } = s3;
        this.events.delete(n5), this.shouldPersist = true;
      }), A2(this, "setEventListeners", () => {
        this.core.heartbeat.on(r.pulse, async () => {
          this.shouldPersist && await this.persist(), this.events.forEach((s3) => {
            (0, import_time4.fromMiliseconds)(Date.now()) - (0, import_time4.fromMiliseconds)(s3.timestamp) > ii2 && (this.events.delete(s3.eventId), this.shouldPersist = true);
          });
        });
      }), A2(this, "setMethods", (s3) => ({ addTrace: /* @__PURE__ */ __name((n5) => this.addTrace(s3, n5), "addTrace"), setError: /* @__PURE__ */ __name((n5) => this.setError(s3, n5), "setError") })), A2(this, "addTrace", (s3, n5) => {
        const o5 = this.events.get(s3);
        o5 && (o5.props.properties.trace.push(n5), this.events.set(s3, o5), this.shouldPersist = true);
      }), A2(this, "setError", (s3, n5) => {
        const o5 = this.events.get(s3);
        o5 && (o5.props.type = n5, o5.timestamp = Date.now(), this.events.set(s3, o5), this.shouldPersist = true);
      }), A2(this, "persist", async () => {
        await this.core.storage.setItem(this.storageKey, Array.from(this.events.values())), this.shouldPersist = false;
      }), A2(this, "restore", async () => {
        try {
          const s3 = await this.core.storage.getItem(this.storageKey) || [];
          if (!s3.length) return;
          s3.forEach((n5) => {
            this.events.set(n5.eventId, _e4(_e4({}, n5), this.setMethods(n5.eventId)));
          });
        } catch (s3) {
          this.logger.warn(s3);
        }
      }), A2(this, "submit", async () => {
        if (!this.telemetryEnabled || this.events.size === 0) return;
        const s3 = [];
        for (const [n5, o5] of this.events) o5.props.type && s3.push(o5);
        if (s3.length !== 0) try {
          if ((await this.sendEvent(s3)).ok) for (const n5 of s3) this.events.delete(n5.eventId), this.shouldPersist = true;
        } catch (n5) {
          this.logger.warn(n5);
        }
      }), A2(this, "sendEvent", async (s3) => {
        const n5 = this.getAppDomain() ? "" : "&sp=desktop";
        return await fetch(`${si2}?projectId=${this.core.projectId}&st=events_sdk&sv=js-${Pe3}${n5}`, { method: "POST", body: JSON.stringify(s3) });
      }), A2(this, "getAppDomain", () => br2().url), this.logger = X(t, this.context), this.telemetryEnabled = i4, i4 ? this.restore().then(async () => {
        await this.submit(), this.setEventListeners();
      }) : this.persist();
    }
    get storageKey() {
      return this.storagePrefix + this.storageVersion + this.core.customStoragePrefix + "//" + this.context;
    }
  };
  __name(_Gi, "Gi");
  var Gi2 = _Gi;
  var Zo3 = Object.defineProperty;
  var Wi2 = Object.getOwnPropertySymbols;
  var Qo3 = Object.prototype.hasOwnProperty;
  var ea2 = Object.prototype.propertyIsEnumerable;
  var tt2 = /* @__PURE__ */ __name((r3, e2, t) => e2 in r3 ? Zo3(r3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r3[e2] = t, "tt");
  var Hi2 = /* @__PURE__ */ __name((r3, e2) => {
    for (var t in e2 || (e2 = {})) Qo3.call(e2, t) && tt2(r3, t, e2[t]);
    if (Wi2) for (var t of Wi2(e2)) ea2.call(e2, t) && tt2(r3, t, e2[t]);
    return r3;
  }, "Hi");
  var v4 = /* @__PURE__ */ __name((r3, e2, t) => tt2(r3, typeof e2 != "symbol" ? e2 + "" : e2, t), "v");
  var _Oe = class _Oe extends h3 {
    constructor(e2) {
      var t;
      super(e2), v4(this, "protocol", Ue3), v4(this, "version", Fe2), v4(this, "name", ge3), v4(this, "relayUrl"), v4(this, "projectId"), v4(this, "customStoragePrefix"), v4(this, "events", new import_events7.EventEmitter()), v4(this, "logger"), v4(this, "heartbeat"), v4(this, "relayer"), v4(this, "crypto"), v4(this, "storage"), v4(this, "history"), v4(this, "expirer"), v4(this, "pairing"), v4(this, "verify"), v4(this, "echoClient"), v4(this, "linkModeSupportedApps"), v4(this, "eventClient"), v4(this, "initialized", false), v4(this, "logChunkController"), v4(this, "on", (a4, c6) => this.events.on(a4, c6)), v4(this, "once", (a4, c6) => this.events.once(a4, c6)), v4(this, "off", (a4, c6) => this.events.off(a4, c6)), v4(this, "removeListener", (a4, c6) => this.events.removeListener(a4, c6)), v4(this, "dispatchEnvelope", ({ topic: a4, message: c6, sessionExists: h6 }) => {
        if (!a4 || !c6) return;
        const l7 = { topic: a4, message: c6, publishedAt: Date.now(), transportType: ee2.link_mode };
        this.relayer.onLinkMessageEvent(l7, { sessionExists: h6 });
      });
      const i4 = this.getGlobalCore(e2?.customStoragePrefix);
      if (i4) try {
        return this.customStoragePrefix = i4.customStoragePrefix, this.logger = i4.logger, this.heartbeat = i4.heartbeat, this.crypto = i4.crypto, this.history = i4.history, this.expirer = i4.expirer, this.storage = i4.storage, this.relayer = i4.relayer, this.pairing = i4.pairing, this.verify = i4.verify, this.echoClient = i4.echoClient, this.linkModeSupportedApps = i4.linkModeSupportedApps, this.eventClient = i4.eventClient, this.initialized = i4.initialized, this.logChunkController = i4.logChunkController, i4;
      } catch (a4) {
        console.warn("Failed to copy global core", a4);
      }
      this.projectId = e2?.projectId, this.relayUrl = e2?.relayUrl || Ke3, this.customStoragePrefix = e2 != null && e2.customStoragePrefix ? `:${e2.customStoragePrefix}` : "";
      const s3 = D2({ level: typeof e2?.logger == "string" && e2.logger ? e2.logger : Et3.logger, name: ge3 }), { logger: n5, chunkLoggerController: o5 } = Y({ opts: s3, maxSizeInBytes: e2?.maxLogBlobSizeInBytes, loggerOverride: e2?.logger });
      this.logChunkController = o5, (t = this.logChunkController) != null && t.downloadLogsBlobInBrowser && (window.downloadLogsBlobInBrowser = async () => {
        var a4, c6;
        (a4 = this.logChunkController) != null && a4.downloadLogsBlobInBrowser && ((c6 = this.logChunkController) == null || c6.downloadLogsBlobInBrowser({ clientId: await this.crypto.getClientId() }));
      }), this.logger = X(n5, this.name), this.heartbeat = new i(), this.crypto = new wi(this, this.logger, e2?.keychain), this.history = new Fi2(this, this.logger), this.expirer = new Mi2(this, this.logger), this.storage = e2 != null && e2.storage ? e2.storage : new h(Hi2(Hi2({}, It3), e2?.storageOptions)), this.relayer = new Ai2({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new Ui2(this, this.logger), this.verify = new Ki2(this, this.logger, this.storage), this.echoClient = new Vi2(this.projectId || "", this.logger), this.linkModeSupportedApps = [], this.eventClient = new Gi2(this, this.logger, e2?.telemetryEnabled), this.setGlobalCore(this);
    }
    static async init(e2) {
      const t = new _Oe(e2);
      await t.initialize();
      const i4 = await t.crypto.getClientId();
      return await t.storage.setItem(Ut3, i4), t;
    }
    get context() {
      return w(this.logger);
    }
    async start() {
      this.initialized || await this.initialize();
    }
    async getLogsBlob() {
      var e2;
      return (e2 = this.logChunkController) == null ? void 0 : e2.logsToBlob({ clientId: await this.crypto.getClientId() });
    }
    async addLinkModeSupportedApp(e2) {
      this.linkModeSupportedApps.includes(e2) || (this.linkModeSupportedApps.push(e2), await this.storage.setItem(Be3, this.linkModeSupportedApps));
    }
    async initialize() {
      this.logger.trace("Initialized");
      try {
        await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.linkModeSupportedApps = await this.storage.getItem(Be3) || [], this.initialized = true, this.logger.info("Core Initialization Success");
      } catch (e2) {
        throw this.logger.warn(e2, `Core Initialization Failure at epoch ${Date.now()}`), this.logger.error(e2.message), e2;
      }
    }
    getGlobalCore(e2 = "") {
      try {
        if (this.isGlobalCoreDisabled()) return;
        const t = `_walletConnectCore_${e2}`, i4 = `${t}_count`;
        return globalThis[i4] = (globalThis[i4] || 0) + 1, globalThis[i4] > 1 && console.warn(`WalletConnect Core is already initialized. This is probably a mistake and can lead to unexpected behavior. Init() was called ${globalThis[i4]} times.`), globalThis[t];
      } catch (t) {
        console.warn("Failed to get global WalletConnect core", t);
        return;
      }
    }
    setGlobalCore(e2) {
      var t;
      try {
        if (this.isGlobalCoreDisabled()) return;
        const i4 = `_walletConnectCore_${((t = e2.opts) == null ? void 0 : t.customStoragePrefix) || ""}`;
        globalThis[i4] = e2;
      } catch (i4) {
        console.warn("Failed to set global WalletConnect core", i4);
      }
    }
    isGlobalCoreDisabled() {
      try {
        return typeof process < "u" && process.env.DISABLE_GLOBAL_CORE === "true";
      } catch {
        return true;
      }
    }
  };
  __name(_Oe, "Oe");
  var Oe2 = _Oe;
  var ta2 = Oe2;

  // node_modules/@reown/walletkit/dist/index.js
  init_shims();

  // node_modules/@walletconnect/sign-client/dist/index.js
  init_shims();
  var import_events8 = __toESM(require_events(), 1);
  var import_time5 = __toESM(require_cjs(), 1);
  var De4 = "wc";
  var Le3 = 2;
  var Me4 = "client";
  var Re4 = `${De4}@${Le3}:${Me4}:`;
  var Ie3 = { name: Me4, logger: "error", controller: false, relayUrl: "wss://relay.walletconnect.org" };
  var $e3 = "WALLETCONNECT_DEEPLINK_CHOICE";
  var dt3 = "proposal";
  var Ke4 = "Proposal expired";
  var ut3 = "session";
  var se2 = import_time5.SEVEN_DAYS;
  var gt3 = "engine";
  var N11 = { wc_sessionPropose: { req: { ttl: import_time5.FIVE_MINUTES, prompt: true, tag: 1100 }, res: { ttl: import_time5.FIVE_MINUTES, prompt: false, tag: 1101 }, reject: { ttl: import_time5.FIVE_MINUTES, prompt: false, tag: 1120 }, autoReject: { ttl: import_time5.FIVE_MINUTES, prompt: false, tag: 1121 } }, wc_sessionSettle: { req: { ttl: import_time5.FIVE_MINUTES, prompt: false, tag: 1102 }, res: { ttl: import_time5.FIVE_MINUTES, prompt: false, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: import_time5.ONE_DAY, prompt: false, tag: 1104 }, res: { ttl: import_time5.ONE_DAY, prompt: false, tag: 1105 } }, wc_sessionExtend: { req: { ttl: import_time5.ONE_DAY, prompt: false, tag: 1106 }, res: { ttl: import_time5.ONE_DAY, prompt: false, tag: 1107 } }, wc_sessionRequest: { req: { ttl: import_time5.FIVE_MINUTES, prompt: true, tag: 1108 }, res: { ttl: import_time5.FIVE_MINUTES, prompt: false, tag: 1109 } }, wc_sessionEvent: { req: { ttl: import_time5.FIVE_MINUTES, prompt: true, tag: 1110 }, res: { ttl: import_time5.FIVE_MINUTES, prompt: false, tag: 1111 } }, wc_sessionDelete: { req: { ttl: import_time5.ONE_DAY, prompt: false, tag: 1112 }, res: { ttl: import_time5.ONE_DAY, prompt: false, tag: 1113 } }, wc_sessionPing: { req: { ttl: import_time5.ONE_DAY, prompt: false, tag: 1114 }, res: { ttl: import_time5.ONE_DAY, prompt: false, tag: 1115 } }, wc_sessionAuthenticate: { req: { ttl: import_time5.ONE_HOUR, prompt: true, tag: 1116 }, res: { ttl: import_time5.ONE_HOUR, prompt: false, tag: 1117 }, reject: { ttl: import_time5.FIVE_MINUTES, prompt: false, tag: 1118 }, autoReject: { ttl: import_time5.FIVE_MINUTES, prompt: false, tag: 1119 } } };
  var Te3 = { min: import_time5.FIVE_MINUTES, max: import_time5.SEVEN_DAYS };
  var K6 = { idle: "IDLE", active: "ACTIVE" };
  var yt3 = { eth_sendTransaction: { key: "" }, eth_sendRawTransaction: { key: "" }, wallet_sendCalls: { key: "" }, solana_signTransaction: { key: "signature" }, solana_signAllTransactions: { key: "transactions" }, solana_signAndSendTransaction: { key: "signature" }, sui_signAndExecuteTransaction: { key: "digest" }, sui_signTransaction: { key: "" }, hedera_signAndExecuteTransaction: { key: "transactionId" }, hedera_executeTransaction: { key: "transactionId" }, near_signTransaction: { key: "" }, near_signTransactions: { key: "" }, tron_signTransaction: { key: "txID" }, xrpl_signTransaction: { key: "" }, xrpl_signTransactionFor: { key: "" }, algo_signTxn: { key: "" }, sendTransfer: { key: "txid" }, stacks_stxTransfer: { key: "txId" }, polkadot_signTransaction: { key: "" }, cosmos_signDirect: { key: "" } };
  var mt2 = "request";
  var wt3 = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest", "wc_sessionAuthenticate"];
  var _t3 = "wc";
  var vt3 = "auth";
  var St4 = "authKeys";
  var Et4 = "pairingTopics";
  var ft3 = "requests";
  var we3 = `${_t3}@${1.5}:${vt3}:`;
  var _e5 = `${we3}:PUB_KEY`;
  var As2 = Object.defineProperty;
  var xs2 = Object.defineProperties;
  var Cs2 = Object.getOwnPropertyDescriptors;
  var Rt4 = Object.getOwnPropertySymbols;
  var Vs2 = Object.prototype.hasOwnProperty;
  var ks2 = Object.prototype.propertyIsEnumerable;
  var Ue4 = /* @__PURE__ */ __name((S5, o5, e2) => o5 in S5 ? As2(S5, o5, { enumerable: true, configurable: true, writable: true, value: e2 }) : S5[o5] = e2, "Ue");
  var E3 = /* @__PURE__ */ __name((S5, o5) => {
    for (var e2 in o5 || (o5 = {})) Vs2.call(o5, e2) && Ue4(S5, e2, o5[e2]);
    if (Rt4) for (var e2 of Rt4(o5)) ks2.call(o5, e2) && Ue4(S5, e2, o5[e2]);
    return S5;
  }, "E");
  var b4 = /* @__PURE__ */ __name((S5, o5) => xs2(S5, Cs2(o5)), "b");
  var c5 = /* @__PURE__ */ __name((S5, o5, e2) => Ue4(S5, typeof o5 != "symbol" ? o5 + "" : o5, e2), "c");
  var _Ds = class _Ds extends V2 {
    constructor(o5) {
      super(o5), c5(this, "name", gt3), c5(this, "events", new import_events8.default()), c5(this, "initialized", false), c5(this, "requestQueue", { state: K6.idle, queue: [] }), c5(this, "sessionRequestQueue", { state: K6.idle, queue: [] }), c5(this, "emittedSessionRequests", new Hi({ limit: 500 })), c5(this, "requestQueueDelay", import_time5.ONE_SECOND), c5(this, "expectedPairingMethodMap", /* @__PURE__ */ new Map()), c5(this, "recentlyDeletedMap", /* @__PURE__ */ new Map()), c5(this, "recentlyDeletedLimit", 200), c5(this, "relayMessageCache", []), c5(this, "pendingSessions", /* @__PURE__ */ new Map()), c5(this, "init", async () => {
        this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), await this.registerLinkModeListeners(), this.client.core.pairing.register({ methods: Object.keys(N11) }), this.initialized = true, setTimeout(async () => {
          await this.processPendingMessageEvents(), this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
        }, (0, import_time5.toMiliseconds)(this.requestQueueDelay)));
      }), c5(this, "connect", async (e2) => {
        var t;
        this.isInitialized(), await this.confirmOnlineStateOrThrow();
        const s3 = b4(E3({}, e2), { requiredNamespaces: e2.requiredNamespaces || {}, optionalNamespaces: e2.optionalNamespaces || {} });
        await this.isValidConnect(s3), s3.optionalNamespaces = Ya(s3.requiredNamespaces, s3.optionalNamespaces), s3.requiredNamespaces = {};
        const { pairingTopic: i4, requiredNamespaces: r3, optionalNamespaces: n5, sessionProperties: a4, scopedProperties: l7, relays: h6, authentication: p5, walletPay: y5 } = s3, d4 = ((t = p5?.[0]) == null ? void 0 : t.ttl) || N11.wc_sessionPropose.req.ttl || import_time5.FIVE_MINUTES;
        this.validateRequestExpiry(d4);
        let u2 = i4, w4, g4 = false;
        try {
          if (u2) {
            const R4 = this.client.core.pairing.pairings.get(u2);
            this.client.logger.warn("connect() with existing pairing topic is deprecated and will be removed in the next major release."), g4 = R4.active;
          }
        } catch (R4) {
          throw this.client.logger.error(`connect() -> pairing.get(${u2}) failed`), R4;
        }
        if (!u2 || !g4) {
          const { topic: R4, uri: q3 } = await this.client.core.pairing.create({ internal: { skipSubscribe: true } });
          u2 = R4, w4 = q3;
        }
        if (!u2) {
          const { message: R4 } = Bt2("NO_MATCHING_KEY", `connect() pairing topic: ${u2}`);
          throw new Error(R4);
        }
        const f6 = await this.client.core.crypto.generateKeyPair(), v6 = _i2(d4), T4 = E3(b4(E3(E3({ requiredNamespaces: r3, optionalNamespaces: n5, relays: h6 ?? [{ protocol: Nt3 }], proposer: { publicKey: f6, metadata: this.client.metadata }, expiryTimestamp: v6, pairingTopic: u2 }, a4 && { sessionProperties: a4 }), l7 && { scopedProperties: l7 }), { id: payloadId() }), (p5 || y5) && { requests: { authentication: p5?.map((R4) => {
          const { domain: q3, chains: ve4, nonce: ce2, uri: Y4, exp: ie3, nbf: le3, type: J6, statement: pe3, requestId: he4, resources: C5, signatureTypes: D4 } = R4;
          return { domain: q3, chains: ve4, nonce: ce2, type: J6 ?? "caip122", aud: Y4, version: "1", iat: (/* @__PURE__ */ new Date()).toISOString(), exp: ie3, nbf: le3, statement: pe3, requestId: he4, resources: C5, signatureTypes: D4 };
        }), walletPay: y5 } }), A4 = $i("session_connect", T4.id), { reject: V5, resolve: x6, done: U3 } = Ai(d4, Ke4), z6 = /* @__PURE__ */ __name(({ id: R4 }) => {
          R4 === T4.id && (this.client.events.off("proposal_expire", z6), this.pendingSessions.delete(T4.id), this.events.emit(A4, { error: { message: Ke4, code: 0 } }));
        }, "z");
        return this.client.events.on("proposal_expire", z6), this.events.once(A4, ({ error: R4, session: q3 }) => {
          this.client.events.off("proposal_expire", z6), R4 ? V5(R4) : q3 && x6(q3);
        }), await this.setProposal(T4.id, T4), await this.sendProposeSession({ proposal: T4, publishOpts: { internal: { throwOnFailedPublish: true }, tvf: { correlationId: T4.id } } }).catch((R4) => {
          throw this.deleteProposal(T4.id), R4;
        }), { uri: w4, approval: U3 };
      }), c5(this, "pair", async (e2) => {
        this.isInitialized(), await this.confirmOnlineStateOrThrow();
        try {
          return await this.client.core.pairing.pair(e2);
        } catch (t) {
          throw this.client.logger.error("pair() failed"), t;
        }
      }), c5(this, "approve", async (e2) => {
        var t, s3, i4;
        const r3 = this.client.core.eventClient.createEvent({ properties: { topic: (t = e2?.id) == null ? void 0 : t.toString(), trace: [rr3.session_approve_started] } });
        try {
          this.isInitialized(), await this.confirmOnlineStateOrThrow();
        } catch (q3) {
          throw r3.setError(nr3.no_internet_connection), q3;
        }
        try {
          await this.isValidProposalId(e2?.id);
        } catch (q3) {
          throw this.client.logger.error(`approve() -> proposal.get(${e2?.id}) failed`), r3.setError(nr3.proposal_not_found), q3;
        }
        try {
          await this.isValidApprove(e2);
        } catch (q3) {
          throw this.client.logger.error("approve() -> isValidApprove() failed"), r3.setError(nr3.session_approve_namespace_validation_failure), q3;
        }
        const { id: n5, relayProtocol: a4, namespaces: l7, sessionProperties: h6, scopedProperties: p5, sessionConfig: y5, proposalRequestsResponses: d4 } = e2, u2 = this.client.proposal.get(n5);
        this.client.core.eventClient.deleteEvent({ eventId: r3.eventId });
        const { pairingTopic: w4, proposer: g4, requiredNamespaces: f6, optionalNamespaces: v6 } = u2;
        let T4 = (s3 = this.client.core.eventClient) == null ? void 0 : s3.getEvent({ topic: w4 });
        T4 || (T4 = (i4 = this.client.core.eventClient) == null ? void 0 : i4.createEvent({ type: rr3.session_approve_started, properties: { topic: w4, trace: [rr3.session_approve_started, rr3.session_namespaces_validation_success] } }));
        const A4 = await this.client.core.crypto.generateKeyPair(), V5 = g4.publicKey, x6 = await this.client.core.crypto.generateSharedKey(A4, V5), U3 = b4(E3(E3(E3({ relay: { protocol: a4 ?? "irn" }, namespaces: l7, controller: { publicKey: A4, metadata: this.client.metadata }, expiry: _i2(se2) }, h6 && { sessionProperties: h6 }), p5 && { scopedProperties: p5 }), y5 && { sessionConfig: y5 }), { proposalRequestsResponses: d4 }), z6 = ee2.relay;
        T4.addTrace(rr3.subscribing_session_topic);
        try {
          await this.client.core.relayer.subscribe(x6, { transportType: z6, internal: { skipSubscribe: true } });
        } catch (q3) {
          throw T4.setError(nr3.subscribe_session_topic_failure), q3;
        }
        T4.addTrace(rr3.subscribe_session_topic_success);
        const R4 = b4(E3({}, U3), { topic: x6, requiredNamespaces: f6, optionalNamespaces: v6, pairingTopic: w4, acknowledged: false, self: U3.controller, peer: { publicKey: g4.publicKey, metadata: g4.metadata }, controller: A4, transportType: ee2.relay, authentication: d4?.authentication, walletPayResult: d4?.walletPay });
        await this.client.session.set(x6, R4), T4.addTrace(rr3.store_session);
        try {
          await this.sendApproveSession({ sessionTopic: x6, proposal: u2, pairingProposalResponse: { relay: { protocol: a4 ?? "irn" }, responderPublicKey: A4 }, sessionSettleRequest: U3, publishOpts: { internal: { throwOnFailedPublish: true }, tvf: E3({ correlationId: n5 }, this.getTVFApproveParams(R4)) } }), T4.addTrace(rr3.session_approve_publish_success);
        } catch (q3) {
          throw this.client.logger.error(q3), this.client.session.delete(x6, zt2("USER_DISCONNECTED")), await this.client.core.relayer.unsubscribe(x6), q3;
        }
        return this.client.core.eventClient.deleteEvent({ eventId: T4.eventId }), await this.client.core.pairing.updateMetadata({ topic: w4, metadata: g4.metadata }), await this.deleteProposal(n5), await this.client.core.pairing.activate({ topic: w4 }), await this.setExpiry(x6, _i2(se2)), { topic: x6, acknowledged: /* @__PURE__ */ __name(() => Promise.resolve(this.client.session.get(x6)), "acknowledged") };
      }), c5(this, "reject", async (e2) => {
        this.isInitialized(), await this.confirmOnlineStateOrThrow();
        try {
          await this.isValidReject(e2);
        } catch (r3) {
          throw this.client.logger.error("reject() -> isValidReject() failed"), r3;
        }
        const { id: t, reason: s3 } = e2;
        let i4;
        try {
          i4 = this.client.proposal.get(t).pairingTopic;
        } catch (r3) {
          throw this.client.logger.error(`reject() -> proposal.get(${t}) failed`), r3;
        }
        i4 && await this.sendError({ id: t, topic: i4, error: s3, rpcOpts: N11.wc_sessionPropose.reject }), await this.deleteProposal(t);
      }), c5(this, "update", async (e2) => {
        this.isInitialized(), await this.confirmOnlineStateOrThrow();
        try {
          await this.isValidUpdate(e2);
        } catch (p5) {
          throw this.client.logger.error("update() -> isValidUpdate() failed"), p5;
        }
        const { topic: t, namespaces: s3 } = e2, { done: i4, resolve: r3, reject: n5 } = Ai(import_time5.FIVE_MINUTES, "Session update request expired without receiving any acknowledgement"), a4 = payloadId(), l7 = getBigIntRpcId().toString(), h6 = this.client.session.get(t).namespaces;
        return this.events.once($i("session_update", a4), ({ error: p5 }) => {
          p5 ? n5(p5) : r3();
        }), await this.client.session.update(t, { namespaces: s3 }), await this.sendRequest({ topic: t, method: "wc_sessionUpdate", params: { namespaces: s3 }, throwOnFailedPublish: true, clientRpcId: a4, relayRpcId: l7 }).catch((p5) => {
          this.client.logger.error(p5), this.client.session.update(t, { namespaces: h6 }), n5(p5);
        }), { acknowledged: i4 };
      }), c5(this, "extend", async (e2) => {
        this.isInitialized(), await this.confirmOnlineStateOrThrow();
        try {
          await this.isValidExtend(e2);
        } catch (a4) {
          throw this.client.logger.error("extend() -> isValidExtend() failed"), a4;
        }
        const { topic: t } = e2, s3 = payloadId(), { done: i4, resolve: r3, reject: n5 } = Ai(import_time5.FIVE_MINUTES, "Session extend request expired without receiving any acknowledgement");
        return this.events.once($i("session_extend", s3), ({ error: a4 }) => {
          a4 ? n5(a4) : r3();
        }), await this.setExpiry(t, _i2(se2)), this.sendRequest({ topic: t, method: "wc_sessionExtend", params: {}, clientRpcId: s3, throwOnFailedPublish: true }).catch((a4) => {
          n5(a4);
        }), { acknowledged: i4 };
      }), c5(this, "request", async (e2) => {
        this.isInitialized();
        try {
          await this.isValidRequest(e2);
        } catch (g4) {
          throw this.client.logger.error("request() -> isValidRequest() failed"), g4;
        }
        const { chainId: t, request: s3, topic: i4, expiry: r3 = N11.wc_sessionRequest.req.ttl } = e2, n5 = this.client.session.get(i4);
        n5?.transportType === ee2.relay && await this.confirmOnlineStateOrThrow();
        const a4 = payloadId(), l7 = getBigIntRpcId().toString(), { done: h6, resolve: p5, reject: y5 } = Ai(r3, "Request expired. Please try again.");
        this.events.once($i("session_request", a4), ({ error: g4, result: f6 }) => {
          g4 ? y5(g4) : p5(f6);
        });
        const d4 = "wc_sessionRequest", u2 = this.getAppLinkIfEnabled(n5.peer.metadata, n5.transportType);
        if (u2) return await this.sendRequest({ clientRpcId: a4, relayRpcId: l7, topic: i4, method: d4, params: { request: b4(E3({}, s3), { expiryTimestamp: _i2(r3) }), chainId: t }, expiry: r3, throwOnFailedPublish: true, appLink: u2 }).catch((g4) => y5(g4)), this.client.events.emit("session_request_sent", { topic: i4, request: s3, chainId: t, id: a4 }), await h6();
        const w4 = { request: b4(E3({}, s3), { expiryTimestamp: _i2(r3) }), chainId: t };
        return await Promise.all([new Promise(async (g4) => {
          await this.sendRequest({ clientRpcId: a4, relayRpcId: l7, topic: i4, method: d4, params: w4, expiry: r3, throwOnFailedPublish: true, tvf: this.getTVFParams(a4, w4) }).catch((f6) => y5(f6)), this.client.events.emit("session_request_sent", { topic: i4, request: s3, chainId: t, id: a4 }), g4();
        }), new Promise(async (g4) => {
          var f6;
          if (!((f6 = n5.sessionConfig) != null && f6.disableDeepLink)) {
            const v6 = await Ci(this.client.core.storage, $e3);
            await Ti({ id: a4, topic: i4, wcDeepLink: v6 });
          }
          g4();
        }), h6()]).then((g4) => g4[2]);
      }), c5(this, "respond", async (e2) => {
        var t, s3;
        this.isInitialized();
        const i4 = this.client.core.eventClient.createEvent({ properties: { topic: e2?.topic || ((s3 = (t = e2?.response) == null ? void 0 : t.id) == null ? void 0 : s3.toString()), trace: [rr3.session_request_response_started] } });
        try {
          await this.isValidRespond(e2);
        } catch (p5) {
          throw i4.addTrace(p5?.message), i4.setError(nr3.session_request_response_validation_failure), p5;
        }
        i4.addTrace(rr3.session_request_response_validation_success);
        const { topic: r3, response: n5 } = e2, { id: a4 } = n5, l7 = this.client.session.get(r3);
        l7.transportType === ee2.relay && await this.confirmOnlineStateOrThrow();
        const h6 = this.getAppLinkIfEnabled(l7.peer.metadata, l7.transportType);
        try {
          i4.addTrace(rr3.session_request_response_publish_started), isJsonRpcResult(n5) ? await this.sendResult({ id: a4, topic: r3, result: n5.result, throwOnFailedPublish: true, appLink: h6 }) : isJsonRpcError(n5) && await this.sendError({ id: a4, topic: r3, error: n5.error, appLink: h6 }), this.cleanupAfterResponse(e2);
        } catch (p5) {
          throw i4.addTrace(p5?.message), i4.setError(nr3.session_request_response_publish_failure), p5;
        }
      }), c5(this, "ping", async (e2) => {
        this.isInitialized(), await this.confirmOnlineStateOrThrow();
        try {
          await this.isValidPing(e2);
        } catch (s3) {
          throw this.client.logger.error("ping() -> isValidPing() failed"), s3;
        }
        const { topic: t } = e2;
        if (this.client.session.keys.includes(t)) {
          const s3 = payloadId(), i4 = getBigIntRpcId().toString(), { done: r3, resolve: n5, reject: a4 } = Ai(import_time5.FIVE_MINUTES, "Ping request expired without receiving any acknowledgement");
          this.events.once($i("session_ping", s3), ({ error: l7 }) => {
            l7 ? a4(l7) : n5();
          }), await Promise.all([this.sendRequest({ topic: t, method: "wc_sessionPing", params: {}, throwOnFailedPublish: true, clientRpcId: s3, relayRpcId: i4 }), r3()]);
        } else this.client.core.pairing.pairings.keys.includes(t) && (this.client.logger.warn("ping() on pairing topic is deprecated and will be removed in the next major release."), await this.client.core.pairing.ping({ topic: t }));
      }), c5(this, "emit", async (e2) => {
        this.isInitialized(), await this.confirmOnlineStateOrThrow(), await this.isValidEmit(e2);
        const { topic: t, event: s3, chainId: i4 } = e2, r3 = getBigIntRpcId().toString(), n5 = payloadId();
        await this.sendRequest({ topic: t, method: "wc_sessionEvent", params: { event: s3, chainId: i4 }, throwOnFailedPublish: true, relayRpcId: r3, clientRpcId: n5 });
      }), c5(this, "disconnect", async (e2) => {
        this.isInitialized(), await this.confirmOnlineStateOrThrow(), await this.isValidDisconnect(e2);
        const { topic: t } = e2;
        if (this.client.session.keys.includes(t)) await this.sendRequest({ topic: t, method: "wc_sessionDelete", params: zt2("USER_DISCONNECTED"), throwOnFailedPublish: true }), await this.deleteSession({ topic: t, emitEvent: false });
        else if (this.client.core.pairing.pairings.keys.includes(t)) await this.client.core.pairing.disconnect({ topic: t });
        else {
          const { message: s3 } = Bt2("MISMATCHED_TOPIC", `Session or pairing topic not found: ${t}`);
          throw new Error(s3);
        }
      }), c5(this, "find", (e2) => (this.isInitialized(), this.client.session.getAll().filter((t) => Wa(t, e2)))), c5(this, "getPendingSessionRequests", () => this.client.pendingRequest.getAll()), c5(this, "authenticate", async (e2, t) => {
        var s3;
        this.isInitialized(), this.isValidAuthenticate(e2);
        const i4 = t && this.client.core.linkModeSupportedApps.includes(t) && ((s3 = this.client.metadata.redirect) == null ? void 0 : s3.linkMode), r3 = i4 ? ee2.link_mode : ee2.relay;
        r3 === ee2.relay && await this.confirmOnlineStateOrThrow();
        const { chains: n5, statement: a4 = "", uri: l7, domain: h6, nonce: p5, type: y5, exp: d4, nbf: u2, methods: w4 = [], expiry: g4 } = e2, f6 = [...e2.resources || []], { topic: v6, uri: T4 } = await this.client.core.pairing.create({ methods: ["wc_sessionAuthenticate"], transportType: r3 });
        this.client.logger.info({ message: "Generated new pairing", pairing: { topic: v6, uri: T4 } });
        const A4 = await this.client.core.crypto.generateKeyPair(), V5 = ba(A4);
        if (await Promise.all([this.client.auth.authKeys.set(_e5, { responseTopic: V5, publicKey: A4 }), this.client.auth.pairingTopics.set(V5, { topic: V5, pairingTopic: v6 })]), await this.client.core.relayer.subscribe(V5, { transportType: r3 }), this.client.logger.info(`sending request to new pairing topic: ${v6}`), w4.length > 0) {
          const { namespace: C5 } = Je2(n5[0]);
          let D4 = Zc(C5, "request", w4);
          je2(f6) && (D4 = Gc(D4, f6.pop())), f6.push(D4);
        }
        const x6 = g4 && g4 > N11.wc_sessionAuthenticate.req.ttl ? g4 : N11.wc_sessionAuthenticate.req.ttl, U3 = { authPayload: { type: y5 ?? "caip122", chains: n5, statement: a4, aud: l7, domain: h6, version: "1", nonce: p5, iat: (/* @__PURE__ */ new Date()).toISOString(), exp: d4, nbf: u2, resources: f6 }, requester: { publicKey: A4, metadata: this.client.metadata }, expiryTimestamp: _i2(x6) }, z6 = { eip155: { chains: n5, methods: [.../* @__PURE__ */ new Set(["personal_sign", ...w4])], events: ["chainChanged", "accountsChanged"] } }, R4 = { requiredNamespaces: {}, optionalNamespaces: z6, relays: [{ protocol: "irn" }], pairingTopic: v6, proposer: { publicKey: A4, metadata: this.client.metadata }, expiryTimestamp: _i2(N11.wc_sessionPropose.req.ttl), id: payloadId() }, { done: q3, resolve: ve4, reject: ce2 } = Ai(x6, "Request expired"), Y4 = payloadId(), ie3 = $i("session_connect", R4.id), le3 = $i("session_request", Y4), J6 = /* @__PURE__ */ __name(async ({ error: C5, session: D4 }) => {
          this.events.off(le3, pe3), C5 ? ce2(C5) : D4 && ve4({ session: D4 });
        }, "J"), pe3 = /* @__PURE__ */ __name(async (C5) => {
          var D4, je3, Fe3;
          if (await this.deletePendingAuthRequest(Y4, { message: "fulfilled", code: 0 }), C5.error) {
            const ue = zt2("WC_METHOD_UNSUPPORTED", "wc_sessionAuthenticate");
            return C5.error.code === ue.code ? void 0 : (this.events.off(ie3, J6), ce2(C5.error.message));
          }
          await this.deleteProposal(R4.id), this.events.off(ie3, J6);
          const { cacaos: He4, responder: X5 } = C5.result, Pe4 = [], Qe3 = [];
          for (const ue of He4) {
            await Vc({ cacao: ue, projectId: this.client.core.projectId }) || (this.client.logger.error(ue, "Signature verification failed"), ce2(zt2("SESSION_SETTLEMENT_FAILED", "Signature verification failed")));
            const { p: Ne3 } = ue, Oe3 = je2(Ne3.resources), ze3 = [no2(Ne3.iss)], Tt4 = bn2(Ne3.iss);
            if (Oe3) {
              const be4 = zc(Oe3), qt4 = Yc(Oe3);
              Pe4.push(...be4), ze3.push(...qt4);
            }
            for (const be4 of ze3) Qe3.push(`${be4}:${Tt4}`);
          }
          const de3 = await this.client.core.crypto.generateSharedKey(A4, X5.publicKey);
          let Se4;
          Pe4.length > 0 && (Se4 = { topic: de3, acknowledged: true, self: { publicKey: A4, metadata: this.client.metadata }, peer: X5, controller: X5.publicKey, expiry: _i2(se2), requiredNamespaces: {}, optionalNamespaces: {}, relay: { protocol: "irn" }, pairingTopic: v6, namespaces: za([...new Set(Pe4)], [...new Set(Qe3)]), transportType: r3 }, await this.client.core.relayer.subscribe(de3, { transportType: r3 }), await this.client.session.set(de3, Se4), v6 && await this.client.core.pairing.updateMetadata({ topic: v6, metadata: X5.metadata }), Se4 = this.client.session.get(de3)), (D4 = this.client.metadata.redirect) != null && D4.linkMode && (je3 = X5.metadata.redirect) != null && je3.linkMode && (Fe3 = X5.metadata.redirect) != null && Fe3.universal && t && (this.client.core.addLinkModeSupportedApp(X5.metadata.redirect.universal), this.client.session.update(de3, { transportType: ee2.link_mode })), ve4({ auths: He4, session: Se4 });
        }, "pe");
        this.events.once(ie3, J6), this.events.once(le3, pe3);
        let he4;
        try {
          if (i4) {
            const C5 = formatJsonRpcRequest("wc_sessionAuthenticate", U3, Y4);
            this.client.core.history.set(v6, C5);
            const D4 = await this.client.core.crypto.encode("", C5, { type: ve2, encoding: Ge2 });
            he4 = La(t, v6, D4);
          } else await Promise.all([this.sendRequest({ topic: v6, method: "wc_sessionAuthenticate", params: U3, expiry: e2.expiry, throwOnFailedPublish: true, clientRpcId: Y4 }), this.sendRequest({ topic: v6, method: "wc_sessionPropose", params: R4, expiry: N11.wc_sessionPropose.req.ttl, throwOnFailedPublish: true, clientRpcId: R4.id })]);
        } catch (C5) {
          throw this.events.off(ie3, J6), this.events.off(le3, pe3), C5;
        }
        return await this.setProposal(R4.id, R4), await this.setAuthRequest(Y4, { request: b4(E3({}, U3), { verifyContext: {} }), pairingTopic: v6, transportType: r3 }), { uri: he4 ?? T4, response: q3 };
      }), c5(this, "approveSessionAuthenticate", async (e2) => {
        const { id: t, auths: s3 } = e2, i4 = this.client.core.eventClient.createEvent({ properties: { topic: t.toString(), trace: [or3.authenticated_session_approve_started] } });
        try {
          this.isInitialized();
        } catch (g4) {
          throw i4.setError(ar3.no_internet_connection), g4;
        }
        const r3 = this.getPendingAuthRequest(t);
        if (!r3) throw i4.setError(ar3.authenticated_session_pending_request_not_found), new Error(`Could not find pending auth request with id ${t}`);
        const n5 = r3.transportType || ee2.relay;
        n5 === ee2.relay && await this.confirmOnlineStateOrThrow();
        const a4 = r3.requester.publicKey, l7 = await this.client.core.crypto.generateKeyPair(), h6 = ba(a4), p5 = { type: ie, receiverPublicKey: a4, senderPublicKey: l7 }, y5 = [], d4 = [];
        for (const g4 of s3) {
          if (!await Vc({ cacao: g4, projectId: this.client.core.projectId })) {
            i4.setError(ar3.invalid_cacao);
            const V5 = zt2("SESSION_SETTLEMENT_FAILED", "Signature verification failed");
            throw await this.sendError({ id: t, topic: h6, error: V5, encodeOpts: p5 }), new Error(V5.message);
          }
          i4.addTrace(or3.cacaos_verified);
          const { p: f6 } = g4, v6 = je2(f6.resources), T4 = [no2(f6.iss)], A4 = bn2(f6.iss);
          if (v6) {
            const V5 = zc(v6), x6 = Yc(v6);
            y5.push(...V5), T4.push(...x6);
          }
          for (const V5 of T4) d4.push(`${V5}:${A4}`);
        }
        const u2 = await this.client.core.crypto.generateSharedKey(l7, a4);
        i4.addTrace(or3.create_authenticated_session_topic);
        let w4;
        if (y5?.length > 0) {
          w4 = { topic: u2, acknowledged: true, self: { publicKey: l7, metadata: this.client.metadata }, peer: { publicKey: a4, metadata: r3.requester.metadata }, controller: a4, expiry: _i2(se2), authentication: s3, requiredNamespaces: {}, optionalNamespaces: {}, relay: { protocol: "irn" }, pairingTopic: r3.pairingTopic, namespaces: za([...new Set(y5)], [...new Set(d4)]), transportType: n5 }, i4.addTrace(or3.subscribing_authenticated_session_topic);
          try {
            await this.client.core.relayer.subscribe(u2, { transportType: n5 });
          } catch (g4) {
            throw i4.setError(ar3.subscribe_authenticated_session_topic_failure), g4;
          }
          i4.addTrace(or3.subscribe_authenticated_session_topic_success), await this.client.session.set(u2, w4), i4.addTrace(or3.store_authenticated_session), await this.client.core.pairing.updateMetadata({ topic: r3.pairingTopic, metadata: r3.requester.metadata });
        }
        i4.addTrace(or3.publishing_authenticated_session_approve);
        try {
          await this.sendResult({ topic: h6, id: t, result: { cacaos: s3, responder: { publicKey: l7, metadata: this.client.metadata } }, encodeOpts: p5, throwOnFailedPublish: true, appLink: this.getAppLinkIfEnabled(r3.requester.metadata, n5) });
        } catch (g4) {
          throw i4.setError(ar3.authenticated_session_approve_publish_failure), g4;
        }
        return await this.client.auth.requests.delete(t, { message: "fulfilled", code: 0 }), await this.client.core.pairing.activate({ topic: r3.pairingTopic }), this.client.core.eventClient.deleteEvent({ eventId: i4.eventId }), { session: w4 };
      }), c5(this, "rejectSessionAuthenticate", async (e2) => {
        this.isInitialized();
        const { id: t, reason: s3 } = e2, i4 = this.getPendingAuthRequest(t);
        if (!i4) throw new Error(`Could not find pending auth request with id ${t}`);
        i4.transportType === ee2.relay && await this.confirmOnlineStateOrThrow();
        const r3 = i4.requester.publicKey, n5 = await this.client.core.crypto.generateKeyPair(), a4 = ba(r3), l7 = { type: ie, receiverPublicKey: r3, senderPublicKey: n5 };
        await this.sendError({ id: t, topic: a4, error: s3, encodeOpts: l7, rpcOpts: N11.wc_sessionAuthenticate.reject, appLink: this.getAppLinkIfEnabled(i4.requester.metadata, i4.transportType) }), await this.client.auth.requests.delete(t, { message: "rejected", code: 0 }), await this.deleteProposal(t);
      }), c5(this, "formatAuthMessage", (e2) => {
        this.isInitialized();
        const { request: t, iss: s3 } = e2;
        return ro2(t, s3);
      }), c5(this, "processRelayMessageCache", () => {
        setTimeout(async () => {
          if (this.relayMessageCache.length !== 0) for (; this.relayMessageCache.length > 0; ) try {
            const e2 = this.relayMessageCache.shift();
            e2 && await this.onRelayMessage(e2);
          } catch (e2) {
            this.client.logger.error(e2);
          }
        }, 50);
      }), c5(this, "cleanupDuplicatePairings", async (e2) => {
        if (e2.pairingTopic) try {
          const t = this.client.core.pairing.pairings.get(e2.pairingTopic), s3 = this.client.core.pairing.pairings.getAll().filter((i4) => {
            var r3, n5;
            return ((r3 = i4.peerMetadata) == null ? void 0 : r3.url) && ((n5 = i4.peerMetadata) == null ? void 0 : n5.url) === e2.peer.metadata.url && i4.topic && i4.topic !== t.topic;
          });
          if (s3.length === 0) return;
          this.client.logger.info(`Cleaning up ${s3.length} duplicate pairing(s)`), await Promise.all(s3.map((i4) => this.client.core.pairing.disconnect({ topic: i4.topic }))), this.client.logger.info("Duplicate pairings clean up finished");
        } catch (t) {
          this.client.logger.error(t);
        }
      }), c5(this, "deleteSession", async (e2) => {
        var t;
        const { topic: s3, expirerHasDeleted: i4 = false, emitEvent: r3 = true, id: n5 = 0 } = e2, { self: a4 } = this.client.session.get(s3);
        await this.client.core.relayer.unsubscribe(s3), await this.client.session.delete(s3, zt2("USER_DISCONNECTED")), this.addToRecentlyDeleted(s3, "session"), this.client.core.crypto.keychain.has(a4.publicKey) && await this.client.core.crypto.deleteKeyPair(a4.publicKey), this.client.core.crypto.keychain.has(s3) && await this.client.core.crypto.deleteSymKey(s3), i4 || this.client.core.expirer.del(s3), this.client.core.storage.removeItem($e3).catch((l7) => this.client.logger.warn(l7)), s3 === ((t = this.sessionRequestQueue.queue[0]) == null ? void 0 : t.topic) && (this.sessionRequestQueue.state = K6.idle), await Promise.all(this.getPendingSessionRequests().filter((l7) => l7.topic === s3).map((l7) => this.deletePendingSessionRequest(l7.id, zt2("USER_DISCONNECTED")))), r3 && this.client.events.emit("session_delete", { id: n5, topic: s3 });
      }), c5(this, "deleteProposal", async (e2, t) => {
        if (t) try {
          const s3 = this.client.proposal.get(e2), i4 = this.client.core.eventClient.getEvent({ topic: s3.pairingTopic });
          i4?.setError(nr3.proposal_expired);
        } catch {
        }
        await Promise.all([this.client.proposal.delete(e2, zt2("USER_DISCONNECTED")), t ? Promise.resolve() : this.client.core.expirer.del(e2)]), this.addToRecentlyDeleted(e2, "proposal");
      }), c5(this, "deletePendingSessionRequest", async (e2, t, s3 = false) => {
        await Promise.all([this.client.pendingRequest.delete(e2, t), s3 ? Promise.resolve() : this.client.core.expirer.del(e2)]), this.addToRecentlyDeleted(e2, "request"), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((i4) => i4.id !== e2), s3 && (this.sessionRequestQueue.state = K6.idle, this.client.events.emit("session_request_expire", { id: e2 }));
      }), c5(this, "deletePendingAuthRequest", async (e2, t, s3 = false) => {
        await Promise.all([this.client.auth.requests.delete(e2, t), s3 ? Promise.resolve() : this.client.core.expirer.del(e2)]);
      }), c5(this, "setExpiry", async (e2, t) => {
        this.client.session.keys.includes(e2) && (this.client.core.expirer.set(e2, t), await this.client.session.update(e2, { expiry: t }));
      }), c5(this, "setProposal", async (e2, t) => {
        this.client.core.expirer.set(e2, _i2(N11.wc_sessionPropose.req.ttl)), await this.client.proposal.set(e2, t);
      }), c5(this, "setAuthRequest", async (e2, t) => {
        const { request: s3, pairingTopic: i4, transportType: r3 = ee2.relay } = t;
        this.client.core.expirer.set(e2, s3.expiryTimestamp), await this.client.auth.requests.set(e2, { authPayload: s3.authPayload, requester: s3.requester, expiryTimestamp: s3.expiryTimestamp, id: e2, pairingTopic: i4, verifyContext: s3.verifyContext, transportType: r3 });
      }), c5(this, "setPendingSessionRequest", async (e2) => {
        const { id: t, topic: s3, params: i4, verifyContext: r3 } = e2, n5 = i4.request.expiryTimestamp || _i2(N11.wc_sessionRequest.req.ttl);
        this.client.core.expirer.set(t, n5), await this.client.pendingRequest.set(t, { id: t, topic: s3, params: i4, verifyContext: r3 });
      }), c5(this, "sendRequest", async (e2) => {
        const { topic: t, method: s3, params: i4, expiry: r3, relayRpcId: n5, clientRpcId: a4, throwOnFailedPublish: l7, appLink: h6, tvf: p5, publishOpts: y5 = {} } = e2, d4 = formatJsonRpcRequest(s3, i4, a4);
        let u2;
        const w4 = !!h6;
        try {
          const v6 = w4 ? Ge2 : oe;
          u2 = await this.client.core.crypto.encode(t, d4, { encoding: v6 });
        } catch (v6) {
          throw await this.cleanup(), this.client.logger.error(`sendRequest() -> core.crypto.encode() for topic ${t} failed`), v6;
        }
        let g4;
        if (wt3.includes(s3)) {
          const v6 = ya(JSON.stringify(d4)), T4 = ya(u2);
          g4 = await this.client.core.verify.register({ id: T4, decryptedId: v6 });
        }
        const f6 = E3(E3({}, N11[s3].req), y5);
        if (f6.attestation = g4, r3 && (f6.ttl = r3), n5 && (f6.id = n5), this.client.core.history.set(t, d4), w4) {
          const v6 = La(h6, t, u2);
          await globalThis.Linking.openURL(v6, this.client.name);
        } else f6.tvf = b4(E3({}, p5), { correlationId: d4.id }), l7 ? (f6.internal = b4(E3({}, f6.internal), { throwOnFailedPublish: true }), await this.client.core.relayer.publish(t, u2, f6)) : this.client.core.relayer.publish(t, u2, f6).catch((v6) => this.client.logger.error(v6));
        return d4.id;
      }), c5(this, "sendProposeSession", async (e2) => {
        const { proposal: t, publishOpts: s3 } = e2, i4 = formatJsonRpcRequest("wc_sessionPropose", t, t.id);
        this.client.core.history.set(t.pairingTopic, i4);
        const r3 = await this.client.core.crypto.encode(t.pairingTopic, i4, { encoding: oe }), n5 = ya(JSON.stringify(i4)), a4 = ya(r3), l7 = await this.client.core.verify.register({ id: a4, decryptedId: n5 });
        await this.client.core.relayer.publishCustom({ payload: { pairingTopic: t.pairingTopic, sessionProposal: r3 }, opts: b4(E3({}, s3), { publishMethod: "wc_proposeSession", attestation: l7 }) });
      }), c5(this, "sendApproveSession", async (e2) => {
        const { sessionTopic: t, pairingProposalResponse: s3, proposal: i4, sessionSettleRequest: r3, publishOpts: n5 } = e2, a4 = formatJsonRpcResult(i4.id, s3), l7 = await this.client.core.crypto.encode(i4.pairingTopic, a4, { encoding: oe }), h6 = formatJsonRpcRequest("wc_sessionSettle", r3, n5?.id), p5 = await this.client.core.crypto.encode(t, h6, { encoding: oe });
        this.client.core.history.set(t, h6), await this.client.core.relayer.publishCustom({ payload: { sessionTopic: t, pairingTopic: i4.pairingTopic, sessionProposalResponse: l7, sessionSettlementRequest: p5 }, opts: b4(E3({}, n5), { publishMethod: "wc_approveSession" }) });
      }), c5(this, "sendResult", async (e2) => {
        const { id: t, topic: s3, result: i4, throwOnFailedPublish: r3, encodeOpts: n5, appLink: a4 } = e2, l7 = formatJsonRpcResult(t, i4);
        let h6;
        const p5 = a4 && typeof (globalThis == null ? void 0 : globalThis.Linking) < "u";
        try {
          const u2 = p5 ? Ge2 : oe;
          h6 = await this.client.core.crypto.encode(s3, l7, b4(E3({}, n5 || {}), { encoding: u2 }));
        } catch (u2) {
          throw await this.cleanup(), this.client.logger.error(`sendResult() -> core.crypto.encode() for topic ${s3} failed`), u2;
        }
        let y5, d4;
        try {
          y5 = await this.client.core.history.get(s3, t);
          const u2 = y5.request;
          try {
            d4 = this.getTVFParams(t, u2.params, i4);
          } catch (w4) {
            this.client.logger.warn(`sendResult() -> getTVFParams() failed: ${w4?.message}`);
          }
        } catch (u2) {
          throw this.client.logger.error(`sendResult() -> history.get(${s3}, ${t}) failed`), u2;
        }
        if (p5) {
          const u2 = La(a4, s3, h6);
          await globalThis.Linking.openURL(u2, this.client.name);
        } else {
          const u2 = y5.request.method, w4 = N11[u2].res;
          w4.tvf = b4(E3({}, d4), { correlationId: t }), r3 ? (w4.internal = b4(E3({}, w4.internal), { throwOnFailedPublish: true }), await this.client.core.relayer.publish(s3, h6, w4)) : this.client.core.relayer.publish(s3, h6, w4).catch((g4) => this.client.logger.error(g4));
        }
        await this.client.core.history.resolve(l7);
      }), c5(this, "sendError", async (e2) => {
        const { id: t, topic: s3, error: i4, encodeOpts: r3, rpcOpts: n5, appLink: a4 } = e2, l7 = formatJsonRpcError(t, i4);
        let h6;
        const p5 = a4 && typeof (globalThis == null ? void 0 : globalThis.Linking) < "u";
        try {
          const d4 = p5 ? Ge2 : oe;
          h6 = await this.client.core.crypto.encode(s3, l7, b4(E3({}, r3 || {}), { encoding: d4 }));
        } catch (d4) {
          throw await this.cleanup(), this.client.logger.error(`sendError() -> core.crypto.encode() for topic ${s3} failed`), d4;
        }
        let y5;
        try {
          y5 = await this.client.core.history.get(s3, t);
        } catch (d4) {
          throw this.client.logger.error(`sendError() -> history.get(${s3}, ${t}) failed`), d4;
        }
        if (p5) {
          const d4 = La(a4, s3, h6);
          await globalThis.Linking.openURL(d4, this.client.name);
        } else {
          const d4 = y5.request.method, u2 = n5 || N11[d4].res;
          this.client.core.relayer.publish(s3, h6, u2);
        }
        await this.client.core.history.resolve(l7);
      }), c5(this, "cleanup", async () => {
        const e2 = [], t = [];
        this.client.session.getAll().forEach((s3) => {
          let i4 = false;
          Ri(s3.expiry) && (i4 = true), this.client.core.crypto.keychain.has(s3.topic) || (i4 = true), i4 && e2.push(s3.topic);
        }), this.client.proposal.getAll().forEach((s3) => {
          Ri(s3.expiryTimestamp) && t.push(s3.id);
        }), await Promise.all([...e2.map((s3) => this.deleteSession({ topic: s3 })), ...t.map((s3) => this.deleteProposal(s3))]);
      }), c5(this, "onProviderMessageEvent", async (e2) => {
        !this.initialized || this.relayMessageCache.length > 0 ? this.relayMessageCache.push(e2) : await this.onRelayMessage(e2);
      }), c5(this, "onRelayEventRequest", async (e2) => {
        this.requestQueue.queue.push(e2), await this.processRequestsQueue();
      }), c5(this, "processRequestsQueue", async () => {
        if (this.requestQueue.state === K6.active) {
          this.client.logger.info("Request queue already active, skipping...");
          return;
        }
        for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
          this.requestQueue.state = K6.active;
          const e2 = this.requestQueue.queue.shift();
          if (e2) try {
            await this.processRequest(e2);
          } catch (t) {
            this.client.logger.warn(t);
          }
        }
        this.requestQueue.state = K6.idle;
      }), c5(this, "processRequest", async (e2) => {
        const { topic: t, payload: s3, attestation: i4, transportType: r3, encryptedId: n5 } = e2, a4 = s3.method;
        if (!this.shouldIgnorePairingRequest({ topic: t, requestMethod: a4 })) switch (a4) {
          case "wc_sessionPropose":
            return await this.onSessionProposeRequest({ topic: t, payload: s3, attestation: i4, encryptedId: n5 });
          case "wc_sessionSettle":
            return await this.onSessionSettleRequest(t, s3);
          case "wc_sessionUpdate":
            return await this.onSessionUpdateRequest(t, s3);
          case "wc_sessionExtend":
            return await this.onSessionExtendRequest(t, s3);
          case "wc_sessionPing":
            return await this.onSessionPingRequest(t, s3);
          case "wc_sessionDelete":
            return await this.onSessionDeleteRequest(t, s3);
          case "wc_sessionRequest":
            return await this.onSessionRequest({ topic: t, payload: s3, attestation: i4, encryptedId: n5, transportType: r3 });
          case "wc_sessionEvent":
            return await this.onSessionEventRequest(t, s3);
          case "wc_sessionAuthenticate":
            return await this.onSessionAuthenticateRequest({ topic: t, payload: s3, attestation: i4, encryptedId: n5, transportType: r3 });
          default:
            return this.client.logger.info(`Unsupported request method ${a4}`);
        }
      }), c5(this, "onRelayEventResponse", async (e2) => {
        const { topic: t, payload: s3, transportType: i4 } = e2, r3 = (await this.client.core.history.get(t, s3.id)).request.method;
        switch (r3) {
          case "wc_sessionPropose":
            return this.onSessionProposeResponse(t, s3, i4);
          case "wc_sessionSettle":
            return this.onSessionSettleResponse(t, s3);
          case "wc_sessionUpdate":
            return this.onSessionUpdateResponse(t, s3);
          case "wc_sessionExtend":
            return this.onSessionExtendResponse(t, s3);
          case "wc_sessionPing":
            return this.onSessionPingResponse(t, s3);
          case "wc_sessionRequest":
            return this.onSessionRequestResponse(t, s3);
          case "wc_sessionAuthenticate":
            return this.onSessionAuthenticateResponse(t, s3);
          default:
            return this.client.logger.info(`Unsupported response method ${r3}`);
        }
      }), c5(this, "onRelayEventUnknownPayload", (e2) => {
        const { topic: t } = e2, { message: s3 } = Bt2("MISSING_OR_INVALID", `Decoded payload on topic ${t} is not identifiable as a JSON-RPC request or a response.`);
        throw new Error(s3);
      }), c5(this, "shouldIgnorePairingRequest", (e2) => {
        const { topic: t, requestMethod: s3 } = e2, i4 = this.expectedPairingMethodMap.get(t);
        return !i4 || i4.includes(s3) ? false : !!(i4.includes("wc_sessionAuthenticate") && this.client.events.listenerCount("session_authenticate") > 0);
      }), c5(this, "onSessionProposeRequest", async (e2) => {
        const { topic: t, payload: s3, attestation: i4, encryptedId: r3 } = e2, { params: n5, id: a4 } = s3;
        try {
          const l7 = this.client.core.eventClient.getEvent({ topic: t });
          this.client.events.listenerCount("session_proposal") === 0 && (console.warn("No listener for session_proposal event"), l7?.setError(X3.proposal_listener_not_found)), this.isValidConnect(E3({}, s3.params));
          const h6 = n5.expiryTimestamp || _i2(N11.wc_sessionPropose.req.ttl), p5 = E3({ id: a4, pairingTopic: t, expiryTimestamp: h6, attestation: i4, encryptedId: r3 }, n5);
          await this.setProposal(a4, p5);
          const y5 = await this.getVerifyContext({ attestationId: i4, hash: ya(JSON.stringify(s3)), encryptedId: r3, metadata: p5.proposer.metadata });
          l7?.addTrace(Y2.emit_session_proposal), this.client.events.emit("session_proposal", { id: a4, params: p5, verifyContext: y5 });
        } catch (l7) {
          await this.sendError({ id: a4, topic: t, error: l7, rpcOpts: N11.wc_sessionPropose.autoReject }), this.client.logger.error(l7);
        }
      }), c5(this, "onSessionProposeResponse", async (e2, t, s3) => {
        const { id: i4 } = t;
        if (isJsonRpcResult(t)) {
          const { result: r3 } = t;
          this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", result: r3 });
          const n5 = this.client.proposal.get(i4);
          this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", proposal: n5 });
          const a4 = n5.proposer.publicKey;
          this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", selfPublicKey: a4 });
          const l7 = r3.responderPublicKey;
          this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", peerPublicKey: l7 });
          const h6 = await this.client.core.crypto.generateSharedKey(a4, l7);
          this.pendingSessions.set(i4, { sessionTopic: h6, pairingTopic: e2, proposalId: i4, publicKey: a4 });
          const p5 = await this.client.core.relayer.subscribe(h6, { transportType: s3 });
          this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", subscriptionId: p5 }), await this.client.core.pairing.activate({ topic: e2 });
        } else if (isJsonRpcError(t)) {
          await this.deleteProposal(i4);
          const r3 = $i("session_connect", i4);
          if (this.events.listenerCount(r3) === 0) throw new Error(`emitting ${r3} without any listeners, 954`);
          this.events.emit(r3, { error: t.error });
        }
      }), c5(this, "onSessionSettleRequest", async (e2, t) => {
        const { id: s3, params: i4 } = t;
        try {
          this.isValidSessionSettleRequest(i4);
          const { relay: r3, controller: n5, expiry: a4, namespaces: l7, sessionProperties: h6, scopedProperties: p5, sessionConfig: y5, proposalRequestsResponses: d4 } = t.params, u2 = [...this.pendingSessions.values()].find((f6) => f6.sessionTopic === e2);
          if (!u2) return this.client.logger.error(`Pending session not found for topic ${e2}`);
          const w4 = this.client.proposal.get(u2.proposalId), g4 = b4(E3(E3(E3({ topic: e2, relay: r3, expiry: a4, namespaces: l7, acknowledged: true, pairingTopic: u2.pairingTopic, requiredNamespaces: w4.requiredNamespaces, optionalNamespaces: w4.optionalNamespaces, controller: n5.publicKey, self: { publicKey: u2.publicKey, metadata: this.client.metadata }, peer: { publicKey: n5.publicKey, metadata: n5.metadata } }, h6 && { sessionProperties: h6 }), p5 && { scopedProperties: p5 }), y5 && { sessionConfig: y5 }), { transportType: ee2.relay, authentication: d4?.authentication, walletPayResult: d4?.walletPay });
          await this.client.session.set(g4.topic, g4), await this.setExpiry(g4.topic, g4.expiry), await this.client.core.pairing.updateMetadata({ topic: u2.pairingTopic, metadata: g4.peer.metadata }), this.pendingSessions.delete(u2.proposalId), this.deleteProposal(u2.proposalId, false), this.cleanupDuplicatePairings(g4), await this.sendResult({ id: t.id, topic: e2, throwOnFailedPublish: true, result: true }), this.client.events.emit("session_connect", { session: g4 }), this.events.emit($i("session_connect", u2.proposalId), { session: g4 });
        } catch (r3) {
          await this.sendError({ id: s3, topic: e2, error: r3 }), this.client.logger.error(r3);
        }
      }), c5(this, "onSessionSettleResponse", async (e2, t) => {
        const { id: s3 } = t;
        isJsonRpcResult(t) ? (await this.client.session.update(e2, { acknowledged: true }), this.events.emit($i("session_approve", s3), {})) : isJsonRpcError(t) && (await this.client.session.delete(e2, zt2("USER_DISCONNECTED")), this.events.emit($i("session_approve", s3), { error: t.error }));
      }), c5(this, "onSessionUpdateRequest", async (e2, t) => {
        const { params: s3, id: i4 } = t;
        try {
          const r3 = `${e2}_session_update`, n5 = mu.get(r3);
          if (n5 && this.isRequestOutOfSync(n5, i4)) {
            this.client.logger.warn(`Discarding out of sync request - ${i4}`), this.sendError({ id: i4, topic: e2, error: zt2("INVALID_UPDATE_REQUEST") });
            return;
          }
          this.isValidUpdate(E3({ topic: e2 }, s3));
          try {
            mu.set(r3, i4), await this.client.session.update(e2, { namespaces: s3.namespaces }), await this.sendResult({ id: i4, topic: e2, result: true });
          } catch (a4) {
            throw mu.delete(r3), a4;
          }
          this.client.events.emit("session_update", { id: i4, topic: e2, params: s3 });
        } catch (r3) {
          await this.sendError({ id: i4, topic: e2, error: r3 }), this.client.logger.error(r3);
        }
      }), c5(this, "isRequestOutOfSync", (e2, t) => t.toString().slice(0, -3) < e2.toString().slice(0, -3)), c5(this, "onSessionUpdateResponse", (e2, t) => {
        const { id: s3 } = t, i4 = $i("session_update", s3);
        if (this.events.listenerCount(i4) === 0) throw new Error(`emitting ${i4} without any listeners`);
        isJsonRpcResult(t) ? this.events.emit($i("session_update", s3), {}) : isJsonRpcError(t) && this.events.emit($i("session_update", s3), { error: t.error });
      }), c5(this, "onSessionExtendRequest", async (e2, t) => {
        const { id: s3 } = t;
        try {
          this.isValidExtend({ topic: e2 }), await this.setExpiry(e2, _i2(se2)), await this.sendResult({ id: s3, topic: e2, result: true }), this.client.events.emit("session_extend", { id: s3, topic: e2 });
        } catch (i4) {
          await this.sendError({ id: s3, topic: e2, error: i4 }), this.client.logger.error(i4);
        }
      }), c5(this, "onSessionExtendResponse", (e2, t) => {
        const { id: s3 } = t, i4 = $i("session_extend", s3);
        if (this.events.listenerCount(i4) === 0) throw new Error(`emitting ${i4} without any listeners`);
        isJsonRpcResult(t) ? this.events.emit($i("session_extend", s3), {}) : isJsonRpcError(t) && this.events.emit($i("session_extend", s3), { error: t.error });
      }), c5(this, "onSessionPingRequest", async (e2, t) => {
        const { id: s3 } = t;
        try {
          this.isValidPing({ topic: e2 }), await this.sendResult({ id: s3, topic: e2, result: true, throwOnFailedPublish: true }), this.client.events.emit("session_ping", { id: s3, topic: e2 });
        } catch (i4) {
          await this.sendError({ id: s3, topic: e2, error: i4 }), this.client.logger.error(i4);
        }
      }), c5(this, "onSessionPingResponse", (e2, t) => {
        const { id: s3 } = t, i4 = $i("session_ping", s3);
        setTimeout(() => {
          if (this.events.listenerCount(i4) === 0) throw new Error(`emitting ${i4} without any listeners 2176`);
          isJsonRpcResult(t) ? this.events.emit($i("session_ping", s3), {}) : isJsonRpcError(t) && this.events.emit($i("session_ping", s3), { error: t.error });
        }, 500);
      }), c5(this, "onSessionDeleteRequest", async (e2, t) => {
        const { id: s3 } = t;
        try {
          await this.isValidDisconnect({ topic: e2, reason: t.params }), this.cleanupPendingSentRequestsForTopic({ topic: e2, error: zt2("USER_DISCONNECTED") }), await this.deleteSession({ topic: e2, id: s3 });
        } catch (i4) {
          this.client.logger.error(i4);
        }
      }), c5(this, "onSessionRequest", async (e2) => {
        var t, s3, i4;
        const { topic: r3, payload: n5, attestation: a4, encryptedId: l7, transportType: h6 } = e2, { id: p5, params: y5 } = n5;
        try {
          await this.isValidRequest(E3({ topic: r3 }, y5));
          const d4 = this.client.session.get(r3), u2 = await this.getVerifyContext({ attestationId: a4, hash: ya(JSON.stringify(formatJsonRpcRequest("wc_sessionRequest", y5, p5))), encryptedId: l7, metadata: d4.peer.metadata, transportType: h6 }), w4 = { id: p5, topic: r3, params: y5, verifyContext: u2 };
          await this.setPendingSessionRequest(w4), h6 === ee2.link_mode && (t = d4.peer.metadata.redirect) != null && t.universal && this.client.core.addLinkModeSupportedApp((s3 = d4.peer.metadata.redirect) == null ? void 0 : s3.universal), (i4 = this.client.signConfig) != null && i4.disableRequestQueue ? this.emitSessionRequest(w4) : (this.addSessionRequestToSessionRequestQueue(w4), this.processSessionRequestQueue());
        } catch (d4) {
          await this.sendError({ id: p5, topic: r3, error: d4 }), this.client.logger.error(d4);
        }
      }), c5(this, "onSessionRequestResponse", (e2, t) => {
        const { id: s3 } = t, i4 = $i("session_request", s3);
        if (this.events.listenerCount(i4) === 0) throw new Error(`emitting ${i4} without any listeners`);
        isJsonRpcResult(t) ? this.events.emit($i("session_request", s3), { result: t.result }) : isJsonRpcError(t) && this.events.emit($i("session_request", s3), { error: t.error });
      }), c5(this, "onSessionEventRequest", async (e2, t) => {
        const { id: s3, params: i4 } = t;
        try {
          const r3 = `${e2}_session_event_${i4.event.name}`, n5 = mu.get(r3);
          if (n5 && this.isRequestOutOfSync(n5, s3)) {
            this.client.logger.info(`Discarding out of sync request - ${s3}`);
            return;
          }
          this.isValidEmit(E3({ topic: e2 }, i4)), this.client.events.emit("session_event", { id: s3, topic: e2, params: i4 }), mu.set(r3, s3);
        } catch (r3) {
          await this.sendError({ id: s3, topic: e2, error: r3 }), this.client.logger.error(r3);
        }
      }), c5(this, "onSessionAuthenticateResponse", (e2, t) => {
        const { id: s3 } = t;
        this.client.logger.trace({ type: "method", method: "onSessionAuthenticateResponse", topic: e2, payload: t }), isJsonRpcResult(t) ? this.events.emit($i("session_request", s3), { result: t.result }) : isJsonRpcError(t) && this.events.emit($i("session_request", s3), { error: t.error });
      }), c5(this, "onSessionAuthenticateRequest", async (e2) => {
        var t;
        const { topic: s3, payload: i4, attestation: r3, encryptedId: n5, transportType: a4 } = e2;
        try {
          const { requester: l7, authPayload: h6, expiryTimestamp: p5 } = i4.params, y5 = await this.getVerifyContext({ attestationId: r3, hash: ya(JSON.stringify(i4)), encryptedId: n5, metadata: l7.metadata, transportType: a4 }), d4 = { requester: l7, pairingTopic: s3, id: i4.id, authPayload: h6, verifyContext: y5, expiryTimestamp: p5 };
          await this.setAuthRequest(i4.id, { request: d4, pairingTopic: s3, transportType: a4 }), a4 === ee2.link_mode && (t = l7.metadata.redirect) != null && t.universal && this.client.core.addLinkModeSupportedApp(l7.metadata.redirect.universal), this.client.events.emit("session_authenticate", { topic: s3, params: i4.params, id: i4.id, verifyContext: y5 });
        } catch (l7) {
          this.client.logger.error(l7);
          const h6 = i4.params.requester.publicKey, p5 = await this.client.core.crypto.generateKeyPair(), y5 = this.getAppLinkIfEnabled(i4.params.requester.metadata, a4), d4 = { type: ie, receiverPublicKey: h6, senderPublicKey: p5 };
          await this.sendError({ id: i4.id, topic: s3, error: l7, encodeOpts: d4, rpcOpts: N11.wc_sessionAuthenticate.autoReject, appLink: y5 });
        }
      }), c5(this, "addSessionRequestToSessionRequestQueue", (e2) => {
        this.sessionRequestQueue.queue.push(e2);
      }), c5(this, "cleanupAfterResponse", (e2) => {
        this.deletePendingSessionRequest(e2.response.id, { message: "fulfilled", code: 0 }), setTimeout(() => {
          this.sessionRequestQueue.state = K6.idle, this.processSessionRequestQueue();
        }, (0, import_time5.toMiliseconds)(this.requestQueueDelay));
      }), c5(this, "cleanupPendingSentRequestsForTopic", ({ topic: e2, error: t }) => {
        const s3 = this.client.core.history.pending;
        s3.length > 0 && s3.filter((i4) => i4.topic === e2 && i4.request.method === "wc_sessionRequest").forEach((i4) => {
          this.events.emit($i("session_request", i4.request.id), { error: t });
        });
      }), c5(this, "processSessionRequestQueue", () => {
        if (this.sessionRequestQueue.state === K6.active) {
          this.client.logger.info("session request queue is already active.");
          return;
        }
        const e2 = this.sessionRequestQueue.queue[0];
        if (!e2) {
          this.client.logger.info("session request queue is empty.");
          return;
        }
        try {
          this.emitSessionRequest(e2);
        } catch (t) {
          this.client.logger.error(t);
        }
      }), c5(this, "emitSessionRequest", (e2) => {
        if (this.emittedSessionRequests.has(e2.id)) {
          this.client.logger.warn({ id: e2.id }, `Skipping emitting \`session_request\` event for duplicate request. id: ${e2.id}`);
          return;
        }
        this.sessionRequestQueue.state = K6.active, this.emittedSessionRequests.add(e2.id), this.client.events.emit("session_request", e2);
      }), c5(this, "onPairingCreated", (e2) => {
        if (e2.methods && this.expectedPairingMethodMap.set(e2.topic, e2.methods), e2.active) return;
        const t = this.client.proposal.getAll().find((s3) => s3.pairingTopic === e2.topic);
        t && this.onSessionProposeRequest({ topic: e2.topic, payload: formatJsonRpcRequest("wc_sessionPropose", b4(E3({}, t), { requiredNamespaces: t.requiredNamespaces, optionalNamespaces: t.optionalNamespaces, relays: t.relays, proposer: t.proposer, sessionProperties: t.sessionProperties, scopedProperties: t.scopedProperties }), t.id), attestation: t.attestation, encryptedId: t.encryptedId });
      }), c5(this, "isValidConnect", async (e2) => {
        if (!ou(e2)) {
          const { message: l7 } = Bt2("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(e2)}`);
          throw new Error(l7);
        }
        const { pairingTopic: t, requiredNamespaces: s3, optionalNamespaces: i4, sessionProperties: r3, scopedProperties: n5, relays: a4 } = e2;
        if (Dt2(t) || await this.isValidPairingTopic(t), !nu(a4, true)) {
          const { message: l7 } = Bt2("MISSING_OR_INVALID", `connect() relays: ${a4}`);
          throw new Error(l7);
        }
        if (s3 && !Dt2(s3) && Ye2(s3) !== 0) {
          const l7 = "requiredNamespaces are deprecated and are automatically assigned to optionalNamespaces";
          ["fatal", "error", "silent"].includes(this.client.logger.level) ? console.warn(l7) : this.client.logger.warn(l7), this.validateNamespaces(s3, "requiredNamespaces");
        }
        if (i4 && !Dt2(i4) && Ye2(i4) !== 0 && this.validateNamespaces(i4, "optionalNamespaces"), r3 && !Dt2(r3) && this.validateSessionProps(r3, "sessionProperties"), n5 && !Dt2(n5)) {
          this.validateSessionProps(n5, "scopedProperties");
          const l7 = Object.keys(s3 || {}).concat(Object.keys(i4 || {}));
          if (!Object.keys(n5).every((h6) => l7.includes(h6.split(":")[0]))) throw new Error(`Scoped properties must be a subset of required/optional namespaces, received: ${JSON.stringify(n5)}, required/optional namespaces: ${JSON.stringify(l7)}`);
        }
      }), c5(this, "validateNamespaces", (e2, t) => {
        const s3 = eu(e2, "connect()", t);
        if (s3) throw new Error(s3.message);
      }), c5(this, "isValidApprove", async (e2) => {
        if (!ou(e2)) throw new Error(Bt2("MISSING_OR_INVALID", `approve() params: ${e2}`).message);
        const { id: t, namespaces: s3, relayProtocol: i4, sessionProperties: r3, scopedProperties: n5 } = e2;
        this.checkRecentlyDeleted(t), await this.isValidProposalId(t);
        const a4 = this.client.proposal.get(t), l7 = Ns(s3, "approve()");
        if (l7) throw new Error(l7.message);
        const h6 = _s(a4.requiredNamespaces, s3, "approve()");
        if (h6) throw new Error(h6.message);
        if (!ft2(i4, true)) {
          const { message: p5 } = Bt2("MISSING_OR_INVALID", `approve() relayProtocol: ${i4}`);
          throw new Error(p5);
        }
        if (r3 && !Dt2(r3) && this.validateSessionProps(r3, "sessionProperties"), n5 && !Dt2(n5)) {
          this.validateSessionProps(n5, "scopedProperties");
          const p5 = new Set(Object.keys(s3));
          if (!Object.keys(n5).every((y5) => p5.has(y5.split(":")[0]))) throw new Error(`Scoped properties must be a subset of approved namespaces, received: ${JSON.stringify(n5)}, approved namespaces: ${Array.from(p5).join(", ")}`);
        }
      }), c5(this, "isValidReject", async (e2) => {
        if (!ou(e2)) {
          const { message: i4 } = Bt2("MISSING_OR_INVALID", `reject() params: ${e2}`);
          throw new Error(i4);
        }
        const { id: t, reason: s3 } = e2;
        if (this.checkRecentlyDeleted(t), await this.isValidProposalId(t), !su(s3)) {
          const { message: i4 } = Bt2("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(s3)}`);
          throw new Error(i4);
        }
      }), c5(this, "isValidSessionSettleRequest", (e2) => {
        if (!ou(e2)) {
          const { message: l7 } = Bt2("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${e2}`);
          throw new Error(l7);
        }
        const { relay: t, controller: s3, namespaces: i4, expiry: r3 } = e2;
        if (!Us(t)) {
          const { message: l7 } = Bt2("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
          throw new Error(l7);
        }
        const n5 = tu(s3, "onSessionSettleRequest()");
        if (n5) throw new Error(n5.message);
        const a4 = Ns(i4, "onSessionSettleRequest()");
        if (a4) throw new Error(a4.message);
        if (Ri(r3)) {
          const { message: l7 } = Bt2("EXPIRED", "onSessionSettleRequest()");
          throw new Error(l7);
        }
      }), c5(this, "isValidUpdate", async (e2) => {
        if (!ou(e2)) {
          const { message: a4 } = Bt2("MISSING_OR_INVALID", `update() params: ${e2}`);
          throw new Error(a4);
        }
        const { topic: t, namespaces: s3 } = e2;
        this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
        const i4 = this.client.session.get(t), r3 = Ns(s3, "update()");
        if (r3) throw new Error(r3.message);
        const n5 = _s(i4.requiredNamespaces, s3, "update()");
        if (n5) throw new Error(n5.message);
      }), c5(this, "isValidExtend", async (e2) => {
        if (!ou(e2)) {
          const { message: s3 } = Bt2("MISSING_OR_INVALID", `extend() params: ${e2}`);
          throw new Error(s3);
        }
        const { topic: t } = e2;
        this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
      }), c5(this, "isValidRequest", async (e2) => {
        if (!ou(e2)) {
          const { message: a4 } = Bt2("MISSING_OR_INVALID", `request() params: ${e2}`);
          throw new Error(a4);
        }
        const { topic: t, request: s3, chainId: i4, expiry: r3 } = e2;
        this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
        const { namespaces: n5 } = this.client.session.get(t);
        if (!au(n5, i4)) {
          const { message: a4 } = Bt2("MISSING_OR_INVALID", `request() chainId: ${i4}`);
          throw new Error(a4);
        }
        if (!iu(s3)) {
          const { message: a4 } = Bt2("MISSING_OR_INVALID", `request() ${JSON.stringify(s3)}`);
          throw new Error(a4);
        }
        if (!uu(n5, i4, s3.method)) {
          const { message: a4 } = Bt2("MISSING_OR_INVALID", `request() method: ${s3.method}`);
          throw new Error(a4);
        }
        this.validateRequestExpiry(r3);
      }), c5(this, "isValidRespond", async (e2) => {
        var t;
        if (!ou(e2)) {
          const { message: n5 } = Bt2("MISSING_OR_INVALID", `respond() params: ${e2}`);
          throw new Error(n5);
        }
        const { topic: s3, response: i4 } = e2;
        try {
          await this.isValidSessionTopic(s3);
        } catch (n5) {
          throw (t = e2?.response) != null && t.id && this.cleanupAfterResponse(e2), n5;
        }
        if (!cu(i4)) {
          const { message: n5 } = Bt2("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(i4)}`);
          throw new Error(n5);
        }
        const r3 = this.client.pendingRequest.get(i4.id);
        if (r3.topic !== s3) {
          const { message: n5 } = Bt2("MISMATCHED_TOPIC", `Request response topic mismatch. reqId: ${i4.id}, expected topic: ${r3.topic}, received topic: ${s3}`);
          throw new Error(n5);
        }
      }), c5(this, "isValidPing", async (e2) => {
        if (!ou(e2)) {
          const { message: s3 } = Bt2("MISSING_OR_INVALID", `ping() params: ${e2}`);
          throw new Error(s3);
        }
        const { topic: t } = e2;
        await this.isValidSessionOrPairingTopic(t);
      }), c5(this, "isValidEmit", async (e2) => {
        if (!ou(e2)) {
          const { message: n5 } = Bt2("MISSING_OR_INVALID", `emit() params: ${e2}`);
          throw new Error(n5);
        }
        const { topic: t, event: s3, chainId: i4 } = e2;
        await this.isValidSessionTopic(t);
        const { namespaces: r3 } = this.client.session.get(t);
        if (!au(r3, i4)) {
          const { message: n5 } = Bt2("MISSING_OR_INVALID", `emit() chainId: ${i4}`);
          throw new Error(n5);
        }
        if (!fu(s3)) {
          const { message: n5 } = Bt2("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(s3)}`);
          throw new Error(n5);
        }
        if (!lu(r3, i4, s3.name)) {
          const { message: n5 } = Bt2("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(s3)}`);
          throw new Error(n5);
        }
      }), c5(this, "isValidDisconnect", async (e2) => {
        if (!ou(e2)) {
          const { message: s3 } = Bt2("MISSING_OR_INVALID", `disconnect() params: ${e2}`);
          throw new Error(s3);
        }
        const { topic: t } = e2;
        await this.isValidSessionOrPairingTopic(t);
      }), c5(this, "isValidAuthenticate", (e2) => {
        const { chains: t, uri: s3, domain: i4, nonce: r3 } = e2;
        if (!Array.isArray(t) || t.length === 0) throw new Error("chains is required and must be a non-empty array");
        if (!ft2(s3, false)) throw new Error("uri is required parameter");
        if (!ft2(i4, false)) throw new Error("domain is required parameter");
        if (!ft2(r3, false)) throw new Error("nonce is required parameter");
        if ([...new Set(t.map((a4) => Je2(a4).namespace))].length > 1) throw new Error("Multi-namespace requests are not supported. Please request single namespace only.");
        const { namespace: n5 } = Je2(t[0]);
        if (n5 !== "eip155") throw new Error("Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains.");
      }), c5(this, "getVerifyContext", async (e2) => {
        const { attestationId: t, hash: s3, encryptedId: i4, metadata: r3, transportType: n5 } = e2, a4 = { verified: { verifyUrl: r3.verifyUrl || be3, validation: "UNKNOWN", origin: r3.url || "" } };
        try {
          if (n5 === ee2.link_mode) {
            const h6 = this.getAppLinkIfEnabled(r3, n5);
            return a4.verified.validation = h6 && new URL(h6).origin === new URL(r3.url).origin ? "VALID" : "INVALID", a4;
          }
          const l7 = await this.client.core.verify.resolve({ attestationId: t, hash: s3, encryptedId: i4, verifyUrl: r3.verifyUrl });
          l7 && (a4.verified.origin = l7.origin, a4.verified.isScam = l7.isScam, a4.verified.validation = l7.origin === new URL(r3.url).origin ? "VALID" : "INVALID");
        } catch (l7) {
          this.client.logger.warn(l7);
        }
        return this.client.logger.debug(`Verify context: ${JSON.stringify(a4)}`), a4;
      }), c5(this, "validateSessionProps", (e2, t) => {
        Object.values(e2).forEach((s3, i4) => {
          if (s3 == null) {
            const { message: r3 } = Bt2("MISSING_OR_INVALID", `${t} must contain an existing value for each key. Received: ${s3} for key ${Object.keys(e2)[i4]}`);
            throw new Error(r3);
          }
        });
      }), c5(this, "getPendingAuthRequest", (e2) => {
        const t = this.client.auth.requests.get(e2);
        return typeof t == "object" ? t : void 0;
      }), c5(this, "addToRecentlyDeleted", (e2, t) => {
        if (this.recentlyDeletedMap.set(e2, t), this.recentlyDeletedMap.size >= this.recentlyDeletedLimit) {
          let s3 = 0;
          const i4 = this.recentlyDeletedLimit / 2;
          for (const r3 of this.recentlyDeletedMap.keys()) {
            if (s3++ >= i4) break;
            this.recentlyDeletedMap.delete(r3);
          }
        }
      }), c5(this, "checkRecentlyDeleted", (e2) => {
        const t = this.recentlyDeletedMap.get(e2);
        if (t) {
          const { message: s3 } = Bt2("MISSING_OR_INVALID", `Record was recently deleted - ${t}: ${e2}`);
          throw new Error(s3);
        }
      }), c5(this, "isLinkModeEnabled", (e2, t) => {
        var s3, i4, r3, n5, a4, l7, h6, p5, y5;
        return !e2 || t !== ee2.link_mode ? false : ((i4 = (s3 = this.client.metadata) == null ? void 0 : s3.redirect) == null ? void 0 : i4.linkMode) === true && ((n5 = (r3 = this.client.metadata) == null ? void 0 : r3.redirect) == null ? void 0 : n5.universal) !== void 0 && ((l7 = (a4 = this.client.metadata) == null ? void 0 : a4.redirect) == null ? void 0 : l7.universal) !== "" && ((h6 = e2?.redirect) == null ? void 0 : h6.universal) !== void 0 && ((p5 = e2?.redirect) == null ? void 0 : p5.universal) !== "" && ((y5 = e2?.redirect) == null ? void 0 : y5.linkMode) === true && this.client.core.linkModeSupportedApps.includes(e2.redirect.universal) && typeof (globalThis == null ? void 0 : globalThis.Linking) < "u";
      }), c5(this, "getAppLinkIfEnabled", (e2, t) => {
        var s3;
        return this.isLinkModeEnabled(e2, t) ? (s3 = e2?.redirect) == null ? void 0 : s3.universal : void 0;
      }), c5(this, "handleLinkModeMessage", ({ url: e2 }) => {
        if (!e2 || !e2.includes("wc_ev") || !e2.includes("topic")) return;
        const t = ji(e2, "topic") || "", s3 = decodeURIComponent(ji(e2, "wc_ev") || ""), i4 = this.client.session.keys.includes(t);
        i4 && this.client.session.update(t, { transportType: ee2.link_mode }), this.client.core.dispatchEnvelope({ topic: t, message: s3, sessionExists: i4 });
      }), c5(this, "registerLinkModeListeners", async () => {
        var e2;
        if (ki() || It2() && (e2 = this.client.metadata.redirect) != null && e2.linkMode) {
          const t = globalThis == null ? void 0 : globalThis.Linking;
          if (typeof t < "u") {
            t.addEventListener("url", this.handleLinkModeMessage, this.client.name);
            const s3 = await t.getInitialURL();
            s3 && setTimeout(() => {
              this.handleLinkModeMessage({ url: s3 });
            }, 50);
          }
        }
      }), c5(this, "getTVFApproveParams", (e2) => {
        try {
          const t = gs(e2.namespaces), s3 = qa(e2.namespaces), i4 = Fa(e2.namespaces), r3 = e2.sessionProperties, n5 = e2.scopedProperties;
          return { approvedChains: t, approvedMethods: s3, approvedEvents: i4, sessionProperties: r3, scopedProperties: n5 };
        } catch (t) {
          return this.client.logger.warn(t, "Error getting TVF approve params"), {};
        }
      }), c5(this, "getTVFParams", (e2, t, s3) => {
        var i4, r3, n5;
        if (!((i4 = t.request) != null && i4.method)) return {};
        const a4 = { correlationId: e2, rpcMethods: [t.request.method], chainId: t.chainId };
        try {
          const l7 = this.extractTxHashesFromResult(t.request, s3);
          a4.txHashes = l7, a4.contractAddresses = this.isValidContractData(t.request.params) ? [(n5 = (r3 = t.request.params) == null ? void 0 : r3[0]) == null ? void 0 : n5.to] : [];
        } catch (l7) {
          this.client.logger.warn(l7, "Error getting TVF params");
        }
        return a4;
      }), c5(this, "isValidContractData", (e2) => {
        var t;
        if (!e2) return false;
        try {
          const s3 = e2?.data || ((t = e2?.[0]) == null ? void 0 : t.data);
          if (!s3.startsWith("0x")) return false;
          const i4 = s3.slice(2);
          return /^[0-9a-fA-F]*$/.test(i4) ? i4.length % 2 === 0 : false;
        } catch {
        }
        return false;
      }), c5(this, "extractTxHashesFromResult", (e2, t) => {
        var s3;
        try {
          if (!t) return [];
          const i4 = e2.method, r3 = yt3[i4];
          if (i4 === "sui_signTransaction") return [Uc(t.transactionBytes)];
          if (i4 === "near_signTransaction") return [_c(t)];
          if (i4 === "near_signTransactions") return t.map((a4) => _c(a4));
          if (i4 === "xrpl_signTransactionFor" || i4 === "xrpl_signTransaction") return [(s3 = t.tx_json) == null ? void 0 : s3.hash];
          if (i4 === "polkadot_signTransaction") return [Bu({ transaction: e2.params.transactionPayload, signature: t.signature })];
          if (i4 === "algo_signTxn") return Be2(t) ? t.map((a4) => Rc(a4)) : [Rc(t)];
          if (i4 === "cosmos_signDirect") return [$c(t)];
          if (i4 === "wallet_sendCalls") return Tc(t);
          if (typeof t == "string") return [t];
          const n5 = t[r3.key];
          if (Be2(n5)) return i4 === "solana_signAllTransactions" ? n5.map((a4) => Nc(a4)) : n5;
          if (typeof n5 == "string") return [n5];
        } catch (i4) {
          this.client.logger.warn(i4, "Error extracting tx hashes from result");
        }
        return [];
      });
    }
    async processPendingMessageEvents() {
      try {
        const o5 = this.client.session.keys, e2 = this.client.core.relayer.messages.getWithoutAck(o5);
        for (const [t, s3] of Object.entries(e2)) for (const i4 of s3) try {
          await this.onProviderMessageEvent({ topic: t, message: i4, publishedAt: Date.now() });
        } catch {
          this.client.logger.warn(`Error processing pending message event for topic: ${t}, message: ${i4}`);
        }
      } catch (o5) {
        this.client.logger.warn(o5, "processPendingMessageEvents failed");
      }
    }
    isInitialized() {
      if (!this.initialized) {
        const { message: o5 } = Bt2("NOT_INITIALIZED", this.name);
        throw new Error(o5);
      }
    }
    async confirmOnlineStateOrThrow() {
      await this.client.core.relayer.confirmOnlineStateOrThrow();
    }
    registerRelayerEvents() {
      this.client.core.relayer.on(C3.message, (o5) => {
        this.onProviderMessageEvent(o5);
      });
    }
    async onRelayMessage(o5) {
      const { topic: e2, message: t, attestation: s3, transportType: i4 } = o5, { publicKey: r3 } = this.client.auth.authKeys.keys.includes(_e5) ? this.client.auth.authKeys.get(_e5) : { responseTopic: void 0, publicKey: void 0 };
      try {
        const n5 = await this.client.core.crypto.decode(e2, t, { receiverPublicKey: r3, encoding: i4 === ee2.link_mode ? Ge2 : oe });
        isJsonRpcRequest(n5) ? (this.client.core.history.set(e2, n5), await this.onRelayEventRequest({ topic: e2, payload: n5, attestation: s3, transportType: i4, encryptedId: ya(t) })) : isJsonRpcResponse(n5) ? (await this.client.core.history.resolve(n5), await this.onRelayEventResponse({ topic: e2, payload: n5, transportType: i4 }), this.client.core.history.delete(e2, n5.id)) : (this.client.logger.error(`onRelayMessage() -> unknown payload: ${JSON.stringify(n5)}`), await this.onRelayEventUnknownPayload({ topic: e2, payload: n5, transportType: i4 })), await this.client.core.relayer.messages.ack(e2, t);
      } catch (n5) {
        this.client.logger.error(`onRelayMessage() -> failed to process an inbound message: ${t}`), this.client.logger.error(n5);
      }
    }
    registerExpirerEvents() {
      this.client.core.expirer.on(q.expired, async (o5) => {
        const { topic: e2, id: t } = Ui(o5.target);
        if (t && this.client.pendingRequest.keys.includes(t)) return await this.deletePendingSessionRequest(t, Bt2("EXPIRED"), true);
        if (t && this.client.auth.requests.keys.includes(t)) return await this.deletePendingAuthRequest(t, Bt2("EXPIRED"), true);
        e2 ? this.client.session.keys.includes(e2) && (await this.deleteSession({ topic: e2, expirerHasDeleted: true }), this.client.events.emit("session_expire", { topic: e2 })) : t && (await this.deleteProposal(t, true), this.client.events.emit("proposal_expire", { id: t }));
      });
    }
    registerPairingEvents() {
      this.client.core.pairing.events.on(ae2.create, (o5) => this.onPairingCreated(o5)), this.client.core.pairing.events.on(ae2.delete, (o5) => {
        this.addToRecentlyDeleted(o5.topic, "pairing");
      });
    }
    isValidPairingTopic(o5) {
      if (!ft2(o5, false)) {
        const { message: e2 } = Bt2("MISSING_OR_INVALID", `pairing topic should be a string: ${o5}`);
        throw new Error(e2);
      }
      if (!this.client.core.pairing.pairings.keys.includes(o5)) {
        const { message: e2 } = Bt2("NO_MATCHING_KEY", `pairing topic doesn't exist: ${o5}`);
        throw new Error(e2);
      }
      if (Ri(this.client.core.pairing.pairings.get(o5).expiry)) {
        const { message: e2 } = Bt2("EXPIRED", `pairing topic: ${o5}`);
        throw new Error(e2);
      }
    }
    async isValidSessionTopic(o5) {
      if (!ft2(o5, false)) {
        const { message: e2 } = Bt2("MISSING_OR_INVALID", `session topic should be a string: ${o5}`);
        throw new Error(e2);
      }
      if (this.checkRecentlyDeleted(o5), !this.client.session.keys.includes(o5)) {
        const { message: e2 } = Bt2("NO_MATCHING_KEY", `session topic doesn't exist: ${o5}`);
        throw new Error(e2);
      }
      if (Ri(this.client.session.get(o5).expiry)) {
        await this.deleteSession({ topic: o5 });
        const { message: e2 } = Bt2("EXPIRED", `session topic: ${o5}`);
        throw new Error(e2);
      }
      if (!this.client.core.crypto.keychain.has(o5)) {
        const { message: e2 } = Bt2("MISSING_OR_INVALID", `session topic does not exist in keychain: ${o5}`);
        throw await this.deleteSession({ topic: o5 }), new Error(e2);
      }
    }
    async isValidSessionOrPairingTopic(o5) {
      if (this.checkRecentlyDeleted(o5), this.client.session.keys.includes(o5)) await this.isValidSessionTopic(o5);
      else if (this.client.core.pairing.pairings.keys.includes(o5)) this.isValidPairingTopic(o5);
      else if (ft2(o5, false)) {
        const { message: e2 } = Bt2("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${o5}`);
        throw new Error(e2);
      } else {
        const { message: e2 } = Bt2("MISSING_OR_INVALID", `session or pairing topic should be a string: ${o5}`);
        throw new Error(e2);
      }
    }
    async isValidProposalId(o5) {
      if (!ru(o5)) {
        const { message: e2 } = Bt2("MISSING_OR_INVALID", `proposal id should be a number: ${o5}`);
        throw new Error(e2);
      }
      if (!this.client.proposal.keys.includes(o5)) {
        const { message: e2 } = Bt2("NO_MATCHING_KEY", `proposal id doesn't exist: ${o5}`);
        throw new Error(e2);
      }
      if (Ri(this.client.proposal.get(o5).expiryTimestamp)) {
        await this.deleteProposal(o5);
        const { message: e2 } = Bt2("EXPIRED", `proposal id: ${o5}`);
        throw new Error(e2);
      }
    }
    validateRequestExpiry(o5) {
      if (o5 && !pu(o5, Te3)) {
        const { message: e2 } = Bt2("MISSING_OR_INVALID", `request() expiry: ${o5}. Expiry must be a number (in seconds) between ${Te3.min} and ${Te3.max}`);
        throw new Error(e2);
      }
    }
  };
  __name(_Ds, "Ds");
  var Ds = _Ds;
  var _Ls = class _Ls extends ji2 {
    constructor(o5, e2) {
      super(o5, e2, dt3, Re4), this.core = o5, this.logger = e2;
    }
  };
  __name(_Ls, "Ls");
  var Ls2 = _Ls;
  var _It = class _It extends ji2 {
    constructor(o5, e2) {
      super(o5, e2, ut3, Re4), this.core = o5, this.logger = e2;
    }
  };
  __name(_It, "It");
  var It4 = _It;
  var _Ms = class _Ms extends ji2 {
    constructor(o5, e2) {
      super(o5, e2, mt2, Re4, (t) => t.id), this.core = o5, this.logger = e2;
    }
  };
  __name(_Ms, "Ms");
  var Ms2 = _Ms;
  var _$s = class _$s extends ji2 {
    constructor(o5, e2) {
      super(o5, e2, St4, we3, () => _e5), this.core = o5, this.logger = e2;
    }
  };
  __name(_$s, "$s");
  var $s2 = _$s;
  var _Ks = class _Ks extends ji2 {
    constructor(o5, e2) {
      super(o5, e2, Et4, we3), this.core = o5, this.logger = e2;
    }
  };
  __name(_Ks, "Ks");
  var Ks = _Ks;
  var _Us = class _Us extends ji2 {
    constructor(o5, e2) {
      super(o5, e2, ft3, we3, (t) => t.id), this.core = o5, this.logger = e2;
    }
  };
  __name(_Us, "Us");
  var Us2 = _Us;
  var Gs = Object.defineProperty;
  var js2 = /* @__PURE__ */ __name((S5, o5, e2) => o5 in S5 ? Gs(S5, o5, { enumerable: true, configurable: true, writable: true, value: e2 }) : S5[o5] = e2, "js");
  var Ge4 = /* @__PURE__ */ __name((S5, o5, e2) => js2(S5, typeof o5 != "symbol" ? o5 + "" : o5, e2), "Ge");
  var _Fs = class _Fs {
    constructor(o5, e2) {
      this.core = o5, this.logger = e2, Ge4(this, "authKeys"), Ge4(this, "pairingTopics"), Ge4(this, "requests"), this.authKeys = new $s2(this.core, this.logger), this.pairingTopics = new Ks(this.core, this.logger), this.requests = new Us2(this.core, this.logger);
    }
    async init() {
      await this.authKeys.init(), await this.pairingTopics.init(), await this.requests.init();
    }
  };
  __name(_Fs, "Fs");
  var Fs = _Fs;
  var Hs2 = Object.defineProperty;
  var Qs2 = /* @__PURE__ */ __name((S5, o5, e2) => o5 in S5 ? Hs2(S5, o5, { enumerable: true, configurable: true, writable: true, value: e2 }) : S5[o5] = e2, "Qs");
  var _3 = /* @__PURE__ */ __name((S5, o5, e2) => Qs2(S5, typeof o5 != "symbol" ? o5 + "" : o5, e2), "_");
  var _qe = class _qe extends J {
    constructor(o5) {
      super(o5), _3(this, "protocol", De4), _3(this, "version", Le3), _3(this, "name", Ie3.name), _3(this, "metadata"), _3(this, "core"), _3(this, "logger"), _3(this, "events", new import_events8.EventEmitter()), _3(this, "engine"), _3(this, "session"), _3(this, "proposal"), _3(this, "pendingRequest"), _3(this, "auth"), _3(this, "signConfig"), _3(this, "on", (t, s3) => this.events.on(t, s3)), _3(this, "once", (t, s3) => this.events.once(t, s3)), _3(this, "off", (t, s3) => this.events.off(t, s3)), _3(this, "removeListener", (t, s3) => this.events.removeListener(t, s3)), _3(this, "removeAllListeners", (t) => this.events.removeAllListeners(t)), _3(this, "connect", async (t) => {
        try {
          return await this.engine.connect(t);
        } catch (s3) {
          throw this.logger.error(s3.message), s3;
        }
      }), _3(this, "pair", async (t) => {
        try {
          return await this.engine.pair(t);
        } catch (s3) {
          throw this.logger.error(s3.message), s3;
        }
      }), _3(this, "approve", async (t) => {
        try {
          return await this.engine.approve(t);
        } catch (s3) {
          throw this.logger.error(s3.message), s3;
        }
      }), _3(this, "reject", async (t) => {
        try {
          return await this.engine.reject(t);
        } catch (s3) {
          throw this.logger.error(s3.message), s3;
        }
      }), _3(this, "update", async (t) => {
        try {
          return await this.engine.update(t);
        } catch (s3) {
          throw this.logger.error(s3.message), s3;
        }
      }), _3(this, "extend", async (t) => {
        try {
          return await this.engine.extend(t);
        } catch (s3) {
          throw this.logger.error(s3.message), s3;
        }
      }), _3(this, "request", async (t) => {
        try {
          return await this.engine.request(t);
        } catch (s3) {
          throw this.logger.error(s3.message), s3;
        }
      }), _3(this, "respond", async (t) => {
        try {
          return await this.engine.respond(t);
        } catch (s3) {
          throw this.logger.error(s3.message), s3;
        }
      }), _3(this, "ping", async (t) => {
        try {
          return await this.engine.ping(t);
        } catch (s3) {
          throw this.logger.error(s3.message), s3;
        }
      }), _3(this, "emit", async (t) => {
        try {
          return await this.engine.emit(t);
        } catch (s3) {
          throw this.logger.error(s3.message), s3;
        }
      }), _3(this, "disconnect", async (t) => {
        try {
          return await this.engine.disconnect(t);
        } catch (s3) {
          throw this.logger.error(s3.message), s3;
        }
      }), _3(this, "find", (t) => {
        try {
          return this.engine.find(t);
        } catch (s3) {
          throw this.logger.error(s3.message), s3;
        }
      }), _3(this, "getPendingSessionRequests", () => {
        try {
          return this.engine.getPendingSessionRequests();
        } catch (t) {
          throw this.logger.error(t.message), t;
        }
      }), _3(this, "authenticate", async (t, s3) => {
        try {
          return await this.engine.authenticate(t, s3);
        } catch (i4) {
          throw this.logger.error(i4.message), i4;
        }
      }), _3(this, "formatAuthMessage", (t) => {
        try {
          return this.engine.formatAuthMessage(t);
        } catch (s3) {
          throw this.logger.error(s3.message), s3;
        }
      }), _3(this, "approveSessionAuthenticate", async (t) => {
        try {
          return await this.engine.approveSessionAuthenticate(t);
        } catch (s3) {
          throw this.logger.error(s3.message), s3;
        }
      }), _3(this, "rejectSessionAuthenticate", async (t) => {
        try {
          return await this.engine.rejectSessionAuthenticate(t);
        } catch (s3) {
          throw this.logger.error(s3.message), s3;
        }
      }), this.name = o5?.name || Ie3.name, this.metadata = pi(o5?.metadata), this.signConfig = o5?.signConfig;
      const e2 = Iu({ logger: o5?.logger || Ie3.logger, name: this.name });
      this.logger = e2, this.core = o5?.core || new ta2(o5), this.session = new It4(this.core, this.logger), this.proposal = new Ls2(this.core, this.logger), this.pendingRequest = new Ms2(this.core, this.logger), this.engine = new Ds(this), this.auth = new Fs(this.core, this.logger);
    }
    static async init(o5) {
      const e2 = new _qe(o5);
      return await e2.initialize(), e2;
    }
    get context() {
      return w(this.logger);
    }
    get pairing() {
      return this.core.pairing.pairings;
    }
    async initialize() {
      this.logger.trace("Initialized");
      try {
        await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.auth.init(), await this.engine.init(), this.logger.info("SignClient Initialization Success");
      } catch (o5) {
        throw this.logger.info("SignClient Initialization Failure"), this.logger.error(o5.message), o5;
      }
    }
  };
  __name(_qe, "qe");
  var qe4 = _qe;
  var zs = It4;
  var Ys2 = qe4;

  // node_modules/@reown/walletkit/dist/index.js
  var l6 = { exports: {} };
  var h5 = typeof Reflect == "object" ? Reflect : null;
  var y4 = h5 && typeof h5.apply == "function" ? h5.apply : function(t, e2, s3) {
    return Function.prototype.apply.call(t, e2, s3);
  };
  var f5;
  h5 && typeof h5.ownKeys == "function" ? f5 = h5.ownKeys : Object.getOwnPropertySymbols ? f5 = /* @__PURE__ */ __name(function(t) {
    return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
  }, "f") : f5 = /* @__PURE__ */ __name(function(t) {
    return Object.getOwnPropertyNames(t);
  }, "f");
  function K7(n5) {
    console && console.warn && console.warn(n5);
  }
  __name(K7, "K");
  var w3 = Number.isNaN || function(t) {
    return t !== t;
  };
  function o4() {
    o4.init.call(this);
  }
  __name(o4, "o");
  l6.exports = o4, l6.exports.once = F, o4.EventEmitter = o4, o4.prototype._events = void 0, o4.prototype._eventsCount = 0, o4.prototype._maxListeners = void 0;
  var L2 = 10;
  function p4(n5) {
    if (typeof n5 != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof n5);
  }
  __name(p4, "p");
  Object.defineProperty(o4, "defaultMaxListeners", { enumerable: true, get: /* @__PURE__ */ __name(function() {
    return L2;
  }, "get"), set: /* @__PURE__ */ __name(function(n5) {
    if (typeof n5 != "number" || n5 < 0 || w3(n5)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + n5 + ".");
    L2 = n5;
  }, "set") }), o4.init = function() {
    (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
  }, o4.prototype.setMaxListeners = function(t) {
    if (typeof t != "number" || t < 0 || w3(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
    return this._maxListeners = t, this;
  };
  function S4(n5) {
    return n5._maxListeners === void 0 ? o4.defaultMaxListeners : n5._maxListeners;
  }
  __name(S4, "S");
  o4.prototype.getMaxListeners = function() {
    return S4(this);
  }, o4.prototype.emit = function(t) {
    for (var e2 = [], s3 = 1; s3 < arguments.length; s3++) e2.push(arguments[s3]);
    var i4 = t === "error", a4 = this._events;
    if (a4 !== void 0) i4 = i4 && a4.error === void 0;
    else if (!i4) return false;
    if (i4) {
      var r3;
      if (e2.length > 0 && (r3 = e2[0]), r3 instanceof Error) throw r3;
      var c6 = new Error("Unhandled error." + (r3 ? " (" + r3.message + ")" : ""));
      throw c6.context = r3, c6;
    }
    var u2 = a4[t];
    if (u2 === void 0) return false;
    if (typeof u2 == "function") y4(u2, this, e2);
    else for (var d4 = u2.length, N12 = b5(u2, d4), s3 = 0; s3 < d4; ++s3) y4(N12[s3], this, e2);
    return true;
  };
  function _4(n5, t, e2, s3) {
    var i4, a4, r3;
    if (p4(e2), a4 = n5._events, a4 === void 0 ? (a4 = n5._events = /* @__PURE__ */ Object.create(null), n5._eventsCount = 0) : (a4.newListener !== void 0 && (n5.emit("newListener", t, e2.listener ? e2.listener : e2), a4 = n5._events), r3 = a4[t]), r3 === void 0) r3 = a4[t] = e2, ++n5._eventsCount;
    else if (typeof r3 == "function" ? r3 = a4[t] = s3 ? [e2, r3] : [r3, e2] : s3 ? r3.unshift(e2) : r3.push(e2), i4 = S4(n5), i4 > 0 && r3.length > i4 && !r3.warned) {
      r3.warned = true;
      var c6 = new Error("Possible EventEmitter memory leak detected. " + r3.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
      c6.name = "MaxListenersExceededWarning", c6.emitter = n5, c6.type = t, c6.count = r3.length, K7(c6);
    }
    return n5;
  }
  __name(_4, "_");
  o4.prototype.addListener = function(t, e2) {
    return _4(this, t, e2, false);
  }, o4.prototype.on = o4.prototype.addListener, o4.prototype.prependListener = function(t, e2) {
    return _4(this, t, e2, true);
  };
  function k5() {
    if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = true, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
  }
  __name(k5, "k");
  function C4(n5, t, e2) {
    var s3 = { fired: false, wrapFn: void 0, target: n5, type: t, listener: e2 }, i4 = k5.bind(s3);
    return i4.listener = e2, s3.wrapFn = i4, i4;
  }
  __name(C4, "C");
  o4.prototype.once = function(t, e2) {
    return p4(e2), this.on(t, C4(this, t, e2)), this;
  }, o4.prototype.prependOnceListener = function(t, e2) {
    return p4(e2), this.prependListener(t, C4(this, t, e2)), this;
  }, o4.prototype.removeListener = function(t, e2) {
    var s3, i4, a4, r3, c6;
    if (p4(e2), i4 = this._events, i4 === void 0) return this;
    if (s3 = i4[t], s3 === void 0) return this;
    if (s3 === e2 || s3.listener === e2) --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete i4[t], i4.removeListener && this.emit("removeListener", t, s3.listener || e2));
    else if (typeof s3 != "function") {
      for (a4 = -1, r3 = s3.length - 1; r3 >= 0; r3--) if (s3[r3] === e2 || s3[r3].listener === e2) {
        c6 = s3[r3].listener, a4 = r3;
        break;
      }
      if (a4 < 0) return this;
      a4 === 0 ? s3.shift() : W4(s3, a4), s3.length === 1 && (i4[t] = s3[0]), i4.removeListener !== void 0 && this.emit("removeListener", t, c6 || e2);
    }
    return this;
  }, o4.prototype.off = o4.prototype.removeListener, o4.prototype.removeAllListeners = function(t) {
    var e2, s3, i4;
    if (s3 = this._events, s3 === void 0) return this;
    if (s3.removeListener === void 0) return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : s3[t] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete s3[t]), this;
    if (arguments.length === 0) {
      var a4 = Object.keys(s3), r3;
      for (i4 = 0; i4 < a4.length; ++i4) r3 = a4[i4], r3 !== "removeListener" && this.removeAllListeners(r3);
      return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
    }
    if (e2 = s3[t], typeof e2 == "function") this.removeListener(t, e2);
    else if (e2 !== void 0) for (i4 = e2.length - 1; i4 >= 0; i4--) this.removeListener(t, e2[i4]);
    return this;
  };
  function E4(n5, t, e2) {
    var s3 = n5._events;
    if (s3 === void 0) return [];
    var i4 = s3[t];
    return i4 === void 0 ? [] : typeof i4 == "function" ? e2 ? [i4.listener || i4] : [i4] : e2 ? D3(i4) : b5(i4, i4.length);
  }
  __name(E4, "E");
  o4.prototype.listeners = function(t) {
    return E4(this, t, true);
  }, o4.prototype.rawListeners = function(t) {
    return E4(this, t, false);
  }, o4.listenerCount = function(n5, t) {
    return typeof n5.listenerCount == "function" ? n5.listenerCount(t) : O5.call(n5, t);
  }, o4.prototype.listenerCount = O5;
  function O5(n5) {
    var t = this._events;
    if (t !== void 0) {
      var e2 = t[n5];
      if (typeof e2 == "function") return 1;
      if (e2 !== void 0) return e2.length;
    }
    return 0;
  }
  __name(O5, "O");
  o4.prototype.eventNames = function() {
    return this._eventsCount > 0 ? f5(this._events) : [];
  };
  function b5(n5, t) {
    for (var e2 = new Array(t), s3 = 0; s3 < t; ++s3) e2[s3] = n5[s3];
    return e2;
  }
  __name(b5, "b");
  function W4(n5, t) {
    for (; t + 1 < n5.length; t++) n5[t] = n5[t + 1];
    n5.pop();
  }
  __name(W4, "W");
  function D3(n5) {
    for (var t = new Array(n5.length), e2 = 0; e2 < t.length; ++e2) t[e2] = n5[e2].listener || n5[e2];
    return t;
  }
  __name(D3, "D");
  function F(n5, t) {
    return new Promise(function(e2, s3) {
      function i4(r3) {
        n5.removeListener(t, a4), s3(r3);
      }
      __name(i4, "i");
      function a4() {
        typeof n5.removeListener == "function" && n5.removeListener("error", i4), e2([].slice.call(arguments));
      }
      __name(a4, "a");
      x5(n5, t, a4, { once: true }), t !== "error" && z5(n5, i4, { once: true });
    });
  }
  __name(F, "F");
  function z5(n5, t, e2) {
    typeof n5.on == "function" && x5(n5, "error", t, e2);
  }
  __name(z5, "z");
  function x5(n5, t, e2, s3) {
    if (typeof n5.on == "function") s3.once ? n5.once(t, e2) : n5.on(t, e2);
    else if (typeof n5.addEventListener == "function") n5.addEventListener(t, /* @__PURE__ */ __name(function i4(a4) {
      s3.once && n5.removeEventListener(t, i4), e2(a4);
    }, "i"));
    else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof n5);
  }
  __name(x5, "x");
  var R3 = "wc";
  var g3 = "WalletKit";
  var X4 = `${R3}@2:${g3}:`;
  var _H = class _H extends l6.exports {
    constructor() {
      super();
    }
  };
  __name(_H, "H");
  var H2 = _H;
  var _P2 = class _P2 {
    constructor(t) {
      this.opts = t;
    }
  };
  __name(_P2, "P");
  var P5 = _P2;
  var _A = class _A {
    constructor(t) {
      this.client = t;
    }
  };
  __name(_A, "A");
  var A3 = _A;
  var Q4 = Object.defineProperty;
  var V4 = Object.defineProperties;
  var B2 = Object.getOwnPropertyDescriptors;
  var j6 = Object.getOwnPropertySymbols;
  var J5 = Object.prototype.hasOwnProperty;
  var Y3 = Object.prototype.propertyIsEnumerable;
  var T3 = /* @__PURE__ */ __name((n5, t, e2) => t in n5 ? Q4(n5, t, { enumerable: true, configurable: true, writable: true, value: e2 }) : n5[t] = e2, "T");
  var Z = /* @__PURE__ */ __name((n5, t) => {
    for (var e2 in t || (t = {})) J5.call(t, e2) && T3(n5, e2, t[e2]);
    if (j6) for (var e2 of j6(t)) Y3.call(t, e2) && T3(n5, e2, t[e2]);
    return n5;
  }, "Z");
  var ee3 = /* @__PURE__ */ __name((n5, t) => V4(n5, B2(t)), "ee");
  var _te = class _te extends A3 {
    constructor(t) {
      super(t), this.init = async () => {
        this.signClient = await Ys2.init({ core: this.client.core, metadata: this.client.metadata, signConfig: this.client.signConfig }), this.signClient.core.eventClient.init().catch((e2) => {
          this.client.logger.warn(e2);
        });
      }, this.pair = async (e2) => {
        await this.client.core.pairing.pair(e2);
      }, this.approveSession = async (e2) => {
        const { topic: s3, acknowledged: i4 } = await this.signClient.approve(ee3(Z({}, e2), { id: e2.id, namespaces: e2.namespaces, sessionProperties: e2.sessionProperties, scopedProperties: e2.scopedProperties, sessionConfig: e2.sessionConfig, proposalRequestsResponses: e2?.proposalRequestsResponses }));
        return await i4(), this.signClient.session.get(s3);
      }, this.rejectSession = async (e2) => await this.signClient.reject(e2), this.updateSession = async (e2) => await this.signClient.update(e2), this.extendSession = async (e2) => await this.signClient.extend(e2), this.respondSessionRequest = async (e2) => await this.signClient.respond(e2), this.disconnectSession = async (e2) => await this.signClient.disconnect(e2), this.emitSessionEvent = async (e2) => await this.signClient.emit(e2), this.getActiveSessions = () => this.signClient.session.getAll().reduce((e2, s3) => (e2[s3.topic] = s3, e2), {}), this.getPendingSessionProposals = () => this.signClient.proposal.getAll(), this.getPendingSessionRequests = () => this.signClient.getPendingSessionRequests(), this.approveSessionAuthenticate = async (e2) => await this.signClient.approveSessionAuthenticate(e2), this.rejectSessionAuthenticate = async (e2) => await this.signClient.rejectSessionAuthenticate(e2), this.formatAuthMessage = (e2) => this.signClient.formatAuthMessage(e2), this.registerDeviceToken = (e2) => this.client.core.echoClient.registerDeviceToken(e2), this.on = (e2, s3) => (this.setEvent(e2, "off"), this.setEvent(e2, "on"), this.client.events.on(e2, s3)), this.once = (e2, s3) => (this.setEvent(e2, "off"), this.setEvent(e2, "once"), this.client.events.once(e2, s3)), this.off = (e2, s3) => (this.setEvent(e2, "off"), this.client.events.off(e2, s3)), this.removeListener = (e2, s3) => (this.setEvent(e2, "removeListener"), this.client.events.removeListener(e2, s3)), this.onSessionRequest = (e2) => {
        this.client.events.emit("session_request", e2);
      }, this.onSessionProposal = (e2) => {
        this.client.events.emit("session_proposal", e2);
      }, this.onSessionDelete = (e2) => {
        this.client.events.emit("session_delete", e2);
      }, this.onProposalExpire = (e2) => {
        this.client.events.emit("proposal_expire", e2);
      }, this.onSessionRequestExpire = (e2) => {
        this.client.events.emit("session_request_expire", e2);
      }, this.onSessionRequestAuthenticate = (e2) => {
        this.client.events.emit("session_authenticate", e2);
      }, this.setEvent = (e2, s3) => {
        switch (e2) {
          case "session_request":
            this.signClient.events[s3]("session_request", this.onSessionRequest);
            break;
          case "session_proposal":
            this.signClient.events[s3]("session_proposal", this.onSessionProposal);
            break;
          case "session_delete":
            this.signClient.events[s3]("session_delete", this.onSessionDelete);
            break;
          case "proposal_expire":
            this.signClient.events[s3]("proposal_expire", this.onProposalExpire);
            break;
          case "session_request_expire":
            this.signClient.events[s3]("session_request_expire", this.onSessionRequestExpire);
            break;
          case "session_authenticate":
            this.signClient.events[s3]("session_authenticate", this.onSessionRequestAuthenticate);
            break;
        }
      }, this.signClient = {};
    }
  };
  __name(_te, "te");
  var te3 = _te;
  var ne2 = { decryptMessage: /* @__PURE__ */ __name(async (n5) => {
    const t = { core: new ta2({ storageOptions: n5.storageOptions, storage: n5.storage }) };
    await t.core.crypto.init();
    const e2 = t.core.crypto.decode(n5.topic, n5.encryptedMessage);
    return t.core = null, e2;
  }, "decryptMessage"), getMetadata: /* @__PURE__ */ __name(async (n5) => {
    const t = { core: new ta2({ storageOptions: n5.storageOptions, storage: n5.storage }), sessionStore: null };
    t.sessionStore = new zs(t.core, t.core.logger), await t.sessionStore.init();
    const e2 = t.sessionStore.get(n5.topic), s3 = e2?.peer.metadata;
    return t.core = null, t.sessionStore = null, s3;
  }, "getMetadata") };
  var _a2;
  var q2 = (_a2 = class extends P5 {
    constructor(n5) {
      super(n5), this.events = new l6.exports(), this.on = (t, e2) => this.engine.on(t, e2), this.once = (t, e2) => this.engine.once(t, e2), this.off = (t, e2) => this.engine.off(t, e2), this.removeListener = (t, e2) => this.engine.removeListener(t, e2), this.pair = async (t) => {
        try {
          return await this.engine.pair(t);
        } catch (e2) {
          throw this.logger.error(e2.message), e2;
        }
      }, this.approveSession = async (t) => {
        try {
          return await this.engine.approveSession(t);
        } catch (e2) {
          throw this.logger.error(e2.message), e2;
        }
      }, this.rejectSession = async (t) => {
        try {
          return await this.engine.rejectSession(t);
        } catch (e2) {
          throw this.logger.error(e2.message), e2;
        }
      }, this.updateSession = async (t) => {
        try {
          return await this.engine.updateSession(t);
        } catch (e2) {
          throw this.logger.error(e2.message), e2;
        }
      }, this.extendSession = async (t) => {
        try {
          return await this.engine.extendSession(t);
        } catch (e2) {
          throw this.logger.error(e2.message), e2;
        }
      }, this.respondSessionRequest = async (t) => {
        try {
          return await this.engine.respondSessionRequest(t);
        } catch (e2) {
          throw this.logger.error(e2.message), e2;
        }
      }, this.disconnectSession = async (t) => {
        try {
          return await this.engine.disconnectSession(t);
        } catch (e2) {
          throw this.logger.error(e2.message), e2;
        }
      }, this.emitSessionEvent = async (t) => {
        try {
          return await this.engine.emitSessionEvent(t);
        } catch (e2) {
          throw this.logger.error(e2.message), e2;
        }
      }, this.getActiveSessions = () => {
        try {
          return this.engine.getActiveSessions();
        } catch (t) {
          throw this.logger.error(t.message), t;
        }
      }, this.getPendingSessionProposals = () => {
        try {
          return this.engine.getPendingSessionProposals();
        } catch (t) {
          throw this.logger.error(t.message), t;
        }
      }, this.getPendingSessionRequests = () => {
        try {
          return this.engine.getPendingSessionRequests();
        } catch (t) {
          throw this.logger.error(t.message), t;
        }
      }, this.registerDeviceToken = (t) => {
        try {
          return this.engine.registerDeviceToken(t);
        } catch (e2) {
          throw this.logger.error(e2.message), e2;
        }
      }, this.approveSessionAuthenticate = (t) => {
        try {
          return this.engine.approveSessionAuthenticate(t);
        } catch (e2) {
          throw this.logger.error(e2.message), e2;
        }
      }, this.rejectSessionAuthenticate = (t) => {
        try {
          return this.engine.rejectSessionAuthenticate(t);
        } catch (e2) {
          throw this.logger.error(e2.message), e2;
        }
      }, this.formatAuthMessage = (t) => {
        try {
          return this.engine.formatAuthMessage(t);
        } catch (e2) {
          throw this.logger.error(e2.message), e2;
        }
      }, this.metadata = n5.metadata, this.name = n5.name || g3, this.signConfig = n5.signConfig, this.core = n5.core, this.logger = this.core.logger, this.engine = new te3(this);
    }
    static async init(n5) {
      const t = new q2(n5);
      return await t.initialize(), t;
    }
    async initialize() {
      this.logger.trace("Initialized");
      try {
        await this.engine.init(), this.logger.info("WalletKit Initialization Success");
      } catch (n5) {
        throw this.logger.info("WalletKit Initialization Failure"), this.logger.error(n5.message), n5;
      }
    }
  }, __name(_a2, "q"), _a2);
  var v5 = q2;
  v5.notifications = ne2;
  var se3 = v5;

  // src/utils/constants.ts
  init_shims();
  var defaultChainId = 8453;
  var walletConnectMethods = [
    "eth_sendRawTransaction",
    "eth_sign",
    "eth_signTransaction",
    "eth_signTypedData",
    "eth_signTypedData_v3",
    "eth_signTypedData_v4"
  ];
  var projectId = "90b0e2ff886ba98147f2780659cf12a6";

  // src/utils/config.ts
  init_shims();
  var ChainConfig = {
    1: {
      chainId: `0x${Number(1).toString(16)}`,
      chainName: "Ethereum",
      nativeCurrency: {
        name: "ETH",
        symbol: "ETH",
        decimals: 18
      },
      rpcUrls: [
        "https://eth-mainnet.g.alchemy.com/v2/82hkNrfu6ZZ8Wms2vr1U331ml3FtS7AZ"
      ],
      blockExplorerUrls: ["https://etherscan.io/"],
      icon: "../assets/ethereum-icon.svg",
      explorerApiKey: "M8SGUPC8CXRTER5GGTSSXW7C9A1ZINWWYA",
      explorerApiUrl: "https://api.etherscan.io/v2/api",
      paymentTokens: ["0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"]
      //erc20 payment token addressses
    },
    8453: {
      chainId: `0x${Number(8453).toString(16)}`,
      chainName: "Base Mainnet",
      nativeCurrency: {
        name: "ETH",
        symbol: "ETH",
        decimals: 18
      },
      rpcUrls: [
        "https://base-mainnet.g.alchemy.com/v2/82hkNrfu6ZZ8Wms2vr1U331ml3FtS7AZ"
      ],
      blockExplorerUrls: ["https://basescan.org/"],
      icon: "../assets/base-icon.svg",
      explorerApiKey: "M8SGUPC8CXRTER5GGTSSXW7C9A1ZINWWYA",
      explorerApiUrl: "https://api.etherscan.io/v2/api",
      paymentTokens: ["0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913"]
      //erc20 payment token addressses
    },
    100: {
      chainId: `0x${Number(100).toString(16)}`,
      chainName: "Gnosis",
      nativeCurrency: {
        name: "XDAI",
        symbol: "XDAI",
        decimals: 18
      },
      rpcUrls: ["https://rpc.gnosischain.com/"],
      blockExplorerUrls: ["https://gnosisscan.io/"],
      icon: "../assets/gnois-icon.svg",
      explorerApiKey: "M8SGUPC8CXRTER5GGTSSXW7C9A1ZINWWYA",
      explorerApiUrl: "https://api.etherscan.io/v2/api",
      paymentTokens: []
      //erc20 payment token addressses
    },
    11155111: {
      chainId: `0x${Number(11155111).toString(16)}`,
      chainName: "Sepolia Test Network",
      nativeCurrency: {
        name: "ETH",
        symbol: "ETH",
        decimals: 18
      },
      rpcUrls: [
        "https://eth-sepolia.g.alchemy.com/v2/82hkNrfu6ZZ8Wms2vr1U331ml3FtS7AZ"
      ],
      blockExplorerUrls: ["https://sepolia.etherscan.io/"],
      icon: "../assets/ethereum-icon.svg",
      explorerApiKey: "M8SGUPC8CXRTER5GGTSSXW7C9A1ZINWWYA",
      explorerApiUrl: "https://api.etherscan.io/v2/api",
      paymentTokens: ["0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238"]
      //erc20 payment token addressses
    },
    84532: {
      chainId: `0x${Number(84532).toString(16)}`,
      chainName: "Base Sepolia",
      nativeCurrency: {
        name: "ETH",
        symbol: "ETH",
        decimals: 18
      },
      rpcUrls: ["https://sepolia.base.org"],
      blockExplorerUrls: ["https://sepolia.basescan.org/"],
      icon: "../assets/base-icon.svg",
      explorerApiKey: "M8SGUPC8CXRTER5GGTSSXW7C9A1ZINWWYA",
      explorerApiUrl: "https://api.etherscan.io/v2/api",
      paymentTokens: []
      //erc20 payment token addressses
    }
  };

  // src/scripts/content.ts
  var contentScript = document.createElement("script");
  contentScript.src = chrome.runtime.getURL("scripts/injected.js");
  contentScript.onload = () => {
    contentScript.remove();
  };
  (document.head || document.documentElement).appendChild(contentScript);
  var handleWalletConnectSession = /* @__PURE__ */ __name(async () => {
    const core = new ta2({
      projectId,
      customStoragePrefix: `test-${Date.now()}`
      //For Dev paralle tests??
    });
    const client = await se3.init({
      core,
      metadata: {
        name: "Verified Wallet Extension",
        description: "Browser extension for the Verified Wallet.",
        url: "https://custody.verified.network",
        icons: [
          "https://raw.githubusercontent.com/kallolborah/verified-public-assets/main/icon128.png"
        ]
      }
    });
    const activeSessions = /* @__PURE__ */ new Map();
    client.on("session_proposal", async (proposal) => {
      return new Promise(async (resolve, reject) => {
        chrome.runtime.sendMessage(
          {
            type: "VW_REQ",
            params: {
              method: "eth_requestAccounts"
            },
            origin: proposal?.params?.proposer?.metadata?.url,
            title: proposal?.params?.proposer?.metadata?.name
          },
          async (res) => {
            try {
              const event = new CustomEvent("pairWwalletconnectData", {
                detail: {
                  value: {
                    success: res?.success,
                    data: res?.data
                  }
                }
              });
              window.dispatchEvent(event);
              if (res?.success && res?.response && res?.data) {
                const proposalNameSpaces = Object.keys(proposal?.params?.requiredNamespaces)?.length > 0 ? proposal?.params?.requiredNamespaces : proposal?.params?.optionalNamespaces;
                if (Object.keys(proposalNameSpaces)?.length === 0) {
                  await client.rejectSession({
                    id: proposal.id,
                    reason: {
                      code: 5e3,
                      message: "No NameSpaces received from session proposal"
                    }
                  });
                  reject("No NameSpaces received from session proposal");
                }
                const namespaces = {};
                Object.keys(proposalNameSpaces).map((nsKey) => {
                  const ns2 = proposalNameSpaces[nsKey];
                  namespaces[nsKey] = {
                    accounts: res?.data.map(
                      (acct) => ns2?.chains.map((c6) => `${c6}:${acct?.address}`)
                    ).flat(),
                    //format addresses with namespaces
                    methods: ns2?.methods,
                    events: ns2?.events,
                    chains: ns2?.chains
                  };
                });
                const supportedNamespaces = Ga({
                  proposal: proposal.params,
                  supportedNamespaces: namespaces
                });
                const session = await client.approveSession({
                  id: proposal.id,
                  namespaces: supportedNamespaces
                });
                activeSessions.set(
                  session.topic,
                  proposal?.params?.proposer?.metadata
                );
                resolve(res.data[0]);
              } else {
                await client.rejectSession({
                  id: proposal.id,
                  reason: {
                    code: 5e3,
                    message: res?.error || "User rejected connection"
                  }
                });
                reject(res?.error);
              }
            } catch (err) {
              console.error("Error While Processing Session Proposal:", err);
              await client.rejectSession({
                id: proposal.id,
                reason: {
                  code: 5e3,
                  message: res?.error || "User rejected connection"
                }
              });
              reject(res?.error);
            }
          }
        );
      });
    });
    const _getConnectedAccounts = /* @__PURE__ */ __name(async () => {
      try {
        const { myVault } = await chrome.storage.local.get("myVault");
        const parsed = JSON.parse(myVault || "{}");
        if (parsed?.regAddress?.length > 0 && Number(parsed?.chainId) > 0) {
          return [parsed.regAddress];
        }
        if (parsed?.address?.length > 0 && Number(parsed?.chainId) > 0) {
          return [parsed.address];
        }
      } catch (e2) {
        console.error("Failed to load account from storage:", e2);
      }
      return [];
    }, "_getConnectedAccounts");
    const _rpcFetch = /* @__PURE__ */ __name(async (method, params = []) => {
      const { myVault } = await chrome.storage.local.get("myVault");
      const parsed = JSON.parse(myVault || "{}");
      if (parsed?.address?.length > 0 && Number(parsed?.chainId) > 0) {
        const rpcUrl = ChainConfig[Number(parsed.chainId)]?.rpcUrls[0] || ChainConfig[defaultChainId]?.rpcUrls[0];
        const payload = {
          jsonrpc: "2.0",
          id: Math.floor(Math.random() * 1e4),
          method,
          params
        };
        const response = await fetch(rpcUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        });
        const json = await response.json();
        if (json.error) throw new Error(json.error.message);
        return json.result;
      }
      return {};
    }, "_rpcFetch");
    client.on("session_request", async (event) => {
      const { topic, params, id } = event;
      const { request } = params;
      if (walletConnectMethods.includes(request?.method)) {
        const result = await _rpcFetch(request?.method, request?.params);
        await client.respondSessionRequest({
          topic,
          response: {
            id,
            jsonrpc: "2.0",
            result
          }
        });
        return result;
      }
      if (request?.method === "eth_accounts") {
        const result = await _getConnectedAccounts();
        await client.respondSessionRequest({
          topic: request.topic,
          response: {
            id,
            jsonrpc: "2.0",
            result
          }
        });
        return result;
      }
      return new Promise(async (resolve, reject) => {
        const sessionMetadata = activeSessions.get(topic);
        chrome.runtime.sendMessage(
          {
            type: "VW_REQ",
            params: {
              method: request?.method,
              params: request.params
            },
            origin: sessionMetadata?.url,
            title: sessionMetadata?.name
          },
          async (res) => {
            try {
              if (res?.success && res?.response) {
                await client.respondSessionRequest({
                  topic,
                  response: {
                    id,
                    jsonrpc: "2.0",
                    result: res?.data
                  }
                });
              } else {
                await client.respondSessionRequest({
                  topic,
                  response: {
                    id,
                    jsonrpc: "2.0",
                    error: {
                      code: 4001,
                      message: res?.error
                    }
                  }
                });
              }
              resolve(res?.data);
            } catch (err) {
              console.error("Error While Processing Session Request:", err);
              reject("Error While Processing Session Request:");
            }
          }
        );
      });
    });
    client.on("session_delete", (session) => {
      activeSessions.delete(session.topic);
    });
    return client;
  }, "handleWalletConnectSession");
  handleWalletConnectSession();
  if (!window.__VW_CONTENT_LISTENER_ATTACHED__) {
    window.__VW_CONTENT_LISTENER_ATTACHED__ = true;
    window.addEventListener("message", /* @__PURE__ */ __name(async function handler(evnt) {
      if (evnt.source !== window || !evnt.data) return;
      if (evnt.data.type === "VW_REQ") {
        if (evnt.data.params?.method !== "pair_walletconnect_uri") {
          chrome.runtime.sendMessage(
            {
              type: "VW_REQ",
              params: evnt.data.params,
              origin: window.location.origin,
              title: document.title
            },
            (res) => {
              window.postMessage(
                {
                  type: "VW_RES",
                  id: evnt.data.id,
                  params: {
                    success: res?.success,
                    response: res?.response,
                    error: res?.error,
                    data: res?.data,
                    saveToStorage: res?.saveToStorage
                  }
                },
                "*"
              );
            }
          );
        } else {
          const uri = evnt.data.params?.params?.uri;
          const client = await handleWalletConnectSession();
          await client.pair({ uri, activatePairing: true }).catch((err) => {
            throw new Error(
              err?.message || "Error Pairing URI. Try again later."
            );
          });
        }
      } else {
        chrome.runtime.sendMessage({
          type: evnt.data.type,
          data: evnt.data?.data,
          origin: window.location.origin
        });
      }
    }, "handler"));
  }
})();
/*! Bundled license information:

ieee754/index.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

buffer/index.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)

tslib/tslib.es6.js:
tslib/tslib.es6.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)

@walletconnect/relay-auth/dist/index.es.js:
  (*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) *)
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/hashes/esm/utils.js:
  (*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/abstract/utils.js:
@noble/curves/esm/abstract/modular.js:
@noble/curves/esm/abstract/curve.js:
@noble/curves/esm/abstract/weierstrass.js:
@noble/curves/esm/_shortw_utils.js:
@noble/curves/esm/secp256k1.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@scure/base/lib/esm/index.js:
  (*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@walletconnect/utils/dist/index.js:
  (*! noble-ciphers - MIT License (c) 2023 Paul Miller (paulmillr.com) *)
*/
//# sourceMappingURL=content.js.map
