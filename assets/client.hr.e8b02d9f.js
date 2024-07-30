(()=>{
    "use strict";
    var e, t, n, i = {
        268: (e,t,n)=>{
            var i = n(7774)
              , o = n(917)
              , r = n(403);
            function a(e, t, n, i, o, r, a) {
                return {
                    type: "s/LIST_TEMPLATE",
                    imageId: e,
                    title: t,
                    canvasId: n,
                    x: i,
                    y: o,
                    width: r,
                    height: a
                }
            }
            function s(e) {
                return {
                    type: "s/REM_TEMPLATE",
                    title: e
                }
            }
            function l(e, t) {
                return {
                    type: "s/CHG_TEMPLATE",
                    title: e,
                    props: t
                }
            }
            var c = n(669);
            const u = ["g", "h", "x", "m", "t", "r", "l", "+", "-", "b"];
            var d = n(906)
              , h = n(4890)
              , p = n(3894)
              , f = n(6734);
            const v = {
                showGrid: !1,
                showPixelNotify: !1,
                showMvmCtrls: !1,
                autoZoomIn: !1,
                isPotato: !1,
                isLightGrid: !1,
                compactPalette: !1,
                paletteOpen: !0,
                mute: !1,
                chatNotify: !0,
                cursor: !0,
                menuOpen: !1,
                onlineCanvas: !1,
                dailyPxls: !1,
                noRound: !1,
                style: "default",
                holdPaint: !1,
                easterEgg: !1,
                moveU: 0,
                moveV: 0,
                moveW: 0
            }
              , m = {
                lastFetch: 0,
                totalPixels: 0,
                dailyTotalPixels: 0,
                ranking: 1488,
                dailyRanking: 1488,
                online: {
                    total: 0
                },
                totalRanking: [],
                totalDailyRanking: [],
                dailyCRanking: [],
                prevTop: [],
                onlineStats: [],
                cHistStats: [],
                cHourlyStats: [],
                histStats: {
                    users: [],
                    stats: []
                },
                pDailyStats: [],
                pHourlyStats: [],
                cooldownChanges: {}
            }
              , g = 15e3
              , y = {
                mute: [],
                readTs: {},
                unread: {}
            }
              , w = {
                id: null,
                name: null,
                wait: null,
                coolDown: null,
                lastCoolDownEnd: null,
                messages: [],
                mailreg: !1,
                blockDm: !1,
                priv: !1,
                isOnMobile: !1,
                notification: null,
                userlvl: 0
            }
              , b = class {
                length;
                rgb;
                colors;
                abgr;
                fl;
                constructor(e) {
                    this.length = e.length,
                    this.rgb = new Uint8Array(3 * this.length),
                    this.colors = new Array(this.length),
                    this.abgr = new Uint32Array(this.length),
                    this.fl = new Array(this.length);
                    let t = 0;
                    for (let n = 0; n < e.length; n++) {
                        const i = e[n][0]
                          , o = e[n][1]
                          , r = e[n][2];
                        this.rgb[t++] = i,
                        this.rgb[t++] = o,
                        this.rgb[t++] = r,
                        this.colors[n] = `rgb(${i}, ${o}, ${r})`,
                        this.abgr[n] = 4278190080 | r << 16 | o << 8 | i,
                        this.fl[n] = [i / 256, o / 256, r / 256]
                    }
                }
                isDark(e) {
                    return e *= 3,
                    .2126 * this.rgb[e++] + .7152 * this.rgb[e++] + .0722 * this.rgb[e] < 128
                }
                getIndexOfColor(e, t, n) {
                    const {rgb: i} = this;
                    let o = i.length / 3;
                    for (; o > 0; ) {
                        o -= 1;
                        const r = 3 * o;
                        if (i[r] === e && i[r + 1] === t && i[r + 2] === n)
                            return o
                    }
                    return null
                }
                getClosestIndexOfColor(e, t, n) {
                    const {rgb: i} = this;
                    let o = i.length / 3
                      , r = 0
                      , a = null;
                    for (; o > 0; ) {
                        o -= 1;
                        const s = 3 * o;
                        let l = (i[s] - e) ** 2;
                        l += (i[s + 1] - t) ** 2,
                        l += (i[s + 2] - n) ** 2,
                        (null === a || a > l) && (r = o,
                        a = l)
                    }
                    return r
                }
            }
            ;
            var k = n(259)
              , S = n(940);
            function E(e) {
                const {canvasEndDate: t, is3D: n} = e;
                let {isHistoricalView: i, historicalDate: o} = e;
                if (n ? i = !1 : t && (i = !0),
                e.isHistoricalView = i,
                i) {
                    o || (o = (0,
                    k.UW)((0,
                    k.x2)())),
                    t && Number(o) > Number(t) && (o = (0,
                    k.UW)(t)),
                    e.historicalDate = o,
                    e.historicalTime || (e.historicalTime = "0000");
                    const {canvasId: n, canvasSize: i, canvases: r} = e;
                    e.historicalCanvasSize = (0,
                    k.Ss)(o, i, r[n]?.historicalSizes)
                }
                return e
            }
            function C(e, t) {
                const n = e.cli || 0
                  , {size: i, sd: o=null, ed: r=null, ident: a, colors: s} = e;
                return {
                    clrIgnore: n,
                    canvasSize: i,
                    canvasStartDate: o,
                    canvasEndDate: r,
                    canvasIdent: a,
                    is3D: !!e.v,
                    palette: new b(s,0),
                    view: t?.view || [0, 0, S.A$],
                    selectedColor: t?.selectedColor || n,
                    pencilMode: t?.pencilMode || S.PO.COLOR
                }
            }
            function T(e) {
                const {hash: t} = window.location
                  , n = decodeURIComponent(t).substring(1).split(",");
                let i = n[0]
                  , o = (0,
                k.s3)(e, i);
                if (!o && window.ssv.dc && (o = window.ssv.dc),
                !o || !window.ssv?.backupurl && e[o].ed) {
                    o = S.V4;
                    const t = e[S.V4];
                    if (!t)
                        return null;
                    i = t.ident
                }
                const r = !!e[o].v
                  , a = parseInt(n[1], 10) || 0
                  , s = parseInt(n[2], 10) || 0;
                let l = parseInt(n[3], 10);
                return Number.isNaN(l) ? l = r ? 0 : S.A$ : r || (l = 2 ** (l / 10)),
                {
                    canvasId: o,
                    canvasIdent: i,
                    view: [a, s, l]
                }
            }
            const I = {
                canvasId: null,
                canvasIdent: "xx",
                canvases: {},
                canvasSize: 65536,
                historicalCanvasSize: 65536,
                is3D: null,
                canvasStartDate: null,
                canvasEndDate: null,
                canvasMaxTiledZoom: (0,
                k.W4)(65536),
                palette: new b([[0, 0, 0]]),
                clrIgnore: 0,
                selectedColor: 0,
                pencilMode: S.PO.COLOR,
                view: [0, 0, S.A$],
                isHistoricalView: !1,
                historicalDate: (0,
                k.UW)((0,
                k.x2)()),
                historicalTime: "0000",
                hover: null,
                prevCanvasState: {}
            }
              , x = {
                ovEnabled: !1,
                mEnabled: !1,
                oOpacity: 40,
                oSmallPxls: !0,
                list: []
            }
              , N = {
                channels: {},
                blocked: [],
                messages: {}
            };
            let _ = 0;
            const O = {
                fetchingChunks: 0,
                fetchingChat: !1,
                fetchingPixel: !1,
                fetchingApi: !1
            }
              , P = (e,t)=>e && e._persist && e._persist.version === t ? (console.log(`Store version: ${t}`),
            Promise.resolve(e)) : (console.log("Newer version run, resetting store."),
            Promise.resolve({}))
              , A = {
                gui: (0,
                i.OJ)({
                    key: "gui",
                    storage: f.Z,
                    version: 21,
                    migrate: P
                }, (function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v
                      , t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                    case "s/TGL_GRID":
                        return {
                            ...e,
                            showGrid: !e.showGrid
                        };
                    case "s/TGL_PXL_NOTIFY":
                        return {
                            ...e,
                            showPixelNotify: !e.showPixelNotify
                        };
                    case "s/TGL_MVM_CTRLS":
                        return {
                            ...e,
                            showMvmCtrls: !e.showMvmCtrls
                        };
                    case "s/TGL_AUTO_ZOOM_IN":
                        return {
                            ...e,
                            autoZoomIn: !e.autoZoomIn
                        };
                    case "s/TGL_ONLINE_CANVAS":
                        return {
                            ...e,
                            onlineCanvas: !e.onlineCanvas
                        };
                    case "s/TGL_DAILY_PXLS":
                        return {
                            ...e,
                            dailyPxls: !e.dailyPxls
                        };
                    case "s/TGL_NO_ROUND":
                        return {
                            ...e,
                            noRound: !e.noRound
                        };
                    case "s/TGL_POTATO_MODE":
                        return {
                            ...e,
                            isPotato: !e.isPotato
                        };
                    case "s/TGL_LIGHT_GRID":
                        return {
                            ...e,
                            isLightGrid: !e.isLightGrid
                        };
                    case "s/TGL_COMPACT_PALETTE":
                        return {
                            ...e,
                            compactPalette: !e.compactPalette
                        };
                    case "s/TGL_OPEN_PALETTE":
                        return {
                            ...e,
                            paletteOpen: !e.paletteOpen
                        };
                    case "s/TGL_OPEN_MENU":
                        return {
                            ...e,
                            menuOpen: !e.menuOpen
                        };
                    case "s/TGL_MUTE":
                        return {
                            ...e,
                            mute: !e.mute
                        };
                    case "s/TGL_CHAT_NOTIFY":
                        return {
                            ...e,
                            chatNotify: !e.chatNotify
                        };
                    case "s/TGL_EASTER_EGG":
                        return {
                            ...e,
                            easterEgg: !e.easterEgg
                        };
                    case "s/TGL_CURSOR":
                        return {
                            ...e,
                            cursor: !e.cursor
                        };
                    case "s/SET_HOLD_PAINT":
                        return {
                            ...e,
                            holdPaint: t.value
                        };
                    case "s/SELECT_STYLE":
                        {
                            const {style: n} = t;
                            return {
                                ...e,
                                style: n
                            }
                        }
                    case "SELECT_COLOR":
                        {
                            const {compactPalette: t} = e;
                            let {paletteOpen: n} = e;
                            return (t || window.innerWidth < 300) && (n = !1),
                            {
                                ...e,
                                paletteOpen: n
                            }
                        }
                    case "s/SELECT_CANVAS":
                        return e.holdPaint ? {
                            ...e,
                            holdPaint: !1
                        } : e;
                    case "s/SET_MOVE_U":
                        {
                            const {value: n} = t
                              , i = n;
                            return {
                                ...e,
                                moveU: i
                            }
                        }
                    case "s/SET_MOVE_V":
                        {
                            const {value: n} = t
                              , i = n;
                            return {
                                ...e,
                                moveV: i
                            }
                        }
                    case "s/SET_MOVE_W":
                        {
                            const {value: n} = t
                              , i = n;
                            return {
                                ...e,
                                moveW: i
                            }
                        }
                    case "s/CANCEL_MOVE":
                        return {
                            ...e,
                            moveU: 0,
                            moveV: 0,
                            moveW: 0
                        };
                    case "persist/REHYDRATE":
                        return {
                            ...e,
                            easterEgg: !1,
                            holdPaint: !1,
                            moveU: 0,
                            moveV: 0,
                            moveW: 0
                        };
                    default:
                        return e
                    }
                }
                )),
                ranks: (0,
                i.OJ)({
                    key: "ranks",
                    storage: f.Z,
                    version: 19,
                    migrate: P
                }, (function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m
                      , t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                    case "REC_SET_PXLS":
                        {
                            const {rankedPxlCnt: n} = t;
                            if (!n)
                                return e;
                            let {totalPixels: i, dailyTotalPixels: o} = e;
                            return i += n,
                            o += n,
                            {
                                ...e,
                                totalPixels: i,
                                dailyTotalPixels: o
                            }
                        }
                    case "REC_ONLINE":
                        {
                            const {online: n} = t;
                            return {
                                ...e,
                                online: n
                            }
                        }
                    case "s/REC_ME":
                    case "s/LOGIN":
                        {
                            if (!t.totalPixels)
                                return e;
                            const {totalPixels: n, dailyTotalPixels: i, ranking: o, dailyRanking: r} = t;
                            return {
                                ...e,
                                totalPixels: n,
                                dailyTotalPixels: i,
                                ranking: o,
                                dailyRanking: r
                            }
                        }
                    case "REC_STATS":
                        {
                            const {totalRanking: n, totalDailyRanking: i, dailyCRanking: o, prevTop: r, onlineStats: a, cHistStats: s, cHourlyStatsOrdered: l, histStats: c, pDailyStats: u, pHourlyStats: d, cooldownChanges: h} = t
                              , p = {};
                            for (const {cc: e, px: t} of l)
                                p[e] = t;
                            const f = Date.now();
                            return {
                                ...e,
                                lastFetch: f,
                                totalRanking: n,
                                totalDailyRanking: i,
                                dailyCRanking: o,
                                prevTop: r,
                                onlineStats: a,
                                cHistStats: s,
                                cHourlyStats: p,
                                histStats: c,
                                pDailyStats: u,
                                pHourlyStats: d,
                                cooldownChanges: Object.entries(h)
                            }
                        }
                    default:
                        return e
                    }
                }
                )),
                chatRead: (0,
                i.OJ)({
                    key: "cr",
                    storage: f.Z,
                    version: 17,
                    migrate: P
                }, (function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y
                      , t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                    case "s/REC_ME":
                    case "s/LOGIN":
                        {
                            const {channels: n} = t
                              , i = Object.keys(n)
                              , o = {}
                              , r = {};
                            for (let t = 0; t < i.length; t += 1) {
                                const a = i[t];
                                e.readTs[a] ? o[a] = e.readTs[a] : o[a] = 0,
                                r[a] = n[a][2] > o[a]
                            }
                            return {
                                ...e,
                                readTs: o,
                                unread: r
                            }
                        }
                    case "s/ADD_CHAT_CHANNEL":
                        {
                            const [n] = Object.keys(t.channel);
                            return {
                                ...e,
                                readTs: {
                                    ...e.readTs,
                                    [n]: e.readTs[n] || 0
                                },
                                unread: {
                                    ...e.unread,
                                    [n]: !0
                                }
                            }
                        }
                    case "s/REMOVE_CHAT_CHANNEL":
                        {
                            const {cid: n} = t;
                            if (!e.readTs[n])
                                return e;
                            const i = {
                                ...e.readTs
                            };
                            delete i[n];
                            const o = {
                                ...e.unread
                            };
                            return delete o[n],
                            {
                                ...e,
                                readTs: i,
                                unread: o
                            }
                        }
                    case "s/REC_CHAT_MESSAGE":
                        {
                            const {channel: n, isRead: i} = t
                              , o = i ? {
                                ...e.readTs,
                                [n]: Date.now() + g
                            } : e.readTs
                              , r = i ? e.unread : {
                                ...e.unread,
                                [n]: !0
                            };
                            return {
                                ...e,
                                readTs: o,
                                unread: r
                            }
                        }
                    case "OPEN_WIN":
                        {
                            const {windowType: n} = t;
                            if ("CHAT" !== n)
                                return e;
                            const i = t.args && t.args.chatChannel || 1;
                            return {
                                ...e,
                                readTs: {
                                    ...e.readTs,
                                    [i]: Date.now() + g
                                },
                                unread: {
                                    ...e.unread,
                                    [i]: !1
                                }
                            }
                        }
                    case "MARK_CHANNEL_AS_READ":
                        {
                            const {cid: n} = t;
                            return {
                                ...e,
                                readTs: {
                                    ...e.readTs,
                                    [n]: Date.now() + g
                                },
                                unread: {
                                    ...e.unread,
                                    [n]: !1
                                }
                            }
                        }
                    case "s/MUTE_CHAT_CHANNEL":
                        {
                            const {cid: n} = t;
                            return {
                                ...e,
                                mute: [...e.mute, n]
                            }
                        }
                    case "s/UNMUTE_CHAT_CHANNEL":
                        {
                            const {cid: n} = t
                              , i = e.mute.filter((e=>e !== n));
                            return {
                                ...e,
                                mute: i
                            }
                        }
                    default:
                        return e
                    }
                }
                )),
                templates: (0,
                i.OJ)({
                    key: "tem",
                    storage: f.Z,
                    version: 17,
                    migrate: P
                }, (function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : x
                      , t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                    case "s/LIST_TEMPLATE":
                        {
                            const {imageId: n, title: i, canvasId: o, x: r, y: a, width: s, height: l} = t;
                            return {
                                ...e,
                                list: [...e.list, {
                                    enabled: !0,
                                    title: i,
                                    canvasId: o,
                                    x: r,
                                    y: a,
                                    imageId: n,
                                    width: s,
                                    height: l
                                }]
                            }
                        }
                    case "s/CHG_TEMPLATE":
                        {
                            const {title: n, props: i} = t
                              , {list: o} = e
                              , r = o.findIndex((e=>e.title === n));
                            return -1 === r ? e : {
                                ...e,
                                list: [...o.slice(0, r), {
                                    ...o[r],
                                    ...i
                                }, ...o.slice(r + 1)]
                            }
                        }
                    case "s/REM_TEMPLATE":
                        return {
                            ...e,
                            list: e.list.filter((e=>e.title !== t.title))
                        };
                    case "s/UPD_TEMPLATE_IMG":
                        {
                            const {imageId: n, width: i, height: o} = t
                              , {list: r} = e
                              , a = r.findIndex((e=>e.imageId === n));
                            return -1 === a ? e : {
                                ...e,
                                list: [...r.slice(0, a), {
                                    ...r[a],
                                    imageId: n,
                                    width: i,
                                    height: o
                                }, ...r.slice(a + 1)]
                            }
                        }
                    case "s/TGL_OVENABLED":
                        return {
                            ...e,
                            ovEnabled: !e.ovEnabled
                        };
                    case "s/TGL_SMALLPXLS":
                        return {
                            ...e,
                            oSmallPxls: !e.oSmallPxls
                        };
                    case "s/SET_O_OPACITY":
                        return {
                            ...e,
                            oOpacity: t.opacity
                        };
                    case "TEMPLATES_READY":
                        return {
                            ...e,
                            available: !0
                        };
                    case "persist/REHYDRATE":
                        return {
                            ...e,
                            available: !1
                        };
                    default:
                        return e
                    }
                }
                )),
                canvas: (0,
                i.OJ)({
                    key: "can",
                    storage: f.Z,
                    version: 2,
                    migrate: P,
                    whitelist: ["prevCanvasState"]
                }, (function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I
                      , t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                    case "SET_HISTORICAL_TIME":
                        {
                            const {date: n, time: i} = t;
                            return E({
                                ...e,
                                historicalDate: n,
                                historicalTime: i
                            })
                        }
                    case "s/TGL_HISTORICAL_VIEW":
                        return e.is3D || e.canvasEndDate ? e : E({
                            ...e,
                            isHistoricalView: !e.isHistoricalView
                        });
                    case "UPDATE_VIEW":
                        {
                            const {view: n} = t
                              , {canvasId: i} = e;
                            return {
                                ...e,
                                view: [...n],
                                prevCanvasState: {
                                    ...e.prevCanvasState,
                                    [i]: {
                                        ...e.prevCanvasState[i],
                                        view: [...n]
                                    }
                                }
                            }
                        }
                    case "RELOAD_URL":
                        {
                            const {canvases: t} = e
                              , n = T(t);
                            if (!n)
                                return e;
                            if (n.canvasId !== e.canvasId) {
                                const {canvasId: i} = n
                                  , o = C(t[i], e.prevCanvasState[i]);
                                return {
                                    ...e,
                                    ...o,
                                    ...n
                                }
                            }
                            return {
                                ...e,
                                ...n
                            }
                        }
                    case "SELECT_COLOR":
                        {
                            const {color: n} = t
                              , {canvasId: i} = e;
                            return {
                                ...e,
                                selectedColor: n,
                                prevCanvasState: {
                                    ...e.prevCanvasState,
                                    [i]: {
                                        ...e.prevCanvasState[i],
                                        selectedColor: n
                                    }
                                }
                            }
                        }
                    case "SET_HOVER":
                        {
                            const {hover: n} = t;
                            return {
                                ...e,
                                hover: n
                            }
                        }
                    case "UNSET_HOVER":
                        return {
                            ...e,
                            hover: null
                        };
                    case "s/SELECT_PENCIL_MODE":
                        {
                            const n = t.value
                              , {canvasId: i} = e;
                            return {
                                ...e,
                                pencilMode: n,
                                prevCanvasState: {
                                    ...e.prevCanvasState,
                                    [i]: {
                                        ...e.prevCanvasState[i],
                                        pencilMode: n
                                    }
                                }
                            }
                        }
                    case "s/SELECT_CANVAS":
                        {
                            let {canvasId: n} = t;
                            const {canvases: i, prevCanvasState: o, canvasId: r} = e;
                            let a = i[n];
                            a || (n = S.V4,
                            a = i[S.V4]);
                            const s = C(a, o[n]);
                            return E({
                                ...e,
                                ...s,
                                canvasId: n,
                                isHistoricalView: !e.canvasEndDate && e.isHistoricalView,
                                prevCanvasState: {
                                    ...e.prevCanvasState,
                                    [r]: {
                                        view: e.view,
                                        selectedColor: e.selectedColor,
                                        pencilMode: e.pencilMode
                                    }
                                }
                            })
                        }
                    case "s/REC_ME":
                        {
                            const {canvases: n} = t;
                            let {canvasId: i, view: o} = e;
                            null === i && ({canvasId: i, view: o} = T(n));
                            const r = C(n[i], e.prevCanvasState[i]);
                            return E({
                                ...e,
                                ...r,
                                canvasId: i,
                                canvases: n,
                                view: o
                            })
                        }
                    default:
                        return e
                    }
                }
                )),
                user: function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : w
                      , t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                    case "COOLDOWN_SET":
                        {
                            const {coolDown: n} = t;
                            return {
                                ...e,
                                coolDown: n || null
                            }
                        }
                    case "COOLDOWN_END":
                        return {
                            ...e,
                            coolDown: null,
                            lastCoolDownEnd: Date.now(),
                            wait: null
                        };
                    case "REC_SET_PXLS":
                        {
                            const {wait: n} = t;
                            return {
                                ...e,
                                wait: n ? Date.now() + n : e.wait
                            }
                        }
                    case "REC_COOLDOWN":
                        {
                            const {wait: n} = t
                              , i = n ? Date.now() + n : null;
                            return {
                                ...e,
                                wait: i,
                                coolDown: null
                            }
                        }
                    case "SET_MOBILE":
                        {
                            const {mobile: n} = t;
                            return {
                                ...e,
                                isOnMobile: n
                            }
                        }
                    case "s/REC_ME":
                    case "s/LOGIN":
                        {
                            const {id: n, name: i, mailreg: o, blockDm: r, priv: a, userlvl: s} = t
                              , l = t.messages ? t.messages : [];
                            return {
                                ...e,
                                id: n,
                                name: i,
                                messages: l,
                                mailreg: o,
                                blockDm: r,
                                priv: a,
                                userlvl: s
                            }
                        }
                    case "s/LOGOUT":
                        return {
                            ...e,
                            id: null,
                            name: null,
                            messages: [],
                            mailreg: !1,
                            blockDm: !1,
                            priv: !1,
                            userlvl: 0
                        };
                    case "s/SET_NAME":
                        {
                            const {name: n} = t;
                            return {
                                ...e,
                                name: n
                            }
                        }
                    case "s/SET_BLOCKING_DM":
                        {
                            const {blockDm: n} = t;
                            return {
                                ...e,
                                blockDm: n
                            }
                        }
                    case "s/SET_PRIVATE":
                        {
                            const {priv: n} = t;
                            return {
                                ...e,
                                priv: n
                            }
                        }
                    case "SET_NOTIFICATION":
                        return {
                            ...e,
                            notification: t.notification
                        };
                    case "UNSET_NOTIFICATION":
                        return {
                            ...e,
                            notification: null
                        };
                    case "s/REM_FROM_MESSAGES":
                        {
                            const {message: n} = t
                              , i = [...e.messages]
                              , o = i.indexOf(n);
                            return o > -1 && i.splice(o),
                            {
                                ...e,
                                messages: i
                            }
                        }
                    case "s/SET_MAILREG":
                        {
                            const {mailreg: n} = t;
                            return {
                                ...e,
                                mailreg: n
                            }
                        }
                    default:
                        return e
                    }
                },
                chat: function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : N
                      , t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                    case "s/REC_ME":
                    case "s/LOGIN":
                        {
                            const n = {}
                              , i = t.channels
                              , o = Object.keys(i);
                            for (let e = 0; e < o.length; e += 1) {
                                const t = o[e];
                                n[Number(t)] = i[t]
                            }
                            return {
                                ...e,
                                channels: n,
                                blocked: t.blocked
                            }
                        }
                    case "s/LOGOUT":
                        {
                            const t = {
                                ...e.channels
                            }
                              , n = {
                                ...e.messages
                            }
                              , i = Object.keys(t);
                            for (let e = 0; e < i.length; e += 1) {
                                const o = i[e];
                                0 !== t[o][1] && (delete n[o],
                                delete t[o])
                            }
                            return {
                                ...e,
                                channels: t,
                                blocked: [],
                                messages: n
                            }
                        }
                    case "s/BLOCK_USER":
                        {
                            const {userId: n, userName: i} = t
                              , o = [...e.blocked, [n, i]]
                              , r = {
                                ...e.channels
                            }
                              , a = Object.keys(r);
                            for (let t = 0; t < a.length; t += 1) {
                                const i = a[t];
                                if (1 === r[i][1] && r[i][3] === n)
                                    return delete r[i],
                                    {
                                        ...e,
                                        channels: r,
                                        blocked: o
                                    }
                            }
                            return {
                                ...e,
                                blocked: o
                            }
                        }
                    case "s/UNBLOCK_USER":
                        {
                            const {userId: n} = t
                              , i = e.blocked.filter((e=>e[0] !== n));
                            return {
                                ...e,
                                blocked: i
                            }
                        }
                    case "s/ADD_CHAT_CHANNEL":
                        {
                            const {channel: n} = t
                              , i = Number(Object.keys(n)[0]);
                            return e.channels[i] ? e : {
                                ...e,
                                channels: {
                                    ...e.channels,
                                    ...n
                                }
                            }
                        }
                    case "s/REMOVE_CHAT_CHANNEL":
                        {
                            const {cid: n} = t;
                            if (!e.channels[n])
                                return e;
                            const i = {
                                ...e.channels
                            }
                              , o = {
                                ...e.messages
                            };
                            return delete o[n],
                            delete i[n],
                            {
                                ...e,
                                channels: i,
                                messages: o
                            }
                        }
                    case "s/REC_CHAT_MESSAGE":
                        {
                            const {name: n, text: i, country: o, channel: r, user: a} = t;
                            if (!e.messages[r] || !e.channels[r])
                                return e;
                            const s = Math.round(Date.now() / 1e3);
                            _ += 1;
                            const l = {
                                ...e.messages,
                                [r]: [...e.messages[r], [n, i, o, a, s, _]]
                            };
                            l[r].length > S.Kb && l[r].splice(0, 2);
                            const c = [...e.channels[r]];
                            return c[2] = Date.now(),
                            {
                                ...e,
                                channels: {
                                    ...e.channels,
                                    [r]: c
                                },
                                messages: l
                            }
                        }
                    case "s/REC_CHAT_HISTORY":
                        {
                            const {cid: n, history: i} = t;
                            for (let e = 0; e < i.length; e += 1)
                                _ += 1,
                                i[e].push(_);
                            return {
                                ...e,
                                messages: {
                                    ...e.messages,
                                    [n]: i
                                }
                            }
                        }
                    default:
                        return e
                    }
                },
                fetching: function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : O
                      , t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                    case "s/SET_CHAT_FETCHING":
                        {
                            const {fetching: n} = t;
                            return {
                                ...e,
                                fetchingChat: n
                            }
                        }
                    case "SET_API_FETCHING":
                        {
                            const {fetching: n} = t;
                            return {
                                ...e,
                                fetchingApi: n
                            }
                        }
                    case "REQ_BIG_CHUNK":
                        {
                            const {fetchingChunks: t} = e;
                            return {
                                ...e,
                                fetchingChunks: t + 1
                            }
                        }
                    case "REC_BIG_CHUNK":
                    case "REC_BIG_CHUNK_FAILURE":
                        {
                            const {fetchingChunks: t} = e;
                            return {
                                ...e,
                                fetchingChunks: t - 1
                            }
                        }
                    case "SET_PXLS_FETCHING":
                        {
                            const {fetching: n} = t;
                            return {
                                ...e,
                                fetchingPixel: n
                            }
                        }
                    default:
                        return e
                    }
                }
            };
            function L(e) {
                let t = Math.floor(99999 * Math.random()) + 1;
                for (; e.args[t]; )
                    t += 1;
                return t
            }
            function R(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                  , i = window.innerWidth
                  , o = window.innerHeight;
                n && (i = Math.floor(.7 * i),
                o = Math.floor(Math.min(.8 * o, 900)));
                const r = e || i
                  , a = t || o;
                return [(0,
                k.uZ)(r, 70, i), (0,
                k.uZ)(a, 50, o)]
            }
            function j(e, t, n, i) {
                const o = e || 0 === e ? e : Math.floor((window.innerWidth - n) / 2)
                  , r = t || 0 === t ? t : Math.floor((window.innerHeight - i) / 2);
                return [(0,
                k.uZ)(o, 70 - n, window.innerWidth - 70), (0,
                k.uZ)(r, 0, window.innerHeight - 30)]
            }
            function $(e) {
                const {innerWidth: t, innerHeight: n} = window
                  , {windows: i, positions: o} = e
                  , r = t - 70
                  , a = n - 30;
                let s = !1;
                const l = {};
                for (let e = 0; e < i.length; e += 1) {
                    const c = i[e].windowId
                      , {xPos: u, yPos: d, width: h, height: p} = o[c]
                      , f = 70 - h;
                    u > r || d > a || u < f || d < 0 || t > h || n > p ? (s = !0,
                    l[c] = {
                        xPos: (0,
                        k.uZ)(u, f, r),
                        yPos: (0,
                        k.uZ)(d, 0, a),
                        width: Math.min(h, t - 30),
                        height: Math.min(p, n - 30),
                        z: o[c].z
                    }) : l[c] = o[c]
                }
                return s ? {
                    ...e,
                    positions: l
                } : e
            }
            function D(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (e.zMax >= 50 || t) {
                    const t = {
                        ...e.positions
                    }
                      , n = Object.keys(t)
                      , i = n.map((e=>t[e].z)).sort(((e,t)=>!t || e && e >= t));
                    for (let e = 0; e < n.length; e += 1) {
                        const o = n[e];
                        t[o] = {
                            ...t[o],
                            z: i.indexOf(t[o].z)
                        }
                    }
                    e.zMax = i.length - 1,
                    e.positions = t
                }
                return e
            }
            const M = {
                showWindows: window.innerWidth > 604,
                zMax: 0,
                windows: [],
                positions: {},
                args: {}
            }
              , z = {
                open: !1,
                alertType: null,
                title: null,
                message: null,
                btn: null
            }
              , H = window.AudioContext || window.webkitAudioContext
              , U = H && new H;
            function W(e) {
                const t = new ArrayBuffer(2)
                  , n = new DataView(t);
                return n.setInt8(0, 160),
                n.setInt8(1, Number(e)),
                t
            }
            var V = n(395)
              , G = n(631);
            const F = new class {
                store = null;
                pixelTransferController = null;
                ws = null;
                getRenderer;
                constructor() {
                    console.log("Creating WebSocketClient"),
                    this.channelId = 0,
                    this.readyState = WebSocket.CLOSED,
                    this.msgQueue = [],
                    this.reqQueue = [],
                    this.checkHealth = this.checkHealth.bind(this),
                    setInterval(this.checkHealth, 2e3)
                }
                initialize(e, t, n) {
                    return this.store = e,
                    t && (this.pixelTransferController = t),
                    n && (this.getRenderer = n),
                    this.connect()
                }
                connect() {
                    this.readyState = WebSocket.CONNECTING,
                    this.ws && console.log("WebSocket already open, not starting"),
                    this.timeLastConnecting = Date.now();
                    const e = `${"https:" === window.location.protocol ? "wss:" : "ws:"}//${G.uY || window.location.host}/ws`;
                    this.ws = new WebSocket(e),
                    this.ws.binaryType = "arraybuffer",
                    this.ws.onopen = this.onOpen.bind(this),
                    this.ws.onmessage = this.onMessage.bind(this),
                    this.ws.onclose = this.onClose.bind(this),
                    this.ws.onerror = e=>{
                        console.error("Socket encountered error, closing socket", e)
                    }
                }
                checkHealth() {
                    if (this.readyState === WebSocket.OPEN) {
                        const e = Date.now();
                        e - 3e4 > this.timeLastPing && (console.log("Server is silent, killing websocket"),
                        this.readyState = WebSocket.CLOSING,
                        this.ws.close()),
                        e - 23e3 > this.timeLastSent && (this.send(new Uint8Array([176]).buffer),
                        this.timeLastSent = e)
                    }
                }
                sendWhenReady(e) {
                    this.timeLastSent = Date.now(),
                    this.readyState === WebSocket.OPEN ? this.ws.send(e) : (console.log("Tried sending message when websocket was closed!"),
                    this.msgQueue.push(e))
                }
                send(e) {
                    this.readyState === WebSocket.OPEN && this.ws.send(e)
                }
                processMsgQueue() {
                    for (; this.msgQueue.length > 0; )
                        this.sendWhenReady(this.msgQueue.shift())
                }
                onOpen() {
                    const e = Date.now();
                    this.timeLastPing = e,
                    this.timeLastSent = e,
                    this.store.dispatch((0,
                    V.$s)()),
                    this.readyState = WebSocket.OPEN,
                    this.send(W(this.store.getState().canvas.canvasId));
                    const t = this.getRenderer?.().recChunkIds;
                    t?.length && (console.log(`Register ${t.length} chunks`),
                    this.send(function(e) {
                        const t = new ArrayBuffer(2 + 2 * e.length)
                          , n = new Uint16Array(t);
                        n[0] = 163;
                        for (let t = 0; t < e.length; t += 1)
                            n[t + 1] = e[t];
                        return t
                    }(t))),
                    this.processMsgQueue()
                }
                setCanvas(e) {
                    null !== e && (console.log(`Notify websocket server that we changed canvas to ${e}`),
                    this.send(W(e)))
                }
                registerChunk(e) {
                    const t = function(e) {
                        const t = new ArrayBuffer(3)
                          , n = new DataView(t);
                        return n.setInt8(0, 161),
                        n.setInt16(1, e),
                        t
                    }(e);
                    this.readyState === WebSocket.OPEN && this.send(t)
                }
                deRegisterChunks(e) {
                    const t = function(e) {
                        const t = new ArrayBuffer(2 + 2 * e.length)
                          , n = new Uint16Array(t);
                        n[0] = 164;
                        for (let t = 0; t < e.length; t += 1)
                            n[t + 1] = e[t];
                        return t
                    }(e);
                    this.readyState === WebSocket.OPEN && this.send(t)
                }
                sendCaptchaSolution(e, t) {
                    return new Promise(((n,i)=>{
                        let o;
                        const r = ["cs", e=>{
                            n(e),
                            clearTimeout(o)
                        }
                        ];
                        this.reqQueue.push(r),
                        o = setTimeout((()=>{
                            const e = this.reqQueue.indexOf(r);
                            ~e && this.reqQueue.splice(e, 1),
                            i(new Error("Timeout"))
                        }
                        ), 2e4),
                        this.sendWhenReady(`cs,${JSON.stringify([e, t])}`)
                    }
                    ))
                }
                sendPixelUpdate(e, t, n) {
                    return new Promise(((i,o)=>{
                        let r;
                        const a = ["pu", e=>{
                            i(e),
                            clearTimeout(r)
                        }
                        ];
                        this.reqQueue.push(a),
                        r = setTimeout((()=>{
                            const e = this.reqQueue.indexOf(a);
                            ~e && this.reqQueue.splice(e, 1),
                            o(new Error("Timeout"))
                        }
                        ), 2e4),
                        this.sendWhenReady(function(e, t, n) {
                            const i = new ArrayBuffer(3 + 4 * n.length)
                              , o = new DataView(i);
                            o.setUint8(0, 193),
                            o.setUint8(1, e),
                            o.setUint8(2, t);
                            let r = 2
                              , a = n.length;
                            for (; a; ) {
                                a -= 1;
                                const [e,t] = n[a];
                                o.setUint8(r += 1, e >>> 16),
                                o.setUint16(r += 1, 65535 & e),
                                o.setUint8(r += 2, t)
                            }
                            return i
                        }(e, t, n))
                    }
                    ))
                }
                sendChatMessage(e, t) {
                    this.sendWhenReady(`cm,${JSON.stringify([e, t])}`)
                }
                onMessage(e) {
                    let {data: t} = e;
                    try {
                        "string" == typeof t ? this.onTextMessage(t) : this.onBinaryMessage(t)
                    } catch (e) {
                        console.log(`An error occurred while parsing websocket message ${t}`, e)
                    }
                }
                onTextMessage(e) {
                    const t = e.indexOf(",");
                    if (-1 === t)
                        return;
                    const n = e.slice(0, t)
                      , i = JSON.parse(e.slice(t + 1));
                    switch (n) {
                    case "cm":
                        this.store.dispatch((0,
                        V.pl)(...i));
                        break;
                    case "ac":
                        this.store.dispatch((0,
                        V.dm)(i));
                        break;
                    case "rc":
                        this.store.dispatch((0,
                        V.jg)(i))
                    }
                }
                onBinaryMessage(e) {
                    if (0 === e.byteLength)
                        return;
                    const t = new DataView(e)
                      , n = t.getUint8(0);
                    switch (this.timeLastPing = Date.now(),
                    n) {
                    case 193:
                        this.pixelTransferController && this.pixelTransferController.receivePixelUpdate(function(e) {
                            const t = e.getUint8(1)
                              , n = e.getUint8(2)
                              , i = [];
                            let o = e.byteLength;
                            for (; o > 3; ) {
                                const t = e.getUint8(o -= 1)
                                  , n = e.getUint16(o -= 2)
                                  , r = e.getUint8(o -= 1) << 16;
                                i.push([r | n, t])
                            }
                            return {
                                i: t,
                                j: n,
                                pixels: i
                            }
                        }(t));
                        break;
                    case 195:
                        {
                            const e = this.reqQueue.findIndex((e=>"pu" === e[0]));
                            ~e && this.reqQueue.splice(e, 1)[0][1](function(e) {
                                return {
                                    retCode: e.getUint8(1),
                                    wait: e.getUint32(2),
                                    coolDownSeconds: e.getInt16(6),
                                    pxlCnt: e.getUint8(8),
                                    rankedPxlCnt: e.getUint8(9)
                                }
                            }(t));
                            break
                        }
                    case 167:
                        this.store.dispatch((0,
                        V.Wm)(function(e) {
                            const t = {};
                            t.total = e.getUint16(1);
                            let n = e.byteLength;
                            for (; n > 3; ) {
                                const i = e.getUint16(n -= 2);
                                t[e.getUint8(n -= 1)] = i
                            }
                            return t
                        }(t)));
                        break;
                    case 194:
                        this.store.dispatch((0,
                        V.At)(function(e) {
                            return e.getUint32(1)
                        }(t)));
                        break;
                    case 166:
                        console.log("Websocket requested api/me reload"),
                        this.store.dispatch((0,
                        c.aM)()),
                        this.reconnect();
                        break;
                    case 198:
                        {
                            const e = this.reqQueue.findIndex((e=>"cs" === e[0]));
                            ~e && this.reqQueue.splice(e, 1)[0][1](function(e) {
                                return e.getUint8(1)
                            }(t));
                            break
                        }
                    case 208:
                        this.store.dispatch((0,
                        r.Px)());
                        break;
                    default:
                        console.error(`Unknown op_code ${n} received`)
                    }
                }
                onClose(e) {
                    this.store.dispatch((0,
                    V.WV)()),
                    this.ws = null,
                    this.readyState = WebSocket.CONNECTING;
                    const t = this.timeLastConnecting < Date.now() - 7e3 ? 1e3 : 5e3;
                    console.warn(`Socket is closed. Reconnect will be attempted in ${t} ms.`, e.reason),
                    setTimeout((()=>this.connect()), t)
                }
                reconnect() {
                    this.readyState === WebSocket.OPEN && (this.readyState = WebSocket.CLOSING,
                    console.log("Restarting WebSocket"),
                    this.ws.onclose = null,
                    this.ws.onmessage = null,
                    this.ws.close(),
                    this.ws = null,
                    this.connect())
                }
            }
            ;
            var B = n(785);
            class Z {
                type;
                static db;
                constructor(e) {
                    this.type = e
                }
                async initialize() {
                    return await Z.openDB(),
                    this
                }
                static openDB() {
                    return Z.db ? Z.db : new Promise(((e,t)=>{
                        const n = window.indexedDB.open("ppfun_files", 1);
                        n.onsuccess = t=>{
                            const n = t.target.result;
                            n.onerror = e=>{
                                console.error("indexedDB error:", e.target.error)
                            }
                            ,
                            Z.db = n,
                            e(n)
                        }
                        ,
                        n.onupgradeneeded = e=>{
                            const t = e.target.result.createObjectStore("files", {
                                autoIncrement: !0
                            });
                            t.createIndex("type", "type", {
                                unique: !1
                            }),
                            t.createIndex("mimetype", "mimetype", {
                                unique: !1
                            })
                        }
                        ,
                        n.onerror = ()=>{
                            console.error("Error on opening indexedDB:", n.error),
                            t(n.error)
                        }
                    }
                    ))
                }
                async saveFile(e) {
                    const {db: t} = Z;
                    if (!t)
                        return null;
                    const n = Array.isArray(e) ? e : [e]
                      , i = await Promise.all(n.map((e=>e.arrayBuffer())));
                    return new Promise(((o,r)=>{
                        const a = []
                          , s = t.transaction("files", "readwrite");
                        s.oncomplete = ()=>{
                            o(Array.isArray(e) ? a : a[0])
                        }
                        ,
                        s.onabort = e=>{
                            e.stopPropagation(),
                            r(e.target.error)
                        }
                        ;
                        const l = s.objectStore("files");
                        n.forEach(((e,t)=>{
                            a.push(null),
                            l.add({
                                type: this.type,
                                mimetype: e.type,
                                buffer: i[t]
                            }).onsuccess = e=>{
                                a[t] = e.target.result
                            }
                        }
                        ))
                    }
                    ))
                }
                async updateFile(e, t) {
                    const {db: n} = Z;
                    if (!n)
                        return null;
                    const i = await t.arrayBuffer();
                    return new Promise(((o,r)=>{
                        const a = n.transaction("files", "readwrite");
                        a.onabort = e=>{
                            e.stopPropagation(),
                            r(e.target.error)
                        }
                        ,
                        a.objectStore("files").put({
                            type: this.type,
                            mimetpe: t.type,
                            buffer: i
                        }, e).onsuccess = e=>o(e.target.result)
                    }
                    ))
                }
                loadFile(e) {
                    const {db: t} = Z;
                    if (!t)
                        return null;
                    const n = Array.isArray(e) ? e : [e];
                    return new Promise(((i,o)=>{
                        const r = []
                          , a = t.transaction("files", "readonly");
                        a.oncomplete = ()=>{
                            i(Array.isArray(e) ? r : r[0])
                        }
                        ,
                        a.onabort = e=>{
                            e.stopPropagation(),
                            o(e.target.error)
                        }
                        ;
                        const s = a.objectStore("files");
                        n.forEach(((e,t)=>{
                            r.push(null),
                            s.get(e).onsuccess = e=>{
                                r[t] = e.target.result
                            }
                        }
                        ))
                    }
                    ))
                }
                deleteFile(e) {
                    const {db: t} = Z;
                    if (!t)
                        return null;
                    const n = Array.isArray(e) ? e : [e];
                    return new Promise(((e,i)=>{
                        const o = t.transaction("files", "readwrite");
                        o.oncomplete = ()=>{
                            e()
                        }
                        ,
                        o.onabort = e=>{
                            e.stopPropagation(),
                            i(e.target.error)
                        }
                        ;
                        const r = o.objectStore("files");
                        n.forEach((e=>{
                            r.delete(e)
                        }
                        ))
                    }
                    ))
                }
                getAllKeys() {
                    const {db: e} = Z;
                    return e ? new Promise(((t,n)=>{
                        const i = e.transaction("files", "readonly");
                        i.objectStore("files").index("type").getAllKeys(this.type).onsuccess = e=>{
                            t(e.target.result)
                        }
                        ,
                        i.onabort = e=>{
                            e.stopPropagation(),
                            n(e.target.error)
                        }
                    }
                    )) : null
                }
                async sync(e) {
                    const t = await this.getAllKeys()
                      , n = t.filter((t=>!e.includes(t)));
                    n.length && (console.log("Templaes: Keys in db but not in store", n),
                    await this.deleteFile(n));
                    const i = e.filter((e=>!t.includes(e)));
                    return i.length && console.log("Templates: Keys in store but not in db", i),
                    i
                }
            }
            const K = Z;
            var Y = n(875);
            const q = class {
                image;
                id;
                width;
                height;
                ready = !1;
                #e;
                constructor(e) {
                    this.id = e
                }
                get imageSmall() {
                    if (!this.#e) {
                        const e = this.image.getContext("2d").getImageData(0, 0, this.width, this.height)
                          , t = document.createElement("canvas");
                        t.width = 3 * this.width,
                        t.height = 3 * this.height;
                        const n = t.getContext("2d")
                          , i = n.getImageData(0, 0, t.width, t.height);
                        let o = 0
                          , r = 4 * i.width + 4;
                        for (; o < e.data.length; ) {
                            for (let t = 0; t < e.width; t += 1)
                                i.data[r] = e.data[o],
                                i.data[++r] = e.data[++o],
                                i.data[++r] = e.data[++o],
                                i.data[++r] = e.data[++o],
                                r += 9,
                                o += 1;
                            r += 4 * i.width * 2
                        }
                        n.putImageData(i, 0, 0),
                        this.#e = t
                    }
                    return this.#e
                }
                async arrayBuffer() {
                    return (0,
                    Y.nE)(this.image)
                }
                setDimensionFromCanvas() {
                    const {width: e, height: t} = this.image;
                    return this.width = e,
                    this.height = t,
                    this.read = !0,
                    [e, t]
                }
                fromImage(e) {
                    return this.image = (0,
                    Y.zE)(e),
                    this.setDimensionFromCanvas()
                }
                async fromFile(e) {
                    return this.image = await (0,
                    Y.NE)(e),
                    this.setDimensionFromCanvas()
                }
                async fromBuffer(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "image/png";
                    return this.image = await (0,
                    Y.NF)(e, t),
                    this.setDimensionFromCanvas()
                }
            }
              , X = new class {
                #t;
                #n = new K("templates");
                #i = new Map;
                ready = !1;
                async initialize(e) {
                    try {
                        this.#t = e,
                        await this.#n.initialize(),
                        this.ready = !0,
                        this.#t.dispatch({
                            type: "TEMPLATES_READY"
                        }),
                        await this.syncDB()
                    } catch (e) {
                        console.warn(`Couldn't initialize Templates: ${e.message}`)
                    }
                }
                async getTemplate(e) {
                    if (!this.ready)
                        return null;
                    let t = this.#i.get(e);
                    return t ? t.image : (t = await this.loadExistingTemplate(e),
                    t ? t.image : null)
                }
                getTemplateSync(e) {
                    if (!this.ready)
                        return null;
                    const t = this.#i.get(e);
                    return t ? t.image : (this.loadExistingTemplate(e),
                    null)
                }
                getSmallTemplateSync(e) {
                    if (!this.ready)
                        return null;
                    const t = this.#i.get(e);
                    return t ? t.imageSmall : (this.loadExistingTemplate(e),
                    null)
                }
                getColorOfPixel(e, t, n) {
                    const i = this.#t.getState().templates.list.filter((i=>i.enabled && i.canvasId === e && i.x <= t && i.y <= n && i.x + i.width > t && i.y + i.height > n));
                    for (const e of i) {
                        const i = this.getTemplateSync(e.imageId);
                        if (!i)
                            continue;
                        const o = i.getContext("2d").getImageData(t - e.x, n - e.y, 1, 1).data;
                        if (o[3] > 200)
                            return [o[0], o[1], o[2]]
                    }
                    return null
                }
                getTemplatesInView(e, t, n, i, o) {
                    const r = t - i
                      , a = n - o
                      , s = t + i
                      , l = n + o;
                    return this.#t.getState().templates.list.filter((t=>t.enabled && t.canvasId === e && t.x <= s && t.y <= l && t.x + t.width > r && t.y + t.height > a))
                }
                async syncDB() {
                    try {
                        const {list: e} = this.#t.getState().templates
                          , t = e.map((e=>e.imageId))
                          , n = await this.#n.sync(t);
                        e.filter((e=>n.includes(e.imageId))).forEach((e=>{
                            this.#t.dispatch(s(e.title))
                        }
                        ))
                    } catch (e) {
                        console.error(`Error on syncing templates store and indexedDB: ${e.message}`)
                    }
                }
                async loadAllMissing() {
                    const {templates: e} = this.#t.getState()
                      , t = e.list.map((e=>e.imageId)).filter((e=>!this.#i.has(e)));
                    for (const e of t)
                        await this.loadExistingTemplate(e)
                }
                async loadExistingTemplate(e) {
                    try {
                        const t = await this.#n.loadFile(e);
                        if (!t)
                            throw new Error("File does not exist in indexedDB");
                        const {mimetype: n, buffer: i} = t
                          , o = new q(e);
                        return await o.fromBuffer(i, n),
                        this.#i.set(e, o),
                        this.#t.dispatch({
                            type: "REC_TEMPLATE"
                        }),
                        o
                    } catch (t) {
                        return console.error(`Error loading template ${e}: ${t.message}`),
                        null
                    }
                }
                async addFile(e, t, n, i, o) {
                    try {
                        const r = await this.#n.saveFile(e)
                          , s = new q(r)
                          , l = await s.fromFile(e);
                        this.#i.set(r, s),
                        this.#t.dispatch(a(r, t, n, i, o, ...l))
                    } catch (e) {
                        console.error(`Error saving template ${t}: ${e.message}`)
                    }
                }
                async updateFile(e, t) {
                    try {
                        await this.#n.updateFile(e, t);
                        const n = new q(e)
                          , i = await n.fromFile(t);
                        this.#i.set(e, n),
                        this.#t.dispatch(function(e, t, n) {
                            return {
                                type: "s/UPD_TEMPLATE_IMG",
                                imageId: e,
                                width: t,
                                height: n
                            }
                        }(e, ...i))
                    } catch (t) {
                        console.error(`Error updating file ${e}: ${t.message}`)
                    }
                }
                changeTemplate(e, t) {
                    this.#t.dispatch(l(e, t))
                }
                deleteTemplate(e) {
                    const {list: t} = this.#t.getState().templates
                      , n = t.find((t=>t.title === e));
                    if (!n)
                        return;
                    const {imageId: i} = n;
                    this.#t.dispatch(s(e)),
                    this.#n.deleteFile(i),
                    this.#i.delete(i)
                }
                async exportEnabledTemplates() {
                    const {list: e} = this.#t.getState().templates
                      , t = e.filter((e=>e.enabled));
                    if (!t.length || t.length > 20)
                        return this.#t.dispatch((0,
                        r.UI)("Greška :(", "Ne možete uvest više od 20 ili nijedan predložak!", "error")),
                        null;
                    const n = await this.#n.loadFile(t.map((e=>e.imageId)))
                      , i = [];
                    for (let e = 0; e < t.length; e += 1) {
                        const {buffer: o, mimetype: r} = n[e];
                        i.push({
                            ...t[e],
                            buffer: await (0,
                            k.h$)(o),
                            mimetype: r
                        })
                    }
                    return i
                }
                async importTemplates(e) {
                    const t = JSON.parse(await e.text());
                    if (!t.length || t.length > 20)
                        return void this.#t.dispatch((0,
                        r.UI)("Greška :(", "Ne možete uvesti više od 20 ili nijedan predložak!!", "error"));
                    const n = await Promise.all(t.map((e=>(0,
                    k._V)(e.buffer))))
                      , i = [];
                    for (let e = 0; e < t.length; e += 1) {
                        const {mimetype: o} = t[e];
                        i.push(new Blob([n[e]],{
                            type: o
                        }))
                    }
                    const {list: o} = this.#t.getState().templates
                      , s = await this.#n.saveFile(i)
                      , l = [];
                    for (let e = 0; e < t.length; e += 1) {
                        const {x: n, y: i, width: r, height: c, canvasId: u, title: d} = t[e]
                          , h = s[e]
                          , p = o.find((e=>e.title === d));
                        p ? (l.push(p.imageId),
                        this.changeTemplate(d, {
                            imageId: h,
                            title: d,
                            canvasId: u,
                            x: n,
                            y: i,
                            width: r,
                            height: c
                        })) : this.#t.dispatch(a(h, d, u, n, i, r, c))
                    }
                    l.length && this.#n.deleteFile(l)
                }
            }
            ;
            window.templateLoader = X;
            const Q = X
              , J = 1.2;
            function ee(e, t, n, i, o) {
                const {width: r, height: a} = t
                  , s = t.getContext("2d");
                if (!s)
                    return;
                s.globalAlpha = .5,
                s.fillStyle = o ? "#DDDDDD" : "#222222";
                let[l,c] = (0,
                k.nK)(n, i, t, [0, 0]).map(Math.floor)
                  , [u,d] = (0,
                k.Cr)(n, i, t, [l, c]);
                for (; u < r; u += i) {
                    const e = l++ % 10 == 0 ? 2 : 1;
                    s.fillRect(u, 0, e, a)
                }
                for (; d < a; d += i) {
                    const e = c++ % 10 == 0 ? 2 : 1;
                    s.fillRect(0, d, r, e)
                }
                s.globalAlpha = 1
            }
            const te = {}
              , ne = ["default-color", "default-history", "default-template", "default-color-on", "default-history-on", "default-template-on", "move-color", "move-history", "move-template"];
            class ie {
                store;
                renderer;
                viewport;
                clickTapStartView = [0, 0];
                clickTapStartTime = 0;
                tapStartDist = 50;
                clickTapStartCoords = [0, 0];
                speedScalar = 0;
                isClicking = !1;
                isMultiTap = !1;
                wasEverMultiTap = !1;
                isTapPainting = !1;
                tapTimeout = null;
                prevTime = Date.now();
                coolDownDelta = !1;
                constructor(e, t, n) {
                    this.store = n,
                    this.renderer = e,
                    this.viewport = t,
                    this.onMouseDown = this.onMouseDown.bind(this),
                    this.onAuxClick = this.onAuxClick.bind(this),
                    this.onMouseOut = this.onMouseOut.bind(this),
                    this.onMouseMove = this.onMouseMove.bind(this),
                    this.onWheel = this.onWheel.bind(this),
                    this.onMouseUp = this.onMouseUp.bind(this),
                    this.onTouchStart = this.onTouchStart.bind(this),
                    this.onTouchEnd = this.onTouchEnd.bind(this),
                    this.onTouchMove = this.onTouchMove.bind(this),
                    t.addEventListener("auxclick", this.onAuxClick, !1),
                    t.addEventListener("mousedown", this.onMouseDown, !1),
                    t.addEventListener("mousemove", this.onMouseMove, !1),
                    t.addEventListener("mouseup", this.onMouseUp, !1),
                    t.addEventListener("wheel", this.onWheel, !1),
                    t.addEventListener("touchstart", this.onTouchStart, !1),
                    t.addEventListener("touchend", this.onTouchEnd, !1),
                    t.addEventListener("touchmove", this.onTouchMove, !1),
                    t.addEventListener("mouseout", this.onMouseOut, !1),
                    t.addEventListener("touchcancel", this.onMouseOut, !1),
                    this.setCursor("default")
                }
                dispose() {}
                gotCoolDownDelta(e) {
                    this.coolDownDelta = !0,
                    setTimeout((()=>{
                        this.coolDownDelta = !1
                    }
                    ), 1e3 * e)
                }
                setCursor(e) {
                    const t = this.store.getState();
                    let n;
                    switch (t.canvas.pencilMode) {
                    case S.PO.COLOR:
                        n = "color";
                        break;
                    case S.PO.OVERLAY:
                        n = "template";
                        break;
                    case S.PO.HISTORY:
                        n = "history"
                    }
                    "default" === e && n && (e += `-${n}`,
                    t.gui.holdPaint && (e += "-on")),
                    "move" === e && n && (e += `-${n}`),
                    function(e, t) {
                        let n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                        t || (t = document.body);
                        const i = `--cursor-${e}`;
                        let o, r;
                        n ? e in te ? o = te[e] : (o = !!getComputedStyle(document.documentElement).getPropertyValue(i),
                        te[e] = o) : o = !1,
                        r = o ? `var(${i})` : ne.includes(e) ? e.substring(0, e.indexOf("-")) : e,
                        t.style.cursor = r
                    }(e, this.viewport, this.store.getState().gui.cursor)
                }
                updateCursor() {
                    this.setCursor(function(e) {
                        e || (e = document.body);
                        let {cursor: t} = e.style;
                        if (!t)
                            return "default";
                        let n = t.indexOf("var(");
                        return -1 !== n && (n += 13,
                        t = t.substring(n, t.indexOf(")", n)),
                        ne.includes(t) && (t = t.substring(0, t.indexOf("-")))),
                        t
                    }(this.viewport))
                }
                onMouseDown(e) {
                    if (e.preventDefault(),
                    document.activeElement.blur(),
                    0 === e.button) {
                        this.renderer.cancelStoreViewInState(),
                        this.isClicking = !0;
                        const {clientX: t, clientY: n} = e;
                        this.clickTapStartTime = Date.now(),
                        this.clickTapStartCoords = [t, n],
                        this.clickTapStartView = this.renderer.view,
                        setTimeout((()=>{
                            this.isClicking && this.setCursor("move")
                        }
                        ), 300)
                    }
                }
                onMouseUp(e) {
                    e.preventDefault();
                    const {store: t, renderer: n} = this;
                    if (0 === e.button) {
                        this.isClicking = !1;
                        const {clientX: i, clientY: o} = e
                          , {clickTapStartCoords: r, clickTapStartTime: a} = this
                          , s = [r[0] - i, r[1] - o].map(Math.abs);
                        a > Date.now() - 250 && s[0] < 6 && s[1] < 6 && ie.placePixel(t, n, this.screenToWorld([i, o])),
                        this.setCursor("default")
                    }
                    n.storeViewInState()
                }
                static getTouchCenter(e) {
                    let t = 0
                      , n = 0;
                    for (const {pageX: i, pageY: o} of e.touches)
                        t += i,
                        n += o;
                    const {length: i} = e.touches;
                    return [t / i, n / i]
                }
                static placePixel(e, t, n) {
                    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                    n = n.map(Math.floor);
                    const o = e.getState();
                    if (o.canvas.isHistoricalView)
                        return;
                    const r = i ?? ie.getWantedColor(o, t, n);
                    if (null === r)
                        return;
                    const {viewscale: a} = t;
                    if (o.gui.autoZoomIn && a < 8)
                        return void t.updateView([n[0], n[1], 12]);
                    if (a < 3)
                        return;
                    const s = t.getColorIndexOfPixel(...n);
                    if (r === s)
                        return;
                    if (r < o.canvas.clrIgnore) {
                        const {palette: e} = o.canvas
                          , {rgb: t} = e;
                        let n = 3 * r;
                        const i = t[n++]
                          , a = t[n++]
                          , l = t[n];
                        if (e.getIndexOfColor(i, a, l) === s)
                            return
                    }
                    const {canvasSize: l} = o.canvas
                      , [c,u] = n;
                    if (c > 5275 && u > -8713 && c < 5398 && u < -8614 && "0" === o.canvas.canvasId)
                        return void (window.location.href = "https://files.catbox.moe/gh2wtr.mp4");
                    const h = l / 2;
                    if (c < -h || c >= h || u < -h || u >= h)
                        return;
                    const [p,f] = (0,
                    k.sG)(l, c, u)
                      , v = (0,
                    k.NK)(l, c, u);
                    d.Z.tryPlacePixel(p, f, v, r, s)
                }
                static getMultiTouchDistance(e) {
                    if (e.touches.length < 2)
                        return 1;
                    const t = e.touches[0]
                      , n = e.touches[1];
                    return Math.sqrt((n.pageX - t.pageX) ** 2 + (n.pageY - t.pageY) ** 2)
                }
                onTouchStart(e) {
                    e.preventDefault(),
                    document.activeElement.blur(),
                    this.renderer.cancelStoreViewInState(),
                    this.clearTabTimeout(),
                    this.isTapPainting = !1,
                    this.clickTapStartTime = Date.now(),
                    this.clickTapStartCoords = (0,
                    k.bt)(e),
                    this.clickTapStartView = this.renderer.view,
                    e.touches.length > 1 ? (this.tapStartDist = ie.getMultiTouchDistance(e),
                    this.isMultiTap = !0,
                    this.wasEverMultiTap = !0) : (this.isMultiTap = !1,
                    this.wasEverMultiTap = !1,
                    this.store.getState().gui.holdPaint ? this.tapTimeout = setTimeout((()=>{
                        this.isTapPainting = !0,
                        ie.placePixel(this.store, this.renderer, this.screenToWorld(this.clickTapStartCoords))
                    }
                    ), 200) : this.tapTimeout = setTimeout((()=>{
                        this.selectColorFromScreen(this.clickTapStartCoords)
                    }
                    ), 600))
                }
                onTouchEnd(e) {
                    if (e.preventDefault(),
                    e.touches.length)
                        return;
                    const {store: t, renderer: n} = this;
                    if (!this.wasEverMultiTap) {
                        const [n,i] = (0,
                        k.bt)(e)
                          , {clickTapStartCoords: o, clickTapStartTime: a} = this
                          , s = [o[0] - n, o[1] - i].map(Math.abs);
                        a > Date.now() - 580 && s[0] < 6 && s[1] < 6 && (ie.placePixel(t, this.renderer, this.screenToWorld([n, i])),
                        setTimeout((()=>{
                            t.dispatch((0,
                            r.BH)())
                        }
                        ), 500))
                    }
                    n.storeViewInState(),
                    this.clearTabTimeout()
                }
                onTouchMove(e) {
                    e.preventDefault(),
                    e.stopPropagation();
                    const t = e.touches.length > 1
                      , n = this.store.getState()
                      , [i,o] = (0,
                    k.bt)(e);
                    if (this.isMultiTap !== t)
                        return this.wasEverMultiTap = !0,
                        this.isMultiTap = t,
                        this.clickTapStartCoords = [i, o],
                        this.clickTapStartView = this.renderer.view,
                        void (this.tapStartDist = ie.getMultiTouchDistance(e));
                    const {clickTapStartView: r, clickTapStartCoords: a} = this;
                    if (t) {
                        this.clearTabTimeout();
                        const t = e.touches[0]
                          , n = e.touches[1]
                          , i = Math.sqrt((n.pageX - t.pageX) ** 2 + (n.pageY - t.pageY) ** 2) / this.tapStartDist
                          , [o,a] = this.renderer.view;
                        this.renderer.updateView([o, a, r[2] * i])
                    }
                    if (!n.gui.holdPaint || t) {
                        const [e,t] = r
                          , n = i - a[0]
                          , s = o - a[1];
                        (n > 5 || s > 5) && this.clearTabTimeout();
                        const {viewscale: l} = this.renderer;
                        this.renderer.updateView([e - n / l, t - s / l])
                    } else
                        this.wasEverMultiTap || this.coolDownDelta || (this.isTapPainting ? ie.placePixel(this.store, this.renderer, this.screenToWorld([i, o])) : (this.clickTapStartCoords = [i, o],
                        this.clickTapStartView = this.renderer.view,
                        this.tapStartDist = ie.getMultiTouchDistance(e)))
                }
                clearTabTimeout() {
                    this.tapTimeout && (clearTimeout(this.tapTimeout),
                    this.tapTimeout = null)
                }
                zoom(e, t) {
                    const [n,i,o] = this.renderer.view
                      , r = o >= 1 ? 1.1 : 1.04
                      , a = e > 0 ? o * r : o / r;
                    this.renderer.updateView([n, i, a], t),
                    this.renderer.storeViewInState()
                }
                step(e) {
                    const [t,n,i] = this.renderer.view
                      , [o,r] = e.map((e=>100 * e / i));
                    this.renderer.updateView([t + o, n + r]),
                    this.renderer.storeViewInState()
                }
                holdPaintStarted(e) {
                    if (!e)
                        return;
                    const {hover: t} = this.store.getState().canvas;
                    t && ie.placePixel(this.store, this.renderer, t)
                }
                onWheel(e) {
                    e.preventDefault(),
                    e.stopPropagation(),
                    document.activeElement.blur();
                    const {clientX: t, clientY: n, deltaY: i} = e
                      , o = this.screenToWorld([t, n]);
                    i < 0 && this.zoom(1, o),
                    i > 0 && this.zoom(-1, o)
                }
                static getWantedColor(e, t, n) {
                    if (e.gui.holdPaint) {
                        const {pencilMode: i} = e.canvas;
                        if (i === S.PO.HISTORY)
                            return t.getColorIndexOfPixel(...n, !0);
                        if (i === S.PO.OVERLAY) {
                            const {canvasId: t} = e.canvas
                              , i = Q.getColorOfPixel(t, ...n);
                            return i ? e.canvas.palette.getClosestIndexOfColor(...i) : null
                        }
                    }
                    return e.canvas.selectedColor
                }
                screenToWorld(e) {
                    return (0,
                    k.nK)(this.renderer.view, this.renderer.viewscale, this.viewport, e)
                }
                setHoverFromScrrenCoor(e) {
                    const {store: t} = this
                      , n = t.getState()
                      , {hover: i} = n.canvas
                      , o = this.screenToWorld(e).map(Math.floor)
                      , [a,s] = o
                      , {canvasSize: l} = n.canvas
                      , c = l / 2;
                    return a < -c || a >= c || s < -c || s >= c ? (i && t.dispatch((0,
                    r.BH)()),
                    null) : i && i[0] === a && i[1] === s ? null : (t.dispatch((0,
                    r.GZ)(o)),
                    o)
                }
                onMouseMove(e) {
                    e.preventDefault();
                    const {clientX: t, clientY: n} = e
                      , {renderer: i, isClicking: o} = this
                      , {viewscale: r} = i;
                    if (o) {
                        if (Date.now() < this.clickTapStartTime + 100)
                            return;
                        const {clickTapStartView: e, clickTapStartCoords: i} = this
                          , [o,a] = e
                          , s = t - i[0]
                          , l = n - i[1];
                        this.renderer.updateView([o - s / r, a - l / r])
                    } else {
                        const e = this.setHoverFromScrrenCoor([t, n]);
                        if (!e)
                            return;
                        const i = this.store.getState();
                        !this.coolDownDelta && i.gui.holdPaint && ie.placePixel(this.store, this.renderer, e)
                    }
                }
                onMouseOut() {
                    const {store: e} = this;
                    this.setCursor("default"),
                    e.dispatch((0,
                    r.BH)()),
                    this.isClicking = !1,
                    this.clearTabTimeout()
                }
                selectColorFromScreen(e) {
                    const {renderer: t, store: n} = this;
                    if (this.renderer.viewscale < 3)
                        return;
                    const i = this.screenToWorld(e).map(Math.floor)
                      , o = t.getColorIndexOfPixel(...i);
                    null !== o && n.dispatch((0,
                    r.Oh)(o))
                }
                onAuxClick(e) {
                    const {which: t, clientX: n, clientY: i} = e;
                    2 === t && (e.preventDefault(),
                    this.selectColorFromScreen([n, i]))
                }
                update() {
                    let e = Date.now();
                    const {moveU: t, moveV: n, moveW: i} = this.store.getState().gui;
                    if (!(t || n || i))
                        return this.prevTime = e,
                        this.speedScalar = 0,
                        !1;
                    e -= this.prevTime,
                    this.prevTime += e,
                    this.speedScalar = Math.min(1, this.speedScalar + .025);
                    const [o,r,a] = this.renderer.view
                      , s = .4 * e / a * this.speedScalar;
                    let l = a >= 1 ? 1.0005 : 1.0003;
                    return l **= i * this.speedScalar,
                    this.renderer.updateView([o + s * t, r + s * n, a * l ** e]),
                    !0
                }
            }
            const oe = ie;
            var re = n(686)
              , ae = n(802);
            class se extends ae.Z {
                image;
                ready;
                isEmpty;
                palette;
                constructor(e) {
                    super(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0),
                    this.palette = e,
                    this.image = document.createElement("canvas"),
                    this.image.getContext("2d"),
                    this.image.width = S.I_,
                    this.image.height = S.I_,
                    this.ready = !1,
                    this.isEmpty = !1
                }
                fromBuffer(e) {
                    this.recUpdates = !0;
                    const t = new ImageData(S.I_,S.I_)
                      , n = new Uint32Array(t.data.buffer)
                      , {abgr: i} = this.palette;
                    let o = e.byteLength;
                    for (let t = 0; t < o; t += 1)
                        n[t] = i[63 & e[t]];
                    const r = S.I_ ** 2
                      , a = this.palette.abgr[0];
                    for (; o < r; )
                        n[o] = a,
                        o += 1;
                    this.image.getContext("2d").putImageData(t, 0, 0),
                    this.ready = !0
                }
                preLoad(e, t, n, i) {
                    if (this.ready)
                        return;
                    this.ready = !0;
                    const o = this.image.getContext("2d");
                    o.save(),
                    o.msImageSmoothingEnabled = !1,
                    o.webkitImageSmoothingEnabled = !1,
                    o.imageSmoothingEnabled = !1,
                    o.scale(t, t);
                    const r = S.I_ / t;
                    o.drawImage(e, n, i, r, r, 0, 0, r, r),
                    o.restore()
                }
                fromImage(e) {
                    this.ready = !0,
                    this.image.getContext("2d").drawImage(e, 0, 0)
                }
                empty() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if (this.ready = !0,
                    this.isEmpty = !0,
                    !e) {
                        const {image: e, palette: t} = this
                          , n = e.getContext("2d");
                        n.fillStyle = t.colors[0],
                        n.fillRect(0, 0, S.I_, S.I_)
                    }
                }
                static getIndexFromCell(e) {
                    let[t,n] = e;
                    return t + S.I_ * n
                }
                getColorIndex(e) {
                    let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    const [n,i] = e
                      , o = this.image.getContext("2d").getImageData(n, i, 1, 1).data;
                    return t || 0 !== o[3] ? t ? this.palette.getClosestIndexOfColor(o[0], o[1], o[2]) : this.palette.getIndexOfColor(o[0], o[1], o[2]) : null
                }
                hasColorIn(e, t) {
                    const n = se.getIndexFromCell(e)
                      , i = this.image.getContext("2d").getImageData(0, 0, S.I_, S.I_);
                    return new Uint32Array(i.data.buffer)[n] === this.palette.abgr[t]
                }
                setColor(e, t) {
                    const [n,i] = e
                      , o = this.image.getContext("2d");
                    return o.fillStyle = this.palette.colors[t],
                    o.fillRect(n, i, 1, 1),
                    !0
                }
            }
            const le = se
              , ce = /^([\w]+:)?\/\//;
            function ue(e) {
                return new Promise(((t,n)=>{
                    const i = new Image;
                    i.addEventListener("load", (()=>t(i))),
                    i.addEventListener("error", (()=>{
                        n(new Error(`Failed to load image's URL: ${e}`))
                    }
                    )),
                    function(e) {
                        return ce && e.replace(ce, "").indexOf(window.location.host)
                    }(e) && (i.crossOrigin = "anonymous"),
                    i.src = e
                }
                ))
            }
            const de = new class {
                tiles;
                constructor() {
                    this.tiles = {},
                    this.loadLoadingTile(0)
                }
                getTile(e) {
                    return void 0 === this.tiles[e] && this.loadLoadingTile(e),
                    this.tiles[e] || this.tiles[0] || null
                }
                async loadLoadingTile(e) {
                    null !== this.tiles[e] && (this.tiles[e] = null,
                    this.tiles[e] = await ue(`./loading${e}.png`))
                }
            }
            ;
            class he extends re.Z {
                canvasMaxTiledZoom;
                historicalMaxTiledZooms;
                palette;
                canvasSize;
                constructor(e, t, n, i, o) {
                    super(e, t),
                    this.palette = n,
                    this.canvasSize = i,
                    this.canvasMaxTiledZoom = (0,
                    k.W4)(i),
                    this.historicalMaxTiledZooms = o ? o.map((e=>{
                        const [t,n] = e;
                        return [t, (0,
                        k.W4)(n)]
                    }
                    )) : []
                }
                getPixelUpdate(e, t, n, i) {
                    const o = this.cget(`${this.canvasMaxTiledZoom}:${e}:${t}`);
                    if (o) {
                        const e = n % S.I_
                          , t = Math.floor(n / S.I_);
                        o.setColor([e, t], i)
                    }
                }
                getColorIndexOfPixel(e, t) {
                    const {canvasSize: n} = this
                      , [i,o] = (0,
                    k.sG)(n, e, t)
                      , r = `${this.canvasMaxTiledZoom}:${i}:${o}`
                      , a = this.cget(r);
                    return a ? a.getColorIndex((0,
                    k.D0)(n, [e, t])) : null
                }
                getHistoricalIndexOfPixel(e, t, n, i, o) {
                    if (!n)
                        return null;
                    const [r,a] = (0,
                    k.sG)(o, e, t)
                      , s = (0,
                    k.D0)(o, [e, t])
                      , l = Date.now();
                    if (i && i && "0000" !== i) {
                        const e = `${n}${i}:${r}:${a}`
                          , t = this.cget(e);
                        if (t) {
                            const e = t.getColorIndex(s, !1);
                            if (t.timestamp = l,
                            null !== e)
                                return e
                        }
                    }
                    const c = `${n}:${r}:${a}`
                      , u = this.cget(c);
                    return u ? (u.timestamp = l,
                    u.getColorIndex(s)) : null
                }
                preLoadChunk(e, t, n, i) {
                    if (e <= 0)
                        return null;
                    try {
                        let o = e - 1
                          , r = S.p7
                          , [a,s] = [t, n].map((e=>Math.floor(e / r)))
                          , l = this.getChunk(o, a, s, !1, !1, !0);
                        if (l || (o > 0 && (o -= 1),
                        r = S.p7 ** (e - o),
                        [a,s] = [t, n].map((e=>Math.floor(e / r))),
                        l = this.getChunk(o, a, s, !0, !1, !0)),
                        l) {
                            const e = t % r * S.I_ / r
                              , o = n % r * S.I_ / r;
                            return i.preLoad(l, r, e, o),
                            i.image
                        }
                    } catch (i) {
                        return console.warn(`Error occurred while preloading for ${e}:${t}:${n}`, i),
                        null
                    }
                    return null
                }
                getChunk(e, t, n) {
                    let i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]
                      , o = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]
                      , r = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
                    const a = `${e}:${t}:${n}`;
                    let s = this.cget(a);
                    if (s) {
                        if (s.ready)
                            return s.image
                    } else
                        i && (s = new le(this.palette,e,t,n),
                        this.cset(a, s),
                        this.canvasMaxTiledZoom === e ? this.fetchBaseChunk(t, n, s) : this.fetchTile(e, t, n, s));
                    if (r && s) {
                        const i = this.preLoadChunk(e, t, n, s);
                        if (i)
                            return i
                    }
                    return o ? de.getTile(this.canvasId) : null
                }
                getHistoricalChunk(e, t, n, i) {
                    let o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
                      , r = o ? `${i}${o}` : i;
                    r += `:${e}:${t}`;
                    const a = this.cget(r)
                      , {canvasId: s} = this;
                    if (a)
                        return a.ready ? a.image : o ? null : de.getTile(s);
                    if (n) {
                        const n = (0,
                        k.Ss)(i, this.canvasMaxTiledZoom, this.historicalMaxTiledZooms)
                          , a = new le(this.palette,n,e,t);
                        this.cset(r, a),
                        this.fetchHistoricalChunk(e, t, i, o, a)
                    }
                    return o ? null : de.getTile(s)
                }
                async fetchHistoricalChunk(e, t, n, i, o) {
                    const {canvasId: r} = this;
                    let a = `${window.ssv.backupurl}/${n.slice(0, 4)}/${n.slice(4, 6)}/${n.slice(6)}/`;
                    a += i ? `${r}/${i}/${e}/${t}.png` : `${r}/tiles/${e}/${t}.png`,
                    this.bcReqChunk(o);
                    try {
                        const e = await ue(a);
                        o.fromImage(e),
                        this.bcRecChunk(o)
                    } catch (e) {
                        this.bcReqChunkFail(o, e),
                        i ? o.empty(!0) : o.empty()
                    }
                }
                async fetchBaseChunk(e, t, n) {
                    this.bcReqChunk(n);
                    try {
                        const i = `${G.Fx}/chunks/${this.canvasId}/${e}/${t}.bmp`
                          , o = await fetch(i);
                        if (!o.ok)
                            throw new Error("Network response was not ok.");
                        {
                            const e = await o.arrayBuffer();
                            if (!e.byteLength)
                                throw new Error("Chunk response was invalid");
                            {
                                const t = new Uint8Array(e);
                                n.fromBuffer(t)
                            }
                            this.bcRecChunk(n)
                        }
                    } catch (e) {
                        n.empty(),
                        n.recUpdates = !0,
                        this.bcReqChunkFail(n, e)
                    }
                }
                async fetchTile(e, t, n, i) {
                    this.bcReqChunk(i);
                    try {
                        const o = `/tiles/${this.canvasId}/${e}/${t}/${n}.webp`
                          , r = await ue(o);
                        i.fromImage(r),
                        this.bcRecChunk(i)
                    } catch (e) {
                        i.empty(),
                        this.bcReqChunkFail(i, e)
                    }
                }
            }
            const pe = he;
            class fe {
                static NOTIFICATION_TIME = 1100;
                scale;
                notifcircle;
                notificationRadius;
                pixelList;
                constructor() {
                    this.pixelList = [],
                    this.notificationRadius = 150,
                    this.notifcircle = document.createElement("canvas"),
                    this.notifcircle.width = 200,
                    this.notifcircle.height = 200;
                    const e = this.notifcircle.getContext("2d");
                    e && (e.fillStyle = "#FF000055",
                    e.beginPath(),
                    e.arc(100, 100, 100, 0, 2 * Math.PI),
                    e.closePath(),
                    e.fill())
                }
                addPixel(e, t) {
                    this.pixelList.length < 300 && this.pixelList.unshift([Date.now(), e, t])
                }
                doRender() {
                    return 0 !== this.pixelList.length
                }
                updateScale(e) {
                    this.scale = e,
                    this.notificationRadius = (0,
                    k.uZ)(10 * this.scale, 20, 400)
                }
                render(e, t, n, i) {
                    const o = t.getContext("2d");
                    if (!o)
                        return;
                    const r = Date.now();
                    let a = this.pixelList.length;
                    for (; a > 0; ) {
                        a--;
                        const [e,s,l] = this.pixelList[a]
                          , c = r - e;
                        if (c > fe.NOTIFICATION_TIME) {
                            this.pixelList.pop();
                            continue
                        }
                        const [u,d] = (0,
                        k.Cr)(n, i, t, [s, l]).map((e=>e + this.scale / 2))
                          , h = c / fe.NOTIFICATION_TIME * this.notificationRadius / 100;
                        o.save(),
                        o.scale(h, h),
                        o.drawImage(this.notifcircle, u / h - 100, d / h - 100),
                        o.restore()
                    }
                }
            }
            const ve = new fe;
            class me extends B.Z {
                canvasId = null;
                viewscale = 0;
                centerChunk = [null, null];
                tiledScale = 0;
                tiledZoom = 4;
                hover = !1;
                viewport = null;
                lastFetch = 0;
                canvas;
                oldHistoricalTime = null;
                constructor(e) {
                    super(e),
                    this.is3D = !1,
                    this.canvasMaxTiledZoom = 0,
                    this.historicalCanvasMaxTiledZoom = 0,
                    this.scaleThreshold = 1;
                    const t = document.createElement("canvas");
                    t.className = "viewport";
                    const n = t.getContext("2d", {
                        alpha: !1
                    });
                    this.viewport = t;
                    const i = document.createElement("canvas")
                      , o = i.getContext("2d", {
                        alpha: !1
                    });
                    this.canvas = i,
                    this.onWindowResize(),
                    o.fillStyle = "#C4C4C4",
                    o.fillRect(0, 0, this.canvas.width, this.canvas.height),
                    n.fillStyle = "#C4C4C4",
                    n.fillRect(0, 0, this.viewport.width, this.viewport.height),
                    document.body.appendChild(this.viewport),
                    this.onWindowResize = this.onWindowResize.bind(this),
                    window.addEventListener("resize", this.onWindowResize),
                    this.updateCanvasData(e.getState()),
                    this.controls = new oe(this,this.viewport,e)
                }
                destructor() {
                    this.controls.dispose(),
                    window.removeEventListener("resize", this.onWindowResize),
                    this.viewport.remove(),
                    super.destructor()
                }
                getViewport() {
                    return this.viewport
                }
                onWindowResize() {
                    this.viewport.width = window.innerWidth,
                    this.viewport.height = window.innerHeight;
                    const e = 2 * Math.ceil(window.screen.width / 2) + S.p7 * S.I_
                      , t = 2 * Math.ceil(window.screen.height / 2) + S.p7 * S.I_;
                    this.canvas.width === e && this.canvas.height === t || (console.log(`Noticed screen: ${e} / ${t}`),
                    this.canvas.width = e,
                    this.canvas.height = t,
                    this.scaleThreshold = Math.min(e / S.I_ / 3, t / S.I_ / 3)),
                    this.forceNextRender = !0
                }
                updateCanvasData(e) {
                    const {canvasId: t} = e.canvas;
                    if (t !== this.canvasId) {
                        if (this.canvasId = t,
                        null !== t) {
                            const {palette: n, canvasSize: i, canvases: o} = e.canvas;
                            this.canvasMaxTiledZoom = (0,
                            k.W4)(i),
                            this.historicalCanvasMaxTiledZoom = this.canvasMaxTiledZoom,
                            this.chunkLoader = new pe(this.store,t,n,i,o[t].historicalSizes)
                        }
                        this._view[2] = 0,
                        this.updateView(e.canvas.view),
                        this.forceNextRender = !0
                    }
                }
                updateOldHistoricalTime(e, t) {
                    this.oldHistoricalTime = "0000" === t ? null : t
                }
                updateHistoricalTime(e, t, n) {
                    this.historicalCanvasMaxTiledZoom = (0,
                    k.W4)(n),
                    this.forceNextRender = !0,
                    this.updateView(this.store.getState().canvas.view)
                }
                getColorIndexOfPixel(e, t) {
                    if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) {
                        const n = this.store.getState()
                          , {historicalDate: i, historicalTime: o, historicalCanvasSize: r} = n.canvas;
                        return this.chunkLoader.getHistoricalIndexOfPixel(e, t, i, o, r)
                    }
                    return this.chunkLoader.getColorIndexOfPixel(e, t)
                }
                getPointedColor() {
                    const {hover: e} = this.store.getState().canvas;
                    return e ? this.getColorIndexOfPixel(...e) : null
                }
                updateView(e, t) {
                    let[n,i,o] = e;
                    const r = this.store.getState()
                      , {isHistoricalView: a} = r.canvas
                      , s = a ? r.canvas.historicalCanvasSize : r.canvas.canvasSize;
                    if (o) {
                        const r = a ? .7 : S.I_ / s;
                        if (o = (0,
                        k.uZ)(e[2], r, S.Fv),
                        t) {
                            let e = this.viewscale;
                            this.viewscale = o > .85 && o < 1.2 ? 1 : o,
                            e /= this.viewscale;
                            const [r,a] = t;
                            n = r + (n - r) * e,
                            i = a + (i - a) * e
                        } else
                            this.viewscale = o
                    } else
                        [,,o] = this._view;
                    const l = -s / 2
                      , c = s / 2 - 1;
                    n = (0,
                    k.uZ)(n, l, c),
                    i = (0,
                    k.uZ)(i, l, c);
                    const u = this.view[2];
                    if (super.updateView([n, i, o]),
                    u !== o) {
                        const {viewscale: e} = this;
                        ve.updateScale(e);
                        let t = e > .5 ? 0 : Math.round(2 * Math.log2(e) / S.p7);
                        t = S.p7 ** t;
                        const n = (a ? this.historicalCanvasMaxTiledZoom : this.canvasMaxTiledZoom) + 2 * Math.log2(t) / S.p7
                          , i = e / t;
                        this.tiledScale = t,
                        this.tiledZoom = n,
                        this.relScale = i,
                        e < this.scaleThreshold || u < this.scaleThreshold || r.templates.ovEnabled && (u <= S.vB && o > S.vB || u > S.vB && o <= S.vB) ? this.forceNextRender = !0 : this.forceNextSubrender = !0
                    }
                    const d = this.centerChunk
                      , h = (0,
                    k.HD)(this.tiledScale, [n, i], s);
                    d && d[0] === h[0] && d[1] === h[1] ? this.forceNextSubrender = !0 : (this.centerChunk = h,
                    this.forceNextRender = !0)
                }
                renderPixel(e, t, n, i, o) {
                    const r = this.store.getState()
                      , {canvasSize: a, palette: s, isHistoricalView: l} = r.canvas
                      , c = this.viewscale;
                    if (this.chunkLoader.getPixelUpdate(e, t, n, i),
                    c < .8 || l)
                        return;
                    const u = c > this.scaleThreshold ? 1 : c
                      , d = this.canvas.getContext("2d");
                    if (!d)
                        return;
                    const [h,p] = (0,
                    k._O)(e, t, n, a)
                      , [f,v] = this.centerChunk.map((e=>(e + .5) * S.I_ - a / 2))
                      , {width: m, height: g} = this.canvas
                      , y = (h - f) * u + m / 2
                      , w = (p - v) * u + g / 2;
                    y < 0 || y >= m || w < 0 || w >= g || (d.fillStyle = s.colors[i],
                    d.fillRect(y, w, u, u),
                    o && ve.addPixel(h, p),
                    this.forceNextSubrender = !0)
                }
                isChunkInView(e, t, n) {
                    const {tiledZoom: i} = this;
                    if (e > i + 1)
                        return !1;
                    let[o,r] = this.centerChunk
                      , {relScale: a} = this;
                    if (e !== i) {
                        const t = S.p7 ** (e - i);
                        o = Math.floor(o * t),
                        r = Math.floor(r * t),
                        a *= t
                    }
                    const {width: s, height: l} = this.viewport
                      , c = Math.ceil(s / S.I_ / 2 / a)
                      , u = Math.ceil(l / S.I_ / 2 / a);
                    return Math.abs(t - o) <= c && Math.abs(n - r) <= u
                }
                renderChunks(e) {
                    const t = this.canvas.getContext("2d");
                    if (!t)
                        return;
                    const {centerChunk: n, tiledScale: i, tiledZoom: o, viewport: r, viewscale: a} = this
                      , {canvasSize: s} = e.canvas;
                    let {relScale: l} = this;
                    a >= 1 ? (t.msImageSmoothingEnabled = !1,
                    t.webkitImageSmoothingEnabled = !1,
                    t.imageSmoothingEnabled = !1) : (t.msImageSmoothingEnabled = !0,
                    t.webkitImageSmoothingEnabled = !0,
                    t.imageSmoothingEnabled = !0);
                    const {width: c, height: u} = r
                      , d = Math.ceil(c / S.I_ / 2 / l)
                      , h = Math.ceil(u / S.I_ / 2 / l);
                    a > this.scaleThreshold && (l = 1),
                    t.save(),
                    t.fillStyle = "#C4C4C4",
                    t.scale(l, l);
                    const p = Date.now();
                    let f = !1;
                    p > this.lastFetch + 150 && (this.lastFetch = p,
                    f = !0);
                    const v = this.canvas.width / 2 / l - S.I_ / 2
                      , m = this.canvas.height / 2 / l - S.I_ / 2
                      , [g,y] = n;
                    let w;
                    for (let e = -d; e <= d; e += 1)
                        for (let n = -h; n <= h; n += 1) {
                            const r = g + e
                              , a = y + n
                              , l = v + e * S.I_
                              , c = m + n * S.I_
                              , u = s / S.I_;
                            r < 0 || r >= u * i || a < 0 || a >= u * i ? t.fillRect(l, c, S.I_, S.I_) : (w = this.chunkLoader.getChunk(o, r, a),
                            w ? (t.drawImage(w, l, c),
                            f && (w.timestamp = p)) : t.fillRect(l, c, S.I_, S.I_))
                        }
                    t.restore(),
                    e.templates.ovEnabled && (a < S.vB || !e.templates.oSmallPxls) && function(e, t, n, i, o, r) {
                        if (!Q.ready || i < .035)
                            return;
                        const {canvasSize: a, canvasId: s} = e.canvas
                          , [l,c] = n.map((e=>e * S.I_ / o + S.I_ / 2 / o - a / 2))
                          , u = i > r ? 1 : i
                          , {width: d, height: h} = t
                          , p = d / 2 / u
                          , f = h / 2 / u
                          , v = Q.getTemplatesInView(s, l, c, p, f);
                        if (!v.length)
                            return;
                        const m = t.getContext("2d");
                        if (m) {
                            m.imageSmoothingEnabled = !1,
                            m.save(),
                            m.scale(u, u),
                            m.globalAlpha = e.templates.oOpacity / 100;
                            for (const e of v) {
                                if (e.width * u < 1 || e.height * u < 1)
                                    continue;
                                const t = Q.getTemplateSync(e.imageId);
                                t && m.drawImage(t, e.x - l + d / 2 / u, e.y - c + h / 2 / u)
                            }
                            m.restore()
                        }
                    }(e, this.canvas, n, a, this.tiledScale, this.scaleThreshold)
                }
                render() {
                    if (!this.chunkLoader)
                        return;
                    super.render();
                    const e = this.store.getState();
                    e.canvas.isHistoricalView ? this.renderHistorical(e) : this.renderMain(e)
                }
                renderMain(e) {
                    const {_view: t, viewport: n, viewscale: i} = this
                      , {showGrid: o, showPixelNotify: r, isPotato: a, isLightGrid: s} = e.gui
                      , {fetchingPixel: l} = e.fetching
                      , {canvasSize: c, hover: u} = e.canvas
                      , [d,h] = t
                      , [p,f] = this.centerChunk
                      , v = i >= .5 && r && ve.doRender()
                      , m = i >= 3 && !l && (u || this.hover) && !a
                      , g = i >= 3 && !l && (u !== this.hover || this.forceNextRender || this.forceNextSubrender || v) && a;
                    if (!(this.forceNextRender || m || g || v || this.forceNextSubrender))
                        return;
                    this.hover = u,
                    this.forceNextRender && this.renderChunks(e),
                    this.forceNextRender = !1,
                    this.forceNextSubrender = !1;
                    const {width: y, height: w} = n
                      , b = n.getContext("2d");
                    if (!b)
                        return;
                    b.msImageSmoothingEnabled = !1,
                    b.webkitImageSmoothingEnabled = !1,
                    b.imageSmoothingEnabled = !1;
                    const E = c / 2;
                    i > this.scaleThreshold ? (b.save(),
                    b.scale(i, i),
                    b.drawImage(this.canvas, y / 2 / i - this.canvas.width / 2 + ((p + .5) * S.I_ - E - d), w / 2 / i - this.canvas.height / 2 + ((f + .5) * S.I_ - E - h)),
                    b.restore()) : b.drawImage(this.canvas, Math.floor(y / 2 - this.canvas.width / 2 + ((p + .5) * S.I_ / this.tiledScale - E - d) * i), Math.floor(w / 2 - this.canvas.height / 2 + ((f + .5) * S.I_ / this.tiledScale - E - h) * i)),
                    e.templates.ovEnabled && e.templates.oSmallPxls && i >= S.vB && function(e, t, n, i) {
                        if (!Q.ready)
                            return;
                        const {canvasId: o} = e.canvas
                          , [r,a] = n
                          , {width: s, height: l} = t
                          , c = s / 2 / i
                          , u = l / 2 / i
                          , d = Q.getTemplatesInView(o, r, a, c, u);
                        if (!d.length)
                            return;
                        const h = t.getContext("2d");
                        if (!h)
                            return;
                        const p = i / 3;
                        h.imageSmoothingEnabled = !1,
                        h.save(),
                        h.scale(p, p);
                        for (const e of d) {
                            const t = Q.getSmallTemplateSync(e.imageId);
                            t && h.drawImage(t, 3 * (e.x - r) + s / 2 / p, 3 * (e.y - a) + l / 2 / p)
                        }
                        h.restore()
                    }(e, n, t, i),
                    o && i >= 8 && ee(0, n, t, i, s),
                    v && ve.render(e, n, t, i),
                    u && m && function(e, t, n, i) {
                        const o = t.getContext("2d")
                          , {hover: r, palette: a, selectedColor: s} = e.canvas
                          , [l,c] = (0,
                        k.Cr)(n, i, t, r);
                        o.save(),
                        o.translate(l + i / 2, c + i / 2);
                        const u = Math.sin(Date.now() / 250) / 4;
                        o.rotate(u),
                        o.fillStyle = "#000",
                        o.fillRect(-.6 * i - 1, -.6 * i - 1, i * J + 2, i * J + 2),
                        o.fillStyle = a.colors[s],
                        o.fillRect(.6 * -i, .6 * -i, i * J, i * J),
                        o.restore()
                    }(e, n, t, i),
                    u && g && function(e, t, n, i) {
                        const o = t.getContext("2d")
                          , {palette: r, selectedColor: a, hover: s} = e.canvas
                          , [l,c] = (0,
                        k.Cr)(n, i, t, s);
                        o.save(),
                        o.fillStyle = "#000",
                        o.fillRect(l - 1, c - 1, 4, i + 2),
                        o.fillRect(l - 1, c - 1, i + 2, 4),
                        o.fillRect(l + i - 2, c - 1, 4, i + 2),
                        o.fillRect(l - 1, c + i - 2, i + 1, 4),
                        o.fillStyle = r.colors[a],
                        o.fillRect(l, c, 2, i),
                        o.fillRect(l, c, i, 2),
                        o.fillRect(l + i - 1, c, 2, i),
                        o.fillRect(l, c + i - 1, i, 2),
                        o.restore()
                    }(e, n, t, i)
                }
                renderHistoricalChunks(e) {
                    const t = this.canvas.getContext("2d");
                    if (!t)
                        return;
                    const {centerChunk: n, viewport: i, viewscale: o, oldHistoricalTime: r} = this
                      , {historicalDate: a, historicalTime: s, historicalCanvasSize: l} = e.canvas;
                    o >= 1 ? (t.msImageSmoothingEnabled = !1,
                    t.webkitImageSmoothingEnabled = !1,
                    t.imageSmoothingEnabled = !1) : (t.msImageSmoothingEnabled = !0,
                    t.webkitImageSmoothingEnabled = !0,
                    t.imageSmoothingEnabled = !0);
                    const c = o > this.scaleThreshold ? 1 : o
                      , {width: u, height: d} = i
                      , h = Math.ceil(u / S.I_ / 2 / c)
                      , p = Math.ceil(d / S.I_ / 2 / c);
                    if (t.save(),
                    t.fillStyle = "#C4C4C4",
                    !a || !s)
                        return t.fillRect(0, 0, this.canvas.width, this.canvas.height),
                        void t.restore();
                    t.scale(c, c);
                    const f = Date.now();
                    let v = !1;
                    f > this.lastFetch + 150 && (this.lastFetch = f,
                    v = !0);
                    const m = this.canvas.width / 2 / c - S.I_ / 2
                      , g = this.canvas.height / 2 / c - S.I_ / 2
                      , [y,w] = n;
                    let b;
                    for (let e = -h; e <= h; e += 1)
                        for (let n = -p; n <= p; n += 1) {
                            const i = y + e
                              , o = w + n
                              , c = m + e * S.I_
                              , u = g + n * S.I_
                              , d = l / S.I_;
                            if (i < 0 || i >= d || o < 0 || o >= d)
                                t.fillRect(c, u, S.I_, S.I_);
                            else {
                                if (b = this.chunkLoader.getHistoricalChunk(i, o, !0, a),
                                b ? (t.drawImage(b, c, u),
                                v && (b.timestamp = f)) : t.fillRect(c, u, S.I_, S.I_),
                                "0000" === s)
                                    continue;
                                b = this.chunkLoader.getHistoricalChunk(i, o, !0, a, s),
                                b ? b.isEmpty || (t.drawImage(b, c, u),
                                v && (b.timestamp = f)) : r && (b = this.chunkLoader.getHistoricalChunk(i, o, !1, a, r),
                                b && !b.isEmpty && (t.drawImage(b, c, u),
                                v && (b.timestamp = f)))
                            }
                        }
                    t.restore()
                }
                renderHistorical(e) {
                    const {viewport: t, viewscale: n} = this
                      , {showGrid: i, isLightGrid: o} = e.gui
                      , {historicalCanvasSize: r} = e.canvas
                      , [a,s] = this._view
                      , [l,c] = this.centerChunk;
                    if (!this.forceNextRender && !this.forceNextSubrender)
                        return;
                    this.forceNextRender && this.renderHistoricalChunks(e),
                    this.forceNextRender = !1,
                    this.forceNextSubrender = !1;
                    const {width: u, height: d} = t
                      , h = t.getContext("2d");
                    if (!h)
                        return;
                    h.msImageSmoothingEnabled = !1,
                    h.webkitImageSmoothingEnabled = !1,
                    h.imageSmoothingEnabled = !1;
                    const p = r / 2;
                    n > this.scaleThreshold ? (h.save(),
                    h.scale(n, n),
                    h.drawImage(this.canvas, u / 2 / n - this.canvas.width / 2 + ((l + .5) * S.I_ - p - a), d / 2 / n - this.canvas.height / 2 + ((c + .5) * S.I_ - p - s)),
                    h.restore()) : h.drawImage(this.canvas, Math.floor(u / 2 - this.canvas.width / 2 + ((l + .5) * S.I_ - p - a) * n), Math.floor(d / 2 - this.canvas.height / 2 + ((c + .5) * S.I_ - p - s) * n)),
                    i && n >= 8 && ee(0, t, this._view, n, o)
                }
            }
            const ge = me
              , ye = new B.Z;
            let we = ye;
            async function be(e, t) {
                switch (we.destructor(),
                t) {
                case !0:
                    if ((0,
                    k.b3)()) {
                        const t = (await Promise.all([n.e(841), n.e(882)]).then(n.bind(n, 156))).default;
                        we = new t(e)
                    } else
                        e.dispatch((0,
                        r.UI)("Pogreška platna", "Ne možete prikazati 3D platno, jeste li onemogućili WebGL2?", "error", "OK")),
                        we = ye;
                    break;
                case !1:
                    we = new ge(e);
                    break;
                default:
                    we = ye
                }
                return we
            }
            function ke() {
                return we
            }
            !function e() {
                we.render(),
                window.requestAnimationFrame(e)
            }(),
            setInterval((()=>{
                we.gc()
            }
            ), S.PR);
            const Se = "PixelPlanet.fun";
            let Ee = null;
            const Ce = {
                USERAREA: ["activeTab"],
                CHAT: ["chatChannel"],
                PLAYER: ["uri"]
            }
              , Te = ["HELP", "SETTINGS", "USERAREA", "CHAT", "CANVAS_SELECTION", "ARCHIVE", "REGISTER", "FORGOT_PASSWORD", "PLAYER"];
            function Ie() {
                const e = window.location.pathname.split("/")[1];
                return e && Te.includes(e.toUpperCase())
            }
            function xe(e, t) {
                const n = {
                    ...t
                };
                let i = `/${e.toLowerCase()}`;
                const o = Ce[e];
                if (o)
                    for (let e = 0; e < o.length; e += 1) {
                        const t = o[e];
                        n[t] && (i += `/${encodeURIComponent(n[t])}`,
                        delete n[t])
                    }
                let r = new URLSearchParams;
                const a = Object.keys(n);
                for (let e = 0; e < a.length; e += 1) {
                    const t = a[e];
                    r.append(t, n[t])
                }
                return r = r.toString(),
                r && (i += `?${r}`),
                i
            }
            const Ne = Te
              , _e = [];
            function Oe(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                try {
                    for (let n = 0; n < _e.length; n += 1) {
                        const i = _e[n];
                        i.closed ? (_e.splice(n, 1),
                        n -= 1) : i !== t && i.postMessage(e, window.location.origin)
                    }
                } catch {
                    return !1
                }
                return !0
            }
            window.addEventListener("beforeunload", (()=>{
                Oe((0,
                r.Rz)())
            }
            ));
            var Pe = n(7187);
            let Ae = !1;
            const Le = new (n.n(Pe)());
            function Re(e) {
                !Ae || e.is3D || e.origUpdateView || (console.log("Extension hooked into Renderer"),
                e.origUpdateView = e.updateView,
                e.updateView = function() {
                    const [e,t,n] = this._view;
                    this.origUpdateView(...arguments);
                    const [i,o,r] = this._view;
                    if (i === e && o === t || Le.emit("setviewcoordinates", [i, o]),
                    r !== n) {
                        const e = (arguments.length <= 1 ? void 0 : arguments[1]) && r > .85 && r < 1.2 ? 1 : r;
                        Le.emit("setscale", e)
                    }
                }
                )
            }
            !function() {
                function e() {
                    console.log("Extension active"),
                    Le.once = Le.origOnce,
                    Le.addListener = Le.origAdd,
                    Le.on = Le.addListener,
                    delete Le.origOnce,
                    delete Le.origAdd,
                    Ae = !0,
                    Re(ke())
                }
                Le.origOnce = Le.once,
                Le.origAdd = Le.addListener,
                Le.once = function() {
                    Le.origOnce(...arguments),
                    e()
                }
                ,
                Le.addListener = function() {
                    Le.origAdd(...arguments),
                    e()
                }
                ,
                Le.on = Le.addListener
            }(),
            window.pixelPlanetEvents = Le;
            const je = (0,
            i.OJ)({
                key: "wind",
                storage: f.Z,
                version: 17,
                migrate: P
            }, (function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : M
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                switch (t.type) {
                case "OPEN_WIN":
                    {
                        const {windowType: n, title: i, cloneable: o, args: r, xPos: a, yPos: s, width: l, height: c} = t
                          , [u,d] = R(l, c, !0)
                          , [h,p] = j(a, s, u, d)
                          , f = !e.showWindows || t.fullscreen;
                        if (e.windows.length >= 100)
                            return e;
                        const v = L(e)
                          , m = e.zMax + 1;
                        return D({
                            ...e,
                            zMax: m,
                            windows: [...e.windows, {
                                windowId: v,
                                windowType: n,
                                open: !0,
                                hidden: !1,
                                fullscreen: f,
                                title: i,
                                cloneable: o
                            }],
                            args: {
                                ...e.args,
                                [v]: {
                                    ...r
                                }
                            },
                            positions: {
                                ...e.positions,
                                [v]: {
                                    width: u,
                                    height: d,
                                    xPos: h,
                                    yPos: p,
                                    z: m
                                }
                            }
                        })
                    }
                case "REMOVE_WIN":
                    {
                        const {windowId: n} = t
                          , i = {
                            ...e.args
                        }
                          , o = {
                            ...e.positions
                        };
                        return delete i[n],
                        delete o[n],
                        {
                            ...e,
                            windows: e.windows.filter((e=>e.windowId !== n)),
                            args: i,
                            positions: o
                        }
                    }
                case "CLOSE_WIN":
                    {
                        const {windowId: n} = t
                          , i = e.windows.map((e=>e.windowId !== n ? e : {
                            ...e,
                            open: !1
                        }));
                        return {
                            ...e,
                            windows: i
                        }
                    }
                case "CLOSE_ALL_WIN_TYPE":
                    {
                        const {windowType: n} = t
                          , i = e.windows.map((e=>e.windowType !== n ? e : {
                            ...e,
                            open: !1
                        }));
                        return {
                            ...e,
                            windows: i
                        }
                    }
                case "HIDE_ALL_WIN_TYPE":
                    {
                        const {windowType: n, hide: i} = t
                          , o = e.windows.map((e=>e.windowType !== n ? e : {
                            ...e,
                            hidden: i
                        }));
                        return {
                            ...e,
                            windows: o
                        }
                    }
                case "CLONE_WIN":
                    {
                        const {windowId: n} = t
                          , i = e.windows.find((e=>e.windowId === n))
                          , o = e.positions[n]
                          , r = L(e)
                          , a = e.zMax + 1
                          , {innerWidth: s, innerHeight: l} = window;
                        return D({
                            ...e,
                            zMax: a,
                            windows: [...e.windows, {
                                ...i,
                                windowId: r
                            }],
                            args: {
                                ...e.args,
                                [r]: {
                                    ...e.args[n]
                                }
                            },
                            positions: {
                                ...e.positions,
                                [r]: {
                                    ...o,
                                    xPos: Math.min(o.xPos + 15, s - 70),
                                    yPos: Math.min(o.yPos + 15, l - 30),
                                    z: a
                                }
                            }
                        })
                    }
                case "CHANGE_WIN_TYPE":
                    {
                        const {windowId: n, windowType: i, title: o} = t
                          , r = {
                            ...e.args,
                            [n]: {
                                ...t.args
                            }
                        }
                          , a = e.windows.map((e=>e.windowId !== n ? e : {
                            ...e,
                            windowType: i,
                            title: o
                        }));
                        return {
                            ...e,
                            args: r,
                            windows: a
                        }
                    }
                case "FOCUS_WIN":
                    {
                        const {windowId: n} = t
                          , {zMax: i} = e
                          , {z: o} = e.positions[n];
                        return o === i ? e : D({
                            ...e,
                            zMax: i + 1,
                            positions: {
                                ...e.positions,
                                [n]: {
                                    ...e.positions[n],
                                    z: i + 1
                                }
                            }
                        })
                    }
                case "TGL_MAXIMIZE_WIN":
                    {
                        const {windowId: n} = t
                          , i = e.windows.map((e=>e.windowId !== n ? e : {
                            ...e,
                            fullscreen: !e.fullscreen,
                            open: !0,
                            hidden: !1
                        }));
                        return {
                            ...e,
                            windows: i
                        }
                    }
                case "CLOSE_FULLSCREEN_WINS":
                    {
                        const t = e.windows.map((e=>e.fullscreen ? {
                            ...e,
                            open: !1
                        } : e));
                        return {
                            ...e,
                            windows: t
                        }
                    }
                case "MOVE_WIN":
                    {
                        const {windowId: n, xDiff: i, yDiff: o} = t;
                        let {xPos: r, yPos: a} = e.positions[n];
                        const {width: s, height: l} = e.positions[n];
                        return [r,a] = j(r + i, a + o, s, l),
                        {
                            ...e,
                            positions: {
                                ...e.positions,
                                [n]: {
                                    ...e.positions[n],
                                    xPos: r,
                                    yPos: a
                                }
                            }
                        }
                    }
                case "RESIZE_WIN":
                    {
                        const {windowId: n, xDiff: i, yDiff: o} = t;
                        let {width: r, height: a} = e.positions[n];
                        return [r,a] = R(r + i, a + o, !1),
                        {
                            ...e,
                            positions: {
                                ...e.positions,
                                [n]: {
                                    ...e.positions[n],
                                    width: r,
                                    height: a
                                }
                            }
                        }
                    }
                case "persist/REHYDRATE":
                    {
                        const {showWindows: n} = e;
                        if (!n || "wind" !== t.key)
                            return e;
                        const i = {
                            ...e,
                            ...t.payload
                        }
                          , o = {
                            ...i.args
                        }
                          , r = {
                            ...i.positions
                        }
                          , a = i.windows.filter((e=>!(!e.open || !e.fullscreen && !n) || (console.log(`Cleaning up window from previous session: ${e.windowId}`),
                        delete o[e.windowId],
                        delete r[e.windowId],
                        !1)));
                        return D($({
                            ...i,
                            windows: a,
                            args: o,
                            positions: r
                        }))
                    }
                case "WIN_RESIZE":
                    {
                        const t = window.innerWidth > 604;
                        return t ? $(t === e.showWindows ? e : {
                            ...e,
                            showWindows: t
                        }) : {
                            ...e,
                            showWindows: t
                        }
                    }
                case "SET_WIN_TITLE":
                    {
                        const {windowId: n, title: i} = t
                          , o = e.windows.map((e=>e.windowId !== n ? e : {
                            ...e,
                            title: i
                        }));
                        return {
                            ...e,
                            windows: o
                        }
                    }
                case "SET_WIN_ARGS":
                    {
                        const {windowId: n, args: i} = t;
                        return {
                            ...e,
                            args: {
                                ...e.args,
                                [n]: {
                                    ...e.args[n],
                                    ...i
                                }
                            }
                        }
                    }
                default:
                    return e
                }
            }
            ))
              , $e = (0,
            h.UY)({
                ...A,
                windows: je,
                alert: function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : z
                      , t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                    case "ALERT":
                        {
                            const {title: n, message: i, alertType: o, btn: r} = t;
                            return {
                                ...e,
                                open: !0,
                                title: n,
                                message: i,
                                alertType: o,
                                btn: r
                            }
                        }
                    case "CLOSE_ALERT":
                        return {
                            ...e,
                            open: !1
                        };
                    default:
                        return e
                    }
                }
            })
              , De = (0,
            h.MT)($e, (0,
            h.md)(p.Z, (()=>e=>t=>Array.isArray(t) ? t.map(e) : e(t)), (e=>t=>n=>{
                if (n instanceof MessageEvent) {
                    if (n.origin !== window.location.origin || !n.data.type)
                        return null;
                    if ("t/UNLOAD" === n.data.type)
                        console.log("popup closed"),
                        function(e) {
                            const t = _e.indexOf(e);
                            ~t && _e.splice(t, 1)
                        }(n.source);
                    else if ("t/LOAD" === n.data.type) {
                        const t = e.getState();
                        n.source.postMessage((0,
                        r.GY)(t), window.location.origin),
                        i = n.source,
                        -1 === _e.indexOf(i) && _e.push(i),
                        console.log("popup added")
                    } else
                        n.data.type.startsWith("s/") && Oe(n.data, n.source);
                    return t(n.data)
                }
                var i;
                return _e.length && n.type?.startsWith("s/") && Oe(n),
                t(n)
            }
            ), (e=>t=>n=>{
                const i = e.getState()
                  , {mute: o, chatNotify: r} = i.gui;
                if (!o && U)
                    switch (n.type) {
                    case "SELECT_COLOR":
                        {
                            const e = U.createOscillator()
                              , t = U.createGain()
                              , {currentTime: n} = U;
                            e.type = "sine",
                            e.detune.value = -600,
                            e.frequency.setValueAtTime(600, n),
                            e.frequency.setValueAtTime(700, n + .1),
                            t.gain.setValueAtTime(.3, n),
                            t.gain.exponentialRampToValueAtTime(.2, n + .1),
                            e.connect(t),
                            t.connect(U.destination),
                            e.start(),
                            e.stop(n + .2);
                            break
                        }
                    case "SET_NOTIFICATION":
                        {
                            const {notification: e} = n;
                            if ("string" != typeof e)
                                break;
                            const t = U.createOscillator()
                              , i = U.createGain()
                              , {currentTime: o} = U;
                            t.type = "sine",
                            t.detune.value = -1200,
                            t.frequency.setValueAtTime(500, o),
                            t.frequency.setValueAtTime(600, o + .1),
                            i.gain.setValueAtTime(.3, o),
                            i.gain.exponentialRampToValueAtTime(.2, o + .1),
                            t.connect(i),
                            i.connect(U.destination),
                            t.start(),
                            t.stop(o + .2);
                            break
                        }
                    case "ALERT":
                        {
                            const e = U.createOscillator()
                              , t = U.createGain()
                              , {currentTime: i} = U;
                            if ("captcha" === n.alertType)
                                e.type = "sine",
                                e.detune.value = -600,
                                e.start(i),
                                e.frequency.setValueAtTime(1479.98, i),
                                e.frequency.exponentialRampToValueAtTime(493.88, i + .01),
                                e.stop(i + .1),
                                t.gain.setValueAtTime(.5, i),
                                t.gain.setTargetAtTime(0, i, .1),
                                e.connect(t),
                                t.connect(U.destination);
                            else {
                                e.type = "sine",
                                e.detune.value = -900,
                                e.start(i),
                                e.frequency.setValueAtTime(600, i),
                                e.frequency.setValueAtTime(1400, i + .025),
                                e.frequency.setValueAtTime(1200, i + .05),
                                e.frequency.setValueAtTime(900, i + .075),
                                e.stop(i + .3);
                                const n = U.createOscillator();
                                n.type = "sine",
                                n.start(i),
                                n.frequency.setValueAtTime(2, i),
                                n.stop(i + .3),
                                n.connect(t),
                                t.gain.setValueAtTime(1, i),
                                t.gain.setTargetAtTime(0, i, 3),
                                e.connect(t),
                                t.connect(U.destination)
                            }
                            break
                        }
                    case "REC_SET_PXLS":
                        switch (n.retCode) {
                        case 0:
                            {
                                const {palette: e, selectedColor: t} = i.canvas
                                  , n = e.colors.length
                                  , o = 100 + 300 * Math.log(t / n + 1)
                                  , r = U.createOscillator()
                                  , a = U.createGain()
                                  , {currentTime: s} = U;
                                r.type = "sine",
                                r.start(s),
                                r.frequency.setValueAtTime(o, s),
                                r.frequency.exponentialRampToValueAtTime(1400, s + .2),
                                r.stop(s + .1),
                                a.gain.setValueAtTime(.5, s),
                                a.gain.setTargetAtTime(0, s, .1),
                                r.connect(a),
                                a.connect(U.destination);
                                break
                            }
                        case 9:
                            {
                                const e = U.createOscillator()
                                  , t = U.createGain()
                                  , {currentTime: n} = U;
                                e.type = "sine",
                                e.start(n),
                                e.frequency.setValueAtTime(1479.98, n),
                                e.frequency.exponentialRampToValueAtTime(493.88, n + .01),
                                e.stop(n + .1),
                                t.gain.setValueAtTime(.5, n),
                                t.gain.setTargetAtTime(0, n, .1),
                                e.connect(t),
                                t.connect(U.destination);
                                break
                            }
                        }
                        break;
                    case "COOLDOWN_END":
                        {
                            const {lastCoolDownEnd: e} = i.user;
                            if (e && e + 5e3 > Date.now())
                                break;
                            const t = U.createOscillator()
                              , n = U.createGain()
                              , {currentTime: o} = U;
                            t.type = "sine",
                            t.frequency.setValueAtTime(349.23, o),
                            t.frequency.setValueAtTime(523.25, o + .1),
                            t.frequency.setValueAtTime(698.46, o + .2),
                            n.gain.setValueAtTime(.5, o),
                            n.gain.exponentialRampToValueAtTime(.2, o + .15),
                            t.connect(n),
                            n.connect(U.destination),
                            t.start(),
                            t.stop(o + .3);
                            break
                        }
                    case "s/REC_CHAT_MESSAGE":
                        {
                            if (r)
                                break;
                            const {isPing: e, channel: t} = n
                              , {mute: o, chatChannel: a} = i.chatRead;
                            if (o.includes(t) || o.includes(`${t}`))
                                break;
                            const {channels: s} = i.chat
                              , l = U.createOscillator()
                              , c = U.createGain()
                              , {currentTime: u} = U;
                            l.type = "sine",
                            l.frequency.setValueAtTime(310, u);
                            const d = e || s[t] && 1 === s[t][1] && t != a ? 540 : 355;
                            l.frequency.exponentialRampToValueAtTime(d, u + .025),
                            c.gain.setValueAtTime(.1, u),
                            c.gain.exponentialRampToValueAtTime(.1, u + .1),
                            l.connect(c),
                            c.connect(U.destination),
                            l.start(),
                            l.stop(u + .075);
                            break
                        }
                    }
                return t(n)
            }
            ), (e=>t=>n=>{
                try {
                    if (!document.hasFocus())
                        switch (n.type) {
                        case "s/REC_ME":
                            window.Notification && "granted" !== Notification.permission && "denied" !== Notification.permission && Notification.requestPermission();
                            break;
                        case "COOLDOWN_END":
                            {
                                const t = e.getState()
                                  , {lastCoolDownEnd: n} = t.user;
                                if (n && n + 15e3 > Date.now())
                                    break;
                                window.Notification && "granted" === Notification.permission && new Notification("Vaši sljedeći pikseli su spremni",{
                                    icon: "/tile.png",
                                    silent: !1,
                                    vibrate: [200, 100],
                                    body: "Sada možete staviti više na pixelplanet.fun :)"
                                });
                                break
                            }
                        case "s/REC_CHAT_MESSAGE":
                            {
                                const t = e.getState()
                                  , {chatNotify: i} = t.gui;
                                if (!i)
                                    break;
                                const {isPing: o} = n;
                                if (!o)
                                    break;
                                const {name: r} = n;
                                window.Notification && "granted" === Notification.permission && new Notification(`${r} te spomenuo`,{
                                    icon: "/tile.png",
                                    silent: !1,
                                    vibrate: [200, 100],
                                    body: "Imate nove poruke u chatu"
                                });
                                break
                            }
                        }
                } catch (e) {
                    console.error(e)
                }
                return t(n)
            }
            ), (e=>t=>n=>{
                const i = t(n);
                switch (n.type) {
                case "COOLDOWN_SET":
                    {
                        const {coolDown: t} = e.getState().user
                          , n = `${(0,
                        k.VL)(t, !0)} | ${Se}`;
                        if (Ee === n)
                            break;
                        Ee = n,
                        document.title = n;
                        break
                    }
                case "COOLDOWN_END":
                    document.title = Se;
                    break;
                case "s/SELECT_CANVAS":
                case "s/REC_ME":
                case "RELOAD_URL":
                case "UPDATE_VIEW":
                    {
                        const t = e.getState()
                          , {view: i, canvasIdent: o, is3D: r} = t.canvas;
                        if ("UPDATE_VIEW" !== n.type) {
                            const [e,n,i] = t.canvas.palette.rgb;
                            !function(e, t, n) {
                                const i = document.querySelector("meta[name=theme-color]");
                                i && i.setAttribute("content", `rgb(${e}, ${t}, ${n})`)
                            }(e, n, i)
                        }
                        const a = `#${o},${i.map(((e,t)=>(2 !== t || r || (e = 10 * Math.log2(e)),
                        Math.floor(e)))).join(",")}`;
                        window.history.replaceState(void 0, void 0, a);
                        break
                    }
                }
                return i
            }
            ), (e=>t=>n=>{
                switch (n.type) {
                case "REC_BIG_CHUNK":
                case "REC_BIG_CHUNK_FAILURE":
                    {
                        const {chunk: e} = n;
                        e.recUpdates && F.registerChunk(n.chunk.id);
                        break
                    }
                case "REMOVE_CHUNKS":
                    {
                        const {chunks: e} = n
                          , t = e.filter((e=>e.recUpdates)).map((e=>e.id));
                        t.length && F.deRegisterChunks(t);
                        break
                    }
                case "s/SET_NAME":
                case "s/LOGIN":
                case "s/LOGOUT":
                    F.reconnect();
                    break;
                case "s/REQ_CHAT_MESSAGE":
                    {
                        const {text: e, channel: t} = n;
                        F.sendChatMessage(e, t);
                        break
                    }
                case "RELOAD_URL":
                case "s/SELECT_CANVAS":
                case "s/REC_ME":
                    {
                        const i = e.getState()
                          , o = t(n)
                          , r = e.getState()
                          , {canvasId: a} = r.canvas;
                        return i.canvas.canvasId !== a && F.setCanvas(a),
                        o
                    }
                }
                return t(n)
            }
            ), (()=>e=>t=>{
                const {type: n} = t;
                switch (n) {
                case "s/SELECT_CANVAS":
                    Le.emit("selectcanvas", t.canvasId);
                    break;
                case "SET_HOVER":
                    Le.emit("sethover", t.hover);
                    break;
                case "REC_BIG_CHUNK":
                    Le.emit("receivechunk", t.chunk)
                }
                const i = e(t);
                switch (n) {
                case "RELOAD_URL":
                case "s/SELECT_CANVAS":
                case "s/TGL_EASTER_EGG":
                case "s/REC_ME":
                    Ae && Re(ke())
                }
                return i
            }
            ), (e=>t=>n=>{
                const {type: i} = n;
                switch (i) {
                case "SET_HISTORICAL_TIME":
                    {
                        const t = e.getState()
                          , n = ke()
                          , {historicalDate: i, historicalTime: o} = t.canvas;
                        n.updateOldHistoricalTime(i, o);
                        break
                    }
                case "SELECT_HOVER_COLOR":
                    {
                        const t = ke().getPointedColor();
                        null !== t && e.dispatch((0,
                        r.Oh)(t));
                        break
                    }
                }
                const o = t(n)
                  , a = e.getState();
                switch (i) {
                case "RELOAD_URL":
                case "s/SELECT_CANVAS":
                case "s/REC_ME":
                    {
                        const t = ke();
                        t.controls.updateCursor?.();
                        const {is3D: n} = a.canvas;
                        if (n === t.is3D ? (t.updateCanvasData(a),
                        "RELOAD_URL" === i && t.updateView(a.canvas.view)) : be(e, n),
                        a.canvas.isHistoricalView) {
                            const {historicalDate: e, historicalTime: n, historicalCanvasSize: i} = a.canvas;
                            t.updateHistoricalTime(e, n, i)
                        }
                        break
                    }
                case "s/TGL_EASTER_EGG":
                    {
                        const t = ke()
                          , {is3D: n} = a.canvas;
                        n && be(e, !t.is3D);
                        break
                    }
                case "SET_HISTORICAL_TIME":
                    {
                        const {historicalDate: e, historicalTime: t, historicalCanvasSize: n} = a.canvas;
                        ke().updateHistoricalTime(e, t, n);
                        break
                    }
                case "s/CHG_TEMPLATE":
                case "s/TGL_OVENABLED":
                case "s/TGL_SMALLPXLS":
                case "s/REM_TEMPLATE":
                case "s/UPD_TEMPLATE_IMG":
                case "s/SET_O_OPACITY":
                case "REQ_BIG_CHUNK":
                case "PRE_LOADED_BIG_CHUNK":
                case "REC_BIG_CHUNK":
                case "REC_BIG_CHUNK_FAILURE":
                    ke().forceNextRender = !0;
                    break;
                case "s/TGL_GRID":
                case "ALLOW_SETTING_PXL":
                    ke().forceNextSubrender = !0;
                    break;
                case "s/TGL_HISTORICAL_VIEW":
                    {
                        const e = ke();
                        e.updateView(e.view, e.view),
                        e.forceNextRender = !0;
                        break
                    }
                case "s/SET_HOLD_PAINT":
                    {
                        const e = ke();
                        n.value && e.controls.holdPaintStarted?.(n.immediate),
                        e.controls.updateCursor?.();
                        break
                    }
                case "s/SET_MOVE_U":
                case "s/SET_MOVE_V":
                case "s/SET_MOVE_W":
                case "s/CANCEL_MOVE":
                    n.value || ke().storeViewInState();
                    break;
                case "SET_VIEW_COORDINATES":
                    {
                        const e = ke();
                        e.updateView(n.view),
                        e.storeViewInState();
                        break
                    }
                case "SET_SCALE":
                    {
                        const e = ke()
                          , [t,i] = e.view;
                        e.updateView([t, i, n.scale], n.zoompoint),
                        e.storeViewInState();
                        break
                    }
                case "s/SELECT_PENCIL_MODE":
                case "s/TGL_CURSOR":
                    {
                        const e = ke();
                        e.controls.updateCursor?.();
                        break
                    }
                case "REC_SET_PXLS":
                    {
                        const e = ke();
                        e.forceNextSubrender = !0;
                        const {coolDownSeconds: t} = n;
                        t < 0 && e.controls.gotCoolDownDelta?.(-1 * t);
                        break
                    }
                }
                return o
            }
            )))
              , Me = De;
            var ze, He = n(7294), Ue = n(743), We = n(745), Ve = n(7479);
            function Ge(e, t, n, i) {
                ze || (ze = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: ze,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            function Fe() {
                let e = (0,
                Ue.v9)((e=>e.gui.style));
                if (!window.ssv.availableStyles)
                    return null;
                const t = new Date
                  , n = t.getMonth() + 1
                  , i = t.getDate();
                (31 === i && 10 === n || 1 === i && 11 === n) && (e = "dark-spooky");
                const o = window.ssv.availableStyles[e];
                return "default" !== e && o ? Ge("link", {
                    rel: "stylesheet",
                    type: "text/css",
                    href: o
                }) : null
            }
            const Be = He.memo(Fe);
            var Ze;
            function Ke(e, t, n, i) {
                Ze || (Ze = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: Ze,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            const Ye = ()=>{
                const [e,t,n] = (0,
                Ue.v9)((e=>[e.canvas.view, e.canvas.hover, e.canvas.is3D]), Ue.wU)
                  , i = (0,
                Ue.I0)();
                let r;
                if (t)
                    r = t;
                else {
                    const [t,i,o] = e;
                    r = (n ? [t, i, o] : [t, i]).map(Math.floor)
                }
                return Ke("div", {
                    className: "coorbox",
                    onClick: ()=>{
                        (0,
                        o.Z)(window.location.hash),
                        i((0,
                        c.h4)("Kopirano"))
                    }
                    ,
                    role: "button",
                    title: "Kopirati u međuspremnik",
                    tabIndex: "0"
                }, void 0, `(${r.join(", ")})`)
            }
              , qe = He.memo(Ye);
            var Xe = n(9583);
            function Qe(e, t) {
                return {
                    type: "SET_WIN_ARGS",
                    windowId: e,
                    args: t
                }
            }
            function Je(e, t) {
                return {
                    type: "SET_WIN_TITLE",
                    windowId: e,
                    title: t
                }
            }
            function et(e) {
                return {
                    type: "FOCUS_WIN",
                    windowId: e
                }
            }
            function tt(e, t) {
                return {
                    type: "HIDE_ALL_WIN_TYPE",
                    windowType: e,
                    hide: t
                }
            }
            function nt(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                  , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ""
                  , i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null
                  , o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4]
                  , r = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]
                  , a = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null
                  , s = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null
                  , l = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null
                  , c = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
                return (u,d)=>{
                    if (t) {
                        const t = d().windows
                          , o = t.windows.find((n=>n.windowType === e && (t.showWindows || n.fullscreen)));
                        if (o) {
                            o.hidden && u(tt(e, !1));
                            const {windowId: t} = o;
                            return n && n !== o.title && u(Je(t, n)),
                            u(Qe(t, i)),
                            void u(et(t))
                        }
                        r = !1
                    }
                    u({
                        type: "OPEN_WIN",
                        windowType: e,
                        title: n,
                        args: i,
                        fullscreen: o,
                        cloneable: r,
                        xPos: a,
                        yPos: s,
                        width: l,
                        height: c
                    })
                }
            }
            const it = (0,
            He.createContext)();
            function ot(e, t, n, i, o, r) {
                !function(e, t, n, i, o) {
                    let r, a;
                    try {
                        if (window.innerWidth <= 604 ? (i = window.innerWidth,
                        o = window.innerHeight,
                        r = window.top.screenX,
                        a = window.top.screenY) : (r = Math.round(window.top.screenX + t),
                        a = Math.round(window.top.screenY + n)),
                        Number.isNaN(r) || Number.isNaN(a))
                            throw new Error("NaN")
                    } catch {
                        r = 0,
                        a = 0
                    }
                    try {
                        return window.open(e, e, `popup=yes,width=${i},height=${o},left=${r},top=${a},toolbar=no,status=no,directories=no,menubar=no`)
                    } catch {
                        return null
                    }
                }(xe(e, t), n, i, o, r)
            }
            const rt = function() {
                const e = (0,
                Ue.I0)()
                  , t = (0,
                He.useContext)(it);
                return (0,
                He.useCallback)((function(n) {
                    let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    const {xPos: o=null, yPos: r=null, width: a=null, height: s=null, args: l=null} = i
                      , c = !Ie()
                      , {target: u} = i;
                    if (i.reuse && function(e, t) {
                        const n = _e.find((t=>!t.closed && t.location.pathname.split("/")[1]?.toUpperCase() === e));
                        return !!n && (n.location = xe(e, t),
                        n.focus(),
                        !0)
                    }(n, l))
                        return;
                    if ("popup" === i.target || !c && "blank" === u)
                        return void ot(n, l, o, r, a, s);
                    const {title: d=""} = i;
                    c && "fullscreen" === u || "blank" === u ? e(nt(n.toUpperCase(), !!i.reuse, d, l, "fullscreen" === u, i.cloneable || !i.reuse, o, r, a, s)) : t ? t.changeType(n, d, l) : window.location.href = xe(n, l)
                }
                ), [t, e])
            };
            var at, st;
            function lt(e, t, n, i) {
                st || (st = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: st,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            const ct = ()=>{
                const e = rt();
                return lt("div", {
                    id: "canvasbutton",
                    className: "actionbuttons",
                    onClick: ()=>e("CANVAS_SELECTION", {
                        target: "fullscreen"
                    }),
                    role: "button",
                    title: "Odabir platna",
                    tabIndex: -1
                }, void 0, at || (at = lt(Xe.n6C, {})))
            }
              , ut = He.memo(ct);
            var dt, ht, pt, ft, vt, mt;
            function gt(e, t, n, i) {
                mt || (mt = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: mt,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            const yt = ()=>{
                const [e,t,n,i,o,a,s,l] = (0,
                Ue.v9)((e=>[e.ranks.online, e.ranks.totalPixels, e.ranks.dailyTotalPixels, e.user.name, e.gui.onlineCanvas, e.gui.dailyPxls, e.gui.noRound, e.canvas.canvasId]), Ue.wU)
                  , c = (0,
                Ue.I0)();
                let u = a ? n : t;
                return u = s ? (0,
                k.mW)(u) : (0,
                k.D$)(u),
                gt("div", {
                    className: "onlinebox"
                }, void 0, o ? gt("span", {
                    title: "Online korisnici na platnu",
                    role: "button",
                    tabIndex: "0",
                    onClick: ()=>c((0,
                    r._)())
                }, "onlinec", e[l] || 0, " ", dt || (dt = gt(Xe.Xws, {})), ht || (ht = gt(Xe.n6C, {}))) : gt("span", {
                    role: "button",
                    tabIndex: "0",
                    onClick: ()=>c((0,
                    r._)()),
                    title: "Ukupno online korisnika"
                }, "onlinec", e.total, " ", pt || (pt = gt(Xe.Xws, {}))), " ", null != i && gt(He.Fragment, {}, "plxc", gt("span", {
                    role: "button",
                    tabIndex: "0",
                    onClick: ()=>c((0,
                    r.gH)()),
                    title: "Postavljeni pixeli"
                }, void 0, u), " ", gt("span", {
                    role: "button",
                    tabIndex: "0",
                    onClick: ()=>c((0,
                    r.jF)()),
                    title: a ? "Danas" : "Ukupno"
                }, void 0, a ? ft || (ft = gt(Xe.S08, {})) : vt || (vt = gt(Xe._TT, {})))))
            }
              , wt = He.memo(yt);
            var bt = n(5434)
              , kt = n(573);
            const St = e=>e.windows.windows
              , Et = e=>e.windows.showWindows
              , Ct = (0,
            kt.P1)(St, Et, ((e,t)=>[e.some((e=>e.fullscreen && !e.hidden)) || t, e.some((e=>e.fullscreen && e.open && !e.hidden))]))
              , Tt = (0,
            kt.P1)(St, Et, ((e,t)=>(t || (e = e.filter((e=>e.fullscreen))),
            e.map((e=>e.windowId)))))
              , It = (0,
            kt.P1)(St, Et, ((e,t)=>[e.some((e=>"CHAT" === e.windowType && !1 === e.hidden && (t || e.fullscreen))), e.some((e=>"CHAT" === e.windowType && !0 === e.hidden)) && t]));
            var xt, Nt;
            function _t(e, t, n, i) {
                Nt || (Nt = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: Nt,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            const Ot = ()=>{
                const [e,t] = (0,
                He.useState)(!1)
                  , n = (0,
                Ue.I0)()
                  , [i,o] = (0,
                Ue.v9)(It, Ue.wU)
                  , r = (0,
                Ue.v9)((e=>e.gui.chatNotify))
                  , a = (0,
                Ue.v9)((e=>e.chat.channels))
                  , [s,l] = (0,
                Ue.v9)((e=>[e.chatRead.unread, e.chatRead.mute]), Ue.wU);
                return (0,
                He.useEffect)((()=>{
                    if (!r || i)
                        return void t(!1);
                    const e = Object.keys(a);
                    let n = 0;
                    for (; n < e.length; ) {
                        const i = e[n];
                        if (0 !== a[i][1] && s[i] && !l.includes(i)) {
                            t(!0);
                            break
                        }
                        n += 1
                    }
                    n === e.length && t(!1)
                }
                ), [r, i, a, s, l]),
                _t("div", {
                    id: "chatbutton",
                    className: "actionbuttons",
                    onClick: ()=>{
                        n(i ? tt("CHAT", !0) : o ? tt("CHAT", !1) : nt("CHAT", !1, "", null, !1, !0, window.innerWidth - 350 - 62, window.innerHeight - 350 - 64, 350, 350))
                    }
                    ,
                    role: "button",
                    title: i ? "Zatvori chat" : "Otvorite Chat",
                    tabIndex: 0
                }, void 0, e && _t("div", {
                    style: {
                        position: "fixed",
                        bottom: 27,
                        right: 62,
                        top: "unset"
                    },
                    className: "chnunread"
                }, void 0, "⦿"), xt || (xt = _t(bt.Rlc, {})))
            }
              , Pt = He.memo(Ot);
            var At, Lt;
            function Rt(e, t, n, i) {
                Lt || (Lt = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: Lt,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            const jt = ()=>{
                const e = rt();
                return Rt("div", {
                    id: "helpbutton",
                    className: "actionbuttons",
                    onClick: ()=>e("HELP", {
                        target: "fullscreen"
                    }),
                    role: "button",
                    title: "Pomoć",
                    tabIndex: -1
                }, void 0, At || (At = Rt(Xe.g_g, {})))
            }
              , $t = He.memo(jt);
            var Dt, Mt;
            function zt(e, t, n, i) {
                Mt || (Mt = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: Mt,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            const Ht = ()=>{
                const e = rt();
                return zt("div", {
                    id: "settingsbutton",
                    className: "actionbuttons",
                    onClick: ()=>e("SETTINGS", {
                        target: "fullscreen"
                    }),
                    role: "button",
                    title: "Postavke",
                    tabIndex: -1
                }, void 0, Dt || (Dt = zt(Xe.p4t, {})))
            }
              , Ut = He.memo(Ht);
            var Wt, Vt;
            function Gt(e, t, n, i) {
                Vt || (Vt = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: Vt,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            const Ft = ()=>{
                const e = rt();
                return Gt("div", {
                    id: "loginbutton",
                    className: "actionbuttons",
                    onClick: ()=>e("USERAREA", {
                        target: "fullscreen"
                    }),
                    role: "button",
                    title: "Korisničko područje",
                    tabIndex: -1
                }, void 0, Wt || (Wt = Gt(bt.Vyx, {})))
            }
              , Bt = He.memo(Ft);
            var Zt, Kt, Yt = n(5823), qt = n.n(Yt);
            function Xt(e, t, n, i) {
                Kt || (Kt = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: Kt,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            const Qt = ()=>{
                const e = (0,
                Ue.v9)((e=>e.canvas.view));
                return Xt("div", {
                    id: "downloadbutton",
                    className: "actionbuttons",
                    role: "button",
                    title: "Napravite snimak zaslona",
                    tabIndex: 0,
                    onClick: ()=>function(e) {
                        const t = ke().getViewport();
                        if (!t)
                            return;
                        const [n,i] = e.map(Math.round)
                          , o = `pixelplanet-${n}-${i}.png`;
                        t.toBlob((e=>qt()(e, o)))
                    }(e)
                }, void 0, Zt || (Zt = Xt(bt.tEr, {})))
            }
              , Jt = He.memo(Qt);
            var en, tn, nn, on, rn;
            function an(e, t, n, i) {
                rn || (rn = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: rn,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            const sn = ()=>{
                const [e,t] = (0,
                He.useState)(!1)
                  , n = (0,
                Ue.v9)((e=>e.gui.menuOpen));
                return (0,
                He.useEffect)((()=>{
                    n && setTimeout((()=>t(!0)), 10)
                }
                ), [n]),
                (e || n) && an("div", {
                    className: n && e ? "menu show" : "menu",
                    onTransitionEnd: ()=>{
                        n || t(!1)
                    }
                }, void 0, en || (en = an(Ut, {})), tn || (tn = an(Bt, {})), nn || (nn = an(Jt, {})), on || (on = an($t, {})))
            }
              , ln = He.memo(sn);
            var cn;
            function un(e, t, n, i) {
                cn || (cn = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: cn,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            const dn = ()=>{
                const e = (0,
                Ue.v9)((e=>e.user.coolDown));
                return un("div", {
                    className: e && e >= 300 ? "cooldownbox show" : "cooldownbox"
                }, void 0, e && (0,
                k.VL)(e, !0))
            }
              , hn = He.memo(dn);
            var pn;
            function fn(e, t, n, i) {
                pn || (pn = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: pn,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            const vn = ()=>{
                const [e,t] = (0,
                He.useState)("notifybox")
                  , n = (0,
                Ue.v9)((e=>e.user.notification));
                return (0,
                He.useEffect)((()=>{
                    if (n) {
                        let i = "notifybox";
                        n && "string" != typeof n && (i += n > 0 ? " green" : " red"),
                        i !== e && t(i)
                    }
                }
                ), [n, e]),
                fn("div", {
                    className: n ? `${e} show` : e
                }, void 0, n)
            }
              , mn = He.memo(vn);
            var gn, yn;
            function wn(e, t, n, i) {
                yn || (yn = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: yn,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            const bn = ()=>{
                const [e,t,n,i] = (0,
                Ue.v9)((e=>[e.canvas.canvasId, e.canvas.canvasIdent, e.canvas.canvasSize, e.canvas.view]), Ue.wU);
                return wn("div", {
                    role: "button",
                    tabIndex: -1,
                    id: "globebutton",
                    title: "Pogled na globus",
                    className: "actionbuttons",
                    onClick: ()=>function(e, t, n, i) {
                        const [o,r] = i.map(Math.round);
                        window.location.href = `globe#${t},${e},${n},${o},${r}`
                    }(e, t, n, i)
                }, void 0, gn || (gn = wn(bt.gb5, {})))
            }
              , kn = He.memo(bn);
            var Sn, En;
            function Cn(e, t, n, i) {
                En || (En = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: En,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            const Tn = ()=>{
                const e = (0,
                Ue.v9)((e=>e.gui.paletteOpen))
                  , [t,n] = (0,
                Ue.v9)((e=>[e.canvas.palette, e.canvas.selectedColor]), Ue.wU)
                  , i = (0,
                Ue.I0)();
                return Cn("div", {
                    id: "palselbutton",
                    className: "actionbuttons" + (e ? " pressed" : ""),
                    style: {
                        color: t.isDark(n) ? "white" : "black",
                        backgroundColor: t.colors[n]
                    },
                    role: "button",
                    title: e ? "Zatvori paletu" : "Otvorite paletu",
                    tabIndex: 0,
                    onClick: ()=>i((0,
                    r.KB)())
                }, void 0, Sn || (Sn = Cn(bt.Zox, {})))
            }
              , In = He.memo(Tn);
            var xn = n(106);
            const Nn = function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 600;
                const [i,o] = (0,
                He.useState)(null)
                  , r = (0,
                He.useRef)()
                  , a = (0,
                He.useCallback)((e=>{
                    e.preventDefault(),
                    o(setTimeout((()=>{
                        t(e),
                        o(null)
                    }
                    ), n))
                }
                ), [t, n])
                  , s = (0,
                He.useCallback)((t=>{
                    t.preventDefault(),
                    i && (clearTimeout(i),
                    e && e(t),
                    o(null))
                }
                ), [i, e])
                  , l = (0,
                He.useCallback)((e=>{
                    e.preventDefault(),
                    clearTimeout(i),
                    o(null)
                }
                ), [i]);
                return (0,
                He.useCallback)((e=>{
                    if (e)
                        r.current = e,
                        e.addEventListener("mousedown", a, {
                            passive: !1
                        }),
                        e.addEventListener("mouseup", s, {
                            passive: !1
                        }),
                        e.addEventListener("touchstart", a, {
                            passive: !1
                        }),
                        e.addEventListener("touchend", s, {
                            passive: !1
                        }),
                        e.addEventListener("mouseleave", l, {
                            passive: !1
                        }),
                        e.addEventListener("touchcancel", l, {
                            passive: !1
                        });
                    else if (r.current) {
                        const e = r.current;
                        e.removeEventListener("mousedown", a, {
                            passive: !1
                        }),
                        e.removeEventListener("mouseup", s, {
                            passive: !1
                        }),
                        e.removeEventListener("touchstart", a, {
                            passive: !1
                        }),
                        e.removeEventListener("touchend", s, {
                            passive: !1
                        }),
                        e.removeEventListener("mouseleave", l, {
                            passive: !1
                        }),
                        e.removeEventListener("touchcancel", l, {
                            passive: !1
                        })
                    }
                }
                ), [l, a, s])
            };
            var _n, On, Pn;
            function An(e, t, n, i) {
                Pn || (Pn = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: Pn,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            const Ln = ()=>{
                const [e,t,n] = (0,
                Ue.v9)((e=>[e.gui.holdPaint, e.canvas.pencilMode, e.gui.showMvmCtrls]), Ue.wU)
                  , i = (0,
                Ue.I0)()
                  , o = (0,
                He.useCallback)((()=>{
                    i((0,
                    c.oX)()),
                    e || i((0,
                    r.R4)(!0))
                }
                ), [e, i])
                  , a = (0,
                He.useCallback)((()=>{
                    i((0,
                    r.R4)(!e))
                }
                ), [e, i])
                  , s = Nn(a, o);
                let l = "actionbuttons"
                  , u = "Upali Olovku";
                if (e)
                    switch (t) {
                    case S.PO.COLOR:
                        l += " ppencil pressed",
                        u = "Ugasi Olovku";
                        break;
                    case S.PO.HISTORY:
                        l += " phistory pressed",
                        u = "Ugasi Povijest Olovku";
                        break;
                    case S.PO.OVERLAY:
                        l += " poverlay pressed",
                        u = "Ugasi Šablon Olovku"
                    }
                return He.createElement("div", {
                    id: "pencilbutton",
                    className: l,
                    style: {
                        bottom: e || n ? 180 : 98
                    },
                    role: "button",
                    title: u,
                    tabIndex: -1,
                    ref: s
                }, e ? _n || (_n = An(xn.nxI, {})) : On || (On = An(xn.Lik, {})))
            }
              , Rn = He.memo(Ln);
            var jn, $n, Dn, Mn, zn, Hn, Un, Wn, Vn, Gn = n(225), Fn = n(130);
            function Bn(e, t, n, i) {
                Vn || (Vn = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: Vn,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            const Zn = ()=>{
                const [e,t] = (0,
                He.useState)(!1)
                  , [n,i] = (0,
                Ue.v9)(Fn.x, Ue.wU)
                  , o = (0,
                Ue.I0)();
                (0,
                He.useEffect)((()=>{
                    i && window.setTimeout((()=>t(!0)), 10)
                }
                ), [i]);
                const a = (0,
                He.useCallback)((e=>{
                    if (!e)
                        return;
                    const t = e=>{
                        switch (e.preventDefault(),
                        e.currentTarget.id) {
                        case "forwardbtn":
                            o((0,
                            r.mx)(-1));
                            break;
                        case "backwardbtn":
                            o((0,
                            r.mx)(1));
                            break;
                        case "leftbtn":
                            o((0,
                            r.mW)(-1));
                            break;
                        case "rightbtn":
                            o((0,
                            r.mW)(1));
                            break;
                        case "upbtn":
                            o((0,
                            r.WW)(-1));
                            break;
                        case "downbtn":
                            o((0,
                            r.WW)(1))
                        }
                    }
                      , n = e=>{
                        switch (e.preventDefault(),
                        e.currentTarget.id) {
                        case "forwardbtn":
                        case "backwardbtn":
                            o((0,
                            r.mx)(0));
                            break;
                        case "leftbtn":
                        case "rightbtn":
                            o((0,
                            r.mW)(0));
                            break;
                        case "upbtn":
                        case "downbtn":
                            o((0,
                            r.WW)(0))
                        }
                    }
                      , i = e=>{
                        e.preventDefault(),
                        o((0,
                        r.OJ)())
                    }
                    ;
                    e.addEventListener("touchstart", t, {
                        passive: !1
                    }),
                    e.addEventListener("mousedown", t, {
                        passive: !1
                    }),
                    e.addEventListener("touchend", n, {
                        passive: !1
                    }),
                    e.addEventListener("mouseup", n, {
                        passive: !1
                    }),
                    e.addEventListener("mouseleave", i, {
                        passive: !1
                    }),
                    e.addEventListener("touchcancel", i, {
                        passive: !1
                    })
                }
                ), [o]);
                return (e || i) && Bn("div", {
                    id: "mvmctrls",
                    className: e && i ? "show" : "",
                    onTransitionEnd: ()=>!i && t(!1)
                }, void 0, He.createElement("div", {
                    className: "actionbuttons",
                    id: "forwardbtn",
                    role: "button",
                    key: "forward",
                    tabIndex: 0,
                    style: {
                        left: 57,
                        bottom: 139
                    },
                    ref: a
                }, jn || (jn = Bn(Gn.x8Z, {}))), He.createElement("div", {
                    className: "actionbuttons",
                    id: "backwardbtn",
                    role: "button",
                    key: "backward",
                    tabIndex: 0,
                    style: {
                        left: 57,
                        bottom: 98
                    },
                    ref: a
                }, $n || ($n = Bn(Gn._tY, {}))), He.createElement("div", {
                    className: "actionbuttons",
                    id: "leftbtn",
                    role: "button",
                    key: "left",
                    tabIndex: 0,
                    style: {
                        left: 16,
                        bottom: 98
                    },
                    ref: a
                }, Dn || (Dn = Bn(Gn.uMh, {}))), He.createElement("div", {
                    className: "actionbuttons",
                    id: "rightbtn",
                    role: "button",
                    key: "right",
                    tabIndex: 0,
                    style: {
                        left: 98,
                        bottom: 98
                    },
                    ref: a
                }, Mn || (Mn = Bn(Gn.aiH, {}))), He.createElement("div", {
                    className: "actionbuttons",
                    id: "upbtn",
                    role: "button",
                    key: "up",
                    tabIndex: 0,
                    style: {
                        left: 16,
                        bottom: 139
                    },
                    ref: a
                }, n ? zn || (zn = Bn(Gn.V6o, {})) : Hn || (Hn = Bn(Gn.owN, {}))), He.createElement("div", {
                    className: "actionbuttons",
                    id: "downbtn",
                    role: "button",
                    key: "down",
                    tabIndex: 0,
                    style: {
                        left: 98,
                        bottom: 139
                    },
                    ref: a
                }, n ? Un || (Un = Bn(Gn.Hgk, {})) : Wn || (Wn = Bn(Gn.svp, {}))))
            }
            ;
            var Kn;
            function Yn(e, t, n, i) {
                Kn || (Kn = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: Kn,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            const qn = ()=>{
                const [e,t] = (0,
                He.useState)(!1)
                  , [n,i,o,a,s,l] = (0,
                Ue.v9)((e=>[e.gui.paletteOpen, e.gui.compactPalette, e.canvas.palette.colors, e.canvas.clrIgnore, e.canvas.selectedColor, e.user.userlvl]), Ue.wU)
                  , c = (0,
                Ue.I0)();
                (0,
                He.useEffect)((()=>{
                    window.setTimeout((()=>{
                        n && t(!0)
                    }
                    ), 10)
                }
                ), [n]);
                const u = 0 === l ? a : 0
                  , [d,h] = function(e, t, n, i, o) {
                    const {width: r, height: a} = t
                      , s = n.length - i;
                    let l, c, u;
                    r <= 300 || a <= 432 ? (c = 24,
                    u = 5,
                    l = "row") : s > 30 || o ? (c = 28,
                    u = 5,
                    l = "row") : (c = 24,
                    u = a < 801 ? 2 : 1,
                    l = "column");
                    const d = Math.ceil(s / u) * c
                      , h = c * u;
                    return e ? [{
                        display: "flex",
                        flexWrap: "wrap",
                        textAlign: "center",
                        lineHeight: 0,
                        height: d,
                        width: h,
                        flexDirection: l,
                        visibility: "visible"
                    }, {
                        display: "block",
                        width: c,
                        height: c,
                        margin: 0,
                        padding: 0,
                        cursor: "pointer",
                        visibility: "visible"
                    }] : [{
                        display: "flex",
                        flexWrap: "wrap",
                        textAlign: "center",
                        lineHeight: 0,
                        height: 0,
                        width: h,
                        flexDirection: l,
                        visibility: "hidden"
                    }, {
                        display: "block",
                        height: 0,
                        width: c,
                        margin: 0,
                        padding: 0,
                        visibility: "hidden"
                    }]
                }(e && n, function() {
                    const [e,t] = (0,
                    He.useState)({
                        width: window.innerWidth,
                        height: window.innerHeight
                    });
                    return (0,
                    He.useEffect)((()=>{
                        function e() {
                            t({
                                width: window.innerWidth,
                                height: window.innerHeight
                            })
                        }
                        return window.addEventListener("resize", e),
                        ()=>window.removeEventListener("resize", e)
                    }
                    ), []),
                    e
                }(), o, u, i);
                return (e || n) && Yn("div", {
                    id: "palettebox",
                    style: d,
                    onTransitionEnd: ()=>{
                        n || t(!1)
                    }
                }, void 0, o.slice(u).map(((e,t)=>Yn("span", {
                    style: {
                        backgroundColor: e,
                        ...h
                    },
                    role: "button",
                    tabIndex: 0,
                    "aria-label": `color ${t + u}`,
                    className: s === t + u ? "selected" : "unselected",
                    color: e,
                    onClick: ()=>c((0,
                    r.Oh)(t + u))
                }, `${e}-${t + u}`))))
            }
              , Xn = He.memo(qn);
            var Qn, Jn, ei = n(155);
            function ti(e, t, n, i) {
                Jn || (Jn = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: Jn,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            const ni = {
                width: "100%",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)"
            }
              , ii = e=>{
                let {autoload: t, width: n, setLegit: i} = e;
                const [o,r] = (0,
                He.useState)({})
                  , [a,s] = (0,
                He.useState)([])
                  , [l,c] = (0,
                He.useState)(!1)
                  , u = async()=>{
                    l && c(!1);
                    const e = await async function() {
                        const e = `${G.Fx}/captcha.svg`
                          , t = await fetch(e, {
                            cache: "no-cache"
                        });
                        if (t.ok) {
                            const e = t.headers.get("captcha-id")
                              , n = await t.blob();
                            return [URL.createObjectURL(n), e]
                        }
                        return null
                    }();
                    if (!e)
                        return void s(["Nije moguće učitati captcha"]);
                    const [t,n] = e;
                    r({
                        url: t,
                        id: n
                    })
                }
                ;
                (0,
                He.useEffect)((()=>{
                    t && u()
                }
                ), []);
                const d = n || 100;
                return He.createElement(He.Fragment, null, ti("p", {}, void 0, "Upišite znakove sa sljedeće slike:", " ", ti("span", {
                    style: {
                        fontSize: 11
                    }
                }, void 0, "(", "Savjet: nije osjetljivo na velika i mala slova; L i l su isti", ")")), a.map((e=>ti("p", {
                    className: "errormessage"
                }, e, ti("span", {}, void 0, "Greška"), ": ", e))), ti("div", {
                    style: {
                        width: `${d}%`,
                        paddingTop: `${Math.floor(.6 * d)}%`,
                        position: "relative",
                        display: "inline-block",
                        backgroundColor: "#e0e0e0"
                    }
                }, void 0, o.url ? ti("img", {
                    style: {
                        ...ni,
                        opacity: l ? 1 : 0,
                        transition: "100ms"
                    },
                    src: o.url,
                    alt: "CAPTCHA",
                    onLoad: ()=>{
                        s([]),
                        c(!0)
                    }
                    ,
                    onError: ()=>{
                        s(["Nije moguće učitati captcha"])
                    }
                }) : ti("span", {
                    style: ni,
                    role: "button",
                    tabIndex: 0,
                    title: "Učitaj Captcha",
                    className: "modallink",
                    onClick: u,
                    onKeyPress: u
                }, void 0, "Kliknite za učitavanje Captcha")), ti("p", {}, void 0, "Ne možete pročitati? Ponovno učitati:", " ", ti("span", {
                    role: "button",
                    tabIndex: -1,
                    title: "Ponovno učitati",
                    className: "modallink",
                    style: {
                        fontSize: 28
                    },
                    onClick: u
                }, void 0, Qn || (Qn = ti(ei.q9I, {})))), ti("input", {
                    name: "captcha",
                    placeholder: "Unesite znakove",
                    type: "text",
                    autoComplete: "off",
                    autoCorrect: "off",
                    autoCapitalize: "off",
                    spellCheck: "false",
                    onChange: ()=>i && i(!0),
                    autoFocus: t,
                    style: {
                        width: "6em",
                        fontSize: 21,
                        margin: 5
                    }
                }), ti("input", {
                    type: "hidden",
                    name: "captchaid",
                    value: o.id || "0"
                }))
            }
              , oi = He.memo(ii);
            var ri;
            function ai(e, t, n, i) {
                ri || (ri = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: ri,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            const si = e=>{
                let {close: t} = e;
                const [n,i] = (0,
                He.useState)(null)
                  , [o,a] = (0,
                He.useState)(!1)
                  , [s,l] = (0,
                He.useState)(!1)
                  , [c,u] = (0,
                He.useState)(Date.now())
                  , d = (0,
                Ue.I0)();
                return ai("form", {
                    onSubmit: async e=>{
                        e.preventDefault();
                        const n = e.target.captcha.value.slice(0, 6);
                        if (o || !n)
                            return;
                        s || await (0,
                        G.jK)(2);
                        const l = e.target.captchaid.value;
                        let c;
                        try {
                            switch (a(!0),
                            await F.sendCaptchaSolution(n, l)) {
                            case 0:
                                return void t();
                            case 1:
                                c = "Predugo vam je trebalo, pokušajte ponovno.";
                                break;
                            case 2:
                                c = "Pogrešio si s captcha";
                                break;
                            case 3:
                                c = "Nema ili nije valjan captcha tekst";
                                break;
                            case 4:
                                c = "Nije naveden captcha ID";
                                break;
                            case 5:
                                d((0,
                                r.Px)());
                            default:
                                c = "Nepoznata Captcha pogreška"
                            }
                        } catch (e) {
                            c = `${e.message}`
                        }
                        a(!1),
                        u(Date.now()),
                        i(c)
                    }
                }, void 0, n && ai("p", {
                    className: "errormessage"
                }, n, ai("span", {}, void 0, "Greška"), ": ", n), ai(oi, {
                    autoload: !0,
                    setLegit: l
                }, c), ai("p", {}, void 0, ai("button", {
                    type: "button",
                    onClick: t
                }, void 0, "Otkaži"), " ", ai("button", {
                    type: "submit"
                }, void 0, o ? "..." : "Pošalji")))
            }
              , li = He.memo(si);
            var ci, ui = n(389);
            function di(e, t, n, i) {
                ci || (ci = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: ci,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            const hi = e=>{
                let {close: t} = e;
                const [n,i] = (0,
                He.useState)([])
                  , [o,r] = (0,
                He.useState)(null)
                  , [a,s] = (0,
                He.useState)(null)
                  , [l,c] = (0,
                He.useState)(0)
                  , [u,d] = (0,
                He.useState)(null)
                  , [h,p] = (0,
                He.useState)(!1)
                  , f = rt()
                  , v = async()=>{
                    if (h)
                        return;
                    p(!0),
                    i([]);
                    const e = await (0,
                    G.Es)();
                    if (p(!1),
                    e.errors)
                        return void i(e.errors);
                    const {sleft: t, mod: n, reason: o} = e;
                    if (t) {
                        const e = new Date(Date.now() + 1e3 * t);
                        c(t),
                        d(e.toLocaleString())
                    }
                    s(n),
                    r(o)
                }
                ;
                return (0,
                ui.Z)((()=>{
                    l > 0 && (c(l - 1),
                    1 === l && v())
                }
                ), 1e3),
                di("div", {
                    style: {
                        userSelect: "text"
                    }
                }, void 0, di("p", {}, void 0, "Zabranjeni ste. Mislite da je neopravdano? Provjerite ", di("span", {
                    role: "button",
                    tabIndex: 0,
                    className: "modallink",
                    onClick: ()=>{
                        f("HELP", {
                            target: "fullscreen"
                        }),
                        t()
                    }
                }, void 0, "Pomoć"), " o tome kako se žaliti."), n.map((e=>di("p", {
                    className: "errormessage"
                }, e, di("span", {}, void 0, "Greška"), ": ", e))), o && di(He.Fragment, {}, "rea", di("h3", {}, void 0, "Razlog", ":"), di("p", {}, void 0, o)), a && di(He.Fragment, {}, "mod", di("h3", {}, void 0, "Od moderatora", ":"), di("p", {}, void 0, a)), l > 0 && di(He.Fragment, {}, "exp", di("h3", {}, void 0, "Trajanje", ":"), di("p", {}, void 0, "Vaš ban ističe ", di("span", {
                    style: {
                        fontWeight: "bold"
                    }
                }, void 0, u), " što znači u ", di("span", {
                    style: {
                        fontWeight: "bold"
                    }
                }, void 0, (0,
                k.gx)(l)))), l < 0 && di(He.Fragment, {}, "nb", di("h3", {}, void 0, "Unbanani ste", ":"), di("p", {}, void 0, "Sada kada ste vidjeli ovu poruku, više niste banani.")), di("p", {}, void 0, !o && di(He.Fragment, {}, "btnr", di("button", {
                    type: "button",
                    style: {
                        fontWeight: "bold",
                        animation: "glowing 1300ms infinite"
                    },
                    onClick: v
                }, void 0, h ? "..." : "Zašto?"), " "), di("button", {
                    type: "submit",
                    onClick: t
                }, void 0, "OK")))
            }
              , pi = He.memo(hi);
            var fi;
            function vi(e, t, n, i) {
                fi || (fi = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: fi,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            const mi = e=>{
                let {show: t, onClick: n, z: i} = e;
                const [o,r] = (0,
                He.useState)(!1);
                return (0,
                He.useEffect)((()=>{
                    t && window.setTimeout((()=>{
                        r(!0)
                    }
                    ), 10)
                }
                ), [t]),
                o || t ? vi("div", {
                    className: t && o ? "overlay show" : "overlay",
                    style: i ? {
                        zIndex: i
                    } : {},
                    onTransitionEnd: ()=>{
                        t || r(!1)
                    }
                    ,
                    tabIndex: -1,
                    onClick: n
                }) : null
            }
              , gi = He.memo(mi);
            var yi;
            function wi(e, t, n, i) {
                yi || (yi = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: yi,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            const bi = e=>{
                let {close: t} = e;
                return He.createElement(He.Fragment, null, wi("button", {
                    type: "button",
                    style: {
                        fontWeight: "bold",
                        animation: "glowing 1300ms infinite"
                    },
                    onClick: ()=>window.location.reload()
                }, void 0, "Refresh"), " ", wi("button", {
                    type: "submit",
                    onClick: t
                }, void 0, "Otkaži"))
            }
              , ki = He.memo(bi);
            var Si;
            function Ei(e, t, n, i) {
                Si || (Si = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: Si,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            const Ci = ()=>{
                const [e,t] = (0,
                He.useState)(!1)
                  , {open: n, alertType: i, title: o, message: a, btn: s} = (0,
                Ue.v9)((e=>e.alert))
                  , l = (0,
                Ue.I0)()
                  , c = (0,
                He.useCallback)((()=>{
                    l((0,
                    r.M6)())
                }
                ), [l]);
                (0,
                He.useEffect)((()=>{
                    n && window.setTimeout((()=>{
                        t(!0)
                    }
                    ), 10)
                }
                ), [n]);
                let u = null;
                switch (i) {
                case "captcha":
                    u = li;
                    break;
                case "ban":
                    u = pi;
                    break;
                case "refresh":
                    u = ki
                }
                if (!e && !n)
                    return null;
                const d = n && e;
                return He.createElement(He.Fragment, null, Ei(gi, {
                    z: 6,
                    show: d,
                    onClick: c
                }), Ei("div", {
                    className: d ? "Alert show" : "Alert",
                    onTransitionEnd: ()=>{
                        n || t(!1)
                    }
                }, void 0, Ei("h2", {}, void 0, o), a && Ei("p", {}, void 0, a), u ? Ei(u, {
                    close: c
                }) : Ei("button", {
                    type: "button",
                    onClick: c
                }, void 0, s)), ")")
            }
              , Ti = He.memo(Ci);
            var Ii, xi, Ni, _i, Oi, Pi, Ai, Li, Ri, ji, $i = n(891);
            function Di(e, t, n, i) {
                ji || (ji = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: ji,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            const Mi = ()=>{
                const [e,t,n] = (0,
                Ue.v9)((e=>[e.canvas.isHistoricalView, e.canvas.is3D, e.user.isOnMobile]), Ue.wU);
                return He.createElement(He.Fragment, null, Ii || (Ii = Di(Ti, {})), xi || (xi = Di(Zn, {})), e ? Ni || (Ni = Di($i.Z, {
                    id: "historyselectfloat"
                })) : He.createElement(He.Fragment, null, _i || (_i = Di(In, {})), Oi || (Oi = Di(Xn, {})), !t && (Pi || (Pi = Di(kn, {}))), !t && n && (Ai || (Ai = Di(Rn, {}))), Li || (Li = Di(hn, {}))), Ri || (Ri = Di(mn, {})))
            }
              , zi = He.memo(Mi);
            var Hi, Ui, Wi;
            function Vi(e, t, n, i) {
                Wi || (Wi = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: Wi,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            const Gi = ()=>{
                const e = (0,
                Ue.v9)((e=>e.gui.menuOpen))
                  , t = (0,
                Ue.I0)();
                return Vi("div", {
                    id: "menubutton",
                    className: "actionbuttons" + (e ? " pressed" : ""),
                    role: "button",
                    title: e ? "Zatvori izbornik" : "Otvori izbornik",
                    tabIndex: -1,
                    onClick: ()=>t((0,
                    r.vN)())
                }, void 0, e ? Hi || (Hi = Vi(bt.Faw, {})) : Ui || (Ui = Vi(bt.Yc6, {})))
            }
              , Fi = He.memo(Gi);
            var Bi = n(7516);
            const Zi = function(e, t, n) {
                const i = (0,
                He.useCallback)((e=>{
                    e.preventDefault(),
                    e.stopPropagation(),
                    t && t();
                    let {clientX: i, clientY: o} = e.touches ? e.touches[0] : e;
                    const r = e=>{
                        e.preventDefault(),
                        e.stopPropagation();
                        const {clientX: t, clientY: r} = e.touches ? e.touches[0] : e;
                        n(t - i, r - o),
                        i = t,
                        o = r
                    }
                    ;
                    document.addEventListener("mousemove", r),
                    document.addEventListener("touchmove", r);
                    const a = e=>{
                        e.preventDefault(),
                        e.stopPropagation(),
                        document.removeEventListener("mousemove", r),
                        document.removeEventListener("touchmove", r),
                        document.removeEventListener("mouseup", a),
                        document.removeEventListener("touchcancel", a),
                        document.removeEventListener("touchend", a);
                        for (const e of document.getElementsByTagName("iframe"))
                            e.style.removeProperty("pointer-events"),
                            e.style.removeProperty("touch-action")
                    }
                    ;
                    document.addEventListener("mouseup", a),
                    document.addEventListener("touchcancel", a),
                    document.addEventListener("touchend", a);
                    for (const e of document.getElementsByTagName("iframe"))
                        e.style["pointer-events"] = "none",
                        e.style["touch-action"] = "none"
                }
                ), [t, n]);
                (0,
                He.useEffect)((()=>{
                    const t = e.current;
                    if (t)
                        return t.addEventListener("mousedown", i, {
                            passive: !1
                        }),
                        t.addEventListener("touchstart", i, {
                            passive: !1
                        }),
                        ()=>{
                            t.removeEventListener("mousedown", i),
                            t.removeEventListener("touchstart", i)
                        }
                }
                ), [e, i])
            };
            var Ki, Yi = n(2585);
            function qi(e, t, n, i) {
                Ki || (Ki = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: Ki,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            const Xi = ()=>{
                const [e,t] = (0,
                He.useState)("")
                  , [n,i] = (0,
                He.useState)(!1)
                  , r = (0,
                Ue.I0)();
                return qi("p", {}, void 0, qi("input", {
                    style: {
                        display: "inline-block",
                        width: "100%",
                        maxWidth: "18em"
                    },
                    readOnly: !0,
                    value: e
                }), e ? qi("button", {
                    type: "button",
                    onClick: ()=>{
                        (0,
                        o.Z)(e),
                        r((0,
                        c.h4)("Kopirano"))
                    }
                }, "cobtn", "Kopiraj") : qi("button", {
                    type: "button",
                    onClick: async()=>{
                        i(!0);
                        const e = await (0,
                        G.JL)();
                        e.iid && t(e.iid),
                        i(!1)
                    }
                }, "subtn", n ? "..." : "Uzmi IID"))
            }
              , Qi = He.memo(Xi);
            var Ji, eo, to, no, io, oo, ro, ao, so, lo, co, uo, ho, po, fo, vo, mo, go, yo, wo, bo, ko, So, Eo, Co, To, Io, xo, No, _o, Oo, Po, Ao, Lo, Ro, jo, $o, Do, Mo, zo, Ho, Uo, Wo;
            function Vo(e, t, n, i) {
                Wo || (Wo = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: Wo,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            var Go, Fo, Bo = n(888);
            function Zo(e, t, n, i) {
                Fo || (Fo = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: Fo,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            const Ko = He.memo((e=>{
                let {title: t, keyBind: n, value: i, onToggle: o, children: r, deactivated: a} = e;
                return Zo("div", {
                    className: "setitem"
                }, void 0, Zo("div", {
                    className: "setrow"
                }, void 0, Zo("h3", {
                    className: "settitle"
                }, void 0, t, " ", n && Zo("kbd", {}, void 0, n)), Zo(Bo.Z, {
                    checked: i,
                    onChange: o,
                    disabled: a
                })), Zo("div", {
                    className: "modaldesc"
                }, void 0, r), Go || (Go = Zo("div", {
                    className: "modaldivider"
                })))
            }
            ), ((e,t)=>e.value === t.value));
            var Yo, qo;
            function Xo(e, t, n, i) {
                qo || (qo = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: qo,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            const Qo = e=>{
                let {title: t, keyBind: n, values: i, selected: o, onSelect: r, icon: a, children: s} = e;
                return Xo("div", {
                    className: "setitem"
                }, void 0, Xo("div", {
                    className: "setrow"
                }, void 0, Xo("h3", {
                    className: "settitle"
                }, void 0, t, " ", n && Xo("kbd", {}, void 0, n)), a && Xo("img", {
                    alt: "",
                    src: a
                }), Xo("select", {
                    value: o,
                    onChange: e=>{
                        const t = e.target;
                        r(t.options[t.selectedIndex].value)
                    }
                }, void 0, i.map((e=>Xo("option", {
                    value: e
                }, e, e))))), Xo("div", {
                    className: "modaldesc"
                }, void 0, s), Yo || (Yo = Xo("div", {
                    className: "modaldivider"
                })))
            }
            ;
            var Jo;
            function er(e, t, n, i) {
                Jo || (Jo = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: Jo,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            const tr = function() {
                const [e,t] = (0,
                He.useState)(window.ssv.lang)
                  , [n,i] = (0,
                He.useState)("xx");
                return (0,
                He.useEffect)((()=>{
                    const {langs: t} = window.ssv;
                    for (let n = 0; n < t.length; n += 1) {
                        const [o,r] = t[n];
                        if (o === e)
                            return void i(r)
                    }
                }
                ), [e]),
                navigator.cookieEnabled ? er("div", {
                    style: {
                        textAlign: "right"
                    }
                }, void 0, er("span", {}, void 0, er("select", {
                    value: e,
                    onChange: e=>{
                        const n = e.target;
                        t(n.options[n.selectedIndex].value)
                    }
                }, void 0, window.ssv.langs.map((e=>{
                    let[t] = e;
                    return er("option", {
                        value: t
                    }, t, t.toUpperCase())
                }
                )))), "  ", er("span", {}, void 0, er("img", {
                    style: {
                        height: "1em",
                        imageRendering: "crisp-edges"
                    },
                    alt: "",
                    src: `/cf/${n}.gif`
                })), er("button", {
                    type: "submit",
                    style: {
                        display: "block",
                        margin: 5
                    },
                    onClick: ()=>{
                        const t = new Date;
                        t.setTime(t.getTime() + 24 * S.vc);
                        let {hostname: n} = window.location;
                        n = n.lastIndexOf(".") !== n.indexOf(".") ? n.slice(n.indexOf(".")) : `.${n}`,
                        document.cookie = `plang=${e};expires=${t.toUTCString()};path=/;domain=${n}`,
                        window.location.reload()
                    }
                }, void 0, "Spremi")) : null
            };
            var nr;
            function ir(e, t, n, i) {
                nr || (nr = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: nr,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            const or = e=>{
                let {enabled: t, title: n, canvasId: i, x: o, y: a, width: s, height: c, imageId: u, startEditing: d} = e;
                const h = (0,
                He.useRef)()
                  , p = (0,
                Ue.v9)((e=>e.canvas.canvases))
                  , f = (0,
                Ue.I0)();
                return (0,
                He.useEffect)((()=>{
                    (async()=>{
                        if (!u || !h.current)
                            return;
                        const e = await Q.getTemplate(u);
                        if (!e)
                            return;
                        const t = await createImageBitmap(e);
                        h.current.getContext("bitmaprenderer").transferFromImageBitmap(t),
                        t.close()
                    }
                    )()
                }
                ), [u]),
                ir("div", {
                    className: t ? "tmpitm" : "tmpitm disabled",
                    style: {
                        cursor: "pointer"
                    },
                    onClick: ()=>f(l(n, {
                        enabled: !t
                    }))
                }, void 0, ir("div", {
                    className: "tmpitm-preview"
                }, void 0, He.createElement("canvas", {
                    className: "tmpitm-img",
                    ref: h,
                    key: "showimg",
                    width: s,
                    height: c
                })), ir("div", {
                    className: "tmpitm-desc"
                }, void 0, ir("h4", {}, void 0, n), ir("p", {}, void 0, "Platno", ": ", ir("span", {}, void 0, p[i]?.title)), ir("p", {}, void 0, "Koordinate", ": ", ir("span", {}, void 0, `${o},${a}`)), ir("p", {}, void 0, "Dimenzije", ": ", ir("span", {}, void 0, `${s} x ${c}`))), ir("div", {
                    className: "tmpitm-actions"
                }, void 0, ir("button", {
                    onClick: e=>{
                        e.stopPropagation(),
                        d(n)
                    }
                    ,
                    type: "button"
                }, void 0, "Uredi"), ir("button", {
                    onClick: e=>{
                        e.stopPropagation(),
                        f((0,
                        r.SC)(i)),
                        f((0,
                        r.w5)([o + s / 2, a + c / 2]))
                    }
                    ,
                    type: "button"
                }, void 0, "Idi do")))
            }
              , rr = He.memo(or);
            var ar;
            function sr(e, t, n, i) {
                ar || (ar = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: ar,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            const lr = e=>{
                let {title: t, canvasId: n, x: i, y: o, imageId: r, stopEditing: a} = e;
                const [s] = (0,
                He.useMemo)((()=>[Number.isNaN(parseInt(i, 10)) || Number.isNaN(parseInt(o, 10)) ? null : [i, o]]), [i, o])
                  , [l,c] = (0,
                He.useState)(s)
                  , [u,d] = (0,
                He.useState)(null)
                  , [h,p] = (0,
                He.useState)(t || "")
                  , [f,v] = (0,
                He.useState)(null)
                  , [m,g] = (0,
                He.useState)(!0)
                  , y = (0,
                He.useRef)()
                  , w = (0,
                He.useRef)()
                  , [b,S,E] = (0,
                Ue.v9)((e=>[e.canvas.canvasId, e.canvas.canvases, e.templates.list]), Ue.wU)
                  , [C,T] = (0,
                He.useState)(n ?? b);
                (0,
                He.useEffect)((()=>{
                    (async()=>{
                        if (!r || !y.current)
                            return;
                        const e = await Q.getTemplate(r);
                        if (!e)
                            return;
                        const t = await createImageBitmap(e)
                          , n = y.current
                          , {width: i, height: o} = t;
                        n.width = i,
                        n.height = o,
                        n.getContext("bitmaprenderer").transferFromImageBitmap(t),
                        d([i, o]),
                        t.close()
                    }
                    )()
                }
                ), [r]),
                (0,
                He.useEffect)((()=>{
                    f && y.current && (async()=>{
                        const e = await createImageBitmap(f)
                          , t = y.current
                          , {width: n, height: i} = e;
                        t.width = n,
                        t.height = i,
                        t.getContext("bitmaprenderer").transferFromImageBitmap(e),
                        d([n, i]),
                        e.close()
                    }
                    )()
                }
                ), [f]);
                const I = y.current && (f || r) && m && l && h && u;
                return sr("div", {
                    className: "tmpitm"
                }, void 0, sr("div", {
                    className: "tmpitm-preview"
                }, void 0, sr("div", {
                    style: {
                        width: "100%",
                        height: "100%"
                    }
                }, void 0, He.createElement("canvas", {
                    className: "tmpitm-img",
                    ref: y,
                    key: "editimg",
                    style: {
                        opacity: .4
                    }
                })), sr("div", {
                    className: "centered-on-img modallink",
                    onClick: ()=>w.current?.click()
                }, void 0, "Odaberi datoteku"), He.createElement("input", {
                    type: "file",
                    key: "hinpt",
                    accept: "image/*",
                    ref: w,
                    style: {
                        display: "none"
                    },
                    onChange: e=>{
                        d(null),
                        v(e.target.files?.[0])
                    }
                })), sr("div", {
                    className: "tmpitm-desc"
                }, void 0, sr("h4", {}, void 0, sr("input", {
                    value: h,
                    style: {
                        width: "10em"
                    },
                    type: "text",
                    onChange: e=>{
                        const t = e.target.value;
                        g(!E.some((e=>e.title === t))),
                        p(e.target.value)
                    }
                    ,
                    placeholder: "Ime šablona"
                })), sr("p", {}, void 0, "Platno", ": ", sr("span", {}, void 0, sr("select", {
                    value: C,
                    onChange: e=>{
                        const t = e.target;
                        T(t.options[t.selectedIndex].value)
                    }
                }, void 0, Object.keys(S).filter((e=>!S[e].v && !S[e].ed)).map((e=>sr("option", {
                    value: e
                }, e, S[e].title)))))), sr("p", {}, void 0, "Koordinate", ": ", sr("span", {}, void 0, sr("input", {
                    type: "text",
                    defaultValue: l && l.join("_"),
                    style: {
                        display: "inline-block",
                        maxWidth: "8em"
                    },
                    placeholder: "X_Y or URL",
                    onChange: e=>{
                        const t = (0,
                        k._I)(e.target.value.trim());
                        t && (e.target.value = t.join("_")),
                        c(t)
                    }
                }))), sr("p", {}, void 0, "Dimenzije", ": ", sr("span", {}, void 0, u ? u.join(" x ") : "N/A"))), sr("div", {
                    className: "tmpitm-actions"
                }, void 0, t && sr("button", {
                    onClick: ()=>{
                        a(t),
                        Q.deleteTemplate(t)
                    }
                    ,
                    type: "button"
                }, void 0, "Izbriši"), sr("button", {
                    onClick: ()=>a(h),
                    type: "button"
                }, void 0, "Otkaži"), sr("button", {
                    disabled: !I,
                    onClick: async()=>{
                        if (!I)
                            return;
                        const [e,s] = l;
                        t ? (f && r && await Q.updateFile(r, f),
                        !t || t === h && i === e && o === s && n === C || Q.changeTemplate(t, {
                            title: h,
                            canvasId: C,
                            x: e,
                            y: s
                        })) : await Q.addFile(f, h, C, e, s),
                        a(t)
                    }
                    ,
                    type: "button"
                }, void 0, "Spremi")))
            }
              , cr = He.memo(lr);
            var ur, dr;
            function hr(e, t, n, i) {
                dr || (dr = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: dr,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            const pr = ()=>{
                const [e,t] = (0,
                He.useState)(!1)
                  , [n,i,o,r] = (0,
                Ue.v9)((e=>[e.templates.list, e.templates.ovEnabled, e.templates.oSmallPxls, e.templates.oOpacity]), Ue.wU)
                  , [a,s] = (0,
                He.useState)([])
                  , l = (0,
                He.useCallback)((()=>t(!1)), [])
                  , c = (0,
                He.useRef)()
                  , u = (0,
                Ue.I0)()
                  , d = (0,
                He.useCallback)((e=>{
                    const t = n.findIndex((t=>t.title === e))
                      , i = a.indexOf(t);
                    s(-1 === i ? [...a, t] : a.toSpliced(i, 1))
                }
                ), [n, a]);
                return He.createElement(He.Fragment, null, hr("h2", {}, void 0, "Šabloni"), hr("p", {}, void 0, "Umorni ste od uvijek spamanja jedne boje? Umjesto toga želite stvarati umjetnost, ali morate brojati pixele s neke druge slike? U tome vam mogu pomoći predlošci! Predlošci se mogu prikazati kao sloj i možete crtati preko njih. Jedan pixel na predlošku trebao bi biti jedan pixel na platnu."), hr(Ko, {
                    title: "Omogući preklapanje",
                    keyBind: "T",
                    value: i,
                    onToggle: ()=>u({
                        type: "s/TGL_OVENABLED"
                    })
                }, void 0, "Prikaži šablone kao slojeve u igri."), hr(Ko, {
                    title: "Zumiranje malih pixela",
                    value: o,
                    onToggle: ()=>u({
                        type: "s/TGL_SMALLPXLS"
                    })
                }, void 0, "Prikaži sloj kao male pojedinačne pixele na visokim razinama zumiranja."), hr("div", {
                    className: "setitem"
                }, void 0, hr("div", {
                    className: "setrow"
                }, void 0, hr("h3", {
                    className: "settitle"
                }, void 0, "Prozirnost sloja"), hr("div", {
                    style: {
                        textAlign: "right"
                    }
                }, void 0, hr("input", {
                    type: "number",
                    value: r,
                    style: {
                        maxWidth: "6em"
                    },
                    step: "1",
                    min: "10",
                    max: "100",
                    onChange: e=>u({
                        type: "s/SET_O_OPACITY",
                        opacity: e.target.value
                    })
                }))), hr("div", {
                    className: "modaldesc"
                }, void 0, "Neprozirnost sloja u postocima."), ur || (ur = hr("div", {
                    className: "modaldivider"
                }))), n.map(((e,t)=>{
                    let {enabled: n, imageId: i, canvasId: o, title: r, x: s, y: l, width: c, height: u} = e;
                    return a.includes(t) ? hr(cr, {
                        enabled: n,
                        title: r,
                        imageId: i,
                        canvasId: o,
                        x: s,
                        y: l,
                        stopEditing: d
                    }, t) : hr(rr, {
                        enabled: n,
                        title: r,
                        imageId: i,
                        canvasId: o,
                        x: s,
                        y: l,
                        width: c,
                        height: u,
                        startEditing: d
                    }, t)
                }
                )), e && hr(cr, {
                    stopEditing: l
                }), e ? hr("span", {
                    role: "button",
                    tabIndex: -1,
                    className: "modallink",
                    onClick: ()=>l()
                }, void 0, " ", "Otkaži dodavanje šablona") : hr("span", {
                    role: "button",
                    tabIndex: -1,
                    className: "modallink",
                    onClick: ()=>t(!0)
                }, void 0, " ", "Dodaj šablon"), n.some((e=>e.enabled)) && hr(He.Fragment, {}, "exps", " | ", hr("span", {
                    role: "button",
                    tabIndex: -1,
                    className: "modallink",
                    onClick: async()=>{
                        const e = await Q.exportEnabledTemplates();
                        e && qt()(JSON.stringify(e), "PixelplanetTemplates.json")
                    }
                }, void 0, "Izvoz omogućenih šablona")), " | ", hr("span", {
                    role: "button",
                    tabIndex: -1,
                    className: "modallink",
                    onClick: async()=>c.current?.click()
                }, void 0, "Uvoz šablona"), He.createElement("input", {
                    type: "file",
                    key: "impin",
                    ref: c,
                    style: {
                        display: "none"
                    },
                    onChange: e=>{
                        Q.importTemplates(e.target.files?.[0])
                    }
                }))
            }
            ;
            var fr, vr, mr, gr;
            function yr(e, t, n, i) {
                gr || (gr = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: gr,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            const wr = ()=>{
                const [e,t,n,i,o,a,s,l,c,u,d,h,p,f,v] = (0,
                Ue.v9)((e=>[e.gui.showGrid, e.gui.showPixelNotify, e.gui.showMvmCtrls, e.gui.autoZoomIn, e.gui.compactPalette, e.gui.isPotato, e.gui.isLightGrid, e.gui.style, e.gui.mute, e.gui.chatNotify, e.gui.cursor, e.canvas.pencilMode, e.canvas.isHistoricalView, e.canvas.canvases[e.canvas.canvasId]?.title, e.templates.available]), Ue.wU)
                  , m = (0,
                Ue.I0)()
                  , g = window.AudioContext || window.webkitAudioContext
                  , y = ["Odabrana boja", "Sa šablona"];
                return window.ssv?.backupurl && y.push("Iz History mode-a"),
                yr("div", {
                    className: "content"
                }, void 0, yr(Ko, {
                    title: "Pokaži rešetku",
                    keyBind: "G",
                    value: e,
                    onToggle: ()=>m((0,
                    r.xK)())
                }, void 0, "Uključite rešetku za označavanje granica piksela."), yr(Ko, {
                    title: "Prikaži aktivnost Pixela",
                    keyBind: "X",
                    value: t,
                    onToggle: ()=>m((0,
                    r.Xb)())
                }, void 0, "Prikažite krugove gdje su postavljeni pikseli."), yr(Ko, {
                    title: "Uvijek pokaži kontrole za kretnju",
                    keyBind: "N",
                    value: n,
                    onToggle: ()=>m((0,
                    r.qP)())
                }, void 0, "Uvijek prikaži gumbe za kontrolu kretanja"), yr(Ko, {
                    title: "Onemogući zvukove igre",
                    keyBind: "M",
                    deactivated: !g,
                    value: !g || c,
                    onToggle: ()=>m((0,
                    r.$t)())
                }, void 0, ["Svi zvučni efekti bit će onemogućeni.", !g && yr("p", {
                    className: "warn"
                }, void 0, "Vaš nam preglednik ne dopušta korištenje AudioContexta za reprodukciju zvukova. Imate li neku značajku privatnosti koja nas blokira?")]), yr(Ko, {
                    title: "Omogući obavijesti o chatu",
                    value: u,
                    onToggle: ()=>m((0,
                    r.c7)())
                }, void 0, "Pusti zvuk kada stignu nove chat poruke"), yr(Ko, {
                    title: "Automatsko povećanje",
                    value: i,
                    onToggle: ()=>m((0,
                    r.o7)())
                }, void 0, "Povećajte umjesto postavljanja piksela kada dodirnete platno i vaše je zumiranje malo."), yr(Ko, {
                    title: "Kompaktna paleta",
                    value: o,
                    onToggle: ()=>m((0,
                    r.Cd)())
                }, void 0, "Prikaži paletu u kompaktnom obliku koji zauzima manje prostora na zaslonu."), yr(Ko, {
                    title: "Način krumpira",
                    value: a,
                    onToggle: ()=>m((0,
                    r.RL)())
                }, void 0, "Jer kad igraš na krumpir."), yr(Ko, {
                    title: "Svijetla rešetka",
                    value: s,
                    onToggle: ()=>m((0,
                    r.ts)())
                }, void 0, "Pokaži rešetku u bijeloj umjesto u crnoj boji."), yr(Ko, {
                    title: "Prilagođeni kursor",
                    value: d,
                    onToggle: ()=>m((0,
                    r.Ti)())
                }, void 0, "Koristite naš prilagođeni kursor"), window.ssv?.backupurl && yr(Ko, {
                    title: "Povijesni pogled",
                    value: p,
                    keyBind: "H",
                    onToggle: ()=>m((0,
                    r.FI)())
                }, void 0, "Pogledajte prethodne verzije platna."), yr(Qo, {
                    title: `Mod olovke za platno ${f}`,
                    values: y,
                    selected: y[h],
                    keyBind: "B",
                    onSelect: e=>m((0,
                    r.F9)(y.indexOf(e)))
                }, void 0, "Što bi olovka trebala nacrtati na trenutnom platnu."), window.ssv?.availableStyles && yr(Qo, {
                    title: "Teme",
                    values: Object.keys(window.ssv.availableStyles),
                    selected: l,
                    onSelect: e=>m((0,
                    r.MM)(e))
                }, void 0, "Kako bi pixelplanet trebao izgledati."), window.ssv?.langs && navigator.cookieEnabled && yr("div", {
                    className: "setitem"
                }, void 0, yr("div", {
                    className: "setrow"
                }, void 0, yr("h3", {
                    className: "settitle"
                }, void 0, "Izaberi jezik"), fr || (fr = yr(tr, {})))), vr || (vr = yr("div", {
                    className: "modaldivider"
                })), v && (mr || (mr = yr(pr, {}))))
            }
              , br = He.memo(wr)
              , kr = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
            function Sr(e) {
                return e ? e.length < 5 ? "Email treba imati najmanje 5 znakova." : e.length > 40 ? "Email ne smije biti duži od 40 znakova." : -1 === e.indexOf(".") ? "Email treba sadržavati barem točku" : 1 !== e.split("").filter((e=>"@" === e)).length ? "Email treba sadržavati @" : !kr.test(e) && "Your Email looks shady" : "Email ne može biti prazan."
            }
            function Er(e) {
                return e ? e.length < 2 ? "Ime mora imati najmanje 2 znaka" : e.length > 26 ? "Ime mora biti kraće od 26 znakova" : (-1 !== e.indexOf("@") || -1 !== e.indexOf("/") || -1 !== e.indexOf("\\") || -1 !== e.indexOf(">") || -1 !== e.indexOf("<") || -1 !== e.indexOf("#")) && "Naziv sadrži nevažeći znak kao što je @, /, \\ ili #" : "Ime ne može biti prazno."
            }
            function Cr(e) {
                return e ? e.length < 6 ? "Lozinka mora imati najmanje 6 znakova." : e.length > 60 && "Lozinka mora biti kraća od 60 znakova." : "Lozinka nije navedena."
            }
            var Tr, Ir;
            function xr(e, t, n, i) {
                Ir || (Ir = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: Ir,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            const Nr = {
                display: "inline-block",
                width: "75%",
                maxWidth: "35em"
            }
              , _r = ()=>{
                const [e,t] = (0,
                He.useState)("")
                  , [n,i] = (0,
                He.useState)("")
                  , [o,a] = (0,
                He.useState)(!1)
                  , [s,l] = (0,
                He.useState)([])
                  , c = (0,
                Ue.I0)();
                return xr("form", {
                    onSubmit: async t=>{
                        if (t.preventDefault(),
                        o)
                            return;
                        const i = function(e, t) {
                            const n = []
                              , i = -1 !== e.indexOf("@") ? Sr(e) : Er(e);
                            i && n.push(i);
                            const o = Cr(t);
                            return o && n.push(o),
                            n
                        }(e, n);
                        if (i.length > 0)
                            return void l(i);
                        a(!0);
                        const {errors: s, me: u} = await (0,
                        G.Pw)(e, n);
                        a(!1),
                        s ? l(s) : c((0,
                        r.pH)(u))
                    }
                }, void 0, s.map((e=>xr("p", {}, e, xr("span", {}, void 0, "Greška"), ": ", e))), xr("input", {
                    value: e,
                    style: Nr,
                    onChange: e=>t(e.target.value),
                    type: "text",
                    placeholder: "Ime ili email"
                }), Tr || (Tr = xr("br", {})), xr("input", {
                    value: n,
                    style: Nr,
                    onChange: e=>i(e.target.value),
                    type: "password",
                    placeholder: "Lozinka"
                }), xr("p", {}, void 0, xr("button", {
                    type: "submit"
                }, void 0, o ? "..." : "Prijava")))
            }
              , Or = He.memo(_r);
            var Pr, Ar, Lr, Rr, jr, $r, Dr, Mr;
            function zr(e, t, n, i) {
                Mr || (Mr = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: Mr,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            const Hr = {
                marginRight: 5
            }
              , Ur = ()=>{
                const e = rt();
                return zr("div", {
                    style: {
                        textAlign: "center"
                    }
                }, void 0, zr("p", {}, void 0, "Prijavite se za pristup dodatnim značajkama i statistikama."), Pr || (Pr = zr("br", {})), zr("h2", {}, void 0, "Prijavite se imenom ili e-poštom:"), Ar || (Ar = zr(Or, {})), zr("p", {
                    className: "modallink",
                    onClick: ()=>e("FORGOT_PASSWORD"),
                    role: "presentation"
                }, void 0, "Zaboravio sam lozinku."), zr("h2", {}, void 0, "ili se prijavite sa:"), Lr || (Lr = zr("a", {
                    href: "/api/auth/discord"
                }, void 0, zr("img", {
                    style: Hr,
                    width: 32,
                    src: "/discordlogo.svg",
                    alt: "Discord"
                }))), Rr || (Rr = zr("a", {
                    href: "/api/auth/google"
                }, void 0, zr("img", {
                    style: Hr,
                    width: 32,
                    src: "/googlelogo.svg",
                    alt: "Google"
                }))), jr || (jr = zr("a", {
                    href: "/api/auth/facebook"
                }, void 0, zr("img", {
                    style: Hr,
                    width: 32,
                    src: "/facebooklogo.svg",
                    alt: "Facebook"
                }))), $r || ($r = zr("a", {
                    href: "/api/auth/vk"
                }, void 0, zr("img", {
                    style: Hr,
                    width: 32,
                    src: "/vklogo.svg",
                    alt: "VK"
                }))), Dr || (Dr = zr("a", {
                    href: "/api/auth/reddit"
                }, void 0, zr("img", {
                    style: Hr,
                    width: 32,
                    src: "/redditlogo.svg",
                    alt: "Reddit"
                }))), zr("h2", {}, void 0, "ili se registrirajte ovdje:"), zr("button", {
                    type: "button",
                    onClick: ()=>e("REGISTER")
                }, void 0, "Registracija"))
            }
              , Wr = He.memo(Ur);
            var Vr;
            function Gr(e, t, n, i) {
                Vr || (Vr = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: Vr,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            const Fr = e=>{
                let {onClick: t, active: n, label: i} = e
                  , o = "tab-list-item";
                return n && (o += " active"),
                Gr("li", {
                    role: "presentation",
                    className: o,
                    onClick: ()=>t(i)
                }, void 0, i)
            }
            ;
            var Br;
            function Zr(e, t, n, i) {
                Br || (Br = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: Br,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            const Kr = e=>{
                let {children: t, activeTab: n, setActiveTab: i} = e;
                return Zr("div", {
                    className: "tabs"
                }, void 0, Zr("ol", {
                    className: "tab-list"
                }, void 0, t.map((e=>{
                    if (!e.props)
                        return;
                    const {label: t} = e.props;
                    return Zr(Fr, {
                        active: n === t,
                        label: t,
                        onClick: e=>i(e)
                    }, t)
                }
                ))), Zr("div", {
                    className: "tab-content"
                }, void 0, t.map((e=>{
                    if (e.props && e.props.label === n)
                        return e.props.children
                }
                ))))
            }
            ;
            var Yr;
            function qr(e, t, n, i) {
                Yr || (Yr = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: Yr,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            const Xr = ()=>{
                const [e,t] = (0,
                He.useState)(!1)
                  , [n,i] = (0,
                He.useState)(null)
                  , o = (0,
                Ue.v9)((e=>e.user.messages));
                return o ? qr("div", {
                    style: {
                        paddingLeft: "5%",
                        paddingRight: "5%"
                    }
                }, void 0, o.includes("not_verified") && qr("p", {
                    className: "usermessages"
                }, void 0, "Potvrdite svoju adresu e-pošte ili bi vaš račun mogao biti izbrisan nakon nekoliko dana.", n ? qr("span", {
                    className: "modallink"
                }, void 0, n) : qr("span", {
                    role: "button",
                    tabIndex: -1,
                    className: "modallink",
                    onClick: async()=>{
                        if (e)
                            return;
                        t(!0);
                        const {errors: n} = await (0,
                        G.ft)()
                          , o = n ? n[0] : "Dobivate novu e-poruku za potvrdu.";
                        i(o)
                    }
                }, void 0, "Kliknite ovdje da zatražite novu e-poštu za potvrdu.")), o.map((e=>"not_verified" === e ? null : qr("p", {
                    className: "usermessages"
                }, e, e)))) : null
            }
              , Qr = He.memo(Xr);
            var Jr, ea, ta, na;
            function ia(e, t, n, i) {
                na || (na = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: na,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            const oa = e=>{
                let {done: t} = e;
                const [n,i] = (0,
                He.useState)("")
                  , [o,a] = (0,
                He.useState)("")
                  , [s,l] = (0,
                He.useState)("")
                  , [c,u] = (0,
                He.useState)(!1)
                  , [d,h] = (0,
                He.useState)(!1)
                  , [p,f] = (0,
                He.useState)([])
                  , v = (0,
                Ue.v9)((e=>e.user.mailreg))
                  , m = (0,
                Ue.I0)();
                return c ? ia("div", {
                    className: "inarea"
                }, void 0, ia("p", {
                    className: "modalmessage"
                }, void 0, "Lozinka je uspješno promijenjena."), ia("button", {
                    type: "button",
                    onClick: t
                }, void 0, "Close")) : ia("div", {
                    className: "inarea"
                }, void 0, ia("form", {
                    onSubmit: async e=>{
                        if (e.preventDefault(),
                        d)
                            return;
                        const t = function(e, t, n, i) {
                            const o = [];
                            if (e) {
                                const e = Cr(t);
                                e && o.push(e)
                            }
                            if (n !== i)
                                return o.push("Lozinke se ne podudaraju."),
                                o;
                            const r = Cr(n);
                            return r && o.push(r),
                            o
                        }(v, n, o, s);
                        if (f(t),
                        t.length)
                            return;
                        h(!0);
                        const {errors: i} = await (0,
                        G.Oh)(o, n);
                        if (i)
                            return f(i),
                            void h(!1);
                        m((0,
                        r.Y2)(!0)),
                        u(!0)
                    }
                }, void 0, p.map((e=>ia("p", {
                    className: "errormessage"
                }, e, ia("span", {}, void 0, "Greška"), ": ", e))), v && ia("input", {
                    value: n,
                    onChange: e=>i(e.target.value),
                    type: "password",
                    placeholder: "Nova lozinka"
                }), Jr || (Jr = ia("br", {})), ia("input", {
                    value: o,
                    onChange: e=>a(e.target.value),
                    type: "password",
                    placeholder: "Nova lozinka"
                }), ea || (ea = ia("br", {})), ia("input", {
                    value: s,
                    onChange: e=>l(e.target.value),
                    type: "password",
                    placeholder: "Potvrdi novu lozinku"
                }), ta || (ta = ia("br", {})), ia("button", {
                    type: "submit"
                }, void 0, d ? "..." : "Spremi"), ia("button", {
                    type: "button",
                    onClick: t
                }, void 0, "Otkaži")))
            }
              , ra = He.memo(oa);
            var aa, sa;
            function la(e, t, n, i) {
                sa || (sa = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: sa,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            const ca = e=>{
                let {done: t} = e;
                const [n,i] = (0,
                He.useState)("")
                  , [o,a] = (0,
                He.useState)(!1)
                  , [s,l] = (0,
                He.useState)([])
                  , c = (0,
                Ue.I0)();
                return la("div", {
                    className: "inarea"
                }, void 0, la("form", {
                    onSubmit: async e=>{
                        if (e.preventDefault(),
                        o)
                            return;
                        const i = function(e) {
                            const t = []
                              , n = Er(e);
                            return n && t.push(n),
                            t
                        }(n);
                        if (i.length > 0)
                            return void l(i);
                        a(!0);
                        const {errors: s} = await (0,
                        G.Wt)(n);
                        a(!1),
                        s ? l(s) : (c((0,
                        r.qC)(n)),
                        t())
                    }
                }, void 0, s.map((e=>la("p", {
                    className: "errormessage"
                }, e, la("span", {}, void 0, "Greška"), ": ", e))), la("input", {
                    value: n,
                    onChange: e=>i(e.target.value),
                    type: "text",
                    placeholder: "Novo korisničko ime"
                }), aa || (aa = la("br", {})), la("button", {
                    type: "submit"
                }, void 0, o ? "..." : "Spremi"), la("button", {
                    type: "button",
                    onClick: t
                }, void 0, "Otkaži")))
            }
            ;
            var ua, da, ha;
            function pa(e, t, n, i) {
                ha || (ha = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: ha,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            const fa = e=>{
                let {done: t} = e;
                const [n,i] = (0,
                He.useState)("")
                  , [o,r] = (0,
                He.useState)("")
                  , [a,s] = (0,
                He.useState)(!1)
                  , [l,c] = (0,
                He.useState)(!1)
                  , [u,d] = (0,
                He.useState)([]);
                return l ? pa("div", {
                    className: "inarea"
                }, void 0, pa("p", {
                    className: "modalmessage"
                }, void 0, "Mail je uspješno promijenjen. Poslali smo vam e-poruku za potvrdu,             potvrdite svoju novu adresu e-pošte."), pa("button", {
                    type: "button",
                    onClick: t
                }, void 0, "Close")) : pa("div", {
                    className: "inarea"
                }, void 0, pa("form", {
                    onSubmit: async e=>{
                        if (e.preventDefault(),
                        a)
                            return;
                        const t = function(e, t) {
                            const n = []
                              , i = Cr(t);
                            i && n.push(i);
                            const o = Sr(e);
                            return o && n.push(o),
                            n
                        }(o, n);
                        if (t.length > 0)
                            return void d(t);
                        s(!0);
                        const {errors: i} = await (0,
                        G.fF)(o, n);
                        s(!1),
                        i ? d(i) : c(!0)
                    }
                }, void 0, u.map((e=>pa("p", {
                    className: "errormessage"
                }, e, pa("span", {}, void 0, "Greška"), ": ", e))), pa("input", {
                    value: n,
                    onChange: e=>i(e.target.value),
                    type: "password",
                    placeholder: "Lozinka"
                }), ua || (ua = pa("br", {})), pa("input", {
                    value: o,
                    onChange: e=>r(e.target.value),
                    type: "text",
                    placeholder: "Nova pošta"
                }), da || (da = pa("br", {})), pa("button", {
                    type: "submit"
                }, void 0, a ? "..." : "Spremi"), pa("button", {
                    type: "button",
                    onClick: t
                }, void 0, "Otkaži")))
            }
            ;
            var va, ma;
            function ga(e, t, n, i) {
                ma || (ma = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: ma,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            const ya = e=>{
                let {done: t} = e;
                const [n,i] = (0,
                He.useState)("")
                  , [o,a] = (0,
                He.useState)(!1)
                  , [s,l] = (0,
                He.useState)([])
                  , c = (0,
                Ue.I0)();
                return ga("div", {
                    className: "inarea",
                    style: {
                        backgroundColor: "#ff6666"
                    }
                }, void 0, ga("form", {
                    onSubmit: async e=>{
                        if (e.preventDefault(),
                        o)
                            return;
                        const t = function(e) {
                            const t = []
                              , n = Cr(e);
                            return n && t.push(n),
                            t
                        }(n);
                        if (t.length > 0)
                            return void l(t);
                        a(!0);
                        const {errors: i} = await (0,
                        G.s$)(n);
                        a(!1),
                        i ? l(i) : c((0,
                        r.TX)())
                    }
                }, void 0, s.map((e=>ga("p", {
                    className: "errormessage"
                }, e, ga("span", {}, void 0, "Greška"), ": ", e))), ga("input", {
                    value: n,
                    onChange: e=>i(e.target.value),
                    type: "password",
                    placeholder: "Lozinka"
                }), va || (va = ga("br", {})), ga("button", {
                    type: "submit"
                }, void 0, o ? "..." : "Da, izbriši moj račun!"), ga("button", {
                    type: "button",
                    onClick: t
                }, void 0, "Otkaži")))
            }
            ;
            var wa, ba;
            function ka(e, t, n, i) {
                ba || (ba = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: ba,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            const Sa = e=>[e.chat.blocked, e.user.blockDm, e.user.priv, e.fetching.fetchingApi]
              , Ea = e=>{
                let {done: t} = e;
                const [n,i,o,r] = (0,
                Ue.v9)(Sa, Ue.wU)
                  , a = (0,
                Ue.I0)();
                return ka("div", {
                    className: "inarea"
                }, void 0, ka(Ko, {
                    title: "Blokiraj DM-ove",
                    value: i,
                    onToggle: ()=>{
                        r || a((0,
                        c.R0)(!i))
                    }
                }, void 0, "Blokiraj sve privatne poruke"), ka(Ko, {
                    title: "Privatno",
                    value: o,
                    onToggle: ()=>{
                        r || a((0,
                        c.eg)(!o))
                    }
                }, void 0, "Ne prikazuj me u globalnoj statistici"), ka("h3", {
                    style: {
                        textAlign: "left",
                        marginLeft: 10
                    }
                }, void 0, "Odblokiraj korisnike"), n.length ? ka("span", {
                    className: "unblocklist"
                }, void 0, n.map((e=>ka("div", {
                    role: "button",
                    tabIndex: 0,
                    onClick: ()=>{
                        r || a((0,
                        c.Ox)(e[0], e[1], !1))
                    }
                }, e[0], `⦸ ${e[1]}`)))) : ka("p", {}, void 0, "Nemate blokiranih korisnika"), wa || (wa = ka("div", {
                    className: "modaldivider"
                })), ka("button", {
                    type: "button",
                    onClick: t,
                    style: {
                        margin: 10
                    }
                }, void 0, "Done"))
            }
            ;
            var Ca, Ta, Ia, xa, Na, _a, Oa;
            function Pa(e, t, n, i) {
                Oa || (Oa = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: Oa,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            const Aa = {
                CHANGE_NAME: He.memo(ca),
                CHANGE_MAIL: He.memo(fa),
                CHANGE_PASSWORD: ra,
                DELETE_ACCOUNT: He.memo(ya),
                SOCIAL_SETTINGS: He.memo(Ea)
            }
              , La = e=>{
                let {text: t, value: n, rank: i, zero: o} = e;
                return Pa("p", {}, void 0, Pa("span", {
                    className: "stattext"
                }, void 0, i ? `${t}: #` : `${t}: `), " ", Pa("span", {
                    className: "statvalue"
                }, void 0, (0,
                k.D$)(n, o)))
            }
              , Ra = ()=>{
                const [e,t] = (0,
                He.useState)("NONE")
                  , n = (0,
                Ue.I0)()
                  , i = (0,
                He.useCallback)((async()=>{
                    await (0,
                    G.e9)() && n((0,
                    r.TX)())
                }
                ), [n])
                  , o = (0,
                Ue.v9)((e=>e.user.mailreg))
                  , a = (0,
                Ue.v9)((e=>e.user.name))
                  , [s,l,c,u] = (0,
                Ue.v9)((e=>[e.ranks.totalPixels, e.ranks.dailyTotalPixels, e.ranks.ranking, e.ranks.dailyRanking]), Ue.wU)
                  , d = Aa[e];
                return Pa("div", {
                    className: "content"
                }, void 0, Ca || (Ca = Pa(Qr, {})), Pa(La, {
                    text: "Današnji postavljeni pikseli",
                    value: l
                }), Pa(La, {
                    text: "Dnevni rank",
                    value: u,
                    zero: "N/A",
                    rank: !0
                }), Pa(La, {
                    text: "Postavljeni pixeli",
                    value: s
                }), Pa(La, {
                    text: "Ukupni rank",
                    value: c,
                    zero: "N/A",
                    rank: !0
                }), Pa("div", {}, void 0, Pa("p", {}, void 0, `Vaše ime je: ${a}`), "(", Pa("span", {
                    role: "button",
                    tabIndex: -1,
                    className: "modallink",
                    onClick: i
                }, void 0, " ", "Odjavite se"), Ta || (Ta = Pa("span", {
                    className: "hdivider"
                })), Pa("span", {
                    role: "button",
                    tabIndex: -1,
                    className: "modallink",
                    onClick: ()=>t("CHANGE_NAME")
                }, void 0, " ", "Promjena korisničkog imena"), Ia || (Ia = Pa("span", {
                    className: "hdivider"
                })), o && Pa(He.Fragment, {}, "mc", Pa("span", {
                    role: "button",
                    tabIndex: -1,
                    className: "modallink",
                    onClick: ()=>t("CHANGE_MAIL")
                }, void 0, " ", "Promjena pošte"), xa || (xa = Pa("span", {
                    className: "hdivider"
                }))), Pa("span", {
                    role: "button",
                    tabIndex: -1,
                    className: "modallink",
                    onClick: ()=>t("CHANGE_PASSWORD")
                }, void 0, " ", "Promjena lozinkе"), Na || (Na = Pa("span", {
                    className: "hdivider"
                })), Pa("span", {
                    role: "button",
                    tabIndex: -1,
                    className: "modallink",
                    onClick: ()=>t("DELETE_ACCOUNT")
                }, void 0, " ", "Izbriši račun"), " )", _a || (_a = Pa("br", {})), "(", Pa("span", {
                    role: "button",
                    tabIndex: -1,
                    className: "modallink",
                    onClick: ()=>t("SOCIAL_SETTINGS")
                }, void 0, " ", "Društvene postavke"), " )"), d && Pa(d, {
                    done: ()=>t(null)
                }))
            }
              , ja = He.memo(Ra);
            var $a, Da, Ma, za, Ha, Ua, Wa, Va, Ga;
            function Fa(e, t, n, i) {
                Ga || (Ga = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: Ga,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            const Ba = He.lazy((()=>n.e(784).then(n.bind(n, 202))))
              , Za = He.lazy((()=>n.e(545).then(n.bind(n, 865))))
              , Ka = He.lazy((()=>n.e(189).then(n.bind(n, 89))))
              , Ya = ()=>{
                const e = (0,
                Ue.v9)((e=>e.user.name))
                  , t = (0,
                Ue.v9)((e=>e.user.userlvl))
                  , n = (0,
                Ue.v9)((e=>e.ranks.lastFetch))
                  , {args: i, setArgs: o, setTitle: r} = (0,
                He.useContext)(it)
                  , {activeTab: a="Profil"} = i
                  , s = (0,
                Ue.I0)()
                  , l = (0,
                He.useCallback)((e=>{
                    o({
                        activeTab: e
                    }),
                    r(e)
                }
                ), [o, r]);
                return (0,
                ui.Z)((()=>{
                    Date.now() - 3e5 > n && s((0,
                    c.mP)())
                }
                ), 3e5),
                Fa("div", {
                    style: {
                        textAlign: "center"
                    }
                }, void 0, Fa(Kr, {
                    activeTab: a,
                    setActiveTab: l
                }, void 0, Fa("div", {
                    label: "Profil"
                }, void 0, e ? $a || ($a = Fa(ja, {})) : Da || (Da = Fa(Wr, {}))), Fa("div", {
                    label: "Statistika"
                }, void 0, Ma || (Ma = Fa(He.Suspense, {
                    fallback: Fa("div", {}, void 0, "Loading...")
                }, void 0, Fa(Ba, {})))), Fa("div", {
                    label: "Konverter"
                }, void 0, za || (za = Fa(He.Suspense, {
                    fallback: Fa("div", {}, void 0, "Loading...")
                }, void 0, Fa(Za, {})))), t && Fa("div", {
                    label: "Alati za moderatore"
                }, void 0, Fa(He.Suspense, {
                    fallback: Fa("div", {}, void 0, "Učitavam...")
                }, void 0, Ha || (Ha = Fa(Ka, {}))))), Ua || (Ua = Fa("br", {})), "Razmislite o tome da nam se pridružite na Discordu:", " ", Wa || (Wa = Fa("a", {
                    href: "./guilded",
                    target: "_blank"
                }, void 0, "pixelplanet.fun/guilded")), Va || (Va = Fa("br", {})))
            }
              , qa = He.memo(Ya);
            var Xa;
            function Qa(e, t, n, i) {
                Xa || (Xa = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: Xa,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            const Ja = ()=>{
                const [e,t] = (0,
                He.useState)("")
                  , [n,i] = (0,
                He.useState)([])
                  , [o,a] = (0,
                He.useState)(Date.now())
                  , s = (0,
                Ue.I0)()
                  , l = rt();
                return Qa("div", {
                    className: "content"
                }, void 0, Qa("form", {
                    style: {
                        paddingLeft: "5%",
                        paddingRight: "5%"
                    },
                    onSubmit: async n=>{
                        if (n.preventDefault(),
                        e)
                            return;
                        const o = n.target.name.value
                          , c = n.target.email.value
                          , u = n.target.password.value
                          , d = n.target.confirmpassword.value
                          , h = n.target.captcha.value
                          , p = n.target.captchaid.value
                          , f = function(e, t, n, i) {
                            const o = []
                              , r = Sr(t);
                            r && o.push(r);
                            const a = Er(e);
                            a && o.push(a);
                            const s = Cr(n);
                            return s && o.push(s),
                            n !== i && o.push("Passwords do not match"),
                            o
                        }(o, c, u, d);
                        if (f.length > 0)
                            return void i(f);
                        t(!0);
                        const {errors: v, me: m} = await (0,
                        G.yx)(o, c, u, h, p);
                        if (t(!1),
                        v)
                            return a(Date.now()),
                            void i(v);
                        s((0,
                        r.pH)(m)),
                        l("USERAREA")
                    }
                }, void 0, Qa("p", {}, void 0, "Registrirajte novi račun ovdje"), n.map((e=>Qa("p", {
                    className: "errormessage"
                }, e, Qa("span", {}, void 0, "Greška"), ": ", e))), Qa("h3", {}, void 0, "Ime", ":"), Qa("input", {
                    name: "name",
                    className: "reginput",
                    autoComplete: "username",
                    type: "text",
                    placeholder: "Ime"
                }), Qa("h3", {}, void 0, "Email", ":"), Qa("input", {
                    name: "email",
                    className: "reginput",
                    autoComplete: "email",
                    type: "text",
                    placeholder: "Email"
                }), Qa("h3", {}, void 0, "Lozinka", ":"), Qa("input", {
                    name: "password",
                    className: "reginput",
                    autoComplete: "new-password",
                    type: "password",
                    placeholder: "Lozinka"
                }), Qa("h3", {}, void 0, "Potvrdite lozinku", ":"), Qa("input", {
                    name: "confirmpassword",
                    className: "reginput",
                    autoComplete: "new-password",
                    type: "password",
                    placeholder: "Potvrdite lozinku"
                }), Qa("h3", {}, void 0, "Captcha", ":"), Qa(oi, {
                    autoload: !1,
                    width: 60
                }, o), Qa("button", {
                    type: "submit"
                }, void 0, e ? "..." : "Podnesi"), Qa("button", {
                    type: "button",
                    onClick: ()=>l("USERAREA")
                }, void 0, "Otkaži")))
            }
              , es = He.memo(Ja);
            var ts, ns, is, os, rs, as, ss, ls, cs, us;
            function ds(e, t, n, i) {
                us || (us = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: us,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            const hs = e=>{
                let {canvasId: t, canvas: n, selCanvas: i, online: o} = e;
                return ds("div", {
                    className: "cvbtn",
                    onClick: ()=>i(t),
                    role: "button",
                    tabIndex: 0
                }, void 0, ds("img", {
                    className: "cvimg",
                    alt: "preview",
                    src: `/preview${t}.png`
                }), ds("div", {
                    className: "modalcvtext"
                }, void 0, ds("h4", {}, void 0, n.title), o && ds(He.Fragment, {}, "online", "Online korisnici", ": ", ds("span", {
                    className: "modalinfo"
                }, void 0, o), ts || (ts = ds("br", {}))), ds("span", {
                    className: "modalinfo"
                }, void 0, n.desc), ns || (ns = ds("br", {})), "Hladjenje", ": ", ds("span", {
                    className: "modalinfo"
                }, void 0, n.pcd && n.bcd !== n.pcd ? ds("span", {}, "cdf", " ", n.bcd / 1e3, "s / ", n.pcd / 1e3, "s") : ds("span", {}, "cd", " ", n.bcd / 1e3, "s")), is || (is = ds("br", {})), "Postavljanje do", ": ", ds("span", {
                    className: "modalinfo"
                }, void 0, " ", n.cds / 1e3, "s"), os || (os = ds("br", {})), "Rangirano", ": ", ds("span", {
                    className: "modalinfo"
                }, void 0, n.ranked ? "Da" : "Ne"), rs || (rs = ds("br", {})), void 0 !== n.req && ds(He.Fragment, {}, "req", ds("span", {}, void 0, "Zahtjevi", ":", as || (as = ds("br", {})), ds("span", {
                    className: "modalinfo"
                }, void 0, "number" == typeof n.req ? ds("span", {}, void 0, "Korisnički račun", " ") : null, n.req > 0 ? ds("span", {}, void 0, " ", `i ${n.req} postavljeni pikseli`, " ") : null, "top" === n.req && ds("span", {}, void 0, "Top 10 dnevni poredak"))), ss || (ss = ds("br", {}))), "Dimenzije", ": ", ds("span", {
                    className: "modalinfo"
                }, void 0, " ", n.size, " x ", n.size, n.v ? ls || (ls = ds("span", {}, "voxsize", " x ", S.Tj, " Voxels")) : cs || (cs = ds("span", {}, "pxlsize", " Pixels")))))
            }
              , ps = He.memo(hs);
            var fs;
            function vs(e, t, n, i) {
                fs || (fs = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: fs,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            const ms = ()=>{
                const [e,t,n] = (0,
                Ue.v9)((e=>[e.canvas.canvases, e.gui.easterEgg, e.ranks.online]), Ue.wU)
                  , i = (0,
                Ue.I0)()
                  , o = (0,
                He.useCallback)((e=>i((0,
                r.SC)(e))), [i])
                  , a = rt();
                return vs("div", {
                    className: "content"
                }, void 0, vs("p", {}, void 0, "Odaberite platno koje želite koristiti. \nSvako je platno jedinstveno i ima različite palete, vrijeme hlađenja i zahtjeve. \n Arhivi zatvorenih platna možete pristupiti ovdje:", " ", vs("span", {
                    role: "button",
                    tabIndex: 0,
                    className: "modallink",
                    onClick: ()=>a("ARCHIVE")
                }, void 0, "Arhiva")), Object.keys(e).sort(((t,n)=>t === window.ssv.dc ? -1 : n === window.ssv.dc ? 1 : (null != e[t].linkcd && (t = e[t].linkcd + .1),
                null != e[n].linkcd && (n = e[n].linkcd + .1),
                t - n))).map((i=>(!e[i].hid || t) && !e[i].ed && vs(ps, {
                    online: n[i],
                    canvasId: i,
                    canvas: e[i],
                    selCanvas: o
                }, i))), window.ssv?.backupurl && Object.keys(e).some((t=>e[t].ed)) && He.createElement(He.Fragment, null, vs("h3", {}, void 0, "Povučena platna (samo povijest)"), Object.keys(e).map((t=>e[t].ed && vs(ps, {
                    online: n[t],
                    canvasId: t,
                    canvas: e[t],
                    selCanvas: o
                }, t)))))
            }
              , gs = He.memo(ms);
            var ys, ws, bs, ks;
            function Ss(e, t, n, i) {
                ks || (ks = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: ks,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            var Es, Cs = n(9210), Ts = n(3935);
            function Is(e, t, n, i) {
                Es || (Es = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: Es,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            const xs = e=>{
                let {args: t, close: n} = e;
                const i = (0,
                Ue.v9)((e=>e.chat.channels))
                  , o = (0,
                Ue.v9)((e=>e.fetching.fetchingApi))
                  , r = (0,
                Ue.I0)()
                  , {name: a, uid: s, setChannel: l, addToInput: u} = t;
                return He.createElement(He.Fragment, null, Is("div", {
                    role: "button",
                    tabIndex: 0,
                    onClick: ()=>{
                        const e = `@[${(0,
                        k.lg)(a)}](${s})`;
                        u(e),
                        n()
                    }
                    ,
                    style: {
                        borderTop: "none"
                    }
                }, "ping", "Ping"), Is("div", {
                    role: "button",
                    tabIndex: 0,
                    onClick: ()=>{
                        const e = Object.keys(i);
                        for (let t = 0; t < e.length; t += 1) {
                            const o = e[t];
                            if (4 === i[o].length && i[o][3] === s)
                                return l(o),
                                void n()
                        }
                        o || r((0,
                        c.YB)({
                            userId: s
                        }, l)),
                        n()
                    }
                }, "dm", "DM"), Is("div", {
                    role: "button",
                    tabIndex: -1,
                    onClick: ()=>{
                        r((0,
                        c.Ox)(s, a, !0)),
                        n()
                    }
                }, "block", "Blokiraj"))
            }
            ;
            var Ns;
            function _s(e, t, n, i) {
                Ns || (Ns = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: Ns,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            const Os = e=>{
                let {args: t, close: n} = e;
                const i = (0,
                Ue.v9)((e=>e.chat.channels))
                  , o = (0,
                Ue.v9)((e=>e.chatRead.mute))
                  , {cid: a} = t
                  , s = (0,
                Ue.I0)()
                  , l = o.includes(a);
                return He.createElement(He.Fragment, null, _s("div", {
                    role: "button",
                    onClick: ()=>{
                        s(l ? (0,
                        r.wC)(a) : (0,
                        r.nb)(a))
                    }
                    ,
                    tabIndex: 0,
                    style: {
                        borderTop: "none"
                    }
                }, "mute", (l ? "✔" : "✘") + " Isključi zvuk"), 0 !== i[a][1] && _s("div", {
                    role: "button",
                    onClick: ()=>{
                        s((0,
                        c.K6)(a)),
                        n()
                    }
                    ,
                    tabIndex: 0
                }, "leave", "Zatvori"))
            }
            ;
            var Ps;
            function As(e, t, n, i) {
                Ps || (Ps = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: Ps,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            const Ls = {
                USER: He.memo(xs),
                CHANNEL: He.memo(Os)
            }
              , Rs = e=>{
                let {type: t, x: n, y: i, args: o, close: r, align: a} = e;
                const s = (0,
                He.useRef)(null);
                var l, c;
                if (l = [s],
                c = r,
                (0,
                He.useEffect)((()=>{
                    const e = l.some((e=>e.current)) ? l.map((e=>e.current)) : null;
                    if (null === e)
                        return;
                    const t = t=>{
                        e.every((e=>!e || !e.contains(t.target))) && c()
                    }
                      , n = ()=>{
                        c()
                    }
                    ;
                    return document.addEventListener("mousedown", t, {
                        capture: !0
                    }),
                    window.addEventListener("resize", n),
                    ()=>{
                        document.removeEventListener("mousedown", t, {
                            capture: !0
                        }),
                        window.removeEventListener("resize", n)
                    }
                }
                ), [l, c]),
                !t)
                    return null;
                const u = {};
                switch (a) {
                case "tr":
                    u.right = window.innerWidth - n,
                    u.top = i;
                    break;
                case "br":
                    u.right = window.innerWidth - n,
                    u.bottom = window.innerHeight - i;
                    break;
                case "bl":
                    u.left = n,
                    u.bottom = window.innerHeight - i;
                    break;
                default:
                    u.left = n,
                    u.top = i
                }
                const d = Ls[t];
                return Ts.createPortal(He.createElement("div", {
                    ref: s,
                    className: `contextmenu ${t}`,
                    style: u
                }, As(d, {
                    close: r,
                    args: o
                })), document.getElementById("app"))
            }
              , js = He.memo(Rs);
            var $s, Ds = n(3854), Ms = n(274);
            function zs(e, t, n, i) {
                $s || ($s = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: $s,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            const Hs = e=>{
                let {url: t, fill: n} = e
                  , i = (0,
                k._N)(t);
                return i = i.substring(i.lastIndexOf("/") + 1),
                zs("div", {
                    style: {
                        textAlign: "center",
                        height: n && "100%",
                        alignContent: n && "center"
                    }
                }, void 0, zs("iframe", {
                    style: {
                        borderRadius: 5,
                        height: 768,
                        width: 320
                    },
                    src: `https://www.tiktok.com/embed/v2/${i}`,
                    frameBorder: "0",
                    referrerPolicy: "no-referrer",
                    allow: "autoplay",
                    scrolling: "no",
                    sandbox: "allow-scripts allow-modals allow-forms allow-popups allow-same-origin allow-presentation",
                    allowFullScreen: !0,
                    title: "Embedded tiktok"
                }))
            }
              , Us = [He.memo(Hs), e=>e.includes("/video/"), e=>function(e) {
                let t = e.indexOf("/@");
                if (-1 === t)
                    return e;
                t += 1;
                let n = e.indexOf("/", t);
                return -1 === n && (n = e.length),
                e.substring(t, n)
            }(e), "/embico/tiktok.png"]
              , Ws = function(e, t) {
                const n = (0,
                He.useRef)();
                (0,
                He.useEffect)((()=>{
                    n.current = t
                }
                ), [t]),
                (0,
                He.useEffect)((()=>{
                    function t(t) {
                        t.source === e.current.contentWindow && n.current(t.data)
                    }
                    return window.addEventListener("message", t, !1),
                    ()=>window.removeEventListener("message", t)
                }
                ), [e])
            };
            var Vs;
            function Gs(e, t, n, i) {
                Vs || (Vs = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: Vs,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            const Fs = "t.me/"
              , Bs = e=>{
                let {url: t, fill: n} = e;
                const [i,o] = (0,
                He.useState)(200)
                  , [r,a] = (0,
                He.useState)("100%")
                  , s = (0,
                He.useRef)(null);
                Ws(s, (e=>{
                    try {
                        const t = JSON.parse(e);
                        "resize" === t.event && (t.width && a(t.width),
                        t.height && o(t.height))
                    } catch {
                        console.error("Could not read postMessage from frame", e)
                    }
                }
                ));
                let l = (0,
                k._N)(t);
                l = l.substring(l.indexOf(Fs) + 5);
                const c = l.indexOf("/", l.indexOf("/") + 1);
                -1 !== c && (l = l.substring(0, c));
                const u = He.createElement("iframe", {
                    ref: s,
                    style: {
                        width: r,
                        minWidth: "100%",
                        height: i
                    },
                    src: `https://t.me/${l}?embed=1`,
                    frameBorder: "0",
                    referrerPolicy: "no-referrer",
                    allow: "autoplay",
                    scrolling: "no",
                    sandbox: "allow-scripts allow-modals allow-forms allow-popups allow-same-origin allow-presentation",
                    allowFullScreen: !0,
                    title: "Embedded telegram"
                });
                return n ? Gs("div", {
                    style: {
                        height: n && "100%",
                        alignContent: n && "center"
                    }
                }, void 0, u) : u
            }
              , Zs = [He.memo(Bs), e=>{
                let t = e.indexOf(Fs);
                return !(-1 === t || t + 5 + 1 >= e.length || (t = e.indexOf("/", t + 5 + 1),
                -1 === t || t + 2 >= e.length))
            }
            , e=>{
                let t = e.substring(e.indexOf(Fs) + 5);
                return t = t.substring(0, t.indexOf("/")),
                t
            }
            , "/embico/telegram.png"];
            var Ks;
            function Ys(e, t, n, i) {
                Ks || (Ks = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: Ks,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            const qs = "/status/"
              , Xs = e=>{
                let {url: t, fill: n} = e;
                const [i,o] = (0,
                He.useState)(200)
                  , [r,a] = (0,
                He.useState)(500)
                  , s = (0,
                He.useRef)(null);
                Ws(s, (e=>{
                    try {
                        "twttr.private.resize" === e["twttr.embed"]?.method && e["twttr.embed"].params?.[0]?.height && (a(e["twttr.embed"].params[0].width),
                        o(e["twttr.embed"].params[0].height))
                    } catch {
                        console.error("Could not read postMessage from frame", e)
                    }
                }
                ));
                let l = (0,
                k._N)(t);
                return l = l.substring(l.indexOf(qs) + 8),
                -1 !== l.indexOf("/") && (l = l.substring(l.indexOf("/"))),
                Ys("div", {
                    style: {
                        textAlign: "center",
                        height: n && "100%",
                        alignContent: n && "center"
                    }
                }, void 0, He.createElement("iframe", {
                    ref: s,
                    style: {
                        width: r,
                        height: i,
                        borderRadius: 12
                    },
                    src: `https://platform.twitter.com/embed/Tweet.html?dnt=true&embedId=twitter-widget-&frame=false&hideCard=false&hideThread=true&id=${l}&theme=light`,
                    frameBorder: "0",
                    referrerPolicy: "no-referrer",
                    allow: "autoplay; picture-in-picture",
                    scrolling: "no",
                    sandbox: "allow-scripts allow-modals allow-forms allow-popups allow-same-origin allow-presentation",
                    allowFullScreen: !0,
                    title: "Embedded twitter"
                }))
            }
              , Qs = [He.memo(Xs), e=>{
                const t = e.indexOf(qs);
                return !(-1 === t || t + 8 + 1 >= e.length)
            }
            , e=>{
                let t = e.substring(0, e.indexOf(qs));
                return t = t.substring(t.lastIndexOf("/") + 1),
                t
            }
            , "/embico/twitter.png"];
            var Js;
            function el(e, t, n, i) {
                Js || (Js = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: Js,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            const tl = e=>{
                let {url: t, fill: n, maxHeight: i, aspectRatio: o=56.35} = e;
                const r = el("iframe", {
                    style: {
                        position: "absolute",
                        width: "100%",
                        height: "100%"
                    },
                    src: t,
                    frameBorder: "0",
                    referrerPolicy: "no-referrer",
                    allow: "autoplay; picture-in-picture; encrypted-media",
                    scrolling: "no",
                    sandbox: "allow-scripts allow-modals allow-forms allow-popups allow-same-origin allow-presentation",
                    allowFullScreen: !0,
                    title: "Embedded Videosite"
                });
                return n ? r : el("div", {
                    style: {
                        position: "relative",
                        height: 0,
                        width: "100%",
                        paddingBottom: i ? `min(${o}%, ${i}px)` : `${o}%`,
                        maxWidth: i && 100 * i / o,
                        left: i && "50%",
                        transform: i && "translateX(-50%)"
                    }
                }, void 0, r)
            }
              , nl = [He.memo(tl), ()=>!0, null, "/embico/direct.png"];
            var il;
            function ol(e, t, n, i) {
                il || (il = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: il,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            function rl(e) {
                let t;
                t = e.includes("youtube") ? e.includes("/shorts/") ? "/shorts/" : "v=" : "e/";
                let n, i = e.indexOf(t);
                if (-1 === i)
                    return null;
                for (i += t.length,
                n = i; n < e.length && !["&", "?", "/"].includes(e[n]); n += 1)
                    ;
                return e.substring(i, n)
            }
            const al = e=>{
                let {url: t, fill: n, maxHeight: i} = e;
                const o = rl(t);
                return o ? ol(nl[0], {
                    url: `https://www.youtube.com/embed/${o}?autoplay=1`,
                    maxHeight: i,
                    fill: n,
                    aspectRatio: t.includes("/shorts/") ? 177.77 : void 0
                }) : null
            }
              , sl = [He.memo(al), rl, rl, "/embico/youtube.png"];
            var ll;
            function cl(e, t, n, i) {
                ll || (ll = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: ll,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            const ul = ["webm", "mp4"]
              , dl = ["jpg", "jpeg", "png", "webp", "gif"]
              , hl = e=>{
                let {url: t, fill: n, maxHeight: i, type: o} = e;
                const r = (0,
                k.r6)(t);
                return "video" === o || ul.includes(r) ? cl("div", {
                    style: {
                        textAlign: "center",
                        overflow: "hidden",
                        height: n && "100%"
                    }
                }, void 0, cl("video", {
                    style: {
                        maxWidth: "100%",
                        maxHeight: i || "100%",
                        height: n && "100%",
                        width: n && "100%"
                    },
                    controls: !0,
                    autoPlay: !0,
                    src: t,
                    referrerPolicy: "no-referrer"
                })) : cl("div", {
                    style: {
                        textAlign: "center",
                        overflow: "hidden",
                        height: n && "100%",
                        alignContent: n && "center"
                    }
                }, void 0, cl("img", {
                    alt: `${t}`,
                    src: t,
                    style: {
                        maxWidth: "100%",
                        maxHeight: i || "100%"
                    },
                    referrerPolicy: "no-referrer"
                }))
            }
              , pl = [He.memo(hl), e=>{
                const t = (0,
                k.r6)(e);
                return ul.includes(t) || dl.includes(t)
            }
            , null, "/embico/direct.png"];
            var fl;
            function vl(e, t, n, i) {
                fl || (fl = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: fl,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            const ml = e=>{
                let {url: t, fill: n, maxHeight: i} = e;
                const o = t.substring(0, t.indexOf("?type="))
                  , r = t.includes("?type=video") ? "video" : "image";
                return vl(pl[0], {
                    url: o,
                    fill: n,
                    type: r,
                    maxHeight: i
                })
            }
              , gl = [He.memo(ml), e=>e.includes("?type=video") || e.includes("?type=image"), null, "/embico/matrix.png"];
            var yl;
            function wl(e, t, n, i) {
                yl || (yl = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: yl,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            function bl(e) {
                const t = e.lastIndexOf(":");
                return -1 !== t ? e.substring(0, t) : e
            }
            const kl = "/@"
              , Sl = e=>{
                let t, {url: n, fill: i, maxHeight: o} = e, r = n.indexOf(kl);
                return -1 !== r || (r = n.indexOf("//"),
                -1 === r && (r = 0)),
                t = n.substring(n.indexOf("/", r + 2) + 1),
                t = bl((0,
                k._N)(t)),
                wl(nl[0], {
                    url: `https://odysee.com/$/embed/${t}`,
                    fill: i,
                    maxHeight: o
                })
            }
              , El = [He.memo(Sl), e=>{
                const t = (0,
                k._N)(e);
                let n = t.indexOf(kl);
                return -1 !== n ? !(-1 === n || n + 4 >= t.length || (n = t.indexOf("/", n + 2),
                -1 === n || n + 2 >= t.length)) : (n = t.indexOf("//"),
                -1 === n && (n = 0),
                n = t.indexOf("/", n + 2),
                !(-1 === n || n + 2 >= t.length))
            }
            , e=>{
                let t = (0,
                k._N)(e)
                  , n = t.indexOf(kl);
                if (-1 !== n) {
                    t = t.substring(n + 2);
                    let e = t.substring(0, t.indexOf("/"));
                    return t = bl(t.substring(e.length + 1)),
                    e = bl(e),
                    `${e} | ${t}`
                }
                return n = t.indexOf("//"),
                -1 === n && (n = 0),
                t = t.substring(t.indexOf("/", n + 2) + 1),
                t = bl((0,
                k._N)(t)),
                t
            }
            , "/embico/odysee.png"];
            var Cl;
            function Tl(e, t, n, i) {
                Cl || (Cl = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: Cl,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            function Il(e) {
                let t, n = e.indexOf("/video/");
                if (-1 === n)
                    return null;
                for (n += 7,
                t = n; t < e.length && !["&", "?", "/"].includes(e[t]); t += 1)
                    ;
                return e.substring(n, t)
            }
            const xl = e=>{
                let {url: t, fill: n, maxHeight: i} = e;
                const o = Il(t);
                return o ? Tl(nl[0], {
                    url: `https://www.bitchute.com/embed/${o}`,
                    maxHeight: i,
                    fill: n
                }) : null
            }
              , Nl = [He.memo(xl), Il, Il, "/embico/bitchute.png"];
            var _l;
            function Ol(e, t, n, i) {
                _l || (_l = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: _l,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            function Pl(e) {
                let t;
                t = e.includes("play.afreecatv") ? ".com/" : "/player/";
                let n, i = e.indexOf(t);
                if (-1 === i)
                    return null;
                for (i += t.length,
                n = i; n < e.length && !["&", "?", "/"].includes(e[n]); n += 1)
                    ;
                return e.substring(i, n)
            }
            const Al = e=>{
                let {url: t, fill: n, maxHeight: i} = e;
                const o = Pl(t);
                if (!o)
                    return null;
                let r;
                return r = t.includes("vod.afreecatv") ? `https://vod.afreecatv.com/player/${o}/embed?autoPlay=true&showChat=true` : `https://play.afreecatv.com/${o}/embed`,
                Ol(nl[0], {
                    url: r,
                    maxHeight: i,
                    fill: n
                })
            }
              , Ll = [He.memo(Al), Pl, Pl, "/embico/afreecatv.png"];
            var Rl;
            function jl(e, t, n, i) {
                Rl || (Rl = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: Rl,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            function $l(e) {
                let t, n = e.indexOf("/videos/");
                for (-1 !== n ? n += 8 : n = e.indexOf(".tv/") + 4,
                t = n; t < e.length && !["&", "?", "/"].includes(e[t]); t += 1)
                    ;
                return e.substring(n, t)
            }
            const Dl = e=>{
                let {url: t, fill: n, maxHeight: i} = e;
                const o = $l(t);
                if (!o)
                    return null;
                let r = `https://player.twitch.tv/?autoplay=true&parent=${window.location.hostname}`;
                return t.includes("/videos/") ? r += `&video=${o}` : r += `&channel=${o}`,
                jl(nl[0], {
                    url: r,
                    maxHeight: i,
                    fill: n
                })
            }
              , Ml = {
                tiktok: Us,
                youtube: sl,
                "youtu.be": sl,
                bitchute: Nl,
                "matrix.pixelplanet.fun": gl,
                "i.4cdn.org": pl,
                "i.imgur": pl,
                "litter.catbox.moe": pl,
                "files.catbox.moe": pl,
                "i.redd.it": pl,
                "media.discordapp.net": pl,
                "media.consumeproduct.win": pl,
                "cdn.discord.com": pl,
                "t.me": Zs,
                twitter: Qs,
                odysee: El,
                "vod.afreecatv": Ll,
                "play.afreecatv": Ll,
                "twitch.tv": [He.memo(Dl), $l, $l, "/embico/twitchtv.png"]
            };
            var zl, Hl;
            function Ul(e, t, n, i) {
                Hl || (Hl = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: Hl,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            const Wl = ["odysee", "twitter", "matrix.pixelplanet.fun", "youtube", "youtu.be", "bitchute", "tiktok", "t.me", "play.afreecatv", "vod.afreecatv", "twitch.tv"]
              , Vl = e=>{
                let {href: t, title: n, refEmbed: i} = e;
                const [o,r] = (0,
                He.useState)(!1)
                  , a = (0,
                k.IU)(t)
                  , s = rt();
                if (a === window.location.hostname && t.includes("/#")) {
                    const e = t.substring(t.indexOf("/#") + 1);
                    return Ie() && window.opener && !window.opener.closed ? Ul("a", {
                        href: `/${e}`,
                        target: "main"
                    }, void 0, n || e) : Ul("a", {
                        href: `/${e}`
                    }, void 0, n || e)
                }
                const l = Ml[a]
                  , c = l && l[1](t)
                  , u = l && l[0];
                let d;
                return d = n && Wl.includes(a) ? n : c && l[2] ? l[2](t) : t,
                He.createElement(He.Fragment, null, Ul("a", {
                    href: t,
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, void 0, d), c && Ul("span", {
                    className: "embbtn"
                }, void 0, " ", l[3] && Ul("img", {
                    style: {
                        width: "1em",
                        height: "1em",
                        verticalAlign: "middle"
                    },
                    src: l[3],
                    alt: `${a}-icon`
                }), Ul("span", {
                    onClick: e=>{
                        e.stopPropagation(),
                        s("PLAYER", {
                            reuse: !0,
                            target: "blank",
                            args: {
                                uri: t
                            }
                        })
                    }
                    ,
                    title: "Otvori u skočnom prozoru"
                }, void 0, zl || (zl = Ul(Ms._Pd, {
                    className: "ebex"
                }))), Ul("span", {
                    onClick: ()=>r(!o)
                }, void 0, o ? Ul(Ds.TQH, {
                    className: "ebcl",
                    title: "Sakrij Embed"
                }) : Ul(Ds.uwt, {
                    className: "ebex",
                    title: "Pokaži Embedded"
                }))), o && c && (i && i.current ? Ts.createPortal(Ul(u, {
                    url: t,
                    maxHeight: 300
                }), i.current) : Ul(u, {
                    url: t
                })))
            }
              , Gl = He.memo(Vl);
            var Fl;
            function Bl(e, t, n, i) {
                Fl || (Fl = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: Fl,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            const Zl = e=>{
                let {name: t, uid: n} = e;
                const i = n && n.trim()
                  , o = (0,
                Ue.v9)((e=>-1 !== e.gui.style.indexOf("dark")));
                return Bl("span", {
                    className: i == (0,
                    Ue.v9)((e=>e.user.id)) ? "ping" : "mention",
                    style: {
                        color: (0,
                        k.TP)((0,
                        k.Z)(t), o)
                    }
                }, void 0, `@${t}`)
            }
              , Kl = He.memo(Zl);
            var Yl;
            function ql(e, t, n, i) {
                Yl || (Yl = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: Yl,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            const Xl = He.memo((e=>{
                let {pArray: t, refEmbed: n} = e;
                return t.map((e=>{
                    if (!Array.isArray(e))
                        return e;
                    const t = e[0];
                    switch (t) {
                    case "c":
                        return ql("code", {}, void 0, e[1]);
                    case "*":
                        return ql("strong", {}, void 0, ql(Xl, {
                            pArray: e[1]
                        }));
                    case "~":
                        return ql("s", {}, void 0, ql(Xl, {
                            pArray: e[1]
                        }));
                    case "+":
                        return ql("em", {}, void 0, ql(Xl, {
                            pArray: e[1]
                        }));
                    case "_":
                        return ql("u", {}, void 0, ql(Xl, {
                            pArray: e[1]
                        }));
                    case "img":
                    case "l":
                        return ql(Gl, {
                            refEmbed: n,
                            href: e[2],
                            title: e[1]
                        });
                    case "@":
                        return ql(Kl, {
                            uid: e[2],
                            name: e[1]
                        });
                    default:
                        return t
                    }
                }
                ))
            }
            ));
            class Ql {
                constructor(e, t) {
                    this.txt = e,
                    this.iter = t || 0
                }
                done() {
                    return this.iter >= this.txt.length
                }
                moveForward() {
                    return this.iter += 1,
                    this.iter < this.txt.length
                }
                setIter(e) {
                    this.iter = e
                }
                getChar() {
                    return this.txt[this.iter]
                }
                slice(e, t) {
                    return this.txt.slice(e, t || this.iter)
                }
                has(e) {
                    return this.txt.startsWith(e, this.iter)
                }
                move(e) {
                    return this.iter += e,
                    this.iter < this.txt.length
                }
                skipSpaces() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    for (; this.iter < this.txt.length; this.iter += 1) {
                        const t = this.txt[this.iter];
                        if (" " !== t && "\t" !== t && (!e || "\n" !== t))
                            break
                    }
                }
                countRepeatingCharacters() {
                    const e = this.getChar();
                    let t = this.iter + 1;
                    for (; t < this.txt.length && this.txt[t] === e; t += 1)
                        ;
                    return t - this.iter
                }
                moveToNextLine() {
                    const e = this.txt.indexOf("\n", this.iter);
                    this.iter = -1 === e ? this.txt.length : e + 1
                }
                getLine() {
                    const e = this.iter;
                    return this.moveToNextLine(),
                    this.txt.slice(e, this.iter)
                }
                getIndent(e) {
                    let t = 0;
                    for (; this.iter < this.txt.length; ) {
                        const n = this.getChar();
                        if ("\t" === n)
                            t += e;
                        else {
                            if (" " !== n)
                                break;
                            t += 1
                        }
                        this.iter += 1
                    }
                    return t
                }
                goToCharInLine(e) {
                    let {iter: t} = this;
                    for (; t < this.txt.length && "\n" !== this.txt[t] && this.txt[t] !== e; t += 1)
                        ;
                    return this.txt[t] === e && (this.iter = t,
                    t)
                }
                static isWhiteSpace(e) {
                    return " " === e || "\t" === e || "\n" === e
                }
                checkIfEnclosure(e) {
                    let t = this.iter + 1
                      , n = t;
                    const i = [];
                    for (; "]" !== this.txt[n]; ) {
                        const e = this.txt[n];
                        if ("\\" !== e) {
                            if (n >= this.txt.length || "\n" === e)
                                return null;
                            n += 1
                        } else
                            i.push(n),
                            n += 2
                    }
                    let o = n + 1;
                    if ("(" !== this.txt[o])
                        return null;
                    o += 1;
                    let r = o
                      , a = null;
                    for (; ")" !== this.txt[r]; ) {
                        const t = this.txt[r];
                        if (r >= this.txt.length || "\n" === t || "[" === t || "(" === t)
                            return null;
                        if (e && ":" === t) {
                            const e = this.iter;
                            if (this.iter = r,
                            a = this.checkIfLink(!0),
                            r = this.iter,
                            this.iter = e,
                            null === a)
                                return null
                        } else
                            r += 1
                    }
                    if (r < o + 1 || !a && e)
                        return null;
                    e || (a = this.txt.slice(o, r));
                    let s = "";
                    for (let e = 0; e < i.length; e += 1) {
                        const n = i[e];
                        s += this.txt.slice(t, n),
                        t = n + 1
                    }
                    return t < n && (s += this.txt.slice(t, n)),
                    this.iter = r,
                    [s, a]
                }
                checkIfLink() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                      , t = this.iter;
                    if (!this.txt.startsWith("://", t) || t < 3)
                        return null;
                    let n = t - 1;
                    for (; n >= 0 && !Ql.isWhiteSpace(this.txt[n]) && "(" !== this.txt[n]; n -= 1)
                        ;
                    for (n += 1,
                    t += 3; t < this.txt.length && !Ql.isWhiteSpace(this.txt[t]) && (!e || ")" !== this.txt[t]); t += 1)
                        ;
                    if (t < this.iter + 4)
                        return null;
                    let i = this.txt.slice(n, t);
                    const o = i.indexOf("http");
                    return -1 !== o && 0 !== o && (n += o,
                    i = this.txt.slice(n, t)),
                    this.iter = t,
                    i
                }
                checkIfCoords() {
                    let e = this.iter + 1;
                    for (; e < this.txt.length; ) {
                        const t = this.txt[e];
                        if ("," === t)
                            break;
                        if (Ql.isWhiteSpace(t) || !Number.isNaN(Number(t)))
                            return null;
                        e += 1
                    }
                    if (e >= this.txt.length || e - this.iter > 12 || e === this.iter)
                        return null;
                    e += 1;
                    const t = this.txt[e];
                    if ("-" !== t && Number.isNaN(t))
                        return null;
                    e += 1;
                    let n = 1;
                    for (; e < this.txt.length && !Ql.isWhiteSpace(this.txt[e]); ) {
                        const t = this.txt[e];
                        if ("," === t)
                            n += 1;
                        else if ("-" !== t && Number.isNaN(Number(t)))
                            return null;
                        e += 1
                    }
                    if (n < 2 || n > 3 || "," === this.txt[e - 1])
                        return null;
                    const i = this.txt.slice(this.iter, e);
                    return this.iter = e,
                    i
                }
            }
            let Jl = ()=>{}
            ;
            const ec = ["*", "~", "+", "_"];
            function tc(e, t, n) {
                const i = [];
                let o = e.iter
                  , r = null;
                for (; !e.done() && (r = e.getChar(),
                r !== n); ) {
                    if ("\n" === r) {
                        e.moveForward();
                        break
                    }
                    if ("\\" === r)
                        o !== e.iter && i.push(e.slice(o)),
                        o = e.iter + 1,
                        e.moveForward();
                    else if ("#" === r) {
                        const t = e.iter
                          , n = e.checkIfCoords();
                        n && (o !== t && i.push(e.slice(o, t)),
                        i.push(["l", null, `${window.location.origin}/${n}`]),
                        o = e.iter)
                    } else if (ec.includes(r)) {
                        const n = e.iter;
                        e.moveForward();
                        const a = tc(e, t, r);
                        e.getChar() === r ? (o !== n && i.push(e.slice(o, n)),
                        i.push([r, a]),
                        o = e.iter + 1) : e.setIter(n)
                    } else if ("`" === r) {
                        const t = e.iter;
                        e.moveForward(),
                        e.goToCharInLine("`") && (o !== t && i.push(e.slice(o, t)),
                        i.push(["c", e.slice(t + 1)]),
                        o = e.iter + 1)
                    } else if (":" === r) {
                        const t = e.checkIfLink();
                        if (null !== t) {
                            const n = e.iter - t.length;
                            o < n && i.push(e.slice(o, n)),
                            i.push(["l", null, t]),
                            o = e.iter;
                            continue
                        }
                    } else if ("[" === r) {
                        let t = e.iter
                          , n = null;
                        e.iter > 0 && (e.move(-1),
                        n = e.getChar(),
                        e.setIter(t));
                        let r = "l"
                          , a = !0;
                        "!" === n ? (r = "img",
                        t -= 1) : "@" === n && (a = !1,
                        r = "@",
                        t -= 1);
                        const s = e.checkIfEnclosure(a);
                        null !== s && (o < t && i.push(e.slice(o, t)),
                        i.push([r, s[0], s[1]]),
                        o = e.iter + 1)
                    }
                    e.moveForward()
                }
                return o !== e.iter && i.push(e.slice(o)),
                i
            }
            function nc(e) {
                e.skipSpaces(!1),
                "\n" === e.getChar() && e.moveForward();
                const t = e.iter;
                for (; !e.done(); ) {
                    if (e.skipSpaces(!0),
                    e.has("```")) {
                        const n = ["cb", e.slice(t)];
                        return e.move(3),
                        n
                    }
                    e.moveToNextLine()
                }
                const n = e.slice(t);
                return e.move(3),
                ["cb", n]
            }
            function ic(e, t) {
                const n = e.getChar();
                let i = "";
                for (; e.getChar() === n && e.moveForward(); )
                    i += e.getLine();
                const o = new Ql(i);
                return [n, Jl(o, t, 0)]
            }
            function oc(e, t, n, i) {
                const o = [];
                let r = []
                  , a = 0;
                for (; !e.done(); ) {
                    const s = e.iter;
                    a += 1;
                    const l = e.getIndent(t.tabWidth);
                    if (l < i && a > 1) {
                        e.setIter(s);
                        break
                    }
                    const c = e.getChar();
                    if (!i && "#" === c)
                        break;
                    let u = !1
                      , d = !1;
                    if ("-" === c && (u = !0,
                    e.moveForward()),
                    !Number.isNaN(parseInt(c, 10))) {
                        let t = e.iter + 1;
                        for (; !Number.isNaN(parseInt(e.txt[t], 10)); t += 1)
                            ;
                        const n = e.txt[t];
                        "." !== n && ")" !== n || (d = !0,
                        e.setIter(t + 1))
                    }
                    let h = !1
                      , p = null;
                    if (u || d) {
                        let i;
                        r.length && (o.push(["p", r]),
                        r = []),
                        i = oc(e, t, n, l + 1),
                        i = ["-", i];
                        const a = u ? "ul" : "ol";
                        o.length && o[o.length - 1][0] === a ? o[o.length - 1][1].push(i) : o.push([a, [i]])
                    } else if (">" === c || "<" === c)
                        h = !0,
                        p = ic(e, t);
                    else if (e.has("```"))
                        h = !0,
                        e.move(3),
                        p = nc(e);
                    else {
                        if (i || "\n" !== c) {
                            const n = tc(e, t);
                            n && (r = r.concat(n));
                            continue
                        }
                        if (e.moveForward(),
                        e.skipSpaces(!1),
                        "\n" === e.getChar()) {
                            if (n && t.newlineBreaksArticles)
                                break;
                            e.moveForward()
                        }
                        h = !0
                    }
                    h && r.length && (o.push(["p", r]),
                    r = []),
                    p && o.push(p)
                }
                return r.length && o.push(["p", r]),
                o
            }
            var rc;
            function ac(e, t, n, i) {
                rc || (rc = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: rc,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            function sc(e) {
                let {name: t, uid: n, country: i, msg: o, ts: r, openCm: a} = e;
                const s = (0,
                Ue.v9)(Fn.s)
                  , l = (0,
                He.useRef)()
                  , c = "info" === t
                  , u = "event" === t;
                let d = "msg";
                c ? d += " info" : u ? d += " event" : ">" === o.charAt(0) ? d += " greentext" : "<" === o.charAt(0) && (d += " redtext");
                const h = function(e, t) {
                    const n = function(e) {
                        const t = {};
                        return t.parseLinks = e && e.parseLinks || !1,
                        t.tabWidth = e && e.tabWidth || 4,
                        t.newlineBreaksArticles = e && e.newlineBreaksArticles || !0,
                        t
                    }(void 0);
                    return tc(new Ql(e), n)
                }(o);
                return He.createElement("li", {
                    className: "chatmsg",
                    ref: l
                }, ac("div", {
                    className: "msgcont"
                }, void 0, ac("span", {
                    className: d
                }, void 0, !c && !u && ac(He.Fragment, {}, "name", ac("img", {
                    className: "chatflag",
                    alt: "",
                    title: i,
                    src: `/cf/${i}.gif`
                }), ac("span", {
                    className: "chatname",
                    style: {
                        color: (0,
                        k.TP)((0,
                        k.Z)(t), s),
                        cursor: "pointer"
                    },
                    role: "button",
                    title: t,
                    tabIndex: -1,
                    onClick: e=>{
                        a(e.clientX, e.clientY, t, n)
                    }
                }, void 0, t), ": "), ac(Xl, {
                    refEmbed: l,
                    pArray: h
                })), ac("span", {
                    className: "chatts"
                }, void 0, (0,
                k.tF)(r))))
            }
            Jl = (e,t,n)=>{
                let i = [];
                for (; !e.done(); ) {
                    const o = oc(e, t, n, 0);
                    if (i = i.concat(o),
                    "#" !== e.getChar())
                        break;
                    {
                        let o = e.countRepeatingCharacters();
                        if (o <= n || 6 === n)
                            break;
                        {
                            e.move(o);
                            const n = e.getLine();
                            o = Math.min(o, 6);
                            const r = Jl(e, t, o);
                            i.push(["a", o, n, r])
                        }
                    }
                }
                return i
            }
            ;
            const lc = He.memo(sc);
            var cc, uc, dc, hc, pc;
            function fc(e, t, n, i) {
                pc || (pc = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: pc,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            const vc = e=>{
                let {setChatChannel: t, chatChannel: n} = e;
                const [i,o] = (0,
                He.useState)(!1)
                  , [r,a] = (0,
                He.useState)([])
                  , [s,l] = (0,
                He.useState)(0)
                  , [c,u] = (0,
                He.useState)(0)
                  , [d,h] = (0,
                He.useState)(!1)
                  , [p,f] = (0,
                He.useState)("...")
                  , [v,m] = (0,
                He.useState)(!1)
                  , g = (0,
                He.useRef)(null)
                  , y = (0,
                He.useRef)(null)
                  , w = (0,
                Ue.v9)((e=>e.chatRead.unread))
                  , b = (0,
                Ue.v9)((e=>e.chatRead.mute))
                  , k = (0,
                Ue.v9)((e=>e.chat.channels))
                  , S = (0,
                Ue.v9)((e=>e.gui.chatNotify));
                return (0,
                He.useEffect)((()=>{
                    u(y.current.clientHeight)
                }
                ), [y]),
                function(e, t, n) {
                    const i = (0,
                    He.useCallback)((t=>{
                        e.every((e=>!e.current || !e.current.contains(t.target))) && n()
                    }
                    ), [n, e])
                      , o = (0,
                    He.useCallback)((()=>{
                        n()
                    }
                    ), [n]);
                    (0,
                    He.useLayoutEffect)((()=>{
                        t ? (document.addEventListener("mousedown", i, {
                            capture: !0
                        }),
                        window.addEventListener("resize", o)) : (document.removeEventListener("mousedown", i, {
                            capture: !0
                        }),
                        window.removeEventListener("resize", o))
                    }
                    ), [t, i, o])
                }([g], i, (0,
                He.useCallback)((()=>o(!1)), [])),
                (0,
                He.useEffect)((()=>{
                    if (i && k[n]) {
                        const e = 1 === k[n][1] ? 1 : 0;
                        l(e)
                    }
                }
                ), [i, k, n]),
                (0,
                He.useEffect)((()=>{
                    const e = Object.keys(k)
                      , t = [];
                    let n = 0;
                    for (; n < e.length; ) {
                        const i = e[n]
                          , o = w[i] && !b.includes(i);
                        t.push([i, o, ...k[i]]),
                        !d && 0 !== k[i][1] && o && h(!0),
                        n += 1
                    }
                    t.sort(((e,t)=>0 === e[3] || 0 === t[3] ? 0 : e[4] > t[4] ? -1 : t[4] > e[4] ? 1 : 0)),
                    t.sort(((e,t)=>0 === e[3] || 0 === t[3] ? 0 : e[1] && !t[1] ? -1 : t[1] && !e[1] ? 1 : 0)),
                    a(t),
                    n === e.length && h(!1)
                }
                ), [k, w, b, d]),
                (0,
                He.useEffect)((()=>{
                    const e = Object.keys(k);
                    for (let t = 0; t < e.length; t += 1)
                        if (1 === k[e[t]][1])
                            return void m(!0);
                    m(!1)
                }
                ), [k]),
                (0,
                He.useEffect)((()=>{
                    k[n] && f(k[n][0])
                }
                ), [n, k]),
                fc("div", {
                    style: {
                        position: "relative"
                    }
                }, void 0, He.createElement("div", {
                    ref: y,
                    key: "expbtn",
                    role: "button",
                    tabIndex: -1,
                    onClick: ()=>o(!0),
                    className: "channelbtn" + (i ? " selected" : "")
                }, d && S && !i && fc("div", {
                    style: {
                        top: -4
                    },
                    className: "chnunread"
                }, void 0, "⦿"), p), i && He.createElement("div", {
                    ref: g,
                    key: "dropdown",
                    style: {
                        position: "absolute",
                        bottom: c,
                        right: 9
                    },
                    className: "channeldd"
                }, fc("div", {
                    className: "chntop"
                }, void 0, fc("span", {
                    style: {
                        borderLeft: "none"
                    },
                    className: "chntype" + (0 === s ? " selected" : ""),
                    onClick: ()=>l(0),
                    role: "button",
                    tabIndex: -1
                }, void 0, cc || (cc = fc(bt.Fmx, {}))), v && fc("span", {
                    className: "chntype" + (1 === s ? " selected" : ""),
                    onClick: ()=>l(1),
                    role: "button",
                    tabIndex: -1
                }, void 0, d && S && 1 !== s && (uc || (uc = fc("div", {
                    className: "chnunread"
                }, void 0, "⦿"))), dc || (dc = fc(Xe.wN, {})))), fc("div", {
                    className: "channeldds"
                }, void 0, r.filter((e=>{
                    const t = e[3];
                    return 1 === s && 1 === t || 0 === s && 1 !== t
                }
                )).map((e=>{
                    const [i,o,r] = e;
                    return fc("div", {
                        onClick: ()=>t(i),
                        className: "chn" + (i === n ? " selected" : ""),
                        role: "button",
                        tabIndex: -1
                    }, i, o && S ? hc || (hc = fc("div", {
                        className: "chnunread"
                    }, void 0, "⦿")) : null, r)
                }
                )))))
            }
              , mc = He.memo(vc);
            var gc;
            function yc(e, t, n, i) {
                gc || (gc = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: gc,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            var wc;
            function bc(e, t, n, i) {
                wc || (wc = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: wc,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            const kc = ()=>{
                const {args: {uri: e}} = (0,
                He.useContext)(it)
                  , t = (0,
                k.IU)(e)
                  , n = Ml[t];
                return n?.[1](e) ? bc("div", {
                    style: {
                        position: "absolute",
                        inset: 0,
                        backgroundColor: "#270f0f",
                        overflow: "auto"
                    }
                }, void 0, bc(n[0], {
                    url: e,
                    fill: !0
                })) : bc("p", {}, void 0, "Ovaj link nije podržan od strane našeg Media Player-a")
            }
              , Sc = He.memo(kc);
            var Ec, Cc, Tc;
            function Ic(e, t, n, i) {
                Tc || (Tc = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: Tc,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            const xc = {
                display: "inline-block",
                width: "100%",
                maxWidth: "35em"
            }
              , Nc = ()=>{
                const [e,t] = (0,
                He.useState)("")
                  , [n,i] = (0,
                He.useState)(!1)
                  , [o,r] = (0,
                He.useState)(!1)
                  , [a,s] = (0,
                He.useState)([])
                  , l = rt();
                return o ? Ic("div", {}, void 0, Ic("p", {
                    className: "modalmessage"
                }, void 0, "Poslao sam vam e-poštu s uputama za ponovno postavljanje lozinke."), Ic("button", {
                    type: "button",
                    onClick: ()=>l("USERAREA")
                }, void 0, "Back")) : Ic("div", {
                    className: "content"
                }, void 0, Ic("p", {}, void 0, "Unesite svoju mail adresu i mi ćemo vam poslati novu lozinku:"), Ec || (Ec = Ic("br", {})), Ic("form", {
                    onSubmit: async t=>{
                        if (t.preventDefault(),
                        n)
                            return;
                        const o = function(e) {
                            const t = []
                              , n = Sr(e);
                            return n && t.push(n),
                            t
                        }(e);
                        if (o.length > 0)
                            return void s(o);
                        i(!0);
                        const {errors: a} = await (0,
                        G.hH)(e);
                        i(!1),
                        a ? s(a) : r(!0)
                    }
                }, void 0, a.map((e=>Ic("p", {}, e, Ic("span", {}, void 0, "Greška"), ": ", e))), Ic("input", {
                    style: xc,
                    value: e,
                    onChange: e=>t(e.target.value),
                    type: "text",
                    placeholder: "Email"
                }), Cc || (Cc = Ic("br", {})), Ic("button", {
                    type: "submit"
                }, void 0, n ? "..." : "Podnesi"), Ic("button", {
                    type: "button",
                    onClick: ()=>l("USERAREA")
                }, void 0, "Otkaži")))
            }
              , _c = {
                HELP: [()=>{
                    const e = Vo("kbd", {}, void 0, "G")
                      , t = Vo("kbd", {}, void 0, "X")
                      , n = Vo("kbd", {}, void 0, "H")
                      , i = Vo("kbd", {}, void 0, "R")
                      , o = Vo("kbd", {}, void 0, "Q")
                      , a = Vo("kbd", {}, void 0, "E")
                      , s = Vo("kbd", {}, void 0, "W")
                      , l = Vo("kbd", {}, void 0, "A")
                      , u = Vo("kbd", {}, void 0, "S")
                      , d = Vo("kbd", {}, void 0, "D")
                      , h = Ji || (Ji = Vo("kbd", {}, void 0, "↑"))
                      , p = eo || (eo = Vo("kbd", {}, void 0, "←"))
                      , f = to || (to = Vo("kbd", {}, void 0, "↓"))
                      , v = no || (no = Vo("kbd", {}, void 0, "→"))
                      , m = io || (io = Vo("kbd", {}, void 0, Vo(Yi.nI7, {})))
                      , g = oo || (oo = Vo("kbd", {}, void 0, Vo(bt.EGB, {})))
                      , y = Vo("kbd", {}, void 0, "⇧ ", "Shift")
                      , w = ro || (ro = Vo("a", {
                        href: "https://twitter.com/starhousedev"
                    }, void 0, "starhouse "))
                      , b = ao || (ao = Vo("a", {
                        href: "https://twitter.com/Vinikdev"
                    }, void 0, "Vinikdev"))
                      , k = so || (so = Vo("a", {
                        href: "https://lospec.com/palette-list/lava-gb"
                    }, void 0, "Do-Nendo"))
                      , S = lo || (lo = Vo("a", {
                        href: "https://pixelplanet.fun/guilded"
                    }, void 0, "guilded"))
                      , E = co || (co = Vo("a", {
                        href: "mailto:admin@pixelplanet.fun"
                    }, void 0, "admin@pixelplanet.fun"))
                      , C = (0,
                    Ue.I0)()
                      , T = (0,
                    Ue.v9)((e=>e.gui.easterEgg))
                      , I = (0,
                    He.useCallback)((()=>{
                        C((0,
                        r.u0)()),
                        C((0,
                        c.h4)(T ? "Tajna OFF" : "Tajna ON"))
                    }
                    ), [T, C])
                      , x = Nn(null, I, 1e3);
                    return Vo("div", {
                        className: "content"
                    }, void 0, He.createElement("img", {
                        style: {
                            padding: 2,
                            maxWidth: "20%",
                            verticalAlign: "middle",
                            display: "inline-block"
                        },
                        alt: "ppfun",
                        src: "./logo.svg",
                        ref: x
                    }), Vo("p", {}, void 0, "Postavite piksele u boji na veliko platno s drugim igračima na mreži!", uo || (uo = Vo("br", {})), "Naše glavno platno je ogromna karta svijeta, koju možete postaviti gdje god želite, ali ćete morati čekati određeno hlađenje između piksela. Možete provjeriti vrijeme hlađenja i zahtjeve na izborniku Canvas Selection (gumb globusa na vrhu). Neka platna imaju drugačije vrijeme hlađenja za zamjenu piksela koje je postavio korisnik od postavljanja na nepostavljeni piksel. tj. 4s/7s znači 4s na svježe piksele i 7s na već postavljene piksele.", ho || (ho = Vo("br", {})), "Za ažuriranje viših razina zumiranja potrebno je neko vrijeme, 3D globus se ažurira barem jednom dnevno.", po || (po = Vo("br", {})), "Zabavite se!"), Vo("p", {
                        className: "modalinfo"
                    }, void 0, "Guilded (", "preporučeno", "): ", fo || (fo = Vo("a", {
                        href: "./guilded",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, void 0, "pixelplanet.fun/guilded"))), Vo("p", {
                        className: "modalinfo"
                    }, void 0, "Izvor na ", vo || (vo = Vo("a", {
                        href: "https://git.pixelplanet.fun",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, void 0, "git.pixelplanet.fun"))), Vo("h3", {}, void 0, "Podaci karte"), Vo("p", {}, void 0, "Čisti kartografski podaci koje koristimo, zajedno s konvertiranim OpenStreetMap pločicama za orijentaciju, mogu se preuzeti s mega.nz ovdje: ", mo || (mo = Vo("a", {
                        href: "https://mega.nz/#!JpkBwAbJ!EnSLlZmKv3kEBE0HDhakTgAZZycD3ELjduajJxPGaXo"
                    }, void 0, "pixelplanetmap.zip")), " (422MB)"), Vo("h3", {}, void 0, "Zabranjen? Otkriven kao proxy?"), Vo("div", {}, void 0, Vo("p", {}, void 0, ["Ako ste otkriveni kao proxy, ali to niste, ili mislite da ste pogrešno zabranjeni, idite na naš ", S, " ili nam pošaljite e-poruku na ", E, " i uključite sljedeći IID:"]), go || (go = Vo(Qi, {}))), Vo("h3", {}, void 0, "2D ", "Kontrole"), Vo("div", {
                        style: {
                            lineHeight: 1.5
                        }
                    }, void 0, "Pritisnite boju u paleti da biste je odabrali", yo || (yo = Vo("br", {})), ["Pritisnite ", e, " za promjenu mreže"], wo || (wo = Vo("br", {})), ["Pritisnite ", t, " za uključivanje/isključivanje prikaza aktivnosti piksela"], bo || (bo = Vo("br", {})), ["Pritisnite ", n, " za prebacivanje povijesnog prikaza"], ko || (ko = Vo("br", {})), ["Pritisnite ", i, " za kopiranje koordinata"], So || (So = Vo("br", {})), ["Pritisnite ", o, " ili ", a, " za zumiranje"], Eo || (Eo = Vo("br", {})), ["Pritisnite ", s, ", ", l, ", ", u, ", ", d, " za pomicanje"], Co || (Co = Vo("br", {})), ["Pritisnite ", h, ", ", p, ", ", f, ", ", v, " za pomicanje"], To || (To = Vo("br", {})), ["Povucite ", m, " mišem ili ", g, " pan za pomicanje"], Io || (Io = Vo("br", {})), ["Pomičite ", m, " kotačić miša ili ", g, " stisnite za zumiranje"], xo || (xo = Vo("br", {})), ["Držite lijevo ", y, " za postavljanje dok pomičete miš"], No || (No = Vo("br", {})), [m, " Lijevi klik ili ", g, " dodirnite za postavljanje piksela"], _o || (_o = Vo("br", {})), ["Kliknite ", m, " srednju tipku miša ili ", g, " dugim dodirom za odabir trenutne boje lebdenja"], Oo || (Oo = Vo("br", {}))), Vo("h3", {}, void 0, "3D ", "Kontrole"), Vo("div", {
                        style: {
                            lineHeight: 1.5
                        }
                    }, void 0, ["Pritisnite ", s, ", ", l, ", ", u, ", ", d, " za pomicanje"], Po || (Po = Vo("br", {})), ["Pritisnite ", h, ", ", p, ", ", f, ", ", v, " za pomicanje"], Ao || (Ao = Vo("br", {})), ["Pritisnite ", o, " i ", a, " za let gore i dolje"], Lo || (Lo = Vo("br", {})), [m, " Držite lijevu tipku miša i povucite miš za rotiranje"], Ro || (Ro = Vo("br", {})), [m, " Pomaknite kotačić miša ili držite ", m, " srednju tipku miša i povucite za zumiranje"], jo || (jo = Vo("br", {})), [m, " Desni klik i povlačenje miša za pomicanje"], $o || ($o = Vo("br", {})), [m, " Lijevi klik ili ", g, " dodirnite za postavljanje piksela"], Do || (Do = Vo("br", {})), [m, " Desni klik ili ", g, " dvaput dodirnite za uklanjanje piksela"], Mo || (Mo = Vo("br", {})), ["Kliknite ", m, " srednju tipku miša ili ", g, " dugim dodirom za odabir trenutne boje lebdenja"], zo || (zo = Vo("br", {}))), Ho || (Ho = Vo("h3", {}, void 0, "Palette Credits")), Vo("div", {}, void 0, ["Veliko hvala tim umjetnicima koji su ponudili svoje palete javnosti na"], " ", Uo || (Uo = Vo("a", {
                        href: "https://lospec.com/"
                    }, void 0, "lospec.com")), Vo("p", {}, void 0, ["Zasluge za paletu Mjeseca pripadaju ", w, "."]), Vo("p", {}, void 0, ["Zasluga za paletu Top10 pripada ", b, "."]), Vo("p", {}, void 0, ["Zasluga za paletu Top10 pripada ", k, "."])))
                }
                , "Pomoć"],
                SETTINGS: [br, "Postavke"],
                USERAREA: [qa, "Korisničko područje"],
                REGISTER: [es, "Registracija"],
                FORGOT_PASSWORD: [He.memo(Nc), "Zaboravili ste lozinku"],
                CHAT: [()=>{
                    const e = (0,
                    He.useRef)()
                      , t = (0,
                    He.useRef)()
                      , n = (0,
                    He.useRef)()
                      , [i,o] = (0,
                    He.useState)([])
                      , [a,s] = (0,
                    He.useState)(20)
                      , [l,u] = (0,
                    He.useState)({})
                      , d = (0,
                    Ue.I0)()
                      , h = (0,
                    Ue.v9)((e=>e.user.name))
                      , p = (0,
                    Ue.v9)((e=>e.fetching.fetchingChat))
                      , {channels: f, messages: v, blocked: m} = (0,
                    Ue.v9)((e=>e.chat))
                      , {args: g, setArgs: y, setTitle: w} = (0,
                    He.useContext)(it)
                      , {chatChannel: b=1} = g
                      , k = rt()
                      , S = (0,
                    He.useCallback)((e=>{
                        d((0,
                        r.Eo)(e)),
                        y({
                            chatChannel: Number(e)
                        })
                    }
                    ), [d])
                      , E = (0,
                    He.useCallback)((e=>{
                        const t = n.current;
                        if (!t)
                            return;
                        let i = t.value;
                        " " !== i.slice(-1) && (i += " "),
                        i += `${e} `,
                        t.value = i,
                        n.current.focus()
                    }
                    ), [])
                      , C = (0,
                    He.useCallback)((()=>{
                        u({})
                    }
                    ), [])
                      , T = (0,
                    He.useCallback)(((e,t,n,i)=>{
                        u({
                            type: "USER",
                            x: e,
                            y: t,
                            args: {
                                name: n,
                                uid: i,
                                setChannel: S,
                                addToInput: E
                            }
                        })
                    }
                    ), [S, E])
                      , {stayScrolled: I} = (0,
                    Cs.Z)(e, {
                        initialScroll: 1 / 0,
                        inaccuracy: 10
                    })
                      , x = v[b] || [];
                    return (0,
                    He.useEffect)((()=>{
                        !f[b] || v[b] || p || d((0,
                        c.TL)(b))
                    }
                    ), [f, v, b]),
                    (0,
                    He.useEffect)((()=>{
                        if (f[b]) {
                            const e = f[b][0];
                            w(`Chan: ${e}`)
                        }
                    }
                    ), [b]),
                    (0,
                    He.useLayoutEffect)((()=>{
                        I()
                    }
                    ), [x.length]),
                    (0,
                    He.useEffect)((()=>{
                        setTimeout((()=>{
                            const e = Math.round(t.current.offsetHeight / 10);
                            s(Math.min(28, e))
                        }
                        ), 330)
                    }
                    ), [t]),
                    (0,
                    He.useEffect)((()=>{
                        const e = [];
                        for (let t = 0; t < m.length; t += 1)
                            e.push(m[t][0]);
                        o(e)
                    }
                    ), [m.length]),
                    (0,
                    He.useEffect)((()=>{
                        if (!b || !f[b]) {
                            const e = Object.keys(f);
                            e.length && S(e[0])
                        }
                    }
                    ), [f]),
                    He.createElement("div", {
                        ref: t,
                        className: "chat-container"
                    }, yc(js, {
                        type: l.type,
                        x: l.x,
                        y: l.y,
                        args: l.args,
                        close: C,
                        align: l.align
                    }), He.createElement("ul", {
                        className: "chatarea",
                        ref: e,
                        style: {
                            flexGrow: 1
                        },
                        role: "presentation"
                    }, !x.length && yc(lc, {
                        uid: 0,
                        name: "info",
                        country: "xx",
                        msg: "Počnite razgovarati ovdje"
                    }), x.map((e=>i.includes(e[3]) ? null : yc(lc, {
                        name: e[0],
                        msg: e[1],
                        country: e[2],
                        uid: e[3],
                        ts: e[4],
                        openCm: T
                    }, e[5])))), yc("form", {
                        className: "chatinput",
                        onSubmit: e=>function(e) {
                            e.preventDefault();
                            const t = n.current.value.trim();
                            t && (d((0,
                            r.bE)(t, b)),
                            n.current.value = "")
                        }(e),
                        style: {
                            display: "flex"
                        }
                    }, void 0, h ? yc(He.Fragment, {}, "chtipt", He.createElement("input", {
                        style: {
                            flexGrow: 1,
                            minWidth: 40
                        },
                        ref: n,
                        autoComplete: "off",
                        maxLength: "200",
                        type: "text",
                        placeholder: "Ovdje razgovarajte"
                    }), yc("button", {
                        id: "sendbtn",
                        style: {
                            flexGrow: 0
                        },
                        type: "submit"
                    }, void 0, "‣")) : yc("div", {
                        className: "modallink",
                        onClick: e=>{
                            e.stopPropagation(),
                            k("USERAREA", {
                                target: "fullscreen"
                            })
                        }
                        ,
                        style: {
                            textAlign: "center",
                            fontSize: 13,
                            flexGrow: 1
                        },
                        role: "button",
                        tabIndex: 0
                    }, "nlipt", "Za chat morate biti prijavljeni"), yc(mc, {
                        setChatChannel: S,
                        chatChannel: b
                    }, "cdd")), yc("div", {
                        className: "chatlink",
                        style: {
                            fontSize: a
                        }
                    }, void 0, yc("span", {
                        onClick: e=>{
                            const {clientX: t, clientY: n} = e;
                            u({
                                type: "CHANNEL",
                                x: t,
                                y: n,
                                args: {
                                    cid: b
                                },
                                align: "tr"
                            })
                        }
                        ,
                        role: "button",
                        title: "Postavke kanala",
                        tabIndex: -1
                    }, void 0, "⚙")))
                }
                , "Chat"],
                CANVAS_SELECTION: [gs, "Odabir platna"],
                ARCHIVE: [()=>Ss("div", {
                    className: "content"
                }, void 0, Ss("p", {}, void 0, "Iako obično ne brišemo platna, neka se platna pokreću iz zabave ili na zahtjev korisnika kojima se trenutno sviđa meme. Ta platna mogu postati dosadna nakon nekog vremena i nakon tjedana bez većih promjena i ako stvarno ne zaslužuju da budu aktivna, odlučujemo ih ukloniti.", ys || (ys = Ss("br", {})), "Ovdje skupljamo ta platna da ih arhiviramo na odgovarajući način (što je trenutno samo jedno)."), Ss("h3", {}, void 0, "Platno političkog kompasa"), Ss("img", {
                    style: {
                        padding: 2,
                        maxWidth: "20%",
                        verticalAlign: "middle",
                        display: "inline-block"
                    },
                    alt: "political-compass",
                    src: "https://storage.pixelplanet.fun/compass-preview.png"
                }), Ss("p", {}, void 0, "Ovo je platno zatraženo u vrijeme političkih sukoba na glavnom platnu Zemlje. Bio je to 1024x1024 prikaz političkog kompasa s hlađenjem od 5 s i slaganjem od 60 s. Pokrenut je 11. svibnja i ostao je aktivan mjesecima dok se nije ugasio 30. studenog.", ws || (ws = Ss("br", {})), "Odlučili smo ga arhivirati kao timelapse s kodiranim webmom bez gubitaka. Snimanje zaslona iz timelapse-a rezultira savršenim prikazom 1:1 kakvog je platna bilo u to vrijeme."), bs || (bs = Ss("p", {
                    className: "modalinfo"
                }, void 0, "Timelapse:", Ss("a", {
                    href: "https://storage.pixelplanet.fun/compass-timelapse.webm"
                }, void 0, "Download"))), Ss("img", {
                    style: {
                        padding: 2,
                        maxWidth: "80%",
                        verticalAlign: "middle"
                    },
                    alt: "political-compass",
                    src: "https://storage.pixelplanet.fun/compass-final.png"
                })), "Arhiva platna"],
                PLAYER: [Sc, "Igrač"]
            };
            var Oc, Pc, Ac;
            function Lc(e, t, n, i) {
                Ac || (Ac = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: Ac,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            const Rc = e=>{
                let {id: t} = e;
                const [n,i] = (0,
                He.useState)(!1)
                  , o = (0,
                He.useRef)()
                  , r = (0,
                He.useRef)()
                  , a = (0,
                He.useMemo)((()=>{
                    return e = t,
                    (0,
                    kt.P1)(St, (t=>t.find((t=>t.windowId === e))));
                    var e
                }
                ), [])
                  , s = (0,
                He.useMemo)((()=>{
                    return e = t,
                    t=>t.windows.positions[e];
                    var e
                }
                ), [])
                  , l = (0,
                He.useMemo)((()=>{
                    return e = t,
                    t=>t.windows.args[e] || {};
                    var e
                }
                ), [])
                  , c = (0,
                Ue.v9)(a)
                  , u = (0,
                Ue.v9)(s)
                  , d = (0,
                Ue.v9)(Et)
                  , h = (0,
                Ue.v9)(l)
                  , p = (0,
                Ue.I0)()
                  , f = (0,
                He.useMemo)((()=>({
                    args: h,
                    setArgs: e=>p(Qe(t, e)),
                    setTitle: e=>p(Je(t, e)),
                    changeType: (e,n,i)=>p(function(e, t) {
                        return {
                            type: "CHANGE_WIN_TYPE",
                            windowId: e,
                            windowType: t,
                            title: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                            args: arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null
                        }
                    }(t, e, n, i))
                })), [t, h])
                  , {open: v, hidden: m, fullscreen: g} = c
                  , y = (0,
                He.useCallback)((()=>{
                    p(et(t))
                }
                ), [p])
                  , w = (0,
                He.useCallback)((e=>{
                    e.stopPropagation(),
                    p({
                        type: "CLONE_WIN",
                        windowId: t
                    })
                }
                ), [p])
                  , b = (0,
                He.useCallback)((()=>{
                    i(!1)
                }
                ), [p])
                  , k = (0,
                He.useCallback)((e=>{
                    e.stopPropagation(),
                    p({
                        type: "CLOSE_WIN",
                        windowId: t
                    })
                }
                ), [p])
                  , {xPos: S, yPos: E, width: C, height: T} = u;
                Zi(o, y, (0,
                He.useCallback)(((e,n)=>p(function(e, t, n) {
                    return {
                        type: "MOVE_WIN",
                        windowId: e,
                        xDiff: t,
                        yDiff: n
                    }
                }(t, e, n))), [g, !n && m])),
                Zi(r, y, (0,
                He.useCallback)(((e,n)=>p(function(e, t, n) {
                    return {
                        type: "RESIZE_WIN",
                        windowId: e,
                        xDiff: t,
                        yDiff: n
                    }
                }(t, e, n))), [g, !n && m]));
                const I = (0,
                He.useCallback)((()=>{
                    m && i(!1),
                    v ? n || m || (p({
                        type: "TGL_MAXIMIZE_WIN",
                        windowId: t
                    }),
                    setTimeout((()=>i(!0)), 10)) : p({
                        type: "REMOVE_WIN",
                        windowId: t
                    })
                }
                ), [p, m, v, n]);
                if ((0,
                He.useEffect)((()=>{
                    v && !m && window.setTimeout((()=>{
                        i(!0)
                    }
                    ), 10)
                }
                ), [v, m]),
                !n && (m || !v))
                    return null;
                const {title: x, windowType: N} = c
                  , {z: _} = u
                  , [O,P] = _c[N]
                  , A = x ? `${P} - ${x}` : P
                  , L = `${N}${v && !m && n ? " show" : ""}`;
                return g ? Lc("div", {
                    className: `modal ${L}`,
                    onTransitionEnd: I,
                    onClick: y,
                    style: {
                        zIndex: _
                    }
                }, void 0, Lc("h2", {}, void 0, A), Lc("div", {
                    onClick: k,
                    className: "modal-topbtn close",
                    role: "button",
                    label: "close",
                    title: "Zatvori",
                    tabIndex: -1
                }, "closebtn", "✕"), Ne.includes(N) && Lc("div", {
                    onClick: e=>{
                        ot(N, h, S, E, C, T),
                        k(e)
                    }
                    ,
                    className: "modal-topbtn pop",
                    role: "button",
                    label: "close",
                    title: "PopUp",
                    tabIndex: -1
                }, "popbtn", Oc || (Oc = Lc(Bi.srV, {}))), d && Lc("div", {
                    onClick: b,
                    className: "modal-topbtn restore",
                    role: "button",
                    label: "restore",
                    title: "Vratiti",
                    tabIndex: -1
                }, "resbtn", "↓"), Lc("div", {
                    className: "modal-content"
                }, "content", Lc(it.Provider, {
                    value: f
                }, void 0, Lc(O, {})))) : Lc("div", {
                    className: `window ${L}`,
                    onTransitionEnd: I,
                    onClick: y,
                    style: {
                        left: S,
                        top: E,
                        width: C,
                        height: T,
                        zIndex: _
                    }
                }, void 0, Lc("div", {
                    className: "win-topbar"
                }, "topbar", Lc("span", {
                    className: "win-topbtn",
                    onClick: w,
                    title: "Kloniraj"
                }, "clonebtn", "+"), He.createElement("span", {
                    className: "win-title",
                    key: "title",
                    ref: o,
                    title: "Premjesti"
                }, A), Ne.includes(N) && Lc("span", {
                    className: "win-topbtn",
                    onClick: e=>{
                        ot(N, h, S, E, C, T),
                        k(e)
                    }
                }, "pobtnm", Pc || (Pc = Lc(Bi.srV, {}))), Lc("span", {
                    className: "win-topbtn",
                    onClick: b,
                    title: "Maksimiziraj"
                }, "maxbtn", "↑"), Lc("span", {
                    className: "win-topbtn close",
                    onClick: k,
                    title: "Zatvori"
                }, "closebtn", "X")), He.createElement("div", {
                    className: "win-resize",
                    key: "winres",
                    title: "Promjena veličine",
                    ref: r
                }, "▨"), Lc("div", {
                    className: "win-content"
                }, "content", Lc(it.Provider, {
                    value: f
                }, void 0, Lc(O, {}))))
            }
              , jc = He.memo(Rc);
            var $c;
            function Dc(e, t, n, i) {
                $c || ($c = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: $c,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            const Mc = ()=>{
                const e = (0,
                Ue.v9)(Tt, Ue.wU)
                  , [t,n] = (0,
                Ue.v9)(Ct, Ue.wU)
                  , i = (0,
                Ue.I0)();
                return t && e.length ? Dc("div", {
                    id: "wm"
                }, void 0, Dc(gi, {
                    show: n,
                    onClick: ()=>i({
                        type: "CLOSE_FULLSCREEN_WINS"
                    })
                }), e.map((e=>Dc(jc, {
                    id: e
                }, e)))) : null
            }
            ;
            var zc, Hc, Uc, Wc;
            function Vc(e, t, n, i) {
                Wc || (Wc = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var o = e && e.defaultProps
                  , r = arguments.length - 3;
                if (t || 0 === r || (t = {
                    children: void 0
                }),
                1 === r)
                    t.children = i;
                else if (r > 1) {
                    for (var a = new Array(r), s = 0; s < r; s++)
                        a[s] = arguments[s + 3];
                    t.children = a
                }
                if (t && o)
                    for (var l in o)
                        void 0 === t[l] && (t[l] = o[l]);
                else
                    t || (t = o || {});
                return {
                    $$typeof: Wc,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            const Gc = {
                style: {
                    verticalAlign: "middle"
                }
            }
              , Fc = ()=>He.createElement(He.Fragment, null, zc || (zc = Vc(Be, {})), Hc || (Hc = Vc(Ve.Pd.Provider, {
                value: Gc
            }, void 0, Vc(ut, {}), Vc(ln, {}), Vc(Pt, {}), Vc(wt, {}), Vc(qe, {}), Vc(Fi, {}), Vc(zi, {}), Vc(Mc, {}))));
            (0,
            i.p5)(Me, {}, (()=>{
                function e() {
                    Me.dispatch((0,
                    r.Qr)())
                }
                window.addEventListener("message", Me.dispatch),
                Me.dispatch({
                    type: "HYDRATED"
                }),
                d.Z.initialize(Me, F, ke),
                Q.initialize(Me),
                window.addEventListener("hashchange", (()=>{
                    Me.dispatch((0,
                    r.fL)())
                }
                )),
                window.imMobile = function() {
                    delete window.imMobile,
                    Me.dispatch((0,
                    r.bv)(!0))
                }
                ,
                document.addEventListener("touchstart", window.imMobile, {
                    once: !0
                }),
                window.addEventListener("resize", e),
                e(),
                Me.dispatch((0,
                r.vb)()),
                Me.dispatch((0,
                c.aM)()),
                F.initialize(Me, d.Z, ke)
            }
            )),
            function() {
                const e = ()=>{
                    window.name = "main",
                    function(e, t) {
                        (0,
                        We.s)(e).render(Vc(Ue.zt, {
                            store: t
                        }, void 0, Uc || (Uc = Vc(Fc, {}))))
                    }(document.getElementById("app"), Me);
                    const t = function(e) {
                        return t=>{
                            if ("INPUT" === t.target.nodeName || "TEXTAREA" === t.target.nodeName)
                                return;
                            let {key: n} = t;
                            const i = Number(n);
                            if (!Number.isNaN(i) && i > 0) {
                                const {canvases: t, canvasId: n} = e.getState().canvas
                                  , o = Object.keys(t).filter((e=>!t[e].hid));
                                if (i <= o.length) {
                                    const a = o[i - 1];
                                    if (a !== n) {
                                        e.dispatch((0,
                                        r.SC)(a));
                                        const n = t[a].title;
                                        e.dispatch((0,
                                        c.h4)(`Prebačeno na ${n}`))
                                    }
                                }
                            } else {
                                switch (t.code) {
                                case "ArrowUp":
                                case "KeyW":
                                    return void e.dispatch((0,
                                    r.mx)(-1));
                                case "ArrowLeft":
                                case "KeyA":
                                    return void e.dispatch((0,
                                    r.mW)(-1));
                                case "ArrowDown":
                                case "KeyS":
                                    return void e.dispatch((0,
                                    r.mx)(1));
                                case "ArrowRight":
                                case "KeyD":
                                    return void e.dispatch((0,
                                    r.mW)(1));
                                case "KeyE":
                                    return void e.dispatch((0,
                                    r.WW)(1));
                                case "KeyQ":
                                    return void e.dispatch((0,
                                    r.WW)(-1));
                                case "KeyB":
                                    return void e.dispatch((0,
                                    c.oX)())
                                }
                                switch (t.key) {
                                case "+":
                                    return void e.dispatch((0,
                                    r.WW)(1));
                                case "-":
                                    return void e.dispatch((0,
                                    r.WW)(-1));
                                case "Control":
                                    return void e.dispatch((0,
                                    r.Or)(-1));
                                case "Shift":
                                    return void e.dispatch((0,
                                    r.R4)(!0, !0))
                                }
                                if (!u.includes(n)) {
                                    if (n = t.code,
                                    !n.startsWith("Key"))
                                        return;
                                    n = n.slice(-1).toLowerCase()
                                }
                                switch (n) {
                                case "g":
                                    return e.dispatch((0,
                                    r.xK)()),
                                    void e.dispatch((0,
                                    c.h4)(e.getState().gui.showGrid ? "Rešetka ON" : "Rešetka OFF"));
                                case "h":
                                    return void (window?.ssv.backupurl && e.dispatch((0,
                                    r.FI)()));
                                case "x":
                                    return e.dispatch((0,
                                    r.Xb)()),
                                    void e.dispatch((0,
                                    c.h4)(e.getState().gui.showPixelNotify ? "Notifikacija za pixele ON" : "Notifikacija za pixele OFF"));
                                case "m":
                                    return e.dispatch((0,
                                    r.$t)()),
                                    void e.dispatch((0,
                                    c.h4)(e.getState().gui.mute ? "Ugašen zvuk" : "Upaljen zvuk"));
                                case "n":
                                    return void e.dispatch((0,
                                    r.qP)());
                                case "r":
                                    {
                                        const {hover: t} = e.getState().canvas
                                          , n = t.join("_");
                                        return (0,
                                        o.Z)(n),
                                        void e.dispatch((0,
                                        c.h4)("Kopirano"))
                                    }
                                case "t":
                                    return e.dispatch({
                                        type: "s/TGL_OVENABLED"
                                    }),
                                    void e.dispatch((0,
                                    c.h4)(e.getState().templates.ovEnabled ? "Ovеrlay ON" : "Preklapanje OFF"));
                                case "l":
                                    e.dispatch((0,
                                    r.u0)()),
                                    e.dispatch((0,
                                    c.h4)(e.getState().gui.easterEgg ? "Tajna ON" : "Tajna OFF"))
                                }
                            }
                        }
                    }(Me)
                      , n = function(e) {
                        return t=>{
                            switch (t.code) {
                            case "ArrowUp":
                            case "KeyW":
                            case "ArrowDown":
                            case "KeyS":
                                return void (e.getState().gui.moveV && e.dispatch((0,
                                r.mx)(0)));
                            case "ArrowLeft":
                            case "KeyA":
                            case "ArrowRight":
                            case "KeyD":
                                return void (e.getState().gui.moveU && e.dispatch((0,
                                r.mW)(0)));
                            case "KeyE":
                            case "KeyQ":
                                return void (e.getState().gui.moveW && e.dispatch((0,
                                r.WW)(0)))
                            }
                            switch (t.key) {
                            case "+":
                            case "-":
                                return void e.dispatch((0,
                                r.WW)(0));
                            case "Shift":
                            case "CapsLock":
                                e.dispatch((0,
                                r.R4)(!1))
                            }
                        }
                    }(Me);
                    document.addEventListener("keydown", t, !1),
                    document.addEventListener("keyup", n, !1),
                    document.removeEventListener("DOMContentLoaded", e)
                }
                ;
                document.addEventListener("DOMContentLoaded", e, !1)
            }()
        }
        ,
        891: (e,t,n)=>{
            n.d(t, {
                Z: ()=>h
            });
            var i, o = n(7294), r = n(743), a = n(259), s = n(403), l = n(631);
            function c(e, t, n, o) {
                i || (i = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103);
                var r = e && e.defaultProps
                  , a = arguments.length - 3;
                if (t || 0 === a || (t = {
                    children: void 0
                }),
                1 === a)
                    t.children = o;
                else if (a > 1) {
                    for (var s = new Array(a), l = 0; l < a; l++)
                        s[l] = arguments[l + 3];
                    t.children = s
                }
                if (t && r)
                    for (var c in r)
                        void 0 === t[c] && (t[c] = r[c]);
                else
                    t || (t = r || {});
                return {
                    $$typeof: i,
                    type: e,
                    key: void 0 === n ? null : "" + n,
                    ref: null,
                    props: t,
                    _owner: null
                }
            }
            const u = new Map
              , d = e=>{
                let {id: t} = e;
                const n = (0,
                o.useRef)(null)
                  , [i,d] = (0,
                o.useState)(!1)
                  , [h,p] = (0,
                o.useState)([])
                  , [f] = (0,
                o.useState)((0,
                a.x2)())
                  , [v,m,g,y,w] = (0,
                r.v9)((e=>[e.canvas.canvasId, e.canvas.canvasStartDate, e.canvas.canvasEndDate, e.canvas.historicalDate, e.canvas.historicalTime]), r.wU)
                  , b = (0,
                r.I0)()
                  , k = (0,
                o.useCallback)(((e,t)=>{
                    const n = t.substring(0, 2) + t.substring(3, 5)
                      , i = (0,
                    a.UW)(e);
                    b((0,
                    s.on)(i, n))
                }
                ), [b])
                  , S = (0,
                o.useCallback)((async e=>{
                    const t = `${e}/${v}`
                      , n = u.get(t);
                    if (n && n[1] > Date.now() - 18e5)
                        return n[0];
                    d(!0);
                    const i = await (0,
                    l.No)(e, v);
                    return u.set(t, [i, Date.now()]),
                    d(!1),
                    i
                }
                ), [v])
                  , E = (0,
                o.useCallback)((async e=>{
                    if (!h.length || !n.current?.value)
                        return;
                    const t = h.indexOf((0,
                    a.K6)(w)) + e;
                    let i = n.current.value;
                    if (t >= h.length || t < 0) {
                        t < 0 ? n.current.stepDown(1) : n.current.stepUp(1),
                        i = n.current.value;
                        const e = await S(i);
                        let o;
                        return o = t < 0 && e.length > 0 ? e[e.length - 1] : e[0] || "00:00",
                        p(e),
                        void k(i, o)
                    }
                    k(i, h[t])
                }
                ), [w, h, S, k]);
                (0,
                o.useEffect)((()=>{
                    (async()=>{
                        const e = (0,
                        a.p6)(y)
                          , t = `${e}/${v}`
                          , n = u.get(t);
                        n && h === n[0] || p(await S(e)),
                        n && n[0].length && !n[0].includes((0,
                        a.K6)(w)) && k(e, n[0][0])
                    }
                    )()
                }
                ), [y, w, v, S, k, h]);
                const C = (0,
                a.p6)(y)
                  , T = (0,
                a.K6)(w);
                return c("div", {
                    className: "historyselect",
                    id: t
                }, void 0, o.createElement("input", {
                    type: "date",
                    pattern: "\\d{4}-\\d{2}-\\d{2}",
                    key: "dateinput",
                    value: C,
                    min: m,
                    max: g || f,
                    ref: n,
                    onChange: async e=>{
                        const t = e.target.value
                          , n = await S(t);
                        p(n),
                        k(t, n[0] || "00:00")
                    }
                }), c("div", {}, "timeselcon", !!h.length && w && !i && c("div", {}, "timesel", c("button", {
                    type: "button",
                    className: "hsar",
                    onClick: ()=>E(-1)
                }, void 0, "←"), c("select", {
                    value: T,
                    onChange: e=>k(C, e.target.value)
                }, void 0, h.map((e=>c("option", {
                    value: e
                }, e, e)))), c("button", {
                    type: "button",
                    className: "hsar",
                    onClick: ()=>E(1)
                }, void 0, "→")), i && c("p", {}, void 0, "Učitavanje..."), !h.length && !i && c("p", {}, void 0, "Označite datum iznad")))
            }
              , h = o.memo(d)
        }
        ,
        389: (e,t,n)=>{
            n.d(t, {
                Z: ()=>o
            });
            var i = n(7294);
            const o = function(e, t) {
                const n = (0,
                i.useRef)();
                (0,
                i.useEffect)((()=>{
                    n.current = e
                }
                ), [e]),
                (0,
                i.useEffect)((()=>{
                    function e() {
                        n.current()
                    }
                    if (null !== t) {
                        e();
                        const n = setInterval(e, t);
                        return ()=>clearInterval(n)
                    }
                }
                ), [t])
            }
        }
        ,
        940: (e,t,n)=>{
            n.d(t, {
                A$: ()=>o,
                Fv: ()=>i,
                I_: ()=>l,
                Kb: ()=>d,
                PO: ()=>m,
                PR: ()=>v,
                Tj: ()=>a,
                U4: ()=>p,
                V4: ()=>r,
                WF: ()=>f,
                fS: ()=>s,
                p7: ()=>c,
                vB: ()=>g,
                vc: ()=>u,
                wL: ()=>h
            });
            const i = 40
              , o = 3
              , r = "0"
              , a = 128
              , s = 32
              , l = 256
              , c = 2
              , u = 2592e6
              , d = 100
              , h = 1e3
              , p = 2e3
              , f = 3e5
              , v = 3e5
              , m = {
                COLOR: 0,
                OVERLAY: 1,
                HISTORY: 2
            }
              , g = 8
        }
        ,
        259: (e,t,n)=>{
            n.d(t, {
                Cr: ()=>w,
                D$: ()=>E,
                D0: ()=>g,
                HD: ()=>d,
                IU: ()=>_,
                K6: ()=>l,
                NK: ()=>f,
                Ss: ()=>p,
                TP: ()=>I,
                UW: ()=>a,
                VL: ()=>b,
                W4: ()=>h,
                Z: ()=>T,
                _I: ()=>L,
                _N: ()=>P,
                _O: ()=>m,
                _V: ()=>M,
                ad: ()=>j,
                b3: ()=>N,
                bG: ()=>R,
                bt: ()=>$,
                gx: ()=>k,
                h$: ()=>D,
                lg: ()=>x,
                mW: ()=>C,
                nK: ()=>y,
                p6: ()=>s,
                r6: ()=>O,
                s3: ()=>v,
                sG: ()=>u,
                tF: ()=>A,
                uZ: ()=>r,
                x2: ()=>c
            });
            var i = n(940);
            function o(e, t) {
                return (e % t + t) % t
            }
            function r(e, t, n) {
                return Math.max(t, Math.min(e, n))
            }
            function a(e) {
                return e.substring(0, 4) + e.substring(5, 7) + e.substring(8)
            }
            function s(e) {
                return e ? `${e.substring(0, 4)}-${e.substring(4, 6)}-${e.substring(6)}` : ""
            }
            function l(e) {
                return e ? `${e.substring(0, 2)}:${e.substring(2)}` : "00:00"
            }
            function c() {
                const e = new Date;
                let t = e.getUTCDate()
                  , n = e.getUTCMonth() + 1;
                return n < 10 && (n = `0${n}`),
                t < 10 && (t = `0${t}`),
                `${e.getUTCFullYear()}-${n}-${t}`
            }
            function u(e, t, n) {
                let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                const r = null === o ? i.I_ : i.fS
                  , a = null == o ? n : o;
                return [Math.floor((t + e / 2) / r), Math.floor((a + e / 2) / r)]
            }
            function d(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                return t.map((t=>Math.floor((t + n / 2) / i.I_ * e)))
            }
            function h(e) {
                return e ? Math.log2(e / i.I_) / i.p7 * 2 : 0
            }
            function p(e, t, n) {
                if (e && n) {
                    let t = n.length;
                    for (; t > 0; ) {
                        t -= 1;
                        const [i,o] = n[t];
                        if (e <= i)
                            return o
                    }
                }
                return t
            }
            function f(e, t, n) {
                let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                const a = null === r ? i.I_ : i.fS
                  , s = null == r ? n : r;
                let l = null === r ? 0 : n * a * a;
                const c = o(e / 2, a)
                  , u = o(t + c, a);
                return l += o(s + c, a) * a + u,
                l
            }
            function v(e, t) {
                const n = Object.keys(e);
                for (let i = 0; i < n.length; i += 1) {
                    const o = n[i];
                    if (e[o].ident === t)
                        return o
                }
                return null
            }
            function m(e, t, n, o) {
                let r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                const a = r ? i.fS : i.I_
                  , s = n % a
                  , l = n - s;
                let c = l % (a * a);
                const u = r ? (l - c) / a / a : null;
                c /= a;
                const d = o / 2 / a;
                return [(e - d) * a + s, (t - d) * a + c, u]
            }
            function g(e, t) {
                return t.map((t=>o(t + e / 2, i.I_)))
            }
            function y(e, t, n, i) {
                let[o,r] = i;
                const [a,s] = e
                  , {width: l, height: c} = n;
                return [(o - l / 2) / t + a, (r - c / 2) / t + s]
            }
            function w(e, t, n, i) {
                let[o,r] = i;
                const [a,s] = e
                  , {width: l, height: c} = n;
                return [(o - a) * t + l / 2, (r - s) * t + c / 2]
            }
            function b(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                const n = Math.ceil(e / 1e3);
                let i;
                return i = n < 60 && t ? n : `${Math.floor(n / 60)}:${("0" + n % 60).slice(-2)}`,
                i
            }
            function k(e) {
                const t = e % 60;
                let n = (e - t) / 60;
                const i = n % 60;
                n = (n - i) / 60;
                const o = n % 24;
                n = (n - o) / 24;
                let r = "";
                return n && (r += ` ${n}d`),
                o && (r += ` ${o}h`),
                i && (r += ` ${i}min`),
                t && (r += ` ${t}s`),
                r
            }
            const S = ["k", "M", "B"];
            function E(e) {
                if (!e)
                    return arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "0";
                if (e < 1e3)
                    return e;
                let t = 0;
                for (; t < S.length; ) {
                    if (e < 1e4)
                        return `${Math.floor(e / 1e3)}.${`0${Math.floor(e % 1e3 / 10)}`.slice(-2)}${S[t]}`;
                    if (e < 1e5)
                        return `${Math.floor(e / 1e3)}.${Math.floor(e % 1e3 / 100)}${S[t]}`;
                    if (e < 1e6)
                        return Math.floor(e / 1e3) + S[t];
                    t += 1,
                    e = Math.round(e / 1e3)
                }
                return ""
            }
            function C(e) {
                if (!e)
                    return arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "0";
                const t = e < 0
                  , n = String(Math.abs(e))
                  , i = n.indexOf(".");
                let o = ""
                  , r = n.length;
                -1 !== i && (o = n.substring(i),
                r = i);
                let a = r - 3;
                for (o = n.substring(a, r) + o,
                r = a; r > 0; )
                    a = r - 3,
                    o = `${n.substring(a, r)} ${o}`,
                    r = a;
                return t && (o = `-${o}`),
                o
            }
            function T(e) {
                if (!e)
                    return "#000000";
                let t = 0;
                for (let n = 0; n < e.length; n++)
                    t = e.charCodeAt(n) + ((t << 5) - t);
                return `#${`00000${(16777215 & t).toString(16).toUpperCase()}`.slice(-6)}`
            }
            function I(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                3 === (e = e.replace(/^\s*#|\s*$/g, "")).length && (e = e.replace(/(.)/g, "$1$1"));
                let n = Math.floor(parseInt(e.substring(0, 2), 16) / 2)
                  , i = Math.floor(parseInt(e.substring(2, 4), 16) / 2)
                  , o = Math.floor(parseInt(e.substring(4, 6), 16) / 2);
                return t && (n += 128,
                i += 128,
                o += 128),
                n = `0${n.toString(16)}`.slice(-2),
                i = `0${i.toString(16)}`.slice(-2),
                o = `0${o.toString(16)}`.slice(-2),
                `#${n}${i}${o}`
            }
            function x(e) {
                const t = ["\\", "[", "]", "(", ")", "*", "~", "+", "_", "\n"];
                let n = ""
                  , i = 0;
                for (let o = 0; o < e.length; o += 1) {
                    const r = e[o];
                    t.includes(r) && (n += `${e.slice(i, o)}\\`,
                    i = o)
                }
                return 0 === i ? e : (n += e.slice(i),
                n)
            }
            function N() {
                try {
                    const e = document.createElement("canvas");
                    return !(!window.WebGL2RenderingContext || !e.getContext("webgl2"))
                } catch {
                    return !1
                }
            }
            function _(e) {
                let t = e.indexOf("://") + 3;
                t < 3 && (t = 0),
                e.startsWith("www.", t) && (t += 4);
                let n = e.indexOf("/", t);
                return -1 === n && (n = e.length),
                e.endsWith(".com", n) && (n -= 4),
                n <= t ? e : e.slice(t, n)
            }
            function O(e) {
                let t = e.indexOf("&");
                -1 === t && (t = e.length);
                let n = t - 1;
                for (; n >= 0 && "." !== e[n]; n -= 1)
                    if ("/" === e[n])
                        return null;
                return n += 1,
                t - n > 4 ? null : e.slice(n, t)
            }
            function P(e) {
                let t = e.indexOf("?");
                return -1 === t && (t = e.indexOf("#")),
                -1 === t ? e : e.substring(0, t)
            }
            function A(e) {
                const t = new Date
                  , n = new Date(1e3 * e);
                return n.getDate() !== t.getDate() ? n.toLocaleString() : n.toLocaleTimeString()
            }
            function L(e) {
                let t = e.lastIndexOf("#")
                  , n = [];
                if (-1 !== t) {
                    let i = e.slice(t + 1);
                    t = i.indexOf("?"),
                    -1 !== t && (i = i.slice(0, t)),
                    n = i.split(",").map((e=>parseInt(e, 10))).slice(1, 3)
                }
                return (2 !== n.length || n.some(Number.isNaN)) && (n = e.split("_").map((e=>parseInt(e, 10)))),
                (2 !== n.length || n.some(Number.isNaN)) && (n = e.split(",").map((e=>parseInt(e, 10)))),
                (2 !== n.length || n.some(Number.isNaN)) && (n = null),
                n
            }
            function R(e) {
                if (!e)
                    return 0;
                const t = e.slice(-1).toLowerCase()
                  , n = parseInt(e.slice(0, -1), 10);
                if (Number.isNaN(n) || n <= 0 || n > 600 || !["s", "m", "h", "d"].includes(t))
                    return 0;
                let i = 1e3;
                return "m" === t ? i *= 60 : "h" === t ? i *= 3600 : "d" === t && (i *= 86400),
                n * i
            }
            function j(e, t) {
                let n = 0;
                for (let i = 0; i < e.length; i += 1) {
                    const o = Math.abs(e[i] - t[i]);
                    o > n && (n = o)
                }
                return n
            }
            function $(e) {
                if (e instanceof TouchEvent) {
                    const t = e.touches.length ? e.touches : e.changedTouches;
                    let n = 0
                      , i = 0;
                    for (const {pageX: e, pageY: o} of t)
                        n += e,
                        i += o;
                    const {length: o} = t;
                    return [n / o, i / o]
                }
                return [e.clientX, e.clientY]
            }
            function D(e) {
                return new Promise((t=>{
                    const n = new Blob([e])
                      , i = new FileReader;
                    i.onload = e=>{
                        const n = e.target.result
                          , [,i] = n.split(",");
                        t(i)
                    }
                    ,
                    i.readAsDataURL(n)
                }
                ))
            }
            async function M(e) {
                const t = `data:application/octet-binary;base64,${e}`;
                return (await fetch(t)).arrayBuffer()
            }
        }
        ,
        631: (e,t,n)=>{
            n.d(t, {
                A: ()=>N,
                AP: ()=>f,
                E1: ()=>p,
                Es: ()=>x,
                Fx: ()=>r,
                I6: ()=>h,
                JL: ()=>_,
                K$: ()=>I,
                No: ()=>v,
                Oh: ()=>g,
                PS: ()=>u,
                Pw: ()=>S,
                Wt: ()=>b,
                e9: ()=>w,
                fF: ()=>k,
                ft: ()=>y,
                hH: ()=>C,
                jK: ()=>O,
                ko: ()=>d,
                s$: ()=>T,
                uY: ()=>o,
                uw: ()=>m,
                yx: ()=>E
            });
            var i = n(259);
            const o = function() {
                if (!window.ssv || !window.ssv.shard || "fuckyouarkeros.fun" === window.location.host)
                    return "";
                const e = window.location.host.split(".");
                return e.length > 2 && e.shift(),
                `${window.ssv.shard}.${e.join(".")}`
            }()
              , r = o && `${window.location.protocol}//${o}`;
            async function a(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const {timeout: n=3e4} = t
                  , i = new AbortController
                  , o = setTimeout((()=>i.abort()), n)
                  , r = await fetch(e, {
                    ...t,
                    signal: i.signal
                });
                return clearTimeout(o),
                r
            }
            async function s(e) {
                const {status: t} = e;
                if (429 === t) {
                    let t = "Poslali ste previše zahtjeva";
                    const n = e.headers.get("Retry-After");
                    return Number.isNaN(Number(n)) || (t += `, pokušaj ponovno nakon ${Math.floor(n / 60)} min`),
                    {
                        errors: [t]
                    }
                }
                try {
                    return await e.json()
                } catch (e) {
                    return {
                        errors: [`Pogreška veze ${t} :(`]
                    }
                }
            }
            async function l(e, t) {
                let n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                (!(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]) && (e = `${r}${e}`);
                try {
                    return s(await a(e, {
                        method: "POST",
                        credentials: n ? "include" : "omit",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(t)
                    }))
                } catch (e) {
                    return {
                        errors: ["Ne mogu se spojiti na poslužitelj, pokušajte ponovno kasnije :("]
                    }
                }
            }
            async function c(e) {
                let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]) && (e = `${r}${e}`);
                try {
                    return s(await a(e, {
                        credentials: t ? "include" : "omit"
                    }))
                } catch (e) {
                    return {
                        errors: ["Ne mogu se spojiti na poslužitelj, pokušajte ponovno kasnije :("]
                    }
                }
            }
            async function u(e, t) {
                const n = await l("/api/block", {
                    userId: e,
                    block: t
                });
                return n.errors ? n.errors[0] : "ok" === n.status ? null : "Nepoznata pogreška"
            }
            async function d(e) {
                const t = await l("/api/privatize", {
                    priv: e
                });
                return t.errors ? t.errors[0] : "ok" === t.status ? null : "Nepoznata pogreška"
            }
            async function h(e) {
                const t = await l("/api/startdm", e);
                return t.errors ? t.errors[0] : t.channel ? t.channel : "Nepoznata pogreška"
            }
            async function p(e) {
                const t = await l("/api/blockdm", {
                    block: e
                });
                return t.errors ? t.errors[0] : "ok" === t.status ? null : "Nepoznata pogreška"
            }
            async function f(e) {
                const t = await l("/api/leavechan", {
                    channelId: e
                });
                return t.errors ? t.errors[0] : "ok" === t.status ? null : "Nepoznata pogreška"
            }
            async function v(e, t) {
                try {
                    const n = `/history?day=${(0,
                    i.UW)(e)}&id=${t}`
                      , o = await a(n, {
                        credentials: "omit",
                        timeout: 45e3
                    });
                    return 200 !== o.status ? [] : (await o.json()).map(i.K6)
                } catch {
                    return []
                }
            }
            async function m(e) {
                const t = await fetch(`${r}/api/chathistory?cid=${e}&limit=50`, {
                    credentials: "include"
                });
                if (t.ok) {
                    const {history: e} = await t.json();
                    return e
                }
                return null
            }
            function g(e, t) {
                return l("/api/auth/change_passwd", {
                    password: t,
                    newPassword: e
                })
            }
            async function y() {
                return c("/api/auth/resend_verify")
            }
            async function w() {
                return !c("/api/auth/logout").errors
            }
            function b(e) {
                return l("/api/auth/change_name", {
                    name: e
                })
            }
            function k(e, t) {
                return l("/api/auth/change_mail", {
                    email: e,
                    password: t
                })
            }
            function S(e, t) {
                return l("/api/auth/local", {
                    nameoremail: e,
                    password: t
                })
            }
            function E(e, t, n, i, o) {
                return l("/api/auth/register", {
                    name: e,
                    email: t,
                    password: n,
                    captcha: i,
                    captchaid: o
                })
            }
            function C(e) {
                return l("/api/auth/restore_password", {
                    email: e
                })
            }
            function T(e) {
                return l("/api/auth/delete_account", {
                    password: e
                })
            }
            function I() {
                return c("/ranking", !1)
            }
            function x() {
                return c("/api/baninfo")
            }
            async function N() {
                if (window.me) {
                    const e = await window.me;
                    return delete window.me,
                    s(e)
                }
                return c("/api/me")
            }
            function _() {
                return c("/api/getiid")
            }
            function O(e) {
                return l("/api/banme", {
                    code: e
                })
            }
        }
        ,
        403: (e,t,n)=>{
            function i(e, t, n) {
                return {
                    type: "ALERT",
                    title: e,
                    message: t,
                    alertType: n,
                    btn: arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "OK"
                }
            }
            function o() {
                return i("Change Happened", "Please refresh the website", "refresh")
            }
            function r() {
                return {
                    type: "CLOSE_ALERT"
                }
            }
            function a() {
                return {
                    type: "s/TGL_HISTORICAL_VIEW"
                }
            }
            function s() {
                return {
                    type: "s/TGL_EASTER_EGG"
                }
            }
            function l() {
                return {
                    type: "s/TGL_GRID"
                }
            }
            function c() {
                return {
                    type: "s/TGL_PXL_NOTIFY"
                }
            }
            function u() {
                return {
                    type: "s/TGL_MVM_CTRLS"
                }
            }
            function d() {
                return {
                    type: "s/TGL_AUTO_ZOOM_IN"
                }
            }
            function h() {
                return {
                    type: "s/TGL_ONLINE_CANVAS"
                }
            }
            function p() {
                return {
                    type: "s/TGL_DAILY_PXLS"
                }
            }
            function f() {
                return {
                    type: "s/TGL_NO_ROUND"
                }
            }
            function v() {
                return {
                    type: "s/TGL_MUTE"
                }
            }
            function m() {
                return {
                    type: "s/TGL_COMPACT_PALETTE"
                }
            }
            function g() {
                return {
                    type: "s/TGL_CHAT_NOTIFY"
                }
            }
            function y() {
                return {
                    type: "s/TGL_POTATO_MODE"
                }
            }
            function w() {
                return {
                    type: "s/TGL_LIGHT_GRID"
                }
            }
            function b() {
                return {
                    type: "s/TGL_OPEN_PALETTE"
                }
            }
            function k() {
                return {
                    type: "s/TGL_CURSOR"
                }
            }
            function S(e, t) {
                return {
                    type: "s/SET_HOLD_PAINT",
                    value: e,
                    immediate: t
                }
            }
            function E(e) {
                return {
                    type: "s/SELECT_PENCIL_MODE",
                    value: e
                }
            }
            function C() {
                return {
                    type: "SELECT_HOVER_COLOR"
                }
            }
            function T(e) {
                return {
                    type: "s/SELECT_STYLE",
                    style: e
                }
            }
            function I() {
                return {
                    type: "s/TGL_OPEN_MENU"
                }
            }
            function x(e) {
                return {
                    type: "SET_HOVER",
                    hover: e
                }
            }
            function N() {
                return {
                    type: "UNSET_HOVER"
                }
            }
            function _(e) {
                return {
                    type: "SET_MOBILE",
                    mobile: e
                }
            }
            function O() {
                return {
                    type: "WIN_RESIZE"
                }
            }
            function P(e) {
                return {
                    type: "SELECT_COLOR",
                    color: e
                }
            }
            function A(e) {
                const t = String(e);
                return (e,n)=>{
                    t !== n().canvas.canvasId && e({
                        type: "s/SELECT_CANVAS",
                        canvasId: t
                    })
                }
            }
            function L(e) {
                return {
                    type: "UPDATE_VIEW",
                    view: e
                }
            }
            function R(e) {
                return {
                    type: "SET_VIEW_COORDINATES",
                    view: e
                }
            }
            function j(e) {
                return {
                    type: "s/SET_MOVE_U",
                    value: e
                }
            }
            function $(e) {
                return {
                    type: "s/SET_MOVE_V",
                    value: e
                }
            }
            function D(e) {
                return {
                    type: "s/SET_MOVE_W",
                    value: e
                }
            }
            function M(e) {
                return {
                    type: "s/CANCEL_MOVE",
                    value: e
                }
            }
            function z(e) {
                return {
                    type: "REQ_BIG_CHUNK",
                    center: e
                }
            }
            function H(e) {
                return {
                    type: "REMOVE_CHUNKS",
                    chunks: e
                }
            }
            function U(e) {
                return {
                    type: "REC_BIG_CHUNK",
                    chunk: e
                }
            }
            function W(e, t) {
                return {
                    type: "REC_BIG_CHUNK_FAILURE",
                    chunk: e,
                    error: t
                }
            }
            function V(e) {
                return {
                    type: "s/REC_ME",
                    ...e
                }
            }
            function G(e) {
                const {ranking: t, dailyRanking: n, dailyCRanking: i, prevTop: o, onlineStats: r, cHistStats: a, cHourlyStats: s, histStats: l, pDailyStats: c, pHourlyStats: u, cooldownChanges: d} = e;
                return {
                    type: "REC_STATS",
                    totalRanking: t,
                    totalDailyRanking: n,
                    dailyCRanking: i,
                    prevTop: o,
                    onlineStats: r,
                    cHistStats: a,
                    cHourlyStatsOrdered: s,
                    histStats: l,
                    pDailyStats: c,
                    pHourlyStats: u,
                    cooldownChanges: d
                }
            }
            function F(e, t) {
                return {
                    type: "s/REQ_CHAT_MESSAGE",
                    text: e,
                    channel: t
                }
            }
            function B() {
                return {
                    type: "s/LOGOUT"
                }
            }
            function Z(e) {
                return {
                    type: "s/LOGIN",
                    ...e
                }
            }
            function K(e) {
                return {
                    type: "s/SET_NAME",
                    name: e
                }
            }
            function Y(e) {
                return {
                    type: "s/SET_MAILREG",
                    mailreg: e
                }
            }
            function q(e) {
                return {
                    type: "MARK_CHANNEL_AS_READ",
                    cid: e
                }
            }
            function X() {
                return (e,t)=>{
                    setInterval((function() {
                        const n = function(e) {
                            const t = []
                              , n = Date.now()
                              , {wait: i} = e.user
                              , o = i - n;
                            return null != i && (o > 0 ? t.push(function(e) {
                                return {
                                    type: "COOLDOWN_SET",
                                    coolDown: e
                                }
                            }(o)) : t.push({
                                type: "COOLDOWN_END"
                            })),
                            t
                        }(t());
                        e(n)
                    }
                    ), 333)
                }
            }
            function Q(e, t) {
                return {
                    type: "s/BLOCK_USER",
                    userId: e,
                    userName: t
                }
            }
            function J(e, t) {
                return {
                    type: "s/UNBLOCK_USER",
                    userId: e,
                    userName: t
                }
            }
            function ee(e) {
                return {
                    type: "s/SET_BLOCKING_DM",
                    blockDm: e
                }
            }
            function te(e) {
                return {
                    type: "s/SET_PRIVATE",
                    priv: e
                }
            }
            function ne(e) {
                return {
                    type: "s/MUTE_CHAT_CHANNEL",
                    cid: e
                }
            }
            function ie(e) {
                return {
                    type: "s/UNMUTE_CHAT_CHANNEL",
                    cid: e
                }
            }
            function oe(e, t) {
                return {
                    type: "SET_HISTORICAL_TIME",
                    date: e,
                    time: t
                }
            }
            function re() {
                return {
                    type: "RELOAD_URL"
                }
            }
            function ae() {
                return {
                    type: "t/UNLOAD"
                }
            }
            function se(e) {
                const {id: t, name: n, mailreg: i, blockDm: o, userlvl: r} = e.user
                  , {canvases: a} = e.canvas
                  , {blocked: s, channels: l} = e.chat
                  , {ranking: c, dailyRanking: u, totalPixels: d, dailyTotalPixels: h} = e.ranks;
                return {
                    type: "s/REC_ME",
                    blockDm: o,
                    blocked: s,
                    canvases: a,
                    channels: l,
                    dailyRanking: u,
                    dailyTotalPixels: h,
                    id: t,
                    mailreg: i,
                    name: n,
                    ranking: c,
                    totalPixels: d,
                    userlvl: r
                }
            }
            n.d(t, {
                $t: ()=>v,
                Ai: ()=>ee,
                BH: ()=>N,
                Cd: ()=>m,
                Eo: ()=>q,
                F9: ()=>E,
                FI: ()=>a,
                GY: ()=>se,
                GZ: ()=>x,
                Hw: ()=>V,
                IN: ()=>te,
                KB: ()=>b,
                M6: ()=>r,
                MM: ()=>T,
                NK: ()=>L,
                OJ: ()=>M,
                Oh: ()=>P,
                Or: ()=>C,
                Px: ()=>o,
                Qr: ()=>O,
                R4: ()=>S,
                RL: ()=>y,
                Rz: ()=>ae,
                SC: ()=>A,
                TG: ()=>z,
                TX: ()=>B,
                Ti: ()=>k,
                Tl: ()=>G,
                UI: ()=>i,
                WW: ()=>D,
                Xb: ()=>c,
                Y2: ()=>Y,
                _: ()=>h,
                _P: ()=>U,
                bE: ()=>F,
                bv: ()=>_,
                c7: ()=>g,
                fL: ()=>re,
                gH: ()=>f,
                ge: ()=>H,
                jF: ()=>p,
                mW: ()=>j,
                mx: ()=>$,
                nb: ()=>ne,
                o7: ()=>d,
                on: ()=>oe,
                pH: ()=>Z,
                qC: ()=>K,
                qP: ()=>u,
                rf: ()=>Q,
                sW: ()=>W,
                ts: ()=>w,
                u0: ()=>s,
                vN: ()=>I,
                vb: ()=>X,
                w5: ()=>R,
                wC: ()=>ie,
                xK: ()=>l,
                zv: ()=>J
            })
        }
        ,
        395: (e,t,n)=>{
            function i() {
                return {
                    type: "w/CLOSE"
                }
            }
            function o() {
                return {
                    type: "w/OPEN"
                }
            }
            function r(e, t, n, i, o) {
                return (r,a)=>{
                    i = Number(i);
                    const s = a();
                    let l;
                    l = s.windows ? s.windows.windows.some((e=>"CHAT" === e.windowType && !e.hidden)) && Object.values(s.windows.args).some((e=>e.chatChannel === i)) : "CHAT" === s.popup.windowType || s.popup.args.chatChannel === i,
                    r({
                        type: "s/REC_CHAT_MESSAGE",
                        name: e,
                        text: t,
                        country: n,
                        channel: i,
                        user: o,
                        isPing: !1,
                        isRead: l
                    })
                }
            }
            function a(e) {
                return {
                    type: "REC_COOLDOWN",
                    wait: e
                }
            }
            function s(e) {
                return {
                    type: "REC_ONLINE",
                    online: e
                }
            }
            function l(e) {
                return {
                    type: "s/ADD_CHAT_CHANNEL",
                    channel: e
                }
            }
            function c(e) {
                return {
                    type: "s/REMOVE_CHAT_CHANNEL",
                    cid: e
                }
            }
            function u(e) {
                return {
                    type: "SET_PXLS_FETCHING",
                    fetching: e
                }
            }
            function d(e) {
                return e.type = "REC_SET_PXLS",
                e
            }
            n.d(t, {
                $s: ()=>o,
                At: ()=>a,
                W1: ()=>d,
                WV: ()=>i,
                Wm: ()=>s,
                cC: ()=>u,
                dm: ()=>l,
                jg: ()=>c,
                pl: ()=>r
            })
        }
        ,
        669: (e,t,n)=>{
            n.d(t, {
                K6: ()=>m,
                Ox: ()=>p,
                R0: ()=>f,
                TL: ()=>h,
                YB: ()=>c,
                aM: ()=>d,
                eg: ()=>v,
                h4: ()=>y,
                mP: ()=>u,
                oX: ()=>w
            });
            var i = n(631)
              , o = n(403)
              , r = n(395)
              , a = n(940);
            function s(e) {
                return {
                    type: "SET_API_FETCHING",
                    fetching: e
                }
            }
            function l(e) {
                return {
                    type: "s/SET_CHAT_FETCHING",
                    fetching: e
                }
            }
            function c(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                return async n=>{
                    n(s(!0));
                    const a = await (0,
                    i.I6)(e);
                    if ("string" == typeof a)
                        n((0,
                        o.UI)("Direct Message Error", a, "error", "OK"));
                    else {
                        const e = Number(Object.keys(a)[0]);
                        n((0,
                        r.dm)(a)),
                        t && t(e)
                    }
                    n(s(!1))
                }
            }
            function u() {
                return async e=>{
                    const t = await (0,
                    i.K$)();
                    t.errors || e((0,
                    o.Tl)(t))
                }
            }
            function d() {
                return async e=>{
                    const t = await (0,
                    i.A)();
                    t.errors || e((0,
                    o.Hw)(t))
                }
            }
            function h(e) {
                return async t=>{
                    t(l(!0));
                    const n = await (0,
                    i.uw)(e);
                    n ? (setTimeout((()=>{
                        t(l(!1))
                    }
                    ), 500),
                    t(function(e, t) {
                        return {
                            type: "s/REC_CHAT_HISTORY",
                            cid: e,
                            history: t
                        }
                    }(e, n))) : setTimeout((()=>{
                        t(l(!1))
                    }
                    ), 5e3)
                }
            }
            function p(e, t, n) {
                return async r=>{
                    r(s(!0));
                    const a = await (0,
                    i.PS)(e, n);
                    r(a ? (0,
                    o.UI)("User Block Error", a, "error", "OK") : n ? (0,
                    o.rf)(e, t) : (0,
                    o.zv)(e, t)),
                    r(s(!1))
                }
            }
            function f(e) {
                return async t=>{
                    t(s(!0));
                    const n = await (0,
                    i.E1)(e);
                    t(n ? (0,
                    o.UI)("Blocking DMs Error", n, "error", "OK") : (0,
                    o.Ai)(e)),
                    t(s(!1))
                }
            }
            function v(e) {
                return async t=>{
                    t(s(!0));
                    const n = await (0,
                    i.ko)(e);
                    t(n ? (0,
                    o.UI)("Setting User Private Error", n, "error", "OK") : (0,
                    o.IN)(e)),
                    t(s(!1))
                }
            }
            function m(e) {
                return async t=>{
                    t(s(!0));
                    const n = await (0,
                    i.AP)(e);
                    t(n ? (0,
                    o.UI)("Leaving Channel Error", n, "error", "OK") : (0,
                    r.jg)(e)),
                    t(s(!1))
                }
            }
            let g = null;
            function y(e) {
                return t=>{
                    t(function(e) {
                        return {
                            type: "SET_NOTIFICATION",
                            notification: e
                        }
                    }(e)),
                    g && (clearTimeout(g),
                    g = null),
                    g = setTimeout((()=>{
                        t({
                            type: "UNSET_NOTIFICATION"
                        })
                    }
                    ), 1500)
                }
            }
            function w() {
                return (e,t)=>{
                    let n = t().canvas.pencilMode + 1
                      , i = a.PO.HISTORY;
                    window.ssv?.backupurl && (i += 1),
                    n >= i && (n = 0);
                    let r = "Odabir olovke: ";
                    switch (n) {
                    case 0:
                        r += "Odabrana boja";
                        break;
                    case 1:
                        r += "Sa šablona";
                        break;
                    case 2:
                        r += "Iz History mode-a"
                    }
                    e((0,
                    o.F9)(n)),
                    e(y(r))
                }
            }
        }
        ,
        130: (e,t,n)=>{
            n.d(t, {
                s: ()=>i,
                x: ()=>o
            });
            const i = e=>-1 !== e.gui.style.indexOf("dark")
              , o = e=>[e.canvas.is3D, e.gui.showMvmCtrls || e.user.isOnMobile && (e.canvas.is3D || e.gui.holdPaint > 0 && !e.canvas.isHistoricalView)]
        }
        ,
        802: (e,t,n)=>{
            n.d(t, {
                Z: ()=>i
            });
            const i = class {
                recUpdates = !1;
                timestamp;
                z;
                i;
                j;
                constructor(e, t, n) {
                    this.timestamp = Date.now(),
                    this.z = e,
                    this.i = t,
                    this.j = n
                }
                get id() {
                    return this.i << 8 | this.j
                }
                touch() {
                    this.timestamp = Date.now()
                }
                destructor() {}
            }
        }
        ,
        686: (e,t,n)=>{
            n.d(t, {
                Z: ()=>r
            });
            var i = n(403)
              , o = n(940);
            const r = class {
                #t;
                #o = new Map;
                #r;
                constructor(e, t) {
                    this.#t = e,
                    this.#r = t
                }
                get canvasId() {
                    return this.#r
                }
                get recChunkIds() {
                    const e = [];
                    return this.#o.forEach((t=>{
                        t.recUpdates && e.push(t.id)
                    }
                    )),
                    e
                }
                destructor() {
                    this.#o.forEach((e=>{
                        e.destructor()
                    }
                    )),
                    this.#o = new Map
                }
                cget(e) {
                    return this.#o.get(e)
                }
                cset(e, t) {
                    this.#o.set(e, t)
                }
                bcReqChunk(e) {
                    const {z: t, i: n, j: o} = e;
                    this.#t.dispatch((0,
                    i.TG)([t, n, o]))
                }
                bcRecChunk(e) {
                    this.#t.dispatch((0,
                    i._P)(e));
                    const {size: t} = this.#o;
                    if (t > o.U4) {
                        const e = t - Math.floor(.9 * o.U4)
                          , n = Array.from(this.#o.entries()).sort(((e,t)=>e[1].timestamp - t[1].timestamp)).slice(0, e);
                        n.forEach((e=>{
                            let[t] = e;
                            this.#o.delete(t)
                        }
                        ));
                        const i = n.map((e=>e[1]));
                        this.bcRemoveChunks(i),
                        console.log(`Cleared ${i.length} to cut amount of chunks to ${this.#o.size}`)
                    }
                }
                bcReqChunkFail(e, t) {
                    this.#t.dispatch((0,
                    i.sW)(e, t.message))
                }
                bcRemoveChunks(e) {
                    this.#t.dispatch((0,
                    i.ge)(e))
                }
                gc(e) {
                    const t = Date.now() - o.WF
                      , n = this.#o
                      , i = [];
                    n.forEach(((o,r)=>{
                        if (t > o.timestamp) {
                            const {z: t, i: a, j: s} = o;
                            e.isChunkInView(t, a, s) || (i.push(o),
                            n.delete(r),
                            o.destructor())
                        }
                    }
                    )),
                    i.length && this.bcRemoveChunks(i),
                    console.log(`GC cleaned ${i.length} / ${n.size + i.length} chunks`)
                }
            }
        }
        ,
        906: (e,t,n)=>{
            n.d(t, {
                Z: ()=>a
            });
            var i = n(403)
              , o = n(395)
              , r = n(669);
            const a = new class {
                constructor() {
                    this.requestFromQueue = this.requestFromQueue.bind(this),
                    this.pixelQueue = [],
                    this.clientPredictions = [],
                    this.extension = null,
                    window.registerPixelUpdates = e=>{
                        this.extension = e
                    }
                }
                initialize(e, t, n) {
                    this.store = e,
                    this.socketClient = t,
                    this.getRenderer = n
                }
                async requestFromQueue() {
                    const {store: e} = this;
                    if (!this.pixelQueue.length)
                        return void e.dispatch((0,
                        o.cC)(!1));
                    e.dispatch((0,
                    o.cC)(!0));
                    const {i: t, j: n, pixels: a} = this.pixelQueue.shift();
                    let s;
                    try {
                        s = await this.socketClient.sendPixelUpdate(t, n, a)
                    } catch {
                        s = {
                            retCode: 16,
                            coolDownSeconds: 0,
                            pxlCnt: 0
                        },
                        e.dispatch((0,
                        i.UI)("Pauza", "Nisam dobio odgovor od pixelplaneta. Možda pokušati osvježiti ako se problem nastavi.", "error"))
                    }
                    const {retCode: l, coolDownSeconds: c, pxlCnt: u} = s;
                    if (c && e.dispatch((0,
                    r.h4)(c)),
                    u < a.length) {
                        const [e] = a[u];
                        this.revertPredictionsAt(t, n, e),
                        this.pixelQueue = []
                    }
                    let d = null
                      , h = null
                      , p = "error";
                    switch (l) {
                    case 0:
                    case 9:
                        break;
                    case 1:
                        d = "Nevažeće platno",
                        h = "Ovo platno ne postoji";
                        break;
                    case 2:
                        d = "Nevažeće koordinate",
                        h = "x izvan granica";
                        break;
                    case 3:
                        d = "Nevažeće koordinate",
                        h = "y izvan granica";
                        break;
                    case 4:
                        d = "Nevažeće koordinate",
                        h = "z izvan granica";
                        break;
                    case 5:
                        d = "Pogrešna boja",
                        h = "Odabrana je nevažeća boja";
                        break;
                    case 6:
                        d = "Samo za registrirane korisnike",
                        h = "Morate biti prijavljeni da postavite na ovo platno";
                        break;
                    case 7:
                        d = "Nije dozvoljeno",
                        h = "Još ne možete pristupiti ovom platnu. Morate postaviti više piksela";
                        break;
                    case 8:
                        e.dispatch((0,
                        r.h4)("Pixel zaštićen"));
                        break;
                    case 10:
                        d = "Captcha",
                        h = "Molimo dokažite da ste čovjek",
                        p = "captcha";
                        break;
                    case 11:
                        d = "Nije dozvoljeno",
                        h = "Koristite proxy.";
                        break;
                    case 12:
                        d = "Nije dozvoljeno",
                        h = "Ovdje može postavljati samo Top10 igrača od jučer";
                        break;
                    case 13:
                        d = "Čudni ste",
                        h = "Vaši pikseli su zbunili poslužitelja. Igrate li na više uređaja?";
                        break;
                    case 14:
                        d = "Zabranjeni ste",
                        p = "ban";
                        break;
                    case 15:
                        d = "Rasponski banani",
                        h = "Vašem internet davatelju zabranjeno je igrati ovu igricu";
                        break;
                    case 16:
                        d = "Pauza",
                        h = "Nisam dobio odgovor od pixelplaneta. Možda pokušati osvježiti ako se problem nastavi.";
                        break;
                    default:
                        d = "Čudno",
                        h = "Nije moguće postaviti Pixel"
                    }
                    (h || d) && e.dispatch((0,
                    i.UI)(d || `Pogreška ${l}`, h, p)),
                    e.dispatch((0,
                    o.W1)(s)),
                    setTimeout(this.requestFromQueue, 100)
                }
                revertPredictionsAt(e, t, n) {
                    const i = this.getRenderer()
                      , {clientPredictions: o} = this;
                    let r = 0;
                    for (; r < o.length; ) {
                        const i = o[r];
                        if (i[0] === e && i[1] === t && i[2] === n)
                            break;
                        r += 1
                    }
                    const a = r;
                    for (; r < o.length; ) {
                        const [e,t,n,a] = o[r];
                        i.renderPixel(e, t, n, a, !1),
                        r += 1
                    }
                    this.clientPredictions.splice(a)
                }
                receivePixelUpdate(e) {
                    let {i: t, j: n, pixels: i} = e;
                    this.extension && this.extension(t, n, i),
                    i.forEach((e=>{
                        const [i,o] = e
                          , {clientPredictions: r} = this;
                        for (let e = 0; e < r.length; e += 1) {
                            const a = r[e];
                            if (a[0] === t && a[1] === n && a[2] === i)
                                return void (a[4] === o ? r.splice(e, 1) : a[3] = o)
                        }
                        this.getRenderer().renderPixel(t, n, i, o, !0)
                    }
                    ))
                }
                tryPlacePixel(e, t, n, i, o) {
                    this.getRenderer().renderPixel(e, t, n, i, !1),
                    this.clientPredictions.push([e, t, n, o, i]);
                    const {pixelQueue: r} = this;
                    if (r.length) {
                        const o = r[r.length - 1]
                          , {i: a, j: s} = o;
                        if (e === a && t === s)
                            return void o.pixels.push([n, i])
                    }
                    r.push({
                        i: e,
                        j: t,
                        pixels: [[n, i]]
                    }),
                    this.store.getState().fetching.fetchingPixel || this.requestFromQueue()
                }
            }
        }
        ,
        785: (e,t,n)=>{
            n.d(t, {
                Z: ()=>r
            });
            var i = n(940)
              , o = n(403);
            const r = class {
                store;
                controls = {
                    update() {}
                };
                chunkLoader = null;
                is3D = null;
                forceNextRender = !0;
                forceNextSubrender = !0;
                _view = [0, 0, 0];
                #a = null;
                constructor(e) {
                    this.store = e
                }
                get view() {
                    return [...this._view]
                }
                get chunks() {
                    return this.chunkLoader.chunks
                }
                get recChunkIds() {
                    return this.chunkLoader ? this.chunkLoader.recChunkIds : []
                }
                destructor() {
                    this.chunkLoader?.destructor(),
                    this.cancelStoreViewInState()
                }
                updateView(e) {
                    for (let t = 0; t < e.length; t += 1)
                        this._view[t] = e[t]
                }
                loadViewFromState() {
                    this.store && this.updateView(this.store.getState().canvas.view)
                }
                cancelStoreViewInState() {
                    this.#a && (clearTimeout(this.#a),
                    this.#a = null)
                }
                storeViewInState() {
                    this.store && (this.cancelStoreViewInState(),
                    this.#a = setTimeout((()=>{
                        this.#a = null,
                        this.store.dispatch((0,
                        o.NK)(this.view))
                    }
                    ), i.wL))
                }
                render() {
                    return this.controls.update(this.forceNextRender)
                }
                renderPixel() {}
                updateCanvasData() {}
                getPointedColor() {
                    return null
                }
                isChunkInView() {
                    return !0
                }
                gc() {
                    this.chunkLoader?.gc(this)
                }
            }
        }
        ,
        917: (e,t,n)=>{
            async function i(e) {
                e.toBlob((e=>{
                    try {
                        if (!navigator.clipboard)
                            throw new Error("Clipboard API not implemented");
                        navigator.clipboard.write([new ClipboardItem({
                            "image/png": e
                        })])
                    } catch (e) {
                        console.log("Couldn't copy canvas to clipboard", e)
                    }
                }
                ), "image/png")
            }
            n.d(t, {
                Z: ()=>o,
                w: ()=>i
            });
            const o = async function(e) {
                if (!navigator.clipboard)
                    return function(e) {
                        const t = document.createElement("textarea");
                        t.value = e,
                        t.style.top = "0",
                        t.style.left = "0",
                        t.style.position = "fixed",
                        document.body.appendChild(t),
                        t.focus(),
                        t.select();
                        try {
                            const e = document.execCommand("copy");
                            return document.body.removeChild(t),
                            e
                        } catch {
                            return document.body.removeChild(t),
                            !1
                        }
                    }(e);
                try {
                    return await navigator.clipboard.writeText(e),
                    !0
                } catch {
                    return !1
                }
            }
        }
        ,
        875: (e,t,n)=>{
            function i(e) {
                const t = document.createElement("canvas");
                return t.width = e.naturalWidth,
                t.height = e.naturalHeight,
                t.getContext("2d").drawImage(e, 0, 0),
                t
            }
            function o(e) {
                return new Promise(((t,n)=>{
                    const o = new FileReader;
                    o.onload = ()=>{
                        const e = new Image;
                        e.onload = ()=>{
                            t(i(e))
                        }
                        ,
                        e.onerror = e=>n(e),
                        e.src = o.result
                    }
                    ,
                    o.onerror = e=>n(e),
                    o.readAsDataURL(e)
                }
                ))
            }
            function r(e, t) {
                return o(new Blob([e],{
                    type: t
                }))
            }
            function a(e, t) {
                return new Promise(((n,i)=>{
                    e.toBlob((e=>{
                        e.arrayBuffer().then(n).catch(i)
                    }
                    ), t)
                }
                ))
            }
            n.d(t, {
                NE: ()=>o,
                NF: ()=>r,
                nE: ()=>a,
                zE: ()=>i
            })
        }
    }, o = {};
    function r(e) {
        var t = o[e];
        if (void 0 !== t)
            return t.exports;
        var n = o[e] = {
            exports: {}
        };
        return i[e](n, n.exports, r),
        n.exports
    }
    r.m = i,
    e = [],
    r.O = (t,n,i,o)=>{
        if (!n) {
            var a = 1 / 0;
            for (u = 0; u < e.length; u++) {
                for (var [n,i,o] = e[u], s = !0, l = 0; l < n.length; l++)
                    (!1 & o || a >= o) && Object.keys(r.O).every((e=>r.O[e](n[l]))) ? n.splice(l--, 1) : (s = !1,
                    o < a && (a = o));
                if (s) {
                    e.splice(u--, 1);
                    var c = i();
                    void 0 !== c && (t = c)
                }
            }
            return t
        }
        o = o || 0;
        for (var u = e.length; u > 0 && e[u - 1][2] > o; u--)
            e[u] = e[u - 1];
        e[u] = [n, i, o]
    }
    ,
    r.n = e=>{
        var t = e && e.__esModule ? ()=>e.default : ()=>e;
        return r.d(t, {
            a: t
        }),
        t
    }
    ,
    r.d = (e,t)=>{
        for (var n in t)
            r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
    }
    ,
    r.f = {},
    r.e = e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e, t),
    t)), [])),
    r.u = e=>841 === e ? "three.ecfefae6.js" : {
        189: "modtools",
        545: "converter",
        784: "stats",
        882: "voxel"
    }[e] + ".hr." + {
        189: "1194b64b",
        545: "c06b83b3",
        784: "1560ee15",
        882: "100ed264"
    }[e] + ".js",
    r.o = (e,t)=>Object.prototype.hasOwnProperty.call(e, t),
    t = {},
    n = "PixelPlanet:",
    r.l = (e,i,o,a)=>{
        if (t[e])
            t[e].push(i);
        else {
            var s, l;
            if (void 0 !== o)
                for (var c = document.getElementsByTagName("script"), u = 0; u < c.length; u++) {
                    var d = c[u];
                    if (d.getAttribute("src") == e || d.getAttribute("data-webpack") == n + o) {
                        s = d;
                        break
                    }
                }
            s || (l = !0,
            (s = document.createElement("script")).charset = "utf-8",
            s.timeout = 120,
            r.nc && s.setAttribute("nonce", r.nc),
            s.setAttribute("data-webpack", n + o),
            s.src = e),
            t[e] = [i];
            var h = (n,i)=>{
                s.onerror = s.onload = null,
                clearTimeout(p);
                var o = t[e];
                if (delete t[e],
                s.parentNode && s.parentNode.removeChild(s),
                o && o.forEach((e=>e(i))),
                n)
                    return n(i)
            }
              , p = setTimeout(h.bind(null, void 0, {
                type: "timeout",
                target: s
            }), 12e4);
            s.onerror = h.bind(null, s.onerror),
            s.onload = h.bind(null, s.onload),
            l && document.head.appendChild(s)
        }
    }
    ,
    r.r = e=>{
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    r.j = 47,
    r.p = "/assets/",
    (()=>{
        var e = {
            47: 0
        };
        r.f.j = (t,n)=>{
            var i = r.o(e, t) ? e[t] : void 0;
            if (0 !== i)
                if (i)
                    n.push(i[2]);
                else {
                    var o = new Promise(((n,o)=>i = e[t] = [n, o]));
                    n.push(i[2] = o);
                    var a = r.p + r.u(t)
                      , s = new Error;
                    r.l(a, (n=>{
                        if (r.o(e, t) && (0 !== (i = e[t]) && (e[t] = void 0),
                        i)) {
                            var o = n && ("load" === n.type ? "missing" : n.type)
                              , a = n && n.target && n.target.src;
                            s.message = "Loading chunk " + t + " failed.\n(" + o + ": " + a + ")",
                            s.name = "ChunkLoadError",
                            s.type = o,
                            s.request = a,
                            i[1](s)
                        }
                    }
                    ), "chunk-" + t, t)
                }
        }
        ,
        r.O.j = t=>0 === e[t];
        var t = (t,n)=>{
            var i, o, [a,s,l] = n, c = 0;
            if (a.some((t=>0 !== e[t]))) {
                for (i in s)
                    r.o(s, i) && (r.m[i] = s[i]);
                if (l)
                    var u = l(r)
            }
            for (t && t(n); c < a.length; c++)
                o = a[c],
                r.o(e, o) && e[o] && e[o][0](),
                e[o] = 0;
            return r.O(u)
        }
          , n = self.webpackChunkPixelPlanet = self.webpackChunkPixelPlanet || [];
        n.forEach(t.bind(null, 0)),
        n.push = t.bind(null, n.push.bind(n))
    }
    )();
    var a = r.O(void 0, [736], (()=>r(268)));
    a = r.O(a)
}
)();
