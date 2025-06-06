function pegasus(t, e) {
    return e = new XMLHttpRequest, e.open("GET", t), t = [], e.onreadystatechange = e.then = function(n, o, i, r) {
        if (n && n.call && (t = [, n, o]), 4 == e.readyState && (i = t[0 | e.status / 200])) {
            try {
                r = JSON.parse(e.responseText)
            } catch (s) {
                r = null
            }
            i(r, e)
        }
    }, e.send(), e
}
if ("document" in self && ("classList" in document.createElement("_") ? ! function() {
        "use strict";
        var t = document.createElement("_");
        if (t.classList.add("c1", "c2"), !t.classList.contains("c2")) {
            var e = function(t) {
                var e = DOMTokenList.prototype[t];
                DOMTokenList.prototype[t] = function(t) {
                    var n, o = arguments.length;
                    for (n = 0; o > n; n++) t = arguments[n], e.call(this, t)
                }
            };
            e("add"), e("remove")
        }
        if (t.classList.toggle("c3", !1), t.classList.contains("c3")) {
            var n = DOMTokenList.prototype.toggle;
            DOMTokenList.prototype.toggle = function(t, e) {
                return 1 in arguments && !this.contains(t) == !e ? e : n.call(this, t)
            }
        }
        t = null
    }() : ! function(t) {
        "use strict";
        if ("Element" in t) {
            var e = "classList",
                n = "prototype",
                o = t.Element[n],
                i = Object,
                r = String[n].trim || function() {
                    return this.replace(/^\s+|\s+$/g, "")
                },
                s = Array[n].indexOf || function(t) {
                    for (var e = 0, n = this.length; n > e; e++)
                        if (e in this && this[e] === t) return e;
                    return -1
                },
                a = function(t, e) {
                    this.name = t, this.code = DOMException[t], this.message = e
                },
                c = function(t, e) {
                    if ("" === e) throw new a("SYNTAX_ERR", "An invalid or illegal string was specified");
                    if (/\s/.test(e)) throw new a("INVALID_CHARACTER_ERR", "String contains an invalid character");
                    return s.call(t, e)
                },
                l = function(t) {
                    for (var e = r.call(t.getAttribute("class") || ""), n = e ? e.split(/\s+/) : [], o = 0, i = n.length; i > o; o++) this.push(n[o]);
                    this._updateClassName = function() {
                        t.setAttribute("class", this.toString())
                    }
                },
                u = l[n] = [],
                d = function() {
                    return new l(this)
                };
            if (a[n] = Error[n], u.item = function(t) {
                    return this[t] || null
                }, u.contains = function(t) {
                    return t += "", -1 !== c(this, t)
                }, u.add = function() {
                    var t, e = arguments,
                        n = 0,
                        o = e.length,
                        i = !1;
                    do t = e[n] + "", -1 === c(this, t) && (this.push(t), i = !0); while (++n < o);
                    i && this._updateClassName()
                }, u.remove = function() {
                    var t, e, n = arguments,
                        o = 0,
                        i = n.length,
                        r = !1;
                    do
                        for (t = n[o] + "", e = c(this, t); - 1 !== e;) this.splice(e, 1), r = !0, e = c(this, t); while (++o < i);
                    r && this._updateClassName()
                }, u.toggle = function(t, e) {
                    t += "";
                    var n = this.contains(t),
                        o = n ? e !== !0 && "remove" : e !== !1 && "add";
                    return o && this[o](t), e === !0 || e === !1 ? e : !n
                }, u.toString = function() {
                    return this.join(" ")
                }, i.defineProperty) {
                var h = {
                    get: d,
                    enumerable: !0,
                    configurable: !0
                };
                try {
                    i.defineProperty(o, e, h)
                } catch (f) {
                    -2146823252 === f.number && (h.enumerable = !1, i.defineProperty(o, e, h))
                }
            } else i[n].__defineGetter__ && o.__defineGetter__(e, d)
        }
    }(self)), function() {
        "use strict";

        function t(e, o) {
            function i(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            }
            var r;
            if (o = o || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = o.touchBoundary || 10, this.layer = e, this.tapDelay = o.tapDelay || 200, this.tapTimeout = o.tapTimeout || 700, !t.notNeeded(e)) {
                for (var s = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], a = this, c = 0, l = s.length; l > c; c++) a[s[c]] = i(a[s[c]], a);
                n && (e.addEventListener("mouseover", this.onMouse, !0), e.addEventListener("mousedown", this.onMouse, !0), e.addEventListener("mouseup", this.onMouse, !0)), e.addEventListener("click", this.onClick, !0), e.addEventListener("touchstart", this.onTouchStart, !1), e.addEventListener("touchmove", this.onTouchMove, !1), e.addEventListener("touchend", this.onTouchEnd, !1), e.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (e.removeEventListener = function(t, n, o) {
                    var i = Node.prototype.removeEventListener;
                    "click" === t ? i.call(e, t, n.hijacked || n, o) : i.call(e, t, n, o)
                }, e.addEventListener = function(t, n, o) {
                    var i = Node.prototype.addEventListener;
                    "click" === t ? i.call(e, t, n.hijacked || (n.hijacked = function(t) {
                        t.propagationStopped || n(t)
                    }), o) : i.call(e, t, n, o)
                }), "function" == typeof e.onclick && (r = e.onclick, e.addEventListener("click", function(t) {
                    r(t)
                }, !1), e.onclick = null)
            }
        }
        var e = navigator.userAgent.indexOf("Windows Phone") >= 0,
            n = navigator.userAgent.indexOf("Android") > 0 && !e,
            o = /iP(ad|hone|od)/.test(navigator.userAgent) && !e,
            i = o && /OS 4_\d(_\d)?/.test(navigator.userAgent),
            r = o && /OS [6-7]_\d/.test(navigator.userAgent),
            s = navigator.userAgent.indexOf("BB10") > 0;
        t.prototype.needsClick = function(t) {
            switch (t.nodeName.toLowerCase()) {
                case "button":
                case "select":
                case "textarea":
                    if (t.disabled) return !0;
                    break;
                case "input":
                    if (o && "file" === t.type || t.disabled) return !0;
                    break;
                case "label":
                case "iframe":
                case "video":
                    return !0
            }
            return /\bneedsclick\b/.test(t.className)
        }, t.prototype.needsFocus = function(t) {
            switch (t.nodeName.toLowerCase()) {
                case "textarea":
                    return !0;
                case "select":
                    return !n;
                case "input":
                    switch (t.type) {
                        case "button":
                        case "checkbox":
                        case "file":
                        case "image":
                        case "radio":
                        case "submit":
                            return !1
                    }
                    return !t.disabled && !t.readOnly;
                default:
                    return /\bneedsfocus\b/.test(t.className)
            }
        }, t.prototype.sendClick = function(t, e) {
            var n, o;
            document.activeElement && document.activeElement !== t && document.activeElement.blur(), o = e.changedTouches[0], n = document.createEvent("MouseEvents"), n.initMouseEvent(this.determineEventType(t), !0, !0, window, 1, o.screenX, o.screenY, o.clientX, o.clientY, !1, !1, !1, !1, 0, null), n.forwardedTouchEvent = !0, t.dispatchEvent(n)
        }, t.prototype.determineEventType = function(t) {
            return n && "select" === t.tagName.toLowerCase() ? "mousedown" : "click"
        }, t.prototype.focus = function(t) {
            var e;
            o && t.setSelectionRange && 0 !== t.type.indexOf("date") && "time" !== t.type && "month" !== t.type ? (e = t.value.length, t.setSelectionRange(e, e)) : t.focus()
        }, t.prototype.updateScrollParent = function(t) {
            var e, n;
            if (e = t.fastClickScrollParent, !e || !e.contains(t)) {
                n = t;
                do {
                    if (n.scrollHeight > n.offsetHeight) {
                        e = n, t.fastClickScrollParent = n;
                        break
                    }
                    n = n.parentElement
                } while (n)
            }
            e && (e.fastClickLastScrollTop = e.scrollTop)
        }, t.prototype.getTargetElementFromEventTarget = function(t) {
            return t.nodeType === Node.TEXT_NODE ? t.parentNode : t
        }, t.prototype.onTouchStart = function(t) {
            var e, n, r;
            if (t.targetTouches.length > 1) return !0;
            if (e = this.getTargetElementFromEventTarget(t.target), n = t.targetTouches[0], o) {
                if (r = window.getSelection(), r.rangeCount && !r.isCollapsed) return !0;
                if (!i) {
                    if (n.identifier && n.identifier === this.lastTouchIdentifier) return t.preventDefault(), !1;
                    this.lastTouchIdentifier = n.identifier, this.updateScrollParent(e)
                }
            }
            return this.trackingClick = !0, this.trackingClickStart = t.timeStamp, this.targetElement = e, this.touchStartX = n.pageX, this.touchStartY = n.pageY, t.timeStamp - this.lastClickTime < this.tapDelay && t.preventDefault(), !0
        }, t.prototype.touchHasMoved = function(t) {
            var e = t.changedTouches[0],
                n = this.touchBoundary;
            return Math.abs(e.pageX - this.touchStartX) > n || Math.abs(e.pageY - this.touchStartY) > n ? !0 : !1
        }, t.prototype.onTouchMove = function(t) {
            return this.trackingClick ? ((this.targetElement !== this.getTargetElementFromEventTarget(t.target) || this.touchHasMoved(t)) && (this.trackingClick = !1, this.targetElement = null), !0) : !0
        }, t.prototype.findControl = function(t) {
            return void 0 !== t.control ? t.control : t.htmlFor ? document.getElementById(t.htmlFor) : t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
        }, t.prototype.onTouchEnd = function(t) {
            var e, s, a, c, l, u = this.targetElement;
            if (!this.trackingClick) return !0;
            if (t.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0, !0;
            if (t.timeStamp - this.trackingClickStart > this.tapTimeout) return !0;
            if (this.cancelNextClick = !1, this.lastClickTime = t.timeStamp, s = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, r && (l = t.changedTouches[0], u = document.elementFromPoint(l.pageX - window.pageXOffset, l.pageY - window.pageYOffset) || u, u.fastClickScrollParent = this.targetElement.fastClickScrollParent), a = u.tagName.toLowerCase(), "label" === a) {
                if (e = this.findControl(u)) {
                    if (this.focus(u), n) return !1;
                    u = e
                }
            } else if (this.needsFocus(u)) return t.timeStamp - s > 100 || o && window.top !== window && "input" === a ? (this.targetElement = null, !1) : (this.focus(u), this.sendClick(u, t), o && "select" === a || (this.targetElement = null, t.preventDefault()), !1);
            return o && !i && (c = u.fastClickScrollParent, c && c.fastClickLastScrollTop !== c.scrollTop) ? !0 : (this.needsClick(u) || (t.preventDefault(), this.sendClick(u, t)), !1)
        }, t.prototype.onTouchCancel = function() {
            this.trackingClick = !1, this.targetElement = null
        }, t.prototype.onMouse = function(t) {
            return this.targetElement ? t.forwardedTouchEvent ? !0 : t.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick) ? (t.stopImmediatePropagation ? t.stopImmediatePropagation() : t.propagationStopped = !0, t.stopPropagation(), t.preventDefault(), !1) : !0 : !0
        }, t.prototype.onClick = function(t) {
            var e;
            return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === t.target.type && 0 === t.detail ? !0 : (e = this.onMouse(t), e || (this.targetElement = null), e)
        }, t.prototype.destroy = function() {
            var t = this.layer;
            n && (t.removeEventListener("mouseover", this.onMouse, !0), t.removeEventListener("mousedown", this.onMouse, !0), t.removeEventListener("mouseup", this.onMouse, !0)), t.removeEventListener("click", this.onClick, !0), t.removeEventListener("touchstart", this.onTouchStart, !1), t.removeEventListener("touchmove", this.onTouchMove, !1), t.removeEventListener("touchend", this.onTouchEnd, !1), t.removeEventListener("touchcancel", this.onTouchCancel, !1)
        }, t.notNeeded = function(t) {
            var e, o, i, r;
            if ("undefined" == typeof window.ontouchstart) return !0;
            if (o = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
                if (!n) return !0;
                if (e = document.querySelector("meta[name=viewport]")) {
                    if (-1 !== e.content.indexOf("user-scalable=no")) return !0;
                    if (o > 31 && document.documentElement.scrollWidth <= window.outerWidth) return !0
                }
            }
            if (s && (i = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), i[1] >= 10 && i[2] >= 3 && (e = document.querySelector("meta[name=viewport]")))) {
                if (-1 !== e.content.indexOf("user-scalable=no")) return !0;
                if (document.documentElement.scrollWidth <= window.outerWidth) return !0
            }
            return "none" === t.style.msTouchAction || "manipulation" === t.style.touchAction ? !0 : (r = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1], r >= 27 && (e = document.querySelector("meta[name=viewport]"), e && (-1 !== e.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth)) ? !0 : "none" === t.style.touchAction || "manipulation" === t.style.touchAction ? !0 : !1)
        }, t.attach = function(e, n) {
            return new t(e, n)
        }, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() {
            return t
        }) : "undefined" != typeof module && module.exports ? (module.exports = t.attach, module.exports.FastClick = t) : window.FastClick = t
    }(), function() {
        var t = function(e) {
            var n = new t.Index;
            return n.pipeline.add(t.trimmer, t.stopWordFilter, t.stemmer), e && e.call(n, n), n
        };
        t.version = "0.6.0", t.utils = {}, t.utils.warn = function(t) {
                return function(e) {
                    t.console && console.warn && console.warn(e)
                }
            }(this), t.utils.asString = function(t) {
                return void 0 === t || null === t ? "" : t.toString()
            }, t.EventEmitter = function() {
                this.events = {}
            }, t.EventEmitter.prototype.addListener = function() {
                var t = Array.prototype.slice.call(arguments),
                    e = t.pop(),
                    n = t;
                if ("function" != typeof e) throw new TypeError("last argument must be a function");
                n.forEach(function(t) {
                    this.hasHandler(t) || (this.events[t] = []), this.events[t].push(e)
                }, this)
            }, t.EventEmitter.prototype.removeListener = function(t, e) {
                if (this.hasHandler(t)) {
                    var n = this.events[t].indexOf(e);
                    this.events[t].splice(n, 1), this.events[t].length || delete this.events[t]
                }
            }, t.EventEmitter.prototype.emit = function(t) {
                if (this.hasHandler(t)) {
                    var e = Array.prototype.slice.call(arguments, 1);
                    this.events[t].forEach(function(t) {
                        t.apply(void 0, e)
                    })
                }
            }, t.EventEmitter.prototype.hasHandler = function(t) {
                return t in this.events
            }, t.tokenizer = function(e) {
                return arguments.length && null != e && void 0 != e ? Array.isArray(e) ? e.map(function(e) {
                    return t.utils.asString(e).toLowerCase()
                }) : e.toString().trim().toLowerCase().split(t.tokenizer.seperator) : []
            }, t.tokenizer.seperator = /[\s\-]+/, t.Pipeline = function() {
                this._stack = []
            }, t.Pipeline.registeredFunctions = {}, t.Pipeline.registerFunction = function(e, n) {
                n in this.registeredFunctions && t.utils.warn("Overwriting existing registered function: " + n), e.label = n, t.Pipeline.registeredFunctions[e.label] = e
            }, t.Pipeline.warnIfFunctionNotRegistered = function(e) {
                var n = e.label && e.label in this.registeredFunctions;
                n || t.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\n", e)
            }, t.Pipeline.load = function(e) {
                var n = new t.Pipeline;
                return e.forEach(function(e) {
                    var o = t.Pipeline.registeredFunctions[e];
                    if (!o) throw new Error("Cannot load un-registered function: " + e);
                    n.add(o)
                }), n
            }, t.Pipeline.prototype.add = function() {
                var e = Array.prototype.slice.call(arguments);
                e.forEach(function(e) {
                    t.Pipeline.warnIfFunctionNotRegistered(e), this._stack.push(e)
                }, this)
            }, t.Pipeline.prototype.after = function(e, n) {
                t.Pipeline.warnIfFunctionNotRegistered(n);
                var o = this._stack.indexOf(e);
                if (-1 == o) throw new Error("Cannot find existingFn");
                o += 1, this._stack.splice(o, 0, n)
            }, t.Pipeline.prototype.before = function(e, n) {
                t.Pipeline.warnIfFunctionNotRegistered(n);
                var o = this._stack.indexOf(e);
                if (-1 == o) throw new Error("Cannot find existingFn");
                this._stack.splice(o, 0, n)
            }, t.Pipeline.prototype.remove = function(t) {
                var e = this._stack.indexOf(t); - 1 != e && this._stack.splice(e, 1)
            }, t.Pipeline.prototype.run = function(t) {
                for (var e = [], n = t.length, o = this._stack.length, i = 0; n > i; i++) {
                    for (var r = t[i], s = 0; o > s && (r = this._stack[s](r, i, t), void 0 !== r && "" !== r); s++);
                    void 0 !== r && "" !== r && e.push(r)
                }
                return e
            }, t.Pipeline.prototype.reset = function() {
                this._stack = []
            }, t.Pipeline.prototype.toJSON = function() {
                return this._stack.map(function(e) {
                    return t.Pipeline.warnIfFunctionNotRegistered(e), e.label
                })
            }, t.Vector = function() {
                this._magnitude = null, this.list = void 0, this.length = 0
            }, t.Vector.Node = function(t, e, n) {
                this.idx = t, this.val = e, this.next = n
            }, t.Vector.prototype.insert = function(e, n) {
                this._magnitude = void 0;
                var o = this.list;
                if (!o) return this.list = new t.Vector.Node(e, n, o), this.length++;
                if (e < o.idx) return this.list = new t.Vector.Node(e, n, o), this.length++;
                for (var i = o, r = o.next; void 0 != r;) {
                    if (e < r.idx) return i.next = new t.Vector.Node(e, n, r), this.length++;
                    i = r, r = r.next
                }
                return i.next = new t.Vector.Node(e, n, r), this.length++
            }, t.Vector.prototype.magnitude = function() {
                if (this._magnitude) return this._magnitude;
                for (var t, e = this.list, n = 0; e;) t = e.val, n += t * t, e = e.next;
                return this._magnitude = Math.sqrt(n)
            }, t.Vector.prototype.dot = function(t) {
                for (var e = this.list, n = t.list, o = 0; e && n;) e.idx < n.idx ? e = e.next : e.idx > n.idx ? n = n.next : (o += e.val * n.val, e = e.next, n = n.next);
                return o
            }, t.Vector.prototype.similarity = function(t) {
                return this.dot(t) / (this.magnitude() * t.magnitude())
            }, t.SortedSet = function() {
                this.length = 0, this.elements = []
            }, t.SortedSet.load = function(t) {
                var e = new this;
                return e.elements = t, e.length = t.length, e
            }, t.SortedSet.prototype.add = function() {
                var t, e;
                for (t = 0; t < arguments.length; t++) e = arguments[t], ~this.indexOf(e) || this.elements.splice(this.locationFor(e), 0, e);
                this.length = this.elements.length
            }, t.SortedSet.prototype.toArray = function() {
                return this.elements.slice()
            }, t.SortedSet.prototype.map = function(t, e) {
                return this.elements.map(t, e)
            }, t.SortedSet.prototype.forEach = function(t, e) {
                return this.elements.forEach(t, e)
            }, t.SortedSet.prototype.indexOf = function(t) {
                for (var e = 0, n = this.elements.length, o = n - e, i = e + Math.floor(o / 2), r = this.elements[i]; o > 1;) {
                    if (r === t) return i;
                    t > r && (e = i), r > t && (n = i), o = n - e, i = e + Math.floor(o / 2), r = this.elements[i]
                }
                return r === t ? i : -1
            }, t.SortedSet.prototype.locationFor = function(t) {
                for (var e = 0, n = this.elements.length, o = n - e, i = e + Math.floor(o / 2), r = this.elements[i]; o > 1;) t > r && (e = i), r > t && (n = i), o = n - e, i = e + Math.floor(o / 2), r = this.elements[i];
                return r > t ? i : t > r ? i + 1 : void 0
            }, t.SortedSet.prototype.intersect = function(e) {
                for (var n = new t.SortedSet, o = 0, i = 0, r = this.length, s = e.length, a = this.elements, c = e.elements;;) {
                    if (o > r - 1 || i > s - 1) break;
                    a[o] !== c[i] ? a[o] < c[i] ? o++ : a[o] > c[i] && i++ : (n.add(a[o]), o++, i++)
                }
                return n
            }, t.SortedSet.prototype.clone = function() {
                var e = new t.SortedSet;
                return e.elements = this.toArray(), e.length = e.elements.length, e
            }, t.SortedSet.prototype.union = function(t) {
                var e, n, o;
                return this.length >= t.length ? (e = this, n = t) : (e = t, n = this), o = e.clone(), o.add.apply(o, n.toArray()), o
            }, t.SortedSet.prototype.toJSON = function() {
                return this.toArray()
            }, t.Index = function() {
                this._fields = [], this._ref = "id", this.pipeline = new t.Pipeline, this.documentStore = new t.Store, this.tokenStore = new t.TokenStore, this.corpusTokens = new t.SortedSet, this.eventEmitter = new t.EventEmitter, this._idfCache = {}, this.on("add", "remove", "update", function() {
                    this._idfCache = {}
                }.bind(this))
            }, t.Index.prototype.on = function() {
                var t = Array.prototype.slice.call(arguments);
                return this.eventEmitter.addListener.apply(this.eventEmitter, t)
            }, t.Index.prototype.off = function(t, e) {
                return this.eventEmitter.removeListener(t, e)
            }, t.Index.load = function(e) {
                e.version !== t.version && t.utils.warn("version mismatch: current " + t.version + " importing " + e.version);
                var n = new this;
                return n._fields = e.fields, n._ref = e.ref, n.documentStore = t.Store.load(e.documentStore), n.tokenStore = t.TokenStore.load(e.tokenStore), n.corpusTokens = t.SortedSet.load(e.corpusTokens), n.pipeline = t.Pipeline.load(e.pipeline), n
            }, t.Index.prototype.field = function(t, e) {
                var e = e || {},
                    n = {
                        name: t,
                        boost: e.boost || 1
                    };
                return this._fields.push(n), this
            }, t.Index.prototype.ref = function(t) {
                return this._ref = t, this
            }, t.Index.prototype.add = function(e, n) {
                var o = {},
                    i = new t.SortedSet,
                    r = e[this._ref],
                    n = void 0 === n ? !0 : n;
                this._fields.forEach(function(n) {
                    var r = this.pipeline.run(t.tokenizer(e[n.name]));
                    o[n.name] = r, t.SortedSet.prototype.add.apply(i, r)
                }, this), this.documentStore.set(r, i), t.SortedSet.prototype.add.apply(this.corpusTokens, i.toArray());
                for (var s = 0; s < i.length; s++) {
                    var a = i.elements[s],
                        c = this._fields.reduce(function(t, e) {
                            var n = o[e.name].length;
                            if (!n) return t;
                            var i = o[e.name].filter(function(t) {
                                return t === a
                            }).length;
                            return t + i / n * e.boost
                        }, 0);
                    this.tokenStore.add(a, {
                        ref: r,
                        tf: c
                    })
                }
                n && this.eventEmitter.emit("add", e, this)
            }, t.Index.prototype.remove = function(t, e) {
                var n = t[this._ref],
                    e = void 0 === e ? !0 : e;
                if (this.documentStore.has(n)) {
                    var o = this.documentStore.get(n);
                    this.documentStore.remove(n), o.forEach(function(t) {
                        this.tokenStore.remove(t, n)
                    }, this), e && this.eventEmitter.emit("remove", t, this)
                }
            }, t.Index.prototype.update = function(t, e) {
                var e = void 0 === e ? !0 : e;
                this.remove(t, !1), this.add(t, !1), e && this.eventEmitter.emit("update", t, this)
            }, t.Index.prototype.idf = function(t) {
                var e = "@" + t;
                if (Object.prototype.hasOwnProperty.call(this._idfCache, e)) return this._idfCache[e];
                var n = this.tokenStore.count(t),
                    o = 1;
                return n > 0 && (o = 1 + Math.log(this.documentStore.length / n)), this._idfCache[e] = o
            }, t.Index.prototype.search = function(e) {
                var n = this.pipeline.run(t.tokenizer(e)),
                    o = new t.Vector,
                    i = [],
                    r = this._fields.reduce(function(t, e) {
                        return t + e.boost
                    }, 0),
                    s = n.some(function(t) {
                        return this.tokenStore.has(t)
                    }, this);
                if (!s) return [];
                n.forEach(function(e, n, s) {
                    var a = 1 / s.length * this._fields.length * r,
                        c = this,
                        l = this.tokenStore.expand(e).reduce(function(n, i) {
                            var r = c.corpusTokens.indexOf(i),
                                s = c.idf(i),
                                l = 1,
                                u = new t.SortedSet;
                            if (i !== e) {
                                var d = Math.max(3, i.length - e.length);
                                l = 1 / Math.log(d)
                            }
                            r > -1 && o.insert(r, a * s * l);
                            for (var h = c.tokenStore.get(i), f = Object.keys(h), p = f.length, m = 0; p > m; m++) u.add(h[f[m]].ref);
                            return n.union(u)
                        }, new t.SortedSet);
                    i.push(l)
                }, this);
                var a = i.reduce(function(t, e) {
                    return t.intersect(e)
                });
                return a.map(function(t) {
                    return {
                        ref: t,
                        score: o.similarity(this.documentVector(t))
                    }
                }, this).sort(function(t, e) {
                    return e.score - t.score
                })
            }, t.Index.prototype.documentVector = function(e) {
                for (var n = this.documentStore.get(e), o = n.length, i = new t.Vector, r = 0; o > r; r++) {
                    var s = n.elements[r],
                        a = this.tokenStore.get(s)[e].tf,
                        c = this.idf(s);
                    i.insert(this.corpusTokens.indexOf(s), a * c)
                }
                return i
            }, t.Index.prototype.toJSON = function() {
                return {
                    version: t.version,
                    fields: this._fields,
                    ref: this._ref,
                    documentStore: this.documentStore.toJSON(),
                    tokenStore: this.tokenStore.toJSON(),
                    corpusTokens: this.corpusTokens.toJSON(),
                    pipeline: this.pipeline.toJSON()
                }
            }, t.Index.prototype.use = function(t) {
                var e = Array.prototype.slice.call(arguments, 1);
                e.unshift(this), t.apply(this, e)
            }, t.Store = function() {
                this.store = {}, this.length = 0
            }, t.Store.load = function(e) {
                var n = new this;
                return n.length = e.length, n.store = Object.keys(e.store).reduce(function(n, o) {
                    return n[o] = t.SortedSet.load(e.store[o]), n
                }, {}), n
            }, t.Store.prototype.set = function(t, e) {
                this.has(t) || this.length++, this.store[t] = e
            }, t.Store.prototype.get = function(t) {
                return this.store[t]
            }, t.Store.prototype.has = function(t) {
                return t in this.store
            }, t.Store.prototype.remove = function(t) {
                this.has(t) && (delete this.store[t], this.length--)
            }, t.Store.prototype.toJSON = function() {
                return {
                    store: this.store,
                    length: this.length
                }
            }, t.stemmer = function() {
                var t = {
                        ational: "ate",
                        tional: "tion",
                        enci: "ence",
                        anci: "ance",
                        izer: "ize",
                        bli: "ble",
                        alli: "al",
                        entli: "ent",
                        eli: "e",
                        ousli: "ous",
                        ization: "ize",
                        ation: "ate",
                        ator: "ate",
                        alism: "al",
                        iveness: "ive",
                        fulness: "ful",
                        ousness: "ous",
                        aliti: "al",
                        iviti: "ive",
                        biliti: "ble",
                        logi: "log"
                    },
                    e = {
                        icate: "ic",
                        ative: "",
                        alize: "al",
                        iciti: "ic",
                        ical: "ic",
                        ful: "",
                        ness: ""
                    },
                    n = "[^aeiou]",
                    o = "[aeiouy]",
                    i = n + "[^aeiouy]*",
                    r = o + "[aeiou]*",
                    s = "^(" + i + ")?" + r + i,
                    a = "^(" + i + ")?" + r + i + "(" + r + ")?$",
                    c = "^(" + i + ")?" + r + i + r + i,
                    l = "^(" + i + ")?" + o,
                    u = new RegExp(s),
                    d = new RegExp(c),
                    h = new RegExp(a),
                    f = new RegExp(l),
                    p = /^(.+?)(ss|i)es$/,
                    m = /^(.+?)([^s])s$/,
                    v = /^(.+?)eed$/,
                    g = /^(.+?)(ed|ing)$/,
                    y = /.$/,
                    w = /(at|bl|iz)$/,
                    S = new RegExp("([^aeiouylsz])\\1$"),
                    k = new RegExp("^" + i + o + "[^aeiouwxy]$"),
                    E = /^(.+?[^aeiou])y$/,
                    x = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,
                    b = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
                    T = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,
                    C = /^(.+?)(s|t)(ion)$/,
                    L = /^(.+?)e$/,
                    _ = /ll$/,
                    A = new RegExp("^" + i + o + "[^aeiouwxy]$"),
                    O = function(n) {
                        var o, i, r, s, a, c, l;
                        if (n.length < 3) return n;
                        if (r = n.substr(0, 1), "y" == r && (n = r.toUpperCase() + n.substr(1)), s = p, a = m, s.test(n) ? n = n.replace(s, "$1$2") : a.test(n) && (n = n.replace(a, "$1$2")), s = v, a = g, s.test(n)) {
                            var O = s.exec(n);
                            s = u, s.test(O[1]) && (s = y, n = n.replace(s, ""))
                        } else if (a.test(n)) {
                            var O = a.exec(n);
                            o = O[1], a = f, a.test(o) && (n = o, a = w, c = S, l = k, a.test(n) ? n += "e" : c.test(n) ? (s = y, n = n.replace(s, "")) : l.test(n) && (n += "e"))
                        }
                        if (s = E, s.test(n)) {
                            var O = s.exec(n);
                            o = O[1], n = o + "i"
                        }
                        if (s = x, s.test(n)) {
                            var O = s.exec(n);
                            o = O[1], i = O[2], s = u, s.test(o) && (n = o + t[i])
                        }
                        if (s = b, s.test(n)) {
                            var O = s.exec(n);
                            o = O[1], i = O[2], s = u, s.test(o) && (n = o + e[i])
                        }
                        if (s = T, a = C, s.test(n)) {
                            var O = s.exec(n);
                            o = O[1], s = d, s.test(o) && (n = o)
                        } else if (a.test(n)) {
                            var O = a.exec(n);
                            o = O[1] + O[2], a = d, a.test(o) && (n = o)
                        }
                        if (s = L, s.test(n)) {
                            var O = s.exec(n);
                            o = O[1], s = d, a = h, c = A, (s.test(o) || a.test(o) && !c.test(o)) && (n = o)
                        }
                        return s = _, a = d, s.test(n) && a.test(n) && (s = y, n = n.replace(s, "")), "y" == r && (n = r.toLowerCase() + n.substr(1)), n
                    };
                return O
            }(), t.Pipeline.registerFunction(t.stemmer, "stemmer"), t.generateStopWordFilter = function(t) {
                var e = t.reduce(function(t, e) {
                    return t[e] = e, t
                }, {});
                return function(t) {
                    return t && e[t] !== t ? t : void 0
                }
            }, t.stopWordFilter = t.generateStopWordFilter(["a", "able", "about", "across", "after", "all", "almost", "also", "am", "among", "an", "and", "any", "are", "as", "at", "be", "because", "been", "but", "by", "can", "cannot", "could", "dear", "did", "do", "does", "either", "else", "ever", "every", "for", "from", "get", "got", "had", "has", "have", "he", "her", "hers", "him", "his", "how", "however", "i", "if", "in", "into", "is", "it", "its", "just", "least", "let", "like", "likely", "may", "me", "might", "most", "must", "my", "neither", "no", "nor", "not", "of", "off", "often", "on", "only", "or", "other", "our", "own", "rather", "said", "say", "says", "she", "should", "since", "so", "some", "than", "that", "the", "their", "them", "then", "there", "these", "they", "this", "tis", "to", "too", "twas", "us", "wants", "was", "we", "were", "what", "when", "where", "which", "while", "who", "whom", "why", "will", "with", "would", "yet", "you", "your"]), t.Pipeline.registerFunction(t.stopWordFilter, "stopWordFilter"), t.trimmer = function(t) {
                return t.replace(/^\W+/, "").replace(/\W+$/, "")
            }, t.Pipeline.registerFunction(t.trimmer, "trimmer"), t.TokenStore = function() {
                this.root = {
                    docs: {}
                }, this.length = 0
            }, t.TokenStore.load = function(t) {
                var e = new this;
                return e.root = t.root, e.length = t.length, e
            }, t.TokenStore.prototype.add = function(t, e, n) {
                var n = n || this.root,
                    o = t.charAt(0),
                    i = t.slice(1);
                return o in n || (n[o] = {
                    docs: {}
                }), 0 === i.length ? (n[o].docs[e.ref] = e, void(this.length += 1)) : this.add(i, e, n[o])
            }, t.TokenStore.prototype.has = function(t) {
                if (!t) return !1;
                for (var e = this.root, n = 0; n < t.length; n++) {
                    if (!e[t.charAt(n)]) return !1;
                    e = e[t.charAt(n)]
                }
                return !0
            }, t.TokenStore.prototype.getNode = function(t) {
                if (!t) return {};
                for (var e = this.root, n = 0; n < t.length; n++) {
                    if (!e[t.charAt(n)]) return {};
                    e = e[t.charAt(n)]
                }
                return e
            }, t.TokenStore.prototype.get = function(t, e) {
                return this.getNode(t, e).docs || {}
            }, t.TokenStore.prototype.count = function(t, e) {
                return Object.keys(this.get(t, e)).length
            }, t.TokenStore.prototype.remove = function(t, e) {
                if (t) {
                    for (var n = this.root, o = 0; o < t.length; o++) {
                        if (!(t.charAt(o) in n)) return;
                        n = n[t.charAt(o)]
                    }
                    delete n.docs[e]
                }
            }, t.TokenStore.prototype.expand = function(t, e) {
                var n = this.getNode(t),
                    o = n.docs || {},
                    e = e || [];
                return Object.keys(o).length && e.push(t), Object.keys(n).forEach(function(n) {
                    "docs" !== n && e.concat(this.expand(t + n, e))
                }, this), e
            }, t.TokenStore.prototype.toJSON = function() {
                return {
                    root: this.root,
                    length: this.length
                }
            },
            function(t, e) {
                "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.lunr = e()
            }(this, function() {
                return t
            })
    }(), String.prototype.truncate = function(t) {
        if (this.length > t) {
            for (;
                " " != this[t] && --t > 0;);
            return this.substring(0, t) + "&hellip;"
        }
        return this
    }, HTMLElement.prototype.wrap = function(t) {
        t.length || (t = [t]);
        for (var e = t.length - 1; e >= 0; e--) {
            var n = e > 0 ? this.cloneNode(!0) : this,
                o = t[e],
                i = o.parentNode,
                r = o.nextSibling;
            n.appendChild(o), r ? i.insertBefore(n, r) : i.appendChild(n)
        }
    }, document.addEventListener("DOMContentLoaded", function() {
        "use strict";
        Modernizr.addTest("ios", function() {
            return !!navigator.userAgent.match(/(iPad|iPhone|iPod)/g)
        }), Modernizr.addTest("standalone", function() {
            return !!navigator.standalone
        }), FastClick.attach(document.body);
        var t = document.getElementById("toggle-search"),
            e = (document.getElementById("reset-search"), document.querySelector(".drawer")),
            n = document.querySelectorAll(".anchor"),
            o = document.querySelector(".search .field"),
            i = document.querySelector(".query"),
            r = document.querySelector(".results .meta");
        Array.prototype.forEach.call(n, function(t) {
            t.querySelector("a").addEventListener("click", function() {
                document.getElementById("toggle-drawer").checked = !1, document.body.classList.remove("toggle-drawer")
            })
        });
        var s = window.pageYOffset,
            a = function() {
                var t = window.pageYOffset + window.innerHeight,
                    n = Math.max(0, window.innerHeight - e.offsetHeight);
                t > document.body.clientHeight - (96 - n) ? "absolute" != e.style.position && (e.style.position = "absolute", e.style.top = null, e.style.bottom = 0) : e.offsetHeight < window.innerHeight ? "fixed" != e.style.position && (e.style.position = "fixed", e.style.top = 0, e.style.bottom = null) : "fixed" != e.style.position ? t > e.offsetTop + e.offsetHeight ? (e.style.position = "fixed", e.style.top = null, e.style.bottom = "-96px") : window.pageYOffset < e.offsetTop && (e.style.position = "fixed", e.style.top = 0, e.style.bottom = null) : window.pageYOffset > s ? e.style.top && (e.style.position = "absolute", e.style.top = Math.max(0, s) + "px", e.style.bottom = null) : e.style.bottom && (e.style.position = "absolute", e.style.top = t - e.offsetHeight + "px", e.style.bottom = null), s = Math.max(0, window.pageYOffset)
            },
            c = function() {
                var t = document.querySelector(".main");
                window.removeEventListener("scroll", a), matchMedia("only screen and (max-width: 959px)").matches ? (e.style.position = null, e.style.top = null, e.style.bottom = null) : e.offsetHeight + 96 < t.offsetHeight && (window.addEventListener("scroll", a), a())
            };
        Modernizr.ios || (window.addEventListener("resize", c), c()) ;
        var l = function() {
            pegasus(base_url + "/mkdocs/search_index.json").then(function(e, n) {
                var o = lunr(function() {
                        this.field("title", {
                            boost: 10
                        }), this.field("text"), this.ref("location")
                    }),
                    s = {};
                e.docs.map(function(t) {
                    t.location = base_url + t.location, s[t.location] = t, o.add(t)
                }), i.addEventListener("keyup", function() {
                    for (var e = document.querySelector(".results .list"); e.firstChild;) e.removeChild(e.firstChild);
                    var n = document.querySelector(".bar.search");
                    if (!i.value.length) {
                        for (; r.firstChild;) r.removeChild(r.firstChild);
                        return void n.classList.remove("non-empty")
                    }
                    n.classList.add("non-empty");
                    var a = o.search(i.value);
                    a.map(function(n) {
                        var o = s[n.ref],
                            i = document.createElement("article");
                        i.classList.add("result");
                        var r = document.createElement("h1");
                        r.innerHTML = o.title, i.appendChild(r);
                        var a = document.createElement("a");
                        a.href = o.location, a.appendChild(i);
                        var c = document.createElement("span");
                        c.innerHTML = a.href.split("#")[0], i.appendChild(c);
                        var l = a.href.split("#");
                        l[0] == document.location.href.split("#")[0] && a.addEventListener("click", function(e) {
                            if (document.body.classList.remove("toggle-search"), document.body.classList.remove("locked"), t.checked = !1, !matchMedia("only screen and (min-width: 960px)").matches && (e.preventDefault(), e.stopPropagation(), 1 != l.length)) {
                                var n = document.getElementById(l[1]);
                                n && setTimeout(function() {
                                    n.scrollIntoView && n.scrollIntoView() || window.scrollTo(0, n.offsetTop)
                                }, 100)
                            }
                        }), e.appendChild(a)
                    });
                    var c = document.createElement("strong");
                    for (c.innerHTML = a.length + " search result" + (1 != a.length ? "s" : ""); r.firstChild;) r.removeChild(r.firstChild);
                    r.appendChild(c)
                })
            }, function(t, e) {
                console.error(t, e.status)
            }), t.removeEventListener("click", l)
        };
        /*
        No need to listen to search events, Algolia service will handle them.
        This listener is needed only if you plan to add a custom serch.
          */
        //t.addEventListener("click", l);
        var u = 0;
        t.addEventListener("click", function(t) {
            var e = document.body.classList,
                n = !matchMedia("only screen and (min-width: 960px)").matches;
            e.contains("locked") ? (e.remove("locked"), n && setTimeout(function() {
                window.scrollTo(0, u)
            }, 100)) : (u = window.scrollY, n && setTimeout(function() {
                window.scrollTo(0, 0)
            }, 400), setTimeout(function() {
                this.checked && (n && e.add("locked"), setTimeout(function() {
                    i.focus()
                }, 200))
            }.bind(this), 450))
        }), o.addEventListener("touchstart", function() {
            i.focus()
        }), window.addEventListener("keyup", function(e) {
            var n = e.keyCode || e.which;
            27 == n && (i.blur(), document.body.classList.remove("toggle-search"), document.body.classList.remove("locked"), t.checked = !1)
        });
        var d = document.getElementById("reset-search");
        d.addEventListener("click", function() {
            for (var t = document.querySelector(".results .list"); t.firstChild;) t.removeChild(t.firstChild);
            var e = document.querySelector(".bar.search");
            e.classList.remove("non-empty"), r.innerHTML = "", i.value = "", i.focus()
        });
        var h = document.querySelectorAll("h2");
        h = Array.prototype.map.call(h, function(t) {
            return t.offsetTop
        });
        var f = null;
        document.addEventListener("scroll", function() {
            for (var t = window.scrollY + window.innerHeight / 3, e = h.length - 1, o = 0; e > o; o++) t < h[o + 1] && (e = o);
            e != f && (f = e, Array.prototype.forEach.call(n, function(t, e) {
                var n = t.querySelector("a");
                (e != f || n.classList.add("current")) && n.classList.remove("current")
            }))
        });
        var p = document.querySelectorAll(".n + .p");
        Array.prototype.forEach.call(p, function(t) {
            var e = t.innerText || t.textContent;
            e && "(" == e[0] && t.previousSibling.classList.add("f")
        });
        var m = document.querySelectorAll("table");
        if (Array.prototype.forEach.call(m, function(t) {
                var e = document.createElement("div");
                e.classList.add("data"), e.wrap(t)
            }), Modernizr.ios) {
            var v = document.querySelectorAll(".scrollable, .standalone .article");
            Array.prototype.forEach.call(v, function(t) {
                t.addEventListener("touchstart", function() {
                    var t = this.scrollTop;
                    0 == t ? this.scrollTop = 1 : t + this.offsetHeight == this.scrollHeight && (this.scrollTop = t - 1)
                })
            })
        }
        var g = document.querySelectorAll(".project, .overlay, .header");
        Array.prototype.forEach.call(g, function(t) {
            t.addEventListener("touchmove", function(t) {
                t.preventDefault()
            })
        });
        var y = document.querySelectorAll(".toggle");
        Array.prototype.forEach.call(y, function(t) {
            t.addEventListener("click", function() {
                document.body.classList.toggle(this.id)
            })
        }), repo_id && pegasus("https://api.github.com/repos/" + repo_id).then(function(t, e) {
            var n = t.stargazers_count;
            n > 1e4 ? n = (n / 1e3).toFixed(0) + "k" : n > 1e3 && (n = (n / 1e3).toFixed(1) + "k");
            var o = document.querySelector(".repo-stars .count");
            o.innerHTML = n
        }, function(t, e) {
            console.error(t, e.status)
        })
    }), "standalone" in window.navigator && window.navigator.standalone) {
    var node, remotes = !1;
    document.addEventListener("click", function(t) {
        for (node = t.target;
            "A" !== node.nodeName && "HTML" !== node.nodeName;) node = node.parentNode;
        "href" in node && -1 !== node.href.indexOf("http") && (-1 !== node.href.indexOf(document.location.host) || remotes) && (t.preventDefault(), document.location.href = node.href)
    }, !1)
}

// Submenu handling
window.onload = function() {
    var headers = document.getElementsByTagName("h2");
    var scrollspy = document.getElementById('scrollspy');
    var lastClickedHeader = null;
    var isManualSelection = false;
    var activeH3Id = null;
    var activeH2Id = null;

    if(scrollspy && headers.length > 0) {
        // Function to find parent h2 of an h3
        function findParentH2(element) {
            while(element && element.tagName !== 'H2') {
                element = element.previousElementSibling;
            }
            return element;
        }

        // Function to highlight active link and show h3 submenu
        function highlightActiveLink(headerId, isClick = false, h3Id = null) {
            // Remove active class from all links
            var allLinks = scrollspy.getElementsByTagName("a");
            for(var i = 0; i < allLinks.length; i++) {
                allLinks[i].classList.remove("active");
            }

            // Add active class to corresponding link
            if(headerId) {
                var activeLink = scrollspy.querySelector('a[href="#' + headerId + '"]');
                if(activeLink) {
                    activeLink.classList.add("active");
                    activeH2Id = headerId;
                    
                    // Find the active h2 element
                    var activeH2 = document.getElementById(headerId);
                    if(activeH2) {
                        // Remove all existing h3 submenus
                        var existingSubmenus = scrollspy.getElementsByTagName("ul");
                        while(existingSubmenus.length > 0) {
                            existingSubmenus[0].parentNode.removeChild(existingSubmenus[0]);
                        }
                        
                        // Create new submenu for h3 elements
                        var h3Submenu = document.createElement('ul');
                        var currentElement = activeH2.nextElementSibling;
                        
                        // Find all h3 elements until next h2
                        while(currentElement && currentElement.tagName !== 'H2') {
                            if(currentElement.tagName === 'H3') {
                                var h3Link = document.createElement('a');
                                h3Link.href = '#' + currentElement.id;
                                
                                // Get text content and remove any HTML formatting
                                var h3Title = currentElement.textContent;
                                // Remove the permanent link symbol if present
                                h3Title = h3Title.replace(/[¶#]$/, '').trim();
                                h3Link.textContent = h3Title;
                                
                                // Add click event listener to h3 link
                                h3Link.addEventListener('click', function(e) {
                                    var clickedH3Id = this.getAttribute('href').substring(1);
                                    var clickedH3 = document.getElementById(clickedH3Id);
                                    if(clickedH3) {
                                        var parentH2 = findParentH2(clickedH3);
                                        if(parentH2) {
                                            isManualSelection = true;
                                            activeH3Id = clickedH3Id;
                                            highlightActiveLink(parentH2.id, true, clickedH3Id);
                                        }
                                    }
                                });
                                
                                // If this is the active h3, add active class
                                if(h3Id && currentElement.id === h3Id) {
                                    h3Link.classList.add("active");
                                }
                                
                                var h3Li = document.createElement('li');
                                h3Li.appendChild(h3Link);
                                h3Submenu.appendChild(h3Li);
                            }
                            currentElement = currentElement.nextElementSibling;
                        }
                        
                        // Add the submenu if it has items
                        if(h3Submenu.children.length > 0) {
                            activeLink.parentElement.appendChild(h3Submenu);
                        }
                    }
                }
            }
        }
        
        // Check URL hash on page load
        if(window.location.hash) {
            var headerId = window.location.hash.substring(1);
            var header = document.getElementById(headerId);
            if(header) {
                if(header.tagName === 'H3') {
                    var parentH2 = findParentH2(header);
                    if(parentH2) {
                        isManualSelection = true;
                        activeH3Id = headerId;
                        highlightActiveLink(parentH2.id, true, headerId);
                    }
                } else {
                    isManualSelection = true;
                    activeH3Id = null;
                    highlightActiveLink(headerId, true);
                }
            }
        }
        
        // Add click event listener to h2 links
        var h2Links = scrollspy.querySelectorAll('a[href^="#"]');
        h2Links.forEach(function(link) {
            link.addEventListener('click', function(e) {
                var headerId = this.getAttribute('href').substring(1);
                var header = document.getElementById(headerId);
                if(header && header.tagName === 'H2') {
                    isManualSelection = true;
                    activeH3Id = null;
                    highlightActiveLink(headerId, true);
                }
            });
        });

        // Reset manual selection when clicking outside the menu
        document.addEventListener('click', function(e) {
            if(!scrollspy.contains(e.target)) {
                isManualSelection = false;
            }
        });
    }
};

