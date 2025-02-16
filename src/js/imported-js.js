!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define("uikit", e)
    : ((t = t || self).UIkit = e());
})(this, function () {
  "use strict";
  var t = Object.prototype,
    i = t.hasOwnProperty;
  function l(t, e) {
    return i.call(t, e);
  }
  var e = {},
    n = /([a-z\d])([A-Z])/g;
  function d(t) {
    return t in e || (e[t] = t.replace(n, "$1-$2").toLowerCase()), e[t];
  }
  var r = /-(\w)/g;
  function f(t) {
    return t.replace(r, o);
  }
  function o(t, e) {
    return e ? e.toUpperCase() : "";
  }
  function p(t) {
    return t.length ? o(0, t.charAt(0)) + t.slice(1) : "";
  }
  var s = String.prototype,
    a =
      s.startsWith ||
      function (t) {
        return 0 === this.lastIndexOf(t, 0);
      };
  function w(t, e) {
    return a.call(t, e);
  }
  var h =
    s.endsWith ||
    function (t) {
      return this.substr(-t.length) === t;
    };
  function u(t, e) {
    return h.call(t, e);
  }
  function c(t, e) {
    return !!~this.indexOf(t, e);
  }
  var m = Array.prototype,
    g = s.includes || c,
    v = m.includes || c;
  function b(t, e) {
    return t && (D(t) ? g : v).call(t, e);
  }
  var x =
    m.findIndex ||
    function (t) {
      for (var e = arguments, i = 0; i < this.length; i++)
        if (t.call(e[1], this[i], i, this)) return i;
      return -1;
    };
  function y(t, e) {
    return x.call(t, e);
  }
  var k = Array.isArray;
  function $(t) {
    return "function" == typeof t;
  }
  function I(t) {
    return null !== t && "object" == typeof t;
  }
  var S = t.toString;
  function T(t) {
    return "[object Object]" === S.call(t);
  }
  function E(t) {
    return I(t) && t === t.window;
  }
  function _(t) {
    return I(t) && 9 === t.nodeType;
  }
  function C(t) {
    return I(t) && !!t.jquery;
  }
  function A(t) {
    return I(t) && 1 <= t.nodeType;
  }
  function M(t) {
    return I(t) && 1 === t.nodeType;
  }
  function N(t) {
    return S.call(t).match(/^\[object (NodeList|HTMLCollection)\]$/);
  }
  function z(t) {
    return "boolean" == typeof t;
  }
  function D(t) {
    return "string" == typeof t;
  }
  function B(t) {
    return "number" == typeof t;
  }
  function P(t) {
    return B(t) || (D(t) && !isNaN(t - parseFloat(t)));
  }
  function O(t) {
    return !(k(t) ? t.length : I(t) && Object.keys(t).length);
  }
  function H(t) {
    return void 0 === t;
  }
  function L(t) {
    return z(t)
      ? t
      : "true" === t ||
          "1" === t ||
          "" === t ||
          ("false" !== t && "0" !== t && t);
  }
  function F(t) {
    var e = Number(t);
    return !isNaN(e) && e;
  }
  function j(t) {
    return parseFloat(t) || 0;
  }
  function W(t) {
    return A(t) ? t : N(t) || C(t) ? t[0] : k(t) ? W(t[0]) : null;
  }
  function V(t) {
    return A(t)
      ? [t]
      : N(t)
      ? m.slice.call(t)
      : k(t)
      ? t.map(W).filter(Boolean)
      : C(t)
      ? t.toArray()
      : [];
  }
  function R(t) {
    return E(t)
      ? t
      : (t = W(t))
      ? (_(t) ? t : t.ownerDocument).defaultView
      : window;
  }
  function q(t) {
    return k(t)
      ? t
      : D(t)
      ? t.split(/,(?![^(]*\))/).map(function (t) {
          return P(t) ? F(t) : L(t.trim());
        })
      : [t];
  }
  function U(t) {
    return t ? (u(t, "ms") ? j(t) : 1e3 * j(t)) : 0;
  }
  function Y(t, i) {
    return (
      t === i ||
      (I(t) &&
        I(i) &&
        Object.keys(t).length === Object.keys(i).length &&
        J(t, function (t, e) {
          return t === i[e];
        }))
    );
  }
  function X(t, e, i) {
    return t.replace(new RegExp(e + "|" + i, "g"), function (t) {
      return t === e ? i : e;
    });
  }
  var G =
    Object.assign ||
    function (t) {
      for (var e = [], i = arguments.length - 1; 0 < i--; )
        e[i] = arguments[i + 1];
      t = Object(t);
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        if (null !== r) for (var o in r) l(r, o) && (t[o] = r[o]);
      }
      return t;
    };
  function K(t) {
    return t[t.length - 1];
  }
  function J(t, e) {
    for (var i in t) if (!1 === e(t[i], i)) return !1;
    return !0;
  }
  function Z(t, r) {
    return t.sort(function (t, e) {
      var i = t[r];
      void 0 === i && (i = 0);
      var n = e[r];
      return void 0 === n && (n = 0), n < i ? 1 : i < n ? -1 : 0;
    });
  }
  function Q(t, i) {
    var n = new Set();
    return t.filter(function (t) {
      var e = t[i];
      return !n.has(e) && (n.add(e) || !0);
    });
  }
  function tt(t, e, i) {
    return (
      void 0 === e && (e = 0),
      void 0 === i && (i = 1),
      Math.min(Math.max(F(t) || 0, e), i)
    );
  }
  function et() {}
  function it(t, e) {
    return (
      t.left < e.right &&
      t.right > e.left &&
      t.top < e.bottom &&
      t.bottom > e.top
    );
  }
  function nt(t, e) {
    return t.x <= e.right && t.x >= e.left && t.y <= e.bottom && t.y >= e.top;
  }
  var rt = {
    ratio: function (t, e, i) {
      var n = "width" === e ? "height" : "width",
        r = {};
      return (
        (r[n] = t[e] ? Math.round((i * t[n]) / t[e]) : t[n]), (r[e] = i), r
      );
    },
    contain: function (i, n) {
      var r = this;
      return (
        J((i = G({}, i)), function (t, e) {
          return (i = i[e] > n[e] ? r.ratio(i, e, n[e]) : i);
        }),
        i
      );
    },
    cover: function (i, n) {
      var r = this;
      return (
        J((i = this.contain(i, n)), function (t, e) {
          return (i = i[e] < n[e] ? r.ratio(i, e, n[e]) : i);
        }),
        i
      );
    },
  };
  function ot(t, e, i) {
    if (I(e)) for (var n in e) ot(t, n, e[n]);
    else {
      if (H(i)) return (t = W(t)) && t.getAttribute(e);
      V(t).forEach(function (t) {
        $(i) && (i = i.call(t, ot(t, e))),
          null === i ? at(t, e) : t.setAttribute(e, i);
      });
    }
  }
  function st(t, e) {
    return V(t).some(function (t) {
      return t.hasAttribute(e);
    });
  }
  function at(t, e) {
    (t = V(t)),
      e.split(" ").forEach(function (e) {
        return t.forEach(function (t) {
          return t.hasAttribute(e) && t.removeAttribute(e);
        });
      });
  }
  function ht(t, e) {
    for (var i = 0, n = [e, "data-" + e]; i < n.length; i++)
      if (st(t, n[i])) return ot(t, n[i]);
  }
  var ut = "undefined" != typeof window,
    ct = ut && /msie|trident/i.test(window.navigator.userAgent),
    lt = ut && "rtl" === ot(document.documentElement, "dir"),
    dt = ut && "ontouchstart" in window,
    ft = ut && window.PointerEvent,
    pt =
      ut &&
      (dt ||
        (window.DocumentTouch && document instanceof DocumentTouch) ||
        navigator.maxTouchPoints),
    mt = ft ? "pointerdown" : dt ? "touchstart" : "mousedown",
    gt = ft ? "pointermove" : dt ? "touchmove" : "mousemove",
    vt = ft ? "pointerup" : dt ? "touchend" : "mouseup",
    wt = ft ? "pointerenter" : dt ? "" : "mouseenter",
    bt = ft ? "pointerleave" : dt ? "" : "mouseleave",
    xt = ft ? "pointercancel" : "touchcancel";
  function yt(t, e) {
    return W(t) || It(t, $t(t, e));
  }
  function kt(t, e) {
    var i = V(t);
    return (i.length && i) || St(t, $t(t, e));
  }
  function $t(t, e) {
    return void 0 === e && (e = document), Ct(t) || _(e) ? e : e.ownerDocument;
  }
  function It(t, e) {
    return W(Tt(t, e, "querySelector"));
  }
  function St(t, e) {
    return V(Tt(t, e, "querySelectorAll"));
  }
  function Tt(t, s, e) {
    if ((void 0 === s && (s = document), !t || !D(t))) return null;
    var a;
    Ct((t = t.replace(_t, "$1 *"))) &&
      ((a = []),
      (t = t
        .match(At)
        .map(function (t) {
          return t.replace(/,$/, "").trim();
        })
        .map(function (t, e) {
          var i,
            n,
            r,
            o = s;
          return (
            "!" === t[0] &&
              ((i = t.substr(1).trim().split(" ")),
              (o = Bt(Pt(s), i[0])),
              (t = i.slice(1).join(" ").trim())),
            "-" === t[0] &&
              ((n = t.substr(1).trim().split(" ")),
              (r = (o || s).previousElementSibling),
              (o = zt(r, t.substr(1)) ? r : null),
              (t = n.slice(1).join(" "))),
            o
              ? (o.id ||
                  ((o.id = "uk-" + Date.now() + e),
                  a.push(function () {
                    return at(o, "id");
                  })),
                "#" + Ht(o.id) + " " + t)
              : null
          );
        })
        .filter(Boolean)
        .join(",")),
      (s = document));
    try {
      return s[e](t);
    } catch (t) {
      return null;
    } finally {
      a &&
        a.forEach(function (t) {
          return t();
        });
    }
  }
  var Et = /(^|[^\\],)\s*[!>+~-]/,
    _t = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g;
  function Ct(t) {
    return D(t) && t.match(Et);
  }
  var At = /.*?[^\\](?:,|$)/g;
  var Mt = ut ? Element.prototype : {},
    Nt = Mt.matches || Mt.webkitMatchesSelector || Mt.msMatchesSelector || et;
  function zt(t, e) {
    return V(t).some(function (t) {
      return Nt.call(t, e);
    });
  }
  var Dt =
    Mt.closest ||
    function (t) {
      var e = this;
      do {
        if (zt(e, t)) return e;
      } while ((e = Pt(e)));
    };
  function Bt(t, e) {
    return (
      w(e, ">") && (e = e.slice(1)),
      M(t)
        ? Dt.call(t, e)
        : V(t)
            .map(function (t) {
              return Bt(t, e);
            })
            .filter(Boolean)
    );
  }
  function Pt(t) {
    return (t = W(t)) && M(t.parentNode) && t.parentNode;
  }
  var Ot =
    (ut && window.CSS && CSS.escape) ||
    function (t) {
      return t.replace(/([^\x7f-\uFFFF\w-])/g, function (t) {
        return "\\" + t;
      });
    };
  function Ht(t) {
    return D(t) ? Ot.call(null, t) : "";
  }
  var Lt = {
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
    menuitem: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  };
  function Ft(t) {
    return V(t).some(function (t) {
      return Lt[t.tagName.toLowerCase()];
    });
  }
  function jt(t) {
    return V(t).some(function (t) {
      return t.offsetWidth || t.offsetHeight || t.getClientRects().length;
    });
  }
  var Wt = "input,select,textarea,button";
  function Vt(t) {
    return V(t).some(function (t) {
      return zt(t, Wt);
    });
  }
  function Rt(t, e) {
    return V(t).filter(function (t) {
      return zt(t, e);
    });
  }
  function qt(t, e) {
    return D(e)
      ? zt(t, e) || !!Bt(t, e)
      : t === e || (_(e) ? e.documentElement : W(e)).contains(W(t));
  }
  function Ut(t, e) {
    for (var i = []; (t = Pt(t)); ) (e && !zt(t, e)) || i.push(t);
    return i;
  }
  function Yt(t, e) {
    var i = (t = W(t)) ? V(t.children) : [];
    return e ? Rt(i, e) : i;
  }
  function Xt() {
    for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
    var i,
      n,
      r = Qt(t),
      o = r[0],
      s = r[1],
      a = r[2],
      h = r[3],
      u = r[4],
      o = ne(o);
    return (
      1 < h.length &&
        ((i = h),
        (h = function (t) {
          return k(t.detail) ? i.apply(void 0, [t].concat(t.detail)) : i(t);
        })),
      u &&
        u.self &&
        ((n = h),
        (h = function (t) {
          if (t.target === t.currentTarget || t.target === t.current)
            return n.call(null, t);
        })),
      a &&
        (h = (function (t, n, r) {
          var o = this;
          return function (i) {
            t.forEach(function (t) {
              var e =
                ">" === n[0]
                  ? St(n, t)
                      .reverse()
                      .filter(function (t) {
                        return qt(i.target, t);
                      })[0]
                  : Bt(i.target, n);
              e && ((i.delegate = t), (i.current = e), r.call(o, i));
            });
          };
        })(o, a, h)),
      (u = te(u)),
      s.split(" ").forEach(function (e) {
        return o.forEach(function (t) {
          return t.addEventListener(e, h, u);
        });
      }),
      function () {
        return Gt(o, s, h, u);
      }
    );
  }
  function Gt(t, e, i, n) {
    void 0 === n && (n = !1),
      (n = te(n)),
      (t = ne(t)),
      e.split(" ").forEach(function (e) {
        return t.forEach(function (t) {
          return t.removeEventListener(e, i, n);
        });
      });
  }
  function Kt() {
    for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
    var i = Qt(t),
      n = i[0],
      r = i[1],
      o = i[2],
      s = i[3],
      a = i[4],
      h = i[5],
      u = Xt(
        n,
        r,
        o,
        function (t) {
          var e = !h || h(t);
          e && (u(), s(t, e));
        },
        a
      );
    return u;
  }
  function Jt(t, i, n) {
    return ne(t).reduce(function (t, e) {
      return t && e.dispatchEvent(Zt(i, !0, !0, n));
    }, !0);
  }
  function Zt(t, e, i, n) {
    var r;
    return (
      void 0 === e && (e = !0),
      void 0 === i && (i = !1),
      D(t) &&
        ((r = document.createEvent("CustomEvent")).initCustomEvent(t, e, i, n),
        (t = r)),
      t
    );
  }
  function Qt(t) {
    return $(t[2]) && t.splice(2, 0, !1), t;
  }
  function te(t) {
    return t && ct && !z(t) ? !!t.capture : t;
  }
  function ee(t) {
    return t && "addEventListener" in t;
  }
  function ie(t) {
    return ee(t) ? t : W(t);
  }
  function ne(t) {
    return k(t) ? t.map(ie).filter(Boolean) : D(t) ? St(t) : ee(t) ? [t] : V(t);
  }
  function re(t) {
    return "touch" === t.pointerType || !!t.touches;
  }
  function oe(t) {
    var e = t.touches,
      i = t.changedTouches,
      n = (e && e[0]) || (i && i[0]) || t;
    return { x: n.clientX, y: n.clientY };
  }
  function se() {
    var i = this;
    this.promise = new ae(function (t, e) {
      (i.reject = e), (i.resolve = t);
    });
  }
  var ae = (ut && window.Promise) || ce,
    he = 2,
    ue = (ut && window.setImmediate) || setTimeout;
  function ce(t) {
    (this.state = he), (this.value = void 0), (this.deferred = []);
    var e = this;
    try {
      t(
        function (t) {
          e.resolve(t);
        },
        function (t) {
          e.reject(t);
        }
      );
    } catch (t) {
      e.reject(t);
    }
  }
  (ce.reject = function (i) {
    return new ce(function (t, e) {
      e(i);
    });
  }),
    (ce.resolve = function (i) {
      return new ce(function (t, e) {
        t(i);
      });
    }),
    (ce.all = function (o) {
      return new ce(function (i, t) {
        var n = [],
          r = 0;
        0 === o.length && i(n);
        for (var e = 0; e < o.length; e += 1)
          ce.resolve(o[e]).then(
            (function (e) {
              return function (t) {
                (n[e] = t), (r += 1) === o.length && i(n);
              };
            })(e),
            t
          );
      });
    }),
    (ce.race = function (n) {
      return new ce(function (t, e) {
        for (var i = 0; i < n.length; i += 1) ce.resolve(n[i]).then(t, e);
      });
    });
  var le = ce.prototype;
  function de(s, a) {
    return new ae(function (t, e) {
      var i = G(
        {
          data: null,
          method: "GET",
          headers: {},
          xhr: new XMLHttpRequest(),
          beforeSend: et,
          responseType: "",
        },
        a
      );
      i.beforeSend(i);
      var n = i.xhr;
      for (var r in i)
        if (r in n)
          try {
            n[r] = i[r];
          } catch (t) {}
      for (var o in (n.open(i.method.toUpperCase(), s), i.headers))
        n.setRequestHeader(o, i.headers[o]);
      Xt(n, "load", function () {
        0 === n.status ||
        (200 <= n.status && n.status < 300) ||
        304 === n.status
          ? t(n)
          : e(G(Error(n.statusText), { xhr: n, status: n.status }));
      }),
        Xt(n, "error", function () {
          return e(G(Error("Network Error"), { xhr: n }));
        }),
        Xt(n, "timeout", function () {
          return e(G(Error("Network Timeout"), { xhr: n }));
        }),
        n.send(i.data);
    });
  }
  function fe(n, r, o) {
    return new ae(function (t, e) {
      var i = new Image();
      (i.onerror = e),
        (i.onload = function () {
          return t(i);
        }),
        o && (i.sizes = o),
        r && (i.srcset = r),
        (i.src = n);
    });
  }
  function pe(t) {
    var e;
    "loading" === document.readyState
      ? (e = Xt(document, "DOMContentLoaded", function () {
          e(), t();
        }))
      : t();
  }
  function me(t, e) {
    return e ? V(t).indexOf(W(e)) : Yt(Pt(t)).indexOf(t);
  }
  function ge(t, e, i, n) {
    void 0 === i && (i = 0), void 0 === n && (n = !1);
    var r = (e = V(e)).length;
    return (
      (t = P(t)
        ? F(t)
        : "next" === t
        ? i + 1
        : "previous" === t
        ? i - 1
        : me(e, t)),
      n ? tt(t, 0, r - 1) : (t %= r) < 0 ? t + r : t
    );
  }
  function ve(t) {
    return ((t = Me(t)).innerHTML = ""), t;
  }
  function we(t, e) {
    return (
      (t = Me(t)), H(e) ? t.innerHTML : be(t.hasChildNodes() ? ve(t) : t, e)
    );
  }
  function be(e, t) {
    return (
      (e = Me(e)),
      ke(t, function (t) {
        return e.appendChild(t);
      })
    );
  }
  function xe(e, t) {
    return (
      (e = Me(e)),
      ke(t, function (t) {
        return e.parentNode.insertBefore(t, e);
      })
    );
  }
  function ye(e, t) {
    return (
      (e = Me(e)),
      ke(t, function (t) {
        return e.nextSibling ? xe(e.nextSibling, t) : be(e.parentNode, t);
      })
    );
  }
  function ke(t, e) {
    return (t = D(t) ? Ce(t) : t) ? ("length" in t ? V(t).map(e) : e(t)) : null;
  }
  function $e(t) {
    V(t).map(function (t) {
      return t.parentNode && t.parentNode.removeChild(t);
    });
  }
  function Ie(t, e) {
    for (e = W(xe(t, e)); e.firstChild; ) e = e.firstChild;
    return be(e, t), e;
  }
  function Se(t, e) {
    return V(
      V(t).map(function (t) {
        return t.hasChildNodes ? Ie(V(t.childNodes), e) : be(t, e);
      })
    );
  }
  function Te(t) {
    V(t)
      .map(Pt)
      .filter(function (t, e, i) {
        return i.indexOf(t) === e;
      })
      .forEach(function (t) {
        xe(t, t.childNodes), $e(t);
      });
  }
  (le.resolve = function (t) {
    var e = this;
    if (e.state === he) {
      if (t === e) throw new TypeError("Promise settled with itself.");
      var i = !1;
      try {
        var n = t && t.then;
        if (null !== t && I(t) && $(n))
          return void n.call(
            t,
            function (t) {
              i || e.resolve(t), (i = !0);
            },
            function (t) {
              i || e.reject(t), (i = !0);
            }
          );
      } catch (t) {
        return void (i || e.reject(t));
      }
      (e.state = 0), (e.value = t), e.notify();
    }
  }),
    (le.reject = function (t) {
      var e = this;
      if (e.state === he) {
        if (t === e) throw new TypeError("Promise settled with itself.");
        (e.state = 1), (e.value = t), e.notify();
      }
    }),
    (le.notify = function () {
      var o = this;
      ue(function () {
        if (o.state !== he)
          for (; o.deferred.length; ) {
            var t = o.deferred.shift(),
              e = t[0],
              i = t[1],
              n = t[2],
              r = t[3];
            try {
              0 === o.state
                ? $(e)
                  ? n(e.call(void 0, o.value))
                  : n(o.value)
                : 1 === o.state &&
                  ($(i) ? n(i.call(void 0, o.value)) : r(o.value));
            } catch (t) {
              r(t);
            }
          }
      });
    }),
    (le.then = function (i, n) {
      var r = this;
      return new ce(function (t, e) {
        r.deferred.push([i, n, t, e]), r.notify();
      });
    }),
    (le.catch = function (t) {
      return this.then(void 0, t);
    });
  var Ee = /^\s*<(\w+|!)[^>]*>/,
    _e = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;
  function Ce(t) {
    var e = _e.exec(t);
    if (e) return document.createElement(e[1]);
    var i = document.createElement("div");
    return (
      Ee.test(t)
        ? i.insertAdjacentHTML("beforeend", t.trim())
        : (i.textContent = t),
      1 < i.childNodes.length ? V(i.childNodes) : i.firstChild
    );
  }
  function Ae(t, e) {
    if (M(t))
      for (e(t), t = t.firstElementChild; t; ) {
        var i = t.nextElementSibling;
        Ae(t, e), (t = i);
      }
  }
  function Me(t, e) {
    return D(t) ? (ze(t) ? W(Ce(t)) : It(t, e)) : W(t);
  }
  function Ne(t, e) {
    return D(t) ? (ze(t) ? V(Ce(t)) : St(t, e)) : V(t);
  }
  function ze(t) {
    return "<" === t[0] || t.match(/^\s*</);
  }
  function De(t) {
    for (var e = [], i = arguments.length - 1; 0 < i--; )
      e[i] = arguments[i + 1];
    Fe(t, e, "add");
  }
  function Be(t) {
    for (var e = [], i = arguments.length - 1; 0 < i--; )
      e[i] = arguments[i + 1];
    Fe(t, e, "remove");
  }
  function Pe(t, e) {
    ot(t, "class", function (t) {
      return (t || "").replace(new RegExp("\\b" + e + "\\b", "g"), "");
    });
  }
  function Oe(t) {
    for (var e = [], i = arguments.length - 1; 0 < i--; )
      e[i] = arguments[i + 1];
    e[0] && Be(t, e[0]), e[1] && De(t, e[1]);
  }
  function He(t, e) {
    return (
      e &&
      V(t).some(function (t) {
        return t.classList.contains(e.split(" ")[0]);
      })
    );
  }
  function Le(t) {
    for (var n, r = [], e = arguments.length - 1; 0 < e--; )
      r[e] = arguments[e + 1];
    r.length &&
      ((n = D(K((r = je(r)))) ? [] : r.pop()),
      (r = r.filter(Boolean)),
      V(t).forEach(function (t) {
        for (var e = t.classList, i = 0; i < r.length; i++)
          We.Force
            ? e.toggle.apply(e, [r[i]].concat(n))
            : e[(H(n) ? !e.contains(r[i]) : n) ? "add" : "remove"](r[i]);
      }));
  }
  function Fe(t, i, n) {
    (i = je(i).filter(Boolean)).length &&
      V(t).forEach(function (t) {
        var e = t.classList;
        We.Multiple
          ? e[n].apply(e, i)
          : i.forEach(function (t) {
              return e[n](t);
            });
      });
  }
  function je(t) {
    return t.reduce(function (t, e) {
      return t.concat.call(t, D(e) && b(e, " ") ? e.trim().split(" ") : e);
    }, []);
  }
  var We = {
      get Multiple() {
        return this.get("_multiple");
      },
      get Force() {
        return this.get("_force");
      },
      get: function (t) {
        var e;
        return (
          l(this, t) ||
            ((e = document.createElement("_").classList).add("a", "b"),
            e.toggle("c", !1),
            (this._multiple = e.contains("b")),
            (this._force = !e.contains("c"))),
          this[t]
        );
      },
    },
    Ve = {
      "animation-iteration-count": !0,
      "column-count": !0,
      "fill-opacity": !0,
      "flex-grow": !0,
      "flex-shrink": !0,
      "font-weight": !0,
      "line-height": !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      "stroke-dasharray": !0,
      "stroke-dashoffset": !0,
      widows: !0,
      "z-index": !0,
      zoom: !0,
    };
  function Re(t, e, r) {
    return V(t).map(function (i) {
      if (D(e)) {
        if (((e = Ke(e)), H(r))) return Ue(i, e);
        r || B(r)
          ? (i.style[e] = P(r) && !Ve[e] ? r + "px" : r)
          : i.style.removeProperty(e);
      } else {
        if (k(e)) {
          var n = qe(i);
          return e.reduce(function (t, e) {
            return (t[e] = n[Ke(e)]), t;
          }, {});
        }
        I(e) &&
          J(e, function (t, e) {
            return Re(i, e, t);
          });
      }
      return i;
    })[0];
  }
  function qe(t, e) {
    return (t = W(t)).ownerDocument.defaultView.getComputedStyle(t, e);
  }
  function Ue(t, e, i) {
    return qe(t, i)[e];
  }
  var Ye = {};
  function Xe(t) {
    var e,
      i = document.documentElement;
    return ct
      ? (t in Ye ||
          (De((e = be(i, document.createElement("div"))), "uk-" + t),
          (Ye[t] = Ue(e, "content", ":before").replace(/^["'](.*)["']$/, "$1")),
          $e(e)),
        Ye[t])
      : qe(i).getPropertyValue("--uk-" + t);
  }
  var Ge = {};
  function Ke(t) {
    return (
      Ge[t] ||
      (Ge[t] =
        (function (t) {
          t = d(t);
          var e = document.documentElement.style;
          if (t in e) return t;
          var i,
            n = Je.length;
          for (; n--; ) if ((i = "-" + Je[n] + "-" + t) in e) return i;
        })(t) || t)
    );
  }
  var Je = ["webkit", "moz", "ms"];
  function Ze(t, s, a, h) {
    return (
      void 0 === a && (a = 400),
      void 0 === h && (h = "linear"),
      ae.all(
        V(t).map(function (o) {
          return new ae(function (i, n) {
            for (var t in s) {
              var e = Re(o, t);
              "" === e && Re(o, t, e);
            }
            var r = setTimeout(function () {
              return Jt(o, "transitionend");
            }, a);
            Kt(
              o,
              "transitionend transitioncanceled",
              function (t) {
                var e = t.type;
                clearTimeout(r),
                  Be(o, "uk-transition"),
                  Re(o, {
                    transitionProperty: "",
                    transitionDuration: "",
                    transitionTimingFunction: "",
                  }),
                  ("transitioncanceled" === e ? n : i)();
              },
              { self: !0 }
            ),
              De(o, "uk-transition"),
              Re(
                o,
                G(
                  {
                    transitionProperty: Object.keys(s).map(Ke).join(","),
                    transitionDuration: a + "ms",
                    transitionTimingFunction: h,
                  },
                  s
                )
              );
          });
        })
      )
    );
  }
  var Qe = {
      start: Ze,
      stop: function (t) {
        return Jt(t, "transitionend"), ae.resolve();
      },
      cancel: function (t) {
        Jt(t, "transitioncanceled");
      },
      inProgress: function (t) {
        return He(t, "uk-transition");
      },
    },
    ti = "uk-animation-";
  function ei(t, e, s, a, h) {
    return (
      void 0 === s && (s = 200),
      ae.all(
        V(t).map(function (o) {
          return new ae(function (i, n) {
            Jt(o, "animationcancel");
            var r = setTimeout(function () {
              return Jt(o, "animationend");
            }, s);
            Kt(
              o,
              "animationend animationcancel",
              function (t) {
                var e = t.type;
                clearTimeout(r),
                  ("animationcancel" === e ? n : i)(),
                  Re(o, "animationDuration", ""),
                  Pe(o, ti + "\\S*");
              },
              { self: !0 }
            ),
              Re(o, "animationDuration", s + "ms"),
              De(o, e, ti + (h ? "leave" : "enter")),
              w(e, ti) &&
                De(o, a && "uk-transform-origin-" + a, h && ti + "reverse");
          });
        })
      )
    );
  }
  var ii = new RegExp(ti + "(enter|leave)"),
    ni = {
      in: ei,
      out: function (t, e, i, n) {
        return ei(t, e, i, n, !0);
      },
      inProgress: function (t) {
        return ii.test(ot(t, "class"));
      },
      cancel: function (t) {
        Jt(t, "animationcancel");
      },
    },
    ri = { width: ["x", "left", "right"], height: ["y", "top", "bottom"] };
  function oi(t, e, c, l, d, i, n, r) {
    (c = mi(c)), (l = mi(l));
    var f = { element: c, target: l };
    if (!t || !e) return f;
    var o,
      p = ai(t),
      m = ai(e),
      g = m;
    return (
      pi(g, c, p, -1),
      pi(g, l, m, 1),
      (d = gi(d, p.width, p.height)),
      (i = gi(i, m.width, m.height)),
      (d.x += i.x),
      (d.y += i.y),
      (g.left += d.x),
      (g.top += d.y),
      n &&
        ((o = [ai(R(t))]),
        r && o.unshift(ai(r)),
        J(ri, function (t, s) {
          var a = t[0],
            h = t[1],
            u = t[2];
          (!0 !== n && !b(n, a)) ||
            o.some(function (n) {
              var t = c[a] === h ? -p[s] : c[a] === u ? p[s] : 0,
                e = l[a] === h ? m[s] : l[a] === u ? -m[s] : 0;
              if (g[h] < n[h] || g[h] + p[s] > n[u]) {
                var i = p[s] / 2,
                  r = "center" === l[a] ? -m[s] / 2 : 0;
                return ("center" === c[a] && (o(i, r) || o(-i, -r))) || o(t, e);
              }
              function o(e, t) {
                var i = (g[h] + e + t - 2 * d[a]).toFixed(4);
                if (i >= n[h] && i + p[s] <= n[u])
                  return (
                    (g[h] = i),
                    ["element", "target"].forEach(function (t) {
                      f[t][a] = e
                        ? f[t][a] === ri[s][1]
                          ? ri[s][2]
                          : ri[s][1]
                        : f[t][a];
                    }),
                    !0
                  );
              }
            });
        })),
      si(t, g),
      f
    );
  }
  function si(i, n) {
    if (!n) return ai(i);
    var r = si(i),
      o = Re(i, "position");
    ["left", "top"].forEach(function (t) {
      var e;
      t in n &&
        ((e = Re(i, t)),
        Re(
          i,
          t,
          n[t] - r[t] + j("absolute" === o && "auto" === e ? hi(i)[t] : e)
        ));
    });
  }
  function ai(t) {
    if (!t) return {};
    var e,
      i,
      n = R(t),
      r = n.pageYOffset,
      o = n.pageXOffset;
    if (E(t)) {
      var s = t.innerHeight,
        a = t.innerWidth;
      return {
        top: r,
        left: o,
        height: s,
        width: a,
        bottom: r + s,
        right: o + a,
      };
    }
    jt(t) ||
      "none" !== Re(t, "display") ||
      ((e = ot(t, "style")),
      (i = ot(t, "hidden")),
      ot(t, { style: (e || "") + ";display:block !important;", hidden: null }));
    var h = (t = W(t)).getBoundingClientRect();
    return (
      H(e) || ot(t, { style: e, hidden: i }),
      {
        height: h.height,
        width: h.width,
        top: h.top + r,
        left: h.left + o,
        bottom: h.bottom + r,
        right: h.right + o,
      }
    );
  }
  function hi(t, e) {
    e = e || W(t).offsetParent || R(t).document.documentElement;
    var i = si(t),
      n = si(e);
    return {
      top: i.top - n.top - j(Re(e, "borderTopWidth")),
      left: i.left - n.left - j(Re(e, "borderLeftWidth")),
    };
  }
  function ui(t) {
    var e = [0, 0];
    t = W(t);
    do {
      if (
        ((e[0] += t.offsetTop),
        (e[1] += t.offsetLeft),
        "fixed" === Re(t, "position"))
      ) {
        var i = R(t);
        return (e[0] += i.pageYOffset), (e[1] += i.pageXOffset), e;
      }
    } while ((t = t.offsetParent));
    return e;
  }
  var ci = di("height"),
    li = di("width");
  function di(n) {
    var r = p(n);
    return function (t, e) {
      if (H(e)) {
        if (E(t)) return t["inner" + r];
        if (_(t)) {
          var i = t.documentElement;
          return Math.max(i["offset" + r], i["scroll" + r]);
        }
        return (
          (e =
            "auto" === (e = Re((t = W(t)), n)) ? t["offset" + r] : j(e) || 0) -
          fi(t, n)
        );
      }
      Re(t, n, e || 0 === e ? +e + fi(t, n) + "px" : "");
    };
  }
  function fi(i, t, e) {
    return (
      void 0 === e && (e = "border-box"),
      Re(i, "boxSizing") === e
        ? ri[t]
            .slice(1)
            .map(p)
            .reduce(function (t, e) {
              return (
                t + j(Re(i, "padding" + e)) + j(Re(i, "border" + e + "Width"))
              );
            }, 0)
        : 0
    );
  }
  function pi(o, s, a, h) {
    J(ri, function (t, e) {
      var i = t[0],
        n = t[1],
        r = t[2];
      s[i] === r
        ? (o[n] += a[e] * h)
        : "center" === s[i] && (o[n] += (a[e] * h) / 2);
    });
  }
  function mi(t) {
    var e = /left|center|right/,
      i = /top|center|bottom/;
    return (
      1 === (t = (t || "").split(" ")).length &&
        (t = e.test(t[0])
          ? t.concat("center")
          : i.test(t[0])
          ? ["center"].concat(t)
          : ["center", "center"]),
      { x: e.test(t[0]) ? t[0] : "center", y: i.test(t[1]) ? t[1] : "center" }
    );
  }
  function gi(t, e, i) {
    var n = (t || "").split(" "),
      r = n[0],
      o = n[1];
    return {
      x: r ? j(r) * (u(r, "%") ? e / 100 : 1) : 0,
      y: o ? j(o) * (u(o, "%") ? i / 100 : 1) : 0,
    };
  }
  function vi(t) {
    switch (t) {
      case "left":
        return "right";
      case "right":
        return "left";
      case "top":
        return "bottom";
      case "bottom":
        return "top";
      default:
        return t;
    }
  }
  function wi(t, e, i) {
    return (
      void 0 === e && (e = "width"),
      void 0 === i && (i = window),
      P(t)
        ? +t
        : u(t, "vh")
        ? bi(ci(R(i)), t)
        : u(t, "vw")
        ? bi(li(R(i)), t)
        : u(t, "%")
        ? bi(ai(i)[e], t)
        : j(t)
    );
  }
  function bi(t, e) {
    return (t * j(e)) / 100;
  }
  var xi = {
    reads: [],
    writes: [],
    read: function (t) {
      return this.reads.push(t), $i(), t;
    },
    write: function (t) {
      return this.writes.push(t), $i(), t;
    },
    clear: function (t) {
      return Si(this.reads, t) || Si(this.writes, t);
    },
    flush: yi,
  };
  function yi(t) {
    void 0 === t && (t = 1),
      Ii(xi.reads),
      Ii(xi.writes.splice(0, xi.writes.length)),
      (xi.scheduled = !1),
      (xi.reads.length || xi.writes.length) && $i(t + 1);
  }
  var ki = 5;
  function $i(t) {
    if (!xi.scheduled) {
      if (((xi.scheduled = !0), ki < t))
        throw new Error("Maximum recursion limit reached.");
      t
        ? ae.resolve().then(function () {
            return yi(t);
          })
        : requestAnimationFrame(function () {
            return yi();
          });
    }
  }
  function Ii(t) {
    for (var e; (e = t.shift()); ) e();
  }
  function Si(t, e) {
    var i = t.indexOf(e);
    return !!~i && !!t.splice(i, 1);
  }
  function Ti() {}
  Ti.prototype = {
    positions: [],
    init: function () {
      var e,
        t = this;
      (this.positions = []),
        (this.unbind = Xt(document, "mousemove", function (t) {
          return (e = oe(t));
        })),
        (this.interval = setInterval(function () {
          e &&
            (t.positions.push(e),
            5 < t.positions.length && t.positions.shift());
        }, 50));
    },
    cancel: function () {
      this.unbind && this.unbind(),
        this.interval && clearInterval(this.interval);
    },
    movesTo: function (t) {
      if (this.positions.length < 2) return !1;
      var i = t.getBoundingClientRect(),
        e = i.left,
        n = i.right,
        r = i.top,
        o = i.bottom,
        s = this.positions[0],
        a = K(this.positions),
        h = [s, a];
      return (
        !nt(a, i) &&
        [
          [
            { x: e, y: r },
            { x: n, y: o },
          ],
          [
            { x: e, y: o },
            { x: n, y: r },
          ],
        ].some(function (t) {
          var e = (function (t, e) {
            var i = t[0],
              n = i.x,
              r = i.y,
              o = t[1],
              s = o.x,
              a = o.y,
              h = e[0],
              u = h.x,
              c = h.y,
              l = e[1],
              d = l.x,
              f = l.y,
              p = (f - c) * (s - n) - (d - u) * (a - r);
            if (0 == p) return !1;
            var m = ((d - u) * (r - c) - (f - c) * (n - u)) / p;
            if (m < 0) return !1;
            return { x: n + m * (s - n), y: r + m * (a - r) };
          })(h, t);
          return e && nt(e, i);
        })
      );
    },
  };
  var Ei = {};
  function _i(t, e, i) {
    return Ei.computed($(t) ? t.call(i, i) : t, $(e) ? e.call(i, i) : e);
  }
  function Ci(t, e) {
    return (
      (t = t && !k(t) ? [t] : t), e ? (t ? t.concat(e) : k(e) ? e : [e]) : t
    );
  }
  function Ai(e, i, n) {
    var r = {};
    if (
      ($(i) && (i = i.options),
      i.extends && (e = Ai(e, i.extends, n)),
      i.mixins)
    )
      for (var t = 0, o = i.mixins.length; t < o; t++)
        e = Ai(e, i.mixins[t], n);
    for (var s in e) h(s);
    for (var a in i) l(e, a) || h(a);
    function h(t) {
      r[t] = (
        Ei[t] ||
        function (t, e) {
          return H(e) ? t : e;
        }
      )(e[t], i[t], n);
    }
    return r;
  }
  function Mi(t, e) {
    var i;
    void 0 === e && (e = []);
    try {
      return t
        ? w(t, "{")
          ? JSON.parse(t)
          : e.length && !b(t, ":")
          ? (((i = {})[e[0]] = t), i)
          : t.split(";").reduce(function (t, e) {
              var i = e.split(/:(.*)/),
                n = i[0],
                r = i[1];
              return n && !H(r) && (t[n.trim()] = r.trim()), t;
            }, {})
        : {};
    } catch (t) {
      return {};
    }
  }
  (Ei.events = Ei.created = Ei.beforeConnect = Ei.connected = Ei.beforeDisconnect = Ei.disconnected = Ei.destroy = Ci),
    (Ei.args = function (t, e) {
      return !1 !== e && Ci(e || t);
    }),
    (Ei.update = function (t, e) {
      return Z(Ci(t, $(e) ? { read: e } : e), "order");
    }),
    (Ei.props = function (t, e) {
      return (
        k(e) &&
          (e = e.reduce(function (t, e) {
            return (t[e] = String), t;
          }, {})),
        Ei.methods(t, e)
      );
    }),
    (Ei.computed = Ei.methods = function (t, e) {
      return e ? (t ? G({}, t, e) : e) : t;
    }),
    (Ei.data = function (e, i, t) {
      return t
        ? _i(e, i, t)
        : i
        ? e
          ? function (t) {
              return _i(e, i, t);
            }
          : i
        : e;
    });
  function Ni(t) {
    (this.id = ++zi), (this.el = W(t));
  }
  var zi = 0;
  function Di(t, e) {
    try {
      t.contentWindow.postMessage(
        JSON.stringify(G({ event: "command" }, e)),
        "*"
      );
    } catch (t) {}
  }
  function Bi(h, u, c) {
    if ((void 0 === u && (u = 0), void 0 === c && (c = 0), !jt(h))) return !1;
    var l = ji(h);
    return l.every(function (t, e) {
      var i = si(l[e + 1] || h),
        n = si(Fi(t)),
        r = n.top,
        o = n.left,
        s = n.bottom,
        a = n.right;
      return it(i, { top: r - u, left: o - c, bottom: s + u, right: a + c });
    });
  }
  function Pi(t, e) {
    (t = (E(t) || _(t) ? Wi : W)(t)).scrollTop = e;
  }
  function Oi(t, e) {
    void 0 === e && (e = {});
    var c = e.offset;
    if ((void 0 === c && (c = 0), jt(t))) {
      for (
        var l = ji(t).concat(t),
          i = ae.resolve(),
          n = function (u) {
            i = i.then(function () {
              return new ae(function (i) {
                var t,
                  n = l[u],
                  e = l[u + 1],
                  r = n.scrollTop,
                  o = Math.ceil(hi(e, Fi(n)).top - c),
                  s = ((t = Math.abs(o)), 40 * Math.pow(t, 0.375)),
                  a = Date.now(),
                  h = function () {
                    var t,
                      e =
                        ((t = tt((Date.now() - a) / s)),
                        0.5 * (1 - Math.cos(Math.PI * t)));
                    Pi(n, r + o * e), 1 != e ? requestAnimationFrame(h) : i();
                  };
                h();
              });
            });
          },
          r = 0;
        r < l.length - 1;
        r++
      )
        n(r);
      return i;
    }
  }
  function Hi(t, e) {
    if ((void 0 === e && (e = 0), !jt(t))) return 0;
    var i = K(Li(t)),
      n = i.scrollHeight,
      r = i.scrollTop,
      o = si(Fi(i)).height,
      s = ui(t)[0] - r - ui(i)[0],
      a = Math.min(o, s + r);
    return tt(
      (-1 * (s - a)) / Math.min(si(t).height + e + a, n - (s + r), n - o)
    );
  }
  function Li(t, e) {
    void 0 === e && (e = /auto|scroll/);
    var i = Wi(t),
      n = Ut(t)
        .filter(function (t) {
          return (
            t === i ||
            (e.test(Re(t, "overflow")) &&
              t.scrollHeight > Math.round(si(t).height))
          );
        })
        .reverse();
    return n.length ? n : [i];
  }
  function Fi(t) {
    return t === Wi(t) ? window : t;
  }
  function ji(t) {
    return Li(t, /auto|scroll|hidden/);
  }
  function Wi(t) {
    var e = R(t).document;
    return e.scrollingElement || e.documentElement;
  }
  (Ni.prototype.isVideo = function () {
    return this.isYoutube() || this.isVimeo() || this.isHTML5();
  }),
    (Ni.prototype.isHTML5 = function () {
      return "VIDEO" === this.el.tagName;
    }),
    (Ni.prototype.isIFrame = function () {
      return "IFRAME" === this.el.tagName;
    }),
    (Ni.prototype.isYoutube = function () {
      return (
        this.isIFrame() &&
        !!this.el.src.match(
          /\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/
        )
      );
    }),
    (Ni.prototype.isVimeo = function () {
      return this.isIFrame() && !!this.el.src.match(/vimeo\.com\/video\/.*/);
    }),
    (Ni.prototype.enableApi = function () {
      var e = this;
      if (this.ready) return this.ready;
      var i,
        r = this.isYoutube(),
        o = this.isVimeo();
      return r || o
        ? (this.ready = new ae(function (t) {
            var n;
            Kt(e.el, "load", function () {
              var t;
              r &&
                ((t = function () {
                  return Di(e.el, { event: "listening", id: e.id });
                }),
                (i = setInterval(t, 100)),
                t());
            }),
              (n = function (t) {
                return (
                  (r && t.id === e.id && "onReady" === t.event) ||
                  (o && Number(t.player_id) === e.id)
                );
              }),
              new ae(function (i) {
                return Kt(
                  window,
                  "message",
                  function (t, e) {
                    return i(e);
                  },
                  !1,
                  function (t) {
                    var e = t.data;
                    if (e && D(e)) {
                      try {
                        e = JSON.parse(e);
                      } catch (t) {
                        return;
                      }
                      return e && n(e);
                    }
                  }
                );
              }).then(function () {
                t(), i && clearInterval(i);
              }),
              ot(
                e.el,
                "src",
                e.el.src +
                  (b(e.el.src, "?") ? "&" : "?") +
                  (r ? "enablejsapi=1" : "api=1&player_id=" + e.id)
              );
          }))
        : ae.resolve();
    }),
    (Ni.prototype.play = function () {
      var t = this;
      if (this.isVideo())
        if (this.isIFrame())
          this.enableApi().then(function () {
            return Di(t.el, { func: "playVideo", method: "play" });
          });
        else if (this.isHTML5())
          try {
            var e = this.el.play();
            e && e.catch(et);
          } catch (t) {}
    }),
    (Ni.prototype.pause = function () {
      var t = this;
      this.isVideo() &&
        (this.isIFrame()
          ? this.enableApi().then(function () {
              return Di(t.el, { func: "pauseVideo", method: "pause" });
            })
          : this.isHTML5() && this.el.pause());
    }),
    (Ni.prototype.mute = function () {
      var t = this;
      this.isVideo() &&
        (this.isIFrame()
          ? this.enableApi().then(function () {
              return Di(t.el, { func: "mute", method: "setVolume", value: 0 });
            })
          : this.isHTML5() && ((this.el.muted = !0), ot(this.el, "muted", "")));
    });
  var Vi =
    (ut && window.IntersectionObserver) ||
    (function () {
      function t(e, t) {
        var i = this;
        void 0 === t && (t = {});
        var n = t.rootMargin;
        void 0 === n && (n = "0 0"), (this.targets = []);
        var r,
          o = (n || "0 0").split(" ").map(j),
          s = o[0],
          a = o[1];
        (this.offsetTop = s),
          (this.offsetLeft = a),
          (this.apply = function () {
            r =
              r ||
              requestAnimationFrame(function () {
                return setTimeout(function () {
                  var t = i.takeRecords();
                  t.length && e(t, i), (r = !1);
                });
              });
          }),
          (this.off = Xt(window, "scroll resize load", this.apply, {
            passive: !0,
            capture: !0,
          }));
      }
      return (
        (t.prototype.takeRecords = function () {
          var i = this;
          return this.targets.filter(function (t) {
            var e = Bi(t.target, i.offsetTop, i.offsetLeft);
            if (null === t.isIntersecting || e ^ t.isIntersecting)
              return (t.isIntersecting = e), !0;
          });
        }),
        (t.prototype.observe = function (t) {
          this.targets.push({ target: t, isIntersecting: null }), this.apply();
        }),
        (t.prototype.disconnect = function () {
          (this.targets = []), this.off();
        }),
        t
      );
    })();
  function Ri(t) {
    return (
      !(!w(t, "uk-") && !w(t, "data-uk-")) &&
      f(t.replace("data-uk-", "").replace("uk-", ""))
    );
  }
  function qi(t) {
    this._init(t);
  }
  var Ui, Yi, Xi, Gi, Ki, Ji, Zi, Qi, tn;
  function en(t, e) {
    if (t) for (var i in t) t[i]._connected && t[i]._callUpdate(e);
  }
  function nn(t, e) {
    var i = {},
      n = t.args;
    void 0 === n && (n = []);
    var r = t.props;
    void 0 === r && (r = {});
    var o = t.el;
    if (!r) return i;
    for (var s in r) {
      var a = d(s),
        h = ht(o, a);
      H(h) ||
        ((h = (r[s] === Boolean && "" === h) || on(r[s], h)),
        ("target" !== a || (h && !w(h, "_"))) && (i[s] = h));
    }
    var u = Mi(ht(o, e), n);
    for (var c in u) {
      var l = f(c);
      void 0 !== r[l] && (i[l] = on(r[l], u[c]));
    }
    return i;
  }
  function rn(e, i, n) {
    T(i) || (i = { name: n, handler: i });
    var t = i.name,
      r = i.el,
      o = i.handler,
      s = i.capture,
      a = i.passive,
      h = i.delegate,
      u = i.filter,
      c = i.self,
      r = $(r) ? r.call(e) : r || e.$el;
    k(r)
      ? r.forEach(function (t) {
          return rn(e, G({}, i, { el: t }), n);
        })
      : !r ||
        (u && !u.call(e)) ||
        e._events.push(
          Xt(r, t, h ? (D(h) ? h : h.call(e)) : null, D(o) ? e[o] : o.bind(e), {
            passive: a,
            capture: s,
            self: c,
          })
        );
  }
  function on(t, e) {
    return t === Boolean
      ? L(e)
      : t === Number
      ? F(e)
      : "list" === t
      ? q(e)
      : t
      ? t(e)
      : e;
  }
  (qi.util = Object.freeze({
    __proto__: null,
    ajax: de,
    getImage: fe,
    transition: Ze,
    Transition: Qe,
    animate: ei,
    Animation: ni,
    attr: ot,
    hasAttr: st,
    removeAttr: at,
    data: ht,
    addClass: De,
    removeClass: Be,
    removeClasses: Pe,
    replaceClass: Oe,
    hasClass: He,
    toggleClass: Le,
    positionAt: oi,
    offset: si,
    position: hi,
    offsetPosition: ui,
    height: ci,
    width: li,
    boxModelAdjust: fi,
    flipPosition: vi,
    toPx: wi,
    ready: pe,
    index: me,
    getIndex: ge,
    empty: ve,
    html: we,
    prepend: function (e, t) {
      return (e = Me(e)).hasChildNodes()
        ? ke(t, function (t) {
            return e.insertBefore(t, e.firstChild);
          })
        : be(e, t);
    },
    append: be,
    before: xe,
    after: ye,
    remove: $e,
    wrapAll: Ie,
    wrapInner: Se,
    unwrap: Te,
    fragment: Ce,
    apply: Ae,
    $: Me,
    $$: Ne,
    inBrowser: ut,
    isIE: ct,
    isRtl: lt,
    hasTouch: pt,
    pointerDown: mt,
    pointerMove: gt,
    pointerUp: vt,
    pointerEnter: wt,
    pointerLeave: bt,
    pointerCancel: xt,
    on: Xt,
    off: Gt,
    once: Kt,
    trigger: Jt,
    createEvent: Zt,
    toEventTargets: ne,
    isTouch: re,
    getEventPos: oe,
    fastdom: xi,
    isVoidElement: Ft,
    isVisible: jt,
    selInput: Wt,
    isInput: Vt,
    filter: Rt,
    within: qt,
    parents: Ut,
    children: Yt,
    hasOwn: l,
    hyphenate: d,
    camelize: f,
    ucfirst: p,
    startsWith: w,
    endsWith: u,
    includes: b,
    findIndex: y,
    isArray: k,
    isFunction: $,
    isObject: I,
    isPlainObject: T,
    isWindow: E,
    isDocument: _,
    isJQuery: C,
    isNode: A,
    isElement: M,
    isNodeCollection: N,
    isBoolean: z,
    isString: D,
    isNumber: B,
    isNumeric: P,
    isEmpty: O,
    isUndefined: H,
    toBoolean: L,
    toNumber: F,
    toFloat: j,
    toNode: W,
    toNodes: V,
    toWindow: R,
    toList: q,
    toMs: U,
    isEqual: Y,
    swap: X,
    assign: G,
    last: K,
    each: J,
    sortBy: Z,
    uniqueBy: Q,
    clamp: tt,
    noop: et,
    intersectRect: it,
    pointInRect: nt,
    Dimensions: rt,
    MouseTracker: Ti,
    mergeOptions: Ai,
    parseOptions: Mi,
    Player: Ni,
    Promise: ae,
    Deferred: se,
    IntersectionObserver: Vi,
    query: yt,
    queryAll: kt,
    find: It,
    findAll: St,
    matches: zt,
    closest: Bt,
    parent: Pt,
    escape: Ht,
    css: Re,
    getStyles: qe,
    getStyle: Ue,
    getCssVar: Xe,
    propName: Ke,
    isInView: Bi,
    scrollTop: Pi,
    scrollIntoView: Oi,
    scrolledOver: Hi,
    scrollParents: Li,
    getViewport: Fi,
  })),
    (qi.data = "__uikit__"),
    (qi.prefix = "uk-"),
    (qi.options = {}),
    (qi.version = "3.5.3"),
    (Xi = (Ui = qi).data),
    (Ui.use = function (t) {
      if (!t.installed) return t.call(null, this), (t.installed = !0), this;
    }),
    (Ui.mixin = function (t, e) {
      (e = (D(e) ? Ui.component(e) : e) || this).options = Ai(e.options, t);
    }),
    (Ui.extend = function (t) {
      t = t || {};
      function e(t) {
        this._init(t);
      }
      return (
        (((e.prototype = Object.create(
          this.prototype
        )).constructor = e).options = Ai(this.options, t)),
        (e.super = this),
        (e.extend = this.extend),
        e
      );
    }),
    (Ui.update = function (t, e) {
      Ut((t = t ? W(t) : document.body))
        .reverse()
        .forEach(function (t) {
          return en(t[Xi], e);
        }),
        Ae(t, function (t) {
          return en(t[Xi], e);
        });
    }),
    Object.defineProperty(Ui, "container", {
      get: function () {
        return Yi || document.body;
      },
      set: function (t) {
        Yi = Me(t);
      },
    }),
    ((Gi = qi).prototype._callHook = function (t) {
      var e = this,
        i = this.$options[t];
      i &&
        i.forEach(function (t) {
          return t.call(e);
        });
    }),
    (Gi.prototype._callConnected = function () {
      this._connected ||
        ((this._data = {}),
        (this._computeds = {}),
        (this._frames = { reads: {}, writes: {} }),
        this._initProps(),
        this._callHook("beforeConnect"),
        (this._connected = !0),
        this._initEvents(),
        this._initObserver(),
        this._callHook("connected"),
        this._callUpdate());
    }),
    (Gi.prototype._callDisconnected = function () {
      this._connected &&
        (this._callHook("beforeDisconnect"),
        this._observer &&
          (this._observer.disconnect(), (this._observer = null)),
        this._unbindEvents(),
        this._callHook("disconnected"),
        (this._connected = !1));
    }),
    (Gi.prototype._callUpdate = function (t) {
      var o = this;
      void 0 === t && (t = "update");
      var s = t.type || t;
      b(["update", "resize"], s) && this._callWatches();
      var e = this.$options.update,
        i = this._frames,
        a = i.reads,
        h = i.writes;
      e &&
        e.forEach(function (t, e) {
          var i = t.read,
            n = t.write,
            r = t.events;
          ("update" !== s && !b(r, s)) ||
            (i &&
              !b(xi.reads, a[e]) &&
              (a[e] = xi.read(function () {
                var t = o._connected && i.call(o, o._data, s);
                !1 === t && n ? xi.clear(h[e]) : T(t) && G(o._data, t);
              })),
            n &&
              !b(xi.writes, h[e]) &&
              (h[e] = xi.write(function () {
                return o._connected && n.call(o, o._data, s);
              })));
        });
    }),
    (Gi.prototype._callWatches = function () {
      var h,
        u = this,
        c = this._frames;
      c._watch ||
        ((h = !l(c, "_watch")),
        (c._watch = xi.read(function () {
          if (u._connected) {
            var t = u.$options.computed,
              e = u._computeds;
            for (var i in t) {
              var n = l(e, i),
                r = e[i];
              delete e[i];
              var o = t[i],
                s = o.watch,
                a = o.immediate;
              s && ((h && a) || (n && !Y(r, u[i]))) && s.call(u, u[i], r);
            }
            c._watch = null;
          }
        })));
    }),
    (Ji = 0),
    ((Ki = qi).prototype._init = function (t) {
      ((t = t || {}).data = (function (t, e) {
        var i = t.data,
          n = (t.el, e.args),
          r = e.props;
        void 0 === r && (r = {});
        if (
          (i = k(i)
            ? O(n)
              ? void 0
              : i.slice(0, n.length).reduce(function (t, e, i) {
                  return T(e) ? G(t, e) : (t[n[i]] = e), t;
                }, {})
            : i)
        )
          for (var o in i)
            H(i[o]) ? delete i[o] : (i[o] = r[o] ? on(r[o], i[o]) : i[o]);
        return i;
      })(t, this.constructor.options)),
        (this.$options = Ai(this.constructor.options, t, this)),
        (this.$el = null),
        (this.$props = {}),
        (this._uid = Ji++),
        this._initData(),
        this._initMethods(),
        this._initComputeds(),
        this._callHook("created"),
        t.el && this.$mount(t.el);
    }),
    (Ki.prototype._initData = function () {
      var t = this.$options.data;
      for (var e in (void 0 === t && (t = {}), t))
        this.$props[e] = this[e] = t[e];
    }),
    (Ki.prototype._initMethods = function () {
      var t = this.$options.methods;
      if (t) for (var e in t) this[e] = t[e].bind(this);
    }),
    (Ki.prototype._initComputeds = function () {
      var t = this.$options.computed;
      if (((this._computeds = {}), t))
        for (var e in t)
          !(function (n, r, o) {
            Object.defineProperty(n, r, {
              enumerable: !0,
              get: function () {
                var t = n._computeds,
                  e = n.$props,
                  i = n.$el;
                return l(t, r) || (t[r] = (o.get || o).call(n, e, i)), t[r];
              },
              set: function (t) {
                var e = n._computeds;
                (e[r] = o.set ? o.set.call(n, t) : t), H(e[r]) && delete e[r];
              },
            });
          })(this, e, t[e]);
    }),
    (Ki.prototype._initProps = function (t) {
      var e;
      for (e in (t = t || nn(this.$options, this.$name)))
        H(t[e]) || (this.$props[e] = t[e]);
      var i = [this.$options.computed, this.$options.methods];
      for (e in this.$props)
        e in t &&
          (function (t, e) {
            return t.every(function (t) {
              return !t || !l(t, e);
            });
          })(i, e) &&
          (this[e] = this.$props[e]);
    }),
    (Ki.prototype._initEvents = function () {
      var i = this;
      this._events = [];
      var t = this.$options.events;
      t &&
        t.forEach(function (t) {
          if (l(t, "handler")) rn(i, t);
          else for (var e in t) rn(i, t[e], e);
        });
    }),
    (Ki.prototype._unbindEvents = function () {
      this._events.forEach(function (t) {
        return t();
      }),
        delete this._events;
    }),
    (Ki.prototype._initObserver = function () {
      var t,
        n = this,
        e = this.$options,
        r = e.attrs,
        i = e.props,
        o = e.el;
      !this._observer &&
        i &&
        !1 !== r &&
        ((r = k(r) ? r : Object.keys(i)),
        (this._observer = new MutationObserver(function (t) {
          var i = nn(n.$options, n.$name);
          t.some(function (t) {
            var e = t.attributeName.replace("data-", "");
            return (e === n.$name ? r : [f(e)]).some(function (t) {
              return !H(i[t]) && i[t] !== n.$props[t];
            });
          }) && n.$reset();
        })),
        (t = r.map(d).concat(this.$name)),
        this._observer.observe(o, {
          attributes: !0,
          attributeFilter: t.concat(
            t.map(function (t) {
              return "data-" + t;
            })
          ),
        }));
    }),
    (Qi = (Zi = qi).data),
    (tn = {}),
    (Zi.component = function (s, t) {
      var e = d(s);
      if (((s = f(e)), !t))
        return T(tn[s]) && (tn[s] = Zi.extend(tn[s])), tn[s];
      Zi[s] = function (t, i) {
        for (var e = arguments.length, n = Array(e); e--; ) n[e] = arguments[e];
        var r = Zi.component(s);
        return r.options.functional
          ? new r({ data: T(t) ? t : [].concat(n) })
          : t
          ? Ne(t).map(o)[0]
          : o(t);
        function o(t) {
          var e = Zi.getComponent(t, s);
          if (e) {
            if (!i) return e;
            e.$destroy();
          }
          return new r({ el: t, data: i });
        }
      };
      var i = T(t) ? G({}, t) : t.options;
      return (
        (i.name = s),
        i.install && i.install(Zi, i, s),
        Zi._initialized &&
          !i.functional &&
          xi.read(function () {
            return Zi[s]("[uk-" + e + "],[data-uk-" + e + "]");
          }),
        (tn[s] = T(t) ? i : t)
      );
    }),
    (Zi.getComponents = function (t) {
      return (t && t[Qi]) || {};
    }),
    (Zi.getComponent = function (t, e) {
      return Zi.getComponents(t)[e];
    }),
    (Zi.connect = function (t) {
      if (t[Qi]) for (var e in t[Qi]) t[Qi][e]._callConnected();
      for (var i = 0; i < t.attributes.length; i++) {
        var n = Ri(t.attributes[i].name);
        n && n in tn && Zi[n](t);
      }
    }),
    (Zi.disconnect = function (t) {
      for (var e in t[Qi]) t[Qi][e]._callDisconnected();
    }),
    (function (n) {
      var r = n.data;
      (n.prototype.$create = function (t, e, i) {
        return n[t](e, i);
      }),
        (n.prototype.$mount = function (t) {
          var e = this.$options.name;
          t[r] || (t[r] = {}),
            t[r][e] ||
              (((t[r][e] = this).$el = this.$options.el =
                this.$options.el || t),
              qt(t, document) && this._callConnected());
        }),
        (n.prototype.$reset = function () {
          this._callDisconnected(), this._callConnected();
        }),
        (n.prototype.$destroy = function (t) {
          void 0 === t && (t = !1);
          var e = this.$options,
            i = e.el,
            n = e.name;
          i && this._callDisconnected(),
            this._callHook("destroy"),
            i &&
              i[r] &&
              (delete i[r][n], O(i[r]) || delete i[r], t && $e(this.$el));
        }),
        (n.prototype.$emit = function (t) {
          this._callUpdate(t);
        }),
        (n.prototype.$update = function (t, e) {
          void 0 === t && (t = this.$el), n.update(t, e);
        }),
        (n.prototype.$getComponent = n.getComponent);
      var e = {};
      Object.defineProperties(n.prototype, {
        $container: Object.getOwnPropertyDescriptor(n, "container"),
        $name: {
          get: function () {
            var t = this.$options.name;
            return e[t] || (e[t] = n.prefix + d(t)), e[t];
          },
        },
      });
    })(qi);
  var sn = {
      connected: function () {
        He(this.$el, this.$name) || De(this.$el, this.$name);
      },
    },
    an = {
      props: {
        cls: Boolean,
        animation: "list",
        duration: Number,
        origin: String,
        transition: String,
      },
      data: {
        cls: !1,
        animation: [!1],
        duration: 200,
        origin: !1,
        transition: "linear",
        initProps: {
          overflow: "",
          height: "",
          paddingTop: "",
          paddingBottom: "",
          marginTop: "",
          marginBottom: "",
        },
        hideProps: {
          overflow: "hidden",
          height: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginTop: 0,
          marginBottom: 0,
        },
      },
      computed: {
        hasAnimation: function (t) {
          return !!t.animation[0];
        },
        hasTransition: function (t) {
          var e = t.animation;
          return this.hasAnimation && !0 === e[0];
        },
      },
      methods: {
        toggleElement: function (t, i, n) {
          var r = this;
          return ae.all(
            V(t).map(function (e) {
              return new ae(function (t) {
                return r._toggleElement(e, i, n).then(t, et);
              });
            })
          );
        },
        isToggled: function (t) {
          var e = V(t || this.$el);
          return this.cls ? He(e, this.cls.split(" ")[0]) : !st(e, "hidden");
        },
        updateAria: function (t) {
          !1 === this.cls && ot(t, "aria-hidden", !this.isToggled(t));
        },
        _toggleElement: function (t, e, i) {
          var n = this;
          if (
            ((e = z(e)
              ? e
              : ni.inProgress(t)
              ? He(t, "uk-animation-leave")
              : Qe.inProgress(t)
              ? "0px" === t.style.height
              : !this.isToggled(t)),
            !Jt(t, "before" + (e ? "show" : "hide"), [this]))
          )
            return ae.reject();
          var o,
            r = ($(i)
              ? i
              : !1 !== i && this.hasAnimation
              ? this.hasTransition
                ? hn(this)
                : ((o = this),
                  function (t, e) {
                    ni.cancel(t);
                    var i = o.animation,
                      n = o.duration,
                      r = o._toggle;
                    return e
                      ? (r(t, !0), ni.in(t, i[0], n, o.origin))
                      : ni.out(t, i[1] || i[0], n, o.origin).then(function () {
                          return r(t, !1);
                        });
                  })
              : this._toggle)(t, e);
          Jt(t, e ? "show" : "hide", [this]);
          return (r || ae.resolve()).then(function () {
            Jt(t, e ? "shown" : "hidden", [n]), n.$update(t);
          });
        },
        _toggle: function (t, e) {
          var i;
          t &&
            ((e = Boolean(e)),
            this.cls
              ? (i = b(this.cls, " ") || e !== He(t, this.cls)) &&
                Le(t, this.cls, b(this.cls, " ") ? void 0 : e)
              : (i = e === st(t, "hidden")) && ot(t, "hidden", e ? null : ""),
            Ne("[autofocus]", t).some(function (t) {
              return jt(t) ? t.focus() || !0 : t.blur();
            }),
            this.updateAria(t),
            i && (Jt(t, "toggled", [this]), this.$update(t)));
        },
      },
    };
  function hn(t) {
    var s = t.isToggled,
      a = t.duration,
      h = t.initProps,
      u = t.hideProps,
      c = t.transition,
      l = t._toggle;
    return function (t, e) {
      var i = Qe.inProgress(t),
        n = t.hasChildNodes
          ? j(Re(t.firstElementChild, "marginTop")) +
            j(Re(t.lastElementChild, "marginBottom"))
          : 0,
        r = jt(t) ? ci(t) + (i ? 0 : n) : 0;
      Qe.cancel(t), s(t) || l(t, !0), ci(t, ""), xi.flush();
      var o = ci(t) + (i ? 0 : n);
      return (
        ci(t, r),
        (e
          ? Qe.start(
              t,
              G({}, h, { overflow: "hidden", height: o }),
              Math.round(a * (1 - r / o)),
              c
            )
          : Qe.start(t, u, Math.round(a * (r / o)), c).then(function () {
              return l(t, !1);
            })
        ).then(function () {
          return Re(t, h);
        })
      );
    };
  }
  var un = {
    mixins: [sn, an],
    props: {
      targets: String,
      active: null,
      collapsible: Boolean,
      multiple: Boolean,
      toggle: String,
      content: String,
      transition: String,
      offset: Number,
    },
    data: {
      targets: "> *",
      active: !1,
      animation: [!0],
      collapsible: !0,
      multiple: !1,
      clsOpen: "uk-open",
      toggle: "> .uk-accordion-title",
      content: "> .uk-accordion-content",
      transition: "ease",
      offset: 0,
    },
    computed: {
      items: {
        get: function (t, e) {
          return Ne(t.targets, e);
        },
        watch: function (t, e) {
          var i,
            n = this;
          t.forEach(function (t) {
            return cn(Me(n.content, t), !He(t, n.clsOpen));
          }),
            e ||
              He(t, this.clsOpen) ||
              ((i =
                (!1 !== this.active && t[Number(this.active)]) ||
                (!this.collapsible && t[0])) &&
                this.toggle(i, !1));
        },
        immediate: !0,
      },
    },
    events: [
      {
        name: "click",
        delegate: function () {
          return this.targets + " " + this.$props.toggle;
        },
        handler: function (t) {
          t.preventDefault(),
            this.toggle(
              me(
                Ne(this.targets + " " + this.$props.toggle, this.$el),
                t.current
              )
            );
        },
      },
    ],
    methods: {
      toggle: function (t, r) {
        var o = this,
          e = [this.items[ge(t, this.items)]],
          i = Rt(this.items, "." + this.clsOpen);
        this.multiple || b(i, e[0]) || (e = e.concat(i)),
          (this.collapsible || Rt(e, ":not(." + this.clsOpen + ")").length) &&
            e.forEach(function (t) {
              return o.toggleElement(t, !He(t, o.clsOpen), function (e, i) {
                Le(e, o.clsOpen, i);
                var n = Me((e._wrapper ? "> * " : "") + o.content, e);
                if (!1 !== r && o.hasTransition)
                  return (
                    e._wrapper ||
                      (e._wrapper = Ie(n, "<div" + (i ? " hidden" : "") + ">")),
                    cn(n, !1),
                    hn(o)(e._wrapper, i).then(function () {
                      var t;
                      cn(n, !i),
                        delete e._wrapper,
                        Te(n),
                        i &&
                          (Bi((t = Me(o.$props.toggle, e))) ||
                            Oi(t, { offset: o.offset }));
                    })
                  );
                cn(n, !i);
              });
            });
      },
    },
  };
  function cn(t, e) {
    ot(t, "hidden", e ? "" : null);
  }
  var ln = {
      mixins: [sn, an],
      args: "animation",
      props: { close: String },
      data: {
        animation: [!0],
        selClose: ".uk-alert-close",
        duration: 150,
        hideProps: G({ opacity: 0 }, an.data.hideProps),
      },
      events: [
        {
          name: "click",
          delegate: function () {
            return this.selClose;
          },
          handler: function (t) {
            t.preventDefault(), this.close();
          },
        },
      ],
      methods: {
        close: function () {
          var t = this;
          this.toggleElement(this.$el).then(function () {
            return t.$destroy(!0);
          });
        },
      },
    },
    dn = {
      args: "autoplay",
      props: { automute: Boolean, autoplay: Boolean },
      data: { automute: !1, autoplay: !0 },
      computed: {
        inView: function (t) {
          return "inview" === t.autoplay;
        },
      },
      connected: function () {
        this.inView && !st(this.$el, "preload") && (this.$el.preload = "none"),
          (this.player = new Ni(this.$el)),
          this.automute && this.player.mute();
      },
      update: {
        read: function () {
          return (
            !!this.player && {
              visible: jt(this.$el) && "hidden" !== Re(this.$el, "visibility"),
              inView: this.inView && Bi(this.$el),
            }
          );
        },
        write: function (t) {
          var e = t.visible,
            i = t.inView;
          !e || (this.inView && !i)
            ? this.player.pause()
            : (!0 === this.autoplay || (this.inView && i)) &&
              this.player.play();
        },
        events: ["resize", "scroll"],
      },
    },
    fn = {
      mixins: [sn, dn],
      props: { width: Number, height: Number },
      data: { automute: !0 },
      update: {
        read: function () {
          var t = this.$el,
            e =
              (function (t) {
                for (; (t = Pt(t)); )
                  if ("static" !== Re(t, "position")) return t;
              })(t) || t.parentNode,
            i = e.offsetHeight,
            n = e.offsetWidth,
            r = rt.cover(
              {
                width:
                  this.width || t.naturalWidth || t.videoWidth || t.clientWidth,
                height:
                  this.height ||
                  t.naturalHeight ||
                  t.videoHeight ||
                  t.clientHeight,
              },
              { width: n + (n % 2 ? 1 : 0), height: i + (i % 2 ? 1 : 0) }
            );
          return !(!r.width || !r.height) && r;
        },
        write: function (t) {
          var e = t.height,
            i = t.width;
          Re(this.$el, { height: e, width: i });
        },
        events: ["resize"],
      },
    };
  var pn,
    mn = {
      props: { pos: String, offset: null, flip: Boolean, clsPos: String },
      data: {
        pos: "bottom-" + (lt ? "right" : "left"),
        flip: !0,
        offset: !1,
        clsPos: "",
      },
      computed: {
        pos: function (t) {
          var e = t.pos;
          return (e + (b(e, "-") ? "" : "-center")).split("-");
        },
        dir: function () {
          return this.pos[0];
        },
        align: function () {
          return this.pos[1];
        },
      },
      methods: {
        positionAt: function (t, e, i) {
          var n;
          Pe(t, this.clsPos + "-(top|bottom|left|right)(-[a-z]+)?");
          var r = this.offset,
            o = this.getAxis();
          P(r) ||
            (r = (n = Me(r))
              ? si(n)["x" === o ? "left" : "top"] -
                si(e)["x" === o ? "right" : "bottom"]
              : 0);
          var s = oi(
              t,
              e,
              "x" === o
                ? vi(this.dir) + " " + this.align
                : this.align + " " + vi(this.dir),
              "x" === o
                ? this.dir + " " + this.align
                : this.align + " " + this.dir,
              "x" === o
                ? "" + ("left" === this.dir ? -r : r)
                : " " + ("top" === this.dir ? -r : r),
              null,
              this.flip,
              i
            ).target,
            a = s.x,
            h = s.y;
          (this.dir = "x" === o ? a : h),
            (this.align = "x" === o ? h : a),
            Le(
              t,
              this.clsPos + "-" + this.dir + "-" + this.align,
              !1 === this.offset
            );
        },
        getAxis: function () {
          return "top" === this.dir || "bottom" === this.dir ? "y" : "x";
        },
      },
    },
    gn = {
      mixins: [mn, an],
      args: "pos",
      props: {
        mode: "list",
        toggle: Boolean,
        boundary: Boolean,
        boundaryAlign: Boolean,
        delayShow: Number,
        delayHide: Number,
        clsDrop: String,
      },
      data: {
        mode: ["click", "hover"],
        toggle: "- *",
        boundary: ut && window,
        boundaryAlign: !1,
        delayShow: 0,
        delayHide: 800,
        clsDrop: !1,
        animation: ["uk-animation-fade"],
        cls: "uk-open",
      },
      computed: {
        boundary: function (t, e) {
          return yt(t.boundary, e);
        },
        clsDrop: function (t) {
          return t.clsDrop || "uk-" + this.$options.name;
        },
        clsPos: function () {
          return this.clsDrop;
        },
      },
      created: function () {
        this.tracker = new Ti();
      },
      connected: function () {
        De(this.$el, this.clsDrop);
        var t = this.$props.toggle;
        (this.toggle =
          t &&
          this.$create("toggle", yt(t, this.$el), {
            target: this.$el,
            mode: this.mode,
          })),
          this.toggle || Jt(this.$el, "updatearia");
      },
      disconnected: function () {
        this.isActive() && (pn = null);
      },
      events: [
        {
          name: "click",
          delegate: function () {
            return "." + this.clsDrop + "-close";
          },
          handler: function (t) {
            t.preventDefault(), this.hide(!1);
          },
        },
        {
          name: "click",
          delegate: function () {
            return 'a[href^="#"]';
          },
          handler: function (t) {
            var e = t.defaultPrevented,
              i = t.current.hash;
            e || !i || qt(i, this.$el) || this.hide(!1);
          },
        },
        {
          name: "beforescroll",
          handler: function () {
            this.hide(!1);
          },
        },
        {
          name: "toggle",
          self: !0,
          handler: function (t, e) {
            t.preventDefault(),
              this.isToggled() ? this.hide(!1) : this.show(e, !1);
          },
        },
        {
          name: "toggleshow",
          self: !0,
          handler: function (t, e) {
            t.preventDefault(), this.show(e);
          },
        },
        {
          name: "togglehide",
          self: !0,
          handler: function (t) {
            t.preventDefault(), this.hide();
          },
        },
        {
          name: wt,
          filter: function () {
            return b(this.mode, "hover");
          },
          handler: function (t) {
            re(t) || this.clearTimers();
          },
        },
        {
          name: bt,
          filter: function () {
            return b(this.mode, "hover");
          },
          handler: function (t) {
            re(t) || this.hide();
          },
        },
        {
          name: "toggled",
          self: !0,
          handler: function () {
            this.isToggled() && (this.clearTimers(), this.position());
          },
        },
        {
          name: "show",
          self: !0,
          handler: function () {
            var o = this;
            (pn = this).tracker.init(),
              Jt(this.$el, "updatearia"),
              Kt(
                this.$el,
                "hide",
                Xt(document, mt, function (t) {
                  var r = t.target;
                  return (
                    !qt(r, o.$el) &&
                    Kt(
                      document,
                      vt + " " + xt + " scroll",
                      function (t) {
                        var e = t.defaultPrevented,
                          i = t.type,
                          n = t.target;
                        e ||
                          i !== vt ||
                          r !== n ||
                          (o.toggle && qt(r, o.toggle.$el)) ||
                          o.hide(!1);
                      },
                      !0
                    )
                  );
                }),
                { self: !0 }
              ),
              Kt(
                this.$el,
                "hide",
                Xt(document, "keydown", function (t) {
                  27 === t.keyCode && (t.preventDefault(), o.hide(!1));
                }),
                { self: !0 }
              );
          },
        },
        {
          name: "beforehide",
          self: !0,
          handler: function () {
            this.clearTimers();
          },
        },
        {
          name: "hide",
          handler: function (t) {
            var e = t.target;
            this.$el === e
              ? ((pn = this.isActive() ? null : pn),
                Jt(this.$el, "updatearia"),
                this.tracker.cancel())
              : (pn =
                  null === pn && qt(e, this.$el) && this.isToggled()
                    ? this
                    : pn);
          },
        },
        {
          name: "updatearia",
          self: !0,
          handler: function (t, e) {
            t.preventDefault(),
              this.updateAria(this.$el),
              (e || this.toggle) &&
                (ot((e || this.toggle).$el, "aria-expanded", this.isToggled()),
                Le(this.toggle.$el, this.cls, this.isToggled()));
          },
        },
      ],
      update: {
        write: function () {
          this.isToggled() && !ni.inProgress(this.$el) && this.position();
        },
        events: ["resize"],
      },
      methods: {
        show: function (t, e) {
          var i,
            n = this;
          if (
            (void 0 === t && (t = this.toggle),
            void 0 === e && (e = !0),
            this.isToggled() &&
              t &&
              this.toggle &&
              t.$el !== this.toggle.$el &&
              this.hide(!1),
            (this.toggle = t),
            this.clearTimers(),
            !this.isActive())
          ) {
            if (pn) {
              if (e && pn.isDelaying)
                return void (this.showTimer = setTimeout(this.show, 10));
              for (; pn && i !== pn && !qt(this.$el, pn.$el); )
                (i = pn).hide(!1);
            }
            this.showTimer = setTimeout(function () {
              return !n.isToggled() && n.toggleElement(n.$el, !0);
            }, (e && this.delayShow) || 0);
          }
        },
        hide: function (t) {
          var e = this;
          void 0 === t && (t = !0);
          function i() {
            return e.toggleElement(e.$el, !1, !1);
          }
          var n, r;
          this.clearTimers(),
            (this.isDelaying =
              ((n = this.$el),
              (r = []),
              Ae(n, function (t) {
                return "static" !== Re(t, "position") && r.push(t);
              }),
              r.some(function (t) {
                return e.tracker.movesTo(t);
              }))),
            t && this.isDelaying
              ? (this.hideTimer = setTimeout(this.hide, 50))
              : t && this.delayHide
              ? (this.hideTimer = setTimeout(i, this.delayHide))
              : i();
        },
        clearTimers: function () {
          clearTimeout(this.showTimer),
            clearTimeout(this.hideTimer),
            (this.showTimer = null),
            (this.hideTimer = null),
            (this.isDelaying = !1);
        },
        isActive: function () {
          return pn === this;
        },
        position: function () {
          Be(this.$el, this.clsDrop + "-stack"),
            Le(this.$el, this.clsDrop + "-boundary", this.boundaryAlign);
          var t,
            e = si(this.boundary),
            i = this.boundaryAlign ? e : si(this.toggle.$el);
          "justify" === this.align
            ? ((t = "y" === this.getAxis() ? "width" : "height"),
              Re(this.$el, t, i[t]))
            : this.$el.offsetWidth >
                Math.max(e.right - i.left, i.right - e.left) &&
              De(this.$el, this.clsDrop + "-stack"),
            this.positionAt(
              this.$el,
              this.boundaryAlign ? this.boundary : this.toggle.$el,
              this.boundary
            );
        },
      },
    };
  var vn = {
      mixins: [sn],
      args: "target",
      props: { target: Boolean },
      data: { target: !1 },
      computed: {
        input: function (t, e) {
          return Me(Wt, e);
        },
        state: function () {
          return this.input.nextElementSibling;
        },
        target: function (t, e) {
          var i = t.target;
          return (
            i &&
            ((!0 === i &&
              this.input.parentNode === e &&
              this.input.nextElementSibling) ||
              yt(i, e))
          );
        },
      },
      update: function () {
        var t,
          e,
          i,
          n = this.target,
          r = this.input;
        !n ||
          (n[(e = Vt(n) ? "value" : "textContent")] !==
            (i =
              r.files && r.files[0]
                ? r.files[0].name
                : zt(r, "select") &&
                  (t = Ne("option", r).filter(function (t) {
                    return t.selected;
                  })[0])
                ? t.textContent
                : r.value) &&
            (n[e] = i));
      },
      events: [
        {
          name: "change",
          handler: function () {
            this.$update();
          },
        },
        {
          name: "reset",
          el: function () {
            return Bt(this.$el, "form");
          },
          handler: function () {
            this.$update();
          },
        },
      ],
    },
    wn = {
      update: {
        read: function (t) {
          var e = Bi(this.$el);
          if (!e || t.isInView === e) return !1;
          t.isInView = e;
        },
        write: function () {
          this.$el.src = "" + this.$el.src;
        },
        events: ["scroll", "resize"],
      },
    },
    bn = {
      props: { margin: String, firstColumn: Boolean },
      data: { margin: "uk-margin-small-top", firstColumn: "uk-first-column" },
      update: {
        read: function () {
          return {
            columns:
              ((t = this.$el.children),
              (e = yn(t, "left", "right")),
              lt ? e.reverse() : e),
            rows: xn(this.$el.children),
          };
          var t, e;
        },
        write: function (t) {
          var i = this,
            n = t.columns;
          t.rows.forEach(function (t, e) {
            return t.forEach(function (t) {
              Le(t, i.margin, 0 !== e), Le(t, i.firstColumn, b(n[0], t));
            });
          });
        },
        events: ["resize"],
      },
    };
  function xn(t) {
    return yn(t, "top", "bottom");
  }
  function yn(t, e, i) {
    for (var n = [[]], r = 0; r < t.length; r++) {
      var o = t[r];
      if (jt(o))
        for (var s = kn(o), a = n.length - 1; 0 <= a; a--) {
          var h = n[a];
          if (!h[0]) {
            h.push(o);
            break;
          }
          var u = void 0,
            u =
              h[0].offsetParent === o.offsetParent
                ? kn(h[0])
                : ((s = kn(o, !0)), kn(h[0], !0));
          if (s[e] >= u[i] - 1 && s[e] !== u[e]) {
            n.push([o]);
            break;
          }
          if (s[i] - 1 > u[e] || s[e] === u[e]) {
            h.push(o);
            break;
          }
          if (0 === a) {
            n.unshift([o]);
            break;
          }
        }
    }
    return n;
  }
  function kn(t, e) {
    var i;
    void 0 === e && (e = !1);
    var n = t.offsetTop,
      r = t.offsetLeft,
      o = t.offsetHeight,
      s = t.offsetWidth;
    return (
      e && ((n = (i = ui(t))[0]), (r = i[1])),
      { top: n, left: r, bottom: n + o, right: r + s }
    );
  }
  var $n = {
    extends: bn,
    mixins: [sn],
    name: "grid",
    props: { masonry: Boolean, parallax: Number },
    data: {
      margin: "uk-grid-margin",
      clsStack: "uk-grid-stack",
      masonry: !1,
      parallax: 0,
    },
    connected: function () {
      this.masonry && De(this.$el, "uk-flex-top uk-flex-wrap-top");
    },
    update: [
      {
        write: function (t) {
          var e = t.columns;
          Le(this.$el, this.clsStack, e.length < 2);
        },
        events: ["resize"],
      },
      {
        read: function (t) {
          var e = t.columns,
            i = t.rows,
            n = Yt(this.$el);
          if (!n.length || (!this.masonry && !this.parallax)) return !1;
          var r,
            o,
            s,
            a,
            h,
            u = n.some(Qe.inProgress),
            c = !1,
            l = e.map(function (t) {
              return t.reduce(function (t, e) {
                return t + e.offsetHeight;
              }, 0);
            }),
            d =
              ((r = n),
              (o = this.margin),
              j(
                (s = r.filter(function (t) {
                  return He(t, o);
                })[0])
                  ? Re(s, "marginTop")
                  : Re(r[0], "paddingLeft")
              ) *
                (i.length - 1)),
            f = Math.max.apply(Math, l) + d;
          this.masonry &&
            ((e = e.map(function (t) {
              return Z(t, "offsetTop");
            })),
            (a = e),
            (h = i.map(function (t) {
              return Math.max.apply(
                Math,
                t.map(function (t) {
                  return t.offsetHeight;
                })
              );
            })),
            (c = a.map(function (i) {
              var n = 0;
              return i.map(function (t, e) {
                return (n += e ? h[e - 1] - i[e - 1].offsetHeight : 0);
              });
            })));
          var p = Math.abs(this.parallax);
          return {
            padding: (p =
              p &&
              l.reduce(function (t, e, i) {
                return Math.max(t, e + d + (i % 2 ? p : p / 8) - f);
              }, 0)),
            columns: e,
            translates: c,
            height: !u && (this.masonry ? f : ""),
          };
        },
        write: function (t) {
          var e = t.height,
            i = t.padding;
          Re(this.$el, "paddingBottom", i || ""),
            !1 !== e && Re(this.$el, "height", e);
        },
        events: ["resize"],
      },
      {
        read: function (t) {
          var e = t.height;
          return {
            scrolled:
              !!this.parallax &&
              Hi(this.$el, e ? e - ci(this.$el) : 0) * Math.abs(this.parallax),
          };
        },
        write: function (t) {
          var e = t.columns,
            n = t.scrolled,
            r = t.translates;
          (!1 === n && !r) ||
            e.forEach(function (t, i) {
              return t.forEach(function (t, e) {
                return Re(
                  t,
                  "transform",
                  n || r
                    ? "translateY(" +
                        ((r && -r[i][e]) + (n ? (i % 2 ? n : n / 8) : 0)) +
                        "px)"
                    : ""
                );
              });
            });
        },
        events: ["scroll", "resize"],
      },
    ],
  };
  var In = ct
      ? {
          props: { selMinHeight: String },
          data: { selMinHeight: !1, forceHeight: !1 },
          computed: {
            elements: function (t, e) {
              var i = t.selMinHeight;
              return i ? Ne(i, e) : [e];
            },
          },
          update: [
            {
              read: function () {
                Re(this.elements, "height", "");
              },
              order: -5,
              events: ["resize"],
            },
            {
              write: function () {
                var i = this;
                this.elements.forEach(function (t) {
                  var e = j(Re(t, "minHeight"));
                  e &&
                    (i.forceHeight ||
                      Math.round(e + fi(t, "height", "content-box")) >=
                        t.offsetHeight) &&
                    Re(t, "height", e);
                });
              },
              order: 5,
              events: ["resize"],
            },
          ],
        }
      : {},
    Sn = {
      mixins: [In],
      args: "target",
      props: { target: String, row: Boolean },
      data: { target: "> *", row: !0, forceHeight: !0 },
      computed: {
        elements: function (t, e) {
          return Ne(t.target, e);
        },
      },
      update: {
        read: function () {
          return {
            rows: (this.row ? xn(this.elements) : [this.elements]).map(Tn),
          };
        },
        write: function (t) {
          t.rows.forEach(function (t) {
            var i = t.heights;
            return t.elements.forEach(function (t, e) {
              return Re(t, "minHeight", i[e]);
            });
          });
        },
        events: ["resize"],
      },
    };
  function Tn(t) {
    var e;
    if (t.length < 2) return { heights: [""], elements: t };
    var i = En(t),
      n = i.heights,
      r = i.max,
      o = t.some(function (t) {
        return t.style.minHeight;
      }),
      s = t.some(function (t, e) {
        return !t.style.minHeight && n[e] < r;
      });
    return (
      o &&
        s &&
        (Re(t, "minHeight", ""), (e = En(t)), (n = e.heights), (r = e.max)),
      {
        heights: (n = t.map(function (t, e) {
          return n[e] === r && j(t.style.minHeight).toFixed(2) !== r.toFixed(2)
            ? ""
            : r;
        })),
        elements: t,
      }
    );
  }
  function En(t) {
    var e = t.map(function (t) {
      return si(t).height - fi(t, "height", "content-box");
    });
    return { heights: e, max: Math.max.apply(null, e) };
  }
  var _n = {
    mixins: [In],
    props: {
      expand: Boolean,
      offsetTop: Boolean,
      offsetBottom: Boolean,
      minHeight: Number,
    },
    data: { expand: !1, offsetTop: !1, offsetBottom: !1, minHeight: 0 },
    update: {
      read: function (t) {
        var e = t.minHeight;
        if (!jt(this.$el)) return !1;
        var i = "",
          n = fi(this.$el, "height", "content-box");
        if (this.expand) {
          if (
            ((this.$el.dataset.heightExpand = ""),
            Me("[data-height-expand]") !== this.$el)
          )
            return !1;
          i =
            ci(window) - (Cn(document.documentElement) - Cn(this.$el)) - n ||
            "";
        } else {
          var r,
            i = "calc(100vh";
          this.offsetTop &&
            (i +=
              0 < (r = si(this.$el).top) && r < ci(window) / 2
                ? " - " + r + "px"
                : ""),
            !0 === this.offsetBottom
              ? (i += " - " + Cn(this.$el.nextElementSibling) + "px")
              : P(this.offsetBottom)
              ? (i += " - " + this.offsetBottom + "vh")
              : this.offsetBottom && u(this.offsetBottom, "px")
              ? (i += " - " + j(this.offsetBottom) + "px")
              : D(this.offsetBottom) &&
                (i += " - " + Cn(yt(this.offsetBottom, this.$el)) + "px"),
            (i += (n ? " - " + n + "px" : "") + ")");
        }
        return { minHeight: i, prev: e };
      },
      write: function (t) {
        var e = t.minHeight,
          i = t.prev;
        Re(this.$el, { minHeight: e }),
          e !== i && this.$update(this.$el, "resize"),
          this.minHeight &&
            j(Re(this.$el, "minHeight")) < this.minHeight &&
            Re(this.$el, "minHeight", this.minHeight);
      },
      events: ["resize"],
    },
  };
  function Cn(t) {
    return (t && si(t).height) || 0;
  }
  var An = {
      args: "src",
      props: {
        id: Boolean,
        icon: String,
        src: String,
        style: String,
        width: Number,
        height: Number,
        ratio: Number,
        class: String,
        strokeAnimation: Boolean,
        focusable: Boolean,
        attributes: "list",
      },
      data: {
        ratio: 1,
        include: ["style", "class", "focusable"],
        class: "",
        strokeAnimation: !1,
      },
      beforeConnect: function () {
        this.class += " uk-svg";
      },
      connected: function () {
        var t,
          e = this;
        !this.icon &&
          b(this.src, "#") &&
          ((t = this.src.split("#")), (this.src = t[0]), (this.icon = t[1])),
          (this.svg = this.getSvg().then(function (t) {
            return (
              e.applyAttributes(t),
              (e.svgEl = (function (t, e) {
                if (Ft(e) || "CANVAS" === e.tagName) {
                  ot(e, "hidden", !0);
                  var i = e.nextElementSibling;
                  return Bn(t, i) ? i : ye(e, t);
                }
                var n = e.lastElementChild;
                return Bn(t, n) ? n : be(e, t);
              })(t, e.$el))
            );
          }, et));
      },
      disconnected: function () {
        var e = this;
        Ft(this.$el) && ot(this.$el, "hidden", null),
          this.svg &&
            this.svg.then(function (t) {
              return (!e._connected || t !== e.svgEl) && $e(t);
            }, et),
          (this.svg = this.svgEl = null);
      },
      update: {
        read: function () {
          return !!(this.strokeAnimation && this.svgEl && jt(this.svgEl));
        },
        write: function () {
          var t, e;
          (t = this.svgEl),
            (e = Dn(t)) && t.style.setProperty("--uk-animation-stroke", e);
        },
        type: ["resize"],
      },
      methods: {
        getSvg: function () {
          var e = this;
          return (function (i) {
            if (Mn[i]) return Mn[i];
            return (Mn[i] = new ae(function (e, t) {
              i
                ? w(i, "data:")
                  ? e(decodeURIComponent(i.split(",")[1]))
                  : de(i).then(
                      function (t) {
                        return e(t.response);
                      },
                      function () {
                        return t("SVG not found.");
                      }
                    )
                : t();
            }));
          })(this.src).then(function (t) {
            return (
              (function (t, e) {
                e &&
                  b(t, "<symbol") &&
                  (t =
                    (function (t, e) {
                      if (!zn[t]) {
                        var i;
                        for (zn[t] = {}, Nn.lastIndex = 0; (i = Nn.exec(t)); )
                          zn[t][i[3]] =
                            '<svg xmlns="http://www.w3.org/2000/svg"' +
                            i[1] +
                            "svg>";
                      }
                      return zn[t][e];
                    })(t, e) || t);
                return (
                  (t = Me(t.substr(t.indexOf("<svg")))) &&
                  t.hasChildNodes() &&
                  t
                );
              })(t, e.icon) || ae.reject("SVG not found.")
            );
          });
        },
        applyAttributes: function (i) {
          var n = this;
          for (var t in this.$options.props)
            this[t] && b(this.include, t) && ot(i, t, this[t]);
          for (var e in this.attributes) {
            var r = this.attributes[e].split(":", 2),
              o = r[0],
              s = r[1];
            ot(i, o, s);
          }
          this.id || at(i, "id");
          var a = ["width", "height"],
            h = [this.width, this.height];
          h.some(function (t) {
            return t;
          }) ||
            (h = a.map(function (t) {
              return ot(i, t);
            }));
          var u = ot(i, "viewBox");
          u &&
            !h.some(function (t) {
              return t;
            }) &&
            (h = u.split(" ").slice(2)),
            h.forEach(function (t, e) {
              (t = (0 | t) * n.ratio) && ot(i, a[e], t),
                t && !h[1 ^ e] && at(i, a[1 ^ e]);
            }),
            ot(i, "data-svg", this.icon || this.src);
        },
      },
    },
    Mn = {};
  var Nn = /<symbol([^]*?id=(['"])(.+?)\2[^]*?<\/)symbol>/g,
    zn = {};
  function Dn(t) {
    return Math.ceil(
      Math.max.apply(
        Math,
        [0].concat(
          Ne("[stroke]", t).map(function (t) {
            try {
              return t.getTotalLength();
            } catch (t) {
              return 0;
            }
          })
        )
      )
    );
  }
  function Bn(t, e) {
    return ot(t, "data-svg") === ot(e, "data-svg");
  }
  var Pn = {
      spinner:
        '<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"/></svg>',
      totop:
        '<svg width="18" height="10" viewBox="0 0 18 10" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 9 9 1 17 9 "/></svg>',
      marker:
        '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="4" width="1" height="11"/><rect x="4" y="9" width="11" height="1"/></svg>',
      "close-icon":
        '<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"/></svg>',
      "close-large":
        '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"/><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"/></svg>',
      "navbar-toggle-icon":
        '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect y="9" width="20" height="2"/><rect y="3" width="20" height="2"/><rect y="15" width="20" height="2"/></svg>',
      "overlay-icon":
        '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><rect x="19" y="0" width="1" height="40"/><rect x="0" y="19" width="40" height="1"/></svg>',
      "pagination-next":
        '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"/></svg>',
      "pagination-previous":
        '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"/></svg>',
      "search-icon":
        '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>',
      "search-large":
        '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.8" cx="17.5" cy="17.5" r="16.5"/><line fill="none" stroke="#000" stroke-width="1.8" x1="38" y1="39" x2="29" y2="30"/></svg>',
      "search-navbar":
        '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10.5" cy="10.5" r="9.5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="23" y1="23" x2="17" y2="17"/></svg>',
      "slidenav-next":
        '<svg width="14px" height="24px" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1 "/></svg>',
      "slidenav-next-large":
        '<svg width="25px" height="40px" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="4.002,38.547 22.527,20.024 4,1.5 "/></svg>',
      "slidenav-previous":
        '<svg width="14px" height="24px" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23 "/></svg>',
      "slidenav-previous-large":
        '<svg width="25px" height="40px" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="20.527,1.5 2,20.024 20.525,38.547 "/></svg>',
    },
    On = {
      install: function (r) {
        r.icon.add = function (t, e) {
          var i,
            n = D(t) ? (((i = {})[t] = e), i) : t;
          J(n, function (t, e) {
            (Pn[e] = t), delete Vn[e];
          }),
            r._initialized &&
              Ae(document.body, function (t) {
                return J(r.getComponents(t), function (t) {
                  t.$options.isIcon && t.icon in n && t.$reset();
                });
              });
        };
      },
      extends: An,
      args: "icon",
      props: ["icon"],
      data: { include: ["focusable"] },
      isIcon: !0,
      beforeConnect: function () {
        De(this.$el, "uk-icon");
      },
      methods: {
        getSvg: function () {
          var t = (function (t) {
            if (!Pn[t]) return null;
            Vn[t] ||
              (Vn[t] = Me(
                (
                  Pn[
                    (function (t) {
                      return lt
                        ? X(X(t, "left", "right"), "previous", "next")
                        : t;
                    })(t)
                  ] || Pn[t]
                ).trim()
              ));
            return Vn[t].cloneNode(!0);
          })(this.icon);
          return t ? ae.resolve(t) : ae.reject("Icon not found.");
        },
      },
    },
    Hn = {
      args: !1,
      extends: On,
      data: function (t) {
        return { icon: d(t.constructor.options.name) };
      },
      beforeConnect: function () {
        De(this.$el, this.$name);
      },
    },
    Ln = {
      extends: Hn,
      beforeConnect: function () {
        De(this.$el, "uk-slidenav");
      },
      computed: {
        icon: function (t, e) {
          var i = t.icon;
          return He(e, "uk-slidenav-large") ? i + "-large" : i;
        },
      },
    },
    Fn = {
      extends: Hn,
      computed: {
        icon: function (t, e) {
          var i = t.icon;
          return He(e, "uk-search-icon") && Ut(e, ".uk-search-large").length
            ? "search-large"
            : Ut(e, ".uk-search-navbar").length
            ? "search-navbar"
            : i;
        },
      },
    },
    jn = {
      extends: Hn,
      computed: {
        icon: function () {
          return "close-" + (He(this.$el, "uk-close-large") ? "large" : "icon");
        },
      },
    },
    Wn = {
      extends: Hn,
      connected: function () {
        var e = this;
        this.svg.then(function (t) {
          return (
            1 !== e.ratio && Re(Me("circle", t), "strokeWidth", 1 / e.ratio)
          );
        }, et);
      },
    },
    Vn = {};
  var Rn = {
    args: "dataSrc",
    props: {
      dataSrc: String,
      dataSrcset: Boolean,
      sizes: String,
      width: Number,
      height: Number,
      offsetTop: String,
      offsetLeft: String,
      target: String,
    },
    data: {
      dataSrc: "",
      dataSrcset: !1,
      sizes: !1,
      width: !1,
      height: !1,
      offsetTop: "50vh",
      offsetLeft: 0,
      target: !1,
    },
    computed: {
      cacheKey: function (t) {
        var e = t.dataSrc;
        return this.$name + "." + e;
      },
      width: function (t) {
        var e = t.width,
          i = t.dataWidth;
        return e || i;
      },
      height: function (t) {
        var e = t.height,
          i = t.dataHeight;
        return e || i;
      },
      sizes: function (t) {
        var e = t.sizes,
          i = t.dataSizes;
        return e || i;
      },
      isImg: function (t, e) {
        return Jn(e);
      },
      target: {
        get: function (t) {
          var e = t.target;
          return [this.$el].concat(kt(e, this.$el));
        },
        watch: function () {
          this.observe();
        },
      },
      offsetTop: function (t) {
        return wi(t.offsetTop, "height");
      },
      offsetLeft: function (t) {
        return wi(t.offsetLeft, "width");
      },
    },
    connected: function () {
      Qn[this.cacheKey]
        ? qn(
            this.$el,
            Qn[this.cacheKey] || this.dataSrc,
            this.dataSrcset,
            this.sizes
          )
        : this.isImg &&
          this.width &&
          this.height &&
          qn(
            this.$el,
            (function (t, e, i) {
              var n;
              i &&
                ((n = rt.ratio({ width: t, height: e }, "width", wi(Yn(i)))),
                (t = n.width),
                (e = n.height));
              return (
                'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="' +
                t +
                '" height="' +
                e +
                '"></svg>'
              );
            })(this.width, this.height, this.sizes)
          ),
        (this.observer = new Vi(this.load, {
          rootMargin: this.offsetTop + "px " + this.offsetLeft + "px",
        })),
        requestAnimationFrame(this.observe);
    },
    disconnected: function () {
      this.observer.disconnect();
    },
    update: {
      read: function (t) {
        var e = this,
          i = t.image;
        if (
          (i ||
            "complete" !== document.readyState ||
            this.load(this.observer.takeRecords()),
          this.isImg)
        )
          return !1;
        i &&
          i.then(function (t) {
            return t && "" !== t.currentSrc && qn(e.$el, Zn(t));
          });
      },
      write: function (t) {
        var e, i, n, r, o;
        this.dataSrcset &&
          1 !== window.devicePixelRatio &&
          ((!(e = Re(this.$el, "backgroundSize")).match(/^(auto\s?)+$/) &&
            j(e) !== t.bgSize) ||
            ((t.bgSize =
              ((i = this.dataSrcset),
              (n = this.sizes),
              (r = wi(Yn(n))),
              (o = (i.match(Kn) || []).map(j).sort(function (t, e) {
                return t - e;
              })).filter(function (t) {
                return r <= t;
              })[0] ||
                o.pop() ||
                "")),
            Re(this.$el, "backgroundSize", t.bgSize + "px")));
      },
      events: ["resize"],
    },
    methods: {
      load: function (t) {
        var e = this;
        t.some(function (t) {
          return H(t.isIntersecting) || t.isIntersecting;
        }) &&
          ((this._data.image = fe(
            this.dataSrc,
            this.dataSrcset,
            this.sizes
          ).then(function (t) {
            return (
              qn(e.$el, Zn(t), t.srcset, t.sizes), (Qn[e.cacheKey] = Zn(t)), t
            );
          }, et)),
          this.observer.disconnect());
      },
      observe: function () {
        var e = this;
        this._connected &&
          !this._data.image &&
          this.target.forEach(function (t) {
            return e.observer.observe(t);
          });
      },
    },
  };
  function qn(t, e, i, n) {
    Jn(t)
      ? (n && (t.sizes = n), i && (t.srcset = i), e && (t.src = e))
      : e &&
        !b(t.style.backgroundImage, e) &&
        (Re(t, "backgroundImage", "url(" + Ht(e) + ")"), Jt(t, Zt("load", !1)));
  }
  var Un = /\s*(.*?)\s*(\w+|calc\(.*?\))\s*(?:,|$)/g;
  function Yn(t) {
    var e, i;
    for (Un.lastIndex = 0; (e = Un.exec(t)); )
      if (!e[1] || window.matchMedia(e[1]).matches) {
        e = w((i = e[2]), "calc")
          ? i
              .substring(5, i.length - 1)
              .replace(Xn, function (t) {
                return wi(t);
              })
              .replace(/ /g, "")
              .match(Gn)
              .reduce(function (t, e) {
                return t + +e;
              }, 0)
          : i;
        break;
      }
    return e || "100vw";
  }
  var Xn = /\d+(?:\w+|%)/g,
    Gn = /[+-]?(\d+)/g;
  var Kn = /\s+\d+w\s*(?:,|$)/g;
  function Jn(t) {
    return "IMG" === t.tagName;
  }
  function Zn(t) {
    return t.currentSrc || t.src;
  }
  var Qn,
    tr = "__test__";
  try {
    ((Qn = window.sessionStorage || {})[tr] = 1), delete Qn[tr];
  } catch (t) {
    Qn = {};
  }
  var er = {
    props: { media: Boolean },
    data: { media: !1 },
    computed: {
      matchMedia: function () {
        var t = (function (t) {
          if (D(t)) {
            if ("@" === t[0]) t = j(Xe("breakpoint-" + t.substr(1)));
            else if (isNaN(t)) return t;
          }
          return !(!t || isNaN(t)) && "(min-width: " + t + "px)";
        })(this.media);
        return !t || window.matchMedia(t).matches;
      },
    },
  };
  var ir = {
      mixins: [sn, er],
      props: { fill: String },
      data: {
        fill: "",
        clsWrapper: "uk-leader-fill",
        clsHide: "uk-leader-hide",
        attrFill: "data-fill",
      },
      computed: {
        fill: function (t) {
          return t.fill || Xe("leader-fill-content");
        },
      },
      connected: function () {
        var t = Se(this.$el, '<span class="' + this.clsWrapper + '">');
        this.wrapper = t[0];
      },
      disconnected: function () {
        Te(this.wrapper.childNodes);
      },
      update: {
        read: function (t) {
          var e = t.changed,
            i = t.width,
            n = i;
          return {
            width: (i = Math.floor(this.$el.offsetWidth / 2)),
            fill: this.fill,
            changed: e || n !== i,
            hide: !this.matchMedia,
          };
        },
        write: function (t) {
          Le(this.wrapper, this.clsHide, t.hide),
            t.changed &&
              ((t.changed = !1),
              ot(this.wrapper, this.attrFill, new Array(t.width).join(t.fill)));
        },
        events: ["resize"],
      },
    },
    nr = {
      props: { container: Boolean },
      data: { container: !0 },
      computed: {
        container: function (t) {
          var e = t.container;
          return (!0 === e && this.$container) || (e && Me(e));
        },
      },
    },
    rr = [],
    or = {
      mixins: [sn, nr, an],
      props: {
        selPanel: String,
        selClose: String,
        escClose: Boolean,
        bgClose: Boolean,
        stack: Boolean,
      },
      data: {
        cls: "uk-open",
        escClose: !0,
        bgClose: !0,
        overlay: !0,
        stack: !1,
      },
      computed: {
        panel: function (t, e) {
          return Me(t.selPanel, e);
        },
        transitionElement: function () {
          return this.panel;
        },
        bgClose: function (t) {
          return t.bgClose && this.panel;
        },
      },
      beforeDisconnect: function () {
        this.isToggled() && this.toggleElement(this.$el, !1, !1);
      },
      events: [
        {
          name: "click",
          delegate: function () {
            return this.selClose;
          },
          handler: function (t) {
            t.preventDefault(), this.hide();
          },
        },
        {
          name: "toggle",
          self: !0,
          handler: function (t) {
            t.defaultPrevented ||
              (t.preventDefault(),
              this.isToggled() === b(rr, this) && this.toggle());
          },
        },
        {
          name: "beforeshow",
          self: !0,
          handler: function (t) {
            if (b(rr, this)) return !1;
            !this.stack && rr.length
              ? (ae
                  .all(
                    rr.map(function (t) {
                      return t.hide();
                    })
                  )
                  .then(this.show),
                t.preventDefault())
              : rr.push(this);
          },
        },
        {
          name: "show",
          self: !0,
          handler: function () {
            var o = this;
            li(window) - li(document) &&
              this.overlay &&
              Re(document.body, "overflowY", "scroll"),
              this.stack &&
                Re(this.$el, "zIndex", Re(this.$el, "zIndex") + rr.length),
              De(document.documentElement, this.clsPage),
              this.bgClose &&
                Kt(
                  this.$el,
                  "hide",
                  Xt(document, mt, function (t) {
                    var r = t.target;
                    K(rr) !== o ||
                      (o.overlay && !qt(r, o.$el)) ||
                      qt(r, o.panel) ||
                      Kt(
                        document,
                        vt + " " + xt + " scroll",
                        function (t) {
                          var e = t.defaultPrevented,
                            i = t.type,
                            n = t.target;
                          e || i !== vt || r !== n || o.hide();
                        },
                        !0
                      );
                  }),
                  { self: !0 }
                ),
              this.escClose &&
                Kt(
                  this.$el,
                  "hide",
                  Xt(document, "keydown", function (t) {
                    27 === t.keyCode &&
                      K(rr) === o &&
                      (t.preventDefault(), o.hide());
                  }),
                  { self: !0 }
                );
          },
        },
        {
          name: "hidden",
          self: !0,
          handler: function () {
            var e = this;
            rr.splice(rr.indexOf(this), 1),
              rr.length || Re(document.body, "overflowY", ""),
              Re(this.$el, "zIndex", ""),
              rr.some(function (t) {
                return t.clsPage === e.clsPage;
              }) || Be(document.documentElement, this.clsPage);
          },
        },
      ],
      methods: {
        toggle: function () {
          return this.isToggled() ? this.hide() : this.show();
        },
        show: function () {
          var e = this;
          return this.container && this.$el.parentNode !== this.container
            ? (be(this.container, this.$el),
              new ae(function (t) {
                return requestAnimationFrame(function () {
                  return e.show().then(t);
                });
              }))
            : this.toggleElement(this.$el, !0, sr(this));
        },
        hide: function () {
          return this.toggleElement(this.$el, !1, sr(this));
        },
      },
    };
  function sr(t) {
    var s = t.transitionElement,
      a = t._toggle;
    return function (r, o) {
      return new ae(function (i, n) {
        return Kt(r, "show hide", function () {
          r._reject && r._reject(), (r._reject = n), a(r, o);
          var t = Kt(
              s,
              "transitionstart",
              function () {
                Kt(s, "transitionend transitioncancel", i, { self: !0 }),
                  clearTimeout(e);
              },
              { self: !0 }
            ),
            e = setTimeout(function () {
              t(), i();
            }, U(Re(s, "transitionDuration")));
        });
      });
    };
  }
  var ar = {
    install: function (t) {
      var a = t.modal;
      function e(t, e, i, n) {
        e = G({ bgClose: !1, escClose: !0, labels: a.labels }, e);
        var r = a.dialog(t(e), e),
          o = new se(),
          s = !1;
        return (
          Xt(r.$el, "submit", "form", function (t) {
            t.preventDefault(), o.resolve(n && n(r)), (s = !0), r.hide();
          }),
          Xt(r.$el, "hide", function () {
            return !s && i(o);
          }),
          (o.promise.dialog = r),
          o.promise
        );
      }
      (a.dialog = function (t, e) {
        var i = a(
          '<div class="uk-modal"> <div class="uk-modal-dialog">' +
            t +
            "</div> </div>",
          e
        );
        return (
          i.show(),
          Xt(
            i.$el,
            "hidden",
            function () {
              return ae.resolve().then(function () {
                return i.$destroy(!0);
              });
            },
            { self: !0 }
          ),
          i
        );
      }),
        (a.alert = function (i, t) {
          return e(
            function (t) {
              var e = t.labels;
              return (
                '<div class="uk-modal-body">' +
                (D(i) ? i : we(i)) +
                '</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-primary uk-modal-close" autofocus>' +
                e.ok +
                "</button> </div>"
              );
            },
            t,
            function (t) {
              return t.resolve();
            }
          );
        }),
        (a.confirm = function (i, t) {
          return e(
            function (t) {
              var e = t.labels;
              return (
                '<form> <div class="uk-modal-body">' +
                (D(i) ? i : we(i)) +
                '</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">' +
                e.cancel +
                '</button> <button class="uk-button uk-button-primary" autofocus>' +
                e.ok +
                "</button> </div> </form>"
              );
            },
            t,
            function (t) {
              return t.reject();
            }
          );
        }),
        (a.prompt = function (i, n, t) {
          return e(
            function (t) {
              var e = t.labels;
              return (
                '<form class="uk-form-stacked"> <div class="uk-modal-body"> <label>' +
                (D(i) ? i : we(i)) +
                '</label> <input class="uk-input" value="' +
                (n || "") +
                '" autofocus> </div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">' +
                e.cancel +
                '</button> <button class="uk-button uk-button-primary">' +
                e.ok +
                "</button> </div> </form>"
              );
            },
            t,
            function (t) {
              return t.resolve(null);
            },
            function (t) {
              return Me("input", t.$el).value;
            }
          );
        }),
        (a.labels = { ok: "Ok", cancel: "Cancel" });
    },
    mixins: [or],
    data: {
      clsPage: "uk-modal-page",
      selPanel: ".uk-modal-dialog",
      selClose:
        ".uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full",
    },
    events: [
      {
        name: "show",
        self: !0,
        handler: function () {
          He(this.panel, "uk-margin-auto-vertical")
            ? De(this.$el, "uk-flex")
            : Re(this.$el, "display", "block"),
            ci(this.$el);
        },
      },
      {
        name: "hidden",
        self: !0,
        handler: function () {
          Re(this.$el, "display", ""), Be(this.$el, "uk-flex");
        },
      },
    ],
  };
  var hr = {
      extends: un,
      data: { targets: "> .uk-parent", toggle: "> a", content: "> ul" },
    },
    ur = {
      mixins: [sn, In],
      props: {
        dropdown: String,
        mode: "list",
        align: String,
        offset: Number,
        boundary: Boolean,
        boundaryAlign: Boolean,
        clsDrop: String,
        delayShow: Number,
        delayHide: Number,
        dropbar: Boolean,
        dropbarMode: String,
        dropbarAnchor: Boolean,
        duration: Number,
      },
      data: {
        dropdown: ".uk-navbar-nav > li",
        align: lt ? "right" : "left",
        clsDrop: "uk-navbar-dropdown",
        mode: void 0,
        offset: void 0,
        delayShow: void 0,
        delayHide: void 0,
        boundaryAlign: void 0,
        flip: "x",
        boundary: !0,
        dropbar: !1,
        dropbarMode: "slide",
        dropbarAnchor: !1,
        duration: 200,
        forceHeight: !0,
        selMinHeight:
          ".uk-navbar-nav > li > a, .uk-navbar-item, .uk-navbar-toggle",
      },
      computed: {
        boundary: function (t, e) {
          var i = t.boundary,
            n = t.boundaryAlign;
          return !0 === i || n ? e : i;
        },
        dropbarAnchor: function (t, e) {
          return yt(t.dropbarAnchor, e);
        },
        pos: function (t) {
          return "bottom-" + t.align;
        },
        dropbar: {
          get: function (t) {
            var e = t.dropbar;
            return e
              ? (e =
                  this._dropbar ||
                  yt(e, this.$el) ||
                  Me("+ .uk-navbar-dropbar", this.$el)) ||
                  (this._dropbar = Me("<div></div>"))
              : null;
          },
          watch: function (t) {
            De(t, "uk-navbar-dropbar");
          },
          immediate: !0,
        },
        dropdowns: {
          get: function (t, e) {
            return Ne(t.dropdown + " ." + t.clsDrop, e);
          },
          watch: function (t) {
            var e = this;
            this.$create(
              "drop",
              t.filter(function (t) {
                return !e.getDropdown(t);
              }),
              G({}, this.$props, {
                boundary: this.boundary,
                pos: this.pos,
                offset: this.dropbar || this.offset,
              })
            );
          },
          immediate: !0,
        },
      },
      disconnected: function () {
        this.dropbar && $e(this.dropbar), delete this._dropbar;
      },
      events: [
        {
          name: "mouseover",
          delegate: function () {
            return this.dropdown;
          },
          handler: function (t) {
            var e = t.current,
              i = this.getActive();
            i &&
              i.toggle &&
              !qt(i.toggle.$el, e) &&
              !i.tracker.movesTo(i.$el) &&
              i.hide(!1);
          },
        },
        {
          name: "mouseleave",
          el: function () {
            return this.dropbar;
          },
          handler: function () {
            var t = this.getActive();
            t &&
              !this.dropdowns.some(function (t) {
                return zt(t, ":hover");
              }) &&
              t.hide();
          },
        },
        {
          name: "beforeshow",
          capture: !0,
          filter: function () {
            return this.dropbar;
          },
          handler: function () {
            this.dropbar.parentNode ||
              ye(this.dropbarAnchor || this.$el, this.dropbar);
          },
        },
        {
          name: "show",
          filter: function () {
            return this.dropbar;
          },
          handler: function (t, e) {
            var i = e.$el,
              n = e.dir;
            Le(
              this.dropbar,
              "uk-navbar-dropbar-slide",
              "slide" === this.dropbarMode ||
                Ut(this.$el).some(function (t) {
                  return "static" !== Re(t, "position");
                })
            ),
              this.clsDrop && De(i, this.clsDrop + "-dropbar"),
              "bottom" === n &&
                this.transitionTo(
                  i.offsetHeight +
                    j(Re(i, "marginTop")) +
                    j(Re(i, "marginBottom")),
                  i
                );
          },
        },
        {
          name: "beforehide",
          filter: function () {
            return this.dropbar;
          },
          handler: function (t, e) {
            var i = e.$el,
              n = this.getActive();
            zt(this.dropbar, ":hover") &&
              n &&
              n.$el === i &&
              t.preventDefault();
          },
        },
        {
          name: "hide",
          filter: function () {
            return this.dropbar;
          },
          handler: function (t, e) {
            var i = e.$el,
              n = this.getActive();
            (!n || (n && n.$el === i)) && this.transitionTo(0);
          },
        },
      ],
      methods: {
        getActive: function () {
          var t = this.dropdowns.map(this.getDropdown).filter(function (t) {
            return t && t.isActive();
          })[0];
          return t && b(t.mode, "hover") && qt(t.toggle.$el, this.$el) && t;
        },
        transitionTo: function (t, e) {
          var i = this,
            n = this.dropbar,
            r = jt(n) ? ci(n) : 0;
          return (
            Re(
              (e = r < t && e),
              "clip",
              "rect(0," + e.offsetWidth + "px," + r + "px,0)"
            ),
            ci(n, r),
            Qe.cancel([e, n]),
            ae
              .all([
                Qe.start(n, { height: t }, this.duration),
                Qe.start(
                  e,
                  { clip: "rect(0," + e.offsetWidth + "px," + t + "px,0)" },
                  this.duration
                ),
              ])
              .catch(et)
              .then(function () {
                Re(e, { clip: "" }), i.$update(n);
              })
          );
        },
        getDropdown: function (t) {
          return (
            this.$getComponent(t, "drop") || this.$getComponent(t, "dropdown")
          );
        },
      },
    },
    cr = {
      mixins: [or],
      args: "mode",
      props: { mode: String, flip: Boolean, overlay: Boolean },
      data: {
        mode: "slide",
        flip: !1,
        overlay: !1,
        clsPage: "uk-offcanvas-page",
        clsContainer: "uk-offcanvas-container",
        selPanel: ".uk-offcanvas-bar",
        clsFlip: "uk-offcanvas-flip",
        clsContainerAnimation: "uk-offcanvas-container-animation",
        clsSidebarAnimation: "uk-offcanvas-bar-animation",
        clsMode: "uk-offcanvas",
        clsOverlay: "uk-offcanvas-overlay",
        selClose: ".uk-offcanvas-close",
        container: !1,
      },
      computed: {
        clsFlip: function (t) {
          var e = t.flip,
            i = t.clsFlip;
          return e ? i : "";
        },
        clsOverlay: function (t) {
          var e = t.overlay,
            i = t.clsOverlay;
          return e ? i : "";
        },
        clsMode: function (t) {
          var e = t.mode;
          return t.clsMode + "-" + e;
        },
        clsSidebarAnimation: function (t) {
          var e = t.mode,
            i = t.clsSidebarAnimation;
          return "none" === e || "reveal" === e ? "" : i;
        },
        clsContainerAnimation: function (t) {
          var e = t.mode,
            i = t.clsContainerAnimation;
          return "push" !== e && "reveal" !== e ? "" : i;
        },
        transitionElement: function (t) {
          return "reveal" === t.mode ? this.panel.parentNode : this.panel;
        },
      },
      events: [
        {
          name: "click",
          delegate: function () {
            return 'a[href^="#"]';
          },
          handler: function (t) {
            var e = t.current.hash;
            !t.defaultPrevented && e && Me(e, document.body) && this.hide();
          },
        },
        {
          name: "touchstart",
          passive: !0,
          el: function () {
            return this.panel;
          },
          handler: function (t) {
            var e = t.targetTouches;
            1 === e.length && (this.clientY = e[0].clientY);
          },
        },
        {
          name: "touchmove",
          self: !0,
          passive: !1,
          filter: function () {
            return this.overlay;
          },
          handler: function (t) {
            t.cancelable && t.preventDefault();
          },
        },
        {
          name: "touchmove",
          passive: !1,
          el: function () {
            return this.panel;
          },
          handler: function (t) {
            var e, i, n, r, o;
            1 === t.targetTouches.length &&
              ((e = event.targetTouches[0].clientY - this.clientY),
              (n = (i = this.panel).scrollTop),
              ((r = i.scrollHeight) <= (o = i.clientHeight) ||
                (0 === n && 0 < e) ||
                (r - n <= o && e < 0)) &&
                t.cancelable &&
                t.preventDefault());
          },
        },
        {
          name: "show",
          self: !0,
          handler: function () {
            "reveal" !== this.mode ||
              He(this.panel.parentNode, this.clsMode) ||
              (Ie(this.panel, "<div>"),
              De(this.panel.parentNode, this.clsMode)),
              Re(
                document.documentElement,
                "overflowY",
                this.overlay ? "hidden" : ""
              ),
              De(document.body, this.clsContainer, this.clsFlip),
              Re(document.body, "touch-action", "pan-y pinch-zoom"),
              Re(this.$el, "display", "block"),
              De(this.$el, this.clsOverlay),
              De(
                this.panel,
                this.clsSidebarAnimation,
                "reveal" !== this.mode ? this.clsMode : ""
              ),
              ci(document.body),
              De(document.body, this.clsContainerAnimation),
              this.clsContainerAnimation &&
                (lr().content += ",user-scalable=0");
          },
        },
        {
          name: "hide",
          self: !0,
          handler: function () {
            Be(document.body, this.clsContainerAnimation),
              Re(document.body, "touch-action", "");
          },
        },
        {
          name: "hidden",
          self: !0,
          handler: function () {
            var t;
            this.clsContainerAnimation &&
              ((t = lr()).content = t.content.replace(/,user-scalable=0$/, "")),
              "reveal" === this.mode && Te(this.panel),
              Be(this.panel, this.clsSidebarAnimation, this.clsMode),
              Be(this.$el, this.clsOverlay),
              Re(this.$el, "display", ""),
              Be(document.body, this.clsContainer, this.clsFlip),
              Re(document.documentElement, "overflowY", "");
          },
        },
        {
          name: "swipeLeft swipeRight",
          handler: function (t) {
            this.isToggled() && u(t.type, "Left") ^ this.flip && this.hide();
          },
        },
      ],
    };
  function lr() {
    return (
      Me('meta[name="viewport"]', document.head) ||
      be(document.head, '<meta name="viewport">')
    );
  }
  var dr = {
      mixins: [sn],
      props: { selContainer: String, selContent: String },
      data: { selContainer: ".uk-modal", selContent: ".uk-modal-dialog" },
      computed: {
        container: function (t, e) {
          return Bt(e, t.selContainer);
        },
        content: function (t, e) {
          return Bt(e, t.selContent);
        },
      },
      connected: function () {
        Re(this.$el, "minHeight", 150);
      },
      update: {
        read: function () {
          return (
            !(!this.content || !this.container) && {
              current: j(Re(this.$el, "maxHeight")),
              max: Math.max(
                150,
                ci(this.container) - (si(this.content).height - ci(this.$el))
              ),
            }
          );
        },
        write: function (t) {
          var e = t.current,
            i = t.max;
          Re(this.$el, "maxHeight", i),
            Math.round(e) !== Math.round(i) && Jt(this.$el, "resize");
        },
        events: ["resize"],
      },
    },
    fr = {
      props: ["width", "height"],
      connected: function () {
        De(this.$el, "uk-responsive-width");
      },
      update: {
        read: function () {
          return (
            !!(jt(this.$el) && this.width && this.height) && {
              width: li(this.$el.parentNode),
              height: this.height,
            }
          );
        },
        write: function (t) {
          ci(
            this.$el,
            rt.contain({ height: this.height, width: this.width }, t).height
          );
        },
        events: ["resize"],
      },
    },
    pr = {
      props: { offset: Number },
      data: { offset: 0 },
      methods: {
        scrollTo: function (t) {
          var e = this;
          (t = (t && Me(t)) || document.body),
            Jt(this.$el, "beforescroll", [this, t]) &&
              Oi(t, { offset: this.offset }).then(function () {
                return Jt(e.$el, "scrolled", [e, t]);
              });
        },
      },
      events: {
        click: function (t) {
          t.defaultPrevented ||
            (t.preventDefault(),
            this.scrollTo(Ht(decodeURIComponent(this.$el.hash)).substr(1)));
        },
      },
    },
    mr = {
      args: "cls",
      props: {
        cls: String,
        target: String,
        hidden: Boolean,
        offsetTop: Number,
        offsetLeft: Number,
        repeat: Boolean,
        delay: Number,
      },
      data: function () {
        return {
          cls: !1,
          target: !1,
          hidden: !0,
          offsetTop: 0,
          offsetLeft: 0,
          repeat: !1,
          delay: 0,
          inViewClass: "uk-scrollspy-inview",
        };
      },
      computed: {
        elements: {
          get: function (t, e) {
            var i = t.target;
            return i ? Ne(i, e) : [e];
          },
          watch: function (t) {
            this.hidden &&
              Re(
                Rt(t, ":not(." + this.inViewClass + ")"),
                "visibility",
                "hidden"
              );
          },
          immediate: !0,
        },
      },
      update: [
        {
          read: function (t) {
            var i = this;
            t.update &&
              this.elements.forEach(function (t) {
                var e = t._ukScrollspyState;
                ((e = e || {
                  cls: ht(t, "uk-scrollspy-class") || i.cls,
                }).show = Bi(t, i.offsetTop, i.offsetLeft)),
                  (t._ukScrollspyState = e);
              });
          },
          write: function (n) {
            var r = this;
            if (!n.update) return this.$emit(), (n.update = !0);
            this.elements.forEach(function (e) {
              function t(t) {
                Re(e, "visibility", !t && r.hidden ? "hidden" : ""),
                  Le(e, r.inViewClass, t),
                  Le(e, i.cls),
                  Jt(e, t ? "inview" : "outview"),
                  (i.inview = t),
                  r.$update(e);
              }
              var i = e._ukScrollspyState;
              !i.show || i.inview || i.queued
                ? !i.show && i.inview && !i.queued && r.repeat && t(!1)
                : ((i.queued = !0),
                  (n.promise = (n.promise || ae.resolve())
                    .then(function () {
                      return new ae(function (t) {
                        return setTimeout(t, r.delay);
                      });
                    })
                    .then(function () {
                      t(!0),
                        setTimeout(function () {
                          (i.queued = !1), r.$emit();
                        }, 300);
                    })));
            });
          },
          events: ["scroll", "resize"],
        },
      ],
    },
    gr = {
      props: {
        cls: String,
        closest: String,
        scroll: Boolean,
        overflow: Boolean,
        offset: Number,
      },
      data: {
        cls: "uk-active",
        closest: !1,
        scroll: !1,
        overflow: !0,
        offset: 0,
      },
      computed: {
        links: {
          get: function (t, e) {
            return Ne('a[href^="#"]', e).filter(function (t) {
              return t.hash;
            });
          },
          watch: function (t) {
            this.scroll &&
              this.$create("scroll", t, { offset: this.offset || 0 });
          },
          immediate: !0,
        },
        targets: function () {
          return Ne(
            this.links
              .map(function (t) {
                return Ht(t.hash).substr(1);
              })
              .join(",")
          );
        },
        elements: function (t) {
          var e = t.closest;
          return Bt(this.links, e || "*");
        },
      },
      update: [
        {
          read: function () {
            var i = this,
              t = this.targets.length;
            if (!t || !jt(this.$el)) return !1;
            var e = K(Li(this.targets[0])),
              n = e.scrollTop,
              r = e.scrollHeight,
              o = Fi(e),
              s = r - si(o).height,
              a = !1;
            return (
              n === s
                ? (a = t - 1)
                : (this.targets.every(function (t, e) {
                    if (hi(t, o).top - i.offset <= 0) return (a = e), !0;
                  }),
                  !1 === a && this.overflow && (a = 0)),
              { active: a }
            );
          },
          write: function (t) {
            var e = t.active;
            this.links.forEach(function (t) {
              return t.blur();
            }),
              Be(this.elements, this.cls),
              !1 !== e &&
                Jt(this.$el, "active", [e, De(this.elements[e], this.cls)]);
          },
          events: ["scroll", "resize"],
        },
      ],
    },
    vr = {
      mixins: [sn, er],
      props: {
        top: null,
        bottom: Boolean,
        offset: String,
        animation: String,
        clsActive: String,
        clsInactive: String,
        clsFixed: String,
        clsBelow: String,
        selTarget: String,
        widthElement: Boolean,
        showOnUp: Boolean,
        targetOffset: Number,
      },
      data: {
        top: 0,
        bottom: !1,
        offset: 0,
        animation: "",
        clsActive: "uk-active",
        clsInactive: "",
        clsFixed: "uk-sticky-fixed",
        clsBelow: "uk-sticky-below",
        selTarget: "",
        widthElement: !1,
        showOnUp: !1,
        targetOffset: !1,
      },
      computed: {
        offset: function (t) {
          return wi(t.offset);
        },
        selTarget: function (t, e) {
          var i = t.selTarget;
          return (i && Me(i, e)) || e;
        },
        widthElement: function (t, e) {
          return yt(t.widthElement, e) || this.placeholder;
        },
        isActive: {
          get: function () {
            return He(this.selTarget, this.clsActive);
          },
          set: function (t) {
            t && !this.isActive
              ? (Oe(this.selTarget, this.clsInactive, this.clsActive),
                Jt(this.$el, "active"))
              : t ||
                He(this.selTarget, this.clsInactive) ||
                (Oe(this.selTarget, this.clsActive, this.clsInactive),
                Jt(this.$el, "inactive"));
          },
        },
      },
      connected: function () {
        (this.placeholder =
          Me("+ .uk-sticky-placeholder", this.$el) ||
          Me('<div class="uk-sticky-placeholder"></div>')),
          (this.isFixed = !1),
          (this.isActive = !1);
      },
      disconnected: function () {
        this.isFixed && (this.hide(), Be(this.selTarget, this.clsInactive)),
          $e(this.placeholder),
          (this.placeholder = null),
          (this.widthElement = null);
      },
      events: [
        {
          name: "load hashchange popstate",
          el: ut && window,
          handler: function () {
            var n,
              r = this;
            !1 !== this.targetOffset &&
              location.hash &&
              0 < window.pageYOffset &&
              (n = Me(location.hash)) &&
              xi.read(function () {
                var t = si(n).top,
                  e = si(r.$el).top,
                  i = r.$el.offsetHeight;
                r.isFixed &&
                  t <= e + i &&
                  e <= t + n.offsetHeight &&
                  Pi(
                    window,
                    t - i - (P(r.targetOffset) ? r.targetOffset : 0) - r.offset
                  );
              });
          },
        },
      ],
      update: [
        {
          read: function (t, e) {
            var i = t.height;
            this.isActive &&
              "update" !== e &&
              (this.hide(), (i = this.$el.offsetHeight), this.show()),
              (i = this.isActive ? i : this.$el.offsetHeight),
              (this.topOffset = si(
                this.isFixed ? this.placeholder : this.$el
              ).top),
              (this.bottomOffset = this.topOffset + i);
            var n = wr("bottom", this);
            return (
              (this.top =
                Math.max(j(wr("top", this)), this.topOffset) - this.offset),
              (this.bottom = n && n - this.$el.offsetHeight),
              (this.inactive = !this.matchMedia),
              {
                lastScroll: !1,
                height: i,
                margins: Re(this.$el, [
                  "marginTop",
                  "marginBottom",
                  "marginLeft",
                  "marginRight",
                ]),
              }
            );
          },
          write: function (t) {
            var e = t.height,
              i = t.margins,
              n = this.placeholder;
            Re(n, G({ height: e }, i)),
              qt(n, document) || (ye(this.$el, n), ot(n, "hidden", "")),
              (this.isActive = !!this.isActive);
          },
          events: ["resize"],
        },
        {
          read: function (t) {
            var e = t.scroll;
            return (
              void 0 === e && (e = 0),
              (this.width = si(
                jt(this.widthElement) ? this.widthElement : this.$el
              ).width),
              (this.scroll = window.pageYOffset),
              {
                dir: e <= this.scroll ? "down" : "up",
                scroll: this.scroll,
                visible: jt(this.$el),
                top: ui(this.placeholder)[0],
              }
            );
          },
          write: function (t, e) {
            var i = this,
              n = t.initTimestamp;
            void 0 === n && (n = 0);
            var r = t.dir,
              o = t.lastDir,
              s = t.lastScroll,
              a = t.scroll,
              h = t.top,
              u = t.visible,
              c = performance.now();
            if (
              !(
                (t.lastScroll = a) < 0 ||
                a === s ||
                !u ||
                this.disabled ||
                (this.showOnUp && "scroll" !== e) ||
                ((300 < c - n || r !== o) &&
                  ((t.initScroll = a), (t.initTimestamp = c)),
                (t.lastDir = r),
                this.showOnUp &&
                  !this.isFixed &&
                  Math.abs(t.initScroll - a) <= 30 &&
                  Math.abs(s - a) <= 10)
              )
            )
              if (
                this.inactive ||
                a < this.top ||
                (this.showOnUp &&
                  (a <= this.top ||
                    "down" === r ||
                    ("up" === r && !this.isFixed && a <= this.bottomOffset)))
              ) {
                if (!this.isFixed)
                  return void (
                    ni.inProgress(this.$el) &&
                    a < h &&
                    (ni.cancel(this.$el), this.hide())
                  );
                (this.isFixed = !1),
                  this.animation && a > this.topOffset
                    ? (ni.cancel(this.$el),
                      ni.out(this.$el, this.animation).then(function () {
                        return i.hide();
                      }, et))
                    : this.hide();
              } else
                this.isFixed
                  ? this.update()
                  : this.animation
                  ? (ni.cancel(this.$el),
                    this.show(),
                    ni.in(this.$el, this.animation).catch(et))
                  : this.show();
          },
          events: ["resize", "scroll"],
        },
      ],
      methods: {
        show: function () {
          (this.isFixed = !0),
            this.update(),
            ot(this.placeholder, "hidden", null);
        },
        hide: function () {
          (this.isActive = !1),
            Be(this.$el, this.clsFixed, this.clsBelow),
            Re(this.$el, { position: "", top: "", width: "" }),
            ot(this.placeholder, "hidden", "");
        },
        update: function () {
          var t = 0 !== this.top || this.scroll > this.top,
            e = Math.max(0, this.offset);
          P(this.bottom) &&
            this.scroll > this.bottom - this.offset &&
            (e = this.bottom - this.scroll),
            Re(this.$el, {
              position: "fixed",
              top: e + "px",
              width: this.width,
            }),
            (this.isActive = t),
            Le(this.$el, this.clsBelow, this.scroll > this.bottomOffset),
            De(this.$el, this.clsFixed);
        },
      },
    };
  function wr(t, e) {
    var i = e.$props,
      n = e.$el,
      r = e[t + "Offset"],
      o = i[t];
    if (o)
      return D(o) && o.match(/^-?\d/)
        ? r + wi(o)
        : si(!0 === o ? n.parentNode : yt(o, n)).bottom;
  }
  var br,
    xr,
    yr,
    kr = {
      mixins: [an],
      args: "connect",
      props: {
        connect: String,
        toggle: String,
        active: Number,
        swiping: Boolean,
      },
      data: {
        connect: "~.uk-switcher",
        toggle: "> * > :first-child",
        active: 0,
        swiping: !0,
        cls: "uk-active",
        clsContainer: "uk-switcher",
        attrItem: "uk-switcher-item",
      },
      computed: {
        connects: {
          get: function (t, e) {
            return kt(t.connect, e);
          },
          watch: function (t) {
            var e = this;
            t.forEach(function (t) {
              return e.updateAria(t.children);
            }),
              this.swiping && Re(t, "touch-action", "pan-y pinch-zoom");
          },
          immediate: !0,
        },
        toggles: {
          get: function (t, e) {
            return Ne(t.toggle, e).filter(function (t) {
              return !zt(t, ".uk-disabled *, .uk-disabled, [disabled]");
            });
          },
          watch: function (t) {
            var e = this.index();
            this.show((~e && e) || t[this.active] || t[0]);
          },
          immediate: !0,
        },
        children: function () {
          var t = this;
          return Yt(this.$el).filter(function (e) {
            return t.toggles.some(function (t) {
              return qt(t, e);
            });
          });
        },
      },
      events: [
        {
          name: "click",
          delegate: function () {
            return this.toggle;
          },
          handler: function (t) {
            b(this.toggles, t.current) &&
              (t.preventDefault(), this.show(t.current));
          },
        },
        {
          name: "click",
          el: function () {
            return this.connects;
          },
          delegate: function () {
            return "[" + this.attrItem + "],[data-" + this.attrItem + "]";
          },
          handler: function (t) {
            t.preventDefault(), this.show(ht(t.current, this.attrItem));
          },
        },
        {
          name: "swipeRight swipeLeft",
          filter: function () {
            return this.swiping;
          },
          el: function () {
            return this.connects;
          },
          handler: function (t) {
            var e = t.type;
            this.show(u(e, "Left") ? "next" : "previous");
          },
        },
      ],
      methods: {
        index: function () {
          var e = this;
          return y(this.children, function (t) {
            return He(t, e.cls);
          });
        },
        show: function (t) {
          var i = this,
            n = this.index(),
            r = ge(t, this.toggles, n);
          this.children.forEach(function (t, e) {
            Le(t, i.cls, r === e), ot(i.toggles[e], "aria-expanded", r === e);
          }),
            this.connects.forEach(function (t) {
              var e = t.children;
              return i
                .toggleElement(
                  V(e).filter(function (t, e) {
                    return e !== r && i.isToggled(t);
                  }),
                  !1,
                  0 <= n
                )
                .then(function () {
                  return i.toggleElement(e[r], !0, 0 <= n);
                });
            });
        },
      },
    },
    $r = {
      mixins: [sn],
      extends: kr,
      props: { media: Boolean },
      data: { media: 960, attrItem: "uk-tab-item" },
      connected: function () {
        var t = He(this.$el, "uk-tab-left")
          ? "uk-tab-left"
          : !!He(this.$el, "uk-tab-right") && "uk-tab-right";
        t &&
          this.$create("toggle", this.$el, {
            cls: t,
            mode: "media",
            media: this.media,
          });
      },
    },
    Ir = {
      mixins: [er, an],
      args: "target",
      props: { href: String, target: null, mode: "list", queued: Boolean },
      data: { href: !1, target: !1, mode: "click", queued: !0 },
      computed: {
        target: {
          get: function (t, e) {
            var i = t.href,
              n = t.target;
            return ((n = kt(n || i, e)).length && n) || [e];
          },
          watch: function () {
            Jt(this.target, "updatearia", [this]);
          },
          immediate: !0,
        },
      },
      events: [
        {
          name: wt + " " + bt,
          filter: function () {
            return b(this.mode, "hover");
          },
          handler: function (t) {
            re(t) || this.toggle("toggle" + (t.type === wt ? "show" : "hide"));
          },
        },
        {
          name: "click",
          filter: function () {
            return b(this.mode, "click") || (pt && b(this.mode, "hover"));
          },
          handler: function (t) {
            var e;
            (Bt(t.target, 'a[href="#"], a[href=""]') ||
              ((e = Bt(t.target, "a[href]")) &&
                ((this.cls && !He(this.target, this.cls.split(" ")[0])) ||
                  !jt(this.target) ||
                  (e.hash && zt(this.target, e.hash))))) &&
              t.preventDefault(),
              this.toggle();
          },
        },
      ],
      update: {
        read: function () {
          return (
            !(!b(this.mode, "media") || !this.media) && {
              match: this.matchMedia,
            }
          );
        },
        write: function (t) {
          var e = t.match,
            i = this.isToggled(this.target);
          (e ? !i : i) && this.toggle();
        },
        events: ["resize"],
      },
      methods: {
        toggle: function (t) {
          var e,
            i = this;
          Jt(this.target, t || "toggle", [this]) &&
            (this.queued
              ? ((e = this.target.filter(this.isToggled)),
                this.toggleElement(e, !1).then(function () {
                  return i.toggleElement(
                    i.target.filter(function (t) {
                      return !b(e, t);
                    }),
                    !0
                  );
                }))
              : this.toggleElement(this.target));
        },
      },
    };
  J(
    Object.freeze({
      __proto__: null,
      Accordion: un,
      Alert: ln,
      Cover: fn,
      Drop: gn,
      Dropdown: gn,
      FormCustom: vn,
      Gif: wn,
      Grid: $n,
      HeightMatch: Sn,
      HeightViewport: _n,
      Icon: On,
      Img: Rn,
      Leader: ir,
      Margin: bn,
      Modal: ar,
      Nav: hr,
      Navbar: ur,
      Offcanvas: cr,
      OverflowAuto: dr,
      Responsive: fr,
      Scroll: pr,
      Scrollspy: mr,
      ScrollspyNav: gr,
      Sticky: vr,
      Svg: An,
      Switcher: kr,
      Tab: $r,
      Toggle: Ir,
      Video: dn,
      Close: jn,
      Spinner: Wn,
      SlidenavNext: Ln,
      SlidenavPrevious: Ln,
      SearchIcon: Fn,
      Marker: Hn,
      NavbarToggleIcon: Hn,
      OverlayIcon: Hn,
      PaginationNext: Hn,
      PaginationPrevious: Hn,
      Totop: Hn,
    }),
    function (t, e) {
      return qi.component(e, t);
    }
  ),
    qi.use(function (r) {
      ut &&
        pe(function () {
          var e;
          r.update(),
            Xt(window, "load resize", function () {
              return r.update(null, "resize");
            }),
            Xt(
              document,
              "loadedmetadata load",
              function (t) {
                var e = t.target;
                return r.update(e, "resize");
              },
              !0
            ),
            Xt(
              window,
              "scroll",
              function (t) {
                e ||
                  ((e = !0),
                  xi.write(function () {
                    return (e = !1);
                  }),
                  r.update(null, t.type));
              },
              { passive: !0, capture: !0 }
            );
          var i,
            n = 0;
          Xt(
            document,
            "animationstart",
            function (t) {
              var e = t.target;
              (Re(e, "animationName") || "").match(/^uk-.*(left|right)/) &&
                (n++,
                Re(document.body, "overflowX", "hidden"),
                setTimeout(function () {
                  --n || Re(document.body, "overflowX", "");
                }, U(Re(e, "animationDuration")) + 100));
            },
            !0
          ),
            Xt(
              document,
              mt,
              function (t) {
                var s, a;
                i && i(),
                  re(t) &&
                    ((s = oe(t)),
                    (a =
                      "tagName" in t.target ? t.target : t.target.parentNode),
                    (i = Kt(document, vt + " " + xt, function (t) {
                      var e = oe(t),
                        r = e.x,
                        o = e.y;
                      ((a && r && 100 < Math.abs(s.x - r)) ||
                        (o && 100 < Math.abs(s.y - o))) &&
                        setTimeout(function () {
                          var t, e, i, n;
                          Jt(a, "swipe"),
                            Jt(
                              a,
                              "swipe" +
                                ((t = s.x),
                                (e = s.y),
                                (i = r),
                                (n = o),
                                Math.abs(t - i) >= Math.abs(e - n)
                                  ? 0 < t - i
                                    ? "Left"
                                    : "Right"
                                  : 0 < e - n
                                  ? "Up"
                                  : "Down")
                            );
                        });
                    })));
              },
              { passive: !0 }
            );
        });
    }),
    (xr = (br = qi).connect),
    (yr = br.disconnect),
    ut &&
      window.MutationObserver &&
      xi.read(function () {
        document.body && Ae(document.body, xr);
        new MutationObserver(function (t) {
          var r = [];
          t.forEach(function (t) {
            return (
              (i = r),
              (n = (e = t).target),
              void (
                ("attributes" !== e.type
                  ? function (t) {
                      for (
                        var e = t.addedNodes, i = t.removedNodes, n = 0;
                        n < e.length;
                        n++
                      )
                        Ae(e[n], xr);
                      for (var r = 0; r < i.length; r++) Ae(i[r], yr);
                      return 1;
                    }
                  : function (t) {
                      var e = t.target,
                        i = t.attributeName;
                      if ("href" === i) return 1;
                      var n = Ri(i);
                      if (!(n && n in br)) return;
                      if (st(e, i)) return br[n](e), 1;
                      var r = br.getComponent(e, n);
                      if (r) return r.$destroy(), 1;
                    })(e) &&
                !i.some(function (t) {
                  return t.contains(n);
                }) &&
                i.push(n.contains ? n : n.parentNode)
              )
            );
            var e, i, n;
          }),
            r.forEach(function (t) {
              return br.update(t);
            });
        }).observe(document, {
          childList: !0,
          subtree: !0,
          characterData: !0,
          attributes: !0,
        }),
          (br._initialized = !0);
      });
  var Sr = {
    mixins: [sn],
    props: { date: String, clsWrapper: String },
    data: { date: "", clsWrapper: ".uk-countdown-%unit%" },
    computed: {
      date: function (t) {
        var e = t.date;
        return Date.parse(e);
      },
      days: function (t, e) {
        return Me(t.clsWrapper.replace("%unit%", "days"), e);
      },
      hours: function (t, e) {
        return Me(t.clsWrapper.replace("%unit%", "hours"), e);
      },
      minutes: function (t, e) {
        return Me(t.clsWrapper.replace("%unit%", "minutes"), e);
      },
      seconds: function (t, e) {
        return Me(t.clsWrapper.replace("%unit%", "seconds"), e);
      },
      units: function () {
        var e = this;
        return ["days", "hours", "minutes", "seconds"].filter(function (t) {
          return e[t];
        });
      },
    },
    connected: function () {
      this.start();
    },
    disconnected: function () {
      var e = this;
      this.stop(),
        this.units.forEach(function (t) {
          return ve(e[t]);
        });
    },
    events: [
      {
        name: "visibilitychange",
        el: ut && document,
        handler: function () {
          document.hidden ? this.stop() : this.start();
        },
      },
    ],
    update: {
      write: function () {
        var t,
          e,
          n = this,
          r =
            ((t = this.date),
            {
              total: (e = t - Date.now()),
              seconds: (e / 1e3) % 60,
              minutes: (e / 1e3 / 60) % 60,
              hours: (e / 1e3 / 60 / 60) % 24,
              days: e / 1e3 / 60 / 60 / 24,
            });
        r.total <= 0 &&
          (this.stop(), (r.days = r.hours = r.minutes = r.seconds = 0)),
          this.units.forEach(function (t) {
            var e = (e = String(Math.floor(r[t]))).length < 2 ? "0" + e : e,
              i = n[t];
            i.textContent !== e &&
              ((e = e.split("")).length !== i.children.length &&
                we(
                  i,
                  e
                    .map(function () {
                      return "<span></span>";
                    })
                    .join("")
                ),
              e.forEach(function (t, e) {
                return (i.children[e].textContent = t);
              }));
          });
      },
    },
    methods: {
      start: function () {
        this.stop(),
          this.date &&
            this.units.length &&
            (this.$update(), (this.timer = setInterval(this.$update, 1e3)));
      },
      stop: function () {
        this.timer && (clearInterval(this.timer), (this.timer = null));
      },
    },
  };
  var Tr,
    Er = "uk-animation-target",
    _r = {
      props: { animation: Number },
      data: { animation: 150 },
      computed: {
        target: function () {
          return this.$el;
        },
      },
      methods: {
        animate: function (t) {
          var n = this;
          !(function () {
            if (Tr) return;
            (Tr = be(document.head, "<style>").sheet).insertRule(
              "." +
                Er +
                " > * {\n            margin-top: 0 !important;\n            transform: none !important;\n        }",
              0
            );
          })();
          var r = Yt(this.target),
            o = r.map(function (t) {
              return Cr(t, !0);
            }),
            e = ci(this.target),
            i = window.pageYOffset;
          t(),
            Qe.cancel(this.target),
            r.forEach(Qe.cancel),
            Ar(this.target),
            this.$update(this.target, "resize"),
            xi.flush();
          var s = ci(this.target),
            a = (r = r.concat(
              Yt(this.target).filter(function (t) {
                return !b(r, t);
              })
            )).map(function (t, e) {
              return (
                !!(t.parentNode && e in o) &&
                (o[e]
                  ? jt(t)
                    ? Mr(t)
                    : { opacity: 0 }
                  : { opacity: jt(t) ? 1 : 0 })
              );
            }),
            o = a.map(function (t, e) {
              var i = r[e].parentNode === n.target && (o[e] || Cr(r[e]));
              return (
                i &&
                  (t
                    ? "opacity" in t ||
                      (i.opacity % 1 ? (t.opacity = 1) : delete i.opacity)
                    : delete i.opacity),
                i
              );
            });
          return (
            De(this.target, Er),
            r.forEach(function (t, e) {
              return o[e] && Re(t, o[e]);
            }),
            Re(this.target, { height: e, display: "block" }),
            Pi(window, i),
            ae
              .all(
                r
                  .map(function (t, e) {
                    return (
                      ["top", "left", "height", "width"].some(function (t) {
                        return o[e][t] !== a[e][t];
                      }) && Qe.start(t, a[e], n.animation, "ease")
                    );
                  })
                  .concat(
                    e !== s &&
                      Qe.start(
                        this.target,
                        { height: s },
                        this.animation,
                        "ease"
                      )
                  )
              )
              .then(function () {
                r.forEach(function (t, e) {
                  return Re(t, {
                    display: 0 === a[e].opacity ? "none" : "",
                    zIndex: "",
                  });
                }),
                  Ar(n.target),
                  n.$update(n.target, "resize"),
                  xi.flush();
              }, et)
          );
        },
      },
    };
  function Cr(t, e) {
    var i = Re(t, "zIndex");
    return (
      !!jt(t) &&
      G(
        {
          display: "",
          opacity: e ? Re(t, "opacity") : "0",
          pointerEvents: "none",
          position: "absolute",
          zIndex: "auto" === i ? me(t) : i,
        },
        Mr(t)
      )
    );
  }
  function Ar(t) {
    Re(t.children, {
      height: "",
      left: "",
      opacity: "",
      pointerEvents: "",
      position: "",
      top: "",
      width: "",
    }),
      Be(t, Er),
      Re(t, { height: "", display: "" });
  }
  function Mr(t) {
    var e = si(t),
      i = e.height,
      n = e.width,
      r = hi(t);
    return { top: r.top, left: r.left, height: i, width: n };
  }
  var Nr = {
    mixins: [_r],
    args: "target",
    props: { target: Boolean, selActive: Boolean },
    data: {
      target: null,
      selActive: !1,
      attrItem: "uk-filter-control",
      cls: "uk-active",
      animation: 250,
    },
    computed: {
      toggles: {
        get: function (t, e) {
          t.attrItem;
          return Ne("[" + this.attrItem + "],[data-" + this.attrItem + "]", e);
        },
        watch: function () {
          var e,
            i = this;
          this.updateState(),
            !1 !== this.selActive &&
              ((e = Ne(this.selActive, this.$el)),
              this.toggles.forEach(function (t) {
                return Le(t, i.cls, b(e, t));
              }));
        },
        immediate: !0,
      },
      target: function (t, e) {
        return Me(t.target, e);
      },
      children: {
        get: function () {
          return Yt(this.target);
        },
        watch: function (t, e) {
          var i, n;
          (n = e),
            ((i = t).length === n.length &&
              i.every(function (t) {
                return ~n.indexOf(t);
              })) ||
              this.updateState();
        },
      },
    },
    events: [
      {
        name: "click",
        delegate: function () {
          return "[" + this.attrItem + "],[data-" + this.attrItem + "]";
        },
        handler: function (t) {
          t.preventDefault(), this.apply(t.current);
        },
      },
    ],
    methods: {
      apply: function (t) {
        this.setState(Dr(t, this.attrItem, this.getState()));
      },
      getState: function () {
        var i = this;
        return this.toggles
          .filter(function (t) {
            return He(t, i.cls);
          })
          .reduce(
            function (t, e) {
              return Dr(e, i.attrItem, t);
            },
            { filter: { "": "" }, sort: [] }
          );
      },
      setState: function (u, t) {
        var c = this;
        void 0 === t && (t = !0),
          (u = G({ filter: { "": "" }, sort: [] }, u)),
          Jt(this.$el, "beforeFilter", [this, u]);
        var l = this.children;
        this.toggles.forEach(function (t) {
          return Le(
            t,
            c.cls,
            !!(function (t, e, i) {
              var n = i.filter;
              void 0 === n && (n = { "": "" });
              var r = i.sort,
                o = r[0],
                s = r[1],
                a = zr(t, e),
                h = a.filter;
              void 0 === h && (h = "");
              var u = a.group;
              void 0 === u && (u = "");
              var c = a.sort,
                l = a.order;
              void 0 === l && (l = "asc");
              return H(c)
                ? (u in n && h === n[u]) || (!h && u && !(u in n) && !n[""])
                : o === c && s === l;
            })(t, c.attrItem, u)
          );
        });
        function e() {
          var t,
            e,
            i =
              ((t = u.filter),
              (e = ""),
              J(t, function (t) {
                return (e += t || "");
              }),
              e);
          l.forEach(function (t) {
            return Re(t, "display", i && !zt(t, i) ? "none" : "");
          });
          var n,
            r,
            o,
            s = u.sort,
            a = s[0],
            h = s[1];
          a &&
            ((r = a),
            (o = h),
            Y(
              (n = G([], l).sort(function (t, e) {
                return (
                  ht(t, r).localeCompare(ht(e, r), void 0, { numeric: !0 }) *
                  ("asc" === o || -1)
                );
              })),
              l
            ) ||
              n.forEach(function (t) {
                return be(c.target, t);
              }));
        }
        t
          ? this.animate(e).then(function () {
              return Jt(c.$el, "afterFilter", [c]);
            })
          : (e(), Jt(this.$el, "afterFilter", [this]));
      },
      updateState: function () {
        var t = this;
        xi.write(function () {
          return t.setState(t.getState(), !1);
        });
      },
    },
  };
  function zr(t, e) {
    return Mi(ht(t, e), ["filter"]);
  }
  function Dr(t, e, i) {
    var n = zr(t, e),
      r = n.filter,
      o = n.group,
      s = n.sort,
      a = n.order;
    return (
      void 0 === a && (a = "asc"),
      (r || H(s)) &&
        (o
          ? r
            ? (delete i.filter[""], (i.filter[o] = r))
            : (delete i.filter[o],
              (O(i.filter) || "" in i.filter) && (i.filter = { "": r || "" }))
          : (i.filter = { "": r || "" })),
      H(s) || (i.sort = [s, a]),
      i
    );
  }
  var Br = {
    slide: {
      show: function (t) {
        return [{ transform: Or(-100 * t) }, { transform: Or() }];
      },
      percent: Pr,
      translate: function (t, e) {
        return [
          { transform: Or(-100 * e * t) },
          { transform: Or(100 * e * (1 - t)) },
        ];
      },
    },
  };
  function Pr(t) {
    return Math.abs(Re(t, "transform").split(",")[4] / t.offsetWidth) || 0;
  }
  function Or(t, e) {
    return (
      void 0 === t && (t = 0),
      void 0 === e && (e = "%"),
      (t += t ? e : ""),
      ct ? "translateX(" + t + ")" : "translate3d(" + t + ", 0, 0)"
    );
  }
  function Hr(t) {
    return "scale3d(" + t + ", " + t + ", 1)";
  }
  var Lr = G({}, Br, {
    fade: {
      show: function () {
        return [{ opacity: 0 }, { opacity: 1 }];
      },
      percent: function (t) {
        return 1 - Re(t, "opacity");
      },
      translate: function (t) {
        return [{ opacity: 1 - t }, { opacity: t }];
      },
    },
    scale: {
      show: function () {
        return [
          { opacity: 0, transform: Hr(0.8) },
          { opacity: 1, transform: Hr(1) },
        ];
      },
      percent: function (t) {
        return 1 - Re(t, "opacity");
      },
      translate: function (t) {
        return [
          { opacity: 1 - t, transform: Hr(1 - 0.2 * t) },
          { opacity: t, transform: Hr(0.8 + 0.2 * t) },
        ];
      },
    },
  });
  function Fr(t, e, i) {
    Jt(t, Zt(e, !1, !1, i));
  }
  var jr = {
    mixins: [
      {
        props: {
          autoplay: Boolean,
          autoplayInterval: Number,
          pauseOnHover: Boolean,
        },
        data: { autoplay: !1, autoplayInterval: 7e3, pauseOnHover: !0 },
        connected: function () {
          this.autoplay && this.startAutoplay();
        },
        disconnected: function () {
          this.stopAutoplay();
        },
        update: function () {
          ot(this.slides, "tabindex", "-1");
        },
        events: [
          {
            name: "visibilitychange",
            el: ut && document,
            filter: function () {
              return this.autoplay;
            },
            handler: function () {
              document.hidden ? this.stopAutoplay() : this.startAutoplay();
            },
          },
        ],
        methods: {
          startAutoplay: function () {
            var t = this;
            this.stopAutoplay(),
              (this.interval = setInterval(function () {
                return (
                  (!t.draggable || !Me(":focus", t.$el)) &&
                  (!t.pauseOnHover || !zt(t.$el, ":hover")) &&
                  !t.stack.length &&
                  t.show("next")
                );
              }, this.autoplayInterval));
          },
          stopAutoplay: function () {
            this.interval && clearInterval(this.interval);
          },
        },
      },
      {
        props: { draggable: Boolean },
        data: { draggable: !0, threshold: 10 },
        created: function () {
          var n = this;
          ["start", "move", "end"].forEach(function (t) {
            var i = n[t];
            n[t] = function (t) {
              var e = oe(t).x * (lt ? -1 : 1);
              (n.prevPos = e !== n.pos ? n.pos : n.prevPos), (n.pos = e), i(t);
            };
          });
        },
        events: [
          {
            name: mt,
            delegate: function () {
              return this.selSlides;
            },
            handler: function (t) {
              var e;
              !this.draggable ||
                (!re(t) &&
                  !(e = t.target).children.length &&
                  e.childNodes.length) ||
                Bt(t.target, Wt) ||
                0 < t.button ||
                this.length < 2 ||
                this.start(t);
            },
          },
          {
            name: "touchmove",
            passive: !1,
            handler: "move",
            filter: function () {
              return "touchmove" == gt;
            },
            delegate: function () {
              return this.selSlides;
            },
          },
          {
            name: "dragstart",
            handler: function (t) {
              t.preventDefault();
            },
          },
        ],
        methods: {
          start: function () {
            var t = this;
            (this.drag = this.pos),
              this._transitioner
                ? ((this.percent = this._transitioner.percent()),
                  (this.drag +=
                    this._transitioner.getDistance() * this.percent * this.dir),
                  this._transitioner.cancel(),
                  this._transitioner.translate(this.percent),
                  (this.dragging = !0),
                  (this.stack = []))
                : (this.prevIndex = this.index);
            var e =
              "touchmove" != gt
                ? Xt(document, gt, this.move, { passive: !1 })
                : et;
            (this.unbindMove = function () {
              e(), (t.unbindMove = null);
            }),
              Xt(window, "scroll", this.unbindMove),
              Xt(window.visualViewport, "resize", this.unbindMove),
              Xt(document, vt + " " + xt, this.end, !0),
              Re(this.list, "userSelect", "none");
          },
          move: function (t) {
            var e = this;
            if (this.unbindMove) {
              var i = this.pos - this.drag;
              if (
                !(
                  0 == i ||
                  this.prevPos === this.pos ||
                  (!this.dragging && Math.abs(i) < this.threshold)
                )
              ) {
                Re(this.list, "pointerEvents", "none"),
                  t.cancelable && t.preventDefault(),
                  (this.dragging = !0),
                  (this.dir = i < 0 ? 1 : -1);
                for (
                  var n = this.slides,
                    r = this.prevIndex,
                    o = Math.abs(i),
                    s = this.getIndex(r + this.dir, r),
                    a = this._getDistance(r, s) || n[r].offsetWidth;
                  s !== r && a < o;

                )
                  (this.drag -= a * this.dir),
                    (r = s),
                    (o -= a),
                    (s = this.getIndex(r + this.dir, r)),
                    (a = this._getDistance(r, s) || n[r].offsetWidth);
                this.percent = o / a;
                var h,
                  u = n[r],
                  c = n[s],
                  l = this.index !== s,
                  d = r === s;
                [this.index, this.prevIndex]
                  .filter(function (t) {
                    return !b([s, r], t);
                  })
                  .forEach(function (t) {
                    Jt(n[t], "itemhidden", [e]),
                      d && ((h = !0), (e.prevIndex = r));
                  }),
                  ((this.index === r && this.prevIndex !== r) || h) &&
                    Jt(n[this.index], "itemshown", [this]),
                  l &&
                    ((this.prevIndex = r),
                    (this.index = s),
                    d || Jt(u, "beforeitemhide", [this]),
                    Jt(c, "beforeitemshow", [this])),
                  (this._transitioner = this._translate(
                    Math.abs(this.percent),
                    u,
                    !d && c
                  )),
                  l &&
                    (d || Jt(u, "itemhide", [this]), Jt(c, "itemshow", [this]));
              }
            }
          },
          end: function () {
            var t;
            Gt(window, "scroll", this.unbindMove),
              Gt(window.visualViewport, "resize", this.unbindMove),
              this.unbindMove && this.unbindMove(),
              Gt(document, vt, this.end, !0),
              this.dragging &&
                ((this.dragging = null),
                this.index === this.prevIndex
                  ? ((this.percent = 1 - this.percent),
                    (this.dir *= -1),
                    this._show(!1, this.index, !0),
                    (this._transitioner = null))
                  : ((t =
                      (lt ? this.dir * (lt ? 1 : -1) : this.dir) < 0 ==
                      this.prevPos > this.pos),
                    (this.index = t ? this.index : this.prevIndex),
                    t && (this.percent = 1 - this.percent),
                    this.show(
                      (0 < this.dir && !t) || (this.dir < 0 && t)
                        ? "next"
                        : "previous",
                      !0
                    ))),
              Re(this.list, { userSelect: "", pointerEvents: "" }),
              (this.drag = this.percent = null);
          },
        },
      },
      {
        data: { selNav: !1 },
        computed: {
          nav: function (t, e) {
            return Me(t.selNav, e);
          },
          selNavItem: function (t) {
            var e = t.attrItem;
            return "[" + e + "],[data-" + e + "]";
          },
          navItems: function (t, e) {
            return Ne(this.selNavItem, e);
          },
        },
        update: {
          write: function () {
            var i = this;
            this.nav &&
              this.length !== this.nav.children.length &&
              we(
                this.nav,
                this.slides
                  .map(function (t, e) {
                    return (
                      "<li " + i.attrItem + '="' + e + '"><a href></a></li>'
                    );
                  })
                  .join("")
              ),
              Le(
                Ne(this.selNavItem, this.$el).concat(this.nav),
                "uk-hidden",
                !this.maxIndex
              ),
              this.updateNav();
          },
          events: ["resize"],
        },
        events: [
          {
            name: "click",
            delegate: function () {
              return this.selNavItem;
            },
            handler: function (t) {
              t.preventDefault(), this.show(ht(t.current, this.attrItem));
            },
          },
          { name: "itemshow", handler: "updateNav" },
        ],
        methods: {
          updateNav: function () {
            var i = this,
              n = this.getValidIndex();
            this.navItems.forEach(function (t) {
              var e = ht(t, i.attrItem);
              Le(t, i.clsActive, F(e) === n),
                Le(
                  t,
                  "uk-invisible",
                  i.finite &&
                    (("previous" === e && 0 === n) ||
                      ("next" === e && n >= i.maxIndex))
                );
            });
          },
        },
      },
    ],
    props: {
      clsActivated: Boolean,
      easing: String,
      index: Number,
      finite: Boolean,
      velocity: Number,
      selSlides: String,
    },
    data: function () {
      return {
        easing: "ease",
        finite: !1,
        velocity: 1,
        index: 0,
        prevIndex: -1,
        stack: [],
        percent: 0,
        clsActive: "uk-active",
        clsActivated: !1,
        Transitioner: !1,
        transitionOptions: {},
      };
    },
    connected: function () {
      (this.prevIndex = -1),
        (this.index = this.getValidIndex(this.index)),
        (this.stack = []);
    },
    disconnected: function () {
      Be(this.slides, this.clsActive);
    },
    computed: {
      duration: function (t, e) {
        var i = t.velocity;
        return Wr(e.offsetWidth / i);
      },
      list: function (t, e) {
        return Me(t.selList, e);
      },
      maxIndex: function () {
        return this.length - 1;
      },
      selSlides: function (t) {
        return t.selList + " " + (t.selSlides || "> *");
      },
      slides: {
        get: function () {
          return Ne(this.selSlides, this.$el);
        },
        watch: function () {
          this.$reset();
        },
      },
      length: function () {
        return this.slides.length;
      },
    },
    events: {
      itemshown: function () {
        this.$update(this.list);
      },
    },
    methods: {
      show: function (t, e) {
        var i = this;
        if ((void 0 === e && (e = !1), !this.dragging && this.length)) {
          var n = this.stack,
            r = e ? 0 : n.length,
            o = function () {
              n.splice(r, 1), n.length && i.show(n.shift(), !0);
            };
          if ((n[e ? "unshift" : "push"](t), !e && 1 < n.length))
            2 === n.length &&
              this._transitioner.forward(Math.min(this.duration, 200));
          else {
            var s,
              a,
              h = this.getIndex(this.index),
              u = He(this.slides, this.clsActive) && this.slides[h],
              c = this.getIndex(t, this.index),
              l = this.slides[c];
            if (u !== l) {
              if (
                ((this.dir =
                  ((a = h),
                  "next" !== (s = t) && ("previous" === s || s < a) ? -1 : 1)),
                (this.prevIndex = h),
                (this.index = c),
                (u && !Jt(u, "beforeitemhide", [this])) ||
                  !Jt(l, "beforeitemshow", [this, u]))
              )
                return (this.index = this.prevIndex), void o();
              var d = this._show(u, l, e).then(function () {
                return (
                  u && Jt(u, "itemhidden", [i]),
                  Jt(l, "itemshown", [i]),
                  new ae(function (t) {
                    xi.write(function () {
                      n.shift(),
                        n.length
                          ? i.show(n.shift(), !0)
                          : (i._transitioner = null),
                        t();
                    });
                  })
                );
              });
              return (
                u && Jt(u, "itemhide", [this]), Jt(l, "itemshow", [this]), d
              );
            }
            o();
          }
        }
      },
      getIndex: function (t, e) {
        return (
          void 0 === t && (t = this.index),
          void 0 === e && (e = this.index),
          tt(ge(t, this.slides, e, this.finite), 0, this.maxIndex)
        );
      },
      getValidIndex: function (t, e) {
        return (
          void 0 === t && (t = this.index),
          void 0 === e && (e = this.prevIndex),
          this.getIndex(t, e)
        );
      },
      _show: function (t, e, i) {
        if (
          ((this._transitioner = this._getTransitioner(
            t,
            e,
            this.dir,
            G(
              {
                easing: i
                  ? e.offsetWidth < 600
                    ? "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                    : "cubic-bezier(0.165, 0.84, 0.44, 1)"
                  : this.easing,
              },
              this.transitionOptions
            )
          )),
          !i && !t)
        )
          return this._translate(1), ae.resolve();
        var n = this.stack.length;
        return this._transitioner[1 < n ? "forward" : "show"](
          1 < n ? Math.min(this.duration, 75 + 75 / (n - 1)) : this.duration,
          this.percent
        );
      },
      _getDistance: function (t, e) {
        return this._getTransitioner(t, t !== e && e).getDistance();
      },
      _translate: function (t, e, i) {
        void 0 === e && (e = this.prevIndex), void 0 === i && (i = this.index);
        var n = this._getTransitioner(e !== i && e, i);
        return n.translate(t), n;
      },
      _getTransitioner: function (t, e, i, n) {
        return (
          void 0 === t && (t = this.prevIndex),
          void 0 === e && (e = this.index),
          void 0 === i && (i = this.dir || 1),
          void 0 === n && (n = this.transitionOptions),
          new this.Transitioner(
            B(t) ? this.slides[t] : t,
            B(e) ? this.slides[e] : e,
            i * (lt ? -1 : 1),
            n
          )
        );
      },
    },
  };
  function Wr(t) {
    return 0.5 * t + 300;
  }
  var Vr = {
      mixins: [jr],
      props: { animation: String },
      data: {
        animation: "slide",
        clsActivated: "uk-transition-active",
        Animations: Br,
        Transitioner: function (o, s, a, t) {
          var e = t.animation,
            h = t.easing,
            i = e.percent,
            n = e.translate,
            r = e.show;
          void 0 === r && (r = et);
          var u = r(a),
            c = new se();
          return {
            dir: a,
            show: function (t, e, i) {
              var n = this;
              void 0 === e && (e = 0);
              var r = i ? "linear" : h;
              return (
                (t -= Math.round(t * tt(e, -1, 1))),
                this.translate(e),
                Fr(s, "itemin", { percent: e, duration: t, timing: r, dir: a }),
                Fr(o, "itemout", {
                  percent: 1 - e,
                  duration: t,
                  timing: r,
                  dir: a,
                }),
                ae
                  .all([Qe.start(s, u[1], t, r), Qe.start(o, u[0], t, r)])
                  .then(function () {
                    n.reset(), c.resolve();
                  }, et),
                c.promise
              );
            },
            stop: function () {
              return Qe.stop([s, o]);
            },
            cancel: function () {
              Qe.cancel([s, o]);
            },
            reset: function () {
              for (var t in u[0]) Re([s, o], t, "");
            },
            forward: function (t, e) {
              return (
                void 0 === e && (e = this.percent()),
                Qe.cancel([s, o]),
                this.show(t, e, !0)
              );
            },
            translate: function (t) {
              this.reset();
              var e = n(t, a);
              Re(s, e[1]),
                Re(o, e[0]),
                Fr(s, "itemtranslatein", { percent: t, dir: a }),
                Fr(o, "itemtranslateout", { percent: 1 - t, dir: a });
            },
            percent: function () {
              return i(o || s, s, a);
            },
            getDistance: function () {
              return o && o.offsetWidth;
            },
          };
        },
      },
      computed: {
        animation: function (t) {
          var e = t.animation,
            i = t.Animations;
          return G(i[e] || i.slide, { name: e });
        },
        transitionOptions: function () {
          return { animation: this.animation };
        },
      },
      events: {
        "itemshow itemhide itemshown itemhidden": function (t) {
          var e = t.target;
          this.$update(e);
        },
        beforeitemshow: function (t) {
          De(t.target, this.clsActive);
        },
        itemshown: function (t) {
          De(t.target, this.clsActivated);
        },
        itemhidden: function (t) {
          Be(t.target, this.clsActive, this.clsActivated);
        },
      },
    },
    Rr = {
      mixins: [nr, or, an, Vr],
      functional: !0,
      props: {
        delayControls: Number,
        preload: Number,
        videoAutoplay: Boolean,
        template: String,
      },
      data: function () {
        return {
          preload: 1,
          videoAutoplay: !1,
          delayControls: 3e3,
          items: [],
          cls: "uk-open",
          clsPage: "uk-lightbox-page",
          selList: ".uk-lightbox-items",
          attrItem: "uk-lightbox-item",
          selClose: ".uk-close-large",
          selCaption: ".uk-lightbox-caption",
          pauseOnHover: !1,
          velocity: 2,
          Animations: Lr,
          template:
            '<div class="uk-lightbox uk-overflow-hidden"> <ul class="uk-lightbox-items"></ul> <div class="uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque"> <button class="uk-lightbox-toolbar-icon uk-close-large" type="button" uk-close></button> </div> <a class="uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade" href uk-slidenav-previous uk-lightbox-item="previous"></a> <a class="uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade" href uk-slidenav-next uk-lightbox-item="next"></a> <div class="uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque"></div> </div>',
        };
      },
      created: function () {
        var t = Me(this.template),
          e = Me(this.selList, t);
        this.items.forEach(function () {
          return be(e, "<li>");
        }),
          this.$mount(be(this.container, t));
      },
      computed: {
        caption: function (t, e) {
          t.selCaption;
          return Me(".uk-lightbox-caption", e);
        },
      },
      events: [
        { name: gt + " " + mt + " keydown", handler: "showControls" },
        {
          name: "click",
          self: !0,
          delegate: function () {
            return this.selSlides;
          },
          handler: function (t) {
            t.defaultPrevented || this.hide();
          },
        },
        {
          name: "shown",
          self: !0,
          handler: function () {
            this.showControls();
          },
        },
        {
          name: "hide",
          self: !0,
          handler: function () {
            this.hideControls(),
              Be(this.slides, this.clsActive),
              Qe.stop(this.slides);
          },
        },
        {
          name: "hidden",
          self: !0,
          handler: function () {
            this.$destroy(!0);
          },
        },
        {
          name: "keyup",
          el: ut && document,
          handler: function (t) {
            if (this.isToggled(this.$el) && this.draggable)
              switch (t.keyCode) {
                case 37:
                  this.show("previous");
                  break;
                case 39:
                  this.show("next");
              }
          },
        },
        {
          name: "beforeitemshow",
          handler: function (t) {
            this.isToggled() ||
              ((this.draggable = !1),
              t.preventDefault(),
              this.toggleElement(this.$el, !0, !1),
              (this.animation = Lr.scale),
              Be(t.target, this.clsActive),
              this.stack.splice(1, 0, this.index));
          },
        },
        {
          name: "itemshow",
          handler: function () {
            we(this.caption, this.getItem().caption || "");
            for (var t = -this.preload; t <= this.preload; t++)
              this.loadItem(this.index + t);
          },
        },
        {
          name: "itemshown",
          handler: function () {
            this.draggable = this.$props.draggable;
          },
        },
        {
          name: "itemload",
          handler: function (t, r) {
            var o = this,
              n = r.source,
              e = r.type,
              s = r.alt;
            void 0 === s && (s = "");
            var a,
              h,
              i,
              u = r.poster,
              c = r.attrs;
            void 0 === c && (c = {}),
              this.setItem(r, "<span uk-spinner></span>"),
              n &&
                ((h = {
                  frameborder: "0",
                  allow: "autoplay",
                  allowfullscreen: "",
                  style: "max-width: 100%; box-sizing: border-box;",
                  "uk-responsive": "",
                  "uk-video": "" + this.videoAutoplay,
                }),
                "image" === e || n.match(/\.(jpe?g|png|gif|svg|webp)($|\?)/i)
                  ? fe(n, c.srcset, c.size).then(
                      function (t) {
                        var e = t.width,
                          i = t.height;
                        return o.setItem(
                          r,
                          qr(
                            "img",
                            G({ src: n, width: e, height: i, alt: s }, c)
                          )
                        );
                      },
                      function () {
                        return o.setError(r);
                      }
                    )
                  : "video" === e || n.match(/\.(mp4|webm|ogv)($|\?)/i)
                  ? (Xt(
                      (i = qr(
                        "video",
                        G(
                          {
                            src: n,
                            poster: u,
                            controls: "",
                            playsinline: "",
                            "uk-video": "" + this.videoAutoplay,
                          },
                          c
                        )
                      )),
                      "loadedmetadata",
                      function () {
                        ot(i, { width: i.videoWidth, height: i.videoHeight }),
                          o.setItem(r, i);
                      }
                    ),
                    Xt(i, "error", function () {
                      return o.setError(r);
                    }))
                  : "iframe" === e || n.match(/\.(html|php)($|\?)/i)
                  ? this.setItem(
                      r,
                      qr(
                        "iframe",
                        G(
                          {
                            src: n,
                            frameborder: "0",
                            allowfullscreen: "",
                            class: "uk-lightbox-iframe",
                          },
                          c
                        )
                      )
                    )
                  : (a = n.match(
                      /\/\/(?:.*?youtube(-nocookie)?\..*?[?&]v=|youtu\.be\/)([\w-]{11})[&?]?(.*)?/
                    ))
                  ? this.setItem(
                      r,
                      qr(
                        "iframe",
                        G(
                          {
                            src:
                              "https://www.youtube" +
                              (a[1] || "") +
                              ".com/embed/" +
                              a[2] +
                              (a[3] ? "?" + a[3] : ""),
                            width: 1920,
                            height: 1080,
                          },
                          h,
                          c
                        )
                      )
                    )
                  : (a = n.match(/\/\/.*?vimeo\.[a-z]+\/(\d+)[&?]?(.*)?/)) &&
                    de(
                      "https://vimeo.com/api/oembed.json?maxwidth=1920&url=" +
                        encodeURI(n),
                      { responseType: "json", withCredentials: !1 }
                    ).then(
                      function (t) {
                        var e = t.response,
                          i = e.height,
                          n = e.width;
                        return o.setItem(
                          r,
                          qr(
                            "iframe",
                            G(
                              {
                                src:
                                  "https://player.vimeo.com/video/" +
                                  a[1] +
                                  (a[2] ? "?" + a[2] : ""),
                                width: n,
                                height: i,
                              },
                              h,
                              c
                            )
                          )
                        );
                      },
                      function () {
                        return o.setError(r);
                      }
                    ));
          },
        },
      ],
      methods: {
        loadItem: function (t) {
          void 0 === t && (t = this.index);
          var e = this.getItem(t);
          this.getSlide(e).childElementCount || Jt(this.$el, "itemload", [e]);
        },
        getItem: function (t) {
          return (
            void 0 === t && (t = this.index), this.items[ge(t, this.slides)]
          );
        },
        setItem: function (t, e) {
          Jt(this.$el, "itemloaded", [this, we(this.getSlide(t), e)]);
        },
        getSlide: function (t) {
          return this.slides[this.items.indexOf(t)];
        },
        setError: function (t) {
          this.setItem(t, '<span uk-icon="icon: bolt; ratio: 2"></span>');
        },
        showControls: function () {
          clearTimeout(this.controlsTimer),
            (this.controlsTimer = setTimeout(
              this.hideControls,
              this.delayControls
            )),
            De(this.$el, "uk-active", "uk-transition-active");
        },
        hideControls: function () {
          Be(this.$el, "uk-active", "uk-transition-active");
        },
      },
    };
  function qr(t, e) {
    var i = Ce("<" + t + ">");
    return ot(i, e), i;
  }
  var Ur,
    Yr = {
      install: function (t, e) {
        t.lightboxPanel || t.component("lightboxPanel", Rr);
        G(e.props, t.component("lightboxPanel").options.props);
      },
      props: { toggle: String },
      data: { toggle: "a" },
      computed: {
        toggles: {
          get: function (t, e) {
            return Ne(t.toggle, e);
          },
          watch: function () {
            this.hide();
          },
        },
      },
      disconnected: function () {
        this.hide();
      },
      events: [
        {
          name: "click",
          delegate: function () {
            return this.toggle + ":not(.uk-disabled)";
          },
          handler: function (t) {
            t.preventDefault(), this.show(t.current);
          },
        },
      ],
      methods: {
        show: function (t) {
          var i,
            e = this,
            n = Q(this.toggles.map(Xr), "source");
          return (
            M(t) &&
              ((i = Xr(t).source),
              (t = y(n, function (t) {
                var e = t.source;
                return i === e;
              }))),
            (this.panel =
              this.panel ||
              this.$create("lightboxPanel", G({}, this.$props, { items: n }))),
            Xt(this.panel.$el, "hidden", function () {
              return (e.panel = !1);
            }),
            this.panel.show(t)
          );
        },
        hide: function () {
          return this.panel && this.panel.hide();
        },
      },
    };
  function Xr(e) {
    var i = {};
    return (
      ["href", "caption", "type", "poster", "alt", "attrs"].forEach(function (
        t
      ) {
        i["href" === t ? "source" : t] = ht(e, t);
      }),
      (i.attrs = Mi(i.attrs)),
      i
    );
  }
  var Gr = {
    functional: !0,
    args: ["message", "status"],
    data: {
      message: "",
      status: "",
      timeout: 5e3,
      group: null,
      pos: "top-center",
      clsContainer: "uk-notification",
      clsClose: "uk-notification-close",
      clsMsg: "uk-notification-message",
    },
    install: function (r) {
      r.notification.closeAll = function (i, n) {
        Ae(document.body, function (t) {
          var e = r.getComponent(t, "notification");
          !e || (i && i !== e.group) || e.close(n);
        });
      };
    },
    computed: {
      marginProp: function (t) {
        return "margin" + (w(t.pos, "top") ? "Top" : "Bottom");
      },
      startProps: function () {
        var t = { opacity: 0 };
        return (t[this.marginProp] = -this.$el.offsetHeight), t;
      },
    },
    created: function () {
      var t =
        Me("." + this.clsContainer + "-" + this.pos, this.$container) ||
        be(
          this.$container,
          '<div class="' +
            this.clsContainer +
            " " +
            this.clsContainer +
            "-" +
            this.pos +
            '" style="display: block"></div>'
        );
      this.$mount(
        be(
          t,
          '<div class="' +
            this.clsMsg +
            (this.status ? " " + this.clsMsg + "-" + this.status : "") +
            '"> <a href class="' +
            this.clsClose +
            '" data-uk-close></a> <div>' +
            this.message +
            "</div> </div>"
        )
      );
    },
    connected: function () {
      var t,
        e = this,
        i = j(Re(this.$el, this.marginProp));
      Qe.start(
        Re(this.$el, this.startProps),
        (((t = { opacity: 1 })[this.marginProp] = i), t)
      ).then(function () {
        e.timeout && (e.timer = setTimeout(e.close, e.timeout));
      });
    },
    events:
      (((Ur = {
        click: function (t) {
          Bt(t.target, 'a[href="#"],a[href=""]') && t.preventDefault(),
            this.close();
        },
      })[wt] = function () {
        this.timer && clearTimeout(this.timer);
      }),
      (Ur[bt] = function () {
        this.timeout && (this.timer = setTimeout(this.close, this.timeout));
      }),
      Ur),
    methods: {
      close: function (t) {
        function e() {
          var t = i.$el.parentNode;
          Jt(i.$el, "close", [i]), $e(i.$el), t && !t.hasChildNodes() && $e(t);
        }
        var i = this;
        this.timer && clearTimeout(this.timer),
          t ? e() : Qe.start(this.$el, this.startProps).then(e);
      },
    },
  };
  var Kr = [
      "x",
      "y",
      "bgx",
      "bgy",
      "rotate",
      "scale",
      "color",
      "backgroundColor",
      "borderColor",
      "opacity",
      "blur",
      "hue",
      "grayscale",
      "invert",
      "saturate",
      "sepia",
      "fopacity",
      "stroke",
    ],
    Jr = {
      mixins: [er],
      props: Kr.reduce(function (t, e) {
        return (t[e] = "list"), t;
      }, {}),
      data: Kr.reduce(function (t, e) {
        return (t[e] = void 0), t;
      }, {}),
      computed: {
        props: function (m, g) {
          var v = this;
          return Kr.reduce(function (t, e) {
            if (H(m[e])) return t;
            var i,
              n,
              r = e.match(/color/i),
              o = r || "opacity" === e,
              s = m[e].slice(0);
            o && Re(g, e, ""),
              s.length < 2 &&
                s.unshift(("scale" === e ? 1 : o ? Re(g, e) : 0) || 0);
            var a,
              h,
              u,
              c,
              l,
              d,
              f = s.reduce(function (t, e) {
                return (D(e) && e.replace(/-|\d/g, "").trim()) || t;
              }, "");
            if (
              (r
                ? ((a = g.style.color),
                  (s = s.map(function (t) {
                    return Re(Re(g, "color", t), "color")
                      .split(/[(),]/g)
                      .slice(1, -1)
                      .concat(1)
                      .slice(0, 4)
                      .map(j);
                  })),
                  (g.style.color = a))
                : w(e, "bg")
                ? ((h = "bgy" === e ? "height" : "width"),
                  (s = s.map(function (t) {
                    return wi(t, h, v.$el);
                  })),
                  Re(g, "background-position-" + e[2], ""),
                  (n = Re(g, "backgroundPosition").split(" ")[
                    "x" === e[2] ? 0 : 1
                  ]),
                  (i = v.covers
                    ? ((u = Math.min.apply(Math, s)),
                      (c = Math.max.apply(Math, s)),
                      (l = s.indexOf(u) < s.indexOf(c)),
                      (d = c - u),
                      (s = s.map(function (t) {
                        return t - (l ? u : c);
                      })),
                      (l ? -d : 0) + "px")
                    : n))
                : (s = s.map(j)),
              "stroke" === e)
            ) {
              if (
                !s.some(function (t) {
                  return t;
                })
              )
                return t;
              var p = Dn(v.$el);
              Re(g, "strokeDasharray", p),
                "%" === f &&
                  (s = s.map(function (t) {
                    return (t * p) / 100;
                  })),
                (s = s.reverse()),
                (e = "strokeDashoffset");
            }
            return (t[e] = { steps: s, unit: f, pos: i, bgPos: n, diff: d }), t;
          }, {});
        },
        bgProps: function () {
          var e = this;
          return ["bgx", "bgy"].filter(function (t) {
            return t in e.props;
          });
        },
        covers: function (t, e) {
          return (
            (n = (i = e).style.backgroundSize),
            (r = "cover" === Re(Re(i, "backgroundSize", ""), "backgroundSize")),
            (i.style.backgroundSize = n),
            r
          );
          var i, n, r;
        },
      },
      disconnected: function () {
        delete this._image;
      },
      update: {
        read: function (t) {
          var e,
            i,
            n,
            h,
            u,
            c,
            l = this;
          (t.active = this.matchMedia),
            t.active &&
              (t.image ||
                !this.covers ||
                !this.bgProps.length ||
                ((e = Re(this.$el, "backgroundImage").replace(
                  /^none|url\(["']?(.+?)["']?\)$/,
                  "$1"
                )) &&
                  (((i = new Image()).src = e),
                  (t.image = i).naturalWidth ||
                    (i.onload = function () {
                      return l.$update();
                    }))),
              (n = t.image) &&
                n.naturalWidth &&
                ((h = {
                  width: this.$el.offsetWidth,
                  height: this.$el.offsetHeight,
                }),
                (u = { width: n.naturalWidth, height: n.naturalHeight }),
                (c = rt.cover(u, h)),
                this.bgProps.forEach(function (t) {
                  var e,
                    i = l.props[t],
                    n = i.diff,
                    r = i.bgPos,
                    o = i.steps,
                    s = "bgy" === t ? "height" : "width",
                    a = c[s] - h[s];
                  a < n
                    ? (h[s] = c[s] + n - a)
                    : n < a &&
                      (e = h[s] / wi(r, s, l.$el)) &&
                      (l.props[t].steps = o.map(function (t) {
                        return t - (a - n) / e;
                      })),
                    (c = rt.cover(u, h));
                }),
                (t.dim = c)));
        },
        write: function (t) {
          var e = t.dim;
          t.active
            ? e &&
              Re(this.$el, {
                backgroundSize: e.width + "px " + e.height + "px",
                backgroundRepeat: "no-repeat",
              })
            : Re(this.$el, { backgroundSize: "", backgroundRepeat: "" });
        },
        events: ["resize"],
      },
      methods: {
        reset: function () {
          var i = this;
          J(this.getCss(0), function (t, e) {
            return Re(i.$el, e, "");
          });
        },
        getCss: function (l) {
          var d = this.props;
          return Object.keys(d).reduce(
            function (t, e) {
              var i = d[e],
                n = i.steps,
                r = i.unit,
                o = i.pos,
                s = (function (t, e, i) {
                  void 0 === i && (i = 2);
                  var n = Zr(t, e),
                    r = n[0],
                    o = n[1],
                    s = n[2];
                  return (B(r)
                    ? r + Math.abs(r - o) * s * (r < o ? 1 : -1)
                    : +o
                  ).toFixed(i);
                })(n, l);
              switch (e) {
                case "x":
                case "y":
                  (r = r || "px"),
                    (t.transform +=
                      " translate" +
                      p(e) +
                      "(" +
                      j(s).toFixed("px" === r ? 0 : 2) +
                      r +
                      ")");
                  break;
                case "rotate":
                  (r = r || "deg"), (t.transform += " rotate(" + (s + r) + ")");
                  break;
                case "scale":
                  t.transform += " scale(" + s + ")";
                  break;
                case "bgy":
                case "bgx":
                  t["background-position-" + e[2]] =
                    "calc(" + o + " + " + s + "px)";
                  break;
                case "color":
                case "backgroundColor":
                case "borderColor":
                  var a = Zr(n, l),
                    h = a[0],
                    u = a[1],
                    c = a[2];
                  t[e] =
                    "rgba(" +
                    h
                      .map(function (t, e) {
                        return (
                          (t += c * (u[e] - t)),
                          3 === e ? j(t) : parseInt(t, 10)
                        );
                      })
                      .join(",") +
                    ")";
                  break;
                case "blur":
                  (r = r || "px"), (t.filter += " blur(" + (s + r) + ")");
                  break;
                case "hue":
                  (r = r || "deg"),
                    (t.filter += " hue-rotate(" + (s + r) + ")");
                  break;
                case "fopacity":
                  (r = r || "%"), (t.filter += " opacity(" + (s + r) + ")");
                  break;
                case "grayscale":
                case "invert":
                case "saturate":
                case "sepia":
                  (r = r || "%"), (t.filter += " " + e + "(" + (s + r) + ")");
                  break;
                default:
                  t[e] = s;
              }
              return t;
            },
            { transform: "", filter: "" }
          );
        },
      },
    };
  function Zr(t, e) {
    var i = t.length - 1,
      n = Math.min(Math.floor(i * e), i - 1),
      r = t.slice(n, n + 2);
    return r.push(1 === e ? 1 : (e % (1 / i)) * i), r;
  }
  var Qr = {
    mixins: [Jr],
    props: { target: String, viewport: Number, easing: Number },
    data: { target: !1, viewport: 1, easing: 1 },
    computed: {
      target: function (t, e) {
        var i = t.target;
        return (function t(e) {
          return e ? ("offsetTop" in e ? e : t(e.parentNode)) : document.body;
        })((i && yt(i, e)) || e);
      },
    },
    update: {
      read: function (t, e) {
        var i = t.percent;
        if (("scroll" !== e && (i = !1), t.active)) {
          var n,
            r,
            o = i;
          return (
            (n = Hi(this.target) / (this.viewport || 1)),
            (r = this.easing),
            {
              percent: (i = tt(n * (1 - (r - r * n)))),
              style: o !== i && this.getCss(i),
            }
          );
        }
      },
      write: function (t) {
        var e = t.style;
        t.active ? e && Re(this.$el, e) : this.reset();
      },
      events: ["scroll", "resize"],
    },
  };
  var to = {
    update: {
      write: function () {
        var t;
        this.stack.length ||
          this.dragging ||
          ((t = this.getValidIndex(this.index)),
          (~this.prevIndex && this.index === t) || this.show(t));
      },
      events: ["resize"],
    },
  };
  function eo(t, e, i) {
    var n,
      r = ro(t, e);
    return i
      ? r - ((n = t), si(e).width / 2 - si(n).width / 2)
      : Math.min(r, io(e));
  }
  function io(t) {
    return Math.max(0, no(t) - si(t).width);
  }
  function no(t) {
    return so(t).reduce(function (t, e) {
      return si(e).width + t;
    }, 0);
  }
  function ro(t, e) {
    return (hi(t).left + (lt ? si(t).width - si(e).width : 0)) * (lt ? -1 : 1);
  }
  function oo(t, e, i) {
    Jt(t, Zt(e, !1, !1, i));
  }
  function so(t) {
    return Yt(t);
  }
  var ao = {
      mixins: [sn, jr, to],
      props: { center: Boolean, sets: Boolean },
      data: {
        center: !1,
        sets: !1,
        attrItem: "uk-slider-item",
        selList: ".uk-slider-items",
        selNav: ".uk-slider-nav",
        clsContainer: "uk-slider-container",
        Transitioner: function (r, n, o, t) {
          var e = t.center,
            s = t.easing,
            a = t.list,
            h = new se(),
            i = r ? eo(r, a, e) : eo(n, a, e) + si(n).width * o,
            u = n ? eo(n, a, e) : i + si(r).width * o * (lt ? -1 : 1);
          return {
            dir: o,
            show: function (t, e, i) {
              void 0 === e && (e = 0);
              var n = i ? "linear" : s;
              return (
                (t -= Math.round(t * tt(e, -1, 1))),
                this.translate(e),
                r && this.updateTranslates(),
                (e = r ? e : tt(e, 0, 1)),
                oo(this.getItemIn(), "itemin", {
                  percent: e,
                  duration: t,
                  timing: n,
                  dir: o,
                }),
                r &&
                  oo(this.getItemIn(!0), "itemout", {
                    percent: 1 - e,
                    duration: t,
                    timing: n,
                    dir: o,
                  }),
                Qe.start(
                  a,
                  { transform: Or(-u * (lt ? -1 : 1), "px") },
                  t,
                  n
                ).then(h.resolve, et),
                h.promise
              );
            },
            stop: function () {
              return Qe.stop(a);
            },
            cancel: function () {
              Qe.cancel(a);
            },
            reset: function () {
              Re(a, "transform", "");
            },
            forward: function (t, e) {
              return (
                void 0 === e && (e = this.percent()),
                Qe.cancel(a),
                this.show(t, e, !0)
              );
            },
            translate: function (t) {
              var e = this.getDistance() * o * (lt ? -1 : 1);
              Re(
                a,
                "transform",
                Or(tt(e - e * t - u, -no(a), si(a).width) * (lt ? -1 : 1), "px")
              ),
                this.updateTranslates(),
                r &&
                  ((t = tt(t, -1, 1)),
                  oo(this.getItemIn(), "itemtranslatein", {
                    percent: t,
                    dir: o,
                  }),
                  oo(this.getItemIn(!0), "itemtranslateout", {
                    percent: 1 - t,
                    dir: o,
                  }));
            },
            percent: function () {
              return Math.abs(
                (Re(a, "transform").split(",")[4] * (lt ? -1 : 1) + i) / (u - i)
              );
            },
            getDistance: function () {
              return Math.abs(u - i);
            },
            getItemIn: function (t) {
              void 0 === t && (t = !1);
              var e = this.getActives(),
                i = Z(so(a), "offsetLeft"),
                n = me(i, e[0 < o * (t ? -1 : 1) ? e.length - 1 : 0]);
              return ~n && i[n + (r && !t ? o : 0)];
            },
            getActives: function () {
              var i = eo(r || n, a, e);
              return Z(
                so(a).filter(function (t) {
                  var e = ro(t, a);
                  return i <= e && e + si(t).width <= si(a).width + i;
                }),
                "offsetLeft"
              );
            },
            updateTranslates: function () {
              var i = this.getActives();
              so(a).forEach(function (t) {
                var e = b(i, t);
                oo(t, "itemtranslate" + (e ? "in" : "out"), {
                  percent: e ? 1 : 0,
                  dir: t.offsetLeft <= n.offsetLeft ? 1 : -1,
                });
              });
            },
          };
        },
      },
      computed: {
        avgWidth: function () {
          return no(this.list) / this.length;
        },
        finite: function (t) {
          return (
            t.finite ||
            Math.ceil(no(this.list)) <
              si(this.list).width +
                so(this.list).reduce(function (t, e) {
                  return Math.max(t, si(e).width);
                }, 0) +
                this.center
          );
        },
        maxIndex: function () {
          if (!this.finite || (this.center && !this.sets))
            return this.length - 1;
          if (this.center) return K(this.sets);
          Re(this.slides, "order", "");
          for (var t = io(this.list), e = this.length; e--; )
            if (ro(this.list.children[e], this.list) < t)
              return Math.min(e + 1, this.length - 1);
          return 0;
        },
        sets: function (t) {
          var o = this,
            e = t.sets,
            s = si(this.list).width / (this.center ? 2 : 1),
            a = 0,
            h = s,
            u = 0;
          return (
            !O(
              (e =
                e &&
                this.slides.reduce(function (t, e, i) {
                  var n,
                    r = si(e).width;
                  return (
                    a < u + r &&
                      (!o.center && i > o.maxIndex && (i = o.maxIndex),
                      b(t, i) ||
                        ((n = o.slides[i + 1]),
                        o.center && n && r < h - si(n).width / 2
                          ? (h -= r)
                          : ((h = s),
                            t.push(i),
                            (a = u + s + (o.center ? r / 2 : 0))))),
                    (u += r),
                    t
                  );
                }, []))
            ) && e
          );
        },
        transitionOptions: function () {
          return { center: this.center, list: this.list };
        },
      },
      connected: function () {
        Le(this.$el, this.clsContainer, !Me("." + this.clsContainer, this.$el));
      },
      update: {
        write: function () {
          var i = this;
          Ne(
            "[" + this.attrItem + "],[data-" + this.attrItem + "]",
            this.$el
          ).forEach(function (t) {
            var e = ht(t, i.attrItem);
            i.maxIndex &&
              Le(
                t,
                "uk-hidden",
                P(e) && ((i.sets && !b(i.sets, j(e))) || e > i.maxIndex)
              );
          }),
            !this.length ||
              this.dragging ||
              this.stack.length ||
              (this.reorder(), this._translate(1));
          var e = this._getTransitioner(this.index).getActives();
          this.slides.forEach(function (t) {
            return Le(t, i.clsActive, b(e, t));
          }),
            (this.sets && !b(this.sets, j(this.index))) ||
              this.slides.forEach(function (t) {
                return Le(t, i.clsActivated, b(e, t));
              });
        },
        events: ["resize"],
      },
      events: {
        beforeitemshow: function (t) {
          !this.dragging &&
            this.sets &&
            this.stack.length < 2 &&
            !b(this.sets, this.index) &&
            (this.index = this.getValidIndex());
          var e = Math.abs(
            this.index -
              this.prevIndex +
              ((0 < this.dir && this.index < this.prevIndex) ||
              (this.dir < 0 && this.index > this.prevIndex)
                ? (this.maxIndex + 1) * this.dir
                : 0)
          );
          if (!this.dragging && 1 < e) {
            for (var i = 0; i < e; i++)
              this.stack.splice(1, 0, 0 < this.dir ? "next" : "previous");
            t.preventDefault();
          } else
            (this.duration =
              Wr(this.avgWidth / this.velocity) *
              (si(
                this.dir < 0 || !this.slides[this.prevIndex]
                  ? this.slides[this.index]
                  : this.slides[this.prevIndex]
              ).width /
                this.avgWidth)),
              this.reorder();
        },
        itemshow: function () {
          ~this.prevIndex &&
            De(this._getTransitioner().getItemIn(), this.clsActive);
        },
      },
      methods: {
        reorder: function () {
          var i = this;
          if (this.finite) Re(this.slides, "order", "");
          else {
            var n =
              0 < this.dir && this.slides[this.prevIndex]
                ? this.prevIndex
                : this.index;
            if (
              (this.slides.forEach(function (t, e) {
                return Re(
                  t,
                  "order",
                  0 < i.dir && e < n ? 1 : i.dir < 0 && e >= i.index ? -1 : ""
                );
              }),
              this.center)
            )
              for (
                var t = this.slides[n],
                  e = si(this.list).width / 2 - si(t).width / 2,
                  r = 0;
                0 < e;

              ) {
                var o = this.getIndex(--r + n, n),
                  s = this.slides[o];
                Re(s, "order", n < o ? -2 : -1), (e -= si(s).width);
              }
          }
        },
        getValidIndex: function (t, e) {
          if (
            (void 0 === t && (t = this.index),
            void 0 === e && (e = this.prevIndex),
            (t = this.getIndex(t, e)),
            !this.sets)
          )
            return t;
          var i;
          do {
            if (b(this.sets, t)) return t;
            (i = t), (t = this.getIndex(t + this.dir, e));
          } while (t !== i);
          return t;
        },
      },
    },
    ho = {
      mixins: [Jr],
      data: { selItem: "!li" },
      computed: {
        item: function (t, e) {
          return yt(t.selItem, e);
        },
      },
      events: [
        {
          name: "itemshown",
          self: !0,
          el: function () {
            return this.item;
          },
          handler: function () {
            Re(this.$el, this.getCss(0.5));
          },
        },
        {
          name: "itemin itemout",
          self: !0,
          el: function () {
            return this.item;
          },
          handler: function (t) {
            var e = t.type,
              i = t.detail,
              n = i.percent,
              r = i.duration,
              o = i.timing,
              s = i.dir;
            Qe.cancel(this.$el),
              Re(this.$el, this.getCss(co(e, s, n))),
              Qe.start(
                this.$el,
                this.getCss(uo(e) ? 0.5 : 0 < s ? 1 : 0),
                r,
                o
              ).catch(et);
          },
        },
        {
          name: "transitioncanceled transitionend",
          self: !0,
          el: function () {
            return this.item;
          },
          handler: function () {
            Qe.cancel(this.$el);
          },
        },
        {
          name: "itemtranslatein itemtranslateout",
          self: !0,
          el: function () {
            return this.item;
          },
          handler: function (t) {
            var e = t.type,
              i = t.detail,
              n = i.percent,
              r = i.dir;
            Qe.cancel(this.$el), Re(this.$el, this.getCss(co(e, r, n)));
          },
        },
      ],
    };
  function uo(t) {
    return u(t, "in");
  }
  function co(t, e, i) {
    return (i /= 2), uo(t) ? (e < 0 ? 1 - i : i) : e < 0 ? i : 1 - i;
  }
  var lo,
    fo,
    po = G({}, Br, {
      fade: {
        show: function () {
          return [{ opacity: 0, zIndex: 0 }, { zIndex: -1 }];
        },
        percent: function (t) {
          return 1 - Re(t, "opacity");
        },
        translate: function (t) {
          return [{ opacity: 1 - t, zIndex: 0 }, { zIndex: -1 }];
        },
      },
      scale: {
        show: function () {
          return [
            { opacity: 0, transform: Hr(1.5), zIndex: 0 },
            { zIndex: -1 },
          ];
        },
        percent: function (t) {
          return 1 - Re(t, "opacity");
        },
        translate: function (t) {
          return [
            { opacity: 1 - t, transform: Hr(1 + 0.5 * t), zIndex: 0 },
            { zIndex: -1 },
          ];
        },
      },
      pull: {
        show: function (t) {
          return t < 0
            ? [
                { transform: Or(30), zIndex: -1 },
                { transform: Or(), zIndex: 0 },
              ]
            : [
                { transform: Or(-100), zIndex: 0 },
                { transform: Or(), zIndex: -1 },
              ];
        },
        percent: function (t, e, i) {
          return i < 0 ? 1 - Pr(e) : Pr(t);
        },
        translate: function (t, e) {
          return e < 0
            ? [
                { transform: Or(30 * t), zIndex: -1 },
                { transform: Or(-100 * (1 - t)), zIndex: 0 },
              ]
            : [
                { transform: Or(100 * -t), zIndex: 0 },
                { transform: Or(30 * (1 - t)), zIndex: -1 },
              ];
        },
      },
      push: {
        show: function (t) {
          return t < 0
            ? [
                { transform: Or(100), zIndex: 0 },
                { transform: Or(), zIndex: -1 },
              ]
            : [
                { transform: Or(-30), zIndex: -1 },
                { transform: Or(), zIndex: 0 },
              ];
        },
        percent: function (t, e, i) {
          return 0 < i ? 1 - Pr(e) : Pr(t);
        },
        translate: function (t, e) {
          return e < 0
            ? [
                { transform: Or(100 * t), zIndex: 0 },
                { transform: Or(-30 * (1 - t)), zIndex: -1 },
              ]
            : [
                { transform: Or(-30 * t), zIndex: -1 },
                { transform: Or(100 * (1 - t)), zIndex: 0 },
              ];
        },
      },
    }),
    mo = {
      mixins: [sn, Vr, to],
      props: { ratio: String, minHeight: Number, maxHeight: Number },
      data: {
        ratio: "16:9",
        minHeight: !1,
        maxHeight: !1,
        selList: ".uk-slideshow-items",
        attrItem: "uk-slideshow-item",
        selNav: ".uk-slideshow-nav",
        Animations: po,
      },
      update: {
        read: function () {
          var t = this.ratio.split(":").map(Number),
            e = t[0],
            i = ((i = t[1]) * this.list.offsetWidth) / e || 0;
          return (
            this.minHeight && (i = Math.max(this.minHeight, i)),
            this.maxHeight && (i = Math.min(this.maxHeight, i)),
            { height: i - fi(this.list, "height", "content-box") }
          );
        },
        write: function (t) {
          var e = t.height;
          0 < e && Re(this.list, "minHeight", e);
        },
        events: ["resize"],
      },
    },
    go = {
      mixins: [sn, _r],
      props: {
        group: String,
        threshold: Number,
        clsItem: String,
        clsPlaceholder: String,
        clsDrag: String,
        clsDragState: String,
        clsBase: String,
        clsNoDrag: String,
        clsEmpty: String,
        clsCustom: String,
        handle: String,
      },
      data: {
        group: !1,
        threshold: 5,
        clsItem: "uk-sortable-item",
        clsPlaceholder: "uk-sortable-placeholder",
        clsDrag: "uk-sortable-drag",
        clsDragState: "uk-drag",
        clsBase: "uk-sortable",
        clsNoDrag: "uk-sortable-nodrag",
        clsEmpty: "uk-sortable-empty",
        clsCustom: "",
        handle: !1,
        pos: {},
      },
      created: function () {
        var i = this;
        ["init", "start", "move", "end"].forEach(function (t) {
          var e = i[t];
          i[t] = function (t) {
            G(i.pos, oe(t)), e(t);
          };
        });
      },
      events: { name: mt, passive: !1, handler: "init" },
      computed: {
        target: function () {
          return (this.$el.tBodies || [this.$el])[0];
        },
        items: function () {
          return Yt(this.target);
        },
        isEmpty: {
          get: function () {
            return O(this.items);
          },
          watch: function (t) {
            Le(this.target, this.clsEmpty, t);
          },
          immediate: !0,
        },
        handles: {
          get: function (t, e) {
            var i = t.handle;
            return i ? Ne(i, e) : this.items;
          },
          watch: function (t, e) {
            Re(e, { touchAction: "", userSelect: "" }),
              Re(t, { touchAction: pt ? "none" : "", userSelect: "none" });
          },
          immediate: !0,
        },
      },
      update: {
        write: function () {
          if (this.drag && Pt(this.placeholder)) {
            var t = this.pos,
              e = t.x,
              i = t.y,
              n = this.origin,
              r = n.offsetTop,
              o = n.offsetLeft,
              s = this.drag,
              a = s.offsetHeight,
              h = s.offsetWidth,
              u = si(window),
              c = u.right,
              l = u.bottom,
              d = document.elementFromPoint(e, i);
            Re(this.drag, {
              top: tt(i - r, 0, l - a),
              left: tt(e - o, 0, c - h),
            });
            var f = this.getSortable(d),
              p = this.getSortable(this.placeholder),
              m = f !== p;
            if (
              f &&
              !qt(d, this.placeholder) &&
              (!m || (f.group && f.group === p.group))
            ) {
              if (
                ((d =
                  (f.target === d.parentNode && d) ||
                  f.items.filter(function (t) {
                    return qt(d, t);
                  })[0]),
                m)
              )
                p.remove(this.placeholder);
              else if (!d) return;
              f.insert(this.placeholder, d),
                b(this.touched, f) || this.touched.push(f);
            }
          }
        },
        events: ["move"],
      },
      methods: {
        init: function (t) {
          var e = t.target,
            i = t.button,
            n = t.defaultPrevented,
            r = this.items.filter(function (t) {
              return qt(e, t);
            })[0];
          !r ||
            n ||
            0 < i ||
            Vt(e) ||
            qt(e, "." + this.clsNoDrag) ||
            (this.handle && !qt(e, this.handle)) ||
            (t.preventDefault(),
            (this.touched = [this]),
            (this.placeholder = r),
            (this.origin = G({ target: e, index: me(r) }, this.pos)),
            Xt(document, gt, this.move),
            Xt(document, vt, this.end),
            this.threshold || this.start(t));
        },
        start: function (t) {
          var e, i, n;
          this.drag =
            ((e = this.$container),
            (i = this.placeholder),
            ot(
              (n = be(
                e,
                i.outerHTML.replace(/(^<)(?:li|tr)|(?:li|tr)(\/>$)/g, "$1div$2")
              )),
              "style",
              ot(n, "style") + ";margin:0!important"
            ),
            Re(
              n,
              G(
                {
                  boxSizing: "border-box",
                  width: i.offsetWidth,
                  height: i.offsetHeight,
                  overflow: "hidden",
                },
                Re(i, [
                  "paddingLeft",
                  "paddingRight",
                  "paddingTop",
                  "paddingBottom",
                ])
              )
            ),
            ci(n.firstElementChild, ci(i.firstElementChild)),
            n);
          var r,
            o,
            s = this.placeholder.getBoundingClientRect(),
            a = s.left,
            h = s.top;
          G(this.origin, {
            offsetLeft: this.pos.x - a,
            offsetTop: this.pos.y - h,
          }),
            De(this.drag, this.clsDrag, this.clsCustom),
            De(this.placeholder, this.clsPlaceholder),
            De(this.items, this.clsItem),
            De(document.documentElement, this.clsDragState),
            Jt(this.$el, "start", [this, this.placeholder]),
            (r = this.pos),
            (o = Date.now()),
            (lo = setInterval(function () {
              var t = r.x,
                a = r.y;
              a += window.pageYOffset;
              var h = 0.3 * (Date.now() - o);
              (o = Date.now()),
                Li(document.elementFromPoint(t, r.y)).some(function (t) {
                  var e = t.scrollTop,
                    i = t.scrollHeight,
                    n = si(Fi(t)),
                    r = n.top,
                    o = n.bottom,
                    s = n.height;
                  if (r < a && a < r + 30) e -= h;
                  else {
                    if (!(a < o && o - 30 < a)) return;
                    e += h;
                  }
                  if (0 < e && e < i - s) return Pi(t, e), !0;
                });
            }, 15)),
            this.move(t);
        },
        move: function (t) {
          this.drag
            ? this.$emit("move")
            : (Math.abs(this.pos.x - this.origin.x) > this.threshold ||
                Math.abs(this.pos.y - this.origin.y) > this.threshold) &&
              this.start(t);
        },
        end: function (t) {
          var e, i;
          Gt(document, gt, this.move),
            Gt(document, vt, this.end),
            Gt(window, "scroll", this.scroll),
            this.drag
              ? (clearInterval(lo),
                (e = this.getSortable(this.placeholder)),
                this === e
                  ? this.origin.index !== me(this.placeholder) &&
                    Jt(this.$el, "moved", [this, this.placeholder])
                  : (Jt(e.$el, "added", [e, this.placeholder]),
                    Jt(this.$el, "removed", [this, this.placeholder])),
                Jt(this.$el, "stop", [this, this.placeholder]),
                $e(this.drag),
                (this.drag = null),
                (i = this.touched
                  .map(function (t) {
                    return t.clsPlaceholder + " " + t.clsItem;
                  })
                  .join(" ")),
                this.touched.forEach(function (t) {
                  return Be(t.items, i);
                }),
                Be(document.documentElement, this.clsDragState))
              : "touchend" === t.type && t.target.click();
        },
        insert: function (i, n) {
          var r = this;
          De(this.items, this.clsItem);
          function t() {
            var t, e;
            n
              ? (!qt(i, r.target) ||
                  ((e = n),
                  (t = i).parentNode === e.parentNode && me(t) > me(e))
                  ? xe
                  : ye)(n, i)
              : be(r.target, i);
          }
          this.animation ? this.animate(t) : t();
        },
        remove: function (t) {
          qt(t, this.target) &&
            (this.animation
              ? this.animate(function () {
                  return $e(t);
                })
              : $e(t));
        },
        getSortable: function (t) {
          return (
            t &&
            (this.$getComponent(t, "sortable") ||
              this.getSortable(t.parentNode))
          );
        },
      },
    };
  var vo = [],
    wo = {
      mixins: [nr, an, mn],
      args: "title",
      props: { delay: Number, title: String },
      data: {
        pos: "top",
        title: "",
        delay: 0,
        animation: ["uk-animation-scale-up"],
        duration: 100,
        cls: "uk-active",
        clsPos: "uk-tooltip",
      },
      beforeConnect: function () {
        (this._hasTitle = st(this.$el, "title")),
          ot(this.$el, { title: "", "aria-expanded": !1 });
      },
      disconnected: function () {
        this.hide(),
          ot(this.$el, {
            title: this._hasTitle ? this.title : null,
            "aria-expanded": null,
          });
      },
      methods: {
        show: function () {
          var e = this;
          !this.isActive() &&
            this.title &&
            (vo.forEach(function (t) {
              return t.hide();
            }),
            vo.push(this),
            (this._unbind = Xt(document, vt, function (t) {
              return !qt(t.target, e.$el) && e.hide();
            })),
            clearTimeout(this.showTimer),
            (this.showTimer = setTimeout(this._show, this.delay)));
        },
        hide: function () {
          var t = this;
          this.isActive() &&
            !zt(this.$el, "input:focus") &&
            this.toggleElement(this.tooltip, !1, !1).then(function () {
              vo.splice(vo.indexOf(t), 1),
                clearTimeout(t.showTimer),
                (t.tooltip = $e(t.tooltip)),
                t._unbind();
            });
        },
        _show: function () {
          var e = this;
          (this.tooltip = be(
            this.container,
            '<div class="' +
              this.clsPos +
              '"> <div class="' +
              this.clsPos +
              '-inner">' +
              this.title +
              "</div> </div>"
          )),
            Xt(this.tooltip, "toggled", function () {
              var t = e.isToggled(e.tooltip);
              ot(e.$el, "aria-expanded", t),
                t &&
                  (e.positionAt(e.tooltip, e.$el),
                  (e.origin =
                    "y" === e.getAxis()
                      ? vi(e.dir) + "-" + e.align
                      : e.align + "-" + vi(e.dir)));
            }),
            this.toggleElement(this.tooltip, !0);
        },
        isActive: function () {
          return b(vo, this);
        },
      },
      events:
        (((fo = { focus: "show", blur: "hide" })[wt + " " + bt] = function (t) {
          re(t) || (t.type === wt ? this.show() : this.hide());
        }),
        (fo[mt] = function (t) {
          re(t) && (this.isActive() ? this.hide() : this.show());
        }),
        fo),
    },
    bo = {
      props: {
        allow: String,
        clsDragover: String,
        concurrent: Number,
        maxSize: Number,
        method: String,
        mime: String,
        msgInvalidMime: String,
        msgInvalidName: String,
        msgInvalidSize: String,
        multiple: Boolean,
        name: String,
        params: Object,
        type: String,
        url: String,
      },
      data: {
        allow: !1,
        clsDragover: "uk-dragover",
        concurrent: 1,
        maxSize: 0,
        method: "POST",
        mime: !1,
        msgInvalidMime: "Invalid File Type: %s",
        msgInvalidName: "Invalid File Name: %s",
        msgInvalidSize: "Invalid File Size: %s Kilobytes Max",
        multiple: !1,
        name: "files[]",
        params: {},
        type: "",
        url: "",
        abort: et,
        beforeAll: et,
        beforeSend: et,
        complete: et,
        completeAll: et,
        error: et,
        fail: et,
        load: et,
        loadEnd: et,
        loadStart: et,
        progress: et,
      },
      events: {
        change: function (t) {
          zt(t.target, 'input[type="file"]') &&
            (t.preventDefault(),
            t.target.files && this.upload(t.target.files),
            (t.target.value = ""));
        },
        drop: function (t) {
          yo(t);
          var e = t.dataTransfer;
          e &&
            e.files &&
            (Be(this.$el, this.clsDragover), this.upload(e.files));
        },
        dragenter: function (t) {
          yo(t);
        },
        dragover: function (t) {
          yo(t), De(this.$el, this.clsDragover);
        },
        dragleave: function (t) {
          yo(t), Be(this.$el, this.clsDragover);
        },
      },
      methods: {
        upload: function (t) {
          var n = this;
          if (t.length) {
            Jt(this.$el, "upload", [t]);
            for (var e = 0; e < t.length; e++) {
              if (this.maxSize && 1e3 * this.maxSize < t[e].size)
                return void this.fail(
                  this.msgInvalidSize.replace("%s", this.maxSize)
                );
              if (this.allow && !xo(this.allow, t[e].name))
                return void this.fail(
                  this.msgInvalidName.replace("%s", this.allow)
                );
              if (this.mime && !xo(this.mime, t[e].type))
                return void this.fail(
                  this.msgInvalidMime.replace("%s", this.mime)
                );
            }
            this.multiple || (t = [t[0]]), this.beforeAll(this, t);
            var r = (function (t, e) {
                for (var i = [], n = 0; n < t.length; n += e) {
                  for (var r = [], o = 0; o < e; o++) r.push(t[n + o]);
                  i.push(r);
                }
                return i;
              })(t, this.concurrent),
              o = function (t) {
                var e = new FormData();
                for (var i in (t.forEach(function (t) {
                  return e.append(n.name, t);
                }),
                n.params))
                  e.append(i, n.params[i]);
                de(n.url, {
                  data: e,
                  method: n.method,
                  responseType: n.type,
                  beforeSend: function (t) {
                    var e = t.xhr;
                    e.upload && Xt(e.upload, "progress", n.progress),
                      ["loadStart", "load", "loadEnd", "abort"].forEach(
                        function (t) {
                          return Xt(e, t.toLowerCase(), n[t]);
                        }
                      ),
                      n.beforeSend(t);
                  },
                }).then(
                  function (t) {
                    n.complete(t), r.length ? o(r.shift()) : n.completeAll(t);
                  },
                  function (t) {
                    return n.error(t);
                  }
                );
              };
            o(r.shift());
          }
        },
      },
    };
  function xo(t, e) {
    return e.match(
      new RegExp(
        "^" +
          t
            .replace(/\//g, "\\/")
            .replace(/\*\*/g, "(\\/[^\\/]+)*")
            .replace(/\*/g, "[^\\/]+")
            .replace(/((?!\\))\?/g, "$1.") +
          "$",
        "i"
      )
    );
  }
  function yo(t) {
    t.preventDefault(), t.stopPropagation();
  }
  return (
    J(
      Object.freeze({
        __proto__: null,
        Countdown: Sr,
        Filter: Nr,
        Lightbox: Yr,
        LightboxPanel: Rr,
        Notification: Gr,
        Parallax: Qr,
        Slider: ao,
        SliderParallax: ho,
        Slideshow: mo,
        SlideshowParallax: ho,
        Sortable: go,
        Tooltip: wo,
        Upload: bo,
      }),
      function (t, e) {
        return qi.component(e, t);
      }
    ),
    qi
  );
});

window.addEventListener("load", function () {
  document.querySelector("body").classList.add("loaded");
}),
  (function () {
    const e = location.pathname.slice(location.pathname.lastIndexOf("/") + 1),
      t = window.matchMedia("(max-width: 960px)"),
      n = document.querySelectorAll(".uk-navbar-nav li"),
      a = document.querySelectorAll(".uk-nav-default li"),
      r = document.querySelectorAll(".uk-navbar-dropdown li"),
      s = document.querySelectorAll(".uk-nav-sub li");
    function o(t) {
      t.forEach(function (n) {
        "/" === location.pathname[location.pathname.length - 1]
          ? t[0].classList.add("uk-active")
          : n.querySelectorAll("a")[0].getAttribute("href") === e &&
            n.classList.add("uk-active");
      });
    }
    function i(t) {
      t.forEach(function (n) {
        if (
          t.length > 0 &&
          n.querySelectorAll("a")[0].getAttribute("href") === e
        ) {
          const e = n.parentElement.parentElement,
            t = n.parentElement.parentElement.parentElement.parentElement;
          "LI" === e.parentElement.tagName
            ? e.parentElement.classList.add("uk-active")
            : "LI" === e.tagName
            ? e.classList.add("uk-active")
            : t.parentElement.classList.add("uk-active");
        }
      });
    }
    t.matches && (o(a), i(s)), o(n), i(r);
  })(),
  (function () {
    const e = document.querySelectorAll(".uk-navbar-nav li.uk-active"),
      t = document.getElementsByClassName("uk-breadcrumb");
    if (
      t.length > 0 &&
      "blog-article.html" !=
        location.pathname.slice(location.pathname.lastIndexOf("/") + 1)
    ) {
      const n = document
        .querySelectorAll(".uk-navbar-nav li")[0]
        .getElementsByTagName("a")[0].pathname;
      (t[0].innerHTML = `<li><a href="${n.slice(
        location.pathname.lastIndexOf("/") + 1
      )}">Home</a></li>`),
        e.forEach(function (e) {
          const n = document.createElement("li");
          (breadTitle = e.childNodes[0].innerText),
            (n.innerHTML = `<a href="${e.children[0].attributes[0].textContent}">${breadTitle}</a>`),
            t[0].insertBefore(n, t[0].firstElementChild.previousSibling);
        }),
        (t[0].lastChild.innerHTML = `<span>${breadTitle}</span>`);
    }
  })();
const mainNav = document.querySelector(".uk-navbar-nav");
if (null !== mainNav) {
  const e = mainNav.cloneNode(!0),
    t = e.querySelectorAll("ul.uk-nav");
  e.classList.remove("uk-navbar-nav", "uk-visible@m"),
    e.classList.add("uk-nav-default", "uk-nav-parent-icon"),
    e.setAttribute("data-uk-nav", ""),
    Array.from(e.children).forEach(function (e) {
      2 == e.children.length &&
        (e.classList.add("uk-parent"),
        e.querySelectorAll(".fa-chevron-down")[0].remove());
    });
  const n = (e) => e.replaceWith(...e.childNodes);
  t.forEach(function (e) {
    e.classList.remove("uk-nav", "uk-navbar-dropdown-nav"),
      e.classList.add("uk-nav-sub"),
      n(e.parentElement),
      null !== e.querySelector("a.uk-disabled") &&
        (n(e.parentElement.parentElement),
        n(e.parentElement),
        e.querySelector("a.uk-disabled").parentElement.parentElement.remove());
  });
  const a = document.querySelector(".in-optional-nav");
  let r = "";
  null !== a &&
    a.children.length > 0 &&
    (r = `<a href="${a.children[0].pathname.substr(
      1
    )}" class="uk-button uk-button-primary uk-border-rounded uk-align-center">${
      a.children[0].innerText
    }<i class="fas fa-sign-in-alt uk-margin-small-left"></i></a>`);
  const s = `\n    <div class="uk-navbar-item in-mobile-nav uk-hidden@m">\n        <a class="uk-button" href="#modal-full" data-uk-toggle><i class="fas fa-bars"></i></a>\n    </div>\n    <div id="modal-full" class="uk-modal-full" data-uk-modal>\n        <div class="uk-modal-dialog uk-flex uk-flex-center uk-flex-middle" data-uk-height-viewport>\n            <a class="uk-modal-close-full uk-button"><i class="fas fa-times"></i></a>\n            <div class="uk-width-large uk-padding-large">\n                ${e.outerHTML}\n                ${r}\n            </div>\n        </div>\n    </div>\n    `;
  mainNav.insertAdjacentHTML("afterend", s);
}
function serialize(e) {
  return Array.from(new FormData(e), (e) =>
    e.map(encodeURIComponent).join("=")
  ).join("&");
}
function ajaxRequest(e, t, n, a) {
  const r = new XMLHttpRequest();
  r.open(e, t, !0),
    r.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
    r.send(n),
    (r.onreadystatechange = function () {
      4 == r.readyState && 200 == r.status ? a(!0, r.responseText) : a(!1, "");
    });
}
function emptyElements(e) {
  for (let t of e) t.innerHTML = "";
}
function counterUp(e) {
  "use strict";
  this.defaults = {
    duration: 2e3,
    prepend: "",
    append: "",
    selector: ".in-counter",
    start: 0,
    end: 100,
    intvalues: !1,
    interval: 100,
  };
  var t = this;
  for (var n in ((this.upating = !1),
  (this.intervalID = null),
  (this.props = {}),
  this.defaults))
    void 0 !== n &&
      ((t.props[n] = t.defaults[n]),
      e.hasOwnProperty(n) && t.props.hasOwnProperty(n) && (t.props[n] = e[n]));
  (this.domelems = document.querySelectorAll(this.props.selector)),
    (this.elems = []);
  var a = {};
  this.domelems.forEach(function (e) {
    a.obj = e;
    var n = parseInt(e.getAttribute("data-counter-start"));
    isNaN(n) ? (a.start = t.props.start) : (a.start = n);
    var r = parseInt(e.getAttribute("data-counter-end"));
    isNaN(r) ? (a.end = t.props.end) : (a.end = r);
    var s = parseInt(e.getAttribute("data-counter-duration"));
    isNaN(s) ? (a.duration = t.props.duration) : (a.duration = s);
    var o = e.getAttribute("data-counter-prepend");
    a.prepend = null == o ? t.props.prepend : o;
    var i = e.getAttribute("data-counter-append");
    a.append = null == i ? t.props.append : i;
    var l = e.getAttribute("data-counter-intval");
    (a.intvalues = null == l ? t.props.intvalues : l),
      (a.step = (a.end - a.start) / (a.duration / t.props.interval)),
      (a.val = a.start),
      t.elems.push(a),
      (a = {});
  });
}
function iframeVid(e) {
  for (var t in ((this.defaults = {
    selector: ".in-iframe",
    url: "",
    width: 900,
    height: 506,
  }),
  (this.props = {}),
  this.defaults))
    void 0 !== t &&
      ((this.props[t] = this.defaults[t]),
      e.hasOwnProperty(t) &&
        this.props.hasOwnProperty(t) &&
        (this.props[t] = e[t]));
  if (null != document.querySelector(this.props.selector)) {
    let e = document.querySelector(this.props.selector),
      t = `<iframe src="${this.props.url}" width="${this.props.width}" height="${this.props.height}" data-uk-video="automute: true"></iframe>`;
    new IntersectionObserver(
      function (n) {
        !0 === n[0].isIntersecting &&
          1 === e.children.length &&
          e.insertAdjacentHTML("beforeend", t);
      },
      { threshold: [0] }
    ).observe(document.querySelector(this.props.selector));
  }
}
!(function () {
  const e = document.querySelector(".in-totop");
  window.addEventListener("scroll", function () {
    setTimeout(function () {
      window.scrollY > 300
        ? ((e.style.opacity = 1), e.classList.add("uk-animation-slide-top"))
        : ((e.style.opacity -= 0.1),
          e.classList.remove("uk-animation-slide-top"));
    }, 400);
  });
})(),
  document.addEventListener("DOMContentLoaded", () => {
    const e = document.getElementById("contact-form"),
      t = document.getElementById("sendemail");
    void 0 !== t &&
      null != t &&
      t.addEventListener("click", (t) => {
        t.preventDefault();
        ajaxRequest(
          "POST",
          "./sendmail.php",
          serialize(document.getElementById("contact-form")),
          (t, n) => {
            if (t) {
              const t = JSON.parse(n);
              t.isSuccess
                ? (UIkit.notification(
                    "<i class='fas fa-check-circle uk-margin-small-right'></i> Your message has been sent successfully. Thank you!",
                    { timeout: 3e3, status: "primary", pos: "bottom-right" }
                  ),
                  e.reset())
                : (t.nameError &&
                    document
                      .getElementById("name")
                      .classList.add("uk-form-danger"),
                  document
                    .getElementById("name")
                    .addEventListener("click", function () {
                      document
                        .getElementById("name")
                        .classList.remove("uk-form-danger");
                    }),
                  t.emailError &&
                    document
                      .getElementById("email")
                      .classList.add("uk-form-danger"),
                  document
                    .getElementById("email")
                    .addEventListener("click", function () {
                      document
                        .getElementById("email")
                        .classList.remove("uk-form-danger");
                    }),
                  t.subjectError &&
                    document
                      .getElementById("subject")
                      .classList.add("uk-form-danger"),
                  document
                    .getElementById("subject")
                    .addEventListener("click", function () {
                      document
                        .getElementById("subject")
                        .classList.remove("uk-form-danger");
                    }),
                  t.messageError &&
                    document
                      .getElementById("message")
                      .classList.add("uk-form-danger"),
                  document
                    .getElementById("message")
                    .addEventListener("click", function () {
                      document
                        .getElementById("message")
                        .classList.remove("uk-form-danger");
                    }));
            }
          }
        );
      });
  }),
  (counterUp.prototype.start = function () {
    "use strict";
    var e = this;
    if (null != document.querySelector(e.props.selector)) {
      new IntersectionObserver(
        function (t) {
          !0 === t[0].isIntersecting &&
            (this.intervalID = setInterval(function () {
              e.updating || e.update();
            }, e.props.interval));
        },
        { threshold: [0] }
      ).observe(document.querySelector(e.props.selector));
    }
  }),
  (counterUp.prototype.update = function () {
    "use strict";
    this.updating = !0;
    var e = !0;
    this.elems.forEach(function (t) {
      (t.val += t.step),
        t.val < t.end
          ? (1 == t.intvalues
              ? (t.obj.innerHTML =
                  t.prepend + Math.floor(t.val).toString() + t.append)
              : (t.obj.innerHTML =
                  t.prepend +
                  (Math.round(100 * t.val) / 100).toString() +
                  t.append),
            (e = !1))
          : (t.obj.innerHTML = t.prepend + t.end.toString() + t.append);
    }),
      1 == e && clearInterval(this.intervalID),
      (this.updating = !1);
  }),
  document.querySelectorAll(".media").length > 0 && Plyr.setup(".media");
window.addEventListener("load", function () {
  document.querySelector("body").classList.add("loaded");
}),
  (function () {
    const e = location.pathname.slice(location.pathname.lastIndexOf("/") + 1),
      t = window.matchMedia("(max-width: 960px)"),
      n = document.querySelectorAll(".uk-navbar-nav li"),
      a = document.querySelectorAll(".uk-nav-default li"),
      r = document.querySelectorAll(".uk-navbar-dropdown li"),
      s = document.querySelectorAll(".uk-nav-sub li");
    function o(t) {
      t.forEach(function (n) {
        "/" === location.pathname[location.pathname.length - 1]
          ? t[0].classList.add("uk-active")
          : n.querySelectorAll("a")[0].getAttribute("href") === e &&
            n.classList.add("uk-active");
      });
    }
    function i(t) {
      t.forEach(function (n) {
        if (
          t.length > 0 &&
          n.querySelectorAll("a")[0].getAttribute("href") === e
        ) {
          const e = n.parentElement.parentElement,
            t = n.parentElement.parentElement.parentElement.parentElement;
          "LI" === e.parentElement.tagName
            ? e.parentElement.classList.add("uk-active")
            : "LI" === e.tagName
            ? e.classList.add("uk-active")
            : t.parentElement.classList.add("uk-active");
        }
      });
    }
    t.matches && (o(a), i(s)), o(n), i(r);
  })(),
  (function () {
    const e = document.querySelectorAll(".uk-navbar-nav li.uk-active"),
      t = document.getElementsByClassName("uk-breadcrumb");
    if (
      t.length > 0 &&
      "blog-article.html" !=
        location.pathname.slice(location.pathname.lastIndexOf("/") + 1)
    ) {
      const n = document
        .querySelectorAll(".uk-navbar-nav li")[0]
        .getElementsByTagName("a")[0].pathname;
      (t[0].innerHTML = `<li><a href="${n.slice(
        location.pathname.lastIndexOf("/") + 1
      )}">Home</a></li>`),
        e.forEach(function (e) {
          const n = document.createElement("li");
          (breadTitle = e.childNodes[0].innerText),
            (n.innerHTML = `<a href="${e.children[0].attributes[0].textContent}">${breadTitle}</a>`),
            t[0].insertBefore(n, t[0].firstElementChild.previousSibling);
        }),
        (t[0].lastChild.innerHTML = `<span>${breadTitle}</span>`);
    }
  })();
const mainNav = document.querySelector(".uk-navbar-nav");
if (null !== mainNav) {
  const e = mainNav.cloneNode(!0),
    t = e.querySelectorAll("ul.uk-nav");
  e.classList.remove("uk-navbar-nav", "uk-visible@m"),
    e.classList.add("uk-nav-default", "uk-nav-parent-icon"),
    e.setAttribute("data-uk-nav", ""),
    Array.from(e.children).forEach(function (e) {
      2 == e.children.length &&
        (e.classList.add("uk-parent"),
        e.querySelectorAll(".fa-chevron-down")[0].remove());
    });
  const n = (e) => e.replaceWith(...e.childNodes);
  t.forEach(function (e) {
    e.classList.remove("uk-nav", "uk-navbar-dropdown-nav"),
      e.classList.add("uk-nav-sub"),
      n(e.parentElement),
      null !== e.querySelector("a.uk-disabled") &&
        (n(e.parentElement.parentElement),
        n(e.parentElement),
        e.querySelector("a.uk-disabled").parentElement.parentElement.remove());
  });
  const a = document.querySelector(".in-optional-nav");
  let r = "";
  null !== a &&
    a.children.length > 0 &&
    (r = `<a href="${a.children[0].pathname.substr(
      1
    )}" class="uk-button uk-button-primary uk-border-rounded uk-align-center">${
      a.children[0].innerText
    }<i class="fas fa-sign-in-alt uk-margin-small-left"></i></a>`);
  const s = `\n    <div class="uk-navbar-item in-mobile-nav uk-hidden@m">\n        <a class="uk-button" href="#modal-full" data-uk-toggle><i class="fas fa-bars"></i></a>\n    </div>\n    <div id="modal-full" class="uk-modal-full" data-uk-modal>\n        <div class="uk-modal-dialog uk-flex uk-flex-center uk-flex-middle" data-uk-height-viewport>\n            <a class="uk-modal-close-full uk-button"><i class="fas fa-times"></i></a>\n            <div class="uk-width-large uk-padding-large">\n                ${e.outerHTML}\n                ${r}\n            </div>\n        </div>\n    </div>\n    `;
  mainNav.insertAdjacentHTML("afterend", s);
}
function serialize(e) {
  return Array.from(new FormData(e), (e) =>
    e.map(encodeURIComponent).join("=")
  ).join("&");
}
function ajaxRequest(e, t, n, a) {
  const r = new XMLHttpRequest();
  r.open(e, t, !0),
    r.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
    r.send(n),
    (r.onreadystatechange = function () {
      4 == r.readyState && 200 == r.status ? a(!0, r.responseText) : a(!1, "");
    });
}
function emptyElements(e) {
  for (let t of e) t.innerHTML = "";
}
function counterUp(e) {
  "use strict";
  this.defaults = {
    duration: 2e3,
    prepend: "",
    append: "",
    selector: ".in-counter",
    start: 0,
    end: 100,
    intvalues: !1,
    interval: 100,
  };
  var t = this;
  for (var n in ((this.upating = !1),
  (this.intervalID = null),
  (this.props = {}),
  this.defaults))
    void 0 !== n &&
      ((t.props[n] = t.defaults[n]),
      e.hasOwnProperty(n) && t.props.hasOwnProperty(n) && (t.props[n] = e[n]));
  (this.domelems = document.querySelectorAll(this.props.selector)),
    (this.elems = []);
  var a = {};
  this.domelems.forEach(function (e) {
    a.obj = e;
    var n = parseInt(e.getAttribute("data-counter-start"));
    isNaN(n) ? (a.start = t.props.start) : (a.start = n);
    var r = parseInt(e.getAttribute("data-counter-end"));
    isNaN(r) ? (a.end = t.props.end) : (a.end = r);
    var s = parseInt(e.getAttribute("data-counter-duration"));
    isNaN(s) ? (a.duration = t.props.duration) : (a.duration = s);
    var o = e.getAttribute("data-counter-prepend");
    a.prepend = null == o ? t.props.prepend : o;
    var i = e.getAttribute("data-counter-append");
    a.append = null == i ? t.props.append : i;
    var l = e.getAttribute("data-counter-intval");
    (a.intvalues = null == l ? t.props.intvalues : l),
      (a.step = (a.end - a.start) / (a.duration / t.props.interval)),
      (a.val = a.start),
      t.elems.push(a),
      (a = {});
  });
}
function iframeVid(e) {
  for (var t in ((this.defaults = {
    selector: ".in-iframe",
    url: "",
    width: 900,
    height: 506,
  }),
  (this.props = {}),
  this.defaults))
    void 0 !== t &&
      ((this.props[t] = this.defaults[t]),
      e.hasOwnProperty(t) &&
        this.props.hasOwnProperty(t) &&
        (this.props[t] = e[t]));
  if (null != document.querySelector(this.props.selector)) {
    let e = document.querySelector(this.props.selector),
      t = `<iframe src="${this.props.url}" width="${this.props.width}" height="${this.props.height}" data-uk-video="automute: true"></iframe>`;
    new IntersectionObserver(
      function (n) {
        !0 === n[0].isIntersecting &&
          1 === e.children.length &&
          e.insertAdjacentHTML("beforeend", t);
      },
      { threshold: [0] }
    ).observe(document.querySelector(this.props.selector));
  }
}
!(function () {
  const e = document.querySelector(".in-totop");
  window.addEventListener("scroll", function () {
    setTimeout(function () {
      window.scrollY > 300
        ? ((e.style.opacity = 1), e.classList.add("uk-animation-slide-top"))
        : ((e.style.opacity -= 0.1),
          e.classList.remove("uk-animation-slide-top"));
    }, 400);
  });
})(),
  document.addEventListener("DOMContentLoaded", () => {
    const e = document.getElementById("contact-form"),
      t = document.getElementById("sendemail");
    void 0 !== t &&
      null != t &&
      t.addEventListener("click", (t) => {
        t.preventDefault();
        ajaxRequest(
          "POST",
          "./sendmail.php",
          serialize(document.getElementById("contact-form")),
          (t, n) => {
            if (t) {
              const t = JSON.parse(n);
              t.isSuccess
                ? (UIkit.notification(
                    "<i class='fas fa-check-circle uk-margin-small-right'></i> Your message has been sent successfully. Thank you!",
                    { timeout: 3e3, status: "primary", pos: "bottom-right" }
                  ),
                  e.reset())
                : (t.nameError &&
                    document
                      .getElementById("name")
                      .classList.add("uk-form-danger"),
                  document
                    .getElementById("name")
                    .addEventListener("click", function () {
                      document
                        .getElementById("name")
                        .classList.remove("uk-form-danger");
                    }),
                  t.emailError &&
                    document
                      .getElementById("email")
                      .classList.add("uk-form-danger"),
                  document
                    .getElementById("email")
                    .addEventListener("click", function () {
                      document
                        .getElementById("email")
                        .classList.remove("uk-form-danger");
                    }),
                  t.subjectError &&
                    document
                      .getElementById("subject")
                      .classList.add("uk-form-danger"),
                  document
                    .getElementById("subject")
                    .addEventListener("click", function () {
                      document
                        .getElementById("subject")
                        .classList.remove("uk-form-danger");
                    }),
                  t.messageError &&
                    document
                      .getElementById("message")
                      .classList.add("uk-form-danger"),
                  document
                    .getElementById("message")
                    .addEventListener("click", function () {
                      document
                        .getElementById("message")
                        .classList.remove("uk-form-danger");
                    }));
            }
          }
        );
      });
  }),
  (counterUp.prototype.start = function () {
    "use strict";
    var e = this;
    if (null != document.querySelector(e.props.selector)) {
      new IntersectionObserver(
        function (t) {
          !0 === t[0].isIntersecting &&
            (this.intervalID = setInterval(function () {
              e.updating || e.update();
            }, e.props.interval));
        },
        { threshold: [0] }
      ).observe(document.querySelector(e.props.selector));
    }
  }),
  (counterUp.prototype.update = function () {
    "use strict";
    this.updating = !0;
    var e = !0;
    this.elems.forEach(function (t) {
      (t.val += t.step),
        t.val < t.end
          ? (1 == t.intvalues
              ? (t.obj.innerHTML =
                  t.prepend + Math.floor(t.val).toString() + t.append)
              : (t.obj.innerHTML =
                  t.prepend +
                  (Math.round(100 * t.val) / 100).toString() +
                  t.append),
            (e = !1))
          : (t.obj.innerHTML = t.prepend + t.end.toString() + t.append);
    }),
      1 == e && clearInterval(this.intervalID),
      (this.updating = !1);
  }),
  document.querySelectorAll(".media").length > 0 && Plyr.setup(".media");



  /* --------------------------------------------------------------------------
 * File        : config-theme.js
 * Author      : indonez
 * Author URI  : http://www.indonez.com
 *
 * Indonez Copyright 2020 All Rights Reserved.
 * -------------------------------------------------------------------------- 
 * javascript handle initialization
    1. uikit slideshow
    2. Modal iframe
    3. Counter config
 * -------------------------------------------------------------------------- */

'use strict';

const HomepageApp = {
    //----------- 1. uikit slideshow -----------
    theme_slideshow: function() {
        UIkit.slideshow('.in-slideshow', {
            autoplay: true,
            autoplayInterval: 7000,
            pauseOnHover: false,
            animation: 'fade',
            minHeight: 480,
            maxHeight: 700
        });
    },
    //---------- 2. Modal iframe -----------
    theme_iframe: function() {
        const youtube = new iframeVid({
            selector: '.in-iframe',
            url: 'https://www.youtube.com/embed/F3QpgXBtDeo',
            width: 900,
            height: 506
        });
    },
    //---------- 3. Counter config -----------
    theme_counter: function() {
        const counter = new counterUp({
            selector: '.count',
            start: 0,
            duration: 3200,
            intvalues: true,
            interval: 50
        });
        counter.start();
    },
    theme_init: function() {
        HomepageApp.theme_slideshow();
        HomepageApp.theme_iframe();
        HomepageApp.theme_counter();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    HomepageApp.theme_init();
});