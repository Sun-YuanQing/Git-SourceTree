!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).TIM = t()
}(this, (function() {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    function t(e, t) {
        return e(t = {
            exports: {}
        }, t.exports),
        t.exports
    }
    var n = function(e) {
        return e && e.Math == Math && e
    }
      , r = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof e && e) || Function("return this")()
      , o = function(e) {
        try {
            return !!e()
        } catch (t) {
            return !0
        }
    }
      , i = !o((function() {
        return 7 != Object.defineProperty({}, 1, {
            get: function() {
                return 7
            }
        })[1]
    }
    ))
      , a = {}.propertyIsEnumerable
      , s = Object.getOwnPropertyDescriptor
      , u = {
        f: s && !a.call({
            1: 2
        }, 1) ? function(e) {
            var t = s(this, e);
            return !!t && t.enumerable
        }
        : a
    }
      , c = function(e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        }
    }
      , l = {}.toString
      , p = function(e) {
        return l.call(e).slice(8, -1)
    }
      , f = "".split
      , h = o((function() {
        return !Object("z").propertyIsEnumerable(0)
    }
    )) ? function(e) {
        return "String" == p(e) ? f.call(e, "") : Object(e)
    }
    : Object
      , d = function(e) {
        if (null == e)
            throw TypeError("Can't call method on " + e);
        return e
    }
      , g = function(e) {
        return h(d(e))
    }
      , m = function(e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
      , v = function(e, t) {
        if (!m(e))
            return e;
        var n, r;
        if (t && "function" == typeof (n = e.toString) && !m(r = n.call(e)))
            return r;
        if ("function" == typeof (n = e.valueOf) && !m(r = n.call(e)))
            return r;
        if (!t && "function" == typeof (n = e.toString) && !m(r = n.call(e)))
            return r;
        throw TypeError("Can't convert object to primitive value")
    }
      , y = {}.hasOwnProperty
      , _ = function(e, t) {
        return y.call(e, t)
    }
      , I = r.document
      , M = m(I) && m(I.createElement)
      , C = function(e) {
        return M ? I.createElement(e) : {}
    }
      , E = !i && !o((function() {
        return 7 != Object.defineProperty(C("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    }
    ))
      , S = Object.getOwnPropertyDescriptor
      , T = {
        f: i ? S : function(e, t) {
            if (e = g(e),
            t = v(t, !0),
            E)
                try {
                    return S(e, t)
                } catch (n) {}
            if (_(e, t))
                return c(!u.f.call(e, t), e[t])
        }
    }
      , D = function(e) {
        if (!m(e))
            throw TypeError(String(e) + " is not an object");
        return e
    }
      , k = Object.defineProperty
      , O = {
        f: i ? k : function(e, t, n) {
            if (D(e),
            t = v(t, !0),
            D(n),
            E)
                try {
                    return k(e, t, n)
                } catch (r) {}
            if ("get"in n || "set"in n)
                throw TypeError("Accessors not supported");
            return "value"in n && (e[t] = n.value),
            e
        }
    }
      , R = i ? function(e, t, n) {
        return O.f(e, t, c(1, n))
    }
    : function(e, t, n) {
        return e[t] = n,
        e
    }
      , A = function(e, t) {
        try {
            R(r, e, t)
        } catch (n) {
            r[e] = t
        }
        return t
    }
      , w = r["__core-js_shared__"] || A("__core-js_shared__", {})
      , L = Function.toString;
    "function" != typeof w.inspectSource && (w.inspectSource = function(e) {
        return L.call(e)
    }
    );
    var N, b, P, G = w.inspectSource, U = r.WeakMap, x = "function" == typeof U && /native code/.test(G(U)), q = t((function(e) {
        (e.exports = function(e, t) {
            return w[e] || (w[e] = void 0 !== t ? t : {})
        }
        )("versions", []).push({
            version: "3.6.5",
            mode: "global",
            copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
        })
    }
    )), F = 0, j = Math.random(), V = function(e) {
        return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++F + j).toString(36)
    }, B = q("keys"), K = function(e) {
        return B[e] || (B[e] = V(e))
    }, H = {}, $ = r.WeakMap;
    if (x) {
        var z = new $
          , Y = z.get
          , W = z.has
          , J = z.set;
        N = function(e, t) {
            return J.call(z, e, t),
            t
        }
        ,
        b = function(e) {
            return Y.call(z, e) || {}
        }
        ,
        P = function(e) {
            return W.call(z, e)
        }
    } else {
        var X = K("state");
        H[X] = !0,
        N = function(e, t) {
            return R(e, X, t),
            t
        }
        ,
        b = function(e) {
            return _(e, X) ? e[X] : {}
        }
        ,
        P = function(e) {
            return _(e, X)
        }
    }
    var Q, Z, ee = {
        set: N,
        get: b,
        has: P,
        enforce: function(e) {
            return P(e) ? b(e) : N(e, {})
        },
        getterFor: function(e) {
            return function(t) {
                var n;
                if (!m(t) || (n = b(t)).type !== e)
                    throw TypeError("Incompatible receiver, " + e + " required");
                return n
            }
        }
    }, te = t((function(e) {
        var t = ee.get
          , n = ee.enforce
          , o = String(String).split("String");
        (e.exports = function(e, t, i, a) {
            var s = !!a && !!a.unsafe
              , u = !!a && !!a.enumerable
              , c = !!a && !!a.noTargetGet;
            "function" == typeof i && ("string" != typeof t || _(i, "name") || R(i, "name", t),
            n(i).source = o.join("string" == typeof t ? t : "")),
            e !== r ? (s ? !c && e[t] && (u = !0) : delete e[t],
            u ? e[t] = i : R(e, t, i)) : u ? e[t] = i : A(t, i)
        }
        )(Function.prototype, "toString", (function() {
            return "function" == typeof this && t(this).source || G(this)
        }
        ))
    }
    )), ne = r, re = function(e) {
        return "function" == typeof e ? e : void 0
    }, oe = function(e, t) {
        return arguments.length < 2 ? re(ne[e]) || re(r[e]) : ne[e] && ne[e][t] || r[e] && r[e][t]
    }, ie = Math.ceil, ae = Math.floor, se = function(e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? ae : ie)(e)
    }, ue = Math.min, ce = function(e) {
        return e > 0 ? ue(se(e), 9007199254740991) : 0
    }, le = Math.max, pe = Math.min, fe = function(e, t) {
        var n = se(e);
        return n < 0 ? le(n + t, 0) : pe(n, t)
    }, he = function(e) {
        return function(t, n, r) {
            var o, i = g(t), a = ce(i.length), s = fe(r, a);
            if (e && n != n) {
                for (; a > s; )
                    if ((o = i[s++]) != o)
                        return !0
            } else
                for (; a > s; s++)
                    if ((e || s in i) && i[s] === n)
                        return e || s || 0;
            return !e && -1
        }
    }, de = {
        includes: he(!0),
        indexOf: he(!1)
    }, ge = de.indexOf, me = function(e, t) {
        var n, r = g(e), o = 0, i = [];
        for (n in r)
            !_(H, n) && _(r, n) && i.push(n);
        for (; t.length > o; )
            _(r, n = t[o++]) && (~ge(i, n) || i.push(n));
        return i
    }, ve = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"], ye = ve.concat("length", "prototype"), _e = {
        f: Object.getOwnPropertyNames || function(e) {
            return me(e, ye)
        }
    }, Ie = {
        f: Object.getOwnPropertySymbols
    }, Me = oe("Reflect", "ownKeys") || function(e) {
        var t = _e.f(D(e))
          , n = Ie.f;
        return n ? t.concat(n(e)) : t
    }
    , Ce = function(e, t) {
        for (var n = Me(t), r = O.f, o = T.f, i = 0; i < n.length; i++) {
            var a = n[i];
            _(e, a) || r(e, a, o(t, a))
        }
    }, Ee = /#|\.prototype\./, Se = function(e, t) {
        var n = De[Te(e)];
        return n == Oe || n != ke && ("function" == typeof t ? o(t) : !!t)
    }, Te = Se.normalize = function(e) {
        return String(e).replace(Ee, ".").toLowerCase()
    }
    , De = Se.data = {}, ke = Se.NATIVE = "N", Oe = Se.POLYFILL = "P", Re = Se, Ae = T.f, we = function(e, t) {
        var n, o, i, a, s, u = e.target, c = e.global, l = e.stat;
        if (n = c ? r : l ? r[u] || A(u, {}) : (r[u] || {}).prototype)
            for (o in t) {
                if (a = t[o],
                i = e.noTargetGet ? (s = Ae(n, o)) && s.value : n[o],
                !Re(c ? o : u + (l ? "." : "#") + o, e.forced) && void 0 !== i) {
                    if (typeof a == typeof i)
                        continue;
                    Ce(a, i)
                }
                (e.sham || i && i.sham) && R(a, "sham", !0),
                te(n, o, a, e)
            }
    }, Le = Array.isArray || function(e) {
        return "Array" == p(e)
    }
    , Ne = function(e) {
        return Object(d(e))
    }, be = function(e, t, n) {
        var r = v(t);
        r in e ? O.f(e, r, c(0, n)) : e[r] = n
    }, Pe = !!Object.getOwnPropertySymbols && !o((function() {
        return !String(Symbol())
    }
    )), Ge = Pe && !Symbol.sham && "symbol" == typeof Symbol.iterator, Ue = q("wks"), xe = r.Symbol, qe = Ge ? xe : xe && xe.withoutSetter || V, Fe = function(e) {
        return _(Ue, e) || (Pe && _(xe, e) ? Ue[e] = xe[e] : Ue[e] = qe("Symbol." + e)),
        Ue[e]
    }, je = Fe("species"), Ve = function(e, t) {
        var n;
        return Le(e) && ("function" != typeof (n = e.constructor) || n !== Array && !Le(n.prototype) ? m(n) && null === (n = n[je]) && (n = void 0) : n = void 0),
        new (void 0 === n ? Array : n)(0 === t ? 0 : t)
    }, Be = oe("navigator", "userAgent") || "", Ke = r.process, He = Ke && Ke.versions, $e = He && He.v8;
    $e ? Z = (Q = $e.split("."))[0] + Q[1] : Be && (!(Q = Be.match(/Edge\/(\d+)/)) || Q[1] >= 74) && (Q = Be.match(/Chrome\/(\d+)/)) && (Z = Q[1]);
    var ze = Z && +Z
      , Ye = Fe("species")
      , We = function(e) {
        return ze >= 51 || !o((function() {
            var t = [];
            return (t.constructor = {})[Ye] = function() {
                return {
                    foo: 1
                }
            }
            ,
            1 !== t[e](Boolean).foo
        }
        ))
    }
      , Je = Fe("isConcatSpreadable")
      , Xe = ze >= 51 || !o((function() {
        var e = [];
        return e[Je] = !1,
        e.concat()[0] !== e
    }
    ))
      , Qe = We("concat")
      , Ze = function(e) {
        if (!m(e))
            return !1;
        var t = e[Je];
        return void 0 !== t ? !!t : Le(e)
    };
    we({
        target: "Array",
        proto: !0,
        forced: !Xe || !Qe
    }, {
        concat: function(e) {
            var t, n, r, o, i, a = Ne(this), s = Ve(a, 0), u = 0;
            for (t = -1,
            r = arguments.length; t < r; t++)
                if (Ze(i = -1 === t ? a : arguments[t])) {
                    if (u + (o = ce(i.length)) > 9007199254740991)
                        throw TypeError("Maximum allowed index exceeded");
                    for (n = 0; n < o; n++,
                    u++)
                        n in i && be(s, u, i[n])
                } else {
                    if (u >= 9007199254740991)
                        throw TypeError("Maximum allowed index exceeded");
                    be(s, u++, i)
                }
            return s.length = u,
            s
        }
    });
    var et = function(e) {
        if ("function" != typeof e)
            throw TypeError(String(e) + " is not a function");
        return e
    }
      , nt = function(e, t, n) {
        if (et(e),
        void 0 === t)
            return e;
        switch (n) {
        case 0:
            return function() {
                return e.call(t)
            }
            ;
        case 1:
            return function(n) {
                return e.call(t, n)
            }
            ;
        case 2:
            return function(n, r) {
                return e.call(t, n, r)
            }
            ;
        case 3:
            return function(n, r, o) {
                return e.call(t, n, r, o)
            }
        }
        return function() {
            return e.apply(t, arguments)
        }
    }
      , rt = [].push
      , ot = function(e) {
        var t = 1 == e
          , n = 2 == e
          , r = 3 == e
          , o = 4 == e
          , i = 6 == e
          , a = 5 == e || i;
        return function(s, u, c, l) {
            for (var p, f, d = Ne(s), g = h(d), m = nt(u, c, 3), v = ce(g.length), y = 0, _ = l || Ve, I = t ? _(s, v) : n ? _(s, 0) : void 0; v > y; y++)
                if ((a || y in g) && (f = m(p = g[y], y, d),
                e))
                    if (t)
                        I[y] = f;
                    else if (f)
                        switch (e) {
                        case 3:
                            return !0;
                        case 5:
                            return p;
                        case 6:
                            return y;
                        case 2:
                            rt.call(I, p)
                        }
                    else if (o)
                        return !1;
            return i ? -1 : r || o ? o : I
        }
    }
      , it = {
        forEach: ot(0),
        map: ot(1),
        filter: ot(2),
        some: ot(3),
        every: ot(4),
        find: ot(5),
        findIndex: ot(6)
    }
      , at = function(e, t) {
        var n = [][e];
        return !!n && o((function() {
            n.call(null, t || function() {
                throw 1
            }
            , 1)
        }
        ))
    }
      , st = Object.defineProperty
      , ut = {}
      , ct = function(e) {
        throw e
    }
      , lt = function(e, t) {
        if (_(ut, e))
            return ut[e];
        t || (t = {});
        var n = [][e]
          , r = !!_(t, "ACCESSORS") && t.ACCESSORS
          , a = _(t, 0) ? t[0] : ct
          , s = _(t, 1) ? t[1] : void 0;
        return ut[e] = !!n && !o((function() {
            if (r && !i)
                return !0;
            var e = {
                length: -1
            };
            r ? st(e, 1, {
                enumerable: !0,
                get: ct
            }) : e[1] = 1,
            n.call(e, a, s)
        }
        ))
    }
      , pt = it.forEach
      , ft = at("forEach")
      , ht = lt("forEach")
      , dt = ft && ht ? [].forEach : function(e) {
        return pt(this, e, arguments.length > 1 ? arguments[1] : void 0)
    }
    ;
    we({
        target: "Array",
        proto: !0,
        forced: [].forEach != dt
    }, {
        forEach: dt
    });
    var gt = function(e, t, n, r) {
        try {
            return r ? t(D(n)[0], n[1]) : t(n)
        } catch (i) {
            var o = e.return;
            throw void 0 !== o && D(o.call(e)),
            i
        }
    }
      , mt = {}
      , vt = Fe("iterator")
      , yt = Array.prototype
      , _t = function(e) {
        return void 0 !== e && (mt.Array === e || yt[vt] === e)
    }
      , It = {};
    It[Fe("toStringTag")] = "z";
    var Mt = "[object z]" === String(It)
      , Ct = Fe("toStringTag")
      , Et = "Arguments" == p(function() {
        return arguments
    }())
      , St = Mt ? p : function(e) {
        var t, n, r;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function(e, t) {
            try {
                return e[t]
            } catch (n) {}
        }(t = Object(e), Ct)) ? n : Et ? p(t) : "Object" == (r = p(t)) && "function" == typeof t.callee ? "Arguments" : r
    }
      , Tt = Fe("iterator")
      , Dt = function(e) {
        if (null != e)
            return e[Tt] || e["@@iterator"] || mt[St(e)]
    }
      , kt = function(e) {
        var t, n, r, o, i, a, s = Ne(e), u = "function" == typeof this ? this : Array, c = arguments.length, l = c > 1 ? arguments[1] : void 0, p = void 0 !== l, f = Dt(s), h = 0;
        if (p && (l = nt(l, c > 2 ? arguments[2] : void 0, 2)),
        null == f || u == Array && _t(f))
            for (n = new u(t = ce(s.length)); t > h; h++)
                a = p ? l(s[h], h) : s[h],
                be(n, h, a);
        else
            for (i = (o = f.call(s)).next,
            n = new u; !(r = i.call(o)).done; h++)
                a = p ? gt(o, l, [r.value, h], !0) : r.value,
                be(n, h, a);
        return n.length = h,
        n
    }
      , Ot = Fe("iterator")
      , Rt = !1;
    try {
        var At = 0
          , wt = {
            next: function() {
                return {
                    done: !!At++
                }
            },
            return: function() {
                Rt = !0
            }
        };
        wt[Ot] = function() {
            return this
        }
        ,
        Array.from(wt, (function() {
            throw 2
        }
        ))
    } catch (p_) {}
    var Lt = function(e, t) {
        if (!t && !Rt)
            return !1;
        var n = !1;
        try {
            var r = {};
            r[Ot] = function() {
                return {
                    next: function() {
                        return {
                            done: n = !0
                        }
                    }
                }
            }
            ,
            e(r)
        } catch (p_) {}
        return n
    }
      , Nt = !Lt((function(e) {
        Array.from(e)
    }
    ));
    we({
        target: "Array",
        stat: !0,
        forced: Nt
    }, {
        from: kt
    });
    var bt, Pt = Object.keys || function(e) {
        return me(e, ve)
    }
    , Gt = i ? Object.defineProperties : function(e, t) {
        D(e);
        for (var n, r = Pt(t), o = r.length, i = 0; o > i; )
            O.f(e, n = r[i++], t[n]);
        return e
    }
    , Ut = oe("document", "documentElement"), xt = K("IE_PROTO"), qt = function() {}, Ft = function(e) {
        return "<script>" + e + "<\/script>"
    }, jt = function() {
        try {
            bt = document.domain && new ActiveXObject("htmlfile")
        } catch (p_) {}
        var e, t;
        jt = bt ? function(e) {
            e.write(Ft("")),
            e.close();
            var t = e.parentWindow.Object;
            return e = null,
            t
        }(bt) : ((t = C("iframe")).style.display = "none",
        Ut.appendChild(t),
        t.src = String("javascript:"),
        (e = t.contentWindow.document).open(),
        e.write(Ft("document.F=Object")),
        e.close(),
        e.F);
        for (var n = ve.length; n--; )
            delete jt.prototype[ve[n]];
        return jt()
    };
    H[xt] = !0;
    var Vt = Object.create || function(e, t) {
        var n;
        return null !== e ? (qt.prototype = D(e),
        n = new qt,
        qt.prototype = null,
        n[xt] = e) : n = jt(),
        void 0 === t ? n : Gt(n, t)
    }
    ;
    we({
        target: "Object",
        stat: !0,
        sham: !i
    }, {
        create: Vt
    });
    var Bt = o((function() {
        Pt(1)
    }
    ));
    we({
        target: "Object",
        stat: !0,
        forced: Bt
    }, {
        keys: function(e) {
            return Pt(Ne(e))
        }
    });
    var Kt, Ht, $t, zt = function(e) {
        return function(t, n) {
            var r, o, i = String(d(t)), a = se(n), s = i.length;
            return a < 0 || a >= s ? e ? "" : void 0 : (r = i.charCodeAt(a)) < 55296 || r > 56319 || a + 1 === s || (o = i.charCodeAt(a + 1)) < 56320 || o > 57343 ? e ? i.charAt(a) : r : e ? i.slice(a, a + 2) : o - 56320 + (r - 55296 << 10) + 65536
        }
    }, Yt = {
        codeAt: zt(!1),
        charAt: zt(!0)
    }, Wt = !o((function() {
        function e() {}
        return e.prototype.constructor = null,
        Object.getPrototypeOf(new e) !== e.prototype
    }
    )), Jt = K("IE_PROTO"), Xt = Object.prototype, Qt = Wt ? Object.getPrototypeOf : function(e) {
        return e = Ne(e),
        _(e, Jt) ? e[Jt] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? Xt : null
    }
    , Zt = Fe("iterator"), en = !1;
    [].keys && ("next"in ($t = [].keys()) ? (Ht = Qt(Qt($t))) !== Object.prototype && (Kt = Ht) : en = !0),
    null == Kt && (Kt = {}),
    _(Kt, Zt) || R(Kt, Zt, (function() {
        return this
    }
    ));
    var tn = {
        IteratorPrototype: Kt,
        BUGGY_SAFARI_ITERATORS: en
    }
      , nn = O.f
      , rn = Fe("toStringTag")
      , on = function(e, t, n) {
        e && !_(e = n ? e : e.prototype, rn) && nn(e, rn, {
            configurable: !0,
            value: t
        })
    }
      , an = tn.IteratorPrototype
      , sn = function() {
        return this
    }
      , un = function(e, t, n) {
        var r = t + " Iterator";
        return e.prototype = Vt(an, {
            next: c(1, n)
        }),
        on(e, r, !1),
        mt[r] = sn,
        e
    }
      , cn = Object.setPrototypeOf || ("__proto__"in {} ? function() {
        var e, t = !1, n = {};
        try {
            (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []),
            t = n instanceof Array
        } catch (p_) {}
        return function(n, r) {
            return D(n),
            function(e) {
                if (!m(e) && null !== e)
                    throw TypeError("Can't set " + String(e) + " as a prototype")
            }(r),
            t ? e.call(n, r) : n.__proto__ = r,
            n
        }
    }() : void 0)
      , ln = tn.IteratorPrototype
      , pn = tn.BUGGY_SAFARI_ITERATORS
      , fn = Fe("iterator")
      , hn = function() {
        return this
    }
      , dn = function(e, t, n, r, o, i, a) {
        un(n, t, r);
        var s, u, c, l = function(e) {
            if (e === o && g)
                return g;
            if (!pn && e in h)
                return h[e];
            switch (e) {
            case "keys":
            case "values":
            case "entries":
                return function() {
                    return new n(this,e)
                }
            }
            return function() {
                return new n(this)
            }
        }, p = t + " Iterator", f = !1, h = e.prototype, d = h[fn] || h["@@iterator"] || o && h[o], g = !pn && d || l(o), m = "Array" == t && h.entries || d;
        if (m && (s = Qt(m.call(new e)),
        ln !== Object.prototype && s.next && (Qt(s) !== ln && (cn ? cn(s, ln) : "function" != typeof s[fn] && R(s, fn, hn)),
        on(s, p, !0))),
        "values" == o && d && "values" !== d.name && (f = !0,
        g = function() {
            return d.call(this)
        }
        ),
        h[fn] !== g && R(h, fn, g),
        mt[t] = g,
        o)
            if (u = {
                values: l("values"),
                keys: i ? g : l("keys"),
                entries: l("entries")
            },
            a)
                for (c in u)
                    (pn || f || !(c in h)) && te(h, c, u[c]);
            else
                we({
                    target: t,
                    proto: !0,
                    forced: pn || f
                }, u);
        return u
    }
      , gn = Yt.charAt
      , mn = ee.set
      , vn = ee.getterFor("String Iterator");
    dn(String, "String", (function(e) {
        mn(this, {
            type: "String Iterator",
            string: String(e),
            index: 0
        })
    }
    ), (function() {
        var e, t = vn(this), n = t.string, r = t.index;
        return r >= n.length ? {
            value: void 0,
            done: !0
        } : (e = gn(n, r),
        t.index += e.length,
        {
            value: e,
            done: !1
        })
    }
    ));
    var yn = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
    };
    for (var _n in yn) {
        var In = r[_n]
          , Mn = In && In.prototype;
        if (Mn && Mn.forEach !== dt)
            try {
                R(Mn, "forEach", dt)
            } catch (p_) {
                Mn.forEach = dt
            }
    }
    var Cn = {
        SDK_READY: "sdkStateReady",
        SDK_NOT_READY: "sdkStateNotReady",
        SDK_DESTROY: "sdkDestroy",
        MESSAGE_RECEIVED: "onMessageReceived",
        MESSAGE_REVOKED: "onMessageRevoked",
        MESSAGE_READ_BY_PEER: "onMessageReadByPeer",
        CONVERSATION_LIST_UPDATED: "onConversationListUpdated",
        GROUP_LIST_UPDATED: "onGroupListUpdated",
        GROUP_SYSTEM_NOTICE_RECEIVED: "receiveGroupSystemNotice",
        PROFILE_UPDATED: "onProfileUpdated",
        BLACKLIST_UPDATED: "blacklistUpdated",
        KICKED_OUT: "kickedOut",
        ERROR: "error",
        NET_STATE_CHANGE: "netStateChange",
        SDK_RELOAD: "sdkReload"
    }
      , En = {
        MSG_TEXT: "TIMTextElem",
        MSG_IMAGE: "TIMImageElem",
        MSG_SOUND: "TIMSoundElem",
        MSG_AUDIO: "TIMSoundElem",
        MSG_FILE: "TIMFileElem",
        MSG_FACE: "TIMFaceElem",
        MSG_VIDEO: "TIMVideoFileElem",
        MSG_GEO: "TIMLocationElem",
        MSG_GRP_TIP: "TIMGroupTipElem",
        MSG_GRP_SYS_NOTICE: "TIMGroupSystemNoticeElem",
        MSG_CUSTOM: "TIMCustomElem",
        MSG_PRIORITY_HIGH: "High",
        MSG_PRIORITY_NORMAL: "Normal",
        MSG_PRIORITY_LOW: "Low",
        MSG_PRIORITY_LOWEST: "Lowest",
        CONV_C2C: "C2C",
        CONV_GROUP: "GROUP",
        CONV_SYSTEM: "@TIM#SYSTEM",
        GRP_PRIVATE: "Private",
        GRP_WORK: "Private",
        GRP_PUBLIC: "Public",
        GRP_CHATROOM: "ChatRoom",
        GRP_MEETING: "ChatRoom",
        GRP_AVCHATROOM: "AVChatRoom",
        GRP_MBR_ROLE_OWNER: "Owner",
        GRP_MBR_ROLE_ADMIN: "Admin",
        GRP_MBR_ROLE_MEMBER: "Member",
        GRP_TIP_MBR_JOIN: 1,
        GRP_TIP_MBR_QUIT: 2,
        GRP_TIP_MBR_KICKED_OUT: 3,
        GRP_TIP_MBR_SET_ADMIN: 4,
        GRP_TIP_MBR_CANCELED_ADMIN: 5,
        GRP_TIP_GRP_PROFILE_UPDATED: 6,
        GRP_TIP_MBR_PROFILE_UPDATED: 7,
        MSG_REMIND_ACPT_AND_NOTE: "AcceptAndNotify",
        MSG_REMIND_ACPT_NOT_NOTE: "AcceptNotNotify",
        MSG_REMIND_DISCARD: "Discard",
        GENDER_UNKNOWN: "Gender_Type_Unknown",
        GENDER_FEMALE: "Gender_Type_Female",
        GENDER_MALE: "Gender_Type_Male",
        KICKED_OUT_MULT_ACCOUNT: "multipleAccount",
        KICKED_OUT_MULT_DEVICE: "multipleDevice",
        KICKED_OUT_USERSIG_EXPIRED: "userSigExpired",
        ALLOW_TYPE_ALLOW_ANY: "AllowType_Type_AllowAny",
        ALLOW_TYPE_NEED_CONFIRM: "AllowType_Type_NeedConfirm",
        ALLOW_TYPE_DENY_ANY: "AllowType_Type_DenyAny",
        FORBID_TYPE_NONE: "AdminForbid_Type_None",
        FORBID_TYPE_SEND_OUT: "AdminForbid_Type_SendOut",
        JOIN_OPTIONS_FREE_ACCESS: "FreeAccess",
        JOIN_OPTIONS_NEED_PERMISSION: "NeedPermission",
        JOIN_OPTIONS_DISABLE_APPLY: "DisableApply",
        JOIN_STATUS_SUCCESS: "JoinedSuccess",
        JOIN_STATUS_ALREADY_IN_GROUP: "AlreadyInGroup",
        JOIN_STATUS_WAIT_APPROVAL: "WaitAdminApproval",
        GRP_PROFILE_OWNER_ID: "ownerID",
        GRP_PROFILE_CREATE_TIME: "createTime",
        GRP_PROFILE_LAST_INFO_TIME: "lastInfoTime",
        GRP_PROFILE_MEMBER_NUM: "memberNum",
        GRP_PROFILE_MAX_MEMBER_NUM: "maxMemberNum",
        GRP_PROFILE_JOIN_OPTION: "joinOption",
        GRP_PROFILE_INTRODUCTION: "introduction",
        GRP_PROFILE_NOTIFICATION: "notification",
        GRP_PROFILE_MUTE_ALL_MBRS: "muteAllMembers",
        NET_STATE_CONNECTED: "connected",
        NET_STATE_CONNECTING: "connecting",
        NET_STATE_DISCONNECTED: "disconnected"
    }
      , Sn = it.map
      , Tn = We("map")
      , Dn = lt("map");
    we({
        target: "Array",
        proto: !0,
        forced: !Tn || !Dn
    }, {
        map: function(e) {
            return Sn(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var kn = [].slice
      , On = {}
      , Rn = function(e, t, n) {
        if (!(t in On)) {
            for (var r = [], o = 0; o < t; o++)
                r[o] = "a[" + o + "]";
            On[t] = Function("C,a", "return new C(" + r.join(",") + ")")
        }
        return On[t](e, n)
    }
      , An = Function.bind || function(e) {
        var t = et(this)
          , n = kn.call(arguments, 1)
          , r = function() {
            var o = n.concat(kn.call(arguments));
            return this instanceof r ? Rn(t, o.length, o) : t.apply(e, o)
        };
        return m(t.prototype) && (r.prototype = t.prototype),
        r
    }
    ;
    function wn(e) {
        return (wn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    function Ln(e, t, n, r, o, i, a) {
        try {
            var s = e[i](a)
              , u = s.value
        } catch (p_) {
            return void n(p_)
        }
        s.done ? t(u) : Promise.resolve(u).then(r, o)
    }
    function Nn(e) {
        return function() {
            var t = this
              , n = arguments;
            return new Promise((function(r, o) {
                var i = e.apply(t, n);
                function a(e) {
                    Ln(i, r, o, a, s, "next", e)
                }
                function s(e) {
                    Ln(i, r, o, a, s, "throw", e)
                }
                a(void 0)
            }
            ))
        }
    }
    function bn(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function Pn(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
    }
    function Gn(e, t, n) {
        return t && Pn(e.prototype, t),
        n && Pn(e, n),
        e
    }
    function Un(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function xn(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function qn(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? xn(Object(n), !0).forEach((function(t) {
                Un(e, t, n[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : xn(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }
            ))
        }
        return e
    }
    function Fn(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }),
        t && Vn(e, t)
    }
    function jn(e) {
        return (jn = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }
        )(e)
    }
    function Vn(e, t) {
        return (Vn = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t,
            e
        }
        )(e, t)
    }
    function Bn() {
        if ("undefined" == typeof Reflect || !Reflect.construct)
            return !1;
        if (Reflect.construct.sham)
            return !1;
        if ("function" == typeof Proxy)
            return !0;
        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
            ))),
            !0
        } catch (e) {
            return !1
        }
    }
    function Kn(e, t, n) {
        return (Kn = Bn() ? Reflect.construct : function(e, t, n) {
            var r = [null];
            r.push.apply(r, t);
            var o = new (Function.bind.apply(e, r));
            return n && Vn(o, n.prototype),
            o
        }
        ).apply(null, arguments)
    }
    function Hn(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return (Hn = function(e) {
            if (null === e || (n = e,
            -1 === Function.toString.call(n).indexOf("[native code]")))
                return e;
            var n;
            if ("function" != typeof e)
                throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== t) {
                if (t.has(e))
                    return t.get(e);
                t.set(e, r)
            }
            function r() {
                return Kn(e, arguments, jn(this).constructor)
            }
            return r.prototype = Object.create(e.prototype, {
                constructor: {
                    value: r,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            Vn(r, e)
        }
        )(e)
    }
    function $n(e, t) {
        if (null == e)
            return {};
        var n, r, o = function(e, t) {
            if (null == e)
                return {};
            var n, r, o = {}, i = Object.keys(e);
            for (r = 0; r < i.length; r++)
                n = i[r],
                t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++)
                n = i[r],
                t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
        }
        return o
    }
    function zn(e) {
        if (void 0 === e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    function Yn(e, t) {
        return !t || "object" != typeof t && "function" != typeof t ? zn(e) : t
    }
    function Wn(e) {
        var t = Bn();
        return function() {
            var n, r = jn(e);
            if (t) {
                var o = jn(this).constructor;
                n = Reflect.construct(r, arguments, o)
            } else
                n = r.apply(this, arguments);
            return Yn(this, n)
        }
    }
    function Jn(e, t) {
        return function(e) {
            if (Array.isArray(e))
                return e
        }(e) || function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
                return;
            var n = []
              , r = !0
              , o = !1
              , i = void 0;
            try {
                for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value),
                !t || n.length !== t); r = !0)
                    ;
            } catch (u) {
                o = !0,
                i = u
            } finally {
                try {
                    r || null == s.return || s.return()
                } finally {
                    if (o)
                        throw i
                }
            }
            return n
        }(e, t) || Qn(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function Xn(e) {
        return function(e) {
            if (Array.isArray(e))
                return Zn(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
                return Array.from(e)
        }(e) || Qn(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function Qn(e, t) {
        if (e) {
            if ("string" == typeof e)
                return Zn(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Zn(e, t) : void 0
        }
    }
    function Zn(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++)
            r[n] = e[n];
        return r
    }
    function er(e, t) {
        var n;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
            if (Array.isArray(e) || (n = Qn(e)) || t && e && "number" == typeof e.length) {
                n && (e = n);
                var r = 0
                  , o = function() {};
                return {
                    s: o,
                    n: function() {
                        return r >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[r++]
                        }
                    },
                    e: function(e) {
                        throw e
                    },
                    f: o
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var i, a = !0, s = !1;
        return {
            s: function() {
                n = e[Symbol.iterator]()
            },
            n: function() {
                var e = n.next();
                return a = e.done,
                e
            },
            e: function(e) {
                s = !0,
                i = e
            },
            f: function() {
                try {
                    a || null == n.return || n.return()
                } finally {
                    if (s)
                        throw i
                }
            }
        }
    }
    we({
        target: "Function",
        proto: !0
    }, {
        bind: An
    });
    var tr = function() {
        function e() {
            bn(this, e),
            this.cache = [],
            this.options = null
        }
        return Gn(e, [{
            key: "use",
            value: function(e) {
                if ("function" != typeof e)
                    throw "middleware must be a function";
                return this.cache.push(e),
                this
            }
        }, {
            key: "next",
            value: function(e) {
                if (this.middlewares && this.middlewares.length > 0)
                    return this.middlewares.shift().call(this, this.options, this.next.bind(this))
            }
        }, {
            key: "run",
            value: function(e) {
                return this.middlewares = this.cache.map((function(e) {
                    return e
                }
                )),
                this.options = e,
                this.next()
            }
        }]),
        e
    }()
      , nr = O.f
      , rr = Function.prototype
      , or = rr.toString
      , ir = /^\s*function ([^ (]*)/;
    i && !("name"in rr) && nr(rr, "name", {
        configurable: !0,
        get: function() {
            try {
                return or.call(this).match(ir)[1]
            } catch (p_) {
                return ""
            }
        }
    });
    var ar = t((function(t, n) {
        var r, o, i, a, s, u, c, l, p, f, h, d, g, m, v, y, _, I;
        t.exports = (r = "function" == typeof Promise,
        o = "object" == typeof self ? self : e,
        i = "undefined" != typeof Symbol,
        a = "undefined" != typeof Map,
        s = "undefined" != typeof Set,
        u = "undefined" != typeof WeakMap,
        c = "undefined" != typeof WeakSet,
        l = "undefined" != typeof DataView,
        p = i && void 0 !== Symbol.iterator,
        f = i && void 0 !== Symbol.toStringTag,
        h = s && "function" == typeof Set.prototype.entries,
        d = a && "function" == typeof Map.prototype.entries,
        g = h && Object.getPrototypeOf((new Set).entries()),
        m = d && Object.getPrototypeOf((new Map).entries()),
        v = p && "function" == typeof Array.prototype[Symbol.iterator],
        y = v && Object.getPrototypeOf([][Symbol.iterator]()),
        _ = p && "function" == typeof String.prototype[Symbol.iterator],
        I = _ && Object.getPrototypeOf(""[Symbol.iterator]()),
        function(e) {
            var t = typeof e;
            if ("object" !== t)
                return t;
            if (null === e)
                return "null";
            if (e === o)
                return "global";
            if (Array.isArray(e) && (!1 === f || !(Symbol.toStringTag in e)))
                return "Array";
            if ("object" == typeof window && null !== window) {
                if ("object" == typeof window.location && e === window.location)
                    return "Location";
                if ("object" == typeof window.document && e === window.document)
                    return "Document";
                if ("object" == typeof window.navigator) {
                    if ("object" == typeof window.navigator.mimeTypes && e === window.navigator.mimeTypes)
                        return "MimeTypeArray";
                    if ("object" == typeof window.navigator.plugins && e === window.navigator.plugins)
                        return "PluginArray"
                }
                if (("function" == typeof window.HTMLElement || "object" == typeof window.HTMLElement) && e instanceof window.HTMLElement) {
                    if ("BLOCKQUOTE" === e.tagName)
                        return "HTMLQuoteElement";
                    if ("TD" === e.tagName)
                        return "HTMLTableDataCellElement";
                    if ("TH" === e.tagName)
                        return "HTMLTableHeaderCellElement"
                }
            }
            var n = f && e[Symbol.toStringTag];
            if ("string" == typeof n)
                return n;
            var i = Object.getPrototypeOf(e);
            return i === RegExp.prototype ? "RegExp" : i === Date.prototype ? "Date" : r && i === Promise.prototype ? "Promise" : s && i === Set.prototype ? "Set" : a && i === Map.prototype ? "Map" : c && i === WeakSet.prototype ? "WeakSet" : u && i === WeakMap.prototype ? "WeakMap" : l && i === DataView.prototype ? "DataView" : a && i === m ? "Map Iterator" : s && i === g ? "Set Iterator" : v && i === y ? "Array Iterator" : _ && i === I ? "String Iterator" : null === i ? "Object" : Object.prototype.toString.call(e).slice(8, -1)
        }
        )
    }
    ));
    we({
        target: "Array",
        stat: !0
    }, {
        isArray: Le
    });
    var sr = Fe("unscopables")
      , ur = Array.prototype;
    null == ur[sr] && O.f(ur, sr, {
        configurable: !0,
        value: Vt(null)
    });
    var cr = function(e) {
        ur[sr][e] = !0
    }
      , lr = it.find
      , pr = !0
      , fr = lt("find");
    "find"in [] && Array(1).find((function() {
        pr = !1
    }
    )),
    we({
        target: "Array",
        proto: !0,
        forced: pr || !fr
    }, {
        find: function(e) {
            return lr(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }),
    cr("find");
    var hr = de.includes
      , dr = lt("indexOf", {
        ACCESSORS: !0,
        1: 0
    });
    we({
        target: "Array",
        proto: !0,
        forced: !dr
    }, {
        includes: function(e) {
            return hr(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }),
    cr("includes");
    var gr = de.indexOf
      , mr = [].indexOf
      , vr = !!mr && 1 / [1].indexOf(1, -0) < 0
      , yr = at("indexOf")
      , _r = lt("indexOf", {
        ACCESSORS: !0,
        1: 0
    });
    we({
        target: "Array",
        proto: !0,
        forced: vr || !yr || !_r
    }, {
        indexOf: function(e) {
            return vr ? mr.apply(this, arguments) || 0 : gr(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var Ir = ee.set
      , Mr = ee.getterFor("Array Iterator")
      , Cr = dn(Array, "Array", (function(e, t) {
        Ir(this, {
            type: "Array Iterator",
            target: g(e),
            index: 0,
            kind: t
        })
    }
    ), (function() {
        var e = Mr(this)
          , t = e.target
          , n = e.kind
          , r = e.index++;
        return !t || r >= t.length ? (e.target = void 0,
        {
            value: void 0,
            done: !0
        }) : "keys" == n ? {
            value: r,
            done: !1
        } : "values" == n ? {
            value: t[r],
            done: !1
        } : {
            value: [r, t[r]],
            done: !1
        }
    }
    ), "values");
    mt.Arguments = mt.Array,
    cr("keys"),
    cr("values"),
    cr("entries");
    var Er = [].join
      , Sr = h != Object
      , Tr = at("join", ",");
    we({
        target: "Array",
        proto: !0,
        forced: Sr || !Tr
    }, {
        join: function(e) {
            return Er.call(g(this), void 0 === e ? "," : e)
        }
    });
    var Dr = We("slice")
      , kr = lt("slice", {
        ACCESSORS: !0,
        0: 0,
        1: 2
    })
      , Or = Fe("species")
      , Rr = [].slice
      , Ar = Math.max;
    we({
        target: "Array",
        proto: !0,
        forced: !Dr || !kr
    }, {
        slice: function(e, t) {
            var n, r, o, i = g(this), a = ce(i.length), s = fe(e, a), u = fe(void 0 === t ? a : t, a);
            if (Le(i) && ("function" != typeof (n = i.constructor) || n !== Array && !Le(n.prototype) ? m(n) && null === (n = n[Or]) && (n = void 0) : n = void 0,
            n === Array || void 0 === n))
                return Rr.call(i, s, u);
            for (r = new (void 0 === n ? Array : n)(Ar(u - s, 0)),
            o = 0; s < u; s++,
            o++)
                s in i && be(r, o, i[s]);
            return r.length = o,
            r
        }
    }),
    we({
        target: "Date",
        stat: !0
    }, {
        now: function() {
            return (new Date).getTime()
        }
    });
    var wr = "".repeat || function(e) {
        var t = String(d(this))
          , n = ""
          , r = se(e);
        if (r < 0 || Infinity == r)
            throw RangeError("Wrong number of repetitions");
        for (; r > 0; (r >>>= 1) && (t += t))
            1 & r && (n += t);
        return n
    }
      , Lr = Math.ceil
      , Nr = function(e) {
        return function(t, n, r) {
            var o, i, a = String(d(t)), s = a.length, u = void 0 === r ? " " : String(r), c = ce(n);
            return c <= s || "" == u ? a : (o = c - s,
            (i = wr.call(u, Lr(o / u.length))).length > o && (i = i.slice(0, o)),
            e ? a + i : i + a)
        }
    }
      , br = {
        start: Nr(!1),
        end: Nr(!0)
    }.start
      , Pr = Math.abs
      , Gr = Date.prototype
      , Ur = Gr.getTime
      , xr = Gr.toISOString
      , qr = o((function() {
        return "0385-07-25T07:06:39.999Z" != xr.call(new Date(-50000000000001))
    }
    )) || !o((function() {
        xr.call(new Date(NaN))
    }
    )) ? function() {
        if (!isFinite(Ur.call(this)))
            throw RangeError("Invalid time value");
        var e = this.getUTCFullYear()
          , t = this.getUTCMilliseconds()
          , n = e < 0 ? "-" : e > 9999 ? "+" : "";
        return n + br(Pr(e), n ? 6 : 4, 0) + "-" + br(this.getUTCMonth() + 1, 2, 0) + "-" + br(this.getUTCDate(), 2, 0) + "T" + br(this.getUTCHours(), 2, 0) + ":" + br(this.getUTCMinutes(), 2, 0) + ":" + br(this.getUTCSeconds(), 2, 0) + "." + br(t, 3, 0) + "Z"
    }
    : xr;
    we({
        target: "Date",
        proto: !0,
        forced: Date.prototype.toISOString !== qr
    }, {
        toISOString: qr
    });
    var Fr = Date.prototype
      , jr = Fr.toString
      , Vr = Fr.getTime;
    new Date(NaN) + "" != "Invalid Date" && te(Fr, "toString", (function() {
        var e = Vr.call(this);
        return e == e ? jr.call(this) : "Invalid Date"
    }
    ));
    var Br = function(e, t, n) {
        var r, o;
        return cn && "function" == typeof (r = t.constructor) && r !== n && m(o = r.prototype) && o !== n.prototype && cn(e, o),
        e
    }
      , Kr = "\t\n\v\f\r                　\u2028\u2029\ufeff"
      , Hr = "[" + Kr + "]"
      , $r = RegExp("^" + Hr + Hr + "*")
      , zr = RegExp(Hr + Hr + "*$")
      , Yr = function(e) {
        return function(t) {
            var n = String(d(t));
            return 1 & e && (n = n.replace($r, "")),
            2 & e && (n = n.replace(zr, "")),
            n
        }
    }
      , Wr = {
        start: Yr(1),
        end: Yr(2),
        trim: Yr(3)
    }
      , Jr = _e.f
      , Xr = T.f
      , Qr = O.f
      , Zr = Wr.trim
      , eo = r.Number
      , to = eo.prototype
      , no = "Number" == p(Vt(to))
      , ro = function(e) {
        var t, n, r, o, i, a, s, u, c = v(e, !1);
        if ("string" == typeof c && c.length > 2)
            if (43 === (t = (c = Zr(c)).charCodeAt(0)) || 45 === t) {
                if (88 === (n = c.charCodeAt(2)) || 120 === n)
                    return NaN
            } else if (48 === t) {
                switch (c.charCodeAt(1)) {
                case 66:
                case 98:
                    r = 2,
                    o = 49;
                    break;
                case 79:
                case 111:
                    r = 8,
                    o = 55;
                    break;
                default:
                    return +c
                }
                for (a = (i = c.slice(2)).length,
                s = 0; s < a; s++)
                    if ((u = i.charCodeAt(s)) < 48 || u > o)
                        return NaN;
                return parseInt(i, r)
            }
        return +c
    };
    if (Re("Number", !eo(" 0o1") || !eo("0b1") || eo("+0x1"))) {
        for (var oo, io = function(e) {
            var t = arguments.length < 1 ? 0 : e
              , n = this;
            return n instanceof io && (no ? o((function() {
                to.valueOf.call(n)
            }
            )) : "Number" != p(n)) ? Br(new eo(ro(t)), n, io) : ro(t)
        }, ao = i ? Jr(eo) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), so = 0; ao.length > so; so++)
            _(eo, oo = ao[so]) && !_(io, oo) && Qr(io, oo, Xr(eo, oo));
        io.prototype = to,
        to.constructor = io,
        te(r, "Number", io)
    }
    var uo = _e.f
      , co = {}.toString
      , lo = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : []
      , po = {
        f: function(e) {
            return lo && "[object Window]" == co.call(e) ? function(e) {
                try {
                    return uo(e)
                } catch (p_) {
                    return lo.slice()
                }
            }(e) : uo(g(e))
        }
    }
      , fo = po.f
      , ho = o((function() {
        return !Object.getOwnPropertyNames(1)
    }
    ));
    we({
        target: "Object",
        stat: !0,
        forced: ho
    }, {
        getOwnPropertyNames: fo
    });
    var go = o((function() {
        Qt(1)
    }
    ));
    we({
        target: "Object",
        stat: !0,
        forced: go,
        sham: !Wt
    }, {
        getPrototypeOf: function(e) {
            return Qt(Ne(e))
        }
    });
    var mo = Mt ? {}.toString : function() {
        return "[object " + St(this) + "]"
    }
    ;
    Mt || te(Object.prototype, "toString", mo, {
        unsafe: !0
    });
    var vo = Wr.trim
      , yo = r.parseInt
      , _o = /^[+-]?0[Xx]/
      , Io = 8 !== yo(Kr + "08") || 22 !== yo(Kr + "0x16") ? function(e, t) {
        var n = vo(String(e));
        return yo(n, t >>> 0 || (_o.test(n) ? 16 : 10))
    }
    : yo;
    we({
        global: !0,
        forced: parseInt != Io
    }, {
        parseInt: Io
    });
    var Mo, Co, Eo, So = r.Promise, To = function(e, t, n) {
        for (var r in t)
            te(e, r, t[r], n);
        return e
    }, Do = Fe("species"), ko = function(e) {
        var t = oe(e)
          , n = O.f;
        i && t && !t[Do] && n(t, Do, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }, Oo = function(e, t, n) {
        if (!(e instanceof t))
            throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
        return e
    }, Ro = t((function(e) {
        var t = function(e, t) {
            this.stopped = e,
            this.result = t
        };
        (e.exports = function(e, n, r, o, i) {
            var a, s, u, c, l, p, f, h = nt(n, r, o ? 2 : 1);
            if (i)
                a = e;
            else {
                if ("function" != typeof (s = Dt(e)))
                    throw TypeError("Target is not iterable");
                if (_t(s)) {
                    for (u = 0,
                    c = ce(e.length); c > u; u++)
                        if ((l = o ? h(D(f = e[u])[0], f[1]) : h(e[u])) && l instanceof t)
                            return l;
                    return new t(!1)
                }
                a = s.call(e)
            }
            for (p = a.next; !(f = p.call(a)).done; )
                if ("object" == typeof (l = gt(a, h, f.value, o)) && l && l instanceof t)
                    return l;
            return new t(!1)
        }
        ).stop = function(e) {
            return new t(!0,e)
        }
    }
    )), Ao = Fe("species"), wo = function(e, t) {
        var n, r = D(e).constructor;
        return void 0 === r || null == (n = D(r)[Ao]) ? t : et(n)
    }, Lo = /(iphone|ipod|ipad).*applewebkit/i.test(Be), No = r.location, bo = r.setImmediate, Po = r.clearImmediate, Go = r.process, Uo = r.MessageChannel, xo = r.Dispatch, qo = 0, Fo = {}, jo = function(e) {
        if (Fo.hasOwnProperty(e)) {
            var t = Fo[e];
            delete Fo[e],
            t()
        }
    }, Vo = function(e) {
        return function() {
            jo(e)
        }
    }, Bo = function(e) {
        jo(e.data)
    }, Ko = function(e) {
        r.postMessage(e + "", No.protocol + "//" + No.host)
    };
    bo && Po || (bo = function(e) {
        for (var t = [], n = 1; arguments.length > n; )
            t.push(arguments[n++]);
        return Fo[++qo] = function() {
            ("function" == typeof e ? e : Function(e)).apply(void 0, t)
        }
        ,
        Mo(qo),
        qo
    }
    ,
    Po = function(e) {
        delete Fo[e]
    }
    ,
    "process" == p(Go) ? Mo = function(e) {
        Go.nextTick(Vo(e))
    }
    : xo && xo.now ? Mo = function(e) {
        xo.now(Vo(e))
    }
    : Uo && !Lo ? (Eo = (Co = new Uo).port2,
    Co.port1.onmessage = Bo,
    Mo = nt(Eo.postMessage, Eo, 1)) : !r.addEventListener || "function" != typeof postMessage || r.importScripts || o(Ko) || "file:" === No.protocol ? Mo = "onreadystatechange"in C("script") ? function(e) {
        Ut.appendChild(C("script")).onreadystatechange = function() {
            Ut.removeChild(this),
            jo(e)
        }
    }
    : function(e) {
        setTimeout(Vo(e), 0)
    }
    : (Mo = Ko,
    r.addEventListener("message", Bo, !1)));
    var Ho, $o, zo, Yo, Wo, Jo, Xo, Qo, Zo = {
        set: bo,
        clear: Po
    }, ei = T.f, ti = Zo.set, ni = r.MutationObserver || r.WebKitMutationObserver, ri = r.process, oi = r.Promise, ii = "process" == p(ri), ai = ei(r, "queueMicrotask"), si = ai && ai.value;
    si || (Ho = function() {
        var e, t;
        for (ii && (e = ri.domain) && e.exit(); $o; ) {
            t = $o.fn,
            $o = $o.next;
            try {
                t()
            } catch (p_) {
                throw $o ? Yo() : zo = void 0,
                p_
            }
        }
        zo = void 0,
        e && e.enter()
    }
    ,
    ii ? Yo = function() {
        ri.nextTick(Ho)
    }
    : ni && !Lo ? (Wo = !0,
    Jo = document.createTextNode(""),
    new ni(Ho).observe(Jo, {
        characterData: !0
    }),
    Yo = function() {
        Jo.data = Wo = !Wo
    }
    ) : oi && oi.resolve ? (Xo = oi.resolve(void 0),
    Qo = Xo.then,
    Yo = function() {
        Qo.call(Xo, Ho)
    }
    ) : Yo = function() {
        ti.call(r, Ho)
    }
    );
    var ui, ci, li, pi, fi = si || function(e) {
        var t = {
            fn: e,
            next: void 0
        };
        zo && (zo.next = t),
        $o || ($o = t,
        Yo()),
        zo = t
    }
    , hi = function(e) {
        var t, n;
        this.promise = new e((function(e, r) {
            if (void 0 !== t || void 0 !== n)
                throw TypeError("Bad Promise constructor");
            t = e,
            n = r
        }
        )),
        this.resolve = et(t),
        this.reject = et(n)
    }, di = {
        f: function(e) {
            return new hi(e)
        }
    }, gi = function(e, t) {
        if (D(e),
        m(t) && t.constructor === e)
            return t;
        var n = di.f(e);
        return (0,
        n.resolve)(t),
        n.promise
    }, mi = function(e) {
        try {
            return {
                error: !1,
                value: e()
            }
        } catch (p_) {
            return {
                error: !0,
                value: p_
            }
        }
    }, vi = Zo.set, yi = Fe("species"), _i = "Promise", Ii = ee.get, Mi = ee.set, Ci = ee.getterFor(_i), Ei = So, Si = r.TypeError, Ti = r.document, Di = r.process, ki = oe("fetch"), Oi = di.f, Ri = Oi, Ai = "process" == p(Di), wi = !!(Ti && Ti.createEvent && r.dispatchEvent), Li = Re(_i, (function() {
        if (!(G(Ei) !== String(Ei))) {
            if (66 === ze)
                return !0;
            if (!Ai && "function" != typeof PromiseRejectionEvent)
                return !0
        }
        if (ze >= 51 && /native code/.test(Ei))
            return !1;
        var e = Ei.resolve(1)
          , t = function(e) {
            e((function() {}
            ), (function() {}
            ))
        };
        return (e.constructor = {})[yi] = t,
        !(e.then((function() {}
        ))instanceof t)
    }
    )), Ni = Li || !Lt((function(e) {
        Ei.all(e).catch((function() {}
        ))
    }
    )), bi = function(e) {
        var t;
        return !(!m(e) || "function" != typeof (t = e.then)) && t
    }, Pi = function(e, t, n) {
        if (!t.notified) {
            t.notified = !0;
            var r = t.reactions;
            fi((function() {
                for (var o = t.value, i = 1 == t.state, a = 0; r.length > a; ) {
                    var s, u, c, l = r[a++], p = i ? l.ok : l.fail, f = l.resolve, h = l.reject, d = l.domain;
                    try {
                        p ? (i || (2 === t.rejection && qi(e, t),
                        t.rejection = 1),
                        !0 === p ? s = o : (d && d.enter(),
                        s = p(o),
                        d && (d.exit(),
                        c = !0)),
                        s === l.promise ? h(Si("Promise-chain cycle")) : (u = bi(s)) ? u.call(s, f, h) : f(s)) : h(o)
                    } catch (p_) {
                        d && !c && d.exit(),
                        h(p_)
                    }
                }
                t.reactions = [],
                t.notified = !1,
                n && !t.rejection && Ui(e, t)
            }
            ))
        }
    }, Gi = function(e, t, n) {
        var o, i;
        wi ? ((o = Ti.createEvent("Event")).promise = t,
        o.reason = n,
        o.initEvent(e, !1, !0),
        r.dispatchEvent(o)) : o = {
            promise: t,
            reason: n
        },
        (i = r["on" + e]) ? i(o) : "unhandledrejection" === e && function(e, t) {
            var n = r.console;
            n && n.error && (1 === arguments.length ? n.error(e) : n.error(e, t))
        }("Unhandled promise rejection", n)
    }, Ui = function(e, t) {
        vi.call(r, (function() {
            var n, r = t.value;
            if (xi(t) && (n = mi((function() {
                Ai ? Di.emit("unhandledRejection", r, e) : Gi("unhandledrejection", e, r)
            }
            )),
            t.rejection = Ai || xi(t) ? 2 : 1,
            n.error))
                throw n.value
        }
        ))
    }, xi = function(e) {
        return 1 !== e.rejection && !e.parent
    }, qi = function(e, t) {
        vi.call(r, (function() {
            Ai ? Di.emit("rejectionHandled", e) : Gi("rejectionhandled", e, t.value)
        }
        ))
    }, Fi = function(e, t, n, r) {
        return function(o) {
            e(t, n, o, r)
        }
    }, ji = function(e, t, n, r) {
        t.done || (t.done = !0,
        r && (t = r),
        t.value = n,
        t.state = 2,
        Pi(e, t, !0))
    }, Vi = function(e, t, n, r) {
        if (!t.done) {
            t.done = !0,
            r && (t = r);
            try {
                if (e === n)
                    throw Si("Promise can't be resolved itself");
                var o = bi(n);
                o ? fi((function() {
                    var r = {
                        done: !1
                    };
                    try {
                        o.call(n, Fi(Vi, e, r, t), Fi(ji, e, r, t))
                    } catch (p_) {
                        ji(e, r, p_, t)
                    }
                }
                )) : (t.value = n,
                t.state = 1,
                Pi(e, t, !1))
            } catch (p_) {
                ji(e, {
                    done: !1
                }, p_, t)
            }
        }
    };
    Li && (Ei = function(e) {
        Oo(this, Ei, _i),
        et(e),
        ui.call(this);
        var t = Ii(this);
        try {
            e(Fi(Vi, this, t), Fi(ji, this, t))
        } catch (p_) {
            ji(this, t, p_)
        }
    }
    ,
    (ui = function(e) {
        Mi(this, {
            type: _i,
            done: !1,
            notified: !1,
            parent: !1,
            reactions: [],
            rejection: !1,
            state: 0,
            value: void 0
        })
    }
    ).prototype = To(Ei.prototype, {
        then: function(e, t) {
            var n = Ci(this)
              , r = Oi(wo(this, Ei));
            return r.ok = "function" != typeof e || e,
            r.fail = "function" == typeof t && t,
            r.domain = Ai ? Di.domain : void 0,
            n.parent = !0,
            n.reactions.push(r),
            0 != n.state && Pi(this, n, !1),
            r.promise
        },
        catch: function(e) {
            return this.then(void 0, e)
        }
    }),
    ci = function() {
        var e = new ui
          , t = Ii(e);
        this.promise = e,
        this.resolve = Fi(Vi, e, t),
        this.reject = Fi(ji, e, t)
    }
    ,
    di.f = Oi = function(e) {
        return e === Ei || e === li ? new ci(e) : Ri(e)
    }
    ,
    "function" == typeof So && (pi = So.prototype.then,
    te(So.prototype, "then", (function(e, t) {
        var n = this;
        return new Ei((function(e, t) {
            pi.call(n, e, t)
        }
        )).then(e, t)
    }
    ), {
        unsafe: !0
    }),
    "function" == typeof ki && we({
        global: !0,
        enumerable: !0,
        forced: !0
    }, {
        fetch: function(e) {
            return gi(Ei, ki.apply(r, arguments))
        }
    }))),
    we({
        global: !0,
        wrap: !0,
        forced: Li
    }, {
        Promise: Ei
    }),
    on(Ei, _i, !1),
    ko(_i),
    li = oe(_i),
    we({
        target: _i,
        stat: !0,
        forced: Li
    }, {
        reject: function(e) {
            var t = Oi(this);
            return t.reject.call(void 0, e),
            t.promise
        }
    }),
    we({
        target: _i,
        stat: !0,
        forced: Li
    }, {
        resolve: function(e) {
            return gi(this, e)
        }
    }),
    we({
        target: _i,
        stat: !0,
        forced: Ni
    }, {
        all: function(e) {
            var t = this
              , n = Oi(t)
              , r = n.resolve
              , o = n.reject
              , i = mi((function() {
                var n = et(t.resolve)
                  , i = []
                  , a = 0
                  , s = 1;
                Ro(e, (function(e) {
                    var u = a++
                      , c = !1;
                    i.push(void 0),
                    s++,
                    n.call(t, e).then((function(e) {
                        c || (c = !0,
                        i[u] = e,
                        --s || r(i))
                    }
                    ), o)
                }
                )),
                --s || r(i)
            }
            ));
            return i.error && o(i.value),
            n.promise
        },
        race: function(e) {
            var t = this
              , n = Oi(t)
              , r = n.reject
              , o = mi((function() {
                var o = et(t.resolve);
                Ro(e, (function(e) {
                    o.call(t, e).then(n.resolve, r)
                }
                ))
            }
            ));
            return o.error && r(o.value),
            n.promise
        }
    });
    var Bi = function() {
        var e = D(this)
          , t = "";
        return e.global && (t += "g"),
        e.ignoreCase && (t += "i"),
        e.multiline && (t += "m"),
        e.dotAll && (t += "s"),
        e.unicode && (t += "u"),
        e.sticky && (t += "y"),
        t
    };
    function Ki(e, t) {
        return RegExp(e, t)
    }
    var Hi, $i, zi = {
        UNSUPPORTED_Y: o((function() {
            var e = Ki("a", "y");
            return e.lastIndex = 2,
            null != e.exec("abcd")
        }
        )),
        BROKEN_CARET: o((function() {
            var e = Ki("^r", "gy");
            return e.lastIndex = 2,
            null != e.exec("str")
        }
        ))
    }, Yi = RegExp.prototype.exec, Wi = String.prototype.replace, Ji = Yi, Xi = (Hi = /a/,
    $i = /b*/g,
    Yi.call(Hi, "a"),
    Yi.call($i, "a"),
    0 !== Hi.lastIndex || 0 !== $i.lastIndex), Qi = zi.UNSUPPORTED_Y || zi.BROKEN_CARET, Zi = void 0 !== /()??/.exec("")[1];
    (Xi || Zi || Qi) && (Ji = function(e) {
        var t, n, r, o, i = this, a = Qi && i.sticky, s = Bi.call(i), u = i.source, c = 0, l = e;
        return a && (-1 === (s = s.replace("y", "")).indexOf("g") && (s += "g"),
        l = String(e).slice(i.lastIndex),
        i.lastIndex > 0 && (!i.multiline || i.multiline && "\n" !== e[i.lastIndex - 1]) && (u = "(?: " + u + ")",
        l = " " + l,
        c++),
        n = new RegExp("^(?:" + u + ")",s)),
        Zi && (n = new RegExp("^" + u + "$(?!\\s)",s)),
        Xi && (t = i.lastIndex),
        r = Yi.call(a ? n : i, l),
        a ? r ? (r.input = r.input.slice(c),
        r[0] = r[0].slice(c),
        r.index = i.lastIndex,
        i.lastIndex += r[0].length) : i.lastIndex = 0 : Xi && r && (i.lastIndex = i.global ? r.index + r[0].length : t),
        Zi && r && r.length > 1 && Wi.call(r[0], n, (function() {
            for (o = 1; o < arguments.length - 2; o++)
                void 0 === arguments[o] && (r[o] = void 0)
        }
        )),
        r
    }
    );
    var ea = Ji;
    we({
        target: "RegExp",
        proto: !0,
        forced: /./.exec !== ea
    }, {
        exec: ea
    });
    var ta = RegExp.prototype
      , na = ta.toString
      , ra = o((function() {
        return "/a/b" != na.call({
            source: "a",
            flags: "b"
        })
    }
    ))
      , oa = "toString" != na.name;
    (ra || oa) && te(RegExp.prototype, "toString", (function() {
        var e = D(this)
          , t = String(e.source)
          , n = e.flags;
        return "/" + t + "/" + String(void 0 === n && e instanceof RegExp && !("flags"in ta) ? Bi.call(e) : n)
    }
    ), {
        unsafe: !0
    });
    var ia = Fe("match")
      , aa = function(e) {
        var t;
        return m(e) && (void 0 !== (t = e[ia]) ? !!t : "RegExp" == p(e))
    }
      , sa = function(e) {
        if (aa(e))
            throw TypeError("The method doesn't accept regular expressions");
        return e
    }
      , ua = Fe("match")
      , ca = function(e) {
        var t = /./;
        try {
            "/./"[e](t)
        } catch (n) {
            try {
                return t[ua] = !1,
                "/./"[e](t)
            } catch (r) {}
        }
        return !1
    };
    we({
        target: "String",
        proto: !0,
        forced: !ca("includes")
    }, {
        includes: function(e) {
            return !!~String(d(this)).indexOf(sa(e), arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var la = Fe("species")
      , pa = !o((function() {
        var e = /./;
        return e.exec = function() {
            var e = [];
            return e.groups = {
                a: "7"
            },
            e
        }
        ,
        "7" !== "".replace(e, "$<a>")
    }
    ))
      , fa = "$0" === "a".replace(/./, "$0")
      , ha = Fe("replace")
      , da = !!/./[ha] && "" === /./[ha]("a", "$0")
      , ga = !o((function() {
        var e = /(?:)/
          , t = e.exec;
        e.exec = function() {
            return t.apply(this, arguments)
        }
        ;
        var n = "ab".split(e);
        return 2 !== n.length || "a" !== n[0] || "b" !== n[1]
    }
    ))
      , ma = function(e, t, n, r) {
        var i = Fe(e)
          , a = !o((function() {
            var t = {};
            return t[i] = function() {
                return 7
            }
            ,
            7 != ""[e](t)
        }
        ))
          , s = a && !o((function() {
            var t = !1
              , n = /a/;
            return "split" === e && ((n = {}).constructor = {},
            n.constructor[la] = function() {
                return n
            }
            ,
            n.flags = "",
            n[i] = /./[i]),
            n.exec = function() {
                return t = !0,
                null
            }
            ,
            n[i](""),
            !t
        }
        ));
        if (!a || !s || "replace" === e && (!pa || !fa || da) || "split" === e && !ga) {
            var u = /./[i]
              , c = n(i, ""[e], (function(e, t, n, r, o) {
                return t.exec === ea ? a && !o ? {
                    done: !0,
                    value: u.call(t, n, r)
                } : {
                    done: !0,
                    value: e.call(n, t, r)
                } : {
                    done: !1
                }
            }
            ), {
                REPLACE_KEEPS_$0: fa,
                REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: da
            })
              , l = c[0]
              , p = c[1];
            te(String.prototype, e, l),
            te(RegExp.prototype, i, 2 == t ? function(e, t) {
                return p.call(e, this, t)
            }
            : function(e) {
                return p.call(e, this)
            }
            )
        }
        r && R(RegExp.prototype[i], "sham", !0)
    }
      , va = Yt.charAt
      , ya = function(e, t, n) {
        return t + (n ? va(e, t).length : 1)
    }
      , _a = function(e, t) {
        var n = e.exec;
        if ("function" == typeof n) {
            var r = n.call(e, t);
            if ("object" != typeof r)
                throw TypeError("RegExp exec method returned something other than an Object or null");
            return r
        }
        if ("RegExp" !== p(e))
            throw TypeError("RegExp#exec called on incompatible receiver");
        return ea.call(e, t)
    };
    ma("match", 1, (function(e, t, n) {
        return [function(t) {
            var n = d(this)
              , r = null == t ? void 0 : t[e];
            return void 0 !== r ? r.call(t, n) : new RegExp(t)[e](String(n))
        }
        , function(e) {
            var r = n(t, e, this);
            if (r.done)
                return r.value;
            var o = D(e)
              , i = String(this);
            if (!o.global)
                return _a(o, i);
            var a = o.unicode;
            o.lastIndex = 0;
            for (var s, u = [], c = 0; null !== (s = _a(o, i)); ) {
                var l = String(s[0]);
                u[c] = l,
                "" === l && (o.lastIndex = ya(i, ce(o.lastIndex), a)),
                c++
            }
            return 0 === c ? null : u
        }
        ]
    }
    ));
    var Ia = Math.max
      , Ma = Math.min
      , Ca = Math.floor
      , Ea = /\$([$&'`]|\d\d?|<[^>]*>)/g
      , Sa = /\$([$&'`]|\d\d?)/g;
    ma("replace", 2, (function(e, t, n, r) {
        var o = r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
          , i = r.REPLACE_KEEPS_$0
          , a = o ? "$" : "$0";
        return [function(n, r) {
            var o = d(this)
              , i = null == n ? void 0 : n[e];
            return void 0 !== i ? i.call(n, o, r) : t.call(String(o), n, r)
        }
        , function(e, r) {
            if (!o && i || "string" == typeof r && -1 === r.indexOf(a)) {
                var u = n(t, e, this, r);
                if (u.done)
                    return u.value
            }
            var c = D(e)
              , l = String(this)
              , p = "function" == typeof r;
            p || (r = String(r));
            var f = c.global;
            if (f) {
                var h = c.unicode;
                c.lastIndex = 0
            }
            for (var d = []; ; ) {
                var g = _a(c, l);
                if (null === g)
                    break;
                if (d.push(g),
                !f)
                    break;
                "" === String(g[0]) && (c.lastIndex = ya(l, ce(c.lastIndex), h))
            }
            for (var m, v = "", y = 0, _ = 0; _ < d.length; _++) {
                g = d[_];
                for (var I = String(g[0]), M = Ia(Ma(se(g.index), l.length), 0), C = [], E = 1; E < g.length; E++)
                    C.push(void 0 === (m = g[E]) ? m : String(m));
                var S = g.groups;
                if (p) {
                    var T = [I].concat(C, M, l);
                    void 0 !== S && T.push(S);
                    var k = String(r.apply(void 0, T))
                } else
                    k = s(I, l, M, C, S, r);
                M >= y && (v += l.slice(y, M) + k,
                y = M + I.length)
            }
            return v + l.slice(y)
        }
        ];
        function s(e, n, r, o, i, a) {
            var s = r + e.length
              , u = o.length
              , c = Sa;
            return void 0 !== i && (i = Ne(i),
            c = Ea),
            t.call(a, c, (function(t, a) {
                var c;
                switch (a.charAt(0)) {
                case "$":
                    return "$";
                case "&":
                    return e;
                case "`":
                    return n.slice(0, r);
                case "'":
                    return n.slice(s);
                case "<":
                    c = i[a.slice(1, -1)];
                    break;
                default:
                    var l = +a;
                    if (0 === l)
                        return t;
                    if (l > u) {
                        var p = Ca(l / 10);
                        return 0 === p ? t : p <= u ? void 0 === o[p - 1] ? a.charAt(1) : o[p - 1] + a.charAt(1) : t
                    }
                    c = o[l - 1]
                }
                return void 0 === c ? "" : c
            }
            ))
        }
    }
    ));
    var Ta = Fe("iterator")
      , Da = Fe("toStringTag")
      , ka = Cr.values;
    for (var Oa in yn) {
        var Ra = r[Oa]
          , Aa = Ra && Ra.prototype;
        if (Aa) {
            if (Aa[Ta] !== ka)
                try {
                    R(Aa, Ta, ka)
                } catch (p_) {
                    Aa[Ta] = ka
                }
            if (Aa[Da] || R(Aa, Da, Oa),
            yn[Oa])
                for (var wa in Cr)
                    if (Aa[wa] !== Cr[wa])
                        try {
                            R(Aa, wa, Cr[wa])
                        } catch (p_) {
                            Aa[wa] = Cr[wa]
                        }
        }
    }
    var La = Wr.trim
      , Na = r.parseFloat
      , ba = 1 / Na(Kr + "-0") != -Infinity ? function(e) {
        var t = La(String(e))
          , n = Na(t);
        return 0 === n && "-" == t.charAt(0) ? -0 : n
    }
    : Na;
    we({
        global: !0,
        forced: parseFloat != ba
    }, {
        parseFloat: ba
    });
    var Pa, Ga, Ua, xa = "undefined" != typeof window, qa = "undefined" == typeof window && "undefined" != typeof wx && "function" == typeof wx.getSystemInfoSync, Fa = "undefined" != typeof qq && "function" == typeof qq.getSystemInfoSync, ja = "undefined" != typeof tt && "function" == typeof tt.getSystemInfoSync, Va = "undefined" != typeof swan && "function" == typeof swan.getSystemInfoSync, Ba = "undefined" != typeof my && "function" == typeof my.getSystemInfoSync, Ka = qa || Fa || ja || Va || Ba, Ha = Fa ? qq : ja ? tt : Va ? swan : Ba ? my : qa ? wx : {}, $a = (Pa = "web",
    as ? Pa = "wechat" : Fa ? Pa = "qqmp" : ja ? Pa = "ttmp" : Va ? Pa = "baidump" : Ba ? Pa = "alipaymp" : qa && (Pa = "wxmp"),
    Pa), za = xa && window.navigator && window.navigator.userAgent || "", Ya = /AppleWebKit\/([\d.]+)/i.exec(za), Wa = (Ya && parseFloat(Ya.pop()),
    /iPad/i.test(za)), Ja = /iPhone/i.test(za) && !Wa, Xa = /iPod/i.test(za), Qa = Ja || Wa || Xa, Za = (function() {
        var e = za.match(/OS (\d+)_/i);
        e && e[1] && e[1]
    }(),
    /Android/i.test(za)), es = function() {
        var e = za.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);
        if (!e)
            return null;
        var t = e[1] && parseFloat(e[1])
          , n = e[2] && parseFloat(e[2]);
        return t && n ? parseFloat(e[1] + "." + e[2]) : t || null
    }(), ts = (Za && /webkit/i.test(za),
    /Firefox/i.test(za),
    /Edge/i.test(za)), ns = !ts && /Chrome/i.test(za), rs = (function() {
        var e = za.match(/Chrome\/(\d+)/);
        e && e[1] && parseFloat(e[1])
    }(),
    /MSIE/.test(za)), os = (/MSIE\s8\.0/.test(za),
    function() {
        var e = /MSIE\s(\d+)\.\d/.exec(za)
          , t = e && parseFloat(e[1]);
        return !t && /Trident\/7.0/i.test(za) && /rv:11.0/.test(za) && (t = 11),
        t
    }()), is = (/Safari/i.test(za),
    /TBS\/\d+/i.test(za)), as = (function() {
        var e = za.match(/TBS\/(\d+)/i);
        if (e && e[1])
            e[1]
    }(),
    !is && /MQQBrowser\/\d+/i.test(za),
    !is && / QQBrowser\/\d+/i.test(za),
    /(micromessenger|webbrowser)/i.test(za)), ss = /Windows/i.test(za), us = /MAC OS X/i.test(za), cs = (/MicroMessenger/i.test(za),
    !o((function() {
        return Object.isExtensible(Object.preventExtensions({}))
    }
    ))), ls = t((function(e) {
        var t = O.f
          , n = V("meta")
          , r = 0
          , o = Object.isExtensible || function() {
            return !0
        }
          , i = function(e) {
            t(e, n, {
                value: {
                    objectID: "O" + ++r,
                    weakData: {}
                }
            })
        }
          , a = e.exports = {
            REQUIRED: !1,
            fastKey: function(e, t) {
                if (!m(e))
                    return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                if (!_(e, n)) {
                    if (!o(e))
                        return "F";
                    if (!t)
                        return "E";
                    i(e)
                }
                return e[n].objectID
            },
            getWeakData: function(e, t) {
                if (!_(e, n)) {
                    if (!o(e))
                        return !0;
                    if (!t)
                        return !1;
                    i(e)
                }
                return e[n].weakData
            },
            onFreeze: function(e) {
                return cs && a.REQUIRED && o(e) && !_(e, n) && i(e),
                e
            }
        };
        H[n] = !0
    }
    )), ps = (ls.REQUIRED,
    ls.fastKey,
    ls.getWeakData,
    ls.onFreeze,
    O.f), fs = ls.fastKey, hs = ee.set, ds = ee.getterFor, gs = (function(e, t, n) {
        var i = -1 !== e.indexOf("Map")
          , a = -1 !== e.indexOf("Weak")
          , s = i ? "set" : "add"
          , u = r[e]
          , c = u && u.prototype
          , l = u
          , p = {}
          , f = function(e) {
            var t = c[e];
            te(c, e, "add" == e ? function(e) {
                return t.call(this, 0 === e ? 0 : e),
                this
            }
            : "delete" == e ? function(e) {
                return !(a && !m(e)) && t.call(this, 0 === e ? 0 : e)
            }
            : "get" == e ? function(e) {
                return a && !m(e) ? void 0 : t.call(this, 0 === e ? 0 : e)
            }
            : "has" == e ? function(e) {
                return !(a && !m(e)) && t.call(this, 0 === e ? 0 : e)
            }
            : function(e, n) {
                return t.call(this, 0 === e ? 0 : e, n),
                this
            }
            )
        };
        if (Re(e, "function" != typeof u || !(a || c.forEach && !o((function() {
            (new u).entries().next()
        }
        )))))
            l = n.getConstructor(t, e, i, s),
            ls.REQUIRED = !0;
        else if (Re(e, !0)) {
            var h = new l
              , d = h[s](a ? {} : -0, 1) != h
              , g = o((function() {
                h.has(1)
            }
            ))
              , v = Lt((function(e) {
                new u(e)
            }
            ))
              , y = !a && o((function() {
                for (var e = new u, t = 5; t--; )
                    e[s](t, t);
                return !e.has(-0)
            }
            ));
            v || ((l = t((function(t, n) {
                Oo(t, l, e);
                var r = Br(new u, t, l);
                return null != n && Ro(n, r[s], r, i),
                r
            }
            ))).prototype = c,
            c.constructor = l),
            (g || y) && (f("delete"),
            f("has"),
            i && f("get")),
            (y || d) && f(s),
            a && c.clear && delete c.clear
        }
        p[e] = l,
        we({
            global: !0,
            forced: l != u
        }, p),
        on(l, e),
        a || n.setStrong(l, e, i)
    }("Map", (function(e) {
        return function() {
            return e(this, arguments.length ? arguments[0] : void 0)
        }
    }
    ), {
        getConstructor: function(e, t, n, r) {
            var o = e((function(e, a) {
                Oo(e, o, t),
                hs(e, {
                    type: t,
                    index: Vt(null),
                    first: void 0,
                    last: void 0,
                    size: 0
                }),
                i || (e.size = 0),
                null != a && Ro(a, e[r], e, n)
            }
            ))
              , a = ds(t)
              , s = function(e, t, n) {
                var r, o, s = a(e), c = u(e, t);
                return c ? c.value = n : (s.last = c = {
                    index: o = fs(t, !0),
                    key: t,
                    value: n,
                    previous: r = s.last,
                    next: void 0,
                    removed: !1
                },
                s.first || (s.first = c),
                r && (r.next = c),
                i ? s.size++ : e.size++,
                "F" !== o && (s.index[o] = c)),
                e
            }
              , u = function(e, t) {
                var n, r = a(e), o = fs(t);
                if ("F" !== o)
                    return r.index[o];
                for (n = r.first; n; n = n.next)
                    if (n.key == t)
                        return n
            };
            return To(o.prototype, {
                clear: function() {
                    for (var e = a(this), t = e.index, n = e.first; n; )
                        n.removed = !0,
                        n.previous && (n.previous = n.previous.next = void 0),
                        delete t[n.index],
                        n = n.next;
                    e.first = e.last = void 0,
                    i ? e.size = 0 : this.size = 0
                },
                delete: function(e) {
                    var t = a(this)
                      , n = u(this, e);
                    if (n) {
                        var r = n.next
                          , o = n.previous;
                        delete t.index[n.index],
                        n.removed = !0,
                        o && (o.next = r),
                        r && (r.previous = o),
                        t.first == n && (t.first = r),
                        t.last == n && (t.last = o),
                        i ? t.size-- : this.size--
                    }
                    return !!n
                },
                forEach: function(e) {
                    for (var t, n = a(this), r = nt(e, arguments.length > 1 ? arguments[1] : void 0, 3); t = t ? t.next : n.first; )
                        for (r(t.value, t.key, this); t && t.removed; )
                            t = t.previous
                },
                has: function(e) {
                    return !!u(this, e)
                }
            }),
            To(o.prototype, n ? {
                get: function(e) {
                    var t = u(this, e);
                    return t && t.value
                },
                set: function(e, t) {
                    return s(this, 0 === e ? 0 : e, t)
                }
            } : {
                add: function(e) {
                    return s(this, e = 0 === e ? 0 : e, e)
                }
            }),
            i && ps(o.prototype, "size", {
                get: function() {
                    return a(this).size
                }
            }),
            o
        },
        setStrong: function(e, t, n) {
            var r = t + " Iterator"
              , o = ds(t)
              , i = ds(r);
            dn(e, t, (function(e, t) {
                hs(this, {
                    type: r,
                    target: e,
                    state: o(e),
                    kind: t,
                    last: void 0
                })
            }
            ), (function() {
                for (var e = i(this), t = e.kind, n = e.last; n && n.removed; )
                    n = n.previous;
                return e.target && (e.last = n = n ? n.next : e.state.first) ? "keys" == t ? {
                    value: n.key,
                    done: !1
                } : "values" == t ? {
                    value: n.value,
                    done: !1
                } : {
                    value: [n.key, n.value],
                    done: !1
                } : (e.target = void 0,
                {
                    value: void 0,
                    done: !0
                })
            }
            ), n ? "entries" : "values", !n, !0),
            ko(t)
        }
    }),
    "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    Ga = "undefined" != typeof console ? console : void 0 !== gs && gs.console ? gs.console : "undefined" != typeof window && window.console ? window.console : {};
    for (var ms = function() {}, vs = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"], ys = vs.length; ys--; )
        Ua = vs[ys],
        console[Ua] || (Ga[Ua] = ms);
    Ga.methods = vs;
    var _s = Ga
      , Is = 0
      , Ms = new Map;
    function Cs() {
        var e = new Date;
        return "TIM " + e.toLocaleTimeString("en-US", {
            hour12: !1
        }) + "." + function(e) {
            var t;
            switch (e.toString().length) {
            case 1:
                t = "00" + e;
                break;
            case 2:
                t = "0" + e;
                break;
            default:
                t = e
            }
            return t
        }(e.getMilliseconds()) + ":"
    }
    var Es = {
        arguments2String: function(e) {
            var t;
            if (1 === e.length)
                t = Cs() + e[0];
            else {
                t = Cs();
                for (var n = 0, r = e.length; n < r; n++)
                    ws(e[n]) ? Ns(e[n]) ? t += qs(e[n]) : t += JSON.stringify(e[n]) : t += e[n],
                    t += " "
            }
            return t
        },
        debug: function() {
            if (Is <= -1) {
                var e = this.arguments2String(arguments);
                _s.debug(e)
            }
        },
        log: function() {
            if (Is <= 0) {
                var e = this.arguments2String(arguments);
                _s.log(e)
            }
        },
        info: function() {
            if (Is <= 1) {
                var e = this.arguments2String(arguments);
                _s.info(e)
            }
        },
        warn: function() {
            if (Is <= 2) {
                var e = this.arguments2String(arguments);
                _s.warn(e)
            }
        },
        error: function() {
            if (Is <= 3) {
                var e = this.arguments2String(arguments);
                _s.error(e)
            }
        },
        time: function(e) {
            Ms.set(e, Us.now())
        },
        timeEnd: function(e) {
            if (Ms.has(e)) {
                var t = Us.now() - Ms.get(e);
                return Ms.delete(e),
                t
            }
            return _s.warn("未找到对应label: ".concat(e, ", 请在调用 logger.timeEnd 前，调用 logger.time")),
            0
        },
        setLevel: function(e) {
            e < 4 && _s.log(Cs() + "set level from " + Is + " to " + e),
            Is = e
        }
    }
      , Ss = function(e) {
        return "file" === bs(e)
    }
      , Ts = function(e) {
        return null !== e && ("number" == typeof e && !isNaN(e - 0) || "object" === wn(e) && e.constructor === Number)
    }
      , Ds = function(e) {
        return "string" == typeof e
    }
      , ks = function(e) {
        return null !== e && "object" === wn(e)
    }
      , Os = function(e) {
        if ("object" !== wn(e) || null === e)
            return !1;
        var t = Object.getPrototypeOf(e);
        if (null === t)
            return !0;
        for (var n = t; null !== Object.getPrototypeOf(n); )
            n = Object.getPrototypeOf(n);
        return t === n
    }
      , Rs = function(e) {
        return "function" == typeof Array.isArray ? Array.isArray(e) : "array" === bs(e)
    }
      , As = function(e) {
        return void 0 === e
    }
      , ws = function(e) {
        return Rs(e) || ks(e)
    }
      , Ls = function(e) {
        return "function" == typeof e
    }
      , Ns = function(e) {
        return e instanceof Error
    }
      , bs = function(e) {
        return Object.prototype.toString.call(e).match(/^\[object (.*)\]$/)[1].toLowerCase()
    }
      , Ps = function(e) {
        if ("string" != typeof e)
            return !1;
        var t = e[0];
        return !/[^a-zA-Z0-9]/.test(t)
    }
      , Gs = 0;
    Date.now || (Date.now = function() {
        return (new Date).getTime()
    }
    );
    var Us = {
        now: function() {
            0 === Gs && (Gs = Date.now() - 1);
            var e = Date.now() - Gs;
            return e > 4294967295 ? (Gs += 4294967295,
            Date.now() - Gs) : e
        },
        utc: function() {
            return Math.round(Date.now() / 1e3)
        }
    }
      , xs = function e(t, n, r, o) {
        if (!ws(t) || !ws(n))
            return 0;
        for (var i, a = 0, s = Object.keys(n), u = 0, c = s.length; u < c; u++)
            if (i = s[u],
            !(As(n[i]) || r && r.includes(i)))
                if (ws(t[i]) && ws(n[i]))
                    a += e(t[i], n[i], r, o);
                else {
                    if (o && o.includes(n[i]))
                        continue;
                    t[i] !== n[i] && (t[i] = n[i],
                    a += 1)
                }
        return a
    }
      , qs = function(e) {
        return JSON.stringify(e, ["message", "code"])
    }
      , Fs = function() {
        var e = new Date
          , t = e.toISOString()
          , n = e.getTimezoneOffset() / 60
          , r = "";
        return r = n < 0 ? n > -10 ? "+0" + Math.abs(100 * n) : "+" + Math.abs(100 * n) : n >= 10 ? "-" + 100 * n : "-0" + 100 * n,
        t.replace("Z", r)
    }
      , js = function(e) {
        if (0 === e.length)
            return 0;
        for (var t = 0, n = 0, r = "undefined" != typeof document && void 0 !== document.characterSet ? document.characterSet : "UTF-8"; void 0 !== e[t]; )
            n += e[t++].charCodeAt[t] <= 255 ? 1 : !1 === r ? 3 : 2;
        return n
    }
      , Vs = function(e) {
        var t = e || 99999999;
        return Math.round(Math.random() * t)
    }
      , Bs = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
      , Ks = Bs.length
      , Hs = function(e, t) {
        for (var n in e)
            if (e[n] === t)
                return !0;
        return !1
    }
      , $s = {}
      , zs = function() {
        if (Ka)
            return "https:";
        var e = window.location.protocol;
        return ["http:", "https:"].indexOf(e) < 0 && (e = "http:"),
        e
    }
      , Ys = function(e) {
        return -1 === e.indexOf("http://") || -1 === e.indexOf("https://") ? "https://" + e : e.replace(/https|http/, "https")
    };
    function Ws(e, t) {
        Rs(e) && Rs(t) ? t.forEach((function(t) {
            var n = t.key
              , r = t.value
              , o = e.find((function(e) {
                return e.key === n
            }
            ));
            o ? o.value = r : e.push({
                key: n,
                value: r
            })
        }
        )) : Es.warn("updateCustomField target 或 source 不是数组，忽略此次更新。")
    }
    var Js = function(e) {
        return e === En.GRP_WORK
    }
      , Xs = function(e) {
        return e === En.GRP_PUBLIC
    }
      , Qs = function(e) {
        return e === En.GRP_MEETING
    }
      , Zs = function(e) {
        return e === En.GRP_AVCHATROOM
    }
      , eu = function(e) {
        return Ds(e) && e === En.CONV_SYSTEM
    };
    function tu(e, t) {
        var n = {};
        return Object.keys(e).forEach((function(r) {
            n[r] = t(e[r], r)
        }
        )),
        n
    }
    function nu() {
        function e() {
            return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
        }
        return "".concat(e() + e()).concat(e()).concat(e()).concat(e()).concat(e()).concat(e()).concat(e())
    }
    function ru(e) {
        var t = e.originUrl
          , n = void 0 === t ? void 0 : t
          , r = e.originWidth
          , o = e.originHeight
          , i = e.min
          , a = void 0 === i ? 198 : i
          , s = parseInt(r)
          , u = parseInt(o)
          , c = {
            url: void 0,
            width: 0,
            height: 0
        };
        return (s <= u ? s : u) <= a ? (c.url = n,
        c.width = s,
        c.height = u) : (u <= s ? (c.width = Math.ceil(s * a / u),
        c.height = a) : (c.width = a,
        c.height = Math.ceil(u * a / s)),
        c.url = "".concat(n, 198 === a ? "?imageView2/3/w/198/h/198" : "?imageView2/3/w/720/h/720")),
        As(n) ? $n(c, ["url"]) : c
    }
    function ou(e) {
        var t = e[2];
        e[2] = e[1],
        e[1] = t;
        for (var n = 0; n < e.length; n++)
            e[n].setSizeType(n + 1),
            e[n].setType(n)
    }
    var iu = Object.prototype.hasOwnProperty;
    function au(e) {
        if (null == e)
            return !0;
        if ("boolean" == typeof e)
            return !1;
        if ("number" == typeof e)
            return 0 === e;
        if ("string" == typeof e)
            return 0 === e.length;
        if ("function" == typeof e)
            return 0 === e.length;
        if (Array.isArray(e))
            return 0 === e.length;
        if (e instanceof Error)
            return "" === e.message;
        if (Os(e)) {
            for (var t in e)
                if (iu.call(e, t))
                    return !1;
            return !0
        }
        return !("map" !== bs(e) && !function(e) {
            return "set" === bs(e)
        }(e) && !Ss(e)) && 0 === e.size
    }
    function su(e, t, n) {
        if (void 0 === t)
            return !0;
        var r = !0;
        if ("object" === ar(t).toLowerCase())
            Object.keys(t).forEach((function(o) {
                var i = 1 === e.length ? e[0][o] : void 0;
                r = !!uu(i, t[o], n, o) && r
            }
            ));
        else if ("array" === ar(t).toLowerCase())
            for (var o = 0; o < t.length; o++)
                r = !!uu(e[o], t[o], n, t[o].name) && r;
        if (r)
            return r;
        throw new Error("Params validate failed.")
    }
    function uu(e, t, n, r) {
        if (void 0 === t)
            return !0;
        var o = !0;
        return t.required && au(e) && (_s.error("TIM [".concat(n, '] Missing required params: "').concat(r, '".')),
        o = !1),
        au(e) || ar(e).toLowerCase() === t.type.toLowerCase() || (_s.error("TIM [".concat(n, '] Invalid params: type check failed for "').concat(r, '".Expected ').concat(t.type, ".")),
        o = !1),
        t.validator && !t.validator(e) && (_s.error("TIM [".concat(n, "] Invalid params: custom validator check failed for params.")),
        o = !1),
        o
    }
    var cu = {
        f: Fe
    }
      , lu = O.f
      , pu = it.forEach
      , fu = K("hidden")
      , hu = Fe("toPrimitive")
      , du = ee.set
      , gu = ee.getterFor("Symbol")
      , mu = Object.prototype
      , vu = r.Symbol
      , yu = oe("JSON", "stringify")
      , _u = T.f
      , Iu = O.f
      , Mu = po.f
      , Cu = u.f
      , Eu = q("symbols")
      , Su = q("op-symbols")
      , Tu = q("string-to-symbol-registry")
      , Du = q("symbol-to-string-registry")
      , ku = q("wks")
      , Ou = r.QObject
      , Ru = !Ou || !Ou.prototype || !Ou.prototype.findChild
      , Au = i && o((function() {
        return 7 != Vt(Iu({}, "a", {
            get: function() {
                return Iu(this, "a", {
                    value: 7
                }).a
            }
        })).a
    }
    )) ? function(e, t, n) {
        var r = _u(mu, t);
        r && delete mu[t],
        Iu(e, t, n),
        r && e !== mu && Iu(mu, t, r)
    }
    : Iu
      , wu = function(e, t) {
        var n = Eu[e] = Vt(vu.prototype);
        return du(n, {
            type: "Symbol",
            tag: e,
            description: t
        }),
        i || (n.description = t),
        n
    }
      , Lu = Ge ? function(e) {
        return "symbol" == typeof e
    }
    : function(e) {
        return Object(e)instanceof vu
    }
      , Nu = function(e, t, n) {
        e === mu && Nu(Su, t, n),
        D(e);
        var r = v(t, !0);
        return D(n),
        _(Eu, r) ? (n.enumerable ? (_(e, fu) && e[fu][r] && (e[fu][r] = !1),
        n = Vt(n, {
            enumerable: c(0, !1)
        })) : (_(e, fu) || Iu(e, fu, c(1, {})),
        e[fu][r] = !0),
        Au(e, r, n)) : Iu(e, r, n)
    }
      , bu = function(e, t) {
        D(e);
        var n = g(t)
          , r = Pt(n).concat(xu(n));
        return pu(r, (function(t) {
            i && !Pu.call(n, t) || Nu(e, t, n[t])
        }
        )),
        e
    }
      , Pu = function(e) {
        var t = v(e, !0)
          , n = Cu.call(this, t);
        return !(this === mu && _(Eu, t) && !_(Su, t)) && (!(n || !_(this, t) || !_(Eu, t) || _(this, fu) && this[fu][t]) || n)
    }
      , Gu = function(e, t) {
        var n = g(e)
          , r = v(t, !0);
        if (n !== mu || !_(Eu, r) || _(Su, r)) {
            var o = _u(n, r);
            return !o || !_(Eu, r) || _(n, fu) && n[fu][r] || (o.enumerable = !0),
            o
        }
    }
      , Uu = function(e) {
        var t = Mu(g(e))
          , n = [];
        return pu(t, (function(e) {
            _(Eu, e) || _(H, e) || n.push(e)
        }
        )),
        n
    }
      , xu = function(e) {
        var t = e === mu
          , n = Mu(t ? Su : g(e))
          , r = [];
        return pu(n, (function(e) {
            !_(Eu, e) || t && !_(mu, e) || r.push(Eu[e])
        }
        )),
        r
    };
    if (Pe || (te((vu = function() {
        if (this instanceof vu)
            throw TypeError("Symbol is not a constructor");
        var e = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0
          , t = V(e)
          , n = function(e) {
            this === mu && n.call(Su, e),
            _(this, fu) && _(this[fu], t) && (this[fu][t] = !1),
            Au(this, t, c(1, e))
        };
        return i && Ru && Au(mu, t, {
            configurable: !0,
            set: n
        }),
        wu(t, e)
    }
    ).prototype, "toString", (function() {
        return gu(this).tag
    }
    )),
    te(vu, "withoutSetter", (function(e) {
        return wu(V(e), e)
    }
    )),
    u.f = Pu,
    O.f = Nu,
    T.f = Gu,
    _e.f = po.f = Uu,
    Ie.f = xu,
    cu.f = function(e) {
        return wu(Fe(e), e)
    }
    ,
    i && (Iu(vu.prototype, "description", {
        configurable: !0,
        get: function() {
            return gu(this).description
        }
    }),
    te(mu, "propertyIsEnumerable", Pu, {
        unsafe: !0
    }))),
    we({
        global: !0,
        wrap: !0,
        forced: !Pe,
        sham: !Pe
    }, {
        Symbol: vu
    }),
    pu(Pt(ku), (function(e) {
        !function(e) {
            var t = ne.Symbol || (ne.Symbol = {});
            _(t, e) || lu(t, e, {
                value: cu.f(e)
            })
        }(e)
    }
    )),
    we({
        target: "Symbol",
        stat: !0,
        forced: !Pe
    }, {
        for: function(e) {
            var t = String(e);
            if (_(Tu, t))
                return Tu[t];
            var n = vu(t);
            return Tu[t] = n,
            Du[n] = t,
            n
        },
        keyFor: function(e) {
            if (!Lu(e))
                throw TypeError(e + " is not a symbol");
            if (_(Du, e))
                return Du[e]
        },
        useSetter: function() {
            Ru = !0
        },
        useSimple: function() {
            Ru = !1
        }
    }),
    we({
        target: "Object",
        stat: !0,
        forced: !Pe,
        sham: !i
    }, {
        create: function(e, t) {
            return void 0 === t ? Vt(e) : bu(Vt(e), t)
        },
        defineProperty: Nu,
        defineProperties: bu,
        getOwnPropertyDescriptor: Gu
    }),
    we({
        target: "Object",
        stat: !0,
        forced: !Pe
    }, {
        getOwnPropertyNames: Uu,
        getOwnPropertySymbols: xu
    }),
    we({
        target: "Object",
        stat: !0,
        forced: o((function() {
            Ie.f(1)
        }
        ))
    }, {
        getOwnPropertySymbols: function(e) {
            return Ie.f(Ne(e))
        }
    }),
    yu) {
        var qu = !Pe || o((function() {
            var e = vu();
            return "[null]" != yu([e]) || "{}" != yu({
                a: e
            }) || "{}" != yu(Object(e))
        }
        ));
        we({
            target: "JSON",
            stat: !0,
            forced: qu
        }, {
            stringify: function(e, t, n) {
                for (var r, o = [e], i = 1; arguments.length > i; )
                    o.push(arguments[i++]);
                if (r = t,
                (m(t) || void 0 !== e) && !Lu(e))
                    return Le(t) || (t = function(e, t) {
                        if ("function" == typeof r && (t = r.call(this, e, t)),
                        !Lu(t))
                            return t
                    }
                    ),
                    o[1] = t,
                    yu.apply(null, o)
            }
        })
    }
    vu.prototype[hu] || R(vu.prototype, hu, vu.prototype.valueOf),
    on(vu, "Symbol"),
    H[fu] = !0;
    var Fu = O.f
      , ju = r.Symbol;
    if (i && "function" == typeof ju && (!("description"in ju.prototype) || void 0 !== ju().description)) {
        var Vu = {}
          , Bu = function() {
            var e = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0])
              , t = this instanceof Bu ? new ju(e) : void 0 === e ? ju() : ju(e);
            return "" === e && (Vu[t] = !0),
            t
        };
        Ce(Bu, ju);
        var Ku = Bu.prototype = ju.prototype;
        Ku.constructor = Bu;
        var Hu = Ku.toString
          , $u = "Symbol(test)" == String(ju("test"))
          , zu = /^Symbol\((.*)\)[^)]+$/;
        Fu(Ku, "description", {
            configurable: !0,
            get: function() {
                var e = m(this) ? this.valueOf() : this
                  , t = Hu.call(e);
                if (_(Vu, e))
                    return "";
                var n = $u ? t.slice(7, -1) : t.replace(zu, "$1");
                return "" === n ? void 0 : n
            }
        }),
        we({
            global: !0,
            forced: !0
        }, {
            Symbol: Bu
        })
    }
    var Yu = u.f
      , Wu = function(e) {
        return function(t) {
            for (var n, r = g(t), o = Pt(r), a = o.length, s = 0, u = []; a > s; )
                n = o[s++],
                i && !Yu.call(r, n) || u.push(e ? [n, r[n]] : r[n]);
            return u
        }
    }
      , Ju = {
        entries: Wu(!0),
        values: Wu(!1)
    }.values;
    we({
        target: "Object",
        stat: !0
    }, {
        values: function(e) {
            return Ju(e)
        }
    });
    var Xu = {
        SUCCESS: "JoinedSuccess",
        WAIT_APPROVAL: "WaitAdminApproval"
    }
      , Qu = {
        SUCCESS: 0
    }
      , Zu = {
        IS_LOGIN: 1,
        IS_NOT_LOGIN: 0
    }
      , ec = {
        UNSEND: "unSend",
        SUCCESS: "success",
        FAIL: "fail"
    }
      , tc = {
        NOT_START: "notStart",
        PENDING: "pengding",
        RESOLVED: "resolved",
        REJECTED: "rejected"
    }
      , nc = function() {
        function e(t) {
            bn(this, e),
            this.type = En.MSG_TEXT,
            this.content = {
                text: t.text || ""
            }
        }
        return Gn(e, [{
            key: "setText",
            value: function(e) {
                this.content.text = e
            }
        }, {
            key: "sendable",
            value: function() {
                return 0 !== this.content.text.length
            }
        }]),
        e
    }()
      , rc = Object.assign
      , oc = Object.defineProperty
      , ic = !rc || o((function() {
        if (i && 1 !== rc({
            b: 1
        }, rc(oc({}, "a", {
            enumerable: !0,
            get: function() {
                oc(this, "b", {
                    value: 3,
                    enumerable: !1
                })
            }
        }), {
            b: 2
        })).b)
            return !0;
        var e = {}
          , t = {}
          , n = Symbol();
        return e[n] = 7,
        "abcdefghijklmnopqrst".split("").forEach((function(e) {
            t[e] = e
        }
        )),
        7 != rc({}, e)[n] || "abcdefghijklmnopqrst" != Pt(rc({}, t)).join("")
    }
    )) ? function(e, t) {
        for (var n = Ne(e), r = arguments.length, o = 1, a = Ie.f, s = u.f; r > o; )
            for (var c, l = h(arguments[o++]), p = a ? Pt(l).concat(a(l)) : Pt(l), f = p.length, d = 0; f > d; )
                c = p[d++],
                i && !s.call(l, c) || (n[c] = l[c]);
        return n
    }
    : rc;
    we({
        target: "Object",
        stat: !0,
        forced: Object.assign !== ic
    }, {
        assign: ic
    });
    var ac = Fe("iterator")
      , sc = !o((function() {
        var e = new URL("b?a=1&b=2&c=3","http://a")
          , t = e.searchParams
          , n = "";
        return e.pathname = "c%20d",
        t.forEach((function(e, r) {
            t.delete("b"),
            n += r + e
        }
        )),
        !t.sort || "http://a/c%20d?a=1&c=3" !== e.href || "3" !== t.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !t[ac] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("http://тест").host || "#%D0%B1" !== new URL("http://a#б").hash || "a1c3" !== n || "x" !== new URL("http://x",void 0).host
    }
    ))
      , uc = /[^\0-\u007E]/
      , cc = /[.\u3002\uFF0E\uFF61]/g
      , lc = "Overflow: input needs wider integers to process"
      , pc = Math.floor
      , fc = String.fromCharCode
      , hc = function(e) {
        return e + 22 + 75 * (e < 26)
    }
      , dc = function(e, t, n) {
        var r = 0;
        for (e = n ? pc(e / 700) : e >> 1,
        e += pc(e / t); e > 455; r += 36)
            e = pc(e / 35);
        return pc(r + 36 * e / (e + 38))
    }
      , gc = function(e) {
        var t, n, r = [], o = (e = function(e) {
            for (var t = [], n = 0, r = e.length; n < r; ) {
                var o = e.charCodeAt(n++);
                if (o >= 55296 && o <= 56319 && n < r) {
                    var i = e.charCodeAt(n++);
                    56320 == (64512 & i) ? t.push(((1023 & o) << 10) + (1023 & i) + 65536) : (t.push(o),
                    n--)
                } else
                    t.push(o)
            }
            return t
        }(e)).length, i = 128, a = 0, s = 72;
        for (t = 0; t < e.length; t++)
            (n = e[t]) < 128 && r.push(fc(n));
        var u = r.length
          , c = u;
        for (u && r.push("-"); c < o; ) {
            var l = 2147483647;
            for (t = 0; t < e.length; t++)
                (n = e[t]) >= i && n < l && (l = n);
            var p = c + 1;
            if (l - i > pc((2147483647 - a) / p))
                throw RangeError(lc);
            for (a += (l - i) * p,
            i = l,
            t = 0; t < e.length; t++) {
                if ((n = e[t]) < i && ++a > 2147483647)
                    throw RangeError(lc);
                if (n == i) {
                    for (var f = a, h = 36; ; h += 36) {
                        var d = h <= s ? 1 : h >= s + 26 ? 26 : h - s;
                        if (f < d)
                            break;
                        var g = f - d
                          , m = 36 - d;
                        r.push(fc(hc(d + g % m))),
                        f = pc(g / m)
                    }
                    r.push(fc(hc(f))),
                    s = dc(a, p, c == u),
                    a = 0,
                    ++c
                }
            }
            ++a,
            ++i
        }
        return r.join("")
    }
      , mc = function(e) {
        var t = Dt(e);
        if ("function" != typeof t)
            throw TypeError(String(e) + " is not iterable");
        return D(t.call(e))
    }
      , vc = oe("fetch")
      , yc = oe("Headers")
      , _c = Fe("iterator")
      , Ic = ee.set
      , Mc = ee.getterFor("URLSearchParams")
      , Cc = ee.getterFor("URLSearchParamsIterator")
      , Ec = /\+/g
      , Sc = Array(4)
      , Tc = function(e) {
        return Sc[e - 1] || (Sc[e - 1] = RegExp("((?:%[\\da-f]{2}){" + e + "})", "gi"))
    }
      , Dc = function(e) {
        try {
            return decodeURIComponent(e)
        } catch (p_) {
            return e
        }
    }
      , kc = function(e) {
        var t = e.replace(Ec, " ")
          , n = 4;
        try {
            return decodeURIComponent(t)
        } catch (p_) {
            for (; n; )
                t = t.replace(Tc(n--), Dc);
            return t
        }
    }
      , Oc = /[!'()~]|%20/g
      , Rc = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+"
    }
      , Ac = function(e) {
        return Rc[e]
    }
      , wc = function(e) {
        return encodeURIComponent(e).replace(Oc, Ac)
    }
      , Lc = function(e, t) {
        if (t)
            for (var n, r, o = t.split("&"), i = 0; i < o.length; )
                (n = o[i++]).length && (r = n.split("="),
                e.push({
                    key: kc(r.shift()),
                    value: kc(r.join("="))
                }))
    }
      , Nc = function(e) {
        this.entries.length = 0,
        Lc(this.entries, e)
    }
      , bc = function(e, t) {
        if (e < t)
            throw TypeError("Not enough arguments")
    }
      , Pc = un((function(e, t) {
        Ic(this, {
            type: "URLSearchParamsIterator",
            iterator: mc(Mc(e).entries),
            kind: t
        })
    }
    ), "Iterator", (function() {
        var e = Cc(this)
          , t = e.kind
          , n = e.iterator.next()
          , r = n.value;
        return n.done || (n.value = "keys" === t ? r.key : "values" === t ? r.value : [r.key, r.value]),
        n
    }
    ))
      , Gc = function() {
        Oo(this, Gc, "URLSearchParams");
        var e, t, n, r, o, i, a, s, u, c = arguments.length > 0 ? arguments[0] : void 0, l = this, p = [];
        if (Ic(l, {
            type: "URLSearchParams",
            entries: p,
            updateURL: function() {},
            updateSearchParams: Nc
        }),
        void 0 !== c)
            if (m(c))
                if ("function" == typeof (e = Dt(c)))
                    for (n = (t = e.call(c)).next; !(r = n.call(t)).done; ) {
                        if ((a = (i = (o = mc(D(r.value))).next).call(o)).done || (s = i.call(o)).done || !i.call(o).done)
                            throw TypeError("Expected sequence with length 2");
                        p.push({
                            key: a.value + "",
                            value: s.value + ""
                        })
                    }
                else
                    for (u in c)
                        _(c, u) && p.push({
                            key: u,
                            value: c[u] + ""
                        });
            else
                Lc(p, "string" == typeof c ? "?" === c.charAt(0) ? c.slice(1) : c : c + "")
    }
      , Uc = Gc.prototype;
    To(Uc, {
        append: function(e, t) {
            bc(arguments.length, 2);
            var n = Mc(this);
            n.entries.push({
                key: e + "",
                value: t + ""
            }),
            n.updateURL()
        },
        delete: function(e) {
            bc(arguments.length, 1);
            for (var t = Mc(this), n = t.entries, r = e + "", o = 0; o < n.length; )
                n[o].key === r ? n.splice(o, 1) : o++;
            t.updateURL()
        },
        get: function(e) {
            bc(arguments.length, 1);
            for (var t = Mc(this).entries, n = e + "", r = 0; r < t.length; r++)
                if (t[r].key === n)
                    return t[r].value;
            return null
        },
        getAll: function(e) {
            bc(arguments.length, 1);
            for (var t = Mc(this).entries, n = e + "", r = [], o = 0; o < t.length; o++)
                t[o].key === n && r.push(t[o].value);
            return r
        },
        has: function(e) {
            bc(arguments.length, 1);
            for (var t = Mc(this).entries, n = e + "", r = 0; r < t.length; )
                if (t[r++].key === n)
                    return !0;
            return !1
        },
        set: function(e, t) {
            bc(arguments.length, 1);
            for (var n, r = Mc(this), o = r.entries, i = !1, a = e + "", s = t + "", u = 0; u < o.length; u++)
                (n = o[u]).key === a && (i ? o.splice(u--, 1) : (i = !0,
                n.value = s));
            i || o.push({
                key: a,
                value: s
            }),
            r.updateURL()
        },
        sort: function() {
            var e, t, n, r = Mc(this), o = r.entries, i = o.slice();
            for (o.length = 0,
            n = 0; n < i.length; n++) {
                for (e = i[n],
                t = 0; t < n; t++)
                    if (o[t].key > e.key) {
                        o.splice(t, 0, e);
                        break
                    }
                t === n && o.push(e)
            }
            r.updateURL()
        },
        forEach: function(e) {
            for (var t, n = Mc(this).entries, r = nt(e, arguments.length > 1 ? arguments[1] : void 0, 3), o = 0; o < n.length; )
                r((t = n[o++]).value, t.key, this)
        },
        keys: function() {
            return new Pc(this,"keys")
        },
        values: function() {
            return new Pc(this,"values")
        },
        entries: function() {
            return new Pc(this,"entries")
        }
    }, {
        enumerable: !0
    }),
    te(Uc, _c, Uc.entries),
    te(Uc, "toString", (function() {
        for (var e, t = Mc(this).entries, n = [], r = 0; r < t.length; )
            e = t[r++],
            n.push(wc(e.key) + "=" + wc(e.value));
        return n.join("&")
    }
    ), {
        enumerable: !0
    }),
    on(Gc, "URLSearchParams"),
    we({
        global: !0,
        forced: !sc
    }, {
        URLSearchParams: Gc
    }),
    sc || "function" != typeof vc || "function" != typeof yc || we({
        global: !0,
        enumerable: !0,
        forced: !0
    }, {
        fetch: function(e) {
            var t, n, r, o = [e];
            return arguments.length > 1 && (m(t = arguments[1]) && (n = t.body,
            "URLSearchParams" === St(n) && ((r = t.headers ? new yc(t.headers) : new yc).has("content-type") || r.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"),
            t = Vt(t, {
                body: c(0, String(n)),
                headers: c(0, r)
            }))),
            o.push(t)),
            vc.apply(this, o)
        }
    });
    var xc, qc = {
        URLSearchParams: Gc,
        getState: Mc
    }, Fc = Yt.codeAt, jc = r.URL, Vc = qc.URLSearchParams, Bc = qc.getState, Kc = ee.set, Hc = ee.getterFor("URL"), $c = Math.floor, zc = Math.pow, Yc = /[A-Za-z]/, Wc = /[\d+-.A-Za-z]/, Jc = /\d/, Xc = /^(0x|0X)/, Qc = /^[0-7]+$/, Zc = /^\d+$/, el = /^[\dA-Fa-f]+$/, tl = /[\u0000\u0009\u000A\u000D #%/:?@[\\]]/, nl = /[\u0000\u0009\u000A\u000D #/:?@[\\]]/, rl = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g, ol = /[\u0009\u000A\u000D]/g, il = function(e, t) {
        var n, r, o;
        if ("[" == t.charAt(0)) {
            if ("]" != t.charAt(t.length - 1))
                return "Invalid host";
            if (!(n = sl(t.slice(1, -1))))
                return "Invalid host";
            e.host = n
        } else if (gl(e)) {
            if (t = function(e) {
                var t, n, r = [], o = e.toLowerCase().replace(cc, ".").split(".");
                for (t = 0; t < o.length; t++)
                    n = o[t],
                    r.push(uc.test(n) ? "xn--" + gc(n) : n);
                return r.join(".")
            }(t),
            tl.test(t))
                return "Invalid host";
            if (null === (n = al(t)))
                return "Invalid host";
            e.host = n
        } else {
            if (nl.test(t))
                return "Invalid host";
            for (n = "",
            r = kt(t),
            o = 0; o < r.length; o++)
                n += hl(r[o], cl);
            e.host = n
        }
    }, al = function(e) {
        var t, n, r, o, i, a, s, u = e.split(".");
        if (u.length && "" == u[u.length - 1] && u.pop(),
        (t = u.length) > 4)
            return e;
        for (n = [],
        r = 0; r < t; r++) {
            if ("" == (o = u[r]))
                return e;
            if (i = 10,
            o.length > 1 && "0" == o.charAt(0) && (i = Xc.test(o) ? 16 : 8,
            o = o.slice(8 == i ? 1 : 2)),
            "" === o)
                a = 0;
            else {
                if (!(10 == i ? Zc : 8 == i ? Qc : el).test(o))
                    return e;
                a = parseInt(o, i)
            }
            n.push(a)
        }
        for (r = 0; r < t; r++)
            if (a = n[r],
            r == t - 1) {
                if (a >= zc(256, 5 - t))
                    return null
            } else if (a > 255)
                return null;
        for (s = n.pop(),
        r = 0; r < n.length; r++)
            s += n[r] * zc(256, 3 - r);
        return s
    }, sl = function(e) {
        var t, n, r, o, i, a, s, u = [0, 0, 0, 0, 0, 0, 0, 0], c = 0, l = null, p = 0, f = function() {
            return e.charAt(p)
        };
        if (":" == f()) {
            if (":" != e.charAt(1))
                return;
            p += 2,
            l = ++c
        }
        for (; f(); ) {
            if (8 == c)
                return;
            if (":" != f()) {
                for (t = n = 0; n < 4 && el.test(f()); )
                    t = 16 * t + parseInt(f(), 16),
                    p++,
                    n++;
                if ("." == f()) {
                    if (0 == n)
                        return;
                    if (p -= n,
                    c > 6)
                        return;
                    for (r = 0; f(); ) {
                        if (o = null,
                        r > 0) {
                            if (!("." == f() && r < 4))
                                return;
                            p++
                        }
                        if (!Jc.test(f()))
                            return;
                        for (; Jc.test(f()); ) {
                            if (i = parseInt(f(), 10),
                            null === o)
                                o = i;
                            else {
                                if (0 == o)
                                    return;
                                o = 10 * o + i
                            }
                            if (o > 255)
                                return;
                            p++
                        }
                        u[c] = 256 * u[c] + o,
                        2 != ++r && 4 != r || c++
                    }
                    if (4 != r)
                        return;
                    break
                }
                if (":" == f()) {
                    if (p++,
                    !f())
                        return
                } else if (f())
                    return;
                u[c++] = t
            } else {
                if (null !== l)
                    return;
                p++,
                l = ++c
            }
        }
        if (null !== l)
            for (a = c - l,
            c = 7; 0 != c && a > 0; )
                s = u[c],
                u[c--] = u[l + a - 1],
                u[l + --a] = s;
        else if (8 != c)
            return;
        return u
    }, ul = function(e) {
        var t, n, r, o;
        if ("number" == typeof e) {
            for (t = [],
            n = 0; n < 4; n++)
                t.unshift(e % 256),
                e = $c(e / 256);
            return t.join(".")
        }
        if ("object" == typeof e) {
            for (t = "",
            r = function(e) {
                for (var t = null, n = 1, r = null, o = 0, i = 0; i < 8; i++)
                    0 !== e[i] ? (o > n && (t = r,
                    n = o),
                    r = null,
                    o = 0) : (null === r && (r = i),
                    ++o);
                return o > n && (t = r,
                n = o),
                t
            }(e),
            n = 0; n < 8; n++)
                o && 0 === e[n] || (o && (o = !1),
                r === n ? (t += n ? ":" : "::",
                o = !0) : (t += e[n].toString(16),
                n < 7 && (t += ":")));
            return "[" + t + "]"
        }
        return e
    }, cl = {}, ll = ic({}, cl, {
        " ": 1,
        '"': 1,
        "<": 1,
        ">": 1,
        "`": 1
    }), pl = ic({}, ll, {
        "#": 1,
        "?": 1,
        "{": 1,
        "}": 1
    }), fl = ic({}, pl, {
        "/": 1,
        ":": 1,
        ";": 1,
        "=": 1,
        "@": 1,
        "[": 1,
        "\\": 1,
        "]": 1,
        "^": 1,
        "|": 1
    }), hl = function(e, t) {
        var n = Fc(e, 0);
        return n > 32 && n < 127 && !_(t, e) ? e : encodeURIComponent(e)
    }, dl = {
        ftp: 21,
        file: null,
        http: 80,
        https: 443,
        ws: 80,
        wss: 443
    }, gl = function(e) {
        return _(dl, e.scheme)
    }, ml = function(e) {
        return "" != e.username || "" != e.password
    }, vl = function(e) {
        return !e.host || e.cannotBeABaseURL || "file" == e.scheme
    }, yl = function(e, t) {
        var n;
        return 2 == e.length && Yc.test(e.charAt(0)) && (":" == (n = e.charAt(1)) || !t && "|" == n)
    }, _l = function(e) {
        var t;
        return e.length > 1 && yl(e.slice(0, 2)) && (2 == e.length || "/" === (t = e.charAt(2)) || "\\" === t || "?" === t || "#" === t)
    }, Il = function(e) {
        var t = e.path
          , n = t.length;
        !n || "file" == e.scheme && 1 == n && yl(t[0], !0) || t.pop()
    }, Ml = function(e) {
        return "." === e || "%2e" === e.toLowerCase()
    }, Cl = {}, El = {}, Sl = {}, Tl = {}, Dl = {}, kl = {}, Ol = {}, Rl = {}, Al = {}, wl = {}, Ll = {}, Nl = {}, bl = {}, Pl = {}, Gl = {}, Ul = {}, xl = {}, ql = {}, Fl = {}, jl = {}, Vl = {}, Bl = function(e, t, n, r) {
        var o, i, a, s, u, c = n || Cl, l = 0, p = "", f = !1, h = !1, d = !1;
        for (n || (e.scheme = "",
        e.username = "",
        e.password = "",
        e.host = null,
        e.port = null,
        e.path = [],
        e.query = null,
        e.fragment = null,
        e.cannotBeABaseURL = !1,
        t = t.replace(rl, "")),
        t = t.replace(ol, ""),
        o = kt(t); l <= o.length; ) {
            switch (i = o[l],
            c) {
            case Cl:
                if (!i || !Yc.test(i)) {
                    if (n)
                        return "Invalid scheme";
                    c = Sl;
                    continue
                }
                p += i.toLowerCase(),
                c = El;
                break;
            case El:
                if (i && (Wc.test(i) || "+" == i || "-" == i || "." == i))
                    p += i.toLowerCase();
                else {
                    if (":" != i) {
                        if (n)
                            return "Invalid scheme";
                        p = "",
                        c = Sl,
                        l = 0;
                        continue
                    }
                    if (n && (gl(e) != _(dl, p) || "file" == p && (ml(e) || null !== e.port) || "file" == e.scheme && !e.host))
                        return;
                    if (e.scheme = p,
                    n)
                        return void (gl(e) && dl[e.scheme] == e.port && (e.port = null));
                    p = "",
                    "file" == e.scheme ? c = Pl : gl(e) && r && r.scheme == e.scheme ? c = Tl : gl(e) ? c = Rl : "/" == o[l + 1] ? (c = Dl,
                    l++) : (e.cannotBeABaseURL = !0,
                    e.path.push(""),
                    c = Fl)
                }
                break;
            case Sl:
                if (!r || r.cannotBeABaseURL && "#" != i)
                    return "Invalid scheme";
                if (r.cannotBeABaseURL && "#" == i) {
                    e.scheme = r.scheme,
                    e.path = r.path.slice(),
                    e.query = r.query,
                    e.fragment = "",
                    e.cannotBeABaseURL = !0,
                    c = Vl;
                    break
                }
                c = "file" == r.scheme ? Pl : kl;
                continue;
            case Tl:
                if ("/" != i || "/" != o[l + 1]) {
                    c = kl;
                    continue
                }
                c = Al,
                l++;
                break;
            case Dl:
                if ("/" == i) {
                    c = wl;
                    break
                }
                c = ql;
                continue;
            case kl:
                if (e.scheme = r.scheme,
                i == xc)
                    e.username = r.username,
                    e.password = r.password,
                    e.host = r.host,
                    e.port = r.port,
                    e.path = r.path.slice(),
                    e.query = r.query;
                else if ("/" == i || "\\" == i && gl(e))
                    c = Ol;
                else if ("?" == i)
                    e.username = r.username,
                    e.password = r.password,
                    e.host = r.host,
                    e.port = r.port,
                    e.path = r.path.slice(),
                    e.query = "",
                    c = jl;
                else {
                    if ("#" != i) {
                        e.username = r.username,
                        e.password = r.password,
                        e.host = r.host,
                        e.port = r.port,
                        e.path = r.path.slice(),
                        e.path.pop(),
                        c = ql;
                        continue
                    }
                    e.username = r.username,
                    e.password = r.password,
                    e.host = r.host,
                    e.port = r.port,
                    e.path = r.path.slice(),
                    e.query = r.query,
                    e.fragment = "",
                    c = Vl
                }
                break;
            case Ol:
                if (!gl(e) || "/" != i && "\\" != i) {
                    if ("/" != i) {
                        e.username = r.username,
                        e.password = r.password,
                        e.host = r.host,
                        e.port = r.port,
                        c = ql;
                        continue
                    }
                    c = wl
                } else
                    c = Al;
                break;
            case Rl:
                if (c = Al,
                "/" != i || "/" != p.charAt(l + 1))
                    continue;
                l++;
                break;
            case Al:
                if ("/" != i && "\\" != i) {
                    c = wl;
                    continue
                }
                break;
            case wl:
                if ("@" == i) {
                    f && (p = "%40" + p),
                    f = !0,
                    a = kt(p);
                    for (var g = 0; g < a.length; g++) {
                        var m = a[g];
                        if (":" != m || d) {
                            var v = hl(m, fl);
                            d ? e.password += v : e.username += v
                        } else
                            d = !0
                    }
                    p = ""
                } else if (i == xc || "/" == i || "?" == i || "#" == i || "\\" == i && gl(e)) {
                    if (f && "" == p)
                        return "Invalid authority";
                    l -= kt(p).length + 1,
                    p = "",
                    c = Ll
                } else
                    p += i;
                break;
            case Ll:
            case Nl:
                if (n && "file" == e.scheme) {
                    c = Ul;
                    continue
                }
                if (":" != i || h) {
                    if (i == xc || "/" == i || "?" == i || "#" == i || "\\" == i && gl(e)) {
                        if (gl(e) && "" == p)
                            return "Invalid host";
                        if (n && "" == p && (ml(e) || null !== e.port))
                            return;
                        if (s = il(e, p))
                            return s;
                        if (p = "",
                        c = xl,
                        n)
                            return;
                        continue
                    }
                    "[" == i ? h = !0 : "]" == i && (h = !1),
                    p += i
                } else {
                    if ("" == p)
                        return "Invalid host";
                    if (s = il(e, p))
                        return s;
                    if (p = "",
                    c = bl,
                    n == Nl)
                        return
                }
                break;
            case bl:
                if (!Jc.test(i)) {
                    if (i == xc || "/" == i || "?" == i || "#" == i || "\\" == i && gl(e) || n) {
                        if ("" != p) {
                            var y = parseInt(p, 10);
                            if (y > 65535)
                                return "Invalid port";
                            e.port = gl(e) && y === dl[e.scheme] ? null : y,
                            p = ""
                        }
                        if (n)
                            return;
                        c = xl;
                        continue
                    }
                    return "Invalid port"
                }
                p += i;
                break;
            case Pl:
                if (e.scheme = "file",
                "/" == i || "\\" == i)
                    c = Gl;
                else {
                    if (!r || "file" != r.scheme) {
                        c = ql;
                        continue
                    }
                    if (i == xc)
                        e.host = r.host,
                        e.path = r.path.slice(),
                        e.query = r.query;
                    else if ("?" == i)
                        e.host = r.host,
                        e.path = r.path.slice(),
                        e.query = "",
                        c = jl;
                    else {
                        if ("#" != i) {
                            _l(o.slice(l).join("")) || (e.host = r.host,
                            e.path = r.path.slice(),
                            Il(e)),
                            c = ql;
                            continue
                        }
                        e.host = r.host,
                        e.path = r.path.slice(),
                        e.query = r.query,
                        e.fragment = "",
                        c = Vl
                    }
                }
                break;
            case Gl:
                if ("/" == i || "\\" == i) {
                    c = Ul;
                    break
                }
                r && "file" == r.scheme && !_l(o.slice(l).join("")) && (yl(r.path[0], !0) ? e.path.push(r.path[0]) : e.host = r.host),
                c = ql;
                continue;
            case Ul:
                if (i == xc || "/" == i || "\\" == i || "?" == i || "#" == i) {
                    if (!n && yl(p))
                        c = ql;
                    else if ("" == p) {
                        if (e.host = "",
                        n)
                            return;
                        c = xl
                    } else {
                        if (s = il(e, p))
                            return s;
                        if ("localhost" == e.host && (e.host = ""),
                        n)
                            return;
                        p = "",
                        c = xl
                    }
                    continue
                }
                p += i;
                break;
            case xl:
                if (gl(e)) {
                    if (c = ql,
                    "/" != i && "\\" != i)
                        continue
                } else if (n || "?" != i)
                    if (n || "#" != i) {
                        if (i != xc && (c = ql,
                        "/" != i))
                            continue
                    } else
                        e.fragment = "",
                        c = Vl;
                else
                    e.query = "",
                    c = jl;
                break;
            case ql:
                if (i == xc || "/" == i || "\\" == i && gl(e) || !n && ("?" == i || "#" == i)) {
                    if (".." === (u = (u = p).toLowerCase()) || "%2e." === u || ".%2e" === u || "%2e%2e" === u ? (Il(e),
                    "/" == i || "\\" == i && gl(e) || e.path.push("")) : Ml(p) ? "/" == i || "\\" == i && gl(e) || e.path.push("") : ("file" == e.scheme && !e.path.length && yl(p) && (e.host && (e.host = ""),
                    p = p.charAt(0) + ":"),
                    e.path.push(p)),
                    p = "",
                    "file" == e.scheme && (i == xc || "?" == i || "#" == i))
                        for (; e.path.length > 1 && "" === e.path[0]; )
                            e.path.shift();
                    "?" == i ? (e.query = "",
                    c = jl) : "#" == i && (e.fragment = "",
                    c = Vl)
                } else
                    p += hl(i, pl);
                break;
            case Fl:
                "?" == i ? (e.query = "",
                c = jl) : "#" == i ? (e.fragment = "",
                c = Vl) : i != xc && (e.path[0] += hl(i, cl));
                break;
            case jl:
                n || "#" != i ? i != xc && ("'" == i && gl(e) ? e.query += "%27" : e.query += "#" == i ? "%23" : hl(i, cl)) : (e.fragment = "",
                c = Vl);
                break;
            case Vl:
                i != xc && (e.fragment += hl(i, ll))
            }
            l++
        }
    }, Kl = function(e) {
        var t, n, r = Oo(this, Kl, "URL"), o = arguments.length > 1 ? arguments[1] : void 0, a = String(e), s = Kc(r, {
            type: "URL"
        });
        if (void 0 !== o)
            if (o instanceof Kl)
                t = Hc(o);
            else if (n = Bl(t = {}, String(o)))
                throw TypeError(n);
        if (n = Bl(s, a, null, t))
            throw TypeError(n);
        var u = s.searchParams = new Vc
          , c = Bc(u);
        c.updateSearchParams(s.query),
        c.updateURL = function() {
            s.query = String(u) || null
        }
        ,
        i || (r.href = $l.call(r),
        r.origin = zl.call(r),
        r.protocol = Yl.call(r),
        r.username = Wl.call(r),
        r.password = Jl.call(r),
        r.host = Xl.call(r),
        r.hostname = Ql.call(r),
        r.port = Zl.call(r),
        r.pathname = ep.call(r),
        r.search = tp.call(r),
        r.searchParams = np.call(r),
        r.hash = rp.call(r))
    }, Hl = Kl.prototype, $l = function() {
        var e = Hc(this)
          , t = e.scheme
          , n = e.username
          , r = e.password
          , o = e.host
          , i = e.port
          , a = e.path
          , s = e.query
          , u = e.fragment
          , c = t + ":";
        return null !== o ? (c += "//",
        ml(e) && (c += n + (r ? ":" + r : "") + "@"),
        c += ul(o),
        null !== i && (c += ":" + i)) : "file" == t && (c += "//"),
        c += e.cannotBeABaseURL ? a[0] : a.length ? "/" + a.join("/") : "",
        null !== s && (c += "?" + s),
        null !== u && (c += "#" + u),
        c
    }, zl = function() {
        var e = Hc(this)
          , t = e.scheme
          , n = e.port;
        if ("blob" == t)
            try {
                return new URL(t.path[0]).origin
            } catch (p_) {
                return "null"
            }
        return "file" != t && gl(e) ? t + "://" + ul(e.host) + (null !== n ? ":" + n : "") : "null"
    }, Yl = function() {
        return Hc(this).scheme + ":"
    }, Wl = function() {
        return Hc(this).username
    }, Jl = function() {
        return Hc(this).password
    }, Xl = function() {
        var e = Hc(this)
          , t = e.host
          , n = e.port;
        return null === t ? "" : null === n ? ul(t) : ul(t) + ":" + n
    }, Ql = function() {
        var e = Hc(this).host;
        return null === e ? "" : ul(e)
    }, Zl = function() {
        var e = Hc(this).port;
        return null === e ? "" : String(e)
    }, ep = function() {
        var e = Hc(this)
          , t = e.path;
        return e.cannotBeABaseURL ? t[0] : t.length ? "/" + t.join("/") : ""
    }, tp = function() {
        var e = Hc(this).query;
        return e ? "?" + e : ""
    }, np = function() {
        return Hc(this).searchParams
    }, rp = function() {
        var e = Hc(this).fragment;
        return e ? "#" + e : ""
    }, op = function(e, t) {
        return {
            get: e,
            set: t,
            configurable: !0,
            enumerable: !0
        }
    };
    if (i && Gt(Hl, {
        href: op($l, (function(e) {
            var t = Hc(this)
              , n = String(e)
              , r = Bl(t, n);
            if (r)
                throw TypeError(r);
            Bc(t.searchParams).updateSearchParams(t.query)
        }
        )),
        origin: op(zl),
        protocol: op(Yl, (function(e) {
            var t = Hc(this);
            Bl(t, String(e) + ":", Cl)
        }
        )),
        username: op(Wl, (function(e) {
            var t = Hc(this)
              , n = kt(String(e));
            if (!vl(t)) {
                t.username = "";
                for (var r = 0; r < n.length; r++)
                    t.username += hl(n[r], fl)
            }
        }
        )),
        password: op(Jl, (function(e) {
            var t = Hc(this)
              , n = kt(String(e));
            if (!vl(t)) {
                t.password = "";
                for (var r = 0; r < n.length; r++)
                    t.password += hl(n[r], fl)
            }
        }
        )),
        host: op(Xl, (function(e) {
            var t = Hc(this);
            t.cannotBeABaseURL || Bl(t, String(e), Ll)
        }
        )),
        hostname: op(Ql, (function(e) {
            var t = Hc(this);
            t.cannotBeABaseURL || Bl(t, String(e), Nl)
        }
        )),
        port: op(Zl, (function(e) {
            var t = Hc(this);
            vl(t) || ("" == (e = String(e)) ? t.port = null : Bl(t, e, bl))
        }
        )),
        pathname: op(ep, (function(e) {
            var t = Hc(this);
            t.cannotBeABaseURL || (t.path = [],
            Bl(t, e + "", xl))
        }
        )),
        search: op(tp, (function(e) {
            var t = Hc(this);
            "" == (e = String(e)) ? t.query = null : ("?" == e.charAt(0) && (e = e.slice(1)),
            t.query = "",
            Bl(t, e, jl)),
            Bc(t.searchParams).updateSearchParams(t.query)
        }
        )),
        searchParams: op(np),
        hash: op(rp, (function(e) {
            var t = Hc(this);
            "" != (e = String(e)) ? ("#" == e.charAt(0) && (e = e.slice(1)),
            t.fragment = "",
            Bl(t, e, Vl)) : t.fragment = null
        }
        ))
    }),
    te(Hl, "toJSON", (function() {
        return $l.call(this)
    }
    ), {
        enumerable: !0
    }),
    te(Hl, "toString", (function() {
        return $l.call(this)
    }
    ), {
        enumerable: !0
    }),
    jc) {
        var ip = jc.createObjectURL
          , ap = jc.revokeObjectURL;
        ip && te(Kl, "createObjectURL", (function(e) {
            return ip.apply(jc, arguments)
        }
        )),
        ap && te(Kl, "revokeObjectURL", (function(e) {
            return ap.apply(jc, arguments)
        }
        ))
    }
    on(Kl, "URL"),
    we({
        global: !0,
        forced: !sc,
        sham: !i
    }, {
        URL: Kl
    });
    var sp = {
        JSON: {
            TYPE: {
                C2C: {
                    NOTICE: 1,
                    COMMON: 9,
                    EVENT: 10
                },
                GROUP: {
                    COMMON: 3,
                    TIP: 4,
                    SYSTEM: 5,
                    TIP2: 6
                },
                FRIEND: {
                    NOTICE: 7
                },
                PROFILE: {
                    NOTICE: 8
                }
            },
            SUBTYPE: {
                C2C: {
                    COMMON: 0,
                    READED: 92,
                    KICKEDOUT: 96
                },
                GROUP: {
                    COMMON: 0,
                    LOVEMESSAGE: 1,
                    TIP: 2,
                    REDPACKET: 3
                }
            },
            OPTIONS: {
                GROUP: {
                    JOIN: 1,
                    QUIT: 2,
                    KICK: 3,
                    SET_ADMIN: 4,
                    CANCEL_ADMIN: 5,
                    MODIFY_GROUP_INFO: 6,
                    MODIFY_MEMBER_INFO: 7
                }
            }
        },
        PROTOBUF: {},
        IMAGE_TYPES: {
            ORIGIN: 1,
            LARGE: 2,
            SMALL: 3
        },
        IMAGE_FORMAT: {
            JPG: 1,
            JPEG: 1,
            GIF: 2,
            PNG: 3,
            BMP: 4,
            UNKNOWN: 255
        }
    }
      , up = 1
      , cp = 2
      , lp = 3
      , pp = 4
      , fp = 5
      , hp = 7
      , dp = 8
      , gp = 9
      , mp = 10
      , vp = 15
      , yp = 255
      , _p = 2
      , Ip = 0
      , Mp = 1
      , Cp = {
        NICK: "Tag_Profile_IM_Nick",
        GENDER: "Tag_Profile_IM_Gender",
        BIRTHDAY: "Tag_Profile_IM_BirthDay",
        LOCATION: "Tag_Profile_IM_Location",
        SELFSIGNATURE: "Tag_Profile_IM_SelfSignature",
        ALLOWTYPE: "Tag_Profile_IM_AllowType",
        LANGUAGE: "Tag_Profile_IM_Language",
        AVATAR: "Tag_Profile_IM_Image",
        MESSAGESETTINGS: "Tag_Profile_IM_MsgSettings",
        ADMINFORBIDTYPE: "Tag_Profile_IM_AdminForbidType",
        LEVEL: "Tag_Profile_IM_Level",
        ROLE: "Tag_Profile_IM_Role"
    }
      , Ep = {
        UNKNOWN: "Gender_Type_Unknown",
        FEMALE: "Gender_Type_Female",
        MALE: "Gender_Type_Male"
    }
      , Sp = {
        NONE: "AdminForbid_Type_None",
        SEND_OUT: "AdminForbid_Type_SendOut"
    }
      , Tp = {
        NEED_CONFIRM: "AllowType_Type_NeedConfirm",
        ALLOW_ANY: "AllowType_Type_AllowAny",
        DENY_ANY: "AllowType_Type_DenyAny"
    }
      , Dp = function() {
        function e(t) {
            bn(this, e),
            this._imageMemoryURL = "",
            this._file = t.file,
            Ka ? this.createImageDataASURLInWXMiniApp(t.file) : this.createImageDataASURLInWeb(t.file),
            this._initImageInfoModel(),
            this.type = En.MSG_IMAGE,
            this._percent = 0,
            this.content = {
                imageFormat: t.imageFormat || sp.IMAGE_FORMAT.UNKNOWN,
                uuid: t.uuid,
                imageInfoArray: []
            },
            this.initImageInfoArray(t.imageInfoArray),
            this._defaultImage = "http://imgcache.qq.com/open/qcloud/video/act/webim-images/default.jpg",
            this._autoFixUrl()
        }
        return Gn(e, [{
            key: "_initImageInfoModel",
            value: function() {
                var e = this;
                this._ImageInfoModel = function(t) {
                    this.instanceID = Vs(9999999),
                    this.sizeType = t.type || 0,
                    this.type = 0,
                    this.size = t.size || 0,
                    this.width = t.width || 0,
                    this.height = t.height || 0,
                    this.imageUrl = t.url || "",
                    this.url = t.url || e._imageMemoryURL || e._defaultImage
                }
                ,
                this._ImageInfoModel.prototype = {
                    setSizeType: function(e) {
                        this.sizeType = e
                    },
                    setType: function(e) {
                        this.type = e
                    },
                    setImageUrl: function(e) {
                        e && (this.imageUrl = e)
                    },
                    getImageUrl: function() {
                        return this.imageUrl
                    }
                }
            }
        }, {
            key: "initImageInfoArray",
            value: function(e) {
                for (var t = 0, n = null, r = null; t <= 2; )
                    r = As(e) || As(e[t]) ? {
                        type: 0,
                        size: 0,
                        width: 0,
                        height: 0,
                        url: ""
                    } : e[t],
                    (n = new this._ImageInfoModel(r)).setSizeType(t + 1),
                    n.setType(t),
                    this.addImageInfo(n),
                    t++;
                this.updateAccessSideImageInfoArray()
            }
        }, {
            key: "updateImageInfoArray",
            value: function(e) {
                for (var t, n = this.content.imageInfoArray.length, r = 0; r < n; r++)
                    t = this.content.imageInfoArray[r],
                    e[r].size && (t.size = e[r].size),
                    e[r].url && t.setImageUrl(e[r].url),
                    e[r].width && (t.width = e[r].width),
                    e[r].height && (t.height = e[r].height)
            }
        }, {
            key: "_autoFixUrl",
            value: function() {
                for (var e = this.content.imageInfoArray.length, t = "", n = "", r = ["http", "https"], o = null, i = 0; i < e; i++)
                    this.content.imageInfoArray[i].url && "" !== (o = this.content.imageInfoArray[i]).imageUrl && (n = o.imageUrl.slice(0, o.imageUrl.indexOf("://") + 1),
                    t = o.imageUrl.slice(o.imageUrl.indexOf("://") + 1),
                    r.indexOf(n) < 0 && (n = "https:"),
                    this.content.imageInfoArray[i].setImageUrl([n, t].join("")))
            }
        }, {
            key: "updatePercent",
            value: function(e) {
                this._percent = e,
                this._percent > 1 && (this._percent = 1)
            }
        }, {
            key: "updateImageFormat",
            value: function(e) {
                this.content.imageFormat = sp.IMAGE_FORMAT[e.toUpperCase()] || sp.IMAGE_FORMAT.UNKNOWN
            }
        }, {
            key: "createImageDataASURLInWeb",
            value: function(e) {
                void 0 !== e && e.files.length > 0 && (this._imageMemoryURL = window.URL.createObjectURL(e.files[0]))
            }
        }, {
            key: "createImageDataASURLInWXMiniApp",
            value: function(e) {
                e && e.url && (this._imageMemoryURL = e.url)
            }
        }, {
            key: "replaceImageInfo",
            value: function(e, t) {
                this.content.imageInfoArray[t]instanceof this._ImageInfoModel || (this.content.imageInfoArray[t] = e)
            }
        }, {
            key: "addImageInfo",
            value: function(e) {
                this.content.imageInfoArray.length >= 3 || this.content.imageInfoArray.push(e)
            }
        }, {
            key: "updateAccessSideImageInfoArray",
            value: function() {
                var e = this.content.imageInfoArray
                  , t = e[0]
                  , n = t.width
                  , r = void 0 === n ? 0 : n
                  , o = t.height
                  , i = void 0 === o ? 0 : o;
                0 !== r && 0 !== i && (ou(e),
                Object.assign(e[2], ru({
                    originWidth: r,
                    originHeight: i,
                    min: 720
                })))
            }
        }, {
            key: "sendable",
            value: function() {
                return 0 !== this.content.imageInfoArray.length && ("" !== this.content.imageInfoArray[0].imageUrl && 0 !== this.content.imageInfoArray[0].size)
            }
        }]),
        e
    }()
      , kp = function() {
        function e(t) {
            bn(this, e),
            this.type = En.MSG_FACE,
            this.content = t || null
        }
        return Gn(e, [{
            key: "sendable",
            value: function() {
                return null !== this.content
            }
        }]),
        e
    }()
      , Op = function() {
        function e(t) {
            bn(this, e),
            this.type = En.MSG_AUDIO,
            this._percent = 0,
            this.content = {
                downloadFlag: 2,
                second: t.second,
                size: t.size,
                url: t.url,
                remoteAudioUrl: "",
                uuid: t.uuid
            }
        }
        return Gn(e, [{
            key: "updatePercent",
            value: function(e) {
                this._percent = e,
                this._percent > 1 && (this._percent = 1)
            }
        }, {
            key: "updateAudioUrl",
            value: function(e) {
                this.content.remoteAudioUrl = e
            }
        }, {
            key: "sendable",
            value: function() {
                return "" !== this.content.remoteAudioUrl
            }
        }]),
        e
    }();
    we({
        target: "Object",
        stat: !0,
        forced: !i,
        sham: !i
    }, {
        defineProperty: O.f
    });
    var Rp = {
        from: !0,
        groupID: !0,
        groupName: !0,
        to: !0
    }
      , Ap = function() {
        function e(t) {
            bn(this, e),
            this.type = En.MSG_GRP_TIP,
            this.content = {},
            this._initContent(t)
        }
        return Gn(e, [{
            key: "_initContent",
            value: function(e) {
                var t = this;
                Object.keys(e).forEach((function(n) {
                    switch (n) {
                    case "remarkInfo":
                        break;
                    case "groupProfile":
                        t.content.groupProfile = {},
                        t._initGroupProfile(e[n]);
                        break;
                    case "operatorInfo":
                    case "memberInfoList":
                        break;
                    case "msgMemberInfo":
                        t.content.memberList = e[n],
                        Object.defineProperty(t.content, "msgMemberInfo", {
                            get: function() {
                                return Es.warn("!!! 禁言的群提示消息中的 payload.msgMemberInfo 属性即将废弃，请使用 payload.memberList 属性替代。 \n", "msgMemberInfo 中的 shutupTime 属性对应更改为 memberList 中的 muteTime 属性，表示禁言时长。 \n", "参考：群提示消息 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/Message.html#.GroupTipPayload"),
                                t.content.memberList.map((function(e) {
                                    return {
                                        userID: e.userID,
                                        shutupTime: e.muteTime
                                    }
                                }
                                ))
                            }
                        });
                        break;
                    case "onlineMemberInfo":
                        break;
                    case "memberNum":
                        t.content[n] = e[n],
                        t.content.memberCount = e[n];
                        break;
                    default:
                        t.content[n] = e[n]
                    }
                }
                )),
                this.content.userIDList || (this.content.userIDList = [this.content.operatorID])
            }
        }, {
            key: "_initGroupProfile",
            value: function(e) {
                for (var t = Object.keys(e), n = 0; n < t.length; n++) {
                    var r = t[n];
                    Rp[r] && (this.content.groupProfile[r] = e[r])
                }
            }
        }]),
        e
    }()
      , wp = {
        from: !0,
        groupID: !0,
        name: !0,
        to: !0
    }
      , Lp = function() {
        function e(t) {
            bn(this, e),
            this.type = En.MSG_GRP_SYS_NOTICE,
            this.content = {},
            this._initContent(t)
        }
        return Gn(e, [{
            key: "_initContent",
            value: function(e) {
                var t = this;
                Object.keys(e).forEach((function(n) {
                    switch (n) {
                    case "memberInfoList":
                        break;
                    case "remarkInfo":
                        t.content.handleMessage = e[n];
                        break;
                    case "groupProfile":
                        t.content.groupProfile = {},
                        t._initGroupProfile(e[n]);
                        break;
                    default:
                        t.content[n] = e[n]
                    }
                }
                ))
            }
        }, {
            key: "_initGroupProfile",
            value: function(e) {
                for (var t = Object.keys(e), n = 0; n < t.length; n++) {
                    var r = t[n];
                    wp[r] && (this.content.groupProfile[r] = e[r])
                }
            }
        }]),
        e
    }()
      , Np = Math.min
      , bp = [].lastIndexOf
      , Pp = !!bp && 1 / [1].lastIndexOf(1, -0) < 0
      , Gp = at("lastIndexOf")
      , Up = lt("indexOf", {
        ACCESSORS: !0,
        1: 0
    })
      , xp = Pp || !Gp || !Up ? function(e) {
        if (Pp)
            return bp.apply(this, arguments) || 0;
        var t = g(this)
          , n = ce(t.length)
          , r = n - 1;
        for (arguments.length > 1 && (r = Np(r, se(arguments[1]))),
        r < 0 && (r = n + r); r >= 0; r--)
            if (r in t && t[r] === e)
                return r || 0;
        return -1
    }
    : bp;
    we({
        target: "Array",
        proto: !0,
        forced: xp !== [].lastIndexOf
    }, {
        lastIndexOf: xp
    });
    var qp = "https://cloud.tencent.com/document/product/"
      , Fp = "您可以在即时通信 IM 控制台的【开发辅助工具(https://console.cloud.tencent.com/im-detail/tool-usersig)】页面校验 UserSig。"
      , jp = "UserSig 非法，请使用官网提供的 API 重新生成 UserSig(".concat(qp, "269/32688)。")
      , Vp = {
        70001: "UserSig 已过期，请重新生成。建议 UserSig 有效期设置不小于24小时。",
        70002: "UserSig 长度为0，请检查传入的 UserSig 是否正确。",
        70003: jp,
        70005: jp,
        70009: "UserSig 验证失败，可能因为生成 UserSig 时混用了其他 SDKAppID 的私钥或密钥导致，请使用对应 SDKAppID 下的私钥或密钥重新生成 UserSig(".concat(qp, "269/32688)。"),
        70013: "请求中的 UserID 与生成 UserSig 时使用的 UserID 不匹配。".concat(Fp),
        70014: "请求中的 SDKAppID 与生成 UserSig 时使用的 SDKAppID 不匹配。".concat(Fp),
        70016: "密钥不存在，UserSig 验证失败，请在即时通信 IM 控制台获取密钥(".concat(qp, "269/32578#.E8.8E.B7.E5.8F.96.E5.AF.86.E9.92.A5)。"),
        70020: "SDKAppID 未找到，请在即时通信 IM 控制台确认应用信息。",
        70050: "UserSig 验证次数过于频繁。请检查 UserSig 是否正确，并于1分钟后重新验证。".concat(Fp),
        70051: "帐号被拉入黑名单。",
        70052: "UserSig 已经失效，请重新生成，再次尝试。",
        70107: "因安全原因被限制登录，请不要频繁登录。",
        70169: "请求的用户帐号不存在。",
        70114: "".concat("服务端内部超时，请稍后重试。"),
        70202: "".concat("服务端内部超时，请稍后重试。"),
        70206: "请求中批量数量不合法。",
        70402: "参数非法，请检查必填字段是否填充，或者字段的填充是否满足协议要求。",
        70403: "请求失败，需要 App 管理员权限。",
        70398: "帐号数超限。如需创建多于100个帐号，请将应用升级为专业版，具体操作指引请参见购买指引(".concat(qp, "269/32458)。"),
        70500: "".concat("服务端内部错误，请重试。"),
        71e3: "删除帐号失败。仅支持删除体验版帐号，您当前应用为专业版，暂不支持帐号删除。",
        20001: "请求包非法。",
        20002: "UserSig 或 A2 失效。",
        20003: "消息发送方或接收方 UserID 无效或不存在，请检查 UserID 是否已导入即时通信 IM。",
        20004: "网络异常，请重试。",
        20005: "".concat("服务端内部错误，请重试。"),
        20006: "触发发送".concat("单聊消息", "之前回调，App 后台返回禁止下发该消息。"),
        20007: "发送".concat("单聊消息", "，被对方拉黑，禁止发送。消息发送状态默认展示为失败，您可以登录控制台修改该场景下的消息发送状态展示结果，具体操作请参见消息保留设置(").concat(qp, "269/38656)。"),
        20009: "消息发送双方互相不是好友，禁止发送（配置".concat("单聊消息", "校验好友关系才会出现）。"),
        20010: "发送".concat("单聊消息", "，自己不是对方的好友（单向关系），禁止发送。"),
        20011: "发送".concat("单聊消息", "，对方不是自己的好友（单向关系），禁止发送。"),
        20012: "发送方被禁言，该条消息被禁止发送。",
        20016: "消息撤回超过了时间限制（默认2分钟）。",
        20018: "删除漫游内部错误。",
        90001: "JSON 格式解析失败，请检查请求包是否符合 JSON 规范。",
        90002: "".concat("JSON 格式请求包体", "中 MsgBody 不符合消息格式描述，或者 MsgBody 不是 Array 类型，请参考 TIMMsgElement 对象的定义(").concat(qp, "269/2720#.E6.B6.88.E6.81.AF.E5.85.83.E7.B4.A0-timmsgelement)。"),
        90003: "".concat("JSON 格式请求包体", "中缺少 To_Account 字段或者 To_Account 帐号不存在。"),
        90005: "".concat("JSON 格式请求包体", "中缺少 MsgRandom 字段或者 MsgRandom 字段不是 Integer 类型。"),
        90006: "".concat("JSON 格式请求包体", "中缺少 MsgTimeStamp 字段或者 MsgTimeStamp 字段不是 Integer 类型。"),
        90007: "".concat("JSON 格式请求包体", "中 MsgBody 类型不是 Array 类型，请将其修改为 Array 类型。"),
        90008: "".concat("JSON 格式请求包体", "中缺少 From_Account 字段或者 From_Account 帐号不存在。"),
        90009: "请求需要 App 管理员权限。",
        90010: "".concat("JSON 格式请求包体", "不符合消息格式描述，请参考 TIMMsgElement 对象的定义(").concat(qp, "269/2720#.E6.B6.88.E6.81.AF.E5.85.83.E7.B4.A0-timmsgelement)。"),
        90011: "批量发消息目标帐号超过500，请减少 To_Account 中目标帐号数量。",
        90012: "To_Account 没有注册或不存在，请确认 To_Account 是否导入即时通信 IM 或者是否拼写错误。",
        90026: "消息离线存储时间错误（最多不能超过7天）。",
        90031: "".concat("JSON 格式请求包体", "中 SyncOtherMachine 字段不是 Integer 类型。"),
        90044: "".concat("JSON 格式请求包体", "中 MsgLifeTime 字段不是 Integer 类型。"),
        90048: "请求的用户帐号不存在。",
        90054: "撤回请求中的 MsgKey 不合法。",
        90994: "".concat("服务端内部错误，请重试。"),
        90995: "".concat("服务端内部错误，请重试。"),
        91e3: "".concat("服务端内部错误，请重试。"),
        90992: "".concat("服务端内部错误，请重试。", "如果所有请求都返回该错误码，且 App 配置了第三方回调，请检查 App 服务端是否正常向即时通信 IM 后台服务端返回回调结果。"),
        93e3: "JSON 数据包超长，消息包体请不要超过8k。",
        91101: "Web 端长轮询被踢（Web 端同时在线实例个数超出限制）。",
        10002: "".concat("服务端内部错误，请重试。"),
        10003: "请求中的接口名称错误，请核对接口名称并重试。",
        10004: "参数非法，请根据错误描述检查请求是否正确。",
        10005: "请求包体中携带的帐号数量过多。",
        10006: "操作频率限制，请尝试降低调用的频率。",
        10007: "操作权限不足，例如 Work ".concat("群组", "中普通成员尝试执行踢人操作，但只有 App 管理员才有权限。"),
        10008: "请求非法，可能是请求中携带的签名信息验证不正确，请再次尝试。",
        10009: "该群不允许群主主动退出。",
        10010: "".concat("群组", "不存在，或者曾经存在过，但是目前已经被解散。"),
        10011: "解析 JSON 包体失败，请检查包体的格式是否符合 JSON 格式。",
        10012: "发起操作的 UserID 非法，请检查发起操作的用户 UserID 是否填写正确。",
        10013: "被邀请加入的用户已经是群成员。",
        10014: "群已满员，无法将请求中的用户加入".concat("群组", "，如果是批量加人，可以尝试减少加入用户的数量。"),
        10015: "找不到指定 ID 的".concat("群组", "。"),
        10016: "App 后台通过第三方回调拒绝本次操作。",
        10017: "因被禁言而不能发送消息，请检查发送者是否被设置禁言。",
        10018: "应答包长度超过最大包长（1MB），请求的内容过多，请尝试减少单次请求的数据量。",
        10019: "请求的用户帐号不存在。",
        10021: "".concat("群组", " ID 已被使用，请选择其他的").concat("群组", " ID。"),
        10023: "发消息的频率超限，请延长两次发消息时间的间隔。",
        10024: "此邀请或者申请请求已经被处理。",
        10025: "".concat("群组", " ID 已被使用，并且操作者为群主，可以直接使用。"),
        10026: "该 SDKAppID 请求的命令字已被禁用。",
        10030: "请求撤回的消息不存在。",
        10031: "消息撤回超过了时间限制（默认2分钟）。",
        10032: "请求撤回的消息不支持撤回操作。",
        10033: "".concat("群组", "类型不支持消息撤回操作。"),
        10034: "该消息类型不支持删除操作。",
        10035: "直播群和在线成员广播大群不支持删除消息。",
        10036: "直播群创建数量超过了限制，请参考价格说明(".concat(qp, "269/11673)购买预付费套餐“IM直播群”。"),
        10037: "单个用户可创建和加入的".concat("群组", "数量超过了限制，请参考价格说明(").concat(qp, "269/11673)购买或升级预付费套餐“单人可创建与加入").concat("群组", "数”。"),
        10038: "群成员数量超过限制，请参考价格说明(".concat(qp, "269/11673)购买或升级预付费套餐“扩展群人数上限”。"),
        10041: "该应用（SDKAppID）已配置不支持群消息撤回。"
    }
      , Bp = function(e) {
        Fn(n, e);
        var t = Wn(n);
        function n(e) {
            var r;
            return bn(this, n),
            (r = t.call(this)).code = e.code,
            r.message = Vp[e.code] || e.message,
            r.data = e.data || {},
            r
        }
        return n
    }(Hn(Error))
      , Kp = {
        NO_SDKAPPID: 2e3,
        NO_ACCOUNT_TYPE: 2001,
        NO_IDENTIFIER: 2002,
        NO_USERSIG: 2003,
        NO_TINYID: 2022,
        NO_A2KEY: 2023,
        COS_UNDETECTED: 2040,
        MESSAGE_SEND_FAIL: 2100,
        MESSAGE_LIST_CONSTRUCTOR_NEED_OPTIONS: 2103,
        MESSAGE_SEND_NEED_MESSAGE_INSTANCE: 2105,
        MESSAGE_SEND_INVALID_CONVERSATION_TYPE: 2106,
        MESSAGE_FILE_IS_EMPTY: 2108,
        MESSAGE_ONPROGRESS_FUNCTION_ERROR: 2109,
        MESSAGE_REVOKE_FAIL: 2110,
        MESSAGE_IMAGE_SELECT_FILE_FIRST: 2251,
        MESSAGE_IMAGE_TYPES_LIMIT: 2252,
        MESSAGE_IMAGE_SIZE_LIMIT: 2253,
        MESSAGE_AUDIO_UPLOAD_FAIL: 2300,
        MESSAGE_AUDIO_SIZE_LIMIT: 2301,
        MESSAGE_VIDEO_UPLOAD_FAIL: 2350,
        MESSAGE_VIDEO_SIZE_LIMIT: 2351,
        MESSAGE_VIDEO_TYPES_LIMIT: 2352,
        MESSAGE_FILE_UPLOAD_FAIL: 2400,
        MESSAGE_FILE_SELECT_FILE_FIRST: 2401,
        MESSAGE_FILE_SIZE_LIMIT: 2402,
        MESSAGE_FILE_URL_IS_EMPTY: 2403,
        CONVERSATION_NOT_FOUND: 2500,
        USER_OR_GROUP_NOT_FOUND: 2501,
        CONVERSATION_UN_RECORDED_TYPE: 2502,
        ILLEGAL_GROUP_TYPE: 2600,
        CANNOT_JOIN_WORK: 2601,
        CANNOT_CHANGE_OWNER_IN_AVCHATROOM: 2620,
        CANNOT_CHANGE_OWNER_TO_SELF: 2621,
        CANNOT_DISMISS_Work: 2622,
        JOIN_GROUP_FAIL: 2660,
        CANNOT_ADD_MEMBER_IN_AVCHATROOM: 2661,
        CANNOT_JOIN_NON_AVCHATROOM_WITHOUT_LOGIN: 2662,
        CANNOT_KICK_MEMBER_IN_AVCHATROOM: 2680,
        NOT_OWNER: 2681,
        CANNOT_SET_MEMBER_ROLE_IN_WORK_AND_AVCHATROOM: 2682,
        INVALID_MEMBER_ROLE: 2683,
        CANNOT_SET_SELF_MEMBER_ROLE: 2684,
        CANNOT_MUTE_SELF: 2685,
        DEL_FRIEND_INVALID_PARAM: 2700,
        UPDATE_PROFILE_INVALID_PARAM: 2721,
        UPDATE_PROFILE_NO_KEY: 2722,
        ADD_BLACKLIST_INVALID_PARAM: 2740,
        DEL_BLACKLIST_INVALID_PARAM: 2741,
        CANNOT_ADD_SELF_TO_BLACKLIST: 2742,
        NETWORK_ERROR: 2800,
        NETWORK_TIMEOUT: 2801,
        NETWORK_BASE_OPTIONS_NO_URL: 2802,
        NETWORK_UNDEFINED_SERVER_NAME: 2803,
        NETWORK_PACKAGE_UNDEFINED: 2804,
        NO_NETWORK: 2805,
        CONVERTOR_IRREGULAR_PARAMS: 2900,
        NOTICE_RUNLOOP_UNEXPECTED_CONDITION: 2901,
        NOTICE_RUNLOOP_OFFSET_LOST: 2902,
        UNCAUGHT_ERROR: 2903,
        GET_LONGPOLL_ID_FAILED: 2904,
        INVALID_OPERATION: 2905,
        SDK_IS_NOT_READY: 2999,
        LONG_POLL_KICK_OUT: 91101,
        MESSAGE_A2KEY_EXPIRED: 20002,
        ACCOUNT_A2KEY_EXPIRED: 70001,
        LONG_POLL_API_PARAM_ERROR: 90001
    }
      , Hp = "无 SDKAppID"
      , $p = "无 accountType"
      , zp = "无 userID"
      , Yp = "无 userSig"
      , Wp = "无 tinyID"
      , Jp = "无 a2key"
      , Xp = "未检测到 COS 上传插件"
      , Qp = "消息发送失败"
      , Zp = "MessageController.constructor() 需要参数 options"
      , ef = "需要 Message 的实例"
      , tf = 'Message.conversationType 只能为 "C2C" 或 "GROUP"'
      , nf = "无法发送空文件"
      , rf = "回调函数运行时遇到错误，请检查接入侧代码"
      , of = "消息撤回失败"
      , af = "请先选择一个图片"
      , sf = "只允许上传 jpg png jpeg gif bmp格式的图片"
      , uf = "图片大小超过20M，无法发送"
      , cf = "语音上传失败"
      , lf = "语音大小大于20M，无法发送"
      , pf = "视频上传失败"
      , ff = "视频大小超过100M，无法发送"
      , hf = "只允许上传 mp4 格式的视频"
      , df = "文件上传失败"
      , gf = "请先选择一个文件"
      , mf = "文件大小超过100M，无法发送 "
      , vf = "缺少必要的参数文件 URL"
      , yf = "没有找到相应的会话，请检查传入参数"
      , _f = "没有找到相应的用户或群组，请检查传入参数"
      , If = "未记录的会话类型"
      , Mf = "非法的群类型，请检查传入参数"
      , Cf = "不能加入 Work 类型的群组"
      , Ef = "AVChatRoom 类型的群组不能转让群主"
      , Sf = "不能把群主转让给自己"
      , Tf = "不能解散 Work 类型的群组"
      , Df = "加群失败，请检查传入参数或重试"
      , kf = "AVChatRoom 类型的群不支持邀请群成员"
      , Of = "非 AVChatRoom 类型的群组不允许匿名加群，请先登录后再加群"
      , Rf = "不能在 AVChatRoom 类型的群组踢人"
      , Af = "你不是群主，只有群主才有权限操作"
      , wf = "不能在 Work / AVChatRoom 类型的群中设置群成员身份"
      , Lf = "不合法的群成员身份，请检查传入参数"
      , Nf = "不能设置自己的群成员身份，请检查传入参数"
      , bf = "不能将自己禁言，请检查传入参数"
      , Pf = "传入 deleteFriend 接口的参数无效"
      , Gf = "传入 updateMyProfile 接口的参数无效"
      , Uf = "updateMyProfile 无标配资料字段或自定义资料字段"
      , xf = "传入 addToBlacklist 接口的参数无效"
      , qf = "传入 removeFromBlacklist 接口的参数无效"
      , Ff = "不能拉黑自己"
      , jf = "网络层初始化错误，缺少 URL 参数"
      , Vf = "打包错误，未定义的 serverName"
      , Bf = "未定义的 packageConfig"
      , Kf = "未连接到网络"
      , Hf = "不规范的参数名称"
      , $f = "意料外的通知条件"
      , zf = "_syncOffset 丢失"
      , Yf = "获取 longpolling id 失败"
      , Wf = "无效操作，如调用了未定义或者未实现的方法等"
      , Jf = "接口需要 SDK 处于 ready 状态后才能调用"
      , Xf = ["jpg", "jpeg", "gif", "png", "bmp"]
      , Qf = ["mp4"]
      , Zf = function() {
        function e(t) {
            bn(this, e);
            var n = this._check(t);
            if (n instanceof Bp)
                throw n;
            this.type = En.MSG_FILE,
            this._percent = 0;
            var r = this._getFileInfo(t);
            this.content = {
                downloadFlag: 2,
                fileUrl: t.url || "",
                uuid: t.uuid,
                fileName: r.name || "",
                fileSize: r.size || 0
            }
        }
        return Gn(e, [{
            key: "_getFileInfo",
            value: function(e) {
                if (e.fileName && e.fileSize)
                    return {
                        size: e.fileSize,
                        name: e.fileName
                    };
                if (Ka)
                    return {};
                var t = e.file.files[0];
                return {
                    size: t.size,
                    name: t.name,
                    type: t.type.slice(t.type.lastIndexOf("/") + 1).toLowerCase()
                }
            }
        }, {
            key: "updatePercent",
            value: function(e) {
                this._percent = e,
                this._percent > 1 && (this._percent = 1)
            }
        }, {
            key: "updateFileUrl",
            value: function(e) {
                this.content.fileUrl = e
            }
        }, {
            key: "_check",
            value: function(e) {
                if (e.size > 104857600)
                    return new Bp({
                        code: Kp.MESSAGE_FILE_SIZE_LIMIT,
                        message: "".concat(mf, ": ").concat(104857600, " bytes")
                    })
            }
        }, {
            key: "sendable",
            value: function() {
                return "" !== this.content.fileUrl && ("" !== this.content.fileName && 0 !== this.content.fileSize)
            }
        }]),
        e
    }()
      , eh = function() {
        function e(t) {
            bn(this, e),
            this.type = En.MSG_CUSTOM,
            this.content = {
                data: t.data || "",
                description: t.description || "",
                extension: t.extension || ""
            }
        }
        return Gn(e, [{
            key: "setData",
            value: function(e) {
                return this.content.data = e,
                this
            }
        }, {
            key: "setDescription",
            value: function(e) {
                return this.content.description = e,
                this
            }
        }, {
            key: "setExtension",
            value: function(e) {
                return this.content.extension = e,
                this
            }
        }, {
            key: "sendable",
            value: function() {
                return 0 !== this.content.data.length || 0 !== this.content.description.length || 0 !== this.content.extension.length
            }
        }]),
        e
    }()
      , th = function() {
        function e(t) {
            bn(this, e),
            this.type = En.MSG_VIDEO,
            this._percent = 0,
            this.content = {
                remoteVideoUrl: t.remoteVideoUrl,
                videoFormat: t.videoFormat,
                videoSecond: parseInt(t.videoSecond, 10),
                videoSize: t.videoSize,
                videoUrl: t.videoUrl,
                videoDownloadFlag: 2,
                videoUUID: t.videoUUID,
                thumbUUID: t.thumbUUID,
                thumbFormat: t.thumbFormat,
                thumbWidth: t.thumbWidth,
                thumbHeight: t.thumbHeight,
                thumbSize: t.thumbSize,
                thumbDownloadFlag: 2,
                thumbUrl: t.thumbUrl
            }
        }
        return Gn(e, [{
            key: "updatePercent",
            value: function(e) {
                this._percent = e,
                this._percent > 1 && (this._percent = 1)
            }
        }, {
            key: "updateVideoUrl",
            value: function(e) {
                e && (this.content.remoteVideoUrl = e)
            }
        }, {
            key: "sendable",
            value: function() {
                return "" !== this.content.remoteVideoUrl
            }
        }]),
        e
    }()
      , nh = function e(t) {
        bn(this, e),
        this.type = En.MSG_GEO,
        this.content = t
    }
      , rh = {
        1: En.MSG_PRIORITY_HIGH,
        2: En.MSG_PRIORITY_NORMAL,
        3: En.MSG_PRIORITY_LOW,
        4: En.MSG_PRIORITY_LOWEST
    }
      , oh = function() {
        function e(t) {
            bn(this, e),
            this.ID = "",
            this.conversationID = t.conversationID || null,
            this.conversationType = t.conversationType || En.CONV_C2C,
            this.conversationSubType = t.conversationSubType,
            this.time = t.time || Math.ceil(Date.now() / 1e3),
            this.sequence = t.sequence || 0,
            this.clientSequence = t.clientSequence || t.sequence || 0,
            this.random = t.random || Vs(),
            this.priority = this._computePriority(t.priority),
            this.nick = "",
            this.avatar = "",
            this.isPeerRead = !1,
            this._elements = [],
            this.isPlaceMessage = t.isPlaceMessage || 0,
            this.isRevoked = 2 === t.isPlaceMessage || 8 === t.msgFlagBits,
            this.geo = {},
            this.from = t.from || null,
            this.to = t.to || null,
            this.flow = "",
            this.isSystemMessage = t.isSystemMessage || !1,
            this.protocol = t.protocol || "JSON",
            this.isResend = !1,
            this.isRead = !1,
            this.status = t.status || ec.SUCCESS,
            this._onlineOnlyFlag = !1,
            this.reInitialize(t.currentUser),
            this.extractGroupInfo(t.groupProfile || null)
        }
        return Gn(e, [{
            key: "getElements",
            value: function() {
                return this._elements
            }
        }, {
            key: "extractGroupInfo",
            value: function(e) {
                null !== e && (Ds(e.fromAccountNick) && (this.nick = e.fromAccountNick),
                Ds(e.fromAccountHeadurl) && (this.avatar = e.fromAccountHeadurl))
            }
        }, {
            key: "_initProxy",
            value: function() {
                this.payload = this._elements[0].content,
                this.type = this._elements[0].type
            }
        }, {
            key: "reInitialize",
            value: function(e) {
                e && (this.status = this.from ? ec.SUCCESS : ec.UNSEND,
                !this.from && (this.from = e)),
                this._initFlow(e),
                this._initielizeSequence(e),
                this._concactConversationID(e),
                this.generateMessageID(e)
            }
        }, {
            key: "isSendable",
            value: function() {
                return 0 !== this._elements.length && ("function" != typeof this._elements[0].sendable ? (Es.warn("".concat(this._elements[0].type, ' need "boolean : sendable()" method')),
                !1) : this._elements[0].sendable())
            }
        }, {
            key: "_initTo",
            value: function(e) {
                this.conversationType === En.CONV_GROUP && (this.to = e.groupID)
            }
        }, {
            key: "_initielizeSequence",
            value: function(e) {
                0 === this.clientSequence && e && (this.clientSequence = function(e) {
                    if (!e)
                        return Es.error("autoincrementIndex(string: key) need key parameter"),
                        !1;
                    if (void 0 === $s[e]) {
                        var t = new Date
                          , n = "3".concat(t.getHours()).slice(-2)
                          , r = "0".concat(t.getMinutes()).slice(-2)
                          , o = "0".concat(t.getSeconds()).slice(-2);
                        $s[e] = parseInt([n, r, o, "0001"].join("")),
                        n = null,
                        r = null,
                        o = null,
                        Es.warn("utils.autoincrementIndex() create new sequence : ".concat(e, " = ").concat($s[e]))
                    }
                    return $s[e]++
                }(e)),
                0 === this.sequence && this.conversationType === En.CONV_C2C && (this.sequence = this.clientSequence)
            }
        }, {
            key: "generateMessageID",
            value: function(e) {
                var t = e === this.from ? 1 : 0
                  , n = this.sequence > 0 ? this.sequence : this.clientSequence;
                this.ID = "".concat(this.conversationID, "-").concat(n, "-").concat(this.random, "-").concat(t)
            }
        }, {
            key: "_initFlow",
            value: function(e) {
                "" !== e && (e === this.from ? (this.flow = "out",
                this.isRead = !0) : this.flow = "in")
            }
        }, {
            key: "_concactConversationID",
            value: function(e) {
                var t = this.to
                  , n = ""
                  , r = this.conversationType;
                r !== En.CONV_SYSTEM ? (n = r === En.CONV_C2C ? e === this.from ? t : this.from : this.to,
                this.conversationID = "".concat(r).concat(n)) : this.conversationID = En.CONV_SYSTEM
            }
        }, {
            key: "isElement",
            value: function(e) {
                return e instanceof nc || e instanceof Dp || e instanceof kp || e instanceof Op || e instanceof Zf || e instanceof th || e instanceof Ap || e instanceof Lp || e instanceof eh || e instanceof nh
            }
        }, {
            key: "setElement",
            value: function(e) {
                var t = this;
                if (this.isElement(e))
                    return this._elements = [e],
                    void this._initProxy();
                var n = function(e) {
                    switch (e.type) {
                    case En.MSG_TEXT:
                        t.setTextElement(e.content);
                        break;
                    case En.MSG_IMAGE:
                        t.setImageElement(e.content);
                        break;
                    case En.MSG_AUDIO:
                        t.setAudioElement(e.content);
                        break;
                    case En.MSG_FILE:
                        t.setFileElement(e.content);
                        break;
                    case En.MSG_VIDEO:
                        t.setVideoElement(e.content);
                        break;
                    case En.MSG_CUSTOM:
                        t.setCustomElement(e.content);
                        break;
                    case En.MSG_GEO:
                        t.setGEOElement(e.content);
                        break;
                    case En.MSG_GRP_TIP:
                        t.setGroupTipElement(e.content);
                        break;
                    case En.MSG_GRP_SYS_NOTICE:
                        t.setGroupSystemNoticeElement(e.content);
                        break;
                    case En.MSG_FACE:
                        t.setFaceElement(e.content);
                        break;
                    default:
                        Es.warn(e.type, e.content, "no operation......")
                    }
                };
                if (Array.isArray(e))
                    for (var r = 0; r < e.length; r++)
                        n(e[r]);
                else
                    n(e);
                this._initProxy()
            }
        }, {
            key: "setTextElement",
            value: function(e) {
                var t = "string" == typeof e ? e : e.text
                  , n = new nc({
                    text: t
                });
                this._elements.push(n)
            }
        }, {
            key: "setImageElement",
            value: function(e) {
                var t = new Dp(e);
                this._elements.push(t)
            }
        }, {
            key: "setAudioElement",
            value: function(e) {
                var t = new Op(e);
                this._elements.push(t)
            }
        }, {
            key: "setFileElement",
            value: function(e) {
                var t = new Zf(e);
                this._elements.push(t)
            }
        }, {
            key: "setVideoElement",
            value: function(e) {
                var t = new th(e);
                this._elements.push(t)
            }
        }, {
            key: "setGEOElement",
            value: function(e) {
                var t = new nh(e);
                this._elements.push(t)
            }
        }, {
            key: "setCustomElement",
            value: function(e) {
                var t = new eh(e);
                this._elements.push(t)
            }
        }, {
            key: "setGroupTipElement",
            value: function(e) {
                var t = {}
                  , n = e.operationType;
                au(e.memberInfoList) || n !== En.GRP_TIP_MBR_JOIN && n !== En.GRP_TIP_MBR_KICKED_OUT ? e.operatorInfo && (t = e.operatorInfo) : t = e.memberInfoList[0];
                var r = t
                  , o = r.nick
                  , i = r.avatar;
                Ds(o) && (this.nick = o),
                Ds(i) && (this.avatar = i);
                var a = new Ap(e);
                this._elements.push(a)
            }
        }, {
            key: "setGroupSystemNoticeElement",
            value: function(e) {
                var t = new Lp(e);
                this._elements.push(t)
            }
        }, {
            key: "setFaceElement",
            value: function(e) {
                var t = new kp(e);
                this._elements.push(t)
            }
        }, {
            key: "setIsRead",
            value: function(e) {
                this.isRead = e
            }
        }, {
            key: "setOnlineOnlyFlag",
            value: function(e) {
                this._onlineOnlyFlag = e
            }
        }, {
            key: "getOnlineOnlyFlag",
            value: function() {
                return this._onlineOnlyFlag
            }
        }, {
            key: "_computePriority",
            value: function(e) {
                if (As(e))
                    return En.MSG_PRIORITY_NORMAL;
                if (Ds(e) && -1 !== Object.values(rh).indexOf(e))
                    return e;
                if (Ts(e)) {
                    var t = "" + e;
                    if (-1 !== Object.keys(rh).indexOf(t))
                        return rh[t]
                }
                return En.MSG_PRIORITY_NORMAL
            }
        }, {
            key: "elements",
            get: function() {
                return Es.warn("！！！Message 实例的 elements 属性即将废弃，请尽快修改。使用 type 和 payload 属性处理单条消息，兼容组合消息使用 _elements 属性！！！"),
                this._elements
            }
        }]),
        e
    }()
      , ih = function(e) {
        return !!e && (!!(function(e) {
            return Ds(e) && e.slice(0, 3) === En.CONV_C2C
        }(e) || function(e) {
            return Ds(e) && e.slice(0, 5) === En.CONV_GROUP
        }(e) || eu(e)) || (console.warn("非法的会话 ID:".concat(e, "。会话 ID 组成方式：C2C + userID（单聊）GROUP + groupID（群聊）@TIM#SYSTEM（系统通知会话）")),
        !1))
    }
      , ah = "请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#"
      , sh = function(e) {
        return e.param ? "".concat(e.api, " ").concat(e.param, " ").concat(e.desc, "。").concat(ah).concat(e.api) : "".concat(e.api, " ").concat(e.desc, "。").concat(ah).concat(e.api)
    }
      , uh = {
        type: "String",
        required: !0
    }
      , ch = {
        type: "Array",
        required: !0
    }
      , lh = {
        type: "Object",
        required: !0
    }
      , ph = {
        login: {
            userID: uh,
            userSig: uh
        },
        addToBlacklist: {
            userIDList: ch
        },
        on: [{
            name: "eventName",
            type: "String",
            validator: function(e) {
                return "string" == typeof e && 0 !== e.length || (console.warn(sh({
                    api: "on",
                    param: "eventName",
                    desc: "类型必须为 String，且不能为空"
                })),
                !1)
            }
        }, {
            name: "handler",
            type: "Function",
            validator: function(e) {
                return "function" != typeof e ? (console.warn(sh({
                    api: "on",
                    param: "handler",
                    desc: "参数必须为 Function"
                })),
                !1) : ("" === e.name && console.warn("on 接口的 handler 参数推荐使用具名函数。具名函数可以使用 off 接口取消订阅，匿名函数无法取消订阅。"),
                !0)
            }
        }],
        once: [{
            name: "eventName",
            type: "String",
            validator: function(e) {
                return "string" == typeof e && 0 !== e.length || (console.warn(sh({
                    api: "once",
                    param: "eventName",
                    desc: "类型必须为 String，且不能为空"
                })),
                !1)
            }
        }, {
            name: "handler",
            type: "Function",
            validator: function(e) {
                return "function" != typeof e ? (console.warn(sh({
                    api: "once",
                    param: "handler",
                    desc: "参数必须为 Function"
                })),
                !1) : ("" === e.name && console.warn("once 接口的 handler 参数推荐使用具名函数。"),
                !0)
            }
        }],
        off: [{
            name: "eventName",
            type: "String",
            validator: function(e) {
                return "string" == typeof e && 0 !== e.length || (console.warn(sh({
                    api: "off",
                    param: "eventName",
                    desc: "类型必须为 String，且不能为空"
                })),
                !1)
            }
        }, {
            name: "handler",
            type: "Function",
            validator: function(e) {
                return "function" != typeof e ? (console.warn(sh({
                    api: "off",
                    param: "handler",
                    desc: "参数必须为 Function"
                })),
                !1) : ("" === e.name && console.warn("off 接口无法为匿名函数取消监听事件。"),
                !0)
            }
        }],
        sendMessage: [qn({
            name: "message"
        }, lh)],
        getMessageList: {
            conversationID: qn(qn({}, uh), {}, {
                validator: function(e) {
                    return ih(e)
                }
            }),
            nextReqMessageID: {
                type: "String"
            },
            count: {
                type: "Number",
                validator: function(e) {
                    return !(!As(e) && !/^[1-9][0-9]*$/.test(e)) || (console.warn(sh({
                        api: "getMessageList",
                        param: "count",
                        desc: "必须为正整数"
                    })),
                    !1)
                }
            }
        },
        setMessageRead: {
            conversationID: qn(qn({}, uh), {}, {
                validator: function(e) {
                    return ih(e)
                }
            })
        },
        getConversationProfile: [qn(qn({
            name: "conversationID"
        }, uh), {}, {
            validator: function(e) {
                return ih(e)
            }
        })],
        deleteConversation: [qn(qn({
            name: "conversationID"
        }, uh), {}, {
            validator: function(e) {
                return ih(e)
            }
        })],
        getGroupList: {
            groupProfileFilter: {
                type: "Array"
            }
        },
        getGroupProfile: {
            groupID: uh,
            groupCustomFieldFilter: {
                type: "Array"
            },
            memberCustomFieldFilter: {
                type: "Array"
            }
        },
        getGroupProfileAdvance: {
            groupIDList: ch
        },
        createGroup: {
            name: uh
        },
        joinGroup: {
            groupID: uh,
            type: {
                type: "String"
            },
            applyMessage: {
                type: "String"
            }
        },
        quitGroup: [qn({
            name: "groupID"
        }, uh)],
        handleApplication: {
            message: lh,
            handleAction: uh,
            handleMessage: {
                type: "String"
            }
        },
        changeGroupOwner: {
            groupID: uh,
            newOwnerID: uh
        },
        updateGroupProfile: {
            groupID: uh,
            muteAllMembers: {
                type: "Boolean"
            }
        },
        dismissGroup: [qn({
            name: "groupID"
        }, uh)],
        searchGroupByID: [qn({
            name: "groupID"
        }, uh)],
        getGroupMemberList: {
            groupID: uh,
            offset: {
                type: "Number"
            },
            count: {
                type: "Number"
            }
        },
        getGroupMemberProfile: {
            groupID: uh,
            userIDList: ch,
            memberCustomFieldFilter: {
                type: "Array"
            }
        },
        addGroupMemeber: {
            groupID: uh,
            userIDList: ch
        },
        setGroupMemberRole: {
            groupID: uh,
            userID: uh,
            role: uh
        },
        setGroupMemberMuteTime: {
            groupID: uh,
            userID: uh,
            muteTime: {
                type: "Number",
                validator: function(e) {
                    return e >= 0
                }
            }
        },
        setGroupMemberNameCard: {
            groupID: uh,
            userID: {
                type: "String"
            },
            nameCard: qn(qn({}, uh), {}, {
                validator: function(e) {
                    return !0 !== /^\s+$/.test(e)
                }
            })
        },
        setMessageRemindType: {
            groupID: uh,
            messageRemindType: uh
        },
        setGroupMemberCustomField: {
            groupID: uh,
            userID: {
                type: "String"
            },
            memberCustomField: ch
        },
        deleteGroupMember: {
            groupID: uh
        },
        createTextMessage: {
            to: uh,
            conversationType: uh,
            payload: qn(qn({}, lh), {}, {
                validator: function(e) {
                    return Os(e) ? Ds(e.text) ? 0 !== e.text.length || (console.warn(sh({
                        api: "createTextMessage",
                        desc: "消息内容不能为空"
                    })),
                    !1) : (console.warn(sh({
                        api: "createTextMessage",
                        param: "payload.text",
                        desc: "类型必须为 String"
                    })),
                    !1) : (console.warn(sh({
                        api: "createTextMessage",
                        param: "payload",
                        desc: "类型必须为 plain object"
                    })),
                    !1)
                }
            })
        },
        createCustomMessage: {
            to: uh,
            conversationType: uh,
            payload: qn(qn({}, lh), {}, {
                validator: function(e) {
                    return Os(e) ? e.data && !Ds(e.data) ? (console.warn(sh({
                        api: "createCustomMessage",
                        param: "payload.data",
                        desc: "类型必须为 String"
                    })),
                    !1) : e.description && !Ds(e.description) ? (console.warn(sh({
                        api: "createCustomMessage",
                        param: "payload.description",
                        desc: "类型必须为 String"
                    })),
                    !1) : !(e.extension && !Ds(e.extension)) || (console.warn(sh({
                        api: "createCustomMessage",
                        param: "payload.extension",
                        desc: "类型必须为 String"
                    })),
                    !1) : (console.warn(sh({
                        api: "createCustomMessage",
                        param: "payload",
                        desc: "类型必须为 plain object"
                    })),
                    !1)
                }
            })
        },
        createImageMessage: {
            to: uh,
            conversationType: uh,
            payload: qn(qn({}, lh), {}, {
                validator: function(e) {
                    if (!Os(e))
                        return console.warn(sh({
                            api: "createImageMessage",
                            param: "payload",
                            desc: "类型必须为 plain object"
                        })),
                        !1;
                    if (As(e.file))
                        return console.warn(sh({
                            api: "createImageMessage",
                            param: "payload.file",
                            desc: "不能为 undefined"
                        })),
                        !1;
                    if (xa) {
                        if (!(e.file instanceof HTMLInputElement || Ss(e.file)))
                            return console.warn(sh({
                                api: "createImageMessage",
                                param: "payload.file",
                                desc: "类型必须是 HTMLInputElement 或 File"
                            })),
                            !1;
                        if (e.file instanceof HTMLInputElement && 0 === e.file.files.length)
                            return console.warn(sh({
                                api: "createImageMessage",
                                param: "payload.file",
                                desc: "您没有选择文件，无法发送"
                            })),
                            !1
                    }
                    return !0
                },
                onProgress: {
                    type: "Function",
                    required: !1,
                    validator: function(e) {
                        return As(e) && console.warn(sh({
                            api: "createImageMessage",
                            desc: "没有 onProgress 回调，您将无法获取上传进度"
                        })),
                        !0
                    }
                }
            })
        },
        createAudioMessage: {
            to: uh,
            conversationType: uh,
            payload: qn(qn({}, lh), {}, {
                validator: function(e) {
                    return !!Os(e) || (console.warn(sh({
                        api: "createAudioMessage",
                        param: "payload",
                        desc: "类型必须为 plain object"
                    })),
                    !1)
                }
            }),
            onProgress: {
                type: "Function",
                required: !1,
                validator: function(e) {
                    return As(e) && console.warn(sh({
                        api: "createAudioMessage",
                        desc: "没有 onProgress 回调，您将无法获取上传进度"
                    })),
                    !0
                }
            }
        },
        createVideoMessage: {
            to: uh,
            conversationType: uh,
            payload: qn(qn({}, lh), {}, {
                validator: function(e) {
                    if (!Os(e))
                        return console.warn(sh({
                            api: "createVideoMessage",
                            param: "payload",
                            desc: "类型必须为 plain object"
                        })),
                        !1;
                    if (As(e.file))
                        return console.warn(sh({
                            api: "createVideoMessage",
                            param: "payload.file",
                            desc: "不能为 undefined"
                        })),
                        !1;
                    if (xa) {
                        if (!(e.file instanceof HTMLInputElement || Ss(e.file)))
                            return console.warn(sh({
                                api: "createVideoMessage",
                                param: "payload.file",
                                desc: "类型必须是 HTMLInputElement 或 File"
                            })),
                            !1;
                        if (e.file instanceof HTMLInputElement && 0 === e.file.files.length)
                            return console.warn(sh({
                                api: "createVideoMessage",
                                param: "payload.file",
                                desc: "您没有选择文件，无法发送"
                            })),
                            !1
                    }
                    return !0
                }
            }),
            onProgress: {
                type: "Function",
                required: !1,
                validator: function(e) {
                    return As(e) && console.warn(sh({
                        api: "createVideoMessage",
                        desc: "没有 onProgress 回调，您将无法获取上传进度"
                    })),
                    !0
                }
            }
        },
        createFaceMessage: {
            to: uh,
            conversationType: uh,
            payload: qn(qn({}, lh), {}, {
                validator: function(e) {
                    return Os(e) ? Ts(e.index) ? !!Ds(e.data) || (console.warn(sh({
                        api: "createFaceMessage",
                        param: "payload.data",
                        desc: "类型必须为 String"
                    })),
                    !1) : (console.warn(sh({
                        api: "createFaceMessage",
                        param: "payload.index",
                        desc: "类型必须为 Number"
                    })),
                    !1) : (console.warn(sh({
                        api: "createFaceMessage",
                        param: "payload",
                        desc: "类型必须为 plain object"
                    })),
                    !1)
                }
            })
        },
        createFileMessage: {
            to: uh,
            conversationType: uh,
            payload: qn(qn({}, lh), {}, {
                validator: function(e) {
                    if (!Os(e))
                        return console.warn(sh({
                            api: "createFileMessage",
                            param: "payload",
                            desc: "类型必须为 plain object"
                        })),
                        !1;
                    if (As(e.file))
                        return console.warn(sh({
                            api: "createFileMessage",
                            param: "payload.file",
                            desc: "不能为 undefined"
                        })),
                        !1;
                    if (xa) {
                        if (!(e.file instanceof HTMLInputElement || Ss(e.file)))
                            return console.warn(sh({
                                api: "createFileMessage",
                                param: "payload.file",
                                desc: "类型必须是 HTMLInputElement 或 File"
                            })),
                            !1;
                        if (e.file instanceof HTMLInputElement && 0 === e.file.files.length)
                            return console.warn(sh({
                                api: "createFileMessage",
                                desc: "您没有选择文件，无法发送"
                            })),
                            !1
                    }
                    return !0
                }
            }),
            onProgress: {
                type: "Function",
                required: !1,
                validator: function(e) {
                    return As(e) && console.warn(sh({
                        api: "createFileMessage",
                        desc: "没有 onProgress 回调，您将无法获取上传进度"
                    })),
                    !0
                }
            }
        },
        revokeMessage: [qn(qn({
            name: "message"
        }, lh), {}, {
            validator: function(e) {
                return e instanceof oh ? e.conversationType === En.CONV_SYSTEM ? (console.warn("revokeMessage 不能撤回系统会话消息，只能撤回单聊消息或群消息"),
                !1) : !0 !== e.isRevoked || (console.warn("revokeMessage 消息已经被撤回，请勿重复操作"),
                !1) : (console.warn("revokeMessage 参数 message 必须为 Message(".concat(ah, "Message.html) 实例。")),
                !1)
            }
        })],
        getUserProfile: {
            userIDList: {
                type: "Array",
                validator: function(e) {
                    return Rs(e) ? (0 === e.length && console.warn(sh({
                        api: "getUserProfile",
                        param: "userIDList",
                        desc: "不能为空数组"
                    })),
                    !0) : (console.warn(sh({
                        api: "getUserProfile",
                        param: "userIDList",
                        desc: "必须为数组"
                    })),
                    !1)
                }
            }
        },
        updateMyProfile: {
            profileCustomField: {
                type: "Array",
                validator: function(e) {
                    return !!As(e) || (!!Rs(e) || (console.warn(sh({
                        api: "updateMyProfile",
                        param: "profileCustomField",
                        desc: "必须为数组"
                    })),
                    !1))
                }
            }
        }
    }
      , fh = {
        login: "login",
        logout: "logout",
        on: "on",
        once: "once",
        off: "off",
        setLogLevel: "setLogLevel",
        registerPlugin: "registerPlugin",
        destroy: "destroy",
        createTextMessage: "createTextMessage",
        createImageMessage: "createImageMessage",
        createAudioMessage: "createAudioMessage",
        createVideoMessage: "createVideoMessage",
        createCustomMessage: "createCustomMessage",
        createFaceMessage: "createFaceMessage",
        createFileMessage: "createFileMessage",
        sendMessage: "sendMessage",
        resendMessage: "resendMessage",
        getMessageList: "getMessageList",
        setMessageRead: "setMessageRead",
        revokeMessage: "revokeMessage",
        getConversationList: "getConversationList",
        getConversationProfile: "getConversationProfile",
        deleteConversation: "deleteConversation",
        getGroupList: "getGroupList",
        getGroupProfile: "getGroupProfile",
        createGroup: "createGroup",
        joinGroup: "joinGroup",
        updateGroupProfile: "updateGroupProfile",
        quitGroup: "quitGroup",
        dismissGroup: "dismissGroup",
        changeGroupOwner: "changeGroupOwner",
        searchGroupByID: "searchGroupByID",
        setMessageRemindType: "setMessageRemindType",
        handleGroupApplication: "handleGroupApplication",
        getGroupMemberProfile: "getGroupMemberProfile",
        getGroupMemberList: "getGroupMemberList",
        addGroupMember: "addGroupMember",
        deleteGroupMember: "deleteGroupMember",
        setGroupMemberNameCard: "setGroupMemberNameCard",
        setGroupMemberMuteTime: "setGroupMemberMuteTime",
        setGroupMemberRole: "setGroupMemberRole",
        setGroupMemberCustomField: "setGroupMemberCustomField",
        getGroupOnlineMemberCount: "getGroupOnlineMemberCount",
        getMyProfile: "getMyProfile",
        getUserProfile: "getUserProfile",
        updateMyProfile: "updateMyProfile",
        getBlacklist: "getBlacklist",
        addToBlacklist: "addToBlacklist",
        removeFromBlacklist: "removeFromBlacklist",
        getFriendList: "getFriendList",
        callExperimentalAPI: "callExperimentalAPI"
    }
      , hh = (t((function(e) {
        var t = function(e) {
            var t = Object.prototype
              , n = t.hasOwnProperty
              , r = "function" == typeof Symbol ? Symbol : {}
              , o = r.iterator || "@@iterator"
              , i = r.asyncIterator || "@@asyncIterator"
              , a = r.toStringTag || "@@toStringTag";
            function s(e, t, n) {
                return Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                e[t]
            }
            try {
                s({}, "")
            } catch (D) {
                s = function(e, t, n) {
                    return e[t] = n
                }
            }
            function u(e, t, n, r) {
                var o = t && t.prototype instanceof p ? t : p
                  , i = Object.create(o.prototype)
                  , a = new E(r || []);
                return i._invoke = function(e, t, n) {
                    var r = "suspendedStart";
                    return function(o, i) {
                        if ("executing" === r)
                            throw new Error("Generator is already running");
                        if ("completed" === r) {
                            if ("throw" === o)
                                throw i;
                            return T()
                        }
                        for (n.method = o,
                        n.arg = i; ; ) {
                            var a = n.delegate;
                            if (a) {
                                var s = I(a, n);
                                if (s) {
                                    if (s === l)
                                        continue;
                                    return s
                                }
                            }
                            if ("next" === n.method)
                                n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if ("suspendedStart" === r)
                                    throw r = "completed",
                                    n.arg;
                                n.dispatchException(n.arg)
                            } else
                                "return" === n.method && n.abrupt("return", n.arg);
                            r = "executing";
                            var u = c(e, t, n);
                            if ("normal" === u.type) {
                                if (r = n.done ? "completed" : "suspendedYield",
                                u.arg === l)
                                    continue;
                                return {
                                    value: u.arg,
                                    done: n.done
                                }
                            }
                            "throw" === u.type && (r = "completed",
                            n.method = "throw",
                            n.arg = u.arg)
                        }
                    }
                }(e, n, a),
                i
            }
            function c(e, t, n) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, n)
                    }
                } catch (D) {
                    return {
                        type: "throw",
                        arg: D
                    }
                }
            }
            e.wrap = u;
            var l = {};
            function p() {}
            function f() {}
            function h() {}
            var d = {};
            d[o] = function() {
                return this
            }
            ;
            var g = Object.getPrototypeOf
              , m = g && g(g(S([])));
            m && m !== t && n.call(m, o) && (d = m);
            var v = h.prototype = p.prototype = Object.create(d);
            function y(e) {
                ["next", "throw", "return"].forEach((function(t) {
                    s(e, t, (function(e) {
                        return this._invoke(t, e)
                    }
                    ))
                }
                ))
            }
            function _(e, t) {
                var r;
                this._invoke = function(o, i) {
                    function a() {
                        return new t((function(r, a) {
                            !function r(o, i, a, s) {
                                var u = c(e[o], e, i);
                                if ("throw" !== u.type) {
                                    var l = u.arg
                                      , p = l.value;
                                    return p && "object" == typeof p && n.call(p, "__await") ? t.resolve(p.__await).then((function(e) {
                                        r("next", e, a, s)
                                    }
                                    ), (function(e) {
                                        r("throw", e, a, s)
                                    }
                                    )) : t.resolve(p).then((function(e) {
                                        l.value = e,
                                        a(l)
                                    }
                                    ), (function(e) {
                                        return r("throw", e, a, s)
                                    }
                                    ))
                                }
                                s(u.arg)
                            }(o, i, r, a)
                        }
                        ))
                    }
                    return r = r ? r.then(a, a) : a()
                }
            }
            function I(e, t) {
                var n = e.iterator[t.method];
                if (void 0 === n) {
                    if (t.delegate = null,
                    "throw" === t.method) {
                        if (e.iterator.return && (t.method = "return",
                        t.arg = void 0,
                        I(e, t),
                        "throw" === t.method))
                            return l;
                        t.method = "throw",
                        t.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return l
                }
                var r = c(n, e.iterator, t.arg);
                if ("throw" === r.type)
                    return t.method = "throw",
                    t.arg = r.arg,
                    t.delegate = null,
                    l;
                var o = r.arg;
                return o ? o.done ? (t[e.resultName] = o.value,
                t.next = e.nextLoc,
                "return" !== t.method && (t.method = "next",
                t.arg = void 0),
                t.delegate = null,
                l) : o : (t.method = "throw",
                t.arg = new TypeError("iterator result is not an object"),
                t.delegate = null,
                l)
            }
            function M(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]),
                2 in e && (t.finallyLoc = e[2],
                t.afterLoc = e[3]),
                this.tryEntries.push(t)
            }
            function C(e) {
                var t = e.completion || {};
                t.type = "normal",
                delete t.arg,
                e.completion = t
            }
            function E(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                e.forEach(M, this),
                this.reset(!0)
            }
            function S(e) {
                if (e) {
                    var t = e[o];
                    if (t)
                        return t.call(e);
                    if ("function" == typeof e.next)
                        return e;
                    if (!isNaN(e.length)) {
                        var r = -1
                          , i = function t() {
                            for (; ++r < e.length; )
                                if (n.call(e, r))
                                    return t.value = e[r],
                                    t.done = !1,
                                    t;
                            return t.value = void 0,
                            t.done = !0,
                            t
                        };
                        return i.next = i
                    }
                }
                return {
                    next: T
                }
            }
            function T() {
                return {
                    value: void 0,
                    done: !0
                }
            }
            return f.prototype = v.constructor = h,
            h.constructor = f,
            f.displayName = s(h, a, "GeneratorFunction"),
            e.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === f || "GeneratorFunction" === (t.displayName || t.name))
            }
            ,
            e.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h,
                s(e, a, "GeneratorFunction")),
                e.prototype = Object.create(v),
                e
            }
            ,
            e.awrap = function(e) {
                return {
                    __await: e
                }
            }
            ,
            y(_.prototype),
            _.prototype[i] = function() {
                return this
            }
            ,
            e.AsyncIterator = _,
            e.async = function(t, n, r, o, i) {
                void 0 === i && (i = Promise);
                var a = new _(u(t, n, r, o),i);
                return e.isGeneratorFunction(n) ? a : a.next().then((function(e) {
                    return e.done ? e.value : a.next()
                }
                ))
            }
            ,
            y(v),
            s(v, a, "Generator"),
            v[o] = function() {
                return this
            }
            ,
            v.toString = function() {
                return "[object Generator]"
            }
            ,
            e.keys = function(e) {
                var t = [];
                for (var n in e)
                    t.push(n);
                return t.reverse(),
                function n() {
                    for (; t.length; ) {
                        var r = t.pop();
                        if (r in e)
                            return n.value = r,
                            n.done = !1,
                            n
                    }
                    return n.done = !0,
                    n
                }
            }
            ,
            e.values = S,
            E.prototype = {
                constructor: E,
                reset: function(e) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = void 0,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = void 0,
                    this.tryEntries.forEach(C),
                    !e)
                        for (var t in this)
                            "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type)
                        throw e.arg;
                    return this.rval
                },
                dispatchException: function(e) {
                    if (this.done)
                        throw e;
                    var t = this;
                    function r(n, r) {
                        return a.type = "throw",
                        a.arg = e,
                        t.next = n,
                        r && (t.method = "next",
                        t.arg = void 0),
                        !!r
                    }
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var i = this.tryEntries[o]
                          , a = i.completion;
                        if ("root" === i.tryLoc)
                            return r("end");
                        if (i.tryLoc <= this.prev) {
                            var s = n.call(i, "catchLoc")
                              , u = n.call(i, "finallyLoc");
                            if (s && u) {
                                if (this.prev < i.catchLoc)
                                    return r(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc)
                                    return r(i.finallyLoc)
                            } else if (s) {
                                if (this.prev < i.catchLoc)
                                    return r(i.catchLoc, !0)
                            } else {
                                if (!u)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc)
                                    return r(i.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var o = this.tryEntries[r];
                        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break
                        }
                    }
                    i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return a.type = e,
                    a.arg = t,
                    i ? (this.method = "next",
                    this.next = i.finallyLoc,
                    l) : this.complete(a)
                },
                complete: function(e, t) {
                    if ("throw" === e.type)
                        throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === e.type && t && (this.next = t),
                    l
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e)
                            return this.complete(n.completion, n.afterLoc),
                            C(n),
                            l
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                C(n)
                            }
                            return o
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(e, t, n) {
                    return this.delegate = {
                        iterator: S(e),
                        resultName: t,
                        nextLoc: n
                    },
                    "next" === this.method && (this.arg = void 0),
                    l
                }
            },
            e
        }(e.exports);
        try {
            regeneratorRuntime = t
        } catch (n) {
            Function("r", "regeneratorRuntime = r")(t)
        }
    }
    )),
    "1.7.3")
      , dh = "537048168"
      , gh = "10"
      , mh = "protobuf"
      , vh = "json"
      , yh = 1
      , _h = 2
      , Ih = 3
      , Mh = 4
      , Ch = {
        HOST: {
            CURRENT: {
                COMMON: "https://webim.tim.qq.com",
                PIC: "https://pic.tim.qq.com",
                COS: "https://yun.tim.qq.com"
            },
            PRODUCTION: {
                COMMON: "https://webim.tim.qq.com",
                PIC: "https://pic.tim.qq.com",
                COS: "https://yun.tim.qq.com"
            },
            OVERSEA_PRODUCTION: {
                COMMON: "https://api.im.qcloud.com",
                PIC: "https://api.im.qcloud.com",
                COS: "https://api.im.qcloud.com"
            },
            SANDBOX: {
                COMMON: "https://events.tim.qq.com",
                PIC: "https://pic.tim.qq.com",
                COS: "https://yun.tim.qq.com"
            },
            TEST: {
                COMMON: "https://test.tim.qq.com",
                PIC: "https://pic.tim.qq.com",
                COS: "https://test.tim.qq.com"
            },
            setCurrent: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
                e === yh ? this.CURRENT = this.SANDBOX : e === _h ? this.CURRENT = this.TEST : e === Ih ? this.CURRENT = this.PRODUCTION : e === Mh && (this.CURRENT = this.OVERSEA_PRODUCTION)
            }
        },
        NAME: {
            OPEN_IM: "openim",
            GROUP: "group_open_http_svc",
            FRIEND: "sns",
            PROFILE: "profile",
            RECENT_CONTACT: "recentcontact",
            PIC: "openpic",
            BIG_GROUP_NO_AUTH: "group_open_http_noauth_svc",
            BIG_GROUP_LONG_POLLING: "group_open_long_polling_http_svc",
            BIG_GROUP_LONG_POLLING_NO_AUTH: "group_open_long_polling_http_noauth_svc",
            IM_OPEN_STAT: "imopenstat",
            WEB_IM: "webim",
            IM_COS_SIGN: "im_cos_sign_svr"
        },
        CMD: {
            ACCESS_LAYER: "accesslayer",
            LOGIN: "login",
            LOGOUT_LONG_POLL: "longpollinglogout",
            LOGOUT_ALL: "logout",
            PORTRAIT_GET: "portrait_get_all",
            PORTRAIT_SET: "portrait_set",
            GET_LONG_POLL_ID: "getlongpollingid",
            LONG_POLL: "longpolling",
            AVCHATROOM_LONG_POLL: "get_msg",
            FRIEND_ADD: "friend_add",
            FRIEND_GET_ALL: "friend_get_all",
            FRIEND_DELETE: "friend_delete",
            RESPONSE_PENDENCY: "friend_response",
            GET_PENDENCY: "pendency_get",
            DELETE_PENDENCY: "pendency_delete",
            GET_GROUP_PENDENCY: "get_pendency",
            GET_BLACKLIST: "black_list_get",
            ADD_BLACKLIST: "black_list_add",
            DELETE_BLACKLIST: "black_list_delete",
            CREATE_GROUP: "create_group",
            GET_JOINED_GROUPS: "get_joined_group_list",
            SEND_MESSAGE: "sendmsg",
            REVOKE_C2C_MESSAGE: "msgwithdraw",
            SEND_GROUP_MESSAGE: "send_group_msg",
            REVOKE_GROUP_MESSAGE: "group_msg_recall",
            GET_GROUP_INFO: "get_group_info",
            GET_GROUP_MEMBER_INFO: "get_specified_group_member_info",
            GET_GROUP_MEMBER_LIST: "get_group_member_info",
            QUIT_GROUP: "quit_group",
            CHANGE_GROUP_OWNER: "change_group_owner",
            DESTROY_GROUP: "destroy_group",
            ADD_GROUP_MEMBER: "add_group_member",
            DELETE_GROUP_MEMBER: "delete_group_member",
            SEARCH_GROUP_BY_ID: "get_group_public_info",
            APPLY_JOIN_GROUP: "apply_join_group",
            HANDLE_APPLY_JOIN_GROUP: "handle_apply_join_group",
            MODIFY_GROUP_INFO: "modify_group_base_info",
            MODIFY_GROUP_MEMBER_INFO: "modify_group_member_info",
            DELETE_GROUP_SYSTEM_MESSAGE: "deletemsg",
            GET_CONVERSATION_LIST: "get",
            PAGING_GET_CONVERSATION_LIST: "page_get",
            DELETE_CONVERSATION: "delete",
            GET_MESSAGES: "getmsg",
            GET_C2C_ROAM_MESSAGES: "getroammsg",
            GET_GROUP_ROAM_MESSAGES: "group_msg_get",
            SET_C2C_MESSAGE_READ: "msgreaded",
            GET_PEER_READ_TIME: "get_peer_read_time",
            SET_GROUP_MESSAGE_READ: "msg_read_report",
            FILE_READ_AND_WRITE_AUTHKEY: "authkey",
            FILE_UPLOAD: "pic_up",
            COS_SIGN: "cos",
            TIM_WEB_REPORT: "tim_web_report",
            BIG_DATA_HALLWAY_AUTH_KEY: "authkey",
            GET_ONLINE_MEMBER_NUM: "get_online_member_num"
        },
        CHANNEL: {
            SOCKET: 1,
            XHR: 2,
            AUTO: 0
        },
        NAME_VERSION: {
            openim: "v4",
            group_open_http_svc: "v4",
            sns: "v4",
            profile: "v4",
            recentcontact: "v4",
            openpic: "v4",
            group_open_http_noauth_svc: "v4",
            group_open_long_polling_http_svc: "v4",
            group_open_long_polling_http_noauth_svc: "v4",
            imopenstat: "v4",
            im_cos_sign_svr: "v4",
            webim: "v4"
        }
    };
    Ch.HOST.setCurrent(Ih);
    var Eh = {
        request: {
            toAccount: "To_Account",
            fromAccount: "From_Account",
            to: "To_Account",
            from: "From_Account",
            groupID: "GroupId",
            avatar: "FaceUrl"
        },
        response: {
            GroupId: "groupID",
            Member_Account: "userID",
            MsgList: "messageList",
            SyncFlag: "syncFlag",
            To_Account: "to",
            From_Account: "from",
            MsgSeq: "sequence",
            MsgRandom: "random",
            MsgTimeStamp: "time",
            MsgContent: "content",
            MsgBody: "elements",
            GroupWithdrawInfoArray: "revokedInfos",
            WithdrawC2cMsgNotify: "c2cMessageRevokedNotify",
            C2cWithdrawInfoArray: "revokedInfos",
            C2cReadedReceipt: "c2cMessageReadReceipt",
            LastReadTime: "peerReadTime",
            MsgRand: "random",
            MsgType: "type",
            MsgShow: "messageShow",
            NextMsgSeq: "nextMessageSeq",
            FaceUrl: "avatar",
            ProfileDataMod: "profileModify",
            Profile_Account: "userID",
            ValueBytes: "value",
            ValueNum: "value",
            NoticeSeq: "noticeSequence",
            NotifySeq: "notifySequence",
            MsgFrom_AccountExtraInfo: "messageFromAccountExtraInformation",
            Operator_Account: "operatorID",
            OpType: "operationType",
            ReportType: "operationType",
            UserId: "userID",
            User_Account: "userID",
            List_Account: "userIDList",
            MsgOperatorMemberExtraInfo: "operatorInfo",
            MsgMemberExtraInfo: "memberInfoList",
            ImageUrl: "avatar",
            NickName: "nick",
            MsgGroupNewInfo: "newGroupProfile",
            MsgAppDefinedData: "groupCustomField",
            Owner_Account: "ownerID",
            GroupName: "name",
            GroupFaceUrl: "avatar",
            GroupIntroduction: "introduction",
            GroupNotification: "notification",
            GroupApplyJoinOption: "joinOption",
            MsgKey: "messageKey",
            GroupInfo: "groupProfile",
            ShutupTime: "muteTime",
            Desc: "description",
            Ext: "extension"
        },
        ignoreKeyWord: ["C2C", "ID", "USP"]
    }
      , Sh = "_contextWasUpdated"
      , Th = "_contextWasReset"
      , Dh = "_a2KeyAndTinyIDUpdated"
      , kh = "_specifiedConfigUpdated"
      , Oh = "_noticeIsSynchronizing"
      , Rh = "_noticeIsSynchronized"
      , Ah = "_messageSent"
      , wh = "_syncMessageProcessing"
      , Lh = "_syncMessageFinished"
      , Nh = "_receiveInstantMessage"
      , bh = "_receiveGroupInstantMessage"
      , Ph = "_receveGroupSystemNotice"
      , Gh = "_messageRevoked"
      , Uh = "_longPollGetIDFailed"
      , xh = "_longPollRequestFailed"
      , qh = "_longPollResponseOK"
      , Fh = "_longPollKickedOut"
      , jh = "_longPollMitipuleDeviceKickedOut"
      , Vh = "_longPollGetNewC2CNotice"
      , Bh = "_longPollGetNewGroupMessages"
      , Kh = "_longPollGetNewGroupTips"
      , Hh = "_longPollGetNewGroupNotice"
      , $h = "_longPollGetNewFriendMessages"
      , zh = "_longPollProfileModified"
      , Yh = " _longpollGroupMessageRevoked"
      , Wh = "_longpollC2CMessageRevoked"
      , Jh = "_longpollC2CMessageReadReceipt"
      , Xh = "_avlongPollRequestFailed"
      , Qh = "_avlongPollResponseOK"
      , Zh = "_onGroupListUpdated"
      , ed = "_loginSuccess"
      , td = "_signLogoutExcuting"
      , nd = "_logoutSuccess"
      , rd = "_a2keyExpired"
      , od = "_errorHasBeenDetected"
      , id = "_onConversationListUpdated"
      , ad = "_onConversationListProfileUpdated"
      , sd = "_conversationDeleted"
      , ud = "onProfileUpdated"
      , cd = "joinAVChatRoomSuccess"
      , ld = "joinAVChatRoomSuccessNoAuth"
      , pd = "_sdkStateReady"
      , fd = "_sdkReload"
      , hd = it.filter
      , dd = We("filter")
      , gd = lt("filter");
    we({
        target: "Array",
        proto: !0,
        forced: !dd || !gd
    }, {
        filter: function(e) {
            return hd(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var md = Wr.trim;
    function vd(e, t) {
        if ("string" != typeof e && !Array.isArray(e))
            throw new TypeError("Expected the input to be `string | string[]`");
        t = Object.assign({
            pascalCase: !1
        }, t);
        var n;
        return 0 === (e = Array.isArray(e) ? e.map((function(e) {
            return e.trim()
        }
        )).filter((function(e) {
            return e.length
        }
        )).join("-") : e.trim()).length ? "" : 1 === e.length ? t.pascalCase ? e.toUpperCase() : e.toLowerCase() : (e !== e.toLowerCase() && (e = yd(e)),
        e = e.replace(/^[_.\- ]+/, "").toLowerCase().replace(/[_.\- ]+(\w|$)/g, (function(e, t) {
            return t.toUpperCase()
        }
        )).replace(/\d+(\w|$)/g, (function(e) {
            return e.toUpperCase()
        }
        )),
        n = e,
        t.pascalCase ? n.charAt(0).toUpperCase() + n.slice(1) : n)
    }
    we({
        target: "String",
        proto: !0,
        forced: function(e) {
            return o((function() {
                return !!Kr[e]() || "​᠎" != "​᠎"[e]() || Kr[e].name !== e
            }
            ))
        }("trim")
    }, {
        trim: function() {
            return md(this)
        }
    });
    var yd = function(e) {
        for (var t = !1, n = !1, r = !1, o = 0; o < e.length; o++) {
            var i = e[o];
            t && /[a-zA-Z]/.test(i) && i.toUpperCase() === i ? (e = e.slice(0, o) + "-" + e.slice(o),
            t = !1,
            r = n,
            n = !0,
            o++) : n && r && /[a-zA-Z]/.test(i) && i.toLowerCase() === i ? (e = e.slice(0, o - 1) + "-" + e.slice(o - 1),
            r = n,
            n = !1,
            t = !0) : (t = i.toLowerCase() === i && i.toUpperCase() !== i,
            r = n,
            n = i.toUpperCase() === i && i.toLowerCase() !== i)
        }
        return e
    };
    function _d(e, t, n) {
        var r = []
          , o = 0
          , i = function e(t, n) {
            if (++o > 10)
                return o--,
                t;
            if (Rs(t)) {
                var i = t.map((function(t) {
                    return ks(t) ? e(t, n) : t
                }
                ));
                return o--,
                i
            }
            if (ks(t)) {
                var a = (s = t,
                u = function(e, t) {
                    if (!Ps(t))
                        return !1;
                    if ((a = t) !== vd(a)) {
                        for (var o = !0, i = 0; i < Eh.ignoreKeyWord.length; i++)
                            if (t.includes(Eh.ignoreKeyWord[i])) {
                                o = !1;
                                break
                            }
                        o && r.push(t)
                    }
                    var a;
                    return As(n[t]) ? function(e) {
                        return "OPPOChannelID" === e ? e : e[0].toUpperCase() + vd(e).slice(1)
                    }(t) : n[t]
                }
                ,
                c = Object.create(null),
                Object.keys(s).forEach((function(e) {
                    var t = u(s[e], e);
                    t && (c[t] = s[e])
                }
                )),
                c);
                return a = tu(a, (function(t, r) {
                    return Rs(t) || ks(t) ? e(t, n) : t
                }
                )),
                o--,
                a
            }
            var s, u, c
        }(e, t = qn(qn({}, Eh.request), t));
        return r.length > 0 && n.innerEmitter.emit(od, {
            code: Kp.CONVERTOR_IRREGULAR_PARAMS,
            message: Hf
        }),
        i
    }
    function Id(e, t) {
        if (t = qn(qn({}, Eh.response), t),
        Rs(e))
            return e.map((function(e) {
                return ks(e) ? Id(e, t) : e
            }
            ));
        if (ks(e)) {
            var n = (r = e,
            o = function(e, n) {
                return As(t[n]) ? vd(n) : t[n]
            }
            ,
            i = {},
            Object.keys(r).forEach((function(e) {
                i[o(r[e], e)] = r[e]
            }
            )),
            i);
            return n = tu(n, (function(e) {
                return Rs(e) || ks(e) ? Id(e, t) : e
            }
            ))
        }
        var r, o, i
    }
    var Md = function() {
        function e(t) {
            var n = this;
            bn(this, e),
            this.url = "",
            this.requestData = null,
            this.method = t.method || "POST",
            this.callback = function(e) {
                return Id(e = t.decode(e), n._getResponseMap(t))
            }
            ,
            this._initializeServerMap(),
            this._initializeURL(t),
            this._initializeRequestData(t)
        }
        return Gn(e, [{
            key: "_initializeServerMap",
            value: function() {
                this._serverMap = Object.create(null);
                var e = "";
                for (var t in Ch.NAME)
                    if (Object.prototype.hasOwnProperty.call(Ch.NAME, t))
                        switch (e = Ch.NAME[t]) {
                        case Ch.NAME.PIC:
                            this._serverMap[e] = Ch.HOST.CURRENT.PIC;
                            break;
                        case Ch.NAME.IM_COS_SIGN:
                            this._serverMap[e] = Ch.HOST.CURRENT.COS;
                            break;
                        default:
                            this._serverMap[e] = Ch.HOST.CURRENT.COMMON
                        }
            }
        }, {
            key: "_getHost",
            value: function(e) {
                if (void 0 !== this._serverMap[e])
                    return this._serverMap[e];
                throw new Bp({
                    code: Kp.NETWORK_UNDEFINED_SERVER_NAME,
                    message: Vf
                })
            }
        }, {
            key: "_initializeURL",
            value: function(e) {
                var t = e.serverName
                  , n = e.cmd
                  , r = this._getHost(t)
                  , o = "".concat(r, "/").concat(Ch.NAME_VERSION[t], "/").concat(t, "/").concat(n);
                o += "?".concat(this._getQueryString(e.queryString)),
                this.url = o
            }
        }, {
            key: "getUrl",
            value: function() {
                return this.url.replace(/&reqtime=(\d+)/, "&reqtime=".concat(Math.ceil(+new Date / 1e3)))
            }
        }, {
            key: "_initializeRequestData",
            value: function(e) {
                var t, n = e.requestData;
                t = this._requestDataCleaner(n),
                this.requestData = e.encode(t)
            }
        }, {
            key: "_requestDataCleaner",
            value: function(e) {
                var t = Array.isArray(e) ? [] : Object.create(null);
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && Ps(n) && null !== e[n] && ("object" !== wn(e[n]) ? t[n] = e[n] : t[n] = this._requestDataCleaner.bind(this)(e[n]));
                return t
            }
        }, {
            key: "_getQueryString",
            value: function(e) {
                var t = [];
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && ("function" != typeof e[n] ? t.push("".concat(n, "=").concat(e[n])) : t.push("".concat(n, "=").concat(e[n]())));
                return t.join("&")
            }
        }, {
            key: "_getResponseMap",
            value: function(e) {
                if (e.keyMaps && e.keyMaps.response && Object.keys(e.keyMaps.response).length > 0)
                    return e.keyMaps.response
            }
        }]),
        e
    }()
      , Cd = [].slice
      , Ed = /MSIE .\./.test(Be)
      , Sd = function(e) {
        return function(t, n) {
            var r = arguments.length > 2
              , o = r ? Cd.call(arguments, 2) : void 0;
            return e(r ? function() {
                ("function" == typeof t ? t : Function(t)).apply(this, o)
            }
            : t, n)
        }
    };
    function Td(e) {
        this.mixin(e)
    }
    we({
        global: !0,
        bind: !0,
        forced: Ed
    }, {
        setTimeout: Sd(r.setTimeout),
        setInterval: Sd(r.setInterval)
    }),
    Td.mixin = function(e) {
        var t = e.prototype || e;
        t._isReady = !1,
        t.ready = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (e)
                return this._isReady ? void (t ? e.call(this) : setTimeout(e, 1)) : (this._readyQueue = this._readyQueue || [],
                void this._readyQueue.push(e))
        }
        ,
        t.triggerReady = function() {
            var e = this;
            this._isReady = !0,
            setTimeout((function() {
                var t = e._readyQueue;
                e._readyQueue = [],
                t && t.length > 0 && t.forEach((function(e) {
                    e.call(this)
                }
                ), e)
            }
            ), 1)
        }
        ,
        t.resetReady = function() {
            this._isReady = !1,
            this._readyQueue = []
        }
        ,
        t.isReady = function() {
            return this._isReady
        }
    }
    ;
    var Dd = function() {
        function e(t) {
            bn(this, e),
            Td.mixin(this),
            this.tim = t
        }
        return Gn(e, [{
            key: "isLoggedIn",
            value: function() {
                return this.tim.context.login === Zu.IS_LOGIN || !!this.tim.context.a2Key
            }
        }, {
            key: "createTransportCapsule",
            value: function(e) {
                var t = this.tim.packageConfig.get(e);
                return t ? new Md(t) : null
            }
        }, {
            key: "request",
            value: function(e) {
                var t = this.createTransportCapsule(e);
                return t || Es.error("unknown transport capsule, please check!", e),
                this.tim.connectionController.request(t)
            }
        }, {
            key: "emitInnerEvent",
            value: function(e, t) {
                this.tim.innerEmitter.emit(e, t)
            }
        }, {
            key: "emitOuterEvent",
            value: function(e, t) {
                this.tim.outerEmitter.emit(e, t)
            }
        }, {
            key: "reset",
            value: function() {
                Es.warn(["method: IMController.reset() method must be implemented"].join())
            }
        }, {
            key: "probeNetwork",
            value: function() {
                return this.tim.netMonitor.probe()
            }
        }, {
            key: "getNetworkType",
            value: function() {
                return this.tim.netMonitor.getNetworkType()
            }
        }, {
            key: "getPlatform",
            value: function() {
                return $a
            }
        }]),
        e
    }()
      , kd = function() {
        function e(t, n) {
            bn(this, e),
            this.data = t,
            this._innerEmitter = n,
            this.defaultData = {},
            Object.assign(this.defaultData, t),
            this.initGetterAndSetter()
        }
        return Gn(e, [{
            key: "initGetterAndSetter",
            value: function() {
                var e = this
                  , t = function(t) {
                    Object.defineProperty(e, t, {
                        enumerable: !0,
                        configurable: !0,
                        get: function() {
                            return e.data[t]
                        },
                        set: function(n) {
                            e.data[t] !== n && (e.data[t] = n,
                            e.onChange.bind(e)(t, n))
                        }
                    })
                };
                for (var n in e.data)
                    Object.prototype.hasOwnProperty.call(e.data, n) && t(n)
            }
        }, {
            key: "onChange",
            value: function(e, t) {
                this._innerEmitter.emit(Sh, {
                    key: e,
                    value: t
                })
            }
        }, {
            key: "reset",
            value: function() {
                for (var e in Es.log("Context.reset"),
                this.data)
                    Object.prototype.hasOwnProperty.call(this.data, e) && (this.data[e] = this.defaultData.hasOwnProperty(e) ? this.defaultData[e] : null)
            }
        }]),
        e
    }()
      , Od = function(e) {
        Fn(n, e);
        var t = Wn(n);
        function n(e) {
            var r;
            bn(this, n);
            var o = (r = t.call(this, e)).tim.loginInfo;
            return r._context = new kd({
                login: Zu.IS_NOT_LOGIN,
                SDKAppID: o.SDKAppID,
                appIDAt3rd: null,
                accountType: o.accountType,
                identifier: o.identifier,
                tinyID: null,
                identifierNick: o.identifierNick,
                userSig: o.userSig,
                a2Key: null,
                contentType: "json",
                apn: 1,
                unlimitedAVChatRoom: o.unlimitedAVChatRoom,
                scene: o.scene,
                oversea: o.oversea,
                instanceID: o.instanceID
            },r.tim.innerEmitter),
            r._initListener(),
            r
        }
        return Gn(n, [{
            key: "reset",
            value: function() {
                this._context.reset(),
                this.emitInnerEvent(Th)
            }
        }, {
            key: "_initListener",
            value: function() {
                this.tim.innerEmitter.on(Sh, this._onContextMemberChange, this),
                this.tim.innerEmitter.on(ed, this._updateA2KeyAndTinyID, this)
            }
        }, {
            key: "_updateA2KeyAndTinyID",
            value: function(e) {
                var t = e.data
                  , n = t.a2Key
                  , r = t.tinyID;
                this._context.a2Key = n,
                this._context.tinyID = r,
                this.emitInnerEvent(Dh),
                this.triggerReady()
            }
        }, {
            key: "getContext",
            value: function() {
                return this._context
            }
        }, {
            key: "_onContextMemberChange",
            value: function(e) {
                var t = e.data
                  , n = t.key
                  , r = t.value;
                ("tinyID" === n || "a2Key" === n) && (r.length <= 0 ? this._context.login = Zu.IS_NOT_LOGIN : this._context.login = null !== this._context.a2Key ? Zu.IS_LOGIN : Zu.IS_NOT_LOGIN)
            }
        }]),
        n
    }(Dd)
      , Rd = function e(t) {
        bn(this, e),
        this.code = 0,
        this.data = t || {}
    }
      , Ad = null
      , wd = function(e) {
        Ad = e
    }
      , Ld = function(e) {
        return e instanceof Rd ? (Es.warn("IMPromise.resolve 此函数会自动用options创建IMResponse实例，调用侧不需创建，建议修改！"),
        Promise.resolve(e)) : Promise.resolve(new Rd(e))
    }
      , Nd = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (e instanceof Bp)
            return t && null !== Ad && Ad.emit(Cn.ERROR, e),
            Promise.reject(e);
        if (e instanceof Error) {
            var n = new Bp({
                code: Kp.UNCAUGHT_ERROR,
                message: e.message
            });
            return t && null !== Ad && Ad.emit(Cn.ERROR, n),
            Promise.reject(n)
        }
        if (As(e) || As(e.code) || As(e.message))
            Es.error("IMPromise.reject 必须指定code(错误码)和message(错误信息)!!!");
        else {
            if (Ts(e.code) && Ds(e.message)) {
                var r = new Bp(e);
                return t && null !== Ad && Ad.emit(Cn.ERROR, r),
                Promise.reject(r)
            }
            Es.error("IMPromise.reject code(错误码)必须为数字，message(错误信息)必须为字符串!!!")
        }
    }
      , bd = "sdkReady"
      , Pd = "login"
      , Gd = "longpolling"
      , Ud = "longpollingAV"
      , xd = "sendMessage"
      , qd = "sendMessageC2C"
      , Fd = "sendMessageGroupWork"
      , jd = "sendMessageGroupPublic"
      , Vd = "sendMessageGroupMeeting"
      , Bd = "sendMessageGroupAV"
      , Kd = "messageReceived"
      , Hd = "messageReceivedAV"
      , $d = "initConversationList"
      , zd = "initGroupList"
      , Yd = "upload"
      , Wd = function() {
        function e(t) {
            bn(this, e),
            this.SDKAppID = "",
            this.version = "",
            this.tinyID = "",
            this.userID = "",
            this.platform = "",
            this.method = t,
            this.time = "",
            this.startts = Date.now(),
            this.endts = 0,
            this.timespan = 0,
            this.codeint = 0,
            this.message = "",
            this.text = "",
            this.msgType = "",
            this.networkType = "",
            this.platform = "",
            this.scene = "",
            this._sentFlag = !1,
            this.instanceID = "",
            this.host = function() {
                var e = "unknown";
                if (us && (e = "mac"),
                ss && (e = "windows"),
                Qa && (e = "ios"),
                Za && (e = "android"),
                Ka)
                    try {
                        var t = Ha.getSystemInfoSync().platform;
                        void 0 !== t && (e = t)
                    } catch (p_) {}
                return e
            }(),
            this.mpLibVersion = function() {
                if (Ka)
                    try {
                        var e;
                        return void 0 === (e = Ba ? my.getSystemInfoSync().version : Ha.getSystemInfoSync().SDKVersion) ? "-" : e
                    } catch (p_) {
                        return "-"
                    }
                return "-"
            }()
        }
        return Gn(e, [{
            key: "setCommonInfo",
            value: function(e) {
                var t = e.SDKAppID
                  , n = e.version
                  , r = e.tinyID
                  , o = e.userID
                  , i = e.platform
                  , a = e.scene
                  , s = e.instanceID;
                this.SDKAppID = "".concat(t),
                this.version = "".concat(n),
                this.tinyID = r,
                this.userID = o,
                this.platform = i,
                this.scene = a,
                this.time = Fs(),
                this.instanceID = s,
                this.startts && this.endts && !this.timespan && (this.timespan = Math.abs(this.endts - this.startts))
            }
        }, {
            key: "setEnd",
            value: function() {
                var e = this
                  , t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                this._sentFlag || (this.endts = Date.now(),
                t ? (this._sentFlag = !0,
                this._eventStatController.pushIn(this)) : setTimeout((function() {
                    e._sentFlag = !0,
                    e._eventStatController.pushIn(e)
                }
                ), 0))
            }
        }, {
            key: "setError",
            value: function(e, t, n) {
                return e instanceof Error ? (this._sentFlag || (this.setNetworkType(n),
                t ? (e.code && this.setCode(e.code),
                e.message && this.setMessage(e.message)) : (this.setCode(Kp.NO_NETWORK),
                this.setMessage(Kf))),
                this) : (Es.warn("SSOLogData.setError value not instanceof Error, please check!"),
                this)
            }
        }, {
            key: "setCode",
            value: function(e) {
                return As(e) || this._sentFlag || ("ECONNABORTED" === e && (this.codeint = 103),
                Ts(e) ? this.codeint = e : Es.warn("SSOLogData.setCode value not a number, please check!", e, wn(e))),
                this
            }
        }, {
            key: "setMessage",
            value: function(e) {
                return As(e) || this._sentFlag ? this : Ds(e) ? (this.message = e,
                this) : this
            }
        }, {
            key: "setText",
            value: function(e) {
                return Ts(e) ? this.text = e.toString() : Ds(e) && (this.text = e),
                this
            }
        }, {
            key: "setMessageType",
            value: function(e) {
                return this.msgType = e,
                this
            }
        }, {
            key: "setNetworkType",
            value: function(e) {
                return As(e) ? Es.warn("SSOLogData.setNetworkType value is undefined, please check!") : this.networkType = e,
                this
            }
        }], [{
            key: "bindController",
            value: function(t) {
                e.prototype._eventStatController = t
            }
        }]),
        e
    }()
      , Jd = "sdkConstruct"
      , Xd = "sdkReady"
      , Qd = "accessLayer"
      , Zd = "login"
      , eg = "logout"
      , tg = "kickedOut"
      , ng = "registerPlugin"
      , rg = "getCosAuthKey"
      , og = "upload"
      , ig = "sendMessage"
      , ag = "sendComboMessage"
      , sg = "getC2CRoamingMessages"
      , ug = "getGroupRoamingMessages"
      , cg = "revokeMessage"
      , lg = "setC2CMessageRead"
      , pg = "setGroupMessageRead"
      , fg = "emptyMessageBody"
      , hg = "getPeerReadTime"
      , dg = "getConversationList"
      , gg = "getConversationProfile"
      , mg = "deleteConversation"
      , vg = "getConversationListInStorage"
      , yg = "syncConversationList"
      , _g = "createGroup"
      , Ig = "applyJoinGroup"
      , Mg = "joinAVChatRoomSilently"
      , Cg = "quitGroup"
      , Eg = "searchGroupByID"
      , Sg = "changeGroupOwner"
      , Tg = "handleGroupApplication"
      , Dg = "setMessageRemindType"
      , kg = "dismissGroup"
      , Og = "updateGroupProfile"
      , Rg = "getGroupList"
      , Ag = "getGroupProfile"
      , wg = "getGroupListInStorage"
      , Lg = "getGroupLastSequence"
      , Ng = "getGroupMemberList"
      , bg = "getGroupMemberProfile"
      , Pg = "addGroupMember"
      , Gg = "deleteGroupMember"
      , Ug = "setGroupMemberMuteTime"
      , xg = "setGroupMemberNameCard"
      , qg = "setGroupMemberRole"
      , Fg = "setGroupMemberCustomField"
      , jg = "getGroupOnlineMemberCount"
      , Vg = "getLongPollID"
      , Bg = "longPollingError"
      , Kg = "networkJitter"
      , Hg = "sdkReload"
      , $g = "messageLoss"
      , zg = "messageStacked"
      , Yg = "getUserProfile"
      , Wg = "updateMyProfile"
      , Jg = "getBlacklist"
      , Xg = "addToBlacklist"
      , Qg = "removeFromBlacklist"
      , Zg = "mpHideToShow"
      , em = "callbackFunctionError"
      , tm = "exceptionError"
      , nm = function(e) {
        Fn(n, e);
        var t = Wn(n);
        function n(e) {
            var r;
            return bn(this, n),
            !0 === (r = t.call(this, e)).tim.context.oversea && Ch.HOST.setCurrent(Mh),
            r._initializeListener(),
            r
        }
        return Gn(n, [{
            key: "login",
            value: function(e) {
                if (this.isLoggedIn()) {
                    var t = "您已经登录账号".concat(e.identifier, "！如需切换账号登录，请先调用 logout 接口登出，再调用 login 接口登录。");
                    return Es.warn(t),
                    Ld({
                        actionStatus: "OK",
                        errorCode: 0,
                        errorInfo: t,
                        repeatLogin: !0
                    })
                }
                Es.log("SignController.login userID=".concat(e.identifier)),
                Es.time(Pd);
                var n = this._checkLoginInfo(e);
                return au(n) ? (this.tim.context.identifier = e.identifier,
                this.tim.context.userSig = e.userSig,
                this.tim.context.identifier && this.tim.context.userSig ? this._accessLayer() : void 0) : Nd(n)
            }
        }, {
            key: "_isLoginCurrentUser",
            value: function(e) {
                return this.tim.context.identifier === e
            }
        }, {
            key: "_initializeListener",
            value: function() {
                var e = this.tim.innerEmitter;
                e.on(Fh, this._onMultipleAccountKickedOut, this),
                e.on(jh, this._onMultipleDeviceKickedOut, this),
                e.on(rd, this._onUserSigExpired, this)
            }
        }, {
            key: "_accessLayer",
            value: function() {
                var e = this
                  , t = new Wd(Qd);
                return Es.log("SignController._accessLayer."),
                this.request({
                    name: "accessLayer",
                    action: "query"
                }).then((function(n) {
                    return t.setNetworkType(e.getNetworkType()).setText(n.data.webImAccessLayer).setEnd(),
                    Es.log("SignController._accessLayer ok. webImAccessLayer=".concat(n.data.webImAccessLayer)),
                    e.tim.context.oversea || n.data.webImAccessLayer !== yh || Ch.HOST.setCurrent(n.data.webImAccessLayer),
                    e._login()
                }
                )).catch((function(n) {
                    return e.probeNetwork().then((function(r) {
                        var o = Jn(r, 2)
                          , i = o[0]
                          , a = o[1];
                        t.setError(n, i, a).setEnd(!0),
                        e.tim.eventStatController.reportAtOnce()
                    }
                    )),
                    Es.error("SignController._accessLayer failed. error:", n),
                    Nd(n)
                }
                ))
            }
        }, {
            key: "_login",
            value: function() {
                var e = this
                  , t = new Wd(Zd);
                return this.request({
                    name: "login",
                    action: "query"
                }).then((function(n) {
                    var r = null;
                    if (!n.data.tinyID)
                        throw r = new Bp({
                            code: Kp.NO_TINYID,
                            message: Wp
                        }),
                        t.setError(r, !0, e.getNetworkType()).setEnd(),
                        r;
                    if (!n.data.a2Key)
                        throw r = new Bp({
                            code: Kp.NO_A2KEY,
                            message: Jp
                        }),
                        t.setError(r, !0, e.getNetworkType()).setEnd(),
                        r;
                    return t.setNetworkType(e.getNetworkType()).setText("".concat(e.tim.loginInfo.identifier)).setEnd(),
                    Es.log("SignController.login ok. userID=".concat(e.tim.loginInfo.identifier, " loginCost=").concat(Es.timeEnd(Pd), "ms")),
                    e.emitInnerEvent(ed, {
                        a2Key: n.data.a2Key,
                        tinyID: n.data.tinyID
                    }),
                    Ld(n.data)
                }
                )).catch((function(n) {
                    return e.probeNetwork().then((function(e) {
                        var r = Jn(e, 2)
                          , o = r[0]
                          , i = r[1];
                        t.setError(n, o, i).setEnd(!0)
                    }
                    )),
                    Es.error("SignController.login failed. error:", n),
                    Nd(n)
                }
                ))
            }
        }, {
            key: "logout",
            value: function() {
                return new Wd(eg).setNetworkType(this.getNetworkType()).setText("userID=".concat(this.tim.loginInfo.identifier, " type=").concat("longPollLogout")).setEnd(!0),
                Es.info("SignController.logout"),
                this.emitInnerEvent(td),
                this._logout(Mp).then(this._emitLogoutSuccess.bind(this)).catch(this._emitLogoutSuccess.bind(this))
            }
        }, {
            key: "_logout",
            value: function(e) {
                var t = this.tim.notificationController
                  , n = e === Ip ? "logout" : "longPollLogout"
                  , r = e === Ip ? {
                    name: n,
                    action: "query"
                } : {
                    name: n,
                    action: "query",
                    param: {
                        longPollID: t.getLongPollID()
                    }
                };
                return this.request(r).catch((function(e) {
                    return Es.error("SignController._logout error:", e),
                    Nd(e)
                }
                ))
            }
        }, {
            key: "_checkLoginInfo",
            value: function(e) {
                var t = 0
                  , n = "";
                return null === e.SDKAppID ? (t = Kp.NO_SDKAPPID,
                n = Hp) : null === e.accountType ? (t = Kp.NO_ACCOUNT_TYPE,
                n = $p) : null === e.identifier ? (t = Kp.NO_IDENTIFIER,
                n = zp) : null === e.userSig && (t = Kp.NO_USERSIG,
                n = Yp),
                au(t) || au(n) ? {} : {
                    code: t,
                    message: n
                }
            }
        }, {
            key: "_emitLogoutSuccess",
            value: function() {
                return this.emitInnerEvent(nd),
                Ld({})
            }
        }, {
            key: "_onMultipleAccountKickedOut",
            value: function() {
                var e = this;
                new Wd(tg).setNetworkType(this.getNetworkType()).setText(En.KICKED_OUT_MULT_ACCOUNT).setEnd(!0),
                Es.warn("SignController._onMultipleAccountKickedOut kicked out. userID=".concat(this.tim.loginInfo.identifier)),
                this.tim.logout().then((function() {
                    e.emitOuterEvent(Cn.KICKED_OUT, {
                        type: En.KICKED_OUT_MULT_ACCOUNT
                    })
                }
                ))
            }
        }, {
            key: "_onMultipleDeviceKickedOut",
            value: function() {
                var e = this;
                new Wd(tg).setNetworkType(this.getNetworkType()).setText(En.KICKED_OUT_MULT_DEVICE).setEnd(!0),
                Es.warn("SignController._onMultipleDeviceKickedOut kicked out. userID=".concat(this.tim.loginInfo.identifier)),
                this.tim.logout().then((function() {
                    e.emitOuterEvent(Cn.KICKED_OUT, {
                        type: En.KICKED_OUT_MULT_DEVICE
                    })
                }
                ))
            }
        }, {
            key: "_onUserSigExpired",
            value: function() {
                new Wd(tg).setNetworkType(this.getNetworkType()).setText(En.KICKED_OUT_USERSIG_EXPIRED).setEnd(!0),
                Es.warn("SignController._onUserSigExpired: userSig 签名过期被踢下线"),
                this.emitOuterEvent(Cn.KICKED_OUT, {
                    type: En.KICKED_OUT_USERSIG_EXPIRED
                }),
                this.tim.resetSDK()
            }
        }, {
            key: "reset",
            value: function() {
                Es.info("SignController.reset")
            }
        }]),
        n
    }(Dd)
      , rm = function(e, t) {
        return function() {
            for (var n = new Array(arguments.length), r = 0; r < n.length; r++)
                n[r] = arguments[r];
            return e.apply(t, n)
        }
    }
      , om = Object.prototype.toString;
    function im(e) {
        return "[object Array]" === om.call(e)
    }
    function am(e) {
        return void 0 === e
    }
    function sm(e) {
        return null !== e && "object" == typeof e
    }
    function um(e) {
        return "[object Function]" === om.call(e)
    }
    function cm(e, t) {
        if (null != e)
            if ("object" != typeof e && (e = [e]),
            im(e))
                for (var n = 0, r = e.length; n < r; n++)
                    t.call(null, e[n], n, e);
            else
                for (var o in e)
                    Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e)
    }
    var lm = {
        isArray: im,
        isArrayBuffer: function(e) {
            return "[object ArrayBuffer]" === om.call(e)
        },
        isBuffer: function(e) {
            return null !== e && !am(e) && null !== e.constructor && !am(e.constructor) && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
        },
        isFormData: function(e) {
            return "undefined" != typeof FormData && e instanceof FormData
        },
        isArrayBufferView: function(e) {
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
        },
        isString: function(e) {
            return "string" == typeof e
        },
        isNumber: function(e) {
            return "number" == typeof e
        },
        isObject: sm,
        isUndefined: am,
        isDate: function(e) {
            return "[object Date]" === om.call(e)
        },
        isFile: function(e) {
            return "[object File]" === om.call(e)
        },
        isBlob: function(e) {
            return "[object Blob]" === om.call(e)
        },
        isFunction: um,
        isStream: function(e) {
            return sm(e) && um(e.pipe)
        },
        isURLSearchParams: function(e) {
            return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
        },
        isStandardBrowserEnv: function() {
            return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
        },
        forEach: cm,
        merge: function e() {
            var t = {};
            function n(n, r) {
                "object" == typeof t[r] && "object" == typeof n ? t[r] = e(t[r], n) : t[r] = n
            }
            for (var r = 0, o = arguments.length; r < o; r++)
                cm(arguments[r], n);
            return t
        },
        deepMerge: function e() {
            var t = {};
            function n(n, r) {
                "object" == typeof t[r] && "object" == typeof n ? t[r] = e(t[r], n) : t[r] = "object" == typeof n ? e({}, n) : n
            }
            for (var r = 0, o = arguments.length; r < o; r++)
                cm(arguments[r], n);
            return t
        },
        extend: function(e, t, n) {
            return cm(t, (function(t, r) {
                e[r] = n && "function" == typeof t ? rm(t, n) : t
            }
            )),
            e
        },
        trim: function(e) {
            return e.replace(/^\s*/, "").replace(/\s*$/, "")
        }
    };
    function pm(e) {
        return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
    }
    var fm = function(e, t, n) {
        if (!t)
            return e;
        var r;
        if (n)
            r = n(t);
        else if (lm.isURLSearchParams(t))
            r = t.toString();
        else {
            var o = [];
            lm.forEach(t, (function(e, t) {
                null != e && (lm.isArray(e) ? t += "[]" : e = [e],
                lm.forEach(e, (function(e) {
                    lm.isDate(e) ? e = e.toISOString() : lm.isObject(e) && (e = JSON.stringify(e)),
                    o.push(pm(t) + "=" + pm(e))
                }
                )))
            }
            )),
            r = o.join("&")
        }
        if (r) {
            var i = e.indexOf("#");
            -1 !== i && (e = e.slice(0, i)),
            e += (-1 === e.indexOf("?") ? "?" : "&") + r
        }
        return e
    };
    function hm() {
        this.handlers = []
    }
    hm.prototype.use = function(e, t) {
        return this.handlers.push({
            fulfilled: e,
            rejected: t
        }),
        this.handlers.length - 1
    }
    ,
    hm.prototype.eject = function(e) {
        this.handlers[e] && (this.handlers[e] = null)
    }
    ,
    hm.prototype.forEach = function(e) {
        lm.forEach(this.handlers, (function(t) {
            null !== t && e(t)
        }
        ))
    }
    ;
    var dm = hm
      , gm = function(e, t, n) {
        return lm.forEach(n, (function(n) {
            e = n(e, t)
        }
        )),
        e
    }
      , mm = function(e) {
        return !(!e || !e.__CANCEL__)
    };
    function vm() {
        throw new Error("setTimeout has not been defined")
    }
    function ym() {
        throw new Error("clearTimeout has not been defined")
    }
    var _m = vm
      , Im = ym;
    function Mm(e) {
        if (_m === setTimeout)
            return setTimeout(e, 0);
        if ((_m === vm || !_m) && setTimeout)
            return _m = setTimeout,
            setTimeout(e, 0);
        try {
            return _m(e, 0)
        } catch (t) {
            try {
                return _m.call(null, e, 0)
            } catch (t) {
                return _m.call(this, e, 0)
            }
        }
    }
    "function" == typeof gs.setTimeout && (_m = setTimeout),
    "function" == typeof gs.clearTimeout && (Im = clearTimeout);
    var Cm, Em = [], Sm = !1, Tm = -1;
    function Dm() {
        Sm && Cm && (Sm = !1,
        Cm.length ? Em = Cm.concat(Em) : Tm = -1,
        Em.length && km())
    }
    function km() {
        if (!Sm) {
            var e = Mm(Dm);
            Sm = !0;
            for (var t = Em.length; t; ) {
                for (Cm = Em,
                Em = []; ++Tm < t; )
                    Cm && Cm[Tm].run();
                Tm = -1,
                t = Em.length
            }
            Cm = null,
            Sm = !1,
            function(e) {
                if (Im === clearTimeout)
                    return clearTimeout(e);
                if ((Im === ym || !Im) && clearTimeout)
                    return Im = clearTimeout,
                    clearTimeout(e);
                try {
                    Im(e)
                } catch (t) {
                    try {
                        return Im.call(null, e)
                    } catch (t) {
                        return Im.call(this, e)
                    }
                }
            }(e)
        }
    }
    function Om(e, t) {
        this.fun = e,
        this.array = t
    }
    Om.prototype.run = function() {
        this.fun.apply(null, this.array)
    }
    ;
    function Rm() {}
    var Am = Rm
      , wm = Rm
      , Lm = Rm
      , Nm = Rm
      , bm = Rm
      , Pm = Rm
      , Gm = Rm;
    var Um = gs.performance || {}
      , xm = Um.now || Um.mozNow || Um.msNow || Um.oNow || Um.webkitNow || function() {
        return (new Date).getTime()
    }
    ;
    var qm = new Date;
    var Fm = {
        nextTick: function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
            Em.push(new Om(e,t)),
            1 !== Em.length || Sm || Mm(km)
        },
        title: "browser",
        browser: !0,
        env: {},
        argv: [],
        version: "",
        versions: {},
        on: Am,
        addListener: wm,
        once: Lm,
        off: Nm,
        removeListener: bm,
        removeAllListeners: Pm,
        emit: Gm,
        binding: function(e) {
            throw new Error("process.binding is not supported")
        },
        cwd: function() {
            return "/"
        },
        chdir: function(e) {
            throw new Error("process.chdir is not supported")
        },
        umask: function() {
            return 0
        },
        hrtime: function(e) {
            var t = .001 * xm.call(Um)
              , n = Math.floor(t)
              , r = Math.floor(t % 1 * 1e9);
            return e && (n -= e[0],
            (r -= e[1]) < 0 && (n--,
            r += 1e9)),
            [n, r]
        },
        platform: "browser",
        release: {},
        config: {},
        uptime: function() {
            return (new Date - qm) / 1e3
        }
    }
      , jm = function(e, t) {
        lm.forEach(e, (function(n, r) {
            r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n,
            delete e[r])
        }
        ))
    }
      , Vm = function(e, t, n, r, o) {
        return function(e, t, n, r, o) {
            return e.config = t,
            n && (e.code = n),
            e.request = r,
            e.response = o,
            e.isAxiosError = !0,
            e.toJSON = function() {
                return {
                    message: this.message,
                    name: this.name,
                    description: this.description,
                    number: this.number,
                    fileName: this.fileName,
                    lineNumber: this.lineNumber,
                    columnNumber: this.columnNumber,
                    stack: this.stack,
                    config: this.config,
                    code: this.code
                }
            }
            ,
            e
        }(new Error(e), t, n, r, o)
    }
      , Bm = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]
      , Km = lm.isStandardBrowserEnv() ? function() {
        var e, t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
        function r(e) {
            var r = e;
            return t && (n.setAttribute("href", r),
            r = n.href),
            n.setAttribute("href", r),
            {
                href: n.href,
                protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                host: n.host,
                search: n.search ? n.search.replace(/^\?/, "") : "",
                hash: n.hash ? n.hash.replace(/^#/, "") : "",
                hostname: n.hostname,
                port: n.port,
                pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
            }
        }
        return e = r(window.location.href),
        function(t) {
            var n = lm.isString(t) ? r(t) : t;
            return n.protocol === e.protocol && n.host === e.host
        }
    }() : function() {
        return !0
    }
      , Hm = lm.isStandardBrowserEnv() ? {
        write: function(e, t, n, r, o, i) {
            var a = [];
            a.push(e + "=" + encodeURIComponent(t)),
            lm.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()),
            lm.isString(r) && a.push("path=" + r),
            lm.isString(o) && a.push("domain=" + o),
            !0 === i && a.push("secure"),
            document.cookie = a.join("; ")
        },
        read: function(e) {
            var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
            return t ? decodeURIComponent(t[3]) : null
        },
        remove: function(e) {
            this.write(e, "", Date.now() - 864e5)
        }
    } : {
        write: function() {},
        read: function() {
            return null
        },
        remove: function() {}
    }
      , $m = function(e) {
        return new Promise((function(t, n) {
            var r = e.data
              , o = e.headers;
            lm.isFormData(r) && delete o["Content-Type"];
            var i = new XMLHttpRequest;
            if (e.auth) {
                var a = e.auth.username || ""
                  , s = e.auth.password || "";
                o.Authorization = "Basic " + btoa(a + ":" + s)
            }
            var u, c, l = (u = e.baseURL,
            c = e.url,
            u && !/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(c) ? function(e, t) {
                return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
            }(u, c) : c);
            if (i.open(e.method.toUpperCase(), fm(l, e.params, e.paramsSerializer), !0),
            i.timeout = e.timeout,
            i.onreadystatechange = function() {
                if (i && 4 === i.readyState && (0 !== i.status || i.responseURL && 0 === i.responseURL.indexOf("file:"))) {
                    var r = "getAllResponseHeaders"in i ? function(e) {
                        var t, n, r, o = {};
                        return e ? (lm.forEach(e.split("\n"), (function(e) {
                            if (r = e.indexOf(":"),
                            t = lm.trim(e.substr(0, r)).toLowerCase(),
                            n = lm.trim(e.substr(r + 1)),
                            t) {
                                if (o[t] && Bm.indexOf(t) >= 0)
                                    return;
                                o[t] = "set-cookie" === t ? (o[t] ? o[t] : []).concat([n]) : o[t] ? o[t] + ", " + n : n
                            }
                        }
                        )),
                        o) : o
                    }(i.getAllResponseHeaders()) : null
                      , o = {
                        data: e.responseType && "text" !== e.responseType ? i.response : i.responseText,
                        status: i.status,
                        statusText: i.statusText,
                        headers: r,
                        config: e,
                        request: i
                    };
                    !function(e, t, n) {
                        var r = n.config.validateStatus;
                        !r || r(n.status) ? e(n) : t(Vm("Request failed with status code " + n.status, n.config, null, n.request, n))
                    }(t, n, o),
                    i = null
                }
            }
            ,
            i.onabort = function() {
                i && (n(Vm("Request aborted", e, "ECONNABORTED", i)),
                i = null)
            }
            ,
            i.onerror = function() {
                n(Vm("Network Error", e, null, i)),
                i = null
            }
            ,
            i.ontimeout = function() {
                var t = "timeout of " + e.timeout + "ms exceeded";
                e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                n(Vm(t, e, "ECONNABORTED", i)),
                i = null
            }
            ,
            lm.isStandardBrowserEnv()) {
                var p = Hm
                  , f = (e.withCredentials || Km(l)) && e.xsrfCookieName ? p.read(e.xsrfCookieName) : void 0;
                f && (o[e.xsrfHeaderName] = f)
            }
            if ("setRequestHeader"in i && lm.forEach(o, (function(e, t) {
                void 0 === r && "content-type" === t.toLowerCase() ? delete o[t] : i.setRequestHeader(t, e)
            }
            )),
            lm.isUndefined(e.withCredentials) || (i.withCredentials = !!e.withCredentials),
            e.responseType)
                try {
                    i.responseType = e.responseType
                } catch (h) {
                    if ("json" !== e.responseType)
                        throw h
                }
            "function" == typeof e.onDownloadProgress && i.addEventListener("progress", e.onDownloadProgress),
            "function" == typeof e.onUploadProgress && i.upload && i.upload.addEventListener("progress", e.onUploadProgress),
            e.cancelToken && e.cancelToken.promise.then((function(e) {
                i && (i.abort(),
                n(e),
                i = null)
            }
            )),
            void 0 === r && (r = null),
            i.send(r)
        }
        ))
    }
      , zm = {
        "Content-Type": "application/x-www-form-urlencoded"
    };
    function Ym(e, t) {
        !lm.isUndefined(e) && lm.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
    }
    var Wm, Jm = {
        adapter: (("undefined" != typeof XMLHttpRequest || void 0 !== Fm && "[object process]" === Object.prototype.toString.call(Fm)) && (Wm = $m),
        Wm),
        transformRequest: [function(e, t) {
            return jm(t, "Accept"),
            jm(t, "Content-Type"),
            lm.isFormData(e) || lm.isArrayBuffer(e) || lm.isBuffer(e) || lm.isStream(e) || lm.isFile(e) || lm.isBlob(e) ? e : lm.isArrayBufferView(e) ? e.buffer : lm.isURLSearchParams(e) ? (Ym(t, "application/x-www-form-urlencoded;charset=utf-8"),
            e.toString()) : lm.isObject(e) ? (Ym(t, "application/json;charset=utf-8"),
            JSON.stringify(e)) : e
        }
        ],
        transformResponse: [function(e) {
            if ("string" == typeof e)
                try {
                    e = JSON.parse(e)
                } catch (t) {}
            return e
        }
        ],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        validateStatus: function(e) {
            return e >= 200 && e < 300
        }
    };
    Jm.headers = {
        common: {
            Accept: "application/json, text/plain, */*"
        }
    },
    lm.forEach(["delete", "get", "head"], (function(e) {
        Jm.headers[e] = {}
    }
    )),
    lm.forEach(["post", "put", "patch"], (function(e) {
        Jm.headers[e] = lm.merge(zm)
    }
    ));
    var Xm = Jm;
    function Qm(e) {
        e.cancelToken && e.cancelToken.throwIfRequested()
    }
    var Zm = function(e) {
        return Qm(e),
        e.headers = e.headers || {},
        e.data = gm(e.data, e.headers, e.transformRequest),
        e.headers = lm.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers),
        lm.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function(t) {
            delete e.headers[t]
        }
        )),
        (e.adapter || Xm.adapter)(e).then((function(t) {
            return Qm(e),
            t.data = gm(t.data, t.headers, e.transformResponse),
            t
        }
        ), (function(t) {
            return mm(t) || (Qm(e),
            t && t.response && (t.response.data = gm(t.response.data, t.response.headers, e.transformResponse))),
            Promise.reject(t)
        }
        ))
    }
      , ev = function(e, t) {
        t = t || {};
        var n = {}
          , r = ["url", "method", "params", "data"]
          , o = ["headers", "auth", "proxy"]
          , i = ["baseURL", "url", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "maxContentLength", "validateStatus", "maxRedirects", "httpAgent", "httpsAgent", "cancelToken", "socketPath"];
        lm.forEach(r, (function(e) {
            void 0 !== t[e] && (n[e] = t[e])
        }
        )),
        lm.forEach(o, (function(r) {
            lm.isObject(t[r]) ? n[r] = lm.deepMerge(e[r], t[r]) : void 0 !== t[r] ? n[r] = t[r] : lm.isObject(e[r]) ? n[r] = lm.deepMerge(e[r]) : void 0 !== e[r] && (n[r] = e[r])
        }
        )),
        lm.forEach(i, (function(r) {
            void 0 !== t[r] ? n[r] = t[r] : void 0 !== e[r] && (n[r] = e[r])
        }
        ));
        var a = r.concat(o).concat(i)
          , s = Object.keys(t).filter((function(e) {
            return -1 === a.indexOf(e)
        }
        ));
        return lm.forEach(s, (function(r) {
            void 0 !== t[r] ? n[r] = t[r] : void 0 !== e[r] && (n[r] = e[r])
        }
        )),
        n
    };
    function tv(e) {
        this.defaults = e,
        this.interceptors = {
            request: new dm,
            response: new dm
        }
    }
    tv.prototype.request = function(e) {
        "string" == typeof e ? (e = arguments[1] || {}).url = arguments[0] : e = e || {},
        (e = ev(this.defaults, e)).method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";
        var t = [Zm, void 0]
          , n = Promise.resolve(e);
        for (this.interceptors.request.forEach((function(e) {
            t.unshift(e.fulfilled, e.rejected)
        }
        )),
        this.interceptors.response.forEach((function(e) {
            t.push(e.fulfilled, e.rejected)
        }
        )); t.length; )
            n = n.then(t.shift(), t.shift());
        return n
    }
    ,
    tv.prototype.getUri = function(e) {
        return e = ev(this.defaults, e),
        fm(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
    }
    ,
    lm.forEach(["delete", "get", "head", "options"], (function(e) {
        tv.prototype[e] = function(t, n) {
            return this.request(lm.merge(n || {}, {
                method: e,
                url: t
            }))
        }
    }
    )),
    lm.forEach(["post", "put", "patch"], (function(e) {
        tv.prototype[e] = function(t, n, r) {
            return this.request(lm.merge(r || {}, {
                method: e,
                url: t,
                data: n
            }))
        }
    }
    ));
    var nv = tv;
    function rv(e) {
        this.message = e
    }
    rv.prototype.toString = function() {
        return "Cancel" + (this.message ? ": " + this.message : "")
    }
    ,
    rv.prototype.__CANCEL__ = !0;
    var ov = rv;
    function iv(e) {
        if ("function" != typeof e)
            throw new TypeError("executor must be a function.");
        var t;
        this.promise = new Promise((function(e) {
            t = e
        }
        ));
        var n = this;
        e((function(e) {
            n.reason || (n.reason = new ov(e),
            t(n.reason))
        }
        ))
    }
    iv.prototype.throwIfRequested = function() {
        if (this.reason)
            throw this.reason
    }
    ,
    iv.source = function() {
        var e;
        return {
            token: new iv((function(t) {
                e = t
            }
            )),
            cancel: e
        }
    }
    ;
    var av = iv;
    function sv(e) {
        var t = new nv(e)
          , n = rm(nv.prototype.request, t);
        return lm.extend(n, nv.prototype, t),
        lm.extend(n, t),
        n
    }
    var uv = sv(Xm);
    uv.Axios = nv,
    uv.create = function(e) {
        return sv(ev(uv.defaults, e))
    }
    ,
    uv.Cancel = ov,
    uv.CancelToken = av,
    uv.isCancel = mm,
    uv.all = function(e) {
        return Promise.all(e)
    }
    ,
    uv.spread = function(e) {
        return function(t) {
            return e.apply(null, t)
        }
    }
    ;
    var cv = uv
      , lv = uv;
    cv.default = lv;
    var pv = cv
      , fv = pv.create({
        timeout: 3e4,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
        }
    });
    fv.interceptors.response.use((function(e) {
        var t = e.data
          , n = t.error_code
          , r = t.ErrorCode;
        return Ts(n) && (r = n),
        r !== Qu.SUCCESS && (e.data.ErrorCode = Number(r)),
        e
    }
    ), (function(e) {
        return "Network Error" === e.message && (!0 === fv.defaults.withCredentials && Es.warn("Network Error, try to close `IMAxios.defaults.withCredentials` to false. (IMAxios.js)"),
        fv.defaults.withCredentials = !1),
        Promise.reject(e)
    }
    ));
    var hv = function() {
        function e() {
            bn(this, e)
        }
        return Gn(e, [{
            key: "request",
            value: function(e) {
                console.warn("请注意： ConnectionBase.request() 方法必须被派生类重写:")
            }
        }, {
            key: "_checkOptions",
            value: function(e) {
                if (!1 == !!e.url)
                    throw new Bp({
                        code: Kp.NETWORK_BASE_OPTIONS_NO_URL,
                        message: jf
                    })
            }
        }, {
            key: "_initOptions",
            value: function(e) {
                e.method = ["POST", "GET", "PUT", "DELETE", "OPTION"].indexOf(e.method) >= 0 ? e.method : "POST",
                e.dataType = e.dataType || "json",
                e.responseType = e.responseType || "json"
            }
        }]),
        e
    }()
      , dv = function(e) {
        Fn(n, e);
        var t = Wn(n);
        function n() {
            var e;
            return bn(this, n),
            (e = t.call(this)).retry = 2,
            e
        }
        return Gn(n, [{
            key: "request",
            value: function(e) {
                return this._checkOptions(e),
                this._initOptions(e),
                this._requestWithRetry({
                    url: e.url,
                    data: e.data,
                    method: e.method
                })
            }
        }, {
            key: "_requestWithRetry",
            value: function(e) {
                var t = this
                  , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                return fv(e).catch((function(r) {
                    return t.retry && n < t.retry ? t._requestWithRetry(e, ++n) : Nd(new Bp({
                        code: r.code || "",
                        message: r.message || ""
                    }))
                }
                ))
            }
        }]),
        n
    }(hv)
      , gv = function(e) {
        Fn(n, e);
        var t = Wn(n);
        function n() {
            var e;
            return bn(this, n),
            (e = t.call(this)).retry = 2,
            e._request = e.promisify(Ha.request),
            e
        }
        return Gn(n, [{
            key: "request",
            value: function(e) {
                return this._checkOptions(e),
                this._initOptions(e),
                e = qn(qn({}, e), {}, {
                    responseType: "text"
                }),
                this._requestWithRetry(e)
            }
        }, {
            key: "_requestWithRetry",
            value: function(e) {
                var t = this
                  , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                return this._request(e).then(this._handleResolve).catch((function(r) {
                    if (Ds(r.errMsg)) {
                        if (r.errMsg.includes("abort"))
                            return Ld({});
                        if (r.errMsg.includes("timeout"))
                            return t.retry > 0 && n < t.retry ? t._requestWithRetry(e, ++n) : Nd(new Bp({
                                code: Kp.NETWORK_TIMEOUT,
                                message: r.errMsg
                            }));
                        if (r.errMsg.includes("fail"))
                            return t.retry > 0 && n < t.retry ? t._requestWithRetry(e, ++n) : Nd(new Bp({
                                code: Kp.NETWORK_ERROR,
                                message: r.errMsg
                            }))
                    }
                    return Nd(new Bp(qn({
                        code: Kp.UNCAUGHT_ERROR,
                        message: r.message
                    }, r)))
                }
                ))
            }
        }, {
            key: "_handleResolve",
            value: function(e) {
                var t = e.data
                  , n = t.error_code
                  , r = t.ErrorCode;
                return Ts(n) && (r = n),
                r !== Qu.SUCCESS && (e.data.ErrorCode = Number("".concat(r))),
                e
            }
        }, {
            key: "promisify",
            value: function(e) {
                return function(t) {
                    return new Promise((function(n, r) {
                        var o = e(Object.assign({}, t, {
                            success: n,
                            fail: r
                        }));
                        t.updateAbort && t.updateAbort((function() {
                            o && Ls(o.abort) && o.abort()
                        }
                        ))
                    }
                    ))
                }
            }
        }]),
        n
    }(hv)
      , mv = function() {
        function e() {
            bn(this, e),
            this.request = 0,
            this.success = 0,
            this.fail = 0,
            this.reportRate = 10,
            this.requestTimeCost = []
        }
        return Gn(e, [{
            key: "report",
            value: function() {
                if (1 !== this.request) {
                    if (this.request % this.reportRate != 0)
                        return null;
                    var e = this.avgRequestTime()
                      , t = "runLoop reports: success=".concat(this.success, ",fail=").concat(this.fail, ",total=").concat(this.request, ",avg=").concat(e, ",cur=").concat(this.requestTimeCost[this.requestTimeCost.length - 1], ",max=").concat(Math.max.apply(null, this.requestTimeCost), ",min=").concat(Math.min.apply(null, this.requestTimeCost));
                    Es.log(t)
                }
            }
        }, {
            key: "setRequestTime",
            value: function(e, t) {
                var n = Math.abs(t - e);
                100 === this.requestTimeCost.length && this.requestTimeCost.shift(),
                this.requestTimeCost.push(n)
            }
        }, {
            key: "avgRequestTime",
            value: function() {
                for (var e, t = this.requestTimeCost.length, n = 0, r = 0; r < t; r++)
                    n += this.requestTimeCost[r];
                return e = n / t,
                Math.round(100 * e) / 100
            }
        }]),
        e
    }()
      , vv = pv.create({
        timeout: 6e3,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
        }
    });
    vv.interceptors.response.use((function(e) {
        var t = e.data
          , n = t.error_code
          , r = t.ErrorCode;
        return Ts(n) && (r = n),
        r !== Qu.SUCCESS && (e.data.ErrorCode = Number(r)),
        e
    }
    ), (function(e) {
        return "Network Error" === e.message && (!0 === vv.defaults.withCredentials && Es.warn("Network Error, try to close `IMAxiosAVChatroom.defaults.withCredentials` to false. (IMAxiosAVChatroom.js)"),
        vv.defaults.withCredentials = !1),
        Promise.reject(e)
    }
    ));
    var yv = pv.CancelToken
      , _v = function() {
        function e(t) {
            bn(this, e),
            this._initializeOptions(t),
            this._initializeMembers(),
            this.status = new mv
        }
        return Gn(e, [{
            key: "destructor",
            value: function() {
                clearTimeout(this._seedID);
                var e = this._index();
                for (var t in this)
                    Object.prototype.hasOwnProperty.call(this, t) && (this[t] = null);
                return e
            }
        }, {
            key: "setIndex",
            value: function(e) {
                this._index = e
            }
        }, {
            key: "getIndex",
            value: function() {
                return this._index
            }
        }, {
            key: "isRunning",
            value: function() {
                return !this._stoped
            }
        }, {
            key: "_initializeOptions",
            value: function(e) {
                this.options = e
            }
        }, {
            key: "_initializeMembers",
            value: function() {
                this._index = -1,
                this._seedID = 0,
                this._requestStatus = !1,
                this._stoped = !1,
                this._intervalTime = 0,
                this._intervalIncreaseStep = 1e3,
                this._intervalDecreaseStep = 1e3,
                this._intervalTimeMax = 5e3,
                this._protectTimeout = 3e3,
                this._getNoticeSeq = this.options.getNoticeSeq,
                this._retryCount = 0,
                this._responseTime = Date.now(),
                this._responseTimeThreshold = 2e3,
                this.options.isAVChatRoomLoop ? this.requestor = vv : this.requestor = fv,
                Es.log("XHRRunLoop._initializeMembers isAVChatRoomLoop=".concat(!!this.options.isAVChatRoomLoop)),
                this.abort = null
            }
        }, {
            key: "start",
            value: function() {
                0 === this._seedID ? (this._stoped = !1,
                this._send()) : Es.log('XHRRunLoop.start(), XHRRunLoop is running now, if you want to restart runLoop , please run "stop()" first.')
            }
        }, {
            key: "_reset",
            value: function() {
                Es.log("XHRRunLoop._reset(), reset long poll _intervalTime", this._intervalTime),
                this.stop(),
                this.start()
            }
        }, {
            key: "_intervalTimeIncrease",
            value: function() {
                this._intervalTime !== this._responseTimeThreshold && (this._intervalTime < this._responseTimeThreshold && (this._intervalTime += this._intervalIncreaseStep),
                this._intervalTime > this._responseTimeThreshold && (this._intervalTime = this._responseTimeThreshold))
            }
        }, {
            key: "_intervalTimeDecrease",
            value: function() {
                0 !== this._intervalTime && (this._intervalTime > 0 && (this._intervalTime -= this._intervalDecreaseStep),
                this._intervalTime < 0 && (this._intervalTime = 0))
            }
        }, {
            key: "_intervalTimeAdjustment",
            value: function() {
                var e = Date.now();
                100 * Math.floor((e - this._responseTime) / 100) <= this._responseTimeThreshold ? this._intervalTimeIncrease() : this._intervalTimeDecrease(),
                this._responseTime = e
            }
        }, {
            key: "_intervalTimeAdjustmentBaseOnResponseData",
            value: function(e) {
                e.ErrorCode === Qu.SUCCESS ? this._intervalTimeDecrease() : this._intervalTimeIncrease()
            }
        }, {
            key: "_send",
            value: function() {
                var e = this;
                if (!0 !== this._requestStatus) {
                    this._requestStatus = !0,
                    this.status.request++,
                    "function" == typeof this.options.before && this.options.before(this.options.pack.requestData);
                    var t = Date.now()
                      , n = 0;
                    this.requestor.request({
                        url: this.options.pack.getUrl(),
                        data: this.options.pack.requestData,
                        method: this.options.pack.method,
                        cancelToken: new yv((function(t) {
                            e.abort = t
                        }
                        ))
                    }).then((function(r) {
                        if (e._intervalTimeAdjustmentBaseOnResponseData.bind(e)(r.data),
                        e._retryCount > 0 && (e._retryCount = 0),
                        e.status.success++,
                        n = Date.now(),
                        e.status.setRequestTime(t, n),
                        r.data.timecost = n - t,
                        "function" == typeof e.options.success)
                            try {
                                e.options.success({
                                    pack: e.options.pack,
                                    error: !1,
                                    data: e.options.pack.callback(r.data)
                                })
                            } catch (o) {
                                Es.warn("XHRRunLoop._send(), error:", o)
                            }
                        e._requestStatus = !1,
                        !1 === e._stoped && (e._seedID = setTimeout(e._send.bind(e), e._intervalTime)),
                        e.status.report()
                    }
                    )).catch((function(r) {
                        if (e.status.fail++,
                        e._retryCount++,
                        e._intervalTimeAdjustment.bind(e)(),
                        !1 === e._stoped && (e._seedID = setTimeout(e._send.bind(e), e._intervalTime)),
                        e._requestStatus = !1,
                        "function" == typeof e.options.fail && void 0 !== r.request)
                            try {
                                e.options.fail({
                                    pack: e.options.pack,
                                    error: r,
                                    data: !1
                                })
                            } catch (o) {
                                Es.warn("XHRRunLoop._send(), fail callback error:", o),
                                Es.error(o)
                            }
                        n = Date.now(),
                        e.status.setRequestTime(t, n),
                        e.status.report()
                    }
                    ))
                }
            }
        }, {
            key: "stop",
            value: function() {
                this._clearAllTimeOut(),
                this._stoped = !0
            }
        }, {
            key: "_clearAllTimeOut",
            value: function() {
                clearTimeout(this._seedID),
                this._seedID = 0
            }
        }]),
        e
    }()
      , Iv = function() {
        function e(t) {
            bn(this, e),
            this._initializeOptions(t),
            this._initializeMembers(),
            this.status = new mv
        }
        return Gn(e, [{
            key: "destructor",
            value: function() {
                clearTimeout(this._seedID);
                var e = this._index();
                for (var t in this)
                    Object.prototype.hasOwnProperty.call(this, t) && (this[t] = null);
                return e
            }
        }, {
            key: "setIndex",
            value: function(e) {
                this._index = e
            }
        }, {
            key: "isRunning",
            value: function() {
                return !this._stoped
            }
        }, {
            key: "getIndex",
            value: function() {
                return this._index
            }
        }, {
            key: "_initializeOptions",
            value: function(e) {
                this.options = e
            }
        }, {
            key: "_initializeMembers",
            value: function() {
                this._index = -1,
                this._seedID = 0,
                this._requestStatus = !1,
                this._stoped = !1,
                this._intervalTime = 0,
                this._intervalIncreaseStep = 1e3,
                this._intervalDecreaseStep = 1e3,
                this._intervalTimeMax = 5e3,
                this._protectTimeout = 3e3,
                this._getNoticeSeq = this.options.getNoticeSeq,
                this._retryCount = 0,
                this._responseTime = Date.now(),
                this._responseTimeThreshold = 2e3,
                this.requestor = new gv,
                this.abort = null
            }
        }, {
            key: "start",
            value: function() {
                0 === this._seedID ? (this._stoped = !1,
                this._send()) : Es.log('WXRunLoop.start(): WXRunLoop is running now, if you want to restart runLoop , please run "stop()" first.')
            }
        }, {
            key: "_reset",
            value: function() {
                Es.log("WXRunLoop.reset(), long poll _intervalMaxRate", this._intervalMaxRate),
                this.stop(),
                this.start()
            }
        }, {
            key: "_intervalTimeIncrease",
            value: function() {
                this._intervalTime !== this._responseTimeThreshold && (this._intervalTime < this._responseTimeThreshold && (this._intervalTime += this._intervalIncreaseStep),
                this._intervalTime > this._responseTimeThreshold && (this._intervalTime = this._responseTimeThreshold))
            }
        }, {
            key: "_intervalTimeDecrease",
            value: function() {
                0 !== this._intervalTime && (this._intervalTime > 0 && (this._intervalTime -= this._intervalDecreaseStep),
                this._intervalTime < 0 && (this._intervalTime = 0))
            }
        }, {
            key: "_intervalTimeAdjustment",
            value: function() {
                var e = Date.now();
                100 * Math.floor((e - this._responseTime) / 100) <= this._responseTimeThreshold ? this._intervalTimeIncrease() : this._intervalTimeDecrease(),
                this._responseTime = e
            }
        }, {
            key: "_intervalTimeAdjustmentBaseOnResponseData",
            value: function(e) {
                e.ErrorCode === Qu.SUCCESS ? this._intervalTimeDecrease() : this._intervalTimeIncrease()
            }
        }, {
            key: "_send",
            value: function() {
                var e = this;
                if (!0 !== this._requestStatus) {
                    var t = this;
                    this._requestStatus = !0,
                    this.status.request++,
                    "function" == typeof this.options.before && this.options.before(t.options.pack.requestData);
                    var n = Date.now()
                      , r = 0;
                    this.requestor.request({
                        url: t.options.pack.getUrl(),
                        data: t.options.pack.requestData,
                        method: t.options.pack.method,
                        updateAbort: function(t) {
                            e.abort = t
                        }
                    }).then((function(o) {
                        if (t._intervalTimeAdjustmentBaseOnResponseData.bind(e)(o.data),
                        t._retryCount > 0 && (t._retryCount = 0),
                        e.status.success++,
                        r = Date.now(),
                        e.status.setRequestTime(n, r),
                        o.data.timecost = r - n,
                        "function" == typeof t.options.success)
                            try {
                                e.options.success({
                                    pack: e.options.pack,
                                    error: !1,
                                    data: e.options.pack.callback(o.data)
                                })
                            } catch (i) {
                                Es.warn("WXRunLoop._send(), error:", i)
                            }
                        t._requestStatus = !1,
                        !1 === t._stoped && (t._seedID = setTimeout(t._send.bind(t), t._intervalTime)),
                        e.status.report()
                    }
                    )).catch((function(o) {
                        if (e.status.fail++,
                        t._retryCount++,
                        t._intervalTimeAdjustment.bind(e)(),
                        !1 === t._stoped && (t._seedID = setTimeout(t._send.bind(t), t._intervalTime)),
                        t._requestStatus = !1,
                        "function" == typeof t.options.fail)
                            try {
                                e.options.fail({
                                    pack: e.options.pack,
                                    error: o,
                                    data: !1
                                })
                            } catch (i) {
                                Es.warn("WXRunLoop._send(), fail callback error:", i),
                                Es.error(i)
                            }
                        r = Date.now(),
                        e.status.setRequestTime(n, r),
                        e.status.report()
                    }
                    ))
                }
            }
        }, {
            key: "stop",
            value: function() {
                this._clearAllTimeOut(),
                this._stoped = !0
            }
        }, {
            key: "_clearAllTimeOut",
            value: function() {
                clearTimeout(this._seedID),
                this._seedID = 0
            }
        }]),
        e
    }()
      , Mv = function() {
        function e(t) {
            bn(this, e),
            this.tim = t,
            this.httpConnection = Ka ? new gv : new dv,
            this.keepAliveConnections = []
        }
        return Gn(e, [{
            key: "initializeListener",
            value: function() {
                this.tim.innerEmitter.on(td, this._stopAllRunLoop, this)
            }
        }, {
            key: "request",
            value: function(e) {
                var t = {
                    url: e.url,
                    data: e.requestData,
                    method: e.method,
                    callback: e.callback
                };
                return this.httpConnection.request(t).then((function(t) {
                    return t.data = e.callback(t.data),
                    t.data.errorCode !== Qu.SUCCESS ? Nd(new Bp({
                        code: t.data.errorCode,
                        message: t.data.errorInfo
                    })) : t
                }
                ))
            }
        }, {
            key: "createRunLoop",
            value: function(e) {
                var t = this.createKeepAliveConnection(e);
                return t.setIndex(this.keepAliveConnections.push(t) - 1),
                t
            }
        }, {
            key: "stopRunLoop",
            value: function(e) {
                e.stop()
            }
        }, {
            key: "_stopAllRunLoop",
            value: function() {
                for (var e = this.keepAliveConnections.length, t = 0; t < e; t++)
                    this.keepAliveConnections[t].stop()
            }
        }, {
            key: "destroyRunLoop",
            value: function(e) {
                e.stop();
                var t = e.destructor();
                this.keepAliveConnections.slice(t, 1)
            }
        }, {
            key: "startRunLoopExclusive",
            value: function(e) {
                for (var t = e.getIndex(), n = 0; n < this.keepAliveConnections.length; n++)
                    n !== t && this.keepAliveConnections[n].stop();
                e.start()
            }
        }, {
            key: "createKeepAliveConnection",
            value: function(e) {
                return Ka ? new Iv(e) : (this.tim.options.runLoopNetType === _p || this.tim.options.runLoopNetType,
                new _v(e))
            }
        }, {
            key: "clearAll",
            value: function() {
                this.conn.cancelAll()
            }
        }, {
            key: "reset",
            value: function() {
                this.keepAliveConnections = []
            }
        }]),
        e
    }()
      , Cv = function() {
        function e(t) {
            bn(this, e),
            this.tim = t,
            this.tim.innerEmitter.on(od, this._onErrorDetected, this)
        }
        return Gn(e, [{
            key: "_onErrorDetected",
            value: function(e) {
                var t = e.data;
                new Wd(tm).setText("code=".concat(t.code, " message=").concat(t.message)).setNetworkType(this.tim.netMonitor.getNetworkType()).setEnd(),
                t.code ? Es.warn("Oops! code:".concat(t.code, " message:").concat(t.message)) : Es.warn("Oops! message:".concat(t.message, " stack:").concat(t.stack)),
                this.tim.outerEmitter.emit(Cn.ERROR, t)
            }
        }]),
        e
    }()
      , Ev = function() {
        function e(t) {
            var n = this;
            bn(this, e),
            au(t) || (this.userID = t.userID || "",
            this.nick = t.nick || "",
            this.gender = t.gender || "",
            this.birthday = t.birthday || 0,
            this.location = t.location || "",
            this.selfSignature = t.selfSignature || "",
            this.allowType = t.allowType || En.ALLOW_TYPE_ALLOW_ANY,
            this.language = t.language || 0,
            this.avatar = t.avatar || "",
            this.messageSettings = t.messageSettings || 0,
            this.adminForbidType = t.adminForbidType || En.FORBID_TYPE_NONE,
            this.level = t.level || 0,
            this.role = t.role || 0,
            this.lastUpdatedTime = 0,
            this.profileCustomField = [],
            au(t.profileCustomField) || t.profileCustomField.forEach((function(e) {
                n.profileCustomField.push({
                    key: e.key,
                    value: e.value
                })
            }
            )))
        }
        return Gn(e, [{
            key: "validate",
            value: function(e) {
                var t = !0
                  , n = "";
                if (au(e))
                    return {
                        valid: !1,
                        tips: "empty options"
                    };
                if (e.profileCustomField)
                    for (var r = e.profileCustomField.length, o = null, i = 0; i < r; i++) {
                        if (o = e.profileCustomField[i],
                        !Ds(o.key) || -1 === o.key.indexOf("Tag_Profile_Custom"))
                            return {
                                valid: !1,
                                tips: "自定义资料字段的前缀必须是 Tag_Profile_Custom"
                            };
                        if (!Ds(o.value))
                            return {
                                valid: !1,
                                tips: "自定义资料字段的 value 必须是字符串"
                            }
                    }
                for (var a in e)
                    if (Object.prototype.hasOwnProperty.call(e, a)) {
                        if ("profileCustomField" === a)
                            continue;
                        if (au(e[a]) && !Ds(e[a]) && !Ts(e[a])) {
                            n = "key:" + a + ", invalid value:" + e[a],
                            t = !1;
                            continue
                        }
                        switch (a) {
                        case "nick":
                            Ds(e[a]) || (n = "nick should be a string",
                            t = !1),
                            js(e[a]) > 500 && (n = "nick name limited: must less than or equal to ".concat(500, " bytes, current size: ").concat(js(e[a]), " bytes"),
                            t = !1);
                            break;
                        case "gender":
                            Hs(Ep, e.gender) || (n = "key:gender, invalid value:" + e.gender,
                            t = !1);
                            break;
                        case "birthday":
                            Ts(e.birthday) || (n = "birthday should be a number",
                            t = !1);
                            break;
                        case "location":
                            Ds(e.location) || (n = "location should be a string",
                            t = !1);
                            break;
                        case "selfSignature":
                            Ds(e.selfSignature) || (n = "selfSignature should be a string",
                            t = !1);
                            break;
                        case "allowType":
                            Hs(Tp, e.allowType) || (n = "key:allowType, invalid value:" + e.allowType,
                            t = !1);
                            break;
                        case "language":
                            Ts(e.language) || (n = "language should be a number",
                            t = !1);
                            break;
                        case "avatar":
                            Ds(e.avatar) || (n = "avatar should be a string",
                            t = !1);
                            break;
                        case "messageSettings":
                            0 !== e.messageSettings && 1 !== e.messageSettings && (n = "messageSettings should be 0 or 1",
                            t = !1);
                            break;
                        case "adminForbidType":
                            Hs(Sp, e.adminForbidType) || (n = "key:adminForbidType, invalid value:" + e.adminForbidType,
                            t = !1);
                            break;
                        case "level":
                            Ts(e.level) || (n = "level should be a number",
                            t = !1);
                            break;
                        case "role":
                            Ts(e.role) || (n = "role should be a number",
                            t = !1);
                            break;
                        default:
                            n = "unknown key:" + a + "  " + e[a],
                            t = !1
                        }
                    }
                return {
                    valid: t,
                    tips: n
                }
            }
        }]),
        e
    }()
      , Sv = function() {
        function e(t) {
            bn(this, e),
            this.userController = t,
            this.TAG = "profile",
            this.Actions = {
                Q: "query",
                U: "update"
            },
            this.accountProfileMap = new Map,
            this.expirationTime = 864e5
        }
        return Gn(e, [{
            key: "setExpirationTime",
            value: function(e) {
                this.expirationTime = e
            }
        }, {
            key: "getUserProfile",
            value: function(e) {
                var t = this
                  , n = e.userIDList;
                e.fromAccount = this.userController.getMyAccount(),
                n.length > 100 && (Es.warn("ProfileHandler.getUserProfile 获取用户资料人数不能超过100人"),
                n.length = 100);
                for (var r, o = [], i = [], a = 0, s = n.length; a < s; a++)
                    r = n[a],
                    this.userController.isMyFriend(r) && this._containsAccount(r) ? i.push(this._getProfileFromMap(r)) : o.push(r);
                if (0 === o.length)
                    return Ld(i);
                e.toAccount = o;
                var u = e.bFromGetMyProfile || !1
                  , c = [];
                e.toAccount.forEach((function(e) {
                    c.push({
                        toAccount: e,
                        standardSequence: 0,
                        customSequence: 0
                    })
                }
                )),
                e.userItem = c;
                var l = new Wd(Yg);
                l.setText(n.length > 5 ? "userIDList.length=".concat(n.length) : "userIDList=".concat(n));
                var p = this.userController.generateConfig(this.TAG, this.Actions.Q, e);
                return this.userController.request(p).then((function(e) {
                    l.setNetworkType(t.userController.getNetworkType()).setEnd(),
                    Es.info("ProfileHandler.getUserProfile ok");
                    var n = t._handleResponse(e).concat(i);
                    return u ? (t.userController.onGotMyProfile(),
                    new Rd(n[0])) : new Rd(n)
                }
                )).catch((function(e) {
                    return t.userController.probeNetwork().then((function(t) {
                        var n = Jn(t, 2)
                          , r = n[0]
                          , o = n[1];
                        l.setError(e, r, o).setEnd()
                    }
                    )),
                    Es.error("ProfileHandler.getUserProfile error:", e),
                    Nd(e)
                }
                ))
            }
        }, {
            key: "getMyProfile",
            value: function() {
                var e = this.userController.getMyAccount();
                if (Es.log("ProfileHandler.getMyProfile myAccount=" + e),
                this._fillMap(),
                this._containsAccount(e)) {
                    var t = this._getProfileFromMap(e);
                    return Es.debug("ProfileHandler.getMyProfile from cache, myProfile:" + JSON.stringify(t)),
                    this.userController.onGotMyProfile(),
                    Ld(t)
                }
                return this.getUserProfile({
                    fromAccount: e,
                    userIDList: [e],
                    bFromGetMyProfile: !0
                })
            }
        }, {
            key: "_handleResponse",
            value: function(e) {
                for (var t, n, r = Us.now(), o = e.data.userProfileItem, i = [], a = 0, s = o.length; a < s; a++)
                    "@TLS#NOT_FOUND" !== o[a].to && "" !== o[a].to && (t = o[a].to,
                    n = this._updateMap(t, this._getLatestProfileFromResponse(t, o[a].profileItem)),
                    i.push(n));
                return Es.log("ProfileHandler._handleResponse cost " + (Us.now() - r) + " ms"),
                i
            }
        }, {
            key: "_getLatestProfileFromResponse",
            value: function(e, t) {
                var n = {};
                if (n.userID = e,
                n.profileCustomField = [],
                !au(t))
                    for (var r = 0, o = t.length; r < o; r++)
                        if (t[r].tag.indexOf("Tag_Profile_Custom") > -1)
                            n.profileCustomField.push({
                                key: t[r].tag,
                                value: t[r].value
                            });
                        else
                            switch (t[r].tag) {
                            case Cp.NICK:
                                n.nick = t[r].value;
                                break;
                            case Cp.GENDER:
                                n.gender = t[r].value;
                                break;
                            case Cp.BIRTHDAY:
                                n.birthday = t[r].value;
                                break;
                            case Cp.LOCATION:
                                n.location = t[r].value;
                                break;
                            case Cp.SELFSIGNATURE:
                                n.selfSignature = t[r].value;
                                break;
                            case Cp.ALLOWTYPE:
                                n.allowType = t[r].value;
                                break;
                            case Cp.LANGUAGE:
                                n.language = t[r].value;
                                break;
                            case Cp.AVATAR:
                                n.avatar = t[r].value;
                                break;
                            case Cp.MESSAGESETTINGS:
                                n.messageSettings = t[r].value;
                                break;
                            case Cp.ADMINFORBIDTYPE:
                                n.adminForbidType = t[r].value;
                                break;
                            case Cp.LEVEL:
                                n.level = t[r].value;
                                break;
                            case Cp.ROLE:
                                n.role = t[r].value;
                                break;
                            default:
                                Es.warn("ProfileHandler._handleResponse unkown tag->", t[r].tag, t[r].value)
                            }
                return n
            }
        }, {
            key: "updateMyProfile",
            value: function(e) {
                var t = this
                  , n = new Wd(Wg);
                n.setText(JSON.stringify(e));
                var r = (new Ev).validate(e);
                if (!r.valid)
                    return n.setCode(Kp.UPDATE_PROFILE_INVALID_PARAM).setMessage("ProfileHandler.updateMyProfile info:".concat(r.tips)).setNetworkType(this.userController.getNetworkType()).setEnd(),
                    Es.error("ProfileHandler.updateMyProfile info:".concat(r.tips, "，请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#updateMyProfile")),
                    Nd({
                        code: Kp.UPDATE_PROFILE_INVALID_PARAM,
                        message: Gf
                    });
                var o = [];
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && ("profileCustomField" === i ? e.profileCustomField.forEach((function(e) {
                        o.push({
                            tag: e.key,
                            value: e.value
                        })
                    }
                    )) : o.push({
                        tag: Cp[i.toUpperCase()],
                        value: e[i]
                    }));
                if (0 === o.length)
                    return n.setCode(Kp.UPDATE_PROFILE_NO_KEY).setMessage(Uf).setNetworkType(this.userController.getNetworkType()).setEnd(),
                    Es.error("ProfileHandler.updateMyProfile info:".concat(Uf, "，请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#updateMyProfile")),
                    Nd({
                        code: Kp.UPDATE_PROFILE_NO_KEY,
                        message: Uf
                    });
                var a = this.userController.generateConfig(this.TAG, this.Actions.U, {
                    fromAccount: this.userController.getMyAccount(),
                    profileItem: o
                });
                return this.userController.request(a).then((function(r) {
                    n.setNetworkType(t.userController.getNetworkType()).setEnd(),
                    Es.info("ProfileHandler.updateMyProfile ok");
                    var o = t._updateMap(t.userController.getMyAccount(), e);
                    return t.userController.emitOuterEvent(Cn.PROFILE_UPDATED, [o]),
                    Ld(o)
                }
                )).catch((function(e) {
                    return t.userController.probeNetwork().then((function(t) {
                        var r = Jn(t, 2)
                          , o = r[0]
                          , i = r[1];
                        n.setError(e, o, i).setEnd()
                    }
                    )),
                    Es.error("ProfileHandler.updateMyProfile error:", e),
                    Nd(e)
                }
                ))
            }
        }, {
            key: "onProfileModified",
            value: function(e) {
                var t = e.data;
                if (!au(t)) {
                    var n, r, o = t.length;
                    Es.info("ProfileHandler.onProfileModified length=" + o);
                    for (var i = [], a = 0; a < o; a++)
                        n = t[a].userID,
                        r = this._updateMap(n, this._getLatestProfileFromResponse(n, t[a].profileList)),
                        i.push(r);
                    this.userController.emitInnerEvent(ud, i),
                    this.userController.emitOuterEvent(Cn.PROFILE_UPDATED, i)
                }
            }
        }, {
            key: "_fillMap",
            value: function() {
                if (0 === this.accountProfileMap.size) {
                    for (var e = this._getCachedProfiles(), t = Date.now(), n = 0, r = e.length; n < r; n++)
                        t - e[n].lastUpdatedTime < this.expirationTime && this.accountProfileMap.set(e[n].userID, e[n]);
                    Es.log("ProfileHandler._fillMap from cache, map.size=" + this.accountProfileMap.size)
                }
            }
        }, {
            key: "_updateMap",
            value: function(e, t) {
                var n, r = Date.now();
                return this._containsAccount(e) ? (n = this._getProfileFromMap(e),
                t.profileCustomField && Ws(n.profileCustomField, t.profileCustomField),
                xs(n, t, ["profileCustomField"]),
                n.lastUpdatedTime = r) : (n = new Ev(t),
                (this.userController.isMyFriend(e) || e === this.userController.getMyAccount()) && (n.lastUpdatedTime = r,
                this.accountProfileMap.set(e, n))),
                this._flushMap(e === this.userController.getMyAccount()),
                n
            }
        }, {
            key: "_flushMap",
            value: function(e) {
                var t = Xn(this.accountProfileMap.values())
                  , n = this.userController.tim.storage;
                Es.debug("ProfileHandler._flushMap length=".concat(t.length, " flushAtOnce=").concat(e)),
                n.setItem(this.TAG, t, e)
            }
        }, {
            key: "_containsAccount",
            value: function(e) {
                return this.accountProfileMap.has(e)
            }
        }, {
            key: "_getProfileFromMap",
            value: function(e) {
                return this.accountProfileMap.get(e)
            }
        }, {
            key: "_getCachedProfiles",
            value: function() {
                var e = this.userController.tim.storage.getItem(this.TAG);
                return au(e) ? [] : e
            }
        }, {
            key: "onConversationsProfileUpdated",
            value: function(e) {
                for (var t, n, r, o = [], i = 0, a = e.length; i < a; i++)
                    n = (t = e[i]).userID,
                    this.userController.isMyFriend(n) && (this._containsAccount(n) ? (r = this._getProfileFromMap(n),
                    xs(r, t) > 0 && o.push(n)) : o.push(t.userID));
                0 !== o.length && (Es.info("ProfileHandler.onConversationsProfileUpdated toAccount:", o),
                this.getUserProfile({
                    userIDList: o
                }))
            }
        }, {
            key: "reset",
            value: function() {
                this._flushMap(!0),
                this.accountProfileMap.clear()
            }
        }]),
        e
    }();
    we({
        target: "String",
        proto: !0
    }, {
        repeat: wr
    });
    var Tv = function() {
        function e(t) {
            bn(this, e),
            this.options = t ? t.options : {
                enablePointer: !0
            },
            this.pointsList = {},
            this.reportText = {},
            this.maxNameLen = 0,
            this.gapChar = "-",
            this.log = console.log,
            this.currentTask = ""
        }
        return Gn(e, [{
            key: "newTask",
            value: function(e) {
                !1 !== this.options.enablePointer && (e || (e = ["task", this._timeFormat()].join("-")),
                this.pointsList[e] = [],
                this.currentTask = e,
                console.log("Pointer new Task : ".concat(this.currentTask)))
            }
        }, {
            key: "deleteTask",
            value: function(e) {
                !1 !== this.options.enablePointer && (e || (e = this.currentTask),
                this.pointsList[e].length = 0,
                delete this.pointsList[e])
            }
        }, {
            key: "dot",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                if (!1 !== this.options.enablePointer) {
                    t = t || this.currentTask;
                    var n = +new Date;
                    this.maxNameLen = this.maxNameLen < e.length ? e.length : this.maxNameLen,
                    this.flen = this.maxNameLen + 10,
                    this.pointsList[t].push({
                        pointerName: e,
                        time: n
                    })
                }
            }
        }, {
            key: "_analisys",
            value: function(e) {
                if (!1 !== this.options.enablePointer) {
                    e = e || this.currentTask;
                    for (var t = this.pointsList[e], n = t.length, r = [], o = [], i = 0; i < n; i++)
                        0 !== i && (o = this._analisysTowPoints(t[i - 1], t[i]),
                        r.push(o.join("")));
                    return o = this._analisysTowPoints(t[0], t[n - 1], !0),
                    r.push(o.join("")),
                    r.join("")
                }
            }
        }, {
            key: "_analisysTowPoints",
            value: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (!1 !== this.options.enablePointer) {
                    var r = this.flen
                      , o = t.time - e.time
                      , i = o.toString()
                      , a = e.pointerName + this.gapChar.repeat(r - e.pointerName.length)
                      , s = t.pointerName + this.gapChar.repeat(r - t.pointerName.length)
                      , u = this.gapChar.repeat(4 - i.length) + i
                      , c = n ? ["%c", a, s, u, "ms\n%c"] : [a, s, u, "ms\n"];
                    return c
                }
            }
        }, {
            key: "report",
            value: function(e) {
                if (!1 !== this.options.enablePointer) {
                    e = e || this.currentTask;
                    var t = this._analisys(e);
                    this.pointsList = [];
                    var n = this._timeFormat()
                      , r = "Pointer[".concat(e, "(").concat(n, ")]")
                      , o = 4 * this.maxNameLen
                      , i = (o - r.length) / 2;
                    console.log(["-".repeat(i), r, "-".repeat(i)].join("")),
                    console.log("%c" + t, "color:#66a", "color:red", "color:#66a"),
                    console.log("-".repeat(o))
                }
            }
        }, {
            key: "_timeFormat",
            value: function() {
                var e = new Date
                  , t = this.zeroFix(e.getMonth() + 1, 2)
                  , n = this.zeroFix(e.getDate(), 2);
                return "".concat(t, "-").concat(n, " ").concat(e.getHours(), ":").concat(e.getSeconds(), ":").concat(e.getMinutes(), "~").concat(e.getMilliseconds())
            }
        }, {
            key: "zeroFix",
            value: function(e, t) {
                return ("000000000" + e).slice(-t)
            }
        }, {
            key: "reportAll",
            value: function() {
                if (!1 !== this.options.enablePointer)
                    for (var e in this.pointsList)
                        Object.prototype.hasOwnProperty.call(this.pointsList, e) && this.eport(e)
            }
        }]),
        e
    }()
      , Dv = function e(t, n) {
        bn(this, e),
        this.userID = t;
        var r = {};
        if (r.userID = t,
        !au(n))
            for (var o = 0, i = n.length; o < i; o++)
                switch (n[o].tag) {
                case Cp.NICK:
                    r.nick = n[o].value;
                    break;
                case Cp.GENDER:
                    r.gender = n[o].value;
                    break;
                case Cp.BIRTHDAY:
                    r.birthday = n[o].value;
                    break;
                case Cp.LOCATION:
                    r.location = n[o].value;
                    break;
                case Cp.SELFSIGNATURE:
                    r.selfSignature = n[o].value;
                    break;
                case Cp.ALLOWTYPE:
                    r.allowType = n[o].value;
                    break;
                case Cp.LANGUAGE:
                    r.language = n[o].value;
                    break;
                case Cp.AVATAR:
                    r.avatar = n[o].value;
                    break;
                case Cp.MESSAGESETTINGS:
                    r.messageSettings = n[o].value;
                    break;
                case Cp.ADMINFORBIDTYPE:
                    r.adminForbidType = n[o].value;
                    break;
                case Cp.LEVEL:
                    r.level = n[o].value;
                    break;
                case Cp.ROLE:
                    r.role = n[o].value;
                    break;
                default:
                    Es.debug("snsProfileItem unkown tag->", n[o].tag)
                }
        this.profile = new Ev(r)
    }
      , kv = function() {
        function e(t) {
            bn(this, e),
            this.userController = t,
            this.TAG = "friend",
            this.Actions = {
                G: "get",
                D: "delete"
            },
            this.friends = new Map,
            this.pointer = new Tv
        }
        return Gn(e, [{
            key: "isMyFriend",
            value: function(e) {
                var t = this.friends.has(e);
                return t || Es.debug("FriendHandler.isMyFriend " + e + " is not my friend"),
                t
            }
        }, {
            key: "_transformFriendList",
            value: function(e) {
                if (!au(e) && !au(e.infoItem)) {
                    Es.info("FriendHandler._transformFriendList friendNum=" + e.friendNum);
                    for (var t, n, r = e.infoItem, o = 0, i = r.length; o < i; o++)
                        n = r[o].infoAccount,
                        t = new Dv(n,r[o].snsProfileItem),
                        this.friends.set(n, t)
                }
            }
        }, {
            key: "_friends2map",
            value: function(e) {
                var t = new Map;
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && t.set(n, e[n]);
                return t
            }
        }, {
            key: "getFriendList",
            value: function() {
                var e = this
                  , t = {};
                t.fromAccount = this.userController.getMyAccount(),
                Es.info("FriendHandler.getFriendList myAccount=" + t.fromAccount);
                var n = this.userController.generateConfig(this.TAG, this.Actions.G, t);
                return this.userController.request(n).then((function(t) {
                    Es.info("FriendHandler.getFriendList ok"),
                    e._transformFriendList(t.data);
                    var n = Xn(e.friends.values());
                    return Ld(n)
                }
                )).catch((function(e) {
                    return Es.error("FriendHandler.getFriendList error:", e),
                    Nd(e)
                }
                ))
            }
        }, {
            key: "deleteFriend",
            value: function(e) {
                if (!Array.isArray(e.toAccount))
                    return Es.error("FriendHandler.deleteFriend options.toAccount 必需是数组"),
                    Nd({
                        code: Kp.DEL_FRIEND_INVALID_PARAM,
                        message: Pf
                    });
                e.toAccount.length > 1e3 && (Es.warn("FriendHandler.deleteFriend 删除好友人数不能超过1000人"),
                e.toAccount.length = 1e3);
                var t = this.userController.generateConfig(this.TAG, this.Actions.D, e);
                return this.userController.request(t).then((function(e) {
                    return Es.info("FriendHandler.deleteFriend ok"),
                    Ld()
                }
                )).catch((function(e) {
                    return Es.error("FriendHandler.deleteFriend error:", e),
                    Nd(e)
                }
                ))
            }
        }]),
        e
    }()
      , Ov = function e(t) {
        bn(this, e),
        au || (this.userID = t.userID || "",
        this.timeStamp = t.timeStamp || 0)
    }
      , Rv = function() {
        function e(t) {
            bn(this, e),
            this.userController = t,
            this.TAG = "blacklist",
            this.Actions = {
                G: "get",
                C: "create",
                D: "delete"
            },
            this.blacklistMap = new Map,
            this.startIndex = 0,
            this.maxLimited = 100,
            this.curruentSequence = 0
        }
        return Gn(e, [{
            key: "getBlacklist",
            value: function() {
                var e = this
                  , t = {};
                t.fromAccount = this.userController.getMyAccount(),
                t.maxLimited = this.maxLimited,
                t.startIndex = 0,
                t.lastSequence = this.curruentSequence;
                var n = new Wd(Jg)
                  , r = this.userController.generateConfig(this.TAG, this.Actions.G, t);
                return this.userController.request(r).then((function(t) {
                    var r = au(t.data.blackListItem) ? 0 : t.data.blackListItem.length;
                    return n.setNetworkType(e.userController.getNetworkType()).setText(r).setEnd(),
                    Es.info("BlacklistHandler.getBlacklist ok"),
                    e.curruentSequence = t.data.curruentSequence,
                    e._handleResponse(t.data.blackListItem, !0),
                    e._onBlacklistUpdated()
                }
                )).catch((function(t) {
                    return e.userController.probeNetwork().then((function(e) {
                        var r = Jn(e, 2)
                          , o = r[0]
                          , i = r[1];
                        n.setError(t, o, i).setEnd()
                    }
                    )),
                    Es.error("BlacklistHandler.getBlacklist error:", t),
                    Nd(t)
                }
                ))
            }
        }, {
            key: "addBlacklist",
            value: function(e) {
                var t = this
                  , n = new Wd(Xg);
                if (!Rs(e.userIDList))
                    return n.setCode(Kp.ADD_BLACKLIST_INVALID_PARAM).setMessage("BlacklistHandler.addBlacklist options.userIDList 必需是数组").setNetworkType(this.userController.getNetworkType()).setEnd(),
                    Es.error("BlacklistHandler.addBlacklist options.userIDList 必需是数组"),
                    Nd({
                        code: Kp.ADD_BLACKLIST_INVALID_PARAM,
                        message: xf
                    });
                var r = this.userController.tim.loginInfo.identifier;
                if (1 === e.userIDList.length && e.userIDList[0] === r)
                    return n.setCode(Kp.CANNOT_ADD_SELF_TO_BLACKLIST).setMessage(Ff).setNetworkType(this.userController.getNetworkType()).setEnd(),
                    Es.error("BlacklistHandler.addBlacklist 不能把自己拉黑"),
                    Nd({
                        code: Kp.CANNOT_ADD_SELF_TO_BLACKLIST,
                        message: Ff
                    });
                e.userIDList.includes(r) && (e.userIDList = e.userIDList.filter((function(e) {
                    return e !== r
                }
                )),
                Es.warn("BlacklistHandler.addBlacklist 不能把自己拉黑，已过滤")),
                e.fromAccount = this.userController.getMyAccount(),
                e.toAccount = e.userIDList;
                var o = this.userController.generateConfig(this.TAG, this.Actions.C, e);
                return this.userController.request(o).then((function(r) {
                    return n.setNetworkType(t.userController.getNetworkType()).setText(e.userIDList.length > 5 ? "userIDList.length=".concat(e.userIDList.length) : "userIDList=".concat(e.userIDList)).setEnd(),
                    Es.info("BlacklistHandler.addBlacklist ok"),
                    t._handleResponse(r.data.resultItem, !0),
                    t._onBlacklistUpdated()
                }
                )).catch((function(e) {
                    return t.userController.probeNetwork().then((function(t) {
                        var r = Jn(t, 2)
                          , o = r[0]
                          , i = r[1];
                        n.setError(e, o, i).setEnd()
                    }
                    )),
                    Es.error("BlacklistHandler.addBlacklist error:", e),
                    Nd(e)
                }
                ))
            }
        }, {
            key: "_handleResponse",
            value: function(e, t) {
                if (!au(e))
                    for (var n, r, o, i = 0, a = e.length; i < a; i++)
                        r = e[i].to,
                        o = e[i].resultCode,
                        (As(o) || 0 === o) && (t ? ((n = this.blacklistMap.has(r) ? this.blacklistMap.get(r) : new Ov).userID = r,
                        !au(e[i].addBlackTimeStamp) && (n.timeStamp = e[i].addBlackTimeStamp),
                        this.blacklistMap.set(r, n)) : this.blacklistMap.has(r) && (n = this.blacklistMap.get(r),
                        this.blacklistMap.delete(r)));
                Es.log("BlacklistHandler._handleResponse total=" + this.blacklistMap.size + " bAdd=" + t)
            }
        }, {
            key: "deleteBlacklist",
            value: function(e) {
                var t = this
                  , n = new Wd(Qg);
                if (!Rs(e.userIDList))
                    return n.setCode(Kp.DEL_BLACKLIST_INVALID_PARAM).setMessage("BlacklistHandler.deleteBlacklist options.userIDList 必需是数组").setNetworkType(this.userController.getNetworkType()).setEnd(),
                    Es.error("BlacklistHandler.deleteBlacklist options.userIDList 必需是数组"),
                    Nd({
                        code: Kp.DEL_BLACKLIST_INVALID_PARAM,
                        message: qf
                    });
                e.fromAccount = this.userController.getMyAccount(),
                e.toAccount = e.userIDList;
                var r = this.userController.generateConfig(this.TAG, this.Actions.D, e);
                return this.userController.request(r).then((function(r) {
                    return n.setNetworkType(t.userController.getNetworkType()).setText(e.userIDList.length > 5 ? "userIDList.length=".concat(e.userIDList.length) : "userIDList=".concat(e.userIDList)).setEnd(),
                    Es.info("BlacklistHandler.deleteBlacklist ok"),
                    t._handleResponse(r.data.resultItem, !1),
                    t._onBlacklistUpdated()
                }
                )).catch((function(e) {
                    return t.userController.probeNetwork().then((function(t) {
                        var r = Jn(t, 2)
                          , o = r[0]
                          , i = r[1];
                        n.setError(e, o, i).setEnd()
                    }
                    )),
                    Es.error("BlacklistHandler.deleteBlacklist error:", e),
                    Nd(e)
                }
                ))
            }
        }, {
            key: "_onBlacklistUpdated",
            value: function() {
                var e = Xn(this.blacklistMap.keys());
                return this.userController.emitOuterEvent(Cn.BLACKLIST_UPDATED, e),
                Ld(e)
            }
        }, {
            key: "handleBlackListDelAccount",
            value: function(e) {
                for (var t, n = [], r = 0, o = e.length; r < o; r++)
                    t = e[r],
                    this.blacklistMap.has(t) && (this.blacklistMap.delete(t),
                    n.push(t));
                n.length > 0 && (Es.log("BlacklistHandler.handleBlackListDelAccount delCount=" + n.length + " : " + n.join(",")),
                this.userController.emitOuterEvent(Cn.BLACKLIST_UPDATED, Xn(this.blacklistMap.keys())))
            }
        }, {
            key: "handleBlackListAddAccount",
            value: function(e) {
                for (var t, n = [], r = 0, o = e.length; r < o; r++)
                    t = e[r],
                    this.blacklistMap.has(t) || (this.blacklistMap.set(t, new Ov({
                        userID: t
                    })),
                    n.push(t));
                n.length > 0 && (Es.log("BlacklistHandler.handleBlackListAddAccount addCount=" + n.length + " : " + n.join(",")),
                this.userController.emitOuterEvent(Cn.BLACKLIST_UPDATED, Xn(this.blacklistMap.keys())))
            }
        }, {
            key: "reset",
            value: function() {
                this.blacklistMap.clear(),
                this.startIndex = 0,
                this.maxLimited = 100,
                this.curruentSequence = 0
            }
        }]),
        e
    }()
      , Av = function() {
        function e(t) {
            bn(this, e),
            this.userController = t,
            this.TAG = "applyC2C",
            this.Actions = {
                C: "create",
                G: "get",
                D: "delete",
                U: "update"
            }
        }
        return Gn(e, [{
            key: "applyAddFriend",
            value: function(e) {
                var t = this
                  , n = this.userController.generateConfig(this.TAG, this.Actions.C, e)
                  , r = this.userController.request(n);
                return r.then((function(e) {
                    t.userController.isActionSuccessful("applyAddFriend", t.Actions.C, e)
                }
                )).catch((function(e) {}
                )),
                r
            }
        }, {
            key: "getPendency",
            value: function(e) {
                var t = this
                  , n = this.userController.generateConfig(this.TAG, this.Actions.G, e)
                  , r = this.userController.request(n);
                return r.then((function(e) {
                    t.userController.isActionSuccessful("getPendency", t.Actions.G, e)
                }
                )).catch((function(e) {}
                )),
                r
            }
        }, {
            key: "deletePendency",
            value: function(e) {
                var t = this
                  , n = this.userController.generateConfig(this.TAG, this.Actions.D, e)
                  , r = this.userController.request(n);
                return r.then((function(e) {
                    t.userController.isActionSuccessful("deletePendency", t.Actions.D, e)
                }
                )).catch((function(e) {}
                )),
                r
            }
        }, {
            key: "replyPendency",
            value: function() {
                var e = this
                  , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , n = this.userController.generateConfig(this.TAG, this.Actions.U, t)
                  , r = this.userController.request(n);
                return r.then((function(t) {
                    e.userController.isActionSuccessful("replyPendency", e.Actions.U, t)
                }
                )).catch((function(e) {}
                )),
                r
            }
        }]),
        e
    }()
      , wv = function(e) {
        Fn(n, e);
        var t = Wn(n);
        function n(e) {
            var r;
            return bn(this, n),
            (r = t.call(this, e)).profileHandler = new Sv(zn(r)),
            r.friendHandler = new kv(zn(r)),
            r.blacklistHandler = new Rv(zn(r)),
            r.applyC2CHandler = new Av(zn(r)),
            r._initializeListener(),
            r
        }
        return Gn(n, [{
            key: "_initializeListener",
            value: function(e) {
                var t = this.tim.innerEmitter;
                t.on(Dh, this.onContextUpdated, this),
                t.on(zh, this.onProfileModified, this),
                t.on($h, this.onNewFriendMessages, this),
                t.on(ad, this.onConversationsProfileUpdated, this)
            }
        }, {
            key: "onContextUpdated",
            value: function(e) {
                var t = this.tim.context;
                !1 != !!t.a2Key && !1 != !!t.tinyID && (this.profileHandler.getMyProfile(),
                this.friendHandler.getFriendList(),
                this.blacklistHandler.getBlacklist())
            }
        }, {
            key: "onGotMyProfile",
            value: function() {
                this.triggerReady()
            }
        }, {
            key: "onProfileModified",
            value: function(e) {
                this.profileHandler.onProfileModified(e)
            }
        }, {
            key: "onNewFriendMessages",
            value: function(e) {
                Es.debug("onNewFriendMessages", JSON.stringify(e.data)),
                au(e.data.blackListDelAccount) || this.blacklistHandler.handleBlackListDelAccount(e.data.blackListDelAccount),
                au(e.data.blackListAddAccount) || this.blacklistHandler.handleBlackListAddAccount(e.data.blackListAddAccount)
            }
        }, {
            key: "onConversationsProfileUpdated",
            value: function(e) {
                this.profileHandler.onConversationsProfileUpdated(e.data)
            }
        }, {
            key: "getMyAccount",
            value: function() {
                return this.tim.context.identifier
            }
        }, {
            key: "isMyFriend",
            value: function(e) {
                return this.friendHandler.isMyFriend(e)
            }
        }, {
            key: "generateConfig",
            value: function(e, t, n) {
                return {
                    name: e,
                    action: t,
                    param: n
                }
            }
        }, {
            key: "getMyProfile",
            value: function() {
                return this.profileHandler.getMyProfile()
            }
        }, {
            key: "getUserProfile",
            value: function(e) {
                return this.profileHandler.getUserProfile(e)
            }
        }, {
            key: "updateMyProfile",
            value: function(e) {
                return this.profileHandler.updateMyProfile(e)
            }
        }, {
            key: "getFriendList",
            value: function() {
                return this.friendHandler.getFriendList()
            }
        }, {
            key: "deleteFriend",
            value: function(e) {
                return this.friendHandler.deleteFriend(e)
            }
        }, {
            key: "getBlacklist",
            value: function() {
                return this.blacklistHandler.getBlacklist()
            }
        }, {
            key: "addBlacklist",
            value: function(e) {
                return this.blacklistHandler.addBlacklist(e)
            }
        }, {
            key: "deleteBlacklist",
            value: function(e) {
                return this.blacklistHandler.deleteBlacklist(e)
            }
        }, {
            key: "applyAddFriend",
            value: function(e) {
                return this.applyC2CHandler.applyAddFriend(e)
            }
        }, {
            key: "getPendency",
            value: function(e) {
                return this.applyC2CHandler.getPendency(e)
            }
        }, {
            key: "deletePendency",
            value: function(e) {
                return this.applyC2CHandler.deletePendency(e)
            }
        }, {
            key: "replyPendency",
            value: function(e) {
                return this.applyC2CHandler.replyPendency(e)
            }
        }, {
            key: "reset",
            value: function() {
                Es.info("UserController.reset"),
                this.resetReady(),
                this.profileHandler.reset(),
                this.blacklistHandler.reset(),
                this.checkTimes = 0
            }
        }]),
        n
    }(Dd)
      , Lv = []
      , Nv = Lv.sort
      , bv = o((function() {
        Lv.sort(void 0)
    }
    ))
      , Pv = o((function() {
        Lv.sort(null)
    }
    ))
      , Gv = at("sort");
    we({
        target: "Array",
        proto: !0,
        forced: bv || !Pv || !Gv
    }, {
        sort: function(e) {
            return void 0 === e ? Nv.call(Ne(this)) : Nv.call(Ne(this), et(e))
        }
    });
    var Uv = ["groupID", "name", "avatar", "type", "introduction", "notification", "ownerID", "selfInfo", "createTime", "infoSequence", "lastInfoTime", "lastMessage", "nextMessageSeq", "memberNum", "maxMemberNum", "memberList", "joinOption", "groupCustomField", "muteAllMembers"]
      , xv = function() {
        function e(t) {
            bn(this, e),
            this.groupID = "",
            this.name = "",
            this.avatar = "",
            this.type = "",
            this.introduction = "",
            this.notification = "",
            this.ownerID = "",
            this.createTime = "",
            this.infoSequence = "",
            this.lastInfoTime = "",
            this.selfInfo = {
                messageRemindType: "",
                joinTime: "",
                nameCard: "",
                role: ""
            },
            this.lastMessage = {
                lastTime: "",
                lastSequence: "",
                fromAccount: "",
                messageForShow: ""
            },
            this.nextMessageSeq = "",
            this.memberNum = "",
            this.memberCount = "",
            this.maxMemberNum = "",
            this.maxMemberCount = "",
            this.joinOption = "",
            this.groupCustomField = [],
            this.muteAllMembers = void 0,
            this._initGroup(t)
        }
        return Gn(e, [{
            key: "_initGroup",
            value: function(e) {
                for (var t in e)
                    Uv.indexOf(t) < 0 || ("selfInfo" !== t ? ("memberNum" === t && (this.memberCount = e[t]),
                    "maxMemberNum" === t && (this.maxMemberCount = e[t]),
                    this[t] = e[t]) : this.updateSelfInfo(e[t]))
            }
        }, {
            key: "updateGroup",
            value: function(e) {
                e.lastMsgTime && (this.lastMessage.lastTime = e.lastMsgTime),
                As(e.muteAllMembers) || ("On" === e.muteAllMembers ? e.muteAllMembers = !0 : e.muteAllMembers = !1),
                e.groupCustomField && Ws(this.groupCustomField, e.groupCustomField),
                As(e.memberNum) || (this.memberCount = e.memberNum),
                As(e.maxMemberNum) || (this.maxMemberCount = e.maxMemberNum),
                xs(this, e, ["members", "errorCode", "lastMsgTime", "groupCustomField"])
            }
        }, {
            key: "updateSelfInfo",
            value: function(e) {
                var t = e.nameCard
                  , n = e.joinTime
                  , r = e.role
                  , o = e.messageRemindType;
                xs(this.selfInfo, {
                    nameCard: t,
                    joinTime: n,
                    role: r,
                    messageRemindType: o
                }, [], ["", null, void 0, 0, NaN])
            }
        }, {
            key: "setSelfNameCard",
            value: function(e) {
                this.selfInfo.nameCard = e
            }
        }, {
            key: "memberNum",
            set: function(e) {},
            get: function() {
                return Es.warn("！！！v2.8.0起弃用memberNum，请使用 memberCount"),
                this.memberCount
            }
        }, {
            key: "maxMemberNum",
            set: function(e) {},
            get: function() {
                return Es.warn("！！！v2.8.0起弃用maxMemberNum，请使用 maxMemberCount"),
                this.maxMemberCount
            }
        }]),
        e
    }()
      , qv = function(e, t) {
        if (As(t))
            return "";
        switch (e) {
        case En.MSG_TEXT:
            return t.text;
        case En.MSG_IMAGE:
            return "[图片]";
        case En.MSG_GEO:
            return "[位置]";
        case En.MSG_AUDIO:
            return "[语音]";
        case En.MSG_VIDEO:
            return "[视频]";
        case En.MSG_FILE:
            return "[文件]";
        case En.MSG_CUSTOM:
            return "[自定义消息]";
        case En.MSG_GRP_TIP:
            return "[群提示消息]";
        case En.MSG_GRP_SYS_NOTICE:
            return "[群系统通知]";
        case En.MSG_FACE:
            return "[动画表情]";
        default:
            return ""
        }
    }
      , Fv = function(e) {
        return As(e) ? {
            lastTime: 0,
            lastSequence: 0,
            fromAccount: 0,
            messageForShow: "",
            payload: null,
            type: "",
            isRevoked: !1
        } : e instanceof oh ? {
            lastTime: e.time || 0,
            lastSequence: e.sequence || 0,
            fromAccount: e.from || "",
            messageForShow: qv(e.type, e.payload),
            payload: e.payload || null,
            type: e.type || null,
            isRevoked: !1
        } : qn(qn({}, e), {}, {
            isRevoked: !1,
            messageForShow: qv(e.type, e.payload)
        })
    }
      , jv = function() {
        function e(t) {
            bn(this, e),
            this.conversationID = t.conversationID || "",
            this.unreadCount = t.unreadCount || 0,
            this.type = t.type || "",
            this.lastMessage = Fv(t.lastMessage),
            t.lastMsgTime && (this.lastMessage.lastTime = t.lastMsgTime),
            this._isInfoCompleted = !1,
            this.peerReadTime = t.peerReadTime || 0,
            this._initProfile(t)
        }
        return Gn(e, [{
            key: "_initProfile",
            value: function(e) {
                var t = this;
                Object.keys(e).forEach((function(n) {
                    switch (n) {
                    case "userProfile":
                        t.userProfile = e.userProfile;
                        break;
                    case "groupProfile":
                        t.groupProfile = e.groupProfile
                    }
                }
                )),
                As(this.userProfile) && this.type === En.CONV_C2C ? this.userProfile = new Ev({
                    userID: e.conversationID.replace("C2C", "")
                }) : As(this.groupProfile) && this.type === En.CONV_GROUP && (this.groupProfile = new xv({
                    groupID: e.conversationID.replace("GROUP", "")
                }))
            }
        }, {
            key: "updateUnreadCount",
            value: function(e, t) {
                As(e) || (Qs(this.subType) || Zs(this.subType) ? this.unreadCount = 0 : t && this.type === En.CONV_GROUP ? this.unreadCount = e : this.unreadCount = this.unreadCount + e)
            }
        }, {
            key: "updateLastMessage",
            value: function(e) {
                this.lastMessage = Fv(e)
            }
        }, {
            key: "reduceUnreadCount",
            value: function() {
                this.unreadCount >= 1 && (this.unreadCount -= 1)
            }
        }, {
            key: "isLastMessageRevoked",
            value: function(e) {
                var t = e.sequence
                  , n = e.time;
                return this.type === En.CONV_C2C && t === this.lastMessage.lastSequence && n === this.lastMessage.lastTime || this.type === En.CONV_GROUP && t === this.lastMessage.lastSequence
            }
        }, {
            key: "setLastMessageRevoked",
            value: function(e) {
                this.lastMessage.isRevoked = e
            }
        }, {
            key: "toAccount",
            get: function() {
                return this.conversationID.replace("C2C", "").replace("GROUP", "")
            }
        }, {
            key: "subType",
            get: function() {
                return this.groupProfile ? this.groupProfile.type : ""
            }
        }]),
        e
    }()
      , Vv = function(e) {
        Fn(n, e);
        var t = Wn(n);
        function n(e) {
            var r;
            return bn(this, n),
            (r = t.call(this, e)).pagingStatus = tc.NOT_START,
            r.pagingTimeStamp = 0,
            r.conversationMap = new Map,
            r.tempGroupList = [],
            r._initListeners(),
            r
        }
        return Gn(n, [{
            key: "hasLocalConversationMap",
            value: function() {
                return this.conversationMap.size > 0
            }
        }, {
            key: "_createLocalConversation",
            value: function(e) {
                return this.conversationMap.has(e) ? this.conversationMap.get(e) : (Es.log("ConversationController._createLocalConversation conversationID:".concat(e)),
                new jv({
                    conversationID: e,
                    type: e.slice(0, 3) === En.CONV_C2C ? En.CONV_C2C : En.CONV_GROUP
                }))
            }
        }, {
            key: "hasLocalConversation",
            value: function(e) {
                return this.conversationMap.has(e)
            }
        }, {
            key: "getConversationList",
            value: function() {
                var e = this;
                Es.log("ConversationController.getConversationList."),
                this.pagingStatus === tc.REJECTED && (Es.log("ConversationController.getConversationList. continue to sync conversationList"),
                this._syncConversationList());
                var t = new Wd(dg);
                return this.request({
                    name: "conversation",
                    action: "query"
                }).then((function(n) {
                    var r = n.data.conversations
                      , o = void 0 === r ? [] : r
                      , i = e._getConversationOptions(o);
                    return e._updateLocalConversationList(i, !0),
                    e._setStorageConversationList(),
                    e._handleC2CPeerReadTime(),
                    t.setText(o.length).setNetworkType(e.getNetworkType()).setEnd(),
                    Es.log("ConversationController.getConversationList ok."),
                    Ld({
                        conversationList: e.getLocalConversationList()
                    })
                }
                )).catch((function(n) {
                    return e.probeNetwork().then((function(e) {
                        var r = Jn(e, 2)
                          , o = r[0]
                          , i = r[1];
                        t.setError(n, o, i).setEnd()
                    }
                    )),
                    Es.error("ConversationController.getConversationList error:", n),
                    Nd(n)
                }
                ))
            }
        }, {
            key: "_syncConversationList",
            value: function() {
                var e = this
                  , t = new Wd(yg);
                return this.pagingStatus === tc.NOT_START && this.conversationMap.clear(),
                this._autoPagingSyncConversationList().then((function(n) {
                    return e.pagingStatus = tc.RESOLVED,
                    e._setStorageConversationList(),
                    e._handleC2CPeerReadTime(),
                    t.setText("".concat(e.conversationMap.size)).setNetworkType(e.getNetworkType()).setEnd(),
                    n
                }
                )).catch((function(n) {
                    return e.pagingStatus = tc.REJECTED,
                    t.setText(e.pagingTimeStamp),
                    e.probeNetwork().then((function(e) {
                        var r = Jn(e, 2)
                          , o = r[0]
                          , i = r[1];
                        t.setError(n, o, i).setEnd()
                    }
                    )),
                    Nd(n)
                }
                ))
            }
        }, {
            key: "_autoPagingSyncConversationList",
            value: function() {
                var e = this;
                return this.pagingStatus = tc.PENDING,
                this.request({
                    name: "conversation",
                    action: "pagingQuery",
                    param: {
                        fromAccount: this.tim.context.identifier,
                        timeStamp: this.pagingTimeStamp,
                        orderType: 1
                    }
                }).then((function(t) {
                    var n = t.data
                      , r = n.completeFlag
                      , o = n.conversations
                      , i = void 0 === o ? [] : o
                      , a = n.timeStamp;
                    if (Es.log("ConversationController._autoPagingSyncConversationList completeFlag=".concat(r, " nums=").concat(i.length)),
                    i.length > 0) {
                        var s = e._getConversationOptions(i);
                        e._updateLocalConversationList(s, !0)
                    }
                    return e._isReady ? e._emitConversationUpdate() : e.triggerReady(),
                    e.pagingTimeStamp = a,
                    1 !== r ? e._autoPagingSyncConversationList() : Ld()
                }
                )).catch((function(t) {
                    throw e._isReady || (Es.warn("ConversationController._autoPagingSyncConversationList failed. error:".concat(qs(t))),
                    e.triggerReady()),
                    t
                }
                ))
            }
        }, {
            key: "_handleC2CPeerReadTime",
            value: function() {
                var e, t = this.tim.messageController, n = er(this.conversationMap);
                try {
                    for (n.s(); !(e = n.n()).done; ) {
                        var r = Jn(e.value, 2)
                          , o = r[0]
                          , i = r[1];
                        i.type === En.CONV_C2C && (Es.debug("ConversationController._handleC2CPeerReadTime", o, i.peerReadTime),
                        t.recordPeerReadTime(o, i.peerReadTime))
                    }
                } catch (a) {
                    n.e(a)
                } finally {
                    n.f()
                }
            }
        }, {
            key: "getConversationProfile",
            value: function(e) {
                var t = this
                  , n = this.conversationMap.has(e) ? this.conversationMap.get(e) : this._createLocalConversation(e);
                if (n._isInfoCompleted || n.type === En.CONV_SYSTEM)
                    return Ld({
                        conversation: n
                    });
                var r = new Wd(gg);
                return Es.log("ConversationController.getConversationProfile. conversationID:".concat(e, " lastMessage:"), n.lastMessage),
                this._updateUserOrGroupProfileCompletely(n).then((function(n) {
                    return r.setNetworkType(t.getNetworkType()).setText("conversationID=".concat(e, " unreadCount=").concat(n.data.conversation.unreadCount)).setEnd(),
                    Es.log("ConversationController.getConversationProfile ok. conversationID:", e),
                    n
                }
                )).catch((function(n) {
                    return t.probeNetwork().then((function(t) {
                        var o = Jn(t, 2)
                          , i = o[0]
                          , a = o[1];
                        r.setError(n, i, a).setText("conversationID=".concat(e)).setEnd()
                    }
                    )),
                    Es.error("ConversationController.getConversationProfile error:", n),
                    Nd(n)
                }
                ))
            }
        }, {
            key: "deleteConversation",
            value: function(e) {
                var t = this
                  , n = {};
                if (!this.conversationMap.has(e)) {
                    var r = new Bp({
                        code: Kp.CONVERSATION_NOT_FOUND,
                        message: yf
                    });
                    return Nd(r)
                }
                switch (this.conversationMap.get(e).type) {
                case En.CONV_C2C:
                    n.type = 1,
                    n.toAccount = e.replace(En.CONV_C2C, "");
                    break;
                case En.CONV_GROUP:
                    n.type = 2,
                    n.toGroupID = e.replace(En.CONV_GROUP, "");
                    break;
                case En.CONV_SYSTEM:
                    return this.tim.groupController.deleteGroupSystemNotice({
                        messageList: this.tim.messageController.getLocalMessageList(e)
                    }),
                    this.deleteLocalConversation(e),
                    Ld({
                        conversationID: e
                    });
                default:
                    var o = new Bp({
                        code: Kp.CONVERSATION_UN_RECORDED_TYPE,
                        message: If
                    });
                    return Nd(o)
                }
                var i = new Wd(mg);
                return i.setText("conversationID=".concat(e)),
                Es.log("ConversationController.deleteConversation. conversationID=".concat(e)),
                this.tim.setMessageRead({
                    conversationID: e
                }).then((function() {
                    return t.request({
                        name: "conversation",
                        action: "delete",
                        param: n
                    })
                }
                )).then((function() {
                    return i.setNetworkType(t.getNetworkType()).setEnd(),
                    Es.log("ConversationController.deleteConversation ok."),
                    t.deleteLocalConversation(e),
                    Ld({
                        conversationID: e
                    })
                }
                )).catch((function(e) {
                    return t.probeNetwork().then((function(t) {
                        var n = Jn(t, 2)
                          , r = n[0]
                          , o = n[1];
                        i.setError(e, r, o).setEnd()
                    }
                    )),
                    Es.error("ConversationController.deleteConversation error:", e),
                    Nd(e)
                }
                ))
            }
        }, {
            key: "getLocalConversationList",
            value: function() {
                return Xn(this.conversationMap.values())
            }
        }, {
            key: "getLocalConversation",
            value: function(e) {
                return this.conversationMap.get(e)
            }
        }, {
            key: "_initLocalConversationList",
            value: function() {
                var e = new Wd(vg);
                Es.time($d),
                Es.log("ConversationController._initLocalConversationList.");
                var t = this._getStorageConversationList();
                if (t) {
                    for (var n = t.length, r = 0; r < n; r++)
                        this.conversationMap.set(t[r].conversationID, new jv(t[r]));
                    this._emitConversationUpdate(!0, !1),
                    e.setNetworkType(this.getNetworkType()).setText(n).setEnd()
                } else
                    e.setNetworkType(this.getNetworkType()).setText(0).setEnd();
                this._syncConversationList()
            }
        }, {
            key: "_getStorageConversationList",
            value: function() {
                return this.tim.storage.getItem("conversationMap")
            }
        }, {
            key: "_setStorageConversationList",
            value: function() {
                var e = this.getLocalConversationList().slice(0, 20).map((function(e) {
                    return {
                        conversationID: e.conversationID,
                        type: e.type,
                        subType: e.subType,
                        lastMessage: e.lastMessage,
                        groupProfile: e.groupProfile,
                        userProfile: e.userProfile
                    }
                }
                ));
                this.tim.storage.setItem("conversationMap", e)
            }
        }, {
            key: "_initListeners",
            value: function() {
                var e = this;
                this.tim.innerEmitter.once(Dh, this._initLocalConversationList, this),
                this.tim.innerEmitter.on(Ah, this._onSendOrReceiveMessage, this),
                this.tim.innerEmitter.on(wh, this._handleSyncMessages, this),
                this.tim.innerEmitter.on(Lh, this._handleSyncMessages, this),
                this.tim.innerEmitter.on(Nh, this._onSendOrReceiveMessage, this),
                this.tim.innerEmitter.on(bh, this._onSendOrReceiveMessage, this),
                this.tim.innerEmitter.on(Ph, this._onSendOrReceiveMessage, this),
                this.tim.innerEmitter.on(Zh, this._onGroupListUpdated, this),
                this.tim.innerEmitter.on(ud, this._updateConversationUserProfile, this),
                this.tim.innerEmitter.on(Gh, this._onMessageRevoked, this),
                this.ready((function() {
                    e.tempGroupList.length > 0 && (e._updateConversationGroupProfile(e.tempGroupList),
                    e.tempGroupList.length = 0)
                }
                ))
            }
        }, {
            key: "_onGroupListUpdated",
            value: function(e) {
                this._updateConversationGroupProfile(e.data)
            }
        }, {
            key: "_updateConversationGroupProfile",
            value: function(e) {
                var t = this;
                Rs(e) && 0 === e.length || (this.hasLocalConversationMap() ? (e.forEach((function(e) {
                    var n = "GROUP".concat(e.groupID);
                    if (t.conversationMap.has(n)) {
                        var r = t.conversationMap.get(n);
                        r.groupProfile = e,
                        r.lastMessage.lastSequence < e.nextMessageSeq && (r.lastMessage.lastSequence = e.nextMessageSeq - 1),
                        r.subType || (r.subType = e.type)
                    }
                }
                )),
                this._emitConversationUpdate(!0, !1)) : this.tempGroupList = e)
            }
        }, {
            key: "_updateConversationUserProfile",
            value: function(e) {
                var t = this;
                e.data.forEach((function(e) {
                    var n = "C2C".concat(e.userID);
                    t.conversationMap.has(n) && (t.conversationMap.get(n).userProfile = e)
                }
                )),
                this._emitConversationUpdate(!0, !1)
            }
        }, {
            key: "_onMessageRevoked",
            value: function(e) {
                var t = this
                  , n = e.data;
                if (0 !== n.length) {
                    var r = null
                      , o = !1;
                    n.forEach((function(e) {
                        (r = t.conversationMap.get(e.conversationID)) && r.isLastMessageRevoked(e) && (o = !0,
                        r.setLastMessageRevoked(!0))
                    }
                    )),
                    o && this._emitConversationUpdate(!0, !1)
                }
            }
        }, {
            key: "_handleSyncMessages",
            value: function(e) {
                this._onSendOrReceiveMessage(e, !0)
            }
        }, {
            key: "_onSendOrReceiveMessage",
            value: function(e) {
                var t = this
                  , n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                  , r = e.data.eventDataList;
                this._isReady ? 0 !== r.length && (this._getPeerReadTime(r),
                this._updateLocalConversationList(r, !1, n),
                this._setStorageConversationList(),
                this._emitConversationUpdate()) : this.ready((function() {
                    t._onSendOrReceiveMessage(e, n)
                }
                ))
            }
        }, {
            key: "_getPeerReadTime",
            value: function(e) {
                var t = this
                  , n = [];
                e.forEach((function(e) {
                    t.conversationMap.has(e.conversationID) || e.type !== En.CONV_C2C || n.push(e.conversationID.replace(En.CONV_C2C, ""))
                }
                )),
                n.length > 0 && (Es.debug("ConversationController._getPeerReadTime userIDList:".concat(n)),
                this.tim.messageController.getPeerReadTime(n))
            }
        }, {
            key: "_updateLocalConversationList",
            value: function(e, t, n) {
                var r;
                r = this._updateTempConversations(e, t, n),
                this.conversationMap = new Map(this._sortConversations([].concat(Xn(r.conversations), Xn(this.conversationMap)))),
                t || this._updateUserOrGroupProfile(r.newerConversations)
            }
        }, {
            key: "_updateTempConversations",
            value: function(e, t, n) {
                for (var r = [], o = [], i = 0, a = e.length; i < a; i++) {
                    var s = new jv(e[i])
                      , u = this.conversationMap.get(s.conversationID);
                    if (this.conversationMap.has(s.conversationID)) {
                        var c = ["unreadCount", "allowType", "adminForbidType", "payload"];
                        n && c.push("lastMessage"),
                        xs(u, s, c, [null, void 0, "", 0, NaN]),
                        u.updateUnreadCount(s.unreadCount, t),
                        n || (u.lastMessage.payload = e[i].lastMessage.payload),
                        this.conversationMap.delete(u.conversationID),
                        r.push([u.conversationID, u])
                    } else {
                        if (s.type === En.CONV_GROUP) {
                            var l = s.groupProfile.groupID
                              , p = this.tim.groupController.getLocalGroupProfile(l);
                            p && (s.groupProfile = p,
                            s.updateUnreadCount(0))
                        }
                        o.push(s),
                        r.push([s.conversationID, s])
                    }
                }
                return {
                    conversations: r,
                    newerConversations: o
                }
            }
        }, {
            key: "_sortConversations",
            value: function(e) {
                return e.sort((function(e, t) {
                    return t[1].lastMessage.lastTime - e[1].lastMessage.lastTime
                }
                ))
            }
        }, {
            key: "_updateUserOrGroupProfile",
            value: function(e) {
                var t = this;
                if (0 !== e.length) {
                    var n = []
                      , r = [];
                    e.forEach((function(e) {
                        if (e.type === En.CONV_C2C)
                            n.push(e.toAccount);
                        else if (e.type === En.CONV_GROUP) {
                            var o = e.toAccount;
                            t.tim.groupController.hasLocalGroup(o) ? e.groupProfile = t.tim.groupController.getLocalGroupProfile(o) : r.push(o)
                        }
                    }
                    )),
                    n.length > 0 && this.tim.getUserProfile({
                        userIDList: n
                    }).then((function(e) {
                        var n = e.data;
                        Rs(n) ? n.forEach((function(e) {
                            t.conversationMap.get("C2C".concat(e.userID)).userProfile = e
                        }
                        )) : t.conversationMap.get("C2C".concat(n.userID)).userProfile = n
                    }
                    )),
                    r.length > 0 && this.tim.groupController.getGroupProfileAdvance({
                        groupIDList: r,
                        responseFilter: {
                            groupBaseInfoFilter: ["Type", "Name", "FaceUrl"]
                        }
                    }).then((function(e) {
                        e.data.successGroupList.forEach((function(e) {
                            var n = "GROUP".concat(e.groupID);
                            if (t.conversationMap.has(n)) {
                                var r = t.conversationMap.get(n);
                                xs(r.groupProfile, e, [], [null, void 0, "", 0, NaN]),
                                !r.subType && e.type && (r.subType = e.type)
                            }
                        }
                        ))
                    }
                    ))
                }
            }
        }, {
            key: "_updateUserOrGroupProfileCompletely",
            value: function(e) {
                var t = this;
                return e.type === En.CONV_C2C ? this.tim.getUserProfile({
                    userIDList: [e.toAccount]
                }).then((function(n) {
                    var r = n.data;
                    return 0 === r.length ? Nd(new Bp({
                        code: Kp.USER_OR_GROUP_NOT_FOUND,
                        message: _f
                    })) : (e.userProfile = r[0],
                    e._isInfoCompleted = !0,
                    t._unshiftConversation(e),
                    Ld({
                        conversation: e
                    }))
                }
                )) : this.tim.getGroupProfile({
                    groupID: e.toAccount
                }).then((function(n) {
                    return e.groupProfile = n.data.group,
                    e._isInfoCompleted = !0,
                    t._unshiftConversation(e),
                    Ld({
                        conversation: e
                    })
                }
                ))
            }
        }, {
            key: "_unshiftConversation",
            value: function(e) {
                e instanceof jv && !this.conversationMap.has(e.conversationID) && (this.conversationMap = new Map([[e.conversationID, e]].concat(Xn(this.conversationMap))),
                this._setStorageConversationList(),
                this._emitConversationUpdate(!0, !1))
            }
        }, {
            key: "deleteLocalConversation",
            value: function(e) {
                this.conversationMap.delete(e),
                this._setStorageConversationList(),
                this.emitInnerEvent(sd, e),
                this._emitConversationUpdate(!0, !1)
            }
        }, {
            key: "_getConversationOptions",
            value: function(e) {
                var t = []
                  , n = e.filter((function(e) {
                    var t = e.lastMsg;
                    return Os(t)
                }
                )).map((function(e) {
                    if (1 === e.type) {
                        var n = {
                            userID: e.userID,
                            nick: e.c2CNick,
                            avatar: e.c2CImage
                        };
                        return t.push(n),
                        {
                            conversationID: "C2C".concat(e.userID),
                            type: "C2C",
                            lastMessage: {
                                lastTime: e.time,
                                lastSequence: e.sequence,
                                fromAccount: e.lastC2CMsgFromAccount,
                                messageForShow: e.messageShow,
                                type: e.lastMsg.elements[0] ? e.lastMsg.elements[0].type : null,
                                payload: e.lastMsg.elements[0] ? e.lastMsg.elements[0].content : null
                            },
                            userProfile: new Ev(n),
                            peerReadTime: e.c2cPeerReadTime
                        }
                    }
                    return {
                        conversationID: "GROUP".concat(e.groupID),
                        type: "GROUP",
                        lastMessage: {
                            lastTime: e.time,
                            lastSequence: e.messageReadSeq + e.unreadCount,
                            fromAccount: e.msgGroupFromAccount,
                            messageForShow: e.messageShow,
                            type: e.lastMsg.elements[0] ? e.lastMsg.elements[0].type : null,
                            payload: e.lastMsg.elements[0] ? e.lastMsg.elements[0].content : null
                        },
                        groupProfile: new xv({
                            groupID: e.groupID,
                            name: e.groupNick,
                            avatar: e.groupImage
                        }),
                        unreadCount: e.unreadCount,
                        peerReadTime: 0
                    }
                }
                ));
                return t.length > 0 && this.emitInnerEvent(ad, t),
                n
            }
        }, {
            key: "_emitConversationUpdate",
            value: function() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
                  , t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                  , n = Xn(this.conversationMap.values());
                t && this.emitInnerEvent(id, n),
                e && this.emitOuterEvent(Cn.CONVERSATION_LIST_UPDATED, n)
            }
        }, {
            key: "_conversationMapTreeShaking",
            value: function(e) {
                var t = this
                  , n = new Map(Xn(this.conversationMap));
                e.forEach((function(e) {
                    return n.delete(e.conversationID)
                }
                )),
                n.has(En.CONV_SYSTEM) && n.delete(En.CONV_SYSTEM);
                var r = this.tim.groupController.getJoinedAVChatRoom();
                r && r.forEach((function(e) {
                    n.delete("".concat(En.CONV_GROUP).concat(e))
                }
                )),
                Xn(n.keys()).forEach((function(e) {
                    return t.conversationMap.delete(e)
                }
                ))
            }
        }, {
            key: "reset",
            value: function() {
                this.pagingStatus = tc.NOT_START,
                this.pagingTimeStamp = 0,
                this.conversationMap.clear(),
                this.resetReady(),
                this.tim.innerEmitter.once(Dh, this._initLocalConversationList, this)
            }
        }]),
        n
    }(Dd)
      , Bv = 1..toFixed
      , Kv = Math.floor
      , Hv = function(e, t, n) {
        return 0 === t ? n : t % 2 == 1 ? Hv(e, t - 1, n * e) : Hv(e * e, t / 2, n)
    }
      , $v = Bv && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)) || !o((function() {
        Bv.call({})
    }
    ));
    we({
        target: "Number",
        proto: !0,
        forced: $v
    }, {
        toFixed: function(e) {
            var t, n, r, o, i = function(e) {
                if ("number" != typeof e && "Number" != p(e))
                    throw TypeError("Incorrect invocation");
                return +e
            }(this), a = se(e), s = [0, 0, 0, 0, 0, 0], u = "", c = "0", l = function(e, t) {
                for (var n = -1, r = t; ++n < 6; )
                    r += e * s[n],
                    s[n] = r % 1e7,
                    r = Kv(r / 1e7)
            }, f = function(e) {
                for (var t = 6, n = 0; --t >= 0; )
                    n += s[t],
                    s[t] = Kv(n / e),
                    n = n % e * 1e7
            }, h = function() {
                for (var e = 6, t = ""; --e >= 0; )
                    if ("" !== t || 0 === e || 0 !== s[e]) {
                        var n = String(s[e]);
                        t = "" === t ? n : t + wr.call("0", 7 - n.length) + n
                    }
                return t
            };
            if (a < 0 || a > 20)
                throw RangeError("Incorrect fraction digits");
            if (i != i)
                return "NaN";
            if (i <= -1e21 || i >= 1e21)
                return String(i);
            if (i < 0 && (u = "-",
            i = -i),
            i > 1e-21)
                if (n = (t = function(e) {
                    for (var t = 0, n = e; n >= 4096; )
                        t += 12,
                        n /= 4096;
                    for (; n >= 2; )
                        t += 1,
                        n /= 2;
                    return t
                }(i * Hv(2, 69, 1)) - 69) < 0 ? i * Hv(2, -t, 1) : i / Hv(2, t, 1),
                n *= 4503599627370496,
                (t = 52 - t) > 0) {
                    for (l(0, n),
                    r = a; r >= 7; )
                        l(1e7, 0),
                        r -= 7;
                    for (l(Hv(10, r, 1), 0),
                    r = t - 1; r >= 23; )
                        f(1 << 23),
                        r -= 23;
                    f(1 << r),
                    l(1, 1),
                    f(2),
                    c = h()
                } else
                    l(0, n),
                    l(1 << -t, 0),
                    c = h() + wr.call("0", a);
            return c = a > 0 ? u + ((o = c.length) <= a ? "0." + wr.call("0", a - o) + c : c.slice(0, o - a) + "." + c.slice(o - a)) : u + c
        }
    });
    var zv = [].push
      , Yv = Math.min
      , Wv = !o((function() {
        return !RegExp(4294967295, "y")
    }
    ));
    ma("split", 2, (function(e, t, n) {
        var r;
        return r = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(e, n) {
            var r = String(d(this))
              , o = void 0 === n ? 4294967295 : n >>> 0;
            if (0 === o)
                return [];
            if (void 0 === e)
                return [r];
            if (!aa(e))
                return t.call(r, e, o);
            for (var i, a, s, u = [], c = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), l = 0, p = new RegExp(e.source,c + "g"); (i = ea.call(p, r)) && !((a = p.lastIndex) > l && (u.push(r.slice(l, i.index)),
            i.length > 1 && i.index < r.length && zv.apply(u, i.slice(1)),
            s = i[0].length,
            l = a,
            u.length >= o)); )
                p.lastIndex === i.index && p.lastIndex++;
            return l === r.length ? !s && p.test("") || u.push("") : u.push(r.slice(l)),
            u.length > o ? u.slice(0, o) : u
        }
        : "0".split(void 0, 0).length ? function(e, n) {
            return void 0 === e && 0 === n ? [] : t.call(this, e, n)
        }
        : t,
        [function(t, n) {
            var o = d(this)
              , i = null == t ? void 0 : t[e];
            return void 0 !== i ? i.call(t, o, n) : r.call(String(o), t, n)
        }
        , function(e, o) {
            var i = n(r, e, this, o, r !== t);
            if (i.done)
                return i.value;
            var a = D(e)
              , s = String(this)
              , u = wo(a, RegExp)
              , c = a.unicode
              , l = (a.ignoreCase ? "i" : "") + (a.multiline ? "m" : "") + (a.unicode ? "u" : "") + (Wv ? "y" : "g")
              , p = new u(Wv ? a : "^(?:" + a.source + ")",l)
              , f = void 0 === o ? 4294967295 : o >>> 0;
            if (0 === f)
                return [];
            if (0 === s.length)
                return null === _a(p, s) ? [s] : [];
            for (var h = 0, d = 0, g = []; d < s.length; ) {
                p.lastIndex = Wv ? d : 0;
                var m, v = _a(p, Wv ? s : s.slice(d));
                if (null === v || (m = Yv(ce(p.lastIndex + (Wv ? 0 : d)), s.length)) === h)
                    d = ya(s, d, c);
                else {
                    if (g.push(s.slice(h, d)),
                    g.length === f)
                        return g;
                    for (var y = 1; y <= v.length - 1; y++)
                        if (g.push(v[y]),
                        g.length === f)
                            return g;
                    d = h = m
                }
            }
            return g.push(s.slice(h)),
            g
        }
        ]
    }
    ), !Wv);
    var Jv, Xv = T.f, Qv = "".startsWith, Zv = Math.min, ey = ca("startsWith"), ty = !(ey || (Jv = Xv(String.prototype, "startsWith"),
    !Jv || Jv.writable));
    we({
        target: "String",
        proto: !0,
        forced: !ty && !ey
    }, {
        startsWith: function(e) {
            var t = String(d(this));
            sa(e);
            var n = ce(Zv(arguments.length > 1 ? arguments[1] : void 0, t.length))
              , r = String(e);
            return Qv ? Qv.call(t, r, n) : t.slice(n, n + r.length) === r
        }
    });
    var ny = function() {
        function e(t) {
            if (bn(this, e),
            void 0 === t)
                throw new Bp({
                    code: Kp.MESSAGE_LIST_CONSTRUCTOR_NEED_OPTIONS,
                    message: Zp
                });
            if (void 0 === t.tim)
                throw new Bp({
                    code: Kp.MESSAGE_LIST_CONSTRUCTOR_NEED_OPTIONS,
                    message: "".concat(Zp, ".tim")
                });
            this.list = new Map,
            this.tim = t.tim,
            this._initializeOptions(t)
        }
        return Gn(e, [{
            key: "getLocalOldestMessageByConversationID",
            value: function(e) {
                if (!e)
                    return null;
                if (!this.list.has(e))
                    return null;
                var t = this.list.get(e).values();
                return t ? t.next().value : null
            }
        }, {
            key: "_initializeOptions",
            value: function(e) {
                this.options = {};
                var t = {
                    memory: {
                        maxDatasPerKey: 100,
                        maxBytesPerData: 256,
                        maxKeys: 0
                    },
                    cache: {
                        maxDatasPerKey: 10,
                        maxBytesPerData: 256,
                        maxKeys: 0
                    }
                };
                for (var n in t)
                    if (Object.prototype.hasOwnProperty.call(t, n)) {
                        if (void 0 === e[n]) {
                            this.options[n] = t[n];
                            continue
                        }
                        var r = t[n];
                        for (var o in r)
                            if (Object.prototype.hasOwnProperty.call(r, o)) {
                                if (void 0 === e[n][o]) {
                                    this.options[n][o] = r[o];
                                    continue
                                }
                                this.options[n][o] = e[n][o]
                            }
                    }
            }
        }, {
            key: "pushIn",
            value: function(e) {
                var t = e.conversationID
                  , n = e.ID
                  , r = !0;
                return this.list.has(t) || this.list.set(t, new Map),
                this.list.has(t) && this.list.get(t).has(n) ? r = !1 : this.list.get(t).set(n, e),
                r
            }
        }, {
            key: "unshift",
            value: function(e) {
                Rs(e) ? e.length > 0 && this._unshiftMultipleMessages(e) : this._unshiftSingleMessage(e)
            }
        }, {
            key: "_unshiftSingleMessage",
            value: function(e) {
                var t = e.conversationID
                  , n = e.ID;
                if (!this.list.has(t))
                    return this.list.set(t, new Map),
                    void this.list.get(t).set(n, e);
                var r = Array.from(this.list.get(t));
                r.unshift([n, e]),
                this.list.set(t, new Map(r))
            }
        }, {
            key: "_unshiftMultipleMessages",
            value: function(e) {
                for (var t = e.length, n = [], r = e[0].conversationID, o = this.list.has(r) ? Array.from(this.list.get(r)) : [], i = 0; i < t; i++)
                    n.push([e[i].ID, e[i]]);
                this.list.set(r, new Map(n.concat(o)))
            }
        }, {
            key: "remove",
            value: function(e) {
                var t = e.conversationID
                  , n = e.ID;
                this.list.has(t) && this.list.get(t).delete(n)
            }
        }, {
            key: "revoke",
            value: function(e, t, n) {
                if (Es.debug("revoke message", e, t, n),
                this.list.has(e)) {
                    var r, o = er(this.list.get(e));
                    try {
                        for (o.s(); !(r = o.n()).done; ) {
                            var i = Jn(r.value, 2)[1];
                            if (i.sequence === t && !i.isRevoked && (As(n) || i.random === n))
                                return i.isRevoked = !0,
                                i
                        }
                    } catch (a) {
                        o.e(a)
                    } finally {
                        o.f()
                    }
                }
                return null
            }
        }, {
            key: "removeByConversationID",
            value: function(e) {
                this.list.has(e) && this.list.delete(e)
            }
        }, {
            key: "updateMessageIsPeerReadProperty",
            value: function(e, t) {
                var n = [];
                if (this.list.has(e)) {
                    var r, o = er(this.list.get(e));
                    try {
                        for (o.s(); !(r = o.n()).done; ) {
                            var i = Jn(r.value, 2)[1];
                            i.time <= t && !i.isPeerRead && "out" === i.flow && (i.isPeerRead = !0,
                            n.push(i))
                        }
                    } catch (a) {
                        o.e(a)
                    } finally {
                        o.f()
                    }
                    Es.log("MessagesList.updateMessageIsPeerReadProperty conversationID=".concat(e, " peerReadTime=").concat(t, " count=").concat(n.length))
                }
                return n
            }
        }, {
            key: "hasLocalMessageList",
            value: function(e) {
                return this.list.has(e)
            }
        }, {
            key: "getLocalMessageList",
            value: function(e) {
                return this.hasLocalMessageList(e) ? Xn(this.list.get(e).values()) : []
            }
        }, {
            key: "hasLocalMessage",
            value: function(e, t) {
                return !!this.hasLocalMessageList(e) && this.list.get(e).has(t)
            }
        }, {
            key: "getLocalMessage",
            value: function(e, t) {
                return this.hasLocalMessage(e, t) ? this.list.get(e).get(t) : null
            }
        }, {
            key: "reset",
            value: function() {
                this.list.clear()
            }
        }]),
        e
    }()
      , ry = function() {
        function e(t) {
            bn(this, e),
            this.tim = t
        }
        return Gn(e, [{
            key: "setMessageRead",
            value: function(e) {
                var t = e.conversationID
                  , n = e.messageID
                  , r = this.tim.conversationController.getLocalConversation(t);
                if (Es.log("ReadReportHandler.setMessageRead conversationID=".concat(t, " unreadCount=").concat(r ? r.unreadCount : 0)),
                !r || 0 === r.unreadCount)
                    return Ld();
                var o = n ? this.tim.messageController.getLocalMessage(t, n) : null;
                switch (r.type) {
                case En.CONV_C2C:
                    return this._setC2CMessageRead({
                        conversationID: t,
                        lastMessageTime: o ? o.time : r.lastMessage.lastTime
                    });
                case En.CONV_GROUP:
                    return this._setGroupMessageRead({
                        conversationID: t,
                        lastMessageSeq: o ? o.sequence : r.lastMessage.lastSequence
                    });
                case En.CONV_SYSTEM:
                    return r.unreadCount = 0,
                    Ld();
                default:
                    return Ld()
                }
            }
        }, {
            key: "_setC2CMessageRead",
            value: function(e) {
                var t = this
                  , n = e.conversationID
                  , r = e.lastMessageTime;
                Es.log("ReadReportHandler._setC2CMessageRead conversationID=".concat(n, " lastMessageTime=").concat(r)),
                Ts(r) || Es.warn("ReadReportHandler._setC2CMessageRead 请勿修改 Conversation.lastMessage.lastTime，否则可能会导致已读上报结果不准确");
                var o = new Wd(lg);
                return o.setText("".concat(n, "-").concat(r)),
                this.tim.messageController.request({
                    name: "conversation",
                    action: "setC2CMessageRead",
                    param: {
                        C2CMsgReaded: {
                            cookie: "",
                            C2CMsgReadedItem: [{
                                toAccount: n.replace("C2C", ""),
                                lastMessageTime: r,
                                receipt: 1
                            }]
                        }
                    }
                }).then((function() {
                    return o.setNetworkType(t.tim.netMonitor.getNetworkType()).setEnd(),
                    Es.log("ReadReportHandler._setC2CMessageRead ok."),
                    t._updateIsReadAfterReadReport({
                        conversationID: n,
                        lastMessageTime: r
                    }),
                    t._updateUnreadCount(n),
                    new Rd
                }
                )).catch((function(e) {
                    return t.tim.netMonitor.probe().then((function(t) {
                        var n = Jn(t, 2)
                          , r = n[0]
                          , i = n[1];
                        o.setError(e, r, i).setEnd()
                    }
                    )),
                    Es.log("ReadReportHandler._setC2CMessageRead failed. ".concat(qs(e))),
                    Nd(e)
                }
                ))
            }
        }, {
            key: "_setGroupMessageRead",
            value: function(e) {
                var t = this
                  , n = e.conversationID
                  , r = e.lastMessageSeq;
                Es.log("ReadReportHandler._setGroupMessageRead conversationID=".concat(n, " lastMessageSeq=").concat(r)),
                Ts(r) || Es.warn("ReadReportHandler._setGroupMessageRead 请勿修改 Conversation.lastMessage.lastSequence，否则可能会导致已读上报结果不准确");
                var o = new Wd(pg);
                return o.setText("".concat(n, "-").concat(r)),
                this.tim.messageController.request({
                    name: "conversation",
                    action: "setGroupMessageRead",
                    param: {
                        groupID: n.replace("GROUP", ""),
                        messageReadSeq: r
                    }
                }).then((function() {
                    return o.setNetworkType(t.tim.netMonitor.getNetworkType()).setEnd(),
                    Es.log("ReadReportHandler._setGroupMessageRead ok."),
                    t._updateIsReadAfterReadReport({
                        conversationID: n,
                        lastMessageSeq: r
                    }),
                    t._updateUnreadCount(n),
                    new Rd
                }
                )).catch((function(e) {
                    return t.tim.netMonitor.probe().then((function(t) {
                        var n = Jn(t, 2)
                          , r = n[0]
                          , i = n[1];
                        o.setError(e, r, i).setEnd()
                    }
                    )),
                    Es.log("ReadReportHandler._setGroupMessageRead failed. ".concat(qs(e))),
                    Nd(e)
                }
                ))
            }
        }, {
            key: "_updateUnreadCount",
            value: function(e) {
                var t = this.tim
                  , n = t.conversationController
                  , r = t.messageController
                  , o = n.getLocalConversation(e)
                  , i = r.getLocalMessageList(e);
                o && (o.unreadCount = i.filter((function(e) {
                    return !e.isRead && !e.getOnlineOnlyFlag()
                }
                )).length,
                Es.log("ReadReportHandler._updateUnreadCount conversationID=".concat(o.conversationID, " unreadCount=").concat(o.unreadCount)))
            }
        }, {
            key: "_updateIsReadAfterReadReport",
            value: function(e) {
                var t = e.conversationID
                  , n = e.lastMessageSeq
                  , r = e.lastMessageTime
                  , o = this.tim.messageController.getLocalMessageList(t);
                if (0 !== o.length)
                    for (var i, a = o.length - 1; a >= 0; a--)
                        if (i = o[a],
                        !(r && i.time > r || n && i.sequence > n)) {
                            if ("in" === i.flow && i.isRead)
                                break;
                            i.setIsRead(!0)
                        }
            }
        }, {
            key: "updateIsRead",
            value: function(e) {
                var t = this.tim
                  , n = t.conversationController
                  , r = t.messageController
                  , o = n.getLocalConversation(e)
                  , i = r.getLocalMessageList(e);
                if (o && 0 !== i.length && !eu(o.type)) {
                    for (var a = [], s = 0; s < i.length; s++)
                        "in" !== i[s].flow ? "out" !== i[s].flow || i[s].isRead || i[s].setIsRead(!0) : a.push(i[s]);
                    var u = 0;
                    if (o.type === En.CONV_C2C) {
                        var c = a.slice(-o.unreadCount).filter((function(e) {
                            return e.isRevoked
                        }
                        )).length;
                        u = a.length - o.unreadCount - c
                    } else
                        u = a.length - o.unreadCount;
                    for (var l = 0; l < u && !a[l].isRead; l++)
                        a[l].setIsRead(!0)
                }
            }
        }]),
        e
    }()
      , oy = it.findIndex
      , iy = !0
      , ay = lt("findIndex");
    "findIndex"in [] && Array(1).findIndex((function() {
        iy = !1
    }
    )),
    we({
        target: "Array",
        proto: !0,
        forced: iy || !ay
    }, {
        findIndex: function(e) {
            return oy(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }),
    cr("findIndex");
    var sy = function() {
        function e(t) {
            var n = t.tim
              , r = t.messageController;
            bn(this, e),
            this.tim = n,
            this.messageController = r,
            this.completedMap = new Map,
            this._initListener()
        }
        return Gn(e, [{
            key: "getMessageList",
            value: function(e) {
                var t = this
                  , n = e.conversationID
                  , r = e.nextReqMessageID
                  , o = e.count;
                if (this.tim.groupController.checkJoinedAVChatRoomByID(n.replace("GROUP", "")))
                    return Es.log("GetMessageHandler.getMessageList not available in avchatroom. conversationID=".concat(n)),
                    Ld({
                        messageList: [],
                        nextReqMessageID: "",
                        isCompleted: !0
                    });
                (As(o) || o > 15) && (o = 15);
                var i = this._computeLeftCount({
                    conversationID: n,
                    nextReqMessageID: r
                });
                return Es.log("GetMessageHandler.getMessageList. conversationID=".concat(n, " leftCount=").concat(i, " count=").concat(o, " nextReqMessageID=").concat(r)),
                this._needGetHistory({
                    conversationID: n,
                    leftCount: i,
                    count: o
                }) ? this.messageController.getHistoryMessages({
                    conversationID: n,
                    count: 20
                }).then((function() {
                    return i = t._computeLeftCount({
                        conversationID: n,
                        nextReqMessageID: r
                    }),
                    new Rd(t._computeResult({
                        conversationID: n,
                        nextReqMessageID: r,
                        count: o,
                        leftCount: i
                    }))
                }
                )) : (Es.log("GetMessageHandler.getMessageList. get messagelist from memory"),
                Ld(this._computeResult({
                    conversationID: n,
                    nextReqMessageID: r,
                    count: o,
                    leftCount: i
                })))
            }
        }, {
            key: "setCompleted",
            value: function(e) {
                Es.log("GetMessageHandler.setCompleted. conversationID=".concat(e)),
                this.completedMap.set(e, !0)
            }
        }, {
            key: "deleteCompletedItem",
            value: function(e) {
                Es.log("GetMessageHandler.deleteCompletedItem. conversationID=".concat(e)),
                this.completedMap.delete(e)
            }
        }, {
            key: "_initListener",
            value: function() {
                var e = this;
                this.tim.innerEmitter.on(pd, (function() {
                    e.setCompleted(En.CONV_SYSTEM)
                }
                )),
                this.tim.innerEmitter.on(cd, (function(t) {
                    var n = t.data;
                    e.setCompleted("".concat(En.CONV_GROUP).concat(n))
                }
                ))
            }
        }, {
            key: "_getMessageListSize",
            value: function(e) {
                return this.messageController.getLocalMessageList(e).length
            }
        }, {
            key: "_needGetHistory",
            value: function(e) {
                var t = e.conversationID
                  , n = e.leftCount
                  , r = e.count
                  , o = this.tim.conversationController.getLocalConversation(t)
                  , i = !!o && o.type === En.CONV_SYSTEM
                  , a = !!o && o.subType === En.GRP_AVCHATROOM;
                return !i && !a && (n < r && !this.completedMap.has(t))
            }
        }, {
            key: "_computeResult",
            value: function(e) {
                var t = e.conversationID
                  , n = e.nextReqMessageID
                  , r = e.count
                  , o = e.leftCount
                  , i = this._computeMessageList({
                    conversationID: t,
                    nextReqMessageID: n,
                    count: r
                })
                  , a = this._computeIsCompleted({
                    conversationID: t,
                    leftCount: o,
                    count: r
                })
                  , s = this._computeNextReqMessageID({
                    messageList: i,
                    isCompleted: a,
                    conversationID: t
                });
                return Es.log("GetMessageHandler._computeResult. conversationID=".concat(t, " leftCount=").concat(o, " count=").concat(r, " nextReqMessageID=").concat(s, " nums=").concat(i.length, " isCompleted=").concat(a)),
                {
                    messageList: i,
                    nextReqMessageID: s,
                    isCompleted: a
                }
            }
        }, {
            key: "_computeNextReqMessageID",
            value: function(e) {
                var t = e.messageList
                  , n = e.isCompleted
                  , r = e.conversationID;
                if (!n)
                    return 0 === t.length ? "" : t[0].ID;
                var o = this.messageController.getLocalMessageList(r);
                return 0 === o.length ? "" : o[0].ID
            }
        }, {
            key: "_computeMessageList",
            value: function(e) {
                var t = e.conversationID
                  , n = e.nextReqMessageID
                  , r = e.count
                  , o = this.messageController.getLocalMessageList(t)
                  , i = this._computeIndexEnd({
                    nextReqMessageID: n,
                    messageList: o
                })
                  , a = this._computeIndexStart({
                    indexEnd: i,
                    count: r
                });
                return o.slice(a, i)
            }
        }, {
            key: "_computeIndexEnd",
            value: function(e) {
                var t = e.messageList
                  , n = void 0 === t ? [] : t
                  , r = e.nextReqMessageID;
                return r ? n.findIndex((function(e) {
                    return e.ID === r
                }
                )) : n.length
            }
        }, {
            key: "_computeIndexStart",
            value: function(e) {
                var t = e.indexEnd
                  , n = e.count;
                return t > n ? t - n : 0
            }
        }, {
            key: "_computeLeftCount",
            value: function(e) {
                var t = e.conversationID
                  , n = e.nextReqMessageID;
                return n ? this.messageController.getLocalMessageList(t).findIndex((function(e) {
                    return e.ID === n
                }
                )) : this._getMessageListSize(t)
            }
        }, {
            key: "_computeIsCompleted",
            value: function(e) {
                var t = e.conversationID;
                return !!(e.leftCount <= e.count && this.completedMap.has(t))
            }
        }, {
            key: "reset",
            value: function() {
                Es.log("GetMessageHandler.reset"),
                this.completedMap.clear()
            }
        }]),
        e
    }()
      , uy = function e(t) {
        bn(this, e),
        this.value = t,
        this.next = null
    }
      , cy = function() {
        function e(t) {
            bn(this, e),
            this.MAX_LENGTH = t,
            this.pTail = null,
            this.pNodeToDel = null,
            this.map = new Map,
            Es.log("SinglyLinkedList init MAX_LENGTH=".concat(this.MAX_LENGTH))
        }
        return Gn(e, [{
            key: "pushIn",
            value: function(e) {
                var t = new uy(e);
                if (this.map.size < this.MAX_LENGTH)
                    null === this.pTail ? (this.pTail = t,
                    this.pNodeToDel = t) : (this.pTail.next = t,
                    this.pTail = t),
                    this.map.set(e, 1);
                else {
                    var n = this.pNodeToDel;
                    this.pNodeToDel = this.pNodeToDel.next,
                    this.map.delete(n.value),
                    n.next = null,
                    n = null,
                    this.pTail.next = t,
                    this.pTail = t,
                    this.map.set(e, 1)
                }
            }
        }, {
            key: "has",
            value: function(e) {
                return this.map.has(e)
            }
        }, {
            key: "tail",
            value: function() {
                return this.pTail
            }
        }, {
            key: "size",
            value: function() {
                return this.map.size
            }
        }, {
            key: "data",
            value: function() {
                return Array.from(this.map.keys())
            }
        }, {
            key: "reset",
            value: function() {
                for (var e; null !== this.pNodeToDel; )
                    e = this.pNodeToDel,
                    this.pNodeToDel = this.pNodeToDel.next,
                    e.next = null,
                    e = null;
                this.pTail = null,
                this.map.clear()
            }
        }]),
        e
    }()
      , ly = function() {
        function e(t) {
            bn(this, e),
            this.tim = t
        }
        return Gn(e, [{
            key: "upload",
            value: function(e) {
                switch (e.type) {
                case En.MSG_IMAGE:
                    return this._uploadImage(e);
                case En.MSG_FILE:
                    return this._uploadFile(e);
                case En.MSG_AUDIO:
                    return this._uploadAudio(e);
                case En.MSG_VIDEO:
                    return this._uploadVideo(e);
                default:
                    return Promise.resolve()
                }
            }
        }, {
            key: "_uploadImage",
            value: function(e) {
                var t = this.tim
                  , n = t.uploadController
                  , r = t.messageController
                  , o = e.getElements()[0]
                  , i = r.getMessageOptionByID(e.messageID);
                return n.uploadImage({
                    file: i.payload.file,
                    to: i.to,
                    onProgress: function(e) {
                        if (o.updatePercent(e),
                        Ls(i.onProgress))
                            try {
                                i.onProgress(e)
                            } catch (t) {
                                return Nd(new Bp({
                                    code: Kp.MESSAGE_ONPROGRESS_FUNCTION_ERROR,
                                    message: "".concat(rf)
                                }))
                            }
                    }
                }).then((function(t) {
                    var n = t.location
                      , r = t.fileType
                      , i = t.fileSize
                      , a = t.width
                      , s = t.height
                      , u = Ys(n);
                    o.updateImageFormat(r);
                    var c = ru({
                        originUrl: u,
                        originWidth: a,
                        originHeight: s,
                        min: 198
                    })
                      , l = ru({
                        originUrl: u,
                        originWidth: a,
                        originHeight: s,
                        min: 720
                    });
                    return o.updateImageInfoArray([{
                        size: i,
                        url: u,
                        width: a,
                        height: s
                    }, qn({}, l), qn({}, c)]),
                    e
                }
                ))
            }
        }, {
            key: "_uploadFile",
            value: function(e) {
                var t = this.tim
                  , n = t.uploadController
                  , r = t.messageController
                  , o = e.getElements()[0]
                  , i = r.getMessageOptionByID(e.messageID);
                return n.uploadFile({
                    file: i.payload.file,
                    to: i.to,
                    onProgress: function(e) {
                        if (o.updatePercent(e),
                        Ls(i.onProgress))
                            try {
                                i.onProgress(e)
                            } catch (t) {
                                return Nd(new Bp({
                                    code: Kp.MESSAGE_ONPROGRESS_FUNCTION_ERROR,
                                    message: "".concat(rf)
                                }))
                            }
                    }
                }).then((function(t) {
                    var n = t.location
                      , r = Ys(n);
                    return o.updateFileUrl(r),
                    e
                }
                ))
            }
        }, {
            key: "_uploadAudio",
            value: function(e) {
                var t = this.tim
                  , n = t.uploadController
                  , r = t.messageController
                  , o = e.getElements()[0]
                  , i = r.getMessageOptionByID(e.messageID);
                return n.uploadAudio({
                    file: i.payload.file,
                    to: i.to,
                    onProgress: function(e) {
                        if (o.updatePercent(e),
                        Ls(i.onProgress))
                            try {
                                i.onProgress(e)
                            } catch (t) {
                                return Nd(new Bp({
                                    code: Kp.MESSAGE_ONPROGRESS_FUNCTION_ERROR,
                                    message: "".concat(rf)
                                }))
                            }
                    }
                }).then((function(t) {
                    var n = t.location
                      , r = Ys(n);
                    return o.updateAudioUrl(r),
                    e
                }
                ))
            }
        }, {
            key: "_uploadVideo",
            value: function(e) {
                var t = this.tim
                  , n = t.uploadController
                  , r = t.messageController
                  , o = e.getElements()[0]
                  , i = r.getMessageOptionByID(e.messageID);
                return n.uploadVideo({
                    file: i.payload.file,
                    to: i.to,
                    onProgress: function(e) {
                        if (o.updatePercent(e),
                        Ls(i.onProgress))
                            try {
                                i.onProgress(e)
                            } catch (t) {
                                return Nd(new Bp({
                                    code: Kp.MESSAGE_ONPROGRESS_FUNCTION_ERROR,
                                    message: "".concat(rf)
                                }))
                            }
                    }
                }).then((function(t) {
                    var n = Ys(t.location);
                    return o.updateVideoUrl(n),
                    e
                }
                ))
            }
        }]),
        e
    }()
      , py = function(e) {
        Fn(n, e);
        var t = Wn(n);
        function n(e) {
            var r;
            return bn(this, n),
            (r = t.call(this, e))._initializeMembers(),
            r._initializeListener(),
            r._initialzeHandlers(),
            r.messageOptionMap = new Map,
            r
        }
        return Gn(n, [{
            key: "_initializeMembers",
            value: function() {
                this.messagesList = new ny({
                    tim: this.tim
                }),
                this.currentMessageKey = {},
                this.singlyLinkedList = new cy(100),
                this._peerReadTimeMap = new Map
            }
        }, {
            key: "_initialzeHandlers",
            value: function() {
                this.readReportHandler = new ry(this.tim,this),
                this.getMessageHandler = new sy({
                    messageController: this,
                    tim: this.tim
                }),
                this.uploadFileHandler = new ly(this.tim)
            }
        }, {
            key: "reset",
            value: function() {
                this.messagesList.reset(),
                this.currentMessageKey = {},
                this.getMessageHandler.reset(),
                this.singlyLinkedList.reset(),
                this._peerReadTimeMap.clear(),
                this.messageOptionMap.clear()
            }
        }, {
            key: "_initializeListener",
            value: function() {
                var e = this.tim.innerEmitter;
                e.on(Vh, this._onReceiveC2CMessage, this),
                e.on(Oh, this._onSyncMessagesProcessing, this),
                e.on(Rh, this._onSyncMessagesFinished, this),
                e.on(Bh, this._onReceiveGroupMessage, this),
                e.on(Kh, this._onReceiveGroupTips, this),
                e.on(Hh, this._onReceiveSystemNotice, this),
                e.on(Yh, this._onReceiveGroupMessageRevokedNotice, this),
                e.on(Wh, this._onReceiveC2CMessageRevokedNotice, this),
                e.on(Jh, this._onC2CMessageReadReceipt, this),
                e.on(sd, this._clearConversationMessages, this)
            }
        }, {
            key: "_guardForAVChatRoom",
            value: function(e) {
                if (e.conversationType === En.CONV_GROUP) {
                    var t = this.tim.groupController
                      , n = e.to;
                    return t.hasLocalGroup(n) ? Promise.resolve() : t.getGroupProfile({
                        groupID: n
                    }).then((function(t) {
                        var r = t.data.group.type;
                        if (Es.log("MessageController._guardForAVChatRoom. groupID=".concat(n, " type=").concat(r)),
                        r === En.GRP_AVCHATROOM) {
                            var o = "userId=".concat(e.from, " 未加入群 groupID=").concat(n, "。发消息前先使用 joinGroup 接口申请加群，详细请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#joinGroup");
                            return Es.warn("MessageController._guardForAVChatRoom sendMessage not allowed. ".concat(o)),
                            Nd(new Bp({
                                code: Kp.MESSAGE_SEND_FAIL,
                                message: o,
                                data: {
                                    message: e
                                }
                            }))
                        }
                        return Promise.resolve()
                    }
                    ))
                }
                return Promise.resolve()
            }
        }, {
            key: "sendMessageInstance",
            value: function(e, t) {
                var n, r = this, o = null;
                switch (e.conversationType) {
                case En.CONV_C2C:
                    o = this._handleOnSendC2CMessageSuccess.bind(this);
                    break;
                case En.CONV_GROUP:
                    o = this._handleOnSendGroupMessageSuccess.bind(this);
                    break;
                default:
                    return Nd(new Bp({
                        code: Kp.MESSAGE_SEND_INVALID_CONVERSATION_TYPE,
                        message: tf
                    }))
                }
                return this.singlyLinkedList.pushIn(e.random),
                this.uploadFileHandler.upload(e).then((function() {
                    return r._guardForAVChatRoom(e).then((function() {
                        var o = null;
                        return e.isSendable() ? (r._addSendMessageTotalCount(e),
                        n = Date.now(),
                        e.conversationType === En.CONV_C2C ? o = r._createC2CMessagePack(e, t) : e.conversationType === En.CONV_GROUP && (o = r._createGroupMessagePack(e, t)),
                        r.request(o)) : Nd({
                            code: Kp.MESSAGE_FILE_URL_IS_EMPTY,
                            message: vf
                        })
                    }
                    )).then((function(i) {
                        return r._addSendMessageSuccessCount(e, n),
                        e.conversationType === En.CONV_GROUP && (e.sequence = i.data.sequence,
                        e.time = i.data.time,
                        e.generateMessageID(r.tim.context.identifier)),
                        r.messagesList.pushIn(e),
                        o(e, i.data),
                        r.messageOptionMap.delete(e.messageID),
                        r._isOnlineMessage(e, t) ? e.setOnlineOnlyFlag(!0) : r.emitInnerEvent(Ah, {
                            eventDataList: [{
                                conversationID: e.conversationID,
                                unreadCount: 0,
                                type: e.conversationType,
                                subType: e.conversationSubType,
                                lastMessage: e
                            }]
                        }),
                        "TIMImageElem" === e.type && ou(e.payload.imageInfoArray),
                        new Rd({
                            message: e
                        })
                    }
                    )).catch((function(t) {
                        e.status = ec.FAIL;
                        var n = new Wd(ig);
                        return n.setMessageType(e.type).setText("".concat(r._generateTjgID(e), "-").concat(e.type, "-").concat(e.from, "-").concat(e.to)),
                        r.probeNetwork().then((function(e) {
                            var r = Jn(e, 2)
                              , o = r[0]
                              , i = r[1];
                            n.setError(t, o, i).setEnd()
                        }
                        )),
                        Es.error("MessageController.sendMessageInstance error:", t),
                        Nd(new Bp({
                            code: t && t.code ? t.code : Kp.MESSAGE_SEND_FAIL,
                            message: t && t.message ? t.message : Qp,
                            data: {
                                message: e
                            }
                        }))
                    }
                    ))
                }
                ))
            }
        }, {
            key: "_getSendMessageSpecifiedKey",
            value: function(e) {
                if (e.conversationType === En.CONV_C2C)
                    return qd;
                if (e.conversationType === En.CONV_GROUP) {
                    var t = this.tim.groupController.getLocalGroupProfile(e.to);
                    if (!t)
                        return;
                    var n = t.type;
                    if (Js(n))
                        return Fd;
                    if (Xs(n))
                        return jd;
                    if (Qs(n))
                        return Vd;
                    if (Zs(n))
                        return Bd
                }
            }
        }, {
            key: "_addSendMessageTotalCount",
            value: function(e) {
                var t = this.tim.sumStatController;
                t.addTotalCount(xd);
                var n = this._getSendMessageSpecifiedKey(e);
                n && t.addTotalCount(n)
            }
        }, {
            key: "_addSendMessageSuccessCount",
            value: function(e, t) {
                var n = this.tim.sumStatController
                  , r = Math.abs(Date.now() - t);
                n.addSuccessCount(xd),
                n.addCost(xd, r);
                var o = this._getSendMessageSpecifiedKey(e);
                o && (n.addSuccessCount(o),
                n.addCost(o, r))
            }
        }, {
            key: "resendMessage",
            value: function(e) {
                return e.isResend = !0,
                e.status = ec.UNSEND,
                this.sendMessageInstance(e)
            }
        }, {
            key: "_isFileLikeMessage",
            value: function(e) {
                return [En.MSG_IMAGE, En.MSG_FILE, En.MSG_AUDIO, En.MSG_VIDEO].indexOf(e.type) >= 0
            }
        }, {
            key: "_resendBinaryTypeMessage",
            value: function() {}
        }, {
            key: "_canIUseOnlineOnlyFlag",
            value: function(e) {
                var t = this.tim.groupController.getJoinedAVChatRoom();
                return !t || !t.includes(e.to) || e.conversationType !== En.CONV_GROUP
            }
        }, {
            key: "_isOnlineMessage",
            value: function(e, t) {
                return !(!this._canIUseOnlineOnlyFlag(e) || !t || !0 !== t.onlineUserOnly)
            }
        }, {
            key: "_createC2CMessagePack",
            value: function(e, t) {
                var n = null;
                return t && (t.offlinePushInfo && (n = t.offlinePushInfo),
                !0 === t.onlineUserOnly && (n ? n.disablePush = !0 : n = {
                    disablePush: !0
                })),
                {
                    name: "c2cMessage",
                    action: "create",
                    tjgID: this._generateTjgID(e),
                    param: {
                        toAccount: e.to,
                        msgBody: e.getElements(),
                        msgSeq: e.sequence,
                        msgRandom: e.random,
                        msgLifeTime: this._isOnlineMessage(e, t) ? 0 : void 0,
                        offlinePushInfo: n ? {
                            pushFlag: !0 === n.disablePush ? 1 : 0,
                            title: n.title || "",
                            desc: n.description || "",
                            ext: n.extension || "",
                            apnsInfo: {
                                badgeMode: !0 === n.ignoreIOSBadge ? 1 : 0
                            },
                            androidInfo: {
                                OPPOChannelID: n.androidOPPOChannelID || ""
                            }
                        } : void 0
                    }
                }
            }
        }, {
            key: "_handleOnSendC2CMessageSuccess",
            value: function(e, t) {
                e.status = ec.SUCCESS,
                e.time = t.time
            }
        }, {
            key: "_createGroupMessagePack",
            value: function(e, t) {
                var n = null;
                return t && t.offlinePushInfo && (n = t.offlinePushInfo),
                {
                    name: "groupMessage",
                    action: "create",
                    tjgID: this._generateTjgID(e),
                    param: {
                        groupID: e.to,
                        msgBody: e.getElements(),
                        random: e.random,
                        priority: e.priority,
                        clientSequence: e.clientSequence,
                        onlineOnlyFlag: this._isOnlineMessage(e, t) ? 1 : 0,
                        offlinePushInfo: n ? {
                            pushFlag: !0 === n.disablePush ? 1 : 0,
                            title: n.title || "",
                            desc: n.description || "",
                            ext: n.extension || "",
                            apnsInfo: {
                                badgeMode: !0 === n.ignoreIOSBadge ? 1 : 0
                            },
                            androidInfo: {
                                OPPOChannelID: n.androidOPPOChannelID || ""
                            }
                        } : void 0
                    }
                }
            }
        }, {
            key: "_handleOnSendGroupMessageSuccess",
            value: function(e, t) {
                e.sequence = t.sequence,
                e.time = t.time,
                e.status = ec.SUCCESS
            }
        }, {
            key: "_onReceiveC2CMessage",
            value: function(e) {
                Es.debug("MessageController._onReceiveC2CMessage nums=".concat(e.data.length));
                var t = Date.now()
                  , n = this._newC2CMessageStoredAndSummary({
                    notifiesList: e.data,
                    type: En.CONV_C2C,
                    C2CRemainingUnreadList: e.C2CRemainingUnreadList
                })
                  , r = n.eventDataList
                  , o = n.result;
                if (r.length > 0 && this.emitInnerEvent(Nh, {
                    eventDataList: r,
                    result: o
                }),
                o.length > 0) {
                    var i = this.tim.sumStatController;
                    i.addTotalCount(Kd),
                    i.addSuccessCount(Kd),
                    i.addCost(Kd, Date.now() - t),
                    this.emitOuterEvent(Cn.MESSAGE_RECEIVED, o)
                }
            }
        }, {
            key: "_onReceiveGroupMessage",
            value: function(e) {
                Es.debug("MessageController._onReceiveGroupMessage nums=".concat(e.data.length));
                var t = Date.now()
                  , n = this.newGroupMessageStoredAndSummary(e.data)
                  , r = n.eventDataList
                  , o = n.result;
                if (r.length > 0 && this.emitInnerEvent(bh, {
                    eventDataList: r,
                    result: o,
                    isGroupTip: !1
                }),
                o.length > 0) {
                    var i = this.tim.sumStatController;
                    i.addTotalCount(Kd),
                    i.addSuccessCount(Kd),
                    i.addCost(Kd, Date.now() - t),
                    this.emitOuterEvent(Cn.MESSAGE_RECEIVED, o)
                }
            }
        }, {
            key: "_onReceiveGroupTips",
            value: function(e) {
                var t = Date.now()
                  , n = e.data;
                Es.debug("MessageController._onReceiveGroupTips nums=".concat(n.length));
                var r = this.newGroupTipsStoredAndSummary(n)
                  , o = r.eventDataList
                  , i = r.result;
                if (o.length > 0 && this.emitInnerEvent(bh, {
                    eventDataList: o,
                    result: i,
                    isGroupTip: !0
                }),
                i.length > 0) {
                    var a = this.tim.sumStatController;
                    a.addTotalCount(Kd),
                    a.addSuccessCount(Kd),
                    a.addCost(Kd, Date.now() - t),
                    this.emitOuterEvent(Cn.MESSAGE_RECEIVED, i)
                }
            }
        }, {
            key: "_onReceiveSystemNotice",
            value: function(e) {
                var t = Date.now()
                  , n = e.data
                  , r = n.groupSystemNotices
                  , o = n.type;
                Es.debug("MessageController._onReceiveSystemNotice nums=".concat(r.length));
                var i = this.newSystemNoticeStoredAndSummary({
                    notifiesList: r,
                    type: o
                })
                  , a = i.eventDataList
                  , s = i.result;
                if (a.length > 0 && this.emitInnerEvent(Ph, {
                    eventDataList: a,
                    result: s,
                    type: o
                }),
                s.length > 0 && "poll" === o) {
                    var u = this.tim.sumStatController;
                    u.addTotalCount(Kd),
                    u.addSuccessCount(Kd),
                    u.addCost(Kd, Date.now() - t),
                    this.emitOuterEvent(Cn.MESSAGE_RECEIVED, s)
                }
            }
        }, {
            key: "_onReceiveGroupMessageRevokedNotice",
            value: function(e) {
                var t = this;
                Es.debug("MessageController._onReceiveGroupMessageRevokedNotice nums=".concat(e.data.length));
                var n = []
                  , r = null;
                e.data.forEach((function(e) {
                    e.elements.revokedInfos.forEach((function(e) {
                        (r = t.messagesList.revoke("GROUP".concat(e.groupID), e.sequence)) && n.push(r)
                    }
                    ))
                }
                )),
                0 !== n.length && (this.emitInnerEvent(Gh, n),
                this.emitOuterEvent(Cn.MESSAGE_REVOKED, n))
            }
        }, {
            key: "_onReceiveC2CMessageRevokedNotice",
            value: function(e) {
                var t = this;
                Es.debug("MessageController._onReceiveC2CMessageRevokedNotice nums=".concat(e.data.length));
                var n = []
                  , r = null;
                e.data.forEach((function(e) {
                    e.c2cMessageRevokedNotify.revokedInfos.forEach((function(e) {
                        var o = t.tim.context.identifier === e.from ? "C2C".concat(e.to) : "C2C".concat(e.from);
                        (r = t.messagesList.revoke(o, e.sequence, e.random)) && n.push(r)
                    }
                    ))
                }
                )),
                0 !== n.length && (this.emitInnerEvent(Gh, n),
                this.emitOuterEvent(Cn.MESSAGE_REVOKED, n))
            }
        }, {
            key: "_onC2CMessageReadReceipt",
            value: function(e) {
                var t = this;
                e.data.forEach((function(e) {
                    var n = e.c2cMessageReadReceipt.to;
                    e.c2cMessageReadReceipt.uinPairReadArray.forEach((function(e) {
                        var r = e.peerReadTime;
                        Es.debug("MessageController._onC2CMessageReadReceipt to=".concat(n, " peerReadTime=").concat(r));
                        var o = "C2C".concat(n);
                        t.recordPeerReadTime(o, r),
                        t._updateMessageIsPeerReadProperty(o, r)
                    }
                    ))
                }
                ))
            }
        }, {
            key: "_updateMessageIsPeerReadProperty",
            value: function(e, t) {
                if (e.startsWith(En.CONV_C2C) && t > 0) {
                    var n = this.messagesList.updateMessageIsPeerReadProperty(e, t);
                    n.length > 0 && this.emitOuterEvent(Cn.MESSAGE_READ_BY_PEER, n)
                }
            }
        }, {
            key: "getPeerReadTime",
            value: function(e) {
                var t = this;
                if (!au(e)) {
                    var n = new Wd(hg);
                    return Es.log("MessageController.getPeerReadTime userIDList:".concat(e)),
                    this.request({
                        name: "c2cPeerReadTime",
                        action: "get",
                        param: {
                            userIDList: e
                        }
                    }).then((function(r) {
                        var o = r.data.peerReadTimeList;
                        Es.log("MessageController.getPeerReadTime ok. peerReadTimeList:".concat(o));
                        for (var i = "", a = 0; a < e.length; a++)
                            i += "".concat(e[a], "-").concat(o[a], " "),
                            o[a] > 0 && t.recordPeerReadTime("C2C".concat(e[a]), o[a]);
                        n.setNetworkType(t.getNetworkType()).setText(i).setEnd()
                    }
                    )).catch((function(e) {
                        t.probeNetwork().then((function(t) {
                            var r = Jn(t, 2)
                              , o = r[0]
                              , i = r[1];
                            n.setError(e, o, i).setEnd()
                        }
                        )),
                        Es.warn("MessageController.getPeerReadTime failed. error:", e)
                    }
                    ))
                }
            }
        }, {
            key: "recordPeerReadTime",
            value: function(e, t) {
                this._peerReadTimeMap.has(e) ? this._peerReadTimeMap.get(e) < t && this._peerReadTimeMap.set(e, t) : this._peerReadTimeMap.set(e, t)
            }
        }, {
            key: "_clearConversationMessages",
            value: function(e) {
                var t = e.data;
                this.messagesList.removeByConversationID(t),
                this.getMessageHandler.deleteCompletedItem(t)
            }
        }, {
            key: "_pushIntoNoticeResult",
            value: function(e, t) {
                return !(!this.messagesList.pushIn(t) || this.singlyLinkedList.has(t.random)) && (e.push(t),
                !0)
            }
        }, {
            key: "_newC2CMessageStoredAndSummary",
            value: function(e) {
                for (var t = e.notifiesList, n = e.type, r = e.C2CRemainingUnreadList, o = e.isFromSync, i = null, a = [], s = [], u = {}, c = this.tim.bigDataHallwayController, l = 0, p = t.length; l < p; l++) {
                    var f = t[l];
                    if (f.currentUser = this.tim.context.identifier,
                    f.conversationType = n,
                    f.isSystemMessage = !!f.isSystemMessage,
                    i = new oh(f),
                    f.elements = c.parseElements(f.elements, f.from),
                    i.setElement(f.elements),
                    !o)
                        if (!this._pushIntoNoticeResult(s, i))
                            continue;
                    0 !== f.msgLifeTime ? void 0 === u[i.conversationID] ? u[i.conversationID] = a.push({
                        conversationID: i.conversationID,
                        unreadCount: "out" === i.flow ? 0 : 1,
                        type: i.conversationType,
                        subType: i.conversationSubType,
                        lastMessage: i
                    }) - 1 : (a[u[i.conversationID]].type = i.conversationType,
                    a[u[i.conversationID]].subType = i.conversationSubType,
                    a[u[i.conversationID]].lastMessage = i,
                    "in" === i.flow && a[u[i.conversationID]].unreadCount++) : i.setOnlineOnlyFlag(!0)
                }
                if (Rs(r))
                    for (var h = function(e, t) {
                        var n = a.find((function(t) {
                            return t.conversationID === "C2C".concat(r[e].from)
                        }
                        ));
                        n ? n.unreadCount += r[e].count : a.push({
                            conversationID: "C2C".concat(r[e].from),
                            unreadCount: r[e].count,
                            type: En.CONV_C2C,
                            lastMsgTime: r[e].lastMsgTime
                        })
                    }, d = 0, g = r.length; d < g; d++)
                        h(d);
                return {
                    eventDataList: a,
                    result: s
                }
            }
        }, {
            key: "newGroupMessageStoredAndSummary",
            value: function(e) {
                var t = null
                  , n = []
                  , r = {}
                  , o = []
                  , i = En.CONV_GROUP
                  , a = this.tim.bigDataHallwayController
                  , s = e.length;
                s > 1 && e.sort((function(e, t) {
                    return e.sequence - t.sequence
                }
                ));
                for (var u = 0; u < s; u++) {
                    var c = e[u];
                    if (c.currentUser = this.tim.context.identifier,
                    c.conversationType = i,
                    c.isSystemMessage = !!c.isSystemMessage,
                    t = new oh(c),
                    c.elements = a.parseElements(c.elements, c.from),
                    t.setElement(c.elements),
                    !this._isMessageFromAVChatroom(t))
                        this._pushIntoNoticeResult(o, t) && (1 !== c.onlineOnlyFlag ? void 0 === r[t.conversationID] ? r[t.conversationID] = n.push({
                            conversationID: t.conversationID,
                            unreadCount: "out" === t.flow ? 0 : 1,
                            type: t.conversationType,
                            subType: t.conversationSubType,
                            lastMessage: t
                        }) - 1 : (n[r[t.conversationID]].type = t.conversationType,
                        n[r[t.conversationID]].subType = t.conversationSubType,
                        n[r[t.conversationID]].lastMessage = t,
                        "in" === t.flow && n[r[t.conversationID]].unreadCount++) : t.setOnlineOnlyFlag(!0))
                }
                return {
                    eventDataList: n,
                    result: o
                }
            }
        }, {
            key: "_isMessageFromAVChatroom",
            value: function(e) {
                var t = e.conversationID.slice(5);
                return this.tim.groupController.checkJoinedAVChatRoomByID(t)
            }
        }, {
            key: "newGroupTipsStoredAndSummary",
            value: function(e) {
                for (var t = null, n = [], r = [], o = {}, i = 0, a = e.length; i < a; i++) {
                    var s = e[i];
                    if (s.currentUser = this.tim.context.identifier,
                    s.conversationType = En.CONV_GROUP,
                    (t = new oh(s)).setElement({
                        type: En.MSG_GRP_TIP,
                        content: qn(qn({}, s.elements), {}, {
                            groupProfile: s.groupProfile
                        })
                    }),
                    t.isSystemMessage = !1,
                    !this._isMessageFromAVChatroom(t))
                        this._pushIntoNoticeResult(r, t) && (void 0 === o[t.conversationID] ? o[t.conversationID] = n.push({
                            conversationID: t.conversationID,
                            unreadCount: "out" === t.flow ? 0 : 1,
                            type: t.conversationType,
                            subType: t.conversationSubType,
                            lastMessage: t
                        }) - 1 : (n[o[t.conversationID]].type = t.conversationType,
                        n[o[t.conversationID]].subType = t.conversationSubType,
                        n[o[t.conversationID]].lastMessage = t,
                        "in" === t.flow && n[o[t.conversationID]].unreadCount++))
                }
                return {
                    eventDataList: n,
                    result: r
                }
            }
        }, {
            key: "newSystemNoticeStoredAndSummary",
            value: function(e) {
                var t = e.notifiesList
                  , n = e.type
                  , r = null
                  , o = t.length
                  , i = 0
                  , a = []
                  , s = {
                    conversationID: En.CONV_SYSTEM,
                    unreadCount: 0,
                    type: En.CONV_SYSTEM,
                    subType: null,
                    lastMessage: null
                };
                for (i = 0; i < o; i++) {
                    var u = t[i];
                    if (u.elements.operationType !== vp)
                        u.currentUser = this.tim.context.identifier,
                        u.conversationType = En.CONV_SYSTEM,
                        u.conversationID = En.CONV_SYSTEM,
                        (r = new oh(u)).setElement({
                            type: En.MSG_GRP_SYS_NOTICE,
                            content: qn(qn({}, u.elements), {}, {
                                groupProfile: u.groupProfile
                            })
                        }),
                        r.isSystemMessage = !0,
                        (1 === r.sequence && 1 === r.random || 2 === r.sequence && 2 === r.random) && (r.sequence = Vs(),
                        r.random = Vs(),
                        r.generateMessageID(u.currentUser),
                        Es.log("MessageController.newSystemNoticeStoredAndSummary sequence and random maybe duplicated, regenerate. ID=".concat(r.ID))),
                        this._pushIntoNoticeResult(a, r) && ("poll" === n ? s.unreadCount++ : "sync" === n && r.setIsRead(!0),
                        s.subType = r.conversationSubType)
                }
                return s.lastMessage = a[a.length - 1],
                {
                    eventDataList: a.length > 0 ? [s] : [],
                    result: a
                }
            }
        }, {
            key: "_onSyncMessagesProcessing",
            value: function(e) {
                var t = this._newC2CMessageStoredAndSummary({
                    notifiesList: e.data,
                    type: En.CONV_C2C,
                    isFromSync: !0,
                    C2CRemainingUnreadList: e.C2CRemainingUnreadList
                })
                  , n = t.eventDataList
                  , r = t.result;
                this.emitInnerEvent(wh, {
                    eventDataList: n,
                    result: r
                })
            }
        }, {
            key: "_onSyncMessagesFinished",
            value: function(e) {
                this.triggerReady();
                var t = this._newC2CMessageStoredAndSummary({
                    notifiesList: e.data.messageList,
                    type: En.CONV_C2C,
                    isFromSync: !0,
                    C2CRemainingUnreadList: e.data.C2CRemainingUnreadList
                })
                  , n = t.eventDataList
                  , r = t.result;
                this.emitInnerEvent(Lh, {
                    eventDataList: n,
                    result: r
                })
            }
        }, {
            key: "getHistoryMessages",
            value: function(e) {
                if (e.conversationID === En.CONV_SYSTEM)
                    return Ld();
                !e.count && (e.count = 15),
                e.count > 20 && (e.count = 20);
                var t = this.messagesList.getLocalOldestMessageByConversationID(e.conversationID);
                t || ((t = {}).time = 0,
                t.sequence = 0,
                0 === e.conversationID.indexOf(En.CONV_C2C) ? (t.to = e.conversationID.replace(En.CONV_C2C, ""),
                t.conversationType = En.CONV_C2C) : 0 === e.conversationID.indexOf(En.CONV_GROUP) && (t.to = e.conversationID.replace(En.CONV_GROUP, ""),
                t.conversationType = En.CONV_GROUP));
                var n = "";
                switch (t.conversationType) {
                case En.CONV_C2C:
                    return n = e.conversationID.replace(En.CONV_C2C, ""),
                    this.getC2CRoamMessages({
                        conversationID: e.conversationID,
                        peerAccount: n,
                        count: e.count,
                        lastMessageTime: void 0 === this.currentMessageKey[e.conversationID] ? 0 : t.time
                    });
                case En.CONV_GROUP:
                    return this.getGroupRoamMessages({
                        conversationID: e.conversationID,
                        groupID: t.to,
                        count: e.count,
                        sequence: t.sequence - 1
                    });
                default:
                    return Ld()
                }
            }
        }, {
            key: "getC2CRoamMessages",
            value: function(e) {
                var t = this
                  , n = e.conversationID
                  , r = void 0 !== this.currentMessageKey[n] ? this.currentMessageKey[n] : "";
                Es.log("MessageController.getC2CRoamMessages toAccount=".concat(e.peerAccount, " count=").concat(e.count || 15, " lastMessageTime=").concat(e.lastMessageTime || 0, " messageKey=").concat(r));
                var o = new Wd(sg);
                return this.request({
                    name: "c2cMessage",
                    action: "query",
                    param: {
                        peerAccount: e.peerAccount,
                        count: e.count || 15,
                        lastMessageTime: e.lastMessageTime || 0,
                        messageKey: r
                    }
                }).then((function(i) {
                    var a = i.data
                      , s = a.complete
                      , u = a.messageList;
                    As(u) ? Es.log("MessageController.getC2CRoamMessages ok. complete=".concat(s, " but messageList is undefined!")) : Es.log("MessageController.getC2CRoamMessages ok. complete=".concat(s, " nums=").concat(u.length)),
                    o.setNetworkType(t.getNetworkType()).setText("".concat(e.peerAccount, "-").concat(e.count || 15, "-").concat(e.lastMessageTime || 0, "-").concat(r, "-").concat(s, "-").concat(u ? u.length : "undefined")).setEnd(),
                    1 === s && t.getMessageHandler.setCompleted(n);
                    var c = t._roamMessageStore(u, En.CONV_C2C, n);
                    t.readReportHandler.updateIsRead(n),
                    t.currentMessageKey[n] = i.data.messageKey;
                    var l = t._peerReadTimeMap.get(n);
                    if (Es.log("MessageController.getC2CRoamMessages update isPeerRead property. conversationID=".concat(n, " peerReadTime=").concat(l)),
                    l)
                        t._updateMessageIsPeerReadProperty(n, l);
                    else {
                        var p = n.replace(En.CONV_C2C, "");
                        t.getPeerReadTime([p]).then((function() {
                            t._updateMessageIsPeerReadProperty(n, t._peerReadTimeMap.get(n))
                        }
                        ))
                    }
                    return c
                }
                )).catch((function(n) {
                    return t.probeNetwork().then((function(t) {
                        var i = Jn(t, 2)
                          , a = i[0]
                          , s = i[1];
                        o.setError(n, a, s).setText("".concat(e.peerAccount, "-").concat(e.count || 15, "-").concat(e.lastMessageTime || 0, "-").concat(r)).setEnd()
                    }
                    )),
                    Es.warn("MessageController.getC2CRoamMessages failed. ".concat(n)),
                    Nd(n)
                }
                ))
            }
        }, {
            key: "_computeLastSequence",
            value: function(e) {
                return e.sequence >= 0 ? Promise.resolve(e.sequence) : this.tim.groupController.getGroupLastSequence(e.groupID)
            }
        }, {
            key: "getGroupRoamMessages",
            value: function(e) {
                var t = this
                  , n = new Wd(ug)
                  , r = 0;
                return this._computeLastSequence(e).then((function(n) {
                    return r = n,
                    Es.log("MessageController.getGroupRoamMessages groupID=".concat(e.groupID, " lastSequence=").concat(r)),
                    t.request({
                        name: "groupMessage",
                        action: "query",
                        param: {
                            groupID: e.groupID,
                            count: 21,
                            sequence: r
                        }
                    })
                }
                )).then((function(o) {
                    var i = o.data
                      , a = i.messageList
                      , s = i.complete;
                    As(a) ? Es.log("MessageController.getGroupRoamMessages ok. complete=".concat(s, " but messageList is undefined!")) : Es.log("MessageController.getGroupRoamMessages ok. complete=".concat(s, " nums=").concat(a.length)),
                    n.setNetworkType(t.getNetworkType()).setText("".concat(e.groupID, "-").concat(r, "-").concat(s, "-").concat(a ? a.length : "undefined")).setEnd();
                    var u = "GROUP".concat(e.groupID);
                    if (2 === s || au(a))
                        return t.getMessageHandler.setCompleted(u),
                        [];
                    var c = t._roamMessageStore(a, En.CONV_GROUP, u);
                    return t.readReportHandler.updateIsRead(u),
                    t._patchConversationLastMessage(u),
                    c
                }
                )).catch((function(o) {
                    return t.probeNetwork().then((function(t) {
                        var i = Jn(t, 2)
                          , a = i[0]
                          , s = i[1];
                        n.setError(o, a, s).setText("".concat(e.groupID, "-").concat(r)).setEnd()
                    }
                    )),
                    Es.warn("MessageController.getGroupRoamMessages failed. ".concat(o)),
                    Nd(o)
                }
                ))
            }
        }, {
            key: "_patchConversationLastMessage",
            value: function(e) {
                var t = this.tim.conversationController.getLocalConversation(e);
                if (t) {
                    var n = t.lastMessage
                      , r = n.messageForShow
                      , o = n.payload;
                    if (au(r) || au(o)) {
                        var i = this.messagesList.getLocalMessageList(e);
                        if (0 === i.length)
                            return;
                        var a = i[i.length - 1];
                        Es.log("MessageController._patchConversationLastMessage conversationID:".concat(e, " payload:"), a.payload),
                        t.updateLastMessage(a)
                    }
                }
            }
        }, {
            key: "_roamMessageStore",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                  , t = arguments.length > 1 ? arguments[1] : void 0
                  , n = arguments.length > 2 ? arguments[2] : void 0
                  , r = null
                  , o = []
                  , i = 0
                  , a = e.length
                  , s = null
                  , u = t === En.CONV_GROUP
                  , c = this.tim.bigDataHallwayController
                  , l = function() {
                    i = u ? e.length - 1 : 0,
                    a = u ? 0 : e.length
                }
                  , p = function() {
                    u ? --i : ++i
                }
                  , f = function() {
                    return u ? i >= a : i < a
                };
                for (l(); f(); p())
                    if (u && 1 === e[i].sequence && this.getMessageHandler.setCompleted(n),
                    1 !== e[i].isPlaceMessage)
                        if ((r = new oh(e[i])).to = e[i].to,
                        r.isSystemMessage = !!e[i].isSystemMessage,
                        r.conversationType = t,
                        e[i].event === sp.JSON.TYPE.GROUP.TIP ? s = {
                            type: En.MSG_GRP_TIP,
                            content: qn(qn({}, e[i].elements), {}, {
                                groupProfile: e[i].groupProfile
                            })
                        } : (e[i].elements = c.parseElements(e[i].elements, e[i].from),
                        s = e[i].elements),
                        au(s)) {
                            var h = new Wd(fg);
                            h.setText("from:".concat(r.from, " to:").concat(r.to, " sequence:").concat(r.sequence, " event:").concat(e[i].event)),
                            h.setNetworkType(this.getNetworkType()).setEnd()
                        } else
                            r.setElement(s),
                            r.reInitialize(this.tim.context.identifier),
                            o.push(r);
                return this.messagesList.unshift(o),
                l = p = f = null,
                o
            }
        }, {
            key: "getLocalMessageList",
            value: function(e) {
                return this.messagesList.getLocalMessageList(e)
            }
        }, {
            key: "getLocalMessage",
            value: function(e, t) {
                return this.messagesList.getLocalMessage(e, t)
            }
        }, {
            key: "hasLocalMessage",
            value: function(e, t) {
                return this.messagesList.hasLocalMessage(e, t)
            }
        }, {
            key: "deleteLocalMessage",
            value: function(e) {
                e instanceof oh && this.messagesList.remove(e)
            }
        }, {
            key: "revokeMessage",
            value: function(e) {
                var t, n = this;
                e.conversationType === En.CONV_C2C ? t = {
                    name: "c2cMessageWillBeRevoked",
                    action: "create",
                    param: {
                        msgInfo: {
                            fromAccount: e.from,
                            toAccount: e.to,
                            msgSeq: e.sequence,
                            msgRandom: e.random,
                            msgTimeStamp: e.time
                        }
                    }
                } : e.conversationType === En.CONV_GROUP && (t = {
                    name: "groupMessageWillBeRevoked",
                    action: "create",
                    param: {
                        to: e.to,
                        msgSeqList: [{
                            msgSeq: e.sequence
                        }]
                    }
                });
                var r = new Wd(cg);
                return r.setMessageType(e.type).setText("".concat(this._generateTjgID(e), "-").concat(e.type, "-").concat(e.from, "-").concat(e.to)),
                this.request(t).then((function(t) {
                    var o = t.data.recallRetList;
                    if (!au(o) && 0 !== o[0].retCode) {
                        var i = new Bp({
                            code: o[0].retCode,
                            message: Vp[o[0].retCode] || of,
                            data: {
                                message: e
                            }
                        });
                        return r.setCode(i.code).setMessage(i.message).setEnd(),
                        Nd(i)
                    }
                    return Es.info("MessageController.revokeMessage ok. ID=".concat(e.ID)),
                    e.isRevoked = !0,
                    r.setEnd(),
                    n.emitInnerEvent(Gh, [e]),
                    new Rd({
                        message: e
                    })
                }
                )).catch((function(t) {
                    n.probeNetwork().then((function(e) {
                        var n = Jn(e, 2)
                          , o = n[0]
                          , i = n[1];
                        r.setError(t, o, i).setEnd()
                    }
                    ));
                    var o = new Bp({
                        code: t && t.code ? t.code : Kp.MESSAGE_REVOKE_FAIL,
                        message: t && t.message ? t.message : of,
                        data: {
                            message: e
                        }
                    });
                    return Es.warn("MessageController.revokeMessage failed. ID=".concat(e.ID, " code=").concat(o.code, " message=").concat(o.message)),
                    Nd(o)
                }
                ))
            }
        }, {
            key: "setMessageRead",
            value: function(e) {
                var t = this;
                return new Promise((function(n, r) {
                    t.ready((function() {
                        t.readReportHandler.setMessageRead(e).then(n).catch(r)
                    }
                    ))
                }
                ))
            }
        }, {
            key: "getMessageList",
            value: function(e) {
                return this.getMessageHandler.getMessageList(e)
            }
        }, {
            key: "createTextMessage",
            value: function(e) {
                e.currentUser = this.tim.context.identifier;
                var t = new oh(e)
                  , n = "string" == typeof e.payload ? e.payload : e.payload.text
                  , r = new nc({
                    text: n
                });
                return t.setElement(r),
                t
            }
        }, {
            key: "createCustomMessage",
            value: function(e) {
                e.currentUser = this.tim.context.identifier;
                var t = new oh(e)
                  , n = new eh({
                    data: e.payload.data,
                    description: e.payload.description,
                    extension: e.payload.extension
                });
                return t.setElement(n),
                t
            }
        }, {
            key: "createImageMessage",
            value: function(e) {
                e.currentUser = this.tim.context.identifier;
                var t = new oh(e);
                if (Ka) {
                    var n = e.payload.file;
                    if (Ss(n))
                        return void Es.warn("小程序环境下调用 createImageMessage 接口时，payload.file 不支持传入 File 对象");
                    var r = n.tempFilePaths[0]
                      , o = {
                        url: r,
                        name: r.slice(r.lastIndexOf("/") + 1),
                        size: n.tempFiles[0].size,
                        type: r.slice(r.lastIndexOf(".") + 1).toLowerCase()
                    };
                    e.payload.file = o
                } else if (xa && Ss(e.payload.file)) {
                    var i = e.payload.file;
                    e.payload.file = {
                        files: [i]
                    }
                }
                var a = new Dp({
                    imageFormat: sp.IMAGE_FORMAT.UNKNOWN,
                    uuid: this._generateUUID(),
                    file: e.payload.file
                });
                return t.setElement(a),
                this.messageOptionMap.set(t.messageID, e),
                t
            }
        }, {
            key: "createFileMessage",
            value: function(e) {
                if (!Ka) {
                    if (xa && Ss(e.payload.file)) {
                        var t = e.payload.file;
                        e.payload.file = {
                            files: [t]
                        }
                    }
                    e.currentUser = this.tim.context.identifier;
                    var n = new oh(e)
                      , r = new Zf({
                        uuid: this._generateUUID(),
                        file: e.payload.file
                    });
                    return n.setElement(r),
                    this.messageOptionMap.set(n.messageID, e),
                    n
                }
                Es.warn("小程序目前不支持选择文件， createFileMessage 接口不可用！")
            }
        }, {
            key: "createAudioMessage",
            value: function(e) {
                if (Ka) {
                    var t = e.payload.file;
                    if (Ka) {
                        var n = {
                            url: t.tempFilePath,
                            name: t.tempFilePath.slice(t.tempFilePath.lastIndexOf("/") + 1),
                            size: t.fileSize,
                            second: parseInt(t.duration) / 1e3,
                            type: t.tempFilePath.slice(t.tempFilePath.lastIndexOf(".") + 1).toLowerCase()
                        };
                        e.payload.file = n
                    }
                    e.currentUser = this.tim.context.identifier;
                    var r = new oh(e)
                      , o = new Op({
                        second: Math.floor(t.duration / 1e3),
                        size: t.fileSize,
                        url: t.tempFilePath,
                        uuid: this._generateUUID()
                    });
                    return r.setElement(o),
                    this.messageOptionMap.set(r.messageID, e),
                    r
                }
                Es.warn("createAudioMessage 目前只支持小程序环境下发语音消息")
            }
        }, {
            key: "createVideoMessage",
            value: function(e) {
                e.currentUser = this.tim.context.identifier,
                e.payload.file.thumbUrl = "https://webim-1252463788.cos.ap-shanghai.myqcloud.com/assets/images/transparent.png",
                e.payload.file.thumbSize = 1668;
                var t = {};
                if (Ka) {
                    if (Ss(e.payload.file))
                        return void Es.warn("小程序环境下调用 createVideoMessage 接口时，payload.file 不支持传入 File 对象");
                    var n = e.payload.file;
                    t.url = n.tempFilePath,
                    t.name = n.tempFilePath.slice(n.tempFilePath.lastIndexOf("/") + 1),
                    t.size = n.size,
                    t.second = n.duration,
                    t.type = n.tempFilePath.slice(n.tempFilePath.lastIndexOf(".") + 1).toLowerCase()
                } else if (xa) {
                    if (Ss(e.payload.file)) {
                        var r = e.payload.file;
                        e.payload.file.files = [r]
                    }
                    var o = e.payload.file;
                    t.url = window.URL.createObjectURL(o.files[0]),
                    t.name = o.files[0].name,
                    t.size = o.files[0].size,
                    t.second = o.files[0].duration || 0,
                    t.type = o.files[0].type.split("/")[1]
                }
                e.payload.file.videoFile = t;
                var i = new oh(e)
                  , a = new th({
                    videoFormat: t.type,
                    videoSecond: Number(t.second.toFixed(0)),
                    videoSize: t.size,
                    remoteVideoUrl: "",
                    videoUrl: t.url,
                    videoUUID: this._generateUUID(),
                    thumbUUID: this._generateUUID(),
                    thumbWidth: e.payload.file.width || 200,
                    thumbHeight: e.payload.file.height || 200,
                    thumbUrl: e.payload.file.thumbUrl,
                    thumbSize: e.payload.file.thumbSize,
                    thumbFormat: e.payload.file.thumbUrl.slice(e.payload.file.thumbUrl.lastIndexOf(".") + 1).toLowerCase()
                });
                return i.setElement(a),
                this.messageOptionMap.set(i.messageID, e),
                i
            }
        }, {
            key: "createFaceMessage",
            value: function(e) {
                e.currentUser = this.tim.context.identifier;
                var t = new oh(e)
                  , n = new kp(e.payload);
                return t.setElement(n),
                t
            }
        }, {
            key: "_generateUUID",
            value: function() {
                var e = this.tim.context;
                return "".concat(e.SDKAppID, "-").concat(e.identifier, "-").concat(function() {
                    for (var e = "", t = 32; t > 0; --t)
                        e += Bs[Math.floor(Math.random() * Ks)];
                    return e
                }())
            }
        }, {
            key: "_generateTjgID",
            value: function(e) {
                return this.tim.context.tinyID + "-" + e.random
            }
        }, {
            key: "getMessageOptionByID",
            value: function(e) {
                return this.messageOptionMap.get(e)
            }
        }, {
            key: "isMessageSentByCurrentInstance",
            value: function(e) {
                return !(!this.messagesList.hasLocalMessage(e.conversationID, e.ID) && !this.singlyLinkedList.has(e.random))
            }
        }, {
            key: "pushToMessageList",
            value: function(e) {
                this.messagesList.pushIn(e)
            }
        }]),
        n
    }(Dd)
      , fy = function() {
        function e(t) {
            bn(this, e),
            this.userID = "",
            this.avatar = "",
            this.nick = "",
            this.role = "",
            this.joinTime = "",
            this.lastSendMsgTime = "",
            this.nameCard = "",
            this.muteUntil = 0,
            this.memberCustomField = [],
            this._initMember(t)
        }
        return Gn(e, [{
            key: "_initMember",
            value: function(e) {
                this.updateMember(e)
            }
        }, {
            key: "updateMember",
            value: function(e) {
                var t = [null, void 0, "", 0, NaN];
                e.memberCustomField && Ws(this.memberCustomField, e.memberCustomField),
                xs(this, e, ["memberCustomField"], t)
            }
        }, {
            key: "updateRole",
            value: function(e) {
                ["Owner", "Admin", "Member"].indexOf(e) < 0 || (this.role = e)
            }
        }, {
            key: "updateMuteUntil",
            value: function(e) {
                As(e) || (this.muteUntil = Math.floor((Date.now() + 1e3 * e) / 1e3))
            }
        }, {
            key: "updateNameCard",
            value: function(e) {
                As(e) || (this.nameCard = e)
            }
        }, {
            key: "updateMemberCustomField",
            value: function(e) {
                e && Ws(this.memberCustomField, e)
            }
        }]),
        e
    }()
      , hy = function() {
        function e(t) {
            bn(this, e),
            this.tim = t.tim,
            this.groupController = t.groupController,
            this._initListeners()
        }
        return Gn(e, [{
            key: "_initListeners",
            value: function() {
                this.tim.innerEmitter.on(bh, this._onReceivedGroupTips, this)
            }
        }, {
            key: "_onReceivedGroupTips",
            value: function(e) {
                var t = this
                  , n = e.data
                  , r = n.result;
                n.isGroupTip && r.forEach((function(e) {
                    switch (e.payload.operationType) {
                    case 1:
                        t._onNewMemberComeIn(e);
                        break;
                    case 2:
                        t._onMemberQuit(e);
                        break;
                    case 3:
                        t._onMemberKickedOut(e);
                        break;
                    case 4:
                        t._onMemberSetAdmin(e);
                        break;
                    case 5:
                        t._onMemberCancelledAdmin(e);
                        break;
                    case 6:
                        t._onGroupProfileModified(e);
                        break;
                    case 7:
                        t._onMemberInfoModified(e);
                        break;
                    default:
                        Es.warn("GroupTipsHandler._onReceivedGroupTips Unhandled groupTips. operationType=", e.payload.operationType)
                    }
                }
                ))
            }
        }, {
            key: "_onNewMemberComeIn",
            value: function(e) {
                var t = e.payload
                  , n = t.memberNum
                  , r = t.groupProfile.groupID
                  , o = this.groupController.getLocalGroupProfile(r);
                o && Ts(n) && (o.memberNum = n)
            }
        }, {
            key: "_onMemberQuit",
            value: function(e) {
                var t = e.payload
                  , n = t.memberNum
                  , r = t.groupProfile.groupID
                  , o = this.groupController.getLocalGroupProfile(r);
                o && Ts(n) && (o.memberNum = n),
                this.groupController.deleteLocalGroupMembers(r, e.payload.userIDList)
            }
        }, {
            key: "_onMemberKickedOut",
            value: function(e) {
                var t = e.payload
                  , n = t.memberNum
                  , r = t.groupProfile.groupID
                  , o = this.groupController.getLocalGroupProfile(r);
                o && Ts(n) && (o.memberNum = n),
                this.groupController.deleteLocalGroupMembers(r, e.payload.userIDList)
            }
        }, {
            key: "_onMemberSetAdmin",
            value: function(e) {
                var t = this
                  , n = e.payload.groupProfile.groupID;
                e.payload.userIDList.forEach((function(e) {
                    var r = t.groupController.getLocalGroupMemberInfo(n, e);
                    r && r.updateRole(En.GRP_MBR_ROLE_ADMIN)
                }
                ))
            }
        }, {
            key: "_onMemberCancelledAdmin",
            value: function(e) {
                var t = this
                  , n = e.payload.groupProfile.groupID;
                e.payload.userIDList.forEach((function(e) {
                    var r = t.groupController.getLocalGroupMemberInfo(n, e);
                    r && r.updateRole(En.GRP_MBR_ROLE_MEMBER)
                }
                ))
            }
        }, {
            key: "_onGroupProfileModified",
            value: function(e) {
                var t = this
                  , n = e.payload.newGroupProfile
                  , r = e.payload.groupProfile.groupID
                  , o = this.groupController.getLocalGroupProfile(r);
                Object.keys(n).forEach((function(e) {
                    switch (e) {
                    case "ownerID":
                        t._ownerChaged(o, n);
                        break;
                    default:
                        o[e] = n[e]
                    }
                }
                )),
                this.groupController.emitGroupListUpdate(!0, !0)
            }
        }, {
            key: "_ownerChaged",
            value: function(e, t) {
                var n = e.groupID
                  , r = this.groupController.getLocalGroupProfile(n)
                  , o = this.tim.context.identifier;
                if (o === t.ownerID) {
                    r.updateGroup({
                        selfInfo: {
                            role: En.GRP_MBR_ROLE_OWNER
                        }
                    });
                    var i = this.groupController.getLocalGroupMemberInfo(n, o)
                      , a = this.groupController.getLocalGroupProfile(n).ownerID
                      , s = this.groupController.getLocalGroupMemberInfo(n, a);
                    i && i.updateRole(En.GRP_MBR_ROLE_OWNER),
                    s && s.updateRole(En.GRP_MBR_ROLE_MEMBER)
                }
            }
        }, {
            key: "_onMemberInfoModified",
            value: function(e) {
                var t = this
                  , n = e.payload.groupProfile.groupID;
                e.payload.memberList.forEach((function(e) {
                    var r = t.groupController.getLocalGroupMemberInfo(n, e.userID);
                    r && e.muteTime && r.updateMuteUntil(e.muteTime)
                }
                ))
            }
        }]),
        e
    }()
      , dy = function() {
        function e(t) {
            bn(this, e),
            this.groupController = t.groupController,
            this.tim = t.tim,
            this.pendencyMap = new Map,
            this._initLiceners()
        }
        return Gn(e, [{
            key: "_initLiceners",
            value: function() {
                this.tim.innerEmitter.on(Ph, this._onReceivedGroupSystemNotice, this),
                this.tim.innerEmitter.on(Rh, this._clearGroupSystemNotice, this)
            }
        }, {
            key: "_clearGroupSystemNotice",
            value: function() {
                var e = this;
                this.getPendencyList().then((function(t) {
                    t.forEach((function(t) {
                        e.pendencyMap.set("".concat(t.from, "_").concat(t.groupID, "_").concat(t.to), t)
                    }
                    ));
                    var n = e.tim.messageController.getLocalMessageList(En.CONV_SYSTEM)
                      , r = [];
                    n.forEach((function(t) {
                        var n = t.payload
                          , o = n.operatorID
                          , i = n.operationType
                          , a = n.groupProfile;
                        if (i === up) {
                            var s = "".concat(o, "_").concat(a.groupID, "_").concat(a.to)
                              , u = e.pendencyMap.get(s);
                            u && Ts(u.handled) && 0 !== u.handled && r.push(t)
                        }
                    }
                    )),
                    e.groupController.deleteGroupSystemNotice({
                        messageList: r
                    })
                }
                ))
            }
        }, {
            key: "getPendencyList",
            value: function(e) {
                var t = this;
                return this.groupController.request({
                    name: "group",
                    action: "getGroupPendency",
                    param: {
                        startTime: e && e.startTime ? e.startTime : 0,
                        limit: e && e.limit ? e.limit : 10,
                        handleAccount: this.tim.context.identifier
                    }
                }).then((function(e) {
                    var n = e.data
                      , r = n.pendencyList;
                    return 0 !== n.nextStartTime ? t.getPendencyList({
                        startTime: n.nextStartTime
                    }).then((function(e) {
                        return [].concat(Xn(r), Xn(e))
                    }
                    )) : r
                }
                ))
            }
        }, {
            key: "_onReceivedGroupSystemNotice",
            value: function(e) {
                var t = this
                  , n = e.data
                  , r = n.result;
                "sync" !== n.type && r.forEach((function(e) {
                    switch (e.payload.operationType) {
                    case 1:
                        t._onApplyGroupRequest(e);
                        break;
                    case 2:
                        t._onApplyGroupRequestAgreed(e);
                        break;
                    case 3:
                        t._onApplyGroupRequestRefused(e);
                        break;
                    case 4:
                        t._onMemberKicked(e);
                        break;
                    case 5:
                        t._onGroupDismissed(e);
                        break;
                    case 6:
                        break;
                    case 7:
                        t._onInviteGroup(e);
                        break;
                    case 8:
                        t._onQuitGroup(e);
                        break;
                    case 9:
                        t._onSetManager(e);
                        break;
                    case 10:
                        t._onDeleteManager(e);
                        break;
                    case 11:
                    case 12:
                    case 15:
                        break;
                    case 255:
                        t.groupController.emitOuterEvent(Cn.GROUP_SYSTEM_NOTICE_RECEIVED, {
                            message: e,
                            type: yp
                        })
                    }
                }
                ))
            }
        }, {
            key: "_onApplyGroupRequest",
            value: function(e) {
                this.groupController.emitOuterEvent(Cn.GROUP_SYSTEM_NOTICE_RECEIVED, {
                    message: e,
                    type: up
                })
            }
        }, {
            key: "_onApplyGroupRequestAgreed",
            value: function(e) {
                var t = this
                  , n = e.payload.groupProfile.groupID;
                this.groupController.hasLocalGroup(n) || this.groupController.getGroupProfile({
                    groupID: n
                }).then((function(e) {
                    var n = e.data.group;
                    n && (t.groupController.updateGroupMap([n]),
                    t.groupController.emitGroupListUpdate())
                }
                )),
                this.groupController.emitOuterEvent(Cn.GROUP_SYSTEM_NOTICE_RECEIVED, {
                    message: e,
                    type: cp
                })
            }
        }, {
            key: "_onApplyGroupRequestRefused",
            value: function(e) {
                this.groupController.emitOuterEvent(Cn.GROUP_SYSTEM_NOTICE_RECEIVED, {
                    message: e,
                    type: lp
                })
            }
        }, {
            key: "_onMemberKicked",
            value: function(e) {
                var t = e.payload.groupProfile.groupID;
                this.groupController.hasLocalGroup(t) && this.groupController.deleteLocalGroupAndConversation(t),
                this.groupController.emitOuterEvent(Cn.GROUP_SYSTEM_NOTICE_RECEIVED, {
                    message: e,
                    type: pp
                })
            }
        }, {
            key: "_onGroupDismissed",
            value: function(e) {
                var t = e.payload.groupProfile.groupID
                  , n = this.groupController.hasLocalGroup(t)
                  , r = this.groupController.AVChatRoomHandler;
                n && this.groupController.deleteLocalGroupAndConversation(t),
                r.checkJoinedAVChatRoomByID(t) && r.reset(t),
                this.groupController.emitOuterEvent(Cn.GROUP_SYSTEM_NOTICE_RECEIVED, {
                    message: e,
                    type: fp
                })
            }
        }, {
            key: "_onInviteGroup",
            value: function(e) {
                var t = this
                  , n = e.payload.groupProfile.groupID;
                this.groupController.hasLocalGroup(n) || this.groupController.getGroupProfile({
                    groupID: n
                }).then((function(e) {
                    var n = e.data.group;
                    n && (t.groupController.updateGroupMap([n]),
                    t.groupController.emitGroupListUpdate())
                }
                )),
                this.groupController.emitOuterEvent(Cn.GROUP_SYSTEM_NOTICE_RECEIVED, {
                    message: e,
                    type: hp
                })
            }
        }, {
            key: "_onQuitGroup",
            value: function(e) {
                var t = e.payload.groupProfile.groupID;
                this.groupController.hasLocalGroup(t) && this.groupController.deleteLocalGroupAndConversation(t),
                this.groupController.emitOuterEvent(Cn.GROUP_SYSTEM_NOTICE_RECEIVED, {
                    message: e,
                    type: dp
                })
            }
        }, {
            key: "_onSetManager",
            value: function(e) {
                var t = e.payload.groupProfile
                  , n = t.to
                  , r = t.groupID
                  , o = this.groupController.getLocalGroupMemberInfo(r, n);
                o && o.updateRole(En.GRP_MBR_ROLE_ADMIN),
                this.groupController.emitOuterEvent(Cn.GROUP_SYSTEM_NOTICE_RECEIVED, {
                    message: e,
                    type: gp
                })
            }
        }, {
            key: "_onDeleteManager",
            value: function(e) {
                var t = e.payload.groupProfile
                  , n = t.to
                  , r = t.groupID
                  , o = this.groupController.getLocalGroupMemberInfo(r, n);
                o && o.updateRole(En.GRP_MBR_ROLE_MEMBER),
                this.groupController.emitOuterEvent(Cn.GROUP_SYSTEM_NOTICE_RECEIVED, {
                    message: e,
                    type: mp
                })
            }
        }, {
            key: "reset",
            value: function() {
                this.pendencyMap.clear()
            }
        }]),
        e
    }()
      , gy = We("splice")
      , vy = lt("splice", {
        ACCESSORS: !0,
        0: 0,
        1: 2
    })
      , yy = Math.max
      , _y = Math.min;
    we({
        target: "Array",
        proto: !0,
        forced: !gy || !vy
    }, {
        splice: function(e, t) {
            var n, r, o, i, a, s, u = Ne(this), c = ce(u.length), l = fe(e, c), p = arguments.length;
            if (0 === p ? n = r = 0 : 1 === p ? (n = 0,
            r = c - l) : (n = p - 2,
            r = _y(yy(se(t), 0), c - l)),
            c + n - r > 9007199254740991)
                throw TypeError("Maximum allowed length exceeded");
            for (o = Ve(u, r),
            i = 0; i < r; i++)
                (a = l + i)in u && be(o, i, u[a]);
            if (o.length = r,
            n < r) {
                for (i = l; i < c - r; i++)
                    s = i + n,
                    (a = i + r)in u ? u[s] = u[a] : delete u[s];
                for (i = c; i > c - r + n; i--)
                    delete u[i - 1]
            } else if (n > r)
                for (i = c - r; i > l; i--)
                    s = i + n - 1,
                    (a = i + r - 1)in u ? u[s] = u[a] : delete u[s];
            for (i = 0; i < n; i++)
                u[i + l] = arguments[i + 2];
            return u.length = c - r + n,
            o
        }
    });
    var Iy = {
        3: !0,
        4: !0,
        5: !0,
        6: !0
    }
      , My = function() {
        function e(t) {
            var n = t.tim
              , r = t.groupController;
            bn(this, e),
            this.tim = n,
            this.groupController = r,
            this.sequencesLinkedList = new cy(100),
            this.receivedMessageCount = 0,
            this._pollingRequestInfoMap = new Map,
            this._pollingInstanceMap = new Map,
            this._joinedGroupMap = new Map,
            this._reportMessageStackedCount = 0,
            this._onlineMemberCountMap = new Map,
            this.DEFAULT_EXPIRE_TIME = 60
        }
        return Gn(e, [{
            key: "hasJoinedAVChatRoom",
            value: function() {
                return this._joinedGroupMap.size > 0
            }
        }, {
            key: "checkJoinedAVChatRoomByID",
            value: function(e) {
                return this._joinedGroupMap.has(e)
            }
        }, {
            key: "getJoinedAVChatRoom",
            value: function() {
                return this._joinedGroupMap.size > 0 ? Xn(this._joinedGroupMap.keys()) : null
            }
        }, {
            key: "start",
            value: function(e) {
                var t = this._pollingRequestInfoMap.get(e)
                  , n = {
                    key: t.key,
                    startSeq: t.startSeq
                };
                if (this._pollingInstanceMap.has(e)) {
                    var r = this._pollingInstanceMap.get(e);
                    r.isRunning() || r.start()
                } else {
                    var o = this.groupController.createTransportCapsule({
                        name: "AVChatRoom",
                        action: "startLongPoll",
                        param: n
                    })
                      , i = this.tim.connectionController.createRunLoop({
                        pack: o,
                        before: this._updateRequestData.bind(this, e),
                        success: this._handleSuccess.bind(this, e),
                        fail: this._handleFailure.bind(this),
                        isAVChatRoomLoop: !0
                    });
                    i.start(),
                    this._pollingInstanceMap.set(e, i),
                    Es.log("AVChatRoomHandler.start message channel started. groupID=".concat(e))
                }
            }
        }, {
            key: "stop",
            value: function(e) {
                var t = this._pollingInstanceMap.get(e);
                t && t.isRunning() && (t.abort(),
                t.stop(),
                Es.log("AVChatRoomHandler.stop message channel stopped. groupID=".concat(e)))
            }
        }, {
            key: "startRunLoop",
            value: function(e) {
                var t = this;
                return this._precheck().then((function() {
                    var n = e.longPollingKey
                      , r = e.group
                      , o = r.groupID;
                    return t._pollingRequestInfoMap.set(o, {
                        key: n,
                        startSeq: 0
                    }),
                    t._joinedGroupMap.set(o, r),
                    t._addAVChatRoomID(o),
                    t.groupController.updateGroupMap([r]),
                    t.groupController.emitGroupListUpdate(!0, !1),
                    t.start(o),
                    t.groupController.isLoggedIn() ? Ld({
                        status: Xu.SUCCESS,
                        group: r
                    }) : Ld({
                        status: Xu.SUCCESS
                    })
                }
                ))
            }
        }, {
            key: "joinWithoutAuth",
            value: function(e) {
                var t = this;
                return this.groupController.request({
                    name: "group",
                    action: "applyJoinAVChatRoom",
                    param: e
                }).then((function(n) {
                    var r = n.data.longPollingKey;
                    if (As(r))
                        return Nd(new Bp({
                            code: Kp.CANNOT_JOIN_NON_AVCHATROOM_WITHOUT_LOGIN,
                            message: Of
                        }));
                    Es.log("AVChatRoomHandler.joinWithoutAuth ok. groupID:".concat(e.groupID)),
                    t.groupController.emitInnerEvent(ld),
                    t.groupController.emitInnerEvent(cd, e.groupID);
                    var o = new xv({
                        groupID: e.groupID
                    });
                    return t.startRunLoop({
                        group: o,
                        longPollingKey: r
                    }),
                    new Rd({
                        status: Xu.SUCCESS
                    })
                }
                )).catch((function(t) {
                    return Es.error("AVChatRoomHandler.joinWithoutAuth error:".concat(qs(t), ". groupID:").concat(e.groupID)),
                    Nd(t)
                }
                ))
            }
        }, {
            key: "_precheck",
            value: function() {
                if (this.tim.context.unlimitedAVChatRoom)
                    return Promise.resolve();
                if (!this.hasJoinedAVChatRoom())
                    return Promise.resolve();
                var e = Jn(this._joinedGroupMap.entries().next().value, 2)
                  , t = e[0]
                  , n = e[1];
                if (this.groupController.isLoggedIn()) {
                    if (!(n.selfInfo.role === En.GRP_MBR_ROLE_OWNER || n.ownerID === this.tim.loginInfo.identifier))
                        return this.groupController.quitGroup(t);
                    this.groupController.deleteLocalGroupAndConversation(t)
                } else
                    this.groupController.deleteLocalGroupAndConversation(t);
                return this.reset(t),
                Promise.resolve()
            }
        }, {
            key: "_updateRequestData",
            value: function(e, t) {
                var n = this._pollingRequestInfoMap.get(e)
                  , r = n.key
                  , o = n.startSeq;
                t.StartSeq = o,
                t.Key = r,
                this.tim.sumStatController.addTotalCount(Ud)
            }
        }, {
            key: "_handleSuccess",
            value: function(e, t) {
                this.tim.sumStatController.addSuccessCount(Ud),
                this.tim.sumStatController.addCost(Ud, t.data.timecost);
                var n = t.data
                  , r = n.errorCode
                  , o = n.errorInfo
                  , i = n.key
                  , a = n.nextSeq
                  , s = n.rspMsgList;
                if (r !== Qu.SUCCESS) {
                    var u = this._pollingRequestInfoMap.get(e)
                      , c = new Wd(Bg)
                      , l = u ? "".concat(u.key, "-").concat(u.startSeq) : "requestInfo is undefined";
                    c.setMessage("".concat(e, "-").concat(l, "-").concat(o || JSON.stringify(t.data))).setCode(r).setNetworkType(this.groupController.getNetworkType()).setEnd(!0)
                } else
                    Ds(i) && Ts(a) && this._pollingRequestInfoMap.set(e, {
                        key: i,
                        startSeq: a
                    }),
                    Rs(s) && s.length > 0 && (s.forEach((function(e) {
                        e.to = e.groupID
                    }
                    )),
                    this._dispatchNotice(s));
                this.groupController.emitInnerEvent(Qh)
            }
        }, {
            key: "_handleFailure",
            value: function(e) {
                if (e.error)
                    if ("ECONNABORTED" === e.error.code || e.error.code === Kp.NETWORK_TIMEOUT)
                        if (e.error.config) {
                            var t = e.error.config.url
                              , n = e.error.config.data;
                            Es.log("AVChatRoomHandler._handleFailure request timed out. url=".concat(t, " data=").concat(n))
                        } else
                            Es.log("AVChatRoomHandler._handleFailure request timed out");
                    else
                        Es.log("AVChatRoomHandler._handleFailure request failed due to network error");
                this.groupController.emitInnerEvent(Xh)
            }
        }, {
            key: "_dispatchNotice",
            value: function(e) {
                if (Rs(e) && 0 !== e.length) {
                    var t = Date.now()
                      , n = null
                      , r = []
                      , o = []
                      , i = e.length;
                    i > 1 && e.sort((function(e, t) {
                        return e.sequence - t.sequence
                    }
                    ));
                    for (var a = 0; a < i; a++)
                        if (Iy[e[a].event]) {
                            if (this.receivedMessageCount += 1,
                            n = this.packMessage(e[a], e[a].event),
                            this.tim.context.unlimitedAVChatRoom || !this.sequencesLinkedList.has(n.sequence)) {
                                var s = n.conversationID;
                                if (this.receivedMessageCount % 40 == 0 && this.tim.messageLossController.detectMessageLoss(s, this.sequencesLinkedList.data()),
                                null !== this.sequencesLinkedList.tail()) {
                                    var u = this.sequencesLinkedList.tail().value
                                      , c = n.sequence - u;
                                    c > 1 && c <= 20 ? this.tim.messageLossController.onMessageMaybeLost(s, u + 1, c - 1) : c < -1 && c >= -20 && this.tim.messageLossController.onMessageMaybeLost(s, n.sequence + 1, Math.abs(c) - 1)
                                }
                                this.sequencesLinkedList.pushIn(n.sequence),
                                this._isMessageSentByCurrentInstance(n) || (n.conversationType === En.CONV_SYSTEM && o.push(n),
                                r.push(n))
                            }
                        } else
                            Es.warn("AVChatRoomHandler._dispatchMessage 未处理的 event 类型: ".concat(e[a].event));
                    if (o.length > 0 && this.groupController.emitInnerEvent(Ph, {
                        result: o,
                        eventDataList: [],
                        type: "poll"
                    }),
                    0 !== r.length) {
                        var l = this.packConversationOption(r);
                        l.length > 0 && this.groupController.emitInnerEvent(bh, {
                            eventDataList: l,
                            type: "poll"
                        }),
                        Es.debug("AVChatRoomHandler._dispatchNotice nums=".concat(r.length));
                        var p = this.tim.sumStatController;
                        p.addTotalCount(Hd),
                        p.addSuccessCount(Hd),
                        p.addCost(Hd, Date.now() - t),
                        this._checkMessageStacked(r),
                        this.groupController.emitOuterEvent(Cn.MESSAGE_RECEIVED, r)
                    }
                }
            }
        }, {
            key: "_checkMessageStacked",
            value: function(e) {
                var t = e.length;
                t >= 100 && (Es.warn("AVChatRoomHandler.checkMessageStacked 直播群消息堆积数:".concat(e.length, '！可能会导致微信小程序渲染时遇到 "Dom limit exceeded" 的错误，建议接入侧此时只渲染最近的10条消息')),
                this._reportMessageStackedCount < 5 && (new Wd(zg).setNetworkType(this.groupController.getNetworkType()).setText("nums=".concat(t, " groupID=").concat(Xn(this._joinedGroupMap.keys()))).setEnd(),
                this._reportMessageStackedCount += 1))
            }
        }, {
            key: "_isMessageSentByCurrentInstance",
            value: function(e) {
                return !!this.tim.messageController.isMessageSentByCurrentInstance(e)
            }
        }, {
            key: "packMessage",
            value: function(e, t) {
                e.currentUser = this.tim.context.identifier,
                e.conversationType = 5 === t ? En.CONV_SYSTEM : En.CONV_GROUP,
                e.isSystemMessage = !!e.isSystemMessage;
                var n = new oh(e)
                  , r = this.packElements(e, t);
                return n.setElement(r),
                n
            }
        }, {
            key: "packElements",
            value: function(e, t) {
                return 4 === t || 6 === t ? (this._updateMemberCountByGroupTips(e),
                {
                    type: En.MSG_GRP_TIP,
                    content: qn(qn({}, e.elements), {}, {
                        groupProfile: e.groupProfile
                    })
                }) : 5 === t ? {
                    type: En.MSG_GRP_SYS_NOTICE,
                    content: qn(qn({}, e.elements), {}, {
                        groupProfile: e.groupProfile
                    })
                } : this.tim.bigDataHallwayController.parseElements(e.elements, e.from)
            }
        }, {
            key: "packConversationOption",
            value: function(e) {
                for (var t = new Map, n = 0; n < e.length; n++) {
                    var r = e[n]
                      , o = r.conversationID;
                    if (t.has(o)) {
                        var i = t.get(o);
                        i.lastMessage = r,
                        "in" === r.flow && i.unreadCount++
                    } else
                        t.set(o, {
                            conversationID: r.conversationID,
                            unreadCount: "out" === r.flow ? 0 : 1,
                            type: r.conversationType,
                            subType: r.conversationSubType,
                            lastMessage: r
                        })
                }
                return Xn(t.values())
            }
        }, {
            key: "_addAVChatRoomID",
            value: function(e) {
                var t = this.tim.loginInfo.avchatroomIDList || [];
                t.includes(e) || (this.tim.context.unlimitedAVChatRoom ? t.push(e) : t.splice(0, 1, e),
                this.tim.loginInfo.avchatroomIDList = t)
            }
        }, {
            key: "_deleteAVChatRoomID",
            value: function(e) {
                var t = this.tim.loginInfo.avchatroomIDList || []
                  , n = t.indexOf(e);
                -1 !== n && (t.splice(n, 1),
                this.tim.loginInfo.avchatroomIDList = t)
            }
        }, {
            key: "joinAVChatRoomSilently",
            value: function() {
                var e = this
                  , t = this.tim.loginInfo.avchatroomIDList || [];
                if (0 !== t.length) {
                    var n = new Wd(Mg);
                    t.forEach((function(t) {
                        e.groupController.joinGroup({
                            groupID: t
                        }).then((function(r) {
                            Es.warn("AVChatRoomHandler.joinAVChatRoomSilently silently join group ok:".concat(t)),
                            n.setCode(r.code).setText("groupID=".concat(t)).setNetworkType(e.groupController.getNetworkType()).setEnd(!0)
                        }
                        )).catch((function(r) {
                            Es.warn("AVChatRoomHandler.joinAVChatRoomSilently silently join group failed:".concat(qs(r))),
                            n.setMessage("".concat(t, "-").concat(JSON.stringify(r))).setCode(r.code).setNetworkType(e.groupController.getNetworkType()).setEnd(!0)
                        }
                        ))
                    }
                    ))
                }
            }
        }, {
            key: "getGroupOnlineMemberCount",
            value: function(e) {
                var t = this._onlineMemberCountMap.get(e) || {}
                  , n = Date.now();
                return au(t) || n - t.lastSyncTime > 1e3 * t.expireTime && n - t.latestUpdateTime > 1e4 && n - t.lastReqTime > 3e3 ? (t.lastReqTime = n,
                this._onlineMemberCountMap.set(e, t),
                this._getGroupOnlineMemberCount(e).then((function(e) {
                    return new Rd({
                        memberCount: e.memberCount
                    })
                }
                )).catch((function(e) {
                    return Nd(e)
                }
                ))) : Ld({
                    memberCount: t.memberCount
                })
            }
        }, {
            key: "_getGroupOnlineMemberCount",
            value: function(e) {
                var t = this;
                return this.groupController.request({
                    name: "group",
                    action: "getOnlineMemberNum",
                    param: {
                        groupID: e
                    }
                }).then((function(n) {
                    var r = t._onlineMemberCountMap.get(e) || {}
                      , o = n.data
                      , i = o.onlineMemberNum
                      , a = void 0 === i ? 0 : i
                      , s = o.expireTime
                      , u = void 0 === s ? t.DEFAULT_EXPIRE_TIME : s;
                    Es.log("AVChatRoomHandler._getGroupOnlineMemberCount ok. groupID=".concat(e, " memberCount=").concat(a, " expireTime=").concat(u));
                    var c = Date.now();
                    return au(r) && (r.lastReqTime = c),
                    t._onlineMemberCountMap.set(e, Object.assign(r, {
                        lastSyncTime: c,
                        latestUpdateTime: c,
                        memberCount: a,
                        expireTime: u
                    })),
                    {
                        memberCount: a
                    }
                }
                )).catch((function(n) {
                    return Es.warn("AVChatRoomHandler._getGroupOnlineMemberCount failed. error:".concat(qs(n))),
                    new Wd(jg).setCode(n.code).setMessage("".concat(e, "-").concat(JSON.stringify(n))).setNetworkType(t.groupController.getNetworkType()).setEnd(),
                    Promise.reject(n)
                }
                ))
            }
        }, {
            key: "_updateMemberCountByGroupTips",
            value: function(e) {
                var t = e.groupProfile.groupID
                  , n = e.elements.onlineMemberInfo
                  , r = void 0 === n ? void 0 : n;
                if (void 0 !== r) {
                    var o = r.onlineMemberNum
                      , i = void 0 === o ? 0 : o
                      , a = r.expireTime
                      , s = void 0 === a ? this.DEFAULT_EXPIRE_TIME : a
                      , u = this._onlineMemberCountMap.get(t) || {}
                      , c = Date.now();
                    au(u) ? Object.assign(u, {
                        lastReqTime: 0,
                        lastSyncTime: 0,
                        latestUpdateTime: c,
                        memberCount: i,
                        expireTime: s
                    }) : (u.latestUpdateTime = c,
                    u.memberCount = i),
                    Es.debug("AVChatRoomHandler._updateMemberCountByGroupTips info:", u),
                    this._onlineMemberCountMap.set(t, u)
                }
            }
        }, {
            key: "reset",
            value: function(e) {
                if (0 !== this._pollingInstanceMap.size) {
                    if (e)
                        Es.log("AVChatRoomHandler.reset groupID=".concat(e)),
                        this.stop(e),
                        this._pollingInstanceMap.delete(e),
                        this._joinedGroupMap.delete(e),
                        this._pollingRequestInfoMap.delete(e),
                        this._onlineMemberCountMap.delete(e);
                    else {
                        Es.log("AVChatRoomHandler.reset all");
                        var t, n = er(this._pollingInstanceMap.keys());
                        try {
                            for (n.s(); !(t = n.n()).done; ) {
                                var r = t.value;
                                this.stop(r)
                            }
                        } catch (o) {
                            n.e(o)
                        } finally {
                            n.f()
                        }
                        this._pollingInstanceMap.clear(),
                        this._joinedGroupMap.clear(),
                        this._pollingRequestInfoMap.clear(),
                        this._onlineMemberCountMap.clear()
                    }
                    this.sequencesLinkedList.reset(),
                    this.receivedMessageCount = 0,
                    this._reportMessageStackedCount = 0,
                    this._deleteAVChatRoomID(e)
                }
            }
        }]),
        e
    }()
      , Cy = "GroupController"
      , Ey = function(e) {
        Fn(n, e);
        var t = Wn(n);
        function n(e) {
            var r;
            return bn(this, n),
            (r = t.call(this, e)).groupMap = new Map,
            r.groupMemberListMap = new Map,
            r.groupNoticeHandler = new dy({
                tim: e,
                groupController: zn(r)
            }),
            r.groupTipsHandler = new hy({
                tim: e,
                groupController: zn(r)
            }),
            r.AVChatRoomHandler = new My({
                tim: e,
                groupController: zn(r)
            }),
            r._initListeners(),
            r
        }
        return Gn(n, [{
            key: "createGroup",
            value: function(e) {
                var t = this
                  , n = "".concat(Cy, ".createGroup");
                if (!["Public", "Private", "ChatRoom", "AVChatRoom"].includes(e.type)) {
                    var r = new Bp({
                        code: Kp.ILLEGAL_GROUP_TYPE,
                        message: Mf
                    });
                    return Nd(r)
                }
                Zs(e.type) && !As(e.memberList) && e.memberList.length > 0 && (Es.warn("".concat(n, "创建AVChatRoom时不能添加群成员，自动忽略该字段")),
                e.memberList = void 0),
                Xs(e.type) || As(e.joinOption) || (Es.warn("".concat(n, " 创建Work/Meeting/AVChatRoom群时不能设置字段：joinOption，自动忽略该字段")),
                e.joinOption = void 0);
                var o = new Wd(_g);
                return Es.log("".concat(n)),
                this.request({
                    name: "group",
                    action: "create",
                    param: e
                }).then((function(r) {
                    if (o.setNetworkType(t.getNetworkType()).setText("groupType=".concat(e.type, " groupID=").concat(r.data.groupID)).setEnd(),
                    Es.log("".concat(n, " ok. groupID:"), r.data.groupID),
                    e.type === En.GRP_AVCHATROOM)
                        return t.getGroupProfile({
                            groupID: r.data.groupID
                        });
                    t.updateGroupMap([qn(qn({}, e), {}, {
                        groupID: r.data.groupID
                    })]);
                    var i = t.tim.createCustomMessage({
                        to: r.data.groupID,
                        conversationType: En.CONV_GROUP,
                        payload: {
                            data: "group_create",
                            extension: "".concat(t.tim.context.identifier, "创建群组")
                        }
                    });
                    return t.tim.sendMessage(i),
                    t.emitGroupListUpdate(),
                    t.getGroupProfile({
                        groupID: r.data.groupID
                    })
                }
                )).then((function(e) {
                    var t = e.data.group;
                    return t.selfInfo.messageRemindType = En.MSG_REMIND_ACPT_AND_NOTE,
                    t.selfInfo.role = En.GRP_MBR_ROLE_OWNER,
                    e
                }
                )).catch((function(r) {
                    return o.setText("groupType=".concat(e.type)),
                    t.probeNetwork().then((function(e) {
                        var t = Jn(e, 2)
                          , n = t[0]
                          , i = t[1];
                        o.setError(r, n, i).setEnd()
                    }
                    )),
                    Es.error("".concat(n, " error:"), r),
                    Nd(r)
                }
                ))
            }
        }, {
            key: "joinGroup",
            value: function(e) {
                var t = this
                  , n = e.groupID
                  , r = e.type
                  , o = "".concat(Cy, ".joinGroup");
                if (r === En.GRP_WORK) {
                    var i = new Bp({
                        code: Kp.CANNOT_JOIN_WORK,
                        message: Cf
                    });
                    return Nd(i)
                }
                if (this.hasLocalGroup(n)) {
                    if (!this.isLoggedIn())
                        return Ld({
                            status: En.JOIN_STATUS_ALREADY_IN_GROUP
                        });
                    var a = new Wd(Ig);
                    return this.getGroupProfile({
                        groupID: n
                    }).then((function(e) {
                        return a.setNetworkType(t.getNetworkType()).setText("groupID=".concat(n, " joinedStatus=").concat(En.JOIN_STATUS_ALREADY_IN_GROUP)).setEnd(),
                        Ld({
                            status: En.JOIN_STATUS_ALREADY_IN_GROUP
                        })
                    }
                    )).catch((function(r) {
                        return a.setNetworkType(t.getNetworkType()).setText("groupID=".concat(n, " unjoined")).setEnd(),
                        Es.warn("".concat(o, " ").concat(n, " was unjoined, now join!")),
                        t.groupMap.delete(n),
                        t.applyJoinGroup(e)
                    }
                    ))
                }
                return Es.log("".concat(o, " groupID:"), n),
                this.isLoggedIn() ? this.applyJoinGroup(e) : this.AVChatRoomHandler.joinWithoutAuth(e)
            }
        }, {
            key: "quitGroup",
            value: function(e) {
                var t = this
                  , n = "".concat(Cy, ".quitGroup");
                Es.log("".concat(n, " groupID:"), e);
                var r = this.AVChatRoomHandler.checkJoinedAVChatRoomByID(e);
                if (r && !this.isLoggedIn())
                    return Es.log("".concat(n, " anonymously ok. groupID:"), e),
                    this.deleteLocalGroupAndConversation(e),
                    this.AVChatRoomHandler.reset(e),
                    Ld({
                        groupID: e
                    });
                var o = new Wd(Cg);
                return this.request({
                    name: "group",
                    action: "quitGroup",
                    param: {
                        groupID: e
                    }
                }).then((function() {
                    return o.setNetworkType(t.getNetworkType()).setText("groupID=".concat(e)).setEnd(),
                    Es.log("".concat(n, " ok. groupID:"), e),
                    r && t.AVChatRoomHandler.reset(e),
                    t.deleteLocalGroupAndConversation(e),
                    new Rd({
                        groupID: e
                    })
                }
                )).catch((function(r) {
                    return o.setText("groupID=".concat(e)),
                    t.probeNetwork().then((function(e) {
                        var t = Jn(e, 2)
                          , n = t[0]
                          , i = t[1];
                        o.setError(r, n, i).setEnd()
                    }
                    )),
                    Es.error("".concat(n, " error. error:").concat(qs(r), " groupID:").concat(e)),
                    Nd(r)
                }
                ))
            }
        }, {
            key: "changeGroupOwner",
            value: function(e) {
                var t = this
                  , n = "".concat(Cy, ".changeGroupOwner");
                if (this.hasLocalGroup(e.groupID) && this.getLocalGroupProfile(e.groupID).type === En.GRP_AVCHATROOM)
                    return Nd(new Bp({
                        code: Kp.CANNOT_CHANGE_OWNER_IN_AVCHATROOM,
                        message: Ef
                    }));
                if (e.newOwnerID === this.tim.loginInfo.identifier)
                    return Nd(new Bp({
                        code: Kp.CANNOT_CHANGE_OWNER_TO_SELF,
                        message: Sf
                    }));
                var r = new Wd(Sg);
                return Es.log("".concat(n, " groupID:"), e.groupID),
                this.request({
                    name: "group",
                    action: "changeGroupOwner",
                    param: e
                }).then((function() {
                    r.setNetworkType(t.getNetworkType()).setText("groupID=".concat(e.groupID)).setEnd(),
                    Es.log("".concat(n, " ok. groupID:"), e.groupID);
                    var o = e.groupID
                      , i = e.newOwnerID;
                    t.groupMap.get(o).ownerID = i;
                    var a = t.groupMemberListMap.get(o);
                    if (a instanceof Map) {
                        var s = a.get(t.tim.loginInfo.identifier);
                        As(s) || (s.updateRole("Member"),
                        t.groupMap.get(o).selfInfo.role = "Member");
                        var u = a.get(i);
                        As(u) || u.updateRole("Owner")
                    }
                    return t.emitGroupListUpdate(!0, !1),
                    new Rd({
                        group: t.groupMap.get(o)
                    })
                }
                )).catch((function(o) {
                    return r.setText("groupID=".concat(e.groupID)),
                    t.probeNetwork().then((function(e) {
                        var t = Jn(e, 2)
                          , n = t[0]
                          , i = t[1];
                        r.setError(o, n, i).setEnd()
                    }
                    )),
                    Es.error("".concat(n, " error:").concat(qs(o), " groupID:").concat(e.groupID)),
                    Nd(o)
                }
                ))
            }
        }, {
            key: "dismissGroup",
            value: function(e) {
                var t = this
                  , n = "".concat(Cy, ".dismissGroup");
                if (this.hasLocalGroup(e) && this.getLocalGroupProfile(e).type === En.GRP_WORK)
                    return Nd(new Bp({
                        code: Kp.CANNOT_DISMISS_WORK,
                        message: Tf
                    }));
                var r = new Wd(kg);
                return Es.log("".concat(n, " groupID:").concat(e)),
                this.request({
                    name: "group",
                    action: "destroyGroup",
                    param: {
                        groupID: e
                    }
                }).then((function() {
                    return r.setNetworkType(t.getNetworkType()).setText("groupID=".concat(e)).setEnd(),
                    Es.log("".concat(n, " ok. groupID:").concat(e)),
                    t.deleteLocalGroupAndConversation(e),
                    t.checkJoinedAVChatRoomByID(e) && t.AVChatRoomHandler.reset(e),
                    new Rd({
                        groupID: e
                    })
                }
                )).catch((function(o) {
                    return r.setText("groupID=".concat(e)),
                    t.probeNetwork().then((function(e) {
                        var t = Jn(e, 2)
                          , n = t[0]
                          , i = t[1];
                        r.setError(o, n, i).setEnd()
                    }
                    )),
                    Es.error("".concat(n, " error:").concat(qs(o), " groupID:").concat(e)),
                    Nd(o)
                }
                ))
            }
        }, {
            key: "updateGroupProfile",
            value: function(e) {
                var t = this
                  , n = "".concat(Cy, ".updateGroupProfile");
                !this.hasLocalGroup(e.groupID) || Xs(this.getLocalGroupProfile(e.groupID).type) || As(e.joinOption) || (Es.warn("".concat(n, " Work/Meeting/AVChatRoom群不能设置字段：joinOption，自动忽略该字段")),
                e.joinOption = void 0),
                As(e.muteAllMembers) || (e.muteAllMembers ? e.muteAllMembers = "On" : e.muteAllMembers = "Off");
                var r = new Wd(Og);
                return r.setText(JSON.stringify(e)),
                Es.log("".concat(n, " groupID:"), e.groupID),
                this.request({
                    name: "group",
                    action: "updateGroupProfile",
                    param: e
                }).then((function() {
                    (r.setNetworkType(t.getNetworkType()).setEnd(),
                    Es.log("".concat(n, " ok. groupID:"), e.groupID),
                    t.hasLocalGroup(e.groupID)) && (t.groupMap.get(e.groupID).updateGroup(e),
                    t._setStorageGroupList());
                    return new Rd({
                        group: t.groupMap.get(e.groupID)
                    })
                }
                )).catch((function(o) {
                    return t.probeNetwork().then((function(e) {
                        var t = Jn(e, 2)
                          , n = t[0]
                          , i = t[1];
                        r.setError(o, n, i).setEnd()
                    }
                    )),
                    Es.log("".concat(n, " failed. error:").concat(qs(o), " groupID:").concat(e.groupID)),
                    Nd(o)
                }
                ))
            }
        }, {
            key: "setGroupMemberRole",
            value: function(e) {
                var t = this
                  , n = "".concat(Cy, ".setGroupMemberRole")
                  , r = e.groupID
                  , o = e.userID
                  , i = e.role
                  , a = this.groupMap.get(r);
                if (a.selfInfo.role !== En.GRP_MBR_ROLE_OWNER)
                    return Nd(new Bp({
                        code: Kp.NOT_OWNER,
                        message: Af
                    }));
                if ([En.GRP_WORK, En.GRP_AVCHATROOM].includes(a.type))
                    return Nd(new Bp({
                        code: Kp.CANNOT_SET_MEMBER_ROLE_IN_WORK_AND_AVCHATROOM,
                        message: wf
                    }));
                if ([En.GRP_MBR_ROLE_ADMIN, En.GRP_MBR_ROLE_MEMBER].indexOf(i) < 0)
                    return Nd(new Bp({
                        code: Kp.INVALID_MEMBER_ROLE,
                        message: Lf
                    }));
                if (o === this.tim.loginInfo.identifier)
                    return Nd(new Bp({
                        code: Kp.CANNOT_SET_SELF_MEMBER_ROLE,
                        message: Nf
                    }));
                var s = new Wd(qg);
                return s.setText("groupID=".concat(r, " userID=").concat(o, " role=").concat(i)),
                Es.log("".concat(n, " groupID:").concat(r, ". userID: ").concat(o)),
                this._modifyGroupMemberInfo({
                    groupID: r,
                    userID: o,
                    role: i
                }).then((function(e) {
                    return s.setNetworkType(t.getNetworkType()).setEnd(),
                    Es.log("".concat(n, " ok. groupID:").concat(r, ". userID: ").concat(o)),
                    new Rd({
                        group: a,
                        member: e
                    })
                }
                )).catch((function(e) {
                    return t.probeNetwork().then((function(t) {
                        var n = Jn(t, 2)
                          , r = n[0]
                          , o = n[1];
                        s.setError(e, r, o).setEnd()
                    }
                    )),
                    Es.error("".concat(n, " error:").concat(qs(e), " groupID:").concat(r, " userID:").concat(o)),
                    Nd(e)
                }
                ))
            }
        }, {
            key: "setGroupMemberMuteTime",
            value: function(e) {
                var t = this
                  , n = e.groupID
                  , r = e.userID
                  , o = e.muteTime
                  , i = "".concat(Cy, ".setGroupMemberMuteTime");
                if (r === this.tim.loginInfo.identifier)
                    return Nd(new Bp({
                        code: Kp.CANNOT_MUTE_SELF,
                        message: bf
                    }));
                Es.log("".concat(i, " groupID:").concat(n, ". userID: ").concat(r));
                var a = new Wd(Ug);
                return a.setText("groupID=".concat(n, " userID=").concat(r, " muteTime=").concat(o)),
                this._modifyGroupMemberInfo({
                    groupID: n,
                    userID: r,
                    muteTime: o
                }).then((function(e) {
                    return a.setNetworkType(t.getNetworkType()).setEnd(),
                    Es.log("".concat(i, " ok. groupID:").concat(n, ". userID: ").concat(r)),
                    new Rd({
                        group: t.getLocalGroupProfile(n),
                        member: e
                    })
                }
                )).catch((function(e) {
                    return t.probeNetwork().then((function(t) {
                        var n = Jn(t, 2)
                          , r = n[0]
                          , o = n[1];
                        a.setError(e, r, o).setEnd()
                    }
                    )),
                    Es.error("".concat(i, " error:").concat(qs(e), " groupID:").concat(n, " userID:").concat(r)),
                    Nd(e)
                }
                ))
            }
        }, {
            key: "setMessageRemindType",
            value: function(e) {
                var t = this
                  , n = "".concat(Cy, ".setMessageRemindType")
                  , r = new Wd(Dg);
                r.setText("groupID=".concat(e.groupID, " userID=").concat(e.userID || this.tim.loginInfo.identifier)),
                Es.log("".concat(n, " groupID:").concat(e.groupID, ". userID: ").concat(e.userID || this.tim.loginInfo.identifier));
                var o = e.groupID
                  , i = e.messageRemindType;
                return this._modifyGroupMemberInfo({
                    groupID: o,
                    messageRemindType: i,
                    userID: this.tim.loginInfo.identifier
                }).then((function() {
                    r.setNetworkType(t.getNetworkType()).setEnd(),
                    Es.log("".concat(n, " ok. groupID:").concat(e.groupID, " userID:").concat(e.userID || t.tim.loginInfo.identifier));
                    var o = t.getLocalGroupProfile(e.groupID);
                    return o && (o.selfInfo.messageRemindType = i),
                    new Rd({
                        group: o
                    })
                }
                )).catch((function(o) {
                    return t.probeNetwork().then((function(e) {
                        var t = Jn(e, 2)
                          , n = t[0]
                          , i = t[1];
                        r.setError(o, n, i).setEnd()
                    }
                    )),
                    Es.error("".concat(n, " error:").concat(qs(o), " groupID:").concat(e.groupID, " userID:").concat(e.userID || t.tim.loginInfo.identifier)),
                    Nd(o)
                }
                ))
            }
        }, {
            key: "setGroupMemberNameCard",
            value: function(e) {
                var t = this
                  , n = "".concat(Cy, ".setGroupMemberNameCard")
                  , r = e.groupID
                  , o = e.userID
                  , i = void 0 === o ? this.tim.loginInfo.identifier : o
                  , a = e.nameCard;
                Es.log("".concat(n, " groupID:").concat(r, ". userID: ").concat(i));
                var s = new Wd(xg);
                return s.setText("groupID=".concat(r, " userID=").concat(i, " nameCard=").concat(a)),
                this._modifyGroupMemberInfo({
                    groupID: r,
                    userID: i,
                    nameCard: a
                }).then((function(e) {
                    Es.log("".concat(n, " ok. groupID:").concat(r, ". userID: ").concat(i)),
                    s.setNetworkType(t.getNetworkType()).setEnd();
                    var o = t.getLocalGroupProfile(r);
                    return i === t.tim.loginInfo.identifier && o && o.setSelfNameCard(a),
                    new Rd({
                        group: o,
                        member: e
                    })
                }
                )).catch((function(e) {
                    return t.probeNetwork().then((function(t) {
                        var n = Jn(t, 2)
                          , r = n[0]
                          , o = n[1];
                        s.setError(e, r, o).setEnd()
                    }
                    )),
                    Es.error("".concat(n, " error:").concat(qs(e), " groupID:").concat(r, " userID:").concat(i)),
                    Nd(e)
                }
                ))
            }
        }, {
            key: "setGroupMemberCustomField",
            value: function(e) {
                var t = this
                  , n = "".concat(Cy, ".setGroupMemberCustomField")
                  , r = e.groupID
                  , o = e.userID
                  , i = void 0 === o ? this.tim.loginInfo.identifier : o
                  , a = e.memberCustomField;
                Es.log("".concat(n, " groupID:").concat(r, ". userID: ").concat(i));
                var s = new Wd(Fg);
                return s.setText("groupID=".concat(r, " userID=").concat(i, " memberCustomField=").concat(a)),
                this._modifyGroupMemberInfo({
                    groupID: r,
                    userID: i,
                    memberCustomField: a
                }).then((function(e) {
                    return s.setNetworkType(t.getNetworkType()).setEnd(),
                    Es.log("".concat(n, " ok. groupID:").concat(r, ". userID: ").concat(i)),
                    new Rd({
                        group: t.groupMap.get(r),
                        member: e
                    })
                }
                )).catch((function(e) {
                    return t.probeNetwork().then((function(t) {
                        var n = Jn(t, 2)
                          , r = n[0]
                          , o = n[1];
                        s.setError(e, r, o).setEnd()
                    }
                    )),
                    Es.error("".concat(n, " error:").concat(qs(e), " groupID:").concat(r, " userID:").concat(i)),
                    Nd(e)
                }
                ))
            }
        }, {
            key: "getGroupList",
            value: function(e) {
                var t = this
                  , n = "".concat(Cy, ".getGroupList")
                  , r = new Wd(Rg);
                Es.log("".concat(n));
                var o = {
                    introduction: "Introduction",
                    notification: "Notification",
                    createTime: "CreateTime",
                    ownerID: "Owner_Account",
                    lastInfoTime: "LastInfoTime",
                    memberNum: "MemberNum",
                    maxMemberNum: "MaxMemberNum",
                    joinOption: "ApplyJoinOption",
                    muteAllMembers: "ShutUpAllMember"
                }
                  , i = ["Type", "Name", "FaceUrl", "NextMsgSeq", "LastMsgTime"];
                return e && e.groupProfileFilter && e.groupProfileFilter.forEach((function(e) {
                    o[e] && i.push(o[e])
                }
                )),
                this.request({
                    name: "group",
                    action: "list",
                    param: {
                        responseFilter: {
                            groupBaseInfoFilter: i,
                            selfInfoFilter: ["Role", "JoinTime", "MsgFlag"]
                        }
                    }
                }).then((function(e) {
                    var o = e.data.groups;
                    return Es.log("".concat(n, " ok. nums=").concat(o.length)),
                    t._groupListTreeShaking(o),
                    t.updateGroupMap(o),
                    r.setNetworkType(t.getNetworkType()).setText("".concat(o.length, "-afterTreeshaking-").concat(t.groupMap.size)).setEnd(),
                    t.tempConversationList && (Es.log("".concat(n, " update last message with tempConversationList, nums=").concat(t.tempConversationList.length)),
                    t._handleUpdateGroupLastMessage({
                        data: t.tempConversationList
                    }),
                    t.tempConversationList = null),
                    t.emitGroupListUpdate(),
                    new Rd({
                        groupList: t.getLocalGroups()
                    })
                }
                )).catch((function(e) {
                    return t.probeNetwork().then((function(t) {
                        var n = Jn(t, 2)
                          , o = n[0]
                          , i = n[1];
                        r.setError(e, o, i).setEnd()
                    }
                    )),
                    Es.error("".concat(n, " error:"), e),
                    Nd(e)
                }
                ))
            }
        }, {
            key: "getGroupMemberList",
            value: function(e) {
                var t = this
                  , n = e.groupID
                  , r = e.offset
                  , o = void 0 === r ? 0 : r
                  , i = e.count
                  , a = void 0 === i ? 15 : i
                  , s = "".concat(Cy, ".getGroupMemberList")
                  , u = new Wd(Ng);
                Es.log("".concat(s, " groupID: ").concat(n, " offset: ").concat(o, " count: ").concat(a));
                var c = [];
                return this.request({
                    name: "group",
                    action: "getGroupMemberList",
                    param: {
                        groupID: n,
                        offset: o,
                        limit: a > 100 ? 100 : a,
                        memberInfoFilter: ["Role", "NameCard", "ShutUpUntil"]
                    }
                }).then((function(e) {
                    var r = e.data
                      , o = r.members
                      , i = r.memberNum;
                    return Rs(o) && 0 !== o.length ? (t.hasLocalGroup(n) && (t.getLocalGroupProfile(n).memberNum = i),
                    c = t._updateLocalGroupMemberMap(n, o),
                    t.tim.getUserProfile({
                        userIDList: o.map((function(e) {
                            return e.userID
                        }
                        )),
                        tagList: [Cp.NICK, Cp.AVATAR]
                    })) : Promise.resolve([])
                }
                )).then((function(e) {
                    var r = e.data;
                    if (!Rs(r) || 0 === r.length)
                        return Ld({
                            memberList: []
                        });
                    var i = r.map((function(e) {
                        return {
                            userID: e.userID,
                            nick: e.nick,
                            avatar: e.avatar
                        }
                    }
                    ));
                    return t._updateLocalGroupMemberMap(n, i),
                    u.setNetworkType(t.getNetworkType()).setText("groupID=".concat(n, " offset=").concat(o, " count=").concat(a)).setEnd(),
                    Es.log("".concat(s, " ok.")),
                    new Rd({
                        memberList: c
                    })
                }
                )).catch((function(e) {
                    return t.probeNetwork().then((function(t) {
                        var n = Jn(t, 2)
                          , r = n[0]
                          , o = n[1];
                        u.setError(e, r, o).setEnd()
                    }
                    )),
                    Es.error("".concat(s, " error:"), e),
                    Nd(e)
                }
                ))
            }
        }, {
            key: "getLocalGroups",
            value: function() {
                return Xn(this.groupMap.values())
            }
        }, {
            key: "getLocalGroupProfile",
            value: function(e) {
                return this.groupMap.get(e)
            }
        }, {
            key: "hasLocalGroup",
            value: function(e) {
                return this.groupMap.has(e)
            }
        }, {
            key: "getLocalGroupMemberInfo",
            value: function(e, t) {
                return this.groupMemberListMap.has(e) ? this.groupMemberListMap.get(e).get(t) : null
            }
        }, {
            key: "setLocalGroupMember",
            value: function(e, t) {
                if (this.groupMemberListMap.has(e))
                    this.groupMemberListMap.get(e).set(t.userID, t);
                else {
                    var n = (new Map).set(t.userID, t);
                    this.groupMemberListMap.set(e, n)
                }
            }
        }, {
            key: "hasLocalGroupMember",
            value: function(e, t) {
                return this.groupMemberListMap.has(e) && this.groupMemberListMap.get(e).has(t)
            }
        }, {
            key: "hasLocalGroupMemberMap",
            value: function(e) {
                return this.groupMemberListMap.has(e)
            }
        }, {
            key: "getGroupProfile",
            value: function(e) {
                var t = this
                  , n = "".concat(Cy, ".getGroupProfile")
                  , r = new Wd(Ag);
                Es.log("".concat(n, " groupID:"), e.groupID);
                var o = e.groupID
                  , i = e.groupCustomFieldFilter
                  , a = {
                    groupIDList: [o],
                    responseFilter: {
                        groupBaseInfoFilter: ["Type", "Name", "Introduction", "Notification", "FaceUrl", "Owner_Account", "CreateTime", "InfoSeq", "LastInfoTime", "LastMsgTime", "MemberNum", "MaxMemberNum", "ApplyJoinOption", "NextMsgSeq", "ShutUpAllMember"],
                        groupCustomFieldFilter: i
                    }
                };
                return this.getGroupProfileAdvance(a).then((function(i) {
                    var a, s = i.data, u = s.successGroupList, c = s.failureGroupList;
                    return Es.log("".concat(n, " ok. groupID:").concat(e.groupID)),
                    c.length > 0 ? Nd(c[0]) : (Zs(u[0].type) && !t.hasLocalGroup(o) ? a = new xv(u[0]) : (t.updateGroupMap(u),
                    a = t.getLocalGroupProfile(o)),
                    r.setNetworkType(t.getNetworkType()).setText("groupID=".concat(a.groupID, " type=").concat(a.type, " muteAllMembers=").concat(a.muteAllMembers, " ownerID=").concat(a.ownerID)).setEnd(),
                    a && a.selfInfo && !a.selfInfo.nameCard ? t.updateSelfInfo(a).then((function(e) {
                        return new Rd({
                            group: e
                        })
                    }
                    )) : new Rd({
                        group: a
                    }))
                }
                )).catch((function(o) {
                    return t.probeNetwork().then((function(t) {
                        var n = Jn(t, 2)
                          , i = n[0]
                          , a = n[1];
                        r.setError(o, i, a).setText("groupID=".concat(e.groupID)).setEnd()
                    }
                    )),
                    Es.error("".concat(n, " error:").concat(qs(o), " groupID:").concat(e.groupID)),
                    Nd(o)
                }
                ))
            }
        }, {
            key: "getGroupMemberProfile",
            value: function(e) {
                var t = this
                  , n = "".concat(Cy, ".getGroupMemberProfile")
                  , r = new Wd(bg);
                r.setText(e.userIDList.length > 5 ? "userIDList.length=".concat(e.userIDList.length) : "userIDList=".concat(e.userIDList)),
                Es.log("".concat(n, " groupID:").concat(e.groupID, " userIDList:").concat(e.userIDList.join(","))),
                e.userIDList.length > 50 && (e.userIDList = e.userIDList.slice(0, 50));
                var o = e.groupID
                  , i = e.userIDList;
                return this._getGroupMemberProfileAdvance(qn(qn({}, e), {}, {
                    userIDList: i
                })).then((function(e) {
                    var n = e.data.members;
                    return Rs(n) && 0 !== n.length ? (t._updateLocalGroupMemberMap(o, n),
                    t.tim.getUserProfile({
                        userIDList: n.map((function(e) {
                            return e.userID
                        }
                        )),
                        tagList: [Cp.NICK, Cp.AVATAR]
                    })) : Ld([])
                }
                )).then((function(e) {
                    var n = e.data.map((function(e) {
                        return {
                            userID: e.userID,
                            nick: e.nick,
                            avatar: e.avatar
                        }
                    }
                    ));
                    t._updateLocalGroupMemberMap(o, n);
                    var a = i.filter((function(e) {
                        return t.hasLocalGroupMember(o, e)
                    }
                    )).map((function(e) {
                        return t.getLocalGroupMemberInfo(o, e)
                    }
                    ));
                    return r.setNetworkType(t.getNetworkType()).setEnd(),
                    new Rd({
                        memberList: a
                    })
                }
                ))
            }
        }, {
            key: "_getGroupMemberProfileAdvance",
            value: function(e) {
                return this.request({
                    name: "group",
                    action: "getGroupMemberProfile",
                    param: qn(qn({}, e), {}, {
                        memberInfoFilter: e.memberInfoFilter ? e.memberInfoFilter : ["Role", "JoinTime", "NameCard", "ShutUpUntil"]
                    })
                })
            }
        }, {
            key: "updateSelfInfo",
            value: function(e) {
                var t = "".concat(Cy, ".updateSelfInfo")
                  , n = e.groupID;
                Es.log("".concat(t, " groupID:"), n);
                var r = {
                    groupID: n,
                    userIDList: [this.tim.loginInfo.identifier]
                };
                return this.getGroupMemberProfile(r).then((function(r) {
                    var o = r.data.memberList;
                    return Es.log("".concat(t, " ok. groupID:"), n),
                    e && 0 !== o.length && e.updateSelfInfo(o[0]),
                    e
                }
                ))
            }
        }, {
            key: "addGroupMember",
            value: function(e) {
                var t = this
                  , n = "".concat(Cy, ".addGroupMember")
                  , r = new Wd(Pg);
                r.setText("groupID=".concat(e.groupID));
                var o = this.getLocalGroupProfile(e.groupID);
                if (Zs(o.type)) {
                    var i = new Bp({
                        code: Kp.CANNOT_ADD_MEMBER_IN_AVCHATROOM,
                        message: kf
                    });
                    return r.setCode(Kp.CANNOT_ADD_MEMBER_IN_AVCHATROOM).setMessage(kf).setNetworkType(this.getNetworkType()).setText("groupID=".concat(e.groupID, " groupType=").concat(o.type)).setEnd(),
                    Nd(i)
                }
                return e.userIDList = e.userIDList.map((function(e) {
                    return {
                        userID: e
                    }
                }
                )),
                Es.log("".concat(n, " groupID:"), e.groupID),
                this.request({
                    name: "group",
                    action: "addGroupMember",
                    param: e
                }).then((function(i) {
                    var a = i.data.members;
                    r.setNetworkType(t.getNetworkType()).setText("groupID=".concat(e.groupID)).setEnd(),
                    Es.log("".concat(n, " ok. groupID:"), e.groupID);
                    var s = a.filter((function(e) {
                        return 1 === e.result
                    }
                    )).map((function(e) {
                        return e.userID
                    }
                    ))
                      , u = a.filter((function(e) {
                        return 0 === e.result
                    }
                    )).map((function(e) {
                        return e.userID
                    }
                    ))
                      , c = a.filter((function(e) {
                        return 2 === e.result
                    }
                    )).map((function(e) {
                        return e.userID
                    }
                    ));
                    return 0 === s.length ? new Rd({
                        successUserIDList: s,
                        failureUserIDList: u,
                        existedUserIDList: c
                    }) : (o.memberNum += s.length,
                    new Rd({
                        successUserIDList: s,
                        failureUserIDList: u,
                        existedUserIDList: c,
                        group: o
                    }))
                }
                )).catch((function(o) {
                    return t.probeNetwork().then((function(t) {
                        var n = Jn(t, 2)
                          , i = n[0]
                          , a = n[1];
                        r.setError(o, i, a).setText("groupID=".concat(e.groupID)).setEnd()
                    }
                    )),
                    Es.error("".concat(n, " error:").concat(qs(o), " groupID:").concat(e.groupID)),
                    Nd(o)
                }
                ))
            }
        }, {
            key: "deleteGroupMember",
            value: function(e) {
                var t = this
                  , n = "".concat(Cy, ".deleteGroupMember")
                  , r = new Wd(Gg);
                r.setText(e.userIDList.length > 5 ? "userIDList.length=".concat(e.userIDList.length) : "userIDList=".concat(e.userIDList)),
                Es.log("".concat(n, " groupID:").concat(e.groupID, " userIDList:").concat(e.userIDList));
                var o = this.getLocalGroupProfile(e.groupID);
                return o.type === En.GRP_AVCHATROOM ? Nd(new Bp({
                    code: Kp.CANNOT_KICK_MEMBER_IN_AVCHATROOM,
                    message: Rf
                })) : this.request({
                    name: "group",
                    action: "deleteGroupMember",
                    param: e
                }).then((function() {
                    return r.setNetworkType(t.getNetworkType()).setEnd(),
                    Es.log("".concat(n, " ok")),
                    o.memberNum--,
                    t.deleteLocalGroupMembers(e.groupID, e.userIDList),
                    new Rd({
                        group: o,
                        userIDList: e.userIDList
                    })
                }
                )).catch((function(o) {
                    return t.probeNetwork().then((function(t) {
                        var n = Jn(t, 2)
                          , i = n[0]
                          , a = n[1];
                        r.setError(o, i, a).setText("groupID=".concat(e.groupID)).setEnd()
                    }
                    )),
                    Es.error("".concat(n, " error:").concat(qs(o), " groupID:").concat(e.groupID)),
                    Nd(o)
                }
                ))
            }
        }, {
            key: "searchGroupByID",
            value: function(e) {
                var t = this
                  , n = "".concat(Cy, ".searchGroupByID")
                  , r = {
                    groupIDList: [e]
                }
                  , o = new Wd(Eg);
                return o.setText("groupID=".concat(e)),
                Es.log("".concat(n, " groupID:").concat(e)),
                this.request({
                    name: "group",
                    action: "searchGroupByID",
                    param: r
                }).then((function(r) {
                    var i = r.data.groupProfile;
                    if (i[0].errorCode !== Qu.SUCCESS)
                        throw new Bp({
                            code: i[0].errorCode,
                            message: i[0].errorInfo
                        });
                    return o.setNetworkType(t.getNetworkType()).setEnd(),
                    Es.log("".concat(n, " ok. groupID:").concat(e)),
                    new Rd({
                        group: new xv(i[0])
                    })
                }
                )).catch((function(r) {
                    return t.probeNetwork().then((function(e) {
                        var t = Jn(e, 2)
                          , n = t[0]
                          , i = t[1];
                        o.setError(r, n, i).setEnd()
                    }
                    )),
                    Es.warn("".concat(n, " error:").concat(qs(r), " groupID:").concat(e)),
                    Nd(r)
                }
                ))
            }
        }, {
            key: "applyJoinGroup",
            value: function(e) {
                var t = this
                  , n = "".concat(Cy, ".applyJoinGroup")
                  , r = new Wd(Ig);
                return this.request({
                    name: "group",
                    action: "applyJoinGroup",
                    param: e
                }).then((function(o) {
                    var i = o.data
                      , a = i.joinedStatus
                      , s = i.longPollingKey;
                    switch (r.setNetworkType(t.getNetworkType()).setText("groupID=".concat(e.groupID, " joinedStatus=").concat(a)).setEnd(),
                    Es.log("".concat(n, " ok. groupID:").concat(e.groupID, " joinedStatus:").concat(a, " longPollingKey:").concat(s)),
                    a) {
                    case Xu.WAIT_APPROVAL:
                        return new Rd({
                            status: Xu.WAIT_APPROVAL
                        });
                    case Xu.SUCCESS:
                        return t.getGroupProfile({
                            groupID: e.groupID
                        }).then((function(n) {
                            var r = n.data.group
                              , o = {
                                status: Xu.SUCCESS,
                                group: r
                            };
                            return As(s) ? (t.emitGroupListUpdate(!0, !1),
                            new Rd(o)) : (t.emitInnerEvent(cd, e.groupID),
                            t.AVChatRoomHandler.startRunLoop({
                                longPollingKey: s,
                                group: r
                            }))
                        }
                        ));
                    default:
                        var u = new Bp({
                            code: Kp.JOIN_GROUP_FAIL,
                            message: Df
                        });
                        return Es.error("".concat(n, " error:").concat(qs(u), " groupID:").concat(e.groupID)),
                        Nd(u)
                    }
                }
                )).catch((function(o) {
                    return r.setText("groupID=".concat(e.groupID)),
                    t.probeNetwork().then((function(e) {
                        var t = Jn(e, 2)
                          , n = t[0]
                          , i = t[1];
                        r.setError(o, n, i).setEnd()
                    }
                    )),
                    Es.error("".concat(n, " error:").concat(qs(o), " groupID:").concat(e.groupID)),
                    Nd(o)
                }
                ))
            }
        }, {
            key: "applyJoinAVChatRoom",
            value: function(e) {
                return this.AVChatRoomHandler.applyJoinAVChatRoom(e)
            }
        }, {
            key: "handleGroupApplication",
            value: function(e) {
                var t = this
                  , n = "".concat(Cy, ".handleGroupApplication")
                  , r = e.message.payload
                  , o = r.groupProfile.groupID
                  , i = r.authentication
                  , a = r.messageKey
                  , s = r.operatorID
                  , u = new Wd(Tg);
                return u.setText("groupID=".concat(o)),
                Es.log("".concat(n, " groupID:"), o),
                this.request({
                    name: "group",
                    action: "handleApplyJoinGroup",
                    param: qn(qn({}, e), {}, {
                        applicant: s,
                        groupID: o,
                        authentication: i,
                        messageKey: a
                    })
                }).then((function() {
                    return u.setNetworkType(t.getNetworkType()).setEnd(),
                    Es.log("".concat(n, " ok. groupID:"), o),
                    t.deleteGroupSystemNotice({
                        messageList: [e.message]
                    }),
                    new Rd({
                        group: t.getLocalGroupProfile(o)
                    })
                }
                )).catch((function(e) {
                    return t.probeNetwork().then((function(t) {
                        var n = Jn(t, 2)
                          , r = n[0]
                          , o = n[1];
                        u.setError(e, r, o).setEnd()
                    }
                    )),
                    Es.error("".concat(n, " error. error:").concat(qs(e), " groupID:").concat(o)),
                    Nd(e)
                }
                ))
            }
        }, {
            key: "deleteGroupSystemNotice",
            value: function(e) {
                var t = this
                  , n = "".concat(Cy, ".deleteGroupSystemNotice");
                return Rs(e.messageList) && 0 !== e.messageList.length ? (Es.log("".concat(n) + e.messageList.map((function(e) {
                    return e.ID
                }
                ))),
                this.request({
                    name: "group",
                    action: "deleteGroupSystemNotice",
                    param: {
                        messageListToDelete: e.messageList.map((function(e) {
                            return {
                                from: En.CONV_SYSTEM,
                                messageSeq: e.clientSequence,
                                messageRandom: e.random
                            }
                        }
                        ))
                    }
                }).then((function() {
                    return Es.log("".concat(n, " ok")),
                    e.messageList.forEach((function(e) {
                        t.tim.messageController.deleteLocalMessage(e)
                    }
                    )),
                    new Rd
                }
                )).catch((function(e) {
                    return Es.error("".concat(n, " error:"), e),
                    Nd(e)
                }
                ))) : Ld()
            }
        }, {
            key: "getGroupProfileAdvance",
            value: function(e) {
                var t = "".concat(Cy, ".getGroupProfileAdvance");
                return Rs(e.groupIDList) && e.groupIDList.length > 50 && (Es.warn("".concat(t, " 获取群资料的数量不能超过50个")),
                e.groupIDList.length = 50),
                Es.log("".concat(t, " groupIDList:"), e.groupIDList),
                this.request({
                    name: "group",
                    action: "query",
                    param: e
                }).then((function(e) {
                    Es.log("".concat(t, " ok."));
                    var n = e.data.groups
                      , r = n.filter((function(e) {
                        return As(e.errorCode) || e.errorCode === Qu.SUCCESS
                    }
                    ))
                      , o = n.filter((function(e) {
                        return e.errorCode && e.errorCode !== Qu.SUCCESS
                    }
                    )).map((function(e) {
                        return new Bp({
                            code: e.errorCode,
                            message: e.errorInfo,
                            data: {
                                groupID: e.groupID
                            }
                        })
                    }
                    ));
                    return new Rd({
                        successGroupList: r,
                        failureGroupList: o
                    })
                }
                )).catch((function(n) {
                    return Es.error("".concat(t, " error:").concat(qs(n), " groupIDList:").concat(e.groupIDList)),
                    Nd(n)
                }
                ))
            }
        }, {
            key: "_deleteLocalGroup",
            value: function(e) {
                return this.groupMap.delete(e),
                this.groupMemberListMap.delete(e),
                this._setStorageGroupList(),
                this.groupMap.has(e) && this.groupMemberListMap.has(e)
            }
        }, {
            key: "_initGroupList",
            value: function() {
                var e = this
                  , t = "".concat(Cy, "._initGroupList")
                  , n = new Wd(wg);
                Es.time(zd),
                Es.log("".concat(t));
                var r = this._getStorageGroupList();
                Rs(r) && r.length > 0 ? (r.forEach((function(t) {
                    e.groupMap.set(t.groupID, new xv(t))
                }
                )),
                this.emitGroupListUpdate(!0, !1),
                n.setNetworkType(this.getNetworkType()).setText(this.groupMap.size).setEnd()) : n.setNetworkType(this.getNetworkType()).setText(0).setEnd(),
                this.triggerReady(),
                Es.log("".concat(t, " ok. initCost=").concat(Es.timeEnd(zd), "ms")),
                this.getGroupList()
            }
        }, {
            key: "_initListeners",
            value: function() {
                var e = this.tim.innerEmitter;
                e.once(Dh, this._initGroupList, this),
                e.on(id, this._handleUpdateGroupLastMessage, this),
                e.on(bh, this._handleReceivedGroupMessage, this),
                e.on(ud, this._handleProfileUpdated, this)
            }
        }, {
            key: "emitGroupListUpdate",
            value: function() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
                  , t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                  , n = this.getLocalGroups();
                t && this.emitInnerEvent(Zh, n),
                e && this.emitOuterEvent(Cn.GROUP_LIST_UPDATED, n)
            }
        }, {
            key: "_handleReceivedGroupMessage",
            value: function(e) {
                var t = this
                  , n = e.data.eventDataList;
                Array.isArray(n) && n.forEach((function(e) {
                    var n = e.conversationID.replace(En.CONV_GROUP, "");
                    t.groupMap.has(n) && (t.groupMap.get(n).nextMessageSeq = e.lastMessage.sequence + 1)
                }
                ))
            }
        }, {
            key: "_onReceivedGroupSystemNotice",
            value: function(e) {
                var t = e.data;
                this.groupNoticeHandler._onReceivedGroupNotice(t)
            }
        }, {
            key: "_handleUpdateGroupLastMessage",
            value: function(e) {
                var t = "".concat(Cy, "._handleUpdateGroupLastMessage")
                  , n = e.data;
                if (Es.log("".concat(t, " convNums=").concat(n.length, " groupNums=").concat(this.groupMap.size)),
                0 !== this.groupMap.size) {
                    for (var r, o, i, a = !1, s = 0, u = n.length; s < u; s++)
                        (r = n[s]).conversationID && r.type !== En.CONV_GROUP && (o = r.conversationID.split(/^GROUP/)[1],
                        (i = this.getLocalGroupProfile(o)) && (i.lastMessage = r.lastMessage,
                        a = !0));
                    a && (this.groupMap = this._sortLocalGroupList(this.groupMap),
                    this.emitGroupListUpdate(!0, !1))
                } else
                    this.tempConversationList = n
            }
        }, {
            key: "_sortLocalGroupList",
            value: function(e) {
                var t = Xn(e).filter((function(e) {
                    var t = Jn(e, 2);
                    t[0];
                    return !au(t[1].lastMessage)
                }
                ));
                return t.sort((function(e, t) {
                    return t[1].lastMessage.lastTime - e[1].lastMessage.lastTime
                }
                )),
                new Map([].concat(Xn(t), Xn(e)))
            }
        }, {
            key: "_getStorageGroupList",
            value: function() {
                return this.tim.storage.getItem("groupMap")
            }
        }, {
            key: "_setStorageGroupList",
            value: function() {
                var e = this.getLocalGroups().filter((function(e) {
                    var t = e.type;
                    return !Zs(t)
                }
                )).slice(0, 20).map((function(e) {
                    return {
                        groupID: e.groupID,
                        name: e.name,
                        avatar: e.avatar,
                        type: e.type
                    }
                }
                ));
                this.tim.storage.setItem("groupMap", e)
            }
        }, {
            key: "updateGroupMap",
            value: function(e) {
                var t = this;
                e.forEach((function(e) {
                    t.groupMap.has(e.groupID) ? t.groupMap.get(e.groupID).updateGroup(e) : t.groupMap.set(e.groupID, new xv(e))
                }
                )),
                this._setStorageGroupList()
            }
        }, {
            key: "_updateLocalGroupMemberMap",
            value: function(e, t) {
                var n = this;
                return Rs(t) && 0 !== t.length ? t.map((function(t) {
                    return n.hasLocalGroupMember(e, t.userID) ? n.getLocalGroupMemberInfo(e, t.userID).updateMember(t) : n.setLocalGroupMember(e, new fy(t)),
                    n.getLocalGroupMemberInfo(e, t.userID)
                }
                )) : []
            }
        }, {
            key: "deleteLocalGroupMembers",
            value: function(e, t) {
                var n = this.groupMemberListMap.get(e);
                n && t.forEach((function(e) {
                    n.delete(e)
                }
                ))
            }
        }, {
            key: "_modifyGroupMemberInfo",
            value: function(e) {
                var t = this
                  , n = e.groupID
                  , r = e.userID;
                return this.request({
                    name: "group",
                    action: "modifyGroupMemberInfo",
                    param: e
                }).then((function() {
                    if (t.hasLocalGroupMember(n, r)) {
                        var o = t.getLocalGroupMemberInfo(n, r);
                        return As(e.muteTime) || o.updateMuteUntil(e.muteTime),
                        As(e.role) || o.updateRole(e.role),
                        As(e.nameCard) || o.updateNameCard(e.nameCard),
                        As(e.memberCustomField) || o.updateMemberCustomField(e.memberCustomField),
                        o
                    }
                    return t.getGroupMemberProfile({
                        groupID: n,
                        userIDList: [r]
                    }).then((function(e) {
                        return Jn(e.data.memberList, 1)[0]
                    }
                    ))
                }
                ))
            }
        }, {
            key: "_groupListTreeShaking",
            value: function(e) {
                for (var t = new Map(Xn(this.groupMap)), n = 0, r = e.length; n < r; n++)
                    t.delete(e[n].groupID);
                this.AVChatRoomHandler.hasJoinedAVChatRoom() && this.AVChatRoomHandler.getJoinedAVChatRoom().forEach((function(e) {
                    t.delete(e)
                }
                ));
                for (var o = Xn(t.keys()), i = 0, a = o.length; i < a; i++)
                    this.groupMap.delete(o[i])
            }
        }, {
            key: "_handleProfileUpdated",
            value: function(e) {
                for (var t = this, n = e.data, r = function(e) {
                    var r = n[e];
                    t.groupMemberListMap.forEach((function(e) {
                        e.has(r.userID) && e.get(r.userID).updateMember({
                            nick: r.nick,
                            avatar: r.avatar
                        })
                    }
                    ))
                }, o = 0; o < n.length; o++)
                    r(o)
            }
        }, {
            key: "getJoinedAVChatRoom",
            value: function() {
                return this.AVChatRoomHandler.getJoinedAVChatRoom()
            }
        }, {
            key: "deleteLocalGroupAndConversation",
            value: function(e) {
                this._deleteLocalGroup(e),
                this.tim.conversationController.deleteLocalConversation("GROUP".concat(e)),
                this.emitGroupListUpdate(!0, !1)
            }
        }, {
            key: "checkJoinedAVChatRoomByID",
            value: function(e) {
                return this.AVChatRoomHandler.checkJoinedAVChatRoomByID(e)
            }
        }, {
            key: "getGroupLastSequence",
            value: function(e) {
                var t = this
                  , n = "".concat(Cy, ".getGroupLastSequence")
                  , r = new Wd(Lg)
                  , o = 0;
                if (this.hasLocalGroup(e)) {
                    var i = this.getLocalGroupProfile(e);
                    if (i.lastMessage.lastSequence > 0)
                        return o = i.lastMessage.lastSequence,
                        Es.log("".concat(n, " got lastSequence=").concat(o, " from local group profile[lastMessage.lastSequence]. groupID=").concat(e)),
                        r.setNetworkType(this.getNetworkType()).setText("got lastSequence=".concat(o, " from local group profile[lastMessage.lastSequence]. groupID=").concat(e)).setEnd(),
                        Promise.resolve(o);
                    if (i.nextMessageSeq > 1)
                        return o = i.nextMessageSeq - 1,
                        Es.log("".concat(n, " got lastSequence=").concat(o, " from local group profile[nextMessageSeq]. groupID=").concat(e)),
                        r.setNetworkType(this.getNetworkType()).setText("got lastSequence=".concat(o, " from local group profile[nextMessageSeq]. groupID=").concat(e)).setEnd(),
                        Promise.resolve(o)
                }
                var a = "GROUP".concat(e)
                  , s = this.tim.conversationController.getLocalConversation(a);
                if (s && s.lastMessage.lastSequence)
                    return o = s.lastMessage.lastSequence,
                    Es.log("".concat(n, " got lastSequence=").concat(o, " from local conversation profile[lastMessage.lastSequence]. groupID=").concat(e)),
                    r.setNetworkType(this.getNetworkType()).setText("got lastSequence=".concat(o, " from local conversation profile[lastMessage.lastSequence]. groupID=").concat(e)).setEnd(),
                    Promise.resolve(o);
                var u = {
                    groupIDList: [e],
                    responseFilter: {
                        groupBaseInfoFilter: ["NextMsgSeq"]
                    }
                };
                return this.getGroupProfileAdvance(u).then((function(i) {
                    var a = i.data.successGroupList;
                    return au(a) ? Es.log("".concat(n, " successGroupList is empty. groupID=").concat(e)) : (o = a[0].nextMessageSeq - 1,
                    Es.log("".concat(n, " got lastSequence=").concat(o, " from getGroupProfileAdvance. groupID=").concat(e))),
                    r.setNetworkType(t.getNetworkType()).setText("got lastSequence=".concat(o, " from getGroupProfileAdvance. groupID=").concat(e)).setEnd(),
                    o
                }
                )).catch((function(o) {
                    return t.probeNetwork().then((function(t) {
                        var n = Jn(t, 2)
                          , i = n[0]
                          , a = n[1];
                        r.setError(o, i, a).setText("get lastSequence failed from getGroupProfileAdvance. groupID=".concat(e)).setEnd()
                    }
                    )),
                    Es.warn("".concat(n, " failed. ").concat(o)),
                    Nd(o)
                }
                ))
            }
        }, {
            key: "getGroupOnlineMemberCount",
            value: function(e) {
                return this.AVChatRoomHandler.checkJoinedAVChatRoomByID(e) ? this.AVChatRoomHandler.getGroupOnlineMemberCount(e) : Ld({
                    memberCount: 0
                })
            }
        }, {
            key: "reset",
            value: function() {
                this.groupMap.clear(),
                this.groupMemberListMap.clear(),
                this.resetReady(),
                this.groupNoticeHandler.reset(),
                this.AVChatRoomHandler.reset(),
                this.tim.innerEmitter.once(Dh, this._initGroupList, this)
            }
        }]),
        n
    }(Dd)
      , Sy = function(e) {
        Fn(n, e);
        var t = Wn(n);
        function n(e) {
            var r;
            bn(this, n),
            (r = t.call(this, e)).REALTIME_MESSAGE_TIMEOUT = 3e5,
            r.LONGPOLLING_ID_TIMEOUT = 3e5,
            r._currentState = En.NET_STATE_CONNECTED,
            r._status = {
                OPENIM: {
                    lastResponseReceivedTime: 0,
                    jitterCount: 0,
                    failedCount: 0
                },
                AVCHATROOM: {
                    lastResponseReceivedTime: 0,
                    jitterCount: 0,
                    failedCount: 0
                }
            };
            var o = r.tim.innerEmitter;
            return o.on(Uh, r._onGetLongPollIDFailed, zn(r)),
            o.on(qh, r._onOpenIMResponseOK, zn(r)),
            o.on(xh, r._onOpenIMRequestFailed, zn(r)),
            o.on(Qh, r._onAVChatroomResponseOK, zn(r)),
            o.on(Xh, r._onAVChatroomRequestFailed, zn(r)),
            r
        }
        return Gn(n, [{
            key: "_onGetLongPollIDFailed",
            value: function() {
                this._currentState !== En.NET_STATE_DISCONNECTED && this._emitNetStateChangeEvent(En.NET_STATE_DISCONNECTED)
            }
        }, {
            key: "_onOpenIMResponseOK",
            value: function() {
                this._onResponseOK("OPENIM")
            }
        }, {
            key: "_onOpenIMRequestFailed",
            value: function() {
                this._onRequestFailed("OPENIM")
            }
        }, {
            key: "_onAVChatroomResponseOK",
            value: function() {
                this.isLoggedIn() || this._onResponseOK("AVCHATROOM")
            }
        }, {
            key: "_onAVChatroomRequestFailed",
            value: function() {
                this.isLoggedIn() || this._onRequestFailed("AVCHATROOM")
            }
        }, {
            key: "_onResponseOK",
            value: function(e) {
                var t = this._status[e]
                  , n = Date.now();
                if (0 !== t.lastResponseReceivedTime) {
                    var r = n - t.lastResponseReceivedTime;
                    Es.debug("StatusController._onResponseOK key=".concat(e, " currentState=").concat(this._currentState, " interval=").concat(r, " failedCount=").concat(t.failedCount, " jitterCount=").concat(t.jitterCount)),
                    t.failedCount > 0 && (t.failedCount = 0,
                    t.jitterCount += 1,
                    this._currentState !== En.NET_STATE_CONNECTED && this._emitNetStateChangeEvent(En.NET_STATE_CONNECTED));
                    r <= this.LONGPOLLING_ID_TIMEOUT ? t.jitterCount >= 3 && (new Wd(Kg).setText("".concat(e, "-").concat(r, "-").concat(t.jitterCount)).setNetworkType(this.getNetworkType()).setEnd(),
                    t.jitterCount = 0) : (new Wd(Hg).setText("".concat(e, "-").concat(r)).setNetworkType(this.getNetworkType()).setEnd(),
                    Es.warn("StatusController._onResponseOK, sdk reload. key=".concat(e, " interval=").concat(r, "ms. https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/module-EVENT.html#.SDK_RELOAD")),
                    this.emitInnerEvent(fd)),
                    t.lastResponseReceivedTime = n
                } else
                    t.lastResponseReceivedTime = n
            }
        }, {
            key: "_onRequestFailed",
            value: function(e) {
                var t = this
                  , n = this._status[e];
                Date.now() - n.lastResponseReceivedTime >= this.LONGPOLLING_ID_TIMEOUT ? this._currentState !== En.NET_STATE_DISCONNECTED && (Es.warn("StatusController._onRequestFailed, disconnected, longpolling unavailable more than 5min. key=".concat(e, " networkType=").concat(this.getNetworkType())),
                this._emitNetStateChangeEvent(En.NET_STATE_DISCONNECTED)) : (n.failedCount += 1,
                n.failedCount > 5 ? this.probeNetwork().then((function(r) {
                    var o = Jn(r, 2)
                      , i = o[0]
                      , a = o[1];
                    i ? (t._currentState !== En.NET_STATE_CONNECTING && t._emitNetStateChangeEvent(En.NET_STATE_CONNECTING),
                    Es.warn("StatusController._onRequestFailed, connecting, network jitter. key=".concat(e, " networkType=").concat(a))) : (t._currentState !== En.NET_STATE_DISCONNECTED && t._emitNetStateChangeEvent(En.NET_STATE_DISCONNECTED),
                    Es.warn("StatusController._onRequestFailed, disconnected, longpolling unavailable. key=".concat(e, " networkType=").concat(a))),
                    n.failedCount = 0,
                    n.jitterCount = 0
                }
                )) : this._currentState === En.NET_STATE_CONNECTED && this._emitNetStateChangeEvent(En.NET_STATE_CONNECTING))
            }
        }, {
            key: "_emitNetStateChangeEvent",
            value: function(e) {
                Es.log("StatusController._emitNetStateChangeEvent net state changed from ".concat(this._currentState, " to ").concat(e)),
                this._currentState = e,
                this.emitOuterEvent(Cn.NET_STATE_CHANGE, {
                    state: e
                })
            }
        }, {
            key: "reset",
            value: function() {
                Es.log("StatusController.reset"),
                this._currentState = En.NET_STATE_CONNECTED,
                this._status = {
                    OPENIM: {
                        lastResponseReceivedTime: 0,
                        jitterCount: 0,
                        failedCount: 0
                    },
                    AVCHATROOM: {
                        lastResponseReceivedTime: 0,
                        jitterCount: 0,
                        failedCount: 0
                    }
                }
            }
        }]),
        n
    }(Dd);
    function Ty() {
        return null
    }
    var Dy = function() {
        function e(t) {
            bn(this, e),
            this.tim = t,
            this.storageQueue = new Map,
            this.checkTimes = 0,
            this.checkTimer = setInterval(this._onCheckTimer.bind(this), 1e3),
            this._errorTolerantHandle()
        }
        return Gn(e, [{
            key: "_errorTolerantHandle",
            value: function() {
                !Ka && As(window.localStorage) && (this.getItem = Ty,
                this.setItem = Ty,
                this.removeItem = Ty,
                this.clear = Ty)
            }
        }, {
            key: "_onCheckTimer",
            value: function() {
                if (this.checkTimes++,
                this.checkTimes % 20 == 0) {
                    if (0 === this.storageQueue.size)
                        return;
                    this._doFlush()
                }
            }
        }, {
            key: "_doFlush",
            value: function() {
                try {
                    var e, t = er(this.storageQueue);
                    try {
                        for (t.s(); !(e = t.n()).done; ) {
                            var n = Jn(e.value, 2)
                              , r = n[0]
                              , o = n[1];
                            this._setStorageSync(this._getKey(r), o)
                        }
                    } catch (i) {
                        t.e(i)
                    } finally {
                        t.f()
                    }
                    this.storageQueue.clear()
                } catch (p_) {
                    Es.warn("Storage._doFlush error", p_)
                }
            }
        }, {
            key: "_getPrefix",
            value: function() {
                var e = this.tim.loginInfo
                  , t = e.SDKAppID
                  , n = e.identifier;
                return "TIM_".concat(t, "_").concat(n, "_")
            }
        }, {
            key: "getItem",
            value: function(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                try {
                    var n = t ? this._getKey(e) : e;
                    return this._getStorageSync(n)
                } catch (p_) {
                    return Es.warn("Storage.getItem error:", p_),
                    {}
                }
            }
        }, {
            key: "setItem",
            value: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                  , r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                if (n) {
                    var o = r ? this._getKey(e) : e;
                    this._setStorageSync(o, t)
                } else
                    this.storageQueue.set(e, t)
            }
        }, {
            key: "clear",
            value: function() {
                try {
                    Ka ? Ha.clearStorageSync() : localStorage.clear()
                } catch (p_) {
                    Es.warn("Storage.clear error:", p_)
                }
            }
        }, {
            key: "removeItem",
            value: function(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                try {
                    var n = t ? this._getKey(e) : e;
                    this._removeStorageSync(n)
                } catch (p_) {
                    Es.warn("Storage.removeItem error:", p_)
                }
            }
        }, {
            key: "getSize",
            value: function(e) {
                var t = this
                  , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "b";
                try {
                    var r = {
                        size: 0,
                        limitSize: 5242880,
                        unit: n
                    };
                    if (Object.defineProperty(r, "leftSize", {
                        enumerable: !0,
                        get: function() {
                            return r.limitSize - r.size
                        }
                    }),
                    Ka && (r.limitSize = 1024 * Ha.getStorageInfoSync().limitSize),
                    e)
                        r.size = JSON.stringify(this.getItem(e)).length + this._getKey(e).length;
                    else if (Ka) {
                        var o = Ha.getStorageInfoSync()
                          , i = o.keys;
                        i.forEach((function(e) {
                            r.size += JSON.stringify(t._getStorageSync(e)).length + t._getKey(e).length
                        }
                        ))
                    } else
                        for (var a in localStorage)
                            localStorage.hasOwnProperty(a) && (r.size += localStorage.getItem(a).length + a.length);
                    return this._convertUnit(r)
                } catch (p_) {
                    Es.warn("Storage.getSize error:", p_)
                }
            }
        }, {
            key: "_convertUnit",
            value: function(e) {
                var t = {}
                  , n = e.unit;
                for (var r in t.unit = n,
                e)
                    "number" == typeof e[r] && ("kb" === n.toLowerCase() ? t[r] = Math.round(e[r] / 1024) : "mb" === n.toLowerCase() ? t[r] = Math.round(e[r] / 1024 / 1024) : t[r] = e[r]);
                return t
            }
        }, {
            key: "_getKey",
            value: function(e) {
                return "".concat(this._getPrefix()).concat(e)
            }
        }, {
            key: "_setStorageSync",
            value: function(e, t) {
                Ka ? Ba ? my.setStorageSync({
                    key: e,
                    data: t
                }) : Ha.setStorageSync(e, t) : localStorage.setItem(e, JSON.stringify(t))
            }
        }, {
            key: "_getStorageSync",
            value: function(e) {
                return Ka ? Ba ? my.getStorageSync({
                    key: e
                }).data : Ha.getStorageSync(e) : JSON.parse(localStorage.getItem(e))
            }
        }, {
            key: "_removeStorageSync",
            value: function(e) {
                Ka ? Ba ? my.removeStorageSync({
                    key: e
                }) : Ha.removeStorageSync(e) : localStorage.removeItem(e)
            }
        }, {
            key: "reset",
            value: function() {
                this._doFlush(),
                this.checkTimes = 0
            }
        }]),
        e
    }()
      , ky = t((function(e) {
        var t = Object.prototype.hasOwnProperty
          , n = "~";
        function r() {}
        function o(e, t, n) {
            this.fn = e,
            this.context = t,
            this.once = n || !1
        }
        function i(e, t, r, i, a) {
            if ("function" != typeof r)
                throw new TypeError("The listener must be a function");
            var s = new o(r,i || e,a)
              , u = n ? n + t : t;
            return e._events[u] ? e._events[u].fn ? e._events[u] = [e._events[u], s] : e._events[u].push(s) : (e._events[u] = s,
            e._eventsCount++),
            e
        }
        function a(e, t) {
            0 == --e._eventsCount ? e._events = new r : delete e._events[t]
        }
        function s() {
            this._events = new r,
            this._eventsCount = 0
        }
        Object.create && (r.prototype = Object.create(null),
        (new r).__proto__ || (n = !1)),
        s.prototype.eventNames = function() {
            var e, r, o = [];
            if (0 === this._eventsCount)
                return o;
            for (r in e = this._events)
                t.call(e, r) && o.push(n ? r.slice(1) : r);
            return Object.getOwnPropertySymbols ? o.concat(Object.getOwnPropertySymbols(e)) : o
        }
        ,
        s.prototype.listeners = function(e) {
            var t = n ? n + e : e
              , r = this._events[t];
            if (!r)
                return [];
            if (r.fn)
                return [r.fn];
            for (var o = 0, i = r.length, a = new Array(i); o < i; o++)
                a[o] = r[o].fn;
            return a
        }
        ,
        s.prototype.listenerCount = function(e) {
            var t = n ? n + e : e
              , r = this._events[t];
            return r ? r.fn ? 1 : r.length : 0
        }
        ,
        s.prototype.emit = function(e, t, r, o, i, a) {
            var s = n ? n + e : e;
            if (!this._events[s])
                return !1;
            var u, c, l = this._events[s], p = arguments.length;
            if (l.fn) {
                switch (l.once && this.removeListener(e, l.fn, void 0, !0),
                p) {
                case 1:
                    return l.fn.call(l.context),
                    !0;
                case 2:
                    return l.fn.call(l.context, t),
                    !0;
                case 3:
                    return l.fn.call(l.context, t, r),
                    !0;
                case 4:
                    return l.fn.call(l.context, t, r, o),
                    !0;
                case 5:
                    return l.fn.call(l.context, t, r, o, i),
                    !0;
                case 6:
                    return l.fn.call(l.context, t, r, o, i, a),
                    !0
                }
                for (c = 1,
                u = new Array(p - 1); c < p; c++)
                    u[c - 1] = arguments[c];
                l.fn.apply(l.context, u)
            } else {
                var f, h = l.length;
                for (c = 0; c < h; c++)
                    switch (l[c].once && this.removeListener(e, l[c].fn, void 0, !0),
                    p) {
                    case 1:
                        l[c].fn.call(l[c].context);
                        break;
                    case 2:
                        l[c].fn.call(l[c].context, t);
                        break;
                    case 3:
                        l[c].fn.call(l[c].context, t, r);
                        break;
                    case 4:
                        l[c].fn.call(l[c].context, t, r, o);
                        break;
                    default:
                        if (!u)
                            for (f = 1,
                            u = new Array(p - 1); f < p; f++)
                                u[f - 1] = arguments[f];
                        l[c].fn.apply(l[c].context, u)
                    }
            }
            return !0
        }
        ,
        s.prototype.on = function(e, t, n) {
            return i(this, e, t, n, !1)
        }
        ,
        s.prototype.once = function(e, t, n) {
            return i(this, e, t, n, !0)
        }
        ,
        s.prototype.removeListener = function(e, t, r, o) {
            var i = n ? n + e : e;
            if (!this._events[i])
                return this;
            if (!t)
                return a(this, i),
                this;
            var s = this._events[i];
            if (s.fn)
                s.fn !== t || o && !s.once || r && s.context !== r || a(this, i);
            else {
                for (var u = 0, c = [], l = s.length; u < l; u++)
                    (s[u].fn !== t || o && !s[u].once || r && s[u].context !== r) && c.push(s[u]);
                c.length ? this._events[i] = 1 === c.length ? c[0] : c : a(this, i)
            }
            return this
        }
        ,
        s.prototype.removeAllListeners = function(e) {
            var t;
            return e ? (t = n ? n + e : e,
            this._events[t] && a(this, t)) : (this._events = new r,
            this._eventsCount = 0),
            this
        }
        ,
        s.prototype.off = s.prototype.removeListener,
        s.prototype.addListener = s.prototype.on,
        s.prefixed = n,
        s.EventEmitter = s,
        e.exports = s
    }
    ));
    function Oy(e) {
        var t = e.context || null;
        return {
            platform: gh,
            websdkappid: dh,
            v: hh,
            a2: t && t.a2Key || void 0,
            tinyid: t && t.tinyID || void 0,
            sdkappid: t && t.SDKAppID || 0,
            contentType: t && t.contentType || 0,
            apn: t && t.apn || 1,
            accounttype: t && t.accountType || 0
        }
    }
    var Ry = function() {
        function e(t) {
            bn(this, e),
            this.tim = t,
            this.tim.innerEmitter.on(Sh, this._update, this),
            this.tim.innerEmitter.on(Th, this._update, this),
            this.tim.innerEmitter.on(kh, this._updateSpecifiedConfig, this),
            this._initConfig()
        }
        return Gn(e, [{
            key: "_update",
            value: function(e) {
                this._initConfig()
            }
        }, {
            key: "_updateSpecifiedConfig",
            value: function(e) {
                var t = this;
                e.data.forEach((function(e) {
                    t._set(e)
                }
                ))
            }
        }, {
            key: "get",
            value: function(e) {
                var t = e.name
                  , n = e.action
                  , r = e.param
                  , o = e.tjgID;
                if (As(this.config[t]) || As(this.config[t][n]))
                    throw new Bp({
                        code: Kp.NETWORK_PACKAGE_UNDEFINED,
                        message: "".concat(Bf, ": PackageConfig.").concat(t)
                    });
                var i = function e(t) {
                    if (0 === Object.getOwnPropertyNames(t).length)
                        return Object.create(null);
                    var n = Array.isArray(t) ? [] : Object.create(null)
                      , r = "";
                    for (var o in t)
                        null !== t[o] ? void 0 !== t[o] ? (r = wn(t[o]),
                        ["string", "number", "function", "boolean"].indexOf(r) >= 0 ? n[o] = t[o] : n[o] = e(t[o])) : n[o] = void 0 : n[o] = null;
                    return n
                }(this.config[t][n]);
                return i.requestData = this._initRequestData(r, i),
                i.encode = this._initEncoder(i),
                i.decode = this._initDecoder(i),
                o && (i.queryString.tjg_id = o),
                i
            }
        }, {
            key: "_set",
            value: function(e) {
                var t = e.key
                  , n = e.value;
                if (!1 != !!t) {
                    var r = t.split(".");
                    if (!(r.length <= 0)) {
                        !function e(t, n, r, o) {
                            var i = n[r];
                            "object" === wn(t[i]) ? e(t[i], n, r + 1, o) : t[i] = o
                        }(this.config, r, 0, n)
                    }
                }
            }
        }, {
            key: "_initConfig",
            value: function() {
                var e;
                this.config = {},
                this.config.accessLayer = (e = this.tim,
                {
                    create: null,
                    query: {
                        serverName: Ch.NAME.WEB_IM,
                        cmd: Ch.CMD.ACCESS_LAYER,
                        channel: Ch.CHANNEL.XHR,
                        protocol: vh,
                        method: "POST",
                        queryString: qn(qn({}, Oy(e)), {}, {
                            identifier: e.context.identifier,
                            usersig: e.context.userSig
                        }),
                        requestData: {}
                    },
                    update: null,
                    delete: null
                }),
                this.config.login = function(e) {
                    return {
                        create: null,
                        query: {
                            serverName: Ch.NAME.OPEN_IM,
                            cmd: Ch.CMD.LOGIN,
                            channel: Ch.CHANNEL.XHR,
                            protocol: vh,
                            method: "POST",
                            queryString: qn(qn({}, Oy(e)), {}, {
                                identifier: e.loginInfo.identifier,
                                usersig: e.loginInfo.userSig,
                                sdkappid: e.loginInfo.SDKAppID,
                                accounttype: e.loginInfo.accountType,
                                reqtime: +new Date / 1e3
                            }),
                            requestData: {
                                state: "Online"
                            },
                            keyMaps: {
                                request: {
                                    tinyID: "tinyId"
                                },
                                response: {
                                    TinyId: "tinyID"
                                }
                            }
                        },
                        update: null,
                        delete: null
                    }
                }(this.tim),
                this.config.logout = function(e) {
                    return {
                        create: null,
                        query: {
                            serverName: Ch.NAME.OPEN_IM,
                            cmd: Ch.CMD.LOGOUT_ALL,
                            channel: Ch.CHANNEL.XHR,
                            protocol: vh,
                            method: "POST",
                            queryString: qn(qn({}, Oy(e)), {}, {
                                reqtime: +new Date / 1e3
                            }),
                            requestData: {}
                        },
                        update: null,
                        delete: null
                    }
                }(this.tim),
                this.config.longPollLogout = function(e) {
                    return {
                        create: null,
                        query: {
                            serverName: Ch.NAME.OPEN_IM,
                            cmd: Ch.CMD.LOGOUT_LONG_POLL,
                            channel: Ch.CHANNEL.XHR,
                            protocol: vh,
                            method: "POST",
                            queryString: qn(qn({}, Oy(e)), {}, {
                                reqtime: +new Date
                            }),
                            requestData: {
                                longPollID: ""
                            },
                            keyMaps: {
                                request: {
                                    longPollID: "LongPollingId"
                                }
                            }
                        },
                        update: null,
                        delete: null
                    }
                }(this.tim),
                this.config.profile = function(e) {
                    var t = Oy(e)
                      , n = {
                        serverName: Ch.NAME.PROFILE,
                        channel: Ch.CHANNEL.XHR,
                        protocol: vh,
                        method: "POST",
                        queryString: t
                    };
                    return {
                        query: qn(qn({}, n), {}, {
                            cmd: Ch.CMD.PORTRAIT_GET,
                            requestData: {
                                fromAccount: "",
                                userItem: []
                            },
                            keyMaps: {
                                request: {
                                    toAccount: "To_Account",
                                    standardSequence: "StandardSequence",
                                    customSequence: "CustomSequence"
                                }
                            }
                        }),
                        update: qn(qn({}, n), {}, {
                            cmd: Ch.CMD.PORTRAIT_SET,
                            requestData: {
                                fromAccount: "",
                                profileItem: [{
                                    tag: Cp.NICK,
                                    value: ""
                                }, {
                                    tag: Cp.GENDER,
                                    value: ""
                                }, {
                                    tag: Cp.ALLOWTYPE,
                                    value: ""
                                }, {
                                    tag: Cp.AVATAR,
                                    value: ""
                                }]
                            }
                        })
                    }
                }(this.tim),
                this.config.group = function(e) {
                    var t = e.context.login === Zu.IS_LOGIN || e.context.a2Key ? Ch.NAME.GROUP : Ch.NAME.BIG_GROUP_NO_AUTH
                      , n = Oy(e)
                      , r = {
                        request: {
                            ownerID: "Owner_Account",
                            userID: "Member_Account",
                            newOwnerID: "NewOwner_Account",
                            maxMemberNum: "MaxMemberCount",
                            groupCustomField: "AppDefinedData",
                            memberCustomField: "AppMemberDefinedData",
                            groupCustomFieldFilter: "AppDefinedDataFilter_Group",
                            memberCustomFieldFilter: "AppDefinedDataFilter_GroupMember",
                            messageRemindType: "MsgFlag",
                            userIDList: "MemberList",
                            groupIDList: "GroupIdList",
                            applyMessage: "ApplyMsg",
                            muteTime: "ShutUpTime",
                            muteAllMembers: "ShutUpAllMember",
                            joinOption: "ApplyJoinOption"
                        },
                        response: {
                            GroupIdList: "groups",
                            MsgFlag: "messageRemindType",
                            AppDefinedData: "groupCustomField",
                            AppMemberDefinedData: "memberCustomField",
                            AppDefinedDataFilter_Group: "groupCustomFieldFilter",
                            AppDefinedDataFilter_GroupMember: "memberCustomFieldFilter",
                            InfoSeq: "infoSequence",
                            MemberList: "members",
                            GroupInfo: "groups",
                            ShutUpUntil: "muteUntil",
                            ShutUpAllMember: "muteAllMembers",
                            ApplyJoinOption: "joinOption"
                        }
                    }
                      , o = {
                        serverName: Ch.NAME.GROUP,
                        channel: Ch.CHANNEL.XHR,
                        protocol: vh,
                        queryString: n
                    };
                    return {
                        create: qn(qn({}, o), {}, {
                            cmd: Ch.CMD.CREATE_GROUP,
                            requestData: {
                                type: En.GRP_WORK,
                                name: void 0,
                                groupID: void 0,
                                ownerID: e.loginInfo.identifier,
                                introduction: void 0,
                                notification: void 0,
                                avatar: void 0,
                                maxMemberNum: void 0,
                                joinOption: void 0,
                                memberList: void 0,
                                groupCustomField: void 0
                            },
                            keyMaps: r
                        }),
                        list: qn(qn({}, o), {}, {
                            cmd: Ch.CMD.GET_JOINED_GROUPS,
                            requestData: {
                                userID: e.loginInfo.identifier,
                                limit: void 0,
                                offset: void 0,
                                groupType: void 0,
                                responseFilter: void 0
                            },
                            keyMaps: r
                        }),
                        query: qn(qn({}, o), {}, {
                            cmd: Ch.CMD.GET_GROUP_INFO,
                            requestData: {
                                groupIDList: void 0,
                                responseFilter: void 0
                            },
                            keyMaps: r
                        }),
                        getGroupMemberProfile: qn(qn({}, o), {}, {
                            cmd: Ch.CMD.GET_GROUP_MEMBER_INFO,
                            requestData: {
                                groupID: void 0,
                                userIDList: void 0,
                                memberInfoFilter: void 0,
                                memberCustomFieldFilter: void 0
                            },
                            keyMaps: {
                                request: qn(qn({}, r.request), {}, {
                                    userIDList: "Member_List_Account"
                                }),
                                response: r.response
                            }
                        }),
                        getGroupMemberList: qn(qn({}, o), {}, {
                            cmd: Ch.CMD.GET_GROUP_MEMBER_LIST,
                            requestData: {
                                groupID: void 0,
                                limit: 0,
                                offset: 0,
                                memberRoleFilter: void 0,
                                memberInfoFilter: void 0
                            },
                            keyMaps: r
                        }),
                        quitGroup: qn(qn({}, o), {}, {
                            cmd: Ch.CMD.QUIT_GROUP,
                            requestData: {
                                groupID: void 0
                            }
                        }),
                        changeGroupOwner: qn(qn({}, o), {}, {
                            cmd: Ch.CMD.CHANGE_GROUP_OWNER,
                            queryString: n,
                            requestData: {
                                groupID: void 0,
                                newOwnerID: void 0
                            },
                            keyMaps: r
                        }),
                        destroyGroup: qn(qn({}, o), {}, {
                            cmd: Ch.CMD.DESTROY_GROUP,
                            requestData: {
                                groupID: void 0
                            }
                        }),
                        updateGroupProfile: qn(qn({}, o), {}, {
                            cmd: Ch.CMD.MODIFY_GROUP_INFO,
                            requestData: {
                                groupID: void 0,
                                name: void 0,
                                introduction: void 0,
                                notification: void 0,
                                avatar: void 0,
                                maxMemberNum: void 0,
                                joinOption: void 0,
                                groupCustomField: void 0,
                                muteAllMembers: void 0
                            },
                            keyMaps: {
                                request: qn(qn({}, r.request), {}, {
                                    groupCustomField: "AppDefinedData"
                                }),
                                response: r.response
                            }
                        }),
                        modifyGroupMemberInfo: qn(qn({}, o), {}, {
                            cmd: Ch.CMD.MODIFY_GROUP_MEMBER_INFO,
                            requestData: {
                                groupID: void 0,
                                userID: void 0,
                                messageRemindType: void 0,
                                nameCard: void 0,
                                role: void 0,
                                memberCustomField: void 0,
                                muteTime: void 0
                            },
                            keyMaps: r
                        }),
                        addGroupMember: qn(qn({}, o), {}, {
                            cmd: Ch.CMD.ADD_GROUP_MEMBER,
                            requestData: {
                                groupID: void 0,
                                silence: void 0,
                                userIDList: void 0
                            },
                            keyMaps: r
                        }),
                        deleteGroupMember: qn(qn({}, o), {}, {
                            cmd: Ch.CMD.DELETE_GROUP_MEMBER,
                            requestData: {
                                groupID: void 0,
                                userIDList: void 0,
                                reason: void 0
                            },
                            keyMaps: {
                                request: {
                                    userIDList: "MemberToDel_Account"
                                }
                            }
                        }),
                        searchGroupByID: qn(qn({}, o), {}, {
                            cmd: Ch.CMD.SEARCH_GROUP_BY_ID,
                            requestData: {
                                groupIDList: void 0,
                                responseFilter: {
                                    groupBasePublicInfoFilter: ["Type", "Name", "Introduction", "Notification", "FaceUrl", "CreateTime", "Owner_Account", "LastInfoTime", "LastMsgTime", "NextMsgSeq", "MemberNum", "MaxMemberNum", "ApplyJoinOption"]
                                }
                            },
                            keyMaps: {
                                request: {
                                    groupIDList: "GroupIdList"
                                }
                            }
                        }),
                        applyJoinGroup: qn(qn({}, o), {}, {
                            cmd: Ch.CMD.APPLY_JOIN_GROUP,
                            requestData: {
                                groupID: void 0,
                                applyMessage: void 0,
                                userDefinedField: void 0
                            },
                            keyMaps: r
                        }),
                        applyJoinAVChatRoom: qn(qn({}, o), {}, {
                            serverName: Ch.NAME.BIG_GROUP_NO_AUTH,
                            cmd: Ch.CMD.APPLY_JOIN_GROUP,
                            requestData: {
                                groupID: void 0,
                                applyMessage: void 0,
                                userDefinedField: void 0
                            },
                            keyMaps: r
                        }),
                        handleApplyJoinGroup: qn(qn({}, o), {}, {
                            cmd: Ch.CMD.HANDLE_APPLY_JOIN_GROUP,
                            requestData: {
                                groupID: void 0,
                                applicant: void 0,
                                handleAction: void 0,
                                handleMessage: void 0,
                                authentication: void 0,
                                messageKey: void 0,
                                userDefinedField: void 0
                            },
                            keyMaps: {
                                request: {
                                    applicant: "Applicant_Account",
                                    handleAction: "HandleMsg",
                                    handleMessage: "ApprovalMsg",
                                    messageKey: "MsgKey"
                                },
                                response: {
                                    MsgKey: "messageKey"
                                }
                            }
                        }),
                        deleteGroupSystemNotice: qn(qn({}, o), {}, {
                            serverName: Ch.NAME.OPEN_IM,
                            cmd: Ch.CMD.DELETE_GROUP_SYSTEM_MESSAGE,
                            requestData: {
                                messageListToDelete: void 0
                            },
                            keyMaps: {
                                request: {
                                    messageListToDelete: "DelMsgList",
                                    messageSeq: "MsgSeq",
                                    messageRandom: "MsgRandom"
                                }
                            }
                        }),
                        getGroupPendency: qn(qn({}, o), {}, {
                            cmd: Ch.CMD.GET_GROUP_PENDENCY,
                            requestData: {
                                startTime: void 0,
                                limit: void 0,
                                handleAccount: void 0
                            },
                            keyMaps: {
                                request: {
                                    handleAccount: "Handle_Account"
                                }
                            }
                        }),
                        getOnlineMemberNum: {
                            serverName: t,
                            cmd: Ch.CMD.GET_ONLINE_MEMBER_NUM,
                            channel: Ch.CHANNEL.XHR,
                            protocol: vh,
                            queryString: n,
                            requestData: {
                                groupID: void 0
                            }
                        }
                    }
                }(this.tim),
                this.config.longPollID = function(e) {
                    return {
                        create: {},
                        query: {
                            serverName: Ch.NAME.OPEN_IM,
                            cmd: Ch.CMD.GET_LONG_POLL_ID,
                            channel: Ch.CHANNEL.XHR,
                            protocol: vh,
                            queryString: qn(qn({}, Oy(e)), {}, {
                                reqtime: +new Date / 1e3
                            }),
                            requestData: {},
                            keyMaps: {
                                response: {
                                    LongPollingId: "longPollingID"
                                }
                            }
                        },
                        update: {},
                        delete: {}
                    }
                }(this.tim),
                this.config.longPoll = function(e) {
                    var t = qn(qn({}, Oy(e)), {}, {
                        reqtime: Math.ceil(+new Date / 1e3)
                    });
                    return {
                        create: {},
                        query: {
                            serverName: Ch.NAME.OPEN_IM,
                            cmd: Ch.CMD.LONG_POLL,
                            channel: Ch.CHANNEL.AUTO,
                            protocol: vh,
                            queryString: t,
                            requestData: {
                                timeout: null,
                                cookie: {
                                    notifySeq: 0,
                                    noticeSeq: 0,
                                    longPollingID: 0
                                }
                            },
                            keyMaps: {
                                response: {
                                    C2cMsgArray: "C2CMessageArray",
                                    GroupMsgArray: "groupMessageArray",
                                    GroupTips: "groupTips",
                                    C2cNotifyMsgArray: "C2CNotifyMessageArray",
                                    ClientSeq: "clientSequence",
                                    MsgPriority: "priority",
                                    NoticeSeq: "noticeSequence",
                                    MsgContent: "content",
                                    MsgType: "type",
                                    MsgBody: "elements",
                                    ToGroupId: "to",
                                    Desc: "description",
                                    Ext: "extension"
                                }
                            }
                        },
                        update: {},
                        delete: {}
                    }
                }(this.tim),
                this.config.applyC2C = function(e) {
                    var t = Oy(e)
                      , n = {
                        serverName: Ch.NAME.FRIEND,
                        channel: Ch.CHANNEL.XHR,
                        protocol: vh,
                        queryString: t
                    };
                    return {
                        create: qn(qn({}, n), {}, {
                            cmd: Ch.CMD.FRIEND_ADD,
                            requestData: {
                                fromAccount: "",
                                addFriendItem: []
                            }
                        }),
                        get: qn(qn({}, n), {}, {
                            cmd: Ch.CMD.GET_PENDENCY,
                            requestData: {
                                fromAccount: "",
                                pendencyType: "Pendency_Type_ComeIn"
                            }
                        }),
                        update: qn(qn({}, n), {}, {
                            cmd: Ch.CMD.RESPONSE_PENDENCY,
                            requestData: {
                                fromAccount: "",
                                responseFriendItem: []
                            }
                        }),
                        delete: qn(qn({}, n), {}, {
                            cmd: Ch.CMD.DELETE_PENDENCY,
                            requestData: {
                                fromAccount: "",
                                toAccount: [],
                                pendencyType: "Pendency_Type_ComeIn"
                            }
                        })
                    }
                }(this.tim),
                this.config.friend = function(e) {
                    var t = qn(qn({}, Oy(e)), {}, {
                        reqtime: function() {
                            return +new Date
                        }
                    })
                      , n = {
                        serverName: Ch.NAME.FRIEND,
                        channel: Ch.CHANNEL.XHR,
                        protocol: vh,
                        method: "POST",
                        queryString: t
                    };
                    return {
                        get: qn(qn({}, n), {}, {
                            cmd: Ch.CMD.FRIEND_GET_ALL,
                            requestData: {
                                fromAccount: "",
                                timeStamp: 0,
                                tagList: [Cp.NICK, "Tag_SNS_IM_Remark", Cp.AVATAR]
                            },
                            keyMaps: {
                                request: {},
                                response: {}
                            }
                        }),
                        delete: qn(qn({}, n), {}, {
                            cmd: Ch.CMD.FRIEND_DELETE,
                            requestData: {
                                fromAccount: "",
                                toAccount: [],
                                deleteType: "Delete_Type_Single"
                            }
                        })
                    }
                }(this.tim),
                this.config.blacklist = function(e) {
                    var t = Oy(e)
                      , n = {
                        serverName: Ch.NAME.FRIEND,
                        channel: Ch.CHANNEL.XHR,
                        protocol: vh,
                        method: "POST",
                        queryString: t
                    };
                    return {
                        create: qn(qn({}, n), {}, {
                            cmd: Ch.CMD.ADD_BLACKLIST,
                            requestData: {
                                fromAccount: "",
                                toAccount: []
                            }
                        }),
                        get: qn(qn({}, n), {}, {
                            cmd: Ch.CMD.GET_BLACKLIST,
                            requestData: {
                                fromAccount: "",
                                startIndex: 0,
                                maxLimited: 30,
                                lastSequence: 0
                            }
                        }),
                        delete: qn(qn({}, n), {}, {
                            cmd: Ch.CMD.DELETE_BLACKLIST,
                            requestData: {
                                fromAccount: "",
                                toAccount: []
                            }
                        }),
                        update: {}
                    }
                }(this.tim),
                this.config.c2cMessage = function(e) {
                    var t = qn(qn({}, Oy(e)), {}, {
                        reqtime: function() {
                            return +new Date
                        }
                    })
                      , n = {
                        request: {
                            fromAccount: "From_Account",
                            toAccount: "To_Account",
                            msgTimeStamp: "MsgTimeStamp",
                            msgSeq: "MsgSeq",
                            msgRandom: "MsgRandom",
                            msgBody: "MsgBody",
                            count: "MaxCnt",
                            lastMessageTime: "LastMsgTime",
                            messageKey: "MsgKey",
                            peerAccount: "Peer_Account",
                            data: "Data",
                            description: "Desc",
                            extension: "Ext",
                            type: "MsgType",
                            content: "MsgContent",
                            sizeType: "Type",
                            uuid: "UUID",
                            imageUrl: "URL",
                            fileUrl: "Url",
                            remoteAudioUrl: "Url",
                            remoteVideoUrl: "VideoUrl",
                            thumbUUID: "ThumbUUID",
                            videoUUID: "VideoUUID",
                            videoUrl: "",
                            downloadFlag: "Download_Flag"
                        },
                        response: {
                            MsgContent: "content",
                            MsgTime: "time",
                            Data: "data",
                            Desc: "description",
                            Ext: "extension",
                            MsgKey: "messageKey",
                            MsgType: "type",
                            MsgBody: "elements",
                            Download_Flag: "downloadFlag",
                            ThumbUUID: "thumbUUID",
                            VideoUUID: "videoUUID"
                        }
                    }
                      , r = {
                        serverName: Ch.NAME.OPEN_IM,
                        channel: Ch.CHANNEL.XHR,
                        protocol: vh,
                        method: "POST",
                        queryString: t
                    };
                    return {
                        create: qn(qn({}, r), {}, {
                            cmd: Ch.CMD.SEND_MESSAGE,
                            requestData: {
                                fromAccount: e.loginInfo.identifier,
                                toAccount: "",
                                msgTimeStamp: Math.ceil(+new Date / 1e3),
                                msgSeq: 0,
                                msgRandom: 0,
                                msgBody: [],
                                msgLifeTime: void 0,
                                offlinePushInfo: {
                                    pushFlag: 0,
                                    title: "",
                                    desc: "",
                                    ext: "",
                                    apnsInfo: {
                                        badgeMode: 0
                                    },
                                    androidInfo: {
                                        OPPOChannelID: ""
                                    }
                                }
                            },
                            keyMaps: n
                        }),
                        query: qn(qn({}, r), {}, {
                            cmd: Ch.CMD.GET_C2C_ROAM_MESSAGES,
                            requestData: {
                                peerAccount: "",
                                count: 15,
                                lastMessageTime: 0,
                                messageKey: "",
                                withRecalledMsg: 1
                            },
                            keyMaps: n
                        })
                    }
                }(this.tim),
                this.config.c2cMessageWillBeRevoked = function(e) {
                    var t = qn(qn({}, Oy(e)), {}, {
                        reqtime: function() {
                            return +new Date
                        }
                    });
                    return {
                        create: {
                            serverName: Ch.NAME.OPEN_IM,
                            cmd: Ch.CMD.REVOKE_C2C_MESSAGE,
                            channel: Ch.CHANNEL.XHR,
                            protocol: vh,
                            method: "POST",
                            queryString: t,
                            requestData: {
                                msgInfo: {
                                    fromAccount: "",
                                    toAccount: "",
                                    msgTimeStamp: Math.ceil(+new Date / 1e3),
                                    msgSeq: 0,
                                    msgRandom: 0
                                }
                            },
                            keyMaps: {
                                request: {
                                    msgInfo: "MsgInfo",
                                    fromAccount: "From_Account",
                                    toAccount: "To_Account",
                                    msgTimeStamp: "MsgTimeStamp",
                                    msgSeq: "MsgSeq",
                                    msgRandom: "MsgRandom",
                                    msgBody: "MsgBody"
                                }
                            }
                        }
                    }
                }(this.tim),
                this.config.c2cPeerReadTime = function(e) {
                    var t = qn(qn({}, Oy(e)), {}, {
                        reqtime: function() {
                            return +new Date
                        }
                    });
                    return {
                        get: {
                            serverName: Ch.NAME.OPEN_IM,
                            cmd: Ch.CMD.GET_PEER_READ_TIME,
                            channel: Ch.CHANNEL.XHR,
                            protocol: vh,
                            method: "POST",
                            queryString: t,
                            requestData: {
                                userIDList: void 0
                            },
                            keyMaps: {
                                request: {
                                    userIDList: "To_Account"
                                },
                                response: {
                                    ReadTime: "peerReadTimeList"
                                }
                            }
                        }
                    }
                }(this.tim),
                this.config.groupMessage = function(e) {
                    var t = qn(qn({}, Oy(e)), {}, {
                        reqtime: function() {
                            return +new Date
                        }
                    })
                      , n = {
                        request: {
                            to: "GroupId",
                            extension: "Ext",
                            data: "Data",
                            description: "Desc",
                            random: "Random",
                            sequence: "ReqMsgSeq",
                            count: "ReqMsgNumber",
                            type: "MsgType",
                            priority: "MsgPriority",
                            content: "MsgContent",
                            elements: "MsgBody",
                            sizeType: "Type",
                            uuid: "UUID",
                            imageUrl: "URL",
                            fileUrl: "Url",
                            remoteAudioUrl: "Url",
                            remoteVideoUrl: "VideoUrl",
                            thumbUUID: "ThumbUUID",
                            videoUUID: "VideoUUID",
                            videoUrl: "",
                            downloadFlag: "Download_Flag",
                            clientSequence: "ClientSeq"
                        },
                        response: {
                            Random: "random",
                            MsgTime: "time",
                            MsgSeq: "sequence",
                            ReqMsgSeq: "sequence",
                            RspMsgList: "messageList",
                            IsPlaceMsg: "isPlaceMessage",
                            IsSystemMsg: "isSystemMessage",
                            ToGroupId: "to",
                            EnumFrom_AccountType: "fromAccountType",
                            EnumTo_AccountType: "toAccountType",
                            GroupCode: "groupCode",
                            MsgPriority: "priority",
                            MsgBody: "elements",
                            MsgType: "type",
                            MsgContent: "content",
                            IsFinished: "complete",
                            Download_Flag: "downloadFlag",
                            ClientSeq: "clientSequence",
                            ThumbUUID: "thumbUUID",
                            VideoUUID: "videoUUID"
                        }
                    }
                      , r = {
                        serverName: Ch.NAME.GROUP,
                        channel: Ch.CHANNEL.XHR,
                        protocol: vh,
                        method: "POST",
                        queryString: t
                    };
                    return {
                        create: qn(qn({}, r), {}, {
                            cmd: Ch.CMD.SEND_GROUP_MESSAGE,
                            requestData: {
                                groupID: "",
                                fromAccount: e.loginInfo.identifier,
                                random: 0,
                                clientSequence: 0,
                                priority: "",
                                msgBody: [],
                                onlineOnlyFlag: 0,
                                offlinePushInfo: {
                                    pushFlag: 0,
                                    title: "",
                                    desc: "",
                                    ext: "",
                                    apnsInfo: {
                                        badgeMode: 0
                                    },
                                    androidInfo: {
                                        OPPOChannelID: ""
                                    }
                                }
                            },
                            keyMaps: n
                        }),
                        query: qn(qn({}, r), {}, {
                            cmd: Ch.CMD.GET_GROUP_ROAM_MESSAGES,
                            requestData: {
                                withRecalledMsg: 1,
                                groupID: "",
                                count: 15,
                                sequence: ""
                            },
                            keyMaps: n
                        }),
                        update: null,
                        delete: null
                    }
                }(this.tim),
                this.config.groupMessageWillBeRevoked = function(e) {
                    var t = qn(qn({}, Oy(e)), {}, {
                        reqtime: function() {
                            return +new Date
                        }
                    });
                    return {
                        create: {
                            serverName: Ch.NAME.GROUP,
                            cmd: Ch.CMD.REVOKE_GROUP_MESSAGE,
                            channel: Ch.CHANNEL.XHR,
                            protocol: vh,
                            method: "POST",
                            queryString: t,
                            requestData: {
                                to: "",
                                msgSeqList: []
                            },
                            keyMaps: {
                                request: {
                                    to: "GroupId",
                                    msgSeqList: "MsgSeqList",
                                    msgSeq: "MsgSeq"
                                }
                            }
                        }
                    }
                }(this.tim),
                this.config.conversation = function(e) {
                    var t = Oy(e)
                      , n = {
                        serverName: Ch.NAME.RECENT_CONTACT,
                        channel: Ch.CHANNEL.XHR,
                        protocol: vh,
                        method: "POST",
                        queryString: t
                    };
                    return {
                        query: qn(qn({}, n), {}, {
                            cmd: Ch.CMD.GET_CONVERSATION_LIST,
                            requestData: {
                                fromAccount: e.loginInfo.identifier,
                                count: 0
                            },
                            keyMaps: {
                                request: {},
                                response: {
                                    SessionItem: "conversations",
                                    ToAccount: "groupID",
                                    To_Account: "userID",
                                    UnreadMsgCount: "unreadCount",
                                    MsgGroupReadedSeq: "messageReadSeq"
                                }
                            }
                        }),
                        pagingQuery: qn(qn({}, n), {}, {
                            cmd: Ch.CMD.PAGING_GET_CONVERSATION_LIST,
                            requestData: {
                                fromAccount: void 0,
                                timeStamp: void 0,
                                orderType: void 0
                            },
                            keyMaps: {
                                request: {},
                                response: {
                                    SessionItem: "conversations",
                                    ToAccount: "groupID",
                                    To_Account: "userID",
                                    UnreadMsgCount: "unreadCount",
                                    MsgGroupReadedSeq: "messageReadSeq",
                                    C2cPeerReadTime: "c2cPeerReadTime"
                                }
                            }
                        }),
                        delete: qn(qn({}, n), {}, {
                            cmd: Ch.CMD.DELETE_CONVERSATION,
                            requestData: {
                                fromAccount: e.loginInfo.identifier,
                                toAccount: void 0,
                                type: 1,
                                toGroupID: void 0
                            },
                            keyMaps: {
                                request: {
                                    toGroupID: "ToGroupid"
                                }
                            }
                        }),
                        setC2CMessageRead: qn(qn({}, n), {}, {
                            serverName: Ch.NAME.OPEN_IM,
                            cmd: Ch.CMD.SET_C2C_MESSAGE_READ,
                            requestData: {
                                C2CMsgReaded: void 0
                            },
                            keyMaps: {
                                request: {
                                    lastMessageTime: "LastedMsgTime"
                                }
                            }
                        }),
                        setGroupMessageRead: qn(qn({}, n), {}, {
                            serverName: Ch.NAME.GROUP,
                            cmd: Ch.CMD.SET_GROUP_MESSAGE_READ,
                            requestData: {
                                groupID: void 0,
                                messageReadSeq: void 0
                            },
                            keyMaps: {
                                request: {
                                    messageReadSeq: "MsgReadedSeq"
                                }
                            }
                        })
                    }
                }(this.tim),
                this.config.syncMessage = function(e) {
                    var t = qn(qn({}, Oy(e)), {}, {
                        reqtime: function() {
                            return [Math.ceil(+new Date), Math.random()].join("")
                        }
                    });
                    return {
                        create: null,
                        query: {
                            serverName: Ch.NAME.OPEN_IM,
                            cmd: Ch.CMD.GET_MESSAGES,
                            channel: Ch.CHANNEL.XHR,
                            protocol: vh,
                            method: "POST",
                            queryString: t,
                            requestData: {
                                cookie: "",
                                syncFlag: 0,
                                needAbstract: 1
                            },
                            keyMaps: {
                                request: {
                                    fromAccount: "From_Account",
                                    toAccount: "To_Account",
                                    from: "From_Account",
                                    to: "To_Account",
                                    time: "MsgTimeStamp",
                                    sequence: "MsgSeq",
                                    random: "MsgRandom",
                                    elements: "MsgBody"
                                },
                                response: {
                                    MsgList: "messageList",
                                    SyncFlag: "syncFlag",
                                    To_Account: "to",
                                    From_Account: "from",
                                    ClientSeq: "clientSequence",
                                    MsgSeq: "sequence",
                                    NoticeSeq: "noticeSequence",
                                    NotifySeq: "notifySequence",
                                    MsgRandom: "random",
                                    MsgTimeStamp: "time",
                                    MsgContent: "content",
                                    ToGroupId: "groupID",
                                    MsgKey: "messageKey",
                                    GroupTips: "groupTips",
                                    MsgBody: "elements",
                                    MsgType: "type",
                                    C2CRemainingUnreadCount: "C2CRemainingUnreadList"
                                }
                            }
                        },
                        update: null,
                        delete: null
                    }
                }(this.tim),
                this.config.AVChatRoom = function(e) {
                    var t = Ch.NAME.BIG_GROUP_LONG_POLLING_NO_AUTH
                      , n = qn(qn({}, Oy(e)), {}, {
                        accounttype: "792",
                        reqtime: function() {
                            return +new Date
                        }
                    });
                    return (e.context.login === Zu.IS_LOGIN || e.context.a2Key) && (t = Ch.NAME.BIG_GROUP_LONG_POLLING),
                    {
                        startLongPoll: {
                            serverName: t,
                            cmd: Ch.CMD.AVCHATROOM_LONG_POLL,
                            channel: Ch.CHANNEL.XHR,
                            protocol: vh,
                            method: "POST",
                            queryString: n,
                            requestData: {
                                USP: 1,
                                startSeq: 1,
                                holdTime: 90,
                                key: void 0
                            },
                            keyMaps: {
                                request: {
                                    USP: "USP"
                                },
                                response: {
                                    ToGroupId: "groupID",
                                    MsgPriority: "priority"
                                }
                            }
                        }
                    }
                }(this.tim),
                this.config.cosUpload = function(e) {
                    var t = qn(qn({}, Oy(e)), {}, {
                        reqtime: function() {
                            return +new Date
                        }
                    });
                    return {
                        create: {
                            serverName: Ch.NAME.OPEN_IM,
                            cmd: Ch.CMD.FILE_UPLOAD,
                            channel: Ch.CHANNEL.XHR,
                            protocol: vh,
                            method: "POST",
                            queryString: t,
                            requestData: {
                                appVersion: "2.1",
                                fromAccount: "",
                                toAccount: "",
                                sequence: 0,
                                time: function() {
                                    return Math.ceil(Date.now() / 1e3)
                                },
                                random: function() {
                                    return Vs()
                                },
                                fileStrMd5: "",
                                fileSize: "",
                                serverVer: 1,
                                authKey: "",
                                busiId: 1,
                                pkgFlag: 1,
                                sliceOffset: 0,
                                sliceSize: 0,
                                sliceData: "",
                                contentType: "application/x-www-form-urlencoded"
                            },
                            keyMaps: {
                                request: {},
                                response: {}
                            }
                        },
                        update: null,
                        delete: null
                    }
                }(this.tim),
                this.config.cosSig = function(e) {
                    var t = {
                        sdkappid: e.loginInfo.SDKAppID,
                        identifier: e.loginInfo.identifier,
                        userSig: e.context.userSig
                    };
                    return {
                        create: null,
                        query: {
                            serverName: Ch.NAME.IM_COS_SIGN,
                            cmd: Ch.CMD.COS_SIGN,
                            channel: Ch.CHANNEL.XHR,
                            protocol: vh,
                            method: "POST",
                            queryString: t,
                            requestData: {
                                cmd: "open_im_cos_svc",
                                subCmd: "get_cos_token",
                                duration: 300,
                                version: 2
                            },
                            keyMaps: {
                                request: {
                                    userSig: "usersig",
                                    subCmd: "sub_cmd",
                                    cmd: "cmd",
                                    duration: "duration",
                                    version: "version"
                                },
                                response: {
                                    expired_time: "expiredTime",
                                    bucket_name: "bucketName",
                                    session_token: "sessionToken",
                                    tmp_secret_id: "secretId",
                                    tmp_secret_key: "secretKey"
                                }
                            }
                        },
                        update: null,
                        delete: null
                    }
                }(this.tim),
                this.config.bigDataHallwayAuthKey = function(e) {
                    return {
                        create: null,
                        query: {
                            serverName: Ch.NAME.OPEN_IM,
                            cmd: Ch.CMD.BIG_DATA_HALLWAY_AUTH_KEY,
                            channel: Ch.CHANNEL.XHR,
                            protocol: vh,
                            method: "POST",
                            queryString: qn(qn({}, Oy(e)), {}, {
                                accounttype: "792",
                                reqtime: function() {
                                    return +new Date
                                }
                            }),
                            requestData: {}
                        }
                    }
                }(this.tim),
                this.config.ssoEventStat = function(e) {
                    var t = {
                        sdkappid: e.loginInfo.SDKAppID,
                        reqtime: Math.ceil(+new Date / 1e3)
                    };
                    return {
                        create: {
                            serverName: Ch.NAME.IM_OPEN_STAT,
                            cmd: Ch.CMD.TIM_WEB_REPORT,
                            channel: Ch.CHANNEL.AUTO,
                            protocol: vh,
                            queryString: t,
                            requestData: {
                                table: "",
                                report: []
                            },
                            keyMaps: {
                                request: {
                                    table: "table",
                                    report: "report",
                                    SDKAppID: "sdkappid",
                                    version: "version",
                                    tinyID: "tinyid",
                                    userID: "userid",
                                    platform: "platform",
                                    method: "method",
                                    time: "time",
                                    start: "start",
                                    end: "end",
                                    cost: "cost",
                                    status: "status",
                                    codeint: "codeint",
                                    message: "message",
                                    pointer: "pointer",
                                    text: "text",
                                    msgType: "msgtype",
                                    networkType: "networktype",
                                    startts: "startts",
                                    endts: "endts",
                                    timespan: "timespan"
                                }
                            }
                        },
                        query: {},
                        update: {},
                        delete: {}
                    }
                }(this.tim),
                this.config.ssoSumStat = function(e) {
                    var t = null;
                    null !== e.context && (t = {
                        sdkappid: e.context.SDKAppID,
                        reqtime: Math.ceil(+new Date / 1e3)
                    });
                    return {
                        create: {
                            serverName: Ch.NAME.IM_OPEN_STAT,
                            cmd: Ch.CMD.TIM_WEB_REPORT,
                            channel: Ch.CHANNEL.AUTO,
                            protocol: vh,
                            queryString: t,
                            requestData: {
                                table: "",
                                report: []
                            },
                            keyMaps: {
                                request: {
                                    table: "table",
                                    report: "report",
                                    SDKAppID: "sdkappid",
                                    version: "version",
                                    tinyID: "tinyid",
                                    userID: "userid",
                                    item: "item",
                                    lpID: "lpid",
                                    platform: "platform",
                                    scene: "scene",
                                    networkType: "networktype",
                                    total: "total",
                                    successRate: "successrate",
                                    avg: "avg",
                                    timespan: "timespan",
                                    time: "time"
                                }
                            }
                        },
                        query: {},
                        update: {},
                        delete: {}
                    }
                }(this.tim)
            }
        }, {
            key: "_initRequestData",
            value: function(e, t) {
                if (void 0 === e)
                    return _d(t.requestData, this._getRequestMap(t), this.tim);
                var n = t.requestData
                  , r = Object.create(null);
                for (var o in n)
                    if (Object.prototype.hasOwnProperty.call(n, o)) {
                        if (r[o] = "function" == typeof n[o] ? n[o]() : n[o],
                        void 0 === e[o])
                            continue;
                        r[o] = e[o]
                    }
                return r = _d(r, this._getRequestMap(t), this.tim)
            }
        }, {
            key: "_getRequestMap",
            value: function(e) {
                if (e.keyMaps && e.keyMaps.request && Object.keys(e.keyMaps.request).length > 0)
                    return e.keyMaps.request
            }
        }, {
            key: "_initEncoder",
            value: function(e) {
                switch (e.protocol) {
                case vh:
                    return function(e) {
                        if ("string" === wn(e))
                            try {
                                return JSON.parse(e)
                            } catch (p_) {
                                return e
                            }
                        return e
                    }
                    ;
                case mh:
                    return function(e) {
                        return e
                    }
                    ;
                default:
                    return function(e) {
                        return Es.warn("PackageConfig._initEncoder(), unknow response type, data: ", JSON.stringify(e)),
                        e
                    }
                }
            }
        }, {
            key: "_initDecoder",
            value: function(e) {
                switch (e.protocol) {
                case vh:
                    return function(e) {
                        if ("string" === wn(e))
                            try {
                                return JSON.parse(e)
                            } catch (p_) {
                                return e
                            }
                        return e
                    }
                    ;
                case mh:
                    return function(e) {
                        return e
                    }
                    ;
                default:
                    return function(e) {
                        return Es.warn("PackageConfig._initDecoder(), unknow response type, data: ", e),
                        e
                    }
                }
            }
        }]),
        e
    }()
      , Ay = Math.floor;
    we({
        target: "Number",
        stat: !0
    }, {
        isInteger: function(e) {
            return !m(e) && isFinite(e) && Ay(e) === e
        }
    });
    var wy = function() {
        for (var e = [], t = Ly(arguments), n = 0; n < arguments.length; n++)
            Number.isInteger(arguments[n]) ? e.push(arguments[n]) : e.push(!0 == !!arguments[n] ? "1" : "0");
        return e.join(t)
    }
      , Ly = function(e) {
        var t = e.length
          , n = e[t - 1];
        if ("string" != typeof n)
            return "";
        if (n.length > 1)
            return "";
        var r = e[t - 1];
        return delete e[t - 1],
        e.length -= t === e.length ? 1 : 0,
        r
    }
      , Ny = {
        C2CMessageArray: 1,
        groupMessageArray: 1,
        groupTips: 1,
        C2CNotifyMessageArray: 1,
        profileModify: 1,
        friendListMod: 1
    }
      , by = function(e) {
        Fn(n, e);
        var t = Wn(n);
        function n(e) {
            var r;
            return bn(this, n),
            (r = t.call(this, e))._initialization(),
            r
        }
        return Gn(n, [{
            key: "_initialization",
            value: function() {
                this._syncOffset = "",
                this._syncNoticeList = [],
                this._syncEventArray = [],
                this._syncMessagesIsRunning = !1,
                this._syncMessagesFinished = !1,
                this._isLongPoll = !1,
                this._longPollID = 0,
                this._noticeSequence = 0,
                this._initializeListener(),
                this._runLoop = null,
                this._initShuntChannels()
            }
        }, {
            key: "_initShuntChannels",
            value: function() {
                this._shuntChannels = Object.create(null),
                this._shuntChannels.C2CMessageArray = this._C2CMessageArrayChannel.bind(this),
                this._shuntChannels.groupMessageArray = this._groupMessageArrayChannel.bind(this),
                this._shuntChannels.groupTips = this._groupTipsChannel.bind(this),
                this._shuntChannels.C2CNotifyMessageArray = this._C2CNotifyMessageArrayChannel.bind(this),
                this._shuntChannels.profileModify = this._profileModifyChannel.bind(this),
                this._shuntChannels.friendListMod = this._friendListModChannel.bind(this)
            }
        }, {
            key: "_C2CMessageArrayChannel",
            value: function(e, t, n) {
                this.emitInnerEvent(Vh, t)
            }
        }, {
            key: "_groupMessageArrayChannel",
            value: function(e, t, n) {
                this.emitInnerEvent(Bh, t)
            }
        }, {
            key: "_groupTipsChannel",
            value: function(e, t, n) {
                var r = this;
                switch (e) {
                case 4:
                case 6:
                    this.emitInnerEvent(Kh, t);
                    break;
                case 5:
                    t.forEach((function(e) {
                        Rs(e.elements.revokedInfos) ? r.emitInnerEvent(Yh, t) : r.emitInnerEvent(Hh, {
                            groupSystemNotices: t,
                            type: n
                        })
                    }
                    ));
                    break;
                default:
                    Es.log("NotificationController._groupTipsChannel unknown event=".concat(e, " type=").concat(n), t)
                }
            }
        }, {
            key: "_C2CNotifyMessageArrayChannel",
            value: function(e, t, n) {
                if (t[0]) {
                    var r = t[0];
                    r.hasOwnProperty("kickoutMsgNotify") ? this.emitInnerEvent(jh) : r.hasOwnProperty("c2cMessageRevokedNotify") ? this.emitInnerEvent(Wh, t) : r.hasOwnProperty("c2cMessageReadReceipt") && this.emitInnerEvent(Jh, t)
                }
            }
        }, {
            key: "_profileModifyChannel",
            value: function(e, t, n) {
                this.emitInnerEvent(zh, t)
            }
        }, {
            key: "_friendListModChannel",
            value: function(e, t, n) {
                this.emitInnerEvent($h, t)
            }
        }, {
            key: "_dispatchNotice",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "poll";
                if (Rs(e))
                    for (var n = null, r = null, o = "", i = "", a = "", s = 0, u = 0, c = e.length; u < c; u++)
                        s = (n = e[u]).event,
                        o = Object.keys(n).find((function(e) {
                            return void 0 !== Ny[e]
                        }
                        )),
                        Ls(this._shuntChannels[o]) ? (r = n[o],
                        "poll" === t && this._updatenoticeSequence(r),
                        this._shuntChannels[o](s, r, t)) : ("poll" === t && this._updatenoticeSequence(),
                        i = "".concat(Kp.NOTICE_RUNLOOP_UNEXPECTED_CONDITION),
                        a = "".concat($f, ": ").concat(s, ", ").concat(o),
                        this.emitInnerEvent(od, new Bp({
                            code: i,
                            message: a,
                            data: {
                                payloadName: o,
                                event: s
                            }
                        })),
                        i = "",
                        a = "")
            }
        }, {
            key: "getLongPollID",
            value: function() {
                return this._longPollID
            }
        }, {
            key: "_IAmReady",
            value: function() {
                this.triggerReady()
            }
        }, {
            key: "reset",
            value: function() {
                this._noticeSequence = 0,
                this._resetSync(),
                this.closeNoticeChannel()
            }
        }, {
            key: "_resetSync",
            value: function() {
                this._syncOffset = "",
                this._syncNoticeList = [],
                this._syncEventArray = [],
                this._syncMessagesIsRunning = !1,
                this._syncMessagesFinished = !1
            }
        }, {
            key: "_setNoticeSeqInRequestData",
            value: function(e) {
                e.Cookie.NoticeSeq = this._noticeSequence,
                this.tim.sumStatController.addTotalCount(Gd)
            }
        }, {
            key: "_updatenoticeSequence",
            value: function(e) {
                if (e) {
                    var t = e[e.length - 1].noticeSequence;
                    t && "number" == typeof t ? t <= this._noticeSequence || (this._noticeSequence = t) : this._noticeSequence++
                } else
                    this._noticeSequence++
            }
        }, {
            key: "_initializeListener",
            value: function() {
                var e = this.tim.innerEmitter;
                e.on(Dh, this._startSyncMessages, this),
                e.on(nd, this.closeNoticeChannel, this)
            }
        }, {
            key: "openNoticeChannel",
            value: function() {
                Es.log("NotificationController.openNoticeChannel"),
                this._getLongPollID()
            }
        }, {
            key: "closeNoticeChannel",
            value: function() {
                Es.log("NotificationController.closeNoticeChannel"),
                (this._runLoop instanceof _v || this._runLoop instanceof Iv) && (this._runLoop.abort(),
                this._runLoop.stop()),
                this._longPollID = 0,
                this._isLongPoll = !1
            }
        }, {
            key: "_getLongPollID",
            value: function() {
                var e = this;
                if (0 === this._longPollID) {
                    var t = new Wd(Vg);
                    this.request({
                        name: "longPollID",
                        action: "query"
                    }).then((function(n) {
                        var r = n.data.longPollingID;
                        e._onGetLongPollIDSuccess(r),
                        t.setText("longPollingID=".concat(r)).setNetworkType(e.getNetworkType()).setEnd()
                    }
                    )).catch((function(n) {
                        var r = new Bp({
                            code: n.code || Kp.GET_LONGPOLL_ID_FAILED,
                            message: n.message || Yf
                        });
                        e.emitInnerEvent(Uh),
                        e.emitInnerEvent(od, r),
                        e.probeNetwork().then((function(e) {
                            var n = Jn(e, 2)
                              , o = n[0]
                              , i = n[1];
                            t.setError(r, o, i).setEnd()
                        }
                        ))
                    }
                    ))
                } else
                    this._onGetLongPollIDSuccess(this._longPollID)
            }
        }, {
            key: "_onGetLongPollIDSuccess",
            value: function(e) {
                this.emitInnerEvent(kh, [{
                    key: "long_poll_logout.query.requestData.longPollingID",
                    value: e
                }, {
                    key: "longPoll.query.requestData.cookie.longPollingID",
                    value: e
                }]),
                this._longPollID = e,
                this._startLongPoll(),
                this._IAmReady(),
                this.tim.sumStatController.recordLongPollingID(this._longPollID)
            }
        }, {
            key: "_startLongPoll",
            value: function() {
                if (!0 !== this._isLongPoll) {
                    Es.log("NotificationController._startLongPoll...");
                    var e = this.tim.connectionController
                      , t = this.createTransportCapsule({
                        name: "longPoll",
                        action: "query"
                    });
                    this._isLongPoll = !0,
                    this._runLoop = e.createRunLoop({
                        pack: t,
                        before: this._setNoticeSeqInRequestData.bind(this),
                        success: this._onNoticeReceived.bind(this),
                        fail: this._onNoticeFail.bind(this)
                    }),
                    this._runLoop.start()
                } else
                    Es.log("NotificationController._startLongPoll is running...")
            }
        }, {
            key: "_onNoticeReceived",
            value: function(e) {
                var t = e.data;
                t.errorCode !== Qu.SUCCESS ? (new Wd(Bg).setMessage(t.errorInfo || JSON.stringify(t)).setCode(t.errorCode).setNetworkType(this.getNetworkType()).setEnd(!0),
                this._onResponseError(t)) : this.emitInnerEvent(qh);
                this.tim.sumStatController.addSuccessCount(Gd),
                this.tim.sumStatController.addCost(Gd, t.timecost),
                e.data.eventArray && this._dispatchNotice(e.data.eventArray)
            }
        }, {
            key: "_onResponseError",
            value: function(e) {
                switch (e.errorCode) {
                case Kp.LONG_POLL_KICK_OUT:
                    Es.warn("NotificationController._onResponseError, longPollingID=".concat(this._longPollID, " was kicked out")),
                    this.emitInnerEvent(Fh),
                    this.closeNoticeChannel();
                    break;
                case Kp.MESSAGE_A2KEY_EXPIRED:
                case Kp.ACCOUNT_A2KEY_EXPIRED:
                    this.emitInnerEvent(rd);
                    break;
                default:
                    As(e.errorCode) || As(e.errorInfo) ? Es.log("NotificationController._onResponseError, errorCode or errorInfo undefined!", e) : this.emitInnerEvent(od, new Bp({
                        code: e.errorCode,
                        message: e.errorInfo
                    }))
                }
            }
        }, {
            key: "_onNoticeFail",
            value: function(e) {
                if (e.error)
                    if ("ECONNABORTED" === e.error.code || e.error.code === Kp.NETWORK_TIMEOUT)
                        if (e.error.config) {
                            var t = e.error.config.url
                              , n = e.error.config.data;
                            Es.log("NotificationController._onNoticeFail request timed out. url=".concat(t, " data=").concat(n))
                        } else
                            Es.log("NotificationController._onNoticeFail request timed out.");
                    else
                        Es.log("NotificationController._onNoticeFail request failed due to network error");
                this.emitInnerEvent(xh)
            }
        }, {
            key: "_startSyncMessages",
            value: function(e) {
                !0 !== this._syncMessagesFinished && this.syncMessage()
            }
        }, {
            key: "syncMessage",
            value: function() {
                var e = this
                  , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                  , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                this._syncMessagesIsRunning = !0,
                this.request({
                    name: "syncMessage",
                    action: "query",
                    param: {
                        cookie: t,
                        syncFlag: n
                    }
                }).then((function(t) {
                    var n = t.data;
                    switch (wy(n.cookie, n.syncFlag)) {
                    case "00":
                    case "01":
                        e.emitInnerEvent(od, {
                            code: Kp.NOTICE_RUNLOOP_OFFSET_LOST,
                            message: zf
                        });
                        break;
                    case "10":
                    case "11":
                        n.eventArray && e._dispatchNotice(n.eventArray, "sync"),
                        e._syncNoticeList = e._syncNoticeList.concat(n.messageList),
                        e.emitInnerEvent(Oh, {
                            data: n.messageList,
                            C2CRemainingUnreadList: n.C2CRemainingUnreadList
                        }),
                        e._syncOffset = n.cookie,
                        e.syncMessage(n.cookie, n.syncFlag);
                        break;
                    case "12":
                        n.eventArray && e._dispatchNotice(n.eventArray, "sync"),
                        e.openNoticeChannel(),
                        e._syncNoticeList = e._syncNoticeList.concat(n.messageList),
                        e.emitInnerEvent(Rh, {
                            messageList: n.messageList,
                            C2CRemainingUnreadList: n.C2CRemainingUnreadList
                        }),
                        e._syncOffset = n.cookie,
                        e._syncNoticeList = [],
                        e._syncMessagesIsRunning = !1,
                        e._syncMessagesFinished = !0
                    }
                }
                )).catch((function(t) {
                    e._syncMessagesIsRunning = !1,
                    Es.error("NotificationController.syncMessage failed. error:", t)
                }
                ))
            }
        }]),
        n
    }(Dd)
      , Py = function(e) {
        Fn(n, e);
        var t = Wn(n);
        function n(e) {
            var r;
            return bn(this, n),
            (r = t.call(this, e)).COSSDK = null,
            r._cosUploadMethod = null,
            r.expiredTimeLimit = 600,
            r.appid = 0,
            r.bucketName = "",
            r.ciUrl = "",
            r.directory = "",
            r.downloadUrl = "",
            r.uploadUrl = "",
            r.expiredTimeOut = r.expiredTimeLimit,
            r.region = "ap-shanghai",
            r.cos = null,
            r.cosOptions = {
                secretId: "",
                secretKey: "",
                sessionToken: "",
                expiredTime: 0
            },
            r._timer = 0,
            r.tim.innerEmitter.on(Dh, r._init, zn(r)),
            r.triggerReady(),
            r
        }
        return Gn(n, [{
            key: "_expiredTimer",
            value: function() {
                var e = this;
                this._timer = setInterval((function() {
                    Math.ceil(Date.now() / 1e3) >= e.cosOptions.expiredTime - 120 && (e._getAuthorizationKey(),
                    clearInterval(e._timer))
                }
                ), 6e4)
            }
        }, {
            key: "_init",
            value: function() {
                var e = Ka ? "cos-wx-sdk" : "cos-js-sdk";
                this.COSSDK = this.tim.getPlugin(e),
                this.COSSDK ? this._getAuthorizationKey() : Es.warn("UploadController._init 没有检测到上传插件，将无法发送图片、音频、视频、文件等类型的消息。详细请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#registerPlugin")
            }
        }, {
            key: "_getAuthorizationKey",
            value: function() {
                var e = this
                  , t = Math.ceil(Date.now() / 1e3)
                  , n = new Wd(rg);
                this.request({
                    name: "cosSig",
                    action: "query",
                    param: {
                        duration: this.expiredTimeLimit
                    }
                }).then((function(r) {
                    Es.log("UploadController._getAuthorizationKey ok. data:", r.data);
                    var o = r.data
                      , i = o.expiredTime - t;
                    n.setText("requestId=".concat(o.requestId, " requestTime=").concat(t, " expiredTime=").concat(o.expiredTime, " timeout=").concat(i, "s")).setNetworkType(e.getNetworkType()).setEnd(),
                    e.appid = o.appid,
                    e.bucketName = o.bucketName,
                    e.ciUrl = o.ciUrl,
                    e.directory = o.directory,
                    e.downloadUrl = o.downloadUrl,
                    e.uploadUrl = o.uploadUrl,
                    e.expiredTimeOut = i,
                    e.cosOptions = {
                        secretId: o.secretId,
                        secretKey: o.secretKey,
                        sessionToken: o.sessionToken,
                        expiredTime: o.expiredTime
                    },
                    e._initUploaderMethod(),
                    e._expiredTimer()
                }
                )).catch((function(t) {
                    e.probeNetwork().then((function(e) {
                        var r = Jn(e, 2)
                          , o = r[0]
                          , i = r[1];
                        n.setError(t, o, i).setEnd()
                    }
                    )),
                    Es.warn("UploadController._getAuthorizationKey failed. error:", t)
                }
                ))
            }
        }, {
            key: "_initUploaderMethod",
            value: function() {
                var e = this;
                this.appid && (this.cos = Ka ? new this.COSSDK({
                    ForcePathStyle: !0,
                    getAuthorization: this._getAuthorization.bind(this)
                }) : new this.COSSDK({
                    getAuthorization: this._getAuthorization.bind(this)
                }),
                this._cosUploadMethod = Ka ? function(t, n) {
                    e.cos.postObject(t, n)
                }
                : function(t, n) {
                    e.cos.uploadFiles(t, n)
                }
                )
            }
        }, {
            key: "_getAuthorization",
            value: function(e, t) {
                t({
                    TmpSecretId: this.cosOptions.secretId,
                    TmpSecretKey: this.cosOptions.secretKey,
                    XCosSecurityToken: this.cosOptions.sessionToken,
                    ExpiredTime: this.cosOptions.expiredTime
                })
            }
        }, {
            key: "uploadImage",
            value: function(e) {
                if (!e.file)
                    return Nd(new Bp({
                        code: Kp.MESSAGE_IMAGE_SELECT_FILE_FIRST,
                        message: af
                    }));
                var t = this._checkImageType(e.file);
                if (!0 !== t)
                    return t;
                var n = this._checkImageMime(e.file);
                if (!0 !== n)
                    return n;
                var r = this._checkImageSize(e.file);
                if (!0 !== r)
                    return r;
                var o = null;
                return this.upload(e).then((function(e) {
                    return o = e,
                    t = "https://".concat(e.location),
                    Ka ? new Promise((function(e, n) {
                        Ha.getImageInfo({
                            src: t,
                            success: function(t) {
                                e({
                                    width: t.width,
                                    height: t.height
                                })
                            },
                            fail: function() {
                                e({
                                    width: 0,
                                    height: 0
                                })
                            }
                        })
                    }
                    )) : rs && 9 === os ? Promise.resolve({
                        width: 0,
                        height: 0
                    }) : new Promise((function(e, n) {
                        var r = new Image;
                        r.onload = function() {
                            e({
                                width: this.width,
                                height: this.height
                            }),
                            r = null
                        }
                        ,
                        r.onerror = function() {
                            e({
                                width: 0,
                                height: 0
                            }),
                            r = null
                        }
                        ,
                        r.src = t
                    }
                    ));
                    var t
                }
                )).then((function(e) {
                    return o.width = e.width,
                    o.height = e.height,
                    Promise.resolve(o)
                }
                ))
            }
        }, {
            key: "_checkImageType",
            value: function(e) {
                var t = "";
                return t = Ka ? e.url.slice(e.url.lastIndexOf(".") + 1) : e.files[0].name.slice(e.files[0].name.lastIndexOf(".") + 1),
                Xf.indexOf(t.toLowerCase()) >= 0 || Nd(new Bp({
                    coe: Kp.MESSAGE_IMAGE_TYPES_LIMIT,
                    message: sf
                }))
            }
        }, {
            key: "_checkImageMime",
            value: function(e) {
                return !0
            }
        }, {
            key: "_checkImageSize",
            value: function(e) {
                var t = 0;
                return 0 === (t = Ka ? e.size : e.files[0].size) ? Nd(new Bp({
                    code: Kp.MESSAGE_FILE_IS_EMPTY,
                    message: "".concat(nf)
                })) : t < 20971520 || Nd(new Bp({
                    coe: Kp.MESSAGE_IMAGE_SIZE_LIMIT,
                    message: "".concat(uf)
                }))
            }
        }, {
            key: "uploadFile",
            value: function(e) {
                var t = null;
                return e.file ? e.file.files[0].size > 104857600 ? (t = new Bp({
                    code: Kp.MESSAGE_FILE_SIZE_LIMIT,
                    message: mf
                }),
                Nd(t)) : 0 === e.file.files[0].size ? (t = new Bp({
                    code: Kp.MESSAGE_FILE_IS_EMPTY,
                    message: "".concat(nf)
                }),
                Nd(t)) : this.upload(e) : (t = new Bp({
                    code: Kp.MESSAGE_FILE_SELECT_FILE_FIRST,
                    message: gf
                }),
                Nd(t))
            }
        }, {
            key: "uploadVideo",
            value: function(e) {
                return e.file.videoFile.size > 104857600 ? Nd(new Bp({
                    code: Kp.MESSAGE_VIDEO_SIZE_LIMIT,
                    message: "".concat(ff)
                })) : 0 === e.file.videoFile.size ? Nd(new Bp({
                    code: Kp.MESSAGE_FILE_IS_EMPTY,
                    message: "".concat(nf)
                })) : -1 === Qf.indexOf(e.file.videoFile.type) ? Nd(new Bp({
                    code: Kp.MESSAGE_VIDEO_TYPES_LIMIT,
                    message: "".concat(hf)
                })) : Ka ? this.handleVideoUpload({
                    file: e.file.videoFile
                }) : xa ? this.handleVideoUpload(e) : void 0
            }
        }, {
            key: "handleVideoUpload",
            value: function(e) {
                var t = this;
                return new Promise((function(n, r) {
                    t.upload(e).then((function(e) {
                        n(e)
                    }
                    )).catch((function() {
                        t.upload(e).then((function(e) {
                            n(e)
                        }
                        )).catch((function() {
                            r(new Bp({
                                code: Kp.MESSAGE_VIDEO_UPLOAD_FAIL,
                                message: pf
                            }))
                        }
                        ))
                    }
                    ))
                }
                ))
            }
        }, {
            key: "uploadAudio",
            value: function(e) {
                return e.file ? e.file.size > 20971520 ? Nd(new Bp({
                    code: Kp.MESSAGE_AUDIO_SIZE_LIMIT,
                    message: "".concat(lf)
                })) : 0 === e.file.size ? Nd(new Bp({
                    code: Kp.MESSAGE_FILE_IS_EMPTY,
                    message: "".concat(nf)
                })) : this.upload(e) : Nd(new Bp({
                    code: Kp.MESSAGE_AUDIO_UPLOAD_FAIL,
                    message: cf
                }))
            }
        }, {
            key: "upload",
            value: function(e) {
                var t = this;
                if (!Ls(this._cosUploadMethod))
                    return Es.warn("UploadController.upload 没有检测到上传插件，将无法发送图片、音频、视频、文件等类型的消息。详细请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#registerPlugin"),
                    Nd(new Bp({
                        code: Kp.COS_UNDETECTED,
                        message: Xp
                    }));
                var n = new Wd(og);
                Es.time(Yd);
                var r = Ka ? e.file : e.file.files[0];
                return new Promise((function(o, i) {
                    var a = Ka ? t._createCosOptionsWXMiniApp(e) : t._createCosOptionsWeb(e)
                      , s = t;
                    t._cosUploadMethod(a, (function(e, a) {
                        var u = Object.create(null);
                        if (a) {
                            if (e || Rs(a.files) && a.files[0].error) {
                                var c = new Bp({
                                    code: Kp.MESSAGE_FILE_UPLOAD_FAIL,
                                    message: df
                                });
                                return n.setError(c, !0, t.getNetworkType()).setEnd(),
                                Es.log("UploadController.upload failed, error:", a.files[0].error),
                                403 === a.files[0].error.statusCode && (Es.warn("UploadController.upload failed. cos AccessKeyId was invalid, regain auth key!"),
                                t._getAuthorizationKey()),
                                void i(c)
                            }
                            u.fileName = r.name,
                            u.fileSize = r.size,
                            u.fileType = r.type.slice(r.type.indexOf("/") + 1).toLowerCase(),
                            u.location = Ka ? a.Location : a.files[0].data.Location;
                            var l = Es.timeEnd(Yd)
                              , p = s._formatFileSize(r.size)
                              , f = s._formatSpeed(1e3 * r.size / l)
                              , h = "size=".concat(p, ",time=").concat(l, "ms,speed=").concat(f);
                            return Es.log("UploadController.upload success name=".concat(r.name, ",").concat(h)),
                            o(u),
                            void n.setNetworkType(t.getNetworkType()).setText(h).setEnd()
                        }
                        var d = new Bp({
                            code: Kp.MESSAGE_FILE_UPLOAD_FAIL,
                            message: df
                        });
                        n.setError(d, !0, s.getNetworkType()).setEnd(),
                        Es.warn("UploadController.upload failed, error:", e),
                        403 === e.statusCode && (Es.warn("UploadController.upload failed. cos AccessKeyId was invalid, regain auth key!"),
                        t._getAuthorizationKey()),
                        i(d)
                    }
                    ))
                }
                ))
            }
        }, {
            key: "_formatFileSize",
            value: function(e) {
                return e < 1024 ? e + "B" : e < 1048576 ? Math.floor(e / 1024) + "KB" : Math.floor(e / 1048576) + "MB"
            }
        }, {
            key: "_formatSpeed",
            value: function(e) {
                return e <= 1048576 ? (e / 1024).toFixed(1) + "KB/s" : (e / 1048576).toFixed(1) + "MB/s"
            }
        }, {
            key: "_createCosOptionsWeb",
            value: function(e) {
                var t = this.tim.context.identifier
                  , n = this._genFileName(t, e.to, e.file.files[0].name);
                return {
                    files: [{
                        Bucket: "".concat(this.bucketName, "-").concat(this.appid),
                        Region: this.region,
                        Key: "".concat(this.directory, "/").concat(n),
                        Body: e.file.files[0]
                    }],
                    SliceSize: 1048576,
                    onProgress: function(t) {
                        if ("function" == typeof e.onProgress)
                            try {
                                e.onProgress(t.percent)
                            } catch (n) {
                                Es.warn("onProgress callback error:", n),
                                Es.error(n)
                            }
                    },
                    onFileFinish: function(e, t, n) {}
                }
            }
        }, {
            key: "_createCosOptionsWXMiniApp",
            value: function(e) {
                var t = this.tim.context.identifier
                  , n = this._genFileName(t, e.to, e.file.name)
                  , r = e.file.url;
                return {
                    Bucket: "".concat(this.bucketName, "-").concat(this.appid),
                    Region: this.region,
                    Key: "".concat(this.directory, "/").concat(n),
                    FilePath: r,
                    onProgress: function(t) {
                        if (Es.log(JSON.stringify(t)),
                        "function" == typeof e.onProgress)
                            try {
                                e.onProgress(t.percent)
                            } catch (n) {
                                Es.warn("onProgress callback error:", n),
                                Es.error(n)
                            }
                    }
                }
            }
        }, {
            key: "_genFileName",
            value: function(e, t, n) {
                return "".concat(e, "-").concat(t, "-").concat(Vs(99999), "-").concat(n)
            }
        }, {
            key: "reset",
            value: function() {
                this._timer && (clearInterval(this._timer),
                this._timer = 0)
            }
        }]),
        n
    }(Dd)
      , Gy = function(e) {
        Fn(n, e);
        var t = Wn(n);
        function n(e) {
            var r;
            return bn(this, n),
            (r = t.call(this, e)).FILETYPE = {
                SOUND: 2106,
                FILE: 2107,
                VIDEO: 2113
            },
            r._bdh_download_server = "grouptalk.c2c.qq.com",
            r._BDHBizID = 10001,
            r._authKey = "",
            r._expireTime = 0,
            r.tim.innerEmitter.on(Dh, r._getAuthKey, zn(r)),
            r
        }
        return Gn(n, [{
            key: "_getAuthKey",
            value: function() {
                var e = this;
                this.request({
                    name: "bigDataHallwayAuthKey",
                    action: "query"
                }).then((function(t) {
                    t.data.authKey && (e._authKey = t.data.authKey,
                    e._expireTime = parseInt(t.data.expireTime))
                }
                ))
            }
        }, {
            key: "_isFromOlderVersion",
            value: function(e) {
                return 2 !== e.content.downloadFlag
            }
        }, {
            key: "parseElements",
            value: function(e, t) {
                if (!Rs(e) || !t)
                    return [];
                for (var n = [], r = null, o = 0; o < e.length; o++)
                    r = e[o],
                    this._needParse(r) ? n.push(this._parseElement(r, t)) : n.push(e[o]);
                return n
            }
        }, {
            key: "_needParse",
            value: function(e) {
                return !(!this._isFromOlderVersion(e) || e.type !== En.MSG_AUDIO && e.type !== En.MSG_FILE && e.type !== En.MSG_VIDEO)
            }
        }, {
            key: "_parseElement",
            value: function(e, t) {
                switch (e.type) {
                case En.MSG_AUDIO:
                    return this._parseAudioElement(e, t);
                case En.MSG_FILE:
                    return this._parseFileElement(e, t);
                case En.MSG_VIDEO:
                    return this._parseVideoElement(e, t)
                }
            }
        }, {
            key: "_parseAudioElement",
            value: function(e, t) {
                return e.content.url = this._genAudioUrl(e.content.uuid, t),
                e
            }
        }, {
            key: "_parseFileElement",
            value: function(e, t) {
                return e.content.url = this._genFileUrl(e.content.uuid, t, e.content.fileName),
                e
            }
        }, {
            key: "_parseVideoElement",
            value: function(e, t) {
                return e.content.url = this._genVideoUrl(e.content.uuid, t),
                e
            }
        }, {
            key: "_genAudioUrl",
            value: function(e, t) {
                return "" === this._authKey ? (Es.warn("BigDataHallwayController._genAudioUrl no authKey!"),
                "") : "https://".concat(this._bdh_download_server, "/asn.com/stddownload_common_file?authkey=").concat(this._authKey, "&bid=").concat(this._BDHBizID, "&subbid=").concat(this.tim.context.SDKAppID, "&fileid=").concat(e, "&filetype=").concat(this.FILETYPE.SOUND, "&openid=").concat(t, "&ver=0")
            }
        }, {
            key: "_genFileUrl",
            value: function(e, t, n) {
                return "" === this._authKey ? (Es.warn("BigDataHallwayController._genFileUrl no authKey!"),
                "") : (n || (n = "".concat(Math.floor(1e5 * Math.random()), "-").concat(Date.now())),
                "https://".concat(this._bdh_download_server, "/asn.com/stddownload_common_file?authkey=").concat(this._authKey, "&bid=").concat(this._BDHBizID, "&subbid=").concat(this.tim.context.SDKAppID, "&fileid=").concat(e, "&filetype=").concat(this.FILETYPE.FILE, "&openid=").concat(t, "&ver=0&filename=").concat(encodeURIComponent(n)))
            }
        }, {
            key: "_genVideoUrl",
            value: function(e, t) {
                return "" === this._authKey ? (Es.warn("BigDataHallwayController._genVideoUrl no authKey!"),
                "") : "https://".concat(this._bdh_download_server, "/asn.com/stddownload_common_file?authkey=").concat(this._authKey, "&bid=").concat(this._BDHBizID, "&subbid=").concat(this.tim.context.SDKAppID, "&fileid=").concat(e, "&filetype=").concat(this.FILETYPE.VIDEO, "&openid=").concat(t, "&ver=0")
            }
        }, {
            key: "reset",
            value: function() {
                this._authKey = "",
                this.expireTime = 0
            }
        }]),
        n
    }(Dd);
    function Uy(e) {
        return e = window.localStorage ? localStorage.getItem(e) || sessionStorage.getItem(e) : (e = document.cookie.match(new RegExp("(?:^|;\\s)" + e + "=(.*?)(?:;\\s|$)"))) ? e[1] : ""
    }
    function xy(e, t, n) {
        if (window.localStorage)
            try {
                n ? localStorage.setItem(e, t) : sessionStorage.setItem(e, t)
            } catch (r) {}
        else
            document.cookie = e + "=" + t + ";path=/;domain=" + function() {
                var e = window.location.host
                  , t = e.split(".");
                return 2 < t.length && (e = ({
                    "com.cn": 1,
                    "js.cn": 1,
                    "net.cn": 1,
                    "gov.cn": 1,
                    "com.hk": 1,
                    "co.nz": 1
                }[t.slice(-2).join(".")] ? t.slice(-3) : t.slice(-2)).join(".")),
                e
            }() + (n ? ";expires=" + n : "")
    }
    function qy(e, t) {
        var n, r = {};
        if (void 0 === t)
            var o = window.location
              , i = o.host
              , a = o.pathname
              , s = o.search.substr(1)
              , u = o.hash;
        else
            i = (o = t.match(/\w+:\/\/((?:[\w-]+\.)+\w+)(?::\d+)?(\/[^\?\\"'\|:<>]*)?(?:\?([^'"\\<>#]*))?(?:#(\w+))?/i) || [])[1],
            a = o[2],
            s = o[3],
            u = o[4];
        return void 0 !== u && (u = u.replace(/"|'|<|>/gi, "M")),
        s && function() {
            for (var e = s.split("&"), t = 0, n = e.length; t < n; t++)
                if (-1 != e[t].indexOf("=")) {
                    var o = e[t].indexOf("=")
                      , i = e[t].slice(0, o);
                    o = e[t].slice(o + 1),
                    r[i] = o
                }
        }(),
        s = function() {
            if (void 0 === s)
                return s;
            for (var t = s.split("&"), n = [], r = 0, o = t.length; r < o; r++)
                if (-1 != t[r].indexOf("=")) {
                    var i = t[r].indexOf("=")
                      , a = t[r].slice(0, i);
                    i = t[r].slice(i + 1),
                    e.ignoreParams && -1 != e.ignoreParams.indexOf(a) || n.push(a + "=" + i)
                }
            return n.join("&")
        }(),
        u && function() {
            for (var e = 0 == u.indexOf("#") ? u.substr(1).split("&") : u.split("&"), t = 0, r = e.length; t < r; t++)
                if (-1 != e[t].indexOf("=")) {
                    var o = e[t].indexOf("=")
                      , i = e[t].slice(0, o);
                    if (o = e[t].slice(o + 1),
                    "adtag" === i.toLowerCase()) {
                        n = o;
                        break
                    }
                }
        }(),
        {
            host: i,
            path: a,
            search: s,
            hash: u,
            param: r,
            adtag: n
        }
    }
    function Fy(e) {
        var t, n = qy(e), r = {
            dm: n.host,
            pvi: "",
            si: "",
            url: n.path,
            arg: encodeURIComponent(n.search || "").substr(0, 512),
            ty: 0
        };
        return r.pvi = function() {
            var t = new Date((new Date).getTime() + 63072e6).toGMTString();
            if (e.userReport) {
                var n = Uy("pgv_uid");
                n && n == e.user.user_id || (r.ty = 1,
                xy("pgv_uid", e.user.user_id, t)),
                n = e.user.user_id
            } else
                (n = Uy("pgv_pvi")) || (r.ty = 1,
                xy("pgv_pvi", n = jy(), t));
            return n
        }(),
        r.si = ((t = Uy("pgv_si")) || xy("pgv_si", t = jy("s")),
        t),
        r.url = function() {
            var t = n.path;
            return e.senseQuery && (t += n.search ? "?" + encodeURIComponent(n.search || "").substr(0, 512) : ""),
            e.senseHash && (t += n.hash ? encodeURIComponent(n.hash) : ""),
            t
        }(),
        r
    }
    function jy(e) {
        for (var t = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], n = 10; 1 < n; n--) {
            var r = Math.floor(10 * Math.random())
              , o = t[r];
            t[r] = t[n - 1],
            t[n - 1] = o
        }
        for (n = r = 0; 5 > n; n++)
            r = 10 * r + t[n];
        return (e || "") + (r + "") + +new Date
    }
    function Vy(e) {
        return {
            r2: e.sid
        }
    }
    function By(e) {
        var t = {};
        if (e) {
            var n, r = [];
            for (n in e)
                e.hasOwnProperty(n) && r.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
            e = r.join(";"),
            t.ext = e
        }
        return t
    }
    function Ky(e) {
        var t = qy(e, document.referrer);
        return e = qy(e),
        {
            rdm: t.host,
            rurl: t.path,
            rarg: encodeURIComponent(t.search || "").substr(0, 512),
            adt: e.param.ADTAG || e.param.adtag || e.param.CKTAG || e.param.cktag || e.param.PTAG || e.param.ptag || e.adtag
        }
    }
    function Hy() {
        try {
            var e = navigator
              , t = screen || {
                width: "",
                height: "",
                colorDepth: ""
            }
              , n = {
                scr: t.width + "x" + t.height,
                scl: t.colorDepth + "-bit",
                lg: (e.language || e.userLanguage).toLowerCase(),
                tz: (new Date).getTimezoneOffset() / 60
            }
        } catch (r) {
            return {}
        }
        return n
    }
    var $y = {
        conf: {},
        version: "2.0.19",
        init: function(e) {
            var t = {
                sid: 0,
                cid: 0,
                autoReport: 0,
                senseHash: 0,
                senseQuery: 0,
                userReport: 0,
                performanceMonitor: 0,
                ignoreParams: []
            };
            if (e)
                for (var n in e)
                    e.hasOwnProperty(n) && t.hasOwnProperty(n) && (t[n] = e[n]);
            this.conf = t,
            this.conf.autoReport && this.pgv()
        },
        pgv: function() {
            var e = this.conf
              , t = []
              , n = this.version;
            if (e.sid)
                if (!e.userReport || e.user && e.user.user_id && !parseInt(e.user.user_id, 10) !== conf.user.user_id) {
                    for (var r = 0, o = [Fy(e), Ky(e), Vy(e), Hy(), By({
                        version: n
                    }), {
                        random: +new Date
                    }], i = o.length; r < i; r++)
                        for (var a in o[r])
                            o[r].hasOwnProperty(a) && t.push(a + "=" + (void 0 === o[r][a] ? "" : o[r][a]));
                    var s = function(e) {
                        e = "https://pingtas.qq.com/webview/pingd?" + e.join("&").toLowerCase();
                        var t = new Image;
                        t.onload = t.onerror = t.onabort = function() {
                            t = t.onload = t.onerror = t.onabort = null
                        }
                        ,
                        t.src = e
                    };
                    s(t),
                    e.performanceMonitor && (t = function() {
                        for (var t = function() {
                            if (window.performance) {
                                var e = window.performance.timing
                                  , t = {
                                    value: e.domainLookupEnd - e.domainLookupStart
                                }
                                  , n = {
                                    value: e.connectEnd - e.connectStart
                                }
                                  , r = {
                                    value: e.responseStart - (e.requestStart || e.responseStart + 1)
                                }
                                  , o = e.responseEnd - e.responseStart;
                                e.domContentLoadedEventStart ? 0 > o && (o = 0) : o = -1,
                                e = {
                                    domainLookupTime: t,
                                    connectTime: n,
                                    requestTime: r,
                                    resourcesLoadedTime: {
                                        value: o
                                    },
                                    domParsingTime: {
                                        value: e.domContentLoadedEventStart ? e.domInteractive - e.domLoading : -1
                                    },
                                    domContentLoadedTime: {
                                        value: e.domContentLoadedEventStart ? e.domContentLoadedEventStart - e.fetchStart : -1
                                    }
                                }
                            } else
                                e = "";
                            return e
                        }(), r = [], o = [], i = 0, a = [Fy(e), {
                            r2: e.cid
                        }, Hy(), {
                            random: +new Date
                        }], u = a.length; i < u; i++)
                            for (var c in a[i])
                                a[i].hasOwnProperty(c) && o.push(c + "=" + (void 0 === a[i][c] ? "" : a[i][c]));
                        for (c in t)
                            t.hasOwnProperty(c) && ("domContentLoadedTime" == c ? o.push("r3=" + t[c].value) : r.push(t[c].value));
                        t = By({
                            pfm: r.join("_"),
                            version: n
                        }),
                        o.push("ext=" + t.ext),
                        s(o)
                    }
                    ,
                    void 0 !== window.performance && void 0 !== window.performance.timing && 0 != window.performance.timing.loadEventEnd ? t() : window.attachEvent ? window.attachEvent("onload", t) : window.addEventListener && window.addEventListener("load", t, !1))
                } else
                    console.log("MTA H5分析错误提示：您选择了用户统计uv，请设置业务的user_id，需为int类型");
            else
                console.log("MTA H5分析错误提示：您没有设置sid")
        },
        clickStat: function(e, t) {
            var n = this.conf
              , r = []
              , o = Fy(n)
              , i = Vy(n);
            if (n.cid) {
                o.dm = "taclick",
                o.url = e,
                i.r2 = n.cid,
                i.r5 = function(e) {
                    e = void 0 === e ? {} : e;
                    var t, n = [];
                    for (t in e)
                        e.hasOwnProperty(t) && n.push(t + "=" + encodeURIComponent(e[t]));
                    return n.join(";")
                }(t);
                var a = 0;
                for (o = (n = [o, Ky(n), i, Hy(), By({
                    version: this.version
                }), {
                    random: +new Date
                }]).length; a < o; a++)
                    for (var s in n[a])
                        n[a].hasOwnProperty(s) && r.push(s + "=" + (void 0 === n[a][s] ? "" : n[a][s]));
                r = "https://pingtas.qq.com/webview/pingd?" + r.join("&");
                var u = new Image;
                u.onload = u.onerror = u.onabort = function() {
                    u = u.onload = u.onerror = u.onabort = null
                }
                ,
                u.src = r
            } else
                console.log("MTA H5分析错误提示：您没有设置cid,请到管理台开通自定义事件并更新统计代码")
        },
        clickShare: function(e) {
            var t, n, r = this.conf, o = qy(r), i = void 0 === (o = o.param.CKTAG || o.param.ckatg) ? [] : o.split(".");
            if (r.cid) {
                o = [];
                var a = Fy(r)
                  , s = Vy(r);
                for (a.dm = "taclick_share",
                a.url = "mtah5-share-" + e,
                s.r2 = r.cid,
                s.r5 = (n = [],
                2 === (t = i).length && "mtah5_share" == t[0] && n.push(t[0] + "=" + t[1]),
                n.join(";")),
                e = 0,
                a = (r = [a, Ky(r), s, Hy(), By({
                    version: this.version
                }), {
                    random: +new Date
                }]).length; e < a; e++)
                    for (var u in r[e])
                        r[e].hasOwnProperty(u) && o.push(u + "=" + (void 0 === r[e][u] ? "" : r[e][u]));
                u = "https://pingtas.qq.com/webview/pingd?" + o.join("&");
                var c = new Image;
                c.onload = c.onerror = c.onabort = function() {
                    c = c.onload = c.onerror = c.onabort = null
                }
                ,
                c.src = u
            } else
                console.log("MTA H5分析错误提示：您没有设置cid,请到管理台开通自定义事件并更新统计代码")
        }
    };
    var zy = function() {
        function e() {
            bn(this, e);
            try {
                $y.init({
                    sid: "500690998",
                    cid: "500691017",
                    autoReport: 0,
                    senseHash: 0,
                    senseQuery: 0,
                    performanceMonitor: 0,
                    ignoreParams: []
                })
            } catch (p_) {}
        }
        return Gn(e, [{
            key: "report",
            value: function(e, t) {
                try {
                    $y.clickStat(e, t)
                } catch (p_) {}
            }
        }, {
            key: "stat",
            value: function() {
                try {
                    $y.pgv()
                } catch (p_) {}
            }
        }]),
        e
    }()
      , Yy = function(e) {
        Fn(n, e);
        var t = Wn(n);
        function n(e) {
            var r;
            bn(this, n),
            (r = t.call(this, e)).MTA = new zy;
            var o = r.tim.innerEmitter;
            return o.on(pd, r._stat, zn(r)),
            o.on(ld, r._stat, zn(r)),
            r
        }
        return Gn(n, [{
            key: "_stat",
            value: function() {
                this.MTA.report("sdkappid", {
                    value: this.tim.context.SDKAppID
                }),
                this.MTA.report("version", {
                    value: "2.8.4"
                }),
                this.MTA.stat()
            }
        }]),
        n
    }(Dd)
      , Wy = function() {
        function e(t) {
            bn(this, e),
            this._table = "timwebii",
            this._report = []
        }
        return Gn(e, [{
            key: "pushIn",
            value: function(e) {
                Es.debug("SSOLogBody.pushIn", this._report.length, e),
                this._report.push(e)
            }
        }, {
            key: "backfill",
            value: function(e) {
                var t;
                Rs(e) && 0 !== e.length && (Es.debug("SSOLogBody.backfill", this._report.length, e.length),
                (t = this._report).unshift.apply(t, Xn(e)))
            }
        }, {
            key: "getLogsNumInMemory",
            value: function() {
                return this._report.length
            }
        }, {
            key: "isEmpty",
            value: function() {
                return 0 === this._report.length
            }
        }, {
            key: "_reset",
            value: function() {
                this._report.length = 0,
                this._report = []
            }
        }, {
            key: "getTable",
            value: function() {
                return this._table
            }
        }, {
            key: "getLogsInMemory",
            value: function() {
                var e = this._report.slice();
                return this._reset(),
                e
            }
        }]),
        e
    }()
      , Jy = function(e) {
        Fn(n, e);
        var t = Wn(n);
        function n(e) {
            var r;
            return bn(this, n),
            (r = t.call(this, e)).TAG = "im-ssolog-event",
            r._reportBody = new Wy,
            r._version = "2.8.4",
            r.MIN_THRESHOLD = 20,
            r.MAX_THRESHOLD = 100,
            r.WAITING_TIME = 6e4,
            r.INTERVAL = 2e4,
            r._timerID = 0,
            r._resetLastReportTime(),
            r._startReportTimer(),
            r._retryCount = 0,
            r.MAX_RETRY_COUNT = 3,
            r.tim.innerEmitter.on(ed, r._onLoginSuccess, zn(r)),
            r
        }
        return Gn(n, [{
            key: "reportAtOnce",
            value: function() {
                Es.debug("EventStatController.reportAtOnce"),
                this._report()
            }
        }, {
            key: "_onLoginSuccess",
            value: function() {
                var e = this
                  , t = this.tim.storage
                  , n = t.getItem(this.TAG, !1);
                !au(n) && Ls(n.forEach) && (Es.log("EventStatController._onLoginSuccess get ssolog in storage, nums=" + n.length),
                n.forEach((function(t) {
                    e._reportBody.pushIn(t)
                }
                )),
                t.removeItem(this.TAG, !1))
            }
        }, {
            key: "pushIn",
            value: function(e) {
                e instanceof Wd && (e.setCommonInfo({
                    SDKAppID: this.tim.context.SDKAppID,
                    version: this._version,
                    tinyID: this.tim.context.tinyID,
                    userID: this.tim.loginInfo.identifier,
                    platform: this.getPlatform(),
                    scene: this.tim.context.scene,
                    instanceID: this.tim.context.instanceID
                }),
                this._reportBody.pushIn(e),
                this._reportBody.getLogsNumInMemory() >= this.MIN_THRESHOLD && this._report())
            }
        }, {
            key: "_resetLastReportTime",
            value: function() {
                this._lastReportTime = Date.now()
            }
        }, {
            key: "_startReportTimer",
            value: function() {
                var e = this;
                this._timerID = setInterval((function() {
                    Date.now() < e._lastReportTime + e.WAITING_TIME || e._reportBody.isEmpty() || e._report()
                }
                ), this.INTERVAL)
            }
        }, {
            key: "_stopReportTimer",
            value: function() {
                this._timerID > 0 && (clearInterval(this._timerID),
                this._timerID = 0)
            }
        }, {
            key: "_report",
            value: function() {
                var e = this;
                if (!this._reportBody.isEmpty()) {
                    var t = this._reportBody.getLogsInMemory();
                    this.request({
                        name: "ssoEventStat",
                        action: "create",
                        param: {
                            table: this._reportBody.getTable(),
                            report: t
                        }
                    }).then((function() {
                        e._resetLastReportTime(),
                        e._retryCount > 0 && (Es.debug("EventStatController.report retry success"),
                        e._retryCount = 0)
                    }
                    )).catch((function(n) {
                        if (Es.warn("EventStatController.report, networkType:".concat(e.getNetworkType(), " error:").concat(qs(n))),
                        e._reportBody.backfill(t),
                        e._reportBody.getLogsNumInMemory() > e.MAX_THRESHOLD || e._retryCount === e.MAX_RETRY_COUNT || 0 === e._timerID)
                            return e._retryCount = 0,
                            void e._flushAtOnce();
                        e._retryCount += 1
                    }
                    ))
                }
            }
        }, {
            key: "_flushAtOnce",
            value: function() {
                var e = this.tim.storage
                  , t = e.getItem(this.TAG, !1)
                  , n = this._reportBody.getLogsInMemory();
                if (au(t))
                    Es.log("EventStatController._flushAtOnce nums=" + n.length),
                    e.setItem(this.TAG, n, !0, !1);
                else {
                    var r = n.concat(t);
                    r.length > this.MAX_THRESHOLD && (r = r.slice(0, this.MAX_THRESHOLD)),
                    Es.log("EventStatController._flushAtOnce nums=" + r.length),
                    e.setItem(this.TAG, r, !0, !1)
                }
            }
        }, {
            key: "reset",
            value: function() {
                Es.log("EventStatController.reset"),
                this._stopReportTimer(),
                this._report()
            }
        }]),
        n
    }(Dd)
      , Xy = "none"
      , Qy = "online"
      , Zy = function() {
        function e() {
            bn(this, e),
            this._networkType = "",
            this.maxWaitTime = 3e3
        }
        return Gn(e, [{
            key: "start",
            value: function() {
                var e = this;
                Ka ? (Ha.getNetworkType({
                    success: function(t) {
                        e._networkType = t.networkType,
                        t.networkType === Xy ? Es.warn("NetMonitor no network, please check!") : Es.info("NetMonitor networkType:".concat(t.networkType))
                    }
                }),
                Ha.onNetworkStatusChange(this._onNetworkStatusChange.bind(this))) : this._networkType = Qy
            }
        }, {
            key: "_onNetworkStatusChange",
            value: function(e) {
                this._networkType = e.networkType,
                e.isConnected ? Es.info("NetMonitor networkType:".concat(e.networkType)) : Es.warn("NetMonitor no network, please check!")
            }
        }, {
            key: "probe",
            value: function() {
                var e = this;
                return new Promise((function(t, n) {
                    if (Ka)
                        Ha.getNetworkType({
                            success: function(n) {
                                e._networkType = n.networkType,
                                n.networkType === Xy ? (Es.warn("NetMonitor no network, please check!"),
                                t([!1, n.networkType])) : (Es.info("NetMonitor networkType:".concat(n.networkType)),
                                t([!0, n.networkType]))
                            }
                        });
                    else if (window && window.fetch)
                        fetch("".concat(zs(), "//webim-1252463788.file.myqcloud.com/assets/test/speed.xml?random=").concat(Math.random())).then((function(e) {
                            e.ok ? t([!0, Qy]) : t([!1, Xy])
                        }
                        )).catch((function(e) {
                            t([!1, Xy])
                        }
                        ));
                    else {
                        var r = new XMLHttpRequest
                          , o = setTimeout((function() {
                            Es.warn("NetMonitor fetch timeout. Probably no network, please check!"),
                            r.abort(),
                            e._networkType = Xy,
                            t([!1, Xy])
                        }
                        ), e.maxWaitTime);
                        r.onreadystatechange = function() {
                            4 === r.readyState && (clearTimeout(o),
                            200 === r.status || 304 === r.status ? (this._networkType = Qy,
                            t([!0, Qy])) : (Es.warn("NetMonitor fetch status:".concat(r.status, ". Probably no network, please check!")),
                            this._networkType = Xy,
                            t([!1, Xy])))
                        }
                        ,
                        r.open("GET", "".concat(zs(), "//webim-1252463788.file.myqcloud.com/assets/test/speed.xml?random=").concat(Math.random())),
                        r.send()
                    }
                }
                ))
            }
        }, {
            key: "getNetworkType",
            value: function() {
                return this._networkType
            }
        }, {
            key: "reset",
            value: function() {
                this._networkType = ""
            }
        }]),
        e
    }()
      , e_ = function() {
        function e(t) {
            var n = this;
            bn(this, e),
            Rs(t) ? (this._map = new Map,
            t.forEach((function(e) {
                n._map.set(e, [])
            }
            ))) : Es.warn("AverageCalculator.constructor need keys")
        }
        return Gn(e, [{
            key: "push",
            value: function(e, t) {
                return !(As(e) || !this._map.has(e) || !Ts(t)) && (this._map.get(e).push(t),
                !0)
            }
        }, {
            key: "getSize",
            value: function(e) {
                return As(e) || !this._map.has(e) ? -1 : this._map.get(e).length
            }
        }, {
            key: "getAvg",
            value: function(e) {
                if (As(e) || !this._map.has(e))
                    return -1;
                var t = this._map.get(e)
                  , n = t.length;
                if (0 === n)
                    return 0;
                var r = 0;
                return t.forEach((function(e) {
                    r += e
                }
                )),
                t.length = 0,
                this._map.set(e, []),
                parseInt(r / n)
            }
        }, {
            key: "getMax",
            value: function(e) {
                return As(e) || !this._map.has(e) ? -1 : Math.max.apply(null, this._map.get(e))
            }
        }, {
            key: "getMin",
            value: function(e) {
                return As(e) || !this._map.has(e) ? -1 : Math.min.apply(null, this._map.get(e))
            }
        }, {
            key: "reset",
            value: function() {
                this._map.forEach((function(e) {
                    e.length = 0
                }
                ))
            }
        }]),
        e
    }()
      , t_ = function() {
        function e(t) {
            var n = this;
            bn(this, e),
            Rs(t) ? (this._map = new Map,
            t.forEach((function(e) {
                n._map.set(e, {
                    totalCount: 0,
                    successCount: 0
                })
            }
            ))) : Es.warn("SuccessRateCalculator.constructor need keys")
        }
        return Gn(e, [{
            key: "addTotalCount",
            value: function(e) {
                return !(As(e) || !this._map.has(e)) && (this._map.get(e).totalCount += 1,
                !0)
            }
        }, {
            key: "addSuccessCount",
            value: function(e) {
                return !(As(e) || !this._map.has(e)) && (this._map.get(e).successCount += 1,
                !0)
            }
        }, {
            key: "getSuccessRate",
            value: function(e) {
                if (As(e) || !this._map.has(e))
                    return -1;
                var t = this._map.get(e);
                if (0 === t.totalCount)
                    return 1;
                var n = parseFloat((t.successCount / t.totalCount).toFixed(2));
                return n > 1 && (n = 1),
                t.totalCount = t.successCount = 0,
                n
            }
        }, {
            key: "getTotalCount",
            value: function(e) {
                return As(e) || !this._map.has(e) ? -1 : this._map.get(e).totalCount
            }
        }, {
            key: "reset",
            value: function() {
                this._map.forEach((function(e) {
                    e.totalCount = 0,
                    e.successCount = 0
                }
                ))
            }
        }]),
        e
    }()
      , n_ = function(e) {
        Fn(n, e);
        var t = Wn(n);
        function n(e) {
            var r;
            return bn(this, n),
            (r = t.call(this, e)).TABLE = "timwebsum",
            r.TAG = "im-ssolog-sumstat",
            r._items = [Gd, Ud, xd, qd, Fd, jd, Vd, Bd, Kd, Hd],
            r._thresholdMap = new Map,
            r._thresholdMap.set(Gd, 100),
            r._thresholdMap.set(Ud, 150),
            r._thresholdMap.set(xd, 15),
            r._thresholdMap.set(qd, 6),
            r._thresholdMap.set(Fd, 6),
            r._thresholdMap.set(jd, 6),
            r._thresholdMap.set(Vd, 6),
            r._thresholdMap.set(Bd, 6),
            r._thresholdMap.set(Kd, 50),
            r._thresholdMap.set(Hd, 50),
            r._lpID = "",
            r._platform = r.getPlatform(),
            r._lastReportTime = 0,
            r._statInfoArr = [],
            r._retryCount = 0,
            r._avgCalc = new e_(r._items),
            r._successRateCalc = new t_(r._items),
            r.tim.innerEmitter.on(ed, r._onLoginSuccess, zn(r)),
            r
        }
        return Gn(n, [{
            key: "_onLoginSuccess",
            value: function() {
                var e = this
                  , t = this.tim.storage
                  , n = t.getItem(this.TAG, !1);
                !au(n) && Ls(n.forEach) && (Es.log("SumStatController._onLoginSuccess get sumstatlog in storage, nums=" + n.length),
                n.forEach((function(t) {
                    e._statInfoArr.push(t)
                }
                )),
                t.removeItem(this.TAG, !1))
            }
        }, {
            key: "recordLongPollingID",
            value: function(e) {
                this._lpID = e
            }
        }, {
            key: "addTotalCount",
            value: function(e) {
                this._successRateCalc.addTotalCount(e) ? 1 === this._successRateCalc.getTotalCount(e) && (this._lastReportTime = Date.now()) : Es.warn("SumStatController.addTotalCount invalid key:", e)
            }
        }, {
            key: "addSuccessCount",
            value: function(e) {
                this._successRateCalc.addSuccessCount(e) || Es.warn("SumStatController.addSuccessCount invalid key:", e)
            }
        }, {
            key: "addCost",
            value: function(e, t) {
                this._avgCalc.push(e, t) ? (Es.debug("SumStatController.addCost", e, t, this._avgCalc.getSize(e)),
                this._avgCalc.getSize(e) >= this._thresholdMap.get(e) && this._report(e)) : Es.warn("SumStatController.addCost invalid key or cost:", e, t)
            }
        }, {
            key: "_getItemNum",
            value: function(e) {
                switch (e) {
                case Gd:
                    return 1;
                case Ud:
                    return 2;
                case xd:
                    return 3;
                case Kd:
                    return 4;
                case Hd:
                    return 5;
                case qd:
                    return 6;
                case Fd:
                    return 7;
                case jd:
                    return 8;
                case Vd:
                    return 9;
                case Bd:
                    return 10;
                default:
                    return 100
                }
            }
        }, {
            key: "_getStatInfo",
            value: function(e) {
                var t = null;
                return this._avgCalc.getSize(e) > 0 && (t = {
                    SDKAppID: "".concat(this.tim.context.SDKAppID),
                    version: "".concat("2.8.4"),
                    tinyID: this.tim.context.tinyID,
                    userID: this.tim.loginInfo.identifier,
                    item: this._getItemNum(e),
                    lpID: e === Gd ? this._lpID : "",
                    platform: this._platform,
                    scene: this.tim.context.scene,
                    networkType: this.getNetworkType(),
                    total: this._successRateCalc.getTotalCount(e),
                    successRate: this._successRateCalc.getSuccessRate(e),
                    avg: this._avgCalc.getAvg(e),
                    timespan: Date.now() - this._lastReportTime,
                    time: Fs()
                }),
                t
            }
        }, {
            key: "_report",
            value: function(e) {
                var t = this
                  , n = []
                  , r = null;
                As(e) ? this._items.forEach((function(e) {
                    null !== (r = t._getStatInfo(e)) && n.push(r)
                }
                )) : null !== (r = this._getStatInfo(e)) && n.push(r),
                Es.debug("SumStatController._report", n),
                this._statInfoArr.length > 0 && (n = n.concat(this.statInfoArr),
                this._statInfoArr = []),
                this._doReport(n)
            }
        }, {
            key: "_doReport",
            value: function(e) {
                var t = this;
                au(e) ? Es.warn("SumStatController._doReport statInfoArr is empty, do nothing") : this.request({
                    name: "ssoSumStat",
                    action: "create",
                    param: {
                        table: this.TABLE,
                        report: e
                    }
                }).then((function() {
                    t._lastReportTime = Date.now(),
                    t._retryCount > 0 && (Es.debug("SumStatController._doReport retry success"),
                    t._retryCount = 0)
                }
                )).catch((function(n) {
                    Es.warn("SumStatController._doReport, online:".concat(t.getNetworkType(), " error:").concat(qs(n)), e),
                    t._retryCount <= 1 ? setTimeout((function() {
                        Es.info("SumStatController._doReport retry", e),
                        t._retryCount += 1,
                        t._doReport(e)
                    }
                    ), 5e3) : (t._retryCount = 0,
                    t._statInfoArr = t._statInfoArr.concat(e),
                    t._flushAtOnce())
                }
                ))
            }
        }, {
            key: "_flushAtOnce",
            value: function() {
                var e = this.tim.storage
                  , t = e.getItem(this.TAG, !1)
                  , n = this._statInfoArr;
                if (au(t))
                    Es.log("SumStatController._flushAtOnce nums=" + n.length),
                    e.setItem(this.TAG, n, !0, !1);
                else {
                    var r = n.concat(t);
                    r.length > 10 && (r = r.slice(0, 10)),
                    Es.log("SumStatController._flushAtOnce nums=" + r.length),
                    e.setItem(this.TAG, r, !0, !1)
                }
                this._statInfoArr = []
            }
        }, {
            key: "reset",
            value: function() {
                Es.info("SumStatController.reset"),
                this._report(),
                this._avgCalc.reset(),
                this._successRateCalc.reset()
            }
        }]),
        n
    }(Dd)
      , r_ = function() {
        function e() {
            bn(this, e),
            this._funcMap = new Map
        }
        return Gn(e, [{
            key: "defense",
            value: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
                if ("string" != typeof e)
                    return null;
                if (0 === e.length)
                    return null;
                if ("function" != typeof t)
                    return null;
                if (this._funcMap.has(e) && this._funcMap.get(e).has(t))
                    return this._funcMap.get(e).get(t);
                this._funcMap.has(e) || this._funcMap.set(e, new Map);
                var r = null;
                return this._funcMap.get(e).has(t) ? r = this._funcMap.get(e).get(t) : (r = this._pack(e, t, n),
                this._funcMap.get(e).set(t, r)),
                r
            }
        }, {
            key: "defenseOnce",
            value: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
                return "function" != typeof t ? null : this._pack(e, t, n)
            }
        }, {
            key: "find",
            value: function(e, t) {
                return "string" != typeof e || 0 === e.length || "function" != typeof t ? null : this._funcMap.has(e) ? this._funcMap.get(e).has(t) ? this._funcMap.get(e).get(t) : (Es.log("SafetyCallback.find: 找不到 func —— ".concat(e, "/").concat("" !== t.name ? t.name : "[anonymous]")),
                null) : (Es.log("SafetyCallback.find: 找不到 eventName-".concat(e, " 对应的 func")),
                null)
            }
        }, {
            key: "delete",
            value: function(e, t) {
                return "function" == typeof t && (!!this._funcMap.has(e) && (!!this._funcMap.get(e).has(t) && (this._funcMap.get(e).delete(t),
                0 === this._funcMap.get(e).size && this._funcMap.delete(e),
                !0)))
            }
        }, {
            key: "_pack",
            value: function(e, t, n) {
                return function() {
                    try {
                        t.apply(n, Array.from(arguments))
                    } catch (a) {
                        var r = Object.values(Cn).indexOf(e);
                        if (-1 !== r) {
                            var o = Object.keys(Cn)[r];
                            Es.warn("接入侧事件 TIM.EVENT.".concat(o, " 对应的回调函数逻辑存在问题，请检查！"), a)
                        }
                        var i = new Wd(em);
                        i.setText("eventName=".concat(e)).setMessage(a.message).setEnd()
                    }
                }
            }
        }]),
        e
    }()
      , o_ = function(e) {
        Fn(n, e);
        var t = Wn(n);
        function n(e) {
            var r;
            return bn(this, n),
            (r = t.call(this, e))._maybeLostSequencesMap = new Map,
            r
        }
        return Gn(n, [{
            key: "onMessageMaybeLost",
            value: function(e, t, n) {
                this._maybeLostSequencesMap.has(e) || this._maybeLostSequencesMap.set(e, []);
                for (var r = this._maybeLostSequencesMap.get(e), o = 0; o < n; o++)
                    r.push(t + o);
                Es.debug("MessageLossController.onMessageMaybeLost. maybeLostSequences:".concat(r))
            }
        }, {
            key: "detectMessageLoss",
            value: function(e, t) {
                var n = this._maybeLostSequencesMap.get(e);
                if (!au(n) && !au(t)) {
                    var r = t.filter((function(e) {
                        return -1 !== n.indexOf(e)
                    }
                    ));
                    if (Es.debug("MessageLossController.detectMessageLoss. matchedSequences:".concat(r)),
                    n.length === r.length)
                        Es.info("MessageLossController.detectMessageLoss no message loss. conversationID=".concat(e));
                    else {
                        var o, i = n.filter((function(e) {
                            return -1 === r.indexOf(e)
                        }
                        )), a = i.length;
                        a <= 5 ? o = e + "-" + i.join("-") : (i.sort((function(e, t) {
                            return e - t
                        }
                        )),
                        o = e + " start:" + i[0] + " end:" + i[a - 1] + " count:" + a),
                        new Wd($g).setText(o).setNetworkType(this.getNetworkType()).setEnd(),
                        Es.warn("MessageLossController.detectMessageLoss message loss detected. conversationID:".concat(e, " lostSequences:").concat(i))
                    }
                    n.length = 0
                }
            }
        }, {
            key: "reset",
            value: function() {
                Es.log("MessageLossController.reset"),
                this._maybeLostSequencesMap.clear()
            }
        }]),
        n
    }(Dd)
      , i_ = function(e) {
        Fn(r, e);
        var t, n = Wn(r);
        function r(e) {
            var t;
            return bn(this, r),
            (t = n.call(this, e))._request = Ka ? new gv : new dv,
            t
        }
        return Gn(r, [{
            key: "sendMessage",
            value: (t = Nn(regeneratorRuntime.mark((function e(t) {
                var n, r, o, i, a, s, u, c, l, p, f, h, d, g, m, v, y, _, I;
                return regeneratorRuntime.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (null !== (n = this._constructMessageInstance(t))) {
                                e.next = 3;
                                break
                            }
                            return e.abrupt("return", Nd({
                                code: Kp.MESSAGE_SEND_FAIL,
                                message: Qp
                            }));
                        case 3:
                            return r = Date.now(),
                            o = au(t.GroupId) ? "openim/sendmsg" : "group_open_http_svc/send_group_msg",
                            i = this.tim.context,
                            a = i.a2Key,
                            s = i.tinyID,
                            u = i.SDKAppID,
                            c = i.identifier,
                            l = !0 === this.tim.context.oversea ? "api.im.qcloud.com" : "webim.tim.qq.com",
                            p = "https://" + l + "/v4/" + o + "?platform=10&websdkappid=537048168&v=1.7.3&a2=" + a + "&tinyid=" + s + "&sdkappid=" + u + "&contentType=json&apn=1&reqtime=" + Date.now() + "tjg_id=" + this._generateTjgID(n),
                            f = {
                                url: p,
                                data: t,
                                method: "POST"
                            },
                            this._addSendMessageTotalCount(n),
                            (h = new Wd(ag)).setText("".concat(this._generateTjgID(n), "-").concat(n.from, "-").concat(n.to, "-").concat(n.getElements().length)),
                            e.prev = 12,
                            e.next = 15,
                            this._request.request(f);
                        case 15:
                            if (d = e.sent,
                            g = d.data,
                            m = g.ErrorCode,
                            v = g.ErrorInfo,
                            0 === m) {
                                e.next = 21;
                                break
                            }
                            return h.setCode(m).setMessage(v).setNetworkType(this.getNetworkType()).setEnd(),
                            n.status = ec.FAIL,
                            e.abrupt("return", Nd(new Bp({
                                code: m,
                                message: v || Qp,
                                data: {
                                    message: n
                                }
                            })));
                        case 21:
                            return this._addSendMessageSuccessCount(n, r),
                            n.status = ec.SUCCESS,
                            y = d.data,
                            _ = y.MsgTime,
                            I = y.MsgSeq,
                            n.time = _,
                            I && (n.sequence = I),
                            n.generateMessageID(c),
                            this.tim.messageController.pushToMessageList(n),
                            this.emitInnerEvent(Ah, {
                                eventDataList: [{
                                    conversationID: n.conversationID,
                                    unreadCount: 0,
                                    type: n.conversationType,
                                    subType: n.conversationSubType,
                                    lastMessage: n
                                }]
                            }),
                            e.abrupt("return", Ld(n));
                        case 32:
                            return e.prev = 32,
                            e.t0 = e.catch(12),
                            this.probeNetwork().then((function(t) {
                                var n = Jn(t, 2)
                                  , r = n[0]
                                  , o = n[1];
                                h.setError(e.t0, r, o).setEnd()
                            }
                            )),
                            Es.warn("ComboMessageController.sendMessage failed. error:", e.t0),
                            n.status = ec.FAIL,
                            e.abrupt("return", Nd(new Bp({
                                code: Kp.MESSAGE_SEND_FAIL,
                                message: Qp,
                                data: {
                                    message: n
                                }
                            })));
                        case 38:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, this, [[12, 32]])
            }
            ))),
            function(e) {
                return t.apply(this, arguments)
            }
            )
        }, {
            key: "_constructMessageInstance",
            value: function(e) {
                var t = null;
                try {
                    var n = this.tim.context.identifier
                      , r = {};
                    r.currentUser = n,
                    r.from = e.From_Account || n,
                    e.GroupId ? (r.conversationID = "".concat(En.CONV_GROUP).concat(e.GroupId),
                    r.conversationType = En.CONV_GROUP,
                    r.to = e.GroupId) : e.To_Account && (r.conversationID = "".concat(En.CONV_C2C).concat(e.To_Account),
                    r.conversationType = En.CONV_C2C,
                    r.to = e.To_Account),
                    r.time = e.MsgTimeStamp || 0,
                    r.random = e.Random || e.MsgRandom || 0,
                    r.priority = e.MsgPriority,
                    (t = new oh(r)).status = ec.UNSEND;
                    for (var o, i = e.MsgBody.length, a = 0; a < i; a++)
                        "TIMTextElem" === (o = e.MsgBody[a]).MsgType ? t.setTextElement(o.MsgContent.Text) : "TIMCustomElem" === o.MsgType ? t.setCustomElement({
                            data: o.MsgContent.Data || "",
                            description: o.MsgContent.Desc || "",
                            extension: o.MsgContent.Ext || ""
                        }) : "TIMFaceElem" === o.MsgType && t.setFaceElement({
                            index: o.MsgContent.Index,
                            data: o.MsgContent.Data
                        });
                    var s = t.getElements();
                    t.payload = s[0].content,
                    t.type = s[0].type
                } catch (p_) {
                    t = null,
                    Es.error("ComboMessageController._constructMessageInstance failed. error:", p_)
                }
                return t
            }
        }, {
            key: "_addSendMessageSuccessCount",
            value: function(e, t) {
                var n = this.tim.sumStatController
                  , r = Math.abs(Date.now() - t);
                n.addSuccessCount(xd),
                n.addCost(xd, r);
                var o = this._getSendMessageSpecifiedKey(e);
                o && (n.addSuccessCount(o),
                n.addCost(o, r))
            }
        }, {
            key: "_addSendMessageTotalCount",
            value: function(e) {
                var t = this.tim.sumStatController;
                t.addTotalCount(xd);
                var n = this._getSendMessageSpecifiedKey(e);
                n && t.addTotalCount(n)
            }
        }, {
            key: "_getSendMessageSpecifiedKey",
            value: function(e) {
                if (e.conversationType === En.CONV_C2C)
                    return qd;
                if (e.conversationType === En.CONV_GROUP) {
                    var t = this.tim.groupController.getLocalGroupProfile(e.to);
                    if (!t)
                        return;
                    var n = t.type;
                    if (Js(n))
                        return Fd;
                    if (Xs(n))
                        return jd;
                    if (Qs(n))
                        return Vd;
                    if (Zs(n))
                        return Bd
                }
            }
        }, {
            key: "_generateTjgID",
            value: function(e) {
                return this.tim.context.tinyID + "-" + e.random
            }
        }, {
            key: "reset",
            value: function() {
                Es.info("ComboMessageController.reset")
            }
        }]),
        r
    }(Dd)
      , a_ = function() {
        function e(t) {
            bn(this, e);
            var n = new Wd(Jd);
            Td.mixin(this),
            this._initOptions(t),
            this._initMemberVariables(),
            this._initControllers(),
            this._initListener(),
            Wd.bindController(this.eventStatController),
            n.setText("instanceID=".concat(this.loginInfo.instanceID, "-oversea=").concat(this.loginInfo.oversea, "-mp=").concat(Ka, "-ua=").concat(za)).setEnd(),
            Es.info("SDK instanceID:".concat(this.loginInfo.instanceID, " oversea:").concat(this.loginInfo.oversea, " inMiniApp:").concat(Ka, ", SDKAppID:").concat(t.SDKAppID, ", UserAgent:").concat(za)),
            this._safetyCallbackFactory = new r_
        }
        var t;
        return Gn(e, [{
            key: "login",
            value: function(e) {
                return Es.time(bd),
                this._ssoLog = new Wd(Xd),
                this.netMonitor.start(),
                this.loginInfo.identifier = e.identifier || e.userID,
                this.loginInfo.userSig = e.userSig,
                this.signController.login(this.loginInfo)
            }
        }, {
            key: "logout",
            value: function() {
                var e = this.signController.logout();
                return this.resetSDK(),
                e
            }
        }, {
            key: "on",
            value: function(e, t, n) {
                e === Cn.GROUP_SYSTEM_NOTICE_RECEIVED && Es.warn("！！！TIM.EVENT.GROUP_SYSTEM_NOTICE_RECEIVED v2.6.0起弃用，为了更好的体验，请在 TIM.EVENT.MESSAGE_RECEIVED 事件回调内接收处理群系统通知，详细请参考：https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/Message.html#.GroupSystemNoticePayload"),
                Es.debug("on", "eventName:".concat(e)),
                this.outerEmitter.on(e, this._safetyCallbackFactory.defense(e, t, n), n)
            }
        }, {
            key: "once",
            value: function(e, t, n) {
                Es.debug("once", "eventName:".concat(e)),
                this.outerEmitter.once(e, this._safetyCallbackFactory.defenseOnce(e, t, n), n || this)
            }
        }, {
            key: "off",
            value: function(e, t, n, r) {
                Es.debug("off", "eventName:".concat(e));
                var o = this._safetyCallbackFactory.find(e, t);
                null !== o && (this.outerEmitter.off(e, o, n, r),
                this._safetyCallbackFactory.delete(e, t))
            }
        }, {
            key: "registerPlugin",
            value: function(e) {
                var t = this;
                this.plugins || (this.plugins = {}),
                Object.keys(e).forEach((function(n) {
                    t.plugins[n] = e[n]
                }
                )),
                new Wd(ng).setText("key=".concat(Object.keys(e))).setEnd()
            }
        }, {
            key: "getPlugin",
            value: function(e) {
                return this.plugins[e] || void 0
            }
        }, {
            key: "setLogLevel",
            value: function(e) {
                if (e <= 0) {
                    console.log(["", " ________  ______  __       __  __       __  ________  _______", "|        \\|      \\|  \\     /  \\|  \\  _  |  \\|        \\|       \\", " \\$$$$$$$$ \\$$$$$$| $$\\   /  $$| $$ / \\ | $$| $$$$$$$$| $$$$$$$\\", "   | $$     | $$  | $$$\\ /  $$$| $$/  $\\| $$| $$__    | $$__/ $$", "   | $$     | $$  | $$$$\\  $$$$| $$  $$$\\ $$| $$  \\   | $$    $$", "   | $$     | $$  | $$\\$$ $$ $$| $$ $$\\$$\\$$| $$$$$   | $$$$$$$\\", "   | $$    _| $$_ | $$ \\$$$| $$| $$$$  \\$$$$| $$_____ | $$__/ $$", "   | $$   |   $$ \\| $$  \\$ | $$| $$$    \\$$$| $$     \\| $$    $$", "    \\$$    \\$$$$$$ \\$$      \\$$ \\$$      \\$$ \\$$$$$$$$ \\$$$$$$$", "", ""].join("\n")),
                    console.log("%cIM 智能客服，随时随地解决您的问题 →_→ https://cloud.tencent.com/act/event/smarty-service?from=im-doc", "color:#ff0000");
                    console.log(["", "参考以下文档，会更快解决问题哦！(#^.^#)\n", "SDK 更新日志: https://cloud.tencent.com/document/product/269/38492\n", "SDK 接口文档: https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html\n", "常见问题: https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/tutorial-01-faq.html\n", "反馈问题？戳我提 issue: https://github.com/tencentyun/TIMSDK/issues\n", "如果您需要在生产环境关闭上面的日志，请 tim.setLogLevel(1)\n"].join("\n"))
                }
                Es.setLevel(e)
            }
        }, {
            key: "destroy",
            value: function() {
                this.logout(),
                this.outerEmitter.emit(Cn.SDK_DESTROY, {
                    SDKAppID: this.loginInfo.SDKAppID
                })
            }
        }, {
            key: "createTextMessage",
            value: function(e) {
                return this.messageController.createTextMessage(e)
            }
        }, {
            key: "createImageMessage",
            value: function(e) {
                return this.messageController.createImageMessage(e)
            }
        }, {
            key: "createAudioMessage",
            value: function(e) {
                return this.messageController.createAudioMessage(e)
            }
        }, {
            key: "createVideoMessage",
            value: function(e) {
                return this.messageController.createVideoMessage(e)
            }
        }, {
            key: "createCustomMessage",
            value: function(e) {
                return this.messageController.createCustomMessage(e)
            }
        }, {
            key: "createFaceMessage",
            value: function(e) {
                return this.messageController.createFaceMessage(e)
            }
        }, {
            key: "createFileMessage",
            value: function(e) {
                return this.messageController.createFileMessage(e)
            }
        }, {
            key: "sendMessage",
            value: function(e, t) {
                return e instanceof oh ? this.messageController.sendMessageInstance(e, t) : Nd(new Bp({
                    code: Kp.MESSAGE_SEND_NEED_MESSAGE_INSTANCE,
                    message: ef
                }))
            }
        }, {
            key: "callExperimentalAPI",
            value: (t = Nn(regeneratorRuntime.mark((function e(t, n) {
                return regeneratorRuntime.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if ("sendComboMessage" !== t) {
                                e.next = 4;
                                break
                            }
                            return e.next = 3,
                            this.comboMessageController.sendMessage(n);
                        case 3:
                            return e.abrupt("return", e.sent);
                        case 4:
                            return e.abrupt("return", Nd(new Bp({
                                code: Kp.INVALID_OPERATION,
                                message: Wf
                            })));
                        case 5:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, this)
            }
            ))),
            function(e, n) {
                return t.apply(this, arguments)
            }
            )
        }, {
            key: "revokeMessage",
            value: function(e) {
                return this.messageController.revokeMessage(e)
            }
        }, {
            key: "resendMessage",
            value: function(e) {
                return this.messageController.resendMessage(e)
            }
        }, {
            key: "getMessageList",
            value: function(e) {
                return this.messageController.getMessageList(e)
            }
        }, {
            key: "setMessageRead",
            value: function(e) {
                return this.messageController.setMessageRead(e)
            }
        }, {
            key: "getConversationList",
            value: function() {
                return this.conversationController.getConversationList()
            }
        }, {
            key: "getConversationProfile",
            value: function(e) {
                return this.conversationController.getConversationProfile(e)
            }
        }, {
            key: "deleteConversation",
            value: function(e) {
                return this.conversationController.deleteConversation(e)
            }
        }, {
            key: "getMyProfile",
            value: function() {
                return this.userController.getMyProfile()
            }
        }, {
            key: "getUserProfile",
            value: function(e) {
                return this.userController.getUserProfile(e)
            }
        }, {
            key: "updateMyProfile",
            value: function(e) {
                return this.userController.updateMyProfile(e)
            }
        }, {
            key: "getFriendList",
            value: function() {
                return this.userController.getFriendList()
            }
        }, {
            key: "deleteFriend",
            value: function(e) {
                return this.userController.deleteFriend(e)
            }
        }, {
            key: "getBlacklist",
            value: function() {
                return this.userController.getBlacklist()
            }
        }, {
            key: "addToBlacklist",
            value: function(e) {
                return this.userController.addBlacklist(e)
            }
        }, {
            key: "removeFromBlacklist",
            value: function(e) {
                return this.userController.deleteBlacklist(e)
            }
        }, {
            key: "getGroupList",
            value: function(e) {
                return this.groupController.getGroupList(e)
            }
        }, {
            key: "getGroupProfile",
            value: function(e) {
                return this.groupController.getGroupProfile(e)
            }
        }, {
            key: "createGroup",
            value: function(e) {
                return this.groupController.createGroup(e)
            }
        }, {
            key: "dismissGroup",
            value: function(e) {
                return this.groupController.dismissGroup(e)
            }
        }, {
            key: "updateGroupProfile",
            value: function(e) {
                return this.groupController.updateGroupProfile(e)
            }
        }, {
            key: "joinGroup",
            value: function(e) {
                return this.groupController.joinGroup(e)
            }
        }, {
            key: "quitGroup",
            value: function(e) {
                return this.groupController.quitGroup(e)
            }
        }, {
            key: "searchGroupByID",
            value: function(e) {
                return this.groupController.searchGroupByID(e)
            }
        }, {
            key: "changeGroupOwner",
            value: function(e) {
                return this.groupController.changeGroupOwner(e)
            }
        }, {
            key: "handleGroupApplication",
            value: function(e) {
                return this.groupController.handleGroupApplication(e)
            }
        }, {
            key: "setMessageRemindType",
            value: function(e) {
                return this.groupController.setMessageRemindType(e)
            }
        }, {
            key: "getGroupMemberList",
            value: function(e) {
                return this.groupController.getGroupMemberList(e)
            }
        }, {
            key: "getGroupMemberProfile",
            value: function(e) {
                return this.groupController.getGroupMemberProfile(e)
            }
        }, {
            key: "getGroupOnlineMemberCount",
            value: function(e) {
                return this.groupController.getGroupOnlineMemberCount(e)
            }
        }, {
            key: "addGroupMember",
            value: function(e) {
                return this.groupController.addGroupMember(e)
            }
        }, {
            key: "deleteGroupMember",
            value: function(e) {
                return this.groupController.deleteGroupMember(e)
            }
        }, {
            key: "setGroupMemberMuteTime",
            value: function(e) {
                return this.groupController.setGroupMemberMuteTime(e)
            }
        }, {
            key: "setGroupMemberRole",
            value: function(e) {
                return this.groupController.setGroupMemberRole(e)
            }
        }, {
            key: "setGroupMemberNameCard",
            value: function(e) {
                return this.groupController.setGroupMemberNameCard(e)
            }
        }, {
            key: "setGroupMemberCustomField",
            value: function(e) {
                return this.groupController.setGroupMemberCustomField(e)
            }
        }, {
            key: "_initOptions",
            value: function(e) {
                this.plugins = {},
                this._sdkReloadFlag = !1;
                var t = e.SDKAppID || 0
                  , n = Vs();
                this.context = {
                    SDKAppID: t,
                    accountType: n
                },
                this.loginInfo = {
                    SDKAppID: t,
                    accountType: n,
                    identifier: null,
                    userSig: null,
                    unlimitedAVChatRoom: e.unlimitedAVChatRoom || !1,
                    scene: e.scene || "",
                    oversea: e.oversea || !1,
                    avchatroomIDList: [],
                    instanceID: nu()
                },
                this.options = {
                    runLoopNetType: e.runLoopNetType || _p,
                    enablePointer: e.enablePointer || !1
                }
            }
        }, {
            key: "_initMemberVariables",
            value: function() {
                this.innerEmitter = new ky,
                this.outerEmitter = new ky,
                wd(this.outerEmitter),
                this.packageConfig = new Ry(this),
                this.storage = new Dy(this),
                this.netMonitor = new Zy,
                this.outerEmitter._emit = this.outerEmitter.emit,
                this.outerEmitter.emit = function(e, t) {
                    var n = arguments[0]
                      , r = [n, {
                        name: arguments[0],
                        data: arguments[1]
                    }];
                    this.outerEmitter._emit.apply(this.outerEmitter, r)
                }
                .bind(this),
                this.innerEmitter._emit = this.innerEmitter.emit,
                this.innerEmitter.emit = function(e, t) {
                    var n;
                    Os(arguments[1]) && arguments[1].data ? (Es.warn("inner eventData has data property, please check!"),
                    n = [e, {
                        name: arguments[0],
                        data: arguments[1].data
                    }]) : n = [e, {
                        name: arguments[0],
                        data: arguments[1]
                    }],
                    this.innerEmitter._emit.apply(this.innerEmitter, n)
                }
                .bind(this)
            }
        }, {
            key: "_initControllers",
            value: function() {
                this.exceptionController = new Cv(this),
                this.connectionController = new Mv(this),
                this.contextController = new Od(this),
                this.context = this.contextController.getContext(),
                this.signController = new nm(this),
                this.messageController = new py(this),
                this.comboMessageController = new i_(this),
                this.conversationController = new Vv(this),
                this.userController = new wv(this),
                this.groupController = new Ey(this),
                this.notificationController = new by(this),
                this.bigDataHallwayController = new Gy(this),
                this.statusController = new Sy(this),
                this.uploadController = new Py(this),
                this.messageLossController = new o_(this),
                this.eventStatController = new Jy(this),
                this.sumStatController = new n_(this),
                this.mtaReportController = new Yy(this),
                this._initReadyListener()
            }
        }, {
            key: "_initListener",
            value: function() {
                var e = this;
                if (this.innerEmitter.on(fd, this._onSDKReload, this),
                Ka && "function" == typeof Ha.onAppShow && "function" == typeof Ha.onAppHide) {
                    var t = null;
                    Ha.onAppHide((function() {
                        t = new Wd(Zg)
                    }
                    )),
                    Ha.onAppShow((function() {
                        null !== t && t.setNetworkType(e.netMonitor.getNetworkType()).setEnd()
                    }
                    ))
                }
            }
        }, {
            key: "_initReadyListener",
            value: function() {
                for (var e = this, t = this.readyList, n = 0, r = t.length; n < r; n++)
                    this[t[n]].ready((function() {
                        return e._readyHandle()
                    }
                    ))
            }
        }, {
            key: "_onSDKReload",
            value: function() {
                var e = this;
                Es.log("sdk reloading..."),
                this.resetSDK(),
                this.login(this.loginInfo).then((function(t) {
                    e._sdkReloadFlag = !0
                }
                ))
            }
        }, {
            key: "resetSDK",
            value: function() {
                var e = this;
                this.initList.forEach((function(t) {
                    e[t].reset && e[t].reset()
                }
                )),
                this.netMonitor.reset(),
                this.storage.reset(),
                this.resetReady(),
                this._initReadyListener(),
                this.outerEmitter.emit(Cn.SDK_NOT_READY)
            }
        }, {
            key: "_readyHandle",
            value: function() {
                for (var e = this.readyList, t = !0, n = 0, r = e.length; n < r; n++)
                    if (!this[e[n]].isReady()) {
                        t = !1;
                        break
                    }
                if (t) {
                    var o = Es.timeEnd(bd);
                    Es.warn("SDK is ready. cost=".concat(o, "ms")),
                    this.triggerReady(),
                    this.innerEmitter.emit(pd),
                    this.outerEmitter.emit(Cn.SDK_READY),
                    this._sdkReloadFlag && (this.outerEmitter.emit(Cn.SDK_RELOAD),
                    this.groupController.AVChatRoomHandler.joinAVChatRoomSilently(),
                    this._sdkReloadFlag = !1),
                    this._ssoLog.setNetworkType(this.netMonitor.getNetworkType()).setText(o).setEnd()
                }
            }
        }]),
        e
    }();
    a_.prototype.readyList = ["conversationController"],
    a_.prototype.initList = ["exceptionController", "connectionController", "signController", "contextController", "messageController", "comboMessageController", "conversationController", "userController", "groupController", "notificationController", "eventStatController", "sumStatController", "messageLossController", "statusController"];
    var s_ = {
        login: "login",
        on: "on",
        off: "off",
        ready: "ready",
        setLogLevel: "setLogLevel",
        joinGroup: "joinGroup",
        quitGroup: "quitGroup",
        registerPlugin: "registerPlugin",
        getGroupOnlineMemberCount: "getGroupOnlineMemberCount"
    };
    function u_(e, t) {
        return !(!e.isReady() && void 0 === s_[t]) || (e.innerEmitter.emit(od, new Bp({
            code: Kp.SDK_IS_NOT_READY,
            message: "".concat(t, " ").concat(Jf, "，请参考 https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/module-EVENT.html#.SDK_READY")
        })),
        !1)
    }
    var c_ = {}
      , l_ = {};
    return l_.create = function(e) {
        if (e.SDKAppID && c_[e.SDKAppID])
            return c_[e.SDKAppID];
        Es.log("TIM.create");
        var t = new a_(e);
        t.on(Cn.SDK_DESTROY, (function(e) {
            c_[e.data.SDKAppID] = null,
            delete c_[e.data.SDKAppID]
        }
        ));
        var n = function(e) {
            var t = Object.create(null);
            return Object.keys(fh).forEach((function(n) {
                if (e[n]) {
                    var r = fh[n]
                      , o = new tr;
                    t[r] = function() {
                        var t = Array.from(arguments);
                        return o.use((function(t, r) {
                            return u_(e, n) ? r() : Nd(new Bp({
                                code: Kp.SDK_IS_NOT_READY,
                                message: "".concat(n, " ").concat(Jf, "。")
                            }))
                        }
                        )).use((function(e, t) {
                            if (!0 === su(e, ph[n], r))
                                return t()
                        }
                        )).use((function(t, r) {
                            return e[n].apply(e, t)
                        }
                        )),
                        o.run(t)
                    }
                }
            }
            )),
            t
        }(t);
        return c_[e.SDKAppID] = n,
        Es.log("TIM.create ok"),
        n
    }
    ,
    l_.TYPES = En,
    l_.EVENT = Cn,
    l_.VERSION = "2.8.4",
    Es.log("TIM.VERSION: ".concat(l_.VERSION)),
    l_
}
));
