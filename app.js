(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
        r(i);
    new MutationObserver(i => {
        for (const s of i)
            if (s.type === "childList")
                for (const o of s.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(i) {
        const s = {};
        return i.integrity && (s.integrity = i.integrity),
        i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
        i.crossOrigin === "use-credentials" ? s.credentials = "include" : i.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin",
        s
    }
    function r(i) {
        if (i.ep)
            return;
        i.ep = !0;
        const s = n(i);
        fetch(i.href, s)
    }
}
)();
var Hf = {
    exports: {}
}
  , ks = {}
  , Kf = {
    exports: {}
}
  , _ = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xr = Symbol.for("react.element")
  , Rm = Symbol.for("react.portal")
  , _m = Symbol.for("react.fragment")
  , Im = Symbol.for("react.strict_mode")
  , Om = Symbol.for("react.profiler")
  , zm = Symbol.for("react.provider")
  , Bm = Symbol.for("react.context")
  , Um = Symbol.for("react.forward_ref")
  , $m = Symbol.for("react.suspense")
  , Wm = Symbol.for("react.memo")
  , Hm = Symbol.for("react.lazy")
  , xu = Symbol.iterator;
function Km(e) {
    return e === null || typeof e != "object" ? null : (e = xu && e[xu] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var bf = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Gf = Object.assign
  , Yf = {};
function bn(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Yf,
    this.updater = n || bf
}
bn.prototype.isReactComponent = {};
bn.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
bn.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Qf() {}
Qf.prototype = bn.prototype;
function ba(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Yf,
    this.updater = n || bf
}
var Ga = ba.prototype = new Qf;
Ga.constructor = ba;
Gf(Ga, bn.prototype);
Ga.isPureReactComponent = !0;
var wu = Array.isArray
  , Xf = Object.prototype.hasOwnProperty
  , Ya = {
    current: null
}
  , Zf = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Jf(e, t, n) {
    var r, i = {}, s = null, o = null;
    if (t != null)
        for (r in t.ref !== void 0 && (o = t.ref),
        t.key !== void 0 && (s = "" + t.key),
        t)
            Xf.call(t, r) && !Zf.hasOwnProperty(r) && (i[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1)
        i.children = n;
    else if (1 < a) {
        for (var l = Array(a), u = 0; u < a; u++)
            l[u] = arguments[u + 2];
        i.children = l
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps,
        a)
            i[r] === void 0 && (i[r] = a[r]);
    return {
        $$typeof: Xr,
        type: e,
        key: s,
        ref: o,
        props: i,
        _owner: Ya.current
    }
}
function bm(e, t) {
    return {
        $$typeof: Xr,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function Qa(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Xr
}
function Gm(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Su = /\/+/g;
function Ks(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Gm("" + e.key) : t.toString(36)
}
function ji(e, t, n, r, i) {
    var s = typeof e;
    (s === "undefined" || s === "boolean") && (e = null);
    var o = !1;
    if (e === null)
        o = !0;
    else
        switch (s) {
        case "string":
        case "number":
            o = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case Xr:
            case Rm:
                o = !0
            }
        }
    if (o)
        return o = e,
        i = i(o),
        e = r === "" ? "." + Ks(o, 0) : r,
        wu(i) ? (n = "",
        e != null && (n = e.replace(Su, "$&/") + "/"),
        ji(i, t, n, "", function(u) {
            return u
        })) : i != null && (Qa(i) && (i = bm(i, n + (!i.key || o && o.key === i.key ? "" : ("" + i.key).replace(Su, "$&/") + "/") + e)),
        t.push(i)),
        1;
    if (o = 0,
    r = r === "" ? "." : r + ":",
    wu(e))
        for (var a = 0; a < e.length; a++) {
            s = e[a];
            var l = r + Ks(s, a);
            o += ji(s, t, n, l, i)
        }
    else if (l = Km(e),
    typeof l == "function")
        for (e = l.call(e),
        a = 0; !(s = e.next()).done; )
            s = s.value,
            l = r + Ks(s, a++),
            o += ji(s, t, n, l, i);
    else if (s === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return o
}
function ui(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , i = 0;
    return ji(e, r, "", "", function(s) {
        return t.call(n, s, i++)
    }),
    r
}
function Ym(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var we = {
    current: null
}
  , Ni = {
    transition: null
}
  , Qm = {
    ReactCurrentDispatcher: we,
    ReactCurrentBatchConfig: Ni,
    ReactCurrentOwner: Ya
};
function qf() {
    throw Error("act(...) is not supported in production builds of React.")
}
_.Children = {
    map: ui,
    forEach: function(e, t, n) {
        ui(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return ui(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return ui(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Qa(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
_.Component = bn;
_.Fragment = _m;
_.Profiler = Om;
_.PureComponent = ba;
_.StrictMode = Im;
_.Suspense = $m;
_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qm;
_.act = qf;
_.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Gf({}, e.props)
      , i = e.key
      , s = e.ref
      , o = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (s = t.ref,
        o = Ya.current),
        t.key !== void 0 && (i = "" + t.key),
        e.type && e.type.defaultProps)
            var a = e.type.defaultProps;
        for (l in t)
            Xf.call(t, l) && !Zf.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1)
        r.children = n;
    else if (1 < l) {
        a = Array(l);
        for (var u = 0; u < l; u++)
            a[u] = arguments[u + 2];
        r.children = a
    }
    return {
        $$typeof: Xr,
        type: e.type,
        key: i,
        ref: s,
        props: r,
        _owner: o
    }
}
;
_.createContext = function(e) {
    return e = {
        $$typeof: Bm,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: zm,
        _context: e
    },
    e.Consumer = e
}
;
_.createElement = Jf;
_.createFactory = function(e) {
    var t = Jf.bind(null, e);
    return t.type = e,
    t
}
;
_.createRef = function() {
    return {
        current: null
    }
}
;
_.forwardRef = function(e) {
    return {
        $$typeof: Um,
        render: e
    }
}
;
_.isValidElement = Qa;
_.lazy = function(e) {
    return {
        $$typeof: Hm,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Ym
    }
}
;
_.memo = function(e, t) {
    return {
        $$typeof: Wm,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
_.startTransition = function(e) {
    var t = Ni.transition;
    Ni.transition = {};
    try {
        e()
    } finally {
        Ni.transition = t
    }
}
;
_.unstable_act = qf;
_.useCallback = function(e, t) {
    return we.current.useCallback(e, t)
}
;
_.useContext = function(e) {
    return we.current.useContext(e)
}
;
_.useDebugValue = function() {}
;
_.useDeferredValue = function(e) {
    return we.current.useDeferredValue(e)
}
;
_.useEffect = function(e, t) {
    return we.current.useEffect(e, t)
}
;
_.useId = function() {
    return we.current.useId()
}
;
_.useImperativeHandle = function(e, t, n) {
    return we.current.useImperativeHandle(e, t, n)
}
;
_.useInsertionEffect = function(e, t) {
    return we.current.useInsertionEffect(e, t)
}
;
_.useLayoutEffect = function(e, t) {
    return we.current.useLayoutEffect(e, t)
}
;
_.useMemo = function(e, t) {
    return we.current.useMemo(e, t)
}
;
_.useReducer = function(e, t, n) {
    return we.current.useReducer(e, t, n)
}
;
_.useRef = function(e) {
    return we.current.useRef(e)
}
;
_.useState = function(e) {
    return we.current.useState(e)
}
;
_.useSyncExternalStore = function(e, t, n) {
    return we.current.useSyncExternalStore(e, t, n)
}
;
_.useTransition = function() {
    return we.current.useTransition()
}
;
_.version = "18.3.1";
Kf.exports = _;
var M = Kf.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xm = M
  , Zm = Symbol.for("react.element")
  , Jm = Symbol.for("react.fragment")
  , qm = Object.prototype.hasOwnProperty
  , ey = Xm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , ty = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function ed(e, t, n) {
    var r, i = {}, s = null, o = null;
    n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
    for (r in t)
        qm.call(t, r) && !ty.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: Zm,
        type: e,
        key: s,
        ref: o,
        props: i,
        _owner: ey.current
    }
}
ks.Fragment = Jm;
ks.jsx = ed;
ks.jsxs = ed;
Hf.exports = ks;
var v = Hf.exports
  , td = {
    exports: {}
}
  , Ne = {}
  , nd = {
    exports: {}
}
  , rd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(D, N) {
        var L = D.length;
        D.push(N);
        e: for (; 0 < L; ) {
            var H = L - 1 >>> 1
              , se = D[H];
            if (0 < i(se, N))
                D[H] = N,
                D[L] = se,
                L = H;
            else
                break e
        }
    }
    function n(D) {
        return D.length === 0 ? null : D[0]
    }
    function r(D) {
        if (D.length === 0)
            return null;
        var N = D[0]
          , L = D.pop();
        if (L !== N) {
            D[0] = L;
            e: for (var H = 0, se = D.length, ai = se >>> 1; H < ai; ) {
                var Wt = 2 * (H + 1) - 1
                  , Hs = D[Wt]
                  , Ht = Wt + 1
                  , li = D[Ht];
                if (0 > i(Hs, L))
                    Ht < se && 0 > i(li, Hs) ? (D[H] = li,
                    D[Ht] = L,
                    H = Ht) : (D[H] = Hs,
                    D[Wt] = L,
                    H = Wt);
                else if (Ht < se && 0 > i(li, L))
                    D[H] = li,
                    D[Ht] = L,
                    H = Ht;
                else
                    break e
            }
        }
        return N
    }
    function i(D, N) {
        var L = D.sortIndex - N.sortIndex;
        return L !== 0 ? L : D.id - N.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var s = performance;
        e.unstable_now = function() {
            return s.now()
        }
    } else {
        var o = Date
          , a = o.now();
        e.unstable_now = function() {
            return o.now() - a
        }
    }
    var l = []
      , u = []
      , c = 1
      , f = null
      , d = 3
      , y = !1
      , g = !1
      , x = !1
      , E = typeof setTimeout == "function" ? setTimeout : null
      , p = typeof clearTimeout == "function" ? clearTimeout : null
      , h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function m(D) {
        for (var N = n(u); N !== null; ) {
            if (N.callback === null)
                r(u);
            else if (N.startTime <= D)
                r(u),
                N.sortIndex = N.expirationTime,
                t(l, N);
            else
                break;
            N = n(u)
        }
    }
    function S(D) {
        if (x = !1,
        m(D),
        !g)
            if (n(l) !== null)
                g = !0,
                oi(w);
            else {
                var N = n(u);
                N !== null && Z(S, N.startTime - D)
            }
    }
    function w(D, N) {
        g = !1,
        x && (x = !1,
        p(T),
        T = -1),
        y = !0;
        var L = d;
        try {
            for (m(N),
            f = n(l); f !== null && (!(f.expirationTime > N) || D && !ee()); ) {
                var H = f.callback;
                if (typeof H == "function") {
                    f.callback = null,
                    d = f.priorityLevel;
                    var se = H(f.expirationTime <= N);
                    N = e.unstable_now(),
                    typeof se == "function" ? f.callback = se : f === n(l) && r(l),
                    m(N)
                } else
                    r(l);
                f = n(l)
            }
            if (f !== null)
                var ai = !0;
            else {
                var Wt = n(u);
                Wt !== null && Z(S, Wt.startTime - N),
                ai = !1
            }
            return ai
        } finally {
            f = null,
            d = L,
            y = !1
        }
    }
    var C = !1
      , k = null
      , T = -1
      , R = 5
      , j = -1;
    function ee() {
        return !(e.unstable_now() - j < R)
    }
    function gt() {
        if (k !== null) {
            var D = e.unstable_now();
            j = D;
            var N = !0;
            try {
                N = k(!0, D)
            } finally {
                N ? $t() : (C = !1,
                k = null)
            }
        } else
            C = !1
    }
    var $t;
    if (typeof h == "function")
        $t = function() {
            h(gt)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var Jn = new MessageChannel
          , si = Jn.port2;
        Jn.port1.onmessage = gt,
        $t = function() {
            si.postMessage(null)
        }
    } else
        $t = function() {
            E(gt, 0)
        }
        ;
    function oi(D) {
        k = D,
        C || (C = !0,
        $t())
    }
    function Z(D, N) {
        T = E(function() {
            D(e.unstable_now())
        }, N)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(D) {
        D.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        g || y || (g = !0,
        oi(w))
    }
    ,
    e.unstable_forceFrameRate = function(D) {
        0 > D || 125 < D ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : R = 0 < D ? Math.floor(1e3 / D) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return d
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(l)
    }
    ,
    e.unstable_next = function(D) {
        switch (d) {
        case 1:
        case 2:
        case 3:
            var N = 3;
            break;
        default:
            N = d
        }
        var L = d;
        d = N;
        try {
            return D()
        } finally {
            d = L
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(D, N) {
        switch (D) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            D = 3
        }
        var L = d;
        d = D;
        try {
            return N()
        } finally {
            d = L
        }
    }
    ,
    e.unstable_scheduleCallback = function(D, N, L) {
        var H = e.unstable_now();
        switch (typeof L == "object" && L !== null ? (L = L.delay,
        L = typeof L == "number" && 0 < L ? H + L : H) : L = H,
        D) {
        case 1:
            var se = -1;
            break;
        case 2:
            se = 250;
            break;
        case 5:
            se = 1073741823;
            break;
        case 4:
            se = 1e4;
            break;
        default:
            se = 5e3
        }
        return se = L + se,
        D = {
            id: c++,
            callback: N,
            priorityLevel: D,
            startTime: L,
            expirationTime: se,
            sortIndex: -1
        },
        L > H ? (D.sortIndex = L,
        t(u, D),
        n(l) === null && D === n(u) && (x ? (p(T),
        T = -1) : x = !0,
        Z(S, L - H))) : (D.sortIndex = se,
        t(l, D),
        g || y || (g = !0,
        oi(w))),
        D
    }
    ,
    e.unstable_shouldYield = ee,
    e.unstable_wrapCallback = function(D) {
        var N = d;
        return function() {
            var L = d;
            d = N;
            try {
                return D.apply(this, arguments)
            } finally {
                d = L
            }
        }
    }
}
)(rd);
nd.exports = rd;
var ny = nd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ry = M
  , je = ny;
function P(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var id = new Set
  , Mr = {};
function cn(e, t) {
    In(e, t),
    In(e + "Capture", t)
}
function In(e, t) {
    for (Mr[e] = t,
    e = 0; e < t.length; e++)
        id.add(t[e])
}
var ct = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , Vo = Object.prototype.hasOwnProperty
  , iy = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , Cu = {}
  , Tu = {};
function sy(e) {
    return Vo.call(Tu, e) ? !0 : Vo.call(Cu, e) ? !1 : iy.test(e) ? Tu[e] = !0 : (Cu[e] = !0,
    !1)
}
function oy(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function ay(e, t, n, r) {
    if (t === null || typeof t > "u" || oy(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function Se(e, t, n, r, i, s, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = i,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = s,
    this.removeEmptyString = o
}
var fe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    fe[e] = new Se(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    fe[t] = new Se(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    fe[e] = new Se(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    fe[e] = new Se(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    fe[e] = new Se(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    fe[e] = new Se(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    fe[e] = new Se(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    fe[e] = new Se(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    fe[e] = new Se(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var Xa = /[\-:]([a-z])/g;
function Za(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Xa, Za);
    fe[t] = new Se(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Xa, Za);
    fe[t] = new Se(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Xa, Za);
    fe[t] = new Se(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    fe[e] = new Se(e,1,!1,e.toLowerCase(),null,!1,!1)
});
fe.xlinkHref = new Se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    fe[e] = new Se(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function Ja(e, t, n, r) {
    var i = fe.hasOwnProperty(t) ? fe[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (ay(t, n, i, r) && (n = null),
    r || i === null ? sy(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName,
    r = i.attributeNamespace,
    n === null ? e.removeAttribute(t) : (i = i.type,
    n = i === 3 || i === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var yt = ry.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , ci = Symbol.for("react.element")
  , hn = Symbol.for("react.portal")
  , pn = Symbol.for("react.fragment")
  , qa = Symbol.for("react.strict_mode")
  , Lo = Symbol.for("react.profiler")
  , sd = Symbol.for("react.provider")
  , od = Symbol.for("react.context")
  , el = Symbol.for("react.forward_ref")
  , Ro = Symbol.for("react.suspense")
  , _o = Symbol.for("react.suspense_list")
  , tl = Symbol.for("react.memo")
  , wt = Symbol.for("react.lazy")
  , ad = Symbol.for("react.offscreen")
  , ku = Symbol.iterator;
function qn(e) {
    return e === null || typeof e != "object" ? null : (e = ku && e[ku] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Y = Object.assign, bs;
function lr(e) {
    if (bs === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            bs = t && t[1] || ""
        }
    return `
` + bs + e
}
var Gs = !1;
function Ys(e, t) {
    if (!e || Gs)
        return "";
    Gs = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var i = u.stack.split(`
`), s = r.stack.split(`
`), o = i.length - 1, a = s.length - 1; 1 <= o && 0 <= a && i[o] !== s[a]; )
                a--;
            for (; 1 <= o && 0 <= a; o--,
            a--)
                if (i[o] !== s[a]) {
                    if (o !== 1 || a !== 1)
                        do
                            if (o--,
                            a--,
                            0 > a || i[o] !== s[a]) {
                                var l = `
` + i[o].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)),
                                l
                            }
                        while (1 <= o && 0 <= a);
                    break
                }
        }
    } finally {
        Gs = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? lr(e) : ""
}
function ly(e) {
    switch (e.tag) {
    case 5:
        return lr(e.type);
    case 16:
        return lr("Lazy");
    case 13:
        return lr("Suspense");
    case 19:
        return lr("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = Ys(e.type, !1),
        e;
    case 11:
        return e = Ys(e.type.render, !1),
        e;
    case 1:
        return e = Ys(e.type, !0),
        e;
    default:
        return ""
    }
}
function Io(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case pn:
        return "Fragment";
    case hn:
        return "Portal";
    case Lo:
        return "Profiler";
    case qa:
        return "StrictMode";
    case Ro:
        return "Suspense";
    case _o:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case od:
            return (e.displayName || "Context") + ".Consumer";
        case sd:
            return (e._context.displayName || "Context") + ".Provider";
        case el:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case tl:
            return t = e.displayName || null,
            t !== null ? t : Io(e.type) || "Memo";
        case wt:
            t = e._payload,
            e = e._init;
            try {
                return Io(e(t))
            } catch {}
        }
    return null
}
function uy(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return Io(t);
    case 8:
        return t === qa ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function Lt(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function ld(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function cy(e) {
    var t = ld(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get
          , s = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return i.call(this)
            },
            set: function(o) {
                r = "" + o,
                s.call(this, o)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(o) {
                r = "" + o
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function fi(e) {
    e._valueTracker || (e._valueTracker = cy(e))
}
function ud(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = ld(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function Gi(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function Oo(e, t) {
    var n = t.checked;
    return Y({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function Pu(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = Lt(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function cd(e, t) {
    t = t.checked,
    t != null && Ja(e, "checked", t, !1)
}
function zo(e, t) {
    cd(e, t);
    var n = Lt(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Bo(e, t.type, n) : t.hasOwnProperty("defaultValue") && Bo(e, t.type, Lt(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Eu(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function Bo(e, t, n) {
    (t !== "number" || Gi(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var ur = Array.isArray;
function An(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var i = 0; i < n.length; i++)
            t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++)
            i = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Lt(n),
        t = null,
        i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0,
                r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}
function Uo(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(P(91));
    return Y({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function Mu(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(P(92));
            if (ur(n)) {
                if (1 < n.length)
                    throw Error(P(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: Lt(n)
    }
}
function fd(e, t) {
    var n = Lt(t.value)
      , r = Lt(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function Du(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function dd(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function $o(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? dd(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var di, hd = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, i)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (di = di || document.createElement("div"),
        di.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = di.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Dr(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var hr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , fy = ["Webkit", "ms", "Moz", "O"];
Object.keys(hr).forEach(function(e) {
    fy.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        hr[t] = hr[e]
    })
});
function pd(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || hr.hasOwnProperty(e) && hr[e] ? ("" + t).trim() : t + "px"
}
function md(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , i = pd(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, i) : e[n] = i
        }
}
var dy = Y({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function Wo(e, t) {
    if (t) {
        if (dy[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(P(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(P(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(P(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(P(62))
    }
}
function Ho(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var Ko = null;
function nl(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var bo = null
  , jn = null
  , Nn = null;
function Fu(e) {
    if (e = qr(e)) {
        if (typeof bo != "function")
            throw Error(P(280));
        var t = e.stateNode;
        t && (t = Fs(t),
        bo(e.stateNode, e.type, t))
    }
}
function yd(e) {
    jn ? Nn ? Nn.push(e) : Nn = [e] : jn = e
}
function gd() {
    if (jn) {
        var e = jn
          , t = Nn;
        if (Nn = jn = null,
        Fu(e),
        t)
            for (e = 0; e < t.length; e++)
                Fu(t[e])
    }
}
function vd(e, t) {
    return e(t)
}
function xd() {}
var Qs = !1;
function wd(e, t, n) {
    if (Qs)
        return e(t, n);
    Qs = !0;
    try {
        return vd(e, t, n)
    } finally {
        Qs = !1,
        (jn !== null || Nn !== null) && (xd(),
        gd())
    }
}
function Fr(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = Fs(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(P(231, t, typeof n));
    return n
}
var Go = !1;
if (ct)
    try {
        var er = {};
        Object.defineProperty(er, "passive", {
            get: function() {
                Go = !0
            }
        }),
        window.addEventListener("test", er, er),
        window.removeEventListener("test", er, er)
    } catch {
        Go = !1
    }
function hy(e, t, n, r, i, s, o, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var pr = !1
  , Yi = null
  , Qi = !1
  , Yo = null
  , py = {
    onError: function(e) {
        pr = !0,
        Yi = e
    }
};
function my(e, t, n, r, i, s, o, a, l) {
    pr = !1,
    Yi = null,
    hy.apply(py, arguments)
}
function yy(e, t, n, r, i, s, o, a, l) {
    if (my.apply(this, arguments),
    pr) {
        if (pr) {
            var u = Yi;
            pr = !1,
            Yi = null
        } else
            throw Error(P(198));
        Qi || (Qi = !0,
        Yo = u)
    }
}
function fn(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function Sd(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function Au(e) {
    if (fn(e) !== e)
        throw Error(P(188))
}
function gy(e) {
    var t = e.alternate;
    if (!t) {
        if (t = fn(e),
        t === null)
            throw Error(P(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var i = n.return;
        if (i === null)
            break;
        var s = i.alternate;
        if (s === null) {
            if (r = i.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === s.child) {
            for (s = i.child; s; ) {
                if (s === n)
                    return Au(i),
                    e;
                if (s === r)
                    return Au(i),
                    t;
                s = s.sibling
            }
            throw Error(P(188))
        }
        if (n.return !== r.return)
            n = i,
            r = s;
        else {
            for (var o = !1, a = i.child; a; ) {
                if (a === n) {
                    o = !0,
                    n = i,
                    r = s;
                    break
                }
                if (a === r) {
                    o = !0,
                    r = i,
                    n = s;
                    break
                }
                a = a.sibling
            }
            if (!o) {
                for (a = s.child; a; ) {
                    if (a === n) {
                        o = !0,
                        n = s,
                        r = i;
                        break
                    }
                    if (a === r) {
                        o = !0,
                        r = s,
                        n = i;
                        break
                    }
                    a = a.sibling
                }
                if (!o)
                    throw Error(P(189))
            }
        }
        if (n.alternate !== r)
            throw Error(P(190))
    }
    if (n.tag !== 3)
        throw Error(P(188));
    return n.stateNode.current === n ? e : t
}
function Cd(e) {
    return e = gy(e),
    e !== null ? Td(e) : null
}
function Td(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = Td(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var kd = je.unstable_scheduleCallback
  , ju = je.unstable_cancelCallback
  , vy = je.unstable_shouldYield
  , xy = je.unstable_requestPaint
  , q = je.unstable_now
  , wy = je.unstable_getCurrentPriorityLevel
  , rl = je.unstable_ImmediatePriority
  , Pd = je.unstable_UserBlockingPriority
  , Xi = je.unstable_NormalPriority
  , Sy = je.unstable_LowPriority
  , Ed = je.unstable_IdlePriority
  , Ps = null
  , tt = null;
function Cy(e) {
    if (tt && typeof tt.onCommitFiberRoot == "function")
        try {
            tt.onCommitFiberRoot(Ps, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var Qe = Math.clz32 ? Math.clz32 : Py
  , Ty = Math.log
  , ky = Math.LN2;
function Py(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (Ty(e) / ky | 0) | 0
}
var hi = 64
  , pi = 4194304;
function cr(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function Zi(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , i = e.suspendedLanes
      , s = e.pingedLanes
      , o = n & 268435455;
    if (o !== 0) {
        var a = o & ~i;
        a !== 0 ? r = cr(a) : (s &= o,
        s !== 0 && (r = cr(s)))
    } else
        o = n & ~i,
        o !== 0 ? r = cr(o) : s !== 0 && (r = cr(s));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r,
    s = t & -t,
    i >= s || i === 16 && (s & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - Qe(t),
            i = 1 << n,
            r |= e[n],
            t &= ~i;
    return r
}
function Ey(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function My(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
        var o = 31 - Qe(s)
          , a = 1 << o
          , l = i[o];
        l === -1 ? (!(a & n) || a & r) && (i[o] = Ey(a, t)) : l <= t && (e.expiredLanes |= a),
        s &= ~a
    }
}
function Qo(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function Md() {
    var e = hi;
    return hi <<= 1,
    !(hi & 4194240) && (hi = 64),
    e
}
function Xs(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function Zr(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - Qe(t),
    e[t] = n
}
function Dy(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var i = 31 - Qe(n)
          , s = 1 << i;
        t[i] = 0,
        r[i] = -1,
        e[i] = -1,
        n &= ~s
    }
}
function il(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - Qe(n)
          , i = 1 << r;
        i & t | e[r] & t && (e[r] |= t),
        n &= ~i
    }
}
var O = 0;
function Dd(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Fd, sl, Ad, jd, Nd, Xo = !1, mi = [], Et = null, Mt = null, Dt = null, Ar = new Map, jr = new Map, Ct = [], Fy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Nu(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        Et = null;
        break;
    case "dragenter":
    case "dragleave":
        Mt = null;
        break;
    case "mouseover":
    case "mouseout":
        Dt = null;
        break;
    case "pointerover":
    case "pointerout":
        Ar.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        jr.delete(t.pointerId)
    }
}
function tr(e, t, n, r, i, s) {
    return e === null || e.nativeEvent !== s ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i]
    },
    t !== null && (t = qr(t),
    t !== null && sl(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    i !== null && t.indexOf(i) === -1 && t.push(i),
    e)
}
function Ay(e, t, n, r, i) {
    switch (t) {
    case "focusin":
        return Et = tr(Et, e, t, n, r, i),
        !0;
    case "dragenter":
        return Mt = tr(Mt, e, t, n, r, i),
        !0;
    case "mouseover":
        return Dt = tr(Dt, e, t, n, r, i),
        !0;
    case "pointerover":
        var s = i.pointerId;
        return Ar.set(s, tr(Ar.get(s) || null, e, t, n, r, i)),
        !0;
    case "gotpointercapture":
        return s = i.pointerId,
        jr.set(s, tr(jr.get(s) || null, e, t, n, r, i)),
        !0
    }
    return !1
}
function Vd(e) {
    var t = Qt(e.target);
    if (t !== null) {
        var n = fn(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = Sd(n),
                t !== null) {
                    e.blockedOn = t,
                    Nd(e.priority, function() {
                        Ad(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function Vi(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Zo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            Ko = r,
            n.target.dispatchEvent(r),
            Ko = null
        } else
            return t = qr(n),
            t !== null && sl(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function Vu(e, t, n) {
    Vi(e) && n.delete(t)
}
function jy() {
    Xo = !1,
    Et !== null && Vi(Et) && (Et = null),
    Mt !== null && Vi(Mt) && (Mt = null),
    Dt !== null && Vi(Dt) && (Dt = null),
    Ar.forEach(Vu),
    jr.forEach(Vu)
}
function nr(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    Xo || (Xo = !0,
    je.unstable_scheduleCallback(je.unstable_NormalPriority, jy)))
}
function Nr(e) {
    function t(i) {
        return nr(i, e)
    }
    if (0 < mi.length) {
        nr(mi[0], e);
        for (var n = 1; n < mi.length; n++) {
            var r = mi[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Et !== null && nr(Et, e),
    Mt !== null && nr(Mt, e),
    Dt !== null && nr(Dt, e),
    Ar.forEach(t),
    jr.forEach(t),
    n = 0; n < Ct.length; n++)
        r = Ct[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Ct.length && (n = Ct[0],
    n.blockedOn === null); )
        Vd(n),
        n.blockedOn === null && Ct.shift()
}
var Vn = yt.ReactCurrentBatchConfig
  , Ji = !0;
function Ny(e, t, n, r) {
    var i = O
      , s = Vn.transition;
    Vn.transition = null;
    try {
        O = 1,
        ol(e, t, n, r)
    } finally {
        O = i,
        Vn.transition = s
    }
}
function Vy(e, t, n, r) {
    var i = O
      , s = Vn.transition;
    Vn.transition = null;
    try {
        O = 4,
        ol(e, t, n, r)
    } finally {
        O = i,
        Vn.transition = s
    }
}
function ol(e, t, n, r) {
    if (Ji) {
        var i = Zo(e, t, n, r);
        if (i === null)
            oo(e, t, r, qi, n),
            Nu(e, r);
        else if (Ay(i, e, t, n, r))
            r.stopPropagation();
        else if (Nu(e, r),
        t & 4 && -1 < Fy.indexOf(e)) {
            for (; i !== null; ) {
                var s = qr(i);
                if (s !== null && Fd(s),
                s = Zo(e, t, n, r),
                s === null && oo(e, t, r, qi, n),
                s === i)
                    break;
                i = s
            }
            i !== null && r.stopPropagation()
        } else
            oo(e, t, r, null, n)
    }
}
var qi = null;
function Zo(e, t, n, r) {
    if (qi = null,
    e = nl(r),
    e = Qt(e),
    e !== null)
        if (t = fn(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = Sd(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return qi = e,
    null
}
function Ld(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (wy()) {
        case rl:
            return 1;
        case Pd:
            return 4;
        case Xi:
        case Sy:
            return 16;
        case Ed:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var kt = null
  , al = null
  , Li = null;
function Rd() {
    if (Li)
        return Li;
    var e, t = al, n = t.length, r, i = "value"in kt ? kt.value : kt.textContent, s = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++)
        ;
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === i[s - r]; r++)
        ;
    return Li = i.slice(e, 1 < r ? 1 - r : void 0)
}
function Ri(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function yi() {
    return !0
}
function Lu() {
    return !1
}
function Ve(e) {
    function t(n, r, i, s, o) {
        this._reactName = n,
        this._targetInst = i,
        this.type = r,
        this.nativeEvent = s,
        this.target = o,
        this.currentTarget = null;
        for (var a in e)
            e.hasOwnProperty(a) && (n = e[a],
            this[a] = n ? n(s) : s[a]);
        return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? yi : Lu,
        this.isPropagationStopped = Lu,
        this
    }
    return Y(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = yi)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = yi)
        },
        persist: function() {},
        isPersistent: yi
    }),
    t
}
var Gn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, ll = Ve(Gn), Jr = Y({}, Gn, {
    view: 0,
    detail: 0
}), Ly = Ve(Jr), Zs, Js, rr, Es = Y({}, Jr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ul,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== rr && (rr && e.type === "mousemove" ? (Zs = e.screenX - rr.screenX,
        Js = e.screenY - rr.screenY) : Js = Zs = 0,
        rr = e),
        Zs)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : Js
    }
}), Ru = Ve(Es), Ry = Y({}, Es, {
    dataTransfer: 0
}), _y = Ve(Ry), Iy = Y({}, Jr, {
    relatedTarget: 0
}), qs = Ve(Iy), Oy = Y({}, Gn, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), zy = Ve(Oy), By = Y({}, Gn, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), Uy = Ve(By), $y = Y({}, Gn, {
    data: 0
}), _u = Ve($y), Wy = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, Hy = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, Ky = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function by(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Ky[e]) ? !!t[e] : !1
}
function ul() {
    return by
}
var Gy = Y({}, Jr, {
    key: function(e) {
        if (e.key) {
            var t = Wy[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = Ri(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Hy[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ul,
    charCode: function(e) {
        return e.type === "keypress" ? Ri(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? Ri(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , Yy = Ve(Gy)
  , Qy = Y({}, Es, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , Iu = Ve(Qy)
  , Xy = Y({}, Jr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ul
})
  , Zy = Ve(Xy)
  , Jy = Y({}, Gn, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , qy = Ve(Jy)
  , eg = Y({}, Es, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , tg = Ve(eg)
  , ng = [9, 13, 27, 32]
  , cl = ct && "CompositionEvent"in window
  , mr = null;
ct && "documentMode"in document && (mr = document.documentMode);
var rg = ct && "TextEvent"in window && !mr
  , _d = ct && (!cl || mr && 8 < mr && 11 >= mr)
  , Ou = " "
  , zu = !1;
function Id(e, t) {
    switch (e) {
    case "keyup":
        return ng.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function Od(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var mn = !1;
function ig(e, t) {
    switch (e) {
    case "compositionend":
        return Od(t);
    case "keypress":
        return t.which !== 32 ? null : (zu = !0,
        Ou);
    case "textInput":
        return e = t.data,
        e === Ou && zu ? null : e;
    default:
        return null
    }
}
function sg(e, t) {
    if (mn)
        return e === "compositionend" || !cl && Id(e, t) ? (e = Rd(),
        Li = al = kt = null,
        mn = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return _d && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var og = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function Bu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!og[e.type] : t === "textarea"
}
function zd(e, t, n, r) {
    yd(r),
    t = es(t, "onChange"),
    0 < t.length && (n = new ll("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var yr = null
  , Vr = null;
function ag(e) {
    Xd(e, 0)
}
function Ms(e) {
    var t = vn(e);
    if (ud(t))
        return e
}
function lg(e, t) {
    if (e === "change")
        return t
}
var Bd = !1;
if (ct) {
    var eo;
    if (ct) {
        var to = "oninput"in document;
        if (!to) {
            var Uu = document.createElement("div");
            Uu.setAttribute("oninput", "return;"),
            to = typeof Uu.oninput == "function"
        }
        eo = to
    } else
        eo = !1;
    Bd = eo && (!document.documentMode || 9 < document.documentMode)
}
function $u() {
    yr && (yr.detachEvent("onpropertychange", Ud),
    Vr = yr = null)
}
function Ud(e) {
    if (e.propertyName === "value" && Ms(Vr)) {
        var t = [];
        zd(t, Vr, e, nl(e)),
        wd(ag, t)
    }
}
function ug(e, t, n) {
    e === "focusin" ? ($u(),
    yr = t,
    Vr = n,
    yr.attachEvent("onpropertychange", Ud)) : e === "focusout" && $u()
}
function cg(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Ms(Vr)
}
function fg(e, t) {
    if (e === "click")
        return Ms(t)
}
function dg(e, t) {
    if (e === "input" || e === "change")
        return Ms(t)
}
function hg(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Ze = typeof Object.is == "function" ? Object.is : hg;
function Lr(e, t) {
    if (Ze(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!Vo.call(t, i) || !Ze(e[i], t[i]))
            return !1
    }
    return !0
}
function Wu(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function Hu(e, t) {
    var n = Wu(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Wu(n)
    }
}
function $d(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? $d(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function Wd() {
    for (var e = window, t = Gi(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Gi(e.document)
    }
    return t
}
function fl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function pg(e) {
    var t = Wd()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && $d(n.ownerDocument.documentElement, n)) {
        if (r !== null && fl(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length
                  , s = Math.min(r.start, i);
                r = r.end === void 0 ? s : Math.min(r.end, i),
                !e.extend && s > r && (i = r,
                r = s,
                s = i),
                i = Hu(n, s);
                var o = Hu(n, r);
                i && o && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(),
                t.setStart(i.node, i.offset),
                e.removeAllRanges(),
                s > r ? (e.addRange(t),
                e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var mg = ct && "documentMode"in document && 11 >= document.documentMode
  , yn = null
  , Jo = null
  , gr = null
  , qo = !1;
function Ku(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    qo || yn == null || yn !== Gi(r) || (r = yn,
    "selectionStart"in r && fl(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    gr && Lr(gr, r) || (gr = r,
    r = es(Jo, "onSelect"),
    0 < r.length && (t = new ll("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = yn)))
}
function gi(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var gn = {
    animationend: gi("Animation", "AnimationEnd"),
    animationiteration: gi("Animation", "AnimationIteration"),
    animationstart: gi("Animation", "AnimationStart"),
    transitionend: gi("Transition", "TransitionEnd")
}
  , no = {}
  , Hd = {};
ct && (Hd = document.createElement("div").style,
"AnimationEvent"in window || (delete gn.animationend.animation,
delete gn.animationiteration.animation,
delete gn.animationstart.animation),
"TransitionEvent"in window || delete gn.transitionend.transition);
function Ds(e) {
    if (no[e])
        return no[e];
    if (!gn[e])
        return e;
    var t = gn[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Hd)
            return no[e] = t[n];
    return e
}
var Kd = Ds("animationend")
  , bd = Ds("animationiteration")
  , Gd = Ds("animationstart")
  , Yd = Ds("transitionend")
  , Qd = new Map
  , bu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Ot(e, t) {
    Qd.set(e, t),
    cn(t, [e])
}
for (var ro = 0; ro < bu.length; ro++) {
    var io = bu[ro]
      , yg = io.toLowerCase()
      , gg = io[0].toUpperCase() + io.slice(1);
    Ot(yg, "on" + gg)
}
Ot(Kd, "onAnimationEnd");
Ot(bd, "onAnimationIteration");
Ot(Gd, "onAnimationStart");
Ot("dblclick", "onDoubleClick");
Ot("focusin", "onFocus");
Ot("focusout", "onBlur");
Ot(Yd, "onTransitionEnd");
In("onMouseEnter", ["mouseout", "mouseover"]);
In("onMouseLeave", ["mouseout", "mouseover"]);
In("onPointerEnter", ["pointerout", "pointerover"]);
In("onPointerLeave", ["pointerout", "pointerover"]);
cn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
cn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
cn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
cn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
cn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
cn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var fr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , vg = new Set("cancel close invalid load scroll toggle".split(" ").concat(fr));
function Gu(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    yy(r, t, void 0, e),
    e.currentTarget = null
}
function Xd(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , i = r.event;
        r = r.listeners;
        e: {
            var s = void 0;
            if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var a = r[o]
                      , l = a.instance
                      , u = a.currentTarget;
                    if (a = a.listener,
                    l !== s && i.isPropagationStopped())
                        break e;
                    Gu(i, a, u),
                    s = l
                }
            else
                for (o = 0; o < r.length; o++) {
                    if (a = r[o],
                    l = a.instance,
                    u = a.currentTarget,
                    a = a.listener,
                    l !== s && i.isPropagationStopped())
                        break e;
                    Gu(i, a, u),
                    s = l
                }
        }
    }
    if (Qi)
        throw e = Yo,
        Qi = !1,
        Yo = null,
        e
}
function B(e, t) {
    var n = t[ia];
    n === void 0 && (n = t[ia] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Zd(t, e, 2, !1),
    n.add(r))
}
function so(e, t, n) {
    var r = 0;
    t && (r |= 4),
    Zd(n, e, r, t)
}
var vi = "_reactListening" + Math.random().toString(36).slice(2);
function Rr(e) {
    if (!e[vi]) {
        e[vi] = !0,
        id.forEach(function(n) {
            n !== "selectionchange" && (vg.has(n) || so(n, !1, e),
            so(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[vi] || (t[vi] = !0,
        so("selectionchange", !1, t))
    }
}
function Zd(e, t, n, r) {
    switch (Ld(t)) {
    case 1:
        var i = Ny;
        break;
    case 4:
        i = Vy;
        break;
    default:
        i = ol
    }
    n = i.bind(null, t, n, e),
    i = void 0,
    !Go || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0),
    r ? i !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
        passive: i
    }) : e.addEventListener(t, n, !1)
}
function oo(e, t, n, r, i) {
    var s = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var o = r.tag;
            if (o === 3 || o === 4) {
                var a = r.stateNode.containerInfo;
                if (a === i || a.nodeType === 8 && a.parentNode === i)
                    break;
                if (o === 4)
                    for (o = r.return; o !== null; ) {
                        var l = o.tag;
                        if ((l === 3 || l === 4) && (l = o.stateNode.containerInfo,
                        l === i || l.nodeType === 8 && l.parentNode === i))
                            return;
                        o = o.return
                    }
                for (; a !== null; ) {
                    if (o = Qt(a),
                    o === null)
                        return;
                    if (l = o.tag,
                    l === 5 || l === 6) {
                        r = s = o;
                        continue e
                    }
                    a = a.parentNode
                }
            }
            r = r.return
        }
    wd(function() {
        var u = s
          , c = nl(n)
          , f = [];
        e: {
            var d = Qd.get(e);
            if (d !== void 0) {
                var y = ll
                  , g = e;
                switch (e) {
                case "keypress":
                    if (Ri(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    y = Yy;
                    break;
                case "focusin":
                    g = "focus",
                    y = qs;
                    break;
                case "focusout":
                    g = "blur",
                    y = qs;
                    break;
                case "beforeblur":
                case "afterblur":
                    y = qs;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    y = Ru;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    y = _y;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    y = Zy;
                    break;
                case Kd:
                case bd:
                case Gd:
                    y = zy;
                    break;
                case Yd:
                    y = qy;
                    break;
                case "scroll":
                    y = Ly;
                    break;
                case "wheel":
                    y = tg;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    y = Uy;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    y = Iu
                }
                var x = (t & 4) !== 0
                  , E = !x && e === "scroll"
                  , p = x ? d !== null ? d + "Capture" : null : d;
                x = [];
                for (var h = u, m; h !== null; ) {
                    m = h;
                    var S = m.stateNode;
                    if (m.tag === 5 && S !== null && (m = S,
                    p !== null && (S = Fr(h, p),
                    S != null && x.push(_r(h, S, m)))),
                    E)
                        break;
                    h = h.return
                }
                0 < x.length && (d = new y(d,g,null,n,c),
                f.push({
                    event: d,
                    listeners: x
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (d = e === "mouseover" || e === "pointerover",
                y = e === "mouseout" || e === "pointerout",
                d && n !== Ko && (g = n.relatedTarget || n.fromElement) && (Qt(g) || g[ft]))
                    break e;
                if ((y || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window,
                y ? (g = n.relatedTarget || n.toElement,
                y = u,
                g = g ? Qt(g) : null,
                g !== null && (E = fn(g),
                g !== E || g.tag !== 5 && g.tag !== 6) && (g = null)) : (y = null,
                g = u),
                y !== g)) {
                    if (x = Ru,
                    S = "onMouseLeave",
                    p = "onMouseEnter",
                    h = "mouse",
                    (e === "pointerout" || e === "pointerover") && (x = Iu,
                    S = "onPointerLeave",
                    p = "onPointerEnter",
                    h = "pointer"),
                    E = y == null ? d : vn(y),
                    m = g == null ? d : vn(g),
                    d = new x(S,h + "leave",y,n,c),
                    d.target = E,
                    d.relatedTarget = m,
                    S = null,
                    Qt(c) === u && (x = new x(p,h + "enter",g,n,c),
                    x.target = m,
                    x.relatedTarget = E,
                    S = x),
                    E = S,
                    y && g)
                        t: {
                            for (x = y,
                            p = g,
                            h = 0,
                            m = x; m; m = dn(m))
                                h++;
                            for (m = 0,
                            S = p; S; S = dn(S))
                                m++;
                            for (; 0 < h - m; )
                                x = dn(x),
                                h--;
                            for (; 0 < m - h; )
                                p = dn(p),
                                m--;
                            for (; h--; ) {
                                if (x === p || p !== null && x === p.alternate)
                                    break t;
                                x = dn(x),
                                p = dn(p)
                            }
                            x = null
                        }
                    else
                        x = null;
                    y !== null && Yu(f, d, y, x, !1),
                    g !== null && E !== null && Yu(f, E, g, x, !0)
                }
            }
            e: {
                if (d = u ? vn(u) : window,
                y = d.nodeName && d.nodeName.toLowerCase(),
                y === "select" || y === "input" && d.type === "file")
                    var w = lg;
                else if (Bu(d))
                    if (Bd)
                        w = dg;
                    else {
                        w = cg;
                        var C = ug
                    }
                else
                    (y = d.nodeName) && y.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (w = fg);
                if (w && (w = w(e, u))) {
                    zd(f, w, n, c);
                    break e
                }
                C && C(e, d, u),
                e === "focusout" && (C = d._wrapperState) && C.controlled && d.type === "number" && Bo(d, "number", d.value)
            }
            switch (C = u ? vn(u) : window,
            e) {
            case "focusin":
                (Bu(C) || C.contentEditable === "true") && (yn = C,
                Jo = u,
                gr = null);
                break;
            case "focusout":
                gr = Jo = yn = null;
                break;
            case "mousedown":
                qo = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                qo = !1,
                Ku(f, n, c);
                break;
            case "selectionchange":
                if (mg)
                    break;
            case "keydown":
            case "keyup":
                Ku(f, n, c)
            }
            var k;
            if (cl)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var T = "onCompositionStart";
                        break e;
                    case "compositionend":
                        T = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        T = "onCompositionUpdate";
                        break e
                    }
                    T = void 0
                }
            else
                mn ? Id(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
            T && (_d && n.locale !== "ko" && (mn || T !== "onCompositionStart" ? T === "onCompositionEnd" && mn && (k = Rd()) : (kt = c,
            al = "value"in kt ? kt.value : kt.textContent,
            mn = !0)),
            C = es(u, T),
            0 < C.length && (T = new _u(T,e,null,n,c),
            f.push({
                event: T,
                listeners: C
            }),
            k ? T.data = k : (k = Od(n),
            k !== null && (T.data = k)))),
            (k = rg ? ig(e, n) : sg(e, n)) && (u = es(u, "onBeforeInput"),
            0 < u.length && (c = new _u("onBeforeInput","beforeinput",null,n,c),
            f.push({
                event: c,
                listeners: u
            }),
            c.data = k))
        }
        Xd(f, t)
    })
}
function _r(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function es(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var i = e
          , s = i.stateNode;
        i.tag === 5 && s !== null && (i = s,
        s = Fr(e, n),
        s != null && r.unshift(_r(e, s, i)),
        s = Fr(e, t),
        s != null && r.push(_r(e, s, i))),
        e = e.return
    }
    return r
}
function dn(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function Yu(e, t, n, r, i) {
    for (var s = t._reactName, o = []; n !== null && n !== r; ) {
        var a = n
          , l = a.alternate
          , u = a.stateNode;
        if (l !== null && l === r)
            break;
        a.tag === 5 && u !== null && (a = u,
        i ? (l = Fr(n, s),
        l != null && o.unshift(_r(n, l, a))) : i || (l = Fr(n, s),
        l != null && o.push(_r(n, l, a)))),
        n = n.return
    }
    o.length !== 0 && e.push({
        event: t,
        listeners: o
    })
}
var xg = /\r\n?/g
  , wg = /\u0000|\uFFFD/g;
function Qu(e) {
    return (typeof e == "string" ? e : "" + e).replace(xg, `
`).replace(wg, "")
}
function xi(e, t, n) {
    if (t = Qu(t),
    Qu(e) !== t && n)
        throw Error(P(425))
}
function ts() {}
var ea = null
  , ta = null;
function na(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var ra = typeof setTimeout == "function" ? setTimeout : void 0
  , Sg = typeof clearTimeout == "function" ? clearTimeout : void 0
  , Xu = typeof Promise == "function" ? Promise : void 0
  , Cg = typeof queueMicrotask == "function" ? queueMicrotask : typeof Xu < "u" ? function(e) {
    return Xu.resolve(null).then(e).catch(Tg)
}
: ra;
function Tg(e) {
    setTimeout(function() {
        throw e
    })
}
function ao(e, t) {
    var n = t
      , r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n),
        i && i.nodeType === 8)
            if (n = i.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(i),
                    Nr(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    Nr(t)
}
function Ft(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function Zu(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Yn = Math.random().toString(36).slice(2)
  , et = "__reactFiber$" + Yn
  , Ir = "__reactProps$" + Yn
  , ft = "__reactContainer$" + Yn
  , ia = "__reactEvents$" + Yn
  , kg = "__reactListeners$" + Yn
  , Pg = "__reactHandles$" + Yn;
function Qt(e) {
    var t = e[et];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[ft] || n[et]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = Zu(e); e !== null; ) {
                    if (n = e[et])
                        return n;
                    e = Zu(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function qr(e) {
    return e = e[et] || e[ft],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function vn(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(P(33))
}
function Fs(e) {
    return e[Ir] || null
}
var sa = []
  , xn = -1;
function zt(e) {
    return {
        current: e
    }
}
function U(e) {
    0 > xn || (e.current = sa[xn],
    sa[xn] = null,
    xn--)
}
function z(e, t) {
    xn++,
    sa[xn] = e.current,
    e.current = t
}
var Rt = {}
  , ye = zt(Rt)
  , Pe = zt(!1)
  , sn = Rt;
function On(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return Rt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, s;
    for (s in n)
        i[s] = t[s];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = i),
    i
}
function Ee(e) {
    return e = e.childContextTypes,
    e != null
}
function ns() {
    U(Pe),
    U(ye)
}
function Ju(e, t, n) {
    if (ye.current !== Rt)
        throw Error(P(168));
    z(ye, t),
    z(Pe, n)
}
function Jd(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in t))
            throw Error(P(108, uy(e) || "Unknown", i));
    return Y({}, n, r)
}
function rs(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Rt,
    sn = ye.current,
    z(ye, e),
    z(Pe, Pe.current),
    !0
}
function qu(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(P(169));
    n ? (e = Jd(e, t, sn),
    r.__reactInternalMemoizedMergedChildContext = e,
    U(Pe),
    U(ye),
    z(ye, e)) : U(Pe),
    z(Pe, n)
}
var ot = null
  , As = !1
  , lo = !1;
function qd(e) {
    ot === null ? ot = [e] : ot.push(e)
}
function Eg(e) {
    As = !0,
    qd(e)
}
function Bt() {
    if (!lo && ot !== null) {
        lo = !0;
        var e = 0
          , t = O;
        try {
            var n = ot;
            for (O = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            ot = null,
            As = !1
        } catch (i) {
            throw ot !== null && (ot = ot.slice(e + 1)),
            kd(rl, Bt),
            i
        } finally {
            O = t,
            lo = !1
        }
    }
    return null
}
var wn = []
  , Sn = 0
  , is = null
  , ss = 0
  , _e = []
  , Ie = 0
  , on = null
  , at = 1
  , lt = "";
function bt(e, t) {
    wn[Sn++] = ss,
    wn[Sn++] = is,
    is = e,
    ss = t
}
function eh(e, t, n) {
    _e[Ie++] = at,
    _e[Ie++] = lt,
    _e[Ie++] = on,
    on = e;
    var r = at;
    e = lt;
    var i = 32 - Qe(r) - 1;
    r &= ~(1 << i),
    n += 1;
    var s = 32 - Qe(t) + i;
    if (30 < s) {
        var o = i - i % 5;
        s = (r & (1 << o) - 1).toString(32),
        r >>= o,
        i -= o,
        at = 1 << 32 - Qe(t) + i | n << i | r,
        lt = s + e
    } else
        at = 1 << s | n << i | r,
        lt = e
}
function dl(e) {
    e.return !== null && (bt(e, 1),
    eh(e, 1, 0))
}
function hl(e) {
    for (; e === is; )
        is = wn[--Sn],
        wn[Sn] = null,
        ss = wn[--Sn],
        wn[Sn] = null;
    for (; e === on; )
        on = _e[--Ie],
        _e[Ie] = null,
        lt = _e[--Ie],
        _e[Ie] = null,
        at = _e[--Ie],
        _e[Ie] = null
}
var Ae = null
  , Fe = null
  , $ = !1
  , Ye = null;
function th(e, t) {
    var n = Oe(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function ec(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        Ae = e,
        Fe = Ft(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        Ae = e,
        Fe = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = on !== null ? {
            id: at,
            overflow: lt
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = Oe(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        Ae = e,
        Fe = null,
        !0) : !1;
    default:
        return !1
    }
}
function oa(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function aa(e) {
    if ($) {
        var t = Fe;
        if (t) {
            var n = t;
            if (!ec(e, t)) {
                if (oa(e))
                    throw Error(P(418));
                t = Ft(n.nextSibling);
                var r = Ae;
                t && ec(e, t) ? th(r, n) : (e.flags = e.flags & -4097 | 2,
                $ = !1,
                Ae = e)
            }
        } else {
            if (oa(e))
                throw Error(P(418));
            e.flags = e.flags & -4097 | 2,
            $ = !1,
            Ae = e
        }
    }
}
function tc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    Ae = e
}
function wi(e) {
    if (e !== Ae)
        return !1;
    if (!$)
        return tc(e),
        $ = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !na(e.type, e.memoizedProps)),
    t && (t = Fe)) {
        if (oa(e))
            throw nh(),
            Error(P(418));
        for (; t; )
            th(e, t),
            t = Ft(t.nextSibling)
    }
    if (tc(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(P(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Fe = Ft(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Fe = null
        }
    } else
        Fe = Ae ? Ft(e.stateNode.nextSibling) : null;
    return !0
}
function nh() {
    for (var e = Fe; e; )
        e = Ft(e.nextSibling)
}
function zn() {
    Fe = Ae = null,
    $ = !1
}
function pl(e) {
    Ye === null ? Ye = [e] : Ye.push(e)
}
var Mg = yt.ReactCurrentBatchConfig;
function ir(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(P(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(P(147, e));
            var i = r
              , s = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(o) {
                var a = i.refs;
                o === null ? delete a[s] : a[s] = o
            }
            ,
            t._stringRef = s,
            t)
        }
        if (typeof e != "string")
            throw Error(P(284));
        if (!n._owner)
            throw Error(P(290, e))
    }
    return e
}
function Si(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(P(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function nc(e) {
    var t = e._init;
    return t(e._payload)
}
function rh(e) {
    function t(p, h) {
        if (e) {
            var m = p.deletions;
            m === null ? (p.deletions = [h],
            p.flags |= 16) : m.push(h)
        }
    }
    function n(p, h) {
        if (!e)
            return null;
        for (; h !== null; )
            t(p, h),
            h = h.sibling;
        return null
    }
    function r(p, h) {
        for (p = new Map; h !== null; )
            h.key !== null ? p.set(h.key, h) : p.set(h.index, h),
            h = h.sibling;
        return p
    }
    function i(p, h) {
        return p = Vt(p, h),
        p.index = 0,
        p.sibling = null,
        p
    }
    function s(p, h, m) {
        return p.index = m,
        e ? (m = p.alternate,
        m !== null ? (m = m.index,
        m < h ? (p.flags |= 2,
        h) : m) : (p.flags |= 2,
        h)) : (p.flags |= 1048576,
        h)
    }
    function o(p) {
        return e && p.alternate === null && (p.flags |= 2),
        p
    }
    function a(p, h, m, S) {
        return h === null || h.tag !== 6 ? (h = yo(m, p.mode, S),
        h.return = p,
        h) : (h = i(h, m),
        h.return = p,
        h)
    }
    function l(p, h, m, S) {
        var w = m.type;
        return w === pn ? c(p, h, m.props.children, S, m.key) : h !== null && (h.elementType === w || typeof w == "object" && w !== null && w.$$typeof === wt && nc(w) === h.type) ? (S = i(h, m.props),
        S.ref = ir(p, h, m),
        S.return = p,
        S) : (S = $i(m.type, m.key, m.props, null, p.mode, S),
        S.ref = ir(p, h, m),
        S.return = p,
        S)
    }
    function u(p, h, m, S) {
        return h === null || h.tag !== 4 || h.stateNode.containerInfo !== m.containerInfo || h.stateNode.implementation !== m.implementation ? (h = go(m, p.mode, S),
        h.return = p,
        h) : (h = i(h, m.children || []),
        h.return = p,
        h)
    }
    function c(p, h, m, S, w) {
        return h === null || h.tag !== 7 ? (h = tn(m, p.mode, S, w),
        h.return = p,
        h) : (h = i(h, m),
        h.return = p,
        h)
    }
    function f(p, h, m) {
        if (typeof h == "string" && h !== "" || typeof h == "number")
            return h = yo("" + h, p.mode, m),
            h.return = p,
            h;
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
            case ci:
                return m = $i(h.type, h.key, h.props, null, p.mode, m),
                m.ref = ir(p, null, h),
                m.return = p,
                m;
            case hn:
                return h = go(h, p.mode, m),
                h.return = p,
                h;
            case wt:
                var S = h._init;
                return f(p, S(h._payload), m)
            }
            if (ur(h) || qn(h))
                return h = tn(h, p.mode, m, null),
                h.return = p,
                h;
            Si(p, h)
        }
        return null
    }
    function d(p, h, m, S) {
        var w = h !== null ? h.key : null;
        if (typeof m == "string" && m !== "" || typeof m == "number")
            return w !== null ? null : a(p, h, "" + m, S);
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
            case ci:
                return m.key === w ? l(p, h, m, S) : null;
            case hn:
                return m.key === w ? u(p, h, m, S) : null;
            case wt:
                return w = m._init,
                d(p, h, w(m._payload), S)
            }
            if (ur(m) || qn(m))
                return w !== null ? null : c(p, h, m, S, null);
            Si(p, m)
        }
        return null
    }
    function y(p, h, m, S, w) {
        if (typeof S == "string" && S !== "" || typeof S == "number")
            return p = p.get(m) || null,
            a(h, p, "" + S, w);
        if (typeof S == "object" && S !== null) {
            switch (S.$$typeof) {
            case ci:
                return p = p.get(S.key === null ? m : S.key) || null,
                l(h, p, S, w);
            case hn:
                return p = p.get(S.key === null ? m : S.key) || null,
                u(h, p, S, w);
            case wt:
                var C = S._init;
                return y(p, h, m, C(S._payload), w)
            }
            if (ur(S) || qn(S))
                return p = p.get(m) || null,
                c(h, p, S, w, null);
            Si(h, S)
        }
        return null
    }
    function g(p, h, m, S) {
        for (var w = null, C = null, k = h, T = h = 0, R = null; k !== null && T < m.length; T++) {
            k.index > T ? (R = k,
            k = null) : R = k.sibling;
            var j = d(p, k, m[T], S);
            if (j === null) {
                k === null && (k = R);
                break
            }
            e && k && j.alternate === null && t(p, k),
            h = s(j, h, T),
            C === null ? w = j : C.sibling = j,
            C = j,
            k = R
        }
        if (T === m.length)
            return n(p, k),
            $ && bt(p, T),
            w;
        if (k === null) {
            for (; T < m.length; T++)
                k = f(p, m[T], S),
                k !== null && (h = s(k, h, T),
                C === null ? w = k : C.sibling = k,
                C = k);
            return $ && bt(p, T),
            w
        }
        for (k = r(p, k); T < m.length; T++)
            R = y(k, p, T, m[T], S),
            R !== null && (e && R.alternate !== null && k.delete(R.key === null ? T : R.key),
            h = s(R, h, T),
            C === null ? w = R : C.sibling = R,
            C = R);
        return e && k.forEach(function(ee) {
            return t(p, ee)
        }),
        $ && bt(p, T),
        w
    }
    function x(p, h, m, S) {
        var w = qn(m);
        if (typeof w != "function")
            throw Error(P(150));
        if (m = w.call(m),
        m == null)
            throw Error(P(151));
        for (var C = w = null, k = h, T = h = 0, R = null, j = m.next(); k !== null && !j.done; T++,
        j = m.next()) {
            k.index > T ? (R = k,
            k = null) : R = k.sibling;
            var ee = d(p, k, j.value, S);
            if (ee === null) {
                k === null && (k = R);
                break
            }
            e && k && ee.alternate === null && t(p, k),
            h = s(ee, h, T),
            C === null ? w = ee : C.sibling = ee,
            C = ee,
            k = R
        }
        if (j.done)
            return n(p, k),
            $ && bt(p, T),
            w;
        if (k === null) {
            for (; !j.done; T++,
            j = m.next())
                j = f(p, j.value, S),
                j !== null && (h = s(j, h, T),
                C === null ? w = j : C.sibling = j,
                C = j);
            return $ && bt(p, T),
            w
        }
        for (k = r(p, k); !j.done; T++,
        j = m.next())
            j = y(k, p, T, j.value, S),
            j !== null && (e && j.alternate !== null && k.delete(j.key === null ? T : j.key),
            h = s(j, h, T),
            C === null ? w = j : C.sibling = j,
            C = j);
        return e && k.forEach(function(gt) {
            return t(p, gt)
        }),
        $ && bt(p, T),
        w
    }
    function E(p, h, m, S) {
        if (typeof m == "object" && m !== null && m.type === pn && m.key === null && (m = m.props.children),
        typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
            case ci:
                e: {
                    for (var w = m.key, C = h; C !== null; ) {
                        if (C.key === w) {
                            if (w = m.type,
                            w === pn) {
                                if (C.tag === 7) {
                                    n(p, C.sibling),
                                    h = i(C, m.props.children),
                                    h.return = p,
                                    p = h;
                                    break e
                                }
                            } else if (C.elementType === w || typeof w == "object" && w !== null && w.$$typeof === wt && nc(w) === C.type) {
                                n(p, C.sibling),
                                h = i(C, m.props),
                                h.ref = ir(p, C, m),
                                h.return = p,
                                p = h;
                                break e
                            }
                            n(p, C);
                            break
                        } else
                            t(p, C);
                        C = C.sibling
                    }
                    m.type === pn ? (h = tn(m.props.children, p.mode, S, m.key),
                    h.return = p,
                    p = h) : (S = $i(m.type, m.key, m.props, null, p.mode, S),
                    S.ref = ir(p, h, m),
                    S.return = p,
                    p = S)
                }
                return o(p);
            case hn:
                e: {
                    for (C = m.key; h !== null; ) {
                        if (h.key === C)
                            if (h.tag === 4 && h.stateNode.containerInfo === m.containerInfo && h.stateNode.implementation === m.implementation) {
                                n(p, h.sibling),
                                h = i(h, m.children || []),
                                h.return = p,
                                p = h;
                                break e
                            } else {
                                n(p, h);
                                break
                            }
                        else
                            t(p, h);
                        h = h.sibling
                    }
                    h = go(m, p.mode, S),
                    h.return = p,
                    p = h
                }
                return o(p);
            case wt:
                return C = m._init,
                E(p, h, C(m._payload), S)
            }
            if (ur(m))
                return g(p, h, m, S);
            if (qn(m))
                return x(p, h, m, S);
            Si(p, m)
        }
        return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m,
        h !== null && h.tag === 6 ? (n(p, h.sibling),
        h = i(h, m),
        h.return = p,
        p = h) : (n(p, h),
        h = yo(m, p.mode, S),
        h.return = p,
        p = h),
        o(p)) : n(p, h)
    }
    return E
}
var Bn = rh(!0)
  , ih = rh(!1)
  , os = zt(null)
  , as = null
  , Cn = null
  , ml = null;
function yl() {
    ml = Cn = as = null
}
function gl(e) {
    var t = os.current;
    U(os),
    e._currentValue = t
}
function la(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function Ln(e, t) {
    as = e,
    ml = Cn = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (Te = !0),
    e.firstContext = null)
}
function $e(e) {
    var t = e._currentValue;
    if (ml !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Cn === null) {
            if (as === null)
                throw Error(P(308));
            Cn = e,
            as.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Cn = Cn.next = e;
    return t
}
var Xt = null;
function vl(e) {
    Xt === null ? Xt = [e] : Xt.push(e)
}
function sh(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n,
    vl(t)) : (n.next = i.next,
    i.next = n),
    t.interleaved = n,
    dt(e, r)
}
function dt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var St = !1;
function xl(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function oh(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function ut(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function At(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    I & 2) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next,
        i.next = t),
        r.pending = t,
        dt(e, n)
    }
    return i = r.interleaved,
    i === null ? (t.next = t,
    vl(r)) : (t.next = i.next,
    i.next = t),
    r.interleaved = t,
    dt(e, n)
}
function _i(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        il(e, n)
    }
}
function rc(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var i = null
          , s = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                s === null ? i = s = o : s = s.next = o,
                n = n.next
            } while (n !== null);
            s === null ? i = s = t : s = s.next = t
        } else
            i = s = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: s,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function ls(e, t, n, r) {
    var i = e.updateQueue;
    St = !1;
    var s = i.firstBaseUpdate
      , o = i.lastBaseUpdate
      , a = i.shared.pending;
    if (a !== null) {
        i.shared.pending = null;
        var l = a
          , u = l.next;
        l.next = null,
        o === null ? s = u : o.next = u,
        o = l;
        var c = e.alternate;
        c !== null && (c = c.updateQueue,
        a = c.lastBaseUpdate,
        a !== o && (a === null ? c.firstBaseUpdate = u : a.next = u,
        c.lastBaseUpdate = l))
    }
    if (s !== null) {
        var f = i.baseState;
        o = 0,
        c = u = l = null,
        a = s;
        do {
            var d = a.lane
              , y = a.eventTime;
            if ((r & d) === d) {
                c !== null && (c = c.next = {
                    eventTime: y,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var g = e
                      , x = a;
                    switch (d = t,
                    y = n,
                    x.tag) {
                    case 1:
                        if (g = x.payload,
                        typeof g == "function") {
                            f = g.call(y, f, d);
                            break e
                        }
                        f = g;
                        break e;
                    case 3:
                        g.flags = g.flags & -65537 | 128;
                    case 0:
                        if (g = x.payload,
                        d = typeof g == "function" ? g.call(y, f, d) : g,
                        d == null)
                            break e;
                        f = Y({}, f, d);
                        break e;
                    case 2:
                        St = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64,
                d = i.effects,
                d === null ? i.effects = [a] : d.push(a))
            } else
                y = {
                    eventTime: y,
                    lane: d,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                },
                c === null ? (u = c = y,
                l = f) : c = c.next = y,
                o |= d;
            if (a = a.next,
            a === null) {
                if (a = i.shared.pending,
                a === null)
                    break;
                d = a,
                a = d.next,
                d.next = null,
                i.lastBaseUpdate = d,
                i.shared.pending = null
            }
        } while (!0);
        if (c === null && (l = f),
        i.baseState = l,
        i.firstBaseUpdate = u,
        i.lastBaseUpdate = c,
        t = i.shared.interleaved,
        t !== null) {
            i = t;
            do
                o |= i.lane,
                i = i.next;
            while (i !== t)
        } else
            s === null && (i.shared.lanes = 0);
        ln |= o,
        e.lanes = o,
        e.memoizedState = f
    }
}
function ic(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , i = r.callback;
            if (i !== null) {
                if (r.callback = null,
                r = n,
                typeof i != "function")
                    throw Error(P(191, i));
                i.call(r)
            }
        }
}
var ei = {}
  , nt = zt(ei)
  , Or = zt(ei)
  , zr = zt(ei);
function Zt(e) {
    if (e === ei)
        throw Error(P(174));
    return e
}
function wl(e, t) {
    switch (z(zr, t),
    z(Or, e),
    z(nt, ei),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : $o(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = $o(t, e)
    }
    U(nt),
    z(nt, t)
}
function Un() {
    U(nt),
    U(Or),
    U(zr)
}
function ah(e) {
    Zt(zr.current);
    var t = Zt(nt.current)
      , n = $o(t, e.type);
    t !== n && (z(Or, e),
    z(nt, n))
}
function Sl(e) {
    Or.current === e && (U(nt),
    U(Or))
}
var K = zt(0);
function us(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var uo = [];
function Cl() {
    for (var e = 0; e < uo.length; e++)
        uo[e]._workInProgressVersionPrimary = null;
    uo.length = 0
}
var Ii = yt.ReactCurrentDispatcher
  , co = yt.ReactCurrentBatchConfig
  , an = 0
  , G = null
  , re = null
  , oe = null
  , cs = !1
  , vr = !1
  , Br = 0
  , Dg = 0;
function de() {
    throw Error(P(321))
}
function Tl(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Ze(e[n], t[n]))
            return !1;
    return !0
}
function kl(e, t, n, r, i, s) {
    if (an = s,
    G = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    Ii.current = e === null || e.memoizedState === null ? Ng : Vg,
    e = n(r, i),
    vr) {
        s = 0;
        do {
            if (vr = !1,
            Br = 0,
            25 <= s)
                throw Error(P(301));
            s += 1,
            oe = re = null,
            t.updateQueue = null,
            Ii.current = Lg,
            e = n(r, i)
        } while (vr)
    }
    if (Ii.current = fs,
    t = re !== null && re.next !== null,
    an = 0,
    oe = re = G = null,
    cs = !1,
    t)
        throw Error(P(300));
    return e
}
function Pl() {
    var e = Br !== 0;
    return Br = 0,
    e
}
function qe() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return oe === null ? G.memoizedState = oe = e : oe = oe.next = e,
    oe
}
function We() {
    if (re === null) {
        var e = G.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = re.next;
    var t = oe === null ? G.memoizedState : oe.next;
    if (t !== null)
        oe = t,
        re = e;
    else {
        if (e === null)
            throw Error(P(310));
        re = e,
        e = {
            memoizedState: re.memoizedState,
            baseState: re.baseState,
            baseQueue: re.baseQueue,
            queue: re.queue,
            next: null
        },
        oe === null ? G.memoizedState = oe = e : oe = oe.next = e
    }
    return oe
}
function Ur(e, t) {
    return typeof t == "function" ? t(e) : t
}
function fo(e) {
    var t = We()
      , n = t.queue;
    if (n === null)
        throw Error(P(311));
    n.lastRenderedReducer = e;
    var r = re
      , i = r.baseQueue
      , s = n.pending;
    if (s !== null) {
        if (i !== null) {
            var o = i.next;
            i.next = s.next,
            s.next = o
        }
        r.baseQueue = i = s,
        n.pending = null
    }
    if (i !== null) {
        s = i.next,
        r = r.baseState;
        var a = o = null
          , l = null
          , u = s;
        do {
            var c = u.lane;
            if ((an & c) === c)
                l !== null && (l = l.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var f = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                l === null ? (a = l = f,
                o = r) : l = l.next = f,
                G.lanes |= c,
                ln |= c
            }
            u = u.next
        } while (u !== null && u !== s);
        l === null ? o = r : l.next = a,
        Ze(r, t.memoizedState) || (Te = !0),
        t.memoizedState = r,
        t.baseState = o,
        t.baseQueue = l,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        i = e;
        do
            s = i.lane,
            G.lanes |= s,
            ln |= s,
            i = i.next;
        while (i !== e)
    } else
        i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function ho(e) {
    var t = We()
      , n = t.queue;
    if (n === null)
        throw Error(P(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , i = n.pending
      , s = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var o = i = i.next;
        do
            s = e(s, o.action),
            o = o.next;
        while (o !== i);
        Ze(s, t.memoizedState) || (Te = !0),
        t.memoizedState = s,
        t.baseQueue === null && (t.baseState = s),
        n.lastRenderedState = s
    }
    return [s, r]
}
function lh() {}
function uh(e, t) {
    var n = G
      , r = We()
      , i = t()
      , s = !Ze(r.memoizedState, i);
    if (s && (r.memoizedState = i,
    Te = !0),
    r = r.queue,
    El(dh.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || oe !== null && oe.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        $r(9, fh.bind(null, n, r, i, t), void 0, null),
        ae === null)
            throw Error(P(349));
        an & 30 || ch(n, t, i)
    }
    return i
}
function ch(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = G.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    G.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function fh(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    hh(t) && ph(e)
}
function dh(e, t, n) {
    return n(function() {
        hh(t) && ph(e)
    })
}
function hh(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Ze(e, n)
    } catch {
        return !0
    }
}
function ph(e) {
    var t = dt(e, 1);
    t !== null && Xe(t, e, 1, -1)
}
function sc(e) {
    var t = qe();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ur,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = jg.bind(null, G, e),
    [t.memoizedState, e]
}
function $r(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = G.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    G.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function mh() {
    return We().memoizedState
}
function Oi(e, t, n, r) {
    var i = qe();
    G.flags |= e,
    i.memoizedState = $r(1 | t, n, void 0, r === void 0 ? null : r)
}
function js(e, t, n, r) {
    var i = We();
    r = r === void 0 ? null : r;
    var s = void 0;
    if (re !== null) {
        var o = re.memoizedState;
        if (s = o.destroy,
        r !== null && Tl(r, o.deps)) {
            i.memoizedState = $r(t, n, s, r);
            return
        }
    }
    G.flags |= e,
    i.memoizedState = $r(1 | t, n, s, r)
}
function oc(e, t) {
    return Oi(8390656, 8, e, t)
}
function El(e, t) {
    return js(2048, 8, e, t)
}
function yh(e, t) {
    return js(4, 2, e, t)
}
function gh(e, t) {
    return js(4, 4, e, t)
}
function vh(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function xh(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    js(4, 4, vh.bind(null, t, e), n)
}
function Ml() {}
function wh(e, t) {
    var n = We();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Tl(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function Sh(e, t) {
    var n = We();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Tl(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function Ch(e, t, n) {
    return an & 21 ? (Ze(n, t) || (n = Md(),
    G.lanes |= n,
    ln |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    Te = !0),
    e.memoizedState = n)
}
function Fg(e, t) {
    var n = O;
    O = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = co.transition;
    co.transition = {};
    try {
        e(!1),
        t()
    } finally {
        O = n,
        co.transition = r
    }
}
function Th() {
    return We().memoizedState
}
function Ag(e, t, n) {
    var r = Nt(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    kh(e))
        Ph(t, n);
    else if (n = sh(e, t, n, r),
    n !== null) {
        var i = xe();
        Xe(n, e, r, i),
        Eh(n, t, r)
    }
}
function jg(e, t, n) {
    var r = Nt(e)
      , i = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (kh(e))
        Ph(t, i);
    else {
        var s = e.alternate;
        if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer,
        s !== null))
            try {
                var o = t.lastRenderedState
                  , a = s(o, n);
                if (i.hasEagerState = !0,
                i.eagerState = a,
                Ze(a, o)) {
                    var l = t.interleaved;
                    l === null ? (i.next = i,
                    vl(t)) : (i.next = l.next,
                    l.next = i),
                    t.interleaved = i;
                    return
                }
            } catch {} finally {}
        n = sh(e, t, i, r),
        n !== null && (i = xe(),
        Xe(n, e, r, i),
        Eh(n, t, r))
    }
}
function kh(e) {
    var t = e.alternate;
    return e === G || t !== null && t === G
}
function Ph(e, t) {
    vr = cs = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function Eh(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        il(e, n)
    }
}
var fs = {
    readContext: $e,
    useCallback: de,
    useContext: de,
    useEffect: de,
    useImperativeHandle: de,
    useInsertionEffect: de,
    useLayoutEffect: de,
    useMemo: de,
    useReducer: de,
    useRef: de,
    useState: de,
    useDebugValue: de,
    useDeferredValue: de,
    useTransition: de,
    useMutableSource: de,
    useSyncExternalStore: de,
    useId: de,
    unstable_isNewReconciler: !1
}
  , Ng = {
    readContext: $e,
    useCallback: function(e, t) {
        return qe().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: $e,
    useEffect: oc,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        Oi(4194308, 4, vh.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return Oi(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return Oi(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = qe();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = qe();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = Ag.bind(null, G, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = qe();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: sc,
    useDebugValue: Ml,
    useDeferredValue: function(e) {
        return qe().memoizedState = e
    },
    useTransition: function() {
        var e = sc(!1)
          , t = e[0];
        return e = Fg.bind(null, e[1]),
        qe().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = G
          , i = qe();
        if ($) {
            if (n === void 0)
                throw Error(P(407));
            n = n()
        } else {
            if (n = t(),
            ae === null)
                throw Error(P(349));
            an & 30 || ch(r, t, n)
        }
        i.memoizedState = n;
        var s = {
            value: n,
            getSnapshot: t
        };
        return i.queue = s,
        oc(dh.bind(null, r, s, e), [e]),
        r.flags |= 2048,
        $r(9, fh.bind(null, r, s, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = qe()
          , t = ae.identifierPrefix;
        if ($) {
            var n = lt
              , r = at;
            n = (r & ~(1 << 32 - Qe(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = Br++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = Dg++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , Vg = {
    readContext: $e,
    useCallback: wh,
    useContext: $e,
    useEffect: El,
    useImperativeHandle: xh,
    useInsertionEffect: yh,
    useLayoutEffect: gh,
    useMemo: Sh,
    useReducer: fo,
    useRef: mh,
    useState: function() {
        return fo(Ur)
    },
    useDebugValue: Ml,
    useDeferredValue: function(e) {
        var t = We();
        return Ch(t, re.memoizedState, e)
    },
    useTransition: function() {
        var e = fo(Ur)[0]
          , t = We().memoizedState;
        return [e, t]
    },
    useMutableSource: lh,
    useSyncExternalStore: uh,
    useId: Th,
    unstable_isNewReconciler: !1
}
  , Lg = {
    readContext: $e,
    useCallback: wh,
    useContext: $e,
    useEffect: El,
    useImperativeHandle: xh,
    useInsertionEffect: yh,
    useLayoutEffect: gh,
    useMemo: Sh,
    useReducer: ho,
    useRef: mh,
    useState: function() {
        return ho(Ur)
    },
    useDebugValue: Ml,
    useDeferredValue: function(e) {
        var t = We();
        return re === null ? t.memoizedState = e : Ch(t, re.memoizedState, e)
    },
    useTransition: function() {
        var e = ho(Ur)[0]
          , t = We().memoizedState;
        return [e, t]
    },
    useMutableSource: lh,
    useSyncExternalStore: uh,
    useId: Th,
    unstable_isNewReconciler: !1
};
function be(e, t) {
    if (e && e.defaultProps) {
        t = Y({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function ua(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : Y({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Ns = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? fn(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = xe()
          , i = Nt(e)
          , s = ut(r, i);
        s.payload = t,
        n != null && (s.callback = n),
        t = At(e, s, i),
        t !== null && (Xe(t, e, i, r),
        _i(t, e, i))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = xe()
          , i = Nt(e)
          , s = ut(r, i);
        s.tag = 1,
        s.payload = t,
        n != null && (s.callback = n),
        t = At(e, s, i),
        t !== null && (Xe(t, e, i, r),
        _i(t, e, i))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = xe()
          , r = Nt(e)
          , i = ut(n, r);
        i.tag = 2,
        t != null && (i.callback = t),
        t = At(e, i, r),
        t !== null && (Xe(t, e, r, n),
        _i(t, e, r))
    }
};
function ac(e, t, n, r, i, s, o) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, o) : t.prototype && t.prototype.isPureReactComponent ? !Lr(n, r) || !Lr(i, s) : !0
}
function Mh(e, t, n) {
    var r = !1
      , i = Rt
      , s = t.contextType;
    return typeof s == "object" && s !== null ? s = $e(s) : (i = Ee(t) ? sn : ye.current,
    r = t.contextTypes,
    s = (r = r != null) ? On(e, i) : Rt),
    t = new t(n,s),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = Ns,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = i,
    e.__reactInternalMemoizedMaskedChildContext = s),
    t
}
function lc(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ns.enqueueReplaceState(t, t.state, null)
}
function ca(e, t, n, r) {
    var i = e.stateNode;
    i.props = n,
    i.state = e.memoizedState,
    i.refs = {},
    xl(e);
    var s = t.contextType;
    typeof s == "object" && s !== null ? i.context = $e(s) : (s = Ee(t) ? sn : ye.current,
    i.context = On(e, s)),
    i.state = e.memoizedState,
    s = t.getDerivedStateFromProps,
    typeof s == "function" && (ua(e, t, s, n),
    i.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state,
    typeof i.componentWillMount == "function" && i.componentWillMount(),
    typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
    t !== i.state && Ns.enqueueReplaceState(i, i.state, null),
    ls(e, n, i, r),
    i.state = e.memoizedState),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}
function $n(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += ly(r),
            r = r.return;
        while (r);
        var i = n
    } catch (s) {
        i = `
Error generating stack: ` + s.message + `
` + s.stack
    }
    return {
        value: e,
        source: t,
        stack: i,
        digest: null
    }
}
function po(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function fa(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var Rg = typeof WeakMap == "function" ? WeakMap : Map;
function Dh(e, t, n) {
    n = ut(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        hs || (hs = !0,
        Sa = r),
        fa(e, t)
    }
    ,
    n
}
function Fh(e, t, n) {
    n = ut(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function() {
            return r(i)
        }
        ,
        n.callback = function() {
            fa(e, t)
        }
    }
    var s = e.stateNode;
    return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
        fa(e, t),
        typeof r != "function" && (jt === null ? jt = new Set([this]) : jt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : ""
        })
    }
    ),
    n
}
function uc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Rg;
        var i = new Set;
        r.set(t, i)
    } else
        i = r.get(t),
        i === void 0 && (i = new Set,
        r.set(t, i));
    i.has(n) || (i.add(n),
    e = Qg.bind(null, e, t, n),
    t.then(e, e))
}
function cc(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function fc(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = i,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = ut(-1, 1),
    t.tag = 2,
    At(n, t, 1))),
    n.lanes |= 1),
    e)
}
var _g = yt.ReactCurrentOwner
  , Te = !1;
function ge(e, t, n, r) {
    t.child = e === null ? ih(t, null, n, r) : Bn(t, e.child, n, r)
}
function dc(e, t, n, r, i) {
    n = n.render;
    var s = t.ref;
    return Ln(t, i),
    r = kl(e, t, n, r, s, i),
    n = Pl(),
    e !== null && !Te ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    ht(e, t, i)) : ($ && n && dl(t),
    t.flags |= 1,
    ge(e, t, r, i),
    t.child)
}
function hc(e, t, n, r, i) {
    if (e === null) {
        var s = n.type;
        return typeof s == "function" && !Rl(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = s,
        Ah(e, t, s, r, i)) : (e = $i(n.type, null, r, t, t.mode, i),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (s = e.child,
    !(e.lanes & i)) {
        var o = s.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : Lr,
        n(o, r) && e.ref === t.ref)
            return ht(e, t, i)
    }
    return t.flags |= 1,
    e = Vt(s, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function Ah(e, t, n, r, i) {
    if (e !== null) {
        var s = e.memoizedProps;
        if (Lr(s, r) && e.ref === t.ref)
            if (Te = !1,
            t.pendingProps = r = s,
            (e.lanes & i) !== 0)
                e.flags & 131072 && (Te = !0);
            else
                return t.lanes = e.lanes,
                ht(e, t, i)
    }
    return da(e, t, n, r, i)
}
function jh(e, t, n) {
    var r = t.pendingProps
      , i = r.children
      , s = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            z(kn, De),
            De |= n;
        else {
            if (!(n & 1073741824))
                return e = s !== null ? s.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                z(kn, De),
                De |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = s !== null ? s.baseLanes : n,
            z(kn, De),
            De |= r
        }
    else
        s !== null ? (r = s.baseLanes | n,
        t.memoizedState = null) : r = n,
        z(kn, De),
        De |= r;
    return ge(e, t, i, n),
    t.child
}
function Nh(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function da(e, t, n, r, i) {
    var s = Ee(n) ? sn : ye.current;
    return s = On(t, s),
    Ln(t, i),
    n = kl(e, t, n, r, s, i),
    r = Pl(),
    e !== null && !Te ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    ht(e, t, i)) : ($ && r && dl(t),
    t.flags |= 1,
    ge(e, t, n, i),
    t.child)
}
function pc(e, t, n, r, i) {
    if (Ee(n)) {
        var s = !0;
        rs(t)
    } else
        s = !1;
    if (Ln(t, i),
    t.stateNode === null)
        zi(e, t),
        Mh(t, n, r),
        ca(t, n, r, i),
        r = !0;
    else if (e === null) {
        var o = t.stateNode
          , a = t.memoizedProps;
        o.props = a;
        var l = o.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = $e(u) : (u = Ee(n) ? sn : ye.current,
        u = On(t, u));
        var c = n.getDerivedStateFromProps
          , f = typeof c == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        f || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== r || l !== u) && lc(t, o, r, u),
        St = !1;
        var d = t.memoizedState;
        o.state = d,
        ls(t, r, o, i),
        l = t.memoizedState,
        a !== r || d !== l || Pe.current || St ? (typeof c == "function" && (ua(t, n, c, r),
        l = t.memoizedState),
        (a = St || ac(t, n, a, r, d, l, u)) ? (f || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(),
        typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()),
        typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = l),
        o.props = r,
        o.state = l,
        o.context = u,
        r = a) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        o = t.stateNode,
        oh(e, t),
        a = t.memoizedProps,
        u = t.type === t.elementType ? a : be(t.type, a),
        o.props = u,
        f = t.pendingProps,
        d = o.context,
        l = n.contextType,
        typeof l == "object" && l !== null ? l = $e(l) : (l = Ee(n) ? sn : ye.current,
        l = On(t, l));
        var y = n.getDerivedStateFromProps;
        (c = typeof y == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== f || d !== l) && lc(t, o, r, l),
        St = !1,
        d = t.memoizedState,
        o.state = d,
        ls(t, r, o, i);
        var g = t.memoizedState;
        a !== f || d !== g || Pe.current || St ? (typeof y == "function" && (ua(t, n, y, r),
        g = t.memoizedState),
        (u = St || ac(t, n, u, r, d, g, l) || !1) ? (c || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, g, l),
        typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, g, l)),
        typeof o.componentDidUpdate == "function" && (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = g),
        o.props = r,
        o.state = g,
        o.context = l,
        r = u) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return ha(e, t, n, r, s, i)
}
function ha(e, t, n, r, i, s) {
    Nh(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o)
        return i && qu(t, n, !1),
        ht(e, t, s);
    r = t.stateNode,
    _g.current = t;
    var a = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && o ? (t.child = Bn(t, e.child, null, s),
    t.child = Bn(t, null, a, s)) : ge(e, t, a, s),
    t.memoizedState = r.state,
    i && qu(t, n, !0),
    t.child
}
function Vh(e) {
    var t = e.stateNode;
    t.pendingContext ? Ju(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ju(e, t.context, !1),
    wl(e, t.containerInfo)
}
function mc(e, t, n, r, i) {
    return zn(),
    pl(i),
    t.flags |= 256,
    ge(e, t, n, r),
    t.child
}
var pa = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function ma(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function Lh(e, t, n) {
    var r = t.pendingProps, i = K.current, s = !1, o = (t.flags & 128) !== 0, a;
    if ((a = o) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a ? (s = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1),
    z(K, i & 1),
    e === null)
        return aa(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (o = r.children,
        e = r.fallback,
        s ? (r = t.mode,
        s = t.child,
        o = {
            mode: "hidden",
            children: o
        },
        !(r & 1) && s !== null ? (s.childLanes = 0,
        s.pendingProps = o) : s = Rs(o, r, 0, null),
        e = tn(e, r, n, null),
        s.return = t,
        e.return = t,
        s.sibling = e,
        t.child = s,
        t.child.memoizedState = ma(n),
        t.memoizedState = pa,
        e) : Dl(t, o));
    if (i = e.memoizedState,
    i !== null && (a = i.dehydrated,
    a !== null))
        return Ig(e, t, o, r, a, i, n);
    if (s) {
        s = r.fallback,
        o = t.mode,
        i = e.child,
        a = i.sibling;
        var l = {
            mode: "hidden",
            children: r.children
        };
        return !(o & 1) && t.child !== i ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = l,
        t.deletions = null) : (r = Vt(i, l),
        r.subtreeFlags = i.subtreeFlags & 14680064),
        a !== null ? s = Vt(a, s) : (s = tn(s, o, n, null),
        s.flags |= 2),
        s.return = t,
        r.return = t,
        r.sibling = s,
        t.child = r,
        r = s,
        s = t.child,
        o = e.child.memoizedState,
        o = o === null ? ma(n) : {
            baseLanes: o.baseLanes | n,
            cachePool: null,
            transitions: o.transitions
        },
        s.memoizedState = o,
        s.childLanes = e.childLanes & ~n,
        t.memoizedState = pa,
        r
    }
    return s = e.child,
    e = s.sibling,
    r = Vt(s, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function Dl(e, t) {
    return t = Rs({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function Ci(e, t, n, r) {
    return r !== null && pl(r),
    Bn(t, e.child, null, n),
    e = Dl(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function Ig(e, t, n, r, i, s, o) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = po(Error(P(422))),
        Ci(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (s = r.fallback,
        i = t.mode,
        r = Rs({
            mode: "visible",
            children: r.children
        }, i, 0, null),
        s = tn(s, i, o, null),
        s.flags |= 2,
        r.return = t,
        s.return = t,
        r.sibling = s,
        t.child = r,
        t.mode & 1 && Bn(t, e.child, null, o),
        t.child.memoizedState = ma(o),
        t.memoizedState = pa,
        s);
    if (!(t.mode & 1))
        return Ci(e, t, o, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset,
        r)
            var a = r.dgst;
        return r = a,
        s = Error(P(419)),
        r = po(s, r, void 0),
        Ci(e, t, o, r)
    }
    if (a = (o & e.childLanes) !== 0,
    Te || a) {
        if (r = ae,
        r !== null) {
            switch (o & -o) {
            case 4:
                i = 2;
                break;
            case 16:
                i = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                i = 32;
                break;
            case 536870912:
                i = 268435456;
                break;
            default:
                i = 0
            }
            i = i & (r.suspendedLanes | o) ? 0 : i,
            i !== 0 && i !== s.retryLane && (s.retryLane = i,
            dt(e, i),
            Xe(r, e, i, -1))
        }
        return Ll(),
        r = po(Error(P(421))),
        Ci(e, t, o, r)
    }
    return i.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = Xg.bind(null, e),
    i._reactRetry = t,
    null) : (e = s.treeContext,
    Fe = Ft(i.nextSibling),
    Ae = t,
    $ = !0,
    Ye = null,
    e !== null && (_e[Ie++] = at,
    _e[Ie++] = lt,
    _e[Ie++] = on,
    at = e.id,
    lt = e.overflow,
    on = t),
    t = Dl(t, r.children),
    t.flags |= 4096,
    t)
}
function yc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    la(e.return, t, n)
}
function mo(e, t, n, r, i) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (s.isBackwards = t,
    s.rendering = null,
    s.renderingStartTime = 0,
    s.last = r,
    s.tail = n,
    s.tailMode = i)
}
function Rh(e, t, n) {
    var r = t.pendingProps
      , i = r.revealOrder
      , s = r.tail;
    if (ge(e, t, r.children, n),
    r = K.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && yc(e, n, t);
                else if (e.tag === 19)
                    yc(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (z(K, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (i) {
        case "forwards":
            for (n = t.child,
            i = null; n !== null; )
                e = n.alternate,
                e !== null && us(e) === null && (i = n),
                n = n.sibling;
            n = i,
            n === null ? (i = t.child,
            t.child = null) : (i = n.sibling,
            n.sibling = null),
            mo(t, !1, i, n, s);
            break;
        case "backwards":
            for (n = null,
            i = t.child,
            t.child = null; i !== null; ) {
                if (e = i.alternate,
                e !== null && us(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling,
                i.sibling = n,
                n = i,
                i = e
            }
            mo(t, !0, n, null, s);
            break;
        case "together":
            mo(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function zi(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function ht(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    ln |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(P(153));
    if (t.child !== null) {
        for (e = t.child,
        n = Vt(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = Vt(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function Og(e, t, n) {
    switch (t.tag) {
    case 3:
        Vh(t),
        zn();
        break;
    case 5:
        ah(t);
        break;
    case 1:
        Ee(t.type) && rs(t);
        break;
    case 4:
        wl(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , i = t.memoizedProps.value;
        z(os, r._currentValue),
        r._currentValue = i;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (z(K, K.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? Lh(e, t, n) : (z(K, K.current & 1),
            e = ht(e, t, n),
            e !== null ? e.sibling : null);
        z(K, K.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return Rh(e, t, n);
            t.flags |= 128
        }
        if (i = t.memoizedState,
        i !== null && (i.rendering = null,
        i.tail = null,
        i.lastEffect = null),
        z(K, K.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        jh(e, t, n)
    }
    return ht(e, t, n)
}
var _h, ya, Ih, Oh;
_h = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
ya = function() {}
;
Ih = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode,
        Zt(nt.current);
        var s = null;
        switch (n) {
        case "input":
            i = Oo(e, i),
            r = Oo(e, r),
            s = [];
            break;
        case "select":
            i = Y({}, i, {
                value: void 0
            }),
            r = Y({}, r, {
                value: void 0
            }),
            s = [];
            break;
        case "textarea":
            i = Uo(e, i),
            r = Uo(e, r),
            s = [];
            break;
        default:
            typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ts)
        }
        Wo(n, r);
        var o;
        n = null;
        for (u in i)
            if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
                if (u === "style") {
                    var a = i[u];
                    for (o in a)
                        a.hasOwnProperty(o) && (n || (n = {}),
                        n[o] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Mr.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
        for (u in r) {
            var l = r[u];
            if (a = i != null ? i[u] : void 0,
            r.hasOwnProperty(u) && l !== a && (l != null || a != null))
                if (u === "style")
                    if (a) {
                        for (o in a)
                            !a.hasOwnProperty(o) || l && l.hasOwnProperty(o) || (n || (n = {}),
                            n[o] = "");
                        for (o in l)
                            l.hasOwnProperty(o) && a[o] !== l[o] && (n || (n = {}),
                            n[o] = l[o])
                    } else
                        n || (s || (s = []),
                        s.push(u, n)),
                        n = l;
                else
                    u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                    a = a ? a.__html : void 0,
                    l != null && a !== l && (s = s || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (s = s || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Mr.hasOwnProperty(u) ? (l != null && u === "onScroll" && B("scroll", e),
                    s || a === l || (s = [])) : (s = s || []).push(u, l))
        }
        n && (s = s || []).push("style", n);
        var u = s;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
Oh = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function sr(e, t) {
    if (!$)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function he(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags & 14680064,
            r |= i.flags & 14680064,
            i.return = e,
            i = i.sibling;
    else
        for (i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags,
            r |= i.flags,
            i.return = e,
            i = i.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function zg(e, t, n) {
    var r = t.pendingProps;
    switch (hl(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return he(t),
        null;
    case 1:
        return Ee(t.type) && ns(),
        he(t),
        null;
    case 3:
        return r = t.stateNode,
        Un(),
        U(Pe),
        U(ye),
        Cl(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (wi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        Ye !== null && (ka(Ye),
        Ye = null))),
        ya(e, t),
        he(t),
        null;
    case 5:
        Sl(t);
        var i = Zt(zr.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            Ih(e, t, n, r, i),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(P(166));
                return he(t),
                null
            }
            if (e = Zt(nt.current),
            wi(t)) {
                r = t.stateNode,
                n = t.type;
                var s = t.memoizedProps;
                switch (r[et] = t,
                r[Ir] = s,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    B("cancel", r),
                    B("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    B("load", r);
                    break;
                case "video":
                case "audio":
                    for (i = 0; i < fr.length; i++)
                        B(fr[i], r);
                    break;
                case "source":
                    B("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    B("error", r),
                    B("load", r);
                    break;
                case "details":
                    B("toggle", r);
                    break;
                case "input":
                    Pu(r, s),
                    B("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!s.multiple
                    },
                    B("invalid", r);
                    break;
                case "textarea":
                    Mu(r, s),
                    B("invalid", r)
                }
                Wo(n, s),
                i = null;
                for (var o in s)
                    if (s.hasOwnProperty(o)) {
                        var a = s[o];
                        o === "children" ? typeof a == "string" ? r.textContent !== a && (s.suppressHydrationWarning !== !0 && xi(r.textContent, a, e),
                        i = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (s.suppressHydrationWarning !== !0 && xi(r.textContent, a, e),
                        i = ["children", "" + a]) : Mr.hasOwnProperty(o) && a != null && o === "onScroll" && B("scroll", r)
                    }
                switch (n) {
                case "input":
                    fi(r),
                    Eu(r, s, !0);
                    break;
                case "textarea":
                    fi(r),
                    Du(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof s.onClick == "function" && (r.onclick = ts)
                }
                r = i,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                o = i.nodeType === 9 ? i : i.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = dd(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, {
                    is: r.is
                }) : (e = o.createElement(n),
                n === "select" && (o = e,
                r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n),
                e[et] = t,
                e[Ir] = r,
                _h(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (o = Ho(n, r),
                    n) {
                    case "dialog":
                        B("cancel", e),
                        B("close", e),
                        i = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        B("load", e),
                        i = r;
                        break;
                    case "video":
                    case "audio":
                        for (i = 0; i < fr.length; i++)
                            B(fr[i], e);
                        i = r;
                        break;
                    case "source":
                        B("error", e),
                        i = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        B("error", e),
                        B("load", e),
                        i = r;
                        break;
                    case "details":
                        B("toggle", e),
                        i = r;
                        break;
                    case "input":
                        Pu(e, r),
                        i = Oo(e, r),
                        B("invalid", e);
                        break;
                    case "option":
                        i = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        i = Y({}, r, {
                            value: void 0
                        }),
                        B("invalid", e);
                        break;
                    case "textarea":
                        Mu(e, r),
                        i = Uo(e, r),
                        B("invalid", e);
                        break;
                    default:
                        i = r
                    }
                    Wo(n, i),
                    a = i;
                    for (s in a)
                        if (a.hasOwnProperty(s)) {
                            var l = a[s];
                            s === "style" ? md(e, l) : s === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                            l != null && hd(e, l)) : s === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Dr(e, l) : typeof l == "number" && Dr(e, "" + l) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (Mr.hasOwnProperty(s) ? l != null && s === "onScroll" && B("scroll", e) : l != null && Ja(e, s, l, o))
                        }
                    switch (n) {
                    case "input":
                        fi(e),
                        Eu(e, r, !1);
                        break;
                    case "textarea":
                        fi(e),
                        Du(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + Lt(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        s = r.value,
                        s != null ? An(e, !!r.multiple, s, !1) : r.defaultValue != null && An(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof i.onClick == "function" && (e.onclick = ts)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return he(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            Oh(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(P(166));
            if (n = Zt(zr.current),
            Zt(nt.current),
            wi(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[et] = t,
                (s = r.nodeValue !== n) && (e = Ae,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        xi(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && xi(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                s && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[et] = t,
                t.stateNode = r
        }
        return he(t),
        null;
    case 13:
        if (U(K),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if ($ && Fe !== null && t.mode & 1 && !(t.flags & 128))
                nh(),
                zn(),
                t.flags |= 98560,
                s = !1;
            else if (s = wi(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!s)
                        throw Error(P(318));
                    if (s = t.memoizedState,
                    s = s !== null ? s.dehydrated : null,
                    !s)
                        throw Error(P(317));
                    s[et] = t
                } else
                    zn(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                he(t),
                s = !1
            } else
                Ye !== null && (ka(Ye),
                Ye = null),
                s = !0;
            if (!s)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || K.current & 1 ? ie === 0 && (ie = 3) : Ll())),
        t.updateQueue !== null && (t.flags |= 4),
        he(t),
        null);
    case 4:
        return Un(),
        ya(e, t),
        e === null && Rr(t.stateNode.containerInfo),
        he(t),
        null;
    case 10:
        return gl(t.type._context),
        he(t),
        null;
    case 17:
        return Ee(t.type) && ns(),
        he(t),
        null;
    case 19:
        if (U(K),
        s = t.memoizedState,
        s === null)
            return he(t),
            null;
        if (r = (t.flags & 128) !== 0,
        o = s.rendering,
        o === null)
            if (r)
                sr(s, !1);
            else {
                if (ie !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (o = us(e),
                        o !== null) {
                            for (t.flags |= 128,
                            sr(s, !1),
                            r = o.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                s = n,
                                e = r,
                                s.flags &= 14680066,
                                o = s.alternate,
                                o === null ? (s.childLanes = 0,
                                s.lanes = e,
                                s.child = null,
                                s.subtreeFlags = 0,
                                s.memoizedProps = null,
                                s.memoizedState = null,
                                s.updateQueue = null,
                                s.dependencies = null,
                                s.stateNode = null) : (s.childLanes = o.childLanes,
                                s.lanes = o.lanes,
                                s.child = o.child,
                                s.subtreeFlags = 0,
                                s.deletions = null,
                                s.memoizedProps = o.memoizedProps,
                                s.memoizedState = o.memoizedState,
                                s.updateQueue = o.updateQueue,
                                s.type = o.type,
                                e = o.dependencies,
                                s.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return z(K, K.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                s.tail !== null && q() > Wn && (t.flags |= 128,
                r = !0,
                sr(s, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = us(o),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    sr(s, !0),
                    s.tail === null && s.tailMode === "hidden" && !o.alternate && !$)
                        return he(t),
                        null
                } else
                    2 * q() - s.renderingStartTime > Wn && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    sr(s, !1),
                    t.lanes = 4194304);
            s.isBackwards ? (o.sibling = t.child,
            t.child = o) : (n = s.last,
            n !== null ? n.sibling = o : t.child = o,
            s.last = o)
        }
        return s.tail !== null ? (t = s.tail,
        s.rendering = t,
        s.tail = t.sibling,
        s.renderingStartTime = q(),
        t.sibling = null,
        n = K.current,
        z(K, r ? n & 1 | 2 : n & 1),
        t) : (he(t),
        null);
    case 22:
    case 23:
        return Vl(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? De & 1073741824 && (he(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : he(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(P(156, t.tag))
}
function Bg(e, t) {
    switch (hl(t),
    t.tag) {
    case 1:
        return Ee(t.type) && ns(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return Un(),
        U(Pe),
        U(ye),
        Cl(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return Sl(t),
        null;
    case 13:
        if (U(K),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(P(340));
            zn()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return U(K),
        null;
    case 4:
        return Un(),
        null;
    case 10:
        return gl(t.type._context),
        null;
    case 22:
    case 23:
        return Vl(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Ti = !1
  , pe = !1
  , Ug = typeof WeakSet == "function" ? WeakSet : Set
  , F = null;
function Tn(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                X(e, t, r)
            }
        else
            n.current = null
}
function ga(e, t, n) {
    try {
        n()
    } catch (r) {
        X(e, t, r)
    }
}
var gc = !1;
function $g(e, t) {
    if (ea = Ji,
    e = Wd(),
    fl(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var i = r.anchorOffset
                      , s = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        s.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var o = 0
                      , a = -1
                      , l = -1
                      , u = 0
                      , c = 0
                      , f = e
                      , d = null;
                    t: for (; ; ) {
                        for (var y; f !== n || i !== 0 && f.nodeType !== 3 || (a = o + i),
                        f !== s || r !== 0 && f.nodeType !== 3 || (l = o + r),
                        f.nodeType === 3 && (o += f.nodeValue.length),
                        (y = f.firstChild) !== null; )
                            d = f,
                            f = y;
                        for (; ; ) {
                            if (f === e)
                                break t;
                            if (d === n && ++u === i && (a = o),
                            d === s && ++c === r && (l = o),
                            (y = f.nextSibling) !== null)
                                break;
                            f = d,
                            d = f.parentNode
                        }
                        f = y
                    }
                    n = a === -1 || l === -1 ? null : {
                        start: a,
                        end: l
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (ta = {
        focusedElem: e,
        selectionRange: n
    },
    Ji = !1,
    F = t; F !== null; )
        if (t = F,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            F = e;
        else
            for (; F !== null; ) {
                t = F;
                try {
                    var g = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (g !== null) {
                                var x = g.memoizedProps
                                  , E = g.memoizedState
                                  , p = t.stateNode
                                  , h = p.getSnapshotBeforeUpdate(t.elementType === t.type ? x : be(t.type, x), E);
                                p.__reactInternalSnapshotBeforeUpdate = h
                            }
                            break;
                        case 3:
                            var m = t.stateNode.containerInfo;
                            m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(P(163))
                        }
                } catch (S) {
                    X(t, t.return, S)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    F = e;
                    break
                }
                F = t.return
            }
    return g = gc,
    gc = !1,
    g
}
function xr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var s = i.destroy;
                i.destroy = void 0,
                s !== void 0 && ga(t, n, s)
            }
            i = i.next
        } while (i !== r)
    }
}
function Vs(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function va(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function zh(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    zh(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[et],
    delete t[Ir],
    delete t[ia],
    delete t[kg],
    delete t[Pg])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function Bh(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function vc(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || Bh(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function xa(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = ts));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (xa(e, t, n),
        e = e.sibling; e !== null; )
            xa(e, t, n),
            e = e.sibling
}
function wa(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (wa(e, t, n),
        e = e.sibling; e !== null; )
            wa(e, t, n),
            e = e.sibling
}
var le = null
  , Ge = !1;
function vt(e, t, n) {
    for (n = n.child; n !== null; )
        Uh(e, t, n),
        n = n.sibling
}
function Uh(e, t, n) {
    if (tt && typeof tt.onCommitFiberUnmount == "function")
        try {
            tt.onCommitFiberUnmount(Ps, n)
        } catch {}
    switch (n.tag) {
    case 5:
        pe || Tn(n, t);
    case 6:
        var r = le
          , i = Ge;
        le = null,
        vt(e, t, n),
        le = r,
        Ge = i,
        le !== null && (Ge ? (e = le,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : le.removeChild(n.stateNode));
        break;
    case 18:
        le !== null && (Ge ? (e = le,
        n = n.stateNode,
        e.nodeType === 8 ? ao(e.parentNode, n) : e.nodeType === 1 && ao(e, n),
        Nr(e)) : ao(le, n.stateNode));
        break;
    case 4:
        r = le,
        i = Ge,
        le = n.stateNode.containerInfo,
        Ge = !0,
        vt(e, t, n),
        le = r,
        Ge = i;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!pe && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            i = r = r.next;
            do {
                var s = i
                  , o = s.destroy;
                s = s.tag,
                o !== void 0 && (s & 2 || s & 4) && ga(n, t, o),
                i = i.next
            } while (i !== r)
        }
        vt(e, t, n);
        break;
    case 1:
        if (!pe && (Tn(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (a) {
                X(n, t, a)
            }
        vt(e, t, n);
        break;
    case 21:
        vt(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (pe = (r = pe) || n.memoizedState !== null,
        vt(e, t, n),
        pe = r) : vt(e, t, n);
        break;
    default:
        vt(e, t, n)
    }
}
function xc(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Ug),
        t.forEach(function(r) {
            var i = Zg.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(i, i))
        })
    }
}
function He(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var s = e
                  , o = t
                  , a = o;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                    case 5:
                        le = a.stateNode,
                        Ge = !1;
                        break e;
                    case 3:
                        le = a.stateNode.containerInfo,
                        Ge = !0;
                        break e;
                    case 4:
                        le = a.stateNode.containerInfo,
                        Ge = !0;
                        break e
                    }
                    a = a.return
                }
                if (le === null)
                    throw Error(P(160));
                Uh(s, o, i),
                le = null,
                Ge = !1;
                var l = i.alternate;
                l !== null && (l.return = null),
                i.return = null
            } catch (u) {
                X(i, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            $h(t, e),
            t = t.sibling
}
function $h(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (He(t, e),
        Je(e),
        r & 4) {
            try {
                xr(3, e, e.return),
                Vs(3, e)
            } catch (x) {
                X(e, e.return, x)
            }
            try {
                xr(5, e, e.return)
            } catch (x) {
                X(e, e.return, x)
            }
        }
        break;
    case 1:
        He(t, e),
        Je(e),
        r & 512 && n !== null && Tn(n, n.return);
        break;
    case 5:
        if (He(t, e),
        Je(e),
        r & 512 && n !== null && Tn(n, n.return),
        e.flags & 32) {
            var i = e.stateNode;
            try {
                Dr(i, "")
            } catch (x) {
                X(e, e.return, x)
            }
        }
        if (r & 4 && (i = e.stateNode,
        i != null)) {
            var s = e.memoizedProps
              , o = n !== null ? n.memoizedProps : s
              , a = e.type
              , l = e.updateQueue;
            if (e.updateQueue = null,
            l !== null)
                try {
                    a === "input" && s.type === "radio" && s.name != null && cd(i, s),
                    Ho(a, o);
                    var u = Ho(a, s);
                    for (o = 0; o < l.length; o += 2) {
                        var c = l[o]
                          , f = l[o + 1];
                        c === "style" ? md(i, f) : c === "dangerouslySetInnerHTML" ? hd(i, f) : c === "children" ? Dr(i, f) : Ja(i, c, f, u)
                    }
                    switch (a) {
                    case "input":
                        zo(i, s);
                        break;
                    case "textarea":
                        fd(i, s);
                        break;
                    case "select":
                        var d = i._wrapperState.wasMultiple;
                        i._wrapperState.wasMultiple = !!s.multiple;
                        var y = s.value;
                        y != null ? An(i, !!s.multiple, y, !1) : d !== !!s.multiple && (s.defaultValue != null ? An(i, !!s.multiple, s.defaultValue, !0) : An(i, !!s.multiple, s.multiple ? [] : "", !1))
                    }
                    i[Ir] = s
                } catch (x) {
                    X(e, e.return, x)
                }
        }
        break;
    case 6:
        if (He(t, e),
        Je(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(P(162));
            i = e.stateNode,
            s = e.memoizedProps;
            try {
                i.nodeValue = s
            } catch (x) {
                X(e, e.return, x)
            }
        }
        break;
    case 3:
        if (He(t, e),
        Je(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                Nr(t.containerInfo)
            } catch (x) {
                X(e, e.return, x)
            }
        break;
    case 4:
        He(t, e),
        Je(e);
        break;
    case 13:
        He(t, e),
        Je(e),
        i = e.child,
        i.flags & 8192 && (s = i.memoizedState !== null,
        i.stateNode.isHidden = s,
        !s || i.alternate !== null && i.alternate.memoizedState !== null || (jl = q())),
        r & 4 && xc(e);
        break;
    case 22:
        if (c = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (pe = (u = pe) || c,
        He(t, e),
        pe = u) : He(t, e),
        Je(e),
        r & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !c && e.mode & 1)
                for (F = e,
                c = e.child; c !== null; ) {
                    for (f = F = c; F !== null; ) {
                        switch (d = F,
                        y = d.child,
                        d.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            xr(4, d, d.return);
                            break;
                        case 1:
                            Tn(d, d.return);
                            var g = d.stateNode;
                            if (typeof g.componentWillUnmount == "function") {
                                r = d,
                                n = d.return;
                                try {
                                    t = r,
                                    g.props = t.memoizedProps,
                                    g.state = t.memoizedState,
                                    g.componentWillUnmount()
                                } catch (x) {
                                    X(r, n, x)
                                }
                            }
                            break;
                        case 5:
                            Tn(d, d.return);
                            break;
                        case 22:
                            if (d.memoizedState !== null) {
                                Sc(f);
                                continue
                            }
                        }
                        y !== null ? (y.return = d,
                        F = y) : Sc(f)
                    }
                    c = c.sibling
                }
            e: for (c = null,
            f = e; ; ) {
                if (f.tag === 5) {
                    if (c === null) {
                        c = f;
                        try {
                            i = f.stateNode,
                            u ? (s = i.style,
                            typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (a = f.stateNode,
                            l = f.memoizedProps.style,
                            o = l != null && l.hasOwnProperty("display") ? l.display : null,
                            a.style.display = pd("display", o))
                        } catch (x) {
                            X(e, e.return, x)
                        }
                    }
                } else if (f.tag === 6) {
                    if (c === null)
                        try {
                            f.stateNode.nodeValue = u ? "" : f.memoizedProps
                        } catch (x) {
                            X(e, e.return, x)
                        }
                } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
                    f.child.return = f,
                    f = f.child;
                    continue
                }
                if (f === e)
                    break e;
                for (; f.sibling === null; ) {
                    if (f.return === null || f.return === e)
                        break e;
                    c === f && (c = null),
                    f = f.return
                }
                c === f && (c = null),
                f.sibling.return = f.return,
                f = f.sibling
            }
        }
        break;
    case 19:
        He(t, e),
        Je(e),
        r & 4 && xc(e);
        break;
    case 21:
        break;
    default:
        He(t, e),
        Je(e)
    }
}
function Je(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (Bh(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(P(160))
            }
            switch (r.tag) {
            case 5:
                var i = r.stateNode;
                r.flags & 32 && (Dr(i, ""),
                r.flags &= -33);
                var s = vc(e);
                wa(e, s, i);
                break;
            case 3:
            case 4:
                var o = r.stateNode.containerInfo
                  , a = vc(e);
                xa(e, a, o);
                break;
            default:
                throw Error(P(161))
            }
        } catch (l) {
            X(e, e.return, l)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function Wg(e, t, n) {
    F = e,
    Wh(e)
}
function Wh(e, t, n) {
    for (var r = (e.mode & 1) !== 0; F !== null; ) {
        var i = F
          , s = i.child;
        if (i.tag === 22 && r) {
            var o = i.memoizedState !== null || Ti;
            if (!o) {
                var a = i.alternate
                  , l = a !== null && a.memoizedState !== null || pe;
                a = Ti;
                var u = pe;
                if (Ti = o,
                (pe = l) && !u)
                    for (F = i; F !== null; )
                        o = F,
                        l = o.child,
                        o.tag === 22 && o.memoizedState !== null ? Cc(i) : l !== null ? (l.return = o,
                        F = l) : Cc(i);
                for (; s !== null; )
                    F = s,
                    Wh(s),
                    s = s.sibling;
                F = i,
                Ti = a,
                pe = u
            }
            wc(e)
        } else
            i.subtreeFlags & 8772 && s !== null ? (s.return = i,
            F = s) : wc(e)
    }
}
function wc(e) {
    for (; F !== null; ) {
        var t = F;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        pe || Vs(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !pe)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var i = t.elementType === t.type ? n.memoizedProps : be(t.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var s = t.updateQueue;
                        s !== null && ic(t, s, r);
                        break;
                    case 3:
                        var o = t.updateQueue;
                        if (o !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            ic(t, o, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var l = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                l.autoFocus && n.focus();
                                break;
                            case "img":
                                l.src && (n.src = l.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var f = c.dehydrated;
                                    f !== null && Nr(f)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(P(163))
                    }
                pe || t.flags & 512 && va(t)
            } catch (d) {
                X(t, t.return, d)
            }
        }
        if (t === e) {
            F = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            F = n;
            break
        }
        F = t.return
    }
}
function Sc(e) {
    for (; F !== null; ) {
        var t = F;
        if (t === e) {
            F = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            F = n;
            break
        }
        F = t.return
    }
}
function Cc(e) {
    for (; F !== null; ) {
        var t = F;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    Vs(4, t)
                } catch (l) {
                    X(t, n, l)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var i = t.return;
                    try {
                        r.componentDidMount()
                    } catch (l) {
                        X(t, i, l)
                    }
                }
                var s = t.return;
                try {
                    va(t)
                } catch (l) {
                    X(t, s, l)
                }
                break;
            case 5:
                var o = t.return;
                try {
                    va(t)
                } catch (l) {
                    X(t, o, l)
                }
            }
        } catch (l) {
            X(t, t.return, l)
        }
        if (t === e) {
            F = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return,
            F = a;
            break
        }
        F = t.return
    }
}
var Hg = Math.ceil
  , ds = yt.ReactCurrentDispatcher
  , Fl = yt.ReactCurrentOwner
  , Be = yt.ReactCurrentBatchConfig
  , I = 0
  , ae = null
  , ne = null
  , ce = 0
  , De = 0
  , kn = zt(0)
  , ie = 0
  , Wr = null
  , ln = 0
  , Ls = 0
  , Al = 0
  , wr = null
  , Ce = null
  , jl = 0
  , Wn = 1 / 0
  , st = null
  , hs = !1
  , Sa = null
  , jt = null
  , ki = !1
  , Pt = null
  , ps = 0
  , Sr = 0
  , Ca = null
  , Bi = -1
  , Ui = 0;
function xe() {
    return I & 6 ? q() : Bi !== -1 ? Bi : Bi = q()
}
function Nt(e) {
    return e.mode & 1 ? I & 2 && ce !== 0 ? ce & -ce : Mg.transition !== null ? (Ui === 0 && (Ui = Md()),
    Ui) : (e = O,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : Ld(e.type)),
    e) : 1
}
function Xe(e, t, n, r) {
    if (50 < Sr)
        throw Sr = 0,
        Ca = null,
        Error(P(185));
    Zr(e, n, r),
    (!(I & 2) || e !== ae) && (e === ae && (!(I & 2) && (Ls |= n),
    ie === 4 && Tt(e, ce)),
    Me(e, r),
    n === 1 && I === 0 && !(t.mode & 1) && (Wn = q() + 500,
    As && Bt()))
}
function Me(e, t) {
    var n = e.callbackNode;
    My(e, t);
    var r = Zi(e, e === ae ? ce : 0);
    if (r === 0)
        n !== null && ju(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && ju(n),
        t === 1)
            e.tag === 0 ? Eg(Tc.bind(null, e)) : qd(Tc.bind(null, e)),
            Cg(function() {
                !(I & 6) && Bt()
            }),
            n = null;
        else {
            switch (Dd(r)) {
            case 1:
                n = rl;
                break;
            case 4:
                n = Pd;
                break;
            case 16:
                n = Xi;
                break;
            case 536870912:
                n = Ed;
                break;
            default:
                n = Xi
            }
            n = Zh(n, Hh.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function Hh(e, t) {
    if (Bi = -1,
    Ui = 0,
    I & 6)
        throw Error(P(327));
    var n = e.callbackNode;
    if (Rn() && e.callbackNode !== n)
        return null;
    var r = Zi(e, e === ae ? ce : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = ms(e, r);
    else {
        t = r;
        var i = I;
        I |= 2;
        var s = bh();
        (ae !== e || ce !== t) && (st = null,
        Wn = q() + 500,
        en(e, t));
        do
            try {
                Gg();
                break
            } catch (a) {
                Kh(e, a)
            }
        while (!0);
        yl(),
        ds.current = s,
        I = i,
        ne !== null ? t = 0 : (ae = null,
        ce = 0,
        t = ie)
    }
    if (t !== 0) {
        if (t === 2 && (i = Qo(e),
        i !== 0 && (r = i,
        t = Ta(e, i))),
        t === 1)
            throw n = Wr,
            en(e, 0),
            Tt(e, r),
            Me(e, q()),
            n;
        if (t === 6)
            Tt(e, r);
        else {
            if (i = e.current.alternate,
            !(r & 30) && !Kg(i) && (t = ms(e, r),
            t === 2 && (s = Qo(e),
            s !== 0 && (r = s,
            t = Ta(e, s))),
            t === 1))
                throw n = Wr,
                en(e, 0),
                Tt(e, r),
                Me(e, q()),
                n;
            switch (e.finishedWork = i,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(P(345));
            case 2:
                Gt(e, Ce, st);
                break;
            case 3:
                if (Tt(e, r),
                (r & 130023424) === r && (t = jl + 500 - q(),
                10 < t)) {
                    if (Zi(e, 0) !== 0)
                        break;
                    if (i = e.suspendedLanes,
                    (i & r) !== r) {
                        xe(),
                        e.pingedLanes |= e.suspendedLanes & i;
                        break
                    }
                    e.timeoutHandle = ra(Gt.bind(null, e, Ce, st), t);
                    break
                }
                Gt(e, Ce, st);
                break;
            case 4:
                if (Tt(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                i = -1; 0 < r; ) {
                    var o = 31 - Qe(r);
                    s = 1 << o,
                    o = t[o],
                    o > i && (i = o),
                    r &= ~s
                }
                if (r = i,
                r = q() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Hg(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = ra(Gt.bind(null, e, Ce, st), r);
                    break
                }
                Gt(e, Ce, st);
                break;
            case 5:
                Gt(e, Ce, st);
                break;
            default:
                throw Error(P(329))
            }
        }
    }
    return Me(e, q()),
    e.callbackNode === n ? Hh.bind(null, e) : null
}
function Ta(e, t) {
    var n = wr;
    return e.current.memoizedState.isDehydrated && (en(e, t).flags |= 256),
    e = ms(e, t),
    e !== 2 && (t = Ce,
    Ce = n,
    t !== null && ka(t)),
    e
}
function ka(e) {
    Ce === null ? Ce = e : Ce.push.apply(Ce, e)
}
function Kg(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r]
                      , s = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!Ze(s(), i))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function Tt(e, t) {
    for (t &= ~Al,
    t &= ~Ls,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Qe(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function Tc(e) {
    if (I & 6)
        throw Error(P(327));
    Rn();
    var t = Zi(e, 0);
    if (!(t & 1))
        return Me(e, q()),
        null;
    var n = ms(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Qo(e);
        r !== 0 && (t = r,
        n = Ta(e, r))
    }
    if (n === 1)
        throw n = Wr,
        en(e, 0),
        Tt(e, t),
        Me(e, q()),
        n;
    if (n === 6)
        throw Error(P(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    Gt(e, Ce, st),
    Me(e, q()),
    null
}
function Nl(e, t) {
    var n = I;
    I |= 1;
    try {
        return e(t)
    } finally {
        I = n,
        I === 0 && (Wn = q() + 500,
        As && Bt())
    }
}
function un(e) {
    Pt !== null && Pt.tag === 0 && !(I & 6) && Rn();
    var t = I;
    I |= 1;
    var n = Be.transition
      , r = O;
    try {
        if (Be.transition = null,
        O = 1,
        e)
            return e()
    } finally {
        O = r,
        Be.transition = n,
        I = t,
        !(I & 6) && Bt()
    }
}
function Vl() {
    De = kn.current,
    U(kn)
}
function en(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    Sg(n)),
    ne !== null)
        for (n = ne.return; n !== null; ) {
            var r = n;
            switch (hl(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && ns();
                break;
            case 3:
                Un(),
                U(Pe),
                U(ye),
                Cl();
                break;
            case 5:
                Sl(r);
                break;
            case 4:
                Un();
                break;
            case 13:
                U(K);
                break;
            case 19:
                U(K);
                break;
            case 10:
                gl(r.type._context);
                break;
            case 22:
            case 23:
                Vl()
            }
            n = n.return
        }
    if (ae = e,
    ne = e = Vt(e.current, null),
    ce = De = t,
    ie = 0,
    Wr = null,
    Al = Ls = ln = 0,
    Ce = wr = null,
    Xt !== null) {
        for (t = 0; t < Xt.length; t++)
            if (n = Xt[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var i = r.next
                  , s = n.pending;
                if (s !== null) {
                    var o = s.next;
                    s.next = i,
                    r.next = o
                }
                n.pending = r
            }
        Xt = null
    }
    return e
}
function Kh(e, t) {
    do {
        var n = ne;
        try {
            if (yl(),
            Ii.current = fs,
            cs) {
                for (var r = G.memoizedState; r !== null; ) {
                    var i = r.queue;
                    i !== null && (i.pending = null),
                    r = r.next
                }
                cs = !1
            }
            if (an = 0,
            oe = re = G = null,
            vr = !1,
            Br = 0,
            Fl.current = null,
            n === null || n.return === null) {
                ie = 1,
                Wr = t,
                ne = null;
                break
            }
            e: {
                var s = e
                  , o = n.return
                  , a = n
                  , l = t;
                if (t = ce,
                a.flags |= 32768,
                l !== null && typeof l == "object" && typeof l.then == "function") {
                    var u = l
                      , c = a
                      , f = c.tag;
                    if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var d = c.alternate;
                        d ? (c.updateQueue = d.updateQueue,
                        c.memoizedState = d.memoizedState,
                        c.lanes = d.lanes) : (c.updateQueue = null,
                        c.memoizedState = null)
                    }
                    var y = cc(o);
                    if (y !== null) {
                        y.flags &= -257,
                        fc(y, o, a, s, t),
                        y.mode & 1 && uc(s, u, t),
                        t = y,
                        l = u;
                        var g = t.updateQueue;
                        if (g === null) {
                            var x = new Set;
                            x.add(l),
                            t.updateQueue = x
                        } else
                            g.add(l);
                        break e
                    } else {
                        if (!(t & 1)) {
                            uc(s, u, t),
                            Ll();
                            break e
                        }
                        l = Error(P(426))
                    }
                } else if ($ && a.mode & 1) {
                    var E = cc(o);
                    if (E !== null) {
                        !(E.flags & 65536) && (E.flags |= 256),
                        fc(E, o, a, s, t),
                        pl($n(l, a));
                        break e
                    }
                }
                s = l = $n(l, a),
                ie !== 4 && (ie = 2),
                wr === null ? wr = [s] : wr.push(s),
                s = o;
                do {
                    switch (s.tag) {
                    case 3:
                        s.flags |= 65536,
                        t &= -t,
                        s.lanes |= t;
                        var p = Dh(s, l, t);
                        rc(s, p);
                        break e;
                    case 1:
                        a = l;
                        var h = s.type
                          , m = s.stateNode;
                        if (!(s.flags & 128) && (typeof h.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (jt === null || !jt.has(m)))) {
                            s.flags |= 65536,
                            t &= -t,
                            s.lanes |= t;
                            var S = Fh(s, a, t);
                            rc(s, S);
                            break e
                        }
                    }
                    s = s.return
                } while (s !== null)
            }
            Yh(n)
        } catch (w) {
            t = w,
            ne === n && n !== null && (ne = n = n.return);
            continue
        }
        break
    } while (!0)
}
function bh() {
    var e = ds.current;
    return ds.current = fs,
    e === null ? fs : e
}
function Ll() {
    (ie === 0 || ie === 3 || ie === 2) && (ie = 4),
    ae === null || !(ln & 268435455) && !(Ls & 268435455) || Tt(ae, ce)
}
function ms(e, t) {
    var n = I;
    I |= 2;
    var r = bh();
    (ae !== e || ce !== t) && (st = null,
    en(e, t));
    do
        try {
            bg();
            break
        } catch (i) {
            Kh(e, i)
        }
    while (!0);
    if (yl(),
    I = n,
    ds.current = r,
    ne !== null)
        throw Error(P(261));
    return ae = null,
    ce = 0,
    ie
}
function bg() {
    for (; ne !== null; )
        Gh(ne)
}
function Gg() {
    for (; ne !== null && !vy(); )
        Gh(ne)
}
function Gh(e) {
    var t = Xh(e.alternate, e, De);
    e.memoizedProps = e.pendingProps,
    t === null ? Yh(e) : ne = t,
    Fl.current = null
}
function Yh(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = Bg(n, t),
            n !== null) {
                n.flags &= 32767,
                ne = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                ie = 6,
                ne = null;
                return
            }
        } else if (n = zg(n, t, De),
        n !== null) {
            ne = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            ne = t;
            return
        }
        ne = t = e
    } while (t !== null);
    ie === 0 && (ie = 5)
}
function Gt(e, t, n) {
    var r = O
      , i = Be.transition;
    try {
        Be.transition = null,
        O = 1,
        Yg(e, t, n, r)
    } finally {
        Be.transition = i,
        O = r
    }
    return null
}
function Yg(e, t, n, r) {
    do
        Rn();
    while (Pt !== null);
    if (I & 6)
        throw Error(P(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(P(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var s = n.lanes | n.childLanes;
    if (Dy(e, s),
    e === ae && (ne = ae = null,
    ce = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ki || (ki = !0,
    Zh(Xi, function() {
        return Rn(),
        null
    })),
    s = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || s) {
        s = Be.transition,
        Be.transition = null;
        var o = O;
        O = 1;
        var a = I;
        I |= 4,
        Fl.current = null,
        $g(e, n),
        $h(n, e),
        pg(ta),
        Ji = !!ea,
        ta = ea = null,
        e.current = n,
        Wg(n),
        xy(),
        I = a,
        O = o,
        Be.transition = s
    } else
        e.current = n;
    if (ki && (ki = !1,
    Pt = e,
    ps = i),
    s = e.pendingLanes,
    s === 0 && (jt = null),
    Cy(n.stateNode),
    Me(e, q()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            i = t[n],
            r(i.value, {
                componentStack: i.stack,
                digest: i.digest
            });
    if (hs)
        throw hs = !1,
        e = Sa,
        Sa = null,
        e;
    return ps & 1 && e.tag !== 0 && Rn(),
    s = e.pendingLanes,
    s & 1 ? e === Ca ? Sr++ : (Sr = 0,
    Ca = e) : Sr = 0,
    Bt(),
    null
}
function Rn() {
    if (Pt !== null) {
        var e = Dd(ps)
          , t = Be.transition
          , n = O;
        try {
            if (Be.transition = null,
            O = 16 > e ? 16 : e,
            Pt === null)
                var r = !1;
            else {
                if (e = Pt,
                Pt = null,
                ps = 0,
                I & 6)
                    throw Error(P(331));
                var i = I;
                for (I |= 4,
                F = e.current; F !== null; ) {
                    var s = F
                      , o = s.child;
                    if (F.flags & 16) {
                        var a = s.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var u = a[l];
                                for (F = u; F !== null; ) {
                                    var c = F;
                                    switch (c.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        xr(8, c, s)
                                    }
                                    var f = c.child;
                                    if (f !== null)
                                        f.return = c,
                                        F = f;
                                    else
                                        for (; F !== null; ) {
                                            c = F;
                                            var d = c.sibling
                                              , y = c.return;
                                            if (zh(c),
                                            c === u) {
                                                F = null;
                                                break
                                            }
                                            if (d !== null) {
                                                d.return = y,
                                                F = d;
                                                break
                                            }
                                            F = y
                                        }
                                }
                            }
                            var g = s.alternate;
                            if (g !== null) {
                                var x = g.child;
                                if (x !== null) {
                                    g.child = null;
                                    do {
                                        var E = x.sibling;
                                        x.sibling = null,
                                        x = E
                                    } while (x !== null)
                                }
                            }
                            F = s
                        }
                    }
                    if (s.subtreeFlags & 2064 && o !== null)
                        o.return = s,
                        F = o;
                    else
                        e: for (; F !== null; ) {
                            if (s = F,
                            s.flags & 2048)
                                switch (s.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    xr(9, s, s.return)
                                }
                            var p = s.sibling;
                            if (p !== null) {
                                p.return = s.return,
                                F = p;
                                break e
                            }
                            F = s.return
                        }
                }
                var h = e.current;
                for (F = h; F !== null; ) {
                    o = F;
                    var m = o.child;
                    if (o.subtreeFlags & 2064 && m !== null)
                        m.return = o,
                        F = m;
                    else
                        e: for (o = h; F !== null; ) {
                            if (a = F,
                            a.flags & 2048)
                                try {
                                    switch (a.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Vs(9, a)
                                    }
                                } catch (w) {
                                    X(a, a.return, w)
                                }
                            if (a === o) {
                                F = null;
                                break e
                            }
                            var S = a.sibling;
                            if (S !== null) {
                                S.return = a.return,
                                F = S;
                                break e
                            }
                            F = a.return
                        }
                }
                if (I = i,
                Bt(),
                tt && typeof tt.onPostCommitFiberRoot == "function")
                    try {
                        tt.onPostCommitFiberRoot(Ps, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            O = n,
            Be.transition = t
        }
    }
    return !1
}
function kc(e, t, n) {
    t = $n(n, t),
    t = Dh(e, t, 1),
    e = At(e, t, 1),
    t = xe(),
    e !== null && (Zr(e, 1, t),
    Me(e, t))
}
function X(e, t, n) {
    if (e.tag === 3)
        kc(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                kc(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (jt === null || !jt.has(r))) {
                    e = $n(n, e),
                    e = Fh(t, e, 1),
                    t = At(t, e, 1),
                    e = xe(),
                    t !== null && (Zr(t, 1, e),
                    Me(t, e));
                    break
                }
            }
            t = t.return
        }
}
function Qg(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = xe(),
    e.pingedLanes |= e.suspendedLanes & n,
    ae === e && (ce & n) === n && (ie === 4 || ie === 3 && (ce & 130023424) === ce && 500 > q() - jl ? en(e, 0) : Al |= n),
    Me(e, t)
}
function Qh(e, t) {
    t === 0 && (e.mode & 1 ? (t = pi,
    pi <<= 1,
    !(pi & 130023424) && (pi = 4194304)) : t = 1);
    var n = xe();
    e = dt(e, t),
    e !== null && (Zr(e, t, n),
    Me(e, n))
}
function Xg(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    Qh(e, n)
}
function Zg(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(P(314))
    }
    r !== null && r.delete(t),
    Qh(e, n)
}
var Xh;
Xh = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Pe.current)
            Te = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return Te = !1,
                Og(e, t, n);
            Te = !!(e.flags & 131072)
        }
    else
        Te = !1,
        $ && t.flags & 1048576 && eh(t, ss, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        zi(e, t),
        e = t.pendingProps;
        var i = On(t, ye.current);
        Ln(t, n),
        i = kl(null, t, r, e, i, n);
        var s = Pl();
        return t.flags |= 1,
        typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        Ee(r) ? (s = !0,
        rs(t)) : s = !1,
        t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null,
        xl(t),
        i.updater = Ns,
        t.stateNode = i,
        i._reactInternals = t,
        ca(t, r, e, n),
        t = ha(null, t, r, !0, s, n)) : (t.tag = 0,
        $ && s && dl(t),
        ge(null, t, i, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (zi(e, t),
            e = t.pendingProps,
            i = r._init,
            r = i(r._payload),
            t.type = r,
            i = t.tag = qg(r),
            e = be(r, e),
            i) {
            case 0:
                t = da(null, t, r, e, n);
                break e;
            case 1:
                t = pc(null, t, r, e, n);
                break e;
            case 11:
                t = dc(null, t, r, e, n);
                break e;
            case 14:
                t = hc(null, t, r, be(r.type, e), n);
                break e
            }
            throw Error(P(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : be(r, i),
        da(e, t, r, i, n);
    case 1:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : be(r, i),
        pc(e, t, r, i, n);
    case 3:
        e: {
            if (Vh(t),
            e === null)
                throw Error(P(387));
            r = t.pendingProps,
            s = t.memoizedState,
            i = s.element,
            oh(e, t),
            ls(t, r, null, n);
            var o = t.memoizedState;
            if (r = o.element,
            s.isDehydrated)
                if (s = {
                    element: r,
                    isDehydrated: !1,
                    cache: o.cache,
                    pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                    transitions: o.transitions
                },
                t.updateQueue.baseState = s,
                t.memoizedState = s,
                t.flags & 256) {
                    i = $n(Error(P(423)), t),
                    t = mc(e, t, r, n, i);
                    break e
                } else if (r !== i) {
                    i = $n(Error(P(424)), t),
                    t = mc(e, t, r, n, i);
                    break e
                } else
                    for (Fe = Ft(t.stateNode.containerInfo.firstChild),
                    Ae = t,
                    $ = !0,
                    Ye = null,
                    n = ih(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (zn(),
                r === i) {
                    t = ht(e, t, n);
                    break e
                }
                ge(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return ah(t),
        e === null && aa(t),
        r = t.type,
        i = t.pendingProps,
        s = e !== null ? e.memoizedProps : null,
        o = i.children,
        na(r, i) ? o = null : s !== null && na(r, s) && (t.flags |= 32),
        Nh(e, t),
        ge(e, t, o, n),
        t.child;
    case 6:
        return e === null && aa(t),
        null;
    case 13:
        return Lh(e, t, n);
    case 4:
        return wl(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = Bn(t, null, r, n) : ge(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : be(r, i),
        dc(e, t, r, i, n);
    case 7:
        return ge(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return ge(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return ge(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            i = t.pendingProps,
            s = t.memoizedProps,
            o = i.value,
            z(os, r._currentValue),
            r._currentValue = o,
            s !== null)
                if (Ze(s.value, o)) {
                    if (s.children === i.children && !Pe.current) {
                        t = ht(e, t, n);
                        break e
                    }
                } else
                    for (s = t.child,
                    s !== null && (s.return = t); s !== null; ) {
                        var a = s.dependencies;
                        if (a !== null) {
                            o = s.child;
                            for (var l = a.firstContext; l !== null; ) {
                                if (l.context === r) {
                                    if (s.tag === 1) {
                                        l = ut(-1, n & -n),
                                        l.tag = 2;
                                        var u = s.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var c = u.pending;
                                            c === null ? l.next = l : (l.next = c.next,
                                            c.next = l),
                                            u.pending = l
                                        }
                                    }
                                    s.lanes |= n,
                                    l = s.alternate,
                                    l !== null && (l.lanes |= n),
                                    la(s.return, n, t),
                                    a.lanes |= n;
                                    break
                                }
                                l = l.next
                            }
                        } else if (s.tag === 10)
                            o = s.type === t.type ? null : s.child;
                        else if (s.tag === 18) {
                            if (o = s.return,
                            o === null)
                                throw Error(P(341));
                            o.lanes |= n,
                            a = o.alternate,
                            a !== null && (a.lanes |= n),
                            la(o, n, t),
                            o = s.sibling
                        } else
                            o = s.child;
                        if (o !== null)
                            o.return = s;
                        else
                            for (o = s; o !== null; ) {
                                if (o === t) {
                                    o = null;
                                    break
                                }
                                if (s = o.sibling,
                                s !== null) {
                                    s.return = o.return,
                                    o = s;
                                    break
                                }
                                o = o.return
                            }
                        s = o
                    }
            ge(e, t, i.children, n),
            t = t.child
        }
        return t;
    case 9:
        return i = t.type,
        r = t.pendingProps.children,
        Ln(t, n),
        i = $e(i),
        r = r(i),
        t.flags |= 1,
        ge(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        i = be(r, t.pendingProps),
        i = be(r.type, i),
        hc(e, t, r, i, n);
    case 15:
        return Ah(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : be(r, i),
        zi(e, t),
        t.tag = 1,
        Ee(r) ? (e = !0,
        rs(t)) : e = !1,
        Ln(t, n),
        Mh(t, r, i),
        ca(t, r, i, n),
        ha(null, t, r, !0, e, n);
    case 19:
        return Rh(e, t, n);
    case 22:
        return jh(e, t, n)
    }
    throw Error(P(156, t.tag))
}
;
function Zh(e, t) {
    return kd(e, t)
}
function Jg(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function Oe(e, t, n, r) {
    return new Jg(e,t,n,r)
}
function Rl(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function qg(e) {
    if (typeof e == "function")
        return Rl(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === el)
            return 11;
        if (e === tl)
            return 14
    }
    return 2
}
function Vt(e, t) {
    var n = e.alternate;
    return n === null ? (n = Oe(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function $i(e, t, n, r, i, s) {
    var o = 2;
    if (r = e,
    typeof e == "function")
        Rl(e) && (o = 1);
    else if (typeof e == "string")
        o = 5;
    else
        e: switch (e) {
        case pn:
            return tn(n.children, i, s, t);
        case qa:
            o = 8,
            i |= 8;
            break;
        case Lo:
            return e = Oe(12, n, t, i | 2),
            e.elementType = Lo,
            e.lanes = s,
            e;
        case Ro:
            return e = Oe(13, n, t, i),
            e.elementType = Ro,
            e.lanes = s,
            e;
        case _o:
            return e = Oe(19, n, t, i),
            e.elementType = _o,
            e.lanes = s,
            e;
        case ad:
            return Rs(n, i, s, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case sd:
                    o = 10;
                    break e;
                case od:
                    o = 9;
                    break e;
                case el:
                    o = 11;
                    break e;
                case tl:
                    o = 14;
                    break e;
                case wt:
                    o = 16,
                    r = null;
                    break e
                }
            throw Error(P(130, e == null ? e : typeof e, ""))
        }
    return t = Oe(o, n, t, i),
    t.elementType = e,
    t.type = r,
    t.lanes = s,
    t
}
function tn(e, t, n, r) {
    return e = Oe(7, e, r, t),
    e.lanes = n,
    e
}
function Rs(e, t, n, r) {
    return e = Oe(22, e, r, t),
    e.elementType = ad,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function yo(e, t, n) {
    return e = Oe(6, e, null, t),
    e.lanes = n,
    e
}
function go(e, t, n) {
    return t = Oe(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function e0(e, t, n, r, i) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = Xs(0),
    this.expirationTimes = Xs(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = Xs(0),
    this.identifierPrefix = r,
    this.onRecoverableError = i,
    this.mutableSourceEagerHydrationData = null
}
function _l(e, t, n, r, i, s, o, a, l) {
    return e = new e0(e,t,n,a,l),
    t === 1 ? (t = 1,
    s === !0 && (t |= 8)) : t = 0,
    s = Oe(3, null, null, t),
    e.current = s,
    s.stateNode = e,
    s.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    xl(s),
    e
}
function t0(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: hn,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function Jh(e) {
    if (!e)
        return Rt;
    e = e._reactInternals;
    e: {
        if (fn(e) !== e || e.tag !== 1)
            throw Error(P(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (Ee(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(P(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Ee(n))
            return Jd(e, n, t)
    }
    return t
}
function qh(e, t, n, r, i, s, o, a, l) {
    return e = _l(n, r, !0, e, i, s, o, a, l),
    e.context = Jh(null),
    n = e.current,
    r = xe(),
    i = Nt(n),
    s = ut(r, i),
    s.callback = t ?? null,
    At(n, s, i),
    e.current.lanes = i,
    Zr(e, i, r),
    Me(e, r),
    e
}
function _s(e, t, n, r) {
    var i = t.current
      , s = xe()
      , o = Nt(i);
    return n = Jh(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = ut(s, o),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = At(i, t, o),
    e !== null && (Xe(e, i, o, s),
    _i(e, i, o)),
    o
}
function ys(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function Pc(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Il(e, t) {
    Pc(e, t),
    (e = e.alternate) && Pc(e, t)
}
function n0() {
    return null
}
var ep = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Ol(e) {
    this._internalRoot = e
}
Is.prototype.render = Ol.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(P(409));
    _s(e, t, null, null)
}
;
Is.prototype.unmount = Ol.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        un(function() {
            _s(null, e, null, null)
        }),
        t[ft] = null
    }
}
;
function Is(e) {
    this._internalRoot = e
}
Is.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = jd();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Ct.length && t !== 0 && t < Ct[n].priority; n++)
            ;
        Ct.splice(n, 0, e),
        n === 0 && Vd(e)
    }
}
;
function zl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Os(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function Ec() {}
function r0(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var s = r;
            r = function() {
                var u = ys(o);
                s.call(u)
            }
        }
        var o = qh(t, r, e, 0, null, !1, !1, "", Ec);
        return e._reactRootContainer = o,
        e[ft] = o.current,
        Rr(e.nodeType === 8 ? e.parentNode : e),
        un(),
        o
    }
    for (; i = e.lastChild; )
        e.removeChild(i);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var u = ys(l);
            a.call(u)
        }
    }
    var l = _l(e, 0, !1, null, null, !1, !1, "", Ec);
    return e._reactRootContainer = l,
    e[ft] = l.current,
    Rr(e.nodeType === 8 ? e.parentNode : e),
    un(function() {
        _s(t, l, n, r)
    }),
    l
}
function zs(e, t, n, r, i) {
    var s = n._reactRootContainer;
    if (s) {
        var o = s;
        if (typeof i == "function") {
            var a = i;
            i = function() {
                var l = ys(o);
                a.call(l)
            }
        }
        _s(t, o, e, i)
    } else
        o = r0(n, t, e, i, r);
    return ys(o)
}
Fd = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = cr(t.pendingLanes);
            n !== 0 && (il(t, n | 1),
            Me(t, q()),
            !(I & 6) && (Wn = q() + 500,
            Bt()))
        }
        break;
    case 13:
        un(function() {
            var r = dt(e, 1);
            if (r !== null) {
                var i = xe();
                Xe(r, e, 1, i)
            }
        }),
        Il(e, 1)
    }
}
;
sl = function(e) {
    if (e.tag === 13) {
        var t = dt(e, 134217728);
        if (t !== null) {
            var n = xe();
            Xe(t, e, 134217728, n)
        }
        Il(e, 134217728)
    }
}
;
Ad = function(e) {
    if (e.tag === 13) {
        var t = Nt(e)
          , n = dt(e, t);
        if (n !== null) {
            var r = xe();
            Xe(n, e, t, r)
        }
        Il(e, t)
    }
}
;
jd = function() {
    return O
}
;
Nd = function(e, t) {
    var n = O;
    try {
        return O = e,
        t()
    } finally {
        O = n
    }
}
;
bo = function(e, t, n) {
    switch (t) {
    case "input":
        if (zo(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var i = Fs(r);
                    if (!i)
                        throw Error(P(90));
                    ud(r),
                    zo(r, i)
                }
            }
        }
        break;
    case "textarea":
        fd(e, n);
        break;
    case "select":
        t = n.value,
        t != null && An(e, !!n.multiple, t, !1)
    }
}
;
vd = Nl;
xd = un;
var i0 = {
    usingClientEntryPoint: !1,
    Events: [qr, vn, Fs, yd, gd, Nl]
}
  , or = {
    findFiberByHostInstance: Qt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , s0 = {
    bundleType: or.bundleType,
    version: or.version,
    rendererPackageName: or.rendererPackageName,
    rendererConfig: or.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: yt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = Cd(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: or.findFiberByHostInstance || n0,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Pi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Pi.isDisabled && Pi.supportsFiber)
        try {
            Ps = Pi.inject(s0),
            tt = Pi
        } catch {}
}
Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = i0;
Ne.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!zl(t))
        throw Error(P(200));
    return t0(e, t, null, n)
}
;
Ne.createRoot = function(e, t) {
    if (!zl(e))
        throw Error(P(299));
    var n = !1
      , r = ""
      , i = ep;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    t = _l(e, 1, !1, null, null, n, !1, r, i),
    e[ft] = t.current,
    Rr(e.nodeType === 8 ? e.parentNode : e),
    new Ol(t)
}
;
Ne.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(P(188)) : (e = Object.keys(e).join(","),
        Error(P(268, e)));
    return e = Cd(t),
    e = e === null ? null : e.stateNode,
    e
}
;
Ne.flushSync = function(e) {
    return un(e)
}
;
Ne.hydrate = function(e, t, n) {
    if (!Os(t))
        throw Error(P(200));
    return zs(null, e, t, !0, n)
}
;
Ne.hydrateRoot = function(e, t, n) {
    if (!zl(e))
        throw Error(P(405));
    var r = n != null && n.hydratedSources || null
      , i = !1
      , s = ""
      , o = ep;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0),
    n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    t = qh(t, null, e, 1, n ?? null, i, !1, s, o),
    e[ft] = t.current,
    Rr(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            i = n._getVersion,
            i = i(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new Is(t)
}
;
Ne.render = function(e, t, n) {
    if (!Os(t))
        throw Error(P(200));
    return zs(null, e, t, !1, n)
}
;
Ne.unmountComponentAtNode = function(e) {
    if (!Os(e))
        throw Error(P(40));
    return e._reactRootContainer ? (un(function() {
        zs(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[ft] = null
        })
    }),
    !0) : !1
}
;
Ne.unstable_batchedUpdates = Nl;
Ne.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Os(n))
        throw Error(P(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(P(38));
    return zs(e, t, n, !1, r)
}
;
Ne.version = "18.3.1-next-f1338f8080-20240426";
function tp() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tp)
        } catch (e) {
            console.error(e)
        }
}
tp(),
td.exports = Ne;
var o0 = td.exports, np, Mc = o0;
np = Mc.createRoot,
Mc.hydrateRoot;
const Bl = M.createContext({});
function Ul(e) {
    const t = M.useRef(null);
    return t.current === null && (t.current = e()),
    t.current
}
const $l = typeof window < "u"
  , rp = $l ? M.useLayoutEffect : M.useEffect
  , Bs = M.createContext(null);
function Wl(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}
function Hl(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
const pt = (e, t, n) => n > t ? t : n < e ? e : n;
let gs = () => {}
;
const mt = {}
  , ip = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function sp(e) {
    return typeof e == "object" && e !== null
}
const op = e => /^0[^.\s]+$/u.test(e);
function Kl(e) {
    let t;
    return () => (t === void 0 && (t = e()),
    t)
}
const Ue = e => e
  , a0 = (e, t) => n => t(e(n))
  , ti = (...e) => e.reduce(a0)
  , Hr = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r
}
;
class bl {
    constructor() {
        this.subscriptions = []
    }
    add(t) {
        return Wl(this.subscriptions, t),
        () => Hl(this.subscriptions, t)
    }
    notify(t, n, r) {
        const i = this.subscriptions.length;
        if (i)
            if (i === 1)
                this.subscriptions[0](t, n, r);
            else
                for (let s = 0; s < i; s++) {
                    const o = this.subscriptions[s];
                    o && o(t, n, r)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const rt = e => e * 1e3
  , ze = e => e / 1e3;
function ap(e, t) {
    return t ? e * (1e3 / t) : 0
}
const lp = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e
  , l0 = 1e-7
  , u0 = 12;
function c0(e, t, n, r, i) {
    let s, o, a = 0;
    do
        o = t + (n - t) / 2,
        s = lp(o, r, i) - e,
        s > 0 ? n = o : t = o;
    while (Math.abs(s) > l0 && ++a < u0);
    return o
}
function ni(e, t, n, r) {
    if (e === t && n === r)
        return Ue;
    const i = s => c0(s, 0, 1, e, n);
    return s => s === 0 || s === 1 ? s : lp(i(s), t, r)
}
const up = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
  , cp = e => t => 1 - e(1 - t)
  , fp = ni(.33, 1.53, .69, .99)
  , Gl = cp(fp)
  , dp = up(Gl)
  , hp = e => (e *= 2) < 1 ? .5 * Gl(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
  , Yl = e => 1 - Math.sin(Math.acos(e))
  , pp = cp(Yl)
  , mp = up(Yl)
  , f0 = ni(.42, 0, 1, 1)
  , d0 = ni(0, 0, .58, 1)
  , yp = ni(.42, 0, .58, 1)
  , h0 = e => Array.isArray(e) && typeof e[0] != "number"
  , gp = e => Array.isArray(e) && typeof e[0] == "number"
  , Dc = {
    linear: Ue,
    easeIn: f0,
    easeInOut: yp,
    easeOut: d0,
    circIn: Yl,
    circInOut: mp,
    circOut: pp,
    backIn: Gl,
    backInOut: dp,
    backOut: fp,
    anticipate: hp
}
  , p0 = e => typeof e == "string"
  , Fc = e => {
    if (gp(e)) {
        gs(e.length === 4);
        const [t,n,r,i] = e;
        return ni(t, n, r, i)
    } else if (p0(e))
        return gs(Dc[e] !== void 0),
        Dc[e];
    return e
}
  , Ei = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"]
  , Ac = {
    value: null,
    addProjectionMetrics: null
};
function m0(e, t) {
    let n = new Set
      , r = new Set
      , i = !1
      , s = !1;
    const o = new WeakSet;
    let a = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , l = 0;
    function u(f) {
        o.has(f) && (c.schedule(f),
        e()),
        l++,
        f(a)
    }
    const c = {
        schedule: (f, d=!1, y=!1) => {
            const x = y && i ? n : r;
            return d && o.add(f),
            x.has(f) || x.add(f),
            f
        }
        ,
        cancel: f => {
            r.delete(f),
            o.delete(f)
        }
        ,
        process: f => {
            if (a = f,
            i) {
                s = !0;
                return
            }
            i = !0,
            [n,r] = [r, n],
            n.forEach(u),
            t && Ac.value && Ac.value.frameloop[t].push(l),
            l = 0,
            n.clear(),
            i = !1,
            s && (s = !1,
            c.process(f))
        }
    };
    return c
}
const y0 = 40;
function vp(e, t) {
    let n = !1
      , r = !0;
    const i = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , s = () => n = !0
      , o = Ei.reduce( (m, S) => (m[S] = m0(s, t ? S : void 0),
    m), {})
      , {setup: a, read: l, resolveKeyframes: u, preUpdate: c, update: f, preRender: d, render: y, postRender: g} = o
      , x = () => {
        const m = mt.useManualTiming ? i.timestamp : performance.now();
        n = !1,
        mt.useManualTiming || (i.delta = r ? 1e3 / 60 : Math.max(Math.min(m - i.timestamp, y0), 1)),
        i.timestamp = m,
        i.isProcessing = !0,
        a.process(i),
        l.process(i),
        u.process(i),
        c.process(i),
        f.process(i),
        d.process(i),
        y.process(i),
        g.process(i),
        i.isProcessing = !1,
        n && t && (r = !1,
        e(x))
    }
      , E = () => {
        n = !0,
        r = !0,
        i.isProcessing || e(x)
    }
    ;
    return {
        schedule: Ei.reduce( (m, S) => {
            const w = o[S];
            return m[S] = (C, k=!1, T=!1) => (n || E(),
            w.schedule(C, k, T)),
            m
        }
        , {}),
        cancel: m => {
            for (let S = 0; S < Ei.length; S++)
                o[Ei[S]].cancel(m)
        }
        ,
        state: i,
        steps: o
    }
}
const {schedule: W, cancel: _t, state: ue, steps: vo} = vp(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ue, !0);
let Wi;
function g0() {
    Wi = void 0
}
const ke = {
    now: () => (Wi === void 0 && ke.set(ue.isProcessing || mt.useManualTiming ? ue.timestamp : performance.now()),
    Wi),
    set: e => {
        Wi = e,
        queueMicrotask(g0)
    }
}
  , xp = e => t => typeof t == "string" && t.startsWith(e)
  , Ql = xp("--")
  , v0 = xp("var(--")
  , Xl = e => v0(e) ? x0.test(e.split("/*")[0].trim()) : !1
  , x0 = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
  , Qn = {
    test: e => typeof e == "number",
    parse: parseFloat,
    transform: e => e
}
  , Kr = {
    ...Qn,
    transform: e => pt(0, 1, e)
}
  , Mi = {
    ...Qn,
    default: 1
}
  , Cr = e => Math.round(e * 1e5) / 1e5
  , Zl = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function w0(e) {
    return e == null
}
const S0 = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
  , Jl = (e, t) => n => !!(typeof n == "string" && S0.test(n) && n.startsWith(e) || t && !w0(n) && Object.prototype.hasOwnProperty.call(n, t))
  , wp = (e, t, n) => r => {
    if (typeof r != "string")
        return r;
    const [i,s,o,a] = r.match(Zl);
    return {
        [e]: parseFloat(i),
        [t]: parseFloat(s),
        [n]: parseFloat(o),
        alpha: a !== void 0 ? parseFloat(a) : 1
    }
}
  , C0 = e => pt(0, 255, e)
  , xo = {
    ...Qn,
    transform: e => Math.round(C0(e))
}
  , Jt = {
    test: Jl("rgb", "red"),
    parse: wp("red", "green", "blue"),
    transform: ({red: e, green: t, blue: n, alpha: r=1}) => "rgba(" + xo.transform(e) + ", " + xo.transform(t) + ", " + xo.transform(n) + ", " + Cr(Kr.transform(r)) + ")"
};
function T0(e) {
    let t = ""
      , n = ""
      , r = ""
      , i = "";
    return e.length > 5 ? (t = e.substring(1, 3),
    n = e.substring(3, 5),
    r = e.substring(5, 7),
    i = e.substring(7, 9)) : (t = e.substring(1, 2),
    n = e.substring(2, 3),
    r = e.substring(3, 4),
    i = e.substring(4, 5),
    t += t,
    n += n,
    r += r,
    i += i),
    {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: i ? parseInt(i, 16) / 255 : 1
    }
}
const Pa = {
    test: Jl("#"),
    parse: T0,
    transform: Jt.transform
}
  , ri = e => ({
    test: t => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: t => `${t}${e}`
})
  , xt = ri("deg")
  , it = ri("%")
  , V = ri("px")
  , k0 = ri("vh")
  , P0 = ri("vw")
  , jc = {
    ...it,
    parse: e => it.parse(e) / 100,
    transform: e => it.transform(e * 100)
}
  , Pn = {
    test: Jl("hsl", "hue"),
    parse: wp("hue", "saturation", "lightness"),
    transform: ({hue: e, saturation: t, lightness: n, alpha: r=1}) => "hsla(" + Math.round(e) + ", " + it.transform(Cr(t)) + ", " + it.transform(Cr(n)) + ", " + Cr(Kr.transform(r)) + ")"
}
  , te = {
    test: e => Jt.test(e) || Pa.test(e) || Pn.test(e),
    parse: e => Jt.test(e) ? Jt.parse(e) : Pn.test(e) ? Pn.parse(e) : Pa.parse(e),
    transform: e => typeof e == "string" ? e : e.hasOwnProperty("red") ? Jt.transform(e) : Pn.transform(e),
    getAnimatableNone: e => {
        const t = te.parse(e);
        return t.alpha = 0,
        te.transform(t)
    }
}
  , E0 = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function M0(e) {
    var t, n;
    return isNaN(e) && typeof e == "string" && (((t = e.match(Zl)) == null ? void 0 : t.length) || 0) + (((n = e.match(E0)) == null ? void 0 : n.length) || 0) > 0
}
const Sp = "number"
  , Cp = "color"
  , D0 = "var"
  , F0 = "var("
  , Nc = "${}"
  , A0 = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function br(e) {
    const t = e.toString()
      , n = []
      , r = {
        color: [],
        number: [],
        var: []
    }
      , i = [];
    let s = 0;
    const a = t.replace(A0, l => (te.test(l) ? (r.color.push(s),
    i.push(Cp),
    n.push(te.parse(l))) : l.startsWith(F0) ? (r.var.push(s),
    i.push(D0),
    n.push(l)) : (r.number.push(s),
    i.push(Sp),
    n.push(parseFloat(l))),
    ++s,
    Nc)).split(Nc);
    return {
        values: n,
        split: a,
        indexes: r,
        types: i
    }
}
function Tp(e) {
    return br(e).values
}
function kp(e) {
    const {split: t, types: n} = br(e)
      , r = t.length;
    return i => {
        let s = "";
        for (let o = 0; o < r; o++)
            if (s += t[o],
            i[o] !== void 0) {
                const a = n[o];
                a === Sp ? s += Cr(i[o]) : a === Cp ? s += te.transform(i[o]) : s += i[o]
            }
        return s
    }
}
const j0 = e => typeof e == "number" ? 0 : te.test(e) ? te.getAnimatableNone(e) : e;
function N0(e) {
    const t = Tp(e);
    return kp(e)(t.map(j0))
}
const It = {
    test: M0,
    parse: Tp,
    createTransformer: kp,
    getAnimatableNone: N0
};
function wo(e, t, n) {
    return n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}
function V0({hue: e, saturation: t, lightness: n, alpha: r}) {
    e /= 360,
    t /= 100,
    n /= 100;
    let i = 0
      , s = 0
      , o = 0;
    if (!t)
        i = s = o = n;
    else {
        const a = n < .5 ? n * (1 + t) : n + t - n * t
          , l = 2 * n - a;
        i = wo(l, a, e + 1 / 3),
        s = wo(l, a, e),
        o = wo(l, a, e - 1 / 3)
    }
    return {
        red: Math.round(i * 255),
        green: Math.round(s * 255),
        blue: Math.round(o * 255),
        alpha: r
    }
}
function vs(e, t) {
    return n => n > 0 ? t : e
}
const b = (e, t, n) => e + (t - e) * n
  , So = (e, t, n) => {
    const r = e * e
      , i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i)
}
  , L0 = [Pa, Jt, Pn]
  , R0 = e => L0.find(t => t.test(e));
function Vc(e) {
    const t = R0(e);
    if (!t)
        return !1;
    let n = t.parse(e);
    return t === Pn && (n = V0(n)),
    n
}
const Lc = (e, t) => {
    const n = Vc(e)
      , r = Vc(t);
    if (!n || !r)
        return vs(e, t);
    const i = {
        ...n
    };
    return s => (i.red = So(n.red, r.red, s),
    i.green = So(n.green, r.green, s),
    i.blue = So(n.blue, r.blue, s),
    i.alpha = b(n.alpha, r.alpha, s),
    Jt.transform(i))
}
  , Ea = new Set(["none", "hidden"]);
function _0(e, t) {
    return Ea.has(e) ? n => n <= 0 ? e : t : n => n >= 1 ? t : e
}
function I0(e, t) {
    return n => b(e, t, n)
}
function ql(e) {
    return typeof e == "number" ? I0 : typeof e == "string" ? Xl(e) ? vs : te.test(e) ? Lc : B0 : Array.isArray(e) ? Pp : typeof e == "object" ? te.test(e) ? Lc : O0 : vs
}
function Pp(e, t) {
    const n = [...e]
      , r = n.length
      , i = e.map( (s, o) => ql(s)(s, t[o]));
    return s => {
        for (let o = 0; o < r; o++)
            n[o] = i[o](s);
        return n
    }
}
function O0(e, t) {
    const n = {
        ...e,
        ...t
    }
      , r = {};
    for (const i in n)
        e[i] !== void 0 && t[i] !== void 0 && (r[i] = ql(e[i])(e[i], t[i]));
    return i => {
        for (const s in r)
            n[s] = r[s](i);
        return n
    }
}
function z0(e, t) {
    const n = []
      , r = {
        color: 0,
        var: 0,
        number: 0
    };
    for (let i = 0; i < t.values.length; i++) {
        const s = t.types[i]
          , o = e.indexes[s][r[s]]
          , a = e.values[o] ?? 0;
        n[i] = a,
        r[s]++
    }
    return n
}
const B0 = (e, t) => {
    const n = It.createTransformer(t)
      , r = br(e)
      , i = br(t);
    return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? Ea.has(e) && !i.values.length || Ea.has(t) && !r.values.length ? _0(e, t) : ti(Pp(z0(r, i), i.values), n) : vs(e, t)
}
;
function Ep(e, t, n) {
    return typeof e == "number" && typeof t == "number" && typeof n == "number" ? b(e, t, n) : ql(e)(e, t)
}
const U0 = e => {
    const t = ({timestamp: n}) => e(n);
    return {
        start: (n=!0) => W.update(t, n),
        stop: () => _t(t),
        now: () => ue.isProcessing ? ue.timestamp : ke.now()
    }
}
  , Mp = (e, t, n=10) => {
    let r = "";
    const i = Math.max(Math.round(t / n), 2);
    for (let s = 0; s < i; s++)
        r += Math.round(e(s / (i - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${r.substring(0, r.length - 2)})`
}
  , xs = 2e4;
function eu(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < xs; )
        t += n,
        r = e.next(t);
    return t >= xs ? 1 / 0 : t
}
function $0(e, t=100, n) {
    const r = n({
        ...e,
        keyframes: [0, t]
    })
      , i = Math.min(eu(r), xs);
    return {
        type: "keyframes",
        ease: s => r.next(i * s).value / t,
        duration: ze(i)
    }
}
const W0 = 5;
function Dp(e, t, n) {
    const r = Math.max(t - W0, 0);
    return ap(n - e(r), t - r)
}
const Q = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {
        granular: .01,
        default: 2
    },
    restDelta: {
        granular: .005,
        default: .5
    },
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
}
  , Co = .001;
function H0({duration: e=Q.duration, bounce: t=Q.bounce, velocity: n=Q.velocity, mass: r=Q.mass}) {
    let i, s, o = 1 - t;
    o = pt(Q.minDamping, Q.maxDamping, o),
    e = pt(Q.minDuration, Q.maxDuration, ze(e)),
    o < 1 ? (i = u => {
        const c = u * o
          , f = c * e
          , d = c - n
          , y = Ma(u, o)
          , g = Math.exp(-f);
        return Co - d / y * g
    }
    ,
    s = u => {
        const f = u * o * e
          , d = f * n + n
          , y = Math.pow(o, 2) * Math.pow(u, 2) * e
          , g = Math.exp(-f)
          , x = Ma(Math.pow(u, 2), o);
        return (-i(u) + Co > 0 ? -1 : 1) * ((d - y) * g) / x
    }
    ) : (i = u => {
        const c = Math.exp(-u * e)
          , f = (u - n) * e + 1;
        return -Co + c * f
    }
    ,
    s = u => {
        const c = Math.exp(-u * e)
          , f = (n - u) * (e * e);
        return c * f
    }
    );
    const a = 5 / e
      , l = b0(i, s, a);
    if (e = rt(e),
    isNaN(l))
        return {
            stiffness: Q.stiffness,
            damping: Q.damping,
            duration: e
        };
    {
        const u = Math.pow(l, 2) * r;
        return {
            stiffness: u,
            damping: o * 2 * Math.sqrt(r * u),
            duration: e
        }
    }
}
const K0 = 12;
function b0(e, t, n) {
    let r = n;
    for (let i = 1; i < K0; i++)
        r = r - e(r) / t(r);
    return r
}
function Ma(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const G0 = ["duration", "bounce"]
  , Y0 = ["stiffness", "damping", "mass"];
function Rc(e, t) {
    return t.some(n => e[n] !== void 0)
}
function Q0(e) {
    let t = {
        velocity: Q.velocity,
        stiffness: Q.stiffness,
        damping: Q.damping,
        mass: Q.mass,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!Rc(e, Y0) && Rc(e, G0))
        if (e.visualDuration) {
            const n = e.visualDuration
              , r = 2 * Math.PI / (n * 1.2)
              , i = r * r
              , s = 2 * pt(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
            t = {
                ...t,
                mass: Q.mass,
                stiffness: i,
                damping: s
            }
        } else {
            const n = H0(e);
            t = {
                ...t,
                ...n,
                mass: Q.mass
            },
            t.isResolvedFromDuration = !0
        }
    return t
}
function ws(e=Q.visualDuration, t=Q.bounce) {
    const n = typeof e != "object" ? {
        visualDuration: e,
        keyframes: [0, 1],
        bounce: t
    } : e;
    let {restSpeed: r, restDelta: i} = n;
    const s = n.keyframes[0]
      , o = n.keyframes[n.keyframes.length - 1]
      , a = {
        done: !1,
        value: s
    }
      , {stiffness: l, damping: u, mass: c, duration: f, velocity: d, isResolvedFromDuration: y} = Q0({
        ...n,
        velocity: -ze(n.velocity || 0)
    })
      , g = d || 0
      , x = u / (2 * Math.sqrt(l * c))
      , E = o - s
      , p = ze(Math.sqrt(l / c))
      , h = Math.abs(E) < 5;
    r || (r = h ? Q.restSpeed.granular : Q.restSpeed.default),
    i || (i = h ? Q.restDelta.granular : Q.restDelta.default);
    let m;
    if (x < 1) {
        const w = Ma(p, x);
        m = C => {
            const k = Math.exp(-x * p * C);
            return o - k * ((g + x * p * E) / w * Math.sin(w * C) + E * Math.cos(w * C))
        }
    } else if (x === 1)
        m = w => o - Math.exp(-p * w) * (E + (g + p * E) * w);
    else {
        const w = p * Math.sqrt(x * x - 1);
        m = C => {
            const k = Math.exp(-x * p * C)
              , T = Math.min(w * C, 300);
            return o - k * ((g + x * p * E) * Math.sinh(T) + w * E * Math.cosh(T)) / w
        }
    }
    const S = {
        calculatedDuration: y && f || null,
        next: w => {
            const C = m(w);
            if (y)
                a.done = w >= f;
            else {
                let k = w === 0 ? g : 0;
                x < 1 && (k = w === 0 ? rt(g) : Dp(m, w, C));
                const T = Math.abs(k) <= r
                  , R = Math.abs(o - C) <= i;
                a.done = T && R
            }
            return a.value = a.done ? o : C,
            a
        }
        ,
        toString: () => {
            const w = Math.min(eu(S), xs)
              , C = Mp(k => S.next(w * k).value, w, 30);
            return w + "ms " + C
        }
        ,
        toTransition: () => {}
    };
    return S
}
ws.applyToOptions = e => {
    const t = $0(e, 100, ws);
    return e.ease = t.ease,
    e.duration = rt(t.duration),
    e.type = "keyframes",
    e
}
;
function Da({keyframes: e, velocity: t=0, power: n=.8, timeConstant: r=325, bounceDamping: i=10, bounceStiffness: s=500, modifyTarget: o, min: a, max: l, restDelta: u=.5, restSpeed: c}) {
    const f = e[0]
      , d = {
        done: !1,
        value: f
    }
      , y = T => a !== void 0 && T < a || l !== void 0 && T > l
      , g = T => a === void 0 ? l : l === void 0 || Math.abs(a - T) < Math.abs(l - T) ? a : l;
    let x = n * t;
    const E = f + x
      , p = o === void 0 ? E : o(E);
    p !== E && (x = p - f);
    const h = T => -x * Math.exp(-T / r)
      , m = T => p + h(T)
      , S = T => {
        const R = h(T)
          , j = m(T);
        d.done = Math.abs(R) <= u,
        d.value = d.done ? p : j
    }
    ;
    let w, C;
    const k = T => {
        y(d.value) && (w = T,
        C = ws({
            keyframes: [d.value, g(d.value)],
            velocity: Dp(m, T, d.value),
            damping: i,
            stiffness: s,
            restDelta: u,
            restSpeed: c
        }))
    }
    ;
    return k(0),
    {
        calculatedDuration: null,
        next: T => {
            let R = !1;
            return !C && w === void 0 && (R = !0,
            S(T),
            k(T)),
            w !== void 0 && T >= w ? C.next(T - w) : (!R && S(T),
            d)
        }
    }
}
function X0(e, t, n) {
    const r = []
      , i = n || mt.mix || Ep
      , s = e.length - 1;
    for (let o = 0; o < s; o++) {
        let a = i(e[o], e[o + 1]);
        if (t) {
            const l = Array.isArray(t) ? t[o] || Ue : t;
            a = ti(l, a)
        }
        r.push(a)
    }
    return r
}
function Z0(e, t, {clamp: n=!0, ease: r, mixer: i}={}) {
    const s = e.length;
    if (gs(s === t.length),
    s === 1)
        return () => t[0];
    if (s === 2 && t[0] === t[1])
        return () => t[1];
    const o = e[0] === e[1];
    e[0] > e[s - 1] && (e = [...e].reverse(),
    t = [...t].reverse());
    const a = X0(t, r, i)
      , l = a.length
      , u = c => {
        if (o && c < e[0])
            return t[0];
        let f = 0;
        if (l > 1)
            for (; f < e.length - 2 && !(c < e[f + 1]); f++)
                ;
        const d = Hr(e[f], e[f + 1], c);
        return a[f](d)
    }
    ;
    return n ? c => u(pt(e[0], e[s - 1], c)) : u
}
function J0(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
        const i = Hr(0, t, r);
        e.push(b(n, 1, i))
    }
}
function q0(e) {
    const t = [0];
    return J0(t, e.length - 1),
    t
}
function ev(e, t) {
    return e.map(n => n * t)
}
function tv(e, t) {
    return e.map( () => t || yp).splice(0, e.length - 1)
}
function Tr({duration: e=300, keyframes: t, times: n, ease: r="easeInOut"}) {
    const i = h0(r) ? r.map(Fc) : Fc(r)
      , s = {
        done: !1,
        value: t[0]
    }
      , o = ev(n && n.length === t.length ? n : q0(t), e)
      , a = Z0(o, t, {
        ease: Array.isArray(i) ? i : tv(t, i)
    });
    return {
        calculatedDuration: e,
        next: l => (s.value = a(l),
        s.done = l >= e,
        s)
    }
}
const nv = e => e !== null;
function tu(e, {repeat: t, repeatType: n="loop"}, r, i=1) {
    const s = e.filter(nv)
      , a = i < 0 || t && n !== "loop" && t % 2 === 1 ? 0 : s.length - 1;
    return !a || r === void 0 ? s[a] : r
}
const rv = {
    decay: Da,
    inertia: Da,
    tween: Tr,
    keyframes: Tr,
    spring: ws
};
function Fp(e) {
    typeof e.type == "string" && (e.type = rv[e.type])
}
class nu {
    constructor() {
        this.updateFinished()
    }
    get finished() {
        return this._finished
    }
    updateFinished() {
        this._finished = new Promise(t => {
            this.resolve = t
        }
        )
    }
    notifyFinished() {
        this.resolve()
    }
    then(t, n) {
        return this.finished.then(t, n)
    }
}
const iv = e => e / 100;
class ru extends nu {
    constructor(t) {
        super(),
        this.state = "idle",
        this.startTime = null,
        this.isStopped = !1,
        this.currentTime = 0,
        this.holdTime = null,
        this.playbackSpeed = 1,
        this.stop = () => {
            var r, i;
            const {motionValue: n} = this.options;
            n && n.updatedAt !== ke.now() && this.tick(ke.now()),
            this.isStopped = !0,
            this.state !== "idle" && (this.teardown(),
            (i = (r = this.options).onStop) == null || i.call(r))
        }
        ,
        this.options = t,
        this.initAnimation(),
        this.play(),
        t.autoplay === !1 && this.pause()
    }
    initAnimation() {
        const {options: t} = this;
        Fp(t);
        const {type: n=Tr, repeat: r=0, repeatDelay: i=0, repeatType: s, velocity: o=0} = t;
        let {keyframes: a} = t;
        const l = n || Tr;
        l !== Tr && typeof a[0] != "number" && (this.mixKeyframes = ti(iv, Ep(a[0], a[1])),
        a = [0, 100]);
        const u = l({
            ...t,
            keyframes: a
        });
        s === "mirror" && (this.mirroredGenerator = l({
            ...t,
            keyframes: [...a].reverse(),
            velocity: -o
        })),
        u.calculatedDuration === null && (u.calculatedDuration = eu(u));
        const {calculatedDuration: c} = u;
        this.calculatedDuration = c,
        this.resolvedDuration = c + i,
        this.totalDuration = this.resolvedDuration * (r + 1) - i,
        this.generator = u
    }
    updateTime(t) {
        const n = Math.round(t - this.startTime) * this.playbackSpeed;
        this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = n
    }
    tick(t, n=!1) {
        const {generator: r, totalDuration: i, mixKeyframes: s, mirroredGenerator: o, resolvedDuration: a, calculatedDuration: l} = this;
        if (this.startTime === null)
            return r.next(0);
        const {delay: u=0, keyframes: c, repeat: f, repeatType: d, repeatDelay: y, type: g, onUpdate: x, finalKeyframe: E} = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - i / this.speed, this.startTime)),
        n ? this.currentTime = t : this.updateTime(t);
        const p = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1)
          , h = this.playbackSpeed >= 0 ? p < 0 : p > i;
        this.currentTime = Math.max(p, 0),
        this.state === "finished" && this.holdTime === null && (this.currentTime = i);
        let m = this.currentTime
          , S = r;
        if (f) {
            const T = Math.min(this.currentTime, i) / a;
            let R = Math.floor(T)
              , j = T % 1;
            !j && T >= 1 && (j = 1),
            j === 1 && R--,
            R = Math.min(R, f + 1),
            !!(R % 2) && (d === "reverse" ? (j = 1 - j,
            y && (j -= y / a)) : d === "mirror" && (S = o)),
            m = pt(0, 1, j) * a
        }
        const w = h ? {
            done: !1,
            value: c[0]
        } : S.next(m);
        s && (w.value = s(w.value));
        let {done: C} = w;
        !h && l !== null && (C = this.playbackSpeed >= 0 ? this.currentTime >= i : this.currentTime <= 0);
        const k = this.holdTime === null && (this.state === "finished" || this.state === "running" && C);
        return k && g !== Da && (w.value = tu(c, this.options, E, this.speed)),
        x && x(w.value),
        k && this.finish(),
        w
    }
    then(t, n) {
        return this.finished.then(t, n)
    }
    get duration() {
        return ze(this.calculatedDuration)
    }
    get iterationDuration() {
        const {delay: t=0} = this.options || {};
        return this.duration + ze(t)
    }
    get time() {
        return ze(this.currentTime)
    }
    set time(t) {
        var n;
        t = rt(t),
        this.currentTime = t,
        this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed),
        (n = this.driver) == null || n.start(!1)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(t) {
        this.updateTime(ke.now());
        const n = this.playbackSpeed !== t;
        this.playbackSpeed = t,
        n && (this.time = ze(this.currentTime))
    }
    play() {
        var i, s;
        if (this.isStopped)
            return;
        const {driver: t=U0, startTime: n} = this.options;
        this.driver || (this.driver = t(o => this.tick(o))),
        (s = (i = this.options).onPlay) == null || s.call(i);
        const r = this.driver.now();
        this.state === "finished" ? (this.updateFinished(),
        this.startTime = r) : this.holdTime !== null ? this.startTime = r - this.holdTime : this.startTime || (this.startTime = n ?? r),
        this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration),
        this.holdTime = null,
        this.state = "running",
        this.driver.start()
    }
    pause() {
        this.state = "paused",
        this.updateTime(ke.now()),
        this.holdTime = this.currentTime
    }
    complete() {
        this.state !== "running" && this.play(),
        this.state = "finished",
        this.holdTime = null
    }
    finish() {
        var t, n;
        this.notifyFinished(),
        this.teardown(),
        this.state = "finished",
        (n = (t = this.options).onComplete) == null || n.call(t)
    }
    cancel() {
        var t, n;
        this.holdTime = null,
        this.startTime = 0,
        this.tick(0),
        this.teardown(),
        (n = (t = this.options).onCancel) == null || n.call(t)
    }
    teardown() {
        this.state = "idle",
        this.stopDriver(),
        this.startTime = this.holdTime = null
    }
    stopDriver() {
        this.driver && (this.driver.stop(),
        this.driver = void 0)
    }
    sample(t) {
        return this.startTime = 0,
        this.tick(t, !0)
    }
    attachTimeline(t) {
        var n;
        return this.options.allowFlatten && (this.options.type = "keyframes",
        this.options.ease = "linear",
        this.initAnimation()),
        (n = this.driver) == null || n.stop(),
        t.observe(this)
    }
}
function sv(e) {
    for (let t = 1; t < e.length; t++)
        e[t] ?? (e[t] = e[t - 1])
}
const qt = e => e * 180 / Math.PI
  , Fa = e => {
    const t = qt(Math.atan2(e[1], e[0]));
    return Aa(t)
}
  , ov = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: e => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
    rotate: Fa,
    rotateZ: Fa,
    skewX: e => qt(Math.atan(e[1])),
    skewY: e => qt(Math.atan(e[2])),
    skew: e => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}
  , Aa = e => (e = e % 360,
e < 0 && (e += 360),
e)
  , _c = Fa
  , Ic = e => Math.sqrt(e[0] * e[0] + e[1] * e[1])
  , Oc = e => Math.sqrt(e[4] * e[4] + e[5] * e[5])
  , av = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: Ic,
    scaleY: Oc,
    scale: e => (Ic(e) + Oc(e)) / 2,
    rotateX: e => Aa(qt(Math.atan2(e[6], e[5]))),
    rotateY: e => Aa(qt(Math.atan2(-e[2], e[0]))),
    rotateZ: _c,
    rotate: _c,
    skewX: e => qt(Math.atan(e[4])),
    skewY: e => qt(Math.atan(e[1])),
    skew: e => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function ja(e) {
    return e.includes("scale") ? 1 : 0
}
function Na(e, t) {
    if (!e || e === "none")
        return ja(t);
    const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let r, i;
    if (n)
        r = av,
        i = n;
    else {
        const a = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        r = ov,
        i = a
    }
    if (!i)
        return ja(t);
    const s = r[t]
      , o = i[1].split(",").map(uv);
    return typeof s == "function" ? s(o) : o[s]
}
const lv = (e, t) => {
    const {transform: n="none"} = getComputedStyle(e);
    return Na(n, t)
}
;
function uv(e) {
    return parseFloat(e.trim())
}
const Xn = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , Zn = new Set(Xn)
  , zc = e => e === Qn || e === V
  , cv = new Set(["x", "y", "z"])
  , fv = Xn.filter(e => !cv.has(e));
function dv(e) {
    const t = [];
    return fv.forEach(n => {
        const r = e.getValue(n);
        r !== void 0 && (t.push([n, r.get()]),
        r.set(n.startsWith("scale") ? 1 : 0))
    }
    ),
    t
}
const nn = {
    width: ({x: e}, {paddingLeft: t="0", paddingRight: n="0"}) => e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({y: e}, {paddingTop: t="0", paddingBottom: n="0"}) => e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, {top: t}) => parseFloat(t),
    left: (e, {left: t}) => parseFloat(t),
    bottom: ({y: e}, {top: t}) => parseFloat(t) + (e.max - e.min),
    right: ({x: e}, {left: t}) => parseFloat(t) + (e.max - e.min),
    x: (e, {transform: t}) => Na(t, "x"),
    y: (e, {transform: t}) => Na(t, "y")
};
nn.translateX = nn.x;
nn.translateY = nn.y;
const rn = new Set;
let Va = !1
  , La = !1
  , Ra = !1;
function Ap() {
    if (La) {
        const e = Array.from(rn).filter(r => r.needsMeasurement)
          , t = new Set(e.map(r => r.element))
          , n = new Map;
        t.forEach(r => {
            const i = dv(r);
            i.length && (n.set(r, i),
            r.render())
        }
        ),
        e.forEach(r => r.measureInitialState()),
        t.forEach(r => {
            r.render();
            const i = n.get(r);
            i && i.forEach( ([s,o]) => {
                var a;
                (a = r.getValue(s)) == null || a.set(o)
            }
            )
        }
        ),
        e.forEach(r => r.measureEndState()),
        e.forEach(r => {
            r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY)
        }
        )
    }
    La = !1,
    Va = !1,
    rn.forEach(e => e.complete(Ra)),
    rn.clear()
}
function jp() {
    rn.forEach(e => {
        e.readKeyframes(),
        e.needsMeasurement && (La = !0)
    }
    )
}
function hv() {
    Ra = !0,
    jp(),
    Ap(),
    Ra = !1
}
class iu {
    constructor(t, n, r, i, s, o=!1) {
        this.state = "pending",
        this.isAsync = !1,
        this.needsMeasurement = !1,
        this.unresolvedKeyframes = [...t],
        this.onComplete = n,
        this.name = r,
        this.motionValue = i,
        this.element = s,
        this.isAsync = o
    }
    scheduleResolve() {
        this.state = "scheduled",
        this.isAsync ? (rn.add(this),
        Va || (Va = !0,
        W.read(jp),
        W.resolveKeyframes(Ap))) : (this.readKeyframes(),
        this.complete())
    }
    readKeyframes() {
        const {unresolvedKeyframes: t, name: n, element: r, motionValue: i} = this;
        if (t[0] === null) {
            const s = i == null ? void 0 : i.get()
              , o = t[t.length - 1];
            if (s !== void 0)
                t[0] = s;
            else if (r && n) {
                const a = r.readValue(n, o);
                a != null && (t[0] = a)
            }
            t[0] === void 0 && (t[0] = o),
            i && s === void 0 && i.set(t[0])
        }
        sv(t)
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete(t=!1) {
        this.state = "complete",
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t),
        rn.delete(this)
    }
    cancel() {
        this.state === "scheduled" && (rn.delete(this),
        this.state = "pending")
    }
    resume() {
        this.state === "pending" && this.scheduleResolve()
    }
}
const pv = e => e.startsWith("--");
function mv(e, t, n) {
    pv(t) ? e.style.setProperty(t, n) : e.style[t] = n
}
const yv = Kl( () => window.ScrollTimeline !== void 0)
  , gv = {};
function vv(e, t) {
    const n = Kl(e);
    return () => gv[t] ?? n()
}
const Np = vv( () => {
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        })
    } catch {
        return !1
    }
    return !0
}
, "linearEasing")
  , dr = ([e,t,n,r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`
  , Bc = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: dr([0, .65, .55, 1]),
    circOut: dr([.55, 0, 1, .45]),
    backIn: dr([.31, .01, .66, -.59]),
    backOut: dr([.33, 1.53, .69, .99])
};
function Vp(e, t) {
    if (e)
        return typeof e == "function" ? Np() ? Mp(e, t) : "ease-out" : gp(e) ? dr(e) : Array.isArray(e) ? e.map(n => Vp(n, t) || Bc.easeOut) : Bc[e]
}
function xv(e, t, n, {delay: r=0, duration: i=300, repeat: s=0, repeatType: o="loop", ease: a="easeOut", times: l}={}, u=void 0) {
    const c = {
        [t]: n
    };
    l && (c.offset = l);
    const f = Vp(a, i);
    Array.isArray(f) && (c.easing = f);
    const d = {
        delay: r,
        duration: i,
        easing: Array.isArray(f) ? "linear" : f,
        fill: "both",
        iterations: s + 1,
        direction: o === "reverse" ? "alternate" : "normal"
    };
    return u && (d.pseudoElement = u),
    e.animate(c, d)
}
function Lp(e) {
    return typeof e == "function" && "applyToOptions"in e
}
function wv({type: e, ...t}) {
    return Lp(e) && Np() ? e.applyToOptions(t) : (t.duration ?? (t.duration = 300),
    t.ease ?? (t.ease = "easeOut"),
    t)
}
class Sv extends nu {
    constructor(t) {
        if (super(),
        this.finishedTime = null,
        this.isStopped = !1,
        !t)
            return;
        const {element: n, name: r, keyframes: i, pseudoElement: s, allowFlatten: o=!1, finalKeyframe: a, onComplete: l} = t;
        this.isPseudoElement = !!s,
        this.allowFlatten = o,
        this.options = t,
        gs(typeof t.type != "string");
        const u = wv(t);
        this.animation = xv(n, r, i, u, s),
        u.autoplay === !1 && this.animation.pause(),
        this.animation.onfinish = () => {
            if (this.finishedTime = this.time,
            !s) {
                const c = tu(i, this.options, a, this.speed);
                this.updateMotionValue ? this.updateMotionValue(c) : mv(n, r, c),
                this.animation.cancel()
            }
            l == null || l(),
            this.notifyFinished()
        }
    }
    play() {
        this.isStopped || (this.animation.play(),
        this.state === "finished" && this.updateFinished())
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        var t, n;
        (n = (t = this.animation).finish) == null || n.call(t)
    }
    cancel() {
        try {
            this.animation.cancel()
        } catch {}
    }
    stop() {
        if (this.isStopped)
            return;
        this.isStopped = !0;
        const {state: t} = this;
        t === "idle" || t === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
        this.isPseudoElement || this.cancel())
    }
    commitStyles() {
        var t, n;
        this.isPseudoElement || (n = (t = this.animation).commitStyles) == null || n.call(t)
    }
    get duration() {
        var n, r;
        const t = ((r = (n = this.animation.effect) == null ? void 0 : n.getComputedTiming) == null ? void 0 : r.call(n).duration) || 0;
        return ze(Number(t))
    }
    get iterationDuration() {
        const {delay: t=0} = this.options || {};
        return this.duration + ze(t)
    }
    get time() {
        return ze(Number(this.animation.currentTime) || 0)
    }
    set time(t) {
        this.finishedTime = null,
        this.animation.currentTime = rt(t)
    }
    get speed() {
        return this.animation.playbackRate
    }
    set speed(t) {
        t < 0 && (this.finishedTime = null),
        this.animation.playbackRate = t
    }
    get state() {
        return this.finishedTime !== null ? "finished" : this.animation.playState
    }
    get startTime() {
        return Number(this.animation.startTime)
    }
    set startTime(t) {
        this.animation.startTime = t
    }
    attachTimeline({timeline: t, observe: n}) {
        var r;
        return this.allowFlatten && ((r = this.animation.effect) == null || r.updateTiming({
            easing: "linear"
        })),
        this.animation.onfinish = null,
        t && yv() ? (this.animation.timeline = t,
        Ue) : n(this)
    }
}
const Rp = {
    anticipate: hp,
    backInOut: dp,
    circInOut: mp
};
function Cv(e) {
    return e in Rp
}
function Tv(e) {
    typeof e.ease == "string" && Cv(e.ease) && (e.ease = Rp[e.ease])
}
const Uc = 10;
class kv extends Sv {
    constructor(t) {
        Tv(t),
        Fp(t),
        super(t),
        t.startTime && (this.startTime = t.startTime),
        this.options = t
    }
    updateMotionValue(t) {
        const {motionValue: n, onUpdate: r, onComplete: i, element: s, ...o} = this.options;
        if (!n)
            return;
        if (t !== void 0) {
            n.set(t);
            return
        }
        const a = new ru({
            ...o,
            autoplay: !1
        })
          , l = rt(this.finishedTime ?? this.time);
        n.setWithVelocity(a.sample(l - Uc).value, a.sample(l).value, Uc),
        a.stop()
    }
}
const $c = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (It.test(e) || e === "0") && !e.startsWith("url("));
function Pv(e) {
    const t = e[0];
    if (e.length === 1)
        return !0;
    for (let n = 0; n < e.length; n++)
        if (e[n] !== t)
            return !0
}
function Ev(e, t, n, r) {
    const i = e[0];
    if (i === null)
        return !1;
    if (t === "display" || t === "visibility")
        return !0;
    const s = e[e.length - 1]
      , o = $c(i, t)
      , a = $c(s, t);
    return !o || !a ? !1 : Pv(e) || (n === "spring" || Lp(n)) && r
}
function _a(e) {
    e.duration = 0,
    e.type = "keyframes"
}
const Mv = new Set(["opacity", "clipPath", "filter", "transform"])
  , Dv = Kl( () => Object.hasOwnProperty.call(Element.prototype, "animate"));
function Fv(e) {
    var c;
    const {motionValue: t, name: n, repeatDelay: r, repeatType: i, damping: s, type: o} = e;
    if (!(((c = t == null ? void 0 : t.owner) == null ? void 0 : c.current)instanceof HTMLElement))
        return !1;
    const {onUpdate: l, transformTemplate: u} = t.owner.getProps();
    return Dv() && n && Mv.has(n) && (n !== "transform" || !u) && !l && !r && i !== "mirror" && s !== 0 && o !== "inertia"
}
const Av = 40;
class jv extends nu {
    constructor({autoplay: t=!0, delay: n=0, type: r="keyframes", repeat: i=0, repeatDelay: s=0, repeatType: o="loop", keyframes: a, name: l, motionValue: u, element: c, ...f}) {
        var g;
        super(),
        this.stop = () => {
            var x, E;
            this._animation && (this._animation.stop(),
            (x = this.stopTimeline) == null || x.call(this)),
            (E = this.keyframeResolver) == null || E.cancel()
        }
        ,
        this.createdAt = ke.now();
        const d = {
            autoplay: t,
            delay: n,
            type: r,
            repeat: i,
            repeatDelay: s,
            repeatType: o,
            name: l,
            motionValue: u,
            element: c,
            ...f
        }
          , y = (c == null ? void 0 : c.KeyframeResolver) || iu;
        this.keyframeResolver = new y(a, (x, E, p) => this.onKeyframesResolved(x, E, d, !p),l,u,c),
        (g = this.keyframeResolver) == null || g.scheduleResolve()
    }
    onKeyframesResolved(t, n, r, i) {
        this.keyframeResolver = void 0;
        const {name: s, type: o, velocity: a, delay: l, isHandoff: u, onUpdate: c} = r;
        this.resolvedAt = ke.now(),
        Ev(t, s, o, a) || ((mt.instantAnimations || !l) && (c == null || c(tu(t, r, n))),
        t[0] = t[t.length - 1],
        _a(r),
        r.repeat = 0);
        const d = {
            startTime: i ? this.resolvedAt ? this.resolvedAt - this.createdAt > Av ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
            finalKeyframe: n,
            ...r,
            keyframes: t
        }
          , y = !u && Fv(d) ? new kv({
            ...d,
            element: d.motionValue.owner.current
        }) : new ru(d);
        y.finished.then( () => this.notifyFinished()).catch(Ue),
        this.pendingTimeline && (this.stopTimeline = y.attachTimeline(this.pendingTimeline),
        this.pendingTimeline = void 0),
        this._animation = y
    }
    get finished() {
        return this._animation ? this.animation.finished : this._finished
    }
    then(t, n) {
        return this.finished.finally(t).then( () => {}
        )
    }
    get animation() {
        var t;
        return this._animation || ((t = this.keyframeResolver) == null || t.resume(),
        hv()),
        this._animation
    }
    get duration() {
        return this.animation.duration
    }
    get iterationDuration() {
        return this.animation.iterationDuration
    }
    get time() {
        return this.animation.time
    }
    set time(t) {
        this.animation.time = t
    }
    get speed() {
        return this.animation.speed
    }
    get state() {
        return this.animation.state
    }
    set speed(t) {
        this.animation.speed = t
    }
    get startTime() {
        return this.animation.startTime
    }
    attachTimeline(t) {
        return this._animation ? this.stopTimeline = this.animation.attachTimeline(t) : this.pendingTimeline = t,
        () => this.stop()
    }
    play() {
        this.animation.play()
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        this.animation.complete()
    }
    cancel() {
        var t;
        this._animation && this.animation.cancel(),
        (t = this.keyframeResolver) == null || t.cancel()
    }
}
const Nv = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Vv(e) {
    const t = Nv.exec(e);
    if (!t)
        return [, ];
    const [,n,r,i] = t;
    return [`--${n ?? r}`, i]
}
function _p(e, t, n=1) {
    const [r,i] = Vv(e);
    if (!r)
        return;
    const s = window.getComputedStyle(t).getPropertyValue(r);
    if (s) {
        const o = s.trim();
        return ip(o) ? parseFloat(o) : o
    }
    return Xl(i) ? _p(i, t, n + 1) : i
}
function su(e, t) {
    return (e == null ? void 0 : e[t]) ?? (e == null ? void 0 : e.default) ?? e
}
const Ip = new Set(["width", "height", "top", "left", "right", "bottom", ...Xn])
  , Lv = {
    test: e => e === "auto",
    parse: e => e
}
  , Op = e => t => t.test(e)
  , zp = [Qn, V, it, xt, P0, k0, Lv]
  , Wc = e => zp.find(Op(e));
function Rv(e) {
    return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || op(e) : !0
}
const _v = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Iv(e) {
    const [t,n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow")
        return e;
    const [r] = n.match(Zl) || [];
    if (!r)
        return e;
    const i = n.replace(r, "");
    let s = _v.has(t) ? 1 : 0;
    return r !== n && (s *= 100),
    t + "(" + s + i + ")"
}
const Ov = /\b([a-z-]*)\(.*?\)/gu
  , Ia = {
    ...It,
    getAnimatableNone: e => {
        const t = e.match(Ov);
        return t ? t.map(Iv).join(" ") : e
    }
}
  , Hc = {
    ...Qn,
    transform: Math.round
}
  , zv = {
    rotate: xt,
    rotateX: xt,
    rotateY: xt,
    rotateZ: xt,
    scale: Mi,
    scaleX: Mi,
    scaleY: Mi,
    scaleZ: Mi,
    skew: xt,
    skewX: xt,
    skewY: xt,
    distance: V,
    translateX: V,
    translateY: V,
    translateZ: V,
    x: V,
    y: V,
    z: V,
    perspective: V,
    transformPerspective: V,
    opacity: Kr,
    originX: jc,
    originY: jc,
    originZ: V
}
  , ou = {
    borderWidth: V,
    borderTopWidth: V,
    borderRightWidth: V,
    borderBottomWidth: V,
    borderLeftWidth: V,
    borderRadius: V,
    radius: V,
    borderTopLeftRadius: V,
    borderTopRightRadius: V,
    borderBottomRightRadius: V,
    borderBottomLeftRadius: V,
    width: V,
    maxWidth: V,
    height: V,
    maxHeight: V,
    top: V,
    right: V,
    bottom: V,
    left: V,
    padding: V,
    paddingTop: V,
    paddingRight: V,
    paddingBottom: V,
    paddingLeft: V,
    margin: V,
    marginTop: V,
    marginRight: V,
    marginBottom: V,
    marginLeft: V,
    backgroundPositionX: V,
    backgroundPositionY: V,
    ...zv,
    zIndex: Hc,
    fillOpacity: Kr,
    strokeOpacity: Kr,
    numOctaves: Hc
}
  , Bv = {
    ...ou,
    color: te,
    backgroundColor: te,
    outlineColor: te,
    fill: te,
    stroke: te,
    borderColor: te,
    borderTopColor: te,
    borderRightColor: te,
    borderBottomColor: te,
    borderLeftColor: te,
    filter: Ia,
    WebkitFilter: Ia
}
  , Bp = e => Bv[e];
function Up(e, t) {
    let n = Bp(e);
    return n !== Ia && (n = It),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const Uv = new Set(["auto", "none", "0"]);
function $v(e, t, n) {
    let r = 0, i;
    for (; r < e.length && !i; ) {
        const s = e[r];
        typeof s == "string" && !Uv.has(s) && br(s).values.length && (i = e[r]),
        r++
    }
    if (i && n)
        for (const s of t)
            e[s] = Up(n, i)
}
class Wv extends iu {
    constructor(t, n, r, i, s) {
        super(t, n, r, i, s, !0)
    }
    readKeyframes() {
        const {unresolvedKeyframes: t, element: n, name: r} = this;
        if (!n || !n.current)
            return;
        super.readKeyframes();
        for (let l = 0; l < t.length; l++) {
            let u = t[l];
            if (typeof u == "string" && (u = u.trim(),
            Xl(u))) {
                const c = _p(u, n.current);
                c !== void 0 && (t[l] = c),
                l === t.length - 1 && (this.finalKeyframe = u)
            }
        }
        if (this.resolveNoneKeyframes(),
        !Ip.has(r) || t.length !== 2)
            return;
        const [i,s] = t
          , o = Wc(i)
          , a = Wc(s);
        if (o !== a)
            if (zc(o) && zc(a))
                for (let l = 0; l < t.length; l++) {
                    const u = t[l];
                    typeof u == "string" && (t[l] = parseFloat(u))
                }
            else
                nn[r] && (this.needsMeasurement = !0)
    }
    resolveNoneKeyframes() {
        const {unresolvedKeyframes: t, name: n} = this
          , r = [];
        for (let i = 0; i < t.length; i++)
            (t[i] === null || Rv(t[i])) && r.push(i);
        r.length && $v(t, r, n)
    }
    measureInitialState() {
        const {element: t, unresolvedKeyframes: n, name: r} = this;
        if (!t || !t.current)
            return;
        r === "height" && (this.suspendedScrollY = window.pageYOffset),
        this.measuredOrigin = nn[r](t.measureViewportBox(), window.getComputedStyle(t.current)),
        n[0] = this.measuredOrigin;
        const i = n[n.length - 1];
        i !== void 0 && t.getValue(r, i).jump(i, !1)
    }
    measureEndState() {
        var a;
        const {element: t, name: n, unresolvedKeyframes: r} = this;
        if (!t || !t.current)
            return;
        const i = t.getValue(n);
        i && i.jump(this.measuredOrigin, !1);
        const s = r.length - 1
          , o = r[s];
        r[s] = nn[n](t.measureViewportBox(), window.getComputedStyle(t.current)),
        o !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = o),
        (a = this.removedTransforms) != null && a.length && this.removedTransforms.forEach( ([l,u]) => {
            t.getValue(l).set(u)
        }
        ),
        this.resolveNoneKeyframes()
    }
}
function Hv(e, t, n) {
    if (e instanceof EventTarget)
        return [e];
    if (typeof e == "string") {
        const i = document.querySelectorAll(e);
        return i ? Array.from(i) : []
    }
    return Array.from(e)
}
const $p = (e, t) => t && typeof e == "number" ? t.transform(e) : e;
function Wp(e) {
    return sp(e) && "offsetHeight"in e
}
const Kc = 30
  , Kv = e => !isNaN(parseFloat(e));
class bv {
    constructor(t, n={}) {
        this.canTrackVelocity = null,
        this.events = {},
        this.updateAndNotify = r => {
            var s;
            const i = ke.now();
            if (this.updatedAt !== i && this.setPrevFrameValue(),
            this.prev = this.current,
            this.setCurrent(r),
            this.current !== this.prev && ((s = this.events.change) == null || s.notify(this.current),
            this.dependents))
                for (const o of this.dependents)
                    o.dirty()
        }
        ,
        this.hasAnimated = !1,
        this.setCurrent(t),
        this.owner = n.owner
    }
    setCurrent(t) {
        this.current = t,
        this.updatedAt = ke.now(),
        this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = Kv(this.current))
    }
    setPrevFrameValue(t=this.current) {
        this.prevFrameValue = t,
        this.prevUpdatedAt = this.updatedAt
    }
    onChange(t) {
        return this.on("change", t)
    }
    on(t, n) {
        this.events[t] || (this.events[t] = new bl);
        const r = this.events[t].add(n);
        return t === "change" ? () => {
            r(),
            W.read( () => {
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : r
    }
    clearListeners() {
        for (const t in this.events)
            this.events[t].clear()
    }
    attach(t, n) {
        this.passiveEffect = t,
        this.stopPassiveEffect = n
    }
    set(t) {
        this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t)
    }
    setWithVelocity(t, n, r) {
        this.set(n),
        this.prev = void 0,
        this.prevFrameValue = t,
        this.prevUpdatedAt = this.updatedAt - r
    }
    jump(t, n=!0) {
        this.updateAndNotify(t),
        this.prev = t,
        this.prevUpdatedAt = this.prevFrameValue = void 0,
        n && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    dirty() {
        var t;
        (t = this.events.change) == null || t.notify(this.current)
    }
    addDependent(t) {
        this.dependents || (this.dependents = new Set),
        this.dependents.add(t)
    }
    removeDependent(t) {
        this.dependents && this.dependents.delete(t)
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const t = ke.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > Kc)
            return 0;
        const n = Math.min(this.updatedAt - this.prevUpdatedAt, Kc);
        return ap(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
    }
    start(t) {
        return this.stop(),
        new Promise(n => {
            this.hasAnimated = !0,
            this.animation = t(n),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then( () => {
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        var t, n;
        (t = this.dependents) == null || t.clear(),
        (n = this.events.destroy) == null || n.notify(),
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function Hn(e, t) {
    return new bv(e,t)
}
const {schedule: au, cancel: oS} = vp(queueMicrotask, !1)
  , Ke = {
    x: !1,
    y: !1
};
function Hp() {
    return Ke.x || Ke.y
}
function Gv(e) {
    return e === "x" || e === "y" ? Ke[e] ? null : (Ke[e] = !0,
    () => {
        Ke[e] = !1
    }
    ) : Ke.x || Ke.y ? null : (Ke.x = Ke.y = !0,
    () => {
        Ke.x = Ke.y = !1
    }
    )
}
function Kp(e, t) {
    const n = Hv(e)
      , r = new AbortController
      , i = {
        passive: !0,
        ...t,
        signal: r.signal
    };
    return [n, i, () => r.abort()]
}
function bc(e) {
    return !(e.pointerType === "touch" || Hp())
}
function Yv(e, t, n={}) {
    const [r,i,s] = Kp(e, n)
      , o = a => {
        if (!bc(a))
            return;
        const {target: l} = a
          , u = t(l, a);
        if (typeof u != "function" || !l)
            return;
        const c = f => {
            bc(f) && (u(f),
            l.removeEventListener("pointerleave", c))
        }
        ;
        l.addEventListener("pointerleave", c, i)
    }
    ;
    return r.forEach(a => {
        a.addEventListener("pointerenter", o, i)
    }
    ),
    s
}
const bp = (e, t) => t ? e === t ? !0 : bp(e, t.parentElement) : !1
  , lu = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1
  , Qv = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function Xv(e) {
    return Qv.has(e.tagName) || e.tabIndex !== -1
}
const Hi = new WeakSet;
function Gc(e) {
    return t => {
        t.key === "Enter" && e(t)
    }
}
function To(e, t) {
    e.dispatchEvent(new PointerEvent("pointer" + t,{
        isPrimary: !0,
        bubbles: !0
    }))
}
const Zv = (e, t) => {
    const n = e.currentTarget;
    if (!n)
        return;
    const r = Gc( () => {
        if (Hi.has(n))
            return;
        To(n, "down");
        const i = Gc( () => {
            To(n, "up")
        }
        )
          , s = () => To(n, "cancel");
        n.addEventListener("keyup", i, t),
        n.addEventListener("blur", s, t)
    }
    );
    n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t)
}
;
function Yc(e) {
    return lu(e) && !Hp()
}
function Jv(e, t, n={}) {
    const [r,i,s] = Kp(e, n)
      , o = a => {
        const l = a.currentTarget;
        if (!Yc(a))
            return;
        Hi.add(l);
        const u = t(l, a)
          , c = (y, g) => {
            window.removeEventListener("pointerup", f),
            window.removeEventListener("pointercancel", d),
            Hi.has(l) && Hi.delete(l),
            Yc(y) && typeof u == "function" && u(y, {
                success: g
            })
        }
          , f = y => {
            c(y, l === window || l === document || n.useGlobalTarget || bp(l, y.target))
        }
          , d = y => {
            c(y, !1)
        }
        ;
        window.addEventListener("pointerup", f, i),
        window.addEventListener("pointercancel", d, i)
    }
    ;
    return r.forEach(a => {
        (n.useGlobalTarget ? window : a).addEventListener("pointerdown", o, i),
        Wp(a) && (a.addEventListener("focus", u => Zv(u, i)),
        !Xv(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0))
    }
    ),
    s
}
function Gp(e) {
    return sp(e) && "ownerSVGElement"in e
}
function qv(e) {
    return Gp(e) && e.tagName === "svg"
}
const me = e => !!(e && e.getVelocity)
  , e1 = [...zp, te, It]
  , t1 = e => e1.find(Op(e))
  , uu = M.createContext({
    transformPagePoint: e => e,
    isStatic: !1,
    reducedMotion: "never"
});
function Qc(e, t) {
    if (typeof e == "function")
        return e(t);
    e != null && (e.current = t)
}
function n1(...e) {
    return t => {
        let n = !1;
        const r = e.map(i => {
            const s = Qc(i, t);
            return !n && typeof s == "function" && (n = !0),
            s
        }
        );
        if (n)
            return () => {
                for (let i = 0; i < r.length; i++) {
                    const s = r[i];
                    typeof s == "function" ? s() : Qc(e[i], null)
                }
            }
    }
}
function r1(...e) {
    return M.useCallback(n1(...e), e)
}
class i1 extends M.Component {
    getSnapshotBeforeUpdate(t) {
        const n = this.props.childRef.current;
        if (n && t.isPresent && !this.props.isPresent) {
            const r = n.offsetParent
              , i = Wp(r) && r.offsetWidth || 0
              , s = this.props.sizeRef.current;
            s.height = n.offsetHeight || 0,
            s.width = n.offsetWidth || 0,
            s.top = n.offsetTop,
            s.left = n.offsetLeft,
            s.right = i - s.width - s.left
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}
function s1({children: e, isPresent: t, anchorX: n, root: r}) {
    const i = M.useId()
      , s = M.useRef(null)
      , o = M.useRef({
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        right: 0
    })
      , {nonce: a} = M.useContext(uu)
      , l = r1(s, e == null ? void 0 : e.ref);
    return M.useInsertionEffect( () => {
        const {width: u, height: c, top: f, left: d, right: y} = o.current;
        if (t || !s.current || !u || !c)
            return;
        const g = n === "left" ? `left: ${d}` : `right: ${y}`;
        s.current.dataset.motionPopId = i;
        const x = document.createElement("style");
        a && (x.nonce = a);
        const E = r ?? document.head;
        return E.appendChild(x),
        x.sheet && x.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${u}px !important;
            height: ${c}px !important;
            ${g}px !important;
            top: ${f}px !important;
          }
        `),
        () => {
            E.contains(x) && E.removeChild(x)
        }
    }
    , [t]),
    v.jsx(i1, {
        isPresent: t,
        childRef: s,
        sizeRef: o,
        children: M.cloneElement(e, {
            ref: l
        })
    })
}
const o1 = ({children: e, initial: t, isPresent: n, onExitComplete: r, custom: i, presenceAffectsLayout: s, mode: o, anchorX: a, root: l}) => {
    const u = Ul(a1)
      , c = M.useId();
    let f = !0
      , d = M.useMemo( () => (f = !1,
    {
        id: c,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: y => {
            u.set(y, !0);
            for (const g of u.values())
                if (!g)
                    return;
            r && r()
        }
        ,
        register: y => (u.set(y, !1),
        () => u.delete(y))
    }), [n, u, r]);
    return s && f && (d = {
        ...d
    }),
    M.useMemo( () => {
        u.forEach( (y, g) => u.set(g, !1))
    }
    , [n]),
    M.useEffect( () => {
        !n && !u.size && r && r()
    }
    , [n]),
    o === "popLayout" && (e = v.jsx(s1, {
        isPresent: n,
        anchorX: a,
        root: l,
        children: e
    })),
    v.jsx(Bs.Provider, {
        value: d,
        children: e
    })
}
;
function a1() {
    return new Map
}
function Yp(e=!0) {
    const t = M.useContext(Bs);
    if (t === null)
        return [!0, null];
    const {isPresent: n, onExitComplete: r, register: i} = t
      , s = M.useId();
    M.useEffect( () => {
        if (e)
            return i(s)
    }
    , [e]);
    const o = M.useCallback( () => e && r && r(s), [s, r, e]);
    return !n && r ? [!1, o] : [!0]
}
const Di = e => e.key || "";
function Xc(e) {
    const t = [];
    return M.Children.forEach(e, n => {
        M.isValidElement(n) && t.push(n)
    }
    ),
    t
}
const Ss = ({children: e, custom: t, initial: n=!0, onExitComplete: r, presenceAffectsLayout: i=!0, mode: s="sync", propagate: o=!1, anchorX: a="left", root: l}) => {
    const [u,c] = Yp(o)
      , f = M.useMemo( () => Xc(e), [e])
      , d = o && !u ? [] : f.map(Di)
      , y = M.useRef(!0)
      , g = M.useRef(f)
      , x = Ul( () => new Map)
      , [E,p] = M.useState(f)
      , [h,m] = M.useState(f);
    rp( () => {
        y.current = !1,
        g.current = f;
        for (let C = 0; C < h.length; C++) {
            const k = Di(h[C]);
            d.includes(k) ? x.delete(k) : x.get(k) !== !0 && x.set(k, !1)
        }
    }
    , [h, d.length, d.join("-")]);
    const S = [];
    if (f !== E) {
        let C = [...f];
        for (let k = 0; k < h.length; k++) {
            const T = h[k]
              , R = Di(T);
            d.includes(R) || (C.splice(k, 0, T),
            S.push(T))
        }
        return s === "wait" && S.length && (C = S),
        m(Xc(C)),
        p(f),
        null
    }
    const {forceRender: w} = M.useContext(Bl);
    return v.jsx(v.Fragment, {
        children: h.map(C => {
            const k = Di(C)
              , T = o && !u ? !1 : f === h || d.includes(k)
              , R = () => {
                if (x.has(k))
                    x.set(k, !0);
                else
                    return;
                let j = !0;
                x.forEach(ee => {
                    ee || (j = !1)
                }
                ),
                j && (w == null || w(),
                m(g.current),
                o && (c == null || c()),
                r && r())
            }
            ;
            return v.jsx(o1, {
                isPresent: T,
                initial: !y.current || n ? void 0 : !1,
                custom: t,
                presenceAffectsLayout: i,
                mode: s,
                root: l,
                onExitComplete: T ? void 0 : R,
                anchorX: a,
                children: C
            }, k)
        }
        )
    })
}
  , Qp = M.createContext({
    strict: !1
})
  , Zc = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}
  , Kn = {};
for (const e in Zc)
    Kn[e] = {
        isEnabled: t => Zc[e].some(n => !!t[n])
    };
function l1(e) {
    for (const t in e)
        Kn[t] = {
            ...Kn[t],
            ...e[t]
        }
}
const u1 = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function Cs(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || u1.has(e)
}
let Xp = e => !Cs(e);
function c1(e) {
    typeof e == "function" && (Xp = t => t.startsWith("on") ? !Cs(t) : e(t))
}
try {
    c1(require("@emotion/is-prop-valid").default)
} catch {}
function f1(e, t, n) {
    const r = {};
    for (const i in e)
        i === "values" && typeof e.values == "object" || (Xp(i) || n === !0 && Cs(i) || !t && !Cs(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
    return r
}
const Us = M.createContext({});
function $s(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function"
}
function Gr(e) {
    return typeof e == "string" || Array.isArray(e)
}
const cu = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , fu = ["initial", ...cu];
function Ws(e) {
    return $s(e.animate) || fu.some(t => Gr(e[t]))
}
function Zp(e) {
    return !!(Ws(e) || e.variants)
}
function d1(e, t) {
    if (Ws(e)) {
        const {initial: n, animate: r} = e;
        return {
            initial: n === !1 || Gr(n) ? n : void 0,
            animate: Gr(r) ? r : void 0
        }
    }
    return e.inherit !== !1 ? t : {}
}
function h1(e) {
    const {initial: t, animate: n} = d1(e, M.useContext(Us));
    return M.useMemo( () => ({
        initial: t,
        animate: n
    }), [Jc(t), Jc(n)])
}
function Jc(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const Yr = {};
function p1(e) {
    for (const t in e)
        Yr[t] = e[t],
        Ql(t) && (Yr[t].isCSSVariable = !0)
}
function Jp(e, {layout: t, layoutId: n}) {
    return Zn.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Yr[e] || e === "opacity")
}
const m1 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , y1 = Xn.length;
function g1(e, t, n) {
    let r = ""
      , i = !0;
    for (let s = 0; s < y1; s++) {
        const o = Xn[s]
          , a = e[o];
        if (a === void 0)
            continue;
        let l = !0;
        if (typeof a == "number" ? l = a === (o.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0,
        !l || n) {
            const u = $p(a, ou[o]);
            if (!l) {
                i = !1;
                const c = m1[o] || o;
                r += `${c}(${u}) `
            }
            n && (t[o] = u)
        }
    }
    return r = r.trim(),
    n ? r = n(t, i ? "" : r) : i && (r = "none"),
    r
}
function du(e, t, n) {
    const {style: r, vars: i, transformOrigin: s} = e;
    let o = !1
      , a = !1;
    for (const l in t) {
        const u = t[l];
        if (Zn.has(l)) {
            o = !0;
            continue
        } else if (Ql(l)) {
            i[l] = u;
            continue
        } else {
            const c = $p(u, ou[l]);
            l.startsWith("origin") ? (a = !0,
            s[l] = c) : r[l] = c
        }
    }
    if (t.transform || (o || n ? r.transform = g1(t, e.transform, n) : r.transform && (r.transform = "none")),
    a) {
        const {originX: l="50%", originY: u="50%", originZ: c=0} = s;
        r.transformOrigin = `${l} ${u} ${c}`
    }
}
const hu = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});
function qp(e, t, n) {
    for (const r in t)
        !me(t[r]) && !Jp(r, n) && (e[r] = t[r])
}
function v1({transformTemplate: e}, t) {
    return M.useMemo( () => {
        const n = hu();
        return du(n, t, e),
        Object.assign({}, n.vars, n.style)
    }
    , [t])
}
function x1(e, t) {
    const n = e.style || {}
      , r = {};
    return qp(r, n, e),
    Object.assign(r, v1(e, t)),
    r
}
function w1(e, t) {
    const n = {}
      , r = x1(e, t);
    return e.drag && e.dragListener !== !1 && (n.draggable = !1,
    r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none",
    r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`),
    e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0),
    n.style = r,
    n
}
const S1 = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , C1 = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function T1(e, t, n=1, r=0, i=!0) {
    e.pathLength = 1;
    const s = i ? S1 : C1;
    e[s.offset] = V.transform(-r);
    const o = V.transform(t)
      , a = V.transform(n);
    e[s.array] = `${o} ${a}`
}
function em(e, {attrX: t, attrY: n, attrScale: r, pathLength: i, pathSpacing: s=1, pathOffset: o=0, ...a}, l, u, c) {
    if (du(e, a, u),
    l) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style,
    e.style = {};
    const {attrs: f, style: d} = e;
    f.transform && (d.transform = f.transform,
    delete f.transform),
    (d.transform || f.transformOrigin) && (d.transformOrigin = f.transformOrigin ?? "50% 50%",
    delete f.transformOrigin),
    d.transform && (d.transformBox = (c == null ? void 0 : c.transformBox) ?? "fill-box",
    delete f.transformBox),
    t !== void 0 && (f.x = t),
    n !== void 0 && (f.y = n),
    r !== void 0 && (f.scale = r),
    i !== void 0 && T1(f, i, s, o, !1)
}
const tm = () => ({
    ...hu(),
    attrs: {}
})
  , nm = e => typeof e == "string" && e.toLowerCase() === "svg";
function k1(e, t, n, r) {
    const i = M.useMemo( () => {
        const s = tm();
        return em(s, t, nm(r), e.transformTemplate, e.style),
        {
            ...s.attrs,
            style: {
                ...s.style
            }
        }
    }
    , [t]);
    if (e.style) {
        const s = {};
        qp(s, e.style, e),
        i.style = {
            ...s,
            ...i.style
        }
    }
    return i
}
const P1 = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function pu(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(P1.indexOf(e) > -1 || /[A-Z]/u.test(e))
}
function E1(e, t, n, {latestValues: r}, i, s=!1) {
    const a = (pu(e) ? k1 : w1)(t, r, i, e)
      , l = f1(t, typeof e == "string", s)
      , u = e !== M.Fragment ? {
        ...l,
        ...a,
        ref: n
    } : {}
      , {children: c} = t
      , f = M.useMemo( () => me(c) ? c.get() : c, [c]);
    return M.createElement(e, {
        ...u,
        children: f
    })
}
function qc(e) {
    const t = [{}, {}];
    return e == null || e.values.forEach( (n, r) => {
        t[0][r] = n.get(),
        t[1][r] = n.getVelocity()
    }
    ),
    t
}
function mu(e, t, n, r) {
    if (typeof t == "function") {
        const [i,s] = qc(r);
        t = t(n !== void 0 ? n : e.custom, i, s)
    }
    if (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function") {
        const [i,s] = qc(r);
        t = t(n !== void 0 ? n : e.custom, i, s)
    }
    return t
}
function Ki(e) {
    return me(e) ? e.get() : e
}
function M1({scrapeMotionValuesFromProps: e, createRenderState: t}, n, r, i) {
    return {
        latestValues: D1(n, r, i, e),
        renderState: t()
    }
}
function D1(e, t, n, r) {
    const i = {}
      , s = r(e, {});
    for (const d in s)
        i[d] = Ki(s[d]);
    let {initial: o, animate: a} = e;
    const l = Ws(e)
      , u = Zp(e);
    t && u && !l && e.inherit !== !1 && (o === void 0 && (o = t.initial),
    a === void 0 && (a = t.animate));
    let c = n ? n.initial === !1 : !1;
    c = c || o === !1;
    const f = c ? a : o;
    if (f && typeof f != "boolean" && !$s(f)) {
        const d = Array.isArray(f) ? f : [f];
        for (let y = 0; y < d.length; y++) {
            const g = mu(e, d[y]);
            if (g) {
                const {transitionEnd: x, transition: E, ...p} = g;
                for (const h in p) {
                    let m = p[h];
                    if (Array.isArray(m)) {
                        const S = c ? m.length - 1 : 0;
                        m = m[S]
                    }
                    m !== null && (i[h] = m)
                }
                for (const h in x)
                    i[h] = x[h]
            }
        }
    }
    return i
}
const rm = e => (t, n) => {
    const r = M.useContext(Us)
      , i = M.useContext(Bs)
      , s = () => M1(e, t, r, i);
    return n ? s() : Ul(s)
}
;
function yu(e, t, n) {
    var s;
    const {style: r} = e
      , i = {};
    for (const o in r)
        (me(r[o]) || t.style && me(t.style[o]) || Jp(o, e) || ((s = n == null ? void 0 : n.getValue(o)) == null ? void 0 : s.liveStyle) !== void 0) && (i[o] = r[o]);
    return i
}
const F1 = rm({
    scrapeMotionValuesFromProps: yu,
    createRenderState: hu
});
function im(e, t, n) {
    const r = yu(e, t, n);
    for (const i in e)
        if (me(e[i]) || me(t[i])) {
            const s = Xn.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
            r[s] = e[i]
        }
    return r
}
const A1 = rm({
    scrapeMotionValuesFromProps: im,
    createRenderState: tm
})
  , j1 = Symbol.for("motionComponentSymbol");
function En(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}
function N1(e, t, n) {
    return M.useCallback(r => {
        r && e.onMount && e.onMount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : En(n) && (n.current = r))
    }
    , [t])
}
const gu = e => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
  , V1 = "framerAppearId"
  , sm = "data-" + gu(V1)
  , om = M.createContext({});
function L1(e, t, n, r, i) {
    var x, E;
    const {visualElement: s} = M.useContext(Us)
      , o = M.useContext(Qp)
      , a = M.useContext(Bs)
      , l = M.useContext(uu).reducedMotion
      , u = M.useRef(null);
    r = r || o.renderer,
    !u.current && r && (u.current = r(e, {
        visualState: t,
        parent: s,
        props: n,
        presenceContext: a,
        blockInitialAnimation: a ? a.initial === !1 : !1,
        reducedMotionConfig: l
    }));
    const c = u.current
      , f = M.useContext(om);
    c && !c.projection && i && (c.type === "html" || c.type === "svg") && R1(u.current, n, i, f);
    const d = M.useRef(!1);
    M.useInsertionEffect( () => {
        c && d.current && c.update(n, a)
    }
    );
    const y = n[sm]
      , g = M.useRef(!!y && !((x = window.MotionHandoffIsComplete) != null && x.call(window, y)) && ((E = window.MotionHasOptimisedAnimation) == null ? void 0 : E.call(window, y)));
    return rp( () => {
        c && (d.current = !0,
        window.MotionIsMounted = !0,
        c.updateFeatures(),
        c.scheduleRenderMicrotask(),
        g.current && c.animationState && c.animationState.animateChanges())
    }
    ),
    M.useEffect( () => {
        c && (!g.current && c.animationState && c.animationState.animateChanges(),
        g.current && (queueMicrotask( () => {
            var p;
            (p = window.MotionHandoffMarkAsComplete) == null || p.call(window, y)
        }
        ),
        g.current = !1),
        c.enteringChildren = void 0)
    }
    ),
    c
}
function R1(e, t, n, r) {
    const {layoutId: i, layout: s, drag: o, dragConstraints: a, layoutScroll: l, layoutRoot: u, layoutCrossfade: c} = t;
    e.projection = new n(e.latestValues,t["data-framer-portal-id"] ? void 0 : am(e.parent)),
    e.projection.setOptions({
        layoutId: i,
        layout: s,
        alwaysMeasureLayout: !!o || a && En(a),
        visualElement: e,
        animationType: typeof s == "string" ? s : "both",
        initialPromotionConfig: r,
        crossfade: c,
        layoutScroll: l,
        layoutRoot: u
    })
}
function am(e) {
    if (e)
        return e.options.allowProjection !== !1 ? e.projection : am(e.parent)
}
function ko(e, {forwardMotionProps: t=!1}={}, n, r) {
    n && l1(n);
    const i = pu(e) ? A1 : F1;
    function s(a, l) {
        let u;
        const c = {
            ...M.useContext(uu),
            ...a,
            layoutId: _1(a)
        }
          , {isStatic: f} = c
          , d = h1(a)
          , y = i(a, f);
        if (!f && $l) {
            I1();
            const g = O1(c);
            u = g.MeasureLayout,
            d.visualElement = L1(e, y, c, r, g.ProjectionNode)
        }
        return v.jsxs(Us.Provider, {
            value: d,
            children: [u && d.visualElement ? v.jsx(u, {
                visualElement: d.visualElement,
                ...c
            }) : null, E1(e, a, N1(y, d.visualElement, l), y, f, t)]
        })
    }
    s.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
    const o = M.forwardRef(s);
    return o[j1] = e,
    o
}
function _1({layoutId: e}) {
    const t = M.useContext(Bl).id;
    return t && e !== void 0 ? t + "-" + e : e
}
function I1(e, t) {
    M.useContext(Qp).strict
}
function O1(e) {
    const {drag: t, layout: n} = Kn;
    if (!t && !n)
        return {};
    const r = {
        ...t,
        ...n
    };
    return {
        MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? r.MeasureLayout : void 0,
        ProjectionNode: r.ProjectionNode
    }
}
function z1(e, t) {
    if (typeof Proxy > "u")
        return ko;
    const n = new Map
      , r = (s, o) => ko(s, o, e, t)
      , i = (s, o) => r(s, o);
    return new Proxy(i,{
        get: (s, o) => o === "create" ? r : (n.has(o) || n.set(o, ko(o, void 0, e, t)),
        n.get(o))
    })
}
function lm({top: e, left: t, right: n, bottom: r}) {
    return {
        x: {
            min: t,
            max: n
        },
        y: {
            min: e,
            max: r
        }
    }
}
function B1({x: e, y: t}) {
    return {
        top: t.min,
        right: e.max,
        bottom: t.max,
        left: e.min
    }
}
function U1(e, t) {
    if (!t)
        return e;
    const n = t({
        x: e.left,
        y: e.top
    })
      , r = t({
        x: e.right,
        y: e.bottom
    });
    return {
        top: n.y,
        left: n.x,
        bottom: r.y,
        right: r.x
    }
}
function Po(e) {
    return e === void 0 || e === 1
}
function Oa({scale: e, scaleX: t, scaleY: n}) {
    return !Po(e) || !Po(t) || !Po(n)
}
function Yt(e) {
    return Oa(e) || um(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}
function um(e) {
    return ef(e.x) || ef(e.y)
}
function ef(e) {
    return e && e !== "0%"
}
function Ts(e, t, n) {
    const r = e - n
      , i = t * r;
    return n + i
}
function tf(e, t, n, r, i) {
    return i !== void 0 && (e = Ts(e, i, r)),
    Ts(e, n, r) + t
}
function za(e, t=0, n=1, r, i) {
    e.min = tf(e.min, t, n, r, i),
    e.max = tf(e.max, t, n, r, i)
}
function cm(e, {x: t, y: n}) {
    za(e.x, t.translate, t.scale, t.originPoint),
    za(e.y, n.translate, n.scale, n.originPoint)
}
const nf = .999999999999
  , rf = 1.0000000000001;
function $1(e, t, n, r=!1) {
    const i = n.length;
    if (!i)
        return;
    t.x = t.y = 1;
    let s, o;
    for (let a = 0; a < i; a++) {
        s = n[a],
        o = s.projectionDelta;
        const {visualElement: l} = s.options;
        l && l.props.style && l.props.style.display === "contents" || (r && s.options.layoutScroll && s.scroll && s !== s.root && Dn(e, {
            x: -s.scroll.offset.x,
            y: -s.scroll.offset.y
        }),
        o && (t.x *= o.x.scale,
        t.y *= o.y.scale,
        cm(e, o)),
        r && Yt(s.latestValues) && Dn(e, s.latestValues))
    }
    t.x < rf && t.x > nf && (t.x = 1),
    t.y < rf && t.y > nf && (t.y = 1)
}
function Mn(e, t) {
    e.min = e.min + t,
    e.max = e.max + t
}
function sf(e, t, n, r, i=.5) {
    const s = b(e.min, e.max, i);
    za(e, t, n, s, r)
}
function Dn(e, t) {
    sf(e.x, t.x, t.scaleX, t.scale, t.originX),
    sf(e.y, t.y, t.scaleY, t.scale, t.originY)
}
function fm(e, t) {
    return lm(U1(e.getBoundingClientRect(), t))
}
function W1(e, t, n) {
    const r = fm(e, n)
      , {scroll: i} = t;
    return i && (Mn(r.x, i.offset.x),
    Mn(r.y, i.offset.y)),
    r
}
const of = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , Fn = () => ({
    x: of(),
    y: of()
})
  , af = () => ({
    min: 0,
    max: 0
})
  , J = () => ({
    x: af(),
    y: af()
})
  , Ba = {
    current: null
}
  , dm = {
    current: !1
};
function H1() {
    if (dm.current = !0,
    !!$l)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)")
              , t = () => Ba.current = e.matches;
            e.addEventListener("change", t),
            t()
        } else
            Ba.current = !1
}
const K1 = new WeakMap;
function b1(e, t, n) {
    for (const r in t) {
        const i = t[r]
          , s = n[r];
        if (me(i))
            e.addValue(r, i);
        else if (me(s))
            e.addValue(r, Hn(i, {
                owner: e
            }));
        else if (s !== i)
            if (e.hasValue(r)) {
                const o = e.getValue(r);
                o.liveStyle === !0 ? o.jump(i) : o.hasAnimated || o.set(i)
            } else {
                const o = e.getStaticValue(r);
                e.addValue(r, Hn(o !== void 0 ? o : i, {
                    owner: e
                }))
            }
    }
    for (const r in n)
        t[r] === void 0 && e.removeValue(r);
    return t
}
const lf = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class G1 {
    scrapeMotionValuesFromProps(t, n, r) {
        return {}
    }
    constructor({parent: t, props: n, presenceContext: r, reducedMotionConfig: i, blockInitialAnimation: s, visualState: o}, a={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.values = new Map,
        this.KeyframeResolver = iu,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = () => this.notify("Update", this.latestValues),
        this.render = () => {
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.renderScheduledAt = 0,
        this.scheduleRender = () => {
            const d = ke.now();
            this.renderScheduledAt < d && (this.renderScheduledAt = d,
            W.render(this.render, !1, !0))
        }
        ;
        const {latestValues: l, renderState: u} = o;
        this.latestValues = l,
        this.baseTarget = {
            ...l
        },
        this.initialValues = n.initial ? {
            ...l
        } : {},
        this.renderState = u,
        this.parent = t,
        this.props = n,
        this.presenceContext = r,
        this.depth = t ? t.depth + 1 : 0,
        this.reducedMotionConfig = i,
        this.options = a,
        this.blockInitialAnimation = !!s,
        this.isControllingVariants = Ws(n),
        this.isVariantNode = Zp(n),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(t && t.current);
        const {willChange: c, ...f} = this.scrapeMotionValuesFromProps(n, {}, this);
        for (const d in f) {
            const y = f[d];
            l[d] !== void 0 && me(y) && y.set(l[d])
        }
    }
    mount(t) {
        var n;
        this.current = t,
        K1.set(t, this),
        this.projection && !this.projection.instance && this.projection.mount(t),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach( (r, i) => this.bindToMotionValue(i, r)),
        dm.current || H1(),
        this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Ba.current,
        (n = this.parent) == null || n.addChild(this),
        this.update(this.props, this.presenceContext)
    }
    unmount() {
        var t;
        this.projection && this.projection.unmount(),
        _t(this.notifyUpdate),
        _t(this.render),
        this.valueSubscriptions.forEach(n => n()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        (t = this.parent) == null || t.removeChild(this);
        for (const n in this.events)
            this.events[n].clear();
        for (const n in this.features) {
            const r = this.features[n];
            r && (r.unmount(),
            r.isMounted = !1)
        }
        this.current = null
    }
    addChild(t) {
        this.children.add(t),
        this.enteringChildren ?? (this.enteringChildren = new Set),
        this.enteringChildren.add(t)
    }
    removeChild(t) {
        this.children.delete(t),
        this.enteringChildren && this.enteringChildren.delete(t)
    }
    bindToMotionValue(t, n) {
        this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
        const r = Zn.has(t);
        r && this.onBindTransform && this.onBindTransform();
        const i = n.on("change", o => {
            this.latestValues[t] = o,
            this.props.onUpdate && W.preRender(this.notifyUpdate),
            r && this.projection && (this.projection.isTransformDirty = !0),
            this.scheduleRender()
        }
        );
        let s;
        window.MotionCheckAppearSync && (s = window.MotionCheckAppearSync(this, t, n)),
        this.valueSubscriptions.set(t, () => {
            i(),
            s && s(),
            n.owner && n.stop()
        }
        )
    }
    sortNodePosition(t) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
    }
    updateFeatures() {
        let t = "animation";
        for (t in Kn) {
            const n = Kn[t];
            if (!n)
                continue;
            const {isEnabled: r, Feature: i} = n;
            if (!this.features[t] && i && r(this.props) && (this.features[t] = new i(this)),
            this.features[t]) {
                const s = this.features[t];
                s.isMounted ? s.update() : (s.mount(),
                s.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : J()
    }
    getStaticValue(t) {
        return this.latestValues[t]
    }
    setStaticValue(t, n) {
        this.latestValues[t] = n
    }
    update(t, n) {
        (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = t,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = n;
        for (let r = 0; r < lf.length; r++) {
            const i = lf[r];
            this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](),
            delete this.propEventSubscriptions[i]);
            const s = "on" + i
              , o = t[s];
            o && (this.propEventSubscriptions[i] = this.on(i, o))
        }
        this.prevMotionValues = b1(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(t) {
        const n = this.getClosestVariantNode();
        if (n)
            return n.variantChildren && n.variantChildren.add(t),
            () => n.variantChildren.delete(t)
    }
    addValue(t, n) {
        const r = this.values.get(t);
        n !== r && (r && this.removeValue(t),
        this.bindToMotionValue(t, n),
        this.values.set(t, n),
        this.latestValues[t] = n.get())
    }
    removeValue(t) {
        this.values.delete(t);
        const n = this.valueSubscriptions.get(t);
        n && (n(),
        this.valueSubscriptions.delete(t)),
        delete this.latestValues[t],
        this.removeValueFromRenderState(t, this.renderState)
    }
    hasValue(t) {
        return this.values.has(t)
    }
    getValue(t, n) {
        if (this.props.values && this.props.values[t])
            return this.props.values[t];
        let r = this.values.get(t);
        return r === void 0 && n !== void 0 && (r = Hn(n === null ? void 0 : n, {
            owner: this
        }),
        this.addValue(t, r)),
        r
    }
    readValue(t, n) {
        let r = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : this.getBaseTargetFromProps(this.props, t) ?? this.readValueFromInstance(this.current, t, this.options);
        return r != null && (typeof r == "string" && (ip(r) || op(r)) ? r = parseFloat(r) : !t1(r) && It.test(n) && (r = Up(t, n)),
        this.setBaseTarget(t, me(r) ? r.get() : r)),
        me(r) ? r.get() : r
    }
    setBaseTarget(t, n) {
        this.baseTarget[t] = n
    }
    getBaseTarget(t) {
        var s;
        const {initial: n} = this.props;
        let r;
        if (typeof n == "string" || typeof n == "object") {
            const o = mu(this.props, n, (s = this.presenceContext) == null ? void 0 : s.custom);
            o && (r = o[t])
        }
        if (n && r !== void 0)
            return r;
        const i = this.getBaseTargetFromProps(this.props, t);
        return i !== void 0 && !me(i) ? i : this.initialValues[t] !== void 0 && r === void 0 ? void 0 : this.baseTarget[t]
    }
    on(t, n) {
        return this.events[t] || (this.events[t] = new bl),
        this.events[t].add(n)
    }
    notify(t, ...n) {
        this.events[t] && this.events[t].notify(...n)
    }
    scheduleRenderMicrotask() {
        au.render(this.render)
    }
}
class hm extends G1 {
    constructor() {
        super(...arguments),
        this.KeyframeResolver = Wv
    }
    sortInstanceNodePosition(t, n) {
        return t.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(t, n) {
        return t.style ? t.style[n] : void 0
    }
    removeValueFromRenderState(t, {vars: n, style: r}) {
        delete n[t],
        delete r[t]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: t} = this.props;
        me(t) && (this.childSubscription = t.on("change", n => {
            this.current && (this.current.textContent = `${n}`)
        }
        ))
    }
}
function pm(e, {style: t, vars: n}, r, i) {
    const s = e.style;
    let o;
    for (o in t)
        s[o] = t[o];
    i == null || i.applyProjectionStyles(s, r);
    for (o in n)
        s.setProperty(o, n[o])
}
function Y1(e) {
    return window.getComputedStyle(e)
}
class Q1 extends hm {
    constructor() {
        super(...arguments),
        this.type = "html",
        this.renderInstance = pm
    }
    readValueFromInstance(t, n) {
        var r;
        if (Zn.has(n))
            return (r = this.projection) != null && r.isProjecting ? ja(n) : lv(t, n);
        {
            const i = Y1(t)
              , s = (Ql(n) ? i.getPropertyValue(n) : i[n]) || 0;
            return typeof s == "string" ? s.trim() : s
        }
    }
    measureInstanceViewportBox(t, {transformPagePoint: n}) {
        return fm(t, n)
    }
    build(t, n, r) {
        du(t, n, r.transformTemplate)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return yu(t, n, r)
    }
}
const mm = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function X1(e, t, n, r) {
    pm(e, t, void 0, r);
    for (const i in t.attrs)
        e.setAttribute(mm.has(i) ? i : gu(i), t.attrs[i])
}
class Z1 extends hm {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1,
        this.measureInstanceViewportBox = J
    }
    getBaseTargetFromProps(t, n) {
        return t[n]
    }
    readValueFromInstance(t, n) {
        if (Zn.has(n)) {
            const r = Bp(n);
            return r && r.default || 0
        }
        return n = mm.has(n) ? n : gu(n),
        t.getAttribute(n)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return im(t, n, r)
    }
    build(t, n, r) {
        em(t, n, this.isSVGTag, r.transformTemplate, r.style)
    }
    renderInstance(t, n, r, i) {
        X1(t, n, r, i)
    }
    mount(t) {
        this.isSVGTag = nm(t.tagName),
        super.mount(t)
    }
}
const J1 = (e, t) => pu(e) ? new Z1(t) : new Q1(t,{
    allowProjection: e !== M.Fragment
});
function _n(e, t, n) {
    const r = e.getProps();
    return mu(r, t, n !== void 0 ? n : r.custom, e)
}
const Ua = e => Array.isArray(e);
function q1(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Hn(n))
}
function ex(e) {
    return Ua(e) ? e[e.length - 1] || 0 : e
}
function tx(e, t) {
    const n = _n(e, t);
    let {transitionEnd: r={}, transition: i={}, ...s} = n || {};
    s = {
        ...s,
        ...r
    };
    for (const o in s) {
        const a = ex(s[o]);
        q1(e, o, a)
    }
}
function nx(e) {
    return !!(me(e) && e.add)
}
function $a(e, t) {
    const n = e.getValue("willChange");
    if (nx(n))
        return n.add(t);
    if (!n && mt.WillChange) {
        const r = new mt.WillChange("auto");
        e.addValue("willChange", r),
        r.add(t)
    }
}
function ym(e) {
    return e.props[sm]
}
const rx = e => e !== null;
function ix(e, {repeat: t, repeatType: n="loop"}, r) {
    const i = e.filter(rx)
      , s = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
    return !s || r === void 0 ? i[s] : r
}
const sx = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , ox = e => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , ax = {
    type: "keyframes",
    duration: .8
}
  , lx = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , ux = (e, {keyframes: t}) => t.length > 2 ? ax : Zn.has(e) ? e.startsWith("scale") ? ox(t[1]) : sx : lx;
function cx({when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: s, repeatType: o, repeatDelay: a, from: l, elapsed: u, ...c}) {
    return !!Object.keys(c).length
}
const vu = (e, t, n, r={}, i, s) => o => {
    const a = su(r, e) || {}
      , l = a.delay || r.delay || 0;
    let {elapsed: u=0} = r;
    u = u - rt(l);
    const c = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...a,
        delay: -u,
        onUpdate: d => {
            t.set(d),
            a.onUpdate && a.onUpdate(d)
        }
        ,
        onComplete: () => {
            o(),
            a.onComplete && a.onComplete()
        }
        ,
        name: e,
        motionValue: t,
        element: s ? void 0 : i
    };
    cx(a) || Object.assign(c, ux(e, c)),
    c.duration && (c.duration = rt(c.duration)),
    c.repeatDelay && (c.repeatDelay = rt(c.repeatDelay)),
    c.from !== void 0 && (c.keyframes[0] = c.from);
    let f = !1;
    if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (_a(c),
    c.delay === 0 && (f = !0)),
    (mt.instantAnimations || mt.skipAnimations) && (f = !0,
    _a(c),
    c.delay = 0),
    c.allowFlatten = !a.type && !a.ease,
    f && !s && t.get() !== void 0) {
        const d = ix(c.keyframes, a);
        if (d !== void 0) {
            W.update( () => {
                c.onUpdate(d),
                c.onComplete()
            }
            );
            return
        }
    }
    return a.isSync ? new ru(c) : new jv(c)
}
;
function fx({protectedKeys: e, needsAnimating: t}, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1,
    r
}
function gm(e, t, {delay: n=0, transitionOverride: r, type: i}={}) {
    let {transition: s=e.getDefaultTransition(), transitionEnd: o, ...a} = t;
    r && (s = r);
    const l = []
      , u = i && e.animationState && e.animationState.getState()[i];
    for (const c in a) {
        const f = e.getValue(c, e.latestValues[c] ?? null)
          , d = a[c];
        if (d === void 0 || u && fx(u, c))
            continue;
        const y = {
            delay: n,
            ...su(s || {}, c)
        }
          , g = f.get();
        if (g !== void 0 && !f.isAnimating && !Array.isArray(d) && d === g && !y.velocity)
            continue;
        let x = !1;
        if (window.MotionHandoffAnimation) {
            const p = ym(e);
            if (p) {
                const h = window.MotionHandoffAnimation(p, c, W);
                h !== null && (y.startTime = h,
                x = !0)
            }
        }
        $a(e, c),
        f.start(vu(c, f, d, e.shouldReduceMotion && Ip.has(c) ? {
            type: !1
        } : y, e, x));
        const E = f.animation;
        E && l.push(E)
    }
    return o && Promise.all(l).then( () => {
        W.update( () => {
            o && tx(e, o)
        }
        )
    }
    ),
    l
}
function vm(e, t, n, r=0, i=1) {
    const s = Array.from(e).sort( (u, c) => u.sortNodePosition(c)).indexOf(t)
      , o = e.size
      , a = (o - 1) * r;
    return typeof n == "function" ? n(s, o) : i === 1 ? s * r : a - s * r
}
function Wa(e, t, n={}) {
    var l;
    const r = _n(e, t, n.type === "exit" ? (l = e.presenceContext) == null ? void 0 : l.custom : void 0);
    let {transition: i=e.getDefaultTransition() || {}} = r || {};
    n.transitionOverride && (i = n.transitionOverride);
    const s = r ? () => Promise.all(gm(e, r, n)) : () => Promise.resolve()
      , o = e.variantChildren && e.variantChildren.size ? (u=0) => {
        const {delayChildren: c=0, staggerChildren: f, staggerDirection: d} = i;
        return dx(e, t, u, c, f, d, n)
    }
    : () => Promise.resolve()
      , {when: a} = i;
    if (a) {
        const [u,c] = a === "beforeChildren" ? [s, o] : [o, s];
        return u().then( () => c())
    } else
        return Promise.all([s(), o(n.delay)])
}
function dx(e, t, n=0, r=0, i=0, s=1, o) {
    const a = [];
    for (const l of e.variantChildren)
        l.notify("AnimationStart", t),
        a.push(Wa(l, t, {
            ...o,
            delay: n + (typeof r == "function" ? 0 : r) + vm(e.variantChildren, l, r, i, s)
        }).then( () => l.notify("AnimationComplete", t)));
    return Promise.all(a)
}
function hx(e, t, n={}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
        const i = t.map(s => Wa(e, s, n));
        r = Promise.all(i)
    } else if (typeof t == "string")
        r = Wa(e, t, n);
    else {
        const i = typeof t == "function" ? _n(e, t, n.custom) : t;
        r = Promise.all(gm(e, i, n))
    }
    return r.then( () => {
        e.notify("AnimationComplete", t)
    }
    )
}
function xm(e, t) {
    if (!Array.isArray(t))
        return !1;
    const n = t.length;
    if (n !== e.length)
        return !1;
    for (let r = 0; r < n; r++)
        if (t[r] !== e[r])
            return !1;
    return !0
}
const px = fu.length;
function wm(e) {
    if (!e)
        return;
    if (!e.isControllingVariants) {
        const n = e.parent ? wm(e.parent) || {} : {};
        return e.props.initial !== void 0 && (n.initial = e.props.initial),
        n
    }
    const t = {};
    for (let n = 0; n < px; n++) {
        const r = fu[n]
          , i = e.props[r];
        (Gr(i) || i === !1) && (t[r] = i)
    }
    return t
}
const mx = [...cu].reverse()
  , yx = cu.length;
function gx(e) {
    return t => Promise.all(t.map( ({animation: n, options: r}) => hx(e, n, r)))
}
function vx(e) {
    let t = gx(e)
      , n = uf()
      , r = !0;
    const i = l => (u, c) => {
        var d;
        const f = _n(e, c, l === "exit" ? (d = e.presenceContext) == null ? void 0 : d.custom : void 0);
        if (f) {
            const {transition: y, transitionEnd: g, ...x} = f;
            u = {
                ...u,
                ...x,
                ...g
            }
        }
        return u
    }
    ;
    function s(l) {
        t = l(e)
    }
    function o(l) {
        const {props: u} = e
          , c = wm(e.parent) || {}
          , f = []
          , d = new Set;
        let y = {}
          , g = 1 / 0;
        for (let E = 0; E < yx; E++) {
            const p = mx[E]
              , h = n[p]
              , m = u[p] !== void 0 ? u[p] : c[p]
              , S = Gr(m)
              , w = p === l ? h.isActive : null;
            w === !1 && (g = E);
            let C = m === c[p] && m !== u[p] && S;
            if (C && r && e.manuallyAnimateOnMount && (C = !1),
            h.protectedKeys = {
                ...y
            },
            !h.isActive && w === null || !m && !h.prevProp || $s(m) || typeof m == "boolean")
                continue;
            const k = xx(h.prevProp, m);
            let T = k || p === l && h.isActive && !C && S || E > g && S
              , R = !1;
            const j = Array.isArray(m) ? m : [m];
            let ee = j.reduce(i(p), {});
            w === !1 && (ee = {});
            const {prevResolvedValues: gt={}} = h
              , $t = {
                ...gt,
                ...ee
            }
              , Jn = Z => {
                T = !0,
                d.has(Z) && (R = !0,
                d.delete(Z)),
                h.needsAnimating[Z] = !0;
                const D = e.getValue(Z);
                D && (D.liveStyle = !1)
            }
            ;
            for (const Z in $t) {
                const D = ee[Z]
                  , N = gt[Z];
                if (y.hasOwnProperty(Z))
                    continue;
                let L = !1;
                Ua(D) && Ua(N) ? L = !xm(D, N) : L = D !== N,
                L ? D != null ? Jn(Z) : d.add(Z) : D !== void 0 && d.has(Z) ? Jn(Z) : h.protectedKeys[Z] = !0
            }
            h.prevProp = m,
            h.prevResolvedValues = ee,
            h.isActive && (y = {
                ...y,
                ...ee
            }),
            r && e.blockInitialAnimation && (T = !1);
            const si = C && k;
            T && (!si || R) && f.push(...j.map(Z => {
                const D = {
                    type: p
                };
                if (typeof Z == "string" && r && !si && e.manuallyAnimateOnMount && e.parent) {
                    const {parent: N} = e
                      , L = _n(N, Z);
                    if (N.enteringChildren && L) {
                        const {delayChildren: H} = L.transition || {};
                        D.delay = vm(N.enteringChildren, e, H)
                    }
                }
                return {
                    animation: Z,
                    options: D
                }
            }
            ))
        }
        if (d.size) {
            const E = {};
            if (typeof u.initial != "boolean") {
                const p = _n(e, Array.isArray(u.initial) ? u.initial[0] : u.initial);
                p && p.transition && (E.transition = p.transition)
            }
            d.forEach(p => {
                const h = e.getBaseTarget(p)
                  , m = e.getValue(p);
                m && (m.liveStyle = !0),
                E[p] = h ?? null
            }
            ),
            f.push({
                animation: E
            })
        }
        let x = !!f.length;
        return r && (u.initial === !1 || u.initial === u.animate) && !e.manuallyAnimateOnMount && (x = !1),
        r = !1,
        x ? t(f) : Promise.resolve()
    }
    function a(l, u) {
        var f;
        if (n[l].isActive === u)
            return Promise.resolve();
        (f = e.variantChildren) == null || f.forEach(d => {
            var y;
            return (y = d.animationState) == null ? void 0 : y.setActive(l, u)
        }
        ),
        n[l].isActive = u;
        const c = o(l);
        for (const d in n)
            n[d].protectedKeys = {};
        return c
    }
    return {
        animateChanges: o,
        setActive: a,
        setAnimateFunction: s,
        getState: () => n,
        reset: () => {
            n = uf()
        }
    }
}
function xx(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !xm(t, e) : !1
}
function Kt(e=!1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function uf() {
    return {
        animate: Kt(!0),
        whileInView: Kt(),
        whileHover: Kt(),
        whileTap: Kt(),
        whileDrag: Kt(),
        whileFocus: Kt(),
        exit: Kt()
    }
}
class Ut {
    constructor(t) {
        this.isMounted = !1,
        this.node = t
    }
    update() {}
}
class wx extends Ut {
    constructor(t) {
        super(t),
        t.animationState || (t.animationState = vx(t))
    }
    updateAnimationControlsSubscription() {
        const {animate: t} = this.node.getProps();
        $s(t) && (this.unmountControls = t.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {animate: t} = this.node.getProps()
          , {animate: n} = this.node.prevProps || {};
        t !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var t;
        this.node.animationState.reset(),
        (t = this.unmountControls) == null || t.call(this)
    }
}
let Sx = 0;
class Cx extends Ut {
    constructor() {
        super(...arguments),
        this.id = Sx++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const {isPresent: t, onExitComplete: n} = this.node.presenceContext
          , {isPresent: r} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === r)
            return;
        const i = this.node.animationState.setActive("exit", !t);
        n && !t && i.then( () => {
            n(this.id)
        }
        )
    }
    mount() {
        const {register: t, onExitComplete: n} = this.node.presenceContext || {};
        n && n(this.id),
        t && (this.unmount = t(this.id))
    }
    unmount() {}
}
const Tx = {
    animation: {
        Feature: wx
    },
    exit: {
        Feature: Cx
    }
};
function Qr(e, t, n, r={
    passive: !0
}) {
    return e.addEventListener(t, n, r),
    () => e.removeEventListener(t, n)
}
function ii(e) {
    return {
        point: {
            x: e.pageX,
            y: e.pageY
        }
    }
}
const kx = e => t => lu(t) && e(t, ii(t));
function kr(e, t, n, r) {
    return Qr(e, t, kx(n), r)
}
const Sm = 1e-4
  , Px = 1 - Sm
  , Ex = 1 + Sm
  , Cm = .01
  , Mx = 0 - Cm
  , Dx = 0 + Cm;
function ve(e) {
    return e.max - e.min
}
function Fx(e, t, n) {
    return Math.abs(e - t) <= n
}
function cf(e, t, n, r=.5) {
    e.origin = r,
    e.originPoint = b(t.min, t.max, e.origin),
    e.scale = ve(n) / ve(t),
    e.translate = b(n.min, n.max, e.origin) - e.originPoint,
    (e.scale >= Px && e.scale <= Ex || isNaN(e.scale)) && (e.scale = 1),
    (e.translate >= Mx && e.translate <= Dx || isNaN(e.translate)) && (e.translate = 0)
}
function Pr(e, t, n, r) {
    cf(e.x, t.x, n.x, r ? r.originX : void 0),
    cf(e.y, t.y, n.y, r ? r.originY : void 0)
}
function ff(e, t, n) {
    e.min = n.min + t.min,
    e.max = e.min + ve(t)
}
function Ax(e, t, n) {
    ff(e.x, t.x, n.x),
    ff(e.y, t.y, n.y)
}
function df(e, t, n) {
    e.min = t.min - n.min,
    e.max = e.min + ve(t)
}
function Er(e, t, n) {
    df(e.x, t.x, n.x),
    df(e.y, t.y, n.y)
}
function Re(e) {
    return [e("x"), e("y")]
}
const Tm = ({current: e}) => e ? e.ownerDocument.defaultView : null
  , hf = (e, t) => Math.abs(e - t);
function jx(e, t) {
    const n = hf(e.x, t.x)
      , r = hf(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2)
}
class km {
    constructor(t, n, {transformPagePoint: r, contextWindow: i=window, dragSnapToOrigin: s=!1, distanceThreshold: o=3}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = window,
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const d = Mo(this.lastMoveEventInfo, this.history)
              , y = this.startEvent !== null
              , g = jx(d.offset, {
                x: 0,
                y: 0
            }) >= this.distanceThreshold;
            if (!y && !g)
                return;
            const {point: x} = d
              , {timestamp: E} = ue;
            this.history.push({
                ...x,
                timestamp: E
            });
            const {onStart: p, onMove: h} = this.handlers;
            y || (p && p(this.lastMoveEvent, d),
            this.startEvent = this.lastMoveEvent),
            h && h(this.lastMoveEvent, d)
        }
        ,
        this.handlePointerMove = (d, y) => {
            this.lastMoveEvent = d,
            this.lastMoveEventInfo = Eo(y, this.transformPagePoint),
            W.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (d, y) => {
            this.end();
            const {onEnd: g, onSessionEnd: x, resumeAnimation: E} = this.handlers;
            if (this.dragSnapToOrigin && E && E(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const p = Mo(d.type === "pointercancel" ? this.lastMoveEventInfo : Eo(y, this.transformPagePoint), this.history);
            this.startEvent && g && g(d, p),
            x && x(d, p)
        }
        ,
        !lu(t))
            return;
        this.dragSnapToOrigin = s,
        this.handlers = n,
        this.transformPagePoint = r,
        this.distanceThreshold = o,
        this.contextWindow = i || window;
        const a = ii(t)
          , l = Eo(a, this.transformPagePoint)
          , {point: u} = l
          , {timestamp: c} = ue;
        this.history = [{
            ...u,
            timestamp: c
        }];
        const {onSessionStart: f} = n;
        f && f(t, Mo(l, this.history)),
        this.removeListeners = ti(kr(this.contextWindow, "pointermove", this.handlePointerMove), kr(this.contextWindow, "pointerup", this.handlePointerUp), kr(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(t) {
        this.handlers = t
    }
    end() {
        this.removeListeners && this.removeListeners(),
        _t(this.updatePoint)
    }
}
function Eo(e, t) {
    return t ? {
        point: t(e.point)
    } : e
}
function pf(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    }
}
function Mo({point: e}, t) {
    return {
        point: e,
        delta: pf(e, Pm(t)),
        offset: pf(e, Nx(t)),
        velocity: Vx(t, .1)
    }
}
function Nx(e) {
    return e[0]
}
function Pm(e) {
    return e[e.length - 1]
}
function Vx(e, t) {
    if (e.length < 2)
        return {
            x: 0,
            y: 0
        };
    let n = e.length - 1
      , r = null;
    const i = Pm(e);
    for (; n >= 0 && (r = e[n],
    !(i.timestamp - r.timestamp > rt(t))); )
        n--;
    if (!r)
        return {
            x: 0,
            y: 0
        };
    const s = ze(i.timestamp - r.timestamp);
    if (s === 0)
        return {
            x: 0,
            y: 0
        };
    const o = {
        x: (i.x - r.x) / s,
        y: (i.y - r.y) / s
    };
    return o.x === 1 / 0 && (o.x = 0),
    o.y === 1 / 0 && (o.y = 0),
    o
}
function Lx(e, {min: t, max: n}, r) {
    return t !== void 0 && e < t ? e = r ? b(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? b(n, e, r.max) : Math.min(e, n)),
    e
}
function mf(e, t, n) {
    return {
        min: t !== void 0 ? e.min + t : void 0,
        max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    }
}
function Rx(e, {top: t, left: n, bottom: r, right: i}) {
    return {
        x: mf(e.x, n, i),
        y: mf(e.y, t, r)
    }
}
function yf(e, t) {
    let n = t.min - e.min
      , r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n,r] = [r, n]),
    {
        min: n,
        max: r
    }
}
function _x(e, t) {
    return {
        x: yf(e.x, t.x),
        y: yf(e.y, t.y)
    }
}
function Ix(e, t) {
    let n = .5;
    const r = ve(e)
      , i = ve(t);
    return i > r ? n = Hr(t.min, t.max - r, e.min) : r > i && (n = Hr(e.min, e.max - i, t.min)),
    pt(0, 1, n)
}
function Ox(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
}
const Ha = .35;
function zx(e=Ha) {
    return e === !1 ? e = 0 : e === !0 && (e = Ha),
    {
        x: gf(e, "left", "right"),
        y: gf(e, "top", "bottom")
    }
}
function gf(e, t, n) {
    return {
        min: vf(e, t),
        max: vf(e, n)
    }
}
function vf(e, t) {
    return typeof e == "number" ? e : e[t] || 0
}
const Bx = new WeakMap;
class Ux {
    constructor(t) {
        this.openDragLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = J(),
        this.latestPointerEvent = null,
        this.latestPanInfo = null,
        this.visualElement = t
    }
    start(t, {snapToCursor: n=!1, distanceThreshold: r}={}) {
        const {presenceContext: i} = this.visualElement;
        if (i && i.isPresent === !1)
            return;
        const s = f => {
            const {dragSnapToOrigin: d} = this.getProps();
            d ? this.pauseAnimation() : this.stopAnimation(),
            n && this.snapToCursor(ii(f).point)
        }
          , o = (f, d) => {
            const {drag: y, dragPropagation: g, onDragStart: x} = this.getProps();
            if (y && !g && (this.openDragLock && this.openDragLock(),
            this.openDragLock = Gv(y),
            !this.openDragLock))
                return;
            this.latestPointerEvent = f,
            this.latestPanInfo = d,
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            Re(p => {
                let h = this.getAxisMotionValue(p).get() || 0;
                if (it.test(h)) {
                    const {projection: m} = this.visualElement;
                    if (m && m.layout) {
                        const S = m.layout.layoutBox[p];
                        S && (h = ve(S) * (parseFloat(h) / 100))
                    }
                }
                this.originPoint[p] = h
            }
            ),
            x && W.postRender( () => x(f, d)),
            $a(this.visualElement, "transform");
            const {animationState: E} = this.visualElement;
            E && E.setActive("whileDrag", !0)
        }
          , a = (f, d) => {
            this.latestPointerEvent = f,
            this.latestPanInfo = d;
            const {dragPropagation: y, dragDirectionLock: g, onDirectionLock: x, onDrag: E} = this.getProps();
            if (!y && !this.openDragLock)
                return;
            const {offset: p} = d;
            if (g && this.currentDirection === null) {
                this.currentDirection = $x(p),
                this.currentDirection !== null && x && x(this.currentDirection);
                return
            }
            this.updateAxis("x", d.point, p),
            this.updateAxis("y", d.point, p),
            this.visualElement.render(),
            E && E(f, d)
        }
          , l = (f, d) => {
            this.latestPointerEvent = f,
            this.latestPanInfo = d,
            this.stop(f, d),
            this.latestPointerEvent = null,
            this.latestPanInfo = null
        }
          , u = () => Re(f => {
            var d;
            return this.getAnimationState(f) === "paused" && ((d = this.getAxisMotionValue(f).animation) == null ? void 0 : d.play())
        }
        )
          , {dragSnapToOrigin: c} = this.getProps();
        this.panSession = new km(t,{
            onSessionStart: s,
            onStart: o,
            onMove: a,
            onSessionEnd: l,
            resumeAnimation: u
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: c,
            distanceThreshold: r,
            contextWindow: Tm(this.visualElement)
        })
    }
    stop(t, n) {
        const r = t || this.latestPointerEvent
          , i = n || this.latestPanInfo
          , s = this.isDragging;
        if (this.cancel(),
        !s || !i || !r)
            return;
        const {velocity: o} = i;
        this.startAnimation(o);
        const {onDragEnd: a} = this.getProps();
        a && W.postRender( () => a(r, i))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: t, animationState: n} = this.visualElement;
        t && (t.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        this.panSession = void 0;
        const {dragPropagation: r} = this.getProps();
        !r && this.openDragLock && (this.openDragLock(),
        this.openDragLock = null),
        n && n.setActive("whileDrag", !1)
    }
    updateAxis(t, n, r) {
        const {drag: i} = this.getProps();
        if (!r || !Fi(t, i, this.currentDirection))
            return;
        const s = this.getAxisMotionValue(t);
        let o = this.originPoint[t] + r[t];
        this.constraints && this.constraints[t] && (o = Lx(o, this.constraints[t], this.elastic[t])),
        s.set(o)
    }
    resolveConstraints() {
        var s;
        const {dragConstraints: t, dragElastic: n} = this.getProps()
          , r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (s = this.visualElement.projection) == null ? void 0 : s.layout
          , i = this.constraints;
        t && En(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = Rx(r.layoutBox, t) : this.constraints = !1,
        this.elastic = zx(n),
        i !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && Re(o => {
            this.constraints !== !1 && this.getAxisMotionValue(o) && (this.constraints[o] = Ox(r.layoutBox[o], this.constraints[o]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: t, onMeasureDragConstraints: n} = this.getProps();
        if (!t || !En(t))
            return !1;
        const r = t.current
          , {projection: i} = this.visualElement;
        if (!i || !i.layout)
            return !1;
        const s = W1(r, i.root, this.visualElement.getTransformPagePoint());
        let o = _x(i.layout.layoutBox, s);
        if (n) {
            const a = n(B1(o));
            this.hasMutatedConstraints = !!a,
            a && (o = lm(a))
        }
        return o
    }
    startAnimation(t) {
        const {drag: n, dragMomentum: r, dragElastic: i, dragTransition: s, dragSnapToOrigin: o, onDragTransitionEnd: a} = this.getProps()
          , l = this.constraints || {}
          , u = Re(c => {
            if (!Fi(c, n, this.currentDirection))
                return;
            let f = l && l[c] || {};
            o && (f = {
                min: 0,
                max: 0
            });
            const d = i ? 200 : 1e6
              , y = i ? 40 : 1e7
              , g = {
                type: "inertia",
                velocity: r ? t[c] : 0,
                bounceStiffness: d,
                bounceDamping: y,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...s,
                ...f
            };
            return this.startAxisValueAnimation(c, g)
        }
        );
        return Promise.all(u).then(a)
    }
    startAxisValueAnimation(t, n) {
        const r = this.getAxisMotionValue(t);
        return $a(this.visualElement, t),
        r.start(vu(t, r, 0, n, this.visualElement, !1))
    }
    stopAnimation() {
        Re(t => this.getAxisMotionValue(t).stop())
    }
    pauseAnimation() {
        Re(t => {
            var n;
            return (n = this.getAxisMotionValue(t).animation) == null ? void 0 : n.pause()
        }
        )
    }
    getAnimationState(t) {
        var n;
        return (n = this.getAxisMotionValue(t).animation) == null ? void 0 : n.state
    }
    getAxisMotionValue(t) {
        const n = `_drag${t.toUpperCase()}`
          , r = this.visualElement.getProps()
          , i = r[n];
        return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    }
    snapToCursor(t) {
        Re(n => {
            const {drag: r} = this.getProps();
            if (!Fi(n, r, this.currentDirection))
                return;
            const {projection: i} = this.visualElement
              , s = this.getAxisMotionValue(n);
            if (i && i.layout) {
                const {min: o, max: a} = i.layout.layoutBox[n];
                s.set(t[n] - b(o, a, .5))
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: t, dragConstraints: n} = this.getProps()
          , {projection: r} = this.visualElement;
        if (!En(n) || !r || !this.constraints)
            return;
        this.stopAnimation();
        const i = {
            x: 0,
            y: 0
        };
        Re(o => {
            const a = this.getAxisMotionValue(o);
            if (a && this.constraints !== !1) {
                const l = a.get();
                i[o] = Ix({
                    min: l,
                    max: l
                }, this.constraints[o])
            }
        }
        );
        const {transformTemplate: s} = this.visualElement.getProps();
        this.visualElement.current.style.transform = s ? s({}, "") : "none",
        r.root && r.root.updateScroll(),
        r.updateLayout(),
        this.resolveConstraints(),
        Re(o => {
            if (!Fi(o, t, null))
                return;
            const a = this.getAxisMotionValue(o)
              , {min: l, max: u} = this.constraints[o];
            a.set(b(l, u, i[o]))
        }
        )
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        Bx.set(this.visualElement, this);
        const t = this.visualElement.current
          , n = kr(t, "pointerdown", l => {
            const {drag: u, dragListener: c=!0} = this.getProps();
            u && c && this.start(l)
        }
        )
          , r = () => {
            const {dragConstraints: l} = this.getProps();
            En(l) && l.current && (this.constraints = this.resolveRefConstraints())
        }
          , {projection: i} = this.visualElement
          , s = i.addEventListener("measure", r);
        i && !i.layout && (i.root && i.root.updateScroll(),
        i.updateLayout()),
        W.read(r);
        const o = Qr(window, "resize", () => this.scalePositionWithinConstraints())
          , a = i.addEventListener("didUpdate", ({delta: l, hasLayoutChanged: u}) => {
            this.isDragging && u && (Re(c => {
                const f = this.getAxisMotionValue(c);
                f && (this.originPoint[c] += l[c].translate,
                f.set(f.get() + l[c].translate))
            }
            ),
            this.visualElement.render())
        }
        );
        return () => {
            o(),
            n(),
            s(),
            a && a()
        }
    }
    getProps() {
        const t = this.visualElement.getProps()
          , {drag: n=!1, dragDirectionLock: r=!1, dragPropagation: i=!1, dragConstraints: s=!1, dragElastic: o=Ha, dragMomentum: a=!0} = t;
        return {
            ...t,
            drag: n,
            dragDirectionLock: r,
            dragPropagation: i,
            dragConstraints: s,
            dragElastic: o,
            dragMomentum: a
        }
    }
}
function Fi(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e)
}
function $x(e, t=10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"),
    n
}
class Wx extends Ut {
    constructor(t) {
        super(t),
        this.removeGroupControls = Ue,
        this.removeListeners = Ue,
        this.controls = new Ux(t)
    }
    mount() {
        const {dragControls: t} = this.node.getProps();
        t && (this.removeGroupControls = t.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || Ue
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners()
    }
}
const xf = e => (t, n) => {
    e && W.postRender( () => e(t, n))
}
;
class Hx extends Ut {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = Ue
    }
    onPointerDown(t) {
        this.session = new km(t,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: Tm(this.node)
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: i} = this.node.getProps();
        return {
            onSessionStart: xf(t),
            onStart: xf(n),
            onMove: r,
            onEnd: (s, o) => {
                delete this.session,
                i && W.postRender( () => i(s, o))
            }
        }
    }
    mount() {
        this.removePointerDownListener = kr(this.node.current, "pointerdown", t => this.onPointerDown(t))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
const bi = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};
function wf(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
const ar = {
    correct: (e, t) => {
        if (!t.target)
            return e;
        if (typeof e == "string")
            if (V.test(e))
                e = parseFloat(e);
            else
                return e;
        const n = wf(e, t.target.x)
          , r = wf(e, t.target.y);
        return `${n}% ${r}%`
    }
}
  , Kx = {
    correct: (e, {treeScale: t, projectionDelta: n}) => {
        const r = e
          , i = It.parse(e);
        if (i.length > 5)
            return r;
        const s = It.createTransformer(e)
          , o = typeof i[0] != "number" ? 1 : 0
          , a = n.x.scale * t.x
          , l = n.y.scale * t.y;
        i[0 + o] /= a,
        i[1 + o] /= l;
        const u = b(a, l, .5);
        return typeof i[2 + o] == "number" && (i[2 + o] /= u),
        typeof i[3 + o] == "number" && (i[3 + o] /= u),
        s(i)
    }
};
let Do = !1;
class bx extends M.Component {
    componentDidMount() {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: i} = this.props
          , {projection: s} = t;
        p1(Gx),
        s && (n.group && n.group.add(s),
        r && r.register && i && r.register(s),
        Do && s.root.didUpdate(),
        s.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }
        ),
        s.setOptions({
            ...s.options,
            onExitComplete: () => this.safeToRemove()
        })),
        bi.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(t) {
        const {layoutDependency: n, visualElement: r, drag: i, isPresent: s} = this.props
          , {projection: o} = r;
        return o && (o.isPresent = s,
        Do = !0,
        i || t.layoutDependency !== n || n === void 0 || t.isPresent !== s ? o.willUpdate() : this.safeToRemove(),
        t.isPresent !== s && (s ? o.promote() : o.relegate() || W.postRender( () => {
            const a = o.getStack();
            (!a || !a.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {projection: t} = this.props.visualElement;
        t && (t.root.didUpdate(),
        au.postRender( () => {
            !t.currentAnimation && t.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: r} = this.props
          , {projection: i} = t;
        Do = !0,
        i && (i.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(i),
        r && r.deregister && r.deregister(i))
    }
    safeToRemove() {
        const {safeToRemove: t} = this.props;
        t && t()
    }
    render() {
        return null
    }
}
function Em(e) {
    const [t,n] = Yp()
      , r = M.useContext(Bl);
    return v.jsx(bx, {
        ...e,
        layoutGroup: r,
        switchLayoutGroup: M.useContext(om),
        isPresent: t,
        safeToRemove: n
    })
}
const Gx = {
    borderRadius: {
        ...ar,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: ar,
    borderTopRightRadius: ar,
    borderBottomLeftRadius: ar,
    borderBottomRightRadius: ar,
    boxShadow: Kx
};
function Yx(e, t, n) {
    const r = me(e) ? e : Hn(e);
    return r.start(vu("", r, t, n)),
    r.animation
}
const Qx = (e, t) => e.depth - t.depth;
class Xx {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(t) {
        Wl(this.children, t),
        this.isDirty = !0
    }
    remove(t) {
        Hl(this.children, t),
        this.isDirty = !0
    }
    forEach(t) {
        this.isDirty && this.children.sort(Qx),
        this.isDirty = !1,
        this.children.forEach(t)
    }
}
function Zx(e, t) {
    const n = ke.now()
      , r = ({timestamp: i}) => {
        const s = i - n;
        s >= t && (_t(r),
        e(s - t))
    }
    ;
    return W.setup(r, !0),
    () => _t(r)
}
const Mm = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , Jx = Mm.length
  , Sf = e => typeof e == "string" ? parseFloat(e) : e
  , Cf = e => typeof e == "number" || V.test(e);
function qx(e, t, n, r, i, s) {
    i ? (e.opacity = b(0, n.opacity ?? 1, ew(r)),
    e.opacityExit = b(t.opacity ?? 1, 0, tw(r))) : s && (e.opacity = b(t.opacity ?? 1, n.opacity ?? 1, r));
    for (let o = 0; o < Jx; o++) {
        const a = `border${Mm[o]}Radius`;
        let l = Tf(t, a)
          , u = Tf(n, a);
        if (l === void 0 && u === void 0)
            continue;
        l || (l = 0),
        u || (u = 0),
        l === 0 || u === 0 || Cf(l) === Cf(u) ? (e[a] = Math.max(b(Sf(l), Sf(u), r), 0),
        (it.test(u) || it.test(l)) && (e[a] += "%")) : e[a] = u
    }
    (t.rotate || n.rotate) && (e.rotate = b(t.rotate || 0, n.rotate || 0, r))
}
function Tf(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius
}
const ew = Dm(0, .5, pp)
  , tw = Dm(.5, .95, Ue);
function Dm(e, t, n) {
    return r => r < e ? 0 : r > t ? 1 : n(Hr(e, t, r))
}
function kf(e, t) {
    e.min = t.min,
    e.max = t.max
}
function Le(e, t) {
    kf(e.x, t.x),
    kf(e.y, t.y)
}
function Pf(e, t) {
    e.translate = t.translate,
    e.scale = t.scale,
    e.originPoint = t.originPoint,
    e.origin = t.origin
}
function Ef(e, t, n, r, i) {
    return e -= t,
    e = Ts(e, 1 / n, r),
    i !== void 0 && (e = Ts(e, 1 / i, r)),
    e
}
function nw(e, t=0, n=1, r=.5, i, s=e, o=e) {
    if (it.test(t) && (t = parseFloat(t),
    t = b(o.min, o.max, t / 100) - o.min),
    typeof t != "number")
        return;
    let a = b(s.min, s.max, r);
    e === s && (a -= t),
    e.min = Ef(e.min, t, n, a, i),
    e.max = Ef(e.max, t, n, a, i)
}
function Mf(e, t, [n,r,i], s, o) {
    nw(e, t[n], t[r], t[i], t.scale, s, o)
}
const rw = ["x", "scaleX", "originX"]
  , iw = ["y", "scaleY", "originY"];
function Df(e, t, n, r) {
    Mf(e.x, t, rw, n ? n.x : void 0, r ? r.x : void 0),
    Mf(e.y, t, iw, n ? n.y : void 0, r ? r.y : void 0)
}
function Ff(e) {
    return e.translate === 0 && e.scale === 1
}
function Fm(e) {
    return Ff(e.x) && Ff(e.y)
}
function Af(e, t) {
    return e.min === t.min && e.max === t.max
}
function sw(e, t) {
    return Af(e.x, t.x) && Af(e.y, t.y)
}
function jf(e, t) {
    return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max)
}
function Am(e, t) {
    return jf(e.x, t.x) && jf(e.y, t.y)
}
function Nf(e) {
    return ve(e.x) / ve(e.y)
}
function Vf(e, t) {
    return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint
}
class ow {
    constructor() {
        this.members = []
    }
    add(t) {
        Wl(this.members, t),
        t.scheduleRender()
    }
    remove(t) {
        if (Hl(this.members, t),
        t === this.prevLead && (this.prevLead = void 0),
        t === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(t) {
        const n = this.members.findIndex(i => t === i);
        if (n === 0)
            return !1;
        let r;
        for (let i = n; i >= 0; i--) {
            const s = this.members[i];
            if (s.isPresent !== !1) {
                r = s;
                break
            }
        }
        return r ? (this.promote(r),
        !0) : !1
    }
    promote(t, n) {
        const r = this.lead;
        if (t !== r && (this.prevLead = r,
        this.lead = t,
        t.show(),
        r)) {
            r.instance && r.scheduleRender(),
            t.scheduleRender(),
            t.resumeFrom = r,
            n && (t.resumeFrom.preserveOpacity = !0),
            r.snapshot && (t.snapshot = r.snapshot,
            t.snapshot.latestValues = r.animationValues || r.latestValues),
            t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            const {crossfade: i} = t.options;
            i === !1 && r.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(t => {
            const {options: n, resumingFrom: r} = t;
            n.onExitComplete && n.onExitComplete(),
            r && r.options.onExitComplete && r.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(t => {
            t.instance && t.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
function aw(e, t, n) {
    let r = "";
    const i = e.x.translate / t.x
      , s = e.y.translate / t.y
      , o = (n == null ? void 0 : n.z) || 0;
    if ((i || s || o) && (r = `translate3d(${i}px, ${s}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n) {
        const {transformPerspective: u, rotate: c, rotateX: f, rotateY: d, skewX: y, skewY: g} = n;
        u && (r = `perspective(${u}px) ${r}`),
        c && (r += `rotate(${c}deg) `),
        f && (r += `rotateX(${f}deg) `),
        d && (r += `rotateY(${d}deg) `),
        y && (r += `skewX(${y}deg) `),
        g && (r += `skewY(${g}deg) `)
    }
    const a = e.x.scale * t.x
      , l = e.y.scale * t.y;
    return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`),
    r || "none"
}
const Fo = ["", "X", "Y", "Z"]
  , lw = 1e3;
let uw = 0;
function Ao(e, t, n, r) {
    const {latestValues: i} = t;
    i[e] && (n[e] = i[e],
    t.setStaticValue(e, 0),
    r && (r[e] = 0))
}
function jm(e) {
    if (e.hasCheckedOptimisedAppear = !0,
    e.root === e)
        return;
    const {visualElement: t} = e.options;
    if (!t)
        return;
    const n = ym(t);
    if (window.MotionHasOptimisedAnimation(n, "transform")) {
        const {layout: i, layoutId: s} = e.options;
        window.MotionCancelOptimisedAnimation(n, "transform", W, !(i || s))
    }
    const {parent: r} = e;
    r && !r.hasCheckedOptimisedAppear && jm(r)
}
function Nm({attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i}) {
    return class {
        constructor(o={}, a=t == null ? void 0 : t()) {
            this.id = uw++,
            this.animationId = 0,
            this.animationCommitId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.hasCheckedOptimisedAppear = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.updateScheduled = !1,
            this.scheduleUpdate = () => this.update(),
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = () => {
                this.projectionUpdateScheduled = !1,
                this.nodes.forEach(dw),
                this.nodes.forEach(yw),
                this.nodes.forEach(gw),
                this.nodes.forEach(hw)
            }
            ,
            this.resolvedRelativeTargetAt = 0,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = o,
            this.root = a ? a.root || a : this,
            this.path = a ? [...a.path, a] : [],
            this.parent = a,
            this.depth = a ? a.depth + 1 : 0;
            for (let l = 0; l < this.path.length; l++)
                this.path[l].shouldResetTransform = !0;
            this.root === this && (this.nodes = new Xx)
        }
        addEventListener(o, a) {
            return this.eventHandlers.has(o) || this.eventHandlers.set(o, new bl),
            this.eventHandlers.get(o).add(a)
        }
        notifyListeners(o, ...a) {
            const l = this.eventHandlers.get(o);
            l && l.notify(...a)
        }
        hasListeners(o) {
            return this.eventHandlers.has(o)
        }
        mount(o) {
            if (this.instance)
                return;
            this.isSVG = Gp(o) && !qv(o),
            this.instance = o;
            const {layoutId: a, layout: l, visualElement: u} = this.options;
            if (u && !u.current && u.mount(o),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0),
            e) {
                let c, f = 0;
                const d = () => this.root.updateBlockedByResize = !1;
                W.read( () => {
                    f = window.innerWidth
                }
                ),
                e(o, () => {
                    const y = window.innerWidth;
                    y !== f && (f = y,
                    this.root.updateBlockedByResize = !0,
                    c && c(),
                    c = Zx(d, 250),
                    bi.hasAnimatedSinceResize && (bi.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(_f)))
                }
                )
            }
            a && this.root.registerSharedNode(a, this),
            this.options.animate !== !1 && u && (a || l) && this.addEventListener("didUpdate", ({delta: c, hasLayoutChanged: f, hasRelativeLayoutChanged: d, layout: y}) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const g = this.options.transition || u.getDefaultTransition() || Cw
                  , {onLayoutAnimationStart: x, onLayoutAnimationComplete: E} = u.getProps()
                  , p = !this.targetLayout || !Am(this.targetLayout, y)
                  , h = !f && d;
                if (this.options.layoutRoot || this.resumeFrom || h || f && (p || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0);
                    const m = {
                        ...su(g, "layout"),
                        onPlay: x,
                        onComplete: E
                    };
                    (u.shouldReduceMotion || this.options.layoutRoot) && (m.delay = 0,
                    m.type = !1),
                    this.startAnimation(m),
                    this.setAnimationOrigin(c, h)
                } else
                    f || _f(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = y
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const o = this.getStack();
            o && o.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            this.eventHandlers.clear(),
            _t(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(vw),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: o} = this.options;
            return o && o.getProps().transformTemplate
        }
        willUpdate(o=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && jm(this),
            !this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let c = 0; c < this.path.length; c++) {
                const f = this.path[c];
                f.shouldResetTransform = !0,
                f.updateScroll("snapshot"),
                f.options.layoutRoot && f.willUpdate(!1)
            }
            const {layoutId: a, layout: l} = this.options;
            if (a === void 0 && !l)
                return;
            const u = this.getTransformTemplate();
            this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            o && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
            this.isUpdateBlocked()) {
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(Lf);
                return
            }
            if (this.animationId <= this.animationCommitId) {
                this.nodes.forEach(Rf);
                return
            }
            this.animationCommitId = this.animationId,
            this.isUpdating ? (this.isUpdating = !1,
            this.nodes.forEach(mw),
            this.nodes.forEach(cw),
            this.nodes.forEach(fw)) : this.nodes.forEach(Rf),
            this.clearAllSnapshots();
            const a = ke.now();
            ue.delta = pt(0, 1e3 / 60, a - ue.timestamp),
            ue.timestamp = a,
            ue.isProcessing = !0,
            vo.update.process(ue),
            vo.preRender.process(ue),
            vo.render.process(ue),
            ue.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            au.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(pw),
            this.sharedNodes.forEach(xw)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            W.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            W.postRender( () => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure(),
            this.snapshot && !ve(this.snapshot.measuredBox.x) && !ve(this.snapshot.measuredBox.y) && (this.snapshot = void 0))
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let l = 0; l < this.path.length; l++)
                    this.path[l].updateScroll();
            const o = this.layout;
            this.layout = this.measure(!1),
            this.layoutCorrected = J(),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: a} = this.options;
            a && a.notify("LayoutMeasure", this.layout.layoutBox, o ? o.layoutBox : void 0)
        }
        updateScroll(o="measure") {
            let a = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === o && (a = !1),
            a && this.instance) {
                const l = r(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: o,
                    isRoot: l,
                    offset: n(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : l
                }
            }
        }
        resetTransform() {
            if (!i)
                return;
            const o = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
              , a = this.projectionDelta && !Fm(this.projectionDelta)
              , l = this.getTransformTemplate()
              , u = l ? l(this.latestValues, "") : void 0
              , c = u !== this.prevTransformTemplateValue;
            o && this.instance && (a || Yt(this.latestValues) || c) && (i(this.instance, u),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(o=!0) {
            const a = this.measurePageBox();
            let l = this.removeElementScroll(a);
            return o && (l = this.removeTransform(l)),
            Tw(l),
            {
                animationId: this.root.animationId,
                measuredBox: a,
                layoutBox: l,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var u;
            const {visualElement: o} = this.options;
            if (!o)
                return J();
            const a = o.measureViewportBox();
            if (!(((u = this.scroll) == null ? void 0 : u.wasRoot) || this.path.some(kw))) {
                const {scroll: c} = this.root;
                c && (Mn(a.x, c.offset.x),
                Mn(a.y, c.offset.y))
            }
            return a
        }
        removeElementScroll(o) {
            var l;
            const a = J();
            if (Le(a, o),
            (l = this.scroll) != null && l.wasRoot)
                return a;
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u]
                  , {scroll: f, options: d} = c;
                c !== this.root && f && d.layoutScroll && (f.wasRoot && Le(a, o),
                Mn(a.x, f.offset.x),
                Mn(a.y, f.offset.y))
            }
            return a
        }
        applyTransform(o, a=!1) {
            const l = J();
            Le(l, o);
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u];
                !a && c.options.layoutScroll && c.scroll && c !== c.root && Dn(l, {
                    x: -c.scroll.offset.x,
                    y: -c.scroll.offset.y
                }),
                Yt(c.latestValues) && Dn(l, c.latestValues)
            }
            return Yt(this.latestValues) && Dn(l, this.latestValues),
            l
        }
        removeTransform(o) {
            const a = J();
            Le(a, o);
            for (let l = 0; l < this.path.length; l++) {
                const u = this.path[l];
                if (!u.instance || !Yt(u.latestValues))
                    continue;
                Oa(u.latestValues) && u.updateSnapshot();
                const c = J()
                  , f = u.measurePageBox();
                Le(c, f),
                Df(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c)
            }
            return Yt(this.latestValues) && Df(a, this.latestValues),
            a
        }
        setTargetDelta(o) {
            this.targetDelta = o,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(o) {
            this.options = {
                ...this.options,
                ...o,
                crossfade: o.crossfade !== void 0 ? o.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ue.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(o=!1) {
            var d;
            const a = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
            const l = !!this.resumingFrom || this !== a;
            if (!(o || l && this.isSharedProjectionDirty || this.isProjectionDirty || (d = this.parent) != null && d.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                return;
            const {layout: c, layoutId: f} = this.options;
            if (!(!this.layout || !(c || f))) {
                if (this.resolvedRelativeTargetAt = ue.timestamp,
                !this.targetDelta && !this.relativeTarget) {
                    const y = this.getClosestProjectingParent();
                    y && y.layout && this.animationProgress !== 1 ? (this.relativeParent = y,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = J(),
                    this.relativeTargetOrigin = J(),
                    Er(this.relativeTargetOrigin, this.layout.layoutBox, y.layout.layoutBox),
                    Le(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = J(),
                this.targetWithTransforms = J()),
                this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
                Ax(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Le(this.target, this.layout.layoutBox),
                cm(this.target, this.targetDelta)) : Le(this.target, this.layout.layoutBox),
                this.attemptToResolveRelativeTarget)) {
                    this.attemptToResolveRelativeTarget = !1;
                    const y = this.getClosestProjectingParent();
                    y && !!y.resumingFrom == !!this.resumingFrom && !y.options.layoutScroll && y.target && this.animationProgress !== 1 ? (this.relativeParent = y,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = J(),
                    this.relativeTargetOrigin = J(),
                    Er(this.relativeTargetOrigin, this.target, y.target),
                    Le(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || Oa(this.parent.latestValues) || um(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var g;
            const o = this.getLead()
              , a = !!this.resumingFrom || this !== o;
            let l = !0;
            if ((this.isProjectionDirty || (g = this.parent) != null && g.isProjectionDirty) && (l = !1),
            a && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = !1),
            this.resolvedRelativeTargetAt === ue.timestamp && (l = !1),
            l)
                return;
            const {layout: u, layoutId: c} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(u || c))
                return;
            Le(this.layoutCorrected, this.layout.layoutBox);
            const f = this.treeScale.x
              , d = this.treeScale.y;
            $1(this.layoutCorrected, this.treeScale, this.path, a),
            o.layout && !o.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (o.target = o.layout.layoutBox,
            o.targetWithTransforms = J());
            const {target: y} = o;
            if (!y) {
                this.prevProjectionDelta && (this.createProjectionDeltas(),
                this.scheduleRender());
                return
            }
            !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Pf(this.prevProjectionDelta.x, this.projectionDelta.x),
            Pf(this.prevProjectionDelta.y, this.projectionDelta.y)),
            Pr(this.projectionDelta, this.layoutCorrected, y, this.latestValues),
            (this.treeScale.x !== f || this.treeScale.y !== d || !Vf(this.projectionDelta.x, this.prevProjectionDelta.x) || !Vf(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", y))
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(o=!0) {
            var a;
            if ((a = this.options.visualElement) == null || a.scheduleRender(),
            o) {
                const l = this.getStack();
                l && l.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = Fn(),
            this.projectionDelta = Fn(),
            this.projectionDeltaWithTransform = Fn()
        }
        setAnimationOrigin(o, a=!1) {
            const l = this.snapshot
              , u = l ? l.latestValues : {}
              , c = {
                ...this.latestValues
            }
              , f = Fn();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !a;
            const d = J()
              , y = l ? l.source : void 0
              , g = this.layout ? this.layout.source : void 0
              , x = y !== g
              , E = this.getStack()
              , p = !E || E.members.length <= 1
              , h = !!(x && !p && this.options.crossfade === !0 && !this.path.some(Sw));
            this.animationProgress = 0;
            let m;
            this.mixTargetDelta = S => {
                const w = S / 1e3;
                If(f.x, o.x, w),
                If(f.y, o.y, w),
                this.setTargetDelta(f),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Er(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                ww(this.relativeTarget, this.relativeTargetOrigin, d, w),
                m && sw(this.relativeTarget, m) && (this.isProjectionDirty = !1),
                m || (m = J()),
                Le(m, this.relativeTarget)),
                x && (this.animationValues = c,
                qx(c, u, this.latestValues, w, h, p)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = w
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(o) {
            var a, l, u;
            this.notifyListeners("animationStart"),
            (a = this.currentAnimation) == null || a.stop(),
            (u = (l = this.resumingFrom) == null ? void 0 : l.currentAnimation) == null || u.stop(),
            this.pendingAnimation && (_t(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = W.update( () => {
                bi.hasAnimatedSinceResize = !0,
                this.motionValue || (this.motionValue = Hn(0)),
                this.currentAnimation = Yx(this.motionValue, [0, 1e3], {
                    ...o,
                    velocity: 0,
                    isSync: !0,
                    onUpdate: c => {
                        this.mixTargetDelta(c),
                        o.onUpdate && o.onUpdate(c)
                    }
                    ,
                    onStop: () => {}
                    ,
                    onComplete: () => {
                        o.onComplete && o.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const o = this.getStack();
            o && o.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(lw),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const o = this.getLead();
            let {targetWithTransforms: a, target: l, layout: u, latestValues: c} = o;
            if (!(!a || !l || !u)) {
                if (this !== o && this.layout && u && Vm(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
                    l = this.target || J();
                    const f = ve(this.layout.layoutBox.x);
                    l.x.min = o.target.x.min,
                    l.x.max = l.x.min + f;
                    const d = ve(this.layout.layoutBox.y);
                    l.y.min = o.target.y.min,
                    l.y.max = l.y.min + d
                }
                Le(a, l),
                Dn(a, c),
                Pr(this.projectionDeltaWithTransform, this.layoutCorrected, a, c)
            }
        }
        registerSharedNode(o, a) {
            this.sharedNodes.has(o) || this.sharedNodes.set(o, new ow),
            this.sharedNodes.get(o).add(a);
            const u = a.options.initialPromotionConfig;
            a.promote({
                transition: u ? u.transition : void 0,
                preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0
            })
        }
        isLead() {
            const o = this.getStack();
            return o ? o.lead === this : !0
        }
        getLead() {
            var a;
            const {layoutId: o} = this.options;
            return o ? ((a = this.getStack()) == null ? void 0 : a.lead) || this : this
        }
        getPrevLead() {
            var a;
            const {layoutId: o} = this.options;
            return o ? (a = this.getStack()) == null ? void 0 : a.prevLead : void 0
        }
        getStack() {
            const {layoutId: o} = this.options;
            if (o)
                return this.root.sharedNodes.get(o)
        }
        promote({needsReset: o, transition: a, preserveFollowOpacity: l}={}) {
            const u = this.getStack();
            u && u.promote(this, l),
            o && (this.projectionDelta = void 0,
            this.needsReset = !0),
            a && this.setOptions({
                transition: a
            })
        }
        relegate() {
            const o = this.getStack();
            return o ? o.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {visualElement: o} = this.options;
            if (!o)
                return;
            let a = !1;
            const {latestValues: l} = o;
            if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0),
            !a)
                return;
            const u = {};
            l.z && Ao("z", o, u, this.animationValues);
            for (let c = 0; c < Fo.length; c++)
                Ao(`rotate${Fo[c]}`, o, u, this.animationValues),
                Ao(`skew${Fo[c]}`, o, u, this.animationValues);
            o.render();
            for (const c in u)
                o.setStaticValue(c, u[c]),
                this.animationValues && (this.animationValues[c] = u[c]);
            o.scheduleRender()
        }
        applyProjectionStyles(o, a) {
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible) {
                o.visibility = "hidden";
                return
            }
            const l = this.getTransformTemplate();
            if (this.needsReset) {
                this.needsReset = !1,
                o.visibility = "",
                o.opacity = "",
                o.pointerEvents = Ki(a == null ? void 0 : a.pointerEvents) || "",
                o.transform = l ? l(this.latestValues, "") : "none";
                return
            }
            const u = this.getLead();
            if (!this.projectionDelta || !this.layout || !u.target) {
                this.options.layoutId && (o.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                o.pointerEvents = Ki(a == null ? void 0 : a.pointerEvents) || ""),
                this.hasProjected && !Yt(this.latestValues) && (o.transform = l ? l({}, "") : "none",
                this.hasProjected = !1);
                return
            }
            o.visibility = "";
            const c = u.animationValues || u.latestValues;
            this.applyTransformsToTarget();
            let f = aw(this.projectionDeltaWithTransform, this.treeScale, c);
            l && (f = l(c, f)),
            o.transform = f;
            const {x: d, y} = this.projectionDelta;
            o.transformOrigin = `${d.origin * 100}% ${y.origin * 100}% 0`,
            u.animationValues ? o.opacity = u === this ? c.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : c.opacityExit : o.opacity = u === this ? c.opacity !== void 0 ? c.opacity : "" : c.opacityExit !== void 0 ? c.opacityExit : 0;
            for (const g in Yr) {
                if (c[g] === void 0)
                    continue;
                const {correct: x, applyTo: E, isCSSVariable: p} = Yr[g]
                  , h = f === "none" ? c[g] : x(c[g], u);
                if (E) {
                    const m = E.length;
                    for (let S = 0; S < m; S++)
                        o[E[S]] = h
                } else
                    p ? this.options.visualElement.renderState.vars[g] = h : o[g] = h
            }
            this.options.layoutId && (o.pointerEvents = u === this ? Ki(a == null ? void 0 : a.pointerEvents) || "" : "none")
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(o => {
                var a;
                return (a = o.currentAnimation) == null ? void 0 : a.stop()
            }
            ),
            this.root.nodes.forEach(Lf),
            this.root.sharedNodes.clear()
        }
    }
}
function cw(e) {
    e.updateLayout()
}
function fw(e) {
    var n;
    const t = ((n = e.resumeFrom) == null ? void 0 : n.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
        const {layoutBox: r, measuredBox: i} = e.layout
          , {animationType: s} = e.options
          , o = t.source !== e.layout.source;
        s === "size" ? Re(f => {
            const d = o ? t.measuredBox[f] : t.layoutBox[f]
              , y = ve(d);
            d.min = r[f].min,
            d.max = d.min + y
        }
        ) : Vm(s, t.layoutBox, r) && Re(f => {
            const d = o ? t.measuredBox[f] : t.layoutBox[f]
              , y = ve(r[f]);
            d.max = d.min + y,
            e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0,
            e.relativeTarget[f].max = e.relativeTarget[f].min + y)
        }
        );
        const a = Fn();
        Pr(a, r, t.layoutBox);
        const l = Fn();
        o ? Pr(l, e.applyTransform(i, !0), t.measuredBox) : Pr(l, r, t.layoutBox);
        const u = !Fm(a);
        let c = !1;
        if (!e.resumeFrom) {
            const f = e.getClosestProjectingParent();
            if (f && !f.resumeFrom) {
                const {snapshot: d, layout: y} = f;
                if (d && y) {
                    const g = J();
                    Er(g, t.layoutBox, d.layoutBox);
                    const x = J();
                    Er(x, r, y.layoutBox),
                    Am(g, x) || (c = !0),
                    f.options.layoutRoot && (e.relativeTarget = x,
                    e.relativeTargetOrigin = g,
                    e.relativeParent = f)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: r,
            snapshot: t,
            delta: l,
            layoutDelta: a,
            hasLayoutChanged: u,
            hasRelativeLayoutChanged: c
        })
    } else if (e.isLead()) {
        const {onExitComplete: r} = e.options;
        r && r()
    }
    e.options.transition = void 0
}
function dw(e) {
    e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}
function hw(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}
function pw(e) {
    e.clearSnapshot()
}
function Lf(e) {
    e.clearMeasurements()
}
function Rf(e) {
    e.isLayoutDirty = !1
}
function mw(e) {
    const {visualElement: t} = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform()
}
function _f(e) {
    e.finishAnimation(),
    e.targetDelta = e.relativeTarget = e.target = void 0,
    e.isProjectionDirty = !0
}
function yw(e) {
    e.resolveTargetDelta()
}
function gw(e) {
    e.calcProjection()
}
function vw(e) {
    e.resetSkewAndRotation()
}
function xw(e) {
    e.removeLeadSnapshot()
}
function If(e, t, n) {
    e.translate = b(t.translate, 0, n),
    e.scale = b(t.scale, 1, n),
    e.origin = t.origin,
    e.originPoint = t.originPoint
}
function Of(e, t, n, r) {
    e.min = b(t.min, n.min, r),
    e.max = b(t.max, n.max, r)
}
function ww(e, t, n, r) {
    Of(e.x, t.x, n.x, r),
    Of(e.y, t.y, n.y, r)
}
function Sw(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const Cw = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , zf = e => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e)
  , Bf = zf("applewebkit/") && !zf("chrome/") ? Math.round : Ue;
function Uf(e) {
    e.min = Bf(e.min),
    e.max = Bf(e.max)
}
function Tw(e) {
    Uf(e.x),
    Uf(e.y)
}
function Vm(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !Fx(Nf(t), Nf(n), .2)
}
function kw(e) {
    var t;
    return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot)
}
const Pw = Nm({
    attachResizeListener: (e, t) => Qr(e, "resize", t),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
})
  , jo = {
    current: void 0
}
  , Lm = Nm({
    measureScroll: e => ({
        x: e.scrollLeft,
        y: e.scrollTop
    }),
    defaultParent: () => {
        if (!jo.current) {
            const e = new Pw({});
            e.mount(window),
            e.setOptions({
                layoutScroll: !0
            }),
            jo.current = e
        }
        return jo.current
    }
    ,
    resetTransform: (e, t) => {
        e.style.transform = t !== void 0 ? t : "none"
    }
    ,
    checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
})
  , Ew = {
    pan: {
        Feature: Hx
    },
    drag: {
        Feature: Wx,
        ProjectionNode: Lm,
        MeasureLayout: Em
    }
};
function $f(e, t, n) {
    const {props: r} = e;
    e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
    const i = "onHover" + n
      , s = r[i];
    s && W.postRender( () => s(t, ii(t)))
}
class Mw extends Ut {
    mount() {
        const {current: t} = this.node;
        t && (this.unmount = Yv(t, (n, r) => ($f(this.node, r, "Start"),
        i => $f(this.node, i, "End"))))
    }
    unmount() {}
}
class Dw extends Ut {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let t = !1;
        try {
            t = this.node.current.matches(":focus-visible")
        } catch {
            t = !0
        }
        !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = ti(Qr(this.node.current, "focus", () => this.onFocus()), Qr(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
function Wf(e, t, n) {
    const {props: r} = e;
    if (e.current instanceof HTMLButtonElement && e.current.disabled)
        return;
    e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
    const i = "onTap" + (n === "End" ? "" : n)
      , s = r[i];
    s && W.postRender( () => s(t, ii(t)))
}
class Fw extends Ut {
    mount() {
        const {current: t} = this.node;
        t && (this.unmount = Jv(t, (n, r) => (Wf(this.node, r, "Start"),
        (i, {success: s}) => Wf(this.node, i, s ? "End" : "Cancel")), {
            useGlobalTarget: this.node.props.globalTapTarget
        }))
    }
    unmount() {}
}
const Ka = new WeakMap
  , No = new WeakMap
  , Aw = e => {
    const t = Ka.get(e.target);
    t && t(e)
}
  , jw = e => {
    e.forEach(Aw)
}
;
function Nw({root: e, ...t}) {
    const n = e || document;
    No.has(n) || No.set(n, {});
    const r = No.get(n)
      , i = JSON.stringify(t);
    return r[i] || (r[i] = new IntersectionObserver(jw,{
        root: e,
        ...t
    })),
    r[i]
}
function Vw(e, t, n) {
    const r = Nw(t);
    return Ka.set(e, n),
    r.observe(e),
    () => {
        Ka.delete(e),
        r.unobserve(e)
    }
}
const Lw = {
    some: 0,
    all: 1
};
class Rw extends Ut {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {viewport: t={}} = this.node.getProps()
          , {root: n, margin: r, amount: i="some", once: s} = t
          , o = {
            root: n ? n.current : void 0,
            rootMargin: r,
            threshold: typeof i == "number" ? i : Lw[i]
        }
          , a = l => {
            const {isIntersecting: u} = l;
            if (this.isInView === u || (this.isInView = u,
            s && !u && this.hasEnteredView))
                return;
            u && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", u);
            const {onViewportEnter: c, onViewportLeave: f} = this.node.getProps()
              , d = u ? c : f;
            d && d(l)
        }
        ;
        return Vw(this.node.current, o, a)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: t, prevProps: n} = this.node;
        ["amount", "margin", "root"].some(_w(t, n)) && this.startObserver()
    }
    unmount() {}
}
function _w({viewport: e={}}, {viewport: t={}}={}) {
    return n => e[n] !== t[n]
}
const Iw = {
    inView: {
        Feature: Rw
    },
    tap: {
        Feature: Fw
    },
    focus: {
        Feature: Dw
    },
    hover: {
        Feature: Mw
    }
}
  , Ow = {
    layout: {
        ProjectionNode: Lm,
        MeasureLayout: Em
    }
}
  , zw = {
    ...Tx,
    ...Iw,
    ...Ew,
    ...Ow
}
  , A = z1(zw, J1)
  , Bw = "/assets/intro-BTrTZZvr.gif";
function Uw({name: e="SIS", onNext: t}) {
    const n = {
        hidden: {
            opacity: 0,
            y: 25
        },
        visible: r => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: r,
                duration: .8,
                ease: "easeOut"
            }
        })
    };
    return v.jsxs("div", {
        className: "relative w-full h-[100dvh] flex flex-col justify-between items-center overflow-hidden bg-[#FFF9F5] text-center",
        children: [v.jsxs(A.div, {
            variants: n,
            initial: "hidden",
            animate: "visible",
            custom: .1,
            className: "flex flex-col items-center mt-6 sm:mt-10 z-10",
            children: [v.jsx("h1", {
                className: "tracking-[0.25em] text-gray-700 uppercase font-medium",
                style: {
                    fontFamily: "Montserrat, system-ui, sans-serif",
                    fontSize: "clamp(0.85rem, 2vw, 1rem)"
                },
                children: "For my lovely"
            }), v.jsx("h2", {
                className: "text-[#F47E9C] uppercase font-black leading-none mt-1 drop-shadow-sm",
                style: {
                    fontFamily: "Playfair Display, serif",
                    fontSize: "clamp(1.6rem, 4vw, 2.5rem)",
                    letterSpacing: "0.05em"
                },
                children: "S I S T E R ✦"
            })]
        }), v.jsxs("div", {
            className: "flex flex-col items-center justify-center flex-grow px-4 space-y-3 sm:space-y-4 z-10",
            children: [v.jsxs(A.div, {
                variants: n,
                initial: "hidden",
                animate: "visible",
                custom: .4,
                className: "relative leading-none",
                children: [v.jsx("h1", {
                    className: "text-[#F47E9C] italic font-semibold drop-shadow-sm",
                    style: {
                        fontFamily: "Playfair Display, serif",
                        fontSize: "clamp(3rem, 10vw, 5.5rem)",
                        lineHeight: "1"
                    },
                    children: "Happy"
                }), v.jsx("div", {
                    className: "absolute top-[42%] left-1/2 -translate-x-1/2 bg-[#FDE2E4] px-3 py-[2px] rounded-md rotate-[-6deg] shadow-sm border border-[#F7B5CF]/60",
                    children: v.jsx("span", {
                        className: "text-[clamp(11px,1.8vw,14px)] tracking-wide",
                        style: {
                            fontFamily: "Montserrat, system-ui, sans-serif",
                            color: "#2b2b2b"
                        },
                        children: "Bhai Dooj"
                    })
                })]
            }), v.jsxs(A.h2, {
                variants: n,
                initial: "hidden",
                animate: "visible",
                custom: .6,
                className: "text-[#1f1f1f] uppercase font-extrabold",
                style: {
                    fontFamily: "Montserrat, system-ui, sans-serif",
                    fontSize: "clamp(2rem, 7vw, 4rem)",
                    lineHeight: "1"
                },
                children: ["Dear ", e]
            }), v.jsxs(A.p, {
                variants: n,
                initial: "hidden",
                animate: "visible",
                custom: .8,
                className: "text-[clamp(12px,1.5vw,15px)] text-gray-700 leading-relaxed max-w-[360px]",
                style: {
                    fontFamily: "Montserrat, system-ui, sans-serif"
                },
                children: ["You’ve always been my biggest supporter, my secret keeper, and my forever partner-in-crime 💫 On this", " ", v.jsx("span", {
                    className: "text-[#F47E9C] font-semibold",
                    children: "Bhai Dooj"
                }), ", I just want you to know how lucky I am to have you as my sister."]
            }), v.jsx(A.div, {
                variants: n,
                initial: "hidden",
                animate: "visible",
                custom: 1,
                className: "text-[#F47E9C] text-[clamp(16px,2vw,22px)]",
                children: "✦ ✦ ✦"
            }), v.jsx(A.div, {
                variants: n,
                initial: "hidden",
                animate: "visible",
                custom: 1.2,
                className: "w-[65%] sm:w-[38%] max-w-[240px] mt-1",
                children: v.jsx("img", {
                    src: "intro-BTrTZZvr.gif",
                    alt: "Brother and sister illustration",
                    className: "w-full h-auto object-contain rounded-xl shadow-lg border border-[#FDE2E4]/60"
                })
            })]
        }), t && v.jsx(A.button, {
            onClick: t,
            whileTap: {
                scale: .96
            },
            initial: {
                opacity: 0,
                y: 20
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                delay: 1.3
            },
            className: "mb-5 sm:mb-7 text-gray-700 bg-[#FDE2E4] px-8 py-2.5 rounded-full text-sm sm:text-base shadow-md hover:bg-[#F7B5CF] hover:shadow-lg transition-all duration-300 z-10",
            style: {
                fontFamily: "Montserrat, system-ui, sans-serif"
            },
            children: "Next →"
        })]
    })
}
function $w({onBack: e, onNext: t}) {
    const [n,r] = M.useState(["heart", "x", "x", "x", null, "x", "x", "x", "heart"])
      , [i,s] = M.useState(!1)
      , o = a => {
        if (n[a] || i)
            return;
        const l = [...n];
        l[a] = "heart",
        r(l),
        l.filter(u => u === "heart").length === 3 && s(!0)
    }
    ;
    return M.useEffect( () => {
        if (i && t) {
            const a = setTimeout( () => t(), 2500);
            return () => clearTimeout(a)
        }
    }
    , [i, t]),
    v.jsxs("div", {
        className: "relative w-full h-[100dvh] flex flex-col justify-between items-center overflow-hidden bg-transparent text-center",
        children: [v.jsx(A.h1, {
            className: "text-[clamp(1.8rem,5vw,3.5rem)] text-[#F47E9C] font-semibold text-center mt-6 sm:mt-10 mb-4 z-10 drop-shadow-sm",
            initial: {
                opacity: 0,
                y: -20
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: .6
            },
            style: {
                fontFamily: "Playfair Display, serif"
            },
            children: "Fill in the blanks to get a chocolate 🍫"
        }), v.jsxs(A.div, {
            className: "bg-white/80 w-full max-w-[700px] flex flex-col items-center justify-center py-6 sm:py-8 rounded-2xl shadow-lg border border-[#f3dbdf]/80 relative backdrop-blur-[3px] z-10",
            initial: {
                opacity: 0,
                scale: .95
            },
            animate: {
                opacity: 1,
                scale: 1
            },
            transition: {
                duration: .6
            },
            children: [v.jsx("div", {
                className: "grid grid-cols-3 gap-3 sm:gap-4 px-4 sm:px-6",
                children: n.map( (a, l) => v.jsxs(A.div, {
                    whileTap: {
                        scale: .85
                    },
                    onClick: () => o(l),
                    className: "w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 border-2 border-[#F47E9C] flex items-center justify-center text-[clamp(1.8rem,4vw,3rem)] cursor-pointer select-none bg-white rounded-xl shadow-sm hover:bg-[#FFF0F5] transition-all",
                    children: [a === "heart" && v.jsx(A.div, {
                        initial: {
                            scale: 0
                        },
                        animate: {
                            scale: 1
                        },
                        transition: {
                            type: "spring",
                            stiffness: 200
                        },
                        className: "text-[#F47E9C]",
                        children: "🍫"
                    }), a === "x" && v.jsx(A.div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        className: "text-[#F47E9C]/70",
                        children: "✖"
                    })]
                }, l))
            }), i && v.jsxs(A.div, {
                className: "absolute inset-0 flex flex-col items-center justify-center p-6 backdrop-blur-[3px]",
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    delay: .2
                },
                children: [v.jsx(A.div, {
                    initial: {
                        scale: 0
                    },
                    animate: {
                        scale: [1, 1.15, 1],
                        opacity: [1, .7, 1]
                    },
                    transition: {
                        repeat: 1 / 0,
                        duration: 1.4,
                        ease: "easeInOut"
                    },
                    className: "absolute w-40 h-40 rounded-full bg-[#F7B5CF] blur-3xl opacity-40"
                }), v.jsx(A.div, {
                    initial: {
                        scale: 0
                    },
                    animate: {
                        scale: 1
                    },
                    transition: {
                        type: "spring",
                        stiffness: 150
                    },
                    className: "relative text-[clamp(1.8rem,6vw,3.5rem)] text-[#F47E9C] font-semibold text-center px-4",
                    style: {
                        fontFamily: "Playfair Display, serif"
                    },
                    children: "You succesfully unlocked a chocolate treat, yay 🍫"
                })]
            })]
        }), v.jsxs("div", {
            className: "flex justify-between items-center w-full max-w-[700px] mt-6 mb-5 px-4 z-10",
            children: [e && v.jsx(A.button, {
                onClick: e,
                whileTap: {
                    scale: .95
                },
                initial: {
                    opacity: 0,
                    y: 10
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    delay: .6
                },
                className: "text-gray-700 bg-[#E0ECFA] px-6 py-2.5 rounded-full text-sm sm:text-base shadow-sm hover:bg-[#C6DBF3] transition-all",
                style: {
                    fontFamily: "Montserrat, system-ui, sans-serif"
                },
                children: "← Back"
            }), t && v.jsx(A.button, {
                onClick: t,
                whileTap: {
                    scale: .95
                },
                initial: {
                    opacity: 0,
                    y: 10
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    delay: .6
                },
                className: "text-gray-700 bg-[#FDE2E4] px-6 py-2.5 rounded-full text-sm sm:text-base shadow-sm hover:bg-[#F7B5CF] transition-all",
                style: {
                    fontFamily: "Montserrat, system-ui, sans-serif"
                },
                children: "Next →"
            })]
        })]
    })
}
function Ww({size: e=120, className: t="", color: n="#c83d52"}) {
    return v.jsxs("svg", {
        width: e,
        height: e,
        viewBox: "0 0 200 200",
        xmlns: "http://www.w3.org/2000/svg",
        className: t,
        role: "img",
        "aria-label": "Heart Stamp",
        children: [v.jsx("defs", {
            children: v.jsxs("filter", {
                id: "grain",
                x: "-20%",
                y: "-20%",
                width: "140%",
                height: "140%",
                children: [v.jsx("feTurbulence", {
                    type: "fractalNoise",
                    baseFrequency: "1",
                    numOctaves: "2",
                    stitchTiles: "stitch",
                    result: "noise"
                }), v.jsx("feColorMatrix", {
                    type: "saturate",
                    values: "0",
                    in: "noise",
                    result: "mono"
                }), v.jsx("feComponentTransfer", {
                    in: "mono",
                    result: "grain",
                    children: v.jsx("feFuncA", {
                        type: "table",
                        tableValues: "0 0 0.15 0.45"
                    })
                }), v.jsx("feBlend", {
                    in: "SourceGraphic",
                    in2: "grain",
                    mode: "multiply"
                })]
            })
        }), v.jsx("g", {
            fill: n,
            opacity: "0.9",
            filter: "url(#grain)",
            children: Array.from({
                length: 24
            }).map( (r, i) => {
                const s = i / 24 * Math.PI * 2
                  , o = 88
                  , a = 100 + o * Math.cos(s)
                  , l = 100 + o * Math.sin(s);
                return v.jsx("circle", {
                    cx: a,
                    cy: l,
                    r: "3"
                }, i)
            }
            )
        }), v.jsx("circle", {
            cx: "100",
            cy: "100",
            r: "72",
            stroke: n,
            strokeWidth: "5",
            fill: "none",
            opacity: "0.95"
        }), v.jsx("circle", {
            cx: "100",
            cy: "100",
            r: "55",
            stroke: n,
            strokeWidth: "2.5",
            fill: "none",
            opacity: "0.8"
        }), v.jsx("path", {
            d: "M100 82 C100 68 82 68 82 82 C82 96 100 108 100 108 C100 108 118 96 118 82 C118 68 100 68 100 82 Z",
            fill: n,
            stroke: "#9e2b3d",
            strokeWidth: "1",
            opacity: "0.95",
            filter: "url(#grain)"
        }), v.jsx("path", {
            id: "topArc",
            d: "M50 90 A45 45 0 0 1 150 95",
            fill: "none"
        }), v.jsx("text", {
            fontSize: "14",
            textAnchor: "middle",
            fill: n,
            style: {
                fontFamily: "Montserrat, sans-serif",
                letterSpacing: "0.2em",
                fontWeight: 600
            },
            children: v.jsx("textPath", {
                href: "#topArc",
                startOffset: "50%",
                children: "HAPPY"
            })
        }), v.jsx("path", {
            id: "bottomArc",
            d: "M155 110 A55 50 0 0 1 45 110",
            fill: "none"
        }), v.jsx("text", {
            fontSize: "12",
            textAnchor: "middle",
            fill: "#b23a4b",
            style: {
                fontFamily: "Montserrat, sans-serif",
                letterSpacing: "0.15em",
                fontWeight: 500
            },
            children: v.jsx("textPath", {
                href: "#bottomArc",
                startOffset: "50%",
                children: "BHAI DOOJ"
            })
        })]
    })
}
const Hw = "/assets/letter-CGnwmx_I.png";
function Kw({onBack: e, onNext: t}) {
    const [n,r] = M.useState("")
      , i = "I just want to remind you how special you are to me. May your life shine as bright as your smile, and may chocolates always find their way to you 🍫✨";
    M.useEffect( () => {
        let o = 0;
        const a = setInterval( () => {
            r(i.slice(0, o)),
            o++,
            o > i.length && clearInterval(a)
        }
        , 30);
        return () => clearInterval(a)
    }
    , []);
    const s = {
        hidden: {
            opacity: 0,
            y: 25
        },
        visible: o => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: o,
                duration: .8,
                ease: "easeOut"
            }
        })
    };
    return v.jsxs("div", {
        className: "relative w-full h-[100dvh] flex flex-col justify-between items-center overflow-hidden bg-transparent text-center",
        children: [v.jsx("div", {
            className: "flex-grow flex items-center justify-center w-full relative z-10 px-4",
            children: v.jsxs(A.div, {
                initial: {
                    opacity: 0,
                    scale: .97
                },
                animate: {
                    opacity: 1,
                    scale: 1
                },
                transition: {
                    duration: .6
                },
                className: "relative w-full max-w-xl bg-white/85 rounded-2xl shadow-xl border border-[#f1dede] px-6 py-10 sm:px-10 flex flex-col items-center text-center backdrop-blur-sm",
                children: [v.jsx(A.div, {
                    initial: {
                        rotate: 6,
                        opacity: 0
                    },
                    animate: {
                        rotate: 6,
                        opacity: 1
                    },
                    transition: {
                        delay: .4
                    },
                    className: "absolute top-[-30px] right-[-25px] w-[100px] sm:w-[120px] rotate-3 overflow-hidden",
                    children: v.jsx("img", {
                        src: "letter.png",
                        alt: "Envelope",
                        className: "w-full h-full object-cover"
                    })
                }), v.jsx(A.div, {
                    initial: {
                        opacity: 0,
                        rotate: -10,
                        scale: .9
                    },
                    animate: {
                        opacity: 1,
                        rotate: -10,
                        scale: 1
                    },
                    transition: {
                        delay: .8
                    },
                    className: "absolute bottom-[-25px] left-[-25px]",
                    children: v.jsx(Ww, {})
                }), v.jsxs(A.div, {
                    variants: s,
                    initial: "hidden",
                    animate: "visible",
                    custom: .1,
                    className: "mb-5",
                    children: [v.jsx("h1", {
                        className: "tracking-[0.2em] text-gray-700 uppercase font-semibold",
                        style: {
                            fontFamily: "Montserrat, sans-serif",
                            fontSize: "clamp(0.9rem, 1.5vw, 1rem)"
                        },
                        children: "A LETTER"
                    }), v.jsx("h2", {
                        className: "text-[#F47E9C] uppercase font-black leading-none mt-[2px]",
                        style: {
                            fontFamily: "Playfair Display, serif",
                            fontSize: "clamp(1.4rem, 2.8vw, 2rem)"
                        },
                        children: "From Your Bhai ✦"
                    })]
                }), v.jsxs(A.div, {
                    variants: s,
                    initial: "hidden",
                    animate: "visible",
                    custom: .3,
                    className: "max-w-md",
                    children: [v.jsx("h3", {
                        className: "text-[#F47E9C] italic font-semibold mb-2",
                        style: {
                            fontFamily: "Playfair Display, serif",
                            fontSize: "clamp(1.2rem, 2vw, 1.5rem)"
                        },
                        children: "Dear Goruu!💖"
                    }), v.jsxs("p", {
                        className: "text-gray-800 text-[clamp(13px,1.3vw,15px)] leading-relaxed whitespace-pre-wrap min-h-[120px] mb-3",
                        style: {
                            fontFamily: "Montserrat, sans-serif"
                        },
                        children: [n, v.jsx(A.span, {
                            animate: {
                                opacity: [0, 1, 0]
                            },
                            transition: {
                                repeat: 1 / 0,
                                duration: 1,
                                ease: "easeInOut"
                            },
                            className: "inline-block w-[8px] bg-[#F47E9C] rounded-sm ml-[2px] align-bottom"
                        })]
                    }), v.jsx("h4", {
                        className: "text-[#1f1f1f] italic font-semibold mt-1",
                        style: {
                            fontFamily: "Playfair Display, serif",
                            fontSize: "clamp(1rem, 2vw, 1.2rem)"
                        },
                        children: "— With love, your brother 💌"
                    })]
                })]
            })
        }), v.jsxs("div", {
            className: "flex justify-between items-center w-full max-w-xl px-6 mb-6 z-20",
            children: [e && v.jsx(A.button, {
                onClick: e,
                whileTap: {
                    scale: .95
                },
                initial: {
                    opacity: 0,
                    y: 10
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    delay: .6
                },
                className: "text-gray-700 bg-[#E0ECFA] px-6 py-2.5 rounded-full text-sm sm:text-base shadow-sm hover:bg-[#C6DBF3] transition-all",
                style: {
                    fontFamily: "Montserrat, sans-serif"
                },
                children: "← Back"
            }), t && v.jsx(A.button, {
                onClick: t,
                whileTap: {
                    scale: .95
                },
                initial: {
                    opacity: 0,
                    y: 10
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    delay: .6
                },
                className: "text-gray-700 bg-[#FDE2E4] px-6 py-2.5 rounded-full text-sm sm:text-base shadow-sm hover:bg-[#F7B5CF] transition-all",
                style: {
                    fontFamily: "Montserrat, sans-serif"
                },
                children: "Next →"
            })]
        })]
    })
}
function bw({title: e="Precious Memories", photos: t, captions: n, onBack: r, onNext: i}) {
    const [s,o] = M.useState(0)
      , a = () => o(u => (u + 1) % t.length)
      , l = () => o(u => (u - 1 + t.length) % t.length);
    return v.jsxs("div", {
        className: "relative min-h-screen flex flex-col justify-center items-center bg-transparent p-4 sm:p-6 overflow-hidden",
        children: [v.jsxs(A.div, {
            initial: {
                opacity: 0,
                scale: .97
            },
            animate: {
                opacity: 1,
                scale: 1
            },
            transition: {
                duration: .6
            },
            className: "relative w-full max-w-[680px] rounded-2xl border-[2px] border-[#f6dce1] bg-white/85 shadow-xl flex flex-col overflow-hidden backdrop-blur-sm",
            style: {
                fontFamily: "'Playfair Display', serif"
            },
            children: [v.jsxs("div", {
                className: "px-8 sm:px-10 pt-6 text-[#2c2c2c] text-center",
                children: [v.jsx(A.h1, {
                    initial: {
                        opacity: 0,
                        y: -10
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .6
                    },
                    className: "text-[clamp(1.8rem,6vw,3.2rem)] leading-none text-[#F47E9C] font-semibold",
                    children: e
                }), v.jsx("div", {
                    className: "mt-3 border-t-2 border-b-2 border-[#F7B5CF]/40 w-[70%] mx-auto"
                }), v.jsxs("div", {
                    className: "flex justify-between mt-3 text-xs sm:text-sm text-[#555]",
                    style: {
                        fontFamily: "'Cormorant Garamond', serif"
                    },
                    children: [v.jsxs("span", {
                        children: [v.jsx("span", {
                            className: "font-bold",
                            children: "FROM:"
                        }), " Bhai 💫"]
                    }), v.jsxs("span", {
                        children: [v.jsx("span", {
                            className: "font-bold",
                            children: "TO:"
                        }), " My Lovely Sister 💖"]
                    })]
                })]
            }), v.jsxs("div", {
                className: "mx-6 sm:mx-8 my-4 border-[2px] border-[#F47E9C]/30 rounded-xl bg-[#FFF9FA] flex-1 relative overflow-hidden flex flex-col items-center justify-center p-3",
                children: [v.jsx("div", {
                    className: "relative w-full aspect-[4/3] flex items-center justify-center overflow-hidden",
                    children: v.jsx(Ss, {
                        mode: "wait",
                        children: v.jsx(A.img, {
                            src: t[s],
                            alt: `Photo ${s + 1}`,
                            initial: {
                                opacity: 0,
                                scale: 1.05,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                scale: 1,
                                y: 0
                            },
                            exit: {
                                opacity: 0,
                                scale: .95,
                                y: -20
                            },
                            transition: {
                                duration: .6,
                                ease: "easeInOut"
                            },
                            className: "absolute inset-0 w-full h-full object-cover rounded-xl shadow-lg ring-1 ring-[#F7B5CF]/30"
                        }, s)
                    })
                }), v.jsx("div", {
                    className: "absolute bottom-3 left-0 right-0 flex items-center justify-center px-4",
                    children: v.jsx(Ss, {
                        mode: "wait",
                        children: n && n[s] && v.jsx(A.p, {
                            initial: {
                                opacity: 0,
                                y: 10
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            exit: {
                                opacity: 0,
                                y: -10
                            },
                            transition: {
                                duration: .4,
                                ease: "easeInOut"
                            },
                            className: "text-[clamp(1rem,2vw,1.3rem)] text-[#000000] italic drop-shadow-sm text-center",
                            style: {
                                fontFamily: "'Dancing Script', cursive"
                            },
                            children: n[s]
                        }, s)
                    })
                }), v.jsx("button", {
                    onClick: l,
                    className: "absolute left-3 top-1/2 -translate-y-1/2 bg-[#fff5f8]/70 border border-[#F47E9C]/40 rounded-full w-9 h-9 flex items-center justify-center text-lg text-[#F47E9C] hover:bg-[#F47E9C] hover:text-white transition-all duration-300 shadow-sm backdrop-blur-md",
                    children: "‹"
                }), v.jsx("button", {
                    onClick: a,
                    className: "absolute right-3 top-1/2 -translate-y-1/2 bg-[#fff5f8]/70 border border-[#F47E9C]/40 rounded-full w-9 h-9 flex items-center justify-center text-lg text-[#F47E9C] hover:bg-[#F47E9C] hover:text-white transition-all duration-300 shadow-sm backdrop-blur-md",
                    children: "›"
                })]
            }), v.jsx("div", {
                className: "px-8 sm:px-10 pb-6 pt-3 border-t-[1.5px] border-[#F7B5CF]/30 text-[#2c2c2c]",
                children: v.jsxs("div", {
                    className: "flex justify-between items-end",
                    children: [v.jsxs("div", {
                        className: "text-xs sm:text-sm",
                        style: {
                            fontFamily: "'Cormorant Garamond', serif"
                        },
                        children: [v.jsxs("div", {
                            children: [v.jsx("span", {
                                className: "font-bold",
                                children: "DATE:"
                            }), " Bhai Dooj"]
                        }), v.jsxs("div", {
                            children: [v.jsx("span", {
                                className: "font-bold",
                                children: "VALID FOR:"
                            }), " Forever 💫"]
                        })]
                    }), v.jsx("div", {
                        className: "text-right",
                        children: v.jsx("span", {
                            className: "block text-base sm:text-lg text-[#F47E9C]",
                            style: {
                                fontFamily: "'Dancing Script', cursive"
                            },
                            children: "With love, your brother 💖"
                        })
                    })]
                })
            })]
        }), r && v.jsx(A.button, {
            onClick: r,
            whileTap: {
                scale: .95
            },
            initial: {
                opacity: 0,
                y: 20
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                delay: .4
            },
            className: "absolute bottom-3 left-3 sm:bottom-6 sm:left-6 text-gray-700 bg-[#E0ECFA] px-5 py-2 rounded-full text-sm shadow-md hover:bg-[#C6DBF3] transition-all z-20",
            style: {
                fontFamily: "Montserrat, system-ui, sans-serif"
            },
            children: "← Back"
        }), i && v.jsx(A.button, {
            onClick: i,
            whileTap: {
                scale: .95
            },
            initial: {
                opacity: 0,
                y: 20
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                delay: .4
            },
            className: "absolute bottom-3 right-3 sm:bottom-6 sm:right-6 text-gray-700 bg-[#FDE2E4] px-5 py-2 rounded-full text-sm shadow-md hover:bg-[#F7B5CF] transition-all z-20",
            style: {
                fontFamily: "Montserrat, system-ui, sans-serif"
            },
            children: "Next →"
        })]
    })
}
const Gw = "1.mpeg.mp3"
  , Yw = "2.mpeg.mp3"
  , Qw = "3.mpeg.mp3"
  , Xw = "intro-BTrTZZvr.gif"
  , Zw = "shinchan.jpg"
  , Jw = "intro-BTrTZZvr.gif"
  , Ai = [{
    id: 1,
    title: "Ashiyan",
    file: Gw,
    cover: Xw
}, {
    id: 2,
    title: "Phoolo Ka Taaron Ka",
    file: Yw,
    cover: Zw
}, {
    id: 3,
    title: "Pal Pal Har Pal",
    file: Qw,
    cover: Jw
}];
function qw({onBack: e, onNext: t}) {
    const [n,r] = M.useState(0)
      , [i,s] = M.useState(!1)
      , [o,a] = M.useState(0)
      , [l,u] = M.useState(0)
      , [c,f] = M.useState(!1)
      , [d,y] = M.useState(null)
      , g = M.useRef(null)
      , x = Ai[n];
    M.useEffect( () => {
        if (g.current)
            if (f(!0),
            y(null),
            g.current.pause(),
            g.current.load(),
            a(0),
            i) {
                const w = g.current.play();
                w !== void 0 && w.then( () => f(!1)).catch( () => {
                    s(!1),
                    f(!1),
                    y("Playback failed")
                }
                )
            } else
                f(!1)
    }
    , [n]),
    M.useEffect( () => {
        const w = g.current;
        if (!w)
            return;
        const C = () => a(w.currentTime)
          , k = () => u(w.duration || 0)
          , T = () => p();
        return w.addEventListener("timeupdate", C),
        w.addEventListener("loadedmetadata", k),
        w.addEventListener("ended", T),
        () => {
            w.removeEventListener("timeupdate", C),
            w.removeEventListener("loadedmetadata", k),
            w.removeEventListener("ended", T)
        }
    }
    , []);
    const E = () => {
        if (g.current)
            if (i)
                g.current.pause(),
                s(!1);
            else {
                const w = g.current.play();
                w !== void 0 && w.then( () => s(!0)).catch( () => {
                    s(!1),
                    y("Tap again to retry.")
                }
                )
            }
    }
      , p = () => {
        r(w => (w + 1) % Ai.length),
        s(!0)
    }
      , h = () => {
        r(w => (w - 1 + Ai.length) % Ai.length),
        s(!0)
    }
      , m = w => {
        const C = parseFloat(w.target.value);
        a(C),
        g.current && (g.current.currentTime = C)
    }
      , S = w => {
        if (!w || isNaN(w))
            return "0:00";
        const C = Math.floor(w / 60)
          , k = Math.floor(w % 60);
        return `${C}:${k.toString().padStart(2, "0")}`
    }
    ;
    return v.jsxs("div", {
        className: "relative w-full h-[100dvh] flex flex-col justify-center items-center bg-transparent overflow-hidden p-4",
        children: [v.jsxs(A.div, {
            initial: {
                opacity: 0,
                scale: .97
            },
            animate: {
                opacity: 1,
                scale: 1
            },
            transition: {
                duration: .6
            },
            className: "relative w-full max-w-[620px] max-h-[82dvh] bg-[#FFF9FB] rounded-2xl shadow-xl border border-[#f3dbe1] px-5 py-6 sm:px-8 sm:py-8 flex flex-col items-center text-center overflow-hidden backdrop-blur-sm",
            style: {
                fontFamily: "'Playfair Display', serif"
            },
            children: [v.jsx(A.h1, {
                initial: {
                    opacity: 0,
                    y: -20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    delay: .3
                },
                className: "text-[clamp(1.3rem,4vw,2.3rem)] text-[#F47E9C] font-bold mb-4",
                children: "A Few Songs For You 💕"
            }), v.jsx("div", {
                className: "relative flex items-center justify-center mb-4",
                children: v.jsx(Ss, {
                    mode: "wait",
                    children: v.jsxs(A.div, {
                        initial: {
                            opacity: 0,
                            scale: .9,
                            rotateY: -90
                        },
                        animate: {
                            opacity: 1,
                            scale: 1,
                            rotateY: 0
                        },
                        exit: {
                            opacity: 0,
                            scale: .9,
                            rotateY: 90
                        },
                        transition: {
                            duration: .5
                        },
                        className: "relative w-36 h-36 sm:w-48 sm:h-48 rounded-2xl overflow-hidden shadow-lg ring-1 ring-[#F7B5CF]/30",
                        children: [v.jsx(A.div, {
                            className: "absolute inset-0 bg-[#F7B5CF] blur-3xl opacity-40",
                            animate: {
                                opacity: [.3, .6, .3]
                            },
                            transition: {
                                duration: 3,
                                repeat: 1 / 0
                            }
                        }), v.jsx("img", {
                            src: x.cover,
                            alt: x.title,
                            className: "w-full h-full object-cover rounded-2xl",
                            draggable: !1
                        })]
                    }, n)
                })
            }), v.jsxs("div", {
                className: "bg-white border border-[#f3dbe1] rounded-xl shadow-inner px-4 py-3 mb-4 w-full max-w-[280px]",
                children: [v.jsx("p", {
                    className: "text-[#F47E9C] uppercase text-xs tracking-widest mb-1",
                    style: {
                        fontFamily: "Montserrat, sans-serif"
                    },
                    children: c ? "Loading..." : i ? "Now Playing ♪" : "Paused"
                }), v.jsx("h2", {
                    className: "text-sm sm:text-base font-semibold text-[#2c2c2c]",
                    children: x.title
                })]
            }), v.jsxs("div", {
                className: "w-full max-w-[280px] mb-4",
                children: [v.jsxs("div", {
                    className: "flex justify-between text-[#2c2c2c] text-[11px] mb-1",
                    style: {
                        fontFamily: "Montserrat, sans-serif"
                    },
                    children: [v.jsx("span", {
                        children: S(o)
                    }), v.jsx("span", {
                        children: S(l)
                    })]
                }), v.jsx("input", {
                    type: "range",
                    min: "0",
                    max: l || 0,
                    value: o,
                    onChange: m,
                    className: "w-full h-2 rounded-full cursor-pointer appearance-none focus:outline-none",
                    style: {
                        background: `linear-gradient(to right, #F47E9C 0%, #F47E9C ${l > 0 ? o / l * 100 : 0}%, #f6e8eb ${l > 0 ? o / l * 100 : 0}%, #f6e8eb 100%)`
                    }
                })]
            }), v.jsxs("div", {
                className: "flex items-center justify-center gap-3 sm:gap-4",
                children: [v.jsx(A.button, {
                    whileTap: {
                        scale: .9
                    },
                    onClick: h,
                    disabled: c,
                    className: "w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border-2 border-[#F47E9C] text-[#F47E9C] text-base shadow-sm hover:bg-[#F47E9C] hover:text-white transition-all",
                    children: "⏮"
                }), v.jsx(A.button, {
                    whileTap: {
                        scale: .9
                    },
                    onClick: E,
                    disabled: c,
                    className: "w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#F47E9C] to-[#F7B5CF] text-white text-xl shadow-md hover:shadow-lg transition-all",
                    children: c ? "⟳" : i ? "⏸" : "▶"
                }), v.jsx(A.button, {
                    whileTap: {
                        scale: .9
                    },
                    onClick: p,
                    disabled: c,
                    className: "w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border-2 border-[#F47E9C] text-[#F47E9C] text-base shadow-sm hover:bg-[#F47E9C] hover:text-white transition-all",
                    children: "⏭"
                })]
            }), v.jsx("audio", {
                ref: g,
                preload: "metadata",
                children: v.jsx("source", {
                    src: x.file,
                    type: "audio/mpeg"
                })
            })]
        }), e && v.jsx(A.button, {
            onClick: e,
            whileTap: {
                scale: .95
            },
            className: "absolute bottom-3 left-3 text-gray-700 bg-[#E0ECFA] px-5 py-2 rounded-full text-sm shadow-md hover:bg-[#C6DBF3] transition-all z-20",
            style: {
                fontFamily: "Montserrat, sans-serif"
            },
            children: "← Back"
        }), t && v.jsx(A.button, {
            onClick: t,
            whileTap: {
                scale: .95
            },
            className: "absolute bottom-3 right-3 text-gray-700 bg-[#FDE2E4] px-5 py-2 rounded-full text-sm shadow-md hover:bg-[#F7B5CF] transition-all z-20",
            style: {
                fontFamily: "Montserrat, sans-serif"
            },
            children: "Next →"
        }), v.jsx("style", {
            children: `
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #F47E9C;
          border: 2px solid white;
          cursor: pointer;
        }
        input[type="range"]::-moz-range-thumb {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #F47E9C;
          border: 2px solid white;
          cursor: pointer;
        }
      `
        })]
    })
}
const eS = "/assets/thankyou-D28uzcpK.gif";
function tS({onBack: e}) {
    return v.jsxs("div", {
        className: "relative w-full h-[100dvh] flex items-center justify-center bg-transparent overflow-hidden",
        children: [v.jsx("div", {
            className: "absolute inset-0 overflow-hidden pointer-events-none",
            children: [...Array(10)].map( (t, n) => v.jsx(A.div, {
                className: "absolute text-[#F7B5CF] opacity-30",
                initial: {
                    y: "100vh",
                    x: Math.random() * window.innerWidth
                },
                animate: {
                    y: [-150, -400, -600],
                    x: `calc(${Math.random() * 100}vw - 40px)`,
                    opacity: [.3, .6, 0]
                },
                transition: {
                    duration: 8 + Math.random() * 3,
                    delay: Math.random() * 2,
                    repeat: 1 / 0,
                    ease: "easeInOut"
                },
                style: {
                    fontSize: `${Math.random() * 16 + 14}px`
                },
                children: "✦"
            }, n))
        }), v.jsxs(A.div, {
            initial: {
                opacity: 0,
                scale: .96
            },
            animate: {
                opacity: 1,
                scale: 1
            },
            transition: {
                duration: .8
            },
            className: "relative w-full max-w-[620px] max-h-[82dvh] bg-[#FFF9FB] rounded-2xl shadow-xl border border-[#f3dbe1] px-6 sm:px-8 py-8 sm:py-10 flex flex-col justify-between items-center text-center backdrop-blur-sm overflow-hidden",
            style: {
                fontFamily: "'Playfair Display', serif"
            },
            children: [v.jsx("div", {
                className: "text-xs sm:text-sm text-[#444] uppercase tracking-wider mb-3 font-medium",
                children: "✦ from your bhai, with love ✦"
            }), v.jsxs("div", {
                className: "flex-1 flex flex-col items-center justify-center px-2",
                children: [v.jsx(A.h1, {
                    className: "text-[#F47E9C] text-[clamp(2.2rem,8vw,4.5rem)] italic font-semibold leading-none mb-2",
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        delay: .2
                    },
                    children: "Thank You"
                }), v.jsx(A.h2, {
                    className: "text-[#2c2c2c] text-[clamp(1.3rem,4vw,2.2rem)] font-extrabold uppercase tracking-tight mb-3",
                    style: {
                        fontFamily: "'Montserrat', sans-serif"
                    },
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        delay: .3
                    },
                    children: "for always being there💖"
                }), v.jsx(A.p, {
                    className: "text-[#4b4b4b] text-[clamp(0.9rem,1.5vw,1.05rem)] leading-relaxed max-w-[440px]",
                    style: {
                        fontFamily: "'Montserrat', sans-serif"
                    },
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        delay: .5
                    },
                    children: "You make every small thing brighter and happier. I’m lucky to have you — thanks for being the sweetest part of my days. 🍫✨"
                })]
            }), v.jsx(A.img, {
                src: eS,
                alt: "Hello Kitty",
                className: "absolute right-3 bottom-3 sm:right-5 sm:bottom-4 w-[110px] sm:w-[150px] md:w-[190px] select-none drop-shadow-lg",
                initial: {
                    opacity: 0,
                    scale: .9,
                    y: 40
                },
                animate: {
                    opacity: 1,
                    scale: 1,
                    y: 0
                },
                transition: {
                    delay: .7
                }
            }), v.jsx("div", {
                className: "text-center text-xs sm:text-sm mt-4 text-[#2c2c2c]",
                children: v.jsx(A.p, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        delay: 1
                    },
                    style: {
                        fontFamily: "'Dancing Script', cursive"
                    },
                    children: "made with 💗, chocolates & sparkles — always your bhai ✨"
                })
            })]
        }), e && v.jsx(A.button, {
            onClick: e,
            whileTap: {
                scale: .95
            },
            initial: {
                opacity: 0,
                y: 20
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                delay: 1
            },
            className: "absolute bottom-3 left-3 text-gray-700 bg-[#E0ECFA] px-5 py-2 rounded-full text-sm shadow-md hover:bg-[#C6DBF3] transition-all",
            style: {
                fontFamily: "Montserrat, system-ui, sans-serif"
            },
            children: "← Back"
        })]
    })
}
const nS = "WhatsApp Image 2025-10-23 at 8.58.52 AM.jpeg"
  , rS = "alo.jpg"
  , iS = "WhatsApp Image 2025-10-23 at 9.00.20 AM.jpeg";
function sS() {
    const [e,t] = M.useState(0)
      , n = [nS, rS, iS]
      , r = ["Best Sister Ever 💖", "Hahaaaaaaa 😄", "Hehe"]
      , i = {
        initial: {
            opacity: 0,
            x: 80
        },
        animate: {
            opacity: 1,
            x: 0
        },
        exit: {
            opacity: 0,
            x: -80
        }
    };
    return v.jsx("div", {
        className: "min-h-screen w-full flex justify-center items-center overflow-hidden",
        style: {
            backgroundColor: "#FFF9F5",
            transition: "background-color 0.4s ease"
        },
        children: v.jsxs(Ss, {
            mode: "wait",
            children: [e === 0 && v.jsx(A.div, {
                variants: i,
                initial: "initial",
                animate: "animate",
                exit: "exit",
                transition: {
                    duration: .7,
                    ease: "easeInOut"
                },
                className: "w-full h-full",
                children: v.jsx(Uw, {
                    onNext: () => t(1)
                })
            }, "cover"), e === 1 && v.jsx(A.div, {
                variants: i,
                initial: "initial",
                animate: "animate",
                exit: "exit",
                transition: {
                    duration: .7,
                    ease: "easeInOut"
                },
                className: "w-full h-full",
                children: v.jsx($w, {
                    onBack: () => t(0),
                    onNext: () => t(2)
                })
            }, "tictac"), e === 2 && v.jsx(A.div, {
                variants: i,
                initial: "initial",
                animate: "animate",
                exit: "exit",
                transition: {
                    duration: .7,
                    ease: "easeInOut"
                },
                className: "w-full h-full",
                children: v.jsx(Kw, {
                    onBack: () => t(1),
                    onNext: () => t(3)
                })
            }, "letter"), e === 3 && v.jsx(A.div, {
                variants: i,
                initial: "initial",
                animate: "animate",
                exit: "exit",
                transition: {
                    duration: .7,
                    ease: "easeInOut"
                },
                className: "w-full h-full",
                children: v.jsx(bw, {
                    title: "Our Precious Memories 📸",
                    photos: n,
                    captions: r,
                    onBack: () => t(2),
                    onNext: () => t(4)
                })
            }, "gallery"), e === 4 && v.jsx(A.div, {
                variants: i,
                initial: "initial",
                animate: "animate",
                exit: "exit",
                transition: {
                    duration: .7,
                    ease: "easeInOut"
                },
                className: "w-full h-full",
                children: v.jsx(qw, {
                    onBack: () => t(3),
                    onNext: () => t(5)
                })
            }, "playlist"), e === 5 && v.jsx(A.div, {
                variants: i,
                initial: "initial",
                animate: "animate",
                exit: "exit",
                transition: {
                    duration: .7,
                    ease: "easeInOut"
                },
                className: "w-full h-full",
                children: v.jsx(tS, {
                    onBack: () => t(4)
                })
            }, "thankyou")]
        })
    })
}
np(document.getElementById("root")).render(v.jsx(M.StrictMode, {
    children: v.jsx(sS, {})
}));
