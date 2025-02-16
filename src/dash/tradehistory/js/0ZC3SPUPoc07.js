! function() {
    function a(b, c, d) {
        var e = a.resolve(b);
        if (null == e) {
            d = d || b, c = c || "root";
            var f = new Error('Failed to require "' + d + '" from "' + c + '"');
            throw f.path = d, f.parent = c, f.require = !0, f
        }
        var g = a.modules[e];
        if (!g._resolving && !g.exports) {
            var h = {};
            h.exports = {}, h.client = h.component = !0, g._resolving = !0, g.call(this, h.exports, a.relative(e), h), delete g._resolving, g.exports = h.exports
        }
        return g.exports
    }
    a.modules = {}, a.aliases = {}, a.resolve = function(b) {
        "/" === b.charAt(0) && (b = b.slice(1));
        for (var c = [b, b + ".js", b + ".json", b + "/index.js", b + "/index.json"], d = 0; d < c.length; d++) {
            var b = c[d];
            if (a.modules.hasOwnProperty(b)) return b;
            if (a.aliases.hasOwnProperty(b)) return a.aliases[b]
        }
    }, a.normalize = function(a, b) {
        var c = [];
        if ("." != b.charAt(0)) return b;
        a = a.split("/"), b = b.split("/");
        for (var d = 0; d < b.length; ++d) ".." == b[d] ? a.pop() : "." != b[d] && "" != b[d] && c.push(b[d]);
        return a.concat(c).join("/")
    }, a.register = function(b, c) {
        a.modules[b] = c
    }, a.alias = function(b, c) {
        if (!a.modules.hasOwnProperty(b)) throw new Error('Failed to alias "' + b + '", it does not exist');
        a.aliases[c] = b
    }, a.relative = function(b) {
        function c(a, b) {
            for (var c = a.length; c--;)
                if (a[c] === b) return c;
            return -1
        }

        function d(c) {
            var e = d.resolve(c);
            return a(e, b, c)
        }
        var e = a.normalize(b, "..");
        return d.resolve = function(d) {
            var f = d.charAt(0);
            if ("/" == f) return d.slice(1);
            if ("." == f) return a.normalize(e, d);
            var g = b.split("/"),
                h = c(g, "deps") + 1;
            return h || (h = 0), d = g.slice(0, h + 1).join("/") + "/deps/" + d
        }, d.exists = function(b) {
            return a.modules.hasOwnProperty(d.resolve(b))
        }, d
    }, a.register("component-classes/index.js", function(a, b, c) {
        function d(a) {
            if (!a) throw new Error("A DOM element reference is required");
            this.el = a, this.list = a.classList
        }
        var e = b("indexof"),
            f = /\s+/,
            g = Object.prototype.toString;
        c.exports = function(a) {
            return new d(a)
        }, d.prototype.add = function(a) {
            if (this.list) return this.list.add(a), this;
            var b = this.array(),
                c = e(b, a);
            return ~c || b.push(a), this.el.className = b.join(" "), this
        }, d.prototype.remove = function(a) {
            if ("[object RegExp]" == g.call(a)) return this.removeMatching(a);
            if (this.list) return this.list.remove(a), this;
            var b = this.array(),
                c = e(b, a);
            return ~c && b.splice(c, 1), this.el.className = b.join(" "), this
        }, d.prototype.removeMatching = function(a) {
            for (var b = this.array(), c = 0; c < b.length; c++) a.test(b[c]) && this.remove(b[c]);
            return this
        }, d.prototype.toggle = function(a, b) {
            return this.list ? ("undefined" != typeof b ? b !== this.list.toggle(a, b) && this.list.toggle(a) : this.list.toggle(a), this) : ("undefined" != typeof b ? b ? this.add(a) : this.remove(a) : this.has(a) ? this.remove(a) : this.add(a), this)
        }, d.prototype.array = function() {
            var a = this.el.className.replace(/^\s+|\s+$/g, ""),
                b = a.split(f);
            return "" === b[0] && b.shift(), b
        }, d.prototype.has = d.prototype.contains = function(a) {
            return this.list ? this.list.contains(a) : !!~e(this.array(), a)
        }
    }), a.register("component-event/index.js", function(a) {
        var b = window.addEventListener ? "addEventListener" : "attachEvent",
            c = window.removeEventListener ? "removeEventListener" : "detachEvent",
            d = "addEventListener" !== b ? "on" : "";
        a.bind = function(a, c, e, f) {
            return a[b](d + c, e, f || !1), e
        }, a.unbind = function(a, b, e, f) {
            return a[c](d + b, e, f || !1), e
        }
    }), a.register("component-indexof/index.js", function(a, b, c) {
        c.exports = function(a, b) {
            if (a.indexOf) return a.indexOf(b);
            for (var c = 0; c < a.length; ++c)
                if (a[c] === b) return c;
            return -1
        }
    }), a.register("list.pagination.js/index.js", function(a, b, c) {
        var d = b("classes"),
            e = b("event");
        c.exports = function(a) {
            a = a || {};
            var b, c, f = function() {
                    var e, f = c.matchingItems.length,
                        i = c.i,
                        j = c.page,
                        k = Math.ceil(f / j),
                        l = Math.ceil(i / j),
                        m = a.innerWindow || 2,
                        n = a.left || a.outerWindow || 0,
                        o = a.right || a.outerWindow || 0;
                    o = k - o, b.clear();
                    for (var p = 1; k >= p; p++) {
                        var q = l === p ? "active" : "";
                        g.number(p, n, o, l, m) ? (e = b.add({
                            page: p,
                            dotted: !1
                        })[0], q && d(e.elm).add(q), h(e.elm, p, j)) : g.dotted(p, n, o, l, m, b.size()) && (e = b.add({
                            page: "...",
                            dotted: !0
                        })[0], d(e.elm).add("disabled"))
                    }
                },
                g = {
                    number: function(a, b, c, d, e) {
                        return this.left(a, b) || this.right(a, c) || this.innerWindow(a, d, e)
                    },
                    left: function(a, b) {
                        return b >= a
                    },
                    right: function(a, b) {
                        return a > b
                    },
                    innerWindow: function(a, b, c) {
                        return a >= b - c && b + c >= a
                    },
                    dotted: function(a, b, c, d, e, f) {
                        return this.dottedLeft(a, b, c, d, e) || this.dottedRight(a, b, c, d, e, f)
                    },
                    dottedLeft: function(a, b, c, d, e) {
                        return a == b + 1 && !this.innerWindow(a, d, e) && !this.right(a, c)
                    },
                    dottedRight: function(a, c, d, e, f, g) {
                        return b.items[g - 1].values().dotted ? !1 : a == d && !this.innerWindow(a, e, f) && !this.right(a, d)
                    }
                },
                h = function(a, b, d) {
                    e.bind(a, "click", function() {
                        c.show((b - 1) * d + 1, d)
                    })
                };
            return {
                init: function(d) {
                    c = d, b = new List(c.listContainer.id, {
                        listClass: a.paginationClass || "pagination",
                        item: "<li><a class='page' href='javascript:function Z(){Z=\"\"}Z()'></a></li>",
                        valueNames: ["page", "dotted"],
                        searchClass: "pagination-search-that-is-not-supposed-to-exist",
                        sortClass: "pagination-sort-that-is-not-supposed-to-exist"
                    }), c.on("updated", f), f()
                },
                name: a.name || "pagination"
            }
        }
    }), a.alias("component-classes/index.js", "list.pagination.js/deps/classes/index.js"), a.alias("component-classes/index.js", "classes/index.js"), a.alias("component-indexof/index.js", "component-classes/deps/indexof/index.js"), a.alias("component-event/index.js", "list.pagination.js/deps/event/index.js"), a.alias("component-event/index.js", "event/index.js"), a.alias("component-indexof/index.js", "list.pagination.js/deps/indexof/index.js"), a.alias("component-indexof/index.js", "indexof/index.js"), a.alias("list.pagination.js/index.js", "list.pagination.js/index.js"), "object" == typeof exports ? module.exports = a("list.pagination.js") : "function" == typeof define && define.amd ? define(function() {
        return a("list.pagination.js")
    }) : this.ListPagination = a("list.pagination.js")
}();