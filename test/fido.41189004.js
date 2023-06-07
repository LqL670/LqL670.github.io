!function(e) {
    function t(t) {
        for (var r, a, c = t[0], u = t[1], s = t[2], l = 0, d = []; l < c.length; l++)
            a = c[l],
            Object.prototype.hasOwnProperty.call(i, a) && i[a] && d.push(i[a][0]),
            i[a] = 0;
        for (r in u)
            Object.prototype.hasOwnProperty.call(u, r) && (e[r] = u[r]);
        for (_ && _(t); d.length; )
            d.shift()();
        return o.push.apply(o, s || []),
        n()
    }
    function n() {
        for (var e, t = 0; t < o.length; t++) {
            for (var n = o[t], r = !0, c = 1; c < n.length; c++) {
                var u = n[c];
                0 !== i[u] && (r = !1)
            }
            r && (o.splice(t--, 1),
            e = a(a.s = n[0]))
        }
        return e
    }
    var r = {}
      , i = {
        page: 0
    }
      , o = [];
    function a(t) {
        if (r[t])
            return r[t].exports;
        var n = r[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, a),
        n.l = !0,
        n.exports
    }
    a.e = function(e) {
        var t = []
          , n = i[e];
        if (0 !== n)
            if (n)
                t.push(n[2]);
            else {
                var r = new Promise((function(t, r) {
                    n = i[e] = [t, r]
                }
                ));
                t.push(n[2] = r);
                var o, c = document.createElement("script");
                c.charset = "utf-8",
                c.timeout = 120,
                a.nc && c.setAttribute("nonce", a.nc),
                c.src = function(e) {
                    return a.p + "static/fido/js/" + e + ".fido." + {
                        0: "455f9a86",
                        "resource~cn~de~en~es~fr~hi~id~it~ja~ko~pt~ru~th~vi": "5057e4e7",
                        "resource~cn": "57b661b1",
                        "vendor~cn~de~en~es~fr~hi~id~it~ja~ko~pt~ru~th~vi": "240b0089",
                        "resource~de": "24b9a96b",
                        "resource~en": "3d06da4a",
                        "resource~es": "739517bf",
                        "resource~fr": "5fd232c3",
                        "resource~hi": "16842572",
                        "resource~id": "e71ae9fd",
                        "resource~it": "7e87d0cf",
                        "resource~ja": "80931b04",
                        "resource~ko": "688f1a7f",
                        "resource~pt": "01a91c91",
                        "resource~ru": "f18ab69e",
                        "resource~th": "42b00100",
                        "resource~vi": "2a151529"
                    }[e] + ".js"
                }(e);
                var u = new Error;
                o = function(t) {
                    c.onerror = c.onload = null,
                    clearTimeout(s);
                    var n = i[e];
                    if (0 !== n) {
                        if (n) {
                            var r = t && ("load" === t.type ? "missing" : t.type)
                              , o = t && t.target && t.target.src;
                            u.message = "Loading chunk " + e + " failed.\n(" + r + ": " + o + ")",
                            u.name = "ChunkLoadError",
                            u.type = r,
                            u.request = o,
                            n[1](u)
                        }
                        i[e] = void 0
                    }
                }
                ;
                var s = setTimeout((function() {
                    o({
                        type: "timeout",
                        target: c
                    })
                }
                ), 12e4);
                c.onerror = c.onload = o,
                document.head.appendChild(c)
            }
        return Promise.all(t)
    }
    ,
    a.m = e,
    a.c = r,
    a.d = function(e, t, n) {
        a.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }
    ,
    a.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    a.t = function(e, t) {
        if (1 & t && (e = a(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (a.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var r in e)
                a.d(n, r, function(t) {
                    return e[t]
                }
                .bind(null, r));
        return n
    }
    ,
    a.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return a.d(t, "a", t),
        t
    }
    ,
    a.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    a.p = "",
    a.oe = function(e) {
        throw console.error(e),
        e
    }
    ;
    var c = window.webpackJsonp = window.webpackJsonp || []
      , u = c.push.bind(c);
    c.push = t,
    c = c.slice();
    for (var s = 0; s < c.length; s++)
        t(c[s]);
    var _ = u;
    o.push([376, "vendor~page"]),
    n()
}({
    107: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return S
        }
        )),
        n.d(t, "a", (function() {
            return m
        }
        )),
        n.d(t, "e", (function() {
            return O
        }
        )),
        n.d(t, "c", (function() {
            return h
        }
        )),
        n.d(t, "d", (function() {
            return v
        }
        ));
        var r = n(34)
          , i = n.n(r)
          , o = n(11)
          , a = n.n(o)
          , c = (n(91),
        n(120),
        n(61),
        n(51),
        n(530),
        n(535),
        n(537),
        n(538),
        n(539),
        n(541),
        n(542),
        n(543),
        n(544),
        n(545),
        n(546),
        n(547),
        n(548),
        n(550),
        n(551),
        n(552),
        n(553),
        n(554),
        n(555),
        n(556),
        n(557),
        n(558),
        n(559),
        n(560),
        n(561),
        n(92),
        n(20),
        n(25),
        n(172),
        n(108),
        ["usb", "nfc", "ble", "internal"])
          , u = [{
            type: "public-key",
            alg: -7
        }, {
            type: "public-key",
            alg: -35
        }, {
            type: "public-key",
            alg: -36
        }, {
            type: "public-key",
            alg: -65535
        }, {
            type: "public-key",
            alg: -257
        }, {
            type: "public-key",
            alg: -258
        }, {
            type: "public-key",
            alg: -259
        }, {
            type: "public-key",
            alg: -37
        }, {
            type: "public-key",
            alg: -38
        }, {
            type: "public-key",
            alg: -39
        }, {
            type: "public-key",
            alg: -8
        }];
        function s(e) {
            return window.btoa(unescape(encodeURIComponent(e))).replace(/\+/g, "-").replace(/\//g, "_").replace(/[=]/g, "")
        }
        function _(e) {
            return decodeURIComponent(escape(window.atob(e.replace(/-/g, "+").replace(/_/g, "/").replace(/[=]/g, ""))))
        }
        function l(e) {
            return btoa(String.fromCharCode.apply(null, new Uint8Array(e))).replace(/\+/g, "-").replace(/\//g, "_").replace(/[=]/g, "")
        }
        function d(e) {
            return Uint8Array.from(atob(e), (function(e) {
                return e.charCodeAt(0)
            }
            ))
        }
        function f(e) {
            var t = [];
            t = null != e.credential_parameters ? e.credential_parameters.map((function(e) {
                return {
                    type: e.type,
                    alg: e.algorithm
                }
            }
            )) : u;
            var n = [];
            return null != e.credential_exclude_list && (n = e.credential_exclude_list.map((function(e) {
                var t = [];
                return t = null != (null == e ? void 0 : e.transports) ? e.transports.filter((function(e) {
                    return c.includes(e)
                }
                )) : ["internal"],
                {
                    type: (null == e ? void 0 : e.type) || "public-key",
                    id: d(e.id),
                    transports: t
                }
            }
            ))),
            {
                publicKey: {
                    challenge: d(e.challenge),
                    rp: {
                        name: e.relying_party_entity.name,
                        id: e.relying_party_entity.id
                    },
                    user: {
                        id: d(e.user_entity.id),
                        name: e.user_entity.name,
                        displayName: e.user_entity.display_name
                    },
                    authenticatorSelection: {
                        authenticatorAttachment: e.authenticator_selection.attachment,
                        residentKey: e.authenticator_selection.resident_key,
                        requireResidentKey: e.authenticator_selection.require_resident_key,
                        userVerification: e.authenticator_selection.user_verification
                    },
                    attestation: e.attestation_preference,
                    pubKeyCredParams: t,
                    timeout: e.timeout,
                    excludeCredentials: n,
                    extension: e.extensions
                }
            }
        }
        function p(e) {
            var t = e.getClientExtensionResults();
            0 === Object.keys(t).length && (t = null);
            var n = [];
            return e.response.getTransports && (n = e.response.getTransports()),
            {
                credential_creation_data: {
                    id: e.id,
                    raw_id: l(new Uint8Array(e.rawId)),
                    attestation_response: {
                        attestation_object: l(new Uint8Array(e.response.attestationObject)),
                        client_data_json: l(new Uint8Array(e.response.clientDataJSON))
                    },
                    transports: n,
                    type: e.type,
                    extensions: t
                }
            }
        }
        function E(e) {
            var t = [];
            return null != e.allowed_credentials && (t = e.allowed_credentials.map((function(e) {
                var t = [];
                return null != e.transports && (t = e.transports.filter((function(e) {
                    return c.includes(e)
                }
                ))),
                {
                    type: "public-key",
                    id: d(e.id),
                    transports: t
                }
            }
            ))),
            {
                publicKey: {
                    challenge: d(e.challenge),
                    timeout: e.timeout,
                    rpId: e.rp_id,
                    allowCredentials: t,
                    userVerification: e.user_verification,
                    extension: e.extensions
                }
            }
        }
        function g(e, t, n) {
            var r = {
                credential_assertion_response: {
                    id: e.id,
                    raw_id: l(new Uint8Array(e.rawId)),
                    response: {
                        authenticator_data: l(new Uint8Array(e.response.authenticatorData)),
                        client_data_json: l(new Uint8Array(e.response.clientDataJSON)),
                        signature: l(new Uint8Array(e.response.signature)),
                        user_handle: l(new Uint8Array(e.response.user_handle))
                    },
                    type: e.type,
                    extensions: e.getClientExtensionResults()
                }
            };
            return null != t && (r.credential_assertion_response.authSession = t),
            null != n && (r.credential_assertion_response.origin = n),
            r
        }
        function S() {
            return null !== window && window.PublicKeyCredential && "function" == typeof window.PublicKeyCredential
        }
        function m() {
            return S() && window.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable && window.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable().then((function(e) {
                return e
            }
            ))
        }
        function O(e) {
            var t, n = JSON.parse(_(e));
            return null == n || null === (t = n.user_entity) || void 0 === t ? void 0 : t.id
        }
        function h(e) {
            return T.apply(this, arguments)
        }
        function T() {
            return (T = i()(a.a.mark((function e(t) {
                var n, r, i, o, c;
                return a.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = JSON.parse(_(t)),
                            r = f(n),
                            e.next = 7,
                            navigator.credentials.create(r);
                        case 7:
                            return i = e.sent,
                            o = p(i),
                            c = s(JSON.stringify(o)),
                            e.abrupt("return", c);
                        case 13:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function v(e) {
            return I.apply(this, arguments)
        }
        function I() {
            return (I = i()(a.a.mark((function e(t) {
                var n, r, i, o, c;
                return a.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = JSON.parse(_(t)),
                            r = E(n),
                            e.next = 7,
                            navigator.credentials.get(r);
                        case 7:
                            return i = e.sent,
                            o = g(i),
                            c = s(JSON.stringify(o)),
                            e.abrupt("return", c);
                        case 13:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
    },
    128: function(e, t, n) {
        "use strict";
        (function(e) {
            n.d(t, "c", (function() {
                return u
            }
            )),
            n.d(t, "a", (function() {
                return s
            }
            )),
            n.d(t, "b", (function() {
                return _
            }
            ));
            n(20),
            n(19),
            n(25),
            n(22),
            n(23),
            n(29),
            n(21),
            n(1),
            n(61),
            n(51),
            n(69),
            n(86),
            n(278),
            n(92),
            n(91),
            n(198),
            n(194),
            n(196),
            n(246),
            n(287),
            n(79),
            n(172),
            n(280),
            n(283),
            n(120),
            n(24),
            n(277),
            n(199),
            n(108),
            n(331);
            var r = n(5)
              , i = (n(332),
            n(333),
            n(126),
            n(57),
            n(2))
              , o = (n(9),
            n(163),
            n(334),
            n(4),
            n(3));
            n(89),
            n(41),
            n(32);
            var a = new URL(location.href).searchParams
              , c = function() {
                var e = window.location.pathname.split("/")[1]
                  , t = {
                    zh: r.SuiteLanguages.ZH_CN,
                    en: r.SuiteLanguages.EN_US,
                    ja: r.SuiteLanguages.JA_JP,
                    ja_jp: r.SuiteLanguages.JA_JP
                };
                return e && t[e] ? t[e] : ""
            };
            function u() {
                var e, t = ([function() {
                    return r.suiteLang.toValid(c())
                }
                , function() {
                    return r.suiteLang.toValid(a.get("locale"))
                }
                , function() {
                    return r.suiteLang.toValid(a.get("lang"))
                }
                , function() {
                    return !o.h && r.suiteLang.get()
                }
                , function() {
                    try {
                        var e;
                        return null !== (e = navigator.languages) && void 0 !== e && e.length ? navigator.languages[0] : navigator.language
                    } catch (t) {
                        return r.SuiteLanguages.EN_US
                    }
                }
                ].find((function(t) {
                    return e = t()
                }
                )),
                (e = r.suiteLang.toValid(Object(r.toStandardLang)(e))) || (e = r.SuiteLanguages.EN_US),
                e);
                return r.suiteLang.get() && r.suiteLang.get() === t || r.suiteLang.set(t),
                t
            }
            var s = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                if (window.KAConfig) {
                    var n, r = (null === (n = window.KAConfig) || void 0 === n ? void 0 : n.channel) || "";
                    if (["mi", "kami"].includes(r)) {
                        var i = {
                            "zh-CN": "小米办公",
                            "en-US": "Miwork",
                            "ja-JP": "Miwork"
                        };
                        return i[t]
                    }
                }
                var o = e ? {
                    "zh-CN": " Lark "
                } : {
                    "zh-CN": "飞书",
                    "zh-TW": "飛書",
                    "zh-HK": "飛書"
                };
                return o[t] || (e ? "Lark" : "Feishu")
            }
              , _ = function() {
                var e = window.location.pathname;
                if (e.includes("confirm"))
                    return i.e.CONFIRM;
                if (window.serverInjectRes) {
                    var t = window.serverInjectRes.data
                      , n = (void 0 === t ? {} : t).next_step;
                    if (n && n === i.b.USER_CONFIRM)
                        return i.e.CONFIRM
                }
                return e.includes("authorize") ? i.e.CONFIRM : e.includes("create") ? i.e.REGISTER : e.includes("abnormal") ? i.e.ABNORMAL : e.includes("login") ? i.e.LOGIN : e.includes("ug_register") ? i.e.UG_REGISTER : e.includes("global_register") ? i.e.LARK_REGISTER : e.includes("linked_logout") ? i.e.LOGOUT : i.e.LOGIN
            }
        }
        ).call(this, n(87).default)
    },
    163: function(e, t, n) {
        "use strict";
        var r;
        n.d(t, "a", (function() {
            return r
        }
        )),
        function(e) {
            e.SWITCH_TOAST_FIRST_SHOW = "SWITCH_TOAST_FIRST_SHOW",
            e.ACCOUNT_TYPE = "accountType",
            e.CREDENTIAL_TYPE = "credential_type",
            e.STAY_LOGIN = "stay-login",
            e.REGION_CODE = "regionCode",
            e.SWITCH_USER_ID = "passport_switch_user_id",
            e.LOGIN_MOD = "login_mod",
            e.QUIT_TEAM_REASON = "QUIT_TEAM_REASON",
            e.X_PROXY_UNIT = "X_PROXY_UNIT",
            e.CONFIG_CACHE = "passport_config",
            e.DEFAULT_HOST_NAME = "current_sso_host",
            e.LAST_CREDENTIAL_VERIFY_TYPE = "last_credential_verify_type_new",
            e.LARK_GLOBAL_CONFIG_CACHE = "lark_global_config_cache"
        }(r || (r = {}))
    },
    2: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return i
        }
        )),
        n.d(t, "a", (function() {
            return o
        }
        )),
        n.d(t, "e", (function() {
            return c
        }
        )),
        n.d(t, "d", (function() {
            return f
        }
        )),
        n.d(t, "c", (function() {
            return E
        }
        ));
        var r, i, o, a, c, u, s, _ = n(1), l = n.n(_);
        !function(e) {
            e.LOGIN = "login",
            e.PRE_SUBMIT_CREDENTIAL = "pre_submit_credential",
            e.REGISTER = "register",
            e.UG_REGISTER = "ug_register",
            e.UG_REGISTER_NEW = "ug_register_new",
            e.DISPATCH_SET_NAME = "dispatch_set_name",
            e.LARK_REGISTER = "lark_register",
            e.BIND_CONTACT = "bind_contact",
            e.JOIN_TENANT_CONFIRM = "join_tenant_confirm",
            e.SCAN = "scan",
            e.SCAN_SUCCESS = "scan_success",
            e.SUCCESS_C = "success_c",
            e.SUCCESS_B = "success_b",
            e.INVITE_MEMBERS = "invite_members",
            e.INVITE_SUCCESS = "invite_success",
            e.VERIFY_IDENTITY = "verify_identity",
            e.USER_LIST = "user_list",
            e.TENANT_CREATE = "tenant_create",
            e.TENANT_UPGRADE = "tenant_upgrade",
            e.CHOOSE_OR_CREATE = "choose_or_create",
            e.USER_CONFIRM = "user_confirm",
            e.WEB_URL = "web_url",
            e.LOGIN_APP = "login_app",
            e.SET_PWD = "set_pwd",
            e.SET_NAME = "set_name",
            e.DISPATCH_NEXT = "dispatch_next",
            e.OFFICIAL_EMAIL = "official_email",
            e.JOIN_TENANT = "join_tenant",
            e.JOIN_TENANT_CODE = "join_tenant_code",
            e.PENDING_APPROVE = "pending_approve",
            e.REGISTER_SUCCESS = "register_success",
            e.IDP_AUTHENTICATION = "idp_authentication",
            e.SWITCH_TENANT = "switch_tenant",
            e.SWITCH_VERIFY_PWD = "switch_verify_pwd",
            e.SWITCH_VERIFY_CODE = "switch_verify_code",
            e.SWITCH_CHOOSE_VERIFY_TYPE = "switch_choose_verify_type",
            e.SWITCH_VERIFY_IDENTITY = "switch_verify_identity",
            e.QUIT_TEAM_CHECK = "quit_team_check",
            e.QUIT_TEAM_REASON = "quit_team_reason",
            e.QUIT_TEAM_CP_LIST = "quit_team_cp_list",
            e.QUIT_TEAM_VERIFY = "quit_team_verify",
            e.IDP_VERIFICATION = "idp_verification",
            e.BANK_CARD_VERIFICATION = "recover_account_bank",
            e.REAL_NAME_VERIFICATION = "real_name_verification",
            e.RECOVERY_SET_PHONE = "set_input_credential",
            e.GUEST_LOGIN = "guest_login",
            e.EMAIL_LINK = "magic_link",
            e.APPLINK_SSO_LOGIN = "applink_sso_login",
            e.EDU_APPLICATION_FORM = "application_form",
            e.EDU_VERIFY_PHONE = "verify_phone",
            e.EDU_REPEAT_STUDENTS = "repeat_students",
            e.EDU_SUBMIT_RESULTS = "submit_results",
            e.ENTER_APP = "enter_app",
            e.SET_CONTACT = "set_contact",
            e.ACCOUNT_APPEAL = "account_appeal",
            e.CHOOSE_ALERT = "choose_alert",
            e.CLOSE_ALL = "close_all",
            e.CHANGE_GEO = "change_geo",
            e.ENTER_USER_INFO = "set_personal_info",
            e.ENTER_EMAIL = "add_email",
            e.CHOOSE_TEAM = "choose_or_create",
            e.ENTER_CREDENTIAL = "enter_credential",
            e.ENTER_NAME = "set_name",
            e.ENTER_PASSWORD = "set_pwd_new",
            e.ENTER_TEAM_INFO = "prepare_tenant",
            e.VERIFY_CREDENTIAL = "verify_identity_new",
            e.CHOOSE_TEAM_APPROACH = "join_by_code",
            e.JOIN_TEAM_REVIEW = "join_tenant_review",
            e.TEAM_DISCOVERY = "operation_center",
            e.TEAM_GROUP_LIST = "team_group_list",
            e.DISPATCH_REGISTER = "dispatch_register",
            e.MIDDLE_PAGE = "choose_identity_page",
            e.NO_PERMISSION_PAGE = "no_permission",
            e.PWD_LESS_AUTH_PAGE = "pwd_less_auth_login",
            e.SWITCH_IDENTITY = "switch_identity",
            e.SHOW_DIALOG = "show_dialog",
            e.QR_LOGIN_POLLING = "qr_login_polling",
            e.JUMP_DOC = "jump_doc",
            e.CHOOSE_VERIFY_TYPE = "auth_type",
            e.IDP_LOGIN = "idp_login",
            e.VERIFY_CODE = "verify_code",
            e.RESET_OTP = "reset_otp",
            e.SET_CREDENTIAL = "set_credential",
            e.GET_AUTH_URL = "get_auth_url",
            e.IDP_LOGIN_PAGE = "idp_login_page",
            e.SET_SEC_PWD = "set_sec_pwd",
            e.CONFIRM_SEC_PWD = "confirm_sec_pwd",
            e.VERIFY_SEC_PWD = "verify_sec_pwd",
            e.SECURITY_TOKEN = "security_token",
            e.CHOOSE_OPT_IN = "choose_opt_in",
            e.HANDING_EXCEPTION = "handling_exception",
            e.INCALID_LINK = "invalid_link",
            e.DISPATCH_PAGE = "dispatch_page",
            e.SWITCH_USER_LIST = "switch_user_list",
            e.VERIFICATION_COMPLETED = "verification_completed",
            e.SET_SPARE_CREDENTIAL = "set_spare_credential",
            e.SHOW_PAGE = "show_page",
            e.IDP_BINDING_IDENTITY = "idp_binding_identity",
            e.INIT_FLOW = "init_flow",
            e.LOGOUT = "logout",
            e.REMOTE_REGISTER_INFO = "remote_register_info"
        }(i || (i = {})),
        function(e) {
            e.ICO = "Passport_Website_Logo",
            e.LOGO = "Passport_Login_Logo_Web",
            e.APP_NAME = "material_app_name",
            e.DOWNLOAD_URL = "Material_PrivateCloudDeployment_DownloadURL",
            e.TERMS_AND_PRIVACY_LOGIN = "Passport_Login_TermsOfService_Web",
            e.TERMS_AND_PRIVACY_CREATE = "Passport_Login_TermsOfService_Web"
        }(o || (o = {})),
        function(e) {
            e.brand_name = "material_app_name",
            e.brand_logo = "material_app_logo",
            e.brand_logo_black = "material_app_logo_black"
        }(a || (a = {})),
        function(e) {
            e.LARK_REGISTER = "LARK_REGISTER",
            e.UG_REGISTER = "UG_REGISTER",
            e.REGISTER = "REGISTER",
            e.MOBILE_LOCAL = "MOBILE_LOCAL",
            e.LOGIN = "LOGIN",
            e.LOGOUT = "LOGOUT",
            e.CONFIRM = "CONFIRM",
            e.QUIT = "QUIT",
            e.PC = "PC",
            e.ABNORMAL = "ABNORMAL",
            e.WIDGET = "WIDGET",
            e.EDU = "EDU",
            e.LANDING = "LANDING",
            e.OS_LOGIN = "OS_LOGIN",
            e.ERROR_PAGE = "ERROR_PAGE",
            e.FIDO_MIDDLE_PAGE = "FIDO_MIDDLE_PAGE"
        }(c || (c = {})),
        function(e) {
            e[e.SUCCESS = 0] = "SUCCESS",
            e[e.INIT = 1] = "INIT",
            e[e.PENDING = 2] = "PENDING",
            e[e.CANCEL = 3] = "CANCEL",
            e[e.ERROR = 4] = "ERROR",
            e[e.EXPIRED = 5] = "EXPIRED"
        }(u || (u = {})),
        function(e) {
            e[e.SUCCESS = 0] = "SUCCESS",
            e[e.PENDING = 4251] = "PENDING",
            e[e.EXPIRED = 4253] = "EXPIRED"
        }(s || (s = {}));
        var d, f, p, E;
        !function(e) {
            e.SCAN = "1",
            e.ACCOUNT = "2"
        }(d || (d = {})),
        function(e) {
            e.SINGLE_PRODUCT = "product",
            e.EXTERNAL_ACTIVITY = "external_activity",
            e.REGISTER_MOBILE = "mobile",
            e.REGISTER_EMAIL = "email",
            e.AUTO_REGISTER = "auto_register",
            e.BACK_URI = "back_uri",
            e.FSM_PATTERN = "pattern",
            e.SHOW_TO_LARK = "to_lark",
            e.REDIRECT_URI = "redirect_uri",
            e.APPID = "app_id",
            e.OPENER_URL = "opener_url",
            e.GENERAL_FROM = "general_from",
            e.FROM = "from",
            e.LANG = "lang",
            e.TEMPLATE_ID = "template_id",
            e.BIZ = "biz",
            e.USER_NAME = "u_name",
            e.TENANT_NAME = "t_name",
            e.TENANT_TYPE = "t_type",
            e.TENANT_SIZE = "t_size",
            e.UG_REGISTER_STYLE = "ug_register_style"
        }(f || (f = {})),
        function(e) {
            e.MOBILE = "mobile",
            e.MAIL = "mail"
        }(p || (p = {})),
        function(e) {
            e.native = "native",
            e.browser = "browser",
            e.android = "android",
            e.ios = "ios"
        }(E || (E = {}));
        var g, S, m, O, h, T;
        r = {},
        l()(r, E.native, "1"),
        l()(r, E.browser, "2"),
        l()(r, E.android, "3"),
        l()(r, E.ios, "4");
        !function(e) {
            e[e.MOBILE = 1] = "MOBILE",
            e[e.MAIL = 2] = "MAIL"
        }(g || (g = {})),
        function(e) {
            e[e.CP_RECOVER = 1] = "CP_RECOVER",
            e[e.USER_RECOVER = 4] = "USER_RECOVER"
        }(S || (S = {})),
        function(e) {
            e[e.RETRIEVE_ACCOUNT = 1] = "RETRIEVE_ACCOUNT",
            e[e.RESET_PWD = 2] = "RESET_PWD",
            e[e.RESET_OTP = 3] = "RESET_OTP"
        }(m || (m = {})),
        function(e) {
            e[e.RECOVER_APPLICATION = 2] = "RECOVER_APPLICATION",
            e[e.REAL_NAME_VERIFICATION = 1] = "REAL_NAME_VERIFICATION",
            e[e.GO_MOBILE = 3] = "GO_MOBILE"
        }(O || (O = {})),
        function(e) {
            e[e.MOBILE = 1] = "MOBILE",
            e[e.MAIL = 2] = "MAIL"
        }(h || (h = {})),
        function(e) {
            e[e.TYPE_NORMAL = 0] = "TYPE_NORMAL",
            e[e.TYPE_NEXT = 1] = "TYPE_NEXT",
            e[e.TYPE_REGISTER = 2] = "TYPE_REGISTER",
            e[e.TYPE_JOIN = 3] = "TYPE_JOIN",
            e[e.TYPE_JOIN_SCAN = 4] = "TYPE_JOIN_SCAN",
            e[e.TYPE_JOIN_CODE = 5] = "TYPE_JOIN_CODE",
            e[e.TYPE_CREATE_TENANT = 6] = "TYPE_CREATE_TENANT",
            e[e.TYPE_CREATE_PERSONAL = 7] = "TYPE_CREATE_PERSONAL",
            e[e.TYPE_JOIN_INVITATION = 29] = "TYPE_JOIN_INVITATION",
            e[e.TYPE_LARK_REGISTER = 35] = "TYPE_LARK_REGISTER"
        }(T || (T = {}));
        var v;
        !function(e) {
            e[e.COMMOM = 0] = "COMMOM",
            e[e.PIC_TIP = 1] = "PIC_TIP"
        }(v || (v = {}));
        var I, y, R, N;
        !function(e) {
            e.DEVICE_MANAGEMENT = "/accounts/security/page/device_management",
            e.PASSWORD_MANAGEMENT = "/accounts/security/page/password_setting",
            e.SELECT_OPERATION = "/accounts/security/page/select_operation",
            e.RECOVER_APPLICATION = "/accounts/security/page/recover_application"
        }(I || (I = {})),
        function(e) {
            e[e.CREATE = 0] = "CREATE",
            e[e.UG_REGISTER = 1] = "UG_REGISTER",
            e[e.LARK_REGISTER = 2] = "LARK_REGISTER",
            e[e.UG_GOOGLE_IDP_REGISTER = 3] = "UG_GOOGLE_IDP_REGISTER"
        }(y || (y = {})),
        function(e) {
            e.GOOGLE = "google",
            e.APPLE_ID = "apple_id",
            e.B_WECHAT = "bwechat",
            e.B_FACEBOOK = "bfacebook",
            e.B_LINKDIN = "blinkedin",
            e.B_DOUYIN = "bdouyin"
        }(R || (R = {})),
        function(e) {
            e.CLIENT = "passport_client_context",
            e.MFA = "passport_mfa_context"
        }(N || (N = {}))
    },
    238: function(e, t, n) {
        "use strict";
        (function(e) {
            n.d(t, "a", (function() {
                return r
            }
            )),
            n.d(t, "b", (function() {
                return i
            }
            ));
            var r = function(e) {
                e ? document.documentElement.setAttribute("theme", "dark") : document.documentElement.removeAttribute("theme")
            }
              , i = function(t) {
                document.title = e(t ? "Lark_Passport_SecurityKeyManagement_AddSecurityKey_WebPageTitle" : "Lark_Passport_SecurityKeyManagement_VerifySecurityKey_WebPageTitle")
            }
        }
        ).call(this, n(87).default)
    },
    243: function(e, t, n) {
        "use strict";
        var r = n(644)
          , i = n(3)
          , o = n(1)
          , a = n.n(o)
          , c = n(21)
          , u = n.n(c)
          , s = n(34)
          , _ = n.n(s)
          , l = n(166)
          , d = n.n(l)
          , f = n(11)
          , p = n.n(f)
          , E = (n(51),
        n(200),
        n(20),
        n(19),
        n(25),
        n(22),
        n(24),
        n(23),
        n(0))
          , g = n.n(E)
          , S = n(40)
          , m = n.n(S)
          , O = n(640)
          , h = n(641)
          , T = n(642)
          , v = n(643)
          , I = ["duration", "onClose"];
        function y(e, t) {
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
        function R(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? y(Object(n), !0).forEach((function(t) {
                    a()(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var N = function(e) {
            var t = e.content
              , n = e.type
              , r = void 0 === n ? "info" : n
              , i = function() {
                return "success" === r ? g.a.createElement(O.a, {
                    className: "_pp-toast-h5-icon"
                }) : "warning" === r ? g.a.createElement(h.a, {
                    className: "_pp-toast-h5-icon"
                }) : "error" === r ? g.a.createElement(T.a, {
                    className: "_pp-toast-h5-icon"
                }) : "loading" === r ? g.a.createElement(v.a, {
                    className: "_pp-toast-h5-icon _pp-toast-loading-icon"
                }) : null
            };
            return g.a.createElement("div", {
                className: "_pp-toast-h5-container"
            }, g.a.createElement(i, null), g.a.createElement("span", null, t))
        }
          , A = function(e) {
            var t = e.duration
              , n = void 0 === t ? 3e3 : t
              , r = e.onClose
              , i = d()(e, I)
              , o = document.createElement("div");
            return document.body.appendChild(o),
            m.a.render(g.a.createElement(N, i), o),
            new Promise((function(e, t) {
                setTimeout(_()(p.a.mark((function n() {
                    return p.a.wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                if (n.prev = 0,
                                o) {
                                    n.next = 3;
                                    break
                                }
                                return n.abrupt("return");
                            case 3:
                                if (document.body.removeChild(o),
                                n.t0 = r,
                                !n.t0) {
                                    n.next = 8;
                                    break
                                }
                                return n.next = 8,
                                r();
                            case 8:
                                e(),
                                n.next = 14;
                                break;
                            case 11:
                                n.prev = 11,
                                n.t1 = n.catch(0),
                                t(n.t1);
                            case 14:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n, null, [[0, 11]])
                }
                ))), n)
            }
            ))
        }
          , C = A
          , L = function(e, t, n) {
            return "object" === u()(e) && null != e && e.hasOwnProperty("content") ? A(R(R({}, e), {}, {
                duration: t,
                onClose: n,
                type: "info"
            })) : A({
                content: e,
                duration: t,
                onClose: n,
                type: "info"
            })
        }
          , b = function(e, t, n) {
            return null != e && e.hasOwnProperty("content") ? A(R(R({}, e), {}, {
                duration: t,
                onClose: n,
                type: "success"
            })) : A({
                content: e,
                duration: t,
                onClose: n,
                type: "success"
            })
        }
          , P = function(e, t, n) {
            return null != e && e.hasOwnProperty("content") ? A(R(R({}, e), {}, {
                duration: t,
                onClose: n,
                type: "warning"
            })) : A({
                content: e,
                duration: t,
                onClose: n,
                type: "warning"
            })
        }
          , w = function(e, t, n) {
            return null != e && e.hasOwnProperty("content") ? A(R(R({}, e), {}, {
                duration: t,
                onClose: n,
                type: "error"
            })) : A({
                content: e,
                duration: t,
                onClose: n,
                type: "error"
            })
        }
          , D = function(e, t, n) {
            return null != e && e.hasOwnProperty("content") ? A(R(R({}, e), {}, {
                duration: t,
                onClose: n,
                type: "loading"
            })) : A({
                content: e,
                duration: t,
                onClose: n,
                type: "loading"
            })
        };
        t.a = {
            open: function(e) {
                return Object(i.i)() ? C(e) : r.a.open(e)
            },
            info: function(e, t, n) {
                return Object(i.i)() ? L(e, t, n) : r.a.info(e, t, n)
            },
            success: function(e, t, n) {
                return Object(i.i)() ? b(e, t, n) : r.a.success(e, t, n)
            },
            warning: function(e, t, n) {
                return Object(i.i)() ? P(e, t, n) : r.a.warning(e, t, n)
            },
            error: function(e, t, n) {
                return Object(i.i)() ? w(e, t, n) : r.a.error(e, t, n)
            },
            loading: function(e, t, n) {
                return Object(i.i)() ? D(e, t, n) : r.a.loading(e, t, n)
            }
        }
    },
    244: function(e, t, n) {
        "use strict";
        n(20),
        n(19),
        n(25),
        n(22),
        n(24),
        n(23);
        var r = n(1)
          , i = n.n(r)
          , o = n(0)
          , a = n.n(o)
          , c = n(78)
          , u = n(65)
          , s = n.n(u)
          , _ = n(3);
        function l(e, t) {
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
        function d(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? l(Object(n), !0).forEach((function(t) {
                    i()(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        t.a = function(e) {
            var t = e.loading
              , n = e.block
              , r = e.className
              , i = e.disabled
              , o = e.onClickButton
              , u = e.onClick
              , l = d(d({}, Object(_.p)(e, ["onClickButton"])), {}, {
                onClick: u || o,
                disabled: !t && i
            });
            if (n) {
                var f = s()(r, "_pp-ud-btn-block");
                l = d(d({
                    size: "large",
                    type: "primary"
                }, l), {}, {
                    className: f
                })
            } else {
                var p = s()(r, "_pp-ud-btn-inline-block");
                l = d(d({}, l), {}, {
                    className: p
                })
            }
            return a.a.createElement(c.a, l)
        }
    },
    289: function(e, t, n) {
        "use strict";
        var r, i, o, a;
        n.d(t, "a", (function() {
            return r
        }
        )),
        function(e) {
            e[e.STEP_METHOD_COMMON_FAIL = -9999] = "STEP_METHOD_COMMON_FAIL",
            e[e.STEP_METHOD_CHECK_FAIL = -9998] = "STEP_METHOD_CHECK_FAIL",
            e[e.REQUEST_UNKNOWN_FAIL = -8888] = "REQUEST_UNKNOWN_FAIL",
            e[e.REQUEST_RUST_FAIL = -8887] = "REQUEST_RUST_FAIL",
            e[e.REQUEST_HTTP_FAIL = -8886] = "REQUEST_HTTP_FAIL",
            e[e.JSB_ERROR = -1] = "JSB_ERROR",
            e[e.JSB_REQUEST_ERROR = -10001] = "JSB_REQUEST_ERROR"
        }(r || (r = {})),
        function(e) {
            e.BACK = "back",
            e.CLOSE = "close"
        }(i || (i = {})),
        function(e) {
            e.ON_MOUNT = "onMount",
            e.ON_DESTROY = "onDestroy",
            e.ON_ACTIVE = "onActive"
        }(o || (o = {})),
        function(e) {
            e.TITLE = "title",
            e.SUB_TITLE = "subtitle"
        }(a || (a = {}))
    },
    3: function(e, t, n) {
        "use strict";
        n.d(t, "h", (function() {
            return w
        }
        )),
        n.d(t, "l", (function() {
            return F
        }
        )),
        n.d(t, "e", (function() {
            return j
        }
        )),
        n.d(t, "k", (function() {
            return I
        }
        )),
        n.d(t, "f", (function() {
            return y
        }
        )),
        n.d(t, "g", (function() {
            return f
        }
        )),
        n.d(t, "n", (function() {
            return p
        }
        )),
        n.d(t, "o", (function() {
            return E
        }
        )),
        n.d(t, "m", (function() {
            return g
        }
        )),
        n.d(t, "a", (function() {
            return O
        }
        )),
        n.d(t, "d", (function() {
            return m
        }
        )),
        n.d(t, "j", (function() {
            return T
        }
        )),
        n.d(t, "i", (function() {
            return H
        }
        )),
        n.d(t, "r", (function() {
            return C
        }
        )),
        n.d(t, "q", (function() {
            return k
        }
        )),
        n.d(t, "b", (function() {
            return h
        }
        )),
        n.d(t, "p", (function() {
            return U
        }
        )),
        n.d(t, "c", (function() {
            return v
        }
        ));
        n(19),
        n(22),
        n(23),
        n(273),
        n(187),
        n(188),
        n(29),
        n(34);
        var r = n(21)
          , i = n.n(r)
          , o = n(1)
          , a = n.n(o)
          , c = (n(11),
        n(199),
        n(51),
        n(196),
        n(24),
        n(79),
        n(108),
        n(91),
        n(120),
        n(197),
        n(20),
        n(61),
        n(69),
        n(86),
        n(278),
        n(194),
        n(172),
        n(280),
        n(246),
        n(283),
        n(198),
        n(92),
        n(200),
        n(25),
        n(287),
        n(440),
        n(441),
        n(329),
        n(126),
        n(9))
          , u = n(2);
        n(289),
        n(4),
        n(89);
        function s(e, t) {
            var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!n) {
                if (Array.isArray(e) || (n = function(e, t) {
                    if (!e)
                        return;
                    if ("string" == typeof e)
                        return _(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return _(e, t)
                }(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var r = 0
                      , i = function() {};
                    return {
                        s: i,
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
                        f: i
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, a = !0, c = !1;
            return {
                s: function() {
                    n = n.call(e)
                },
                n: function() {
                    var e = n.next();
                    return a = e.done,
                    e
                },
                e: function(e) {
                    c = !0,
                    o = e
                },
                f: function() {
                    try {
                        a || null == n.return || n.return()
                    } finally {
                        if (c)
                            throw o
                    }
                }
            }
        }
        function _(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function l(e, t) {
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
        function d(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? l(Object(n), !0).forEach((function(t) {
                    a()(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function f(e) {
            return "function" == typeof e
        }
        function p() {
            return window.ENV === c.g.PRE_RELEASE
        }
        function E() {
            return window.ENV === c.g.STAGING
        }
        function g() {
            return window.ENV === c.g.ONLINE || !window.ENV
        }
        function S() {
            var e = navigator.userAgent.toLowerCase()
              , t = "Unknown OS";
            return e.indexOf("win") > -1 ? t = "Windows" : e.indexOf("iphone") > -1 ? t = "iPhone" : e.indexOf("ipad") > -1 ? t = "ipad" : e.indexOf("mac") > -1 ? t = "Mac" : e.indexOf("linux") > -1 ? t = e.indexOf("android") > -1 ? "Android" : "Linux" : (e.indexOf("x11") > -1 || e.indexOf("unix") > -1 || e.indexOf("sunname") > -1 || e.indexOf("bsd") > -1) && (t = "Unix"),
            t
        }
        function m(e) {
            return new URL(location.href).searchParams.get(e)
        }
        function O() {
            var e = "Unknown Browser"
              , t = window.navigator.userAgent.toLowerCase();
            try {
                e = /trident/.test(t) ? "IE" : t.indexOf("ourea") > 0 ? "Ocean" : t.indexOf("edg") > 0 ? "Edge" : window.opera || t.indexOf("opr") > 0 ? "Opera" : t.indexOf("chrome") > 0 ? "Chrome" : t.indexOf("safari") > 0 ? "Safari" : t.indexOf("firefox") > 0 ? "Firefox" : "Unknown Browser"
            } catch (n) {}
            return e
        }
        function h() {
            return {
                deviceId: "0",
                deviceModel: O(),
                deviceName: O(),
                deviceOs: S()
            }
        }
        function T() {
            return w ? document.documentElement.clientWidth <= 568 : /Android|iphone|ipod/i.test(navigator.userAgent)
        }
        function v() {
            return w ? y() ? u.c.android : R() || A() ? u.c.ios : u.c.native : u.c.browser
        }
        var I = function e() {
            if (void 0 !== e.result)
                return e.result;
            var t = navigator.userAgent || navigator.vendor;
            if (/Android|iphone|ipod|ipad/i.test(t))
                return e.result = !0,
                !0;
            if (/MiuiBrowser/i.test(t))
                return e.result = !0,
                !0;
            if (null !== t.match(/Macintosh/i)) {
                var n = document.createElement("canvas");
                if (null !== n) {
                    var r = n.getContext("webgl") || n.getContext("experimental-webgl");
                    if (r) {
                        var i = r.getExtension("WEBGL_debug_renderer_info");
                        if (i)
                            if (-1 !== r.getParameter(i.UNMASKED_RENDERER_WEBGL).indexOf("Apple") && 0 !== navigator.maxTouchPoints)
                                return e.result = !0,
                                !0
                    }
                }
            }
            return e.result = !1,
            !1
        };
        function y() {
            return /Android/i.test(navigator.userAgent)
        }
        function R() {
            return /iphone|ipod/i.test(navigator.userAgent)
        }
        var N = function() {
            return !("undefined" == typeof window || !window) && (/iphone/gi.test(window.navigator.userAgent) && window.screen.height >= 812)
        }
          , A = function() {
            return !("undefined" == typeof window || !window || !window.navigator) && (/ipad/gi.test(window.navigator.userAgent) || Boolean(navigator.maxTouchPoints) && navigator.maxTouchPoints > 2 && /MacIntel/.test(navigator.platform))
        };
        function C(e) {
            if (!e)
                return "err is null";
            if (e instanceof Error) {
                var t = d(d({}, e), {}, {
                    message: e.message
                });
                return JSON.stringify(t)
            }
            if ("object" !== i()(e))
                return e;
            try {
                return JSON.stringify(e)
            } catch (n) {
                return "err data stringify err"
            }
        }
        var L = window.navigator.userAgent.toLowerCase()
          , b = L.indexOf("micromessenger") > -1
          , P = L.indexOf("alipayclient") > -1
          , w = (L.indexOf("aweme"),
        L.indexOf("live_stream"),
        L.indexOf("newsarticle"),
        -1 !== L.indexOf("lark"));
        -1 !== L.indexOf("larkrooms") || L.indexOf("feishurooms"),
        b || P || w || m("show_app_sso");
        function D(e, t) {
            try {
                var n = new URL(e)
                  , r = n.search;
                return t.forEach((function(e) {
                    var t = new RegExp("[\\?&]".concat(e, "=[^&]*"),"ig");
                    r = r.replace(t, "").replace(/^&/, "?")
                }
                )),
                n.origin + n.pathname + r + n.hash
            } catch (i) {
                return e
            }
        }
        function k(e) {
            var t, n = D(window.location.href, e);
            null !== (t = history) && void 0 !== t && t.replaceState && history.replaceState({}, "", n)
        }
        var U = function(e, t) {
            var n, r = d({}, e), i = s(t);
            try {
                for (i.s(); !(n = i.n()).done; ) {
                    delete r[n.value]
                }
            } catch (o) {
                i.e(o)
            } finally {
                i.f()
            }
            return r
        };
        function j(e) {
            var t, n;
            return (null === (t = window.serverInjectRes) || void 0 === t || null === (n = t.customization) || void 0 === n ? void 0 : n[e]) || {}
        }
        var G = Boolean(w && I())
          , M = (Boolean(w && !I()),
        !G || Boolean(location.search.match("op_platform_service=hide_navigator")))
          , x = G && M
          , H = (R() && !N() && A(),
        N() && A(),
        x && A(),
        function() {
            var e, t;
            return (null === (e = document) || void 0 === e || null === (t = e.documentElement) || void 0 === t ? void 0 : t.clientWidth) <= 568
        }
        )
          , F = function() {
            var e = !1;
            return -1 !== location.host.indexOf(".net") && (e = !0),
            e
        }
    },
    30: function(e, t, n) {
        "use strict";
        var r;
        n.d(t, "b", (function() {
            return r
        }
        )),
        n.d(t, "c", (function() {
            return o
        }
        )),
        n.d(t, "a", (function() {
            return i
        }
        )),
        function(e) {
            e.WEB_AUTHN_UNAVAILABLE = "Lark_Passport_AccountSecurityCenter_SecurityKey_OtherScenario_BrowserWebAuthenNotSupportedDesc",
            e.PLATFORM_AUTHENTICATOR_UNSUPPORTED = "Lark_Passport_AccountSecurityCenter_SecurityKey_OtherScenario_BrowserPlatformAuthenNotSupportedDesc",
            e.MISSING_PARAM = "Lark_Passport_AccountSecurityCenter_SecurityKeyManagementPage_InvalidURLErrorMsg",
            e.UNKNOWN_ERROR = "Lark_Passport_AccountSecurityCenter_AccountProtection_SetSecurityKey_SystemBusyTryLaterDesc"
        }(r || (r = {}));
        var i, o = {
            NotAllowedError: "Lark_Passport_AccountSecurityCenter_FIDOErrorType_RequestCanceledByUser",
            TypeError: "Lark_Passport_AccountSecurityCenter_FIDOErrorType_ParameterTypeError",
            NotSupportedError: "Lark_Passport_AccountSecurityCenter_FIDOErrorType_NotSupportedAction",
            SecurityError: "Lark_Passport_AccountSecurityCenter_FIDOErrorType_RiskyAction",
            InvalidCharacterError: "Lark_Passport_AccountSecurityCenter_FIDOErrorType_InavlidValueInParameter",
            NotReadableError: "Lark_Passport_AccountSecurityCenter_FIDOErrorType_UnknownErrorCommunicatingWithCredentialServer",
            SyntaxError: "Lark_Passport_AccountSecurityCenter_FIDOErrorType_FuzzyMatchFailed",
            DOMException: "Lark_Passport_AccountProtection_AddSecurityKeyToDevice_AlreadyAddedPopUp_Desc",
            InvalidStateError: "Lark_Passport_AccountProtection_AddSecurityKeyToDevice_AlreadyAddedPopUp_Desc"
        };
        !function(e) {
            e.REGISTER = "0",
            e.LOGIN = "1",
            e.CLOSE = "2"
        }(i || (i = {}))
    },
    32: function(e, t, n) {
        "use strict";
        var r, i, o, a, c;
        n.d(t, "a", (function() {
            return i
        }
        )),
        n.d(t, "b", (function() {
            return o
        }
        )),
        n.d(t, "c", (function() {
            return a
        }
        )),
        function(e) {
            e.passport_enter_contact = "passport_enter_contact",
            e.passport_enter_verify_code = "passport_enter_verify_code",
            e.passport_enter_verify_pwd = "passport_enter_verify_pwd",
            e.passport_set_tenant_name = "passport_set_tenant_name",
            e.passport_register_to_personal_use = "passport_register_to_personal_use",
            e.passport_success_b = "passport_success_b",
            e.passport_set_pwd = "passport_set_pwd",
            e.passport_choose_or_create = "passport_choose_or_create",
            e.passport_official_email = "passport_official_email",
            e.passport_dispatch_next = "passport_dispatch_next",
            e.passport_join_tenant_code = "passport_join_tenant_code",
            e.passport_company_login = "passport_company_login",
            e.passport_idp_enter = "passport_idp_enter",
            e.passport_idp_verify_result = "passport_idp_verify_result",
            e.passport_enterapp = "passport_enterapp",
            e.passport_user_list_select = "passport_user_list_select",
            e.passport_get_qr = "passport_get_qr",
            e.passport_upgrade = "passport_upgrade",
            e.PassportRequest = "passport_request"
        }(r || (r = {})),
        function(e) {
            e.REQUEST_SUCCESS = "success",
            e.REQUEST_CODE_ERROR = "code_error",
            e.REQUEST_STATUS_ERROR = "status_error",
            e.CLICK = "click",
            e.SCAN = "scan",
            e.LOGIC_GENERAL = "general",
            e.MOUNT_COMPONENT = "mount_com",
            e.LOGIC_SWITCH = "switch",
            e.LOGIC_SWITCH_UNEXPECTED = "unexpected",
            e.PAGE_MOUNT = "mount_page",
            e.INIT = "init",
            e.UTIL = "util",
            e.BETTER = "better"
        }(i || (i = {})),
        function(e) {
            e.ENTER_CONTACT = "enter_contact",
            e.ENTER_TEAM_INFO = "enter_team_info",
            e.UID_FAIL = "uid_fail",
            e.ISV_PAGE_FAIL = "isv_page_fail",
            e.CREATE_ELE_FAIL = "create_ele_fail",
            e.APPEND_CHILD_FAIL = "append_child_fail",
            e.SET_USER_INFO_MAIL = "mail",
            e.SET_USER_INFO_PHONE = "phone",
            e.USER_INFO_CHANGE_PHONE = "change_phone",
            e.USER_INFO_CHANGE_MAIL = "change_mail",
            e.SET_TENANT_NAME = "set_tenant_name",
            e.INVITE_TEAM_LIST_MOUNT = "",
            e.CHOOSE_TEAM_MOUNT = "",
            e.USER_LIST_CREATE_TEAM = "create_team",
            e.USER_LIST_JOIN_TEAM = "join_team",
            e.USER_LIST_ENTER_TEAM = "enter_team",
            e.USER_LIST_REFUSE_INVITE = "refuse_invite",
            e.USER_LIST_CONTINUE_CREATE = "continue_create",
            e.IDP_HANDLE_RESULT = "handle_result",
            e.IDP_MOUNT_WEB = "web",
            e.IDP_MOUNT_NATIVE = "native",
            e.IDP_LAND_MOUNT = "",
            e.IDP_SSO_LOGIN = "login",
            e.IDP_SSO_SUBMIT = "submit",
            e.IDP_SSO_HELP_URL = "help_url",
            e.IDP_ENTER = "enter",
            e.VERIFY_CODE_SEND_ERROR = "verify_code_send_err",
            e.VERIFY_CODE_ENCRYPT_PWD_ERROR = "encrypt_pwd_err",
            e.ENTER_VERIFY_CODE = "verify_code",
            e.ENTER_VERIFY_EMAIL_CODE = "verify_email_code",
            e.ENTER_VERIFY_PWD = "verify_pwd",
            e.ENTER_VERIFY_OTP = "verify_otp",
            e.ENTER_VERIFY_SPARE = "verify_code_spare",
            e.ENTER_VERIFY_MO = "verify_mo",
            e.ENTER_VERIFY = "verify",
            e.ENTER_CREDENTIAL_REGISTER = "register",
            e.ENTER_CREDENTIAL_LOGIN = "login",
            e.ENTER_CREDENTIAL_ENCRYPT_PWD_ERROR = "encrypt_pwd_err",
            e.CHANGE_OR_CREATE_TEAM = "change_or_create",
            e.CHANGE_OR_CREATE_TEAM_AUTH_EMAIL = "auth_email",
            e.CHANGE_OR_CREATE_TEAM_SESSION_KEY_NOT_FOUND = "session_not_found",
            e.CHANGE_OR_CREATE_TEAM_OTHER_WAY = "other_way",
            e.CHANGE_OR_CREATE_TEAM_JOIN_TEAM = "join_team",
            e.CHANGE_OR_CREATE_TEAM_CREATE_TEAM = "create_team",
            e.CHANGE_OR_CREATE_TEAM_ENTER = "enter",
            e.REGISTER_TO_PERSONAL_USE = "register_to_personal_use",
            e.SUCCESS_B = "success_b",
            e.SET_PWD = "set_pwd",
            e.CHOOSE_OR_CREATE = "choose_or_create",
            e.OFFICIAL_EMAIL = "official_email",
            e.DISPATCH_NEXT = "dispatch_next",
            e.JOIN_TENANT_CODE = "join_tenant_code",
            e.COMPANY_LOGIN = "company_login",
            e.INJECT_CAPTCHA_ID_FAIL = "inject_captcha_id_fail",
            e.OPEN_IN_WINDOW = "open_in_window",
            e.LOAD_I18N_ERROR = "load_i18n_error",
            e.ERROR_PAGE = "error_page",
            e.ENTER_APP = "",
            e.ENTER_APP_REDIRECT = "redirect",
            e.ENTER_APP_CROSS_REDIRECT = "cross_redirect",
            e.DUAL_SESSION_REDIRECT = "dual_redirect",
            e.LOGIN_APP_ERROR = "error",
            e.LOGIN_APP_REGISTER_SUCCESS = "register_success",
            e.LOGIN_APP_OTHER_NEXT_STEP = "other_next",
            e.LOGIN_APP_NONE_NEXT_STEP = "none_next",
            e.USER_LIST_SELECT = "user_list_select",
            e.SHOW_DIALOG_SSO_ALERT = "sso_alert",
            e.SHOW_DIALOG_CONFIRM = "confirm",
            e.CLOSE_ALL_GO_TO_START_STEP = "to_start_step",
            e.CLOSE_ALL_GO_TO_LOGIN_SUCCESS = "to_login_success",
            e.GET_QR = "get_qr",
            e.QR_LOGIN = "",
            e.QR_LOGIN_SCAN = "scan",
            e.QR_LOGIN_SUCCESS = "success",
            e.QR_LOGIN_REGISTER_TEAM = "register_team",
            e.UPGRADE = "upgrade",
            e.REQUEST = "request",
            e.GEN_CAPTURE_CODE = "gen_capture_code",
            e.ACRAWLER_SIGN = "acrawler_sign",
            e.CAPTURE_TOKEN = "capture_token",
            e.LOGIN_PAGE_MOUNT = "",
            e.CHANGE_STEP = "",
            e.CHANGE_STEP_ENTER = "enter",
            e.CHANGE_STEP_ENTER_SUCCESS = "enter_suc",
            e.CHANGE_STEP_NOT_EXIST = "not_exist",
            e.CHANGE_STEP_PREPROCESS = "preprocess",
            e.CHANGE_STEP_PROCESS = "process",
            e.CHANGE_STEP_BEFORE_STEP = "before_step",
            e.PWD_LESS_INIT = "init",
            e.PWD_LESS_GEN_URL = "gen_url",
            e.PWD_LESS_GO_TO_AUTH = "go_to_auth",
            e.PWD_LESS_POLLING = "polling",
            e.PWD_LESS_CLICK_ELSE = "click_else",
            e.PWD_LESS_ENTER = "enter",
            e.PWD_LESS_OLD_INIT = "old_init",
            e.PWD_LESS_CONFIRM = "confirm",
            e.PWD_LESS_OLD_ERROR = "old_err",
            e.PWD_LESS_CANCEL = "cancel",
            e.PWD_LESS_PARSE_INIT_INFO = "parse_init_info",
            e.JOIN_TEAM_CODE_MOUNT = "",
            e.JOIN_TEAM_CODE_SUBMIT = "submit",
            e.JOIN_TEAM_CODE_CREATE_TEAM = "create_team",
            e.JOIN_TEAM_CODE_CREATE_PERSON_USE = "person_use",
            e.GET_AUTH_URL_WEB = "web",
            e.GET_AUTH_URL_PC = "pc",
            e.REMOTE_REGISTER_MOUNT = "",
            e.BUNDLE_LOAD = "load",
            e.BUNDLE_BACKUP = "backup",
            e.MOBIE_REGISTER_INIT = "init",
            e.MOBIE_REGISTER_JSB_FAIL = "jsb_fail",
            e.AUTHZ_INIT = "init",
            e.AUTHORIZATION_INIT = "authorization_init",
            e.SWITCH_TENANT_INIT = "switch_tenant_init",
            e.UNAVAILABLE_INIT = "switch_tenant_init",
            e.CHOOSE_TENANT = "choose_tenant_click",
            e.LOGIN_OTHER_ACCOUNT = "login_other_account",
            e.ACCEPT_AUTHORIZATION = "accept_authorization",
            e.REJECT_AUTHORIZATION = "reject_authorization",
            e.LINKED_OUT_LIST_INIT = "linked_out_list_init",
            e.LINKED_OUT_ALREADY_LOGOUT_INIT = "linked_out_already_logout_init",
            e.LINKED_OUT_CONFIRM_LOGOUT = "linked_out_confirm_logout",
            e.LINKED_OUT_REJECT_LOGOUT = "linked_out_reject_logout",
            e.LOGIN_MIDDLE_PAGE_LOAD_STEP = "login_middle_page_load_step"
        }(o || (o = {})),
        function(e) {
            e.unknown = "",
            e.LOGIN = "login",
            e.REGISTER = "register",
            e.BIND_CONTACT = "bind_contact",
            e.COMPANY_LOGIN = "company_login",
            e.CHANGE_STEP = "change_step",
            e.ENTER_APP = "enter_app",
            e.LOGIN_APP = "login_app",
            e.USER_INFO = "user_info",
            e.ENTER_PWD = "enter_pwd",
            e.FORGET_PWD = "forget_pwd",
            e.REGISTER_OR_LOGIN = "register_or_login",
            e.CONTACT_MANAGER = "contact_manager",
            e.SWITCH_USER = "switch_user",
            e.CREDENTIAL = "credential",
            e.TEAM = "team",
            e.INVITE_TEAM = "invite_team",
            e.CHOOSE_TEAM = "choose_team",
            e.CREATE_TEAM = "create_team",
            e.UPGRADE_TEAM = "upgrade_team",
            e.JOIN = "join_team",
            e.NOT_JOIN = "not_join",
            e.TEAM_CODE_INPUT = "team_code_input",
            e.IDP_LAND = "idp_land",
            e.IDP_SSO = "idp_sso",
            e.ADD_NEW_IDENTITY = "add_new_id",
            e.PWD_LESS_AUTH = "pwd_less_auth",
            e.PERSONAL = "personal_use",
            e.OFFICIAL_EMAIL = "official_email",
            e.QR_LOGIN = "qr_login",
            e.ALERT = "alert",
            e.CLOSE_ALL = "close_all",
            e.GET_AUTH_URL = "get_auth_url",
            e.LOG_UTIL = "log_util",
            e.LOAD_BUNDLE = "load_bundle",
            e.REMOTE_REGISTER = "remote_register",
            e.MOBIE_REGISTER = "mobile_register",
            e.AUTHZ = "authorize",
            e.LINKED_LOGOUT = "linked_logout"
        }(a || (a = {})),
        c || (c = {})
    },
    329: function(e, t, n) {
        "use strict";
        var r = this && this.__awaiter || function(e, t, n, r) {
            return new (n || (n = Promise))((function(i, o) {
                function a(e) {
                    try {
                        u(r.next(e))
                    } catch (t) {
                        o(t)
                    }
                }
                function c(e) {
                    try {
                        u(r.throw(e))
                    } catch (t) {
                        o(t)
                    }
                }
                function u(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(a, c)
                }
                u((r = r.apply(e, t || [])).next())
            }
            ))
        }
          , i = this && this.__generator || function(e, t) {
            var n, r, i, o, a = {
                label: 0,
                sent: function() {
                    if (1 & i[0])
                        throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function c(o) {
                return function(c) {
                    return function(o) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (n = 1,
                                r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r),
                                0) : r.next) && !(i = i.call(r, o[1])).done)
                                    return i;
                                switch (r = 0,
                                i && (o = [2 & o[0], i.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    i = o;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    r = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(i = a.trys,
                                    (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                        a.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && a.label < i[1]) {
                                        a.label = i[1],
                                        i = o;
                                        break
                                    }
                                    if (i && a.label < i[2]) {
                                        a.label = i[2],
                                        a.ops.push(o);
                                        break
                                    }
                                    i[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                o = t.call(e, a)
                            } catch (c) {
                                o = [6, c],
                                r = 0
                            } finally {
                                n = i = 0
                            }
                        if (5 & o[0])
                            throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, c])
                }
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.getAccountOrigin = t.clearLocalSession = t.updateLocalSession = t.getInviteUrl = t.getAccountUrl = t.getSuiteUrl = t.uuid = t.handleEncode = t.setCookie = t.getDomain = t.getCookie = t.transformCamel = t.toObjParams = t.getURLParams = t.getCaptchaDomain = t.getDefaultCaptchaDomain = t.getDefaultServiceDomain = t.getCaptchaId = t.injectCaptchaIdScript = t.encodeUrl = t.isServer = void 0,
        t.isServer = "undefined" == typeof window;
        function o(e, n) {
            if (!t.isServer)
                return new Promise((function(t, r) {
                    var i = document.createElement("script")
                      , o = null
                      , a = function() {
                        o && (clearTimeout(o),
                        o = null)
                    };
                    i.onload = function() {
                        a(),
                        t(null)
                    }
                    ,
                    i.onerror = function(e) {
                        a(),
                        r(e)
                    }
                    ,
                    i.src = e,
                    document.body.appendChild(i),
                    o = setTimeout((function() {
                        o = null,
                        a(),
                        r(new Error("inject script: ".concat(e, " timeout")))
                    }
                    ), n || 1e4)
                }
                ))
        }
        t.encodeUrl = function(e) {
            try {
                return encodeURIComponent(e)
            } catch (t) {
                return e
            }
        }
        ,
        t.injectCaptchaIdScript = function(e) {
            var n;
            return r(this, void 0, void 0, (function() {
                return i(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return t.isServer || (null === (n = window.Device) || void 0 === n ? void 0 : n.getDevice) ? [2] : [4, o("https://".concat(e, "/security/device/captcha/device?disableSSL=false&appId=suite_web_login&_timestamp_=").concat((new Date).getTime()), 15e3)];
                    case 1:
                        return r.sent(),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ;
        t.getCaptchaId = function() {
            return new Promise((function(e, n) {
                var r;
                if (t.isServer)
                    n(new Error("ssr haven't window."));
                else {
                    var i = null === (r = window.Device) || void 0 === r ? void 0 : r.getDevice;
                    i || n(new Error("window.Device.getDevice not defined."));
                    var o = setTimeout((function() {
                        clearTimeout(o),
                        n(new Error("window.Device.getDevice timeout."))
                    }
                    ), 15e3);
                    i((function(t) {
                        if (!t || "false" === t)
                            return n("captcha invalid:".concat(t, "."));
                        clearTimeout(o),
                        e(t)
                    }
                    ))
                }
            }
            ))
        }
        ;
        t.getDefaultServiceDomain = function(e) {
            var t;
            try {
                var n = e || window.location.origin
                  , r = ((null === (t = null == n ? void 0 : n.split("//")) || void 0 === t ? void 0 : t[1]) || "").split(".");
                return r.shift(),
                "sg" !== r[0] && "jp" !== r[0] || r.shift(),
                "internal-api-lark-api.".concat(r.join("."))
            } catch (i) {
                return "internal-api-lark-api.feishu.cn"
            }
        }
        ;
        t.getDefaultCaptchaDomain = function(e) {
            var t;
            try {
                var n = e || window.location.origin
                  , r = (null === (t = null == n ? void 0 : n.split("//")) || void 0 === t ? void 0 : t[1]) || ""
                  , i = "internal-api"
                  , o = "";
                /sg\.(larksuite|feishu)/.test(r) ? o = "-sg" : /jp\.(larksuite|feishu)/.test(r) && (o = "-jp"),
                i += o;
                var a = r.split(".");
                a.shift(),
                "sg" !== a[0] && "jp" !== a[0] || a.shift();
                var c = a.join(".");
                return "".concat(i, ".").concat(c)
            } catch (u) {
                return "internal-api.feishu.cn"
            }
        }
        ;
        t.getCaptchaDomain = function(e, n) {
            return t.isServer ? "" : (n || window.location.origin).includes("http://") ? e ? "internal-api.larksuite-boe.com" : "internal-api.feishu-boe.cn" : (0,
            t.getDefaultCaptchaDomain)()
        }
        ,
        t.getURLParams = function(e) {
            var t = new RegExp("(^|&)".concat(e, "=([^&]*)(&|$)"),"i")
              , n = window.location.search.substr(1).match(t);
            return null != n ? decodeURIComponent(n[2]) : null
        }
        ,
        t.toObjParams = function(e, t) {
            if (!(null == t ? void 0 : t.length))
                return {};
            if (1 === t.length && "object" == typeof t[0])
                return t[0];
            var n = {};
            return e.map((function(e, r) {
                n[e] = t[r]
            }
            )),
            n
        }
        ,
        t.transformCamel = function(e, t) {
            if (void 0 === t && (t = !1),
            e && "object" == typeof e) {
                var n = t ? /_[a-z]/g : /[A-Z]/g
                  , r = {};
                return Object.entries(e).forEach((function(e) {
                    var i = e[0].replace(n, (function(e) {
                        return t ? e[1].toUpperCase() : "_".concat(e.toLowerCase())
                    }
                    ));
                    r[i] = e[1]
                }
                )),
                r
            }
            return e
        }
        ;
        t.getCookie = function(e) {
            if (t.isServer)
                return "";
            try {
                return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*".concat(encodeURIComponent(e).replace(/[-.+*]/g, "\\$&"), "\\s*\\=\\s*([^;]*).*$)|^.*$")), "$1")) || ""
            } catch (n) {
                return ""
            }
        }
        ;
        t.getDomain = function() {
            if (t.isServer)
                return "";
            var e = window.location.hostname;
            if (["localhost", "127.0.0.1"].includes(e))
                return e;
            var n = e.split(".")
              , r = "";
            return r = 2 === n.length ? e : [".com.cn", ".net.cn", ".org.cn"].some((function(t) {
                return e.includes(t)
            }
            )) ? n.slice(-3).join(".") : n.slice(-2).join("."),
            ".".concat(r)
        }
        ;
        t.setCookie = function(e, n, r) {
            var i = new Date(Date.now() + ((null == r ? void 0 : r.expires) || 2592e6)).toGMTString();
            document.cookie = "".concat(e, "=").concat(n, "; path=/; domain=").concat((0,
            t.getDomain)(), "; expires=").concat(i)
        }
        ;
        t.handleEncode = function(e) {
            void 0 === e && (e = "");
            try {
                var t = decodeURIComponent(e);
                return encodeURIComponent(t)
            } catch (n) {
                return e
            }
        }
        ;
        t.uuid = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
                var t = 16 * Math.random() | 0;
                return ("x" === e ? t : 3 & t | 8).toString(16)
            }
            ))
        }
        ;
        t.getSuiteUrl = function(e) {
            return "/suite/passport".concat(e.startsWith("/") ? e : "/".concat(e))
        }
        ;
        t.getAccountUrl = function(e) {
            return "/accounts".concat(e.startsWith("/") ? e : "/".concat(e))
        }
        ;
        t.getInviteUrl = function(e) {
            return "/invitation".concat(e.startsWith("/") ? e : "/".concat(e))
        }
        ;
        function a(e) {
            try {
                return e = JSON.stringify(e),
                btoa(unescape(encodeURIComponent(e)))
            } catch (t) {
                return ""
            }
        }
        function c(e) {
            return {
                name: e.name,
                tName: e.tenant.name,
                tAvatar: e.tenant.iconUrl,
                id: e.id,
                cId: e.loginCredentialId || e.login_credential_id
            }
        }
        t.updateLocalSession = function(e) {
            var n = void 0 === e ? {} : e
              , r = n.user
              , i = n.userList
              , o = n.isClear
              , u = function(e) {
                try {
                    return e = decodeURIComponent(escape(atob(e))),
                    JSON.parse(e)
                } catch (t) {
                    return null
                }
            }((0,
            t.getCookie)("__LSIDS"));
            if (!i)
                return u && Array.isArray(u) ? u : [];
            if (o)
                return (0,
                t.setCookie)("__LSIDS", a(i.map(c)), {});
            var s = (u && Array.isArray(u) ? u : []).filter((function(e) {
                return !i.some((function(t) {
                    return t.id === e.id
                }
                ))
            }
            ));
            return r && (s = s.push({
                name: r.name,
                id: r.id,
                cId: r.login_credential_id,
                tName: r.tenant.name,
                tAvatar: r.tenant.iconUrl
            })),
            (0,
            t.setCookie)("__LSIDS", a(s)),
            s
        }
        ;
        t.clearLocalSession = function() {
            (0,
            t.setCookie)("__LSIDS", "", {
                expires: -1
            })
        }
        ;
        t.getAccountOrigin = function() {
            return t.isServer || "http:" === location.protocol ? "" : "".concat(location.protocol, "//").concat(location.host.replace(/[^.]*\./, "www."))
        }
    },
    334: function(e, t, n) {
        "use strict";
        var r;
        n.d(t, "a", (function() {
            return r
        }
        )),
        function(e) {
            e.Redirect = "redirect",
            e.Proxy = "proxy",
            e.DualDomainSync = "dual_domain_sync"
        }(r || (r = {}))
    },
    335: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return E
        }
        ));
        n(20),
        n(19),
        n(25),
        n(22),
        n(24),
        n(23),
        n(1),
        n(466),
        n(336);
        var r, i = n(239), o = n(337), a = n.n(o), c = n(240), u = n.n(c), s = (n(77),
        n(9)), _ = n(4), l = n(3), d = n(128);
        n(41);
        !function(e) {
            e[e.OPEN = 1] = "OPEN",
            e[e.CLOSE = 2] = "CLOSE"
        }(r || (r = {}));
        var f = Object(l.m)() && location.origin.startsWith("https") && !/-boe/.test(location.origin.toLowerCase())
          , p = !(Object(l.m)() || Object(l.n)() || Object(l.o)())
          , E = (window.isServerBrandLark,
        function(e) {
            var t, n;
            if (!p && (null === _.a || void 0 === _.a || null === (t = _.a.reportConfig) || void 0 === t || null === (n = t.slardar) || void 0 === n ? void 0 : n.value) !== r.CLOSE) {
                var o;
                try {
                    var c = s.h[_.a.serverUnit];
                    if (c === s.d.CN ? window.SlardarWeb = i.a : c === s.d.VA ? window.SlardarWeb = a.a : c === s.d.SG || c === s.d.JP ? window.SlardarWeb = u.a : window.SlardarWeb = i.a,
                    !window.SlardarWeb)
                        return;
                    window.SlardarWeb("context.set", "from", (null == e ? void 0 : e.contextFrom) || Object(d.b)()),
                    window.SlardarWeb("context.set", "business", "iam"),
                    window.SlardarWeb.init({
                        bid: f ? "IAM" : "IAM_BOE",
                        env: (o = _.a.env,
                        o === s.g.LOCAL ? "local" : o === s.g.STAGING ? "staging" : o === s.g.BOE ? "test" : o === s.g.ONLINE ? "production" : o === s.g.PRE_RELEASE ? "staging" : "staging-default"),
                        pid: "".concat(location.pathname),
                        release: "1.0.0.3396",
                        plugins: {
                            ajax: {
                                autoWrap: !0,
                                ignoreUrls: ["mcs.zijieapi.com"],
                                collectBodyOnError: !0
                            },
                            fetch: {
                                autoWrap: !0,
                                ignoreUrls: ["mcs.zijieapi.com"],
                                collectBodyOnError: !0
                            },
                            action: !0
                        }
                    }),
                    window.SlardarWeb("start")
                } catch (l) {}
            }
        }
        )
    },
    338: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return d
        }
        ));
        var r, i = n(34), o = n.n(i), a = n(1), c = n.n(a), u = n(11), s = n.n(u), _ = (n(61),
        n(51),
        n(200),
        n(69),
        n(86),
        n(5)), l = (r = {},
        c()(r, _.SuiteLanguages.EN_US, (function() {
            return Promise.all([n.e("resource~cn~de~en~es~fr~hi~id~it~ja~ko~pt~ru~th~vi"), n.e("resource~en"), n.e("vendor~cn~de~en~es~fr~hi~id~it~ja~ko~pt~ru~th~vi")]).then(n.bind(null, 622))
        }
        )),
        c()(r, _.SuiteLanguages.ZH_CN, (function() {
            return Promise.all([n.e("resource~cn~de~en~es~fr~hi~id~it~ja~ko~pt~ru~th~vi"), n.e("resource~cn"), n.e("vendor~cn~de~en~es~fr~hi~id~it~ja~ko~pt~ru~th~vi")]).then(n.bind(null, 623))
        }
        )),
        c()(r, _.SuiteLanguages.ZH_HK, (function() {
            return Promise.all([n.e("resource~cn~de~en~es~fr~hi~id~it~ja~ko~pt~ru~th~vi"), n.e("resource~cn"), n.e("vendor~cn~de~en~es~fr~hi~id~it~ja~ko~pt~ru~th~vi")]).then(n.bind(null, 624))
        }
        )),
        c()(r, _.SuiteLanguages.ZH_TW, (function() {
            return Promise.all([n.e("resource~cn~de~en~es~fr~hi~id~it~ja~ko~pt~ru~th~vi"), n.e("resource~cn"), n.e("vendor~cn~de~en~es~fr~hi~id~it~ja~ko~pt~ru~th~vi")]).then(n.bind(null, 625))
        }
        )),
        c()(r, _.SuiteLanguages.JA_JP, (function() {
            return Promise.all([n.e("resource~cn~de~en~es~fr~hi~id~it~ja~ko~pt~ru~th~vi"), n.e("resource~ja"), n.e("vendor~cn~de~en~es~fr~hi~id~it~ja~ko~pt~ru~th~vi")]).then(n.bind(null, 626))
        }
        )),
        c()(r, _.SuiteLanguages.DE_DE, (function() {
            return Promise.all([n.e("resource~cn~de~en~es~fr~hi~id~it~ja~ko~pt~ru~th~vi"), n.e("resource~de"), n.e("vendor~cn~de~en~es~fr~hi~id~it~ja~ko~pt~ru~th~vi")]).then(n.bind(null, 627))
        }
        )),
        c()(r, _.SuiteLanguages.ES_ES, (function() {
            return Promise.all([n.e("resource~cn~de~en~es~fr~hi~id~it~ja~ko~pt~ru~th~vi"), n.e("resource~es"), n.e("vendor~cn~de~en~es~fr~hi~id~it~ja~ko~pt~ru~th~vi")]).then(n.bind(null, 628))
        }
        )),
        c()(r, _.SuiteLanguages.FR_FR, (function() {
            return Promise.all([n.e("resource~cn~de~en~es~fr~hi~id~it~ja~ko~pt~ru~th~vi"), n.e("resource~fr"), n.e("vendor~cn~de~en~es~fr~hi~id~it~ja~ko~pt~ru~th~vi")]).then(n.bind(null, 629))
        }
        )),
        c()(r, _.SuiteLanguages.HI_IN, (function() {
            return Promise.all([n.e("resource~cn~de~en~es~fr~hi~id~it~ja~ko~pt~ru~th~vi"), n.e("resource~hi"), n.e("vendor~cn~de~en~es~fr~hi~id~it~ja~ko~pt~ru~th~vi")]).then(n.bind(null, 630))
        }
        )),
        c()(r, _.SuiteLanguages.ID_ID, (function() {
            return Promise.all([n.e("resource~cn~de~en~es~fr~hi~id~it~ja~ko~pt~ru~th~vi"), n.e("resource~id"), n.e("vendor~cn~de~en~es~fr~hi~id~it~ja~ko~pt~ru~th~vi")]).then(n.bind(null, 631))
        }
        )),
        c()(r, _.SuiteLanguages.IT_IT, (function() {
            return Promise.all([n.e("resource~cn~de~en~es~fr~hi~id~it~ja~ko~pt~ru~th~vi"), n.e("resource~it"), n.e("vendor~cn~de~en~es~fr~hi~id~it~ja~ko~pt~ru~th~vi")]).then(n.bind(null, 632))
        }
        )),
        c()(r, _.SuiteLanguages.KO_KR, (function() {
            return Promise.all([n.e("resource~cn~de~en~es~fr~hi~id~it~ja~ko~pt~ru~th~vi"), n.e("resource~ko"), n.e("vendor~cn~de~en~es~fr~hi~id~it~ja~ko~pt~ru~th~vi")]).then(n.bind(null, 633))
        }
        )),
        c()(r, _.SuiteLanguages.PT_BR, (function() {
            return Promise.all([n.e("resource~cn~de~en~es~fr~hi~id~it~ja~ko~pt~ru~th~vi"), n.e("resource~pt"), n.e("vendor~cn~de~en~es~fr~hi~id~it~ja~ko~pt~ru~th~vi")]).then(n.bind(null, 634))
        }
        )),
        c()(r, _.SuiteLanguages.RU_RU, (function() {
            return Promise.all([n.e("resource~cn~de~en~es~fr~hi~id~it~ja~ko~pt~ru~th~vi"), n.e("resource~ru"), n.e("vendor~cn~de~en~es~fr~hi~id~it~ja~ko~pt~ru~th~vi")]).then(n.bind(null, 635))
        }
        )),
        c()(r, _.SuiteLanguages.TH_TH, (function() {
            return Promise.all([n.e("resource~cn~de~en~es~fr~hi~id~it~ja~ko~pt~ru~th~vi"), n.e("resource~th"), n.e("vendor~cn~de~en~es~fr~hi~id~it~ja~ko~pt~ru~th~vi")]).then(n.bind(null, 636))
        }
        )),
        c()(r, _.SuiteLanguages.VI_VN, (function() {
            return Promise.all([n.e("resource~cn~de~en~es~fr~hi~id~it~ja~ko~pt~ru~th~vi"), n.e("resource~vi"), n.e("vendor~cn~de~en~es~fr~hi~id~it~ja~ko~pt~ru~th~vi")]).then(n.bind(null, 637))
        }
        )),
        r);
        function d(e) {
            return f.apply(this, arguments)
        }
        function f() {
            return (f = o()(s.a.mark((function e(t) {
                var n;
                return s.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = l[t] || l[_.SuiteLanguages.EN_US],
                            e.abrupt("return", n().then((function(e) {
                                return e.default
                            }
                            )));
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
    },
    339: function(e, t, n) {
        "use strict";
        var r = n(29)
          , i = n.n(r)
          , o = n(64)
          , a = n(612)
          , c = n(131)
          , u = n(0)
          , s = n.n(u);
        t.a = function(e) {
            var t = e.locale
              , n = e.isDark
              , r = void 0 !== n && n
              , _ = e.udPrefix
              , l = Object(u.useState)({})
              , d = i()(l, 2)
              , f = d[0]
              , p = d[1];
            return Object(u.useEffect)((function() {
                Object(a.a)(t).then((function(e) {
                    p(e)
                }
                ))
            }
            ), [t]),
            s.a.createElement(c.a, {
                prefixCls: _,
                locale: f,
                useLocaleFontFamily: !0
            }, s.a.createElement(o.a, {
                mode: r ? "dark" : "light"
            }, e.children))
        }
    },
    346: function(e, t, n) {
        "use strict";
        (function(e) {
            var r = n(34)
              , i = n.n(r)
              , o = n(29)
              , a = n.n(o)
              , c = n(11)
              , u = n.n(c)
              , s = (n(79),
            n(0))
              , _ = n.n(s)
              , l = n(3)
              , d = n(41)
              , f = n(347)
              , p = n(30)
              , E = n(350)
              , g = n(90)
              , S = n(107);
            n(529);
            t.a = function() {
                var t = Object(s.useState)(!0)
                  , n = a()(t, 2)
                  , r = n[0]
                  , o = n[1]
                  , c = Object(s.useState)(!1)
                  , m = a()(c, 2)
                  , O = m[0]
                  , h = m[1]
                  , T = Object(s.useState)(new Error(e(p.b.UNKNOWN_ERROR)))
                  , v = a()(T, 2)
                  , I = v[0]
                  , y = v[1]
                  , R = Object(s.useState)("")
                  , N = a()(R, 2)
                  , A = N[0]
                  , C = N[1];
                Object(s.useEffect)((function() {
                    "true" !== Object(l.d)("needInteraction") ? L() : o(!1)
                }
                ), []);
                var L = function() {
                    var t = i()(u.a.mark((function t() {
                        var n, r, i, a, c, s, _;
                        return u.a.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (t.prev = 0,
                                    o(!0),
                                    h(!1),
                                    n = Object(l.d)("p"),
                                    r = Object(l.d)("action"),
                                    i = Object(l.d)("logid"),
                                    r === p.a.REGISTER && (a = Object(S.e)(n),
                                    d.a.updateUserId(a)),
                                    Object(S.b)()) {
                                        t.next = 9;
                                        break
                                    }
                                    throw new Error(e(p.b.WEB_AUTHN_UNAVAILABLE));
                                case 9:
                                    if (Object(S.a)()) {
                                        t.next = 11;
                                        break
                                    }
                                    throw new Error(e(p.b.PLATFORM_AUTHENTICATOR_UNSUPPORTED));
                                case 11:
                                    if (n && (r === p.a.REGISTER || r === p.a.LOGIN)) {
                                        t.next = 13;
                                        break
                                    }
                                    throw new Error(e(p.b.MISSING_PARAM));
                                case 13:
                                    if (r !== p.a.REGISTER) {
                                        t.next = 22;
                                        break
                                    }
                                    return t.next = 17,
                                    Object(S.c)(n);
                                case 17:
                                    c = t.sent,
                                    Object(l.f)() ? C("larkfido2://authcallback?action=0&p=".concat(c, "&logid=").concat(i)) : Object(g.a)("larkfido2://authcallback?action=0&p=".concat(c, "&logid=").concat(i)),
                                    t.next = 29;
                                    break;
                                case 22:
                                    if (r !== p.a.LOGIN) {
                                        t.next = 29;
                                        break
                                    }
                                    return t.next = 26,
                                    Object(S.d)(n);
                                case 26:
                                    s = t.sent,
                                    Object(l.f)() ? C("larkfido2://authcallback?action=1&p=".concat(s, "&logid=").concat(i)) : Object(g.a)("larkfido2://authcallback?action=1&p=".concat(s, "&logid=").concat(i));
                                case 29:
                                    t.next = 38;
                                    break;
                                case 31:
                                    t.prev = 31,
                                    t.t0 = t.catch(0),
                                    console.error(t.t0),
                                    _ = Object(l.d)("logid"),
                                    h(!0),
                                    y(t.t0),
                                    d.a.catch("logid: ".concat(_, ", [fido_middle_page] init errorMsg: ").concat((null === t.t0 || void 0 === t.t0 ? void 0 : t.t0.msg) || t.t0));
                                case 38:
                                    return t.prev = 38,
                                    o(!1),
                                    t.finish(38);
                                case 41:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, null, [[0, 31, 38, 41]])
                    }
                    )));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }();
                return _.a.createElement("div", {
                    className: "fido2-middle-page"
                }, r ? _.a.createElement(f.a, null) : _.a.createElement(E.a, {
                    retryFunc: L,
                    hasError: O,
                    error: I,
                    openSchemaUrl: A
                }))
            }
        }
        ).call(this, n(87).default)
    },
    347: function(e, t, n) {
        "use strict";
        var r = n(0)
          , i = n.n(r)
          , o = n(618)
          , a = n(245);
        t.a = function(e) {
            return i.a.createElement(a.a, {
                image: i.a.createElement(o.a, null),
                description: e.desc || ""
            })
        }
    },
    350: function(e, t, n) {
        "use strict";
        (function(e) {
            n(79),
            n(108);
            var r = n(0)
              , i = n.n(r)
              , o = n(619)
              , a = n(620)
              , c = n(621)
              , u = n(245)
              , s = n(78)
              , _ = n(355)
              , l = n(364)
              , d = n.n(l)
              , f = n(365)
              , p = n.n(f)
              , E = n(3)
              , g = n(30)
              , S = n(359)
              , m = n(90);
            t.a = function(t) {
                var n = t.retryFunc
                  , r = t.hasError
                  , l = t.error
                  , f = t.openSchemaUrl
                  , O = /(theme=dark)/.test(location.href.toLowerCase())
                  , h = Object(E.d)("logid")
                  , T = Object(E.d)("action")
                  , v = function() {
                    r ? Object(m.a)("larkfido2://authcallback?action=".concat(g.a.CLOSE, "&error=").concat(null == l ? void 0 : l.message, "&logid=").concat(h)) : Object(m.a)("larkfido2://authcallback?action=".concat(g.a.CLOSE, "&logid=").concat(h))
                };
                return r && l ? i.a.createElement(i.a.Fragment, null, i.a.createElement(u.a, {
                    image: i.a.createElement(o.a, null),
                    title: g.c.hasOwnProperty(l.name) ? e(g.c[l.name]) : e("Lark_Passport_AccountSecurityCenter_AccountProtection_SetSecurityKey_SystemBusyTryLaterDesc"),
                    description: i.a.createElement(i.a.Fragment, null, e("Lark_Passport_AccountSecurityCenter_ContactAgentForHelpWithError_Text", {
                        ViewErrorInfo: i.a.createElement(s.a, {
                            type: "link",
                            color: "primary",
                            onClick: function() {
                                Object(_.a)({
                                    icon: "info",
                                    title: e("Lark_Passport_AccountSecurityCenter_ErrorInformationPopUp_Title"),
                                    subtitle: (null == l ? void 0 : l.message) || "",
                                    showCancel: !0,
                                    cancelText: e("Lark_Passport_AccountSecurityCenter_ErrorInformationPopUp_CloseButton"),
                                    confirmText: e("Lark_Passport_AccountSecurityCenter_ErrorInformationPopUp_CopyButton"),
                                    onConfirm: function() {
                                        Object(S.a)(null == l ? void 0 : l.message)
                                    }
                                })
                            }
                        }, e("Lark_Passport_AccountSecurityCenter_ContactAgentForHelpWithError_VIewErrorInformation"))
                    }))
                }), i.a.createElement("div", {
                    className: "btn-group"
                }, i.a.createElement(s.a, {
                    type: "primary",
                    color: "primary",
                    onClick: n
                }, e("Lark_Passport_AccountSecurityCenter_AccountProtection_SetSecurityKey_SystemBusyTryLater_RetryButton")), i.a.createElement(s.a, {
                    onClick: v
                }, T === g.a.REGISTER ? e("Lark_Passport_AccountSecurityCenter_AccountProtection_SetSecurityKey_SystemBusyTryLater_BackToListButton") : e("Lark_Passport_AccountSecurityCenter_VerifySecurityKey_ReturnButton")))) : i.a.createElement(i.a.Fragment, null, i.a.createElement(u.a, {
                    imageStyle: {
                        width: 100,
                        minHeight: 100
                    },
                    image: f ? i.a.createElement(a.a, null) : i.a.createElement(i.a.Fragment, null, T === g.a.REGISTER ? i.a.createElement("img", {
                        src: O ? d.a : p.a,
                        alt: "pic",
                        style: {
                            width: 100,
                            minHeight: 100
                        }
                    }) : i.a.createElement(c.a, null)),
                    title: f ? e("Lark_Passport_SecurityKeyManagement_SecurityVerifiedStatusCommon_Title") : i.a.createElement(i.a.Fragment, null, T === g.a.REGISTER ? e("Lark_Passport_AccountSecurityCenter_AccountProtection_SecurityKeyDetailsPage_AddSecurityKeyButton") : e("Lark_Passport_AccountSecurityCenter_VerifySecurityKey_Title")),
                    description: f ? e("Lark_Passport_SecurityKeyManagement_SecurityVerifiedStatusCommon_Desc") : i.a.createElement(i.a.Fragment, null, T === g.a.REGISTER ? e("Lark_Passport_AccountSecurityCenter_AccountProtection_SetSecurityKey_ClickButtonForActionDesc") : e("Lark_Passport_AccountSecurityCenter_VerifySecurityKey_Desc"))
                }), i.a.createElement("div", {
                    className: "btn-group"
                }, f ? i.a.createElement(s.a, {
                    type: "primary",
                    color: "primary",
                    onClick: function() {
                        return Object(m.a)(f)
                    }
                }, e("Lark_Passport_SecurityKeyManagement_VerifiedGoBackToApp_Button")) : i.a.createElement(i.a.Fragment, null, i.a.createElement(s.a, {
                    type: "primary",
                    color: "primary",
                    onClick: n
                }, T === g.a.REGISTER ? e("Lark_Passport_AccountSecurityCenter_AccountProtection_SetSecurityKey_ClickButtonForAction_AddButton") : e("Lark_Passport_AccountSecurityCenter_VerifySecurityKey_ClickToVerifyButton")), i.a.createElement(s.a, {
                    onClick: v
                }, T === g.a.REGISTER ? e("Lark_Passport_AccountSecurityCenter_AccountProtection_SetSecurityKey_SystemBusyTryLater_BackToListButton") : e("Lark_Passport_AccountSecurityCenter_VerifySecurityKey_ReturnButton")))))
            }
        }
        ).call(this, n(87).default)
    },
    355: function(e, t, n) {
        "use strict";
        (function(e) {
            n.d(t, "a", (function() {
                return M
            }
            ));
            n(562),
            n(20),
            n(19),
            n(25),
            n(22),
            n(23),
            n(1);
            var r = n(7)
              , i = n.n(r)
              , o = n(34)
              , a = n.n(o)
              , c = n(29)
              , u = n.n(c)
              , s = n(71)
              , _ = n.n(s)
              , l = n(102)
              , d = n.n(l)
              , f = n(356)
              , p = n.n(f)
              , E = n(357)
              , g = n.n(E)
              , S = n(241)
              , m = n.n(S)
              , O = n(11)
              , h = n.n(O)
              , T = (n(24),
            n(0))
              , v = n.n(T)
              , I = n(40)
              , y = n.n(I)
              , R = n(358)
              , N = n(613)
              , A = n(614)
              , C = n(615)
              , L = n(616)
              , b = n(617)
              , P = n(65)
              , w = n.n(P)
              , D = n(244);
            n(566);
            function k(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                        ))),
                        !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = m()(e);
                    if (t) {
                        var i = m()(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else
                        n = r.apply(this, arguments);
                    return g()(this, n)
                }
            }
            var U = function(e) {
                p()(n, e);
                var t = k(n);
                function n() {
                    return _()(this, n),
                    t.apply(this, arguments)
                }
                return d()(n, [{
                    key: "render",
                    value: function() {
                        var e = this.props
                          , t = e.children;
                        return e.visible ? v.a.createElement("div", {
                            className: "base-modal-container"
                        }, v.a.createElement("div", {
                            className: "base-modal"
                        }, t)) : v.a.createElement(v.a.Fragment, null)
                    }
                }]),
                n
            }(v.a.Component);
            U.open = function(t) {
                var n = t.children
                  , r = t.title
                  , i = t.okButtonProps
                  , o = t.onOk
                  , a = t.okText
                  , c = t.cancelText
                  , u = t.wrapClassName
                  , s = t.renderFooter
                  , _ = void 0 !== s && s
                  , l = t.onCancel
                  , d = "basemodalid".concat(Math.floor(1e6 * Math.random()))
                  , f = document.createElement("div");
                return f.setAttribute("id", d),
                (document.getElementById("login2-com-container-uniqueid") || document.body).appendChild(f),
                y.a.render(v.a.createElement("div", {
                    className: w()("base-modal-container", u)
                }, v.a.createElement("div", {
                    className: "base-modal"
                }, r && v.a.createElement("div", {
                    className: "modal-title"
                }, r), v.a.createElement("div", {
                    className: "modal-content-content"
                }, n), _ && v.a.createElement("div", {
                    className: "modal-footer horizontal-button"
                }, v.a.createElement(j, {
                    confirmDisabled: null == i ? void 0 : i.disabled,
                    showCancel: !0,
                    onConfirm: o,
                    confirmText: a || e("Lark_Passportweb_Confirm"),
                    cancelText: c || e("Lark_Passportweb_Cancel"),
                    onCancel: l
                })))), f),
                d
            }
            ,
            U.close = function(e) {
                var t;
                if (e) {
                    var n = document.getElementById(e);
                    null == n || null === (t = n.parentNode) || void 0 === t || t.removeChild(n)
                }
            }
            ;
            var j = v.a.memo((function(e) {
                var t = e.confirmType
                  , n = void 0 === t ? "primary" : t
                  , r = e.time
                  , o = e.keepLoading
                  , c = e.onConfirm
                  , s = e.confirmText
                  , _ = e.showCancel
                  , l = e.onCancel
                  , d = e.cancelText
                  , f = e.onClose
                  , p = e.confirmDisabled
                  , E = Object(T.useState)(r || 0)
                  , g = u()(E, 2)
                  , S = g[0]
                  , m = g[1]
                  , O = Object(T.useState)(!1)
                  , I = u()(O, 2)
                  , y = I[0]
                  , R = I[1]
                  , N = {
                    className: w()("pp-modal-btn-confirm", {
                        primary: "primary" === n,
                        danger: "danger" === n
                    }),
                    type: "default" === n ? "default" : "primary",
                    color: "danger" === n ? "danger" : void 0
                };
                return Object(T.useEffect)((function() {
                    S > 0 && setTimeout((function() {
                        S > 0 && m(S - 1)
                    }
                    ), 1e3)
                }
                ), [S]),
                v.a.createElement(v.a.Fragment, null, _ && v.a.createElement(D.a, {
                    className: "pp-modal-btn-cancel",
                    onClickButton: function() {
                        y || (null == l || l(),
                        null == f || f())
                    }
                }, d), v.a.createElement(D.a, i()({}, N, {
                    disabled: S > 0 || p,
                    loading: y,
                    onClickButton: a()(h.a.mark((function e() {
                        return h.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!y) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return R(!0),
                                    e.next = 5,
                                    null == c ? void 0 : c();
                                case 5:
                                    if (!o) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 7:
                                    R(!1),
                                    null == f || f();
                                case 9:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))
                }), s, S > 0 ? "(".concat(S, "s)") : ""))
            }
            ))
              , G = {
                info: N.a,
                warning: A.a,
                success: C.a,
                error: L.a
            }
              , M = function(e) {
                var t = e.title
                  , n = e.subtitle
                  , r = e.subtitleHtml
                  , o = e.shouldShowClose
                  , a = e.width
                  , c = e.className
                  , u = e.verticalButton
                  , s = e.icon
                  , _ = void 0 === s ? "info" : s
                  , l = e.wrapClassName
                  , d = {}
                  , f = document.createElement("div");
                f.className = "__pp_common_modal_container",
                document.body.appendChild(f);
                var p = !1;
                function E() {
                    if (!p)
                        try {
                            p = !0,
                            f.classList.add("_modal-wrapper-closing"),
                            setTimeout((function() {
                                document.body.removeChild(f),
                                f = null
                            }
                            ), 300)
                        } catch (e) {}
                }
                var g = w()("modal-footer", {
                    "vertical-button": u,
                    "horizontal-button": !u
                })
                  , S = G[_];
                return y.a.render(v.a.createElement("div", {
                    className: w()("base-modal-container", l)
                }, v.a.createElement("div", {
                    className: w()("base-modal", c),
                    style: a ? {
                        width: a
                    } : {}
                }, o && v.a.createElement(b.a, {
                    onClick: E,
                    className: "close"
                }), v.a.createElement("div", {
                    className: "moadl-content"
                }, S && v.a.createElement(S, {
                    className: "modal-icon"
                }), v.a.createElement("div", {
                    style: {
                        width: "100%"
                    }
                }, t && v.a.createElement("div", {
                    className: "modal-title"
                }, t), v.a.createElement("div", {
                    className: "modal-subtitle-container"
                }, r ? v.a.createElement("div", {
                    className: "modal-subtitle",
                    dangerouslySetInnerHTML: {
                        __html: R._filterXSS(r)
                    }
                }) : n && v.a.createElement("div", {
                    className: "modal-subtitle"
                }, n)))), v.a.createElement("div", {
                    className: g
                }, v.a.createElement(j, i()({}, e, {
                    onClose: E
                }))))), f),
                d.close = E,
                d
            };
            M.clearModal = function() {
                try {
                    document.querySelectorAll(".".concat("__pp_common_modal_container")).forEach((function(e) {
                        null != e && e.parentNode && e.parentNode.removeChild(e)
                    }
                    ))
                } catch (e) {}
            }
        }
        ).call(this, n(87).default)
    },
    359: function(e, t, n) {
        "use strict";
        (function(e) {
            n.d(t, "a", (function() {
                return i
            }
            ));
            var r = n(243)
              , i = function(t) {
                var n = document.createElement("input");
                n.setAttribute("value", t),
                document.body.appendChild(n),
                n.select(),
                document.execCommand("copy") ? r.a.success(e("Lark_Passport_AccountSecurityCenter_CopyErrorInformation_CopiedToast")) : r.a.error(e("Lark_Passport_AccountSecurityCenter_CopyErrorInformation_UnableToCopyToast")),
                document.body.removeChild(n)
            }
        }
        ).call(this, n(87).default)
    },
    364: function(e, t, n) {
        e.exports = n.p + "static/fido/img/add_fido_illustration_dark.04e425c2.png"
    },
    365: function(e, t, n) {
        e.exports = n.p + "static/fido/img/add_fido_illustration_light.8af30537.png"
    },
    376: function(e, t, n) {
        n(377),
        n(392),
        n(414),
        n(415),
        e.exports = n(417)
    },
    4: function(e, t, n) {
        "use strict";
        var r = n(29)
          , i = n.n(r)
          , o = n(21)
          , a = n.n(o)
          , c = n(34)
          , u = n.n(c)
          , s = n(71)
          , _ = n.n(s)
          , l = n(102)
          , d = n.n(l)
          , f = (n(92),
        n(11))
          , p = n.n(f)
          , E = n(2)
          , g = n(9);
        var S = {
            locale: "zh-CN",
            qrSize: 184,
            showSwitch: !0,
            showAutoLogin: !0,
            showRegister: !0,
            appType: E.e.PC,
            startStep: E.b.LOGIN,
            startStepData: {},
            toRegisterSuccess: !1,
            isISV: !1,
            isDark: !1
        }
          , m = new (function() {
            function e() {
                _()(this, e),
                this.pageConfig = {
                    feishu: {},
                    lark: {}
                },
                this.appId = "",
                this.appName = "Lark",
                this.evokerName = "Lark",
                this.deviceId = "0",
                this.deviceModel = "",
                this.deviceName = "",
                this.deviceOs = "",
                this.isDark = !1,
                this.containerUuid = "",
                this.appVersion = "",
                this.packageName = "",
                this.codeValue = "",
                this.accountType = "",
                this.serverInjectRes = window.serverInjectRes,
                this.needPwdRsa = !0,
                this.locale = "en-US",
                this.isvPageInfo = {},
                this.redirect_uri = "",
                this.domains = {},
                this.serverUnit = g.e.EU_NC,
                this.serverBrand = g.f.FEISHU,
                this.clientUnit = g.e.EU_NC,
                this.clientBrand = g.f.FEISHU,
                this.showToLark = !1,
                this.currentIdentity = [],
                this.regParams = {},
                this.isWindowOpened = !1,
                this.generalFrom = "",
                this.isSinglePageSDK = !1,
                this.getDeviceId = void 0,
                this.getChaptChaToken = function() {}
                ,
                this.onLoginSuccess = function() {}
                ,
                this.__TEA = function() {}
                ,
                this.__logger = {
                    info: function() {},
                    warn: function() {},
                    error: function() {}
                },
                this.__reportSlardar = function() {}
                ,
                this.__openModal = u()(p.a.mark((function e() {
                    return p.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                ))),
                this.__openErrorToast = u()(p.a.mark((function e() {
                    return p.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                ))),
                this.__openSuccessToast = u()(p.a.mark((function e() {
                    return p.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                ))),
                this.__loginCommonRequest = function() {}
                ,
                this.globalStageChangeListener = {},
                this.captchaSuccessCb = function() {}
            }
            return d()(e, [{
                key: "set",
                value: function(e) {
                    var t = this;
                    "object" === a()(e) && function(e) {
                        for (var t = [], n = Object.keys(e), r = 0; r < n.length; r++)
                            t.push([n[r], e[n[r]]]);
                        return t
                    }(e).map((function(e) {
                        var n = i()(e, 2)
                          , r = n[0]
                          , o = n[1];
                        t[r] = o
                    }
                    ))
                }
            }, {
                key: "language",
                get: function() {
                    return this.locale
                }
            }, {
                key: "isPC",
                get: function() {
                    return this.appType === E.e.PC
                }
            }, {
                key: "isWeb",
                get: function() {
                    return this.appType !== E.e.PC
                }
            }, {
                key: "isLogin",
                get: function() {
                    return this.appType === E.e.LOGIN
                }
            }, {
                key: "isAbnormal",
                get: function() {
                    return this.appType === E.e.ABNORMAL
                }
            }, {
                key: "isConfirm",
                get: function() {
                    return this.appType === E.e.CONFIRM
                }
            }, {
                key: "isUGRegister",
                get: function() {
                    return this.appType === E.e.UG_REGISTER
                }
            }, {
                key: "isLarkRegister",
                get: function() {
                    return this.appType === E.e.LARK_REGISTER
                }
            }, {
                key: "isRegister",
                get: function() {
                    return this.appType === E.e.REGISTER
                }
            }, {
                key: "isWidget",
                get: function() {
                    return this.appType === E.e.WIDGET
                }
            }, {
                key: "isServerBrandLark",
                get: function() {
                    return this.serverBrand === g.f.LARK
                }
            }, {
                key: "isClientBrandLark",
                get: function() {
                    return this.clientBrand === g.f.LARK
                }
            }, {
                key: "pageConfigOfServerBrand",
                get: function() {
                    return this.pageConfig[this.serverBrand]
                }
            }, {
                key: "pageConfigOfClientBrand",
                get: function() {
                    return this.pageConfig[this.clientBrand]
                }
            }, {
                key: "defaultAccountType",
                get: function() {
                    return this.isServerBrandLark ? "mail" : "mobile"
                }
            }, {
                key: "blackCountryList",
                get: function() {
                    return this.pageConfig[this.serverBrand].black_country_list || []
                }
            }, {
                key: "hotCountryList",
                get: function() {
                    return this.pageConfig[this.serverBrand].top_country_list || (this.isServerBrandLark ? ["US", "JP", "SG"] : ["CN", "US", "JP", "SG", "HK", "MO", "TW"])
                }
            }, {
                key: "isMiddle",
                get: function() {
                    var e;
                    return Boolean(null === (e = this.middlePageData) || void 0 === e ? void 0 : e.next_step)
                }
            }, {
                key: "isPwdLessAuth",
                get: function() {
                    return Boolean(this.pwdLessAuthPageData)
                }
            }, {
                key: "__log",
                value: function() {
                    for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                        n[r] = arguments[r];
                    null === (e = this.__logger) || void 0 === e || e.info(n)
                }
            }]),
            e
        }());
        m.set(S),
        t.a = m
    },
    41: function(e, t, n) {
        "use strict";
        n(19),
        n(22),
        n(23);
        var r = n(1)
          , i = n.n(r)
          , o = n(21)
          , a = n.n(o)
          , c = n(71)
          , u = n.n(c)
          , s = n(102)
          , _ = n.n(s)
          , l = (n(79),
        n(25),
        n(197),
        n(24),
        n(20),
        n(277),
        n(32))
          , d = n(3);
        function f(e, t) {
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
        function p(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? f(Object(n), !0).forEach((function(t) {
                    i()(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var E = new (function() {
            function e() {
                var t = this;
                u()(this, e),
                this.isPcReport = !1,
                this._eventType = "unknown",
                this._logType = "info",
                this._action = l.a.LOGIC_SWITCH,
                this._logClass = "tech",
                this._scope = Object(d.c)()[0],
                this._subScope = "",
                this.pcReporter = function() {}
                ,
                this.times = {},
                this.initPC = function(e) {
                    t.isPcReport = !0,
                    t.pcReporter = e
                }
                ,
                this.catch = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , n = e;
                    if (window.SlardarWeb) {
                        if (!(n instanceof Error))
                            if ("object" === a()(n))
                                try {
                                    n = new Error(JSON.stringify(n))
                                } catch (r) {
                                    n = new Error(n)
                                }
                            else
                                n = new Error(n);
                        window.SlardarWeb("captureException", n, t)
                    }
                }
                ,
                this.reportMetrics = function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    t.isPcReport ? t.pcReporter("[passport]:".concat(e), {
                        metric: n,
                        category: r
                    }) : window.SlardarWeb && window.SlardarWeb("sendEvent", {
                        name: e,
                        metrics: n,
                        categories: r
                    })
                }
                ,
                this._prepare = function(e) {
                    t._action = e.action || l.a.LOGIC_SWITCH,
                    t._logClass = "tech",
                    t._subScope = e.sub_scope || ""
                }
                ,
                this._genEventName = function(e, n) {
                    var r, i = e;
                    (t._prepare(n),
                    t._subScope === l.c.CHANGE_STEP) && (i = "".concat(i, "_").concat(null == n || null === (r = n.params) || void 0 === r ? void 0 : r.step));
                    return [t._scope, t._action, t._subScope, i].filter((function(e) {
                        return e
                    }
                    )).join("_")
                }
                ,
                this._genCategory = function(e) {
                    var n, r = e.params, i = e.action, o = e.target, a = e.source, c = e.sub_scope, u = e.scope, s = e.error, _ = {
                        log_type: t._logType,
                        log_class: t._logClass,
                        event_type: t._eventType
                    };
                    (r && Object.keys(r).forEach((function(e) {
                        _["params_".concat(e)] = r[e]
                    }
                    )),
                    o && (_.target = o),
                    a && (_.source = a),
                    c && (_.sub_scope = c),
                    u && (_.scope = u),
                    i && (_.action = i),
                    s) && (_._error = Object(d.r)(s),
                    _.biz_code = (null == s ? void 0 : s.biz_code) || (null == s || null === (n = s.resData) || void 0 === n ? void 0 : n.biz_code));
                    return _
                }
                ,
                this.info = function(e, n) {
                    try {
                        var r = p({
                            values: 1
                        }, n.metrics);
                        t._logType = "info";
                        var i, o = t._genEventName(e, n);
                        n && (i = t._genCategory(n)),
                        t.reportMetrics(o, r, i),
                        t.log(o, i)
                    } catch (a) {}
                }
                ,
                this.error = function(e, n) {
                    try {
                        var r = p({
                            values: 1
                        }, n.metrics);
                        t._logType = "error";
                        var i, o, a = t._genEventName(e, n);
                        if (n && (i = t._genCategory(n)),
                        t.reportMetrics(a, r, i),
                        t.log(a, i),
                        t._action === l.a.LOGIC_SWITCH_UNEXPECTED)
                            window.SlardarWeb("captureException", (null === (o = i) || void 0 === o ? void 0 : o._error) || {}, i)
                    } catch (c) {}
                }
                ,
                this.warn = function(e, n) {
                    try {
                        var r = p({
                            values: 1
                        }, n.metrics);
                        t._logType = "warn";
                        var i, o = t._genEventName(e, n);
                        n && (i = t._genCategory(n)),
                        t.reportMetrics(o, r, i),
                        t.log(o, i)
                    } catch (a) {}
                }
                ,
                this.start = function(e) {
                    t.times[e] = Date.now()
                }
                ,
                this.end = function(e, n) {
                    if (window.SlardarWeb)
                        try {
                            if (!t.times[e])
                                return;
                            var r = Date.now() - Number(t.times[e]);
                            n.error ? t._logType = "error" : t._logType = n.log_type || "info";
                            var i, o = p({
                                timespend: r
                            }, n.metrics), a = t._genEventName(e, n);
                            n && (i = t._genCategory(n)),
                            t.reportMetrics(a, o, i),
                            t.log(a, i),
                            n.error && t._action === l.a.LOGIC_SWITCH_UNEXPECTED && window.SlardarWeb("captureException", n.error, i)
                        } catch (c) {}
                }
                ,
                this.log = function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    e && window.SlardarWeb && window.SlardarWeb("sendLog", {
                        level: t._logType,
                        content: "".concat(e, ": ").concat(JSON.stringify(n))
                    })
                }
                ,
                this.updateUserId = function(e) {
                    window.SlardarWeb && (window.SlardarWeb("config", {
                        userId: e
                    }),
                    window.SlardarWeb("start"))
                }
                ,
                this.updateDeviceId = function(e) {
                    window.SlardarWeb && (window.SlardarWeb("config", {
                        deviceId: e
                    }),
                    window.SlardarWeb("start"))
                }
            }
            return _()(e, [{
                key: "user",
                get: function() {
                    return this._eventType = "user",
                    this
                }
            }, {
                key: "page",
                get: function() {
                    return this._eventType = "page",
                    this
                }
            }, {
                key: "net",
                get: function() {
                    return this._eventType = "net",
                    this
                }
            }, {
                key: "jsb",
                get: function() {
                    return this._eventType = "jsb",
                    this
                }
            }, {
                key: "func",
                get: function() {
                    return this._eventType = "func",
                    this
                }
            }]),
            e
        }());
        t.a = E
    },
    417: function(e, t, n) {
        "use strict";
        n.r(t),
        function(e) {
            n(20),
            n(19),
            n(25),
            n(22),
            n(24),
            n(23);
            var t = n(34)
              , r = n.n(t)
              , i = n(1)
              , o = n.n(i)
              , a = n(11)
              , c = n.n(a)
              , u = (n(453),
            n(454),
            n(455),
            n(5))
              , s = n(0)
              , _ = n.n(s)
              , l = n(40)
              , d = n.n(l)
              , f = n(339)
              , p = n(338)
              , E = n(2)
              , g = n(4)
              , S = n(3)
              , m = n(128)
              , O = n(335)
              , h = n(346)
              , T = n(238);
            function v(e, t) {
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
            function I(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? v(Object(n), !0).forEach((function(t) {
                        o()(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : v(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            u.suiteLang.init({
                locales: u.suiteLangList
            });
            var y = Object(S.b)()
              , R = Object(m.c)()
              , N = window
              , A = N.brand
              , C = N.isServerBrandLark
              , L = N.ENV
              , b = N.unit;
            g.a.set(I(I({
                deviceInfo: y
            }, y), {}, {
                locale: R,
                clientBrand: A,
                serverBrand: A,
                serverUnit: b,
                brand: A,
                appName: Object(m.a)(C, R),
                env: L
            }));
            var P = /(theme=dark)/.test(location.href.toLowerCase())
              , w = /(action=0)/.test(location.href.toLowerCase());
            Object(T.a)(P),
            function() {
                var t = r()(c.a.mark((function t() {
                    var n;
                    return c.a.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return window.isPrivateKA || Object(O.a)({
                                    contextFrom: E.e.FIDO_MIDDLE_PAGE
                                }),
                                t.prev = 1,
                                t.next = 4,
                                Object(p.a)(R);
                            case 4:
                                n = t.sent,
                                e.init(n.i18n, R),
                                t.next = 11;
                                break;
                            case 8:
                                t.prev = 8,
                                t.t0 = t.catch(1),
                                console.error("Load I18nData error");
                            case 11:
                                Object(T.b)(w),
                                d.a.render(_.a.createElement(f.a, {
                                    locale: R,
                                    isDark: P
                                }, _.a.createElement(h.a, null)), document.getElementById("root"));
                            case 13:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, null, [[1, 8]])
                }
                )));
                return function() {
                    return t.apply(this, arguments)
                }
            }()()
        }
        .call(this, n(87).default)
    },
    422: function(e, t, n) {
        "use strict";
        var r, i, o, a = this && this.__assign || function() {
            return (a = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var i in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e
            }
            ).apply(this, arguments)
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.getSuiteLangNames = t.suiteLangList = t.defaultLangList = t.SuiteLangNamesOversea = t.SuiteLangNames = t.SuiteLanguages = void 0,
        function(e) {
            e.ID_ID = "id-ID",
            e.DE_DE = "de-DE",
            e.EN_US = "en-US",
            e.ES_ES = "es-ES",
            e.FR_FR = "fr-FR",
            e.IT_IT = "it-IT",
            e.PT_BR = "pt-BR",
            e.VI_VN = "vi-VN",
            e.RU_RU = "ru-RU",
            e.HI_IN = "hi-IN",
            e.TH_TH = "th-TH",
            e.KO_KR = "ko-KR",
            e.JA_JP = "ja-JP",
            e.ZH_TW = "zh-TW",
            e.ZH_HK = "zh-HK",
            e.ZH_CN = "zh-CN"
        }(o = t.SuiteLanguages || (t.SuiteLanguages = {})),
        t.SuiteLangNames = ((r = {})[o.ID_ID] = "Bahasa Indonesia",
        r[o.DE_DE] = "Deutsch",
        r[o.EN_US] = "English",
        r[o.ES_ES] = "Español",
        r[o.FR_FR] = "Français",
        r[o.IT_IT] = "Italiano",
        r[o.PT_BR] = "Português (Brasil)",
        r[o.VI_VN] = "Tiếng Việt",
        r[o.RU_RU] = "Русский",
        r[o.HI_IN] = "हिन्दी",
        r[o.TH_TH] = "ภาษาไทย",
        r[o.KO_KR] = "한국어",
        r[o.ZH_CN] = "简体中文",
        r[o.ZH_HK] = "繁體中文（中國香港）",
        r[o.ZH_TW] = "繁體中文（中國台灣）",
        r[o.JA_JP] = "日本語",
        r),
        t.SuiteLangNamesOversea = a(a({}, t.SuiteLangNames), ((i = {})[o.ZH_HK] = "繁體中文（香港）",
        i[o.ZH_TW] = "繁體中文（台灣）",
        i)),
        t.defaultLangList = [o.ZH_CN, o.ZH_HK, o.ZH_TW, o.EN_US, o.JA_JP],
        t.suiteLangList = [o.EN_US, o.ID_ID, o.DE_DE, o.ES_ES, o.FR_FR, o.IT_IT, o.PT_BR, o.VI_VN, o.RU_RU, o.HI_IN, o.TH_TH, o.JA_JP, o.ZH_CN, o.ZH_HK, o.ZH_TW, o.KO_KR];
        t.getSuiteLangNames = function(e) {
            return e ? t.SuiteLangNamesOversea : t.SuiteLangNames
        }
    },
    451: function(e, t) {},
    453: function(e, t, n) {
        n.p = document.querySelector('meta[name="AppPublic"]') ? document.querySelector('meta[name="AppPublic"]').getAttribute("content") : ""
    },
    454: function(e, t, n) {},
    455: function(e, t, n) {},
    467: function(e, t, n) {
        var r = {
            "./de-DE.js": [217],
            "./en-US.js": [162],
            "./es-ES.js": [218],
            "./fr-FR.js": [219],
            "./hi-IN.js": [220],
            "./id-ID.js": [221],
            "./index.js": [237],
            "./it-IT.js": [222],
            "./ja-JP.js": [223],
            "./ko-KR.js": [224],
            "./pt-BR.js": [225],
            "./ru-RU.js": [226],
            "./th-TH.js": [227],
            "./types.js": [247, 0],
            "./vi-VN.js": [228],
            "./zh-CN.js": [229],
            "./zh-HK.js": [230],
            "./zh-TW.js": [231]
        };
        function i(e) {
            if (!n.o(r, e))
                return Promise.resolve().then((function() {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND",
                    t
                }
                ));
            var t = r[e]
              , i = t[0];
            return Promise.all(t.slice(1).map(n.e)).then((function() {
                return n(i)
            }
            ))
        }
        i.keys = function() {
            return Object.keys(r)
        }
        ,
        i.id = 467,
        e.exports = i
    },
    5: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.suiteLang = t.toStandardLang = t.setSuiteLang = t.getSuiteLang = t.getCookie = t.SuiteLanguageKey = t.defaultLangList = t.suiteLangList = t.getSuiteLangNames = t.SuiteLangNamesOversea = t.SuiteLangNames = t.SuiteLanguages = void 0;
        var r = n(422);
        Object.defineProperty(t, "SuiteLanguages", {
            enumerable: !0,
            get: function() {
                return r.SuiteLanguages
            }
        }),
        Object.defineProperty(t, "SuiteLangNames", {
            enumerable: !0,
            get: function() {
                return r.SuiteLangNames
            }
        }),
        Object.defineProperty(t, "SuiteLangNamesOversea", {
            enumerable: !0,
            get: function() {
                return r.SuiteLangNamesOversea
            }
        }),
        Object.defineProperty(t, "getSuiteLangNames", {
            enumerable: !0,
            get: function() {
                return r.getSuiteLangNames
            }
        }),
        Object.defineProperty(t, "suiteLangList", {
            enumerable: !0,
            get: function() {
                return r.suiteLangList
            }
        }),
        Object.defineProperty(t, "defaultLangList", {
            enumerable: !0,
            get: function() {
                return r.defaultLangList
            }
        });
        var i = "undefined" == typeof window
          , o = ""
          , a = !i && !/^https?:.*\.(com|cn)$/.test(location.origin);
        t.SuiteLanguageKey = "locale";
        t.getCookie = function(e) {
            if (i)
                return "";
            try {
                return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*".concat(encodeURIComponent(e).replace(/[-.+*]/g, "\\$&"), "\\s*\\=\\s*([^;]*).*$)|^.*$")), "$1")) || ""
            } catch (t) {
                return ""
            }
        }
        ;
        t.getSuiteLang = function(e) {
            var n = (0,
            t.getCookie)(t.SuiteLanguageKey);
            return n = (0,
            t.toStandardLang)(n),
            e && !e.includes(n) ? "" : ((0,
            t.setSuiteLang)(n),
            n)
        }
        ;
        var c;
        t.setSuiteLang = function(e, n) {
            if (i)
                return !1;
            if (e = (0,
            t.toStandardLang)(e),
            n && !n.includes(e))
                return !1;
            var r = new Date(Date.now() + 31536e6).toGMTString();
            return document.cookie = "locale=".concat(e, "; path=/; domain=").concat(function() {
                if (i)
                    return "";
                if (o)
                    return o;
                var e = window.location.hostname;
                if (a)
                    return e;
                var t = e.split(".")
                  , n = "";
                return n = 2 === t.length ? e : [".com.cn", ".net.cn", ".org.cn"].some((function(t) {
                    return e.includes(t)
                }
                )) ? t.slice(-3).join(".") : t.slice(-2).join("."),
                ".".concat(n)
            }(), "; expires=").concat(r),
            !0
        }
        ,
        t.toStandardLang = (c = {},
        Object.values(r.SuiteLanguages).map((function(e) {
            c[e.replace(/[-_]/g, "").toLowerCase()] = e,
            c[e.toLowerCase().slice(0, 2)] = e
        }
        )),
        function(e) {
            var t = e.replace(/[-_]/g, "").toLowerCase();
            return e = e.toLowerCase().slice(0, 2),
            c[t] ? c[t] : c[e] || ""
        }
        );
        var u = function(e) {
            var n = this;
            this.locales = [r.SuiteLanguages.EN_US, r.SuiteLanguages.ZH_CN, r.SuiteLanguages.JA_JP],
            this.current = "",
            this.init = function(e) {
                e.locales && (n.locales = e.locales.map(t.toStandardLang)),
                e.domain && (o = e.domain)
            }
            ,
            this.get = function() {
                return n.current || (n.current = (0,
                t.getSuiteLang)(n.locales)),
                n.current
            }
            ,
            this.set = function(e) {
                return n.current = e,
                (0,
                t.setSuiteLang)(e, n.locales)
            }
            ,
            this.is = function(e) {
                return (n.current || (0,
                t.getSuiteLang)(n.locales)) === (0,
                t.toStandardLang)(e)
            }
            ,
            this.toValid = function(e) {
                if (void 0 === e && (e = ""),
                e)
                    return n.locales && n.locales.includes((0,
                    t.toStandardLang)(e)) ? (0,
                    t.toStandardLang)(e) : ""
            }
            ,
            e && "object" == typeof e && this.init(e)
        };
        t.suiteLang = new u,
        t.default = u
    },
    529: function(e, t, n) {},
    566: function(e, t, n) {},
    57: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return d
        }
        ));
        var r = n(21)
          , i = n.n(r)
          , o = n(29)
          , a = n.n(o)
          , c = n(71)
          , u = n.n(c);
        n(61),
        n(267),
        n(51),
        n(69),
        n(86),
        n(92);
        function s(e) {
            for (var t = [], n = Object.keys(e), r = 0; r < n.length; r++)
                t.push([n[r], e[n[r]]]);
            return t
        }
        var _ = function(e) {
            return void 0 === e
        }
          , l = function() {
            var e = this;
            this.record = new Map,
            this.set = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                s(t).map((function(t) {
                    var n = a()(t, 2)
                      , r = n[0]
                      , o = n[1];
                    "object" !== i()(o) || _(o.enable) ? !_(o) && ("object" !== i()(o) || "object" === i()(o) && _(o.enable) && _(o.content)) ? e.record.set(r, {
                        enable: !0,
                        content: o
                    }) : console.error("brand config type is invalid!") : e.record.set(r, o)
                }
                ))
            }
            ,
            this.get = function(t, n) {
                var r = e.record.get(t);
                return !r || _(r.enable) ? n : r.enable ? _(r.content) ? r.enable : r.content : null
            }
            ,
            this.getAll = function() {
                return e.record.entries()
            }
            ,
            this.load = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                s(t).map((function(t) {
                    var n = a()(t, 2)
                      , r = n[0]
                      , i = n[1]
                      , o = e.record.get(r);
                    o && !_(o.enable) || e.record.set(r, i)
                }
                ))
            }
        }
          , d = new function e(t) {
            u()(this, e),
            l.call(this),
            t && this.set(t)
        }
    },
    87: function(e, t, n) {
        "use strict";
        n.r(t);
        n(51),
        n(108),
        n(273),
        n(69),
        n(19),
        n(187),
        n(188),
        n(61),
        n(86);
        var r = n(21)
          , i = n.n(r)
          , o = (n(91),
        n(120),
        n(261),
        n(24),
        n(20),
        n(194),
        n(196),
        n(92),
        n(197),
        n(198),
        n(199),
        n(0))
          , a = n.n(o)
          , c = n(5)
          , u = n(4)
          , s = n(41);
        function _(e) {
            for (var t = [], n = Object.keys(e), r = 0; r < n.length; r++)
                t.push(e[n[r]]);
            return t
        }
        function l(e, t) {
            var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!n) {
                if (Array.isArray(e) || (n = function(e, t) {
                    if (!e)
                        return;
                    if ("string" == typeof e)
                        return d(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return d(e, t)
                }(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var r = 0
                      , i = function() {};
                    return {
                        s: i,
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
                        f: i
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, a = !0, c = !1;
            return {
                s: function() {
                    n = n.call(e)
                },
                n: function() {
                    var e = n.next();
                    return a = e.done,
                    e
                },
                e: function(e) {
                    c = !0,
                    o = e
                },
                f: function() {
                    try {
                        a || null == n.return || n.return()
                    } finally {
                        if (c)
                            throw o
                    }
                }
            }
        }
        function d(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        var f = null
          , p = c.SuiteLanguages.EN_US
          , E = null
          , g = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (E)
                return S(e, t);
            if (!f)
                return console.error("intl should be inited!");
            var n = ""
              , r = e;
            u.a.isWeb && -1 !== e.indexOf("Lark_Login_V3") && (r = e.replace("Lark_Login_V3", "Lark_Passportweb"));
            try {
                if (!(n = f[r] || f[e]))
                    return s.a.catch(new Error("Key named: ".concat(e, " not found, plz check ur data."))),
                    ""
            } catch (i) {}
            return v(t) ? O(n, t) : a.a.createElement(m, {
                text: n,
                options: t
            })
        };
        g.setLocale = function(e) {
            p = e
        }
        ,
        g.setI18nMap = function(e) {
            f = e
        }
        ,
        g.getLocale = function() {
            return p
        }
        ,
        g.init = function(e, t) {
            t && (p = t),
            f = e
        }
        ,
        g.extends = function(e) {
            return e && "object" === i()(e) ? f ? void Object.assign(f, e) : console.error("languagesMap is empty") : console.error("invalid i18n map")
        }
        ;
        var S = function(e, t) {
            if (E) {
                if (I(t)) {
                    var n = E(e);
                    return h(n, t)
                }
                return E(e, t)
            }
        }
          , m = function(e) {
            var t = e.text
              , n = e.options;
            return I(n) ? a.a.createElement(a.a.Fragment, null, h(t, n)) : a.a.createElement(a.a.Fragment, null)
        }
          , O = function(e, t) {
            var n = T(e) || "";
            return Object.keys(t).forEach((function(e) {
                n = n.replace(new RegExp("{{".concat(e, "}}"),"g"), t[e])
            }
            )),
            n
        }
          , h = function(e, t) {
            var n = T(e)
              , r = []
              , i = Object.keys(t).map((function(e) {
                return t["{{".concat(e, "}}")] = t[e],
                "{{".concat(e, "}}")
            }
            ))
              , o = new RegExp(i.join("|"),"g")
              , c = n.match(o) || [];
            try {
                var u, s = l(c);
                try {
                    for (s.s(); !(u = s.n()).done; ) {
                        var _ = u.value
                          , d = n.indexOf(_);
                        r.push(n.slice(0, d)),
                        r.push(t[_]),
                        n = n.slice(d + _.length)
                    }
                } catch (f) {
                    s.e(f)
                } finally {
                    s.f()
                }
                r.push(n)
            } catch (p) {
                console.error(n, p)
            }
            return r.map((function(e, t) {
                return a.a.createElement(y, {
                    key: t
                }, e)
            }
            ))
        }
          , T = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return e.replace(/\{{\s*([^}\s]*)\s*\}}/g, "{{$1}}")
        }
          , v = function(e) {
            if (!e)
                return !0;
            var t = _(e);
            return !t.length || t.every((function(e) {
                return e && "object" !== i()(e) || "" === e
            }
            ))
        }
          , I = function(e) {
            return _(e).length && _(e).some((function(e) {
                return "string" != typeof e && "number" != typeof e
            }
            ))
        }
          , y = function(e) {
            var t = e.children;
            return a.a.createElement("span", null, t)
        };
        g.setIntl = function(e) {
            E = e
        }
        ,
        t.default = g
    },
    89: function(e, t, n) {
        "use strict";
        var r = n(330)
          , i = n.n(r)
          , o = n(4)
          , a = "passport_strorage_baseInfo";
        function c() {}
        function u() {
            return null
        }
        function s() {
            return Date.now() - 0
        }
        var _ = {
            size: function() {
                return 0
            },
            get: u,
            set: c,
            remove: c,
            clear: c
        }
          , l = function(e) {
            var t, n = p() && window[e];
            n || null === (t = o.a.__logger) || void 0 === t || t.error("LocalStorage is not supported");
            return n ? {
                size: function() {
                    return n.length
                },
                key: n.key ? function(e) {
                    return n.key(e)
                }
                : u,
                get: n.getItem ? function(e) {
                    try {
                        return JSON.parse(n.getItem(e))
                    } catch (t) {
                        return n.removeItem(e),
                        null
                    }
                }
                : u,
                set: n.setItem ? function(e, t) {
                    try {
                        return n.setItem(e, JSON.stringify(t))
                    } catch (r) {
                        return null
                    }
                }
                : c,
                remove: n.removeItem ? function(e) {
                    return n.removeItem(e)
                }
                : c,
                clear: n.clear ? function() {
                    return n.clear()
                }
                : c
            } : _
        }("localStorage")
          , d = !0
          , f = {};
        function p() {
            try {
                var e = window.localStorage;
                return e && !e.getItem("isSupportLocalStorage") && e.setItem("isSupportLocalStorage", "true"),
                !0
            } catch (t) {
                return !1
            }
        }
        var E = function(e, t, n) {
            var r = arguments.length
              , i = null;
            return 1 === r ? (d && e in f ? i = f[e] : (i = function() {
                var t = l.get(e);
                if (t) {
                    if (!t.expires || 0 === t.expires || t.createTime + t.expires > s())
                        return t.data;
                    l.remove(e)
                }
                return null
            }(),
            f[e] = i),
            i) : r > 1 ? null == t ? (delete f[e],
            l.remove(e)) : (f[e] = t,
            n = n || 0,
            l.set(e, {
                data: t,
                createTime: s(),
                expires: n
            })) : void 0
        };
        E.setCache = function(e) {
            d = Boolean(e)
        }
        ,
        E.clear = function() {
            var e = l.get(a);
            l.clear(),
            l.set(a, e)
        }
        ,
        E.remove = function(e) {
            l.remove(e, null)
        }
        ,
        E.init = function(e) {
            var t = l.get(a) || {}
              , n = t.version
              , r = t.cTime
              , i = !1;
            n && n === e || (i = !0,
            l.clear(),
            n = e),
            (!r || s() - r > 2592e6) && (i = !0,
            function() {
                var e, t, n, r, i = s();
                for (e = 0,
                t = l.size(); e < t; e++)
                    n = l.key(e),
                    (r = l.get(n)) && n !== a && (r.expires > 0 && r.createTime + r.expires < i ? l.remove(n) : f[n] = r.data)
            }(),
            r = s()),
            i && l.set(a, {
                version: n,
                cTime: r
            })
        }
        ,
        E.isSupport = p,
        E.sync = function(e) {
            return function(t, n, r) {
                var o = null;
                if (r.initializer) {
                    var a;
                    if (d && e in f)
                        o = f[e];
                    else
                        o = null === (a = l.get(e)) || void 0 === a ? void 0 : a.data;
                    return i.a.isNil(o) && (o = r.initializer()),
                    f[e] = o,
                    {
                        set: function(t) {
                            o !== t && (o = t,
                            f[e] = t,
                            l.set(e, {
                                data: t,
                                createTime: s(),
                                expires: 0
                            }))
                        },
                        get: function() {
                            return o
                        },
                        enumerable: !0,
                        configurable: !0
                    }
                }
                console.error("非普通属性")
            }
        }
        ,
        t.a = E
    },
    9: function(e, t, n) {
        "use strict";
        n.d(t, "d", (function() {
            return i
        }
        )),
        n.d(t, "e", (function() {
            return o
        }
        )),
        n.d(t, "h", (function() {
            return p
        }
        )),
        n.d(t, "f", (function() {
            return u
        }
        )),
        n.d(t, "g", (function() {
            return s
        }
        )),
        n.d(t, "c", (function() {
            return l
        }
        )),
        n.d(t, "a", (function() {
            return d
        }
        )),
        n.d(t, "b", (function() {
            return f
        }
        ));
        var r, i, o, a = n(1), c = n.n(a);
        !function(e) {
            e.CN = "cn",
            e.VA = "va",
            e.SG = "sg",
            e.JP = "jp"
        }(i || (i = {})),
        function(e) {
            e.EU_NC = "eu_nc",
            e.EU_EA = "eu_ea",
            e.EU_SG = "larksgaws",
            e.EU_JP = "larkjpaws",
            e.BOE_CN = "boecn",
            e.BOE_VA = "boeva"
        }(o || (o = {}));
        var u, s, _, l, d, f, p = (r = {},
        c()(r, o.EU_NC, i.CN),
        c()(r, o.BOE_CN, i.CN),
        c()(r, o.BOE_VA, i.VA),
        c()(r, o.EU_EA, i.VA),
        c()(r, o.EU_SG, i.SG),
        c()(r, o.EU_JP, i.JP),
        r);
        !function(e) {
            e.FEISHU = "feishu",
            e.LARK = "lark"
        }(u || (u = {})),
        function(e) {
            e.LOCAL = "local",
            e.STAGING = "staging",
            e.BOE = "boe",
            e.PRE_RELEASE = "pre_release",
            e.ONLINE = "online"
        }(s || (s = {})),
        function(e) {
            e.KAMI = "kami",
            e.KAP = "kap",
            e.MI = "mi",
            e.CRC = "crc",
            e.KASTAGING = "kastaging",
            e.KA31 = "ka31"
        }(_ || (_ = {})),
        function(e) {
            e.SuiteMainDomain = "suite_main_domain",
            e.TTSlardar = "tt_slardar",
            e.TTTea = "tt_tea",
            e.ApiBase = "api_domain_base"
        }(l || (l = {})),
        function(e) {
            e[e.feishu = 1161] = "feishu",
            e[e.lark = 1664] = "lark"
        }(d || (d = {})),
        function(e) {
            e[e.feishu = 1658] = "feishu",
            e[e.lark = 1660] = "lark"
        }(f || (f = {}))
    },
    90: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return o
        }
        ));
        n(79);
        var r = n(3)
          , i = n(41);
        function o(e) {
            var t = document.createElement("a");
            t.href = e;
            var n = new MouseEvent("click");
            t.dispatchEvent(n),
            i.a.log("open schema: ".concat(e, ", isAndroid=").concat(Object(r.f)()))
        }
    }
});
//# sourceMappingURL=fido.41189004.js.map
