/*!
 * ScrollSmoother 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2022, GreenSock. All rights reserved.
 * This plugin is a membership benefit of Club GreenSock and is only authorized for use in sites/apps/products developed by individuals/companies with an active Club GreenSock membership. See https://greensock.com/club
 * @author: Jack Doyle, jack@greensock.com
 */
!(function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t(((e = e || self).window = e.window || {}));
})(this, function(e) {
    "use strict";

    function _defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
    }

    function s() {
        return "undefined" != typeof window;
    }

    function t() {
        return D || (s() && (D = window.gsap) && D.registerPlugin && D);
    }
    var D,
        L,
        O,
        N,
        U,
        K,
        q,
        V,
        j,
        J,
        Y,
        W,
        G,
        Q,
        X,
        r =
        ((ScrollSmoother.register = function register(e) {
                return (
                    L ||
                    ((D = e || t()),
                        s() && window.document && ((O = window), (N = document), (U = N.documentElement), (K = N.body)),
                        D &&
                        ((q = D.utils.toArray),
                            (V = D.utils.clamp),
                            (Y = D.parseEase("expo")),
                            (Q = D.core.context || function() {}),
                            (X = D.delayedCall(0.2, function() {
                                return j.isRefreshing || (J && J.refresh());
                            }).pause()),
                            (j = D.core.globals().ScrollTrigger),
                            D.core.globals("ScrollSmoother", ScrollSmoother),
                            K && j && ((W = j.core._getVelocityProp), (G = j.core._inputObserver), (ScrollSmoother.refresh = j.refresh), (L = 1)))),
                    L
                );
            }),
            (function _createClass(e, t, r) {
                return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e;
            })(ScrollSmoother, [{
                key: "progress",
                get: function get() {
                    return this.scrollTrigger ? this.scrollTrigger.animation._time / 100 : 0;
                },
            }, ]),
            ScrollSmoother);

    function ScrollSmoother(t) {
        var o = this;
        L || ScrollSmoother.register(D) || console.warn("Please gsap.registerPlugin(ScrollSmoother)"), (t = this.vars = t || {}), J && J.kill(), Q((J = this));

        function za() {
            return z.update(-A);
        }

        function Ba() {
            return (n.style.overflow = "visible");
        }

        function Da(e) {
            e.update();
            var t = e.getTween();
            t && (t.pause(), (t._time = t._dur), (t._tTime = t._tDur)), (d = !1), e.animation.progress(e.progress, !0);
        }

        function Ea(e, t) {
            ((e !== A && !u) || t) && (x && (e = Math.round(e)), C && ((n.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + e + ", 0, 1)"), (n._gsap.y = e + "px")), (F = e - A), (A = e), j.isUpdating || j.update());
        }

        function Fa(e) {
            return arguments.length ? (e < 0 && (e = 0), (M.y = -e), (d = !0), u ? (A = -e) : Ea(-e), j.isRefreshing ? i.update() : _(e), this) : -A;
        }

        function Ha(e) {
            (b.scrollTop = 0), (e.target.contains && e.target.contains(b)) || (E && !1 === E(o, e)) || (j.isInViewport(e.target) || e.target === g || o.scrollTo(e.target, !1, "center center"), (g = e.target));
        }

        function Ia(e) {
            var r, n, o, i;
            S.forEach(function(t) {
                (r = t.pins),
                (i = t.markers),
                e.forEach(function(e) {
                    t.trigger &&
                        e.trigger &&
                        t !== e &&
                        (e.trigger === t.trigger || e.pinnedContainer === t.trigger || t.trigger.contains(e.trigger)) &&
                        ((n = e.start),
                            (o = (n - t.start - t.offset) / t.ratio - (n - t.start)),
                            r.forEach(function(e) {
                                return (o -= e.distance / t.ratio - e.distance);
                            }),
                            e.setPositions(n + o, e.end + o),
                            e.markerStart && i.push(D.quickSetter([e.markerStart, e.markerEnd], "y", "px")),
                            e.pin && 0 < e.end && ((o = e.end - e.start), r.push({
                                start: e.start,
                                end: e.end,
                                distance: o,
                                trig: e
                            }), t.setPositions(t.start, t.end + o), t.vars.onRefresh(t)));
                });
            });
        }

        function Ja() {
            Ba(),
                requestAnimationFrame(Ba),
                S &&
                (S.forEach(function(e) {
                        var t = e.start,
                            r = e.auto ? Math.min(j.maxScroll(e.scroller), e.end) : t + (e.end - t) / e.ratio,
                            n = (r - e.end) / 2;
                        (t -= n), (r -= n), (e.offset = n || 1e-4), (e.pins.length = 0), e.setPositions(Math.min(t, r), Math.max(t, r)), e.vars.onRefresh(e);
                    }),
                    Ia(j.sort())),
                z.reset();
        }

        function Ka() {
            return j.addEventListener("refresh", Ja);
        }

        function La() {
            return (
                S &&
                S.forEach(function(e) {
                    return e.vars.onRefresh(e);
                })
            );
        }

        function Ma() {
            return (
                S &&
                S.forEach(function(e) {
                    return e.vars.onRefreshInit(e);
                }),
                La
            );
        }

        function Na(t, r, n, o) {
            return function() {
                var e = "function" == typeof r ? r(n, o) : r;
                return e || 0 === e || (e = o.getAttribute("data-" + k + t) || ("speed" === t ? 1 : 0)), o.setAttribute("data-" + k + t, e), "auto" === e ? e : parseFloat(e);
            };
        }

        function Oa(r, e, t, n, o) {
            function Db() {
                (e = f()), (t = h()), (i = parseFloat(e) || 1), (c = (a = "auto" === e) ? 0 : 0.5), l && l.kill(), (l = t && D.to(r, {
                    ease: Y,
                    overwrite: !1,
                    y: "+=0",
                    duration: t
                })), s && ((s.ratio = i), (s.autoSpeed = a));
            }

            function Eb() {
                (g.y = d + "px"), g.renderTransform(1), Db();
            }

            function Ib(e) {
                if (a) {
                    Eb();
                    var t = (function _autoDistance(e, t) {
                        var r,
                            n,
                            o = e.parentNode || U,
                            i = e.getBoundingClientRect(),
                            s = o.getBoundingClientRect(),
                            a = s.top - i.top,
                            l = s.bottom - i.bottom,
                            c = (Math.abs(a) > Math.abs(l) ? a : l) / (1 - t),
                            u = -c * t;
                        return 0 < c && ((n = 0.5 == (r = s.height / (O.innerHeight + s.height)) ? 2 * s.height : 2 * Math.min(s.height, (-c * r) / (2 * r - 1)) * (t || 1)), (u += t ? -n * t : -n / 2), (c += n)), {
                            change: c,
                            offset: u
                        };
                    })(r, V(0, 1, -e.start / (e.end - e.start)));
                    (m = t.change), (u = t.offset);
                } else(m = (e.end - e.start) * (1 - i)), (u = 0);
                p.forEach(function(e) {
                        return (m -= e.distance * (1 - i));
                    }),
                    e.vars.onUpdate(e),
                    l && l.progress(1);
            }
            o = ("function" == typeof o ? o(n, r) : o) || 0;
            var i,
                s,
                a,
                l,
                c,
                u,
                f = Na("speed", e, n, r),
                h = Na("lag", t, n, r),
                d = D.getProperty(r, "y"),
                g = r._gsap,
                p = [],
                v = [],
                m = 0;
            return (
                Db(),
                (1 !== i || a || l) &&
                (Ib(
                        (s = j.create({
                            trigger: a ? r.parentNode : r,
                            start: "top bottom+=" + o,
                            end: "bottom top-=" + o,
                            scroller: b,
                            scrub: !0,
                            refreshPriority: -999,
                            onRefreshInit: Eb,
                            onRefresh: Ib,
                            onKill: function onKill(e) {
                                var t = S.indexOf(e);
                                0 <= t && S.splice(t, 1), Eb();
                            },
                            onUpdate: function onUpdate(e) {
                                var t,
                                    r,
                                    n,
                                    o = d + m * (e.progress - c),
                                    i = p.length,
                                    s = 0;
                                if (e.offset) {
                                    if (i) {
                                        for (r = -A, n = e.end; i--;) {
                                            if ((t = p[i]).trig.isActive || (r >= t.start && r <= t.end))
                                                return void(l && ((t.trig.progress += t.trig.direction < 0 ? 0.001 : -0.001), t.trig.update(0, 0, 1), l.resetTo("y", parseFloat(g.y), -F, !0), I && l.progress(1)));
                                            r > t.end && (s += t.distance), (n -= t.distance);
                                        }
                                        o = d + s + m * ((D.utils.clamp(e.start, e.end, r) - e.start - s) / (n - e.start) - c);
                                    }
                                    (o = (function _round(e) {
                                        return Math.round(1e5 * e) / 1e5 || 0;
                                    })(o + u)),
                                    v.length &&
                                        !a &&
                                        v.forEach(function(e) {
                                            return e(o - s);
                                        }),
                                        l ? (l.resetTo("y", o, -F, !0), I && l.progress(1)) : ((g.y = o + "px"), g.renderTransform(1));
                                }
                            },
                        }))
                    ),
                    (D.core.getCache(s.trigger).stRevert = Ma),
                    (s.startY = d),
                    (s.pins = p),
                    (s.markers = v),
                    (s.ratio = i),
                    (s.autoSpeed = a),
                    (r.style.willChange = "transform")),
                s
            );
        }
        var n,
            b,
            e,
            i,
            S,
            s,
            a,
            l,
            c,
            u,
            r,
            f,
            h,
            d,
            g,
            p = t.smoothTouch,
            v = t.onUpdate,
            m = t.onStop,
            w = t.smooth,
            E = t.onFocusIn,
            T = t.normalizeScroll,
            x = t.wholePixels,
            P = this,
            R =
            "undefined" != typeof ResizeObserver &&
            !1 !== t.autoResize &&
            new ResizeObserver(function() {
                return j.isRefreshing || X.restart(!0);
            }),
            k = t.effectsPrefix || "",
            _ = j.getScrollFunc(O),
            C = 1 === j.isTouch ? (!0 === p ? 0.8 : parseFloat(p) || 0) : 0 === w || !1 === w ? 0 : parseFloat(w) || 0.8,
            H = (C && +t.speed) || 1,
            A = 0,
            F = 0,
            I = 1,
            z = W(0),
            M = {
                y: 0
            };

        function refreshHeight() {
            return (e = n.clientHeight), (n.style.overflow = "visible"), (K.style.height = O.innerHeight + (e - O.innerHeight) / H + "px"), e - O.innerHeight;
        }
        Ka(),
            j.addEventListener("killAll", Ka),
            D.delayedCall(0.5, function() {
                return (I = 0);
            }),
            (this.scrollTop = Fa),
            (this.scrollTo = function(e, t, r) {
                var n = D.utils.clamp(0, j.maxScroll(O), isNaN(e) ? o.offset(e, r) : +e);
                t ? (u ? D.to(o, {
                    duration: C,
                    scrollTop: n,
                    overwrite: "auto",
                    ease: Y
                }) : _(n)) : Fa(n);
            }),
            (this.offset = function(e, t) {
                var r,
                    n = (e = q(e)[0]).style.cssText,
                    o = j.create({
                        trigger: e,
                        start: t || "top top"
                    });
                return S && Ia([o]), (r = o.start), o.kill(!1), (e.style.cssText = n), (D.core.getCache(e).uncache = 1), r;
            }),
            (this.content = function(e) {
                if (arguments.length) {
                    var t = q(e || "#smooth-content")[0] || console.warn("ScrollSmoother needs a valid content element.") || K.children[0];
                    return t !== n && ((c = (n = t).getAttribute("style") || ""), R && R.observe(n), D.set(n, {
                        overflow: "visible",
                        width: "100%",
                        boxSizing: "border-box",
                        y: "+=0"
                    }), C || D.set(n, {
                        clearProps: "transform"
                    })), this;
                }
                return n;
            }),
            (this.wrapper = function(e) {
                return arguments.length ?
                    ((b =
                            q(e || "#smooth-wrapper")[0] ||
                            (function _wrap(e) {
                                var t = N.querySelector(".ScrollSmoother-wrapper");
                                return t || ((t = N.createElement("div")).classList.add("ScrollSmoother-wrapper"), e.parentNode.insertBefore(t, e), t.appendChild(e)), t;
                            })(n)),
                        (l = b.getAttribute("style") || ""),
                        refreshHeight(),
                        D.set(
                            b,
                            C ?
                            {
                                overflow: "hidden",
                                position: "fixed",
                                height: "100%",
                                width: "100%",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0
                            } :
                            {
                                overflow: "visible",
                                position: "relative",
                                width: "100%",
                                height: "auto",
                                top: "auto",
                                bottom: "auto",
                                left: "auto",
                                right: "auto"
                            }
                        ),
                        this) :
                    b;
            }),
            (this.effects = function(e, t) {
                if (((S = S || []), !e)) return S.slice(0);
                (e = q(e)).forEach(function(e) {
                    for (var t = S.length; t--;) S[t].trigger === e && S[t].kill();
                });
                t = t || {};
                var r,
                    n,
                    o = t.speed,
                    i = t.lag,
                    s = t.effectsPadding,
                    a = [];
                for (r = 0; r < e.length; r++)(n = Oa(e[r], o, i, r, s)) && a.push(n);
                return S.push.apply(S, a), a;
            }),
            (this.sections = function(e, t) {
                if (((s = s || []), !e)) return s.slice(0);
                var r = q(e).map(function(t) {
                    return j.create({
                        trigger: t,
                        start: "top 120%",
                        end: "bottom -20%",
                        onToggle: function onToggle(e) {
                            (t.style.opacity = e.isActive ? "1" : "0"), (t.style.pointerEvents = e.isActive ? "all" : "none");
                        },
                    });
                });
                return t && t.add ? s.push.apply(s, r) : (s = r.slice(0)), r;
            }),
            this.content(t.content),
            this.wrapper(t.wrapper),
            (this.render = function(e) {
                return Ea(e || 0 === e ? e : A);
            }),
            (this.getVelocity = function() {
                return z.getVelocity(-A);
            }),
            j.scrollerProxy(b, {
                scrollTop: Fa,
                scrollHeight: function scrollHeight() {
                    return refreshHeight() && K.scrollHeight;
                },
                fixedMarkers: !1 !== t.fixedMarkers && !!C,
                content: n,
                getBoundingClientRect: function getBoundingClientRect() {
                    return {
                        top: 0,
                        left: 0,
                        width: O.innerWidth,
                        height: O.innerHeight
                    };
                },
            }),
            j.defaults({
                scroller: b
            });
        var B = j.getAll().filter(function(e) {
            return e.scroller === O || e.scroller === b;
        });
        B.forEach(function(e) {
                return e.revert(!0, !0);
            }),
            (i = j.create({
                animation: D.fromTo(
                    M, {
                        y: 0
                    }, {
                        y: function y() {
                            return -refreshHeight();
                        },
                        immediateRender: !1,
                        ease: "none",
                        data: "ScrollSmoother",
                        duration: 100,
                        onUpdate: function onUpdate() {
                            if (this._dur) {
                                var e = d;
                                e && (Da(i), (M.y = A)), Ea(M.y, e), za(), v && !u && v(P);
                            }
                        },
                    }
                ),
                onRefreshInit: function onRefreshInit(e) {
                    if (S) {
                        var t = j.getAll().filter(function(e) {
                            return !!e.pin;
                        });
                        S.forEach(function(r) {
                            r.vars.pinnedContainer ||
                                t.forEach(function(e) {
                                    if (e.pin.contains(r.trigger)) {
                                        var t = r.vars;
                                        (t.pinnedContainer = e.pin), (r.vars = null), r.init(t, r.animation);
                                    }
                                });
                        });
                    }
                    var r = e.getTween();
                    (h = r && r._end > r._dp._time),
                    (f = A),
                    (M.y = 0),
                    C &&
                        ((b.style.pointerEvents = "none"),
                            (b.scrollTop = 0),
                            setTimeout(function() {
                                return b.style.removeProperty("pointer-events");
                            }, 50));
                },
                onRefresh: function onRefresh(e) {
                    e.animation.invalidate(), e.setPositions(e.start, refreshHeight() / H), h || Da(e), (M.y = -_()), Ea(M.y), I || e.animation.progress(D.utils.clamp(0, 1, f / -e.end)), h && ((e.progress -= 0.001), e.update());
                },
                id: "ScrollSmoother",
                scroller: O,
                invalidateOnRefresh: !0,
                start: 0,
                refreshPriority: -9999,
                end: function end() {
                    return refreshHeight() / H;
                },
                onScrubComplete: function onScrubComplete() {
                    z.reset(), m && m(o);
                },
                scrub: C || !0,
            })),
            (this.smooth = function(e) {
                return arguments.length && ((H = ((C = e || 0) && +t.speed) || 1), i.scrubDuration(e)), i.getTween() ? i.getTween().duration() : 0;
            }),
            i.getTween() && (i.getTween().vars.ease = t.ease || Y),
            (this.scrollTrigger = i),
            t.effects && this.effects(!0 === t.effects ? "[data-" + k + "speed], [data-" + k + "lag]" : t.effects, {
                effectsPadding: t.effectsPadding
            }),
            t.sections && this.sections(!0 === t.sections ? "[data-section]" : t.sections),
            B.forEach(function(e) {
                (e.vars.scroller = b), e.revert(!1, !0), e.init(e.vars, e.animation);
            }),
            (this.paused = function(e, t) {
                return arguments.length ?
                    (!!u !== e &&
                        (e ?
                            (i.getTween() && i.getTween().pause(),
                                _(-A),
                                z.reset(),
                                (r = j.normalizeScroll()) && r.disable(),
                                ((u = j.observe({
                                    preventDefault: !0,
                                    type: "wheel,touch,scroll",
                                    debounce: !1,
                                    allowClicks: !0,
                                    onChangeY: function onChangeY() {
                                        return Fa(-A);
                                    },
                                })).nested = G(U, "wheel,touch,scroll", !0, !1 !== t))) :
                            (u.nested.kill(), u.kill(), (u = 0), r && r.enable(), (i.progress = (-A - i.start) / (i.end - i.start)), Da(i))),
                        this) :
                    !!u;
            }),
            (this.kill = this.revert = function() {
                o.paused(!1), Da(i), i.kill();
                for (var e = (S || []).concat(s || []), t = e.length; t--;) e[t].kill();
                j.scrollerProxy(b), j.removeEventListener("killAll", Ka), j.removeEventListener("refresh", Ja), (b.style.cssText = l), (n.style.cssText = c);
                var r = j.defaults({});
                r && r.scroller === b && j.defaults({
                    scroller: O
                }), o.normalizer && j.normalizeScroll(!1), clearInterval(a), (J = null), R && R.disconnect(), K.style.removeProperty("height"), O.removeEventListener("focusin", Ha);
            }),
            (this.refresh = function(e, t) {
                return i.refresh(e, t);
            }),
            T && (this.normalizer = j.normalizeScroll(!0 === T ? {
                debounce: !0,
                content: !C && n
            } : T)),
            j.config(t),
            "overscrollBehavior" in O.getComputedStyle(K) && D.set([K, U], {
                overscrollBehavior: "none"
            }),
            "scrollBehavior" in O.getComputedStyle(K) && D.set([K, U], {
                scrollBehavior: "auto"
            }),
            O.addEventListener("focusin", Ha),
            (a = setInterval(za, 250)),
            "loading" === N.readyState ||
            requestAnimationFrame(function() {
                return j.refresh();
            });
    }
    (r.version = "3.11.4"),
    (r.create = function(e) {
        return J && e && J.content() === q(e.content)[0] ? J : new r(e);
    }),
    (r.get = function() {
        return J;
    }),
    t() && D.registerPlugin(r),
        (e.ScrollSmoother = r),
        (e.default = r);
    if (typeof window === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
    } else {
        delete e.default;
    }
});