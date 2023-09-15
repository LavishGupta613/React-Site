window[window["TiktokAnalyticsObject"]]._env = {
    "env": "external",
    "key": ""
};
window[window["TiktokAnalyticsObject"]]._variation_id = 'test_3';;
if (!window[window["TiktokAnalyticsObject"]]._server_unique_id) window[window["TiktokAnalyticsObject"]]._server_unique_id = 'b2f5b06b-53d4-11ee-8187-08c0eb80308c';
window[window["TiktokAnalyticsObject"]]._plugins = {
    "AdvancedMatching": true,
    "AutoAdvancedMatching": true,
    "AutoConfig": true,
    "Callback": true,
    "DiagnosticsConsole": true,
    "Identify": true,
    "Monitor": false,
    "PangleCookieMatching": true,
    "PerformanceInteraction": false,
    "Shopify": true,
    "WebFL": false
};
window[window["TiktokAnalyticsObject"]]._aam = {
    "in_form": false,
    "selectors": {
        "[class*=Btn]": 9,
        "[class*=Button]": 11,
        "[class*=btn]": 8,
        "[class*=button]": 10,
        "[id*=Btn]": 14,
        "[id*=Button]": 16,
        "[id*=btn]": 13,
        "[id*=button]": 15,
        "[role*=button]": 12,
        "button[type='button']": 6,
        "button[type='menu']": 7,
        "button[type='reset']": 5,
        "button[type='submit']": 4,
        "input[type='button']": 1,
        "input[type='image']": 2,
        "input[type='submit']": 3
    },
    "exclude_selectors": ["[class*=cancel]", "[role*=cancel]", "[id*=cancel]", "[class*=back]", "[role*=back]", "[id*=back]", "[class*=return]", "[role*=return]", "[id*=return]"],
    "phone_regex": "^\\+?[0-9\\-\\.\\(\\)\\s]{7,25}$",
    "phone_selectors": ["phone", "mobile", "contact", "pn"],
    "restricted_keywords": ["ssn", "unique", "cc", "card", "cvv", "cvc", "cvn", "creditcard", "billing", "security", "social", "pass", "zip", "address", "license", "gender", "health", "age", "nationality", "party", "sex", "political", "affiliation", "appointment", "politics", "family", "parental"]
};
window[window["TiktokAnalyticsObject"]]._auto_config = {
    "open_graph": ["audience"],
    "microdata": ["audience"],
    "json_ld": ["audience"],
    "meta": null
};
! function() {
    function i() {
        return window && window.TiktokAnalyticsObject || "ttq"
    }

    function t() {
        return window && window[i()]
    }
    var n, o, e, a, c, r = [{
            id: "MTE1ODM4MDNhMA",
            map: {
                AutoAdvancedMatching: !1,
                Shopify: !1,
                Monitor: !1
            }
        }, {
            id: "MTE1ODM4MDNhMQ",
            map: {
                AutoAdvancedMatching: !0,
                Shopify: !1,
                Monitor: !1
            }
        }, {
            id: "MTE1ODM4MDNhMg",
            map: {
                AutoAdvancedMatching: !1,
                Shopify: !0,
                Monitor: !1
            }
        }, {
            id: "MTE1ODM4MDNhMw",
            map: {
                AutoAdvancedMatching: !0,
                Shopify: !0,
                Monitor: !1
            }
        }, {
            id: "MTE1ODM4MDNhNA",
            map: {
                AutoAdvancedMatching: !1,
                Shopify: !1,
                Monitor: !0
            }
        }, {
            id: "MTE1ODM4MDNhNQ",
            map: {
                AutoAdvancedMatching: !0,
                Shopify: !1,
                Monitor: !0
            }
        }, {
            id: "MTE1ODM4MDNhNg",
            map: {
                AutoAdvancedMatching: !1,
                Shopify: !0,
                Monitor: !0
            }
        }, {
            id: "MTE1ODM4MDNhNw",
            map: {
                AutoAdvancedMatching: !0,
                Shopify: !0,
                Monitor: !0
            }
        }],
        d = {
            "info": {
                "pixelCode": "CC6UAQBC77U7GVKHLC4G",
                "name": "Creative Tim Pixel",
                "status": 0,
                "setupMode": 0,
                "partner": "Shopify",
                "advertiserID": "7137610181667569666",
                "is_onsite": false,
                "firstPartyCookieEnabled": true
            },
            "plugins": {
                "Shopify": true,
                "AdvancedMatching": {
                    "email": false,
                    "phone_number": false
                },
                "AutoAdvancedMatching": {
                    "auto_email": true,
                    "auto_phone_number": true
                },
                "Callback": true,
                "Identify": true,
                "Monitor": true,
                "PerformanceInteraction": true,
                "WebFL": true,
                "AutoConfig": true,
                "DiagnosticsConsole": true,
                "PangleCookieMatching": false
            },
            "rules": []
        },
        M = "https://analytics.tiktok.com/i18n/pixel/static/",
        p = t();
    p || (p = [], window && (window[i()] = p)), Object.assign(d, {
            options: (n = d.info.pixelCode, (o = t()._o) && o[n] || {})
        }),
        function(i) {
            p._i || (p._i = {});
            var t = i.info.pixelCode;
            t && (p._i[t] || (p._i[t] = []), Object.assign(p._i[t], i), p._i[t]._load = +new Date)
        }(d), e = function(i, t, n) {
            var o = 0 < arguments.length && void 0 !== i ? i : {},
                e = 1 < arguments.length ? t : void 0,
                t = 2 < arguments.length ? n : void 0,
                n = function(i, t) {
                    for (var n = 0; n < i.length; n++)
                        if (t.call(null, i[n], n)) return i[n]
                }(r, function(i) {
                    var t = i.map;
                    return function(i, t) {
                        for (var n = 0; n < i.length; n++)
                            if (!t.call(null, i[n], n)) return !1;
                        return !0
                    }(Object.keys(t), function(i) {
                        return !(!o[i] || !e[i]) === t[i]
                    })
                });
            return n ? t + "main.".concat(n.id, ".js") : t + "main.".concat(r[0].id, ".js")
        }(p._plugins, d.plugins, M), a = d.info.pixelCode, (void 0 !== self.DedicatedWorkerGlobalScope ? self instanceof self.DedicatedWorkerGlobalScope : "DedicatedWorkerGlobalScope" === self.constructor.name) ? self.importScripts && self.importScripts(e) : ((c = document.createElement("script")).type = "text/javascript", c.async = !0, c.src = e, c.setAttribute("data-id", a), (a = document.getElementsByTagName("script")[0]) && a.parentNode && a.parentNode.insertBefore(c, a))
}();