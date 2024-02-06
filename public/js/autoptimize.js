/*! jQuery Migrate v3.4.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], function(e) {
        return t(e, window)
    }) : "object" == typeof module && module.exports ? module.exports = t(require("jquery"), window) : t(jQuery, window)
}(function(s, n) {
    "use strict";
    function e(e) {
        return 0 <= function(e, t) {
            for (var r = /^(\d+)\.(\d+)\.(\d+)/, n = r.exec(e) || [], o = r.exec(t) || [], a = 1; a <= 3; a++) {
                if (+o[a] < +n[a])
                    return 1;
                if (+n[a] < +o[a])
                    return -1
            }
            return 0
        }(s.fn.jquery, e)
    }
    s.migrateVersion = "3.4.1";
    var t = Object.create(null);
    s.migrateDisablePatches = function() {
        for (var e = 0; e < arguments.length; e++)
            t[arguments[e]] = !0
    }
    ,
    s.migrateEnablePatches = function() {
        for (var e = 0; e < arguments.length; e++)
            delete t[arguments[e]]
    }
    ,
    s.migrateIsPatchEnabled = function(e) {
        return !t[e]
    }
    ,
    n.console && n.console.log && (s && e("3.0.0") && !e("5.0.0"),
    s.migrateWarnings && n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),
    (s.migrateMute ? "" : " with logging active") + ", version " + s.migrateVersion);
    var o = {};
    function u(e, t) {
        var r = n.console;
        !s.migrateIsPatchEnabled(e) || s.migrateDeduplicateWarnings && o[t] || (o[t] = !0,
        s.migrateWarnings.push(t + " [" + e + "]"),
        r && r.warn && !s.migrateMute && (r.warn("JQMIGRATE: " + t),
        s.migrateTrace && r.trace && r.trace()))
    }
    function r(e, t, r, n, o) {
        Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return u(n, o),
                r
            },
            set: function(e) {
                u(n, o),
                r = e
            }
        })
    }
    function a(e, t, r, n, o) {
        var a = e[t];
        e[t] = function() {
            return o && u(n, o),
            (s.migrateIsPatchEnabled(n) ? r : a || s.noop).apply(this, arguments)
        }
    }
    function c(e, t, r, n, o) {
        if (!o)
            throw new Error("No warning message provided");
        return a(e, t, r, n, o),
        0
    }
    function i(e, t, r, n) {
        return a(e, t, r, n),
        0
    }
    s.migrateDeduplicateWarnings = !0,
    s.migrateWarnings = [],
    void 0 === s.migrateTrace && (s.migrateTrace = !0),
    s.migrateReset = function() {
        o = {},
        s.migrateWarnings.length = 0
    }
    ,
    "BackCompat" === n.document.compatMode && u("quirks", "jQuery is not compatible with Quirks Mode");
    var d, l, p, f = {}, m = s.fn.init, y = s.find, h = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/, g = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g, v = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    for (d in i(s.fn, "init", function(e) {
        var t = Array.prototype.slice.call(arguments);
        return s.migrateIsPatchEnabled("selector-empty-id") && "string" == typeof e && "#" === e && (u("selector-empty-id", "jQuery( '#' ) is not a valid selector"),
        t[0] = []),
        m.apply(this, t)
    }, "selector-empty-id"),
    s.fn.init.prototype = s.fn,
    i(s, "find", function(t) {
        var r = Array.prototype.slice.call(arguments);
        if ("string" == typeof t && h.test(t))
            try {
                n.document.querySelector(t)
            } catch (e) {
                t = t.replace(g, function(e, t, r, n) {
                    return "[" + t + r + '"' + n + '"]'
                });
                try {
                    n.document.querySelector(t),
                    u("selector-hash", "Attribute selector with '#' must be quoted: " + r[0]),
                    r[0] = t
                } catch (e) {
                    u("selector-hash", "Attribute selector with '#' was not fixed: " + r[0])
                }
            }
        return y.apply(this, r)
    }, "selector-hash"),
    y)
        Object.prototype.hasOwnProperty.call(y, d) && (s.find[d] = y[d]);
    c(s.fn, "size", function() {
        return this.length
    }, "size", "jQuery.fn.size() is deprecated and removed; use the .length property"),
    c(s, "parseJSON", function() {
        return JSON.parse.apply(null, arguments)
    }, "parseJSON", "jQuery.parseJSON is deprecated; use JSON.parse"),
    c(s, "holdReady", s.holdReady, "holdReady", "jQuery.holdReady is deprecated"),
    c(s, "unique", s.uniqueSort, "unique", "jQuery.unique is deprecated; use jQuery.uniqueSort"),
    r(s.expr, "filters", s.expr.pseudos, "expr-pre-pseudos", "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"),
    r(s.expr, ":", s.expr.pseudos, "expr-pre-pseudos", "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"),
    e("3.1.1") && c(s, "trim", function(e) {
        return null == e ? "" : (e + "").replace(v, "$1")
    }, "trim", "jQuery.trim is deprecated; use String.prototype.trim"),
    e("3.2.0") && (c(s, "nodeName", function(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }, "nodeName", "jQuery.nodeName is deprecated"),
    c(s, "isArray", Array.isArray, "isArray", "jQuery.isArray is deprecated; use Array.isArray")),
    e("3.3.0") && (c(s, "isNumeric", function(e) {
        var t = typeof e;
        return ("number" == t || "string" == t) && !isNaN(e - parseFloat(e))
    }, "isNumeric", "jQuery.isNumeric() is deprecated"),
    s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        f["[object " + t + "]"] = t.toLowerCase()
    }),
    c(s, "type", function(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? f[Object.prototype.toString.call(e)] || "object" : typeof e
    }, "type", "jQuery.type is deprecated"),
    c(s, "isFunction", function(e) {
        return "function" == typeof e
    }, "isFunction", "jQuery.isFunction() is deprecated"),
    c(s, "isWindow", function(e) {
        return null != e && e === e.window
    }, "isWindow", "jQuery.isWindow() is deprecated")),
    s.ajax && (l = s.ajax,
    p = /(=)\?(?=&|$)|\?\?/,
    i(s, "ajax", function() {
        var e = l.apply(this, arguments);
        return e.promise && (c(e, "success", e.done, "jqXHR-methods", "jQXHR.success is deprecated and removed"),
        c(e, "error", e.fail, "jqXHR-methods", "jQXHR.error is deprecated and removed"),
        c(e, "complete", e.always, "jqXHR-methods", "jQXHR.complete is deprecated and removed")),
        e
    }, "jqXHR-methods"),
    e("4.0.0") || s.ajaxPrefilter("+json", function(e) {
        !1 !== e.jsonp && (p.test(e.url) || "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && p.test(e.data)) && u("jsonp-promotion", "JSON-to-JSONP auto-promotion is deprecated")
    }));
    var j = s.fn.removeAttr
      , b = s.fn.toggleClass
      , w = /\S+/g;
    function x(e) {
        return e.replace(/-([a-z])/g, function(e, t) {
            return t.toUpperCase()
        })
    }
    i(s.fn, "removeAttr", function(e) {
        var r = this
          , n = !1;
        return s.each(e.match(w), function(e, t) {
            s.expr.match.bool.test(t) && r.each(function() {
                if (!1 !== s(this).prop(t))
                    return !(n = !0)
            }),
            n && (u("removeAttr-bool", "jQuery.fn.removeAttr no longer sets boolean properties: " + t),
            r.prop(t, !1))
        }),
        j.apply(this, arguments)
    }, "removeAttr-bool"),
    i(s.fn, "toggleClass", function(t) {
        return void 0 !== t && "boolean" != typeof t ? b.apply(this, arguments) : (u("toggleClass-bool", "jQuery.fn.toggleClass( boolean ) is deprecated"),
        this.each(function() {
            var e = this.getAttribute && this.getAttribute("class") || "";
            e && s.data(this, "__className__", e),
            this.setAttribute && this.setAttribute("class", !e && !1 !== t && s.data(this, "__className__") || "")
        }))
    }, "toggleClass-bool");
    var Q, A, R = !1, C = /^[a-z]/, N = /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
    s.swap && s.each(["height", "width", "reliableMarginRight"], function(e, t) {
        var r = s.cssHooks[t] && s.cssHooks[t].get;
        r && (s.cssHooks[t].get = function() {
            var e;
            return R = !0,
            e = r.apply(this, arguments),
            R = !1,
            e
        }
        )
    }),
    i(s, "swap", function(e, t, r, n) {
        var o, a, i = {};
        for (a in R || u("swap", "jQuery.swap() is undocumented and deprecated"),
        t)
            i[a] = e.style[a],
            e.style[a] = t[a];
        for (a in o = r.apply(e, n || []),
        t)
            e.style[a] = i[a];
        return o
    }, "swap"),
    e("3.4.0") && "undefined" != typeof Proxy && (s.cssProps = new Proxy(s.cssProps || {},{
        set: function() {
            return u("cssProps", "jQuery.cssProps is deprecated"),
            Reflect.set.apply(this, arguments)
        }
    })),
    e("4.0.0") ? (A = {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        gridArea: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnStart: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowStart: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
    },
    "undefined" != typeof Proxy ? s.cssNumber = new Proxy(A,{
        get: function() {
            return u("css-number", "jQuery.cssNumber is deprecated"),
            Reflect.get.apply(this, arguments)
        },
        set: function() {
            return u("css-number", "jQuery.cssNumber is deprecated"),
            Reflect.set.apply(this, arguments)
        }
    }) : s.cssNumber = A) : A = s.cssNumber,
    Q = s.fn.css,
    i(s.fn, "css", function(e, t) {
        var r, n, o = this;
        return e && "object" == typeof e && !Array.isArray(e) ? (s.each(e, function(e, t) {
            s.fn.css.call(o, e, t)
        }),
        this) : ("number" == typeof t && (r = x(e),
        n = r,
        C.test(n) && N.test(n[0].toUpperCase() + n.slice(1)) || A[r] || u("css-number", 'Number-typed values are deprecated for jQuery.fn.css( "' + e + '", value )')),
        Q.apply(this, arguments))
    }, "css-number");
    var S, P, k, H, E = s.data;
    i(s, "data", function(e, t, r) {
        var n, o, a;
        if (t && "object" == typeof t && 2 === arguments.length) {
            for (a in n = s.hasData(e) && E.call(this, e),
            o = {},
            t)
                a !== x(a) ? (u("data-camelCase", "jQuery.data() always sets/gets camelCased names: " + a),
                n[a] = t[a]) : o[a] = t[a];
            return E.call(this, e, o),
            t
        }
        return t && "string" == typeof t && t !== x(t) && (n = s.hasData(e) && E.call(this, e)) && t in n ? (u("data-camelCase", "jQuery.data() always sets/gets camelCased names: " + t),
        2 < arguments.length && (n[t] = r),
        n[t]) : E.apply(this, arguments)
    }, "data-camelCase"),
    s.fx && (k = s.Tween.prototype.run,
    H = function(e) {
        return e
    }
    ,
    i(s.Tween.prototype, "run", function() {
        1 < s.easing[this.easing].length && (u("easing-one-arg", "'jQuery.easing." + this.easing.toString() + "' should use only one argument"),
        s.easing[this.easing] = H),
        k.apply(this, arguments)
    }, "easing-one-arg"),
    S = s.fx.interval,
    P = "jQuery.fx.interval is deprecated",
    n.requestAnimationFrame && Object.defineProperty(s.fx, "interval", {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return n.document.hidden || u("fx-interval", P),
            s.migrateIsPatchEnabled("fx-interval") && void 0 === S ? 13 : S
        },
        set: function(e) {
            u("fx-interval", P),
            S = e
        }
    }));
    var M = s.fn.load
      , q = s.event.add
      , O = s.event.fix;
    s.event.props = [],
    s.event.fixHooks = {},
    r(s.event.props, "concat", s.event.props.concat, "event-old-patch", "jQuery.event.props.concat() is deprecated and removed"),
    i(s.event, "fix", function(e) {
        var t, r = e.type, n = this.fixHooks[r], o = s.event.props;
        if (o.length) {
            u("event-old-patch", "jQuery.event.props are deprecated and removed: " + o.join());
            while (o.length)
                s.event.addProp(o.pop())
        }
        if (n && !n._migrated_ && (n._migrated_ = !0,
        u("event-old-patch", "jQuery.event.fixHooks are deprecated and removed: " + r),
        (o = n.props) && o.length))
            while (o.length)
                s.event.addProp(o.pop());
        return t = O.call(this, e),
        n && n.filter ? n.filter(t, e) : t
    }, "event-old-patch"),
    i(s.event, "add", function(e, t) {
        return e === n && "load" === t && "complete" === n.document.readyState && u("load-after-event", "jQuery(window).on('load'...) called after load event occurred"),
        q.apply(this, arguments)
    }, "load-after-event"),
    s.each(["load", "unload", "error"], function(e, t) {
        i(s.fn, t, function() {
            var e = Array.prototype.slice.call(arguments, 0);
            return "load" === t && "string" == typeof e[0] ? M.apply(this, e) : (u("shorthand-removed-v3", "jQuery.fn." + t + "() is deprecated"),
            e.splice(0, 0, t),
            arguments.length ? this.on.apply(this, e) : (this.triggerHandler.apply(this, e),
            this))
        }, "shorthand-removed-v3")
    }),
    s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, r) {
        c(s.fn, r, function(e, t) {
            return 0 < arguments.length ? this.on(r, null, e, t) : this.trigger(r)
        }, "shorthand-deprecated-v3", "jQuery.fn." + r + "() event shorthand is deprecated")
    }),
    s(function() {
        s(n.document).triggerHandler("ready")
    }),
    s.event.special.ready = {
        setup: function() {
            this === n.document && u("ready-event", "'ready' event is deprecated")
        }
    },
    c(s.fn, "bind", function(e, t, r) {
        return this.on(e, null, t, r)
    }, "pre-on-methods", "jQuery.fn.bind() is deprecated"),
    c(s.fn, "unbind", function(e, t) {
        return this.off(e, null, t)
    }, "pre-on-methods", "jQuery.fn.unbind() is deprecated"),
    c(s.fn, "delegate", function(e, t, r, n) {
        return this.on(t, e, r, n)
    }, "pre-on-methods", "jQuery.fn.delegate() is deprecated"),
    c(s.fn, "undelegate", function(e, t, r) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", r)
    }, "pre-on-methods", "jQuery.fn.undelegate() is deprecated"),
    c(s.fn, "hover", function(e, t) {
        return this.on("mouseenter", e).on("mouseleave", t || e)
    }, "pre-on-methods", "jQuery.fn.hover() is deprecated");
    function T(e) {
        var t = n.document.implementation.createHTMLDocument("");
        return t.body.innerHTML = e,
        t.body && t.body.innerHTML
    }
    var F = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi;
    s.UNSAFE_restoreLegacyHtmlPrefilter = function() {
        s.migrateEnablePatches("self-closed-tags")
    }
    ,
    i(s, "htmlPrefilter", function(e) {
        var t, r;
        return (r = (t = e).replace(F, "<$1></$2>")) !== t && T(t) !== T(r) && u("self-closed-tags", "HTML tags must be properly nested and closed: " + t),
        e.replace(F, "<$1></$2>")
    }, "self-closed-tags"),
    s.migrateDisablePatches("self-closed-tags");
    var D, W, _, I = s.fn.offset;
    return i(s.fn, "offset", function() {
        var e = this[0];
        return !e || e.nodeType && e.getBoundingClientRect ? I.apply(this, arguments) : (u("offset-valid-elem", "jQuery.fn.offset() requires a valid DOM element"),
        arguments.length ? this : void 0)
    }, "offset-valid-elem"),
    s.ajax && (D = s.param,
    i(s, "param", function(e, t) {
        var r = s.ajaxSettings && s.ajaxSettings.traditional;
        return void 0 === t && r && (u("param-ajax-traditional", "jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),
        t = r),
        D.call(this, e, t)
    }, "param-ajax-traditional")),
    c(s.fn, "andSelf", s.fn.addBack, "andSelf", "jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"),
    s.Deferred && (W = s.Deferred,
    _ = [["resolve", "done", s.Callbacks("once memory"), s.Callbacks("once memory"), "resolved"], ["reject", "fail", s.Callbacks("once memory"), s.Callbacks("once memory"), "rejected"], ["notify", "progress", s.Callbacks("memory"), s.Callbacks("memory")]],
    i(s, "Deferred", function(e) {
        var a = W()
          , i = a.promise();
        function t() {
            var o = arguments;
            return s.Deferred(function(n) {
                s.each(_, function(e, t) {
                    var r = "function" == typeof o[e] && o[e];
                    a[t[1]](function() {
                        var e = r && r.apply(this, arguments);
                        e && "function" == typeof e.promise ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[t[0] + "With"](this === i ? n.promise() : this, r ? [e] : arguments)
                    })
                }),
                o = null
            }).promise()
        }
        return c(a, "pipe", t, "deferred-pipe", "deferred.pipe() is deprecated"),
        c(i, "pipe", t, "deferred-pipe", "deferred.pipe() is deprecated"),
        e && e.call(a, a),
        a
    }, "deferred-pipe"),
    s.Deferred.exceptionHook = W.exceptionHook),
    s
});
(function($) {
    "use strict";
    $(window).on('elementor/frontend/init', function() {
        elementorFrontend.hooks.addAction('frontend/element_ready/ti-hero-slider.default', function() {
            var editorActive = $('body').hasClass('elementor-editor-active');
            if (editorActive) {}
        });
        elementorFrontend.hooks.addAction('frontend/element_ready/global', function($scope) {});
        elementorFrontend.hooks.addAction('frontend/element_ready/widget', function($scope) {
            var editorActive = $('body').hasClass('elementor-editor-active');
            if (editorActive) {}
        });
    });
}
)(jQuery);
(function($) {
    'use strict';
    var isIe = /(trident|msie)/i.test(navigator.userAgent);
    if (isIe && document.getElementById && window.addEventListener) {
        window.addEventListener('hashchange', function() {
            var id = location.hash.substring(1), element;
            if (!(/^[A-z0-9_-]+$/.test(id))) {
                return;
            }
            element = document.getElementById(id);
            if (element) {
                if (!(/^(?:a|select|input|button|textarea)$/i.test(element.tagName))) {
                    element.tabIndex = -1;
                }
                element.focus();
            }
        }, false);
    }
}
)(jQuery);
/*!
  * Bootstrap v5.0.0-beta1 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e()
}(this, (function() {
    "use strict";
    function t(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i)
        }
    }
    function e(e, n, i) {
        return n && t(e.prototype, n),
        i && t(e, i),
        e
    }
    function n() {
        return (n = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n)
                    Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
        }
        ).apply(this, arguments)
    }
    function i(t, e) {
        t.prototype = Object.create(e.prototype),
        t.prototype.constructor = t,
        t.__proto__ = e
    }
    var o, r, s = function(t) {
        do {
            t += Math.floor(1e6 * Math.random())
        } while (document.getElementById(t));
        return t
    }, a = function(t) {
        var e = t.getAttribute("data-bs-target");
        if (!e || "#" === e) {
            var n = t.getAttribute("href");
            e = n && "#" !== n ? n.trim() : null
        }
        return e
    }, l = function(t) {
        var e = a(t);
        return e && document.querySelector(e) ? e : null
    }, c = function(t) {
        var e = a(t);
        return e ? document.querySelector(e) : null
    }, u = function(t) {
        if (!t)
            return 0;
        var e = window.getComputedStyle(t)
          , n = e.transitionDuration
          , i = e.transitionDelay
          , o = Number.parseFloat(n)
          , r = Number.parseFloat(i);
        return o || r ? (n = n.split(",")[0],
        i = i.split(",")[0],
        1e3 * (Number.parseFloat(n) + Number.parseFloat(i))) : 0
    }, f = function(t) {
        t.dispatchEvent(new Event("transitionend"))
    }, d = function(t) {
        return (t[0] || t).nodeType
    }, h = function(t, e) {
        var n = !1
          , i = e + 5;
        t.addEventListener("transitionend", (function e() {
            n = !0,
            t.removeEventListener("transitionend", e)
        }
        )),
        setTimeout((function() {
            n || f(t)
        }
        ), i)
    }, p = function(t, e, n) {
        Object.keys(n).forEach((function(i) {
            var o, r = n[i], s = e[i], a = s && d(s) ? "element" : null == (o = s) ? "" + o : {}.toString.call(o).match(/\s([a-z]+)/i)[1].toLowerCase();
            if (!new RegExp(r).test(a))
                throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + a + '" but expected type "' + r + '".')
        }
        ))
    }, g = function(t) {
        if (!t)
            return !1;
        if (t.style && t.parentNode && t.parentNode.style) {
            var e = getComputedStyle(t)
              , n = getComputedStyle(t.parentNode);
            return "none" !== e.display && "none" !== n.display && "hidden" !== e.visibility
        }
        return !1
    }, m = function() {
        return function() {}
    }, v = function(t) {
        return t.offsetHeight
    }, _ = function() {
        var t = window.jQuery;
        return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null
    }, b = function(t) {
        "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", t) : t()
    }, y = "rtl" === document.documentElement.dir, w = (o = {},
    r = 1,
    {
        set: function(t, e, n) {
            void 0 === t.bsKey && (t.bsKey = {
                key: e,
                id: r
            },
            r++),
            o[t.bsKey.id] = n
        },
        get: function(t, e) {
            if (!t || void 0 === t.bsKey)
                return null;
            var n = t.bsKey;
            return n.key === e ? o[n.id] : null
        },
        delete: function(t, e) {
            if (void 0 !== t.bsKey) {
                var n = t.bsKey;
                n.key === e && (delete o[n.id],
                delete t.bsKey)
            }
        }
    }), E = function(t, e, n) {
        w.set(t, e, n)
    }, T = function(t, e) {
        return w.get(t, e)
    }, k = function(t, e) {
        w.delete(t, e)
    }, O = /[^.]*(?=\..*)\.|.*/, L = /\..*/, A = /::\d+$/, C = {}, D = 1, x = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, S = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
    function j(t, e) {
        return e && e + "::" + D++ || t.uidEvent || D++
    }
    function N(t) {
        var e = j(t);
        return t.uidEvent = e,
        C[e] = C[e] || {},
        C[e]
    }
    function I(t, e, n) {
        void 0 === n && (n = null);
        for (var i = Object.keys(t), o = 0, r = i.length; o < r; o++) {
            var s = t[i[o]];
            if (s.originalHandler === e && s.delegationSelector === n)
                return s
        }
        return null
    }
    function P(t, e, n) {
        var i = "string" == typeof e
          , o = i ? n : e
          , r = t.replace(L, "")
          , s = x[r];
        return s && (r = s),
        S.has(r) || (r = t),
        [i, o, r]
    }
    function M(t, e, n, i, o) {
        if ("string" == typeof e && t) {
            n || (n = i,
            i = null);
            var r = P(e, n, i)
              , s = r[0]
              , a = r[1]
              , l = r[2]
              , c = N(t)
              , u = c[l] || (c[l] = {})
              , f = I(u, a, s ? n : null);
            if (f)
                f.oneOff = f.oneOff && o;
            else {
                var d = j(a, e.replace(O, ""))
                  , h = s ? function(t, e, n) {
                    return function i(o) {
                        for (var r = t.querySelectorAll(e), s = o.target; s && s !== this; s = s.parentNode)
                            for (var a = r.length; a--; )
                                if (r[a] === s)
                                    return o.delegateTarget = s,
                                    i.oneOff && H.off(t, o.type, n),
                                    n.apply(s, [o]);
                        return null
                    }
                }(t, n, i) : function(t, e) {
                    return function n(i) {
                        return i.delegateTarget = t,
                        n.oneOff && H.off(t, i.type, e),
                        e.apply(t, [i])
                    }
                }(t, n);
                h.delegationSelector = s ? n : null,
                h.originalHandler = a,
                h.oneOff = o,
                h.uidEvent = d,
                u[d] = h,
                t.addEventListener(l, h, s)
            }
        }
    }
    function B(t, e, n, i, o) {
        var r = I(e[n], i, o);
        r && (t.removeEventListener(n, r, Boolean(o)),
        delete e[n][r.uidEvent])
    }
    var H = {
        on: function(t, e, n, i) {
            M(t, e, n, i, !1)
        },
        one: function(t, e, n, i) {
            M(t, e, n, i, !0)
        },
        off: function(t, e, n, i) {
            if ("string" == typeof e && t) {
                var o = P(e, n, i)
                  , r = o[0]
                  , s = o[1]
                  , a = o[2]
                  , l = a !== e
                  , c = N(t)
                  , u = e.startsWith(".");
                if (void 0 === s) {
                    u && Object.keys(c).forEach((function(n) {
                        !function(t, e, n, i) {
                            var o = e[n] || {};
                            Object.keys(o).forEach((function(r) {
                                if (r.includes(i)) {
                                    var s = o[r];
                                    B(t, e, n, s.originalHandler, s.delegationSelector)
                                }
                            }
                            ))
                        }(t, c, n, e.slice(1))
                    }
                    ));
                    var f = c[a] || {};
                    Object.keys(f).forEach((function(n) {
                        var i = n.replace(A, "");
                        if (!l || e.includes(i)) {
                            var o = f[n];
                            B(t, c, a, o.originalHandler, o.delegationSelector)
                        }
                    }
                    ))
                } else {
                    if (!c || !c[a])
                        return;
                    B(t, c, a, s, r ? n : null)
                }
            }
        },
        trigger: function(t, e, n) {
            if ("string" != typeof e || !t)
                return null;
            var i, o = _(), r = e.replace(L, ""), s = e !== r, a = S.has(r), l = !0, c = !0, u = !1, f = null;
            return s && o && (i = o.Event(e, n),
            o(t).trigger(i),
            l = !i.isPropagationStopped(),
            c = !i.isImmediatePropagationStopped(),
            u = i.isDefaultPrevented()),
            a ? (f = document.createEvent("HTMLEvents")).initEvent(r, l, !0) : f = new CustomEvent(e,{
                bubbles: l,
                cancelable: !0
            }),
            void 0 !== n && Object.keys(n).forEach((function(t) {
                Object.defineProperty(f, t, {
                    get: function() {
                        return n[t]
                    }
                })
            }
            )),
            u && f.preventDefault(),
            c && t.dispatchEvent(f),
            f.defaultPrevented && void 0 !== i && i.preventDefault(),
            f
        }
    }
      , R = function() {
        function t(t) {
            t && (this._element = t,
            E(t, this.constructor.DATA_KEY, this))
        }
        return t.prototype.dispose = function() {
            k(this._element, this.constructor.DATA_KEY),
            this._element = null
        }
        ,
        t.getInstance = function(t) {
            return T(t, this.DATA_KEY)
        }
        ,
        e(t, null, [{
            key: "VERSION",
            get: function() {
                return "5.0.0-beta1"
            }
        }]),
        t
    }()
      , W = "alert"
      , K = function(t) {
        function n() {
            return t.apply(this, arguments) || this
        }
        i(n, t);
        var o = n.prototype;
        return o.close = function(t) {
            var e = t ? this._getRootElement(t) : this._element
              , n = this._triggerCloseEvent(e);
            null === n || n.defaultPrevented || this._removeElement(e)
        }
        ,
        o._getRootElement = function(t) {
            return c(t) || t.closest(".alert")
        }
        ,
        o._triggerCloseEvent = function(t) {
            return H.trigger(t, "close.bs.alert")
        }
        ,
        o._removeElement = function(t) {
            var e = this;
            if (t.classList.remove("show"),
            t.classList.contains("fade")) {
                var n = u(t);
                H.one(t, "transitionend", (function() {
                    return e._destroyElement(t)
                }
                )),
                h(t, n)
            } else
                this._destroyElement(t)
        }
        ,
        o._destroyElement = function(t) {
            t.parentNode && t.parentNode.removeChild(t),
            H.trigger(t, "closed.bs.alert")
        }
        ,
        n.jQueryInterface = function(t) {
            return this.each((function() {
                var e = T(this, "bs.alert");
                e || (e = new n(this)),
                "close" === t && e[t](this)
            }
            ))
        }
        ,
        n.handleDismiss = function(t) {
            return function(e) {
                e && e.preventDefault(),
                t.close(this)
            }
        }
        ,
        e(n, null, [{
            key: "DATA_KEY",
            get: function() {
                return "bs.alert"
            }
        }]),
        n
    }(R);
    H.on(document, "click.bs.alert.data-api", '[data-bs-dismiss="alert"]', K.handleDismiss(new K)),
    b((function() {
        var t = _();
        if (t) {
            var e = t.fn[W];
            t.fn[W] = K.jQueryInterface,
            t.fn[W].Constructor = K,
            t.fn[W].noConflict = function() {
                return t.fn[W] = e,
                K.jQueryInterface
            }
        }
    }
    ));
    var Q = function(t) {
        function n() {
            return t.apply(this, arguments) || this
        }
        return i(n, t),
        n.prototype.toggle = function() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
        }
        ,
        n.jQueryInterface = function(t) {
            return this.each((function() {
                var e = T(this, "bs.button");
                e || (e = new n(this)),
                "toggle" === t && e[t]()
            }
            ))
        }
        ,
        e(n, null, [{
            key: "DATA_KEY",
            get: function() {
                return "bs.button"
            }
        }]),
        n
    }(R);
    function U(t) {
        return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t)
    }
    function F(t) {
        return t.replace(/[A-Z]/g, (function(t) {
            return "-" + t.toLowerCase()
        }
        ))
    }
    H.on(document, "click.bs.button.data-api", '[data-bs-toggle="button"]', (function(t) {
        t.preventDefault();
        var e = t.target.closest('[data-bs-toggle="button"]')
          , n = T(e, "bs.button");
        n || (n = new Q(e)),
        n.toggle()
    }
    )),
    b((function() {
        var t = _();
        if (t) {
            var e = t.fn.button;
            t.fn.button = Q.jQueryInterface,
            t.fn.button.Constructor = Q,
            t.fn.button.noConflict = function() {
                return t.fn.button = e,
                Q.jQueryInterface
            }
        }
    }
    ));
    var Y = {
        setDataAttribute: function(t, e, n) {
            t.setAttribute("data-bs-" + F(e), n)
        },
        removeDataAttribute: function(t, e) {
            t.removeAttribute("data-bs-" + F(e))
        },
        getDataAttributes: function(t) {
            if (!t)
                return {};
            var e = {};
            return Object.keys(t.dataset).filter((function(t) {
                return t.startsWith("bs")
            }
            )).forEach((function(n) {
                var i = n.replace(/^bs/, "");
                i = i.charAt(0).toLowerCase() + i.slice(1, i.length),
                e[i] = U(t.dataset[n])
            }
            )),
            e
        },
        getDataAttribute: function(t, e) {
            return U(t.getAttribute("data-bs-" + F(e)))
        },
        offset: function(t) {
            var e = t.getBoundingClientRect();
            return {
                top: e.top + document.body.scrollTop,
                left: e.left + document.body.scrollLeft
            }
        },
        position: function(t) {
            return {
                top: t.offsetTop,
                left: t.offsetLeft
            }
        }
    }
      , q = {
        matches: function(t, e) {
            return t.matches(e)
        },
        find: function(t, e) {
            var n;
            return void 0 === e && (e = document.documentElement),
            (n = []).concat.apply(n, Element.prototype.querySelectorAll.call(e, t))
        },
        findOne: function(t, e) {
            return void 0 === e && (e = document.documentElement),
            Element.prototype.querySelector.call(e, t)
        },
        children: function(t, e) {
            var n, i = (n = []).concat.apply(n, t.children);
            return i.filter((function(t) {
                return t.matches(e)
            }
            ))
        },
        parents: function(t, e) {
            for (var n = [], i = t.parentNode; i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType; )
                this.matches(i, e) && n.push(i),
                i = i.parentNode;
            return n
        },
        prev: function(t, e) {
            for (var n = t.previousElementSibling; n; ) {
                if (n.matches(e))
                    return [n];
                n = n.previousElementSibling
            }
            return []
        },
        next: function(t, e) {
            for (var n = t.nextElementSibling; n; ) {
                if (this.matches(n, e))
                    return [n];
                n = n.nextElementSibling
            }
            return []
        }
    }
      , z = "carousel"
      , V = ".bs.carousel"
      , X = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0
    }
      , $ = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean"
    }
      , G = {
        TOUCH: "touch",
        PEN: "pen"
    }
      , Z = function(t) {
        function o(e, n) {
            var i;
            return (i = t.call(this, e) || this)._items = null,
            i._interval = null,
            i._activeElement = null,
            i._isPaused = !1,
            i._isSliding = !1,
            i.touchTimeout = null,
            i.touchStartX = 0,
            i.touchDeltaX = 0,
            i._config = i._getConfig(n),
            i._indicatorsElement = q.findOne(".carousel-indicators", i._element),
            i._touchSupported = "ontouchstart"in document.documentElement || navigator.maxTouchPoints > 0,
            i._pointerEvent = Boolean(window.PointerEvent),
            i._addEventListeners(),
            i
        }
        i(o, t);
        var r = o.prototype;
        return r.next = function() {
            this._isSliding || this._slide("next")
        }
        ,
        r.nextWhenVisible = function() {
            !document.hidden && g(this._element) && this.next()
        }
        ,
        r.prev = function() {
            this._isSliding || this._slide("prev")
        }
        ,
        r.pause = function(t) {
            t || (this._isPaused = !0),
            q.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (f(this._element),
            this.cycle(!0)),
            clearInterval(this._interval),
            this._interval = null
        }
        ,
        r.cycle = function(t) {
            t || (this._isPaused = !1),
            this._interval && (clearInterval(this._interval),
            this._interval = null),
            this._config && this._config.interval && !this._isPaused && (this._updateInterval(),
            this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }
        ,
        r.to = function(t) {
            var e = this;
            this._activeElement = q.findOne(".active.carousel-item", this._element);
            var n = this._getItemIndex(this._activeElement);
            if (!(t > this._items.length - 1 || t < 0))
                if (this._isSliding)
                    H.one(this._element, "slid.bs.carousel", (function() {
                        return e.to(t)
                    }
                    ));
                else {
                    if (n === t)
                        return this.pause(),
                        void this.cycle();
                    var i = t > n ? "next" : "prev";
                    this._slide(i, this._items[t])
                }
        }
        ,
        r.dispose = function() {
            t.prototype.dispose.call(this),
            H.off(this._element, V),
            this._items = null,
            this._config = null,
            this._interval = null,
            this._isPaused = null,
            this._isSliding = null,
            this._activeElement = null,
            this._indicatorsElement = null
        }
        ,
        r._getConfig = function(t) {
            return t = n({}, X, t),
            p(z, t, $),
            t
        }
        ,
        r._handleSwipe = function() {
            var t = Math.abs(this.touchDeltaX);
            if (!(t <= 40)) {
                var e = t / this.touchDeltaX;
                this.touchDeltaX = 0,
                e > 0 && this.prev(),
                e < 0 && this.next()
            }
        }
        ,
        r._addEventListeners = function() {
            var t = this;
            this._config.keyboard && H.on(this._element, "keydown.bs.carousel", (function(e) {
                return t._keydown(e)
            }
            )),
            "hover" === this._config.pause && (H.on(this._element, "mouseenter.bs.carousel", (function(e) {
                return t.pause(e)
            }
            )),
            H.on(this._element, "mouseleave.bs.carousel", (function(e) {
                return t.cycle(e)
            }
            ))),
            this._config.touch && this._touchSupported && this._addTouchEventListeners()
        }
        ,
        r._addTouchEventListeners = function() {
            var t = this
              , e = function(e) {
                t._pointerEvent && G[e.pointerType.toUpperCase()] ? t.touchStartX = e.clientX : t._pointerEvent || (t.touchStartX = e.touches[0].clientX)
            }
              , n = function(e) {
                t._pointerEvent && G[e.pointerType.toUpperCase()] && (t.touchDeltaX = e.clientX - t.touchStartX),
                t._handleSwipe(),
                "hover" === t._config.pause && (t.pause(),
                t.touchTimeout && clearTimeout(t.touchTimeout),
                t.touchTimeout = setTimeout((function(e) {
                    return t.cycle(e)
                }
                ), 500 + t._config.interval))
            };
            q.find(".carousel-item img", this._element).forEach((function(t) {
                H.on(t, "dragstart.bs.carousel", (function(t) {
                    return t.preventDefault()
                }
                ))
            }
            )),
            this._pointerEvent ? (H.on(this._element, "pointerdown.bs.carousel", (function(t) {
                return e(t)
            }
            )),
            H.on(this._element, "pointerup.bs.carousel", (function(t) {
                return n(t)
            }
            )),
            this._element.classList.add("pointer-event")) : (H.on(this._element, "touchstart.bs.carousel", (function(t) {
                return e(t)
            }
            )),
            H.on(this._element, "touchmove.bs.carousel", (function(e) {
                return function(e) {
                    e.touches && e.touches.length > 1 ? t.touchDeltaX = 0 : t.touchDeltaX = e.touches[0].clientX - t.touchStartX
                }(e)
            }
            )),
            H.on(this._element, "touchend.bs.carousel", (function(t) {
                return n(t)
            }
            )))
        }
        ,
        r._keydown = function(t) {
            if (!/input|textarea/i.test(t.target.tagName))
                switch (t.key) {
                case "ArrowLeft":
                    t.preventDefault(),
                    this.prev();
                    break;
                case "ArrowRight":
                    t.preventDefault(),
                    this.next()
                }
        }
        ,
        r._getItemIndex = function(t) {
            return this._items = t && t.parentNode ? q.find(".carousel-item", t.parentNode) : [],
            this._items.indexOf(t)
        }
        ,
        r._getItemByDirection = function(t, e) {
            var n = "next" === t
              , i = "prev" === t
              , o = this._getItemIndex(e)
              , r = this._items.length - 1;
            if ((i && 0 === o || n && o === r) && !this._config.wrap)
                return e;
            var s = (o + ("prev" === t ? -1 : 1)) % this._items.length;
            return -1 === s ? this._items[this._items.length - 1] : this._items[s]
        }
        ,
        r._triggerSlideEvent = function(t, e) {
            var n = this._getItemIndex(t)
              , i = this._getItemIndex(q.findOne(".active.carousel-item", this._element));
            return H.trigger(this._element, "slide.bs.carousel", {
                relatedTarget: t,
                direction: e,
                from: i,
                to: n
            })
        }
        ,
        r._setActiveIndicatorElement = function(t) {
            if (this._indicatorsElement) {
                for (var e = q.find(".active", this._indicatorsElement), n = 0; n < e.length; n++)
                    e[n].classList.remove("active");
                var i = this._indicatorsElement.children[this._getItemIndex(t)];
                i && i.classList.add("active")
            }
        }
        ,
        r._updateInterval = function() {
            var t = this._activeElement || q.findOne(".active.carousel-item", this._element);
            if (t) {
                var e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
                e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval,
                this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval
            }
        }
        ,
        r._slide = function(t, e) {
            var n, i, o, r = this, s = q.findOne(".active.carousel-item", this._element), a = this._getItemIndex(s), l = e || s && this._getItemByDirection(t, s), c = this._getItemIndex(l), f = Boolean(this._interval);
            if ("next" === t ? (n = "carousel-item-start",
            i = "carousel-item-next",
            o = "left") : (n = "carousel-item-end",
            i = "carousel-item-prev",
            o = "right"),
            l && l.classList.contains("active"))
                this._isSliding = !1;
            else if (!this._triggerSlideEvent(l, o).defaultPrevented && s && l) {
                if (this._isSliding = !0,
                f && this.pause(),
                this._setActiveIndicatorElement(l),
                this._activeElement = l,
                this._element.classList.contains("slide")) {
                    l.classList.add(i),
                    v(l),
                    s.classList.add(n),
                    l.classList.add(n);
                    var d = u(s);
                    H.one(s, "transitionend", (function() {
                        l.classList.remove(n, i),
                        l.classList.add("active"),
                        s.classList.remove("active", i, n),
                        r._isSliding = !1,
                        setTimeout((function() {
                            H.trigger(r._element, "slid.bs.carousel", {
                                relatedTarget: l,
                                direction: o,
                                from: a,
                                to: c
                            })
                        }
                        ), 0)
                    }
                    )),
                    h(s, d)
                } else
                    s.classList.remove("active"),
                    l.classList.add("active"),
                    this._isSliding = !1,
                    H.trigger(this._element, "slid.bs.carousel", {
                        relatedTarget: l,
                        direction: o,
                        from: a,
                        to: c
                    });
                f && this.cycle()
            }
        }
        ,
        o.carouselInterface = function(t, e) {
            var i = T(t, "bs.carousel")
              , r = n({}, X, Y.getDataAttributes(t));
            "object" == typeof e && (r = n({}, r, e));
            var s = "string" == typeof e ? e : r.slide;
            if (i || (i = new o(t,r)),
            "number" == typeof e)
                i.to(e);
            else if ("string" == typeof s) {
                if (void 0 === i[s])
                    throw new TypeError('No method named "' + s + '"');
                i[s]()
            } else
                r.interval && r.ride && (i.pause(),
                i.cycle())
        }
        ,
        o.jQueryInterface = function(t) {
            return this.each((function() {
                o.carouselInterface(this, t)
            }
            ))
        }
        ,
        o.dataApiClickHandler = function(t) {
            var e = c(this);
            if (e && e.classList.contains("carousel")) {
                var i = n({}, Y.getDataAttributes(e), Y.getDataAttributes(this))
                  , r = this.getAttribute("data-bs-slide-to");
                r && (i.interval = !1),
                o.carouselInterface(e, i),
                r && T(e, "bs.carousel").to(r),
                t.preventDefault()
            }
        }
        ,
        e(o, null, [{
            key: "Default",
            get: function() {
                return X
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return "bs.carousel"
            }
        }]),
        o
    }(R);
    H.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", Z.dataApiClickHandler),
    H.on(window, "load.bs.carousel.data-api", (function() {
        for (var t = q.find('[data-bs-ride="carousel"]'), e = 0, n = t.length; e < n; e++)
            Z.carouselInterface(t[e], T(t[e], "bs.carousel"))
    }
    )),
    b((function() {
        var t = _();
        if (t) {
            var e = t.fn[z];
            t.fn[z] = Z.jQueryInterface,
            t.fn[z].Constructor = Z,
            t.fn[z].noConflict = function() {
                return t.fn[z] = e,
                Z.jQueryInterface
            }
        }
    }
    ));
    var J = "collapse"
      , tt = {
        toggle: !0,
        parent: ""
    }
      , et = {
        toggle: "boolean",
        parent: "(string|element)"
    }
      , nt = function(t) {
        function o(e, n) {
            var i;
            (i = t.call(this, e) || this)._isTransitioning = !1,
            i._config = i._getConfig(n),
            i._triggerArray = q.find('[data-bs-toggle="collapse"][href="#' + e.id + '"],[data-bs-toggle="collapse"][data-bs-target="#' + e.id + '"]');
            for (var o = q.find('[data-bs-toggle="collapse"]'), r = 0, s = o.length; r < s; r++) {
                var a = o[r]
                  , c = l(a)
                  , u = q.find(c).filter((function(t) {
                    return t === e
                }
                ));
                null !== c && u.length && (i._selector = c,
                i._triggerArray.push(a))
            }
            return i._parent = i._config.parent ? i._getParent() : null,
            i._config.parent || i._addAriaAndCollapsedClass(i._element, i._triggerArray),
            i._config.toggle && i.toggle(),
            i
        }
        i(o, t);
        var r = o.prototype;
        return r.toggle = function() {
            this._element.classList.contains("show") ? this.hide() : this.show()
        }
        ,
        r.show = function() {
            var t = this;
            if (!this._isTransitioning && !this._element.classList.contains("show")) {
                var e, n;
                this._parent && 0 === (e = q.find(".show, .collapsing", this._parent).filter((function(e) {
                    return "string" == typeof t._config.parent ? e.getAttribute("data-bs-parent") === t._config.parent : e.classList.contains("collapse")
                }
                ))).length && (e = null);
                var i = q.findOne(this._selector);
                if (e) {
                    var r = e.find((function(t) {
                        return i !== t
                    }
                    ));
                    if ((n = r ? T(r, "bs.collapse") : null) && n._isTransitioning)
                        return
                }
                if (!H.trigger(this._element, "show.bs.collapse").defaultPrevented) {
                    e && e.forEach((function(t) {
                        i !== t && o.collapseInterface(t, "hide"),
                        n || E(t, "bs.collapse", null)
                    }
                    ));
                    var s = this._getDimension();
                    this._element.classList.remove("collapse"),
                    this._element.classList.add("collapsing"),
                    this._element.style[s] = 0,
                    this._triggerArray.length && this._triggerArray.forEach((function(t) {
                        t.classList.remove("collapsed"),
                        t.setAttribute("aria-expanded", !0)
                    }
                    )),
                    this.setTransitioning(!0);
                    var a = "scroll" + (s[0].toUpperCase() + s.slice(1))
                      , l = u(this._element);
                    H.one(this._element, "transitionend", (function() {
                        t._element.classList.remove("collapsing"),
                        t._element.classList.add("collapse", "show"),
                        t._element.style[s] = "",
                        t.setTransitioning(!1),
                        H.trigger(t._element, "shown.bs.collapse")
                    }
                    )),
                    h(this._element, l),
                    this._element.style[s] = this._element[a] + "px"
                }
            }
        }
        ,
        r.hide = function() {
            var t = this;
            if (!this._isTransitioning && this._element.classList.contains("show") && !H.trigger(this._element, "hide.bs.collapse").defaultPrevented) {
                var e = this._getDimension();
                this._element.style[e] = this._element.getBoundingClientRect()[e] + "px",
                v(this._element),
                this._element.classList.add("collapsing"),
                this._element.classList.remove("collapse", "show");
                var n = this._triggerArray.length;
                if (n > 0)
                    for (var i = 0; i < n; i++) {
                        var o = this._triggerArray[i]
                          , r = c(o);
                        r && !r.classList.contains("show") && (o.classList.add("collapsed"),
                        o.setAttribute("aria-expanded", !1))
                    }
                this.setTransitioning(!0);
                this._element.style[e] = "";
                var s = u(this._element);
                H.one(this._element, "transitionend", (function() {
                    t.setTransitioning(!1),
                    t._element.classList.remove("collapsing"),
                    t._element.classList.add("collapse"),
                    H.trigger(t._element, "hidden.bs.collapse")
                }
                )),
                h(this._element, s)
            }
        }
        ,
        r.setTransitioning = function(t) {
            this._isTransitioning = t
        }
        ,
        r.dispose = function() {
            t.prototype.dispose.call(this),
            this._config = null,
            this._parent = null,
            this._triggerArray = null,
            this._isTransitioning = null
        }
        ,
        r._getConfig = function(t) {
            return (t = n({}, tt, t)).toggle = Boolean(t.toggle),
            p(J, t, et),
            t
        }
        ,
        r._getDimension = function() {
            return this._element.classList.contains("width") ? "width" : "height"
        }
        ,
        r._getParent = function() {
            var t = this
              , e = this._config.parent;
            d(e) ? void 0 === e.jquery && void 0 === e[0] || (e = e[0]) : e = q.findOne(e);
            var n = '[data-bs-toggle="collapse"][data-bs-parent="' + e + '"]';
            return q.find(n, e).forEach((function(e) {
                var n = c(e);
                t._addAriaAndCollapsedClass(n, [e])
            }
            )),
            e
        }
        ,
        r._addAriaAndCollapsedClass = function(t, e) {
            if (t && e.length) {
                var n = t.classList.contains("show");
                e.forEach((function(t) {
                    n ? t.classList.remove("collapsed") : t.classList.add("collapsed"),
                    t.setAttribute("aria-expanded", n)
                }
                ))
            }
        }
        ,
        o.collapseInterface = function(t, e) {
            var i = T(t, "bs.collapse")
              , r = n({}, tt, Y.getDataAttributes(t), "object" == typeof e && e ? e : {});
            if (!i && r.toggle && "string" == typeof e && /show|hide/.test(e) && (r.toggle = !1),
            i || (i = new o(t,r)),
            "string" == typeof e) {
                if (void 0 === i[e])
                    throw new TypeError('No method named "' + e + '"');
                i[e]()
            }
        }
        ,
        o.jQueryInterface = function(t) {
            return this.each((function() {
                o.collapseInterface(this, t)
            }
            ))
        }
        ,
        e(o, null, [{
            key: "Default",
            get: function() {
                return tt
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return "bs.collapse"
            }
        }]),
        o
    }(R);
    H.on(document, "click.bs.collapse.data-api", '[data-bs-toggle="collapse"]', (function(t) {
        "A" === t.target.tagName && t.preventDefault();
        var e = Y.getDataAttributes(this)
          , n = l(this);
        q.find(n).forEach((function(t) {
            var n, i = T(t, "bs.collapse");
            i ? (null === i._parent && "string" == typeof e.parent && (i._config.parent = e.parent,
            i._parent = i._getParent()),
            n = "toggle") : n = e,
            nt.collapseInterface(t, n)
        }
        ))
    }
    )),
    b((function() {
        var t = _();
        if (t) {
            var e = t.fn[J];
            t.fn[J] = nt.jQueryInterface,
            t.fn[J].Constructor = nt,
            t.fn[J].noConflict = function() {
                return t.fn[J] = e,
                nt.jQueryInterface
            }
        }
    }
    ));
    var it = "top"
      , ot = "bottom"
      , rt = "right"
      , st = "left"
      , at = [it, ot, rt, st]
      , lt = at.reduce((function(t, e) {
        return t.concat([e + "-start", e + "-end"])
    }
    ), [])
      , ct = [].concat(at, ["auto"]).reduce((function(t, e) {
        return t.concat([e, e + "-start", e + "-end"])
    }
    ), [])
      , ut = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];
    function ft(t) {
        return t ? (t.nodeName || "").toLowerCase() : null
    }
    function dt(t) {
        if ("[object Window]" !== t.toString()) {
            var e = t.ownerDocument;
            return e && e.defaultView || window
        }
        return t
    }
    function ht(t) {
        return t instanceof dt(t).Element || t instanceof Element
    }
    function pt(t) {
        return t instanceof dt(t).HTMLElement || t instanceof HTMLElement
    }
    var gt = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function(t) {
            var e = t.state;
            Object.keys(e.elements).forEach((function(t) {
                var n = e.styles[t] || {}
                  , i = e.attributes[t] || {}
                  , o = e.elements[t];
                pt(o) && ft(o) && (Object.assign(o.style, n),
                Object.keys(i).forEach((function(t) {
                    var e = i[t];
                    !1 === e ? o.removeAttribute(t) : o.setAttribute(t, !0 === e ? "" : e)
                }
                )))
            }
            ))
        },
        effect: function(t) {
            var e = t.state
              , n = {
                popper: {
                    position: e.options.strategy,
                    left: "0",
                    top: "0",
                    margin: "0"
                },
                arrow: {
                    position: "absolute"
                },
                reference: {}
            };
            return Object.assign(e.elements.popper.style, n.popper),
            e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow),
            function() {
                Object.keys(e.elements).forEach((function(t) {
                    var i = e.elements[t]
                      , o = e.attributes[t] || {}
                      , r = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : n[t]).reduce((function(t, e) {
                        return t[e] = "",
                        t
                    }
                    ), {});
                    pt(i) && ft(i) && (Object.assign(i.style, r),
                    Object.keys(o).forEach((function(t) {
                        i.removeAttribute(t)
                    }
                    )))
                }
                ))
            }
        },
        requires: ["computeStyles"]
    };
    function mt(t) {
        return t.split("-")[0]
    }
    function vt(t) {
        return {
            x: t.offsetLeft,
            y: t.offsetTop,
            width: t.offsetWidth,
            height: t.offsetHeight
        }
    }
    function _t(t, e) {
        var n, i = e.getRootNode && e.getRootNode();
        if (t.contains(e))
            return !0;
        if (i && ((n = i)instanceof dt(n).ShadowRoot || n instanceof ShadowRoot)) {
            var o = e;
            do {
                if (o && t.isSameNode(o))
                    return !0;
                o = o.parentNode || o.host
            } while (o)
        }
        return !1
    }
    function bt(t) {
        return dt(t).getComputedStyle(t)
    }
    function yt(t) {
        return ["table", "td", "th"].indexOf(ft(t)) >= 0
    }
    function wt(t) {
        return ((ht(t) ? t.ownerDocument : t.document) || window.document).documentElement
    }
    function Et(t) {
        return "html" === ft(t) ? t : t.assignedSlot || t.parentNode || t.host || wt(t)
    }
    function Tt(t) {
        if (!pt(t) || "fixed" === bt(t).position)
            return null;
        var e = t.offsetParent;
        if (e) {
            var n = wt(e);
            if ("body" === ft(e) && "static" === bt(e).position && "static" !== bt(n).position)
                return n
        }
        return e
    }
    function kt(t) {
        for (var e = dt(t), n = Tt(t); n && yt(n) && "static" === bt(n).position; )
            n = Tt(n);
        return n && "body" === ft(n) && "static" === bt(n).position ? e : n || function(t) {
            for (var e = Et(t); pt(e) && ["html", "body"].indexOf(ft(e)) < 0; ) {
                var n = bt(e);
                if ("none" !== n.transform || "none" !== n.perspective || n.willChange && "auto" !== n.willChange)
                    return e;
                e = e.parentNode
            }
            return null
        }(t) || e
    }
    function Ot(t) {
        return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y"
    }
    function Lt(t, e, n) {
        return Math.max(t, Math.min(e, n))
    }
    function At(t) {
        return Object.assign(Object.assign({}, {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }), t)
    }
    function Ct(t, e) {
        return e.reduce((function(e, n) {
            return e[n] = t,
            e
        }
        ), {})
    }
    var Dt = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e, n = t.state, i = t.name, o = n.elements.arrow, r = n.modifiersData.popperOffsets, s = mt(n.placement), a = Ot(s), l = [st, rt].indexOf(s) >= 0 ? "height" : "width";
            if (o && r) {
                var c = n.modifiersData[i + "#persistent"].padding
                  , u = vt(o)
                  , f = "y" === a ? it : st
                  , d = "y" === a ? ot : rt
                  , h = n.rects.reference[l] + n.rects.reference[a] - r[a] - n.rects.popper[l]
                  , p = r[a] - n.rects.reference[a]
                  , g = kt(o)
                  , m = g ? "y" === a ? g.clientHeight || 0 : g.clientWidth || 0 : 0
                  , v = h / 2 - p / 2
                  , _ = c[f]
                  , b = m - u[l] - c[d]
                  , y = m / 2 - u[l] / 2 + v
                  , w = Lt(_, y, b)
                  , E = a;
                n.modifiersData[i] = ((e = {})[E] = w,
                e.centerOffset = w - y,
                e)
            }
        },
        effect: function(t) {
            var e = t.state
              , n = t.options
              , i = t.name
              , o = n.element
              , r = void 0 === o ? "[data-popper-arrow]" : o
              , s = n.padding
              , a = void 0 === s ? 0 : s;
            null != r && ("string" != typeof r || (r = e.elements.popper.querySelector(r))) && _t(e.elements.popper, r) && (e.elements.arrow = r,
            e.modifiersData[i + "#persistent"] = {
                padding: At("number" != typeof a ? a : Ct(a, at))
            })
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"]
    }
      , xt = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
    };
    function St(t) {
        var e, n = t.popper, i = t.popperRect, o = t.placement, r = t.offsets, s = t.position, a = t.gpuAcceleration, l = t.adaptive, c = function(t) {
            var e = t.x
              , n = t.y
              , i = window.devicePixelRatio || 1;
            return {
                x: Math.round(e * i) / i || 0,
                y: Math.round(n * i) / i || 0
            }
        }(r), u = c.x, f = c.y, d = r.hasOwnProperty("x"), h = r.hasOwnProperty("y"), p = st, g = it, m = window;
        if (l) {
            var v = kt(n);
            v === dt(n) && (v = wt(n)),
            o === it && (g = ot,
            f -= v.clientHeight - i.height,
            f *= a ? 1 : -1),
            o === st && (p = rt,
            u -= v.clientWidth - i.width,
            u *= a ? 1 : -1)
        }
        var _, b = Object.assign({
            position: s
        }, l && xt);
        return a ? Object.assign(Object.assign({}, b), {}, ((_ = {})[g] = h ? "0" : "",
        _[p] = d ? "0" : "",
        _.transform = (m.devicePixelRatio || 1) < 2 ? "translate(" + u + "px, " + f + "px)" : "translate3d(" + u + "px, " + f + "px, 0)",
        _)) : Object.assign(Object.assign({}, b), {}, ((e = {})[g] = h ? f + "px" : "",
        e[p] = d ? u + "px" : "",
        e.transform = "",
        e))
    }
    var jt = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function(t) {
            var e = t.state
              , n = t.options
              , i = n.gpuAcceleration
              , o = void 0 === i || i
              , r = n.adaptive
              , s = void 0 === r || r
              , a = {
                placement: mt(e.placement),
                popper: e.elements.popper,
                popperRect: e.rects.popper,
                gpuAcceleration: o
            };
            null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign(Object.assign({}, e.styles.popper), St(Object.assign(Object.assign({}, a), {}, {
                offsets: e.modifiersData.popperOffsets,
                position: e.options.strategy,
                adaptive: s
            })))),
            null != e.modifiersData.arrow && (e.styles.arrow = Object.assign(Object.assign({}, e.styles.arrow), St(Object.assign(Object.assign({}, a), {}, {
                offsets: e.modifiersData.arrow,
                position: "absolute",
                adaptive: !1
            })))),
            e.attributes.popper = Object.assign(Object.assign({}, e.attributes.popper), {}, {
                "data-popper-placement": e.placement
            })
        },
        data: {}
    }
      , Nt = {
        passive: !0
    };
    var It = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function() {},
        effect: function(t) {
            var e = t.state
              , n = t.instance
              , i = t.options
              , o = i.scroll
              , r = void 0 === o || o
              , s = i.resize
              , a = void 0 === s || s
              , l = dt(e.elements.popper)
              , c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
            return r && c.forEach((function(t) {
                t.addEventListener("scroll", n.update, Nt)
            }
            )),
            a && l.addEventListener("resize", n.update, Nt),
            function() {
                r && c.forEach((function(t) {
                    t.removeEventListener("scroll", n.update, Nt)
                }
                )),
                a && l.removeEventListener("resize", n.update, Nt)
            }
        },
        data: {}
    }
      , Pt = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    };
    function Mt(t) {
        return t.replace(/left|right|bottom|top/g, (function(t) {
            return Pt[t]
        }
        ))
    }
    var Bt = {
        start: "end",
        end: "start"
    };
    function Ht(t) {
        return t.replace(/start|end/g, (function(t) {
            return Bt[t]
        }
        ))
    }
    function Rt(t) {
        var e = t.getBoundingClientRect();
        return {
            width: e.width,
            height: e.height,
            top: e.top,
            right: e.right,
            bottom: e.bottom,
            left: e.left,
            x: e.left,
            y: e.top
        }
    }
    function Wt(t) {
        var e = dt(t);
        return {
            scrollLeft: e.pageXOffset,
            scrollTop: e.pageYOffset
        }
    }
    function Kt(t) {
        return Rt(wt(t)).left + Wt(t).scrollLeft
    }
    function Qt(t) {
        var e = bt(t)
          , n = e.overflow
          , i = e.overflowX
          , o = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + o + i)
    }
    function Ut(t, e) {
        void 0 === e && (e = []);
        var n = function t(e) {
            return ["html", "body", "#document"].indexOf(ft(e)) >= 0 ? e.ownerDocument.body : pt(e) && Qt(e) ? e : t(Et(e))
        }(t)
          , i = "body" === ft(n)
          , o = dt(n)
          , r = i ? [o].concat(o.visualViewport || [], Qt(n) ? n : []) : n
          , s = e.concat(r);
        return i ? s : s.concat(Ut(Et(r)))
    }
    function Ft(t) {
        return Object.assign(Object.assign({}, t), {}, {
            left: t.x,
            top: t.y,
            right: t.x + t.width,
            bottom: t.y + t.height
        })
    }
    function Yt(t, e) {
        return "viewport" === e ? Ft(function(t) {
            var e = dt(t)
              , n = wt(t)
              , i = e.visualViewport
              , o = n.clientWidth
              , r = n.clientHeight
              , s = 0
              , a = 0;
            return i && (o = i.width,
            r = i.height,
            /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (s = i.offsetLeft,
            a = i.offsetTop)),
            {
                width: o,
                height: r,
                x: s + Kt(t),
                y: a
            }
        }(t)) : pt(e) ? function(t) {
            var e = Rt(t);
            return e.top = e.top + t.clientTop,
            e.left = e.left + t.clientLeft,
            e.bottom = e.top + t.clientHeight,
            e.right = e.left + t.clientWidth,
            e.width = t.clientWidth,
            e.height = t.clientHeight,
            e.x = e.left,
            e.y = e.top,
            e
        }(e) : Ft(function(t) {
            var e = wt(t)
              , n = Wt(t)
              , i = t.ownerDocument.body
              , o = Math.max(e.scrollWidth, e.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0)
              , r = Math.max(e.scrollHeight, e.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0)
              , s = -n.scrollLeft + Kt(t)
              , a = -n.scrollTop;
            return "rtl" === bt(i || e).direction && (s += Math.max(e.clientWidth, i ? i.clientWidth : 0) - o),
            {
                width: o,
                height: r,
                x: s,
                y: a
            }
        }(wt(t)))
    }
    function qt(t, e, n) {
        var i = "clippingParents" === e ? function(t) {
            var e = Ut(Et(t))
              , n = ["absolute", "fixed"].indexOf(bt(t).position) >= 0 && pt(t) ? kt(t) : t;
            return ht(n) ? e.filter((function(t) {
                return ht(t) && _t(t, n) && "body" !== ft(t)
            }
            )) : []
        }(t) : [].concat(e)
          , o = [].concat(i, [n])
          , r = o[0]
          , s = o.reduce((function(e, n) {
            var i = Yt(t, n);
            return e.top = Math.max(i.top, e.top),
            e.right = Math.min(i.right, e.right),
            e.bottom = Math.min(i.bottom, e.bottom),
            e.left = Math.max(i.left, e.left),
            e
        }
        ), Yt(t, r));
        return s.width = s.right - s.left,
        s.height = s.bottom - s.top,
        s.x = s.left,
        s.y = s.top,
        s
    }
    function zt(t) {
        return t.split("-")[1]
    }
    function Vt(t) {
        var e, n = t.reference, i = t.element, o = t.placement, r = o ? mt(o) : null, s = o ? zt(o) : null, a = n.x + n.width / 2 - i.width / 2, l = n.y + n.height / 2 - i.height / 2;
        switch (r) {
        case it:
            e = {
                x: a,
                y: n.y - i.height
            };
            break;
        case ot:
            e = {
                x: a,
                y: n.y + n.height
            };
            break;
        case rt:
            e = {
                x: n.x + n.width,
                y: l
            };
            break;
        case st:
            e = {
                x: n.x - i.width,
                y: l
            };
            break;
        default:
            e = {
                x: n.x,
                y: n.y
            }
        }
        var c = r ? Ot(r) : null;
        if (null != c) {
            var u = "y" === c ? "height" : "width";
            switch (s) {
            case "start":
                e[c] = Math.floor(e[c]) - Math.floor(n[u] / 2 - i[u] / 2);
                break;
            case "end":
                e[c] = Math.floor(e[c]) + Math.ceil(n[u] / 2 - i[u] / 2)
            }
        }
        return e
    }
    function Xt(t, e) {
        void 0 === e && (e = {});
        var n = e
          , i = n.placement
          , o = void 0 === i ? t.placement : i
          , r = n.boundary
          , s = void 0 === r ? "clippingParents" : r
          , a = n.rootBoundary
          , l = void 0 === a ? "viewport" : a
          , c = n.elementContext
          , u = void 0 === c ? "popper" : c
          , f = n.altBoundary
          , d = void 0 !== f && f
          , h = n.padding
          , p = void 0 === h ? 0 : h
          , g = At("number" != typeof p ? p : Ct(p, at))
          , m = "popper" === u ? "reference" : "popper"
          , v = t.elements.reference
          , _ = t.rects.popper
          , b = t.elements[d ? m : u]
          , y = qt(ht(b) ? b : b.contextElement || wt(t.elements.popper), s, l)
          , w = Rt(v)
          , E = Vt({
            reference: w,
            element: _,
            strategy: "absolute",
            placement: o
        })
          , T = Ft(Object.assign(Object.assign({}, _), E))
          , k = "popper" === u ? T : w
          , O = {
            top: y.top - k.top + g.top,
            bottom: k.bottom - y.bottom + g.bottom,
            left: y.left - k.left + g.left,
            right: k.right - y.right + g.right
        }
          , L = t.modifiersData.offset;
        if ("popper" === u && L) {
            var A = L[o];
            Object.keys(O).forEach((function(t) {
                var e = [rt, ot].indexOf(t) >= 0 ? 1 : -1
                  , n = [it, ot].indexOf(t) >= 0 ? "y" : "x";
                O[t] += A[n] * e
            }
            ))
        }
        return O
    }
    function $t(t, e) {
        void 0 === e && (e = {});
        var n = e
          , i = n.placement
          , o = n.boundary
          , r = n.rootBoundary
          , s = n.padding
          , a = n.flipVariations
          , l = n.allowedAutoPlacements
          , c = void 0 === l ? ct : l
          , u = zt(i)
          , f = u ? a ? lt : lt.filter((function(t) {
            return zt(t) === u
        }
        )) : at
          , d = f.filter((function(t) {
            return c.indexOf(t) >= 0
        }
        ));
        0 === d.length && (d = f);
        var h = d.reduce((function(e, n) {
            return e[n] = Xt(t, {
                placement: n,
                boundary: o,
                rootBoundary: r,
                padding: s
            })[mt(n)],
            e
        }
        ), {});
        return Object.keys(h).sort((function(t, e) {
            return h[t] - h[e]
        }
        ))
    }
    var Gt = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e = t.state
              , n = t.options
              , i = t.name;
            if (!e.modifiersData[i]._skip) {
                for (var o = n.mainAxis, r = void 0 === o || o, s = n.altAxis, a = void 0 === s || s, l = n.fallbackPlacements, c = n.padding, u = n.boundary, f = n.rootBoundary, d = n.altBoundary, h = n.flipVariations, p = void 0 === h || h, g = n.allowedAutoPlacements, m = e.options.placement, v = mt(m), _ = l || (v === m || !p ? [Mt(m)] : function(t) {
                    if ("auto" === mt(t))
                        return [];
                    var e = Mt(t);
                    return [Ht(t), e, Ht(e)]
                }(m)), b = [m].concat(_).reduce((function(t, n) {
                    return t.concat("auto" === mt(n) ? $t(e, {
                        placement: n,
                        boundary: u,
                        rootBoundary: f,
                        padding: c,
                        flipVariations: p,
                        allowedAutoPlacements: g
                    }) : n)
                }
                ), []), y = e.rects.reference, w = e.rects.popper, E = new Map, T = !0, k = b[0], O = 0; O < b.length; O++) {
                    var L = b[O]
                      , A = mt(L)
                      , C = "start" === zt(L)
                      , D = [it, ot].indexOf(A) >= 0
                      , x = D ? "width" : "height"
                      , S = Xt(e, {
                        placement: L,
                        boundary: u,
                        rootBoundary: f,
                        altBoundary: d,
                        padding: c
                    })
                      , j = D ? C ? rt : st : C ? ot : it;
                    y[x] > w[x] && (j = Mt(j));
                    var N = Mt(j)
                      , I = [];
                    if (r && I.push(S[A] <= 0),
                    a && I.push(S[j] <= 0, S[N] <= 0),
                    I.every((function(t) {
                        return t
                    }
                    ))) {
                        k = L,
                        T = !1;
                        break
                    }
                    E.set(L, I)
                }
                if (T)
                    for (var P = function(t) {
                        var e = b.find((function(e) {
                            var n = E.get(e);
                            if (n)
                                return n.slice(0, t).every((function(t) {
                                    return t
                                }
                                ))
                        }
                        ));
                        if (e)
                            return k = e,
                            "break"
                    }, M = p ? 3 : 1; M > 0; M--) {
                        if ("break" === P(M))
                            break
                    }
                e.placement !== k && (e.modifiersData[i]._skip = !0,
                e.placement = k,
                e.reset = !0)
            }
        },
        requiresIfExists: ["offset"],
        data: {
            _skip: !1
        }
    };
    function Zt(t, e, n) {
        return void 0 === n && (n = {
            x: 0,
            y: 0
        }),
        {
            top: t.top - e.height - n.y,
            right: t.right - e.width + n.x,
            bottom: t.bottom - e.height + n.y,
            left: t.left - e.width - n.x
        }
    }
    function Jt(t) {
        return [it, rt, ot, st].some((function(e) {
            return t[e] >= 0
        }
        ))
    }
    var te = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: function(t) {
            var e = t.state
              , n = t.name
              , i = e.rects.reference
              , o = e.rects.popper
              , r = e.modifiersData.preventOverflow
              , s = Xt(e, {
                elementContext: "reference"
            })
              , a = Xt(e, {
                altBoundary: !0
            })
              , l = Zt(s, i)
              , c = Zt(a, o, r)
              , u = Jt(l)
              , f = Jt(c);
            e.modifiersData[n] = {
                referenceClippingOffsets: l,
                popperEscapeOffsets: c,
                isReferenceHidden: u,
                hasPopperEscaped: f
            },
            e.attributes.popper = Object.assign(Object.assign({}, e.attributes.popper), {}, {
                "data-popper-reference-hidden": u,
                "data-popper-escaped": f
            })
        }
    };
    var ee = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function(t) {
            var e = t.state
              , n = t.options
              , i = t.name
              , o = n.offset
              , r = void 0 === o ? [0, 0] : o
              , s = ct.reduce((function(t, n) {
                return t[n] = function(t, e, n) {
                    var i = mt(t)
                      , o = [st, it].indexOf(i) >= 0 ? -1 : 1
                      , r = "function" == typeof n ? n(Object.assign(Object.assign({}, e), {}, {
                        placement: t
                    })) : n
                      , s = r[0]
                      , a = r[1];
                    return s = s || 0,
                    a = (a || 0) * o,
                    [st, rt].indexOf(i) >= 0 ? {
                        x: a,
                        y: s
                    } : {
                        x: s,
                        y: a
                    }
                }(n, e.rects, r),
                t
            }
            ), {})
              , a = s[e.placement]
              , l = a.x
              , c = a.y;
            null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += l,
            e.modifiersData.popperOffsets.y += c),
            e.modifiersData[i] = s
        }
    };
    var ne = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function(t) {
            var e = t.state
              , n = t.name;
            e.modifiersData[n] = Vt({
                reference: e.rects.reference,
                element: e.rects.popper,
                strategy: "absolute",
                placement: e.placement
            })
        },
        data: {}
    };
    var ie = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e = t.state
              , n = t.options
              , i = t.name
              , o = n.mainAxis
              , r = void 0 === o || o
              , s = n.altAxis
              , a = void 0 !== s && s
              , l = n.boundary
              , c = n.rootBoundary
              , u = n.altBoundary
              , f = n.padding
              , d = n.tether
              , h = void 0 === d || d
              , p = n.tetherOffset
              , g = void 0 === p ? 0 : p
              , m = Xt(e, {
                boundary: l,
                rootBoundary: c,
                padding: f,
                altBoundary: u
            })
              , v = mt(e.placement)
              , _ = zt(e.placement)
              , b = !_
              , y = Ot(v)
              , w = "x" === y ? "y" : "x"
              , E = e.modifiersData.popperOffsets
              , T = e.rects.reference
              , k = e.rects.popper
              , O = "function" == typeof g ? g(Object.assign(Object.assign({}, e.rects), {}, {
                placement: e.placement
            })) : g
              , L = {
                x: 0,
                y: 0
            };
            if (E) {
                if (r) {
                    var A = "y" === y ? it : st
                      , C = "y" === y ? ot : rt
                      , D = "y" === y ? "height" : "width"
                      , x = E[y]
                      , S = E[y] + m[A]
                      , j = E[y] - m[C]
                      , N = h ? -k[D] / 2 : 0
                      , I = "start" === _ ? T[D] : k[D]
                      , P = "start" === _ ? -k[D] : -T[D]
                      , M = e.elements.arrow
                      , B = h && M ? vt(M) : {
                        width: 0,
                        height: 0
                    }
                      , H = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }
                      , R = H[A]
                      , W = H[C]
                      , K = Lt(0, T[D], B[D])
                      , Q = b ? T[D] / 2 - N - K - R - O : I - K - R - O
                      , U = b ? -T[D] / 2 + N + K + W + O : P + K + W + O
                      , F = e.elements.arrow && kt(e.elements.arrow)
                      , Y = F ? "y" === y ? F.clientTop || 0 : F.clientLeft || 0 : 0
                      , q = e.modifiersData.offset ? e.modifiersData.offset[e.placement][y] : 0
                      , z = E[y] + Q - q - Y
                      , V = E[y] + U - q
                      , X = Lt(h ? Math.min(S, z) : S, x, h ? Math.max(j, V) : j);
                    E[y] = X,
                    L[y] = X - x
                }
                if (a) {
                    var $ = "x" === y ? it : st
                      , G = "x" === y ? ot : rt
                      , Z = E[w]
                      , J = Lt(Z + m[$], Z, Z - m[G]);
                    E[w] = J,
                    L[w] = J - Z
                }
                e.modifiersData[i] = L
            }
        },
        requiresIfExists: ["offset"]
    };
    function oe(t, e, n) {
        void 0 === n && (n = !1);
        var i, o, r = wt(e), s = Rt(t), a = pt(e), l = {
            scrollLeft: 0,
            scrollTop: 0
        }, c = {
            x: 0,
            y: 0
        };
        return (a || !a && !n) && (("body" !== ft(e) || Qt(r)) && (l = (i = e) !== dt(i) && pt(i) ? {
            scrollLeft: (o = i).scrollLeft,
            scrollTop: o.scrollTop
        } : Wt(i)),
        pt(e) ? ((c = Rt(e)).x += e.clientLeft,
        c.y += e.clientTop) : r && (c.x = Kt(r))),
        {
            x: s.left + l.scrollLeft - c.x,
            y: s.top + l.scrollTop - c.y,
            width: s.width,
            height: s.height
        }
    }
    function re(t) {
        var e = new Map
          , n = new Set
          , i = [];
        return t.forEach((function(t) {
            e.set(t.name, t)
        }
        )),
        t.forEach((function(t) {
            n.has(t.name) || function t(o) {
                n.add(o.name),
                [].concat(o.requires || [], o.requiresIfExists || []).forEach((function(i) {
                    if (!n.has(i)) {
                        var o = e.get(i);
                        o && t(o)
                    }
                }
                )),
                i.push(o)
            }(t)
        }
        )),
        i
    }
    var se = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
    };
    function ae() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
        return !e.some((function(t) {
            return !(t && "function" == typeof t.getBoundingClientRect)
        }
        ))
    }
    function le(t) {
        void 0 === t && (t = {});
        var e = t
          , n = e.defaultModifiers
          , i = void 0 === n ? [] : n
          , o = e.defaultOptions
          , r = void 0 === o ? se : o;
        return function(t, e, n) {
            void 0 === n && (n = r);
            var o, s, a = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign(Object.assign({}, se), r),
                modifiersData: {},
                elements: {
                    reference: t,
                    popper: e
                },
                attributes: {},
                styles: {}
            }, l = [], c = !1, u = {
                state: a,
                setOptions: function(n) {
                    f(),
                    a.options = Object.assign(Object.assign(Object.assign({}, r), a.options), n),
                    a.scrollParents = {
                        reference: ht(t) ? Ut(t) : t.contextElement ? Ut(t.contextElement) : [],
                        popper: Ut(e)
                    };
                    var o, s, c = function(t) {
                        var e = re(t);
                        return ut.reduce((function(t, n) {
                            return t.concat(e.filter((function(t) {
                                return t.phase === n
                            }
                            )))
                        }
                        ), [])
                    }((o = [].concat(i, a.options.modifiers),
                    s = o.reduce((function(t, e) {
                        var n = t[e.name];
                        return t[e.name] = n ? Object.assign(Object.assign(Object.assign({}, n), e), {}, {
                            options: Object.assign(Object.assign({}, n.options), e.options),
                            data: Object.assign(Object.assign({}, n.data), e.data)
                        }) : e,
                        t
                    }
                    ), {}),
                    Object.keys(s).map((function(t) {
                        return s[t]
                    }
                    ))));
                    return a.orderedModifiers = c.filter((function(t) {
                        return t.enabled
                    }
                    )),
                    a.orderedModifiers.forEach((function(t) {
                        var e = t.name
                          , n = t.options
                          , i = void 0 === n ? {} : n
                          , o = t.effect;
                        if ("function" == typeof o) {
                            var r = o({
                                state: a,
                                name: e,
                                instance: u,
                                options: i
                            })
                              , s = function() {};
                            l.push(r || s)
                        }
                    }
                    )),
                    u.update()
                },
                forceUpdate: function() {
                    if (!c) {
                        var t = a.elements
                          , e = t.reference
                          , n = t.popper;
                        if (ae(e, n)) {
                            a.rects = {
                                reference: oe(e, kt(n), "fixed" === a.options.strategy),
                                popper: vt(n)
                            },
                            a.reset = !1,
                            a.placement = a.options.placement,
                            a.orderedModifiers.forEach((function(t) {
                                return a.modifiersData[t.name] = Object.assign({}, t.data)
                            }
                            ));
                            for (var i = 0; i < a.orderedModifiers.length; i++)
                                if (!0 !== a.reset) {
                                    var o = a.orderedModifiers[i]
                                      , r = o.fn
                                      , s = o.options
                                      , l = void 0 === s ? {} : s
                                      , f = o.name;
                                    "function" == typeof r && (a = r({
                                        state: a,
                                        options: l,
                                        name: f,
                                        instance: u
                                    }) || a)
                                } else
                                    a.reset = !1,
                                    i = -1
                        }
                    }
                },
                update: (o = function() {
                    return new Promise((function(t) {
                        u.forceUpdate(),
                        t(a)
                    }
                    ))
                }
                ,
                function() {
                    return s || (s = new Promise((function(t) {
                        Promise.resolve().then((function() {
                            s = void 0,
                            t(o())
                        }
                        ))
                    }
                    ))),
                    s
                }
                ),
                destroy: function() {
                    f(),
                    c = !0
                }
            };
            if (!ae(t, e))
                return u;
            function f() {
                l.forEach((function(t) {
                    return t()
                }
                )),
                l = []
            }
            return u.setOptions(n).then((function(t) {
                !c && n.onFirstUpdate && n.onFirstUpdate(t)
            }
            )),
            u
        }
    }
    var ce = le()
      , ue = le({
        defaultModifiers: [It, ne, jt, gt]
    })
      , fe = le({
        defaultModifiers: [It, ne, jt, gt, ee, Gt, ie, Dt, te]
    })
      , de = Object.freeze({
        __proto__: null,
        popperGenerator: le,
        detectOverflow: Xt,
        createPopperBase: ce,
        createPopper: fe,
        createPopperLite: ue,
        top: it,
        bottom: ot,
        right: rt,
        left: st,
        auto: "auto",
        basePlacements: at,
        start: "start",
        end: "end",
        clippingParents: "clippingParents",
        viewport: "viewport",
        popper: "popper",
        reference: "reference",
        variationPlacements: lt,
        placements: ct,
        beforeRead: "beforeRead",
        read: "read",
        afterRead: "afterRead",
        beforeMain: "beforeMain",
        main: "main",
        afterMain: "afterMain",
        beforeWrite: "beforeWrite",
        write: "write",
        afterWrite: "afterWrite",
        modifierPhases: ut,
        applyStyles: gt,
        arrow: Dt,
        computeStyles: jt,
        eventListeners: It,
        flip: Gt,
        hide: te,
        offset: ee,
        popperOffsets: ne,
        preventOverflow: ie
    })
      , he = "dropdown"
      , pe = new RegExp("ArrowUp|ArrowDown|Escape")
      , ge = y ? "top-end" : "top-start"
      , me = y ? "top-start" : "top-end"
      , ve = y ? "bottom-end" : "bottom-start"
      , _e = y ? "bottom-start" : "bottom-end"
      , be = y ? "left-start" : "right-start"
      , ye = y ? "right-start" : "left-start"
      , we = {
        offset: 0,
        flip: !0,
        boundary: "clippingParents",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null
    }
      , Ee = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string",
        popperConfig: "(null|object)"
    }
      , Te = function(t) {
        function o(e, n) {
            var i;
            return (i = t.call(this, e) || this)._popper = null,
            i._config = i._getConfig(n),
            i._menu = i._getMenuElement(),
            i._inNavbar = i._detectNavbar(),
            i._addEventListeners(),
            i
        }
        i(o, t);
        var r = o.prototype;
        return r.toggle = function() {
            if (!this._element.disabled && !this._element.classList.contains("disabled")) {
                var t = this._element.classList.contains("show");
                o.clearMenus(),
                t || this.show()
            }
        }
        ,
        r.show = function() {
            if (!(this._element.disabled || this._element.classList.contains("disabled") || this._menu.classList.contains("show"))) {
                var t = o.getParentFromElement(this._element)
                  , e = {
                    relatedTarget: this._element
                };
                if (!H.trigger(this._element, "show.bs.dropdown", e).defaultPrevented) {
                    if (!this._inNavbar) {
                        if (void 0 === de)
                            throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                        var n = this._element;
                        "parent" === this._config.reference ? n = t : d(this._config.reference) && (n = this._config.reference,
                        void 0 !== this._config.reference.jquery && (n = this._config.reference[0])),
                        this._popper = fe(n, this._menu, this._getPopperConfig())
                    }
                    var i;
                    if ("ontouchstart"in document.documentElement && !t.closest(".navbar-nav"))
                        (i = []).concat.apply(i, document.body.children).forEach((function(t) {
                            return H.on(t, "mouseover", null, (function() {}
                            ))
                        }
                        ));
                    this._element.focus(),
                    this._element.setAttribute("aria-expanded", !0),
                    this._menu.classList.toggle("show"),
                    this._element.classList.toggle("show"),
                    H.trigger(t, "shown.bs.dropdown", e)
                }
            }
        }
        ,
        r.hide = function() {
            if (!this._element.disabled && !this._element.classList.contains("disabled") && this._menu.classList.contains("show")) {
                var t = o.getParentFromElement(this._element)
                  , e = {
                    relatedTarget: this._element
                };
                H.trigger(t, "hide.bs.dropdown", e).defaultPrevented || (this._popper && this._popper.destroy(),
                this._menu.classList.toggle("show"),
                this._element.classList.toggle("show"),
                H.trigger(t, "hidden.bs.dropdown", e))
            }
        }
        ,
        r.dispose = function() {
            t.prototype.dispose.call(this),
            H.off(this._element, ".bs.dropdown"),
            this._menu = null,
            this._popper && (this._popper.destroy(),
            this._popper = null)
        }
        ,
        r.update = function() {
            this._inNavbar = this._detectNavbar(),
            this._popper && this._popper.update()
        }
        ,
        r._addEventListeners = function() {
            var t = this;
            H.on(this._element, "click.bs.dropdown", (function(e) {
                e.preventDefault(),
                e.stopPropagation(),
                t.toggle()
            }
            ))
        }
        ,
        r._getConfig = function(t) {
            return t = n({}, this.constructor.Default, Y.getDataAttributes(this._element), t),
            p(he, t, this.constructor.DefaultType),
            t
        }
        ,
        r._getMenuElement = function() {
            return q.next(this._element, ".dropdown-menu")[0]
        }
        ,
        r._getPlacement = function() {
            var t = this._element.parentNode;
            if (t.classList.contains("dropend"))
                return be;
            if (t.classList.contains("dropstart"))
                return ye;
            var e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return t.classList.contains("dropup") ? e ? me : ge : e ? _e : ve
        }
        ,
        r._detectNavbar = function() {
            return null !== this._element.closest(".navbar")
        }
        ,
        r._getPopperConfig = function() {
            var t = {
                placement: this._getPlacement(),
                modifiers: [{
                    name: "preventOverflow",
                    options: {
                        altBoundary: this._config.flip,
                        rootBoundary: this._config.boundary
                    }
                }]
            };
            return "static" === this._config.display && (t.modifiers = [{
                name: "applyStyles",
                enabled: !1
            }]),
            n({}, t, this._config.popperConfig)
        }
        ,
        o.dropdownInterface = function(t, e) {
            var n = T(t, "bs.dropdown");
            if (n || (n = new o(t,"object" == typeof e ? e : null)),
            "string" == typeof e) {
                if (void 0 === n[e])
                    throw new TypeError('No method named "' + e + '"');
                n[e]()
            }
        }
        ,
        o.jQueryInterface = function(t) {
            return this.each((function() {
                o.dropdownInterface(this, t)
            }
            ))
        }
        ,
        o.clearMenus = function(t) {
            if (!t || 2 !== t.button && ("keyup" !== t.type || "Tab" === t.key))
                for (var e = q.find('[data-bs-toggle="dropdown"]'), n = 0, i = e.length; n < i; n++) {
                    var r = o.getParentFromElement(e[n])
                      , s = T(e[n], "bs.dropdown")
                      , a = {
                        relatedTarget: e[n]
                    };
                    if (t && "click" === t.type && (a.clickEvent = t),
                    s) {
                        var l = s._menu;
                        if (e[n].classList.contains("show"))
                            if (!(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && "Tab" === t.key) && l.contains(t.target)))
                                if (!H.trigger(r, "hide.bs.dropdown", a).defaultPrevented) {
                                    var c;
                                    if ("ontouchstart"in document.documentElement)
                                        (c = []).concat.apply(c, document.body.children).forEach((function(t) {
                                            return H.off(t, "mouseover", null, (function() {}
                                            ))
                                        }
                                        ));
                                    e[n].setAttribute("aria-expanded", "false"),
                                    s._popper && s._popper.destroy(),
                                    l.classList.remove("show"),
                                    e[n].classList.remove("show"),
                                    H.trigger(r, "hidden.bs.dropdown", a)
                                }
                    }
                }
        }
        ,
        o.getParentFromElement = function(t) {
            return c(t) || t.parentNode
        }
        ,
        o.dataApiKeydownHandler = function(t) {
            if (!(/input|textarea/i.test(t.target.tagName) ? "Space" === t.key || "Escape" !== t.key && ("ArrowDown" !== t.key && "ArrowUp" !== t.key || t.target.closest(".dropdown-menu")) : !pe.test(t.key)) && (t.preventDefault(),
            t.stopPropagation(),
            !this.disabled && !this.classList.contains("disabled"))) {
                var e = o.getParentFromElement(this)
                  , n = this.classList.contains("show");
                if ("Escape" === t.key)
                    return (this.matches('[data-bs-toggle="dropdown"]') ? this : q.prev(this, '[data-bs-toggle="dropdown"]')[0]).focus(),
                    void o.clearMenus();
                if (n && "Space" !== t.key) {
                    var i = q.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", e).filter(g);
                    if (i.length) {
                        var r = i.indexOf(t.target);
                        "ArrowUp" === t.key && r > 0 && r--,
                        "ArrowDown" === t.key && r < i.length - 1 && r++,
                        i[r = -1 === r ? 0 : r].focus()
                    }
                } else
                    o.clearMenus()
            }
        }
        ,
        e(o, null, [{
            key: "Default",
            get: function() {
                return we
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Ee
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return "bs.dropdown"
            }
        }]),
        o
    }(R);
    H.on(document, "keydown.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', Te.dataApiKeydownHandler),
    H.on(document, "keydown.bs.dropdown.data-api", ".dropdown-menu", Te.dataApiKeydownHandler),
    H.on(document, "click.bs.dropdown.data-api", Te.clearMenus),
    H.on(document, "keyup.bs.dropdown.data-api", Te.clearMenus),
    H.on(document, "click.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', (function(t) {
        t.preventDefault(),
        t.stopPropagation(),
        Te.dropdownInterface(this, "toggle")
    }
    )),
    H.on(document, "click.bs.dropdown.data-api", ".dropdown form", (function(t) {
        return t.stopPropagation()
    }
    )),
    b((function() {
        var t = _();
        if (t) {
            var e = t.fn[he];
            t.fn[he] = Te.jQueryInterface,
            t.fn[he].Constructor = Te,
            t.fn[he].noConflict = function() {
                return t.fn[he] = e,
                Te.jQueryInterface
            }
        }
    }
    ));
    var ke = {
        backdrop: !0,
        keyboard: !0,
        focus: !0
    }
      , Oe = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean"
    }
      , Le = function(t) {
        function o(e, n) {
            var i;
            return (i = t.call(this, e) || this)._config = i._getConfig(n),
            i._dialog = q.findOne(".modal-dialog", e),
            i._backdrop = null,
            i._isShown = !1,
            i._isBodyOverflowing = !1,
            i._ignoreBackdropClick = !1,
            i._isTransitioning = !1,
            i._scrollbarWidth = 0,
            i
        }
        i(o, t);
        var r = o.prototype;
        return r.toggle = function(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        ,
        r.show = function(t) {
            var e = this;
            if (!this._isShown && !this._isTransitioning) {
                this._element.classList.contains("fade") && (this._isTransitioning = !0);
                var n = H.trigger(this._element, "show.bs.modal", {
                    relatedTarget: t
                });
                this._isShown || n.defaultPrevented || (this._isShown = !0,
                this._checkScrollbar(),
                this._setScrollbar(),
                this._adjustDialog(),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                H.on(this._element, "click.dismiss.bs.modal", '[data-bs-dismiss="modal"]', (function(t) {
                    return e.hide(t)
                }
                )),
                H.on(this._dialog, "mousedown.dismiss.bs.modal", (function() {
                    H.one(e._element, "mouseup.dismiss.bs.modal", (function(t) {
                        t.target === e._element && (e._ignoreBackdropClick = !0)
                    }
                    ))
                }
                )),
                this._showBackdrop((function() {
                    return e._showElement(t)
                }
                )))
            }
        }
        ,
        r.hide = function(t) {
            var e = this;
            if ((t && t.preventDefault(),
            this._isShown && !this._isTransitioning) && !H.trigger(this._element, "hide.bs.modal").defaultPrevented) {
                this._isShown = !1;
                var n = this._element.classList.contains("fade");
                if (n && (this._isTransitioning = !0),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                H.off(document, "focusin.bs.modal"),
                this._element.classList.remove("show"),
                H.off(this._element, "click.dismiss.bs.modal"),
                H.off(this._dialog, "mousedown.dismiss.bs.modal"),
                n) {
                    var i = u(this._element);
                    H.one(this._element, "transitionend", (function(t) {
                        return e._hideModal(t)
                    }
                    )),
                    h(this._element, i)
                } else
                    this._hideModal()
            }
        }
        ,
        r.dispose = function() {
            [window, this._element, this._dialog].forEach((function(t) {
                return H.off(t, ".bs.modal")
            }
            )),
            t.prototype.dispose.call(this),
            H.off(document, "focusin.bs.modal"),
            this._config = null,
            this._dialog = null,
            this._backdrop = null,
            this._isShown = null,
            this._isBodyOverflowing = null,
            this._ignoreBackdropClick = null,
            this._isTransitioning = null,
            this._scrollbarWidth = null
        }
        ,
        r.handleUpdate = function() {
            this._adjustDialog()
        }
        ,
        r._getConfig = function(t) {
            return t = n({}, ke, t),
            p("modal", t, Oe),
            t
        }
        ,
        r._showElement = function(t) {
            var e = this
              , n = this._element.classList.contains("fade")
              , i = q.findOne(".modal-body", this._dialog);
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
            this._element.style.display = "block",
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            this._element.scrollTop = 0,
            i && (i.scrollTop = 0),
            n && v(this._element),
            this._element.classList.add("show"),
            this._config.focus && this._enforceFocus();
            var o = function() {
                e._config.focus && e._element.focus(),
                e._isTransitioning = !1,
                H.trigger(e._element, "shown.bs.modal", {
                    relatedTarget: t
                })
            };
            if (n) {
                var r = u(this._dialog);
                H.one(this._dialog, "transitionend", o),
                h(this._dialog, r)
            } else
                o()
        }
        ,
        r._enforceFocus = function() {
            var t = this;
            H.off(document, "focusin.bs.modal"),
            H.on(document, "focusin.bs.modal", (function(e) {
                document === e.target || t._element === e.target || t._element.contains(e.target) || t._element.focus()
            }
            ))
        }
        ,
        r._setEscapeEvent = function() {
            var t = this;
            this._isShown ? H.on(this._element, "keydown.dismiss.bs.modal", (function(e) {
                t._config.keyboard && "Escape" === e.key ? (e.preventDefault(),
                t.hide()) : t._config.keyboard || "Escape" !== e.key || t._triggerBackdropTransition()
            }
            )) : H.off(this._element, "keydown.dismiss.bs.modal")
        }
        ,
        r._setResizeEvent = function() {
            var t = this;
            this._isShown ? H.on(window, "resize.bs.modal", (function() {
                return t._adjustDialog()
            }
            )) : H.off(window, "resize.bs.modal")
        }
        ,
        r._hideModal = function() {
            var t = this;
            this._element.style.display = "none",
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._element.removeAttribute("role"),
            this._isTransitioning = !1,
            this._showBackdrop((function() {
                document.body.classList.remove("modal-open"),
                t._resetAdjustments(),
                t._resetScrollbar(),
                H.trigger(t._element, "hidden.bs.modal")
            }
            ))
        }
        ,
        r._removeBackdrop = function() {
            this._backdrop.parentNode.removeChild(this._backdrop),
            this._backdrop = null
        }
        ,
        r._showBackdrop = function(t) {
            var e = this
              , n = this._element.classList.contains("fade") ? "fade" : "";
            if (this._isShown && this._config.backdrop) {
                if (this._backdrop = document.createElement("div"),
                this._backdrop.className = "modal-backdrop",
                n && this._backdrop.classList.add(n),
                document.body.appendChild(this._backdrop),
                H.on(this._element, "click.dismiss.bs.modal", (function(t) {
                    e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._triggerBackdropTransition() : e.hide())
                }
                )),
                n && v(this._backdrop),
                this._backdrop.classList.add("show"),
                !n)
                    return void t();
                var i = u(this._backdrop);
                H.one(this._backdrop, "transitionend", t),
                h(this._backdrop, i)
            } else if (!this._isShown && this._backdrop) {
                this._backdrop.classList.remove("show");
                var o = function() {
                    e._removeBackdrop(),
                    t()
                };
                if (this._element.classList.contains("fade")) {
                    var r = u(this._backdrop);
                    H.one(this._backdrop, "transitionend", o),
                    h(this._backdrop, r)
                } else
                    o()
            } else
                t()
        }
        ,
        r._triggerBackdropTransition = function() {
            var t = this;
            if (!H.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) {
                var e = this._element.scrollHeight > document.documentElement.clientHeight;
                e || (this._element.style.overflowY = "hidden"),
                this._element.classList.add("modal-static");
                var n = u(this._dialog);
                H.off(this._element, "transitionend"),
                H.one(this._element, "transitionend", (function() {
                    t._element.classList.remove("modal-static"),
                    e || (H.one(t._element, "transitionend", (function() {
                        t._element.style.overflowY = ""
                    }
                    )),
                    h(t._element, n))
                }
                )),
                h(this._element, n),
                this._element.focus()
            }
        }
        ,
        r._adjustDialog = function() {
            var t = this._element.scrollHeight > document.documentElement.clientHeight;
            (!this._isBodyOverflowing && t && !y || this._isBodyOverflowing && !t && y) && (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
            (this._isBodyOverflowing && !t && !y || !this._isBodyOverflowing && t && y) && (this._element.style.paddingRight = this._scrollbarWidth + "px")
        }
        ,
        r._resetAdjustments = function() {
            this._element.style.paddingLeft = "",
            this._element.style.paddingRight = ""
        }
        ,
        r._checkScrollbar = function() {
            var t = document.body.getBoundingClientRect();
            this._isBodyOverflowing = Math.round(t.left + t.right) < window.innerWidth,
            this._scrollbarWidth = this._getScrollbarWidth()
        }
        ,
        r._setScrollbar = function() {
            var t = this;
            if (this._isBodyOverflowing) {
                q.find(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top").forEach((function(e) {
                    var n = e.style.paddingRight
                      , i = window.getComputedStyle(e)["padding-right"];
                    Y.setDataAttribute(e, "padding-right", n),
                    e.style.paddingRight = Number.parseFloat(i) + t._scrollbarWidth + "px"
                }
                )),
                q.find(".sticky-top").forEach((function(e) {
                    var n = e.style.marginRight
                      , i = window.getComputedStyle(e)["margin-right"];
                    Y.setDataAttribute(e, "margin-right", n),
                    e.style.marginRight = Number.parseFloat(i) - t._scrollbarWidth + "px"
                }
                ));
                var e = document.body.style.paddingRight
                  , n = window.getComputedStyle(document.body)["padding-right"];
                Y.setDataAttribute(document.body, "padding-right", e),
                document.body.style.paddingRight = Number.parseFloat(n) + this._scrollbarWidth + "px"
            }
            document.body.classList.add("modal-open")
        }
        ,
        r._resetScrollbar = function() {
            q.find(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top").forEach((function(t) {
                var e = Y.getDataAttribute(t, "padding-right");
                void 0 !== e && (Y.removeDataAttribute(t, "padding-right"),
                t.style.paddingRight = e)
            }
            )),
            q.find(".sticky-top").forEach((function(t) {
                var e = Y.getDataAttribute(t, "margin-right");
                void 0 !== e && (Y.removeDataAttribute(t, "margin-right"),
                t.style.marginRight = e)
            }
            ));
            var t = Y.getDataAttribute(document.body, "padding-right");
            void 0 === t ? document.body.style.paddingRight = "" : (Y.removeDataAttribute(document.body, "padding-right"),
            document.body.style.paddingRight = t)
        }
        ,
        r._getScrollbarWidth = function() {
            var t = document.createElement("div");
            t.className = "modal-scrollbar-measure",
            document.body.appendChild(t);
            var e = t.getBoundingClientRect().width - t.clientWidth;
            return document.body.removeChild(t),
            e
        }
        ,
        o.jQueryInterface = function(t, e) {
            return this.each((function() {
                var i = T(this, "bs.modal")
                  , r = n({}, ke, Y.getDataAttributes(this), "object" == typeof t && t ? t : {});
                if (i || (i = new o(this,r)),
                "string" == typeof t) {
                    if (void 0 === i[t])
                        throw new TypeError('No method named "' + t + '"');
                    i[t](e)
                }
            }
            ))
        }
        ,
        e(o, null, [{
            key: "Default",
            get: function() {
                return ke
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return "bs.modal"
            }
        }]),
        o
    }(R);
    H.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', (function(t) {
        var e = this
          , i = c(this);
        "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault(),
        H.one(i, "show.bs.modal", (function(t) {
            t.defaultPrevented || H.one(i, "hidden.bs.modal", (function() {
                g(e) && e.focus()
            }
            ))
        }
        ));
        var o = T(i, "bs.modal");
        if (!o) {
            var r = n({}, Y.getDataAttributes(i), Y.getDataAttributes(this));
            o = new Le(i,r)
        }
        o.show(this)
    }
    )),
    b((function() {
        var t = _();
        if (t) {
            var e = t.fn.modal;
            t.fn.modal = Le.jQueryInterface,
            t.fn.modal.Constructor = Le,
            t.fn.modal.noConflict = function() {
                return t.fn.modal = e,
                Le.jQueryInterface
            }
        }
    }
    ));
    var Ae = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"])
      , Ce = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi
      , De = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i
      , xe = {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
    };
    function Se(t, e, n) {
        var i;
        if (!t.length)
            return t;
        if (n && "function" == typeof n)
            return n(t);
        for (var o = (new window.DOMParser).parseFromString(t, "text/html"), r = Object.keys(e), s = (i = []).concat.apply(i, o.body.querySelectorAll("*")), a = function(t, n) {
            var i, o = s[t], a = o.nodeName.toLowerCase();
            if (!r.includes(a))
                return o.parentNode.removeChild(o),
                "continue";
            var l = (i = []).concat.apply(i, o.attributes)
              , c = [].concat(e["*"] || [], e[a] || []);
            l.forEach((function(t) {
                (function(t, e) {
                    var n = t.nodeName.toLowerCase();
                    if (e.includes(n))
                        return !Ae.has(n) || Boolean(t.nodeValue.match(Ce) || t.nodeValue.match(De));
                    for (var i = e.filter((function(t) {
                        return t instanceof RegExp
                    }
                    )), o = 0, r = i.length; o < r; o++)
                        if (n.match(i[o]))
                            return !0;
                    return !1
                }
                )(t, c) || o.removeAttribute(t.nodeName)
            }
            ))
        }, l = 0, c = s.length; l < c; l++)
            a(l);
        return o.body.innerHTML
    }
    var je = "tooltip"
      , Ne = new RegExp("(^|\\s)bs-tooltip\\S+","g")
      , Ie = new Set(["sanitize", "allowList", "sanitizeFn"])
      , Pe = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        container: "(string|element|boolean)",
        fallbackPlacements: "(null|array)",
        boundary: "(string|element)",
        customClass: "(string|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        allowList: "object",
        popperConfig: "(null|object)"
    }
      , Me = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: y ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: y ? "right" : "left"
    }
      , Be = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        container: !1,
        fallbackPlacements: null,
        boundary: "clippingParents",
        customClass: "",
        sanitize: !0,
        sanitizeFn: null,
        allowList: xe,
        popperConfig: null
    }
      , He = {
        HIDE: "hide.bs.tooltip",
        HIDDEN: "hidden.bs.tooltip",
        SHOW: "show.bs.tooltip",
        SHOWN: "shown.bs.tooltip",
        INSERTED: "inserted.bs.tooltip",
        CLICK: "click.bs.tooltip",
        FOCUSIN: "focusin.bs.tooltip",
        FOCUSOUT: "focusout.bs.tooltip",
        MOUSEENTER: "mouseenter.bs.tooltip",
        MOUSELEAVE: "mouseleave.bs.tooltip"
    }
      , Re = function(t) {
        function o(e, n) {
            var i;
            if (void 0 === de)
                throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            return (i = t.call(this, e) || this)._isEnabled = !0,
            i._timeout = 0,
            i._hoverState = "",
            i._activeTrigger = {},
            i._popper = null,
            i.config = i._getConfig(n),
            i.tip = null,
            i._setListeners(),
            i
        }
        i(o, t);
        var r = o.prototype;
        return r.enable = function() {
            this._isEnabled = !0
        }
        ,
        r.disable = function() {
            this._isEnabled = !1
        }
        ,
        r.toggleEnabled = function() {
            this._isEnabled = !this._isEnabled
        }
        ,
        r.toggle = function(t) {
            if (this._isEnabled)
                if (t) {
                    var e = this.constructor.DATA_KEY
                      , n = T(t.delegateTarget, e);
                    n || (n = new this.constructor(t.delegateTarget,this._getDelegateConfig()),
                    E(t.delegateTarget, e, n)),
                    n._activeTrigger.click = !n._activeTrigger.click,
                    n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                } else {
                    if (this.getTipElement().classList.contains("show"))
                        return void this._leave(null, this);
                    this._enter(null, this)
                }
        }
        ,
        r.dispose = function() {
            clearTimeout(this._timeout),
            H.off(this._element, this.constructor.EVENT_KEY),
            H.off(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler),
            this.tip && this.tip.parentNode.removeChild(this.tip),
            this._isEnabled = null,
            this._timeout = null,
            this._hoverState = null,
            this._activeTrigger = null,
            this._popper && this._popper.destroy(),
            this._popper = null,
            this.config = null,
            this.tip = null,
            t.prototype.dispose.call(this)
        }
        ,
        r.show = function() {
            var t = this;
            if ("none" === this._element.style.display)
                throw new Error("Please use show on visible elements");
            if (this.isWithContent() && this._isEnabled) {
                var e = H.trigger(this._element, this.constructor.Event.SHOW)
                  , n = function t(e) {
                    if (!document.documentElement.attachShadow)
                        return null;
                    if ("function" == typeof e.getRootNode) {
                        var n = e.getRootNode();
                        return n instanceof ShadowRoot ? n : null
                    }
                    return e instanceof ShadowRoot ? e : e.parentNode ? t(e.parentNode) : null
                }(this._element)
                  , i = null === n ? this._element.ownerDocument.documentElement.contains(this._element) : n.contains(this._element);
                if (e.defaultPrevented || !i)
                    return;
                var o = this.getTipElement()
                  , r = s(this.constructor.NAME);
                o.setAttribute("id", r),
                this._element.setAttribute("aria-describedby", r),
                this.setContent(),
                this.config.animation && o.classList.add("fade");
                var a = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this._element) : this.config.placement
                  , l = this._getAttachment(a);
                this._addAttachmentClass(l);
                var c = this._getContainer();
                E(o, this.constructor.DATA_KEY, this),
                this._element.ownerDocument.documentElement.contains(this.tip) || c.appendChild(o),
                H.trigger(this._element, this.constructor.Event.INSERTED),
                this._popper = fe(this._element, o, this._getPopperConfig(l)),
                o.classList.add("show");
                var f, d, p = "function" == typeof this.config.customClass ? this.config.customClass() : this.config.customClass;
                if (p)
                    (f = o.classList).add.apply(f, p.split(" "));
                if ("ontouchstart"in document.documentElement)
                    (d = []).concat.apply(d, document.body.children).forEach((function(t) {
                        H.on(t, "mouseover", (function() {}
                        ))
                    }
                    ));
                var g = function() {
                    var e = t._hoverState;
                    t._hoverState = null,
                    H.trigger(t._element, t.constructor.Event.SHOWN),
                    "out" === e && t._leave(null, t)
                };
                if (this.tip.classList.contains("fade")) {
                    var m = u(this.tip);
                    H.one(this.tip, "transitionend", g),
                    h(this.tip, m)
                } else
                    g()
            }
        }
        ,
        r.hide = function() {
            var t = this;
            if (this._popper) {
                var e = this.getTipElement()
                  , n = function() {
                    "show" !== t._hoverState && e.parentNode && e.parentNode.removeChild(e),
                    t._cleanTipClass(),
                    t._element.removeAttribute("aria-describedby"),
                    H.trigger(t._element, t.constructor.Event.HIDDEN),
                    t._popper && (t._popper.destroy(),
                    t._popper = null)
                };
                if (!H.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) {
                    var i;
                    if (e.classList.remove("show"),
                    "ontouchstart"in document.documentElement)
                        (i = []).concat.apply(i, document.body.children).forEach((function(t) {
                            return H.off(t, "mouseover", m)
                        }
                        ));
                    if (this._activeTrigger.click = !1,
                    this._activeTrigger.focus = !1,
                    this._activeTrigger.hover = !1,
                    this.tip.classList.contains("fade")) {
                        var o = u(e);
                        H.one(e, "transitionend", n),
                        h(e, o)
                    } else
                        n();
                    this._hoverState = ""
                }
            }
        }
        ,
        r.update = function() {
            null !== this._popper && this._popper.update()
        }
        ,
        r.isWithContent = function() {
            return Boolean(this.getTitle())
        }
        ,
        r.getTipElement = function() {
            if (this.tip)
                return this.tip;
            var t = document.createElement("div");
            return t.innerHTML = this.config.template,
            this.tip = t.children[0],
            this.tip
        }
        ,
        r.setContent = function() {
            var t = this.getTipElement();
            this.setElementContent(q.findOne(".tooltip-inner", t), this.getTitle()),
            t.classList.remove("fade", "show")
        }
        ,
        r.setElementContent = function(t, e) {
            if (null !== t)
                return "object" == typeof e && d(e) ? (e.jquery && (e = e[0]),
                void (this.config.html ? e.parentNode !== t && (t.innerHTML = "",
                t.appendChild(e)) : t.textContent = e.textContent)) : void (this.config.html ? (this.config.sanitize && (e = Se(e, this.config.allowList, this.config.sanitizeFn)),
                t.innerHTML = e) : t.textContent = e)
        }
        ,
        r.getTitle = function() {
            var t = this._element.getAttribute("data-bs-original-title");
            return t || (t = "function" == typeof this.config.title ? this.config.title.call(this._element) : this.config.title),
            t
        }
        ,
        r.updateAttachment = function(t) {
            return "right" === t ? "end" : "left" === t ? "start" : t
        }
        ,
        r._getPopperConfig = function(t) {
            var e = this
              , i = {
                name: "flip",
                options: {
                    altBoundary: !0
                }
            };
            return this.config.fallbackPlacements && (i.options.fallbackPlacements = this.config.fallbackPlacements),
            n({}, {
                placement: t,
                modifiers: [i, {
                    name: "preventOverflow",
                    options: {
                        rootBoundary: this.config.boundary
                    }
                }, {
                    name: "arrow",
                    options: {
                        element: "." + this.constructor.NAME + "-arrow"
                    }
                }, {
                    name: "onChange",
                    enabled: !0,
                    phase: "afterWrite",
                    fn: function(t) {
                        return e._handlePopperPlacementChange(t)
                    }
                }],
                onFirstUpdate: function(t) {
                    t.options.placement !== t.placement && e._handlePopperPlacementChange(t)
                }
            }, this.config.popperConfig)
        }
        ,
        r._addAttachmentClass = function(t) {
            this.getTipElement().classList.add("bs-tooltip-" + this.updateAttachment(t))
        }
        ,
        r._getContainer = function() {
            return !1 === this.config.container ? document.body : d(this.config.container) ? this.config.container : q.findOne(this.config.container)
        }
        ,
        r._getAttachment = function(t) {
            return Me[t.toUpperCase()]
        }
        ,
        r._setListeners = function() {
            var t = this;
            this.config.trigger.split(" ").forEach((function(e) {
                if ("click" === e)
                    H.on(t._element, t.constructor.Event.CLICK, t.config.selector, (function(e) {
                        return t.toggle(e)
                    }
                    ));
                else if ("manual" !== e) {
                    var n = "hover" === e ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN
                      , i = "hover" === e ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                    H.on(t._element, n, t.config.selector, (function(e) {
                        return t._enter(e)
                    }
                    )),
                    H.on(t._element, i, t.config.selector, (function(e) {
                        return t._leave(e)
                    }
                    ))
                }
            }
            )),
            this._hideModalHandler = function() {
                t._element && t.hide()
            }
            ,
            H.on(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler),
            this.config.selector ? this.config = n({}, this.config, {
                trigger: "manual",
                selector: ""
            }) : this._fixTitle()
        }
        ,
        r._fixTitle = function() {
            var t = this._element.getAttribute("title")
              , e = typeof this._element.getAttribute("data-bs-original-title");
            (t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""),
            !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t),
            this._element.setAttribute("title", ""))
        }
        ,
        r._enter = function(t, e) {
            var n = this.constructor.DATA_KEY;
            (e = e || T(t.delegateTarget, n)) || (e = new this.constructor(t.delegateTarget,this._getDelegateConfig()),
            E(t.delegateTarget, n, e)),
            t && (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0),
            e.getTipElement().classList.contains("show") || "show" === e._hoverState ? e._hoverState = "show" : (clearTimeout(e._timeout),
            e._hoverState = "show",
            e.config.delay && e.config.delay.show ? e._timeout = setTimeout((function() {
                "show" === e._hoverState && e.show()
            }
            ), e.config.delay.show) : e.show())
        }
        ,
        r._leave = function(t, e) {
            var n = this.constructor.DATA_KEY;
            (e = e || T(t.delegateTarget, n)) || (e = new this.constructor(t.delegateTarget,this._getDelegateConfig()),
            E(t.delegateTarget, n, e)),
            t && (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] = !1),
            e._isWithActiveTrigger() || (clearTimeout(e._timeout),
            e._hoverState = "out",
            e.config.delay && e.config.delay.hide ? e._timeout = setTimeout((function() {
                "out" === e._hoverState && e.hide()
            }
            ), e.config.delay.hide) : e.hide())
        }
        ,
        r._isWithActiveTrigger = function() {
            for (var t in this._activeTrigger)
                if (this._activeTrigger[t])
                    return !0;
            return !1
        }
        ,
        r._getConfig = function(t) {
            var e = Y.getDataAttributes(this._element);
            return Object.keys(e).forEach((function(t) {
                Ie.has(t) && delete e[t]
            }
            )),
            t && "object" == typeof t.container && t.container.jquery && (t.container = t.container[0]),
            "number" == typeof (t = n({}, this.constructor.Default, e, "object" == typeof t && t ? t : {})).delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }),
            "number" == typeof t.title && (t.title = t.title.toString()),
            "number" == typeof t.content && (t.content = t.content.toString()),
            p(je, t, this.constructor.DefaultType),
            t.sanitize && (t.template = Se(t.template, t.allowList, t.sanitizeFn)),
            t
        }
        ,
        r._getDelegateConfig = function() {
            var t = {};
            if (this.config)
                for (var e in this.config)
                    this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
            return t
        }
        ,
        r._cleanTipClass = function() {
            var t = this.getTipElement()
              , e = t.getAttribute("class").match(Ne);
            null !== e && e.length > 0 && e.map((function(t) {
                return t.trim()
            }
            )).forEach((function(e) {
                return t.classList.remove(e)
            }
            ))
        }
        ,
        r._handlePopperPlacementChange = function(t) {
            var e = t.state;
            e && (this.tip = e.elements.popper,
            this._cleanTipClass(),
            this._addAttachmentClass(this._getAttachment(e.placement)))
        }
        ,
        o.jQueryInterface = function(t) {
            return this.each((function() {
                var e = T(this, "bs.tooltip")
                  , n = "object" == typeof t && t;
                if ((e || !/dispose|hide/.test(t)) && (e || (e = new o(this,n)),
                "string" == typeof t)) {
                    if (void 0 === e[t])
                        throw new TypeError('No method named "' + t + '"');
                    e[t]()
                }
            }
            ))
        }
        ,
        e(o, null, [{
            key: "Default",
            get: function() {
                return Be
            }
        }, {
            key: "NAME",
            get: function() {
                return je
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return "bs.tooltip"
            }
        }, {
            key: "Event",
            get: function() {
                return He
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return ".bs.tooltip"
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Pe
            }
        }]),
        o
    }(R);
    b((function() {
        var t = _();
        if (t) {
            var e = t.fn[je];
            t.fn[je] = Re.jQueryInterface,
            t.fn[je].Constructor = Re,
            t.fn[je].noConflict = function() {
                return t.fn[je] = e,
                Re.jQueryInterface
            }
        }
    }
    ));
    var We = "popover"
      , Ke = new RegExp("(^|\\s)bs-popover\\S+","g")
      , Qe = n({}, Re.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    })
      , Ue = n({}, Re.DefaultType, {
        content: "(string|element|function)"
    })
      , Fe = {
        HIDE: "hide.bs.popover",
        HIDDEN: "hidden.bs.popover",
        SHOW: "show.bs.popover",
        SHOWN: "shown.bs.popover",
        INSERTED: "inserted.bs.popover",
        CLICK: "click.bs.popover",
        FOCUSIN: "focusin.bs.popover",
        FOCUSOUT: "focusout.bs.popover",
        MOUSEENTER: "mouseenter.bs.popover",
        MOUSELEAVE: "mouseleave.bs.popover"
    }
      , Ye = function(t) {
        function n() {
            return t.apply(this, arguments) || this
        }
        i(n, t);
        var o = n.prototype;
        return o.isWithContent = function() {
            return this.getTitle() || this._getContent()
        }
        ,
        o.setContent = function() {
            var t = this.getTipElement();
            this.setElementContent(q.findOne(".popover-header", t), this.getTitle());
            var e = this._getContent();
            "function" == typeof e && (e = e.call(this._element)),
            this.setElementContent(q.findOne(".popover-body", t), e),
            t.classList.remove("fade", "show")
        }
        ,
        o._addAttachmentClass = function(t) {
            this.getTipElement().classList.add("bs-popover-" + this.updateAttachment(t))
        }
        ,
        o._getContent = function() {
            return this._element.getAttribute("data-bs-content") || this.config.content
        }
        ,
        o._cleanTipClass = function() {
            var t = this.getTipElement()
              , e = t.getAttribute("class").match(Ke);
            null !== e && e.length > 0 && e.map((function(t) {
                return t.trim()
            }
            )).forEach((function(e) {
                return t.classList.remove(e)
            }
            ))
        }
        ,
        n.jQueryInterface = function(t) {
            return this.each((function() {
                var e = T(this, "bs.popover")
                  , i = "object" == typeof t ? t : null;
                if ((e || !/dispose|hide/.test(t)) && (e || (e = new n(this,i),
                E(this, "bs.popover", e)),
                "string" == typeof t)) {
                    if (void 0 === e[t])
                        throw new TypeError('No method named "' + t + '"');
                    e[t]()
                }
            }
            ))
        }
        ,
        e(n, null, [{
            key: "Default",
            get: function() {
                return Qe
            }
        }, {
            key: "NAME",
            get: function() {
                return We
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return "bs.popover"
            }
        }, {
            key: "Event",
            get: function() {
                return Fe
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return ".bs.popover"
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Ue
            }
        }]),
        n
    }(Re);
    b((function() {
        var t = _();
        if (t) {
            var e = t.fn[We];
            t.fn[We] = Ye.jQueryInterface,
            t.fn[We].Constructor = Ye,
            t.fn[We].noConflict = function() {
                return t.fn[We] = e,
                Ye.jQueryInterface
            }
        }
    }
    ));
    var qe = "scrollspy"
      , ze = {
        offset: 10,
        method: "auto",
        target: ""
    }
      , Ve = {
        offset: "number",
        method: "string",
        target: "(string|element)"
    }
      , Xe = function(t) {
        function o(e, n) {
            var i;
            return (i = t.call(this, e) || this)._scrollElement = "BODY" === e.tagName ? window : e,
            i._config = i._getConfig(n),
            i._selector = i._config.target + " .nav-link, " + i._config.target + " .list-group-item, " + i._config.target + " .dropdown-item",
            i._offsets = [],
            i._targets = [],
            i._activeTarget = null,
            i._scrollHeight = 0,
            H.on(i._scrollElement, "scroll.bs.scrollspy", (function(t) {
                return i._process(t)
            }
            )),
            i.refresh(),
            i._process(),
            i
        }
        i(o, t);
        var r = o.prototype;
        return r.refresh = function() {
            var t = this
              , e = this._scrollElement === this._scrollElement.window ? "offset" : "position"
              , n = "auto" === this._config.method ? e : this._config.method
              , i = "position" === n ? this._getScrollTop() : 0;
            this._offsets = [],
            this._targets = [],
            this._scrollHeight = this._getScrollHeight(),
            q.find(this._selector).map((function(t) {
                var e = l(t)
                  , o = e ? q.findOne(e) : null;
                if (o) {
                    var r = o.getBoundingClientRect();
                    if (r.width || r.height)
                        return [Y[n](o).top + i, e]
                }
                return null
            }
            )).filter((function(t) {
                return t
            }
            )).sort((function(t, e) {
                return t[0] - e[0]
            }
            )).forEach((function(e) {
                t._offsets.push(e[0]),
                t._targets.push(e[1])
            }
            ))
        }
        ,
        r.dispose = function() {
            t.prototype.dispose.call(this),
            H.off(this._scrollElement, ".bs.scrollspy"),
            this._scrollElement = null,
            this._config = null,
            this._selector = null,
            this._offsets = null,
            this._targets = null,
            this._activeTarget = null,
            this._scrollHeight = null
        }
        ,
        r._getConfig = function(t) {
            if ("string" != typeof (t = n({}, ze, "object" == typeof t && t ? t : {})).target && d(t.target)) {
                var e = t.target.id;
                e || (e = s(qe),
                t.target.id = e),
                t.target = "#" + e
            }
            return p(qe, t, Ve),
            t
        }
        ,
        r._getScrollTop = function() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }
        ,
        r._getScrollHeight = function() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }
        ,
        r._getOffsetHeight = function() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }
        ,
        r._process = function() {
            var t = this._getScrollTop() + this._config.offset
              , e = this._getScrollHeight()
              , n = this._config.offset + e - this._getOffsetHeight();
            if (this._scrollHeight !== e && this.refresh(),
            t >= n) {
                var i = this._targets[this._targets.length - 1];
                this._activeTarget !== i && this._activate(i)
            } else {
                if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0)
                    return this._activeTarget = null,
                    void this._clear();
                for (var o = this._offsets.length; o--; ) {
                    this._activeTarget !== this._targets[o] && t >= this._offsets[o] && (void 0 === this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o])
                }
            }
        }
        ,
        r._activate = function(t) {
            this._activeTarget = t,
            this._clear();
            var e = this._selector.split(",").map((function(e) {
                return e + '[data-bs-target="' + t + '"],' + e + '[href="' + t + '"]'
            }
            ))
              , n = q.findOne(e.join(","));
            n.classList.contains("dropdown-item") ? (q.findOne(".dropdown-toggle", n.closest(".dropdown")).classList.add("active"),
            n.classList.add("active")) : (n.classList.add("active"),
            q.parents(n, ".nav, .list-group").forEach((function(t) {
                q.prev(t, ".nav-link, .list-group-item").forEach((function(t) {
                    return t.classList.add("active")
                }
                )),
                q.prev(t, ".nav-item").forEach((function(t) {
                    q.children(t, ".nav-link").forEach((function(t) {
                        return t.classList.add("active")
                    }
                    ))
                }
                ))
            }
            ))),
            H.trigger(this._scrollElement, "activate.bs.scrollspy", {
                relatedTarget: t
            })
        }
        ,
        r._clear = function() {
            q.find(this._selector).filter((function(t) {
                return t.classList.contains("active")
            }
            )).forEach((function(t) {
                return t.classList.remove("active")
            }
            ))
        }
        ,
        o.jQueryInterface = function(t) {
            return this.each((function() {
                var e = T(this, "bs.scrollspy");
                if (e || (e = new o(this,"object" == typeof t && t)),
                "string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError('No method named "' + t + '"');
                    e[t]()
                }
            }
            ))
        }
        ,
        e(o, null, [{
            key: "Default",
            get: function() {
                return ze
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return "bs.scrollspy"
            }
        }]),
        o
    }(R);
    H.on(window, "load.bs.scrollspy.data-api", (function() {
        q.find('[data-bs-spy="scroll"]').forEach((function(t) {
            return new Xe(t,Y.getDataAttributes(t))
        }
        ))
    }
    )),
    b((function() {
        var t = _();
        if (t) {
            var e = t.fn[qe];
            t.fn[qe] = Xe.jQueryInterface,
            t.fn[qe].Constructor = Xe,
            t.fn[qe].noConflict = function() {
                return t.fn[qe] = e,
                Xe.jQueryInterface
            }
        }
    }
    ));
    var $e = function(t) {
        function n() {
            return t.apply(this, arguments) || this
        }
        i(n, t);
        var o = n.prototype;
        return o.show = function() {
            var t = this;
            if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains("active") || this._element.classList.contains("disabled"))) {
                var e, n = c(this._element), i = this._element.closest(".nav, .list-group");
                if (i) {
                    var o = "UL" === i.nodeName || "OL" === i.nodeName ? ":scope > li > .active" : ".active";
                    e = (e = q.find(o, i))[e.length - 1]
                }
                var r = null;
                if (e && (r = H.trigger(e, "hide.bs.tab", {
                    relatedTarget: this._element
                })),
                !(H.trigger(this._element, "show.bs.tab", {
                    relatedTarget: e
                }).defaultPrevented || null !== r && r.defaultPrevented)) {
                    this._activate(this._element, i);
                    var s = function() {
                        H.trigger(e, "hidden.bs.tab", {
                            relatedTarget: t._element
                        }),
                        H.trigger(t._element, "shown.bs.tab", {
                            relatedTarget: e
                        })
                    };
                    n ? this._activate(n, n.parentNode, s) : s()
                }
            }
        }
        ,
        o._activate = function(t, e, n) {
            var i = this
              , o = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? q.children(e, ".active") : q.find(":scope > li > .active", e))[0]
              , r = n && o && o.classList.contains("fade")
              , s = function() {
                return i._transitionComplete(t, o, n)
            };
            if (o && r) {
                var a = u(o);
                o.classList.remove("show"),
                H.one(o, "transitionend", s),
                h(o, a)
            } else
                s()
        }
        ,
        o._transitionComplete = function(t, e, n) {
            if (e) {
                e.classList.remove("active");
                var i = q.findOne(":scope > .dropdown-menu .active", e.parentNode);
                i && i.classList.remove("active"),
                "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
            }
            (t.classList.add("active"),
            "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0),
            v(t),
            t.classList.contains("fade") && t.classList.add("show"),
            t.parentNode && t.parentNode.classList.contains("dropdown-menu")) && (t.closest(".dropdown") && q.find(".dropdown-toggle").forEach((function(t) {
                return t.classList.add("active")
            }
            )),
            t.setAttribute("aria-expanded", !0));
            n && n()
        }
        ,
        n.jQueryInterface = function(t) {
            return this.each((function() {
                var e = T(this, "bs.tab") || new n(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError('No method named "' + t + '"');
                    e[t]()
                }
            }
            ))
        }
        ,
        e(n, null, [{
            key: "DATA_KEY",
            get: function() {
                return "bs.tab"
            }
        }]),
        n
    }(R);
    H.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', (function(t) {
        t.preventDefault(),
        (T(this, "bs.tab") || new $e(this)).show()
    }
    )),
    b((function() {
        var t = _();
        if (t) {
            var e = t.fn.tab;
            t.fn.tab = $e.jQueryInterface,
            t.fn.tab.Constructor = $e,
            t.fn.tab.noConflict = function() {
                return t.fn.tab = e,
                $e.jQueryInterface
            }
        }
    }
    ));
    var Ge = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }
      , Ze = {
        animation: !0,
        autohide: !0,
        delay: 5e3
    }
      , Je = function(t) {
        function o(e, n) {
            var i;
            return (i = t.call(this, e) || this)._config = i._getConfig(n),
            i._timeout = null,
            i._setListeners(),
            i
        }
        i(o, t);
        var r = o.prototype;
        return r.show = function() {
            var t = this;
            if (!H.trigger(this._element, "show.bs.toast").defaultPrevented) {
                this._clearTimeout(),
                this._config.animation && this._element.classList.add("fade");
                var e = function() {
                    t._element.classList.remove("showing"),
                    t._element.classList.add("show"),
                    H.trigger(t._element, "shown.bs.toast"),
                    t._config.autohide && (t._timeout = setTimeout((function() {
                        t.hide()
                    }
                    ), t._config.delay))
                };
                if (this._element.classList.remove("hide"),
                v(this._element),
                this._element.classList.add("showing"),
                this._config.animation) {
                    var n = u(this._element);
                    H.one(this._element, "transitionend", e),
                    h(this._element, n)
                } else
                    e()
            }
        }
        ,
        r.hide = function() {
            var t = this;
            if (this._element.classList.contains("show") && !H.trigger(this._element, "hide.bs.toast").defaultPrevented) {
                var e = function() {
                    t._element.classList.add("hide"),
                    H.trigger(t._element, "hidden.bs.toast")
                };
                if (this._element.classList.remove("show"),
                this._config.animation) {
                    var n = u(this._element);
                    H.one(this._element, "transitionend", e),
                    h(this._element, n)
                } else
                    e()
            }
        }
        ,
        r.dispose = function() {
            this._clearTimeout(),
            this._element.classList.contains("show") && this._element.classList.remove("show"),
            H.off(this._element, "click.dismiss.bs.toast"),
            t.prototype.dispose.call(this),
            this._config = null
        }
        ,
        r._getConfig = function(t) {
            return t = n({}, Ze, Y.getDataAttributes(this._element), "object" == typeof t && t ? t : {}),
            p("toast", t, this.constructor.DefaultType),
            t
        }
        ,
        r._setListeners = function() {
            var t = this;
            H.on(this._element, "click.dismiss.bs.toast", '[data-bs-dismiss="toast"]', (function() {
                return t.hide()
            }
            ))
        }
        ,
        r._clearTimeout = function() {
            clearTimeout(this._timeout),
            this._timeout = null
        }
        ,
        o.jQueryInterface = function(t) {
            return this.each((function() {
                var e = T(this, "bs.toast");
                if (e || (e = new o(this,"object" == typeof t && t)),
                "string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError('No method named "' + t + '"');
                    e[t](this)
                }
            }
            ))
        }
        ,
        e(o, null, [{
            key: "DefaultType",
            get: function() {
                return Ge
            }
        }, {
            key: "Default",
            get: function() {
                return Ze
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return "bs.toast"
            }
        }]),
        o
    }(R);
    return b((function() {
        var t = _();
        if (t) {
            var e = t.fn.toast;
            t.fn.toast = Je.jQueryInterface,
            t.fn.toast.Constructor = Je,
            t.fn.toast.noConflict = function() {
                return t.fn.toast = e,
                Je.jQueryInterface
            }
        }
    }
    )),
    {
        Alert: K,
        Button: Q,
        Carousel: Z,
        Collapse: nt,
        Dropdown: Te,
        Modal: Le,
        Popover: Ye,
        ScrollSpy: Xe,
        Tab: $e,
        Toast: Je,
        Tooltip: Re
    }
}
));
!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper = t()
}(this, (function() {
    "use strict";
    function e(e) {
        return null !== e && "object" == typeof e && "constructor"in e && e.constructor === Object
    }
    function t(s, a) {
        void 0 === s && (s = {}),
        void 0 === a && (a = {}),
        Object.keys(a).forEach((i=>{
            void 0 === s[i] ? s[i] = a[i] : e(a[i]) && e(s[i]) && Object.keys(a[i]).length > 0 && t(s[i], a[i])
        }
        ))
    }
    const s = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: {
            blur() {},
            nodeName: ""
        },
        querySelector: ()=>null,
        querySelectorAll: ()=>[],
        getElementById: ()=>null,
        createEvent: ()=>({
            initEvent() {}
        }),
        createElement: ()=>({
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName: ()=>[]
        }),
        createElementNS: ()=>({}),
        importNode: ()=>null,
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        }
    };
    function a() {
        const e = "undefined" != typeof document ? document : {};
        return t(e, s),
        e
    }
    const i = {
        document: s,
        navigator: {
            userAgent: ""
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        },
        history: {
            replaceState() {},
            pushState() {},
            go() {},
            back() {}
        },
        CustomEvent: function() {
            return this
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: ()=>({
            getPropertyValue: ()=>""
        }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: ()=>({}),
        requestAnimationFrame: e=>"undefined" == typeof setTimeout ? (e(),
        null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
            "undefined" != typeof setTimeout && clearTimeout(e)
        }
    };
    function r() {
        const e = "undefined" != typeof window ? window : {};
        return t(e, i),
        e
    }
    class n extends Array {
        constructor(e) {
            "number" == typeof e ? super(e) : (super(...e || []),
            function(e) {
                const t = e.__proto__;
                Object.defineProperty(e, "__proto__", {
                    get: ()=>t,
                    set(e) {
                        t.__proto__ = e
                    }
                })
            }(this))
        }
    }
    function l(e) {
        void 0 === e && (e = []);
        const t = [];
        return e.forEach((e=>{
            Array.isArray(e) ? t.push(...l(e)) : t.push(e)
        }
        )),
        t
    }
    function o(e, t) {
        return Array.prototype.filter.call(e, t)
    }
    function d(e, t) {
        const s = r()
          , i = a();
        let l = [];
        if (!t && e instanceof n)
            return e;
        if (!e)
            return new n(l);
        if ("string" == typeof e) {
            const s = e.trim();
            if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
                let e = "div";
                0 === s.indexOf("<li") && (e = "ul"),
                0 === s.indexOf("<tr") && (e = "tbody"),
                0 !== s.indexOf("<td") && 0 !== s.indexOf("<th") || (e = "tr"),
                0 === s.indexOf("<tbody") && (e = "table"),
                0 === s.indexOf("<option") && (e = "select");
                const t = i.createElement(e);
                t.innerHTML = s;
                for (let e = 0; e < t.childNodes.length; e += 1)
                    l.push(t.childNodes[e])
            } else
                l = function(e, t) {
                    if ("string" != typeof e)
                        return [e];
                    const s = []
                      , a = t.querySelectorAll(e);
                    for (let e = 0; e < a.length; e += 1)
                        s.push(a[e]);
                    return s
                }(e.trim(), t || i)
        } else if (e.nodeType || e === s || e === i)
            l.push(e);
        else if (Array.isArray(e)) {
            if (e instanceof n)
                return e;
            l = e
        }
        return new n(function(e) {
            const t = [];
            for (let s = 0; s < e.length; s += 1)
                -1 === t.indexOf(e[s]) && t.push(e[s]);
            return t
        }(l))
    }
    d.fn = n.prototype;
    const c = {
        addClass: function() {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
                t[s] = arguments[s];
            const a = l(t.map((e=>e.split(" "))));
            return this.forEach((e=>{
                e.classList.add(...a)
            }
            )),
            this
        },
        removeClass: function() {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
                t[s] = arguments[s];
            const a = l(t.map((e=>e.split(" "))));
            return this.forEach((e=>{
                e.classList.remove(...a)
            }
            )),
            this
        },
        hasClass: function() {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
                t[s] = arguments[s];
            const a = l(t.map((e=>e.split(" "))));
            return o(this, (e=>a.filter((t=>e.classList.contains(t))).length > 0)).length > 0
        },
        toggleClass: function() {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
                t[s] = arguments[s];
            const a = l(t.map((e=>e.split(" "))));
            this.forEach((e=>{
                a.forEach((t=>{
                    e.classList.toggle(t)
                }
                ))
            }
            ))
        },
        attr: function(e, t) {
            if (1 === arguments.length && "string" == typeof e)
                return this[0] ? this[0].getAttribute(e) : void 0;
            for (let s = 0; s < this.length; s += 1)
                if (2 === arguments.length)
                    this[s].setAttribute(e, t);
                else
                    for (const t in e)
                        this[s][t] = e[t],
                        this[s].setAttribute(t, e[t]);
            return this
        },
        removeAttr: function(e) {
            for (let t = 0; t < this.length; t += 1)
                this[t].removeAttribute(e);
            return this
        },
        transform: function(e) {
            for (let t = 0; t < this.length; t += 1)
                this[t].style.transform = e;
            return this
        },
        transition: function(e) {
            for (let t = 0; t < this.length; t += 1)
                this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
            return this
        },
        on: function() {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
                t[s] = arguments[s];
            let[a,i,r,n] = t;
            function l(e) {
                const t = e.target;
                if (!t)
                    return;
                const s = e.target.dom7EventData || [];
                if (s.indexOf(e) < 0 && s.unshift(e),
                d(t).is(i))
                    r.apply(t, s);
                else {
                    const e = d(t).parents();
                    for (let t = 0; t < e.length; t += 1)
                        d(e[t]).is(i) && r.apply(e[t], s)
                }
            }
            function o(e) {
                const t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e),
                r.apply(this, t)
            }
            "function" == typeof t[1] && ([a,r,n] = t,
            i = void 0),
            n || (n = !1);
            const c = a.split(" ");
            let p;
            for (let e = 0; e < this.length; e += 1) {
                const t = this[e];
                if (i)
                    for (p = 0; p < c.length; p += 1) {
                        const e = c[p];
                        t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                        t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                        t.dom7LiveListeners[e].push({
                            listener: r,
                            proxyListener: l
                        }),
                        t.addEventListener(e, l, n)
                    }
                else
                    for (p = 0; p < c.length; p += 1) {
                        const e = c[p];
                        t.dom7Listeners || (t.dom7Listeners = {}),
                        t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                        t.dom7Listeners[e].push({
                            listener: r,
                            proxyListener: o
                        }),
                        t.addEventListener(e, o, n)
                    }
            }
            return this
        },
        off: function() {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
                t[s] = arguments[s];
            let[a,i,r,n] = t;
            "function" == typeof t[1] && ([a,r,n] = t,
            i = void 0),
            n || (n = !1);
            const l = a.split(" ");
            for (let e = 0; e < l.length; e += 1) {
                const t = l[e];
                for (let e = 0; e < this.length; e += 1) {
                    const s = this[e];
                    let a;
                    if (!i && s.dom7Listeners ? a = s.dom7Listeners[t] : i && s.dom7LiveListeners && (a = s.dom7LiveListeners[t]),
                    a && a.length)
                        for (let e = a.length - 1; e >= 0; e -= 1) {
                            const i = a[e];
                            r && i.listener === r || r && i.listener && i.listener.dom7proxy && i.listener.dom7proxy === r ? (s.removeEventListener(t, i.proxyListener, n),
                            a.splice(e, 1)) : r || (s.removeEventListener(t, i.proxyListener, n),
                            a.splice(e, 1))
                        }
                }
            }
            return this
        },
        trigger: function() {
            const e = r();
            for (var t = arguments.length, s = new Array(t), a = 0; a < t; a++)
                s[a] = arguments[a];
            const i = s[0].split(" ")
              , n = s[1];
            for (let t = 0; t < i.length; t += 1) {
                const a = i[t];
                for (let t = 0; t < this.length; t += 1) {
                    const i = this[t];
                    if (e.CustomEvent) {
                        const t = new e.CustomEvent(a,{
                            detail: n,
                            bubbles: !0,
                            cancelable: !0
                        });
                        i.dom7EventData = s.filter(((e,t)=>t > 0)),
                        i.dispatchEvent(t),
                        i.dom7EventData = [],
                        delete i.dom7EventData
                    }
                }
            }
            return this
        },
        transitionEnd: function(e) {
            const t = this;
            return e && t.on("transitionend", (function s(a) {
                a.target === this && (e.call(this, a),
                t.off("transitionend", s))
            }
            )),
            this
        },
        outerWidth: function(e) {
            if (this.length > 0) {
                if (e) {
                    const e = this.styles();
                    return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        },
        outerHeight: function(e) {
            if (this.length > 0) {
                if (e) {
                    const e = this.styles();
                    return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        },
        styles: function() {
            const e = r();
            return this[0] ? e.getComputedStyle(this[0], null) : {}
        },
        offset: function() {
            if (this.length > 0) {
                const e = r()
                  , t = a()
                  , s = this[0]
                  , i = s.getBoundingClientRect()
                  , n = t.body
                  , l = s.clientTop || n.clientTop || 0
                  , o = s.clientLeft || n.clientLeft || 0
                  , d = s === e ? e.scrollY : s.scrollTop
                  , c = s === e ? e.scrollX : s.scrollLeft;
                return {
                    top: i.top + d - l,
                    left: i.left + c - o
                }
            }
            return null
        },
        css: function(e, t) {
            const s = r();
            let a;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (a = 0; a < this.length; a += 1)
                        for (const t in e)
                            this[a].style[t] = e[t];
                    return this
                }
                if (this[0])
                    return s.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (a = 0; a < this.length; a += 1)
                    this[a].style[e] = t;
                return this
            }
            return this
        },
        each: function(e) {
            return e ? (this.forEach(((t,s)=>{
                e.apply(t, [t, s])
            }
            )),
            this) : this
        },
        html: function(e) {
            if (void 0 === e)
                return this[0] ? this[0].innerHTML : null;
            for (let t = 0; t < this.length; t += 1)
                this[t].innerHTML = e;
            return this
        },
        text: function(e) {
            if (void 0 === e)
                return this[0] ? this[0].textContent.trim() : null;
            for (let t = 0; t < this.length; t += 1)
                this[t].textContent = e;
            return this
        },
        is: function(e) {
            const t = r()
              , s = a()
              , i = this[0];
            let l, o;
            if (!i || void 0 === e)
                return !1;
            if ("string" == typeof e) {
                if (i.matches)
                    return i.matches(e);
                if (i.webkitMatchesSelector)
                    return i.webkitMatchesSelector(e);
                if (i.msMatchesSelector)
                    return i.msMatchesSelector(e);
                for (l = d(e),
                o = 0; o < l.length; o += 1)
                    if (l[o] === i)
                        return !0;
                return !1
            }
            if (e === s)
                return i === s;
            if (e === t)
                return i === t;
            if (e.nodeType || e instanceof n) {
                for (l = e.nodeType ? [e] : e,
                o = 0; o < l.length; o += 1)
                    if (l[o] === i)
                        return !0;
                return !1
            }
            return !1
        },
        index: function() {
            let e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling); )
                    1 === t.nodeType && (e += 1);
                return e
            }
        },
        eq: function(e) {
            if (void 0 === e)
                return this;
            const t = this.length;
            if (e > t - 1)
                return d([]);
            if (e < 0) {
                const s = t + e;
                return d(s < 0 ? [] : [this[s]])
            }
            return d([this[e]])
        },
        append: function() {
            let e;
            const t = a();
            for (let s = 0; s < arguments.length; s += 1) {
                e = s < 0 || arguments.length <= s ? void 0 : arguments[s];
                for (let s = 0; s < this.length; s += 1)
                    if ("string" == typeof e) {
                        const a = t.createElement("div");
                        for (a.innerHTML = e; a.firstChild; )
                            this[s].appendChild(a.firstChild)
                    } else if (e instanceof n)
                        for (let t = 0; t < e.length; t += 1)
                            this[s].appendChild(e[t]);
                    else
                        this[s].appendChild(e)
            }
            return this
        },
        prepend: function(e) {
            const t = a();
            let s, i;
            for (s = 0; s < this.length; s += 1)
                if ("string" == typeof e) {
                    const a = t.createElement("div");
                    for (a.innerHTML = e,
                    i = a.childNodes.length - 1; i >= 0; i -= 1)
                        this[s].insertBefore(a.childNodes[i], this[s].childNodes[0])
                } else if (e instanceof n)
                    for (i = 0; i < e.length; i += 1)
                        this[s].insertBefore(e[i], this[s].childNodes[0]);
                else
                    this[s].insertBefore(e, this[s].childNodes[0]);
            return this
        },
        next: function(e) {
            return this.length > 0 ? e ? this[0].nextElementSibling && d(this[0].nextElementSibling).is(e) ? d([this[0].nextElementSibling]) : d([]) : this[0].nextElementSibling ? d([this[0].nextElementSibling]) : d([]) : d([])
        },
        nextAll: function(e) {
            const t = [];
            let s = this[0];
            if (!s)
                return d([]);
            for (; s.nextElementSibling; ) {
                const a = s.nextElementSibling;
                e ? d(a).is(e) && t.push(a) : t.push(a),
                s = a
            }
            return d(t)
        },
        prev: function(e) {
            if (this.length > 0) {
                const t = this[0];
                return e ? t.previousElementSibling && d(t.previousElementSibling).is(e) ? d([t.previousElementSibling]) : d([]) : t.previousElementSibling ? d([t.previousElementSibling]) : d([])
            }
            return d([])
        },
        prevAll: function(e) {
            const t = [];
            let s = this[0];
            if (!s)
                return d([]);
            for (; s.previousElementSibling; ) {
                const a = s.previousElementSibling;
                e ? d(a).is(e) && t.push(a) : t.push(a),
                s = a
            }
            return d(t)
        },
        parent: function(e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1)
                null !== this[s].parentNode && (e ? d(this[s].parentNode).is(e) && t.push(this[s].parentNode) : t.push(this[s].parentNode));
            return d(t)
        },
        parents: function(e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1) {
                let a = this[s].parentNode;
                for (; a; )
                    e ? d(a).is(e) && t.push(a) : t.push(a),
                    a = a.parentNode
            }
            return d(t)
        },
        closest: function(e) {
            let t = this;
            return void 0 === e ? d([]) : (t.is(e) || (t = t.parents(e).eq(0)),
            t)
        },
        find: function(e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1) {
                const a = this[s].querySelectorAll(e);
                for (let e = 0; e < a.length; e += 1)
                    t.push(a[e])
            }
            return d(t)
        },
        children: function(e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1) {
                const a = this[s].children;
                for (let s = 0; s < a.length; s += 1)
                    e && !d(a[s]).is(e) || t.push(a[s])
            }
            return d(t)
        },
        filter: function(e) {
            return d(o(this, e))
        },
        remove: function() {
            for (let e = 0; e < this.length; e += 1)
                this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        }
    };
    function p(e, t) {
        return void 0 === t && (t = 0),
        setTimeout(e, t)
    }
    function u() {
        return Date.now()
    }
    function h(e, t) {
        void 0 === t && (t = "x");
        const s = r();
        let a, i, n;
        const l = function(e) {
            const t = r();
            let s;
            return t.getComputedStyle && (s = t.getComputedStyle(e, null)),
            !s && e.currentStyle && (s = e.currentStyle),
            s || (s = e.style),
            s
        }(e);
        return s.WebKitCSSMatrix ? (i = l.transform || l.webkitTransform,
        i.split(",").length > 6 && (i = i.split(", ").map((e=>e.replace(",", "."))).join(", ")),
        n = new s.WebKitCSSMatrix("none" === i ? "" : i)) : (n = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
        a = n.toString().split(",")),
        "x" === t && (i = s.WebKitCSSMatrix ? n.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])),
        "y" === t && (i = s.WebKitCSSMatrix ? n.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])),
        i || 0
    }
    function m(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
    }
    function f(e) {
        return "undefined" != typeof window && void 0 !== window.HTMLElement ? e instanceof HTMLElement : e && (1 === e.nodeType || 11 === e.nodeType)
    }
    function g() {
        const e = Object(arguments.length <= 0 ? void 0 : arguments[0])
          , t = ["__proto__", "constructor", "prototype"];
        for (let s = 1; s < arguments.length; s += 1) {
            const a = s < 0 || arguments.length <= s ? void 0 : arguments[s];
            if (null != a && !f(a)) {
                const s = Object.keys(Object(a)).filter((e=>t.indexOf(e) < 0));
                for (let t = 0, i = s.length; t < i; t += 1) {
                    const i = s[t]
                      , r = Object.getOwnPropertyDescriptor(a, i);
                    void 0 !== r && r.enumerable && (m(e[i]) && m(a[i]) ? a[i].__swiper__ ? e[i] = a[i] : g(e[i], a[i]) : !m(e[i]) && m(a[i]) ? (e[i] = {},
                    a[i].__swiper__ ? e[i] = a[i] : g(e[i], a[i])) : e[i] = a[i])
                }
            }
        }
        return e
    }
    function v(e, t, s) {
        e.style.setProperty(t, s)
    }
    function w(e) {
        let {swiper: t, targetPosition: s, side: a} = e;
        const i = r()
          , n = -t.translate;
        let l, o = null;
        const d = t.params.speed;
        t.wrapperEl.style.scrollSnapType = "none",
        i.cancelAnimationFrame(t.cssModeFrameID);
        const c = s > n ? "next" : "prev"
          , p = (e,t)=>"next" === c && e >= t || "prev" === c && e <= t
          , u = ()=>{
            l = (new Date).getTime(),
            null === o && (o = l);
            const e = Math.max(Math.min((l - o) / d, 1), 0)
              , r = .5 - Math.cos(e * Math.PI) / 2;
            let c = n + r * (s - n);
            if (p(c, s) && (c = s),
            t.wrapperEl.scrollTo({
                [a]: c
            }),
            p(c, s))
                return t.wrapperEl.style.overflow = "hidden",
                t.wrapperEl.style.scrollSnapType = "",
                setTimeout((()=>{
                    t.wrapperEl.style.overflow = "",
                    t.wrapperEl.scrollTo({
                        [a]: c
                    })
                }
                )),
                void i.cancelAnimationFrame(t.cssModeFrameID);
            t.cssModeFrameID = i.requestAnimationFrame(u)
        }
        ;
        u()
    }
    let b, x, y;
    function E() {
        return b || (b = function() {
            const e = r()
              , t = a();
            return {
                smoothScroll: t.documentElement && "scrollBehavior"in t.documentElement.style,
                touch: !!("ontouchstart"in e || e.DocumentTouch && t instanceof e.DocumentTouch),
                passiveListener: function() {
                    let t = !1;
                    try {
                        const s = Object.defineProperty({}, "passive", {
                            get() {
                                t = !0
                            }
                        });
                        e.addEventListener("testPassiveListener", null, s)
                    } catch (e) {}
                    return t
                }(),
                gestures: "ongesturestart"in e
            }
        }()),
        b
    }
    function C(e) {
        return void 0 === e && (e = {}),
        x || (x = function(e) {
            let {userAgent: t} = void 0 === e ? {} : e;
            const s = E()
              , a = r()
              , i = a.navigator.platform
              , n = t || a.navigator.userAgent
              , l = {
                ios: !1,
                android: !1
            }
              , o = a.screen.width
              , d = a.screen.height
              , c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
            let p = n.match(/(iPad).*OS\s([\d_]+)/);
            const u = n.match(/(iPod)(.*OS\s([\d_]+))?/)
              , h = !p && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/)
              , m = "Win32" === i;
            let f = "MacIntel" === i;
            return !p && f && s.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${o}x${d}`) >= 0 && (p = n.match(/(Version)\/([\d.]+)/),
            p || (p = [0, 1, "13_0_0"]),
            f = !1),
            c && !m && (l.os = "android",
            l.android = !0),
            (p || h || u) && (l.os = "ios",
            l.ios = !0),
            l
        }(e)),
        x
    }
    function T() {
        return y || (y = function() {
            const e = r();
            return {
                isSafari: function() {
                    const t = e.navigator.userAgent.toLowerCase();
                    return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
                }(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
            }
        }()),
        y
    }
    Object.keys(c).forEach((e=>{
        Object.defineProperty(d.fn, e, {
            value: c[e],
            writable: !0
        })
    }
    ));
    var $ = {
        on(e, t, s) {
            const a = this;
            if (!a.eventsListeners || a.destroyed)
                return a;
            if ("function" != typeof t)
                return a;
            const i = s ? "unshift" : "push";
            return e.split(" ").forEach((e=>{
                a.eventsListeners[e] || (a.eventsListeners[e] = []),
                a.eventsListeners[e][i](t)
            }
            )),
            a
        },
        once(e, t, s) {
            const a = this;
            if (!a.eventsListeners || a.destroyed)
                return a;
            if ("function" != typeof t)
                return a;
            function i() {
                a.off(e, i),
                i.__emitterProxy && delete i.__emitterProxy;
                for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++)
                    r[n] = arguments[n];
                t.apply(a, r)
            }
            return i.__emitterProxy = t,
            a.on(e, i, s)
        },
        onAny(e, t) {
            const s = this;
            if (!s.eventsListeners || s.destroyed)
                return s;
            if ("function" != typeof e)
                return s;
            const a = t ? "unshift" : "push";
            return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[a](e),
            s
        },
        offAny(e) {
            const t = this;
            if (!t.eventsListeners || t.destroyed)
                return t;
            if (!t.eventsAnyListeners)
                return t;
            const s = t.eventsAnyListeners.indexOf(e);
            return s >= 0 && t.eventsAnyListeners.splice(s, 1),
            t
        },
        off(e, t) {
            const s = this;
            return !s.eventsListeners || s.destroyed ? s : s.eventsListeners ? (e.split(" ").forEach((e=>{
                void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach(((a,i)=>{
                    (a === t || a.__emitterProxy && a.__emitterProxy === t) && s.eventsListeners[e].splice(i, 1)
                }
                ))
            }
            )),
            s) : s
        },
        emit() {
            const e = this;
            if (!e.eventsListeners || e.destroyed)
                return e;
            if (!e.eventsListeners)
                return e;
            let t, s, a;
            for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++)
                r[n] = arguments[n];
            "string" == typeof r[0] || Array.isArray(r[0]) ? (t = r[0],
            s = r.slice(1, r.length),
            a = e) : (t = r[0].events,
            s = r[0].data,
            a = r[0].context || e),
            s.unshift(a);
            return (Array.isArray(t) ? t : t.split(" ")).forEach((t=>{
                e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e=>{
                    e.apply(a, [t, ...s])
                }
                )),
                e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e=>{
                    e.apply(a, s)
                }
                ))
            }
            )),
            e
        }
    };
    var S = {
        updateSize: function() {
            const e = this;
            let t, s;
            const a = e.$el;
            t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : a[0].clientWidth,
            s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : a[0].clientHeight,
            0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(a.css("padding-left") || 0, 10) - parseInt(a.css("padding-right") || 0, 10),
            s = s - parseInt(a.css("padding-top") || 0, 10) - parseInt(a.css("padding-bottom") || 0, 10),
            Number.isNaN(t) && (t = 0),
            Number.isNaN(s) && (s = 0),
            Object.assign(e, {
                width: t,
                height: s,
                size: e.isHorizontal() ? t : s
            }))
        },
        updateSlides: function() {
            const e = this;
            function t(t) {
                return e.isHorizontal() ? t : {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom"
                }[t]
            }
            function s(e, s) {
                return parseFloat(e.getPropertyValue(t(s)) || 0)
            }
            const a = e.params
              , {$wrapperEl: i, size: r, rtlTranslate: n, wrongRTL: l} = e
              , o = e.virtual && a.virtual.enabled
              , d = o ? e.virtual.slides.length : e.slides.length
              , c = i.children(`.${e.params.slideClass}`)
              , p = o ? e.virtual.slides.length : c.length;
            let u = [];
            const h = []
              , m = [];
            let f = a.slidesOffsetBefore;
            "function" == typeof f && (f = a.slidesOffsetBefore.call(e));
            let g = a.slidesOffsetAfter;
            "function" == typeof g && (g = a.slidesOffsetAfter.call(e));
            const w = e.snapGrid.length
              , b = e.slidesGrid.length;
            let x = a.spaceBetween
              , y = -f
              , E = 0
              , C = 0;
            if (void 0 === r)
                return;
            "string" == typeof x && x.indexOf("%") >= 0 && (x = parseFloat(x.replace("%", "")) / 100 * r),
            e.virtualSize = -x,
            n ? c.css({
                marginLeft: "",
                marginBottom: "",
                marginTop: ""
            }) : c.css({
                marginRight: "",
                marginBottom: "",
                marginTop: ""
            }),
            a.centeredSlides && a.cssMode && (v(e.wrapperEl, "--swiper-centered-offset-before", ""),
            v(e.wrapperEl, "--swiper-centered-offset-after", ""));
            const T = a.grid && a.grid.rows > 1 && e.grid;
            let $;
            T && e.grid.initSlides(p);
            const S = "auto" === a.slidesPerView && a.breakpoints && Object.keys(a.breakpoints).filter((e=>void 0 !== a.breakpoints[e].slidesPerView)).length > 0;
            for (let i = 0; i < p; i += 1) {
                $ = 0;
                const n = c.eq(i);
                if (T && e.grid.updateSlide(i, n, p, t),
                "none" !== n.css("display")) {
                    if ("auto" === a.slidesPerView) {
                        S && (c[i].style[t("width")] = "");
                        const r = getComputedStyle(n[0])
                          , l = n[0].style.transform
                          , o = n[0].style.webkitTransform;
                        if (l && (n[0].style.transform = "none"),
                        o && (n[0].style.webkitTransform = "none"),
                        a.roundLengths)
                            $ = e.isHorizontal() ? n.outerWidth(!0) : n.outerHeight(!0);
                        else {
                            const e = s(r, "width")
                              , t = s(r, "padding-left")
                              , a = s(r, "padding-right")
                              , i = s(r, "margin-left")
                              , l = s(r, "margin-right")
                              , o = r.getPropertyValue("box-sizing");
                            if (o && "border-box" === o)
                                $ = e + i + l;
                            else {
                                const {clientWidth: s, offsetWidth: r} = n[0];
                                $ = e + t + a + i + l + (r - s)
                            }
                        }
                        l && (n[0].style.transform = l),
                        o && (n[0].style.webkitTransform = o),
                        a.roundLengths && ($ = Math.floor($))
                    } else
                        $ = (r - (a.slidesPerView - 1) * x) / a.slidesPerView,
                        a.roundLengths && ($ = Math.floor($)),
                        c[i] && (c[i].style[t("width")] = `${$}px`);
                    c[i] && (c[i].swiperSlideSize = $),
                    m.push($),
                    a.centeredSlides ? (y = y + $ / 2 + E / 2 + x,
                    0 === E && 0 !== i && (y = y - r / 2 - x),
                    0 === i && (y = y - r / 2 - x),
                    Math.abs(y) < .001 && (y = 0),
                    a.roundLengths && (y = Math.floor(y)),
                    C % a.slidesPerGroup == 0 && u.push(y),
                    h.push(y)) : (a.roundLengths && (y = Math.floor(y)),
                    (C - Math.min(e.params.slidesPerGroupSkip, C)) % e.params.slidesPerGroup == 0 && u.push(y),
                    h.push(y),
                    y = y + $ + x),
                    e.virtualSize += $ + x,
                    E = $,
                    C += 1
                }
            }
            if (e.virtualSize = Math.max(e.virtualSize, r) + g,
            n && l && ("slide" === a.effect || "coverflow" === a.effect) && i.css({
                width: `${e.virtualSize + a.spaceBetween}px`
            }),
            a.setWrapperSize && i.css({
                [t("width")]: `${e.virtualSize + a.spaceBetween}px`
            }),
            T && e.grid.updateWrapperSize($, u, t),
            !a.centeredSlides) {
                const t = [];
                for (let s = 0; s < u.length; s += 1) {
                    let i = u[s];
                    a.roundLengths && (i = Math.floor(i)),
                    u[s] <= e.virtualSize - r && t.push(i)
                }
                u = t,
                Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - r)
            }
            if (0 === u.length && (u = [0]),
            0 !== a.spaceBetween) {
                const s = e.isHorizontal() && n ? "marginLeft" : t("marginRight");
                c.filter(((e,t)=>!a.cssMode || t !== c.length - 1)).css({
                    [s]: `${x}px`
                })
            }
            if (a.centeredSlides && a.centeredSlidesBounds) {
                let e = 0;
                m.forEach((t=>{
                    e += t + (a.spaceBetween ? a.spaceBetween : 0)
                }
                )),
                e -= a.spaceBetween;
                const t = e - r;
                u = u.map((e=>e < 0 ? -f : e > t ? t + g : e))
            }
            if (a.centerInsufficientSlides) {
                let e = 0;
                if (m.forEach((t=>{
                    e += t + (a.spaceBetween ? a.spaceBetween : 0)
                }
                )),
                e -= a.spaceBetween,
                e < r) {
                    const t = (r - e) / 2;
                    u.forEach(((e,s)=>{
                        u[s] = e - t
                    }
                    )),
                    h.forEach(((e,s)=>{
                        h[s] = e + t
                    }
                    ))
                }
            }
            if (Object.assign(e, {
                slides: c,
                snapGrid: u,
                slidesGrid: h,
                slidesSizesGrid: m
            }),
            a.centeredSlides && a.cssMode && !a.centeredSlidesBounds) {
                v(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"),
                v(e.wrapperEl, "--swiper-centered-offset-after", e.size / 2 - m[m.length - 1] / 2 + "px");
                const t = -e.snapGrid[0]
                  , s = -e.slidesGrid[0];
                e.snapGrid = e.snapGrid.map((e=>e + t)),
                e.slidesGrid = e.slidesGrid.map((e=>e + s))
            }
            if (p !== d && e.emit("slidesLengthChange"),
            u.length !== w && (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
            h.length !== b && e.emit("slidesGridLengthChange"),
            a.watchSlidesProgress && e.updateSlidesOffset(),
            !(o || a.cssMode || "slide" !== a.effect && "fade" !== a.effect)) {
                const t = `${a.containerModifierClass}backface-hidden`
                  , s = e.$el.hasClass(t);
                p <= a.maxBackfaceHiddenSlides ? s || e.$el.addClass(t) : s && e.$el.removeClass(t)
            }
        },
        updateAutoHeight: function(e) {
            const t = this
              , s = []
              , a = t.virtual && t.params.virtual.enabled;
            let i, r = 0;
            "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
            const n = e=>a ? t.slides.filter((t=>parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e))[0] : t.slides.eq(e)[0];
            if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                if (t.params.centeredSlides)
                    (t.visibleSlides || d([])).each((e=>{
                        s.push(e)
                    }
                    ));
                else
                    for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                        const e = t.activeIndex + i;
                        if (e > t.slides.length && !a)
                            break;
                        s.push(n(e))
                    }
            else
                s.push(n(t.activeIndex));
            for (i = 0; i < s.length; i += 1)
                if (void 0 !== s[i]) {
                    const e = s[i].offsetHeight;
                    r = e > r ? e : r
                }
            (r || 0 === r) && t.$wrapperEl.css("height", `${r}px`)
        },
        updateSlidesOffset: function() {
            const e = this
              , t = e.slides;
            for (let s = 0; s < t.length; s += 1)
                t[s].swiperSlideOffset = e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop
        },
        updateSlidesProgress: function(e) {
            void 0 === e && (e = this && this.translate || 0);
            const t = this
              , s = t.params
              , {slides: a, rtlTranslate: i, snapGrid: r} = t;
            if (0 === a.length)
                return;
            void 0 === a[0].swiperSlideOffset && t.updateSlidesOffset();
            let n = -e;
            i && (n = e),
            a.removeClass(s.slideVisibleClass),
            t.visibleSlidesIndexes = [],
            t.visibleSlides = [];
            for (let e = 0; e < a.length; e += 1) {
                const l = a[e];
                let o = l.swiperSlideOffset;
                s.cssMode && s.centeredSlides && (o -= a[0].swiperSlideOffset);
                const d = (n + (s.centeredSlides ? t.minTranslate() : 0) - o) / (l.swiperSlideSize + s.spaceBetween)
                  , c = (n - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - o) / (l.swiperSlideSize + s.spaceBetween)
                  , p = -(n - o)
                  , u = p + t.slidesSizesGrid[e];
                (p >= 0 && p < t.size - 1 || u > 1 && u <= t.size || p <= 0 && u >= t.size) && (t.visibleSlides.push(l),
                t.visibleSlidesIndexes.push(e),
                a.eq(e).addClass(s.slideVisibleClass)),
                l.progress = i ? -d : d,
                l.originalProgress = i ? -c : c
            }
            t.visibleSlides = d(t.visibleSlides)
        },
        updateProgress: function(e) {
            const t = this;
            if (void 0 === e) {
                const s = t.rtlTranslate ? -1 : 1;
                e = t && t.translate && t.translate * s || 0
            }
            const s = t.params
              , a = t.maxTranslate() - t.minTranslate();
            let {progress: i, isBeginning: r, isEnd: n} = t;
            const l = r
              , o = n;
            0 === a ? (i = 0,
            r = !0,
            n = !0) : (i = (e - t.minTranslate()) / a,
            r = i <= 0,
            n = i >= 1),
            Object.assign(t, {
                progress: i,
                isBeginning: r,
                isEnd: n
            }),
            (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e),
            r && !l && t.emit("reachBeginning toEdge"),
            n && !o && t.emit("reachEnd toEdge"),
            (l && !r || o && !n) && t.emit("fromEdge"),
            t.emit("progress", i)
        },
        updateSlidesClasses: function() {
            const e = this
              , {slides: t, params: s, $wrapperEl: a, activeIndex: i, realIndex: r} = e
              , n = e.virtual && s.virtual.enabled;
            let l;
            t.removeClass(`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`),
            l = n ? e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${i}"]`) : t.eq(i),
            l.addClass(s.slideActiveClass),
            s.loop && (l.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass));
            let o = l.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
            s.loop && 0 === o.length && (o = t.eq(0),
            o.addClass(s.slideNextClass));
            let d = l.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
            s.loop && 0 === d.length && (d = t.eq(-1),
            d.addClass(s.slidePrevClass)),
            s.loop && (o.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass),
            d.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass)),
            e.emitSlidesClasses()
        },
        updateActiveIndex: function(e) {
            const t = this
              , s = t.rtlTranslate ? t.translate : -t.translate
              , {slidesGrid: a, snapGrid: i, params: r, activeIndex: n, realIndex: l, snapIndex: o} = t;
            let d, c = e;
            if (void 0 === c) {
                for (let e = 0; e < a.length; e += 1)
                    void 0 !== a[e + 1] ? s >= a[e] && s < a[e + 1] - (a[e + 1] - a[e]) / 2 ? c = e : s >= a[e] && s < a[e + 1] && (c = e + 1) : s >= a[e] && (c = e);
                r.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0)
            }
            if (i.indexOf(s) >= 0)
                d = i.indexOf(s);
            else {
                const e = Math.min(r.slidesPerGroupSkip, c);
                d = e + Math.floor((c - e) / r.slidesPerGroup)
            }
            if (d >= i.length && (d = i.length - 1),
            c === n)
                return void (d !== o && (t.snapIndex = d,
                t.emit("snapIndexChange")));
            const p = parseInt(t.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
            Object.assign(t, {
                snapIndex: d,
                realIndex: p,
                previousIndex: n,
                activeIndex: c
            }),
            t.emit("activeIndexChange"),
            t.emit("snapIndexChange"),
            l !== p && t.emit("realIndexChange"),
            (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
        },
        updateClickedSlide: function(e) {
            const t = this
              , s = t.params
              , a = d(e).closest(`.${s.slideClass}`)[0];
            let i, r = !1;
            if (a)
                for (let e = 0; e < t.slides.length; e += 1)
                    if (t.slides[e] === a) {
                        r = !0,
                        i = e;
                        break
                    }
            if (!a || !r)
                return t.clickedSlide = void 0,
                void (t.clickedIndex = void 0);
            t.clickedSlide = a,
            t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(d(a).attr("data-swiper-slide-index"), 10) : t.clickedIndex = i,
            s.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
        }
    };
    var M = {
        getTranslate: function(e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            const {params: t, rtlTranslate: s, translate: a, $wrapperEl: i} = this;
            if (t.virtualTranslate)
                return s ? -a : a;
            if (t.cssMode)
                return a;
            let r = h(i[0], e);
            return s && (r = -r),
            r || 0
        },
        setTranslate: function(e, t) {
            const s = this
              , {rtlTranslate: a, params: i, $wrapperEl: r, wrapperEl: n, progress: l} = s;
            let o, d = 0, c = 0;
            s.isHorizontal() ? d = a ? -e : e : c = e,
            i.roundLengths && (d = Math.floor(d),
            c = Math.floor(c)),
            i.cssMode ? n[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -d : -c : i.virtualTranslate || r.transform(`translate3d(${d}px, ${c}px, 0px)`),
            s.previousTranslate = s.translate,
            s.translate = s.isHorizontal() ? d : c;
            const p = s.maxTranslate() - s.minTranslate();
            o = 0 === p ? 0 : (e - s.minTranslate()) / p,
            o !== l && s.updateProgress(e),
            s.emit("setTranslate", s.translate, t)
        },
        minTranslate: function() {
            return -this.snapGrid[0]
        },
        maxTranslate: function() {
            return -this.snapGrid[this.snapGrid.length - 1]
        },
        translateTo: function(e, t, s, a, i) {
            void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === s && (s = !0),
            void 0 === a && (a = !0);
            const r = this
              , {params: n, wrapperEl: l} = r;
            if (r.animating && n.preventInteractionOnTransition)
                return !1;
            const o = r.minTranslate()
              , d = r.maxTranslate();
            let c;
            if (c = a && e > o ? o : a && e < d ? d : e,
            r.updateProgress(c),
            n.cssMode) {
                const e = r.isHorizontal();
                if (0 === t)
                    l[e ? "scrollLeft" : "scrollTop"] = -c;
                else {
                    if (!r.support.smoothScroll)
                        return w({
                            swiper: r,
                            targetPosition: -c,
                            side: e ? "left" : "top"
                        }),
                        !0;
                    l.scrollTo({
                        [e ? "left" : "top"]: -c,
                        behavior: "smooth"
                    })
                }
                return !0
            }
            return 0 === t ? (r.setTransition(0),
            r.setTranslate(c),
            s && (r.emit("beforeTransitionStart", t, i),
            r.emit("transitionEnd"))) : (r.setTransition(t),
            r.setTranslate(c),
            s && (r.emit("beforeTransitionStart", t, i),
            r.emit("transitionStart")),
            r.animating || (r.animating = !0,
            r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(e) {
                r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd),
                r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd),
                r.onTranslateToWrapperTransitionEnd = null,
                delete r.onTranslateToWrapperTransitionEnd,
                s && r.emit("transitionEnd"))
            }
            ),
            r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd),
            r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))),
            !0
        }
    };
    function P(e) {
        let {swiper: t, runCallbacks: s, direction: a, step: i} = e;
        const {activeIndex: r, previousIndex: n} = t;
        let l = a;
        if (l || (l = r > n ? "next" : r < n ? "prev" : "reset"),
        t.emit(`transition${i}`),
        s && r !== n) {
            if ("reset" === l)
                return void t.emit(`slideResetTransition${i}`);
            t.emit(`slideChangeTransition${i}`),
            "next" === l ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`)
        }
    }
    var k = {
        slideTo: function(e, t, s, a, i) {
            if (void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === s && (s = !0),
            "number" != typeof e && "string" != typeof e)
                throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
            if ("string" == typeof e) {
                const t = parseInt(e, 10);
                if (!isFinite(t))
                    throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                e = t
            }
            const r = this;
            let n = e;
            n < 0 && (n = 0);
            const {params: l, snapGrid: o, slidesGrid: d, previousIndex: c, activeIndex: p, rtlTranslate: u, wrapperEl: h, enabled: m} = r;
            if (r.animating && l.preventInteractionOnTransition || !m && !a && !i)
                return !1;
            const f = Math.min(r.params.slidesPerGroupSkip, n);
            let g = f + Math.floor((n - f) / r.params.slidesPerGroup);
            g >= o.length && (g = o.length - 1);
            const v = -o[g];
            if (l.normalizeSlideIndex)
                for (let e = 0; e < d.length; e += 1) {
                    const t = -Math.floor(100 * v)
                      , s = Math.floor(100 * d[e])
                      , a = Math.floor(100 * d[e + 1]);
                    void 0 !== d[e + 1] ? t >= s && t < a - (a - s) / 2 ? n = e : t >= s && t < a && (n = e + 1) : t >= s && (n = e)
                }
            if (r.initialized && n !== p) {
                if (!r.allowSlideNext && v < r.translate && v < r.minTranslate())
                    return !1;
                if (!r.allowSlidePrev && v > r.translate && v > r.maxTranslate() && (p || 0) !== n)
                    return !1
            }
            let b;
            if (n !== (c || 0) && s && r.emit("beforeSlideChangeStart"),
            r.updateProgress(v),
            b = n > p ? "next" : n < p ? "prev" : "reset",
            u && -v === r.translate || !u && v === r.translate)
                return r.updateActiveIndex(n),
                l.autoHeight && r.updateAutoHeight(),
                r.updateSlidesClasses(),
                "slide" !== l.effect && r.setTranslate(v),
                "reset" !== b && (r.transitionStart(s, b),
                r.transitionEnd(s, b)),
                !1;
            if (l.cssMode) {
                const e = r.isHorizontal()
                  , s = u ? v : -v;
                if (0 === t) {
                    const t = r.virtual && r.params.virtual.enabled;
                    t && (r.wrapperEl.style.scrollSnapType = "none",
                    r._immediateVirtual = !0),
                    h[e ? "scrollLeft" : "scrollTop"] = s,
                    t && requestAnimationFrame((()=>{
                        r.wrapperEl.style.scrollSnapType = "",
                        r._swiperImmediateVirtual = !1
                    }
                    ))
                } else {
                    if (!r.support.smoothScroll)
                        return w({
                            swiper: r,
                            targetPosition: s,
                            side: e ? "left" : "top"
                        }),
                        !0;
                    h.scrollTo({
                        [e ? "left" : "top"]: s,
                        behavior: "smooth"
                    })
                }
                return !0
            }
            return r.setTransition(t),
            r.setTranslate(v),
            r.updateActiveIndex(n),
            r.updateSlidesClasses(),
            r.emit("beforeTransitionStart", t, a),
            r.transitionStart(s, b),
            0 === t ? r.transitionEnd(s, b) : r.animating || (r.animating = !0,
            r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(e) {
                r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd),
                r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd),
                r.onSlideToWrapperTransitionEnd = null,
                delete r.onSlideToWrapperTransitionEnd,
                r.transitionEnd(s, b))
            }
            ),
            r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd),
            r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd)),
            !0
        },
        slideToLoop: function(e, t, s, a) {
            if (void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === s && (s = !0),
            "string" == typeof e) {
                const t = parseInt(e, 10);
                if (!isFinite(t))
                    throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                e = t
            }
            const i = this;
            let r = e;
            return i.params.loop && (r += i.loopedSlides),
            i.slideTo(r, t, s, a)
        },
        slideNext: function(e, t, s) {
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0);
            const a = this
              , {animating: i, enabled: r, params: n} = a;
            if (!r)
                return a;
            let l = n.slidesPerGroup;
            "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (l = Math.max(a.slidesPerViewDynamic("current", !0), 1));
            const o = a.activeIndex < n.slidesPerGroupSkip ? 1 : l;
            if (n.loop) {
                if (i && n.loopPreventsSlide)
                    return !1;
                a.loopFix(),
                a._clientLeft = a.$wrapperEl[0].clientLeft
            }
            return n.rewind && a.isEnd ? a.slideTo(0, e, t, s) : a.slideTo(a.activeIndex + o, e, t, s)
        },
        slidePrev: function(e, t, s) {
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0);
            const a = this
              , {params: i, animating: r, snapGrid: n, slidesGrid: l, rtlTranslate: o, enabled: d} = a;
            if (!d)
                return a;
            if (i.loop) {
                if (r && i.loopPreventsSlide)
                    return !1;
                a.loopFix(),
                a._clientLeft = a.$wrapperEl[0].clientLeft
            }
            function c(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
            }
            const p = c(o ? a.translate : -a.translate)
              , u = n.map((e=>c(e)));
            let h = n[u.indexOf(p) - 1];
            if (void 0 === h && i.cssMode) {
                let e;
                n.forEach(((t,s)=>{
                    p >= t && (e = s)
                }
                )),
                void 0 !== e && (h = n[e > 0 ? e - 1 : e])
            }
            let m = 0;
            if (void 0 !== h && (m = l.indexOf(h),
            m < 0 && (m = a.activeIndex - 1),
            "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (m = m - a.slidesPerViewDynamic("previous", !0) + 1,
            m = Math.max(m, 0))),
            i.rewind && a.isBeginning) {
                const i = a.params.virtual && a.params.virtual.enabled && a.virtual ? a.virtual.slides.length - 1 : a.slides.length - 1;
                return a.slideTo(i, e, t, s)
            }
            return a.slideTo(m, e, t, s)
        },
        slideReset: function(e, t, s) {
            return void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            this.slideTo(this.activeIndex, e, t, s)
        },
        slideToClosest: function(e, t, s, a) {
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            void 0 === a && (a = .5);
            const i = this;
            let r = i.activeIndex;
            const n = Math.min(i.params.slidesPerGroupSkip, r)
              , l = n + Math.floor((r - n) / i.params.slidesPerGroup)
              , o = i.rtlTranslate ? i.translate : -i.translate;
            if (o >= i.snapGrid[l]) {
                const e = i.snapGrid[l];
                o - e > (i.snapGrid[l + 1] - e) * a && (r += i.params.slidesPerGroup)
            } else {
                const e = i.snapGrid[l - 1];
                o - e <= (i.snapGrid[l] - e) * a && (r -= i.params.slidesPerGroup)
            }
            return r = Math.max(r, 0),
            r = Math.min(r, i.slidesGrid.length - 1),
            i.slideTo(r, e, t, s)
        },
        slideToClickedSlide: function() {
            const e = this
              , {params: t, $wrapperEl: s} = e
              , a = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
            let i, r = e.clickedIndex;
            if (t.loop) {
                if (e.animating)
                    return;
                i = parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"), 10),
                t.centeredSlides ? r < e.loopedSlides - a / 2 || r > e.slides.length - e.loopedSlides + a / 2 ? (e.loopFix(),
                r = s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),
                p((()=>{
                    e.slideTo(r)
                }
                ))) : e.slideTo(r) : r > e.slides.length - a ? (e.loopFix(),
                r = s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),
                p((()=>{
                    e.slideTo(r)
                }
                ))) : e.slideTo(r)
            } else
                e.slideTo(r)
        }
    };
    var z = {
        loopCreate: function() {
            const e = this
              , t = a()
              , {params: s, $wrapperEl: i} = e
              , r = i.children().length > 0 ? d(i.children()[0].parentNode) : i;
            r.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
            let n = r.children(`.${s.slideClass}`);
            if (s.loopFillGroupWithBlank) {
                const e = s.slidesPerGroup - n.length % s.slidesPerGroup;
                if (e !== s.slidesPerGroup) {
                    for (let a = 0; a < e; a += 1) {
                        const e = d(t.createElement("div")).addClass(`${s.slideClass} ${s.slideBlankClass}`);
                        r.append(e)
                    }
                    n = r.children(`.${s.slideClass}`)
                }
            }
            "auto" !== s.slidesPerView || s.loopedSlides || (s.loopedSlides = n.length),
            e.loopedSlides = Math.ceil(parseFloat(s.loopedSlides || s.slidesPerView, 10)),
            e.loopedSlides += s.loopAdditionalSlides,
            e.loopedSlides > n.length && e.params.loopedSlidesLimit && (e.loopedSlides = n.length);
            const l = []
              , o = [];
            n.each(((e,t)=>{
                d(e).attr("data-swiper-slide-index", t)
            }
            ));
            for (let t = 0; t < e.loopedSlides; t += 1) {
                const e = t - Math.floor(t / n.length) * n.length;
                o.push(n.eq(e)[0]),
                l.unshift(n.eq(n.length - e - 1)[0])
            }
            for (let e = 0; e < o.length; e += 1)
                r.append(d(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
            for (let e = l.length - 1; e >= 0; e -= 1)
                r.prepend(d(l[e].cloneNode(!0)).addClass(s.slideDuplicateClass))
        },
        loopFix: function() {
            const e = this;
            e.emit("beforeLoopFix");
            const {activeIndex: t, slides: s, loopedSlides: a, allowSlidePrev: i, allowSlideNext: r, snapGrid: n, rtlTranslate: l} = e;
            let o;
            e.allowSlidePrev = !0,
            e.allowSlideNext = !0;
            const d = -n[t] - e.getTranslate();
            if (t < a) {
                o = s.length - 3 * a + t,
                o += a;
                e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d)
            } else if (t >= s.length - a) {
                o = -s.length + t + a,
                o += a;
                e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d)
            }
            e.allowSlidePrev = i,
            e.allowSlideNext = r,
            e.emit("loopFix")
        },
        loopDestroy: function() {
            const {$wrapperEl: e, params: t, slides: s} = this;
            e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(),
            s.removeAttr("data-swiper-slide-index")
        }
    };
    function L(e) {
        const t = this
          , s = a()
          , i = r()
          , n = t.touchEventsData
          , {params: l, touches: o, enabled: c} = t;
        if (!c)
            return;
        if (t.animating && l.preventInteractionOnTransition)
            return;
        !t.animating && l.cssMode && l.loop && t.loopFix();
        let p = e;
        p.originalEvent && (p = p.originalEvent);
        let h = d(p.target);
        if ("wrapper" === l.touchEventsTarget && !h.closest(t.wrapperEl).length)
            return;
        if (n.isTouchEvent = "touchstart" === p.type,
        !n.isTouchEvent && "which"in p && 3 === p.which)
            return;
        if (!n.isTouchEvent && "button"in p && p.button > 0)
            return;
        if (n.isTouched && n.isMoved)
            return;
        const m = !!l.noSwipingClass && "" !== l.noSwipingClass
          , f = e.composedPath ? e.composedPath() : e.path;
        m && p.target && p.target.shadowRoot && f && (h = d(f[0]));
        const g = l.noSwipingSelector ? l.noSwipingSelector : `.${l.noSwipingClass}`
          , v = !(!p.target || !p.target.shadowRoot);
        if (l.noSwiping && (v ? function(e, t) {
            return void 0 === t && (t = this),
            function t(s) {
                if (!s || s === a() || s === r())
                    return null;
                s.assignedSlot && (s = s.assignedSlot);
                const i = s.closest(e);
                return i || s.getRootNode ? i || t(s.getRootNode().host) : null
            }(t)
        }(g, h[0]) : h.closest(g)[0]))
            return void (t.allowClick = !0);
        if (l.swipeHandler && !h.closest(l.swipeHandler)[0])
            return;
        o.currentX = "touchstart" === p.type ? p.targetTouches[0].pageX : p.pageX,
        o.currentY = "touchstart" === p.type ? p.targetTouches[0].pageY : p.pageY;
        const w = o.currentX
          , b = o.currentY
          , x = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection
          , y = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;
        if (x && (w <= y || w >= i.innerWidth - y)) {
            if ("prevent" !== x)
                return;
            e.preventDefault()
        }
        if (Object.assign(n, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0
        }),
        o.startX = w,
        o.startY = b,
        n.touchStartTime = u(),
        t.allowClick = !0,
        t.updateSize(),
        t.swipeDirection = void 0,
        l.threshold > 0 && (n.allowThresholdMove = !1),
        "touchstart" !== p.type) {
            let e = !0;
            h.is(n.focusableElements) && (e = !1,
            "SELECT" === h[0].nodeName && (n.isTouched = !1)),
            s.activeElement && d(s.activeElement).is(n.focusableElements) && s.activeElement !== h[0] && s.activeElement.blur();
            const a = e && t.allowTouchMove && l.touchStartPreventDefault;
            !l.touchStartForcePreventDefault && !a || h[0].isContentEditable || p.preventDefault()
        }
        t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !l.cssMode && t.freeMode.onTouchStart(),
        t.emit("touchStart", p)
    }
    function O(e) {
        const t = a()
          , s = this
          , i = s.touchEventsData
          , {params: r, touches: n, rtlTranslate: l, enabled: o} = s;
        if (!o)
            return;
        let c = e;
        if (c.originalEvent && (c = c.originalEvent),
        !i.isTouched)
            return void (i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", c));
        if (i.isTouchEvent && "touchmove" !== c.type)
            return;
        const p = "touchmove" === c.type && c.targetTouches && (c.targetTouches[0] || c.changedTouches[0])
          , h = "touchmove" === c.type ? p.pageX : c.pageX
          , m = "touchmove" === c.type ? p.pageY : c.pageY;
        if (c.preventedByNestedSwiper)
            return n.startX = h,
            void (n.startY = m);
        if (!s.allowTouchMove)
            return d(c.target).is(i.focusableElements) || (s.allowClick = !1),
            void (i.isTouched && (Object.assign(n, {
                startX: h,
                startY: m,
                currentX: h,
                currentY: m
            }),
            i.touchStartTime = u()));
        if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop)
            if (s.isVertical()) {
                if (m < n.startY && s.translate <= s.maxTranslate() || m > n.startY && s.translate >= s.minTranslate())
                    return i.isTouched = !1,
                    void (i.isMoved = !1)
            } else if (h < n.startX && s.translate <= s.maxTranslate() || h > n.startX && s.translate >= s.minTranslate())
                return;
        if (i.isTouchEvent && t.activeElement && c.target === t.activeElement && d(c.target).is(i.focusableElements))
            return i.isMoved = !0,
            void (s.allowClick = !1);
        if (i.allowTouchCallbacks && s.emit("touchMove", c),
        c.targetTouches && c.targetTouches.length > 1)
            return;
        n.currentX = h,
        n.currentY = m;
        const f = n.currentX - n.startX
          , g = n.currentY - n.startY;
        if (s.params.threshold && Math.sqrt(f ** 2 + g ** 2) < s.params.threshold)
            return;
        if (void 0 === i.isScrolling) {
            let e;
            s.isHorizontal() && n.currentY === n.startY || s.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : f * f + g * g >= 25 && (e = 180 * Math.atan2(Math.abs(g), Math.abs(f)) / Math.PI,
            i.isScrolling = s.isHorizontal() ? e > r.touchAngle : 90 - e > r.touchAngle)
        }
        if (i.isScrolling && s.emit("touchMoveOpposite", c),
        void 0 === i.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (i.startMoving = !0)),
        i.isScrolling)
            return void (i.isTouched = !1);
        if (!i.startMoving)
            return;
        s.allowClick = !1,
        !r.cssMode && c.cancelable && c.preventDefault(),
        r.touchMoveStopPropagation && !r.nested && c.stopPropagation(),
        i.isMoved || (r.loop && !r.cssMode && s.loopFix(),
        i.startTranslate = s.getTranslate(),
        s.setTransition(0),
        s.animating && s.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
        i.allowMomentumBounce = !1,
        !r.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0),
        s.emit("sliderFirstMove", c)),
        s.emit("sliderMove", c),
        i.isMoved = !0;
        let v = s.isHorizontal() ? f : g;
        n.diff = v,
        v *= r.touchRatio,
        l && (v = -v),
        s.swipeDirection = v > 0 ? "prev" : "next",
        i.currentTranslate = v + i.startTranslate;
        let w = !0
          , b = r.resistanceRatio;
        if (r.touchReleaseOnEdges && (b = 0),
        v > 0 && i.currentTranslate > s.minTranslate() ? (w = !1,
        r.resistance && (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + v) ** b)) : v < 0 && i.currentTranslate < s.maxTranslate() && (w = !1,
        r.resistance && (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - v) ** b)),
        w && (c.preventedByNestedSwiper = !0),
        !s.allowSlideNext && "next" === s.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate),
        !s.allowSlidePrev && "prev" === s.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate),
        s.allowSlidePrev || s.allowSlideNext || (i.currentTranslate = i.startTranslate),
        r.threshold > 0) {
            if (!(Math.abs(v) > r.threshold || i.allowThresholdMove))
                return void (i.currentTranslate = i.startTranslate);
            if (!i.allowThresholdMove)
                return i.allowThresholdMove = !0,
                n.startX = n.currentX,
                n.startY = n.currentY,
                i.currentTranslate = i.startTranslate,
                void (n.diff = s.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY)
        }
        r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && s.freeMode || r.watchSlidesProgress) && (s.updateActiveIndex(),
        s.updateSlidesClasses()),
        s.params.freeMode && r.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(),
        s.updateProgress(i.currentTranslate),
        s.setTranslate(i.currentTranslate))
    }
    function I(e) {
        const t = this
          , s = t.touchEventsData
          , {params: a, touches: i, rtlTranslate: r, slidesGrid: n, enabled: l} = t;
        if (!l)
            return;
        let o = e;
        if (o.originalEvent && (o = o.originalEvent),
        s.allowTouchCallbacks && t.emit("touchEnd", o),
        s.allowTouchCallbacks = !1,
        !s.isTouched)
            return s.isMoved && a.grabCursor && t.setGrabCursor(!1),
            s.isMoved = !1,
            void (s.startMoving = !1);
        a.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        const d = u()
          , c = d - s.touchStartTime;
        if (t.allowClick) {
            const e = o.path || o.composedPath && o.composedPath();
            t.updateClickedSlide(e && e[0] || o.target),
            t.emit("tap click", o),
            c < 300 && d - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", o)
        }
        if (s.lastClickTime = u(),
        p((()=>{
            t.destroyed || (t.allowClick = !0)
        }
        )),
        !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === i.diff || s.currentTranslate === s.startTranslate)
            return s.isTouched = !1,
            s.isMoved = !1,
            void (s.startMoving = !1);
        let h;
        if (s.isTouched = !1,
        s.isMoved = !1,
        s.startMoving = !1,
        h = a.followFinger ? r ? t.translate : -t.translate : -s.currentTranslate,
        a.cssMode)
            return;
        if (t.params.freeMode && a.freeMode.enabled)
            return void t.freeMode.onTouchEnd({
                currentPos: h
            });
        let m = 0
          , f = t.slidesSizesGrid[0];
        for (let e = 0; e < n.length; e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
            const t = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
            void 0 !== n[e + t] ? h >= n[e] && h < n[e + t] && (m = e,
            f = n[e + t] - n[e]) : h >= n[e] && (m = e,
            f = n[n.length - 1] - n[n.length - 2])
        }
        let g = null
          , v = null;
        a.rewind && (t.isBeginning ? v = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (g = 0));
        const w = (h - n[m]) / f
          , b = m < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
        if (c > a.longSwipesMs) {
            if (!a.longSwipes)
                return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection && (w >= a.longSwipesRatio ? t.slideTo(a.rewind && t.isEnd ? g : m + b) : t.slideTo(m)),
            "prev" === t.swipeDirection && (w > 1 - a.longSwipesRatio ? t.slideTo(m + b) : null !== v && w < 0 && Math.abs(w) > a.longSwipesRatio ? t.slideTo(v) : t.slideTo(m))
        } else {
            if (!a.shortSwipes)
                return void t.slideTo(t.activeIndex);
            t.navigation && (o.target === t.navigation.nextEl || o.target === t.navigation.prevEl) ? o.target === t.navigation.nextEl ? t.slideTo(m + b) : t.slideTo(m) : ("next" === t.swipeDirection && t.slideTo(null !== g ? g : m + b),
            "prev" === t.swipeDirection && t.slideTo(null !== v ? v : m))
        }
    }
    function A() {
        const e = this
          , {params: t, el: s} = e;
        if (s && 0 === s.offsetWidth)
            return;
        t.breakpoints && e.setBreakpoint();
        const {allowSlideNext: a, allowSlidePrev: i, snapGrid: r} = e;
        e.allowSlideNext = !0,
        e.allowSlidePrev = !0,
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses(),
        ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0),
        e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
        e.allowSlidePrev = i,
        e.allowSlideNext = a,
        e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
    }
    function D(e) {
        const t = this;
        t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(),
        t.params.preventClicksPropagation && t.animating && (e.stopPropagation(),
        e.stopImmediatePropagation())))
    }
    function G() {
        const e = this
          , {wrapperEl: t, rtlTranslate: s, enabled: a} = e;
        if (!a)
            return;
        let i;
        e.previousTranslate = e.translate,
        e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop,
        0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
        const r = e.maxTranslate() - e.minTranslate();
        i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r,
        i !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1)
    }
    let N = !1;
    function B() {}
    const H = (e,t)=>{
        const s = a()
          , {params: i, touchEvents: r, el: n, wrapperEl: l, device: o, support: d} = e
          , c = !!i.nested
          , p = "on" === t ? "addEventListener" : "removeEventListener"
          , u = t;
        if (d.touch) {
            const t = !("touchstart" !== r.start || !d.passiveListener || !i.passiveListeners) && {
                passive: !0,
                capture: !1
            };
            n[p](r.start, e.onTouchStart, t),
            n[p](r.move, e.onTouchMove, d.passiveListener ? {
                passive: !1,
                capture: c
            } : c),
            n[p](r.end, e.onTouchEnd, t),
            r.cancel && n[p](r.cancel, e.onTouchEnd, t)
        } else
            n[p](r.start, e.onTouchStart, !1),
            s[p](r.move, e.onTouchMove, c),
            s[p](r.end, e.onTouchEnd, !1);
        (i.preventClicks || i.preventClicksPropagation) && n[p]("click", e.onClick, !0),
        i.cssMode && l[p]("scroll", e.onScroll),
        i.updateOnWindowResize ? e[u](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", A, !0) : e[u]("observerUpdate", A, !0)
    }
    ;
    var X = {
        attachEvents: function() {
            const e = this
              , t = a()
              , {params: s, support: i} = e;
            e.onTouchStart = L.bind(e),
            e.onTouchMove = O.bind(e),
            e.onTouchEnd = I.bind(e),
            s.cssMode && (e.onScroll = G.bind(e)),
            e.onClick = D.bind(e),
            i.touch && !N && (t.addEventListener("touchstart", B),
            N = !0),
            H(e, "on")
        },
        detachEvents: function() {
            H(this, "off")
        }
    };
    const Y = (e,t)=>e.grid && t.grid && t.grid.rows > 1;
    var R = {
        addClasses: function() {
            const e = this
              , {classNames: t, params: s, rtl: a, $el: i, device: r, support: n} = e
              , l = function(e, t) {
                const s = [];
                return e.forEach((e=>{
                    "object" == typeof e ? Object.keys(e).forEach((a=>{
                        e[a] && s.push(t + a)
                    }
                    )) : "string" == typeof e && s.push(t + e)
                }
                )),
                s
            }(["initialized", s.direction, {
                "pointer-events": !n.touch
            }, {
                "free-mode": e.params.freeMode && s.freeMode.enabled
            }, {
                autoheight: s.autoHeight
            }, {
                rtl: a
            }, {
                grid: s.grid && s.grid.rows > 1
            }, {
                "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill
            }, {
                android: r.android
            }, {
                ios: r.ios
            }, {
                "css-mode": s.cssMode
            }, {
                centered: s.cssMode && s.centeredSlides
            }, {
                "watch-progress": s.watchSlidesProgress
            }], s.containerModifierClass);
            t.push(...l),
            i.addClass([...t].join(" ")),
            e.emitContainerClasses()
        },
        removeClasses: function() {
            const {$el: e, classNames: t} = this;
            e.removeClass(t.join(" ")),
            this.emitContainerClasses()
        }
    };
    var W = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopedSlidesLimit: !0,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1
    };
    function q(e, t) {
        return function(s) {
            void 0 === s && (s = {});
            const a = Object.keys(s)[0]
              , i = s[a];
            "object" == typeof i && null !== i ? (["navigation", "pagination", "scrollbar"].indexOf(a) >= 0 && !0 === e[a] && (e[a] = {
                auto: !0
            }),
            a in e && "enabled"in i ? (!0 === e[a] && (e[a] = {
                enabled: !0
            }),
            "object" != typeof e[a] || "enabled"in e[a] || (e[a].enabled = !0),
            e[a] || (e[a] = {
                enabled: !1
            }),
            g(t, s)) : g(t, s)) : g(t, s)
        }
    }
    const j = {
        eventsEmitter: $,
        update: S,
        translate: M,
        transition: {
            setTransition: function(e, t) {
                const s = this;
                s.params.cssMode || s.$wrapperEl.transition(e),
                s.emit("setTransition", e, t)
            },
            transitionStart: function(e, t) {
                void 0 === e && (e = !0);
                const s = this
                  , {params: a} = s;
                a.cssMode || (a.autoHeight && s.updateAutoHeight(),
                P({
                    swiper: s,
                    runCallbacks: e,
                    direction: t,
                    step: "Start"
                }))
            },
            transitionEnd: function(e, t) {
                void 0 === e && (e = !0);
                const s = this
                  , {params: a} = s;
                s.animating = !1,
                a.cssMode || (s.setTransition(0),
                P({
                    swiper: s,
                    runCallbacks: e,
                    direction: t,
                    step: "End"
                }))
            }
        },
        slide: k,
        loop: z,
        grabCursor: {
            setGrabCursor: function(e) {
                const t = this;
                if (t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode)
                    return;
                const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                s.style.cursor = "move",
                s.style.cursor = e ? "grabbing" : "grab"
            },
            unsetGrabCursor: function() {
                const e = this;
                e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
            }
        },
        events: X,
        breakpoints: {
            setBreakpoint: function() {
                const e = this
                  , {activeIndex: t, initialized: s, loopedSlides: a=0, params: i, $el: r} = e
                  , n = i.breakpoints;
                if (!n || n && 0 === Object.keys(n).length)
                    return;
                const l = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
                if (!l || e.currentBreakpoint === l)
                    return;
                const o = (l in n ? n[l] : void 0) || e.originalParams
                  , d = Y(e, i)
                  , c = Y(e, o)
                  , p = i.enabled;
                d && !c ? (r.removeClass(`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`),
                e.emitContainerClasses()) : !d && c && (r.addClass(`${i.containerModifierClass}grid`),
                (o.grid.fill && "column" === o.grid.fill || !o.grid.fill && "column" === i.grid.fill) && r.addClass(`${i.containerModifierClass}grid-column`),
                e.emitContainerClasses()),
                ["navigation", "pagination", "scrollbar"].forEach((t=>{
                    const s = i[t] && i[t].enabled
                      , a = o[t] && o[t].enabled;
                    s && !a && e[t].disable(),
                    !s && a && e[t].enable()
                }
                ));
                const u = o.direction && o.direction !== i.direction
                  , h = i.loop && (o.slidesPerView !== i.slidesPerView || u);
                u && s && e.changeDirection(),
                g(e.params, o);
                const m = e.params.enabled;
                Object.assign(e, {
                    allowTouchMove: e.params.allowTouchMove,
                    allowSlideNext: e.params.allowSlideNext,
                    allowSlidePrev: e.params.allowSlidePrev
                }),
                p && !m ? e.disable() : !p && m && e.enable(),
                e.currentBreakpoint = l,
                e.emit("_beforeBreakpoint", o),
                h && s && (e.loopDestroy(),
                e.loopCreate(),
                e.updateSlides(),
                e.slideTo(t - a + e.loopedSlides, 0, !1)),
                e.emit("breakpoint", o)
            },
            getBreakpoint: function(e, t, s) {
                if (void 0 === t && (t = "window"),
                !e || "container" === t && !s)
                    return;
                let a = !1;
                const i = r()
                  , n = "window" === t ? i.innerHeight : s.clientHeight
                  , l = Object.keys(e).map((e=>{
                    if ("string" == typeof e && 0 === e.indexOf("@")) {
                        const t = parseFloat(e.substr(1));
                        return {
                            value: n * t,
                            point: e
                        }
                    }
                    return {
                        value: e,
                        point: e
                    }
                }
                ));
                l.sort(((e,t)=>parseInt(e.value, 10) - parseInt(t.value, 10)));
                for (let e = 0; e < l.length; e += 1) {
                    const {point: r, value: n} = l[e];
                    "window" === t ? i.matchMedia(`(min-width: ${n}px)`).matches && (a = r) : n <= s.clientWidth && (a = r)
                }
                return a || "max"
            }
        },
        checkOverflow: {
            checkOverflow: function() {
                const e = this
                  , {isLocked: t, params: s} = e
                  , {slidesOffsetBefore: a} = s;
                if (a) {
                    const t = e.slides.length - 1
                      , s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * a;
                    e.isLocked = e.size > s
                } else
                    e.isLocked = 1 === e.snapGrid.length;
                !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
                !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                t && t !== e.isLocked && (e.isEnd = !1),
                t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
            }
        },
        classes: R,
        images: {
            loadImage: function(e, t, s, a, i, n) {
                const l = r();
                let o;
                function c() {
                    n && n()
                }
                d(e).parent("picture")[0] || e.complete && i ? c() : t ? (o = new l.Image,
                o.onload = c,
                o.onerror = c,
                a && (o.sizes = a),
                s && (o.srcset = s),
                t && (o.src = t)) : c()
            },
            preloadImages: function() {
                const e = this;
                function t() {
                    null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                    e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(),
                    e.emit("imagesReady")))
                }
                e.imagesToLoad = e.$el.find("img");
                for (let s = 0; s < e.imagesToLoad.length; s += 1) {
                    const a = e.imagesToLoad[s];
                    e.loadImage(a, a.currentSrc || a.getAttribute("src"), a.srcset || a.getAttribute("srcset"), a.sizes || a.getAttribute("sizes"), !0, t)
                }
            }
        }
    }
      , _ = {};
    class V {
        constructor() {
            let e, t;
            for (var s = arguments.length, a = new Array(s), i = 0; i < s; i++)
                a[i] = arguments[i];
            if (1 === a.length && a[0].constructor && "Object" === Object.prototype.toString.call(a[0]).slice(8, -1) ? t = a[0] : [e,t] = a,
            t || (t = {}),
            t = g({}, t),
            e && !t.el && (t.el = e),
            t.el && d(t.el).length > 1) {
                const e = [];
                return d(t.el).each((s=>{
                    const a = g({}, t, {
                        el: s
                    });
                    e.push(new V(a))
                }
                )),
                e
            }
            const r = this;
            r.__swiper__ = !0,
            r.support = E(),
            r.device = C({
                userAgent: t.userAgent
            }),
            r.browser = T(),
            r.eventsListeners = {},
            r.eventsAnyListeners = [],
            r.modules = [...r.__modules__],
            t.modules && Array.isArray(t.modules) && r.modules.push(...t.modules);
            const n = {};
            r.modules.forEach((e=>{
                e({
                    swiper: r,
                    extendParams: q(t, n),
                    on: r.on.bind(r),
                    once: r.once.bind(r),
                    off: r.off.bind(r),
                    emit: r.emit.bind(r)
                })
            }
            ));
            const l = g({}, W, n);
            return r.params = g({}, l, _, t),
            r.originalParams = g({}, r.params),
            r.passedParams = g({}, t),
            r.params && r.params.on && Object.keys(r.params.on).forEach((e=>{
                r.on(e, r.params.on[e])
            }
            )),
            r.params && r.params.onAny && r.onAny(r.params.onAny),
            r.$ = d,
            Object.assign(r, {
                enabled: r.params.enabled,
                el: e,
                classNames: [],
                slides: d(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: ()=>"horizontal" === r.params.direction,
                isVertical: ()=>"vertical" === r.params.direction,
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: r.params.allowSlideNext,
                allowSlidePrev: r.params.allowSlidePrev,
                touchEvents: function() {
                    const e = ["touchstart", "touchmove", "touchend", "touchcancel"]
                      , t = ["pointerdown", "pointermove", "pointerup"];
                    return r.touchEventsTouch = {
                        start: e[0],
                        move: e[1],
                        end: e[2],
                        cancel: e[3]
                    },
                    r.touchEventsDesktop = {
                        start: t[0],
                        move: t[1],
                        end: t[2]
                    },
                    r.support.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop
                }(),
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    focusableElements: r.params.focusableElements,
                    lastClickTime: u(),
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    isTouchEvent: void 0,
                    startMoving: void 0
                },
                allowClick: !0,
                allowTouchMove: r.params.allowTouchMove,
                touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                },
                imagesToLoad: [],
                imagesLoaded: 0
            }),
            r.emit("_swiper"),
            r.params.init && r.init(),
            r
        }
        enable() {
            const e = this;
            e.enabled || (e.enabled = !0,
            e.params.grabCursor && e.setGrabCursor(),
            e.emit("enable"))
        }
        disable() {
            const e = this;
            e.enabled && (e.enabled = !1,
            e.params.grabCursor && e.unsetGrabCursor(),
            e.emit("disable"))
        }
        setProgress(e, t) {
            const s = this;
            e = Math.min(Math.max(e, 0), 1);
            const a = s.minTranslate()
              , i = (s.maxTranslate() - a) * e + a;
            s.translateTo(i, void 0 === t ? 0 : t),
            s.updateActiveIndex(),
            s.updateSlidesClasses()
        }
        emitContainerClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el)
                return;
            const t = e.el.className.split(" ").filter((t=>0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
            e.emit("_containerClasses", t.join(" "))
        }
        getSlideClasses(e) {
            const t = this;
            return t.destroyed ? "" : e.className.split(" ").filter((e=>0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
        }
        emitSlidesClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el)
                return;
            const t = [];
            e.slides.each((s=>{
                const a = e.getSlideClasses(s);
                t.push({
                    slideEl: s,
                    classNames: a
                }),
                e.emit("_slideClass", s, a)
            }
            )),
            e.emit("_slideClasses", t)
        }
        slidesPerViewDynamic(e, t) {
            void 0 === e && (e = "current"),
            void 0 === t && (t = !1);
            const {params: s, slides: a, slidesGrid: i, slidesSizesGrid: r, size: n, activeIndex: l} = this;
            let o = 1;
            if (s.centeredSlides) {
                let e, t = a[l].swiperSlideSize;
                for (let s = l + 1; s < a.length; s += 1)
                    a[s] && !e && (t += a[s].swiperSlideSize,
                    o += 1,
                    t > n && (e = !0));
                for (let s = l - 1; s >= 0; s -= 1)
                    a[s] && !e && (t += a[s].swiperSlideSize,
                    o += 1,
                    t > n && (e = !0))
            } else if ("current" === e)
                for (let e = l + 1; e < a.length; e += 1) {
                    (t ? i[e] + r[e] - i[l] < n : i[e] - i[l] < n) && (o += 1)
                }
            else
                for (let e = l - 1; e >= 0; e -= 1) {
                    i[l] - i[e] < n && (o += 1)
                }
            return o
        }
        update() {
            const e = this;
            if (!e || e.destroyed)
                return;
            const {snapGrid: t, params: s} = e;
            function a() {
                const t = e.rtlTranslate ? -1 * e.translate : e.translate
                  , s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(s),
                e.updateActiveIndex(),
                e.updateSlidesClasses()
            }
            let i;
            s.breakpoints && e.setBreakpoint(),
            e.updateSize(),
            e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses(),
            e.params.freeMode && e.params.freeMode.enabled ? (a(),
            e.params.autoHeight && e.updateAutoHeight()) : (i = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0),
            i || a()),
            s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
            e.emit("update")
        }
        changeDirection(e, t) {
            void 0 === t && (t = !0);
            const s = this
              , a = s.params.direction;
            return e || (e = "horizontal" === a ? "vertical" : "horizontal"),
            e === a || "horizontal" !== e && "vertical" !== e || (s.$el.removeClass(`${s.params.containerModifierClass}${a}`).addClass(`${s.params.containerModifierClass}${e}`),
            s.emitContainerClasses(),
            s.params.direction = e,
            s.slides.each((t=>{
                "vertical" === e ? t.style.width = "" : t.style.height = ""
            }
            )),
            s.emit("changeDirection"),
            t && s.update()),
            s
        }
        changeLanguageDirection(e) {
            const t = this;
            t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e,
            t.rtlTranslate = "horizontal" === t.params.direction && t.rtl,
            t.rtl ? (t.$el.addClass(`${t.params.containerModifierClass}rtl`),
            t.el.dir = "rtl") : (t.$el.removeClass(`${t.params.containerModifierClass}rtl`),
            t.el.dir = "ltr"),
            t.update())
        }
        mount(e) {
            const t = this;
            if (t.mounted)
                return !0;
            const s = d(e || t.params.el);
            if (!(e = s[0]))
                return !1;
            e.swiper = t;
            const i = ()=>`.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
            let r = (()=>{
                if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                    const t = d(e.shadowRoot.querySelector(i()));
                    return t.children = e=>s.children(e),
                    t
                }
                return s.children ? s.children(i()) : d(s).children(i())
            }
            )();
            if (0 === r.length && t.params.createElements) {
                const e = a().createElement("div");
                r = d(e),
                e.className = t.params.wrapperClass,
                s.append(e),
                s.children(`.${t.params.slideClass}`).each((e=>{
                    r.append(e)
                }
                ))
            }
            return Object.assign(t, {
                $el: s,
                el: e,
                $wrapperEl: r,
                wrapperEl: r[0],
                mounted: !0,
                rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
                rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
                wrongRTL: "-webkit-box" === r.css("display")
            }),
            !0
        }
        init(e) {
            const t = this;
            if (t.initialized)
                return t;
            return !1 === t.mount(e) || (t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.params.loop && t.loopCreate(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.preloadImages && t.preloadImages(),
            t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0),
            t.attachEvents(),
            t.initialized = !0,
            t.emit("init"),
            t.emit("afterInit")),
            t
        }
        destroy(e, t) {
            void 0 === e && (e = !0),
            void 0 === t && (t = !0);
            const s = this
              , {params: a, $el: i, $wrapperEl: r, slides: n} = s;
            return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"),
            s.initialized = !1,
            s.detachEvents(),
            a.loop && s.loopDestroy(),
            t && (s.removeClasses(),
            i.removeAttr("style"),
            r.removeAttr("style"),
            n && n.length && n.removeClass([a.slideVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),
            s.emit("destroy"),
            Object.keys(s.eventsListeners).forEach((e=>{
                s.off(e)
            }
            )),
            !1 !== e && (s.$el[0].swiper = null,
            function(e) {
                const t = e;
                Object.keys(t).forEach((e=>{
                    try {
                        t[e] = null
                    } catch (e) {}
                    try {
                        delete t[e]
                    } catch (e) {}
                }
                ))
            }(s)),
            s.destroyed = !0),
            null
        }
        static extendDefaults(e) {
            g(_, e)
        }
        static get extendedDefaults() {
            return _
        }
        static get defaults() {
            return W
        }
        static installModule(e) {
            V.prototype.__modules__ || (V.prototype.__modules__ = []);
            const t = V.prototype.__modules__;
            "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
        }
        static use(e) {
            return Array.isArray(e) ? (e.forEach((e=>V.installModule(e))),
            V) : (V.installModule(e),
            V)
        }
    }
    function F(e, t, s, i) {
        const r = a();
        return e.params.createElements && Object.keys(i).forEach((a=>{
            if (!s[a] && !0 === s.auto) {
                let n = e.$el.children(`.${i[a]}`)[0];
                n || (n = r.createElement("div"),
                n.className = i[a],
                e.$el.append(n)),
                s[a] = n,
                t[a] = n
            }
        }
        )),
        s
    }
    function U(e) {
        return void 0 === e && (e = ""),
        `.${e.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")}`
    }
    function K(e) {
        const t = this
          , {$wrapperEl: s, params: a} = t;
        if (a.loop && t.loopDestroy(),
        "object" == typeof e && "length"in e)
            for (let t = 0; t < e.length; t += 1)
                e[t] && s.append(e[t]);
        else
            s.append(e);
        a.loop && t.loopCreate(),
        a.observer || t.update()
    }
    function Z(e) {
        const t = this
          , {params: s, $wrapperEl: a, activeIndex: i} = t;
        s.loop && t.loopDestroy();
        let r = i + 1;
        if ("object" == typeof e && "length"in e) {
            for (let t = 0; t < e.length; t += 1)
                e[t] && a.prepend(e[t]);
            r = i + e.length
        } else
            a.prepend(e);
        s.loop && t.loopCreate(),
        s.observer || t.update(),
        t.slideTo(r, 0, !1)
    }
    function Q(e, t) {
        const s = this
          , {$wrapperEl: a, params: i, activeIndex: r} = s;
        let n = r;
        i.loop && (n -= s.loopedSlides,
        s.loopDestroy(),
        s.slides = a.children(`.${i.slideClass}`));
        const l = s.slides.length;
        if (e <= 0)
            return void s.prependSlide(t);
        if (e >= l)
            return void s.appendSlide(t);
        let o = n > e ? n + 1 : n;
        const d = [];
        for (let t = l - 1; t >= e; t -= 1) {
            const e = s.slides.eq(t);
            e.remove(),
            d.unshift(e)
        }
        if ("object" == typeof t && "length"in t) {
            for (let e = 0; e < t.length; e += 1)
                t[e] && a.append(t[e]);
            o = n > e ? n + t.length : n
        } else
            a.append(t);
        for (let e = 0; e < d.length; e += 1)
            a.append(d[e]);
        i.loop && s.loopCreate(),
        i.observer || s.update(),
        i.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1)
    }
    function J(e) {
        const t = this
          , {params: s, $wrapperEl: a, activeIndex: i} = t;
        let r = i;
        s.loop && (r -= t.loopedSlides,
        t.loopDestroy(),
        t.slides = a.children(`.${s.slideClass}`));
        let n, l = r;
        if ("object" == typeof e && "length"in e) {
            for (let s = 0; s < e.length; s += 1)
                n = e[s],
                t.slides[n] && t.slides.eq(n).remove(),
                n < l && (l -= 1);
            l = Math.max(l, 0)
        } else
            n = e,
            t.slides[n] && t.slides.eq(n).remove(),
            n < l && (l -= 1),
            l = Math.max(l, 0);
        s.loop && t.loopCreate(),
        s.observer || t.update(),
        s.loop ? t.slideTo(l + t.loopedSlides, 0, !1) : t.slideTo(l, 0, !1)
    }
    function ee() {
        const e = this
          , t = [];
        for (let s = 0; s < e.slides.length; s += 1)
            t.push(s);
        e.removeSlide(t)
    }
    function te(e) {
        const {effect: t, swiper: s, on: a, setTranslate: i, setTransition: r, overwriteParams: n, perspective: l, recreateShadows: o, getEffectParams: d} = e;
        let c;
        a("beforeInit", (()=>{
            if (s.params.effect !== t)
                return;
            s.classNames.push(`${s.params.containerModifierClass}${t}`),
            l && l() && s.classNames.push(`${s.params.containerModifierClass}3d`);
            const e = n ? n() : {};
            Object.assign(s.params, e),
            Object.assign(s.originalParams, e)
        }
        )),
        a("setTranslate", (()=>{
            s.params.effect === t && i()
        }
        )),
        a("setTransition", ((e,a)=>{
            s.params.effect === t && r(a)
        }
        )),
        a("transitionEnd", (()=>{
            if (s.params.effect === t && o) {
                if (!d || !d().slideShadows)
                    return;
                s.slides.each((e=>{
                    s.$(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove()
                }
                )),
                o()
            }
        }
        )),
        a("virtualUpdate", (()=>{
            s.params.effect === t && (s.slides.length || (c = !0),
            requestAnimationFrame((()=>{
                c && s.slides && s.slides.length && (i(),
                c = !1)
            }
            )))
        }
        ))
    }
    function se(e, t) {
        return e.transformEl ? t.find(e.transformEl).css({
            "backface-visibility": "hidden",
            "-webkit-backface-visibility": "hidden"
        }) : t
    }
    function ae(e) {
        let {swiper: t, duration: s, transformEl: a, allSlides: i} = e;
        const {slides: r, activeIndex: n, $wrapperEl: l} = t;
        if (t.params.virtualTranslate && 0 !== s) {
            let e, s = !1;
            e = i ? a ? r.find(a) : r : a ? r.eq(n).find(a) : r.eq(n),
            e.transitionEnd((()=>{
                if (s)
                    return;
                if (!t || t.destroyed)
                    return;
                s = !0,
                t.animating = !1;
                const e = ["webkitTransitionEnd", "transitionend"];
                for (let t = 0; t < e.length; t += 1)
                    l.trigger(e[t])
            }
            ))
        }
    }
    function ie(e, t, s) {
        const a = "swiper-slide-shadow" + (s ? `-${s}` : "")
          , i = e.transformEl ? t.find(e.transformEl) : t;
        let r = i.children(`.${a}`);
        return r.length || (r = d(`<div class="swiper-slide-shadow${s ? `-${s}` : ""}"></div>`),
        i.append(r)),
        r
    }
    Object.keys(j).forEach((e=>{
        Object.keys(j[e]).forEach((t=>{
            V.prototype[t] = j[e][t]
        }
        ))
    }
    )),
    V.use([function(e) {
        let {swiper: t, on: s, emit: a} = e;
        const i = r();
        let n = null
          , l = null;
        const o = ()=>{
            t && !t.destroyed && t.initialized && (a("beforeResize"),
            a("resize"))
        }
          , d = ()=>{
            t && !t.destroyed && t.initialized && a("orientationchange")
        }
        ;
        s("init", (()=>{
            t.params.resizeObserver && void 0 !== i.ResizeObserver ? t && !t.destroyed && t.initialized && (n = new ResizeObserver((e=>{
                l = i.requestAnimationFrame((()=>{
                    const {width: s, height: a} = t;
                    let i = s
                      , r = a;
                    e.forEach((e=>{
                        let {contentBoxSize: s, contentRect: a, target: n} = e;
                        n && n !== t.el || (i = a ? a.width : (s[0] || s).inlineSize,
                        r = a ? a.height : (s[0] || s).blockSize)
                    }
                    )),
                    i === s && r === a || o()
                }
                ))
            }
            )),
            n.observe(t.el)) : (i.addEventListener("resize", o),
            i.addEventListener("orientationchange", d))
        }
        )),
        s("destroy", (()=>{
            l && i.cancelAnimationFrame(l),
            n && n.unobserve && t.el && (n.unobserve(t.el),
            n = null),
            i.removeEventListener("resize", o),
            i.removeEventListener("orientationchange", d)
        }
        ))
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: a, emit: i} = e;
        const n = []
          , l = r()
          , o = function(e, t) {
            void 0 === t && (t = {});
            const s = new (l.MutationObserver || l.WebkitMutationObserver)((e=>{
                if (1 === e.length)
                    return void i("observerUpdate", e[0]);
                const t = function() {
                    i("observerUpdate", e[0])
                };
                l.requestAnimationFrame ? l.requestAnimationFrame(t) : l.setTimeout(t, 0)
            }
            ));
            s.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData
            }),
            n.push(s)
        };
        s({
            observer: !1,
            observeParents: !1,
            observeSlideChildren: !1
        }),
        a("init", (()=>{
            if (t.params.observer) {
                if (t.params.observeParents) {
                    const e = t.$el.parents();
                    for (let t = 0; t < e.length; t += 1)
                        o(e[t])
                }
                o(t.$el[0], {
                    childList: t.params.observeSlideChildren
                }),
                o(t.$wrapperEl[0], {
                    attributes: !1
                })
            }
        }
        )),
        a("destroy", (()=>{
            n.forEach((e=>{
                e.disconnect()
            }
            )),
            n.splice(0, n.length)
        }
        ))
    }
    ]);
    const re = [function(e) {
        let t, {swiper: s, extendParams: a, on: i, emit: r} = e;
        function n(e, t) {
            const a = s.params.virtual;
            if (a.cache && s.virtual.cache[t])
                return s.virtual.cache[t];
            const i = a.renderSlide ? d(a.renderSlide.call(s, e, t)) : d(`<div class="${s.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`);
            return i.attr("data-swiper-slide-index") || i.attr("data-swiper-slide-index", t),
            a.cache && (s.virtual.cache[t] = i),
            i
        }
        function l(e) {
            const {slidesPerView: t, slidesPerGroup: a, centeredSlides: i} = s.params
              , {addSlidesBefore: l, addSlidesAfter: o} = s.params.virtual
              , {from: d, to: c, slides: p, slidesGrid: u, offset: h} = s.virtual;
            s.params.cssMode || s.updateActiveIndex();
            const m = s.activeIndex || 0;
            let f, g, v;
            f = s.rtlTranslate ? "right" : s.isHorizontal() ? "left" : "top",
            i ? (g = Math.floor(t / 2) + a + o,
            v = Math.floor(t / 2) + a + l) : (g = t + (a - 1) + o,
            v = a + l);
            const w = Math.max((m || 0) - v, 0)
              , b = Math.min((m || 0) + g, p.length - 1)
              , x = (s.slidesGrid[w] || 0) - (s.slidesGrid[0] || 0);
            function y() {
                s.updateSlides(),
                s.updateProgress(),
                s.updateSlidesClasses(),
                s.lazy && s.params.lazy.enabled && s.lazy.load(),
                r("virtualUpdate")
            }
            if (Object.assign(s.virtual, {
                from: w,
                to: b,
                offset: x,
                slidesGrid: s.slidesGrid
            }),
            d === w && c === b && !e)
                return s.slidesGrid !== u && x !== h && s.slides.css(f, `${x}px`),
                s.updateProgress(),
                void r("virtualUpdate");
            if (s.params.virtual.renderExternal)
                return s.params.virtual.renderExternal.call(s, {
                    offset: x,
                    from: w,
                    to: b,
                    slides: function() {
                        const e = [];
                        for (let t = w; t <= b; t += 1)
                            e.push(p[t]);
                        return e
                    }()
                }),
                void (s.params.virtual.renderExternalUpdate ? y() : r("virtualUpdate"));
            const E = []
              , C = [];
            if (e)
                s.$wrapperEl.find(`.${s.params.slideClass}`).remove();
            else
                for (let e = d; e <= c; e += 1)
                    (e < w || e > b) && s.$wrapperEl.find(`.${s.params.slideClass}[data-swiper-slide-index="${e}"]`).remove();
            for (let t = 0; t < p.length; t += 1)
                t >= w && t <= b && (void 0 === c || e ? C.push(t) : (t > c && C.push(t),
                t < d && E.push(t)));
            C.forEach((e=>{
                s.$wrapperEl.append(n(p[e], e))
            }
            )),
            E.sort(((e,t)=>t - e)).forEach((e=>{
                s.$wrapperEl.prepend(n(p[e], e))
            }
            )),
            s.$wrapperEl.children(".swiper-slide").css(f, `${x}px`),
            y()
        }
        a({
            virtual: {
                enabled: !1,
                slides: [],
                cache: !0,
                renderSlide: null,
                renderExternal: null,
                renderExternalUpdate: !0,
                addSlidesBefore: 0,
                addSlidesAfter: 0
            }
        }),
        s.virtual = {
            cache: {},
            from: void 0,
            to: void 0,
            slides: [],
            offset: 0,
            slidesGrid: []
        },
        i("beforeInit", (()=>{
            s.params.virtual.enabled && (s.virtual.slides = s.params.virtual.slides,
            s.classNames.push(`${s.params.containerModifierClass}virtual`),
            s.params.watchSlidesProgress = !0,
            s.originalParams.watchSlidesProgress = !0,
            s.params.initialSlide || l())
        }
        )),
        i("setTranslate", (()=>{
            s.params.virtual.enabled && (s.params.cssMode && !s._immediateVirtual ? (clearTimeout(t),
            t = setTimeout((()=>{
                l()
            }
            ), 100)) : l())
        }
        )),
        i("init update resize", (()=>{
            s.params.virtual.enabled && s.params.cssMode && v(s.wrapperEl, "--swiper-virtual-size", `${s.virtualSize}px`)
        }
        )),
        Object.assign(s.virtual, {
            appendSlide: function(e) {
                if ("object" == typeof e && "length"in e)
                    for (let t = 0; t < e.length; t += 1)
                        e[t] && s.virtual.slides.push(e[t]);
                else
                    s.virtual.slides.push(e);
                l(!0)
            },
            prependSlide: function(e) {
                const t = s.activeIndex;
                let a = t + 1
                  , i = 1;
                if (Array.isArray(e)) {
                    for (let t = 0; t < e.length; t += 1)
                        e[t] && s.virtual.slides.unshift(e[t]);
                    a = t + e.length,
                    i = e.length
                } else
                    s.virtual.slides.unshift(e);
                if (s.params.virtual.cache) {
                    const e = s.virtual.cache
                      , t = {};
                    Object.keys(e).forEach((s=>{
                        const a = e[s]
                          , r = a.attr("data-swiper-slide-index");
                        r && a.attr("data-swiper-slide-index", parseInt(r, 10) + i),
                        t[parseInt(s, 10) + i] = a
                    }
                    )),
                    s.virtual.cache = t
                }
                l(!0),
                s.slideTo(a, 0)
            },
            removeSlide: function(e) {
                if (null == e)
                    return;
                let t = s.activeIndex;
                if (Array.isArray(e))
                    for (let a = e.length - 1; a >= 0; a -= 1)
                        s.virtual.slides.splice(e[a], 1),
                        s.params.virtual.cache && delete s.virtual.cache[e[a]],
                        e[a] < t && (t -= 1),
                        t = Math.max(t, 0);
                else
                    s.virtual.slides.splice(e, 1),
                    s.params.virtual.cache && delete s.virtual.cache[e],
                    e < t && (t -= 1),
                    t = Math.max(t, 0);
                l(!0),
                s.slideTo(t, 0)
            },
            removeAllSlides: function() {
                s.virtual.slides = [],
                s.params.virtual.cache && (s.virtual.cache = {}),
                l(!0),
                s.slideTo(0, 0)
            },
            update: l
        })
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: i, emit: n} = e;
        const l = a()
          , o = r();
        function c(e) {
            if (!t.enabled)
                return;
            const {rtlTranslate: s} = t;
            let a = e;
            a.originalEvent && (a = a.originalEvent);
            const i = a.keyCode || a.charCode
              , r = t.params.keyboard.pageUpDown
              , d = r && 33 === i
              , c = r && 34 === i
              , p = 37 === i
              , u = 39 === i
              , h = 38 === i
              , m = 40 === i;
            if (!t.allowSlideNext && (t.isHorizontal() && u || t.isVertical() && m || c))
                return !1;
            if (!t.allowSlidePrev && (t.isHorizontal() && p || t.isVertical() && h || d))
                return !1;
            if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || l.activeElement && l.activeElement.nodeName && ("input" === l.activeElement.nodeName.toLowerCase() || "textarea" === l.activeElement.nodeName.toLowerCase()))) {
                if (t.params.keyboard.onlyInViewport && (d || c || p || u || h || m)) {
                    let e = !1;
                    if (t.$el.parents(`.${t.params.slideClass}`).length > 0 && 0 === t.$el.parents(`.${t.params.slideActiveClass}`).length)
                        return;
                    const a = t.$el
                      , i = a[0].clientWidth
                      , r = a[0].clientHeight
                      , n = o.innerWidth
                      , l = o.innerHeight
                      , d = t.$el.offset();
                    s && (d.left -= t.$el[0].scrollLeft);
                    const c = [[d.left, d.top], [d.left + i, d.top], [d.left, d.top + r], [d.left + i, d.top + r]];
                    for (let t = 0; t < c.length; t += 1) {
                        const s = c[t];
                        if (s[0] >= 0 && s[0] <= n && s[1] >= 0 && s[1] <= l) {
                            if (0 === s[0] && 0 === s[1])
                                continue;
                            e = !0
                        }
                    }
                    if (!e)
                        return
                }
                t.isHorizontal() ? ((d || c || p || u) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1),
                ((c || u) && !s || (d || p) && s) && t.slideNext(),
                ((d || p) && !s || (c || u) && s) && t.slidePrev()) : ((d || c || h || m) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1),
                (c || m) && t.slideNext(),
                (d || h) && t.slidePrev()),
                n("keyPress", i)
            }
        }
        function p() {
            t.keyboard.enabled || (d(l).on("keydown", c),
            t.keyboard.enabled = !0)
        }
        function u() {
            t.keyboard.enabled && (d(l).off("keydown", c),
            t.keyboard.enabled = !1)
        }
        t.keyboard = {
            enabled: !1
        },
        s({
            keyboard: {
                enabled: !1,
                onlyInViewport: !0,
                pageUpDown: !0
            }
        }),
        i("init", (()=>{
            t.params.keyboard.enabled && p()
        }
        )),
        i("destroy", (()=>{
            t.keyboard.enabled && u()
        }
        )),
        Object.assign(t.keyboard, {
            enable: p,
            disable: u
        })
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: a, emit: i} = e;
        const n = r();
        let l;
        s({
            mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarget: "container",
                thresholdDelta: null,
                thresholdTime: null
            }
        }),
        t.mousewheel = {
            enabled: !1
        };
        let o, c = u();
        const h = [];
        function m() {
            t.enabled && (t.mouseEntered = !0)
        }
        function f() {
            t.enabled && (t.mouseEntered = !1)
        }
        function g(e) {
            return !(t.params.mousewheel.thresholdDelta && e.delta < t.params.mousewheel.thresholdDelta) && (!(t.params.mousewheel.thresholdTime && u() - c < t.params.mousewheel.thresholdTime) && (e.delta >= 6 && u() - c < 60 || (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(),
            i("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(),
            i("scroll", e.raw)),
            c = (new n.Date).getTime(),
            !1)))
        }
        function v(e) {
            let s = e
              , a = !0;
            if (!t.enabled)
                return;
            const r = t.params.mousewheel;
            t.params.cssMode && s.preventDefault();
            let n = t.$el;
            if ("container" !== t.params.mousewheel.eventsTarget && (n = d(t.params.mousewheel.eventsTarget)),
            !t.mouseEntered && !n[0].contains(s.target) && !r.releaseOnEdges)
                return !0;
            s.originalEvent && (s = s.originalEvent);
            let c = 0;
            const m = t.rtlTranslate ? -1 : 1
              , f = function(e) {
                let t = 0
                  , s = 0
                  , a = 0
                  , i = 0;
                return "detail"in e && (s = e.detail),
                "wheelDelta"in e && (s = -e.wheelDelta / 120),
                "wheelDeltaY"in e && (s = -e.wheelDeltaY / 120),
                "wheelDeltaX"in e && (t = -e.wheelDeltaX / 120),
                "axis"in e && e.axis === e.HORIZONTAL_AXIS && (t = s,
                s = 0),
                a = 10 * t,
                i = 10 * s,
                "deltaY"in e && (i = e.deltaY),
                "deltaX"in e && (a = e.deltaX),
                e.shiftKey && !a && (a = i,
                i = 0),
                (a || i) && e.deltaMode && (1 === e.deltaMode ? (a *= 40,
                i *= 40) : (a *= 800,
                i *= 800)),
                a && !t && (t = a < 1 ? -1 : 1),
                i && !s && (s = i < 1 ? -1 : 1),
                {
                    spinX: t,
                    spinY: s,
                    pixelX: a,
                    pixelY: i
                }
            }(s);
            if (r.forceToAxis)
                if (t.isHorizontal()) {
                    if (!(Math.abs(f.pixelX) > Math.abs(f.pixelY)))
                        return !0;
                    c = -f.pixelX * m
                } else {
                    if (!(Math.abs(f.pixelY) > Math.abs(f.pixelX)))
                        return !0;
                    c = -f.pixelY
                }
            else
                c = Math.abs(f.pixelX) > Math.abs(f.pixelY) ? -f.pixelX * m : -f.pixelY;
            if (0 === c)
                return !0;
            r.invert && (c = -c);
            let v = t.getTranslate() + c * r.sensitivity;
            if (v >= t.minTranslate() && (v = t.minTranslate()),
            v <= t.maxTranslate() && (v = t.maxTranslate()),
            a = !!t.params.loop || !(v === t.minTranslate() || v === t.maxTranslate()),
            a && t.params.nested && s.stopPropagation(),
            t.params.freeMode && t.params.freeMode.enabled) {
                const e = {
                    time: u(),
                    delta: Math.abs(c),
                    direction: Math.sign(c)
                }
                  , a = o && e.time < o.time + 500 && e.delta <= o.delta && e.direction === o.direction;
                if (!a) {
                    o = void 0,
                    t.params.loop && t.loopFix();
                    let n = t.getTranslate() + c * r.sensitivity;
                    const d = t.isBeginning
                      , u = t.isEnd;
                    if (n >= t.minTranslate() && (n = t.minTranslate()),
                    n <= t.maxTranslate() && (n = t.maxTranslate()),
                    t.setTransition(0),
                    t.setTranslate(n),
                    t.updateProgress(),
                    t.updateActiveIndex(),
                    t.updateSlidesClasses(),
                    (!d && t.isBeginning || !u && t.isEnd) && t.updateSlidesClasses(),
                    t.params.freeMode.sticky) {
                        clearTimeout(l),
                        l = void 0,
                        h.length >= 15 && h.shift();
                        const s = h.length ? h[h.length - 1] : void 0
                          , a = h[0];
                        if (h.push(e),
                        s && (e.delta > s.delta || e.direction !== s.direction))
                            h.splice(0);
                        else if (h.length >= 15 && e.time - a.time < 500 && a.delta - e.delta >= 1 && e.delta <= 6) {
                            const s = c > 0 ? .8 : .2;
                            o = e,
                            h.splice(0),
                            l = p((()=>{
                                t.slideToClosest(t.params.speed, !0, void 0, s)
                            }
                            ), 0)
                        }
                        l || (l = p((()=>{
                            o = e,
                            h.splice(0),
                            t.slideToClosest(t.params.speed, !0, void 0, .5)
                        }
                        ), 500))
                    }
                    if (a || i("scroll", s),
                    t.params.autoplay && t.params.autoplayDisableOnInteraction && t.autoplay.stop(),
                    n === t.minTranslate() || n === t.maxTranslate())
                        return !0
                }
            } else {
                const s = {
                    time: u(),
                    delta: Math.abs(c),
                    direction: Math.sign(c),
                    raw: e
                };
                h.length >= 2 && h.shift();
                const a = h.length ? h[h.length - 1] : void 0;
                if (h.push(s),
                a ? (s.direction !== a.direction || s.delta > a.delta || s.time > a.time + 150) && g(s) : g(s),
                function(e) {
                    const s = t.params.mousewheel;
                    if (e.direction < 0) {
                        if (t.isEnd && !t.params.loop && s.releaseOnEdges)
                            return !0
                    } else if (t.isBeginning && !t.params.loop && s.releaseOnEdges)
                        return !0;
                    return !1
                }(s))
                    return !0
            }
            return s.preventDefault ? s.preventDefault() : s.returnValue = !1,
            !1
        }
        function w(e) {
            let s = t.$el;
            "container" !== t.params.mousewheel.eventsTarget && (s = d(t.params.mousewheel.eventsTarget)),
            s[e]("mouseenter", m),
            s[e]("mouseleave", f),
            s[e]("wheel", v)
        }
        function b() {
            return t.params.cssMode ? (t.wrapperEl.removeEventListener("wheel", v),
            !0) : !t.mousewheel.enabled && (w("on"),
            t.mousewheel.enabled = !0,
            !0)
        }
        function x() {
            return t.params.cssMode ? (t.wrapperEl.addEventListener(event, v),
            !0) : !!t.mousewheel.enabled && (w("off"),
            t.mousewheel.enabled = !1,
            !0)
        }
        a("init", (()=>{
            !t.params.mousewheel.enabled && t.params.cssMode && x(),
            t.params.mousewheel.enabled && b()
        }
        )),
        a("destroy", (()=>{
            t.params.cssMode && b(),
            t.mousewheel.enabled && x()
        }
        )),
        Object.assign(t.mousewheel, {
            enable: b,
            disable: x
        })
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: a, emit: i} = e;
        function r(e) {
            let s;
            return e && (s = d(e),
            t.params.uniqueNavElements && "string" == typeof e && s.length > 1 && 1 === t.$el.find(e).length && (s = t.$el.find(e))),
            s
        }
        function n(e, s) {
            const a = t.params.navigation;
            e && e.length > 0 && (e[s ? "addClass" : "removeClass"](a.disabledClass),
            e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = s),
            t.params.watchOverflow && t.enabled && e[t.isLocked ? "addClass" : "removeClass"](a.lockClass))
        }
        function l() {
            if (t.params.loop)
                return;
            const {$nextEl: e, $prevEl: s} = t.navigation;
            n(s, t.isBeginning && !t.params.rewind),
            n(e, t.isEnd && !t.params.rewind)
        }
        function o(e) {
            e.preventDefault(),
            (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(),
            i("navigationPrev"))
        }
        function c(e) {
            e.preventDefault(),
            (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(),
            i("navigationNext"))
        }
        function p() {
            const e = t.params.navigation;
            if (t.params.navigation = F(t, t.originalParams.navigation, t.params.navigation, {
                nextEl: "swiper-button-next",
                prevEl: "swiper-button-prev"
            }),
            !e.nextEl && !e.prevEl)
                return;
            const s = r(e.nextEl)
              , a = r(e.prevEl);
            s && s.length > 0 && s.on("click", c),
            a && a.length > 0 && a.on("click", o),
            Object.assign(t.navigation, {
                $nextEl: s,
                nextEl: s && s[0],
                $prevEl: a,
                prevEl: a && a[0]
            }),
            t.enabled || (s && s.addClass(e.lockClass),
            a && a.addClass(e.lockClass))
        }
        function u() {
            const {$nextEl: e, $prevEl: s} = t.navigation;
            e && e.length && (e.off("click", c),
            e.removeClass(t.params.navigation.disabledClass)),
            s && s.length && (s.off("click", o),
            s.removeClass(t.params.navigation.disabledClass))
        }
        s({
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock",
                navigationDisabledClass: "swiper-navigation-disabled"
            }
        }),
        t.navigation = {
            nextEl: null,
            $nextEl: null,
            prevEl: null,
            $prevEl: null
        },
        a("init", (()=>{
            !1 === t.params.navigation.enabled ? h() : (p(),
            l())
        }
        )),
        a("toEdge fromEdge lock unlock", (()=>{
            l()
        }
        )),
        a("destroy", (()=>{
            u()
        }
        )),
        a("enable disable", (()=>{
            const {$nextEl: e, $prevEl: s} = t.navigation;
            e && e[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass),
            s && s[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass)
        }
        )),
        a("click", ((e,s)=>{
            const {$nextEl: a, $prevEl: r} = t.navigation
              , n = s.target;
            if (t.params.navigation.hideOnClick && !d(n).is(r) && !d(n).is(a)) {
                if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === n || t.pagination.el.contains(n)))
                    return;
                let e;
                a ? e = a.hasClass(t.params.navigation.hiddenClass) : r && (e = r.hasClass(t.params.navigation.hiddenClass)),
                i(!0 === e ? "navigationShow" : "navigationHide"),
                a && a.toggleClass(t.params.navigation.hiddenClass),
                r && r.toggleClass(t.params.navigation.hiddenClass)
            }
        }
        ));
        const h = ()=>{
            t.$el.addClass(t.params.navigation.navigationDisabledClass),
            u()
        }
        ;
        Object.assign(t.navigation, {
            enable: ()=>{
                t.$el.removeClass(t.params.navigation.navigationDisabledClass),
                p(),
                l()
            }
            ,
            disable: h,
            update: l,
            init: p,
            destroy: u
        })
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: a, emit: i} = e;
        const r = "swiper-pagination";
        let n;
        s({
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: e=>e,
                formatFractionTotal: e=>e,
                bulletClass: `${r}-bullet`,
                bulletActiveClass: `${r}-bullet-active`,
                modifierClass: `${r}-`,
                currentClass: `${r}-current`,
                totalClass: `${r}-total`,
                hiddenClass: `${r}-hidden`,
                progressbarFillClass: `${r}-progressbar-fill`,
                progressbarOppositeClass: `${r}-progressbar-opposite`,
                clickableClass: `${r}-clickable`,
                lockClass: `${r}-lock`,
                horizontalClass: `${r}-horizontal`,
                verticalClass: `${r}-vertical`,
                paginationDisabledClass: `${r}-disabled`
            }
        }),
        t.pagination = {
            el: null,
            $el: null,
            bullets: []
        };
        let l = 0;
        function o() {
            return !t.params.pagination.el || !t.pagination.el || !t.pagination.$el || 0 === t.pagination.$el.length
        }
        function c(e, s) {
            const {bulletActiveClass: a} = t.params.pagination;
            e[s]().addClass(`${a}-${s}`)[s]().addClass(`${a}-${s}-${s}`)
        }
        function p() {
            const e = t.rtl
              , s = t.params.pagination;
            if (o())
                return;
            const a = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length
              , r = t.pagination.$el;
            let p;
            const u = t.params.loop ? Math.ceil((a - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
            if (t.params.loop ? (p = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup),
            p > a - 1 - 2 * t.loopedSlides && (p -= a - 2 * t.loopedSlides),
            p > u - 1 && (p -= u),
            p < 0 && "bullets" !== t.params.paginationType && (p = u + p)) : p = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0,
            "bullets" === s.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
                const a = t.pagination.bullets;
                let i, o, u;
                if (s.dynamicBullets && (n = a.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0),
                r.css(t.isHorizontal() ? "width" : "height", n * (s.dynamicMainBullets + 4) + "px"),
                s.dynamicMainBullets > 1 && void 0 !== t.previousIndex && (l += p - (t.previousIndex - t.loopedSlides || 0),
                l > s.dynamicMainBullets - 1 ? l = s.dynamicMainBullets - 1 : l < 0 && (l = 0)),
                i = Math.max(p - l, 0),
                o = i + (Math.min(a.length, s.dynamicMainBullets) - 1),
                u = (o + i) / 2),
                a.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e=>`${s.bulletActiveClass}${e}`)).join(" ")),
                r.length > 1)
                    a.each((e=>{
                        const t = d(e)
                          , a = t.index();
                        a === p && t.addClass(s.bulletActiveClass),
                        s.dynamicBullets && (a >= i && a <= o && t.addClass(`${s.bulletActiveClass}-main`),
                        a === i && c(t, "prev"),
                        a === o && c(t, "next"))
                    }
                    ));
                else {
                    const e = a.eq(p)
                      , r = e.index();
                    if (e.addClass(s.bulletActiveClass),
                    s.dynamicBullets) {
                        const e = a.eq(i)
                          , n = a.eq(o);
                        for (let e = i; e <= o; e += 1)
                            a.eq(e).addClass(`${s.bulletActiveClass}-main`);
                        if (t.params.loop)
                            if (r >= a.length) {
                                for (let e = s.dynamicMainBullets; e >= 0; e -= 1)
                                    a.eq(a.length - e).addClass(`${s.bulletActiveClass}-main`);
                                a.eq(a.length - s.dynamicMainBullets - 1).addClass(`${s.bulletActiveClass}-prev`)
                            } else
                                c(e, "prev"),
                                c(n, "next");
                        else
                            c(e, "prev"),
                            c(n, "next")
                    }
                }
                if (s.dynamicBullets) {
                    const i = Math.min(a.length, s.dynamicMainBullets + 4)
                      , r = (n * i - n) / 2 - u * n
                      , l = e ? "right" : "left";
                    a.css(t.isHorizontal() ? l : "top", `${r}px`)
                }
            }
            if ("fraction" === s.type && (r.find(U(s.currentClass)).text(s.formatFractionCurrent(p + 1)),
            r.find(U(s.totalClass)).text(s.formatFractionTotal(u))),
            "progressbar" === s.type) {
                let e;
                e = s.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
                const a = (p + 1) / u;
                let i = 1
                  , n = 1;
                "horizontal" === e ? i = a : n = a,
                r.find(U(s.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${n})`).transition(t.params.speed)
            }
            "custom" === s.type && s.renderCustom ? (r.html(s.renderCustom(t, p + 1, u)),
            i("paginationRender", r[0])) : i("paginationUpdate", r[0]),
            t.params.watchOverflow && t.enabled && r[t.isLocked ? "addClass" : "removeClass"](s.lockClass)
        }
        function u() {
            const e = t.params.pagination;
            if (o())
                return;
            const s = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length
              , a = t.pagination.$el;
            let r = "";
            if ("bullets" === e.type) {
                let i = t.params.loop ? Math.ceil((s - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
                t.params.freeMode && t.params.freeMode.enabled && !t.params.loop && i > s && (i = s);
                for (let s = 0; s < i; s += 1)
                    e.renderBullet ? r += e.renderBullet.call(t, s, e.bulletClass) : r += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`;
                a.html(r),
                t.pagination.bullets = a.find(U(e.bulletClass))
            }
            "fraction" === e.type && (r = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`,
            a.html(r)),
            "progressbar" === e.type && (r = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`,
            a.html(r)),
            "custom" !== e.type && i("paginationRender", t.pagination.$el[0])
        }
        function h() {
            t.params.pagination = F(t, t.originalParams.pagination, t.params.pagination, {
                el: "swiper-pagination"
            });
            const e = t.params.pagination;
            if (!e.el)
                return;
            let s = d(e.el);
            0 !== s.length && (t.params.uniqueNavElements && "string" == typeof e.el && s.length > 1 && (s = t.$el.find(e.el),
            s.length > 1 && (s = s.filter((e=>d(e).parents(".swiper")[0] === t.el)))),
            "bullets" === e.type && e.clickable && s.addClass(e.clickableClass),
            s.addClass(e.modifierClass + e.type),
            s.addClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
            "bullets" === e.type && e.dynamicBullets && (s.addClass(`${e.modifierClass}${e.type}-dynamic`),
            l = 0,
            e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
            "progressbar" === e.type && e.progressbarOpposite && s.addClass(e.progressbarOppositeClass),
            e.clickable && s.on("click", U(e.bulletClass), (function(e) {
                e.preventDefault();
                let s = d(this).index() * t.params.slidesPerGroup;
                t.params.loop && (s += t.loopedSlides),
                t.slideTo(s)
            }
            )),
            Object.assign(t.pagination, {
                $el: s,
                el: s[0]
            }),
            t.enabled || s.addClass(e.lockClass))
        }
        function m() {
            const e = t.params.pagination;
            if (o())
                return;
            const s = t.pagination.$el;
            s.removeClass(e.hiddenClass),
            s.removeClass(e.modifierClass + e.type),
            s.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
            t.pagination.bullets && t.pagination.bullets.removeClass && t.pagination.bullets.removeClass(e.bulletActiveClass),
            e.clickable && s.off("click", U(e.bulletClass))
        }
        a("init", (()=>{
            !1 === t.params.pagination.enabled ? f() : (h(),
            u(),
            p())
        }
        )),
        a("activeIndexChange", (()=>{
            (t.params.loop || void 0 === t.snapIndex) && p()
        }
        )),
        a("snapIndexChange", (()=>{
            t.params.loop || p()
        }
        )),
        a("slidesLengthChange", (()=>{
            t.params.loop && (u(),
            p())
        }
        )),
        a("snapGridLengthChange", (()=>{
            t.params.loop || (u(),
            p())
        }
        )),
        a("destroy", (()=>{
            m()
        }
        )),
        a("enable disable", (()=>{
            const {$el: e} = t.pagination;
            e && e[t.enabled ? "removeClass" : "addClass"](t.params.pagination.lockClass)
        }
        )),
        a("lock unlock", (()=>{
            p()
        }
        )),
        a("click", ((e,s)=>{
            const a = s.target
              , {$el: r} = t.pagination;
            if (t.params.pagination.el && t.params.pagination.hideOnClick && r && r.length > 0 && !d(a).hasClass(t.params.pagination.bulletClass)) {
                if (t.navigation && (t.navigation.nextEl && a === t.navigation.nextEl || t.navigation.prevEl && a === t.navigation.prevEl))
                    return;
                const e = r.hasClass(t.params.pagination.hiddenClass);
                i(!0 === e ? "paginationShow" : "paginationHide"),
                r.toggleClass(t.params.pagination.hiddenClass)
            }
        }
        ));
        const f = ()=>{
            t.$el.addClass(t.params.pagination.paginationDisabledClass),
            t.pagination.$el && t.pagination.$el.addClass(t.params.pagination.paginationDisabledClass),
            m()
        }
        ;
        Object.assign(t.pagination, {
            enable: ()=>{
                t.$el.removeClass(t.params.pagination.paginationDisabledClass),
                t.pagination.$el && t.pagination.$el.removeClass(t.params.pagination.paginationDisabledClass),
                h(),
                u(),
                p()
            }
            ,
            disable: f,
            render: u,
            update: p,
            init: h,
            destroy: m
        })
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: i, emit: r} = e;
        const n = a();
        let l, o, c, u, h = !1, m = null, f = null;
        function g() {
            if (!t.params.scrollbar.el || !t.scrollbar.el)
                return;
            const {scrollbar: e, rtlTranslate: s, progress: a} = t
              , {$dragEl: i, $el: r} = e
              , n = t.params.scrollbar;
            let l = o
              , d = (c - o) * a;
            s ? (d = -d,
            d > 0 ? (l = o - d,
            d = 0) : -d + o > c && (l = c + d)) : d < 0 ? (l = o + d,
            d = 0) : d + o > c && (l = c - d),
            t.isHorizontal() ? (i.transform(`translate3d(${d}px, 0, 0)`),
            i[0].style.width = `${l}px`) : (i.transform(`translate3d(0px, ${d}px, 0)`),
            i[0].style.height = `${l}px`),
            n.hide && (clearTimeout(m),
            r[0].style.opacity = 1,
            m = setTimeout((()=>{
                r[0].style.opacity = 0,
                r.transition(400)
            }
            ), 1e3))
        }
        function v() {
            if (!t.params.scrollbar.el || !t.scrollbar.el)
                return;
            const {scrollbar: e} = t
              , {$dragEl: s, $el: a} = e;
            s[0].style.width = "",
            s[0].style.height = "",
            c = t.isHorizontal() ? a[0].offsetWidth : a[0].offsetHeight,
            u = t.size / (t.virtualSize + t.params.slidesOffsetBefore - (t.params.centeredSlides ? t.snapGrid[0] : 0)),
            o = "auto" === t.params.scrollbar.dragSize ? c * u : parseInt(t.params.scrollbar.dragSize, 10),
            t.isHorizontal() ? s[0].style.width = `${o}px` : s[0].style.height = `${o}px`,
            a[0].style.display = u >= 1 ? "none" : "",
            t.params.scrollbar.hide && (a[0].style.opacity = 0),
            t.params.watchOverflow && t.enabled && e.$el[t.isLocked ? "addClass" : "removeClass"](t.params.scrollbar.lockClass)
        }
        function w(e) {
            return t.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY
        }
        function b(e) {
            const {scrollbar: s, rtlTranslate: a} = t
              , {$el: i} = s;
            let r;
            r = (w(e) - i.offset()[t.isHorizontal() ? "left" : "top"] - (null !== l ? l : o / 2)) / (c - o),
            r = Math.max(Math.min(r, 1), 0),
            a && (r = 1 - r);
            const n = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * r;
            t.updateProgress(n),
            t.setTranslate(n),
            t.updateActiveIndex(),
            t.updateSlidesClasses()
        }
        function x(e) {
            const s = t.params.scrollbar
              , {scrollbar: a, $wrapperEl: i} = t
              , {$el: n, $dragEl: o} = a;
            h = !0,
            l = e.target === o[0] || e.target === o ? w(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null,
            e.preventDefault(),
            e.stopPropagation(),
            i.transition(100),
            o.transition(100),
            b(e),
            clearTimeout(f),
            n.transition(0),
            s.hide && n.css("opacity", 1),
            t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"),
            r("scrollbarDragStart", e)
        }
        function y(e) {
            const {scrollbar: s, $wrapperEl: a} = t
              , {$el: i, $dragEl: n} = s;
            h && (e.preventDefault ? e.preventDefault() : e.returnValue = !1,
            b(e),
            a.transition(0),
            i.transition(0),
            n.transition(0),
            r("scrollbarDragMove", e))
        }
        function E(e) {
            const s = t.params.scrollbar
              , {scrollbar: a, $wrapperEl: i} = t
              , {$el: n} = a;
            h && (h = !1,
            t.params.cssMode && (t.$wrapperEl.css("scroll-snap-type", ""),
            i.transition("")),
            s.hide && (clearTimeout(f),
            f = p((()=>{
                n.css("opacity", 0),
                n.transition(400)
            }
            ), 1e3)),
            r("scrollbarDragEnd", e),
            s.snapOnRelease && t.slideToClosest())
        }
        function C(e) {
            const {scrollbar: s, touchEventsTouch: a, touchEventsDesktop: i, params: r, support: l} = t
              , o = s.$el;
            if (!o)
                return;
            const d = o[0]
              , c = !(!l.passiveListener || !r.passiveListeners) && {
                passive: !1,
                capture: !1
            }
              , p = !(!l.passiveListener || !r.passiveListeners) && {
                passive: !0,
                capture: !1
            };
            if (!d)
                return;
            const u = "on" === e ? "addEventListener" : "removeEventListener";
            l.touch ? (d[u](a.start, x, c),
            d[u](a.move, y, c),
            d[u](a.end, E, p)) : (d[u](i.start, x, c),
            n[u](i.move, y, c),
            n[u](i.end, E, p))
        }
        function T() {
            const {scrollbar: e, $el: s} = t;
            t.params.scrollbar = F(t, t.originalParams.scrollbar, t.params.scrollbar, {
                el: "swiper-scrollbar"
            });
            const a = t.params.scrollbar;
            if (!a.el)
                return;
            let i = d(a.el);
            t.params.uniqueNavElements && "string" == typeof a.el && i.length > 1 && 1 === s.find(a.el).length && (i = s.find(a.el)),
            i.addClass(t.isHorizontal() ? a.horizontalClass : a.verticalClass);
            let r = i.find(`.${t.params.scrollbar.dragClass}`);
            0 === r.length && (r = d(`<div class="${t.params.scrollbar.dragClass}"></div>`),
            i.append(r)),
            Object.assign(e, {
                $el: i,
                el: i[0],
                $dragEl: r,
                dragEl: r[0]
            }),
            a.draggable && t.params.scrollbar.el && t.scrollbar.el && C("on"),
            i && i[t.enabled ? "removeClass" : "addClass"](t.params.scrollbar.lockClass)
        }
        function $() {
            const e = t.params.scrollbar
              , s = t.scrollbar.$el;
            s && s.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
            t.params.scrollbar.el && t.scrollbar.el && C("off")
        }
        s({
            scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag",
                scrollbarDisabledClass: "swiper-scrollbar-disabled",
                horizontalClass: "swiper-scrollbar-horizontal",
                verticalClass: "swiper-scrollbar-vertical"
            }
        }),
        t.scrollbar = {
            el: null,
            dragEl: null,
            $el: null,
            $dragEl: null
        },
        i("init", (()=>{
            !1 === t.params.scrollbar.enabled ? S() : (T(),
            v(),
            g())
        }
        )),
        i("update resize observerUpdate lock unlock", (()=>{
            v()
        }
        )),
        i("setTranslate", (()=>{
            g()
        }
        )),
        i("setTransition", ((e,s)=>{
            !function(e) {
                t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e)
            }(s)
        }
        )),
        i("enable disable", (()=>{
            const {$el: e} = t.scrollbar;
            e && e[t.enabled ? "removeClass" : "addClass"](t.params.scrollbar.lockClass)
        }
        )),
        i("destroy", (()=>{
            $()
        }
        ));
        const S = ()=>{
            t.$el.addClass(t.params.scrollbar.scrollbarDisabledClass),
            t.scrollbar.$el && t.scrollbar.$el.addClass(t.params.scrollbar.scrollbarDisabledClass),
            $()
        }
        ;
        Object.assign(t.scrollbar, {
            enable: ()=>{
                t.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass),
                t.scrollbar.$el && t.scrollbar.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass),
                T(),
                v(),
                g()
            }
            ,
            disable: S,
            updateSize: v,
            setTranslate: g,
            init: T,
            destroy: $
        })
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({
            parallax: {
                enabled: !1
            }
        });
        const i = (e,s)=>{
            const {rtl: a} = t
              , i = d(e)
              , r = a ? -1 : 1
              , n = i.attr("data-swiper-parallax") || "0";
            let l = i.attr("data-swiper-parallax-x")
              , o = i.attr("data-swiper-parallax-y");
            const c = i.attr("data-swiper-parallax-scale")
              , p = i.attr("data-swiper-parallax-opacity");
            if (l || o ? (l = l || "0",
            o = o || "0") : t.isHorizontal() ? (l = n,
            o = "0") : (o = n,
            l = "0"),
            l = l.indexOf("%") >= 0 ? parseInt(l, 10) * s * r + "%" : l * s * r + "px",
            o = o.indexOf("%") >= 0 ? parseInt(o, 10) * s + "%" : o * s + "px",
            null != p) {
                const e = p - (p - 1) * (1 - Math.abs(s));
                i[0].style.opacity = e
            }
            if (null == c)
                i.transform(`translate3d(${l}, ${o}, 0px)`);
            else {
                const e = c - (c - 1) * (1 - Math.abs(s));
                i.transform(`translate3d(${l}, ${o}, 0px) scale(${e})`)
            }
        }
          , r = ()=>{
            const {$el: e, slides: s, progress: a, snapGrid: r} = t;
            e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e=>{
                i(e, a)
            }
            )),
            s.each(((e,s)=>{
                let n = e.progress;
                t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (n += Math.ceil(s / 2) - a * (r.length - 1)),
                n = Math.min(Math.max(n, -1), 1),
                d(e).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e=>{
                    i(e, n)
                }
                ))
            }
            ))
        }
        ;
        a("beforeInit", (()=>{
            t.params.parallax.enabled && (t.params.watchSlidesProgress = !0,
            t.originalParams.watchSlidesProgress = !0)
        }
        )),
        a("init", (()=>{
            t.params.parallax.enabled && r()
        }
        )),
        a("setTranslate", (()=>{
            t.params.parallax.enabled && r()
        }
        )),
        a("setTransition", ((e,s)=>{
            t.params.parallax.enabled && function(e) {
                void 0 === e && (e = t.params.speed);
                const {$el: s} = t;
                s.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((t=>{
                    const s = d(t);
                    let a = parseInt(s.attr("data-swiper-parallax-duration"), 10) || e;
                    0 === e && (a = 0),
                    s.transition(a)
                }
                ))
            }(s)
        }
        ))
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: a, emit: i} = e;
        const n = r();
        s({
            zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed"
            }
        }),
        t.zoom = {
            enabled: !1
        };
        let l, o, c, p = 1, u = !1;
        const m = {
            $slideEl: void 0,
            slideWidth: void 0,
            slideHeight: void 0,
            $imageEl: void 0,
            $imageWrapEl: void 0,
            maxRatio: 3
        }
          , f = {
            isTouched: void 0,
            isMoved: void 0,
            currentX: void 0,
            currentY: void 0,
            minX: void 0,
            minY: void 0,
            maxX: void 0,
            maxY: void 0,
            width: void 0,
            height: void 0,
            startX: void 0,
            startY: void 0,
            touchesStart: {},
            touchesCurrent: {}
        }
          , g = {
            x: void 0,
            y: void 0,
            prevPositionX: void 0,
            prevPositionY: void 0,
            prevTime: void 0
        };
        let v = 1;
        function w(e) {
            if (e.targetTouches.length < 2)
                return 1;
            const t = e.targetTouches[0].pageX
              , s = e.targetTouches[0].pageY
              , a = e.targetTouches[1].pageX
              , i = e.targetTouches[1].pageY;
            return Math.sqrt((a - t) ** 2 + (i - s) ** 2)
        }
        function b(e) {
            const s = t.support
              , a = t.params.zoom;
            if (o = !1,
            c = !1,
            !s.gestures) {
                if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2)
                    return;
                o = !0,
                m.scaleStart = w(e)
            }
            m.$slideEl && m.$slideEl.length || (m.$slideEl = d(e.target).closest(`.${t.params.slideClass}`),
            0 === m.$slideEl.length && (m.$slideEl = t.slides.eq(t.activeIndex)),
            m.$imageEl = m.$slideEl.find(`.${a.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),
            m.$imageWrapEl = m.$imageEl.parent(`.${a.containerClass}`),
            m.maxRatio = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio,
            0 !== m.$imageWrapEl.length) ? (m.$imageEl && m.$imageEl.transition(0),
            u = !0) : m.$imageEl = void 0
        }
        function x(e) {
            const s = t.support
              , a = t.params.zoom
              , i = t.zoom;
            if (!s.gestures) {
                if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2)
                    return;
                c = !0,
                m.scaleMove = w(e)
            }
            m.$imageEl && 0 !== m.$imageEl.length ? (s.gestures ? i.scale = e.scale * p : i.scale = m.scaleMove / m.scaleStart * p,
            i.scale > m.maxRatio && (i.scale = m.maxRatio - 1 + (i.scale - m.maxRatio + 1) ** .5),
            i.scale < a.minRatio && (i.scale = a.minRatio + 1 - (a.minRatio - i.scale + 1) ** .5),
            m.$imageEl.transform(`translate3d(0,0,0) scale(${i.scale})`)) : "gesturechange" === e.type && b(e)
        }
        function y(e) {
            const s = t.device
              , a = t.support
              , i = t.params.zoom
              , r = t.zoom;
            if (!a.gestures) {
                if (!o || !c)
                    return;
                if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !s.android)
                    return;
                o = !1,
                c = !1
            }
            m.$imageEl && 0 !== m.$imageEl.length && (r.scale = Math.max(Math.min(r.scale, m.maxRatio), i.minRatio),
            m.$imageEl.transition(t.params.speed).transform(`translate3d(0,0,0) scale(${r.scale})`),
            p = r.scale,
            u = !1,
            1 === r.scale && (m.$slideEl = void 0))
        }
        function E(e) {
            const s = t.zoom;
            if (!m.$imageEl || 0 === m.$imageEl.length)
                return;
            if (t.allowClick = !1,
            !f.isTouched || !m.$slideEl)
                return;
            f.isMoved || (f.width = m.$imageEl[0].offsetWidth,
            f.height = m.$imageEl[0].offsetHeight,
            f.startX = h(m.$imageWrapEl[0], "x") || 0,
            f.startY = h(m.$imageWrapEl[0], "y") || 0,
            m.slideWidth = m.$slideEl[0].offsetWidth,
            m.slideHeight = m.$slideEl[0].offsetHeight,
            m.$imageWrapEl.transition(0));
            const a = f.width * s.scale
              , i = f.height * s.scale;
            if (!(a < m.slideWidth && i < m.slideHeight)) {
                if (f.minX = Math.min(m.slideWidth / 2 - a / 2, 0),
                f.maxX = -f.minX,
                f.minY = Math.min(m.slideHeight / 2 - i / 2, 0),
                f.maxY = -f.minY,
                f.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX,
                f.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY,
                !f.isMoved && !u) {
                    if (t.isHorizontal() && (Math.floor(f.minX) === Math.floor(f.startX) && f.touchesCurrent.x < f.touchesStart.x || Math.floor(f.maxX) === Math.floor(f.startX) && f.touchesCurrent.x > f.touchesStart.x))
                        return void (f.isTouched = !1);
                    if (!t.isHorizontal() && (Math.floor(f.minY) === Math.floor(f.startY) && f.touchesCurrent.y < f.touchesStart.y || Math.floor(f.maxY) === Math.floor(f.startY) && f.touchesCurrent.y > f.touchesStart.y))
                        return void (f.isTouched = !1)
                }
                e.cancelable && e.preventDefault(),
                e.stopPropagation(),
                f.isMoved = !0,
                f.currentX = f.touchesCurrent.x - f.touchesStart.x + f.startX,
                f.currentY = f.touchesCurrent.y - f.touchesStart.y + f.startY,
                f.currentX < f.minX && (f.currentX = f.minX + 1 - (f.minX - f.currentX + 1) ** .8),
                f.currentX > f.maxX && (f.currentX = f.maxX - 1 + (f.currentX - f.maxX + 1) ** .8),
                f.currentY < f.minY && (f.currentY = f.minY + 1 - (f.minY - f.currentY + 1) ** .8),
                f.currentY > f.maxY && (f.currentY = f.maxY - 1 + (f.currentY - f.maxY + 1) ** .8),
                g.prevPositionX || (g.prevPositionX = f.touchesCurrent.x),
                g.prevPositionY || (g.prevPositionY = f.touchesCurrent.y),
                g.prevTime || (g.prevTime = Date.now()),
                g.x = (f.touchesCurrent.x - g.prevPositionX) / (Date.now() - g.prevTime) / 2,
                g.y = (f.touchesCurrent.y - g.prevPositionY) / (Date.now() - g.prevTime) / 2,
                Math.abs(f.touchesCurrent.x - g.prevPositionX) < 2 && (g.x = 0),
                Math.abs(f.touchesCurrent.y - g.prevPositionY) < 2 && (g.y = 0),
                g.prevPositionX = f.touchesCurrent.x,
                g.prevPositionY = f.touchesCurrent.y,
                g.prevTime = Date.now(),
                m.$imageWrapEl.transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`)
            }
        }
        function C() {
            const e = t.zoom;
            m.$slideEl && t.previousIndex !== t.activeIndex && (m.$imageEl && m.$imageEl.transform("translate3d(0,0,0) scale(1)"),
            m.$imageWrapEl && m.$imageWrapEl.transform("translate3d(0,0,0)"),
            e.scale = 1,
            p = 1,
            m.$slideEl = void 0,
            m.$imageEl = void 0,
            m.$imageWrapEl = void 0)
        }
        function T(e) {
            const s = t.zoom
              , a = t.params.zoom;
            if (m.$slideEl || (e && e.target && (m.$slideEl = d(e.target).closest(`.${t.params.slideClass}`)),
            m.$slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? m.$slideEl = t.$wrapperEl.children(`.${t.params.slideActiveClass}`) : m.$slideEl = t.slides.eq(t.activeIndex)),
            m.$imageEl = m.$slideEl.find(`.${a.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),
            m.$imageWrapEl = m.$imageEl.parent(`.${a.containerClass}`)),
            !m.$imageEl || 0 === m.$imageEl.length || !m.$imageWrapEl || 0 === m.$imageWrapEl.length)
                return;
            let i, r, l, o, c, u, h, g, v, w, b, x, y, E, C, T, $, S;
            t.params.cssMode && (t.wrapperEl.style.overflow = "hidden",
            t.wrapperEl.style.touchAction = "none"),
            m.$slideEl.addClass(`${a.zoomedSlideClass}`),
            void 0 === f.touchesStart.x && e ? (i = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX,
            r = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (i = f.touchesStart.x,
            r = f.touchesStart.y),
            s.scale = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio,
            p = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio,
            e ? ($ = m.$slideEl[0].offsetWidth,
            S = m.$slideEl[0].offsetHeight,
            l = m.$slideEl.offset().left + n.scrollX,
            o = m.$slideEl.offset().top + n.scrollY,
            c = l + $ / 2 - i,
            u = o + S / 2 - r,
            v = m.$imageEl[0].offsetWidth,
            w = m.$imageEl[0].offsetHeight,
            b = v * s.scale,
            x = w * s.scale,
            y = Math.min($ / 2 - b / 2, 0),
            E = Math.min(S / 2 - x / 2, 0),
            C = -y,
            T = -E,
            h = c * s.scale,
            g = u * s.scale,
            h < y && (h = y),
            h > C && (h = C),
            g < E && (g = E),
            g > T && (g = T)) : (h = 0,
            g = 0),
            m.$imageWrapEl.transition(300).transform(`translate3d(${h}px, ${g}px,0)`),
            m.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${s.scale})`)
        }
        function $() {
            const e = t.zoom
              , s = t.params.zoom;
            m.$slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? m.$slideEl = t.$wrapperEl.children(`.${t.params.slideActiveClass}`) : m.$slideEl = t.slides.eq(t.activeIndex),
            m.$imageEl = m.$slideEl.find(`.${s.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),
            m.$imageWrapEl = m.$imageEl.parent(`.${s.containerClass}`)),
            m.$imageEl && 0 !== m.$imageEl.length && m.$imageWrapEl && 0 !== m.$imageWrapEl.length && (t.params.cssMode && (t.wrapperEl.style.overflow = "",
            t.wrapperEl.style.touchAction = ""),
            e.scale = 1,
            p = 1,
            m.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
            m.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
            m.$slideEl.removeClass(`${s.zoomedSlideClass}`),
            m.$slideEl = void 0)
        }
        function S(e) {
            const s = t.zoom;
            s.scale && 1 !== s.scale ? $() : T(e)
        }
        function M() {
            const e = t.support;
            return {
                passiveListener: !("touchstart" !== t.touchEvents.start || !e.passiveListener || !t.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                },
                activeListenerWithCapture: !e.passiveListener || {
                    passive: !1,
                    capture: !0
                }
            }
        }
        function P() {
            return `.${t.params.slideClass}`
        }
        function k(e) {
            const {passiveListener: s} = M()
              , a = P();
            t.$wrapperEl[e]("gesturestart", a, b, s),
            t.$wrapperEl[e]("gesturechange", a, x, s),
            t.$wrapperEl[e]("gestureend", a, y, s)
        }
        function z() {
            l || (l = !0,
            k("on"))
        }
        function L() {
            l && (l = !1,
            k("off"))
        }
        function O() {
            const e = t.zoom;
            if (e.enabled)
                return;
            e.enabled = !0;
            const s = t.support
              , {passiveListener: a, activeListenerWithCapture: i} = M()
              , r = P();
            s.gestures ? (t.$wrapperEl.on(t.touchEvents.start, z, a),
            t.$wrapperEl.on(t.touchEvents.end, L, a)) : "touchstart" === t.touchEvents.start && (t.$wrapperEl.on(t.touchEvents.start, r, b, a),
            t.$wrapperEl.on(t.touchEvents.move, r, x, i),
            t.$wrapperEl.on(t.touchEvents.end, r, y, a),
            t.touchEvents.cancel && t.$wrapperEl.on(t.touchEvents.cancel, r, y, a)),
            t.$wrapperEl.on(t.touchEvents.move, `.${t.params.zoom.containerClass}`, E, i)
        }
        function I() {
            const e = t.zoom;
            if (!e.enabled)
                return;
            const s = t.support;
            e.enabled = !1;
            const {passiveListener: a, activeListenerWithCapture: i} = M()
              , r = P();
            s.gestures ? (t.$wrapperEl.off(t.touchEvents.start, z, a),
            t.$wrapperEl.off(t.touchEvents.end, L, a)) : "touchstart" === t.touchEvents.start && (t.$wrapperEl.off(t.touchEvents.start, r, b, a),
            t.$wrapperEl.off(t.touchEvents.move, r, x, i),
            t.$wrapperEl.off(t.touchEvents.end, r, y, a),
            t.touchEvents.cancel && t.$wrapperEl.off(t.touchEvents.cancel, r, y, a)),
            t.$wrapperEl.off(t.touchEvents.move, `.${t.params.zoom.containerClass}`, E, i)
        }
        Object.defineProperty(t.zoom, "scale", {
            get: ()=>v,
            set(e) {
                if (v !== e) {
                    const t = m.$imageEl ? m.$imageEl[0] : void 0
                      , s = m.$slideEl ? m.$slideEl[0] : void 0;
                    i("zoomChange", e, t, s)
                }
                v = e
            }
        }),
        a("init", (()=>{
            t.params.zoom.enabled && O()
        }
        )),
        a("destroy", (()=>{
            I()
        }
        )),
        a("touchStart", ((e,s)=>{
            t.zoom.enabled && function(e) {
                const s = t.device;
                m.$imageEl && 0 !== m.$imageEl.length && (f.isTouched || (s.android && e.cancelable && e.preventDefault(),
                f.isTouched = !0,
                f.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX,
                f.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
            }(s)
        }
        )),
        a("touchEnd", ((e,s)=>{
            t.zoom.enabled && function() {
                const e = t.zoom;
                if (!m.$imageEl || 0 === m.$imageEl.length)
                    return;
                if (!f.isTouched || !f.isMoved)
                    return f.isTouched = !1,
                    void (f.isMoved = !1);
                f.isTouched = !1,
                f.isMoved = !1;
                let s = 300
                  , a = 300;
                const i = g.x * s
                  , r = f.currentX + i
                  , n = g.y * a
                  , l = f.currentY + n;
                0 !== g.x && (s = Math.abs((r - f.currentX) / g.x)),
                0 !== g.y && (a = Math.abs((l - f.currentY) / g.y));
                const o = Math.max(s, a);
                f.currentX = r,
                f.currentY = l;
                const d = f.width * e.scale
                  , c = f.height * e.scale;
                f.minX = Math.min(m.slideWidth / 2 - d / 2, 0),
                f.maxX = -f.minX,
                f.minY = Math.min(m.slideHeight / 2 - c / 2, 0),
                f.maxY = -f.minY,
                f.currentX = Math.max(Math.min(f.currentX, f.maxX), f.minX),
                f.currentY = Math.max(Math.min(f.currentY, f.maxY), f.minY),
                m.$imageWrapEl.transition(o).transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`)
            }()
        }
        )),
        a("doubleTap", ((e,s)=>{
            !t.animating && t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && S(s)
        }
        )),
        a("transitionEnd", (()=>{
            t.zoom.enabled && t.params.zoom.enabled && C()
        }
        )),
        a("slideChange", (()=>{
            t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && C()
        }
        )),
        Object.assign(t.zoom, {
            enable: O,
            disable: I,
            in: T,
            out: $,
            toggle: S
        })
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: a, emit: i} = e;
        s({
            lazy: {
                checkInView: !1,
                enabled: !1,
                loadPrevNext: !1,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: !1,
                scrollingElement: "",
                elementClass: "swiper-lazy",
                loadingClass: "swiper-lazy-loading",
                loadedClass: "swiper-lazy-loaded",
                preloaderClass: "swiper-lazy-preloader"
            }
        }),
        t.lazy = {};
        let n = !1
          , l = !1;
        function o(e, s) {
            void 0 === s && (s = !0);
            const a = t.params.lazy;
            if (void 0 === e)
                return;
            if (0 === t.slides.length)
                return;
            const r = t.virtual && t.params.virtual.enabled ? t.$wrapperEl.children(`.${t.params.slideClass}[data-swiper-slide-index="${e}"]`) : t.slides.eq(e)
              , n = r.find(`.${a.elementClass}:not(.${a.loadedClass}):not(.${a.loadingClass})`);
            !r.hasClass(a.elementClass) || r.hasClass(a.loadedClass) || r.hasClass(a.loadingClass) || n.push(r[0]),
            0 !== n.length && n.each((e=>{
                const n = d(e);
                n.addClass(a.loadingClass);
                const l = n.attr("data-background")
                  , c = n.attr("data-src")
                  , p = n.attr("data-srcset")
                  , u = n.attr("data-sizes")
                  , h = n.parent("picture");
                t.loadImage(n[0], c || l, p, u, !1, (()=>{
                    if (null != t && t && (!t || t.params) && !t.destroyed) {
                        if (l ? (n.css("background-image", `url("${l}")`),
                        n.removeAttr("data-background")) : (p && (n.attr("srcset", p),
                        n.removeAttr("data-srcset")),
                        u && (n.attr("sizes", u),
                        n.removeAttr("data-sizes")),
                        h.length && h.children("source").each((e=>{
                            const t = d(e);
                            t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")),
                            t.removeAttr("data-srcset"))
                        }
                        )),
                        c && (n.attr("src", c),
                        n.removeAttr("data-src"))),
                        n.addClass(a.loadedClass).removeClass(a.loadingClass),
                        r.find(`.${a.preloaderClass}`).remove(),
                        t.params.loop && s) {
                            const e = r.attr("data-swiper-slide-index");
                            if (r.hasClass(t.params.slideDuplicateClass)) {
                                o(t.$wrapperEl.children(`[data-swiper-slide-index="${e}"]:not(.${t.params.slideDuplicateClass})`).index(), !1)
                            } else {
                                o(t.$wrapperEl.children(`.${t.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`).index(), !1)
                            }
                        }
                        i("lazyImageReady", r[0], n[0]),
                        t.params.autoHeight && t.updateAutoHeight()
                    }
                }
                )),
                i("lazyImageLoad", r[0], n[0])
            }
            ))
        }
        function c() {
            const {$wrapperEl: e, params: s, slides: a, activeIndex: i} = t
              , r = t.virtual && s.virtual.enabled
              , n = s.lazy;
            let c = s.slidesPerView;
            function p(t) {
                if (r) {
                    if (e.children(`.${s.slideClass}[data-swiper-slide-index="${t}"]`).length)
                        return !0
                } else if (a[t])
                    return !0;
                return !1
            }
            function u(e) {
                return r ? d(e).attr("data-swiper-slide-index") : d(e).index()
            }
            if ("auto" === c && (c = 0),
            l || (l = !0),
            t.params.watchSlidesProgress)
                e.children(`.${s.slideVisibleClass}`).each((e=>{
                    o(r ? d(e).attr("data-swiper-slide-index") : d(e).index())
                }
                ));
            else if (c > 1)
                for (let e = i; e < i + c; e += 1)
                    p(e) && o(e);
            else
                o(i);
            if (n.loadPrevNext)
                if (c > 1 || n.loadPrevNextAmount && n.loadPrevNextAmount > 1) {
                    const e = n.loadPrevNextAmount
                      , t = Math.ceil(c)
                      , s = Math.min(i + t + Math.max(e, t), a.length)
                      , r = Math.max(i - Math.max(t, e), 0);
                    for (let e = i + t; e < s; e += 1)
                        p(e) && o(e);
                    for (let e = r; e < i; e += 1)
                        p(e) && o(e)
                } else {
                    const t = e.children(`.${s.slideNextClass}`);
                    t.length > 0 && o(u(t));
                    const a = e.children(`.${s.slidePrevClass}`);
                    a.length > 0 && o(u(a))
                }
        }
        function p() {
            const e = r();
            if (!t || t.destroyed)
                return;
            const s = t.params.lazy.scrollingElement ? d(t.params.lazy.scrollingElement) : d(e)
              , a = s[0] === e
              , i = a ? e.innerWidth : s[0].offsetWidth
              , l = a ? e.innerHeight : s[0].offsetHeight
              , o = t.$el.offset()
              , {rtlTranslate: u} = t;
            let h = !1;
            u && (o.left -= t.$el[0].scrollLeft);
            const m = [[o.left, o.top], [o.left + t.width, o.top], [o.left, o.top + t.height], [o.left + t.width, o.top + t.height]];
            for (let e = 0; e < m.length; e += 1) {
                const t = m[e];
                if (t[0] >= 0 && t[0] <= i && t[1] >= 0 && t[1] <= l) {
                    if (0 === t[0] && 0 === t[1])
                        continue;
                    h = !0
                }
            }
            const f = !("touchstart" !== t.touchEvents.start || !t.support.passiveListener || !t.params.passiveListeners) && {
                passive: !0,
                capture: !1
            };
            h ? (c(),
            s.off("scroll", p, f)) : n || (n = !0,
            s.on("scroll", p, f))
        }
        a("beforeInit", (()=>{
            t.params.lazy.enabled && t.params.preloadImages && (t.params.preloadImages = !1)
        }
        )),
        a("init", (()=>{
            t.params.lazy.enabled && (t.params.lazy.checkInView ? p() : c())
        }
        )),
        a("scroll", (()=>{
            t.params.freeMode && t.params.freeMode.enabled && !t.params.freeMode.sticky && c()
        }
        )),
        a("scrollbarDragMove resize _freeModeNoMomentumRelease", (()=>{
            t.params.lazy.enabled && (t.params.lazy.checkInView ? p() : c())
        }
        )),
        a("transitionStart", (()=>{
            t.params.lazy.enabled && (t.params.lazy.loadOnTransitionStart || !t.params.lazy.loadOnTransitionStart && !l) && (t.params.lazy.checkInView ? p() : c())
        }
        )),
        a("transitionEnd", (()=>{
            t.params.lazy.enabled && !t.params.lazy.loadOnTransitionStart && (t.params.lazy.checkInView ? p() : c())
        }
        )),
        a("slideChange", (()=>{
            const {lazy: e, cssMode: s, watchSlidesProgress: a, touchReleaseOnEdges: i, resistanceRatio: r} = t.params;
            e.enabled && (s || a && (i || 0 === r)) && c()
        }
        )),
        a("destroy", (()=>{
            t.$el && t.$el.find(`.${t.params.lazy.loadingClass}`).removeClass(t.params.lazy.loadingClass)
        }
        )),
        Object.assign(t.lazy, {
            load: c,
            loadInSlide: o
        })
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: a} = e;
        function i(e, t) {
            const s = function() {
                let e, t, s;
                return (a,i)=>{
                    for (t = -1,
                    e = a.length; e - t > 1; )
                        s = e + t >> 1,
                        a[s] <= i ? t = s : e = s;
                    return e
                }
            }();
            let a, i;
            return this.x = e,
            this.y = t,
            this.lastIndex = e.length - 1,
            this.interpolate = function(e) {
                return e ? (i = s(this.x, e),
                a = i - 1,
                (e - this.x[a]) * (this.y[i] - this.y[a]) / (this.x[i] - this.x[a]) + this.y[a]) : 0
            }
            ,
            this
        }
        function r() {
            t.controller.control && t.controller.spline && (t.controller.spline = void 0,
            delete t.controller.spline)
        }
        s({
            controller: {
                control: void 0,
                inverse: !1,
                by: "slide"
            }
        }),
        t.controller = {
            control: void 0
        },
        a("beforeInit", (()=>{
            t.controller.control = t.params.controller.control
        }
        )),
        a("update", (()=>{
            r()
        }
        )),
        a("resize", (()=>{
            r()
        }
        )),
        a("observerUpdate", (()=>{
            r()
        }
        )),
        a("setTranslate", ((e,s,a)=>{
            t.controller.control && t.controller.setTranslate(s, a)
        }
        )),
        a("setTransition", ((e,s,a)=>{
            t.controller.control && t.controller.setTransition(s, a)
        }
        )),
        Object.assign(t.controller, {
            setTranslate: function(e, s) {
                const a = t.controller.control;
                let r, n;
                const l = t.constructor;
                function o(e) {
                    const s = t.rtlTranslate ? -t.translate : t.translate;
                    "slide" === t.params.controller.by && (!function(e) {
                        t.controller.spline || (t.controller.spline = t.params.loop ? new i(t.slidesGrid,e.slidesGrid) : new i(t.snapGrid,e.snapGrid))
                    }(e),
                    n = -t.controller.spline.interpolate(-s)),
                    n && "container" !== t.params.controller.by || (r = (e.maxTranslate() - e.minTranslate()) / (t.maxTranslate() - t.minTranslate()),
                    n = (s - t.minTranslate()) * r + e.minTranslate()),
                    t.params.controller.inverse && (n = e.maxTranslate() - n),
                    e.updateProgress(n),
                    e.setTranslate(n, t),
                    e.updateActiveIndex(),
                    e.updateSlidesClasses()
                }
                if (Array.isArray(a))
                    for (let e = 0; e < a.length; e += 1)
                        a[e] !== s && a[e]instanceof l && o(a[e]);
                else
                    a instanceof l && s !== a && o(a)
            },
            setTransition: function(e, s) {
                const a = t.constructor
                  , i = t.controller.control;
                let r;
                function n(s) {
                    s.setTransition(e, t),
                    0 !== e && (s.transitionStart(),
                    s.params.autoHeight && p((()=>{
                        s.updateAutoHeight()
                    }
                    )),
                    s.$wrapperEl.transitionEnd((()=>{
                        i && (s.params.loop && "slide" === t.params.controller.by && s.loopFix(),
                        s.transitionEnd())
                    }
                    )))
                }
                if (Array.isArray(i))
                    for (r = 0; r < i.length; r += 1)
                        i[r] !== s && i[r]instanceof a && n(i[r]);
                else
                    i instanceof a && s !== i && n(i)
            }
        })
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({
            a11y: {
                enabled: !0,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}",
                slideLabelMessage: "{{index}} / {{slidesLength}}",
                containerMessage: null,
                containerRoleDescriptionMessage: null,
                itemRoleDescriptionMessage: null,
                slideRole: "group",
                id: null
            }
        }),
        t.a11y = {
            clicked: !1
        };
        let i = null;
        function r(e) {
            const t = i;
            0 !== t.length && (t.html(""),
            t.html(e))
        }
        function n(e) {
            e.attr("tabIndex", "0")
        }
        function l(e) {
            e.attr("tabIndex", "-1")
        }
        function o(e, t) {
            e.attr("role", t)
        }
        function c(e, t) {
            e.attr("aria-roledescription", t)
        }
        function p(e, t) {
            e.attr("aria-label", t)
        }
        function u(e) {
            e.attr("aria-disabled", !0)
        }
        function h(e) {
            e.attr("aria-disabled", !1)
        }
        function m(e) {
            if (13 !== e.keyCode && 32 !== e.keyCode)
                return;
            const s = t.params.a11y
              , a = d(e.target);
            t.navigation && t.navigation.$nextEl && a.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(),
            t.isEnd ? r(s.lastSlideMessage) : r(s.nextSlideMessage)),
            t.navigation && t.navigation.$prevEl && a.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(),
            t.isBeginning ? r(s.firstSlideMessage) : r(s.prevSlideMessage)),
            t.pagination && a.is(U(t.params.pagination.bulletClass)) && a[0].click()
        }
        function f() {
            return t.pagination && t.pagination.bullets && t.pagination.bullets.length
        }
        function g() {
            return f() && t.params.pagination.clickable
        }
        const v = (e,t,s)=>{
            n(e),
            "BUTTON" !== e[0].tagName && (o(e, "button"),
            e.on("keydown", m)),
            p(e, s),
            function(e, t) {
                e.attr("aria-controls", t)
            }(e, t)
        }
          , w = ()=>{
            t.a11y.clicked = !0
        }
          , b = ()=>{
            requestAnimationFrame((()=>{
                requestAnimationFrame((()=>{
                    t.destroyed || (t.a11y.clicked = !1)
                }
                ))
            }
            ))
        }
          , x = e=>{
            if (t.a11y.clicked)
                return;
            const s = e.target.closest(`.${t.params.slideClass}`);
            if (!s || !t.slides.includes(s))
                return;
            const a = t.slides.indexOf(s) === t.activeIndex
              , i = t.params.watchSlidesProgress && t.visibleSlides && t.visibleSlides.includes(s);
            a || i || e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents || (t.isHorizontal() ? t.el.scrollLeft = 0 : t.el.scrollTop = 0,
            t.slideTo(t.slides.indexOf(s), 0))
        }
          , y = ()=>{
            const e = t.params.a11y;
            e.itemRoleDescriptionMessage && c(d(t.slides), e.itemRoleDescriptionMessage),
            e.slideRole && o(d(t.slides), e.slideRole);
            const s = t.params.loop ? t.slides.filter((e=>!e.classList.contains(t.params.slideDuplicateClass))).length : t.slides.length;
            e.slideLabelMessage && t.slides.each(((a,i)=>{
                const r = d(a)
                  , n = t.params.loop ? parseInt(r.attr("data-swiper-slide-index"), 10) : i;
                p(r, e.slideLabelMessage.replace(/\{\{index\}\}/, n + 1).replace(/\{\{slidesLength\}\}/, s))
            }
            ))
        }
          , E = ()=>{
            const e = t.params.a11y;
            t.$el.append(i);
            const s = t.$el;
            e.containerRoleDescriptionMessage && c(s, e.containerRoleDescriptionMessage),
            e.containerMessage && p(s, e.containerMessage);
            const a = t.$wrapperEl
              , r = e.id || a.attr("id") || `swiper-wrapper-${n = 16,
            void 0 === n && (n = 16),
            "x".repeat(n).replace(/x/g, (()=>Math.round(16 * Math.random()).toString(16)))}`;
            var n;
            const l = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
            var o;
            let d, u;
            o = r,
            a.attr("id", o),
            function(e, t) {
                e.attr("aria-live", t)
            }(a, l),
            y(),
            t.navigation && t.navigation.$nextEl && (d = t.navigation.$nextEl),
            t.navigation && t.navigation.$prevEl && (u = t.navigation.$prevEl),
            d && d.length && v(d, r, e.nextSlideMessage),
            u && u.length && v(u, r, e.prevSlideMessage),
            g() && t.pagination.$el.on("keydown", U(t.params.pagination.bulletClass), m),
            t.$el.on("focus", x, !0),
            t.$el.on("pointerdown", w, !0),
            t.$el.on("pointerup", b, !0)
        }
        ;
        a("beforeInit", (()=>{
            i = d(`<span class="${t.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)
        }
        )),
        a("afterInit", (()=>{
            t.params.a11y.enabled && E()
        }
        )),
        a("slidesLengthChange snapGridLengthChange slidesGridLengthChange", (()=>{
            t.params.a11y.enabled && y()
        }
        )),
        a("fromEdge toEdge afterInit lock unlock", (()=>{
            t.params.a11y.enabled && function() {
                if (t.params.loop || t.params.rewind || !t.navigation)
                    return;
                const {$nextEl: e, $prevEl: s} = t.navigation;
                s && s.length > 0 && (t.isBeginning ? (u(s),
                l(s)) : (h(s),
                n(s))),
                e && e.length > 0 && (t.isEnd ? (u(e),
                l(e)) : (h(e),
                n(e)))
            }()
        }
        )),
        a("paginationUpdate", (()=>{
            t.params.a11y.enabled && function() {
                const e = t.params.a11y;
                f() && t.pagination.bullets.each((s=>{
                    const a = d(s);
                    t.params.pagination.clickable && (n(a),
                    t.params.pagination.renderBullet || (o(a, "button"),
                    p(a, e.paginationBulletMessage.replace(/\{\{index\}\}/, a.index() + 1)))),
                    a.is(`.${t.params.pagination.bulletActiveClass}`) ? a.attr("aria-current", "true") : a.removeAttr("aria-current")
                }
                ))
            }()
        }
        )),
        a("destroy", (()=>{
            t.params.a11y.enabled && function() {
                let e, s;
                i && i.length > 0 && i.remove(),
                t.navigation && t.navigation.$nextEl && (e = t.navigation.$nextEl),
                t.navigation && t.navigation.$prevEl && (s = t.navigation.$prevEl),
                e && e.off("keydown", m),
                s && s.off("keydown", m),
                g() && t.pagination.$el.off("keydown", U(t.params.pagination.bulletClass), m),
                t.$el.off("focus", x, !0),
                t.$el.off("pointerdown", w, !0),
                t.$el.off("pointerup", b, !0)
            }()
        }
        ))
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({
            history: {
                enabled: !1,
                root: "",
                replaceState: !1,
                key: "slides",
                keepQuery: !1
            }
        });
        let i = !1
          , n = {};
        const l = e=>e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
          , o = e=>{
            const t = r();
            let s;
            s = e ? new URL(e) : t.location;
            const a = s.pathname.slice(1).split("/").filter((e=>"" !== e))
              , i = a.length;
            return {
                key: a[i - 2],
                value: a[i - 1]
            }
        }
          , d = (e,s)=>{
            const a = r();
            if (!i || !t.params.history.enabled)
                return;
            let n;
            n = t.params.url ? new URL(t.params.url) : a.location;
            const o = t.slides.eq(s);
            let d = l(o.attr("data-history"));
            if (t.params.history.root.length > 0) {
                let s = t.params.history.root;
                "/" === s[s.length - 1] && (s = s.slice(0, s.length - 1)),
                d = `${s}/${e}/${d}`
            } else
                n.pathname.includes(e) || (d = `${e}/${d}`);
            t.params.history.keepQuery && (d += n.search);
            const c = a.history.state;
            c && c.value === d || (t.params.history.replaceState ? a.history.replaceState({
                value: d
            }, null, d) : a.history.pushState({
                value: d
            }, null, d))
        }
          , c = (e,s,a)=>{
            if (s)
                for (let i = 0, r = t.slides.length; i < r; i += 1) {
                    const r = t.slides.eq(i);
                    if (l(r.attr("data-history")) === s && !r.hasClass(t.params.slideDuplicateClass)) {
                        const s = r.index();
                        t.slideTo(s, e, a)
                    }
                }
            else
                t.slideTo(0, e, a)
        }
          , p = ()=>{
            n = o(t.params.url),
            c(t.params.speed, n.value, !1)
        }
        ;
        a("init", (()=>{
            t.params.history.enabled && (()=>{
                const e = r();
                if (t.params.history) {
                    if (!e.history || !e.history.pushState)
                        return t.params.history.enabled = !1,
                        void (t.params.hashNavigation.enabled = !0);
                    i = !0,
                    n = o(t.params.url),
                    (n.key || n.value) && (c(0, n.value, t.params.runCallbacksOnInit),
                    t.params.history.replaceState || e.addEventListener("popstate", p))
                }
            }
            )()
        }
        )),
        a("destroy", (()=>{
            t.params.history.enabled && (()=>{
                const e = r();
                t.params.history.replaceState || e.removeEventListener("popstate", p)
            }
            )()
        }
        )),
        a("transitionEnd _freeModeNoMomentumRelease", (()=>{
            i && d(t.params.history.key, t.activeIndex)
        }
        )),
        a("slideChange", (()=>{
            i && t.params.cssMode && d(t.params.history.key, t.activeIndex)
        }
        ))
    }
    , function(e) {
        let {swiper: t, extendParams: s, emit: i, on: n} = e
          , l = !1;
        const o = a()
          , c = r();
        s({
            hashNavigation: {
                enabled: !1,
                replaceState: !1,
                watchState: !1
            }
        });
        const p = ()=>{
            i("hashChange");
            const e = o.location.hash.replace("#", "");
            if (e !== t.slides.eq(t.activeIndex).attr("data-hash")) {
                const s = t.$wrapperEl.children(`.${t.params.slideClass}[data-hash="${e}"]`).index();
                if (void 0 === s)
                    return;
                t.slideTo(s)
            }
        }
          , u = ()=>{
            if (l && t.params.hashNavigation.enabled)
                if (t.params.hashNavigation.replaceState && c.history && c.history.replaceState)
                    c.history.replaceState(null, null, `#${t.slides.eq(t.activeIndex).attr("data-hash")}` || ""),
                    i("hashSet");
                else {
                    const e = t.slides.eq(t.activeIndex)
                      , s = e.attr("data-hash") || e.attr("data-history");
                    o.location.hash = s || "",
                    i("hashSet")
                }
        }
        ;
        n("init", (()=>{
            t.params.hashNavigation.enabled && (()=>{
                if (!t.params.hashNavigation.enabled || t.params.history && t.params.history.enabled)
                    return;
                l = !0;
                const e = o.location.hash.replace("#", "");
                if (e) {
                    const s = 0;
                    for (let a = 0, i = t.slides.length; a < i; a += 1) {
                        const i = t.slides.eq(a);
                        if ((i.attr("data-hash") || i.attr("data-history")) === e && !i.hasClass(t.params.slideDuplicateClass)) {
                            const e = i.index();
                            t.slideTo(e, s, t.params.runCallbacksOnInit, !0)
                        }
                    }
                }
                t.params.hashNavigation.watchState && d(c).on("hashchange", p)
            }
            )()
        }
        )),
        n("destroy", (()=>{
            t.params.hashNavigation.enabled && t.params.hashNavigation.watchState && d(c).off("hashchange", p)
        }
        )),
        n("transitionEnd _freeModeNoMomentumRelease", (()=>{
            l && u()
        }
        )),
        n("slideChange", (()=>{
            l && t.params.cssMode && u()
        }
        ))
    }
    , function(e) {
        let t, {swiper: s, extendParams: i, on: r, emit: n} = e;
        function l() {
            if (!s.size)
                return s.autoplay.running = !1,
                void (s.autoplay.paused = !1);
            const e = s.slides.eq(s.activeIndex);
            let a = s.params.autoplay.delay;
            e.attr("data-swiper-autoplay") && (a = e.attr("data-swiper-autoplay") || s.params.autoplay.delay),
            clearTimeout(t),
            t = p((()=>{
                let e;
                s.params.autoplay.reverseDirection ? s.params.loop ? (s.loopFix(),
                e = s.slidePrev(s.params.speed, !0, !0),
                n("autoplay")) : s.isBeginning ? s.params.autoplay.stopOnLastSlide ? d() : (e = s.slideTo(s.slides.length - 1, s.params.speed, !0, !0),
                n("autoplay")) : (e = s.slidePrev(s.params.speed, !0, !0),
                n("autoplay")) : s.params.loop ? (s.loopFix(),
                e = s.slideNext(s.params.speed, !0, !0),
                n("autoplay")) : s.isEnd ? s.params.autoplay.stopOnLastSlide ? d() : (e = s.slideTo(0, s.params.speed, !0, !0),
                n("autoplay")) : (e = s.slideNext(s.params.speed, !0, !0),
                n("autoplay")),
                (s.params.cssMode && s.autoplay.running || !1 === e) && l()
            }
            ), a)
        }
        function o() {
            return void 0 === t && (!s.autoplay.running && (s.autoplay.running = !0,
            n("autoplayStart"),
            l(),
            !0))
        }
        function d() {
            return !!s.autoplay.running && (void 0 !== t && (t && (clearTimeout(t),
            t = void 0),
            s.autoplay.running = !1,
            n("autoplayStop"),
            !0))
        }
        function c(e) {
            s.autoplay.running && (s.autoplay.paused || (t && clearTimeout(t),
            s.autoplay.paused = !0,
            0 !== e && s.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach((e=>{
                s.$wrapperEl[0].addEventListener(e, h)
            }
            )) : (s.autoplay.paused = !1,
            l())))
        }
        function u() {
            const e = a();
            "hidden" === e.visibilityState && s.autoplay.running && c(),
            "visible" === e.visibilityState && s.autoplay.paused && (l(),
            s.autoplay.paused = !1)
        }
        function h(e) {
            s && !s.destroyed && s.$wrapperEl && e.target === s.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach((e=>{
                s.$wrapperEl[0].removeEventListener(e, h)
            }
            )),
            s.autoplay.paused = !1,
            s.autoplay.running ? l() : d())
        }
        function m() {
            s.params.autoplay.disableOnInteraction ? d() : (n("autoplayPause"),
            c()),
            ["transitionend", "webkitTransitionEnd"].forEach((e=>{
                s.$wrapperEl[0].removeEventListener(e, h)
            }
            ))
        }
        function f() {
            s.params.autoplay.disableOnInteraction || (s.autoplay.paused = !1,
            n("autoplayResume"),
            l())
        }
        s.autoplay = {
            running: !1,
            paused: !1
        },
        i({
            autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1,
                pauseOnMouseEnter: !1
            }
        }),
        r("init", (()=>{
            if (s.params.autoplay.enabled) {
                o();
                a().addEventListener("visibilitychange", u),
                s.params.autoplay.pauseOnMouseEnter && (s.$el.on("mouseenter", m),
                s.$el.on("mouseleave", f))
            }
        }
        )),
        r("beforeTransitionStart", ((e,t,a)=>{
            s.autoplay.running && (a || !s.params.autoplay.disableOnInteraction ? s.autoplay.pause(t) : d())
        }
        )),
        r("sliderFirstMove", (()=>{
            s.autoplay.running && (s.params.autoplay.disableOnInteraction ? d() : c())
        }
        )),
        r("touchEnd", (()=>{
            s.params.cssMode && s.autoplay.paused && !s.params.autoplay.disableOnInteraction && l()
        }
        )),
        r("destroy", (()=>{
            s.$el.off("mouseenter", m),
            s.$el.off("mouseleave", f),
            s.autoplay.running && d();
            a().removeEventListener("visibilitychange", u)
        }
        )),
        Object.assign(s.autoplay, {
            pause: c,
            run: l,
            start: o,
            stop: d
        })
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({
            thumbs: {
                swiper: null,
                multipleActiveThumbs: !0,
                autoScrollOffset: 0,
                slideThumbActiveClass: "swiper-slide-thumb-active",
                thumbsContainerClass: "swiper-thumbs"
            }
        });
        let i = !1
          , r = !1;
        function n() {
            const e = t.thumbs.swiper;
            if (!e || e.destroyed)
                return;
            const s = e.clickedIndex
              , a = e.clickedSlide;
            if (a && d(a).hasClass(t.params.thumbs.slideThumbActiveClass))
                return;
            if (null == s)
                return;
            let i;
            if (i = e.params.loop ? parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"), 10) : s,
            t.params.loop) {
                let e = t.activeIndex;
                t.slides.eq(e).hasClass(t.params.slideDuplicateClass) && (t.loopFix(),
                t._clientLeft = t.$wrapperEl[0].clientLeft,
                e = t.activeIndex);
                const s = t.slides.eq(e).prevAll(`[data-swiper-slide-index="${i}"]`).eq(0).index()
                  , a = t.slides.eq(e).nextAll(`[data-swiper-slide-index="${i}"]`).eq(0).index();
                i = void 0 === s ? a : void 0 === a ? s : a - e < e - s ? a : s
            }
            t.slideTo(i)
        }
        function l() {
            const {thumbs: e} = t.params;
            if (i)
                return !1;
            i = !0;
            const s = t.constructor;
            if (e.swiper instanceof s)
                t.thumbs.swiper = e.swiper,
                Object.assign(t.thumbs.swiper.originalParams, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }),
                Object.assign(t.thumbs.swiper.params, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                });
            else if (m(e.swiper)) {
                const a = Object.assign({}, e.swiper);
                Object.assign(a, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }),
                t.thumbs.swiper = new s(a),
                r = !0
            }
            return t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass),
            t.thumbs.swiper.on("tap", n),
            !0
        }
        function o(e) {
            const s = t.thumbs.swiper;
            if (!s || s.destroyed)
                return;
            const a = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView;
            let i = 1;
            const r = t.params.thumbs.slideThumbActiveClass;
            if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (i = t.params.slidesPerView),
            t.params.thumbs.multipleActiveThumbs || (i = 1),
            i = Math.floor(i),
            s.slides.removeClass(r),
            s.params.loop || s.params.virtual && s.params.virtual.enabled)
                for (let e = 0; e < i; e += 1)
                    s.$wrapperEl.children(`[data-swiper-slide-index="${t.realIndex + e}"]`).addClass(r);
            else
                for (let e = 0; e < i; e += 1)
                    s.slides.eq(t.realIndex + e).addClass(r);
            const n = t.params.thumbs.autoScrollOffset
              , l = n && !s.params.loop;
            if (t.realIndex !== s.realIndex || l) {
                let i, r, o = s.activeIndex;
                if (s.params.loop) {
                    s.slides.eq(o).hasClass(s.params.slideDuplicateClass) && (s.loopFix(),
                    s._clientLeft = s.$wrapperEl[0].clientLeft,
                    o = s.activeIndex);
                    const e = s.slides.eq(o).prevAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index()
                      , a = s.slides.eq(o).nextAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index();
                    i = void 0 === e ? a : void 0 === a ? e : a - o == o - e ? s.params.slidesPerGroup > 1 ? a : o : a - o < o - e ? a : e,
                    r = t.activeIndex > t.previousIndex ? "next" : "prev"
                } else
                    i = t.realIndex,
                    r = i > t.previousIndex ? "next" : "prev";
                l && (i += "next" === r ? n : -1 * n),
                s.visibleSlidesIndexes && s.visibleSlidesIndexes.indexOf(i) < 0 && (s.params.centeredSlides ? i = i > o ? i - Math.floor(a / 2) + 1 : i + Math.floor(a / 2) - 1 : i > o && s.params.slidesPerGroup,
                s.slideTo(i, e ? 0 : void 0))
            }
        }
        t.thumbs = {
            swiper: null
        },
        a("beforeInit", (()=>{
            const {thumbs: e} = t.params;
            e && e.swiper && (l(),
            o(!0))
        }
        )),
        a("slideChange update resize observerUpdate", (()=>{
            o()
        }
        )),
        a("setTransition", ((e,s)=>{
            const a = t.thumbs.swiper;
            a && !a.destroyed && a.setTransition(s)
        }
        )),
        a("beforeDestroy", (()=>{
            const e = t.thumbs.swiper;
            e && !e.destroyed && r && e.destroy()
        }
        )),
        Object.assign(t.thumbs, {
            init: l,
            update: o
        })
    }
    , function(e) {
        let {swiper: t, extendParams: s, emit: a, once: i} = e;
        s({
            freeMode: {
                enabled: !1,
                momentum: !0,
                momentumRatio: 1,
                momentumBounce: !0,
                momentumBounceRatio: 1,
                momentumVelocityRatio: 1,
                sticky: !1,
                minimumVelocity: .02
            }
        }),
        Object.assign(t, {
            freeMode: {
                onTouchStart: function() {
                    const e = t.getTranslate();
                    t.setTranslate(e),
                    t.setTransition(0),
                    t.touchEventsData.velocities.length = 0,
                    t.freeMode.onTouchEnd({
                        currentPos: t.rtl ? t.translate : -t.translate
                    })
                },
                onTouchMove: function() {
                    const {touchEventsData: e, touches: s} = t;
                    0 === e.velocities.length && e.velocities.push({
                        position: s[t.isHorizontal() ? "startX" : "startY"],
                        time: e.touchStartTime
                    }),
                    e.velocities.push({
                        position: s[t.isHorizontal() ? "currentX" : "currentY"],
                        time: u()
                    })
                },
                onTouchEnd: function(e) {
                    let {currentPos: s} = e;
                    const {params: r, $wrapperEl: n, rtlTranslate: l, snapGrid: o, touchEventsData: d} = t
                      , c = u() - d.touchStartTime;
                    if (s < -t.minTranslate())
                        t.slideTo(t.activeIndex);
                    else if (s > -t.maxTranslate())
                        t.slides.length < o.length ? t.slideTo(o.length - 1) : t.slideTo(t.slides.length - 1);
                    else {
                        if (r.freeMode.momentum) {
                            if (d.velocities.length > 1) {
                                const e = d.velocities.pop()
                                  , s = d.velocities.pop()
                                  , a = e.position - s.position
                                  , i = e.time - s.time;
                                t.velocity = a / i,
                                t.velocity /= 2,
                                Math.abs(t.velocity) < r.freeMode.minimumVelocity && (t.velocity = 0),
                                (i > 150 || u() - e.time > 300) && (t.velocity = 0)
                            } else
                                t.velocity = 0;
                            t.velocity *= r.freeMode.momentumVelocityRatio,
                            d.velocities.length = 0;
                            let e = 1e3 * r.freeMode.momentumRatio;
                            const s = t.velocity * e;
                            let c = t.translate + s;
                            l && (c = -c);
                            let p, h = !1;
                            const m = 20 * Math.abs(t.velocity) * r.freeMode.momentumBounceRatio;
                            let f;
                            if (c < t.maxTranslate())
                                r.freeMode.momentumBounce ? (c + t.maxTranslate() < -m && (c = t.maxTranslate() - m),
                                p = t.maxTranslate(),
                                h = !0,
                                d.allowMomentumBounce = !0) : c = t.maxTranslate(),
                                r.loop && r.centeredSlides && (f = !0);
                            else if (c > t.minTranslate())
                                r.freeMode.momentumBounce ? (c - t.minTranslate() > m && (c = t.minTranslate() + m),
                                p = t.minTranslate(),
                                h = !0,
                                d.allowMomentumBounce = !0) : c = t.minTranslate(),
                                r.loop && r.centeredSlides && (f = !0);
                            else if (r.freeMode.sticky) {
                                let e;
                                for (let t = 0; t < o.length; t += 1)
                                    if (o[t] > -c) {
                                        e = t;
                                        break
                                    }
                                c = Math.abs(o[e] - c) < Math.abs(o[e - 1] - c) || "next" === t.swipeDirection ? o[e] : o[e - 1],
                                c = -c
                            }
                            if (f && i("transitionEnd", (()=>{
                                t.loopFix()
                            }
                            )),
                            0 !== t.velocity) {
                                if (e = l ? Math.abs((-c - t.translate) / t.velocity) : Math.abs((c - t.translate) / t.velocity),
                                r.freeMode.sticky) {
                                    const s = Math.abs((l ? -c : c) - t.translate)
                                      , a = t.slidesSizesGrid[t.activeIndex];
                                    e = s < a ? r.speed : s < 2 * a ? 1.5 * r.speed : 2.5 * r.speed
                                }
                            } else if (r.freeMode.sticky)
                                return void t.slideToClosest();
                            r.freeMode.momentumBounce && h ? (t.updateProgress(p),
                            t.setTransition(e),
                            t.setTranslate(c),
                            t.transitionStart(!0, t.swipeDirection),
                            t.animating = !0,
                            n.transitionEnd((()=>{
                                t && !t.destroyed && d.allowMomentumBounce && (a("momentumBounce"),
                                t.setTransition(r.speed),
                                setTimeout((()=>{
                                    t.setTranslate(p),
                                    n.transitionEnd((()=>{
                                        t && !t.destroyed && t.transitionEnd()
                                    }
                                    ))
                                }
                                ), 0))
                            }
                            ))) : t.velocity ? (a("_freeModeNoMomentumRelease"),
                            t.updateProgress(c),
                            t.setTransition(e),
                            t.setTranslate(c),
                            t.transitionStart(!0, t.swipeDirection),
                            t.animating || (t.animating = !0,
                            n.transitionEnd((()=>{
                                t && !t.destroyed && t.transitionEnd()
                            }
                            )))) : t.updateProgress(c),
                            t.updateActiveIndex(),
                            t.updateSlidesClasses()
                        } else {
                            if (r.freeMode.sticky)
                                return void t.slideToClosest();
                            r.freeMode && a("_freeModeNoMomentumRelease")
                        }
                        (!r.freeMode.momentum || c >= r.longSwipesMs) && (t.updateProgress(),
                        t.updateActiveIndex(),
                        t.updateSlidesClasses())
                    }
                }
            }
        })
    }
    , function(e) {
        let t, s, a, {swiper: i, extendParams: r} = e;
        r({
            grid: {
                rows: 1,
                fill: "column"
            }
        }),
        i.grid = {
            initSlides: e=>{
                const {slidesPerView: r} = i.params
                  , {rows: n, fill: l} = i.params.grid;
                s = t / n,
                a = Math.floor(e / n),
                t = Math.floor(e / n) === e / n ? e : Math.ceil(e / n) * n,
                "auto" !== r && "row" === l && (t = Math.max(t, r * n))
            }
            ,
            updateSlide: (e,r,n,l)=>{
                const {slidesPerGroup: o, spaceBetween: d} = i.params
                  , {rows: c, fill: p} = i.params.grid;
                let u, h, m;
                if ("row" === p && o > 1) {
                    const s = Math.floor(e / (o * c))
                      , a = e - c * o * s
                      , i = 0 === s ? o : Math.min(Math.ceil((n - s * c * o) / c), o);
                    m = Math.floor(a / i),
                    h = a - m * i + s * o,
                    u = h + m * t / c,
                    r.css({
                        "-webkit-order": u,
                        order: u
                    })
                } else
                    "column" === p ? (h = Math.floor(e / c),
                    m = e - h * c,
                    (h > a || h === a && m === c - 1) && (m += 1,
                    m >= c && (m = 0,
                    h += 1))) : (m = Math.floor(e / s),
                    h = e - m * s);
                r.css(l("margin-top"), 0 !== m ? d && `${d}px` : "")
            }
            ,
            updateWrapperSize: (e,s,a)=>{
                const {spaceBetween: r, centeredSlides: n, roundLengths: l} = i.params
                  , {rows: o} = i.params.grid;
                if (i.virtualSize = (e + r) * t,
                i.virtualSize = Math.ceil(i.virtualSize / o) - r,
                i.$wrapperEl.css({
                    [a("width")]: `${i.virtualSize + r}px`
                }),
                n) {
                    s.splice(0, s.length);
                    const e = [];
                    for (let t = 0; t < s.length; t += 1) {
                        let a = s[t];
                        l && (a = Math.floor(a)),
                        s[t] < i.virtualSize + s[0] && e.push(a)
                    }
                    s.push(...e)
                }
            }
        }
    }
    , function(e) {
        let {swiper: t} = e;
        Object.assign(t, {
            appendSlide: K.bind(t),
            prependSlide: Z.bind(t),
            addSlide: Q.bind(t),
            removeSlide: J.bind(t),
            removeAllSlides: ee.bind(t)
        })
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({
            fadeEffect: {
                crossFade: !1,
                transformEl: null
            }
        }),
        te({
            effect: "fade",
            swiper: t,
            on: a,
            setTranslate: ()=>{
                const {slides: e} = t
                  , s = t.params.fadeEffect;
                for (let a = 0; a < e.length; a += 1) {
                    const e = t.slides.eq(a);
                    let i = -e[0].swiperSlideOffset;
                    t.params.virtualTranslate || (i -= t.translate);
                    let r = 0;
                    t.isHorizontal() || (r = i,
                    i = 0);
                    const n = t.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(e[0].progress), 0) : 1 + Math.min(Math.max(e[0].progress, -1), 0);
                    se(s, e).css({
                        opacity: n
                    }).transform(`translate3d(${i}px, ${r}px, 0px)`)
                }
            }
            ,
            setTransition: e=>{
                const {transformEl: s} = t.params.fadeEffect;
                (s ? t.slides.find(s) : t.slides).transition(e),
                ae({
                    swiper: t,
                    duration: e,
                    transformEl: s,
                    allSlides: !0
                })
            }
            ,
            overwriteParams: ()=>({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !t.params.cssMode
            })
        })
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({
            cubeEffect: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: .94
            }
        });
        const i = (e,t,s)=>{
            let a = s ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top")
              , i = s ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
            0 === a.length && (a = d(`<div class="swiper-slide-shadow-${s ? "left" : "top"}"></div>`),
            e.append(a)),
            0 === i.length && (i = d(`<div class="swiper-slide-shadow-${s ? "right" : "bottom"}"></div>`),
            e.append(i)),
            a.length && (a[0].style.opacity = Math.max(-t, 0)),
            i.length && (i[0].style.opacity = Math.max(t, 0))
        }
        ;
        te({
            effect: "cube",
            swiper: t,
            on: a,
            setTranslate: ()=>{
                const {$el: e, $wrapperEl: s, slides: a, width: r, height: n, rtlTranslate: l, size: o, browser: c} = t
                  , p = t.params.cubeEffect
                  , u = t.isHorizontal()
                  , h = t.virtual && t.params.virtual.enabled;
                let m, f = 0;
                p.shadow && (u ? (m = s.find(".swiper-cube-shadow"),
                0 === m.length && (m = d('<div class="swiper-cube-shadow"></div>'),
                s.append(m)),
                m.css({
                    height: `${r}px`
                })) : (m = e.find(".swiper-cube-shadow"),
                0 === m.length && (m = d('<div class="swiper-cube-shadow"></div>'),
                e.append(m))));
                for (let e = 0; e < a.length; e += 1) {
                    const t = a.eq(e);
                    let s = e;
                    h && (s = parseInt(t.attr("data-swiper-slide-index"), 10));
                    let r = 90 * s
                      , n = Math.floor(r / 360);
                    l && (r = -r,
                    n = Math.floor(-r / 360));
                    const d = Math.max(Math.min(t[0].progress, 1), -1);
                    let c = 0
                      , m = 0
                      , g = 0;
                    s % 4 == 0 ? (c = 4 * -n * o,
                    g = 0) : (s - 1) % 4 == 0 ? (c = 0,
                    g = 4 * -n * o) : (s - 2) % 4 == 0 ? (c = o + 4 * n * o,
                    g = o) : (s - 3) % 4 == 0 && (c = -o,
                    g = 3 * o + 4 * o * n),
                    l && (c = -c),
                    u || (m = c,
                    c = 0);
                    const v = `rotateX(${u ? 0 : -r}deg) rotateY(${u ? r : 0}deg) translate3d(${c}px, ${m}px, ${g}px)`;
                    d <= 1 && d > -1 && (f = 90 * s + 90 * d,
                    l && (f = 90 * -s - 90 * d)),
                    t.transform(v),
                    p.slideShadows && i(t, d, u)
                }
                if (s.css({
                    "-webkit-transform-origin": `50% 50% -${o / 2}px`,
                    "transform-origin": `50% 50% -${o / 2}px`
                }),
                p.shadow)
                    if (u)
                        m.transform(`translate3d(0px, ${r / 2 + p.shadowOffset}px, ${-r / 2}px) rotateX(90deg) rotateZ(0deg) scale(${p.shadowScale})`);
                    else {
                        const e = Math.abs(f) - 90 * Math.floor(Math.abs(f) / 90)
                          , t = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math.cos(2 * e * Math.PI / 360) / 2)
                          , s = p.shadowScale
                          , a = p.shadowScale / t
                          , i = p.shadowOffset;
                        m.transform(`scale3d(${s}, 1, ${a}) translate3d(0px, ${n / 2 + i}px, ${-n / 2 / a}px) rotateX(-90deg)`)
                    }
                const g = c.isSafari || c.isWebView ? -o / 2 : 0;
                s.transform(`translate3d(0px,0,${g}px) rotateX(${t.isHorizontal() ? 0 : f}deg) rotateY(${t.isHorizontal() ? -f : 0}deg)`),
                s[0].style.setProperty("--swiper-cube-translate-z", `${g}px`)
            }
            ,
            setTransition: e=>{
                const {$el: s, slides: a} = t;
                a.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
                t.params.cubeEffect.shadow && !t.isHorizontal() && s.find(".swiper-cube-shadow").transition(e)
            }
            ,
            recreateShadows: ()=>{
                const e = t.isHorizontal();
                t.slides.each((t=>{
                    const s = Math.max(Math.min(t.progress, 1), -1);
                    i(d(t), s, e)
                }
                ))
            }
            ,
            getEffectParams: ()=>t.params.cubeEffect,
            perspective: ()=>!0,
            overwriteParams: ()=>({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: !1,
                virtualTranslate: !0
            })
        })
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({
            flipEffect: {
                slideShadows: !0,
                limitRotation: !0,
                transformEl: null
            }
        });
        const i = (e,s,a)=>{
            let i = t.isHorizontal() ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top")
              , r = t.isHorizontal() ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
            0 === i.length && (i = ie(a, e, t.isHorizontal() ? "left" : "top")),
            0 === r.length && (r = ie(a, e, t.isHorizontal() ? "right" : "bottom")),
            i.length && (i[0].style.opacity = Math.max(-s, 0)),
            r.length && (r[0].style.opacity = Math.max(s, 0))
        }
        ;
        te({
            effect: "flip",
            swiper: t,
            on: a,
            setTranslate: ()=>{
                const {slides: e, rtlTranslate: s} = t
                  , a = t.params.flipEffect;
                for (let r = 0; r < e.length; r += 1) {
                    const n = e.eq(r);
                    let l = n[0].progress;
                    t.params.flipEffect.limitRotation && (l = Math.max(Math.min(n[0].progress, 1), -1));
                    const o = n[0].swiperSlideOffset;
                    let d = -180 * l
                      , c = 0
                      , p = t.params.cssMode ? -o - t.translate : -o
                      , u = 0;
                    t.isHorizontal() ? s && (d = -d) : (u = p,
                    p = 0,
                    c = -d,
                    d = 0),
                    n[0].style.zIndex = -Math.abs(Math.round(l)) + e.length,
                    a.slideShadows && i(n, l, a);
                    const h = `translate3d(${p}px, ${u}px, 0px) rotateX(${c}deg) rotateY(${d}deg)`;
                    se(a, n).transform(h)
                }
            }
            ,
            setTransition: e=>{
                const {transformEl: s} = t.params.flipEffect;
                (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
                ae({
                    swiper: t,
                    duration: e,
                    transformEl: s
                })
            }
            ,
            recreateShadows: ()=>{
                const e = t.params.flipEffect;
                t.slides.each((s=>{
                    const a = d(s);
                    let r = a[0].progress;
                    t.params.flipEffect.limitRotation && (r = Math.max(Math.min(s.progress, 1), -1)),
                    i(a, r, e)
                }
                ))
            }
            ,
            getEffectParams: ()=>t.params.flipEffect,
            perspective: ()=>!0,
            overwriteParams: ()=>({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !t.params.cssMode
            })
        })
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                scale: 1,
                modifier: 1,
                slideShadows: !0,
                transformEl: null
            }
        }),
        te({
            effect: "coverflow",
            swiper: t,
            on: a,
            setTranslate: ()=>{
                const {width: e, height: s, slides: a, slidesSizesGrid: i} = t
                  , r = t.params.coverflowEffect
                  , n = t.isHorizontal()
                  , l = t.translate
                  , o = n ? e / 2 - l : s / 2 - l
                  , d = n ? r.rotate : -r.rotate
                  , c = r.depth;
                for (let e = 0, t = a.length; e < t; e += 1) {
                    const t = a.eq(e)
                      , s = i[e]
                      , l = (o - t[0].swiperSlideOffset - s / 2) / s
                      , p = "function" == typeof r.modifier ? r.modifier(l) : l * r.modifier;
                    let u = n ? d * p : 0
                      , h = n ? 0 : d * p
                      , m = -c * Math.abs(p)
                      , f = r.stretch;
                    "string" == typeof f && -1 !== f.indexOf("%") && (f = parseFloat(r.stretch) / 100 * s);
                    let g = n ? 0 : f * p
                      , v = n ? f * p : 0
                      , w = 1 - (1 - r.scale) * Math.abs(p);
                    Math.abs(v) < .001 && (v = 0),
                    Math.abs(g) < .001 && (g = 0),
                    Math.abs(m) < .001 && (m = 0),
                    Math.abs(u) < .001 && (u = 0),
                    Math.abs(h) < .001 && (h = 0),
                    Math.abs(w) < .001 && (w = 0);
                    const b = `translate3d(${v}px,${g}px,${m}px)  rotateX(${h}deg) rotateY(${u}deg) scale(${w})`;
                    if (se(r, t).transform(b),
                    t[0].style.zIndex = 1 - Math.abs(Math.round(p)),
                    r.slideShadows) {
                        let e = n ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top")
                          , s = n ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                        0 === e.length && (e = ie(r, t, n ? "left" : "top")),
                        0 === s.length && (s = ie(r, t, n ? "right" : "bottom")),
                        e.length && (e[0].style.opacity = p > 0 ? p : 0),
                        s.length && (s[0].style.opacity = -p > 0 ? -p : 0)
                    }
                }
            }
            ,
            setTransition: e=>{
                const {transformEl: s} = t.params.coverflowEffect;
                (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
            }
            ,
            perspective: ()=>!0,
            overwriteParams: ()=>({
                watchSlidesProgress: !0
            })
        })
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({
            creativeEffect: {
                transformEl: null,
                limitProgress: 1,
                shadowPerProgress: !1,
                progressMultiplier: 1,
                perspective: !0,
                prev: {
                    translate: [0, 0, 0],
                    rotate: [0, 0, 0],
                    opacity: 1,
                    scale: 1
                },
                next: {
                    translate: [0, 0, 0],
                    rotate: [0, 0, 0],
                    opacity: 1,
                    scale: 1
                }
            }
        });
        const i = e=>"string" == typeof e ? e : `${e}px`;
        te({
            effect: "creative",
            swiper: t,
            on: a,
            setTranslate: ()=>{
                const {slides: e, $wrapperEl: s, slidesSizesGrid: a} = t
                  , r = t.params.creativeEffect
                  , {progressMultiplier: n} = r
                  , l = t.params.centeredSlides;
                if (l) {
                    const e = a[0] / 2 - t.params.slidesOffsetBefore || 0;
                    s.transform(`translateX(calc(50% - ${e}px))`)
                }
                for (let s = 0; s < e.length; s += 1) {
                    const a = e.eq(s)
                      , o = a[0].progress
                      , d = Math.min(Math.max(a[0].progress, -r.limitProgress), r.limitProgress);
                    let c = d;
                    l || (c = Math.min(Math.max(a[0].originalProgress, -r.limitProgress), r.limitProgress));
                    const p = a[0].swiperSlideOffset
                      , u = [t.params.cssMode ? -p - t.translate : -p, 0, 0]
                      , h = [0, 0, 0];
                    let m = !1;
                    t.isHorizontal() || (u[1] = u[0],
                    u[0] = 0);
                    let f = {
                        translate: [0, 0, 0],
                        rotate: [0, 0, 0],
                        scale: 1,
                        opacity: 1
                    };
                    d < 0 ? (f = r.next,
                    m = !0) : d > 0 && (f = r.prev,
                    m = !0),
                    u.forEach(((e,t)=>{
                        u[t] = `calc(${e}px + (${i(f.translate[t])} * ${Math.abs(d * n)}))`
                    }
                    )),
                    h.forEach(((e,t)=>{
                        h[t] = f.rotate[t] * Math.abs(d * n)
                    }
                    )),
                    a[0].style.zIndex = -Math.abs(Math.round(o)) + e.length;
                    const g = u.join(", ")
                      , v = `rotateX(${h[0]}deg) rotateY(${h[1]}deg) rotateZ(${h[2]}deg)`
                      , w = c < 0 ? `scale(${1 + (1 - f.scale) * c * n})` : `scale(${1 - (1 - f.scale) * c * n})`
                      , b = c < 0 ? 1 + (1 - f.opacity) * c * n : 1 - (1 - f.opacity) * c * n
                      , x = `translate3d(${g}) ${v} ${w}`;
                    if (m && f.shadow || !m) {
                        let e = a.children(".swiper-slide-shadow");
                        if (0 === e.length && f.shadow && (e = ie(r, a)),
                        e.length) {
                            const t = r.shadowPerProgress ? d * (1 / r.limitProgress) : d;
                            e[0].style.opacity = Math.min(Math.max(Math.abs(t), 0), 1)
                        }
                    }
                    const y = se(r, a);
                    y.transform(x).css({
                        opacity: b
                    }),
                    f.origin && y.css("transform-origin", f.origin)
                }
            }
            ,
            setTransition: e=>{
                const {transformEl: s} = t.params.creativeEffect;
                (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow").transition(e),
                ae({
                    swiper: t,
                    duration: e,
                    transformEl: s,
                    allSlides: !0
                })
            }
            ,
            perspective: ()=>t.params.creativeEffect.perspective,
            overwriteParams: ()=>({
                watchSlidesProgress: !0,
                virtualTranslate: !t.params.cssMode
            })
        })
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({
            cardsEffect: {
                slideShadows: !0,
                transformEl: null,
                rotate: !0,
                perSlideRotate: 2,
                perSlideOffset: 8
            }
        }),
        te({
            effect: "cards",
            swiper: t,
            on: a,
            setTranslate: ()=>{
                const {slides: e, activeIndex: s} = t
                  , a = t.params.cardsEffect
                  , {startTranslate: i, isTouched: r} = t.touchEventsData
                  , n = t.translate;
                for (let l = 0; l < e.length; l += 1) {
                    const o = e.eq(l)
                      , d = o[0].progress
                      , c = Math.min(Math.max(d, -4), 4);
                    let p = o[0].swiperSlideOffset;
                    t.params.centeredSlides && !t.params.cssMode && t.$wrapperEl.transform(`translateX(${t.minTranslate()}px)`),
                    t.params.centeredSlides && t.params.cssMode && (p -= e[0].swiperSlideOffset);
                    let u = t.params.cssMode ? -p - t.translate : -p
                      , h = 0;
                    const m = -100 * Math.abs(c);
                    let f = 1
                      , g = -a.perSlideRotate * c
                      , v = a.perSlideOffset - .75 * Math.abs(c);
                    const w = t.virtual && t.params.virtual.enabled ? t.virtual.from + l : l
                      , b = (w === s || w === s - 1) && c > 0 && c < 1 && (r || t.params.cssMode) && n < i
                      , x = (w === s || w === s + 1) && c < 0 && c > -1 && (r || t.params.cssMode) && n > i;
                    if (b || x) {
                        const e = (1 - Math.abs((Math.abs(c) - .5) / .5)) ** .5;
                        g += -28 * c * e,
                        f += -.5 * e,
                        v += 96 * e,
                        h = -25 * e * Math.abs(c) + "%"
                    }
                    if (u = c < 0 ? `calc(${u}px + (${v * Math.abs(c)}%))` : c > 0 ? `calc(${u}px + (-${v * Math.abs(c)}%))` : `${u}px`,
                    !t.isHorizontal()) {
                        const e = h;
                        h = u,
                        u = e
                    }
                    const y = c < 0 ? "" + (1 + (1 - f) * c) : "" + (1 - (1 - f) * c)
                      , E = `\n        translate3d(${u}, ${h}, ${m}px)\n        rotateZ(${a.rotate ? g : 0}deg)\n        scale(${y})\n      `;
                    if (a.slideShadows) {
                        let e = o.find(".swiper-slide-shadow");
                        0 === e.length && (e = ie(a, o)),
                        e.length && (e[0].style.opacity = Math.min(Math.max((Math.abs(c) - .5) / .5, 0), 1))
                    }
                    o[0].style.zIndex = -Math.abs(Math.round(d)) + e.length;
                    se(a, o).transform(E)
                }
            }
            ,
            setTransition: e=>{
                const {transformEl: s} = t.params.cardsEffect;
                (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow").transition(e),
                ae({
                    swiper: t,
                    duration: e,
                    transformEl: s
                })
            }
            ,
            perspective: ()=>!0,
            overwriteParams: ()=>({
                watchSlidesProgress: !0,
                virtualTranslate: !t.params.cssMode
            })
        })
    }
    ];
    return V.use(re),
    V
}
));
!function(n, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : n.Splitting = t()
}(this, function() {
    "use strict"
    var o = document
      , l = o.createTextNode.bind(o)
    function d(n, t, e) {
        n.style.setProperty(t, e)
    }
    function f(n, t) {
        return n.appendChild(t)
    }
    function p(n, t, e, r) {
        var i = o.createElement("span")
        return t && (i.className = t),
        e && (!r && i.setAttribute("data-" + t, e),
        i.textContent = e),
        n && f(n, i) || i
    }
    function h(n, t) {
        return n.getAttribute("data-" + t)
    }
    function m(n, t) {
        return n && 0 != n.length ? n.nodeName ? [n] : [].slice.call(n[0].nodeName ? n : (t || o).querySelectorAll(n)) : []
    }
    function u(n) {
        for (var t = []; n--; )
            t[n] = []
        return t
    }
    function v(n, t) {
        n && n.some(t)
    }
    function c(t) {
        return function(n) {
            return t[n]
        }
    }
    var a = {}
    function n(n, t, e, r) {
        return {
            by: n,
            depends: t,
            key: e,
            split: r
        }
    }
    function r(n) {
        return function t(e, n, r) {
            var i = r.indexOf(e)
            if (-1 == i) {
                r.unshift(e)
                var o = a[e]
                if (!o)
                    throw new Error("plugin not loaded: " + e)
                v(o.depends, function(n) {
                    t(n, e, r)
                })
            } else {
                var u = r.indexOf(n)
                r.splice(i, 1),
                r.splice(u, 0, e)
            }
            return r
        }(n, 0, []).map(c(a))
    }
    function t(n) {
        a[n.by] = n
    }
    function g(n, r, i, o, u) {
        n.normalize()
        var c = []
          , a = document.createDocumentFragment()
        o && c.push(n.previousSibling)
        var s = []
        return m(n.childNodes).some(function(n) {
            if (!n.tagName || n.hasChildNodes()) {
                if (n.childNodes && n.childNodes.length)
                    return s.push(n),
                    void c.push.apply(c, g(n, r, i, o, u))
                var t = n.wholeText || ""
                  , e = t.trim()
                e.length && (" " === t[0] && s.push(l(" ")),
                v(e.split(i), function(n, t) {
                    t && u && s.push(p(a, "whitespace", " ", u))
                    var e = p(a, r, n)
                    c.push(e),
                    s.push(e)
                }),
                " " === t[t.length - 1] && s.push(l(" ")))
            } else
                s.push(n)
        }),
        v(s, function(n) {
            f(a, n)
        }),
        n.innerHTML = "",
        f(n, a),
        c
    }
    var s = 0
    var i = "words"
      , e = n(i, s, "word", function(n) {
        return g(n, "word", /\s+/, 0, 1)
    })
      , y = "chars"
      , w = n(y, [i], "char", function(n, e, t) {
        var r = []
        return v(t[i], function(n, t) {
            r.push.apply(r, g(n, "char", "", e.whitespace && t))
        }),
        r
    })
    function b(e) {
        var f = (e = e || {}).key
        return m(e.target || "[data-splitting]").map(function(a) {
            var s = a["🍌"]
            if (!e.force && s)
                return s
            s = a["🍌"] = {
                el: a
            }
            var n = e.by || h(a, "splitting")
            n && "true" != n || (n = y)
            var t = r(n)
              , l = function(n, t) {
                for (var e in t)
                    n[e] = t[e]
                return n
            }({}, e)
            return v(t, function(n) {
                if (n.split) {
                    var t = n.by
                      , e = (f ? "-" + f : "") + n.key
                      , r = n.split(a, l, s)
                    e && (i = a,
                    c = (u = "--" + e) + "-index",
                    v(o = r, function(n, t) {
                        Array.isArray(n) ? v(n, function(n) {
                            d(n, c, t)
                        }) : d(n, c, t)
                    }),
                    d(i, u + "-total", o.length)),
                    s[t] = r,
                    a.classList.add(t)
                }
                var i, o, u, c
            }),
            a.classList.add("splitting"),
            s
        })
    }
    function N(n, t, e) {
        var r = m(t.matching || n.children, n)
          , i = {}
        return v(r, function(n) {
            var t = Math.round(n[e]);
            (i[t] || (i[t] = [])).push(n)
        }),
        Object.keys(i).map(Number).sort(x).map(c(i))
    }
    function x(n, t) {
        return n - t
    }
    b.html = function(n) {
        var t = (n = n || {}).target = p()
        return t.innerHTML = n.content,
        b(n),
        t.outerHTML
    }
    ,
    b.add = t
    var T = n("lines", [i], "line", function(n, t, e) {
        return N(n, {
            matching: e[i]
        }, "offsetTop")
    })
      , L = n("items", s, "item", function(n, t) {
        return m(t.matching || n.children, n)
    })
      , k = n("rows", s, "row", function(n, t) {
        return N(n, t, "offsetTop")
    })
      , A = n("cols", s, "col", function(n, t) {
        return N(n, t, "offsetLeft")
    })
      , C = n("grid", ["rows", "cols"])
      , M = "layout"
      , S = n(M, s, s, function(n, t) {
        var e = t.rows = +(t.rows || h(n, "rows") || 1)
          , r = t.columns = +(t.columns || h(n, "columns") || 1)
        if (t.image = t.image || h(n, "image") || n.currentSrc || n.src,
        t.image) {
            var i = m("img", n)[0]
            t.image = i && (i.currentSrc || i.src)
        }
        t.image && d(n, "background-image", "url(" + t.image + ")")
        for (var o = e * r, u = [], c = p(s, "cell-grid"); o--; ) {
            var a = p(c, "cell")
            p(a, "cell-inner"),
            u.push(a)
        }
        return f(n, c),
        u
    })
      , H = n("cellRows", [M], "row", function(n, t, e) {
        var r = t.rows
          , i = u(r)
        return v(e[M], function(n, t, e) {
            i[Math.floor(t / (e.length / r))].push(n)
        }),
        i
    })
      , O = n("cellColumns", [M], "col", function(n, t, e) {
        var r = t.columns
          , i = u(r)
        return v(e[M], function(n, t) {
            i[t % r].push(n)
        }),
        i
    })
      , j = n("cells", ["cellRows", "cellColumns"], "cell", function(n, t, e) {
        return e[M]
    })
    return t(e),
    t(w),
    t(T),
    t(L),
    t(k),
    t(A),
    t(C),
    t(S),
    t(H),
    t(O),
    t(j),
    b
});

!function(n) {
    var o = {};
    function i(e) {
        if (o[e])
            return o[e].exports;
        var t = o[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return n[e].call(t.exports, t, t.exports, i),
        t.l = !0,
        t.exports
    }
    i.m = n,
    i.c = o,
    i.d = function(e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }
    ,
    i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    i.t = function(t, e) {
        if (1 & e && (t = i(t)),
        8 & e)
            return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
        var n = Object.create(null);
        if (i.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var o in t)
                i.d(n, o, function(e) {
                    return t[e]
                }
                .bind(null, o));
        return n
    }
    ,
    i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return i.d(t, "a", t),
        t
    }
    ,
    i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    i.p = "",
    i(i.s = 11)
}([, , function(e, t) {
    e.exports = function(e) {
        "complete" === document.readyState || "interactive" === document.readyState ? e.call() : document.attachEvent ? document.attachEvent("onreadystatechange", function() {
            "interactive" === document.readyState && e.call()
        }) : document.addEventListener && document.addEventListener("DOMContentLoaded", e)
    }
}
, , function(n, e, t) {
    (function(e) {
        var t;
        t = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {},
        n.exports = t
    }
    ).call(this, t(5))
}
, function(e, t) {
    function n(e) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    var o;
    o = function() {
        return this
    }();
    try {
        o = o || new Function("return this")()
    } catch (e) {
        "object" === ("undefined" == typeof window ? "undefined" : n(window)) && (o = window)
    }
    e.exports = o
}
, , , , , , function(e, t, n) {
    e.exports = n(12)
}
, function(e, t, n) {
    "use strict";
    n.r(t);
    var o = n(2)
      , i = n.n(o)
      , a = n(4)
      , r = n(13);
    function l(e) {
        return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    var s = a.window.jarallax;
    if (a.window.jarallax = r.default,
    a.window.jarallax.noConflict = function() {
        return a.window.jarallax = s,
        this
    }
    ,
    void 0 !== a.jQuery) {
        var c = function() {
            var e = arguments || [];
            Array.prototype.unshift.call(e, this);
            var t = r.default.apply(a.window, e);
            return "object" !== l(t) ? t : this
        };
        c.constructor = r.default.constructor;
        var u = a.jQuery.fn.jarallax;
        a.jQuery.fn.jarallax = c,
        a.jQuery.fn.jarallax.noConflict = function() {
            return a.jQuery.fn.jarallax = u,
            this
        }
    }
    i()(function() {
        Object(r.default)(document.querySelectorAll("[data-jarallax]"))
    })
}
, function(e, t, n) {
    "use strict";
    n.r(t);
    var o = n(2)
      , i = n.n(o)
      , a = n(14)
      , r = n.n(a)
      , b = n(4);
    function c(e, t) {
        return function(e) {
            if (Array.isArray(e))
                return e
        }(e) || function(e, t) {
            if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)))
                return;
            var n = []
              , o = !0
              , i = !1
              , a = void 0;
            try {
                for (var r, l = e[Symbol.iterator](); !(o = (r = l.next()).done) && (n.push(r.value),
                !t || n.length !== t); o = !0)
                    ;
            } catch (e) {
                i = !0,
                a = e
            } finally {
                try {
                    o || null == l.return || l.return()
                } finally {
                    if (i)
                        throw a
                }
            }
            return n
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }
    function u(e) {
        return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    function l(e, t) {
        for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1,
            o.configurable = !0,
            "value"in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o)
        }
    }
    var s, v, m = -1 < navigator.userAgent.indexOf("MSIE ") || -1 < navigator.userAgent.indexOf("Trident/") || -1 < navigator.userAgent.indexOf("Edge/"), p = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), d = function() {
        for (var e = "transform WebkitTransform MozTransform".split(" "), t = document.createElement("div"), n = 0; n < e.length; n++)
            if (t && void 0 !== t.style[e[n]])
                return e[n];
        return !1
    }();
    function f() {
        v = p ? (!s && document.body && ((s = document.createElement("div")).style.cssText = "position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;",
        document.body.appendChild(s)),
        (s ? s.clientHeight : 0) || b.window.innerHeight || document.documentElement.clientHeight) : b.window.innerHeight || document.documentElement.clientHeight
    }
    f(),
    b.window.addEventListener("resize", f),
    b.window.addEventListener("orientationchange", f),
    b.window.addEventListener("load", f),
    i()(function() {
        f()
    });
    var g = [];
    function y() {
        g.length && (g.forEach(function(e, t) {
            var n = e.instance
              , o = e.oldData
              , i = n.$item.getBoundingClientRect()
              , a = {
                width: i.width,
                height: i.height,
                top: i.top,
                bottom: i.bottom,
                wndW: b.window.innerWidth,
                wndH: v
            }
              , r = !o || o.wndW !== a.wndW || o.wndH !== a.wndH || o.width !== a.width || o.height !== a.height
              , l = r || !o || o.top !== a.top || o.bottom !== a.bottom;
            g[t].oldData = a,
            r && n.onResize(),
            l && n.onScroll()
        }),
        r()(y))
    }
    function h(e, t) {
        ("object" === ("undefined" == typeof HTMLElement ? "undefined" : u(HTMLElement)) ? e instanceof HTMLElement : e && "object" === u(e) && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName) && (e = [e]);
        for (var n, o = t, i = Array.prototype.slice.call(arguments, 2), a = e.length, r = 0; r < a; r++)
            if ("object" === u(o) || void 0 === o ? e[r].jarallax || (e[r].jarallax = new w(e[r],o)) : e[r].jarallax && (n = e[r].jarallax[o].apply(e[r].jarallax, i)),
            void 0 !== n)
                return n;
        return e
    }
    var x = 0
      , w = function() {
        function s(e, t) {
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, s);
            var n = this;
            n.instanceID = x++,
            n.$item = e,
            n.defaults = {
                type: "scroll",
                speed: .5,
                imgSrc: null,
                imgElement: ".jarallax-img",
                imgSize: "cover",
                imgPosition: "50% 50%",
                imgRepeat: "no-repeat",
                keepImg: !1,
                elementInViewport: null,
                zIndex: -100,
                disableParallax: !1,
                disableVideo: !1,
                videoSrc: null,
                videoStartTime: 0,
                videoEndTime: 0,
                videoVolume: 0,
                videoLoop: !0,
                videoPlayOnlyVisible: !0,
                videoLazyLoading: !0,
                onScroll: null,
                onInit: null,
                onDestroy: null,
                onCoverImage: null
            };
            var o = n.$item.dataset || {}
              , i = {};
            if (Object.keys(o).forEach(function(e) {
                var t = e.substr(0, 1).toLowerCase() + e.substr(1);
                t && void 0 !== n.defaults[t] && (i[t] = o[e])
            }),
            n.options = n.extend({}, n.defaults, i, t),
            n.pureOptions = n.extend({}, n.options),
            Object.keys(n.options).forEach(function(e) {
                "true" === n.options[e] ? n.options[e] = !0 : "false" === n.options[e] && (n.options[e] = !1)
            }),
            n.options.speed = Math.min(2, Math.max(-1, parseFloat(n.options.speed))),
            "string" == typeof n.options.disableParallax && (n.options.disableParallax = new RegExp(n.options.disableParallax)),
            n.options.disableParallax instanceof RegExp) {
                var a = n.options.disableParallax;
                n.options.disableParallax = function() {
                    return a.test(navigator.userAgent)
                }
            }
            if ("function" != typeof n.options.disableParallax && (n.options.disableParallax = function() {
                return !1
            }
            ),
            "string" == typeof n.options.disableVideo && (n.options.disableVideo = new RegExp(n.options.disableVideo)),
            n.options.disableVideo instanceof RegExp) {
                var r = n.options.disableVideo;
                n.options.disableVideo = function() {
                    return r.test(navigator.userAgent)
                }
            }
            "function" != typeof n.options.disableVideo && (n.options.disableVideo = function() {
                return !1
            }
            );
            var l = n.options.elementInViewport;
            l && "object" === u(l) && void 0 !== l.length && (l = c(l, 1)[0]);
            l instanceof Element || (l = null),
            n.options.elementInViewport = l,
            n.image = {
                src: n.options.imgSrc || null,
                $container: null,
                useImgTag: !1,
                position: /iPad|iPhone|iPod|Android/.test(navigator.userAgent) ? "absolute" : "fixed"
            },
            n.initImg() && n.canInitParallax() && n.init()
        }
        return function(e, t, n) {
            t && l(e.prototype, t),
            n && l(e, n)
        }(s, [{
            key: "css",
            value: function(t, n) {
                return "string" == typeof n ? b.window.getComputedStyle(t).getPropertyValue(n) : (n.transform && d && (n[d] = n.transform),
                Object.keys(n).forEach(function(e) {
                    t.style[e] = n[e]
                }),
                t)
            }
        }, {
            key: "extend",
            value: function(n) {
                var o = arguments;
                return n = n || {},
                Object.keys(arguments).forEach(function(t) {
                    o[t] && Object.keys(o[t]).forEach(function(e) {
                        n[e] = o[t][e]
                    })
                }),
                n
            }
        }, {
            key: "getWindowData",
            value: function() {
                return {
                    width: b.window.innerWidth || document.documentElement.clientWidth,
                    height: v,
                    y: document.documentElement.scrollTop
                }
            }
        }, {
            key: "initImg",
            value: function() {
                var e = this
                  , t = e.options.imgElement;
                return t && "string" == typeof t && (t = e.$item.querySelector(t)),
                t instanceof Element || (e.options.imgSrc ? (t = new Image).src = e.options.imgSrc : t = null),
                t && (e.options.keepImg ? e.image.$item = t.cloneNode(!0) : (e.image.$item = t,
                e.image.$itemParent = t.parentNode),
                e.image.useImgTag = !0),
                !!e.image.$item || (null === e.image.src && (e.image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
                e.image.bgImage = e.css(e.$item, "background-image")),
                !(!e.image.bgImage || "none" === e.image.bgImage))
            }
        }, {
            key: "canInitParallax",
            value: function() {
                return d && !this.options.disableParallax()
            }
        }, {
            key: "init",
            value: function() {
                var e = this
                  , t = {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                    pointerEvents: "none"
                }
                  , n = {};
                if (!e.options.keepImg) {
                    var o = e.$item.getAttribute("style");
                    if (o && e.$item.setAttribute("data-jarallax-original-styles", o),
                    e.image.useImgTag) {
                        var i = e.image.$item.getAttribute("style");
                        i && e.image.$item.setAttribute("data-jarallax-original-styles", i)
                    }
                }
                if ("static" === e.css(e.$item, "position") && e.css(e.$item, {
                    position: "relative"
                }),
                "auto" === e.css(e.$item, "z-index") && e.css(e.$item, {
                    zIndex: 0
                }),
                e.image.$container = document.createElement("div"),
                e.css(e.image.$container, t),
                e.css(e.image.$container, {
                    "z-index": e.options.zIndex
                }),
                m && e.css(e.image.$container, {
                    opacity: .9999
                }),
                e.image.$container.setAttribute("id", "jarallax-container-".concat(e.instanceID)),
                e.$item.appendChild(e.image.$container),
                e.image.useImgTag ? n = e.extend({
                    "object-fit": e.options.imgSize,
                    "object-position": e.options.imgPosition,
                    "font-family": "object-fit: ".concat(e.options.imgSize, "; object-position: ").concat(e.options.imgPosition, ";"),
                    "max-width": "none"
                }, t, n) : (e.image.$item = document.createElement("div"),
                e.image.src && (n = e.extend({
                    "background-position": e.options.imgPosition,
                    "background-size": e.options.imgSize,
                    "background-repeat": e.options.imgRepeat,
                    "background-image": e.image.bgImage || 'url("'.concat(e.image.src, '")')
                }, t, n))),
                "opacity" !== e.options.type && "scale" !== e.options.type && "scale-opacity" !== e.options.type && 1 !== e.options.speed || (e.image.position = "absolute"),
                "fixed" === e.image.position) {
                    var a = function(e) {
                        for (var t = []; null !== e.parentElement; )
                            1 === (e = e.parentElement).nodeType && t.push(e);
                        return t
                    }(e.$item).filter(function(e) {
                        var t = b.window.getComputedStyle(e)
                          , n = t["-webkit-transform"] || t["-moz-transform"] || t.transform;
                        return n && "none" !== n || /(auto|scroll)/.test(t.overflow + t["overflow-y"] + t["overflow-x"])
                    });
                    e.image.position = a.length ? "absolute" : "fixed"
                }
                n.position = e.image.position,
                e.css(e.image.$item, n),
                e.image.$container.appendChild(e.image.$item),
                e.onResize(),
                e.onScroll(!0),
                e.options.onInit && e.options.onInit.call(e),
                "none" !== e.css(e.$item, "background-image") && e.css(e.$item, {
                    "background-image": "none"
                }),
                e.addToParallaxList()
            }
        }, {
            key: "addToParallaxList",
            value: function() {
                g.push({
                    instance: this
                }),
                1 === g.length && y()
            }
        }, {
            key: "removeFromParallaxList",
            value: function() {
                var n = this;
                g.forEach(function(e, t) {
                    e.instance.instanceID === n.instanceID && g.splice(t, 1)
                })
            }
        }, {
            key: "destroy",
            value: function() {
                var e = this;
                e.removeFromParallaxList();
                var t = e.$item.getAttribute("data-jarallax-original-styles");
                if (e.$item.removeAttribute("data-jarallax-original-styles"),
                t ? e.$item.setAttribute("style", t) : e.$item.removeAttribute("style"),
                e.image.useImgTag) {
                    var n = e.image.$item.getAttribute("data-jarallax-original-styles");
                    e.image.$item.removeAttribute("data-jarallax-original-styles"),
                    n ? e.image.$item.setAttribute("style", t) : e.image.$item.removeAttribute("style"),
                    e.image.$itemParent && e.image.$itemParent.appendChild(e.image.$item)
                }
                e.$clipStyles && e.$clipStyles.parentNode.removeChild(e.$clipStyles),
                e.image.$container && e.image.$container.parentNode.removeChild(e.image.$container),
                e.options.onDestroy && e.options.onDestroy.call(e),
                delete e.$item.jarallax
            }
        }, {
            key: "clipContainer",
            value: function() {
                if ("fixed" === this.image.position) {
                    var e = this
                      , t = e.image.$container.getBoundingClientRect()
                      , n = t.width
                      , o = t.height;
                    if (!e.$clipStyles)
                        e.$clipStyles = document.createElement("style"),
                        e.$clipStyles.setAttribute("type", "text/css"),
                        e.$clipStyles.setAttribute("id", "jarallax-clip-".concat(e.instanceID)),
                        (document.head || document.getElementsByTagName("head")[0]).appendChild(e.$clipStyles);
                    var i = "#jarallax-container-".concat(e.instanceID, " {\n           clip: rect(0 ").concat(n, "px ").concat(o, "px 0);\n           clip: rect(0, ").concat(n, "px, ").concat(o, "px, 0);\n        }");
                    e.$clipStyles.styleSheet ? e.$clipStyles.styleSheet.cssText = i : e.$clipStyles.innerHTML = i
                }
            }
        }, {
            key: "coverImage",
            value: function() {
                var e = this
                  , t = e.image.$container.getBoundingClientRect()
                  , n = t.height
                  , o = e.options.speed
                  , i = "scroll" === e.options.type || "scroll-opacity" === e.options.type
                  , a = 0
                  , r = n
                  , l = 0;
                return i && (o < 0 ? (a = o * Math.max(n, v),
                v < n && (a -= o * (n - v))) : a = o * (n + v),
                1 < o ? r = Math.abs(a - v) : o < 0 ? r = a / o + Math.abs(a) : r += (v - n) * (1 - o),
                a /= 2),
                e.parallaxScrollDistance = a,
                l = i ? (v - r) / 2 : (n - r) / 2,
                e.css(e.image.$item, {
                    height: "".concat(r, "px"),
                    marginTop: "".concat(l, "px"),
                    left: "fixed" === e.image.position ? "".concat(t.left, "px") : "0",
                    width: "".concat(t.width, "px")
                }),
                e.options.onCoverImage && e.options.onCoverImage.call(e),
                {
                    image: {
                        height: r,
                        marginTop: l
                    },
                    container: t
                }
            }
        }, {
            key: "isVisible",
            value: function() {
                return this.isElementInViewport || !1
            }
        }, {
            key: "onScroll",
            value: function(e) {
                var t = this
                  , n = t.$item.getBoundingClientRect()
                  , o = n.top
                  , i = n.height
                  , a = {}
                  , r = n;
                if (t.options.elementInViewport && (r = t.options.elementInViewport.getBoundingClientRect()),
                t.isElementInViewport = 0 <= r.bottom && 0 <= r.right && r.top <= v && r.left <= b.window.innerWidth,
                e || t.isElementInViewport) {
                    var l = Math.max(0, o)
                      , s = Math.max(0, i + o)
                      , c = Math.max(0, -o)
                      , u = Math.max(0, o + i - v)
                      , m = Math.max(0, i - (o + i - v))
                      , p = Math.max(0, -o + v - i)
                      , d = 1 - 2 * (v - o) / (v + i)
                      , f = 1;
                    if (i < v ? f = 1 - (c || u) / i : s <= v ? f = s / v : m <= v && (f = m / v),
                    "opacity" !== t.options.type && "scale-opacity" !== t.options.type && "scroll-opacity" !== t.options.type || (a.transform = "translate3d(0,0,0)",
                    a.opacity = f),
                    "scale" === t.options.type || "scale-opacity" === t.options.type) {
                        var g = 1;
                        t.options.speed < 0 ? g -= t.options.speed * f : g += t.options.speed * (1 - f),
                        a.transform = "scale(".concat(g, ") translate3d(0,0,0)")
                    }
                    if ("scroll" === t.options.type || "scroll-opacity" === t.options.type) {
                        var y = t.parallaxScrollDistance * d;
                        "absolute" === t.image.position && (y -= o),
                        a.transform = "translate3d(0,".concat(y, "px,0)")
                    }
                    t.css(t.image.$item, a),
                    t.options.onScroll && t.options.onScroll.call(t, {
                        section: n,
                        beforeTop: l,
                        beforeTopEnd: s,
                        afterTop: c,
                        beforeBottom: u,
                        beforeBottomEnd: m,
                        afterBottom: p,
                        visiblePercent: f,
                        fromViewportCenter: d
                    })
                }
            }
        }, {
            key: "onResize",
            value: function() {
                this.coverImage(),
                this.clipContainer()
            }
        }]),
        s
    }();
    h.constructor = w,
    t.default = h
}
, function(e, t, n) {
    var o = n(15)
      , i = o.requestAnimationFrame || o.webkitRequestAnimationFrame || o.mozRequestAnimationFrame || function(e) {
        var t = +new Date
          , n = Math.max(0, 16 - (t - a))
          , o = setTimeout(e, n);
        return a = t,
        o
    }
      , a = +new Date;
    var r = o.cancelAnimationFrame || o.webkitCancelAnimationFrame || o.mozCancelAnimationFrame || clearTimeout;
    Function.prototype.bind && (i = i.bind(o),
    r = r.bind(o)),
    (e.exports = i).cancel = r
}
, function(n, e, t) {
    (function(e) {
        var t;
        t = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {},
        n.exports = t
    }
    ).call(this, t(5))
}
]);
;/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        factory(require('jquery'));
    } else {
        factory(window.jQuery || window.Zepto);
    }
}(function($) {
    var CLOSE_EVENT = 'Close'
      , BEFORE_CLOSE_EVENT = 'BeforeClose'
      , AFTER_CLOSE_EVENT = 'AfterClose'
      , BEFORE_APPEND_EVENT = 'BeforeAppend'
      , MARKUP_PARSE_EVENT = 'MarkupParse'
      , OPEN_EVENT = 'Open'
      , CHANGE_EVENT = 'Change'
      , NS = 'mfp'
      , EVENT_NS = '.' + NS
      , READY_CLASS = 'mfp-ready'
      , REMOVING_CLASS = 'mfp-removing'
      , PREVENT_CLOSE_CLASS = 'mfp-prevent-close';
    var mfp, MagnificPopup = function() {}, _isJQ = !!(window.jQuery), _prevStatus, _window = $(window), _document, _prevContentType, _wrapClasses, _currPopupType;
    var _mfpOn = function(name, f) {
        mfp.ev.on(NS + name + EVENT_NS, f);
    }
      , _getEl = function(className, appendTo, html, raw) {
        var el = document.createElement('div');
        el.className = 'mfp-' + className;
        if (html) {
            el.innerHTML = html;
        }
        if (!raw) {
            el = $(el);
            if (appendTo) {
                el.appendTo(appendTo);
            }
        } else if (appendTo) {
            appendTo.appendChild(el);
        }
        return el;
    }
      , _mfpTrigger = function(e, data) {
        mfp.ev.triggerHandler(NS + e, data);
        if (mfp.st.callbacks) {
            e = e.charAt(0).toLowerCase() + e.slice(1);
            if (mfp.st.callbacks[e]) {
                mfp.st.callbacks[e].apply(mfp, $.isArray(data) ? data : [data]);
            }
        }
    }
      , _getCloseBtn = function(type) {
        if (type !== _currPopupType || !mfp.currTemplate.closeBtn) {
            mfp.currTemplate.closeBtn = $(mfp.st.closeMarkup.replace('%title%', mfp.st.tClose));
            _currPopupType = type;
        }
        return mfp.currTemplate.closeBtn;
    }
      , _checkInstance = function() {
        if (!$.magnificPopup.instance) {
            mfp = new MagnificPopup();
            mfp.init();
            $.magnificPopup.instance = mfp;
        }
    }
      , supportsTransitions = function() {
        var s = document.createElement('p').style
          , v = ['ms', 'O', 'Moz', 'Webkit'];
        if (s['transition'] !== undefined) {
            return true;
        }
        while (v.length) {
            if (v.pop() + 'Transition'in s) {
                return true;
            }
        }
        return false;
    };
    MagnificPopup.prototype = {
        constructor: MagnificPopup,
        init: function() {
            var appVersion = navigator.appVersion;
            mfp.isLowIE = mfp.isIE8 = document.all && !document.addEventListener;
            mfp.isAndroid = (/android/gi).test(appVersion);
            mfp.isIOS = (/iphone|ipad|ipod/gi).test(appVersion);
            mfp.supportsTransition = supportsTransitions();
            mfp.probablyMobile = (mfp.isAndroid || mfp.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent));
            _document = $(document);
            mfp.popupsCache = {};
        },
        open: function(data) {
            var i;
            if (data.isObj === false) {
                mfp.items = data.items.toArray();
                mfp.index = 0;
                var items = data.items, item;
                for (i = 0; i < items.length; i++) {
                    item = items[i];
                    if (item.parsed) {
                        item = item.el[0];
                    }
                    if (item === data.el[0]) {
                        mfp.index = i;
                        break;
                    }
                }
            } else {
                mfp.items = $.isArray(data.items) ? data.items : [data.items];
                mfp.index = data.index || 0;
            }
            if (mfp.isOpen) {
                mfp.updateItemHTML();
                return;
            }
            mfp.types = [];
            _wrapClasses = '';
            if (data.mainEl && data.mainEl.length) {
                mfp.ev = data.mainEl.eq(0);
            } else {
                mfp.ev = _document;
            }
            if (data.key) {
                if (!mfp.popupsCache[data.key]) {
                    mfp.popupsCache[data.key] = {};
                }
                mfp.currTemplate = mfp.popupsCache[data.key];
            } else {
                mfp.currTemplate = {};
            }
            mfp.st = $.extend(true, {}, $.magnificPopup.defaults, data);
            mfp.fixedContentPos = mfp.st.fixedContentPos === 'auto' ? !mfp.probablyMobile : mfp.st.fixedContentPos;
            if (mfp.st.modal) {
                mfp.st.closeOnContentClick = false;
                mfp.st.closeOnBgClick = false;
                mfp.st.showCloseBtn = false;
                mfp.st.enableEscapeKey = false;
            }
            if (!mfp.bgOverlay) {
                mfp.bgOverlay = _getEl('bg').on('click' + EVENT_NS, function() {
                    mfp.close();
                });
                mfp.wrap = _getEl('wrap').attr('tabindex', -1).on('click' + EVENT_NS, function(e) {
                    if (mfp._checkIfClose(e.target)) {
                        mfp.close();
                    }
                });
                mfp.container = _getEl('container', mfp.wrap);
            }
            mfp.contentContainer = _getEl('content');
            if (mfp.st.preloader) {
                mfp.preloader = _getEl('preloader', mfp.container, mfp.st.tLoading);
            }
            var modules = $.magnificPopup.modules;
            for (i = 0; i < modules.length; i++) {
                var n = modules[i];
                n = n.charAt(0).toUpperCase() + n.slice(1);
                mfp['init' + n].call(mfp);
            }
            _mfpTrigger('BeforeOpen');
            if (mfp.st.showCloseBtn) {
                if (!mfp.st.closeBtnInside) {
                    mfp.wrap.append(_getCloseBtn());
                } else {
                    _mfpOn(MARKUP_PARSE_EVENT, function(e, template, values, item) {
                        values.close_replaceWith = _getCloseBtn(item.type);
                    });
                    _wrapClasses += ' mfp-close-btn-in';
                }
            }
            if (mfp.st.alignTop) {
                _wrapClasses += ' mfp-align-top';
            }
            if (mfp.fixedContentPos) {
                mfp.wrap.css({
                    overflow: mfp.st.overflowY,
                    overflowX: 'hidden',
                    overflowY: mfp.st.overflowY
                });
            } else {
                mfp.wrap.css({
                    top: _window.scrollTop(),
                    position: 'absolute'
                });
            }
            if (mfp.st.fixedBgPos === false || (mfp.st.fixedBgPos === 'auto' && !mfp.fixedContentPos)) {
                mfp.bgOverlay.css({
                    height: _document.height(),
                    position: 'absolute'
                });
            }
            if (mfp.st.enableEscapeKey) {
                _document.on('keyup' + EVENT_NS, function(e) {
                    if (e.keyCode === 27) {
                        mfp.close();
                    }
                });
            }
            _window.on('resize' + EVENT_NS, function() {
                mfp.updateSize();
            });
            if (!mfp.st.closeOnContentClick) {
                _wrapClasses += ' mfp-auto-cursor';
            }
            if (_wrapClasses)
                mfp.wrap.addClass(_wrapClasses);
            var windowHeight = mfp.wH = _window.height();
            var windowStyles = {};
            if (mfp.fixedContentPos) {
                if (mfp._hasScrollBar(windowHeight)) {
                    var s = mfp._getScrollbarSize();
                    if (s) {
                        windowStyles.marginRight = s;
                    }
                }
            }
            if (mfp.fixedContentPos) {
                if (!mfp.isIE7) {
                    windowStyles.overflow = 'hidden';
                } else {
                    $('body, html').css('overflow', 'hidden');
                }
            }
            var classesToadd = mfp.st.mainClass;
            if (mfp.isIE7) {
                classesToadd += ' mfp-ie7';
            }
            if (classesToadd) {
                mfp._addClassToMFP(classesToadd);
            }
            mfp.updateItemHTML();
            _mfpTrigger('BuildControls');
            $('html').css(windowStyles);
            mfp.bgOverlay.add(mfp.wrap).prependTo(mfp.st.prependTo || $(document.body));
            mfp._lastFocusedEl = document.activeElement;
            setTimeout(function() {
                if (mfp.content) {
                    mfp._addClassToMFP(READY_CLASS);
                    mfp._setFocus();
                } else {
                    mfp.bgOverlay.addClass(READY_CLASS);
                }
                _document.on('focusin' + EVENT_NS, mfp._onFocusIn);
            }, 16);
            mfp.isOpen = true;
            mfp.updateSize(windowHeight);
            _mfpTrigger(OPEN_EVENT);
            return data;
        },
        close: function() {
            if (!mfp.isOpen)
                return;
            _mfpTrigger(BEFORE_CLOSE_EVENT);
            mfp.isOpen = false;
            if (mfp.st.removalDelay && !mfp.isLowIE && mfp.supportsTransition) {
                mfp._addClassToMFP(REMOVING_CLASS);
                setTimeout(function() {
                    mfp._close();
                }, mfp.st.removalDelay);
            } else {
                mfp._close();
            }
        },
        _close: function() {
            _mfpTrigger(CLOSE_EVENT);
            var classesToRemove = REMOVING_CLASS + ' ' + READY_CLASS + ' ';
            mfp.bgOverlay.detach();
            mfp.wrap.detach();
            mfp.container.empty();
            if (mfp.st.mainClass) {
                classesToRemove += mfp.st.mainClass + ' ';
            }
            mfp._removeClassFromMFP(classesToRemove);
            if (mfp.fixedContentPos) {
                var windowStyles = {
                    marginRight: ''
                };
                if (mfp.isIE7) {
                    $('body, html').css('overflow', '');
                } else {
                    windowStyles.overflow = '';
                }
                $('html').css(windowStyles);
            }
            _document.off('keyup' + EVENT_NS + ' focusin' + EVENT_NS);
            mfp.ev.off(EVENT_NS);
            mfp.wrap.attr('class', 'mfp-wrap').removeAttr('style');
            mfp.bgOverlay.attr('class', 'mfp-bg');
            mfp.container.attr('class', 'mfp-container');
            if (mfp.st.showCloseBtn && (!mfp.st.closeBtnInside || mfp.currTemplate[mfp.currItem.type] === true)) {
                if (mfp.currTemplate.closeBtn)
                    mfp.currTemplate.closeBtn.detach();
            }
            if (mfp.st.autoFocusLast && mfp._lastFocusedEl) {
                $(mfp._lastFocusedEl).focus();
            }
            mfp.currItem = null;
            mfp.content = null;
            mfp.currTemplate = null;
            mfp.prevHeight = 0;
            _mfpTrigger(AFTER_CLOSE_EVENT);
        },
        updateSize: function(winHeight) {
            if (mfp.isIOS) {
                var zoomLevel = document.documentElement.clientWidth / window.innerWidth;
                var height = window.innerHeight * zoomLevel;
                mfp.wrap.css('height', height);
                mfp.wH = height;
            } else {
                mfp.wH = winHeight || _window.height();
            }
            if (!mfp.fixedContentPos) {
                mfp.wrap.css('height', mfp.wH);
            }
            _mfpTrigger('Resize');
        },
        updateItemHTML: function() {
            var item = mfp.items[mfp.index];
            mfp.contentContainer.detach();
            if (mfp.content)
                mfp.content.detach();
            if (!item.parsed) {
                item = mfp.parseEl(mfp.index);
            }
            var type = item.type;
            _mfpTrigger('BeforeChange', [mfp.currItem ? mfp.currItem.type : '', type]);
            mfp.currItem = item;
            if (!mfp.currTemplate[type]) {
                var markup = mfp.st[type] ? mfp.st[type].markup : false;
                _mfpTrigger('FirstMarkupParse', markup);
                if (markup) {
                    mfp.currTemplate[type] = $(markup);
                } else {
                    mfp.currTemplate[type] = true;
                }
            }
            if (_prevContentType && _prevContentType !== item.type) {
                mfp.container.removeClass('mfp-' + _prevContentType + '-holder');
            }
            var newContent = mfp['get' + type.charAt(0).toUpperCase() + type.slice(1)](item, mfp.currTemplate[type]);
            mfp.appendContent(newContent, type);
            item.preloaded = true;
            _mfpTrigger(CHANGE_EVENT, item);
            _prevContentType = item.type;
            mfp.container.prepend(mfp.contentContainer);
            _mfpTrigger('AfterChange');
        },
        appendContent: function(newContent, type) {
            mfp.content = newContent;
            if (newContent) {
                if (mfp.st.showCloseBtn && mfp.st.closeBtnInside && mfp.currTemplate[type] === true) {
                    if (!mfp.content.find('.mfp-close').length) {
                        mfp.content.append(_getCloseBtn());
                    }
                } else {
                    mfp.content = newContent;
                }
            } else {
                mfp.content = '';
            }
            _mfpTrigger(BEFORE_APPEND_EVENT);
            mfp.container.addClass('mfp-' + type + '-holder');
            mfp.contentContainer.append(mfp.content);
        },
        parseEl: function(index) {
            var item = mfp.items[index], type;
            if (item.tagName) {
                item = {
                    el: $(item)
                };
            } else {
                type = item.type;
                item = {
                    data: item,
                    src: item.src
                };
            }
            if (item.el) {
                var types = mfp.types;
                for (var i = 0; i < types.length; i++) {
                    if (item.el.hasClass('mfp-' + types[i])) {
                        type = types[i];
                        break;
                    }
                }
                item.src = item.el.attr('data-mfp-src');
                if (!item.src) {
                    item.src = item.el.attr('href');
                }
            }
            item.type = type || mfp.st.type || 'inline';
            item.index = index;
            item.parsed = true;
            mfp.items[index] = item;
            _mfpTrigger('ElementParse', item);
            return mfp.items[index];
        },
        addGroup: function(el, options) {
            var eHandler = function(e) {
                e.mfpEl = this;
                mfp._openClick(e, el, options);
            };
            if (!options) {
                options = {};
            }
            var eName = 'click.magnificPopup';
            options.mainEl = el;
            if (options.items) {
                options.isObj = true;
                el.off(eName).on(eName, eHandler);
            } else {
                options.isObj = false;
                if (options.delegate) {
                    el.off(eName).on(eName, options.delegate, eHandler);
                } else {
                    options.items = el;
                    el.off(eName).on(eName, eHandler);
                }
            }
        },
        _openClick: function(e, el, options) {
            var midClick = options.midClick !== undefined ? options.midClick : $.magnificPopup.defaults.midClick;
            if (!midClick && (e.which === 2 || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey)) {
                return;
            }
            var disableOn = options.disableOn !== undefined ? options.disableOn : $.magnificPopup.defaults.disableOn;
            if (disableOn) {
                if ($.isFunction(disableOn)) {
                    if (!disableOn.call(mfp)) {
                        return true;
                    }
                } else {
                    if (_window.width() < disableOn) {
                        return true;
                    }
                }
            }
            if (e.type) {
                e.preventDefault();
                if (mfp.isOpen) {
                    e.stopPropagation();
                }
            }
            options.el = $(e.mfpEl);
            if (options.delegate) {
                options.items = el.find(options.delegate);
            }
            mfp.open(options);
        },
        updateStatus: function(status, text) {
            if (mfp.preloader) {
                if (_prevStatus !== status) {
                    mfp.container.removeClass('mfp-s-' + _prevStatus);
                }
                if (!text && status === 'loading') {
                    text = mfp.st.tLoading;
                }
                var data = {
                    status: status,
                    text: text
                };
                _mfpTrigger('UpdateStatus', data);
                status = data.status;
                text = data.text;
                mfp.preloader.html(text);
                mfp.preloader.find('a').on('click', function(e) {
                    e.stopImmediatePropagation();
                });
                mfp.container.addClass('mfp-s-' + status);
                _prevStatus = status;
            }
        },
        _checkIfClose: function(target) {
            if ($(target).hasClass(PREVENT_CLOSE_CLASS)) {
                return;
            }
            var closeOnContent = mfp.st.closeOnContentClick;
            var closeOnBg = mfp.st.closeOnBgClick;
            if (closeOnContent && closeOnBg) {
                return true;
            } else {
                if (!mfp.content || $(target).hasClass('mfp-close') || (mfp.preloader && target === mfp.preloader[0])) {
                    return true;
                }
                if ((target !== mfp.content[0] && !$.contains(mfp.content[0], target))) {
                    if (closeOnBg) {
                        if ($.contains(document, target)) {
                            return true;
                        }
                    }
                } else if (closeOnContent) {
                    return true;
                }
            }
            return false;
        },
        _addClassToMFP: function(cName) {
            mfp.bgOverlay.addClass(cName);
            mfp.wrap.addClass(cName);
        },
        _removeClassFromMFP: function(cName) {
            this.bgOverlay.removeClass(cName);
            mfp.wrap.removeClass(cName);
        },
        _hasScrollBar: function(winHeight) {
            return ((mfp.isIE7 ? _document.height() : document.body.scrollHeight) > (winHeight || _window.height()));
        },
        _setFocus: function() {
            (mfp.st.focus ? mfp.content.find(mfp.st.focus).eq(0) : mfp.wrap).focus();
        },
        _onFocusIn: function(e) {
            if (e.target !== mfp.wrap[0] && !$.contains(mfp.wrap[0], e.target)) {
                mfp._setFocus();
                return false;
            }
        },
        _parseMarkup: function(template, values, item) {
            var arr;
            if (item.data) {
                values = $.extend(item.data, values);
            }
            _mfpTrigger(MARKUP_PARSE_EVENT, [template, values, item]);
            $.each(values, function(key, value) {
                if (value === undefined || value === false) {
                    return true;
                }
                arr = key.split('_');
                if (arr.length > 1) {
                    var el = template.find(EVENT_NS + '-' + arr[0]);
                    if (el.length > 0) {
                        var attr = arr[1];
                        if (attr === 'replaceWith') {
                            if (el[0] !== value[0]) {
                                el.replaceWith(value);
                            }
                        } else if (attr === 'img') {
                            if (el.is('img')) {
                                el.attr('src', value);
                            } else {
                                el.replaceWith($('<img>').attr('src', value).attr('class', el.attr('class')));
                            }
                        } else {
                            el.attr(arr[1], value);
                        }
                    }
                } else {
                    template.find(EVENT_NS + '-' + key).html(value);
                }
            });
        },
        _getScrollbarSize: function() {
            if (mfp.scrollbarSize === undefined) {
                var scrollDiv = document.createElement("div");
                scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
                document.body.appendChild(scrollDiv);
                mfp.scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
                document.body.removeChild(scrollDiv);
            }
            return mfp.scrollbarSize;
        }
    };
    $.magnificPopup = {
        instance: null,
        proto: MagnificPopup.prototype,
        modules: [],
        open: function(options, index) {
            _checkInstance();
            if (!options) {
                options = {};
            } else {
                options = $.extend(true, {}, options);
            }
            options.isObj = true;
            options.index = index || 0;
            return this.instance.open(options);
        },
        close: function() {
            return $.magnificPopup.instance && $.magnificPopup.instance.close();
        },
        registerModule: function(name, module) {
            if (module.options) {
                $.magnificPopup.defaults[name] = module.options;
            }
            $.extend(this.proto, module.proto);
            this.modules.push(name);
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: false,
            mainClass: '',
            preloader: true,
            focus: '',
            closeOnContentClick: false,
            closeOnBgClick: true,
            closeBtnInside: true,
            showCloseBtn: true,
            enableEscapeKey: true,
            modal: false,
            alignTop: false,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: 'auto',
            fixedBgPos: 'auto',
            overflowY: 'auto',
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: 'Close (Esc)',
            tLoading: 'Loading...',
            autoFocusLast: true
        }
    };
    $.fn.magnificPopup = function(options) {
        _checkInstance();
        var jqEl = $(this);
        if (typeof options === "string") {
            if (options === 'open') {
                var items, itemOpts = _isJQ ? jqEl.data('magnificPopup') : jqEl[0].magnificPopup, index = parseInt(arguments[1], 10) || 0;
                if (itemOpts.items) {
                    items = itemOpts.items[index];
                } else {
                    items = jqEl;
                    if (itemOpts.delegate) {
                        items = items.find(itemOpts.delegate);
                    }
                    items = items.eq(index);
                }
                mfp._openClick({
                    mfpEl: items
                }, jqEl, itemOpts);
            } else {
                if (mfp.isOpen)
                    mfp[options].apply(mfp, Array.prototype.slice.call(arguments, 1));
            }
        } else {
            options = $.extend(true, {}, options);
            if (_isJQ) {
                jqEl.data('magnificPopup', options);
            } else {
                jqEl[0].magnificPopup = options;
            }
            mfp.addGroup(jqEl, options);
        }
        return jqEl;
    }
    ;
    var INLINE_NS = 'inline', _hiddenClass, _inlinePlaceholder, _lastInlineElement, _putInlineElementsBack = function() {
        if (_lastInlineElement) {
            _inlinePlaceholder.after(_lastInlineElement.addClass(_hiddenClass)).detach();
            _lastInlineElement = null;
        }
    };
    $.magnificPopup.registerModule(INLINE_NS, {
        options: {
            hiddenClass: 'hide',
            markup: '',
            tNotFound: 'Content not found'
        },
        proto: {
            initInline: function() {
                mfp.types.push(INLINE_NS);
                _mfpOn(CLOSE_EVENT + '.' + INLINE_NS, function() {
                    _putInlineElementsBack();
                });
            },
            getInline: function(item, template) {
                _putInlineElementsBack();
                if (item.src) {
                    var inlineSt = mfp.st.inline
                      , el = $(item.src);
                    if (el.length) {
                        var parent = el[0].parentNode;
                        if (parent && parent.tagName) {
                            if (!_inlinePlaceholder) {
                                _hiddenClass = inlineSt.hiddenClass;
                                _inlinePlaceholder = _getEl(_hiddenClass);
                                _hiddenClass = 'mfp-' + _hiddenClass;
                            }
                            _lastInlineElement = el.after(_inlinePlaceholder).detach().removeClass(_hiddenClass);
                        }
                        mfp.updateStatus('ready');
                    } else {
                        mfp.updateStatus('error', inlineSt.tNotFound);
                        el = $('<div>');
                    }
                    item.inlineElement = el;
                    return el;
                }
                mfp.updateStatus('ready');
                mfp._parseMarkup(template, {}, item);
                return template;
            }
        }
    });
    var AJAX_NS = 'ajax', _ajaxCur, _removeAjaxCursor = function() {
        if (_ajaxCur) {
            $(document.body).removeClass(_ajaxCur);
        }
    }, _destroyAjaxRequest = function() {
        _removeAjaxCursor();
        if (mfp.req) {
            mfp.req.abort();
        }
    };
    $.magnificPopup.registerModule(AJAX_NS, {
        options: {
            settings: null,
            cursor: 'mfp-ajax-cur',
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                mfp.types.push(AJAX_NS);
                _ajaxCur = mfp.st.ajax.cursor;
                _mfpOn(CLOSE_EVENT + '.' + AJAX_NS, _destroyAjaxRequest);
                _mfpOn('BeforeChange.' + AJAX_NS, _destroyAjaxRequest);
            },
            getAjax: function(item) {
                if (_ajaxCur) {
                    $(document.body).addClass(_ajaxCur);
                }
                mfp.updateStatus('loading');
                var opts = $.extend({
                    url: item.src,
                    success: function(data, textStatus, jqXHR) {
                        var temp = {
                            data: data,
                            xhr: jqXHR
                        };
                        _mfpTrigger('ParseAjax', temp);
                        mfp.appendContent($(temp.data), AJAX_NS);
                        item.finished = true;
                        _removeAjaxCursor();
                        mfp._setFocus();
                        setTimeout(function() {
                            mfp.wrap.addClass(READY_CLASS);
                        }, 16);
                        mfp.updateStatus('ready');
                        _mfpTrigger('AjaxContentAdded');
                    },
                    error: function() {
                        _removeAjaxCursor();
                        item.finished = item.loadError = true;
                        mfp.updateStatus('error', mfp.st.ajax.tError.replace('%url%', item.src));
                    }
                }, mfp.st.ajax.settings);
                mfp.req = $.ajax(opts);
                return '';
            }
        }
    });
    var _imgInterval, _getTitle = function(item) {
        if (item.data && item.data.title !== undefined)
            return item.data.title;
        var src = mfp.st.image.titleSrc;
        if (src) {
            if ($.isFunction(src)) {
                return src.call(mfp, item);
            } else if (item.el) {
                return item.el.attr(src) || '';
            }
        }
        return '';
    };
    $.magnificPopup.registerModule('image', {
        options: {
            markup: '<div class="mfp-figure">' + '<div class="mfp-close"></div>' + '<figure>' + '<div class="mfp-img"></div>' + '<figcaption>' + '<div class="mfp-bottom-bar">' + '<div class="mfp-title"></div>' + '<div class="mfp-counter"></div>' + '</div>' + '</figcaption>' + '</figure>' + '</div>',
            cursor: 'mfp-zoom-out-cur',
            titleSrc: 'title',
            verticalFit: true,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var imgSt = mfp.st.image
                  , ns = '.image';
                mfp.types.push('image');
                _mfpOn(OPEN_EVENT + ns, function() {
                    if (mfp.currItem.type === 'image' && imgSt.cursor) {
                        $(document.body).addClass(imgSt.cursor);
                    }
                });
                _mfpOn(CLOSE_EVENT + ns, function() {
                    if (imgSt.cursor) {
                        $(document.body).removeClass(imgSt.cursor);
                    }
                    _window.off('resize' + EVENT_NS);
                });
                _mfpOn('Resize' + ns, mfp.resizeImage);
                if (mfp.isLowIE) {
                    _mfpOn('AfterChange', mfp.resizeImage);
                }
            },
            resizeImage: function() {
                var item = mfp.currItem;
                if (!item || !item.img)
                    return;
                if (mfp.st.image.verticalFit) {
                    var decr = 0;
                    if (mfp.isLowIE) {
                        decr = parseInt(item.img.css('padding-top'), 10) + parseInt(item.img.css('padding-bottom'), 10);
                    }
                    item.img.css('max-height', mfp.wH - decr);
                }
            },
            _onImageHasSize: function(item) {
                if (item.img) {
                    item.hasSize = true;
                    if (_imgInterval) {
                        clearInterval(_imgInterval);
                    }
                    item.isCheckingImgSize = false;
                    _mfpTrigger('ImageHasSize', item);
                    if (item.imgHidden) {
                        if (mfp.content)
                            mfp.content.removeClass('mfp-loading');
                        item.imgHidden = false;
                    }
                }
            },
            findImageSize: function(item) {
                var counter = 0
                  , img = item.img[0]
                  , mfpSetInterval = function(delay) {
                    if (_imgInterval) {
                        clearInterval(_imgInterval);
                    }
                    _imgInterval = setInterval(function() {
                        if (img.naturalWidth > 0) {
                            mfp._onImageHasSize(item);
                            return;
                        }
                        if (counter > 200) {
                            clearInterval(_imgInterval);
                        }
                        counter++;
                        if (counter === 3) {
                            mfpSetInterval(10);
                        } else if (counter === 40) {
                            mfpSetInterval(50);
                        } else if (counter === 100) {
                            mfpSetInterval(500);
                        }
                    }, delay);
                };
                mfpSetInterval(1);
            },
            getImage: function(item, template) {
                var guard = 0
                  , onLoadComplete = function() {
                    if (item) {
                        if (item.img[0].complete) {
                            item.img.off('.mfploader');
                            if (item === mfp.currItem) {
                                mfp._onImageHasSize(item);
                                mfp.updateStatus('ready');
                            }
                            item.hasSize = true;
                            item.loaded = true;
                            _mfpTrigger('ImageLoadComplete');
                        } else {
                            guard++;
                            if (guard < 200) {
                                setTimeout(onLoadComplete, 100);
                            } else {
                                onLoadError();
                            }
                        }
                    }
                }
                  , onLoadError = function() {
                    if (item) {
                        item.img.off('.mfploader');
                        if (item === mfp.currItem) {
                            mfp._onImageHasSize(item);
                            mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src));
                        }
                        item.hasSize = true;
                        item.loaded = true;
                        item.loadError = true;
                    }
                }
                  , imgSt = mfp.st.image;
                var el = template.find('.mfp-img');
                if (el.length) {
                    var img = document.createElement('img');
                    img.className = 'mfp-img';
                    if (item.el && item.el.find('img').length) {
                        img.alt = item.el.find('img').attr('alt');
                    }
                    item.img = $(img).on('load.mfploader', onLoadComplete).on('error.mfploader', onLoadError);
                    img.src = item.src;
                    if (el.is('img')) {
                        item.img = item.img.clone();
                    }
                    img = item.img[0];
                    if (img.naturalWidth > 0) {
                        item.hasSize = true;
                    } else if (!img.width) {
                        item.hasSize = false;
                    }
                }
                mfp._parseMarkup(template, {
                    title: _getTitle(item),
                    img_replaceWith: item.img
                }, item);
                mfp.resizeImage();
                if (item.hasSize) {
                    if (_imgInterval)
                        clearInterval(_imgInterval);
                    if (item.loadError) {
                        template.addClass('mfp-loading');
                        mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src));
                    } else {
                        template.removeClass('mfp-loading');
                        mfp.updateStatus('ready');
                    }
                    return template;
                }
                mfp.updateStatus('loading');
                item.loading = true;
                if (!item.hasSize) {
                    item.imgHidden = true;
                    template.addClass('mfp-loading');
                    mfp.findImageSize(item);
                }
                return template;
            }
        }
    });
    var hasMozTransform, getHasMozTransform = function() {
        if (hasMozTransform === undefined) {
            hasMozTransform = document.createElement('p').style.MozTransform !== undefined;
        }
        return hasMozTransform;
    };
    $.magnificPopup.registerModule('zoom', {
        options: {
            enabled: false,
            easing: 'ease-in-out',
            duration: 300,
            opener: function(element) {
                return element.is('img') ? element : element.find('img');
            }
        },
        proto: {
            initZoom: function() {
                var zoomSt = mfp.st.zoom, ns = '.zoom', image;
                if (!zoomSt.enabled || !mfp.supportsTransition) {
                    return;
                }
                var duration = zoomSt.duration, getElToAnimate = function(image) {
                    var newImg = image.clone().removeAttr('style').removeAttr('class').addClass('mfp-animated-image')
                      , transition = 'all ' + (zoomSt.duration / 1000) + 's ' + zoomSt.easing
                      , cssObj = {
                        position: 'fixed',
                        zIndex: 9999,
                        left: 0,
                        top: 0,
                        '-webkit-backface-visibility': 'hidden'
                    }
                      , t = 'transition';
                    cssObj['-webkit-' + t] = cssObj['-moz-' + t] = cssObj['-o-' + t] = cssObj[t] = transition;
                    newImg.css(cssObj);
                    return newImg;
                }, showMainContent = function() {
                    mfp.content.css('visibility', 'visible');
                }, openTimeout, animatedImg;
                _mfpOn('BuildControls' + ns, function() {
                    if (mfp._allowZoom()) {
                        clearTimeout(openTimeout);
                        mfp.content.css('visibility', 'hidden');
                        image = mfp._getItemToZoom();
                        if (!image) {
                            showMainContent();
                            return;
                        }
                        animatedImg = getElToAnimate(image);
                        animatedImg.css(mfp._getOffset());
                        mfp.wrap.append(animatedImg);
                        openTimeout = setTimeout(function() {
                            animatedImg.css(mfp._getOffset(true));
                            openTimeout = setTimeout(function() {
                                showMainContent();
                                setTimeout(function() {
                                    animatedImg.remove();
                                    image = animatedImg = null;
                                    _mfpTrigger('ZoomAnimationEnded');
                                }, 16);
                            }, duration);
                        }, 16);
                    }
                });
                _mfpOn(BEFORE_CLOSE_EVENT + ns, function() {
                    if (mfp._allowZoom()) {
                        clearTimeout(openTimeout);
                        mfp.st.removalDelay = duration;
                        if (!image) {
                            image = mfp._getItemToZoom();
                            if (!image) {
                                return;
                            }
                            animatedImg = getElToAnimate(image);
                        }
                        animatedImg.css(mfp._getOffset(true));
                        mfp.wrap.append(animatedImg);
                        mfp.content.css('visibility', 'hidden');
                        setTimeout(function() {
                            animatedImg.css(mfp._getOffset());
                        }, 16);
                    }
                });
                _mfpOn(CLOSE_EVENT + ns, function() {
                    if (mfp._allowZoom()) {
                        showMainContent();
                        if (animatedImg) {
                            animatedImg.remove();
                        }
                        image = null;
                    }
                });
            },
            _allowZoom: function() {
                return mfp.currItem.type === 'image';
            },
            _getItemToZoom: function() {
                if (mfp.currItem.hasSize) {
                    return mfp.currItem.img;
                } else {
                    return false;
                }
            },
            _getOffset: function(isLarge) {
                var el;
                if (isLarge) {
                    el = mfp.currItem.img;
                } else {
                    el = mfp.st.zoom.opener(mfp.currItem.el || mfp.currItem);
                }
                var offset = el.offset();
                var paddingTop = parseInt(el.css('padding-top'), 10);
                var paddingBottom = parseInt(el.css('padding-bottom'), 10);
                offset.top -= ($(window).scrollTop() - paddingTop);
                var obj = {
                    width: el.width(),
                    height: (_isJQ ? el.innerHeight() : el[0].offsetHeight) - paddingBottom - paddingTop
                };
                if (getHasMozTransform()) {
                    obj['-moz-transform'] = obj['transform'] = 'translate(' + offset.left + 'px,' + offset.top + 'px)';
                } else {
                    obj.left = offset.left;
                    obj.top = offset.top;
                }
                return obj;
            }
        }
    });
    var IFRAME_NS = 'iframe'
      , _emptyPage = '//about:blank'
      , _fixIframeBugs = function(isShowing) {
        if (mfp.currTemplate[IFRAME_NS]) {
            var el = mfp.currTemplate[IFRAME_NS].find('iframe');
            if (el.length) {
                if (!isShowing) {
                    el[0].src = _emptyPage;
                }
                if (mfp.isIE8) {
                    el.css('display', isShowing ? 'block' : 'none');
                }
            }
        }
    };
    $.magnificPopup.registerModule(IFRAME_NS, {
        options: {
            markup: '<div class="mfp-iframe-scaler">' + '<div class="mfp-close"></div>' + '<iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe>' + '</div>',
            srcAction: 'iframe_src',
            patterns: {
                youtube: {
                    index: 'youtube.com',
                    id: 'v=',
                    src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                },
                vimeo: {
                    index: 'vimeo.com/',
                    id: '/',
                    src: 'https://player.vimeo.com/video/%id%?autoplay=1'
                },
                gmaps: {
                    index: '//maps.google.',
                    src: '%id%&output=embed'
                }
            }
        },
        proto: {
            initIframe: function() {
                mfp.types.push(IFRAME_NS);
                _mfpOn('BeforeChange', function(e, prevType, newType) {
                    if (prevType !== newType) {
                        if (prevType === IFRAME_NS) {
                            _fixIframeBugs();
                        } else if (newType === IFRAME_NS) {
                            _fixIframeBugs(true);
                        }
                    }
                });
                _mfpOn(CLOSE_EVENT + '.' + IFRAME_NS, function() {
                    _fixIframeBugs();
                });
            },
            getIframe: function(item, template) {
                var embedSrc = item.src;
                var iframeSt = mfp.st.iframe;
                $.each(iframeSt.patterns, function() {
                    if (embedSrc.indexOf(this.index) > -1) {
                        if (this.id) {
                            if (typeof this.id === 'string') {
                                embedSrc = embedSrc.substr(embedSrc.lastIndexOf(this.id) + this.id.length, embedSrc.length);
                            } else {
                                embedSrc = this.id.call(this, embedSrc);
                            }
                        }
                        embedSrc = this.src.replace('%id%', embedSrc);
                        return false;
                    }
                });
                var dataObj = {};
                if (iframeSt.srcAction) {
                    dataObj[iframeSt.srcAction] = embedSrc;
                }
                mfp._parseMarkup(template, dataObj, item);
                mfp.updateStatus('ready');
                return template;
            }
        }
    });
    var _getLoopedId = function(index) {
        var numSlides = mfp.items.length;
        if (index > numSlides - 1) {
            return index - numSlides;
        } else if (index < 0) {
            return numSlides + index;
        }
        return index;
    }
      , _replaceCurrTotal = function(text, curr, total) {
        return text.replace(/%curr%/gi, curr + 1).replace(/%total%/gi, total);
    };
    $.magnificPopup.registerModule('gallery', {
        options: {
            enabled: false,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: true,
            arrows: true,
            tPrev: 'Previous (Left arrow key)',
            tNext: 'Next (Right arrow key)',
            tCounter: '%curr% of %total%'
        },
        proto: {
            initGallery: function() {
                var gSt = mfp.st.gallery
                  , ns = '.mfp-gallery';
                mfp.direction = true;
                if (!gSt || !gSt.enabled)
                    return false;
                _wrapClasses += ' mfp-gallery';
                _mfpOn(OPEN_EVENT + ns, function() {
                    if (gSt.navigateByImgClick) {
                        mfp.wrap.on('click' + ns, '.mfp-img', function() {
                            if (mfp.items.length > 1) {
                                mfp.next();
                                return false;
                            }
                        });
                    }
                    _document.on('keydown' + ns, function(e) {
                        if (e.keyCode === 37) {
                            mfp.prev();
                        } else if (e.keyCode === 39) {
                            mfp.next();
                        }
                    });
                });
                _mfpOn('UpdateStatus' + ns, function(e, data) {
                    if (data.text) {
                        data.text = _replaceCurrTotal(data.text, mfp.currItem.index, mfp.items.length);
                    }
                });
                _mfpOn(MARKUP_PARSE_EVENT + ns, function(e, element, values, item) {
                    var l = mfp.items.length;
                    values.counter = l > 1 ? _replaceCurrTotal(gSt.tCounter, item.index, l) : '';
                });
                _mfpOn('BuildControls' + ns, function() {
                    if (mfp.items.length > 1 && gSt.arrows && !mfp.arrowLeft) {
                        var markup = gSt.arrowMarkup
                          , arrowLeft = mfp.arrowLeft = $(markup.replace(/%title%/gi, gSt.tPrev).replace(/%dir%/gi, 'left')).addClass(PREVENT_CLOSE_CLASS)
                          , arrowRight = mfp.arrowRight = $(markup.replace(/%title%/gi, gSt.tNext).replace(/%dir%/gi, 'right')).addClass(PREVENT_CLOSE_CLASS);
                        arrowLeft.click(function() {
                            mfp.prev();
                        });
                        arrowRight.click(function() {
                            mfp.next();
                        });
                        mfp.container.append(arrowLeft.add(arrowRight));
                    }
                });
                _mfpOn(CHANGE_EVENT + ns, function() {
                    if (mfp._preloadTimeout)
                        clearTimeout(mfp._preloadTimeout);
                    mfp._preloadTimeout = setTimeout(function() {
                        mfp.preloadNearbyImages();
                        mfp._preloadTimeout = null;
                    }, 16);
                });
                _mfpOn(CLOSE_EVENT + ns, function() {
                    _document.off(ns);
                    mfp.wrap.off('click' + ns);
                    mfp.arrowRight = mfp.arrowLeft = null;
                });
            },
            next: function() {
                mfp.direction = true;
                mfp.index = _getLoopedId(mfp.index + 1);
                mfp.updateItemHTML();
            },
            prev: function() {
                mfp.direction = false;
                mfp.index = _getLoopedId(mfp.index - 1);
                mfp.updateItemHTML();
            },
            goTo: function(newIndex) {
                mfp.direction = (newIndex >= mfp.index);
                mfp.index = newIndex;
                mfp.updateItemHTML();
            },
            preloadNearbyImages: function() {
                var p = mfp.st.gallery.preload, preloadBefore = Math.min(p[0], mfp.items.length), preloadAfter = Math.min(p[1], mfp.items.length), i;
                for (i = 1; i <= (mfp.direction ? preloadAfter : preloadBefore); i++) {
                    mfp._preloadItem(mfp.index + i);
                }
                for (i = 1; i <= (mfp.direction ? preloadBefore : preloadAfter); i++) {
                    mfp._preloadItem(mfp.index - i);
                }
            },
            _preloadItem: function(index) {
                index = _getLoopedId(index);
                if (mfp.items[index].preloaded) {
                    return;
                }
                var item = mfp.items[index];
                if (!item.parsed) {
                    item = mfp.parseEl(index);
                }
                _mfpTrigger('LazyLoad', item);
                if (item.type === 'image') {
                    item.img = $('<img class="mfp-img" />').on('load.mfploader', function() {
                        item.hasSize = true;
                    }).on('error.mfploader', function() {
                        item.hasSize = true;
                        item.loadError = true;
                        _mfpTrigger('LazyLoadError', item);
                    }).attr('src', item.src);
                }
                item.preloaded = true;
            }
        }
    });
    var RETINA_NS = 'retina';
    $.magnificPopup.registerModule(RETINA_NS, {
        options: {
            replaceSrc: function(item) {
                return item.src.replace(/\.\w+$/, function(m) {
                    return '@2x' + m;
                });
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var st = mfp.st.retina
                      , ratio = st.ratio;
                    ratio = !isNaN(ratio) ? ratio : ratio();
                    if (ratio > 1) {
                        _mfpOn('ImageHasSize' + '.' + RETINA_NS, function(e, item) {
                            item.img.css({
                                'max-width': item.img[0].naturalWidth / ratio,
                                'width': '100%'
                            });
                        });
                        _mfpOn('ElementParse' + '.' + RETINA_NS, function(e, item) {
                            item.src = st.replaceSrc(item, ratio);
                        });
                    }
                }
            }
        }
    });
    _checkInstance();
}));
/*! This file is auto-generated */
/*!
 * imagesLoaded PACKAGED v5.0.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
!function(t, e) {
    "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, (function() {
    function t() {}
    let e = t.prototype;
    return e.on = function(t, e) {
        if (!t || !e)
            return this;
        let i = this._events = this._events || {}
          , s = i[t] = i[t] || [];
        return s.includes(e) || s.push(e),
        this
    }
    ,
    e.once = function(t, e) {
        if (!t || !e)
            return this;
        this.on(t, e);
        let i = this._onceEvents = this._onceEvents || {};
        return (i[t] = i[t] || {})[e] = !0,
        this
    }
    ,
    e.off = function(t, e) {
        let i = this._events && this._events[t];
        if (!i || !i.length)
            return this;
        let s = i.indexOf(e);
        return -1 != s && i.splice(s, 1),
        this
    }
    ,
    e.emitEvent = function(t, e) {
        let i = this._events && this._events[t];
        if (!i || !i.length)
            return this;
        i = i.slice(0),
        e = e || [];
        let s = this._onceEvents && this._onceEvents[t];
        for (let n of i) {
            s && s[n] && (this.off(t, n),
            delete s[n]),
            n.apply(this, e)
        }
        return this
    }
    ,
    e.allOff = function() {
        return delete this._events,
        delete this._onceEvents,
        this
    }
    ,
    t
}
)),
/*!
 * imagesLoaded v5.0.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
function(t, e) {
    "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter)
}("undefined" != typeof window ? window : this, (function(t, e) {
    let i = t.jQuery
      , s = t.console;
    function n(t, e, o) {
        if (!(this instanceof n))
            return new n(t,e,o);
        let r = t;
        var h;
        ("string" == typeof t && (r = document.querySelectorAll(t)),
        r) ? (this.elements = (h = r,
        Array.isArray(h) ? h : "object" == typeof h && "number" == typeof h.length ? [...h] : [h]),
        this.options = {},
        "function" == typeof e ? o = e : Object.assign(this.options, e),
        o && this.on("always", o),
        this.getImages(),
        i && (this.jqDeferred = new i.Deferred),
        setTimeout(this.check.bind(this))) : s.error(`Bad element for imagesLoaded ${r || t}`)
    }
    n.prototype = Object.create(e.prototype),
    n.prototype.getImages = function() {
        this.images = [],
        this.elements.forEach(this.addElementImages, this)
    }
    ;
    const o = [1, 9, 11];
    n.prototype.addElementImages = function(t) {
        "IMG" === t.nodeName && this.addImage(t),
        !0 === this.options.background && this.addElementBackgroundImages(t);
        let {nodeType: e} = t;
        if (!e || !o.includes(e))
            return;
        let i = t.querySelectorAll("img");
        for (let t of i)
            this.addImage(t);
        if ("string" == typeof this.options.background) {
            let e = t.querySelectorAll(this.options.background);
            for (let t of e)
                this.addElementBackgroundImages(t)
        }
    }
    ;
    const r = /url\((['"])?(.*?)\1\)/gi;
    function h(t) {
        this.img = t
    }
    function d(t, e) {
        this.url = t,
        this.element = e,
        this.img = new Image
    }
    return n.prototype.addElementBackgroundImages = function(t) {
        let e = getComputedStyle(t);
        if (!e)
            return;
        let i = r.exec(e.backgroundImage);
        for (; null !== i; ) {
            let s = i && i[2];
            s && this.addBackground(s, t),
            i = r.exec(e.backgroundImage)
        }
    }
    ,
    n.prototype.addImage = function(t) {
        let e = new h(t);
        this.images.push(e)
    }
    ,
    n.prototype.addBackground = function(t, e) {
        let i = new d(t,e);
        this.images.push(i)
    }
    ,
    n.prototype.check = function() {
        if (this.progressedCount = 0,
        this.hasAnyBroken = !1,
        !this.images.length)
            return void this.complete();
        let t = (t,e,i)=>{
            setTimeout((()=>{
                this.progress(t, e, i)
            }
            ))
        }
        ;
        this.images.forEach((function(e) {
            e.once("progress", t),
            e.check()
        }
        ))
    }
    ,
    n.prototype.progress = function(t, e, i) {
        this.progressedCount++,
        this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded,
        this.emitEvent("progress", [this, t, e]),
        this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t),
        this.progressedCount === this.images.length && this.complete(),
        this.options.debug && s && s.log(`progress: ${i}`, t, e)
    }
    ,
    n.prototype.complete = function() {
        let t = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0,
        this.emitEvent(t, [this]),
        this.emitEvent("always", [this]),
        this.jqDeferred) {
            let t = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[t](this)
        }
    }
    ,
    h.prototype = Object.create(e.prototype),
    h.prototype.check = function() {
        this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image,
        this.img.crossOrigin && (this.proxyImage.crossOrigin = this.img.crossOrigin),
        this.proxyImage.addEventListener("load", this),
        this.proxyImage.addEventListener("error", this),
        this.img.addEventListener("load", this),
        this.img.addEventListener("error", this),
        this.proxyImage.src = this.img.currentSrc || this.img.src)
    }
    ,
    h.prototype.getIsImageComplete = function() {
        return this.img.complete && this.img.naturalWidth
    }
    ,
    h.prototype.confirm = function(t, e) {
        this.isLoaded = t;
        let {parentNode: i} = this.img
          , s = "PICTURE" === i.nodeName ? i : this.img;
        this.emitEvent("progress", [this, s, e])
    }
    ,
    h.prototype.handleEvent = function(t) {
        let e = "on" + t.type;
        this[e] && this[e](t)
    }
    ,
    h.prototype.onload = function() {
        this.confirm(!0, "onload"),
        this.unbindEvents()
    }
    ,
    h.prototype.onerror = function() {
        this.confirm(!1, "onerror"),
        this.unbindEvents()
    }
    ,
    h.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this),
        this.proxyImage.removeEventListener("error", this),
        this.img.removeEventListener("load", this),
        this.img.removeEventListener("error", this)
    }
    ,
    d.prototype = Object.create(h.prototype),
    d.prototype.check = function() {
        this.img.addEventListener("load", this),
        this.img.addEventListener("error", this),
        this.img.src = this.url,
        this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
        this.unbindEvents())
    }
    ,
    d.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this),
        this.img.removeEventListener("error", this)
    }
    ,
    d.prototype.confirm = function(t, e) {
        this.isLoaded = t,
        this.emitEvent("progress", [this, this.element, e])
    }
    ,
    n.makeJQueryPlugin = function(e) {
        (e = e || t.jQuery) && (i = e,
        i.fn.imagesLoaded = function(t, e) {
            return new n(this,t,e).jqDeferred.promise(i(this))
        }
        )
    }
    ,
    n.makeJQueryPlugin(),
    n
}
));
/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */
(function(window, factory) {
    if (typeof define == 'function' && define.amd) {
        define('jquery-bridget/jquery-bridget', ['jquery'], function(jQuery) {
            return factory(window, jQuery);
        });
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory(window, require('jquery'));
    } else {
        window.jQueryBridget = factory(window, window.jQuery);
    }
}(window, function factory(window, jQuery) {
    'use strict';
    var arraySlice = Array.prototype.slice;
    var console = window.console;
    var logError = typeof console == 'undefined' ? function() {}
    : function(message) {
        console.error(message);
    }
    ;
    function jQueryBridget(namespace, PluginClass, $) {
        $ = $ || jQuery || window.jQuery;
        if (!$) {
            return;
        }
        if (!PluginClass.prototype.option) {
            PluginClass.prototype.option = function(opts) {
                if (!$.isPlainObject(opts)) {
                    return;
                }
                this.options = $.extend(true, this.options, opts);
            }
            ;
        }
        $.fn[namespace] = function(arg0) {
            if (typeof arg0 == 'string') {
                var args = arraySlice.call(arguments, 1);
                return methodCall(this, arg0, args);
            }
            plainCall(this, arg0);
            return this;
        }
        ;
        function methodCall($elems, methodName, args) {
            var returnValue;
            var pluginMethodStr = '$().' + namespace + '("' + methodName + '")';
            $elems.each(function(i, elem) {
                var instance = $.data(elem, namespace);
                if (!instance) {
                    logError(namespace + ' not initialized. Cannot call methods, i.e. ' + pluginMethodStr);
                    return;
                }
                var method = instance[methodName];
                if (!method || methodName.charAt(0) == '_') {
                    logError(pluginMethodStr + ' is not a valid method');
                    return;
                }
                var value = method.apply(instance, args);
                returnValue = returnValue === undefined ? value : returnValue;
            });
            return returnValue !== undefined ? returnValue : $elems;
        }
        function plainCall($elems, options) {
            $elems.each(function(i, elem) {
                var instance = $.data(elem, namespace);
                if (instance) {
                    instance.option(options);
                    instance._init();
                } else {
                    instance = new PluginClass(elem,options);
                    $.data(elem, namespace, instance);
                }
            });
        }
        updateJQuery($);
    }
    function updateJQuery($) {
        if (!$ || ($ && $.bridget)) {
            return;
        }
        $.bridget = jQueryBridget;
    }
    updateJQuery(jQuery || window.jQuery);
    return jQueryBridget;
}));
(function(global, factory) {
    if (typeof define == 'function' && define.amd) {
        define('ev-emitter/ev-emitter', factory);
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory();
    } else {
        global.EvEmitter = factory();
    }
}(typeof window != 'undefined' ? window : this, function() {
    function EvEmitter() {}
    var proto = EvEmitter.prototype;
    proto.on = function(eventName, listener) {
        if (!eventName || !listener) {
            return;
        }
        var events = this._events = this._events || {};
        var listeners = events[eventName] = events[eventName] || [];
        if (listeners.indexOf(listener) == -1) {
            listeners.push(listener);
        }
        return this;
    }
    ;
    proto.once = function(eventName, listener) {
        if (!eventName || !listener) {
            return;
        }
        this.on(eventName, listener);
        var onceEvents = this._onceEvents = this._onceEvents || {};
        var onceListeners = onceEvents[eventName] = onceEvents[eventName] || {};
        onceListeners[listener] = true;
        return this;
    }
    ;
    proto.off = function(eventName, listener) {
        var listeners = this._events && this._events[eventName];
        if (!listeners || !listeners.length) {
            return;
        }
        var index = listeners.indexOf(listener);
        if (index != -1) {
            listeners.splice(index, 1);
        }
        return this;
    }
    ;
    proto.emitEvent = function(eventName, args) {
        var listeners = this._events && this._events[eventName];
        if (!listeners || !listeners.length) {
            return;
        }
        listeners = listeners.slice(0);
        args = args || [];
        var onceListeners = this._onceEvents && this._onceEvents[eventName];
        for (var i = 0; i < listeners.length; i++) {
            var listener = listeners[i]
            var isOnce = onceListeners && onceListeners[listener];
            if (isOnce) {
                this.off(eventName, listener);
                delete onceListeners[listener];
            }
            listener.apply(this, args);
        }
        return this;
    }
    ;
    proto.allOff = function() {
        delete this._events;
        delete this._onceEvents;
    }
    ;
    return EvEmitter;
}));
/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */
(function(window, factory) {
    if (typeof define == 'function' && define.amd) {
        define('get-size/get-size', factory);
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory();
    } else {
        window.getSize = factory();
    }
}
)(window, function factory() {
    'use strict';
    function getStyleSize(value) {
        var num = parseFloat(value);
        var isValid = value.indexOf('%') == -1 && !isNaN(num);
        return isValid && num;
    }
    function noop() {}
    var logError = typeof console == 'undefined' ? noop : function(message) {
        console.error(message);
    }
    ;
    var measurements = ['paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom', 'marginLeft', 'marginRight', 'marginTop', 'marginBottom', 'borderLeftWidth', 'borderRightWidth', 'borderTopWidth', 'borderBottomWidth'];
    var measurementsLength = measurements.length;
    function getZeroSize() {
        var size = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        };
        for (var i = 0; i < measurementsLength; i++) {
            var measurement = measurements[i];
            size[measurement] = 0;
        }
        return size;
    }
    function getStyle(elem) {
        var style = getComputedStyle(elem);
        if (!style) {
            logError('Style returned ' + style + '. Are you running this code in a hidden iframe on Firefox? ' + 'See https://bit.ly/getsizebug1');
        }
        return style;
    }
    var isSetup = false;
    var isBoxSizeOuter;
    function setup() {
        if (isSetup) {
            return;
        }
        isSetup = true;
        var div = document.createElement('div');
        div.style.width = '200px';
        div.style.padding = '1px 2px 3px 4px';
        div.style.borderStyle = 'solid';
        div.style.borderWidth = '1px 2px 3px 4px';
        div.style.boxSizing = 'border-box';
        var body = document.body || document.documentElement;
        body.appendChild(div);
        var style = getStyle(div);
        isBoxSizeOuter = Math.round(getStyleSize(style.width)) == 200;
        getSize.isBoxSizeOuter = isBoxSizeOuter;
        body.removeChild(div);
    }
    function getSize(elem) {
        setup();
        if (typeof elem == 'string') {
            elem = document.querySelector(elem);
        }
        if (!elem || typeof elem != 'object' || !elem.nodeType) {
            return;
        }
        var style = getStyle(elem);
        if (style.display == 'none') {
            return getZeroSize();
        }
        var size = {};
        size.width = elem.offsetWidth;
        size.height = elem.offsetHeight;
        var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';
        for (var i = 0; i < measurementsLength; i++) {
            var measurement = measurements[i];
            var value = style[measurement];
            var num = parseFloat(value);
            size[measurement] = !isNaN(num) ? num : 0;
        }
        var paddingWidth = size.paddingLeft + size.paddingRight;
        var paddingHeight = size.paddingTop + size.paddingBottom;
        var marginWidth = size.marginLeft + size.marginRight;
        var marginHeight = size.marginTop + size.marginBottom;
        var borderWidth = size.borderLeftWidth + size.borderRightWidth;
        var borderHeight = size.borderTopWidth + size.borderBottomWidth;
        var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;
        var styleWidth = getStyleSize(style.width);
        if (styleWidth !== false) {
            size.width = styleWidth + (isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth);
        }
        var styleHeight = getStyleSize(style.height);
        if (styleHeight !== false) {
            size.height = styleHeight + (isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight);
        }
        size.innerWidth = size.width - (paddingWidth + borderWidth);
        size.innerHeight = size.height - (paddingHeight + borderHeight);
        size.outerWidth = size.width + marginWidth;
        size.outerHeight = size.height + marginHeight;
        return size;
    }
    return getSize;
});
(function(window, factory) {
    'use strict';
    if (typeof define == 'function' && define.amd) {
        define('desandro-matches-selector/matches-selector', factory);
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory();
    } else {
        window.matchesSelector = factory();
    }
}(window, function factory() {
    'use strict';
    var matchesMethod = (function() {
        var ElemProto = window.Element.prototype;
        if (ElemProto.matches) {
            return 'matches';
        }
        if (ElemProto.matchesSelector) {
            return 'matchesSelector';
        }
        var prefixes = ['webkit', 'moz', 'ms', 'o'];
        for (var i = 0; i < prefixes.length; i++) {
            var prefix = prefixes[i];
            var method = prefix + 'MatchesSelector';
            if (ElemProto[method]) {
                return method;
            }
        }
    }
    )();
    return function matchesSelector(elem, selector) {
        return elem[matchesMethod](selector);
    }
    ;
}));
(function(window, factory) {
    if (typeof define == 'function' && define.amd) {
        define('fizzy-ui-utils/utils', ['desandro-matches-selector/matches-selector'], function(matchesSelector) {
            return factory(window, matchesSelector);
        });
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory(window, require('desandro-matches-selector'));
    } else {
        window.fizzyUIUtils = factory(window, window.matchesSelector);
    }
}(window, function factory(window, matchesSelector) {
    var utils = {};
    utils.extend = function(a, b) {
        for (var prop in b) {
            a[prop] = b[prop];
        }
        return a;
    }
    ;
    utils.modulo = function(num, div) {
        return ((num % div) + div) % div;
    }
    ;
    var arraySlice = Array.prototype.slice;
    utils.makeArray = function(obj) {
        if (Array.isArray(obj)) {
            return obj;
        }
        if (obj === null || obj === undefined) {
            return [];
        }
        var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
        if (isArrayLike) {
            return arraySlice.call(obj);
        }
        return [obj];
    }
    ;
    utils.removeFrom = function(ary, obj) {
        var index = ary.indexOf(obj);
        if (index != -1) {
            ary.splice(index, 1);
        }
    }
    ;
    utils.getParent = function(elem, selector) {
        while (elem.parentNode && elem != document.body) {
            elem = elem.parentNode;
            if (matchesSelector(elem, selector)) {
                return elem;
            }
        }
    }
    ;
    utils.getQueryElement = function(elem) {
        if (typeof elem == 'string') {
            return document.querySelector(elem);
        }
        return elem;
    }
    ;
    utils.handleEvent = function(event) {
        var method = 'on' + event.type;
        if (this[method]) {
            this[method](event);
        }
    }
    ;
    utils.filterFindElements = function(elems, selector) {
        elems = utils.makeArray(elems);
        var ffElems = [];
        elems.forEach(function(elem) {
            if (!(elem instanceof HTMLElement)) {
                return;
            }
            if (!selector) {
                ffElems.push(elem);
                return;
            }
            if (matchesSelector(elem, selector)) {
                ffElems.push(elem);
            }
            var childElems = elem.querySelectorAll(selector);
            for (var i = 0; i < childElems.length; i++) {
                ffElems.push(childElems[i]);
            }
        });
        return ffElems;
    }
    ;
    utils.debounceMethod = function(_class, methodName, threshold) {
        threshold = threshold || 100;
        var method = _class.prototype[methodName];
        var timeoutName = methodName + 'Timeout';
        _class.prototype[methodName] = function() {
            var timeout = this[timeoutName];
            clearTimeout(timeout);
            var args = arguments;
            var _this = this;
            this[timeoutName] = setTimeout(function() {
                method.apply(_this, args);
                delete _this[timeoutName];
            }, threshold);
        }
        ;
    }
    ;
    utils.docReady = function(callback) {
        var readyState = document.readyState;
        if (readyState == 'complete' || readyState == 'interactive') {
            setTimeout(callback);
        } else {
            document.addEventListener('DOMContentLoaded', callback);
        }
    }
    ;
    utils.toDashed = function(str) {
        return str.replace(/(.)([A-Z])/g, function(match, $1, $2) {
            return $1 + '-' + $2;
        }).toLowerCase();
    }
    ;
    var console = window.console;
    utils.htmlInit = function(WidgetClass, namespace) {
        utils.docReady(function() {
            var dashedNamespace = utils.toDashed(namespace);
            var dataAttr = 'data-' + dashedNamespace;
            var dataAttrElems = document.querySelectorAll('[' + dataAttr + ']');
            var jsDashElems = document.querySelectorAll('.js-' + dashedNamespace);
            var elems = utils.makeArray(dataAttrElems).concat(utils.makeArray(jsDashElems));
            var dataOptionsAttr = dataAttr + '-options';
            var jQuery = window.jQuery;
            elems.forEach(function(elem) {
                var attr = elem.getAttribute(dataAttr) || elem.getAttribute(dataOptionsAttr);
                var options;
                try {
                    options = attr && JSON.parse(attr);
                } catch (error) {
                    if (console) {
                        console.error('Error parsing ' + dataAttr + ' on ' + elem.className + ': ' + error);
                    }
                    return;
                }
                var instance = new WidgetClass(elem,options);
                if (jQuery) {
                    jQuery.data(elem, namespace, instance);
                }
            });
        });
    }
    ;
    return utils;
}));
(function(window, factory) {
    if (typeof define == 'function' && define.amd) {
        define('outlayer/item', ['ev-emitter/ev-emitter', 'get-size/get-size'], factory);
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory(require('ev-emitter'), require('get-size'));
    } else {
        window.Outlayer = {};
        window.Outlayer.Item = factory(window.EvEmitter, window.getSize);
    }
}(window, function factory(EvEmitter, getSize) {
    'use strict';
    function isEmptyObj(obj) {
        for (var prop in obj) {
            return false;
        }
        prop = null;
        return true;
    }
    var docElemStyle = document.documentElement.style;
    var transitionProperty = typeof docElemStyle.transition == 'string' ? 'transition' : 'WebkitTransition';
    var transformProperty = typeof docElemStyle.transform == 'string' ? 'transform' : 'WebkitTransform';
    var transitionEndEvent = {
        WebkitTransition: 'webkitTransitionEnd',
        transition: 'transitionend'
    }[transitionProperty];
    var vendorProperties = {
        transform: transformProperty,
        transition: transitionProperty,
        transitionDuration: transitionProperty + 'Duration',
        transitionProperty: transitionProperty + 'Property',
        transitionDelay: transitionProperty + 'Delay'
    };
    function Item(element, layout) {
        if (!element) {
            return;
        }
        this.element = element;
        this.layout = layout;
        this.position = {
            x: 0,
            y: 0
        };
        this._create();
    }
    var proto = Item.prototype = Object.create(EvEmitter.prototype);
    proto.constructor = Item;
    proto._create = function() {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        };
        this.css({
            position: 'absolute'
        });
    }
    ;
    proto.handleEvent = function(event) {
        var method = 'on' + event.type;
        if (this[method]) {
            this[method](event);
        }
    }
    ;
    proto.getSize = function() {
        this.size = getSize(this.element);
    }
    ;
    proto.css = function(style) {
        var elemStyle = this.element.style;
        for (var prop in style) {
            var supportedProp = vendorProperties[prop] || prop;
            elemStyle[supportedProp] = style[prop];
        }
    }
    ;
    proto.getPosition = function() {
        var style = getComputedStyle(this.element);
        var isOriginLeft = this.layout._getOption('originLeft');
        var isOriginTop = this.layout._getOption('originTop');
        var xValue = style[isOriginLeft ? 'left' : 'right'];
        var yValue = style[isOriginTop ? 'top' : 'bottom'];
        var x = parseFloat(xValue);
        var y = parseFloat(yValue);
        var layoutSize = this.layout.size;
        if (xValue.indexOf('%') != -1) {
            x = (x / 100) * layoutSize.width;
        }
        if (yValue.indexOf('%') != -1) {
            y = (y / 100) * layoutSize.height;
        }
        x = isNaN(x) ? 0 : x;
        y = isNaN(y) ? 0 : y;
        x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
        y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;
        this.position.x = x;
        this.position.y = y;
    }
    ;
    proto.layoutPosition = function() {
        var layoutSize = this.layout.size;
        var style = {};
        var isOriginLeft = this.layout._getOption('originLeft');
        var isOriginTop = this.layout._getOption('originTop');
        var xPadding = isOriginLeft ? 'paddingLeft' : 'paddingRight';
        var xProperty = isOriginLeft ? 'left' : 'right';
        var xResetProperty = isOriginLeft ? 'right' : 'left';
        var x = this.position.x + layoutSize[xPadding];
        style[xProperty] = this.getXValue(x);
        style[xResetProperty] = '';
        var yPadding = isOriginTop ? 'paddingTop' : 'paddingBottom';
        var yProperty = isOriginTop ? 'top' : 'bottom';
        var yResetProperty = isOriginTop ? 'bottom' : 'top';
        var y = this.position.y + layoutSize[yPadding];
        style[yProperty] = this.getYValue(y);
        style[yResetProperty] = '';
        this.css(style);
        this.emitEvent('layout', [this]);
    }
    ;
    proto.getXValue = function(x) {
        var isHorizontal = this.layout._getOption('horizontal');
        return this.layout.options.percentPosition && !isHorizontal ? ((x / this.layout.size.width) * 100) + '%' : x + 'px';
    }
    ;
    proto.getYValue = function(y) {
        var isHorizontal = this.layout._getOption('horizontal');
        return this.layout.options.percentPosition && isHorizontal ? ((y / this.layout.size.height) * 100) + '%' : y + 'px';
    }
    ;
    proto._transitionTo = function(x, y) {
        this.getPosition();
        var curX = this.position.x;
        var curY = this.position.y;
        var didNotMove = x == this.position.x && y == this.position.y;
        this.setPosition(x, y);
        if (didNotMove && !this.isTransitioning) {
            this.layoutPosition();
            return;
        }
        var transX = x - curX;
        var transY = y - curY;
        var transitionStyle = {};
        transitionStyle.transform = this.getTranslate(transX, transY);
        this.transition({
            to: transitionStyle,
            onTransitionEnd: {
                transform: this.layoutPosition
            },
            isCleaning: true
        });
    }
    ;
    proto.getTranslate = function(x, y) {
        var isOriginLeft = this.layout._getOption('originLeft');
        var isOriginTop = this.layout._getOption('originTop');
        x = isOriginLeft ? x : -x;
        y = isOriginTop ? y : -y;
        return 'translate3d(' + x + 'px, ' + y + 'px, 0)';
    }
    ;
    proto.goTo = function(x, y) {
        this.setPosition(x, y);
        this.layoutPosition();
    }
    ;
    proto.moveTo = proto._transitionTo;
    proto.setPosition = function(x, y) {
        this.position.x = parseFloat(x);
        this.position.y = parseFloat(y);
    }
    ;
    proto._nonTransition = function(args) {
        this.css(args.to);
        if (args.isCleaning) {
            this._removeStyles(args.to);
        }
        for (var prop in args.onTransitionEnd) {
            args.onTransitionEnd[prop].call(this);
        }
    }
    ;
    proto.transition = function(args) {
        if (!parseFloat(this.layout.options.transitionDuration)) {
            this._nonTransition(args);
            return;
        }
        var _transition = this._transn;
        for (var prop in args.onTransitionEnd) {
            _transition.onEnd[prop] = args.onTransitionEnd[prop];
        }
        for (prop in args.to) {
            _transition.ingProperties[prop] = true;
            if (args.isCleaning) {
                _transition.clean[prop] = true;
            }
        }
        if (args.from) {
            this.css(args.from);
            var h = this.element.offsetHeight;
            h = null;
        }
        this.enableTransition(args.to);
        this.css(args.to);
        this.isTransitioning = true;
    }
    ;
    function toDashedAll(str) {
        return str.replace(/([A-Z])/g, function($1) {
            return '-' + $1.toLowerCase();
        });
    }
    var transitionProps = 'opacity,' + toDashedAll(transformProperty);
    proto.enableTransition = function() {
        if (this.isTransitioning) {
            return;
        }
        var duration = this.layout.options.transitionDuration;
        duration = typeof duration == 'number' ? duration + 'ms' : duration;
        this.css({
            transitionProperty: transitionProps,
            transitionDuration: duration,
            transitionDelay: this.staggerDelay || 0
        });
        this.element.addEventListener(transitionEndEvent, this, false);
    }
    ;
    proto.onwebkitTransitionEnd = function(event) {
        this.ontransitionend(event);
    }
    ;
    proto.onotransitionend = function(event) {
        this.ontransitionend(event);
    }
    ;
    var dashedVendorProperties = {
        '-webkit-transform': 'transform'
    };
    proto.ontransitionend = function(event) {
        if (event.target !== this.element) {
            return;
        }
        var _transition = this._transn;
        var propertyName = dashedVendorProperties[event.propertyName] || event.propertyName;
        delete _transition.ingProperties[propertyName];
        if (isEmptyObj(_transition.ingProperties)) {
            this.disableTransition();
        }
        if (propertyName in _transition.clean) {
            this.element.style[event.propertyName] = '';
            delete _transition.clean[propertyName];
        }
        if (propertyName in _transition.onEnd) {
            var onTransitionEnd = _transition.onEnd[propertyName];
            onTransitionEnd.call(this);
            delete _transition.onEnd[propertyName];
        }
        this.emitEvent('transitionEnd', [this]);
    }
    ;
    proto.disableTransition = function() {
        this.removeTransitionStyles();
        this.element.removeEventListener(transitionEndEvent, this, false);
        this.isTransitioning = false;
    }
    ;
    proto._removeStyles = function(style) {
        var cleanStyle = {};
        for (var prop in style) {
            cleanStyle[prop] = '';
        }
        this.css(cleanStyle);
    }
    ;
    var cleanTransitionStyle = {
        transitionProperty: '',
        transitionDuration: '',
        transitionDelay: ''
    };
    proto.removeTransitionStyles = function() {
        this.css(cleanTransitionStyle);
    }
    ;
    proto.stagger = function(delay) {
        delay = isNaN(delay) ? 0 : delay;
        this.staggerDelay = delay + 'ms';
    }
    ;
    proto.removeElem = function() {
        this.element.parentNode.removeChild(this.element);
        this.css({
            display: ''
        });
        this.emitEvent('remove', [this]);
    }
    ;
    proto.remove = function() {
        if (!transitionProperty || !parseFloat(this.layout.options.transitionDuration)) {
            this.removeElem();
            return;
        }
        this.once('transitionEnd', function() {
            this.removeElem();
        });
        this.hide();
    }
    ;
    proto.reveal = function() {
        delete this.isHidden;
        this.css({
            display: ''
        });
        var options = this.layout.options;
        var onTransitionEnd = {};
        var transitionEndProperty = this.getHideRevealTransitionEndProperty('visibleStyle');
        onTransitionEnd[transitionEndProperty] = this.onRevealTransitionEnd;
        this.transition({
            from: options.hiddenStyle,
            to: options.visibleStyle,
            isCleaning: true,
            onTransitionEnd: onTransitionEnd
        });
    }
    ;
    proto.onRevealTransitionEnd = function() {
        if (!this.isHidden) {
            this.emitEvent('reveal');
        }
    }
    ;
    proto.getHideRevealTransitionEndProperty = function(styleProperty) {
        var optionStyle = this.layout.options[styleProperty];
        if (optionStyle.opacity) {
            return 'opacity';
        }
        for (var prop in optionStyle) {
            return prop;
        }
    }
    ;
    proto.hide = function() {
        this.isHidden = true;
        this.css({
            display: ''
        });
        var options = this.layout.options;
        var onTransitionEnd = {};
        var transitionEndProperty = this.getHideRevealTransitionEndProperty('hiddenStyle');
        onTransitionEnd[transitionEndProperty] = this.onHideTransitionEnd;
        this.transition({
            from: options.visibleStyle,
            to: options.hiddenStyle,
            isCleaning: true,
            onTransitionEnd: onTransitionEnd
        });
    }
    ;
    proto.onHideTransitionEnd = function() {
        if (this.isHidden) {
            this.css({
                display: 'none'
            });
            this.emitEvent('hide');
        }
    }
    ;
    proto.destroy = function() {
        this.css({
            position: '',
            left: '',
            right: '',
            top: '',
            bottom: '',
            transition: '',
            transform: ''
        });
    }
    ;
    return Item;
}));
/*!
 * Outlayer v2.1.1
 * the brains and guts of a layout library
 * MIT license
 */
(function(window, factory) {
    'use strict';
    if (typeof define == 'function' && define.amd) {
        define('outlayer/outlayer', ['ev-emitter/ev-emitter', 'get-size/get-size', 'fizzy-ui-utils/utils', './item'], function(EvEmitter, getSize, utils, Item) {
            return factory(window, EvEmitter, getSize, utils, Item);
        });
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory(window, require('ev-emitter'), require('get-size'), require('fizzy-ui-utils'), require('./item'));
    } else {
        window.Outlayer = factory(window, window.EvEmitter, window.getSize, window.fizzyUIUtils, window.Outlayer.Item);
    }
}(window, function factory(window, EvEmitter, getSize, utils, Item) {
    'use strict';
    var console = window.console;
    var jQuery = window.jQuery;
    var noop = function() {};
    var GUID = 0;
    var instances = {};
    function Outlayer(element, options) {
        var queryElement = utils.getQueryElement(element);
        if (!queryElement) {
            if (console) {
                console.error('Bad element for ' + this.constructor.namespace + ': ' + (queryElement || element));
            }
            return;
        }
        this.element = queryElement;
        if (jQuery) {
            this.$element = jQuery(this.element);
        }
        this.options = utils.extend({}, this.constructor.defaults);
        this.option(options);
        var id = ++GUID;
        this.element.outlayerGUID = id;
        instances[id] = this;
        this._create();
        var isInitLayout = this._getOption('initLayout');
        if (isInitLayout) {
            this.layout();
        }
    }
    Outlayer.namespace = 'outlayer';
    Outlayer.Item = Item;
    Outlayer.defaults = {
        containerStyle: {
            position: 'relative'
        },
        initLayout: true,
        originLeft: true,
        originTop: true,
        resize: true,
        resizeContainer: true,
        transitionDuration: '0.4s',
        hiddenStyle: {
            opacity: 0,
            transform: 'scale(0.001)'
        },
        visibleStyle: {
            opacity: 1,
            transform: 'scale(1)'
        }
    };
    var proto = Outlayer.prototype;
    utils.extend(proto, EvEmitter.prototype);
    proto.option = function(opts) {
        utils.extend(this.options, opts);
    }
    ;
    proto._getOption = function(option) {
        var oldOption = this.constructor.compatOptions[option];
        return oldOption && this.options[oldOption] !== undefined ? this.options[oldOption] : this.options[option];
    }
    ;
    Outlayer.compatOptions = {
        initLayout: 'isInitLayout',
        horizontal: 'isHorizontal',
        layoutInstant: 'isLayoutInstant',
        originLeft: 'isOriginLeft',
        originTop: 'isOriginTop',
        resize: 'isResizeBound',
        resizeContainer: 'isResizingContainer'
    };
    proto._create = function() {
        this.reloadItems();
        this.stamps = [];
        this.stamp(this.options.stamp);
        utils.extend(this.element.style, this.options.containerStyle);
        var canBindResize = this._getOption('resize');
        if (canBindResize) {
            this.bindResize();
        }
    }
    ;
    proto.reloadItems = function() {
        this.items = this._itemize(this.element.children);
    }
    ;
    proto._itemize = function(elems) {
        var itemElems = this._filterFindItemElements(elems);
        var Item = this.constructor.Item;
        var items = [];
        for (var i = 0; i < itemElems.length; i++) {
            var elem = itemElems[i];
            var item = new Item(elem,this);
            items.push(item);
        }
        return items;
    }
    ;
    proto._filterFindItemElements = function(elems) {
        return utils.filterFindElements(elems, this.options.itemSelector);
    }
    ;
    proto.getItemElements = function() {
        return this.items.map(function(item) {
            return item.element;
        });
    }
    ;
    proto.layout = function() {
        this._resetLayout();
        this._manageStamps();
        var layoutInstant = this._getOption('layoutInstant');
        var isInstant = layoutInstant !== undefined ? layoutInstant : !this._isLayoutInited;
        this.layoutItems(this.items, isInstant);
        this._isLayoutInited = true;
    }
    ;
    proto._init = proto.layout;
    proto._resetLayout = function() {
        this.getSize();
    }
    ;
    proto.getSize = function() {
        this.size = getSize(this.element);
    }
    ;
    proto._getMeasurement = function(measurement, size) {
        var option = this.options[measurement];
        var elem;
        if (!option) {
            this[measurement] = 0;
        } else {
            if (typeof option == 'string') {
                elem = this.element.querySelector(option);
            } else if (option instanceof HTMLElement) {
                elem = option;
            }
            this[measurement] = elem ? getSize(elem)[size] : option;
        }
    }
    ;
    proto.layoutItems = function(items, isInstant) {
        items = this._getItemsForLayout(items);
        this._layoutItems(items, isInstant);
        this._postLayout();
    }
    ;
    proto._getItemsForLayout = function(items) {
        return items.filter(function(item) {
            return !item.isIgnored;
        });
    }
    ;
    proto._layoutItems = function(items, isInstant) {
        this._emitCompleteOnItems('layout', items);
        if (!items || !items.length) {
            return;
        }
        var queue = [];
        items.forEach(function(item) {
            var position = this._getItemLayoutPosition(item);
            position.item = item;
            position.isInstant = isInstant || item.isLayoutInstant;
            queue.push(position);
        }, this);
        this._processLayoutQueue(queue);
    }
    ;
    proto._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        };
    }
    ;
    proto._processLayoutQueue = function(queue) {
        this.updateStagger();
        queue.forEach(function(obj, i) {
            this._positionItem(obj.item, obj.x, obj.y, obj.isInstant, i);
        }, this);
    }
    ;
    proto.updateStagger = function() {
        var stagger = this.options.stagger;
        if (stagger === null || stagger === undefined) {
            this.stagger = 0;
            return;
        }
        this.stagger = getMilliseconds(stagger);
        return this.stagger;
    }
    ;
    proto._positionItem = function(item, x, y, isInstant, i) {
        if (isInstant) {
            item.goTo(x, y);
        } else {
            item.stagger(i * this.stagger);
            item.moveTo(x, y);
        }
    }
    ;
    proto._postLayout = function() {
        this.resizeContainer();
    }
    ;
    proto.resizeContainer = function() {
        var isResizingContainer = this._getOption('resizeContainer');
        if (!isResizingContainer) {
            return;
        }
        var size = this._getContainerSize();
        if (size) {
            this._setContainerMeasure(size.width, true);
            this._setContainerMeasure(size.height, false);
        }
    }
    ;
    proto._getContainerSize = noop;
    proto._setContainerMeasure = function(measure, isWidth) {
        if (measure === undefined) {
            return;
        }
        var elemSize = this.size;
        if (elemSize.isBorderBox) {
            measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight + elemSize.borderLeftWidth + elemSize.borderRightWidth : elemSize.paddingBottom + elemSize.paddingTop + elemSize.borderTopWidth + elemSize.borderBottomWidth;
        }
        measure = Math.max(measure, 0);
        this.element.style[isWidth ? 'width' : 'height'] = measure + 'px';
    }
    ;
    proto._emitCompleteOnItems = function(eventName, items) {
        var _this = this;
        function onComplete() {
            _this.dispatchEvent(eventName + 'Complete', null, [items]);
        }
        var count = items.length;
        if (!items || !count) {
            onComplete();
            return;
        }
        var doneCount = 0;
        function tick() {
            doneCount++;
            if (doneCount == count) {
                onComplete();
            }
        }
        items.forEach(function(item) {
            item.once(eventName, tick);
        });
    }
    ;
    proto.dispatchEvent = function(type, event, args) {
        var emitArgs = event ? [event].concat(args) : args;
        this.emitEvent(type, emitArgs);
        if (jQuery) {
            this.$element = this.$element || jQuery(this.element);
            if (event) {
                var $event = jQuery.Event(event);
                $event.type = type;
                this.$element.trigger($event, args);
            } else {
                this.$element.trigger(type, args);
            }
        }
    }
    ;
    proto.ignore = function(elem) {
        var item = this.getItem(elem);
        if (item) {
            item.isIgnored = true;
        }
    }
    ;
    proto.unignore = function(elem) {
        var item = this.getItem(elem);
        if (item) {
            delete item.isIgnored;
        }
    }
    ;
    proto.stamp = function(elems) {
        elems = this._find(elems);
        if (!elems) {
            return;
        }
        this.stamps = this.stamps.concat(elems);
        elems.forEach(this.ignore, this);
    }
    ;
    proto.unstamp = function(elems) {
        elems = this._find(elems);
        if (!elems) {
            return;
        }
        elems.forEach(function(elem) {
            utils.removeFrom(this.stamps, elem);
            this.unignore(elem);
        }, this);
    }
    ;
    proto._find = function(elems) {
        if (!elems) {
            return;
        }
        if (typeof elems == 'string') {
            elems = this.element.querySelectorAll(elems);
        }
        elems = utils.makeArray(elems);
        return elems;
    }
    ;
    proto._manageStamps = function() {
        if (!this.stamps || !this.stamps.length) {
            return;
        }
        this._getBoundingRect();
        this.stamps.forEach(this._manageStamp, this);
    }
    ;
    proto._getBoundingRect = function() {
        var boundingRect = this.element.getBoundingClientRect();
        var size = this.size;
        this._boundingRect = {
            left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
            top: boundingRect.top + size.paddingTop + size.borderTopWidth,
            right: boundingRect.right - (size.paddingRight + size.borderRightWidth),
            bottom: boundingRect.bottom - (size.paddingBottom + size.borderBottomWidth)
        };
    }
    ;
    proto._manageStamp = noop;
    proto._getElementOffset = function(elem) {
        var boundingRect = elem.getBoundingClientRect();
        var thisRect = this._boundingRect;
        var size = getSize(elem);
        var offset = {
            left: boundingRect.left - thisRect.left - size.marginLeft,
            top: boundingRect.top - thisRect.top - size.marginTop,
            right: thisRect.right - boundingRect.right - size.marginRight,
            bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
        };
        return offset;
    }
    ;
    proto.handleEvent = utils.handleEvent;
    proto.bindResize = function() {
        window.addEventListener('resize', this);
        this.isResizeBound = true;
    }
    ;
    proto.unbindResize = function() {
        window.removeEventListener('resize', this);
        this.isResizeBound = false;
    }
    ;
    proto.onresize = function() {
        this.resize();
    }
    ;
    utils.debounceMethod(Outlayer, 'onresize', 100);
    proto.resize = function() {
        if (!this.isResizeBound || !this.needsResizeLayout()) {
            return;
        }
        this.layout();
    }
    ;
    proto.needsResizeLayout = function() {
        var size = getSize(this.element);
        var hasSizes = this.size && size;
        return hasSizes && size.innerWidth !== this.size.innerWidth;
    }
    ;
    proto.addItems = function(elems) {
        var items = this._itemize(elems);
        if (items.length) {
            this.items = this.items.concat(items);
        }
        return items;
    }
    ;
    proto.appended = function(elems) {
        var items = this.addItems(elems);
        if (!items.length) {
            return;
        }
        this.layoutItems(items, true);
        this.reveal(items);
    }
    ;
    proto.prepended = function(elems) {
        var items = this._itemize(elems);
        if (!items.length) {
            return;
        }
        var previousItems = this.items.slice(0);
        this.items = items.concat(previousItems);
        this._resetLayout();
        this._manageStamps();
        this.layoutItems(items, true);
        this.reveal(items);
        this.layoutItems(previousItems);
    }
    ;
    proto.reveal = function(items) {
        this._emitCompleteOnItems('reveal', items);
        if (!items || !items.length) {
            return;
        }
        var stagger = this.updateStagger();
        items.forEach(function(item, i) {
            item.stagger(i * stagger);
            item.reveal();
        });
    }
    ;
    proto.hide = function(items) {
        this._emitCompleteOnItems('hide', items);
        if (!items || !items.length) {
            return;
        }
        var stagger = this.updateStagger();
        items.forEach(function(item, i) {
            item.stagger(i * stagger);
            item.hide();
        });
    }
    ;
    proto.revealItemElements = function(elems) {
        var items = this.getItems(elems);
        this.reveal(items);
    }
    ;
    proto.hideItemElements = function(elems) {
        var items = this.getItems(elems);
        this.hide(items);
    }
    ;
    proto.getItem = function(elem) {
        for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            if (item.element == elem) {
                return item;
            }
        }
    }
    ;
    proto.getItems = function(elems) {
        elems = utils.makeArray(elems);
        var items = [];
        elems.forEach(function(elem) {
            var item = this.getItem(elem);
            if (item) {
                items.push(item);
            }
        }, this);
        return items;
    }
    ;
    proto.remove = function(elems) {
        var removeItems = this.getItems(elems);
        this._emitCompleteOnItems('remove', removeItems);
        if (!removeItems || !removeItems.length) {
            return;
        }
        removeItems.forEach(function(item) {
            item.remove();
            utils.removeFrom(this.items, item);
        }, this);
    }
    ;
    proto.destroy = function() {
        var style = this.element.style;
        style.height = '';
        style.position = '';
        style.width = '';
        this.items.forEach(function(item) {
            item.destroy();
        });
        this.unbindResize();
        var id = this.element.outlayerGUID;
        delete instances[id];
        delete this.element.outlayerGUID;
        if (jQuery) {
            jQuery.removeData(this.element, this.constructor.namespace);
        }
    }
    ;
    Outlayer.data = function(elem) {
        elem = utils.getQueryElement(elem);
        var id = elem && elem.outlayerGUID;
        return id && instances[id];
    }
    ;
    Outlayer.create = function(namespace, options) {
        var Layout = subclass(Outlayer);
        Layout.defaults = utils.extend({}, Outlayer.defaults);
        utils.extend(Layout.defaults, options);
        Layout.compatOptions = utils.extend({}, Outlayer.compatOptions);
        Layout.namespace = namespace;
        Layout.data = Outlayer.data;
        Layout.Item = subclass(Item);
        utils.htmlInit(Layout, namespace);
        if (jQuery && jQuery.bridget) {
            jQuery.bridget(namespace, Layout);
        }
        return Layout;
    }
    ;
    function subclass(Parent) {
        function SubClass() {
            Parent.apply(this, arguments);
        }
        SubClass.prototype = Object.create(Parent.prototype);
        SubClass.prototype.constructor = SubClass;
        return SubClass;
    }
    var msUnits = {
        ms: 1,
        s: 1000
    };
    function getMilliseconds(time) {
        if (typeof time == 'number') {
            return time;
        }
        var matches = time.match(/(^\d*\.?\d*)(\w*)/);
        var num = matches && matches[1];
        var unit = matches && matches[2];
        if (!num.length) {
            return 0;
        }
        num = parseFloat(num);
        var mult = msUnits[unit] || 1;
        return num * mult;
    }
    Outlayer.Item = Item;
    return Outlayer;
}));
(function(window, factory) {
    if (typeof define == 'function' && define.amd) {
        define('isotope-layout/js/item', ['outlayer/outlayer'], factory);
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory(require('outlayer'));
    } else {
        window.Isotope = window.Isotope || {};
        window.Isotope.Item = factory(window.Outlayer);
    }
}(window, function factory(Outlayer) {
    'use strict';
    function Item() {
        Outlayer.Item.apply(this, arguments);
    }
    var proto = Item.prototype = Object.create(Outlayer.Item.prototype);
    var _create = proto._create;
    proto._create = function() {
        this.id = this.layout.itemGUID++;
        _create.call(this);
        this.sortData = {};
    }
    ;
    proto.updateSortData = function() {
        if (this.isIgnored) {
            return;
        }
        this.sortData.id = this.id;
        this.sortData['original-order'] = this.id;
        this.sortData.random = Math.random();
        var getSortData = this.layout.options.getSortData;
        var sorters = this.layout._sorters;
        for (var key in getSortData) {
            var sorter = sorters[key];
            this.sortData[key] = sorter(this.element, this);
        }
    }
    ;
    var _destroy = proto.destroy;
    proto.destroy = function() {
        _destroy.apply(this, arguments);
        this.css({
            display: ''
        });
    }
    ;
    return Item;
}));
(function(window, factory) {
    if (typeof define == 'function' && define.amd) {
        define('isotope-layout/js/layout-mode', ['get-size/get-size', 'outlayer/outlayer'], factory);
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory(require('get-size'), require('outlayer'));
    } else {
        window.Isotope = window.Isotope || {};
        window.Isotope.LayoutMode = factory(window.getSize, window.Outlayer);
    }
}(window, function factory(getSize, Outlayer) {
    'use strict';
    function LayoutMode(isotope) {
        this.isotope = isotope;
        if (isotope) {
            this.options = isotope.options[this.namespace];
            this.element = isotope.element;
            this.items = isotope.filteredItems;
            this.size = isotope.size;
        }
    }
    var proto = LayoutMode.prototype;
    var facadeMethods = ['_resetLayout', '_getItemLayoutPosition', '_manageStamp', '_getContainerSize', '_getElementOffset', 'needsResizeLayout', '_getOption'];
    facadeMethods.forEach(function(methodName) {
        proto[methodName] = function() {
            return Outlayer.prototype[methodName].apply(this.isotope, arguments);
        }
        ;
    });
    proto.needsVerticalResizeLayout = function() {
        var size = getSize(this.isotope.element);
        var hasSizes = this.isotope.size && size;
        return hasSizes && size.innerHeight != this.isotope.size.innerHeight;
    }
    ;
    proto._getMeasurement = function() {
        this.isotope._getMeasurement.apply(this, arguments);
    }
    ;
    proto.getColumnWidth = function() {
        this.getSegmentSize('column', 'Width');
    }
    ;
    proto.getRowHeight = function() {
        this.getSegmentSize('row', 'Height');
    }
    ;
    proto.getSegmentSize = function(segment, size) {
        var segmentName = segment + size;
        var outerSize = 'outer' + size;
        this._getMeasurement(segmentName, outerSize);
        if (this[segmentName]) {
            return;
        }
        var firstItemSize = this.getFirstItemSize();
        this[segmentName] = firstItemSize && firstItemSize[outerSize] || this.isotope.size['inner' + size];
    }
    ;
    proto.getFirstItemSize = function() {
        var firstItem = this.isotope.filteredItems[0];
        return firstItem && firstItem.element && getSize(firstItem.element);
    }
    ;
    proto.layout = function() {
        this.isotope.layout.apply(this.isotope, arguments);
    }
    ;
    proto.getSize = function() {
        this.isotope.getSize();
        this.size = this.isotope.size;
    }
    ;
    LayoutMode.modes = {};
    LayoutMode.create = function(namespace, options) {
        function Mode() {
            LayoutMode.apply(this, arguments);
        }
        Mode.prototype = Object.create(proto);
        Mode.prototype.constructor = Mode;
        if (options) {
            Mode.options = options;
        }
        Mode.prototype.namespace = namespace;
        LayoutMode.modes[namespace] = Mode;
        return Mode;
    }
    ;
    return LayoutMode;
}));
/*!
 * Masonry v4.2.1
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */
(function(window, factory) {
    if (typeof define == 'function' && define.amd) {
        define('masonry-layout/masonry', ['outlayer/outlayer', 'get-size/get-size'], factory);
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory(require('outlayer'), require('get-size'));
    } else {
        window.Masonry = factory(window.Outlayer, window.getSize);
    }
}(window, function factory(Outlayer, getSize) {
    var Masonry = Outlayer.create('masonry');
    Masonry.compatOptions.fitWidth = 'isFitWidth';
    var proto = Masonry.prototype;
    proto._resetLayout = function() {
        this.getSize();
        this._getMeasurement('columnWidth', 'outerWidth');
        this._getMeasurement('gutter', 'outerWidth');
        this.measureColumns();
        this.colYs = [];
        for (var i = 0; i < this.cols; i++) {
            this.colYs.push(0);
        }
        this.maxY = 0;
        this.horizontalColIndex = 0;
    }
    ;
    proto.measureColumns = function() {
        this.getContainerWidth();
        if (!this.columnWidth) {
            var firstItem = this.items[0];
            var firstItemElem = firstItem && firstItem.element;
            this.columnWidth = firstItemElem && getSize(firstItemElem).outerWidth || this.containerWidth;
        }
        var columnWidth = this.columnWidth += this.gutter;
        var containerWidth = this.containerWidth + this.gutter;
        var cols = containerWidth / columnWidth;
        var excess = columnWidth - containerWidth % columnWidth;
        var mathMethod = excess && excess < 1 ? 'round' : 'floor';
        cols = Math[mathMethod](cols);
        this.cols = Math.max(cols, 1);
    }
    ;
    proto.getContainerWidth = function() {
        var isFitWidth = this._getOption('fitWidth');
        var container = isFitWidth ? this.element.parentNode : this.element;
        var size = getSize(container);
        this.containerWidth = size && size.innerWidth;
    }
    ;
    proto._getItemLayoutPosition = function(item) {
        item.getSize();
        var remainder = item.size.outerWidth % this.columnWidth;
        var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil';
        var colSpan = Math[mathMethod](item.size.outerWidth / this.columnWidth);
        colSpan = Math.min(colSpan, this.cols);
        var colPosMethod = this.options.horizontalOrder ? '_getHorizontalColPosition' : '_getTopColPosition';
        var colPosition = this[colPosMethod](colSpan, item);
        var position = {
            x: this.columnWidth * colPosition.col,
            y: colPosition.y
        };
        var setHeight = colPosition.y + item.size.outerHeight;
        var setMax = colSpan + colPosition.col;
        for (var i = colPosition.col; i < setMax; i++) {
            this.colYs[i] = setHeight;
        }
        return position;
    }
    ;
    proto._getTopColPosition = function(colSpan) {
        var colGroup = this._getTopColGroup(colSpan);
        var minimumY = Math.min.apply(Math, colGroup);
        return {
            col: colGroup.indexOf(minimumY),
            y: minimumY,
        };
    }
    ;
    proto._getTopColGroup = function(colSpan) {
        if (colSpan < 2) {
            return this.colYs;
        }
        var colGroup = [];
        var groupCount = this.cols + 1 - colSpan;
        for (var i = 0; i < groupCount; i++) {
            colGroup[i] = this._getColGroupY(i, colSpan);
        }
        return colGroup;
    }
    ;
    proto._getColGroupY = function(col, colSpan) {
        if (colSpan < 2) {
            return this.colYs[col];
        }
        var groupColYs = this.colYs.slice(col, col + colSpan);
        return Math.max.apply(Math, groupColYs);
    }
    ;
    proto._getHorizontalColPosition = function(colSpan, item) {
        var col = this.horizontalColIndex % this.cols;
        var isOver = colSpan > 1 && col + colSpan > this.cols;
        col = isOver ? 0 : col;
        var hasSize = item.size.outerWidth && item.size.outerHeight;
        this.horizontalColIndex = hasSize ? col + colSpan : this.horizontalColIndex;
        return {
            col: col,
            y: this._getColGroupY(col, colSpan),
        };
    }
    ;
    proto._manageStamp = function(stamp) {
        var stampSize = getSize(stamp);
        var offset = this._getElementOffset(stamp);
        var isOriginLeft = this._getOption('originLeft');
        var firstX = isOriginLeft ? offset.left : offset.right;
        var lastX = firstX + stampSize.outerWidth;
        var firstCol = Math.floor(firstX / this.columnWidth);
        firstCol = Math.max(0, firstCol);
        var lastCol = Math.floor(lastX / this.columnWidth);
        lastCol -= lastX % this.columnWidth ? 0 : 1;
        lastCol = Math.min(this.cols - 1, lastCol);
        var isOriginTop = this._getOption('originTop');
        var stampMaxY = (isOriginTop ? offset.top : offset.bottom) + stampSize.outerHeight;
        for (var i = firstCol; i <= lastCol; i++) {
            this.colYs[i] = Math.max(stampMaxY, this.colYs[i]);
        }
    }
    ;
    proto._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var size = {
            height: this.maxY
        };
        if (this._getOption('fitWidth')) {
            size.width = this._getContainerFitWidth();
        }
        return size;
    }
    ;
    proto._getContainerFitWidth = function() {
        var unusedCols = 0;
        var i = this.cols;
        while (--i) {
            if (this.colYs[i] !== 0) {
                break;
            }
            unusedCols++;
        }
        return (this.cols - unusedCols) * this.columnWidth - this.gutter;
    }
    ;
    proto.needsResizeLayout = function() {
        var previousWidth = this.containerWidth;
        this.getContainerWidth();
        return previousWidth != this.containerWidth;
    }
    ;
    return Masonry;
}));
/*!
 * Masonry layout mode
 * sub-classes Masonry
 * https://masonry.desandro.com
 */
(function(window, factory) {
    if (typeof define == 'function' && define.amd) {
        define('isotope-layout/js/layout-modes/masonry', ['../layout-mode', 'masonry-layout/masonry'], factory);
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory(require('../layout-mode'), require('masonry-layout'));
    } else {
        factory(window.Isotope.LayoutMode, window.Masonry);
    }
}(window, function factory(LayoutMode, Masonry) {
    'use strict';
    var MasonryMode = LayoutMode.create('masonry');
    var proto = MasonryMode.prototype;
    var keepModeMethods = {
        _getElementOffset: true,
        layout: true,
        _getMeasurement: true
    };
    for (var method in Masonry.prototype) {
        if (!keepModeMethods[method]) {
            proto[method] = Masonry.prototype[method];
        }
    }
    var measureColumns = proto.measureColumns;
    proto.measureColumns = function() {
        this.items = this.isotope.filteredItems;
        measureColumns.call(this);
    }
    ;
    var _getOption = proto._getOption;
    proto._getOption = function(option) {
        if (option == 'fitWidth') {
            return this.options.isFitWidth !== undefined ? this.options.isFitWidth : this.options.fitWidth;
        }
        return _getOption.apply(this.isotope, arguments);
    }
    ;
    return MasonryMode;
}));
(function(window, factory) {
    if (typeof define == 'function' && define.amd) {
        define('isotope-layout/js/layout-modes/fit-rows', ['../layout-mode'], factory);
    } else if (typeof exports == 'object') {
        module.exports = factory(require('../layout-mode'));
    } else {
        factory(window.Isotope.LayoutMode);
    }
}(window, function factory(LayoutMode) {
    'use strict';
    var FitRows = LayoutMode.create('fitRows');
    var proto = FitRows.prototype;
    proto._resetLayout = function() {
        this.x = 0;
        this.y = 0;
        this.maxY = 0;
        this._getMeasurement('gutter', 'outerWidth');
    }
    ;
    proto._getItemLayoutPosition = function(item) {
        item.getSize();
        var itemWidth = item.size.outerWidth + this.gutter;
        var containerWidth = this.isotope.size.innerWidth + this.gutter;
        if (this.x !== 0 && itemWidth + this.x > containerWidth) {
            this.x = 0;
            this.y = this.maxY;
        }
        var position = {
            x: this.x,
            y: this.y
        };
        this.maxY = Math.max(this.maxY, this.y + item.size.outerHeight);
        this.x += itemWidth;
        return position;
    }
    ;
    proto._getContainerSize = function() {
        return {
            height: this.maxY
        };
    }
    ;
    return FitRows;
}));
(function(window, factory) {
    if (typeof define == 'function' && define.amd) {
        define('isotope-layout/js/layout-modes/vertical', ['../layout-mode'], factory);
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory(require('../layout-mode'));
    } else {
        factory(window.Isotope.LayoutMode);
    }
}(window, function factory(LayoutMode) {
    'use strict';
    var Vertical = LayoutMode.create('vertical', {
        horizontalAlignment: 0
    });
    var proto = Vertical.prototype;
    proto._resetLayout = function() {
        this.y = 0;
    }
    ;
    proto._getItemLayoutPosition = function(item) {
        item.getSize();
        var x = (this.isotope.size.innerWidth - item.size.outerWidth) * this.options.horizontalAlignment;
        var y = this.y;
        this.y += item.size.outerHeight;
        return {
            x: x,
            y: y
        };
    }
    ;
    proto._getContainerSize = function() {
        return {
            height: this.y
        };
    }
    ;
    return Vertical;
}));
/*!
 * Isotope v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */
(function(window, factory) {
    if (typeof define == 'function' && define.amd) {
        define(['outlayer/outlayer', 'get-size/get-size', 'desandro-matches-selector/matches-selector', 'fizzy-ui-utils/utils', 'isotope-layout/js/item', 'isotope-layout/js/layout-mode', 'isotope-layout/js/layout-modes/masonry', 'isotope-layout/js/layout-modes/fit-rows', 'isotope-layout/js/layout-modes/vertical'], function(Outlayer, getSize, matchesSelector, utils, Item, LayoutMode) {
            return factory(window, Outlayer, getSize, matchesSelector, utils, Item, LayoutMode);
        });
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory(window, require('outlayer'), require('get-size'), require('desandro-matches-selector'), require('fizzy-ui-utils'), require('isotope-layout/js/item'), require('isotope-layout/js/layout-mode'), require('isotope-layout/js/layout-modes/masonry'), require('isotope-layout/js/layout-modes/fit-rows'), require('isotope-layout/js/layout-modes/vertical'));
    } else {
        window.Isotope = factory(window, window.Outlayer, window.getSize, window.matchesSelector, window.fizzyUIUtils, window.Isotope.Item, window.Isotope.LayoutMode);
    }
}(window, function factory(window, Outlayer, getSize, matchesSelector, utils, Item, LayoutMode) {
    var jQuery = window.jQuery;
    var trim = String.prototype.trim ? function(str) {
        return str.trim();
    }
    : function(str) {
        return str.replace(/^\s+|\s+$/g, '');
    }
    ;
    var Isotope = Outlayer.create('isotope', {
        layoutMode: 'masonry',
        isJQueryFiltering: true,
        sortAscending: true
    });
    Isotope.Item = Item;
    Isotope.LayoutMode = LayoutMode;
    var proto = Isotope.prototype;
    proto._create = function() {
        this.itemGUID = 0;
        this._sorters = {};
        this._getSorters();
        Outlayer.prototype._create.call(this);
        this.modes = {};
        this.filteredItems = this.items;
        this.sortHistory = ['original-order'];
        for (var name in LayoutMode.modes) {
            this._initLayoutMode(name);
        }
    }
    ;
    proto.reloadItems = function() {
        this.itemGUID = 0;
        Outlayer.prototype.reloadItems.call(this);
    }
    ;
    proto._itemize = function() {
        var items = Outlayer.prototype._itemize.apply(this, arguments);
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            item.id = this.itemGUID++;
        }
        this._updateItemsSortData(items);
        return items;
    }
    ;
    proto._initLayoutMode = function(name) {
        var Mode = LayoutMode.modes[name];
        var initialOpts = this.options[name] || {};
        this.options[name] = Mode.options ? utils.extend(Mode.options, initialOpts) : initialOpts;
        this.modes[name] = new Mode(this);
    }
    ;
    proto.layout = function() {
        if (!this._isLayoutInited && this._getOption('initLayout')) {
            this.arrange();
            return;
        }
        this._layout();
    }
    ;
    proto._layout = function() {
        var isInstant = this._getIsInstant();
        this._resetLayout();
        this._manageStamps();
        this.layoutItems(this.filteredItems, isInstant);
        this._isLayoutInited = true;
    }
    ;
    proto.arrange = function(opts) {
        this.option(opts);
        this._getIsInstant();
        var filtered = this._filter(this.items);
        this.filteredItems = filtered.matches;
        this._bindArrangeComplete();
        if (this._isInstant) {
            this._noTransition(this._hideReveal, [filtered]);
        } else {
            this._hideReveal(filtered);
        }
        this._sort();
        this._layout();
    }
    ;
    proto._init = proto.arrange;
    proto._hideReveal = function(filtered) {
        this.reveal(filtered.needReveal);
        this.hide(filtered.needHide);
    }
    ;
    proto._getIsInstant = function() {
        var isLayoutInstant = this._getOption('layoutInstant');
        var isInstant = isLayoutInstant !== undefined ? isLayoutInstant : !this._isLayoutInited;
        this._isInstant = isInstant;
        return isInstant;
    }
    ;
    proto._bindArrangeComplete = function() {
        var isLayoutComplete, isHideComplete, isRevealComplete;
        var _this = this;
        function arrangeParallelCallback() {
            if (isLayoutComplete && isHideComplete && isRevealComplete) {
                _this.dispatchEvent('arrangeComplete', null, [_this.filteredItems]);
            }
        }
        this.once('layoutComplete', function() {
            isLayoutComplete = true;
            arrangeParallelCallback();
        });
        this.once('hideComplete', function() {
            isHideComplete = true;
            arrangeParallelCallback();
        });
        this.once('revealComplete', function() {
            isRevealComplete = true;
            arrangeParallelCallback();
        });
    }
    ;
    proto._filter = function(items) {
        var filter = this.options.filter;
        filter = filter || '*';
        var matches = [];
        var hiddenMatched = [];
        var visibleUnmatched = [];
        var test = this._getFilterTest(filter);
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (item.isIgnored) {
                continue;
            }
            var isMatched = test(item);
            if (isMatched) {
                matches.push(item);
            }
            if (isMatched && item.isHidden) {
                hiddenMatched.push(item);
            } else if (!isMatched && !item.isHidden) {
                visibleUnmatched.push(item);
            }
        }
        return {
            matches: matches,
            needReveal: hiddenMatched,
            needHide: visibleUnmatched
        };
    }
    ;
    proto._getFilterTest = function(filter) {
        if (jQuery && this.options.isJQueryFiltering) {
            return function(item) {
                return jQuery(item.element).is(filter);
            }
            ;
        }
        if (typeof filter == 'function') {
            return function(item) {
                return filter(item.element);
            }
            ;
        }
        return function(item) {
            return matchesSelector(item.element, filter);
        }
        ;
    }
    ;
    proto.updateSortData = function(elems) {
        var items;
        if (elems) {
            elems = utils.makeArray(elems);
            items = this.getItems(elems);
        } else {
            items = this.items;
        }
        this._getSorters();
        this._updateItemsSortData(items);
    }
    ;
    proto._getSorters = function() {
        var getSortData = this.options.getSortData;
        for (var key in getSortData) {
            var sorter = getSortData[key];
            this._sorters[key] = mungeSorter(sorter);
        }
    }
    ;
    proto._updateItemsSortData = function(items) {
        var len = items && items.length;
        for (var i = 0; len && i < len; i++) {
            var item = items[i];
            item.updateSortData();
        }
    }
    ;
    var mungeSorter = (function() {
        function mungeSorter(sorter) {
            if (typeof sorter != 'string') {
                return sorter;
            }
            var args = trim(sorter).split(' ');
            var query = args[0];
            var attrMatch = query.match(/^\[(.+)\]$/);
            var attr = attrMatch && attrMatch[1];
            var getValue = getValueGetter(attr, query);
            var parser = Isotope.sortDataParsers[args[1]];
            sorter = parser ? function(elem) {
                return elem && parser(getValue(elem));
            }
            : function(elem) {
                return elem && getValue(elem);
            }
            ;
            return sorter;
        }
        function getValueGetter(attr, query) {
            if (attr) {
                return function getAttribute(elem) {
                    return elem.getAttribute(attr);
                }
                ;
            }
            return function getChildText(elem) {
                var child = elem.querySelector(query);
                return child && child.textContent;
            }
            ;
        }
        return mungeSorter;
    }
    )();
    Isotope.sortDataParsers = {
        'parseInt': function(val) {
            return parseInt(val, 10);
        },
        'parseFloat': function(val) {
            return parseFloat(val);
        }
    };
    proto._sort = function() {
        if (!this.options.sortBy) {
            return;
        }
        var sortBys = utils.makeArray(this.options.sortBy);
        if (!this._getIsSameSortBy(sortBys)) {
            this.sortHistory = sortBys.concat(this.sortHistory);
        }
        var itemSorter = getItemSorter(this.sortHistory, this.options.sortAscending);
        this.filteredItems.sort(itemSorter);
    }
    ;
    proto._getIsSameSortBy = function(sortBys) {
        for (var i = 0; i < sortBys.length; i++) {
            if (sortBys[i] != this.sortHistory[i]) {
                return false;
            }
        }
        return true;
    }
    ;
    function getItemSorter(sortBys, sortAsc) {
        return function sorter(itemA, itemB) {
            for (var i = 0; i < sortBys.length; i++) {
                var sortBy = sortBys[i];
                var a = itemA.sortData[sortBy];
                var b = itemB.sortData[sortBy];
                if (a > b || a < b) {
                    var isAscending = sortAsc[sortBy] !== undefined ? sortAsc[sortBy] : sortAsc;
                    var direction = isAscending ? 1 : -1;
                    return (a > b ? 1 : -1) * direction;
                }
            }
            return 0;
        }
        ;
    }
    proto._mode = function() {
        var layoutMode = this.options.layoutMode;
        var mode = this.modes[layoutMode];
        if (!mode) {
            throw new Error('No layout mode: ' + layoutMode);
        }
        mode.options = this.options[layoutMode];
        return mode;
    }
    ;
    proto._resetLayout = function() {
        Outlayer.prototype._resetLayout.call(this);
        this._mode()._resetLayout();
    }
    ;
    proto._getItemLayoutPosition = function(item) {
        return this._mode()._getItemLayoutPosition(item);
    }
    ;
    proto._manageStamp = function(stamp) {
        this._mode()._manageStamp(stamp);
    }
    ;
    proto._getContainerSize = function() {
        return this._mode()._getContainerSize();
    }
    ;
    proto.needsResizeLayout = function() {
        return this._mode().needsResizeLayout();
    }
    ;
    proto.appended = function(elems) {
        var items = this.addItems(elems);
        if (!items.length) {
            return;
        }
        var filteredItems = this._filterRevealAdded(items);
        this.filteredItems = this.filteredItems.concat(filteredItems);
    }
    ;
    proto.prepended = function(elems) {
        var items = this._itemize(elems);
        if (!items.length) {
            return;
        }
        this._resetLayout();
        this._manageStamps();
        var filteredItems = this._filterRevealAdded(items);
        this.layoutItems(this.filteredItems);
        this.filteredItems = filteredItems.concat(this.filteredItems);
        this.items = items.concat(this.items);
    }
    ;
    proto._filterRevealAdded = function(items) {
        var filtered = this._filter(items);
        this.hide(filtered.needHide);
        this.reveal(filtered.matches);
        this.layoutItems(filtered.matches, true);
        return filtered.matches;
    }
    ;
    proto.insert = function(elems) {
        var items = this.addItems(elems);
        if (!items.length) {
            return;
        }
        var i, item;
        var len = items.length;
        for (i = 0; i < len; i++) {
            item = items[i];
            this.element.appendChild(item.element);
        }
        var filteredInsertItems = this._filter(items).matches;
        for (i = 0; i < len; i++) {
            items[i].isLayoutInstant = true;
        }
        this.arrange();
        for (i = 0; i < len; i++) {
            delete items[i].isLayoutInstant;
        }
        this.reveal(filteredInsertItems);
    }
    ;
    var _remove = proto.remove;
    proto.remove = function(elems) {
        elems = utils.makeArray(elems);
        var removeItems = this.getItems(elems);
        _remove.call(this, elems);
        var len = removeItems && removeItems.length;
        for (var i = 0; len && i < len; i++) {
            var item = removeItems[i];
            utils.removeFrom(this.filteredItems, item);
        }
    }
    ;
    proto.shuffle = function() {
        for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            item.sortData.random = Math.random();
        }
        this.options.sortBy = 'random';
        this._sort();
        this._layout();
    }
    ;
    proto._noTransition = function(fn, args) {
        var transitionDuration = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var returnValue = fn.apply(this, args);
        this.options.transitionDuration = transitionDuration;
        return returnValue;
    }
    ;
    proto.getFilteredItemElements = function() {
        return this.filteredItems.map(function(item) {
            return item.element;
        });
    }
    ;
    return Isotope;
}));
(function($) {
    var methods;
    methods = {
        init: function(elements, options) {
            $(window).scroll(function() {
                methods.animate(elements, options);
            });
            $(window).trigger('scroll');
        },
        animate: function(elements, options) {
            var viewBottom, viewHeight, viewTop;
            viewHeight = $(window).height();
            viewTop = $(window).scrollTop();
            viewBottom = viewTop + viewHeight;
            $.each(elements, function() {
                var elementAnimated, elementAnimation, elementBottom, elementDelay, elementDuration, elementHeight, elementIteration, elementOffset, elementTop;
                elementAnimated = 'animated';
                elementAnimation = $(this).data('animate');
                elementOffset = $(this).data('offset');
                elementDuration = $(this).data('duration');
                elementDelay = $(this).data('delay');
                elementIteration = $(this).data('iteration');
                elementHeight = $(this).outerHeight();
                elementTop = $(this).offset().top;
                elementBottom = elementTop + elementHeight;
                if (elementOffset) {
                    elementTop = elementTop + elementOffset;
                    elementBottom = elementBottom - elementOffset;
                }
                if (options.animateCssVersion === 4) {
                    elementAnimated = 'animate__animated';
                    elementAnimation = 'animate__' + elementAnimation;
                }
                $(this).css({
                    '-webkit-animation-duration': elementDuration,
                    'animation-duration': elementDuration
                });
                $(this).css({
                    '-webkit-animation-delay': elementDelay,
                    'animation-delay': elementDelay
                });
                $(this).css({
                    '-webkit-animation-iteration-count': elementIteration,
                    'animation-iteration-count': elementIteration
                });
                if (elementBottom >= viewTop && elementTop <= viewBottom) {
                    $(this).css('visibility', 'visible');
                    $(this).addClass(elementAnimation);
                    $(this).addClass(elementAnimated);
                } else {
                    if (options.once === false) {
                        $(this).css('visibility', 'hidden');
                        $(this).removeClass(elementAnimation);
                        $(this).removeClass(elementAnimated);
                    }
                }
            });
        }
    };
    jQuery.fn.scrolla = function(options) {
        options = $.extend({
            mobile: false,
            once: false,
            animateCssVersion: 4
        }, options);
        if (options.mobile === false) {
            if (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                return false;
            }
        }
        methods.init(this, options);
    }
    ;
}
)(jQuery);
/*!
 * skrollr core
 *
 * Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr
 *
 * Free to use under terms of MIT license
 */
(function(window, document, undefined) {
    'use strict';
    var skrollr = {
        get: function() {
            return _instance;
        },
        init: function(options) {
            return _instance || new Skrollr(options);
        },
        VERSION: '0.6.30'
    };
    var hasProp = Object.prototype.hasOwnProperty;
    var Math = window.Math;
    var getStyle = window.getComputedStyle;
    var documentElement;
    var body;
    var EVENT_TOUCHSTART = 'touchstart';
    var EVENT_TOUCHMOVE = 'touchmove';
    var EVENT_TOUCHCANCEL = 'touchcancel';
    var EVENT_TOUCHEND = 'touchend';
    var SKROLLABLE_CLASS = 'skrollable';
    var SKROLLABLE_BEFORE_CLASS = SKROLLABLE_CLASS + '-before';
    var SKROLLABLE_BETWEEN_CLASS = SKROLLABLE_CLASS + '-between';
    var SKROLLABLE_AFTER_CLASS = SKROLLABLE_CLASS + '-after';
    var SKROLLR_CLASS = 'skrollr';
    var NO_SKROLLR_CLASS = 'no-' + SKROLLR_CLASS;
    var SKROLLR_DESKTOP_CLASS = SKROLLR_CLASS + '-desktop';
    var SKROLLR_MOBILE_CLASS = SKROLLR_CLASS + '-mobile';
    var DEFAULT_EASING = 'linear';
    var DEFAULT_DURATION = 1000;
    var DEFAULT_MOBILE_DECELERATION = 0.004;
    var DEFAULT_SKROLLRBODY = 'skrollr-body';
    var DEFAULT_SMOOTH_SCROLLING_DURATION = 200;
    var ANCHOR_START = 'start';
    var ANCHOR_END = 'end';
    var ANCHOR_CENTER = 'center';
    var ANCHOR_BOTTOM = 'bottom';
    var SKROLLABLE_ID_DOM_PROPERTY = '___skrollable_id';
    var rxTouchIgnoreTags = /^(?:input|textarea|button|select)$/i;
    var rxTrim = /^\s+|\s+$/g;
    var rxKeyframeAttribute = /^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/;
    var rxPropValue = /\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi;
    var rxPropEasing = /^(@?[a-z\-]+)\[(\w+)\]$/;
    var rxCamelCase = /-([a-z0-9_])/g;
    var rxCamelCaseFn = function(str, letter) {
        return letter.toUpperCase();
    };
    var rxNumericValue = /[\-+]?[\d]*\.?[\d]+/g;
    var rxInterpolateString = /\{\?\}/g;
    var rxRGBAIntegerColor = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g;
    var rxGradient = /[a-z\-]+-gradient/g;
    var theCSSPrefix = '';
    var theDashedCSSPrefix = '';
    var detectCSSPrefix = function() {
        var rxPrefixes = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;
        if (!getStyle) {
            return;
        }
        var style = getStyle(body, null);
        for (var k in style) {
            theCSSPrefix = (k.match(rxPrefixes) || (+k == k && style[k].match(rxPrefixes)));
            if (theCSSPrefix) {
                break;
            }
        }
        if (!theCSSPrefix) {
            theCSSPrefix = theDashedCSSPrefix = '';
            return;
        }
        theCSSPrefix = theCSSPrefix[0];
        if (theCSSPrefix.slice(0, 1) === '-') {
            theDashedCSSPrefix = theCSSPrefix;
            theCSSPrefix = ({
                '-webkit-': 'webkit',
                '-moz-': 'Moz',
                '-ms-': 'ms',
                '-o-': 'O'
            })[theCSSPrefix];
        } else {
            theDashedCSSPrefix = '-' + theCSSPrefix.toLowerCase() + '-';
        }
    };
    var polyfillRAF = function() {
        var requestAnimFrame = window.requestAnimationFrame || window[theCSSPrefix.toLowerCase() + 'RequestAnimationFrame'];
        var lastTime = _now();
        if (_isMobile || !requestAnimFrame) {
            requestAnimFrame = function(callback) {
                var deltaTime = _now() - lastTime;
                var delay = Math.max(0, 1000 / 60 - deltaTime);
                return window.setTimeout(function() {
                    lastTime = _now();
                    callback();
                }, delay);
            }
            ;
        }
        return requestAnimFrame;
    };
    var polyfillCAF = function() {
        var cancelAnimFrame = window.cancelAnimationFrame || window[theCSSPrefix.toLowerCase() + 'CancelAnimationFrame'];
        if (_isMobile || !cancelAnimFrame) {
            cancelAnimFrame = function(timeout) {
                return window.clearTimeout(timeout);
            }
            ;
        }
        return cancelAnimFrame;
    };
    var easings = {
        begin: function() {
            return 0;
        },
        end: function() {
            return 1;
        },
        linear: function(p) {
            return p;
        },
        quadratic: function(p) {
            return p * p;
        },
        cubic: function(p) {
            return p * p * p;
        },
        swing: function(p) {
            return (-Math.cos(p * Math.PI) / 2) + 0.5;
        },
        sqrt: function(p) {
            return Math.sqrt(p);
        },
        outCubic: function(p) {
            return (Math.pow((p - 1), 3) + 1);
        },
        bounce: function(p) {
            var a;
            if (p <= 0.5083) {
                a = 3;
            } else if (p <= 0.8489) {
                a = 9;
            } else if (p <= 0.96208) {
                a = 27;
            } else if (p <= 0.99981) {
                a = 91;
            } else {
                return 1;
            }
            return 1 - Math.abs(3 * Math.cos(p * a * 1.028) / a);
        }
    };
    function Skrollr(options) {
        documentElement = document.documentElement;
        body = document.body;
        detectCSSPrefix();
        _instance = this;
        options = options || {};
        _constants = options.constants || {};
        if (options.easing) {
            for (var e in options.easing) {
                easings[e] = options.easing[e];
            }
        }
        _edgeStrategy = options.edgeStrategy || 'set';
        _listeners = {
            beforerender: options.beforerender,
            render: options.render,
            keyframe: options.keyframe
        };
        _forceHeight = options.forceHeight !== false;
        if (_forceHeight) {
            _scale = options.scale || 1;
        }
        _mobileDeceleration = options.mobileDeceleration || DEFAULT_MOBILE_DECELERATION;
        _smoothScrollingEnabled = options.smoothScrolling !== false;
        _smoothScrollingDuration = options.smoothScrollingDuration || DEFAULT_SMOOTH_SCROLLING_DURATION;
        _smoothScrolling = {
            targetTop: _instance.getScrollTop()
        };
        _isMobile = ((options.mobileCheck || function() {
            return (/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera);
        }
        )());
        if (_isMobile) {
            _skrollrBody = document.getElementById(options.skrollrBody || DEFAULT_SKROLLRBODY);
            if (_skrollrBody) {
                _detect3DTransforms();
            }
            _initMobile();
            _updateClass(documentElement, [SKROLLR_CLASS, SKROLLR_MOBILE_CLASS], [NO_SKROLLR_CLASS]);
        } else {
            _updateClass(documentElement, [SKROLLR_CLASS, SKROLLR_DESKTOP_CLASS], [NO_SKROLLR_CLASS]);
        }
        _instance.refresh();
        _addEvent(window, 'resize orientationchange', function() {
            var width = documentElement.clientWidth;
            var height = documentElement.clientHeight;
            if (height !== _lastViewportHeight || width !== _lastViewportWidth) {
                _lastViewportHeight = height;
                _lastViewportWidth = width;
                _requestReflow = true;
            }
        });
        var requestAnimFrame = polyfillRAF();
        (function animloop() {
            _render();
            _animFrame = requestAnimFrame(animloop);
        }());
        return _instance;
    }
    Skrollr.prototype.refresh = function(elements) {
        var elementIndex;
        var elementsLength;
        var ignoreID = false;
        if (elements === undefined) {
            ignoreID = true;
            _skrollables = [];
            _skrollableIdCounter = 0;
            elements = document.getElementsByTagName('*');
        } else if (elements.length === undefined) {
            elements = [elements];
        }
        elementIndex = 0;
        elementsLength = elements.length;
        for (; elementIndex < elementsLength; elementIndex++) {
            var el = elements[elementIndex];
            var anchorTarget = el;
            var keyFrames = [];
            var smoothScrollThis = _smoothScrollingEnabled;
            var edgeStrategy = _edgeStrategy;
            var emitEvents = false;
            if (ignoreID && SKROLLABLE_ID_DOM_PROPERTY in el) {
                delete el[SKROLLABLE_ID_DOM_PROPERTY];
            }
            if (!el.attributes) {
                continue;
            }
            var attributeIndex = 0;
            var attributesLength = el.attributes.length;
            for (; attributeIndex < attributesLength; attributeIndex++) {
                var attr = el.attributes[attributeIndex];
                if (attr.name === 'data-anchor-target') {
                    anchorTarget = document.querySelector(attr.value);
                    if (anchorTarget === null) {
                        throw 'Unable to find anchor target "' + attr.value + '"';
                    }
                    continue;
                }
                if (attr.name === 'data-smooth-scrolling') {
                    smoothScrollThis = attr.value !== 'off';
                    continue;
                }
                if (attr.name === 'data-edge-strategy') {
                    edgeStrategy = attr.value;
                    continue;
                }
                if (attr.name === 'data-emit-events') {
                    emitEvents = true;
                    continue;
                }
                var match = attr.name.match(rxKeyframeAttribute);
                if (match === null) {
                    continue;
                }
                var kf = {
                    props: attr.value,
                    element: el,
                    eventType: attr.name.replace(rxCamelCase, rxCamelCaseFn)
                };
                keyFrames.push(kf);
                var constant = match[1];
                if (constant) {
                    kf.constant = constant.substr(1);
                }
                var offset = match[2];
                if (/p$/.test(offset)) {
                    kf.isPercentage = true;
                    kf.offset = (offset.slice(0, -1) | 0) / 100;
                } else {
                    kf.offset = (offset | 0);
                }
                var anchor1 = match[3];
                var anchor2 = match[4] || anchor1;
                if (!anchor1 || anchor1 === ANCHOR_START || anchor1 === ANCHOR_END) {
                    kf.mode = 'absolute';
                    if (anchor1 === ANCHOR_END) {
                        kf.isEnd = true;
                    } else if (!kf.isPercentage) {
                        kf.offset = kf.offset * _scale;
                    }
                } else {
                    kf.mode = 'relative';
                    kf.anchors = [anchor1, anchor2];
                }
            }
            if (!keyFrames.length) {
                continue;
            }
            var styleAttr, classAttr;
            var id;
            if (!ignoreID && SKROLLABLE_ID_DOM_PROPERTY in el) {
                id = el[SKROLLABLE_ID_DOM_PROPERTY];
                styleAttr = _skrollables[id].styleAttr;
                classAttr = _skrollables[id].classAttr;
            } else {
                id = (el[SKROLLABLE_ID_DOM_PROPERTY] = _skrollableIdCounter++);
                styleAttr = el.style.cssText;
                classAttr = _getClass(el);
            }
            _skrollables[id] = {
                element: el,
                styleAttr: styleAttr,
                classAttr: classAttr,
                anchorTarget: anchorTarget,
                keyFrames: keyFrames,
                smoothScrolling: smoothScrollThis,
                edgeStrategy: edgeStrategy,
                emitEvents: emitEvents,
                lastFrameIndex: -1
            };
            _updateClass(el, [SKROLLABLE_CLASS], []);
        }
        _reflow();
        elementIndex = 0;
        elementsLength = elements.length;
        for (; elementIndex < elementsLength; elementIndex++) {
            var sk = _skrollables[elements[elementIndex][SKROLLABLE_ID_DOM_PROPERTY]];
            if (sk === undefined) {
                continue;
            }
            _parseProps(sk);
            _fillProps(sk);
        }
        return _instance;
    }
    ;
    Skrollr.prototype.relativeToAbsolute = function(element, viewportAnchor, elementAnchor) {
        var viewportHeight = documentElement.clientHeight;
        var box = element.getBoundingClientRect();
        var absolute = box.top;
        var boxHeight = box.bottom - box.top;
        if (viewportAnchor === ANCHOR_BOTTOM) {
            absolute -= viewportHeight;
        } else if (viewportAnchor === ANCHOR_CENTER) {
            absolute -= viewportHeight / 2;
        }
        if (elementAnchor === ANCHOR_BOTTOM) {
            absolute += boxHeight;
        } else if (elementAnchor === ANCHOR_CENTER) {
            absolute += boxHeight / 2;
        }
        absolute += _instance.getScrollTop();
        return (absolute + 0.5) | 0;
    }
    ;
    Skrollr.prototype.animateTo = function(top, options) {
        options = options || {};
        var now = _now();
        var scrollTop = _instance.getScrollTop();
        var duration = options.duration === undefined ? DEFAULT_DURATION : options.duration;
        _scrollAnimation = {
            startTop: scrollTop,
            topDiff: top - scrollTop,
            targetTop: top,
            duration: duration,
            startTime: now,
            endTime: now + duration,
            easing: easings[options.easing || DEFAULT_EASING],
            done: options.done
        };
        if (!_scrollAnimation.topDiff) {
            if (_scrollAnimation.done) {
                _scrollAnimation.done.call(_instance, false);
            }
            _scrollAnimation = undefined;
        }
        return _instance;
    }
    ;
    Skrollr.prototype.stopAnimateTo = function() {
        if (_scrollAnimation && _scrollAnimation.done) {
            _scrollAnimation.done.call(_instance, true);
        }
        _scrollAnimation = undefined;
    }
    ;
    Skrollr.prototype.isAnimatingTo = function() {
        return !!_scrollAnimation;
    }
    ;
    Skrollr.prototype.isMobile = function() {
        return _isMobile;
    }
    ;
    Skrollr.prototype.setScrollTop = function(top, force) {
        _forceRender = (force === true);
        if (_isMobile) {
            _mobileOffset = Math.min(Math.max(top, 0), _maxKeyFrame);
        } else {
            window.scrollTo(0, top);
        }
        return _instance;
    }
    ;
    Skrollr.prototype.getScrollTop = function() {
        if (_isMobile) {
            return _mobileOffset;
        } else {
            return window.pageYOffset || documentElement.scrollTop || body.scrollTop || 0;
        }
    }
    ;
    Skrollr.prototype.getMaxScrollTop = function() {
        return _maxKeyFrame;
    }
    ;
    Skrollr.prototype.on = function(name, fn) {
        _listeners[name] = fn;
        return _instance;
    }
    ;
    Skrollr.prototype.off = function(name) {
        delete _listeners[name];
        return _instance;
    }
    ;
    Skrollr.prototype.destroy = function() {
        var cancelAnimFrame = polyfillCAF();
        cancelAnimFrame(_animFrame);
        _removeAllEvents();
        _updateClass(documentElement, [NO_SKROLLR_CLASS], [SKROLLR_CLASS, SKROLLR_DESKTOP_CLASS, SKROLLR_MOBILE_CLASS]);
        var skrollableIndex = 0;
        var skrollablesLength = _skrollables.length;
        for (; skrollableIndex < skrollablesLength; skrollableIndex++) {
            _reset(_skrollables[skrollableIndex].element);
        }
        documentElement.style.overflow = body.style.overflow = '';
        documentElement.style.height = body.style.height = '';
        if (_skrollrBody) {
            skrollr.setStyle(_skrollrBody, 'transform', 'none');
        }
        _instance = undefined;
        _skrollrBody = undefined;
        _listeners = undefined;
        _forceHeight = undefined;
        _maxKeyFrame = 0;
        _scale = 1;
        _constants = undefined;
        _mobileDeceleration = undefined;
        _direction = 'down';
        _lastTop = -1;
        _lastViewportWidth = 0;
        _lastViewportHeight = 0;
        _requestReflow = false;
        _scrollAnimation = undefined;
        _smoothScrollingEnabled = undefined;
        _smoothScrollingDuration = undefined;
        _smoothScrolling = undefined;
        _forceRender = undefined;
        _skrollableIdCounter = 0;
        _edgeStrategy = undefined;
        _isMobile = false;
        _mobileOffset = 0;
        _translateZ = undefined;
    }
    ;
    var _initMobile = function() {
        var initialElement;
        var initialTouchY;
        var initialTouchX;
        var currentElement;
        var currentTouchY;
        var currentTouchX;
        var lastTouchY;
        var deltaY;
        var initialTouchTime;
        var currentTouchTime;
        var lastTouchTime;
        var deltaTime;
        _addEvent(documentElement, [EVENT_TOUCHSTART, EVENT_TOUCHMOVE, EVENT_TOUCHCANCEL, EVENT_TOUCHEND].join(' '), function(e) {
            var touch = e.changedTouches[0];
            currentElement = e.target;
            while (currentElement.nodeType === 3) {
                currentElement = currentElement.parentNode;
            }
            currentTouchY = touch.clientY;
            currentTouchX = touch.clientX;
            currentTouchTime = e.timeStamp;
            if (!rxTouchIgnoreTags.test(currentElement.tagName)) {
                e.preventDefault();
            }
            switch (e.type) {
            case EVENT_TOUCHSTART:
                if (initialElement) {
                    initialElement.blur();
                }
                _instance.stopAnimateTo();
                initialElement = currentElement;
                initialTouchY = lastTouchY = currentTouchY;
                initialTouchX = currentTouchX;
                initialTouchTime = currentTouchTime;
                break;
            case EVENT_TOUCHMOVE:
                if (rxTouchIgnoreTags.test(currentElement.tagName) && document.activeElement !== currentElement) {
                    e.preventDefault();
                }
                deltaY = currentTouchY - lastTouchY;
                deltaTime = currentTouchTime - lastTouchTime;
                _instance.setScrollTop(_mobileOffset - deltaY, true);
                lastTouchY = currentTouchY;
                lastTouchTime = currentTouchTime;
                break;
            default:
            case EVENT_TOUCHCANCEL:
            case EVENT_TOUCHEND:
                var distanceY = initialTouchY - currentTouchY;
                var distanceX = initialTouchX - currentTouchX;
                var distance2 = distanceX * distanceX + distanceY * distanceY;
                if (distance2 < 49) {
                    if (!rxTouchIgnoreTags.test(initialElement.tagName)) {
                        initialElement.focus();
                        var clickEvent = document.createEvent('MouseEvents');
                        clickEvent.initMouseEvent('click', true, true, e.view, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null);
                        initialElement.dispatchEvent(clickEvent);
                    }
                    return;
                }
                initialElement = undefined;
                var speed = deltaY / deltaTime;
                speed = Math.max(Math.min(speed, 3), -3);
                var duration = Math.abs(speed / _mobileDeceleration);
                var targetOffset = speed * duration + 0.5 * _mobileDeceleration * duration * duration;
                var targetTop = _instance.getScrollTop() - targetOffset;
                var targetRatio = 0;
                if (targetTop > _maxKeyFrame) {
                    targetRatio = (_maxKeyFrame - targetTop) / targetOffset;
                    targetTop = _maxKeyFrame;
                } else if (targetTop < 0) {
                    targetRatio = -targetTop / targetOffset;
                    targetTop = 0;
                }
                duration = duration * (1 - targetRatio);
                _instance.animateTo((targetTop + 0.5) | 0, {
                    easing: 'outCubic',
                    duration: duration
                });
                break;
            }
        });
        window.scrollTo(0, 0);
        documentElement.style.overflow = body.style.overflow = 'hidden';
    };
    var _updateDependentKeyFrames = function() {
        var viewportHeight = documentElement.clientHeight;
        var processedConstants = _processConstants();
        var skrollable;
        var element;
        var anchorTarget;
        var keyFrames;
        var keyFrameIndex;
        var keyFramesLength;
        var kf;
        var skrollableIndex;
        var skrollablesLength;
        var offset;
        var constantValue;
        skrollableIndex = 0;
        skrollablesLength = _skrollables.length;
        for (; skrollableIndex < skrollablesLength; skrollableIndex++) {
            skrollable = _skrollables[skrollableIndex];
            element = skrollable.element;
            anchorTarget = skrollable.anchorTarget;
            keyFrames = skrollable.keyFrames;
            keyFrameIndex = 0;
            keyFramesLength = keyFrames.length;
            for (; keyFrameIndex < keyFramesLength; keyFrameIndex++) {
                kf = keyFrames[keyFrameIndex];
                offset = kf.offset;
                constantValue = processedConstants[kf.constant] || 0;
                kf.frame = offset;
                if (kf.isPercentage) {
                    offset = offset * viewportHeight;
                    kf.frame = offset;
                }
                if (kf.mode === 'relative') {
                    _reset(element);
                    kf.frame = _instance.relativeToAbsolute(anchorTarget, kf.anchors[0], kf.anchors[1]) - offset;
                    _reset(element, true);
                }
                kf.frame += constantValue;
                if (_forceHeight) {
                    if (!kf.isEnd && kf.frame > _maxKeyFrame) {
                        _maxKeyFrame = kf.frame;
                    }
                }
            }
        }
        _maxKeyFrame = Math.max(_maxKeyFrame, _getDocumentHeight());
        skrollableIndex = 0;
        skrollablesLength = _skrollables.length;
        for (; skrollableIndex < skrollablesLength; skrollableIndex++) {
            skrollable = _skrollables[skrollableIndex];
            keyFrames = skrollable.keyFrames;
            keyFrameIndex = 0;
            keyFramesLength = keyFrames.length;
            for (; keyFrameIndex < keyFramesLength; keyFrameIndex++) {
                kf = keyFrames[keyFrameIndex];
                constantValue = processedConstants[kf.constant] || 0;
                if (kf.isEnd) {
                    kf.frame = _maxKeyFrame - kf.offset + constantValue;
                }
            }
            skrollable.keyFrames.sort(_keyFrameComparator);
        }
    };
    var _calcSteps = function(fakeFrame, actualFrame) {
        var skrollableIndex = 0;
        var skrollablesLength = _skrollables.length;
        for (; skrollableIndex < skrollablesLength; skrollableIndex++) {
            var skrollable = _skrollables[skrollableIndex];
            var element = skrollable.element;
            var frame = skrollable.smoothScrolling ? fakeFrame : actualFrame;
            var frames = skrollable.keyFrames;
            var framesLength = frames.length;
            var firstFrame = frames[0];
            var lastFrame = frames[frames.length - 1];
            var beforeFirst = frame < firstFrame.frame;
            var afterLast = frame > lastFrame.frame;
            var firstOrLastFrame = beforeFirst ? firstFrame : lastFrame;
            var emitEvents = skrollable.emitEvents;
            var lastFrameIndex = skrollable.lastFrameIndex;
            var key;
            var value;
            if (beforeFirst || afterLast) {
                if (beforeFirst && skrollable.edge === -1 || afterLast && skrollable.edge === 1) {
                    continue;
                }
                if (beforeFirst) {
                    _updateClass(element, [SKROLLABLE_BEFORE_CLASS], [SKROLLABLE_AFTER_CLASS, SKROLLABLE_BETWEEN_CLASS]);
                    if (emitEvents && lastFrameIndex > -1) {
                        _emitEvent(element, firstFrame.eventType, _direction);
                        skrollable.lastFrameIndex = -1;
                    }
                } else {
                    _updateClass(element, [SKROLLABLE_AFTER_CLASS], [SKROLLABLE_BEFORE_CLASS, SKROLLABLE_BETWEEN_CLASS]);
                    if (emitEvents && lastFrameIndex < framesLength) {
                        _emitEvent(element, lastFrame.eventType, _direction);
                        skrollable.lastFrameIndex = framesLength;
                    }
                }
                skrollable.edge = beforeFirst ? -1 : 1;
                switch (skrollable.edgeStrategy) {
                case 'reset':
                    _reset(element);
                    continue;
                case 'ease':
                    frame = firstOrLastFrame.frame;
                    break;
                default:
                case 'set':
                    var props = firstOrLastFrame.props;
                    for (key in props) {
                        if (hasProp.call(props, key)) {
                            value = _interpolateString(props[key].value);
                            if (key.indexOf('@') === 0) {
                                element.setAttribute(key.substr(1), value);
                            } else {
                                skrollr.setStyle(element, key, value);
                            }
                        }
                    }
                    continue;
                }
            } else {
                if (skrollable.edge !== 0) {
                    _updateClass(element, [SKROLLABLE_CLASS, SKROLLABLE_BETWEEN_CLASS], [SKROLLABLE_BEFORE_CLASS, SKROLLABLE_AFTER_CLASS]);
                    skrollable.edge = 0;
                }
            }
            var keyFrameIndex = 0;
            for (; keyFrameIndex < framesLength - 1; keyFrameIndex++) {
                if (frame >= frames[keyFrameIndex].frame && frame <= frames[keyFrameIndex + 1].frame) {
                    var left = frames[keyFrameIndex];
                    var right = frames[keyFrameIndex + 1];
                    for (key in left.props) {
                        if (hasProp.call(left.props, key)) {
                            var progress = (frame - left.frame) / (right.frame - left.frame);
                            progress = left.props[key].easing(progress);
                            value = _calcInterpolation(left.props[key].value, right.props[key].value, progress);
                            value = _interpolateString(value);
                            if (key.indexOf('@') === 0) {
                                element.setAttribute(key.substr(1), value);
                            } else {
                                skrollr.setStyle(element, key, value);
                            }
                        }
                    }
                    if (emitEvents) {
                        if (lastFrameIndex !== keyFrameIndex) {
                            if (_direction === 'down') {
                                _emitEvent(element, left.eventType, _direction);
                            } else {
                                _emitEvent(element, right.eventType, _direction);
                            }
                            skrollable.lastFrameIndex = keyFrameIndex;
                        }
                    }
                    break;
                }
            }
        }
    };
    var _render = function() {
        if (_requestReflow) {
            _requestReflow = false;
            _reflow();
        }
        var renderTop = _instance.getScrollTop();
        var afterAnimationCallback;
        var now = _now();
        var progress;
        if (_scrollAnimation) {
            if (now >= _scrollAnimation.endTime) {
                renderTop = _scrollAnimation.targetTop;
                afterAnimationCallback = _scrollAnimation.done;
                _scrollAnimation = undefined;
            } else {
                progress = _scrollAnimation.easing((now - _scrollAnimation.startTime) / _scrollAnimation.duration);
                renderTop = (_scrollAnimation.startTop + progress * _scrollAnimation.topDiff) | 0;
            }
            _instance.setScrollTop(renderTop, true);
        } else if (!_forceRender) {
            var smoothScrollingDiff = _smoothScrolling.targetTop - renderTop;
            if (smoothScrollingDiff) {
                _smoothScrolling = {
                    startTop: _lastTop,
                    topDiff: renderTop - _lastTop,
                    targetTop: renderTop,
                    startTime: _lastRenderCall,
                    endTime: _lastRenderCall + _smoothScrollingDuration
                };
            }
            if (now <= _smoothScrolling.endTime) {
                progress = easings.sqrt((now - _smoothScrolling.startTime) / _smoothScrollingDuration);
                renderTop = (_smoothScrolling.startTop + progress * _smoothScrolling.topDiff) | 0;
            }
        }
        if (_forceRender || _lastTop !== renderTop) {
            _direction = (renderTop > _lastTop) ? 'down' : (renderTop < _lastTop ? 'up' : _direction);
            _forceRender = false;
            var listenerParams = {
                curTop: renderTop,
                lastTop: _lastTop,
                maxTop: _maxKeyFrame,
                direction: _direction
            };
            var continueRendering = _listeners.beforerender && _listeners.beforerender.call(_instance, listenerParams);
            if (continueRendering !== false) {
                _calcSteps(renderTop, _instance.getScrollTop());
                if (_isMobile && _skrollrBody) {
                    skrollr.setStyle(_skrollrBody, 'transform', 'translate(0, ' + -(_mobileOffset) + 'px) ' + _translateZ);
                }
                _lastTop = renderTop;
                if (_listeners.render) {
                    _listeners.render.call(_instance, listenerParams);
                }
            }
            if (afterAnimationCallback) {
                afterAnimationCallback.call(_instance, false);
            }
        }
        _lastRenderCall = now;
    };
    var _parseProps = function(skrollable) {
        var keyFrameIndex = 0;
        var keyFramesLength = skrollable.keyFrames.length;
        for (; keyFrameIndex < keyFramesLength; keyFrameIndex++) {
            var frame = skrollable.keyFrames[keyFrameIndex];
            var easing;
            var value;
            var prop;
            var props = {};
            var match;
            while ((match = rxPropValue.exec(frame.props)) !== null) {
                prop = match[1];
                value = match[2];
                easing = prop.match(rxPropEasing);
                if (easing !== null) {
                    prop = easing[1];
                    easing = easing[2];
                } else {
                    easing = DEFAULT_EASING;
                }
                value = value.indexOf('!') ? _parseProp(value) : [value.slice(1)];
                props[prop] = {
                    value: value,
                    easing: easings[easing]
                };
            }
            frame.props = props;
        }
    };
    var _parseProp = function(val) {
        var numbers = [];
        rxRGBAIntegerColor.lastIndex = 0;
        val = val.replace(rxRGBAIntegerColor, function(rgba) {
            return rgba.replace(rxNumericValue, function(n) {
                return n / 255 * 100 + '%';
            });
        });
        if (theDashedCSSPrefix) {
            rxGradient.lastIndex = 0;
            val = val.replace(rxGradient, function(s) {
                return theDashedCSSPrefix + s;
            });
        }
        val = val.replace(rxNumericValue, function(n) {
            numbers.push(+n);
            return '{?}';
        });
        numbers.unshift(val);
        return numbers;
    };
    var _fillProps = function(sk) {
        var propList = {};
        var keyFrameIndex;
        var keyFramesLength;
        keyFrameIndex = 0;
        keyFramesLength = sk.keyFrames.length;
        for (; keyFrameIndex < keyFramesLength; keyFrameIndex++) {
            _fillPropForFrame(sk.keyFrames[keyFrameIndex], propList);
        }
        propList = {};
        keyFrameIndex = sk.keyFrames.length - 1;
        for (; keyFrameIndex >= 0; keyFrameIndex--) {
            _fillPropForFrame(sk.keyFrames[keyFrameIndex], propList);
        }
    };
    var _fillPropForFrame = function(frame, propList) {
        var key;
        for (key in propList) {
            if (!hasProp.call(frame.props, key)) {
                frame.props[key] = propList[key];
            }
        }
        for (key in frame.props) {
            propList[key] = frame.props[key];
        }
    };
    var _calcInterpolation = function(val1, val2, progress) {
        var valueIndex;
        var val1Length = val1.length;
        if (val1Length !== val2.length) {
            throw 'Can\'t interpolate between "' + val1[0] + '" and "' + val2[0] + '"';
        }
        var interpolated = [val1[0]];
        valueIndex = 1;
        for (; valueIndex < val1Length; valueIndex++) {
            interpolated[valueIndex] = val1[valueIndex] + ((val2[valueIndex] - val1[valueIndex]) * progress);
        }
        return interpolated;
    };
    var _interpolateString = function(val) {
        var valueIndex = 1;
        rxInterpolateString.lastIndex = 0;
        return val[0].replace(rxInterpolateString, function() {
            return val[valueIndex++];
        });
    };
    var _reset = function(elements, undo) {
        elements = [].concat(elements);
        var skrollable;
        var element;
        var elementsIndex = 0;
        var elementsLength = elements.length;
        for (; elementsIndex < elementsLength; elementsIndex++) {
            element = elements[elementsIndex];
            skrollable = _skrollables[element[SKROLLABLE_ID_DOM_PROPERTY]];
            if (!skrollable) {
                continue;
            }
            if (undo) {
                element.style.cssText = skrollable.dirtyStyleAttr;
                _updateClass(element, skrollable.dirtyClassAttr);
            } else {
                skrollable.dirtyStyleAttr = element.style.cssText;
                skrollable.dirtyClassAttr = _getClass(element);
                element.style.cssText = skrollable.styleAttr;
                _updateClass(element, skrollable.classAttr);
            }
        }
    };
    var _detect3DTransforms = function() {
        _translateZ = 'translateZ(0)';
        skrollr.setStyle(_skrollrBody, 'transform', _translateZ);
        var computedStyle = getStyle(_skrollrBody);
        var computedTransform = computedStyle.getPropertyValue('transform');
        var computedTransformWithPrefix = computedStyle.getPropertyValue(theDashedCSSPrefix + 'transform');
        var has3D = (computedTransform && computedTransform !== 'none') || (computedTransformWithPrefix && computedTransformWithPrefix !== 'none');
        if (!has3D) {
            _translateZ = '';
        }
    };
    skrollr.setStyle = function(el, prop, val) {
        var style = el.style;
        prop = prop.replace(rxCamelCase, rxCamelCaseFn).replace('-', '');
        if (prop === 'zIndex') {
            if (isNaN(val)) {
                style[prop] = val;
            } else {
                style[prop] = '' + (val | 0);
            }
        } else if (prop === 'float') {
            style.styleFloat = style.cssFloat = val;
        } else {
            try {
                if (theCSSPrefix) {
                    style[theCSSPrefix + prop.slice(0, 1).toUpperCase() + prop.slice(1)] = val;
                }
                style[prop] = val;
            } catch (ignore) {}
        }
    }
    ;
    var _addEvent = skrollr.addEvent = function(element, names, callback) {
        var intermediate = function(e) {
            e = e || window.event;
            if (!e.target) {
                e.target = e.srcElement;
            }
            if (!e.preventDefault) {
                e.preventDefault = function() {
                    e.returnValue = false;
                    e.defaultPrevented = true;
                }
                ;
            }
            return callback.call(this, e);
        };
        names = names.split(' ');
        var name;
        var nameCounter = 0;
        var namesLength = names.length;
        for (; nameCounter < namesLength; nameCounter++) {
            name = names[nameCounter];
            if (element.addEventListener) {
                element.addEventListener(name, callback, false);
            } else {
                element.attachEvent('on' + name, intermediate);
            }
            _registeredEvents.push({
                element: element,
                name: name,
                listener: callback
            });
        }
    }
    ;
    var _removeEvent = skrollr.removeEvent = function(element, names, callback) {
        names = names.split(' ');
        var nameCounter = 0;
        var namesLength = names.length;
        for (; nameCounter < namesLength; nameCounter++) {
            if (element.removeEventListener) {
                element.removeEventListener(names[nameCounter], callback, false);
            } else {
                element.detachEvent('on' + names[nameCounter], callback);
            }
        }
    }
    ;
    var _removeAllEvents = function() {
        var eventData;
        var eventCounter = 0;
        var eventsLength = _registeredEvents.length;
        for (; eventCounter < eventsLength; eventCounter++) {
            eventData = _registeredEvents[eventCounter];
            _removeEvent(eventData.element, eventData.name, eventData.listener);
        }
        _registeredEvents = [];
    };
    var _emitEvent = function(element, name, direction) {
        if (_listeners.keyframe) {
            _listeners.keyframe.call(_instance, element, name, direction);
        }
    };
    var _reflow = function() {
        var pos = _instance.getScrollTop();
        _maxKeyFrame = 0;
        if (_forceHeight && !_isMobile) {
            body.style.height = '';
        }
        _updateDependentKeyFrames();
        if (_forceHeight && !_isMobile) {
            body.style.height = (_maxKeyFrame + documentElement.clientHeight) + 'px';
        }
        if (_isMobile) {
            _instance.setScrollTop(Math.min(_instance.getScrollTop(), _maxKeyFrame));
        } else {
            _instance.setScrollTop(pos, true);
        }
        _forceRender = true;
    };
    var _processConstants = function() {
        var viewportHeight = documentElement.clientHeight;
        var copy = {};
        var prop;
        var value;
        for (prop in _constants) {
            value = _constants[prop];
            if (typeof value === 'function') {
                value = value.call(_instance);
            } else if ((/p$/).test(value)) {
                value = (value.slice(0, -1) / 100) * viewportHeight;
            }
            copy[prop] = value;
        }
        return copy;
    };
    var _getDocumentHeight = function() {
        var skrollrBodyHeight = 0;
        var bodyHeight;
        if (_skrollrBody) {
            skrollrBodyHeight = Math.max(_skrollrBody.offsetHeight, _skrollrBody.scrollHeight);
        }
        bodyHeight = Math.max(skrollrBodyHeight, body.scrollHeight, body.offsetHeight, documentElement.scrollHeight, documentElement.offsetHeight, documentElement.clientHeight);
        return bodyHeight - documentElement.clientHeight;
    };
    var _getClass = function(element) {
        var prop = 'className';
        if (window.SVGElement && element instanceof window.SVGElement) {
            element = element[prop];
            prop = 'baseVal';
        }
        return element[prop];
    };
    var _updateClass = function(element, add, remove) {
        var prop = 'className';
        if (window.SVGElement && element instanceof window.SVGElement) {
            element = element[prop];
            prop = 'baseVal';
        }
        if (remove === undefined) {
            element[prop] = add;
            return;
        }
        var val = element[prop];
        var classRemoveIndex = 0;
        var removeLength = remove.length;
        for (; classRemoveIndex < removeLength; classRemoveIndex++) {
            val = _untrim(val).replace(_untrim(remove[classRemoveIndex]), ' ');
        }
        val = _trim(val);
        var classAddIndex = 0;
        var addLength = add.length;
        for (; classAddIndex < addLength; classAddIndex++) {
            if (_untrim(val).indexOf(_untrim(add[classAddIndex])) === -1) {
                val += ' ' + add[classAddIndex];
            }
        }
        element[prop] = _trim(val);
    };
    var _trim = function(a) {
        return a.replace(rxTrim, '');
    };
    var _untrim = function(a) {
        return ' ' + a + ' ';
    };
    var _now = Date.now || function() {
        return +new Date();
    }
    ;
    var _keyFrameComparator = function(a, b) {
        return a.frame - b.frame;
    };
    var _instance;
    var _skrollables;
    var _skrollrBody;
    var _listeners;
    var _forceHeight;
    var _maxKeyFrame = 0;
    var _scale = 1;
    var _constants;
    var _mobileDeceleration;
    var _direction = 'down';
    var _lastTop = -1;
    var _lastRenderCall = _now();
    var _lastViewportWidth = 0;
    var _lastViewportHeight = 0;
    var _requestReflow = false;
    var _scrollAnimation;
    var _smoothScrollingEnabled;
    var _smoothScrollingDuration;
    var _smoothScrolling;
    var _forceRender;
    var _skrollableIdCounter = 0;
    var _edgeStrategy;
    var _isMobile = false;
    var _mobileOffset = 0;
    var _translateZ;
    var _registeredEvents = [];
    var _animFrame;
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return skrollr;
        });
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = skrollr;
    } else {
        window.skrollr = skrollr;
    }
}(window, document));
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }
}(function($) {
    var pluses = /\+/g;
    function encode(s) {
        return config.raw ? s : encodeURIComponent(s);
    }
    function decode(s) {
        return config.raw ? s : decodeURIComponent(s);
    }
    function stringifyCookieValue(value) {
        return encode(config.json ? JSON.stringify(value) : String(value));
    }
    function parseCookieValue(s) {
        if (s.indexOf('"') === 0) {
            s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
        }
        try {
            s = decodeURIComponent(s.replace(pluses, ' '));
            return config.json ? JSON.parse(s) : s;
        } catch (e) {}
    }
    function read(s, converter) {
        var value = config.raw ? s : parseCookieValue(s);
        return $.isFunction(converter) ? converter(value) : value;
    }
    var config = $.cookie = function(key, value, options) {
        if (arguments.length > 1 && !$.isFunction(value)) {
            options = $.extend({}, config.defaults, options);
            if (typeof options.expires === 'number') {
                var days = options.expires
                  , t = options.expires = new Date();
                t.setMilliseconds(t.getMilliseconds() + days * 864e+5);
            }
            return (document.cookie = [encode(key), '=', stringifyCookieValue(value), options.expires ? '; expires=' + options.expires.toUTCString() : '', options.path ? '; path=' + options.path : '', options.domain ? '; domain=' + options.domain : '', options.secure ? '; secure' : ''].join(''));
        }
        var result = key ? undefined : {}
          , cookies = document.cookie ? document.cookie.split('; ') : []
          , i = 0
          , l = cookies.length;
        for (; i < l; i++) {
            var parts = cookies[i].split('=')
              , name = decode(parts.shift())
              , cookie = parts.join('=');
            if (key === name) {
                result = read(cookie, value);
                break;
            }
            if (!key && (cookie = read(cookie)) !== undefined) {
                result[name] = cookie;
            }
        }
        return result;
    }
    ;
    config.defaults = {};
    $.removeCookie = function(key, options) {
        $.cookie(key, '', $.extend({}, options, {
            expires: -1
        }));
        return !$.cookie(key);
    }
    ;
}));
!function($) {
    "use strict";
    var Typed = function(el, options) {
        this.el = $(el);
        this.options = $.extend({}, $.fn.typed.defaults, options);
        this.isInput = this.el.is('input');
        this.attr = this.options.attr;
        this.showCursor = this.isInput ? false : this.options.showCursor;
        this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text()
        this.contentType = this.options.contentType;
        this.typeSpeed = this.options.typeSpeed;
        this.startDelay = this.options.startDelay;
        this.backSpeed = this.options.backSpeed;
        this.backDelay = this.options.backDelay;
        this.stringsElement = this.options.stringsElement;
        this.strings = this.options.strings;
        this.strPos = 0;
        this.arrayPos = 0;
        this.stopNum = 0;
        this.loop = this.options.loop;
        this.loopCount = this.options.loopCount;
        this.curLoop = 0;
        this.stop = false;
        this.cursorChar = this.options.cursorChar;
        this.shuffle = this.options.shuffle;
        this.sequence = [];
        this.build();
    };
    Typed.prototype = {
        constructor: Typed,
        init: function() {
            var self = this;
            self.timeout = setTimeout(function() {
                for (var i = 0; i < self.strings.length; ++i)
                    self.sequence[i] = i;
                if (self.shuffle)
                    self.sequence = self.shuffleArray(self.sequence);
                self.typewrite(self.strings[self.sequence[self.arrayPos]], self.strPos);
            }, self.startDelay);
        },
        build: function() {
            var self = this;
            if (this.showCursor === true) {
                this.cursor = $("<span class=\"typed-cursor\">" + this.cursorChar + "</span>");
                this.el.after(this.cursor);
            }
            if (this.stringsElement) {
                self.strings = [];
                this.stringsElement.hide();
                var strings = this.stringsElement.find('p');
                $.each(strings, function(key, value) {
                    self.strings.push($(value).html());
                });
            }
            this.init();
        },
        typewrite: function(curString, curStrPos) {
            if (this.stop === true) {
                return;
            }
            var humanize = Math.round(Math.random() * (100 - 30)) + this.typeSpeed;
            var self = this;
            self.timeout = setTimeout(function() {
                var charPause = 0;
                var substr = curString.substr(curStrPos);
                if (substr.charAt(0) === '^') {
                    var skip = 1;
                    if (/^\^\d+/.test(substr)) {
                        substr = /\d+/.exec(substr)[0];
                        skip += substr.length;
                        charPause = parseInt(substr);
                    }
                    curString = curString.substring(0, curStrPos) + curString.substring(curStrPos + skip);
                }
                if (self.contentType === 'html') {
                    var curChar = curString.substr(curStrPos).charAt(0)
                    if (curChar === '<' || curChar === '&') {
                        var tag = '';
                        var endTag = '';
                        if (curChar === '<') {
                            endTag = '>'
                        } else {
                            endTag = ';'
                        }
                        while (curString.substr(curStrPos).charAt(0) !== endTag) {
                            tag += curString.substr(curStrPos).charAt(0);
                            curStrPos++;
                        }
                        curStrPos++;
                        tag += endTag;
                    }
                }
                self.timeout = setTimeout(function() {
                    if (curStrPos === curString.length) {
                        self.options.onStringTyped(self.arrayPos);
                        if (self.arrayPos === self.strings.length - 1) {
                            self.options.callback();
                            self.curLoop++;
                            if (self.loop === false || self.curLoop === self.loopCount)
                                return;
                        }
                        self.timeout = setTimeout(function() {
                            self.backspace(curString, curStrPos);
                        }, self.backDelay);
                    } else {
                        if (curStrPos === 0)
                            self.options.preStringTyped(self.arrayPos);
                        var nextString = curString.substr(0, curStrPos + 1);
                        if (self.attr) {
                            self.el.attr(self.attr, nextString);
                        } else {
                            if (self.isInput) {
                                self.el.val(nextString);
                            } else if (self.contentType === 'html') {
                                self.el.html(nextString);
                            } else {
                                self.el.text(nextString);
                            }
                        }
                        curStrPos++;
                        self.typewrite(curString, curStrPos);
                    }
                }, charPause);
            }, humanize);
        },
        backspace: function(curString, curStrPos) {
            if (this.stop === true) {
                return;
            }
            var humanize = Math.round(Math.random() * (100 - 30)) + this.backSpeed;
            var self = this;
            self.timeout = setTimeout(function() {
                if (self.contentType === 'html') {
                    if (curString.substr(curStrPos).charAt(0) === '>') {
                        var tag = '';
                        while (curString.substr(curStrPos).charAt(0) !== '<') {
                            tag -= curString.substr(curStrPos).charAt(0);
                            curStrPos--;
                        }
                        curStrPos--;
                        tag += '<';
                    }
                }
                var nextString = curString.substr(0, curStrPos);
                if (self.attr) {
                    self.el.attr(self.attr, nextString);
                } else {
                    if (self.isInput) {
                        self.el.val(nextString);
                    } else if (self.contentType === 'html') {
                        self.el.html(nextString);
                    } else {
                        self.el.text(nextString);
                    }
                }
                if (curStrPos > self.stopNum) {
                    curStrPos--;
                    self.backspace(curString, curStrPos);
                } else if (curStrPos <= self.stopNum) {
                    self.arrayPos++;
                    if (self.arrayPos === self.strings.length) {
                        self.arrayPos = 0;
                        if (self.shuffle)
                            self.sequence = self.shuffleArray(self.sequence);
                        self.init();
                    } else
                        self.typewrite(self.strings[self.sequence[self.arrayPos]], curStrPos);
                }
            }, humanize);
        },
        shuffleArray: function(array) {
            var tmp, current, top = array.length;
            if (top)
                while (--top) {
                    current = Math.floor(Math.random() * (top + 1));
                    tmp = array[current];
                    array[current] = array[top];
                    array[top] = tmp;
                }
            return array;
        },
        reset: function() {
            var self = this;
            clearInterval(self.timeout);
            var id = this.el.attr('id');
            this.el.after('<span id="' + id + '"/>')
            this.el.remove();
            if (typeof this.cursor !== 'undefined') {
                this.cursor.remove();
            }
            self.options.resetCallback();
        }
    };
    $.fn.typed = function(option) {
        return this.each(function() {
            var $this = $(this)
              , data = $this.data('typed')
              , options = typeof option == 'object' && option;
            if (!data)
                $this.data('typed', (data = new Typed(this,options)));
            if (typeof option == 'string')
                data[option]();
        });
    }
    ;
    $.fn.typed.defaults = {
        strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
        stringsElement: null,
        typeSpeed: 0,
        startDelay: 0,
        backSpeed: 0,
        shuffle: false,
        backDelay: 500,
        loop: false,
        loopCount: false,
        showCursor: true,
        cursorChar: "|",
        attr: null,
        contentType: 'html',
        callback: function() {},
        preStringTyped: function() {},
        onStringTyped: function() {},
        resetCallback: function() {}
    };
}(window.jQuery);
(function($) {
    'use strict';
    $(window).on("load", function() {
        $('body').imagesLoaded({}, function() {
            var preload = $('.preloader');
            preload.addClass('loaded');
            preload.find('.centrize').fadeOut();
            initCursor();
            $('.elementor-widget-text-editor').attr('data-animate', 'active');
            $('.scroll-animate').scrolla({
                once: true,
                mobile: true,
                speed: 3.0
            });
        });
    });
    $(function() {
        'use strict';
        setHeightFullSection();
        $(window).resize(function() {
            setHeightFullSection();
        });
        $('.js-parallax').jarallax({
            speed: 0.65,
            type: 'scroll'
        });
        if ($('.v-line').length) {
            $('.v-line .elementor-container').append('<div class="v-line-block"><span></span></div>');
            $('.v-line .hero-started').append('<div class="v-line-block"><span></span></div>');
        }
        Splitting();
        if ($(window).width() > 1200) {
            var s = skrollr.init();
        }
        $('.subtitle.subtitle-typed').each(function() {
            var subtitleContainer = $(this);
            subtitleContainer.typed({
                stringsElement: subtitleContainer.find('.typing-title'),
                backDelay: 3500,
                typeSpeed: 0,
                loop: true
            });
        });
        if ($('.header').length) {
            $(window).on('scroll', function(event) {
                if ($(window).scrollTop() > 100) {
                    $('.header').addClass('sticky');
                    if (this.oldScroll < this.scrollY) {
                        $('.header').addClass('animate-in');
                    } else {
                        if ($(window).scrollTop() < 200) {
                            $('.header').addClass('animate-out');
                        }
                    }
                } else {
                    $('.header').removeClass('sticky');
                    $('.header').removeClass('animate-in');
                    $('.header').removeClass('animate-out');
                }
                this.oldScroll = this.scrollY;
            });
        }
        function checkScrollDirectionIsUp(event) {
            if (event.wheelDelta) {
                return event.wheelDelta > 0;
            }
            return event.deltaY < 0;
        }
        var skin = $.cookie('skin');
        if (skin == 'light') {
            $('body').removeClass('dark-skin');
            $('body').addClass('light-skin');
        }
        if (skin == 'dark') {
            $('body').removeClass('light-skin');
            $('body').addClass('dark-skin');
        }
        if ($('body').hasClass('dark-skin')) {
            $('.header .switcher-btn').addClass('active');
        }
        $('.header').on('click', '.switcher-btn', function() {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $('body').removeClass('dark-skin');
                $('body').addClass('light-skin');
                $.cookie('skin', 'light', {
                    expires: 7,
                    path: '/'
                });
            } else {
                $(this).addClass('active');
                $('body').removeClass('light-skin');
                $('body').addClass('dark-skin');
                $.cookie('skin', 'dark', {
                    expires: 7,
                    path: '/'
                });
            }
            return false;
        });
        $('.header').on('click', '.menu-btn', function() {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).addClass('no-touch');
                $('.menu-overlay').addClass('no-touch');
                $('body').removeClass('no-scroll');
                $('.menu-full-overlay').removeClass('is-open');
                $('.menu-full-overlay').removeClass('has-scroll');
                $('.menu-full-overlay').removeClass('animate-active');
                setTimeout(function() {
                    $('.menu-full-overlay').removeClass('visible');
                    $('.menu-btn').removeClass('no-touch');
                    $('.menu-overlay').removeClass('no-touch');
                }, 1000);
            } else {
                $(this).addClass('active no-touch');
                $('.menu-overlay').addClass('no-touch');
                var height = $(window).height();
                $('.menu-full-overlay').css({
                    'height': height
                });
                $('body').addClass('no-scroll');
                $('.menu-full-overlay').addClass('is-open visible');
                setTimeout(function() {
                    $('.menu-full-overlay').addClass('has-scroll animate-active');
                    $('.menu-btn').removeClass('no-touch');
                    $('.menu-overlay').removeClass('no-touch');
                }, 1000);
            }
            return false;
        });
        $('.menu-full-overlay').on('click', '.menu-overlay', function() {
            $('.menu-btn').removeClass('active');
            $('.menu-btn').addClass('no-touch');
            $('.menu-overlay').addClass('no-touch');
            $('body').removeClass('no-scroll');
            $('.menu-full-overlay').removeClass('is-open');
            $('.menu-full-overlay').removeClass('has-scroll');
            $('.menu-full-overlay').removeClass('animate-active');
            setTimeout(function() {
                $('.menu-full-overlay').removeClass('visible');
                $('.menu-btn').removeClass('no-touch');
                $('.menu-overlay').removeClass('no-touch');
            }, 1000);
            return false;
        });
        $('.menu-full').on('click', 'a', function() {
            if (!$(this).parent().hasClass('has-children')) {
                $('.header .menu-btn.active').trigger('click');
            }
        });
        $('.menu-full .has-children > a').append('<i class="fas fa-chevron-down"></i>');
        $('.menu-full').on('click', '.has-children > a', function() {
            if ($(this).closest('li').hasClass('opened')) {
                $(this).closest('li').removeClass('opened');
                $(this).closest('li').addClass('closed');
                $(this).closest('li').find('> ul').slideUp();
            } else {
                $(this).closest('ul').find('> li').removeClass('closed').removeClass('opened');
                $(this).closest('ul').find('> li').find('> ul').slideUp();
                $(this).closest('li').addClass('opened');
                $(this).closest('li').find('> ul').slideDown();
            }
            return false;
        });
        var swiperServices = new Swiper('.js-services',{
            slidesPerView: 3,
            spaceBetween: 40,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            noSwipingSelector: 'a',
            loop: false,
            speed: 1000,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
            },
            navigation: false,
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                767: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 40
                }
            }
        });
        var swiperTestimonials = new Swiper('.js-testimonials',{
            slidesPerView: 3,
            spaceBetween: 40,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            noSwipingSelector: 'a',
            loop: false,
            speed: 1000,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
            },
            navigation: false,
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                767: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 40
                }
            }
        });
        var $container = $('.works-items');
        $container.imagesLoaded(function() {
            $container.isotope({
                itemSelector: '.works-col',
                percentPosition: true,
            });
        });
        var $gal_container = $('.m-gallery');
        $gal_container.imagesLoaded(function() {
            $gal_container.isotope({
                itemSelector: '.col-lg-6',
                percentPosition: true,
            });
        });
        $('.filter-links').on('click', 'a', function() {
            var filterValue = $(this).attr('data-href');
            $container.isotope({
                filter: filterValue
            });
            $('.filter-links a').removeClass('active');
            $(this).addClass('active');
            if (!$(filterValue).find('.scroll-animate').hasClass('animate__active')) {
                $(filterValue).find('.scroll-animate').addClass('animate__active');
            }
            return false;
        });
        $('.has-popup-video').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            iframe: {
                patterns: {
                    youtube_short: {
                        index: 'youtu.be/',
                        id: 'youtu.be/',
                        src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                    }
                }
            },
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false,
            mainClass: 'mfp-fade',
            callbacks: {
                markupParse: function(template, values, item) {
                    template.find('iframe').attr('allow', 'autoplay');
                }
            }
        });
        $('.has-popup-audio').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false,
            mainClass: 'mfp-fade'
        });
        $('.tab-menu').on('click', '.tab-btn', function() {
            var tab_bl = $(this).attr('href');
            $(this).closest('.tab-menu').find('li').removeClass('active');
            $(this).closest('li').addClass('active');
            $(this).closest('.tabs').find('> .tab-item').hide();
            $(tab_bl).fadeIn();
            return false;
        });
        $('.lui-collapse-item').on('click', '.lui-collapse-btn', function() {
            if ($(this).closest('.lui-collapse-item').hasClass('opened')) {
                $(this).closest('.lui-collapse-item').removeClass('opened');
                $(this).removeClass('active');
            } else {
                $(this).closest('.lui-collapse-item').addClass('opened');
                $(this).addClass('active');
            }
        });
        $('.m-video-large .video').on('click', '.play, .img', function() {
            $(this).closest('.video').addClass('active');
            var iframe = $(this).closest('.video').find('.js-video-iframe');
            largeVideoPlay(iframe);
            return false;
        });
        function largeVideoPlay(iframe) {
            var src = iframe.data('src');
            iframe.attr('src', src);
        }
        $('.header .cart-btn .cart-icon').on('click', function() {
            if ($(this).closest('.cart-btn').hasClass('opened')) {
                $(this).closest('.cart-btn').removeClass('opened');
                $(this).closest('.cart-btn').find('.cart-widget').hide();
            } else {
                $(this).closest('.cart-btn').addClass('opened');
                $(this).closest('.cart-btn').find('.cart-widget').fadeIn();
            }
            return false;
        });
    });
    function initCursor() {
        var mouseX = window.innerWidth / 2
          , mouseY = window.innerHeight / 2;
        var cursor = {
            el: $('.cursor'),
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
            w: 30,
            h: 30,
            update: function() {
                var l = this.x - this.w / 2;
                var t = this.y - this.h / 2;
                this.el.css({
                    'transform': 'translate3d(' + l + 'px,' + t + 'px, 0)'
                });
            }
        }
        $(window).mousemove(function(e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });
        $('a, .swiper-pagination, .swiper-button-prev, .swiper-button-next, button, .button, .btn, .lnk').hover(function() {
            $('.cursor').addClass("cursor-zoom");
        }, function() {
            $('.cursor').removeClass("cursor-zoom");
        });
        setInterval(move, 900 / 60);
        function move() {
            cursor.x = lerp(cursor.x, mouseX, 0.1);
            cursor.y = lerp(cursor.y, mouseY, 0.1);
            cursor.update()
        }
        function lerp(start, end, amt) {
            return (1 - amt) * start + amt * end
        }
    }
    function setHeightFullSection() {
        var width = $(window).width();
        var height = $(window).height();
        $('.error-page, .menu-full-overlay, .preloader .centrize').css({
            'height': height
        });
    }
}
)(jQuery);
/*!
 Ridiculously Responsive Social Sharing Buttons
 Team: @dbox, @joshuatuscan
 Site: http://www.rrssb.ml
*/
+(function(window, $, undefined) {
    'use strict';
    $.fn.rrssb = function(options) {
        var settings = $.extend({
            description: undefined,
            emailAddress: undefined,
            emailBody: undefined,
            emailSubject: undefined,
            image: undefined,
            title: undefined,
            url: undefined
        }, options);
        settings.emailSubject = settings.emailSubject || settings.title;
        settings.emailBody = settings.emailBody || ((settings.description ? settings.description : '') + (settings.url ? '\n\n' + settings.url : ''));
        for (var key in settings) {
            if (settings.hasOwnProperty(key) && settings[key] !== undefined) {
                settings[key] = encodeString(settings[key]);
            }
        }
        ;if (settings.url !== undefined) {
            $(this).find('.share-btn-facebook').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=' + settings.url);
            $(this).find('.share-btn-tumblr').attr('href', 'http://tumblr.com/share/link?url=' + settings.url + (settings.title !== undefined ? '&name=' + settings.title : '') + (settings.description !== undefined ? '&description=' + settings.description : ''));
            $(this).find('.share-btn-linkedin').attr('href', 'http://www.linkedin.com/shareArticle?mini=true&url=' + settings.url + (settings.title !== undefined ? '&title=' + settings.title : '') + (settings.description !== undefined ? '&summary=' + settings.description : ''));
            $(this).find('.share-btn-twitter').attr('href', 'https://twitter.com/intent/tweet?text=' + (settings.description !== undefined ? settings.description : '') + '%20' + settings.url);
            $(this).find('.share-btn-reddit').attr('href', 'http://www.reddit.com/submit?url=' + settings.url + (settings.description !== undefined ? '&text=' + settings.description : '') + (settings.title !== undefined ? '&title=' + settings.title : ''));
            $(this).find('.share-btn-googleplus').attr('href', 'https://plus.google.com/share?url=' + settings.url);
            $(this).find('.share-btn-pinterest').attr('href', 'http://pinterest.com/pin/create/button/?url=' + settings.url + ((settings.image !== undefined) ? '&amp;media=' + settings.image : '') + (settings.description !== undefined ? '&description=' + settings.description : ''));
            $(this).find('.share-btn-print').attr('href', 'javascript:window.print()');
            $(this).find('.share-btn-whatsapp').attr('href', 'whatsapp://send?text=' + (settings.description !== undefined ? settings.description + '%20' : (settings.title !== undefined ? settings.title + '%20' : '')) + settings.url);
        }
        if (settings.emailAddress !== undefined || settings.emailSubject) {
            $(this).find('.rrssb-email a').attr('href', 'mailto:' + (settings.emailAddress ? settings.emailAddress : '') + '?' + (settings.emailSubject !== undefined ? 'subject=' + settings.emailSubject : '') + (settings.emailBody !== undefined ? '&body=' + settings.emailBody : ''));
        }
    }
    ;
    var encodeString = function(string) {
        if (string !== undefined && string !== null) {
            if (string.match(/%[0-9a-f]{2}/i) !== null) {
                string = decodeURIComponent(string);
                encodeString(string);
            } else {
                return encodeURIComponent(string);
            }
        }
    };
    var rrssbInit = function() {
        $('.share-btn').each(function(index) {
            $(this).addClass('share-btn-' + (index + 1));
        });
    };
    var popupCenter = function(url, title, w, h) {
        var dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left;
        var dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top;
        var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
        var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
        var left = ((width / 2) - (w / 2)) + dualScreenLeft;
        var top = ((height / 3) - (h / 3)) + dualScreenTop;
        var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
        if (newWindow && newWindow.focus) {
            newWindow.focus();
        }
    };
    $(document).ready(function() {
        try {
            $(document).on('click', '.share-btn', {}, function popUp(e) {
                var self = $(this);
                popupCenter(self.attr('href'), self.attr('title'), 580, 470);
                e.preventDefault();
            });
        } catch (e) {}
        rrssbInit();
    });
    window.rrssbInit = rrssbInit;
}
)(window, jQuery);
/*! elementor - v3.18.0 - 08-12-2023 */
(self.webpackChunkelementor = self.webpackChunkelementor || []).push([[354], {
    381: (e,t)=>{
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        t.default = (e,t)=>{
            t = Array.isArray(t) ? t : [t];
            for (const n of t)
                if (e.constructor.name === n.prototype[Symbol.toStringTag])
                    return !0;
            return !1
        }
    }
    ,
    8135: (e,t)=>{
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class _default extends elementorModules.ViewModule {
            getDefaultSettings() {
                return {
                    selectors: {
                        elements: ".elementor-element",
                        nestedDocumentElements: ".elementor .elementor-element"
                    },
                    classes: {
                        editMode: "elementor-edit-mode"
                    }
                }
            }
            getDefaultElements() {
                const e = this.getSettings("selectors");
                return {
                    $elements: this.$element.find(e.elements).not(this.$element.find(e.nestedDocumentElements))
                }
            }
            getDocumentSettings(e) {
                let t;
                if (this.isEdit) {
                    t = {};
                    const e = elementor.settings.page.model;
                    jQuery.each(e.getActiveControls(), (n=>{
                        t[n] = e.attributes[n]
                    }
                    ))
                } else
                    t = this.$element.data("elementor-settings") || {};
                return this.getItems(t, e)
            }
            runElementsHandlers() {
                this.elements.$elements.each(((e,t)=>setTimeout((()=>elementorFrontend.elementsHandler.runReadyTrigger(t)))))
            }
            onInit() {
                this.$element = this.getSettings("$element"),
                super.onInit(),
                this.isEdit = this.$element.hasClass(this.getSettings("classes.editMode")),
                this.isEdit ? elementor.on("document:loaded", (()=>{
                    elementor.settings.page.model.on("change", this.onSettingsChange.bind(this))
                }
                )) : this.runElementsHandlers()
            }
            onSettingsChange() {}
        }
        t.default = _default
    }
    ,
    6752: (e,t,n)=>{
        "use strict";
        var i = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var r = i(n(3090));
        class NestedTitleKeyboardHandler extends r.default {
            __construct(e) {
                super.__construct(e),
                this.directionNext = "next",
                this.directionPrevious = "previous",
                this.focusableElementSelector = 'audio, button, canvas, details, iframe, input, select, summary, textarea, video, [accesskey], [contenteditable], [href], [tabindex]:not([tabindex="-1"])'
            }
            getDefaultSettings() {
                return {
                    selectors: {
                        itemTitle: ".e-n-tab-title",
                        itemContainer: ".e-n-tabs-content > .e-con"
                    },
                    ariaAttributes: {
                        titleStateAttribute: "aria-selected",
                        activeTitleSelector: '[aria-selected="true"]'
                    },
                    datasets: {
                        titleIndex: "data-tab-index"
                    },
                    keyDirection: {
                        ArrowLeft: elementorFrontendConfig.is_rtl ? this.directionNext : this.directionPrevious,
                        ArrowUp: this.directionPrevious,
                        ArrowRight: elementorFrontendConfig.is_rtl ? this.directionPrevious : this.directionNext,
                        ArrowDown: this.directionNext
                    }
                }
            }
            getDefaultElements() {
                const e = this.getSettings("selectors");
                return {
                    $itemTitles: this.findElement(e.itemTitle),
                    $itemContainers: this.findElement(e.itemContainer),
                    $focusableContainerElements: this.getFocusableElements(this.findElement(e.itemContainer))
                }
            }
            getFocusableElements(e) {
                return e.find(this.focusableElementSelector).not("[disabled], [inert]")
            }
            getKeyDirectionValue(e) {
                const t = this.getSettings("keyDirection")[e.key];
                return this.directionNext === t ? 1 : -1
            }
            getTitleIndex(e) {
                const {titleIndex: t} = this.getSettings("datasets");
                return e.getAttribute(t)
            }
            getTitleFilterSelector(e) {
                const {titleIndex: t} = this.getSettings("datasets");
                return `[${t}="${e}"]`
            }
            getActiveTitleElement() {
                const e = this.getSettings("ariaAttributes").activeTitleSelector;
                return this.elements.$itemTitles.filter(e)
            }
            onInit() {
                super.onInit(...arguments)
            }
            bindEvents() {
                this.elements.$itemTitles.on(this.getTitleEvents()),
                this.elements.$focusableContainerElements.on(this.getContentElementEvents())
            }
            unbindEvents() {
                this.elements.$itemTitles.off(),
                this.elements.$itemContainers.children().off()
            }
            getTitleEvents() {
                return {
                    keydown: this.handleTitleKeyboardNavigation.bind(this)
                }
            }
            getContentElementEvents() {
                return {
                    keydown: this.handleContentElementKeyboardNavigation.bind(this)
                }
            }
            isDirectionKey(e) {
                return ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)
            }
            isActivationKey(e) {
                return ["Enter", " "].includes(e.key)
            }
            handleTitleKeyboardNavigation(e) {
                if (this.isDirectionKey(e)) {
                    e.preventDefault();
                    const t = parseInt(this.getTitleIndex(e.currentTarget)) || 1
                      , n = this.elements.$itemTitles.length
                      , i = this.getTitleIndexFocusUpdated(e, t, n);
                    this.changeTitleFocus(i),
                    e.stopPropagation()
                } else if (this.isActivationKey(e)) {
                    if (e.preventDefault(),
                    this.handeTitleLinkEnterOrSpaceEvent(e))
                        return;
                    const t = this.getTitleIndex(e.currentTarget);
                    elementorFrontend.elements.$window.trigger("elementor/nested-elements/activate-by-keyboard", {
                        widgetId: this.getID(),
                        titleIndex: t
                    })
                } else
                    "Escape" === e.key && this.handleTitleEscapeKeyEvents(e)
            }
            handeTitleLinkEnterOrSpaceEvent(e) {
                const t = "a" === e?.currentTarget?.tagName?.toLowerCase();
                return !elementorFrontend.isEditMode() && t && (e?.currentTarget?.click(),
                e.stopPropagation()),
                t
            }
            getTitleIndexFocusUpdated(e, t, n) {
                let i = 0;
                switch (e.key) {
                case "Home":
                    i = 1;
                    break;
                case "End":
                    i = n;
                    break;
                default:
                    const r = this.getKeyDirectionValue(e);
                    i = n < t + r ? 1 : 0 === t + r ? n : t + r
                }
                return i
            }
            changeTitleFocus(e) {
                const t = this.elements.$itemTitles.filter(this.getTitleFilterSelector(e));
                this.setTitleTabindex(e),
                t.trigger("focus")
            }
            setTitleTabindex(e) {
                this.elements.$itemTitles.attr("tabindex", "-1");
                this.elements.$itemTitles.filter(this.getTitleFilterSelector(e)).attr("tabindex", "0")
            }
            handleTitleEscapeKeyEvents() {}
            handleContentElementKeyboardNavigation(e) {
                "Tab" !== e.key || e.shiftKey ? "Escape" === e.key && (e.preventDefault(),
                e.stopPropagation(),
                this.handleContentElementEscapeEvents(e)) : this.handleContentElementTabEvents(e)
            }
            handleContentElementEscapeEvents() {
                this.getActiveTitleElement().trigger("focus")
            }
            handleContentElementTabEvents() {}
        }
        t.default = NestedTitleKeyboardHandler
    }
    ,
    1292: (e,t,n)=>{
        "use strict";
        var i = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var r = i(n(2821));
        class CarouselHandlerBase extends r.default {
            getDefaultSettings() {
                return {
                    selectors: {
                        carousel: `.${elementorFrontend.config.swiperClass}`,
                        swiperWrapper: ".swiper-wrapper",
                        slideContent: ".swiper-slide",
                        swiperArrow: ".elementor-swiper-button",
                        paginationWrapper: ".swiper-pagination",
                        paginationBullet: ".swiper-pagination-bullet",
                        paginationBulletWrapper: ".swiper-pagination-bullets"
                    }
                }
            }
            getDefaultElements() {
                const e = this.getSettings("selectors")
                  , t = {
                    $swiperContainer: this.$element.find(e.carousel),
                    $swiperWrapper: this.$element.find(e.swiperWrapper),
                    $swiperArrows: this.$element.find(e.swiperArrow),
                    $paginationWrapper: this.$element.find(e.paginationWrapper),
                    $paginationBullets: this.$element.find(e.paginationBullet),
                    $paginationBulletWrapper: this.$element.find(e.paginationBulletWrapper)
                };
                return t.$slides = t.$swiperContainer.find(e.slideContent),
                t
            }
            getSwiperSettings() {
                const e = this.getElementSettings()
                  , t = +e.slides_to_show || 3
                  , n = 1 === t
                  , i = elementorFrontend.config.responsive.activeBreakpoints
                  , r = {
                    mobile: 1,
                    tablet: n ? 1 : 2
                }
                  , s = {
                    slidesPerView: t,
                    loop: "yes" === e.infinite,
                    speed: e.speed,
                    handleElementorBreakpoints: !0,
                    breakpoints: {}
                };
                let o = t;
                Object.keys(i).reverse().forEach((t=>{
                    const n = r[t] ? r[t] : o;
                    s.breakpoints[i[t].value] = {
                        slidesPerView: +e["slides_to_show_" + t] || n,
                        slidesPerGroup: +e["slides_to_scroll_" + t] || 1
                    },
                    e.image_spacing_custom && (s.breakpoints[i[t].value].spaceBetween = this.getSpaceBetween(t)),
                    o = +e["slides_to_show_" + t] || n
                }
                )),
                "yes" === e.autoplay && (s.autoplay = {
                    delay: e.autoplay_speed,
                    disableOnInteraction: "yes" === e.pause_on_interaction
                }),
                n ? (s.effect = e.effect,
                "fade" === e.effect && (s.fadeEffect = {
                    crossFade: !0
                })) : s.slidesPerGroup = +e.slides_to_scroll || 1,
                e.image_spacing_custom && (s.spaceBetween = this.getSpaceBetween());
                const a = "arrows" === e.navigation || "both" === e.navigation
                  , l = "dots" === e.navigation || "both" === e.navigation || e.pagination;
                return a && (s.navigation = {
                    prevEl: ".elementor-swiper-button-prev",
                    nextEl: ".elementor-swiper-button-next"
                }),
                l && (s.pagination = {
                    el: `.elementor-element-${this.getID()} .swiper-pagination`,
                    type: e.pagination ? e.pagination : "bullets",
                    clickable: !0,
                    renderBullet: (e,t)=>`<span class="${t}" data-bullet-index="${e}" aria-label="${elementorFrontend.config.i18n.a11yCarouselPaginationBulletMessage} ${e + 1}"></span>`
                }),
                "yes" === e.lazyload && (s.lazy = {
                    loadPrevNext: !0,
                    loadPrevNextAmount: 1
                }),
                s.a11y = {
                    enabled: !0,
                    prevSlideMessage: elementorFrontend.config.i18n.a11yCarouselPrevSlideMessage,
                    nextSlideMessage: elementorFrontend.config.i18n.a11yCarouselNextSlideMessage,
                    firstSlideMessage: elementorFrontend.config.i18n.a11yCarouselFirstSlideMessage,
                    lastSlideMessage: elementorFrontend.config.i18n.a11yCarouselLastSlideMessage
                },
                s.on = {
                    slideChangeTransitionEnd: ()=>{
                        this.a11ySetSlideAriaHidden()
                    }
                    ,
                    slideChange: ()=>{
                        this.a11ySetPaginationTabindex(),
                        this.handleElementHandlers()
                    }
                    ,
                    init: ()=>{
                        this.a11ySetWidgetAriaDetails(),
                        this.a11ySetPaginationTabindex(),
                        this.a11ySetSlideAriaHidden("initialisation")
                    }
                },
                this.applyOffsetSettings(e, s, t),
                s
            }
            getOffsetWidth() {
                const e = elementorFrontend.getCurrentDeviceMode();
                return elementorFrontend.utils.controls.getResponsiveControlValue(this.getElementSettings(), "offset_width", "size", e) || 0
            }
            applyOffsetSettings(e, t, n) {
                const i = e.offset_sides;
                if (elementorFrontend.isEditMode() && "NestedCarousel" === this.constructor.name || !i || "none" === i)
                    return;
                this.getOffsetWidth();
                switch (i) {
                case "right":
                    this.forceSliderToShowNextSlideWhenOnLast(t, n),
                    this.addClassToSwiperContainer("offset-right");
                    break;
                case "left":
                    this.addClassToSwiperContainer("offset-left");
                    break;
                case "both":
                    this.forceSliderToShowNextSlideWhenOnLast(t, n),
                    this.addClassToSwiperContainer("offset-both")
                }
            }
            forceSliderToShowNextSlideWhenOnLast(e, t) {
                e.slidesPerView = t + .001
            }
            addClassToSwiperContainer(e) {
                this.getDefaultElements().$swiperContainer[0].classList.add(e)
            }
            async onInit() {
                if (super.onInit(...arguments),
                !this.elements.$swiperContainer.length || 2 > this.elements.$slides.length)
                    return;
                const e = elementorFrontend.utils.swiper;
                this.swiper = await new e(this.elements.$swiperContainer,this.getSwiperSettings()),
                this.elements.$swiperContainer.data("swiper", this.swiper);
                "yes" === this.getElementSettings().pause_on_hover && this.togglePauseOnHover(!0)
            }
            bindEvents() {
                this.elements.$swiperArrows.on("keydown", this.onDirectionArrowKeydown.bind(this)),
                this.elements.$paginationWrapper.on("keydown", ".swiper-pagination-bullet", this.onDirectionArrowKeydown.bind(this)),
                this.elements.$swiperContainer.on("keydown", ".swiper-slide", this.onDirectionArrowKeydown.bind(this)),
                this.$element.find(":focusable").on("focus", this.onFocusDisableAutoplay.bind(this)),
                elementorFrontend.elements.$window.on("resize", this.getSwiperSettings.bind(this))
            }
            unbindEvents() {
                this.elements.$swiperArrows.off(),
                this.elements.$paginationWrapper.off(),
                this.elements.$swiperContainer.off(),
                this.$element.find(":focusable").off(),
                elementorFrontend.elements.$window.off("resize")
            }
            onDirectionArrowKeydown(e) {
                const t = elementorFrontend.config.is_rtl
                  , n = e.originalEvent.code
                  , i = t ? "ArrowLeft" : "ArrowRight";
                if (!(-1 !== ["ArrowLeft", "ArrowRight"].indexOf(n)))
                    return !0;
                (t ? "ArrowRight" : "ArrowLeft") === n ? this.swiper.slidePrev() : i === n && this.swiper.slideNext()
            }
            onFocusDisableAutoplay() {
                this.swiper.autoplay.stop()
            }
            updateSwiperOption(e) {
                const t = this.getElementSettings()[e]
                  , n = this.swiper.params;
                switch (e) {
                case "autoplay_speed":
                    n.autoplay.delay = t;
                    break;
                case "speed":
                    n.speed = t
                }
                this.swiper.update()
            }
            getChangeableProperties() {
                return {
                    pause_on_hover: "pauseOnHover",
                    autoplay_speed: "delay",
                    speed: "speed",
                    arrows_position: "arrows_position"
                }
            }
            onElementChange(e) {
                if (0 === e.indexOf("image_spacing_custom"))
                    return void this.updateSpaceBetween(e);
                if (this.getChangeableProperties()[e])
                    if ("pause_on_hover" === e) {
                        const e = this.getElementSettings("pause_on_hover");
                        this.togglePauseOnHover("yes" === e)
                    } else
                        this.updateSwiperOption(e)
            }
            onEditSettingsChange(e) {
                "activeItemIndex" === e && this.swiper.slideToLoop(this.getEditSettings("activeItemIndex") - 1)
            }
            getSpaceBetween() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                return elementorFrontend.utils.controls.getResponsiveControlValue(this.getElementSettings(), "image_spacing_custom", "size", e) || 0
            }
            updateSpaceBetween(e) {
                const t = e.match("image_spacing_custom_(.*)")
                  , n = t ? t[1] : "desktop"
                  , i = this.getSpaceBetween(n);
                "desktop" !== n && (this.swiper.params.breakpoints[elementorFrontend.config.responsive.activeBreakpoints[n].value].spaceBetween = i),
                this.swiper.params.spaceBetween = i,
                this.swiper.update()
            }
            getPaginationBullets() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "array";
                const t = this.$element.find(this.getSettings("selectors").paginationBullet);
                return "array" === e ? Array.from(t) : t
            }
            a11ySetWidgetAriaDetails() {
                const e = this.$element;
                e.attr("aria-roledescription", "carousel"),
                e.attr("aria-label", elementorFrontend.config.i18n.a11yCarouselWrapperAriaLabel)
            }
            a11ySetPaginationTabindex() {
                const e = this.swiper?.params.pagination.bulletClass
                  , t = this.swiper?.params.pagination.bulletActiveClass;
                this.getPaginationBullets().forEach((e=>{
                    e.classList?.contains(t) || e.removeAttribute("tabindex")
                }
                ));
                const n = "ArrowLeft" === event?.code || "ArrowRight" === event?.code;
                event?.target?.classList?.contains(e) && n && this.$element.find(`.${t}`).trigger("focus")
            }
            getSwiperWrapperTranformXValue() {
                let e = this.elements.$swiperWrapper[0]?.style.transform;
                return e = e.replace("translate3d(", ""),
                e = e.split(","),
                e = parseInt(e[0].replace("px", "")),
                e || 0
            }
            a11ySetSlideAriaHidden() {
                if ("number" != typeof ("initialisation" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "") ? 0 : this.swiper?.activeIndex))
                    return;
                const e = this.getSwiperWrapperTranformXValue()
                  , t = this.elements.$swiperWrapper[0].clientWidth;
                this.elements.$swiperContainer.find(this.getSettings("selectors").slideContent).each(((n,i)=>{
                    0 <= i.offsetLeft + e && t > i.offsetLeft + e ? (i.removeAttribute("aria-hidden"),
                    i.removeAttribute("inert")) : (i.setAttribute("aria-hidden", !0),
                    i.setAttribute("inert", ""))
                }
                ))
            }
            handleElementHandlers() {}
        }
        t.default = CarouselHandlerBase
    }
    ,
    2821: (e,t,n)=>{
        "use strict";
        var i = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var r = i(n(3090));
        class SwiperHandlerBase extends r.default {
            getInitialSlide() {
                const e = this.getEditSettings();
                return e.activeItemIndex ? e.activeItemIndex - 1 : 0
            }
            getSlidesCount() {
                return this.elements.$slides.length
            }
            togglePauseOnHover(e) {
                e ? this.elements.$swiperContainer.on({
                    mouseenter: ()=>{
                        this.swiper.autoplay.stop()
                    }
                    ,
                    mouseleave: ()=>{
                        this.swiper.autoplay.start()
                    }
                }) : this.elements.$swiperContainer.off("mouseenter mouseleave")
            }
            handleKenBurns() {
                const e = this.getSettings();
                this.$activeImageBg && this.$activeImageBg.removeClass(e.classes.kenBurnsActive),
                this.activeItemIndex = this.swiper ? this.swiper.activeIndex : this.getInitialSlide(),
                this.swiper ? this.$activeImageBg = jQuery(this.swiper.slides[this.activeItemIndex]).children("." + e.classes.slideBackground) : this.$activeImageBg = jQuery(this.elements.$slides[0]).children("." + e.classes.slideBackground),
                this.$activeImageBg.addClass(e.classes.kenBurnsActive)
            }
        }
        t.default = SwiperHandlerBase
    }
    ,
    3090: e=>{
        "use strict";
        e.exports = elementorModules.ViewModule.extend({
            $element: null,
            editorListeners: null,
            onElementChange: null,
            onEditSettingsChange: null,
            onPageSettingsChange: null,
            isEdit: null,
            __construct(e) {
                this.isActive(e) && (this.$element = e.$element,
                this.isEdit = this.$element.hasClass("elementor-element-edit-mode"),
                this.isEdit && this.addEditorListeners())
            },
            isActive: ()=>!0,
            isElementInTheCurrentDocument() {
                return !!elementorFrontend.isEditMode() && elementor.documents.currentDocument.id.toString() === this.$element[0].closest(".elementor").dataset.elementorId
            },
            findElement(e) {
                var t = this.$element;
                return t.find(e).filter((function() {
                    return jQuery(this).parent().closest(".elementor-element").is(t)
                }
                ))
            },
            getUniqueHandlerID(e, t) {
                return e || (e = this.getModelCID()),
                t || (t = this.$element),
                e + t.attr("data-element_type") + this.getConstructorID()
            },
            initEditorListeners() {
                var e = this;
                if (e.editorListeners = [{
                    event: "element:destroy",
                    to: elementor.channels.data,
                    callback(t) {
                        t.cid === e.getModelCID() && e.onDestroy()
                    }
                }],
                e.onElementChange) {
                    const t = e.getWidgetType() || e.getElementType();
                    let n = "change";
                    "global" !== t && (n += ":" + t),
                    e.editorListeners.push({
                        event: n,
                        to: elementor.channels.editor,
                        callback(t, n) {
                            e.getUniqueHandlerID(n.model.cid, n.$el) === e.getUniqueHandlerID() && e.onElementChange(t.model.get("name"), t, n)
                        }
                    })
                }
                e.onEditSettingsChange && e.editorListeners.push({
                    event: "change:editSettings",
                    to: elementor.channels.editor,
                    callback(t, n) {
                        if (n.model.cid !== e.getModelCID())
                            return;
                        const i = Object.keys(t.changed)[0];
                        e.onEditSettingsChange(i, t.changed[i])
                    }
                }),
                ["page"].forEach((function(t) {
                    var n = "on" + t[0].toUpperCase() + t.slice(1) + "SettingsChange";
                    e[n] && e.editorListeners.push({
                        event: "change",
                        to: elementor.settings[t].model,
                        callback(t) {
                            e[n](t.changed)
                        }
                    })
                }
                ))
            },
            getEditorListeners() {
                return this.editorListeners || this.initEditorListeners(),
                this.editorListeners
            },
            addEditorListeners() {
                var e = this.getUniqueHandlerID();
                this.getEditorListeners().forEach((function(t) {
                    elementorFrontend.addListenerOnce(e, t.event, t.callback, t.to)
                }
                ))
            },
            removeEditorListeners() {
                var e = this.getUniqueHandlerID();
                this.getEditorListeners().forEach((function(t) {
                    elementorFrontend.removeListeners(e, t.event, null, t.to)
                }
                ))
            },
            getElementType() {
                return this.$element.data("element_type")
            },
            getWidgetType() {
                const e = this.$element.data("widget_type");
                if (e)
                    return e.split(".")[0]
            },
            getID() {
                return this.$element.data("id")
            },
            getModelCID() {
                return this.$element.data("model-cid")
            },
            getElementSettings(e) {
                let t = {};
                const n = this.getModelCID();
                if (this.isEdit && n) {
                    const e = elementorFrontend.config.elements.data[n]
                      , i = e.attributes;
                    let r = i.widgetType || i.elType;
                    i.isInner && (r = "inner-" + r);
                    let s = elementorFrontend.config.elements.keys[r];
                    s || (s = elementorFrontend.config.elements.keys[r] = [],
                    jQuery.each(e.controls, ((e,t)=>{
                        t.frontend_available && s.push(e)
                    }
                    ))),
                    jQuery.each(e.getActiveControls(), (function(e) {
                        if (-1 !== s.indexOf(e)) {
                            let n = i[e];
                            n.toJSON && (n = n.toJSON()),
                            t[e] = n
                        }
                    }
                    ))
                } else
                    t = this.$element.data("settings") || {};
                return this.getItems(t, e)
            },
            getEditSettings(e) {
                var t = {};
                return this.isEdit && (t = elementorFrontend.config.elements.editSettings[this.getModelCID()].attributes),
                this.getItems(t, e)
            },
            getCurrentDeviceSetting(e) {
                return elementorFrontend.getCurrentDeviceSetting(this.getElementSettings(), e)
            },
            onInit() {
                this.isActive(this.getSettings()) && elementorModules.ViewModule.prototype.onInit.apply(this, arguments)
            },
            onDestroy() {
                this.isEdit && this.removeEditorListeners(),
                this.unbindEvents && this.unbindEvents()
            }
        })
    }
    ,
    2263: (e,t,n)=>{
        "use strict";
        var i = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var r = i(n(3090));
        class StretchedElement extends r.default {
            getStretchedClass() {
                return "e-stretched"
            }
            getStretchSettingName() {
                return "stretch_element"
            }
            getStretchActiveValue() {
                return "yes"
            }
            bindEvents() {
                const e = this.getUniqueHandlerID();
                elementorFrontend.addListenerOnce(e, "resize", this.stretch),
                elementorFrontend.addListenerOnce(e, "sticky:stick", this.stretch, this.$element),
                elementorFrontend.addListenerOnce(e, "sticky:unstick", this.stretch, this.$element),
                elementorFrontend.isEditMode() && (this.onKitChangeStretchContainerChange = this.onKitChangeStretchContainerChange.bind(this),
                elementor.channels.editor.on("kit:change:stretchContainer", this.onKitChangeStretchContainerChange))
            }
            unbindEvents() {
                elementorFrontend.removeListeners(this.getUniqueHandlerID(), "resize", this.stretch),
                elementorFrontend.isEditMode() && elementor.channels.editor.off("kit:change:stretchContainer", this.onKitChangeStretchContainerChange)
            }
            isActive(e) {
                return elementorFrontend.isEditMode() || e.$element.hasClass(this.getStretchedClass())
            }
            getStretchElementForConfig() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                return e ? this.$element.find(e) : this.$element
            }
            getStretchElementConfig() {
                return {
                    element: this.getStretchElementForConfig(),
                    selectors: {
                        container: this.getStretchContainer()
                    },
                    considerScrollbar: elementorFrontend.isEditMode() && elementorFrontend.config.is_rtl
                }
            }
            initStretch() {
                this.stretch = this.stretch.bind(this),
                this.stretchElement = new elementorModules.frontend.tools.StretchElement(this.getStretchElementConfig())
            }
            getStretchContainer() {
                return elementorFrontend.getKitSettings("stretched_section_container") || window
            }
            isStretchSettingEnabled() {
                return this.getElementSettings(this.getStretchSettingName()) === this.getStretchActiveValue()
            }
            stretch() {
                this.isStretchSettingEnabled() && this.stretchElement.stretch()
            }
            onInit() {
                this.isActive(this.getSettings()) && (this.initStretch(),
                super.onInit(...arguments),
                this.stretch())
            }
            onElementChange(e) {
                this.getStretchSettingName() === e && (this.isStretchSettingEnabled() ? this.stretch() : this.stretchElement.reset())
            }
            onKitChangeStretchContainerChange() {
                this.stretchElement.setSettings("selectors.container", this.getStretchContainer()),
                this.stretch()
            }
        }
        t.default = StretchedElement
    }
    ,
    6412: (e,t,n)=>{
        "use strict";
        var i = n(3203)
          , r = i(n(5955))
          , s = i(n(8135))
          , o = i(n(5658))
          , a = i(n(2263))
          , l = i(n(3090))
          , c = i(n(2821))
          , u = i(n(1292))
          , d = i(n(7323))
          , h = i(n(32))
          , g = i(n(6752));
        r.default.frontend = {
            Document: s.default,
            tools: {
                StretchElement: o.default
            },
            handlers: {
                Base: l.default,
                StretchedElement: a.default,
                SwiperBase: c.default,
                CarouselBase: u.default,
                NestedTabs: d.default,
                NestedAccordion: h.default,
                NestedTitleKeyboardHandler: g.default
            }
        }
    }
    ,
    5658: e=>{
        "use strict";
        e.exports = elementorModules.ViewModule.extend({
            getDefaultSettings: ()=>({
                element: null,
                direction: elementorFrontend.config.is_rtl ? "right" : "left",
                selectors: {
                    container: window
                },
                considerScrollbar: !1,
                cssOutput: "inline"
            }),
            getDefaultElements() {
                return {
                    $element: jQuery(this.getSettings("element"))
                }
            },
            stretch() {
                const e = this.getSettings();
                let t;
                try {
                    t = jQuery(e.selectors.container)
                } catch (e) {}
                t && t.length || (t = jQuery(this.getDefaultSettings().selectors.container)),
                this.reset();
                var n = this.elements.$element
                  , i = t.innerWidth()
                  , r = n.offset().left
                  , s = "fixed" === n.css("position")
                  , o = s ? 0 : r
                  , a = window === t[0];
                if (!a) {
                    var l = t.offset().left;
                    s && (o = l),
                    r > l && (o = r - l)
                }
                if (e.considerScrollbar && a) {
                    o -= window.innerWidth - i
                }
                s || (elementorFrontend.config.is_rtl && (o = i - (n.outerWidth() + o)),
                o = -o),
                e.margin && (o += e.margin);
                var c = {};
                let u = i;
                e.margin && (u -= 2 * e.margin),
                c.width = u + "px",
                c[e.direction] = o + "px",
                "variables" !== e.cssOutput ? n.css(c) : this.applyCssVariables(n, c)
            },
            reset() {
                const e = {}
                  , t = this.getSettings()
                  , n = this.elements.$element;
                "variables" !== t.cssOutput ? (e.width = "",
                e[t.direction] = "",
                n.css(e)) : this.resetCssVariables(n)
            },
            applyCssVariables(e, t) {
                e.css("--stretch-width", t.width),
                t.left ? e.css("--stretch-left", t.left) : e.css("--stretch-right", t.right)
            },
            resetCssVariables(e) {
                e.css({
                    "--stretch-width": "",
                    "--stretch-left": "",
                    "--stretch-right": ""
                })
            }
        })
    }
    ,
    6630: (e,t)=>{
        "use strict";
        function getChildrenWidth(e) {
            let t = 0;
            const n = e[0].parentNode
              , i = getComputedStyle(n)
              , r = parseFloat(i.gap) || 0;
            for (let n = 0; n < e.length; n++)
                t += e[n].offsetWidth + r;
            return t
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.changeScrollStatus = function changeScrollStatus(e, t) {
            "mousedown" === t.type ? (e.classList.add("e-scroll"),
            e.dataset.pageX = t.pageX) : (e.classList.remove("e-scroll", "e-scroll-active"),
            e.dataset.pageX = "")
        }
        ,
        t.setHorizontalScrollAlignment = function setHorizontalScrollAlignment(e) {
            let {element: t, direction: n, justifyCSSVariable: i, horizontalScrollStatus: r} = e;
            if (!t)
                return;
            !function isHorizontalScroll(e, t) {
                return e.clientWidth < getChildrenWidth(e.children) && "enable" === t
            }(t, r) ? t.style.setProperty(i, "") : function initialScrollPosition(e, t, n) {
                const i = elementorFrontend.config.is_rtl;
                if ("end" === t)
                    e.style.setProperty(n, "start"),
                    e.scrollLeft = i ? -1 * getChildrenWidth(e.children) : getChildrenWidth(e.children);
                else
                    e.style.setProperty(n, "start"),
                    e.scrollLeft = 0
            }(t, n, i)
        }
        ,
        t.setHorizontalTitleScrollValues = function setHorizontalTitleScrollValues(e, t, n) {
            const i = e.classList.contains("e-scroll")
              , r = "enable" === t
              , s = e.scrollWidth > e.clientWidth;
            if (!i || !r || !s)
                return;
            n.preventDefault();
            const o = parseFloat(e.dataset.pageX)
              , a = n.pageX - o;
            let l = 0;
            l = 20 < a ? 5 : -20 > a ? -5 : a;
            e.scrollLeft = e.scrollLeft - l,
            e.classList.add("e-scroll-active")
        }
    }
    ,
    2618: (e,t,n)=>{
        "use strict";
        var i = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0,
        n(740);
        var r = i(n(7597))
          , s = i(n(381));
        class ArgsObject extends r.default {
            static getInstanceType() {
                return "ArgsObject"
            }
            constructor(e) {
                super(),
                this.args = e
            }
            requireArgument(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.args;
                if (!Object.prototype.hasOwnProperty.call(t, e))
                    throw Error(`${e} is required.`)
            }
            requireArgumentType(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.args;
                if (this.requireArgument(e, n),
                typeof n[e] !== t)
                    throw Error(`${e} invalid type: ${t}.`)
            }
            requireArgumentInstance(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.args;
                if (this.requireArgument(e, n),
                !(n[e]instanceof t || (0,
                s.default)(n[e], t)))
                    throw Error(`${e} invalid instance.`)
            }
            requireArgumentConstructor(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.args;
                if (this.requireArgument(e, n),
                n[e].constructor.toString() !== t.prototype.constructor.toString())
                    throw Error(`${e} invalid constructor type.`)
            }
        }
        t.default = ArgsObject
    }
    ,
    869: (e,t,n)=>{
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = t.ForceMethodImplementation = void 0,
        n(740);
        class ForceMethodImplementation extends Error {
            constructor() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                super(`${e.isStatic ? "static " : ""}${e.fullName}() should be implemented, please provide '${e.functionName || e.fullName}' functionality.`, t),
                Object.keys(t).length && console.error(t),
                Error.captureStackTrace(this, ForceMethodImplementation)
            }
        }
        t.ForceMethodImplementation = ForceMethodImplementation;
        t.default = e=>{
            const t = Error().stack.split("\n")[2].trim()
              , n = t.startsWith("at new") ? "constructor" : t.split(" ")[1]
              , i = {};
            if (i.functionName = n,
            i.fullName = n,
            i.functionName.includes(".")) {
                const e = i.functionName.split(".");
                i.className = e[0],
                i.functionName = e[1]
            } else
                i.isStatic = !0;
            throw new ForceMethodImplementation(i,e)
        }
    }
    ,
    7597: (e,t)=>{
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class InstanceType {
            static[Symbol.hasInstance](e) {
                let t = super[Symbol.hasInstance](e);
                if (e && !e.constructor.getInstanceType)
                    return t;
                if (e && (e.instanceTypes || (e.instanceTypes = []),
                t || this.getInstanceType() === e.constructor.getInstanceType() && (t = !0),
                t)) {
                    const t = this.getInstanceType === InstanceType.getInstanceType ? "BaseInstanceType" : this.getInstanceType();
                    -1 === e.instanceTypes.indexOf(t) && e.instanceTypes.push(t)
                }
                return !t && e && (t = e.instanceTypes && Array.isArray(e.instanceTypes) && -1 !== e.instanceTypes.indexOf(this.getInstanceType())),
                t
            }
            static getInstanceType() {
                elementorModules.ForceMethodImplementation()
            }
            constructor() {
                let e = new.target;
                const t = [];
                for (; e.__proto__ && e.__proto__.name; )
                    t.push(e.__proto__),
                    e = e.__proto__;
                t.reverse().forEach((e=>this instanceof e))
            }
        }
        t.default = InstanceType
    }
    ,
    1192: (e,t,n)=>{
        "use strict";
        n(740);
        const Module = function() {
            const e = jQuery
              , t = arguments
              , n = this
              , i = {};
            let r;
            this.getItems = function(e, t) {
                if (t) {
                    const n = t.split(".")
                      , i = n.splice(0, 1);
                    if (!n.length)
                        return e[i];
                    if (!e[i])
                        return;
                    return this.getItems(e[i], n.join("."))
                }
                return e
            }
            ,
            this.getSettings = function(e) {
                return this.getItems(r, e)
            }
            ,
            this.setSettings = function(t, i, s) {
                if (s || (s = r),
                "object" == typeof t)
                    return e.extend(s, t),
                    n;
                const o = t.split(".")
                  , a = o.splice(0, 1);
                return o.length ? (s[a] || (s[a] = {}),
                n.setSettings(o.join("."), i, s[a])) : (s[a] = i,
                n)
            }
            ,
            this.getErrorMessage = function(e, t) {
                let n;
                if ("forceMethodImplementation" === e)
                    n = `The method '${t}' must to be implemented in the inheritor child.`;
                else
                    n = "An error occurs";
                return n
            }
            ,
            this.forceMethodImplementation = function(e) {
                throw new Error(this.getErrorMessage("forceMethodImplementation", e))
            }
            ,
            this.on = function(t, r) {
                if ("object" == typeof t)
                    return e.each(t, (function(e) {
                        n.on(e, this)
                    }
                    )),
                    n;
                return t.split(" ").forEach((function(e) {
                    i[e] || (i[e] = []),
                    i[e].push(r)
                }
                )),
                n
            }
            ,
            this.off = function(e, t) {
                if (!i[e])
                    return n;
                if (!t)
                    return delete i[e],
                    n;
                const r = i[e].indexOf(t);
                return -1 !== r && (delete i[e][r],
                i[e] = i[e].filter((e=>e))),
                n
            }
            ,
            this.trigger = function(t) {
                const r = "on" + t[0].toUpperCase() + t.slice(1)
                  , s = Array.prototype.slice.call(arguments, 1);
                n[r] && n[r].apply(n, s);
                const o = i[t];
                return o ? (e.each(o, (function(e, t) {
                    t.apply(n, s)
                }
                )),
                n) : n
            }
            ,
            n.__construct.apply(n, t),
            e.each(n, (function(e) {
                const t = n[e];
                "function" == typeof t && (n[e] = function() {
                    return t.apply(n, arguments)
                }
                )
            }
            )),
            function() {
                r = n.getDefaultSettings();
                const i = t[0];
                i && e.extend(!0, r, i)
            }(),
            n.trigger("init")
        };
        Module.prototype.__construct = function() {}
        ,
        Module.prototype.getDefaultSettings = function() {
            return {}
        }
        ,
        Module.prototype.getConstructorID = function() {
            return this.constructor.name
        }
        ,
        Module.extend = function(e) {
            const t = jQuery
              , n = this
              , child = function() {
                return n.apply(this, arguments)
            };
            return t.extend(child, n),
            (child.prototype = Object.create(t.extend({}, n.prototype, e))).constructor = child,
            child.__super__ = n.prototype,
            child
        }
        ,
        e.exports = Module
    }
    ,
    6516: (e,t,n)=>{
        "use strict";
        var i = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var r = i(n(2640)).default.extend({
            getDefaultSettings: ()=>({
                container: null,
                items: null,
                columnsCount: 3,
                verticalSpaceBetween: 30
            }),
            getDefaultElements() {
                return {
                    $container: jQuery(this.getSettings("container")),
                    $items: jQuery(this.getSettings("items"))
                }
            },
            run() {
                var e = []
                  , t = this.elements.$container.position().top
                  , n = this.getSettings()
                  , i = n.columnsCount;
                t += parseInt(this.elements.$container.css("margin-top"), 10),
                this.elements.$items.each((function(r) {
                    var s = Math.floor(r / i)
                      , o = jQuery(this)
                      , a = o[0].getBoundingClientRect().height + n.verticalSpaceBetween;
                    if (s) {
                        var l = o.position()
                          , c = r % i
                          , u = l.top - t - e[c];
                        u -= parseInt(o.css("margin-top"), 10),
                        u *= -1,
                        o.css("margin-top", u + "px"),
                        e[c] += a
                    } else
                        e.push(a)
                }
                ))
            }
        });
        t.default = r
    }
    ,
    400: (e,t)=>{
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        t.default = class Scroll {
            static scrollObserver(e) {
                let t = 0;
                const n = {
                    root: e.root || null,
                    rootMargin: e.offset || "0px",
                    threshold: function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        const t = [];
                        if (e > 0 && e <= 100) {
                            const n = 100 / e;
                            for (let e = 0; e <= 100; e += n)
                                t.push(e / 100)
                        } else
                            t.push(0);
                        return t
                    }(e.sensitivity)
                };
                return new IntersectionObserver((function handleIntersect(n) {
                    const i = n[0].boundingClientRect.y
                      , r = n[0].isIntersecting
                      , s = i < t ? "down" : "up"
                      , o = Math.abs(parseFloat((100 * n[0].intersectionRatio).toFixed(2)));
                    e.callback({
                        sensitivity: e.sensitivity,
                        isInViewport: r,
                        scrollPercentage: o,
                        intersectionScrollDirection: s
                    }),
                    t = i
                }
                ),n)
            }
            static getElementViewportPercentage(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const n = e[0].getBoundingClientRect()
                  , i = t.start || 0
                  , r = t.end || 0
                  , s = window.innerHeight * i / 100
                  , o = window.innerHeight * r / 100
                  , a = n.top - window.innerHeight
                  , l = 0 - a + s
                  , c = n.top + s + e.height() - a + o
                  , u = Math.max(0, Math.min(l / c, 1));
                return parseFloat((100 * u).toFixed(2))
            }
            static getPageScrollPercentage() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                const n = e.start || 0
                  , i = e.end || 0
                  , r = t || document.documentElement.scrollHeight - document.documentElement.clientHeight
                  , s = r * n / 100
                  , o = r + s + r * i / 100;
                return (document.documentElement.scrollTop + document.body.scrollTop + s) / o * 100
            }
        }
    }
    ,
    2640: (e,t,n)=>{
        "use strict";
        var i = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var r = i(n(1192)).default.extend({
            elements: null,
            getDefaultElements: ()=>({}),
            bindEvents() {},
            onInit() {
                this.initElements(),
                this.bindEvents()
            },
            initElements() {
                this.elements = this.getDefaultElements()
            }
        });
        t.default = r
    }
    ,
    5955: (e,t,n)=>{
        "use strict";
        var i = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var r = i(n(1192))
          , s = i(n(2640))
          , o = i(n(2618))
          , a = i(n(6516))
          , l = i(n(400))
          , c = i(n(869))
          , u = window.elementorModules = {
            Module: r.default,
            ViewModule: s.default,
            ArgsObject: o.default,
            ForceMethodImplementation: c.default,
            utils: {
                Masonry: a.default,
                Scroll: l.default
            }
        };
        t.default = u
    }
    ,
    7148: (e,t,n)=>{
        "use strict";
        var i = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var r = i(n(6752));
        class NestedAccordionTitleKeyboardHandler extends r.default {
            __construct() {
                super.__construct(...arguments);
                const e = arguments.length <= 0 ? void 0 : arguments[0];
                this.toggleTitle = e.toggleTitle
            }
            getDefaultSettings() {
                return {
                    ...super.getDefaultSettings(),
                    selectors: {
                        itemTitle: ".e-n-accordion-item-title",
                        itemContainer: ".e-n-accordion-item > .e-con"
                    },
                    ariaAttributes: {
                        titleStateAttribute: "aria-expanded",
                        activeTitleSelector: '[aria-expanded="true"]'
                    },
                    datasets: {
                        titleIndex: "data-accordion-index"
                    }
                }
            }
            handeTitleLinkEnterOrSpaceEvent(e) {
                this.toggleTitle(e)
            }
            handleContentElementEscapeEvents(e) {
                this.getActiveTitleElement().trigger("focus"),
                this.toggleTitle(e)
            }
            handleTitleEscapeKeyEvents(e) {
                const t = e?.currentTarget?.parentElement
                  , n = t?.open;
                n && this.toggleTitle(e)
            }
        }
        t.default = NestedAccordionTitleKeyboardHandler
    }
    ,
    32: (e,t,n)=>{
        "use strict";
        var i = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var r = i(n(3090))
          , s = i(n(7148));
        class NestedAccordion extends r.default {
            constructor() {
                super(...arguments),
                this.animations = new Map
            }
            getDefaultSettings() {
                return {
                    selectors: {
                        accordion: ".e-n-accordion",
                        accordionContentContainers: ".e-n-accordion > .e-con",
                        accordionItems: ".e-n-accordion-item",
                        accordionItemTitles: ".e-n-accordion-item-title",
                        accordionContent: ".e-n-accordion-item > .e-con",
                        accordionWrapper: ".e-n-accordion-item"
                    },
                    default_state: "expanded"
                }
            }
            getDefaultElements() {
                const e = this.getSettings("selectors");
                return {
                    $accordion: this.findElement(e.accordion),
                    $contentContainers: this.findElement(e.accordionContentContainers),
                    $accordionItems: this.findElement(e.accordionItems),
                    $accordionTitles: this.findElement(e.accordionItemTitles),
                    $accordionContent: this.findElement(e.accordionContent)
                }
            }
            onInit() {
                super.onInit(...arguments),
                elementorFrontend.isEditMode() && this.interlaceContainers(),
                this.injectKeyboardHandler()
            }
            injectKeyboardHandler() {
                "nested-accordion.default" === this.getSettings("elementName") && new s.default({
                    $element: this.$element,
                    toggleTitle: this.clickListener.bind(this)
                })
            }
            interlaceContainers() {
                const {$contentContainers: e, $accordionItems: t} = this.getDefaultElements();
                e.each(((e,n)=>{
                    t[e].appendChild(n)
                }
                ))
            }
            bindEvents() {
                this.elements.$accordionTitles.on("click", this.clickListener.bind(this))
            }
            unbindEvents() {
                this.elements.$accordionTitles.off()
            }
            clickListener(e) {
                e.preventDefault();
                const t = this.getSettings()
                  , n = e?.currentTarget?.closest(t.selectors.accordionWrapper)
                  , i = n.querySelector(t.selectors.accordionItemTitles)
                  , r = n.querySelector(t.selectors.accordionContent)
                  , {max_items_expended: s} = this.getElementSettings()
                  , {$accordionTitles: o, $accordionItems: a} = this.elements;
                "one" === s && this.closeAllItems(a, o),
                n.open ? this.closeAccordionItem(n, i) : this.prepareOpenAnimation(n, i, r)
            }
            animateItem(e, t, n, i) {
                e.style.overflow = "hidden";
                let r = this.animations.get(e);
                r && r.cancel(),
                r = e.animate({
                    height: [t, n]
                }, {
                    duration: this.getAnimationDuration()
                }),
                r.onfinish = ()=>this.onAnimationFinish(e, i),
                this.animations.set(e, r),
                e.querySelector("summary")?.setAttribute("aria-expanded", i)
            }
            closeAccordionItem(e, t) {
                const n = `${e.offsetHeight}px`
                  , i = `${t.offsetHeight}px`;
                this.animateItem(e, n, i, !1)
            }
            prepareOpenAnimation(e, t, n) {
                e.style.overflow = "hidden",
                e.style.height = `${e.offsetHeight}px`,
                e.open = !0,
                window.requestAnimationFrame((()=>this.openAccordionItem(e, t, n)))
            }
            openAccordionItem(e, t, n) {
                const i = `${e.offsetHeight}px`
                  , r = `${t.offsetHeight + n.offsetHeight}px`;
                this.animateItem(e, i, r, !0)
            }
            onAnimationFinish(e, t) {
                e.open = t,
                this.animations.set(e, null),
                e.style.height = e.style.overflow = ""
            }
            closeAllItems(e, t) {
                t.each(((t,n)=>{
                    this.closeAccordionItem(e[t], n)
                }
                ))
            }
            getAnimationDuration() {
                const {size: e, unit: t} = this.getElementSettings("n_accordion_animation_duration");
                return e * ("ms" === t ? 1 : 1e3)
            }
        }
        t.default = NestedAccordion
    }
    ,
    7323: (e,t,n)=>{
        "use strict";
        var i = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var r = i(n(3090))
          , s = n(6630);
        class NestedTabs extends r.default {
            constructor() {
                super(...arguments),
                this.resizeListenerNestedTabs = null
            }
            getTabTitleFilterSelector(e) {
                return `[data-tab-index="${e}"]`
            }
            getTabContentFilterSelector(e) {
                return `*:nth-child(${e})`
            }
            getTabIndex(e) {
                return e.getAttribute("data-tab-index")
            }
            getDefaultSettings() {
                return {
                    selectors: {
                        widgetContainer: ".e-n-tabs",
                        tabTitle: ".e-n-tab-title",
                        tabContent: ".e-n-tabs-content > .e-con",
                        headingContainer: ".e-n-tabs-heading",
                        activeTabContentContainers: ".e-con.e-active"
                    },
                    classes: {
                        active: "e-active"
                    },
                    ariaAttributes: {
                        titleStateAttribute: "aria-selected",
                        activeTitleSelector: '[aria-selected="true"]'
                    },
                    showTabFn: "show",
                    hideTabFn: "hide",
                    toggleSelf: !1,
                    hidePrevious: !0,
                    autoExpand: !0
                }
            }
            getDefaultElements() {
                const e = this.getSettings("selectors");
                return {
                    $tabTitles: this.findElement(e.tabTitle),
                    $tabContents: this.findElement(e.tabContent),
                    $headingContainer: this.findElement(e.headingContainer)
                }
            }
            getKeyboardNavigationSettings() {
                return this.getSettings()
            }
            activateDefaultTab() {
                const e = this.getSettings()
                  , t = this.getEditSettings("activeItemIndex") || 1
                  , n = {
                    showTabFn: e.showTabFn,
                    hideTabFn: e.hideTabFn
                };
                this.setSettings({
                    showTabFn: "show",
                    hideTabFn: "hide"
                }),
                this.changeActiveTab(t),
                this.setSettings(n)
            }
            deactivateActiveTab(e) {
                const t = this.getSettings()
                  , n = t.classes.active
                  , i = t.ariaAttributes.activeTitleSelector
                  , r = "." + n
                  , s = this.elements.$tabTitles.filter(i)
                  , o = this.elements.$tabContents.filter(r);
                return this.setTabDeactivationAttributes(s, e),
                o.removeClass(n),
                o[t.hideTabFn](0, (()=>this.onHideTabContent(o))),
                o
            }
            getTitleActivationAttributes() {
                return {
                    tabindex: "0",
                    [this.getSettings("ariaAttributes").titleStateAttribute]: "true"
                }
            }
            setTabDeactivationAttributes(e) {
                const t = this.getSettings("ariaAttributes").titleStateAttribute;
                e.attr({
                    tabindex: "-1",
                    [t]: "false"
                })
            }
            onHideTabContent() {}
            activateTab(e) {
                const t = this.getSettings()
                  , n = t.classes.active
                  , i = "show" === t.showTabFn ? 0 : 400;
                let r = this.elements.$tabTitles.filter(this.getTabTitleFilterSelector(e))
                  , s = this.elements.$tabContents.filter(this.getTabContentFilterSelector(e));
                if (!r.length) {
                    const t = Math.max(e - 1, 1);
                    r = this.elements.$tabTitles.filter(this.getTabTitleFilterSelector(t)),
                    s = this.elements.$tabContents.filter(this.getTabContentFilterSelector(t))
                }
                r.attr(this.getTitleActivationAttributes()),
                s.addClass(n),
                s[t.showTabFn](i, (()=>this.onShowTabContent(s)))
            }
            onShowTabContent(e) {
                elementorFrontend.elements.$window.trigger("elementor-pro/motion-fx/recalc"),
                elementorFrontend.elements.$window.trigger("elementor/nested-tabs/activate", e),
                elementorFrontend.elements.$window.trigger("elementor/bg-video/recalc")
            }
            isActiveTab(e) {
                return "true" === this.elements.$tabTitles.filter('[data-tab-index="' + e + '"]').attr(this.getSettings("ariaAttributes").titleStateAttribute)
            }
            onTabClick(e) {
                e.preventDefault(),
                this.changeActiveTab(e.currentTarget?.getAttribute("data-tab-index"), !0)
            }
            getTabEvents() {
                return {
                    click: this.onTabClick.bind(this)
                }
            }
            getHeadingEvents() {
                const e = this.elements.$headingContainer[0];
                return {
                    mousedown: s.changeScrollStatus.bind(this, e),
                    mouseup: s.changeScrollStatus.bind(this, e),
                    mouseleave: s.changeScrollStatus.bind(this, e),
                    mousemove: s.setHorizontalTitleScrollValues.bind(this, e, this.getHorizontalScrollSetting())
                }
            }
            bindEvents() {
                this.elements.$tabTitles.on(this.getTabEvents()),
                this.elements.$headingContainer.on(this.getHeadingEvents());
                const e = {
                    element: this.elements.$headingContainer[0],
                    direction: this.getTabsDirection(),
                    justifyCSSVariable: "--n-tabs-heading-justify-content",
                    horizontalScrollStatus: this.getHorizontalScrollSetting()
                };
                this.resizeListenerNestedTabs = s.setHorizontalScrollAlignment.bind(this, e),
                elementorFrontend.elements.$window.on("resize", this.resizeListenerNestedTabs),
                elementorFrontend.elements.$window.on("resize", this.setTouchMode.bind(this)),
                elementorFrontend.elements.$window.on("elementor/nested-tabs/activate", this.reInitSwipers),
                elementorFrontend.elements.$window.on("elementor/nested-elements/activate-by-keyboard", this.changeActiveTabByKeyboard.bind(this))
            }
            unbindEvents() {
                this.elements.$tabTitles.off(),
                this.elements.$headingContainer.off(),
                this.elements.$tabContents.children().off(),
                elementorFrontend.elements.$window.off("resize"),
                elementorFrontend.elements.$window.off("elementor/nested-tabs/activate")
            }
            reInitSwipers(e, t) {
                const n = t.querySelectorAll(`.${elementorFrontend.config.swiperClass}`);
                for (const e of n) {
                    if (!e.swiper)
                        return;
                    e.swiper.initialized = !1,
                    e.swiper.init()
                }
            }
            onInit() {
                super.onInit(...arguments),
                this.getSettings("autoExpand") && this.activateDefaultTab();
                const e = {
                    element: this.elements.$headingContainer[0],
                    direction: this.getTabsDirection(),
                    justifyCSSVariable: "--n-tabs-heading-justify-content",
                    horizontalScrollStatus: this.getHorizontalScrollSetting()
                };
                (0,
                s.setHorizontalScrollAlignment)(e),
                this.setTouchMode(),
                "nested-tabs.default" === this.getSettings("elementName") && new elementorModules.frontend.handlers.NestedTitleKeyboardHandler(this.getKeyboardNavigationSettings())
            }
            onEditSettingsChange(e, t) {
                "activeItemIndex" === e && this.changeActiveTab(t, !1)
            }
            onElementChange(e) {
                if (this.checkSliderPropsToWatch(e)) {
                    const e = {
                        element: this.elements.$headingContainer[0],
                        direction: this.getTabsDirection(),
                        justifyCSSVariable: "--n-tabs-heading-justify-content",
                        horizontalScrollStatus: this.getHorizontalScrollSetting()
                    };
                    (0,
                    s.setHorizontalScrollAlignment)(e)
                }
            }
            checkSliderPropsToWatch(e) {
                return 0 === e.indexOf("horizontal_scroll") || "breakpoint_selector" === e || 0 === e.indexOf("tabs_justify_horizontal") || 0 === e.indexOf("tabs_title_space_between")
            }
            changeActiveTab(e) {
                if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && this.isEdit && this.isElementInTheCurrentDocument())
                    return window.top.$e.run("document/repeater/select", {
                        container: elementor.getContainer(this.$element.attr("data-id")),
                        index: parseInt(e)
                    });
                const t = this.isActiveTab(e)
                  , n = this.getSettings();
                if (!n.toggleSelf && t || !n.hidePrevious || this.deactivateActiveTab(e),
                !n.hidePrevious && t && this.deactivateActiveTab(e),
                !t) {
                    if (this.isAccordionVersion())
                        return void this.activateMobileTab(e);
                    this.activateTab(e)
                }
            }
            changeActiveTabByKeyboard(e, t) {
                t.widgetId.toString() === this.getID().toString() && this.changeActiveTab(t.titleIndex, !0)
            }
            activateMobileTab(e) {
                setTimeout((()=>{
                    this.activateTab(e),
                    this.forceActiveTabToBeInViewport(e)
                }
                ), 10)
            }
            forceActiveTabToBeInViewport(e) {
                if (!elementorFrontend.isEditMode())
                    return;
                const t = this.elements.$tabTitles.filter(this.getTabTitleFilterSelector(e));
                elementor.helpers.isInViewport(t[0]) || t[0].scrollIntoView({
                    block: "center"
                })
            }
            getActiveClass() {
                return this.getSettings().classes.active
            }
            getTabsDirection() {
                const e = elementorFrontend.getCurrentDeviceMode();
                return elementorFrontend.utils.controls.getResponsiveControlValue(this.getElementSettings(), "tabs_justify_horizontal", "", e)
            }
            getHorizontalScrollSetting() {
                const e = elementorFrontend.getCurrentDeviceMode();
                return elementorFrontend.utils.controls.getResponsiveControlValue(this.getElementSettings(), "horizontal_scroll", "", e)
            }
            isAccordionVersion() {
                return "contents" === this.elements.$headingContainer.css("display")
            }
            setTouchMode() {
                const e = this.getSettings("selectors").widgetContainer;
                if (elementorFrontend.isEditMode() || "resize" === event?.type) {
                    const t = ["mobile", "mobile_extra", "tablet", "tablet_extra"]
                      , n = elementorFrontend.getCurrentDeviceMode();
                    if (-1 !== t.indexOf(n))
                        return void this.$element.find(e).attr("data-touch-mode", "true")
                } else if ("ontouchstart"in window)
                    return void this.$element.find(e).attr("data-touch-mode", "true");
                this.$element.find(e).attr("data-touch-mode", "false")
            }
        }
        t.default = NestedTabs
    }
    ,
    5089: (e,t,n)=>{
        "use strict";
        var i = n(930)
          , r = n(9268)
          , s = TypeError;
        e.exports = function(e) {
            if (i(e))
                return e;
            throw s(r(e) + " is not a function")
        }
    }
    ,
    1378: (e,t,n)=>{
        "use strict";
        var i = n(930)
          , r = String
          , s = TypeError;
        e.exports = function(e) {
            if ("object" == typeof e || i(e))
                return e;
            throw s("Can't set " + r(e) + " as a prototype")
        }
    }
    ,
    6112: (e,t,n)=>{
        "use strict";
        var i = n(8759)
          , r = String
          , s = TypeError;
        e.exports = function(e) {
            if (i(e))
                return e;
            throw s(r(e) + " is not an object")
        }
    }
    ,
    6198: (e,t,n)=>{
        "use strict";
        var i = n(4088)
          , r = n(7740)
          , s = n(2871)
          , createMethod = function(e) {
            return function(t, n, o) {
                var a, l = i(t), c = s(l), u = r(o, c);
                if (e && n != n) {
                    for (; c > u; )
                        if ((a = l[u++]) != a)
                            return !0
                } else
                    for (; c > u; u++)
                        if ((e || u in l) && l[u] === n)
                            return e || u || 0;
                return !e && -1
            }
        };
        e.exports = {
            includes: createMethod(!0),
            indexOf: createMethod(!1)
        }
    }
    ,
    2306: (e,t,n)=>{
        "use strict";
        var i = n(8240)
          , r = i({}.toString)
          , s = i("".slice);
        e.exports = function(e) {
            return s(r(e), 8, -1)
        }
    }
    ,
    375: (e,t,n)=>{
        "use strict";
        var i = n(2371)
          , r = n(930)
          , s = n(2306)
          , o = n(211)("toStringTag")
          , a = Object
          , l = "Arguments" == s(function() {
            return arguments
        }());
        e.exports = i ? s : function(e) {
            var t, n, i;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function(e, t) {
                try {
                    return e[t]
                } catch (e) {}
            }(t = a(e), o)) ? n : l ? s(t) : "Object" == (i = s(t)) && r(t.callee) ? "Arguments" : i
        }
    }
    ,
    8474: (e,t,n)=>{
        "use strict";
        var i = n(9606)
          , r = n(6095)
          , s = n(4399)
          , o = n(7826);
        e.exports = function(e, t, n) {
            for (var a = r(t), l = o.f, c = s.f, u = 0; u < a.length; u++) {
                var d = a[u];
                i(e, d) || n && i(n, d) || l(e, d, c(t, d))
            }
        }
    }
    ,
    2585: (e,t,n)=>{
        "use strict";
        var i = n(5283)
          , r = n(7826)
          , s = n(5736);
        e.exports = i ? function(e, t, n) {
            return r.f(e, t, s(1, n))
        }
        : function(e, t, n) {
            return e[t] = n,
            e
        }
    }
    ,
    5736: e=>{
        "use strict";
        e.exports = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        }
    }
    ,
    1343: (e,t,n)=>{
        "use strict";
        var i = n(930)
          , r = n(7826)
          , s = n(3712)
          , o = n(9444);
        e.exports = function(e, t, n, a) {
            a || (a = {});
            var l = a.enumerable
              , c = void 0 !== a.name ? a.name : t;
            if (i(n) && s(n, c, a),
            a.global)
                l ? e[t] = n : o(t, n);
            else {
                try {
                    a.unsafe ? e[t] && (l = !0) : delete e[t]
                } catch (e) {}
                l ? e[t] = n : r.f(e, t, {
                    value: n,
                    enumerable: !1,
                    configurable: !a.nonConfigurable,
                    writable: !a.nonWritable
                })
            }
            return e
        }
    }
    ,
    9444: (e,t,n)=>{
        "use strict";
        var i = n(2086)
          , r = Object.defineProperty;
        e.exports = function(e, t) {
            try {
                r(i, e, {
                    value: t,
                    configurable: !0,
                    writable: !0
                })
            } catch (n) {
                i[e] = t
            }
            return t
        }
    }
    ,
    5283: (e,t,n)=>{
        "use strict";
        var i = n(3677);
        e.exports = !i((function() {
            return 7 != Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1]
        }
        ))
    }
    ,
    7886: e=>{
        "use strict";
        var t = "object" == typeof document && document.all
          , n = void 0 === t && void 0 !== t;
        e.exports = {
            all: t,
            IS_HTMLDDA: n
        }
    }
    ,
    821: (e,t,n)=>{
        "use strict";
        var i = n(2086)
          , r = n(8759)
          , s = i.document
          , o = r(s) && r(s.createElement);
        e.exports = function(e) {
            return o ? s.createElement(e) : {}
        }
    }
    ,
    4999: e=>{
        "use strict";
        e.exports = "undefined" != typeof navigator && String(navigator.userAgent) || ""
    }
    ,
    1448: (e,t,n)=>{
        "use strict";
        var i, r, s = n(2086), o = n(4999), a = s.process, l = s.Deno, c = a && a.versions || l && l.version, u = c && c.v8;
        u && (r = (i = u.split("."))[0] > 0 && i[0] < 4 ? 1 : +(i[0] + i[1])),
        !r && o && (!(i = o.match(/Edge\/(\d+)/)) || i[1] >= 74) && (i = o.match(/Chrome\/(\d+)/)) && (r = +i[1]),
        e.exports = r
    }
    ,
    8684: e=>{
        "use strict";
        e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
    }
    ,
    79: (e,t,n)=>{
        "use strict";
        var i = n(8240)
          , r = Error
          , s = i("".replace)
          , o = String(r("zxcasd").stack)
          , a = /\n\s*at [^:]*:[^\n]*/
          , l = a.test(o);
        e.exports = function(e, t) {
            if (l && "string" == typeof e && !r.prepareStackTrace)
                for (; t--; )
                    e = s(e, a, "");
            return e
        }
    }
    ,
    8395: (e,t,n)=>{
        "use strict";
        var i = n(2585)
          , r = n(79)
          , s = n(2114)
          , o = Error.captureStackTrace;
        e.exports = function(e, t, n, a) {
            s && (o ? o(e, t) : i(e, "stack", r(n, a)))
        }
    }
    ,
    2114: (e,t,n)=>{
        "use strict";
        var i = n(3677)
          , r = n(5736);
        e.exports = !i((function() {
            var e = Error("a");
            return !("stack"in e) || (Object.defineProperty(e, "stack", r(1, 7)),
            7 !== e.stack)
        }
        ))
    }
    ,
    1695: (e,t,n)=>{
        "use strict";
        var i = n(2086)
          , r = n(4399).f
          , s = n(2585)
          , o = n(1343)
          , a = n(9444)
          , l = n(8474)
          , c = n(7189);
        e.exports = function(e, t) {
            var n, u, d, h, g, p = e.target, f = e.global, m = e.stat;
            if (n = f ? i : m ? i[p] || a(p, {}) : (i[p] || {}).prototype)
                for (u in t) {
                    if (h = t[u],
                    d = e.dontCallGetSet ? (g = r(n, u)) && g.value : n[u],
                    !c(f ? u : p + (m ? "." : "#") + u, e.forced) && void 0 !== d) {
                        if (typeof h == typeof d)
                            continue;
                        l(h, d)
                    }
                    (e.sham || d && d.sham) && s(h, "sham", !0),
                    o(n, u, h, e)
                }
        }
    }
    ,
    3677: e=>{
        "use strict";
        e.exports = function(e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        }
    }
    ,
    7258: (e,t,n)=>{
        "use strict";
        var i = n(6059)
          , r = Function.prototype
          , s = r.apply
          , o = r.call;
        e.exports = "object" == typeof Reflect && Reflect.apply || (i ? o.bind(s) : function() {
            return o.apply(s, arguments)
        }
        )
    }
    ,
    6059: (e,t,n)=>{
        "use strict";
        var i = n(3677);
        e.exports = !i((function() {
            var e = function() {}
            .bind();
            return "function" != typeof e || e.hasOwnProperty("prototype")
        }
        ))
    }
    ,
    9413: (e,t,n)=>{
        "use strict";
        var i = n(6059)
          , r = Function.prototype.call;
        e.exports = i ? r.bind(r) : function() {
            return r.apply(r, arguments)
        }
    }
    ,
    4398: (e,t,n)=>{
        "use strict";
        var i = n(5283)
          , r = n(9606)
          , s = Function.prototype
          , o = i && Object.getOwnPropertyDescriptor
          , a = r(s, "name")
          , l = a && "something" === function something() {}
        .name
          , c = a && (!i || i && o(s, "name").configurable);
        e.exports = {
            EXISTS: a,
            PROPER: l,
            CONFIGURABLE: c
        }
    }
    ,
    1518: (e,t,n)=>{
        "use strict";
        var i = n(8240)
          , r = n(5089);
        e.exports = function(e, t, n) {
            try {
                return i(r(Object.getOwnPropertyDescriptor(e, t)[n]))
            } catch (e) {}
        }
    }
    ,
    8240: (e,t,n)=>{
        "use strict";
        var i = n(6059)
          , r = Function.prototype
          , s = r.call
          , o = i && r.bind.bind(s, s);
        e.exports = i ? o : function(e) {
            return function() {
                return s.apply(e, arguments)
            }
        }
    }
    ,
    563: (e,t,n)=>{
        "use strict";
        var i = n(2086)
          , r = n(930);
        e.exports = function(e, t) {
            return arguments.length < 2 ? (n = i[e],
            r(n) ? n : void 0) : i[e] && i[e][t];
            var n
        }
    }
    ,
    2964: (e,t,n)=>{
        "use strict";
        var i = n(5089)
          , r = n(1858);
        e.exports = function(e, t) {
            var n = e[t];
            return r(n) ? void 0 : i(n)
        }
    }
    ,
    2086: function(e, t, n) {
        "use strict";
        var check = function(e) {
            return e && e.Math == Math && e
        };
        e.exports = check("object" == typeof globalThis && globalThis) || check("object" == typeof window && window) || check("object" == typeof self && self) || check("object" == typeof n.g && n.g) || function() {
            return this
        }() || this || Function("return this")()
    },
    9606: (e,t,n)=>{
        "use strict";
        var i = n(8240)
          , r = n(3060)
          , s = i({}.hasOwnProperty);
        e.exports = Object.hasOwn || function hasOwn(e, t) {
            return s(r(e), t)
        }
    }
    ,
    7153: e=>{
        "use strict";
        e.exports = {}
    }
    ,
    6761: (e,t,n)=>{
        "use strict";
        var i = n(5283)
          , r = n(3677)
          , s = n(821);
        e.exports = !i && !r((function() {
            return 7 != Object.defineProperty(s("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        }
        ))
    }
    ,
    5974: (e,t,n)=>{
        "use strict";
        var i = n(8240)
          , r = n(3677)
          , s = n(2306)
          , o = Object
          , a = i("".split);
        e.exports = r((function() {
            return !o("z").propertyIsEnumerable(0)
        }
        )) ? function(e) {
            return "String" == s(e) ? a(e, "") : o(e)
        }
        : o
    }
    ,
    5070: (e,t,n)=>{
        "use strict";
        var i = n(930)
          , r = n(8759)
          , s = n(7530);
        e.exports = function(e, t, n) {
            var o, a;
            return s && i(o = t.constructor) && o !== n && r(a = o.prototype) && a !== n.prototype && s(e, a),
            e
        }
    }
    ,
    9277: (e,t,n)=>{
        "use strict";
        var i = n(8240)
          , r = n(930)
          , s = n(4489)
          , o = i(Function.toString);
        r(s.inspectSource) || (s.inspectSource = function(e) {
            return o(e)
        }
        ),
        e.exports = s.inspectSource
    }
    ,
    8945: (e,t,n)=>{
        "use strict";
        var i = n(8759)
          , r = n(2585);
        e.exports = function(e, t) {
            i(t) && "cause"in t && r(e, "cause", t.cause)
        }
    }
    ,
    3278: (e,t,n)=>{
        "use strict";
        var i, r, s, o = n(640), a = n(2086), l = n(8759), c = n(2585), u = n(9606), d = n(4489), h = n(8944), g = n(7153), p = "Object already initialized", f = a.TypeError, m = a.WeakMap;
        if (o || d.state) {
            var v = d.state || (d.state = new m);
            v.get = v.get,
            v.has = v.has,
            v.set = v.set,
            i = function(e, t) {
                if (v.has(e))
                    throw f(p);
                return t.facade = e,
                v.set(e, t),
                t
            }
            ,
            r = function(e) {
                return v.get(e) || {}
            }
            ,
            s = function(e) {
                return v.has(e)
            }
        } else {
            var b = h("state");
            g[b] = !0,
            i = function(e, t) {
                if (u(e, b))
                    throw f(p);
                return t.facade = e,
                c(e, b, t),
                t
            }
            ,
            r = function(e) {
                return u(e, b) ? e[b] : {}
            }
            ,
            s = function(e) {
                return u(e, b)
            }
        }
        e.exports = {
            set: i,
            get: r,
            has: s,
            enforce: function(e) {
                return s(e) ? r(e) : i(e, {})
            },
            getterFor: function(e) {
                return function(t) {
                    var n;
                    if (!l(t) || (n = r(t)).type !== e)
                        throw f("Incompatible receiver, " + e + " required");
                    return n
                }
            }
        }
    }
    ,
    930: (e,t,n)=>{
        "use strict";
        var i = n(7886)
          , r = i.all;
        e.exports = i.IS_HTMLDDA ? function(e) {
            return "function" == typeof e || e === r
        }
        : function(e) {
            return "function" == typeof e
        }
    }
    ,
    7189: (e,t,n)=>{
        "use strict";
        var i = n(3677)
          , r = n(930)
          , s = /#|\.prototype\./
          , isForced = function(e, t) {
            var n = a[o(e)];
            return n == c || n != l && (r(t) ? i(t) : !!t)
        }
          , o = isForced.normalize = function(e) {
            return String(e).replace(s, ".").toLowerCase()
        }
          , a = isForced.data = {}
          , l = isForced.NATIVE = "N"
          , c = isForced.POLYFILL = "P";
        e.exports = isForced
    }
    ,
    1858: e=>{
        "use strict";
        e.exports = function(e) {
            return null == e
        }
    }
    ,
    8759: (e,t,n)=>{
        "use strict";
        var i = n(930)
          , r = n(7886)
          , s = r.all;
        e.exports = r.IS_HTMLDDA ? function(e) {
            return "object" == typeof e ? null !== e : i(e) || e === s
        }
        : function(e) {
            return "object" == typeof e ? null !== e : i(e)
        }
    }
    ,
    3296: e=>{
        "use strict";
        e.exports = !1
    }
    ,
    2071: (e,t,n)=>{
        "use strict";
        var i = n(563)
          , r = n(930)
          , s = n(5516)
          , o = n(1876)
          , a = Object;
        e.exports = o ? function(e) {
            return "symbol" == typeof e
        }
        : function(e) {
            var t = i("Symbol");
            return r(t) && s(t.prototype, a(e))
        }
    }
    ,
    2871: (e,t,n)=>{
        "use strict";
        var i = n(4005);
        e.exports = function(e) {
            return i(e.length)
        }
    }
    ,
    3712: (e,t,n)=>{
        "use strict";
        var i = n(8240)
          , r = n(3677)
          , s = n(930)
          , o = n(9606)
          , a = n(5283)
          , l = n(4398).CONFIGURABLE
          , c = n(9277)
          , u = n(3278)
          , d = u.enforce
          , h = u.get
          , g = String
          , p = Object.defineProperty
          , f = i("".slice)
          , m = i("".replace)
          , v = i([].join)
          , b = a && !r((function() {
            return 8 !== p((function() {}
            ), "length", {
                value: 8
            }).length
        }
        ))
          , y = String(String).split("String")
          , S = e.exports = function(e, t, n) {
            "Symbol(" === f(g(t), 0, 7) && (t = "[" + m(g(t), /^Symbol\(([^)]*)\)/, "$1") + "]"),
            n && n.getter && (t = "get " + t),
            n && n.setter && (t = "set " + t),
            (!o(e, "name") || l && e.name !== t) && (a ? p(e, "name", {
                value: t,
                configurable: !0
            }) : e.name = t),
            b && n && o(n, "arity") && e.length !== n.arity && p(e, "length", {
                value: n.arity
            });
            try {
                n && o(n, "constructor") && n.constructor ? a && p(e, "prototype", {
                    writable: !1
                }) : e.prototype && (e.prototype = void 0)
            } catch (e) {}
            var i = d(e);
            return o(i, "source") || (i.source = v(y, "string" == typeof t ? t : "")),
            e
        }
        ;
        Function.prototype.toString = S((function toString() {
            return s(this) && h(this).source || c(this)
        }
        ), "toString")
    }
    ,
    5681: e=>{
        "use strict";
        var t = Math.ceil
          , n = Math.floor;
        e.exports = Math.trunc || function trunc(e) {
            var i = +e;
            return (i > 0 ? n : t)(i)
        }
    }
    ,
    1879: (e,t,n)=>{
        "use strict";
        var i = n(4059);
        e.exports = function(e, t) {
            return void 0 === e ? arguments.length < 2 ? "" : t : i(e)
        }
    }
    ,
    7826: (e,t,n)=>{
        "use strict";
        var i = n(5283)
          , r = n(6761)
          , s = n(8202)
          , o = n(6112)
          , a = n(2258)
          , l = TypeError
          , c = Object.defineProperty
          , u = Object.getOwnPropertyDescriptor
          , d = "enumerable"
          , h = "configurable"
          , g = "writable";
        t.f = i ? s ? function defineProperty(e, t, n) {
            if (o(e),
            t = a(t),
            o(n),
            "function" == typeof e && "prototype" === t && "value"in n && g in n && !n[g]) {
                var i = u(e, t);
                i && i[g] && (e[t] = n.value,
                n = {
                    configurable: h in n ? n[h] : i[h],
                    enumerable: d in n ? n[d] : i[d],
                    writable: !1
                })
            }
            return c(e, t, n)
        }
        : c : function defineProperty(e, t, n) {
            if (o(e),
            t = a(t),
            o(n),
            r)
                try {
                    return c(e, t, n)
                } catch (e) {}
            if ("get"in n || "set"in n)
                throw l("Accessors not supported");
            return "value"in n && (e[t] = n.value),
            e
        }
    }
    ,
    4399: (e,t,n)=>{
        "use strict";
        var i = n(5283)
          , r = n(9413)
          , s = n(7446)
          , o = n(5736)
          , a = n(4088)
          , l = n(2258)
          , c = n(9606)
          , u = n(6761)
          , d = Object.getOwnPropertyDescriptor;
        t.f = i ? d : function getOwnPropertyDescriptor(e, t) {
            if (e = a(e),
            t = l(t),
            u)
                try {
                    return d(e, t)
                } catch (e) {}
            if (c(e, t))
                return o(!r(s.f, e, t), e[t])
        }
    }
    ,
    62: (e,t,n)=>{
        "use strict";
        var i = n(1352)
          , r = n(8684).concat("length", "prototype");
        t.f = Object.getOwnPropertyNames || function getOwnPropertyNames(e) {
            return i(e, r)
        }
    }
    ,
    6952: (e,t)=>{
        "use strict";
        t.f = Object.getOwnPropertySymbols
    }
    ,
    5516: (e,t,n)=>{
        "use strict";
        var i = n(8240);
        e.exports = i({}.isPrototypeOf)
    }
    ,
    1352: (e,t,n)=>{
        "use strict";
        var i = n(8240)
          , r = n(9606)
          , s = n(4088)
          , o = n(6198).indexOf
          , a = n(7153)
          , l = i([].push);
        e.exports = function(e, t) {
            var n, i = s(e), c = 0, u = [];
            for (n in i)
                !r(a, n) && r(i, n) && l(u, n);
            for (; t.length > c; )
                r(i, n = t[c++]) && (~o(u, n) || l(u, n));
            return u
        }
    }
    ,
    7446: (e,t)=>{
        "use strict";
        var n = {}.propertyIsEnumerable
          , i = Object.getOwnPropertyDescriptor
          , r = i && !n.call({
            1: 2
        }, 1);
        t.f = r ? function propertyIsEnumerable(e) {
            var t = i(this, e);
            return !!t && t.enumerable
        }
        : n
    }
    ,
    7530: (e,t,n)=>{
        "use strict";
        var i = n(1518)
          , r = n(6112)
          , s = n(1378);
        e.exports = Object.setPrototypeOf || ("__proto__"in {} ? function() {
            var e, t = !1, n = {};
            try {
                (e = i(Object.prototype, "__proto__", "set"))(n, []),
                t = n instanceof Array
            } catch (e) {}
            return function setPrototypeOf(n, i) {
                return r(n),
                s(i),
                t ? e(n, i) : n.__proto__ = i,
                n
            }
        }() : void 0)
    }
    ,
    7999: (e,t,n)=>{
        "use strict";
        var i = n(9413)
          , r = n(930)
          , s = n(8759)
          , o = TypeError;
        e.exports = function(e, t) {
            var n, a;
            if ("string" === t && r(n = e.toString) && !s(a = i(n, e)))
                return a;
            if (r(n = e.valueOf) && !s(a = i(n, e)))
                return a;
            if ("string" !== t && r(n = e.toString) && !s(a = i(n, e)))
                return a;
            throw o("Can't convert object to primitive value")
        }
    }
    ,
    6095: (e,t,n)=>{
        "use strict";
        var i = n(563)
          , r = n(8240)
          , s = n(62)
          , o = n(6952)
          , a = n(6112)
          , l = r([].concat);
        e.exports = i("Reflect", "ownKeys") || function ownKeys(e) {
            var t = s.f(a(e))
              , n = o.f;
            return n ? l(t, n(e)) : t
        }
    }
    ,
    1632: (e,t,n)=>{
        "use strict";
        var i = n(7826).f;
        e.exports = function(e, t, n) {
            n in e || i(e, n, {
                configurable: !0,
                get: function() {
                    return t[n]
                },
                set: function(e) {
                    t[n] = e
                }
            })
        }
    }
    ,
    9586: (e,t,n)=>{
        "use strict";
        var i = n(1858)
          , r = TypeError;
        e.exports = function(e) {
            if (i(e))
                throw r("Can't call method on " + e);
            return e
        }
    }
    ,
    8944: (e,t,n)=>{
        "use strict";
        var i = n(9197)
          , r = n(5422)
          , s = i("keys");
        e.exports = function(e) {
            return s[e] || (s[e] = r(e))
        }
    }
    ,
    4489: (e,t,n)=>{
        "use strict";
        var i = n(2086)
          , r = n(9444)
          , s = "__core-js_shared__"
          , o = i[s] || r(s, {});
        e.exports = o
    }
    ,
    9197: (e,t,n)=>{
        "use strict";
        var i = n(3296)
          , r = n(4489);
        (e.exports = function(e, t) {
            return r[e] || (r[e] = void 0 !== t ? t : {})
        }
        )("versions", []).push({
            version: "3.32.0",
            mode: i ? "pure" : "global",
            copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)",
            license: "https://github.com/zloirock/core-js/blob/v3.32.0/LICENSE",
            source: "https://github.com/zloirock/core-js"
        })
    }
    ,
    5558: (e,t,n)=>{
        "use strict";
        var i = n(1448)
          , r = n(3677)
          , s = n(2086).String;
        e.exports = !!Object.getOwnPropertySymbols && !r((function() {
            var e = Symbol();
            return !s(e) || !(Object(e)instanceof Symbol) || !Symbol.sham && i && i < 41
        }
        ))
    }
    ,
    7740: (e,t,n)=>{
        "use strict";
        var i = n(9502)
          , r = Math.max
          , s = Math.min;
        e.exports = function(e, t) {
            var n = i(e);
            return n < 0 ? r(n + t, 0) : s(n, t)
        }
    }
    ,
    4088: (e,t,n)=>{
        "use strict";
        var i = n(5974)
          , r = n(9586);
        e.exports = function(e) {
            return i(r(e))
        }
    }
    ,
    9502: (e,t,n)=>{
        "use strict";
        var i = n(5681);
        e.exports = function(e) {
            var t = +e;
            return t != t || 0 === t ? 0 : i(t)
        }
    }
    ,
    4005: (e,t,n)=>{
        "use strict";
        var i = n(9502)
          , r = Math.min;
        e.exports = function(e) {
            return e > 0 ? r(i(e), 9007199254740991) : 0
        }
    }
    ,
    3060: (e,t,n)=>{
        "use strict";
        var i = n(9586)
          , r = Object;
        e.exports = function(e) {
            return r(i(e))
        }
    }
    ,
    1288: (e,t,n)=>{
        "use strict";
        var i = n(9413)
          , r = n(8759)
          , s = n(2071)
          , o = n(2964)
          , a = n(7999)
          , l = n(211)
          , c = TypeError
          , u = l("toPrimitive");
        e.exports = function(e, t) {
            if (!r(e) || s(e))
                return e;
            var n, l = o(e, u);
            if (l) {
                if (void 0 === t && (t = "default"),
                n = i(l, e, t),
                !r(n) || s(n))
                    return n;
                throw c("Can't convert object to primitive value")
            }
            return void 0 === t && (t = "number"),
            a(e, t)
        }
    }
    ,
    2258: (e,t,n)=>{
        "use strict";
        var i = n(1288)
          , r = n(2071);
        e.exports = function(e) {
            var t = i(e, "string");
            return r(t) ? t : t + ""
        }
    }
    ,
    2371: (e,t,n)=>{
        "use strict";
        var i = {};
        i[n(211)("toStringTag")] = "z",
        e.exports = "[object z]" === String(i)
    }
    ,
    4059: (e,t,n)=>{
        "use strict";
        var i = n(375)
          , r = String;
        e.exports = function(e) {
            if ("Symbol" === i(e))
                throw TypeError("Cannot convert a Symbol value to a string");
            return r(e)
        }
    }
    ,
    9268: e=>{
        "use strict";
        var t = String;
        e.exports = function(e) {
            try {
                return t(e)
            } catch (e) {
                return "Object"
            }
        }
    }
    ,
    5422: (e,t,n)=>{
        "use strict";
        var i = n(8240)
          , r = 0
          , s = Math.random()
          , o = i(1..toString);
        e.exports = function(e) {
            return "Symbol(" + (void 0 === e ? "" : e) + ")_" + o(++r + s, 36)
        }
    }
    ,
    1876: (e,t,n)=>{
        "use strict";
        var i = n(5558);
        e.exports = i && !Symbol.sham && "symbol" == typeof Symbol.iterator
    }
    ,
    8202: (e,t,n)=>{
        "use strict";
        var i = n(5283)
          , r = n(3677);
        e.exports = i && r((function() {
            return 42 != Object.defineProperty((function() {}
            ), "prototype", {
                value: 42,
                writable: !1
            }).prototype
        }
        ))
    }
    ,
    640: (e,t,n)=>{
        "use strict";
        var i = n(2086)
          , r = n(930)
          , s = i.WeakMap;
        e.exports = r(s) && /native code/.test(String(s))
    }
    ,
    211: (e,t,n)=>{
        "use strict";
        var i = n(2086)
          , r = n(9197)
          , s = n(9606)
          , o = n(5422)
          , a = n(5558)
          , l = n(1876)
          , c = i.Symbol
          , u = r("wks")
          , d = l ? c.for || c : c && c.withoutSetter || o;
        e.exports = function(e) {
            return s(u, e) || (u[e] = a && s(c, e) ? c[e] : d("Symbol." + e)),
            u[e]
        }
    }
    ,
    1557: (e,t,n)=>{
        "use strict";
        var i = n(563)
          , r = n(9606)
          , s = n(2585)
          , o = n(5516)
          , a = n(7530)
          , l = n(8474)
          , c = n(1632)
          , u = n(5070)
          , d = n(1879)
          , h = n(8945)
          , g = n(8395)
          , p = n(5283)
          , f = n(3296);
        e.exports = function(e, t, n, m) {
            var v = "stackTraceLimit"
              , b = m ? 2 : 1
              , y = e.split(".")
              , S = y[y.length - 1]
              , w = i.apply(null, y);
            if (w) {
                var E = w.prototype;
                if (!f && r(E, "cause") && delete E.cause,
                !n)
                    return w;
                var T = i("Error")
                  , C = t((function(e, t) {
                    var n = d(m ? t : e, void 0)
                      , i = m ? new w(e) : new w;
                    return void 0 !== n && s(i, "message", n),
                    g(i, C, i.stack, 2),
                    this && o(E, this) && u(i, this, C),
                    arguments.length > b && h(i, arguments[b]),
                    i
                }
                ));
                if (C.prototype = E,
                "Error" !== S ? a ? a(C, T) : l(C, T, {
                    name: !0
                }) : p && v in w && (c(C, w, v),
                c(C, w, "prepareStackTrace")),
                l(C, w),
                !f)
                    try {
                        E.name !== S && s(E, "name", S),
                        E.constructor = C
                    } catch (e) {}
                return C
            }
        }
    }
    ,
    740: (e,t,n)=>{
        "use strict";
        var i = n(1695)
          , r = n(2086)
          , s = n(7258)
          , o = n(1557)
          , a = "WebAssembly"
          , l = r[a]
          , c = 7 !== Error("e", {
            cause: 7
        }).cause
          , exportGlobalErrorCauseWrapper = function(e, t) {
            var n = {};
            n[e] = o(e, t, c),
            i({
                global: !0,
                constructor: !0,
                arity: 1,
                forced: c
            }, n)
        }
          , exportWebAssemblyErrorCauseWrapper = function(e, t) {
            if (l && l[e]) {
                var n = {};
                n[e] = o(a + "." + e, t, c),
                i({
                    target: a,
                    stat: !0,
                    constructor: !0,
                    arity: 1,
                    forced: c
                }, n)
            }
        };
        exportGlobalErrorCauseWrapper("Error", (function(e) {
            return function Error(t) {
                return s(e, this, arguments)
            }
        }
        )),
        exportGlobalErrorCauseWrapper("EvalError", (function(e) {
            return function EvalError(t) {
                return s(e, this, arguments)
            }
        }
        )),
        exportGlobalErrorCauseWrapper("RangeError", (function(e) {
            return function RangeError(t) {
                return s(e, this, arguments)
            }
        }
        )),
        exportGlobalErrorCauseWrapper("ReferenceError", (function(e) {
            return function ReferenceError(t) {
                return s(e, this, arguments)
            }
        }
        )),
        exportGlobalErrorCauseWrapper("SyntaxError", (function(e) {
            return function SyntaxError(t) {
                return s(e, this, arguments)
            }
        }
        )),
        exportGlobalErrorCauseWrapper("TypeError", (function(e) {
            return function TypeError(t) {
                return s(e, this, arguments)
            }
        }
        )),
        exportGlobalErrorCauseWrapper("URIError", (function(e) {
            return function URIError(t) {
                return s(e, this, arguments)
            }
        }
        )),
        exportWebAssemblyErrorCauseWrapper("CompileError", (function(e) {
            return function CompileError(t) {
                return s(e, this, arguments)
            }
        }
        )),
        exportWebAssemblyErrorCauseWrapper("LinkError", (function(e) {
            return function LinkError(t) {
                return s(e, this, arguments)
            }
        }
        )),
        exportWebAssemblyErrorCauseWrapper("RuntimeError", (function(e) {
            return function RuntimeError(t) {
                return s(e, this, arguments)
            }
        }
        ))
    }
    ,
    3203: e=>{
        e.exports = function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    }
}, e=>{
    var t;
    t = 6412,
    e(e.s = t)
}
]);
!function() {
    "use strict";
    function Waypoint(options) {
        if (!options)
            throw new Error("No options passed to Waypoint constructor");
        if (!options.element)
            throw new Error("No element option passed to Waypoint constructor");
        if (!options.handler)
            throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + keyCounter,
        this.options = Waypoint.Adapter.extend({}, Waypoint.defaults, options),
        this.element = this.options.element,
        this.adapter = new Waypoint.Adapter(this.element),
        this.callback = options.handler,
        this.axis = this.options.horizontal ? "horizontal" : "vertical",
        this.enabled = this.options.enabled,
        this.triggerPoint = null,
        this.group = Waypoint.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }),
        this.context = Waypoint.Context.findOrCreateByElement(this.options.context),
        Waypoint.offsetAliases[this.options.offset] && (this.options.offset = Waypoint.offsetAliases[this.options.offset]),
        this.group.add(this),
        this.context.add(this),
        allWaypoints[this.key] = this,
        keyCounter += 1
    }
    var keyCounter = 0
      , allWaypoints = {};
    Waypoint.prototype.queueTrigger = function(direction) {
        this.group.queueTrigger(this, direction)
    }
    ,
    Waypoint.prototype.trigger = function(args) {
        this.enabled && this.callback && this.callback.apply(this, args)
    }
    ,
    Waypoint.prototype.destroy = function() {
        this.context.remove(this),
        this.group.remove(this),
        delete allWaypoints[this.key]
    }
    ,
    Waypoint.prototype.disable = function() {
        return this.enabled = !1,
        this
    }
    ,
    Waypoint.prototype.enable = function() {
        return this.context.refresh(),
        this.enabled = !0,
        this
    }
    ,
    Waypoint.prototype.next = function() {
        return this.group.next(this)
    }
    ,
    Waypoint.prototype.previous = function() {
        return this.group.previous(this)
    }
    ,
    Waypoint.invokeAll = function(method) {
        var allWaypointsArray = [];
        for (var waypointKey in allWaypoints)
            allWaypointsArray.push(allWaypoints[waypointKey]);
        for (var i = 0, end = allWaypointsArray.length; i < end; i++)
            allWaypointsArray[i][method]()
    }
    ,
    Waypoint.destroyAll = function() {
        Waypoint.invokeAll("destroy")
    }
    ,
    Waypoint.disableAll = function() {
        Waypoint.invokeAll("disable")
    }
    ,
    Waypoint.enableAll = function() {
        Waypoint.Context.refreshAll();
        for (var waypointKey in allWaypoints)
            allWaypoints[waypointKey].enabled = !0;
        return this
    }
    ,
    Waypoint.refreshAll = function() {
        Waypoint.Context.refreshAll()
    }
    ,
    Waypoint.viewportHeight = function() {
        return window.innerHeight || document.documentElement.clientHeight
    }
    ,
    Waypoint.viewportWidth = function() {
        return document.documentElement.clientWidth
    }
    ,
    Waypoint.adapters = [],
    Waypoint.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    },
    Waypoint.offsetAliases = {
        "bottom-in-view": function() {
            return this.context.innerHeight() - this.adapter.outerHeight()
        },
        "right-in-view": function() {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    },
    window.Waypoint = Waypoint
}(),
function() {
    "use strict";
    function requestAnimationFrameShim(callback) {
        window.setTimeout(callback, 1e3 / 60)
    }
    function Context(element) {
        this.element = element,
        this.Adapter = Waypoint.Adapter,
        this.adapter = new this.Adapter(element),
        this.key = "waypoint-context-" + keyCounter,
        this.didScroll = !1,
        this.didResize = !1,
        this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        },
        this.waypoints = {
            vertical: {},
            horizontal: {}
        },
        element.waypointContextKey = this.key,
        contexts[element.waypointContextKey] = this,
        keyCounter += 1,
        Waypoint.windowContext || (Waypoint.windowContext = !0,
        Waypoint.windowContext = new Context(window)),
        this.createThrottledScrollHandler(),
        this.createThrottledResizeHandler()
    }
    var keyCounter = 0
      , contexts = {}
      , Waypoint = window.Waypoint
      , oldWindowLoad = window.onload;
    Context.prototype.add = function(waypoint) {
        var axis = waypoint.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[axis][waypoint.key] = waypoint,
        this.refresh()
    }
    ,
    Context.prototype.checkEmpty = function() {
        var horizontalEmpty = this.Adapter.isEmptyObject(this.waypoints.horizontal)
          , verticalEmpty = this.Adapter.isEmptyObject(this.waypoints.vertical)
          , isWindow = this.element == this.element.window;
        horizontalEmpty && verticalEmpty && !isWindow && (this.adapter.off(".waypoints"),
        delete contexts[this.key])
    }
    ,
    Context.prototype.createThrottledResizeHandler = function() {
        function resizeHandler() {
            self.handleResize(),
            self.didResize = !1
        }
        var self = this;
        this.adapter.on("resize.waypoints", function() {
            self.didResize || (self.didResize = !0,
            Waypoint.requestAnimationFrame(resizeHandler))
        })
    }
    ,
    Context.prototype.createThrottledScrollHandler = function() {
        function scrollHandler() {
            self.handleScroll(),
            self.didScroll = !1
        }
        var self = this;
        this.adapter.on("scroll.waypoints", function() {
            self.didScroll && !Waypoint.isTouch || (self.didScroll = !0,
            Waypoint.requestAnimationFrame(scrollHandler))
        })
    }
    ,
    Context.prototype.handleResize = function() {
        Waypoint.Context.refreshAll()
    }
    ,
    Context.prototype.handleScroll = function() {
        var triggeredGroups = {}
          , axes = {
            horizontal: {
                newScroll: this.adapter.scrollLeft(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left"
            },
            vertical: {
                newScroll: this.adapter.scrollTop(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up"
            }
        };
        for (var axisKey in axes) {
            var axis = axes[axisKey]
              , isForward = axis.newScroll > axis.oldScroll
              , direction = isForward ? axis.forward : axis.backward;
            for (var waypointKey in this.waypoints[axisKey]) {
                var waypoint = this.waypoints[axisKey][waypointKey];
                if (null !== waypoint.triggerPoint) {
                    var wasBeforeTriggerPoint = axis.oldScroll < waypoint.triggerPoint
                      , nowAfterTriggerPoint = axis.newScroll >= waypoint.triggerPoint
                      , crossedForward = wasBeforeTriggerPoint && nowAfterTriggerPoint
                      , crossedBackward = !wasBeforeTriggerPoint && !nowAfterTriggerPoint;
                    (crossedForward || crossedBackward) && (waypoint.queueTrigger(direction),
                    triggeredGroups[waypoint.group.id] = waypoint.group)
                }
            }
        }
        for (var groupKey in triggeredGroups)
            triggeredGroups[groupKey].flushTriggers();
        this.oldScroll = {
            x: axes.horizontal.newScroll,
            y: axes.vertical.newScroll
        }
    }
    ,
    Context.prototype.innerHeight = function() {
        return this.element == this.element.window ? Waypoint.viewportHeight() : this.adapter.innerHeight()
    }
    ,
    Context.prototype.remove = function(waypoint) {
        delete this.waypoints[waypoint.axis][waypoint.key],
        this.checkEmpty()
    }
    ,
    Context.prototype.innerWidth = function() {
        return this.element == this.element.window ? Waypoint.viewportWidth() : this.adapter.innerWidth()
    }
    ,
    Context.prototype.destroy = function() {
        var allWaypoints = [];
        for (var axis in this.waypoints)
            for (var waypointKey in this.waypoints[axis])
                allWaypoints.push(this.waypoints[axis][waypointKey]);
        for (var i = 0, end = allWaypoints.length; i < end; i++)
            allWaypoints[i].destroy()
    }
    ,
    Context.prototype.refresh = function() {
        var axes, isWindow = this.element == this.element.window, contextOffset = isWindow ? void 0 : this.adapter.offset(), triggeredGroups = {};
        this.handleScroll(),
        axes = {
            horizontal: {
                contextOffset: isWindow ? 0 : contextOffset.left,
                contextScroll: isWindow ? 0 : this.oldScroll.x,
                contextDimension: this.innerWidth(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left",
                offsetProp: "left"
            },
            vertical: {
                contextOffset: isWindow ? 0 : contextOffset.top,
                contextScroll: isWindow ? 0 : this.oldScroll.y,
                contextDimension: this.innerHeight(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up",
                offsetProp: "top"
            }
        };
        for (var axisKey in axes) {
            var axis = axes[axisKey];
            for (var waypointKey in this.waypoints[axisKey]) {
                var contextModifier, wasBeforeScroll, nowAfterScroll, triggeredBackward, triggeredForward, waypoint = this.waypoints[axisKey][waypointKey], adjustment = waypoint.options.offset, oldTriggerPoint = waypoint.triggerPoint, elementOffset = 0, freshWaypoint = null == oldTriggerPoint;
                waypoint.element !== waypoint.element.window && (elementOffset = waypoint.adapter.offset()[axis.offsetProp]),
                "function" == typeof adjustment ? adjustment = adjustment.apply(waypoint) : "string" == typeof adjustment && (adjustment = parseFloat(adjustment),
                waypoint.options.offset.indexOf("%") > -1 && (adjustment = Math.ceil(axis.contextDimension * adjustment / 100))),
                contextModifier = axis.contextScroll - axis.contextOffset,
                waypoint.triggerPoint = Math.floor(elementOffset + contextModifier - adjustment),
                wasBeforeScroll = oldTriggerPoint < axis.oldScroll,
                nowAfterScroll = waypoint.triggerPoint >= axis.oldScroll,
                triggeredBackward = wasBeforeScroll && nowAfterScroll,
                triggeredForward = !wasBeforeScroll && !nowAfterScroll,
                !freshWaypoint && triggeredBackward ? (waypoint.queueTrigger(axis.backward),
                triggeredGroups[waypoint.group.id] = waypoint.group) : !freshWaypoint && triggeredForward ? (waypoint.queueTrigger(axis.forward),
                triggeredGroups[waypoint.group.id] = waypoint.group) : freshWaypoint && axis.oldScroll >= waypoint.triggerPoint && (waypoint.queueTrigger(axis.forward),
                triggeredGroups[waypoint.group.id] = waypoint.group)
            }
        }
        return Waypoint.requestAnimationFrame(function() {
            for (var groupKey in triggeredGroups)
                triggeredGroups[groupKey].flushTriggers()
        }),
        this
    }
    ,
    Context.findOrCreateByElement = function(element) {
        return Context.findByElement(element) || new Context(element)
    }
    ,
    Context.refreshAll = function() {
        for (var contextId in contexts)
            contexts[contextId].refresh()
    }
    ,
    Context.findByElement = function(element) {
        return contexts[element.waypointContextKey]
    }
    ,
    window.onload = function() {
        oldWindowLoad && oldWindowLoad(),
        Context.refreshAll()
    }
    ,
    Waypoint.requestAnimationFrame = function(callback) {
        var requestFn = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || requestAnimationFrameShim;
        requestFn.call(window, callback)
    }
    ,
    Waypoint.Context = Context
}(),
function() {
    "use strict";
    function byTriggerPoint(a, b) {
        return a.triggerPoint - b.triggerPoint
    }
    function byReverseTriggerPoint(a, b) {
        return b.triggerPoint - a.triggerPoint
    }
    function Group(options) {
        this.name = options.name,
        this.axis = options.axis,
        this.id = this.name + "-" + this.axis,
        this.waypoints = [],
        this.clearTriggerQueues(),
        groups[this.axis][this.name] = this
    }
    var groups = {
        vertical: {},
        horizontal: {}
    }
      , Waypoint = window.Waypoint;
    Group.prototype.add = function(waypoint) {
        this.waypoints.push(waypoint)
    }
    ,
    Group.prototype.clearTriggerQueues = function() {
        this.triggerQueues = {
            up: [],
            down: [],
            left: [],
            right: []
        }
    }
    ,
    Group.prototype.flushTriggers = function() {
        for (var direction in this.triggerQueues) {
            var waypoints = this.triggerQueues[direction]
              , reverse = "up" === direction || "left" === direction;
            waypoints.sort(reverse ? byReverseTriggerPoint : byTriggerPoint);
            for (var i = 0, end = waypoints.length; i < end; i += 1) {
                var waypoint = waypoints[i];
                (waypoint.options.continuous || i === waypoints.length - 1) && waypoint.trigger([direction])
            }
        }
        this.clearTriggerQueues()
    }
    ,
    Group.prototype.next = function(waypoint) {
        this.waypoints.sort(byTriggerPoint);
        var index = Waypoint.Adapter.inArray(waypoint, this.waypoints)
          , isLast = index === this.waypoints.length - 1;
        return isLast ? null : this.waypoints[index + 1]
    }
    ,
    Group.prototype.previous = function(waypoint) {
        this.waypoints.sort(byTriggerPoint);
        var index = Waypoint.Adapter.inArray(waypoint, this.waypoints);
        return index ? this.waypoints[index - 1] : null
    }
    ,
    Group.prototype.queueTrigger = function(waypoint, direction) {
        this.triggerQueues[direction].push(waypoint)
    }
    ,
    Group.prototype.remove = function(waypoint) {
        var index = Waypoint.Adapter.inArray(waypoint, this.waypoints);
        index > -1 && this.waypoints.splice(index, 1)
    }
    ,
    Group.prototype.first = function() {
        return this.waypoints[0]
    }
    ,
    Group.prototype.last = function() {
        return this.waypoints[this.waypoints.length - 1]
    }
    ,
    Group.findOrCreate = function(options) {
        return groups[options.axis][options.name] || new Group(options)
    }
    ,
    Waypoint.Group = Group
}(),
function() {
    "use strict";
    function JQueryAdapter(element) {
        this.$element = $(element)
    }
    var $ = window.jQuery
      , Waypoint = window.Waypoint;
    $.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(i, method) {
        JQueryAdapter.prototype[method] = function() {
            var args = Array.prototype.slice.call(arguments);
            return this.$element[method].apply(this.$element, args)
        }
    }),
    $.each(["extend", "inArray", "isEmptyObject"], function(i, method) {
        JQueryAdapter[method] = $[method]
    }),
    Waypoint.adapters.push({
        name: "jquery",
        Adapter: JQueryAdapter
    }),
    Waypoint.Adapter = JQueryAdapter
}(),
function() {
    "use strict";
    function createExtension(framework) {
        return function() {
            var waypoints = []
              , overrides = arguments[0];
            return framework.isFunction(arguments[0]) && (overrides = framework.extend({}, arguments[1]),
            overrides.handler = arguments[0]),
            this.each(function() {
                var options = framework.extend({}, overrides, {
                    element: this
                });
                "string" == typeof options.context && (options.context = framework(this).closest(options.context)[0]),
                waypoints.push(new Waypoint(options))
            }),
            waypoints
        }
    }
    var Waypoint = window.Waypoint;
    window.jQuery && (window.jQuery.fn.elementorWaypoint = createExtension(window.jQuery)),
    window.Zepto && (window.Zepto.fn.elementorWaypoint = createExtension(window.Zepto))
}();
/*! jQuery UI - v1.13.2 - 2022-07-14
* http://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-patch.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */
!function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function(x) {
    "use strict";
    var t, e, i, n, W, C, o, s, r, l, a, h, u;
    function E(t, e, i) {
        return [parseFloat(t[0]) * (a.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (a.test(t[1]) ? i / 100 : 1)]
    }
    function L(t, e) {
        return parseInt(x.css(t, e), 10) || 0
    }
    function N(t) {
        return null != t && t === t.window
    }
    x.ui = x.ui || {},
    x.ui.version = "1.13.2",
    /*!
 * jQuery UI :data 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    x.extend(x.expr.pseudos, {
        data: x.expr.createPseudo ? x.expr.createPseudo(function(e) {
            return function(t) {
                return !!x.data(t, e)
            }
        }) : function(t, e, i) {
            return !!x.data(t, i[3])
        }
    }),
    /*!
 * jQuery UI Disable Selection 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    x.fn.extend({
        disableSelection: (t = "onselectstart"in document.createElement("div") ? "selectstart" : "mousedown",
        function() {
            return this.on(t + ".ui-disableSelection", function(t) {
                t.preventDefault()
            })
        }
        ),
        enableSelection: function() {
            return this.off(".ui-disableSelection")
        }
    }),
    /*!
 * jQuery UI Focusable 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    x.ui.focusable = function(t, e) {
        var i, n, o, s = t.nodeName.toLowerCase();
        return "area" === s ? (o = (i = t.parentNode).name,
        !(!t.href || !o || "map" !== i.nodeName.toLowerCase()) && 0 < (i = x("img[usemap='#" + o + "']")).length && i.is(":visible")) : (/^(input|select|textarea|button|object)$/.test(s) ? (n = !t.disabled) && (o = x(t).closest("fieldset")[0]) && (n = !o.disabled) : n = "a" === s && t.href || e,
        n && x(t).is(":visible") && function(t) {
            var e = t.css("visibility");
            for (; "inherit" === e; )
                t = t.parent(),
                e = t.css("visibility");
            return "visible" === e
        }(x(t)))
    }
    ,
    x.extend(x.expr.pseudos, {
        focusable: function(t) {
            return x.ui.focusable(t, null != x.attr(t, "tabindex"))
        }
    }),
    x.fn._form = function() {
        return "string" == typeof this[0].form ? this.closest("form") : x(this[0].form)
    }
    ,
    /*!
 * jQuery UI Form Reset Mixin 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    x.ui.formResetMixin = {
        _formResetHandler: function() {
            var e = x(this);
            setTimeout(function() {
                var t = e.data("ui-form-reset-instances");
                x.each(t, function() {
                    this.refresh()
                })
            })
        },
        _bindFormResetHandler: function() {
            var t;
            this.form = this.element._form(),
            this.form.length && ((t = this.form.data("ui-form-reset-instances") || []).length || this.form.on("reset.ui-form-reset", this._formResetHandler),
            t.push(this),
            this.form.data("ui-form-reset-instances", t))
        },
        _unbindFormResetHandler: function() {
            var t;
            this.form.length && ((t = this.form.data("ui-form-reset-instances")).splice(x.inArray(this, t), 1),
            t.length ? this.form.data("ui-form-reset-instances", t) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset"))
        }
    },
    x.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),
    /*!
 * jQuery UI Support for jQuery core 1.8.x and newer 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 */
    x.expr.pseudos || (x.expr.pseudos = x.expr[":"]),
    x.uniqueSort || (x.uniqueSort = x.unique),
    x.escapeSelector || (e = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
    i = function(t, e) {
        return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
    }
    ,
    x.escapeSelector = function(t) {
        return (t + "").replace(e, i)
    }
    ),
    x.fn.even && x.fn.odd || x.fn.extend({
        even: function() {
            return this.filter(function(t) {
                return t % 2 == 0
            })
        },
        odd: function() {
            return this.filter(function(t) {
                return t % 2 == 1
            })
        }
    }),
    /*!
 * jQuery UI Keycode 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    x.ui.keyCode = {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38
    },
    /*!
 * jQuery UI Labels 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    x.fn.labels = function() {
        var t, e, i;
        return this.length ? this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (e = this.eq(0).parents("label"),
        (t = this.attr("id")) && (i = (i = this.eq(0).parents().last()).add((i.length ? i : this).siblings()),
        t = "label[for='" + x.escapeSelector(t) + "']",
        e = e.add(i.find(t).addBack(t))),
        this.pushStack(e)) : this.pushStack([])
    }
    ,
    x.ui.plugin = {
        add: function(t, e, i) {
            var n, o = x.ui[t].prototype;
            for (n in i)
                o.plugins[n] = o.plugins[n] || [],
                o.plugins[n].push([e, i[n]])
        },
        call: function(t, e, i, n) {
            var o, s = t.plugins[e];
            if (s && (n || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
                for (o = 0; o < s.length; o++)
                    t.options[s[o][0]] && s[o][1].apply(t.element, i)
        }
    },
    /*!
 * jQuery UI Position 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */
    W = Math.max,
    C = Math.abs,
    o = /left|center|right/,
    s = /top|center|bottom/,
    r = /[\+\-]\d+(\.[\d]+)?%?/,
    l = /^\w+/,
    a = /%$/,
    h = x.fn.position,
    x.position = {
        scrollbarWidth: function() {
            var t, e, i;
            return void 0 !== n ? n : (i = (e = x("<div style='display:block;position:absolute;width:200px;height:200px;overflow:hidden;'><div style='height:300px;width:auto;'></div></div>")).children()[0],
            x("body").append(e),
            t = i.offsetWidth,
            e.css("overflow", "scroll"),
            t === (i = i.offsetWidth) && (i = e[0].clientWidth),
            e.remove(),
            n = t - i)
        },
        getScrollInfo: function(t) {
            var e = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x")
              , i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y")
              , e = "scroll" === e || "auto" === e && t.width < t.element[0].scrollWidth;
            return {
                width: "scroll" === i || "auto" === i && t.height < t.element[0].scrollHeight ? x.position.scrollbarWidth() : 0,
                height: e ? x.position.scrollbarWidth() : 0
            }
        },
        getWithinInfo: function(t) {
            var e = x(t || window)
              , i = N(e[0])
              , n = !!e[0] && 9 === e[0].nodeType;
            return {
                element: e,
                isWindow: i,
                isDocument: n,
                offset: !i && !n ? x(t).offset() : {
                    left: 0,
                    top: 0
                },
                scrollLeft: e.scrollLeft(),
                scrollTop: e.scrollTop(),
                width: e.outerWidth(),
                height: e.outerHeight()
            }
        }
    },
    x.fn.position = function(f) {
        var c, d, p, g, m, v, y, w, b, _, t, e;
        return f && f.of ? (v = "string" == typeof (f = x.extend({}, f)).of ? x(document).find(f.of) : x(f.of),
        y = x.position.getWithinInfo(f.within),
        w = x.position.getScrollInfo(y),
        b = (f.collision || "flip").split(" "),
        _ = {},
        e = 9 === (e = (t = v)[0]).nodeType ? {
            width: t.width(),
            height: t.height(),
            offset: {
                top: 0,
                left: 0
            }
        } : N(e) ? {
            width: t.width(),
            height: t.height(),
            offset: {
                top: t.scrollTop(),
                left: t.scrollLeft()
            }
        } : e.preventDefault ? {
            width: 0,
            height: 0,
            offset: {
                top: e.pageY,
                left: e.pageX
            }
        } : {
            width: t.outerWidth(),
            height: t.outerHeight(),
            offset: t.offset()
        },
        v[0].preventDefault && (f.at = "left top"),
        d = e.width,
        p = e.height,
        m = x.extend({}, g = e.offset),
        x.each(["my", "at"], function() {
            var t, e, i = (f[this] || "").split(" ");
            (i = 1 === i.length ? o.test(i[0]) ? i.concat(["center"]) : s.test(i[0]) ? ["center"].concat(i) : ["center", "center"] : i)[0] = o.test(i[0]) ? i[0] : "center",
            i[1] = s.test(i[1]) ? i[1] : "center",
            t = r.exec(i[0]),
            e = r.exec(i[1]),
            _[this] = [t ? t[0] : 0, e ? e[0] : 0],
            f[this] = [l.exec(i[0])[0], l.exec(i[1])[0]]
        }),
        1 === b.length && (b[1] = b[0]),
        "right" === f.at[0] ? m.left += d : "center" === f.at[0] && (m.left += d / 2),
        "bottom" === f.at[1] ? m.top += p : "center" === f.at[1] && (m.top += p / 2),
        c = E(_.at, d, p),
        m.left += c[0],
        m.top += c[1],
        this.each(function() {
            var i, t, r = x(this), l = r.outerWidth(), a = r.outerHeight(), e = L(this, "marginLeft"), n = L(this, "marginTop"), o = l + e + L(this, "marginRight") + w.width, s = a + n + L(this, "marginBottom") + w.height, h = x.extend({}, m), u = E(_.my, r.outerWidth(), r.outerHeight());
            "right" === f.my[0] ? h.left -= l : "center" === f.my[0] && (h.left -= l / 2),
            "bottom" === f.my[1] ? h.top -= a : "center" === f.my[1] && (h.top -= a / 2),
            h.left += u[0],
            h.top += u[1],
            i = {
                marginLeft: e,
                marginTop: n
            },
            x.each(["left", "top"], function(t, e) {
                x.ui.position[b[t]] && x.ui.position[b[t]][e](h, {
                    targetWidth: d,
                    targetHeight: p,
                    elemWidth: l,
                    elemHeight: a,
                    collisionPosition: i,
                    collisionWidth: o,
                    collisionHeight: s,
                    offset: [c[0] + u[0], c[1] + u[1]],
                    my: f.my,
                    at: f.at,
                    within: y,
                    elem: r
                })
            }),
            f.using && (t = function(t) {
                var e = g.left - h.left
                  , i = e + d - l
                  , n = g.top - h.top
                  , o = n + p - a
                  , s = {
                    target: {
                        element: v,
                        left: g.left,
                        top: g.top,
                        width: d,
                        height: p
                    },
                    element: {
                        element: r,
                        left: h.left,
                        top: h.top,
                        width: l,
                        height: a
                    },
                    horizontal: i < 0 ? "left" : 0 < e ? "right" : "center",
                    vertical: o < 0 ? "top" : 0 < n ? "bottom" : "middle"
                };
                d < l && C(e + i) < d && (s.horizontal = "center"),
                p < a && C(n + o) < p && (s.vertical = "middle"),
                W(C(e), C(i)) > W(C(n), C(o)) ? s.important = "horizontal" : s.important = "vertical",
                f.using.call(this, t, s)
            }
            ),
            r.offset(x.extend(h, {
                using: t
            }))
        })) : h.apply(this, arguments)
    }
    ,
    x.ui.position = {
        fit: {
            left: function(t, e) {
                var i, n = e.within, o = n.isWindow ? n.scrollLeft : n.offset.left, n = n.width, s = t.left - e.collisionPosition.marginLeft, r = o - s, l = s + e.collisionWidth - n - o;
                e.collisionWidth > n ? 0 < r && l <= 0 ? (i = t.left + r + e.collisionWidth - n - o,
                t.left += r - i) : t.left = !(0 < l && r <= 0) && l < r ? o + n - e.collisionWidth : o : 0 < r ? t.left += r : 0 < l ? t.left -= l : t.left = W(t.left - s, t.left)
            },
            top: function(t, e) {
                var i, n = e.within, n = n.isWindow ? n.scrollTop : n.offset.top, o = e.within.height, s = t.top - e.collisionPosition.marginTop, r = n - s, l = s + e.collisionHeight - o - n;
                e.collisionHeight > o ? 0 < r && l <= 0 ? (i = t.top + r + e.collisionHeight - o - n,
                t.top += r - i) : t.top = !(0 < l && r <= 0) && l < r ? n + o - e.collisionHeight : n : 0 < r ? t.top += r : 0 < l ? t.top -= l : t.top = W(t.top - s, t.top)
            }
        },
        flip: {
            left: function(t, e) {
                var i = e.within
                  , n = i.offset.left + i.scrollLeft
                  , o = i.width
                  , i = i.isWindow ? i.scrollLeft : i.offset.left
                  , s = t.left - e.collisionPosition.marginLeft
                  , r = s - i
                  , s = s + e.collisionWidth - o - i
                  , l = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0
                  , a = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0
                  , h = -2 * e.offset[0];
                r < 0 ? ((o = t.left + l + a + h + e.collisionWidth - o - n) < 0 || o < C(r)) && (t.left += l + a + h) : 0 < s && (0 < (n = t.left - e.collisionPosition.marginLeft + l + a + h - i) || C(n) < s) && (t.left += l + a + h)
            },
            top: function(t, e) {
                var i = e.within
                  , n = i.offset.top + i.scrollTop
                  , o = i.height
                  , i = i.isWindow ? i.scrollTop : i.offset.top
                  , s = t.top - e.collisionPosition.marginTop
                  , r = s - i
                  , s = s + e.collisionHeight - o - i
                  , l = "top" === e.my[1] ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0
                  , a = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0
                  , h = -2 * e.offset[1];
                r < 0 ? ((o = t.top + l + a + h + e.collisionHeight - o - n) < 0 || o < C(r)) && (t.top += l + a + h) : 0 < s && (0 < (n = t.top - e.collisionPosition.marginTop + l + a + h - i) || C(n) < s) && (t.top += l + a + h)
            }
        },
        flipfit: {
            left: function() {
                x.ui.position.flip.left.apply(this, arguments),
                x.ui.position.fit.left.apply(this, arguments)
            },
            top: function() {
                x.ui.position.flip.top.apply(this, arguments),
                x.ui.position.fit.top.apply(this, arguments)
            }
        }
    },
    x.ui.safeActiveElement = function(e) {
        var i;
        try {
            i = e.activeElement
        } catch (t) {
            i = e.body
        }
        return i = (i = i || e.body).nodeName ? i : e.body
    }
    ,
    x.ui.safeBlur = function(t) {
        t && "body" !== t.nodeName.toLowerCase() && x(t).trigger("blur")
    }
    ,
    /*!
 * jQuery UI Scroll Parent 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    x.fn.scrollParent = function(t) {
        var e = this.css("position")
          , i = "absolute" === e
          , n = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/
          , t = this.parents().filter(function() {
            var t = x(this);
            return (!i || "static" !== t.css("position")) && n.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
        }).eq(0);
        return "fixed" !== e && t.length ? t : x(this[0].ownerDocument || document)
    }
    ,
    /*!
 * jQuery UI Tabbable 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    x.extend(x.expr.pseudos, {
        tabbable: function(t) {
            var e = x.attr(t, "tabindex")
              , i = null != e;
            return (!i || 0 <= e) && x.ui.focusable(t, i)
        }
    }),
    /*!
 * jQuery UI Unique ID 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    x.fn.extend({
        uniqueId: (u = 0,
        function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++u)
            })
        }
        ),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && x(this).removeAttr("id")
            })
        }
    });
    /*!
 * jQuery UI Widget 1.13.2
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
    var f, c = 0, d = Array.prototype.hasOwnProperty, p = Array.prototype.slice;
    x.cleanData = (f = x.cleanData,
    function(t) {
        for (var e, i, n = 0; null != (i = t[n]); n++)
            (e = x._data(i, "events")) && e.remove && x(i).triggerHandler("remove");
        f(t)
    }
    ),
    x.widget = function(t, i, e) {
        var n, o, s, r = {}, l = t.split(".")[0], a = l + "-" + (t = t.split(".")[1]);
        return e || (e = i,
        i = x.Widget),
        Array.isArray(e) && (e = x.extend.apply(null, [{}].concat(e))),
        x.expr.pseudos[a.toLowerCase()] = function(t) {
            return !!x.data(t, a)
        }
        ,
        x[l] = x[l] || {},
        n = x[l][t],
        o = x[l][t] = function(t, e) {
            if (!this || !this._createWidget)
                return new o(t,e);
            arguments.length && this._createWidget(t, e)
        }
        ,
        x.extend(o, n, {
            version: e.version,
            _proto: x.extend({}, e),
            _childConstructors: []
        }),
        (s = new i).options = x.widget.extend({}, s.options),
        x.each(e, function(e, n) {
            function o() {
                return i.prototype[e].apply(this, arguments)
            }
            function s(t) {
                return i.prototype[e].apply(this, t)
            }
            r[e] = "function" != typeof n ? n : function() {
                var t, e = this._super, i = this._superApply;
                return this._super = o,
                this._superApply = s,
                t = n.apply(this, arguments),
                this._super = e,
                this._superApply = i,
                t
            }
        }),
        o.prototype = x.widget.extend(s, {
            widgetEventPrefix: n && s.widgetEventPrefix || t
        }, r, {
            constructor: o,
            namespace: l,
            widgetName: t,
            widgetFullName: a
        }),
        n ? (x.each(n._childConstructors, function(t, e) {
            var i = e.prototype;
            x.widget(i.namespace + "." + i.widgetName, o, e._proto)
        }),
        delete n._childConstructors) : i._childConstructors.push(o),
        x.widget.bridge(t, o),
        o
    }
    ,
    x.widget.extend = function(t) {
        for (var e, i, n = p.call(arguments, 1), o = 0, s = n.length; o < s; o++)
            for (e in n[o])
                i = n[o][e],
                d.call(n[o], e) && void 0 !== i && (x.isPlainObject(i) ? t[e] = x.isPlainObject(t[e]) ? x.widget.extend({}, t[e], i) : x.widget.extend({}, i) : t[e] = i);
        return t
    }
    ,
    x.widget.bridge = function(s, e) {
        var r = e.prototype.widgetFullName || s;
        x.fn[s] = function(i) {
            var t = "string" == typeof i
              , n = p.call(arguments, 1)
              , o = this;
            return t ? this.length || "instance" !== i ? this.each(function() {
                var t, e = x.data(this, r);
                return "instance" === i ? (o = e,
                !1) : e ? "function" != typeof e[i] || "_" === i.charAt(0) ? x.error("no such method '" + i + "' for " + s + " widget instance") : (t = e[i].apply(e, n)) !== e && void 0 !== t ? (o = t && t.jquery ? o.pushStack(t.get()) : t,
                !1) : void 0 : x.error("cannot call methods on " + s + " prior to initialization; attempted to call method '" + i + "'")
            }) : o = void 0 : (n.length && (i = x.widget.extend.apply(null, [i].concat(n))),
            this.each(function() {
                var t = x.data(this, r);
                t ? (t.option(i || {}),
                t._init && t._init()) : x.data(this, r, new e(i,this))
            })),
            o
        }
    }
    ,
    x.Widget = function() {}
    ,
    x.Widget._childConstructors = [],
    x.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            classes: {},
            disabled: !1,
            create: null
        },
        _createWidget: function(t, e) {
            e = x(e || this.defaultElement || this)[0],
            this.element = x(e),
            this.uuid = c++,
            this.eventNamespace = "." + this.widgetName + this.uuid,
            this.bindings = x(),
            this.hoverable = x(),
            this.focusable = x(),
            this.classesElementLookup = {},
            e !== this && (x.data(e, this.widgetFullName, this),
            this._on(!0, this.element, {
                remove: function(t) {
                    t.target === e && this.destroy()
                }
            }),
            this.document = x(e.style ? e.ownerDocument : e.document || e),
            this.window = x(this.document[0].defaultView || this.document[0].parentWindow)),
            this.options = x.widget.extend({}, this.options, this._getCreateOptions(), t),
            this._create(),
            this.options.disabled && this._setOptionDisabled(this.options.disabled),
            this._trigger("create", null, this._getCreateEventData()),
            this._init()
        },
        _getCreateOptions: function() {
            return {}
        },
        _getCreateEventData: x.noop,
        _create: x.noop,
        _init: x.noop,
        destroy: function() {
            var i = this;
            this._destroy(),
            x.each(this.classesElementLookup, function(t, e) {
                i._removeClass(e, t)
            }),
            this.element.off(this.eventNamespace).removeData(this.widgetFullName),
            this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),
            this.bindings.off(this.eventNamespace)
        },
        _destroy: x.noop,
        widget: function() {
            return this.element
        },
        option: function(t, e) {
            var i, n, o, s = t;
            if (0 === arguments.length)
                return x.widget.extend({}, this.options);
            if ("string" == typeof t)
                if (s = {},
                t = (i = t.split(".")).shift(),
                i.length) {
                    for (n = s[t] = x.widget.extend({}, this.options[t]),
                    o = 0; o < i.length - 1; o++)
                        n[i[o]] = n[i[o]] || {},
                        n = n[i[o]];
                    if (t = i.pop(),
                    1 === arguments.length)
                        return void 0 === n[t] ? null : n[t];
                    n[t] = e
                } else {
                    if (1 === arguments.length)
                        return void 0 === this.options[t] ? null : this.options[t];
                    s[t] = e
                }
            return this._setOptions(s),
            this
        },
        _setOptions: function(t) {
            for (var e in t)
                this._setOption(e, t[e]);
            return this
        },
        _setOption: function(t, e) {
            return "classes" === t && this._setOptionClasses(e),
            this.options[t] = e,
            "disabled" === t && this._setOptionDisabled(e),
            this
        },
        _setOptionClasses: function(t) {
            var e, i, n;
            for (e in t)
                n = this.classesElementLookup[e],
                t[e] !== this.options.classes[e] && n && n.length && (i = x(n.get()),
                this._removeClass(n, e),
                i.addClass(this._classes({
                    element: i,
                    keys: e,
                    classes: t,
                    add: !0
                })))
        },
        _setOptionDisabled: function(t) {
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t),
            t && (this._removeClass(this.hoverable, null, "ui-state-hover"),
            this._removeClass(this.focusable, null, "ui-state-focus"))
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _classes: function(o) {
            var s = []
              , r = this;
            function t(t, e) {
                for (var i, n = 0; n < t.length; n++)
                    i = r.classesElementLookup[t[n]] || x(),
                    i = o.add ? (function() {
                        var i = [];
                        o.element.each(function(t, e) {
                            x.map(r.classesElementLookup, function(t) {
                                return t
                            }).some(function(t) {
                                return t.is(e)
                            }) || i.push(e)
                        }),
                        r._on(x(i), {
                            remove: "_untrackClassesElement"
                        })
                    }(),
                    x(x.uniqueSort(i.get().concat(o.element.get())))) : x(i.not(o.element).get()),
                    r.classesElementLookup[t[n]] = i,
                    s.push(t[n]),
                    e && o.classes[t[n]] && s.push(o.classes[t[n]])
            }
            return (o = x.extend({
                element: this.element,
                classes: this.options.classes || {}
            }, o)).keys && t(o.keys.match(/\S+/g) || [], !0),
            o.extra && t(o.extra.match(/\S+/g) || []),
            s.join(" ")
        },
        _untrackClassesElement: function(i) {
            var n = this;
            x.each(n.classesElementLookup, function(t, e) {
                -1 !== x.inArray(i.target, e) && (n.classesElementLookup[t] = x(e.not(i.target).get()))
            }),
            this._off(x(i.target))
        },
        _removeClass: function(t, e, i) {
            return this._toggleClass(t, e, i, !1)
        },
        _addClass: function(t, e, i) {
            return this._toggleClass(t, e, i, !0)
        },
        _toggleClass: function(t, e, i, n) {
            var o = "string" == typeof t || null === t
              , e = {
                extra: o ? e : i,
                keys: o ? t : e,
                element: o ? this.element : t,
                add: n = "boolean" == typeof n ? n : i
            };
            return e.element.toggleClass(this._classes(e), n),
            this
        },
        _on: function(o, s, t) {
            var r, l = this;
            "boolean" != typeof o && (t = s,
            s = o,
            o = !1),
            t ? (s = r = x(s),
            this.bindings = this.bindings.add(s)) : (t = s,
            s = this.element,
            r = this.widget()),
            x.each(t, function(t, e) {
                function i() {
                    if (o || !0 !== l.options.disabled && !x(this).hasClass("ui-state-disabled"))
                        return ("string" == typeof e ? l[e] : e).apply(l, arguments)
                }
                "string" != typeof e && (i.guid = e.guid = e.guid || i.guid || x.guid++);
                var t = t.match(/^([\w:-]*)\s*(.*)$/)
                  , n = t[1] + l.eventNamespace
                  , t = t[2];
                t ? r.on(n, t, i) : s.on(n, i)
            })
        },
        _off: function(t, e) {
            e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace,
            t.off(e),
            this.bindings = x(this.bindings.not(t).get()),
            this.focusable = x(this.focusable.not(t).get()),
            this.hoverable = x(this.hoverable.not(t).get())
        },
        _delay: function(t, e) {
            var i = this;
            return setTimeout(function() {
                return ("string" == typeof t ? i[t] : t).apply(i, arguments)
            }, e || 0)
        },
        _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t),
            this._on(t, {
                mouseenter: function(t) {
                    this._addClass(x(t.currentTarget), null, "ui-state-hover")
                },
                mouseleave: function(t) {
                    this._removeClass(x(t.currentTarget), null, "ui-state-hover")
                }
            })
        },
        _focusable: function(t) {
            this.focusable = this.focusable.add(t),
            this._on(t, {
                focusin: function(t) {
                    this._addClass(x(t.currentTarget), null, "ui-state-focus")
                },
                focusout: function(t) {
                    this._removeClass(x(t.currentTarget), null, "ui-state-focus")
                }
            })
        },
        _trigger: function(t, e, i) {
            var n, o, s = this.options[t];
            if (i = i || {},
            (e = x.Event(e)).type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(),
            e.target = this.element[0],
            o = e.originalEvent)
                for (n in o)
                    n in e || (e[n] = o[n]);
            return this.element.trigger(e, i),
            !("function" == typeof s && !1 === s.apply(this.element[0], [e].concat(i)) || e.isDefaultPrevented())
        }
    },
    x.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(s, r) {
        x.Widget.prototype["_" + s] = function(e, t, i) {
            var n, o = (t = "string" == typeof t ? {
                effect: t
            } : t) ? !0 !== t && "number" != typeof t && t.effect || r : s;
            "number" == typeof (t = t || {}) ? t = {
                duration: t
            } : !0 === t && (t = {}),
            n = !x.isEmptyObject(t),
            t.complete = i,
            t.delay && e.delay(t.delay),
            n && x.effects && x.effects.effect[o] ? e[s](t) : o !== s && e[o] ? e[o](t.duration, t.easing, i) : e.queue(function(t) {
                x(this)[s](),
                i && i.call(e[0]),
                t()
            })
        }
    })
});
/*! elementor - v3.18.0 - 08-12-2023 */
"use strict";
(self.webpackChunkelementor = self.webpackChunkelementor || []).push([[819], {
    9220: (e,t,n)=>{
        var o = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = o(n(8135));
        class _default extends elementorModules.ViewModule {
            constructor() {
                super(...arguments),
                this.documents = {},
                this.initDocumentClasses(),
                this.attachDocumentsClasses()
            }
            getDefaultSettings() {
                return {
                    selectors: {
                        document: ".elementor"
                    }
                }
            }
            getDefaultElements() {
                const e = this.getSettings("selectors");
                return {
                    $documents: jQuery(e.document)
                }
            }
            initDocumentClasses() {
                this.documentClasses = {
                    base: i.default
                },
                elementorFrontend.hooks.doAction("elementor/frontend/documents-manager/init-classes", this)
            }
            addDocumentClass(e, t) {
                this.documentClasses[e] = t
            }
            attachDocumentsClasses() {
                this.elements.$documents.each(((e,t)=>this.attachDocumentClass(jQuery(t))))
            }
            attachDocumentClass(e) {
                const t = e.data()
                  , n = t.elementorId
                  , o = t.elementorType
                  , i = this.documentClasses[o] || this.documentClasses.base;
                this.documents[n] = new i({
                    $element: e,
                    id: n
                })
            }
        }
        t.default = _default
    }
    ,
    9804: (e,t,n)=>{
        var o = n(3203)
          , i = o(n(6397))
          , s = o(n(8704))
          , r = o(n(4985))
          , a = o(n(7537))
          , l = o(n(355))
          , d = o(n(2804))
          , c = o(n(3384));
        e.exports = function(e) {
            var t = this;
            const o = {};
            this.elementsHandlers = {
                "accordion.default": ()=>n.e(209).then(n.bind(n, 8470)),
                "alert.default": ()=>n.e(745).then(n.bind(n, 9269)),
                "counter.default": ()=>n.e(120).then(n.bind(n, 7884)),
                "progress.default": ()=>n.e(192).then(n.bind(n, 1351)),
                "tabs.default": ()=>n.e(520).then(n.bind(n, 9459)),
                "toggle.default": ()=>n.e(181).then(n.bind(n, 2)),
                "video.default": ()=>n.e(791).then(n.bind(n, 5363)),
                "image-carousel.default": ()=>n.e(268).then(n.bind(n, 5914)),
                "text-editor.default": ()=>n.e(357).then(n.bind(n, 1327)),
                "wp-widget-media_audio.default": ()=>n.e(52).then(n.bind(n, 7602))
            },
            elementorFrontendConfig.experimentalFeatures["nested-elements"] && (this.elementsHandlers["nested-tabs.default"] = ()=>Promise.resolve().then(n.bind(n, 7323))),
            elementorFrontendConfig.experimentalFeatures["nested-elements"] && (this.elementsHandlers["nested-accordion.default"] = ()=>Promise.resolve().then(n.bind(n, 32)));
            const addElementsHandlers = ()=>{
                this.elementsHandlers.section = [d.default, ...s.default, l.default, c.default],
                this.elementsHandlers.container = [...s.default],
                elementorFrontend.isEditMode() && this.elementsHandlers.container.push(...r.default),
                this.elementsHandlers.column = a.default,
                e.each(this.elementsHandlers, ((e,t)=>{
                    const n = e.split(".");
                    e = n[0];
                    const o = n[1] || null;
                    this.attachHandler(e, t, o)
                }
                ))
            }
              , isClassHandler = e=>e.prototype?.getUniqueHandlerID;
            this.addHandler = function(t, n) {
                const i = n.$element.data("model-cid");
                let s;
                if (i) {
                    s = t.prototype.getConstructorID(),
                    o[i] || (o[i] = {});
                    const e = o[i][s];
                    e && e.onDestroy()
                }
                const r = new t(n);
                elementorFrontend.hooks.doAction(`frontend/element_handler_ready/${n.elementName}`, n.$element, e),
                i && (o[i][s] = r)
            }
            ,
            this.attachHandler = (e,n,o)=>{
                Array.isArray(n) || (n = [n]),
                n.forEach((n=>function(e, n) {
                    let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "default";
                    o = o ? "." + o : "";
                    const i = e + o;
                    elementorFrontend.hooks.addAction(`frontend/element_ready/${i}`, (e=>{
                        if (isClassHandler(n))
                            t.addHandler(n, {
                                $element: e,
                                elementName: i
                            }, !0);
                        else {
                            const o = n();
                            if (!o)
                                return;
                            o instanceof Promise ? o.then((n=>{
                                let {default: o} = n;
                                t.addHandler(o, {
                                    $element: e,
                                    elementName: i
                                }, !0)
                            }
                            )) : t.addHandler(o, {
                                $element: e,
                                elementName: i
                            }, !0)
                        }
                    }
                    ))
                }(e, n, o)))
            }
            ,
            this.getHandler = function(e) {
                const t = this.elementsHandlers[e];
                return isClassHandler(t) ? t : new Promise((e=>{
                    t().then((t=>{
                        let {default: n} = t;
                        e(n)
                    }
                    ))
                }
                ))
            }
            ,
            this.getHandlers = function(e) {
                return elementorDevTools.deprecation.deprecated("getHandlers", "3.1.0", "elementorFrontend.elementsHandler.getHandler"),
                e ? this.getHandler(e) : this.elementsHandlers
            }
            ,
            this.runReadyTrigger = function(t) {
                if (elementorFrontend.config.is_static)
                    return;
                const n = jQuery(t)
                  , o = n.attr("data-element_type");
                if (o && (elementorFrontend.hooks.doAction("frontend/element_ready/global", n, e),
                elementorFrontend.hooks.doAction(`frontend/element_ready/${o}`, n, e),
                "widget" === o)) {
                    const t = n.attr("data-widget_type");
                    elementorFrontend.hooks.doAction(`frontend/element_ready/${t}`, n, e)
                }
            }
            ,
            this.init = ()=>{
                elementorFrontend.hooks.addAction("frontend/element_ready/global", i.default),
                addElementsHandlers()
            }
        }
    }
    ,
    5654: (e,t,n)=>{
        var o = n(3203);
        n(59);
        var i = o(n(9220))
          , s = o(n(5107))
          , r = o(n(3308))
          , a = o(n(1604))
          , l = o(n(1911))
          , d = o(n(4773))
          , c = o(n(2064))
          , u = o(n(8628))
          , h = o(n(8646))
          , m = o(n(6866))
          , g = o(n(4375))
          , p = o(n(6404))
          , f = o(n(6046))
          , v = o(n(1322))
          , b = n(6028);
        const _ = n(9469)
          , y = n(9804)
          , w = n(3346);
        class Frontend extends elementorModules.ViewModule {
            constructor() {
                super(...arguments),
                this.config = elementorFrontendConfig,
                this.config.legacyMode = {
                    get elementWrappers() {
                        return elementorFrontend.isEditMode() && window.top.elementorDevTools.deprecation.deprecated("elementorFrontend.config.legacyMode.elementWrappers", "3.1.0", "elementorFrontend.config.experimentalFeatures.e_dom_optimization"),
                        !elementorFrontend.config.experimentalFeatures.e_dom_optimization
                    }
                },
                this.populateActiveBreakpointsConfig()
            }
            get Module() {
                return this.isEditMode() && parent.elementorDevTools.deprecation.deprecated("elementorFrontend.Module", "2.5.0", "elementorModules.frontend.handlers.Base"),
                elementorModules.frontend.handlers.Base
            }
            getDefaultSettings() {
                return {
                    selectors: {
                        elementor: ".elementor",
                        adminBar: "#wpadminbar"
                    }
                }
            }
            getDefaultElements() {
                const e = {
                    window,
                    $window: jQuery(window),
                    $document: jQuery(document),
                    $head: jQuery(document.head),
                    $body: jQuery(document.body),
                    $deviceMode: jQuery("<span>", {
                        id: "elementor-device-mode",
                        class: "elementor-screen-only"
                    })
                };
                return e.$body.append(e.$deviceMode),
                e
            }
            bindEvents() {
                this.elements.$window.on("resize", (()=>this.setDeviceModeData()))
            }
            getElements(e) {
                return this.getItems(this.elements, e)
            }
            getPageSettings(e) {
                const t = this.isEditMode() ? elementor.settings.page.model.attributes : this.config.settings.page;
                return this.getItems(t, e)
            }
            getGeneralSettings(e) {
                return this.isEditMode() && parent.elementorDevTools.deprecation.deprecated("getGeneralSettings()", "3.0.0", "getKitSettings() and remove the `elementor_` prefix"),
                this.getKitSettings(`elementor_${e}`)
            }
            getKitSettings(e) {
                return this.getItems(this.config.kit, e)
            }
            getCurrentDeviceMode() {
                return getComputedStyle(this.elements.$deviceMode[0], ":after").content.replace(/"/g, "")
            }
            getDeviceSetting(e, t, n) {
                if ("widescreen" === e)
                    return this.getWidescreenSetting(t, n);
                const o = elementorFrontend.breakpoints.getActiveBreakpointsList({
                    largeToSmall: !0,
                    withDesktop: !0
                });
                let i = o.indexOf(e);
                for (; i > 0; ) {
                    const e = t[n + "_" + o[i]];
                    if (e || 0 === e)
                        return e;
                    i--
                }
                return t[n]
            }
            getWidescreenSetting(e, t) {
                const n = t + "_widescreen";
                let o;
                return o = e[n] ? e[n] : e[t],
                o
            }
            getCurrentDeviceSetting(e, t) {
                return this.getDeviceSetting(elementorFrontend.getCurrentDeviceMode(), e, t)
            }
            isEditMode() {
                return this.config.environmentMode.edit
            }
            isWPPreviewMode() {
                return this.config.environmentMode.wpPreview
            }
            initDialogsManager() {
                let e;
                this.getDialogsManager = ()=>(e || (e = new DialogsManager.Instance),
                e)
            }
            initOnReadyComponents() {
                this.utils = {
                    youtube: new a.default,
                    vimeo: new l.default,
                    baseVideoLoader: new d.default,
                    anchors: new w,
                    get lightbox() {
                        return h.default.getLightbox()
                    },
                    urlActions: new c.default,
                    swiper: u.default,
                    environment: r.default,
                    assetsLoader: new m.default,
                    escapeHTML: b.escapeHTML,
                    events: p.default,
                    controls: new v.default
                },
                this.modules = {
                    StretchElement: elementorModules.frontend.tools.StretchElement,
                    Masonry: elementorModules.utils.Masonry
                },
                this.elementsHandler.init(),
                this.isEditMode() ? elementor.once("document:loaded", (()=>this.onDocumentLoaded())) : this.onDocumentLoaded()
            }
            initOnReadyElements() {
                this.elements.$wpAdminBar = this.elements.$document.find(this.getSettings("selectors.adminBar"))
            }
            addUserAgentClasses() {
                for (const [e,t] of Object.entries(r.default))
                    t && this.elements.$body.addClass("e--ua-" + e)
            }
            setDeviceModeData() {
                this.elements.$body.attr("data-elementor-device-mode", this.getCurrentDeviceMode())
            }
            addListenerOnce(e, t, n, o) {
                if (o || (o = this.elements.$window),
                this.isEditMode())
                    if (this.removeListeners(e, t, o),
                    o instanceof jQuery) {
                        const i = t + "." + e;
                        o.on(i, n)
                    } else
                        o.on(t, n, e);
                else
                    o.on(t, n)
            }
            removeListeners(e, t, n, o) {
                if (o || (o = this.elements.$window),
                o instanceof jQuery) {
                    const i = t + "." + e;
                    o.off(i, n)
                } else
                    o.off(t, n, e)
            }
            debounce(e, t) {
                let n;
                return function() {
                    const o = this
                      , i = arguments
                      , s = !n;
                    clearTimeout(n),
                    n = setTimeout((()=>{
                        n = null,
                        e.apply(o, i)
                    }
                    ), t),
                    s && e.apply(o, i)
                }
            }
            waypoint(e, t, n) {
                n = jQuery.extend({
                    offset: "100%",
                    triggerOnce: !0
                }, n);
                return e.elementorWaypoint((function() {
                    const e = this.element || this
                      , o = t.apply(e, arguments);
                    return n.triggerOnce && this.destroy && this.destroy(),
                    o
                }
                ), n)
            }
            muteMigrationTraces() {
                jQuery.migrateMute = !0,
                jQuery.migrateTrace = !1
            }
            initModules() {
                const e = {
                    shapes: f.default
                };
                elementorFrontend.trigger("elementor/modules/init:before"),
                elementorFrontend.trigger("elementor/modules/init/before"),
                Object.entries(e).forEach((e=>{
                    let[t,n] = e;
                    this.modulesHandlers[t] = new n
                }
                ))
            }
            populateActiveBreakpointsConfig() {
                this.config.responsive.activeBreakpoints = {},
                Object.entries(this.config.responsive.breakpoints).forEach((e=>{
                    let[t,n] = e;
                    n.is_enabled && (this.config.responsive.activeBreakpoints[t] = n)
                }
                ))
            }
            init() {
                this.hooks = new _,
                this.breakpoints = new g.default(this.config.responsive),
                this.storage = new s.default,
                this.elementsHandler = new y(jQuery),
                this.modulesHandlers = {},
                this.addUserAgentClasses(),
                this.setDeviceModeData(),
                this.initDialogsManager(),
                this.isEditMode() && this.muteMigrationTraces(),
                p.default.dispatch(this.elements.$window, "elementor/frontend/init"),
                this.initModules(),
                this.initOnReadyElements(),
                this.initOnReadyComponents()
            }
            onDocumentLoaded() {
                this.documentsManager = new i.default,
                this.trigger("components:init"),
                new h.default
            }
        }
        window.elementorFrontend = new Frontend,
        elementorFrontend.isEditMode() || jQuery((()=>elementorFrontend.init()))
    }
    ,
    4058: (e,t)=>{
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class BackgroundSlideshow extends elementorModules.frontend.handlers.SwiperBase {
            getDefaultSettings() {
                return {
                    classes: {
                        swiperContainer: `elementor-background-slideshow ${elementorFrontend.config.swiperClass}`,
                        swiperWrapper: "swiper-wrapper",
                        swiperSlide: "elementor-background-slideshow__slide swiper-slide",
                        swiperPreloader: "swiper-lazy-preloader",
                        slideBackground: "elementor-background-slideshow__slide__image",
                        kenBurns: "elementor-ken-burns",
                        kenBurnsActive: "elementor-ken-burns--active",
                        kenBurnsIn: "elementor-ken-burns--in",
                        kenBurnsOut: "elementor-ken-burns--out"
                    }
                }
            }
            getSwiperOptions() {
                const e = this.getElementSettings()
                  , t = {
                    grabCursor: !1,
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    loop: "yes" === e.background_slideshow_loop,
                    speed: e.background_slideshow_transition_duration,
                    autoplay: {
                        delay: e.background_slideshow_slide_duration,
                        stopOnLastSlide: !e.background_slideshow_loop
                    },
                    handleElementorBreakpoints: !0,
                    on: {
                        slideChange: ()=>{
                            e.background_slideshow_ken_burns && this.handleKenBurns()
                        }
                    }
                };
                switch ("yes" === e.background_slideshow_loop && (t.loopedSlides = this.getSlidesCount()),
                e.background_slideshow_slide_transition) {
                case "fade":
                    t.effect = "fade",
                    t.fadeEffect = {
                        crossFade: !0
                    };
                    break;
                case "slide_down":
                    t.autoplay.reverseDirection = !0,
                    t.direction = "vertical";
                    break;
                case "slide_up":
                    t.direction = "vertical"
                }
                return "yes" === e.background_slideshow_lazyload && (t.lazy = {
                    loadPrevNext: !0,
                    loadPrevNextAmount: 1
                }),
                t
            }
            buildSwiperElements() {
                const e = this.getSettings("classes")
                  , t = this.getElementSettings()
                  , n = "slide_left" === t.background_slideshow_slide_transition ? "ltr" : "rtl"
                  , o = jQuery("<div>", {
                    class: e.swiperContainer,
                    dir: n
                })
                  , i = jQuery("<div>", {
                    class: e.swiperWrapper
                })
                  , s = t.background_slideshow_ken_burns
                  , r = "yes" === t.background_slideshow_lazyload;
                let a = e.slideBackground;
                if (s) {
                    a += " " + e.kenBurns;
                    const n = "in" === t.background_slideshow_ken_burns_zoom_direction ? "kenBurnsIn" : "kenBurnsOut";
                    a += " " + e[n]
                }
                r && (a += " swiper-lazy"),
                this.elements.$slides = jQuery(),
                t.background_slideshow_gallery.forEach((t=>{
                    const n = jQuery("<div>", {
                        class: e.swiperSlide
                    });
                    let o;
                    if (r) {
                        const n = jQuery("<div>", {
                            class: e.swiperPreloader
                        });
                        o = jQuery("<div>", {
                            class: a,
                            "data-background": t.url
                        }),
                        o.append(n)
                    } else
                        o = jQuery("<div>", {
                            class: a,
                            style: 'background-image: url("' + t.url + '");'
                        });
                    n.append(o),
                    i.append(n),
                    this.elements.$slides = this.elements.$slides.add(n)
                }
                )),
                o.append(i),
                this.$element.prepend(o),
                this.elements.$backgroundSlideShowContainer = o
            }
            async initSlider() {
                if (1 >= this.getSlidesCount())
                    return;
                const e = this.getElementSettings()
                  , t = elementorFrontend.utils.swiper;
                this.swiper = await new t(this.elements.$backgroundSlideShowContainer,this.getSwiperOptions()),
                this.elements.$backgroundSlideShowContainer.data("swiper", this.swiper),
                e.background_slideshow_ken_burns && this.handleKenBurns()
            }
            activate() {
                this.buildSwiperElements(),
                this.initSlider()
            }
            deactivate() {
                this.swiper && (this.swiper.destroy(),
                this.elements.$backgroundSlideShowContainer.remove())
            }
            run() {
                "slideshow" === this.getElementSettings("background_background") ? this.activate() : this.deactivate()
            }
            onInit() {
                super.onInit(),
                this.getElementSettings("background_slideshow_gallery") && this.run()
            }
            onDestroy() {
                super.onDestroy(),
                this.deactivate()
            }
            onElementChange(e) {
                "background_background" === e && this.run()
            }
        }
        t.default = BackgroundSlideshow
    }
    ,
    9501: (e,t)=>{
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class BackgroundVideo extends elementorModules.frontend.handlers.Base {
            getDefaultSettings() {
                return {
                    selectors: {
                        backgroundVideoContainer: ".elementor-background-video-container",
                        backgroundVideoEmbed: ".elementor-background-video-embed",
                        backgroundVideoHosted: ".elementor-background-video-hosted"
                    }
                }
            }
            getDefaultElements() {
                const e = this.getSettings("selectors")
                  , t = {
                    $backgroundVideoContainer: this.$element.find(e.backgroundVideoContainer)
                };
                return t.$backgroundVideoEmbed = t.$backgroundVideoContainer.children(e.backgroundVideoEmbed),
                t.$backgroundVideoHosted = t.$backgroundVideoContainer.children(e.backgroundVideoHosted),
                t
            }
            calcVideosSize(e) {
                let t = "16:9";
                "vimeo" === this.videoType && (t = e[0].width + ":" + e[0].height);
                const n = this.elements.$backgroundVideoContainer.outerWidth()
                  , o = this.elements.$backgroundVideoContainer.outerHeight()
                  , i = t.split(":")
                  , s = i[0] / i[1]
                  , r = n / o > s;
                return {
                    width: r ? n : o * s,
                    height: r ? n / s : o
                }
            }
            changeVideoSize() {
                if ("hosted" !== this.videoType && !this.player)
                    return;
                let e;
                if ("youtube" === this.videoType ? e = jQuery(this.player.getIframe()) : "vimeo" === this.videoType ? e = jQuery(this.player.element) : "hosted" === this.videoType && (e = this.elements.$backgroundVideoHosted),
                !e)
                    return;
                const t = this.calcVideosSize(e);
                e.width(t.width).height(t.height)
            }
            startVideoLoop(e) {
                if (!this.player.getIframe().contentWindow)
                    return;
                const t = this.getElementSettings()
                  , n = t.background_video_start || 0
                  , o = t.background_video_end;
                if (!t.background_play_once || e) {
                    if (this.player.seekTo(n),
                    o) {
                        setTimeout((()=>{
                            this.startVideoLoop(!1)
                        }
                        ), 1e3 * (o - n + 1))
                    }
                } else
                    this.player.stopVideo()
            }
            prepareVimeoVideo(e, t) {
                const n = this.getElementSettings()
                  , o = {
                    url: t,
                    width: this.elements.$backgroundVideoContainer.outerWidth().width,
                    autoplay: !0,
                    loop: !n.background_play_once,
                    transparent: !0,
                    background: !0,
                    muted: !0
                };
                n.background_privacy_mode && (o.dnt = !0),
                this.player = new e.Player(this.elements.$backgroundVideoContainer,o),
                this.handleVimeoStartEndTimes(n),
                this.player.ready().then((()=>{
                    jQuery(this.player.element).addClass("elementor-background-video-embed"),
                    this.changeVideoSize()
                }
                ))
            }
            handleVimeoStartEndTimes(e) {
                e.background_video_start && this.player.on("play", (t=>{
                    0 === t.seconds && this.player.setCurrentTime(e.background_video_start)
                }
                )),
                this.player.on("timeupdate", (t=>{
                    e.background_video_end && e.background_video_end < t.seconds && (e.background_play_once ? this.player.pause() : this.player.setCurrentTime(e.background_video_start)),
                    this.player.getDuration().then((n=>{
                        e.background_video_start && !e.background_video_end && t.seconds > n - .5 && this.player.setCurrentTime(e.background_video_start)
                    }
                    ))
                }
                ))
            }
            prepareYTVideo(e, t) {
                const n = this.elements.$backgroundVideoContainer
                  , o = this.getElementSettings();
                let i = e.PlayerState.PLAYING;
                window.chrome && (i = e.PlayerState.UNSTARTED);
                const s = {
                    videoId: t,
                    events: {
                        onReady: ()=>{
                            this.player.mute(),
                            this.changeVideoSize(),
                            this.startVideoLoop(!0),
                            this.player.playVideo()
                        }
                        ,
                        onStateChange: t=>{
                            switch (t.data) {
                            case i:
                                n.removeClass("elementor-invisible elementor-loading");
                                break;
                            case e.PlayerState.ENDED:
                                "function" == typeof this.player.seekTo && this.player.seekTo(o.background_video_start || 0),
                                o.background_play_once && this.player.destroy()
                            }
                        }
                    },
                    playerVars: {
                        controls: 0,
                        rel: 0,
                        playsinline: 1
                    }
                };
                o.background_privacy_mode && (s.host = "https://www.youtube-nocookie.com",
                s.origin = window.location.hostname),
                n.addClass("elementor-loading elementor-invisible"),
                this.player = new e.Player(this.elements.$backgroundVideoEmbed[0],s)
            }
            activate() {
                let e, t = this.getElementSettings("background_video_link");
                const n = this.getElementSettings("background_play_once");
                if (-1 !== t.indexOf("vimeo.com") ? (this.videoType = "vimeo",
                this.apiProvider = elementorFrontend.utils.vimeo) : t.match(/^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com)/) && (this.videoType = "youtube",
                this.apiProvider = elementorFrontend.utils.youtube),
                this.apiProvider)
                    e = this.apiProvider.getVideoIDFromURL(t),
                    this.apiProvider.onApiReady((n=>{
                        "youtube" === this.videoType && this.prepareYTVideo(n, e),
                        "vimeo" === this.videoType && this.prepareVimeoVideo(n, t)
                    }
                    ));
                else {
                    this.videoType = "hosted";
                    const e = this.getElementSettings("background_video_start")
                      , o = this.getElementSettings("background_video_end");
                    (e || o) && (t += "#t=" + (e || 0) + (o ? "," + o : "")),
                    this.elements.$backgroundVideoHosted.attr("src", t).one("canplay", this.changeVideoSize.bind(this)),
                    n && this.elements.$backgroundVideoHosted.on("ended", (()=>{
                        this.elements.$backgroundVideoHosted.hide()
                    }
                    ))
                }
                elementorFrontend.elements.$window.on("resize elementor/bg-video/recalc", this.changeVideoSize)
            }
            deactivate() {
                "youtube" === this.videoType && this.player.getIframe() || "vimeo" === this.videoType ? this.player.destroy() : this.elements.$backgroundVideoHosted.removeAttr("src").off("ended"),
                elementorFrontend.elements.$window.off("resize", this.changeVideoSize)
            }
            run() {
                const e = this.getElementSettings();
                (e.background_play_on_mobile || "mobile" !== elementorFrontend.getCurrentDeviceMode()) && ("video" === e.background_background && e.background_video_link ? this.activate() : this.deactivate())
            }
            onInit() {
                super.onInit(...arguments),
                this.changeVideoSize = this.changeVideoSize.bind(this),
                this.run()
            }
            onElementChange(e) {
                "background_background" === e && this.run()
            }
        }
        t.default = BackgroundVideo
    }
    ,
    8704: (e,t,n)=>{
        var o = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = o(n(4058))
          , s = o(n(9501))
          , r = [i.default, s.default];
        t.default = r
    }
    ,
    7537: (e,t,n)=>{
        var o = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = [o(n(4058)).default];
        t.default = i
    }
    ,
    4985: (e,t,n)=>{
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = [()=>n.e(413).then(n.bind(n, 2929)), ()=>n.e(413).then(n.bind(n, 343)), ()=>n.e(413).then(n.bind(n, 8073))];
        t.default = o
    }
    ,
    6397: (e,t)=>{
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class GlobalHandler extends elementorModules.frontend.handlers.Base {
            getWidgetType() {
                return "global"
            }
            animate() {
                const e = this.$element
                  , t = this.getAnimation();
                if ("none" === t)
                    return void e.removeClass("elementor-invisible");
                const n = this.getElementSettings()
                  , o = n._animation_delay || n.animation_delay || 0;
                e.removeClass(t),
                this.currentAnimation && e.removeClass(this.currentAnimation),
                this.currentAnimation = t,
                setTimeout((()=>{
                    e.removeClass("elementor-invisible").addClass("animated " + t)
                }
                ), o)
            }
            getAnimation() {
                return this.getCurrentDeviceSetting("animation") || this.getCurrentDeviceSetting("_animation")
            }
            onInit() {
                if (super.onInit(...arguments),
                this.getAnimation()) {
                    const e = elementorModules.utils.Scroll.scrollObserver({
                        callback: t=>{
                            t.isInViewport && (this.animate(),
                            e.unobserve(this.$element[0]))
                        }
                    });
                    e.observe(this.$element[0])
                }
            }
            onElementChange(e) {
                /^_?animation/.test(e) && this.animate()
            }
        }
        t.default = e=>{
            elementorFrontend.elementsHandler.addHandler(GlobalHandler, {
                $element: e
            })
        }
    }
    ,
    355: (e,t)=>{
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class HandlesPosition extends elementorModules.frontend.handlers.Base {
            isActive() {
                return elementorFrontend.isEditMode()
            }
            isFirstSection() {
                return this.$element[0] === document.querySelector(".elementor-edit-mode .elementor-top-section")
            }
            isOverflowHidden() {
                return "hidden" === this.$element.css("overflow")
            }
            getOffset() {
                if ("body" === elementor.config.document.container)
                    return this.$element.offset().top;
                const e = jQuery(elementor.config.document.container);
                return this.$element.offset().top - e.offset().top
            }
            setHandlesPosition() {
                const e = elementor.documents.getCurrent();
                if (!e || !e.container.isEditable())
                    return;
                const t = "elementor-section--handles-inside";
                if (elementor.settings.page.model.attributes.scroll_snap)
                    return void this.$element.addClass(t);
                const n = this.isOverflowHidden();
                if (!n && !this.isFirstSection())
                    return;
                const o = n ? 0 : this.getOffset();
                if (o < 25) {
                    this.$element.addClass(t);
                    const e = this.$element.find("> .elementor-element-overlay > .elementor-editor-section-settings");
                    o < -5 ? e.css("top", -o) : e.css("top", "")
                } else
                    this.$element.removeClass(t)
            }
            onInit() {
                this.isActive() && (this.setHandlesPosition(),
                this.$element.on("mouseenter", this.setHandlesPosition.bind(this)))
            }
        }
        t.default = HandlesPosition
    }
    ,
    3384: (e,t)=>{
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class Shapes extends elementorModules.frontend.handlers.Base {
            getDefaultSettings() {
                return {
                    selectors: {
                        container: "> .elementor-shape-%s"
                    },
                    svgURL: elementorFrontend.config.urls.assets + "shapes/"
                }
            }
            getDefaultElements() {
                const e = {}
                  , t = this.getSettings("selectors");
                return e.$topContainer = this.$element.find(t.container.replace("%s", "top")),
                e.$bottomContainer = this.$element.find(t.container.replace("%s", "bottom")),
                e
            }
            isActive() {
                return elementorFrontend.isEditMode()
            }
            getSvgURL(e, t) {
                let n = this.getSettings("svgURL") + t + ".svg";
                return elementor.config.additional_shapes && e in elementor.config.additional_shapes && (n = elementor.config.additional_shapes[e],
                -1 < t.indexOf("-negative") && (n = n.replace(".svg", "-negative.svg"))),
                n
            }
            buildSVG(e) {
                const t = "shape_divider_" + e
                  , n = this.getElementSettings(t)
                  , o = this.elements["$" + e + "Container"];
                if (o.attr("data-shape", n),
                !n)
                    return void o.empty();
                let i = n;
                this.getElementSettings(t + "_negative") && (i += "-negative");
                const s = this.getSvgURL(n, i);
                jQuery.get(s, (e=>{
                    o.empty().append(e.childNodes[0])
                }
                )),
                this.setNegative(e)
            }
            setNegative(e) {
                this.elements["$" + e + "Container"].attr("data-negative", !!this.getElementSettings("shape_divider_" + e + "_negative"))
            }
            onInit() {
                this.isActive(this.getSettings()) && (super.onInit(...arguments),
                ["top", "bottom"].forEach((e=>{
                    this.getElementSettings("shape_divider_" + e) && this.buildSVG(e)
                }
                )))
            }
            onElementChange(e) {
                const t = e.match(/^shape_divider_(top|bottom)$/);
                if (t)
                    return void this.buildSVG(t[1]);
                const n = e.match(/^shape_divider_(top|bottom)_negative$/);
                n && (this.buildSVG(n[1]),
                this.setNegative(n[1]))
            }
        }
        t.default = Shapes
    }
    ,
    2804: (e,t)=>{
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class StretchedSection extends elementorModules.frontend.handlers.StretchedElement {
            getStretchedClass() {
                return "elementor-section-stretched"
            }
            getStretchSettingName() {
                return "stretch_section"
            }
            getStretchActiveValue() {
                return "section-stretched"
            }
        }
        t.default = StretchedSection
    }
    ,
    3346: (e,t,n)=>{
        var o = n(6028);
        e.exports = elementorModules.ViewModule.extend({
            getDefaultSettings: ()=>({
                scrollDuration: 500,
                selectors: {
                    links: 'a[href*="#"]',
                    targets: ".elementor-element, .elementor-menu-anchor",
                    scrollable: (0,
                    o.isScrollSnapActive)() ? "body" : "html, body"
                }
            }),
            getDefaultElements() {
                return {
                    $scrollable: jQuery(this.getSettings("selectors").scrollable)
                }
            },
            bindEvents() {
                elementorFrontend.elements.$document.on("click", this.getSettings("selectors.links"), this.handleAnchorLinks)
            },
            handleAnchorLinks(e) {
                var t, n = e.currentTarget, i = location.pathname === n.pathname;
                if (location.hostname === n.hostname && i && !(n.hash.length < 2)) {
                    try {
                        t = jQuery(n.hash).filter(this.getSettings("selectors.targets"))
                    } catch (e) {
                        return
                    }
                    if (t.length) {
                        var s = t.offset().top
                          , r = elementorFrontend.elements.$wpAdminBar
                          , a = jQuery(".elementor-section.elementor-sticky--active:visible");
                        r.length > 0 && (s -= r.height()),
                        a.length > 0 && (s -= Math.max.apply(null, a.map((function() {
                            return jQuery(this).outerHeight()
                        }
                        )).get())),
                        e.preventDefault(),
                        s = elementorFrontend.hooks.applyFilters("frontend/handlers/menu_anchor/scroll_top_distance", s),
                        (0,
                        o.isScrollSnapActive)() && elementorFrontend.elements.$body.css("scroll-snap-type", "none"),
                        this.elements.$scrollable.animate({
                            scrollTop: s
                        }, this.getSettings("scrollDuration"), "linear", (()=>{
                            (0,
                            o.isScrollSnapActive)() && elementorFrontend.elements.$body.css("scroll-snap-type", "")
                        }
                        ))
                    }
                }
            },
            onInit() {
                elementorModules.ViewModule.prototype.onInit.apply(this, arguments)
            }
        })
    }
    ,
    6866: (e,t)=>{
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class AssetsLoader {
            getScriptElement(e) {
                const t = document.createElement("script");
                return t.src = e,
                t
            }
            getStyleElement(e) {
                const t = document.createElement("link");
                return t.rel = "stylesheet",
                t.href = e,
                t
            }
            load(e, t) {
                const n = AssetsLoader.assets[e][t];
                return n.loader || (n.loader = new Promise((t=>{
                    const o = "style" === e ? this.getStyleElement(n.src) : this.getScriptElement(n.src);
                    o.onload = ()=>t(!0);
                    const i = "head" === n.parent ? n.parent : "body";
                    document[i].appendChild(o)
                }
                ))),
                n.loader
            }
        }
        t.default = AssetsLoader;
        const n = elementorFrontendConfig.environmentMode.isScriptDebug ? "" : ".min"
          , o = elementorFrontendConfig.experimentalFeatures.e_swiper_latest ? `${elementorFrontendConfig.urls.assets}lib/swiper/v8/swiper${n}.js?ver=8.4.5` : `${elementorFrontendConfig.urls.assets}lib/swiper/swiper${n}.js?ver=5.3.6`;
        AssetsLoader.assets = {
            script: {
                dialog: {
                    src: `${elementorFrontendConfig.urls.assets}lib/dialog/dialog${n}.js?ver=4.9.0`
                },
                "share-link": {
                    src: `${elementorFrontendConfig.urls.assets}lib/share-link/share-link${n}.js?ver=${elementorFrontendConfig.version}`
                },
                swiper: {
                    src: o
                }
            },
            style: {}
        }
    }
    ,
    1322: (e,t)=>{
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        t.default = class Controls {
            getControlValue(e, t, n) {
                let o;
                return o = "object" == typeof e[t] && n ? e[t][n] : e[t],
                o
            }
            getResponsiveControlValue(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                const o = (arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null) || elementorFrontend.getCurrentDeviceMode()
                  , i = this.getControlValue(e, t, n);
                if ("widescreen" === o) {
                    const o = this.getControlValue(e, `${t}_widescreen`, n);
                    return o || 0 === o ? o : i
                }
                const s = elementorFrontend.breakpoints.getActiveBreakpointsList({
                    withDesktop: !0
                });
                let r = o
                  , a = s.indexOf(o)
                  , l = "";
                for (; a <= s.length; ) {
                    if ("desktop" === r) {
                        l = i;
                        break
                    }
                    const o = `${t}_${r}`
                      , d = this.getControlValue(e, o, n);
                    if (d || 0 === d) {
                        l = d;
                        break
                    }
                    a++,
                    r = s[a]
                }
                return l
            }
        }
    }
    ,
    8646: (e,t,n)=>{
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class LightboxManager extends elementorModules.ViewModule {
            static getLightbox() {
                const e = new Promise((e=>{
                    n.e(723).then(n.t.bind(n, 3896, 23)).then((t=>{
                        let {default: n} = t;
                        return e(new n)
                    }
                    ))
                }
                ))
                  , t = elementorFrontend.utils.assetsLoader.load("script", "dialog")
                  , o = elementorFrontend.utils.assetsLoader.load("script", "share-link");
                return Promise.all([e, t, o]).then((()=>e))
            }
            getDefaultSettings() {
                return {
                    selectors: {
                        links: "a, [data-elementor-lightbox]"
                    }
                }
            }
            getDefaultElements() {
                return {
                    $links: jQuery(this.getSettings("selectors.links"))
                }
            }
            isLightboxLink(e) {
                if ("a" === e.tagName.toLowerCase() && (e.hasAttribute("download") || !/^[^?]+\.(png|jpe?g|gif|svg|webp)(\?.*)?$/i.test(e.href)) && !e.dataset.elementorLightboxVideo)
                    return !1;
                const t = elementorFrontend.getKitSettings("global_image_lightbox")
                  , n = e.dataset.elementorOpenLightbox;
                return "yes" === n || t && "no" !== n
            }
            async onLinkClick(e) {
                const t = e.currentTarget
                  , n = jQuery(e.target)
                  , o = elementorFrontend.isEditMode()
                  , i = o && elementor.$previewContents.find("body").hasClass("elementor-editor__ui-state__color-picker")
                  , s = !!n.closest(".elementor-edit-area").length;
                if (!this.isLightboxLink(t))
                    return void (o && s && e.preventDefault());
                if (e.preventDefault(),
                o && !elementor.getPreferences("lightbox_in_editor"))
                    return;
                if (i)
                    return;
                (this.isOptimizedAssetsLoading() ? await LightboxManager.getLightbox() : elementorFrontend.utils.lightbox).createLightbox(t)
            }
            isOptimizedAssetsLoading() {
                return elementorFrontend.config.experimentalFeatures.e_optimized_assets_loading
            }
            bindEvents() {
                elementorFrontend.elements.$document.on("click", this.getSettings("selectors.links"), (e=>this.onLinkClick(e)))
            }
            onInit() {
                super.onInit(...arguments),
                this.isOptimizedAssetsLoading() && !elementorFrontend.isEditMode() && this.elements.$links.each(((e,t)=>{
                    if (this.isLightboxLink(t))
                        return LightboxManager.getLightbox(),
                        !1
                }
                ))
            }
        }
        t.default = LightboxManager
    }
    ,
    8628: (e,t)=>{
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        t.default = class Swiper {
            constructor(e, t) {
                return this.config = t,
                this.config.breakpoints && (this.config = this.adjustConfig(t)),
                e instanceof jQuery && (e = e[0]),
                e.closest(".elementor-widget-wrap")?.classList.add("e-swiper-container"),
                e.closest(".elementor-widget")?.classList.add("e-widget-swiper"),
                new Promise((t=>{
                    if (!elementorFrontend.config.experimentalFeatures.e_optimized_assets_loading)
                        return t(this.createSwiperInstance(e, this.config));
                    elementorFrontend.utils.assetsLoader.load("script", "swiper").then((()=>t(this.createSwiperInstance(e, this.config))))
                }
                ))
            }
            createSwiperInstance(e, t) {
                const n = window.Swiper;
                return n.prototype.adjustConfig = this.adjustConfig,
                new n(e,t)
            }
            adjustConfig(e) {
                if (!e.handleElementorBreakpoints)
                    return e;
                const t = elementorFrontend.config.responsive.activeBreakpoints
                  , n = elementorFrontend.breakpoints.getBreakpointValues();
                return Object.keys(e.breakpoints).forEach((o=>{
                    const i = parseInt(o);
                    let s;
                    if (i === t.mobile.value || i + 1 === t.mobile.value)
                        s = 0;
                    else if (!t.widescreen || i !== t.widescreen.value && i + 1 !== t.widescreen.value) {
                        const e = n.findIndex((e=>i === e || i + 1 === e));
                        s = n[e - 1]
                    } else
                        s = i;
                    e.breakpoints[s] = e.breakpoints[o],
                    e.breakpoints[o] = {
                        slidesPerView: e.slidesPerView,
                        slidesPerGroup: e.slidesPerGroup ? e.slidesPerGroup : 1
                    }
                }
                )),
                e
            }
        }
    }
    ,
    2064: (e,t,n)=>{
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0,
        n(5719);
        class _default extends elementorModules.ViewModule {
            getDefaultSettings() {
                return {
                    selectors: {
                        links: 'a[href^="%23elementor-action"], a[href^="#elementor-action"]'
                    }
                }
            }
            bindEvents() {
                elementorFrontend.elements.$document.on("click", this.getSettings("selectors.links"), this.runLinkAction.bind(this))
            }
            initActions() {
                this.actions = {
                    lightbox: async e=>{
                        const t = await elementorFrontend.utils.lightbox;
                        e.slideshow ? t.openSlideshow(e.slideshow, e.url) : (e.id && (e.type = "image"),
                        t.showModal(e))
                    }
                }
            }
            addAction(e, t) {
                this.actions[e] = t
            }
            runAction(e) {
                const t = (e = decodeURIComponent(e)).match(/action=(.+?)&/);
                if (!t)
                    return;
                const n = this.actions[t[1]];
                if (!n)
                    return;
                let o = {};
                const i = e.match(/settings=(.+)/);
                i && (o = JSON.parse(atob(i[1])));
                for (var s = arguments.length, r = new Array(s > 1 ? s - 1 : 0), a = 1; a < s; a++)
                    r[a - 1] = arguments[a];
                n(o, ...r)
            }
            runLinkAction(e) {
                e.preventDefault(),
                this.runAction(jQuery(e.currentTarget).attr("href"), e)
            }
            runHashAction() {
                if (!location.hash)
                    return;
                const e = document.querySelector(`[data-e-action-hash="${location.hash}"], a[href*="${location.hash}"]`);
                e && this.runAction(e.getAttribute("data-e-action-hash"))
            }
            createActionHash(e, t) {
                return encodeURIComponent(`#elementor-action:action=${e}&settings=${btoa(JSON.stringify(t))}`)
            }
            onInit() {
                super.onInit(),
                this.initActions(),
                elementorFrontend.on("components:init", this.runHashAction.bind(this))
            }
        }
        t.default = _default
    }
    ,
    6028: (e,t)=>{
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.isScrollSnapActive = t.escapeHTML = void 0;
        t.escapeHTML = e=>{
            const t = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                "'": "&#39;",
                '"': "&quot;"
            };
            return e.replace(/[&<>'"]/g, (e=>t[e] || e))
        }
        ;
        t.isScrollSnapActive = ()=>"yes" === (elementorFrontend.isEditMode() ? elementor.settings.page.model.attributes?.scroll_snap : elementorFrontend.config.settings.page?.scroll_snap)
    }
    ,
    4773: (e,t)=>{
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class BaseLoader extends elementorModules.ViewModule {
            getDefaultSettings() {
                return {
                    isInserted: !1,
                    selectors: {
                        firstScript: "script:first"
                    }
                }
            }
            getDefaultElements() {
                return {
                    $firstScript: jQuery(this.getSettings("selectors.firstScript"))
                }
            }
            insertAPI() {
                this.elements.$firstScript.before(jQuery("<script>", {
                    src: this.getApiURL()
                })),
                this.setSettings("isInserted", !0)
            }
            getVideoIDFromURL(e) {
                const t = e.match(this.getURLRegex());
                return t && t[1]
            }
            onApiReady(e) {
                this.getSettings("isInserted") || this.insertAPI(),
                this.isApiLoaded() ? e(this.getApiObject()) : setTimeout((()=>{
                    this.onApiReady(e)
                }
                ), 350)
            }
            getAutoplayURL(e) {
                return e.replace("&autoplay=0", "") + "&autoplay=1"
            }
        }
        t.default = BaseLoader
    }
    ,
    1911: (e,t,n)=>{
        var o = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = o(n(4773));
        class VimeoLoader extends i.default {
            getApiURL() {
                return "https://player.vimeo.com/api/player.js"
            }
            getURLRegex() {
                return /^(?:https?:\/\/)?(?:www|player\.)?(?:vimeo\.com\/)?(?:video\/|external\/)?(\d+)([^.?&#"'>]?)/
            }
            isApiLoaded() {
                return window.Vimeo
            }
            getApiObject() {
                return Vimeo
            }
            getAutoplayURL(e) {
                const t = (e = super.getAutoplayURL(e)).match(/#t=[^&]*/);
                return e.replace(t[0], "") + t
            }
        }
        t.default = VimeoLoader
    }
    ,
    1604: (e,t,n)=>{
        var o = n(3203);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i = o(n(4773));
        class YoutubeLoader extends i.default {
            getApiURL() {
                return "https://www.youtube.com/iframe_api"
            }
            getURLRegex() {
                return /^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com\/(?:(?:watch)?\?(?:.*&)?vi?=|(?:embed|v|vi|user)\/))([^?&"'>]+)/
            }
            isApiLoaded() {
                return window.YT && YT.loaded
            }
            getApiObject() {
                return YT
            }
        }
        t.default = YoutubeLoader
    },
    4375: (e,t)=>{
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class Breakpoints extends elementorModules.Module {
            constructor(e) {
                super(),
                this.responsiveConfig = e
            }
            getActiveBreakpointsList() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                e = {
                    largeToSmall: !1,
                    withDesktop: !1,
                    ...e
                };
                const t = Object.keys(this.responsiveConfig.activeBreakpoints);
                if (e.withDesktop) {
                    const e = -1 === t.indexOf("widescreen") ? t.length : t.length - 1;
                    t.splice(e, 0, "desktop")
                }
                return e.largeToSmall && t.reverse(),
                t
            }
            getBreakpointValues() {
                const {activeBreakpoints: e} = this.responsiveConfig
                  , t = [];
                return Object.values(e).forEach((e=>{
                    t.push(e.value)
                }
                )),
                t
            }
            getDesktopPreviousDeviceKey() {
                let e = "";
                const {activeBreakpoints: t} = this.responsiveConfig
                  , n = Object.keys(t)
                  , o = n.length;
                return e = "min" === t[n[o - 1]].direction ? n[o - 2] : n[o - 1],
                e
            }
            getDesktopMinPoint() {
                const {activeBreakpoints: e} = this.responsiveConfig;
                return e[this.getDesktopPreviousDeviceKey()].value + 1
            }
            getDeviceMinBreakpoint(e) {
                if ("desktop" === e)
                    return this.getDesktopMinPoint();
                const {activeBreakpoints: t} = this.responsiveConfig
                  , n = Object.keys(t);
                let o;
                if (n[0] === e)
                    o = 320;
                else if ("widescreen" === e)
                    o = t[e] ? t[e].value : this.responsiveConfig.breakpoints.widescreen;
                else {
                    const i = n.indexOf(e);
                    o = t[n[i - 1]].value + 1
                }
                return o
            }
            getActiveMatchRegex() {
                return new RegExp(this.getActiveBreakpointsList().map((e=>"_" + e)).join("|") + "$")
            }
        }
        t.default = Breakpoints
    }
    ,
    6404: (e,t)=>{
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = t.Events = void 0;
        class Events {
            static dispatch(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
                  , o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                e = e instanceof jQuery ? e[0] : e,
                o && e.dispatchEvent(new CustomEvent(o,{
                    detail: n
                })),
                e.dispatchEvent(new CustomEvent(t,{
                    detail: n
                }))
            }
        }
        t.Events = Events;
        var n = Events;
        t.default = n
    }
    ,
    9469: e=>{
        e.exports = function() {
            var e, t = Array.prototype.slice, n = {
                actions: {},
                filters: {}
            };
            function _removeHook(e, t, o, i) {
                var s, r, a;
                if (n[e][t])
                    if (o)
                        if (s = n[e][t],
                        i)
                            for (a = s.length; a--; )
                                (r = s[a]).callback === o && r.context === i && s.splice(a, 1);
                        else
                            for (a = s.length; a--; )
                                s[a].callback === o && s.splice(a, 1);
                    else
                        n[e][t] = []
            }
            function _addHook(e, t, o, i, s) {
                var r = {
                    callback: o,
                    priority: i,
                    context: s
                }
                  , a = n[e][t];
                if (a) {
                    var l = !1;
                    if (jQuery.each(a, (function() {
                        if (this.callback === o)
                            return l = !0,
                            !1
                    }
                    )),
                    l)
                        return;
                    a.push(r),
                    a = function _hookInsertSort(e) {
                        for (var t, n, o, i = 1, s = e.length; i < s; i++) {
                            for (t = e[i],
                            n = i; (o = e[n - 1]) && o.priority > t.priority; )
                                e[n] = e[n - 1],
                                --n;
                            e[n] = t
                        }
                        return e
                    }(a)
                } else
                    a = [r];
                n[e][t] = a
            }
            function _runHook(e, t, o) {
                var i, s, r = n[e][t];
                if (!r)
                    return "filters" === e && o[0];
                if (s = r.length,
                "filters" === e)
                    for (i = 0; i < s; i++)
                        o[0] = r[i].callback.apply(r[i].context, o);
                else
                    for (i = 0; i < s; i++)
                        r[i].callback.apply(r[i].context, o);
                return "filters" !== e || o[0]
            }
            return e = {
                removeFilter: function removeFilter(t, n) {
                    return "string" == typeof t && _removeHook("filters", t, n),
                    e
                },
                applyFilters: function applyFilters() {
                    var n = t.call(arguments)
                      , o = n.shift();
                    return "string" == typeof o ? _runHook("filters", o, n) : e
                },
                addFilter: function addFilter(t, n, o, i) {
                    return "string" == typeof t && "function" == typeof n && _addHook("filters", t, n, o = parseInt(o || 10, 10), i),
                    e
                },
                removeAction: function removeAction(t, n) {
                    return "string" == typeof t && _removeHook("actions", t, n),
                    e
                },
                doAction: function doAction() {
                    var n = t.call(arguments)
                      , o = n.shift();
                    return "string" == typeof o && _runHook("actions", o, n),
                    e
                },
                addAction: function addAction(t, n, o, i) {
                    return "string" == typeof t && "function" == typeof n && _addHook("actions", t, n, o = parseInt(o || 10, 10), i),
                    e
                }
            },
            e
        }
    }
    ,
    3308: (e,t)=>{
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        const matchUserAgent = e=>n.indexOf(e) >= 0
          , n = navigator.userAgent
          , o = !!window.opr && !!opr.addons || !!window.opera || matchUserAgent(" OPR/")
          , i = matchUserAgent("Firefox")
          , s = /^((?!chrome|android).)*safari/i.test(n) || /constructor/i.test(window.HTMLElement) || "[object SafariRemoteNotification]" === (!window.safari || "undefined" != typeof safari && safari.pushNotification).toString()
          , r = /Trident|MSIE/.test(n) && !!document.documentMode
          , a = !r && !!window.StyleMedia || matchUserAgent("Edg")
          , l = !!window.chrome && matchUserAgent("Chrome") && !(a || o)
          , d = matchUserAgent("Chrome") && !!window.CSS
          , c = matchUserAgent("AppleWebKit") && !d;
        var u = {
            isTouchDevice: "ontouchstart"in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
            appleWebkit: c,
            blink: d,
            chrome: l,
            edge: a,
            firefox: i,
            ie: r,
            mac: matchUserAgent("Macintosh"),
            opera: o,
            safari: s,
            webkit: matchUserAgent("AppleWebKit")
        };
        t.default = u
    }
    ,
    5107: (e,t)=>{
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class _default extends elementorModules.Module {
            get(e, t) {
                let n;
                t = t || {};
                try {
                    n = t.session ? sessionStorage : localStorage
                } catch (t) {
                    return e ? void 0 : {}
                }
                let o = n.getItem("elementor");
                o = o ? JSON.parse(o) : {},
                o.__expiration || (o.__expiration = {});
                const i = o.__expiration;
                let s = [];
                e ? i[e] && (s = [e]) : s = Object.keys(i);
                let r = !1;
                return s.forEach((e=>{
                    new Date(i[e]) < new Date && (delete o[e],
                    delete i[e],
                    r = !0)
                }
                )),
                r && this.save(o, t.session),
                e ? o[e] : o
            }
            set(e, t, n) {
                n = n || {};
                const o = this.get(null, n);
                if (o[e] = t,
                n.lifetimeInSeconds) {
                    const t = new Date;
                    t.setTime(t.getTime() + 1e3 * n.lifetimeInSeconds),
                    o.__expiration[e] = t.getTime()
                }
                this.save(o, n.session)
            }
            save(e, t) {
                let n;
                try {
                    n = t ? sessionStorage : localStorage
                } catch (e) {
                    return
                }
                n.setItem("elementor", JSON.stringify(e))
            }
        }
        t.default = _default
    }
    ,
    6046: (e,t,n)=>{
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class _default extends elementorModules.Module {
            constructor() {
                super(),
                elementorFrontend.elementsHandler.attachHandler("text-path", (()=>n.e(48).then(n.bind(n, 6468))))
            }
        }
        t.default = _default
    }
    ,
    1855: (e,t,n)=>{
        var o = n(5516)
          , i = TypeError;
        e.exports = function(e, t) {
            if (o(t, e))
                return e;
            throw i("Incorrect invocation")
        }
    }
    ,
    3621: e=>{
        e.exports = {
            IndexSizeError: {
                s: "INDEX_SIZE_ERR",
                c: 1,
                m: 1
            },
            DOMStringSizeError: {
                s: "DOMSTRING_SIZE_ERR",
                c: 2,
                m: 0
            },
            HierarchyRequestError: {
                s: "HIERARCHY_REQUEST_ERR",
                c: 3,
                m: 1
            },
            WrongDocumentError: {
                s: "WRONG_DOCUMENT_ERR",
                c: 4,
                m: 1
            },
            InvalidCharacterError: {
                s: "INVALID_CHARACTER_ERR",
                c: 5,
                m: 1
            },
            NoDataAllowedError: {
                s: "NO_DATA_ALLOWED_ERR",
                c: 6,
                m: 0
            },
            NoModificationAllowedError: {
                s: "NO_MODIFICATION_ALLOWED_ERR",
                c: 7,
                m: 1
            },
            NotFoundError: {
                s: "NOT_FOUND_ERR",
                c: 8,
                m: 1
            },
            NotSupportedError: {
                s: "NOT_SUPPORTED_ERR",
                c: 9,
                m: 1
            },
            InUseAttributeError: {
                s: "INUSE_ATTRIBUTE_ERR",
                c: 10,
                m: 1
            },
            InvalidStateError: {
                s: "INVALID_STATE_ERR",
                c: 11,
                m: 1
            },
            SyntaxError: {
                s: "SYNTAX_ERR",
                c: 12,
                m: 1
            },
            InvalidModificationError: {
                s: "INVALID_MODIFICATION_ERR",
                c: 13,
                m: 1
            },
            NamespaceError: {
                s: "NAMESPACE_ERR",
                c: 14,
                m: 1
            },
            InvalidAccessError: {
                s: "INVALID_ACCESS_ERR",
                c: 15,
                m: 1
            },
            ValidationError: {
                s: "VALIDATION_ERR",
                c: 16,
                m: 0
            },
            TypeMismatchError: {
                s: "TYPE_MISMATCH_ERR",
                c: 17,
                m: 1
            },
            SecurityError: {
                s: "SECURITY_ERR",
                c: 18,
                m: 1
            },
            NetworkError: {
                s: "NETWORK_ERR",
                c: 19,
                m: 1
            },
            AbortError: {
                s: "ABORT_ERR",
                c: 20,
                m: 1
            },
            URLMismatchError: {
                s: "URL_MISMATCH_ERR",
                c: 21,
                m: 1
            },
            QuotaExceededError: {
                s: "QUOTA_EXCEEDED_ERR",
                c: 22,
                m: 1
            },
            TimeoutError: {
                s: "TIMEOUT_ERR",
                c: 23,
                m: 1
            },
            InvalidNodeTypeError: {
                s: "INVALID_NODE_TYPE_ERR",
                c: 24,
                m: 1
            },
            DataCloneError: {
                s: "DATA_CLONE_ERR",
                c: 25,
                m: 1
            }
        }
    }
    ,
    5719: (e,t,n)=>{
        var o = n(1695)
          , i = n(2086)
          , s = n(563)
          , r = n(5736)
          , a = n(7826).f
          , l = n(9606)
          , d = n(1855)
          , c = n(5070)
          , u = n(1879)
          , h = n(3621)
          , m = n(79)
          , g = n(5283)
          , p = n(3296)
          , f = "DOMException"
          , v = s("Error")
          , b = s(f)
          , _ = function DOMException() {
            d(this, y);
            var e = arguments.length
              , t = u(e < 1 ? void 0 : arguments[0])
              , n = u(e < 2 ? void 0 : arguments[1], "Error")
              , o = new b(t,n)
              , i = v(t);
            return i.name = f,
            a(o, "stack", r(1, m(i.stack, 1))),
            c(o, this, _),
            o
        }
          , y = _.prototype = b.prototype
          , w = "stack"in v(f)
          , k = "stack"in new b(1,2)
          , S = b && g && Object.getOwnPropertyDescriptor(i, f)
          , E = !(!S || S.writable && S.configurable)
          , M = w && !E && !k;
        o({
            global: !0,
            constructor: !0,
            forced: p || M
        }, {
            DOMException: M ? _ : b
        });
        var C = s(f)
          , A = C.prototype;
        if (A.constructor !== C)
            for (var D in p || a(A, "constructor", r(1, C)),
            h)
                if (l(h, D)) {
                    var $ = h[D]
                      , R = $.s;
                    l(C, R) || a(C, R, r(6, $.c))
                }
    }
}, e=>{
    e.O(0, [354], (()=>{
        return t = 5654,
        e(e.s = t);
        var t
    }
    ));
    e.O()
}
]);

function isMobile() {
    if (sessionStorage.desktop)
        return false;
    else if (localStorage.mobile)
        return true;
    var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
    for (var i in mobile)
        if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
    return false;
}

$('a.Telegram').click(function (event) {
  event.preventDefault();
  var href = $(this).attr('href')
  window.location = 'https://t.me/tifodao';
});

$('a.Instagram').click(function (event) {
  event.preventDefault();
  var href = $(this).attr('href')
  window.location = 'https://instagram.com/tifodao';
});