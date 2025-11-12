(function() {
    const b = document.createElement("link").relList;
    if (b && b.supports && b.supports("modulepreload"))
        return;
    for (const S of document.querySelectorAll('link[rel="modulepreload"]'))
        f(S);
    new MutationObserver(S => {
        for (const _ of S)
            if (_.type === "childList")
                for (const j of _.addedNodes)
                    j.tagName === "LINK" && j.rel === "modulepreload" && f(j)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function A(S) {
        const _ = {};
        return S.integrity && (_.integrity = S.integrity),
        S.referrerPolicy && (_.referrerPolicy = S.referrerPolicy),
        S.crossOrigin === "use-credentials" ? _.credentials = "include" : S.crossOrigin === "anonymous" ? _.credentials = "omit" : _.credentials = "same-origin",
        _
    }
    function f(S) {
        if (S.ep)
            return;
        S.ep = !0;
        const _ = A(S);
        fetch(S.href, _)
    }
}
)();
function Yd(r) {
    return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r
}
var fs = {
    exports: {}
}
  , Tn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nd;
function ym() {
    if (Nd)
        return Tn;
    Nd = 1;
    var r = Symbol.for("react.transitional.element")
      , b = Symbol.for("react.fragment");
    function A(f, S, _) {
        var j = null;
        if (_ !== void 0 && (j = "" + _),
        S.key !== void 0 && (j = "" + S.key),
        "key"in S) {
            _ = {};
            for (var M in S)
                M !== "key" && (_[M] = S[M])
        } else
            _ = S;
        return S = _.ref,
        {
            $$typeof: r,
            type: f,
            key: j,
            ref: S !== void 0 ? S : null,
            props: _
        }
    }
    return Tn.Fragment = b,
    Tn.jsx = A,
    Tn.jsxs = A,
    Tn
}
var Ad;
function pm() {
    return Ad || (Ad = 1,
    fs.exports = ym()),
    fs.exports
}
var c = pm()
  , rs = {
    exports: {}
}
  , Z = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jd;
function gm() {
    if (jd)
        return Z;
    jd = 1;
    var r = Symbol.for("react.transitional.element")
      , b = Symbol.for("react.portal")
      , A = Symbol.for("react.fragment")
      , f = Symbol.for("react.strict_mode")
      , S = Symbol.for("react.profiler")
      , _ = Symbol.for("react.consumer")
      , j = Symbol.for("react.context")
      , M = Symbol.for("react.forward_ref")
      , z = Symbol.for("react.suspense")
      , y = Symbol.for("react.memo")
      , B = Symbol.for("react.lazy")
      , w = Symbol.for("react.activity")
      , V = Symbol.iterator;
    function he(d) {
        return d === null || typeof d != "object" ? null : (d = V && d[V] || d["@@iterator"],
        typeof d == "function" ? d : null)
    }
    var P = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , pe = Object.assign
      , se = {};
    function K(d, O, R) {
        this.props = d,
        this.context = O,
        this.refs = se,
        this.updater = R || P
    }
    K.prototype.isReactComponent = {},
    K.prototype.setState = function(d, O) {
        if (typeof d != "object" && typeof d != "function" && d != null)
            throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, d, O, "setState")
    }
    ,
    K.prototype.forceUpdate = function(d) {
        this.updater.enqueueForceUpdate(this, d, "forceUpdate")
    }
    ;
    function Ee() {}
    Ee.prototype = K.prototype;
    function J(d, O, R) {
        this.props = d,
        this.context = O,
        this.refs = se,
        this.updater = R || P
    }
    var Oe = J.prototype = new Ee;
    Oe.constructor = J,
    pe(Oe, K.prototype),
    Oe.isPureReactComponent = !0;
    var ee = Array.isArray;
    function F() {}
    var L = {
        H: null,
        A: null,
        T: null,
        S: null
    }
      , Te = Object.prototype.hasOwnProperty;
    function Ne(d, O, R) {
        var q = R.ref;
        return {
            $$typeof: r,
            type: d,
            key: O,
            ref: q !== void 0 ? q : null,
            props: R
        }
    }
    function xe(d, O) {
        return Ne(d.type, O, d.props)
    }
    function He(d) {
        return typeof d == "object" && d !== null && d.$$typeof === r
    }
    function ze(d) {
        var O = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + d.replace(/[=:]/g, function(R) {
            return O[R]
        })
    }
    var gt = /\/+/g;
    function Pe(d, O) {
        return typeof d == "object" && d !== null && d.key != null ? ze("" + d.key) : O.toString(36)
    }
    function ke(d) {
        switch (d.status) {
        case "fulfilled":
            return d.value;
        case "rejected":
            throw d.reason;
        default:
            switch (typeof d.status == "string" ? d.then(F, F) : (d.status = "pending",
            d.then(function(O) {
                d.status === "pending" && (d.status = "fulfilled",
                d.value = O)
            }, function(O) {
                d.status === "pending" && (d.status = "rejected",
                d.reason = O)
            })),
            d.status) {
            case "fulfilled":
                return d.value;
            case "rejected":
                throw d.reason
            }
        }
        throw d
    }
    function T(d, O, R, q, k) {
        var le = typeof d;
        (le === "undefined" || le === "boolean") && (d = null);
        var de = !1;
        if (d === null)
            de = !0;
        else
            switch (le) {
            case "bigint":
            case "string":
            case "number":
                de = !0;
                break;
            case "object":
                switch (d.$$typeof) {
                case r:
                case b:
                    de = !0;
                    break;
                case B:
                    return de = d._init,
                    T(de(d._payload), O, R, q, k)
                }
            }
        if (de)
            return k = k(d),
            de = q === "" ? "." + Pe(d, 0) : q,
            ee(k) ? (R = "",
            de != null && (R = de.replace(gt, "$&/") + "/"),
            T(k, O, R, "", function(Ca) {
                return Ca
            })) : k != null && (He(k) && (k = xe(k, R + (k.key == null || d && d.key === k.key ? "" : ("" + k.key).replace(gt, "$&/") + "/") + de)),
            O.push(k)),
            1;
        de = 0;
        var We = q === "" ? "." : q + ":";
        if (ee(d))
            for (var we = 0; we < d.length; we++)
                q = d[we],
                le = We + Pe(q, we),
                de += T(q, O, R, le, k);
        else if (we = he(d),
        typeof we == "function")
            for (d = we.call(d),
            we = 0; !(q = d.next()).done; )
                q = q.value,
                le = We + Pe(q, we++),
                de += T(q, O, R, le, k);
        else if (le === "object") {
            if (typeof d.then == "function")
                return T(ke(d), O, R, q, k);
            throw O = String(d),
            Error("Objects are not valid as a React child (found: " + (O === "[object Object]" ? "object with keys {" + Object.keys(d).join(", ") + "}" : O) + "). If you meant to render a collection of children, use an array instead.")
        }
        return de
    }
    function D(d, O, R) {
        if (d == null)
            return d;
        var q = []
          , k = 0;
        return T(d, q, "", "", function(le) {
            return O.call(R, le, k++)
        }),
        q
    }
    function H(d) {
        if (d._status === -1) {
            var O = d._result;
            O = O(),
            O.then(function(R) {
                (d._status === 0 || d._status === -1) && (d._status = 1,
                d._result = R)
            }, function(R) {
                (d._status === 0 || d._status === -1) && (d._status = 2,
                d._result = R)
            }),
            d._status === -1 && (d._status = 0,
            d._result = O)
        }
        if (d._status === 1)
            return d._result.default;
        throw d._result
    }
    var I = typeof reportError == "function" ? reportError : function(d) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var O = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof d == "object" && d !== null && typeof d.message == "string" ? String(d.message) : String(d),
                error: d
            });
            if (!window.dispatchEvent(O))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", d);
            return
        }
        console.error(d)
    }
      , te = {
        map: D,
        forEach: function(d, O, R) {
            D(d, function() {
                O.apply(this, arguments)
            }, R)
        },
        count: function(d) {
            var O = 0;
            return D(d, function() {
                O++
            }),
            O
        },
        toArray: function(d) {
            return D(d, function(O) {
                return O
            }) || []
        },
        only: function(d) {
            if (!He(d))
                throw Error("React.Children.only expected to receive a single React element child.");
            return d
        }
    };
    return Z.Activity = w,
    Z.Children = te,
    Z.Component = K,
    Z.Fragment = A,
    Z.Profiler = S,
    Z.PureComponent = J,
    Z.StrictMode = f,
    Z.Suspense = z,
    Z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = L,
    Z.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(d) {
            return L.H.useMemoCache(d)
        }
    },
    Z.cache = function(d) {
        return function() {
            return d.apply(null, arguments)
        }
    }
    ,
    Z.cacheSignal = function() {
        return null
    }
    ,
    Z.cloneElement = function(d, O, R) {
        if (d == null)
            throw Error("The argument must be a React element, but you passed " + d + ".");
        var q = pe({}, d.props)
          , k = d.key;
        if (O != null)
            for (le in O.key !== void 0 && (k = "" + O.key),
            O)
                !Te.call(O, le) || le === "key" || le === "__self" || le === "__source" || le === "ref" && O.ref === void 0 || (q[le] = O[le]);
        var le = arguments.length - 2;
        if (le === 1)
            q.children = R;
        else if (1 < le) {
            for (var de = Array(le), We = 0; We < le; We++)
                de[We] = arguments[We + 2];
            q.children = de
        }
        return Ne(d.type, k, q)
    }
    ,
    Z.createContext = function(d) {
        return d = {
            $$typeof: j,
            _currentValue: d,
            _currentValue2: d,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        },
        d.Provider = d,
        d.Consumer = {
            $$typeof: _,
            _context: d
        },
        d
    }
    ,
    Z.createElement = function(d, O, R) {
        var q, k = {}, le = null;
        if (O != null)
            for (q in O.key !== void 0 && (le = "" + O.key),
            O)
                Te.call(O, q) && q !== "key" && q !== "__self" && q !== "__source" && (k[q] = O[q]);
        var de = arguments.length - 2;
        if (de === 1)
            k.children = R;
        else if (1 < de) {
            for (var We = Array(de), we = 0; we < de; we++)
                We[we] = arguments[we + 2];
            k.children = We
        }
        if (d && d.defaultProps)
            for (q in de = d.defaultProps,
            de)
                k[q] === void 0 && (k[q] = de[q]);
        return Ne(d, le, k)
    }
    ,
    Z.createRef = function() {
        return {
            current: null
        }
    }
    ,
    Z.forwardRef = function(d) {
        return {
            $$typeof: M,
            render: d
        }
    }
    ,
    Z.isValidElement = He,
    Z.lazy = function(d) {
        return {
            $$typeof: B,
            _payload: {
                _status: -1,
                _result: d
            },
            _init: H
        }
    }
    ,
    Z.memo = function(d, O) {
        return {
            $$typeof: y,
            type: d,
            compare: O === void 0 ? null : O
        }
    }
    ,
    Z.startTransition = function(d) {
        var O = L.T
          , R = {};
        L.T = R;
        try {
            var q = d()
              , k = L.S;
            k !== null && k(R, q),
            typeof q == "object" && q !== null && typeof q.then == "function" && q.then(F, I)
        } catch (le) {
            I(le)
        } finally {
            O !== null && R.types !== null && (O.types = R.types),
            L.T = O
        }
    }
    ,
    Z.unstable_useCacheRefresh = function() {
        return L.H.useCacheRefresh()
    }
    ,
    Z.use = function(d) {
        return L.H.use(d)
    }
    ,
    Z.useActionState = function(d, O, R) {
        return L.H.useActionState(d, O, R)
    }
    ,
    Z.useCallback = function(d, O) {
        return L.H.useCallback(d, O)
    }
    ,
    Z.useContext = function(d) {
        return L.H.useContext(d)
    }
    ,
    Z.useDebugValue = function() {}
    ,
    Z.useDeferredValue = function(d, O) {
        return L.H.useDeferredValue(d, O)
    }
    ,
    Z.useEffect = function(d, O) {
        return L.H.useEffect(d, O)
    }
    ,
    Z.useEffectEvent = function(d) {
        return L.H.useEffectEvent(d)
    }
    ,
    Z.useId = function() {
        return L.H.useId()
    }
    ,
    Z.useImperativeHandle = function(d, O, R) {
        return L.H.useImperativeHandle(d, O, R)
    }
    ,
    Z.useInsertionEffect = function(d, O) {
        return L.H.useInsertionEffect(d, O)
    }
    ,
    Z.useLayoutEffect = function(d, O) {
        return L.H.useLayoutEffect(d, O)
    }
    ,
    Z.useMemo = function(d, O) {
        return L.H.useMemo(d, O)
    }
    ,
    Z.useOptimistic = function(d, O) {
        return L.H.useOptimistic(d, O)
    }
    ,
    Z.useReducer = function(d, O, R) {
        return L.H.useReducer(d, O, R)
    }
    ,
    Z.useRef = function(d) {
        return L.H.useRef(d)
    }
    ,
    Z.useState = function(d) {
        return L.H.useState(d)
    }
    ,
    Z.useSyncExternalStore = function(d, O, R) {
        return L.H.useSyncExternalStore(d, O, R)
    }
    ,
    Z.useTransition = function() {
        return L.H.useTransition()
    }
    ,
    Z.version = "19.2.0",
    Z
}
var Ed;
function vs() {
    return Ed || (Ed = 1,
    rs.exports = gm()),
    rs.exports
}
var Q = vs();
const vm = Yd(Q);
var os = {
    exports: {}
}
  , Nn = {}
  , ds = {
    exports: {}
}
  , hs = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zd;
function bm() {
    return zd || (zd = 1,
    (function(r) {
        function b(T, D) {
            var H = T.length;
            T.push(D);
            e: for (; 0 < H; ) {
                var I = H - 1 >>> 1
                  , te = T[I];
                if (0 < S(te, D))
                    T[I] = D,
                    T[H] = te,
                    H = I;
                else
                    break e
            }
        }
        function A(T) {
            return T.length === 0 ? null : T[0]
        }
        function f(T) {
            if (T.length === 0)
                return null;
            var D = T[0]
              , H = T.pop();
            if (H !== D) {
                T[0] = H;
                e: for (var I = 0, te = T.length, d = te >>> 1; I < d; ) {
                    var O = 2 * (I + 1) - 1
                      , R = T[O]
                      , q = O + 1
                      , k = T[q];
                    if (0 > S(R, H))
                        q < te && 0 > S(k, R) ? (T[I] = k,
                        T[q] = H,
                        I = q) : (T[I] = R,
                        T[O] = H,
                        I = O);
                    else if (q < te && 0 > S(k, H))
                        T[I] = k,
                        T[q] = H,
                        I = q;
                    else
                        break e
                }
            }
            return D
        }
        function S(T, D) {
            var H = T.sortIndex - D.sortIndex;
            return H !== 0 ? H : T.id - D.id
        }
        if (r.unstable_now = void 0,
        typeof performance == "object" && typeof performance.now == "function") {
            var _ = performance;
            r.unstable_now = function() {
                return _.now()
            }
        } else {
            var j = Date
              , M = j.now();
            r.unstable_now = function() {
                return j.now() - M
            }
        }
        var z = []
          , y = []
          , B = 1
          , w = null
          , V = 3
          , he = !1
          , P = !1
          , pe = !1
          , se = !1
          , K = typeof setTimeout == "function" ? setTimeout : null
          , Ee = typeof clearTimeout == "function" ? clearTimeout : null
          , J = typeof setImmediate < "u" ? setImmediate : null;
        function Oe(T) {
            for (var D = A(y); D !== null; ) {
                if (D.callback === null)
                    f(y);
                else if (D.startTime <= T)
                    f(y),
                    D.sortIndex = D.expirationTime,
                    b(z, D);
                else
                    break;
                D = A(y)
            }
        }
        function ee(T) {
            if (pe = !1,
            Oe(T),
            !P)
                if (A(z) !== null)
                    P = !0,
                    F || (F = !0,
                    ze());
                else {
                    var D = A(y);
                    D !== null && ke(ee, D.startTime - T)
                }
        }
        var F = !1
          , L = -1
          , Te = 5
          , Ne = -1;
        function xe() {
            return se ? !0 : !(r.unstable_now() - Ne < Te)
        }
        function He() {
            if (se = !1,
            F) {
                var T = r.unstable_now();
                Ne = T;
                var D = !0;
                try {
                    e: {
                        P = !1,
                        pe && (pe = !1,
                        Ee(L),
                        L = -1),
                        he = !0;
                        var H = V;
                        try {
                            t: {
                                for (Oe(T),
                                w = A(z); w !== null && !(w.expirationTime > T && xe()); ) {
                                    var I = w.callback;
                                    if (typeof I == "function") {
                                        w.callback = null,
                                        V = w.priorityLevel;
                                        var te = I(w.expirationTime <= T);
                                        if (T = r.unstable_now(),
                                        typeof te == "function") {
                                            w.callback = te,
                                            Oe(T),
                                            D = !0;
                                            break t
                                        }
                                        w === A(z) && f(z),
                                        Oe(T)
                                    } else
                                        f(z);
                                    w = A(z)
                                }
                                if (w !== null)
                                    D = !0;
                                else {
                                    var d = A(y);
                                    d !== null && ke(ee, d.startTime - T),
                                    D = !1
                                }
                            }
                            break e
                        } finally {
                            w = null,
                            V = H,
                            he = !1
                        }
                        D = void 0
                    }
                } finally {
                    D ? ze() : F = !1
                }
            }
        }
        var ze;
        if (typeof J == "function")
            ze = function() {
                J(He)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var gt = new MessageChannel
              , Pe = gt.port2;
            gt.port1.onmessage = He,
            ze = function() {
                Pe.postMessage(null)
            }
        } else
            ze = function() {
                K(He, 0)
            }
            ;
        function ke(T, D) {
            L = K(function() {
                T(r.unstable_now())
            }, D)
        }
        r.unstable_IdlePriority = 5,
        r.unstable_ImmediatePriority = 1,
        r.unstable_LowPriority = 4,
        r.unstable_NormalPriority = 3,
        r.unstable_Profiling = null,
        r.unstable_UserBlockingPriority = 2,
        r.unstable_cancelCallback = function(T) {
            T.callback = null
        }
        ,
        r.unstable_forceFrameRate = function(T) {
            0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Te = 0 < T ? Math.floor(1e3 / T) : 5
        }
        ,
        r.unstable_getCurrentPriorityLevel = function() {
            return V
        }
        ,
        r.unstable_next = function(T) {
            switch (V) {
            case 1:
            case 2:
            case 3:
                var D = 3;
                break;
            default:
                D = V
            }
            var H = V;
            V = D;
            try {
                return T()
            } finally {
                V = H
            }
        }
        ,
        r.unstable_requestPaint = function() {
            se = !0
        }
        ,
        r.unstable_runWithPriority = function(T, D) {
            switch (T) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                T = 3
            }
            var H = V;
            V = T;
            try {
                return D()
            } finally {
                V = H
            }
        }
        ,
        r.unstable_scheduleCallback = function(T, D, H) {
            var I = r.unstable_now();
            switch (typeof H == "object" && H !== null ? (H = H.delay,
            H = typeof H == "number" && 0 < H ? I + H : I) : H = I,
            T) {
            case 1:
                var te = -1;
                break;
            case 2:
                te = 250;
                break;
            case 5:
                te = 1073741823;
                break;
            case 4:
                te = 1e4;
                break;
            default:
                te = 5e3
            }
            return te = H + te,
            T = {
                id: B++,
                callback: D,
                priorityLevel: T,
                startTime: H,
                expirationTime: te,
                sortIndex: -1
            },
            H > I ? (T.sortIndex = H,
            b(y, T),
            A(z) === null && T === A(y) && (pe ? (Ee(L),
            L = -1) : pe = !0,
            ke(ee, H - I))) : (T.sortIndex = te,
            b(z, T),
            P || he || (P = !0,
            F || (F = !0,
            ze()))),
            T
        }
        ,
        r.unstable_shouldYield = xe,
        r.unstable_wrapCallback = function(T) {
            var D = V;
            return function() {
                var H = V;
                V = D;
                try {
                    return T.apply(this, arguments)
                } finally {
                    V = H
                }
            }
        }
    }
    )(hs)),
    hs
}
var Cd;
function xm() {
    return Cd || (Cd = 1,
    ds.exports = bm()),
    ds.exports
}
var ms = {
    exports: {}
}
  , $e = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Od;
function Sm() {
    if (Od)
        return $e;
    Od = 1;
    var r = vs();
    function b(z) {
        var y = "https://react.dev/errors/" + z;
        if (1 < arguments.length) {
            y += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var B = 2; B < arguments.length; B++)
                y += "&args[]=" + encodeURIComponent(arguments[B])
        }
        return "Minified React error #" + z + "; visit " + y + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function A() {}
    var f = {
        d: {
            f: A,
            r: function() {
                throw Error(b(522))
            },
            D: A,
            C: A,
            L: A,
            m: A,
            X: A,
            S: A,
            M: A
        },
        p: 0,
        findDOMNode: null
    }
      , S = Symbol.for("react.portal");
    function _(z, y, B) {
        var w = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: S,
            key: w == null ? null : "" + w,
            children: z,
            containerInfo: y,
            implementation: B
        }
    }
    var j = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function M(z, y) {
        if (z === "font")
            return "";
        if (typeof y == "string")
            return y === "use-credentials" ? y : ""
    }
    return $e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f,
    $e.createPortal = function(z, y) {
        var B = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!y || y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11)
            throw Error(b(299));
        return _(z, y, null, B)
    }
    ,
    $e.flushSync = function(z) {
        var y = j.T
          , B = f.p;
        try {
            if (j.T = null,
            f.p = 2,
            z)
                return z()
        } finally {
            j.T = y,
            f.p = B,
            f.d.f()
        }
    }
    ,
    $e.preconnect = function(z, y) {
        typeof z == "string" && (y ? (y = y.crossOrigin,
        y = typeof y == "string" ? y === "use-credentials" ? y : "" : void 0) : y = null,
        f.d.C(z, y))
    }
    ,
    $e.prefetchDNS = function(z) {
        typeof z == "string" && f.d.D(z)
    }
    ,
    $e.preinit = function(z, y) {
        if (typeof z == "string" && y && typeof y.as == "string") {
            var B = y.as
              , w = M(B, y.crossOrigin)
              , V = typeof y.integrity == "string" ? y.integrity : void 0
              , he = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
            B === "style" ? f.d.S(z, typeof y.precedence == "string" ? y.precedence : void 0, {
                crossOrigin: w,
                integrity: V,
                fetchPriority: he
            }) : B === "script" && f.d.X(z, {
                crossOrigin: w,
                integrity: V,
                fetchPriority: he,
                nonce: typeof y.nonce == "string" ? y.nonce : void 0
            })
        }
    }
    ,
    $e.preinitModule = function(z, y) {
        if (typeof z == "string")
            if (typeof y == "object" && y !== null) {
                if (y.as == null || y.as === "script") {
                    var B = M(y.as, y.crossOrigin);
                    f.d.M(z, {
                        crossOrigin: B,
                        integrity: typeof y.integrity == "string" ? y.integrity : void 0,
                        nonce: typeof y.nonce == "string" ? y.nonce : void 0
                    })
                }
            } else
                y == null && f.d.M(z)
    }
    ,
    $e.preload = function(z, y) {
        if (typeof z == "string" && typeof y == "object" && y !== null && typeof y.as == "string") {
            var B = y.as
              , w = M(B, y.crossOrigin);
            f.d.L(z, B, {
                crossOrigin: w,
                integrity: typeof y.integrity == "string" ? y.integrity : void 0,
                nonce: typeof y.nonce == "string" ? y.nonce : void 0,
                type: typeof y.type == "string" ? y.type : void 0,
                fetchPriority: typeof y.fetchPriority == "string" ? y.fetchPriority : void 0,
                referrerPolicy: typeof y.referrerPolicy == "string" ? y.referrerPolicy : void 0,
                imageSrcSet: typeof y.imageSrcSet == "string" ? y.imageSrcSet : void 0,
                imageSizes: typeof y.imageSizes == "string" ? y.imageSizes : void 0,
                media: typeof y.media == "string" ? y.media : void 0
            })
        }
    }
    ,
    $e.preloadModule = function(z, y) {
        if (typeof z == "string")
            if (y) {
                var B = M(y.as, y.crossOrigin);
                f.d.m(z, {
                    as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
                    crossOrigin: B,
                    integrity: typeof y.integrity == "string" ? y.integrity : void 0
                })
            } else
                f.d.m(z)
    }
    ,
    $e.requestFormReset = function(z) {
        f.d.r(z)
    }
    ,
    $e.unstable_batchedUpdates = function(z, y) {
        return z(y)
    }
    ,
    $e.useFormState = function(z, y, B) {
        return j.H.useFormState(z, y, B)
    }
    ,
    $e.useFormStatus = function() {
        return j.H.useHostTransitionStatus()
    }
    ,
    $e.version = "19.2.0",
    $e
}
var Md;
function Tm() {
    if (Md)
        return ms.exports;
    Md = 1;
    function r() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)
            } catch (b) {
                console.error(b)
            }
    }
    return r(),
    ms.exports = Sm(),
    ms.exports
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _d;
function Nm() {
    if (_d)
        return Nn;
    _d = 1;
    var r = xm()
      , b = vs()
      , A = Tm();
    function f(e) {
        var t = "https://react.dev/errors/" + e;
        if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var l = 2; l < arguments.length; l++)
                t += "&args[]=" + encodeURIComponent(arguments[l])
        }
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function S(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    }
    function _(e) {
        var t = e
          , l = e;
        if (e.alternate)
            for (; t.return; )
                t = t.return;
        else {
            e = t;
            do
                t = e,
                (t.flags & 4098) !== 0 && (l = t.return),
                e = t.return;
            while (e)
        }
        return t.tag === 3 ? l : null
    }
    function j(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate,
            e !== null && (t = e.memoizedState)),
            t !== null)
                return t.dehydrated
        }
        return null
    }
    function M(e) {
        if (e.tag === 31) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate,
            e !== null && (t = e.memoizedState)),
            t !== null)
                return t.dehydrated
        }
        return null
    }
    function z(e) {
        if (_(e) !== e)
            throw Error(f(188))
    }
    function y(e) {
        var t = e.alternate;
        if (!t) {
            if (t = _(e),
            t === null)
                throw Error(f(188));
            return t !== e ? null : e
        }
        for (var l = e, a = t; ; ) {
            var n = l.return;
            if (n === null)
                break;
            var u = n.alternate;
            if (u === null) {
                if (a = n.return,
                a !== null) {
                    l = a;
                    continue
                }
                break
            }
            if (n.child === u.child) {
                for (u = n.child; u; ) {
                    if (u === l)
                        return z(n),
                        e;
                    if (u === a)
                        return z(n),
                        t;
                    u = u.sibling
                }
                throw Error(f(188))
            }
            if (l.return !== a.return)
                l = n,
                a = u;
            else {
                for (var i = !1, s = n.child; s; ) {
                    if (s === l) {
                        i = !0,
                        l = n,
                        a = u;
                        break
                    }
                    if (s === a) {
                        i = !0,
                        a = n,
                        l = u;
                        break
                    }
                    s = s.sibling
                }
                if (!i) {
                    for (s = u.child; s; ) {
                        if (s === l) {
                            i = !0,
                            l = u,
                            a = n;
                            break
                        }
                        if (s === a) {
                            i = !0,
                            a = u,
                            l = n;
                            break
                        }
                        s = s.sibling
                    }
                    if (!i)
                        throw Error(f(189))
                }
            }
            if (l.alternate !== a)
                throw Error(f(190))
        }
        if (l.tag !== 3)
            throw Error(f(188));
        return l.stateNode.current === l ? e : t
    }
    function B(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return e;
        for (e = e.child; e !== null; ) {
            if (t = B(e),
            t !== null)
                return t;
            e = e.sibling
        }
        return null
    }
    var w = Object.assign
      , V = Symbol.for("react.element")
      , he = Symbol.for("react.transitional.element")
      , P = Symbol.for("react.portal")
      , pe = Symbol.for("react.fragment")
      , se = Symbol.for("react.strict_mode")
      , K = Symbol.for("react.profiler")
      , Ee = Symbol.for("react.consumer")
      , J = Symbol.for("react.context")
      , Oe = Symbol.for("react.forward_ref")
      , ee = Symbol.for("react.suspense")
      , F = Symbol.for("react.suspense_list")
      , L = Symbol.for("react.memo")
      , Te = Symbol.for("react.lazy")
      , Ne = Symbol.for("react.activity")
      , xe = Symbol.for("react.memo_cache_sentinel")
      , He = Symbol.iterator;
    function ze(e) {
        return e === null || typeof e != "object" ? null : (e = He && e[He] || e["@@iterator"],
        typeof e == "function" ? e : null)
    }
    var gt = Symbol.for("react.client.reference");
    function Pe(e) {
        if (e == null)
            return null;
        if (typeof e == "function")
            return e.$$typeof === gt ? null : e.displayName || e.name || null;
        if (typeof e == "string")
            return e;
        switch (e) {
        case pe:
            return "Fragment";
        case K:
            return "Profiler";
        case se:
            return "StrictMode";
        case ee:
            return "Suspense";
        case F:
            return "SuspenseList";
        case Ne:
            return "Activity"
        }
        if (typeof e == "object")
            switch (e.$$typeof) {
            case P:
                return "Portal";
            case J:
                return e.displayName || "Context";
            case Ee:
                return (e._context.displayName || "Context") + ".Consumer";
            case Oe:
                var t = e.render;
                return e = e.displayName,
                e || (e = t.displayName || t.name || "",
                e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
                e;
            case L:
                return t = e.displayName || null,
                t !== null ? t : Pe(e.type) || "Memo";
            case Te:
                t = e._payload,
                e = e._init;
                try {
                    return Pe(e(t))
                } catch {}
            }
        return null
    }
    var ke = Array.isArray
      , T = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , D = A.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , H = {
        pending: !1,
        data: null,
        method: null,
        action: null
    }
      , I = []
      , te = -1;
    function d(e) {
        return {
            current: e
        }
    }
    function O(e) {
        0 > te || (e.current = I[te],
        I[te] = null,
        te--)
    }
    function R(e, t) {
        te++,
        I[te] = e.current,
        e.current = t
    }
    var q = d(null)
      , k = d(null)
      , le = d(null)
      , de = d(null);
    function We(e, t) {
        switch (R(le, t),
        R(k, e),
        R(q, null),
        t.nodeType) {
        case 9:
        case 11:
            e = (e = t.documentElement) && (e = e.namespaceURI) ? Ko(e) : 0;
            break;
        default:
            if (e = t.tagName,
            t = t.namespaceURI)
                t = Ko(t),
                e = Jo(t, e);
            else
                switch (e) {
                case "svg":
                    e = 1;
                    break;
                case "math":
                    e = 2;
                    break;
                default:
                    e = 0
                }
        }
        O(q),
        R(q, e)
    }
    function we() {
        O(q),
        O(k),
        O(le)
    }
    function Ca(e) {
        e.memoizedState !== null && R(de, e);
        var t = q.current
          , l = Jo(t, e.type);
        t !== l && (R(k, e),
        R(q, l))
    }
    function An(e) {
        k.current === e && (O(q),
        O(k)),
        de.current === e && (O(de),
        vn._currentValue = H)
    }
    var Zu, xs;
    function jl(e) {
        if (Zu === void 0)
            try {
                throw Error()
            } catch (l) {
                var t = l.stack.trim().match(/\n( *(at )?)/);
                Zu = t && t[1] || "",
                xs = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : ""
            }
        return `
` + Zu + e + xs
    }
    var Ku = !1;
    function Ju(e, t) {
        if (!e || Ku)
            return "";
        Ku = !0;
        var l = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var a = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (t) {
                            var C = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(C.prototype, "props", {
                                set: function() {
                                    throw Error()
                                }
                            }),
                            typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(C, [])
                                } catch (x) {
                                    var v = x
                                }
                                Reflect.construct(e, [], C)
                            } else {
                                try {
                                    C.call()
                                } catch (x) {
                                    v = x
                                }
                                e.call(C.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (x) {
                                v = x
                            }
                            (C = e()) && typeof C.catch == "function" && C.catch(function() {})
                        }
                    } catch (x) {
                        if (x && v && typeof x.stack == "string")
                            return [x.stack, v.stack]
                    }
                    return [null, null]
                }
            };
            a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var n = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
            n && n.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var u = a.DetermineComponentFrameRoot()
              , i = u[0]
              , s = u[1];
            if (i && s) {
                var o = i.split(`
`)
                  , g = s.split(`
`);
                for (n = a = 0; a < o.length && !o[a].includes("DetermineComponentFrameRoot"); )
                    a++;
                for (; n < g.length && !g[n].includes("DetermineComponentFrameRoot"); )
                    n++;
                if (a === o.length || n === g.length)
                    for (a = o.length - 1,
                    n = g.length - 1; 1 <= a && 0 <= n && o[a] !== g[n]; )
                        n--;
                for (; 1 <= a && 0 <= n; a--,
                n--)
                    if (o[a] !== g[n]) {
                        if (a !== 1 || n !== 1)
                            do
                                if (a--,
                                n--,
                                0 > n || o[a] !== g[n]) {
                                    var N = `
` + o[a].replace(" at new ", " at ");
                                    return e.displayName && N.includes("<anonymous>") && (N = N.replace("<anonymous>", e.displayName)),
                                    N
                                }
                            while (1 <= a && 0 <= n);
                        break
                    }
            }
        } finally {
            Ku = !1,
            Error.prepareStackTrace = l
        }
        return (l = e ? e.displayName || e.name : "") ? jl(l) : ""
    }
    function Kd(e, t) {
        switch (e.tag) {
        case 26:
        case 27:
        case 5:
            return jl(e.type);
        case 16:
            return jl("Lazy");
        case 13:
            return e.child !== t && t !== null ? jl("Suspense Fallback") : jl("Suspense");
        case 19:
            return jl("SuspenseList");
        case 0:
        case 15:
            return Ju(e.type, !1);
        case 11:
            return Ju(e.type.render, !1);
        case 1:
            return Ju(e.type, !0);
        case 31:
            return jl("Activity");
        default:
            return ""
        }
    }
    function Ss(e) {
        try {
            var t = ""
              , l = null;
            do
                t += Kd(e, l),
                l = e,
                e = e.return;
            while (e);
            return t
        } catch (a) {
            return `
Error generating stack: ` + a.message + `
` + a.stack
        }
    }
    var ku = Object.prototype.hasOwnProperty
      , $u = r.unstable_scheduleCallback
      , Wu = r.unstable_cancelCallback
      , Jd = r.unstable_shouldYield
      , kd = r.unstable_requestPaint
      , ct = r.unstable_now
      , $d = r.unstable_getCurrentPriorityLevel
      , Ts = r.unstable_ImmediatePriority
      , Ns = r.unstable_UserBlockingPriority
      , jn = r.unstable_NormalPriority
      , Wd = r.unstable_LowPriority
      , As = r.unstable_IdlePriority
      , Fd = r.log
      , Id = r.unstable_setDisableYieldValue
      , Oa = null
      , st = null;
    function el(e) {
        if (typeof Fd == "function" && Id(e),
        st && typeof st.setStrictMode == "function")
            try {
                st.setStrictMode(Oa, e)
            } catch {}
    }
    var ft = Math.clz32 ? Math.clz32 : th
      , Pd = Math.log
      , eh = Math.LN2;
    function th(e) {
        return e >>>= 0,
        e === 0 ? 32 : 31 - (Pd(e) / eh | 0) | 0
    }
    var En = 256
      , zn = 262144
      , Cn = 4194304;
    function El(e) {
        var t = e & 42;
        if (t !== 0)
            return t;
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
            return 64;
        case 128:
            return 128;
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
            return e & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return e & 62914560;
        case 67108864:
            return 67108864;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 0;
        default:
            return e
        }
    }
    function On(e, t, l) {
        var a = e.pendingLanes;
        if (a === 0)
            return 0;
        var n = 0
          , u = e.suspendedLanes
          , i = e.pingedLanes;
        e = e.warmLanes;
        var s = a & 134217727;
        return s !== 0 ? (a = s & ~u,
        a !== 0 ? n = El(a) : (i &= s,
        i !== 0 ? n = El(i) : l || (l = s & ~e,
        l !== 0 && (n = El(l))))) : (s = a & ~u,
        s !== 0 ? n = El(s) : i !== 0 ? n = El(i) : l || (l = a & ~e,
        l !== 0 && (n = El(l)))),
        n === 0 ? 0 : t !== 0 && t !== n && (t & u) === 0 && (u = n & -n,
        l = t & -t,
        u >= l || u === 32 && (l & 4194048) !== 0) ? t : n
    }
    function Ma(e, t) {
        return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0
    }
    function lh(e, t) {
        switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
            return t + 250;
        case 16:
        case 32:
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
            return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function js() {
        var e = Cn;
        return Cn <<= 1,
        (Cn & 62914560) === 0 && (Cn = 4194304),
        e
    }
    function Fu(e) {
        for (var t = [], l = 0; 31 > l; l++)
            t.push(e);
        return t
    }
    function _a(e, t) {
        e.pendingLanes |= t,
        t !== 268435456 && (e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.warmLanes = 0)
    }
    function ah(e, t, l, a, n, u) {
        var i = e.pendingLanes;
        e.pendingLanes = l,
        e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.warmLanes = 0,
        e.expiredLanes &= l,
        e.entangledLanes &= l,
        e.errorRecoveryDisabledLanes &= l,
        e.shellSuspendCounter = 0;
        var s = e.entanglements
          , o = e.expirationTimes
          , g = e.hiddenUpdates;
        for (l = i & ~l; 0 < l; ) {
            var N = 31 - ft(l)
              , C = 1 << N;
            s[N] = 0,
            o[N] = -1;
            var v = g[N];
            if (v !== null)
                for (g[N] = null,
                N = 0; N < v.length; N++) {
                    var x = v[N];
                    x !== null && (x.lane &= -536870913)
                }
            l &= ~C
        }
        a !== 0 && Es(e, a, 0),
        u !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(i & ~t))
    }
    function Es(e, t, l) {
        e.pendingLanes |= t,
        e.suspendedLanes &= ~t;
        var a = 31 - ft(t);
        e.entangledLanes |= t,
        e.entanglements[a] = e.entanglements[a] | 1073741824 | l & 261930
    }
    function zs(e, t) {
        var l = e.entangledLanes |= t;
        for (e = e.entanglements; l; ) {
            var a = 31 - ft(l)
              , n = 1 << a;
            n & t | e[a] & t && (e[a] |= t),
            l &= ~n
        }
    }
    function Cs(e, t) {
        var l = t & -t;
        return l = (l & 42) !== 0 ? 1 : Iu(l),
        (l & (e.suspendedLanes | t)) !== 0 ? 0 : l
    }
    function Iu(e) {
        switch (e) {
        case 2:
            e = 1;
            break;
        case 8:
            e = 4;
            break;
        case 32:
            e = 16;
            break;
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
            e = 128;
            break;
        case 268435456:
            e = 134217728;
            break;
        default:
            e = 0
        }
        return e
    }
    function Pu(e) {
        return e &= -e,
        2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }
    function Os() {
        var e = D.p;
        return e !== 0 ? e : (e = window.event,
        e === void 0 ? 32 : pd(e.type))
    }
    function Ms(e, t) {
        var l = D.p;
        try {
            return D.p = e,
            t()
        } finally {
            D.p = l
        }
    }
    var tl = Math.random().toString(36).slice(2)
      , Ve = "__reactFiber$" + tl
      , et = "__reactProps$" + tl
      , Xl = "__reactContainer$" + tl
      , ei = "__reactEvents$" + tl
      , nh = "__reactListeners$" + tl
      , uh = "__reactHandles$" + tl
      , _s = "__reactResources$" + tl
      , wa = "__reactMarker$" + tl;
    function ti(e) {
        delete e[Ve],
        delete e[et],
        delete e[ei],
        delete e[nh],
        delete e[uh]
    }
    function Zl(e) {
        var t = e[Ve];
        if (t)
            return t;
        for (var l = e.parentNode; l; ) {
            if (t = l[Xl] || l[Ve]) {
                if (l = t.alternate,
                t.child !== null || l !== null && l.child !== null)
                    for (e = ed(e); e !== null; ) {
                        if (l = e[Ve])
                            return l;
                        e = ed(e)
                    }
                return t
            }
            e = l,
            l = e.parentNode
        }
        return null
    }
    function Kl(e) {
        if (e = e[Ve] || e[Xl]) {
            var t = e.tag;
            if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
                return e
        }
        return null
    }
    function Da(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return e.stateNode;
        throw Error(f(33))
    }
    function Jl(e) {
        var t = e[_s];
        return t || (t = e[_s] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }),
        t
    }
    function Qe(e) {
        e[wa] = !0
    }
    var ws = new Set
      , Ds = {};
    function zl(e, t) {
        kl(e, t),
        kl(e + "Capture", t)
    }
    function kl(e, t) {
        for (Ds[e] = t,
        e = 0; e < t.length; e++)
            ws.add(t[e])
    }
    var ih = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")
      , Rs = {}
      , Hs = {};
    function ch(e) {
        return ku.call(Hs, e) ? !0 : ku.call(Rs, e) ? !1 : ih.test(e) ? Hs[e] = !0 : (Rs[e] = !0,
        !1)
    }
    function Mn(e, t, l) {
        if (ch(t))
            if (l === null)
                e.removeAttribute(t);
            else {
                switch (typeof l) {
                case "undefined":
                case "function":
                case "symbol":
                    e.removeAttribute(t);
                    return;
                case "boolean":
                    var a = t.toLowerCase().slice(0, 5);
                    if (a !== "data-" && a !== "aria-") {
                        e.removeAttribute(t);
                        return
                    }
                }
                e.setAttribute(t, "" + l)
            }
    }
    function _n(e, t, l) {
        if (l === null)
            e.removeAttribute(t);
        else {
            switch (typeof l) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                e.removeAttribute(t);
                return
            }
            e.setAttribute(t, "" + l)
        }
    }
    function Ut(e, t, l, a) {
        if (a === null)
            e.removeAttribute(l);
        else {
            switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                e.removeAttribute(l);
                return
            }
            e.setAttributeNS(t, l, "" + a)
        }
    }
    function vt(e) {
        switch (typeof e) {
        case "bigint":
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
    function Us(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }
    function sh(e, t, l) {
        var a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
        if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
            var n = a.get
              , u = a.set;
            return Object.defineProperty(e, t, {
                configurable: !0,
                get: function() {
                    return n.call(this)
                },
                set: function(i) {
                    l = "" + i,
                    u.call(this, i)
                }
            }),
            Object.defineProperty(e, t, {
                enumerable: a.enumerable
            }),
            {
                getValue: function() {
                    return l
                },
                setValue: function(i) {
                    l = "" + i
                },
                stopTracking: function() {
                    e._valueTracker = null,
                    delete e[t]
                }
            }
        }
    }
    function li(e) {
        if (!e._valueTracker) {
            var t = Us(e) ? "checked" : "value";
            e._valueTracker = sh(e, t, "" + e[t])
        }
    }
    function qs(e) {
        if (!e)
            return !1;
        var t = e._valueTracker;
        if (!t)
            return !0;
        var l = t.getValue()
          , a = "";
        return e && (a = Us(e) ? e.checked ? "true" : "false" : e.value),
        e = a,
        e !== l ? (t.setValue(e),
        !0) : !1
    }
    function wn(e) {
        if (e = e || (typeof document < "u" ? document : void 0),
        typeof e > "u")
            return null;
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }
    var fh = /[\n"\\]/g;
    function bt(e) {
        return e.replace(fh, function(t) {
            return "\\" + t.charCodeAt(0).toString(16) + " "
        })
    }
    function ai(e, t, l, a, n, u, i, s) {
        e.name = "",
        i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? e.type = i : e.removeAttribute("type"),
        t != null ? i === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + vt(t)) : e.value !== "" + vt(t) && (e.value = "" + vt(t)) : i !== "submit" && i !== "reset" || e.removeAttribute("value"),
        t != null ? ni(e, i, vt(t)) : l != null ? ni(e, i, vt(l)) : a != null && e.removeAttribute("value"),
        n == null && u != null && (e.defaultChecked = !!u),
        n != null && (e.checked = n && typeof n != "function" && typeof n != "symbol"),
        s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? e.name = "" + vt(s) : e.removeAttribute("name")
    }
    function Bs(e, t, l, a, n, u, i, s) {
        if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u),
        t != null || l != null) {
            if (!(u !== "submit" && u !== "reset" || t != null)) {
                li(e);
                return
            }
            l = l != null ? "" + vt(l) : "",
            t = t != null ? "" + vt(t) : l,
            s || t === e.value || (e.value = t),
            e.defaultValue = t
        }
        a = a ?? n,
        a = typeof a != "function" && typeof a != "symbol" && !!a,
        e.checked = s ? e.checked : !!a,
        e.defaultChecked = !!a,
        i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.name = i),
        li(e)
    }
    function ni(e, t, l) {
        t === "number" && wn(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l)
    }
    function $l(e, t, l, a) {
        if (e = e.options,
        t) {
            t = {};
            for (var n = 0; n < l.length; n++)
                t["$" + l[n]] = !0;
            for (l = 0; l < e.length; l++)
                n = t.hasOwnProperty("$" + e[l].value),
                e[l].selected !== n && (e[l].selected = n),
                n && a && (e[l].defaultSelected = !0)
        } else {
            for (l = "" + vt(l),
            t = null,
            n = 0; n < e.length; n++) {
                if (e[n].value === l) {
                    e[n].selected = !0,
                    a && (e[n].defaultSelected = !0);
                    return
                }
                t !== null || e[n].disabled || (t = e[n])
            }
            t !== null && (t.selected = !0)
        }
    }
    function Ls(e, t, l) {
        if (t != null && (t = "" + vt(t),
        t !== e.value && (e.value = t),
        l == null)) {
            e.defaultValue !== t && (e.defaultValue = t);
            return
        }
        e.defaultValue = l != null ? "" + vt(l) : ""
    }
    function Ys(e, t, l, a) {
        if (t == null) {
            if (a != null) {
                if (l != null)
                    throw Error(f(92));
                if (ke(a)) {
                    if (1 < a.length)
                        throw Error(f(93));
                    a = a[0]
                }
                l = a
            }
            l == null && (l = ""),
            t = l
        }
        l = vt(t),
        e.defaultValue = l,
        a = e.textContent,
        a === l && a !== "" && a !== null && (e.value = a),
        li(e)
    }
    function Wl(e, t) {
        if (t) {
            var l = e.firstChild;
            if (l && l === e.lastChild && l.nodeType === 3) {
                l.nodeValue = t;
                return
            }
        }
        e.textContent = t
    }
    var rh = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function Qs(e, t, l) {
        var a = t.indexOf("--") === 0;
        l == null || typeof l == "boolean" || l === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, l) : typeof l != "number" || l === 0 || rh.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px"
    }
    function Gs(e, t, l) {
        if (t != null && typeof t != "object")
            throw Error(f(62));
        if (e = e.style,
        l != null) {
            for (var a in l)
                !l.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "");
            for (var n in t)
                a = t[n],
                t.hasOwnProperty(n) && l[n] !== a && Qs(e, n, a)
        } else
            for (var u in t)
                t.hasOwnProperty(u) && Qs(e, u, t[u])
    }
    function ui(e) {
        if (e.indexOf("-") === -1)
            return !1;
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
    var oh = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]])
      , dh = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function Dn(e) {
        return dh.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
    }
    function qt() {}
    var ii = null;
    function ci(e) {
        return e = e.target || e.srcElement || window,
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    }
    var Fl = null
      , Il = null;
    function Vs(e) {
        var t = Kl(e);
        if (t && (e = t.stateNode)) {
            var l = e[et] || null;
            e: switch (e = t.stateNode,
            t.type) {
            case "input":
                if (ai(e, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name),
                t = l.name,
                l.type === "radio" && t != null) {
                    for (l = e; l.parentNode; )
                        l = l.parentNode;
                    for (l = l.querySelectorAll('input[name="' + bt("" + t) + '"][type="radio"]'),
                    t = 0; t < l.length; t++) {
                        var a = l[t];
                        if (a !== e && a.form === e.form) {
                            var n = a[et] || null;
                            if (!n)
                                throw Error(f(90));
                            ai(a, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name)
                        }
                    }
                    for (t = 0; t < l.length; t++)
                        a = l[t],
                        a.form === e.form && qs(a)
                }
                break e;
            case "textarea":
                Ls(e, l.value, l.defaultValue);
                break e;
            case "select":
                t = l.value,
                t != null && $l(e, !!l.multiple, t, !1)
            }
        }
    }
    var si = !1;
    function Xs(e, t, l) {
        if (si)
            return e(t, l);
        si = !0;
        try {
            var a = e(t);
            return a
        } finally {
            if (si = !1,
            (Fl !== null || Il !== null) && (xu(),
            Fl && (t = Fl,
            e = Il,
            Il = Fl = null,
            Vs(t),
            e)))
                for (t = 0; t < e.length; t++)
                    Vs(e[t])
        }
    }
    function Ra(e, t) {
        var l = e.stateNode;
        if (l === null)
            return null;
        var a = l[et] || null;
        if (a === null)
            return null;
        l = a[t];
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
            (a = !a.disabled) || (e = e.type,
            a = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
            e = !a;
            break e;
        default:
            e = !1
        }
        if (e)
            return null;
        if (l && typeof l != "function")
            throw Error(f(231, t, typeof l));
        return l
    }
    var Bt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , fi = !1;
    if (Bt)
        try {
            var Ha = {};
            Object.defineProperty(Ha, "passive", {
                get: function() {
                    fi = !0
                }
            }),
            window.addEventListener("test", Ha, Ha),
            window.removeEventListener("test", Ha, Ha)
        } catch {
            fi = !1
        }
    var ll = null
      , ri = null
      , Rn = null;
    function Zs() {
        if (Rn)
            return Rn;
        var e, t = ri, l = t.length, a, n = "value"in ll ? ll.value : ll.textContent, u = n.length;
        for (e = 0; e < l && t[e] === n[e]; e++)
            ;
        var i = l - e;
        for (a = 1; a <= i && t[l - a] === n[u - a]; a++)
            ;
        return Rn = n.slice(e, 1 < a ? 1 - a : void 0)
    }
    function Hn(e) {
        var t = e.keyCode;
        return "charCode"in e ? (e = e.charCode,
        e === 0 && t === 13 && (e = 13)) : e = t,
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    }
    function Un() {
        return !0
    }
    function Ks() {
        return !1
    }
    function tt(e) {
        function t(l, a, n, u, i) {
            this._reactName = l,
            this._targetInst = n,
            this.type = a,
            this.nativeEvent = u,
            this.target = i,
            this.currentTarget = null;
            for (var s in e)
                e.hasOwnProperty(s) && (l = e[s],
                this[s] = l ? l(u) : u[s]);
            return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Un : Ks,
            this.isPropagationStopped = Ks,
            this
        }
        return w(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var l = this.nativeEvent;
                l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1),
                this.isDefaultPrevented = Un)
            },
            stopPropagation: function() {
                var l = this.nativeEvent;
                l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
                this.isPropagationStopped = Un)
            },
            persist: function() {},
            isPersistent: Un
        }),
        t
    }
    var Cl = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, qn = tt(Cl), Ua = w({}, Cl, {
        view: 0,
        detail: 0
    }), hh = tt(Ua), oi, di, qa, Bn = w({}, Ua, {
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
        getModifierState: mi,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX"in e ? e.movementX : (e !== qa && (qa && e.type === "mousemove" ? (oi = e.screenX - qa.screenX,
            di = e.screenY - qa.screenY) : di = oi = 0,
            qa = e),
            oi)
        },
        movementY: function(e) {
            return "movementY"in e ? e.movementY : di
        }
    }), Js = tt(Bn), mh = w({}, Bn, {
        dataTransfer: 0
    }), yh = tt(mh), ph = w({}, Ua, {
        relatedTarget: 0
    }), hi = tt(ph), gh = w({}, Cl, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), vh = tt(gh), bh = w({}, Cl, {
        clipboardData: function(e) {
            return "clipboardData"in e ? e.clipboardData : window.clipboardData
        }
    }), xh = tt(bh), Sh = w({}, Cl, {
        data: 0
    }), ks = tt(Sh), Th = {
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
    }, Nh = {
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
    }, Ah = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function jh(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = Ah[e]) ? !!t[e] : !1
    }
    function mi() {
        return jh
    }
    var Eh = w({}, Ua, {
        key: function(e) {
            if (e.key) {
                var t = Th[e.key] || e.key;
                if (t !== "Unidentified")
                    return t
            }
            return e.type === "keypress" ? (e = Hn(e),
            e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Nh[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: mi,
        charCode: function(e) {
            return e.type === "keypress" ? Hn(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? Hn(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    })
      , zh = tt(Eh)
      , Ch = w({}, Bn, {
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
      , $s = tt(Ch)
      , Oh = w({}, Ua, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: mi
    })
      , Mh = tt(Oh)
      , _h = w({}, Cl, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , wh = tt(_h)
      , Dh = w({}, Bn, {
        deltaX: function(e) {
            return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , Rh = tt(Dh)
      , Hh = w({}, Cl, {
        newState: 0,
        oldState: 0
    })
      , Uh = tt(Hh)
      , qh = [9, 13, 27, 32]
      , yi = Bt && "CompositionEvent"in window
      , Ba = null;
    Bt && "documentMode"in document && (Ba = document.documentMode);
    var Bh = Bt && "TextEvent"in window && !Ba
      , Ws = Bt && (!yi || Ba && 8 < Ba && 11 >= Ba)
      , Fs = " "
      , Is = !1;
    function Ps(e, t) {
        switch (e) {
        case "keyup":
            return qh.indexOf(t.keyCode) !== -1;
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
    function ef(e) {
        return e = e.detail,
        typeof e == "object" && "data"in e ? e.data : null
    }
    var Pl = !1;
    function Lh(e, t) {
        switch (e) {
        case "compositionend":
            return ef(t);
        case "keypress":
            return t.which !== 32 ? null : (Is = !0,
            Fs);
        case "textInput":
            return e = t.data,
            e === Fs && Is ? null : e;
        default:
            return null
        }
    }
    function Yh(e, t) {
        if (Pl)
            return e === "compositionend" || !yi && Ps(e, t) ? (e = Zs(),
            Rn = ri = ll = null,
            Pl = !1,
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
            return Ws && t.locale !== "ko" ? null : t.data;
        default:
            return null
        }
    }
    var Qh = {
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
    function tf(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!Qh[e.type] : t === "textarea"
    }
    function lf(e, t, l, a) {
        Fl ? Il ? Il.push(a) : Il = [a] : Fl = a,
        t = zu(t, "onChange"),
        0 < t.length && (l = new qn("onChange","change",null,l,a),
        e.push({
            event: l,
            listeners: t
        }))
    }
    var La = null
      , Ya = null;
    function Gh(e) {
        Yo(e, 0)
    }
    function Ln(e) {
        var t = Da(e);
        if (qs(t))
            return e
    }
    function af(e, t) {
        if (e === "change")
            return t
    }
    var nf = !1;
    if (Bt) {
        var pi;
        if (Bt) {
            var gi = "oninput"in document;
            if (!gi) {
                var uf = document.createElement("div");
                uf.setAttribute("oninput", "return;"),
                gi = typeof uf.oninput == "function"
            }
            pi = gi
        } else
            pi = !1;
        nf = pi && (!document.documentMode || 9 < document.documentMode)
    }
    function cf() {
        La && (La.detachEvent("onpropertychange", sf),
        Ya = La = null)
    }
    function sf(e) {
        if (e.propertyName === "value" && Ln(Ya)) {
            var t = [];
            lf(t, Ya, e, ci(e)),
            Xs(Gh, t)
        }
    }
    function Vh(e, t, l) {
        e === "focusin" ? (cf(),
        La = t,
        Ya = l,
        La.attachEvent("onpropertychange", sf)) : e === "focusout" && cf()
    }
    function Xh(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown")
            return Ln(Ya)
    }
    function Zh(e, t) {
        if (e === "click")
            return Ln(t)
    }
    function Kh(e, t) {
        if (e === "input" || e === "change")
            return Ln(t)
    }
    function Jh(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var rt = typeof Object.is == "function" ? Object.is : Jh;
    function Qa(e, t) {
        if (rt(e, t))
            return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null)
            return !1;
        var l = Object.keys(e)
          , a = Object.keys(t);
        if (l.length !== a.length)
            return !1;
        for (a = 0; a < l.length; a++) {
            var n = l[a];
            if (!ku.call(t, n) || !rt(e[n], t[n]))
                return !1
        }
        return !0
    }
    function ff(e) {
        for (; e && e.firstChild; )
            e = e.firstChild;
        return e
    }
    function rf(e, t) {
        var l = ff(e);
        e = 0;
        for (var a; l; ) {
            if (l.nodeType === 3) {
                if (a = e + l.textContent.length,
                e <= t && a >= t)
                    return {
                        node: l,
                        offset: t - e
                    };
                e = a
            }
            e: {
                for (; l; ) {
                    if (l.nextSibling) {
                        l = l.nextSibling;
                        break e
                    }
                    l = l.parentNode
                }
                l = void 0
            }
            l = ff(l)
        }
    }
    function of(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? of(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
    }
    function df(e) {
        e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
        for (var t = wn(e.document); t instanceof e.HTMLIFrameElement; ) {
            try {
                var l = typeof t.contentWindow.location.href == "string"
            } catch {
                l = !1
            }
            if (l)
                e = t.contentWindow;
            else
                break;
            t = wn(e.document)
        }
        return t
    }
    function vi(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
    }
    var kh = Bt && "documentMode"in document && 11 >= document.documentMode
      , ea = null
      , bi = null
      , Ga = null
      , xi = !1;
    function hf(e, t, l) {
        var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
        xi || ea == null || ea !== wn(a) || (a = ea,
        "selectionStart"in a && vi(a) ? a = {
            start: a.selectionStart,
            end: a.selectionEnd
        } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(),
        a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset
        }),
        Ga && Qa(Ga, a) || (Ga = a,
        a = zu(bi, "onSelect"),
        0 < a.length && (t = new qn("onSelect","select",null,t,l),
        e.push({
            event: t,
            listeners: a
        }),
        t.target = ea)))
    }
    function Ol(e, t) {
        var l = {};
        return l[e.toLowerCase()] = t.toLowerCase(),
        l["Webkit" + e] = "webkit" + t,
        l["Moz" + e] = "moz" + t,
        l
    }
    var ta = {
        animationend: Ol("Animation", "AnimationEnd"),
        animationiteration: Ol("Animation", "AnimationIteration"),
        animationstart: Ol("Animation", "AnimationStart"),
        transitionrun: Ol("Transition", "TransitionRun"),
        transitionstart: Ol("Transition", "TransitionStart"),
        transitioncancel: Ol("Transition", "TransitionCancel"),
        transitionend: Ol("Transition", "TransitionEnd")
    }
      , Si = {}
      , mf = {};
    Bt && (mf = document.createElement("div").style,
    "AnimationEvent"in window || (delete ta.animationend.animation,
    delete ta.animationiteration.animation,
    delete ta.animationstart.animation),
    "TransitionEvent"in window || delete ta.transitionend.transition);
    function Ml(e) {
        if (Si[e])
            return Si[e];
        if (!ta[e])
            return e;
        var t = ta[e], l;
        for (l in t)
            if (t.hasOwnProperty(l) && l in mf)
                return Si[e] = t[l];
        return e
    }
    var yf = Ml("animationend")
      , pf = Ml("animationiteration")
      , gf = Ml("animationstart")
      , $h = Ml("transitionrun")
      , Wh = Ml("transitionstart")
      , Fh = Ml("transitioncancel")
      , vf = Ml("transitionend")
      , bf = new Map
      , Ti = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    Ti.push("scrollEnd");
    function Ct(e, t) {
        bf.set(e, t),
        zl(t, [e])
    }
    var Yn = typeof reportError == "function" ? reportError : function(e) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var t = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
                error: e
            });
            if (!window.dispatchEvent(t))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", e);
            return
        }
        console.error(e)
    }
      , xt = []
      , la = 0
      , Ni = 0;
    function Qn() {
        for (var e = la, t = Ni = la = 0; t < e; ) {
            var l = xt[t];
            xt[t++] = null;
            var a = xt[t];
            xt[t++] = null;
            var n = xt[t];
            xt[t++] = null;
            var u = xt[t];
            if (xt[t++] = null,
            a !== null && n !== null) {
                var i = a.pending;
                i === null ? n.next = n : (n.next = i.next,
                i.next = n),
                a.pending = n
            }
            u !== 0 && xf(l, n, u)
        }
    }
    function Gn(e, t, l, a) {
        xt[la++] = e,
        xt[la++] = t,
        xt[la++] = l,
        xt[la++] = a,
        Ni |= a,
        e.lanes |= a,
        e = e.alternate,
        e !== null && (e.lanes |= a)
    }
    function Ai(e, t, l, a) {
        return Gn(e, t, l, a),
        Vn(e)
    }
    function _l(e, t) {
        return Gn(e, null, null, t),
        Vn(e)
    }
    function xf(e, t, l) {
        e.lanes |= l;
        var a = e.alternate;
        a !== null && (a.lanes |= l);
        for (var n = !1, u = e.return; u !== null; )
            u.childLanes |= l,
            a = u.alternate,
            a !== null && (a.childLanes |= l),
            u.tag === 22 && (e = u.stateNode,
            e === null || e._visibility & 1 || (n = !0)),
            e = u,
            u = u.return;
        return e.tag === 3 ? (u = e.stateNode,
        n && t !== null && (n = 31 - ft(l),
        e = u.hiddenUpdates,
        a = e[n],
        a === null ? e[n] = [t] : a.push(t),
        t.lane = l | 536870912),
        u) : null
    }
    function Vn(e) {
        if (50 < on)
            throw on = 0,
            Dc = null,
            Error(f(185));
        for (var t = e.return; t !== null; )
            e = t,
            t = e.return;
        return e.tag === 3 ? e.stateNode : null
    }
    var aa = {};
    function Ih(e, t, l, a) {
        this.tag = e,
        this.key = l,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.refCleanup = this.ref = null,
        this.pendingProps = t,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = a,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function ot(e, t, l, a) {
        return new Ih(e,t,l,a)
    }
    function ji(e) {
        return e = e.prototype,
        !(!e || !e.isReactComponent)
    }
    function Lt(e, t) {
        var l = e.alternate;
        return l === null ? (l = ot(e.tag, t, e.key, e.mode),
        l.elementType = e.elementType,
        l.type = e.type,
        l.stateNode = e.stateNode,
        l.alternate = e,
        e.alternate = l) : (l.pendingProps = t,
        l.type = e.type,
        l.flags = 0,
        l.subtreeFlags = 0,
        l.deletions = null),
        l.flags = e.flags & 65011712,
        l.childLanes = e.childLanes,
        l.lanes = e.lanes,
        l.child = e.child,
        l.memoizedProps = e.memoizedProps,
        l.memoizedState = e.memoizedState,
        l.updateQueue = e.updateQueue,
        t = e.dependencies,
        l.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        },
        l.sibling = e.sibling,
        l.index = e.index,
        l.ref = e.ref,
        l.refCleanup = e.refCleanup,
        l
    }
    function Sf(e, t) {
        e.flags &= 65011714;
        var l = e.alternate;
        return l === null ? (e.childLanes = 0,
        e.lanes = t,
        e.child = null,
        e.subtreeFlags = 0,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.updateQueue = null,
        e.dependencies = null,
        e.stateNode = null) : (e.childLanes = l.childLanes,
        e.lanes = l.lanes,
        e.child = l.child,
        e.subtreeFlags = 0,
        e.deletions = null,
        e.memoizedProps = l.memoizedProps,
        e.memoizedState = l.memoizedState,
        e.updateQueue = l.updateQueue,
        e.type = l.type,
        t = l.dependencies,
        e.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }),
        e
    }
    function Xn(e, t, l, a, n, u) {
        var i = 0;
        if (a = e,
        typeof e == "function")
            ji(e) && (i = 1);
        else if (typeof e == "string")
            i = am(e, l, q.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
        else
            e: switch (e) {
            case Ne:
                return e = ot(31, l, t, n),
                e.elementType = Ne,
                e.lanes = u,
                e;
            case pe:
                return wl(l.children, n, u, t);
            case se:
                i = 8,
                n |= 24;
                break;
            case K:
                return e = ot(12, l, t, n | 2),
                e.elementType = K,
                e.lanes = u,
                e;
            case ee:
                return e = ot(13, l, t, n),
                e.elementType = ee,
                e.lanes = u,
                e;
            case F:
                return e = ot(19, l, t, n),
                e.elementType = F,
                e.lanes = u,
                e;
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                    case J:
                        i = 10;
                        break e;
                    case Ee:
                        i = 9;
                        break e;
                    case Oe:
                        i = 11;
                        break e;
                    case L:
                        i = 14;
                        break e;
                    case Te:
                        i = 16,
                        a = null;
                        break e
                    }
                i = 29,
                l = Error(f(130, e === null ? "null" : typeof e, "")),
                a = null
            }
        return t = ot(i, l, t, n),
        t.elementType = e,
        t.type = a,
        t.lanes = u,
        t
    }
    function wl(e, t, l, a) {
        return e = ot(7, e, a, t),
        e.lanes = l,
        e
    }
    function Ei(e, t, l) {
        return e = ot(6, e, null, t),
        e.lanes = l,
        e
    }
    function Tf(e) {
        var t = ot(18, null, null, 0);
        return t.stateNode = e,
        t
    }
    function zi(e, t, l) {
        return t = ot(4, e.children !== null ? e.children : [], e.key, t),
        t.lanes = l,
        t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        },
        t
    }
    var Nf = new WeakMap;
    function St(e, t) {
        if (typeof e == "object" && e !== null) {
            var l = Nf.get(e);
            return l !== void 0 ? l : (t = {
                value: e,
                source: t,
                stack: Ss(t)
            },
            Nf.set(e, t),
            t)
        }
        return {
            value: e,
            source: t,
            stack: Ss(t)
        }
    }
    var na = []
      , ua = 0
      , Zn = null
      , Va = 0
      , Tt = []
      , Nt = 0
      , al = null
      , _t = 1
      , wt = "";
    function Yt(e, t) {
        na[ua++] = Va,
        na[ua++] = Zn,
        Zn = e,
        Va = t
    }
    function Af(e, t, l) {
        Tt[Nt++] = _t,
        Tt[Nt++] = wt,
        Tt[Nt++] = al,
        al = e;
        var a = _t;
        e = wt;
        var n = 32 - ft(a) - 1;
        a &= ~(1 << n),
        l += 1;
        var u = 32 - ft(t) + n;
        if (30 < u) {
            var i = n - n % 5;
            u = (a & (1 << i) - 1).toString(32),
            a >>= i,
            n -= i,
            _t = 1 << 32 - ft(t) + n | l << n | a,
            wt = u + e
        } else
            _t = 1 << u | l << n | a,
            wt = e
    }
    function Ci(e) {
        e.return !== null && (Yt(e, 1),
        Af(e, 1, 0))
    }
    function Oi(e) {
        for (; e === Zn; )
            Zn = na[--ua],
            na[ua] = null,
            Va = na[--ua],
            na[ua] = null;
        for (; e === al; )
            al = Tt[--Nt],
            Tt[Nt] = null,
            wt = Tt[--Nt],
            Tt[Nt] = null,
            _t = Tt[--Nt],
            Tt[Nt] = null
    }
    function jf(e, t) {
        Tt[Nt++] = _t,
        Tt[Nt++] = wt,
        Tt[Nt++] = al,
        _t = t.id,
        wt = t.overflow,
        al = e
    }
    var Xe = null
      , Ae = null
      , ce = !1
      , nl = null
      , At = !1
      , Mi = Error(f(519));
    function ul(e) {
        var t = Error(f(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
        throw Xa(St(t, e)),
        Mi
    }
    function Ef(e) {
        var t = e.stateNode
          , l = e.type
          , a = e.memoizedProps;
        switch (t[Ve] = e,
        t[et] = a,
        l) {
        case "dialog":
            ne("cancel", t),
            ne("close", t);
            break;
        case "iframe":
        case "object":
        case "embed":
            ne("load", t);
            break;
        case "video":
        case "audio":
            for (l = 0; l < hn.length; l++)
                ne(hn[l], t);
            break;
        case "source":
            ne("error", t);
            break;
        case "img":
        case "image":
        case "link":
            ne("error", t),
            ne("load", t);
            break;
        case "details":
            ne("toggle", t);
            break;
        case "input":
            ne("invalid", t),
            Bs(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0);
            break;
        case "select":
            ne("invalid", t);
            break;
        case "textarea":
            ne("invalid", t),
            Ys(t, a.value, a.defaultValue, a.children)
        }
        l = a.children,
        typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || a.suppressHydrationWarning === !0 || Xo(t.textContent, l) ? (a.popover != null && (ne("beforetoggle", t),
        ne("toggle", t)),
        a.onScroll != null && ne("scroll", t),
        a.onScrollEnd != null && ne("scrollend", t),
        a.onClick != null && (t.onclick = qt),
        t = !0) : t = !1,
        t || ul(e, !0)
    }
    function zf(e) {
        for (Xe = e.return; Xe; )
            switch (Xe.tag) {
            case 5:
            case 31:
            case 13:
                At = !1;
                return;
            case 27:
            case 3:
                At = !0;
                return;
            default:
                Xe = Xe.return
            }
    }
    function ia(e) {
        if (e !== Xe)
            return !1;
        if (!ce)
            return zf(e),
            ce = !0,
            !1;
        var t = e.tag, l;
        if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type,
        l = !(l !== "form" && l !== "button") || kc(e.type, e.memoizedProps)),
        l = !l),
        l && Ae && ul(e),
        zf(e),
        t === 13) {
            if (e = e.memoizedState,
            e = e !== null ? e.dehydrated : null,
            !e)
                throw Error(f(317));
            Ae = Po(e)
        } else if (t === 31) {
            if (e = e.memoizedState,
            e = e !== null ? e.dehydrated : null,
            !e)
                throw Error(f(317));
            Ae = Po(e)
        } else
            t === 27 ? (t = Ae,
            bl(e.type) ? (e = Pc,
            Pc = null,
            Ae = e) : Ae = t) : Ae = Xe ? Et(e.stateNode.nextSibling) : null;
        return !0
    }
    function Dl() {
        Ae = Xe = null,
        ce = !1
    }
    function _i() {
        var e = nl;
        return e !== null && (ut === null ? ut = e : ut.push.apply(ut, e),
        nl = null),
        e
    }
    function Xa(e) {
        nl === null ? nl = [e] : nl.push(e)
    }
    var wi = d(null)
      , Rl = null
      , Qt = null;
    function il(e, t, l) {
        R(wi, t._currentValue),
        t._currentValue = l
    }
    function Gt(e) {
        e._currentValue = wi.current,
        O(wi)
    }
    function Di(e, t, l) {
        for (; e !== null; ) {
            var a = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t,
            a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
            e === l)
                break;
            e = e.return
        }
    }
    function Ri(e, t, l, a) {
        var n = e.child;
        for (n !== null && (n.return = e); n !== null; ) {
            var u = n.dependencies;
            if (u !== null) {
                var i = n.child;
                u = u.firstContext;
                e: for (; u !== null; ) {
                    var s = u;
                    u = n;
                    for (var o = 0; o < t.length; o++)
                        if (s.context === t[o]) {
                            u.lanes |= l,
                            s = u.alternate,
                            s !== null && (s.lanes |= l),
                            Di(u.return, l, e),
                            a || (i = null);
                            break e
                        }
                    u = s.next
                }
            } else if (n.tag === 18) {
                if (i = n.return,
                i === null)
                    throw Error(f(341));
                i.lanes |= l,
                u = i.alternate,
                u !== null && (u.lanes |= l),
                Di(i, l, e),
                i = null
            } else
                i = n.child;
            if (i !== null)
                i.return = n;
            else
                for (i = n; i !== null; ) {
                    if (i === e) {
                        i = null;
                        break
                    }
                    if (n = i.sibling,
                    n !== null) {
                        n.return = i.return,
                        i = n;
                        break
                    }
                    i = i.return
                }
            n = i
        }
    }
    function ca(e, t, l, a) {
        e = null;
        for (var n = t, u = !1; n !== null; ) {
            if (!u) {
                if ((n.flags & 524288) !== 0)
                    u = !0;
                else if ((n.flags & 262144) !== 0)
                    break
            }
            if (n.tag === 10) {
                var i = n.alternate;
                if (i === null)
                    throw Error(f(387));
                if (i = i.memoizedProps,
                i !== null) {
                    var s = n.type;
                    rt(n.pendingProps.value, i.value) || (e !== null ? e.push(s) : e = [s])
                }
            } else if (n === de.current) {
                if (i = n.alternate,
                i === null)
                    throw Error(f(387));
                i.memoizedState.memoizedState !== n.memoizedState.memoizedState && (e !== null ? e.push(vn) : e = [vn])
            }
            n = n.return
        }
        e !== null && Ri(t, e, l, a),
        t.flags |= 262144
    }
    function Kn(e) {
        for (e = e.firstContext; e !== null; ) {
            if (!rt(e.context._currentValue, e.memoizedValue))
                return !0;
            e = e.next
        }
        return !1
    }
    function Hl(e) {
        Rl = e,
        Qt = null,
        e = e.dependencies,
        e !== null && (e.firstContext = null)
    }
    function Ze(e) {
        return Cf(Rl, e)
    }
    function Jn(e, t) {
        return Rl === null && Hl(e),
        Cf(e, t)
    }
    function Cf(e, t) {
        var l = t._currentValue;
        if (t = {
            context: t,
            memoizedValue: l,
            next: null
        },
        Qt === null) {
            if (e === null)
                throw Error(f(308));
            Qt = t,
            e.dependencies = {
                lanes: 0,
                firstContext: t
            },
            e.flags |= 524288
        } else
            Qt = Qt.next = t;
        return l
    }
    var Ph = typeof AbortController < "u" ? AbortController : function() {
        var e = []
          , t = this.signal = {
            aborted: !1,
            addEventListener: function(l, a) {
                e.push(a)
            }
        };
        this.abort = function() {
            t.aborted = !0,
            e.forEach(function(l) {
                return l()
            })
        }
    }
      , e0 = r.unstable_scheduleCallback
      , t0 = r.unstable_NormalPriority
      , Ue = {
        $$typeof: J,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
    };
    function Hi() {
        return {
            controller: new Ph,
            data: new Map,
            refCount: 0
        }
    }
    function Za(e) {
        e.refCount--,
        e.refCount === 0 && e0(t0, function() {
            e.controller.abort()
        })
    }
    var Ka = null
      , Ui = 0
      , sa = 0
      , fa = null;
    function l0(e, t) {
        if (Ka === null) {
            var l = Ka = [];
            Ui = 0,
            sa = Lc(),
            fa = {
                status: "pending",
                value: void 0,
                then: function(a) {
                    l.push(a)
                }
            }
        }
        return Ui++,
        t.then(Of, Of),
        t
    }
    function Of() {
        if (--Ui === 0 && Ka !== null) {
            fa !== null && (fa.status = "fulfilled");
            var e = Ka;
            Ka = null,
            sa = 0,
            fa = null;
            for (var t = 0; t < e.length; t++)
                (0,
                e[t])()
        }
    }
    function a0(e, t) {
        var l = []
          , a = {
            status: "pending",
            value: null,
            reason: null,
            then: function(n) {
                l.push(n)
            }
        };
        return e.then(function() {
            a.status = "fulfilled",
            a.value = t;
            for (var n = 0; n < l.length; n++)
                (0,
                l[n])(t)
        }, function(n) {
            for (a.status = "rejected",
            a.reason = n,
            n = 0; n < l.length; n++)
                (0,
                l[n])(void 0)
        }),
        a
    }
    var Mf = T.S;
    T.S = function(e, t) {
        mo = ct(),
        typeof t == "object" && t !== null && typeof t.then == "function" && l0(e, t),
        Mf !== null && Mf(e, t)
    }
    ;
    var Ul = d(null);
    function qi() {
        var e = Ul.current;
        return e !== null ? e : Se.pooledCache
    }
    function kn(e, t) {
        t === null ? R(Ul, Ul.current) : R(Ul, t.pool)
    }
    function _f() {
        var e = qi();
        return e === null ? null : {
            parent: Ue._currentValue,
            pool: e
        }
    }
    var ra = Error(f(460))
      , Bi = Error(f(474))
      , $n = Error(f(542))
      , Wn = {
        then: function() {}
    };
    function wf(e) {
        return e = e.status,
        e === "fulfilled" || e === "rejected"
    }
    function Df(e, t, l) {
        switch (l = e[l],
        l === void 0 ? e.push(t) : l !== t && (t.then(qt, qt),
        t = l),
        t.status) {
        case "fulfilled":
            return t.value;
        case "rejected":
            throw e = t.reason,
            Hf(e),
            e;
        default:
            if (typeof t.status == "string")
                t.then(qt, qt);
            else {
                if (e = Se,
                e !== null && 100 < e.shellSuspendCounter)
                    throw Error(f(482));
                e = t,
                e.status = "pending",
                e.then(function(a) {
                    if (t.status === "pending") {
                        var n = t;
                        n.status = "fulfilled",
                        n.value = a
                    }
                }, function(a) {
                    if (t.status === "pending") {
                        var n = t;
                        n.status = "rejected",
                        n.reason = a
                    }
                })
            }
            switch (t.status) {
            case "fulfilled":
                return t.value;
            case "rejected":
                throw e = t.reason,
                Hf(e),
                e
            }
            throw Bl = t,
            ra
        }
    }
    function ql(e) {
        try {
            var t = e._init;
            return t(e._payload)
        } catch (l) {
            throw l !== null && typeof l == "object" && typeof l.then == "function" ? (Bl = l,
            ra) : l
        }
    }
    var Bl = null;
    function Rf() {
        if (Bl === null)
            throw Error(f(459));
        var e = Bl;
        return Bl = null,
        e
    }
    function Hf(e) {
        if (e === ra || e === $n)
            throw Error(f(483))
    }
    var oa = null
      , Ja = 0;
    function Fn(e) {
        var t = Ja;
        return Ja += 1,
        oa === null && (oa = []),
        Df(oa, e, t)
    }
    function ka(e, t) {
        t = t.props.ref,
        e.ref = t !== void 0 ? t : null
    }
    function In(e, t) {
        throw t.$$typeof === V ? Error(f(525)) : (e = Object.prototype.toString.call(t),
        Error(f(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)))
    }
    function Uf(e) {
        function t(m, h) {
            if (e) {
                var p = m.deletions;
                p === null ? (m.deletions = [h],
                m.flags |= 16) : p.push(h)
            }
        }
        function l(m, h) {
            if (!e)
                return null;
            for (; h !== null; )
                t(m, h),
                h = h.sibling;
            return null
        }
        function a(m) {
            for (var h = new Map; m !== null; )
                m.key !== null ? h.set(m.key, m) : h.set(m.index, m),
                m = m.sibling;
            return h
        }
        function n(m, h) {
            return m = Lt(m, h),
            m.index = 0,
            m.sibling = null,
            m
        }
        function u(m, h, p) {
            return m.index = p,
            e ? (p = m.alternate,
            p !== null ? (p = p.index,
            p < h ? (m.flags |= 67108866,
            h) : p) : (m.flags |= 67108866,
            h)) : (m.flags |= 1048576,
            h)
        }
        function i(m) {
            return e && m.alternate === null && (m.flags |= 67108866),
            m
        }
        function s(m, h, p, E) {
            return h === null || h.tag !== 6 ? (h = Ei(p, m.mode, E),
            h.return = m,
            h) : (h = n(h, p),
            h.return = m,
            h)
        }
        function o(m, h, p, E) {
            var G = p.type;
            return G === pe ? N(m, h, p.props.children, E, p.key) : h !== null && (h.elementType === G || typeof G == "object" && G !== null && G.$$typeof === Te && ql(G) === h.type) ? (h = n(h, p.props),
            ka(h, p),
            h.return = m,
            h) : (h = Xn(p.type, p.key, p.props, null, m.mode, E),
            ka(h, p),
            h.return = m,
            h)
        }
        function g(m, h, p, E) {
            return h === null || h.tag !== 4 || h.stateNode.containerInfo !== p.containerInfo || h.stateNode.implementation !== p.implementation ? (h = zi(p, m.mode, E),
            h.return = m,
            h) : (h = n(h, p.children || []),
            h.return = m,
            h)
        }
        function N(m, h, p, E, G) {
            return h === null || h.tag !== 7 ? (h = wl(p, m.mode, E, G),
            h.return = m,
            h) : (h = n(h, p),
            h.return = m,
            h)
        }
        function C(m, h, p) {
            if (typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint")
                return h = Ei("" + h, m.mode, p),
                h.return = m,
                h;
            if (typeof h == "object" && h !== null) {
                switch (h.$$typeof) {
                case he:
                    return p = Xn(h.type, h.key, h.props, null, m.mode, p),
                    ka(p, h),
                    p.return = m,
                    p;
                case P:
                    return h = zi(h, m.mode, p),
                    h.return = m,
                    h;
                case Te:
                    return h = ql(h),
                    C(m, h, p)
                }
                if (ke(h) || ze(h))
                    return h = wl(h, m.mode, p, null),
                    h.return = m,
                    h;
                if (typeof h.then == "function")
                    return C(m, Fn(h), p);
                if (h.$$typeof === J)
                    return C(m, Jn(m, h), p);
                In(m, h)
            }
            return null
        }
        function v(m, h, p, E) {
            var G = h !== null ? h.key : null;
            if (typeof p == "string" && p !== "" || typeof p == "number" || typeof p == "bigint")
                return G !== null ? null : s(m, h, "" + p, E);
            if (typeof p == "object" && p !== null) {
                switch (p.$$typeof) {
                case he:
                    return p.key === G ? o(m, h, p, E) : null;
                case P:
                    return p.key === G ? g(m, h, p, E) : null;
                case Te:
                    return p = ql(p),
                    v(m, h, p, E)
                }
                if (ke(p) || ze(p))
                    return G !== null ? null : N(m, h, p, E, null);
                if (typeof p.then == "function")
                    return v(m, h, Fn(p), E);
                if (p.$$typeof === J)
                    return v(m, h, Jn(m, p), E);
                In(m, p)
            }
            return null
        }
        function x(m, h, p, E, G) {
            if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
                return m = m.get(p) || null,
                s(h, m, "" + E, G);
            if (typeof E == "object" && E !== null) {
                switch (E.$$typeof) {
                case he:
                    return m = m.get(E.key === null ? p : E.key) || null,
                    o(h, m, E, G);
                case P:
                    return m = m.get(E.key === null ? p : E.key) || null,
                    g(h, m, E, G);
                case Te:
                    return E = ql(E),
                    x(m, h, p, E, G)
                }
                if (ke(E) || ze(E))
                    return m = m.get(p) || null,
                    N(h, m, E, G, null);
                if (typeof E.then == "function")
                    return x(m, h, p, Fn(E), G);
                if (E.$$typeof === J)
                    return x(m, h, p, Jn(h, E), G);
                In(h, E)
            }
            return null
        }
        function U(m, h, p, E) {
            for (var G = null, fe = null, Y = h, W = h = 0, ie = null; Y !== null && W < p.length; W++) {
                Y.index > W ? (ie = Y,
                Y = null) : ie = Y.sibling;
                var re = v(m, Y, p[W], E);
                if (re === null) {
                    Y === null && (Y = ie);
                    break
                }
                e && Y && re.alternate === null && t(m, Y),
                h = u(re, h, W),
                fe === null ? G = re : fe.sibling = re,
                fe = re,
                Y = ie
            }
            if (W === p.length)
                return l(m, Y),
                ce && Yt(m, W),
                G;
            if (Y === null) {
                for (; W < p.length; W++)
                    Y = C(m, p[W], E),
                    Y !== null && (h = u(Y, h, W),
                    fe === null ? G = Y : fe.sibling = Y,
                    fe = Y);
                return ce && Yt(m, W),
                G
            }
            for (Y = a(Y); W < p.length; W++)
                ie = x(Y, m, W, p[W], E),
                ie !== null && (e && ie.alternate !== null && Y.delete(ie.key === null ? W : ie.key),
                h = u(ie, h, W),
                fe === null ? G = ie : fe.sibling = ie,
                fe = ie);
            return e && Y.forEach(function(Al) {
                return t(m, Al)
            }),
            ce && Yt(m, W),
            G
        }
        function X(m, h, p, E) {
            if (p == null)
                throw Error(f(151));
            for (var G = null, fe = null, Y = h, W = h = 0, ie = null, re = p.next(); Y !== null && !re.done; W++,
            re = p.next()) {
                Y.index > W ? (ie = Y,
                Y = null) : ie = Y.sibling;
                var Al = v(m, Y, re.value, E);
                if (Al === null) {
                    Y === null && (Y = ie);
                    break
                }
                e && Y && Al.alternate === null && t(m, Y),
                h = u(Al, h, W),
                fe === null ? G = Al : fe.sibling = Al,
                fe = Al,
                Y = ie
            }
            if (re.done)
                return l(m, Y),
                ce && Yt(m, W),
                G;
            if (Y === null) {
                for (; !re.done; W++,
                re = p.next())
                    re = C(m, re.value, E),
                    re !== null && (h = u(re, h, W),
                    fe === null ? G = re : fe.sibling = re,
                    fe = re);
                return ce && Yt(m, W),
                G
            }
            for (Y = a(Y); !re.done; W++,
            re = p.next())
                re = x(Y, m, W, re.value, E),
                re !== null && (e && re.alternate !== null && Y.delete(re.key === null ? W : re.key),
                h = u(re, h, W),
                fe === null ? G = re : fe.sibling = re,
                fe = re);
            return e && Y.forEach(function(mm) {
                return t(m, mm)
            }),
            ce && Yt(m, W),
            G
        }
        function be(m, h, p, E) {
            if (typeof p == "object" && p !== null && p.type === pe && p.key === null && (p = p.props.children),
            typeof p == "object" && p !== null) {
                switch (p.$$typeof) {
                case he:
                    e: {
                        for (var G = p.key; h !== null; ) {
                            if (h.key === G) {
                                if (G = p.type,
                                G === pe) {
                                    if (h.tag === 7) {
                                        l(m, h.sibling),
                                        E = n(h, p.props.children),
                                        E.return = m,
                                        m = E;
                                        break e
                                    }
                                } else if (h.elementType === G || typeof G == "object" && G !== null && G.$$typeof === Te && ql(G) === h.type) {
                                    l(m, h.sibling),
                                    E = n(h, p.props),
                                    ka(E, p),
                                    E.return = m,
                                    m = E;
                                    break e
                                }
                                l(m, h);
                                break
                            } else
                                t(m, h);
                            h = h.sibling
                        }
                        p.type === pe ? (E = wl(p.props.children, m.mode, E, p.key),
                        E.return = m,
                        m = E) : (E = Xn(p.type, p.key, p.props, null, m.mode, E),
                        ka(E, p),
                        E.return = m,
                        m = E)
                    }
                    return i(m);
                case P:
                    e: {
                        for (G = p.key; h !== null; ) {
                            if (h.key === G)
                                if (h.tag === 4 && h.stateNode.containerInfo === p.containerInfo && h.stateNode.implementation === p.implementation) {
                                    l(m, h.sibling),
                                    E = n(h, p.children || []),
                                    E.return = m,
                                    m = E;
                                    break e
                                } else {
                                    l(m, h);
                                    break
                                }
                            else
                                t(m, h);
                            h = h.sibling
                        }
                        E = zi(p, m.mode, E),
                        E.return = m,
                        m = E
                    }
                    return i(m);
                case Te:
                    return p = ql(p),
                    be(m, h, p, E)
                }
                if (ke(p))
                    return U(m, h, p, E);
                if (ze(p)) {
                    if (G = ze(p),
                    typeof G != "function")
                        throw Error(f(150));
                    return p = G.call(p),
                    X(m, h, p, E)
                }
                if (typeof p.then == "function")
                    return be(m, h, Fn(p), E);
                if (p.$$typeof === J)
                    return be(m, h, Jn(m, p), E);
                In(m, p)
            }
            return typeof p == "string" && p !== "" || typeof p == "number" || typeof p == "bigint" ? (p = "" + p,
            h !== null && h.tag === 6 ? (l(m, h.sibling),
            E = n(h, p),
            E.return = m,
            m = E) : (l(m, h),
            E = Ei(p, m.mode, E),
            E.return = m,
            m = E),
            i(m)) : l(m, h)
        }
        return function(m, h, p, E) {
            try {
                Ja = 0;
                var G = be(m, h, p, E);
                return oa = null,
                G
            } catch (Y) {
                if (Y === ra || Y === $n)
                    throw Y;
                var fe = ot(29, Y, null, m.mode);
                return fe.lanes = E,
                fe.return = m,
                fe
            } finally {}
        }
    }
    var Ll = Uf(!0)
      , qf = Uf(!1)
      , cl = !1;
    function Li(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }
    function Yi(e, t) {
        e = e.updateQueue,
        t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null
        })
    }
    function sl(e) {
        return {
            lane: e,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function fl(e, t, l) {
        var a = e.updateQueue;
        if (a === null)
            return null;
        if (a = a.shared,
        (oe & 2) !== 0) {
            var n = a.pending;
            return n === null ? t.next = t : (t.next = n.next,
            n.next = t),
            a.pending = t,
            t = Vn(e),
            xf(e, null, l),
            t
        }
        return Gn(e, a, t, l),
        Vn(e)
    }
    function $a(e, t, l) {
        if (t = t.updateQueue,
        t !== null && (t = t.shared,
        (l & 4194048) !== 0)) {
            var a = t.lanes;
            a &= e.pendingLanes,
            l |= a,
            t.lanes = l,
            zs(e, l)
        }
    }
    function Qi(e, t) {
        var l = e.updateQueue
          , a = e.alternate;
        if (a !== null && (a = a.updateQueue,
        l === a)) {
            var n = null
              , u = null;
            if (l = l.firstBaseUpdate,
            l !== null) {
                do {
                    var i = {
                        lane: l.lane,
                        tag: l.tag,
                        payload: l.payload,
                        callback: null,
                        next: null
                    };
                    u === null ? n = u = i : u = u.next = i,
                    l = l.next
                } while (l !== null);
                u === null ? n = u = t : u = u.next = t
            } else
                n = u = t;
            l = {
                baseState: a.baseState,
                firstBaseUpdate: n,
                lastBaseUpdate: u,
                shared: a.shared,
                callbacks: a.callbacks
            },
            e.updateQueue = l;
            return
        }
        e = l.lastBaseUpdate,
        e === null ? l.firstBaseUpdate = t : e.next = t,
        l.lastBaseUpdate = t
    }
    var Gi = !1;
    function Wa() {
        if (Gi) {
            var e = fa;
            if (e !== null)
                throw e
        }
    }
    function Fa(e, t, l, a) {
        Gi = !1;
        var n = e.updateQueue;
        cl = !1;
        var u = n.firstBaseUpdate
          , i = n.lastBaseUpdate
          , s = n.shared.pending;
        if (s !== null) {
            n.shared.pending = null;
            var o = s
              , g = o.next;
            o.next = null,
            i === null ? u = g : i.next = g,
            i = o;
            var N = e.alternate;
            N !== null && (N = N.updateQueue,
            s = N.lastBaseUpdate,
            s !== i && (s === null ? N.firstBaseUpdate = g : s.next = g,
            N.lastBaseUpdate = o))
        }
        if (u !== null) {
            var C = n.baseState;
            i = 0,
            N = g = o = null,
            s = u;
            do {
                var v = s.lane & -536870913
                  , x = v !== s.lane;
                if (x ? (ue & v) === v : (a & v) === v) {
                    v !== 0 && v === sa && (Gi = !0),
                    N !== null && (N = N.next = {
                        lane: 0,
                        tag: s.tag,
                        payload: s.payload,
                        callback: null,
                        next: null
                    });
                    e: {
                        var U = e
                          , X = s;
                        v = t;
                        var be = l;
                        switch (X.tag) {
                        case 1:
                            if (U = X.payload,
                            typeof U == "function") {
                                C = U.call(be, C, v);
                                break e
                            }
                            C = U;
                            break e;
                        case 3:
                            U.flags = U.flags & -65537 | 128;
                        case 0:
                            if (U = X.payload,
                            v = typeof U == "function" ? U.call(be, C, v) : U,
                            v == null)
                                break e;
                            C = w({}, C, v);
                            break e;
                        case 2:
                            cl = !0
                        }
                    }
                    v = s.callback,
                    v !== null && (e.flags |= 64,
                    x && (e.flags |= 8192),
                    x = n.callbacks,
                    x === null ? n.callbacks = [v] : x.push(v))
                } else
                    x = {
                        lane: v,
                        tag: s.tag,
                        payload: s.payload,
                        callback: s.callback,
                        next: null
                    },
                    N === null ? (g = N = x,
                    o = C) : N = N.next = x,
                    i |= v;
                if (s = s.next,
                s === null) {
                    if (s = n.shared.pending,
                    s === null)
                        break;
                    x = s,
                    s = x.next,
                    x.next = null,
                    n.lastBaseUpdate = x,
                    n.shared.pending = null
                }
            } while (!0);
            N === null && (o = C),
            n.baseState = o,
            n.firstBaseUpdate = g,
            n.lastBaseUpdate = N,
            u === null && (n.shared.lanes = 0),
            ml |= i,
            e.lanes = i,
            e.memoizedState = C
        }
    }
    function Bf(e, t) {
        if (typeof e != "function")
            throw Error(f(191, e));
        e.call(t)
    }
    function Lf(e, t) {
        var l = e.callbacks;
        if (l !== null)
            for (e.callbacks = null,
            e = 0; e < l.length; e++)
                Bf(l[e], t)
    }
    var da = d(null)
      , Pn = d(0);
    function Yf(e, t) {
        e = Ft,
        R(Pn, e),
        R(da, t),
        Ft = e | t.baseLanes
    }
    function Vi() {
        R(Pn, Ft),
        R(da, da.current)
    }
    function Xi() {
        Ft = Pn.current,
        O(da),
        O(Pn)
    }
    var dt = d(null)
      , jt = null;
    function rl(e) {
        var t = e.alternate;
        R(De, De.current & 1),
        R(dt, e),
        jt === null && (t === null || da.current !== null || t.memoizedState !== null) && (jt = e)
    }
    function Zi(e) {
        R(De, De.current),
        R(dt, e),
        jt === null && (jt = e)
    }
    function Qf(e) {
        e.tag === 22 ? (R(De, De.current),
        R(dt, e),
        jt === null && (jt = e)) : ol()
    }
    function ol() {
        R(De, De.current),
        R(dt, dt.current)
    }
    function ht(e) {
        O(dt),
        jt === e && (jt = null),
        O(De)
    }
    var De = d(0);
    function eu(e) {
        for (var t = e; t !== null; ) {
            if (t.tag === 13) {
                var l = t.memoizedState;
                if (l !== null && (l = l.dehydrated,
                l === null || Fc(l) || Ic(l)))
                    return t
            } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
                if ((t.flags & 128) !== 0)
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
    var Vt = 0
      , $ = null
      , ge = null
      , qe = null
      , tu = !1
      , ha = !1
      , Yl = !1
      , lu = 0
      , Ia = 0
      , ma = null
      , n0 = 0;
    function Me() {
        throw Error(f(321))
    }
    function Ki(e, t) {
        if (t === null)
            return !1;
        for (var l = 0; l < t.length && l < e.length; l++)
            if (!rt(e[l], t[l]))
                return !1;
        return !0
    }
    function Ji(e, t, l, a, n, u) {
        return Vt = u,
        $ = t,
        t.memoizedState = null,
        t.updateQueue = null,
        t.lanes = 0,
        T.H = e === null || e.memoizedState === null ? Ar : sc,
        Yl = !1,
        u = l(a, n),
        Yl = !1,
        ha && (u = Vf(t, l, a, n)),
        Gf(e),
        u
    }
    function Gf(e) {
        T.H = tn;
        var t = ge !== null && ge.next !== null;
        if (Vt = 0,
        qe = ge = $ = null,
        tu = !1,
        Ia = 0,
        ma = null,
        t)
            throw Error(f(300));
        e === null || Be || (e = e.dependencies,
        e !== null && Kn(e) && (Be = !0))
    }
    function Vf(e, t, l, a) {
        $ = e;
        var n = 0;
        do {
            if (ha && (ma = null),
            Ia = 0,
            ha = !1,
            25 <= n)
                throw Error(f(301));
            if (n += 1,
            qe = ge = null,
            e.updateQueue != null) {
                var u = e.updateQueue;
                u.lastEffect = null,
                u.events = null,
                u.stores = null,
                u.memoCache != null && (u.memoCache.index = 0)
            }
            T.H = jr,
            u = t(l, a)
        } while (ha);
        return u
    }
    function u0() {
        var e = T.H
          , t = e.useState()[0];
        return t = typeof t.then == "function" ? Pa(t) : t,
        e = e.useState()[0],
        (ge !== null ? ge.memoizedState : null) !== e && ($.flags |= 1024),
        t
    }
    function ki() {
        var e = lu !== 0;
        return lu = 0,
        e
    }
    function $i(e, t, l) {
        t.updateQueue = e.updateQueue,
        t.flags &= -2053,
        e.lanes &= ~l
    }
    function Wi(e) {
        if (tu) {
            for (e = e.memoizedState; e !== null; ) {
                var t = e.queue;
                t !== null && (t.pending = null),
                e = e.next
            }
            tu = !1
        }
        Vt = 0,
        qe = ge = $ = null,
        ha = !1,
        Ia = lu = 0,
        ma = null
    }
    function Fe() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return qe === null ? $.memoizedState = qe = e : qe = qe.next = e,
        qe
    }
    function Re() {
        if (ge === null) {
            var e = $.alternate;
            e = e !== null ? e.memoizedState : null
        } else
            e = ge.next;
        var t = qe === null ? $.memoizedState : qe.next;
        if (t !== null)
            qe = t,
            ge = e;
        else {
            if (e === null)
                throw $.alternate === null ? Error(f(467)) : Error(f(310));
            ge = e,
            e = {
                memoizedState: ge.memoizedState,
                baseState: ge.baseState,
                baseQueue: ge.baseQueue,
                queue: ge.queue,
                next: null
            },
            qe === null ? $.memoizedState = qe = e : qe = qe.next = e
        }
        return qe
    }
    function au() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }
    function Pa(e) {
        var t = Ia;
        return Ia += 1,
        ma === null && (ma = []),
        e = Df(ma, e, t),
        t = $,
        (qe === null ? t.memoizedState : qe.next) === null && (t = t.alternate,
        T.H = t === null || t.memoizedState === null ? Ar : sc),
        e
    }
    function nu(e) {
        if (e !== null && typeof e == "object") {
            if (typeof e.then == "function")
                return Pa(e);
            if (e.$$typeof === J)
                return Ze(e)
        }
        throw Error(f(438, String(e)))
    }
    function Fi(e) {
        var t = null
          , l = $.updateQueue;
        if (l !== null && (t = l.memoCache),
        t == null) {
            var a = $.alternate;
            a !== null && (a = a.updateQueue,
            a !== null && (a = a.memoCache,
            a != null && (t = {
                data: a.data.map(function(n) {
                    return n.slice()
                }),
                index: 0
            })))
        }
        if (t == null && (t = {
            data: [],
            index: 0
        }),
        l === null && (l = au(),
        $.updateQueue = l),
        l.memoCache = t,
        l = t.data[t.index],
        l === void 0)
            for (l = t.data[t.index] = Array(e),
            a = 0; a < e; a++)
                l[a] = xe;
        return t.index++,
        l
    }
    function Xt(e, t) {
        return typeof t == "function" ? t(e) : t
    }
    function uu(e) {
        var t = Re();
        return Ii(t, ge, e)
    }
    function Ii(e, t, l) {
        var a = e.queue;
        if (a === null)
            throw Error(f(311));
        a.lastRenderedReducer = l;
        var n = e.baseQueue
          , u = a.pending;
        if (u !== null) {
            if (n !== null) {
                var i = n.next;
                n.next = u.next,
                u.next = i
            }
            t.baseQueue = n = u,
            a.pending = null
        }
        if (u = e.baseState,
        n === null)
            e.memoizedState = u;
        else {
            t = n.next;
            var s = i = null
              , o = null
              , g = t
              , N = !1;
            do {
                var C = g.lane & -536870913;
                if (C !== g.lane ? (ue & C) === C : (Vt & C) === C) {
                    var v = g.revertLane;
                    if (v === 0)
                        o !== null && (o = o.next = {
                            lane: 0,
                            revertLane: 0,
                            gesture: null,
                            action: g.action,
                            hasEagerState: g.hasEagerState,
                            eagerState: g.eagerState,
                            next: null
                        }),
                        C === sa && (N = !0);
                    else if ((Vt & v) === v) {
                        g = g.next,
                        v === sa && (N = !0);
                        continue
                    } else
                        C = {
                            lane: 0,
                            revertLane: g.revertLane,
                            gesture: null,
                            action: g.action,
                            hasEagerState: g.hasEagerState,
                            eagerState: g.eagerState,
                            next: null
                        },
                        o === null ? (s = o = C,
                        i = u) : o = o.next = C,
                        $.lanes |= v,
                        ml |= v;
                    C = g.action,
                    Yl && l(u, C),
                    u = g.hasEagerState ? g.eagerState : l(u, C)
                } else
                    v = {
                        lane: C,
                        revertLane: g.revertLane,
                        gesture: g.gesture,
                        action: g.action,
                        hasEagerState: g.hasEagerState,
                        eagerState: g.eagerState,
                        next: null
                    },
                    o === null ? (s = o = v,
                    i = u) : o = o.next = v,
                    $.lanes |= C,
                    ml |= C;
                g = g.next
            } while (g !== null && g !== t);
            if (o === null ? i = u : o.next = s,
            !rt(u, e.memoizedState) && (Be = !0,
            N && (l = fa,
            l !== null)))
                throw l;
            e.memoizedState = u,
            e.baseState = i,
            e.baseQueue = o,
            a.lastRenderedState = u
        }
        return n === null && (a.lanes = 0),
        [e.memoizedState, a.dispatch]
    }
    function Pi(e) {
        var t = Re()
          , l = t.queue;
        if (l === null)
            throw Error(f(311));
        l.lastRenderedReducer = e;
        var a = l.dispatch
          , n = l.pending
          , u = t.memoizedState;
        if (n !== null) {
            l.pending = null;
            var i = n = n.next;
            do
                u = e(u, i.action),
                i = i.next;
            while (i !== n);
            rt(u, t.memoizedState) || (Be = !0),
            t.memoizedState = u,
            t.baseQueue === null && (t.baseState = u),
            l.lastRenderedState = u
        }
        return [u, a]
    }
    function Xf(e, t, l) {
        var a = $
          , n = Re()
          , u = ce;
        if (u) {
            if (l === void 0)
                throw Error(f(407));
            l = l()
        } else
            l = t();
        var i = !rt((ge || n).memoizedState, l);
        if (i && (n.memoizedState = l,
        Be = !0),
        n = n.queue,
        lc(Jf.bind(null, a, n, e), [e]),
        n.getSnapshot !== t || i || qe !== null && qe.memoizedState.tag & 1) {
            if (a.flags |= 2048,
            ya(9, {
                destroy: void 0
            }, Kf.bind(null, a, n, l, t), null),
            Se === null)
                throw Error(f(349));
            u || (Vt & 127) !== 0 || Zf(a, t, l)
        }
        return l
    }
    function Zf(e, t, l) {
        e.flags |= 16384,
        e = {
            getSnapshot: t,
            value: l
        },
        t = $.updateQueue,
        t === null ? (t = au(),
        $.updateQueue = t,
        t.stores = [e]) : (l = t.stores,
        l === null ? t.stores = [e] : l.push(e))
    }
    function Kf(e, t, l, a) {
        t.value = l,
        t.getSnapshot = a,
        kf(t) && $f(e)
    }
    function Jf(e, t, l) {
        return l(function() {
            kf(t) && $f(e)
        })
    }
    function kf(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var l = t();
            return !rt(e, l)
        } catch {
            return !0
        }
    }
    function $f(e) {
        var t = _l(e, 2);
        t !== null && it(t, e, 2)
    }
    function ec(e) {
        var t = Fe();
        if (typeof e == "function") {
            var l = e;
            if (e = l(),
            Yl) {
                el(!0);
                try {
                    l()
                } finally {
                    el(!1)
                }
            }
        }
        return t.memoizedState = t.baseState = e,
        t.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Xt,
            lastRenderedState: e
        },
        t
    }
    function Wf(e, t, l, a) {
        return e.baseState = l,
        Ii(e, ge, typeof a == "function" ? a : Xt)
    }
    function i0(e, t, l, a, n) {
        if (su(e))
            throw Error(f(485));
        if (e = t.action,
        e !== null) {
            var u = {
                payload: n,
                action: e,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(i) {
                    u.listeners.push(i)
                }
            };
            T.T !== null ? l(!0) : u.isTransition = !1,
            a(u),
            l = t.pending,
            l === null ? (u.next = t.pending = u,
            Ff(t, u)) : (u.next = l.next,
            t.pending = l.next = u)
        }
    }
    function Ff(e, t) {
        var l = t.action
          , a = t.payload
          , n = e.state;
        if (t.isTransition) {
            var u = T.T
              , i = {};
            T.T = i;
            try {
                var s = l(n, a)
                  , o = T.S;
                o !== null && o(i, s),
                If(e, t, s)
            } catch (g) {
                tc(e, t, g)
            } finally {
                u !== null && i.types !== null && (u.types = i.types),
                T.T = u
            }
        } else
            try {
                u = l(n, a),
                If(e, t, u)
            } catch (g) {
                tc(e, t, g)
            }
    }
    function If(e, t, l) {
        l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(function(a) {
            Pf(e, t, a)
        }, function(a) {
            return tc(e, t, a)
        }) : Pf(e, t, l)
    }
    function Pf(e, t, l) {
        t.status = "fulfilled",
        t.value = l,
        er(t),
        e.state = l,
        t = e.pending,
        t !== null && (l = t.next,
        l === t ? e.pending = null : (l = l.next,
        t.next = l,
        Ff(e, l)))
    }
    function tc(e, t, l) {
        var a = e.pending;
        if (e.pending = null,
        a !== null) {
            a = a.next;
            do
                t.status = "rejected",
                t.reason = l,
                er(t),
                t = t.next;
            while (t !== a)
        }
        e.action = null
    }
    function er(e) {
        e = e.listeners;
        for (var t = 0; t < e.length; t++)
            (0,
            e[t])()
    }
    function tr(e, t) {
        return t
    }
    function lr(e, t) {
        if (ce) {
            var l = Se.formState;
            if (l !== null) {
                e: {
                    var a = $;
                    if (ce) {
                        if (Ae) {
                            t: {
                                for (var n = Ae, u = At; n.nodeType !== 8; ) {
                                    if (!u) {
                                        n = null;
                                        break t
                                    }
                                    if (n = Et(n.nextSibling),
                                    n === null) {
                                        n = null;
                                        break t
                                    }
                                }
                                u = n.data,
                                n = u === "F!" || u === "F" ? n : null
                            }
                            if (n) {
                                Ae = Et(n.nextSibling),
                                a = n.data === "F!";
                                break e
                            }
                        }
                        ul(a)
                    }
                    a = !1
                }
                a && (t = l[0])
            }
        }
        return l = Fe(),
        l.memoizedState = l.baseState = t,
        a = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: tr,
            lastRenderedState: t
        },
        l.queue = a,
        l = Sr.bind(null, $, a),
        a.dispatch = l,
        a = ec(!1),
        u = cc.bind(null, $, !1, a.queue),
        a = Fe(),
        n = {
            state: t,
            dispatch: null,
            action: e,
            pending: null
        },
        a.queue = n,
        l = i0.bind(null, $, n, u, l),
        n.dispatch = l,
        a.memoizedState = e,
        [t, l, !1]
    }
    function ar(e) {
        var t = Re();
        return nr(t, ge, e)
    }
    function nr(e, t, l) {
        if (t = Ii(e, t, tr)[0],
        e = uu(Xt)[0],
        typeof t == "object" && t !== null && typeof t.then == "function")
            try {
                var a = Pa(t)
            } catch (i) {
                throw i === ra ? $n : i
            }
        else
            a = t;
        t = Re();
        var n = t.queue
          , u = n.dispatch;
        return l !== t.memoizedState && ($.flags |= 2048,
        ya(9, {
            destroy: void 0
        }, c0.bind(null, n, l), null)),
        [a, u, e]
    }
    function c0(e, t) {
        e.action = t
    }
    function ur(e) {
        var t = Re()
          , l = ge;
        if (l !== null)
            return nr(t, l, e);
        Re(),
        t = t.memoizedState,
        l = Re();
        var a = l.queue.dispatch;
        return l.memoizedState = e,
        [t, a, !1]
    }
    function ya(e, t, l, a) {
        return e = {
            tag: e,
            create: l,
            deps: a,
            inst: t,
            next: null
        },
        t = $.updateQueue,
        t === null && (t = au(),
        $.updateQueue = t),
        l = t.lastEffect,
        l === null ? t.lastEffect = e.next = e : (a = l.next,
        l.next = e,
        e.next = a,
        t.lastEffect = e),
        e
    }
    function ir() {
        return Re().memoizedState
    }
    function iu(e, t, l, a) {
        var n = Fe();
        $.flags |= e,
        n.memoizedState = ya(1 | t, {
            destroy: void 0
        }, l, a === void 0 ? null : a)
    }
    function cu(e, t, l, a) {
        var n = Re();
        a = a === void 0 ? null : a;
        var u = n.memoizedState.inst;
        ge !== null && a !== null && Ki(a, ge.memoizedState.deps) ? n.memoizedState = ya(t, u, l, a) : ($.flags |= e,
        n.memoizedState = ya(1 | t, u, l, a))
    }
    function cr(e, t) {
        iu(8390656, 8, e, t)
    }
    function lc(e, t) {
        cu(2048, 8, e, t)
    }
    function s0(e) {
        $.flags |= 4;
        var t = $.updateQueue;
        if (t === null)
            t = au(),
            $.updateQueue = t,
            t.events = [e];
        else {
            var l = t.events;
            l === null ? t.events = [e] : l.push(e)
        }
    }
    function sr(e) {
        var t = Re().memoizedState;
        return s0({
            ref: t,
            nextImpl: e
        }),
        function() {
            if ((oe & 2) !== 0)
                throw Error(f(440));
            return t.impl.apply(void 0, arguments)
        }
    }
    function fr(e, t) {
        return cu(4, 2, e, t)
    }
    function rr(e, t) {
        return cu(4, 4, e, t)
    }
    function or(e, t) {
        if (typeof t == "function") {
            e = e();
            var l = t(e);
            return function() {
                typeof l == "function" ? l() : t(null)
            }
        }
        if (t != null)
            return e = e(),
            t.current = e,
            function() {
                t.current = null
            }
    }
    function dr(e, t, l) {
        l = l != null ? l.concat([e]) : null,
        cu(4, 4, or.bind(null, t, e), l)
    }
    function ac() {}
    function hr(e, t) {
        var l = Re();
        t = t === void 0 ? null : t;
        var a = l.memoizedState;
        return t !== null && Ki(t, a[1]) ? a[0] : (l.memoizedState = [e, t],
        e)
    }
    function mr(e, t) {
        var l = Re();
        t = t === void 0 ? null : t;
        var a = l.memoizedState;
        if (t !== null && Ki(t, a[1]))
            return a[0];
        if (a = e(),
        Yl) {
            el(!0);
            try {
                e()
            } finally {
                el(!1)
            }
        }
        return l.memoizedState = [a, t],
        a
    }
    function nc(e, t, l) {
        return l === void 0 || (Vt & 1073741824) !== 0 && (ue & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = l,
        e = po(),
        $.lanes |= e,
        ml |= e,
        l)
    }
    function yr(e, t, l, a) {
        return rt(l, t) ? l : da.current !== null ? (e = nc(e, l, a),
        rt(e, t) || (Be = !0),
        e) : (Vt & 42) === 0 || (Vt & 1073741824) !== 0 && (ue & 261930) === 0 ? (Be = !0,
        e.memoizedState = l) : (e = po(),
        $.lanes |= e,
        ml |= e,
        t)
    }
    function pr(e, t, l, a, n) {
        var u = D.p;
        D.p = u !== 0 && 8 > u ? u : 8;
        var i = T.T
          , s = {};
        T.T = s,
        cc(e, !1, t, l);
        try {
            var o = n()
              , g = T.S;
            if (g !== null && g(s, o),
            o !== null && typeof o == "object" && typeof o.then == "function") {
                var N = a0(o, a);
                en(e, t, N, pt(e))
            } else
                en(e, t, a, pt(e))
        } catch (C) {
            en(e, t, {
                then: function() {},
                status: "rejected",
                reason: C
            }, pt())
        } finally {
            D.p = u,
            i !== null && s.types !== null && (i.types = s.types),
            T.T = i
        }
    }
    function f0() {}
    function uc(e, t, l, a) {
        if (e.tag !== 5)
            throw Error(f(476));
        var n = gr(e).queue;
        pr(e, n, t, H, l === null ? f0 : function() {
            return vr(e),
            l(a)
        }
        )
    }
    function gr(e) {
        var t = e.memoizedState;
        if (t !== null)
            return t;
        t = {
            memoizedState: H,
            baseState: H,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Xt,
                lastRenderedState: H
            },
            next: null
        };
        var l = {};
        return t.next = {
            memoizedState: l,
            baseState: l,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Xt,
                lastRenderedState: l
            },
            next: null
        },
        e.memoizedState = t,
        e = e.alternate,
        e !== null && (e.memoizedState = t),
        t
    }
    function vr(e) {
        var t = gr(e);
        t.next === null && (t = e.alternate.memoizedState),
        en(e, t.next.queue, {}, pt())
    }
    function ic() {
        return Ze(vn)
    }
    function br() {
        return Re().memoizedState
    }
    function xr() {
        return Re().memoizedState
    }
    function r0(e) {
        for (var t = e.return; t !== null; ) {
            switch (t.tag) {
            case 24:
            case 3:
                var l = pt();
                e = sl(l);
                var a = fl(t, e, l);
                a !== null && (it(a, t, l),
                $a(a, t, l)),
                t = {
                    cache: Hi()
                },
                e.payload = t;
                return
            }
            t = t.return
        }
    }
    function o0(e, t, l) {
        var a = pt();
        l = {
            lane: a,
            revertLane: 0,
            gesture: null,
            action: l,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        su(e) ? Tr(t, l) : (l = Ai(e, t, l, a),
        l !== null && (it(l, e, a),
        Nr(l, t, a)))
    }
    function Sr(e, t, l) {
        var a = pt();
        en(e, t, l, a)
    }
    function en(e, t, l, a) {
        var n = {
            lane: a,
            revertLane: 0,
            gesture: null,
            action: l,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (su(e))
            Tr(t, n);
        else {
            var u = e.alternate;
            if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer,
            u !== null))
                try {
                    var i = t.lastRenderedState
                      , s = u(i, l);
                    if (n.hasEagerState = !0,
                    n.eagerState = s,
                    rt(s, i))
                        return Gn(e, t, n, 0),
                        Se === null && Qn(),
                        !1
                } catch {} finally {}
            if (l = Ai(e, t, n, a),
            l !== null)
                return it(l, e, a),
                Nr(l, t, a),
                !0
        }
        return !1
    }
    function cc(e, t, l, a) {
        if (a = {
            lane: 2,
            revertLane: Lc(),
            gesture: null,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        su(e)) {
            if (t)
                throw Error(f(479))
        } else
            t = Ai(e, l, a, 2),
            t !== null && it(t, e, 2)
    }
    function su(e) {
        var t = e.alternate;
        return e === $ || t !== null && t === $
    }
    function Tr(e, t) {
        ha = tu = !0;
        var l = e.pending;
        l === null ? t.next = t : (t.next = l.next,
        l.next = t),
        e.pending = t
    }
    function Nr(e, t, l) {
        if ((l & 4194048) !== 0) {
            var a = t.lanes;
            a &= e.pendingLanes,
            l |= a,
            t.lanes = l,
            zs(e, l)
        }
    }
    var tn = {
        readContext: Ze,
        use: nu,
        useCallback: Me,
        useContext: Me,
        useEffect: Me,
        useImperativeHandle: Me,
        useLayoutEffect: Me,
        useInsertionEffect: Me,
        useMemo: Me,
        useReducer: Me,
        useRef: Me,
        useState: Me,
        useDebugValue: Me,
        useDeferredValue: Me,
        useTransition: Me,
        useSyncExternalStore: Me,
        useId: Me,
        useHostTransitionStatus: Me,
        useFormState: Me,
        useActionState: Me,
        useOptimistic: Me,
        useMemoCache: Me,
        useCacheRefresh: Me
    };
    tn.useEffectEvent = Me;
    var Ar = {
        readContext: Ze,
        use: nu,
        useCallback: function(e, t) {
            return Fe().memoizedState = [e, t === void 0 ? null : t],
            e
        },
        useContext: Ze,
        useEffect: cr,
        useImperativeHandle: function(e, t, l) {
            l = l != null ? l.concat([e]) : null,
            iu(4194308, 4, or.bind(null, t, e), l)
        },
        useLayoutEffect: function(e, t) {
            return iu(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            iu(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var l = Fe();
            t = t === void 0 ? null : t;
            var a = e();
            if (Yl) {
                el(!0);
                try {
                    e()
                } finally {
                    el(!1)
                }
            }
            return l.memoizedState = [a, t],
            a
        },
        useReducer: function(e, t, l) {
            var a = Fe();
            if (l !== void 0) {
                var n = l(t);
                if (Yl) {
                    el(!0);
                    try {
                        l(t)
                    } finally {
                        el(!1)
                    }
                }
            } else
                n = t;
            return a.memoizedState = a.baseState = n,
            e = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: n
            },
            a.queue = e,
            e = e.dispatch = o0.bind(null, $, e),
            [a.memoizedState, e]
        },
        useRef: function(e) {
            var t = Fe();
            return e = {
                current: e
            },
            t.memoizedState = e
        },
        useState: function(e) {
            e = ec(e);
            var t = e.queue
              , l = Sr.bind(null, $, t);
            return t.dispatch = l,
            [e.memoizedState, l]
        },
        useDebugValue: ac,
        useDeferredValue: function(e, t) {
            var l = Fe();
            return nc(l, e, t)
        },
        useTransition: function() {
            var e = ec(!1);
            return e = pr.bind(null, $, e.queue, !0, !1),
            Fe().memoizedState = e,
            [!1, e]
        },
        useSyncExternalStore: function(e, t, l) {
            var a = $
              , n = Fe();
            if (ce) {
                if (l === void 0)
                    throw Error(f(407));
                l = l()
            } else {
                if (l = t(),
                Se === null)
                    throw Error(f(349));
                (ue & 127) !== 0 || Zf(a, t, l)
            }
            n.memoizedState = l;
            var u = {
                value: l,
                getSnapshot: t
            };
            return n.queue = u,
            cr(Jf.bind(null, a, u, e), [e]),
            a.flags |= 2048,
            ya(9, {
                destroy: void 0
            }, Kf.bind(null, a, u, l, t), null),
            l
        },
        useId: function() {
            var e = Fe()
              , t = Se.identifierPrefix;
            if (ce) {
                var l = wt
                  , a = _t;
                l = (a & ~(1 << 32 - ft(a) - 1)).toString(32) + l,
                t = "_" + t + "R_" + l,
                l = lu++,
                0 < l && (t += "H" + l.toString(32)),
                t += "_"
            } else
                l = n0++,
                t = "_" + t + "r_" + l.toString(32) + "_";
            return e.memoizedState = t
        },
        useHostTransitionStatus: ic,
        useFormState: lr,
        useActionState: lr,
        useOptimistic: function(e) {
            var t = Fe();
            t.memoizedState = t.baseState = e;
            var l = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null
            };
            return t.queue = l,
            t = cc.bind(null, $, !0, l),
            l.dispatch = t,
            [e, t]
        },
        useMemoCache: Fi,
        useCacheRefresh: function() {
            return Fe().memoizedState = r0.bind(null, $)
        },
        useEffectEvent: function(e) {
            var t = Fe()
              , l = {
                impl: e
            };
            return t.memoizedState = l,
            function() {
                if ((oe & 2) !== 0)
                    throw Error(f(440));
                return l.impl.apply(void 0, arguments)
            }
        }
    }
      , sc = {
        readContext: Ze,
        use: nu,
        useCallback: hr,
        useContext: Ze,
        useEffect: lc,
        useImperativeHandle: dr,
        useInsertionEffect: fr,
        useLayoutEffect: rr,
        useMemo: mr,
        useReducer: uu,
        useRef: ir,
        useState: function() {
            return uu(Xt)
        },
        useDebugValue: ac,
        useDeferredValue: function(e, t) {
            var l = Re();
            return yr(l, ge.memoizedState, e, t)
        },
        useTransition: function() {
            var e = uu(Xt)[0]
              , t = Re().memoizedState;
            return [typeof e == "boolean" ? e : Pa(e), t]
        },
        useSyncExternalStore: Xf,
        useId: br,
        useHostTransitionStatus: ic,
        useFormState: ar,
        useActionState: ar,
        useOptimistic: function(e, t) {
            var l = Re();
            return Wf(l, ge, e, t)
        },
        useMemoCache: Fi,
        useCacheRefresh: xr
    };
    sc.useEffectEvent = sr;
    var jr = {
        readContext: Ze,
        use: nu,
        useCallback: hr,
        useContext: Ze,
        useEffect: lc,
        useImperativeHandle: dr,
        useInsertionEffect: fr,
        useLayoutEffect: rr,
        useMemo: mr,
        useReducer: Pi,
        useRef: ir,
        useState: function() {
            return Pi(Xt)
        },
        useDebugValue: ac,
        useDeferredValue: function(e, t) {
            var l = Re();
            return ge === null ? nc(l, e, t) : yr(l, ge.memoizedState, e, t)
        },
        useTransition: function() {
            var e = Pi(Xt)[0]
              , t = Re().memoizedState;
            return [typeof e == "boolean" ? e : Pa(e), t]
        },
        useSyncExternalStore: Xf,
        useId: br,
        useHostTransitionStatus: ic,
        useFormState: ur,
        useActionState: ur,
        useOptimistic: function(e, t) {
            var l = Re();
            return ge !== null ? Wf(l, ge, e, t) : (l.baseState = e,
            [e, l.queue.dispatch])
        },
        useMemoCache: Fi,
        useCacheRefresh: xr
    };
    jr.useEffectEvent = sr;
    function fc(e, t, l, a) {
        t = e.memoizedState,
        l = l(a, t),
        l = l == null ? t : w({}, t, l),
        e.memoizedState = l,
        e.lanes === 0 && (e.updateQueue.baseState = l)
    }
    var rc = {
        enqueueSetState: function(e, t, l) {
            e = e._reactInternals;
            var a = pt()
              , n = sl(a);
            n.payload = t,
            l != null && (n.callback = l),
            t = fl(e, n, a),
            t !== null && (it(t, e, a),
            $a(t, e, a))
        },
        enqueueReplaceState: function(e, t, l) {
            e = e._reactInternals;
            var a = pt()
              , n = sl(a);
            n.tag = 1,
            n.payload = t,
            l != null && (n.callback = l),
            t = fl(e, n, a),
            t !== null && (it(t, e, a),
            $a(t, e, a))
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var l = pt()
              , a = sl(l);
            a.tag = 2,
            t != null && (a.callback = t),
            t = fl(e, a, l),
            t !== null && (it(t, e, l),
            $a(t, e, l))
        }
    };
    function Er(e, t, l, a, n, u, i) {
        return e = e.stateNode,
        typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, u, i) : t.prototype && t.prototype.isPureReactComponent ? !Qa(l, a) || !Qa(n, u) : !0
    }
    function zr(e, t, l, a) {
        e = t.state,
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, a),
        typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, a),
        t.state !== e && rc.enqueueReplaceState(t, t.state, null)
    }
    function Ql(e, t) {
        var l = t;
        if ("ref"in t) {
            l = {};
            for (var a in t)
                a !== "ref" && (l[a] = t[a])
        }
        if (e = e.defaultProps) {
            l === t && (l = w({}, l));
            for (var n in e)
                l[n] === void 0 && (l[n] = e[n])
        }
        return l
    }
    function Cr(e) {
        Yn(e)
    }
    function Or(e) {
        console.error(e)
    }
    function Mr(e) {
        Yn(e)
    }
    function fu(e, t) {
        try {
            var l = e.onUncaughtError;
            l(t.value, {
                componentStack: t.stack
            })
        } catch (a) {
            setTimeout(function() {
                throw a
            })
        }
    }
    function _r(e, t, l) {
        try {
            var a = e.onCaughtError;
            a(l.value, {
                componentStack: l.stack,
                errorBoundary: t.tag === 1 ? t.stateNode : null
            })
        } catch (n) {
            setTimeout(function() {
                throw n
            })
        }
    }
    function oc(e, t, l) {
        return l = sl(l),
        l.tag = 3,
        l.payload = {
            element: null
        },
        l.callback = function() {
            fu(e, t)
        }
        ,
        l
    }
    function wr(e) {
        return e = sl(e),
        e.tag = 3,
        e
    }
    function Dr(e, t, l, a) {
        var n = l.type.getDerivedStateFromError;
        if (typeof n == "function") {
            var u = a.value;
            e.payload = function() {
                return n(u)
            }
            ,
            e.callback = function() {
                _r(t, l, a)
            }
        }
        var i = l.stateNode;
        i !== null && typeof i.componentDidCatch == "function" && (e.callback = function() {
            _r(t, l, a),
            typeof n != "function" && (yl === null ? yl = new Set([this]) : yl.add(this));
            var s = a.stack;
            this.componentDidCatch(a.value, {
                componentStack: s !== null ? s : ""
            })
        }
        )
    }
    function d0(e, t, l, a, n) {
        if (l.flags |= 32768,
        a !== null && typeof a == "object" && typeof a.then == "function") {
            if (t = l.alternate,
            t !== null && ca(t, l, n, !0),
            l = dt.current,
            l !== null) {
                switch (l.tag) {
                case 31:
                case 13:
                    return jt === null ? Su() : l.alternate === null && _e === 0 && (_e = 3),
                    l.flags &= -257,
                    l.flags |= 65536,
                    l.lanes = n,
                    a === Wn ? l.flags |= 16384 : (t = l.updateQueue,
                    t === null ? l.updateQueue = new Set([a]) : t.add(a),
                    Uc(e, a, n)),
                    !1;
                case 22:
                    return l.flags |= 65536,
                    a === Wn ? l.flags |= 16384 : (t = l.updateQueue,
                    t === null ? (t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a])
                    },
                    l.updateQueue = t) : (l = t.retryQueue,
                    l === null ? t.retryQueue = new Set([a]) : l.add(a)),
                    Uc(e, a, n)),
                    !1
                }
                throw Error(f(435, l.tag))
            }
            return Uc(e, a, n),
            Su(),
            !1
        }
        if (ce)
            return t = dt.current,
            t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            t.flags |= 65536,
            t.lanes = n,
            a !== Mi && (e = Error(f(422), {
                cause: a
            }),
            Xa(St(e, l)))) : (a !== Mi && (t = Error(f(423), {
                cause: a
            }),
            Xa(St(t, l))),
            e = e.current.alternate,
            e.flags |= 65536,
            n &= -n,
            e.lanes |= n,
            a = St(a, l),
            n = oc(e.stateNode, a, n),
            Qi(e, n),
            _e !== 4 && (_e = 2)),
            !1;
        var u = Error(f(520), {
            cause: a
        });
        if (u = St(u, l),
        rn === null ? rn = [u] : rn.push(u),
        _e !== 4 && (_e = 2),
        t === null)
            return !0;
        a = St(a, l),
        l = t;
        do {
            switch (l.tag) {
            case 3:
                return l.flags |= 65536,
                e = n & -n,
                l.lanes |= e,
                e = oc(l.stateNode, a, e),
                Qi(l, e),
                !1;
            case 1:
                if (t = l.type,
                u = l.stateNode,
                (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (yl === null || !yl.has(u))))
                    return l.flags |= 65536,
                    n &= -n,
                    l.lanes |= n,
                    n = wr(n),
                    Dr(n, e, l, a),
                    Qi(l, n),
                    !1
            }
            l = l.return
        } while (l !== null);
        return !1
    }
    var dc = Error(f(461))
      , Be = !1;
    function Ke(e, t, l, a) {
        t.child = e === null ? qf(t, null, l, a) : Ll(t, e.child, l, a)
    }
    function Rr(e, t, l, a, n) {
        l = l.render;
        var u = t.ref;
        if ("ref"in a) {
            var i = {};
            for (var s in a)
                s !== "ref" && (i[s] = a[s])
        } else
            i = a;
        return Hl(t),
        a = Ji(e, t, l, i, u, n),
        s = ki(),
        e !== null && !Be ? ($i(e, t, n),
        Zt(e, t, n)) : (ce && s && Ci(t),
        t.flags |= 1,
        Ke(e, t, a, n),
        t.child)
    }
    function Hr(e, t, l, a, n) {
        if (e === null) {
            var u = l.type;
            return typeof u == "function" && !ji(u) && u.defaultProps === void 0 && l.compare === null ? (t.tag = 15,
            t.type = u,
            Ur(e, t, u, a, n)) : (e = Xn(l.type, null, a, t, t.mode, n),
            e.ref = t.ref,
            e.return = t,
            t.child = e)
        }
        if (u = e.child,
        !xc(e, n)) {
            var i = u.memoizedProps;
            if (l = l.compare,
            l = l !== null ? l : Qa,
            l(i, a) && e.ref === t.ref)
                return Zt(e, t, n)
        }
        return t.flags |= 1,
        e = Lt(u, a),
        e.ref = t.ref,
        e.return = t,
        t.child = e
    }
    function Ur(e, t, l, a, n) {
        if (e !== null) {
            var u = e.memoizedProps;
            if (Qa(u, a) && e.ref === t.ref)
                if (Be = !1,
                t.pendingProps = a = u,
                xc(e, n))
                    (e.flags & 131072) !== 0 && (Be = !0);
                else
                    return t.lanes = e.lanes,
                    Zt(e, t, n)
        }
        return hc(e, t, l, a, n)
    }
    function qr(e, t, l, a) {
        var n = a.children
          , u = e !== null ? e.memoizedState : null;
        if (e === null && t.stateNode === null && (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        a.mode === "hidden") {
            if ((t.flags & 128) !== 0) {
                if (u = u !== null ? u.baseLanes | l : l,
                e !== null) {
                    for (a = t.child = e.child,
                    n = 0; a !== null; )
                        n = n | a.lanes | a.childLanes,
                        a = a.sibling;
                    a = n & ~u
                } else
                    a = 0,
                    t.child = null;
                return Br(e, t, u, l, a)
            }
            if ((l & 536870912) !== 0)
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                },
                e !== null && kn(t, u !== null ? u.cachePool : null),
                u !== null ? Yf(t, u) : Vi(),
                Qf(t);
            else
                return a = t.lanes = 536870912,
                Br(e, t, u !== null ? u.baseLanes | l : l, l, a)
        } else
            u !== null ? (kn(t, u.cachePool),
            Yf(t, u),
            ol(),
            t.memoizedState = null) : (e !== null && kn(t, null),
            Vi(),
            ol());
        return Ke(e, t, n, l),
        t.child
    }
    function ln(e, t) {
        return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        t.sibling
    }
    function Br(e, t, l, a, n) {
        var u = qi();
        return u = u === null ? null : {
            parent: Ue._currentValue,
            pool: u
        },
        t.memoizedState = {
            baseLanes: l,
            cachePool: u
        },
        e !== null && kn(t, null),
        Vi(),
        Qf(t),
        e !== null && ca(e, t, a, !0),
        t.childLanes = n,
        null
    }
    function ru(e, t) {
        return t = du({
            mode: t.mode,
            children: t.children
        }, e.mode),
        t.ref = e.ref,
        e.child = t,
        t.return = e,
        t
    }
    function Lr(e, t, l) {
        return Ll(t, e.child, null, l),
        e = ru(t, t.pendingProps),
        e.flags |= 2,
        ht(t),
        t.memoizedState = null,
        e
    }
    function h0(e, t, l) {
        var a = t.pendingProps
          , n = (t.flags & 128) !== 0;
        if (t.flags &= -129,
        e === null) {
            if (ce) {
                if (a.mode === "hidden")
                    return e = ru(t, a),
                    t.lanes = 536870912,
                    ln(null, e);
                if (Zi(t),
                (e = Ae) ? (e = Io(e, At),
                e = e !== null && e.data === "&" ? e : null,
                e !== null && (t.memoizedState = {
                    dehydrated: e,
                    treeContext: al !== null ? {
                        id: _t,
                        overflow: wt
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                l = Tf(e),
                l.return = t,
                t.child = l,
                Xe = t,
                Ae = null)) : e = null,
                e === null)
                    throw ul(t);
                return t.lanes = 536870912,
                null
            }
            return ru(t, a)
        }
        var u = e.memoizedState;
        if (u !== null) {
            var i = u.dehydrated;
            if (Zi(t),
            n)
                if (t.flags & 256)
                    t.flags &= -257,
                    t = Lr(e, t, l);
                else if (t.memoizedState !== null)
                    t.child = e.child,
                    t.flags |= 128,
                    t = null;
                else
                    throw Error(f(558));
            else if (Be || ca(e, t, l, !1),
            n = (l & e.childLanes) !== 0,
            Be || n) {
                if (a = Se,
                a !== null && (i = Cs(a, l),
                i !== 0 && i !== u.retryLane))
                    throw u.retryLane = i,
                    _l(e, i),
                    it(a, e, i),
                    dc;
                Su(),
                t = Lr(e, t, l)
            } else
                e = u.treeContext,
                Ae = Et(i.nextSibling),
                Xe = t,
                ce = !0,
                nl = null,
                At = !1,
                e !== null && jf(t, e),
                t = ru(t, a),
                t.flags |= 4096;
            return t
        }
        return e = Lt(e.child, {
            mode: a.mode,
            children: a.children
        }),
        e.ref = t.ref,
        t.child = e,
        e.return = t,
        e
    }
    function ou(e, t) {
        var l = t.ref;
        if (l === null)
            e !== null && e.ref !== null && (t.flags |= 4194816);
        else {
            if (typeof l != "function" && typeof l != "object")
                throw Error(f(284));
            (e === null || e.ref !== l) && (t.flags |= 4194816)
        }
    }
    function hc(e, t, l, a, n) {
        return Hl(t),
        l = Ji(e, t, l, a, void 0, n),
        a = ki(),
        e !== null && !Be ? ($i(e, t, n),
        Zt(e, t, n)) : (ce && a && Ci(t),
        t.flags |= 1,
        Ke(e, t, l, n),
        t.child)
    }
    function Yr(e, t, l, a, n, u) {
        return Hl(t),
        t.updateQueue = null,
        l = Vf(t, a, l, n),
        Gf(e),
        a = ki(),
        e !== null && !Be ? ($i(e, t, u),
        Zt(e, t, u)) : (ce && a && Ci(t),
        t.flags |= 1,
        Ke(e, t, l, u),
        t.child)
    }
    function Qr(e, t, l, a, n) {
        if (Hl(t),
        t.stateNode === null) {
            var u = aa
              , i = l.contextType;
            typeof i == "object" && i !== null && (u = Ze(i)),
            u = new l(a,u),
            t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null,
            u.updater = rc,
            t.stateNode = u,
            u._reactInternals = t,
            u = t.stateNode,
            u.props = a,
            u.state = t.memoizedState,
            u.refs = {},
            Li(t),
            i = l.contextType,
            u.context = typeof i == "object" && i !== null ? Ze(i) : aa,
            u.state = t.memoizedState,
            i = l.getDerivedStateFromProps,
            typeof i == "function" && (fc(t, l, i, a),
            u.state = t.memoizedState),
            typeof l.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (i = u.state,
            typeof u.componentWillMount == "function" && u.componentWillMount(),
            typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(),
            i !== u.state && rc.enqueueReplaceState(u, u.state, null),
            Fa(t, a, u, n),
            Wa(),
            u.state = t.memoizedState),
            typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            a = !0
        } else if (e === null) {
            u = t.stateNode;
            var s = t.memoizedProps
              , o = Ql(l, s);
            u.props = o;
            var g = u.context
              , N = l.contextType;
            i = aa,
            typeof N == "object" && N !== null && (i = Ze(N));
            var C = l.getDerivedStateFromProps;
            N = typeof C == "function" || typeof u.getSnapshotBeforeUpdate == "function",
            s = t.pendingProps !== s,
            N || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (s || g !== i) && zr(t, u, a, i),
            cl = !1;
            var v = t.memoizedState;
            u.state = v,
            Fa(t, a, u, n),
            Wa(),
            g = t.memoizedState,
            s || v !== g || cl ? (typeof C == "function" && (fc(t, l, C, a),
            g = t.memoizedState),
            (o = cl || Er(t, l, o, a, v, g, i)) ? (N || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(),
            typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()),
            typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            t.memoizedProps = a,
            t.memoizedState = g),
            u.props = a,
            u.state = g,
            u.context = i,
            a = o) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            a = !1)
        } else {
            u = t.stateNode,
            Yi(e, t),
            i = t.memoizedProps,
            N = Ql(l, i),
            u.props = N,
            C = t.pendingProps,
            v = u.context,
            g = l.contextType,
            o = aa,
            typeof g == "object" && g !== null && (o = Ze(g)),
            s = l.getDerivedStateFromProps,
            (g = typeof s == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== C || v !== o) && zr(t, u, a, o),
            cl = !1,
            v = t.memoizedState,
            u.state = v,
            Fa(t, a, u, n),
            Wa();
            var x = t.memoizedState;
            i !== C || v !== x || cl || e !== null && e.dependencies !== null && Kn(e.dependencies) ? (typeof s == "function" && (fc(t, l, s, a),
            x = t.memoizedState),
            (N = cl || Er(t, l, N, a, v, x, o) || e !== null && e.dependencies !== null && Kn(e.dependencies)) ? (g || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, x, o),
            typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(a, x, o)),
            typeof u.componentDidUpdate == "function" && (t.flags |= 4),
            typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || i === e.memoizedProps && v === e.memoizedState || (t.flags |= 4),
            typeof u.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024),
            t.memoizedProps = a,
            t.memoizedState = x),
            u.props = a,
            u.state = x,
            u.context = o,
            a = N) : (typeof u.componentDidUpdate != "function" || i === e.memoizedProps && v === e.memoizedState || (t.flags |= 4),
            typeof u.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024),
            a = !1)
        }
        return u = a,
        ou(e, t),
        a = (t.flags & 128) !== 0,
        u || a ? (u = t.stateNode,
        l = a && typeof l.getDerivedStateFromError != "function" ? null : u.render(),
        t.flags |= 1,
        e !== null && a ? (t.child = Ll(t, e.child, null, n),
        t.child = Ll(t, null, l, n)) : Ke(e, t, l, n),
        t.memoizedState = u.state,
        e = t.child) : e = Zt(e, t, n),
        e
    }
    function Gr(e, t, l, a) {
        return Dl(),
        t.flags |= 256,
        Ke(e, t, l, a),
        t.child
    }
    var mc = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };
    function yc(e) {
        return {
            baseLanes: e,
            cachePool: _f()
        }
    }
    function pc(e, t, l) {
        return e = e !== null ? e.childLanes & ~l : 0,
        t && (e |= yt),
        e
    }
    function Vr(e, t, l) {
        var a = t.pendingProps, n = !1, u = (t.flags & 128) !== 0, i;
        if ((i = u) || (i = e !== null && e.memoizedState === null ? !1 : (De.current & 2) !== 0),
        i && (n = !0,
        t.flags &= -129),
        i = (t.flags & 32) !== 0,
        t.flags &= -33,
        e === null) {
            if (ce) {
                if (n ? rl(t) : ol(),
                (e = Ae) ? (e = Io(e, At),
                e = e !== null && e.data !== "&" ? e : null,
                e !== null && (t.memoizedState = {
                    dehydrated: e,
                    treeContext: al !== null ? {
                        id: _t,
                        overflow: wt
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                l = Tf(e),
                l.return = t,
                t.child = l,
                Xe = t,
                Ae = null)) : e = null,
                e === null)
                    throw ul(t);
                return Ic(e) ? t.lanes = 32 : t.lanes = 536870912,
                null
            }
            var s = a.children;
            return a = a.fallback,
            n ? (ol(),
            n = t.mode,
            s = du({
                mode: "hidden",
                children: s
            }, n),
            a = wl(a, n, l, null),
            s.return = t,
            a.return = t,
            s.sibling = a,
            t.child = s,
            a = t.child,
            a.memoizedState = yc(l),
            a.childLanes = pc(e, i, l),
            t.memoizedState = mc,
            ln(null, a)) : (rl(t),
            gc(t, s))
        }
        var o = e.memoizedState;
        if (o !== null && (s = o.dehydrated,
        s !== null)) {
            if (u)
                t.flags & 256 ? (rl(t),
                t.flags &= -257,
                t = vc(e, t, l)) : t.memoizedState !== null ? (ol(),
                t.child = e.child,
                t.flags |= 128,
                t = null) : (ol(),
                s = a.fallback,
                n = t.mode,
                a = du({
                    mode: "visible",
                    children: a.children
                }, n),
                s = wl(s, n, l, null),
                s.flags |= 2,
                a.return = t,
                s.return = t,
                a.sibling = s,
                t.child = a,
                Ll(t, e.child, null, l),
                a = t.child,
                a.memoizedState = yc(l),
                a.childLanes = pc(e, i, l),
                t.memoizedState = mc,
                t = ln(null, a));
            else if (rl(t),
            Ic(s)) {
                if (i = s.nextSibling && s.nextSibling.dataset,
                i)
                    var g = i.dgst;
                i = g,
                a = Error(f(419)),
                a.stack = "",
                a.digest = i,
                Xa({
                    value: a,
                    source: null,
                    stack: null
                }),
                t = vc(e, t, l)
            } else if (Be || ca(e, t, l, !1),
            i = (l & e.childLanes) !== 0,
            Be || i) {
                if (i = Se,
                i !== null && (a = Cs(i, l),
                a !== 0 && a !== o.retryLane))
                    throw o.retryLane = a,
                    _l(e, a),
                    it(i, e, a),
                    dc;
                Fc(s) || Su(),
                t = vc(e, t, l)
            } else
                Fc(s) ? (t.flags |= 192,
                t.child = e.child,
                t = null) : (e = o.treeContext,
                Ae = Et(s.nextSibling),
                Xe = t,
                ce = !0,
                nl = null,
                At = !1,
                e !== null && jf(t, e),
                t = gc(t, a.children),
                t.flags |= 4096);
            return t
        }
        return n ? (ol(),
        s = a.fallback,
        n = t.mode,
        o = e.child,
        g = o.sibling,
        a = Lt(o, {
            mode: "hidden",
            children: a.children
        }),
        a.subtreeFlags = o.subtreeFlags & 65011712,
        g !== null ? s = Lt(g, s) : (s = wl(s, n, l, null),
        s.flags |= 2),
        s.return = t,
        a.return = t,
        a.sibling = s,
        t.child = a,
        ln(null, a),
        a = t.child,
        s = e.child.memoizedState,
        s === null ? s = yc(l) : (n = s.cachePool,
        n !== null ? (o = Ue._currentValue,
        n = n.parent !== o ? {
            parent: o,
            pool: o
        } : n) : n = _f(),
        s = {
            baseLanes: s.baseLanes | l,
            cachePool: n
        }),
        a.memoizedState = s,
        a.childLanes = pc(e, i, l),
        t.memoizedState = mc,
        ln(e.child, a)) : (rl(t),
        l = e.child,
        e = l.sibling,
        l = Lt(l, {
            mode: "visible",
            children: a.children
        }),
        l.return = t,
        l.sibling = null,
        e !== null && (i = t.deletions,
        i === null ? (t.deletions = [e],
        t.flags |= 16) : i.push(e)),
        t.child = l,
        t.memoizedState = null,
        l)
    }
    function gc(e, t) {
        return t = du({
            mode: "visible",
            children: t
        }, e.mode),
        t.return = e,
        e.child = t
    }
    function du(e, t) {
        return e = ot(22, e, null, t),
        e.lanes = 0,
        e
    }
    function vc(e, t, l) {
        return Ll(t, e.child, null, l),
        e = gc(t, t.pendingProps.children),
        e.flags |= 2,
        t.memoizedState = null,
        e
    }
    function Xr(e, t, l) {
        e.lanes |= t;
        var a = e.alternate;
        a !== null && (a.lanes |= t),
        Di(e.return, t, l)
    }
    function bc(e, t, l, a, n, u) {
        var i = e.memoizedState;
        i === null ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: a,
            tail: l,
            tailMode: n,
            treeForkCount: u
        } : (i.isBackwards = t,
        i.rendering = null,
        i.renderingStartTime = 0,
        i.last = a,
        i.tail = l,
        i.tailMode = n,
        i.treeForkCount = u)
    }
    function Zr(e, t, l) {
        var a = t.pendingProps
          , n = a.revealOrder
          , u = a.tail;
        a = a.children;
        var i = De.current
          , s = (i & 2) !== 0;
        if (s ? (i = i & 1 | 2,
        t.flags |= 128) : i &= 1,
        R(De, i),
        Ke(e, t, a, l),
        a = ce ? Va : 0,
        !s && e !== null && (e.flags & 128) !== 0)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && Xr(e, l, t);
                else if (e.tag === 19)
                    Xr(e, l, t);
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
        switch (n) {
        case "forwards":
            for (l = t.child,
            n = null; l !== null; )
                e = l.alternate,
                e !== null && eu(e) === null && (n = l),
                l = l.sibling;
            l = n,
            l === null ? (n = t.child,
            t.child = null) : (n = l.sibling,
            l.sibling = null),
            bc(t, !1, n, l, u, a);
            break;
        case "backwards":
        case "unstable_legacy-backwards":
            for (l = null,
            n = t.child,
            t.child = null; n !== null; ) {
                if (e = n.alternate,
                e !== null && eu(e) === null) {
                    t.child = n;
                    break
                }
                e = n.sibling,
                n.sibling = l,
                l = n,
                n = e
            }
            bc(t, !0, l, null, u, a);
            break;
        case "together":
            bc(t, !1, null, null, void 0, a);
            break;
        default:
            t.memoizedState = null
        }
        return t.child
    }
    function Zt(e, t, l) {
        if (e !== null && (t.dependencies = e.dependencies),
        ml |= t.lanes,
        (l & t.childLanes) === 0)
            if (e !== null) {
                if (ca(e, t, l, !1),
                (l & t.childLanes) === 0)
                    return null
            } else
                return null;
        if (e !== null && t.child !== e.child)
            throw Error(f(153));
        if (t.child !== null) {
            for (e = t.child,
            l = Lt(e, e.pendingProps),
            t.child = l,
            l.return = t; e.sibling !== null; )
                e = e.sibling,
                l = l.sibling = Lt(e, e.pendingProps),
                l.return = t;
            l.sibling = null
        }
        return t.child
    }
    function xc(e, t) {
        return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies,
        !!(e !== null && Kn(e)))
    }
    function m0(e, t, l) {
        switch (t.tag) {
        case 3:
            We(t, t.stateNode.containerInfo),
            il(t, Ue, e.memoizedState.cache),
            Dl();
            break;
        case 27:
        case 5:
            Ca(t);
            break;
        case 4:
            We(t, t.stateNode.containerInfo);
            break;
        case 10:
            il(t, t.type, t.memoizedProps.value);
            break;
        case 31:
            if (t.memoizedState !== null)
                return t.flags |= 128,
                Zi(t),
                null;
            break;
        case 13:
            var a = t.memoizedState;
            if (a !== null)
                return a.dehydrated !== null ? (rl(t),
                t.flags |= 128,
                null) : (l & t.child.childLanes) !== 0 ? Vr(e, t, l) : (rl(t),
                e = Zt(e, t, l),
                e !== null ? e.sibling : null);
            rl(t);
            break;
        case 19:
            var n = (e.flags & 128) !== 0;
            if (a = (l & t.childLanes) !== 0,
            a || (ca(e, t, l, !1),
            a = (l & t.childLanes) !== 0),
            n) {
                if (a)
                    return Zr(e, t, l);
                t.flags |= 128
            }
            if (n = t.memoizedState,
            n !== null && (n.rendering = null,
            n.tail = null,
            n.lastEffect = null),
            R(De, De.current),
            a)
                break;
            return null;
        case 22:
            return t.lanes = 0,
            qr(e, t, l, t.pendingProps);
        case 24:
            il(t, Ue, e.memoizedState.cache)
        }
        return Zt(e, t, l)
    }
    function Kr(e, t, l) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps)
                Be = !0;
            else {
                if (!xc(e, l) && (t.flags & 128) === 0)
                    return Be = !1,
                    m0(e, t, l);
                Be = (e.flags & 131072) !== 0
            }
        else
            Be = !1,
            ce && (t.flags & 1048576) !== 0 && Af(t, Va, t.index);
        switch (t.lanes = 0,
        t.tag) {
        case 16:
            e: {
                var a = t.pendingProps;
                if (e = ql(t.elementType),
                t.type = e,
                typeof e == "function")
                    ji(e) ? (a = Ql(e, a),
                    t.tag = 1,
                    t = Qr(null, t, e, a, l)) : (t.tag = 0,
                    t = hc(null, t, e, a, l));
                else {
                    if (e != null) {
                        var n = e.$$typeof;
                        if (n === Oe) {
                            t.tag = 11,
                            t = Rr(null, t, e, a, l);
                            break e
                        } else if (n === L) {
                            t.tag = 14,
                            t = Hr(null, t, e, a, l);
                            break e
                        }
                    }
                    throw t = Pe(e) || e,
                    Error(f(306, t, ""))
                }
            }
            return t;
        case 0:
            return hc(e, t, t.type, t.pendingProps, l);
        case 1:
            return a = t.type,
            n = Ql(a, t.pendingProps),
            Qr(e, t, a, n, l);
        case 3:
            e: {
                if (We(t, t.stateNode.containerInfo),
                e === null)
                    throw Error(f(387));
                a = t.pendingProps;
                var u = t.memoizedState;
                n = u.element,
                Yi(e, t),
                Fa(t, a, null, l);
                var i = t.memoizedState;
                if (a = i.cache,
                il(t, Ue, a),
                a !== u.cache && Ri(t, [Ue], l, !0),
                Wa(),
                a = i.element,
                u.isDehydrated)
                    if (u = {
                        element: a,
                        isDehydrated: !1,
                        cache: i.cache
                    },
                    t.updateQueue.baseState = u,
                    t.memoizedState = u,
                    t.flags & 256) {
                        t = Gr(e, t, a, l);
                        break e
                    } else if (a !== n) {
                        n = St(Error(f(424)), t),
                        Xa(n),
                        t = Gr(e, t, a, l);
                        break e
                    } else {
                        switch (e = t.stateNode.containerInfo,
                        e.nodeType) {
                        case 9:
                            e = e.body;
                            break;
                        default:
                            e = e.nodeName === "HTML" ? e.ownerDocument.body : e
                        }
                        for (Ae = Et(e.firstChild),
                        Xe = t,
                        ce = !0,
                        nl = null,
                        At = !0,
                        l = qf(t, null, a, l),
                        t.child = l; l; )
                            l.flags = l.flags & -3 | 4096,
                            l = l.sibling
                    }
                else {
                    if (Dl(),
                    a === n) {
                        t = Zt(e, t, l);
                        break e
                    }
                    Ke(e, t, a, l)
                }
                t = t.child
            }
            return t;
        case 26:
            return ou(e, t),
            e === null ? (l = nd(t.type, null, t.pendingProps, null)) ? t.memoizedState = l : ce || (l = t.type,
            e = t.pendingProps,
            a = Cu(le.current).createElement(l),
            a[Ve] = t,
            a[et] = e,
            Je(a, l, e),
            Qe(a),
            t.stateNode = a) : t.memoizedState = nd(t.type, e.memoizedProps, t.pendingProps, e.memoizedState),
            null;
        case 27:
            return Ca(t),
            e === null && ce && (a = t.stateNode = td(t.type, t.pendingProps, le.current),
            Xe = t,
            At = !0,
            n = Ae,
            bl(t.type) ? (Pc = n,
            Ae = Et(a.firstChild)) : Ae = n),
            Ke(e, t, t.pendingProps.children, l),
            ou(e, t),
            e === null && (t.flags |= 4194304),
            t.child;
        case 5:
            return e === null && ce && ((n = a = Ae) && (a = X0(a, t.type, t.pendingProps, At),
            a !== null ? (t.stateNode = a,
            Xe = t,
            Ae = Et(a.firstChild),
            At = !1,
            n = !0) : n = !1),
            n || ul(t)),
            Ca(t),
            n = t.type,
            u = t.pendingProps,
            i = e !== null ? e.memoizedProps : null,
            a = u.children,
            kc(n, u) ? a = null : i !== null && kc(n, i) && (t.flags |= 32),
            t.memoizedState !== null && (n = Ji(e, t, u0, null, null, l),
            vn._currentValue = n),
            ou(e, t),
            Ke(e, t, a, l),
            t.child;
        case 6:
            return e === null && ce && ((e = l = Ae) && (l = Z0(l, t.pendingProps, At),
            l !== null ? (t.stateNode = l,
            Xe = t,
            Ae = null,
            e = !0) : e = !1),
            e || ul(t)),
            null;
        case 13:
            return Vr(e, t, l);
        case 4:
            return We(t, t.stateNode.containerInfo),
            a = t.pendingProps,
            e === null ? t.child = Ll(t, null, a, l) : Ke(e, t, a, l),
            t.child;
        case 11:
            return Rr(e, t, t.type, t.pendingProps, l);
        case 7:
            return Ke(e, t, t.pendingProps, l),
            t.child;
        case 8:
            return Ke(e, t, t.pendingProps.children, l),
            t.child;
        case 12:
            return Ke(e, t, t.pendingProps.children, l),
            t.child;
        case 10:
            return a = t.pendingProps,
            il(t, t.type, a.value),
            Ke(e, t, a.children, l),
            t.child;
        case 9:
            return n = t.type._context,
            a = t.pendingProps.children,
            Hl(t),
            n = Ze(n),
            a = a(n),
            t.flags |= 1,
            Ke(e, t, a, l),
            t.child;
        case 14:
            return Hr(e, t, t.type, t.pendingProps, l);
        case 15:
            return Ur(e, t, t.type, t.pendingProps, l);
        case 19:
            return Zr(e, t, l);
        case 31:
            return h0(e, t, l);
        case 22:
            return qr(e, t, l, t.pendingProps);
        case 24:
            return Hl(t),
            a = Ze(Ue),
            e === null ? (n = qi(),
            n === null && (n = Se,
            u = Hi(),
            n.pooledCache = u,
            u.refCount++,
            u !== null && (n.pooledCacheLanes |= l),
            n = u),
            t.memoizedState = {
                parent: a,
                cache: n
            },
            Li(t),
            il(t, Ue, n)) : ((e.lanes & l) !== 0 && (Yi(e, t),
            Fa(t, null, null, l),
            Wa()),
            n = e.memoizedState,
            u = t.memoizedState,
            n.parent !== a ? (n = {
                parent: a,
                cache: a
            },
            t.memoizedState = n,
            t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n),
            il(t, Ue, a)) : (a = u.cache,
            il(t, Ue, a),
            a !== n.cache && Ri(t, [Ue], l, !0))),
            Ke(e, t, t.pendingProps.children, l),
            t.child;
        case 29:
            throw t.pendingProps
        }
        throw Error(f(156, t.tag))
    }
    function Kt(e) {
        e.flags |= 4
    }
    function Sc(e, t, l, a, n) {
        if ((t = (e.mode & 32) !== 0) && (t = !1),
        t) {
            if (e.flags |= 16777216,
            (n & 335544128) === n)
                if (e.stateNode.complete)
                    e.flags |= 8192;
                else if (xo())
                    e.flags |= 8192;
                else
                    throw Bl = Wn,
                    Bi
        } else
            e.flags &= -16777217
    }
    function Jr(e, t) {
        if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
            e.flags &= -16777217;
        else if (e.flags |= 16777216,
        !fd(t))
            if (xo())
                e.flags |= 8192;
            else
                throw Bl = Wn,
                Bi
    }
    function hu(e, t) {
        t !== null && (e.flags |= 4),
        e.flags & 16384 && (t = e.tag !== 22 ? js() : 536870912,
        e.lanes |= t,
        ba |= t)
    }
    function an(e, t) {
        if (!ce)
            switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var l = null; t !== null; )
                    t.alternate !== null && (l = t),
                    t = t.sibling;
                l === null ? e.tail = null : l.sibling = null;
                break;
            case "collapsed":
                l = e.tail;
                for (var a = null; l !== null; )
                    l.alternate !== null && (a = l),
                    l = l.sibling;
                a === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : a.sibling = null
            }
    }
    function je(e) {
        var t = e.alternate !== null && e.alternate.child === e.child
          , l = 0
          , a = 0;
        if (t)
            for (var n = e.child; n !== null; )
                l |= n.lanes | n.childLanes,
                a |= n.subtreeFlags & 65011712,
                a |= n.flags & 65011712,
                n.return = e,
                n = n.sibling;
        else
            for (n = e.child; n !== null; )
                l |= n.lanes | n.childLanes,
                a |= n.subtreeFlags,
                a |= n.flags,
                n.return = e,
                n = n.sibling;
        return e.subtreeFlags |= a,
        e.childLanes = l,
        t
    }
    function y0(e, t, l) {
        var a = t.pendingProps;
        switch (Oi(t),
        t.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return je(t),
            null;
        case 1:
            return je(t),
            null;
        case 3:
            return l = t.stateNode,
            a = null,
            e !== null && (a = e.memoizedState.cache),
            t.memoizedState.cache !== a && (t.flags |= 2048),
            Gt(Ue),
            we(),
            l.pendingContext && (l.context = l.pendingContext,
            l.pendingContext = null),
            (e === null || e.child === null) && (ia(t) ? Kt(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024,
            _i())),
            je(t),
            null;
        case 26:
            var n = t.type
              , u = t.memoizedState;
            return e === null ? (Kt(t),
            u !== null ? (je(t),
            Jr(t, u)) : (je(t),
            Sc(t, n, null, a, l))) : u ? u !== e.memoizedState ? (Kt(t),
            je(t),
            Jr(t, u)) : (je(t),
            t.flags &= -16777217) : (e = e.memoizedProps,
            e !== a && Kt(t),
            je(t),
            Sc(t, n, e, a, l)),
            null;
        case 27:
            if (An(t),
            l = le.current,
            n = t.type,
            e !== null && t.stateNode != null)
                e.memoizedProps !== a && Kt(t);
            else {
                if (!a) {
                    if (t.stateNode === null)
                        throw Error(f(166));
                    return je(t),
                    null
                }
                e = q.current,
                ia(t) ? Ef(t) : (e = td(n, a, l),
                t.stateNode = e,
                Kt(t))
            }
            return je(t),
            null;
        case 5:
            if (An(t),
            n = t.type,
            e !== null && t.stateNode != null)
                e.memoizedProps !== a && Kt(t);
            else {
                if (!a) {
                    if (t.stateNode === null)
                        throw Error(f(166));
                    return je(t),
                    null
                }
                if (u = q.current,
                ia(t))
                    Ef(t);
                else {
                    var i = Cu(le.current);
                    switch (u) {
                    case 1:
                        u = i.createElementNS("http://www.w3.org/2000/svg", n);
                        break;
                    case 2:
                        u = i.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                        break;
                    default:
                        switch (n) {
                        case "svg":
                            u = i.createElementNS("http://www.w3.org/2000/svg", n);
                            break;
                        case "math":
                            u = i.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                            break;
                        case "script":
                            u = i.createElement("div"),
                            u.innerHTML = "<script><\/script>",
                            u = u.removeChild(u.firstChild);
                            break;
                        case "select":
                            u = typeof a.is == "string" ? i.createElement("select", {
                                is: a.is
                            }) : i.createElement("select"),
                            a.multiple ? u.multiple = !0 : a.size && (u.size = a.size);
                            break;
                        default:
                            u = typeof a.is == "string" ? i.createElement(n, {
                                is: a.is
                            }) : i.createElement(n)
                        }
                    }
                    u[Ve] = t,
                    u[et] = a;
                    e: for (i = t.child; i !== null; ) {
                        if (i.tag === 5 || i.tag === 6)
                            u.appendChild(i.stateNode);
                        else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                            i.child.return = i,
                            i = i.child;
                            continue
                        }
                        if (i === t)
                            break e;
                        for (; i.sibling === null; ) {
                            if (i.return === null || i.return === t)
                                break e;
                            i = i.return
                        }
                        i.sibling.return = i.return,
                        i = i.sibling
                    }
                    t.stateNode = u;
                    e: switch (Je(u, n, a),
                    n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        a = !!a.autoFocus;
                        break e;
                    case "img":
                        a = !0;
                        break e;
                    default:
                        a = !1
                    }
                    a && Kt(t)
                }
            }
            return je(t),
            Sc(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, l),
            null;
        case 6:
            if (e && t.stateNode != null)
                e.memoizedProps !== a && Kt(t);
            else {
                if (typeof a != "string" && t.stateNode === null)
                    throw Error(f(166));
                if (e = le.current,
                ia(t)) {
                    if (e = t.stateNode,
                    l = t.memoizedProps,
                    a = null,
                    n = Xe,
                    n !== null)
                        switch (n.tag) {
                        case 27:
                        case 5:
                            a = n.memoizedProps
                        }
                    e[Ve] = t,
                    e = !!(e.nodeValue === l || a !== null && a.suppressHydrationWarning === !0 || Xo(e.nodeValue, l)),
                    e || ul(t, !0)
                } else
                    e = Cu(e).createTextNode(a),
                    e[Ve] = t,
                    t.stateNode = e
            }
            return je(t),
            null;
        case 31:
            if (l = t.memoizedState,
            e === null || e.memoizedState !== null) {
                if (a = ia(t),
                l !== null) {
                    if (e === null) {
                        if (!a)
                            throw Error(f(318));
                        if (e = t.memoizedState,
                        e = e !== null ? e.dehydrated : null,
                        !e)
                            throw Error(f(557));
                        e[Ve] = t
                    } else
                        Dl(),
                        (t.flags & 128) === 0 && (t.memoizedState = null),
                        t.flags |= 4;
                    je(t),
                    e = !1
                } else
                    l = _i(),
                    e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l),
                    e = !0;
                if (!e)
                    return t.flags & 256 ? (ht(t),
                    t) : (ht(t),
                    null);
                if ((t.flags & 128) !== 0)
                    throw Error(f(558))
            }
            return je(t),
            null;
        case 13:
            if (a = t.memoizedState,
            e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (n = ia(t),
                a !== null && a.dehydrated !== null) {
                    if (e === null) {
                        if (!n)
                            throw Error(f(318));
                        if (n = t.memoizedState,
                        n = n !== null ? n.dehydrated : null,
                        !n)
                            throw Error(f(317));
                        n[Ve] = t
                    } else
                        Dl(),
                        (t.flags & 128) === 0 && (t.memoizedState = null),
                        t.flags |= 4;
                    je(t),
                    n = !1
                } else
                    n = _i(),
                    e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n),
                    n = !0;
                if (!n)
                    return t.flags & 256 ? (ht(t),
                    t) : (ht(t),
                    null)
            }
            return ht(t),
            (t.flags & 128) !== 0 ? (t.lanes = l,
            t) : (l = a !== null,
            e = e !== null && e.memoizedState !== null,
            l && (a = t.child,
            n = null,
            a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool),
            u = null,
            a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool),
            u !== n && (a.flags |= 2048)),
            l !== e && l && (t.child.flags |= 8192),
            hu(t, t.updateQueue),
            je(t),
            null);
        case 4:
            return we(),
            e === null && Vc(t.stateNode.containerInfo),
            je(t),
            null;
        case 10:
            return Gt(t.type),
            je(t),
            null;
        case 19:
            if (O(De),
            a = t.memoizedState,
            a === null)
                return je(t),
                null;
            if (n = (t.flags & 128) !== 0,
            u = a.rendering,
            u === null)
                if (n)
                    an(a, !1);
                else {
                    if (_e !== 0 || e !== null && (e.flags & 128) !== 0)
                        for (e = t.child; e !== null; ) {
                            if (u = eu(e),
                            u !== null) {
                                for (t.flags |= 128,
                                an(a, !1),
                                e = u.updateQueue,
                                t.updateQueue = e,
                                hu(t, e),
                                t.subtreeFlags = 0,
                                e = l,
                                l = t.child; l !== null; )
                                    Sf(l, e),
                                    l = l.sibling;
                                return R(De, De.current & 1 | 2),
                                ce && Yt(t, a.treeForkCount),
                                t.child
                            }
                            e = e.sibling
                        }
                    a.tail !== null && ct() > vu && (t.flags |= 128,
                    n = !0,
                    an(a, !1),
                    t.lanes = 4194304)
                }
            else {
                if (!n)
                    if (e = eu(u),
                    e !== null) {
                        if (t.flags |= 128,
                        n = !0,
                        e = e.updateQueue,
                        t.updateQueue = e,
                        hu(t, e),
                        an(a, !0),
                        a.tail === null && a.tailMode === "hidden" && !u.alternate && !ce)
                            return je(t),
                            null
                    } else
                        2 * ct() - a.renderingStartTime > vu && l !== 536870912 && (t.flags |= 128,
                        n = !0,
                        an(a, !1),
                        t.lanes = 4194304);
                a.isBackwards ? (u.sibling = t.child,
                t.child = u) : (e = a.last,
                e !== null ? e.sibling = u : t.child = u,
                a.last = u)
            }
            return a.tail !== null ? (e = a.tail,
            a.rendering = e,
            a.tail = e.sibling,
            a.renderingStartTime = ct(),
            e.sibling = null,
            l = De.current,
            R(De, n ? l & 1 | 2 : l & 1),
            ce && Yt(t, a.treeForkCount),
            e) : (je(t),
            null);
        case 22:
        case 23:
            return ht(t),
            Xi(),
            a = t.memoizedState !== null,
            e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192),
            a ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (je(t),
            t.subtreeFlags & 6 && (t.flags |= 8192)) : je(t),
            l = t.updateQueue,
            l !== null && hu(t, l.retryQueue),
            l = null,
            e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool),
            a = null,
            t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool),
            a !== l && (t.flags |= 2048),
            e !== null && O(Ul),
            null;
        case 24:
            return l = null,
            e !== null && (l = e.memoizedState.cache),
            t.memoizedState.cache !== l && (t.flags |= 2048),
            Gt(Ue),
            je(t),
            null;
        case 25:
            return null;
        case 30:
            return null
        }
        throw Error(f(156, t.tag))
    }
    function p0(e, t) {
        switch (Oi(t),
        t.tag) {
        case 1:
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 3:
            return Gt(Ue),
            we(),
            e = t.flags,
            (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 26:
        case 27:
        case 5:
            return An(t),
            null;
        case 31:
            if (t.memoizedState !== null) {
                if (ht(t),
                t.alternate === null)
                    throw Error(f(340));
                Dl()
            }
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 13:
            if (ht(t),
            e = t.memoizedState,
            e !== null && e.dehydrated !== null) {
                if (t.alternate === null)
                    throw Error(f(340));
                Dl()
            }
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 19:
            return O(De),
            null;
        case 4:
            return we(),
            null;
        case 10:
            return Gt(t.type),
            null;
        case 22:
        case 23:
            return ht(t),
            Xi(),
            e !== null && O(Ul),
            e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 24:
            return Gt(Ue),
            null;
        case 25:
            return null;
        default:
            return null
        }
    }
    function kr(e, t) {
        switch (Oi(t),
        t.tag) {
        case 3:
            Gt(Ue),
            we();
            break;
        case 26:
        case 27:
        case 5:
            An(t);
            break;
        case 4:
            we();
            break;
        case 31:
            t.memoizedState !== null && ht(t);
            break;
        case 13:
            ht(t);
            break;
        case 19:
            O(De);
            break;
        case 10:
            Gt(t.type);
            break;
        case 22:
        case 23:
            ht(t),
            Xi(),
            e !== null && O(Ul);
            break;
        case 24:
            Gt(Ue)
        }
    }
    function nn(e, t) {
        try {
            var l = t.updateQueue
              , a = l !== null ? l.lastEffect : null;
            if (a !== null) {
                var n = a.next;
                l = n;
                do {
                    if ((l.tag & e) === e) {
                        a = void 0;
                        var u = l.create
                          , i = l.inst;
                        a = u(),
                        i.destroy = a
                    }
                    l = l.next
                } while (l !== n)
            }
        } catch (s) {
            ye(t, t.return, s)
        }
    }
    function dl(e, t, l) {
        try {
            var a = t.updateQueue
              , n = a !== null ? a.lastEffect : null;
            if (n !== null) {
                var u = n.next;
                a = u;
                do {
                    if ((a.tag & e) === e) {
                        var i = a.inst
                          , s = i.destroy;
                        if (s !== void 0) {
                            i.destroy = void 0,
                            n = t;
                            var o = l
                              , g = s;
                            try {
                                g()
                            } catch (N) {
                                ye(n, o, N)
                            }
                        }
                    }
                    a = a.next
                } while (a !== u)
            }
        } catch (N) {
            ye(t, t.return, N)
        }
    }
    function $r(e) {
        var t = e.updateQueue;
        if (t !== null) {
            var l = e.stateNode;
            try {
                Lf(t, l)
            } catch (a) {
                ye(e, e.return, a)
            }
        }
    }
    function Wr(e, t, l) {
        l.props = Ql(e.type, e.memoizedProps),
        l.state = e.memoizedState;
        try {
            l.componentWillUnmount()
        } catch (a) {
            ye(e, t, a)
        }
    }
    function un(e, t) {
        try {
            var l = e.ref;
            if (l !== null) {
                switch (e.tag) {
                case 26:
                case 27:
                case 5:
                    var a = e.stateNode;
                    break;
                case 30:
                    a = e.stateNode;
                    break;
                default:
                    a = e.stateNode
                }
                typeof l == "function" ? e.refCleanup = l(a) : l.current = a
            }
        } catch (n) {
            ye(e, t, n)
        }
    }
    function Dt(e, t) {
        var l = e.ref
          , a = e.refCleanup;
        if (l !== null)
            if (typeof a == "function")
                try {
                    a()
                } catch (n) {
                    ye(e, t, n)
                } finally {
                    e.refCleanup = null,
                    e = e.alternate,
                    e != null && (e.refCleanup = null)
                }
            else if (typeof l == "function")
                try {
                    l(null)
                } catch (n) {
                    ye(e, t, n)
                }
            else
                l.current = null
    }
    function Fr(e) {
        var t = e.type
          , l = e.memoizedProps
          , a = e.stateNode;
        try {
            e: switch (t) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                l.autoFocus && a.focus();
                break e;
            case "img":
                l.src ? a.src = l.src : l.srcSet && (a.srcset = l.srcSet)
            }
        } catch (n) {
            ye(e, e.return, n)
        }
    }
    function Tc(e, t, l) {
        try {
            var a = e.stateNode;
            B0(a, e.type, l, t),
            a[et] = t
        } catch (n) {
            ye(e, e.return, n)
        }
    }
    function Ir(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && bl(e.type) || e.tag === 4
    }
    function Nc(e) {
        e: for (; ; ) {
            for (; e.sibling === null; ) {
                if (e.return === null || Ir(e.return))
                    return null;
                e = e.return
            }
            for (e.sibling.return = e.return,
            e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
                if (e.tag === 27 && bl(e.type) || e.flags & 2 || e.child === null || e.tag === 4)
                    continue e;
                e.child.return = e,
                e = e.child
            }
            if (!(e.flags & 2))
                return e.stateNode
        }
    }
    function Ac(e, t, l) {
        var a = e.tag;
        if (a === 5 || a === 6)
            e = e.stateNode,
            t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
            t.appendChild(e),
            l = l._reactRootContainer,
            l != null || t.onclick !== null || (t.onclick = qt));
        else if (a !== 4 && (a === 27 && bl(e.type) && (l = e.stateNode,
        t = null),
        e = e.child,
        e !== null))
            for (Ac(e, t, l),
            e = e.sibling; e !== null; )
                Ac(e, t, l),
                e = e.sibling
    }
    function mu(e, t, l) {
        var a = e.tag;
        if (a === 5 || a === 6)
            e = e.stateNode,
            t ? l.insertBefore(e, t) : l.appendChild(e);
        else if (a !== 4 && (a === 27 && bl(e.type) && (l = e.stateNode),
        e = e.child,
        e !== null))
            for (mu(e, t, l),
            e = e.sibling; e !== null; )
                mu(e, t, l),
                e = e.sibling
    }
    function Pr(e) {
        var t = e.stateNode
          , l = e.memoizedProps;
        try {
            for (var a = e.type, n = t.attributes; n.length; )
                t.removeAttributeNode(n[0]);
            Je(t, a, l),
            t[Ve] = e,
            t[et] = l
        } catch (u) {
            ye(e, e.return, u)
        }
    }
    var Jt = !1
      , Le = !1
      , jc = !1
      , eo = typeof WeakSet == "function" ? WeakSet : Set
      , Ge = null;
    function g0(e, t) {
        if (e = e.containerInfo,
        Kc = Hu,
        e = df(e),
        vi(e)) {
            if ("selectionStart"in e)
                var l = {
                    start: e.selectionStart,
                    end: e.selectionEnd
                };
            else
                e: {
                    l = (l = e.ownerDocument) && l.defaultView || window;
                    var a = l.getSelection && l.getSelection();
                    if (a && a.rangeCount !== 0) {
                        l = a.anchorNode;
                        var n = a.anchorOffset
                          , u = a.focusNode;
                        a = a.focusOffset;
                        try {
                            l.nodeType,
                            u.nodeType
                        } catch {
                            l = null;
                            break e
                        }
                        var i = 0
                          , s = -1
                          , o = -1
                          , g = 0
                          , N = 0
                          , C = e
                          , v = null;
                        t: for (; ; ) {
                            for (var x; C !== l || n !== 0 && C.nodeType !== 3 || (s = i + n),
                            C !== u || a !== 0 && C.nodeType !== 3 || (o = i + a),
                            C.nodeType === 3 && (i += C.nodeValue.length),
                            (x = C.firstChild) !== null; )
                                v = C,
                                C = x;
                            for (; ; ) {
                                if (C === e)
                                    break t;
                                if (v === l && ++g === n && (s = i),
                                v === u && ++N === a && (o = i),
                                (x = C.nextSibling) !== null)
                                    break;
                                C = v,
                                v = C.parentNode
                            }
                            C = x
                        }
                        l = s === -1 || o === -1 ? null : {
                            start: s,
                            end: o
                        }
                    } else
                        l = null
                }
            l = l || {
                start: 0,
                end: 0
            }
        } else
            l = null;
        for (Jc = {
            focusedElem: e,
            selectionRange: l
        },
        Hu = !1,
        Ge = t; Ge !== null; )
            if (t = Ge,
            e = t.child,
            (t.subtreeFlags & 1028) !== 0 && e !== null)
                e.return = t,
                Ge = e;
            else
                for (; Ge !== null; ) {
                    switch (t = Ge,
                    u = t.alternate,
                    e = t.flags,
                    t.tag) {
                    case 0:
                        if ((e & 4) !== 0 && (e = t.updateQueue,
                        e = e !== null ? e.events : null,
                        e !== null))
                            for (l = 0; l < e.length; l++)
                                n = e[l],
                                n.ref.impl = n.nextImpl;
                        break;
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if ((e & 1024) !== 0 && u !== null) {
                            e = void 0,
                            l = t,
                            n = u.memoizedProps,
                            u = u.memoizedState,
                            a = l.stateNode;
                            try {
                                var U = Ql(l.type, n);
                                e = a.getSnapshotBeforeUpdate(U, u),
                                a.__reactInternalSnapshotBeforeUpdate = e
                            } catch (X) {
                                ye(l, l.return, X)
                            }
                        }
                        break;
                    case 3:
                        if ((e & 1024) !== 0) {
                            if (e = t.stateNode.containerInfo,
                            l = e.nodeType,
                            l === 9)
                                Wc(e);
                            else if (l === 1)
                                switch (e.nodeName) {
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                    Wc(e);
                                    break;
                                default:
                                    e.textContent = ""
                                }
                        }
                        break;
                    case 5:
                    case 26:
                    case 27:
                    case 6:
                    case 4:
                    case 17:
                        break;
                    default:
                        if ((e & 1024) !== 0)
                            throw Error(f(163))
                    }
                    if (e = t.sibling,
                    e !== null) {
                        e.return = t.return,
                        Ge = e;
                        break
                    }
                    Ge = t.return
                }
    }
    function to(e, t, l) {
        var a = l.flags;
        switch (l.tag) {
        case 0:
        case 11:
        case 15:
            $t(e, l),
            a & 4 && nn(5, l);
            break;
        case 1:
            if ($t(e, l),
            a & 4)
                if (e = l.stateNode,
                t === null)
                    try {
                        e.componentDidMount()
                    } catch (i) {
                        ye(l, l.return, i)
                    }
                else {
                    var n = Ql(l.type, t.memoizedProps);
                    t = t.memoizedState;
                    try {
                        e.componentDidUpdate(n, t, e.__reactInternalSnapshotBeforeUpdate)
                    } catch (i) {
                        ye(l, l.return, i)
                    }
                }
            a & 64 && $r(l),
            a & 512 && un(l, l.return);
            break;
        case 3:
            if ($t(e, l),
            a & 64 && (e = l.updateQueue,
            e !== null)) {
                if (t = null,
                l.child !== null)
                    switch (l.child.tag) {
                    case 27:
                    case 5:
                        t = l.child.stateNode;
                        break;
                    case 1:
                        t = l.child.stateNode
                    }
                try {
                    Lf(e, t)
                } catch (i) {
                    ye(l, l.return, i)
                }
            }
            break;
        case 27:
            t === null && a & 4 && Pr(l);
        case 26:
        case 5:
            $t(e, l),
            t === null && a & 4 && Fr(l),
            a & 512 && un(l, l.return);
            break;
        case 12:
            $t(e, l);
            break;
        case 31:
            $t(e, l),
            a & 4 && no(e, l);
            break;
        case 13:
            $t(e, l),
            a & 4 && uo(e, l),
            a & 64 && (e = l.memoizedState,
            e !== null && (e = e.dehydrated,
            e !== null && (l = E0.bind(null, l),
            K0(e, l))));
            break;
        case 22:
            if (a = l.memoizedState !== null || Jt,
            !a) {
                t = t !== null && t.memoizedState !== null || Le,
                n = Jt;
                var u = Le;
                Jt = a,
                (Le = t) && !u ? Wt(e, l, (l.subtreeFlags & 8772) !== 0) : $t(e, l),
                Jt = n,
                Le = u
            }
            break;
        case 30:
            break;
        default:
            $t(e, l)
        }
    }
    function lo(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null,
        lo(t)),
        e.child = null,
        e.deletions = null,
        e.sibling = null,
        e.tag === 5 && (t = e.stateNode,
        t !== null && ti(t)),
        e.stateNode = null,
        e.return = null,
        e.dependencies = null,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.pendingProps = null,
        e.stateNode = null,
        e.updateQueue = null
    }
    var Ce = null
      , lt = !1;
    function kt(e, t, l) {
        for (l = l.child; l !== null; )
            ao(e, t, l),
            l = l.sibling
    }
    function ao(e, t, l) {
        if (st && typeof st.onCommitFiberUnmount == "function")
            try {
                st.onCommitFiberUnmount(Oa, l)
            } catch {}
        switch (l.tag) {
        case 26:
            Le || Dt(l, t),
            kt(e, t, l),
            l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode,
            l.parentNode.removeChild(l));
            break;
        case 27:
            Le || Dt(l, t);
            var a = Ce
              , n = lt;
            bl(l.type) && (Ce = l.stateNode,
            lt = !1),
            kt(e, t, l),
            yn(l.stateNode),
            Ce = a,
            lt = n;
            break;
        case 5:
            Le || Dt(l, t);
        case 6:
            if (a = Ce,
            n = lt,
            Ce = null,
            kt(e, t, l),
            Ce = a,
            lt = n,
            Ce !== null)
                if (lt)
                    try {
                        (Ce.nodeType === 9 ? Ce.body : Ce.nodeName === "HTML" ? Ce.ownerDocument.body : Ce).removeChild(l.stateNode)
                    } catch (u) {
                        ye(l, t, u)
                    }
                else
                    try {
                        Ce.removeChild(l.stateNode)
                    } catch (u) {
                        ye(l, t, u)
                    }
            break;
        case 18:
            Ce !== null && (lt ? (e = Ce,
            Wo(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, l.stateNode),
            za(e)) : Wo(Ce, l.stateNode));
            break;
        case 4:
            a = Ce,
            n = lt,
            Ce = l.stateNode.containerInfo,
            lt = !0,
            kt(e, t, l),
            Ce = a,
            lt = n;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            dl(2, l, t),
            Le || dl(4, l, t),
            kt(e, t, l);
            break;
        case 1:
            Le || (Dt(l, t),
            a = l.stateNode,
            typeof a.componentWillUnmount == "function" && Wr(l, t, a)),
            kt(e, t, l);
            break;
        case 21:
            kt(e, t, l);
            break;
        case 22:
            Le = (a = Le) || l.memoizedState !== null,
            kt(e, t, l),
            Le = a;
            break;
        default:
            kt(e, t, l)
        }
    }
    function no(e, t) {
        if (t.memoizedState === null && (e = t.alternate,
        e !== null && (e = e.memoizedState,
        e !== null))) {
            e = e.dehydrated;
            try {
                za(e)
            } catch (l) {
                ye(t, t.return, l)
            }
        }
    }
    function uo(e, t) {
        if (t.memoizedState === null && (e = t.alternate,
        e !== null && (e = e.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null))))
            try {
                za(e)
            } catch (l) {
                ye(t, t.return, l)
            }
    }
    function v0(e) {
        switch (e.tag) {
        case 31:
        case 13:
        case 19:
            var t = e.stateNode;
            return t === null && (t = e.stateNode = new eo),
            t;
        case 22:
            return e = e.stateNode,
            t = e._retryCache,
            t === null && (t = e._retryCache = new eo),
            t;
        default:
            throw Error(f(435, e.tag))
        }
    }
    function yu(e, t) {
        var l = v0(e);
        t.forEach(function(a) {
            if (!l.has(a)) {
                l.add(a);
                var n = z0.bind(null, e, a);
                a.then(n, n)
            }
        })
    }
    function at(e, t) {
        var l = t.deletions;
        if (l !== null)
            for (var a = 0; a < l.length; a++) {
                var n = l[a]
                  , u = e
                  , i = t
                  , s = i;
                e: for (; s !== null; ) {
                    switch (s.tag) {
                    case 27:
                        if (bl(s.type)) {
                            Ce = s.stateNode,
                            lt = !1;
                            break e
                        }
                        break;
                    case 5:
                        Ce = s.stateNode,
                        lt = !1;
                        break e;
                    case 3:
                    case 4:
                        Ce = s.stateNode.containerInfo,
                        lt = !0;
                        break e
                    }
                    s = s.return
                }
                if (Ce === null)
                    throw Error(f(160));
                ao(u, i, n),
                Ce = null,
                lt = !1,
                u = n.alternate,
                u !== null && (u.return = null),
                n.return = null
            }
        if (t.subtreeFlags & 13886)
            for (t = t.child; t !== null; )
                io(t, e),
                t = t.sibling
    }
    var Ot = null;
    function io(e, t) {
        var l = e.alternate
          , a = e.flags;
        switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            at(t, e),
            nt(e),
            a & 4 && (dl(3, e, e.return),
            nn(3, e),
            dl(5, e, e.return));
            break;
        case 1:
            at(t, e),
            nt(e),
            a & 512 && (Le || l === null || Dt(l, l.return)),
            a & 64 && Jt && (e = e.updateQueue,
            e !== null && (a = e.callbacks,
            a !== null && (l = e.shared.hiddenCallbacks,
            e.shared.hiddenCallbacks = l === null ? a : l.concat(a))));
            break;
        case 26:
            var n = Ot;
            if (at(t, e),
            nt(e),
            a & 512 && (Le || l === null || Dt(l, l.return)),
            a & 4) {
                var u = l !== null ? l.memoizedState : null;
                if (a = e.memoizedState,
                l === null)
                    if (a === null)
                        if (e.stateNode === null) {
                            e: {
                                a = e.type,
                                l = e.memoizedProps,
                                n = n.ownerDocument || n;
                                t: switch (a) {
                                case "title":
                                    u = n.getElementsByTagName("title")[0],
                                    (!u || u[wa] || u[Ve] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = n.createElement(a),
                                    n.head.insertBefore(u, n.querySelector("head > title"))),
                                    Je(u, a, l),
                                    u[Ve] = e,
                                    Qe(u),
                                    a = u;
                                    break e;
                                case "link":
                                    var i = cd("link", "href", n).get(a + (l.href || ""));
                                    if (i) {
                                        for (var s = 0; s < i.length; s++)
                                            if (u = i[s],
                                            u.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && u.getAttribute("rel") === (l.rel == null ? null : l.rel) && u.getAttribute("title") === (l.title == null ? null : l.title) && u.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                                                i.splice(s, 1);
                                                break t
                                            }
                                    }
                                    u = n.createElement(a),
                                    Je(u, a, l),
                                    n.head.appendChild(u);
                                    break;
                                case "meta":
                                    if (i = cd("meta", "content", n).get(a + (l.content || ""))) {
                                        for (s = 0; s < i.length; s++)
                                            if (u = i[s],
                                            u.getAttribute("content") === (l.content == null ? null : "" + l.content) && u.getAttribute("name") === (l.name == null ? null : l.name) && u.getAttribute("property") === (l.property == null ? null : l.property) && u.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && u.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                                                i.splice(s, 1);
                                                break t
                                            }
                                    }
                                    u = n.createElement(a),
                                    Je(u, a, l),
                                    n.head.appendChild(u);
                                    break;
                                default:
                                    throw Error(f(468, a))
                                }
                                u[Ve] = e,
                                Qe(u),
                                a = u
                            }
                            e.stateNode = a
                        } else
                            sd(n, e.type, e.stateNode);
                    else
                        e.stateNode = id(n, a, e.memoizedProps);
                else
                    u !== a ? (u === null ? l.stateNode !== null && (l = l.stateNode,
                    l.parentNode.removeChild(l)) : u.count--,
                    a === null ? sd(n, e.type, e.stateNode) : id(n, a, e.memoizedProps)) : a === null && e.stateNode !== null && Tc(e, e.memoizedProps, l.memoizedProps)
            }
            break;
        case 27:
            at(t, e),
            nt(e),
            a & 512 && (Le || l === null || Dt(l, l.return)),
            l !== null && a & 4 && Tc(e, e.memoizedProps, l.memoizedProps);
            break;
        case 5:
            if (at(t, e),
            nt(e),
            a & 512 && (Le || l === null || Dt(l, l.return)),
            e.flags & 32) {
                n = e.stateNode;
                try {
                    Wl(n, "")
                } catch (U) {
                    ye(e, e.return, U)
                }
            }
            a & 4 && e.stateNode != null && (n = e.memoizedProps,
            Tc(e, n, l !== null ? l.memoizedProps : n)),
            a & 1024 && (jc = !0);
            break;
        case 6:
            if (at(t, e),
            nt(e),
            a & 4) {
                if (e.stateNode === null)
                    throw Error(f(162));
                a = e.memoizedProps,
                l = e.stateNode;
                try {
                    l.nodeValue = a
                } catch (U) {
                    ye(e, e.return, U)
                }
            }
            break;
        case 3:
            if (_u = null,
            n = Ot,
            Ot = Ou(t.containerInfo),
            at(t, e),
            Ot = n,
            nt(e),
            a & 4 && l !== null && l.memoizedState.isDehydrated)
                try {
                    za(t.containerInfo)
                } catch (U) {
                    ye(e, e.return, U)
                }
            jc && (jc = !1,
            co(e));
            break;
        case 4:
            a = Ot,
            Ot = Ou(e.stateNode.containerInfo),
            at(t, e),
            nt(e),
            Ot = a;
            break;
        case 12:
            at(t, e),
            nt(e);
            break;
        case 31:
            at(t, e),
            nt(e),
            a & 4 && (a = e.updateQueue,
            a !== null && (e.updateQueue = null,
            yu(e, a)));
            break;
        case 13:
            at(t, e),
            nt(e),
            e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (gu = ct()),
            a & 4 && (a = e.updateQueue,
            a !== null && (e.updateQueue = null,
            yu(e, a)));
            break;
        case 22:
            n = e.memoizedState !== null;
            var o = l !== null && l.memoizedState !== null
              , g = Jt
              , N = Le;
            if (Jt = g || n,
            Le = N || o,
            at(t, e),
            Le = N,
            Jt = g,
            nt(e),
            a & 8192)
                e: for (t = e.stateNode,
                t._visibility = n ? t._visibility & -2 : t._visibility | 1,
                n && (l === null || o || Jt || Le || Gl(e)),
                l = null,
                t = e; ; ) {
                    if (t.tag === 5 || t.tag === 26) {
                        if (l === null) {
                            o = l = t;
                            try {
                                if (u = o.stateNode,
                                n)
                                    i = u.style,
                                    typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                                else {
                                    s = o.stateNode;
                                    var C = o.memoizedProps.style
                                      , v = C != null && C.hasOwnProperty("display") ? C.display : null;
                                    s.style.display = v == null || typeof v == "boolean" ? "" : ("" + v).trim()
                                }
                            } catch (U) {
                                ye(o, o.return, U)
                            }
                        }
                    } else if (t.tag === 6) {
                        if (l === null) {
                            o = t;
                            try {
                                o.stateNode.nodeValue = n ? "" : o.memoizedProps
                            } catch (U) {
                                ye(o, o.return, U)
                            }
                        }
                    } else if (t.tag === 18) {
                        if (l === null) {
                            o = t;
                            try {
                                var x = o.stateNode;
                                n ? Fo(x, !0) : Fo(o.stateNode, !1)
                            } catch (U) {
                                ye(o, o.return, U)
                            }
                        }
                    } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                        t.child.return = t,
                        t = t.child;
                        continue
                    }
                    if (t === e)
                        break e;
                    for (; t.sibling === null; ) {
                        if (t.return === null || t.return === e)
                            break e;
                        l === t && (l = null),
                        t = t.return
                    }
                    l === t && (l = null),
                    t.sibling.return = t.return,
                    t = t.sibling
                }
            a & 4 && (a = e.updateQueue,
            a !== null && (l = a.retryQueue,
            l !== null && (a.retryQueue = null,
            yu(e, l))));
            break;
        case 19:
            at(t, e),
            nt(e),
            a & 4 && (a = e.updateQueue,
            a !== null && (e.updateQueue = null,
            yu(e, a)));
            break;
        case 30:
            break;
        case 21:
            break;
        default:
            at(t, e),
            nt(e)
        }
    }
    function nt(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                for (var l, a = e.return; a !== null; ) {
                    if (Ir(a)) {
                        l = a;
                        break
                    }
                    a = a.return
                }
                if (l == null)
                    throw Error(f(160));
                switch (l.tag) {
                case 27:
                    var n = l.stateNode
                      , u = Nc(e);
                    mu(e, u, n);
                    break;
                case 5:
                    var i = l.stateNode;
                    l.flags & 32 && (Wl(i, ""),
                    l.flags &= -33);
                    var s = Nc(e);
                    mu(e, s, i);
                    break;
                case 3:
                case 4:
                    var o = l.stateNode.containerInfo
                      , g = Nc(e);
                    Ac(e, g, o);
                    break;
                default:
                    throw Error(f(161))
                }
            } catch (N) {
                ye(e, e.return, N)
            }
            e.flags &= -3
        }
        t & 4096 && (e.flags &= -4097)
    }
    function co(e) {
        if (e.subtreeFlags & 1024)
            for (e = e.child; e !== null; ) {
                var t = e;
                co(t),
                t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
                e = e.sibling
            }
    }
    function $t(e, t) {
        if (t.subtreeFlags & 8772)
            for (t = t.child; t !== null; )
                to(e, t.alternate, t),
                t = t.sibling
    }
    function Gl(e) {
        for (e = e.child; e !== null; ) {
            var t = e;
            switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                dl(4, t, t.return),
                Gl(t);
                break;
            case 1:
                Dt(t, t.return);
                var l = t.stateNode;
                typeof l.componentWillUnmount == "function" && Wr(t, t.return, l),
                Gl(t);
                break;
            case 27:
                yn(t.stateNode);
            case 26:
            case 5:
                Dt(t, t.return),
                Gl(t);
                break;
            case 22:
                t.memoizedState === null && Gl(t);
                break;
            case 30:
                Gl(t);
                break;
            default:
                Gl(t)
            }
            e = e.sibling
        }
    }
    function Wt(e, t, l) {
        for (l = l && (t.subtreeFlags & 8772) !== 0,
        t = t.child; t !== null; ) {
            var a = t.alternate
              , n = e
              , u = t
              , i = u.flags;
            switch (u.tag) {
            case 0:
            case 11:
            case 15:
                Wt(n, u, l),
                nn(4, u);
                break;
            case 1:
                if (Wt(n, u, l),
                a = u,
                n = a.stateNode,
                typeof n.componentDidMount == "function")
                    try {
                        n.componentDidMount()
                    } catch (g) {
                        ye(a, a.return, g)
                    }
                if (a = u,
                n = a.updateQueue,
                n !== null) {
                    var s = a.stateNode;
                    try {
                        var o = n.shared.hiddenCallbacks;
                        if (o !== null)
                            for (n.shared.hiddenCallbacks = null,
                            n = 0; n < o.length; n++)
                                Bf(o[n], s)
                    } catch (g) {
                        ye(a, a.return, g)
                    }
                }
                l && i & 64 && $r(u),
                un(u, u.return);
                break;
            case 27:
                Pr(u);
            case 26:
            case 5:
                Wt(n, u, l),
                l && a === null && i & 4 && Fr(u),
                un(u, u.return);
                break;
            case 12:
                Wt(n, u, l);
                break;
            case 31:
                Wt(n, u, l),
                l && i & 4 && no(n, u);
                break;
            case 13:
                Wt(n, u, l),
                l && i & 4 && uo(n, u);
                break;
            case 22:
                u.memoizedState === null && Wt(n, u, l),
                un(u, u.return);
                break;
            case 30:
                break;
            default:
                Wt(n, u, l)
            }
            t = t.sibling
        }
    }
    function Ec(e, t) {
        var l = null;
        e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool),
        e = null,
        t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool),
        e !== l && (e != null && e.refCount++,
        l != null && Za(l))
    }
    function zc(e, t) {
        e = null,
        t.alternate !== null && (e = t.alternate.memoizedState.cache),
        t = t.memoizedState.cache,
        t !== e && (t.refCount++,
        e != null && Za(e))
    }
    function Mt(e, t, l, a) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; )
                so(e, t, l, a),
                t = t.sibling
    }
    function so(e, t, l, a) {
        var n = t.flags;
        switch (t.tag) {
        case 0:
        case 11:
        case 15:
            Mt(e, t, l, a),
            n & 2048 && nn(9, t);
            break;
        case 1:
            Mt(e, t, l, a);
            break;
        case 3:
            Mt(e, t, l, a),
            n & 2048 && (e = null,
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            t = t.memoizedState.cache,
            t !== e && (t.refCount++,
            e != null && Za(e)));
            break;
        case 12:
            if (n & 2048) {
                Mt(e, t, l, a),
                e = t.stateNode;
                try {
                    var u = t.memoizedProps
                      , i = u.id
                      , s = u.onPostCommit;
                    typeof s == "function" && s(i, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0)
                } catch (o) {
                    ye(t, t.return, o)
                }
            } else
                Mt(e, t, l, a);
            break;
        case 31:
            Mt(e, t, l, a);
            break;
        case 13:
            Mt(e, t, l, a);
            break;
        case 23:
            break;
        case 22:
            u = t.stateNode,
            i = t.alternate,
            t.memoizedState !== null ? u._visibility & 2 ? Mt(e, t, l, a) : cn(e, t) : u._visibility & 2 ? Mt(e, t, l, a) : (u._visibility |= 2,
            pa(e, t, l, a, (t.subtreeFlags & 10256) !== 0 || !1)),
            n & 2048 && Ec(i, t);
            break;
        case 24:
            Mt(e, t, l, a),
            n & 2048 && zc(t.alternate, t);
            break;
        default:
            Mt(e, t, l, a)
        }
    }
    function pa(e, t, l, a, n) {
        for (n = n && ((t.subtreeFlags & 10256) !== 0 || !1),
        t = t.child; t !== null; ) {
            var u = e
              , i = t
              , s = l
              , o = a
              , g = i.flags;
            switch (i.tag) {
            case 0:
            case 11:
            case 15:
                pa(u, i, s, o, n),
                nn(8, i);
                break;
            case 23:
                break;
            case 22:
                var N = i.stateNode;
                i.memoizedState !== null ? N._visibility & 2 ? pa(u, i, s, o, n) : cn(u, i) : (N._visibility |= 2,
                pa(u, i, s, o, n)),
                n && g & 2048 && Ec(i.alternate, i);
                break;
            case 24:
                pa(u, i, s, o, n),
                n && g & 2048 && zc(i.alternate, i);
                break;
            default:
                pa(u, i, s, o, n)
            }
            t = t.sibling
        }
    }
    function cn(e, t) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; ) {
                var l = e
                  , a = t
                  , n = a.flags;
                switch (a.tag) {
                case 22:
                    cn(l, a),
                    n & 2048 && Ec(a.alternate, a);
                    break;
                case 24:
                    cn(l, a),
                    n & 2048 && zc(a.alternate, a);
                    break;
                default:
                    cn(l, a)
                }
                t = t.sibling
            }
    }
    var sn = 8192;
    function ga(e, t, l) {
        if (e.subtreeFlags & sn)
            for (e = e.child; e !== null; )
                fo(e, t, l),
                e = e.sibling
    }
    function fo(e, t, l) {
        switch (e.tag) {
        case 26:
            ga(e, t, l),
            e.flags & sn && e.memoizedState !== null && nm(l, Ot, e.memoizedState, e.memoizedProps);
            break;
        case 5:
            ga(e, t, l);
            break;
        case 3:
        case 4:
            var a = Ot;
            Ot = Ou(e.stateNode.containerInfo),
            ga(e, t, l),
            Ot = a;
            break;
        case 22:
            e.memoizedState === null && (a = e.alternate,
            a !== null && a.memoizedState !== null ? (a = sn,
            sn = 16777216,
            ga(e, t, l),
            sn = a) : ga(e, t, l));
            break;
        default:
            ga(e, t, l)
        }
    }
    function ro(e) {
        var t = e.alternate;
        if (t !== null && (e = t.child,
        e !== null)) {
            t.child = null;
            do
                t = e.sibling,
                e.sibling = null,
                e = t;
            while (e !== null)
        }
    }
    function fn(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var l = 0; l < t.length; l++) {
                    var a = t[l];
                    Ge = a,
                    ho(a, e)
                }
            ro(e)
        }
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; )
                oo(e),
                e = e.sibling
    }
    function oo(e) {
        switch (e.tag) {
        case 0:
        case 11:
        case 15:
            fn(e),
            e.flags & 2048 && dl(9, e, e.return);
            break;
        case 3:
            fn(e);
            break;
        case 12:
            fn(e);
            break;
        case 22:
            var t = e.stateNode;
            e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3,
            pu(e)) : fn(e);
            break;
        default:
            fn(e)
        }
    }
    function pu(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var l = 0; l < t.length; l++) {
                    var a = t[l];
                    Ge = a,
                    ho(a, e)
                }
            ro(e)
        }
        for (e = e.child; e !== null; ) {
            switch (t = e,
            t.tag) {
            case 0:
            case 11:
            case 15:
                dl(8, t, t.return),
                pu(t);
                break;
            case 22:
                l = t.stateNode,
                l._visibility & 2 && (l._visibility &= -3,
                pu(t));
                break;
            default:
                pu(t)
            }
            e = e.sibling
        }
    }
    function ho(e, t) {
        for (; Ge !== null; ) {
            var l = Ge;
            switch (l.tag) {
            case 0:
            case 11:
            case 15:
                dl(8, l, t);
                break;
            case 23:
            case 22:
                if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
                    var a = l.memoizedState.cachePool.pool;
                    a != null && a.refCount++
                }
                break;
            case 24:
                Za(l.memoizedState.cache)
            }
            if (a = l.child,
            a !== null)
                a.return = l,
                Ge = a;
            else
                e: for (l = e; Ge !== null; ) {
                    a = Ge;
                    var n = a.sibling
                      , u = a.return;
                    if (lo(a),
                    a === l) {
                        Ge = null;
                        break e
                    }
                    if (n !== null) {
                        n.return = u,
                        Ge = n;
                        break e
                    }
                    Ge = u
                }
        }
    }
    var b0 = {
        getCacheForType: function(e) {
            var t = Ze(Ue)
              , l = t.data.get(e);
            return l === void 0 && (l = e(),
            t.data.set(e, l)),
            l
        },
        cacheSignal: function() {
            return Ze(Ue).controller.signal
        }
    }
      , x0 = typeof WeakMap == "function" ? WeakMap : Map
      , oe = 0
      , Se = null
      , ae = null
      , ue = 0
      , me = 0
      , mt = null
      , hl = !1
      , va = !1
      , Cc = !1
      , Ft = 0
      , _e = 0
      , ml = 0
      , Vl = 0
      , Oc = 0
      , yt = 0
      , ba = 0
      , rn = null
      , ut = null
      , Mc = !1
      , gu = 0
      , mo = 0
      , vu = 1 / 0
      , bu = null
      , yl = null
      , Ye = 0
      , pl = null
      , xa = null
      , It = 0
      , _c = 0
      , wc = null
      , yo = null
      , on = 0
      , Dc = null;
    function pt() {
        return (oe & 2) !== 0 && ue !== 0 ? ue & -ue : T.T !== null ? Lc() : Os()
    }
    function po() {
        if (yt === 0)
            if ((ue & 536870912) === 0 || ce) {
                var e = zn;
                zn <<= 1,
                (zn & 3932160) === 0 && (zn = 262144),
                yt = e
            } else
                yt = 536870912;
        return e = dt.current,
        e !== null && (e.flags |= 32),
        yt
    }
    function it(e, t, l) {
        (e === Se && (me === 2 || me === 9) || e.cancelPendingCommit !== null) && (Sa(e, 0),
        gl(e, ue, yt, !1)),
        _a(e, l),
        ((oe & 2) === 0 || e !== Se) && (e === Se && ((oe & 2) === 0 && (Vl |= l),
        _e === 4 && gl(e, ue, yt, !1)),
        Rt(e))
    }
    function go(e, t, l) {
        if ((oe & 6) !== 0)
            throw Error(f(327));
        var a = !l && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Ma(e, t)
          , n = a ? N0(e, t) : Hc(e, t, !0)
          , u = a;
        do {
            if (n === 0) {
                va && !a && gl(e, t, 0, !1);
                break
            } else {
                if (l = e.current.alternate,
                u && !S0(l)) {
                    n = Hc(e, t, !1),
                    u = !1;
                    continue
                }
                if (n === 2) {
                    if (u = t,
                    e.errorRecoveryDisabledLanes & u)
                        var i = 0;
                    else
                        i = e.pendingLanes & -536870913,
                        i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
                    if (i !== 0) {
                        t = i;
                        e: {
                            var s = e;
                            n = rn;
                            var o = s.current.memoizedState.isDehydrated;
                            if (o && (Sa(s, i).flags |= 256),
                            i = Hc(s, i, !1),
                            i !== 2) {
                                if (Cc && !o) {
                                    s.errorRecoveryDisabledLanes |= u,
                                    Vl |= u,
                                    n = 4;
                                    break e
                                }
                                u = ut,
                                ut = n,
                                u !== null && (ut === null ? ut = u : ut.push.apply(ut, u))
                            }
                            n = i
                        }
                        if (u = !1,
                        n !== 2)
                            continue
                    }
                }
                if (n === 1) {
                    Sa(e, 0),
                    gl(e, t, 0, !0);
                    break
                }
                e: {
                    switch (a = e,
                    u = n,
                    u) {
                    case 0:
                    case 1:
                        throw Error(f(345));
                    case 4:
                        if ((t & 4194048) !== t)
                            break;
                    case 6:
                        gl(a, t, yt, !hl);
                        break e;
                    case 2:
                        ut = null;
                        break;
                    case 3:
                    case 5:
                        break;
                    default:
                        throw Error(f(329))
                    }
                    if ((t & 62914560) === t && (n = gu + 300 - ct(),
                    10 < n)) {
                        if (gl(a, t, yt, !hl),
                        On(a, 0, !0) !== 0)
                            break e;
                        It = t,
                        a.timeoutHandle = ko(vo.bind(null, a, l, ut, bu, Mc, t, yt, Vl, ba, hl, u, "Throttled", -0, 0), n);
                        break e
                    }
                    vo(a, l, ut, bu, Mc, t, yt, Vl, ba, hl, u, null, -0, 0)
                }
            }
            break
        } while (!0);
        Rt(e)
    }
    function vo(e, t, l, a, n, u, i, s, o, g, N, C, v, x) {
        if (e.timeoutHandle = -1,
        C = t.subtreeFlags,
        C & 8192 || (C & 16785408) === 16785408) {
            C = {
                stylesheets: null,
                count: 0,
                imgCount: 0,
                imgBytes: 0,
                suspenseyImages: [],
                waitingForImages: !0,
                waitingForViewTransition: !1,
                unsuspend: qt
            },
            fo(t, u, C);
            var U = (u & 62914560) === u ? gu - ct() : (u & 4194048) === u ? mo - ct() : 0;
            if (U = um(C, U),
            U !== null) {
                It = u,
                e.cancelPendingCommit = U(Eo.bind(null, e, t, u, l, a, n, i, s, o, N, C, null, v, x)),
                gl(e, u, i, !g);
                return
            }
        }
        Eo(e, t, u, l, a, n, i, s, o)
    }
    function S0(e) {
        for (var t = e; ; ) {
            var l = t.tag;
            if ((l === 0 || l === 11 || l === 15) && t.flags & 16384 && (l = t.updateQueue,
            l !== null && (l = l.stores,
            l !== null)))
                for (var a = 0; a < l.length; a++) {
                    var n = l[a]
                      , u = n.getSnapshot;
                    n = n.value;
                    try {
                        if (!rt(u(), n))
                            return !1
                    } catch {
                        return !1
                    }
                }
            if (l = t.child,
            t.subtreeFlags & 16384 && l !== null)
                l.return = t,
                t = l;
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
    function gl(e, t, l, a) {
        t &= ~Oc,
        t &= ~Vl,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        a && (e.warmLanes |= t),
        a = e.expirationTimes;
        for (var n = t; 0 < n; ) {
            var u = 31 - ft(n)
              , i = 1 << u;
            a[u] = -1,
            n &= ~i
        }
        l !== 0 && Es(e, l, t)
    }
    function xu() {
        return (oe & 6) === 0 ? (dn(0),
        !1) : !0
    }
    function Rc() {
        if (ae !== null) {
            if (me === 0)
                var e = ae.return;
            else
                e = ae,
                Qt = Rl = null,
                Wi(e),
                oa = null,
                Ja = 0,
                e = ae;
            for (; e !== null; )
                kr(e.alternate, e),
                e = e.return;
            ae = null
        }
    }
    function Sa(e, t) {
        var l = e.timeoutHandle;
        l !== -1 && (e.timeoutHandle = -1,
        Q0(l)),
        l = e.cancelPendingCommit,
        l !== null && (e.cancelPendingCommit = null,
        l()),
        It = 0,
        Rc(),
        Se = e,
        ae = l = Lt(e.current, null),
        ue = t,
        me = 0,
        mt = null,
        hl = !1,
        va = Ma(e, t),
        Cc = !1,
        ba = yt = Oc = Vl = ml = _e = 0,
        ut = rn = null,
        Mc = !1,
        (t & 8) !== 0 && (t |= t & 32);
        var a = e.entangledLanes;
        if (a !== 0)
            for (e = e.entanglements,
            a &= t; 0 < a; ) {
                var n = 31 - ft(a)
                  , u = 1 << n;
                t |= e[n],
                a &= ~u
            }
        return Ft = t,
        Qn(),
        l
    }
    function bo(e, t) {
        $ = null,
        T.H = tn,
        t === ra || t === $n ? (t = Rf(),
        me = 3) : t === Bi ? (t = Rf(),
        me = 4) : me = t === dc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1,
        mt = t,
        ae === null && (_e = 1,
        fu(e, St(t, e.current)))
    }
    function xo() {
        var e = dt.current;
        return e === null ? !0 : (ue & 4194048) === ue ? jt === null : (ue & 62914560) === ue || (ue & 536870912) !== 0 ? e === jt : !1
    }
    function So() {
        var e = T.H;
        return T.H = tn,
        e === null ? tn : e
    }
    function To() {
        var e = T.A;
        return T.A = b0,
        e
    }
    function Su() {
        _e = 4,
        hl || (ue & 4194048) !== ue && dt.current !== null || (va = !0),
        (ml & 134217727) === 0 && (Vl & 134217727) === 0 || Se === null || gl(Se, ue, yt, !1)
    }
    function Hc(e, t, l) {
        var a = oe;
        oe |= 2;
        var n = So()
          , u = To();
        (Se !== e || ue !== t) && (bu = null,
        Sa(e, t)),
        t = !1;
        var i = _e;
        e: do
            try {
                if (me !== 0 && ae !== null) {
                    var s = ae
                      , o = mt;
                    switch (me) {
                    case 8:
                        Rc(),
                        i = 6;
                        break e;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        dt.current === null && (t = !0);
                        var g = me;
                        if (me = 0,
                        mt = null,
                        Ta(e, s, o, g),
                        l && va) {
                            i = 0;
                            break e
                        }
                        break;
                    default:
                        g = me,
                        me = 0,
                        mt = null,
                        Ta(e, s, o, g)
                    }
                }
                T0(),
                i = _e;
                break
            } catch (N) {
                bo(e, N)
            }
        while (!0);
        return t && e.shellSuspendCounter++,
        Qt = Rl = null,
        oe = a,
        T.H = n,
        T.A = u,
        ae === null && (Se = null,
        ue = 0,
        Qn()),
        i
    }
    function T0() {
        for (; ae !== null; )
            No(ae)
    }
    function N0(e, t) {
        var l = oe;
        oe |= 2;
        var a = So()
          , n = To();
        Se !== e || ue !== t ? (bu = null,
        vu = ct() + 500,
        Sa(e, t)) : va = Ma(e, t);
        e: do
            try {
                if (me !== 0 && ae !== null) {
                    t = ae;
                    var u = mt;
                    t: switch (me) {
                    case 1:
                        me = 0,
                        mt = null,
                        Ta(e, t, u, 1);
                        break;
                    case 2:
                    case 9:
                        if (wf(u)) {
                            me = 0,
                            mt = null,
                            Ao(t);
                            break
                        }
                        t = function() {
                            me !== 2 && me !== 9 || Se !== e || (me = 7),
                            Rt(e)
                        }
                        ,
                        u.then(t, t);
                        break e;
                    case 3:
                        me = 7;
                        break e;
                    case 4:
                        me = 5;
                        break e;
                    case 7:
                        wf(u) ? (me = 0,
                        mt = null,
                        Ao(t)) : (me = 0,
                        mt = null,
                        Ta(e, t, u, 7));
                        break;
                    case 5:
                        var i = null;
                        switch (ae.tag) {
                        case 26:
                            i = ae.memoizedState;
                        case 5:
                        case 27:
                            var s = ae;
                            if (i ? fd(i) : s.stateNode.complete) {
                                me = 0,
                                mt = null;
                                var o = s.sibling;
                                if (o !== null)
                                    ae = o;
                                else {
                                    var g = s.return;
                                    g !== null ? (ae = g,
                                    Tu(g)) : ae = null
                                }
                                break t
                            }
                        }
                        me = 0,
                        mt = null,
                        Ta(e, t, u, 5);
                        break;
                    case 6:
                        me = 0,
                        mt = null,
                        Ta(e, t, u, 6);
                        break;
                    case 8:
                        Rc(),
                        _e = 6;
                        break e;
                    default:
                        throw Error(f(462))
                    }
                }
                A0();
                break
            } catch (N) {
                bo(e, N)
            }
        while (!0);
        return Qt = Rl = null,
        T.H = a,
        T.A = n,
        oe = l,
        ae !== null ? 0 : (Se = null,
        ue = 0,
        Qn(),
        _e)
    }
    function A0() {
        for (; ae !== null && !Jd(); )
            No(ae)
    }
    function No(e) {
        var t = Kr(e.alternate, e, Ft);
        e.memoizedProps = e.pendingProps,
        t === null ? Tu(e) : ae = t
    }
    function Ao(e) {
        var t = e
          , l = t.alternate;
        switch (t.tag) {
        case 15:
        case 0:
            t = Yr(l, t, t.pendingProps, t.type, void 0, ue);
            break;
        case 11:
            t = Yr(l, t, t.pendingProps, t.type.render, t.ref, ue);
            break;
        case 5:
            Wi(t);
        default:
            kr(l, t),
            t = ae = Sf(t, Ft),
            t = Kr(l, t, Ft)
        }
        e.memoizedProps = e.pendingProps,
        t === null ? Tu(e) : ae = t
    }
    function Ta(e, t, l, a) {
        Qt = Rl = null,
        Wi(t),
        oa = null,
        Ja = 0;
        var n = t.return;
        try {
            if (d0(e, n, t, l, ue)) {
                _e = 1,
                fu(e, St(l, e.current)),
                ae = null;
                return
            }
        } catch (u) {
            if (n !== null)
                throw ae = n,
                u;
            _e = 1,
            fu(e, St(l, e.current)),
            ae = null;
            return
        }
        t.flags & 32768 ? (ce || a === 1 ? e = !0 : va || (ue & 536870912) !== 0 ? e = !1 : (hl = e = !0,
        (a === 2 || a === 9 || a === 3 || a === 6) && (a = dt.current,
        a !== null && a.tag === 13 && (a.flags |= 16384))),
        jo(t, e)) : Tu(t)
    }
    function Tu(e) {
        var t = e;
        do {
            if ((t.flags & 32768) !== 0) {
                jo(t, hl);
                return
            }
            e = t.return;
            var l = y0(t.alternate, t, Ft);
            if (l !== null) {
                ae = l;
                return
            }
            if (t = t.sibling,
            t !== null) {
                ae = t;
                return
            }
            ae = t = e
        } while (t !== null);
        _e === 0 && (_e = 5)
    }
    function jo(e, t) {
        do {
            var l = p0(e.alternate, e);
            if (l !== null) {
                l.flags &= 32767,
                ae = l;
                return
            }
            if (l = e.return,
            l !== null && (l.flags |= 32768,
            l.subtreeFlags = 0,
            l.deletions = null),
            !t && (e = e.sibling,
            e !== null)) {
                ae = e;
                return
            }
            ae = e = l
        } while (e !== null);
        _e = 6,
        ae = null
    }
    function Eo(e, t, l, a, n, u, i, s, o) {
        e.cancelPendingCommit = null;
        do
            Nu();
        while (Ye !== 0);
        if ((oe & 6) !== 0)
            throw Error(f(327));
        if (t !== null) {
            if (t === e.current)
                throw Error(f(177));
            if (u = t.lanes | t.childLanes,
            u |= Ni,
            ah(e, l, u, i, s, o),
            e === Se && (ae = Se = null,
            ue = 0),
            xa = t,
            pl = e,
            It = l,
            _c = u,
            wc = n,
            yo = a,
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null,
            e.callbackPriority = 0,
            C0(jn, function() {
                return _o(),
                null
            })) : (e.callbackNode = null,
            e.callbackPriority = 0),
            a = (t.flags & 13878) !== 0,
            (t.subtreeFlags & 13878) !== 0 || a) {
                a = T.T,
                T.T = null,
                n = D.p,
                D.p = 2,
                i = oe,
                oe |= 4;
                try {
                    g0(e, t, l)
                } finally {
                    oe = i,
                    D.p = n,
                    T.T = a
                }
            }
            Ye = 1,
            zo(),
            Co(),
            Oo()
        }
    }
    function zo() {
        if (Ye === 1) {
            Ye = 0;
            var e = pl
              , t = xa
              , l = (t.flags & 13878) !== 0;
            if ((t.subtreeFlags & 13878) !== 0 || l) {
                l = T.T,
                T.T = null;
                var a = D.p;
                D.p = 2;
                var n = oe;
                oe |= 4;
                try {
                    io(t, e);
                    var u = Jc
                      , i = df(e.containerInfo)
                      , s = u.focusedElem
                      , o = u.selectionRange;
                    if (i !== s && s && s.ownerDocument && of(s.ownerDocument.documentElement, s)) {
                        if (o !== null && vi(s)) {
                            var g = o.start
                              , N = o.end;
                            if (N === void 0 && (N = g),
                            "selectionStart"in s)
                                s.selectionStart = g,
                                s.selectionEnd = Math.min(N, s.value.length);
                            else {
                                var C = s.ownerDocument || document
                                  , v = C && C.defaultView || window;
                                if (v.getSelection) {
                                    var x = v.getSelection()
                                      , U = s.textContent.length
                                      , X = Math.min(o.start, U)
                                      , be = o.end === void 0 ? X : Math.min(o.end, U);
                                    !x.extend && X > be && (i = be,
                                    be = X,
                                    X = i);
                                    var m = rf(s, X)
                                      , h = rf(s, be);
                                    if (m && h && (x.rangeCount !== 1 || x.anchorNode !== m.node || x.anchorOffset !== m.offset || x.focusNode !== h.node || x.focusOffset !== h.offset)) {
                                        var p = C.createRange();
                                        p.setStart(m.node, m.offset),
                                        x.removeAllRanges(),
                                        X > be ? (x.addRange(p),
                                        x.extend(h.node, h.offset)) : (p.setEnd(h.node, h.offset),
                                        x.addRange(p))
                                    }
                                }
                            }
                        }
                        for (C = [],
                        x = s; x = x.parentNode; )
                            x.nodeType === 1 && C.push({
                                element: x,
                                left: x.scrollLeft,
                                top: x.scrollTop
                            });
                        for (typeof s.focus == "function" && s.focus(),
                        s = 0; s < C.length; s++) {
                            var E = C[s];
                            E.element.scrollLeft = E.left,
                            E.element.scrollTop = E.top
                        }
                    }
                    Hu = !!Kc,
                    Jc = Kc = null
                } finally {
                    oe = n,
                    D.p = a,
                    T.T = l
                }
            }
            e.current = t,
            Ye = 2
        }
    }
    function Co() {
        if (Ye === 2) {
            Ye = 0;
            var e = pl
              , t = xa
              , l = (t.flags & 8772) !== 0;
            if ((t.subtreeFlags & 8772) !== 0 || l) {
                l = T.T,
                T.T = null;
                var a = D.p;
                D.p = 2;
                var n = oe;
                oe |= 4;
                try {
                    to(e, t.alternate, t)
                } finally {
                    oe = n,
                    D.p = a,
                    T.T = l
                }
            }
            Ye = 3
        }
    }
    function Oo() {
        if (Ye === 4 || Ye === 3) {
            Ye = 0,
            kd();
            var e = pl
              , t = xa
              , l = It
              , a = yo;
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Ye = 5 : (Ye = 0,
            xa = pl = null,
            Mo(e, e.pendingLanes));
            var n = e.pendingLanes;
            if (n === 0 && (yl = null),
            Pu(l),
            t = t.stateNode,
            st && typeof st.onCommitFiberRoot == "function")
                try {
                    st.onCommitFiberRoot(Oa, t, void 0, (t.current.flags & 128) === 128)
                } catch {}
            if (a !== null) {
                t = T.T,
                n = D.p,
                D.p = 2,
                T.T = null;
                try {
                    for (var u = e.onRecoverableError, i = 0; i < a.length; i++) {
                        var s = a[i];
                        u(s.value, {
                            componentStack: s.stack
                        })
                    }
                } finally {
                    T.T = t,
                    D.p = n
                }
            }
            (It & 3) !== 0 && Nu(),
            Rt(e),
            n = e.pendingLanes,
            (l & 261930) !== 0 && (n & 42) !== 0 ? e === Dc ? on++ : (on = 0,
            Dc = e) : on = 0,
            dn(0)
        }
    }
    function Mo(e, t) {
        (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache,
        t != null && (e.pooledCache = null,
        Za(t)))
    }
    function Nu() {
        return zo(),
        Co(),
        Oo(),
        _o()
    }
    function _o() {
        if (Ye !== 5)
            return !1;
        var e = pl
          , t = _c;
        _c = 0;
        var l = Pu(It)
          , a = T.T
          , n = D.p;
        try {
            D.p = 32 > l ? 32 : l,
            T.T = null,
            l = wc,
            wc = null;
            var u = pl
              , i = It;
            if (Ye = 0,
            xa = pl = null,
            It = 0,
            (oe & 6) !== 0)
                throw Error(f(331));
            var s = oe;
            if (oe |= 4,
            oo(u.current),
            so(u, u.current, i, l),
            oe = s,
            dn(0, !1),
            st && typeof st.onPostCommitFiberRoot == "function")
                try {
                    st.onPostCommitFiberRoot(Oa, u)
                } catch {}
            return !0
        } finally {
            D.p = n,
            T.T = a,
            Mo(e, t)
        }
    }
    function wo(e, t, l) {
        t = St(l, t),
        t = oc(e.stateNode, t, 2),
        e = fl(e, t, 2),
        e !== null && (_a(e, 2),
        Rt(e))
    }
    function ye(e, t, l) {
        if (e.tag === 3)
            wo(e, e, l);
        else
            for (; t !== null; ) {
                if (t.tag === 3) {
                    wo(t, e, l);
                    break
                } else if (t.tag === 1) {
                    var a = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (yl === null || !yl.has(a))) {
                        e = St(l, e),
                        l = wr(2),
                        a = fl(t, l, 2),
                        a !== null && (Dr(l, a, t, e),
                        _a(a, 2),
                        Rt(a));
                        break
                    }
                }
                t = t.return
            }
    }
    function Uc(e, t, l) {
        var a = e.pingCache;
        if (a === null) {
            a = e.pingCache = new x0;
            var n = new Set;
            a.set(t, n)
        } else
            n = a.get(t),
            n === void 0 && (n = new Set,
            a.set(t, n));
        n.has(l) || (Cc = !0,
        n.add(l),
        e = j0.bind(null, e, t, l),
        t.then(e, e))
    }
    function j0(e, t, l) {
        var a = e.pingCache;
        a !== null && a.delete(t),
        e.pingedLanes |= e.suspendedLanes & l,
        e.warmLanes &= ~l,
        Se === e && (ue & l) === l && (_e === 4 || _e === 3 && (ue & 62914560) === ue && 300 > ct() - gu ? (oe & 2) === 0 && Sa(e, 0) : Oc |= l,
        ba === ue && (ba = 0)),
        Rt(e)
    }
    function Do(e, t) {
        t === 0 && (t = js()),
        e = _l(e, t),
        e !== null && (_a(e, t),
        Rt(e))
    }
    function E0(e) {
        var t = e.memoizedState
          , l = 0;
        t !== null && (l = t.retryLane),
        Do(e, l)
    }
    function z0(e, t) {
        var l = 0;
        switch (e.tag) {
        case 31:
        case 13:
            var a = e.stateNode
              , n = e.memoizedState;
            n !== null && (l = n.retryLane);
            break;
        case 19:
            a = e.stateNode;
            break;
        case 22:
            a = e.stateNode._retryCache;
            break;
        default:
            throw Error(f(314))
        }
        a !== null && a.delete(t),
        Do(e, l)
    }
    function C0(e, t) {
        return $u(e, t)
    }
    var Au = null
      , Na = null
      , qc = !1
      , ju = !1
      , Bc = !1
      , vl = 0;
    function Rt(e) {
        e !== Na && e.next === null && (Na === null ? Au = Na = e : Na = Na.next = e),
        ju = !0,
        qc || (qc = !0,
        M0())
    }
    function dn(e, t) {
        if (!Bc && ju) {
            Bc = !0;
            do
                for (var l = !1, a = Au; a !== null; ) {
                    if (e !== 0) {
                        var n = a.pendingLanes;
                        if (n === 0)
                            var u = 0;
                        else {
                            var i = a.suspendedLanes
                              , s = a.pingedLanes;
                            u = (1 << 31 - ft(42 | e) + 1) - 1,
                            u &= n & ~(i & ~s),
                            u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0
                        }
                        u !== 0 && (l = !0,
                        qo(a, u))
                    } else
                        u = ue,
                        u = On(a, a === Se ? u : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1),
                        (u & 3) === 0 || Ma(a, u) || (l = !0,
                        qo(a, u));
                    a = a.next
                }
            while (l);
            Bc = !1
        }
    }
    function O0() {
        Ro()
    }
    function Ro() {
        ju = qc = !1;
        var e = 0;
        vl !== 0 && Y0() && (e = vl);
        for (var t = ct(), l = null, a = Au; a !== null; ) {
            var n = a.next
              , u = Ho(a, t);
            u === 0 ? (a.next = null,
            l === null ? Au = n : l.next = n,
            n === null && (Na = l)) : (l = a,
            (e !== 0 || (u & 3) !== 0) && (ju = !0)),
            a = n
        }
        Ye !== 0 && Ye !== 5 || dn(e),
        vl !== 0 && (vl = 0)
    }
    function Ho(e, t) {
        for (var l = e.suspendedLanes, a = e.pingedLanes, n = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
            var i = 31 - ft(u)
              , s = 1 << i
              , o = n[i];
            o === -1 ? ((s & l) === 0 || (s & a) !== 0) && (n[i] = lh(s, t)) : o <= t && (e.expiredLanes |= s),
            u &= ~s
        }
        if (t = Se,
        l = ue,
        l = On(e, e === t ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1),
        a = e.callbackNode,
        l === 0 || e === t && (me === 2 || me === 9) || e.cancelPendingCommit !== null)
            return a !== null && a !== null && Wu(a),
            e.callbackNode = null,
            e.callbackPriority = 0;
        if ((l & 3) === 0 || Ma(e, l)) {
            if (t = l & -l,
            t === e.callbackPriority)
                return t;
            switch (a !== null && Wu(a),
            Pu(l)) {
            case 2:
            case 8:
                l = Ns;
                break;
            case 32:
                l = jn;
                break;
            case 268435456:
                l = As;
                break;
            default:
                l = jn
            }
            return a = Uo.bind(null, e),
            l = $u(l, a),
            e.callbackPriority = t,
            e.callbackNode = l,
            t
        }
        return a !== null && a !== null && Wu(a),
        e.callbackPriority = 2,
        e.callbackNode = null,
        2
    }
    function Uo(e, t) {
        if (Ye !== 0 && Ye !== 5)
            return e.callbackNode = null,
            e.callbackPriority = 0,
            null;
        var l = e.callbackNode;
        if (Nu() && e.callbackNode !== l)
            return null;
        var a = ue;
        return a = On(e, e === Se ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1),
        a === 0 ? null : (go(e, a, t),
        Ho(e, ct()),
        e.callbackNode != null && e.callbackNode === l ? Uo.bind(null, e) : null)
    }
    function qo(e, t) {
        if (Nu())
            return null;
        go(e, t, !0)
    }
    function M0() {
        G0(function() {
            (oe & 6) !== 0 ? $u(Ts, O0) : Ro()
        })
    }
    function Lc() {
        if (vl === 0) {
            var e = sa;
            e === 0 && (e = En,
            En <<= 1,
            (En & 261888) === 0 && (En = 256)),
            vl = e
        }
        return vl
    }
    function Bo(e) {
        return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Dn("" + e)
    }
    function Lo(e, t) {
        var l = t.ownerDocument.createElement("input");
        return l.name = t.name,
        l.value = t.value,
        e.id && l.setAttribute("form", e.id),
        t.parentNode.insertBefore(l, t),
        e = new FormData(e),
        l.parentNode.removeChild(l),
        e
    }
    function _0(e, t, l, a, n) {
        if (t === "submit" && l && l.stateNode === n) {
            var u = Bo((n[et] || null).action)
              , i = a.submitter;
            i && (t = (t = i[et] || null) ? Bo(t.formAction) : i.getAttribute("formAction"),
            t !== null && (u = t,
            i = null));
            var s = new qn("action","action",null,a,n);
            e.push({
                event: s,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (a.defaultPrevented) {
                            if (vl !== 0) {
                                var o = i ? Lo(n, i) : new FormData(n);
                                uc(l, {
                                    pending: !0,
                                    data: o,
                                    method: n.method,
                                    action: u
                                }, null, o)
                            }
                        } else
                            typeof u == "function" && (s.preventDefault(),
                            o = i ? Lo(n, i) : new FormData(n),
                            uc(l, {
                                pending: !0,
                                data: o,
                                method: n.method,
                                action: u
                            }, u, o))
                    },
                    currentTarget: n
                }]
            })
        }
    }
    for (var Yc = 0; Yc < Ti.length; Yc++) {
        var Qc = Ti[Yc]
          , w0 = Qc.toLowerCase()
          , D0 = Qc[0].toUpperCase() + Qc.slice(1);
        Ct(w0, "on" + D0)
    }
    Ct(yf, "onAnimationEnd"),
    Ct(pf, "onAnimationIteration"),
    Ct(gf, "onAnimationStart"),
    Ct("dblclick", "onDoubleClick"),
    Ct("focusin", "onFocus"),
    Ct("focusout", "onBlur"),
    Ct($h, "onTransitionRun"),
    Ct(Wh, "onTransitionStart"),
    Ct(Fh, "onTransitionCancel"),
    Ct(vf, "onTransitionEnd"),
    kl("onMouseEnter", ["mouseout", "mouseover"]),
    kl("onMouseLeave", ["mouseout", "mouseover"]),
    kl("onPointerEnter", ["pointerout", "pointerover"]),
    kl("onPointerLeave", ["pointerout", "pointerover"]),
    zl("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    zl("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    zl("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    zl("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    zl("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    zl("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var hn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , R0 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(hn));
    function Yo(e, t) {
        t = (t & 4) !== 0;
        for (var l = 0; l < e.length; l++) {
            var a = e[l]
              , n = a.event;
            a = a.listeners;
            e: {
                var u = void 0;
                if (t)
                    for (var i = a.length - 1; 0 <= i; i--) {
                        var s = a[i]
                          , o = s.instance
                          , g = s.currentTarget;
                        if (s = s.listener,
                        o !== u && n.isPropagationStopped())
                            break e;
                        u = s,
                        n.currentTarget = g;
                        try {
                            u(n)
                        } catch (N) {
                            Yn(N)
                        }
                        n.currentTarget = null,
                        u = o
                    }
                else
                    for (i = 0; i < a.length; i++) {
                        if (s = a[i],
                        o = s.instance,
                        g = s.currentTarget,
                        s = s.listener,
                        o !== u && n.isPropagationStopped())
                            break e;
                        u = s,
                        n.currentTarget = g;
                        try {
                            u(n)
                        } catch (N) {
                            Yn(N)
                        }
                        n.currentTarget = null,
                        u = o
                    }
            }
        }
    }
    function ne(e, t) {
        var l = t[ei];
        l === void 0 && (l = t[ei] = new Set);
        var a = e + "__bubble";
        l.has(a) || (Qo(t, e, 2, !1),
        l.add(a))
    }
    function Gc(e, t, l) {
        var a = 0;
        t && (a |= 4),
        Qo(l, e, a, t)
    }
    var Eu = "_reactListening" + Math.random().toString(36).slice(2);
    function Vc(e) {
        if (!e[Eu]) {
            e[Eu] = !0,
            ws.forEach(function(l) {
                l !== "selectionchange" && (R0.has(l) || Gc(l, !1, e),
                Gc(l, !0, e))
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[Eu] || (t[Eu] = !0,
            Gc("selectionchange", !1, t))
        }
    }
    function Qo(e, t, l, a) {
        switch (pd(t)) {
        case 2:
            var n = sm;
            break;
        case 8:
            n = fm;
            break;
        default:
            n = ns
        }
        l = n.bind(null, t, l, e),
        n = void 0,
        !fi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (n = !0),
        a ? n !== void 0 ? e.addEventListener(t, l, {
            capture: !0,
            passive: n
        }) : e.addEventListener(t, l, !0) : n !== void 0 ? e.addEventListener(t, l, {
            passive: n
        }) : e.addEventListener(t, l, !1)
    }
    function Xc(e, t, l, a, n) {
        var u = a;
        if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
            e: for (; ; ) {
                if (a === null)
                    return;
                var i = a.tag;
                if (i === 3 || i === 4) {
                    var s = a.stateNode.containerInfo;
                    if (s === n)
                        break;
                    if (i === 4)
                        for (i = a.return; i !== null; ) {
                            var o = i.tag;
                            if ((o === 3 || o === 4) && i.stateNode.containerInfo === n)
                                return;
                            i = i.return
                        }
                    for (; s !== null; ) {
                        if (i = Zl(s),
                        i === null)
                            return;
                        if (o = i.tag,
                        o === 5 || o === 6 || o === 26 || o === 27) {
                            a = u = i;
                            continue e
                        }
                        s = s.parentNode
                    }
                }
                a = a.return
            }
        Xs(function() {
            var g = u
              , N = ci(l)
              , C = [];
            e: {
                var v = bf.get(e);
                if (v !== void 0) {
                    var x = qn
                      , U = e;
                    switch (e) {
                    case "keypress":
                        if (Hn(l) === 0)
                            break e;
                    case "keydown":
                    case "keyup":
                        x = zh;
                        break;
                    case "focusin":
                        U = "focus",
                        x = hi;
                        break;
                    case "focusout":
                        U = "blur",
                        x = hi;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        x = hi;
                        break;
                    case "click":
                        if (l.button === 2)
                            break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        x = Js;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        x = yh;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        x = Mh;
                        break;
                    case yf:
                    case pf:
                    case gf:
                        x = vh;
                        break;
                    case vf:
                        x = wh;
                        break;
                    case "scroll":
                    case "scrollend":
                        x = hh;
                        break;
                    case "wheel":
                        x = Rh;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        x = xh;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        x = $s;
                        break;
                    case "toggle":
                    case "beforetoggle":
                        x = Uh
                    }
                    var X = (t & 4) !== 0
                      , be = !X && (e === "scroll" || e === "scrollend")
                      , m = X ? v !== null ? v + "Capture" : null : v;
                    X = [];
                    for (var h = g, p; h !== null; ) {
                        var E = h;
                        if (p = E.stateNode,
                        E = E.tag,
                        E !== 5 && E !== 26 && E !== 27 || p === null || m === null || (E = Ra(h, m),
                        E != null && X.push(mn(h, E, p))),
                        be)
                            break;
                        h = h.return
                    }
                    0 < X.length && (v = new x(v,U,null,l,N),
                    C.push({
                        event: v,
                        listeners: X
                    }))
                }
            }
            if ((t & 7) === 0) {
                e: {
                    if (v = e === "mouseover" || e === "pointerover",
                    x = e === "mouseout" || e === "pointerout",
                    v && l !== ii && (U = l.relatedTarget || l.fromElement) && (Zl(U) || U[Xl]))
                        break e;
                    if ((x || v) && (v = N.window === N ? N : (v = N.ownerDocument) ? v.defaultView || v.parentWindow : window,
                    x ? (U = l.relatedTarget || l.toElement,
                    x = g,
                    U = U ? Zl(U) : null,
                    U !== null && (be = _(U),
                    X = U.tag,
                    U !== be || X !== 5 && X !== 27 && X !== 6) && (U = null)) : (x = null,
                    U = g),
                    x !== U)) {
                        if (X = Js,
                        E = "onMouseLeave",
                        m = "onMouseEnter",
                        h = "mouse",
                        (e === "pointerout" || e === "pointerover") && (X = $s,
                        E = "onPointerLeave",
                        m = "onPointerEnter",
                        h = "pointer"),
                        be = x == null ? v : Da(x),
                        p = U == null ? v : Da(U),
                        v = new X(E,h + "leave",x,l,N),
                        v.target = be,
                        v.relatedTarget = p,
                        E = null,
                        Zl(N) === g && (X = new X(m,h + "enter",U,l,N),
                        X.target = p,
                        X.relatedTarget = be,
                        E = X),
                        be = E,
                        x && U)
                            t: {
                                for (X = H0,
                                m = x,
                                h = U,
                                p = 0,
                                E = m; E; E = X(E))
                                    p++;
                                E = 0;
                                for (var G = h; G; G = X(G))
                                    E++;
                                for (; 0 < p - E; )
                                    m = X(m),
                                    p--;
                                for (; 0 < E - p; )
                                    h = X(h),
                                    E--;
                                for (; p--; ) {
                                    if (m === h || h !== null && m === h.alternate) {
                                        X = m;
                                        break t
                                    }
                                    m = X(m),
                                    h = X(h)
                                }
                                X = null
                            }
                        else
                            X = null;
                        x !== null && Go(C, v, x, X, !1),
                        U !== null && be !== null && Go(C, be, U, X, !0)
                    }
                }
                e: {
                    if (v = g ? Da(g) : window,
                    x = v.nodeName && v.nodeName.toLowerCase(),
                    x === "select" || x === "input" && v.type === "file")
                        var fe = af;
                    else if (tf(v))
                        if (nf)
                            fe = Kh;
                        else {
                            fe = Xh;
                            var Y = Vh
                        }
                    else
                        x = v.nodeName,
                        !x || x.toLowerCase() !== "input" || v.type !== "checkbox" && v.type !== "radio" ? g && ui(g.elementType) && (fe = af) : fe = Zh;
                    if (fe && (fe = fe(e, g))) {
                        lf(C, fe, l, N);
                        break e
                    }
                    Y && Y(e, v, g),
                    e === "focusout" && g && v.type === "number" && g.memoizedProps.value != null && ni(v, "number", v.value)
                }
                switch (Y = g ? Da(g) : window,
                e) {
                case "focusin":
                    (tf(Y) || Y.contentEditable === "true") && (ea = Y,
                    bi = g,
                    Ga = null);
                    break;
                case "focusout":
                    Ga = bi = ea = null;
                    break;
                case "mousedown":
                    xi = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    xi = !1,
                    hf(C, l, N);
                    break;
                case "selectionchange":
                    if (kh)
                        break;
                case "keydown":
                case "keyup":
                    hf(C, l, N)
                }
                var W;
                if (yi)
                    e: {
                        switch (e) {
                        case "compositionstart":
                            var ie = "onCompositionStart";
                            break e;
                        case "compositionend":
                            ie = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            ie = "onCompositionUpdate";
                            break e
                        }
                        ie = void 0
                    }
                else
                    Pl ? Ps(e, l) && (ie = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (ie = "onCompositionStart");
                ie && (Ws && l.locale !== "ko" && (Pl || ie !== "onCompositionStart" ? ie === "onCompositionEnd" && Pl && (W = Zs()) : (ll = N,
                ri = "value"in ll ? ll.value : ll.textContent,
                Pl = !0)),
                Y = zu(g, ie),
                0 < Y.length && (ie = new ks(ie,e,null,l,N),
                C.push({
                    event: ie,
                    listeners: Y
                }),
                W ? ie.data = W : (W = ef(l),
                W !== null && (ie.data = W)))),
                (W = Bh ? Lh(e, l) : Yh(e, l)) && (ie = zu(g, "onBeforeInput"),
                0 < ie.length && (Y = new ks("onBeforeInput","beforeinput",null,l,N),
                C.push({
                    event: Y,
                    listeners: ie
                }),
                Y.data = W)),
                _0(C, e, g, l, N)
            }
            Yo(C, t)
        })
    }
    function mn(e, t, l) {
        return {
            instance: e,
            listener: t,
            currentTarget: l
        }
    }
    function zu(e, t) {
        for (var l = t + "Capture", a = []; e !== null; ) {
            var n = e
              , u = n.stateNode;
            if (n = n.tag,
            n !== 5 && n !== 26 && n !== 27 || u === null || (n = Ra(e, l),
            n != null && a.unshift(mn(e, n, u)),
            n = Ra(e, t),
            n != null && a.push(mn(e, n, u))),
            e.tag === 3)
                return a;
            e = e.return
        }
        return []
    }
    function H0(e) {
        if (e === null)
            return null;
        do
            e = e.return;
        while (e && e.tag !== 5 && e.tag !== 27);
        return e || null
    }
    function Go(e, t, l, a, n) {
        for (var u = t._reactName, i = []; l !== null && l !== a; ) {
            var s = l
              , o = s.alternate
              , g = s.stateNode;
            if (s = s.tag,
            o !== null && o === a)
                break;
            s !== 5 && s !== 26 && s !== 27 || g === null || (o = g,
            n ? (g = Ra(l, u),
            g != null && i.unshift(mn(l, g, o))) : n || (g = Ra(l, u),
            g != null && i.push(mn(l, g, o)))),
            l = l.return
        }
        i.length !== 0 && e.push({
            event: t,
            listeners: i
        })
    }
    var U0 = /\r\n?/g
      , q0 = /\u0000|\uFFFD/g;
    function Vo(e) {
        return (typeof e == "string" ? e : "" + e).replace(U0, `
`).replace(q0, "")
    }
    function Xo(e, t) {
        return t = Vo(t),
        Vo(e) === t
    }
    function ve(e, t, l, a, n, u) {
        switch (l) {
        case "children":
            typeof a == "string" ? t === "body" || t === "textarea" && a === "" || Wl(e, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && Wl(e, "" + a);
            break;
        case "className":
            _n(e, "class", a);
            break;
        case "tabIndex":
            _n(e, "tabindex", a);
            break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
            _n(e, l, a);
            break;
        case "style":
            Gs(e, a, u);
            break;
        case "data":
            if (t !== "object") {
                _n(e, "data", a);
                break
            }
        case "src":
        case "href":
            if (a === "" && (t !== "a" || l !== "href")) {
                e.removeAttribute(l);
                break
            }
            if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
                e.removeAttribute(l);
                break
            }
            a = Dn("" + a),
            e.setAttribute(l, a);
            break;
        case "action":
        case "formAction":
            if (typeof a == "function") {
                e.setAttribute(l, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                break
            } else
                typeof u == "function" && (l === "formAction" ? (t !== "input" && ve(e, t, "name", n.name, n, null),
                ve(e, t, "formEncType", n.formEncType, n, null),
                ve(e, t, "formMethod", n.formMethod, n, null),
                ve(e, t, "formTarget", n.formTarget, n, null)) : (ve(e, t, "encType", n.encType, n, null),
                ve(e, t, "method", n.method, n, null),
                ve(e, t, "target", n.target, n, null)));
            if (a == null || typeof a == "symbol" || typeof a == "boolean") {
                e.removeAttribute(l);
                break
            }
            a = Dn("" + a),
            e.setAttribute(l, a);
            break;
        case "onClick":
            a != null && (e.onclick = qt);
            break;
        case "onScroll":
            a != null && ne("scroll", e);
            break;
        case "onScrollEnd":
            a != null && ne("scrollend", e);
            break;
        case "dangerouslySetInnerHTML":
            if (a != null) {
                if (typeof a != "object" || !("__html"in a))
                    throw Error(f(61));
                if (l = a.__html,
                l != null) {
                    if (n.children != null)
                        throw Error(f(60));
                    e.innerHTML = l
                }
            }
            break;
        case "multiple":
            e.multiple = a && typeof a != "function" && typeof a != "symbol";
            break;
        case "muted":
            e.muted = a && typeof a != "function" && typeof a != "symbol";
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
            break;
        case "autoFocus":
            break;
        case "xlinkHref":
            if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
                e.removeAttribute("xlink:href");
                break
            }
            l = Dn("" + a),
            e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
            break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
            a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, "" + a) : e.removeAttribute(l);
            break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
            a && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, "") : e.removeAttribute(l);
            break;
        case "capture":
        case "download":
            a === !0 ? e.setAttribute(l, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, a) : e.removeAttribute(l);
            break;
        case "cols":
        case "rows":
        case "size":
        case "span":
            a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? e.setAttribute(l, a) : e.removeAttribute(l);
            break;
        case "rowSpan":
        case "start":
            a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? e.removeAttribute(l) : e.setAttribute(l, a);
            break;
        case "popover":
            ne("beforetoggle", e),
            ne("toggle", e),
            Mn(e, "popover", a);
            break;
        case "xlinkActuate":
            Ut(e, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
            break;
        case "xlinkArcrole":
            Ut(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
            break;
        case "xlinkRole":
            Ut(e, "http://www.w3.org/1999/xlink", "xlink:role", a);
            break;
        case "xlinkShow":
            Ut(e, "http://www.w3.org/1999/xlink", "xlink:show", a);
            break;
        case "xlinkTitle":
            Ut(e, "http://www.w3.org/1999/xlink", "xlink:title", a);
            break;
        case "xlinkType":
            Ut(e, "http://www.w3.org/1999/xlink", "xlink:type", a);
            break;
        case "xmlBase":
            Ut(e, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
            break;
        case "xmlLang":
            Ut(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
            break;
        case "xmlSpace":
            Ut(e, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
            break;
        case "is":
            Mn(e, "is", a);
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = oh.get(l) || l,
            Mn(e, l, a))
        }
    }
    function Zc(e, t, l, a, n, u) {
        switch (l) {
        case "style":
            Gs(e, a, u);
            break;
        case "dangerouslySetInnerHTML":
            if (a != null) {
                if (typeof a != "object" || !("__html"in a))
                    throw Error(f(61));
                if (l = a.__html,
                l != null) {
                    if (n.children != null)
                        throw Error(f(60));
                    e.innerHTML = l
                }
            }
            break;
        case "children":
            typeof a == "string" ? Wl(e, a) : (typeof a == "number" || typeof a == "bigint") && Wl(e, "" + a);
            break;
        case "onScroll":
            a != null && ne("scroll", e);
            break;
        case "onScrollEnd":
            a != null && ne("scrollend", e);
            break;
        case "onClick":
            a != null && (e.onclick = qt);
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            if (!Ds.hasOwnProperty(l))
                e: {
                    if (l[0] === "o" && l[1] === "n" && (n = l.endsWith("Capture"),
                    t = l.slice(2, n ? l.length - 7 : void 0),
                    u = e[et] || null,
                    u = u != null ? u[l] : null,
                    typeof u == "function" && e.removeEventListener(t, u, n),
                    typeof a == "function")) {
                        typeof u != "function" && u !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)),
                        e.addEventListener(t, a, n);
                        break e
                    }
                    l in e ? e[l] = a : a === !0 ? e.setAttribute(l, "") : Mn(e, l, a)
                }
        }
    }
    function Je(e, t, l) {
        switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "img":
            ne("error", e),
            ne("load", e);
            var a = !1, n = !1, u;
            for (u in l)
                if (l.hasOwnProperty(u)) {
                    var i = l[u];
                    if (i != null)
                        switch (u) {
                        case "src":
                            a = !0;
                            break;
                        case "srcSet":
                            n = !0;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(f(137, t));
                        default:
                            ve(e, t, u, i, l, null)
                        }
                }
            n && ve(e, t, "srcSet", l.srcSet, l, null),
            a && ve(e, t, "src", l.src, l, null);
            return;
        case "input":
            ne("invalid", e);
            var s = u = i = n = null
              , o = null
              , g = null;
            for (a in l)
                if (l.hasOwnProperty(a)) {
                    var N = l[a];
                    if (N != null)
                        switch (a) {
                        case "name":
                            n = N;
                            break;
                        case "type":
                            i = N;
                            break;
                        case "checked":
                            o = N;
                            break;
                        case "defaultChecked":
                            g = N;
                            break;
                        case "value":
                            u = N;
                            break;
                        case "defaultValue":
                            s = N;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (N != null)
                                throw Error(f(137, t));
                            break;
                        default:
                            ve(e, t, a, N, l, null)
                        }
                }
            Bs(e, u, s, o, g, i, n, !1);
            return;
        case "select":
            ne("invalid", e),
            a = i = u = null;
            for (n in l)
                if (l.hasOwnProperty(n) && (s = l[n],
                s != null))
                    switch (n) {
                    case "value":
                        u = s;
                        break;
                    case "defaultValue":
                        i = s;
                        break;
                    case "multiple":
                        a = s;
                    default:
                        ve(e, t, n, s, l, null)
                    }
            t = u,
            l = i,
            e.multiple = !!a,
            t != null ? $l(e, !!a, t, !1) : l != null && $l(e, !!a, l, !0);
            return;
        case "textarea":
            ne("invalid", e),
            u = n = a = null;
            for (i in l)
                if (l.hasOwnProperty(i) && (s = l[i],
                s != null))
                    switch (i) {
                    case "value":
                        a = s;
                        break;
                    case "defaultValue":
                        n = s;
                        break;
                    case "children":
                        u = s;
                        break;
                    case "dangerouslySetInnerHTML":
                        if (s != null)
                            throw Error(f(91));
                        break;
                    default:
                        ve(e, t, i, s, l, null)
                    }
            Ys(e, a, n, u);
            return;
        case "option":
            for (o in l)
                if (l.hasOwnProperty(o) && (a = l[o],
                a != null))
                    switch (o) {
                    case "selected":
                        e.selected = a && typeof a != "function" && typeof a != "symbol";
                        break;
                    default:
                        ve(e, t, o, a, l, null)
                    }
            return;
        case "dialog":
            ne("beforetoggle", e),
            ne("toggle", e),
            ne("cancel", e),
            ne("close", e);
            break;
        case "iframe":
        case "object":
            ne("load", e);
            break;
        case "video":
        case "audio":
            for (a = 0; a < hn.length; a++)
                ne(hn[a], e);
            break;
        case "image":
            ne("error", e),
            ne("load", e);
            break;
        case "details":
            ne("toggle", e);
            break;
        case "embed":
        case "source":
        case "link":
            ne("error", e),
            ne("load", e);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
            for (g in l)
                if (l.hasOwnProperty(g) && (a = l[g],
                a != null))
                    switch (g) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        throw Error(f(137, t));
                    default:
                        ve(e, t, g, a, l, null)
                    }
            return;
        default:
            if (ui(t)) {
                for (N in l)
                    l.hasOwnProperty(N) && (a = l[N],
                    a !== void 0 && Zc(e, t, N, a, l, void 0));
                return
            }
        }
        for (s in l)
            l.hasOwnProperty(s) && (a = l[s],
            a != null && ve(e, t, s, a, l, null))
    }
    function B0(e, t, l, a) {
        switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "input":
            var n = null
              , u = null
              , i = null
              , s = null
              , o = null
              , g = null
              , N = null;
            for (x in l) {
                var C = l[x];
                if (l.hasOwnProperty(x) && C != null)
                    switch (x) {
                    case "checked":
                        break;
                    case "value":
                        break;
                    case "defaultValue":
                        o = C;
                    default:
                        a.hasOwnProperty(x) || ve(e, t, x, null, a, C)
                    }
            }
            for (var v in a) {
                var x = a[v];
                if (C = l[v],
                a.hasOwnProperty(v) && (x != null || C != null))
                    switch (v) {
                    case "type":
                        u = x;
                        break;
                    case "name":
                        n = x;
                        break;
                    case "checked":
                        g = x;
                        break;
                    case "defaultChecked":
                        N = x;
                        break;
                    case "value":
                        i = x;
                        break;
                    case "defaultValue":
                        s = x;
                        break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (x != null)
                            throw Error(f(137, t));
                        break;
                    default:
                        x !== C && ve(e, t, v, x, a, C)
                    }
            }
            ai(e, i, s, o, g, N, u, n);
            return;
        case "select":
            x = i = s = v = null;
            for (u in l)
                if (o = l[u],
                l.hasOwnProperty(u) && o != null)
                    switch (u) {
                    case "value":
                        break;
                    case "multiple":
                        x = o;
                    default:
                        a.hasOwnProperty(u) || ve(e, t, u, null, a, o)
                    }
            for (n in a)
                if (u = a[n],
                o = l[n],
                a.hasOwnProperty(n) && (u != null || o != null))
                    switch (n) {
                    case "value":
                        v = u;
                        break;
                    case "defaultValue":
                        s = u;
                        break;
                    case "multiple":
                        i = u;
                    default:
                        u !== o && ve(e, t, n, u, a, o)
                    }
            t = s,
            l = i,
            a = x,
            v != null ? $l(e, !!l, v, !1) : !!a != !!l && (t != null ? $l(e, !!l, t, !0) : $l(e, !!l, l ? [] : "", !1));
            return;
        case "textarea":
            x = v = null;
            for (s in l)
                if (n = l[s],
                l.hasOwnProperty(s) && n != null && !a.hasOwnProperty(s))
                    switch (s) {
                    case "value":
                        break;
                    case "children":
                        break;
                    default:
                        ve(e, t, s, null, a, n)
                    }
            for (i in a)
                if (n = a[i],
                u = l[i],
                a.hasOwnProperty(i) && (n != null || u != null))
                    switch (i) {
                    case "value":
                        v = n;
                        break;
                    case "defaultValue":
                        x = n;
                        break;
                    case "children":
                        break;
                    case "dangerouslySetInnerHTML":
                        if (n != null)
                            throw Error(f(91));
                        break;
                    default:
                        n !== u && ve(e, t, i, n, a, u)
                    }
            Ls(e, v, x);
            return;
        case "option":
            for (var U in l)
                if (v = l[U],
                l.hasOwnProperty(U) && v != null && !a.hasOwnProperty(U))
                    switch (U) {
                    case "selected":
                        e.selected = !1;
                        break;
                    default:
                        ve(e, t, U, null, a, v)
                    }
            for (o in a)
                if (v = a[o],
                x = l[o],
                a.hasOwnProperty(o) && v !== x && (v != null || x != null))
                    switch (o) {
                    case "selected":
                        e.selected = v && typeof v != "function" && typeof v != "symbol";
                        break;
                    default:
                        ve(e, t, o, v, a, x)
                    }
            return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
            for (var X in l)
                v = l[X],
                l.hasOwnProperty(X) && v != null && !a.hasOwnProperty(X) && ve(e, t, X, null, a, v);
            for (g in a)
                if (v = a[g],
                x = l[g],
                a.hasOwnProperty(g) && v !== x && (v != null || x != null))
                    switch (g) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (v != null)
                            throw Error(f(137, t));
                        break;
                    default:
                        ve(e, t, g, v, a, x)
                    }
            return;
        default:
            if (ui(t)) {
                for (var be in l)
                    v = l[be],
                    l.hasOwnProperty(be) && v !== void 0 && !a.hasOwnProperty(be) && Zc(e, t, be, void 0, a, v);
                for (N in a)
                    v = a[N],
                    x = l[N],
                    !a.hasOwnProperty(N) || v === x || v === void 0 && x === void 0 || Zc(e, t, N, v, a, x);
                return
            }
        }
        for (var m in l)
            v = l[m],
            l.hasOwnProperty(m) && v != null && !a.hasOwnProperty(m) && ve(e, t, m, null, a, v);
        for (C in a)
            v = a[C],
            x = l[C],
            !a.hasOwnProperty(C) || v === x || v == null && x == null || ve(e, t, C, v, a, x)
    }
    function Zo(e) {
        switch (e) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
            return !0;
        default:
            return !1
        }
    }
    function L0() {
        if (typeof performance.getEntriesByType == "function") {
            for (var e = 0, t = 0, l = performance.getEntriesByType("resource"), a = 0; a < l.length; a++) {
                var n = l[a]
                  , u = n.transferSize
                  , i = n.initiatorType
                  , s = n.duration;
                if (u && s && Zo(i)) {
                    for (i = 0,
                    s = n.responseEnd,
                    a += 1; a < l.length; a++) {
                        var o = l[a]
                          , g = o.startTime;
                        if (g > s)
                            break;
                        var N = o.transferSize
                          , C = o.initiatorType;
                        N && Zo(C) && (o = o.responseEnd,
                        i += N * (o < s ? 1 : (s - g) / (o - g)))
                    }
                    if (--a,
                    t += 8 * (u + i) / (n.duration / 1e3),
                    e++,
                    10 < e)
                        break
                }
            }
            if (0 < e)
                return t / e / 1e6
        }
        return navigator.connection && (e = navigator.connection.downlink,
        typeof e == "number") ? e : 5
    }
    var Kc = null
      , Jc = null;
    function Cu(e) {
        return e.nodeType === 9 ? e : e.ownerDocument
    }
    function Ko(e) {
        switch (e) {
        case "http://www.w3.org/2000/svg":
            return 1;
        case "http://www.w3.org/1998/Math/MathML":
            return 2;
        default:
            return 0
        }
    }
    function Jo(e, t) {
        if (e === 0)
            switch (t) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
            }
        return e === 1 && t === "foreignObject" ? 0 : e
    }
    function kc(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var $c = null;
    function Y0() {
        var e = window.event;
        return e && e.type === "popstate" ? e === $c ? !1 : ($c = e,
        !0) : ($c = null,
        !1)
    }
    var ko = typeof setTimeout == "function" ? setTimeout : void 0
      , Q0 = typeof clearTimeout == "function" ? clearTimeout : void 0
      , $o = typeof Promise == "function" ? Promise : void 0
      , G0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof $o < "u" ? function(e) {
        return $o.resolve(null).then(e).catch(V0)
    }
    : ko;
    function V0(e) {
        setTimeout(function() {
            throw e
        })
    }
    function bl(e) {
        return e === "head"
    }
    function Wo(e, t) {
        var l = t
          , a = 0;
        do {
            var n = l.nextSibling;
            if (e.removeChild(l),
            n && n.nodeType === 8)
                if (l = n.data,
                l === "/$" || l === "/&") {
                    if (a === 0) {
                        e.removeChild(n),
                        za(t);
                        return
                    }
                    a--
                } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&")
                    a++;
                else if (l === "html")
                    yn(e.ownerDocument.documentElement);
                else if (l === "head") {
                    l = e.ownerDocument.head,
                    yn(l);
                    for (var u = l.firstChild; u; ) {
                        var i = u.nextSibling
                          , s = u.nodeName;
                        u[wa] || s === "SCRIPT" || s === "STYLE" || s === "LINK" && u.rel.toLowerCase() === "stylesheet" || l.removeChild(u),
                        u = i
                    }
                } else
                    l === "body" && yn(e.ownerDocument.body);
            l = n
        } while (l);
        za(t)
    }
    function Fo(e, t) {
        var l = e;
        e = 0;
        do {
            var a = l.nextSibling;
            if (l.nodeType === 1 ? t ? (l._stashedDisplay = l.style.display,
            l.style.display = "none") : (l.style.display = l._stashedDisplay || "",
            l.getAttribute("style") === "" && l.removeAttribute("style")) : l.nodeType === 3 && (t ? (l._stashedText = l.nodeValue,
            l.nodeValue = "") : l.nodeValue = l._stashedText || ""),
            a && a.nodeType === 8)
                if (l = a.data,
                l === "/$") {
                    if (e === 0)
                        break;
                    e--
                } else
                    l !== "$" && l !== "$?" && l !== "$~" && l !== "$!" || e++;
            l = a
        } while (l)
    }
    function Wc(e) {
        var t = e.firstChild;
        for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
            var l = t;
            switch (t = t.nextSibling,
            l.nodeName) {
            case "HTML":
            case "HEAD":
            case "BODY":
                Wc(l),
                ti(l);
                continue;
            case "SCRIPT":
            case "STYLE":
                continue;
            case "LINK":
                if (l.rel.toLowerCase() === "stylesheet")
                    continue
            }
            e.removeChild(l)
        }
    }
    function X0(e, t, l, a) {
        for (; e.nodeType === 1; ) {
            var n = l;
            if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden"))
                    break
            } else if (a) {
                if (!e[wa])
                    switch (t) {
                    case "meta":
                        if (!e.hasAttribute("itemprop"))
                            break;
                        return e;
                    case "link":
                        if (u = e.getAttribute("rel"),
                        u === "stylesheet" && e.hasAttribute("data-precedence"))
                            break;
                        if (u !== n.rel || e.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || e.getAttribute("title") !== (n.title == null ? null : n.title))
                            break;
                        return e;
                    case "style":
                        if (e.hasAttribute("data-precedence"))
                            break;
                        return e;
                    case "script":
                        if (u = e.getAttribute("src"),
                        (u !== (n.src == null ? null : n.src) || e.getAttribute("type") !== (n.type == null ? null : n.type) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && u && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                            break;
                        return e;
                    default:
                        return e
                    }
            } else if (t === "input" && e.type === "hidden") {
                var u = n.name == null ? null : "" + n.name;
                if (n.type === "hidden" && e.getAttribute("name") === u)
                    return e
            } else
                return e;
            if (e = Et(e.nextSibling),
            e === null)
                break
        }
        return null
    }
    function Z0(e, t, l) {
        if (t === "")
            return null;
        for (; e.nodeType !== 3; )
            if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = Et(e.nextSibling),
            e === null))
                return null;
        return e
    }
    function Io(e, t) {
        for (; e.nodeType !== 8; )
            if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Et(e.nextSibling),
            e === null))
                return null;
        return e
    }
    function Fc(e) {
        return e.data === "$?" || e.data === "$~"
    }
    function Ic(e) {
        return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading"
    }
    function K0(e, t) {
        var l = e.ownerDocument;
        if (e.data === "$~")
            e._reactRetry = t;
        else if (e.data !== "$?" || l.readyState !== "loading")
            t();
        else {
            var a = function() {
                t(),
                l.removeEventListener("DOMContentLoaded", a)
            };
            l.addEventListener("DOMContentLoaded", a),
            e._reactRetry = a
        }
    }
    function Et(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3)
                break;
            if (t === 8) {
                if (t = e.data,
                t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
                    break;
                if (t === "/$" || t === "/&")
                    return null
            }
        }
        return e
    }
    var Pc = null;
    function Po(e) {
        e = e.nextSibling;
        for (var t = 0; e; ) {
            if (e.nodeType === 8) {
                var l = e.data;
                if (l === "/$" || l === "/&") {
                    if (t === 0)
                        return Et(e.nextSibling);
                    t--
                } else
                    l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || t++
            }
            e = e.nextSibling
        }
        return null
    }
    function ed(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
            if (e.nodeType === 8) {
                var l = e.data;
                if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
                    if (t === 0)
                        return e;
                    t--
                } else
                    l !== "/$" && l !== "/&" || t++
            }
            e = e.previousSibling
        }
        return null
    }
    function td(e, t, l) {
        switch (t = Cu(l),
        e) {
        case "html":
            if (e = t.documentElement,
            !e)
                throw Error(f(452));
            return e;
        case "head":
            if (e = t.head,
            !e)
                throw Error(f(453));
            return e;
        case "body":
            if (e = t.body,
            !e)
                throw Error(f(454));
            return e;
        default:
            throw Error(f(451))
        }
    }
    function yn(e) {
        for (var t = e.attributes; t.length; )
            e.removeAttributeNode(t[0]);
        ti(e)
    }
    var zt = new Map
      , ld = new Set;
    function Ou(e) {
        return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument
    }
    var Pt = D.d;
    D.d = {
        f: J0,
        r: k0,
        D: $0,
        C: W0,
        L: F0,
        m: I0,
        X: em,
        S: P0,
        M: tm
    };
    function J0() {
        var e = Pt.f()
          , t = xu();
        return e || t
    }
    function k0(e) {
        var t = Kl(e);
        t !== null && t.tag === 5 && t.type === "form" ? vr(t) : Pt.r(e)
    }
    var Aa = typeof document > "u" ? null : document;
    function ad(e, t, l) {
        var a = Aa;
        if (a && typeof t == "string" && t) {
            var n = bt(t);
            n = 'link[rel="' + e + '"][href="' + n + '"]',
            typeof l == "string" && (n += '[crossorigin="' + l + '"]'),
            ld.has(n) || (ld.add(n),
            e = {
                rel: e,
                crossOrigin: l,
                href: t
            },
            a.querySelector(n) === null && (t = a.createElement("link"),
            Je(t, "link", e),
            Qe(t),
            a.head.appendChild(t)))
        }
    }
    function $0(e) {
        Pt.D(e),
        ad("dns-prefetch", e, null)
    }
    function W0(e, t) {
        Pt.C(e, t),
        ad("preconnect", e, t)
    }
    function F0(e, t, l) {
        Pt.L(e, t, l);
        var a = Aa;
        if (a && e && t) {
            var n = 'link[rel="preload"][as="' + bt(t) + '"]';
            t === "image" && l && l.imageSrcSet ? (n += '[imagesrcset="' + bt(l.imageSrcSet) + '"]',
            typeof l.imageSizes == "string" && (n += '[imagesizes="' + bt(l.imageSizes) + '"]')) : n += '[href="' + bt(e) + '"]';
            var u = n;
            switch (t) {
            case "style":
                u = ja(e);
                break;
            case "script":
                u = Ea(e)
            }
            zt.has(u) || (e = w({
                rel: "preload",
                href: t === "image" && l && l.imageSrcSet ? void 0 : e,
                as: t
            }, l),
            zt.set(u, e),
            a.querySelector(n) !== null || t === "style" && a.querySelector(pn(u)) || t === "script" && a.querySelector(gn(u)) || (t = a.createElement("link"),
            Je(t, "link", e),
            Qe(t),
            a.head.appendChild(t)))
        }
    }
    function I0(e, t) {
        Pt.m(e, t);
        var l = Aa;
        if (l && e) {
            var a = t && typeof t.as == "string" ? t.as : "script"
              , n = 'link[rel="modulepreload"][as="' + bt(a) + '"][href="' + bt(e) + '"]'
              , u = n;
            switch (a) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
                u = Ea(e)
            }
            if (!zt.has(u) && (e = w({
                rel: "modulepreload",
                href: e
            }, t),
            zt.set(u, e),
            l.querySelector(n) === null)) {
                switch (a) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    if (l.querySelector(gn(u)))
                        return
                }
                a = l.createElement("link"),
                Je(a, "link", e),
                Qe(a),
                l.head.appendChild(a)
            }
        }
    }
    function P0(e, t, l) {
        Pt.S(e, t, l);
        var a = Aa;
        if (a && e) {
            var n = Jl(a).hoistableStyles
              , u = ja(e);
            t = t || "default";
            var i = n.get(u);
            if (!i) {
                var s = {
                    loading: 0,
                    preload: null
                };
                if (i = a.querySelector(pn(u)))
                    s.loading = 5;
                else {
                    e = w({
                        rel: "stylesheet",
                        href: e,
                        "data-precedence": t
                    }, l),
                    (l = zt.get(u)) && es(e, l);
                    var o = i = a.createElement("link");
                    Qe(o),
                    Je(o, "link", e),
                    o._p = new Promise(function(g, N) {
                        o.onload = g,
                        o.onerror = N
                    }
                    ),
                    o.addEventListener("load", function() {
                        s.loading |= 1
                    }),
                    o.addEventListener("error", function() {
                        s.loading |= 2
                    }),
                    s.loading |= 4,
                    Mu(i, t, a)
                }
                i = {
                    type: "stylesheet",
                    instance: i,
                    count: 1,
                    state: s
                },
                n.set(u, i)
            }
        }
    }
    function em(e, t) {
        Pt.X(e, t);
        var l = Aa;
        if (l && e) {
            var a = Jl(l).hoistableScripts
              , n = Ea(e)
              , u = a.get(n);
            u || (u = l.querySelector(gn(n)),
            u || (e = w({
                src: e,
                async: !0
            }, t),
            (t = zt.get(n)) && ts(e, t),
            u = l.createElement("script"),
            Qe(u),
            Je(u, "link", e),
            l.head.appendChild(u)),
            u = {
                type: "script",
                instance: u,
                count: 1,
                state: null
            },
            a.set(n, u))
        }
    }
    function tm(e, t) {
        Pt.M(e, t);
        var l = Aa;
        if (l && e) {
            var a = Jl(l).hoistableScripts
              , n = Ea(e)
              , u = a.get(n);
            u || (u = l.querySelector(gn(n)),
            u || (e = w({
                src: e,
                async: !0,
                type: "module"
            }, t),
            (t = zt.get(n)) && ts(e, t),
            u = l.createElement("script"),
            Qe(u),
            Je(u, "link", e),
            l.head.appendChild(u)),
            u = {
                type: "script",
                instance: u,
                count: 1,
                state: null
            },
            a.set(n, u))
        }
    }
    function nd(e, t, l, a) {
        var n = (n = le.current) ? Ou(n) : null;
        if (!n)
            throw Error(f(446));
        switch (e) {
        case "meta":
        case "title":
            return null;
        case "style":
            return typeof l.precedence == "string" && typeof l.href == "string" ? (t = ja(l.href),
            l = Jl(n).hoistableStyles,
            a = l.get(t),
            a || (a = {
                type: "style",
                instance: null,
                count: 0,
                state: null
            },
            l.set(t, a)),
            a) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        case "link":
            if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
                e = ja(l.href);
                var u = Jl(n).hoistableStyles
                  , i = u.get(e);
                if (i || (n = n.ownerDocument || n,
                i = {
                    type: "stylesheet",
                    instance: null,
                    count: 0,
                    state: {
                        loading: 0,
                        preload: null
                    }
                },
                u.set(e, i),
                (u = n.querySelector(pn(e))) && !u._p && (i.instance = u,
                i.state.loading = 5),
                zt.has(e) || (l = {
                    rel: "preload",
                    as: "style",
                    href: l.href,
                    crossOrigin: l.crossOrigin,
                    integrity: l.integrity,
                    media: l.media,
                    hrefLang: l.hrefLang,
                    referrerPolicy: l.referrerPolicy
                },
                zt.set(e, l),
                u || lm(n, e, l, i.state))),
                t && a === null)
                    throw Error(f(528, ""));
                return i
            }
            if (t && a !== null)
                throw Error(f(529, ""));
            return null;
        case "script":
            return t = l.async,
            l = l.src,
            typeof l == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Ea(l),
            l = Jl(n).hoistableScripts,
            a = l.get(t),
            a || (a = {
                type: "script",
                instance: null,
                count: 0,
                state: null
            },
            l.set(t, a)),
            a) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        default:
            throw Error(f(444, e))
        }
    }
    function ja(e) {
        return 'href="' + bt(e) + '"'
    }
    function pn(e) {
        return 'link[rel="stylesheet"][' + e + "]"
    }
    function ud(e) {
        return w({}, e, {
            "data-precedence": e.precedence,
            precedence: null
        })
    }
    function lm(e, t, l, a) {
        e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = e.createElement("link"),
        a.preload = t,
        t.addEventListener("load", function() {
            return a.loading |= 1
        }),
        t.addEventListener("error", function() {
            return a.loading |= 2
        }),
        Je(t, "link", l),
        Qe(t),
        e.head.appendChild(t))
    }
    function Ea(e) {
        return '[src="' + bt(e) + '"]'
    }
    function gn(e) {
        return "script[async]" + e
    }
    function id(e, t, l) {
        if (t.count++,
        t.instance === null)
            switch (t.type) {
            case "style":
                var a = e.querySelector('style[data-href~="' + bt(l.href) + '"]');
                if (a)
                    return t.instance = a,
                    Qe(a),
                    a;
                var n = w({}, l, {
                    "data-href": l.href,
                    "data-precedence": l.precedence,
                    href: null,
                    precedence: null
                });
                return a = (e.ownerDocument || e).createElement("style"),
                Qe(a),
                Je(a, "style", n),
                Mu(a, l.precedence, e),
                t.instance = a;
            case "stylesheet":
                n = ja(l.href);
                var u = e.querySelector(pn(n));
                if (u)
                    return t.state.loading |= 4,
                    t.instance = u,
                    Qe(u),
                    u;
                a = ud(l),
                (n = zt.get(n)) && es(a, n),
                u = (e.ownerDocument || e).createElement("link"),
                Qe(u);
                var i = u;
                return i._p = new Promise(function(s, o) {
                    i.onload = s,
                    i.onerror = o
                }
                ),
                Je(u, "link", a),
                t.state.loading |= 4,
                Mu(u, l.precedence, e),
                t.instance = u;
            case "script":
                return u = Ea(l.src),
                (n = e.querySelector(gn(u))) ? (t.instance = n,
                Qe(n),
                n) : (a = l,
                (n = zt.get(u)) && (a = w({}, l),
                ts(a, n)),
                e = e.ownerDocument || e,
                n = e.createElement("script"),
                Qe(n),
                Je(n, "link", a),
                e.head.appendChild(n),
                t.instance = n);
            case "void":
                return null;
            default:
                throw Error(f(443, t.type))
            }
        else
            t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance,
            t.state.loading |= 4,
            Mu(a, l.precedence, e));
        return t.instance
    }
    function Mu(e, t, l) {
        for (var a = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), n = a.length ? a[a.length - 1] : null, u = n, i = 0; i < a.length; i++) {
            var s = a[i];
            if (s.dataset.precedence === t)
                u = s;
            else if (u !== n)
                break
        }
        u ? u.parentNode.insertBefore(e, u.nextSibling) : (t = l.nodeType === 9 ? l.head : l,
        t.insertBefore(e, t.firstChild))
    }
    function es(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
        e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
        e.title == null && (e.title = t.title)
    }
    function ts(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
        e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
        e.integrity == null && (e.integrity = t.integrity)
    }
    var _u = null;
    function cd(e, t, l) {
        if (_u === null) {
            var a = new Map
              , n = _u = new Map;
            n.set(l, a)
        } else
            n = _u,
            a = n.get(l),
            a || (a = new Map,
            n.set(l, a));
        if (a.has(e))
            return a;
        for (a.set(e, null),
        l = l.getElementsByTagName(e),
        n = 0; n < l.length; n++) {
            var u = l[n];
            if (!(u[wa] || u[Ve] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
                var i = u.getAttribute(t) || "";
                i = e + i;
                var s = a.get(i);
                s ? s.push(u) : a.set(i, [u])
            }
        }
        return a
    }
    function sd(e, t, l) {
        e = e.ownerDocument || e,
        e.head.insertBefore(l, t === "title" ? e.querySelector("head > title") : null)
    }
    function am(e, t, l) {
        if (l === 1 || t.itemProp != null)
            return !1;
        switch (e) {
        case "meta":
        case "title":
            return !0;
        case "style":
            if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
                break;
            return !0;
        case "link":
            if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
                break;
            switch (t.rel) {
            case "stylesheet":
                return e = t.disabled,
                typeof t.precedence == "string" && e == null;
            default:
                return !0
            }
        case "script":
            if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
                return !0
        }
        return !1
    }
    function fd(e) {
        return !(e.type === "stylesheet" && (e.state.loading & 3) === 0)
    }
    function nm(e, t, l, a) {
        if (l.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (l.state.loading & 4) === 0) {
            if (l.instance === null) {
                var n = ja(a.href)
                  , u = t.querySelector(pn(n));
                if (u) {
                    t = u._p,
                    t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++,
                    e = wu.bind(e),
                    t.then(e, e)),
                    l.state.loading |= 4,
                    l.instance = u,
                    Qe(u);
                    return
                }
                u = t.ownerDocument || t,
                a = ud(a),
                (n = zt.get(n)) && es(a, n),
                u = u.createElement("link"),
                Qe(u);
                var i = u;
                i._p = new Promise(function(s, o) {
                    i.onload = s,
                    i.onerror = o
                }
                ),
                Je(u, "link", a),
                l.instance = u
            }
            e.stylesheets === null && (e.stylesheets = new Map),
            e.stylesheets.set(l, t),
            (t = l.state.preload) && (l.state.loading & 3) === 0 && (e.count++,
            l = wu.bind(e),
            t.addEventListener("load", l),
            t.addEventListener("error", l))
        }
    }
    var ls = 0;
    function um(e, t) {
        return e.stylesheets && e.count === 0 && Ru(e, e.stylesheets),
        0 < e.count || 0 < e.imgCount ? function(l) {
            var a = setTimeout(function() {
                if (e.stylesheets && Ru(e, e.stylesheets),
                e.unsuspend) {
                    var u = e.unsuspend;
                    e.unsuspend = null,
                    u()
                }
            }, 6e4 + t);
            0 < e.imgBytes && ls === 0 && (ls = 62500 * L0());
            var n = setTimeout(function() {
                if (e.waitingForImages = !1,
                e.count === 0 && (e.stylesheets && Ru(e, e.stylesheets),
                e.unsuspend)) {
                    var u = e.unsuspend;
                    e.unsuspend = null,
                    u()
                }
            }, (e.imgBytes > ls ? 50 : 800) + t);
            return e.unsuspend = l,
            function() {
                e.unsuspend = null,
                clearTimeout(a),
                clearTimeout(n)
            }
        }
        : null
    }
    function wu() {
        if (this.count--,
        this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
            if (this.stylesheets)
                Ru(this, this.stylesheets);
            else if (this.unsuspend) {
                var e = this.unsuspend;
                this.unsuspend = null,
                e()
            }
        }
    }
    var Du = null;
    function Ru(e, t) {
        e.stylesheets = null,
        e.unsuspend !== null && (e.count++,
        Du = new Map,
        t.forEach(im, e),
        Du = null,
        wu.call(e))
    }
    function im(e, t) {
        if (!(t.state.loading & 4)) {
            var l = Du.get(e);
            if (l)
                var a = l.get(null);
            else {
                l = new Map,
                Du.set(e, l);
                for (var n = e.querySelectorAll("link[data-precedence],style[data-precedence]"), u = 0; u < n.length; u++) {
                    var i = n[u];
                    (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (l.set(i.dataset.precedence, i),
                    a = i)
                }
                a && l.set(null, a)
            }
            n = t.instance,
            i = n.getAttribute("data-precedence"),
            u = l.get(i) || a,
            u === a && l.set(null, n),
            l.set(i, n),
            this.count++,
            a = wu.bind(this),
            n.addEventListener("load", a),
            n.addEventListener("error", a),
            u ? u.parentNode.insertBefore(n, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e,
            e.insertBefore(n, e.firstChild)),
            t.state.loading |= 4
        }
    }
    var vn = {
        $$typeof: J,
        Provider: null,
        Consumer: null,
        _currentValue: H,
        _currentValue2: H,
        _threadCount: 0
    };
    function cm(e, t, l, a, n, u, i, s, o) {
        this.tag = 1,
        this.containerInfo = e,
        this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
        this.callbackPriority = 0,
        this.expirationTimes = Fu(-1),
        this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = Fu(0),
        this.hiddenUpdates = Fu(null),
        this.identifierPrefix = a,
        this.onUncaughtError = n,
        this.onCaughtError = u,
        this.onRecoverableError = i,
        this.pooledCache = null,
        this.pooledCacheLanes = 0,
        this.formState = o,
        this.incompleteTransitions = new Map
    }
    function rd(e, t, l, a, n, u, i, s, o, g, N, C) {
        return e = new cm(e,t,l,i,o,g,N,C,s),
        t = 1,
        u === !0 && (t |= 24),
        u = ot(3, null, null, t),
        e.current = u,
        u.stateNode = e,
        t = Hi(),
        t.refCount++,
        e.pooledCache = t,
        t.refCount++,
        u.memoizedState = {
            element: a,
            isDehydrated: l,
            cache: t
        },
        Li(u),
        e
    }
    function od(e) {
        return e ? (e = aa,
        e) : aa
    }
    function dd(e, t, l, a, n, u) {
        n = od(n),
        a.context === null ? a.context = n : a.pendingContext = n,
        a = sl(t),
        a.payload = {
            element: l
        },
        u = u === void 0 ? null : u,
        u !== null && (a.callback = u),
        l = fl(e, a, t),
        l !== null && (it(l, e, t),
        $a(l, e, t))
    }
    function hd(e, t) {
        if (e = e.memoizedState,
        e !== null && e.dehydrated !== null) {
            var l = e.retryLane;
            e.retryLane = l !== 0 && l < t ? l : t
        }
    }
    function as(e, t) {
        hd(e, t),
        (e = e.alternate) && hd(e, t)
    }
    function md(e) {
        if (e.tag === 13 || e.tag === 31) {
            var t = _l(e, 67108864);
            t !== null && it(t, e, 67108864),
            as(e, 67108864)
        }
    }
    function yd(e) {
        if (e.tag === 13 || e.tag === 31) {
            var t = pt();
            t = Iu(t);
            var l = _l(e, t);
            l !== null && it(l, e, t),
            as(e, t)
        }
    }
    var Hu = !0;
    function sm(e, t, l, a) {
        var n = T.T;
        T.T = null;
        var u = D.p;
        try {
            D.p = 2,
            ns(e, t, l, a)
        } finally {
            D.p = u,
            T.T = n
        }
    }
    function fm(e, t, l, a) {
        var n = T.T;
        T.T = null;
        var u = D.p;
        try {
            D.p = 8,
            ns(e, t, l, a)
        } finally {
            D.p = u,
            T.T = n
        }
    }
    function ns(e, t, l, a) {
        if (Hu) {
            var n = us(a);
            if (n === null)
                Xc(e, t, a, Uu, l),
                gd(e, a);
            else if (om(n, e, t, l, a))
                a.stopPropagation();
            else if (gd(e, a),
            t & 4 && -1 < rm.indexOf(e)) {
                for (; n !== null; ) {
                    var u = Kl(n);
                    if (u !== null)
                        switch (u.tag) {
                        case 3:
                            if (u = u.stateNode,
                            u.current.memoizedState.isDehydrated) {
                                var i = El(u.pendingLanes);
                                if (i !== 0) {
                                    var s = u;
                                    for (s.pendingLanes |= 2,
                                    s.entangledLanes |= 2; i; ) {
                                        var o = 1 << 31 - ft(i);
                                        s.entanglements[1] |= o,
                                        i &= ~o
                                    }
                                    Rt(u),
                                    (oe & 6) === 0 && (vu = ct() + 500,
                                    dn(0))
                                }
                            }
                            break;
                        case 31:
                        case 13:
                            s = _l(u, 2),
                            s !== null && it(s, u, 2),
                            xu(),
                            as(u, 2)
                        }
                    if (u = us(a),
                    u === null && Xc(e, t, a, Uu, l),
                    u === n)
                        break;
                    n = u
                }
                n !== null && a.stopPropagation()
            } else
                Xc(e, t, a, null, l)
        }
    }
    function us(e) {
        return e = ci(e),
        is(e)
    }
    var Uu = null;
    function is(e) {
        if (Uu = null,
        e = Zl(e),
        e !== null) {
            var t = _(e);
            if (t === null)
                e = null;
            else {
                var l = t.tag;
                if (l === 13) {
                    if (e = j(t),
                    e !== null)
                        return e;
                    e = null
                } else if (l === 31) {
                    if (e = M(t),
                    e !== null)
                        return e;
                    e = null
                } else if (l === 3) {
                    if (t.stateNode.current.memoizedState.isDehydrated)
                        return t.tag === 3 ? t.stateNode.containerInfo : null;
                    e = null
                } else
                    t !== e && (e = null)
            }
        }
        return Uu = e,
        null
    }
    function pd(e) {
        switch (e) {
        case "beforetoggle":
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
        case "toggle":
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
            return 2;
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
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 8;
        case "message":
            switch ($d()) {
            case Ts:
                return 2;
            case Ns:
                return 8;
            case jn:
            case Wd:
                return 32;
            case As:
                return 268435456;
            default:
                return 32
            }
        default:
            return 32
        }
    }
    var cs = !1
      , xl = null
      , Sl = null
      , Tl = null
      , bn = new Map
      , xn = new Map
      , Nl = []
      , rm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function gd(e, t) {
        switch (e) {
        case "focusin":
        case "focusout":
            xl = null;
            break;
        case "dragenter":
        case "dragleave":
            Sl = null;
            break;
        case "mouseover":
        case "mouseout":
            Tl = null;
            break;
        case "pointerover":
        case "pointerout":
            bn.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            xn.delete(t.pointerId)
        }
    }
    function Sn(e, t, l, a, n, u) {
        return e === null || e.nativeEvent !== u ? (e = {
            blockedOn: t,
            domEventName: l,
            eventSystemFlags: a,
            nativeEvent: u,
            targetContainers: [n]
        },
        t !== null && (t = Kl(t),
        t !== null && md(t)),
        e) : (e.eventSystemFlags |= a,
        t = e.targetContainers,
        n !== null && t.indexOf(n) === -1 && t.push(n),
        e)
    }
    function om(e, t, l, a, n) {
        switch (t) {
        case "focusin":
            return xl = Sn(xl, e, t, l, a, n),
            !0;
        case "dragenter":
            return Sl = Sn(Sl, e, t, l, a, n),
            !0;
        case "mouseover":
            return Tl = Sn(Tl, e, t, l, a, n),
            !0;
        case "pointerover":
            var u = n.pointerId;
            return bn.set(u, Sn(bn.get(u) || null, e, t, l, a, n)),
            !0;
        case "gotpointercapture":
            return u = n.pointerId,
            xn.set(u, Sn(xn.get(u) || null, e, t, l, a, n)),
            !0
        }
        return !1
    }
    function vd(e) {
        var t = Zl(e.target);
        if (t !== null) {
            var l = _(t);
            if (l !== null) {
                if (t = l.tag,
                t === 13) {
                    if (t = j(l),
                    t !== null) {
                        e.blockedOn = t,
                        Ms(e.priority, function() {
                            yd(l)
                        });
                        return
                    }
                } else if (t === 31) {
                    if (t = M(l),
                    t !== null) {
                        e.blockedOn = t,
                        Ms(e.priority, function() {
                            yd(l)
                        });
                        return
                    }
                } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
                    return
                }
            }
        }
        e.blockedOn = null
    }
    function qu(e) {
        if (e.blockedOn !== null)
            return !1;
        for (var t = e.targetContainers; 0 < t.length; ) {
            var l = us(e.nativeEvent);
            if (l === null) {
                l = e.nativeEvent;
                var a = new l.constructor(l.type,l);
                ii = a,
                l.target.dispatchEvent(a),
                ii = null
            } else
                return t = Kl(l),
                t !== null && md(t),
                e.blockedOn = l,
                !1;
            t.shift()
        }
        return !0
    }
    function bd(e, t, l) {
        qu(e) && l.delete(t)
    }
    function dm() {
        cs = !1,
        xl !== null && qu(xl) && (xl = null),
        Sl !== null && qu(Sl) && (Sl = null),
        Tl !== null && qu(Tl) && (Tl = null),
        bn.forEach(bd),
        xn.forEach(bd)
    }
    function Bu(e, t) {
        e.blockedOn === t && (e.blockedOn = null,
        cs || (cs = !0,
        r.unstable_scheduleCallback(r.unstable_NormalPriority, dm)))
    }
    var Lu = null;
    function xd(e) {
        Lu !== e && (Lu = e,
        r.unstable_scheduleCallback(r.unstable_NormalPriority, function() {
            Lu === e && (Lu = null);
            for (var t = 0; t < e.length; t += 3) {
                var l = e[t]
                  , a = e[t + 1]
                  , n = e[t + 2];
                if (typeof a != "function") {
                    if (is(a || l) === null)
                        continue;
                    break
                }
                var u = Kl(l);
                u !== null && (e.splice(t, 3),
                t -= 3,
                uc(u, {
                    pending: !0,
                    data: n,
                    method: l.method,
                    action: a
                }, a, n))
            }
        }))
    }
    function za(e) {
        function t(o) {
            return Bu(o, e)
        }
        xl !== null && Bu(xl, e),
        Sl !== null && Bu(Sl, e),
        Tl !== null && Bu(Tl, e),
        bn.forEach(t),
        xn.forEach(t);
        for (var l = 0; l < Nl.length; l++) {
            var a = Nl[l];
            a.blockedOn === e && (a.blockedOn = null)
        }
        for (; 0 < Nl.length && (l = Nl[0],
        l.blockedOn === null); )
            vd(l),
            l.blockedOn === null && Nl.shift();
        if (l = (e.ownerDocument || e).$$reactFormReplay,
        l != null)
            for (a = 0; a < l.length; a += 3) {
                var n = l[a]
                  , u = l[a + 1]
                  , i = n[et] || null;
                if (typeof u == "function")
                    i || xd(l);
                else if (i) {
                    var s = null;
                    if (u && u.hasAttribute("formAction")) {
                        if (n = u,
                        i = u[et] || null)
                            s = i.formAction;
                        else if (is(n) !== null)
                            continue
                    } else
                        s = i.action;
                    typeof s == "function" ? l[a + 1] = s : (l.splice(a, 3),
                    a -= 3),
                    xd(l)
                }
            }
    }
    function Sd() {
        function e(u) {
            u.canIntercept && u.info === "react-transition" && u.intercept({
                handler: function() {
                    return new Promise(function(i) {
                        return n = i
                    }
                    )
                },
                focusReset: "manual",
                scroll: "manual"
            })
        }
        function t() {
            n !== null && (n(),
            n = null),
            a || setTimeout(l, 20)
        }
        function l() {
            if (!a && !navigation.transition) {
                var u = navigation.currentEntry;
                u && u.url != null && navigation.navigate(u.url, {
                    state: u.getState(),
                    info: "react-transition",
                    history: "replace"
                })
            }
        }
        if (typeof navigation == "object") {
            var a = !1
              , n = null;
            return navigation.addEventListener("navigate", e),
            navigation.addEventListener("navigatesuccess", t),
            navigation.addEventListener("navigateerror", t),
            setTimeout(l, 100),
            function() {
                a = !0,
                navigation.removeEventListener("navigate", e),
                navigation.removeEventListener("navigatesuccess", t),
                navigation.removeEventListener("navigateerror", t),
                n !== null && (n(),
                n = null)
            }
        }
    }
    function ss(e) {
        this._internalRoot = e
    }
    Yu.prototype.render = ss.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null)
            throw Error(f(409));
        var l = t.current
          , a = pt();
        dd(l, a, e, t, null, null)
    }
    ,
    Yu.prototype.unmount = ss.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            dd(e.current, 2, null, e, null, null),
            xu(),
            t[Xl] = null
        }
    }
    ;
    function Yu(e) {
        this._internalRoot = e
    }
    Yu.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = Os();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for (var l = 0; l < Nl.length && t !== 0 && t < Nl[l].priority; l++)
                ;
            Nl.splice(l, 0, e),
            l === 0 && vd(e)
        }
    }
    ;
    var Td = b.version;
    if (Td !== "19.2.0")
        throw Error(f(527, Td, "19.2.0"));
    D.findDOMNode = function(e) {
        var t = e._reactInternals;
        if (t === void 0)
            throw typeof e.render == "function" ? Error(f(188)) : (e = Object.keys(e).join(","),
            Error(f(268, e)));
        return e = y(t),
        e = e !== null ? B(e) : null,
        e = e === null ? null : e.stateNode,
        e
    }
    ;
    var hm = {
        bundleType: 0,
        version: "19.2.0",
        rendererPackageName: "react-dom",
        currentDispatcherRef: T,
        reconcilerVersion: "19.2.0"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Qu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Qu.isDisabled && Qu.supportsFiber)
            try {
                Oa = Qu.inject(hm),
                st = Qu
            } catch {}
    }
    return Nn.createRoot = function(e, t) {
        if (!S(e))
            throw Error(f(299));
        var l = !1
          , a = ""
          , n = Cr
          , u = Or
          , i = Mr;
        return t != null && (t.unstable_strictMode === !0 && (l = !0),
        t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
        t.onUncaughtError !== void 0 && (n = t.onUncaughtError),
        t.onCaughtError !== void 0 && (u = t.onCaughtError),
        t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
        t = rd(e, 1, !1, null, null, l, a, null, n, u, i, Sd),
        e[Xl] = t.current,
        Vc(e),
        new ss(t)
    }
    ,
    Nn.hydrateRoot = function(e, t, l) {
        if (!S(e))
            throw Error(f(299));
        var a = !1
          , n = ""
          , u = Cr
          , i = Or
          , s = Mr
          , o = null;
        return l != null && (l.unstable_strictMode === !0 && (a = !0),
        l.identifierPrefix !== void 0 && (n = l.identifierPrefix),
        l.onUncaughtError !== void 0 && (u = l.onUncaughtError),
        l.onCaughtError !== void 0 && (i = l.onCaughtError),
        l.onRecoverableError !== void 0 && (s = l.onRecoverableError),
        l.formState !== void 0 && (o = l.formState)),
        t = rd(e, 1, !0, t, l ?? null, a, n, o, u, i, s, Sd),
        t.context = od(null),
        l = t.current,
        a = pt(),
        a = Iu(a),
        n = sl(a),
        n.callback = null,
        fl(l, n, a),
        l = a,
        t.current.lanes = l,
        _a(t, l),
        Rt(t),
        e[Xl] = t.current,
        Vc(e),
        new Yu(t)
    }
    ,
    Nn.version = "19.2.0",
    Nn
}
var wd;
function Am() {
    if (wd)
        return os.exports;
    wd = 1;
    function r() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)
            } catch (b) {
                console.error(b)
            }
    }
    return r(),
    os.exports = Nm(),
    os.exports
}
var jm = Am();
const Em = Yd(jm);
var Ie = (r => (r.WHY_ENCRYPT = "why-encrypt",
r.HOW_IT_WORKS = "how-it-works",
r.PIGPEN = "pigpen",
r.CAESAR = "caesar",
r.VIGENERE = "vigenere",
r.RAIL_FENCE = "rail-fence",
r.FINAL_QUIZ = "final-quiz",
r))(Ie || {});
const zm = "Interactive Encryption Explorer"
  , Dd = [{
    id: Ie.WHY_ENCRYPT,
    name: "Why Encrypt?"
}, {
    id: Ie.HOW_IT_WORKS,
    name: "How It Works"
}, {
    id: Ie.PIGPEN,
    name: "Pigpen Cipher"
}, {
    id: Ie.CAESAR,
    name: "Caesar Cipher"
}, {
    id: Ie.VIGENERE,
    name: "Vigenère Cipher"
}, {
    id: Ie.RAIL_FENCE,
    name: "Rail Fence Cipher"
}, {
    id: Ie.FINAL_QUIZ,
    name: "Final Quiz"
}]
  , Cm = "computers"
  , Om = 5
  , Mm = ({label: r, isActive: b, onClick: A}) => c.jsx("button", {
    onClick: A,
    className: `
        flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-medium rounded-lg
        focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-75
        transition-all duration-300 ease-in-out transform hover:scale-105
        ${b ? "bg-gradient-to-r from-cyan-500 to-pink-600 text-white shadow-lg" : "bg-white hover:bg-gray-50 text-gray-600 hover:text-gray-800 shadow-sm border border-gray-200"}
      `,
    children: r
})
  , ys = ({title: r, initialText: b, revealedText: A}) => {
    const [f,S] = Q.useState(!1);
    return c.jsxs("div", {
        className: "bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200",
        children: [c.jsx("div", {
            className: "mb-3",
            children: c.jsx("h3", {
                className: "text-xl font-semibold text-cyan-600",
                children: r
            })
        }), c.jsx("p", {
            className: "text-gray-600 mb-4 h-16 overflow-hidden",
            children: f ? A : b
        }), c.jsx("button", {
            onClick: () => S(!f),
            className: "w-full bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200",
            children: f ? "Hide Example" : "Reveal Example"
        })]
    })
}
  , Rd = () => c.jsxs("div", {
    className: "space-y-8 animate-fadeIn",
    children: [c.jsxs("section", {
        className: "text-center",
        children: [c.jsx("h2", {
            className: "text-3xl font-bold text-cyan-600 mb-3",
            children: "The Importance of Encryption"
        }), c.jsx("p", {
            className: "text-lg text-gray-700 max-w-3xl mx-auto",
            children: "In our digital world, we share vast amounts of information online. Encryption is like a secret code that protects this information from falling into the wrong hands. It's essential for keeping our data safe and private."
        })]
    }), c.jsxs("section", {
        children: [c.jsx("h3", {
            className: "text-2xl font-semibold text-pink-500 mb-4",
            children: "Key Reasons We Need Encryption:"
        }), c.jsxs("ul", {
            className: "list-disc list-inside space-y-3 text-gray-700 pl-4 text-lg",
            children: [c.jsxs("li", {
                children: [c.jsx("strong", {
                    className: "text-cyan-600",
                    children: "Confidentiality:"
                }), " Ensures that only authorized individuals can access sensitive information. Think of it as sealing a letter so only the recipient can read it."]
            }), c.jsxs("li", {
                children: [c.jsx("strong", {
                    className: "text-cyan-600",
                    children: "Integrity:"
                }), " Guarantees that data has not been altered or tampered with during transmission or storage. It's like a wax seal that shows if a document has been opened."]
            }), c.jsxs("li", {
                children: [c.jsx("strong", {
                    className: "text-cyan-600",
                    children: "Authentication:"
                }), " Verifies the identity of users and devices, ensuring you're communicating with who you think you are. This prevents imposters."]
            }), c.jsxs("li", {
                children: [c.jsx("strong", {
                    className: "text-cyan-600",
                    children: "Non-repudiation:"
                }), " Prevents someone from denying they sent a message or performed an action. Digital signatures use encryption for this."]
            })]
        })]
    }), c.jsxs("section", {
        children: [c.jsx("h3", {
            className: "text-2xl font-semibold text-pink-500 mb-6",
            children: "Interactive Examples: What Needs Protection?"
        }), c.jsxs("div", {
            className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
            children: [c.jsx(ys, {
                title: "Online Banking",
                initialText: "Your bank login and transaction details are highly sensitive...",
                revealedText: "Plaintext: user:myBankLogin, pass:SecureP@$$wOrd -> Encrypted: xYz123@bCdeFgH#iJkLmN (unreadable without the key)"
            }), c.jsx(ys, {
                title: "Private Messages",
                initialText: "Personal conversations on messaging apps should remain private...",
                revealedText: "Plaintext: 'Meet me at 5pm?' -> Encrypted: qWeRtY&uIoPaS*dFgHjKl (scrambled and unreadable)"
            }), c.jsx(ys, {
                title: "Stored Passwords",
                initialText: "Websites store your passwords, but they shouldn't store them in plain text...",
                revealedText: "Plaintext: mySecretPassword123 -> Encrypted (Hashed): a3f8d9b0c1e2... (one-way encryption, hard to reverse)"
            })]
        })]
    }), c.jsxs("section", {
        className: "mt-10 p-6 bg-slate-100 rounded-lg shadow-lg border border-gray-200",
        children: [c.jsx("h3", {
            className: "text-2xl font-semibold text-cyan-600 mb-3 text-center",
            children: "Think About It!"
        }), c.jsx("p", {
            className: "text-gray-700 text-center text-lg",
            children: `Imagine if your exam results, personal health records, or even your social media DMs were not encrypted. Encryption is a fundamental building block of digital security and trust. As you explore the ciphers in the following tabs, you'll learn the basic principles of how these "secret codes" work!`
        })]
    })]
})
  , _m = ({className: r}) => c.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: r || "w-6 h-6",
    children: c.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
    })
})
  , Qd = ({className: r}) => c.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: r || "w-6 h-6",
    children: c.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.354a15.054 15.054 0 01-4.5 0M10.125 4.875h3.75M13.875 18.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
    })
})
  , gs = (r, b, A) => r.split("").map(f => {
    let S = f.charCodeAt(0);
    return f >= "A" && f <= "Z" ? S = ((S - 65 + (A ? b : -b)) % 26 + 26) % 26 + 65 : f >= "a" && f <= "z" && (S = ((S - 97 + (A ? b : -b)) % 26 + 26) % 26 + 97),
    String.fromCharCode(S)
}
).join("")
  , wm = (r, b, A) => {
    if (!b)
        return r;
    const f = b.toUpperCase().replace(/[^A-Z]/g, "");
    if (!f)
        return r;
    let S = 0;
    return r.split("").map(_ => {
        const j = _.charCodeAt(0);
        let M = "";
        if (_ >= "A" && _ <= "Z" || _ >= "a" && _ <= "z")
            M = f[S % f.length],
            S++;
        else
            return _;
        const z = M.charCodeAt(0) - 65;
        if (_ >= "A" && _ <= "Z") {
            let y = j - 65;
            return y = ((y + (A ? z : -z)) % 26 + 26) % 26,
            String.fromCharCode(y + 65)
        } else if (_ >= "a" && _ <= "z") {
            let y = j - 97;
            return y = ((y + (A ? z : -z)) % 26 + 26) % 26,
            String.fromCharCode(y + 97)
        }
        return _
    }
    ).join("")
}
  , Dm = (r, b) => {
    if (b <= 1)
        return r;
    const A = Array.from({
        length: b
    }, () => []);
    let f = 0
      , S = 1;
    for (const _ of r)
        A[f].push(_),
        f === 0 ? S = 1 : f === b - 1 && (S = -1),
        f += S;
    return A.map(_ => _.join("")).join("")
}
  , Rm = (r, b) => {
    if (b <= 1)
        return r;
    const A = Array.from({
        length: b
    }, () => Array(r.length).fill(null));
    let f = 0
      , S = 1;
    for (let M = 0; M < r.length; M++)
        A[f][M] = "_PLACEHOLDER_",
        f === 0 ? S = 1 : f === b - 1 && (S = -1),
        f += S;
    let _ = 0;
    for (let M = 0; M < b; M++)
        for (let z = 0; z < r.length; z++)
            A[M][z] === "_PLACEHOLDER_" && (A[M][z] = r[_++]);
    let j = "";
    f = 0,
    S = 1;
    for (let M = 0; M < r.length; M++)
        j += A[f][M],
        f === 0 ? S = 1 : f === b - 1 && (S = -1),
        f += S;
    return j
}
  , Gd = r => {
    const b = r.toUpperCase();
    if (b >= "A" && b <= "I") {
        const A = b.charCodeAt(0) - 65;
        return {
            type: ["topLeft", "top", "topRight", "left", "center", "right", "bottomLeft", "bottom", "bottomRight"][A],
            dot: !1
        }
    } else if (b >= "J" && b <= "R") {
        const A = b.charCodeAt(0) - 74;
        return {
            type: ["topLeft", "top", "topRight", "left", "center", "right", "bottomLeft", "bottom", "bottomRight"][A],
            dot: !0
        }
    } else if (b >= "S" && b <= "V") {
        const A = b.charCodeAt(0) - 83;
        return {
            type: ["vTop", "vLeft", "vBottom", "vRight"][A],
            dot: !1
        }
    } else if (b >= "W" && b <= "Z") {
        const A = b.charCodeAt(0) - 87;
        return {
            type: ["vTop", "vLeft", "vBottom", "vRight"][A],
            dot: !0
        }
    }
    return null
}
  , Hd = {
    plaintext: {
        term: "Plaintext",
        definition: "The original, readable message before it is encrypted. It's what you want to protect."
    },
    encryption: {
        term: "Encryption",
        definition: "The process of converting plaintext into a scrambled, unreadable format (ciphertext) using an algorithm and a key."
    },
    key: {
        term: "Secret Key",
        definition: "A piece of secret information used by the algorithm to encrypt and decrypt data. Like a password for your message."
    },
    algorithm: {
        term: "Algorithm",
        definition: "The 'machine' or set of rules and mathematical operations that performs the encryption and decryption."
    },
    ciphertext: {
        term: "Ciphertext",
        definition: "The scrambled, unreadable message that is the result of encryption. It's safe to send over the internet."
    },
    decryption: {
        term: "Decryption",
        definition: "The process of converting ciphertext back into its original, readable plaintext using the correct key."
    }
}
  , Ud = ({label: r, type: b, value: A, onChange: f, highlightClass: S, labelColor: _, textColor: j, isMono: M, isDisabled: z}) => c.jsxs("div", {
    className: `text-center transition-all duration-500 p-2 ${S}`,
    children: [c.jsx("label", {
        htmlFor: `machine-${r}`,
        className: `block mb-1 text-sm font-semibold ${_}`,
        children: r
    }), b === "input" ? c.jsx("textarea", {
        id: `machine-${r}`,
        value: A,
        onChange: y => f == null ? void 0 : f(y.target.value),
        disabled: z,
        className: `w-32 h-20 bg-white rounded shadow-md p-2 text-center text-lg font-bold ${j} focus:ring-2 focus:ring-cyan-400 custom-scrollbar resize-none disabled:opacity-70`,
        placeholder: "Type here"
    }) : c.jsx("div", {
        id: `machine-${r}`,
        className: `w-32 h-20 bg-gray-100 rounded shadow-inner p-2 flex items-center justify-center text-lg font-bold ${j} ${M ? "font-mono" : ""} break-all overflow-y-auto custom-scrollbar`,
        children: A || "..."
    })]
})
  , qd = ({className: r, style: b}) => c.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: r,
    style: b,
    children: c.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M9.594 3.94c.09-.542.56-1.003 1.11-1.226l.043-.018c.22-.1.454-.146.69-.146s.47.046.69.146l.043.018c.55.223 1.02.684 1.11 1.226l.043.252c.29.172.55.385.784.64l.203.218c.373.4.85.643 1.37.793l.252.043c.542.09.944.448 1.164.92l.018.043c.1.22.146.454.146.69s-.046.47-.146.69l-.018.043c-.22.472-.622.83-1.164.92l-.252.043a2.26 2.26 0 01-1.37.793l-.203.218c-.234.255-.494.468-.784.64l-.043.252c-.09.542-.56 1.004-1.11 1.226l-.043.018c-.22.1-.454.146-.69.146s-.47-.046-.69-.146l-.043-.018c-.55-.223-1.02-.684-1.11-1.226l-.043-.252a2.26 2.26 0 01-.784-.64l-.203-.218c-.373-.4-.85-.643-1.37-.793l-.252-.043c-.542-.09-.944-.448-1.164.92l-.018-.043a1.5 1.5 0 01-.146-.69s.046-.47.146-.69l.018-.043c.22-.472.622.83 1.164.92l.252-.043a2.26 2.26 0 011.37-.793l.203-.218c.234-.255.494-.468.784-.64l.043-.252zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
    })
})
  , Gu = ({animating: r, reverse: b, id: A}) => c.jsxs("svg", {
    className: `w-full h-full transition-opacity duration-300 ${r ? "opacity-100" : "opacity-0"}`,
    viewBox: "0 0 100 20",
    preserveAspectRatio: "none",
    children: [c.jsxs("defs", {
        children: [c.jsxs("linearGradient", {
            id: `grad-${A}`,
            children: [c.jsx("stop", {
                offset: "0%",
                stopColor: b ? "#ec4899" : "#06b6d4"
            }), c.jsx("stop", {
                offset: "100%",
                stopColor: b ? "#06b6d4" : "#ec4899"
            })]
        }), c.jsx("marker", {
            id: `arrowhead-${A}`,
            viewBox: "0 0 10 10",
            refX: "8",
            refY: "5",
            markerWidth: "5",
            markerHeight: "5",
            orient: "auto-start-reverse",
            children: c.jsx("path", {
                d: "M 0 0 L 10 5 L 0 10 z",
                fill: b ? "#06b6d4" : "#ec4899"
            })
        })]
    }), c.jsx("path", {
        d: b ? "M 95 10 L 5 10" : "M 0 10 L 95 10",
        stroke: `url(#grad-${A})`,
        strokeWidth: "2.5",
        strokeDasharray: "5 5",
        markerEnd: `url(#arrowhead-${A})`,
        children: c.jsx("animate", {
            attributeName: "stroke-dashoffset",
            from: "0",
            to: "-20",
            dur: "1.5s",
            repeatCount: "indefinite"
        })
    })]
})
  , Hm = () => {
    const [r,b] = Q.useState("idle")
      , [A,f] = Q.useState(null)
      , [S,_] = Q.useState("HELLO")
      , [j,M] = Q.useState("3")
      , [z,y] = Q.useState("")
      , [B,w] = Q.useState("")
      , V = r === "encrypting" || r === "decrypting"
      , he = () => {
        w("");
        const K = parseInt(j, 10);
        if (isNaN(K) || K < 1 || K > 25) {
            w("Secret Key must be a number between 1 and 25.");
            return
        }
        const Ee = S.toUpperCase().replace(/[^A-Z]/g, "");
        if (!Ee) {
            w("Please enter some text (A-Z) to encrypt.");
            return
        }
        _(Ee),
        b("encrypting"),
        setTimeout( () => {
            const J = gs(Ee, K, !0);
            y(J),
            b("encrypted")
        }
        , 2e3)
    }
      , P = () => {
        w("");
        const K = parseInt(j, 10);
        if (isNaN(K) || K < 1 || K > 25) {
            w("Secret Key must be a number between 1 and 25.");
            return
        }
        if (!z) {
            w("There is no ciphertext to decrypt. Encrypt a message first.");
            return
        }
        b("decrypting"),
        setTimeout( () => {
            const Ee = gs(z, K, !1);
            _(Ee),
            y(""),
            b("decrypted")
        }
        , 2e3)
    }
      , pe = () => {
        w(""),
        _("HELLO"),
        M("3"),
        y(""),
        b("idle")
    }
      , se = K => A === K ? "ring-2 ring-offset-2 ring-pink-500 rounded-lg" : "";
    return c.jsxs("section", {
        className: "mt-10 p-4 sm:p-6 bg-slate-50 rounded-lg shadow-lg border border-gray-200",
        children: [c.jsx("h3", {
            className: "text-2xl font-semibold text-pink-500 mb-4 text-center",
            children: "The Secret Message Machine"
        }), c.jsx("p", {
            className: "text-center text-gray-700 mb-6 max-w-3xl mx-auto",
            children: "This machine is a live cipher! Enter your own message and a secret key (a number from 1-25) to see how the Caesar Cipher works. Hover over the keywords to learn about each part."
        }), c.jsx("div", {
            className: "flex flex-wrap justify-center gap-2 mb-6",
            children: Object.entries(Hd).map( ([K,{term: Ee}]) => c.jsx("button", {
                onMouseEnter: () => f(K),
                onMouseLeave: () => f(null),
                className: `px-3 py-1 text-sm font-medium rounded-full transition-all duration-200 cursor-pointer 
                                    ${A === K ? "bg-cyan-500 text-white shadow-md" : "bg-white text-gray-600 hover:bg-gray-200 border border-gray-300"}`,
                children: Ee
            }, K))
        }), c.jsx("div", {
            className: "min-h-[3.5rem] p-3 mb-6 text-center bg-white border border-gray-200 rounded-lg shadow-inner flex items-center justify-center transition-opacity duration-300",
            children: c.jsx("p", {
                className: `text-gray-700 transition-opacity duration-300 ${A ? "opacity-100" : "opacity-50"}`,
                children: A ? Hd[A].definition : "Hover over a keyword to see its definition."
            })
        }), c.jsx("div", {
            className: "relative mb-24",
            children: c.jsxs("div", {
                className: "bg-white/50 rounded-lg p-4 min-h-[14rem] flex items-center justify-between overflow-hidden shadow-inner border border-gray-200",
                children: [c.jsx("div", {
                    className: `transition-all duration-500 ${r === "idle" || r === "decrypted" ? "opacity-100 scale-100" : "opacity-20 scale-90"}`,
                    children: c.jsx(Ud, {
                        label: "Plaintext",
                        type: "input",
                        value: S,
                        onChange: K => {
                            _(K),
                            y(""),
                            b("idle"),
                            w("")
                        }
                        ,
                        isDisabled: V,
                        highlightClass: se("plaintext"),
                        labelColor: "text-cyan-600",
                        textColor: "text-cyan-700"
                    })
                }), c.jsx("div", {
                    className: "absolute left-1/2 -translate-x-1/2 flex flex-col items-center",
                    children: c.jsxs("div", {
                        className: `relative transition-all duration-500 p-2 ${se("algorithm")}`,
                        children: [c.jsxs("div", {
                            className: "relative w-24 h-24 bg-slate-600 rounded-lg shadow-lg flex items-center justify-center text-white",
                            children: [c.jsx(qd, {
                                className: `w-10 h-10 text-slate-400 absolute transition-transform duration-1000 ${V ? "animate-spin" : ""}`
                            }), c.jsx(qd, {
                                className: `w-6 h-6 text-slate-500 absolute top-2 right-2 transition-transform duration-1000 ${V ? "animate-spin-reverse" : ""}`
                            })]
                        }), c.jsx("span", {
                            className: "mt-2 text-sm font-semibold text-gray-700 absolute -bottom-6 w-full text-center",
                            children: "Algorithm"
                        })]
                    })
                }), c.jsx("div", {
                    className: `transition-all duration-500 ${r === "encrypted" ? "opacity-100 scale-100" : "opacity-20 scale-90"}`,
                    children: c.jsx(Ud, {
                        label: "Ciphertext",
                        type: "output",
                        value: z,
                        highlightClass: se("ciphertext"),
                        labelColor: "text-pink-600",
                        textColor: "text-pink-500",
                        isMono: !0
                    })
                }), c.jsxs("div", {
                    className: "absolute left-1/4 w-1/4 h-full top-0 pointer-events-none flex items-center",
                    children: [c.jsx(Gu, {
                        animating: r === "encrypting",
                        id: "enc1"
                    }), c.jsx(Gu, {
                        animating: r === "decrypting",
                        reverse: !0,
                        id: "dec2"
                    })]
                }), c.jsxs("div", {
                    className: "absolute left-1/2 w-1/4 h-full top-0 pointer-events-none flex items-center",
                    children: [c.jsx(Gu, {
                        animating: r === "encrypting",
                        id: "enc2"
                    }), c.jsx(Gu, {
                        animating: r === "decrypting",
                        reverse: !0,
                        id: "dec1"
                    })]
                }), c.jsxs("div", {
                    className: `absolute left-1/2 -translate-x-1/2 bottom-[-7rem] transition-all duration-500 ease-in-out flex flex-col items-center p-2 ${se("key")}
                        ${V ? "opacity-100 translate-y-0" : "opacity-100 -translate-y-4"}`,
                    children: [c.jsx(_m, {
                        className: "w-10 h-10 text-yellow-500 -rotate-45"
                    }), c.jsx("label", {
                        htmlFor: "machine-key",
                        className: "mt-1 text-sm font-semibold text-yellow-600",
                        children: "Secret Key (1-25)"
                    }), c.jsx("input", {
                        id: "machine-key",
                        type: "text",
                        value: j,
                        onChange: K => {
                            M(K.target.value),
                            w("")
                        }
                        ,
                        disabled: V,
                        className: "w-20 mt-1 p-1 text-center bg-white rounded border border-gray-300 focus:ring-2 focus:ring-yellow-400 disabled:opacity-70",
                        pattern: "\\d*",
                        maxLength: 2
                    })]
                })]
            })
        }), B && c.jsx("div", {
            className: "text-center text-red-600 font-semibold p-2 -mt-20 mb-4 bg-red-100 border border-red-300 rounded-lg shadow",
            children: B
        }), c.jsxs("div", {
            className: "flex flex-wrap justify-center gap-4 mt-6",
            children: [c.jsx("button", {
                onClick: he,
                disabled: V || r === "encrypted",
                className: "w-full sm:w-auto bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transform transition-all duration-150 ease-in-out hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100",
                children: "Encrypt"
            }), c.jsx("button", {
                onClick: P,
                disabled: V || r !== "encrypted",
                className: "w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transform transition-all duration-150 ease-in-out hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100",
                children: "Decrypt"
            }), c.jsx("button", {
                onClick: pe,
                disabled: V && r !== "idle",
                className: "w-full sm:w-auto bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transform transition-all duration-150 ease-in-out hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100",
                children: "Reset Process"
            })]
        })]
    })
}
  , Um = () => c.jsxs("div", {
    className: "space-y-8 animate-fadeIn",
    children: [c.jsxs("section", {
        className: "text-center",
        children: [c.jsx("h2", {
            className: "text-3xl font-bold text-cyan-600 mb-3",
            children: "How Encryption Works"
        }), c.jsx("p", {
            className: "text-lg text-gray-700 max-w-3xl mx-auto",
            children: "This interactive diagram demonstrates the fundamental process of encryption. It shows how a readable message (plaintext) is transformed into a secret code (ciphertext) and back again, using an algorithm and a secret key."
        })]
    }), c.jsx(Hm, {})]
})
  , Vu = ({title: r, description: b, controlsSection: A, inputText: f, onInputTextChange: S, outputText: _, onEncrypt: j, onDecrypt: M, inputLabel: z="Enter Text (A-Z, a-z, numbers, spaces, basic punctuation):", outputLabel: y="Result:", encryptButtonText: B="Encrypt", decryptButtonText: w="Decrypt", additionalContent: V}) => c.jsxs("div", {
    className: "space-y-6 p-2 sm:p-4 rounded-lg bg-gray-50 bg-opacity-50 shadow-inner",
    children: [c.jsxs("div", {
        className: "text-center border-b border-gray-200 pb-4 mb-6",
        children: [c.jsx("h2", {
            className: "text-2xl sm:text-3xl font-bold text-cyan-600",
            children: r
        }), c.jsx("div", {
            className: "text-sm sm:text-base text-gray-600 mt-2 max-w-2xl mx-auto",
            children: b
        })]
    }), A, c.jsxs("div", {
        className: "grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-start",
        children: [c.jsxs("div", {
            className: "space-y-2",
            children: [c.jsx("label", {
                htmlFor: "inputText",
                className: "block text-sm font-medium text-gray-700",
                children: z
            }), c.jsx("textarea", {
                id: "inputText",
                rows: 4,
                value: f,
                onChange: he => S(he.target.value),
                placeholder: "Type here...",
                className: "w-full p-3 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 text-gray-800 placeholder-gray-400 custom-scrollbar"
            })]
        }), c.jsxs("div", {
            className: "space-y-2",
            children: [c.jsx("label", {
                htmlFor: "outputText",
                className: "block text-sm font-medium text-gray-700",
                children: y
            }), typeof _ == "string" ? c.jsx("textarea", {
                id: "outputText",
                rows: 4,
                readOnly: !0,
                value: _,
                placeholder: "Output will appear here...",
                className: "w-full p-3 bg-gray-100 border border-gray-300 rounded-md shadow-sm text-gray-800 placeholder-gray-500 custom-scrollbar"
            }) : c.jsx("div", {
                id: "outputText",
                className: "w-full p-3 min-h-[108px] bg-gray-100 border border-gray-300 rounded-md shadow-sm text-gray-800 placeholder-gray-500 custom-scrollbar overflow-x-auto",
                children: _ || c.jsx("span", {
                    className: "text-gray-400",
                    children: "Output will appear here..."
                })
            })]
        })]
    }), c.jsxs("div", {
        className: "flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4 mt-4",
        children: [c.jsx("button", {
            onClick: j,
            className: "w-full sm:w-auto bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transform transition-all duration-150 ease-in-out hover:scale-105 active:scale-95",
            children: B
        }), c.jsx("button", {
            onClick: M,
            className: "w-full sm:w-auto bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transform transition-all duration-150 ease-in-out hover:scale-105 active:scale-95",
            children: w
        })]
    }), V && c.jsx("div", {
        className: "mt-6",
        children: V
    })]
})
  , Xu = ({questions: r, quizTitle: b}) => {
    const [A,f] = Q.useState(0)
      , [S,_] = Q.useState(null)
      , [j,M] = Q.useState(!1)
      , [z,y] = Q.useState(0)
      , [B,w] = Q.useState(!1)
      , [V,he] = Q.useState([])
      , P = r[A];
    Q.useEffect( () => {
        P && he([...P.options].sort( () => Math.random() - .5)),
        _(null),
        M(!1)
    }
    , [A, P]);
    const pe = J => {
        j || _(J)
    }
      , se = () => {
        S && (M(!0),
        S === P.correctAnswer && y(J => J + 1))
    }
      , K = () => {
        A < r.length - 1 ? f(J => J + 1) : w(!0)
    }
      , Ee = () => {
        f(0),
        _(null),
        M(!1),
        y(0),
        w(!1)
    }
    ;
    if (r.length === 0)
        return c.jsx("p", {
            className: "text-yellow-600",
            children: "No quiz questions available for this topic yet."
        });
    if (B) {
        const J = Math.round(z / r.length * 100);
        return c.jsxs("div", {
            className: "mt-8 p-6 bg-slate-100 rounded-lg shadow-xl text-center",
            children: [c.jsx("h3", {
                className: "text-2xl font-bold text-cyan-600 mb-4",
                children: "Quiz Completed!"
            }), c.jsxs("p", {
                className: "text-xl text-gray-700 mb-2",
                children: ["Your score: ", z, " out of ", r.length, " (", J, "%)"]
            }), J === 100 && c.jsx("p", {
                className: "text-green-600 text-lg font-semibold",
                children: "🎉 Excellent! You aced it! 🎉"
            }), J >= 70 && J < 100 && c.jsx("p", {
                className: "text-yellow-600 text-lg font-semibold",
                children: "👍 Great job! Very good understanding!"
            }), J < 70 && c.jsx("p", {
                className: "text-orange-500 text-lg font-semibold",
                children: "🤔 Good effort! Review the material and try again to improve."
            }), c.jsx("button", {
                onClick: Ee,
                className: "mt-6 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-colors duration-200",
                children: "Restart Quiz"
            })]
        })
    }
    return c.jsxs("div", {
        className: "mt-8 p-4 sm:p-6 bg-white bg-opacity-90 rounded-lg shadow-xl border border-gray-200",
        children: [c.jsxs("h3", {
            className: "text-xl sm:text-2xl font-bold text-cyan-600 mb-4 text-center",
            children: [b, ": Question ", A + 1, " of ", r.length]
        }), c.jsx("div", {
            className: "bg-slate-100 p-4 rounded-md mb-4",
            children: c.jsx("p", {
                className: "text-lg text-gray-800",
                children: P.question
            })
        }), c.jsx("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4",
            children: V.map(J => {
                let Oe = "bg-white hover:bg-gray-100 border border-gray-300 text-gray-700";
                return j ? J === P.correctAnswer ? Oe = "bg-green-600 text-white border-green-600" : J === S ? Oe = "bg-red-600 text-white border-red-600" : Oe = "bg-gray-200 opacity-70 text-gray-600 border-gray-300" : J === S && (Oe = "bg-cyan-600 text-white border-cyan-600"),
                c.jsx("button", {
                    onClick: () => pe(J),
                    disabled: j,
                    className: `w-full p-3 text-left rounded-md transition-colors duration-200 ${Oe} disabled:cursor-not-allowed`,
                    children: J
                }, J)
            }
            )
        }), !j && c.jsx("button", {
            onClick: se,
            disabled: !S,
            className: "w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200",
            children: "Submit Answer"
        }), j && c.jsxs("div", {
            className: `mt-4 p-4 rounded-md border ${S === P.correctAnswer ? "bg-green-100 border-green-300 text-green-800" : "bg-red-100 border-red-300 text-red-800"}`,
            children: [c.jsx("p", {
                className: "font-semibold text-lg mb-2",
                children: S === P.correctAnswer ? "Correct! 🎉" : "Incorrect 😔"
            }), c.jsxs("div", {
                className: "flex items-start text-sm",
                children: [c.jsx(Qd, {
                    className: "w-5 h-5 mr-2 mt-1 text-yellow-500 flex-shrink-0"
                }), c.jsx("p", {
                    children: P.explanation
                })]
            }), c.jsx("button", {
                onClick: K,
                className: "mt-4 w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-colors duration-200",
                children: A < r.length - 1 ? "Next Question" : "Show Results"
            })]
        })]
    })
}
  , bs = ({char: r, size: b=36, className: A=""}) => {
    const f = Gd(r.toUpperCase());
    if (!f)
        return c.jsx("span", {
            style: {
                width: b,
                height: b,
                display: "inline-block"
            },
            className: "border border-dashed border-gray-300 text-gray-400 text-xs flex items-center justify-center",
            children: "?"
        });
    const {type: S, dot: _} = f
      , j = b * .1
      , M = b * .9
      , z = b * .5;
    let y = [];
    switch (S) {
    case "topLeft":
        y.push(c.jsx("path", {
            d: `M ${j} ${M} H ${M} V ${j}`
        }, "p1"));
        break;
    case "top":
        y.push(c.jsx("path", {
            d: `M ${j} ${j} V ${M} H ${M} V ${j}`
        }, "p1"));
        break;
    case "topRight":
        y.push(c.jsx("path", {
            d: `M ${M} ${M} H ${j} V ${j}`
        }, "p1"));
        break;
    case "left":
        y.push(c.jsx("path", {
            d: `M ${j} ${j} H ${M} V ${M} H ${j}`
        }, "p1"));
        break;
    case "center":
        y.push(c.jsx("path", {
            d: `M ${j} ${j} H ${M} V ${M} H ${j} Z`
        }, "p1"));
        break;
    case "right":
        y.push(c.jsx("path", {
            d: `M ${M} ${j} H ${j} V ${M} H ${M}`
        }, "p1"));
        break;
    case "bottomLeft":
        y.push(c.jsx("path", {
            d: `M ${j} ${j} H ${M} V ${M}`
        }, "p1"));
        break;
    case "bottom":
        y.push(c.jsx("path", {
            d: `M ${j} ${M} V ${j} H ${M} V ${M}`
        }, "p1"));
        break;
    case "bottomRight":
        y.push(c.jsx("path", {
            d: `M ${M} ${j} H ${j} V ${M}`
        }, "p1"));
        break;
    case "vTop":
        y.push(c.jsx("path", {
            d: `M ${j} ${M} L ${z} ${j} L ${M} ${M}`
        }, "p1"));
        break;
    case "vRight":
        y.push(c.jsx("path", {
            d: `M ${M} ${j} L ${j} ${z} L ${M} ${M}`
        }, "p1"));
        break;
    case "vBottom":
        y.push(c.jsx("path", {
            d: `M ${j} ${j} L ${z} ${M} L ${M} ${j}`
        }, "p1"));
        break;
    case "vLeft":
        y.push(c.jsx("path", {
            d: `M ${j} ${j} L ${M} ${z} L ${j} ${M}`
        }, "p1"));
        break
    }
    return _ && y.push(c.jsx("circle", {
        cx: b * .5,
        cy: b * .5,
        r: b * .075,
        fill: "currentColor"
    }, "dot")),
    c.jsx("svg", {
        width: b,
        height: b,
        viewBox: `0 0 ${b} ${b}`,
        className: `stroke-current fill-none stroke-2 inline-block mx-px ${A}`,
        children: y
    })
}
  , Vd = () => {
    const r = "w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center text-xl sm:text-2xl font-bold text-cyan-600"
      , b = "w-2 h-2 sm:w-2.5 sm:h-2.5 bg-pink-500 rounded-full ml-1";
    return c.jsxs("div", {
        className: "p-4 bg-slate-100 rounded-lg shadow-inner",
        children: [c.jsx("h4", {
            className: "text-lg font-semibold text-center text-gray-800 mb-4",
            children: "Pigpen Cipher Grids Reference"
        }), c.jsx("p", {
            className: "text-center text-gray-600 mb-6 max-w-xl mx-auto",
            children: "The shape of the grid lines around each letter becomes its symbol. A dot is added for the second letter in each position."
        }), c.jsxs("div", {
            className: "flex flex-wrap justify-center items-start gap-8",
            children: [c.jsxs("div", {
                className: "space-y-8",
                children: [c.jsxs("div", {
                    className: "grid grid-cols-3 w-max mx-auto bg-white shadow-md",
                    children: [c.jsx("div", {
                        className: `${r} border-r border-b border-gray-300`,
                        children: "A"
                    }), c.jsx("div", {
                        className: `${r} border-r border-b border-gray-300`,
                        children: "B"
                    }), c.jsx("div", {
                        className: `${r} border-b border-gray-300`,
                        children: "C"
                    }), c.jsx("div", {
                        className: `${r} border-r border-b border-gray-300`,
                        children: "D"
                    }), c.jsx("div", {
                        className: `${r} border-r border-b border-gray-300`,
                        children: "E"
                    }), c.jsx("div", {
                        className: `${r} border-b border-gray-300`,
                        children: "F"
                    }), c.jsx("div", {
                        className: `${r} border-r border-gray-300`,
                        children: "G"
                    }), c.jsx("div", {
                        className: `${r} border-r border-gray-300`,
                        children: "H"
                    }), c.jsx("div", {
                        className: `${r}`,
                        children: "I"
                    })]
                }), c.jsxs("div", {
                    className: "grid grid-cols-3 w-max mx-auto bg-white shadow-md",
                    children: [c.jsx("div", {
                        className: `${r} border-r border-b border-gray-300`,
                        children: c.jsxs("span", {
                            className: "flex items-center",
                            children: ["J", c.jsx("span", {
                                className: b
                            })]
                        })
                    }), c.jsx("div", {
                        className: `${r} border-r border-b border-gray-300`,
                        children: c.jsxs("span", {
                            className: "flex items-center",
                            children: ["K", c.jsx("span", {
                                className: b
                            })]
                        })
                    }), c.jsx("div", {
                        className: `${r} border-b border-gray-300`,
                        children: c.jsxs("span", {
                            className: "flex items-center",
                            children: ["L", c.jsx("span", {
                                className: b
                            })]
                        })
                    }), c.jsx("div", {
                        className: `${r} border-r border-b border-gray-300`,
                        children: c.jsxs("span", {
                            className: "flex items-center",
                            children: ["M", c.jsx("span", {
                                className: b
                            })]
                        })
                    }), c.jsx("div", {
                        className: `${r} border-r border-b border-gray-300`,
                        children: c.jsxs("span", {
                            className: "flex items-center",
                            children: ["N", c.jsx("span", {
                                className: b
                            })]
                        })
                    }), c.jsx("div", {
                        className: `${r} border-b border-gray-300`,
                        children: c.jsxs("span", {
                            className: "flex items-center",
                            children: ["O", c.jsx("span", {
                                className: b
                            })]
                        })
                    }), c.jsx("div", {
                        className: `${r} border-r border-gray-300`,
                        children: c.jsxs("span", {
                            className: "flex items-center",
                            children: ["P", c.jsx("span", {
                                className: b
                            })]
                        })
                    }), c.jsx("div", {
                        className: `${r} border-r border-gray-300`,
                        children: c.jsxs("span", {
                            className: "flex items-center",
                            children: ["Q", c.jsx("span", {
                                className: b
                            })]
                        })
                    }), c.jsx("div", {
                        className: `${r}`,
                        children: c.jsxs("span", {
                            className: "flex items-center",
                            children: ["R", c.jsx("span", {
                                className: b
                            })]
                        })
                    })]
                })]
            }), c.jsxs("div", {
                className: "space-y-8",
                children: [c.jsxs("div", {
                    className: "relative w-36 h-36 sm:w-48 sm:h-48 bg-white shadow-md",
                    children: [c.jsx("div", {
                        className: "absolute w-full h-[2px] bg-gray-300 top-1/2 -translate-y-1/2 transform rotate-45"
                    }), c.jsx("div", {
                        className: "absolute w-full h-[2px] bg-gray-300 top-1/2 -translate-y-1/2 transform -rotate-45"
                    }), c.jsx("div", {
                        className: `${r} absolute top-[25%] left-[50%] -translate-x-1/2 -translate-y-1/2`,
                        children: "U"
                    }), c.jsx("div", {
                        className: `${r} absolute top-[50%] left-[25%] -translate-x-1/2 -translate-y-1/2`,
                        children: "T"
                    }), c.jsx("div", {
                        className: `${r} absolute top-[50%] left-[75%] -translate-x-1/2 -translate-y-1/2`,
                        children: "V"
                    }), c.jsx("div", {
                        className: `${r} absolute top-[75%] left-[50%] -translate-x-1/2 -translate-y-1/2`,
                        children: "S"
                    })]
                }), c.jsxs("div", {
                    className: "relative w-36 h-36 sm:w-48 sm:h-48 bg-white shadow-md",
                    children: [c.jsx("div", {
                        className: "absolute w-full h-[2px] bg-gray-300 top-1/2 -translate-y-1/2 transform rotate-45"
                    }), c.jsx("div", {
                        className: "absolute w-full h-[2px] bg-gray-300 top-1/2 -translate-y-1/2 transform -rotate-45"
                    }), c.jsx("div", {
                        className: `${r} absolute top-[25%] left-[50%] -translate-x-1/2 -translate-y-1/2`,
                        children: c.jsxs("span", {
                            className: "flex items-center",
                            children: ["Y", c.jsx("span", {
                                className: b
                            })]
                        })
                    }), c.jsx("div", {
                        className: `${r} absolute top-[50%] left-[25%] -translate-x-1/2 -translate-y-1/2`,
                        children: c.jsxs("span", {
                            className: "flex items-center",
                            children: ["X", c.jsx("span", {
                                className: b
                            })]
                        })
                    }), c.jsx("div", {
                        className: `${r} absolute top-[50%] left-[75%] -translate-x-1/2 -translate-y-1/2`,
                        children: c.jsxs("span", {
                            className: "flex items-center",
                            children: ["Z", c.jsx("span", {
                                className: b
                            })]
                        })
                    }), c.jsx("div", {
                        className: `${r} absolute top-[75%] left-[50%] -translate-x-1/2 -translate-y-1/2`,
                        children: c.jsxs("span", {
                            className: "flex items-center",
                            children: ["W", c.jsx("span", {
                                className: b
                            })]
                        })
                    })]
                })]
            })]
        })]
    })
}
  , qm = () => {
    const [r,b] = Q.useState("")
      , [A,f] = Q.useState(null)
      , S = Q.useCallback( () => {
        const z = r.split("").map( (y, B) => y === " " ? c.jsx("span", {
            className: "inline-block w-4"
        }, `space-${B}`) : Gd(y.toUpperCase()) ? c.jsx(bs, {
            char: y,
            className: "text-cyan-500"
        }, `${y}-${B}`) : c.jsx("span", {
            className: "text-gray-500",
            children: y
        }, `other-${B}`));
        f(c.jsx("div", {
            className: "flex flex-wrap items-center",
            children: z
        }))
    }
    , [r])
      , _ = Q.useCallback( () => {
        f(c.jsx("span", {
            className: "text-yellow-600",
            children: "Manual decryption: Use the grid below to map symbols back to letters. This tool primarily demonstrates encryption to symbols."
        }))
    }
    , [])
      , j = [{
        id: "pq1",
        question: "In the standard Pigpen cipher, which letter is represented by a 'U' shape?",
        options: ["H", "B", "E", "S"],
        correctAnswer: "B",
        explanation: "The letter 'B' is in the top-middle cell of the first grid, which is enclosed by lines on the left, bottom, and right, forming a 'U' shape."
    }, {
        id: "pq2",
        question: "What is a key characteristic of the Pigpen cipher symbols for letters J-R compared to A-I?",
        options: ["They are in a different grid shape", "They have a dot", "They are mirrored", "They use thicker lines"],
        correctAnswer: "They have a dot",
        explanation: "Letters J-R use the same 3x3 grid shape as A-I, but each symbol includes a dot."
    }, {
        id: "pq3",
        question: "The Pigpen cipher is a type of:",
        options: ["Polyalphabetic substitution", "Substitution cipher", "Transposition cipher", "Stream cipher"],
        correctAnswer: "Substitution cipher",
        explanation: "It's a simple substitution cipher where each letter of the alphabet is replaced by a geometric symbol."
    }]
      , M = c.jsx(c.Fragment, {
        children: "The Pigpen cipher (also known as the Masonic cipher or Freemason's cipher) is a geometric simple substitution cipher. It exchanges letters for symbols which are fragments of a grid. The example key shows one common way the letters are assigned. Try encrypting your message to see the Pigpen symbols! Decryption from symbols is done by matching them back to letters on the grid."
    });
    return c.jsxs("div", {
        className: "space-y-8 animate-fadeIn",
        children: [c.jsx(Vu, {
            title: "Pigpen Cipher Tool",
            description: M,
            controlsSection: c.jsx(Vd, {}),
            inputText: r,
            onInputTextChange: b,
            outputText: A,
            onEncrypt: S,
            onDecrypt: _,
            inputLabel: "Enter Text (A-Z, a-z):",
            outputLabel: "Pigpen Symbols (Encryption Only):",
            encryptButtonText: "Show Symbols",
            decryptButtonText: "Decryption Info"
        }), c.jsx(Xu, {
            questions: j,
            quizTitle: "Pigpen Cipher Challenge"
        })]
    })
}
  , Bm = () => {
    const [r,b] = Q.useState("")
      , [A,f] = Q.useState("")
      , [S,_] = Q.useState(3)
      , j = Q.useCallback(B => {
        const w = gs(r, S, B);
        f(w)
    }
    , [r, S])
      , M = [{
        id: "cq1",
        question: "If 'A' is encrypted to 'D' using a Caesar cipher, what is the shift value?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "3",
        explanation: "A (0) -> D (3). The shift is 3. (0+3=3)"
    }, {
        id: "cq2",
        question: "What is 'HELLO' encrypted with a Caesar cipher using a shift of 3?",
        options: ["KHOOR", "IFMMP", "EBIIL", "JGNNQ"],
        correctAnswer: "KHOOR",
        explanation: "H+3=K, E+3=H, L+3=O, L+3=O, O+3=R. So, HELLO becomes KHOOR."
    }, {
        id: "cq3",
        question: "The Caesar cipher is vulnerable to what type of attack?",
        options: ["Man-in-the-middle attack", "Brute-force attack", "SQL injection", "Phishing"],
        correctAnswer: "Brute-force attack",
        explanation: "Since there are only 25 possible keys (shifts 1-25), an attacker can easily try all of them."
    }]
      , z = c.jsx(c.Fragment, {
        children: "The Caesar cipher is one of the simplest and most widely known encryption techniques. It's a type of substitution cipher where each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. For example, with a left shift of 3, D would be replaced by A, E would become B, and so on."
    })
      , y = c.jsxs("div", {
        className: "mb-6 p-4 bg-slate-100 rounded-lg shadow",
        children: [c.jsxs("label", {
            htmlFor: "shift",
            className: "block text-sm font-medium text-gray-700 mb-1",
            children: ["Shift Value (1-25): ", S]
        }), c.jsxs("div", {
            className: "flex items-center space-x-3",
            children: [c.jsx("span", {
                className: "text-cyan-600",
                children: "1"
            }), c.jsx("input", {
                type: "range",
                id: "shift",
                min: "1",
                max: "25",
                value: S,
                onChange: B => _(parseInt(B.target.value, 10)),
                className: "w-full h-3 bg-gray-300 rounded-lg appearance-none cursor-pointer range-lg accent-pink-500"
            }), c.jsx("span", {
                className: "text-cyan-600",
                children: "25"
            })]
        })]
    });
    return c.jsxs("div", {
        className: "space-y-8 animate-fadeIn",
        children: [c.jsx(Vu, {
            title: "Caesar Cipher Tool",
            description: z,
            controlsSection: y,
            inputText: r,
            onInputTextChange: b,
            outputText: A,
            onEncrypt: () => j(!0),
            onDecrypt: () => j(!1)
        }), c.jsx(Xu, {
            questions: M,
            quizTitle: "Caesar Cipher Challenge"
        })]
    })
}
  , Xd = () => {
    const [r,b] = Q.useState("encrypt")
      , [A,f] = Q.useState(null)
      , [S,_] = Q.useState(null)
      , [j,M] = Q.useState(null)
      , z = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      , {resultChar: y, plainIdx: B, keyIdx: w, derivedPlainIdxForDecryptResult: V} = Q.useMemo( () => {
        let ee = A ? z.indexOf(A) : -1
          , F = S ? z.indexOf(S) : -1
          , L = null
          , Te = -1;
        if (r === "encrypt" && ee !== -1 && F !== -1)
            L = z[(ee + F) % 26];
        else if (r === "decrypt" && F !== -1 && j) {
            const Ne = z.indexOf(j);
            if (Ne !== -1) {
                const xe = (Ne - F + 26) % 26;
                L = z[xe],
                Te = xe
            }
        }
        return {
            resultChar: L,
            plainIdx: ee,
            keyIdx: F,
            derivedPlainIdxForDecryptResult: Te
        }
    }
    , [r, A, S, j])
      , he = ee => {
        b(ee),
        K()
    }
      , P = ee => {
        r === "encrypt" && (f(ee),
        M(null))
    }
      , pe = ee => {
        _(ee),
        M(null),
        r === "decrypt" && f(null)
    }
      , se = (ee, F, L) => {
        r === "encrypt" ? (f(z[L]),
        _(z[F]),
        M(null)) : r === "decrypt" && w !== -1 && F === w && M(ee)
    }
      , K = () => {
        f(null),
        _(null),
        M(null)
    }
      , Ee = Q.useMemo( () => r === "encrypt" ? B === -1 ? "1. Click a Plaintext letter in the TOP row." : w === -1 ? "2. Click a Key letter in the LEFT column." : `Result: Plaintext '${A}' + Key '${S}' = Ciphertext '${y}'. Click 'Reset' to try again.` : w === -1 ? "1. Click a Key letter in the LEFT column." : j ? `Result: Key '${S}' + Ciphertext '${j}' = Plaintext '${y}'. Click 'Reset' to try again.` : `2. In the highlighted Key row ('${S}'), click the Ciphertext letter.`, [r, B, w, A, S, y, j])
      , J = () => c.jsx("thead", {
        children: c.jsxs("tr", {
            children: [c.jsxs("th", {
                className: "sticky top-0 left-0 z-30 p-1 sm:p-1.5 w-7 h-7 sm:w-8 sm:h-8 text-xs sm:text-sm font-bold bg-slate-200 text-slate-700 border border-slate-300",
                children: [c.jsx("span", {
                    className: "sr-only",
                    children: "Key/Plaintext"
                }), c.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: "1.5",
                    stroke: "currentColor",
                    className: "w-4 h-4 sm:w-5 sm:h-5",
                    children: c.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M20.25 20.25v-4.5m0 4.5h-4.5m4.5 0L15 15"
                    })
                })]
            }), z.split("").map( (ee, F) => {
                let L = "sticky top-0 z-20 p-1 sm:p-1.5 w-7 h-7 sm:w-8 sm:h-8 text-xs sm:text-sm font-medium bg-slate-200 hover:bg-slate-300 text-slate-700 border border-slate-300 cursor-pointer transition-all duration-150";
                const Te = r === "encrypt" && F === B
                  , Ne = r === "decrypt" && F === V && S && j;
                return Te && (L += " bg-cyan-500 text-white ring-2 ring-cyan-300 ring-offset-1 ring-offset-slate-200 scale-110"),
                Ne && (L += " bg-green-500 text-white ring-2 ring-green-300 ring-offset-1 ring-offset-slate-200 scale-110"),
                c.jsx("th", {
                    scope: "col",
                    "aria-label": `Plaintext column ${ee}${Te ? ", selected" : ""}${Ne ? ", result" : ""}`,
                    className: L,
                    onClick: () => P(ee),
                    tabIndex: 0,
                    onKeyDown: xe => xe.key === "Enter" && P(ee),
                    children: ee
                }, `header-${ee}`)
            }
            )]
        })
    })
      , Oe = () => c.jsx("tbody", {
        children: z.split("").map( (ee, F) => {
            let L = "sticky left-0 z-20 p-1 sm:p-1.5 w-7 h-7 sm:w-8 sm:h-8 text-xs sm:text-sm font-medium bg-slate-200 hover:bg-slate-300 text-slate-700 border border-slate-300 cursor-pointer transition-all duration-150";
            const Te = F === w;
            return Te && (L += " bg-yellow-500 text-white ring-2 ring-yellow-300 ring-offset-1 ring-offset-slate-200 scale-110"),
            c.jsxs("tr", {
                children: [c.jsx("th", {
                    scope: "row",
                    "aria-label": `Key row ${ee}${Te ? ", selected" : ""}`,
                    className: L,
                    onClick: () => pe(ee),
                    tabIndex: 0,
                    onKeyDown: Ne => Ne.key === "Enter" && pe(ee),
                    children: ee
                }), Array.from({
                    length: 26
                }).map( (Ne, xe) => {
                    const He = z[(xe + F) % 26];
                    let ze = "p-1 sm:p-1.5 w-7 h-7 sm:w-8 sm:h-8 text-xs sm:text-sm text-center text-gray-700 bg-white border border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors duration-100";
                    const gt = r === "encrypt" && F === w && xe === B && y === He
                      , Pe = r === "decrypt" && F === w
                      , ke = Pe && He === j && V === xe;
                    return gt ? ze += " bg-green-500 text-white font-bold ring-2 ring-green-300 scale-110 transform" : ke ? ze += " bg-pink-500 text-white font-bold ring-2 ring-pink-300 scale-110 transform" : Pe && (ze += " bg-slate-100 hover:bg-slate-200"),
                    c.jsx("td", {
                        className: ze,
                        onClick: () => se(He, F, xe),
                        "aria-label": `Cell for key ${ee}, plaintext ${z[xe]} is ${He}.${gt ? " This is the current encryption result." : ""}${ke ? " This is the selected ciphertext for decryption." : ""}`,
                        tabIndex: 0,
                        onKeyDown: T => T.key === "Enter" && se(He, F, xe),
                        children: He
                    }, `cell-${F}-${xe}`)
                }
                )]
            }, `row-${ee}`)
        }
        )
    });
    return c.jsxs("div", {
        className: "space-y-4",
        children: [c.jsxs("div", {
            className: "flex flex-col sm:flex-row justify-center items-center gap-3 p-3 bg-slate-100 rounded-lg shadow",
            children: [c.jsxs("div", {
                className: "flex gap-2",
                children: [c.jsx("button", {
                    onClick: () => he("encrypt"),
                    className: `px-4 py-2 rounded-md font-semibold transition-all duration-200 w-full sm:w-auto
                        ${r === "encrypt" ? "bg-cyan-500 text-white shadow-lg ring-2 ring-cyan-300" : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-300"}`,
                    "aria-pressed": r === "encrypt",
                    children: "Encrypt Mode"
                }), c.jsx("button", {
                    onClick: () => he("decrypt"),
                    className: `px-4 py-2 rounded-md font-semibold transition-all duration-200 w-full sm:w-auto
                        ${r === "decrypt" ? "bg-pink-500 text-white shadow-lg ring-2 ring-pink-300" : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-300"}`,
                    "aria-pressed": r === "decrypt",
                    children: "Decrypt Mode"
                })]
            }), c.jsx("button", {
                onClick: K,
                className: "px-4 py-2 rounded-md font-semibold bg-red-600 hover:bg-red-700 text-white transition-colors duration-200 w-full sm:w-auto",
                children: "Reset Selections"
            })]
        }), c.jsx("div", {
            className: "p-3 min-h-[4em] text-center bg-slate-100 border border-slate-300 rounded-lg shadow-inner text-gray-700 text-sm sm:text-base flex items-center justify-center",
            "aria-live": "polite",
            children: c.jsx("p", {
                children: Ee
            })
        }), c.jsx("div", {
            className: "overflow-x-auto custom-scrollbar shadow-lg rounded-md border border-slate-300 max-w-full",
            children: c.jsxs("table", {
                className: "min-w-full border-collapse table-fixed",
                "aria-label": "Interactive Vigenère Square (Tabula Recta)",
                children: [c.jsx("caption", {
                    className: "sr-only",
                    children: "Interactive Vigenère Cipher Table. Select mode, then click letters to encrypt or decrypt. Rows represent the key letter, columns represent the plaintext letter. The intersecting cell is the ciphertext letter."
                }), J(), Oe()]
            })
        }), c.jsxs("div", {
            className: "p-3 mt-4 text-center bg-slate-100 border border-slate-300 rounded-lg shadow-inner text-gray-800",
            children: [c.jsx("h4", {
                className: "font-semibold text-lg mb-2 text-indigo-600",
                children: "Current Operation:"
            }), r === "encrypt" ? c.jsxs("p", {
                children: ["Plaintext: ", c.jsx("span", {
                    className: "font-bold text-cyan-600",
                    children: A || "?"
                }), " + Key: ", c.jsx("span", {
                    className: "font-bold text-yellow-600",
                    children: S || "?"
                }), " = Ciphertext: ", c.jsx("span", {
                    className: "font-bold text-green-600",
                    children: y || "?"
                })]
            }) : c.jsxs("p", {
                children: ["Key: ", c.jsx("span", {
                    className: "font-bold text-yellow-600",
                    children: S || "?"
                }), " + Ciphertext: ", c.jsx("span", {
                    className: "font-bold text-pink-600",
                    children: j || "?"
                }), " = Plaintext: ", c.jsx("span", {
                    className: "font-bold text-green-600",
                    children: y || "?"
                })]
            })]
        })]
    })
}
  , Lm = () => {
    const [r,b] = Q.useState("")
      , [A,f] = Q.useState("")
      , [S,_] = Q.useState("LEMON")
      , j = Q.useCallback(w => {
        const V = S.toUpperCase().replace(/[^A-Z]/g, "");
        if (!V) {
            f("Please enter a valid keyword (A-Z characters only).");
            return
        }
        const he = wm(r, V, w);
        f(he)
    }
    , [r, S])
      , M = [{
        id: "vq1",
        question: "The Vigenère cipher is an example of what type of cipher?",
        options: ["Monoalphabetic substitution", "Polyalphabetic substitution", "Transposition cipher", "Block cipher"],
        correctAnswer: "Polyalphabetic substitution",
        explanation: "It uses multiple Caesar ciphers based on the letters of a keyword, making it polyalphabetic."
    }, {
        id: "vq2",
        question: "Using a Vigenère square, if the plaintext is 'H' and the keyword letter is 'L', what is the ciphertext letter?",
        options: ["R", "S", "T", "U"],
        correctAnswer: "S",
        explanation: "Find 'H' in the top row (plaintext) and 'L' in the leftmost column (key). The intersection is 'S'."
    }, {
        id: "vq3",
        question: "What method is commonly used to break the Vigenère cipher?",
        options: ["Frequency analysis on single letters", "Kasiski examination & Friedman test", "Brute-forcing the keyword", "Guessing common words"],
        correctAnswer: "Kasiski examination & Friedman test",
        explanation: "Kasiski examination and the Friedman test can help determine the length of the keyword, significantly simplifying the cryptanalysis."
    }]
      , z = c.jsx(c.Fragment, {
        children: `The Vigenère cipher is a method of encrypting alphabetic text by using a series of different Caesar ciphers based on the letters of a keyword. It is a form of polyalphabetic substitution. For example, if the keyword is "LEMON", the first letter of the plaintext is encrypted with a shift of L (11), the second with E (4), and so on. Below the tool, you'll find the Vigenère Square (Tabula Recta) and instructions on how to use it for manual encryption/decryption.`
    })
      , y = c.jsxs("div", {
        className: "mb-6 p-4 bg-slate-100 rounded-lg shadow",
        children: [c.jsx("label", {
            htmlFor: "keyword",
            className: "block text-sm font-medium text-gray-700 mb-1",
            children: "Keyword (A-Z only):"
        }), c.jsx("input", {
            type: "text",
            id: "keyword",
            value: S,
            onChange: w => _(w.target.value.toUpperCase().replace(/[^A-Z]/g, "")),
            placeholder: "Enter keyword",
            className: "w-full p-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 text-gray-800 placeholder-gray-400"
        })]
    })
      , B = c.jsxs("div", {
        className: "mt-10 p-4 sm:p-6 bg-white rounded-lg shadow-xl border border-gray-200",
        children: [c.jsx("h3", {
            className: "text-xl sm:text-2xl font-bold text-cyan-600 mb-4 text-center",
            children: "The Vigenère Square (Tabula Recta)"
        }), c.jsx("p", {
            className: "text-gray-600 mb-4 text-sm sm:text-base",
            children: "The Vigenère Square is a grid of alphabets, where each row is a Caesar cipher shift of the row above it. It's a handy tool for manual Vigenère encryption and decryption."
        }), c.jsx(Xd, {}), c.jsxs("div", {
            className: "mt-6 space-y-4 text-gray-600 text-sm sm:text-base",
            children: [c.jsxs("div", {
                children: [c.jsx("h4", {
                    className: "font-semibold text-pink-600 text-lg mb-2",
                    children: "How to Encrypt using the Vigenère Square:"
                }), c.jsxs("ol", {
                    className: "list-decimal list-inside space-y-1 pl-2",
                    children: [c.jsxs("li", {
                        children: ["Take the first letter of your ", c.jsx("strong", {
                            className: "text-cyan-600",
                            children: "plaintext"
                        }), " and the first letter of your ", c.jsx("strong", {
                            className: "text-yellow-600",
                            children: "keyword"
                        }), "."]
                    }), c.jsxs("li", {
                        children: ["Find the ", c.jsx("strong", {
                            className: "text-cyan-600",
                            children: "plaintext letter"
                        }), " in the ", c.jsx("strong", {
                            className: "text-gray-900",
                            children: "TOP header row"
                        }), " of the table."]
                    }), c.jsxs("li", {
                        children: ["Find the ", c.jsx("strong", {
                            className: "text-yellow-600",
                            children: "keyword letter"
                        }), " in the ", c.jsx("strong", {
                            className: "text-gray-900",
                            children: "LEFTMOST header column"
                        }), " of the table."]
                    }), c.jsxs("li", {
                        children: ["The ", c.jsx("strong", {
                            className: "text-green-600",
                            children: "ciphertext letter"
                        }), " is at the intersection of the row (from the keyword letter) and the column (from the plaintext letter)."]
                    }), c.jsx("li", {
                        children: "Repeat for all letters, cycling through the keyword."
                    }), c.jsxs("li", {
                        children: [c.jsx("strong", {
                            className: "text-gray-900 font-bold",
                            children: "Example:"
                        }), " Plaintext 'H', Keyword 'L'. Find 'H' at the top, 'L' on the left. The intersection is 'S'. So, 'H' encrypts to 'S'."]
                    })]
                })]
            }), c.jsxs("div", {
                children: [c.jsx("h4", {
                    className: "font-semibold text-pink-600 text-lg mb-2",
                    children: "How to Decrypt using the Vigenère Square:"
                }), c.jsxs("ol", {
                    className: "list-decimal list-inside space-y-1 pl-2",
                    children: [c.jsxs("li", {
                        children: ["Take the first letter of your ", c.jsx("strong", {
                            className: "text-green-600",
                            children: "ciphertext"
                        }), " and the first letter of your ", c.jsx("strong", {
                            className: "text-yellow-600",
                            children: "keyword"
                        }), "."]
                    }), c.jsxs("li", {
                        children: ["Find the ", c.jsx("strong", {
                            className: "text-yellow-600",
                            children: "keyword letter"
                        }), " in the ", c.jsx("strong", {
                            className: "text-gray-900",
                            children: "LEFTMOST header column"
                        }), ". This selects the row you'll use."]
                    }), c.jsxs("li", {
                        children: ["In that selected row, find your ", c.jsx("strong", {
                            className: "text-green-600",
                            children: "ciphertext letter"
                        }), "."]
                    }), c.jsxs("li", {
                        children: ["The ", c.jsx("strong", {
                            className: "text-cyan-600",
                            children: "plaintext letter"
                        }), " is at the ", c.jsx("strong", {
                            className: "text-gray-900",
                            children: "TOP of that column"
                        }), "."]
                    }), c.jsx("li", {
                        children: "Repeat for all letters, cycling through the keyword."
                    }), c.jsxs("li", {
                        children: [c.jsx("strong", {
                            className: "text-gray-900 font-bold",
                            children: "Example:"
                        }), " Ciphertext 'S', Keyword 'L'. Find 'L' on the left. In that 'L' row, find 'S'. The letter at the top of this column is 'H'. So, 'S' decrypts to 'H'."]
                    })]
                })]
            })]
        })]
    });
    return c.jsxs("div", {
        className: "space-y-8 animate-fadeIn",
        children: [c.jsx(Vu, {
            title: "Vigenère Cipher Tool",
            description: z,
            controlsSection: y,
            inputText: r,
            onInputTextChange: b,
            outputText: A,
            onEncrypt: () => j(!0),
            onDecrypt: () => j(!1)
        }), B, c.jsx(Xu, {
            questions: M,
            quizTitle: "Vigenère Cipher Challenge"
        })]
    })
}
  , Ym = ({text: r, rails: b, isEncrypting: A}) => {
    if (b <= 1 || r.length === 0)
        return c.jsx("div", {
            className: "p-2 text-sm text-gray-500",
            children: "Enter text and set rails > 1 to see visualization."
        });
    const f = Array.from({
        length: b
    }, () => Array(r.length).fill(""));
    if (A) {
        let S = 0
          , _ = 1;
        for (let j = 0; j < r.length; j++)
            f[S][j] = r[j],
            S === 0 ? _ = 1 : S === b - 1 && (_ = -1),
            S += _
    } else {
        const S = Array.from({
            length: b
        }, () => Array(r.length).fill(null));
        let _ = 0
          , j = 1;
        for (let z = 0; z < r.length; z++)
            S[_][z] = "_",
            _ === 0 ? j = 1 : _ === b - 1 && (j = -1),
            _ += j;
        let M = 0;
        for (let z = 0; z < b; z++)
            for (let y = 0; y < r.length; y++)
                S[z][y] === "_" && M < r.length && (f[z][y] = r[M++])
    }
    return c.jsxs("div", {
        className: "mt-4 p-4 bg-slate-100 rounded-lg shadow-inner overflow-x-auto custom-scrollbar",
        children: [c.jsx("h4", {
            className: "text-md font-semibold text-center text-gray-800 mb-3",
            children: A ? "Encryption: Plaintext on Rails" : "Decryption: Ciphertext on Rails"
        }), c.jsx("div", {
            className: "font-mono text-base inline-block whitespace-nowrap bg-white p-2 rounded shadow",
            children: f.map( (S, _) => c.jsxs("div", {
                className: "flex items-center h-8",
                children: [c.jsxs("span", {
                    className: "text-xs text-gray-500 mr-2 w-4",
                    children: ["R", _ + 1]
                }), S.map( (j, M) => c.jsx("span", {
                    className: `w-6 h-6 flex items-center justify-center rounded
                ${j ? "text-cyan-700 font-bold bg-cyan-100" : "text-gray-300"}`,
                    children: j || "·"
                }, `${_}-${M}`))]
            }, _))
        }), c.jsx("p", {
            className: "text-xs text-center text-gray-600 mt-3 max-w-md mx-auto",
            children: A ? "Ciphertext is formed by reading characters row by row (R1, then R2, etc.)." : "Plaintext is recovered by reading characters in a zig-zag pattern."
        })]
    })
}
  , Qm = () => {
    const [r,b] = Q.useState("")
      , [A,f] = Q.useState("")
      , [S,_] = Q.useState(3)
      , [j,M] = Q.useState(!1)
      , [z,y] = Q.useState(!0)
      , B = Q.useCallback( () => {
        const se = Dm(r, S);
        f(se),
        y(!0),
        M(!0)
    }
    , [r, S])
      , w = Q.useCallback( () => {
        const se = Rm(r, S);
        f(se),
        y(!1),
        M(!0)
    }
    , [r, S])
      , V = [{
        id: "rfq1",
        question: "The Rail Fence cipher is primarily what type of cipher?",
        options: ["Substitution cipher", "Polyalphabetic cipher", "Transposition cipher", "Block cipher"],
        correctAnswer: "Transposition cipher",
        explanation: "It rearranges the order of the letters (transposition) rather than substituting them."
    }, {
        id: "rfq2",
        question: "If 'HELLOWORLD' is encrypted with 3 rails, what is the ciphertext?",
        options: ["HLWRELOOLD", "HORELLWDL", "HWRELOOLDLLW", "HLWOLROELD"],
        correctAnswer: "HLWOLROELD",
        explanation: "With 3 rails, the letters on each rail are: R1: H,L,W,L; R2: E,L,O,O,D; R3: L,R. Reading row by row gives HLWOLROELD."
    }, {
        id: "rfq3",
        question: "What is the primary weakness of the Rail Fence cipher?",
        options: ["It requires a complex key.", "It's too slow to encrypt.", "The number of rails is small, making it easy to brute force.", "It only works on short messages."],
        correctAnswer: "The number of rails is small, making it easy to brute force.",
        explanation: "An attacker can try decrypting with different small numbers of rails until meaningful plaintext appears."
    }]
      , he = c.jsx(c.Fragment, {
        children: 'The Rail Fence cipher is a form of transposition cipher that gets its name from the way the encryption is performed. The plaintext is written downwards and diagonally on successive "rails" of an imaginary fence, then read off in rows. For example, with 2 rails, "HELLO WORLD" becomes "HLOOL ELWRD".'
    })
      , P = c.jsxs("div", {
        className: "mb-6 p-4 bg-slate-100 rounded-lg shadow",
        children: [c.jsxs("label", {
            htmlFor: "rails",
            className: "block text-sm font-medium text-gray-700 mb-1",
            children: ["Number of Rails (2-10): ", S]
        }), c.jsxs("div", {
            className: "flex items-center space-x-3",
            children: [c.jsx("span", {
                className: "text-cyan-600",
                children: "2"
            }), c.jsx("input", {
                type: "range",
                id: "rails",
                min: "2",
                max: "10",
                value: S,
                onChange: se => {
                    _(parseInt(se.target.value, 10)),
                    M(!1)
                }
                ,
                className: "w-full h-3 bg-gray-300 rounded-lg appearance-none cursor-pointer range-lg accent-pink-500"
            }), c.jsx("span", {
                className: "text-cyan-600",
                children: "10"
            })]
        })]
    })
      , pe = Q.useMemo( () => c.jsx(Ym, {
        text: r,
        rails: S,
        isEncrypting: z
    }), [r, S, z]);
    return c.jsxs("div", {
        className: "space-y-8 animate-fadeIn",
        children: [c.jsx(Vu, {
            title: "Rail Fence Cipher Tool",
            description: he,
            controlsSection: P,
            inputText: r,
            onInputTextChange: se => {
                b(se),
                M(!1)
            }
            ,
            outputText: A,
            onEncrypt: B,
            onDecrypt: w,
            additionalContent: j ? pe : null
        }), c.jsx(Xu, {
            questions: V,
            quizTitle: "Rail Fence Cipher Challenge"
        })]
    })
}
  , Bd = ({text: r}) => c.jsx("div", {
    className: "flex flex-wrap items-center justify-center gap-x-1 py-1",
    children: r.toUpperCase().split("").map( (b, A) => b === " " ? c.jsx("span", {
        className: "w-4"
    }, `space-${A}`) : c.jsx(bs, {
        char: b,
        size: 24,
        className: "text-cyan-600"
    }, `${b}-${A}`))
})
  , Ht = [{
    id: "fq1",
    question: "What is the term for the original, readable message before it is encrypted?",
    options: ["Ciphertext", "Plaintext", "Keytext", "Cryptogram"],
    correctAnswer: "Plaintext",
    explanation: "Plaintext is the original, human-readable message that you want to protect.",
    visual: null
}, {
    id: "fq2",
    question: "The process of converting ciphertext back into plaintext is known as:",
    options: ["Encryption", "Algorithm", "Decryption", "Substitution"],
    correctAnswer: "Decryption",
    explanation: "Decryption is the process of reversing encryption to retrieve the original message.",
    visual: null
}, {
    id: "fq3",
    question: "What piece of information is used by an algorithm to encrypt and decrypt data, and must be kept secret?",
    options: ["The Algorithm", "The Plaintext", "The Ciphertext", "The Key"],
    correctAnswer: "The Key",
    explanation: "The key is the secret information (like a password or a shift number) that unlocks the message.",
    visual: null
}, {
    id: "fq4",
    question: "Which of these is NOT a primary reason for using encryption?",
    options: ["Confidentiality", "Data Integrity", "Authentication", "Increasing file size"],
    correctAnswer: "Increasing file size",
    explanation: "Encryption is used to ensure confidentiality (secrecy), integrity (data isn't changed), and authentication (proving identity), not to make files bigger.",
    visual: null
}, {
    id: "fq5",
    question: "A cipher that replaces each letter with another letter or symbol is called a:",
    options: ["Transposition cipher", "Substitution cipher", "Block cipher", "Stream cipher"],
    correctAnswer: "Substitution cipher",
    explanation: "Substitution ciphers, like the Caesar and Pigpen ciphers, replace characters. Transposition ciphers rearrange them.",
    visual: null
}, {
    id: "fq6",
    question: "What is a 'polyalphabetic substitution' cipher?",
    options: ["A cipher that only uses pictures.", "A cipher that uses multiple substitution alphabets.", "A cipher that rearranges the letters.", "A cipher with only one possible key."],
    correctAnswer: "A cipher that uses multiple substitution alphabets.",
    explanation: "Polyalphabetic ciphers, like Vigenère, use multiple shift alphabets to be more secure than simple substitution.",
    visual: null
}, {
    id: "fq7",
    question: "The set of rules or mathematical operations that performs encryption is the:",
    options: ["Key", "Protocol", "Algorithm", "Cipher"],
    correctAnswer: "Algorithm",
    explanation: "The algorithm is the step-by-step procedure or 'machine' that applies the key to the plaintext.",
    visual: null
}, {
    id: "fq8",
    question: "What is the main weakness of a simple Caesar cipher?",
    options: ["The key is too long", "It is vulnerable to brute-force attacks", "It only works on numbers", "It is too slow to compute"],
    correctAnswer: "It is vulnerable to brute-force attacks",
    explanation: "Since there are only 25 possible keys, an attacker can easily try every single one.",
    visual: null
}, {
    id: "fq9",
    question: "Which term ensures that data has not been altered or tampered with?",
    options: ["Confidentiality", "Integrity", "Authentication", "Non-repudiation"],
    correctAnswer: "Integrity",
    explanation: "Data integrity is the guarantee that the message has not been changed from its original form.",
    visual: null
}, {
    id: "fq10",
    question: "A cipher that rearranges the order of the letters in a message is a:",
    options: ["Substitution cipher", "Polyalphabetic cipher", "Transposition cipher", "Pigpen cipher"],
    correctAnswer: "Transposition cipher",
    explanation: "Transposition ciphers, like the Rail Fence cipher, scramble the order of letters without changing the letters themselves.",
    visual: null
}, {
    id: "fq11",
    question: "Using a Caesar cipher with a shift of 3, what does 'HELLO' become?",
    options: ["KHOOR", "IFMMP", "EBIIL", "JGNNQ"],
    correctAnswer: "KHOOR",
    explanation: "H+3=K, E+3=H, L+3=O, L+3=O, O+3=R.",
    visual: null
}, {
    id: "fq12",
    question: "If the ciphertext 'LIPPS' was encrypted with a Caesar cipher using a shift of 4, what is the plaintext?",
    options: ["HELLO", "GREEN", "WORLD", "APPLE"],
    correctAnswer: "HELLO",
    explanation: "To decrypt, shift each letter back by 4. L-4=H, I-4=E, P-4=L, P-4=L, S-4=O.",
    visual: null
}, {
    id: "fq13",
    question: "Encrypt 'CAT' with a Caesar cipher and a shift of 2.",
    options: ["ECV", "DOG", "FBU", "EBU"],
    correctAnswer: "ECV",
    explanation: "C becomes E, A becomes C, and T becomes V.",
    visual: null
}, {
    id: "fq14",
    question: "Brute-force is an effective attack against the Caesar cipher because:",
    options: ["There are very few possible keys.", "It uses a public key.", "Computers are slow.", "The alphabet is long."],
    correctAnswer: "There are very few possible keys.",
    explanation: "There are only 25 possible shifts, so it's easy to try all of them quickly.",
    visual: null
}, {
    id: "fq15",
    question: "If a Caesar cipher key is 26, what is the resulting ciphertext?",
    options: ["It's the same as the plaintext.", "It's shifted by 1.", "All letters become 'A'.", "The encryption fails."],
    correctAnswer: "It's the same as the plaintext.",
    explanation: "A shift of 26 brings every letter back to its original position (e.g., A + 26 = A).",
    visual: null
}, {
    id: "fq16",
    question: c.jsxs("div", {
        children: [c.jsx("p", {
            className: "mb-2 text-center",
            children: "Which word do these symbols represent?"
        }), c.jsx(Bd, {
            text: "HELLO"
        })]
    }),
    options: ["WATER", "HELLO", "CLOSE", "WORLD"],
    correctAnswer: "HELLO",
    explanation: "Matching the symbols on the Pigpen grid spells out HELLO.",
    visual: "pigpen"
}, {
    id: "fq17",
    question: "What is the Pigpen symbol for the letter 'E'?",
    options: ["E", "B", "A", "V"],
    correctAnswer: "E",
    explanation: "The letter 'E' is in the center of the first 3x3 grid, which is represented by a full square.",
    visual: "pigpen",
    renderOptionAs: "pigpen"
}, {
    id: "fq18",
    question: "What is the difference between the symbol for 'A' and the symbol for 'J'?",
    options: ["The symbol is flipped", "The symbol for 'J' has a dot", "The symbol for 'J' is larger", "There is no difference"],
    correctAnswer: "The symbol for 'J' has a dot",
    explanation: "The second grid of letters (J-R) uses the same shapes as the first (A-I), but with a dot added.",
    visual: "pigpen"
}, {
    id: "fq19",
    question: "The Pigpen cipher is a type of:",
    options: ["Monoalphabetic substitution", "Polyalphabetic substitution", "Transposition cipher", "Asymmetric cipher"],
    correctAnswer: "Monoalphabetic substitution",
    explanation: "It's a simple (monoalphabetic) substitution cipher where each letter is always replaced by the same single symbol.",
    visual: null
}, {
    id: "fq20",
    question: c.jsxs("div", {
        children: [c.jsx("p", {
            className: "mb-2 text-center",
            children: "Which letter is represented by this symbol?"
        }), c.jsx(Bd, {
            text: "S"
        })]
    }),
    options: ["S", "U", "V", "W"],
    correctAnswer: "S",
    explanation: "The bottom 'V' shape from the X-grid corresponds to the letter 'S'.",
    visual: "pigpen"
}, {
    id: "fq21",
    question: "The Vigenère cipher is more secure than the Caesar cipher because it is:",
    options: ["A transposition cipher", "An asymmetric cipher", "A polyalphabetic cipher", "A block cipher"],
    correctAnswer: "A polyalphabetic cipher",
    explanation: "It uses multiple Caesar cipher shifts based on a keyword, which masks letter frequencies and makes it harder to crack.",
    visual: null
}, {
    id: "fq22",
    question: "Using the keyword 'KEY' to encrypt the plaintext 'HELLO', what is the ciphertext?",
    options: ["RIJVS", "RIJVF", "SGKWT", "SGJVS"],
    correctAnswer: "RIJVS",
    explanation: "H+K=R, E+E=I, L+Y=J, L+K=V, O+E=S. The keyword 'KEY' repeats as 'KEYKE'.",
    visual: "vigenere"
}, {
    id: "fq23",
    question: "If you encrypt 'A' with the key 'C', what is the result?",
    options: ["A", "B", "C", "D"],
    correctAnswer: "C",
    explanation: "Plaintext 'A' is shift 0. Key 'C' is shift 2. The result is the letter at index 2, which is 'C'.",
    visual: "vigenere"
}, {
    id: "fq24",
    question: "What is the plaintext if the ciphertext is 'TEST' and the key is 'B'?",
    options: ["SDRS", "SDRT", "TEST", "UFSU"],
    correctAnswer: "SDRS",
    explanation: "Using a key of 'B' is a simple Caesar cipher with a shift of 1. To decrypt, you shift back by 1. T-1=S, E-1=D, S-1=R, T-1=S.",
    visual: "vigenere"
}, {
    id: "fq25",
    question: "The grid used for manual Vigenère encryption is called a:",
    options: ["Pigpen Grid", "Frequency Table", "Tabula Recta", "Enigma Machine"],
    correctAnswer: "Tabula Recta",
    explanation: "The Vigenère square is also known as the Tabula Recta, or 'straight table'.",
    visual: null
}, {
    id: "fq26",
    question: "Which of these ciphers is a transposition cipher?",
    options: ["Caesar", "Pigpen", "Vigenère", "Rail Fence"],
    correctAnswer: "Rail Fence",
    explanation: "The Rail Fence cipher rearranges the letters of the message but does not substitute them.",
    visual: null
}, {
    id: "fq27",
    question: "Which cipher uses a keyword to determine multiple shifts?",
    options: ["Caesar", "Pigpen", "Vigenère", "Rail Fence"],
    correctAnswer: "Vigenère",
    explanation: "The Vigenère cipher's key is a word that dictates which Caesar shift to use for each letter.",
    visual: null
}, {
    id: "fq28",
    question: "Which cipher uses geometric symbols based on grids?",
    options: ["Caesar", "Pigpen", "Vigenère", "Rail Fence"],
    correctAnswer: "Pigpen",
    explanation: "The Pigpen cipher is unique in its use of symbols derived from fragments of a grid.",
    visual: null
}, {
    id: "fq29",
    question: "If you encrypt the message 'HI' with a Rail Fence cipher using 2 rails, what is the ciphertext?",
    options: ["IH", "HI", "H I", "IIH"],
    correctAnswer: "HI",
    explanation: "With 2 rails, H goes on the first rail, I on the second. Reading row by row gives H, then I. So 'HI'.",
    visual: null
}, {
    id: "fq30",
    question: "Which of the following ciphers would be the hardest to break for a human without a computer?",
    options: ["Caesar Cipher", "Pigpen Cipher", "Rail Fence Cipher", "Vigenère Cipher"],
    correctAnswer: "Vigenère Cipher",
    explanation: "The Vigenère cipher's use of multiple alphabets (polyalphabetic) makes it significantly more resistant to simple frequency analysis than the other ciphers listed.",
    visual: null
}]
  , Gm = (r, b) => r.split("").map(A => {
    const f = A.charCodeAt(0);
    return f >= 65 && f <= 90 ? String.fromCharCode((f - 65 + b) % 26 + 65) : f >= 97 && f <= 122 ? String.fromCharCode((f - 97 + b) % 26 + 97) : f >= 48 && f <= 57 ? String.fromCharCode((f - 48 + b) % 10 + 48) : A
}
).join("")
  , Vm = (r, b) => {
    let A = "";
    const f = b.toLowerCase();
    let S = 0;
    for (let _ = 0; _ < r.length; _++) {
        const j = r[_]
          , M = j.charCodeAt(0);
        let z = !1;
        if (j >= "a" && j <= "z") {
            const y = f.charCodeAt(S % f.length) - 97;
            A += String.fromCharCode((M - 97 + y) % 26 + 97),
            z = !0
        } else if (j >= "A" && j <= "Z") {
            const y = f.charCodeAt(S % f.length) - 97;
            A += String.fromCharCode((M - 65 + y) % 26 + 65),
            z = !0
        } else if (j >= "0" && j <= "9") {
            const y = f.charCodeAt(S % f.length) - 97;
            A += String.fromCharCode((M - 48 + y) % 10 + 48),
            z = !0
        } else
            A += j;
        z && S++
    }
    return A
}
  , Ld = r => {
    const b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let A = "";
    for (let f = 0; f < r; f++)
        A += b.charAt(Math.floor(Math.random() * b.length));
    return A
}
  , Xm = r => {
    const b = [r.name.replace(/ /g, "&"), r.score, r.totalQuestions, r.percentage, r.startDate.getTime(), r.durationInSeconds].join("&")
      , A = Gm(b, Om)
      , f = Vm(A, Cm)
      , S = Ld(5)
      , _ = Ld(5);
    return `${S}${f}${_}`
}
  , ps = (r, b) => b === "pigpen" ? c.jsx("div", {
    className: "flex flex-wrap items-center justify-center h-full gap-x-1",
    children: r.split("").map( (A, f) => c.jsx(bs, {
        char: A,
        className: "text-current",
        size: 20
    }, `${A}-${f}`))
}) : r
  , Zm = () => {
    const [r,b] = Q.useState("")
      , [A,f] = Q.useState("")
      , [S,_] = Q.useState(!1)
      , [j,M] = Q.useState(null)
      , [z,y] = Q.useState(null)
      , [B,w] = Q.useState(0)
      , [V,he] = Q.useState(Array(Ht.length).fill(null))
      , [P,pe] = Q.useState(null)
      , [se,K] = Q.useState(!1)
      , [Ee,J] = Q.useState(!1)
      , [Oe,ee] = Q.useState(!1)
      , F = Q.useMemo( () => [...Ht].sort( () => Math.random() - .5), [])
      , L = F[B]
      , Te = Q.useMemo( () => L ? [...L.options].sort( () => Math.random() - .5) : [], [L])
      , Ne = Q.useMemo( () => Ht.reduce( (H, I, te) => V[te] === I.correctAnswer ? H + 1 : H, 0), [V])
      , xe = Q.useMemo( () => Ht.length === 0 ? 0 : Math.round(Ne / Ht.length * 100), [Ne])
      , He = Q.useMemo( () => !j || !z ? 0 : Math.round((z.getTime() - j.getTime()) / 1e3), [j, z])
      , ze = Q.useMemo( () => !Ee || !A || !j ? "" : Xm({
        name: A,
        score: Ne,
        totalQuestions: Ht.length,
        percentage: xe,
        startDate: j,
        durationInSeconds: He
    }), [Ee, A, Ne, xe, j, He])
      , gt = Q.useCallback( () => {
        ze && navigator.clipboard.writeText(ze).then( () => {
            ee(!0),
            setTimeout( () => ee(!1), 2e3)
        }
        )
    }
    , [ze])
      , Pe = () => {
        r.trim() && (f(r.trim()),
        M(new Date),
        _(!0),
        w(0),
        he(Array(Ht.length).fill(null)),
        J(!1),
        pe(null),
        K(!1),
        y(null))
    }
      , ke = () => {
        if (!P)
            return;
        const H = [...V]
          , I = Ht.findIndex(te => te.id === L.id);
        I !== -1 && (H[I] = P,
        he(H)),
        K(!0)
    }
      , T = () => {
        K(!1),
        pe(null),
        B < F.length - 1 ? w(B + 1) : (y(new Date),
        J(!0))
    }
      , D = () => {
        _(!1),
        f(""),
        b("")
    }
    ;
    return S ? Ee ? c.jsxs("div", {
        className: "animate-fadeIn space-y-6",
        children: [c.jsxs("div", {
            className: "p-6 bg-slate-100 rounded-lg shadow-xl text-center",
            children: [c.jsxs("h2", {
                className: "text-3xl font-bold text-cyan-600 mb-2",
                children: ["Quiz Completed, ", A, "!"]
            }), c.jsxs("p", {
                className: "text-2xl text-gray-700 mb-2",
                children: ["Your Final Score: ", c.jsx("span", {
                    className: "font-extrabold text-pink-500",
                    children: Ne
                }), " out of ", Ht.length, " (", xe, "%)"]
            }), xe === 100 && c.jsx("p", {
                className: "text-green-600 text-lg font-semibold",
                children: "🎉 Perfect Score! You're a cryptography master! 🎉"
            }), xe >= 70 && xe < 100 && c.jsx("p", {
                className: "text-yellow-600 text-lg font-semibold",
                children: "👍 Great job! You have a strong understanding of these concepts."
            }), xe < 70 && c.jsx("p", {
                className: "text-orange-500 text-lg font-semibold",
                children: "🤔 Good effort! Review your answers below and try again to improve."
            }), c.jsxs("div", {
                className: "mt-8 text-left max-w-2xl mx-auto",
                children: [c.jsx("h3", {
                    className: "text-xl font-semibold mb-2 text-cyan-700 text-center",
                    children: "Homework Pass Code"
                }), c.jsx("p", {
                    className: "text-sm text-gray-600 mb-3 text-center",
                    children: "This code contains your encrypted quiz results. Copy and submit it as proof of completion."
                }), c.jsxs("div", {
                    className: "relative bg-slate-900 p-4 rounded-lg",
                    children: [c.jsx("p", {
                        className: "font-mono text-sm text-cyan-300 break-words",
                        "aria-label": "Homework Pass Code",
                        children: ze
                    }), c.jsx("button", {
                        onClick: gt,
                        className: "absolute top-2 right-2 bg-slate-700 hover:bg-slate-600 text-slate-300 text-xs font-bold py-1 px-2 rounded transition-colors",
                        "aria-label": "Copy pass code to clipboard",
                        children: Oe ? "Copied!" : "Copy"
                    })]
                })]
            }), c.jsx("button", {
                onClick: D,
                className: "mt-8 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-colors duration-200",
                children: "Take Quiz Again"
            })]
        }), c.jsxs("div", {
            className: "space-y-4",
            children: [c.jsx("h3", {
                className: "text-2xl font-bold text-center text-cyan-600",
                children: "Review Your Answers"
            }), Ht.map( (H, I) => {
                const te = V[I]
                  , d = te === H.correctAnswer;
                return c.jsxs("div", {
                    className: `p-4 rounded-lg shadow-md border ${d ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`,
                    children: [c.jsxs("div", {
                        className: "font-semibold text-gray-800",
                        children: ["Q", I + 1, ": ", H.question]
                    }), c.jsxs("p", {
                        className: `mt-2 text-sm ${d ? "text-green-700" : "text-red-700"}`,
                        children: ["Your answer: ", c.jsx("span", {
                            className: "font-bold",
                            children: te ? ps(te, H.renderOptionAs) : "Not Answered"
                        }), d ? " (Correct)" : " (Incorrect)"]
                    }), !d && c.jsxs("p", {
                        className: "mt-1 text-sm text-gray-600",
                        children: ["Correct answer: ", c.jsx("span", {
                            className: "font-bold text-green-700",
                            children: ps(H.correctAnswer, H.renderOptionAs)
                        })]
                    }), c.jsxs("p", {
                        className: "mt-2 text-xs text-gray-500 border-t pt-2",
                        children: [c.jsx("span", {
                            className: "font-semibold",
                            children: "Explanation:"
                        }), " ", H.explanation]
                    })]
                }, H.id)
            }
            )]
        })]
    }) : c.jsxs("div", {
        className: "space-y-6 animate-fadeIn",
        children: [c.jsxs("div", {
            children: [c.jsx("h2", {
                className: "text-3xl font-bold text-cyan-600 text-center",
                children: "Final Quiz Challenge"
            }), c.jsx("p", {
                className: "text-center text-gray-600 mt-2",
                children: "Test your knowledge on all encryption topics."
            })]
        }), L.visual === "pigpen" && c.jsx(Vd, {}), L.visual === "vigenere" && c.jsxs("div", {
            className: "p-4 bg-slate-100 rounded-lg shadow-inner",
            children: [c.jsx("h4", {
                className: "text-lg font-semibold text-center text-gray-800 mb-2",
                children: "Vigenère Square (Tabula Recta)"
            }), c.jsx("div", {
                className: "mx-auto max-w-min",
                style: {
                    transform: "scale(0.8)",
                    transformOrigin: "center"
                },
                children: c.jsx(Xd, {})
            })]
        }), c.jsxs("div", {
            className: "p-4 sm:p-6 bg-white bg-opacity-90 rounded-lg shadow-xl border border-gray-200",
            children: [c.jsxs("div", {
                className: "flex justify-between items-center mb-4",
                children: [c.jsxs("h3", {
                    className: "text-xl sm:text-2xl font-bold text-cyan-600",
                    children: ["Question ", B + 1]
                }), c.jsxs("span", {
                    className: "text-sm font-semibold text-gray-500 bg-slate-100 px-3 py-1 rounded-full",
                    children: [B + 1, " / ", F.length]
                })]
            }), c.jsx("div", {
                className: "bg-slate-100 p-4 rounded-md mb-4 min-h-[6rem] flex items-center justify-center",
                children: c.jsx("div", {
                    className: "text-lg text-gray-800 text-center",
                    children: L.question
                })
            }), c.jsx("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4",
                children: Te.map(H => {
                    const I = P === H
                      , te = L.correctAnswer === H;
                    let d = "bg-white hover:bg-gray-100 border border-gray-300 text-gray-700";
                    return se ? te ? d = "bg-green-600 text-white border-green-600" : I ? d = "bg-red-600 text-white border-red-600" : d = "bg-gray-200 opacity-70 text-gray-600 border-gray-300" : I && (d = "bg-cyan-600 text-white border-cyan-600 ring-2 ring-cyan-400"),
                    c.jsx("button", {
                        onClick: () => pe(H),
                        disabled: se,
                        className: `w-full p-3 h-14 flex items-center justify-center text-center rounded-md transition-all duration-200 ${d} disabled:cursor-not-allowed`,
                        children: ps(H, L.renderOptionAs)
                    }, H)
                }
                )
            }), !se && c.jsx("button", {
                onClick: ke,
                disabled: !P,
                className: "w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200",
                children: "Submit Answer"
            }), se && c.jsxs("div", {
                className: `mt-4 p-4 rounded-md border ${P === L.correctAnswer ? "bg-green-100 border-green-300 text-green-800" : "bg-red-100 border-red-300 text-red-800"}`,
                children: [c.jsx("p", {
                    className: "font-semibold text-lg mb-2",
                    children: P === L.correctAnswer ? "Correct! 🎉" : "Incorrect 😔"
                }), c.jsxs("div", {
                    className: "flex items-start text-sm",
                    children: [c.jsx(Qd, {
                        className: "w-5 h-5 mr-2 mt-1 text-yellow-500 flex-shrink-0"
                    }), c.jsx("p", {
                        children: L.explanation
                    })]
                }), c.jsx("button", {
                    onClick: T,
                    className: "mt-4 w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-colors duration-200",
                    children: B < F.length - 1 ? "Next Question" : "Finish & See Results"
                })]
            })]
        })]
    }) : c.jsxs("div", {
        className: "animate-fadeIn text-center max-w-lg mx-auto p-4",
        children: [c.jsx("h2", {
            className: "text-3xl font-bold text-cyan-600",
            children: "Final Quiz Challenge"
        }), c.jsx("p", {
            className: "text-gray-600 mt-2 mb-8",
            children: 'Enter your name to begin. A unique "Homework Pass Code" will be generated with your results.'
        }), c.jsxs("div", {
            className: "space-y-4",
            children: [c.jsx("label", {
                htmlFor: "studentName",
                className: "sr-only",
                children: "Enter your full name"
            }), c.jsx("input", {
                id: "studentName",
                type: "text",
                value: r,
                onChange: H => b(H.target.value),
                placeholder: "Enter your full name",
                className: "w-full p-3 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 text-gray-800 placeholder-gray-400 text-lg"
            }), c.jsx("button", {
                onClick: Pe,
                disabled: !r.trim(),
                className: "w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed",
                children: "Start Quiz"
            })]
        })]
    })
}
  , Km = () => {
    const [r,b] = Q.useState(Dd[0].id)
      , A = () => {
        switch (r) {
        case Ie.WHY_ENCRYPT:
            return c.jsx(Rd, {});
        case Ie.HOW_IT_WORKS:
            return c.jsx(Um, {});
        case Ie.PIGPEN:
            return c.jsx(qm, {});
        case Ie.CAESAR:
            return c.jsx(Bm, {});
        case Ie.VIGENERE:
            return c.jsx(Lm, {});
        case Ie.RAIL_FENCE:
            return c.jsx(Qm, {});
        case Ie.FINAL_QUIZ:
            return c.jsx(Zm, {});
        default:
            return c.jsx(Rd, {})
        }
    }
    ;
    return c.jsxs("div", {
        className: "min-h-screen bg-gradient-to-br from-slate-50 via-gray-100 to-slate-200 text-gray-800 p-4 sm:p-8 font-mono",
        children: [c.jsxs("header", {
            className: "text-center mb-6 sm:mb-10",
            children: [c.jsx("h1", {
                className: "text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500 mb-2",
                children: zm
            }), c.jsx("p", {
                className: "text-md sm:text-lg text-gray-600 mt-1 sm:mt-2",
                children: "Unlock the secrets of cryptography with interactive tools and challenges!"
            })]
        }), c.jsx("nav", {
            className: "flex flex-wrap justify-center mb-6 sm:mb-8 gap-2 sm:gap-3",
            children: Dd.map(f => c.jsx(Mm, {
                label: f.name,
                isActive: r === f.id,
                onClick: () => b(f.id)
            }, f.id))
        }), c.jsx("main", {
            className: "bg-white bg-opacity-80 shadow-2xl rounded-xl p-4 sm:p-8 min-h-[60vh] backdrop-blur-md border border-gray-200",
            children: A()
        }), c.jsxs("footer", {
            className: "text-center mt-8 sm:mt-12 text-gray-500 text-sm",
            children: [c.jsx("p", {
                children: "Developed for the Pearson Edexcel IGCSE 4CP0 Computer Science course. Prompted and fine-tuned by Lionel Basa using Google AI Studio."
            }), c.jsx("p", {
                className: "mt-1",
                children: "Built with React, TypeScript, and Tailwind CSS."
            })]
        })]
    })
}
  , Zd = document.getElementById("root");
if (!Zd)
    throw new Error("Could not find root element to mount to");
const Jm = Em.createRoot(Zd);
Jm.render(c.jsx(vm.StrictMode, {
    children: c.jsx(Km, {})
}));
