"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3245:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(6981);
;// CONCATENATED MODULE: ./assets/images/logos/logo_minimal@1024.png
/* harmony default export */ const logo_minimal_1024 = ({"src":"/_next/static/media/logo_minimal@1024.e509a71a.png","height":1116,"width":1024,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAArElEQVR42mOAAeHNz52ENj3bLbTpuRMDDMh8+c8pvOXFPKDEfxAGKgLRi4Q2Pxdj4KraVCy05sFR4e2vvyMp2ACUlGRgj517nC1k2h3eviMzgYLbgZJuDDDAkbRgF0fywv/sMbP/s1i32zIAAd+EY2xAnYwM7InzDwMV/OdIBuK0xZEMQABUzALTqcaRuGANO1ABkB3BAARADSwMSAAosCALKOgGlWRmYGBgAACauE4fsGkhiQAAAABJRU5ErkJggg==","blurWidth":7,"blurHeight":8});
;// CONCATENATED MODULE: ./layout/header/Header.tsx






const Header = ()=>{
    const { 0: isOpen , 1: setIsOpen  } = (0,external_react_.useState)(false);
    const toggle = ()=>setIsOpen(!isOpen);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "topbar",
        id: "top",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "header6",
            children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Container, {
                className: "po-relative",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Navbar, {
                    className: "navbar-expand-lg h6-nav-bar",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.NavbarBrand, {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: logo_minimal_1024,
                                alt: "byte3",
                                width: 100,
                                height: 100
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.NavbarToggler, {
                            onClick: toggle,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "ti-menu"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Collapse, {
                            isOpen: isOpen,
                            navbar: true,
                            className: "hover-dropdown ml-auto",
                            id: "h6-info",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Nav, {
                                    navbar: true,
                                    className: "ml-auto",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.NavItem, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#services",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "nav-link",
                                                children: "Services"
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "act-buttons",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.NavLink, {
                                        href: "mailto:hello@byte3.cloud",
                                        className: "btn btn-light font-14",
                                        target: "_blank",
                                        children: "Contact"
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const header_Header = (Header);

;// CONCATENATED MODULE: ./layout/footer/Footer.tsx
/* eslint-disable */ 



const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "footer4 b-t spacer",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Container, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Row, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Col, {
                            lg: "3",
                            md: "6",
                            className: "m-b-30",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                    className: "m-b-20",
                                    children: "Email"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    children: [
                                        "Office:",
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "mialto:hello@byte3.cloud",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "link",
                                                children: "hello@byte3.cloud"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        "Site:",
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "https://byte3.cloud",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "link",
                                                children: "byte3.cloud"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Col, {
                            lg: "3",
                            md: "6",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                    className: "m-b-20",
                                    children: "Social"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "round-social light",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "https://www.linkedin.com/company/byte3-cloud/",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "link",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fa fa-linkedin"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "https://github.com/byte3-cloud",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "link",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fa fa-github"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "https://twitter.com/byte3cloud",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "link",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fa fa-twitter"
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "f4-bottom-bar",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Row, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                            md: "12",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "d-flex font-14",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "m-t-10 m-b-10 copyright",
                                        children: [
                                            "All Rights Reserved by",
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "https://byte3.cloud",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "link",
                                                    children: "byte3.cloud"
                                                })
                                            }),
                                            " ",
                                            "| All images have been created with",
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "https://openai.com/dall-e-2/",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "link",
                                                    children: "DALL\xb7E"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "links ml-auto m-t-10 m-b-10",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "p-10 p-l-0",
                                                    children: "Terms of Use"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "p-10",
                                                    children: "Legal Disclaimer"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "p-10",
                                                    children: "Privacy Policy"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const footer_Footer = (Footer);

;// CONCATENATED MODULE: ./layout/Layout.tsx



const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        id: "main-wrapper",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(header_Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "page-wrapper",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container-fluid",
                    children: children
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(footer_Footer, {})
        ]
    });
};
/* harmony default export */ const layout_Layout = (Layout);

;// CONCATENATED MODULE: ./pages/_app.tsx



const App = ({ Component , pageProps  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(layout_Layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
};
/* harmony default export */ const _app = (App);


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6981:
/***/ ((module) => {

module.exports = require("reactstrap");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,675], () => (__webpack_exec__(3245)));
module.exports = __webpack_exports__;

})();