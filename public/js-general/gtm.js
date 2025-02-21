// Copyright 2012 Google Inc. All rights reserved.

(function (w, g) {
  w[g] = w[g] || {};
  w[g].e = function (s) {
    return eval(s);
  };
})(window, "google_tag_manager");

(function () {
  var data = {
    resource: {
      version: "242",

      macros: [
        { function: "__e" },
        {
          function: "__u",
          vtp_component: "HOST",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__v",
          vtp_name: "gtm.triggers",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: true,
          vtp_defaultValue: "",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "transactionId",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "transactionTotal",
        },
        {
          function: "__u",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__u",
          vtp_component: "PATH",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "ecommerce.currency",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "ecommerce.value",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "ecommerce.transaction_id",
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            '(function(){var a=encodeURI(window.location.href),c=!1,b="";try{for(;!c;)b=decodeURIComponent(a),b===a\u0026\u0026(c=!0),a=b;a=/([^.@\\s]+)(\\.[^.@\\s]+)*@([^.@\\s]+\\.)+([^.@\\s]+)/.test(a)?window.location.origin:window.location.href}catch(d){a=window.location.origin}return a})();',
          ],
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "ecommerce.items.0.item_name",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "ecommerce.items.0.item_category",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "ecommerce.items.0.item_id",
        },
        { function: "__r" },
        { function: "__k", vtp_decodeCookie: false, vtp_name: "GetCookie" },
        { function: "__c", vtp_value: "G-08TLB9R8X1" },
        {
          function: "__u",
          vtp_component: "URL",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__v",
          convert_case_to: 1,
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "pageType",
        },
        {
          function: "__remm",
          convert_case_to: 1,
          vtp_setDefaultValue: true,
          vtp_input: ["macro", 17],
          vtp_fullMatch: false,
          vtp_replaceAfterMatch: false,
          vtp_defaultValue: ["macro", 18],
          vtp_ignoreCase: true,
          vtp_map: [
            "list",
            ["map", "key", ".*blog\\.britishmuseum.*", "value", "blog"],
            [
              "map",
              "key",
              "research\\.britishmuseum|britishmuseum.org\\/research",
              "value",
              "collection",
            ],
            ["map", "key", ".*maximweb\\.net.*", "value", "ticketing"],
            ["map", "key", ".*britishmuseumshoponline.*", "value", "bm shop"],
            ["map", "key", ".*visit\\/family-visits\\/.*", "value", "family"],
            ["map", "key", ".*britishmuseum\\.org\\/blog.*", "value", "blog"],
          ],
        },
        { function: "__cid" },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){try{var a=function(c){return google_tag_manager[",
            ["escape", ["macro", 20], 8, 16],
            '].dataLayer.get(c)},d=[];for(i=0;i\u003Ca("transactionProducts").length;i++){var b={};b.item_name=a("transactionProducts")[i].name.split("|").pop();b.item_id=a("transactionProducts")[i].sku;b.price=a("transactionProducts")[i].price;b.item_category=a("transactionProducts")[i].category;b.quantity=a("transactionProducts")[i].quantity;d.push(b)}return d}catch(c){}})();',
          ],
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "transactionProducts",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "ecommerce.purchase.products",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "ecommerce.items",
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var b=",
            ["escape", ["macro", 22], 8, 16],
            ",c=",
            ["escape", ["macro", 23], 8, 16],
            ",d=",
            ["escape", ["macro", 24], 8, 16],
            ";if(b)return b.map(function(a){return a.category}).join();if(c)return c.map(function(a){return a.category}).join();if(d)return d.map(function(a){return a.item_category}).join()})();",
          ],
        },
        {
          function: "__jsm",
          convert_case_to: 1,
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 25], 8, 16],
            ',f=function(b){return b.filter(function(c,d,e){return e.indexOf(c)===d})};a=f(a.split(",").map(function(b){return b.trim()}));a.sort();return a.join(" | ")})();',
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var b=",
            ["escape", ["macro", 22], 8, 16],
            ",c=",
            ["escape", ["macro", 23], 8, 16],
            ";if(b)return b.map(function(a){return a.name}).join();if(c)return c.map(function(a){return a.name}).join()})();",
          ],
        },
        {
          function: "__jsm",
          convert_case_to: 1,
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 27], 8, 16],
            ',f=function(b){return b.filter(function(c,d,e){return e.indexOf(c)===d})};a=f(a.split(",").map(function(b){return b.trim()}));a.sort();return a.join(" | ")})();',
          ],
        },
        { function: "__aev", vtp_varType: "TEXT" },
        { function: "__c", vtp_value: "G-JHR77E3EZ1" },
        {
          function: "__v",
          vtp_name: "gtm.scrollThreshold",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.elementClasses",
          vtp_dataLayerVersion: 1,
        },
        { function: "__v", vtp_name: "gtm.elementId", vtp_dataLayerVersion: 1 },
        {
          function: "__remm",
          vtp_setDefaultValue: false,
          vtp_input: ["macro", 33],
          vtp_fullMatch: true,
          vtp_replaceAfterMatch: true,
          vtp_ignoreCase: true,
          vtp_map: [
            "list",
            [
              "map",
              "key",
              "col-facet-filter-on-display",
              "value",
              "on display",
            ],
            [
              "map",
              "key",
              "col-facet-filter-image-only",
              "value",
              "image only",
            ],
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 34], 8, 16],
            ';return a.replace(/\\s/,"_")})();',
          ],
        },
        {
          function: "__v",
          vtp_name: "gtm.elementUrl",
          vtp_dataLayerVersion: 1,
        },
        { function: "__v", vtp_name: "gtm.element", vtp_dataLayerVersion: 1 },
        {
          function: "__v",
          convert_case_to: 1,
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "gtm.element.dataset.searchFacet",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "clear_filters",
        },
        {
          function: "__v",
          convert_case_to: 1,
          vtp_dataLayerVersion: 1,
          vtp_setDefaultValue: false,
          vtp_name: "when_filter",
        },
        {
          function: "__v",
          convert_case_to: 1,
          vtp_dataLayerVersion: 1,
          vtp_setDefaultValue: false,
          vtp_name: "who_filter",
        },
        {
          function: "__v",
          convert_case_to: 1,
          vtp_dataLayerVersion: 1,
          vtp_setDefaultValue: false,
          vtp_name: "what_filter",
        },
        { function: "__v", vtp_name: "gtm.elementId", vtp_dataLayerVersion: 1 },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            '(function(){for(var b=document.getElementsByTagName("input"),c=[],a=0;a\u003Cb.length;a++)"checkbox"===b[a].type\u0026\u0026b[a].checked\u0026\u0026c.push(b[a].id);return c})();',
          ],
        },
        {
          function: "__v",
          vtp_name: "gtm.elementUrl",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "gtm.element.dataset.tracking",
        },
        {
          function: "__aev",
          vtp_setDefaultValue: false,
          vtp_varType: "URL",
          vtp_component: "PROTOCOL",
        },
        {
          function: "__aev",
          vtp_setDefaultValue: false,
          vtp_stripWww: false,
          vtp_varType: "URL",
          vtp_component: "HOST",
        },
        {
          function: "__aev",
          vtp_setDefaultValue: false,
          vtp_varType: "URL",
          vtp_component: "PATH",
          vtp_defaultPages: ["list"],
        },
        {
          function: "__aev",
          convert_case_to: 1,
          vtp_setDefaultValue: false,
          vtp_varType: "TEXT",
        },
        {
          function: "__smm",
          vtp_setDefaultValue: true,
          vtp_input: ["macro", 46],
          vtp_defaultValue: ["macro", 46],
          vtp_map: [
            "list",
            ["map", "key", "cta", "value", "general"],
            ["map", "key", "homepage-hero-button", "value", "homepage_hero"],
            ["map", "key", "exhibition-hero-cta", "value", "exhibition_hero"],
            ["map", "key", "exhibition-cta", "value", "exhibition_section"],
          ],
        },
        {
          function: "__remm",
          vtp_setDefaultValue: false,
          vtp_input: ["macro", 36],
          vtp_fullMatch: false,
          vtp_replaceAfterMatch: false,
          vtp_ignoreCase: true,
          vtp_map: [
            "list",
            ["map", "key", "^.*facebook.*$", "value", "facebook"],
            ["map", "key", "^.*twitter.*$", "value", "twitter"],
          ],
        },
        {
          function: "__remm",
          vtp_setDefaultValue: false,
          vtp_input: ["macro", 36],
          vtp_fullMatch: true,
          vtp_replaceAfterMatch: true,
          vtp_ignoreCase: true,
          vtp_map: [
            "list",
            ["map", "key", ".*\\/exhibitions\\/.*", "value", "book exhibition"],
            ["map", "key", ".*\\/events\\/.*", "value", "book event"],
            [
              "map",
              "key",
              ".*britishmuseumshoponline.org.*",
              "value",
              "buy shop product",
            ],
          ],
        },
        {
          function: "__remm",
          vtp_setDefaultValue: false,
          vtp_input: ["macro", 36],
          vtp_fullMatch: true,
          vtp_replaceAfterMatch: true,
          vtp_ignoreCase: true,
          vtp_map: [
            "list",
            [
              "map",
              "key",
              ".*britishmuseumshoponline.org.*",
              "value",
              "click to shop",
            ],
            [
              "map",
              "key",
              ".*\\/exhibitions\\/.*",
              "value",
              "click to exhibition",
            ],
            ["map", "key", ".*\\/events\\/.*", "value", "click to event"],
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 37], 8, 16],
            ';if(a=a.closest("li.carousel--gallery__item").getAttribute("data-swiper-slide-index"))return a})();',
          ],
        },
        {
          function: "__u",
          convert_case_to: 1,
          vtp_component: "QUERY",
          vtp_queryKey: "search_api_fulltext",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__remm",
          vtp_setDefaultValue: false,
          vtp_input: ["macro", 36],
          vtp_fullMatch: true,
          vtp_replaceAfterMatch: true,
          vtp_ignoreCase: true,
          vtp_map: [
            "list",
            [
              "map",
              "key",
              ".*ticketing.britishmuseum.org.*",
              "value",
              "click to ticketing",
            ],
            [
              "map",
              "key",
              ".*britishmuseumshoponline.org.*",
              "value",
              "click to shop",
            ],
            ["map", "key", ".*member.*", "value", "click to membership"],
          ],
        },
        {
          function: "__vis",
          vtp_elementId: "hero-modal-title",
          vtp_outputMethod: "BOOLEAN",
          vtp_selectorType: "ID",
          vtp_onScreenRatio: "50",
        },
        {
          function: "__smm",
          convert_case_to: 1,
          vtp_setDefaultValue: false,
          vtp_input: ["macro", 6],
          vtp_map: [
            "list",
            [
              "map",
              "key",
              "/The-british-Museum-Friends/IND",
              "value",
              "Individual",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/Guest",
              "value",
              "Individual + Guest",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/JNT",
              "value",
              "Individual + Additional Card",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/JNT1",
              "value",
              "Individual + Additional Card + Guest",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/UND",
              "value",
              "Under 26",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/U26Guest",
              "value",
              "Under 26 + Guest",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/UNJ",
              "value",
              "Under 26 + Additional Card",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/UNJR2",
              "value",
              "Under 26 + Additional Card + Guest",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/GFIND",
              "value",
              "Individual Gift",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/GFIND3",
              "value",
              "Individual Gift + Guest",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/GFJ",
              "value",
              "Individual Gift + Additional Card",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/GFJ1",
              "value",
              "Individual Gift + Additional Card + Guest",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/GFUND",
              "value",
              "Under 26 Gift",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/GFUND1",
              "value",
              "Under 26 Gift + Guest",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/GFUNJ",
              "value",
              "Under 26 Gift + Additional Card",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/GFUNJ2",
              "value",
              "Under 26 Gift + Additional Card + Guest",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/INDR",
              "value",
              "Individual Renewal",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/INDR1",
              "value",
              "Individual Renewal + Guest",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/JNTR",
              "value",
              "Individual Renewal + Additional Card",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/JNTR1",
              "value",
              "Individual Renewal + Additional Card + Guest",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/UNDR",
              "value",
              "Under 26 Renewal",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/UNDR1",
              "value",
              "Under 26 Renewal + Guest",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/UNJR",
              "value",
              "Under 26 Renewal + Additional Card",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/UNJR1",
              "value",
              "Under 26 Renewal + Additional Card + Guest",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/GFIR",
              "value",
              "Individual Gift Renewal",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/GFIR1",
              "value",
              "Individual Gift Renewal + Guest",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/GFJR",
              "value",
              "Individual Gift Renewal + Additional Card",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/GFJR1",
              "value",
              "Individual Gift Renewal + Additional Card + Guest",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/GFUR",
              "value",
              "Under 26 Gift Renewal",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/GFUR1",
              "value",
              "Under 26 Gift Renewal + Guest",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/GFUJR",
              "value",
              "Under 26 Gift Renewal + Additional Card",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/GFUJR1",
              "value",
              "Under 26 Gift Renewal + Additional Card + Guest",
            ],
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            '(function(){return document.getElementsByClassName("tag-ap-dd-review-button-error").length})();',
          ],
        },
        {
          function: "__remm",
          vtp_setDefaultValue: false,
          vtp_input: ["macro", 32],
          vtp_fullMatch: true,
          vtp_replaceAfterMatch: true,
          vtp_ignoreCase: true,
          vtp_map: [
            "list",
            [
              "map",
              "key",
              "^hero__button button button--chevron$",
              "value",
              "hero button",
            ],
            ["map", "key", "^button$", "value", "slice button"],
          ],
        },
        {
          function: "__v",
          convert_case_to: 1,
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "selectedElement.value",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "audio_title",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "audio_percent",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "audio_action",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "ecommerce.coupon",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "ecommerce.payment_type",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "ecommerce.item_list_name",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "ecommerce.item_list_id",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "user_id",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "customer_group",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "ecommerce.shipping_tier",
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 29], 8, 16],
            ';return a.replace(/http.*$/,"").trim()})();',
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 50], 8, 16],
            ";return a\u0026\u0026a.match(/^\\W\\s.*$/)?a.match(/^\\W\\s(.*)$/)[1]:a})();",
          ],
        },
        {
          function: "__jsm",
          convert_undefined_to: "0",
          vtp_javascript: [
            "template",
            '(function(){if(window.performance\u0026\u0026window.performance.getEntriesByType){var a=window.performance.getEntriesByType("navigation");if(a.length\u003E0)return a=a[0],a=a.loadEventEnd-a.startTime,Math.round((a/1E3+Number.EPSILON)*100)/100}})();',
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){return{10551:1465157,10549:1465157,10554:1465157,10548:1465157,10553:1465157,10555:1465157,10552:1465157,10550:1465157,11074:1465157,11024:1465157,11025:1465157,11026:1465157,11027:1465157,11028:1465157,11029:1465157,11030:1465157,11031:1465157,11032:1465157,11033:1465157,11034:1465157,11035:1465157,11036:1465157,11037:1465157,11038:1465157,11039:1465157,11040:1465157,11041:1465157,10681:1465158,10679:1465158,10684:1465158,10678:1465158,10683:1465158,10751:1465158,10682:1465158,10680:1465158,\n11159:1465158,11110:1465158,11111:1465158,11112:1465158,11113:1465158,11114:1465158,11115:1465158,11116:1465158,11117:1465158,11118:1465158,11119:1465158,11120:1465158,11121:1465158,11122:1465158,11123:1465158,11124:1465158,11125:1465158,11126:1465158,11127:1465158,9592:1403455,9593:1403455,9594:1403455,9595:1403455,9596:1403455,9597:1403455,9598:1403455,9599:1403455,9600:1403455,9601:1403455,9602:1403455,9603:1403455,9604:1403455,9605:1403455,9606:1403455,9607:1403455,9608:1403455,9609:1403455,9610:1403455,\n9611:1403455,9612:1403455,9613:1403455,9614:1403455,9621:1403455,9428:1403454,9429:1403454,9430:1403454,9431:1403454,9432:1403454,9433:1403454,9434:1403454,9435:1403454,9452:1403454,9453:1403454,9454:1403454,9455:1403454,9456:1403454,9457:1403454,9458:1403454,9459:1403454,9460:1403454,9461:1403454,9462:1403454,9463:1403454,9464:1403454,9465:1403454,9466:1403454,9467:1403454,10013:1403454,10014:1403454,10015:1403454,10016:1403454,10017:1403454,10018:1403454,10019:1403454,10020:1403454,10021:1403454,\n10022:1403454,10023:1403454,10024:1403454,10025:1403454,10026:1403454,10027:1403454,10028:1403454,10029:1403454,10030:1403454,10031:1403454,10032:1403454,10033:1403454,10034:1403454,10035:1403454,10036:1403454,10037:1403454,10038:1403454,10039:1403454,10040:1403454,10041:1403454,10042:1403454,10043:1403454,10044:1403454,10045:1403454,10046:1403454,10047:1403454,10048:1403454,10049:1403454,10050:1403454,10051:1403454,10052:1403454,10053:1403454,10054:1403454,10055:1403454,10056:1403454,10057:1403454,\n10058:1403454,10059:1403454,10060:1403454,10061:1403454,10062:1403454,10063:1403454,10064:1403454,10065:1403454,10066:1403454,10067:1403454,10068:1403454,10069:1403454,10070:1403454,10071:1403454,10072:1403454,10073:1403454,10074:1403454,10075:1403454,10076:1403454,10077:1403454,10078:1403454,10079:1403454,10080:1403454,10081:1403454,10082:1403454,10083:1403454,10084:1403454,10085:1403454,10086:1403454,10087:1403454,10088:1403454,10089:1403454,10090:1403454,10091:1403454,10092:1403454,10093:1403454,\n10094:1403454,10095:1403454,10096:1403454,10097:1403454,10098:1403454,10099:1403454,10100:1403454,10101:1403454,10102:1403454,10103:1403454,10104:1403454,10105:1403454,10106:1403454,10107:1403454,10108:1403454,10109:1403454,10110:1403454,10111:1403454,10112:1403454,10113:1403454,10114:1403454,10115:1403454,10116:1403454,10117:1403454,10118:1403454,10119:1403454,10120:1403454,10121:1403454,10122:1403454,10123:1403454,10124:1403454,10125:1403454,10126:1403454,10127:1403454,10128:1403454,10129:1403454,\n10130:1403454,10131:1403454,10132:1403454,10133:1403454,10134:1403454,10135:1403454,10136:1403454,10137:1403454,10138:1403454,10139:1403454,10140:1403454,10141:1403454,10142:1403454,10143:1403454,10144:1403454,10145:1403454,10146:1403454,10147:1403454,10148:1403454,10149:1403454,10150:1403454,10151:1403454,10152:1403454,10153:1403454,10154:1403454,10155:1403454,10156:1403454,10157:1403454,10158:1403454,10159:1403454,10160:1403454,10161:1403454,10162:1403454,10163:1403454,10164:1403454,10165:1403454,\n10166:1403454,10167:1403454,10168:1403454,10169:1403454,10170:1403454,10171:1403454,10172:1403454,10173:1403454,10174:1403454,10175:1403454,10176:1403454,10177:1403454,10178:1403454,10179:1403454,10180:1403454,10181:1403454,10182:1403454,10183:1403454,10184:1403454,10185:1403454,10186:1403454,10187:1403454,10188:1403454,10189:1403454,10190:1403454,10191:1403454,10192:1403454,10193:1403454,10194:1403454,10195:1403454,10196:1403454,10197:1403454,10198:1403454,10199:1403454,10200:1403454,10201:1403454,\n10202:1403454,10203:1403454,10204:1403454,10211:1403454,10212:1403454,10213:1403454,10214:1403454,10215:1403454,10216:1403454,10217:1403454,10218:1403454,10219:1403454,10220:1403454,10221:1403454,10222:1403454,10223:1403454,10224:1403454,10225:1403454,10226:1403454,9433:1403454,9434:1403454,NO_CODE:0}})();",
          ],
        },
        {
          function: "__smm",
          vtp_setDefaultValue: false,
          vtp_input: ["macro", 6],
          vtp_map: [
            "list",
            [
              "map",
              "key",
              "/The-british-Museum-Friends/IND",
              "value",
              "Individual",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/Guest",
              "value",
              "Individual + Guest",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/JNT",
              "value",
              "Individual + Additional Card",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/JNT1",
              "value",
              "Individual + Additional Card + Guest",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/UND",
              "value",
              "Under 26",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/U26Guest",
              "value",
              "Under 26 + Guest",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/UNJ",
              "value",
              "Under 26 + Additional Card",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/UNJR2",
              "value",
              "Under 26 + Additional Card + Guest",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/GFIND",
              "value",
              "Individual Gift",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/GFIND3",
              "value",
              "Individual Gift + Guest",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/GFJ",
              "value",
              "Individual Gift + Additional Card",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/GFJ1",
              "value",
              "Individual Gift + Additional Card + Guest",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/GFUND",
              "value",
              "Under 26 Gift",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/GFUND1",
              "value",
              "Under 26 Gift + Guest",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/GFUNJ",
              "value",
              "Under 26 Gift + Additional Card",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/GFUNJ2",
              "value",
              "Under 26 Gift + Additional Card + Guest",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/INDR",
              "value",
              "Individual Renewal",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/INDR1",
              "value",
              "Individual Renewal + Guest",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/JNTR",
              "value",
              "Individual Renewal + Additional Card",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/JNTR1",
              "value",
              "Individual Renewal + Additional Card + Guest",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/UNDR",
              "value",
              "Under 26 Renewal",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/UNDR1",
              "value",
              "Under 26 Renewal + Guest",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/UNJR",
              "value",
              "Under 26 Renewal + Additional Card",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/UNJR1",
              "value",
              "Under 26 Renewal + Additional Card + Guest",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/GFIR",
              "value",
              "Individual Gift Renewal",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/GFIR1",
              "value",
              "Individual Gift Renewal + Guest",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/GFJR",
              "value",
              "Individual Gift Renewal + Additional Card",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/GFJR1",
              "value",
              "Individual Gift Renewal + Additional Card + Guest",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/GFUR",
              "value",
              "Under 26 Gift Renewal",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/GFUR1",
              "value",
              "Under 26 Gift Renewal + Guest",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/GFUJR",
              "value",
              "Under 26 Gift Renewal + Additional Card",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/GFUJR1",
              "value",
              "Under 26 Gift Renewal + Additional Card + Guest",
            ],
          ],
        },
        {
          function: "__smm",
          vtp_setDefaultValue: false,
          vtp_input: ["macro", 6],
          vtp_map: [
            "list",
            ["map", "key", "/The-british-Museum-Friends/IND", "value", "IND"],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/Guest",
              "value",
              "GUEST",
            ],
            ["map", "key", "/The-british-Museum-Friends/JNT", "value", "JNT"],
            ["map", "key", "/The-british-Museum-Friends/JNT1", "value", "JNT1"],
            ["map", "key", "/The-british-Museum-Friends/UND", "value", "UND"],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/U26Guest",
              "value",
              "U26Guest",
            ],
            ["map", "key", "/The-british-Museum-Friends/UNJ", "value", "UNJ"],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/UNJR2",
              "value",
              "UNJR2",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/GFIND",
              "value",
              "GFIND",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/GFIND3",
              "value",
              "GFIND3",
            ],
            ["map", "key", "/The-british-Museum-Friends/GFJ", "value", "GFJ"],
            ["map", "key", "/The-british-Museum-Friends/GFJ1", "value", "GFJ1"],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/GFUND",
              "value",
              "GFUND",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/GFUND1",
              "value",
              "GFUND1",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/GFUNJ",
              "value",
              "GFUNJ",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/GFUNJ2",
              "value",
              "GFUNJ2",
            ],
            ["map", "key", "/The-british-Museum-Friends/INDR", "value", "INDR"],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/INDR1",
              "value",
              "INDR1",
            ],
            ["map", "key", "/The-british-Museum-Friends/JNTR", "value", "JNTR"],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/JNTR1",
              "value",
              "JNTR1",
            ],
            ["map", "key", "/The-british-Museum-Friends/UNDR", "value", "UNDR"],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/UNDR1",
              "value",
              "UNDR1",
            ],
            ["map", "key", "/The-british-Museum-Friends/UNJR", "value", "UNJR"],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/UNJR1",
              "value",
              "UNJR1",
            ],
            ["map", "key", "/The-british-Museum-Friends/GFIR", "value", "GFIR"],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/GFIR1",
              "value",
              "GFIR1",
            ],
            ["map", "key", "/The-british-Museum-Friends/GFJR", "value", "GFJR"],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/GFJR1",
              "value",
              "GFJR1",
            ],
            ["map", "key", "/The-british-Museum-Friends/GFUR", "value", "GFUR"],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/GFUR1",
              "value",
              "GFUR1",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/GFUJR",
              "value",
              "GFUJR",
            ],
            [
              "map",
              "key",
              "/The-british-Museum-Friends/GFUJR1",
              "value",
              "GFUJR1",
            ],
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 37], 8, 16],
            '.pathname.split(".");return 1\u003Ca.length?a.pop():"html"})();',
          ],
        },
        {
          function: "__remm",
          vtp_setDefaultValue: true,
          vtp_input: ["macro", 6],
          vtp_fullMatch: true,
          vtp_replaceAfterMatch: true,
          vtp_defaultValue: "/redacted-urlcontains@symbol",
          vtp_ignoreCase: true,
          vtp_map: [
            "list",
            [
              "map",
              "key",
              "\\/adfs\\/ls\\/default\\.aspx*",
              "value",
              "/adfs/ls/default.aspx",
            ],
            [
              "map",
              "key",
              "\\/search\\_results\\/.aspx*",
              "value",
              "/search_results.aspx",
            ],
          ],
        },
        {
          function: "__v",
          vtp_name: "gtm.videoStatus",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.videoPercent",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 81], 8, 16],
            ';switch(a){case "start":return"start playing";case "pause":return"pause";case "buffering":return"buffering";case "progress":return"reached "+',
            ["escape", ["macro", 82], 8, 16],
            '+"%";case "complete":return"reached the end"}})();',
          ],
        },
        {
          function: "__remm",
          vtp_setDefaultValue: false,
          vtp_input: ["macro", 29],
          vtp_fullMatch: true,
          vtp_replaceAfterMatch: true,
          vtp_ignoreCase: true,
          vtp_map: [
            "list",
            ["map", "key", ".*member.*", "value", "become a member"],
            ["map", "key", ".*ticket.*", "value", "buy tickets"],
          ],
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "publishDate",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "author",
        },
        {
          function: "__v",
          convert_case_to: 1,
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "eventType",
        },
        {
          function: "__v",
          convert_case_to: 1,
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "pageName",
        },
        {
          function: "__v",
          convert_case_to: 1,
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "relatedExhibition",
        },
        {
          function: "__remm",
          vtp_setDefaultValue: false,
          vtp_input: ["macro", 36],
          vtp_fullMatch: true,
          vtp_replaceAfterMatch: true,
          vtp_ignoreCase: true,
          vtp_map: [
            "list",
            [
              "map",
              "key",
              ".*ticketing.britishmuseum.org.*",
              "value",
              "click to ticketing",
            ],
            ["map", "key", ".*membership.*", "value", "click to membership"],
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            '(function(){var a=document.querySelector(".post_author").innerText.trim();return a})();',
          ],
        },
        {
          function: "__remm",
          convert_case_to: 1,
          vtp_setDefaultValue: true,
          vtp_input: ["macro", 17],
          vtp_fullMatch: false,
          vtp_replaceAfterMatch: true,
          vtp_defaultValue: ["macro", 86],
          vtp_ignoreCase: true,
          vtp_map: [
            "list",
            ["map", "key", ".*blog\\.britishmuseum.*", "value", ["macro", 91]],
          ],
        },
        {
          function: "__jsm",
          vtp_javascript: ["template", "(function(){return!0})();"],
        },
        {
          function: "__remm",
          vtp_setDefaultValue: false,
          vtp_input: ["macro", 29],
          vtp_fullMatch: true,
          vtp_replaceAfterMatch: true,
          vtp_ignoreCase: true,
          vtp_map: [
            "list",
            ["map", "key", ".*Book now.*", "value", "book now"],
            [
              "map",
              "key",
              ".*Already a member\\? Book your.*",
              "value",
              "already a member?",
            ],
            ["map", "key", ".*Become a Member.*", "value", "become a member"],
          ],
        },
        {
          function: "__remm",
          vtp_setDefaultValue: false,
          vtp_input: ["macro", 32],
          vtp_fullMatch: true,
          vtp_replaceAfterMatch: true,
          vtp_ignoreCase: true,
          vtp_map: [
            "list",
            [
              "map",
              "key",
              "^hero__button button button--chevron external-link$",
              "value",
              "hero button",
            ],
            ["map", "key", "^ external-link$", "value", "section button"],
          ],
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "gtm.element.parentElement.className",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "gtm.scrollThreshold",
        },
        {
          function: "__v",
          convert_case_to: 1,
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "eventModel.event_label",
        },
        {
          function: "__v",
          convert_case_to: 1,
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "eventModel.event_category",
        },
        {
          function: "__v",
          convert_case_to: 1,
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "event",
        },
        {
          function: "__jsm",
          convert_case_to: 1,
          vtp_javascript: [
            "template",
            '(function(){var a=document.querySelector("div.amf-thank-you-page").innerText.match(/^(.*).{1}/i)[1].trim();return a})();',
          ],
        },
        {
          function: "__remm",
          vtp_setDefaultValue: false,
          vtp_input: ["macro", 50],
          vtp_fullMatch: true,
          vtp_replaceAfterMatch: true,
          vtp_ignoreCase: true,
          vtp_map: [
            "list",
            ["map", "key", "find", "value", "Find"],
            ["map", "key", "discuss.*", "value", "Discuss"],
            ["map", "key", "perform", "value", "Perform"],
            ["map", "key", "look", "value", "Look"],
            ["map", "key", "pose", "value", "Pose"],
          ],
        },
        {
          function: "__remm",
          vtp_setDefaultValue: false,
          vtp_input: ["macro", 32],
          vtp_fullMatch: true,
          vtp_replaceAfterMatch: true,
          vtp_ignoreCase: true,
          vtp_map: [
            "list",
            ["map", "key", "checkbox-toggle-input", "value", ["macro", 34]],
            ["map", "key", "icon icon--list", "value", "list view"],
            ["map", "key", "icon icon--grid", "value", "grid view"],
          ],
        },
        {
          function: "__u",
          vtp_component: "QUERY",
          vtp_queryKey: "keyword",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__jsm",
          vtp_javascript: [
            "template",
            '(function(){for(var b=document.getElementsByClassName("amf-el amf-type-checkbox"),c="",a=0;a\u003Cb.length;a++)"checkbox"===b[a].type\u0026\u0026b[a].checked\u0026\u0026(c+=b[a].value+" ");return c.replace(/\\s$/,"")})();',
          ],
        },
        {
          function: "__remm",
          vtp_setDefaultValue: false,
          vtp_input: ["macro", 46],
          vtp_fullMatch: true,
          vtp_replaceAfterMatch: true,
          vtp_ignoreCase: true,
          vtp_map: [
            "list",
            ["map", "key", "cta", "value", ["macro", 29]],
            [
              "map",
              "key",
              "homepage-hero-button",
              "value",
              ["template", "Homepage Hero: ", ["macro", 29]],
            ],
          ],
        },
        {
          function: "__remm",
          vtp_setDefaultValue: false,
          vtp_input: ["macro", 46],
          vtp_fullMatch: true,
          vtp_replaceAfterMatch: true,
          vtp_ignoreCase: true,
          vtp_map: [
            "list",
            ["map", "key", "exhibition-hero-cta", "value", "hero button"],
            ["map", "key", "exhibition-cta", "value", "section button"],
          ],
        },
        {
          function: "__remm",
          vtp_setDefaultValue: false,
          vtp_input: ["macro", 32],
          vtp_fullMatch: true,
          vtp_replaceAfterMatch: true,
          vtp_ignoreCase: true,
          vtp_map: [
            "list",
            [
              "map",
              "key",
              "menu__link menu__link--level-0 menu__link--shop js-shop external-link",
              "value",
              "header link",
            ],
            ["map", "key", "teaser__link external-link", "value", "shop slice"],
          ],
        },
        {
          function: "__jsm",
          convert_case_to: 1,
          vtp_javascript: [
            "template",
            "(function(){var a=",
            ["escape", ["macro", 37], 8, 16],
            ';if(a.matches("li.autocomplete__result-item"))return a.innerText;if(a.parentNode.matches("li.autocomplete__result-item"))return a.parentNode.innerText})();',
          ],
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "transactionAffiliation",
        },
        { function: "__cvt_1766321_467" },
        { function: "__c", vtp_value: "G-WBWG16C6WT" },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "video_percent",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "video_action",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "video_title",
        },
        {
          function: "__v",
          vtp_dataLayerVersion: 2,
          vtp_setDefaultValue: false,
          vtp_name: "email",
        },
        { function: "__f", vtp_component: "URL" },
        { function: "__e" },
        {
          function: "__v",
          vtp_name: "gtm.elementTarget",
          vtp_dataLayerVersion: 1,
        },
        { function: "__v", vtp_name: "gtm.element", vtp_dataLayerVersion: 1 },
        {
          function: "__v",
          vtp_name: "gtm.elementClasses",
          vtp_dataLayerVersion: 1,
        },
        {
          function: "__v",
          vtp_name: "gtm.elementTarget",
          vtp_dataLayerVersion: 1,
        },
        { function: "__aev", vtp_varType: "TEXT" },
        { function: "__r" },
        { function: "__v", vtp_name: "gtm.videoUrl", vtp_dataLayerVersion: 1 },
        {
          function: "__v",
          vtp_name: "gtm.videoTitle",
          vtp_dataLayerVersion: 1,
        },
      ],
      tags: [
        { function: "__paused", vtp_originalTagType: "html", tag_id: 1 },
        {
          function: "__awct",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableNewCustomerReporting: false,
          vtp_enableConversionLinker: true,
          vtp_orderId: ["macro", 3],
          vtp_enableProductReporting: false,
          vtp_conversionValue: ["macro", 4],
          vtp_enableEnhancedConversion: false,
          vtp_conversionCookiePrefix: "_gcl",
          vtp_enableShippingData: false,
          vtp_conversionId: "944964254",
          vtp_currencyCode: "GBP",
          vtp_conversionLabel: "eY4ICIGBwm0QnoXMwgM",
          vtp_rdp: false,
          vtp_url: ["macro", 5],
          vtp_enableProductReportingCheckbox: true,
          vtp_enableNewCustomerReportingCheckbox: true,
          vtp_enableEnhancedConversionsCheckbox: false,
          vtp_enableRdpCheckbox: true,
          vtp_enableTransportUrl: false,
          vtp_enableCustomParams: false,
          vtp_enableSmartDestinationId: false,
          tag_id: 7,
        },
        {
          function: "__gclidw",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableCrossDomain: false,
          vtp_enableUrlPassthrough: false,
          vtp_enableCookieOverrides: false,
          tag_id: 42,
        },
        {
          function: "__fls",
          metadata: ["map"],
          once_per_event: true,
          vtp_customVariable: [
            "list",
            ["map", "key", "u8", "value", ["macro", 7]],
          ],
          vtp_revenue: ["macro", 8],
          vtp_enableConversionLinker: true,
          vtp_countingMethod: "TRANSACTIONS",
          vtp_enhancedUserData: false,
          vtp_orderId: ["macro", 9],
          vtp_enableProductReporting: false,
          vtp_groupTag: "sale",
          vtp_useImageTag: false,
          vtp_activityTag: "britmus0",
          vtp_conversionCookiePrefix: "_gcl",
          vtp_advertiserId: "8361401",
          vtp_countingMethodIsTransactions: true,
          vtp_url: ["macro", 5],
          vtp_enableGoogleAttributionOptions: false,
          vtp_showConversionLinkingControls: true,
          vtp_enableMatchIdVariable: true,
          vtp_enableSmartDestinationId: false,
          tag_id: 43,
        },
        {
          function: "__flc",
          metadata: ["map"],
          once_per_event: true,
          vtp_customVariable: [
            "list",
            ["map", "key", "u1", "value", ["macro", 10]],
            ["map", "key", "u3", "value", ["macro", 11]],
            ["map", "key", "u4", "value", ["macro", 12]],
            ["map", "key", "u6", "value", ["macro", 13]],
          ],
          vtp_enableConversionLinker: true,
          vtp_groupTag: "counter",
          vtp_useImageTag: false,
          vtp_activityTag: "britmus0",
          vtp_ordinalType: "STANDARD",
          vtp_conversionCookiePrefix: "_gcl",
          vtp_advertiserId: "8361401",
          vtp_ordinalStandard: ["macro", 14],
          vtp_url: ["macro", 5],
          vtp_enableGoogleAttributionOptions: false,
          vtp_showConversionLinkingControls: true,
          vtp_enableMatchIdVariable: true,
          vtp_enableSmartDestinationId: false,
          tag_id: 44,
        },
        {
          function: "__img",
          metadata: ["map"],
          consent: ["list", "ad_storage"],
          once_per_event: true,
          vtp_useCacheBuster: true,
          vtp_url: [
            "template",
            "https://scripts.affiliatefuture.com/AFSaleV5.aspx?orderID=",
            ["escape", ["macro", 9], 12],
            "\u0026orderValue=",
            ["escape", ["macro", 8], 12],
            "\u0026merchant=6693\u0026payoutCodes=\u0026offlineCode=\u0026voucher=\u0026products=\u0026curr=\u0026affc=",
            ["escape", ["macro", 15], 12],
            "\u0026r=\u0026img=yes",
          ],
          vtp_cacheBusterQueryParam: "gtmcb",
          vtp_randomNumber: ["macro", 14],
          tag_id: 45,
        },
        {
          function: "__gclidw",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableCrossDomain: true,
          vtp_enableUrlPassthrough: false,
          vtp_acceptIncoming: true,
          vtp_linkerDomains:
            "britishmuseum.org, britishmuseumshoponline.org, maximweb.net, edirectdebit.co.uk",
          vtp_formDecoration: false,
          vtp_urlPosition: "query",
          vtp_enableCookieOverrides: false,
          tag_id: 53,
        },
        { function: "__paused", vtp_originalTagType: "html", tag_id: 88 },
        {
          function: "__googtag",
          metadata: ["map"],
          once_per_event: true,
          vtp_tagId: ["macro", 16],
          vtp_configSettingsTable: [
            "list",
            ["map", "parameter", "page_type", "parameterValue", ["macro", 19]],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "ga4 - config - main",
            ],
            ["map", "parameter", "send_page_view", "parameterValue", "true"],
          ],
          tag_id: 92,
        },
        {
          function: "__hjtc",
          metadata: ["map"],
          consent: ["list", "analytics_storage"],
          vtp_hotjar_site_id: "1628539",
          tag_id: 94,
        },
        {
          function: "__bzi",
          metadata: ["map"],
          consent: [
            "list",
            "ad_storage",
            "analytics_storage",
            "personalization_storage",
          ],
          once_per_event: true,
          vtp_id: "2881220",
          tag_id: 227,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            ["map", "parameter", "items", "parameterValue", ["macro", 21]],
            [
              "map",
              "parameter",
              "transaction_id",
              "parameterValue",
              ["macro", 3],
            ],
            ["map", "parameter", "value", "parameterValue", ["macro", 4]],
            ["map", "parameter", "currency", "parameterValue", "GBP"],
            [
              "map",
              "parameter",
              "purchase_categories",
              "parameterValue",
              ["macro", 26],
            ],
            [
              "map",
              "parameter",
              "purchase_products",
              "parameterValue",
              ["macro", 28],
            ],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "bm main - ga4 purchase - tickets \u0026 olx",
            ],
          ],
          vtp_eventName: "purchase",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 291,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            ["map", "parameter", "page_url", "parameterValue", ["macro", 17]],
            ["map", "parameter", "hostname", "parameterValue", ["macro", 1]],
            ["map", "parameter", "page_path", "parameterValue", ["macro", 6]],
            [
              "map",
              "parameter",
              "section_title",
              "parameterValue",
              ["macro", 29],
            ],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "ga4 - event - family - viewed section",
            ],
          ],
          vtp_eventName: "section_view",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 298,
        },
        {
          function: "__googtag",
          metadata: ["map"],
          once_per_event: true,
          vtp_tagId: ["macro", 30],
          vtp_configSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "ga4 - config - shop",
            ],
            ["map", "parameter", "send_page_view", "parameterValue", "true"],
          ],
          tag_id: 500,
        },
        { function: "__paused", vtp_originalTagType: "html", tag_id: 514 },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: true,
          vtp_getEcommerceDataFrom: "dataLayer",
          vtp_eventSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "purchase_categories",
              "parameterValue",
              ["macro", 26],
            ],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "bm main - ga4 purchase - shop",
            ],
          ],
          vtp_enhancedUserId: false,
          vtp_eventName: "purchase",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 516,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "percent_scrolled",
              "parameterValue",
              ["macro", 31],
            ],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "ga4 - event - scroll",
            ],
          ],
          vtp_eventName: "scroll",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 530,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "ga4 - event - article_end",
            ],
          ],
          vtp_eventName: "article_end",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 531,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            ["map", "parameter", "filter_type", "parameterValue", "collection"],
            [
              "map",
              "parameter",
              "filter_field",
              "parameterValue",
              ["macro", 35],
            ],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "ga4 - event - filter - collection search - on display / image only",
            ],
          ],
          vtp_eventName: "filter",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 534,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            ["map", "parameter", "filter_type", "parameterValue", "collection"],
            ["map", "parameter", "filter_field", "parameterValue", "list_view"],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "ga4 - event - filter - collection search - list view",
            ],
          ],
          vtp_eventName: "filter",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 535,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            ["map", "parameter", "filter_type", "parameterValue", "collection"],
            ["map", "parameter", "filter_field", "parameterValue", "grid_view"],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "ga4 - event - filter - collection search - grid view",
            ],
          ],
          vtp_eventName: "filter",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 536,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            ["map", "parameter", "filter_type", "parameterValue", "collection"],
            [
              "map",
              "parameter",
              "filter_field",
              "parameterValue",
              ["macro", 38],
            ],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "ga4 - event - filter - collection search - facets",
            ],
          ],
          vtp_eventName: "filter",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 537,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            ["map", "parameter", "filter_type", "parameterValue", "exhibition"],
            ["map", "parameter", "filter_field", "parameterValue", "when"],
            [
              "map",
              "parameter",
              "filter_value",
              "parameterValue",
              ["macro", 40],
            ],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "ga4 - event - filter - exhibition - when",
            ],
          ],
          vtp_eventName: "filter",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 538,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            ["map", "parameter", "filter_type", "parameterValue", "exhibition"],
            ["map", "parameter", "filter_field", "parameterValue", "who"],
            [
              "map",
              "parameter",
              "filter_value",
              "parameterValue",
              ["macro", 41],
            ],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "ga4 - event - filter - exhibition - who",
            ],
          ],
          vtp_eventName: "filter",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 539,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            ["map", "parameter", "filter_type", "parameterValue", "exhibition"],
            ["map", "parameter", "filter_field", "parameterValue", "what"],
            [
              "map",
              "parameter",
              "filter_value",
              "parameterValue",
              ["macro", 42],
            ],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "ga4 - event - filter - exhibition - what",
            ],
          ],
          vtp_eventName: "filter",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 540,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            ["map", "parameter", "filter_type", "parameterValue", "exhibition"],
            ["map", "parameter", "filter_field", "parameterValue", "clear_all"],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "ga4 - event - filter - exhibition - clear filters",
            ],
          ],
          vtp_eventName: "filter",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 541,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            ["map", "parameter", "form_type", "parameterValue", "email_footer"],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "ga4 - event - form - email footer",
            ],
          ],
          vtp_eventName: "form",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 542,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "form_type",
              "parameterValue",
              "newsletter_families",
            ],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "ga4 - event - form - newsletter - families",
            ],
          ],
          vtp_eventName: "form",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 543,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "form_type",
              "parameterValue",
              "newsletter_general",
            ],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "ga4 - event - form - newsletter - general",
            ],
          ],
          vtp_eventName: "form",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 544,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "form_type",
              "parameterValue",
              "newsletter_public_events",
            ],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "ga4 - event - form - newsletter - public events",
            ],
          ],
          vtp_eventName: "form",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 545,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "form_type",
              "parameterValue",
              "newsletter_schools",
            ],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "ga4 - event - form - newsletter - schools",
            ],
          ],
          vtp_eventName: "form",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 546,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "form_type",
              "parameterValue",
              "newsletter_shop",
            ],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "ga4 - event - form - newsletter - shop",
            ],
          ],
          vtp_eventName: "form",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 547,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "link_url",
              "parameterValue",
              ["template", ["macro", 47], "://", ["macro", 48], ["macro", 49]],
            ],
            ["map", "parameter", "link_text", "parameterValue", ["macro", 50]],
            ["map", "parameter", "cta_type", "parameterValue", ["macro", 51]],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "ga4 - event - call_to_action - main",
            ],
          ],
          vtp_eventName: "call_to_action",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 549,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            ["map", "parameter", "method", "parameterValue", "email"],
            ["map", "parameter", "link_text", "parameterValue", ["macro", 50]],
            ["map", "parameter", "link_url", "parameterValue", ["macro", 36]],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "ga4 - event - contact - email",
            ],
          ],
          vtp_eventName: "contact",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 551,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            ["map", "parameter", "method", "parameterValue", "telephone"],
            ["map", "parameter", "link_text", "parameterValue", ["macro", 50]],
            ["map", "parameter", "link_url", "parameterValue", ["macro", 36]],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "ga4 - event - contact - telephone",
            ],
          ],
          vtp_eventName: "contact",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 552,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            ["map", "parameter", "method", "parameterValue", ["macro", 52]],
            ["map", "parameter", "page_type", "parameterValue", ["macro", 19]],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "ga4 - event - social share",
            ],
          ],
          vtp_eventName: "share",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 558,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "click_type",
              "parameterValue",
              "blog category",
            ],
            ["map", "parameter", "link_text", "parameterValue", ["macro", 50]],
            ["map", "parameter", "page_type", "parameterValue", "blog"],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "ga4 - event - blog category",
            ],
          ],
          vtp_eventName: "click",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 582,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            ["map", "parameter", "page_type", "parameterValue", "blog"],
            ["map", "parameter", "click_type", "parameterValue", ["macro", 53]],
            [
              "map",
              "parameter",
              "link_url",
              "parameterValue",
              ["template", ["macro", 47], "://", ["macro", 48], ["macro", 49]],
            ],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "ga4 - event - blog - book or buy exhibition, event or shop product",
            ],
          ],
          vtp_eventName: "click",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 584,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            ["map", "parameter", "page_type", "parameterValue", "blog"],
            ["map", "parameter", "click_type", "parameterValue", ["macro", 54]],
            [
              "map",
              "parameter",
              "link_url",
              "parameterValue",
              ["template", ["macro", 47], "://", ["macro", 48], ["macro", 49]],
            ],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "ga4 - event - blog - click to exhibition, event or shop",
            ],
          ],
          vtp_eventName: "click",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 585,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "action_type",
              "parameterValue",
              "expand_item",
            ],
            ["map", "parameter", "position", "parameterValue", ["macro", 55]],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "ga4 - event - highlights slice - expand item",
            ],
          ],
          vtp_eventName: "highlights_slice",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 605,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "action_type",
              "parameterValue",
              "collapse_item",
            ],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "ga4 - event - highlights slice - collapse item",
            ],
          ],
          vtp_eventName: "highlights_slice",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 606,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "action_type",
              "parameterValue",
              "scroll_left",
            ],
            ["map", "parameter", "image_status", "parameterValue", "collapsed"],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "ga4 - event - highlights slice - scroll left (collapsed)",
            ],
          ],
          vtp_eventName: "highlights_slice",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 607,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "action_type",
              "parameterValue",
              "scroll_right",
            ],
            ["map", "parameter", "image_status", "parameterValue", "collapsed"],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "ga4 - event - highlights slice - scroll right (collapsed)",
            ],
          ],
          vtp_eventName: "highlights_slice",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 608,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "action_type",
              "parameterValue",
              "scroll_left",
            ],
            ["map", "parameter", "image_status", "parameterValue", "expanded"],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "ga4 - event - highlights slice - scroll left (expanded)",
            ],
          ],
          vtp_eventName: "highlights_slice",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 609,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "action_type",
              "parameterValue",
              "scroll_right",
            ],
            ["map", "parameter", "image_status", "parameterValue", "expanded"],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "ga4 - event - highlights slice - scroll right (expanded)",
            ],
          ],
          vtp_eventName: "highlights_slice",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 610,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            ["map", "parameter", "action_type", "parameterValue", "zoom"],
            ["map", "parameter", "method", "parameterValue", "icon"],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "ga4 - event - highlights slice - zoom (icon)",
            ],
          ],
          vtp_eventName: "highlights_slice",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 611,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            ["map", "parameter", "action_type", "parameterValue", "zoom"],
            ["map", "parameter", "method", "parameterValue", "image"],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "ga4 - event - highlights slice - zoom (image)",
            ],
          ],
          vtp_eventName: "highlights_slice",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 612,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            ["map", "parameter", "action_type", "parameterValue", "visibility"],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "ga4 - event - highlights slice - visibility",
            ],
          ],
          vtp_eventName: "highlights_slice",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 616,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "ga4 - event - audio app - apple app store - download click",
            ],
          ],
          vtp_eventName: "audio_app_download_click_apple",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 627,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "ga4 - event - audio app - google play store - download click",
            ],
          ],
          vtp_eventName: "audio_app_download_click_google",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 628,
        },
        {
          function: "__awct",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableNewCustomerReporting: false,
          vtp_enableConversionLinker: true,
          vtp_enableProductReporting: false,
          vtp_enableEnhancedConversion: false,
          vtp_conversionCookiePrefix: "_gcl",
          vtp_enableShippingData: false,
          vtp_conversionId: "869763654",
          vtp_conversionLabel: "l_8JCK_CqN0DEMaU3p4D",
          vtp_rdp: false,
          vtp_url: ["macro", 5],
          vtp_enableProductReportingCheckbox: true,
          vtp_enableNewCustomerReportingCheckbox: true,
          vtp_enableEnhancedConversionsCheckbox: false,
          vtp_enableRdpCheckbox: true,
          vtp_enableTransportUrl: false,
          vtp_enableCustomParams: false,
          vtp_enableSmartDestinationId: false,
          tag_id: 629,
        },
        {
          function: "__awct",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableNewCustomerReporting: false,
          vtp_enableConversionLinker: true,
          vtp_enableProductReporting: false,
          vtp_enableEnhancedConversion: false,
          vtp_conversionCookiePrefix: "_gcl",
          vtp_enableShippingData: false,
          vtp_conversionId: "869763654",
          vtp_conversionLabel: "dwsDCKzCqN0DEMaU3p4D",
          vtp_rdp: false,
          vtp_url: ["macro", 5],
          vtp_enableProductReportingCheckbox: true,
          vtp_enableNewCustomerReportingCheckbox: true,
          vtp_enableEnhancedConversionsCheckbox: false,
          vtp_enableRdpCheckbox: true,
          vtp_enableTransportUrl: false,
          vtp_enableCustomParams: false,
          vtp_enableSmartDestinationId: false,
          tag_id: 630,
        },
        {
          function: "__paused",
          vtp_originalTagType: "cvt_1766321_645",
          tag_id: 647,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "link_url",
              "parameterValue",
              ["template", ["macro", 47], "://", ["macro", 48], ["macro", 49]],
            ],
            ["map", "parameter", "link_text", "parameterValue", ["macro", 50]],
            [
              "map",
              "parameter",
              "cta_type",
              "parameterValue",
              "homepage_booking",
            ],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "ga4 - event - call_to_action - homepage booking link",
            ],
          ],
          vtp_eventName: "call_to_action",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 669,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "link_url",
              "parameterValue",
              ["template", ["macro", 47], "://", ["macro", 48], ["macro", 49]],
            ],
            ["map", "parameter", "link_text", "parameterValue", "book tickets"],
            [
              "map",
              "parameter",
              "cta_type",
              "parameterValue",
              "exhibition_hero",
            ],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "ga4 - event - call_to_action - exhibition booking button",
            ],
          ],
          vtp_eventName: "call_to_action",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 670,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "search_term",
              "parameterValue",
              ["macro", 56],
            ],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "ga4 - event - view_search_results - main search page",
            ],
          ],
          vtp_eventName: "view_search_results",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 675,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            ["map", "parameter", "items", "parameterValue", ["macro", 21]],
            [
              "map",
              "parameter",
              "transaction_id",
              "parameterValue",
              ["macro", 3],
            ],
            ["map", "parameter", "value", "parameterValue", ["macro", 4]],
            ["map", "parameter", "currency", "parameterValue", "GBP"],
            [
              "map",
              "parameter",
              "purchase_categories",
              "parameterValue",
              ["macro", 26],
            ],
            [
              "map",
              "parameter",
              "purchase_products",
              "parameterValue",
              ["macro", 28],
            ],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "bm main - ga4 purchase - china's hidden century",
            ],
          ],
          vtp_eventName: "purchase_china",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 678,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            ["map", "parameter", "items", "parameterValue", ["macro", 21]],
            [
              "map",
              "parameter",
              "transaction_id",
              "parameterValue",
              ["macro", 3],
            ],
            ["map", "parameter", "value", "parameterValue", ["macro", 4]],
            ["map", "parameter", "currency", "parameterValue", "GBP"],
            [
              "map",
              "parameter",
              "purchase_categories",
              "parameterValue",
              ["macro", 26],
            ],
            [
              "map",
              "parameter",
              "purchase_products",
              "parameterValue",
              ["macro", 28],
            ],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "bm main - ga4 purchase - membership cc",
            ],
          ],
          vtp_eventName: "purchase_cc",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 685,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            ["map", "parameter", "items", "parameterValue", ["macro", 21]],
            [
              "map",
              "parameter",
              "transaction_id",
              "parameterValue",
              ["macro", 3],
            ],
            ["map", "parameter", "value", "parameterValue", ["macro", 4]],
            ["map", "parameter", "currency", "parameterValue", "GBP"],
            [
              "map",
              "parameter",
              "purchase_categories",
              "parameterValue",
              ["macro", 26],
            ],
            [
              "map",
              "parameter",
              "purchase_products",
              "parameterValue",
              ["macro", 28],
            ],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "bm main - ga4 purchase - membership",
            ],
          ],
          vtp_eventName: "purchase_membership",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 686,
        },
        {
          function: "__cvt_1766321_645",
          metadata: ["map"],
          once_per_event: true,
          vtp_adsDataRedaction: "dynamic",
          vtp_addGeoRegion: false,
          vtp_serial: "ec5f4b04-e699-4bea-a9de-eda95d4d9fb7",
          vtp_iabFramework: true,
          vtp_language: "auto",
          vtp_urlPassthrough: true,
          vtp_consentModeEnabled: true,
          vtp_waitForUpdate: "2000",
          tag_id: 688,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            ["map", "parameter", "click_type", "parameterValue", ["macro", 57]],
            ["map", "parameter", "link_text", "parameterValue", ["macro", 50]],
            [
              "map",
              "parameter",
              "link_url",
              "parameterValue",
              ["template", ["macro", 47], "://", ["macro", 48], ["macro", 49]],
            ],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "ga4 - event - internal navigation",
            ],
          ],
          vtp_eventName: "navigation",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 692,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            ["map", "parameter", "feature_type", "parameterValue", "accordion"],
            ["map", "parameter", "link_text", "parameterValue", ["macro", 50]],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "ga4 - event - website features - accordion",
            ],
          ],
          vtp_eventName: "website_features",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 694,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "feature_type",
              "parameterValue",
              "membership popup",
            ],
            ["map", "parameter", "action_type", "parameterValue", "appear"],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "ga4 - event - website features - membership popup - appear",
            ],
          ],
          vtp_eventName: "website_features",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 696,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "feature_type",
              "parameterValue",
              "membership popup",
            ],
            ["map", "parameter", "action_type", "parameterValue", "click"],
            ["map", "parameter", "link_text", "parameterValue", ["macro", 50]],
            [
              "map",
              "parameter",
              "link_url",
              "parameterValue",
              ["template", ["macro", 47], "://", ["macro", 48], ["macro", 49]],
            ],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "ga4 - event - website features - membership popup - click",
            ],
          ],
          vtp_eventName: "website_features",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 698,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "feature_type",
              "parameterValue",
              "membership popup",
            ],
            ["map", "parameter", "action_type", "parameterValue", "close"],
            ["map", "parameter", "link_text", "parameterValue", ["macro", 50]],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "ga4 - event - website features - membership popup - close",
            ],
          ],
          vtp_eventName: "website_features",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 699,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: true,
          vtp_getEcommerceDataFrom: "dataLayer",
          vtp_eventSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "bm main - ga4 purchase - membership dd",
            ],
            [
              "map",
              "parameter",
              "purchase_categories",
              "parameterValue",
              "membership direct debit",
            ],
            [
              "map",
              "parameter",
              "purchase_products",
              "parameterValue",
              ["macro", 59],
            ],
          ],
          vtp_enhancedUserId: false,
          vtp_eventName: "purchase",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 703,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "ga4 - event - begin_checkout - mship dd",
            ],
          ],
          vtp_eventName: "begin_checkout",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 709,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "link_url",
              "parameterValue",
              ["template", ["macro", 47], "://", ["macro", 48], ["macro", 49]],
            ],
            ["map", "parameter", "link_text", "parameterValue", ["macro", 50]],
            ["map", "parameter", "cta_type", "parameterValue", ["macro", 61]],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "ga4 - event - call_to_action - 360 tour buttons",
            ],
          ],
          vtp_eventName: "call_to_action",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 730,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "click_type",
              "parameterValue",
              "email sign-up link",
            ],
            ["map", "parameter", "link_text", "parameterValue", ["macro", 50]],
            [
              "map",
              "parameter",
              "link_url",
              "parameterValue",
              ["template", ["macro", 47], "://", ["macro", 48], ["macro", 49]],
            ],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "ga4 - event - click - email sign up",
            ],
          ],
          vtp_eventName: "click",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 732,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "ga4 - event - form - contact",
            ],
            [
              "map",
              "parameter",
              "form_type",
              "parameterValue",
              ["template", "contact_", ["macro", 62]],
            ],
          ],
          vtp_eventName: "form",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 733,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "ga4 - event - apply filter - search results",
            ],
            ["map", "parameter", "filter_type", "parameterValue", "search"],
            [
              "map",
              "parameter",
              "filter_field",
              "parameterValue",
              "category - apply",
            ],
            [
              "map",
              "parameter",
              "filter_value",
              "parameterValue",
              ["macro", 50],
            ],
            [
              "map",
              "parameter",
              "search_term",
              "parameterValue",
              ["macro", 56],
            ],
          ],
          vtp_eventName: "filter",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 736,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "ga4 - event - search results banner - appear",
            ],
            [
              "map",
              "parameter",
              "feature_type",
              "parameterValue",
              "search results banner",
            ],
            ["map", "parameter", "action_type", "parameterValue", "appear"],
            [
              "map",
              "parameter",
              "search_term",
              "parameterValue",
              ["macro", 56],
            ],
          ],
          vtp_eventName: "website_features",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 739,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "ga4 - event - search results banner - click",
            ],
            [
              "map",
              "parameter",
              "feature_type",
              "parameterValue",
              "search results banner",
            ],
            ["map", "parameter", "action_type", "parameterValue", "click"],
            ["map", "parameter", "link_text", "parameterValue", ["macro", 50]],
            [
              "map",
              "parameter",
              "link_url",
              "parameterValue",
              ["template", ["macro", 47], "://", ["macro", 48], ["macro", 49]],
            ],
            [
              "map",
              "parameter",
              "search_term",
              "parameterValue",
              ["macro", 56],
            ],
          ],
          vtp_eventName: "website_features",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 740,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "ga4 - event - remove filter - search results",
            ],
            ["map", "parameter", "filter_type", "parameterValue", "search"],
            [
              "map",
              "parameter",
              "filter_field",
              "parameterValue",
              "category - remove",
            ],
            [
              "map",
              "parameter",
              "filter_value",
              "parameterValue",
              ["macro", 50],
            ],
            [
              "map",
              "parameter",
              "search_term",
              "parameterValue",
              ["macro", 56],
            ],
          ],
          vtp_eventName: "filter",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 749,
        },
        {
          function: "__awct",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableNewCustomerReporting: false,
          vtp_enableConversionLinker: true,
          vtp_orderId: ["macro", 9],
          vtp_enableProductReporting: false,
          vtp_conversionValue: ["macro", 8],
          vtp_enableEnhancedConversion: false,
          vtp_conversionCookiePrefix: "_gcl",
          vtp_enableShippingData: false,
          vtp_conversionId: "967338294",
          vtp_currencyCode: ["macro", 7],
          vtp_conversionLabel: "6rltCOCQs9YYELbSoc0D",
          vtp_rdp: false,
          vtp_url: ["macro", 5],
          vtp_enableProductReportingCheckbox: true,
          vtp_enableNewCustomerReportingCheckbox: true,
          vtp_enableEnhancedConversionsCheckbox: false,
          vtp_enableRdpCheckbox: true,
          vtp_enableTransportUrl: false,
          vtp_enableCustomParams: false,
          vtp_enableSmartDestinationId: false,
          tag_id: 768,
        },
        {
          function: "__awct",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableNewCustomerReporting: false,
          vtp_enableConversionLinker: true,
          vtp_orderId: ["macro", 3],
          vtp_enableProductReporting: false,
          vtp_conversionValue: ["macro", 4],
          vtp_enableEnhancedConversion: false,
          vtp_conversionCookiePrefix: "_gcl",
          vtp_enableShippingData: false,
          vtp_conversionId: "967338294",
          vtp_currencyCode: "GBP",
          vtp_conversionLabel: "YvvHCOOQs9YYELbSoc0D",
          vtp_rdp: false,
          vtp_url: ["macro", 5],
          vtp_enableProductReportingCheckbox: true,
          vtp_enableNewCustomerReportingCheckbox: true,
          vtp_enableEnhancedConversionsCheckbox: false,
          vtp_enableRdpCheckbox: true,
          vtp_enableTransportUrl: false,
          vtp_enableCustomParams: false,
          vtp_enableSmartDestinationId: false,
          tag_id: 773,
        },
        {
          function: "__awct",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableNewCustomerReporting: false,
          vtp_enableConversionLinker: true,
          vtp_orderId: ["macro", 3],
          vtp_enableProductReporting: false,
          vtp_conversionValue: ["macro", 4],
          vtp_enableEnhancedConversion: false,
          vtp_conversionCookiePrefix: "_gcl",
          vtp_enableShippingData: false,
          vtp_conversionId: "967338294",
          vtp_currencyCode: "GBP",
          vtp_conversionLabel: "eVlWCOaQs9YYELbSoc0D",
          vtp_rdp: false,
          vtp_url: ["macro", 5],
          vtp_enableProductReportingCheckbox: true,
          vtp_enableNewCustomerReportingCheckbox: true,
          vtp_enableEnhancedConversionsCheckbox: false,
          vtp_enableRdpCheckbox: true,
          vtp_enableTransportUrl: false,
          vtp_enableCustomParams: false,
          vtp_enableSmartDestinationId: false,
          tag_id: 774,
        },
        {
          function: "__awct",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableNewCustomerReporting: false,
          vtp_enableConversionLinker: true,
          vtp_orderId: ["macro", 3],
          vtp_enableProductReporting: false,
          vtp_conversionValue: ["macro", 4],
          vtp_enableEnhancedConversion: false,
          vtp_conversionCookiePrefix: "_gcl",
          vtp_enableShippingData: false,
          vtp_conversionId: "869763654",
          vtp_currencyCode: "GBP",
          vtp_conversionLabel: "QjCdCJjdqtYYEMaU3p4D",
          vtp_rdp: false,
          vtp_url: ["macro", 5],
          vtp_enableProductReportingCheckbox: true,
          vtp_enableNewCustomerReportingCheckbox: true,
          vtp_enableEnhancedConversionsCheckbox: false,
          vtp_enableRdpCheckbox: true,
          vtp_enableTransportUrl: false,
          vtp_enableCustomParams: false,
          vtp_enableSmartDestinationId: false,
          tag_id: 775,
        },
        {
          function: "__awct",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableNewCustomerReporting: false,
          vtp_enableConversionLinker: true,
          vtp_orderId: ["macro", 9],
          vtp_enableProductReporting: false,
          vtp_conversionValue: ["macro", 8],
          vtp_enableEnhancedConversion: false,
          vtp_conversionCookiePrefix: "_gcl",
          vtp_enableShippingData: false,
          vtp_conversionId: "869763654",
          vtp_currencyCode: ["macro", 7],
          vtp_conversionLabel: "BmbACIbdqtYYEMaU3p4D",
          vtp_rdp: false,
          vtp_url: ["macro", 5],
          vtp_enableProductReportingCheckbox: true,
          vtp_enableNewCustomerReportingCheckbox: true,
          vtp_enableEnhancedConversionsCheckbox: false,
          vtp_enableRdpCheckbox: true,
          vtp_enableTransportUrl: false,
          vtp_enableCustomParams: false,
          vtp_enableSmartDestinationId: false,
          tag_id: 776,
        },
        {
          function: "__awct",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableNewCustomerReporting: false,
          vtp_enableConversionLinker: true,
          vtp_orderId: ["macro", 3],
          vtp_enableProductReporting: false,
          vtp_conversionValue: ["macro", 4],
          vtp_enableEnhancedConversion: false,
          vtp_conversionCookiePrefix: "_gcl",
          vtp_enableShippingData: false,
          vtp_conversionId: "869763654",
          vtp_currencyCode: "GBP",
          vtp_conversionLabel: "TvBkCIPdqtYYEMaU3p4D",
          vtp_rdp: false,
          vtp_url: ["macro", 5],
          vtp_enableProductReportingCheckbox: true,
          vtp_enableNewCustomerReportingCheckbox: true,
          vtp_enableEnhancedConversionsCheckbox: false,
          vtp_enableRdpCheckbox: true,
          vtp_enableTransportUrl: false,
          vtp_enableCustomParams: false,
          vtp_enableSmartDestinationId: false,
          tag_id: 777,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            ["map", "parameter", "form_type", "parameterValue", "patrons"],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "ga4 - event - form - patrons",
            ],
          ],
          vtp_eventName: "form",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 784,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "audio_title",
              "parameterValue",
              ["macro", 63],
            ],
            [
              "map",
              "parameter",
              "audio_percent",
              "parameterValue",
              ["macro", 64],
            ],
            [
              "map",
              "parameter",
              "audio_provider",
              "parameterValue",
              "soundcloud",
            ],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "ga4 - event - soundcloud",
            ],
          ],
          vtp_eventName: ["template", "audio_", ["macro", 65]],
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 793,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            ["map", "parameter", "method", "parameterValue", "checkout"],
            ["map", "parameter", "is_newsletter_signup", "parameterValue", "1"],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "ga4 - event - email_list_signup",
            ],
          ],
          vtp_eventName: "email_list_signup",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 816,
        },
        {
          function: "__awct",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableNewCustomerReporting: false,
          vtp_enableConversionLinker: true,
          vtp_orderId: ["macro", 9],
          vtp_enableProductReporting: false,
          vtp_conversionValue: ["macro", 8],
          vtp_enableEnhancedConversion: false,
          vtp_conversionCookiePrefix: "_gcl",
          vtp_enableShippingData: false,
          vtp_conversionId: "967338294",
          vtp_currencyCode: ["macro", 7],
          vtp_conversionLabel: "R-vgCPmD4PwYELbSoc0D",
          vtp_rdp: false,
          vtp_url: ["macro", 5],
          vtp_enableProductReportingCheckbox: true,
          vtp_enableNewCustomerReportingCheckbox: true,
          vtp_enableEnhancedConversionsCheckbox: false,
          vtp_enableRdpCheckbox: true,
          vtp_enableTransportUrl: false,
          vtp_enableCustomParams: false,
          vtp_enableSmartDestinationId: false,
          tag_id: 820,
        },
        {
          function: "__awct",
          metadata: ["map"],
          once_per_event: true,
          vtp_enableNewCustomerReporting: false,
          vtp_enableConversionLinker: true,
          vtp_orderId: ["macro", 9],
          vtp_enableProductReporting: false,
          vtp_conversionValue: ["macro", 8],
          vtp_enableEnhancedConversion: false,
          vtp_conversionCookiePrefix: "_gcl",
          vtp_enableShippingData: false,
          vtp_conversionId: "869763654",
          vtp_currencyCode: ["macro", 7],
          vtp_conversionLabel: "b8EeCK3n4_wYEMaU3p4D",
          vtp_rdp: false,
          vtp_url: ["macro", 5],
          vtp_enableProductReportingCheckbox: true,
          vtp_enableNewCustomerReportingCheckbox: true,
          vtp_enableEnhancedConversionsCheckbox: false,
          vtp_enableRdpCheckbox: true,
          vtp_enableTransportUrl: false,
          vtp_enableCustomParams: false,
          vtp_enableSmartDestinationId: false,
          tag_id: 821,
        },
        {
          function: "__cvt_1766321_824",
          metadata: ["map"],
          consent: ["list", "analytics_storage"],
          once_per_event: true,
          vtp_projectId: "c9kdlnsy1w",
          tag_id: 826,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: true,
          vtp_getEcommerceDataFrom: "dataLayer",
          vtp_eventSettingsTable: [
            "list",
            ["map", "parameter", "items", "parameterValue", ["macro", 24]],
            ["map", "parameter", "coupon", "parameterValue", ["macro", 66]],
            ["map", "parameter", "currency", "parameterValue", ["macro", 7]],
            ["map", "parameter", "value", "parameterValue", ["macro", 8]],
            [
              "map",
              "parameter",
              "payment_type",
              "parameterValue",
              ["macro", 67],
            ],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "GA4 - add_payment_info - Shop",
            ],
          ],
          vtp_enhancedUserId: false,
          vtp_eventName: "add_payment_info",
          vtp_measurementIdOverride: ["macro", 30],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 834,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: true,
          vtp_getEcommerceDataFrom: "dataLayer",
          vtp_eventSettingsTable: [
            "list",
            ["map", "parameter", "items", "parameterValue", ["macro", 24]],
            ["map", "parameter", "value", "parameterValue", ["macro", 8]],
            ["map", "parameter", "currency", "parameterValue", ["macro", 7]],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "GA4 - view_cart - Shop",
            ],
          ],
          vtp_enhancedUserId: false,
          vtp_eventName: "view_cart",
          vtp_measurementIdOverride: ["macro", 30],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 837,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: true,
          vtp_getEcommerceDataFrom: "dataLayer",
          vtp_eventSettingsTable: [
            "list",
            ["map", "parameter", "items", "parameterValue", ["macro", 24]],
            ["map", "parameter", "coupon", "parameterValue", ["macro", 66]],
            ["map", "parameter", "currency", "parameterValue", ["macro", 7]],
            ["map", "parameter", "value", "parameterValue", ["macro", 8]],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "GA4 - begin_checkout - Shop",
            ],
          ],
          vtp_enhancedUserId: false,
          vtp_eventName: "begin_checkout",
          vtp_measurementIdOverride: ["macro", 30],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 841,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: true,
          vtp_getEcommerceDataFrom: "dataLayer",
          vtp_eventSettingsTable: [
            "list",
            ["map", "parameter", "items", "parameterValue", ["macro", 24]],
            [
              "map",
              "parameter",
              "transaction_id",
              "parameterValue",
              ["macro", 9],
            ],
            ["map", "parameter", "value", "parameterValue", ["macro", 8]],
            ["map", "parameter", "currency", "parameterValue", ["macro", 7]],
            ["map", "parameter", "coupon", "parameterValue", ["macro", 66]],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "bm shop - ga4 purchase - shop",
            ],
          ],
          vtp_enhancedUserId: false,
          vtp_eventName: "purchase",
          vtp_measurementIdOverride: ["macro", 30],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 844,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: true,
          vtp_getEcommerceDataFrom: "dataLayer",
          vtp_eventSettingsTable: [
            "list",
            ["map", "parameter", "items", "parameterValue", ["macro", 24]],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "GA4 - view_item - Shop",
            ],
          ],
          vtp_enhancedUserId: false,
          vtp_eventName: "view_item",
          vtp_measurementIdOverride: ["macro", 30],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 847,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: true,
          vtp_getEcommerceDataFrom: "dataLayer",
          vtp_eventSettingsTable: [
            "list",
            ["map", "parameter", "items", "parameterValue", ["macro", 24]],
            [
              "map",
              "parameter",
              "item_list_name",
              "parameterValue",
              ["macro", 68],
            ],
            [
              "map",
              "parameter",
              "item_list_id",
              "parameterValue",
              ["macro", 69],
            ],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "GA4 - view_item_list - Shop",
            ],
          ],
          vtp_enhancedUserId: false,
          vtp_eventName: "view_item_list",
          vtp_measurementIdOverride: ["macro", 30],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 852,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_enhancedUserId: false,
          vtp_userProperties: [
            "list",
            ["map", "name", "userId", "value", ["macro", 70]],
            ["map", "name", "customer_group", "value", ["macro", 71]],
            [
              "map",
              "name",
              "gtm_tag",
              "value",
              "GA4 - set_user_properties - Shop",
            ],
          ],
          vtp_eventName: "set_user_properties",
          vtp_measurementIdOverride: ["macro", 30],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 855,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: true,
          vtp_getEcommerceDataFrom: "dataLayer",
          vtp_eventSettingsTable: [
            "list",
            ["map", "parameter", "items", "parameterValue", ["macro", 24]],
            ["map", "parameter", "coupon", "parameterValue", ["macro", 66]],
            ["map", "parameter", "currency", "parameterValue", ["macro", 7]],
            ["map", "parameter", "value", "parameterValue", ["macro", 8]],
            [
              "map",
              "parameter",
              "shipping_tier",
              "parameterValue",
              ["macro", 72],
            ],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "GA4 - add_shipping_info - Shop",
            ],
          ],
          vtp_enhancedUserId: false,
          vtp_eventName: "add_shipping_info",
          vtp_measurementIdOverride: ["macro", 30],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 856,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: true,
          vtp_getEcommerceDataFrom: "dataLayer",
          vtp_eventSettingsTable: [
            "list",
            ["map", "parameter", "items", "parameterValue", ["macro", 24]],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "GA4 - remove_from_cart - Shop",
            ],
          ],
          vtp_enhancedUserId: false,
          vtp_eventName: "remove_from_cart",
          vtp_measurementIdOverride: ["macro", 30],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 860,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: true,
          vtp_getEcommerceDataFrom: "dataLayer",
          vtp_eventSettingsTable: [
            "list",
            ["map", "parameter", "items", "parameterValue", ["macro", 24]],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "GA4 - select_promotion - Shop",
            ],
          ],
          vtp_enhancedUserId: false,
          vtp_eventName: "select_promotion",
          vtp_measurementIdOverride: ["macro", 30],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 861,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: true,
          vtp_getEcommerceDataFrom: "dataLayer",
          vtp_eventSettingsTable: [
            "list",
            ["map", "parameter", "items", "parameterValue", ["macro", 24]],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "GA4 - add_to_cart - Shop",
            ],
          ],
          vtp_enhancedUserId: false,
          vtp_eventName: "add_to_cart",
          vtp_measurementIdOverride: ["macro", 30],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 862,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_enhancedUserId: false,
          vtp_eventSettingsTable: [
            "list",
            ["map", "parameter", "click_type", "parameterValue", "shop slice"],
            ["map", "parameter", "link_text", "parameterValue", ["macro", 73]],
            [
              "map",
              "parameter",
              "link_url",
              "parameterValue",
              ["template", ["macro", 47], "://", ["macro", 48], ["macro", 49]],
            ],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "ga4 - event - shop slice click",
            ],
          ],
          vtp_eventName: "click_to_shop",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 875,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_enhancedUserId: false,
          vtp_eventSettingsTable: [
            "list",
            ["map", "parameter", "link_text", "parameterValue", ["macro", 50]],
            ["map", "parameter", "action_type", "parameterValue", "expand"],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "ga4 - event - jump links - expand",
            ],
          ],
          vtp_eventName: "jump_link_toggle",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 881,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_enhancedUserId: false,
          vtp_eventSettingsTable: [
            "list",
            ["map", "parameter", "link_text", "parameterValue", ["macro", 50]],
            ["map", "parameter", "action_type", "parameterValue", "collapse"],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "ga4 - event - jump links - collapse",
            ],
          ],
          vtp_eventName: "jump_link_toggle",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 882,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_enhancedUserId: false,
          vtp_eventSettingsTable: [
            "list",
            ["map", "parameter", "link_text", "parameterValue", ["macro", 50]],
            ["map", "parameter", "link_url", "parameterValue", ["macro", 36]],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "ga4 - event - jump links - click",
            ],
          ],
          vtp_eventName: "jump_link_click",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 883,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            ["map", "parameter", "click_type", "parameterValue", "header menu"],
            ["map", "parameter", "link_text", "parameterValue", ["macro", 74]],
            [
              "map",
              "parameter",
              "link_url",
              "parameterValue",
              ["template", ["macro", 47], "://", ["macro", 48], ["macro", 49]],
            ],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "ga4 - event - navigation - header menu",
            ],
          ],
          vtp_enhancedUserId: false,
          vtp_eventName: "navigation",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 897,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "link_url",
              "parameterValue",
              ["template", ["macro", 47], "://", ["macro", 48], ["macro", 49]],
            ],
            ["map", "parameter", "link_text", "parameterValue", ["macro", 50]],
            [
              "map",
              "parameter",
              "cta_type",
              "parameterValue",
              "collection images",
            ],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "ga4 - event - call_to_action - collection images",
            ],
          ],
          vtp_enhancedUserId: false,
          vtp_eventName: "call_to_action",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 902,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "ga4 - event - form - image request",
            ],
            [
              "map",
              "parameter",
              "form_type",
              "parameterValue",
              "image request",
            ],
          ],
          vtp_enhancedUserId: false,
          vtp_eventName: "form",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 907,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "ga4 - event - form - contact bm images",
            ],
            [
              "map",
              "parameter",
              "form_type",
              "parameterValue",
              "contact bm images",
            ],
          ],
          vtp_enhancedUserId: false,
          vtp_eventName: "form",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 910,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_eventSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "click_type",
              "parameterValue",
              "footer back to top",
            ],
            ["map", "parameter", "link_text", "parameterValue", ["macro", 50]],
            [
              "map",
              "parameter",
              "link_url",
              "parameterValue",
              ["template", ["macro", 47], "://", ["macro", 48], ["macro", 49]],
            ],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "ga4 - event - navigation - footer back to top",
            ],
          ],
          vtp_enhancedUserId: false,
          vtp_eventName: "navigation",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 919,
        },
        {
          function: "__gaawe",
          metadata: ["map"],
          once_per_event: true,
          vtp_sendEcommerceData: false,
          vtp_enhancedUserId: false,
          vtp_eventSettingsTable: [
            "list",
            [
              "map",
              "parameter",
              "loading_time_sec",
              "parameterValue",
              ["macro", 75],
            ],
            [
              "map",
              "parameter",
              "gtm_tag",
              "parameterValue",
              "ga4 - event - page load time",
            ],
          ],
          vtp_eventName: "page_load_time",
          vtp_measurementIdOverride: ["macro", 16],
          vtp_enableUserProperties: true,
          vtp_enableMoreSettingsOption: true,
          vtp_enableEuid: true,
          vtp_migratedToV2: true,
          vtp_demoV2: false,
          tag_id: 924,
        },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "1766321_66",
          tag_id: 925,
        },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "1766321_136",
          tag_id: 926,
        },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "1766321_138",
          tag_id: 927,
        },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "1766321_139",
          tag_id: 928,
        },
        {
          function: "__ytl",
          vtp_progressThresholdsPercent: "10, 25, 50, 75, 90",
          vtp_captureComplete: true,
          vtp_captureStart: true,
          vtp_fixMissingApi: true,
          vtp_triggerStartOption: "DOM_READY",
          vtp_radioButtonGroup1: "PERCENTAGE",
          vtp_capturePause: false,
          vtp_captureProgress: true,
          vtp_uniqueTriggerId: "1766321_140",
          vtp_enableTriggerStartOption: true,
          tag_id: 929,
        },
        {
          function: "__fsl",
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "1766321_172",
          tag_id: 930,
        },
        {
          function: "__evl",
          vtp_elementId: "block-relatedcontent",
          vtp_useOnScreenDuration: false,
          vtp_useDomChangeListener: false,
          vtp_firingFrequency: "ONCE",
          vtp_selectorType: "ID",
          vtp_onScreenRatio: "50",
          vtp_uniqueTriggerId: "1766321_173",
          tag_id: 931,
        },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "1766321_174",
          tag_id: 932,
        },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "1766321_175",
          tag_id: 933,
        },
        {
          function: "__evl",
          vtp_useOnScreenDuration: false,
          vtp_useDomChangeListener: true,
          vtp_elementSelector: ".modal__container",
          vtp_firingFrequency: "MANY_PER_ELEMENT",
          vtp_selectorType: "CSS",
          vtp_onScreenRatio: "50",
          vtp_uniqueTriggerId: "1766321_176",
          tag_id: 934,
        },
        { function: "__cl", tag_id: 935 },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "1766321_178",
          tag_id: 936,
        },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "1766321_179",
          tag_id: 937,
        },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "1766321_224",
          tag_id: 938,
        },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "1766321_232",
          tag_id: 939,
        },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "1766321_240",
          tag_id: 940,
        },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "1766321_241",
          tag_id: 941,
        },
        { function: "__cl", tag_id: 942 },
        {
          function: "__sdl",
          vtp_verticalThresholdUnits: "PERCENT",
          vtp_verticalThresholdsPercent: "25,50,75,90",
          vtp_verticalThresholdOn: true,
          vtp_triggerStartOption: "WINDOW_LOAD",
          vtp_horizontalThresholdOn: false,
          vtp_uniqueTriggerId: "1766321_299",
          vtp_enableTriggerStartOption: true,
          tag_id: 943,
        },
        {
          function: "__tg",
          vtp_triggerIds: ["list", "1766321_302_303", "1766321_302_304"],
          vtp_uniqueTriggerId: "1766321_302",
          tag_id: 944,
        },
        {
          function: "__tg",
          vtp_isListeningTag: true,
          vtp_firingId: "1766321_302_303",
          tag_id: 945,
        },
        {
          function: "__tg",
          vtp_isListeningTag: true,
          vtp_firingId: "1766321_302_304",
          tag_id: 947,
        },
        {
          function: "__tl",
          vtp_eventName: "gtm.timer",
          vtp_interval: "30000",
          vtp_limit: "1",
          vtp_uniqueTriggerId: "1766321_303",
          tag_id: 948,
        },
        {
          function: "__sdl",
          vtp_verticalThresholdUnits: "PERCENT",
          vtp_verticalThresholdsPercent: "75",
          vtp_verticalThresholdOn: true,
          vtp_triggerStartOption: "WINDOW_LOAD",
          vtp_horizontalThresholdOn: false,
          vtp_uniqueTriggerId: "1766321_304",
          vtp_enableTriggerStartOption: true,
          tag_id: 949,
        },
        {
          function: "__evl",
          vtp_useOnScreenDuration: false,
          vtp_useDomChangeListener: false,
          vtp_elementSelector: ".section__title",
          vtp_firingFrequency: "ONCE_PER_ELEMENT",
          vtp_selectorType: "CSS",
          vtp_onScreenRatio: "50",
          vtp_uniqueTriggerId: "1766321_306",
          tag_id: 950,
        },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "1766321_310",
          tag_id: 951,
        },
        {
          function: "__evl",
          vtp_useOnScreenDuration: false,
          vtp_useDomChangeListener: false,
          vtp_elementSelector: ".section--slice-content__main",
          vtp_firingFrequency: "ONCE_PER_ELEMENT",
          vtp_selectorType: "CSS",
          vtp_onScreenRatio: "50",
          vtp_uniqueTriggerId: "1766321_333",
          tag_id: 952,
        },
        { function: "__cl", tag_id: 953 },
        {
          function: "__fsl",
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "1766321_354",
          tag_id: 954,
        },
        { function: "__cl", tag_id: 955 },
        { function: "__cl", tag_id: 956 },
        { function: "__cl", tag_id: 957 },
        { function: "__cl", tag_id: 958 },
        { function: "__cl", tag_id: 959 },
        {
          function: "__sdl",
          vtp_verticalThresholdUnits: "PERCENT",
          vtp_verticalThresholdsPercent: "25, 50, 75, 90",
          vtp_verticalThresholdOn: true,
          vtp_triggerStartOption: "WINDOW_LOAD",
          vtp_horizontalThresholdOn: false,
          vtp_uniqueTriggerId: "1766321_365",
          vtp_enableTriggerStartOption: true,
          tag_id: 960,
        },
        {
          function: "__sdl",
          vtp_verticalThresholdUnits: "PERCENT",
          vtp_verticalThresholdsPercent: "25, 50, 75, 90",
          vtp_verticalThresholdOn: true,
          vtp_triggerStartOption: "WINDOW_LOAD",
          vtp_horizontalThresholdOn: false,
          vtp_uniqueTriggerId: "1766321_367",
          vtp_enableTriggerStartOption: true,
          tag_id: 961,
        },
        {
          function: "__fsl",
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "1766321_369",
          tag_id: 962,
        },
        {
          function: "__fsl",
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "1766321_384",
          tag_id: 963,
        },
        {
          function: "__fsl",
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "1766321_386",
          tag_id: 964,
        },
        {
          function: "__fsl",
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "1766321_388",
          tag_id: 965,
        },
        {
          function: "__fsl",
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "1766321_389",
          tag_id: 966,
        },
        {
          function: "__fsl",
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "1766321_390",
          tag_id: 967,
        },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "1766321_400",
          tag_id: 968,
        },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "1766321_404",
          tag_id: 969,
        },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "1766321_408",
          tag_id: 970,
        },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "1766321_411",
          tag_id: 971,
        },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "1766321_423",
          tag_id: 972,
        },
        { function: "__cl", tag_id: 973 },
        { function: "__cl", tag_id: 974 },
        { function: "__cl", tag_id: 975 },
        {
          function: "__tg",
          vtp_triggerIds: ["list", "1766321_483_463", "1766321_483_846"],
          vtp_uniqueTriggerId: "1766321_483",
          tag_id: 976,
        },
        {
          function: "__tg",
          vtp_isListeningTag: true,
          vtp_firingId: "1766321_483_463",
          tag_id: 977,
        },
        {
          function: "__tg",
          vtp_isListeningTag: true,
          vtp_firingId: "1766321_483_846",
          tag_id: 979,
        },
        {
          function: "__tg",
          vtp_triggerIds: ["list", "1766321_484_463", "1766321_484_840"],
          vtp_uniqueTriggerId: "1766321_484",
          tag_id: 980,
        },
        {
          function: "__tg",
          vtp_isListeningTag: true,
          vtp_firingId: "1766321_484_463",
          tag_id: 981,
        },
        {
          function: "__tg",
          vtp_isListeningTag: true,
          vtp_firingId: "1766321_484_840",
          tag_id: 983,
        },
        {
          function: "__tg",
          vtp_triggerIds: ["list", "1766321_485_463", "1766321_485_859"],
          vtp_uniqueTriggerId: "1766321_485",
          tag_id: 984,
        },
        {
          function: "__tg",
          vtp_isListeningTag: true,
          vtp_firingId: "1766321_485_463",
          tag_id: 985,
        },
        {
          function: "__tg",
          vtp_isListeningTag: true,
          vtp_firingId: "1766321_485_859",
          tag_id: 987,
        },
        {
          function: "__tg",
          vtp_triggerIds: ["list", "1766321_486_463", "1766321_486_842"],
          vtp_uniqueTriggerId: "1766321_486",
          tag_id: 988,
        },
        {
          function: "__tg",
          vtp_isListeningTag: true,
          vtp_firingId: "1766321_486_463",
          tag_id: 989,
        },
        {
          function: "__tg",
          vtp_isListeningTag: true,
          vtp_firingId: "1766321_486_842",
          tag_id: 991,
        },
        {
          function: "__tg",
          vtp_triggerIds: ["list", "1766321_512_438", "1766321_512_515"],
          vtp_uniqueTriggerId: "1766321_512",
          tag_id: 992,
        },
        {
          function: "__tg",
          vtp_isListeningTag: true,
          vtp_firingId: "1766321_512_438",
          tag_id: 993,
        },
        {
          function: "__tg",
          vtp_isListeningTag: true,
          vtp_firingId: "1766321_512_515",
          tag_id: 995,
        },
        { function: "__cl", tag_id: 996 },
        { function: "__cl", tag_id: 997 },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "1766321_556",
          tag_id: 998,
        },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "1766321_557",
          tag_id: 999,
        },
        {
          function: "__sdl",
          vtp_verticalThresholdUnits: "PERCENT",
          vtp_verticalThresholdsPercent: "25, 50, 75, 90",
          vtp_verticalThresholdOn: true,
          vtp_triggerStartOption: "WINDOW_LOAD",
          vtp_horizontalThresholdOn: false,
          vtp_uniqueTriggerId: "1766321_564",
          vtp_enableTriggerStartOption: true,
          tag_id: 1000,
        },
        {
          function: "__evl",
          vtp_elementId: "block-relatedcontent",
          vtp_useOnScreenDuration: false,
          vtp_useDomChangeListener: false,
          vtp_firingFrequency: "ONCE",
          vtp_selectorType: "ID",
          vtp_onScreenRatio: "50",
          vtp_uniqueTriggerId: "1766321_566",
          tag_id: 1001,
        },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "1766321_571",
          tag_id: 1002,
        },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "1766321_572",
          tag_id: 1003,
        },
        {
          function: "__tl",
          vtp_eventName: "gtm.timer",
          vtp_interval: "30000",
          vtp_limit: "1",
          vtp_uniqueTriggerId: "1766321_575",
          tag_id: 1004,
        },
        {
          function: "__sdl",
          vtp_verticalThresholdUnits: "PERCENT",
          vtp_verticalThresholdsPercent: "75",
          vtp_verticalThresholdOn: true,
          vtp_triggerStartOption: "WINDOW_LOAD",
          vtp_horizontalThresholdOn: false,
          vtp_uniqueTriggerId: "1766321_576",
          vtp_enableTriggerStartOption: true,
          tag_id: 1005,
        },
        {
          function: "__tg",
          vtp_triggerIds: ["list", "1766321_577_575", "1766321_577_576"],
          vtp_uniqueTriggerId: "1766321_577",
          tag_id: 1006,
        },
        {
          function: "__tg",
          vtp_isListeningTag: true,
          vtp_firingId: "1766321_577_575",
          tag_id: 1007,
        },
        {
          function: "__tg",
          vtp_isListeningTag: true,
          vtp_firingId: "1766321_577_576",
          tag_id: 1009,
        },
        { function: "__cl", tag_id: 1010 },
        { function: "__cl", tag_id: 1011 },
        { function: "__cl", tag_id: 1012 },
        { function: "__cl", tag_id: 1013 },
        { function: "__cl", tag_id: 1014 },
        { function: "__cl", tag_id: 1015 },
        { function: "__cl", tag_id: 1016 },
        { function: "__cl", tag_id: 1017 },
        { function: "__cl", tag_id: 1018 },
        {
          function: "__evl",
          vtp_useOnScreenDuration: false,
          vtp_useDomChangeListener: false,
          vtp_elementSelector: "div.carousel--gallery__container",
          vtp_firingFrequency: "ONCE",
          vtp_selectorType: "CSS",
          vtp_onScreenRatio: "100",
          vtp_uniqueTriggerId: "1766321_615",
          tag_id: 1019,
        },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "1766321_618",
          tag_id: 1020,
        },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "1766321_619",
          tag_id: 1021,
        },
        {
          function: "__tg",
          vtp_triggerIds: ["list", "1766321_654_515", "1766321_654_769"],
          vtp_uniqueTriggerId: "1766321_654",
          tag_id: 1022,
        },
        {
          function: "__tg",
          vtp_isListeningTag: true,
          vtp_firingId: "1766321_654_515",
          tag_id: 1023,
        },
        {
          function: "__tg",
          vtp_isListeningTag: true,
          vtp_firingId: "1766321_654_769",
          tag_id: 1025,
        },
        { function: "__cl", tag_id: 1026 },
        { function: "__hl", tag_id: 1027 },
        {
          function: "__tg",
          vtp_triggerIds: ["list", "1766321_681_515", "1766321_681_770"],
          vtp_uniqueTriggerId: "1766321_681",
          tag_id: 1028,
        },
        {
          function: "__tg",
          vtp_isListeningTag: true,
          vtp_firingId: "1766321_681_515",
          tag_id: 1029,
        },
        {
          function: "__tg",
          vtp_isListeningTag: true,
          vtp_firingId: "1766321_681_770",
          tag_id: 1031,
        },
        {
          function: "__tg",
          vtp_triggerIds: ["list", "1766321_684_515", "1766321_684_683"],
          vtp_uniqueTriggerId: "1766321_684",
          tag_id: 1032,
        },
        {
          function: "__tg",
          vtp_isListeningTag: true,
          vtp_firingId: "1766321_684_515",
          tag_id: 1033,
        },
        {
          function: "__tg",
          vtp_isListeningTag: true,
          vtp_firingId: "1766321_684_683",
          tag_id: 1035,
        },
        { function: "__cl", tag_id: 1036 },
        { function: "__cl", tag_id: 1037 },
        { function: "__cl", tag_id: 1038 },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "1766321_734",
          tag_id: 1039,
        },
        {
          function: "__evl",
          vtp_useOnScreenDuration: false,
          vtp_useDomChangeListener: false,
          vtp_elementSelector: ".promoted-content",
          vtp_firingFrequency: "ONCE",
          vtp_selectorType: "CSS",
          vtp_onScreenRatio: "50",
          vtp_uniqueTriggerId: "1766321_737",
          tag_id: 1040,
        },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "1766321_738",
          tag_id: 1041,
        },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "1766321_741",
          tag_id: 1042,
        },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "1766321_778",
          tag_id: 1043,
        },
        {
          function: "__fsl",
          vtp_checkValidation: true,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "1766321_785",
          tag_id: 1044,
        },
        { function: "__cl", tag_id: 1045 },
        {
          function: "__sdl",
          vtp_verticalThresholdUnits: "PERCENT",
          vtp_verticalThresholdsPercent: "25, 50, 75, 90",
          vtp_verticalThresholdOn: true,
          vtp_triggerStartOption: "WINDOW_LOAD",
          vtp_horizontalThresholdOn: false,
          vtp_uniqueTriggerId: "1766321_818",
          vtp_enableTriggerStartOption: true,
          tag_id: 1046,
        },
        { function: "__cl", tag_id: 1047 },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "1766321_879",
          tag_id: 1048,
        },
        { function: "__cl", tag_id: 1049 },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "1766321_896",
          tag_id: 1050,
        },
        { function: "__cl", tag_id: 1051 },
        {
          function: "__fsl",
          vtp_checkValidation: true,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "1766321_906",
          tag_id: 1052,
        },
        {
          function: "__fsl",
          vtp_checkValidation: true,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "1766321_909",
          tag_id: 1053,
        },
        {
          function: "__tg",
          vtp_triggerIds: ["list", "1766321_912_463", "1766321_912_851"],
          vtp_uniqueTriggerId: "1766321_912",
          tag_id: 1054,
        },
        {
          function: "__tg",
          vtp_isListeningTag: true,
          vtp_firingId: "1766321_912_463",
          tag_id: 1055,
        },
        {
          function: "__tg",
          vtp_isListeningTag: true,
          vtp_firingId: "1766321_912_851",
          tag_id: 1057,
        },
        {
          function: "__tg",
          vtp_triggerIds: ["list", "1766321_913_463", "1766321_913_839"],
          vtp_uniqueTriggerId: "1766321_913",
          tag_id: 1058,
        },
        {
          function: "__tg",
          vtp_isListeningTag: true,
          vtp_firingId: "1766321_913_463",
          tag_id: 1059,
        },
        {
          function: "__tg",
          vtp_isListeningTag: true,
          vtp_firingId: "1766321_913_839",
          tag_id: 1061,
        },
        {
          function: "__tg",
          vtp_triggerIds: ["list", "1766321_914_463", "1766321_914_845"],
          vtp_uniqueTriggerId: "1766321_914",
          tag_id: 1062,
        },
        {
          function: "__tg",
          vtp_isListeningTag: true,
          vtp_firingId: "1766321_914_463",
          tag_id: 1063,
        },
        {
          function: "__tg",
          vtp_isListeningTag: true,
          vtp_firingId: "1766321_914_845",
          tag_id: 1065,
        },
        {
          function: "__tg",
          vtp_triggerIds: ["list", "1766321_915_463", "1766321_915_831"],
          vtp_uniqueTriggerId: "1766321_915",
          tag_id: 1066,
        },
        {
          function: "__tg",
          vtp_isListeningTag: true,
          vtp_firingId: "1766321_915_463",
          tag_id: 1067,
        },
        {
          function: "__tg",
          vtp_isListeningTag: true,
          vtp_firingId: "1766321_915_831",
          tag_id: 1069,
        },
        {
          function: "__tg",
          vtp_triggerIds: ["list", "1766321_917_463", "1766321_917_836"],
          vtp_uniqueTriggerId: "1766321_917",
          tag_id: 1070,
        },
        {
          function: "__tg",
          vtp_isListeningTag: true,
          vtp_firingId: "1766321_917_463",
          tag_id: 1071,
        },
        {
          function: "__tg",
          vtp_isListeningTag: true,
          vtp_firingId: "1766321_917_836",
          tag_id: 1073,
        },
        {
          function: "__lcl",
          vtp_waitForTags: false,
          vtp_checkValidation: false,
          vtp_waitForTagsTimeout: "2000",
          vtp_uniqueTriggerId: "1766321_918",
          tag_id: 1074,
        },
        {
          function: "__html",
          metadata: ["map"],
          consent: ["list", "ad_storage"],
          once_per_event: true,
          vtp_html: [
            "template",
            '\u003Cscript type="text/javascript"\u003Efor(var product_activities=',
            ["escape", ["macro", 76], 8, 16],
            ",productlist=",
            ["escape", ["macro", 22], 8, 16],
            ',i=0;i\u003Cproductlist.length;i++){var prod=productlist[i],activityid=prod.sku in product_activities?product_activities[prod.sku]:!1;console.log("Activity Id",activityid);if(activityid){var ebRev=parseFloat(prod.price);ebRev=ebRev.toFixed(2);var ebOrderID=',
            ["escape", ["macro", 3], 8, 16],
            ',ebProductID=prod.sku,ebProductInfo=prod.name.replace(/\\s+/g,"-"),ebQuantity=prod.quantity,ebRand=Math.random()+"";ebRand*=1E6;window.console\u0026\u0026(console.log("ACTIVITY ID:"+\nactivityid),console.log(activityid),console.log(ebRev),console.log("Order Id: "+ebOrderID),console.log("ebProductID: "+ebProductID),console.log("ebProductInfo: "+ebProductInfo),console.log("ebQuantity: "+ebQuantity),console.log(ebRand));console.log(\'\\x3cscript src\\x3d"HTTPS://bs.serving-sys.com/Serving/ActivityServer.bs?cn\\x3das\\x26amp;ActivityID\\x3d\'+activityid+"\\x26amp;rnd\\x3d"+ebRand+"\\x26amp;Value\\x3d"+ebRev+"\\x26amp;OrderID\\x3d"+ebOrderID+"\\x26amp;ProductID\\x3d"+ebProductID+"\\x26amp;ProductInfo\\x3d"+\nebProductInfo+"\\x26amp;Quantity\\x3d"+ebQuantity+\'"\\x3e\\x3c/script\\x3e\');document.write(\'\\x3cscript src\\x3d"HTTPS://bs.serving-sys.com/Serving/ActivityServer.bs?cn\\x3das\\x26amp;ActivityID\\x3d\'+activityid+"\\x26amp;rnd\\x3d"+ebRand+"\\x26amp;Value\\x3d"+ebRev+"\\x26amp;OrderID\\x3d"+ebOrderID+"\\x26amp;ProductID\\x3d"+ebProductID+"\\x26amp;ProductInfo\\x3d"+ebProductInfo+"\\x26amp;Quantity\\x3d"+ebQuantity+\'"\\x3e\\x3c/script\\x3e\')}};\u003C/script\u003E',
          ],
          vtp_supportDocumentWrite: true,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          vtp_usePostscribe: true,
          tag_id: 2,
        },
        {
          function: "__html",
          metadata: ["map"],
          consent: ["list", "ad_storage"],
          once_per_load: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","173778843305598");fbq("track","PageView");\u003C/script\u003E\n\u003Cnoscript\u003E\u003Cimg height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=173778843305598\u0026amp;ev=PageView\u0026amp;noscript=1"\u003E\u003C/noscript\u003E\n\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 39,
        },
        {
          function: "__html",
          metadata: ["map"],
          consent: ["list", "ad_storage"],
          once_per_event: true,
          vtp_html: [
            "template",
            '\u003Cscript type="text/gtmscript"\u003Efbq("trackSingle","173778843305598","ticket_purchase",{currency:"GBP",value:"',
            ["escape", ["macro", 4], 7],
            '"});\u003C/script\u003E',
          ],
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 40,
        },
        {
          function: "__html",
          metadata: ["map"],
          consent: ["list", "ad_storage"],
          once_per_load: true,
          vtp_html: [
            "template",
            '\u003Cscript type="text/gtmscript"\u003Efbq("trackSingle","173778843305598","shop_purchase",{currency:"GBP",value:"',
            ["escape", ["macro", 8], 7],
            '"});\u003C/script\u003E',
          ],
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 41,
        },
        {
          function: "__html",
          metadata: ["map"],
          consent: ["list", "ad_storage", "analytics_storage"],
          once_per_event: true,
          vtp_html:
            '\n  \u003Cscript type="text/gtmscript"\u003Evar _qevents=_qevents||[];(function(){var a=document.createElement("script");a.src=("https:"==document.location.protocol?"https://secure":"http://edge")+".quantserve.com/quant.js";a.async=!0;a.type="text/javascript";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)})();_qevents.push({qacct:"p-TfRCf16umSdsZ"});\u003C/script\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 47,
        },
        {
          function: "__html",
          metadata: ["map"],
          consent: ["list", "ad_storage"],
          once_per_load: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003E(function(){var a=document.createElement("script");a.type="text/javascript";a.async=!0;a.src="//platform2.cloud-iq.com/cartrecovery/store.js?app_id\\x3d918";var b=document.getElementsByTagName("head")[0];b.appendChild(a)})();\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 51,
        },
        {
          function: "__html",
          metadata: ["map"],
          consent: ["list", "analytics_storage"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003E(function(c,a,d,b,e){c[b]=c[b]||[];c=a.getElementsByTagName(d)[0];a=a.createElement(d);b="dataLayer"!=b?"\\x26r\\x3d"+b:"";a.async=!0;a.src="//smct.co/tm/?t\\x3d"+e+b;c.parentNode.insertBefore(a,c)})(window,document,"script","dataLayer","britishmuseumshoponline.org");\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 52,
        },
        {
          function: "__html",
          metadata: ["map"],
          consent: ["list", "ad_storage"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript" data-gtmsrc="https://tags.affiliatefuture.com/6693.js"\u003E\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 54,
        },
        {
          function: "__html",
          metadata: ["map"],
          consent: ["list", "ad_storage"],
          setup_tags: ["list", ["tag", 253, 0]],
          once_per_event: true,
          vtp_html: [
            "template",
            '\u003Cscript type="text/gtmscript"\u003Efbq("trackSingle","173778843305598","Purchase",{currency:"GBP",value:"',
            ["escape", ["macro", 8], 7],
            '"});\u003C/script\u003E\n',
          ],
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 55,
        },
        {
          function: "__html",
          metadata: ["map"],
          consent: ["list", "ad_storage"],
          setup_tags: ["list", ["tag", 253, 0]],
          once_per_event: true,
          vtp_html: [
            "template",
            '\u003Cscript type="text/gtmscript"\u003Efbq("trackSingle","173778843305598","InitiateCheckout",{currency:"GBP",value:"',
            ["escape", ["macro", 8], 7],
            '"});\u003C/script\u003E\n\n',
          ],
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 56,
        },
        {
          function: "__html",
          metadata: ["map"],
          consent: ["list", "ad_storage"],
          setup_tags: ["list", ["tag", 253, 0]],
          once_per_event: true,
          vtp_html: [
            "template",
            '\u003Cscript type="text/gtmscript"\u003Efbq("trackSingle","173778843305598","ViewContent",{currency:"GBP",content_ids:"',
            ["escape", ["macro", 13], 7],
            '",content_category:"',
            ["escape", ["macro", 12], 7],
            '",value:"',
            ["escape", ["macro", 8], 7],
            '"});\u003C/script\u003E\n\n',
          ],
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 57,
        },
        {
          function: "__html",
          metadata: ["map"],
          consent: ["list", "ad_storage"],
          once_per_load: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","173778843305598");fbq("track","PageView");\u003C/script\u003E\n\u003Cnoscript\u003E\u003Cimg height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=173778843305598\u0026amp;ev=PageView\u0026amp;noscript=1"\u003E\u003C/noscript\u003E\n\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 58,
        },
        {
          function: "__html",
          metadata: ["map"],
          consent: ["list", "ad_storage"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003E(function(){var a=document.createElement("script");a.type="text/javascript";a.async=!0;a.src="//platform2.cloud-iq.com/cartrecovery/store.js?app_id\\x3d4156";var b=document.getElementsByTagName("head")[0];b.appendChild(a)})();\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 86,
        },
        {
          function: "__html",
          metadata: ["map"],
          consent: ["list", "ad_storage"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/javascript"\u003E(function(c,a,b){b=b||{};b.id=c;versaTagObj={$:[],onready:function(e){this.$.push(e)}};var d=a.getElementsByTagName("script")[0];a=a.createElement("script");a.options=b;a.async=!0;a.src="https://secure-ds.serving-sys.com/SemiCachedScripts/ebOneTag.js?id\\x3d"+c;a.options=b;d.parentNode.insertBefore(a,d)})("258",document,{dataLayer:"dataLayer"});\u003C/script\u003E',
          vtp_supportDocumentWrite: true,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          vtp_usePostscribe: true,
          tag_id: 228,
        },
        {
          function: "__html",
          metadata: ["map"],
          consent: ["list", "ad_storage"],
          once_per_event: true,
          vtp_html: [
            "template",
            '\u003Cscript type="text/javascript"\u003EversaTagObj.onready(function(){for(var e=["Nero","Becket"],g=',
            ["escape", ["macro", 22], 8, 16],
            ",f=0;f\u003Cg.length;f++)for(var a=g[f],h=a.category,c=0;c\u003Ce.length;c++){var b=e[c];console.log(h);console.log(e[c]);if(h.includes(b)){var d=parseFloat(a.price);d.toFixed(2);var k=",
            ["escape", ["macro", 3], 8, 16],
            ',l=a.sku,m=a.name.replace(/\\s+/g,"-"),n=a.quantity;d=a.price;b="https://tickets.britishmuseum.org/purchase/"+b;versaTagObj.clearActivityParam();console.log("OrderID: "+k+" ProductID: "+l," ProductInfo: "+m+" Quantity: "+n+" Value: "+\nd+" URL: "+b);versaTagObj.setActivityParam("OrderID",k);versaTagObj.setActivityParam("ProductID",l);versaTagObj.setActivityParam("ProductInfo",m);versaTagObj.setActivityParam("Quantity",n);versaTagObj.setActivityParam("Value",d);versaTagObj.generateRequest(b)}}});\u003C/script\u003E',
          ],
          vtp_supportDocumentWrite: true,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          vtp_usePostscribe: true,
          tag_id: 326,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003E(function(){var b=document.querySelector("select#edit-department.form-select.required"),c=function(a){a=a.target.options[a.target.selectedIndex];window.dataLayer.push({event:"selectionMade",selectedElement:a})};b.addEventListener("change",c,!0)})();\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 371,
        },
        {
          function: "__html",
          metadata: ["map"],
          consent: ["list", "ad_storage"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(d,g,e){d.TiktokAnalyticsObject=e;var a=d[e]=d[e]||[];a.methods="page track identify instances debug on off once ready alias group enableCookie disableCookie".split(" ");a.setAndDefer=function(b,c){b[c]=function(){b.push([c].concat(Array.prototype.slice.call(arguments,0)))}};for(d=0;d\u003Ca.methods.length;d++)a.setAndDefer(a,a.methods[d]);a.instance=function(b){b=a._i[b]||[];for(var c=0;c\u003Ca.methods.length;c++)a.setAndDefer(b,a.methods[c]);return b};a.load=function(b,c){var f="https://analytics.tiktok.com/i18n/pixel/events.js";\na._i=a._i||{};a._i[b]=[];a._i[b]._u=f;a._t=a._t||{};a._t[b]=+new Date;a._o=a._o||{};a._o[b]=c||{};c=document.createElement("script");c.type="text/javascript";c.async=!0;c.src=f+"?sdkid\\x3d"+b+"\\x26lib\\x3d"+e;b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(c,b)};a.load("C365GGVG09F9P5I8U7F0");a.page()}(window,document,"ttq");\u003C/script\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 398,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003Evar directDebitAmount=parseFloat(document.getElementsByClassName("tag-ap-dd-review-list-field-value")[0].innerText.replace(/\\u00a3/g,""));\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 702,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html: [
            "template",
            '\u003Cscript type="text/gtmscript"\u003Evar confirmationSent=!1;function isRef(a){return void 0===a||void 0===a.textContent?!1:a.textContent.startsWith("Reference number")}\nfunction isConfirmationPage(){if(!confirmationSent\u0026\u0026"Confirmation"==document.getElementsByTagName("h1")[0].textContent){confirmationSent=!0;console.log("Send Reference");var a=Array.from(document.querySelectorAll("p")).find(isRef);void 0===a?a=void 0:(a=a.textContent.split(": "),a=2===a.length?a[1]:void 0);void 0!==a\u0026\u0026(console.log(" __transaction_id: "+a),console.log(" __amount: "+directDebitAmount),window.dataLayer.push({event:"purchase",ecommerce:{transaction_id:a,currency:"GBP",value:directDebitAmount,\nitems:[{item_category:"Membership Direct Debit",item_name:"',
            ["escape", ["macro", 77], 7],
            '",item_id:"',
            ["escape", ["macro", 78], 7],
            '",quantity:"1",price:directDebitAmount}]}}))}}setInterval(isConfirmationPage,1E3);\u003C/script\u003E',
          ],
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 704,
        },
        {
          function: "__html",
          metadata: ["map"],
          consent: ["list", "analytics_storage"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003Ewindow.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};hj("event","click_search_result");\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 779,
        },
        {
          function: "__html",
          metadata: ["map"],
          consent: ["list", "analytics_storage"],
          once_per_event: true,
          vtp_html:
            '\n\u003Cscript data-gtmsrc="https://w.soundcloud.com/player/api.js" type="text/gtmscript"\u003E\u003C/script\u003E\n\n\u003Cscript type="text/gtmscript"\u003E(function(){try{var u=function(e){var b,f,l,m,g,a,c,k,d=SC.Widget(e),n=0;d.bind(SC.Widget.Events.READY,function(){d.getCurrentSound(function(h){k=h.title});d.bind(SC.Widget.Events.PLAY,function(){1E3\u003CDate.now()-n\u0026\u0026(0===n?(a="start",c="0",p(a,c,k)):a="play",n=Date.now())});d.bind(SC.Widget.Events.PAUSE,function(h){b=Math.round(100*h.relativePosition);100!==b\u0026\u0026(a="pause")});d.bind(SC.Widget.Events.PLAY_PROGRESS,function(h){g=!1;b=Math.round(100*h.relativePosition);25!==b||f||(a="progress",c="25",g=\nf=!0);50!==b||l||(a="progress",c="50",g=l=!0);75!==b||m||(a="progress",c="75",g=m=!0);g\u0026\u0026p(a,c,k)});d.bind(SC.Widget.Events.FINISH,function(){a="complete";c="100";f=l=m=!1;p(a,c,k)})})},p=function(e,b,f){window.dataLayer.push({event:"scEvent",audio_action:e,audio_percent:b,audio_title:f})},r,t=document.querySelectorAll(\'iframe[src*\\x3d"api.soundcloud.com"]\');var q=0;for(r=t.length;q\u003Cr;q+=1)u(t[q])}catch(e){console.log("Error with SoundCloud API: "+e.message)}})();\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 792,
        },
        {
          function: "__html",
          metadata: ["map"],
          consent: ["list", "analytics_storage"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript data-gtmsrc="https://www.youtube.com/iframe_api" type="text/gtmscript"\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 809,
        },
        {
          function: "__html",
          metadata: ["map"],
          once_per_event: true,
          vtp_html:
            '\u003Cscript type="text/gtmscript"\u003Ewindow.addEventListener("CookiebotOnDialogDisplay",function(){["Features","Purposes","Vendors"].forEach(function(a){window.CookieConsent.dialog["IABDeselect"+a].call()})});\u003C/script\u003E',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 866,
        },
        {
          function: "__html",
          metadata: ["map"],
          consent: ["list", "ad_storage"],
          once_per_load: true,
          vtp_html:
            '\n\u003Cscript data-gtmsrc="https://consentag.eu/public/3.1.1/consenTag.js" type="text/gtmscript"\u003E\u003C/script\u003E\n\u003Cscript type="text/gtmscript"\u003EconsenTag.init({containerId:"81553564",silentMode:!0},!0);\u003C/script\u003E\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 886,
        },
        {
          function: "__html",
          metadata: ["map"],
          consent: ["list", "ad_storage"],
          once_per_event: true,
          vtp_html: [
            "template",
            '\n\u003Cscript type="text/gtmscript" data-gtmsrc="https://i.ctnsnet.com/int/integration?pixel=81679118\u0026amp;nid=304041\u0026amp;cont=s\u0026amp;gdpr_pd={GDPR_PD}\u0026amp;gdpr_consent={GDPR_CONSENT_85}\u0026amp;orderID=',
            ["escape", ["macro", 9], 12],
            "\u0026amp;revenue=",
            ["escape", ["macro", 8], 12],
            '" async="true"\u003E\u003C/script\u003E\n',
          ],
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 887,
        },
        {
          function: "__html",
          metadata: ["map"],
          consent: ["list", "ad_storage"],
          once_per_event: true,
          vtp_html: [
            "template",
            '\n\u003Cscript type="text/gtmscript" data-gtmsrc="https://i.ctnsnet.com/int/integration?pixel=81911733\u0026amp;nid=304041\u0026amp;cont=s\u0026amp;gdpr_pd={GDPR_PD}\u0026amp;gdpr_consent={GDPR_CONSENT_85}\u0026amp;orderID=',
            ["escape", ["macro", 3], 12],
            "\u0026amp;revenue=",
            ["escape", ["macro", 4], 12],
            '" async="true"\u003E\u003C/script\u003E\n',
          ],
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 888,
        },
        {
          function: "__html",
          metadata: ["map"],
          consent: ["list", "ad_storage"],
          once_per_load: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","1004394012953838");fbq("track","PageView");\u003C/script\u003E\n\u003Cnoscript\u003E\u003Cimg height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1004394012953838\u0026amp;ev=PageView\u0026amp;noscript=1"\u003E\u003C/noscript\u003E\n\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 889,
        },
        {
          function: "__html",
          metadata: ["map"],
          consent: ["list", "ad_storage"],
          once_per_load: true,
          vtp_html:
            '\n\u003Cscript type="text/gtmscript"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","1004394012953838");fbq("track","PageView");\u003C/script\u003E\n\u003Cnoscript\u003E\u003Cimg height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1004394012953838\u0026amp;ev=PageView\u0026amp;noscript=1"\u003E\u003C/noscript\u003E\n\n',
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 890,
        },
        {
          function: "__html",
          metadata: ["map"],
          consent: ["list", "ad_storage"],
          once_per_event: true,
          vtp_html: [
            "template",
            '\u003Cscript type="text/gtmscript"\u003Efbq("trackSingle","1004394012953838","ticket_purchase",{currency:"GBP",value:"',
            ["escape", ["macro", 4], 7],
            '"});\u003C/script\u003E',
          ],
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 891,
        },
        {
          function: "__html",
          metadata: ["map"],
          consent: ["list", "ad_storage"],
          once_per_load: true,
          vtp_html: [
            "template",
            '\u003Cscript type="text/gtmscript"\u003Efbq("trackSingle","1004394012953838","shop_purchase",{currency:"GBP",value:"',
            ["escape", ["macro", 8], 7],
            '"});\u003C/script\u003E',
          ],
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 892,
        },
        {
          function: "__html",
          metadata: ["map"],
          consent: ["list", "ad_storage"],
          setup_tags: ["list", ["tag", 253, 0]],
          once_per_event: true,
          vtp_html: [
            "template",
            '\u003Cscript type="text/gtmscript"\u003Efbq("trackSingle","1004394012953838","InitiateCheckout",{currency:"GBP",value:"',
            ["escape", ["macro", 8], 7],
            '"});\u003C/script\u003E\n\n',
          ],
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 893,
        },
        {
          function: "__html",
          metadata: ["map"],
          consent: ["list", "ad_storage"],
          setup_tags: ["list", ["tag", 253, 0]],
          once_per_event: true,
          vtp_html: [
            "template",
            '\u003Cscript type="text/gtmscript"\u003Efbq("trackSingle","1004394012953838","Purchase",{currency:"GBP",value:"',
            ["escape", ["macro", 8], 7],
            '"});\u003C/script\u003E\n',
          ],
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 894,
        },
        {
          function: "__html",
          metadata: ["map"],
          consent: ["list", "ad_storage"],
          setup_tags: ["list", ["tag", 253, 0]],
          once_per_event: true,
          vtp_html: [
            "template",
            '\u003Cscript type="text/gtmscript"\u003Efbq("trackSingle","1004394012953838","ViewContent",{currency:"GBP",content_ids:["',
            ["escape", ["macro", 13], 7],
            '"],content_category:["',
            ["escape", ["macro", 12], 7],
            '"],value:"',
            ["escape", ["macro", 8], 7],
            '"});\u003C/script\u003E\n\n',
          ],
          vtp_supportDocumentWrite: false,
          vtp_enableIframeMode: false,
          vtp_enableEditJsMacroBehavior: false,
          tag_id: 895,
        },
      ],
      predicates: [
        { function: "_eq", arg0: ["macro", 0], arg1: "cookie_consent_update" },
        {
          function: "_re",
          arg0: ["macro", 1],
          arg1: "(.*numiko\\.com|beta\\.britishmuseum|maximweb\\.net|(feature-cookiebot-7ux4nsi|sprint-bm-blogs-rtd3b3q)-n6yu3kclswro2\\.eu-2\\.platformsh\\.site|brtm-tnew-test\\.tnhs\\.cloud)",
          ignore_case: true,
        },
        { function: "_re", arg0: ["macro", 0], arg1: ".*" },
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.triggerGroup" },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)1766321_654($|,)))",
        },
        {
          function: "_cn",
          arg0: ["macro", 1],
          arg1: "britishmuseumshoponline.org",
        },
        {
          function: "_cn",
          arg0: ["macro", 6],
          arg1: "/checkout/onepage/success/",
        },
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.js" },
        {
          function: "_re",
          arg0: ["macro", 1],
          arg1: ".*numiko.com|beta\\.britishmuseum",
          ignore_case: true,
        },
        {
          function: "_eq",
          arg0: ["macro", 1],
          arg1: "islamicworld.britishmuseum.org",
        },
        {
          function: "_cn",
          arg0: ["macro", 6],
          arg1: "/exhibitions/arctic-culture-and-climate/360-tour",
        },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)1766321_512($|,)))",
        },
        { function: "_cn", arg0: ["macro", 6], arg1: "/visit/family-visits/" },
        {
          function: "_re",
          arg0: ["macro", 29],
          arg1: "Find|Perform|Discuss|Look|Pose",
          ignore_case: true,
        },
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.elementVisibility" },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)1766321_306($|,)))",
        },
        {
          function: "_re",
          arg0: ["macro", 29],
          arg1: "discuss.*",
          ignore_case: true,
        },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)1766321_333($|,)))",
        },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)1766321_486($|,)))",
        },
        {
          function: "_cn",
          arg0: ["macro", 1],
          arg1: "britishmuseumshoponline",
        },
        {
          function: "_re",
          arg0: ["macro", 18],
          arg1: "stories",
          ignore_case: true,
        },
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.scrollDepth" },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)1766321_367($|,)))",
        },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)1766321_299($|,)))",
        },
        { function: "_eq", arg0: ["macro", 6], arg1: "/visit" },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)1766321_365($|,)))",
        },
        {
          function: "_re",
          arg0: ["macro", 17],
          arg1: "^.*britishmuseum\\.org\\/blog\\/.*$",
          ignore_case: true,
        },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)1766321_564($|,)))",
        },
        {
          function: "_re",
          arg0: ["macro", 17],
          arg1: "^.*britishmuseum\\.org\\/exhibitions\\/.*$",
          ignore_case: true,
        },
        { function: "_eq", arg0: ["macro", 18], arg1: "exhibitions" },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)1766321_818($|,)))",
        },
        { function: "_cn", arg0: ["macro", 18], arg1: "stories" },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)1766321_173($|,)))",
        },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)1766321_566($|,)))",
        },
        { function: "_cn", arg0: ["macro", 32], arg1: "checkbox-toggle-input" },
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.click" },
        { function: "_cn", arg0: ["macro", 6], arg1: "/collection/search" },
        { function: "_cn", arg0: ["macro", 36], arg1: "#sprite-icon-grid" },
        {
          function: "_cn",
          arg0: ["macro", 37],
          arg1: "svg.icon.icon--list \u003E use",
        },
        {
          function: "_cn",
          arg0: ["macro", 32],
          arg1: "button col-facet-filter__toggle-button",
        },
        { function: "_cn", arg0: ["macro", 29], arg1: "Show list view" },
        { function: "_cn", arg0: ["macro", 32], arg1: "icon icon--list" },
        { function: "_cn", arg0: ["macro", 29], arg1: "Show grid view" },
        { function: "_cn", arg0: ["macro", 32], arg1: "icon icon--grid" },
        {
          function: "_css",
          arg0: ["macro", 37],
          arg1: "button[data-search-facet]",
        },
        { function: "_cn", arg0: ["macro", 39], arg1: "true" },
        { function: "_eq", arg0: ["macro", 0], arg1: "exh when filter" },
        { function: "_eq", arg0: ["macro", 0], arg1: "exh who filter" },
        { function: "_eq", arg0: ["macro", 0], arg1: "exh what filter" },
        { function: "_eq", arg0: ["macro", 39], arg1: "true" },
        { function: "_eq", arg0: ["macro", 0], arg1: "exhibitions filters" },
        { function: "_eq", arg0: ["macro", 43], arg1: "adestra_footer_form" },
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.formSubmit" },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)1766321_172($|,)))",
        },
        {
          function: "_cn",
          arg0: ["macro", 6],
          arg1: "/k/Dersim-Museum/sign_up_form_from_website_box",
        },
        {
          function: "_cn",
          arg0: ["macro", 1],
          arg1: "emails.britishmuseum.org",
        },
        { function: "_cn", arg0: ["macro", 44], arg1: "amf-input-families" },
        {
          function: "_cn",
          arg0: ["macro", 45],
          arg1: "emails.britishmuseum.org",
        },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)1766321_388($|,)))",
        },
        { function: "_cn", arg0: ["macro", 44], arg1: "amf-input-newsletter" },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)1766321_384($|,)))",
        },
        { function: "_cn", arg0: ["macro", 44], arg1: "amf-input-events" },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)1766321_390($|,)))",
        },
        { function: "_cn", arg0: ["macro", 44], arg1: "amf-input-schools" },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)1766321_389($|,)))",
        },
        { function: "_cn", arg0: ["macro", 44], arg1: "amf-input-shop" },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)1766321_386($|,)))",
        },
        {
          function: "_re",
          arg0: ["macro", 46],
          arg1: "exhibition-hero-cta|exhibition-cta",
          ignore_case: true,
        },
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.linkClick" },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)1766321_408($|,)))",
        },
        {
          function: "_re",
          arg0: ["macro", 46],
          arg1: "^cta$|^homepage-hero-button$",
          ignore_case: true,
        },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)1766321_404($|,)))",
        },
        {
          function: "_cn",
          arg0: ["macro", 36],
          arg1: "/exhibitions/arctic-culture-and-climate/360-tour",
        },
        { function: "_cn", arg0: ["macro", 32], arg1: "button" },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)1766321_310($|,)))",
        },
        { function: "_cn", arg0: ["macro", 36], arg1: "mailto:" },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)1766321_138($|,)))",
        },
        { function: "_cn", arg0: ["macro", 36], arg1: "tel:" },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)1766321_139($|,)))",
        },
        { function: "_cn", arg0: ["macro", 32], arg1: "social-share__link" },
        {
          function: "_re",
          arg0: ["macro", 36],
          arg1: "(twitter|facebook)",
          ignore_case: true,
        },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)1766321_556($|,)))",
        },
        {
          function: "_re",
          arg0: ["macro", 36],
          arg1: "(facebook\\.com\\/share|twitter\\.com\\/intent\\/tweet)",
          ignore_case: true,
        },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)1766321_557($|,)))",
        },
        { function: "_cn", arg0: ["macro", 32], arg1: "facet-item__value" },
        {
          function: "_re",
          arg0: ["macro", 17],
          arg1: "^.*britishmuseum\\.org\\/blog.*$",
          ignore_case: true,
        },
        {
          function: "_re",
          arg0: ["macro", 29],
          arg1: "^.*(book|buy|order).*$",
          ignore_case: true,
        },
        {
          function: "_re",
          arg0: ["macro", 36],
          arg1: "^.*(\\/(exhibitions|events)\\/|www\\.britishmuseumshoponline\\.org).*$",
          ignore_case: true,
        },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)1766321_571($|,)))",
        },
        {
          function: "_re",
          arg0: ["macro", 17],
          arg1: "^.*britishmuseum\\.org\\/blog\\/.*$",
        },
        {
          function: "_re",
          arg0: ["macro", 36],
          arg1: "^.*(\\/(exhibitions|events)\\/|www\\.britishmuseumshoponline\\.org).*$",
        },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)1766321_572($|,)))",
        },
        {
          function: "_css",
          arg0: ["macro", 37],
          arg1: "div.carousel--gallery__container button.carousel--gallery__button *",
        },
        {
          function: "_css",
          arg0: ["macro", 37],
          arg1: "button.pswp__button--close",
        },
        {
          function: "_css",
          arg0: ["macro", 37],
          arg1: "div.carousel--gallery__container button.carousel__nav--prev[aria-disabled=false] use",
        },
        {
          function: "_css",
          arg0: ["macro", 37],
          arg1: "div.carousel--gallery__container button.carousel__nav--next[aria-disabled=false] use",
        },
        {
          function: "_css",
          arg0: ["macro", 37],
          arg1: "button.pswp__button--arrow--left",
        },
        {
          function: "_css",
          arg0: ["macro", 37],
          arg1: "button.pswp__button--arrow--right",
        },
        {
          function: "_css",
          arg0: ["macro", 37],
          arg1: "button.pswp__button--zoom",
        },
        { function: "_css", arg0: ["macro", 37], arg1: "img.pswp__img" },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)1766321_615($|,)))",
        },
        {
          function: "_eq",
          arg0: ["macro", 32],
          arg1: "button button--chevron external-link",
        },
        { function: "_cn", arg0: ["macro", 36], arg1: "apps.apple.com" },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)1766321_618($|,)))",
        },
        { function: "_cn", arg0: ["macro", 36], arg1: "play.google.com" },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)1766321_619($|,)))",
        },
        {
          function: "_eq",
          arg0: ["macro", 1],
          arg1: "ticketing.britishmuseum.org",
        },
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.init_consent" },
        {
          function: "_cn",
          arg0: ["macro", 36],
          arg1: "ticketing.britishmuseum.org",
        },
        { function: "_eq", arg0: ["macro", 6], arg1: "/" },
        {
          function: "_eq",
          arg0: ["macro", 32],
          arg1: "section--intro__booking-link external-link",
        },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)1766321_423($|,)))",
        },
        {
          function: "_css",
          arg0: ["macro", 37],
          arg1: "button[data-tracking=exhibition-hero-cta] *,button[data-tracking=exhibition-hero-cta]",
        },
        {
          function: "_re",
          arg0: ["macro", 17],
          arg1: "^.*search\\?search_api_fulltext=.*$",
          ignore_case: true,
        },
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.historyChange" },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)1766321_681($|,)))",
        },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)1766321_684($|,)))",
        },
        { function: "_cn", arg0: ["macro", 1], arg1: "edirectdebit.co.uk" },
        {
          function: "_cn",
          arg0: ["macro", 36],
          arg1: "britishmuseumshoponline.org",
        },
        {
          function: "_cn",
          arg0: ["macro", 17],
          arg1: "britishmuseumshoponline.org",
        },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)1766321_175($|,)))",
        },
        { function: "_cn", arg0: ["macro", 49], arg1: "/membership" },
        { function: "_cn", arg0: ["macro", 17], arg1: "/membership" },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)1766321_240($|,)))",
        },
        {
          function: "_re",
          arg0: ["macro", 48],
          arg1: "ticket(s|ing).britishmuseum.org",
          ignore_case: true,
        },
        {
          function: "_re",
          arg0: ["macro", 17],
          arg1: "ticket(s|ing).britishmuseum.org",
          ignore_case: true,
        },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)1766321_241($|,)))",
        },
        {
          function: "_css",
          arg0: ["macro", 37],
          arg1: ".accordion__button.js-accordion-btn, .accordion__button.js-accordion-btn *",
        },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)1766321_176($|,)))",
        },
        {
          function: "_re",
          arg0: ["macro", 6],
          arg1: "^\\/membership\\/(individual|under-26|give-as-a-gift|renew(-gift-membership)?).*$",
          ignore_case: true,
        },
        {
          function: "_re",
          arg0: ["macro", 29],
          arg1: "book now|become a member|already a member",
          ignore_case: true,
        },
        { function: "_cn", arg0: ["macro", 58], arg1: "true" },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)1766321_179($|,)))",
        },
        { function: "_cn", arg0: ["macro", 29], arg1: "Close" },
        { function: "_eq", arg0: ["macro", 0], arg1: "purchase" },
        { function: "_eq", arg0: ["macro", 50], arg1: "continue" },
        {
          function: "_eq",
          arg0: ["macro", 1],
          arg1: "secure.edirectdebit.co.uk",
        },
        { function: "_eq", arg0: ["macro", 60], arg1: "0" },
        {
          function: "_cn",
          arg0: ["macro", 36],
          arg1: "emails.britishmuseum.org/k/Dersim-Museum/sign_up_form",
        },
        {
          function: "_re",
          arg0: ["macro", 29],
          arg1: "sign up for updates|sign up to our emails",
          ignore_case: true,
        },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)1766321_224($|,)))",
        },
        {
          function: "_eq",
          arg0: ["macro", 45],
          arg1: "http://localhost:3000/about-us/contact-us",
        },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)1766321_369($|,)))",
        },
        { function: "_eq", arg0: ["macro", 6], arg1: "/search" },
        { function: "_css", arg0: ["macro", 37], arg1: ".facet-item *" },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)1766321_734($|,)))",
        },
        {
          function: "_css",
          arg0: ["macro", 37],
          arg1: '.facet-item[aria-current="true"] *',
        },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)1766321_741($|,)))",
        },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)1766321_737($|,)))",
        },
        {
          function: "_css",
          arg0: ["macro", 37],
          arg1: ".promoted-content__links-wrapper *",
        },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)1766321_738($|,)))",
        },
        {
          function: "_re",
          arg0: ["macro", 43],
          arg1: "^webform\\-submission\\-((((cracherode|brooke\\-sewell|godman)\\-circle|(ottley|vollard)\\-group)|cammea)\\-enquiry|patrons\\-sign\\-up\\-form)\\-paragraph\\-[0-9]{5}\\-add\\-form$",
          ignore_case: true,
        },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)1766321_785($|,)))",
        },
        { function: "_eq", arg0: ["macro", 0], arg1: "scEvent" },
        {
          function: "_eq",
          arg0: ["macro", 33],
          arg1: "Checkout_EmailMarketing_Checkbox",
        },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)1766321_915($|,)))",
        },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)1766321_917($|,)))",
        },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)1766321_484($|,)))",
        },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)1766321_483($|,)))",
        },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)1766321_912($|,)))",
        },
        { function: "_eq", arg0: ["macro", 0], arg1: "set_user_properties" },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)1766321_914($|,)))",
        },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)1766321_485($|,)))",
        },
        { function: "_eq", arg0: ["macro", 0], arg1: "select_promotion" },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)1766321_913($|,)))",
        },
        { function: "_cn", arg0: ["macro", 46], arg1: "shop-slice" },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)1766321_400($|,)))",
        },
        {
          function: "_css",
          arg0: ["macro", 37],
          arg1: "#jump-link-button, #jump-link-button *",
        },
        {
          function: "_css",
          arg0: ["macro", 37],
          arg1: "#jump-link-button.-is-active, #jump-link-button.-is-active *",
        },
        { function: "_css", arg0: ["macro", 37], arg1: ".jump-links__link" },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)1766321_879($|,)))",
        },
        {
          function: "_css",
          arg0: ["macro", 37],
          arg1: ".header__menu-container a",
        },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)1766321_896($|,)))",
        },
        { function: "_sw", arg0: ["macro", 6], arg1: "/collection/image" },
        {
          function: "_css",
          arg0: ["macro", 37],
          arg1: ".use-image-container__data .button, .use-image-container__data .button *",
        },
        {
          function: "_sw",
          arg0: ["macro", 43],
          arg1: "webform-submission-request-new-photography",
        },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)1766321_906($|,)))",
        },
        {
          function: "_sw",
          arg0: ["macro", 43],
          arg1: "webform-submission-contact-bm-images",
        },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)1766321_909($|,)))",
        },
        {
          function: "_css",
          arg0: ["macro", 37],
          arg1: ".footer-pre__top-link",
        },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)1766321_918($|,)))",
        },
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.load" },
        { function: "_lt", arg0: ["macro", 75], arg1: "0" },
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.dom" },
        { function: "_eq", arg0: ["macro", 0], arg1: "gtm.timer" },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)1766321_303($|,)))",
        },
        { function: "_re", arg0: ["macro", 6], arg1: "visit/family-visits.*" },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)1766321_304($|,)))",
        },
        { function: "_eq", arg0: ["macro", 0], arg1: "view_item" },
        { function: "_eq", arg0: ["macro", 0], arg1: "begin_checkout" },
        { function: "_eq", arg0: ["macro", 0], arg1: "remove_from_cart" },
        {
          function: "_re",
          arg0: ["macro", 0],
          arg1: "^(Donation|Event|Membership)$",
        },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)1766321_575($|,)))",
        },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)1766321_576($|,)))",
        },
        { function: "_re", arg0: ["macro", 6], arg1: "^/cart/receipt/.*$" },
        {
          function: "_re",
          arg0: ["macro", 28],
          arg1: ".*china.*",
          ignore_case: true,
        },
        {
          function: "_re",
          arg0: ["macro", 28],
          arg1: "^.*membership.*$",
          ignore_case: true,
        },
        { function: "_eq", arg0: ["macro", 0], arg1: "Membership" },
        { function: "_cn", arg0: ["macro", 6], arg1: "/support-us/patrons/" },
        { function: "_cn", arg0: ["macro", 1], arg1: "britishmuseum.org" },
        {
          function: "_eq",
          arg0: ["macro", 6],
          arg1: "/collection/collection-online/request-new-photography",
        },
        {
          function: "_eq",
          arg0: ["macro", 6],
          arg1: "/collection/collection-online/contact-bm-images",
        },
        { function: "_eq", arg0: ["macro", 0], arg1: "view_item_list" },
        { function: "_eq", arg0: ["macro", 0], arg1: "add_to_cart" },
        { function: "_eq", arg0: ["macro", 0], arg1: "add_shipping_info" },
        { function: "_eq", arg0: ["macro", 0], arg1: "add_payment_info" },
        { function: "_eq", arg0: ["macro", 0], arg1: "view_cart" },
        { function: "_cn", arg0: ["macro", 6], arg1: "/membership" },
        { function: "_cn", arg0: ["macro", 6], arg1: "/about-us/contact-us" },
        {
          function: "_cn",
          arg0: ["macro", 1],
          arg1: "secure.edirectdebit.co.uk",
        },
        {
          function: "_re",
          arg0: ["macro", 29],
          arg1: "^complete$",
          ignore_case: true,
        },
        {
          function: "_css",
          arg0: ["macro", 37],
          arg1: ".listing__item--has-link",
        },
        { function: "_cn", arg0: ["macro", 6], arg1: "/search" },
        {
          function: "_re",
          arg0: ["macro", 2],
          arg1: "(^$|((^|,)1766321_778($|,)))",
        },
      ],
      rules: [
        [
          ["if", 0],
          [
            "add",
            0,
            8,
            9,
            10,
            14,
            85,
            171,
            198,
            203,
            206,
            243,
            246,
            255,
            258,
            263,
            265,
            268,
          ],
        ],
        [
          ["if", 3, 4],
          ["add", 1, 11, 75, 79, 242, 244, 256, 267, 270],
        ],
        [
          ["if", 0, 5],
          [
            "add",
            2,
            4,
            6,
            13,
            158,
            161,
            164,
            167,
            227,
            230,
            233,
            236,
            239,
            247,
            248,
            249,
            253,
            269,
          ],
        ],
        [
          ["if", 0, 5, 6],
          ["add", 3, 5],
          ["block", 249],
        ],
        [
          ["if", 7],
          [
            "add",
            6,
            107,
            108,
            109,
            110,
            112,
            113,
            114,
            115,
            116,
            117,
            118,
            119,
            120,
            121,
            122,
            123,
            124,
            126,
            131,
            132,
            133,
            134,
            135,
            136,
            137,
            138,
            139,
            140,
            143,
            144,
            145,
            146,
            147,
            148,
            149,
            150,
            151,
            152,
            153,
            154,
            155,
            156,
            157,
            160,
            163,
            166,
            169,
            172,
            173,
            174,
            175,
            177,
            178,
            179,
            182,
            185,
            186,
            187,
            188,
            189,
            190,
            191,
            192,
            193,
            194,
            195,
            196,
            197,
            200,
            201,
            202,
            205,
            208,
            209,
            210,
            211,
            212,
            213,
            214,
            215,
            217,
            219,
            220,
            221,
            222,
            223,
            226,
            229,
            232,
            235,
            238,
            241,
          ],
        ],
        [
          ["if", 7, 8],
          ["add", 7],
          ["block", 6],
        ],
        [
          ["if", 7, 9],
          ["add", 8],
        ],
        [
          ["if", 3, 11],
          ["add", 11, 75, 79, 267],
        ],
        [
          ["if", 12, 13, 14, 15],
          ["add", 12],
        ],
        [
          ["if", 12, 14, 16, 17],
          ["add", 12],
        ],
        [
          ["if", 3, 18],
          ["add", 15, 74, 78, 89, 245, 250, 266, 271, 273],
        ],
        [
          ["if", 20, 21, 22],
          ["add", 16],
        ],
        [
          ["if", 12, 21, 23],
          ["add", 16],
        ],
        [
          ["if", 21, 24, 25],
          ["add", 16],
        ],
        [
          ["if", 21, 26, 27],
          ["add", 16],
        ],
        [
          ["if", 21, 28, 29, 30],
          ["add", 16],
        ],
        [
          ["if", 14, 31, 32],
          ["add", 17],
        ],
        [
          ["if", 14, 26, 33],
          ["add", 17],
        ],
        [
          ["if", 34, 35],
          ["add", 18],
        ],
        [
          ["if", 35, 36, 37, 38],
          ["add", 19],
        ],
        [
          ["if", 35, 36, 39, 40],
          ["add", 19],
        ],
        [
          ["if", 35, 36, 41],
          ["add", 19],
        ],
        [
          ["if", 35, 36, 37],
          ["add", 20],
        ],
        [
          ["if", 35, 36, 39, 42],
          ["add", 20],
        ],
        [
          ["if", 35, 36, 43],
          ["add", 20],
        ],
        [
          ["if", 35, 44],
          ["add", 21],
        ],
        [
          ["if", 46],
          ["unless", 45],
          ["add", 22],
        ],
        [
          ["if", 47],
          ["unless", 45],
          ["add", 23],
        ],
        [
          ["if", 48],
          ["unless", 45],
          ["add", 24],
        ],
        [
          ["if", 49, 50],
          ["add", 25],
        ],
        [
          ["if", 51, 52, 53],
          ["add", 26],
        ],
        [
          ["if", 52, 54, 55, 56, 57, 58],
          ["add", 27],
        ],
        [
          ["if", 52, 54, 55, 57, 59, 60],
          ["add", 28],
        ],
        [
          ["if", 52, 54, 55, 57, 61, 62],
          ["add", 29],
        ],
        [
          ["if", 52, 54, 55, 57, 63, 64],
          ["add", 30],
        ],
        [
          ["if", 52, 54, 55, 57, 65, 66],
          ["add", 31],
        ],
        [
          ["if", 67, 68, 69],
          ["add", 32],
        ],
        [
          ["if", 68, 70, 71],
          ["add", 32],
        ],
        [
          ["if", 68, 75, 76],
          ["add", 33],
        ],
        [
          ["if", 68, 77, 78],
          ["add", 34],
        ],
        [
          ["if", 68, 79, 80, 81],
          ["add", 35],
        ],
        [
          ["if", 68, 82, 83],
          ["add", 35],
        ],
        [
          ["if", 35, 84, 85],
          ["add", 36],
        ],
        [
          ["if", 26, 68, 86, 87, 88],
          ["add", 37],
          ["block", 38],
        ],
        [
          ["if", 68, 89, 90, 91],
          ["add", 38],
        ],
        [
          ["if", 35, 92],
          ["add", 39],
        ],
        [
          ["if", 35, 93],
          ["add", 40],
        ],
        [
          ["if", 35, 94],
          ["add", 41],
        ],
        [
          ["if", 35, 95],
          ["add", 42],
        ],
        [
          ["if", 35, 96],
          ["add", 43],
        ],
        [
          ["if", 35, 97],
          ["add", 44],
        ],
        [
          ["if", 35, 98],
          ["add", 45],
        ],
        [
          ["if", 35, 99],
          ["add", 46],
        ],
        [
          ["if", 14, 100],
          ["add", 47],
        ],
        [
          ["if", 68, 101, 102, 103],
          ["add", 48, 50],
        ],
        [
          ["if", 68, 101, 104, 105],
          ["add", 49, 51],
        ],
        [
          ["if", 106, 107],
          ["add", 52],
        ],
        [
          ["if", 68, 108, 109, 110, 111],
          ["add", 53],
        ],
        [
          ["if", 35, 112],
          ["add", 54],
        ],
        [
          ["if", 113, 114],
          ["add", 55],
        ],
        [
          ["if", 3, 115],
          ["add", 56],
        ],
        [
          ["if", 3, 116],
          ["add", 57, 58, 76, 77],
        ],
        [
          ["if", 107, 117],
          ["add", 59, 264],
        ],
        [
          ["if", 68, 118, 120],
          ["unless", 119],
          ["add", 60],
        ],
        [
          ["if", 68, 121, 123],
          ["unless", 122],
          ["add", 60],
        ],
        [
          ["if", 68, 124, 126],
          ["unless", 125],
          ["add", 60],
        ],
        [
          ["if", 35, 127],
          ["add", 61],
        ],
        [
          ["if", 14, 128],
          ["add", 62],
        ],
        [
          ["if", 68, 130, 131, 132],
          ["add", 63],
        ],
        [
          ["if", 35, 131, 133],
          ["add", 64],
        ],
        [
          ["if", 134],
          ["add", 65, 83, 84, 168],
        ],
        [
          ["if", 35, 135, 136, 137],
          ["add", 66],
        ],
        [
          ["if", 68, 72, 73, 74],
          ["add", 67],
          ["block", 32],
        ],
        [
          ["if", 68, 138, 139, 140],
          ["add", 68],
        ],
        [
          ["if", 52, 141, 142],
          ["add", 69],
        ],
        [
          ["if", 68, 143, 144, 145],
          ["add", 70],
        ],
        [
          ["if", 14, 143, 148],
          ["add", 71],
        ],
        [
          ["if", 68, 143, 149, 150],
          ["add", 72],
        ],
        [
          ["if", 68, 143, 146, 147],
          ["add", 73],
          ["block", 70],
        ],
        [
          ["if", 52, 151, 152],
          ["add", 80],
        ],
        [
          ["if", 153],
          ["add", 81],
        ],
        [
          ["if", 35, 154],
          ["add", 82],
        ],
        [
          ["if", 3, 155],
          ["add", 86],
        ],
        [
          ["if", 3, 156],
          ["add", 87],
        ],
        [
          ["if", 3, 157],
          ["add", 88, 251, 272],
        ],
        [
          ["if", 3, 158],
          ["add", 90, 252, 274],
        ],
        [
          ["if", 3, 159],
          ["add", 91],
        ],
        [
          ["if", 160],
          ["add", 92],
        ],
        [
          ["if", 3, 161],
          ["add", 93],
        ],
        [
          ["if", 3, 162],
          ["add", 94],
        ],
        [
          ["if", 163],
          ["add", 95],
        ],
        [
          ["if", 3, 164],
          ["add", 96],
        ],
        [
          ["if", 68, 165, 166],
          ["add", 97],
        ],
        [
          ["if", 35, 167],
          ["add", 98],
        ],
        [
          ["if", 35, 168],
          ["add", 99],
          ["block", 98],
        ],
        [
          ["if", 68, 169, 170],
          ["add", 100],
        ],
        [
          ["if", 68, 171, 172],
          ["add", 101],
        ],
        [
          ["if", 35, 173, 174],
          ["add", 102],
        ],
        [
          ["if", 52, 175, 176],
          ["add", 103],
        ],
        [
          ["if", 52, 177, 178],
          ["add", 104],
        ],
        [
          ["if", 68, 179, 180],
          ["add", 105],
        ],
        [
          ["if", 181],
          ["add", 106, 262, 125, 130, 141, 142, 176, 181, 218],
        ],
        [
          ["if", 183],
          ["add", 111],
        ],
        [
          ["if", 184, 185],
          ["add", 127],
        ],
        [
          ["if", 21, 186, 187],
          ["add", 128],
        ],
        [
          ["if", 7, 186],
          ["add", 129],
        ],
        [
          ["if", 188],
          ["add", 159],
        ],
        [
          ["if", 189],
          ["add", 162],
        ],
        [
          ["if", 190],
          ["add", 165],
        ],
        [
          ["if", 191],
          ["add", 170],
        ],
        [
          ["if", 7, 26],
          ["add", 180],
        ],
        [
          ["if", 184, 192],
          ["add", 183],
        ],
        [
          ["if", 21, 26, 193],
          ["add", 184],
        ],
        [
          ["if", 106, 181, 194],
          ["add", 199],
        ],
        [
          ["if", 106, 181, 194, 195],
          ["add", 204],
        ],
        [
          ["if", 196, 197],
          ["add", 207],
        ],
        [
          ["if", 7, 198, 199],
          ["add", 216],
        ],
        [
          ["if", 7, 200],
          ["add", 224],
        ],
        [
          ["if", 7, 201],
          ["add", 225],
        ],
        [
          ["if", 202],
          ["add", 228],
        ],
        [
          ["if", 203],
          ["add", 231],
        ],
        [
          ["if", 204],
          ["add", 234],
        ],
        [
          ["if", 205],
          ["add", 237],
        ],
        [
          ["if", 206],
          ["add", 240],
        ],
        [
          ["if", 0, 199],
          ["add", 254],
        ],
        [
          ["if", 183, 208],
          ["add", 257],
        ],
        [
          ["if", 35, 209, 210],
          ["add", 259],
        ],
        [
          ["if", 7, 117],
          ["add", 260],
        ],
        [
          ["if", 68, 211, 212, 213],
          ["add", 261],
        ],
        [
          ["if", 1, 2],
          ["block", 0, 243, 246, 265, 268],
        ],
        [
          ["if", 5, 7],
          ["block", 6],
        ],
        [
          ["if", 0, 10],
          ["block", 8],
        ],
        [
          ["if", 2],
          ["unless", 19],
          ["block", 15, 86, 87, 88, 89, 90, 91, 93, 94, 95, 96],
        ],
        [
          ["if", 2, 129],
          ["block", 62],
        ],
        [
          ["if", 2],
          ["unless", 117],
          ["block", 65, 83, 84],
        ],
        [
          ["if", 181, 182],
          ["block", 106],
        ],
        [
          ["if", 0, 199, 207],
          ["block", 254],
        ],
      ],
    },
    runtime: [
      [
        50,
        "__cvt_1766321_467",
        [46, "a"],
        [52, "b", ["require", "queryPermission"]],
        [52, "c", ["require", "getCookieValues"]],
        [52, "d", "CookieConsent"],
        [41, "e"],
        [3, "e", "|"],
        [41, "f"],
        [
          22,
          ["b", "get_cookies", [15, "d"]],
          [
            46,
            [3, "f", ["c", [15, "d"]]],
            [
              22,
              [1, [15, "f"], [18, [17, [15, "f"], "length"], 0]],
              [
                46,
                [
                  53,
                  [41, "g"],
                  [3, "g", [2, [16, [15, "f"], 0], "toLowerCase", [7]]],
                  [
                    22,
                    [20, [15, "g"], "-1"],
                    [46, [3, "e", "|preferences|statistics|marketing|"]],
                    [
                      46,
                      [
                        22,
                        [
                          18,
                          [2, [15, "g"], "indexOf", [7, "preferences:true"]],
                          [27, 1],
                        ],
                        [46, [3, "e", [0, [15, "e"], "preferences|"]]],
                      ],
                      [
                        22,
                        [
                          18,
                          [2, [15, "g"], "indexOf", [7, "statistics:true"]],
                          [27, 1],
                        ],
                        [46, [3, "e", [0, [15, "e"], "statistics|"]]],
                      ],
                      [
                        22,
                        [
                          18,
                          [2, [15, "g"], "indexOf", [7, "marketing:true"]],
                          [27, 1],
                        ],
                        [46, [3, "e", [0, [15, "e"], "marketing|"]]],
                      ],
                    ],
                  ],
                ],
              ],
            ],
          ],
        ],
        [36, [15, "e"]],
      ],
      [
        50,
        "__cvt_1766321_645",
        [46, "a"],
        [52, "b", ["require", "injectScript"]],
        [52, "c", ["require", "encodeUriComponent"]],
        [52, "d", ["require", "queryPermission"]],
        [52, "e", ["require", "gtagSet"]],
        [52, "f", ["require", "setDefaultConsentState"]],
        [52, "g", ["require", "getCookieValues"]],
        [52, "h", ["require", "updateConsentState"]],
        [52, "i", [17, [15, "a"], "serial"]],
        [52, "j", [17, [15, "a"], "iabFramework"]],
        [52, "k", [17, [15, "a"], "consentModeEnabled"]],
        [52, "l", [17, [15, "a"], "language"]],
        [52, "m", [17, [15, "a"], "waitForUpdate"]],
        [52, "n", [17, [15, "a"], "urlPassthrough"]],
        [52, "o", [30, [17, [15, "a"], "adsDataRedaction"], "dynamic"]],
        [52, "p", [30, [17, [15, "a"], "regionSettings"], [7]]],
        [52, "q", [30, [17, [15, "a"], "geoRegions"], [7]]],
        [52, "r", [30, [17, [15, "a"], "cdnRegion"], "com"]],
        [41, "s"],
        [3, "s", false],
        [41, "t"],
        [3, "t", [17, [15, "a"], "advertiserConsentModeEnabled"]],
        [22, [1, [15, "k"], [20, [15, "t"], [44]]], [46, [3, "t", true]]],
        [41, "u"],
        [3, "u", ""],
        [
          2,
          [15, "q"],
          "forEach",
          [
            7,
            [
              51,
              "",
              [7, "w"],
              [22, [29, [15, "u"], ""], [46, [3, "u", [0, [15, "u"], ","]]]],
              [
                3,
                "u",
                [
                  0,
                  [15, "u"],
                  [
                    0,
                    [
                      0,
                      [
                        0,
                        [0, "{'region':'", [17, [15, "w"], "altRegion"]],
                        "','cbid':'",
                      ],
                      [17, [15, "w"], "altCbid"],
                    ],
                    "'}",
                  ],
                ],
              ],
            ],
          ],
        ],
        [
          22,
          [21, [15, "k"], false],
          [
            46,
            [
              53,
              [
                52,
                "w",
                [
                  51,
                  "",
                  [7, "bc"],
                  [
                    36,
                    [
                      2,
                      [
                        2,
                        [2, [15, "bc"], "split", [7, ","]],
                        "map",
                        [
                          7,
                          [
                            51,
                            "",
                            [7, "bd"],
                            [36, [2, [15, "bd"], "trim", [7]]],
                          ],
                        ],
                      ],
                      "filter",
                      [
                        7,
                        [
                          51,
                          "",
                          [7, "bd"],
                          [36, [21, [17, [15, "bd"], "length"], 0]],
                        ],
                      ],
                    ],
                  ],
                ],
              ],
              [
                52,
                "x",
                [
                  51,
                  "",
                  [7, "bc"],
                  [
                    52,
                    "bd",
                    [
                      8,
                      "ad_storage",
                      [17, [15, "bc"], "defaultConsentMarketing"],
                      "ad_user_data",
                      [17, [15, "bc"], "defaultConsentMarketingAdUserData"],
                      "ad_personalization",
                      [
                        17,
                        [15, "bc"],
                        "defaultConsentMarketingAdPersonalization",
                      ],
                      "analytics_storage",
                      [17, [15, "bc"], "defaultConsentStatistics"],
                      "functionality_storage",
                      [17, [15, "bc"], "defaultConsentPreferences"],
                      "personalization_storage",
                      [17, [15, "bc"], "defaultConsentPreferences"],
                      "security_storage",
                      "granted",
                    ],
                  ],
                  [52, "be", ["w", [17, [15, "bc"], "region"]]],
                  [
                    22,
                    [17, [15, "be"], "length"],
                    [46, [43, [15, "bd"], "region", [15, "be"]]],
                  ],
                  [36, [15, "bd"]],
                ],
              ],
              [
                "e",
                [
                  8,
                  "url_passthrough",
                  [20, [15, "n"], true],
                  "developer_id.dMWZhNz",
                  true,
                ],
              ],
              [
                2,
                [15, "p"],
                "forEach",
                [
                  7,
                  [
                    51,
                    "",
                    [7, "bc"],
                    [52, "bd", ["x", [15, "bc"]]],
                    [
                      22,
                      [18, [15, "m"], 0],
                      [46, [43, [15, "bd"], "wait_for_update", [15, "m"]]],
                    ],
                    ["f", [15, "bd"]],
                    [
                      22,
                      [
                        30,
                        [20, [17, [15, "bc"], "region"], [44]],
                        [20, [2, [17, [15, "bc"], "region"], "trim", [7]], ""],
                      ],
                      [46, [3, "s", true]],
                    ],
                  ],
                ],
              ],
              [
                22,
                [28, [15, "s"]],
                [
                  46,
                  [
                    "f",
                    [
                      8,
                      "ad_storage",
                      "denied",
                      "ad_user_data",
                      "denied",
                      "ad_personalization",
                      "denied",
                      "analytics_storage",
                      "denied",
                      "functionality_storage",
                      "denied",
                      "personalization_storage",
                      "denied",
                      "security_storage",
                      "granted",
                    ],
                  ],
                ],
              ],
              [41, "y"],
              [3, "y", [45]],
              [
                22,
                [21, [2, ["g", "CookieConsent"], "toString", [7]], ""],
                [
                  46,
                  [
                    53,
                    [52, "bc", [16, ["g", "CookieConsent"], 0]],
                    [
                      22,
                      [
                        1,
                        [
                          1,
                          [21, [40, [15, "bc"]], "undefined"],
                          [20, [2, [15, "bc"], "indexOf", [7, "{"]], 0],
                        ],
                        [18, [2, [15, "bc"], "indexOf", [7, "}"]], 0],
                      ],
                      [
                        46,
                        [
                          3,
                          "y",
                          [
                            8,
                            "preferences",
                            "denied",
                            "statistics",
                            "denied",
                            "marketing",
                            "denied",
                            "readConsentString",
                            [
                              51,
                              "",
                              [7, "bd"],
                              [41, "be", "bf"],
                              [
                                3,
                                "be",
                                [
                                  2,
                                  [
                                    2,
                                    [2, [15, "bd"], "replace", [7, "{", ""]],
                                    "replace",
                                    [7, "}", ""],
                                  ],
                                  "split",
                                  [7, ","],
                                ],
                              ],
                              [3, "bf", [8]],
                              [
                                53,
                                [41, "bg"],
                                [3, "bg", 0],
                                [
                                  63,
                                  [7, "bg"],
                                  [23, [15, "bg"], [17, [15, "be"], "length"]],
                                  [3, "bg", [0, [15, "bg"], 1]],
                                  [
                                    46,
                                    [
                                      53,
                                      [41, "bh"],
                                      [
                                        3,
                                        "bh",
                                        [
                                          2,
                                          [16, [15, "be"], [15, "bg"]],
                                          "split",
                                          [7, ":"],
                                        ],
                                      ],
                                      [
                                        43,
                                        [15, "bf"],
                                        [16, [15, "bh"], 0],
                                        [16, [15, "bh"], 1],
                                      ],
                                    ],
                                  ],
                                ],
                              ],
                              [
                                43,
                                [15, "y"],
                                "preferences",
                                [
                                  39,
                                  [20, [17, [15, "bf"], "preferences"], "true"],
                                  "granted",
                                  "denied",
                                ],
                              ],
                              [
                                43,
                                [15, "y"],
                                "statistics",
                                [
                                  39,
                                  [20, [17, [15, "bf"], "statistics"], "true"],
                                  "granted",
                                  "denied",
                                ],
                              ],
                              [
                                43,
                                [15, "y"],
                                "marketing",
                                [
                                  39,
                                  [20, [17, [15, "bf"], "marketing"], "true"],
                                  "granted",
                                  "denied",
                                ],
                              ],
                              [
                                43,
                                [15, "y"],
                                "region",
                                [17, [15, "bf"], "region"],
                              ],
                            ],
                          ],
                        ],
                        [2, [15, "y"], "readConsentString", [7, [15, "bc"]]],
                        [
                          "h",
                          [
                            8,
                            "ad_storage",
                            [17, [15, "y"], "marketing"],
                            "ad_user_data",
                            [17, [15, "y"], "marketing"],
                            "ad_personalization",
                            [17, [15, "y"], "marketing"],
                            "analytics_storage",
                            [17, [15, "y"], "statistics"],
                            "functionality_storage",
                            [17, [15, "y"], "preferences"],
                            "personalization_storage",
                            [17, [15, "y"], "preferences"],
                            "security_storage",
                            "granted",
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
              ],
              [
                52,
                "z",
                [39, [15, "y"], [17, [15, "y"], "marketing"], "denied"],
              ],
              [52, "ba", [20, [15, "z"], "granted"]],
              [
                52,
                "bb",
                [
                  39,
                  [20, [15, "o"], "dynamic"],
                  [28, [15, "ba"]],
                  [20, [15, "o"], "true"],
                ],
              ],
              ["e", [8, "ads_data_redaction", [15, "bb"]]],
            ],
          ],
        ],
        [41, "v"],
        [
          3,
          "v",
          [
            0,
            [
              0,
              [0, [0, "https://consent.cookiebot.", [15, "r"]], "/uc.js?cbid="],
              ["c", [15, "i"]],
            ],
            "&implementation=gtm",
          ],
        ],
        [
          22,
          [20, [15, "k"], false],
          [46, [3, "v", [0, [15, "v"], "&consentmode=disabled"]]],
        ],
        [
          22,
          [30, [20, [15, "k"], false], [20, [15, "t"], false]],
          [46, [3, "v", [0, [15, "v"], "&advertiserConsentMode=disabled"]]],
          [
            46,
            [
              3,
              "v",
              [0, [15, "v"], [0, "&consentmode-dataredaction=", [15, "o"]]],
            ],
          ],
        ],
        [
          22,
          [20, [15, "l"], "variable"],
          [
            46,
            [
              3,
              "v",
              [
                0,
                [15, "v"],
                [0, "&culture=", ["c", [17, [15, "a"], "languageVariable"]]],
              ],
            ],
          ],
        ],
        [
          22,
          [29, [15, "u"], ""],
          [46, [3, "v", [0, [15, "v"], [0, "&georegions=", ["c", [15, "u"]]]]]],
        ],
        [22, [15, "j"], [46, [3, "v", [0, [15, "v"], "&framework=TCFv2.2"]]]],
        [
          22,
          ["d", "inject_script", [15, "v"]],
          [
            46,
            [
              "b",
              [15, "v"],
              [17, [15, "a"], "gtmOnSuccess"],
              [17, [15, "a"], "gtmOnFailure"],
            ],
          ],
          [46, [2, [15, "a"], "gtmOnFailure", [7]]],
        ],
      ],
      [
        50,
        "__cvt_1766321_824",
        [46, "a"],
        [41, "n"],
        [52, "b", ["require", "injectScript"]],
        [52, "c", ["require", "queryPermission"]],
        [52, "d", ["require", "createArgumentsQueue"]],
        [52, "e", ["require", "encodeUri"]],
        [52, "f", ["d", "clarity", "clarity.q"]],
        [52, "g", [30, [17, [15, "a"], "custom_tag"], [7]]],
        [52, "h", [30, [17, [15, "a"], "friendlyName"], ""]],
        [52, "i", [30, [17, [15, "a"], "sessionId"], ""]],
        [52, "j", [30, [17, [15, "a"], "pageId"], ""]],
        [
          52,
          "k",
          [
            0,
            [
              0,
              "https://www.clarity.ms/tag/",
              ["e", [17, [15, "a"], "projectId"]],
            ],
            "?ref=gtm",
          ],
        ],
        [52, "l", [51, "", [7], [2, [15, "a"], "gtmOnSuccess", [7]]]],
        [52, "m", [51, "", [7], [2, [15, "a"], "gtmOnFailure", [7]]]],
        [
          22,
          ["c", "inject_script", "https://www.clarity.ms"],
          [
            46,
            [3, "n", 0],
            [
              42,
              [23, [15, "n"], [17, [15, "g"], "length"]],
              [33, [15, "n"], [3, "n", [0, [15, "n"], 1]]],
              false,
              [
                46,
                [
                  "f",
                  "set",
                  [17, [16, [15, "g"], [15, "n"]], "key"],
                  [17, [16, [15, "g"], [15, "n"]], "value"],
                ],
              ],
            ],
            [
              22,
              [17, [15, "a"], "userId"],
              [
                46,
                [
                  "f",
                  "identify",
                  [17, [15, "a"], "userId"],
                  [15, "i"],
                  [15, "j"],
                  [15, "h"],
                ],
              ],
            ],
            ["b", [15, "k"], [15, "l"], [15, "m"]],
          ],
          [46, [2, [15, "a"], "gtmOnFailure", [7]]],
        ],
      ],
      [
        50,
        "__bzi",
        [46, "a"],
        [52, "b", ["require", "injectScript"]],
        [52, "c", ["require", "setInWindow"]],
        ["c", "_linkedin_data_partner_id", [17, [15, "a"], "id"]],
        [
          "b",
          "https://snap.licdn.com/li.lms-analytics/insight.min.js",
          [17, [15, "a"], "gtmOnSuccess"],
          [17, [15, "a"], "gtmOnFailure"],
        ],
      ],
      [50, "__c", [46, "a"], [36, [17, [15, "a"], "value"]]],
      [
        50,
        "__cid",
        [46, "a"],
        [
          36,
          [
            17,
            [
              13,
              [41, "$0"],
              [3, "$0", ["require", "getContainerVersion"]],
              ["$0"],
            ],
            "containerId",
          ],
        ],
      ],
      [
        50,
        "__cl",
        [46, "a"],
        [52, "b", ["require", "internal.enableAutoEventOnClick"]],
        ["b"],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__e",
        [46, "a"],
        [
          36,
          [
            13,
            [41, "$0"],
            [3, "$0", ["require", "internal.getEventData"]],
            ["$0", "event"],
          ],
        ],
      ],
      [
        50,
        "__evl",
        [46, "a"],
        [52, "b", ["require", "internal.enableAutoEventOnElementVisibility"]],
        [52, "c", ["require", "makeNumber"]],
        [
          52,
          "d",
          [
            8,
            "selectorType",
            [17, [15, "a"], "selectorType"],
            "id",
            [17, [15, "a"], "elementId"],
            "selector",
            [17, [15, "a"], "elementSelector"],
            "useDomChangeListener",
            [28, [28, [17, [15, "a"], "useDomChangeListener"]]],
            "onScreenRatio",
            ["c", [17, [15, "a"], "onScreenRatio"]],
            "firingFrequency",
            [17, [15, "a"], "firingFrequency"],
          ],
        ],
        [
          22,
          [17, [15, "a"], "useOnScreenDuration"],
          [
            46,
            [
              43,
              [15, "d"],
              "onScreenDuration",
              ["c", [17, [15, "a"], "onScreenDuration"]],
            ],
          ],
        ],
        ["b", [15, "d"], [17, [15, "a"], "uniqueTriggerId"]],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__fsl",
        [46, "a"],
        [52, "b", ["require", "internal.enableAutoEventOnFormSubmit"]],
        [
          52,
          "c",
          [
            8,
            "waitForTags",
            [17, [15, "a"], "waitForTags"],
            "checkValidation",
            [17, [15, "a"], "checkValidation"],
            "waitForTagsTimeout",
            [17, [15, "a"], "waitForTagsTimeout"],
          ],
        ],
        [52, "d", [30, [17, [15, "a"], "uniqueTriggerId"], "0"]],
        ["b", [15, "c"], [15, "d"]],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__googtag",
        [46, "a"],
        [
          50,
          "l",
          [46, "u", "v"],
          [
            66,
            "w",
            [2, [15, "b"], "keys", [7, [15, "v"]]],
            [46, [43, [15, "u"], [15, "w"], [16, [15, "v"], [15, "w"]]]],
          ],
        ],
        [
          50,
          "m",
          [46],
          [
            36,
            [
              7,
              [17, [17, [15, "d"], "SCHEMA"], "EP_SERVER_CONTAINER_URL"],
              [17, [17, [15, "d"], "SCHEMA"], "EP_TRANSPORT_URL"],
            ],
          ],
        ],
        [
          50,
          "n",
          [46, "u"],
          [52, "v", ["m"]],
          [
            65,
            "w",
            [15, "v"],
            [
              46,
              [
                53,
                [52, "x", [16, [15, "u"], [15, "w"]]],
                [22, [15, "x"], [46, [36, [15, "x"]]]],
              ],
            ],
          ],
          [36, [44]],
        ],
        [52, "b", ["require", "Object"]],
        [52, "c", ["require", "createArgumentsQueue"]],
        [52, "d", [15, "__module_gtag"]],
        [52, "e", ["require", "internal.gtagConfig"]],
        [52, "f", ["require", "getType"]],
        [52, "g", ["require", "internal.loadGoogleTag"]],
        [52, "h", ["require", "logToConsole"]],
        [52, "i", ["require", "makeNumber"]],
        [52, "j", ["require", "makeString"]],
        [52, "k", ["require", "makeTableMap"]],
        [52, "o", [30, [17, [15, "a"], "tagId"], ""]],
        [
          22,
          [
            30,
            [21, ["f", [15, "o"]], "string"],
            [24, [2, [15, "o"], "indexOf", [7, "-"]], 0],
          ],
          [
            46,
            [
              "h",
              [
                0,
                "Invalid Measurement ID for the GA4 Configuration tag: ",
                [15, "o"],
              ],
            ],
            [2, [15, "a"], "gtmOnFailure", [7]],
            [36],
          ],
        ],
        [52, "p", [30, [17, [15, "a"], "configSettingsVariable"], [8]]],
        [
          52,
          "q",
          [
            30,
            [
              "k",
              [30, [17, [15, "a"], "configSettingsTable"], [7]],
              "parameter",
              "parameterValue",
            ],
            [8],
          ],
        ],
        ["l", [15, "p"], [15, "q"]],
        [52, "r", [30, [17, [15, "a"], "eventSettingsVariable"], [8]]],
        [
          52,
          "s",
          [
            30,
            [
              "k",
              [30, [17, [15, "a"], "eventSettingsTable"], [7]],
              "parameter",
              "parameterValue",
            ],
            [8],
          ],
        ],
        ["l", [15, "r"], [15, "s"]],
        [52, "t", [15, "p"]],
        ["l", [15, "t"], [15, "r"]],
        [
          22,
          [
            30,
            [
              2,
              [15, "t"],
              "hasOwnProperty",
              [7, [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"]],
            ],
            [17, [15, "a"], "userProperties"],
          ],
          [
            46,
            [
              53,
              [
                52,
                "u",
                [
                  30,
                  [
                    16,
                    [15, "t"],
                    [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"],
                  ],
                  [8],
                ],
              ],
              [
                "l",
                [15, "u"],
                [
                  30,
                  [
                    "k",
                    [30, [17, [15, "a"], "userProperties"], [7]],
                    "name",
                    "value",
                  ],
                  [8],
                ],
              ],
              [
                43,
                [15, "t"],
                [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"],
                [15, "u"],
              ],
            ],
          ],
        ],
        [
          2,
          [15, "d"],
          "convertParameters",
          [
            7,
            [15, "t"],
            [17, [15, "d"], "GOLD_BOOLEAN_FIELDS"],
            [
              51,
              "",
              [7, "u"],
              [
                36,
                [
                  39,
                  [20, "false", [2, ["j", [15, "u"]], "toLowerCase", [7]]],
                  false,
                  [28, [28, [15, "u"]]],
                ],
              ],
            ],
          ],
        ],
        [
          2,
          [15, "d"],
          "convertParameters",
          [
            7,
            [15, "t"],
            [17, [15, "d"], "GOLD_NUMERIC_FIELDS"],
            [51, "", [7, "u"], [36, ["i", [15, "u"]]]],
          ],
        ],
        ["g", [15, "o"], [8, "firstPartyUrl", ["n", [15, "t"]]]],
        ["e", [15, "o"], [15, "t"], [8, "noTargetGroup", true]],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__hjtc",
        [46, "a"],
        [52, "b", ["require", "createArgumentsQueue"]],
        [52, "c", ["require", "encodeUriComponent"]],
        [52, "d", ["require", "injectScript"]],
        [52, "e", ["require", "makeString"]],
        [52, "f", ["require", "setInWindow"]],
        ["b", "hj", "hj.q"],
        [52, "g", [17, [15, "a"], "hotjar_site_id"]],
        [
          "f",
          "_hjSettings",
          [8, "hjid", [15, "g"], "hjsv", 7, "scriptSource", "gtm"],
        ],
        [
          "d",
          [
            0,
            [0, "https://static.hotjar.com/c/hotjar-", ["c", ["e", [15, "g"]]]],
            ".js?sv=7",
          ],
          [17, [15, "a"], "gtmOnSuccess"],
          [17, [15, "a"], "gtmOnFailure"],
        ],
      ],
      [
        50,
        "__hl",
        [46, "a"],
        [52, "b", ["require", "internal.enableAutoEventOnHistoryChange"]],
        ["b"],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        50,
        "__html",
        [46, "a"],
        [52, "b", ["require", "internal.injectHtml"]],
        [
          "b",
          [17, [15, "a"], "html"],
          [17, [15, "a"], "gtmOnSuccess"],
          [17, [15, "a"], "gtmOnFailure"],
          [17, [15, "a"], "useIframe"],
          [17, [15, "a"], "supportDocumentWrite"],
        ],
      ],
      [
        50,
        "__jsm",
        [46, "a"],
        [52, "b", ["require", "internal.executeJavascriptString"]],
        [22, [20, [17, [15, "a"], "javascript"], [44]], [46, [36]]],
        [36, ["b", [17, [15, "a"], "javascript"]]],
      ],
      [
        50,
        "__lcl",
        [46, "a"],
        [52, "b", ["require", "makeInteger"]],
        [52, "c", ["require", "makeString"]],
        [52, "d", ["require", "internal.enableAutoEventOnLinkClick"]],
        [52, "e", [8]],
        [
          22,
          [17, [15, "a"], "waitForTags"],
          [
            46,
            [43, [15, "e"], "waitForTags", true],
            [
              43,
              [15, "e"],
              "waitForTagsTimeout",
              ["b", [17, [15, "a"], "waitForTagsTimeout"]],
            ],
          ],
        ],
        [
          22,
          [17, [15, "a"], "checkValidation"],
          [46, [43, [15, "e"], "checkValidation", true]],
        ],
        [52, "f", [30, [17, [15, "a"], "uniqueTriggerId"], "0"]],
        ["d", [15, "e"], [15, "f"]],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [50, "__paused", [46, "a"], [2, [15, "a"], "gtmOnFailure", [7]]],
      [
        50,
        "__r",
        [46, "a"],
        [
          36,
          [
            13,
            [41, "$0"],
            [3, "$0", ["require", "generateRandom"]],
            [
              "$0",
              [30, [17, [15, "a"], "min"], 0],
              [30, [17, [15, "a"], "max"], 2.147483647e9],
            ],
          ],
        ],
      ],
      [
        50,
        "__sdl",
        [46, "a"],
        [
          50,
          "f",
          [46, "h"],
          [2, [15, "h"], "gtmOnSuccess", [7]],
          [52, "i", [17, [15, "h"], "horizontalThresholdUnits"]],
          [52, "j", [17, [15, "h"], "verticalThresholdUnits"]],
          [52, "k", [8]],
          [43, [15, "k"], "horizontalThresholdUnits", [15, "i"]],
          [
            38,
            [15, "i"],
            [46, "PIXELS", "PERCENT"],
            [
              46,
              [
                5,
                [
                  46,
                  [
                    43,
                    [15, "k"],
                    "horizontalThresholds",
                    ["g", [17, [15, "h"], "horizontalThresholdsPixels"]],
                  ],
                  [4],
                ],
              ],
              [
                5,
                [
                  46,
                  [
                    43,
                    [15, "k"],
                    "horizontalThresholds",
                    ["g", [17, [15, "h"], "horizontalThresholdsPercent"]],
                  ],
                  [4],
                ],
              ],
              [9, [46, [4]]],
            ],
          ],
          [43, [15, "k"], "verticalThresholdUnits", [15, "j"]],
          [
            38,
            [15, "j"],
            [46, "PIXELS", "PERCENT"],
            [
              46,
              [
                5,
                [
                  46,
                  [
                    43,
                    [15, "k"],
                    "verticalThresholds",
                    ["g", [17, [15, "h"], "verticalThresholdsPixels"]],
                  ],
                  [4],
                ],
              ],
              [
                5,
                [
                  46,
                  [
                    43,
                    [15, "k"],
                    "verticalThresholds",
                    ["g", [17, [15, "h"], "verticalThresholdsPercent"]],
                  ],
                  [4],
                ],
              ],
              [9, [46, [4]]],
            ],
          ],
          ["c", [15, "k"], [17, [15, "h"], "uniqueTriggerId"]],
        ],
        [
          50,
          "g",
          [46, "h"],
          [52, "i", [7]],
          [52, "j", [2, ["e", [15, "h"]], "split", [7, ","]]],
          [
            53,
            [41, "k"],
            [3, "k", 0],
            [
              63,
              [7, "k"],
              [23, [15, "k"], [17, [15, "j"], "length"]],
              [33, [15, "k"], [3, "k", [0, [15, "k"], 1]]],
              [
                46,
                [
                  53,
                  [52, "l", ["d", [16, [15, "j"], [15, "k"]]]],
                  [
                    22,
                    [29, [15, "l"], [15, "l"]],
                    [46, [36, [7]]],
                    [
                      46,
                      [
                        22,
                        [
                          29,
                          [
                            17,
                            [2, [16, [15, "j"], [15, "k"]], "trim", [7]],
                            "length",
                          ],
                          0,
                        ],
                        [46, [2, [15, "i"], "push", [7, [15, "l"]]]],
                      ],
                    ],
                  ],
                ],
              ],
            ],
          ],
          [36, [15, "i"]],
        ],
        [52, "b", ["require", "callOnWindowLoad"]],
        [52, "c", ["require", "internal.enableAutoEventOnScroll"]],
        [52, "d", ["require", "makeNumber"]],
        [52, "e", ["require", "makeString"]],
        [
          22,
          [17, [15, "a"], "triggerStartOption"],
          [46, ["f", [15, "a"]]],
          [46, ["b", [51, "", [7], [36, ["f", [15, "a"]]]]]],
        ],
      ],
      [
        50,
        "__tl",
        [46, "a"],
        [52, "b", ["require", "internal.enableAutoEventOnTimer"]],
        [52, "c", ["require", "makeNumber"]],
        [52, "d", ["c", [17, [15, "a"], "interval"]]],
        [
          22,
          [20, [15, "d"], [15, "d"]],
          [
            46,
            [
              53,
              [52, "e", [30, [17, [15, "a"], "uniqueTriggerId"], "0"]],
              [
                "b",
                [
                  8,
                  "eventName",
                  [17, [15, "a"], "eventName"],
                  "interval",
                  [15, "d"],
                  "limit",
                  ["c", [17, [15, "a"], "limit"]],
                ],
                [15, "e"],
              ],
            ],
          ],
        ],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        52,
        "__module_gtag",
        [
          13,
          [41, "$0"],
          [
            3,
            "$0",
            [
              51,
              "",
              [7],
              [
                50,
                "a",
                [46],
                [
                  50,
                  "f",
                  [46, "g", "h", "i"],
                  [
                    65,
                    "j",
                    [15, "h"],
                    [
                      46,
                      [
                        22,
                        [2, [15, "g"], "hasOwnProperty", [7, [15, "j"]]],
                        [
                          46,
                          [
                            43,
                            [15, "g"],
                            [15, "j"],
                            ["i", [16, [15, "g"], [15, "j"]]],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
                [52, "b", ["require", "Object"]],
                [
                  52,
                  "c",
                  [
                    2,
                    [15, "b"],
                    "freeze",
                    [
                      7,
                      [
                        8,
                        "EP_FIRST_PARTY_COLLECTION",
                        "first_party_collection",
                        "EP_SERVER_CONTAINER_URL",
                        "server_container_url",
                        "EP_TRANSPORT_URL",
                        "transport_url",
                        "EP_USER_PROPERTIES",
                        "user_properties",
                      ],
                    ],
                  ],
                ],
                [
                  52,
                  "d",
                  [
                    2,
                    [15, "b"],
                    "freeze",
                    [
                      7,
                      [
                        7,
                        "allow_ad_personalization_signals",
                        "allow_direct_google_requests",
                        "allow_google_signals",
                        "cookie_update",
                        "ignore_referrer",
                        "update",
                        "first_party_collection",
                        "send_page_view",
                      ],
                    ],
                  ],
                ],
                [
                  52,
                  "e",
                  [
                    2,
                    [15, "b"],
                    "freeze",
                    [
                      7,
                      [
                        7,
                        "cookie_expires",
                        "event_timeout",
                        "session_duration",
                        "session_engaged_time",
                        "engagement_time_msec",
                      ],
                    ],
                  ],
                ],
                [
                  36,
                  [
                    8,
                    "SCHEMA",
                    [15, "c"],
                    "GOLD_BOOLEAN_FIELDS",
                    [15, "d"],
                    "GOLD_NUMERIC_FIELDS",
                    [15, "e"],
                    "convertParameters",
                    [15, "f"],
                  ],
                ],
              ],
              [36, ["a"]],
            ],
          ],
          ["$0"],
        ],
      ],
    ],
    entities: {
      __c: { 2: true, 4: true },
      __cid: { 2: true, 4: true, 3: true },
      __e: { 2: true, 4: true },
      __googtag: { 1: 10 },
      __r: { 2: true },
    },
    blob: { 1: "242" },
    permissions: {
      __cvt_1766321_467: {
        get_cookies: {
          cookieAccess: "specific",
          cookieNames: ["CookieConsent"],
        },
      },
      __cvt_1766321_645: {
        inject_script: {
          urls: ["https://*.cookiebot.com/", "https://*.cookiebot.eu/"],
        },
        access_consent: {
          consentTypes: [
            { consentType: "analytics_storage", read: false, write: true },
            { consentType: "ad_storage", read: false, write: true },
            { consentType: "functionality_storage", read: false, write: true },
            {
              consentType: "personalization_storage",
              read: false,
              write: true,
            },
            { consentType: "security_storage", read: false, write: true },
            { consentType: "wait_for_update", read: false, write: true },
            { consentType: "ad_personalization", read: false, write: true },
            { consentType: "ad_user_data", read: false, write: true },
          ],
        },
        get_cookies: {
          cookieAccess: "specific",
          cookieNames: ["CookieConsent"],
        },
        write_data_layer: {
          keyPatterns: [
            "ads_data_redaction",
            "url_passthrough",
            "developer_id.dMWZhNz",
          ],
        },
      },
      __cvt_1766321_824: {
        inject_script: { urls: ["https://www.clarity.ms/*"] },
        access_globals: {
          keys: [
            { key: "clarity", read: true, write: true, execute: true },
            { key: "clarity.q", read: true, write: true, execute: true },
          ],
        },
      },
      __bzi: {
        access_globals: {
          keys: [
            {
              key: "_linkedin_data_partner_id",
              read: true,
              write: true,
              execute: false,
            },
          ],
        },
        inject_script: {
          urls: ["https://snap.licdn.com/li.lms-analytics/insight.min.js"],
        },
      },
      __c: {},
      __cid: { read_container_data: {} },
      __cl: { detect_click_events: {} },
      __e: {
        read_event_data: {
          eventDataAccess: "specific",
          keyPatterns: ["event"],
        },
      },
      __evl: { detect_element_visibility_events: {} },
      __fsl: { detect_form_submit_events: { allowWaitForTags: true } },
      __googtag: {
        logging: { environments: "debug" },
        access_globals: {
          keys: [
            { key: "gtag", read: true, write: true, execute: true },
            { key: "dataLayer", read: true, write: true, execute: false },
          ],
        },
        configure_google_tags: { allowedTagIds: "any" },
        load_google_tags: {
          allowedTagIds: "any",
          allowFirstPartyUrls: true,
          allowedFirstPartyUrls: "any",
        },
      },
      __hjtc: {
        access_globals: {
          keys: [
            { key: "hj", read: true, write: true, execute: false },
            { key: "hj.q", read: true, write: true, execute: false },
            { key: "_hjSettings", read: true, write: true, execute: false },
          ],
        },
        inject_script: { urls: ["https://static.hotjar.com/c/hotjar-*"] },
      },
      __hl: { detect_history_change_events: {} },
      __html: { unsafe_inject_arbitrary_html: {} },
      __jsm: { unsafe_run_arbitrary_javascript: {} },
      __lcl: { detect_link_click_events: { allowWaitForTags: true } },
      __paused: {},
      __r: {},
      __sdl: {
        process_dom_events: {
          targets: [{ targetType: "window", eventName: "load" }],
        },
        detect_scroll_events: {},
      },
      __tl: { detect_timer_events: {} },
    },

    sandboxed_scripts: [
      "__cvt_1766321_467",
      "__cvt_1766321_645",
      "__cvt_1766321_824",
    ],

    security_groups: {
      customScripts: ["__html", "__jsm"],
      google: [
        "__c",
        "__cid",
        "__cl",
        "__e",
        "__evl",
        "__googtag",
        "__hl",
        "__r",
        "__sdl",
        "__tl",
      ],
      nonGoogleScripts: ["__bzi", "__hjtc"],
    },
  };

  try {
    (function () {
      /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
      var C = this || self,
        D = function (n, u) {
          var w = n.split("."),
            q = C;
          w[0] in q ||
            typeof q.execScript == "undefined" ||
            q.execScript("var " + w[0]);
          for (var r; w.length && (r = w.shift()); )
            w.length || u === void 0
              ? (q = q[r] && q[r] !== Object.prototype[r] ? q[r] : (q[r] = {}))
              : (q[r] = u);
        }; /*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
      var E,
        F = function () {};
      (function () {
        function n(h, l) {
          h = h || "";
          l = l || {};
          for (var y in u)
            u.hasOwnProperty(y) &&
              (l.N && (l["fix_" + y] = !0), (l.G = l.G || l["fix_" + y]));
          var z = {
              comment: /^\x3c!--/,
              endTag: /^<\//,
              atomicTag: /^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,
              startTag: /^</,
              chars: /^[^<]/,
            },
            e = {
              comment: function () {
                var a = h.indexOf("--\x3e");
                if (a >= 0) return { content: h.substr(4, a), length: a + 3 };
              },
              endTag: function () {
                var a = h.match(q);
                if (a) return { tagName: a[1], length: a[0].length };
              },
              atomicTag: function () {
                var a = e.startTag();
                if (a) {
                  var b = h.slice(a.length);
                  if (
                    b.match(new RegExp("</\\s*" + a.tagName + "\\s*>", "i"))
                  ) {
                    var c = b.match(
                      new RegExp(
                        "([\\s\\S]*?)</\\s*" + a.tagName + "\\s*>",
                        "i"
                      )
                    );
                    if (c)
                      return {
                        tagName: a.tagName,
                        g: a.g,
                        content: c[1],
                        length: c[0].length + a.length,
                      };
                  }
                }
              },
              startTag: function () {
                var a = h.match(w);
                if (a) {
                  var b = {};
                  a[2].replace(r, function (c, d) {
                    var k =
                        arguments[2] ||
                        arguments[3] ||
                        arguments[4] ||
                        (B.test(d) && d) ||
                        null,
                      g = document.createElement("div");
                    g.innerHTML = k;
                    b[d] = g.textContent || g.innerText || k;
                  });
                  return {
                    tagName: a[1],
                    g: b,
                    s: !!a[3],
                    length: a[0].length,
                  };
                }
              },
              chars: function () {
                var a = h.indexOf("<");
                return { length: a >= 0 ? a : h.length };
              },
            },
            f = function () {
              for (var a in z)
                if (z[a].test(h)) {
                  var b = e[a]();
                  return b
                    ? ((b.type = b.type || a),
                      (b.text = h.substr(0, b.length)),
                      (h = h.slice(b.length)),
                      b)
                    : null;
                }
            };
          l.G &&
            (function () {
              var a =
                  /^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,
                b = /^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,
                c = [];
              c.H = function () {
                return this[this.length - 1];
              };
              c.v = function (m) {
                var p = this.H();
                return (
                  p && p.tagName && p.tagName.toUpperCase() === m.toUpperCase()
                );
              };
              c.V = function (m) {
                for (var p = 0, x; (x = this[p]); p++)
                  if (x.tagName === m) return !0;
                return !1;
              };
              var d = function (m) {
                  m &&
                    m.type === "startTag" &&
                    (m.s = a.test(m.tagName) || m.s);
                  return m;
                },
                k = f,
                g = function () {
                  h = "</" + c.pop().tagName + ">" + h;
                },
                t = {
                  startTag: function (m) {
                    var p = m.tagName;
                    p.toUpperCase() === "TR" && c.v("TABLE")
                      ? ((h = "<TBODY>" + h), v())
                      : l.oa && b.test(p) && c.V(p)
                      ? c.v(p)
                        ? g()
                        : ((h = "</" + m.tagName + ">" + h), v())
                      : m.s || c.push(m);
                  },
                  endTag: function (m) {
                    c.H()
                      ? l.W && !c.v(m.tagName)
                        ? g()
                        : c.pop()
                      : l.W && (k(), v());
                  },
                },
                v = function () {
                  var m = h,
                    p = d(k());
                  h = m;
                  if (p && t[p.type]) t[p.type](p);
                };
              f = function () {
                v();
                return d(k());
              };
            })();
          return {
            append: function (a) {
              h += a;
            },
            ea: f,
            sa: function (a) {
              for (var b; (b = f()) && (!a[b.type] || a[b.type](b) !== !1); );
            },
            clear: function () {
              var a = h;
              h = "";
              return a;
            },
            ta: function () {
              return h;
            },
            stack: [],
          };
        }
        var u = (function () {
            var h = {},
              l = this.document.createElement("div");
            l.innerHTML = "<P><I></P></I>";
            h.va = l.innerHTML !== "<P><I></P></I>";
            l.innerHTML = "<P><i><P></P></i></P>";
            h.ua = l.childNodes.length === 2;
            return h;
          })(),
          w =
            /^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
          q = /^<\/([\-A-Za-z0-9_]+)[^>]*>/,
          r =
            /([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,
          B =
            /^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;
        n.supports = u;
        for (var A in u);
        E = n;
      })();
      (function () {
        function n() {}
        function u(e) {
          return e !== void 0 && e !== null;
        }
        function w(e, f, a) {
          var b,
            c = (e && e.length) || 0;
          for (b = 0; b < c; b++) f.call(a, e[b], b);
        }
        function q(e, f, a) {
          for (var b in e) e.hasOwnProperty(b) && f.call(a, b, e[b]);
        }
        function r(e, f) {
          q(f, function (a, b) {
            e[a] = b;
          });
          return e;
        }
        function B(e, f) {
          e = e || {};
          q(f, function (a, b) {
            u(e[a]) || (e[a] = b);
          });
          return e;
        }
        function A(e) {
          try {
            return y.call(e);
          } catch (a) {
            var f = [];
            w(e, function (b) {
              f.push(b);
            });
            return f;
          }
        }
        var h = {
            J: n,
            K: n,
            L: n,
            M: n,
            O: n,
            P: function (e) {
              return e;
            },
            done: n,
            error: function (e) {
              throw e;
            },
            fa: !1,
          },
          l = this;
        if (!l.postscribe) {
          var y = Array.prototype.slice,
            z = (function () {
              function e(a, b, c) {
                var d = "data-ps-" + b;
                if (arguments.length === 2) {
                  var k = a.getAttribute(d);
                  return u(k) ? String(k) : k;
                }
                u(c) && c !== "" ? a.setAttribute(d, c) : a.removeAttribute(d);
              }
              function f(a, b) {
                var c = a.ownerDocument;
                r(this, {
                  root: a,
                  options: b,
                  l: c.defaultView || c.parentWindow,
                  i: c,
                  o: E("", { N: !0 }),
                  u: [a],
                  B: "",
                  C: c.createElement(a.nodeName),
                  j: [],
                  h: [],
                });
                e(this.C, "proxyof", 0);
              }
              f.prototype.write = function () {
                [].push.apply(this.h, arguments);
                for (var a; !this.m && this.h.length; )
                  (a = this.h.shift()),
                    "function" === typeof a ? this.U(a) : this.D(a);
              };
              f.prototype.U = function (a) {
                var b = { type: "function", value: a.name || a.toString() };
                this.A(b);
                a.call(this.l, this.i);
                this.I(b);
              };
              f.prototype.D = function (a) {
                this.o.append(a);
                for (
                  var b, c = [], d, k;
                  (b = this.o.ea()) &&
                  !(d =
                    b && "tagName" in b
                      ? !!~b.tagName.toLowerCase().indexOf("script")
                      : !1) &&
                  !(k =
                    b && "tagName" in b
                      ? !!~b.tagName.toLowerCase().indexOf("style")
                      : !1);

                )
                  c.push(b);
                this.ka(c);
                d && this.X(b);
                k && this.Y(b);
              };
              f.prototype.ka = function (a) {
                var b = this.R(a);
                b.F &&
                  ((b.Z = this.B + b.F),
                  (this.B += b.proxy),
                  (this.C.innerHTML = b.Z),
                  this.ia());
              };
              f.prototype.R = function (a) {
                var b = this.u.length,
                  c = [],
                  d = [],
                  k = [];
                w(a, function (g) {
                  c.push(g.text);
                  if (g.g) {
                    if (!/^noscript$/i.test(g.tagName)) {
                      var t = b++;
                      d.push(
                        g.text.replace(/(\/?>)/, " data-ps-id=" + t + " $1")
                      );
                      g.g.id !== "ps-script" &&
                        g.g.id !== "ps-style" &&
                        k.push(
                          g.type === "atomicTag"
                            ? ""
                            : "<" +
                                g.tagName +
                                " data-ps-proxyof=" +
                                t +
                                (g.s ? " />" : ">")
                        );
                    }
                  } else d.push(g.text), k.push(g.type === "endTag" ? g.text : "");
                });
                return {
                  wa: a,
                  raw: c.join(""),
                  F: d.join(""),
                  proxy: k.join(""),
                };
              };
              f.prototype.ia = function () {
                for (var a, b = [this.C]; u((a = b.shift())); ) {
                  var c = a.nodeType === 1;
                  if (!c || !e(a, "proxyof")) {
                    c && ((this.u[e(a, "id")] = a), e(a, "id", null));
                    var d = a.parentNode && e(a.parentNode, "proxyof");
                    d && this.u[d].appendChild(a);
                  }
                  b.unshift.apply(b, A(a.childNodes));
                }
              };
              f.prototype.X = function (a) {
                var b = this.o.clear();
                b && this.h.unshift(b);
                a.src = a.g.src || a.g.ma;
                a.src && this.j.length ? (this.m = a) : this.A(a);
                var c = this;
                this.ja(a, function () {
                  c.I(a);
                });
              };
              f.prototype.Y = function (a) {
                var b = this.o.clear();
                b && this.h.unshift(b);
                a.type = a.g.type || a.g.TYPE || "text/css";
                this.la(a);
                b && this.write();
              };
              f.prototype.la = function (a) {
                var b = this.T(a);
                this.ba(b);
                a.content &&
                  (b.styleSheet && !b.sheet
                    ? (b.styleSheet.cssText = a.content)
                    : b.appendChild(this.i.createTextNode(a.content)));
              };
              f.prototype.T = function (a) {
                var b = this.i.createElement(a.tagName);
                b.setAttribute("type", a.type);
                q(a.g, function (c, d) {
                  b.setAttribute(c, d);
                });
                return b;
              };
              f.prototype.ba = function (a) {
                this.D('<span id="ps-style"/>');
                var b = this.i.getElementById("ps-style");
                b.parentNode.replaceChild(a, b);
              };
              f.prototype.A = function (a) {
                a.ca = this.h;
                this.h = [];
                this.j.unshift(a);
              };
              f.prototype.I = function (a) {
                a !== this.j[0]
                  ? this.options.error({
                      message: "Bad script nesting or script finished twice",
                    })
                  : (this.j.shift(),
                    this.write.apply(this, a.ca),
                    !this.j.length &&
                      this.m &&
                      (this.A(this.m), (this.m = null)));
              };
              f.prototype.ja = function (a, b) {
                var c = this.S(a),
                  d = this.ha(c),
                  k = this.options.J;
                a.src &&
                  ((c.src = a.src),
                  this.ga(
                    c,
                    d
                      ? k
                      : function () {
                          b();
                          k();
                        }
                  ));
                try {
                  this.aa(c), (a.src && !d) || b();
                } catch (g) {
                  this.options.error(g), b();
                }
              };
              f.prototype.S = function (a) {
                var b = this.i.createElement(a.tagName);
                q(a.g, function (c, d) {
                  b.setAttribute(c, d);
                });
                a.content && (b.text = a.content);
                return b;
              };
              f.prototype.aa = function (a) {
                this.D('<span id="ps-script"/>');
                var b = this.i.getElementById("ps-script");
                b.parentNode.replaceChild(a, b);
              };
              f.prototype.ga = function (a, b) {
                function c() {
                  a = a.onload = a.onreadystatechange = a.onerror = null;
                }
                var d = this.options.error;
                r(a, {
                  onload: function () {
                    c();
                    b();
                  },
                  onreadystatechange: function () {
                    /^(loaded|complete)$/.test(a.readyState) && (c(), b());
                  },
                  onerror: function () {
                    var k = { message: "remote script failed " + a.src };
                    c();
                    d(k);
                    b();
                  },
                });
              };
              f.prototype.ha = function (a) {
                return (
                  !/^script$/i.test(a.nodeName) ||
                  !!(this.options.fa && a.src && a.hasAttribute("async"))
                );
              };
              return f;
            })();
          l.postscribe = (function () {
            function e() {
              var d = b.shift(),
                k;
              d &&
                ((k = d[d.length - 1]),
                k.K(),
                (d.stream = f.apply(null, d)),
                k.L());
            }
            function f(d, k, g) {
              function t(x) {
                x = g.P(x);
                c.write(x);
                g.M(x);
              }
              c = new z(d, g);
              c.id = a++;
              c.name = g.name || c.id;
              var v = d.ownerDocument,
                m = {
                  close: v.close,
                  open: v.open,
                  write: v.write,
                  writeln: v.writeln,
                };
              r(v, {
                close: n,
                open: n,
                write: function () {
                  return t(A(arguments).join(""));
                },
                writeln: function () {
                  return t(A(arguments).join("") + "\n");
                },
              });
              var p = c.l.onerror || n;
              c.l.onerror = function (x, G, H) {
                g.error({ qa: x + " - " + G + ":" + H });
                p.apply(c.l, arguments);
              };
              c.write(k, function () {
                r(v, m);
                c.l.onerror = p;
                g.done();
                c = null;
                e();
              });
              return c;
            }
            var a = 0,
              b = [],
              c = null;
            return r(
              function (d, k, g) {
                "function" === typeof g && (g = { done: g });
                g = B(g, h);
                d = /^#/.test(d)
                  ? l.document.getElementById(d.substr(1))
                  : d.pa
                  ? d[0]
                  : d;
                var t = [d, k, g];
                d.da = {
                  cancel: function () {
                    t.stream ? t.stream.abort() : (t[1] = n);
                  },
                };
                g.O(t);
                b.push(t);
                c || e();
                return d.da;
              },
              { streams: {}, ra: b, na: z }
            );
          })();
          F = l.postscribe;
        }
      })();
      D(
        "google_tag_manager_external.postscribe.installPostscribe",
        function () {
          var n = window.google_tag_manager;
          n && (n.postscribe || (n.postscribe = window.postscribe || F));
        }
      );
      D("google_tag_manager_external.postscribe.getPostscribe", function () {
        return window.google_tag_manager.postscribe;
      });
    }).call(this);
  } catch {}

  var h,
    aa = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    ca =
      typeof Object.defineProperties == "function"
        ? Object.defineProperty
        : function (a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a;
          },
    ia = function (a) {
      for (
        var b = [
            "object" == typeof globalThis && globalThis,
            a,
            "object" == typeof window && window,
            "object" == typeof self && self,
            "object" == typeof global && global,
          ],
          c = 0;
        c < b.length;
        ++c
      ) {
        var d = b[c];
        if (d && d.Math == Math) return d;
      }
      throw Error("Cannot find global object");
    },
    ja = ia(this),
    ka = function (a, b) {
      if (b)
        a: {
          for (var c = ja, d = a.split("."), e = 0; e < d.length - 1; e++) {
            var f = d[e];
            if (!(f in c)) break a;
            c = c[f];
          }
          var g = d[d.length - 1],
            k = c[g],
            m = b(k);
          m != k &&
            m != null &&
            ca(c, g, { configurable: !0, writable: !0, value: m });
        }
    };
  ka("Symbol", function (a) {
    if (a) return a;
    var b = function (f, g) {
      this.j = f;
      ca(this, "description", { configurable: !0, writable: !0, value: g });
    };
    b.prototype.toString = function () {
      return this.j;
    };
    var c = "jscomp_symbol_" + ((Math.random() * 1e9) >>> 0) + "_",
      d = 0,
      e = function (f) {
        if (this instanceof e)
          throw new TypeError("Symbol is not a constructor");
        return new b(c + (f || "") + "_" + d++, f);
      };
    return e;
  });
  var la =
      typeof Object.create == "function"
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    ma;
  if (typeof Object.setPrototypeOf == "function") ma = Object.setPrototypeOf;
  else {
    var na;
    a: {
      var oa = { a: !0 },
        pa = {};
      try {
        pa.__proto__ = oa;
        na = pa.a;
        break a;
      } catch (a) {}
      na = !1;
    }
    ma = na
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var qa = ma,
    ra = function (a, b) {
      a.prototype = la(b.prototype);
      a.prototype.constructor = a;
      if (qa) qa(a, b);
      else
        for (var c in b)
          if (c != "prototype")
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.uo = b.prototype;
    },
    l = function (a) {
      var b =
        typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
      if (b) return b.call(a);
      if (typeof a.length == "number") return { next: aa(a) };
      throw Error(String(a) + " is not an iterable or ArrayLike");
    },
    sa = function (a) {
      for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
      return c;
    },
    ua = function (a) {
      return a instanceof Array ? a : sa(l(a));
    },
    xa = function (a) {
      return wa(a, a);
    },
    wa = function (a, b) {
      a.raw = b;
      Object.freeze && (Object.freeze(a), Object.freeze(b));
      return a;
    },
    ya =
      typeof Object.assign == "function"
        ? Object.assign
        : function (a, b) {
            for (var c = 1; c < arguments.length; c++) {
              var d = arguments[c];
              if (d)
                for (var e in d)
                  Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e]);
            }
            return a;
          };
  ka("Object.assign", function (a) {
    return a || ya;
  });
  var za = function () {
    for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
      b[c - a] = arguments[c];
    return b;
  }; /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var Aa = this || self;
  var Ba = function (a, b) {
    this.type = a;
    this.data = b;
  };
  var Ca = function () {
    this.map = {};
    this.j = {};
  };
  h = Ca.prototype;
  h.get = function (a) {
    return this.map["dust." + a];
  };
  h.set = function (a, b) {
    var c = "dust." + a;
    this.j.hasOwnProperty(c) || (this.map[c] = b);
  };
  h.ri = function (a, b) {
    this.set(a, b);
    this.j["dust." + a] = !0;
  };
  h.has = function (a) {
    return this.map.hasOwnProperty("dust." + a);
  };
  h.remove = function (a) {
    var b = "dust." + a;
    this.j.hasOwnProperty(b) || delete this.map[b];
  };
  var Da = function (a, b) {
    var c = [],
      d;
    for (d in a.map)
      if (a.map.hasOwnProperty(d)) {
        var e = d.substring(5);
        switch (b) {
          case 1:
            c.push(e);
            break;
          case 2:
            c.push(a.map[d]);
            break;
          case 3:
            c.push([e, a.map[d]]);
        }
      }
    return c;
  };
  Ca.prototype.ka = function () {
    return Da(this, 1);
  };
  Ca.prototype.Vb = function () {
    return Da(this, 2);
  };
  Ca.prototype.Db = function () {
    return Da(this, 3);
  };
  var Ea = function () {};
  Ea.prototype.reset = function () {};
  var Fa = function (a, b) {
    this.K = a;
    this.parent = b;
    this.j = this.C = void 0;
    this.sc = !1;
    this.H = function (c, d, e) {
      return c.apply(d, e);
    };
    this.values = new Ca();
  };
  Fa.prototype.add = function (a, b) {
    Ga(this, a, b, !1);
  };
  var Ga = function (a, b, c, d) {
    a.sc || (d ? a.values.ri(b, c) : a.values.set(b, c));
  };
  Fa.prototype.set = function (a, b) {
    this.sc ||
      (!this.values.has(a) && this.parent && this.parent.has(a)
        ? this.parent.set(a, b)
        : this.values.set(a, b));
  };
  Fa.prototype.get = function (a) {
    return this.values.has(a)
      ? this.values.get(a)
      : this.parent
      ? this.parent.get(a)
      : void 0;
  };
  Fa.prototype.has = function (a) {
    return !!this.values.has(a) || !(!this.parent || !this.parent.has(a));
  };
  var Ha = function (a) {
    var b = new Fa(a.K, a);
    a.C && (b.C = a.C);
    b.H = a.H;
    b.j = a.j;
    return b;
  };
  Fa.prototype.Id = function () {
    return this.K;
  };
  Fa.prototype.Ia = function () {
    this.sc = !0;
  };
  function Ia(a, b) {
    for (
      var c, d = l(b), e = d.next();
      !e.done && !((c = Ja(a, e.value)), c instanceof Ba);
      e = d.next()
    );
    return c;
  }
  function Ja(a, b) {
    try {
      var c = l(b),
        d = c.next().value,
        e = sa(c),
        f = a.get(String(d));
      if (!f || typeof f.invoke !== "function")
        throw Error("Attempting to execute non-function " + b[0] + ".");
      return f.invoke.apply(f, [a].concat(ua(e)));
    } catch (k) {
      var g = a.C;
      g && g(k, b.context ? { id: b[0], line: b.context.line } : null);
      throw k;
    }
  }
  var Ka = function () {
    this.C = new Ea();
    this.j = new Fa(this.C);
  };
  h = Ka.prototype;
  h.Id = function () {
    return this.C;
  };
  h.execute = function (a) {
    return this.oi([a].concat(ua(za.apply(1, arguments))));
  };
  h.oi = function () {
    for (
      var a, b = l(za.apply(0, arguments)), c = b.next();
      !c.done;
      c = b.next()
    )
      a = Ja(this.j, c.value);
    return a;
  };
  h.xl = function (a) {
    var b = za.apply(1, arguments),
      c = Ha(this.j);
    c.j = a;
    for (var d, e = l(b), f = e.next(); !f.done; f = e.next())
      d = Ja(c, f.value);
    return d;
  };
  h.Ia = function () {
    this.j.Ia();
  };
  var Ma = function () {
    this.la = !1;
    this.R = new Ca();
  };
  h = Ma.prototype;
  h.get = function (a) {
    return this.R.get(a);
  };
  h.set = function (a, b) {
    this.la || this.R.set(a, b);
  };
  h.has = function (a) {
    return this.R.has(a);
  };
  h.ri = function (a, b) {
    this.la || this.R.ri(a, b);
  };
  h.remove = function (a) {
    this.la || this.R.remove(a);
  };
  h.ka = function () {
    return this.R.ka();
  };
  h.Vb = function () {
    return this.R.Vb();
  };
  h.Db = function () {
    return this.R.Db();
  };
  h.Ia = function () {
    this.la = !0;
  };
  h.sc = function () {
    return this.la;
  };
  function Oa() {
    for (var a = Pa, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }
  function Qa() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + ".";
  }
  var Pa, Ra;
  function Sa(a) {
    Pa = Pa || Qa();
    Ra = Ra || Oa();
    for (var b = [], c = 0; c < a.length; c += 3) {
      var d = c + 1 < a.length,
        e = c + 2 < a.length,
        f = a.charCodeAt(c),
        g = d ? a.charCodeAt(c + 1) : 0,
        k = e ? a.charCodeAt(c + 2) : 0,
        m = f >> 2,
        n = ((f & 3) << 4) | (g >> 4),
        p = ((g & 15) << 2) | (k >> 6),
        q = k & 63;
      e || ((q = 64), d || (p = 64));
      b.push(Pa[m], Pa[n], Pa[p], Pa[q]);
    }
    return b.join("");
  }
  function Ta(a) {
    function b(m) {
      for (; d < a.length; ) {
        var n = a.charAt(d++),
          p = Ra[n];
        if (p != null) return p;
        if (!/^[\s\xa0]*$/.test(n))
          throw Error("Unknown base64 encoding at char: " + n);
      }
      return m;
    }
    Pa = Pa || Qa();
    Ra = Ra || Oa();
    for (var c = "", d = 0; ; ) {
      var e = b(-1),
        f = b(0),
        g = b(64),
        k = b(64);
      if (k === 64 && e === -1) return c;
      c += String.fromCharCode((e << 2) | (f >> 4));
      g !== 64 &&
        ((c += String.fromCharCode(((f << 4) & 240) | (g >> 2))),
        k !== 64 && (c += String.fromCharCode(((g << 6) & 192) | k)));
    }
  }
  var Ua = {};
  function Va(a, b) {
    Ua[a] = Ua[a] || [];
    Ua[a][b] = !0;
  }
  function Wa(a) {
    var b = Ua[a];
    if (!b || b.length === 0) return "";
    for (var c = [], d = 0, e = 0; e < b.length; e++)
      e % 8 === 0 && e > 0 && (c.push(String.fromCharCode(d)), (d = 0)),
        b[e] && (d |= 1 << e % 8);
    d > 0 && c.push(String.fromCharCode(d));
    return Sa(c.join("")).replace(/\.+$/, "");
  }
  function Xa() {
    for (var a = [], b = Ua.fdr || [], c = 0; c < b.length; c++)
      b[c] && a.push(c);
    return a.length > 0 ? a : void 0;
  }
  function Ya() {}
  function Za(a) {
    return typeof a === "function";
  }
  function z(a) {
    return typeof a === "string";
  }
  function $a(a) {
    return typeof a === "number" && !isNaN(a);
  }
  function ab(a) {
    return Array.isArray(a) ? a : [a];
  }
  function bb(a, b) {
    if (a && Array.isArray(a))
      for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
  }
  function db(a, b) {
    if (!$a(a) || !$a(b) || a > b) (a = 0), (b = 2147483647);
    return Math.floor(Math.random() * (b - a + 1) + a);
  }
  function eb(a, b) {
    for (var c = new fb(), d = 0; d < a.length; d++) c.set(a[d], !0);
    for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
    return !1;
  }
  function gb(a, b) {
    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
  }
  function hb(a) {
    return (
      !!a &&
      (Object.prototype.toString.call(a) === "[object Arguments]" ||
        Object.prototype.hasOwnProperty.call(a, "callee"))
    );
  }
  function ib(a) {
    return Math.round(Number(a)) || 0;
  }
  function jb(a) {
    return "false" === String(a).toLowerCase() ? !1 : !!a;
  }
  function kb(a) {
    var b = [];
    if (Array.isArray(a))
      for (var c = 0; c < a.length; c++) b.push(String(a[c]));
    return b;
  }
  function lb(a) {
    return a ? a.replace(/^\s+|\s+$/g, "") : "";
  }
  function mb() {
    return new Date(Date.now());
  }
  function nb() {
    return mb().getTime();
  }
  var fb = function () {
    this.prefix = "gtm.";
    this.values = {};
  };
  fb.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b;
  };
  fb.prototype.get = function (a) {
    return this.values[this.prefix + a];
  };
  fb.prototype.contains = function (a) {
    return this.get(a) !== void 0;
  };
  function ob(a, b, c) {
    return a && a.hasOwnProperty(b) ? a[b] : c;
  }
  function pb(a) {
    var b = a;
    return function () {
      if (b) {
        var c = b;
        b = void 0;
        try {
          c();
        } catch (d) {}
      }
    };
  }
  function qb(a, b) {
    for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
  }
  function rb(a, b) {
    for (var c = [], d = 0; d < a.length; d++)
      c.push(a[d]), c.push.apply(c, b[a[d]] || []);
    return c;
  }
  function sb(a, b) {
    return a.length >= b.length && a.substring(0, b.length) === b;
  }
  function tb(a, b) {
    return (
      a.length >= b.length && a.substring(a.length - b.length, a.length) === b
    );
  }
  function ub(a, b) {
    var c = B;
    b = b || [];
    for (var d = c, e = 0; e < a.length - 1; e++) {
      if (!d.hasOwnProperty(a[e])) return;
      d = d[a[e]];
      if (b.indexOf(d) >= 0) return;
    }
    return d;
  }
  function vb(a, b) {
    for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
      d = d[e[f]] = {};
    d[e[e.length - 1]] = b;
    return c;
  }
  var wb = /^\w{1,9}$/;
  function xb(a, b) {
    a = a || {};
    b = b || ",";
    var c = [];
    gb(a, function (d, e) {
      wb.test(d) && e && c.push(d);
    });
    return c.join(b);
  }
  function yb(a, b) {
    function c() {
      e && ++d === b && (e(), (e = null), (c.done = !0));
    }
    var d = 0,
      e = a;
    c.done = !1;
    return c;
  }
  function zb(a) {
    if (!a) return a;
    var b = a;
    try {
      b = decodeURIComponent(a);
    } catch (d) {}
    var c = b.split(",");
    return c.length === 2 && c[0] === c[1] ? c[0] : a;
  }
  function Ab(a, b, c) {
    function d(n) {
      var p = n.split("=")[0];
      if (a.indexOf(p) < 0) return n;
      if (c !== void 0) return p + "=" + c;
    }
    function e(n) {
      return n
        .split("&")
        .map(d)
        .filter(function (p) {
          return p !== void 0;
        })
        .join("&");
    }
    var f = b.href.split(/[?#]/)[0],
      g = b.search,
      k = b.hash;
    g[0] === "?" && (g = g.substring(1));
    k[0] === "#" && (k = k.substring(1));
    g = e(g);
    k = e(k);
    g !== "" && (g = "?" + g);
    k !== "" && (k = "#" + k);
    var m = "" + f + g + k;
    m[m.length - 1] === "/" && (m = m.substring(0, m.length - 1));
    return m;
  }
  function Bb(a) {
    for (var b = 0; b < 3; ++b)
      try {
        var c = decodeURIComponent(a).replace(/\+/g, " ");
        if (c === a) break;
        a = c;
      } catch (d) {
        return "";
      }
    return a;
  } /*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
  var Cb = globalThis.trustedTypes,
    Db;
  function Eb() {
    var a = null;
    if (!Cb) return a;
    try {
      var b = function (c) {
        return c;
      };
      a = Cb.createPolicy("goog#html", {
        createHTML: b,
        createScript: b,
        createScriptURL: b,
      });
    } catch (c) {}
    return a;
  }
  function Fb() {
    Db === void 0 && (Db = Eb());
    return Db;
  }
  var Gb = function (a) {
    this.j = a;
  };
  Gb.prototype.toString = function () {
    return this.j + "";
  };
  function Hb(a) {
    var b = a,
      c = Fb();
    return new Gb(c ? c.createScriptURL(b) : b);
  }
  function Ib(a) {
    if (a instanceof Gb) return a.j;
    throw Error("");
  }
  var Jb = xa([""]),
    Kb = wa(["\x00"], ["\\0"]),
    Lb = wa(["\n"], ["\\n"]),
    Mb = wa(["\x00"], ["\\u0000"]);
  function Nb(a) {
    return a.toString().indexOf("`") === -1;
  }
  Nb(function (a) {
    return a(Jb);
  }) ||
    Nb(function (a) {
      return a(Kb);
    }) ||
    Nb(function (a) {
      return a(Lb);
    }) ||
    Nb(function (a) {
      return a(Mb);
    });
  var Ob = function (a) {
    this.j = a;
  };
  Ob.prototype.toString = function () {
    return this.j;
  };
  var Pb = function (a) {
    this.Mm = a;
  };
  function Qb(a) {
    return new Pb(function (b) {
      return b.substr(0, a.length + 1).toLowerCase() === a + ":";
    });
  }
  var Rb = [
    Qb("data"),
    Qb("http"),
    Qb("https"),
    Qb("mailto"),
    Qb("ftp"),
    new Pb(function (a) {
      return /^[^:]*([/?#]|$)/.test(a);
    }),
  ];
  function Sb(a) {
    var b;
    b = b === void 0 ? Rb : b;
    if (a instanceof Ob) return a;
    for (var c = 0; c < b.length; ++c) {
      var d = b[c];
      if (d instanceof Pb && d.Mm(a)) return new Ob(a);
    }
  }
  var Tb = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
  function Ub(a) {
    var b;
    if (a instanceof Ob)
      if (a instanceof Ob) b = a.j;
      else throw Error("");
    else b = Tb.test(a) ? a : void 0;
    return b;
  }
  var Wb = function () {
    this.j = Vb[0].toLowerCase();
  };
  Wb.prototype.toString = function () {
    return this.j;
  };
  var Xb = function (a) {
    this.j = a;
  };
  Xb.prototype.toString = function () {
    return this.j + "";
  };
  function Yb(a, b) {
    var c = [new Wb()];
    if (c.length === 0) throw Error("");
    var d = c.map(function (f) {
        var g;
        if (f instanceof Wb) g = f.j;
        else throw Error("");
        return g;
      }),
      e = b.toLowerCase();
    if (
      d.every(function (f) {
        return e.indexOf(f) !== 0;
      })
    )
      throw Error(
        'Attribute "' + b + '" does not match any of the allowed prefixes.'
      );
    a.setAttribute(b, "true");
  }
  function Zb(a, b) {
    var c = Ub(b);
    c !== void 0 && (a.action = c);
  }
  var $b = Array.prototype.indexOf
    ? function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0);
      }
    : function (a, b) {
        if (typeof a === "string")
          return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1;
      };
  "ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT"
    .split(" ")
    .concat(["BUTTON", "INPUT"]);
  function ac(a) {
    return a === null ? "null" : a === void 0 ? "undefined" : a;
  }
  var B = window,
    bc = window.history,
    E = document,
    cc = navigator;
  function dc() {
    var a;
    try {
      a = cc.serviceWorker;
    } catch (b) {
      return;
    }
    return a;
  }
  var ec = E.currentScript,
    fc = ec && ec.src;
  function gc(a, b) {
    var c = B[a];
    B[a] = c === void 0 ? b : c;
    return B[a];
  }
  function hc(a) {
    return (cc.userAgent || "").indexOf(a) !== -1;
  }
  var ic = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
    jc = { onload: 1, src: 1, width: 1, height: 1, style: 1 };
  function kc(a, b, c) {
    b &&
      gb(b, function (d, e) {
        d = d.toLowerCase();
        c.hasOwnProperty(d) || a.setAttribute(d, e);
      });
  }
  function mc(a, b, c, d, e) {
    var f = E.createElement("script");
    kc(f, d, ic);
    f.type = "text/javascript";
    f.async = d && d.async === !1 ? !1 : !0;
    var g;
    g = Hb(ac(a));
    f.src = Ib(g);
    var k,
      m = (f.ownerDocument && f.ownerDocument.defaultView) || window;
    m = m === void 0 ? document : m;
    var n,
      p,
      q =
        (p = (n = "document" in m ? m.document : m).querySelector) == null
          ? void 0
          : p.call(n, "script[nonce]");
    (k = q == null ? "" : q.nonce || q.getAttribute("nonce") || "") &&
      f.setAttribute("nonce", k);
    b && (f.onload = b);
    c && (f.onerror = c);
    if (e) e.appendChild(f);
    else {
      var r = E.getElementsByTagName("script")[0] || E.body || E.head;
      r.parentNode.insertBefore(f, r);
    }
    return f;
  }
  function nc() {
    if (fc) {
      var a = fc.toLowerCase();
      if (a.indexOf("https://") === 0) return 2;
      if (a.indexOf("http://") === 0) return 3;
    }
    return 1;
  }
  function oc(a, b, c, d, e) {
    var f;
    f = f === void 0 ? !0 : f;
    var g = e,
      k = !1;
    g || ((g = E.createElement("iframe")), (k = !0));
    kc(g, c, jc);
    d &&
      gb(d, function (n, p) {
        g.dataset[n] = p;
      });
    f &&
      ((g.height = "0"),
      (g.width = "0"),
      (g.style.display = "none"),
      (g.style.visibility = "hidden"));
    a !== void 0 && (g.src = a);
    if (k) {
      var m = (E.body && E.body.lastChild) || E.body || E.head;
      m.parentNode.insertBefore(g, m);
    }
    b && (g.onload = b);
    return g;
  }
  function pc(a, b, c, d) {
    qc(a, b, c, d);
  }
  function rc(a, b, c, d) {
    a.addEventListener
      ? a.addEventListener(b, c, !!d)
      : a.attachEvent && a.attachEvent("on" + b, c);
  }
  function sc(a, b, c) {
    a.removeEventListener
      ? a.removeEventListener(b, c, !1)
      : a.detachEvent && a.detachEvent("on" + b, c);
  }
  function H(a) {
    B.setTimeout(a, 0);
  }
  function tc(a, b) {
    return a && b && a.attributes && a.attributes[b]
      ? a.attributes[b].value
      : null;
  }
  function uc(a) {
    var b = a.innerText || a.textContent || "";
    b &&
      b !== " " &&
      ((b = b.replace(/^[\s\xa0]+/g, "")), (b = b.replace(/[\s\xa0]+$/g, "")));
    b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
    return b;
  }
  function vc(a) {
    var b = E.createElement("div"),
      c = b,
      d,
      e = ac("A<div>" + a + "</div>"),
      f = Fb();
    d = new Xb(f ? f.createHTML(e) : e);
    if (c.nodeType === 1 && /^(script|style)$/i.test(c.tagName))
      throw Error("");
    var g;
    if (d instanceof Xb) g = d.j;
    else throw Error("");
    c.innerHTML = g;
    b = b.lastChild;
    for (var k = []; b && b.firstChild; ) k.push(b.removeChild(b.firstChild));
    return k;
  }
  function wc(a, b, c) {
    c = c || 100;
    for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
    for (var f = a, g = 0; f && g <= c; g++) {
      if (d[String(f.tagName).toLowerCase()]) return f;
      f = f.parentElement;
    }
    return null;
  }
  function xc(a, b, c) {
    var d;
    try {
      d = cc.sendBeacon && cc.sendBeacon(a);
    } catch (e) {
      Va("TAGGING", 15);
    }
    d ? b == null || b() : qc(a, b, c);
  }
  function yc(a, b) {
    try {
      return cc.sendBeacon(a, b);
    } catch (c) {
      Va("TAGGING", 15);
    }
    return !1;
  }
  var zc = {
    cache: "no-store",
    credentials: "include",
    keepalive: !0,
    method: "POST",
    mode: "no-cors",
    redirect: "follow",
  };
  function Ac(a, b, c, d, e) {
    if (Bc()) {
      var f = Object.assign({}, zc);
      b && (f.body = b);
      c &&
        (c.attributionReporting &&
          (f.attributionReporting = c.attributionReporting),
        c.browsingTopics && (f.browsingTopics = c.browsingTopics));
      try {
        var g = B.fetch(a, f);
        if (g)
          return (
            g
              .then(function (m) {
                m && m.ok ? d == null || d() : e == null || e();
              })
              .catch(function () {
                e == null || e();
              }),
            !0
          );
      } catch (m) {}
    }
    if (c && c.sk) return e == null || e(), !1;
    if (b) {
      var k = yc(a, b);
      k ? d == null || d() : e == null || e();
      return k;
    }
    xc(a, d, e);
    return !0;
  }
  function Bc() {
    return typeof B.fetch === "function";
  }
  function Cc(a, b) {
    var c = a[b];
    c && typeof c.animVal === "string" && (c = c.animVal);
    return c;
  }
  function Dc() {
    var a = B.performance;
    if (a && Za(a.now)) return a.now();
  }
  function Ec() {
    var a,
      b = B.performance;
    if (b && b.getEntriesByType)
      try {
        var c = b.getEntriesByType("navigation");
        c && c.length > 0 && (a = c[0].type);
      } catch (d) {
        return "e";
      }
    if (!a) return "u";
    switch (a) {
      case "navigate":
        return "n";
      case "back_forward":
        return "h";
      case "reload":
        return "r";
      case "prerender":
        return "p";
      default:
        return "x";
    }
  }
  function Fc() {
    return B.performance || void 0;
  }
  function Gc() {
    var a = B.webPixelsManager;
    return a ? a.createShopifyExtend !== void 0 : !1;
  }
  var qc = function (a, b, c, d) {
    var e = new Image(1, 1);
    kc(e, d, {});
    e.onload = function () {
      e.onload = null;
      b && b();
    };
    e.onerror = function () {
      e.onerror = null;
      c && c();
    };
    e.src = a;
    return e;
  };
  function Hc(a, b) {
    return this.evaluate(a) && this.evaluate(b);
  }
  function Ic(a, b) {
    return this.evaluate(a) === this.evaluate(b);
  }
  function Jc(a, b) {
    return this.evaluate(a) || this.evaluate(b);
  }
  function Kc(a, b) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    return String(a).indexOf(String(b)) > -1;
  }
  function Lc(a, b) {
    var c = String(this.evaluate(a)),
      d = String(this.evaluate(b));
    return c.substring(0, d.length) === d;
  }
  function Mc(a, b) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    switch (a) {
      case "pageLocation":
        var c = B.location.href;
        b instanceof Ma &&
          b.get("stripProtocol") &&
          (c = c.replace(/^https?:\/\//, ""));
        return c;
    }
  } /*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license.
*/
  var Nc = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    Oc = function (a) {
      if (a == null) return String(a);
      var b = Nc.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object";
    },
    Pc = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    Qc = function (a) {
      if (!a || Oc(a) != "object" || a.nodeType || a == a.window) return !1;
      try {
        if (
          a.constructor &&
          !Pc(a, "constructor") &&
          !Pc(a.constructor.prototype, "isPrototypeOf")
        )
          return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return b === void 0 || Pc(a, b);
    },
    Rc = function (a, b) {
      var c = b || (Oc(a) == "array" ? [] : {}),
        d;
      for (d in a)
        if (Pc(a, d)) {
          var e = a[d];
          Oc(e) == "array"
            ? (Oc(c[d]) != "array" && (c[d] = []), (c[d] = Rc(e, c[d])))
            : Qc(e)
            ? (Qc(c[d]) || (c[d] = {}), (c[d] = Rc(e, c[d])))
            : (c[d] = e);
        }
      return c;
    };
  function Sc(a) {
    if (a == void 0 || Array.isArray(a) || Qc(a)) return !0;
    switch (typeof a) {
      case "boolean":
      case "number":
      case "string":
      case "function":
        return !0;
    }
    return !1;
  }
  function Tc(a) {
    return (
      (typeof a === "number" && a >= 0 && isFinite(a) && a % 1 === 0) ||
      (typeof a === "string" && a[0] !== "-" && a === "" + parseInt(a))
    );
  }
  var Uc = function (a) {
    a = a === void 0 ? [] : a;
    this.R = new Ca();
    this.values = [];
    this.la = !1;
    for (var b in a)
      a.hasOwnProperty(b) &&
        (Tc(b) ? (this.values[Number(b)] = a[Number(b)]) : this.R.set(b, a[b]));
  };
  h = Uc.prototype;
  h.toString = function (a) {
    if (a && a.indexOf(this) >= 0) return "";
    for (var b = [], c = 0; c < this.values.length; c++) {
      var d = this.values[c];
      d === null || d === void 0
        ? b.push("")
        : d instanceof Uc
        ? ((a = a || []), a.push(this), b.push(d.toString(a)), a.pop())
        : b.push(String(d));
    }
    return b.join(",");
  };
  h.set = function (a, b) {
    if (!this.la)
      if (a === "length") {
        if (!Tc(b))
          throw Error("RangeError: Length property must be a valid integer.");
        this.values.length = Number(b);
      } else Tc(a) ? (this.values[Number(a)] = b) : this.R.set(a, b);
  };
  h.get = function (a) {
    return a === "length"
      ? this.length()
      : Tc(a)
      ? this.values[Number(a)]
      : this.R.get(a);
  };
  h.length = function () {
    return this.values.length;
  };
  h.ka = function () {
    for (var a = this.R.ka(), b = 0; b < this.values.length; b++)
      this.values.hasOwnProperty(b) && a.push(String(b));
    return a;
  };
  h.Vb = function () {
    for (var a = this.R.Vb(), b = 0; b < this.values.length; b++)
      this.values.hasOwnProperty(b) && a.push(this.values[b]);
    return a;
  };
  h.Db = function () {
    for (var a = this.R.Db(), b = 0; b < this.values.length; b++)
      this.values.hasOwnProperty(b) && a.push([String(b), this.values[b]]);
    return a;
  };
  h.remove = function (a) {
    Tc(a) ? delete this.values[Number(a)] : this.la || this.R.remove(a);
  };
  h.pop = function () {
    return this.values.pop();
  };
  h.push = function () {
    return this.values.push.apply(this.values, ua(za.apply(0, arguments)));
  };
  h.shift = function () {
    return this.values.shift();
  };
  h.splice = function (a, b) {
    var c = za.apply(2, arguments);
    return b === void 0 && c.length === 0
      ? new Uc(this.values.splice(a))
      : new Uc(
          this.values.splice.apply(this.values, [a, b || 0].concat(ua(c)))
        );
  };
  h.unshift = function () {
    return this.values.unshift.apply(this.values, ua(za.apply(0, arguments)));
  };
  h.has = function (a) {
    return (Tc(a) && this.values.hasOwnProperty(a)) || this.R.has(a);
  };
  h.Ia = function () {
    this.la = !0;
    Object.freeze(this.values);
  };
  h.sc = function () {
    return this.la;
  };
  function Vc(a) {
    for (var b = [], c = 0; c < a.length(); c++) a.has(c) && (b[c] = a.get(c));
    return b;
  }
  var Wc = function (a, b) {
    this.functionName = a;
    this.Hd = b;
    this.R = new Ca();
    this.la = !1;
  };
  h = Wc.prototype;
  h.toString = function () {
    return this.functionName;
  };
  h.getName = function () {
    return this.functionName;
  };
  h.invoke = function (a) {
    return this.Hd.call.apply(
      this.Hd,
      [new Xc(this, a)].concat(ua(za.apply(1, arguments)))
    );
  };
  h.pb = function (a) {
    var b = za.apply(1, arguments);
    try {
      return this.invoke.apply(this, [a].concat(ua(b)));
    } catch (c) {}
  };
  h.get = function (a) {
    return this.R.get(a);
  };
  h.set = function (a, b) {
    this.la || this.R.set(a, b);
  };
  h.has = function (a) {
    return this.R.has(a);
  };
  h.remove = function (a) {
    this.la || this.R.remove(a);
  };
  h.ka = function () {
    return this.R.ka();
  };
  h.Vb = function () {
    return this.R.Vb();
  };
  h.Db = function () {
    return this.R.Db();
  };
  h.Ia = function () {
    this.la = !0;
  };
  h.sc = function () {
    return this.la;
  };
  var Xc = function (a, b) {
    this.Hd = a;
    this.D = b;
  };
  Xc.prototype.evaluate = function (a) {
    var b = this.D;
    return Array.isArray(a) ? Ja(b, a) : a;
  };
  Xc.prototype.getName = function () {
    return this.Hd.getName();
  };
  Xc.prototype.Id = function () {
    return this.D.Id();
  };
  var Yc = function () {
    this.map = new Map();
  };
  Yc.prototype.set = function (a, b) {
    this.map.set(a, b);
  };
  Yc.prototype.get = function (a) {
    return this.map.get(a);
  };
  var Zc = function () {
    this.keys = [];
    this.values = [];
  };
  Zc.prototype.set = function (a, b) {
    this.keys.push(a);
    this.values.push(b);
  };
  Zc.prototype.get = function (a) {
    var b = this.keys.indexOf(a);
    if (b > -1) return this.values[b];
  };
  function $c() {
    try {
      return Map ? new Yc() : new Zc();
    } catch (a) {
      return new Zc();
    }
  }
  var ad = function (a) {
    if (a instanceof ad) return a;
    if (Sc(a)) throw Error("Type of given value has an equivalent Pixie type.");
    this.value = a;
  };
  ad.prototype.getValue = function () {
    return this.value;
  };
  ad.prototype.toString = function () {
    return String(this.value);
  };
  var cd = function (a) {
    this.promise = a;
    this.la = !1;
    this.R = new Ca();
    this.R.set("then", bd(this));
    this.R.set("catch", bd(this, !0));
    this.R.set("finally", bd(this, !1, !0));
  };
  h = cd.prototype;
  h.get = function (a) {
    return this.R.get(a);
  };
  h.set = function (a, b) {
    this.la || this.R.set(a, b);
  };
  h.has = function (a) {
    return this.R.has(a);
  };
  h.remove = function (a) {
    this.la || this.R.remove(a);
  };
  h.ka = function () {
    return this.R.ka();
  };
  h.Vb = function () {
    return this.R.Vb();
  };
  h.Db = function () {
    return this.R.Db();
  };
  var bd = function (a, b, c) {
    b = b === void 0 ? !1 : b;
    c = c === void 0 ? !1 : c;
    return new Wc("", function (d, e) {
      b && ((e = d), (d = void 0));
      c && (e = d);
      d instanceof Wc || (d = void 0);
      e instanceof Wc || (e = void 0);
      var f = Ha(this.D),
        g = function (m) {
          return function (n) {
            return c ? (m.invoke(f), a.promise) : m.invoke(f, n);
          };
        },
        k = a.promise.then(d && g(d), e && g(e));
      return new cd(k);
    });
  };
  cd.prototype.Ia = function () {
    this.la = !0;
  };
  cd.prototype.sc = function () {
    return this.la;
  };
  function I(a, b, c) {
    var d = $c(),
      e = function (g, k) {
        for (var m = g.ka(), n = 0; n < m.length; n++) k[m[n]] = f(g.get(m[n]));
      },
      f = function (g) {
        var k = d.get(g);
        if (k) return k;
        if (g instanceof Uc) {
          var m = [];
          d.set(g, m);
          for (var n = g.ka(), p = 0; p < n.length; p++)
            m[n[p]] = f(g.get(n[p]));
          return m;
        }
        if (g instanceof cd) return g.promise;
        if (g instanceof Ma) {
          var q = {};
          d.set(g, q);
          e(g, q);
          return q;
        }
        if (g instanceof Wc) {
          var r = function () {
            for (
              var v = za.apply(0, arguments), t = [], w = 0;
              w < v.length;
              w++
            )
              t[w] = dd(v[w], b, c);
            var x = new Fa(b ? b.Id() : new Ea());
            b && (x.j = b.j);
            return f(g.invoke.apply(g, [x].concat(ua(t))));
          };
          d.set(g, r);
          e(g, r);
          return r;
        }
        var u = !1;
        switch (c) {
          case 1:
            u = !0;
            break;
          case 2:
            u = !1;
            break;
          case 3:
            u = !1;
            break;
          default:
        }
        if (g instanceof ad && u) return g.getValue();
        switch (typeof g) {
          case "boolean":
          case "number":
          case "string":
          case "undefined":
            return g;
          case "object":
            if (g === null) return null;
        }
      };
    return f(a);
  }
  function dd(a, b, c) {
    var d = $c(),
      e = function (g, k) {
        for (var m in g) g.hasOwnProperty(m) && k.set(m, f(g[m]));
      },
      f = function (g) {
        var k = d.get(g);
        if (k) return k;
        if (Array.isArray(g) || hb(g)) {
          var m = new Uc([]);
          d.set(g, m);
          for (var n in g) g.hasOwnProperty(n) && m.set(n, f(g[n]));
          return m;
        }
        if (Qc(g)) {
          var p = new Ma();
          d.set(g, p);
          e(g, p);
          return p;
        }
        if (typeof g === "function") {
          var q = new Wc("", function () {
            for (var x = za.apply(0, arguments), y = 0; y < x.length; y++)
              x[y] = I(this.evaluate(x[y]), b, c);
            return f((0, this.D.H)(g, g, x));
          });
          d.set(g, q);
          e(g, q);
          return q;
        }
        var t = typeof g;
        if (g === null || t === "string" || t === "number" || t === "boolean")
          return g;
        var w = !1;
        switch (c) {
          case 1:
            w = !0;
            break;
          case 2:
            w = !1;
            break;
          default:
        }
        if (g !== void 0 && w) return new ad(g);
      };
    return f(a);
  }
  function ed() {
    var a = !1;
    return a;
  }
  var fd = {
    supportedMethods:
      "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(
        " "
      ),
    concat: function (a) {
      for (var b = [], c = 0; c < this.length(); c++) b.push(this.get(c));
      for (var d = 1; d < arguments.length; d++)
        if (arguments[d] instanceof Uc)
          for (var e = arguments[d], f = 0; f < e.length(); f++)
            b.push(e.get(f));
        else b.push(arguments[d]);
      return new Uc(b);
    },
    every: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && !b.invoke(a, this.get(d), d, this)) return !1;
      return !0;
    },
    filter: function (a, b) {
      for (
        var c = this.length(), d = [], e = 0;
        e < this.length() && e < c;
        e++
      )
        this.has(e) && b.invoke(a, this.get(e), e, this) && d.push(this.get(e));
      return new Uc(d);
    },
    forEach: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        this.has(d) && b.invoke(a, this.get(d), d, this);
    },
    hasOwnProperty: function (a, b) {
      return this.has(b);
    },
    indexOf: function (a, b, c) {
      var d = this.length(),
        e = c === void 0 ? 0 : Number(c);
      e < 0 && (e = Math.max(d + e, 0));
      for (var f = e; f < d; f++)
        if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    join: function (a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      return c.join(b);
    },
    lastIndexOf: function (a, b, c) {
      var d = this.length(),
        e = d - 1;
      c !== void 0 && (e = c < 0 ? d + c : Math.min(c, e));
      for (var f = e; f >= 0; f--)
        if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    map: function (a, b) {
      for (
        var c = this.length(), d = [], e = 0;
        e < this.length() && e < c;
        e++
      )
        this.has(e) && (d[e] = b.invoke(a, this.get(e), e, this));
      return new Uc(d);
    },
    pop: function () {
      return this.pop();
    },
    push: function (a) {
      return this.push.apply(this, ua(za.apply(1, arguments)));
    },
    reduce: function (a, b, c) {
      var d = this.length(),
        e,
        f = 0;
      if (c !== void 0) e = c;
      else {
        if (d === 0) throw Error("TypeError: Reduce on List with no elements.");
        for (var g = 0; g < d; g++)
          if (this.has(g)) {
            e = this.get(g);
            f = g + 1;
            break;
          }
        if (g === d) throw Error("TypeError: Reduce on List with no elements.");
      }
      for (var k = f; k < d; k++)
        this.has(k) && (e = b.invoke(a, e, this.get(k), k, this));
      return e;
    },
    reduceRight: function (a, b, c) {
      var d = this.length(),
        e,
        f = d - 1;
      if (c !== void 0) e = c;
      else {
        if (d === 0)
          throw Error("TypeError: ReduceRight on List with no elements.");
        for (var g = 1; g <= d; g++)
          if (this.has(d - g)) {
            e = this.get(d - g);
            f = d - (g + 1);
            break;
          }
        if (g > d)
          throw Error("TypeError: ReduceRight on List with no elements.");
      }
      for (var k = f; k >= 0; k--)
        this.has(k) && (e = b.invoke(a, e, this.get(k), k, this));
      return e;
    },
    reverse: function () {
      for (var a = Vc(this), b = a.length - 1, c = 0; b >= 0; b--, c++)
        a.hasOwnProperty(b) ? this.set(c, a[b]) : this.remove(c);
      return this;
    },
    shift: function () {
      return this.shift();
    },
    slice: function (a, b, c) {
      var d = this.length();
      b === void 0 && (b = 0);
      b = b < 0 ? Math.max(d + b, 0) : Math.min(b, d);
      c = c === void 0 ? d : c < 0 ? Math.max(d + c, 0) : Math.min(c, d);
      c = Math.max(b, c);
      for (var e = [], f = b; f < c; f++) e.push(this.get(f));
      return new Uc(e);
    },
    some: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && b.invoke(a, this.get(d), d, this)) return !0;
      return !1;
    },
    sort: function (a, b) {
      var c = Vc(this);
      b === void 0
        ? c.sort()
        : c.sort(function (e, f) {
            return Number(b.invoke(a, e, f));
          });
      for (var d = 0; d < c.length; d++)
        c.hasOwnProperty(d) ? this.set(d, c[d]) : this.remove(d);
      return this;
    },
    splice: function (a, b, c) {
      return this.splice.apply(this, [b, c].concat(ua(za.apply(3, arguments))));
    },
    toString: function () {
      return this.toString();
    },
    unshift: function (a) {
      return this.unshift.apply(this, ua(za.apply(1, arguments)));
    },
  };
  var gd = function (a) {
    var b;
    b = Error.call(this, a);
    this.message = b.message;
    "stack" in b && (this.stack = b.stack);
  };
  ra(gd, Error);
  var hd = {
      charAt: 1,
      concat: 1,
      indexOf: 1,
      lastIndexOf: 1,
      match: 1,
      replace: 1,
      search: 1,
      slice: 1,
      split: 1,
      substring: 1,
      toLowerCase: 1,
      toLocaleLowerCase: 1,
      toString: 1,
      toUpperCase: 1,
      toLocaleUpperCase: 1,
      trim: 1,
    },
    id = new Ba("break"),
    jd = new Ba("continue");
  function kd(a, b) {
    return this.evaluate(a) + this.evaluate(b);
  }
  function ld(a, b) {
    return this.evaluate(a) && this.evaluate(b);
  }
  function md(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    if (!(c instanceof Uc))
      throw Error("Error: Non-List argument given to Apply instruction.");
    if (a === null || a === void 0) {
      var d = "TypeError: Can't read property " + b + " of " + a + ".";
      if (ed()) throw new gd(d);
      throw Error(d);
    }
    var e = typeof a === "number";
    if (typeof a === "boolean" || e) {
      if (b === "toString") {
        if (e && c.length()) {
          var f = I(c.get(0));
          try {
            return a.toString(f);
          } catch (y) {}
        }
        return a.toString();
      }
      var g = "TypeError: " + a + "." + b + " is not a function.";
      if (ed()) throw new gd(g);
      throw Error(g);
    }
    if (typeof a === "string") {
      if (hd.hasOwnProperty(b)) {
        var k = 2;
        k = 1;
        var m = I(c, void 0, k);
        return dd(a[b].apply(a, m), this.D);
      }
      var n = "TypeError: " + b + " is not a function";
      if (ed()) throw new gd(n);
      throw Error(n);
    }
    if (a instanceof Uc) {
      if (a.has(b)) {
        var p = a.get(String(b));
        if (p instanceof Wc) {
          var q = Vc(c);
          return p.invoke.apply(p, [this.D].concat(ua(q)));
        }
        var r = "TypeError: " + b + " is not a function";
        if (ed()) throw new gd(r);
        throw Error(r);
      }
      if (fd.supportedMethods.indexOf(b) >= 0) {
        var u = Vc(c);
        return fd[b].call.apply(fd[b], [a, this.D].concat(ua(u)));
      }
    }
    if (a instanceof Wc || a instanceof Ma || a instanceof cd) {
      if (a.has(b)) {
        var v = a.get(b);
        if (v instanceof Wc) {
          var t = Vc(c);
          return v.invoke.apply(v, [this.D].concat(ua(t)));
        }
        var w = "TypeError: " + b + " is not a function";
        if (ed()) throw new gd(w);
        throw Error(w);
      }
      if (b === "toString") return a instanceof Wc ? a.getName() : a.toString();
      if (b === "hasOwnProperty") return a.has(c.get(0));
    }
    if (a instanceof ad && b === "toString") return a.toString();
    var x = "TypeError: Object has no '" + b + "' property.";
    if (ed()) throw new gd(x);
    throw Error(x);
  }
  function nd(a, b) {
    a = this.evaluate(a);
    if (typeof a !== "string")
      throw Error("Invalid key name given for assignment.");
    var c = this.D;
    if (!c.has(a)) throw Error("Attempting to assign to undefined value " + b);
    var d = this.evaluate(b);
    c.set(a, d);
    return d;
  }
  function od() {
    var a = za.apply(0, arguments),
      b = Ha(this.D),
      c = Ia(b, a);
    if (c instanceof Ba) return c;
  }
  function pd() {
    return id;
  }
  function qd(a) {
    for (var b = this.evaluate(a), c = 0; c < b.length; c++) {
      var d = this.evaluate(b[c]);
      if (d instanceof Ba) return d;
    }
  }
  function rd() {
    for (var a = this.D, b = 0; b < arguments.length - 1; b += 2) {
      var c = arguments[b];
      if (typeof c === "string") {
        var d = this.evaluate(arguments[b + 1]);
        Ga(a, c, d, !0);
      }
    }
  }
  function sd() {
    return jd;
  }
  function td(a, b) {
    return new Ba(a, this.evaluate(b));
  }
  function ud(a, b) {
    var c = za.apply(2, arguments),
      d = new Uc();
    b = this.evaluate(b);
    for (var e = 0; e < b.length; e++) d.push(b[e]);
    var f = [51, a, d].concat(ua(c));
    this.D.add(a, this.evaluate(f));
  }
  function vd(a, b) {
    return this.evaluate(a) / this.evaluate(b);
  }
  function wd(a, b) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    var c = a instanceof ad,
      d = b instanceof ad;
    return c || d ? (c && d ? a.getValue() === b.getValue() : !1) : a == b;
  }
  function xd() {
    for (var a, b = 0; b < arguments.length; b++)
      a = this.evaluate(arguments[b]);
    return a;
  }
  function yd(a, b, c, d) {
    for (var e = 0; e < b(); e++) {
      var f = a(c(e)),
        g = Ia(f, d);
      if (g instanceof Ba) {
        if (g.type === "break") break;
        if (g.type === "return") return g;
      }
    }
  }
  function zd(a, b, c) {
    if (typeof b === "string")
      return yd(
        a,
        function () {
          return b.length;
        },
        function (f) {
          return f;
        },
        c
      );
    if (
      b instanceof Ma ||
      b instanceof cd ||
      b instanceof Uc ||
      b instanceof Wc
    ) {
      var d = b.ka(),
        e = d.length;
      return yd(
        a,
        function () {
          return e;
        },
        function (f) {
          return d[f];
        },
        c
      );
    }
  }
  function Ad(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.D;
    return zd(
      function (e) {
        d.set(a, e);
        return d;
      },
      b,
      c
    );
  }
  function Bd(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.D;
    return zd(
      function (e) {
        var f = Ha(d);
        Ga(f, a, e, !0);
        return f;
      },
      b,
      c
    );
  }
  function Cd(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.D;
    return zd(
      function (e) {
        var f = Ha(d);
        f.add(a, e);
        return f;
      },
      b,
      c
    );
  }
  function Dd(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.D;
    return Ed(
      function (e) {
        d.set(a, e);
        return d;
      },
      b,
      c
    );
  }
  function Fd(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.D;
    return Ed(
      function (e) {
        var f = Ha(d);
        Ga(f, a, e, !0);
        return f;
      },
      b,
      c
    );
  }
  function Gd(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    var d = this.D;
    return Ed(
      function (e) {
        var f = Ha(d);
        f.add(a, e);
        return f;
      },
      b,
      c
    );
  }
  function Ed(a, b, c) {
    if (typeof b === "string")
      return yd(
        a,
        function () {
          return b.length;
        },
        function (d) {
          return b[d];
        },
        c
      );
    if (b instanceof Uc)
      return yd(
        a,
        function () {
          return b.length();
        },
        function (d) {
          return b.get(d);
        },
        c
      );
    if (ed()) throw new gd("The value is not iterable.");
    throw new TypeError("The value is not iterable.");
  }
  function Hd(a, b, c, d) {
    function e(p, q) {
      for (var r = 0; r < f.length(); r++) {
        var u = f.get(r);
        q.add(u, p.get(u));
      }
    }
    var f = this.evaluate(a);
    if (!(f instanceof Uc))
      throw Error("TypeError: Non-List argument given to ForLet instruction.");
    var g = this.D;
    d = this.evaluate(d);
    var k = Ha(g);
    for (e(g, k); Ja(k, b); ) {
      var m = Ia(k, d);
      if (m instanceof Ba) {
        if (m.type === "break") break;
        if (m.type === "return") return m;
      }
      var n = Ha(g);
      e(k, n);
      Ja(n, c);
      k = n;
    }
  }
  function Id(a, b) {
    var c = za.apply(2, arguments),
      d = this.D,
      e = this.evaluate(b);
    if (!(e instanceof Uc))
      throw Error("Error: non-List value given for Fn argument names.");
    return new Wc(
      a,
      (function () {
        return function () {
          var f = za.apply(0, arguments),
            g = Ha(d);
          g.j === void 0 && (g.j = this.D.j);
          for (var k = 0; k < f.length; k++)
            if (((f[k] = this.evaluate(f[k])), f[k] instanceof Ba)) return f[k];
          for (var m = e.get("length"), n = 0; n < m; n++)
            n < f.length ? g.add(e.get(n), f[n]) : g.add(e.get(n), void 0);
          g.add("arguments", new Uc(f));
          var p = Ia(g, c);
          if (p instanceof Ba) return p.type === "return" ? p.data : p;
        };
      })()
    );
  }
  function Jd(a) {
    a = this.evaluate(a);
    var b = this.D;
    if (Kd && !b.has(a)) throw new ReferenceError(a + " is not defined.");
    return b.get(a);
  }
  function Ld(a, b) {
    var c;
    a = this.evaluate(a);
    b = this.evaluate(b);
    if (a === void 0 || a === null) {
      var d =
        "TypeError: Cannot read properties of " + a + " (reading '" + b + "')";
      if (ed()) throw new gd(d);
      throw Error(d);
    }
    if (
      a instanceof Ma ||
      a instanceof cd ||
      a instanceof Uc ||
      a instanceof Wc
    )
      c = a.get(b);
    else if (typeof a === "string")
      b === "length" ? (c = a.length) : Tc(b) && (c = a[b]);
    else if (a instanceof ad) return;
    return c;
  }
  function Md(a, b) {
    return this.evaluate(a) > this.evaluate(b);
  }
  function Nd(a, b) {
    return this.evaluate(a) >= this.evaluate(b);
  }
  function Od(a, b) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    a instanceof ad && (a = a.getValue());
    b instanceof ad && (b = b.getValue());
    return a === b;
  }
  function Pd(a, b) {
    return !Od.call(this, a, b);
  }
  function Qd(a, b, c) {
    var d = [];
    this.evaluate(a) ? (d = this.evaluate(b)) : c && (d = this.evaluate(c));
    var e = Ia(this.D, d);
    if (e instanceof Ba) return e;
  }
  var Kd = !1;
  function Rd(a, b) {
    return this.evaluate(a) < this.evaluate(b);
  }
  function Sd(a, b) {
    return this.evaluate(a) <= this.evaluate(b);
  }
  function Td() {
    for (var a = new Uc(), b = 0; b < arguments.length; b++) {
      var c = this.evaluate(arguments[b]);
      a.push(c);
    }
    return a;
  }
  function Ud() {
    for (var a = new Ma(), b = 0; b < arguments.length - 1; b += 2) {
      var c = this.evaluate(arguments[b]) + "",
        d = this.evaluate(arguments[b + 1]);
      a.set(c, d);
    }
    return a;
  }
  function Vd(a, b) {
    return this.evaluate(a) % this.evaluate(b);
  }
  function Wd(a, b) {
    return this.evaluate(a) * this.evaluate(b);
  }
  function Xd(a) {
    return -this.evaluate(a);
  }
  function Yd(a) {
    return !this.evaluate(a);
  }
  function Zd(a, b) {
    return !wd.call(this, a, b);
  }
  function $d() {
    return null;
  }
  function ae(a, b) {
    return this.evaluate(a) || this.evaluate(b);
  }
  function be(a, b) {
    var c = this.evaluate(a);
    this.evaluate(b);
    return c;
  }
  function ce(a) {
    return this.evaluate(a);
  }
  function de() {
    return za.apply(0, arguments);
  }
  function ee(a) {
    return new Ba("return", this.evaluate(a));
  }
  function fe(a, b, c) {
    a = this.evaluate(a);
    b = this.evaluate(b);
    c = this.evaluate(c);
    if (a === null || a === void 0) {
      var d = "TypeError: Can't set property " + b + " of " + a + ".";
      if (ed()) throw new gd(d);
      throw Error(d);
    }
    (a instanceof Wc || a instanceof Uc || a instanceof Ma) &&
      a.set(String(b), c);
    return c;
  }
  function he(a, b) {
    return this.evaluate(a) - this.evaluate(b);
  }
  function ie(a, b, c) {
    a = this.evaluate(a);
    var d = this.evaluate(b),
      e = this.evaluate(c);
    if (!Array.isArray(d) || !Array.isArray(e))
      throw Error("Error: Malformed switch instruction.");
    for (var f, g = !1, k = 0; k < d.length; k++)
      if (g || a === this.evaluate(d[k]))
        if (((f = this.evaluate(e[k])), f instanceof Ba)) {
          var m = f.type;
          if (m === "break") return;
          if (m === "return" || m === "continue") return f;
        } else g = !0;
    if (
      e.length === d.length + 1 &&
      ((f = this.evaluate(e[e.length - 1])),
      f instanceof Ba && (f.type === "return" || f.type === "continue"))
    )
      return f;
  }
  function je(a, b, c) {
    return this.evaluate(a) ? this.evaluate(b) : this.evaluate(c);
  }
  function ke(a) {
    a = this.evaluate(a);
    return a instanceof Wc ? "function" : typeof a;
  }
  function le() {
    for (var a = this.D, b = 0; b < arguments.length; b++) {
      var c = arguments[b];
      typeof c !== "string" || a.add(c, void 0);
    }
  }
  function me(a, b, c, d) {
    var e = this.evaluate(d);
    if (this.evaluate(c)) {
      var f = Ia(this.D, e);
      if (f instanceof Ba) {
        if (f.type === "break") return;
        if (f.type === "return") return f;
      }
    }
    for (; this.evaluate(a); ) {
      var g = Ia(this.D, e);
      if (g instanceof Ba) {
        if (g.type === "break") break;
        if (g.type === "return") return g;
      }
      this.evaluate(b);
    }
  }
  function ne(a) {
    return ~Number(this.evaluate(a));
  }
  function oe(a, b) {
    return Number(this.evaluate(a)) << Number(this.evaluate(b));
  }
  function pe(a, b) {
    return Number(this.evaluate(a)) >> Number(this.evaluate(b));
  }
  function qe(a, b) {
    return Number(this.evaluate(a)) >>> Number(this.evaluate(b));
  }
  function re(a, b) {
    return Number(this.evaluate(a)) & Number(this.evaluate(b));
  }
  function se(a, b) {
    return Number(this.evaluate(a)) ^ Number(this.evaluate(b));
  }
  function te(a, b) {
    return Number(this.evaluate(a)) | Number(this.evaluate(b));
  }
  function ue() {}
  function ve(a, b, c, d, e) {
    var f = !0;
    try {
      var g = this.evaluate(c);
      if (g instanceof Ba) return g;
    } catch (r) {
      if (!(r instanceof gd && a)) throw ((f = r instanceof gd), r);
      var k = Ha(this.D),
        m = new ad(r);
      k.add(b, m);
      var n = this.evaluate(d),
        p = Ia(k, n);
      if (p instanceof Ba) return p;
    } finally {
      if (f && e !== void 0) {
        var q = this.evaluate(e);
        if (q instanceof Ba) return q;
      }
    }
  }
  var xe = function () {
    this.j = new Ka();
    we(this);
  };
  xe.prototype.execute = function (a) {
    return this.j.oi(a);
  };
  var we = function (a) {
    var b = function (c, d) {
      var e = new Wc(String(c), d);
      e.Ia();
      a.j.j.set(String(c), e);
    };
    b("map", Ud);
    b("and", Hc);
    b("contains", Kc);
    b("equals", Ic);
    b("or", Jc);
    b("startsWith", Lc);
    b("variable", Mc);
  };
  var ze = function () {
    this.C = !1;
    this.j = new Ka();
    ye(this);
    this.C = !0;
  };
  ze.prototype.execute = function (a) {
    return Ae(this.j.oi(a));
  };
  var Be = function (a, b, c) {
    return Ae(a.j.xl(b, c));
  };
  ze.prototype.Ia = function () {
    this.j.Ia();
  };
  var ye = function (a) {
    var b = function (c, d) {
      var e = String(c),
        f = new Wc(e, d);
      f.Ia();
      a.j.j.set(e, f);
    };
    b(0, kd);
    b(1, ld);
    b(2, md);
    b(3, nd);
    b(56, re);
    b(57, oe);
    b(58, ne);
    b(59, te);
    b(60, pe);
    b(61, qe);
    b(62, se);
    b(53, od);
    b(4, pd);
    b(5, qd);
    b(52, rd);
    b(6, sd);
    b(49, td);
    b(7, Td);
    b(8, Ud);
    b(9, qd);
    b(50, ud);
    b(10, vd);
    b(12, wd);
    b(13, xd);
    b(51, Id);
    b(47, Ad);
    b(54, Bd);
    b(55, Cd);
    b(63, Hd);
    b(64, Dd);
    b(65, Fd);
    b(66, Gd);
    b(15, Jd);
    b(16, Ld);
    b(17, Ld);
    b(18, Md);
    b(19, Nd);
    b(20, Od);
    b(21, Pd);
    b(22, Qd);
    b(23, Rd);
    b(24, Sd);
    b(25, Vd);
    b(26, Wd);
    b(27, Xd);
    b(28, Yd);
    b(29, Zd);
    b(45, $d);
    b(30, ae);
    b(32, be);
    b(33, be);
    b(34, ce);
    b(35, ce);
    b(46, de);
    b(36, ee);
    b(43, fe);
    b(37, he);
    b(38, ie);
    b(39, je);
    b(67, ve);
    b(40, ke);
    b(44, ue);
    b(41, le);
    b(42, me);
  };
  ze.prototype.Id = function () {
    return this.j.Id();
  };
  function Ae(a) {
    if (
      a instanceof Ba ||
      a instanceof Wc ||
      a instanceof Uc ||
      a instanceof Ma ||
      a instanceof cd ||
      a instanceof ad ||
      a === null ||
      a === void 0 ||
      typeof a === "string" ||
      typeof a === "number" ||
      typeof a === "boolean"
    )
      return a;
  }
  var Ce = function (a) {
    this.message = a;
  };
  function De(a) {
    var b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
      a
    ];
    return b === void 0
      ? new Ce(
          "Value " + a + " can not be encoded in web-safe base64 dictionary."
        )
      : b;
  }
  function Ee(a) {
    switch (a) {
      case 1:
        return "1";
      case 2:
      case 4:
        return "0";
      default:
        return "-";
    }
  }
  var Fe = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;
  function Ge(a, b) {
    for (var c = "", d = !0; a > 7; ) {
      var e = a & 31;
      a >>= 5;
      d ? (d = !1) : (e |= 32);
      c = "" + De(e) + c;
    }
    a <<= 2;
    d || (a |= 32);
    return (c = "" + De(a | b) + c);
  }
  var He = (function () {
    function a(b) {
      return {
        toString: function () {
          return b;
        },
      };
    }
    return {
      Sk: a("consent"),
      Bi: a("convert_case_to"),
      Ci: a("convert_false_to"),
      Di: a("convert_null_to"),
      Ei: a("convert_true_to"),
      Fi: a("convert_undefined_to"),
      Gn: a("debug_mode_metadata"),
      ra: a("function"),
      xh: a("instance_name"),
      Al: a("live_only"),
      Bl: a("malware_disabled"),
      METADATA: a("metadata"),
      El: a("original_activity_id"),
      Sn: a("original_vendor_template_id"),
      Rn: a("once_on_load"),
      Dl: a("once_per_event"),
      Oj: a("once_per_load"),
      Un: a("priority_override"),
      Vn: a("respected_consent_types"),
      Wj: a("setup_tags"),
      Ie: a("tag_id"),
      dk: a("teardown_tags"),
    };
  })();
  var Je = function (a) {
      return Ie[a];
    },
    Le = function (a) {
      return Ke[a];
    },
    Ne = function (a) {
      return Me[a];
    },
    Oe = [],
    Me = {
      "\x00": "&#0;",
      '"': "&quot;",
      "&": "&amp;",
      "'": "&#39;",
      "<": "&lt;",
      ">": "&gt;",
      "\t": "&#9;",
      "\n": "&#10;",
      "\v": "&#11;",
      "\f": "&#12;",
      "\r": "&#13;",
      " ": "&#32;",
      "-": "&#45;",
      "/": "&#47;",
      "=": "&#61;",
      "`": "&#96;",
      "\u0085": "&#133;",
      "\u00a0": "&#160;",
      "\u2028": "&#8232;",
      "\u2029": "&#8233;",
    },
    Pe = /[\x00\x22\x26\x27\x3c\x3e]/g;
  var Ue = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,
    Ke = {
      "\x00": "\\x00",
      "\b": "\\x08",
      "\t": "\\t",
      "\n": "\\n",
      "\v": "\\x0b",
      "\f": "\\f",
      "\r": "\\r",
      '"': "\\x22",
      "&": "\\x26",
      "'": "\\x27",
      "/": "\\/",
      "<": "\\x3c",
      "=": "\\x3d",
      ">": "\\x3e",
      "\\": "\\\\",
      "\u0085": "\\x85",
      "\u2028": "\\u2028",
      "\u2029": "\\u2029",
      $: "\\x24",
      "(": "\\x28",
      ")": "\\x29",
      "*": "\\x2a",
      "+": "\\x2b",
      ",": "\\x2c",
      "-": "\\x2d",
      ".": "\\x2e",
      ":": "\\x3a",
      "?": "\\x3f",
      "[": "\\x5b",
      "]": "\\x5d",
      "^": "\\x5e",
      "{": "\\x7b",
      "|": "\\x7c",
      "}": "\\x7d",
    };
  Oe[7] = function (a) {
    return String(a).replace(Ue, Le);
  };
  Oe[8] = function (a) {
    if (a == null) return " null ";
    switch (typeof a) {
      case "boolean":
      case "number":
        return " " + a + " ";
      default:
        return "'" + String(String(a)).replace(Ue, Le) + "'";
    }
  };
  var $e = function (a) {
      return "%" + a.charCodeAt(0).toString(16);
    },
    af = /['()]/g;
  Oe[12] = function (a) {
    var b = encodeURIComponent(String(a));
    af.lastIndex = 0;
    return af.test(b) ? b.replace(af, $e) : b;
  };
  var bf =
      /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
    Ie = {
      "\x00": "%00",
      "\u0001": "%01",
      "\u0002": "%02",
      "\u0003": "%03",
      "\u0004": "%04",
      "\u0005": "%05",
      "\u0006": "%06",
      "\u0007": "%07",
      "\b": "%08",
      "\t": "%09",
      "\n": "%0A",
      "\v": "%0B",
      "\f": "%0C",
      "\r": "%0D",
      "\u000e": "%0E",
      "\u000f": "%0F",
      "\u0010": "%10",
      "\u0011": "%11",
      "\u0012": "%12",
      "\u0013": "%13",
      "\u0014": "%14",
      "\u0015": "%15",
      "\u0016": "%16",
      "\u0017": "%17",
      "\u0018": "%18",
      "\u0019": "%19",
      "\u001a": "%1A",
      "\u001b": "%1B",
      "\u001c": "%1C",
      "\u001d": "%1D",
      "\u001e": "%1E",
      "\u001f": "%1F",
      " ": "%20",
      '"': "%22",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "<": "%3C",
      ">": "%3E",
      "\\": "%5C",
      "{": "%7B",
      "}": "%7D",
      "\u007f": "%7F",
      "\u0085": "%C2%85",
      "\u00a0": "%C2%A0",
      "\u2028": "%E2%80%A8",
      "\u2029": "%E2%80%A9",
      "\uff01": "%EF%BC%81",
      "\uff03": "%EF%BC%83",
      "\uff04": "%EF%BC%84",
      "\uff06": "%EF%BC%86",
      "\uff07": "%EF%BC%87",
      "\uff08": "%EF%BC%88",
      "\uff09": "%EF%BC%89",
      "\uff0a": "%EF%BC%8A",
      "\uff0b": "%EF%BC%8B",
      "\uff0c": "%EF%BC%8C",
      "\uff0f": "%EF%BC%8F",
      "\uff1a": "%EF%BC%9A",
      "\uff1b": "%EF%BC%9B",
      "\uff1d": "%EF%BC%9D",
      "\uff1f": "%EF%BC%9F",
      "\uff20": "%EF%BC%A0",
      "\uff3b": "%EF%BC%BB",
      "\uff3d": "%EF%BC%BD",
    };
  Oe[16] = function (a) {
    return a;
  };
  var df;
  var ef = [],
    ff = [],
    gf = [],
    hf = [],
    jf = [],
    kf = {},
    lf,
    mf;
  function nf(a) {
    mf = mf || a;
  }
  function of(a) {}
  var pf,
    qf = [],
    rf = [];
  function sf(a, b) {
    var c = {};
    c[He.ra] = "__" + a;
    for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
    return c;
  }
  function tf(a, b, c) {
    try {
      return lf(uf(a, b, c));
    } catch (d) {
      JSON.stringify(a);
    }
    return 2;
  }
  function vf(a) {
    var b = a[He.ra];
    if (!b) throw Error("Error: No function name given for function call.");
    return !!kf[b];
  }
  var uf = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = wf(a[e], b, c));
      return d;
    },
    wf = function (a, b, c) {
      if (Array.isArray(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push(wf(a[e], b, c));
            return d;
          case "macro":
            var f = a[1];
            if (c[f]) return;
            var g = ef[f];
            if (!g || b.isBlocked(g)) return;
            c[f] = !0;
            var k = String(g[He.xh]);
            try {
              var m = uf(g, b, c);
              m.vtp_gtmEventId = b.id;
              b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
              d = xf(m, { event: b, index: f, type: 2, name: k });
              pf && (d = pf.Tl(d, m));
            } catch (y) {
              b.logMacroError && b.logMacroError(y, Number(f), k), (d = !1);
            }
            c[f] = !1;
            return d;
          case "map":
            d = {};
            for (var n = 1; n < a.length; n += 2)
              d[wf(a[n], b, c)] = wf(a[n + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var p = !1, q = 1; q < a.length; q++) {
              var r = wf(a[q], b, c);
              mf && (p = p || mf.Jm(r));
              d.push(r);
            }
            return mf && p ? mf.Wl(d) : d.join("");
          case "escape":
            d = wf(a[1], b, c);
            if (mf && Array.isArray(a[1]) && a[1][0] === "macro" && mf.Km(a))
              return mf.fn(d);
            d = String(d);
            for (var u = 2; u < a.length; u++) Oe[a[u]] && (d = Oe[a[u]](d));
            return d;
          case "tag":
            var v = a[1];
            if (!hf[v])
              throw Error("Unable to resolve tag reference " + v + ".");
            return { jk: a[2], index: v };
          case "zb":
            var t = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
            t[He.ra] = a[1];
            var w = tf(t, b, c),
              x = !!a[4];
            return x || w !== 2 ? x !== (w === 1) : null;
          default:
            throw Error(
              "Attempting to expand unknown Value type: " + a[0] + "."
            );
        }
      }
      return a;
    },
    xf = function (a, b) {
      var c = a[He.ra],
        d = b && b.event;
      if (!c) throw Error("Error: No function name given for function call.");
      var e = kf[c],
        f =
          b &&
          b.type === 2 &&
          (d == null ? void 0 : d.reportMacroDiscrepancy) &&
          e &&
          qf.indexOf(c) !== -1,
        g = {},
        k = {},
        m;
      for (m in a)
        a.hasOwnProperty(m) &&
          sb(m, "vtp_") &&
          (e && (g[m] = a[m]), !e || f) &&
          (k[m.substring(4)] = a[m]);
      e &&
        d &&
        d.cachedModelValues &&
        (g.vtp_gtmCachedValues = d.cachedModelValues);
      if (b) {
        if (b.name == null) {
          var n;
          a: {
            var p = b.type,
              q = b.index;
            if (q == null) n = "";
            else {
              var r;
              switch (p) {
                case 2:
                  r = ef[q];
                  break;
                case 1:
                  r = hf[q];
                  break;
                default:
                  n = "";
                  break a;
              }
              var u = r && r[He.xh];
              n = u ? String(u) : "";
            }
          }
          b.name = n;
        }
        e && ((g.vtp_gtmEntityIndex = b.index), (g.vtp_gtmEntityName = b.name));
      }
      var v, t, w;
      if (f && rf.indexOf(c) === -1) {
        rf.push(c);
        var x = nb();
        v = e(g);
        var y = nb() - x,
          A = nb();
        t = df(c, k, b);
        w = y - (nb() - A);
      } else if ((e && (v = e(g)), !e || f)) t = df(c, k, b);
      f &&
        d &&
        (d.reportMacroDiscrepancy(d.id, c, void 0, !0),
        Sc(v)
          ? (Array.isArray(v)
              ? Array.isArray(t)
              : Qc(v)
              ? Qc(t)
              : typeof v === "function"
              ? typeof t === "function"
              : v === t) || d.reportMacroDiscrepancy(d.id, c)
          : v !== t && d.reportMacroDiscrepancy(d.id, c),
        w !== void 0 && d.reportMacroDiscrepancy(d.id, c, w));
      return e ? v : t;
    };
  var yf = function (a, b, c) {
    var d;
    d = Error.call(this, c);
    this.message = d.message;
    "stack" in d && (this.stack = d.stack);
    this.permissionId = a;
    this.parameters = b;
    this.name = "PermissionError";
  };
  ra(yf, Error);
  yf.prototype.getMessage = function () {
    return this.message;
  };
  function zf(a, b) {
    if (Array.isArray(a)) {
      Object.defineProperty(a, "context", { value: { line: b[0] } });
      for (var c = 1; c < a.length; c++) zf(a[c], b[c]);
    }
  }
  var Af = function (a, b) {
    var c;
    c = Error.call(
      this,
      "Wrapped error for Dust debugging. Original error message: " + a.message
    );
    this.message = c.message;
    "stack" in c && (this.stack = c.stack);
    this.Wm = a;
    this.j = [];
    this.C = b;
  };
  ra(Af, Error);
  function Bf() {
    return function (a, b) {
      a instanceof Af || (a = new Af(a, Cf));
      b && a instanceof Af && a.j.push(b);
      throw a;
    };
  }
  function Cf(a) {
    if (!a.length) return a;
    a.push({ id: "main", line: 0 });
    for (var b = a.length - 1; b > 0; b--) $a(a[b].id) && a.splice(b++, 1);
    for (var c = a.length - 1; c > 0; c--) a[c].line = a[c - 1].line;
    a.splice(0, 1);
    return a;
  }
  function Df(a) {
    function b(r) {
      for (var u = 0; u < r.length; u++) d[r[u]] = !0;
    }
    for (var c = [], d = [], e = Ef(a), f = 0; f < ff.length; f++) {
      var g = ff[f],
        k = Ff(g, e);
      if (k) {
        for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
        b(g.block || []);
      } else k === null && b(g.block || []);
    }
    for (var p = [], q = 0; q < hf.length; q++) c[q] && !d[q] && (p[q] = !0);
    return p;
  }
  function Ff(a, b) {
    for (var c = a["if"] || [], d = 0; d < c.length; d++) {
      var e = b(c[d]);
      if (e === 0) return !1;
      if (e === 2) return null;
    }
    for (var f = a.unless || [], g = 0; g < f.length; g++) {
      var k = b(f[g]);
      if (k === 2) return null;
      if (k === 1) return !1;
    }
    return !0;
  }
  function Ef(a) {
    var b = [];
    return function (c) {
      b[c] === void 0 && (b[c] = tf(gf[c], a));
      return b[c];
    };
  }
  var Gf = {
    Tl: function (a, b) {
      b[He.Bi] &&
        typeof a === "string" &&
        (a = b[He.Bi] === 1 ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(He.Di) && a === null && (a = b[He.Di]);
      b.hasOwnProperty(He.Fi) && a === void 0 && (a = b[He.Fi]);
      b.hasOwnProperty(He.Ei) && a === !0 && (a = b[He.Ei]);
      b.hasOwnProperty(He.Ci) && a === !1 && (a = b[He.Ci]);
      return a;
    },
  };
  var Hf = function () {
      this.j = {};
    },
    Jf = function (a, b) {
      var c = If.j,
        d;
      (d = c.j)[a] != null || (d[a] = []);
      c.j[a].push(function () {
        return b.apply(null, ua(za.apply(0, arguments)));
      });
    };
  function Kf(a, b, c, d) {
    if (a)
      for (var e = 0; e < a.length; e++) {
        var f = void 0,
          g = "A policy function denied the permission request";
        try {
          (f = a[e](b, c, d)), (g += ".");
        } catch (k) {
          g =
            typeof k === "string"
              ? g + (": " + k)
              : k instanceof Error
              ? g + (": " + k.message)
              : g + ".";
        }
        if (!f) throw new yf(c, d, g);
      }
  }
  function Lf(a, b, c) {
    return function () {
      var d = arguments[0];
      if (d) {
        var e = a.j[d],
          f = a.j.all;
        if (e || f) {
          var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
          Kf(e, b, d, g);
          Kf(f, b, d, g);
        }
      }
    };
  }
  var Pf = function () {
      var a = data.permissions || {},
        b = Mf.ctid,
        c = this;
      this.C = {};
      this.j = new Hf();
      var d = {},
        e = {},
        f = Lf(this.j, b, function () {
          var g = arguments[0];
          return g && d[g]
            ? d[g].apply(void 0, Array.prototype.slice.call(arguments, 0))
            : {};
        });
      gb(a, function (g, k) {
        function m(p) {
          var q = za.apply(1, arguments);
          if (!n[p])
            throw Nf(
              p,
              {},
              "The requested additional permission " + p + " is not configured."
            );
          f.apply(null, [p].concat(ua(q)));
        }
        var n = {};
        gb(k, function (p, q) {
          var r = Of(p, q);
          n[p] = r.assert;
          d[p] || (d[p] = r.M);
          r.fk && !e[p] && (e[p] = r.fk);
        });
        c.C[g] = function (p, q) {
          var r = n[p];
          if (!r)
            throw Nf(
              p,
              {},
              "The requested permission " + p + " is not configured."
            );
          var u = Array.prototype.slice.call(arguments, 0);
          r.apply(void 0, u);
          f.apply(void 0, u);
          var v = e[p];
          v && v.apply(null, [m].concat(ua(u.slice(1))));
        };
      });
    },
    Qf = function (a) {
      return If.C[a] || function () {};
    };
  function Of(a, b) {
    var c = sf(a, b);
    c.vtp_permissionName = a;
    c.vtp_createPermissionError = Nf;
    try {
      return xf(c);
    } catch (d) {
      return {
        assert: function (e) {
          throw new yf(e, {}, "Permission " + e + " is unknown.");
        },
        M: function () {
          throw new yf(a, {}, "Permission " + a + " is unknown.");
        },
      };
    }
  }
  function Nf(a, b, c) {
    return new yf(a, b, c);
  }
  var Rf = !1;
  var Sf = {};
  Sf.Jk = jb("");
  Sf.am = jb("");
  var Yf = {},
    Zf =
      ((Yf.uaa = !0),
      (Yf.uab = !0),
      (Yf.uafvl = !0),
      (Yf.uamb = !0),
      (Yf.uam = !0),
      (Yf.uap = !0),
      (Yf.uapv = !0),
      (Yf.uaw = !0),
      Yf);
  var gg = function (a, b) {
      for (var c = 0; c < b.length; c++) {
        var d = a,
          e = b[c];
        if (!eg.exec(e)) throw Error("Invalid key wildcard");
        var f = e.indexOf(".*"),
          g = f !== -1 && f === e.length - 2,
          k = g ? e.slice(0, e.length - 2) : e,
          m;
        a: if (d.length === 0) m = !1;
        else {
          for (var n = d.split("."), p = 0; p < n.length; p++)
            if (!fg.exec(n[p])) {
              m = !1;
              break a;
            }
          m = !0;
        }
        if (
          !m || k.length > d.length || (!g && d.length !== e.length)
            ? 0
            : g
            ? sb(d, k) && (d === k || d.charAt(k.length) === ".")
            : d === k
        )
          return !0;
      }
      return !1;
    },
    fg = /^[a-z$_][\w$]*$/i,
    eg = /^(?:[a-z_$][a-z_$0-9]*\.)*[a-z_$][a-z_$0-9]*(?:\.\*)?$/i;
  var hg = [
    "matches",
    "webkitMatchesSelector",
    "mozMatchesSelector",
    "msMatchesSelector",
    "oMatchesSelector",
  ];
  function ig(a, b) {
    var c = String(a),
      d = String(b),
      e = c.length - d.length;
    return e >= 0 && c.indexOf(d, e) === e;
  }
  var jg = new fb();
  function kg(a, b, c) {
    var d = c ? "i" : void 0;
    try {
      var e = String(b) + String(d),
        f = jg.get(e);
      f || ((f = new RegExp(b, d)), jg.set(e, f));
      return f.test(a);
    } catch (g) {
      return !1;
    }
  }
  function lg(a, b) {
    return String(a).indexOf(String(b)) >= 0;
  }
  function mg(a, b) {
    return String(a) === String(b);
  }
  function ng(a, b) {
    return Number(a) >= Number(b);
  }
  function og(a, b) {
    return Number(a) <= Number(b);
  }
  function pg(a, b) {
    return Number(a) > Number(b);
  }
  function qg(a, b) {
    return Number(a) < Number(b);
  }
  function rg(a, b) {
    return sb(String(a), String(b));
  }
  var sg = function (a, b) {
      return a.length && b.length && a.lastIndexOf(b) === a.length - b.length;
    },
    tg = function (a, b) {
      var c = b.charAt(b.length - 1) === "*" || b === "/" || b === "/*";
      sg(b, "/*") && (b = b.slice(0, -2));
      sg(b, "?") && (b = b.slice(0, -1));
      var d = b.split("*");
      if (!c && d.length === 1) return a === d[0];
      for (var e = -1, f = 0; f < d.length; f++) {
        var g = d[f];
        if (g) {
          e = a.indexOf(g, e);
          if (e === -1 || (f === 0 && e !== 0)) return !1;
          e += g.length;
        }
      }
      if (c || e === a.length) return !0;
      var k = d[d.length - 1];
      return a.lastIndexOf(k) === a.length - k.length;
    },
    ug = function (a) {
      return a.protocol === "https:" && (!a.port || a.port === "443");
    },
    xg = function (a, b) {
      var c;
      if (!(c = !ug(a))) {
        var d;
        a: {
          var e = a.hostname.split(".");
          if (e.length < 2) d = !1;
          else {
            for (var f = 0; f < e.length; f++)
              if (!vg.exec(e[f])) {
                d = !1;
                break a;
              }
            d = !0;
          }
        }
        c = !d;
      }
      if (c) return !1;
      for (var g = 0; g < b.length; g++) {
        var k;
        var m = a,
          n = b[g];
        if (!wg.exec(n)) throw Error("Invalid Wildcard");
        var p = n.slice(8),
          q = p.slice(0, p.indexOf("/")),
          r;
        var u = m.hostname,
          v = q;
        if (v.indexOf("*.") !== 0) r = u.toLowerCase() === v.toLowerCase();
        else {
          v = v.slice(2);
          var t = u.toLowerCase().indexOf(v.toLowerCase());
          r =
            t === -1
              ? !1
              : u.length === v.length
              ? !0
              : u.length !== v.length + t
              ? !1
              : u[t - 1] === ".";
        }
        if (r) {
          var w = p.slice(p.indexOf("/"));
          k = tg(m.pathname + m.search, w) ? !0 : !1;
        } else k = !1;
        if (k) return !0;
      }
      return !1;
    },
    vg = /^[a-z0-9-]+$/i,
    wg = /^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i;
  var yg =
      /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|PixieMap|List|OpaqueValue)$/i,
    zg = { Fn: "function", PixieMap: "Object", List: "Array" };
  function K(a, b, c) {
    for (var d = 0; d < b.length; d++) {
      var e = yg.exec(b[d]);
      if (!e) throw Error("Internal Error in " + a);
      var f = e[1],
        g = e[2] === "!",
        k = e[3],
        m = c[d];
      if (m == null) {
        if (g)
          throw Error(
            "Error in " + a + ". Required argument " + f + " not supplied."
          );
      } else if (k !== "*") {
        var n = typeof m;
        m instanceof Wc
          ? (n = "Fn")
          : m instanceof Uc
          ? (n = "List")
          : m instanceof Ma
          ? (n = "PixieMap")
          : m instanceof cd
          ? (n = "PixiePromise")
          : m instanceof ad && (n = "OpaqueValue");
        if (n !== k)
          throw Error(
            "Error in " +
              a +
              ". Argument " +
              f +
              " has type " +
              ((zg[n] || n) + ", which does not match required type ") +
              ((zg[k] || k) + ".")
          );
      }
    }
  }
  function Ag(a) {
    return "" + a;
  }
  function Bg(a, b) {
    var c = [];
    return c;
  }
  function Cg(a, b) {
    var c = new Wc(a, function () {
      for (
        var d = Array.prototype.slice.call(arguments, 0), e = 0;
        e < d.length;
        e++
      )
        d[e] = this.evaluate(d[e]);
      try {
        return b.apply(this, d);
      } catch (g) {
        if (ed()) throw new gd(g.message);
        throw g;
      }
    });
    c.Ia();
    return c;
  }
  function Dg(a, b) {
    var c = new Ma(),
      d;
    for (d in b)
      if (b.hasOwnProperty(d)) {
        var e = b[d];
        Za(e)
          ? c.set(d, Cg(a + "_" + d, e))
          : Qc(e)
          ? c.set(d, Dg(a + "_" + d, e))
          : ($a(e) || z(e) || typeof e === "boolean") && c.set(d, e);
      }
    c.Ia();
    return c;
  }
  function Eg(a, b) {
    K(this.getName(), ["apiName:!string", "message:?string"], arguments);
    var c = {},
      d = new Ma();
    return (d = Dg("AssertApiSubject", c));
  }
  function Fg(a, b) {
    K(this.getName(), ["actual:?*", "message:?string"], arguments);
    if (a instanceof cd)
      throw Error(
        "Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported."
      );
    var c = {},
      d = new Ma();
    return (d = Dg("AssertThatSubject", c));
  }
  function Gg(a) {
    return function () {
      for (var b = [], c = this.D, d = 0; d < arguments.length; ++d)
        b.push(I(arguments[d], c));
      return dd(a.apply(null, b));
    };
  }
  function Hg() {
    for (var a = Math, b = Ig, c = {}, d = 0; d < b.length; d++) {
      var e = b[d];
      a.hasOwnProperty(e) && (c[e] = Gg(a[e].bind(a)));
    }
    return c;
  }
  function Jg(a) {
    var b;
    return b;
  }
  function Kg(a) {
    var b;
    return b;
  }
  function Lg(a) {
    try {
      return encodeURI(a);
    } catch (b) {}
  }
  function Mg(a) {
    try {
      return encodeURIComponent(a);
    } catch (b) {}
  }
  function Rg(a) {
    K(this.getName(), ["message:?string"], arguments);
  }
  function Sg(a, b) {
    K(this.getName(), ["min:!number", "max:!number"], arguments);
    return db(a, b);
  }
  function Tg() {
    return new Date().getTime();
  }
  function Ug(a) {
    if (a === null) return "null";
    if (a instanceof Uc) return "array";
    if (a instanceof Wc) return "function";
    if (a instanceof ad) {
      var b;
      a = (b = a) == null ? void 0 : b.getValue();
      var c;
      if (
        ((c = a) == null ? void 0 : c.constructor) === void 0 ||
        a.constructor.name === void 0
      ) {
        var d = String(a);
        return d.substring(8, d.length - 1);
      }
      return String(a.constructor.name);
    }
    return typeof a;
  }
  function Vg(a) {
    function b(c) {
      return function (d) {
        try {
          return c(d);
        } catch (e) {
          (Rf || Sf.Jk) && a.call(this, e.message);
        }
      };
    }
    return {
      parse: b(function (c) {
        return dd(JSON.parse(c));
      }),
      stringify: b(function (c) {
        return JSON.stringify(I(c));
      }),
    };
  }
  function Wg(a) {
    return ib(I(a, this.D));
  }
  function Xg(a) {
    return Number(I(a, this.D));
  }
  function Yg(a) {
    return a === null ? "null" : a === void 0 ? "undefined" : a.toString();
  }
  function Zg(a, b, c) {
    var d = null,
      e = !1;
    K(
      this.getName(),
      ["tableObj:!List", "keyColumnName:!string", "valueColumnName:!string"],
      arguments
    );
    d = new Ma();
    for (var f = 0; f < a.length(); f++) {
      var g = a.get(f);
      g instanceof Ma &&
        g.has(b) &&
        g.has(c) &&
        (d.set(g.get(b), g.get(c)), (e = !0));
    }
    return e ? d : null;
  }
  var Ig = "floor ceil round max min abs pow sqrt".split(" ");
  function $g() {
    var a = {};
    return {
      lm: function (b) {
        return a.hasOwnProperty(b) ? a[b] : void 0;
      },
      Ek: function (b, c) {
        a[b] = c;
      },
      reset: function () {
        a = {};
      },
    };
  }
  function ah(a, b) {
    return function () {
      return Wc.prototype.invoke.apply(
        a,
        [b].concat(ua(za.apply(0, arguments)))
      );
    };
  }
  function bh(a, b) {
    K(this.getName(), ["apiName:!string", "mock:?*"], arguments);
  }
  function ch(a, b) {
    K(this.getName(), ["apiName:!string", "mock:!PixieMap"], arguments);
  }
  var dh = {};
  var eh = function (a) {
    var b = new Ma();
    if (a instanceof Uc)
      for (var c = a.ka(), d = 0; d < c.length; d++) {
        var e = c[d];
        a.has(e) && b.set(e, a.get(e));
      }
    else if (a instanceof Wc)
      for (var f = a.ka(), g = 0; g < f.length; g++) {
        var k = f[g];
        b.set(k, a.get(k));
      }
    else for (var m = 0; m < a.length; m++) b.set(m, a[m]);
    return b;
  };
  dh.keys = function (a) {
    K(this.getName(), ["input:!*"], arguments);
    if (a instanceof Uc || a instanceof Wc || typeof a === "string") a = eh(a);
    if (a instanceof Ma || a instanceof cd) return new Uc(a.ka());
    return new Uc();
  };
  dh.values = function (a) {
    K(this.getName(), ["input:!*"], arguments);
    if (a instanceof Uc || a instanceof Wc || typeof a === "string") a = eh(a);
    if (a instanceof Ma || a instanceof cd) return new Uc(a.Vb());
    return new Uc();
  };
  dh.entries = function (a) {
    K(this.getName(), ["input:!*"], arguments);
    if (a instanceof Uc || a instanceof Wc || typeof a === "string") a = eh(a);
    if (a instanceof Ma || a instanceof cd)
      return new Uc(
        a.Db().map(function (b) {
          return new Uc(b);
        })
      );
    return new Uc();
  };
  dh.freeze = function (a) {
    (a instanceof Ma ||
      a instanceof cd ||
      a instanceof Uc ||
      a instanceof Wc) &&
      a.Ia();
    return a;
  };
  dh.delete = function (a, b) {
    if (a instanceof Ma && !a.sc()) return a.remove(b), !0;
    return !1;
  };
  function L(a, b) {
    var c = za.apply(2, arguments),
      d = a.D.j;
    if (!d) throw Error("Missing program state.");
    if (d.mn) {
      try {
        d.gk.apply(null, [b].concat(ua(c)));
      } catch (e) {
        throw (Va("TAGGING", 21), e);
      }
      return;
    }
    d.gk.apply(null, [b].concat(ua(c)));
  }
  var fh = function () {
    this.C = {};
    this.j = {};
    this.H = !0;
  };
  fh.prototype.get = function (a, b) {
    var c = this.contains(a) ? this.C[a] : void 0;
    return c;
  };
  fh.prototype.contains = function (a) {
    return this.C.hasOwnProperty(a);
  };
  fh.prototype.add = function (a, b, c) {
    if (this.contains(a))
      throw Error(
        "Attempting to add a function which already exists: " + a + "."
      );
    if (this.j.hasOwnProperty(a))
      throw Error(
        "Attempting to add an API with an existing private API name: " + a + "."
      );
    this.C[a] = c ? void 0 : Za(b) ? Cg(a, b) : Dg(a, b);
  };
  function gh(a, b) {
    var c = void 0;
    return c;
  }
  function hh() {
    var a = {};
    return a;
  }
  var O = {
      g: {
        wa: "ad_personalization",
        N: "ad_storage",
        O: "ad_user_data",
        U: "analytics_storage",
        Kb: "region",
        Yb: "consent_updated",
        yf: "wait_for_update",
        Hi: "app_remove",
        Ii: "app_store_refund",
        Ji: "app_store_subscription_cancel",
        Ki: "app_store_subscription_convert",
        Li: "app_store_subscription_renew",
        Vk: "consent_update",
        Cg: "add_payment_info",
        Dg: "add_shipping_info",
        wc: "add_to_cart",
        xc: "remove_from_cart",
        Eg: "view_cart",
        Zb: "begin_checkout",
        yc: "select_item",
        rb: "view_item_list",
        Lb: "select_promotion",
        sb: "view_promotion",
        Ma: "purchase",
        zc: "refund",
        Qa: "view_item",
        Fg: "add_to_wishlist",
        Wk: "exception",
        Mi: "first_open",
        Ni: "first_visit",
        ba: "gtag.config",
        Ya: "gtag.get",
        Oi: "in_app_purchase",
        ac: "page_view",
        Xk: "screen_view",
        Pi: "session_start",
        Yk: "timing_complete",
        Zk: "track_social",
        Uc: "user_engagement",
        al: "user_id_update",
        Ud: "gclid_link_decoration_source",
        Vd: "gclid_storage_source",
        tb: "gclgb",
        Za: "gclid",
        Vc: "gclgs",
        Wc: "gcllp",
        Xc: "gclst",
        ia: "ads_data_redaction",
        Qi: "gad_source",
        Ri: "gad_source_src",
        Si: "ndclid",
        Ti: "ngad_source",
        Ui: "ngbraid",
        Vi: "ngclid",
        Wi: "ngclsrc",
        Wd: "gclid_url",
        Xi: "gclsrc",
        Gg: "gbraid",
        Bf: "wbraid",
        na: "allow_ad_personalization_signals",
        Cf: "allow_custom_scripts",
        Xd: "allow_direct_google_requests",
        Df: "allow_display_features",
        Yd: "allow_enhanced_conversions",
        fb: "allow_google_signals",
        Fa: "allow_interest_groups",
        bl: "app_id",
        fl: "app_installer_id",
        il: "app_name",
        jl: "app_version",
        ub: "auid",
        Yi: "auto_detection_enabled",
        bc: "aw_remarketing",
        Ef: "aw_remarketing_only",
        Zd: "discount",
        ae: "aw_feed_country",
        be: "aw_feed_language",
        da: "items",
        ce: "aw_merchant_id",
        Hg: "aw_basket_type",
        Yc: "campaign_content",
        Zc: "campaign_id",
        bd: "campaign_medium",
        dd: "campaign_name",
        ed: "campaign",
        fd: "campaign_source",
        gd: "campaign_term",
        vb: "client_id",
        Zi: "rnd",
        Ig: "consent_update_type",
        aj: "content_group",
        bj: "content_type",
        hb: "conversion_cookie_prefix",
        hd: "conversion_id",
        xa: "conversion_linker",
        cj: "conversion_linker_disabled",
        fc: "conversion_api",
        Ff: "cookie_deprecation",
        Ra: "cookie_domain",
        Sa: "cookie_expires",
        ab: "cookie_flags",
        Ac: "cookie_name",
        wb: "cookie_path",
        Na: "cookie_prefix",
        hc: "cookie_update",
        Bc: "country",
        Ba: "currency",
        Jg: "customer_buyer_stage",
        de: "customer_lifetime_value",
        Kg: "customer_loyalty",
        Lg: "customer_ltv_bucket",
        jd: "custom_map",
        Mg: "gcldc",
        ee: "dclid",
        Ng: "debug_mode",
        fa: "developer_id",
        dj: "disable_merchant_reported_purchases",
        kd: "dc_custom_params",
        ej: "dc_natural_search",
        Og: "dynamic_event_settings",
        Pg: "affiliation",
        fe: "checkout_option",
        Gf: "checkout_step",
        Qg: "coupon",
        ld: "item_list_name",
        Hf: "list_name",
        fj: "promotions",
        md: "shipping",
        If: "tax",
        he: "engagement_time_msec",
        ie: "enhanced_client_id",
        je: "enhanced_conversions",
        Rg: "enhanced_conversions_automatic_settings",
        ke: "estimated_delivery_date",
        Jf: "euid_logged_in_state",
        nd: "event_callback",
        kl: "event_category",
        jb: "event_developer_id_string",
        ml: "event_label",
        Cc: "event",
        me: "event_settings",
        ne: "event_timeout",
        nl: "description",
        ol: "fatal",
        gj: "experiments",
        Kf: "firebase_id",
        Dc: "first_party_collection",
        oe: "_x_20",
        xb: "_x_19",
        ij: "fledge_drop_reason",
        Sg: "fledge",
        Tg: "flight_error_code",
        Ug: "flight_error_message",
        jj: "fl_activity_category",
        kj: "fl_activity_group",
        Vg: "fl_advertiser_id",
        lj: "fl_ar_dedupe",
        Wg: "match_id",
        mj: "fl_random_number",
        nj: "tran",
        oj: "u",
        pe: "gac_gclid",
        Ec: "gac_wbraid",
        Xg: "gac_wbraid_multiple_conversions",
        Yg: "ga_restrict_domain",
        Zg: "ga_temp_client_id",
        pl: "ga_temp_ecid",
        ic: "gdpr_applies",
        ah: "geo_granularity",
        Mb: "value_callback",
        yb: "value_key",
        Fc: "_google_ng",
        Gc: "google_signals",
        bh: "google_tld",
        qe: "groups",
        eh: "gsa_experiment_id",
        pj: "gtm_up",
        Nb: "iframe_state",
        od: "ignore_referrer",
        Lf: "internal_traffic_results",
        jc: "is_legacy_converted",
        Ob: "is_legacy_loaded",
        se: "is_passthrough",
        pd: "_lps",
        Ta: "language",
        te: "legacy_developer_id_string",
        ya: "linker",
        Hc: "accept_incoming",
        zb: "decorate_forms",
        X: "domains",
        Pb: "url_position",
        Mf: "merchant_feed_label",
        Nf: "merchant_feed_language",
        Of: "merchant_id",
        fh: "method",
        ql: "name",
        qj: "navigation_type",
        rd: "new_customer",
        gh: "non_interaction",
        rj: "optimize_id",
        hh: "page_hostname",
        sd: "page_path",
        Ga: "page_referrer",
        cb: "page_title",
        ih: "passengers",
        jh: "phone_conversion_callback",
        sj: "phone_conversion_country_code",
        kh: "phone_conversion_css_class",
        tj: "phone_conversion_ids",
        lh: "phone_conversion_number",
        mh: "phone_conversion_options",
        rl: "_platinum_request_status",
        nh: "_protected_audience_enabled",
        ud: "quantity",
        ue: "redact_device_info",
        Pf: "referral_exclusion_definition",
        In: "_request_start_time",
        Qb: "restricted_data_processing",
        uj: "retoken",
        sl: "sample_rate",
        Qf: "screen_name",
        Rb: "screen_resolution",
        vj: "_script_source",
        wj: "search_term",
        Oa: "send_page_view",
        kc: "send_to",
        vd: "server_container_url",
        wd: "session_duration",
        ve: "session_engaged",
        Rf: "session_engaged_time",
        Ab: "session_id",
        we: "session_number",
        Sf: "_shared_user_id",
        xd: "delivery_postal_code",
        Jn: "_tag_firing_delay",
        Kn: "_tag_firing_time",
        tl: "temporary_client_id",
        Tf: "topmost_url",
        xj: "tracking_id",
        Uf: "traffic_type",
        Ca: "transaction_id",
        Sb: "transport_url",
        oh: "trip_type",
        nc: "update",
        eb: "url_passthrough",
        yj: "uptgs",
        Vf: "_user_agent_architecture",
        Wf: "_user_agent_bitness",
        Xf: "_user_agent_full_version_list",
        Yf: "_user_agent_mobile",
        Zf: "_user_agent_model",
        cg: "_user_agent_platform",
        dg: "_user_agent_platform_version",
        eg: "_user_agent_wow64",
        Ha: "user_data",
        ph: "user_data_auto_latency",
        qh: "user_data_auto_meta",
        rh: "user_data_auto_multi",
        sh: "user_data_auto_selectors",
        th: "user_data_auto_status",
        yd: "user_data_mode",
        xe: "user_data_settings",
        Da: "user_id",
        lb: "user_properties",
        zj: "_user_region",
        zd: "us_privacy_string",
        oa: "value",
        uh: "wbraid_multiple_conversions",
        Bd: "_fpm_parameters",
        Gj: "_host_name",
        Hj: "_in_page_command",
        Ij: "_ip_override",
        Jj: "_is_passthrough_cid",
        Tb: "non_personalized_ads",
        Ge: "_sst_parameters",
        ib: "conversion_label",
        za: "page_location",
        kb: "global_developer_id_string",
        mc: "tc_privacy_string",
      },
    },
    ih = {},
    jh = Object.freeze(
      ((ih[O.g.na] = 1),
      (ih[O.g.Df] = 1),
      (ih[O.g.Yd] = 1),
      (ih[O.g.fb] = 1),
      (ih[O.g.da] = 1),
      (ih[O.g.Ra] = 1),
      (ih[O.g.Sa] = 1),
      (ih[O.g.ab] = 1),
      (ih[O.g.Ac] = 1),
      (ih[O.g.wb] = 1),
      (ih[O.g.Na] = 1),
      (ih[O.g.hc] = 1),
      (ih[O.g.jd] = 1),
      (ih[O.g.fa] = 1),
      (ih[O.g.Og] = 1),
      (ih[O.g.nd] = 1),
      (ih[O.g.me] = 1),
      (ih[O.g.ne] = 1),
      (ih[O.g.Dc] = 1),
      (ih[O.g.Yg] = 1),
      (ih[O.g.Gc] = 1),
      (ih[O.g.bh] = 1),
      (ih[O.g.qe] = 1),
      (ih[O.g.Lf] = 1),
      (ih[O.g.jc] = 1),
      (ih[O.g.Ob] = 1),
      (ih[O.g.ya] = 1),
      (ih[O.g.Pf] = 1),
      (ih[O.g.Qb] = 1),
      (ih[O.g.Oa] = 1),
      (ih[O.g.kc] = 1),
      (ih[O.g.vd] = 1),
      (ih[O.g.wd] = 1),
      (ih[O.g.Rf] = 1),
      (ih[O.g.xd] = 1),
      (ih[O.g.Sb] = 1),
      (ih[O.g.nc] = 1),
      (ih[O.g.xe] = 1),
      (ih[O.g.lb] = 1),
      (ih[O.g.Ge] = 1),
      ih)
    );
  Object.freeze([
    O.g.za,
    O.g.Ga,
    O.g.cb,
    O.g.Ta,
    O.g.Qf,
    O.g.Da,
    O.g.Kf,
    O.g.aj,
  ]);
  var kh = {},
    lh = Object.freeze(
      ((kh[O.g.Hi] = 1),
      (kh[O.g.Ii] = 1),
      (kh[O.g.Ji] = 1),
      (kh[O.g.Ki] = 1),
      (kh[O.g.Li] = 1),
      (kh[O.g.Mi] = 1),
      (kh[O.g.Ni] = 1),
      (kh[O.g.Oi] = 1),
      (kh[O.g.Pi] = 1),
      (kh[O.g.Uc] = 1),
      kh)
    ),
    mh = {},
    nh = Object.freeze(
      ((mh[O.g.Cg] = 1),
      (mh[O.g.Dg] = 1),
      (mh[O.g.wc] = 1),
      (mh[O.g.xc] = 1),
      (mh[O.g.Eg] = 1),
      (mh[O.g.Zb] = 1),
      (mh[O.g.yc] = 1),
      (mh[O.g.rb] = 1),
      (mh[O.g.Lb] = 1),
      (mh[O.g.sb] = 1),
      (mh[O.g.Ma] = 1),
      (mh[O.g.zc] = 1),
      (mh[O.g.Qa] = 1),
      (mh[O.g.Fg] = 1),
      mh)
    ),
    oh = Object.freeze([
      O.g.na,
      O.g.Xd,
      O.g.fb,
      O.g.hc,
      O.g.Dc,
      O.g.od,
      O.g.Oa,
      O.g.nc,
    ]),
    ph = Object.freeze([].concat(ua(oh))),
    qh = Object.freeze([O.g.Sa, O.g.ne, O.g.wd, O.g.Rf, O.g.he]),
    rh = Object.freeze([].concat(ua(qh))),
    sh = {},
    th =
      ((sh[O.g.N] = "1"),
      (sh[O.g.U] = "2"),
      (sh[O.g.O] = "3"),
      (sh[O.g.wa] = "4"),
      sh),
    uh = {},
    vh = Object.freeze(
      ((uh[O.g.Ud] = 1),
      (uh[O.g.Vd] = 1),
      (uh[O.g.na] = 1),
      (uh[O.g.Xd] = 1),
      (uh[O.g.Yd] = 1),
      (uh[O.g.Fa] = 1),
      (uh[O.g.bc] = 1),
      (uh[O.g.Ef] = 1),
      (uh[O.g.Zd] = 1),
      (uh[O.g.ae] = 1),
      (uh[O.g.be] = 1),
      (uh[O.g.da] = 1),
      (uh[O.g.ce] = 1),
      (uh[O.g.hb] = 1),
      (uh[O.g.xa] = 1),
      (uh[O.g.Ra] = 1),
      (uh[O.g.Sa] = 1),
      (uh[O.g.ab] = 1),
      (uh[O.g.Na] = 1),
      (uh[O.g.Ba] = 1),
      (uh[O.g.Jg] = 1),
      (uh[O.g.de] = 1),
      (uh[O.g.Kg] = 1),
      (uh[O.g.Lg] = 1),
      (uh[O.g.fa] = 1),
      (uh[O.g.dj] = 1),
      (uh[O.g.je] = 1),
      (uh[O.g.ke] = 1),
      (uh[O.g.Kf] = 1),
      (uh[O.g.Dc] = 1),
      (uh[O.g.jc] = 1),
      (uh[O.g.Ob] = 1),
      (uh[O.g.Ta] = 1),
      (uh[O.g.Mf] = 1),
      (uh[O.g.Nf] = 1),
      (uh[O.g.Of] = 1),
      (uh[O.g.rd] = 1),
      (uh[O.g.za] = 1),
      (uh[O.g.Ga] = 1),
      (uh[O.g.jh] = 1),
      (uh[O.g.kh] = 1),
      (uh[O.g.lh] = 1),
      (uh[O.g.mh] = 1),
      (uh[O.g.Qb] = 1),
      (uh[O.g.Oa] = 1),
      (uh[O.g.kc] = 1),
      (uh[O.g.vd] = 1),
      (uh[O.g.xd] = 1),
      (uh[O.g.Ca] = 1),
      (uh[O.g.Sb] = 1),
      (uh[O.g.nc] = 1),
      (uh[O.g.eb] = 1),
      (uh[O.g.Ha] = 1),
      (uh[O.g.Da] = 1),
      (uh[O.g.oa] = 1),
      uh)
    ),
    wh = {},
    xh = Object.freeze(
      ((wh.search = "s"),
      (wh.youtube = "y"),
      (wh.playstore = "p"),
      (wh.shopping = "h"),
      (wh.ads = "a"),
      (wh.maps = "m"),
      wh)
    );
  Object.freeze(O.g);
  var P = {},
    yh =
      ((P[O.g.Yb] = "gcu"),
      (P[O.g.tb] = "gclgb"),
      (P[O.g.Za] = "gclaw"),
      (P[O.g.Vc] = "gclgs"),
      (P[O.g.Wc] = "gcllp"),
      (P[O.g.Xc] = "gclst"),
      (P[O.g.Si] = "ndclid"),
      (P[O.g.Ti] = "ngad_source"),
      (P[O.g.Ui] = "ngbraid"),
      (P[O.g.Vi] = "ngclid"),
      (P[O.g.Wi] = "ngclsrc"),
      (P[O.g.ub] = "auid"),
      (P[O.g.Zd] = "dscnt"),
      (P[O.g.ae] = "fcntr"),
      (P[O.g.be] = "flng"),
      (P[O.g.ce] = "mid"),
      (P[O.g.Hg] = "bttype"),
      (P[O.g.ib] = "label"),
      (P[O.g.fc] = "capi"),
      (P[O.g.Ff] = "pscdl"),
      (P[O.g.Ba] = "currency_code"),
      (P[O.g.Jg] = "clobs"),
      (P[O.g.de] = "vdltv"),
      (P[O.g.Kg] = "clolo"),
      (P[O.g.Lg] = "clolb"),
      (P[O.g.Ng] = "_dbg"),
      (P[O.g.ke] = "oedeld"),
      (P[O.g.jb] = "edid"),
      (P[O.g.ij] = "fdr"),
      (P[O.g.Sg] = "fledge"),
      (P[O.g.pe] = "gac"),
      (P[O.g.Ec] = "gacgb"),
      (P[O.g.Xg] = "gacmcov"),
      (P[O.g.ic] = "gdpr"),
      (P[O.g.kb] = "gdid"),
      (P[O.g.Fc] = "_ng"),
      (P[O.g.eh] = "gsaexp"),
      (P[O.g.Nb] = "frm"),
      (P[O.g.se] = "gtm_up"),
      (P[O.g.pd] = "lps"),
      (P[O.g.te] = "did"),
      (P[O.g.Mf] = "fcntr"),
      (P[O.g.Nf] = "flng"),
      (P[O.g.Of] = "mid"),
      (P[O.g.rd] = void 0),
      (P[O.g.cb] = "tiba"),
      (P[O.g.Qb] = "rdp"),
      (P[O.g.Ab] = "ecsid"),
      (P[O.g.Sf] = "ga_uid"),
      (P[O.g.xd] = "delopc"),
      (P[O.g.mc] = "gdpr_consent"),
      (P[O.g.Ca] = "oid"),
      (P[O.g.yj] = "uptgs"),
      (P[O.g.Vf] = "uaa"),
      (P[O.g.Wf] = "uab"),
      (P[O.g.Xf] = "uafvl"),
      (P[O.g.Yf] = "uamb"),
      (P[O.g.Zf] = "uam"),
      (P[O.g.cg] = "uap"),
      (P[O.g.dg] = "uapv"),
      (P[O.g.eg] = "uaw"),
      (P[O.g.ph] = "ec_lat"),
      (P[O.g.qh] = "ec_meta"),
      (P[O.g.rh] = "ec_m"),
      (P[O.g.sh] = "ec_sel"),
      (P[O.g.th] = "ec_s"),
      (P[O.g.yd] = "ec_mode"),
      (P[O.g.Da] = "userId"),
      (P[O.g.zd] = "us_privacy"),
      (P[O.g.oa] = "value"),
      (P[O.g.uh] = "mcov"),
      (P[O.g.Gj] = "hn"),
      (P[O.g.Hj] = "gtm_ee"),
      (P[O.g.Tb] = "npa"),
      (P[O.g.hd] = null),
      (P[O.g.Rb] = null),
      (P[O.g.Ta] = null),
      (P[O.g.da] = null),
      (P[O.g.za] = null),
      (P[O.g.Ga] = null),
      (P[O.g.Tf] = null),
      (P[O.g.Bd] = null),
      (P[O.g.Ud] = null),
      (P[O.g.Vd] = null),
      P);
  function zh(a, b) {
    if (a) {
      var c = a.split("x");
      c.length === 2 && (Ah(b, "u_w", c[0]), Ah(b, "u_h", c[1]));
    }
  }
  function Bh(a, b) {
    a &&
      (a.length === 2
        ? Ah(b, "hl", a)
        : a.length === 5 &&
          (Ah(b, "hl", a.substring(0, 2)), Ah(b, "gl", a.substring(3, 5))));
  }
  function Ch(a) {
    var b = Eh;
    b = b === void 0 ? Ih : b;
    var c;
    var d = b;
    if (a && a.length) {
      for (var e = [], f = 0; f < a.length; ++f) {
        var g = a[f];
        g &&
          e.push({
            item_id: d(g),
            quantity: g.quantity,
            value: g.price,
            start_date: g.start_date,
            end_date: g.end_date,
          });
      }
      c = e;
    } else c = [];
    var k;
    var m = c;
    if (m) {
      for (var n = [], p = 0; p < m.length; p++) {
        var q = m[p],
          r = [];
        q &&
          (r.push(Jh(q.value)),
          r.push(Jh(q.quantity)),
          r.push(Jh(q.item_id)),
          r.push(Jh(q.start_date)),
          r.push(Jh(q.end_date)),
          n.push("(" + r.join("*") + ")"));
      }
      k = n.length > 0 ? n.join("") : "";
    } else k = "";
    return k;
  }
  function Ih(a) {
    return Kh(a.item_id, a.id, a.item_name);
  }
  function Kh() {
    for (
      var a = l(za.apply(0, arguments)), b = a.next();
      !b.done;
      b = a.next()
    ) {
      var c = b.value;
      if (c !== null && c !== void 0) return c;
    }
  }
  function Lh(a) {
    if (a && a.length) {
      for (var b = [], c = 0; c < a.length; ++c) {
        var d = a[c];
        d && d.estimated_delivery_date
          ? b.push("" + d.estimated_delivery_date)
          : b.push("");
      }
      return b.join(",");
    }
  }
  function Ah(a, b, c) {
    c === void 0 || c === null || (c === "" && !Zf[b]) || (a[b] = c);
  }
  function Jh(a) {
    return typeof a !== "number" && typeof a !== "string" ? "" : a.toString();
  }
  function Mh(a) {
    return Nh ? E.querySelectorAll(a) : null;
  }
  function Oh(a, b) {
    if (!Nh) return null;
    if (Element.prototype.closest)
      try {
        return a.closest(b);
      } catch (e) {
        return null;
      }
    var c =
        Element.prototype.matches ||
        Element.prototype.webkitMatchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector,
      d = a;
    if (!E.documentElement.contains(d)) return null;
    do {
      try {
        if (c.call(d, b)) return d;
      } catch (e) {
        break;
      }
      d = d.parentElement || d.parentNode;
    } while (d !== null && d.nodeType === 1);
    return null;
  }
  var Ph = !1;
  if (E.querySelectorAll)
    try {
      var Qh = E.querySelectorAll(":root");
      Qh && Qh.length == 1 && Qh[0] == E.documentElement && (Ph = !0);
    } catch (a) {}
  var Nh = Ph;
  function Rh(a) {
    switch (a) {
      case 0:
        break;
      case 9:
        return "e4";
      case 6:
        return "e5";
      case 14:
        return "e6";
      default:
        return "e7";
    }
  }
  var Sh = /^[0-9A-Fa-f]{64}$/;
  function Th(a) {
    try {
      return new TextEncoder().encode(a);
    } catch (e) {
      for (var b = [], c = 0; c < a.length; c++) {
        var d = a.charCodeAt(c);
        d < 128
          ? b.push(d)
          : d < 2048
          ? b.push(192 | (d >> 6), 128 | (d & 63))
          : d < 55296 || d >= 57344
          ? b.push(224 | (d >> 12), 128 | ((d >> 6) & 63), 128 | (d & 63))
          : ((d = 65536 + (((d & 1023) << 10) | (a.charCodeAt(++c) & 1023))),
            b.push(
              240 | (d >> 18),
              128 | ((d >> 12) & 63),
              128 | ((d >> 6) & 63),
              128 | (d & 63)
            ));
      }
      return new Uint8Array(b);
    }
  }
  function Uh(a) {
    if (a === "" || a === "e0") return Promise.resolve(a);
    var b;
    if ((b = B.crypto) == null ? 0 : b.subtle) {
      if (Sh.test(a)) return Promise.resolve(a);
      try {
        var c = Th(a);
        return B.crypto.subtle
          .digest("SHA-256", c)
          .then(function (d) {
            var e = Array.from(new Uint8Array(d))
              .map(function (f) {
                return String.fromCharCode(f);
              })
              .join("");
            return B.btoa(e)
              .replace(/\+/g, "-")
              .replace(/\//g, "_")
              .replace(/=+$/, "");
          })
          .catch(function () {
            return "e2";
          });
      } catch (d) {
        return Promise.resolve("e2");
      }
    } else return Promise.resolve("e1");
  }
  function Vh(a, b) {
    if (a === "") return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
  }
  var Wh = [],
    Xh = {};
  function Yh(a) {
    return Wh[a] === void 0 ? !1 : Wh[a];
  }
  var Zh = [];
  function $h(a) {
    switch (a) {
      case 0:
        return 0;
      case 47:
        return 1;
      case 48:
        return 2;
      case 49:
        return 8;
      case 74:
        return 3;
      case 98:
        return 4;
      case 100:
        return 5;
      case 116:
        return 6;
      case 117:
        return 10;
      case 118:
        return 7;
    }
  }
  function ai(a, b) {
    Zh[a] = b;
    var c = $h(a);
    c !== void 0 && (Wh[c] = b);
  }
  function Q(a) {
    ai(a, !0);
  }
  Q(36);
  Q(32);
  Q(33);
  Q(34);
  Q(35);
  Q(51);
  Q(89);
  Q(17);
  Q(125);
  Q(16);
  Q(132);
  Q(124);
  Q(75);
  Q(101);
  Q(6);
  Q(52);
  Q(4);
  Q(94);
  Q(120);
  Q(86);
  Q(80);
  Q(99);
  Q(137);
  Q(111);
  Q(112);
  Q(133);
  Q(100);
  Q(5);
  ai(21, !1), Q(22);
  Q(116);
  Xh[1] = Vh("1", 6e4);
  Xh[3] = Vh("10", 1);
  Xh[2] = Vh("", 50);
  Q(27);
  Q(13);
  Q(79);
  Q(104);
  Q(121);
  var ci = !1;
  Q(8);
  Q(105);
  Q(67);
  Q(136);
  Q(118);
  Q(108);
  Q(25);
  Q(70);
  Q(117);
  Q(82);
  Q(85);
  Q(96);
  Q(55);
  Q(84);
  Q(115);
  Q(83);
  Q(77);
  Q(53);
  Q(20);
  Q(54);
  function S(a) {
    return !!Zh[a];
  }
  function bi(a, b) {
    for (var c = !1, d = !1, e = 0; c === d; )
      if (
        ((c = (((Math.random() * 4294967296) | 0) & 1) === 0),
        (d = (((Math.random() * 4294967296) | 0) & 1) === 0),
        e++,
        e > 30)
      )
        return;
    c ? Q(b) : Q(a);
  }
  function U(a) {
    Va("GTM", a);
  }
  var hi = function (a) {
      var b = S(110);
      b = b === void 0 ? !1 : b;
      var c = {},
        d = ["tv.1"],
        e = 0;
      for (var f = l(a), g = f.next(); !g.done; g = f.next()) {
        var k = g.value;
        if (k.value !== "") {
          var m,
            n = void 0,
            p = k.name,
            q = k.value,
            r = di[p];
          if (r) {
            var u = (n = k.index) != null ? n : "",
              v = r + "__" + e;
            !ei(p) || fi(q)
              ? (m = encodeURIComponent(encodeURIComponent(q)))
              : ((m = "${userData." + v + "|sha256}"), (c[v] = q), e++);
            d.push("" + r + u + "." + m);
          }
        }
      }
      var t = d.join("~"),
        w = { userData: c };
      return b
        ? {
            Hk: t,
            vf: w,
            Kk: e,
            Zl: "tv.1~${" + (t + "|encrypt}"),
            encryptionKeyString: gi(),
          }
        : { Hk: t, vf: w, Kk: e };
    },
    ei = function (a) {
      return ii.indexOf(a) !== -1;
    },
    gi = function () {
      return "{\x22keys\x22:[{\x22id\x22:\x22aef920a7-b808-4900-a6d1-4d39badaa317\x22,\x22hpkePublicKey\x22:{\x22version\x22:0,\x22params\x22:{\x22kem\x22:\x22DHKEM_P256_HKDF_SHA256\x22,\x22kdf\x22:\x22HKDF_SHA256\x22,\x22aead\x22:\x22AES_128_GCM\x22},\x22publicKey\x22:\x22BL/rETGHVr+GVvNDa5S+RLjxd/npg4HKGw64F6r76DrF09W1l/5L3u/vEHOxcv9KCMY87d0WhlSU9pa4o5mnuJI\x3d\x22}},{\x22id\x22:\x22ac3e6cb3-0849-4037-a9e5-e3ab7f87d155\x22,\x22hpkePublicKey\x22:{\x22version\x22:0,\x22params\x22:{\x22kem\x22:\x22DHKEM_P256_HKDF_SHA256\x22,\x22kdf\x22:\x22HKDF_SHA256\x22,\x22aead\x22:\x22AES_128_GCM\x22},\x22publicKey\x22:\x22BAuPylZzNrAo1hizBOej6F3ixGvtRzKKgU9zoPVjVo1xKvBs3b7Kj9s2EeXuV8cJU/LfVcG7MpsCvzpIc6E98Ro\x3d\x22}},{\x22id\x22:\x2272f3802e-9378-4632-9b5e-6dd70846b5ee\x22,\x22hpkePublicKey\x22:{\x22version\x22:0,\x22params\x22:{\x22kem\x22:\x22DHKEM_P256_HKDF_SHA256\x22,\x22kdf\x22:\x22HKDF_SHA256\x22,\x22aead\x22:\x22AES_128_GCM\x22},\x22publicKey\x22:\x22BALM9e+ApgDjvE56FeJoX8M7pN62swoSnEgRREPRrp+ZzKlNRKNL8UjcDnMY8A+0wMbIbbeantyIlSz66sOw+m0\x3d\x22}},{\x22id\x22:\x223c022a67-fbda-4779-bc09-556a40be831b\x22,\x22hpkePublicKey\x22:{\x22version\x22:0,\x22params\x22:{\x22kem\x22:\x22DHKEM_P256_HKDF_SHA256\x22,\x22kdf\x22:\x22HKDF_SHA256\x22,\x22aead\x22:\x22AES_128_GCM\x22},\x22publicKey\x22:\x22BDX4cdbqxhXQFElH7z2ptjQTh+vRptETiPnRkkF2VM9CQKDL0uzYG+mkMr1woeOztJUlgz3kqlhjwAxyJqGRD0g\x3d\x22}},{\x22id\x22:\x2232d21dca-ca2c-4061-bcb9-59324e95bc09\x22,\x22hpkePublicKey\x22:{\x22version\x22:0,\x22params\x22:{\x22kem\x22:\x22DHKEM_P256_HKDF_SHA256\x22,\x22kdf\x22:\x22HKDF_SHA256\x22,\x22aead\x22:\x22AES_128_GCM\x22},\x22publicKey\x22:\x22BB8AO64o5NVPMETLnEqcaedMMshy5+s8YWMH2bwJ4wp9KNxD63yZHMCgKlA5SK1a1AzmaDyOLSf6ILuNUrtNv3I\x3d\x22}}]}";
    },
    ki = function (a, b) {
      if (B.Promise) {
        var c = void 0;
        return c;
      }
    },
    mi = function (a, b, c) {
      if (B.Promise)
        try {
          var d = new Promise(function (e) {
            li(a, e);
          });
          return d;
        } catch (e) {}
    },
    ni = function (a) {
      if (B.Promise)
        try {
          return new Promise(function (b) {
            li(a, function (c) {
              b(c);
            });
          });
        } catch (b) {}
    },
    oi = function (a) {
      for (
        var b = a.pf, c = a.time, d = ["tv.1"], e = 0, f = !1, g = 0;
        g < b.length;
        ++g
      ) {
        var k = b[g].name,
          m = b[g].value,
          n = b[g].index,
          p = di[k];
        p &&
          m &&
          (!ei(k) || fi(m)) &&
          (n !== void 0 && (p += n), d.push(p + "." + m), e++);
      }
      b.length === 1 && b[0].name === "error_code" && ((e = 0), (f = !0));
      return { Hb: encodeURIComponent(d.join("~")), Od: e, time: c, pg: f };
    },
    li = function (a, b) {
      pi(a, function (c) {
        b(oi(c));
      });
    },
    fi = function (a) {
      return /^e\d+$/.test(a) || qi.test(a) || Sh.test(a);
    },
    yi = function (a) {
      function b(r, u, v, t) {
        var w = ri(r);
        w !== "" &&
          (Sh.test(w)
            ? k.push({ name: u, value: w, index: t })
            : k.push({ name: u, value: v(w), index: t }));
      }
      function c(r, u) {
        var v = r;
        if (z(v) || Array.isArray(v)) {
          v = ab(r);
          for (var t = 0; t < v.length; ++t) {
            var w = ri(v[t]),
              x = Sh.test(w);
            u && !x && U(89);
            !u && x && U(88);
          }
        }
      }
      function d(r, u) {
        var v = r[u];
        c(v, !1);
        var t = si[u];
        r[t] && (r[u] && U(90), (v = r[t]), c(v, !0));
        return v;
      }
      function e(r, u, v) {
        for (var t = ab(d(r, u)), w = 0; w < t.length; ++w) b(t[w], u, v);
      }
      function f(r, u, v, t) {
        var w = d(r, u);
        b(w, u, v, t);
      }
      function g(r) {
        return function (u) {
          U(64);
          return r(u);
        };
      }
      var k = [];
      if (B.location.protocol !== "https:")
        return k.push({ name: "error_code", value: "e3", index: void 0 }), k;
      e(a, "email", ti);
      e(a, "phone_number", ui);
      e(a, "first_name", g(vi));
      e(a, "last_name", g(vi));
      var m = a.home_address || {};
      e(m, "street", g(wi));
      e(m, "city", g(wi));
      e(m, "postal_code", g(xi));
      e(m, "region", g(wi));
      e(m, "country", g(xi));
      for (var n = ab(a.address || {}), p = 0; p < n.length; p++) {
        var q = n[p];
        f(q, "first_name", vi, p);
        f(q, "last_name", vi, p);
        f(q, "street", wi, p);
        f(q, "city", wi, p);
        f(q, "postal_code", xi, p);
        f(q, "region", wi, p);
        f(q, "country", xi, p);
      }
      return k;
    },
    zi = function (a) {
      var b = a ? yi(a) : [];
      return oi({ pf: b });
    },
    Ai = function (a) {
      return a && a != null && Object.keys(a).length > 0 && B.Promise
        ? yi(a).some(function (b) {
            return b.value && ei(b.name) && !Sh.test(b.value);
          })
        : !1;
    },
    pi = function (a, b) {
      var c = yi(a);
      Bi(c, b);
    },
    ri = function (a) {
      return a == null ? "" : z(a) ? lb(String(a)) : "e0";
    },
    xi = function (a) {
      return a.replace(Ci, "");
    },
    vi = function (a) {
      return wi(a.replace(/\s/g, ""));
    },
    wi = function (a) {
      return lb(a.replace(Di, "").toLowerCase());
    },
    ui = function (a) {
      a = a.replace(/[\s-()/.]/g, "");
      a.charAt(0) !== "+" && (a = "+" + a);
      return Ei.test(a) ? a : "e0";
    },
    ti = function (a) {
      var b = a.toLowerCase().split("@");
      if (b.length === 2) {
        var c = b[0];
        /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
        c = c + "@" + b[1];
        if (Fi.test(c)) return c;
      }
      return "e0";
    },
    Bi = function (a, b) {
      if (
        a.some(function (d) {
          return d.value && ei(d.name);
        })
      )
        if (B.Promise) {
          var c;
          if (S(56) || S(91)) c = Dc();
          Promise.all(
            a.map(function (d) {
              return d.value && ei(d.name)
                ? Uh(d.value).then(function (e) {
                    d.value = e;
                  })
                : Promise.resolve();
            })
          )
            .then(function () {
              var d = { pf: a };
              if (c !== void 0) {
                var e = Dc();
                c && e && (d.time = Math.round(e) - Math.round(c));
              }
              b(d);
            })
            .catch(function () {
              b({ pf: [] });
            });
        } else b({ pf: [] });
      else b({ pf: a });
    },
    Di = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
    Fi = /^\S+@\S+\.\S+$/,
    Ei = /^\+\d{10,15}$/,
    Ci = /[.~]/g,
    qi = /^[0-9A-Za-z_-]{43}$/,
    Gi = {},
    di =
      ((Gi.email = "em"),
      (Gi.phone_number = "pn"),
      (Gi.first_name = "fn"),
      (Gi.last_name = "ln"),
      (Gi.street = "sa"),
      (Gi.city = "ct"),
      (Gi.region = "rg"),
      (Gi.country = "co"),
      (Gi.postal_code = "pc"),
      (Gi.error_code = "ec"),
      Gi),
    Hi = {},
    si =
      ((Hi.email = "sha256_email_address"),
      (Hi.phone_number = "sha256_phone_number"),
      (Hi.first_name = "sha256_first_name"),
      (Hi.last_name = "sha256_last_name"),
      (Hi.street = "sha256_street"),
      Hi);
  var ii = Object.freeze([
    "email",
    "phone_number",
    "first_name",
    "last_name",
    "street",
  ]);
  var Ii = { Cn: "101925629~102067555~102067808~102081485" };
  var Ji = {},
    Ki = (B.google_tag_manager = B.google_tag_manager || {});
  Ji.zh = "4cb0";
  Ji.Fe = Number("0") || 0;
  Ji.qb = "dataLayer";
  Ji.En =
    "ChAIgLDqugYQ7OKozpXDsZ5KEiMAOLg3A7l2/1fCtl2atqSbMdltXxq/rFFTX23sIdFvZGGWlBoCYsY\x3d";
  var Li = {
      __cl: 1,
      __ecl: 1,
      __ehl: 1,
      __evl: 1,
      __fal: 1,
      __fil: 1,
      __fsl: 1,
      __hl: 1,
      __jel: 1,
      __lcl: 1,
      __sdl: 1,
      __tl: 1,
      __ytl: 1,
    },
    Mi = { __paused: 1, __tg: 1 },
    Ni;
  for (Ni in Li) Li.hasOwnProperty(Ni) && (Mi[Ni] = 1);
  var Oi = jb(""),
    Pi = !1,
    Qi,
    Ri = !1;
  Qi = Ri;
  var Si,
    Ti = !1;
  Si = Ti;
  var Ui,
    Vi = !1;
  Ui = Vi;
  Ji.Af = "www.googletagmanager.com";
  var Wi = "" + Ji.Af + (Qi ? "/gtag/js" : "/gtm.js"),
    Xi = null,
    Yi = null,
    Zi = {},
    $i = {};
  function aj() {
    var a = Ki.sequence || 1;
    Ki.sequence = a + 1;
    return a;
  }
  Ji.Tk = "";
  var bj = "";
  Ji.Ah = bj;
  var cj = function () {
      this.j = new Set();
    },
    ej = function () {
      return Array.from(dj.aa.j).join("~");
    },
    dj = new (function () {
      this.aa = new cj();
      this.C = !1;
      this.j = 0;
      this.K = this.P = this.Ua = this.H = "";
    })();
  function fj() {
    var a = dj.H.length;
    return dj.H[a - 1] === "/" ? dj.H.substring(0, a - 1) : dj.H;
  }
  function gj() {
    return dj.C ? (S(77) ? dj.j === 0 : dj.j !== 1) : !1;
  }
  function hj(a) {
    for (var b = {}, c = l(a.split("|")), d = c.next(); !d.done; d = c.next())
      b[d.value] = !0;
    return b;
  }
  var ij = new fb(),
    jj = {},
    kj = {},
    nj = {
      name: Ji.qb,
      set: function (a, b) {
        Rc(vb(a, b), jj);
        lj();
      },
      get: function (a) {
        return mj(a, 2);
      },
      reset: function () {
        ij = new fb();
        jj = {};
        lj();
      },
    };
  function mj(a, b) {
    return b != 2 ? ij.get(a) : oj(a);
  }
  function oj(a, b) {
    var c = a.split(".");
    b = b || [];
    for (var d = jj, e = 0; e < c.length; e++) {
      if (d === null) return !1;
      if (d === void 0) break;
      d = d[c[e]];
      if (b.indexOf(d) !== -1) return;
    }
    return d;
  }
  function pj(a, b) {
    kj.hasOwnProperty(a) || (ij.set(a, b), Rc(vb(a, b), jj), lj());
  }
  function qj() {
    for (
      var a = [
          "gtm.allowlist",
          "gtm.blocklist",
          "gtm.whitelist",
          "gtm.blacklist",
          "tagTypeBlacklist",
        ],
        b = 0;
      b < a.length;
      b++
    ) {
      var c = a[b],
        d = mj(c, 1);
      if (Array.isArray(d) || Qc(d)) d = Rc(d, null);
      kj[c] = d;
    }
  }
  function lj(a) {
    gb(kj, function (b, c) {
      ij.set(b, c);
      Rc(vb(b), jj);
      Rc(vb(b, c), jj);
      a && delete kj[b];
    });
  }
  function rj(a, b) {
    var c,
      d = (b === void 0 ? 2 : b) !== 1 ? oj(a) : ij.get(a);
    Oc(d) === "array" || Oc(d) === "object" ? (c = Rc(d, null)) : (c = d);
    return c;
  }
  var sj = function (a, b, c) {
      if (!c) return !1;
      for (
        var d = String(c.value),
          e,
          f = d
            .replace(/\["?'?/g, ".")
            .replace(/"?'?\]/g, "")
            .split(","),
          g = 0;
        g < f.length;
        g++
      ) {
        var k = f[g].trim();
        if (k && !sb(k, "#") && !sb(k, ".")) {
          if (sb(k, "dataLayer.")) e = mj(k.substring(10));
          else {
            var m = k.split(".");
            e = B[m.shift()];
            for (var n = 0; n < m.length; n++) e = e && e[m[n]];
          }
          if (e !== void 0) break;
        }
      }
      if (e === void 0 && Nh)
        try {
          var p = Mh(d);
          if (p && p.length > 0) {
            e = [];
            for (
              var q = 0;
              q < p.length &&
              q < (b === "email" || b === "phone_number" ? 5 : 1);
              q++
            )
              e.push(uc(p[q]) || lb(p[q].value));
            e = e.length === 1 ? e[0] : e;
          }
        } catch (r) {
          U(149);
        }
      return e ? ((a[b] = e), !0) : !1;
    },
    tj = function (a) {
      if (a) {
        var b = {},
          c = !1;
        c = sj(b, "email", a.email) || c;
        c = sj(b, "phone_number", a.phone) || c;
        b.address = [];
        for (var d = a.name_and_address || [], e = 0; e < d.length; e++) {
          var f = {};
          c = sj(f, "first_name", d[e].first_name) || c;
          c = sj(f, "last_name", d[e].last_name) || c;
          c = sj(f, "street", d[e].street) || c;
          c = sj(f, "city", d[e].city) || c;
          c = sj(f, "region", d[e].region) || c;
          c = sj(f, "country", d[e].country) || c;
          c = sj(f, "postal_code", d[e].postal_code) || c;
          b.address.push(f);
        }
        return c ? b : void 0;
      }
    },
    uj = function (a, b) {
      switch (a.enhanced_conversions_mode) {
        case "manual":
          if (b && Qc(b)) return b;
          var c = a.enhanced_conversions_manual_var;
          if (c !== void 0) return c;
          var d = B.enhanced_conversion_data;
          d && U(154);
          return d;
        case "automatic":
          return tj(a[O.g.Rg]);
      }
    },
    vj = function (a) {
      return Qc(a) ? !!a.enable_code : !1;
    };
  var wj = /:[0-9]+$/,
    xj = /^\d+\.fls\.doubleclick\.net$/;
  function yj(a, b, c, d) {
    for (var e = [], f = l(a.split("&")), g = f.next(); !g.done; g = f.next()) {
      var k = l(g.value.split("=")),
        m = k.next().value,
        n = sa(k);
      if (decodeURIComponent(m.replace(/\+/g, " ")) === b) {
        var p = n.join("=");
        if (!c) return d ? p : decodeURIComponent(p.replace(/\+/g, " "));
        e.push(d ? p : decodeURIComponent(p.replace(/\+/g, " ")));
      }
    }
    return c ? e : void 0;
  }
  function zj(a, b, c, d, e) {
    b && (b = String(b).toLowerCase());
    if (b === "protocol" || b === "port")
      a.protocol = Aj(a.protocol) || Aj(B.location.protocol);
    b === "port"
      ? (a.port = String(
          Number(a.hostname ? a.port : B.location.port) ||
            (a.protocol === "http" ? 80 : a.protocol === "https" ? 443 : "")
        ))
      : b === "host" &&
        (a.hostname = (a.hostname || B.location.hostname)
          .replace(wj, "")
          .toLowerCase());
    return Bj(a, b, c, d, e);
  }
  function Bj(a, b, c, d, e) {
    var f,
      g = Aj(a.protocol);
    b && (b = String(b).toLowerCase());
    switch (b) {
      case "url_no_fragment":
        f = Cj(a);
        break;
      case "protocol":
        f = g;
        break;
      case "host":
        f = a.hostname.replace(wj, "").toLowerCase();
        if (c) {
          var k = /^www\d*\./.exec(f);
          k && k[0] && (f = f.substring(k[0].length));
        }
        break;
      case "port":
        f = String(
          Number(a.port) || (g === "http" ? 80 : g === "https" ? 443 : "")
        );
        break;
      case "path":
        a.pathname || a.hostname || Va("TAGGING", 1);
        f = a.pathname.substring(0, 1) === "/" ? a.pathname : "/" + a.pathname;
        var m = f.split("/");
        (d || []).indexOf(m[m.length - 1]) >= 0 && (m[m.length - 1] = "");
        f = m.join("/");
        break;
      case "query":
        f = a.search.replace("?", "");
        e && (f = yj(f, e, !1));
        break;
      case "extension":
        var n = a.pathname.split(".");
        f = n.length > 1 ? n[n.length - 1] : "";
        f = f.split("/")[0];
        break;
      case "fragment":
        f = a.hash.replace("#", "");
        break;
      default:
        f = a && a.href;
    }
    return f;
  }
  function Aj(a) {
    return a ? a.replace(":", "").toLowerCase() : "";
  }
  function Cj(a) {
    var b = "";
    if (a && a.href) {
      var c = a.href.indexOf("#");
      b = c < 0 ? a.href : a.href.substring(0, c);
    }
    return b;
  }
  var Dj = {},
    Ej = 0;
  function Fj(a) {
    var b = Dj[a];
    if (!b) {
      var c = E.createElement("a");
      a && (c.href = a);
      var d = c.pathname;
      d[0] !== "/" && (a || Va("TAGGING", 1), (d = "/" + d));
      var e = c.hostname.replace(wj, "");
      b = {
        href: c.href,
        protocol: c.protocol,
        host: c.host,
        hostname: e,
        pathname: d,
        search: c.search,
        hash: c.hash,
        port: c.port,
      };
      Ej < 5 && ((Dj[a] = b), Ej++);
    }
    return b;
  }
  function Gj(a) {
    var b = Fj(B.location.href),
      c = zj(b, "host", !1);
    if (c && c.match(xj)) {
      var d = zj(b, "path");
      if (d) {
        var e = d.split(a + "=");
        if (e.length > 1) return e[1].split(";")[0].split("?")[0];
      }
    }
  }
  var Hj = {
    "https://www.google.com": "/g",
    "https://www.googleadservices.com": "/as",
    "https://pagead2.googlesyndication.com": "/gs",
  };
  function Ij(a, b) {
    if (a) {
      var c = "" + a;
      c.indexOf("http://") !== 0 &&
        c.indexOf("https://") !== 0 &&
        (c = "https://" + c);
      c[c.length - 1] === "/" && (c = c.substring(0, c.length - 1));
      return Fj("" + c + b).href;
    }
  }
  function Jj(a, b) {
    if (gj() || Si) return Ij(a, b);
  }
  function Kj() {
    return !!Ji.Ah && Ji.Ah.split("@@").join("") !== "SGTM_TOKEN";
  }
  function Lj(a) {
    for (var b = l([O.g.vd, O.g.Sb]), c = b.next(); !c.done; c = b.next()) {
      var d = V(a, c.value);
      if (d) return d;
    }
  }
  function Mj(a, b) {
    return gj() ? "" + fj() + (b ? Hj[a] || "" : "") : a;
  }
  function Nj(a) {
    var b = String(a[He.ra] || "").replace(/_/g, "");
    return sb(b, "cvt") ? "cvt" : b;
  }
  var Oj =
    B.location.search.indexOf("?gtm_latency=") >= 0 ||
    B.location.search.indexOf("&gtm_latency=") >= 0;
  var Pj = { sampleRate: "0.005000", Pk: "", Bn: "0.01" },
    Qj = Math.random(),
    Rj;
  if (!(Rj = Oj)) {
    var Sj = Pj.sampleRate;
    Rj = Qj < Number(Sj);
  }
  var Tj = Rj,
    Uj =
      (fc == null ? void 0 : fc.includes("gtm_debug=d")) ||
      Oj ||
      Qj >= 1 - Number(Pj.Bn);
  var Vj = /gtag[.\/]js/,
    Wj = /gtm[.\/]js/,
    Xj = !1;
  function Yj(a) {
    if (Xj) return "1";
    var b,
      c = (b = a.scriptElement) == null ? void 0 : b.src;
    if (c) {
      if (Vj.test(c)) return "3";
      if (Wj.test(c)) return "2";
    }
    return "0";
  }
  function Zj(a, b) {
    var c = ak();
    c.pending || (c.pending = []);
    bb(c.pending, function (d) {
      return (
        d.target.ctid === a.ctid && d.target.isDestination === a.isDestination
      );
    }) || c.pending.push({ target: a, onLoad: b });
  }
  function bk() {
    var a = B.google_tags_first_party;
    Array.isArray(a) || (a = []);
    for (var b = {}, c = l(a), d = c.next(); !d.done; d = c.next())
      b[d.value] = !0;
    return Object.freeze(b);
  }
  var dk = function () {
    this.container = {};
    this.destination = {};
    this.canonical = {};
    this.pending = [];
    this.siloed = [];
    this.injectedFirstPartyContainers = {};
    this.injectedFirstPartyContainers = bk();
  };
  function ak() {
    var a = gc("google_tag_data", {}),
      b = a.tidr;
    (b && typeof b === "object") || ((b = new dk()), (a.tidr = b));
    var c = b;
    c.container || (c.container = {});
    c.destination || (c.destination = {});
    c.canonical || (c.canonical = {});
    c.pending || (c.pending = []);
    c.siloed || (c.siloed = []);
    c.injectedFirstPartyContainers || (c.injectedFirstPartyContainers = bk());
    return c;
  }
  var ek = {},
    fk = !1,
    Mf = {
      ctid: "GTM-MW5VCK",
      canonicalContainerId: "1766321",
      uk: "GTM-MW5VCK",
      vk: "GTM-MW5VCK",
    };
  ek.Ce = jb("");
  function gk() {
    return (
      ek.Ce &&
      hk().some(function (a) {
        return a === Mf.ctid;
      })
    );
  }
  function ik() {
    var a = jk();
    return fk ? a.map(kk) : a;
  }
  function lk() {
    var a = hk();
    return fk ? a.map(kk) : a;
  }
  function mk() {
    return nk(Mf.ctid);
  }
  function ok() {
    return nk(Mf.canonicalContainerId || "_" + Mf.ctid);
  }
  function jk() {
    return Mf.uk ? Mf.uk.split("|") : [Mf.ctid];
  }
  function hk() {
    return Mf.vk ? Mf.vk.split("|") : [];
  }
  function pk() {
    var a = qk(rk()),
      b = a && a.parent;
    if (b) return qk(b);
  }
  function qk(a) {
    var b = ak();
    return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid];
  }
  function nk(a) {
    return fk ? kk(a) : a;
  }
  function kk(a) {
    return "siloed_" + a;
  }
  function sk(a) {
    return fk ? tk(a) : a;
  }
  function tk(a) {
    a = String(a);
    return sb(a, "siloed_") ? a.substring(7) : a;
  }
  function uk() {
    var a = !1;
    if (a) {
      var b = ak();
      if (b.siloed) {
        for (
          var c = [], d = jk().map(kk), e = hk().map(kk), f = {}, g = 0;
          g < b.siloed.length;
          f = { ig: void 0 }, g++
        )
          (f.ig = b.siloed[g]),
            !fk &&
            bb(
              f.ig.isDestination ? e : d,
              (function (k) {
                return function (m) {
                  return m === k.ig.ctid;
                };
              })(f)
            )
              ? (fk = !0)
              : c.push(f.ig);
        b.siloed = c;
      }
    }
  }
  function vk() {
    var a = ak();
    if (a.pending) {
      for (
        var b, c = [], d = !1, e = ik(), f = lk(), g = {}, k = 0;
        k < a.pending.length;
        g = { lf: void 0 }, k++
      )
        (g.lf = a.pending[k]),
          bb(
            g.lf.target.isDestination ? f : e,
            (function (m) {
              return function (n) {
                return n === m.lf.target.ctid;
              };
            })(g)
          )
            ? d || ((b = g.lf.onLoad), (d = !0))
            : c.push(g.lf);
      a.pending = c;
      if (b)
        try {
          b(ok());
        } catch (m) {}
    }
  }
  function wk() {
    for (
      var a = Mf.ctid,
        b = ik(),
        c = lk(),
        d = function (n, p) {
          var q = {
            canonicalContainerId: Mf.canonicalContainerId,
            scriptContainerId: a,
            state: 2,
            containers: b.slice(),
            destinations: c.slice(),
          };
          ec && (q.scriptElement = ec);
          fc && (q.scriptSource = fc);
          if (pk() === void 0) {
            var r;
            a: {
              if ((q.scriptContainerId || "").indexOf("GTM-") >= 0) {
                var u;
                b: {
                  var v,
                    t = (v = q.scriptElement) == null ? void 0 : v.src;
                  if (t) {
                    for (
                      var w = dj.C,
                        x = Fj(t),
                        y = w ? x.pathname : "" + x.hostname + x.pathname,
                        A = E.scripts,
                        C = "",
                        D = 0;
                      D < A.length;
                      ++D
                    ) {
                      var G = A[D];
                      if (
                        !(
                          G.innerHTML.length === 0 ||
                          (!w &&
                            G.innerHTML.indexOf(
                              q.scriptContainerId || "SHOULD_NOT_BE_SET"
                            ) < 0) ||
                          G.innerHTML.indexOf(y) < 0
                        )
                      ) {
                        if (G.innerHTML.indexOf("(function(w,d,s,l,i)") >= 0) {
                          u = String(D);
                          break b;
                        }
                        C = String(D);
                      }
                    }
                    if (C) {
                      u = C;
                      break b;
                    }
                  }
                  u = void 0;
                }
                var J = u;
                if (J) {
                  Xj = !0;
                  r = J;
                  break a;
                }
              }
              var F = [].slice.call(document.scripts);
              r = q.scriptElement ? String(F.indexOf(q.scriptElement)) : "-1";
            }
            q.htmlLoadOrder = r;
            q.loadScriptType = Yj(q);
          }
          var T = p ? e.destination : e.container,
            N = T[n];
          N ? (p && N.state === 0 && U(93), Object.assign(N, q)) : (T[n] = q);
        },
        e = ak(),
        f = l(b),
        g = f.next();
      !g.done;
      g = f.next()
    )
      d(g.value, !1);
    for (var k = l(c), m = k.next(); !m.done; m = k.next()) d(m.value, !0);
    e.canonical[ok()] = {};
    vk();
  }
  function xk(a) {
    return !!ak().container[a];
  }
  function yk(a) {
    var b = ak().destination[a];
    return !!b && !!b.state;
  }
  function rk() {
    return { ctid: mk(), isDestination: ek.Ce };
  }
  function zk(a) {
    var b = ak();
    (b.siloed = b.siloed || []).push(a);
  }
  function Ak() {
    var a = ak().container,
      b;
    for (b in a) if (a.hasOwnProperty(b) && a[b].state === 1) return !0;
    return !1;
  }
  function Bk() {
    var a = {};
    gb(ak().destination, function (b, c) {
      c.state === 0 && (a[tk(b)] = c);
    });
    return a;
  }
  function Ck(a) {
    return !!(
      a &&
      a.parent &&
      a.context &&
      a.context.source === 1 &&
      a.parent.ctid.indexOf("GTM-") !== 0
    );
  }
  var Dk = "/td?id=" + Mf.ctid,
    Ek = ["v", "t", "pid", "dl", "tdp"],
    Fk = ["mcc"],
    Gk = {},
    Hk = {};
  function Ik(a, b, c) {
    Hk[a] = b;
    (c === void 0 || c) && Jk(a);
  }
  function Jk(a, b) {
    if (Gk[a] === void 0 || (b === void 0 ? 0 : b)) Gk[a] = !0;
  }
  function Kk(a) {
    a = a === void 0 ? !1 : a;
    var b = Object.keys(Gk)
      .filter(function (c) {
        return Gk[c] === !0 && Hk[c] !== void 0 && (a || !Fk.includes(c));
      })
      .map(function (c) {
        var d = Hk[c];
        typeof d === "function" && (d = d());
        return d ? "&" + c + "=" + d : "";
      })
      .join("");
    return "" + Mj("https://www.googletagmanager.com") + Dk + ("" + b + "&z=0");
  }
  function Lk() {
    Object.keys(Gk).forEach(function (a) {
      Ek.indexOf(a) < 0 && (Gk[a] = !1);
    });
  }
  function Mk(a) {
    a = a === void 0 ? !1 : a;
    if (Uj && Mf.ctid) {
      var b = Kk(a);
      a ? Ac(b) : qc(b);
      Lk();
    }
  }
  function Nk() {
    Object.keys(Gk).filter(function (a) {
      return Gk[a] && !Ek.includes(a);
    }).length > 0 && Mk(!0);
  }
  var Ok = db();
  function Pk() {
    Ok = db();
  }
  function Qk() {
    Ik("v", "3");
    Ik("t", "t");
    Ik("pid", function () {
      return String(Ok);
    });
    rc(B, "pagehide", Nk);
    B.setInterval(Pk, 864e5);
  }
  function Rk() {
    var a = gc("google_tag_data", {});
    return (a.ics = a.ics || new Sk());
  }
  var Sk = function () {
    this.entries = {};
    this.waitPeriodTimedOut =
      this.wasSetLate =
      this.accessedAny =
      this.accessedDefault =
      this.usedImplicit =
      this.usedUpdate =
      this.usedDefault =
      this.usedDeclare =
      this.active =
        !1;
    this.j = [];
  };
  Sk.prototype.default = function (a, b, c, d, e, f, g) {
    this.usedDefault ||
      this.usedDeclare ||
      (!this.accessedDefault && !this.accessedAny) ||
      (this.wasSetLate = !0);
    this.usedDefault = this.active = !0;
    Va("TAGGING", 19);
    b == null ? Va("TAGGING", 18) : Tk(this, a, b === "granted", c, d, e, f, g);
  };
  Sk.prototype.waitForUpdate = function (a, b, c) {
    for (var d = 0; d < a.length; d++)
      Tk(this, a[d], void 0, void 0, "", "", b, c);
  };
  var Tk = function (a, b, c, d, e, f, g, k) {
    var m = a.entries,
      n = m[b] || {},
      p = n.region,
      q = d && z(d) ? d.toUpperCase() : void 0;
    e = e.toUpperCase();
    f = f.toUpperCase();
    if (e === "" || q === f || (q === e ? p !== f : !q && !p)) {
      var r = !!(g && g > 0 && n.update === void 0),
        u = {
          region: q,
          declare_region: n.declare_region,
          implicit: n.implicit,
          default: c !== void 0 ? c : n.default,
          declare: n.declare,
          update: n.update,
          quiet: r,
        };
      if (e !== "" || n.default !== !1) m[b] = u;
      r &&
        B.setTimeout(function () {
          m[b] === u &&
            u.quiet &&
            (Va("TAGGING", 2),
            (a.waitPeriodTimedOut = !0),
            a.clearTimeout(b, void 0, k),
            a.notifyListeners());
        }, g);
    }
  };
  h = Sk.prototype;
  h.clearTimeout = function (a, b, c) {
    var d = [a],
      e = c.delegatedConsentTypes,
      f;
    for (f in e) e.hasOwnProperty(f) && e[f] === a && d.push(f);
    var g = this.entries[a] || {},
      k = this.getConsentState(a, c);
    if (g.quiet) {
      g.quiet = !1;
      for (var m = l(d), n = m.next(); !n.done; n = m.next()) Uk(this, n.value);
    } else if (b !== void 0 && k !== b)
      for (var p = l(d), q = p.next(); !q.done; q = p.next()) Uk(this, q.value);
  };
  h.update = function (a, b, c) {
    this.usedDefault ||
      this.usedDeclare ||
      this.usedUpdate ||
      !this.accessedAny ||
      (this.wasSetLate = !0);
    this.usedUpdate = this.active = !0;
    if (b != null) {
      var d = this.getConsentState(a, c),
        e = this.entries;
      (e[a] = e[a] || {}).update = b === "granted";
      this.clearTimeout(a, d, c);
    }
  };
  h.declare = function (a, b, c, d, e) {
    this.usedDeclare = this.active = !0;
    var f = this.entries,
      g = f[a] || {},
      k = g.declare_region,
      m = c && z(c) ? c.toUpperCase() : void 0;
    d = d.toUpperCase();
    e = e.toUpperCase();
    if (d === "" || m === e || (m === d ? k !== e : !m && !k)) {
      var n = {
        region: g.region,
        declare_region: m,
        declare: b === "granted",
        implicit: g.implicit,
        default: g.default,
        update: g.update,
        quiet: g.quiet,
      };
      if (d !== "" || g.declare !== !1) f[a] = n;
    }
  };
  h.implicit = function (a, b) {
    this.usedImplicit = !0;
    var c = this.entries,
      d = (c[a] = c[a] || {});
    d.implicit !== !1 && (d.implicit = b === "granted");
  };
  h.getConsentState = function (a, b) {
    var c = this.entries,
      d = c[a] || {},
      e = d.update;
    if (e !== void 0) return e ? 1 : 2;
    if (b.usedContainerScopedDefaults) {
      var f = b.containerScopedDefaults[a];
      if (f === 3) return 1;
      if (f === 2) return 2;
    } else if (((e = d.default), e !== void 0)) return e ? 1 : 2;
    if (b == null ? 0 : b.delegatedConsentTypes.hasOwnProperty(a)) {
      var g = b.delegatedConsentTypes[a],
        k = c[g] || {};
      e = k.update;
      if (e !== void 0) return e ? 1 : 2;
      if (b.usedContainerScopedDefaults) {
        var m = b.containerScopedDefaults[g];
        if (m === 3) return 1;
        if (m === 2) return 2;
      } else if (((e = k.default), e !== void 0)) return e ? 1 : 2;
    }
    e = d.declare;
    if (e !== void 0) return e ? 1 : 2;
    e = d.implicit;
    return e !== void 0 ? (e ? 3 : 4) : 0;
  };
  h.addListener = function (a, b) {
    this.j.push({ consentTypes: a, Hd: b });
  };
  var Uk = function (a, b) {
    for (var c = 0; c < a.j.length; ++c) {
      var d = a.j[c];
      Array.isArray(d.consentTypes) &&
        d.consentTypes.indexOf(b) !== -1 &&
        (d.wk = !0);
    }
  };
  Sk.prototype.notifyListeners = function (a, b) {
    for (var c = 0; c < this.j.length; ++c) {
      var d = this.j[c];
      if (d.wk) {
        d.wk = !1;
        try {
          d.Hd({ consentEventId: a, consentPriorityId: b });
        } catch (e) {}
      }
    }
  };
  var Vk = !1,
    Wk = !1,
    Xk = {},
    Yk = {
      delegatedConsentTypes: {},
      corePlatformServices: {},
      usedCorePlatformServices: !1,
      selectedAllCorePlatformServices: !1,
      containerScopedDefaults:
        ((Xk.ad_storage = 1),
        (Xk.analytics_storage = 1),
        (Xk.ad_user_data = 1),
        (Xk.ad_personalization = 1),
        Xk),
      usedContainerScopedDefaults: !1,
    };
  function Zk(a) {
    var b = Rk();
    b.accessedAny = !0;
    return (z(a) ? [a] : a).every(function (c) {
      switch (b.getConsentState(c, Yk)) {
        case 1:
        case 3:
          return !0;
        case 2:
        case 4:
          return !1;
        default:
          return !0;
      }
    });
  }
  function $k(a) {
    var b = Rk();
    b.accessedAny = !0;
    return b.getConsentState(a, Yk);
  }
  function al(a) {
    for (var b = {}, c = l(a), d = c.next(); !d.done; d = c.next()) {
      var e = d.value;
      b[e] = Yk.corePlatformServices[e] !== !1;
    }
    return b;
  }
  function bl(a) {
    var b = Rk();
    b.accessedAny = !0;
    return !(b.entries[a] || {}).quiet;
  }
  function cl() {
    if (!Yh(9)) return !1;
    var a = Rk();
    a.accessedAny = !0;
    if (a.active) return !0;
    if (!Yk.usedContainerScopedDefaults) return !1;
    for (
      var b = l(Object.keys(Yk.containerScopedDefaults)), c = b.next();
      !c.done;
      c = b.next()
    )
      if (Yk.containerScopedDefaults[c.value] !== 1) return !0;
    return !1;
  }
  function dl(a, b) {
    Rk().addListener(a, b);
  }
  function el(a, b) {
    Rk().notifyListeners(a, b);
  }
  function fl(a, b) {
    function c() {
      for (var e = 0; e < b.length; e++) if (!bl(b[e])) return !0;
      return !1;
    }
    if (c()) {
      var d = !1;
      dl(b, function (e) {
        d || c() || ((d = !0), a(e));
      });
    } else a({});
  }
  function gl(a, b) {
    function c() {
      for (var k = [], m = 0; m < e.length; m++) {
        var n = e[m];
        Zk(n) && !f[n] && k.push(n);
      }
      return k;
    }
    function d(k) {
      for (var m = 0; m < k.length; m++) f[k[m]] = !0;
    }
    var e = z(b) ? [b] : b,
      f = {},
      g = c();
    g.length !== e.length &&
      (d(g),
      dl(e, function (k) {
        function m(q) {
          q.length !== 0 && (d(q), (k.consentTypes = q), a(k));
        }
        var n = c();
        if (n.length !== 0) {
          var p = Object.keys(f).length;
          n.length + p >= e.length
            ? m(n)
            : B.setTimeout(function () {
                m(c());
              }, 500);
        }
      }));
  }
  var hl = [
      "ad_storage",
      "analytics_storage",
      "ad_user_data",
      "ad_personalization",
    ],
    il = !1,
    jl = !1;
  function kl() {
    !jl &&
      il &&
      (hl.some(function (a) {
        return Yk.containerScopedDefaults[a] !== 1;
      }) ||
        ll("mbc"));
    jl = !0;
  }
  function ll(a) {
    Uj && (Ik(a, "1"), Mk());
  }
  function ml(a) {
    Va("HEALTH", a);
  }
  var nl;
  try {
    nl = JSON.parse(
      Ta(
        "eyIwIjoiR0IiLCIxIjoiIiwiMiI6ZmFsc2UsIjMiOiJnb29nbGUuY28udWsiLCI0IjoicmVnaW9uMSIsIjUiOmZhbHNlLCI2IjpmYWxzZSwiNyI6ImFkX3N0b3JhZ2V8YW5hbHl0aWNzX3N0b3JhZ2V8YWRfdXNlcl9kYXRhfGFkX3BlcnNvbmFsaXphdGlvbiJ9"
      )
    );
  } catch (a) {
    U(123), ml(2), (nl = {});
  }
  function ol() {
    return nl["0"] || "";
  }
  function pl() {
    return nl["1"] || "";
  }
  function ql() {
    var a = !1;
    return a;
  }
  function rl() {
    return nl["6"] !== !1;
  }
  function sl() {
    var a = "";
    return a;
  }
  function tl() {
    var a = !1;
    a = !!nl["5"];
    return a;
  }
  function ul() {
    var a = "";
    return a;
  }
  var vl = [O.g.N, O.g.U, O.g.O, O.g.wa],
    wl,
    xl;
  function yl(a) {
    for (
      var b = a[O.g.Kb], c = Array.isArray(b) ? b : [b], d = { Ye: 0 };
      d.Ye < c.length;
      d = { Ye: d.Ye }, ++d.Ye
    )
      gb(
        a,
        (function (e) {
          return function (f, g) {
            if (f !== O.g.Kb) {
              var k = c[e.Ye],
                m = ol(),
                n = pl();
              Wk = !0;
              Vk && Va("TAGGING", 20);
              Rk().declare(f, g, k, m, n);
            }
          };
        })(d)
      );
  }
  function zl(a) {
    kl();
    !xl && wl && ll("crc");
    xl = !0;
    var b = a[O.g.Kb];
    b && U(40);
    var c = a[O.g.yf];
    c && U(41);
    for (
      var d = Array.isArray(b) ? b : [b], e = { Ze: 0 };
      e.Ze < d.length;
      e = { Ze: e.Ze }, ++e.Ze
    )
      gb(
        a,
        (function (f) {
          return function (g, k) {
            if (g !== O.g.Kb && g !== O.g.yf) {
              var m = d[f.Ze],
                n = Number(c),
                p = ol(),
                q = pl();
              n = n === void 0 ? 0 : n;
              Vk = !0;
              Wk && Va("TAGGING", 20);
              Rk().default(g, k, m, p, q, n, Yk);
            }
          };
        })(e)
      );
  }
  function Al(a) {
    Yk.usedContainerScopedDefaults = !0;
    var b = a[O.g.Kb];
    if (b) {
      var c = Array.isArray(b) ? b : [b];
      if (!c.includes(pl()) && !c.includes(ol())) return;
    }
    gb(a, function (d, e) {
      switch (d) {
        case "ad_storage":
        case "analytics_storage":
        case "ad_user_data":
        case "ad_personalization":
          break;
        default:
          return;
      }
      Yk.usedContainerScopedDefaults = !0;
      Yk.containerScopedDefaults[d] = e === "granted" ? 3 : 2;
    });
  }
  function Bl(a, b) {
    kl();
    wl = !0;
    gb(a, function (c, d) {
      Vk = !0;
      Wk && Va("TAGGING", 20);
      Rk().update(c, d, Yk);
    });
    el(b.eventId, b.priorityId);
  }
  function Cl(a) {
    a.hasOwnProperty("all") &&
      ((Yk.selectedAllCorePlatformServices = !0),
      gb(xh, function (b) {
        Yk.corePlatformServices[b] = a.all === "granted";
        Yk.usedCorePlatformServices = !0;
      }));
    gb(a, function (b, c) {
      b !== "all" &&
        ((Yk.corePlatformServices[b] = c === "granted"),
        (Yk.usedCorePlatformServices = !0));
    });
  }
  function W(a) {
    Array.isArray(a) || (a = [a]);
    return a.every(function (b) {
      return Zk(b);
    });
  }
  function Dl(a, b) {
    dl(a, b);
  }
  function El(a, b) {
    gl(a, b);
  }
  function Fl(a, b) {
    fl(a, b);
  }
  function Gl() {
    var a = [O.g.N, O.g.wa, O.g.O];
    Rk().waitForUpdate(a, 500, Yk);
  }
  function Hl(a) {
    for (var b = l(a), c = b.next(); !c.done; c = b.next()) {
      var d = c.value;
      Rk().clearTimeout(d, void 0, Yk);
    }
    el();
  }
  var Il = !1,
    Jl = [];
  var Kl = {
      Vj: "service_worker_endpoint",
      Bh: "shared_user_id",
      Ch: "shared_user_id_requested",
      He: "shared_user_id_source",
      zf: "cookie_deprecation_label",
    },
    Ll;
  function Ml(a) {
    if (!Ll) {
      Ll = {};
      for (var b = l(Object.keys(Kl)), c = b.next(); !c.done; c = b.next())
        Ll[Kl[c.value]] = !0;
    }
    return !!Ll[a];
  }
  function Nl(a, b) {
    b = b === void 0 ? !1 : b;
    if (Ml(a)) {
      var c,
        d,
        e =
          (d = (c = gc("google_tag_data", {})).xcd) != null ? d : (c.xcd = {});
      if (e[a]) return e[a];
      if (b) {
        var f = void 0,
          g = 1,
          k = {},
          m = {
            set: function (n) {
              f = n;
              m.notify();
            },
            get: function () {
              return f;
            },
            subscribe: function (n) {
              k[String(g)] = n;
              return g++;
            },
            unsubscribe: function (n) {
              var p = String(n);
              return k.hasOwnProperty(p) ? (delete k[p], !0) : !1;
            },
            notify: function () {
              for (
                var n = l(Object.keys(k)), p = n.next();
                !p.done;
                p = n.next()
              ) {
                var q = p.value;
                try {
                  k[q](a, f);
                } catch (r) {}
              }
            },
          };
        return (e[a] = m);
      }
    }
  }
  function Ol(a, b) {
    var c = Nl(a, !0);
    c && c.set(b);
  }
  function Pl(a) {
    var b;
    return (b = Nl(a)) == null ? void 0 : b.get();
  }
  function Ql(a, b) {
    if (typeof b === "function") {
      var c;
      return (c = Nl(a, !0)) == null ? void 0 : c.subscribe(b);
    }
  }
  function Rl(a, b) {
    var c = Nl(a);
    return c ? c.unsubscribe(b) : !1;
  }
  function Sl() {
    if (Ki.pscdl !== void 0) Pl(Kl.zf) === void 0 && Ol(Kl.zf, Ki.pscdl);
    else {
      var a = function (c) {
          Ki.pscdl = c;
          Ol(Kl.zf, c);
        },
        b = function () {
          a("error");
        };
      try {
        cc.cookieDeprecationLabel
          ? (a("pending"),
            cc.cookieDeprecationLabel.getValue().then(a).catch(b))
          : a("noapi");
      } catch (c) {
        b(c);
      }
    }
  }
  function Tl(a, b) {
    b &&
      gb(b, function (c, d) {
        typeof d !== "object" && d !== void 0 && (a["1p." + c] = String(d));
      });
  }
  var Ul = /[A-Z]+/,
    Vl = /\s/;
  function Wl(a, b) {
    if (z(a)) {
      a = lb(a);
      var c = a.indexOf("-");
      if (!(c < 0)) {
        var d = a.substring(0, c);
        if (Ul.test(d)) {
          var e = a.substring(c + 1),
            f;
          if (b) {
            var g = function (n) {
              var p = n.indexOf("/");
              return p < 0 ? [n] : [n.substring(0, p), n.substring(p + 1)];
            };
            f = g(e);
            if (d === "DC" && f.length === 2) {
              var k = g(f[1]);
              k.length === 2 && ((f[1] = k[0]), f.push(k[1]));
            }
          } else {
            f = e.split("/");
            for (var m = 0; m < f.length; m++)
              if (!f[m] || (Vl.test(f[m]) && (d !== "AW" || m !== 1))) return;
          }
          return { id: a, prefix: d, destinationId: d + "-" + f[0], ids: f };
        }
      }
    }
  }
  function Xl(a, b) {
    for (var c = {}, d = 0; d < a.length; ++d) {
      var e = Wl(a[d], b);
      e && (c[e.id] = e);
    }
    Yl(c);
    var f = [];
    gb(c, function (g, k) {
      f.push(k);
    });
    return f;
  }
  function Yl(a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        d.prefix === "AW" && d.ids[Zl[2]] && b.push(d.destinationId);
      }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  var $l = {},
    Zl =
      (($l[0] = 0),
      ($l[1] = 0),
      ($l[2] = 1),
      ($l[3] = 0),
      ($l[4] = 1),
      ($l[5] = 2),
      ($l[6] = 0),
      ($l[7] = 0),
      ($l[8] = 0),
      $l);
  var am = Number("") || 500,
    bm = {},
    cm = {},
    dm = { initialized: 11, complete: 12, interactive: 13 },
    em = {},
    fm = Object.freeze(((em[O.g.Oa] = !0), em)),
    gm =
      E.location.search.indexOf("?gtm_diagnostics=") >= 0 ||
      E.location.search.indexOf("&gtm_diagnostics=") >= 0,
    hm = void 0;
  function im(a, b) {
    if (b.length && Uj) {
      var c;
      (c = bm)[a] != null || (c[a] = []);
      cm[a] != null || (cm[a] = []);
      var d = b.filter(function (e) {
        return !cm[a].includes(e);
      });
      bm[a].push.apply(bm[a], ua(d));
      cm[a].push.apply(cm[a], ua(d));
      !hm &&
        d.length > 0 &&
        (Jk("tdc", !0),
        (hm = B.setTimeout(function () {
          Mk();
          bm = {};
          hm = void 0;
        }, am)));
    }
  }
  function jm(a, b, c) {
    if (Uj && a === "config") {
      var d,
        e = (d = Wl(b)) == null ? void 0 : d.ids;
      if (!(e && e.length > 1)) {
        var f,
          g = gc("google_tag_data", {});
        g.td || (g.td = {});
        f = g.td;
        var k = Rc(c.K);
        Rc(c.j, k);
        var m = [],
          n;
        for (n in f)
          if (f.hasOwnProperty(n)) {
            var p = km(f[n], k);
            p.length && (gm && console.log(p), m.push(n));
          }
        m.length && (im(b, m), Va("TAGGING", dm[E.readyState] || 14));
        f[b] = k;
      }
    }
  }
  function lm(a, b) {
    var c = {},
      d;
    for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
    for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
    return c;
  }
  function km(a, b, c, d) {
    c = c === void 0 ? {} : c;
    d = d === void 0 ? "" : d;
    if (a === b) return [];
    var e = function (r, u) {
        var v;
        Oc(u) === "object" ? (v = u[r]) : Oc(u) === "array" && (v = u[r]);
        return v === void 0 ? fm[r] : v;
      },
      f = lm(a, b),
      g;
    for (g in f)
      if (f.hasOwnProperty(g)) {
        var k = (d ? d + "." : "") + g,
          m = e(g, a),
          n = e(g, b),
          p = Oc(m) === "object" || Oc(m) === "array",
          q = Oc(n) === "object" || Oc(n) === "array";
        if (p && q) km(m, n, c, k);
        else if (p || q || m !== n) c[k] = !0;
      }
    return Object.keys(c);
  }
  function mm() {
    Ik(
      "tdc",
      function () {
        hm && (B.clearTimeout(hm), (hm = void 0));
        var a = [],
          b;
        for (b in bm) bm.hasOwnProperty(b) && a.push(b + "*" + bm[b].join("."));
        return a.length ? a.join("!") : void 0;
      },
      !1
    );
  }
  var nm = function (a, b, c, d, e, f, g, k, m, n, p) {
      this.eventId = a;
      this.priorityId = b;
      this.j = c;
      this.P = d;
      this.H = e;
      this.K = f;
      this.C = g;
      this.eventMetadata = k;
      this.onSuccess = m;
      this.onFailure = n;
      this.isGtmEvent = p;
    },
    om = function (a, b) {
      var c = [];
      switch (b) {
        case 3:
          c.push(a.j);
          c.push(a.P);
          c.push(a.H);
          c.push(a.K);
          c.push(a.C);
          break;
        case 2:
          c.push(a.j);
          break;
        case 1:
          c.push(a.P);
          c.push(a.H);
          c.push(a.K);
          c.push(a.C);
          break;
        case 4:
          c.push(a.j), c.push(a.P), c.push(a.H), c.push(a.K);
      }
      return c;
    },
    V = function (a, b, c, d) {
      for (
        var e = l(om(a, d === void 0 ? 3 : d)), f = e.next();
        !f.done;
        f = e.next()
      ) {
        var g = f.value;
        if (g[b] !== void 0) return g[b];
      }
      return c;
    },
    pm = function (a) {
      for (
        var b = {}, c = om(a, 4), d = l(c), e = d.next();
        !e.done;
        e = d.next()
      )
        for (
          var f = Object.keys(e.value), g = l(f), k = g.next();
          !k.done;
          k = g.next()
        )
          b[k.value] = 1;
      return Object.keys(b);
    },
    qm = function (a, b, c) {
      function d(n) {
        Qc(n) &&
          gb(n, function (p, q) {
            f = !0;
            e[p] = q;
          });
      }
      var e = {},
        f = !1,
        g = om(a, c === void 0 ? 3 : c);
      g.reverse();
      for (var k = l(g), m = k.next(); !m.done; m = k.next()) d(m.value[b]);
      return f ? e : void 0;
    },
    rm = function (a) {
      for (
        var b = [O.g.ed, O.g.Yc, O.g.Zc, O.g.bd, O.g.dd, O.g.fd, O.g.gd],
          c = om(a, 3),
          d = l(c),
          e = d.next();
        !e.done;
        e = d.next()
      ) {
        for (
          var f = e.value, g = {}, k = !1, m = l(b), n = m.next();
          !n.done;
          n = m.next()
        ) {
          var p = n.value;
          f[p] !== void 0 && ((g[p] = f[p]), (k = !0));
        }
        var q = k ? g : void 0;
        if (q) return q;
      }
      return {};
    },
    sm = function (a, b) {
      this.eventId = a;
      this.priorityId = b;
      this.C = {};
      this.P = {};
      this.j = {};
      this.H = {};
      this.aa = {};
      this.K = {};
      this.eventMetadata = {};
      this.isGtmEvent = !1;
      this.onSuccess = function () {};
      this.onFailure = function () {};
    },
    tm = function (a, b) {
      a.C = b;
      return a;
    },
    um = function (a, b) {
      a.P = b;
      return a;
    },
    vm = function (a, b) {
      a.j = b;
      return a;
    },
    wm = function (a, b) {
      a.H = b;
      return a;
    },
    xm = function (a, b) {
      a.aa = b;
      return a;
    },
    ym = function (a, b) {
      a.K = b;
      return a;
    },
    zm = function (a, b) {
      a.eventMetadata = b || {};
      return a;
    },
    Am = function (a, b) {
      a.onSuccess = b;
      return a;
    },
    Bm = function (a, b) {
      a.onFailure = b;
      return a;
    },
    Cm = function (a, b) {
      a.isGtmEvent = b;
      return a;
    },
    Dm = function (a) {
      return new nm(
        a.eventId,
        a.priorityId,
        a.C,
        a.P,
        a.j,
        a.H,
        a.K,
        a.eventMetadata,
        a.onSuccess,
        a.onFailure,
        a.isGtmEvent
      );
    };
  var Em = { Ok: Number("5"), vo: Number("") },
    Fm = [];
  function Gm(a) {
    Fm.push(a);
  }
  var Hm = "?id=" + Mf.ctid,
    Im = void 0,
    Jm = {},
    Km = void 0,
    Lm = new (function () {
      var a = 5;
      Em.Ok > 0 && (a = Em.Ok);
      this.C = a;
      this.j = 0;
      this.H = [];
    })(),
    Mm = 1e3;
  function Nm(a, b) {
    var c = Im;
    if (c === void 0)
      if (b) c = aj();
      else return "";
    for (
      var d = [Mj("https://www.googletagmanager.com"), "/a", Hm],
        e = l(Fm),
        f = e.next();
      !f.done;
      f = e.next()
    )
      for (
        var g = f.value, k = g({ eventId: c, Tc: !!a }), m = l(k), n = m.next();
        !n.done;
        n = m.next()
      ) {
        var p = l(n.value),
          q = p.next().value,
          r = p.next().value;
        d.push("&" + q + "=" + r);
      }
    d.push("&z=0");
    return d.join("");
  }
  function Om() {
    Km && (B.clearTimeout(Km), (Km = void 0));
    if (Im !== void 0 && Pm) {
      var a;
      (a = Jm[Im]) || (a = Lm.j < Lm.C ? !1 : nb() - Lm.H[Lm.j % Lm.C] < 1e3);
      if (a || Mm-- <= 0) U(1), (Jm[Im] = !0);
      else {
        var b = Lm.j++ % Lm.C;
        Lm.H[b] = nb();
        var c = Nm(!0);
        qc(c);
        Pm = !1;
      }
    }
  }
  var Pm = !1;
  function Qm(a) {
    Jm[a] ||
      (a !== Im && (Om(), (Im = a)),
      (Pm = !0),
      Km || (Km = B.setTimeout(Om, 500)),
      Nm().length >= 2022 && Om());
  }
  var Rm = db();
  function Sm() {
    Rm = db();
  }
  function Tm() {
    return [
      ["v", "3"],
      ["t", "t"],
      ["pid", String(Rm)],
    ];
  }
  var Um = {};
  function Vm(a, b, c) {
    Tj && a !== void 0 && ((Um[a] = Um[a] || []), Um[a].push(c + b), Qm(a));
  }
  function Wm(a) {
    var b = a.eventId,
      c = a.Tc,
      d = [],
      e = Um[b] || [];
    e.length && d.push(["epr", e.join(".")]);
    c && delete Um[b];
    return d;
  }
  function Xm(a, b) {
    var c = Wl(nk(a), !0);
    c && Ym.register(c, b);
  }
  function Zm(a, b, c, d) {
    var e = Wl(c, d.isGtmEvent);
    e && (Pi && (d.deferrable = !0), Ym.push("event", [b, a], e, d));
  }
  function $m(a, b, c, d) {
    var e = Wl(c, d.isGtmEvent);
    e && Ym.push("get", [a, b], e, d);
  }
  function an(a) {
    var b = Wl(nk(a), !0),
      c;
    b ? (c = bn(Ym, b).j) : (c = {});
    return c;
  }
  function cn(a, b) {
    var c = Wl(nk(a), !0);
    if (c) {
      var d = Ym,
        e = Rc(b, null);
      Rc(bn(d, c).j, e);
      bn(d, c).j = e;
    }
  }
  var dn = function () {
      this.P = {};
      this.j = {};
      this.C = {};
      this.aa = null;
      this.K = {};
      this.H = !1;
      this.status = 1;
    },
    en = function (a, b, c, d) {
      this.C = nb();
      this.j = b;
      this.args = c;
      this.messageContext = d;
      this.type = a;
    },
    fn = function () {
      this.destinations = {};
      this.j = {};
      this.commands = [];
    },
    bn = function (a, b) {
      var c = b.destinationId;
      return (a.destinations[c] = a.destinations[c] || new dn());
    },
    gn = function (a, b, c, d) {
      if (d.j) {
        var e = bn(a, d.j),
          f = e.aa;
        if (f) {
          var g = Rc(c, null),
            k = Rc(e.P[d.j.id], null),
            m = Rc(e.K, null),
            n = Rc(e.j, null),
            p = Rc(a.j, null),
            q = {};
          if (Tj)
            try {
              q = Rc(jj, null);
            } catch (t) {
              U(72);
            }
          var r = d.j.prefix,
            u = function (t) {
              Vm(d.messageContext.eventId, r, t);
            },
            v = Dm(
              Cm(
                Bm(
                  Am(
                    zm(
                      xm(
                        wm(
                          ym(
                            vm(
                              um(
                                tm(
                                  new sm(
                                    d.messageContext.eventId,
                                    d.messageContext.priorityId
                                  ),
                                  g
                                ),
                                k
                              ),
                              m
                            ),
                            n
                          ),
                          p
                        ),
                        q
                      ),
                      d.messageContext.eventMetadata
                    ),
                    function () {
                      if (u) {
                        var t = u;
                        u = void 0;
                        t("2");
                        if (d.messageContext.onSuccess)
                          d.messageContext.onSuccess();
                      }
                    }
                  ),
                  function () {
                    if (u) {
                      var t = u;
                      u = void 0;
                      t("3");
                      if (d.messageContext.onFailure)
                        d.messageContext.onFailure();
                    }
                  }
                ),
                !!d.messageContext.isGtmEvent
              )
            );
          try {
            Vm(d.messageContext.eventId, r, "1"),
              jm(d.type, d.j.id, v),
              f(d.j.id, b, d.C, v);
          } catch (t) {
            Vm(d.messageContext.eventId, r, "4");
          }
        }
      }
    };
  fn.prototype.register = function (a, b, c) {
    var d = bn(this, a);
    d.status !== 3 &&
      ((d.aa = b), (d.status = 3), c && (Rc(d.j, c), (d.j = c)), this.flush());
  };
  fn.prototype.push = function (a, b, c, d) {
    c !== void 0 &&
      (bn(this, c).status === 1 &&
        ((bn(this, c).status = 2), this.push("require", [{}], c, {})),
      bn(this, c).H && (d.deferrable = !1));
    this.commands.push(new en(a, c, b, d));
    d.deferrable || this.flush();
  };
  fn.prototype.flush = function (a) {
    for (
      var b = this, c = [], d = !1, e = {};
      this.commands.length;
      e = { Jc: void 0, Ph: void 0 }
    ) {
      var f = this.commands[0],
        g = f.j;
      if (f.messageContext.deferrable)
        !g || bn(this, g).H
          ? ((f.messageContext.deferrable = !1), this.commands.push(f))
          : c.push(f),
          this.commands.shift();
      else {
        switch (f.type) {
          case "require":
            if (bn(this, g).status !== 3 && !a) {
              this.commands.push.apply(this.commands, c);
              return;
            }
            break;
          case "set":
            gb(f.args[0], function (r, u) {
              Rc(vb(r, u), b.j);
            });
            break;
          case "config":
            var k = bn(this, g);
            e.Jc = {};
            gb(
              f.args[0],
              (function (r) {
                return function (u, v) {
                  Rc(vb(u, v), r.Jc);
                };
              })(e)
            );
            var m = !!e.Jc[O.g.nc];
            delete e.Jc[O.g.nc];
            var n = g.destinationId === g.id;
            m || (n ? (k.K = {}) : (k.P[g.id] = {}));
            (k.H && m) || gn(this, O.g.ba, e.Jc, f);
            k.H = !0;
            n ? Rc(e.Jc, k.K) : (Rc(e.Jc, k.P[g.id]), U(70));
            d = !0;
            break;
          case "event":
            e.Ph = {};
            gb(
              f.args[0],
              (function (r) {
                return function (u, v) {
                  Rc(vb(u, v), r.Ph);
                };
              })(e)
            );
            gn(this, f.args[1], e.Ph, f);
            break;
          case "get":
            var p = {},
              q = ((p[O.g.yb] = f.args[0]), (p[O.g.Mb] = f.args[1]), p);
            gn(this, O.g.Ya, q, f);
        }
        this.commands.shift();
        hn(this, f);
      }
    }
    this.commands.push.apply(this.commands, c);
    d && this.flush();
  };
  var hn = function (a, b) {
      if (b.type !== "require")
        if (b.j)
          for (var c = bn(a, b.j).C[b.type] || [], d = 0; d < c.length; d++)
            c[d]();
        else
          for (var e in a.destinations)
            if (a.destinations.hasOwnProperty(e)) {
              var f = a.destinations[e];
              if (f && f.C)
                for (var g = f.C[b.type] || [], k = 0; k < g.length; k++)
                  g[k]();
            }
    },
    Ym = new fn();
  var jn = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c();
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d;
    },
    kn = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    };
  var ln = function (a, b, c) {
      a.addEventListener && a.addEventListener(b, c, !1);
    },
    mn = function (a, b, c) {
      a.removeEventListener && a.removeEventListener(b, c, !1);
    };
  var nn, on;
  a: {
    for (var pn = ["CLOSURE_FLAGS"], qn = Aa, rn = 0; rn < pn.length; rn++)
      if (((qn = qn[pn[rn]]), qn == null)) {
        on = null;
        break a;
      }
    on = qn;
  }
  var sn = on && on[610401301];
  nn = sn != null ? sn : !1;
  function tn() {
    var a = Aa.navigator;
    if (a) {
      var b = a.userAgent;
      if (b) return b;
    }
    return "";
  }
  var un,
    vn = Aa.navigator;
  un = vn ? vn.userAgentData || null : null;
  function wn(a) {
    return nn
      ? un
        ? un.brands.some(function (b) {
            var c;
            return (c = b.brand) && c.indexOf(a) != -1;
          })
        : !1
      : !1;
  }
  function xn(a) {
    return tn().indexOf(a) != -1;
  }
  function yn() {
    return nn ? !!un && un.brands.length > 0 : !1;
  }
  function zn() {
    return yn() ? !1 : xn("Opera");
  }
  function An() {
    return xn("Firefox") || xn("FxiOS");
  }
  function Bn() {
    return yn()
      ? wn("Chromium")
      : ((xn("Chrome") || xn("CriOS")) && !(yn() ? 0 : xn("Edge"))) ||
          xn("Silk");
  }
  var Cn = function (a) {
    Cn[" "](a);
    return a;
  };
  Cn[" "] = function () {};
  var Dn = function (a, b, c, d) {
      for (var e = b, f = c.length; (e = a.indexOf(c, e)) >= 0 && e < d; ) {
        var g = a.charCodeAt(e - 1);
        if (g == 38 || g == 63) {
          var k = a.charCodeAt(e + f);
          if (!k || k == 61 || k == 38 || k == 35) return e;
        }
        e += f + 1;
      }
      return -1;
    },
    En = /#|$/,
    Fn = function (a, b) {
      var c = a.search(En),
        d = Dn(a, 0, b, c);
      if (d < 0) return null;
      var e = a.indexOf("&", d);
      if (e < 0 || e > c) e = c;
      d += b.length + 1;
      return decodeURIComponent(
        a.slice(d, e !== -1 ? e : 0).replace(/\+/g, " ")
      );
    },
    Gn = /[?&]($|#)/,
    Hn = function (a, b, c) {
      for (
        var d, e = a.search(En), f = 0, g, k = [];
        (g = Dn(a, f, b, e)) >= 0;

      )
        k.push(a.substring(f, g)),
          (f = Math.min(a.indexOf("&", g) + 1 || e, e));
      k.push(a.slice(f));
      d = k.join("").replace(Gn, "$1");
      var m,
        n = c != null ? "=" + encodeURIComponent(String(c)) : "";
      var p = b + n;
      if (p) {
        var q,
          r = d.indexOf("#");
        r < 0 && (r = d.length);
        var u = d.indexOf("?"),
          v;
        u < 0 || u > r ? ((u = r), (v = "")) : (v = d.substring(u + 1, r));
        q = [d.slice(0, u), v, d.slice(r)];
        var t = q[1];
        q[1] = p ? (t ? t + "&" + p : p) : t;
        m = q[0] + (q[1] ? "?" + q[1] : "") + q[2];
      } else m = d;
      return m;
    };
  function In() {
    return nn ? !!un && !!un.platform : !1;
  }
  function Jn() {
    return xn("iPhone") && !xn("iPod") && !xn("iPad");
  }
  function Kn() {
    Jn() || xn("iPad") || xn("iPod");
  }
  zn();
  yn() || xn("Trident") || xn("MSIE");
  xn("Edge");
  !xn("Gecko") ||
    (tn().toLowerCase().indexOf("webkit") != -1 && !xn("Edge")) ||
    xn("Trident") ||
    xn("MSIE") ||
    xn("Edge");
  tn().toLowerCase().indexOf("webkit") != -1 && !xn("Edge") && xn("Mobile");
  In() || xn("Macintosh");
  In() || xn("Windows");
  (In() ? un.platform === "Linux" : xn("Linux")) || In() || xn("CrOS");
  In() || xn("Android");
  Jn();
  xn("iPad");
  xn("iPod");
  Kn();
  tn().toLowerCase().indexOf("kaios");
  var Ln = function (a) {
      try {
        var b;
        if ((b = !!a && a.location.href != null))
          a: {
            try {
              Cn(a.foo);
              b = !0;
              break a;
            } catch (c) {}
            b = !1;
          }
        return b;
      } catch (c) {
        return !1;
      }
    },
    Mn = function (a, b) {
      if (a)
        for (var c in a)
          Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
    },
    Nn = function (a) {
      if (B.top == B) return 0;
      if (a === void 0 ? 0 : a) {
        var b = B.location.ancestorOrigins;
        if (b) return b[b.length - 1] == B.location.origin ? 1 : 2;
      }
      return Ln(B.top) ? 1 : 2;
    },
    On = function (a) {
      a = a === void 0 ? document : a;
      return a.createElement("img");
    },
    Pn = function () {
      for (var a = B, b = a; a && a != a.parent; )
        (a = a.parent), Ln(a) && (b = a);
      return b;
    };
  function Qn(a, b, c, d) {
    d = d === void 0 ? !1 : d;
    a.google_image_requests || (a.google_image_requests = []);
    var e = On(a.document);
    if (c) {
      var f = function () {
        if (c) {
          var g = a.google_image_requests,
            k = $b(g, e);
          k >= 0 && Array.prototype.splice.call(g, k, 1);
        }
        mn(e, "load", f);
        mn(e, "error", f);
      };
      ln(e, "load", f);
      ln(e, "error", f);
    }
    d && (e.attributionSrc = "");
    e.src = b;
    a.google_image_requests.push(e);
  }
  var Sn = function (a) {
      var b;
      b = b === void 0 ? !1 : b;
      var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
      Mn(a, function (d, e) {
        if (d || d === 0) c += "&" + e + "=" + encodeURIComponent("" + d);
      });
      Rn(c, b);
    },
    Rn = function (a, b) {
      var c = window,
        d;
      b = b === void 0 ? !1 : b;
      d = d === void 0 ? !1 : d;
      if (c.fetch) {
        var e = {
          keepalive: !0,
          credentials: "include",
          redirect: "follow",
          method: "get",
          mode: "no-cors",
        };
        d &&
          ((e.mode = "cors"),
          "setAttributionReporting" in XMLHttpRequest.prototype
            ? (e.attributionReporting = {
                eventSourceEligible: "true",
                triggerEligible: "false",
              })
            : (e.headers = {
                "Attribution-Reporting-Eligible": "event-source",
              }));
        c.fetch(a, e);
      } else Qn(c, a, b === void 0 ? !1 : b, d === void 0 ? !1 : d);
    };
  var Tn = function () {
    this.P = this.P;
    this.C = this.C;
  };
  Tn.prototype.P = !1;
  Tn.prototype.dispose = function () {
    this.P || ((this.P = !0), this.Ua());
  };
  Tn.prototype[Symbol.dispose] = function () {
    this.dispose();
  };
  Tn.prototype.addOnDisposeCallback = function (a, b) {
    this.P
      ? b !== void 0
        ? a.call(b)
        : a()
      : (this.C || (this.C = []), b && (a = a.bind(b)), this.C.push(a));
  };
  Tn.prototype.Ua = function () {
    if (this.C) for (; this.C.length; ) this.C.shift()();
  };
  function Un(a) {
    a.addtlConsent !== void 0 &&
      typeof a.addtlConsent !== "string" &&
      (a.addtlConsent = void 0);
    a.gdprApplies !== void 0 &&
      typeof a.gdprApplies !== "boolean" &&
      (a.gdprApplies = void 0);
    return (a.tcString !== void 0 && typeof a.tcString !== "string") ||
      (a.listenerId !== void 0 && typeof a.listenerId !== "number")
      ? 2
      : a.cmpStatus && a.cmpStatus !== "error"
      ? 0
      : 3;
  }
  var Vn = function (a, b) {
    b = b === void 0 ? {} : b;
    Tn.call(this);
    this.j = null;
    this.aa = {};
    this.fg = 0;
    this.K = null;
    this.H = a;
    var c;
    this.Ae = (c = b.wn) != null ? c : 500;
    var d;
    this.Ic = (d = b.co) != null ? d : !1;
  };
  ra(Vn, Tn);
  Vn.prototype.Ua = function () {
    this.aa = {};
    this.K && (mn(this.H, "message", this.K), delete this.K);
    delete this.aa;
    delete this.H;
    delete this.j;
    Tn.prototype.Ua.call(this);
  };
  var Xn = function (a) {
    return typeof a.H.__tcfapi === "function" || Wn(a) != null;
  };
  Vn.prototype.addEventListener = function (a) {
    var b = this,
      c = { internalBlockOnErrors: this.Ic },
      d = kn(function () {
        return a(c);
      }),
      e = 0;
    this.Ae !== -1 &&
      (e = setTimeout(function () {
        c.tcString = "tcunavailable";
        c.internalErrorState = 1;
        d();
      }, this.Ae));
    var f = function (g, k) {
      clearTimeout(e);
      g
        ? ((c = g),
          (c.internalErrorState = Un(c)),
          (c.internalBlockOnErrors = b.Ic),
          (k && c.internalErrorState === 0) ||
            ((c.tcString = "tcunavailable"), k || (c.internalErrorState = 3)))
        : ((c.tcString = "tcunavailable"), (c.internalErrorState = 3));
      a(c);
    };
    try {
      Yn(this, "addEventListener", f);
    } catch (g) {
      (c.tcString = "tcunavailable"),
        (c.internalErrorState = 3),
        e && (clearTimeout(e), (e = 0)),
        d();
    }
  };
  Vn.prototype.removeEventListener = function (a) {
    a && a.listenerId && Yn(this, "removeEventListener", null, a.listenerId);
  };
  var $n = function (a, b, c) {
      var d;
      d = d === void 0 ? "755" : d;
      var e;
      a: {
        if (a.publisher && a.publisher.restrictions) {
          var f = a.publisher.restrictions[b];
          if (f !== void 0) {
            e = f[d === void 0 ? "755" : d];
            break a;
          }
        }
        e = void 0;
      }
      var g = e;
      if (g === 0) return !1;
      var k = c;
      c === 2
        ? ((k = 0), g === 2 && (k = 1))
        : c === 3 && ((k = 1), g === 1 && (k = 0));
      var m;
      if (k === 0)
        if (a.purpose && a.vendor) {
          var n = Zn(a.vendor.consents, d === void 0 ? "755" : d);
          m =
            n && b === "1" && a.purposeOneTreatment && a.publisherCC === "CH"
              ? !0
              : n && Zn(a.purpose.consents, b);
        } else m = !0;
      else
        m =
          k === 1
            ? a.purpose && a.vendor
              ? Zn(a.purpose.legitimateInterests, b) &&
                Zn(a.vendor.legitimateInterests, d === void 0 ? "755" : d)
              : !0
            : !0;
      return m;
    },
    Zn = function (a, b) {
      return !(!a || !a[b]);
    },
    Yn = function (a, b, c, d) {
      c || (c = function () {});
      var e = a.H;
      if (typeof e.__tcfapi === "function") {
        var f = e.__tcfapi;
        f(b, 2, c, d);
      } else if (Wn(a)) {
        ao(a);
        var g = ++a.fg;
        a.aa[g] = c;
        if (a.j) {
          var k = {};
          a.j.postMessage(
            ((k.__tcfapiCall = {
              command: b,
              version: 2,
              callId: g,
              parameter: d,
            }),
            k),
            "*"
          );
        }
      } else c({}, !1);
    },
    Wn = function (a) {
      if (a.j) return a.j;
      var b;
      a: {
        for (var c = a.H, d = 0; d < 50; ++d) {
          var e;
          try {
            e = !(!c.frames || !c.frames.__tcfapiLocator);
          } catch (k) {
            e = !1;
          }
          if (e) {
            b = c;
            break a;
          }
          var f;
          b: {
            try {
              var g = c.parent;
              if (g && g != c) {
                f = g;
                break b;
              }
            } catch (k) {}
            f = null;
          }
          if (!(c = f)) break;
        }
        b = null;
      }
      a.j = b;
      return a.j;
    },
    ao = function (a) {
      if (!a.K) {
        var b = function (c) {
          try {
            var d;
            d = (typeof c.data === "string" ? JSON.parse(c.data) : c.data)
              .__tcfapiReturn;
            a.aa[d.callId](d.returnValue, d.success);
          } catch (e) {}
        };
        a.K = b;
        ln(a.H, "message", b);
      }
    },
    bo = function (a) {
      if (a.gdprApplies === !1) return !0;
      a.internalErrorState === void 0 && (a.internalErrorState = Un(a));
      return a.cmpStatus === "error" || a.internalErrorState !== 0
        ? a.internalBlockOnErrors
          ? (Sn({ e: String(a.internalErrorState) }), !1)
          : !0
        : a.cmpStatus !== "loaded" ||
          (a.eventStatus !== "tcloaded" &&
            a.eventStatus !== "useractioncomplete")
        ? !1
        : !0;
    };
  var co = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 };
  function eo() {
    var a = Ki.tcf || {};
    return (Ki.tcf = a);
  }
  var fo = function () {
    return new Vn(B, { wn: -1 });
  };
  function go() {
    var a = eo(),
      b = fo();
    Xn(b) && !ho() && !io() && U(124);
    if (!a.active && Xn(b)) {
      ho() &&
        ((a.active = !0),
        (a.uc = {}),
        (a.cmpId = 0),
        (a.tcfPolicyVersion = 0),
        (Rk().active = !0),
        (a.tcString = "tcunavailable"));
      Gl();
      try {
        b.addEventListener(function (c) {
          if (c.internalErrorState !== 0)
            jo(a), Hl([O.g.N, O.g.wa, O.g.O]), (Rk().active = !0);
          else if (
            ((a.gdprApplies = c.gdprApplies),
            (a.cmpId = c.cmpId),
            (a.enableAdvertiserConsentMode = c.enableAdvertiserConsentMode),
            io() && (a.active = !0),
            !ko(c) || ho() || io())
          ) {
            a.tcfPolicyVersion = c.tcfPolicyVersion;
            var d;
            if (c.gdprApplies === !1) {
              var e = {},
                f;
              for (f in co) co.hasOwnProperty(f) && (e[f] = !0);
              d = e;
              b.removeEventListener(c);
            } else if (ko(c)) {
              var g = {},
                k;
              for (k in co)
                if (co.hasOwnProperty(k))
                  if (k === "1") {
                    var m,
                      n = c,
                      p = { km: !0 };
                    p = p === void 0 ? {} : p;
                    m = bo(n)
                      ? n.gdprApplies === !1
                        ? !0
                        : n.tcString === "tcunavailable"
                        ? !p.pk
                        : (p.pk || n.gdprApplies !== void 0 || p.km) &&
                          (p.pk ||
                            (typeof n.tcString === "string" &&
                              n.tcString.length))
                        ? $n(n, "1", 0)
                        : !0
                      : !1;
                    g["1"] = m;
                  } else g[k] = $n(c, k, co[k]);
              d = g;
            }
            if (d) {
              a.tcString = c.tcString || "tcempty";
              a.uc = d;
              var q = {},
                r = ((q[O.g.N] = a.uc["1"] ? "granted" : "denied"), q);
              a.gdprApplies !== !0
                ? (Hl([O.g.N, O.g.wa, O.g.O]), (Rk().active = !0))
                : ((r[O.g.wa] = a.uc["3"] && a.uc["4"] ? "granted" : "denied"),
                  typeof a.tcfPolicyVersion === "number" &&
                  a.tcfPolicyVersion >= 4
                    ? (r[O.g.O] = a.uc["1"] && a.uc["7"] ? "granted" : "denied")
                    : Hl([O.g.O]),
                  Bl(
                    r,
                    { eventId: 0 },
                    {
                      gdprApplies: a ? a.gdprApplies : void 0,
                      tcString: to() || "",
                    }
                  ));
            }
          } else Hl([O.g.N, O.g.wa, O.g.O]);
        });
      } catch (c) {
        jo(a), Hl([O.g.N, O.g.wa, O.g.O]), (Rk().active = !0);
      }
    }
  }
  function jo(a) {
    a.type = "e";
    a.tcString = "tcunavailable";
  }
  function ko(a) {
    return (
      a.eventStatus === "tcloaded" ||
      a.eventStatus === "useractioncomplete" ||
      a.eventStatus === "cmpuishown"
    );
  }
  function ho() {
    return B.gtag_enable_tcf_support === !0;
  }
  function io() {
    return eo().enableAdvertiserConsentMode === !0;
  }
  function to() {
    var a = eo();
    if (a.active) return a.tcString;
  }
  function uo() {
    var a = eo();
    if (a.active && a.gdprApplies !== void 0) return a.gdprApplies ? "1" : "0";
  }
  function vo(a) {
    if (!co.hasOwnProperty(String(a))) return !0;
    var b = eo();
    return b.active && b.uc ? !!b.uc[String(a)] : !0;
  }
  var wo = [O.g.N, O.g.U, O.g.O, O.g.wa],
    xo = {},
    yo = ((xo[O.g.N] = 1), (xo[O.g.U] = 2), xo);
  function zo(a) {
    if (a === void 0) return 0;
    switch (V(a, O.g.na)) {
      case void 0:
        return 1;
      case !1:
        return 3;
      default:
        return 2;
    }
  }
  function Ao(a) {
    if (pl() === "US-CO" && cc.globalPrivacyControl === !0) return !1;
    var b = zo(a);
    if (b === 3) return !1;
    switch ($k(O.g.wa)) {
      case 1:
      case 3:
        return !0;
      case 2:
        return !1;
      case 4:
        return b === 2;
      case 0:
        return !0;
      default:
        return !1;
    }
  }
  function Bo() {
    return cl() || !Zk(O.g.N) || !Zk(O.g.U);
  }
  function Co() {
    var a = {},
      b;
    for (b in yo) yo.hasOwnProperty(b) && (a[yo[b]] = $k(b));
    return "G1" + Ee(a[1] || 0) + Ee(a[2] || 0);
  }
  var Do = {},
    Eo =
      ((Do[O.g.N] = 0), (Do[O.g.U] = 1), (Do[O.g.O] = 2), (Do[O.g.wa] = 3), Do);
  function Fo(a) {
    switch (a) {
      case void 0:
        return 1;
      case !0:
        return 3;
      case !1:
        return 2;
      default:
        return 0;
    }
  }
  function Go(a) {
    for (var b = "1", c = 0; c < wo.length; c++) {
      var d = b,
        e,
        f = wo[c],
        g = Yk.delegatedConsentTypes[f];
      e = g === void 0 ? 0 : Eo.hasOwnProperty(g) ? 12 | Eo[g] : 8;
      var k = Rk();
      k.accessedAny = !0;
      var m = k.entries[f] || {};
      e = (e << 2) | Fo(m.implicit);
      b =
        d +
        ("" +
          "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
            e
          ] +
          "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
            (Fo(m.declare) << 4) | (Fo(m.default) << 2) | Fo(m.update)
          ]);
    }
    var n = b,
      p = (pl() === "US-CO" && cc.globalPrivacyControl === !0 ? 1 : 0) << 3,
      q = (cl() ? 1 : 0) << 2,
      r = zo(a);
    b =
      n +
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        p | q | r
      ];
    return (b +=
      "" +
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        (Yk.containerScopedDefaults.ad_storage << 4) |
          (Yk.containerScopedDefaults.analytics_storage << 2) |
          Yk.containerScopedDefaults.ad_user_data
      ] +
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        ((Yk.usedContainerScopedDefaults ? 1 : 0) << 2) |
          Yk.containerScopedDefaults.ad_personalization
      ]);
  }
  function Ho() {
    if (!Zk(O.g.O)) return "-";
    for (
      var a = Object.keys(xh), b = al(a), c = "", d = l(a), e = d.next();
      !e.done;
      e = d.next()
    ) {
      var f = e.value;
      b[f] && (c += xh[f]);
    }
    (Yk.usedCorePlatformServices ? Yk.selectedAllCorePlatformServices : 1) &&
      (c += "o");
    return c || "-";
  }
  function Io() {
    return rl() || ((ho() || io()) && uo() === "1") ? "1" : "0";
  }
  function Jo() {
    return (rl() ? !0 : !(!ho() && !io()) && uo() === "1") || !Zk(O.g.O);
  }
  function Ko() {
    var a = "0",
      b = "0",
      c;
    var d = eo();
    c = d.active ? d.cmpId : void 0;
    typeof c === "number" &&
      c >= 0 &&
      c <= 4095 &&
      ((a = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        (c >> 6) & 63
      ]),
      (b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        c & 63
      ]));
    var e = "0",
      f;
    var g = eo();
    f = g.active ? g.tcfPolicyVersion : void 0;
    typeof f === "number" &&
      f >= 0 &&
      f <= 63 &&
      (e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        f
      ]);
    var k = 0;
    rl() && (k |= 1);
    uo() === "1" && (k |= 2);
    ho() && (k |= 4);
    var m;
    var n = eo();
    m =
      n.enableAdvertiserConsentMode !== void 0
        ? n.enableAdvertiserConsentMode
          ? "1"
          : "0"
        : void 0;
    m === "1" && (k |= 8);
    Rk().waitPeriodTimedOut && (k |= 16);
    return (
      "1" +
      a +
      b +
      e +
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[k]
    );
  }
  function Lo() {
    return pl() === "US-CO";
  }
  function Mo() {
    var a = !1;
    return a;
  }
  var No = { UA: 1, AW: 2, DC: 3, G: 4, GF: 5, GT: 12, GTM: 14, HA: 6, MC: 7 };
  function Oo(a) {
    a = a === void 0 ? {} : a;
    var b = Mf.ctid.split("-")[0].toUpperCase(),
      c = {
        ctid: Mf.ctid,
        ln: Ji.Fe,
        nn: Ji.zh,
        Nm: ek.Ce ? 2 : 1,
        sn: a.xg,
        Ne: Mf.canonicalContainerId,
      };
    c.Ne !== a.qa && (c.qa = a.qa);
    var d = pk();
    c.Xm = d ? d.canonicalContainerId : void 0;
    Qi ? ((c.vg = No[b]), c.vg || (c.vg = 0)) : (c.vg = Ui ? 13 : 10);
    dj.C
      ? ((c.sg = 0), (c.Pl = 2))
      : Si
      ? (c.sg = 1)
      : Mo()
      ? (c.sg = 2)
      : (c.sg = 3);
    var e = {};
    e[6] = fk;
    dj.j === 2 ? (e[7] = !0) : dj.j === 1 && (e[2] = !0);
    if (fc) {
      var f = zj(Fj(fc), "host");
      f && (e[8] = f.match(/^(www\.)?googletagmanager\.com$/) === null);
    }
    c.Sl = e;
    var g = a.hg,
      k;
    var m = c.vg,
      n = c.sg;
    m === void 0
      ? (k = "")
      : (n || (n = 0), (k = "" + Ge(1, 1) + De((m << 2) | n)));
    var p = c.Pl,
      q = "4" + k + (p ? "" + Ge(2, 1) + De(p) : ""),
      r,
      u = c.nn;
    r = u && Fe.test(u) ? "" + Ge(3, 2) + u : "";
    var v,
      t = c.ln;
    v = t ? "" + Ge(4, 1) + De(t) : "";
    var w;
    var x = c.ctid;
    if (x && g) {
      var y = x.split("-"),
        A = y[0].toUpperCase();
      if (A !== "GTM" && A !== "OPT") w = "";
      else {
        var C = y[1];
        w = "" + Ge(5, 3) + De(1 + C.length) + (c.Nm || 0) + C;
      }
    } else w = "";
    var D = c.sn,
      G = c.Ne,
      J = c.qa,
      F = c.ro,
      T =
        q +
        r +
        v +
        w +
        (D ? "" + Ge(6, 1) + De(D) : "") +
        (G ? "" + Ge(7, 3) + De(G.length) + G : "") +
        (J ? "" + Ge(8, 3) + De(J.length) + J : "") +
        (F ? "" + Ge(9, 3) + De(F.length) + F : ""),
      N;
    var Z = c.Sl;
    Z = Z === void 0 ? {} : Z;
    for (
      var ba = [], fa = l(Object.keys(Z)), R = fa.next();
      !R.done;
      R = fa.next()
    ) {
      var M = R.value;
      ba[Number(M)] = Z[M];
    }
    if (ba.length) {
      var ea = Ge(10, 3),
        ha;
      if (ba.length === 0) ha = De(0);
      else {
        for (var da = [], ta = 0, Na = !1, va = 0; va < ba.length; va++) {
          Na = !0;
          var La = va % 6;
          ba[va] && (ta |= 1 << La);
          La === 5 && (da.push(De(ta)), (ta = 0), (Na = !1));
        }
        Na && da.push(De(ta));
        ha = da.join("");
      }
      var cb = ha;
      N = "" + ea + De(cb.length) + cb;
    } else N = "";
    var lc = c.Xm;
    return T + N + (lc ? "" + Ge(11, 3) + De(lc.length) + lc : "");
  }
  function Po(a) {
    var b = 1,
      c,
      d,
      e;
    if (a)
      for (b = 0, d = a.length - 1; d >= 0; d--)
        (e = a.charCodeAt(d)),
          (b = ((b << 6) & 268435455) + e + (e << 14)),
          (c = b & 266338304),
          (b = c !== 0 ? b ^ (c >> 21) : b);
    return b;
  }
  function Qo(a) {
    return a.origin !== "null";
  }
  function Ro(a, b, c, d) {
    var e;
    if (So(d)) {
      for (
        var f = [], g = String(b || To()).split(";"), k = 0;
        k < g.length;
        k++
      ) {
        var m = g[k].split("="),
          n = m[0].replace(/^\s*|\s*$/g, "");
        if (n && n === a) {
          var p = m
            .slice(1)
            .join("=")
            .replace(/^\s*|\s*$/g, "");
          p && c && (p = decodeURIComponent(p));
          f.push(p);
        }
      }
      e = f;
    } else e = [];
    return e;
  }
  function Uo(a, b, c, d, e) {
    if (So(e)) {
      var f = Vo(a, d, e);
      if (f.length === 1) return f[0].id;
      if (f.length !== 0) {
        f = Wo(
          f,
          function (g) {
            return g.Yl;
          },
          b
        );
        if (f.length === 1) return f[0].id;
        f = Wo(
          f,
          function (g) {
            return g.Zm;
          },
          c
        );
        return f[0] ? f[0].id : void 0;
      }
    }
  }
  function Xo(a, b, c, d) {
    var e = To(),
      f = window;
    Qo(f) && (f.document.cookie = a);
    var g = To();
    return e !== g || (c !== void 0 && Ro(b, g, !1, d).indexOf(c) >= 0);
  }
  function Yo(a, b, c, d) {
    function e(w, x, y) {
      if (y == null) return delete k[x], w;
      k[x] = y;
      return w + "; " + x + "=" + y;
    }
    function f(w, x) {
      if (x == null) return w;
      k[x] = !0;
      return w + "; " + x;
    }
    if (!So(c.Ib)) return 2;
    var g;
    b == null
      ? (g = a + "=deleted; expires=" + new Date(0).toUTCString())
      : (c.encode && (b = encodeURIComponent(b)),
        (b = Zo(b)),
        (g = a + "=" + b));
    var k = {};
    g = e(g, "path", c.path);
    var m;
    c.expires instanceof Date
      ? (m = c.expires.toUTCString())
      : c.expires != null && (m = "" + c.expires);
    g = e(g, "expires", m);
    g = e(g, "max-age", c.Rm);
    g = e(g, "samesite", c.on);
    c.secure && (g = f(g, "secure"));
    var n = c.domain;
    if (n && n.toLowerCase() === "auto") {
      for (var p = $o(), q = void 0, r = !1, u = 0; u < p.length; ++u) {
        var v = p[u] !== "none" ? p[u] : void 0,
          t = e(g, "domain", v);
        t = f(t, c.flags);
        try {
          d && d(a, k);
        } catch (w) {
          q = w;
          continue;
        }
        r = !0;
        if (!ap(v, c.path) && Xo(t, a, b, c.Ib)) return 0;
      }
      if (q && !r) throw q;
      return 1;
    }
    n && n.toLowerCase() !== "none" && (g = e(g, "domain", n));
    g = f(g, c.flags);
    d && d(a, k);
    return ap(n, c.path) ? 1 : Xo(g, a, b, c.Ib) ? 0 : 1;
  }
  function bp(a, b, c) {
    c.path == null && (c.path = "/");
    c.domain || (c.domain = "auto");
    return Yo(a, b, c);
  }
  function Wo(a, b, c) {
    for (var d = [], e = [], f, g = 0; g < a.length; g++) {
      var k = a[g],
        m = b(k);
      m === c
        ? d.push(k)
        : f === void 0 || m < f
        ? ((e = [k]), (f = m))
        : m === f && e.push(k);
    }
    return d.length > 0 ? d : e;
  }
  function Vo(a, b, c) {
    for (var d = [], e = Ro(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var g = e[f].split("."),
        k = g.shift();
      if (!b || !k || b.indexOf(k) !== -1) {
        var m = g.shift();
        if (m) {
          var n = m.split("-");
          d.push({
            id: g.join("."),
            Yl: Number(n[0]) || 1,
            Zm: Number(n[1]) || 1,
          });
        }
      }
    }
    return d;
  }
  function Zo(a) {
    a && a.length > 1200 && (a = a.substring(0, 1200));
    return a;
  }
  var cp = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    dp = /(^|\.)doubleclick\.net$/i;
  function ap(a, b) {
    return (
      a !== void 0 &&
      (dp.test(window.document.location.hostname) || (b === "/" && cp.test(a)))
    );
  }
  function ep(a) {
    if (!a) return 1;
    var b = a;
    Yh(8) && a === "none" && (b = window.document.location.hostname);
    b = b.indexOf(".") === 0 ? b.substring(1) : b;
    return b.split(".").length;
  }
  function fp(a) {
    if (!a || a === "/") return 1;
    a[0] !== "/" && (a = "/" + a);
    a[a.length - 1] !== "/" && (a += "/");
    return a.split("/").length - 1;
  }
  function gp(a, b) {
    var c = "" + ep(a),
      d = fp(b);
    d > 1 && (c += "-" + d);
    return c;
  }
  var To = function () {
      return Qo(window) ? window.document.cookie : "";
    },
    So = function (a) {
      return a && Yh(9)
        ? (Array.isArray(a) ? a : [a]).every(function (b) {
            return bl(b) && Zk(b);
          })
        : !0;
    },
    $o = function () {
      var a = [],
        b = window.document.location.hostname.split(".");
      if (b.length === 4) {
        var c = b[b.length - 1];
        if (Number(c).toString() === c) return ["none"];
      }
      for (var d = b.length - 2; d >= 0; d--) a.push(b.slice(d).join("."));
      var e = window.document.location.hostname;
      dp.test(e) || cp.test(e) || a.push("none");
      return a;
    };
  function hp(a) {
    var b = Math.round(Math.random() * 2147483647);
    return a ? String(b ^ (Po(a) & 2147483647)) : String(b);
  }
  function ip(a) {
    return [hp(a), Math.round(nb() / 1e3)].join(".");
  }
  function jp(a, b, c, d, e) {
    var f = ep(b);
    return Uo(a, f, fp(c), d, e);
  }
  function kp(a, b, c, d) {
    return [b, gp(c, d), a].join(".");
  }
  function lp(a, b, c, d) {
    var e,
      f = Number(a.Gb != null ? a.Gb : void 0);
    f !== 0 && (e = new Date((b || nb()) + 1e3 * (f || 7776e3)));
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: e,
      Ib: d,
    };
  }
  var mp;
  function np() {
    function a(g) {
      c(g.target || g.srcElement || {});
    }
    function b(g) {
      d(g.target || g.srcElement || {});
    }
    var c = op,
      d = pp,
      e = qp();
    if (!e.init) {
      rc(E, "mousedown", a);
      rc(E, "keyup", a);
      rc(E, "submit", b);
      var f = HTMLFormElement.prototype.submit;
      HTMLFormElement.prototype.submit = function () {
        d(this);
        f.call(this);
      };
      e.init = !0;
    }
  }
  function rp(a, b, c, d, e) {
    var f = {
      callback: a,
      domains: b,
      fragment: c === 2,
      placement: c,
      forms: d,
      sameHost: e,
    };
    qp().decorators.push(f);
  }
  function sp(a, b, c) {
    for (var d = qp().decorators, e = {}, f = 0; f < d.length; ++f) {
      var g = d[f],
        k;
      if ((k = !c || g.forms))
        a: {
          var m = g.domains,
            n = a,
            p = !!g.sameHost;
          if (m && (p || n !== E.location.hostname))
            for (var q = 0; q < m.length; q++)
              if (m[q] instanceof RegExp) {
                if (m[q].test(n)) {
                  k = !0;
                  break a;
                }
              } else if (n.indexOf(m[q]) >= 0 || (p && m[q].indexOf(n) >= 0)) {
                k = !0;
                break a;
              }
          k = !1;
        }
      if (k) {
        var r = g.placement;
        r === void 0 && (r = g.fragment ? 2 : 1);
        r === b && qb(e, g.callback());
      }
    }
    return e;
  }
  function qp() {
    var a = gc("google_tag_data", {}),
      b = a.gl;
    (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b));
    return b;
  }
  var tp = /(.*?)\*(.*?)\*(.*)/,
    up = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    vp = /^(?:www\.|m\.|amp\.)+/,
    wp = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function xp(a) {
    var b = wp.exec(a);
    if (b) return { fi: b[1], query: b[2], fragment: b[3] };
  }
  function yp(a) {
    return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)");
  }
  function zp(a, b) {
    var c = [
        cc.userAgent,
        new Date().getTimezoneOffset(),
        cc.userLanguage || cc.language,
        Math.floor(nb() / 60 / 1e3) - (b === void 0 ? 0 : b),
        a,
      ].join("*"),
      d;
    if (!(d = mp)) {
      for (var e = Array(256), f = 0; f < 256; f++) {
        for (var g = f, k = 0; k < 8; k++)
          g = g & 1 ? (g >>> 1) ^ 3988292384 : g >>> 1;
        e[f] = g;
      }
      d = e;
    }
    mp = d;
    for (var m = 4294967295, n = 0; n < c.length; n++)
      m = (m >>> 8) ^ mp[(m ^ c.charCodeAt(n)) & 255];
    return ((m ^ -1) >>> 0).toString(36);
  }
  function Ap(a) {
    return function (b) {
      var c = Fj(B.location.href),
        d = c.search.replace("?", ""),
        e = yj(d, "_gl", !1, !0) || "";
      b.query = Bp(e) || {};
      var f = zj(c, "fragment"),
        g;
      var k = -1;
      if (sb(f, "_gl=")) k = 4;
      else {
        var m = f.indexOf("&_gl=");
        m > 0 && (k = m + 3 + 2);
      }
      if (k < 0) g = void 0;
      else {
        var n = f.indexOf("&", k);
        g = n < 0 ? f.substring(k) : f.substring(k, n);
      }
      b.fragment = Bp(g || "") || {};
      a && Cp(c, d, f);
    };
  }
  function Dp(a, b) {
    var c = yp(a).exec(b),
      d = b;
    if (c) {
      var e = c[2],
        f = c[4];
      d = c[1];
      f && (d = d + e + f);
    }
    return d;
  }
  function Cp(a, b, c) {
    function d(g, k) {
      var m = Dp("_gl", g);
      m.length && (m = k + m);
      return m;
    }
    if (bc && bc.replaceState) {
      var e = yp("_gl");
      if (e.test(b) || e.test(c)) {
        var f = zj(a, "path");
        b = d(b, "?");
        c = d(c, "#");
        bc.replaceState({}, "", "" + f + b + c);
      }
    }
  }
  function Ep(a, b) {
    var c = Ap(!!b),
      d = qp();
    d.data || ((d.data = { query: {}, fragment: {} }), c(d.data));
    var e = {},
      f = d.data;
    f && (qb(e, f.query), a && qb(e, f.fragment));
    return e;
  }
  var Bp = function (a) {
    try {
      var b = Fp(a, 3);
      if (b !== void 0) {
        for (
          var c = {}, d = b ? b.split("*") : [], e = 0;
          e + 1 < d.length;
          e += 2
        ) {
          var f = d[e],
            g = Ta(d[e + 1]);
          c[f] = g;
        }
        Va("TAGGING", 6);
        return c;
      }
    } catch (k) {
      Va("TAGGING", 8);
    }
  };
  function Fp(a, b) {
    if (a) {
      var c;
      a: {
        for (var d = a, e = 0; e < 3; ++e) {
          var f = tp.exec(d);
          if (f) {
            c = f;
            break a;
          }
          d = decodeURIComponent(d);
        }
        c = void 0;
      }
      var g = c;
      if (g && g[1] === "1") {
        var k = g[3],
          m;
        a: {
          for (var n = g[2], p = 0; p < b; ++p)
            if (n === zp(k, p)) {
              m = !0;
              break a;
            }
          m = !1;
        }
        if (m) return k;
        Va("TAGGING", 7);
      }
    }
  }
  function Gp(a, b, c, d, e) {
    function f(p) {
      p = Dp(a, p);
      var q = p.charAt(p.length - 1);
      p && q !== "&" && (p += "&");
      return p + n;
    }
    d = d === void 0 ? !1 : d;
    e = e === void 0 ? !1 : e;
    var g = xp(c);
    if (!g) return "";
    var k = g.query || "",
      m = g.fragment || "",
      n = a + "=" + b;
    d
      ? (m.substring(1).length !== 0 && e) || (m = "#" + f(m.substring(1)))
      : (k = "?" + f(k.substring(1)));
    return "" + g.fi + k + m;
  }
  function Hp(a, b) {
    function c(n, p, q) {
      var r;
      a: {
        for (var u in n)
          if (n.hasOwnProperty(u)) {
            r = !0;
            break a;
          }
        r = !1;
      }
      if (r) {
        var v,
          t = [],
          w;
        for (w in n)
          if (n.hasOwnProperty(w)) {
            var x = n[w];
            x !== void 0 &&
              x === x &&
              x !== null &&
              x.toString() !== "[object Object]" &&
              (t.push(w), t.push(Sa(String(x))));
          }
        var y = t.join("*");
        v = ["1", zp(y), y].join("*");
        d
          ? (Yh(3) || Yh(1) || !p) && Ip("_gl", v, a, p, q)
          : Jp("_gl", v, a, p, q);
      }
    }
    var d = (a.tagName || "").toUpperCase() === "FORM",
      e = sp(b, 1, d),
      f = sp(b, 2, d),
      g = sp(b, 4, d),
      k = sp(b, 3, d);
    c(e, !1, !1);
    c(f, !0, !1);
    Yh(1) && c(g, !0, !0);
    for (var m in k) k.hasOwnProperty(m) && Kp(m, k[m], a);
  }
  function Kp(a, b, c) {
    c.tagName.toLowerCase() === "a"
      ? Jp(a, b, c)
      : c.tagName.toLowerCase() === "form" && Ip(a, b, c);
  }
  function Jp(a, b, c, d, e) {
    d = d === void 0 ? !1 : d;
    e = e === void 0 ? !1 : e;
    var f;
    if ((f = c.href)) {
      var g;
      if (!(g = !Yh(5) || d)) {
        var k = B.location.href,
          m = xp(c.href),
          n = xp(k);
        g = !(m && n && m.fi === n.fi && m.query === n.query && m.fragment);
      }
      f = g;
    }
    if (f) {
      var p = Gp(a, b, c.href, d, e);
      Tb.test(p) && (c.href = p);
    }
  }
  function Ip(a, b, c, d, e) {
    d = d === void 0 ? !1 : d;
    e = e === void 0 ? !1 : e;
    if (c && c.action) {
      var f = (c.method || "").toLowerCase();
      if (f !== "get" || d) {
        if (f === "get" || f === "post") {
          var g = Gp(a, b, c.action, d, e);
          Tb.test(g) && (c.action = g);
        }
      } else {
        for (var k = c.childNodes || [], m = !1, n = 0; n < k.length; n++) {
          var p = k[n];
          if (p.name === a) {
            p.setAttribute("value", b);
            m = !0;
            break;
          }
        }
        if (!m) {
          var q = E.createElement("input");
          q.setAttribute("type", "hidden");
          q.setAttribute("name", a);
          q.setAttribute("value", b);
          c.appendChild(q);
        }
      }
    }
  }
  function op(a) {
    try {
      var b;
      a: {
        for (var c = a, d = 100; c && d > 0; ) {
          if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
            b = c;
            break a;
          }
          c = c.parentNode;
          d--;
        }
        b = null;
      }
      var e = b;
      if (e) {
        var f = e.protocol;
        (f !== "http:" && f !== "https:") || Hp(e, e.hostname);
      }
    } catch (g) {}
  }
  function pp(a) {
    try {
      if (a.action) {
        var b = zj(Fj(a.action), "host");
        Hp(a, b);
      }
    } catch (c) {}
  }
  function Lp(a, b, c, d) {
    np();
    var e = c === "fragment" ? 2 : 1;
    d = !!d;
    rp(a, b, e, d, !1);
    e === 2 && Va("TAGGING", 23);
    d && Va("TAGGING", 24);
  }
  function Mp(a, b) {
    np();
    rp(a, [Bj(B.location, "host", !0)], b, !0, !0);
  }
  function Np() {
    var a = E.location.hostname,
      b = up.exec(E.referrer);
    if (!b) return !1;
    var c = b[2],
      d = b[1],
      e = "";
    if (c) {
      var f = c.split("/"),
        g = f[1];
      e = g === "s" ? decodeURIComponent(f[2]) : decodeURIComponent(g);
    } else if (d) {
      if (d.indexOf("xn--") === 0) return !1;
      e = d.replace(/-/g, ".").replace(/\.\./g, "-");
    }
    var k = a.replace(vp, ""),
      m = e.replace(vp, "");
    return k === m || tb(k, "." + m);
  }
  function Op(a, b) {
    return a === !1 ? !1 : a || b || Np();
  }
  var Pp = ["1"],
    Qp = {},
    Rp = {};
  function Sp(a, b) {
    b = b === void 0 ? !0 : b;
    var c = Tp(a.prefix);
    if (!Qp[c])
      if (Up(c, a.path, a.domain)) {
        var d = Rp[Tp(a.prefix)];
        b && Vp(a, d ? d.id : void 0, d ? d.Zh : void 0);
      } else {
        var e = Gj("auiddc");
        if (e) Va("TAGGING", 17), (Qp[c] = e);
        else if (b) {
          var f = Tp(a.prefix),
            g = ip();
          Wp(f, g, a);
          Up(c, a.path, a.domain);
        }
      }
  }
  function Vp(a, b, c) {
    var d = Tp(a.prefix),
      e = Qp[d];
    if (e) {
      var f = e.split(".");
      if (f.length === 2) {
        var g = Number(f[1]) || 0;
        if (g) {
          var k = e;
          b && (k = e + "." + b + "." + (c ? c : Math.floor(nb() / 1e3)));
          Wp(d, k, a, g * 1e3);
        }
      }
    }
  }
  function Wp(a, b, c, d) {
    var e = kp(b, "1", c.domain, c.path),
      f = lp(c, d);
    f.Ib = Xp();
    bp(a, e, f);
  }
  function Up(a, b, c) {
    var d = jp(a, b, c, Pp, Xp());
    if (!d) return !1;
    Yp(a, d);
    return !0;
  }
  function Yp(a, b) {
    var c = b.split(".");
    c.length === 5
      ? ((Qp[a] = c.slice(0, 2).join(".")),
        (Rp[a] = { id: c.slice(2, 4).join("."), Zh: Number(c[4]) || 0 }))
      : c.length === 3
      ? (Rp[a] = { id: c.slice(0, 2).join("."), Zh: Number(c[2]) || 0 })
      : (Qp[a] = b);
  }
  function Tp(a) {
    return (a || "_gcl") + "_au";
  }
  function Zp(a) {
    function b() {
      Zk(c) && a();
    }
    var c = Xp();
    fl(function () {
      b();
      Zk(c) || gl(b, c);
    }, c);
  }
  function $p(a) {
    var b = Ep(!0),
      c = Tp(a.prefix);
    Zp(function () {
      var d = b[c];
      if (d) {
        Yp(c, d);
        var e = Number(Qp[c].split(".")[1]) * 1e3;
        if (e) {
          Va("TAGGING", 16);
          var f = lp(a, e);
          f.Ib = Xp();
          var g = kp(d, "1", a.domain, a.path);
          bp(c, g, f);
        }
      }
    });
  }
  function aq(a, b, c, d, e) {
    e = e || {};
    var f = function () {
      var g = {},
        k = jp(a, e.path, e.domain, Pp, Xp());
      k && (g[a] = k);
      return g;
    };
    Zp(function () {
      Lp(f, b, c, d);
    });
  }
  function Xp() {
    return ["ad_storage", "ad_user_data"];
  }
  var bq = {},
    cq =
      ((bq.k = { La: /^[\w-]+$/ }),
      (bq.b = { La: /^[\w-]+$/, mi: !0 }),
      (bq.i = { La: /^[1-9]\d*$/ }),
      (bq.u = { La: /^[1-9]\d*$/ }),
      bq);
  var dq = {},
    gq =
      ((dq[5] = { Qk: { 2: eq }, Ih: ["k", "i", "b", "u"] }),
      (dq[4] = { Qk: { 2: eq, GCL: fq }, Ih: ["k", "i", "b"] }),
      dq);
  function hq(a) {
    var b = gq[5];
    if (b) {
      var c = a.split(".")[0];
      if (c) {
        var d = b.Qk[c];
        if (d) return d(a, 5);
      }
    }
  }
  function eq(a, b) {
    var c = a.split(".");
    if (c.length === 3) {
      var d = {},
        e = gq[b];
      if (e) {
        for (
          var f = e.Ih, g = l(c[2].split("$")), k = g.next();
          !k.done;
          k = g.next()
        ) {
          var m = k.value,
            n = m[0];
          if (f.indexOf(n) !== -1)
            try {
              var p = decodeURIComponent(m.substring(1)),
                q = cq[n];
              q && (q.mi ? ((d[n] = d[n] || []), d[n].push(p)) : (d[n] = p));
            } catch (r) {}
        }
        return d;
      }
    }
  }
  function iq(a, b) {
    var c = gq[5];
    if (c) {
      for (var d = [], e = l(c.Ih), f = e.next(); !f.done; f = e.next()) {
        var g = f.value,
          k = cq[g];
        if (k) {
          var m = a[g];
          if (m !== void 0)
            if (k.mi && Array.isArray(m))
              for (var n = l(m), p = n.next(); !p.done; p = n.next())
                d.push(encodeURIComponent("" + g + p.value));
            else d.push(encodeURIComponent("" + g + m));
        }
      }
      return ["2", b || "1", d.join("$")].join(".");
    }
  }
  function fq(a) {
    var b = a.split(".");
    b.shift();
    var c = b.shift(),
      d = b.shift(),
      e = {};
    return (e.k = d), (e.i = c), (e.b = b), e;
  }
  var jq = new Map([
    [5, "ad_storage"],
    [4, ["ad_storage", "ad_user_data"]],
  ]);
  function kq(a) {
    if (gq[5]) {
      for (
        var b = [],
          c = Ro(a, void 0, void 0, jq.get(5)),
          d = l(c),
          e = d.next();
        !e.done;
        e = d.next()
      ) {
        var f = hq(e.value);
        f && (lq(f), b.push(f));
      }
      return b;
    }
  }
  function mq(a, b, c, d) {
    c = c || {};
    var e = gp(c.domain, c.path),
      f = iq(b, e);
    if (f) {
      var g = lp(c, d, void 0, jq.get(5));
      bp(a, f, g);
    }
  }
  function nq(a, b) {
    var c = b.La;
    return typeof c === "function" ? c(a) : c.test(a);
  }
  function lq(a) {
    for (
      var b = l(Object.keys(a)), c = b.next(), d = {};
      !c.done;
      d = { Pe: void 0 }, c = b.next()
    ) {
      var e = c.value,
        f = a[e];
      d.Pe = cq[e];
      d.Pe
        ? d.Pe.mi
          ? (a[e] = Array.isArray(f)
              ? f.filter(
                  (function (g) {
                    return function (k) {
                      return nq(k, g.Pe);
                    };
                  })(d)
                )
              : void 0)
          : (typeof f === "string" && nq(f, d.Pe)) || (a[e] = void 0)
        : (a[e] = void 0);
    }
  }
  function oq(a) {
    for (
      var b = [],
        c = E.cookie.split(";"),
        d = new RegExp(
          "^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"
        ),
        e = 0;
      e < c.length;
      e++
    ) {
      var f = c[e].match(d);
      f &&
        b.push({
          ui: f[1],
          value: f[2],
          timestamp: Number(f[2].split(".")[1]) || 0,
        });
    }
    b.sort(function (g, k) {
      return k.timestamp - g.timestamp;
    });
    return b;
  }
  function pq(a, b) {
    var c = oq(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split(".");
      if (
        !(f[0] !== "1" || (b && f.length < 3) || (!b && f.length !== 3)) &&
        Number(f[1])
      ) {
        d[c[e].ui] || (d[c[e].ui] = []);
        var g = { version: f[0], timestamp: Number(f[1]) * 1e3, W: f[2] };
        b && f.length > 3 && (g.labels = f.slice(3));
        d[c[e].ui].push(g);
      }
    }
    return d;
  }
  function qq() {
    var a = String,
      b = B.location.hostname,
      c = B.location.pathname,
      d = (b = Bb(b));
    d.split(".").length > 2 &&
      (d = d.replace(/^(www[0-9]*|web|ftp|wap|home|m|w|amp|mobile)\./, ""));
    b = d;
    c = Bb(c);
    var e = c.split(";")[0];
    e = e.replace(/\/(ar|slp|web|index)?\/?$/, "");
    return a(Po(("" + b + e).toLowerCase()));
  }
  var rq = ["ad_storage", "ad_user_data"];
  function sq() {
    var a = tq();
    if (a.error) return a;
    if (!a.value) return { error: 2 };
    var b;
    try {
      b = a.value.gclid;
    } catch (c) {
      return { error: 11 };
    }
    return b ? { value: b } : { value: void 0 };
  }
  function tq(a) {
    a = a === void 0 ? !0 : a;
    if (!Zk(rq)) return { error: 3 };
    try {
      if (!B.localStorage) return { error: 1 };
    } catch (f) {
      return { error: 14 };
    }
    var b = { schema: "gcl", version: 1 },
      c = void 0;
    try {
      c = B.localStorage.getItem("_gcl_ls");
    } catch (f) {
      return { error: 13 };
    }
    try {
      if (c) {
        var d = JSON.parse(c);
        if (d && typeof d === "object") b = d;
        else return { error: 12 };
      }
    } catch (f) {
      return { error: 8 };
    }
    if (b.schema !== "gcl") return { error: 4 };
    if (b.version !== 1) return { error: 5 };
    try {
      var e = uq(b);
      a && e && vq({ value: b, error: 0 });
    } catch (f) {
      return { error: 8 };
    }
    return { value: b, error: 0 };
  }
  function uq(a) {
    if (!a || typeof a !== "object") return !1;
    if ("expires" in a && "value" in a) {
      var b;
      typeof a.expires === "number"
        ? (b = a.expires)
        : (b = typeof a.expires === "string" ? Number(a.expires) : NaN);
      if (isNaN(b) || !(Date.now() <= b))
        return (a.value = null), (a.error = 9), !0;
    } else {
      for (
        var c = !1, d = l(Object.keys(a)), e = d.next();
        !e.done;
        e = d.next()
      )
        c = uq(a[e.value]) || c;
      return c;
    }
    return !1;
  }
  function vq(a) {
    if (!a.error && a.value) {
      var b = a.value,
        c;
      try {
        c = JSON.stringify(b);
      } catch (d) {
        return;
      }
      try {
        B.localStorage.setItem("_gcl_ls", c);
      } catch (d) {}
    }
  }
  var wq = /^\w+$/,
    xq = /^[\w-]+$/,
    yq = {},
    zq =
      ((yq.aw = "_aw"),
      (yq.dc = "_dc"),
      (yq.gf = "_gf"),
      (yq.gp = "_gp"),
      (yq.gs = "_gs"),
      (yq.ha = "_ha"),
      (yq.ag = "_ag"),
      (yq.gb = "_gb"),
      yq);
  function Aq() {
    return ["ad_storage", "ad_user_data"];
  }
  function Bq(a) {
    return !Yh(9) || Zk(a);
  }
  function Cq(a, b) {
    function c() {
      var d = Bq(b);
      d && a();
      return d;
    }
    fl(function () {
      c() || gl(c, b);
    }, b);
  }
  function Dq(a) {
    return Eq(a).map(function (b) {
      return b.W;
    });
  }
  function Fq(a) {
    return Gq(a)
      .filter(function (b) {
        return b.W;
      })
      .map(function (b) {
        return b.W;
      });
  }
  function Gq(a) {
    var b = Hq(a.prefix),
      c = Iq("gb", b),
      d = Iq("ag", b);
    if (!d || !c) return [];
    var e = function (k) {
        return function (m) {
          m.type = k;
          return m;
        };
      },
      f = Eq(c).map(e("gb")),
      g = Jq(d).map(e("ag"));
    return f.concat(g).sort(function (k, m) {
      return m.timestamp - k.timestamp;
    });
  }
  function Kq(a, b, c, d, e, f) {
    var g = bb(a, function (k) {
      return k.W === c;
    });
    g
      ? (g.timestamp < d && ((g.timestamp = d), (g.Md = f)),
        (g.labels = Lq(g.labels || [], e || [])))
      : a.push({ version: b, W: c, timestamp: d, labels: e, Md: f });
  }
  function Jq(a) {
    for (
      var b = kq(a) || [], c = [], d = l(b), e = d.next();
      !e.done;
      e = d.next()
    ) {
      var f = e.value,
        g = f,
        k = g.k,
        m = g.b,
        n = Mq(f);
      if (n) {
        var p = void 0;
        Yh(10) && (p = f.u);
        Kq(c, "2", k, n, m || [], p);
      }
    }
    return c.sort(function (q, r) {
      return r.timestamp - q.timestamp;
    });
  }
  function Eq(a) {
    for (
      var b = [], c = Ro(a, E.cookie, void 0, Aq()), d = l(c), e = d.next();
      !e.done;
      e = d.next()
    ) {
      var f = Nq(e.value);
      if (f != null) {
        var g = f;
        Kq(b, g.version, g.W, g.timestamp, g.labels);
      }
    }
    b.sort(function (k, m) {
      return m.timestamp - k.timestamp;
    });
    return Oq(b);
  }
  function Pq(a, b) {
    for (var c = [], d = l(a), e = d.next(); !e.done; e = d.next()) {
      var f = e.value;
      c.includes(f) || c.push(f);
    }
    for (var g = l(b), k = g.next(); !k.done; k = g.next()) {
      var m = k.value;
      c.includes(m) || c.push(m);
    }
    return c;
  }
  function Qq(a, b) {
    var c = bb(a, function (d) {
      return d.W === b.W;
    });
    c
      ? (c.timestamp < b.timestamp &&
          ((c.timestamp = b.timestamp), (c.Md = b.Md)),
        (c.Pa = c.Pa
          ? b.Pa
            ? c.timestamp < b.timestamp
              ? b.Pa
              : c.Pa
            : c.Pa || 0
          : b.Pa || 0),
        (c.labels = Pq(c.labels || [], b.labels || [])),
        (c.Sc = Pq(c.Sc || [], b.Sc || [])))
      : a.push(b);
  }
  function Rq() {
    var a = sq();
    if (!a || a.error || !a.value || typeof a.value !== "object") return null;
    var b = a.value;
    try {
      if (!("value" in b && b.value) || typeof b.value !== "object")
        return null;
      var c = b.value,
        d = c.value;
      return d && d.match(xq)
        ? {
            version: "",
            W: d,
            timestamp: Number(c.creationTimeMs) || 0,
            labels: [],
            Pa: c.linkDecorationSource || 0,
            Sc: [2],
          }
        : null;
    } catch (e) {
      return null;
    }
  }
  function Sq(a) {
    for (
      var b = [], c = Ro(a, E.cookie, void 0, Aq()), d = l(c), e = d.next();
      !e.done;
      e = d.next()
    ) {
      var f = Nq(e.value);
      f != null && ((f.Md = void 0), (f.Pa = 0), (f.Sc = [1]), Qq(b, f));
    }
    var g = Rq();
    g && ((g.Md = void 0), (g.Pa = g.Pa || 0), (g.Sc = g.Sc || [2]), Qq(b, g));
    b.sort(function (k, m) {
      return m.timestamp - k.timestamp;
    });
    return Oq(b);
  }
  function Lq(a, b) {
    if (!a.length) return b;
    if (!b.length) return a;
    var c = {};
    return a.concat(b).filter(function (d) {
      return c.hasOwnProperty(d) ? !1 : (c[d] = !0);
    });
  }
  function Hq(a) {
    return a && typeof a === "string" && a.match(wq) ? a : "_gcl";
  }
  function Tq(a, b, c) {
    var d = Fj(a),
      e = zj(d, "query", !1, void 0, "gclsrc"),
      f = { value: zj(d, "query", !1, void 0, "gclid"), Pa: c ? 4 : 2 };
    if (b && (!f.value || !e)) {
      var g = d.hash.replace("#", "");
      f.value || ((f.value = yj(g, "gclid", !1)), (f.Pa = 3));
      e || (e = yj(g, "gclsrc", !1));
    }
    return !f.value || (e !== void 0 && e !== "aw" && e !== "aw.ds") ? [] : [f];
  }
  function Uq(a, b) {
    var c = Fj(a),
      d = zj(c, "query", !1, void 0, "gclid"),
      e = zj(c, "query", !1, void 0, "gclsrc"),
      f = zj(c, "query", !1, void 0, "wbraid");
    f = zb(f);
    var g = zj(c, "query", !1, void 0, "gbraid"),
      k = zj(c, "query", !1, void 0, "gad_source"),
      m = zj(c, "query", !1, void 0, "dclid");
    if (b && !(d && e && f && g)) {
      var n = c.hash.replace("#", "");
      d = d || yj(n, "gclid", !1);
      e = e || yj(n, "gclsrc", !1);
      f = f || yj(n, "wbraid", !1);
      g = g || yj(n, "gbraid", !1);
      k = k || yj(n, "gad_source", !1);
    }
    return Vq(d, e, m, f, g, k);
  }
  function Wq() {
    return Uq(B.location.href, !0);
  }
  function Vq(a, b, c, d, e, f) {
    var g = {},
      k = function (m, n) {
        g[n] || (g[n] = []);
        g[n].push(m);
      };
    g.gclid = a;
    g.gclsrc = b;
    g.dclid = c;
    if (a !== void 0 && a.match(xq))
      switch (b) {
        case void 0:
          k(a, "aw");
          break;
        case "aw.ds":
          k(a, "aw");
          k(a, "dc");
          break;
        case "ds":
          k(a, "dc");
          break;
        case "3p.ds":
          k(a, "dc");
          break;
        case "gf":
          k(a, "gf");
          break;
        case "ha":
          k(a, "ha");
      }
    c && k(c, "dc");
    d !== void 0 && xq.test(d) && ((g.wbraid = d), k(d, "gb"));
    e !== void 0 && xq.test(e) && ((g.gbraid = e), k(e, "ag"));
    f !== void 0 && xq.test(f) && ((g.gad_source = f), k(f, "gs"));
    return g;
  }
  function Xq(a) {
    var b = Wq();
    if (Yh(6)) {
      for (
        var c = !0, d = l(Object.keys(b)), e = d.next();
        !e.done;
        e = d.next()
      )
        if (b[e.value] !== void 0) {
          c = !1;
          break;
        }
      c && ((b = Uq(B.document.referrer, !1)), (b.gad_source = void 0));
    }
    Yq(b, !1, a);
  }
  function Zq(a) {
    Xq(a);
    var b = Tq(B.location.href, !0, !1);
    Yh(6) && !b.length && (b = Tq(B.document.referrer, !1, !0));
    if (b.length) {
      var c = b[0];
      a = a || {};
      var d = nb(),
        e = lp(a, d, !0),
        f = Aq(),
        g = function () {
          if (Bq(f) && e.expires !== void 0) {
            var k = {
                value: {
                  value: c.value,
                  creationTimeMs: d,
                  linkDecorationSource: c.Pa,
                },
                expires: Number(e.expires),
              },
              m = tq(!1);
            !m.error && m.value && ((m.value.gclid = k), vq(m));
          }
        };
      fl(function () {
        g();
        Bq(f) || gl(g, f);
      }, f);
    }
  }
  function Yq(a, b, c, d, e) {
    c = c || {};
    e = e || [];
    var f = Hq(c.prefix),
      g = d || nb(),
      k = Math.round(g / 1e3),
      m = Aq(),
      n = !1,
      p = !1,
      q = function () {
        if (Bq(m)) {
          var r = lp(c, g, !0);
          r.Ib = m;
          for (
            var u = function (F, T) {
                var N = Iq(F, f);
                N && (bp(N, T, r), F !== "gb" && (n = !0));
              },
              v = function (F) {
                var T = ["GCL", k, F];
                e.length > 0 && T.push(e.join("."));
                return T.join(".");
              },
              t = l(["aw", "dc", "gf", "ha", "gp"]),
              w = t.next();
            !w.done;
            w = t.next()
          ) {
            var x = w.value;
            a[x] && u(x, v(a[x][0]));
          }
          if (!n && a.gb) {
            var y = a.gb[0],
              A = Iq("gb", f);
            (!b &&
              Eq(A).some(function (F) {
                return F.W === y && F.labels && F.labels.length > 0;
              })) ||
              u("gb", v(y));
          }
        }
        if (!p && a.gbraid && Bq("ad_storage") && ((p = !0), !n)) {
          var C = a.gbraid,
            D = Iq("ag", f);
          if (
            b ||
            !Jq(D).some(function (F) {
              return F.W === C && F.labels && F.labels.length > 0;
            })
          ) {
            var G = {},
              J = ((G.k = C), (G.i = "" + k), (G.b = e), G);
            mq(D, J, c, g);
          }
        }
        $q(a, f, g, c);
      };
    fl(function () {
      q();
      Bq(m) || gl(q, m);
    }, m);
  }
  function $q(a, b, c, d) {
    if (a.gad_source !== void 0 && Bq("ad_storage")) {
      if (Yh(4)) {
        var e = Ec();
        if (e === "r" || e === "h") return;
      }
      var f = a.gad_source,
        g = Iq("gs", b);
      if (g) {
        var k = Math.round((nb() - (Dc() || 0)) / 1e3),
          m;
        if (Yh(10)) {
          var n = qq(),
            p = {};
          m = ((p.k = f), (p.i = "" + k), (p.u = n), p);
        } else {
          var q = {};
          m = ((q.k = f), (q.i = "" + k), q);
        }
        mq(g, m, d, c);
      }
    }
  }
  function ar(a, b) {
    var c = Ep(!0);
    Cq(function () {
      for (var d = Hq(b.prefix), e = 0; e < a.length; ++e) {
        var f = a[e];
        if (zq[f] !== void 0) {
          var g = Iq(f, d),
            k = c[g];
          if (k) {
            var m = Math.min(br(k), nb()),
              n;
            b: {
              for (
                var p = m, q = Ro(g, E.cookie, void 0, Aq()), r = 0;
                r < q.length;
                ++r
              )
                if (br(q[r]) > p) {
                  n = !0;
                  break b;
                }
              n = !1;
            }
            if (!n) {
              var u = lp(b, m, !0);
              u.Ib = Aq();
              bp(g, k, u);
            }
          }
        }
      }
      Yq(Vq(c.gclid, c.gclsrc), !1, b);
    }, Aq());
  }
  function cr(a) {
    var b = ["ag"],
      c = Ep(!0),
      d = Hq(a.prefix);
    Cq(
      function () {
        for (var e = 0; e < b.length; ++e) {
          var f = Iq(b[e], d);
          if (f) {
            var g = c[f];
            if (g) {
              var k = hq(g);
              if (k) {
                var m = Mq(k);
                m || (m = nb());
                var n;
                a: {
                  for (var p = m, q = kq(f), r = 0; r < q.length; ++r)
                    if (Mq(q[r]) > p) {
                      n = !0;
                      break a;
                    }
                  n = !1;
                }
                if (n) break;
                k.i = "" + Math.round(m / 1e3);
                mq(f, k, a, m);
              }
            }
          }
        }
      },
      ["ad_storage"]
    );
  }
  function Iq(a, b) {
    var c = zq[a];
    if (c !== void 0) return b + c;
  }
  function br(a) {
    return dr(a.split(".")).length !== 0
      ? (Number(a.split(".")[1]) || 0) * 1e3
      : 0;
  }
  function Mq(a) {
    return a ? (Number(a.i) || 0) * 1e3 : 0;
  }
  function Nq(a) {
    var b = dr(a.split("."));
    return b.length === 0
      ? null
      : {
          version: b[0],
          W: b[2],
          timestamp: (Number(b[1]) || 0) * 1e3,
          labels: b.slice(3),
        };
  }
  function dr(a) {
    return a.length < 3 ||
      (a[0] !== "GCL" && a[0] !== "1") ||
      !/^\d+$/.test(a[1]) ||
      !xq.test(a[2])
      ? []
      : a;
  }
  function er(a, b, c, d, e) {
    if (Array.isArray(b) && Qo(B)) {
      var f = Hq(e),
        g = function () {
          for (var k = {}, m = 0; m < a.length; ++m) {
            var n = Iq(a[m], f);
            if (n) {
              var p = Ro(n, E.cookie, void 0, Aq());
              p.length && (k[n] = p.sort()[p.length - 1]);
            }
          }
          return k;
        };
      Cq(function () {
        Lp(g, b, c, d);
      }, Aq());
    }
  }
  function fr(a, b, c, d) {
    if (Array.isArray(a) && Qo(B)) {
      var e = ["ag"],
        f = Hq(d),
        g = function () {
          for (var k = {}, m = 0; m < e.length; ++m) {
            var n = Iq(e[m], f);
            if (!n) return {};
            var p = kq(n);
            if (p.length) {
              var q = p.sort(function (r, u) {
                return Mq(u) - Mq(r);
              })[0];
              k[n] = iq(q);
            }
          }
          return k;
        };
      Cq(
        function () {
          Lp(g, a, b, c);
        },
        ["ad_storage"]
      );
    }
  }
  function Oq(a) {
    return a.filter(function (b) {
      return xq.test(b.W);
    });
  }
  function gr(a, b) {
    if (Qo(B)) {
      for (var c = Hq(b.prefix), d = {}, e = 0; e < a.length; e++)
        zq[a[e]] && (d[a[e]] = zq[a[e]]);
      Cq(function () {
        gb(d, function (f, g) {
          var k = Ro(c + g, E.cookie, void 0, Aq());
          k.sort(function (u, v) {
            return br(v) - br(u);
          });
          if (k.length) {
            var m = k[0],
              n = br(m),
              p = dr(m.split(".")).length !== 0 ? m.split(".").slice(3) : [],
              q = {},
              r;
            r = dr(m.split(".")).length !== 0 ? m.split(".")[2] : void 0;
            q[f] = [r];
            Yq(q, !0, b, n, p);
          }
        });
      }, Aq());
    }
  }
  function hr(a) {
    var b = ["ag"],
      c = ["gbraid"];
    Cq(
      function () {
        for (var d = Hq(a.prefix), e = 0; e < b.length; ++e) {
          var f = Iq(b[e], d);
          if (!f) break;
          var g = kq(f);
          if (g.length) {
            var k = g.sort(function (q, r) {
                return Mq(r) - Mq(q);
              })[0],
              m = Mq(k),
              n = k.b,
              p = {};
            p[c[e]] = k.k;
            Yq(p, !0, a, m, n);
          }
        }
      },
      ["ad_storage"]
    );
  }
  function ir(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1;
  }
  function jr(a) {
    function b(k, m, n) {
      n && (k[m] = n);
    }
    if (cl()) {
      var c = Wq(),
        d;
      a.includes("gad_source") &&
        (d = c.gad_source !== void 0 ? c.gad_source : Ep(!1)._gs);
      if (ir(c, a) || d) {
        var e = {};
        b(e, "gclid", c.gclid);
        b(e, "dclid", c.dclid);
        b(e, "gclsrc", c.gclsrc);
        b(e, "wbraid", c.wbraid);
        b(e, "gbraid", c.gbraid);
        Mp(function () {
          return e;
        }, 3);
        var f = {},
          g = ((f._up = "1"), f);
        b(g, "_gs", d);
        Mp(function () {
          return g;
        }, 1);
      }
    }
  }
  function kr(a) {
    if (!Yh(1)) return null;
    var b = Ep(!0).gad_source;
    if (b != null) return (B.location.hash = ""), b;
    if (Yh(2)) {
      var c = Fj(B.location.href);
      b = zj(c, "query", !1, void 0, "gad_source");
      if (b != null) return b;
      var d = Wq();
      if (ir(d, a)) return "0";
    }
    return null;
  }
  function lr(a) {
    var b = kr(a);
    b != null &&
      Mp(function () {
        var c = {};
        return (c.gad_source = b), c;
      }, 4);
  }
  function mr(a, b, c) {
    var d = [];
    if (b.length === 0) return d;
    for (var e = {}, f = 0; f < b.length; f++) {
      var g = b[f],
        k = g.type ? g.type : "gcl";
      (g.labels || []).indexOf(c) === -1
        ? (a.push(0), e[k] || d.push(g))
        : a.push(1);
      e[k] = !0;
    }
    return d;
  }
  function nr(a, b, c, d) {
    var e = [];
    c = c || {};
    if (!Bq(Aq())) return e;
    var f = Eq(a),
      g = mr(e, f, b);
    if (g.length && !d)
      for (var k = l(g), m = k.next(); !m.done; m = k.next()) {
        var n = m.value,
          p = n.timestamp,
          q = [n.version, Math.round(p / 1e3), n.W]
            .concat(n.labels || [], [b])
            .join("."),
          r = lp(c, p, !0);
        r.Ib = Aq();
        bp(a, q, r);
      }
    return e;
  }
  function or(a, b) {
    var c = [];
    b = b || {};
    var d = Gq(b),
      e = mr(c, d, a);
    if (e.length)
      for (var f = l(e), g = f.next(); !g.done; g = f.next()) {
        var k = g.value,
          m = Hq(b.prefix),
          n = Iq(k.type, m);
        if (!n) break;
        var p = k,
          q = p.version,
          r = p.W,
          u = p.labels,
          v = p.timestamp,
          t = Math.round(v / 1e3);
        if (k.type === "ag") {
          var w = {},
            x = ((w.k = r), (w.i = "" + t), (w.b = (u || []).concat([a])), w);
          mq(n, x, b, v);
        } else if (k.type === "gb") {
          var y = [q, t, r].concat(u || [], [a]).join("."),
            A = lp(b, v, !0);
          A.Ib = Aq();
          bp(n, y, A);
        }
      }
    return c;
  }
  function pr(a, b) {
    var c = Hq(b),
      d = Iq(a, c);
    if (!d) return 0;
    var e;
    e = a === "ag" ? Jq(d) : Eq(d);
    for (var f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
    return f;
  }
  function qr(a) {
    for (var b = 0, c = l(Object.keys(a)), d = c.next(); !d.done; d = c.next())
      for (var e = a[d.value], f = 0; f < e.length; f++)
        b = Math.max(b, Number(e[f].timestamp));
    return b;
  }
  function rr(a) {
    var b = Math.max(pr("aw", a), qr(Bq(Aq()) ? pq() : {})),
      c = Math.max(pr("gb", a), qr(Bq(Aq()) ? pq("_gac_gb", !0) : {}));
    c = Math.max(c, pr("ag", a));
    return c > b;
  }
  var sr = function (a, b) {
      var c = (Ki.ads_pageview = Ki.ads_pageview || {});
      if (c[a]) return !1;
      (b === void 0 ? 0 : b) || (c[a] = !0);
      return !0;
    },
    tr = function (a) {
      var b = Fj(a);
      return Ab(
        "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(
          " "
        ),
        b,
        "0"
      );
    },
    Br = function (a, b, c, d, e) {
      var f = Hq(a.prefix);
      if (sr(f, !0)) {
        var g = Wq(),
          k = [],
          m = g.gclid,
          n = g.dclid,
          p = g.gclsrc || "aw",
          q = ur(),
          r = q.Ve,
          u = q.kk;
        !m ||
          (p !== "aw.ds" && p !== "aw" && p !== "ds" && p !== "3p.ds") ||
          k.push({ W: m, We: p });
        n && k.push({ W: n, We: "ds" });
        k.length === 2 && U(147);
        k.length === 0 && g.wbraid && k.push({ W: g.wbraid, We: "gb" });
        k.length === 0 && p === "aw.ds" && k.push({ W: "", We: "aw.ds" });
        vr(function () {
          var v = W(wr());
          if (v) {
            Sp(a);
            var t = [],
              w = v ? Qp[Tp(a.prefix)] : void 0;
            w && t.push("auid=" + w);
            if (W(O.g.O)) {
              e && t.push("userId=" + e);
              var x = Pl(Kl.Bh);
              if (x === void 0) Ol(Kl.Ch, !0);
              else {
                var y = Pl(Kl.He);
                t.push("ga_uid=" + y + "." + x);
              }
            }
            var A = E.referrer ? zj(Fj(E.referrer), "host") : "",
              C = v || !d ? k : [];
            C.length === 0 &&
              (xr.test(A) || yr.test(A)) &&
              C.push({ W: "", We: "" });
            if (C.length !== 0 || r !== void 0) {
              A && t.push("ref=" + encodeURIComponent(A));
              var D = zr();
              t.push("url=" + encodeURIComponent(D));
              t.push("tft=" + nb());
              var G = Dc();
              G !== void 0 && t.push("tfd=" + Math.round(G));
              var J = Nn(!0);
              t.push("frm=" + J);
              r !== void 0 && t.push("gad_source=" + encodeURIComponent(r));
              u !== void 0 &&
                t.push("gad_source_src=" + encodeURIComponent(u.toString()));
              if (!c) {
                var F = {};
                c = Dm(tm(new sm(0), ((F[O.g.na] = Ym.j[O.g.na]), F)));
              }
              t.push("gtm=" + Oo({ qa: b }));
              Bo() && t.push("gcs=" + Co());
              t.push("gcd=" + Go(c));
              Jo() && t.push("dma_cps=" + Ho());
              t.push("dma=" + Io());
              Ao(c) ? t.push("npa=0") : t.push("npa=1");
              Lo() && t.push("_ng=1");
              Xn(fo()) && t.push("tcfd=" + Ko());
              var T = uo();
              T && t.push("gdpr=" + T);
              var N = to();
              N && t.push("gdpr_consent=" + N);
              S(21) && t.push("apve=0");
              S(105) && Ep(!1)._up && t.push("gtm_up=1");
              ej() && t.push("tag_exp=" + ej());
              if (C.length > 0)
                for (var Z = 0; Z < C.length; Z++) {
                  var ba = C[Z],
                    fa = ba.W,
                    R = ba.We;
                  if (!Ar(a.prefix, R + "." + fa, w !== void 0)) {
                    var M =
                      "https://adservice.google.com/pagead/regclk?" +
                      t.join("&");
                    fa !== ""
                      ? (M =
                          R === "gb"
                            ? M + "&wbraid=" + fa
                            : M + "&gclid=" + fa + "&gclsrc=" + R)
                      : R === "aw.ds" && (M += "&gclsrc=aw.ds");
                    xc(M);
                  }
                }
              else if (r !== void 0 && !Ar(a.prefix, "gad", w !== void 0)) {
                var ea =
                  "https://adservice.google.com/pagead/regclk?" + t.join("&");
                xc(ea);
              }
            }
          }
        });
      }
    },
    Ar = function (a, b, c) {
      var d = (Ki.joined_auid = Ki.joined_auid || {}),
        e = (c ? a || "_gcl" : "") + "." + b;
      if (d[e]) return !0;
      d[e] = !0;
      return !1;
    },
    ur = function () {
      var a = Fj(B.location.href),
        b = void 0,
        c = void 0,
        d = zj(a, "query", !1, void 0, "gad_source"),
        e,
        f = a.hash.replace("#", "").match(Cr);
      e = f ? f[1] : void 0;
      d && e
        ? ((b = d), (c = 1))
        : d
        ? ((b = d), (c = 2))
        : e && ((b = e), (c = 3));
      return { Ve: b, kk: c };
    },
    zr = function () {
      var a = Nn(!1) === 1 ? B.top.location.href : B.location.href;
      return (a = a.replace(/[\?#].*$/, ""));
    },
    Dr = function (a) {
      var b = [];
      gb(a, function (c, d) {
        d = Oq(d);
        for (var e = [], f = 0; f < d.length; f++) e.push(d[f].W);
        e.length && b.push(c + ":" + e.join(","));
      });
      return b.join(";");
    },
    Fr = function (a, b) {
      return Er("dc", a, b);
    },
    Gr = function (a, b) {
      return Er("aw", a, b);
    },
    Er = function (a, b, c) {
      if (a === "aw" || a === "dc" || a === "gb") {
        var d = Gj("gcl" + a);
        if (d) return d.split(".");
      }
      var e = Hq(b);
      if (e === "_gcl") {
        var f = !W(wr()) && c,
          g;
        g = Wq()[a] || [];
        if (g.length > 0) return f ? ["0"] : g;
      }
      var k = Iq(a, e);
      return k ? Dq(k) : [];
    },
    vr = function (a) {
      var b = wr();
      Fl(function () {
        a();
        W(b) || gl(a, b);
      }, b);
    },
    wr = function () {
      return [O.g.N, O.g.O];
    },
    xr = /^(?:www\.)?google(?:\.com?)?(?:\.[a-z]{2}t?)?$/,
    yr = /^www\.googleadservices\.com$/,
    Cr = /^gad_source[_=](\d+)$/;
  function Hr() {
    Ki.dedupe_gclid || (Ki.dedupe_gclid = ip());
    return Ki.dedupe_gclid;
  }
  var Ir = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
    Jr = /^www.googleadservices.com$/;
  function Kr(a) {
    a || (a = Lr());
    return a.An
      ? !1
      : a.zm || a.Am || a.Dm || a.Bm || a.Ve || a.jm || a.Cm || a.om
      ? !0
      : !1;
  }
  function Lr() {
    var a = {},
      b = Ep(!0);
    a.An = !!b._up;
    var c = Wq();
    a.zm = c.aw !== void 0;
    a.Am = c.dc !== void 0;
    a.Dm = c.wbraid !== void 0;
    a.Bm = c.gbraid !== void 0;
    a.Cm = c.gclsrc === "aw.ds";
    a.Ve = ur().Ve;
    var d = E.referrer ? zj(Fj(E.referrer), "host") : "";
    a.om = Ir.test(d);
    a.jm = Jr.test(d);
    return a;
  }
  var Mr = RegExp(
      "^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"
    ),
    Nr = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
    Or = /^\d+\.fls\.doubleclick\.net$/,
    Pr = /;gac=([^;?]+)/,
    Qr = /;gacgb=([^;?]+)/;
  function Rr(a, b) {
    if (Or.test(E.location.host)) {
      var c = E.location.href.match(b);
      return c && c.length === 2 && c[1].match(Mr)
        ? decodeURIComponent(c[1])
        : "";
    }
    for (
      var d = [], e = l(Object.keys(a)), f = e.next();
      !f.done;
      f = e.next()
    ) {
      for (var g = f.value, k = [], m = a[g], n = 0; n < m.length; n++)
        k.push(m[n].W);
      d.push(g + ":" + k.join(","));
    }
    return d.length > 0 ? d.join(";") : "";
  }
  function Sr(a, b, c) {
    for (
      var d = Bq(Aq()) ? pq("_gac_gb", !0) : {},
        e = [],
        f = !1,
        g = l(Object.keys(d)),
        k = g.next();
      !k.done;
      k = g.next()
    ) {
      var m = k.value,
        n = nr("_gac_gb_" + m, a, b, c);
      f =
        f ||
        (n.length !== 0 &&
          n.some(function (p) {
            return p === 1;
          }));
      e.push(m + ":" + n.join(","));
    }
    return { im: f ? e.join(";") : "", hm: Rr(d, Qr) };
  }
  function Tr(a) {
    var b = E.location.href.match(new RegExp(";" + a + "=([^;?]+)"));
    return b && b.length === 2 && b[1].match(Nr) ? b[1] : void 0;
  }
  function Ur(a) {
    var b = Yh(10),
      c = {},
      d,
      e,
      f;
    Or.test(E.location.host) &&
      ((d = Tr("gclgs")), (e = Tr("gclst")), b && (f = Tr("gcllp")));
    if (d && e && (!b || f)) (c.lg = d), (c.ng = e), (c.mg = f);
    else {
      var g = nb(),
        k = Jq((a || "_gcl") + "_gs"),
        m = k.map(function (q) {
          return q.W;
        }),
        n = k.map(function (q) {
          return g - q.timestamp;
        }),
        p = [];
      b &&
        (p = k.map(function (q) {
          return q.Md;
        }));
      m.length > 0 &&
        n.length > 0 &&
        (!b || p.length > 0) &&
        ((c.lg = m.join(".")),
        (c.ng = n.join(".")),
        b && p.length > 0 && (c.mg = p.join(".")));
    }
    return c;
  }
  function Vr(a, b, c, d) {
    d = d === void 0 ? !1 : d;
    if (Or.test(E.location.host)) {
      var e = Tr(c);
      if (e) return [{ W: e }];
    } else {
      if (b === "gclid") {
        var f = (a || "_gcl") + "_aw";
        return d ? Sq(f) : Eq(f);
      }
      if (b === "wbraid") return Eq((a || "_gcl") + "_gb");
      if (b === "braids") return Gq({ prefix: a });
    }
    return [];
  }
  function Wr(a) {
    return Vr(a, "gclid", "gclaw")
      .map(function (b) {
        return b.W;
      })
      .join(".");
  }
  function Xr(a) {
    var b = Vr(a, "gclid", "gclaw", !0),
      c = b
        .map(function (f) {
          return f.W;
        })
        .join("."),
      d = b
        .map(function (f) {
          return f.Pa || 0;
        })
        .join("."),
      e = b
        .map(function (f) {
          for (
            var g = 0, k = l(f.Sc || []), m = k.next();
            !m.done;
            m = k.next()
          ) {
            var n = m.value;
            n === 1 && (g |= 1);
            n === 2 && (g |= 2);
          }
          return g.toString();
        })
        .join(".");
    return { W: c, lk: d, mk: e };
  }
  function Yr(a) {
    return Vr(a, "braids", "gclgb")
      .map(function (b) {
        return b.W;
      })
      .join(".");
  }
  function Zr(a) {
    return Or.test(E.location.host) ? !(Tr("gclaw") || Tr("gac")) : rr(a);
  }
  function $r(a, b, c) {
    var d;
    d = c ? or(a, b) : nr(((b && b.prefix) || "_gcl") + "_gb", a, b);
    return d.length === 0 ||
      d.every(function (e) {
        return e === 0;
      })
      ? ""
      : d.join(".");
  }
  function as() {
    var a = B.__uspapi;
    if (Za(a)) {
      var b = "";
      try {
        a("getUSPData", 1, function (c, d) {
          if (d && c) {
            var e = c.uspString;
            e && RegExp("^[\\da-zA-Z-]{1,20}$").test(e) && (b = e);
          }
        });
      } catch (c) {}
      return b;
    }
  }
  var es = function (a) {
      if (a.eventName === O.g.ba && a.metadata.hit_type === "page_view")
        if (S(22)) {
          a.metadata.redact_click_ids =
            V(a.m, O.g.ia) != null &&
            V(a.m, O.g.ia) !== !1 &&
            !W([O.g.N, O.g.O]);
          var b = bs(a),
            c = V(a.m, O.g.xa) !== !1;
          c || (a.j[O.g.cj] = "1");
          var d = Hq(b.prefix),
            e = a.metadata.is_server_side_destination;
          if (!a.metadata.consent_updated && !a.metadata.user_id_updated) {
            var f = V(a.m, O.g.eb),
              g = V(a.m, O.g.ya) || {};
            cs({ Ed: c, Nd: g, Sd: f, rc: b });
            if (!e && !sr(d)) {
              a.isAborted = !0;
              return;
            }
          }
          if (e) a.isAborted = !0;
          else {
            a.j[O.g.Cc] = O.g.ac;
            if (a.metadata.consent_updated)
              (a.j[O.g.Cc] = O.g.Vk), (a.j[O.g.Yb] = "1");
            else if (a.metadata.user_id_updated) a.j[O.g.Cc] = O.g.al;
            else {
              var k = Wq();
              a.j[O.g.Wd] = k.gclid;
              a.j[O.g.ee] = k.dclid;
              a.j[O.g.Xi] = k.gclsrc;
              a.j[O.g.Wd] ||
                a.j[O.g.ee] ||
                ((a.j[O.g.Bf] = k.wbraid), (a.j[O.g.Gg] = k.gbraid));
              a.j[O.g.Ga] = E.referrer ? zj(Fj(E.referrer), "host") : "";
              a.j[O.g.za] = zr();
              if (S(25) && fc) {
                var m = zj(Fj(fc), "host");
                m && (a.j[O.g.vj] = m);
              }
              var n = ur(),
                p = n.kk;
              a.j[O.g.Qi] = n.Ve;
              a.j[O.g.Ri] = p;
              a.j[O.g.Nb] = Nn(!0);
              var q = Lr();
              Kr(q) && (a.j[O.g.pd] = "1");
              a.j[O.g.Zi] = Hr();
              Ep(!1)._up === "1" && (a.j[O.g.pj] = "1");
            }
            il = !0;
            a.j[O.g.cb] = void 0;
            a.j[O.g.ub] = void 0;
            var r = W([O.g.N, O.g.O]);
            r &&
              (S(26) && (a.j[O.g.cb] = ds()),
              c && (Sp(b), (a.j[O.g.ub] = Qp[Tp(b.prefix)])));
            a.j[O.g.tb] = void 0;
            a.j[O.g.Za] = void 0;
            if (!a.j[O.g.Wd] && !a.j[O.g.ee] && Zr(d)) {
              var u = Fq(b);
              u.length > 0 && (a.j[O.g.tb] = u.join("."));
            } else if (!a.j[O.g.Bf] && r) {
              var v = Dq(d + "_aw");
              v.length > 0 && (a.j[O.g.Za] = v.join("."));
            }
            S(29) && (a.j[O.g.qj] = Ec());
            a.m.isGtmEvent && (a.m.j[O.g.na] = Ym.j[O.g.na]);
            Ao(a.m) ? (a.j[O.g.Tb] = !1) : (a.j[O.g.Tb] = !0);
            a.metadata.add_tag_timing = !0;
            var t = as();
            t !== void 0 && (a.j[O.g.zd] = t || "error");
            var w = uo();
            w && (a.j[O.g.ic] = w);
            var x = to();
            x && (a.j[O.g.mc] = x);
            a.metadata.speculative = !1;
          }
        } else a.isAborted = !0;
    },
    bs = function (a) {
      var b = {
        prefix: V(a.m, O.g.hb) || V(a.m, O.g.Na),
        domain: V(a.m, O.g.Ra),
        Gb: V(a.m, O.g.Sa),
        flags: V(a.m, O.g.ab),
      };
      a.m.isGtmEvent && (b.path = V(a.m, O.g.wb));
      return b;
    },
    fs = function (a, b) {
      var c, d, e, f, g, k, m, n;
      c = a.Ed;
      d = a.Nd;
      e = a.Sd;
      f = a.qa;
      g = a.m;
      k = a.Pd;
      m = a.fo;
      n = a.Mk;
      cs({ Ed: c, Nd: d, Sd: e, rc: b });
      c &&
        m !== !0 &&
        (n != null ? (n = String(n)) : (n = void 0), Br(b, f, g, k, n));
    },
    cs = function (a) {
      var b, c, d, e;
      b = a.Ed;
      c = a.Nd;
      d = a.Sd;
      e = a.rc;
      b &&
        (Op(c[O.g.Hc], !!c[O.g.X]) && (ar(gs, e), cr(e), $p(e)),
        (S(95) || S(122)) && Nn() !== 2 ? Zq(e) : Xq(e),
        gr(gs, e),
        hr(e));
      c[O.g.X] &&
        (er(gs, c[O.g.X], c[O.g.Pb], !!c[O.g.zb], e.prefix),
        fr(c[O.g.X], c[O.g.Pb], !!c[O.g.zb], e.prefix),
        aq(Tp(e.prefix), c[O.g.X], c[O.g.Pb], !!c[O.g.zb], e),
        aq("FPAU", c[O.g.X], c[O.g.Pb], !!c[O.g.zb], e));
      d && (S(84) ? jr(hs) : jr(is));
      lr(is);
    },
    js = function (a, b, c, d) {
      var e, f, g;
      e = a.Nk;
      f = a.callback;
      g = a.rk;
      if (typeof f === "function")
        if (e === O.g.Za && g === void 0) {
          var k = d(b.prefix, c);
          k.length === 0 ? f(void 0) : k.length === 1 ? f(k[0]) : f(k);
        } else e === O.g.ub ? (U(65), Sp(b, !1), f(Qp[Tp(b.prefix)])) : f(g);
    },
    gs = ["aw", "dc", "gb"],
    is = ["aw", "dc", "gb", "ag"],
    hs = ["aw", "dc", "gb", "ag", "gad_source"];
  function ks(a) {
    var b = V(a.m, O.g.Ob),
      c = V(a.m, O.g.jc);
    b && !c
      ? (a.eventName !== O.g.ba && a.eventName !== O.g.Uc && U(131),
        (a.isAborted = !0))
      : !b && c && (U(132), (a.isAborted = !0));
  }
  function ls(a) {
    var b = W(O.g.N) ? Ki.pscdl : "denied";
    b != null && (a.j[O.g.Ff] = b);
  }
  function ms(a) {
    var b = Nn(!0);
    a.j[O.g.Nb] = b;
  }
  function ns(a) {
    Lo() && (a.j[O.g.Fc] = 1);
  }
  function ds() {
    var a = E.title;
    if (a === void 0 || a === "") return "";
    var b = function (d) {
      try {
        return decodeURIComponent(d), !0;
      } catch (e) {
        return !1;
      }
    };
    a = encodeURIComponent(a);
    for (var c = 256; c > 0 && !b(a.substring(0, c)); ) c--;
    return decodeURIComponent(a.substring(0, c));
  }
  function os(a) {
    ps(a, "ce", V(a.m, O.g.Sa));
  }
  function ps(a, b, c) {
    a.j[O.g.Bd] || (a.j[O.g.Bd] = {});
    a.j[O.g.Bd][b] = c;
  }
  var qs = function (a) {
      var b = a && a[O.g.Rg];
      return b && !!b[O.g.Yi];
    },
    rs = function (a) {
      if (a)
        switch (a._tag_mode) {
          case "CODE":
            return "c";
          case "AUTO":
            return "a";
          case "MANUAL":
            return "m";
          default:
            return "c";
        }
    };
  var ss = function (a, b) {
      var c = a && !W([O.g.N, O.g.O]);
      return b && c ? "0" : b;
    },
    us = function (a) {
      var b = a.rc === void 0 ? {} : a.rc,
        c = Hq(b.prefix);
      sr(c) &&
        Fl(
          function () {
            function d(x) {
              var y = W([O.g.N, O.g.O]),
                A = m && y,
                C = b.prefix || "_gcl",
                D;
              Ki.reported_gclid || (Ki.reported_gclid = {});
              D = Ki.reported_gclid;
              var G =
                (A ? C : "") +
                "." +
                (W(O.g.N) ? 1 : 0) +
                "." +
                (W(O.g.O) ? 1 : 0);
              if (!D[G]) {
                D[G] = !0;
                var J = {},
                  F = function (R, M) {
                    if (M || typeof M === "number") J[R] = M.toString();
                  },
                  T = "https://www.google.com";
                Bo() && (F("gcs", Co()), x && F("gcu", 1));
                F("gcd", Go(k));
                ej() && F("tag_exp", ej());
                if (cl()) {
                  F("rnd", Hr());
                  if ((!p || (q && q !== "aw.ds")) && y) {
                    var N = Dq(C + "_aw");
                    F("gclaw", N.join("."));
                  }
                  F("url", String(B.location).split(/[?#]/)[0]);
                  F("dclid", ss(f, r));
                  y || (T = "https://pagead2.googlesyndication.com");
                }
                Jo() && F("dma_cps", Ho());
                F("dma", Io());
                F("npa", Ao(k) ? 0 : 1);
                Lo() && F("_ng", 1);
                Xn(fo()) && F("tcfd", Ko());
                F("gdpr_consent", to() || "");
                F("gdpr", uo() || "");
                Ep(!1)._up === "1" && F("gtm_up", 1);
                F("gclid", ss(f, p));
                F("gclsrc", q);
                if (
                  !(
                    J.hasOwnProperty("gclid") ||
                    J.hasOwnProperty("dclid") ||
                    J.hasOwnProperty("gclaw")
                  ) &&
                  (F("gbraid", ss(f, u)),
                  !J.hasOwnProperty("gbraid") && cl() && y)
                ) {
                  var Z = Dq(C + "_gb");
                  Z.length > 0 && F("gclgb", Z.join("."));
                }
                F(
                  "gtm",
                  Oo({ qa: k.eventMetadata.source_canonical_id, hg: !g })
                );
                m &&
                  W(O.g.N) &&
                  (Sp(b || {}), A && F("auid", Qp[Tp(b.prefix)] || ""));
                ts || (a.ik && F("did", a.ik));
                a.Qh && F("gdid", a.Qh);
                a.Nh && F("edid", a.Nh);
                a.Sh !== void 0 && F("frm", a.Sh);
                S(21) && F("apve", "0");
                var ba = Object.keys(J).map(function (R) {
                    return R + "=" + encodeURIComponent(J[R]);
                  }),
                  fa = T + "/pagead/landing?" + ba.join("&");
                xc(fa);
              }
            }
            var e = !!a.Jh,
              f = !!a.Pd,
              g = a.targetId,
              k = a.m,
              m = a.qg === void 0 ? !0 : a.qg,
              n = Wq(),
              p = n.gclid || "",
              q = n.gclsrc,
              r = n.dclid || "",
              u = n.wbraid || "",
              v = !e && ((!p || (q && q !== "aw.ds") ? !1 : !0) || u),
              t = cl();
            if (v || t)
              if (t) {
                var w = [O.g.N, O.g.O, O.g.wa];
                d();
                (function () {
                  W(w) ||
                    El(function (x) {
                      d(!0, x.consentEventId, x.consentPriorityId);
                    }, w);
                })();
              } else d();
          },
          [O.g.N, O.g.O, O.g.wa]
        );
    },
    ts = !1;
  function vs(a, b, c, d) {
    var e = nc(),
      f;
    if (e === 1)
      a: {
        var g = Wi;
        g = g.toLowerCase();
        for (
          var k = "https://" + g,
            m = "http://" + g,
            n = 1,
            p = E.getElementsByTagName("script"),
            q = 0;
          q < p.length && q < 100;
          q++
        ) {
          var r = p[q].src;
          if (r) {
            r = r.toLowerCase();
            if (r.indexOf(m) === 0) {
              f = 3;
              break a;
            }
            n === 1 && r.indexOf(k) === 0 && (n = 2);
          }
        }
        f = n;
      }
    else f = e;
    return (f === 2 || d || "http:" !== B.location.protocol ? a : b) + c;
  }
  function ws(a) {
    if (a !== void 0 && a !== null)
      return a === void 0 || a === null
        ? ""
        : typeof a === "object"
        ? a.toString()
        : String(a);
  }
  function xs(a) {
    return typeof a === "number" ? a : ws(a);
  }
  var Cs = function (a, b) {
      if (a)
        if (Mo()) {
        } else if ((a = z(a) ? Wl(sk(a)) : Wl(sk(a.id)))) {
          var c = void 0,
            d = !1,
            e = V(b, O.g.tj);
          if (e && Array.isArray(e)) {
            c = [];
            for (var f = 0; f < e.length; f++) {
              var g = Wl(e[f]);
              g &&
                (c.push(g),
                (a.id === g.id ||
                  (a.id === a.destinationId &&
                    a.destinationId === g.destinationId)) &&
                  (d = !0));
            }
          }
          if (!c || d) {
            var k = V(b, O.g.lh),
              m;
            if (k) {
              Array.isArray(k) ? (m = k) : (m = [k]);
              var n = V(b, O.g.jh),
                p = V(b, O.g.kh),
                q = V(b, O.g.mh),
                r = ws(V(b, O.g.sj)),
                u = n || p,
                v = 1;
              a.prefix !== "UA" || c || (v = 5);
              for (var t = 0; t < m.length; t++)
                if (t < v)
                  if (c) ys(c, m[t], r, b, { Wb: u, options: q });
                  else if (a.prefix === "AW" && a.ids[Zl[2]])
                    S(134)
                      ? ys([a], m[t], r || "US", b, { Wb: u, options: q })
                      : zs(a.ids[Zl[1]], a.ids[Zl[2]], m[t], b, {
                          Wb: u,
                          options: q,
                        });
                  else if (a.prefix === "UA")
                    if (S(134)) ys([a], m[t], r || "US", b, { Wb: u });
                    else {
                      var w = a.destinationId,
                        x = m[t],
                        y = { Wb: u };
                      U(23);
                      if (x) {
                        y = y || {};
                        var A = As(Bs, y, w),
                          C = {};
                        y.Wb !== void 0 ? (C.receiver = y.Wb) : (C.replace = x);
                        C.ga_wpid = w;
                        C.destination = x;
                        A(2, mb(), C);
                      }
                    }
            }
          }
        }
    },
    ys = function (a, b, c, d, e) {
      U(21);
      if (b && c) {
        e = e || {};
        for (
          var f = {
              countryNameCode: c,
              destinationNumber: b,
              retrievalTime: mb(),
            },
            g = 0;
          g < a.length;
          g++
        ) {
          var k = a[g];
          Ds[k.id] ||
            (k && k.prefix === "AW" && !f.adData && k.ids.length >= 2
              ? ((f.adData = { ak: k.ids[Zl[1]], cl: k.ids[Zl[2]] }),
                Es(f.adData, d),
                (Ds[k.id] = !0))
              : k &&
                k.prefix === "UA" &&
                !f.gaData &&
                ((f.gaData = { gaWpid: k.destinationId }), (Ds[k.id] = !0)));
        }
        (f.gaData || f.adData) && As(Fs, e)(e.Wb, f, e.options);
      }
    },
    zs = function (a, b, c, d, e) {
      U(22);
      if (c) {
        e = e || {};
        var f = As(Gs, e, a),
          g = { ak: a, cl: b };
        e.Wb === void 0 && (g.autoreplace = c);
        Es(g, d);
        f(2, e.Wb, g, c, 0, mb(), e.options);
      }
    },
    Es = function (a, b) {
      S(5) &&
        ((a.dma = Io()),
        Jo() && (a.dmaCps = Ho()),
        Ao(b) ? (a.npa = "0") : (a.npa = "1"));
    },
    As = function (a, b, c) {
      if (B[a.functionName]) return b.ei && H(b.ei), B[a.functionName];
      var d = Hs();
      B[a.functionName] = d;
      if (a.additionalQueues)
        for (var e = 0; e < a.additionalQueues.length; e++)
          B[a.additionalQueues[e]] = B[a.additionalQueues[e]] || Hs();
      a.idKey && B[a.idKey] === void 0 && (B[a.idKey] = c);
      mc(vs("https://", "http://", a.scriptUrl), b.ei, b.Vm);
      return d;
    },
    Hs = function () {
      function a() {
        a.q = a.q || [];
        a.q.push(arguments);
      }
      return a;
    },
    Gs = {
      functionName: "_googWcmImpl",
      idKey: "_googWcmAk",
      scriptUrl: "www.gstatic.com/wcm/loader.js",
    },
    Bs = {
      functionName: "_gaPhoneImpl",
      idKey: "ga_wpid",
      scriptUrl: "www.gstatic.com/gaphone/loader.js",
    },
    Is = { Rk: "9", Gl: "5" },
    Fs = {
      functionName: "_googCallTrackingImpl",
      additionalQueues: [Bs.functionName, Gs.functionName],
      scriptUrl:
        "www.gstatic.com/call-tracking/call-tracking_" +
        (Is.Rk || Is.Gl) +
        ".js",
    },
    Ds = {};
  function Js(a) {
    return {
      getDestinationId: function () {
        return a.target.destinationId;
      },
      getEventName: function () {
        return a.eventName;
      },
      setEventName: function (b) {
        a.eventName = b;
      },
      getHitData: function (b) {
        return a.j[b];
      },
      setHitData: function (b, c) {
        a.j[b] = c;
      },
      setHitDataIfNotDefined: function (b, c) {
        a.j[b] === void 0 && (a.j[b] = c);
      },
      copyToHitData: function (b, c) {
        a.copyToHitData(b, c);
      },
      getMetadata: function (b) {
        return a.metadata[b];
      },
      setMetadata: function (b, c) {
        a.metadata[b] = c;
      },
      isAborted: function () {
        return a.isAborted;
      },
      abort: function () {
        a.isAborted = !0;
      },
      getFromEventContext: function (b) {
        return V(a.m, b);
      },
      Ub: function () {
        return a;
      },
      getHitKeys: function () {
        return Object.keys(a.j);
      },
    };
  }
  var Ls = function (a) {
      var b = Ks[a.target.destinationId];
      if (!a.isAborted && b)
        for (var c = Js(a), d = 0; d < b.length; ++d) {
          try {
            b[d](c);
          } catch (e) {
            a.isAborted = !0;
          }
          if (a.isAborted) break;
        }
    },
    Ms = function (a, b) {
      var c = Ks[a];
      c || (c = Ks[a] = []);
      c.push(b);
    },
    Ks = {};
  var Os = function (a) {
      if (W(Ns)) {
        a = a || {};
        Sp(a, !1);
        var b = Rp[Tp(Hq(a.prefix))];
        if (b && !(nb() - b.Zh * 1e3 > 18e5)) {
          var c = b.id,
            d = c.split(".");
          if (d.length === 2 && !(nb() - (Number(d[1]) || 0) * 1e3 > 864e5))
            return c;
        }
      }
    },
    Ns = O.g.N;
  var Ps = function () {
    var a = (cc && cc.userAgent) || "";
    if (
      a.indexOf("Safari") < 0 ||
      /Chrome|Coast|Opera|Edg|Silk|Android/.test(a)
    )
      return !1;
    var b = (/Version\/([\d\.]+)/.exec(a) || [])[1] || "";
    if (b === "") return !1;
    for (var c = ["14", "1", "1"], d = b.split("."), e = 0; e < d.length; e++) {
      if (c[e] === void 0) return !0;
      if (d[e] !== c[e]) return Number(d[e]) > Number(c[e]);
    }
    return d.length >= c.length;
  };
  function Qs(a) {
    var b,
      c = B,
      d = [];
    try {
      c.navigation && c.navigation.entries && (d = c.navigation.entries());
    } catch (k) {}
    b = d;
    for (var e = b.length - 1; e >= 0; e--) {
      var f = b[e],
        g = f.url && f.url.match("[?&#]" + a + "=([^&#]+)");
      if (g && g.length === 2) return g[1];
    }
  }
  var Rs,
    Ss = !1;
  function Ts() {
    Ss = !0;
    Rs = Rs || {};
  }
  function Us(a) {
    Ss || Ts();
    return Rs[a];
  }
  function Vs() {
    var a = B.screen;
    return { width: a ? a.width : 0, height: a ? a.height : 0 };
  }
  function Ws(a) {
    if (E.hidden) return !0;
    var b = a.getBoundingClientRect();
    if (b.top === b.bottom || b.left === b.right || !B.getComputedStyle)
      return !0;
    var c = B.getComputedStyle(a, null);
    if (c.visibility === "hidden") return !0;
    for (var d = a, e = c; d; ) {
      if (e.display === "none") return !0;
      var f = e.opacity,
        g = e.filter;
      if (g) {
        var k = g.indexOf("opacity(");
        k >= 0 &&
          ((g = g.substring(k + 8, g.indexOf(")", k))),
          g.charAt(g.length - 1) === "%" && (g = g.substring(0, g.length - 1)),
          (f = String(Math.min(Number(g), Number(f)))));
      }
      if (f !== void 0 && Number(f) <= 0) return !0;
      (d = d.parentElement) && (e = B.getComputedStyle(d, null));
    }
    return !1;
  }
  var Ys = function (a) {
      var b = Xs(),
        c = b.height,
        d = b.width,
        e = a.getBoundingClientRect(),
        f = e.bottom - e.top,
        g = e.right - e.left;
      return f && g
        ? (1 -
            Math.min(
              (Math.max(0 - e.left, 0) + Math.max(e.right - d, 0)) / g,
              1
            )) *
            (1 -
              Math.min(
                (Math.max(0 - e.top, 0) + Math.max(e.bottom - c, 0)) / f,
                1
              ))
        : 0;
    },
    Xs = function () {
      var a = E.body,
        b = E.documentElement || (a && a.parentElement),
        c,
        d;
      if (E.compatMode && E.compatMode !== "BackCompat")
        (c = b ? b.clientHeight : 0), (d = b ? b.clientWidth : 0);
      else {
        var e = function (f, g) {
          return f && g ? Math.min(f, g) : Math.max(f, g);
        };
        c = e(b ? b.clientHeight : 0, a ? a.clientHeight : 0);
        d = e(b ? b.clientWidth : 0, a ? a.clientWidth : 0);
      }
      return { width: d, height: c };
    };
  var at = function (a) {
      if (Zs) {
        if (a >= 0 && a < $s.length && $s[a]) {
          var b;
          (b = $s[a]) == null || b.disconnect();
          $s[a] = void 0;
        }
      } else B.clearInterval(a);
    },
    dt = function (a, b, c) {
      for (var d = 0; d < c.length; d++)
        c[d] > 1 ? (c[d] = 1) : c[d] < 0 && (c[d] = 0);
      if (Zs) {
        var e = !1;
        H(function () {
          e || bt(a, b, c)();
        });
        return ct(
          function (f) {
            e = !0;
            for (var g = { af: 0 }; g.af < f.length; g = { af: g.af }, g.af++)
              H(
                (function (k) {
                  return function () {
                    a(f[k.af]);
                  };
                })(g)
              );
          },
          b,
          c
        );
      }
      return B.setInterval(bt(a, b, c), 1e3);
    },
    bt = function (a, b, c) {
      function d(k, m) {
        var n = { top: 0, bottom: 0, right: 0, left: 0, width: 0, height: 0 },
          p = {
            boundingClientRect: k.getBoundingClientRect(),
            intersectionRatio: m,
            intersectionRect: n,
            isIntersecting: m > 0,
            rootBounds: n,
            target: k,
            time: nb(),
          };
        H(function () {
          a(p);
        });
      }
      for (var e = [], f = [], g = 0; g < b.length; g++) e.push(0), f.push(-1);
      c.sort(function (k, m) {
        return k - m;
      });
      return function () {
        for (var k = 0; k < b.length; k++) {
          var m = Ys(b[k]);
          if (m > e[k])
            for (; f[k] < c.length - 1 && m >= c[f[k] + 1]; )
              d(b[k], m), f[k]++;
          else if (m < e[k])
            for (; f[k] >= 0 && m <= c[f[k]]; ) d(b[k], m), f[k]--;
          e[k] = m;
        }
      };
    },
    ct = function (a, b, c) {
      for (
        var d = new B.IntersectionObserver(a, { threshold: c }), e = 0;
        e < b.length;
        e++
      )
        d.observe(b[e]);
      for (var f = 0; f < $s.length; f++) if (!$s[f]) return ($s[f] = d), f;
      return $s.push(d) - 1;
    },
    $s = [],
    Zs = !(!B.IntersectionObserver || !B.IntersectionObserverEntry);
  var ft = function (a) {
      return (
        a.tagName + ":" + a.isVisible + ":" + a.Z.length + ":" + et.test(a.Z)
      );
    },
    tt = function (a) {
      a = a || { Kd: !0, Ld: !0, wg: void 0 };
      a.Cb = a.Cb || { email: !0, phone: !1, address: !1 };
      var b = gt(a),
        c = ht[b];
      if (c && nb() - c.timestamp < 200) return c.result;
      var d = it(),
        e = d.status,
        f = [],
        g,
        k,
        m = [];
      if (!S(31)) {
        if (a.Cb && a.Cb.email) {
          var n = jt(d.elements);
          f = kt(n, a && a.Qe);
          g = lt(f);
          n.length > 10 && (e = "3");
        }
        !a.wg && g && (f = [g]);
        for (var p = 0; p < f.length; p++) m.push(mt(f[p], !!a.Kd, !!a.Ld));
        m = m.slice(0, 10);
      } else if (a.Cb) {
      }
      g && (k = mt(g, !!a.Kd, !!a.Ld));
      var D = { elements: m, ii: k, status: e };
      ht[b] = { timestamp: nb(), result: D };
      return D;
    },
    st = function (a, b, c) {
      var d = a.element,
        e = { Z: a.Z, type: a.sa, tagName: d.tagName };
      b && (e.querySelector = ut(d));
      c && (e.isVisible = !Ws(d));
      return e;
    },
    mt = function (a, b, c) {
      return st({ element: a.element, Z: a.Z, sa: rt.vc }, b, c);
    },
    gt = function (a) {
      var b = !(a == null || !a.Kd) + "." + !(a == null || !a.Ld);
      a && a.Qe && a.Qe.length && (b += "." + a.Qe.join("."));
      a &&
        a.Cb &&
        (b += "." + a.Cb.email + "." + a.Cb.phone + "." + a.Cb.address);
      return b;
    },
    lt = function (a) {
      if (a.length !== 0) {
        var b;
        b = vt(a, function (c) {
          return !wt.test(c.Z);
        });
        b = vt(b, function (c) {
          return c.element.tagName.toUpperCase() === "INPUT";
        });
        b = vt(b, function (c) {
          return !Ws(c.element);
        });
        return b[0];
      }
    },
    kt = function (a, b) {
      if (!b || b.length === 0) return a;
      for (var c = [], d = 0; d < a.length; d++) {
        for (var e = !0, f = 0; f < b.length; f++) {
          var g = b[f];
          if (g && Oh(a[d].element, g)) {
            e = !1;
            break;
          }
        }
        e && c.push(a[d]);
      }
      return c;
    },
    vt = function (a, b) {
      if (a.length <= 1) return a;
      var c = a.filter(b);
      return c.length === 0 ? a : c;
    },
    ut = function (a) {
      var b;
      if (a === E.body) b = "body";
      else {
        var c;
        if (a.id) c = "#" + a.id;
        else {
          var d;
          if (a.parentElement) {
            var e;
            a: {
              var f = a.parentElement;
              if (f) {
                for (var g = 0; g < f.childElementCount; g++)
                  if (f.children[g] === a) {
                    e = g + 1;
                    break a;
                  }
                e = -1;
              } else e = 1;
            }
            d = ut(a.parentElement) + ">:nth-child(" + e.toString() + ")";
          } else d = "";
          c = d;
        }
        b = c;
      }
      return b;
    },
    jt = function (a) {
      for (var b = [], c = 0; c < a.length; c++) {
        var d = a[c],
          e = d.textContent;
        d.tagName.toUpperCase() === "INPUT" && d.value && (e = d.value);
        if (e) {
          var f = e.match(xt);
          if (f) {
            var g = f[0],
              k;
            if (B.location) {
              var m = Bj(B.location, "host", !0);
              k = g.toLowerCase().indexOf(m) >= 0;
            } else k = !1;
            k || b.push({ element: d, Z: g });
          }
        }
      }
      return b;
    },
    it = function () {
      var a = [],
        b = E.body;
      if (!b) return { elements: a, status: "4" };
      for (
        var c = b.querySelectorAll("*"), d = 0;
        d < c.length && d < 1e4;
        d++
      ) {
        var e = c[d];
        if (
          !(zt.indexOf(e.tagName.toUpperCase()) >= 0) &&
          e.children instanceof HTMLCollection
        ) {
          for (var f = !1, g = 0; g < e.childElementCount && g < 1e4; g++)
            if (!(At.indexOf(e.children[g].tagName.toUpperCase()) >= 0)) {
              f = !0;
              break;
            }
          (!f || (S(31) && Bt.indexOf(e.tagName) !== -1)) && a.push(e);
        }
      }
      return { elements: a, status: c.length > 1e4 ? "2" : "1" };
    },
    Ct = !1;
  var xt = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i,
    et = /@(gmail|googlemail)\./i,
    wt = /support|noreply/i,
    zt = "SCRIPT STYLE IMG SVG PATH BR NOSCRIPT TEXTAREA".split(" "),
    At = ["BR"],
    rt = { vc: "1", Ee: "2", ze: "3", Be: "4", Ag: "5", yh: "6", gg: "7" },
    ht = {},
    Bt = ["INPUT", "SELECT"];
  var If;
  var Xt = Number("") || 5,
    Yt = Number("") || 50,
    Zt = db();
  var au = function (a, b) {
      a &&
        ($t("sid", a.targetId, b),
        $t("cc", a.clientCount, b),
        $t("tl", a.totalLifeMs, b),
        $t("hc", a.heartbeatCount, b),
        $t("cl", a.clientLifeMs, b));
    },
    $t = function (a, b, c) {
      b != null && c.push(a + "=" + b);
    },
    bu = function () {
      var a = E.referrer;
      if (a) {
        var b;
        return zj(Fj(a), "host") ===
          ((b = B.location) == null ? void 0 : b.host)
          ? 1
          : 2;
      }
      return 0;
    },
    cu = function (a) {
      this.P = a;
      this.H = 0;
    };
  cu.prototype.C = function (a, b, c, d) {
    var e = bu(),
      f,
      g = [];
    f =
      B === B.top && e !== 0 && b
        ? (b == null ? void 0 : b.clientCount) > 1
          ? e === 2
            ? 1
            : 2
          : e === 2
          ? 0
          : 3
        : 4;
    a && $t("si", a.cf, g);
    $t("m", 0, g);
    $t("iss", f, g);
    $t("if", c, g);
    au(b, g);
    d && $t("fm", encodeURIComponent(d.substring(0, Yt)), g);
    this.K(g);
  };
  cu.prototype.j = function (a, b, c, d, e) {
    var f = [];
    $t("m", 1, f);
    $t("s", a, f);
    $t("po", bu(), f);
    b && ($t("st", b.state, f), $t("si", b.cf, f), $t("sm", b.uf, f));
    au(c, f);
    $t("c", d, f);
    e && $t("fm", encodeURIComponent(e.substring(0, Yt)), f);
    this.K(f);
  };
  cu.prototype.K = function (a) {
    a = a === void 0 ? [] : a;
    !Tj ||
      this.H >= Xt ||
      ($t("pid", Zt, a),
      $t("bc", ++this.H, a),
      a.unshift("ctid=" + Mf.ctid + "&t=s"),
      this.P("https://www.googletagmanager.com/a?" + a.join("&")));
  };
  var du = {
    Jl: Number("") || 500,
    wl: Number("") || 5e3,
    Lj: Number("20") || 10,
    Uk: Number("") || 5e3,
  };
  function eu(a) {
    return (a.performance && a.performance.now()) || Date.now();
  }
  var fu = function (a, b) {
    var c;
    var d = function (e, f, g) {
      g = g === void 0 ? {} : g;
      this.Kl = e;
      this.j = f;
      this.H = g;
      this.aa = this.Ua = this.heartbeatCount = this.Il = 0;
      this.Mj = !1;
      this.C = {};
      this.id = String(Math.floor(Number.MAX_SAFE_INTEGER * Math.random()));
      this.state = 0;
      this.cf = eu(this.j);
      this.uf = eu(this.j);
      this.P = 10;
    };
    d.prototype.init = function () {
      this.K(1);
      this.Ic();
    };
    d.prototype.getState = function () {
      return {
        state: this.state,
        cf: Math.round(eu(this.j) - this.cf),
        uf: Math.round(eu(this.j) - this.uf),
      };
    };
    d.prototype.K = function (e) {
      this.state !== e && ((this.state = e), (this.uf = eu(this.j)));
    };
    d.prototype.Pj = function () {
      return String(this.Il++);
    };
    d.prototype.Ic = function () {
      var e = this;
      this.heartbeatCount++;
      this.Ae(
        {
          type: 0,
          clientId: this.id,
          requestId: this.Pj(),
          maxDelay: this.Nj(),
        },
        function (f) {
          if (f.type === 0) {
            var g;
            if (((g = f.failure) == null ? void 0 : g.failureType) != null)
              if (
                (f.stats && (e.stats = f.stats),
                e.aa++,
                f.isDead || e.aa > du.Lj)
              ) {
                var k = f.isDead && f.failure.failureType;
                e.P = k || 10;
                e.K(4);
                e.Hl();
                var m, n;
                (n = (m = e.H).Tm) == null ||
                  n.call(m, { failureType: k, data: f.failure.data });
              } else e.K(3), e.Rj();
            else {
              if (e.heartbeatCount > f.stats.heartbeatCount + du.Lj) {
                e.heartbeatCount = f.stats.heartbeatCount;
                var p, q;
                (q = (p = e.H).onFailure) == null ||
                  q.call(p, { failureType: 13 });
              }
              e.stats = f.stats;
              var r = e.state;
              e.K(2);
              if (r !== 2)
                if (e.Mj) {
                  var u, v;
                  (v = (u = e.H).no) == null || v.call(u);
                } else {
                  e.Mj = !0;
                  var t, w;
                  (w = (t = e.H).Um) == null || w.call(t);
                }
              e.aa = 0;
              e.Ll();
              e.Rj();
            }
          }
        }
      );
    };
    d.prototype.Nj = function () {
      return this.state === 2 ? du.wl : du.Jl;
    };
    d.prototype.Rj = function () {
      var e = this;
      this.j.setTimeout(function () {
        e.Ic();
      }, Math.max(0, this.Nj() - (eu(this.j) - this.Ua)));
    };
    d.prototype.Ol = function (e, f, g) {
      var k = this;
      this.Ae(
        { type: 1, clientId: this.id, requestId: this.Pj(), command: e },
        function (m) {
          if (m.type === 1)
            if (m.result) f(m.result);
            else {
              var n,
                p,
                q,
                r = {
                  failureType:
                    (q = (n = m.failure) == null ? void 0 : n.failureType) !=
                    null
                      ? q
                      : 12,
                  data: (p = m.failure) == null ? void 0 : p.data,
                },
                u,
                v;
              (v = (u = k.H).onFailure) == null || v.call(u, r);
              g(r);
            }
        }
      );
    };
    d.prototype.Ae = function (e, f) {
      var g = this;
      if (this.state === 4) (e.failure = { failureType: this.P }), f(e);
      else {
        var k = this.state !== 2 && e.type !== 0,
          m = e.requestId,
          n,
          p = this.j.setTimeout(
            function () {
              var r = g.C[m];
              r && g.Kj(r, 7);
            },
            (n = e.maxDelay) != null ? n : du.Uk
          ),
          q = { request: e, Ck: f, yk: k, Qm: p };
        this.C[m] = q;
        k || this.sendRequest(q);
      }
    };
    d.prototype.sendRequest = function (e) {
      this.Ua = eu(this.j);
      e.yk = !1;
      this.Kl(e.request);
    };
    d.prototype.Ll = function () {
      for (
        var e = l(Object.keys(this.C)), f = e.next();
        !f.done;
        f = e.next()
      ) {
        var g = this.C[f.value];
        g.yk && this.sendRequest(g);
      }
    };
    d.prototype.Hl = function () {
      for (var e = l(Object.keys(this.C)), f = e.next(); !f.done; f = e.next())
        this.Kj(this.C[f.value], this.P);
    };
    d.prototype.Kj = function (e, f) {
      this.fg(e);
      var g = e.request;
      g.failure = { failureType: f };
      e.Ck(g);
    };
    d.prototype.fg = function (e) {
      delete this.C[e.request.requestId];
      this.j.clearTimeout(e.Qm);
    };
    d.prototype.xm = function (e) {
      this.Ua = eu(this.j);
      var f = this.C[e.requestId];
      if (f) this.fg(f), f.Ck(e);
      else {
        var g, k;
        (k = (g = this.H).onFailure) == null || k.call(g, { failureType: 14 });
      }
    };
    c = new d(a, B, b);
    return c;
  };
  var gu;
  var hu = function () {
      gu ||
        (gu = new cu(function (a) {
          return void qc(a);
        }));
      return gu;
    },
    iu = function (a) {
      var b = "&1p=1";
      if (!S(112)) return b;
      var c = a.substring(0, a.indexOf("/_/service_worker"));
      return (b += c ? "&path=" + encodeURIComponent(c) : "");
    },
    ku = function (a) {
      a = ju(a);
      var b;
      try {
        b = new URL(a);
      } catch (c) {
        return null;
      }
      return b.protocol !== "https:" ? null : b;
    },
    lu = function (a) {
      var b = Pl(Kl.Vj);
      return b && b[a];
    },
    ju = function (a) {
      var b = dj.K;
      if (!a)
        return (
          "https://www.googletagmanager.com/static/service_worker/" + b + "/"
        );
      if (!S(112)) return a;
      a.charAt(a.length - 1) !== "/" && (a += "/");
      return a + b;
    },
    mu = function (a, b, c, d, e) {
      var f = this;
      this.C = d;
      this.P = this.K = !1;
      this.aa = null;
      this.initTime = c;
      this.j = 15;
      this.H = this.Vl(a);
      B.setTimeout(function () {
        f.initialize();
      }, 1e3);
      H(function () {
        f.Gm(a, b, e);
      });
    };
  h = mu.prototype;
  h.delegate = function (a, b, c) {
    this.getState() !== 2
      ? (this.C.j(
          this.j,
          {
            state: this.getState(),
            cf: this.initTime,
            uf: Math.round(nb()) - this.initTime,
          },
          void 0,
          a.commandType
        ),
        c({ failureType: this.j }))
      : this.H.Ol(a, b, c);
  };
  h.getState = function () {
    return this.H.getState().state;
  };
  h.Gm = function (a, b, c) {
    var d = B.location.origin,
      e = this,
      f = oc();
    try {
      var g = f.contentDocument.createElement("iframe"),
        k = a.pathname,
        m = k[k.length - 1] === "/" ? a.toString() : a.toString() + "/",
        n = b ? iu(k) : "",
        p;
      S(114) && (p = { sandbox: "allow-same-origin allow-scripts" });
      oc(
        m +
          "sw_iframe.html?origin=" +
          encodeURIComponent(d) +
          n +
          (c ? "&e=1" : ""),
        void 0,
        p,
        void 0,
        g
      );
      var q = function () {
        f.contentDocument.body.appendChild(g);
        g.addEventListener("load", function () {
          e.aa = g.contentWindow;
          f.contentWindow.addEventListener("message", function (r) {
            r.origin === a.origin && e.H.xm(r.data);
          });
          e.initialize();
        });
      };
      f.contentDocument.readyState === "complete"
        ? q()
        : f.contentWindow.addEventListener("load", function () {
            q();
          });
    } catch (r) {
      f.parentElement.removeChild(f),
        (this.j = 11),
        this.C.C(void 0, void 0, this.j, r.toString());
    }
  };
  h.Vl = function (a) {
    var b = this,
      c = fu(
        function (d) {
          var e;
          (e = b.aa) == null || e.postMessage(d, a.origin);
        },
        {
          Um: function () {
            b.K = !0;
            b.C.C(c.getState(), c.stats);
          },
          Tm: function (d) {
            b.K
              ? ((b.j = (d == null ? void 0 : d.failureType) || 10),
                b.C.j(
                  b.j,
                  c.getState(),
                  c.stats,
                  void 0,
                  d == null ? void 0 : d.data
                ))
              : ((b.j = (d == null ? void 0 : d.failureType) || 4),
                b.C.C(c.getState(), c.stats, b.j, d == null ? void 0 : d.data));
          },
          onFailure: function (d) {
            b.j = d.failureType;
            b.C.j(b.j, c.getState(), c.stats, d.command, d.data);
          },
        }
      );
    return c;
  };
  h.initialize = function () {
    this.P || this.H.init();
    this.P = !0;
  };
  function nu() {
    var a = Lf(If.j, "", function () {
      return {};
    });
    try {
      return a("internal_sw_allowed"), !0;
    } catch (b) {
      return !1;
    }
  }
  function ou(a, b, c) {
    c = c === void 0 ? !1 : c;
    var d = B.location.origin;
    if (!d || !nu()) return;
    gj() && ((a = "" + d + fj() + "/_"), S(112) && (a += "/service_worker"));
    var e = ku(a);
    if (e === null || lu(e.origin)) return;
    if (!dc()) {
      hu().C(void 0, void 0, 6);
      return;
    }
    var f = new mu(e, !!a, b || Math.round(nb()), hu(), c),
      g;
    a: {
      var k = Kl.Vj,
        m = {},
        n = Nl(k);
      if (!n) {
        n = Nl(k, !0);
        if (!n) {
          g = void 0;
          break a;
        }
        n.set(m);
      }
      g = n.get();
    }
    g[e.origin] = f;
  }
  var pu = function (a, b, c, d) {
    var e;
    if ((e = lu(a)) == null || !e.delegate) {
      var f = dc() ? 16 : 6;
      hu().j(f, void 0, void 0, b.commandType);
      d({ failureType: f });
      return;
    }
    lu(a).delegate(b, c, d);
  };
  function qu(a, b, c, d, e) {
    var f = ku();
    if (f === null) {
      d(dc() ? 16 : 6);
      return;
    }
    var g,
      k = (g = lu(f.origin)) == null ? void 0 : g.initTime,
      m = Math.round(nb()),
      n = {
        commandType: 0,
        params: {
          url: a,
          method: 0,
          templates: b,
          body: "",
          processResponse: !1,
          sinceInit: k ? m - k : void 0,
        },
      };
    e && (n.params.encryptionKeyString = e);
    pu(
      f.origin,
      n,
      function (p) {
        c(p);
      },
      function (p) {
        d(p.failureType);
      }
    );
  }
  function ru(a, b, c, d) {
    var e = ku(a);
    if (e === null) {
      d("_is_sw=f" + (dc() ? 16 : 6) + "te");
      return;
    }
    var f = b ? 1 : 0,
      g = Math.round(nb()),
      k,
      m = (k = lu(e.origin)) == null ? void 0 : k.initTime,
      n = m ? g - m : void 0;
    pu(
      e.origin,
      {
        commandType: 0,
        params: {
          url: a,
          method: f,
          templates: c,
          body: b || "",
          processResponse: !0,
          sinceInit: n,
          attributionReporting: !0,
        },
      },
      function () {},
      function (p) {
        var q = "_is_sw=f" + p.failureType,
          r,
          u = (r = lu(e.origin)) == null ? void 0 : r.getState();
        u !== void 0 && (q += "s" + u);
        d(n ? q + ("t" + n) : q + "te");
      }
    );
  }
  var su = function (a) {
    for (var b = [], c = 0, d = 0; d < a.length; d++) {
      var e = a.charCodeAt(d);
      e < 128
        ? (b[c++] = e)
        : (e < 2048
            ? (b[c++] = (e >> 6) | 192)
            : ((e & 64512) == 55296 &&
              d + 1 < a.length &&
              (a.charCodeAt(d + 1) & 64512) == 56320
                ? ((e =
                    65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023)),
                  (b[c++] = (e >> 18) | 240),
                  (b[c++] = ((e >> 12) & 63) | 128))
                : (b[c++] = (e >> 12) | 224),
              (b[c++] = ((e >> 6) & 63) | 128)),
          (b[c++] = (e & 63) | 128));
    }
    return b;
  };
  An();
  Jn() || xn("iPod");
  xn("iPad");
  !xn("Android") || Bn() || An() || zn() || xn("Silk");
  Bn();
  !xn("Safari") ||
    Bn() ||
    (yn() ? 0 : xn("Coast")) ||
    zn() ||
    (yn() ? 0 : xn("Edge")) ||
    (yn() ? wn("Microsoft Edge") : xn("Edg/")) ||
    (yn() ? wn("Opera") : xn("OPR")) ||
    An() ||
    xn("Silk") ||
    xn("Android") ||
    Kn();
  var tu = {},
    uu = null,
    vu = function (a) {
      for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        e > 255 && ((b[c++] = e & 255), (e >>= 8));
        b[c++] = e;
      }
      var f = 4;
      f === void 0 && (f = 0);
      if (!uu) {
        uu = {};
        for (
          var g =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
                ""
              ),
            k = ["+/=", "+/", "-_=", "-_.", "-_"],
            m = 0;
          m < 5;
          m++
        ) {
          var n = g.concat(k[m].split(""));
          tu[m] = n;
          for (var p = 0; p < n.length; p++) {
            var q = n[p];
            uu[q] === void 0 && (uu[q] = p);
          }
        }
      }
      for (
        var r = tu[f],
          u = Array(Math.floor(b.length / 3)),
          v = r[64] || "",
          t = 0,
          w = 0;
        t < b.length - 2;
        t += 3
      ) {
        var x = b[t],
          y = b[t + 1],
          A = b[t + 2],
          C = r[x >> 2],
          D = r[((x & 3) << 4) | (y >> 4)],
          G = r[((y & 15) << 2) | (A >> 6)],
          J = r[A & 63];
        u[w++] = "" + C + D + G + J;
      }
      var F = 0,
        T = v;
      switch (b.length - t) {
        case 2:
          (F = b[t + 1]), (T = r[(F & 15) << 2] || v);
        case 1:
          var N = b[t];
          u[w] = "" + r[N >> 2] + r[((N & 3) << 4) | (F >> 4)] + T + v;
      }
      return u.join("");
    };
  var wu =
    "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(
      " "
    );
  function xu(a) {
    var b;
    return (b = a.google_tag_data) != null ? b : (a.google_tag_data = {});
  }
  function yu() {
    var a = B.google_tag_data,
      b;
    if (a != null && a.uach) {
      var c = a.uach,
        d = Object.assign({}, c);
      c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
      b = d;
    } else b = null;
    return b;
  }
  function zu() {
    var a, b;
    return (b = (a = B.google_tag_data) == null ? void 0 : a.uach_promise) !=
      null
      ? b
      : null;
  }
  function Au(a) {
    var b, c;
    return (
      typeof ((b = a.navigator) == null
        ? void 0
        : (c = b.userAgentData) == null
        ? void 0
        : c.getHighEntropyValues) === "function"
    );
  }
  function Bu() {
    var a = B;
    if (!Au(a)) return null;
    var b = xu(a);
    if (b.uach_promise) return b.uach_promise;
    var c = a.navigator.userAgentData
      .getHighEntropyValues(wu)
      .then(function (d) {
        b.uach != null || (b.uach = d);
        return d;
      });
    return (b.uach_promise = c);
  }
  var Du = function (a, b) {
      if (a) {
        var c = Cu(a);
        Object.assign(b.j, c);
      }
    },
    Cu = function (a) {
      var b = {};
      b[O.g.Vf] = a.architecture;
      b[O.g.Wf] = a.bitness;
      a.fullVersionList &&
        (b[O.g.Xf] = a.fullVersionList
          .map(function (c) {
            return (
              encodeURIComponent(c.brand || "") +
              ";" +
              encodeURIComponent(c.version || "")
            );
          })
          .join("|"));
      b[O.g.Yf] = a.mobile ? "1" : "0";
      b[O.g.Zf] = a.model;
      b[O.g.cg] = a.platform;
      b[O.g.dg] = a.platformVersion;
      b[O.g.eg] = a.wow64 ? "1" : "0";
      return b;
    },
    Fu = function (a) {
      var b = Eu.zn,
        c = function (g, k) {
          try {
            a(g, k);
          } catch (m) {}
        },
        d = yu();
      if (d) c(d);
      else {
        var e = zu();
        if (e) {
          b = Math.min(Math.max(isFinite(b) ? b : 0, 0), 1e3);
          var f = B.setTimeout(function () {
            c.df || ((c.df = !0), U(106), c(null, Error("Timeout")));
          }, b);
          e.then(function (g) {
            c.df || ((c.df = !0), U(104), B.clearTimeout(f), c(g));
          }).catch(function (g) {
            c.df || ((c.df = !0), U(105), B.clearTimeout(f), c(null, g));
          });
        } else c(null);
      }
    },
    Hu = function () {
      if (Au(B) && ((Gu = nb()), !zu())) {
        var a = Bu();
        a &&
          (a.then(function () {
            U(95);
          }),
          a.catch(function () {
            U(96);
          }));
      }
    },
    Gu;
  function Iu(a) {
    var b;
    b = b === void 0 ? document : b;
    var c;
    return !((c = b.featurePolicy) == null || !c.allowedFeatures().includes(a));
  }
  function Ju() {
    return Iu("join-ad-interest-group") && Za(cc.joinAdInterestGroup);
  }
  function Ku(a, b) {
    var c = Xh[3] === void 0 ? 1 : Xh[3],
      d = 'iframe[data-tagging-id="' + b + '"]',
      e = [];
    try {
      if (c === 1) {
        var f = E.querySelector(d);
        f && (e = [f]);
      } else e = Array.from(E.querySelectorAll(d));
    } catch (q) {}
    var g;
    a: {
      try {
        g = E.querySelectorAll(
          'iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]'
        );
        break a;
      } catch (q) {}
      g = void 0;
    }
    var k = g,
      m =
        ((k == null ? void 0 : k.length) || 0) >=
        (Xh[2] === void 0 ? 50 : Xh[2]),
      n;
    if ((n = e.length >= 1)) {
      var p = Number(e[e.length - 1].dataset.loadTime);
      p !== void 0 && nb() - p < (Xh[1] === void 0 ? 6e4 : Xh[1])
        ? (Va("TAGGING", 9), (n = !0))
        : (n = !1);
    }
    if (!n) {
      if (c === 1)
        if (e.length >= 1) Lu(e[0]);
        else {
          if (m) {
            Va("TAGGING", 10);
            return;
          }
        }
      else e.length >= c ? Lu(e[0]) : m && Lu(k[0]);
      oc(
        a,
        void 0,
        { allow: "join-ad-interest-group" },
        { taggingId: b, loadTime: nb() }
      );
    }
  }
  function Lu(a) {
    try {
      a.parentNode.removeChild(a);
    } catch (b) {}
  }
  function Mu() {
    return "https://td.doubleclick.net";
  }
  function Nu(a) {
    var b = a.location.href;
    if (a === a.top) return { url: b, Lm: !0 };
    var c = !1,
      d = a.document;
    d && d.referrer && ((b = d.referrer), a.parent === a.top && (c = !0));
    var e = a.location.ancestorOrigins;
    if (e) {
      var f = e[e.length - 1];
      f && b.indexOf(f) === -1 && ((c = !1), (b = f));
    }
    return { url: b, Lm: c };
  }
  var Ou = function () {
      return [O.g.N, O.g.O];
    },
    Qu = function (a) {
      S(22) &&
      a.eventName === O.g.ba &&
      Pu(a, "page_view") &&
      !a.metadata.consent_updated &&
      !a.m.isGtmEvent
        ? Cs(a.target, a.m)
        : Pu(a, "call_conversion") && (Cs(a.target, a.m), (a.isAborted = !0));
    },
    Su = function (a) {
      var b;
      if (a.eventName !== "gtag.config" && a.metadata.send_user_data_hit)
        switch (a.metadata.hit_type) {
          case "user_data_web":
            b = 97;
            Ru(a);
            break;
          case "user_data_lead":
            b = 98;
            Ru(a);
            break;
          case "conversion":
            b = 99;
        }
      !a.metadata.speculative && b && U(b);
      a.metadata.speculative === !0 && (a.isAborted = !0);
    },
    Tu = function (a) {
      if (!a.metadata.consent_updated && S(28) && Pu(a, ["conversion"])) {
        var b = Lr();
        Kr(b) && ((a.j[O.g.pd] = "1"), (a.metadata.add_tag_timing = !0));
      }
    },
    Uu = function (a) {
      Pu(a, ["conversion"]) &&
        a.m.eventMetadata.is_external_event &&
        (a.j[O.g.Hj] = !0);
    },
    Vu = function (a) {
      var b = W(Ou());
      switch (a.metadata.hit_type) {
        case "user_data_lead":
        case "user_data_web":
          a.isAborted = !b || !!a.metadata.consent_updated;
          break;
        case "remarketing":
          a.isAborted = !b;
          break;
        case "conversion":
          a.metadata.consent_updated && (a.j[O.g.Yb] = !0);
      }
    },
    Wu = function (a) {
      if (Pu(a, ["conversion"])) {
        var b = Os(a.metadata.cookie_options);
        if (b && !a.j[O.g.Ca]) {
          var c = ip(a.j[O.g.ib]);
          a.j[O.g.Ca] = c;
        }
        b && ((a.j[O.g.Ab] = b), (a.metadata.send_ccm_parallel_ping = !0));
      }
    },
    Xu = function (a) {
      if (Pu(a, ["conversion", "user_data_web"])) {
        var b;
        if (
          !(
            S(58) ||
            S(59) ||
            S(60) ||
            S(61) ||
            S(62) ||
            S(63) ||
            S(64) ||
            S(65) ||
            S(66)
          ) ||
          (Pu(a, ["user_data_web"]) &&
            !a.metadata.speculative_ecw_stitching_ping)
        )
          b = !1;
        else {
          var c = a.metadata.user_data;
          b = !c || Object.keys(c).length > 0 ? !1 : !0;
        }
        if (b) {
          a.metadata.fake_user_data = {
            email: "test@example.com",
            po: "+1234567890",
            io: "Fake",
            mo: "Name",
            ko: {
              so: "123 Fake St",
              city: "Non-Applicable",
              state: "Somewhere",
              country: "US",
              qo: "12345",
            },
          };
          var d = Pu(a, ["user_data_web"]);
          S(58)
            ? (a.metadata.split_experiment_arm = 1)
            : S(59)
            ? (a.metadata.split_experiment_arm = 2)
            : S(60)
            ? ((a.metadata.split_experiment_arm = 3), d && Ru(a))
            : S(61)
            ? ((a.metadata.split_experiment_arm = 4), d && Ru(a))
            : S(62)
            ? ((a.metadata.split_experiment_arm = 5), d && Ru(a))
            : S(63)
            ? ((a.metadata.split_experiment_arm = 6), d && Ru(a))
            : S(64)
            ? ((a.metadata.split_experiment_arm = 7), d && Ru(a))
            : S(65)
            ? (a.metadata.split_experiment_arm = 8)
            : S(66) && (a.metadata.split_experiment_arm = 9);
        } else a.metadata.speculative_ecw_stitching_ping && (a.isAborted = !0);
      }
    },
    Yu = function (a) {
      S(58) ||
        S(59) ||
        S(60) ||
        S(61) ||
        S(62) ||
        S(65) ||
        S(66) ||
        gj() ||
        Si ||
        Lj(a.m) ||
        (S(111) && ou(void 0, Math.round(nb()), S(110)));
    },
    Zu = function (a) {
      if (
        Pu(a, [
          "conversion",
          "remarketing",
          "user_data_lead",
          "user_data_web",
        ]) &&
        a.metadata.conversion_linker_enabled &&
        W(O.g.N)
      ) {
        var b = !S(3);
        if (a.metadata.hit_type !== "remarketing" || b) {
          var c = a.metadata.cookie_options;
          Sp(c, a.metadata.hit_type === "conversion" && a.eventName !== O.g.Ya);
          W(O.g.O) && (a.j[O.g.ub] = Qp[Tp(c.prefix)]);
        }
      }
    },
    av = function (a) {
      Pu(a, ["conversion", "user_data_lead", "user_data_web"]) && $u(a);
    },
    bv = function (a) {
      Pu(a, ["conversion"]) &&
        (a.metadata.redact_click_ids =
          !!a.metadata.redact_ads_data && !W(Ou()));
    },
    cv = function (a) {
      Pu(a, ["conversion"]) && Ep(!1)._up === "1" && (a.j[O.g.se] = !0);
    },
    dv = function (a) {
      if (Pu(a, ["conversion", "remarketing"])) {
        var b = as();
        b !== void 0 && (a.j[O.g.zd] = b || "error");
        var c = uo();
        c && (a.j[O.g.ic] = c);
        var d = to();
        d && (a.j[O.g.mc] = d);
      }
    },
    ev = function (a) {
      if (Pu(a, ["conversion", "remarketing"]) && B.__gsaExp && B.__gsaExp.id) {
        var b = B.__gsaExp.id;
        if (Za(b))
          try {
            var c = Number(b());
            isNaN(c) || (a.j[O.g.eh] = c);
          } catch (d) {}
      }
    },
    fv = function (a) {
      Ls(a);
    },
    gv = function (a) {
      S(44) &&
        Pu(a, "conversion") &&
        (a.copyToHitData(O.g.Kg),
        a.copyToHitData(O.g.Lg),
        a.copyToHitData(O.g.Jg));
    },
    hv = function (a) {
      Pu(a, "conversion") &&
        (a.copyToHitData(O.g.rd),
        a.copyToHitData(O.g.de),
        a.copyToHitData(O.g.xd),
        a.copyToHitData(O.g.ke),
        a.copyToHitData(O.g.Bc),
        a.copyToHitData(O.g.md));
    },
    iv = function (a) {
      if (
        Pu(a, ["conversion", "remarketing", "user_data_lead", "user_data_web"])
      ) {
        var b = a.m;
        if (Pu(a, ["conversion", "remarketing"])) {
          var c = V(b, O.g.Qb);
          if (c === !0 || c === !1) a.j[O.g.Qb] = c;
        }
        Ao(b)
          ? (a.j[O.g.Tb] = !1)
          : ((a.j[O.g.Tb] = !0), Pu(a, "remarketing") && (a.isAborted = !0));
      }
    },
    jv = function (a) {
      if (Pu(a, ["conversion", "remarketing"])) {
        var b = a.metadata.hit_type === "conversion";
        (b && a.eventName !== O.g.Ma) ||
          (a.copyToHitData(O.g.da),
          b &&
            (a.copyToHitData(O.g.ce),
            a.copyToHitData(O.g.ae),
            a.copyToHitData(O.g.be),
            a.copyToHitData(O.g.Zd),
            (a.j[O.g.Hg] = a.eventName),
            S(97) &&
              (a.copyToHitData(O.g.Of),
              a.copyToHitData(O.g.Mf),
              a.copyToHitData(O.g.Nf))));
      }
    },
    kv = function (a) {
      var b = S(7),
        c = a.m,
        d,
        e,
        f;
      if (!b) {
        var g = qm(c, O.g.fa);
        d = xb(Qc(g) ? g : {});
      }
      var k = qm(c, O.g.fa, 1),
        m = qm(c, O.g.fa, 2);
      e = xb(Qc(k) ? k : {}, ".");
      f = xb(Qc(m) ? m : {}, ".");
      b || (a.j[O.g.te] = d);
      a.j[O.g.kb] = e;
      a.j[O.g.jb] = f;
    },
    lv = function (a) {
      if (a != null) {
        var b = String(a).substring(0, 512),
          c = b.indexOf("#");
        return c === -1 ? b : b.substring(0, c);
      }
      return "";
    },
    mv = function (a) {
      if (Pu(a, "conversion") && W(O.g.N) && (a.j[O.g.tb] || a.j[O.g.Ec])) {
        var b = a.j[O.g.ib],
          c = Rc(a.metadata.cookie_options, null),
          d = Hq(c.prefix);
        c.prefix = d === "_gcl" ? "" : d;
        if (a.j[O.g.tb]) {
          var e = $r(b, c, !a.metadata.gbraid_cookie_marked);
          a.metadata.gbraid_cookie_marked = !0;
          e && (a.j[O.g.uh] = e);
        }
        if (a.j[O.g.Ec]) {
          var f = Sr(b, c).im;
          f && (a.j[O.g.Xg] = f);
        }
      }
    },
    nv = function (a) {
      if (a.eventName === O.g.Ya && !a.m.isGtmEvent) {
        if (!a.metadata.consent_updated && Pu(a, "conversion")) {
          var b = V(a.m, O.g.Mb);
          if (typeof b !== "function") return;
          var c = String(V(a.m, O.g.yb)),
            d = a.j[c],
            e = V(a.m, c);
          c === O.g.Za || c === O.g.ub
            ? js(
                { Nk: c, callback: b, rk: e },
                a.metadata.cookie_options,
                a.metadata.redact_ads_data,
                Gr
              )
            : b(d || e);
        }
        a.isAborted = !0;
      }
    },
    ov = function (a) {
      if (
        !St(a, "hasPreAutoPiiCcdRule", !1) &&
        Pu(a, "conversion") &&
        W(O.g.N)
      ) {
        var b = (V(a.m, O.g.je) || {})[String(a.j[O.g.ib])],
          c = a.j[O.g.hd],
          d;
        if (!(d = qs(b)))
          if (tl())
            if (Ct) d = !0;
            else {
              var e = Us("AW-" + c);
              d = !!e && !!e.preAutoPii;
            }
          else d = !1;
        if (d) {
          var f = nb(),
            g = tt({ Kd: !0, Ld: !0, wg: !0 });
          if (g.elements.length !== 0) {
            for (var k = [], m = 0; m < g.elements.length; ++m) {
              var n = g.elements[m];
              k.push(n.querySelector + "*" + ft(n) + "*" + n.type);
            }
            a.j[O.g.rh] = k.join("~");
            var p = g.ii;
            p && ((a.j[O.g.sh] = p.querySelector), (a.j[O.g.qh] = ft(p)));
            a.j[O.g.ph] = String(nb() - f);
            a.j[O.g.th] = g.status;
          }
        }
      }
    },
    pv = function (a) {
      if (
        a.eventName === O.g.ba &&
        !a.metadata.consent_updated &&
        ((a.metadata.is_config_command = !0),
        Pu(a, "conversion") && (a.metadata.speculative = !0),
        !Pu(a, "remarketing") ||
          (V(a.m, O.g.bc) !== !1 && V(a.m, O.g.Oa) !== !1) ||
          (a.metadata.speculative = !0),
        Pu(a, "landing_page"))
      ) {
        var b = V(a.m, O.g.ya) || {},
          c = V(a.m, O.g.eb),
          d = a.metadata.conversion_linker_enabled,
          e = a.metadata.redact_ads_data,
          f = {
            Ed: d,
            Nd: b,
            Sd: c,
            qa: a.metadata.source_canonical_id,
            m: a.m,
            Pd: e,
            Mk: V(a.m, O.g.Da),
          },
          g = a.metadata.cookie_options;
        fs(f, g);
        Cs(a.target, a.m);
        us({
          Jh: !1,
          Pd: e,
          targetId: a.target.id,
          m: a.m,
          rc: d ? g : void 0,
          qg: d,
          ik: a.j[O.g.te],
          Qh: a.j[O.g.kb],
          Nh: a.j[O.g.jb],
          Sh: a.j[O.g.Nb],
        });
        a.isAborted = !0;
      }
    },
    qv = function (a) {
      Pu(a, ["conversion", "remarketing"]) &&
        (a.m.isGtmEvent
          ? a.metadata.hit_type !== "conversion" &&
            a.eventName &&
            (a.j[O.g.Cc] = a.eventName)
          : (a.j[O.g.Cc] = a.eventName),
        gb(a.m.j, function (b, c) {
          vh[b.split(".")[0]] || (a.j[b] = c);
        }));
    },
    rv = function (a) {
      var b =
          !a.metadata.send_user_data_hit &&
          Pu(a, ["conversion", "user_data_web"]),
        c = !St(a, "ccd_add_1p_data", !1) && Pu(a, "user_data_lead");
      if ((b || c) && W(O.g.N)) {
        var d = a.metadata.hit_type === "conversion",
          e = a.m,
          f = void 0,
          g = V(e, O.g.Ha);
        if (d || a.metadata.speculative_ecw_stitching_ping) {
          var k = (V(e, O.g.je) || {})[String(a.j[O.g.ib])];
          if (V(e, O.g.Yd) === !0 || k) {
            var m;
            var n;
            k ? (n = uj(k, g)) : (n = B.enhanced_conversion_data) && U(154);
            var p = (k || {}).enhanced_conversions_mode,
              q;
            if (n) {
              if (p === "manual")
                switch (n._tag_mode) {
                  case "CODE":
                    q = "c";
                    break;
                  case "AUTO":
                    q = "a";
                    break;
                  case "MANUAL":
                    q = "m";
                    break;
                  default:
                    q = "c";
                }
              else q = p === "automatic" ? (qs(k) ? "a" : "m") : "c";
              m = { Z: n, Lk: q };
            } else m = { Z: n, Lk: void 0 };
            var r = m,
              u = r.Lk;
            f = r.Z;
            a.j[O.g.yd] = u;
          }
        } else if (a.m.isGtmEvent) {
          Ru(a);
          a.metadata.user_data = g;
          a.j[O.g.yd] = rs(g);
          return;
        }
        a.metadata.user_data = f;
      }
    },
    sv = function (a) {
      if (St(a, "ccd_add_1p_data", !1) && W(Ou())) {
        var b = a.m.C[O.g.xe];
        if (vj(b)) {
          var c = V(a.m, O.g.Ha);
          c === null
            ? (a.metadata.user_data_from_code = null)
            : (b.enable_code && Qc(c) && (a.metadata.user_data_from_code = c),
              Qc(b.selectors) &&
                (a.metadata.user_data_from_manual = tj(b.selectors)));
        }
      }
    },
    tv = function (a) {
      a.metadata.conversion_linker_enabled = V(a.m, O.g.xa) !== !1;
      a.metadata.cookie_options = bs(a);
      a.metadata.redact_ads_data =
        V(a.m, O.g.ia) != null && V(a.m, O.g.ia) !== !1;
      a.metadata.allow_ad_personalization = Ao(a.m);
    },
    uv = function (a) {
      if (Pu(a, ["conversion", "remarketing"]) && S(32)) {
        var b = function (c) {
          return S(34) ? (Va("fdr", c), !0) : !1;
        };
        if (W(O.g.N) || b(0))
          if (W(O.g.O) || b(1))
            if (V(a.m, O.g.Fa) !== !1 || b(2))
              if (Ao(a.m) || b(3))
                if (V(a.m, O.g.bc) !== !1 || b(4))
                  if (
                    (S(35)
                      ? a.eventName === O.g.ba
                        ? V(a.m, O.g.Oa)
                        : void 0
                      : V(a.m, O.g.Oa)) !== !1 ||
                    b(5)
                  )
                    if (Ju() || b(6))
                      S(34) && Xa()
                        ? ((a.j[O.g.ij] = Wa("fdr")), delete Ua.fdr)
                        : ((a.j[O.g.Sg] = "1"),
                          (a.metadata.send_fledge_experiment = !0));
      }
    },
    vv = function (a) {
      Pu(a, ["conversion"]) &&
        W(O.g.O) &&
        (B._gtmpcm === !0 || Ps()
          ? (a.j[O.g.fc] = "2")
          : S(36) && Iu("attribution-reporting") && (a.j[O.g.fc] = "1"));
    },
    wv = function (a) {
      if (!Au(B)) U(87);
      else if (Gu !== void 0) {
        U(85);
        var b = yu();
        b ? Du(b, a) : U(86);
      }
    },
    xv = function (a) {
      var b = ["conversion", "remarketing"];
      b.push("page_view", "user_data_lead", "user_data_web");
      if (Pu(a, b) && W(O.g.O)) {
        a.copyToHitData(O.g.Da);
        var c = Pl(Kl.Bh);
        if (c === void 0) Ol(Kl.Ch, !0);
        else {
          var d = Pl(Kl.He);
          a.j[O.g.Sf] = d + "." + c;
        }
      }
    },
    yv = function (a) {
      Pu(a, ["conversion", "remarketing"]) &&
        (a.copyToHitData(O.g.Ca),
        a.copyToHitData(O.g.oa),
        a.copyToHitData(O.g.Ba));
    },
    zv = function (a) {
      if (!a.metadata.consent_updated && Pu(a, ["conversion", "remarketing"])) {
        var b = Nn(!1);
        a.j[O.g.Nb] = b;
        var c = V(a.m, O.g.za);
        c || (c = b === 1 ? B.top.location.href : B.location.href);
        a.j[O.g.za] = lv(c);
        a.copyToHitData(O.g.Ga, E.referrer);
        a.j[O.g.cb] = ds();
        a.copyToHitData(O.g.Ta);
        var d = Vs();
        a.j[O.g.Rb] = d.width + "x" + d.height;
        var e = Pn(),
          f = Nu(e);
        f.url && c !== f.url && (a.j[O.g.Tf] = lv(f.url));
      }
    },
    Av = function (a) {
      Pu(a, ["conversion", "remarketing"]);
    },
    Cv = function (a) {
      if (
        Pu(a, ["conversion", "remarketing", "user_data_lead", "user_data_web"])
      ) {
        var b = a.j[O.g.ib],
          c = V(a.m, O.g.Ef) === !0;
        c && (a.metadata.remarketing_only = !0);
        switch (a.metadata.hit_type) {
          case "conversion":
            !c && b && Ru(a);
            Bv() && (a.metadata.is_gcp_conversion = !0);
            (Bv() ? 0 : S(136)) &&
              (a.metadata.is_fallback_aw_conversion_ping_allowed = !0);
            break;
          case "user_data_lead":
          case "user_data_web":
            !c &&
              b &&
              (S(60) || S(61) || S(62) || S(63) || S(64)
                ? (a.metadata.speculative_ecw_stitching_ping = !0)
                : (a.isAborted = !0));
            break;
          case "remarketing":
            (!c && b) || Ru(a);
        }
        Pu(a, ["conversion", "remarketing"]) &&
          (a.j[O.g.Gj] = a.metadata.is_gcp_conversion
            ? "www.google.com"
            : "www.googleadservices.com");
      }
    },
    Bv = function () {
      return (
        cc.userAgent.toLowerCase().indexOf("firefox") !== -1 ||
        hc("Edg/") ||
        hc("EdgA/") ||
        hc("EdgiOS/")
      );
    },
    Dv = function (a) {
      var b = a.target.ids[Zl[1]];
      if (b) {
        a.j[O.g.hd] = b;
        var c = a.target.ids[Zl[2]];
        c && (a.j[O.g.ib] = c);
      } else a.isAborted = !0;
    },
    Ru = function (a) {
      a.metadata.speculative_in_message || (a.metadata.speculative = !1);
    },
    Pu = function (a, b) {
      Array.isArray(b) || (b = [b]);
      return b.indexOf(a.metadata.hit_type) >= 0;
    };
  var $u = function (a) {
    S(84) && Pu(a, ["conversion"]) && (a.j[O.g.yj] = Ep(!1)._gs);
    if (S(19)) {
      var b = W(O.g.N) && W(O.g.O),
        c = a.metadata.redact_ads_data && !b;
      a.j[O.g.Wi] = Qs("gclsrc");
      a.j[O.g.Ti] = Qs("gad_source");
      var d = Qs("gbraid");
      d && (a.j[O.g.Ui] = c ? "0" : d);
      var e = Qs("gclid");
      e && (a.j[O.g.Vi] = b ? e : "0");
      var f = Qs("dclid");
      f && (a.j[O.g.Si] = b ? f : "0");
    }
    if (W(O.g.N) && a.metadata.conversion_linker_enabled) {
      var g = a.metadata.cookie_options,
        k = Hq(g.prefix);
      k === "_gcl" && (k = "");
      var m = Ur(k);
      a.j[O.g.Vc] = m.lg;
      a.j[O.g.Xc] = m.ng;
      S(117) && (a.j[O.g.Wc] = m.mg);
      if (Zr(k)) {
        var n = Yr(k);
        n && (a.j[O.g.tb] = n);
        if (!k) {
          var p = a.j[O.g.ib];
          g = Rc(g, null);
          g.prefix = k;
          var q = Sr(p, g, !0).hm;
          q && (a.j[O.g.Ec] = q);
        }
      } else {
        var r = "";
        if (
          (S(95) || S(104)) &&
          a.metadata.hit_type === "conversion" &&
          Nn() !== 2
        ) {
          var u = Xr(k);
          u.W && (r = u.W);
          u.lk && (a.j[O.g.Ud] = u.lk);
          u.mk && (a.j[O.g.Vd] = u.mk);
        } else r = Wr(k);
        r && (a.j[O.g.Za] = r);
        if (!k) {
          var v = Rr(Bq(Aq()) ? pq() : {}, Pr);
          v && (a.j[O.g.pe] = v);
        }
      }
    }
  };
  var Fv = function (a, b) {
      var c = {},
        d = function (f, g) {
          var k;
          k = g === !0 ? "1" : g === !1 ? "0" : encodeURIComponent(String(g));
          c[f] = k;
        };
      gb(a.j, function (f, g) {
        var k = Ev[f];
        k &&
          g !== void 0 &&
          g !== "" &&
          (!a.metadata.redact_click_ids ||
            (f !== O.g.Wd && f !== O.g.ee && f !== O.g.Bf && f !== O.g.Gg) ||
            (g = "0"),
          d(k, g));
      });
      d("gtm", Oo({ qa: a.metadata.source_canonical_id }));
      Bo() && d("gcs", Co());
      d("gcd", Go(a.m));
      Jo() && d("dma_cps", Ho());
      d("dma", Io());
      Xn(fo()) && d("tcfd", Ko());
      ej() && d("tag_exp", ej());
      if (a.metadata.add_tag_timing) {
        d("tft", nb());
        var e = Dc();
        e !== void 0 && d("tfd", Math.round(e));
      }
      S(22) && d("apve", "1");
      (S(23) || S(24)) && d("apvf", Bc() ? (S(24) ? "f" : "sb") : "nf");
      b(c);
    },
    Gv = function (a) {
      Fv(a, function (b) {
        if (a.metadata.hit_type === "page_view") {
          var c = [];
          gb(b, function (e, f) {
            c.push(e + "=" + f);
          });
          var d =
            Mj(
              W([O.g.N, O.g.O])
                ? "https://www.google.com"
                : "https://pagead2.googlesyndication.com",
              !0
            ) +
            "/ccm/collect?" +
            c.join("&");
          S(24) && Bc() ? Ac(d, void 0, { sk: !0 }) : xc(d);
          if (Za(a.m.onSuccess)) a.m.onSuccess();
        }
      });
    },
    Hv = {},
    Ev =
      ((Hv[O.g.Yb] = "gcu"),
      (Hv[O.g.tb] = "gclgb"),
      (Hv[O.g.Za] = "gclaw"),
      (Hv[O.g.Qi] = "gad_source"),
      (Hv[O.g.Ri] = "gad_source_src"),
      (Hv[O.g.Wd] = "gclid"),
      (Hv[O.g.Xi] = "gclsrc"),
      (Hv[O.g.Gg] = "gbraid"),
      (Hv[O.g.Bf] = "wbraid"),
      (Hv[O.g.ub] = "auid"),
      (Hv[O.g.Zi] = "rnd"),
      (Hv[O.g.cj] = "ncl"),
      (Hv[O.g.Mg] = "gcldc"),
      (Hv[O.g.ee] = "dclid"),
      (Hv[O.g.jb] = "edid"),
      (Hv[O.g.Cc] = "en"),
      (Hv[O.g.ic] = "gdpr"),
      (Hv[O.g.kb] = "gdid"),
      (Hv[O.g.Fc] = "_ng"),
      (Hv[O.g.pj] = "gtm_up"),
      (Hv[O.g.Nb] = "frm"),
      (Hv[O.g.pd] = "lps"),
      (Hv[O.g.te] = "did"),
      (Hv[O.g.qj] = "navt"),
      (Hv[O.g.za] = "dl"),
      (Hv[O.g.Ga] = "dr"),
      (Hv[O.g.cb] = "dt"),
      (Hv[O.g.vj] = "scrsrc"),
      (Hv[O.g.Sf] = "ga_uid"),
      (Hv[O.g.mc] = "gdpr_consent"),
      (Hv[O.g.Da] = "uid"),
      (Hv[O.g.zd] = "us_privacy"),
      (Hv[O.g.Tb] = "npa"),
      Hv);
  var Iv = {
    J: {
      wi: "ads_conversion_hit",
      Td: "container_execute_start",
      zi: "container_setup_end",
      yg: "container_setup_start",
      xi: "container_blocking_end",
      yi: "container_execute_end",
      Ai: "container_yield_end",
      zg: "container_yield_start",
      Bj: "event_execute_end",
      Aj: "event_evaluation_end",
      vh: "event_evaluation_start",
      Cj: "event_setup_end",
      ye: "event_setup_start",
      Ej: "ga4_conversion_hit",
      De: "page_load",
      Tn: "pageview",
      oc: "snippet_load",
      Xj: "tag_callback_error",
      Yj: "tag_callback_failure",
      Zj: "tag_callback_success",
      bk: "tag_execute_end",
      Cd: "tag_execute_start",
    },
  };
  function Jv() {
    function a(c, d) {
      var e = Wa(d);
      e && b.push([c, e]);
    }
    var b = [];
    a("u", "GTM");
    a("ut", "TAGGING");
    a("h", "HEALTH");
    return b;
  }
  var Kv = !1;
  function tw(a, b) {}
  function uw(a, b) {}
  function vw(a, b) {}
  function ww(a, b) {}
  function xw() {
    var a = {};
    return a;
  }
  function lw(a) {
    a = a === void 0 ? !0 : a;
    var b = {};
    return b;
  }
  function yw() {}
  function zw(a, b) {}
  function Aw(a, b, c) {}
  function Bw() {}
  function Cw(a, b) {
    var c = B,
      d,
      e = c.GooglebQhCsO;
    e || ((e = {}), (c.GooglebQhCsO = e));
    d = e;
    if (d[a]) return !1;
    d[a] = [];
    d[a][0] = b;
    return !0;
  }
  function Dw(a, b, c, d) {
    var e = Fn(a, "fmt");
    if (b) {
      var f = Fn(a, "random"),
        g = Fn(a, "label") || "";
      if (!f) return !1;
      var k = vu(
        decodeURIComponent(g.replace(/\+/g, " ")) +
          ":" +
          decodeURIComponent(f.replace(/\+/g, " "))
      );
      if (!Cw(k, b)) return !1;
    }
    e && Number(e) !== 4 && (a = Hn(a, "rfmt", e));
    var m = Hn(a, "fmt", 4);
    mc(
      m,
      function () {
        B.google_noFurtherRedirects &&
          b &&
          ((B.google_noFurtherRedirects = null), b());
      },
      c,
      d,
      E.getElementsByTagName("script")[0].parentElement || void 0
    );
    return !0;
  }
  var Ew = function () {
      var a = !1;
      if (fc) {
        var b = zj(Fj(fc), "host");
        b && (a = b.match(/^(www\.)?googletagmanager\.com$/) !== null);
      }
      return a;
    },
    Fw = function (a) {
      if (a !== void 0) return Math.round(a / 10) * 10;
    },
    Gw = function (a) {
      for (var b = {}, c = 0; c < a.length; c++) {
        var d = a[c],
          e = void 0;
        if (d.hasOwnProperty("google_business_vertical")) {
          e = d.google_business_vertical;
          var f = {};
          b[e] = b[e] || ((f.google_business_vertical = e), f);
        } else (e = ""), b.hasOwnProperty(e) || (b[e] = {});
        var g = b[e],
          k;
        for (k in d)
          k !== "google_business_vertical" &&
            (k in g || (g[k] = []), g[k].push(d[k]));
      }
      return Object.keys(b).map(function (m) {
        return b[m];
      });
    },
    Hw = function (a) {
      if (!a || !a.length) return [];
      for (var b = [], c = 0; c < a.length; ++c) {
        var d = a[c];
        if (d) {
          var e = {};
          b.push(
            ((e.id = Eh(d)),
            (e.origin = d.origin),
            (e.destination = d.destination),
            (e.start_date = d.start_date),
            (e.end_date = d.end_date),
            (e.location_id = d.location_id),
            (e.google_business_vertical = d.google_business_vertical),
            e)
          );
        }
      }
      return b;
    },
    Eh = function (a) {
      a.item_id != null &&
        (a.id != null ? (U(138), a.id !== a.item_id && U(148)) : U(153));
      return S(18) ? Ih(a) : a.id;
    },
    Jw = function (a, b) {
      var c = Iw(b);
      return "" + a + (a && c ? ";" : "") + c;
    },
    Iw = function (a) {
      if (!a || typeof a !== "object" || typeof a.join === "function")
        return "";
      var b = [];
      gb(a, function (c, d) {
        var e, f;
        if (Array.isArray(d)) {
          for (var g = [], k = 0; k < d.length; ++k) {
            var m = Kw(d[k]);
            m !== void 0 && g.push(m);
          }
          f = g.length !== 0 ? g.join(",") : void 0;
        } else f = Kw(d);
        e = f;
        var n = Kw(c);
        n && e !== void 0 && b.push(n + "=" + e);
      });
      return b.join(";");
    },
    Kw = function (a) {
      var b = typeof a;
      if (a != null && b !== "object" && b !== "function")
        return String(a)
          .replace(/,/g, "\\,")
          .replace(/;/g, "\\;")
          .replace(/=/g, "\\=");
    },
    Lw = function (a, b) {
      var c = [],
        d = function (f, g) {
          var k = Zf[f] === !0;
          g == null ||
            (!k && g === "") ||
            (g === !0 && (g = 1),
            g === !1 && (g = 0),
            c.push(f + "=" + encodeURIComponent(g)));
        },
        e = a.metadata.hit_type;
      (e !== "conversion" && e !== "remarketing" && e !== "ga_conversion") ||
        d("random", a.metadata.event_start_timestamp_ms);
      gb(b, d);
      return c.join("&");
    },
    Mw = function (a, b) {
      var c = a.metadata.hit_type,
        d = a.j[O.g.hd],
        e = W([O.g.N, O.g.O]),
        f = [],
        g,
        k = a.m.onSuccess,
        m,
        n = Mo() ? 2 : 3,
        p = 0,
        q = void 0,
        r = function (A) {
          f.push(A);
          A.ma && p++;
        };
      switch (c) {
        case "conversion":
          m = "/pagead/conversion";
          var u = "";
          e
            ? a.metadata.is_gcp_conversion
              ? ((g = "https://www.google.com"),
                (m = "/pagead/1p-conversion"),
                (q = 8))
              : ((g = "https://www.googleadservices.com"), (q = 5))
            : ((g = "https://pagead2.googlesyndication.com"), (q = 6));
          a.metadata.is_gcp_conversion &&
            (u = "&gcp=1&sscte=1&ct_cookie_present=1");
          var v = {
            Ea: "" + Mj(g, !0) + m + "/" + d + "/?" + Lw(a, b) + u,
            format: n,
            ma: !0,
            endpoint: q,
          };
          W(O.g.O) && (v.attributes = { attributionsrc: "" });
          e &&
            a.metadata.is_fallback_aw_conversion_ping_allowed &&
            ((v.Se =
              "" +
              Mj("https://www.google.com", !0) +
              "/pagead/1p-conversion/" +
              d +
              "/?" +
              Lw(a, b) +
              "&gcp=1&sscte=1&ct_cookie_present=1"),
            (v.Re = 8));
          r(v);
          if (a.metadata.send_ccm_parallel_ping) {
            q = a.metadata.is_gcp_conversion ? 23 : 22;
            var t;
            b.eme && !S(9) ? ((t = {}), qb(t, b), (t.eme = "*")) : (t = b);
            r({
              Ea: "" + Mj(g, !0) + "/ccm/conversion/" + d + "/?" + Lw(a, t) + u,
              format: 2,
              ma: !0,
              endpoint: q,
            });
          }
          a.metadata.is_gcp_conversion &&
            e &&
            ((u = "&gcp=1&ct_cookie_present=1"),
            r({
              Ea:
                "" +
                Mj("https://googleads.g.doubleclick.net") +
                "/pagead/viewthroughconversion/" +
                d +
                "/?" +
                Lw(a, b) +
                u,
              format: n,
              ma: !0,
              endpoint: 9,
            }));
          break;
        case "remarketing":
          var w = b.data || "",
            x = Gw(Hw(a.j[O.g.da]));
          if (x.length) {
            for (var y = 0; y < x.length; y++)
              (b.data = Jw(w, x[y])),
                r({
                  Ea:
                    "" +
                    Mj("https://googleads.g.doubleclick.net") +
                    "/pagead/viewthroughconversion/" +
                    d +
                    "/?" +
                    Lw(a, b),
                  format: n,
                  ma: !0,
                  endpoint: 9,
                }),
                a.metadata.send_fledge_experiment &&
                  r({
                    Ea: "" + Mu() + "/td/rul/" + d + "?" + Lw(a, b),
                    format: 4,
                    ma: !1,
                    endpoint: 44,
                  }),
                (a.metadata.event_start_timestamp_ms += 1);
            a.metadata.send_fledge_experiment = !1;
          } else
            r({
              Ea:
                "" +
                Mj("https://googleads.g.doubleclick.net") +
                "/pagead/viewthroughconversion/" +
                d +
                "/?" +
                Lw(a, b),
              format: n,
              ma: !0,
              endpoint: 9,
            });
          break;
        case "user_data_lead":
          r({
            Ea:
              "" +
              Mj("https://google.com") +
              "/pagead/form-data/" +
              d +
              "?" +
              Lw(a, b),
            format: 1,
            ma: !0,
            endpoint: 11,
          });
          break;
        case "user_data_web":
          r({
            Ea:
              "" +
              Mj("https://google.com") +
              "/ccm/form-data/" +
              d +
              "?" +
              Lw(a, b),
            format: 1,
            ma: !0,
            endpoint: 21,
          });
          break;
        case "ga_conversion":
          e
            ? ((g = "https://www.google.com"), (q = 54))
            : ((g = "https://pagead2.googlesyndication.com"), (q = 55)),
            r({
              Ea: "" + Mj(g, !0) + "/measurement/conversion/?" + Lw(a, b),
              format: 5,
              ma: !0,
              endpoint: q,
            });
      }
      f.length > 1 && Za(a.m.onSuccess) && (k = yb(a.m.onSuccess, p));
      Mo() ||
        (c !== "conversion" && c !== "remarketing") ||
        !a.metadata.send_fledge_experiment ||
        (S(33) && c === "conversion" && (b.ct_cookie_present = 0),
        r({
          Ea: "" + Mu() + "/td/rul/" + d + "?" + Lw(a, b),
          format: 4,
          ma: !1,
          endpoint: 44,
        }));
      return { onSuccess: k, Em: f };
    },
    Nw = function (a, b, c, d, e, f, g, k) {
      uw(c.m.eventId, c.eventName);
      var m = function () {
        f && f();
      };
      switch (b) {
        case 1:
          xc(a);
          f && f();
          break;
        case 2:
          qc(a, m, g, k);
          break;
        case 3:
          var n = !1;
          try {
            n = Dw(a, m, g, k);
          } catch (r) {
            n = !1;
          }
          n || Nw(a, 2, c, d, e, m, g, k);
          break;
        case 4:
          var p = "AW-" + c.j[O.g.hd],
            q = c.j[O.g.ib];
          q && (p = p + "/" + q);
          Ku(a, p);
          break;
        case 5:
          Ac(a, void 0, void 0, f, g);
      }
    },
    Ow = function (a) {
      switch (a) {
        case "conversion":
          return S(67) || S(57);
        case "user_data_lead":
          return S(68);
        case "user_data_web":
          return S(69);
        default:
          return !1;
      }
    },
    Pw = function (a) {
      if (!a.j[O.g.Ud] || !a.j[O.g.Vd]) return "";
      var b = a.j[O.g.Ud].split("."),
        c = a.j[O.g.Vd].split(".");
      if (!b.length || !c.length || b.length !== c.length) return "";
      for (var d = [], e = 0; e < b.length; ++e) d.push(b[e] + "_" + c[e]);
      return d.join(".");
    },
    Sw = function (a, b, c) {
      function d(k, m) {
        c._ece = Qw(f, k, m === void 0 ? !1 : m);
        a === "user_data_web" && (c.em = "tv.1~em.e0");
      }
      function e(k, m) {
        m = m === void 0 ? !1 : m;
        if (k)
          return k.then(function (n) {
            d(n, m);
          });
        d();
      }
      var f = b.metadata.split_experiment_arm,
        g = b.metadata.fake_user_data;
      if (f && g)
        if (f === 1) a === "conversion" && d();
        else if (f === 2) {
          if (a === "conversion") return e(Rw(0, g));
        } else if (f === 3)
          if (a === "conversion") d();
          else {
            if (a === "user_data_web") return e(Rw(1, g));
          }
        else if (f === 4)
          if (a === "conversion") d();
          else {
            if (a === "user_data_web") return e(Rw(2, g), !0);
          }
        else
          f === 5
            ? a === "conversion"
              ? d()
              : a === "user_data_web" && d()
            : (f !== 6 && f !== 7) || a !== "conversion" || d();
    },
    Uw = function (a, b, c) {
      function d(n, p, q) {
        n._ece = Qw(f, q, !1, p);
      }
      function e(n, p, q) {
        if (n)
          return n.then(function (r) {
            d(p, q, r);
            c(p);
          });
        d(p, q);
        c(p);
      }
      var f = a.metadata.split_experiment_arm,
        g = a.metadata.fake_user_data;
      if (f && g)
        if (f === 8) {
          var k = Object.assign({}, b);
          d(b, 1);
          c(b);
          Tw(k);
          d(k, 2);
          c(k);
        } else if (f === 9) {
          var m = Object.assign({}, b);
          d(b, 1);
          c(b);
          Tw(m);
          e(Rw(1, g), m, 2);
        }
    },
    Rw = function (a, b) {
      if (a === 0) return mi(b, !1);
      if (a === 1) return mi(b, !0, !0);
      if (a === 2)
        return ki(
          {
            Hb: "tv.1~em.test@example.com~fn.Fake~ln.Name~co.US~sa.123 Fake St~ct.Non-Applicable~pn.+1234567890~pc.12345~rg.ca",
            Od: 9,
            pg: !1,
          },
          !0
        );
    },
    Vw = function (a, b) {
      var c, d;
      if (a === "user_data_web") {
        var e = b.metadata.split_experiment_arm;
        if (e === 6 || e === 7) {
          var f = yi(b.metadata.fake_user_data),
            g = {},
            k = ["tv.1"],
            m = 0;
          for (var n = l(f), p = n.next(); !p.done; p = n.next()) {
            var q = p.value;
            if (q.value !== "") {
              var r,
                u = void 0,
                v = q.name,
                t = q.value,
                w = di[v];
              if (w) {
                var x = (u = q.index) != null ? u : "",
                  y = w + "__" + m;
                e === 7 || !ei(v) || fi(t)
                  ? (r = encodeURIComponent(encodeURIComponent(t)))
                  : ((r = "${userData." + y + "|sha256}"), (g[y] = t), m++);
                k.push("" + w + x + "." + r);
              }
            }
          }
          var A = k.join("~");
          c = { userData: g };
          d = gi();
          var C = "tv.1~${" + A + "|encrypt}",
            D = [
              "&em=tv.1~em.e0&_ece=a." +
                e +
                ("~s." + (Ew() ? 1 : 0)) +
                ("&feme=" + C),
            ];
          return { Dk: !0, vf: c, Ik: D, tk: f, encryptionKeyString: d };
        }
      }
    },
    Qw = function (a, b, c, d) {
      function e(g, k) {
        f.push(g + "." + k);
      }
      c = c === void 0 ? !1 : c;
      var f = [];
      e("a", a);
      e("s", Ew() ? 1 : 0);
      d !== void 0 && e("n", d);
      b !== void 0 &&
        (b.Hb &&
          !c &&
          (e("fem", b.Hb.replace(/./g, "*")),
          b.time !== void 0 && e("ht", String(b.time))),
        b.Aa &&
          (b.Aa.Fd && e("feme", b.Aa.Fd.replace(/./g, "*")),
          e("est", b.Aa.time),
          e("es", b.Aa.status)));
      return f.join("~");
    },
    Ww = function (a, b) {
      if (a !== "conversion") return !1;
      var c = b.metadata.split_experiment_arm;
      return c === 8 || c === 9;
    },
    Tw = function (a) {
      var b = yh[O.g.ib];
      a[b] = "ecwexp_" + a[b];
    },
    Yw = function (a) {
      if (a.metadata.hit_type === "page_view") Gv(a);
      else {
        var b = S(20) ? pb(a.m.onFailure) : void 0;
        Xw(a, function (c, d) {
          S(106) && delete c.em;
          for (
            var e = Mw(a, c), f = e.onSuccess, g = e.Em, k = {}, m = 0;
            m < g.length;
            k = {
              Se: void 0,
              Re: void 0,
              ma: void 0,
              Me: void 0,
              Ea: void 0,
              kg: void 0,
              jg: void 0,
            },
              m++
          ) {
            var n = g[m];
            k.Ea = n.Ea;
            k.kg = n.format;
            k.ma = n.ma;
            k.Me = n.attributes;
            k.jg = n.endpoint;
            k.Se = n.Se;
            k.Re = n.Re;
            var p = void 0;
            if ((p = d) != null && p.Dk) {
              var q = (function (x) {
                  return function (y) {
                    var A = a.metadata.split_experiment_arm;
                    if (A === 6 || A === 7) {
                      var C = function (G) {
                          var J = Qw(A, G, A === 7),
                            F = x.Ea;
                          if (y) {
                            var T = Oo({
                              qa: a.metadata.source_canonical_id,
                              xg: y,
                            });
                            F = F.replace(c.gtm, T);
                          }
                          Nw(
                            F + "&em=tv.1~em.e0&_ece=" + encodeURIComponent(J),
                            x.kg,
                            a,
                            c,
                            x.jg,
                            x.ma ? f : void 0,
                            void 0,
                            x.Me
                          );
                        },
                        D = Rw(A === 6 ? 1 : 2, a.metadata.fake_user_data);
                      D
                        ? D.then(function (G) {
                            C(G);
                          })
                        : C(void 0);
                    } else
                      Bi(d.tk, function (G) {
                        var J = oi(G),
                          F = x.Ea;
                        if (y) {
                          var T = Oo({
                            qa: a.metadata.source_canonical_id,
                            xg: y,
                          });
                          F = F.replace(c.gtm, T);
                        }
                        Nw(
                          F + "&em=" + encodeURIComponent(J.Hb),
                          x.kg,
                          a,
                          c,
                          x.jg,
                          x.ma ? f : void 0,
                          void 0,
                          x.Me
                        );
                      });
                  };
                })(k),
                r = d,
                u = r.vf,
                v = r.encryptionKeyString,
                t = "" + k.Ea + r.Ik.join("");
              qu(
                t,
                u,
                (function (x) {
                  return function () {
                    x.ma && typeof f === "function" && f();
                  };
                })(k),
                q,
                v
              );
            } else {
              var w = b;
              k.Se &&
                k.Re &&
                (w = (function (x) {
                  return function () {
                    Nw(
                      x.Se,
                      5,
                      a,
                      c,
                      x.Re,
                      x.ma ? f : void 0,
                      x.ma ? b : void 0,
                      x.Me
                    );
                  };
                })(k));
              Nw(
                k.Ea,
                k.kg,
                a,
                c,
                k.jg,
                k.ma ? f : void 0,
                k.ma ? w : void 0,
                k.Me
              );
            }
          }
        });
      }
    },
    Xw = function (a, b) {
      var c = a.metadata.hit_type,
        d = {},
        e = {},
        f = void 0,
        g = [],
        k = a.metadata.event_start_timestamp_ms;
      c === "conversion" || c === "remarketing"
        ? ((d.cv = "11"),
          (d.fst = k),
          (d.fmt = 3),
          (d.bg = "ffffff"),
          (d.guid = "ON"),
          (d.async = "1"))
        : c === "ga_conversion" &&
          ((d.cv = "11"),
          (d.tid = a.target.destinationId),
          (d.fst = k),
          (d.fmt = 6),
          (d.en = a.eventName));
      var m = kr(["aw", "dc"]);
      m != null && (d.gad_source = m);
      d.gtm = Oo({ qa: a.metadata.source_canonical_id });
      c !== "remarketing" && Bo() && (d.gcs = Co());
      d.gcd = Go(a.m);
      Jo() && (d.dma_cps = Ho());
      d.dma = Io();
      Xn(fo()) && (d.tcfd = Ko());
      ej() && (d.tag_exp = ej());
      a.j[O.g.Rb] && zh(a.j[O.g.Rb], d);
      a.j[O.g.Ta] && Bh(a.j[O.g.Ta], d);
      var n = a.metadata.redact_click_ids,
        p = function (R, M) {
          var ea = a.j[M];
          ea && (d[R] = n ? tr(ea) : ea);
        };
      p("url", O.g.za);
      p("ref", O.g.Ga);
      p("top", O.g.Tf);
      var q = Pw(a);
      q && (d.gclaw_src = q);
      gb(a.j, function (R, M) {
        if (yh.hasOwnProperty(R)) {
          var ea = yh[R];
          ea && (d[ea] = M);
        } else e[R] = M;
      });
      Tl(d, a.j[O.g.Bd]);
      var r = a.j[O.g.rd];
      r !== void 0 && r !== "" && (d.vdnc = String(r));
      var u = a.j[O.g.md];
      u !== void 0 && (d.shf = u);
      var v = a.j[O.g.Bc];
      v !== void 0 && (d.delc = v);
      if (S(28) && a.metadata.add_tag_timing) {
        d.tft = nb();
        var t = Dc();
        t !== void 0 && (d.tfd = Math.round(t));
      }
      c !== "ga_conversion" && (d.data = Iw(e));
      var w = a.j[O.g.da];
      !w ||
        (c !== "conversion" && c !== "ga_conversion") ||
        ((d.iedeld = Lh(w)), (d.item = Ch(w)));
      if (
        (c === "conversion" ||
          c === "user_data_lead" ||
          c === "user_data_web") &&
        a.metadata.user_data
      )
        if (!W(O.g.O) || (S(17) && !W(O.g.N))) d.ec_mode = void 0;
        else {
          var x = function () {
            if (c === "user_data_web") {
              var R;
              var M = a.metadata.cookie_options;
              M = M || {};
              var ea;
              if (W(Ns)) {
                (ea = Os(M)) || (ea = ip());
                var ha = M,
                  da = Tp(ha.prefix);
                Vp(ha, ea);
                delete Qp[da];
                delete Rp[da];
                Up(da, ha.path, ha.domain);
                R = Os(M);
              } else R = void 0;
              d.ecsid = R;
            }
          };
          if (a.metadata.split_experiment_arm && a.metadata.fake_user_data) {
            if (Ww(c, a)) {
              Uw(a, d, b);
              return;
            }
            var y = Sw(c, a, d);
            f = Vw(c, a);
            y && g.push(y);
            d.gtm = Oo({ qa: a.metadata.source_canonical_id, xg: 3 });
          } else if (c !== "conversion" && S(111) && !S(106)) {
            d.gtm = Oo({ qa: a.metadata.source_canonical_id, xg: 3 });
            var A = yi(a.metadata.user_data),
              C = hi(A),
              D = C.Kk,
              G = C.Zl,
              J = C.encryptionKeyString,
              F = ["&em=" + C.Hk];
            f = { Dk: !0, vf: C.vf, Ik: F, tk: A };
            S(110) && (F.push("&eme=" + G), (f.encryptionKeyString = J));
            D > 0 && x();
          } else {
            var T = function (R) {
                return function (M) {
                  var ea = M.Hb;
                  S(106) || (R.em = ea);
                  if ((S(56) || S(91)) && M.Od > 0 && M.time !== void 0) {
                    var ha = Fw(M.time);
                    R._ht =
                      "t." +
                      (ha === void 0 ? "" : ha) +
                      ("~l." + Fw(ea.length));
                  }
                  M.Od > 0 && x();
                  if (N) {
                  }
                };
              },
              N = Ow(c),
              Z,
              ba = a.metadata.user_data;
            if (c === "conversion" && S(57)) {
              var fa = function (R, M) {
                M && Tw(R);
                var ea = mi(ba, M, !0);
                ea
                  ? ea.then(T(R)).then(function () {
                      b(R);
                    })
                  : b(R);
              };
              fa(Object.assign({}, d), !1);
              fa(d, !0);
              return;
            }
            (Z = S(90) || S(91) ? mi(ba, S(91) && N) : ni(ba)) &&
              g.push(Z.then(T(d)));
          }
        }
      if (g.length)
        try {
          Promise.all(g).then(function () {
            b(d);
          });
          return;
        } catch (R) {}
      b(d, f);
    };
  function Zw(a, b) {
    if (data.entities) {
      var c = data.entities[a];
      if (c) return c[b];
    }
  }
  function $w(a, b, c) {
    c = c === void 0 ? !1 : c;
    ax().addRestriction(0, a, b, c);
  }
  function bx(a, b, c) {
    c = c === void 0 ? !1 : c;
    ax().addRestriction(1, a, b, c);
  }
  function cx() {
    var a = ok();
    return ax().getRestrictions(1, a);
  }
  var dx = function () {
      this.container = {};
      this.j = {};
    },
    ex = function (a, b) {
      var c = a.container[b];
      c ||
        ((c = {
          _entity: { internal: [], external: [] },
          _event: { internal: [], external: [] },
        }),
        (a.container[b] = c));
      return c;
    };
  dx.prototype.addRestriction = function (a, b, c, d) {
    d = d === void 0 ? !1 : d;
    if (!d || !this.j[b]) {
      var e = ex(this, b);
      a === 0
        ? d
          ? e._entity.external.push(c)
          : e._entity.internal.push(c)
        : a === 1 &&
          (d ? e._event.external.push(c) : e._event.internal.push(c));
    }
  };
  dx.prototype.getRestrictions = function (a, b) {
    var c = ex(this, b);
    if (a === 0) {
      var d, e;
      return [].concat(
        ua(
          (c == null
            ? void 0
            : (d = c._entity) == null
            ? void 0
            : d.internal) || []
        ),
        ua(
          (c == null
            ? void 0
            : (e = c._entity) == null
            ? void 0
            : e.external) || []
        )
      );
    }
    if (a === 1) {
      var f, g;
      return [].concat(
        ua(
          (c == null ? void 0 : (f = c._event) == null ? void 0 : f.internal) ||
            []
        ),
        ua(
          (c == null ? void 0 : (g = c._event) == null ? void 0 : g.external) ||
            []
        )
      );
    }
    return [];
  };
  dx.prototype.getExternalRestrictions = function (a, b) {
    var c = ex(this, b),
      d,
      e;
    return a === 0
      ? (c == null ? void 0 : (d = c._entity) == null ? void 0 : d.external) ||
          []
      : (c == null ? void 0 : (e = c._event) == null ? void 0 : e.external) ||
          [];
  };
  dx.prototype.removeExternalRestrictions = function (a) {
    var b = ex(this, a);
    b._event && (b._event.external = []);
    b._entity && (b._entity.external = []);
    this.j[a] = !0;
  };
  function ax() {
    var a = Ki.r;
    a || ((a = new dx()), (Ki.r = a));
    return a;
  }
  var fx = new RegExp(
      /^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/
    ),
    gx = {
      cl: ["ecl"],
      customPixels: ["nonGooglePixels"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
      html: [
        "customScripts",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      customScripts: [
        "html",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGooglePixels: [],
      nonGoogleScripts: ["nonGooglePixels"],
      nonGoogleIframes: ["nonGooglePixels"],
    },
    hx = {
      cl: ["ecl"],
      customPixels: ["customScripts", "html"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
      html: ["customScripts"],
      customScripts: ["html"],
      nonGooglePixels: [
        "customPixels",
        "customScripts",
        "html",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGoogleScripts: ["customScripts", "html"],
      nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"],
    },
    ix =
      "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(
        " "
      );
  function jx() {
    var a = mj("gtm.allowlist") || mj("gtm.whitelist");
    a && U(9);
    Qi && (a = ["google", "gtagfl", "lcl", "zone"]);
    fx.test(B.location && B.location.hostname) &&
      (Qi
        ? U(116)
        : (U(117),
          kx &&
            ((a = []),
            window.console &&
              window.console.log &&
              window.console.log("GTM blocked. See go/13687728."))));
    var b = a && rb(kb(a), gx),
      c = mj("gtm.blocklist") || mj("gtm.blacklist");
    c || ((c = mj("tagTypeBlacklist")) && U(3));
    c ? U(8) : (c = []);
    fx.test(B.location && B.location.hostname) &&
      ((c = kb(c)),
      c.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
    kb(c).indexOf("google") >= 0 && U(2);
    var d = c && rb(kb(c), hx),
      e = {};
    return function (f) {
      var g = f && f[He.ra];
      if (!g || typeof g !== "string") return !0;
      g = g.replace(/^_*/, "");
      if (e[g] !== void 0) return e[g];
      var k = $i[g] || [],
        m = !0;
      if (a) {
        var n;
        if ((n = m))
          a: {
            if (b.indexOf(g) < 0)
              if (k && k.length > 0)
                for (var p = 0; p < k.length; p++) {
                  if (b.indexOf(k[p]) < 0) {
                    U(11);
                    n = !1;
                    break a;
                  }
                }
              else {
                n = !1;
                break a;
              }
            n = !0;
          }
        m = n;
      }
      var q = !1;
      if (c) {
        var r = d.indexOf(g) >= 0;
        if (r) q = r;
        else {
          var u = eb(d, k || []);
          u && U(10);
          q = u;
        }
      }
      var v = !m || q;
      v ||
        !(k.indexOf("sandboxedScripts") >= 0) ||
        (b && b.indexOf("sandboxedScripts") !== -1) ||
        (v = eb(d, ix));
      return (e[g] = v);
    };
  }
  var kx = !1;
  kx = !0;
  function lx() {
    fk &&
      $w(ok(), function (a) {
        var b = sf(a.entityId),
          c;
        if (vf(b)) {
          var d = b[He.ra];
          if (!d)
            throw Error("Error: No function name given for function call.");
          var e = kf[d];
          c = !!e && !!e.runInSiloedMode;
        } else c = !!Zw(b[He.ra], 4);
        return c;
      });
  }
  function mx(a, b, c, d, e) {
    if (!nx()) {
      var f = d.siloed ? kk(a) : a;
      if (!xk(f)) {
        d.siloed && zk({ ctid: f, isDestination: !1 });
        var g = rk();
        ak().container[f] = { state: 1, context: d, parent: g };
        Zj({ ctid: f, isDestination: !1 }, e);
        var k = ox(a);
        if (gj()) mc(fj() + "/" + k);
        else {
          var m = sb(a, "GTM-"),
            n = Kj(),
            p = c ? "/gtag/js" : "/gtm.js",
            q = Jj(b, p + k);
          if (!q) {
            var r = Ji.Af + p;
            n && fc && m
              ? ((r = fc.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]),
                (q = vs("https://", "http://", r + k)))
              : (q = gj() ? fj() + "/" + k : vs("https://", "http://", r + k));
          }
          mc(q);
        }
      }
    }
  }
  function px(a, b, c, d) {
    if (!nx()) {
      var e = c.siloed ? kk(a) : a;
      if (!yk(e))
        if (!c.siloed && Ak())
          (ak().destination[e] = {
            state: 0,
            transportUrl: b,
            context: c,
            parent: rk(),
          }),
            Zj({ ctid: e, isDestination: !0 }, d),
            U(91);
        else if (
          (c.siloed && zk({ ctid: e, isDestination: !0 }),
          (ak().destination[e] = { state: 1, context: c, parent: rk() }),
          Zj({ ctid: e, isDestination: !0 }, d),
          gj())
        )
          mc(fj() + ("/gtd" + ox(a, !0)));
        else {
          var f = "/gtag/destination" + ox(a, !0),
            g = Jj(b, f);
          g ||
            (gj()
              ? ((f = "/gtd" + ox(a, !0)), (g = fj() + f))
              : (g = vs("https://", "http://", Ji.Af + f)));
          mc(g);
        }
    }
  }
  function ox(a, b) {
    b = b === void 0 ? !1 : b;
    var c = "?id=" + encodeURIComponent(a) + "&l=" + Ji.qb;
    if (!sb(a, "GTM-") || b) c += "&cx=c";
    c += "&gtm=" + Oo();
    Kj() && (c += "&sign=" + Ji.Ah);
    var d = dj.j;
    d === 1 ? (c += "&fps=fc") : d === 2 && (c += "&fps=fe");
    return c;
  }
  function nx() {
    if (Mo()) {
      return !0;
    }
    return !1;
  }
  var qx = !1,
    rx = 0,
    sx = [];
  function tx(a) {
    if (!qx) {
      var b = E.createEventObject,
        c = E.readyState === "complete",
        d = E.readyState === "interactive";
      if (!a || a.type !== "readystatechange" || c || (!b && d)) {
        qx = !0;
        for (var e = 0; e < sx.length; e++) H(sx[e]);
      }
      sx.push = function () {
        for (var f = za.apply(0, arguments), g = 0; g < f.length; g++) H(f[g]);
        return 0;
      };
    }
  }
  function ux() {
    if (!qx && rx < 140) {
      rx++;
      try {
        var a, b;
        (b = (a = E.documentElement).doScroll) == null || b.call(a, "left");
        tx();
      } catch (c) {
        B.setTimeout(ux, 50);
      }
    }
  }
  function vx(a) {
    qx ? a() : sx.push(a);
  }
  function xx(a, b, c) {
    return {
      entityType: a,
      indexInOriginContainer: b,
      nameInOriginContainer: c,
      originContainerId: mk(),
    };
  }
  var zx = function (a, b) {
      this.j = !1;
      this.K = [];
      this.eventData = { tags: [] };
      this.P = !1;
      this.C = this.H = 0;
      yx(this, a, b);
    },
    Ax = function (a, b, c, d) {
      if (Mi.hasOwnProperty(b) || b === "__zone") return -1;
      var e = {};
      Qc(d) && (e = Rc(d, e));
      e.id = c;
      e.status = "timeout";
      return a.eventData.tags.push(e) - 1;
    },
    Bx = function (a, b, c, d) {
      var e = a.eventData.tags[b];
      e && ((e.status = c), (e.executionTime = d));
    },
    Cx = function (a) {
      if (!a.j) {
        for (var b = a.K, c = 0; c < b.length; c++) b[c]();
        a.j = !0;
        a.K.length = 0;
      }
    },
    yx = function (a, b, c) {
      b !== void 0 && a.Je(b);
      c &&
        B.setTimeout(function () {
          Cx(a);
        }, Number(c));
    };
  zx.prototype.Je = function (a) {
    var b = this,
      c = pb(function () {
        H(function () {
          a(mk(), b.eventData);
        });
      });
    this.j ? c() : this.K.push(c);
  };
  var Dx = function (a) {
      a.H++;
      return pb(function () {
        a.C++;
        a.P && a.C >= a.H && Cx(a);
      });
    },
    Ex = function (a) {
      a.P = !0;
      a.C >= a.H && Cx(a);
    };
  var Fx = {};
  function Gx() {
    return B[Hx()];
  }
  function Hx() {
    return B.GoogleAnalyticsObject || "ga";
  }
  function Kx() {
    var a = mk();
  }
  function Lx(a, b) {
    return function () {
      var c = Gx(),
        d = c && c.getByName && c.getByName(a);
      if (d) {
        var e = d.get("sendHitTask");
        d.set("sendHitTask", function (f) {
          var g = f.get("hitPayload"),
            k = f.get("hitCallback"),
            m = g.indexOf("&tid=" + b) < 0;
          m &&
            (f.set(
              "hitPayload",
              g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b),
              !0
            ),
            f.set("hitCallback", void 0, !0));
          e(f);
          m &&
            (f.set("hitPayload", g, !0),
            f.set("hitCallback", k, !0),
            f.set("_x_19", void 0, !0),
            e(f));
        });
      }
    };
  }
  var Qx = ["es", "1"],
    Rx = {},
    Sx = {};
  function Tx(a, b) {
    if (Tj) {
      var c;
      c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
      Rx[a] = [
        ["e", c],
        ["eid", a],
      ];
      Qm(a);
    }
  }
  function Ux(a) {
    var b = a.eventId,
      c = a.Tc;
    if (!Rx[b]) return [];
    var d = [];
    Sx[b] || d.push(Qx);
    d.push.apply(d, ua(Rx[b]));
    c && (Sx[b] = !0);
    return d;
  }
  var Vx = {},
    Wx = {},
    Xx = {};
  function Yx(a, b, c, d) {
    Tj &&
      S(101) &&
      ((d === void 0 ? 0 : d)
        ? ((Xx[b] = Xx[b] || 0), ++Xx[b])
        : c !== void 0
        ? ((Wx[a] = Wx[a] || {}), (Wx[a][b] = Math.round(c)))
        : ((Vx[a] = Vx[a] || {}), (Vx[a][b] = (Vx[a][b] || 0) + 1)));
  }
  function Zx(a) {
    var b = a.eventId,
      c = a.Tc,
      d = Vx[b] || {},
      e = [],
      f;
    for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
    c && delete Vx[b];
    return e.length ? [["md", e.join(".")]] : [];
  }
  function $x(a) {
    var b = a.eventId,
      c = a.Tc,
      d = Wx[b] || {},
      e = [],
      f;
    for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
    c && delete Wx[b];
    return e.length ? [["mtd", e.join(".")]] : [];
  }
  function ay() {
    for (
      var a = [], b = l(Object.keys(Xx)), c = b.next();
      !c.done;
      c = b.next()
    ) {
      var d = c.value;
      a.push("" + d + Xx[d]);
    }
    return a.length ? [["mec", a.join(".")]] : [];
  }
  var by = {},
    cy = {};
  function dy(a, b, c) {
    if (Tj && b) {
      var d = Nj(b);
      by[a] = by[a] || [];
      by[a].push(c + d);
      var e = (vf(b) ? "1" : "2") + d;
      cy[a] = cy[a] || [];
      cy[a].push(e);
      Qm(a);
    }
  }
  function ey(a) {
    var b = a.eventId,
      c = a.Tc,
      d = [],
      e = by[b] || [];
    e.length && d.push(["tr", e.join(".")]);
    var f = cy[b] || [];
    f.length && d.push(["ti", f.join(".")]);
    c && (delete by[b], delete cy[b]);
    return d;
  }
  function fy(a, b, c, d) {
    var e = hf[a],
      f = gy(a, b, c, d);
    if (!f) return null;
    var g = wf(e[He.Wj], c, []);
    if (g && g.length) {
      var k = g[0];
      f = fy(
        k.index,
        {
          onSuccess: f,
          onFailure: k.jk === 1 ? b.terminate : f,
          terminate: b.terminate,
        },
        c,
        d
      );
    }
    return f;
  }
  function gy(a, b, c, d) {
    function e() {
      function w() {
        ml(3);
        var J = nb() - G;
        dy(c.id, f, "7");
        Bx(c.qc, C, "exception", J);
        S(88) && Aw(c, f, Iv.J.Xj);
        D || ((D = !0), k());
      }
      if (f[He.Bl]) k();
      else {
        var x = uf(f, c, []),
          y = x[He.Sk];
        if (y != null)
          for (var A = 0; A < y.length; A++)
            if (!W(y[A])) {
              k();
              return;
            }
        var C = Ax(c.qc, String(f[He.ra]), Number(f[He.Ie]), x[He.METADATA]),
          D = !1;
        x.vtp_gtmOnSuccess = function () {
          if (!D) {
            D = !0;
            var J = nb() - G;
            dy(c.id, hf[a], "5");
            Bx(c.qc, C, "success", J);
            S(88) && Aw(c, f, Iv.J.Zj);
            g();
          }
        };
        x.vtp_gtmOnFailure = function () {
          if (!D) {
            D = !0;
            var J = nb() - G;
            dy(c.id, hf[a], "6");
            Bx(c.qc, C, "failure", J);
            S(88) && Aw(c, f, Iv.J.Yj);
            k();
          }
        };
        x.vtp_gtmTagId = f.tag_id;
        x.vtp_gtmEventId = c.id;
        c.priorityId && (x.vtp_gtmPriorityId = c.priorityId);
        dy(c.id, f, "1");
        S(88) && zw(c, f);
        var G = nb();
        try {
          xf(x, { event: c, index: a, type: 1 });
        } catch (J) {
          w(J);
        }
        S(88) && Aw(c, f, Iv.J.bk);
      }
    }
    var f = hf[a],
      g = b.onSuccess,
      k = b.onFailure,
      m = b.terminate;
    if (c.isBlocked(f)) return null;
    var n = wf(f[He.dk], c, []);
    if (n && n.length) {
      var p = n[0],
        q = fy(p.index, { onSuccess: g, onFailure: k, terminate: m }, c, d);
      if (!q) return null;
      g = q;
      k = p.jk === 2 ? m : q;
    }
    if (f[He.Oj] || f[He.Dl]) {
      var r = f[He.Oj] ? jf : c.tn,
        u = g,
        v = k;
      if (!r[a]) {
        var t = hy(a, r, pb(e));
        g = t.onSuccess;
        k = t.onFailure;
      }
      return function () {
        r[a](u, v);
      };
    }
    return e;
  }
  function hy(a, b, c) {
    var d = [],
      e = [];
    b[a] = iy(d, e, c);
    return {
      onSuccess: function () {
        b[a] = jy;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      onFailure: function () {
        b[a] = ky;
        for (var f = 0; f < e.length; f++) e[f]();
      },
    };
  }
  function iy(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }
  function jy(a) {
    a();
  }
  function ky(a, b) {
    b();
  }
  var ny = function (a, b) {
    for (var c = [], d = 0; d < hf.length; d++)
      if (a[d]) {
        var e = hf[d];
        var f = Dx(b.qc);
        try {
          var g = fy(d, { onSuccess: f, onFailure: f, terminate: f }, b, d);
          if (g) {
            var k = e[He.ra];
            if (!k)
              throw Error("Error: No function name given for function call.");
            var m = kf[k];
            c.push({
              Gk: d,
              xk: (m ? m.priorityOverride || 0 : 0) || Zw(e[He.ra], 1) || 0,
              execute: g,
            });
          } else ly(d, b), f();
        } catch (p) {
          f();
        }
      }
    c.sort(my);
    for (var n = 0; n < c.length; n++) c[n].execute();
    return c.length > 0;
  };
  function my(a, b) {
    var c,
      d = b.xk,
      e = a.xk;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (c !== 0) f = c;
    else {
      var g = a.Gk,
        k = b.Gk;
      f = g > k ? 1 : g < k ? -1 : 0;
    }
    return f;
  }
  function ly(a, b) {
    if (Tj) {
      var c = function (d) {
        var e = b.isBlocked(hf[d]) ? "3" : "4",
          f = wf(hf[d][He.Wj], b, []);
        f && f.length && c(f[0].index);
        dy(b.id, hf[d], e);
        var g = wf(hf[d][He.dk], b, []);
        g && g.length && c(g[0].index);
      };
      c(a);
    }
  }
  var qy = !1,
    oy;
  function sy(a) {
    var b = a["gtm.uniqueEventId"],
      c = a["gtm.priorityId"],
      d = a.event;
    if (S(88)) {
    }
    if (d === "gtm.js") {
      if (qy) return !1;
      qy = !0;
    }
    var e = !1,
      f = cx(),
      g = Rc(a, null);
    if (
      !f.every(function (u) {
        return u({ originalEventData: g });
      })
    ) {
      if (d !== "gtm.js" && d !== "gtm.init" && d !== "gtm.init_consent")
        return !1;
      e = !0;
    }
    Tx(b, d);
    var k = a.eventCallback,
      m = a.eventTimeout,
      n = {
        id: b,
        priorityId: c,
        name: d,
        isBlocked: ty(g, e),
        tn: [],
        logMacroError: function () {
          U(6);
          ml(0);
        },
        cachedModelValues: uy(),
        qc: new zx(function () {
          if (S(88)) {
          }
          k && k.apply(k, Array.prototype.slice.call(arguments, 0));
        }, m),
        originalEventData: g,
      };
    S(101) && Tj && (n.reportMacroDiscrepancy = Yx);
    S(88) && vw(n.id, n.name);
    var p = Df(n);
    S(88) && ww(n.id, n.name);
    e && (p = vy(p));
    if (S(88)) {
    }
    var q = ny(p, n),
      r = !1;
    Ex(n.qc);
    (d !== "gtm.js" && d !== "gtm.sync") || Kx();
    return wy(p, q) || r;
  }
  function uy() {
    var a = {};
    a.event = rj("event", 1);
    a.ecommerce = rj("ecommerce", 1);
    a.gtm = rj("gtm");
    a.eventModel = rj("eventModel");
    return a;
  }
  function ty(a, b) {
    var c = jx();
    return function (d) {
      if (c(d)) return !0;
      var e = d && d[He.ra];
      if (!e || typeof e !== "string") return !0;
      e = e.replace(/^_*/, "");
      var f,
        g = ok();
      f = ax().getRestrictions(0, g);
      var k = a;
      b &&
        ((k = Rc(a, null)), (k["gtm.uniqueEventId"] = Number.MAX_SAFE_INTEGER));
      for (var m = $i[e] || [], n = l(f), p = n.next(); !p.done; p = n.next()) {
        var q = p.value;
        try {
          if (!q({ entityId: e, securityGroups: m, originalEventData: k }))
            return !0;
        } catch (r) {
          return !0;
        }
      }
      return !1;
    };
  }
  function vy(a) {
    for (var b = [], c = 0; c < a.length; c++)
      if (a[c]) {
        var d = String(hf[c][He.ra]);
        if (Li[d] || hf[c][He.El] !== void 0 || Zw(d, 2)) b[c] = !0;
      }
    return b;
  }
  function wy(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++)
      if (a[c] && hf[c] && !Mi[String(hf[c][He.ra])]) return !0;
    return !1;
  }
  var xy = 0;
  function yy(a, b) {
    return arguments.length === 1 ? zy("set", a) : zy("set", a, b);
  }
  function Ay(a, b) {
    return arguments.length === 1 ? zy("config", a) : zy("config", a, b);
  }
  function By(a, b, c) {
    c = c || {};
    c[O.g.kc] = a;
    return zy("event", b, c);
  }
  function zy() {
    return arguments;
  }
  var Cy = function () {
    this.messages = [];
    this.j = [];
  };
  Cy.prototype.enqueue = function (a, b, c) {
    var d = this.messages.length + 1;
    a["gtm.uniqueEventId"] = b;
    a["gtm.priorityId"] = d;
    var e = Object.assign({}, c, {
        eventId: b,
        priorityId: d,
        fromContainerExecution: !0,
      }),
      f = { message: a, notBeforeEventId: b, priorityId: d, messageContext: e };
    this.messages.push(f);
    for (var g = 0; g < this.j.length; g++)
      try {
        this.j[g](f);
      } catch (k) {}
  };
  Cy.prototype.listen = function (a) {
    this.j.push(a);
  };
  Cy.prototype.get = function () {
    for (var a = {}, b = 0; b < this.messages.length; b++) {
      var c = this.messages[b],
        d = a[c.notBeforeEventId];
      d || ((d = []), (a[c.notBeforeEventId] = d));
      d.push(c);
    }
    return a;
  };
  Cy.prototype.prune = function (a) {
    for (var b = [], c = [], d = 0; d < this.messages.length; d++) {
      var e = this.messages[d];
      e.notBeforeEventId === a ? b.push(e) : c.push(e);
    }
    this.messages = c;
    return b;
  };
  function Dy(a, b, c) {
    c.eventMetadata = c.eventMetadata || {};
    c.eventMetadata.source_canonical_id = Mf.canonicalContainerId;
    Ey().enqueue(a, b, c);
  }
  function Fy() {
    var a = Yy;
    Ey().listen(a);
  }
  function Ey() {
    var a = Ki.mb;
    a || ((a = new Cy()), (Ki.mb = a));
    return a;
  }
  var Zy = {},
    $y = {};
  function az(a, b) {
    for (
      var c = [], d = [], e = {}, f = 0;
      f < a.length;
      e = { hi: void 0, Rh: void 0 }, f++
    ) {
      var g = a[f];
      if (g.indexOf("-") >= 0) {
        if (((e.hi = Wl(g, b)), e.hi)) {
          var k = lk();
          bb(
            k,
            (function (r) {
              return function (u) {
                return r.hi.destinationId === u;
              };
            })(e)
          )
            ? c.push(g)
            : d.push(g);
        }
      } else {
        var m = Zy[g] || [];
        e.Rh = {};
        m.forEach(
          (function (r) {
            return function (u) {
              r.Rh[u] = !0;
            };
          })(e)
        );
        for (var n = ik(), p = 0; p < n.length; p++)
          if (e.Rh[n[p]]) {
            c = c.concat(lk());
            break;
          }
        var q = $y[g] || [];
        q.length && (c = c.concat(q));
      }
    }
    return { Pm: c, Sm: d };
  }
  function bz(a) {
    gb(Zy, function (b, c) {
      var d = c.indexOf(a);
      d >= 0 && c.splice(d, 1);
    });
  }
  function cz(a) {
    gb($y, function (b, c) {
      var d = c.indexOf(a);
      d >= 0 && c.splice(d, 1);
    });
  }
  var dz = "HA GF G UA AW DC MC".split(" "),
    ez = !1,
    fz = !1,
    gz = !1,
    hz = !1;
  function iz(a, b) {
    a.hasOwnProperty("gtm.uniqueEventId") ||
      Object.defineProperty(a, "gtm.uniqueEventId", { value: aj() });
    b.eventId = a["gtm.uniqueEventId"];
    b.priorityId = a["gtm.priorityId"];
    return { eventId: b.eventId, priorityId: b.priorityId };
  }
  var jz = void 0,
    kz = void 0;
  function lz(a, b, c) {
    var d = Rc(a, null);
    d.eventId = void 0;
    d.inheritParentConfig = void 0;
    Object.keys(b).some(function (f) {
      return b[f] !== void 0;
    }) && U(136);
    var e = Rc(b, null);
    Rc(c, e);
    Dy(Ay(ik()[0], e), a.eventId, d);
  }
  function mz(a) {
    for (var b = l([O.g.vd, O.g.Sb]), c = b.next(); !c.done; c = b.next()) {
      var d = c.value,
        e = (a && a[d]) || Ym.j[d];
      if (e) return e;
    }
  }
  var nz = [
      O.g.vd,
      O.g.Sb,
      O.g.Dc,
      O.g.vb,
      O.g.Ab,
      O.g.Da,
      O.g.ya,
      O.g.Na,
      O.g.Ra,
      O.g.wb,
    ],
    oz = {
      config: function (a, b) {
        var c = iz(a, b);
        if (!(a.length < 2) && z(a[1])) {
          var d = {};
          if (a.length > 2) {
            if ((a[2] !== void 0 && !Qc(a[2])) || a.length > 3) return;
            d = a[2];
          }
          var e = Wl(a[1], b.isGtmEvent);
          if (e) {
            var f, g, k;
            a: {
              if (!ek.Ce) {
                var m = qk(rk());
                if (Ck(m)) {
                  var n = m.parent,
                    p = n.isDestination;
                  k = { Ym: qk(n), Om: p };
                  break a;
                }
              }
              k = void 0;
            }
            var q = k;
            q && ((f = q.Ym), (g = q.Om));
            Tx(c.eventId, "gtag.config");
            var r = e.destinationId,
              u = e.id !== r;
            if (u ? lk().indexOf(r) === -1 : ik().indexOf(r) === -1) {
              if (!b.inheritParentConfig && !d[O.g.Ob]) {
                var v = mz(d);
                if (u)
                  px(r, v, {
                    source: 2,
                    fromContainerExecution: b.fromContainerExecution,
                  });
                else if (f !== void 0 && f.containers.indexOf(r) !== -1) {
                  var t = d;
                  jz ? lz(b, t, jz) : kz || (kz = Rc(t, null));
                } else
                  mx(r, v, !0, {
                    source: 2,
                    fromContainerExecution: b.fromContainerExecution,
                  });
              }
            } else {
              if (f && (U(128), g && U(130), b.inheritParentConfig)) {
                var w;
                var x = d;
                kz
                  ? (lz(b, kz, x), (w = !1))
                  : ((!x[O.g.nc] && Oi && jz) || (jz = Rc(x, null)), (w = !0));
                w && f.containers && f.containers.join(",");
                return;
              }
              var y = d;
              if (!gz && ((gz = !0), fz))
                for (var A = l(nz), C = A.next(); !C.done; C = A.next())
                  if (y.hasOwnProperty(C.value)) {
                    ll("erc");
                    break;
                  }
              Uj && !fk && (xy === 1 && (Gk.mcc = !1), (xy = 2));
              il = !0;
              if (Oi && !u && !d[O.g.nc]) {
                var D = hz;
                hz = !0;
                if (D) return;
              }
              ez || U(43);
              if (!b.noTargetGroup)
                if (u) {
                  cz(e.id);
                  var G = e.id,
                    J = d[O.g.qe] || "default";
                  J = String(J).split(",");
                  for (var F = 0; F < J.length; F++) {
                    var T = $y[J[F]] || [];
                    $y[J[F]] = T;
                    T.indexOf(G) < 0 && T.push(G);
                  }
                } else {
                  bz(e.id);
                  var N = e.id,
                    Z = d[O.g.qe] || "default";
                  Z = Z.toString().split(",");
                  for (var ba = 0; ba < Z.length; ba++) {
                    var fa = Zy[Z[ba]] || [];
                    Zy[Z[ba]] = fa;
                    fa.indexOf(N) < 0 && fa.push(N);
                  }
                }
              delete d[O.g.qe];
              var R = b.eventMetadata || {};
              R.hasOwnProperty("is_external_event") ||
                (R.is_external_event = !b.fromContainerExecution);
              b.eventMetadata = R;
              delete d[O.g.nd];
              for (var M = u ? [e.id] : lk(), ea = 0; ea < M.length; ea++) {
                var ha = d,
                  da = M[ea],
                  ta = Rc(b, null),
                  Na = Wl(da, ta.isGtmEvent);
                Na && Ym.push("config", [ha], Na, ta);
              }
            }
          }
        }
      },
      consent: function (a, b) {
        if (a.length === 3) {
          U(39);
          var c = iz(a, b),
            d = a[1],
            e = a[2];
          b.fromContainerExecution || (e[O.g.O] && U(139), e[O.g.wa] && U(140));
          d === "default"
            ? zl(e)
            : d === "update"
            ? Bl(e, c)
            : d === "declare" && b.fromContainerExecution && yl(e);
        }
      },
      event: function (a, b) {
        var c = a[1];
        if (!(a.length < 2) && z(c)) {
          var d = void 0;
          if (a.length > 2) {
            if ((!Qc(a[2]) && a[2] !== void 0) || a.length > 3) return;
            d = a[2];
          }
          var e = d,
            f = {},
            g = ((f.event = c), f);
          e &&
            ((g.eventModel = Rc(e, null)),
            e[O.g.nd] && (g.eventCallback = e[O.g.nd]),
            e[O.g.ne] && (g.eventTimeout = e[O.g.ne]));
          var k = iz(a, b),
            m = k.eventId,
            n = k.priorityId;
          g["gtm.uniqueEventId"] = m;
          n && (g["gtm.priorityId"] = n);
          if (c === "optimize.callback")
            return (g.eventModel = g.eventModel || {}), g;
          var p;
          var q = d,
            r = q && q[O.g.kc];
          r === void 0 &&
            ((r = mj(O.g.kc, 2)), r === void 0 && (r = "default"));
          if (z(r) || Array.isArray(r)) {
            var u;
            u = b.isGtmEvent
              ? z(r)
                ? [r]
                : r
              : r.toString().replace(/\s+/g, "").split(",");
            var v = az(u, b.isGtmEvent),
              t = v.Pm,
              w = v.Sm;
            if (w.length)
              for (var x = mz(q), y = 0; y < w.length; y++) {
                var A = Wl(w[y], b.isGtmEvent);
                A &&
                  px(A.destinationId, x, {
                    source: 3,
                    fromContainerExecution: b.fromContainerExecution,
                  });
              }
            p = Xl(t, b.isGtmEvent);
          } else p = void 0;
          var C = p;
          if (C) {
            var D;
            !C.length ||
              ((D = b.eventMetadata) == null ? 0 : D.em_event) ||
              (fz = !0);
            Tx(m, c);
            for (var G = [], J = 0; J < C.length; J++) {
              var F = C[J],
                T = Rc(b, null);
              if (dz.indexOf(sk(F.prefix)) !== -1) {
                var N = Rc(d, null),
                  Z = T.eventMetadata || {};
                Z.hasOwnProperty("is_external_event") ||
                  (Z.is_external_event = !T.fromContainerExecution);
                T.eventMetadata = Z;
                delete N[O.g.nd];
                Zm(c, N, F.id, T);
                Uj && !fk && xy === 0 && (Ik("mcc", "1"), (xy = 1));
                il = !0;
              }
              G.push(F.id);
            }
            g.eventModel = g.eventModel || {};
            C.length > 0
              ? (g.eventModel[O.g.kc] = G.join())
              : delete g.eventModel[O.g.kc];
            ez || U(43);
            b.noGtmEvent === void 0 &&
              b.eventMetadata &&
              b.eventMetadata.syn_or_mod &&
              (b.noGtmEvent = !0);
            g.eventModel[O.g.jc] && (b.noGtmEvent = !0);
            return b.noGtmEvent ? void 0 : g;
          }
        }
      },
      get: function (a, b) {
        U(53);
        if (a.length === 4 && z(a[1]) && z(a[2]) && Za(a[3])) {
          var c = Wl(a[1], b.isGtmEvent),
            d = String(a[2]),
            e = a[3];
          if (c) {
            ez || U(43);
            var f = mz();
            if (
              !bb(lk(), function (k) {
                return c.destinationId === k;
              })
            )
              px(c.destinationId, f, {
                source: 4,
                fromContainerExecution: b.fromContainerExecution,
              });
            else if (dz.indexOf(sk(c.prefix)) !== -1) {
              il = !0;
              iz(a, b);
              var g = {};
              Rc(((g[O.g.yb] = d), (g[O.g.Mb] = e), g), null);
              $m(
                d,
                function (k) {
                  H(function () {
                    e(k);
                  });
                },
                c.id,
                b
              );
            }
          }
        }
      },
      js: function (a, b) {
        if (a.length === 2 && a[1].getTime) {
          ez = !0;
          var c = iz(a, b),
            d = c.eventId,
            e = c.priorityId,
            f = {};
          return (
            (f.event = "gtm.js"),
            (f["gtm.start"] = a[1].getTime()),
            (f["gtm.uniqueEventId"] = d),
            (f["gtm.priorityId"] = e),
            f
          );
        }
      },
      policy: function (a) {
        if (a.length === 3 && z(a[1]) && Za(a[2])) {
          if ((Jf(a[1], a[2]), U(74), a[1] === "all")) {
            U(75);
            var b = !1;
            try {
              b = a[2](mk(), "unknown", {});
            } catch (c) {}
            b || U(76);
          }
        } else U(73);
      },
      set: function (a, b) {
        var c = void 0;
        a.length === 2 && Qc(a[1])
          ? (c = Rc(a[1], null))
          : a.length === 3 &&
            z(a[1]) &&
            ((c = {}),
            Qc(a[2]) || Array.isArray(a[2])
              ? (c[a[1]] = Rc(a[2], null))
              : (c[a[1]] = a[2]));
        if (c) {
          var d = iz(a, b),
            e = d.eventId,
            f = d.priorityId;
          Rc(c, null);
          var g = Rc(c, null);
          Ym.push("set", [g], void 0, b);
          c["gtm.uniqueEventId"] = e;
          f && (c["gtm.priorityId"] = f);
          delete c.event;
          b.overwriteModelFields = !0;
          return c;
        }
      },
    },
    pz = { policy: !0 };
  var rz = function (a) {
    if (qz(a)) return a;
    this.value = a;
  };
  rz.prototype.getUntrustedMessageValue = function () {
    return this.value;
  };
  var qz = function (a) {
    return !a || Oc(a) !== "object" || Qc(a)
      ? !1
      : "getUntrustedMessageValue" in a;
  };
  rz.prototype.getUntrustedMessageValue = rz.prototype.getUntrustedMessageValue;
  var sz = !1,
    tz = [];
  function uz() {
    if (!sz) {
      sz = !0;
      for (var a = 0; a < tz.length; a++) H(tz[a]);
    }
  }
  function vz(a) {
    sz ? H(a) : tz.push(a);
  }
  var wz = 0,
    xz = {},
    yz = [],
    zz = [],
    Az = !1,
    Bz = !1;
  function Cz(a, b) {
    return (
      a.messageContext.eventId - b.messageContext.eventId ||
      a.messageContext.priorityId - b.messageContext.priorityId
    );
  }
  function Dz(a, b, c) {
    a.eventCallback = b;
    c && (a.eventTimeout = c);
    return Ez(a);
  }
  function Fz(a, b) {
    if (!$a(b) || b < 0) b = 0;
    var c = Ki[Ji.qb],
      d = 0,
      e = !1,
      f = void 0;
    f = B.setTimeout(function () {
      e || ((e = !0), a());
      f = void 0;
    }, b);
    return function () {
      var g = c ? c.subscribers : 1;
      ++d === g &&
        (f && (B.clearTimeout(f), (f = void 0)), e || (a(), (e = !0)));
    };
  }
  function Gz(a, b) {
    var c = a._clear || b.overwriteModelFields;
    gb(a, function (e, f) {
      e !== "_clear" && (c && pj(e), pj(e, f));
    });
    Xi || (Xi = a["gtm.start"]);
    var d = a["gtm.uniqueEventId"];
    if (!a.event) return !1;
    typeof d !== "number" &&
      ((d = aj()), (a["gtm.uniqueEventId"] = d), pj("gtm.uniqueEventId", d));
    return sy(a);
  }
  function Hz(a) {
    if (a == null || typeof a !== "object") return !1;
    if (a.event) return !0;
    if (hb(a)) {
      var b = a[0];
      if (b === "config" || b === "event" || b === "js" || b === "get")
        return !0;
    }
    return !1;
  }
  function Iz() {
    var a;
    if (zz.length) a = zz.shift();
    else if (yz.length) a = yz.shift();
    else return;
    var b;
    var c = a;
    if (Az || !Hz(c.message)) b = c;
    else {
      Az = !0;
      var d = c.message["gtm.uniqueEventId"];
      typeof d !== "number" && (d = c.message["gtm.uniqueEventId"] = aj());
      var e = {},
        f = {
          message:
            ((e.event = "gtm.init_consent"),
            (e["gtm.uniqueEventId"] = d - 2),
            e),
          messageContext: { eventId: d - 2 },
        },
        g = {},
        k = {
          message:
            ((g.event = "gtm.init"), (g["gtm.uniqueEventId"] = d - 1), g),
          messageContext: { eventId: d - 1 },
        };
      yz.unshift(k, c);
      Uj && Mk();
      b = f;
    }
    return b;
  }
  function Jz() {
    for (var a = !1, b; !Bz && (b = Iz()); ) {
      Bz = !0;
      delete jj.eventModel;
      lj();
      var c = b,
        d = c.message,
        e = c.messageContext;
      if (d == null) Bz = !1;
      else {
        e.fromContainerExecution && qj();
        try {
          if (Za(d))
            try {
              d.call(nj);
            } catch (v) {}
          else if (Array.isArray(d)) {
            if (z(d[0])) {
              var f = d[0].split("."),
                g = f.pop(),
                k = d.slice(1),
                m = mj(f.join("."), 2);
              if (m != null)
                try {
                  m[g].apply(m, k);
                } catch (v) {}
            }
          } else {
            var n = void 0;
            if (hb(d))
              a: {
                if (d.length && z(d[0])) {
                  var p = oz[d[0]];
                  if (p && (!e.fromContainerExecution || !pz[d[0]])) {
                    n = p(d, e);
                    break a;
                  }
                }
                n = void 0;
              }
            else n = d;
            n && (a = Gz(n, e) || a);
          }
        } finally {
          e.fromContainerExecution && lj(!0);
          var q = d["gtm.uniqueEventId"];
          if (typeof q === "number") {
            for (var r = xz[String(q)] || [], u = 0; u < r.length; u++)
              zz.push(Kz(r[u]));
            r.length && zz.sort(Cz);
            delete xz[String(q)];
            q > wz && (wz = q);
          }
          Bz = !1;
        }
      }
    }
    return !a;
  }
  function Lz() {
    if (S(88)) {
      var a = Mz();
    }
    var b = Jz();
    if (S(88)) {
    }
    try {
      var c = mk(),
        d = B[Ji.qb].hide;
      if (d && d[c] !== void 0 && d.end) {
        d[c] = !1;
        var e = !0,
          f;
        for (f in d)
          if (d.hasOwnProperty(f) && d[f] === !0) {
            e = !1;
            break;
          }
        e && (d.end(), (d.end = null));
      }
    } catch (g) {}
    return b;
  }
  function Yy(a) {
    if (wz < a.notBeforeEventId) {
      var b = String(a.notBeforeEventId);
      xz[b] = xz[b] || [];
      xz[b].push(a);
    } else
      zz.push(Kz(a)),
        zz.sort(Cz),
        H(function () {
          Bz || Jz();
        });
  }
  function Kz(a) {
    return { message: a.message, messageContext: a.messageContext };
  }
  function Nz() {
    function a(f) {
      var g = {};
      if (qz(f)) {
        var k = f;
        f = qz(k) ? k.getUntrustedMessageValue() : void 0;
        g.fromContainerExecution = !0;
      }
      return { message: f, messageContext: g };
    }
    var b = gc(Ji.qb, []),
      c = (Ki[Ji.qb] = Ki[Ji.qb] || {});
    c.pruned === !0 && U(83);
    xz = Ey().get();
    Fy();
    vx(function () {
      if (!c.gtmDom) {
        c.gtmDom = !0;
        var f = {};
        b.push(((f.event = "gtm.dom"), f));
      }
    });
    vz(function () {
      if (!c.gtmLoad) {
        c.gtmLoad = !0;
        var f = {};
        b.push(((f.event = "gtm.load"), f));
      }
    });
    c.subscribers = (c.subscribers || 0) + 1;
    var d = b.push;
    b.push = function () {
      var f;
      if (Ki.SANDBOXED_JS_SEMAPHORE > 0) {
        f = [];
        for (var g = 0; g < arguments.length; g++) f[g] = new rz(arguments[g]);
      } else f = [].slice.call(arguments, 0);
      var k = f.map(function (q) {
        return a(q);
      });
      yz.push.apply(yz, k);
      var m = d.apply(b, f),
        n = Math.max(100, Number("1000") || 300);
      if (this.length > n)
        for (U(4), c.pruned = !0; this.length > n; ) this.shift();
      var p = typeof m !== "boolean" || m;
      return Jz() && p;
    };
    var e = b.slice(0).map(function (f) {
      return a(f);
    });
    yz.push.apply(yz, e);
    if (Mz()) {
      if (S(88)) {
      }
      H(Lz);
    }
  }
  var Mz = function () {
      var a = !0;
      return a;
    },
    Ez = function (a) {
      return B[Ji.qb].push(a);
    };
  function Oz(a) {
    if (a == null || a.length === 0) return !1;
    var b = Number(a),
      c = nb();
    return b < c + 3e5 && b > c - 9e5;
  }
  function Pz(a) {
    return a && a.indexOf("pending:") === 0 ? Oz(a.substr(8)) : !1;
  }
  var Qz = /^(https?:)?\/\//;
  function kA() {}
  var lA = function () {};
  lA.prototype.toString = function () {
    return "undefined";
  };
  var mA = new lA();
  var oA = function () {
      (Ki.rm = Ki.rm || {})[ok()] = function (a) {
        if (nA.hasOwnProperty(a)) return nA[a];
      };
    },
    rA = function (a, b, c) {
      if (a instanceof pA) {
        var d = a,
          e = d.resolve,
          f = b,
          g = String(aj());
        qA[g] = [f, c];
        a = e.call(d, g);
        b = Ya;
      }
      return { nk: a, onSuccess: b };
    },
    sA = function (a) {
      var b = a ? 0 : 1;
      return function (c) {
        U(a ? 134 : 135);
        var d = qA[c];
        if (d && typeof d[b] === "function") d[b]();
        qA[c] = void 0;
      };
    },
    pA = function (a) {
      this.valueOf = this.toString;
      this.resolve = function (b) {
        for (var c = [], d = 0; d < a.length; d++)
          c.push(a[d] === mA ? b : a[d]);
        return c.join("");
      };
    };
  pA.prototype.toString = function () {
    return this.resolve("undefined");
  };
  var nA = {},
    qA = {};
  function tA(a, b) {
    function c(g) {
      var k = Fj(g),
        m = zj(k, "protocol"),
        n = zj(k, "host", !0),
        p = zj(k, "port"),
        q = zj(k, "path").toLowerCase().replace(/\/$/, "");
      if (
        m === void 0 ||
        (m === "http" && p === "80") ||
        (m === "https" && p === "443")
      )
        (m = "web"), (p = "default");
      return [m, n, p, q];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
      if (d[f] !== e[f]) return !1;
    return !0;
  }
  function uA(a) {
    return vA(a) ? 1 : 0;
  }
  function vA(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && Array.isArray(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = Rc(a, {});
        Rc({ arg1: c[d], any_of: void 0 }, e);
        if (uA(e)) return !0;
      }
      return !1;
    }
    switch (a["function"]) {
      case "_cn":
        return lg(b, c);
      case "_css":
        var f;
        a: {
          if (b)
            try {
              for (var g = 0; g < hg.length; g++) {
                var k = hg[g];
                if (b[k] != null) {
                  f = b[k](c);
                  break a;
                }
              }
            } catch (m) {}
          f = !1;
        }
        return f;
      case "_ew":
        return ig(b, c);
      case "_eq":
        return mg(b, c);
      case "_ge":
        return ng(b, c);
      case "_gt":
        return pg(b, c);
      case "_lc":
        return String(b).split(",").indexOf(String(c)) >= 0;
      case "_le":
        return og(b, c);
      case "_lt":
        return qg(b, c);
      case "_re":
        return kg(b, c, a.ignore_case);
      case "_sw":
        return rg(b, c);
      case "_um":
        return tA(b, c);
    }
    return !1;
  }
  function wA() {
    var a;
    a = a === void 0 ? "" : a;
    var b, c;
    return (
      (b = data) == null ? 0 : (c = b.blob) == null ? 0 : c.hasOwnProperty(1)
    )
      ? String(data.blob[1])
      : a;
  }
  function xA() {
    var a = [
      ["cv", S(121) ? wA() : "242"],
      ["rv", Ji.zh],
      [
        "tc",
        hf.filter(function (b) {
          return b;
        }).length,
      ],
    ];
    Ji.Fe && a.push(["x", Ji.Fe]);
    ej() && a.push(["tag_exp", ej()]);
    return a;
  }
  var yA = {},
    zA = {};
  function AA() {
    var a = 0;
    return function (b) {
      switch (b) {
        case 1:
          a |= 1;
          break;
        case 2:
          a |= 2;
          break;
        case 3:
          a |= 4;
      }
      return a;
    };
  }
  function BA(a, b, c, d) {
    if (Tj) {
      var e = String(c) + b;
      yA[a] = yA[a] || [];
      yA[a].push(e);
      zA[a] = zA[a] || [];
      zA[a].push(d + b);
    }
  }
  function CA(a) {
    var b = a.eventId,
      c = a.Tc,
      d = [],
      e = yA[b] || [];
    e.length && d.push(["hf", e.join(".")]);
    var f = zA[b] || [];
    f.length && d.push(["ht", f.join(".")]);
    c && (delete yA[b], delete zA[b]);
    return d;
  }
  function DA() {
    return !1;
  }
  function EA() {
    var a = {};
    return function (b, c, d) {};
  }
  function FA() {
    var a = GA;
    return function (b, c, d) {
      var e = d && d.event;
      (b === "__html" && S(92)) || HA(c);
      var f = sb(b, "__cvt_") ? void 0 : 1,
        g = new Ma();
      gb(c, function (r, u) {
        var v = dd(u, void 0, f);
        v === void 0 && u !== void 0 && U(44);
        g.set(r, v);
      });
      a.j.j.C = Bf();
      var k = {
        gk: Qf(b),
        eventId: e == null ? void 0 : e.id,
        priorityId: e !== void 0 ? e.priorityId : void 0,
        Je:
          e !== void 0
            ? function (r) {
                e.qc.Je(r);
              }
            : void 0,
        nb: function () {
          return b;
        },
        log: function () {},
        gm: {
          index: d == null ? void 0 : d.index,
          type: d == null ? void 0 : d.type,
          name: d == null ? void 0 : d.name,
        },
        mn: !!Zw(b, 3),
        originalEventData: e == null ? void 0 : e.originalEventData,
      };
      e &&
        e.cachedModelValues &&
        (k.cachedModelValues = {
          gtm: e.cachedModelValues.gtm,
          ecommerce: e.cachedModelValues.ecommerce,
        });
      if (DA()) {
        var m = EA(),
          n,
          p;
        k.Xa = {
          si: [],
          Ke: {},
          Eb: function (r, u, v) {
            u === 1 && (n = r);
            u === 7 && (p = v);
            m(r, u, v);
          },
          ug: $g(),
        };
        k.log = function (r) {
          var u = za.apply(1, arguments);
          n && m(n, 4, { level: r, source: p, message: u });
        };
      }
      var q = Be(a, k, [b, g]);
      a.j.j.C = void 0;
      q instanceof Ba && q.type === "return" && (q = q.data);
      return I(q, void 0, f);
    };
  }
  function HA(a) {
    var b = a.gtmOnSuccess,
      c = a.gtmOnFailure;
    Za(b) &&
      (a.gtmOnSuccess = function () {
        H(b);
      });
    Za(c) &&
      (a.gtmOnFailure = function () {
        H(c);
      });
  }
  function IA(a) {}
  IA.F = "internal.addAdsClickIds";
  function JA(a, b) {
    var c = this;
  }
  JA.T = "addConsentListener";
  var KA = !1;
  function LA(a) {
    for (var b = 0; b < a.length; ++b)
      if (KA)
        try {
          a[b]();
        } catch (c) {
          U(77);
        }
      else a[b]();
  }
  function MA(a, b, c) {
    var d = this,
      e;
    return e;
  }
  MA.F = "internal.addDataLayerEventListener";
  function NA(a, b, c) {}
  NA.T = "addDocumentEventListener";
  function OA(a, b, c, d) {}
  OA.T = "addElementEventListener";
  function PA(a) {
    return a.D.j;
  }
  function QA(a) {}
  QA.T = "addEventCallback";
  var RA = function (a) {
      return typeof a === "string" ? a : String(aj());
    },
    UA = function (a, b) {
      SA(a, "init", !1) || (TA(a, "init", !0), b());
    },
    SA = function (a, b, c) {
      var d = VA(a);
      return ob(d, b, c);
    },
    WA = function (a, b, c, d) {
      var e = VA(a),
        f = ob(e, b, d);
      e[b] = c(f);
    },
    TA = function (a, b, c) {
      VA(a)[b] = c;
    },
    VA = function (a) {
      Ki.hasOwnProperty("autoEventsSettings") || (Ki.autoEventsSettings = {});
      var b = Ki.autoEventsSettings;
      b.hasOwnProperty(a) || (b[a] = {});
      return b[a];
    },
    XA = function (a, b, c) {
      var d = {
        event: b,
        "gtm.element": a,
        "gtm.elementClasses": Cc(a, "className"),
        "gtm.elementId": a.for || tc(a, "id") || "",
        "gtm.elementTarget": a.formTarget || Cc(a, "target") || "",
      };
      c && (d["gtm.triggers"] = c.join(","));
      d["gtm.elementUrl"] =
        (a.attributes && a.attributes.formaction ? a.formAction : "") ||
        a.action ||
        Cc(a, "href") ||
        a.src ||
        a.code ||
        a.codebase ||
        "";
      return d;
    };
  var ZA = function (a, b, c) {
      if (!a.elements) return 0;
      for (var d = b.dataset[c], e = 0, f = 1; e < a.elements.length; e++) {
        var g = a.elements[e];
        if (YA(g)) {
          if (g.dataset[c] === d) return f;
          f++;
        }
      }
      return 0;
    },
    $A = function (a) {
      if (a.form) {
        var b;
        return ((b = a.form) == null ? 0 : b.tagName)
          ? a.form
          : E.getElementById(a.form);
      }
      return wc(a, ["form"], 100);
    },
    YA = function (a) {
      var b = a.tagName.toLowerCase();
      return aB.indexOf(b) < 0 ||
        (b === "input" && bB.indexOf(a.type.toLowerCase()) >= 0)
        ? !1
        : !0;
    },
    aB = ["input", "select", "textarea"],
    bB = ["button", "hidden", "image", "reset", "submit"];
  function fB(a) {}
  fB.F = "internal.addFormAbandonmentListener";
  function gB(a, b, c, d) {}
  gB.F = "internal.addFormData";
  var hB = {},
    iB = [],
    jB = {},
    kB = 0,
    lB = 0;
  function sB(a, b) {}
  sB.F = "internal.addFormInteractionListener";
  function zB(a, b) {}
  zB.F = "internal.addFormSubmitListener";
  function EB(a) {}
  EB.F = "internal.addGaSendListener";
  function FB(a) {
    if (!a) return {};
    var b = a.gm;
    return xx(b.type, b.index, b.name);
  }
  function GB(a) {
    return a ? { originatingEntity: FB(a) } : {};
  }
  var IB = function (a, b, c) {
      HB().updateZone(a, b, c);
    },
    KB = function (a, b, c, d, e, f) {
      var g = HB();
      c = c && rb(c, JB);
      for (var k = g.createZone(a, c), m = 0; m < b.length; m++) {
        var n = String(b[m]);
        if (g.registerChild(n, mk(), k)) {
          var p = n,
            q = a,
            r = d,
            u = e,
            v = f;
          if (sb(p, "GTM-"))
            mx(p, void 0, !1, { source: 1, fromContainerExecution: !0 });
          else {
            var t = zy("js", mb());
            mx(p, void 0, !0, { source: 1, fromContainerExecution: !0 });
            var w = { originatingEntity: u, inheritParentConfig: v };
            S(127) || Dy(t, q, w);
            Dy(Ay(p, r), q, w);
          }
        }
      }
      return k;
    },
    HB = function () {
      var a = Ki.zones;
      a || (a = Ki.zones = new LB());
      return a;
    },
    MB = {
      zone: 1,
      cn: 1,
      css: 1,
      ew: 1,
      eq: 1,
      ge: 1,
      gt: 1,
      lc: 1,
      le: 1,
      lt: 1,
      re: 1,
      sw: 1,
      um: 1,
    },
    JB = {
      cl: ["ecl"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
    },
    LB = function () {
      this.j = {};
      this.C = {};
      this.H = 0;
    };
  h = LB.prototype;
  h.isActive = function (a, b) {
    for (var c, d = 0; d < a.length && !(c = this.j[a[d]]); d++);
    if (!c) return !0;
    if (!this.isActive([c.gi], b)) return !1;
    for (var e = 0; e < c.xf.length; e++) if (this.C[c.xf[e]].Jd(b)) return !0;
    return !1;
  };
  h.getIsAllowedFn = function (a, b) {
    if (!this.isActive(a, b))
      return function () {
        return !1;
      };
    for (var c, d = 0; d < a.length && !(c = this.j[a[d]]); d++);
    if (!c)
      return function () {
        return !0;
      };
    for (var e = [], f = 0; f < c.xf.length; f++) {
      var g = this.C[c.xf[f]];
      g.Jd(b) && e.push(g);
    }
    if (!e.length)
      return function () {
        return !1;
      };
    var k = this.getIsAllowedFn([c.gi], b);
    return function (m, n) {
      n = n || [];
      if (!k(m, n)) return !1;
      for (var p = 0; p < e.length; ++p) if (e[p].H(m, n)) return !0;
      return !1;
    };
  };
  h.unregisterChild = function (a) {
    for (var b = 0; b < a.length; b++) delete this.j[a[b]];
  };
  h.createZone = function (a, b) {
    var c = String(++this.H);
    this.C[c] = new NB(a, b);
    return c;
  };
  h.updateZone = function (a, b, c) {
    var d = this.C[a];
    d && d.K(b, c);
  };
  h.registerChild = function (a, b, c) {
    var d = this.j[a];
    if ((!d && Ki[a]) || (!d && xk(a)) || (d && d.gi !== b)) return !1;
    if (d) return d.xf.push(c), !1;
    this.j[a] = { gi: b, xf: [c] };
    return !0;
  };
  var NB = function (a, b) {
    this.C = null;
    this.j = [{ eventId: a, Jd: !0 }];
    if (b) {
      this.C = {};
      for (var c = 0; c < b.length; c++) this.C[b[c]] = !0;
    }
  };
  NB.prototype.K = function (a, b) {
    var c = this.j[this.j.length - 1];
    a <= c.eventId || (c.Jd !== b && this.j.push({ eventId: a, Jd: b }));
  };
  NB.prototype.Jd = function (a) {
    for (var b = this.j.length - 1; b >= 0; b--)
      if (this.j[b].eventId <= a) return this.j[b].Jd;
    return !1;
  };
  NB.prototype.H = function (a, b) {
    b = b || [];
    if (!this.C || MB[a] || this.C[a]) return !0;
    for (var c = 0; c < b.length; ++c) if (this.C[b[c]]) return !0;
    return !1;
  };
  function OB(a) {
    var b = Ki.zones;
    return b
      ? b.getIsAllowedFn(ik(), a)
      : function () {
          return !0;
        };
  }
  function PB() {
    bx(ok(), function (a) {
      var b = a.originalEventData["gtm.uniqueEventId"],
        c = Ki.zones;
      return c ? c.isActive(ik(), b) : !0;
    });
    $w(ok(), function (a) {
      var b, c;
      b = a.entityId;
      c = a.securityGroups;
      return OB(Number(a.originalEventData["gtm.uniqueEventId"]))(b, c);
    });
  }
  var QB = function (a, b) {
    this.tagId = a;
    this.Ne = b;
  };
  function RB(a, b) {
    var c = this,
      d;
    var e = function (v) {
      $w(
        v,
        function (t) {
          for (
            var w = ax().getExternalRestrictions(0, ok()),
              x = l(w),
              y = x.next();
            !y.done;
            y = x.next()
          ) {
            var A = y.value;
            if (!A(t)) return !1;
          }
          return !0;
        },
        !0
      );
      bx(
        v,
        function (t) {
          for (
            var w = ax().getExternalRestrictions(1, ok()),
              x = l(w),
              y = x.next();
            !y.done;
            y = x.next()
          ) {
            var A = y.value;
            if (!A(t)) return !1;
          }
          return !0;
        },
        !0
      );
      k && k(new QB(a, v));
    };
    K(this.getName(), ["tagId:!string", "options:?PixieMap"], arguments);
    var f = I(b, this.D, 1) || {},
      g = f.firstPartyUrl,
      k = f.onLoad,
      m = f.loadByDestination === !0,
      n = f.isGtmEvent === !0,
      p = f.siloed === !0;
    LA([
      function () {
        return L(c, "load_google_tags", a, g);
      },
    ]);
    if (m) {
      if (yk(a)) return;
    } else if (xk(a)) return;
    var q = 6,
      r = PA(this);
    n && (q = 7);
    r.nb() === "__zone" && (q = 1);
    var u = { source: q, fromContainerExecution: !0, siloed: p };
    m ? px(a, g, u, e) : mx(a, g, !sb(a, "GTM-"), u, e);
    k &&
      r.nb() === "__zone" &&
      KB(Number.MIN_SAFE_INTEGER, [a], null, {}, FB(PA(this)));
    d = p ? kk(a) : a;
    return d;
  }
  RB.F = "internal.loadGoogleTag";
  function SB(a) {
    return new Wc("", function (b) {
      var c = this.evaluate(b);
      if (c instanceof Wc)
        return new Wc("", function () {
          var d = za.apply(0, arguments),
            e = this,
            f = Rc(PA(this), null);
          f.eventId = a.eventId;
          f.priorityId = a.priorityId;
          f.originalEventData = a.originalEventData;
          var g = d.map(function (m) {
              return e.evaluate(m);
            }),
            k = Ha(this.D);
          k.j = f;
          return c.pb.apply(c, [k].concat(ua(g)));
        });
    });
  }
  function TB(a, b, c) {
    var d = this;
  }
  TB.F = "internal.addGoogleTagRestriction";
  var UB = {},
    VB = [];
  function bC(a, b) {}
  bC.F = "internal.addHistoryChangeListener";
  function cC(a, b, c) {}
  cC.T = "addWindowEventListener";
  function dC(a, b) {
    return !0;
  }
  dC.T = "aliasInWindow";
  function eC(a, b, c) {}
  eC.F = "internal.appendRemoteConfigParameter";
  function fC(a) {
    var b;
    return b;
  }
  fC.T = "callInWindow";
  function gC(a) {}
  gC.T = "callLater";
  function hC(a) {}
  hC.F = "callOnDomReady";
  function iC(a) {
    K(this.getName(), ["listener:!Fn"], arguments),
      L(this, "process_dom_events", "window", "load"),
      vz(I(a));
  }
  iC.F = "callOnWindowLoad";
  function jC(a, b) {
    var c;
    return c;
  }
  jC.F = "internal.computeGtmParameter";
  function kC(a, b) {
    var c = this;
  }
  kC.F = "internal.consentScheduleFirstTry";
  function lC(a, b) {
    var c = this;
  }
  lC.F = "internal.consentScheduleRetry";
  function mC(a) {
    var b;
    return b;
  }
  mC.F = "internal.copyFromCrossContainerData";
  function nC(a, b) {
    var c;
    var d = dd(c, this.D, sb(PA(this).nb(), "__cvt_") ? 2 : 1);
    d === void 0 && c !== void 0 && U(45);
    return d;
  }
  nC.T = "copyFromDataLayer";
  function oC(a) {
    var b = void 0;
    return b;
  }
  oC.F = "internal.copyFromDataLayerCache";
  function pC(a) {
    var b;
    return b;
  }
  pC.T = "copyFromWindow";
  function qC(a) {
    var b = void 0;
    return dd(b, this.D, 1);
  }
  qC.F = "internal.copyKeyFromWindow";
  var rC = function (a, b, c) {
    this.eventName = b;
    this.m = c;
    this.j = {};
    this.isAborted = !1;
    this.target = a;
    this.metadata = Rc(c.eventMetadata || {}, {});
  };
  rC.prototype.copyToHitData = function (a, b, c) {
    var d = V(this.m, a);
    d === void 0 && (d = b);
    if (d !== void 0 && c !== void 0 && z(d) && S(80))
      try {
        d = c(d);
      } catch (e) {}
    d !== void 0 && (this.j[a] = d);
  };
  var St = function (a, b, c) {
    var d = Us(a.target.destinationId);
    return d && d[b] !== void 0 ? d[b] : c;
  };
  function sC(a, b) {
    var c;
    return c;
  }
  sC.F = "internal.copyPreHit";
  function tC(a, b) {
    var c = null;
    K(this.getName(), ["functionPath:!string", "arrayPath:!string"], arguments);
    L(this, "access_globals", "readwrite", a);
    L(this, "access_globals", "readwrite", b);
    var d = [B, E],
      e = a.split("."),
      f = ub(e, d),
      g = e[e.length - 1];
    if (f === void 0) throw Error("Path " + a + " does not exist.");
    var k = f[g];
    if (k && !Za(k)) return null;
    if (k) return dd(k, this.D, 2);
    var m;
    k = function () {
      if (!Za(m.push))
        throw Error("Object at " + b + " in window is not an array.");
      m.push.call(m, arguments);
    };
    f[g] = k;
    var n = b.split("."),
      p = ub(n, d),
      q = n[n.length - 1];
    if (p === void 0) throw Error("Path " + n + " does not exist.");
    m = p[q];
    m === void 0 && ((m = []), (p[q] = m));
    c = function () {
      k.apply(k, Array.prototype.slice.call(arguments, 0));
    };
    return dd(c, this.D, 2);
  }
  tC.T = "createArgumentsQueue";
  function uC(a) {
    return dd(
      function (c) {
        var d = Gx();
        if (typeof c === "function")
          d(function () {
            c(function (f, g, k) {
              var m = Gx(),
                n = m && m.getByName && m.getByName(f);
              return jn(B.gaplugins.Linker, n).decorate(g, k);
            });
          });
        else if (Array.isArray(c)) {
          var e = String(c[0]).split(".");
          b[e.length === 1 ? e[0] : e[1]] && d.apply(null, c);
        } else if (c === "isLoaded") return !!d.loaded;
      },
      this.D,
      1
    );
  }
  uC.F = "internal.createGaCommandQueue";
  function vC(a) {
    return dd(
      function () {
        if (!Za(e.push))
          throw Error("Object at " + a + " in window is not an array.");
        e.push.apply(e, Array.prototype.slice.call(arguments, 0));
      },
      this.D,
      sb(PA(this).nb(), "__cvt_") ? 2 : 1
    );
  }
  vC.T = "createQueue";
  function wC(a, b) {
    var c = null;
    return c;
  }
  wC.F = "internal.createRegex";
  function xC() {
    var a = {};
    return a;
  }
  function yC(a) {}
  yC.F = "internal.declareConsentState";
  function zC(a) {
    var b = "";
    return b;
  }
  zC.F = "internal.decodeUrlHtmlEntities";
  function AC(a, b, c) {
    var d;
    return d;
  }
  AC.F = "internal.decorateUrlWithGaCookies";
  function BC() {}
  BC.F = "internal.deferCustomEvents";
  function CC(a) {
    var b;
    return b;
  }
  CC.F = "internal.detectUserProvidedData";
  var EC = function (a) {
      var b = wc(a, ["button", "input"], 50);
      if (!b) return null;
      var c = String(b.tagName).toLowerCase();
      if (c === "button") return b;
      if (c === "input") {
        var d = tc(b, "type");
        if (
          d === "button" ||
          d === "submit" ||
          d === "image" ||
          d === "file" ||
          d === "reset"
        )
          return b;
      }
      return null;
    },
    FC = function (a, b, c) {
      var d = c.target;
      if (d) {
        var e = SA(a, "individualElementIds", []);
        if (e.length > 0) {
          var f = XA(d, b, e);
          Ez(f);
        }
        var g = !1,
          k = SA(a, "commonButtonIds", []);
        if (k.length > 0) {
          var m = EC(d);
          if (m) {
            var n = XA(m, b, k);
            Ez(n);
            g = !0;
          }
        }
        var p = SA(a, "selectorToTriggerIds", {}),
          q;
        for (q in p)
          if (p.hasOwnProperty(q)) {
            var r = g
              ? p[q].filter(function (t) {
                  return k.indexOf(t) === -1;
                })
              : p[q];
            if (r.length !== 0) {
              var u = Oh(d, q);
              if (u) {
                var v = XA(u, b, r);
                Ez(v);
              }
            }
          }
      }
    };
  function GC(a, b) {
    K(this.getName(), ["options:?PixieMap", "triggerId:?*"], arguments);
    var c = a ? I(a) : {},
      d = jb(c.matchCommonButtons),
      e = !!c.cssSelector;
    b = RA(b);
    L(this, "detect_click_events", c.matchCommonButtons, c.cssSelector);
    var f = c.useV2EventName ? "gtm.click-v2" : "gtm.click",
      g = c.useV2EventName ? "ecl" : "cl",
      k = function (n) {
        n.push(b);
        return n;
      };
    if (e || d) {
      if ((d && WA(g, "commonButtonIds", k, []), e)) {
        var m = lb(String(c.cssSelector));
        WA(
          g,
          "selectorToTriggerIds",
          function (n) {
            n.hasOwnProperty(m) || (n[m] = []);
            k(n[m]);
            return n;
          },
          {}
        );
      }
    } else WA(g, "individualElementIds", k, []);
    UA(g, function () {
      rc(
        E,
        "click",
        function (n) {
          FC(g, f, n);
        },
        !0
      );
    });
    return b;
  }
  GC.F = "internal.enableAutoEventOnClick";
  var JC = function (a) {
      if (!HC) {
        var b = function () {
          var c = E.body;
          if (c)
            if (IC)
              new MutationObserver(function () {
                for (var e = 0; e < HC.length; e++) H(HC[e]);
              }).observe(c, { childList: !0, subtree: !0 });
            else {
              var d = !1;
              rc(c, "DOMNodeInserted", function () {
                d ||
                  ((d = !0),
                  H(function () {
                    d = !1;
                    for (var e = 0; e < HC.length; e++) H(HC[e]);
                  }));
              });
            }
        };
        HC = [];
        E.body ? b() : H(b);
      }
      HC.push(a);
    },
    IC = !!B.MutationObserver,
    HC;
  var KC = function (a) {
      a.has("PollingId") &&
        (B.clearInterval(Number(a.get("PollingId"))), a.remove("PollingId"));
    },
    MC = function (a, b, c, d) {
      function e() {
        if (!Ws(a.target)) {
          b.has("RecentOnScreen") ||
            b.set("RecentOnScreen", "" + LC().toString());
          b.has("FirstOnScreen") ||
            b.set("FirstOnScreen", "" + LC().toString());
          var g = 0;
          b.has("TotalVisibleTime") && (g = Number(b.get("TotalVisibleTime")));
          g += 100;
          b.set("TotalVisibleTime", "" + g.toString());
          if (g >= c) {
            var k = XA(a.target, "gtm.elementVisibility", [b.uid]),
              m = Ys(a.target);
            k["gtm.visibleRatio"] = Math.round(m * 1e3) / 10;
            k["gtm.visibleTime"] = c;
            k["gtm.visibleFirstTime"] = Number(b.get("FirstOnScreen"));
            k["gtm.visibleLastTime"] = Number(b.get("RecentOnScreen"));
            Ez(k);
            d();
          }
        }
      }
      if (!b.has("PollingId") && (c === 0 && e(), !b.has("HasFired"))) {
        var f = B.setInterval(e, 100);
        b.set("PollingId", String(f));
      }
    },
    LC = function () {
      var a = Number(mj("gtm.start", 2)) || 0;
      return nb() - a;
    },
    NC = function (a, b) {
      this.element = a;
      this.uid = b;
    };
  NC.prototype.has = function (a) {
    return !!this.element.dataset["gtmVis" + a + this.uid];
  };
  NC.prototype.get = function (a) {
    return this.element.dataset["gtmVis" + a + this.uid];
  };
  NC.prototype.set = function (a, b) {
    this.element.dataset["gtmVis" + a + this.uid] = b;
  };
  NC.prototype.remove = function (a) {
    delete this.element.dataset["gtmVis" + a + this.uid];
  };
  function OC(a, b) {
    var c = function (v) {
        var t = new NC(v.target, p);
        v.intersectionRatio >= n
          ? t.has("HasFired") ||
            MC(
              v,
              t,
              m,
              q === "ONCE"
                ? function () {
                    for (var w = 0; w < r.length; w++) {
                      var x = new NC(r[w], p);
                      x.set("HasFired", "1");
                      KC(x);
                    }
                    at(u);
                    if (k) {
                      var y = d;
                      if (HC)
                        for (var A = 0; A < HC.length; A++)
                          HC[A] === y && HC.splice(A, 1);
                    }
                  }
                : function () {
                    t.set("HasFired", "1");
                    KC(t);
                  }
            )
          : (KC(t),
            q === "MANY_PER_ELEMENT" &&
              t.has("HasFired") &&
              (t.remove("HasFired"), t.remove("TotalVisibleTime")),
            t.remove("RecentOnScreen"));
      },
      d = function () {
        var v = !1,
          t = null;
        if (f === "CSS") {
          try {
            t = Mh(g);
          } catch (A) {}
          v = !!t && r.length !== t.length;
        } else if (f === "ID") {
          var w = E.getElementById(g);
          w && ((t = [w]), (v = r.length !== 1 || r[0] !== w));
        }
        t || ((t = []), (v = r.length > 0));
        if (v) {
          for (var x = 0; x < r.length; x++) KC(new NC(r[x], p));
          r = [];
          for (var y = 0; y < t.length; y++) r.push(t[y]);
          u >= 0 && at(u);
          r.length > 0 && (u = dt(c, r, [n]));
        }
      };
    K(this.getName(), ["options:?PixieMap", "triggerId:?*"], arguments);
    L(this, "detect_element_visibility_events");
    var e = a ? I(a) : {},
      f = e.selectorType,
      g;
    switch (f) {
      case "ID":
        g = String(e.id);
        break;
      case "CSS":
        g = String(e.selector);
        break;
      default:
        throw Error(
          "Unrecognized element selector type " +
            f +
            ". Must be one of 'ID' or 'CSS'."
        );
    }
    var k = !!e.useDomChangeListener,
      m = (e.onScreenDuration && Number(e.onScreenDuration)) || 0,
      n = (Number(e.onScreenRatio) || 50) / 100,
      p = RA(b),
      q = e.firingFrequency,
      r = [],
      u = -1;
    d();
    k && JC(d);
    return b;
  }
  OC.F = "internal.enableAutoEventOnElementVisibility";
  function PC() {}
  PC.F = "internal.enableAutoEventOnError";
  var QC = {},
    RC = [],
    SC = {},
    TC = 0,
    UC = 0;
  function $C(a, b) {
    var c = this;
    return b;
  }
  $C.F = "internal.enableAutoEventOnFormInteraction";
  var aD = function (a, b, c, d, e) {
      var f = SA("fsl", c ? "nv.mwt" : "mwt", 0),
        g;
      g = c ? SA("fsl", "nv.ids", []) : SA("fsl", "ids", []);
      if (!g.length) return !0;
      var k = XA(a, "gtm.formSubmit", g),
        m = a.action;
      m && m.tagName && (m = a.cloneNode(!1).action);
      U(121);
      if (m === "https://www.facebook.com/tr/") return U(122), !0;
      k["gtm.elementUrl"] = m;
      k["gtm.formCanceled"] = c;
      a.getAttribute("name") != null &&
        (k["gtm.interactedFormName"] = a.getAttribute("name"));
      e &&
        ((k["gtm.formSubmitElement"] = e),
        (k["gtm.formSubmitElementText"] = e.value));
      if (d && f) {
        if (!Dz(k, Fz(b, f), f)) return !1;
      } else Dz(k, function () {}, f || 2e3);
      return !0;
    },
    bD = function () {
      var a = [],
        b = function (c) {
          return bb(a, function (d) {
            return d.form === c;
          });
        };
      return {
        store: function (c, d) {
          var e = b(c);
          e ? (e.button = d) : a.push({ form: c, button: d });
        },
        get: function (c) {
          var d = b(c);
          if (d) return d.button;
        },
      };
    },
    cD = function (a) {
      var b = a.target;
      return b && b !== "_self" && b !== "_parent" && b !== "_top" ? !1 : !0;
    },
    dD = function () {
      var a = bD(),
        b = HTMLFormElement.prototype.submit;
      rc(
        E,
        "click",
        function (c) {
          var d = c.target;
          if (d) {
            var e = wc(d, ["button", "input"], 100);
            if (
              e &&
              (e.type === "submit" || e.type === "image") &&
              e.name &&
              tc(e, "value")
            ) {
              var f = $A(e);
              f && a.store(f, e);
            }
          }
        },
        !1
      );
      rc(
        E,
        "submit",
        function (c) {
          var d = c.target;
          if (!d) return c.returnValue;
          var e = c.defaultPrevented || c.returnValue === !1,
            f = cD(d) && !e,
            g = a.get(d),
            k = !0;
          if (
            aD(
              d,
              function () {
                if (k) {
                  var m = null,
                    n = {};
                  g &&
                    ((m = E.createElement("input")),
                    (m.type = "hidden"),
                    (m.name = g.name),
                    (m.value = g.value),
                    d.appendChild(m),
                    g.hasAttribute("formaction") &&
                      ((n.action = d.getAttribute("action")),
                      Zb(d, g.getAttribute("formaction"))),
                    g.hasAttribute("formenctype") &&
                      ((n.enctype = d.getAttribute("enctype")),
                      d.setAttribute("enctype", g.getAttribute("formenctype"))),
                    g.hasAttribute("formmethod") &&
                      ((n.method = d.getAttribute("method")),
                      d.setAttribute("method", g.getAttribute("formmethod"))),
                    g.hasAttribute("formvalidate") &&
                      ((n.validate = d.getAttribute("validate")),
                      d.setAttribute(
                        "validate",
                        g.getAttribute("formvalidate")
                      )),
                    g.hasAttribute("formtarget") &&
                      ((n.target = d.getAttribute("target")),
                      d.setAttribute("target", g.getAttribute("formtarget"))));
                  b.call(d);
                  m &&
                    (d.removeChild(m),
                    n.hasOwnProperty("action") && Zb(d, n.action),
                    n.hasOwnProperty("enctype") &&
                      d.setAttribute("enctype", n.enctype),
                    n.hasOwnProperty("method") &&
                      d.setAttribute("method", n.method),
                    n.hasOwnProperty("validate") &&
                      d.setAttribute("validate", n.validate),
                    n.hasOwnProperty("target") &&
                      d.setAttribute("target", n.target));
                }
              },
              e,
              f,
              g
            )
          )
            k = !1;
          else
            return (
              e ||
                (c.preventDefault && c.preventDefault(), (c.returnValue = !1)),
              !1
            );
          return c.returnValue;
        },
        !1
      );
      HTMLFormElement.prototype.submit = function () {
        var c = this,
          d = !0;
        aD(
          c,
          function () {
            d && b.call(c);
          },
          !1,
          cD(c)
        ) && (b.call(c), (d = !1));
      };
    };
  function eD(a, b) {
    var c = this;
    K(this.getName(), ["options:?PixieMap", "triggerId:?*"], arguments);
    var d = a && a.get("waitForTags");
    LA([
      function () {
        L(c, "detect_form_submit_events", { waitForTags: !!d });
      },
    ]);
    var e = a && a.get("checkValidation");
    b = RA(b);
    if (d) {
      var f = Number(a.get("waitForTagsTimeout"));
      (f > 0 && isFinite(f)) || (f = 2e3);
      var g = function (m) {
        return Math.max(f, m);
      };
      WA("fsl", "mwt", g, 0);
      e || WA("fsl", "nv.mwt", g, 0);
    }
    var k = function (m) {
      m.push(b);
      return m;
    };
    WA("fsl", "ids", k, []);
    e || WA("fsl", "nv.ids", k, []);
    SA("fsl", "init", !1) || (dD(), TA("fsl", "init", !0));
    return b;
  }
  eD.F = "internal.enableAutoEventOnFormSubmit";
  function jD() {
    var a = this;
  }
  jD.F = "internal.enableAutoEventOnGaSend";
  var kD = {},
    lD = [];
  var nD = function (a, b) {
      var c = "" + b;
      if (kD[c]) kD[c].push(a);
      else {
        var d = [a];
        kD[c] = d;
        var e = mD("gtm.historyChange-v2"),
          f = -1;
        lD.push(function (g) {
          f >= 0 && B.clearTimeout(f);
          b
            ? (f = B.setTimeout(function () {
                e(g, d);
                f = -1;
              }, b))
            : e(g, d);
        });
      }
    },
    mD = function (a) {
      var b = B.location.href,
        c = {
          source: null,
          state: B.history.state || null,
          url: Cj(Fj(b)),
          Ka: zj(Fj(b), "fragment"),
        };
      return function (d, e) {
        var f = c,
          g = {};
        g[f.source] = !0;
        g[d.source] = !0;
        if (!g.popstate || !g.hashchange || f.Ka !== d.Ka) {
          var k = {
            event: a,
            "gtm.historyChangeSource": d.source,
            "gtm.oldUrlFragment": c.Ka,
            "gtm.newUrlFragment": d.Ka,
            "gtm.oldHistoryState": c.state,
            "gtm.newHistoryState": d.state,
            "gtm.oldUrl": c.url,
            "gtm.newUrl": d.url,
          };
          e && (k["gtm.triggers"] = e.join(","));
          c = d;
          Ez(k);
        }
      };
    },
    oD = function (a, b) {
      var c = B.history,
        d = c[a];
      if (Za(d))
        try {
          c[a] = function (e, f, g) {
            d.apply(c, [].slice.call(arguments, 0));
            var k = B.location.href;
            b({
              source: a,
              state: e,
              url: Cj(Fj(k)),
              Ka: zj(Fj(k), "fragment"),
            });
          };
        } catch (e) {}
    },
    qD = function (a) {
      B.addEventListener("popstate", function (b) {
        var c = pD(b);
        a({
          source: "popstate",
          state: b.state,
          url: Cj(Fj(c)),
          Ka: zj(Fj(c), "fragment"),
        });
      });
    },
    rD = function (a) {
      B.addEventListener("hashchange", function (b) {
        var c = pD(b);
        a({
          source: "hashchange",
          state: null,
          url: Cj(Fj(c)),
          Ka: zj(Fj(c), "fragment"),
        });
      });
    },
    pD = function (a) {
      var b, c;
      return (
        ((b = a.target) == null
          ? void 0
          : (c = b.location) == null
          ? void 0
          : c.href) || B.location.href
      );
    };
  function sD(a, b) {
    var c = this;
    K(this.getName(), ["options:?PixieMap", "triggerId:?*"], arguments);
    LA([
      function () {
        L(c, "detect_history_change_events");
      },
    ]);
    var d = a && a.get("useV2EventName") ? "ehl" : "hl",
      e = Number(a && a.get("interval"));
    (e > 0 && isFinite(e)) || (e = 0);
    if (!SA(d, "init", !1)) {
      var f;
      d === "ehl"
        ? ((f = function (k) {
            for (var m = 0; m < lD.length; m++) lD[m](k);
          }),
          (b = RA(b)),
          nD(b, e),
          TA(d, "reg", nD))
        : (f = mD("gtm.historyChange"));
      rD(f);
      qD(f);
      oD("pushState", f);
      oD("replaceState", f);
      TA(d, "init", !0);
    } else if (d === "ehl") {
      var g = SA(d, "reg");
      g && ((b = RA(b)), g(b, e));
    }
    d === "hl" && (b = void 0);
    return b;
  }
  sD.F = "internal.enableAutoEventOnHistoryChange";
  var tD = ["http://", "https://", "javascript:", "file://"];
  var uD = function (a, b) {
      if (a.which === 2 || a.ctrlKey || a.shiftKey || a.altKey || a.metaKey)
        return !1;
      var c = Cc(b, "href");
      if (
        c.indexOf(":") !== -1 &&
        !tD.some(function (k) {
          return sb(c, k);
        })
      )
        return !1;
      var d = c.indexOf("#"),
        e = Cc(b, "target");
      if ((e && e !== "_self" && e !== "_parent" && e !== "_top") || d === 0)
        return !1;
      if (d > 0) {
        var f = Cj(Fj(c)),
          g = Cj(Fj(B.location.href));
        return f !== g;
      }
      return !0;
    },
    vD = function (a, b) {
      for (
        var c = zj(
            Fj(
              (b.attributes && b.attributes.formaction ? b.formAction : "") ||
                b.action ||
                Cc(b, "href") ||
                b.src ||
                b.code ||
                b.codebase ||
                ""
            ),
            "host"
          ),
          d = 0;
        d < a.length;
        d++
      )
        try {
          if (new RegExp(a[d]).test(c)) return !1;
        } catch (e) {}
      return !0;
    },
    wD = function () {
      function a(c) {
        var d = c.target;
        if (
          d &&
          c.which !== 3 &&
          !(c.j || (c.timeStamp && c.timeStamp === b))
        ) {
          b = c.timeStamp;
          d = wc(d, ["a", "area"], 100);
          if (!d) return c.returnValue;
          var e = c.defaultPrevented || c.returnValue === !1,
            f = SA("lcl", e ? "nv.mwt" : "mwt", 0),
            g;
          g = e ? SA("lcl", "nv.ids", []) : SA("lcl", "ids", []);
          for (var k = [], m = 0; m < g.length; m++) {
            var n = g[m],
              p = SA("lcl", "aff.map", {})[n];
            (p && !vD(p, d)) || k.push(n);
          }
          if (k.length) {
            var q = uD(c, d),
              r = XA(d, "gtm.linkClick", k);
            r["gtm.elementText"] = uc(d);
            r["gtm.willOpenInNewWindow"] = !q;
            if (q && !e && f && d.href) {
              var u = !!bb(String(Cc(d, "rel") || "").split(" "), function (x) {
                  return x.toLowerCase() === "noreferrer";
                }),
                v = B[(Cc(d, "target") || "_self").substring(1)],
                t = !0,
                w = Fz(function () {
                  var x;
                  if ((x = t && v)) {
                    var y;
                    a: if (u) {
                      var A;
                      try {
                        A = new MouseEvent(c.type, { bubbles: !0 });
                      } catch (C) {
                        if (!E.createEvent) {
                          y = !1;
                          break a;
                        }
                        A = E.createEvent("MouseEvents");
                        A.initEvent(c.type, !0, !0);
                      }
                      A.j = !0;
                      c.target.dispatchEvent(A);
                      y = !0;
                    } else y = !1;
                    x = !y;
                  }
                  x && (v.location.href = Cc(d, "href"));
                }, f);
              if (Dz(r, w, f)) t = !1;
              else
                return (
                  c.preventDefault && c.preventDefault(), (c.returnValue = !1)
                );
            } else Dz(r, function () {}, f || 2e3);
            return !0;
          }
        }
      }
      var b = 0;
      rc(E, "click", a, !1);
      rc(E, "auxclick", a, !1);
    };
  function xD(a, b) {
    var c = this;
    K(this.getName(), ["dustOptions:?PixieMap", "triggerId:?*"], arguments);
    var d = I(a);
    LA([
      function () {
        L(c, "detect_link_click_events", d);
      },
    ]);
    var e = d && !!d.waitForTags,
      f = d && !!d.checkValidation,
      g = d ? d.affiliateDomains : void 0;
    b = RA(b);
    if (e) {
      var k = Number(d.waitForTagsTimeout);
      (k > 0 && isFinite(k)) || (k = 2e3);
      var m = function (p) {
        return Math.max(k, p);
      };
      WA("lcl", "mwt", m, 0);
      f || WA("lcl", "nv.mwt", m, 0);
    }
    var n = function (p) {
      p.push(b);
      return p;
    };
    WA("lcl", "ids", n, []);
    f || WA("lcl", "nv.ids", n, []);
    g &&
      WA(
        "lcl",
        "aff.map",
        function (p) {
          p[b] = g;
          return p;
        },
        {}
      );
    SA("lcl", "init", !1) || (wD(), TA("lcl", "init", !0));
    return b;
  }
  xD.F = "internal.enableAutoEventOnLinkClick";
  var yD, zD;
  var AD = function (a) {
      return SA("sdl", a, {});
    },
    BD = function (a, b, c) {
      if (b) {
        var d = Array.isArray(a) ? a : [a];
        WA(
          "sdl",
          c,
          function (e) {
            for (var f = 0; f < d.length; f++) {
              var g = String(d[f]);
              e.hasOwnProperty(g) || (e[g] = []);
              e[g].push(b);
            }
            return e;
          },
          {}
        );
      }
    },
    ED = function () {
      function a() {
        CD();
        DD(a, !0);
      }
      return a;
    },
    FD = function () {
      function a() {
        f ? (e = B.setTimeout(a, c)) : ((e = 0), CD(), DD(b));
        f = !1;
      }
      function b() {
        d && yD();
        e ? (f = !0) : ((e = B.setTimeout(a, c)), TA("sdl", "pending", !0));
      }
      var c = 250,
        d = !1;
      E.scrollingElement && E.documentElement && ((c = 50), (d = !0));
      var e = 0,
        f = !1;
      return b;
    },
    DD = function (a, b) {
      SA("sdl", "init", !1) &&
        !GD() &&
        (b ? sc(B, "scrollend", a) : sc(B, "scroll", a),
        sc(B, "resize", a),
        TA("sdl", "init", !1));
    },
    CD = function () {
      var a = yD(),
        b = a.depthX,
        c = a.depthY,
        d = (b / zD.scrollWidth) * 100,
        e = (c / zD.scrollHeight) * 100;
      HD(b, "horiz.pix", "PIXELS", "horizontal");
      HD(d, "horiz.pct", "PERCENT", "horizontal");
      HD(c, "vert.pix", "PIXELS", "vertical");
      HD(e, "vert.pct", "PERCENT", "vertical");
      TA("sdl", "pending", !1);
    },
    HD = function (a, b, c, d) {
      var e = AD(b),
        f = {},
        g;
      for (g in e)
        if (((f = { Rd: f.Rd }), (f.Rd = g), e.hasOwnProperty(f.Rd))) {
          var k = Number(f.Rd);
          if (!(a < k)) {
            var m = {};
            Ez(
              ((m.event = "gtm.scrollDepth"),
              (m["gtm.scrollThreshold"] = k),
              (m["gtm.scrollUnits"] = c.toLowerCase()),
              (m["gtm.scrollDirection"] = d),
              (m["gtm.triggers"] = e[f.Rd].join(",")),
              m)
            );
            WA(
              "sdl",
              b,
              (function (n) {
                return function (p) {
                  delete p[n.Rd];
                  return p;
                };
              })(f),
              {}
            );
          }
        }
    },
    JD = function () {
      WA(
        "sdl",
        "scr",
        function (a) {
          a || (a = E.scrollingElement || (E.body && E.body.parentNode));
          return (zD = a);
        },
        !1
      );
      WA(
        "sdl",
        "depth",
        function (a) {
          a || (a = ID());
          return (yD = a);
        },
        !1
      );
    },
    ID = function () {
      var a = 0,
        b = 0;
      return function () {
        var c = Xs(),
          d = c.height;
        a = Math.max(zD.scrollLeft + c.width, a);
        b = Math.max(zD.scrollTop + d, b);
        return { depthX: a, depthY: b };
      };
    },
    GD = function () {
      return !!(
        Object.keys(AD("horiz.pix")).length ||
        Object.keys(AD("horiz.pct")).length ||
        Object.keys(AD("vert.pix")).length ||
        Object.keys(AD("vert.pct")).length
      );
    };
  function KD(a, b) {
    var c = this;
    K(this.getName(), ["options:!PixieMap", "triggerId:?*"], arguments);
    LA([
      function () {
        L(c, "detect_scroll_events");
      },
    ]);
    JD();
    if (!zD) return;
    b = RA(b);
    var d = I(a);
    switch (d.horizontalThresholdUnits) {
      case "PIXELS":
        BD(d.horizontalThresholds, b, "horiz.pix");
        break;
      case "PERCENT":
        BD(d.horizontalThresholds, b, "horiz.pct");
    }
    switch (d.verticalThresholdUnits) {
      case "PIXELS":
        BD(d.verticalThresholds, b, "vert.pix");
        break;
      case "PERCENT":
        BD(d.verticalThresholds, b, "vert.pct");
    }
    SA("sdl", "init", !1)
      ? SA("sdl", "pending", !1) ||
        H(function () {
          CD();
        })
      : (TA("sdl", "init", !0),
        TA("sdl", "pending", !0),
        H(function () {
          CD();
          if (GD()) {
            var e = FD();
            "onscrollend" in B
              ? ((e = ED()), rc(B, "scrollend", e))
              : rc(B, "scroll", e);
            rc(B, "resize", e);
          } else TA("sdl", "init", !1);
        }));
    return b;
  }
  KD.F = "internal.enableAutoEventOnScroll";
  function LD(a) {
    return function () {
      if (a.limit && a.bi >= a.limit) a.rg && B.clearInterval(a.rg);
      else {
        a.bi++;
        var b = nb();
        Ez({
          event: a.eventName,
          "gtm.timerId": a.rg,
          "gtm.timerEventNumber": a.bi,
          "gtm.timerInterval": a.interval,
          "gtm.timerLimit": a.limit,
          "gtm.timerStartTime": a.Fk,
          "gtm.timerCurrentTime": b,
          "gtm.timerElapsedTime": b - a.Fk,
          "gtm.triggers": a.yn,
        });
      }
    };
  }
  function MD(a, b) {
    K(this.getName(), ["dustOptions:?PixieMap", "triggerId:?*"], arguments);
    L(this, "detect_timer_events");
    a = a || new Ma();
    var c = a.get("interval");
    if (typeof c !== "number" || isNaN(c) || c < 0) c = 0;
    var d = a.get("limit");
    if (typeof d !== "number" || isNaN(d)) d = 0;
    b = RA(b);
    var e = {
      eventName: a.has("eventName") ? String(a.get("eventName")) : "gtm.timer",
      bi: 0,
      interval: c,
      limit: d,
      yn: String(b),
      Fk: nb(),
      rg: void 0,
    };
    e.rg = B.setInterval(LD(e), c);
    return b;
  }
  MD.F = "internal.enableAutoEventOnTimer";
  var ND = function (a, b, c) {
    function d() {
      var g = a();
      f += e ? ((nb() - e) * g.playbackRate) / 1e3 : 0;
      e = nb();
    }
    var e = 0,
      f = 0;
    return {
      createEvent: function (g, k, m) {
        var n = a(),
          p = n.Mh,
          q = m ? Math.round(m) : k ? Math.round(n.Mh * k) : Math.round(n.hk),
          r =
            k !== void 0
              ? Math.round(k * 100)
              : p <= 0
              ? 0
              : Math.round((q / p) * 100),
          u = E.hidden ? !1 : Ys(c) >= 0.5;
        d();
        var v = void 0;
        b !== void 0 && (v = [b]);
        var t = XA(c, "gtm.video", v);
        t["gtm.videoProvider"] = "youtube";
        t["gtm.videoStatus"] = g;
        t["gtm.videoUrl"] = n.url;
        t["gtm.videoTitle"] = n.title;
        t["gtm.videoDuration"] = Math.round(p);
        t["gtm.videoCurrentTime"] = Math.round(q);
        t["gtm.videoElapsedTime"] = Math.round(f);
        t["gtm.videoPercent"] = r;
        t["gtm.videoVisible"] = u;
        return t;
      },
      Bk: function () {
        e = nb();
      },
      Dd: function () {
        d();
      },
    };
  };
  var Vb = xa(["data-gtm-yt-inspected-"]),
    OD = ["www.youtube.com", "www.youtube-nocookie.com"],
    PD,
    QD = !1;
  function $D(a, b) {
    var c = this;
    return b;
  }
  $D.F = "internal.enableAutoEventOnYouTubeActivity";
  function aE(a, b) {
    K(
      this.getName(),
      ["booleanExpression:!string", "context:?PixieMap"],
      arguments
    );
    var c = b ? I(b) : {},
      d = a,
      e = !1;
    return e;
  }
  aE.F = "internal.evaluateBooleanExpression";
  var bE;
  function cE(a) {
    var b = !1;
    return b;
  }
  cE.F = "internal.evaluateMatchingRules";
  var dE = function (a) {
      switch (a) {
        case "page_view":
          return [os, ns, es, Qu, xv, kv, Yu, fv];
        case "call_conversion":
          return [ns, Qu];
        case "conversion":
          return [
            ks,
            ns,
            tv,
            Dv,
            qv,
            Cv,
            Av,
            zv,
            yv,
            xv,
            kv,
            jv,
            hv,
            gv,
            ev,
            Uu,
            Tu,
            iv,
            Yu,
            pv,
            dv,
            cv,
            av,
            sv,
            ov,
            Wu,
            os,
            ls,
            nv,
            Zu,
            wv,
            fv,
            rv,
            Xu,
            Su,
            mv,
            bv,
            uv,
            vv,
            Vu,
          ];
        case "landing_page":
          return [
            ks,
            ns,
            tv,
            Dv,
            kv,
            ms,
            Yu,
            pv,
            sv,
            ls,
            os,
            nv,
            wv,
            fv,
            rv,
            Su,
            Vu,
          ];
        case "remarketing":
          return [
            ks,
            ns,
            tv,
            Dv,
            qv,
            Cv,
            Av,
            zv,
            yv,
            xv,
            kv,
            jv,
            ev,
            iv,
            Yu,
            pv,
            dv,
            sv,
            ls,
            os,
            nv,
            Zu,
            wv,
            fv,
            rv,
            Su,
            uv,
            Vu,
          ];
        case "user_data_lead":
          return [
            ks,
            ns,
            tv,
            Dv,
            Cv,
            xv,
            kv,
            iv,
            Yu,
            ms,
            pv,
            av,
            sv,
            ls,
            os,
            nv,
            Zu,
            wv,
            fv,
            rv,
            Su,
            Vu,
          ];
        case "user_data_web":
          return [
            ks,
            ns,
            tv,
            Dv,
            Cv,
            xv,
            kv,
            iv,
            Yu,
            ms,
            pv,
            av,
            sv,
            ls,
            os,
            nv,
            Zu,
            wv,
            fv,
            rv,
            Xu,
            Su,
            Vu,
          ];
        default:
          return [
            ks,
            ns,
            tv,
            Dv,
            qv,
            Cv,
            Av,
            zv,
            yv,
            xv,
            kv,
            jv,
            hv,
            gv,
            ev,
            Uu,
            Tu,
            iv,
            Yu,
            pv,
            dv,
            cv,
            av,
            sv,
            ov,
            Wu,
            ls,
            os,
            nv,
            Zu,
            wv,
            fv,
            rv,
            Su,
            mv,
            bv,
            uv,
            vv,
            Vu,
          ];
      }
    },
    eE = function (a) {
      for (
        var b = dE(a.metadata.hit_type), c = 0;
        c < b.length && (b[c](a), !a.isAborted);
        c++
      );
    },
    fE = function (a, b, c, d) {
      var e = new rC(b, c, d);
      e.metadata.hit_type = a;
      e.metadata.speculative = !0;
      e.metadata.event_start_timestamp_ms = nb();
      e.metadata.speculative_in_message = d.eventMetadata.speculative;
      return e;
    },
    gE = function (a, b, c, d) {
      function e(u, v) {
        for (var t = l(k), w = t.next(); !w.done; w = t.next()) {
          var x = w.value;
          x.isAborted = !1;
          x.metadata.speculative = !0;
          x.metadata.consent_updated = !0;
          x.metadata.event_start_timestamp_ms = nb();
          x.metadata.consent_event_id = u;
          x.metadata.consent_priority_id = v;
        }
      }
      function f(u) {
        for (var v = {}, t = 0; t < k.length; v = { Va: void 0 }, t++)
          if (((v.Va = k[t]), !u || u(v.Va.metadata.hit_type)))
            if (
              !v.Va.metadata.consent_updated ||
              v.Va.metadata.hit_type === "page_view" ||
              W(q)
            )
              eE(k[t]),
                v.Va.metadata.speculative ||
                  v.Va.isAborted ||
                  (Yw(v.Va),
                  v.Va.metadata.hit_type === "page_view" &&
                    v.Va.j[O.g.Sf] === void 0 &&
                    r === void 0 &&
                    (r = Ql(
                      Kl.He,
                      (function (w) {
                        return function () {
                          W(O.g.O) &&
                            ((w.Va.metadata.user_id_updated = !0),
                            (w.Va.metadata.consent_updated = !1),
                            (w.Va.j[O.g.Yb] = void 0),
                            f(function (x) {
                              return x === "page_view";
                            }),
                            (w.Va.metadata.user_id_updated = !1),
                            Rl(Kl.He, r),
                            (r = void 0));
                        };
                      })(v)
                    )));
      }
      var g =
        d.isGtmEvent && a === ""
          ? { id: "", prefix: "", destinationId: "", ids: [] }
          : Wl(a, d.isGtmEvent);
      if (g) {
        var k = [];
        if (d.eventMetadata.hit_type_override) {
          var m = d.eventMetadata.hit_type_override;
          Array.isArray(m) || (m = [m]);
          (S(60) || S(61) || S(62) || S(63) || S(64)) &&
            m.indexOf("conversion") >= 0 &&
            m.indexOf("user_data_web") < 0 &&
            m.push("user_data_web");
          for (var n = 0; n < m.length; n++) {
            var p = fE(m[n], g, b, d);
            p.metadata.speculative = !1;
            k.push(p);
          }
        } else
          b === O.g.ba &&
            (S(22)
              ? k.push(fE("page_view", g, b, d))
              : k.push(fE("landing_page", g, b, d))),
            k.push(fE("conversion", g, b, d)),
            k.push(fE("user_data_lead", g, b, d)),
            k.push(fE("user_data_web", g, b, d)),
            k.push(fE("remarketing", g, b, d));
        var q = [O.g.N, O.g.O],
          r = void 0;
        Fl(function () {
          f();
          var u = S(27) && !W([O.g.wa]);
          if (!W(q) || u) {
            var v = q;
            u && (v = [].concat(ua(v), [O.g.wa]));
            El(function (t) {
              var w, x, y;
              w = t.consentEventId;
              x = t.consentPriorityId;
              y = t.consentTypes;
              e(w, x);
              y && y.length === 1 && y[0] === O.g.wa
                ? f(function (A) {
                    return A === "remarketing";
                  })
                : f();
            }, v);
          }
        }, q);
      }
    };
  var hE = function (a) {
      var b,
        c,
        d = a.metadata.send_as_iframe,
        e = a.j[O.g.Vg];
      W([O.g.N, O.g.O])
        ? d
          ? ((b = gj()
              ? fj() + "/activityi/" + e + ";"
              : "https://" + e + ".fls.doubleclick.net/activityi;"),
            (c = 3))
          : ((b = Mj("https://ad.doubleclick.net") + "/activity;"), (c = 1))
        : ((b =
            "" + Mj("https://ade.googlesyndication.com") + "/ddm/activity/"),
          (c = 2));
      return { baseUrl: b, endpoint: c, pn: d };
    },
    jE = function (a) {
      a.metadata.hit_type === "page_view"
        ? Gv(a)
        : iE(a, function (b) {
            var c = a.metadata.parsed_target,
              d = hE(a),
              e = d.baseUrl,
              f = d.pn,
              g = [];
            gb(b, function (p, q) {
              g.push(p + "=" + q);
            });
            var k = e + g.join(";") + "?";
            f ? oc(k, a.m.onSuccess) : qc(k, a.m.onSuccess, a.m.onFailure);
            if (a.metadata.attribution_reporting_experiment) {
              var m =
                "" +
                Mj("https://ad.doubleclick.net") +
                "/activity;register_conversion=1;" +
                g.join(";") +
                "?";
              pc(m, void 0, void 0, { attributionsrc: "" });
            }
            if (a.metadata.send_fledge_experiment) {
              var n =
                Mu() + "/td/fls/rul/activityi;fledge=1;" + g.join(";") + "?";
              Ku(n, sk(c.target.id));
            }
          });
    },
    iE = function (a, b) {
      var c = [],
        d = {},
        e = function (r, u, v) {
          var t = v ? String(u) : encodeURIComponent(String(u));
          d[r] = t;
        },
        f = Qc(a.j[O.g.kd]) ? a.j[O.g.kd] : {};
      gb(a.j, function (r, u) {
        var v = kE[r];
        if (v) {
          var t = Zf[v] === !0;
          if (u === void 0 || (!t && u === "")) return;
          e(v, u);
        }
        v === void 0 && e(r, u);
      });
      e("gtm", Oo({ qa: a.metadata.source_canonical_id }));
      Bo() && e("gcs", Co());
      e("gcd", Go(a.m));
      Jo() && e("dma_cps", Ho());
      e("dma", Io());
      Xn(fo()) && e("tcfd", Ko());
      ej() && e("tag_exp", ej());
      var g = lE(a);
      g && e("prd", g, !0);
      e("epver", "2");
      var k = a.j[O.g.za];
      k && a.metadata.redact_click_ids && (k = tr(String(k)));
      gb(f, function (r, u) {
        if (u != null)
          if (r === "~oref") k = u;
          else {
            var v = encodeURIComponent(r);
            d[v] != null && U(141);
            e(v, u);
          }
      });
      var m = W(O.g.O);
      S(106) && (m = !1);
      var n = a.metadata.user_data;
      if (n && m) {
        var p = ni(n);
        p &&
          c.push(
            p.then(function (r) {
              e("em", r.Hb);
            })
          );
      }
      var q = function () {
        k && e("~oref", k);
        b(d);
      };
      if (c.length)
        try {
          Promise.all(c).then(function () {
            q();
          });
          return;
        } catch (r) {}
      q();
    },
    lE = function (a) {
      var b = a.j[O.g.da];
      if (!Array.isArray(b)) return "";
      for (
        var c = [],
          d = function (n, p, q) {
            q !== void 0 &&
              q !== "" &&
              c.push("" + n + p + ":" + encodeURIComponent(String(q)));
          },
          e = 0;
        e < b.length;
        e++
      ) {
        var f = b[e],
          g = S(72),
          k = f.id;
        f.item_id !== void 0 &&
          (g && (k = f.item_id),
          f.id !== void 0 ? (U(150), f.id !== f.item_id && U(151)) : U(152));
        k === void 0 && g && (k = f.item_name);
        var m = e + 1;
        d("i", m, k);
        d("p", m, f.price);
        d("q", m, f[O.g.ud]);
        d("c", m, f[O.g.Bc]);
        d("l", m, f[O.g.Ta]);
        d("a", m, f.accountId);
      }
      return c.join("|");
    },
    mE = {},
    kE =
      ((mE[O.g.Yb] = "gcu"),
      (mE[O.g.tb] = "gclgb"),
      (mE[O.g.Za] = "gclaw"),
      (mE[O.g.Vc] = "gclgs"),
      (mE[O.g.Wc] = "gcllp"),
      (mE[O.g.Xc] = "gclst"),
      (mE[O.g.ub] = "auiddc"),
      (mE[O.g.fc] = "ps"),
      (mE[O.g.Ff] = "pscdl"),
      (mE[O.g.Mg] = "gcldc"),
      (mE[O.g.jb] = "edid"),
      (mE[O.g.jj] = "cat"),
      (mE[O.g.kj] = "type"),
      (mE[O.g.Vg] = "src"),
      (mE[O.g.lj] = "pcor"),
      (mE[O.g.mj] = "num"),
      (mE[O.g.nj] = "tran"),
      (mE[O.g.oj] = "u"),
      (mE[O.g.pe] = "gac"),
      (mE[O.g.Ec] = "gacgb"),
      (mE[O.g.ic] = "gdpr"),
      (mE[O.g.kb] = "gdid"),
      (mE[O.g.Fc] = "_ng"),
      (mE[O.g.Nb] = "frm"),
      (mE[O.g.se] = "gtm_up"),
      (mE[O.g.ud] = "qty"),
      (mE[O.g.mc] = "gdpr_consent"),
      (mE[O.g.Ca] = "ord"),
      (mE[O.g.Vf] = "uaa"),
      (mE[O.g.Wf] = "uab"),
      (mE[O.g.Xf] = "uafvl"),
      (mE[O.g.Yf] = "uamb"),
      (mE[O.g.Zf] = "uam"),
      (mE[O.g.cg] = "uap"),
      (mE[O.g.dg] = "uapv"),
      (mE[O.g.eg] = "uaw"),
      (mE[O.g.oa] = "cost"),
      (mE[O.g.Tb] = "npa"),
      (mE[O.g.za] = null),
      (mE[O.g.kd] = null),
      (mE[O.g.da] = null),
      mE);
  var nE = function () {
      return [O.g.N, O.g.O];
    },
    pE = function (a) {
      var b = Wl(a);
      if (b && (b.ids.length === 1 || b.ids.length === 3)) {
        var c = b.ids[Zl[4]] || "",
          d = b.ids[Zl[5]],
          e = "",
          f = "unknown";
        if (d) {
          var g = d.split("+");
          if (g.length !== 2) return;
          e = g[0];
          f = oE[g[1].toLowerCase()];
        }
        if (f) return { target: b, Ml: c, Nl: e, Ul: f };
      }
    },
    qE = function (a) {
      Ls(a);
    },
    rE = function (a) {
      var b = xb(qm(a.m, O.g.fa, 1), "."),
        c = xb(qm(a.m, O.g.fa, 2), ".");
      a.j[O.g.kb] = b;
      a.j[O.g.jb] = c;
    },
    sE = function (a) {
      if (!a.metadata.consent_updated) {
        var b = V(a.m, O.g.ej);
        if (Qc(b) && b.exclusion_parameters && b.engines)
          if (Mo()) {
          } else {
            var c = V(a.m, O.g.xa) !== !1,
              d = bs(a),
              e = function () {
                if (W(nE())) {
                  var f = {
                    config: b,
                    gtm: Oo({ qa: a.metadata.source_canonical_id }),
                  };
                  c && (Sp(d), (f.auiddc = Qp[Tp(d.prefix)]));
                  B.__dc_ns_processor === void 0 && (B.__dc_ns_processor = []);
                  B.__dc_ns_processor.push(f);
                  mc("https://www.googletagmanager.com/dclk/ns/v1.js");
                }
              };
            W(nE()) ? e() : gl(e, nE());
          }
      }
    },
    vE = function (a, b, c, d) {
      function e() {
        for (var p = l(g), q = p.next(); !q.done; q = p.next()) {
          var r = q.value;
          if (
            !r.metadata.consent_updated ||
            r.metadata.hit_type === "page_view" ||
            W(nE())
          ) {
            for (
              var u = l(r.metadata.hit_type === "page_view" ? tE : uE),
                v = u.next();
              !v.done;
              v = u.next()
            ) {
              var t = v.value;
              t(r);
              if (r.isAborted) break;
            }
            r.metadata.speculative || r.isAborted || jE(r);
          }
        }
      }
      var f = pE(a);
      if (f) {
        var g = [],
          k = new rC(f.target, b, d);
        k.metadata.parsed_target = f;
        k.metadata.counting_method = f.Ul;
        g.push(k);
        if (S(22) && b === O.g.ba) {
          var m = new rC(f.target, b, d);
          m.metadata.hit_type = "page_view";
          m.metadata.speculative = !0;
          g.push(m);
        }
        var n = nE();
        Fl(function () {
          e();
          W(n) ||
            El(function (p) {
              var q, r;
              q = p.consentEventId;
              r = p.consentPriorityId;
              for (var u = l(g), v = u.next(); !v.done; v = u.next()) {
                var t = v.value;
                t.metadata.consent_updated = !0;
                t.metadata.consent_event_id = q;
                t.metadata.consent_priority_id = r;
              }
              e(q, r);
            }, n);
        }, n);
      } else H(d.onFailure);
    },
    uE = [
      ks,
      function (a) {
        a.metadata.conversion_linker_enabled = V(a.m, O.g.xa) !== !1;
        var b = V(a.m, O.g.Cf) === !0,
          c = W(nE());
        if (Mo() && b) {
          b = !1;
        }
        a.metadata.send_as_iframe = b && c;
        var d = V(a.m, O.g.ia);
        a.metadata.redact_ads_data = d !== void 0 && d !== !1;
        a.metadata.redact_click_ids = a.metadata.redact_ads_data && !W(nE());
        a.metadata.cookie_options = bs(a);
      },
      function (a) {
        if (!a.metadata.consent_updated) {
          var b = a.m.isGtmEvent ? V(a.m, "oref") : Cj(Fj(B.location.href));
          a.j[O.g.za] = b;
        }
      },
      function (a) {
        if (a.eventName === O.g.Ya && !a.m.isGtmEvent) {
          if (!a.metadata.consent_updated) {
            var b = {
              callback: V(a.m, O.g.Mb),
              rk: V(a.m, V(a.m, O.g.yb)),
              Nk: V(a.m, O.g.yb),
            };
            js(b, a.metadata.cookie_options, a.metadata.redact_ads_data, Fr);
          }
          a.isAborted = !0;
        }
      },
      function (a) {
        if (a.eventName === O.g.ba && !a.m.isGtmEvent) {
          if (!a.metadata.consent_updated && !S(22)) {
            var b = a.metadata.conversion_linker_enabled,
              c = a.metadata.cookie_options,
              d = a.metadata.redact_ads_data;
            fs(
              {
                Ed: b,
                Nd: V(a.m, O.g.ya) || {},
                Sd: V(a.m, O.g.eb),
                qa: a.metadata.source_canonical_id,
                m: a.m,
                Pd: d,
                Mk: V(a.m, O.g.Da),
              },
              c
            );
            sE(a);
            var e = a.metadata.parsed_target.target,
              f = xb(qm(a.m, O.g.fa, 2), "."),
              g = xb(qm(a.m, O.g.fa, 1), "."),
              k = Nn(!0);
            us({
              Jh: !0,
              rc: b ? c : void 0,
              Nh: f,
              m: a.m,
              Qh: g,
              qg: b,
              Pd: d,
              targetId: e.ids.length > 1 ? e.id : "",
              Sh: k,
            });
          }
          a.isAborted = !0;
        }
      },
      function (a) {
        var b = a.metadata.parsed_target,
          c = {},
          d = V(a.m, O.g.kd);
        Qc(d) &&
          gb(d, function (e, f) {
            f != null && (c[e] = f);
          });
        a.j[O.g.Vg] = b.target.ids[Zl[3]];
        a.j[O.g.kj] = b.Ml;
        a.j[O.g.jj] = b.Nl;
        a.j[O.g.kd] = c;
      },
      function (a) {
        var b = a.metadata.counting_method;
        switch (b) {
          case "standard":
            a.j[O.g.Ca] = db(1e11, 1e13);
            return;
          case "unique":
            a.j[O.g.Ca] = "1";
            a.j[O.g.mj] = db(1e11, 1e13);
            return;
          case "per_session":
            var c = V(a.m, O.g.Ab);
            a.j[O.g.Ca] = c;
            return;
        }
        var d = b === "transactions" ? "1" : V(a.m, O.g.ud);
        a.j[O.g.ud] = d;
        a.copyToHitData(O.g.oa);
        a.copyToHitData(O.g.Ca);
      },
      function (a) {
        a.m.isGtmEvent &&
          (a.copyToHitData(O.g.oj),
          a.copyToHitData(O.g.nj),
          a.copyToHitData(O.g.Wg));
      },
      function (a) {
        a.metadata.consent_updated && (a.j[O.g.Yb] = "1");
      },
      function (a) {
        var b = uo();
        b && (a.j[O.g.ic] = b);
        var c = to();
        c && (a.j[O.g.mc] = c);
      },
      function (a) {
        Ep(!1)._up === "1" && (a.j[O.g.se] = "1");
      },
      function (a) {
        Ao(a.m) ? (a.j[O.g.Tb] = "0") : (a.j[O.g.Tb] = "1");
      },
      function (a) {
        if (a.metadata.conversion_linker_enabled) {
          var b = W(nE()),
            c = a.metadata.cookie_options,
            d = a.metadata.redact_ads_data,
            e = Fr(c.prefix, d),
            f = !1;
          Sp(c);
          var g = b ? Qp[Tp(c.prefix)] : void 0;
          e && e.length && ((a.j[O.g.Mg] = e.join(".")), (f = !0));
          if (S(71) && W(O.g.N)) {
            var k = Hq(c.prefix),
              m = Ur(k);
            a.j[O.g.Vc] = m.lg;
            a.j[O.g.Xc] = m.ng;
            a.j[O.g.Wc] = m.mg;
          }
          if (a.metadata.send_as_iframe) {
            var n = Hq(c.prefix) !== "_gcl",
              p;
            if (!(p = f)) {
              var q = c.prefix;
              p = !(Gj("gclaw") || Gj("gac") || (Wq().aw || []).length > 0
                ? 0
                : (Wq().gb || []).length > 0 ||
                  Wq().gbraid !== void 0 ||
                  rr(q));
            }
            if (p) {
              var r = Gr(c.prefix, d);
              r && r.length && ((a.j[O.g.Za] = r.join(".")), U(59));
              var u,
                v = Gj("gac");
              (u = v
                ? !W(wr()) && d
                  ? "0"
                  : decodeURIComponent(v)
                : Dr(Bq(Aq()) ? pq() : {})) &&
                (n || (a.j[O.g.pe] = u));
            } else {
              var t;
              a: {
                var w = c.prefix,
                  x = Gj("gclgb");
                if (x) t = x.split(".");
                else {
                  var y = Hq(w);
                  if (y === "_gcl") {
                    var A = !W(wr()) && d,
                      C = Wq(),
                      D = [];
                    C.wbraid && D.push(C.wbraid);
                    C.gbraid && D.push(C.gbraid);
                    if (D.length > 0) {
                      t = A ? ["0"] : D;
                      break a;
                    }
                  }
                  t = Fq({ prefix: y });
                }
              }
              var G = t;
              G.length && (a.j[O.g.tb] = G.join("."));
              if (!n) {
                var J,
                  F = Gj("gacgb");
                (J = F
                  ? !W(wr()) && d
                    ? "0"
                    : decodeURIComponent(F)
                  : Dr(Bq(Aq()) ? pq("_gac_gb", !0) : {})) && (a.j[O.g.Ec] = J);
              }
            }
          }
          g && (a.j[O.g.ub] = g);
        }
      },
      function (a) {
        var b = a.metadata.counting_method;
        if (b === "transactions" || b === "items_sold") {
          var c = V(a.m, O.g.da);
          if (Array.isArray(c)) {
            if (!a.m.isGtmEvent)
              for (
                var d = V(a.m, O.g.Bc),
                  e = V(a.m, O.g.Ta),
                  f = l(c),
                  g = f.next();
                !g.done;
                g = f.next()
              ) {
                var k = g.value;
                Qc(k) &&
                  ((k[O.g.Bc] = d), (k[O.g.Ta] = e), (k.accountId = void 0));
              }
            a.j[O.g.da] = c;
          }
        }
      },
      function (a) {
        var b = V(a.m, O.g.jd),
          c = {};
        Qc(b) &&
          gb(b, function (g, k) {
            z(k) && wE.test(g) && (c[g] = k);
          });
        for (var d = pm(a.m), e = 0; e < d.length; e++) {
          var f = d[e];
          wE.test(f) && (c[f] = f);
        }
        gb(c, function (g, k) {
          a.j[g] = V(a.m, k);
        });
      },
      rE,
      function (a) {
        var b = W(nE()) && Iu("attribution-reporting");
        if ((a.metadata.attribution_reporting_experiment = b))
          (a.j[O.g.fc] = "1"), (a.j[O.g.lj] = db());
      },
      function (a) {
        if (a.m.isGtmEvent) {
          var b = V(a.m, O.g.Ha);
          Qc(b) && (a.metadata.user_data = b);
        }
      },
      function (a) {
        if (!Au(B)) U(87);
        else if (Gu !== void 0) {
          U(85);
          var b = yu();
          b ? Du(b, a) : U(86);
        }
      },
      function (a) {
        S(51) &&
          V(a.m, O.g.Fa) !== !1 &&
          W(nE()) &&
          Ao(a.m) &&
          Ju() &&
          (a.metadata.send_fledge_experiment = !0);
      },
      function (a) {
        if (St(a, "ccd_add_1p_data", !1) && W(O.g.O)) {
          var b = a.m.C[O.g.xe];
          if (vj(b)) {
            var c = V(a.m, O.g.Ha);
            c === null
              ? (a.metadata.user_data_from_code = null)
              : (b.enable_code && Qc(c) && (a.metadata.user_data_from_code = c),
                Qc(b.selectors) &&
                  (a.metadata.user_data_from_manual = tj(b.selectors)));
          }
        }
      },
      ls,
      ms,
      ns,
      qE,
    ],
    tE = [es, rE, sE, ns, qE],
    oE = {
      "": "unknown",
      standard: "standard",
      unique: "unique",
      per_session: "per_session",
      transactions: "transactions",
      items_sold: "items_sold",
    },
    wE = /^u([1-9]\d?|100)$/;
  function KE() {
    return vo(7) && vo(9) && vo(10);
  }
  function FF(a, b, c, d) {}
  FF.F = "internal.executeEventProcessor";
  function GF(a) {
    var b;
    K(this.getName(), ["javascript:!string"], arguments);
    L(this, "unsafe_run_arbitrary_javascript");
    try {
      var c = B.google_tag_manager;
      c && typeof c.e === "function" && (b = c.e(a));
    } catch (d) {}
    return dd(b, this.D, 1);
  }
  GF.F = "internal.executeJavascriptString";
  function HF(a) {
    var b;
    return b;
  }
  function IF(a) {
    var b = {};
    return dd(b);
  }
  IF.F = "internal.getAdsCookieWritingOptions";
  function JF(a) {
    var b = !1;
    return b;
  }
  JF.F = "internal.getAllowAdPersonalization";
  function KF(a, b) {
    b = b === void 0 ? !0 : b;
    var c;
    return c;
  }
  KF.F = "internal.getAuid";
  var LF = null;
  function MF() {
    var a = new Ma();
    L(this, "read_container_data"),
      S(46) && LF
        ? (a = LF)
        : (a.set("containerId", "GTM-MW5VCK"),
          a.set("version", "242"),
          a.set("environmentName", ""),
          a.set("debugMode", Rf),
          a.set("previewMode", Sf.Jk),
          a.set("environmentMode", Sf.am),
          a.set("firstPartyServing", gj() || Si),
          a.set("containerUrl", fc),
          a.Ia(),
          S(46) && (LF = a));
    return a;
  }
  MF.T = "getContainerVersion";
  function NF(a, b) {
    b = b === void 0 ? !0 : b;
    var c;
    K(this.getName(), ["name:!string", "decode:?boolean"], arguments),
      L(this, "get_cookies", a),
      (c = dd(Ro(a, void 0, !!b), this.D));
    return c;
  }
  NF.T = "getCookieValues";
  function OF() {
    return ol();
  }
  OF.F = "internal.getCountryCode";
  function PF() {
    var a = [];
    return dd(a);
  }
  PF.F = "internal.getDestinationIds";
  function QF(a) {
    var b = new Ma();
    return b;
  }
  QF.F = "internal.getDeveloperIds";
  function RF(a, b) {
    var c = null;
    return c;
  }
  RF.F = "internal.getElementAttribute";
  function SF(a) {
    var b = null;
    return b;
  }
  SF.F = "internal.getElementById";
  function TF(a) {
    var b = "";
    return b;
  }
  TF.F = "internal.getElementInnerText";
  function UF(a, b) {
    var c = null;
    return c;
  }
  UF.F = "internal.getElementProperty";
  function VF(a) {
    var b;
    return b;
  }
  VF.F = "internal.getElementValue";
  function WF(a) {
    var b = 0;
    return b;
  }
  WF.F = "internal.getElementVisibilityRatio";
  function XF(a) {
    var b = null;
    return b;
  }
  XF.F = "internal.getElementsByCssSelector";
  function YF(a) {
    var b;
    K(this.getName(), ["keyPath:!string"], arguments);
    L(this, "read_event_data", a);
    var c;
    a: {
      var d = a,
        e = PA(this).originalEventData;
      if (e) {
        for (
          var f = e, g = {}, k = {}, m = {}, n = [], p = d.split("\\\\"), q = 0;
          q < p.length;
          q++
        ) {
          for (var r = p[q].split("\\."), u = 0; u < r.length; u++) {
            for (var v = r[u].split("."), t = 0; t < v.length; t++)
              n.push(v[t]), t !== v.length - 1 && n.push(m);
            u !== r.length - 1 && n.push(k);
          }
          q !== p.length - 1 && n.push(g);
        }
        for (
          var w = [], x = "", y = l(n), A = y.next();
          !A.done;
          A = y.next()
        ) {
          var C = A.value;
          C === m
            ? (w.push(x), (x = ""))
            : (x = C === g ? x + "\\" : C === k ? x + "." : x + C);
        }
        x && w.push(x);
        for (var D = l(w), G = D.next(); !G.done; G = D.next()) {
          if (f == null) {
            c = void 0;
            break a;
          }
          f = f[G.value];
        }
        c = f;
      } else c = void 0;
    }
    b = dd(c, this.D, 1);
    return b;
  }
  YF.F = "internal.getEventData";
  var ZF = {};
  ZF.enableAWFledge = S(32);
  ZF.enableAdsConversionValidation = S(16);
  ZF.enableAdsSupernovaParams = S(28);
  ZF.enableAutoPhoneAndAddressDetection = S(30);
  ZF.enableAutoPiiOnPhoneAndAddress = S(31);
  ZF.enableCachedEcommerceData = S(38);
  ZF.enableCloudRecommentationsErrorLogging = S(39);
  ZF.enableCloudRecommentationsSchemaIngestion = S(40);
  ZF.enableCloudRetailInjectPurchaseMetadata = S(42);
  ZF.enableCloudRetailLogging = S(41);
  ZF.enableCloudRetailPageCategories = S(43);
  ZF.enableConsentDisclosureActivity = S(45);
  ZF.enableDCFledge = S(51);
  ZF.enableDecodeUri = S(80);
  ZF.enableDeferAllEnhancedMeasurement = S(52);
  ZF.enableFormSkipValidation = S(75);
  ZF.enableGa4OutboundClicksFix = S(83);
  ZF.enableGaAdsConversions = S(102);
  ZF.enableMerchantRenameForBasketData = S(97);
  ZF.enableUrlDecodeEventUsage = S(120);
  ZF.enableZoneConfigInChildContainers = S(123);
  ZF.useEnableAutoEventOnFormApis = S(135);
  ZF.autoPiiEligible = tl();
  function $F() {
    return dd(ZF);
  }
  $F.F = "internal.getFlags";
  function aG() {
    return new ad(mA);
  }
  aG.F = "internal.getHtmlId";
  function bG(a) {
    var b;
    return b;
  }
  bG.F = "internal.getIframingState";
  function cG(a, b) {
    var c = {};
    return dd(c);
  }
  cG.F = "internal.getLinkerValueFromLocation";
  function dG() {
    var a = new Ma();
    return a;
  }
  dG.F = "internal.getPrivacyStrings";
  function eG(a, b) {
    var c;
    return c;
  }
  eG.F = "internal.getProductSettingsParameter";
  function fG(a, b) {
    var c;
    return c;
  }
  fG.T = "getQueryParameters";
  function gG(a, b) {
    var c;
    return c;
  }
  gG.T = "getReferrerQueryParameters";
  function hG(a) {
    var b = "";
    return b;
  }
  hG.T = "getReferrerUrl";
  function iG() {
    return pl();
  }
  iG.F = "internal.getRegionCode";
  function jG(a, b) {
    var c;
    return c;
  }
  jG.F = "internal.getRemoteConfigParameter";
  function kG() {
    var a = new Ma();
    a.set("width", 0);
    a.set("height", 0);
    return a;
  }
  kG.F = "internal.getScreenDimensions";
  function lG() {
    var a = "";
    return a;
  }
  lG.F = "internal.getTopSameDomainUrl";
  function mG() {
    var a = "";
    return a;
  }
  mG.F = "internal.getTopWindowUrl";
  function nG(a) {
    var b = "";
    return b;
  }
  nG.T = "getUrl";
  function oG() {
    L(this, "get_user_agent");
    return cc.userAgent;
  }
  oG.F = "internal.getUserAgent";
  function pG() {
    var a;
    return dd(a ? Cu(a) : null);
  }
  pG.F = "internal.getUserAgentClientHints";
  function xG() {
    return (B.gaGlobal = B.gaGlobal || {});
  }
  function yG() {
    var a = xG();
    a.hid = a.hid || db();
    return a.hid;
  }
  function zG(a, b) {
    var c = xG();
    if (c.vid === void 0 || (b && !c.from_cookie))
      (c.vid = a), (c.from_cookie = b);
  }
  function VG(a) {
    if (Vt(a) || gj()) a.j[O.g.zj] = pl() || ol();
    !Vt(a) && gj() && (a.j[O.g.Ij] = "::");
  }
  function WG(a) {
    if (S(76) && gj()) {
      os(a);
      ps(a, "cpf", xs(V(a.m, O.g.Na)));
      var b = V(a.m, O.g.hc);
      ps(a, "cu", b === !0 ? 1 : b === !1 ? 0 : void 0);
      ps(a, "cf", xs(V(a.m, O.g.ab)));
      ps(a, "cd", gp(ws(V(a.m, O.g.Ra)), ws(V(a.m, O.g.wb))));
    }
  }
  var lH = function (a) {
      this.H = a;
      this.j = "";
    },
    mH = function (a, b) {
      a.C = b;
      return a;
    },
    nH = function (a, b) {
      b = a.j + b;
      for (var c = b.indexOf("\n\n"); c !== -1; ) {
        var d = a,
          e;
        a: {
          var f = l(b.substring(0, c).split("\n")),
            g = f.next().value,
            k = f.next().value;
          if (g.indexOf("event: message") === 0 && k.indexOf("data: ") === 0)
            try {
              e = JSON.parse(k.substring(k.indexOf(":") + 1));
              break a;
            } catch (F) {}
          e = void 0;
        }
        var m = d,
          n = e;
        if (n) {
          var p = n.send_pixel,
            q = n.options,
            r = m.H;
          if (p) {
            var u = p || [];
            if (Array.isArray(u))
              for (
                var v = Qc(q) ? q : {}, t = l(u), w = t.next();
                !w.done;
                w = t.next()
              )
                r(w.value, v);
          }
          var x = n.create_iframe,
            y = n.options,
            A = m.C;
          if (x && A) {
            var C = x || [];
            if (Array.isArray(C))
              for (
                var D = Qc(y) ? y : {}, G = l(C), J = G.next();
                !J.done;
                J = G.next()
              )
                A(J.value, D);
          }
        }
        b = b.substring(c + 2);
        c = b.indexOf("\n\n");
      }
      a.j = b;
    };
  function oH(a) {
    var b = a.search;
    return (
      a.protocol +
      "//" +
      a.hostname +
      a.pathname +
      (b ? b + "&richsstsse" : "?richsstsse")
    );
  }
  var bI = window,
    cI = document,
    dI = function (a) {
      var b = bI._gaUserPrefs;
      if (
        (b && b.ioo && b.ioo()) ||
        cI.documentElement.hasAttribute("data-google-analytics-opt-out") ||
        (a && bI["ga-disable-" + a] === !0)
      )
        return !0;
      try {
        var c = bI.external;
        if (c && c._gaUserPrefs && c._gaUserPrefs == "oo") return !0;
      } catch (p) {}
      for (
        var d = [], e = String(cI.cookie).split(";"), f = 0;
        f < e.length;
        f++
      ) {
        var g = e[f].split("="),
          k = g[0].replace(/^\s*|\s*$/g, "");
        if (k && k == "AMP_TOKEN") {
          var m = g
            .slice(1)
            .join("=")
            .replace(/^\s*|\s*$/g, "");
          m && (m = decodeURIComponent(m));
          d.push(m);
        }
      }
      for (var n = 0; n < d.length; n++) if (d[n] == "$OPT_OUT") return !0;
      return cI.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
  function oI(a) {
    gb(a, function (c) {
      c.charAt(0) === "_" && delete a[c];
    });
    var b = a[O.g.lb] || {};
    gb(b, function (c) {
      c.charAt(0) === "_" && delete b[c];
    });
  }
  function UI(a, b) {}
  function VI(a, b) {
    var c = function () {};
    return c;
  }
  function WI(a, b, c) {}
  var XI = VI;
  var YI = function (a, b, c) {
    for (var d = 0; d < b.length; d++)
      a.hasOwnProperty(b[d]) && (a[String(b[d])] = c(a[String(b[d])]));
  };
  function ZI(a, b, c) {
    var d = this;
    K(
      this.getName(),
      ["tagId:!string", "configuration:?PixieMap", "messageContext:?PixieMap"],
      arguments
    );
    var e = b ? I(b) : {};
    LA([
      function () {
        return L(d, "configure_google_tags", a, e);
      },
    ]);
    var f = c ? I(c) : {},
      g = PA(this);
    f.originatingEntity = FB(g);
    Dy(Ay(a, e), g.eventId, f);
  }
  ZI.F = "internal.gtagConfig";
  function $I() {
    var a = {};
    return a;
  }
  var aJ = function (a, b) {
    function c(f, g) {
      for (var k in f)
        if (f.hasOwnProperty(k)) {
          var m = g ? g + "." + k : k;
          Qc(f[k]) && e.indexOf(f[k]) === -1
            ? (e.push(f[k]), c(f[k], m))
            : d.push(m);
        }
      e.pop();
    }
    var d = [],
      e = [a];
    c(a, b);
    return d;
  };
  function bJ(a, b) {
    K(this.getName(), ["keyOrObject:!*", "value:?*"], arguments);
    var c = null,
      d = I(a);
    if (Qc(d)) {
      for (var e = aJ(d, ""), f = 0; f < e.length; f++)
        L(this, "write_data_layer", e[f]);
      c = yy(d);
    } else if (typeof d === "string") {
      var g = I(b);
      if (Qc(g))
        for (var k = aJ(g, d), m = 0; m < k.length; m++)
          L(this, "write_data_layer", k[m]);
      else L(this, "write_data_layer", d);
      c = yy(d, g);
    }
    if (c) {
      var n = PA(this);
      Dy(c, n.eventId, GB(n));
      return dd(c);
    }
  }
  bJ.T = "gtagSet";
  function cJ() {
    var a = {};
    return a;
  }
  function dJ(a, b) {}
  dJ.T = "injectHiddenIframe";
  var eJ = AA();
  function fJ(a, b, c, d, e) {
    var f = this;
    K(
      this.getName(),
      [
        "html:!*",
        "onSuccess:!Fn",
        "onFailure:!Fn",
        "useIframe:?boolean",
        "supportDocumentWrite:?boolean",
      ],
      arguments
    );
    var g = PA(this);
    d && eJ(3), e && (eJ(1), eJ(2)), BA(g.eventId, g.nb(), eJ(void 0), "p");
    if (d && e)
      throw Error("useIframe and supportDocumentWrite cannot both be true.");
    L(this, "unsafe_inject_arbitrary_html", d, e);
    var k = S(92)
        ? function () {
            return void b.invoke(f.D);
          }
        : I(b, this.D),
      m = S(92)
        ? function () {
            return void c.invoke(f.D);
          }
        : I(c, this.D),
      n = I(a, this.D, 1);
    gJ(n, k, m, d, e, g);
  }
  var hJ = function (a, b, c, d) {
      return function () {
        try {
          if (b.length > 0) {
            var e = b.shift(),
              f = hJ(a, b, c, d),
              g = e;
            if (
              String(g.nodeName).toUpperCase() === "SCRIPT" &&
              g.type === "text/gtmscript"
            ) {
              var k = g.text || g.textContent || g.innerHTML || "",
                m = g.getAttribute("data-gtmsrc"),
                n = g.charset || "";
              m
                ? mc(m, f, d, { async: !1, id: e.id, text: k, charset: n }, a)
                : ((g = E.createElement("script")),
                  (g.async = !1),
                  (g.type = "text/javascript"),
                  (g.id = e.id),
                  (g.text = k),
                  (g.charset = n),
                  f && (g.onload = f),
                  a.insertBefore(g, null));
              m || f();
            } else if (
              e.innerHTML &&
              e.innerHTML.toLowerCase().indexOf("<script") >= 0
            ) {
              for (var p = []; e.firstChild; )
                p.push(e.removeChild(e.firstChild));
              a.insertBefore(e, null);
              hJ(e, p, f, d)();
            } else a.insertBefore(e, null), f();
          } else c();
        } catch (q) {
          d();
        }
      };
    },
    gJ = function (a, b, c, d, e, f) {
      if (E.body) {
        var g = rA(a, b, c);
        a = g.nk;
        b = g.onSuccess;
        if (d) {
        } else e ? iJ(a, b, c) : hJ(E.body, vc(a), b, c)();
      } else
        B.setTimeout(function () {
          gJ(a, b, c, d, e, f);
        });
    };
  var iJ = function (a, b, c) {
    vx(function () {
      var d = google_tag_manager_external.postscribe.getPostscribe(),
        e = { done: b },
        f = document.createElement("div");
      f.style.display = "none";
      f.style.visibility = "hidden";
      E.body.appendChild(f);
      try {
        d(f, a, e);
      } catch (g) {
        c();
      }
    });
  };
  fJ.F = "internal.injectHtml";
  var jJ = {};
  var kJ = function (a, b, c, d, e, f) {
    f
      ? e[f]
        ? (e[f][0].push(c), e[f][1].push(d))
        : ((e[f] = [[c], [d]]),
          mc(
            a,
            function () {
              for (var g = e[f][0], k = 0; k < g.length; k++) H(g[k]);
              g.push = function (m) {
                H(m);
                return 0;
              };
            },
            function () {
              for (var g = e[f][1], k = 0; k < g.length; k++) H(g[k]);
              e[f] = null;
            },
            b
          ))
      : mc(a, c, d, b);
  };
  function lJ(a, b, c, d) {
    if (!Mo()) {
      K(
        this.getName(),
        ["url:!string", "onSuccess:?Fn", "onFailure:?Fn", "cacheToken:?string"],
        arguments
      );
      L(this, "inject_script", a);
      var e = this.D;
      kJ(
        a,
        void 0,
        function () {
          b && b.pb(e);
        },
        function () {
          c && c.pb(e);
        },
        jJ,
        d
      );
    }
  }
  var mJ = { dl: 1, id: 1 },
    nJ = {};
  function oJ(a, b, c, d) {}
  lJ.T = "injectScript";
  oJ.F = "internal.injectScript";
  function pJ(a) {
    var b = !0;
    return b;
  }
  pJ.T = "isConsentGranted";
  function qJ(a) {
    var b = !1;
    return b;
  }
  qJ.F = "internal.isDebugMode";
  function rJ() {
    return rl();
  }
  rJ.F = "internal.isDmaRegion";
  function sJ(a) {
    var b = !1;
    return b;
  }
  sJ.F = "internal.isEntityInfrastructure";
  function tJ() {
    var a = !1;
    return a;
  }
  tJ.F = "internal.isLandingPage";
  function uJ() {
    var a = Vg(function (b) {
      PA(this).log("error", b);
    });
    a.T = "JSON";
    return a;
  }
  function vJ(a) {
    var b = void 0;
    return dd(b);
  }
  vJ.F = "internal.legacyParseUrl";
  function wJ() {
    return !1;
  }
  var xJ = {
    getItem: function (a) {
      var b = null;
      return b;
    },
    setItem: function (a, b) {
      return !1;
    },
    removeItem: function (a) {},
  };
  function yJ() {
    try {
      L(this, "logging");
    } catch (c) {
      return;
    }
    if (!console) return;
    for (
      var a = Array.prototype.slice.call(arguments, 0), b = 0;
      b < a.length;
      b++
    )
      a[b] = I(a[b], this.D);
    console.log.apply(console, a);
  }
  yJ.T = "logToConsole";
  function zJ(a, b) {}
  zJ.F = "internal.mergeRemoteConfig";
  function AJ(a, b, c) {
    c = c === void 0 ? !0 : c;
    var d = [];
    return dd(d);
  }
  AJ.F = "internal.parseCookieValuesFromString";
  function BJ(a) {
    var b = void 0;
    return b;
  }
  BJ.T = "parseUrl";
  function CJ(a) {}
  CJ.F = "internal.processAsNewEvent";
  function DJ(a, b, c) {
    var d;
    return d;
  }
  DJ.F = "internal.pushToDataLayer";
  function EJ(a) {
    var b = !1;
    K(this.getName(), ["permission:!string"], [a]);
    for (
      var c = Array.prototype.slice.call(arguments, 0), d = 0;
      d < c.length;
      ++d
    )
      c[d] = I(c[d], this.D, 1);
    c.unshift(this);
    try {
      L.apply(null, c), (b = !0);
    } catch (e) {
      return !1;
    }
    return b;
  }
  EJ.T = "queryPermission";
  function FJ() {
    var a = "";
    return a;
  }
  FJ.T = "readCharacterSet";
  function GJ() {
    return Ji.qb;
  }
  GJ.F = "internal.readDataLayerName";
  function HJ() {
    var a = "";
    return a;
  }
  HJ.T = "readTitle";
  function IJ(a, b) {
    var c = this;
  }
  IJ.F = "internal.registerCcdCallback";
  function JJ(a) {
    return !0;
  }
  JJ.F = "internal.registerDestination";
  var KJ = ["config", "event", "get", "set"];
  function LJ(a, b, c) {}
  LJ.F = "internal.registerGtagCommandListener";
  function MJ(a, b) {
    var c = !1;
    return c;
  }
  MJ.F = "internal.removeDataLayerEventListener";
  function NJ(a, b) {}
  NJ.F = "internal.removeFormData";
  function OJ() {}
  OJ.T = "resetDataLayer";
  function PJ(a, b, c) {
    var d = void 0;
    return d;
  }
  PJ.F = "internal.scrubUrlParams";
  function QJ(a) {}
  QJ.F = "internal.sendAdsHit";
  function RJ(a, b, c, d) {}
  RJ.F = "internal.sendGtagEvent";
  function SJ(a, b, c) {}
  SJ.T = "sendPixel";
  function TJ(a, b) {}
  TJ.F = "internal.setAnchorHref";
  function UJ(a) {}
  UJ.F = "internal.setContainerConsentDefaults";
  function VJ(a, b, c, d) {
    var e = this;
    d = d === void 0 ? !0 : d;
    var f = !1;
    return f;
  }
  VJ.T = "setCookie";
  function WJ(a) {}
  WJ.F = "internal.setCorePlatformServices";
  function XJ(a, b) {}
  XJ.F = "internal.setDataLayerValue";
  function YJ(a) {
    K(this.getName(), ["consentSettings:!PixieMap"], arguments);
    for (var b = a.ka(), c = l(b), d = c.next(); !d.done; d = c.next()) {
      var e = d.value;
      e !== O.g.Kb && e !== O.g.yf && L(this, "access_consent", e, "write");
    }
    var f = PA(this),
      g = f.eventId,
      k = GB(f),
      m = zy("consent", "default", I(a));
    Dy(m, g, k);
  }
  YJ.T = "setDefaultConsentState";
  function ZJ(a, b) {}
  ZJ.F = "internal.setDelegatedConsentType";
  function $J(a, b) {}
  $J.F = "internal.setFormAction";
  function aK(a, b, c) {}
  aK.F = "internal.setInCrossContainerData";
  function bK(a, b, c) {
    K(
      this.getName(),
      ["path:!string", "value:?*", "overrideExisting:?boolean"],
      arguments
    );
    L(this, "access_globals", "readwrite", a);
    var d = a.split("."),
      e = ub(d, [B, E]),
      f = d.pop();
    if (e && (e[f] === void 0 || c)) return (e[f] = I(b, this.D, 2)), !0;
    return !1;
  }
  bK.T = "setInWindow";
  function cK(a, b, c) {}
  cK.F = "internal.setProductSettingsParameter";
  function dK(a, b, c) {}
  dK.F = "internal.setRemoteConfigParameter";
  function eK(a, b, c, d) {
    var e = this;
  }
  eK.T = "sha256";
  function fK(a, b, c) {}
  fK.F = "internal.sortRemoteConfigParameters";
  function gK(a, b) {
    var c = void 0;
    return c;
  }
  gK.F = "internal.subscribeToCrossContainerData";
  var hK = {},
    iK = {};
  hK.getItem = function (a) {
    var b = null;
    return b;
  };
  hK.setItem = function (a, b) {};
  hK.removeItem = function (a) {};
  hK.clear = function () {};
  hK.T = "templateStorage";
  function jK(a, b) {
    var c = !1;
    return c;
  }
  jK.F = "internal.testRegex";
  function kK(a) {
    var b;
    return b;
  }
  function lK(a) {
    var b;
    return b;
  }
  lK.F = "internal.unsiloId";
  function mK(a, b) {
    var c;
    return c;
  }
  mK.F = "internal.unsubscribeFromCrossContainerData";
  function nK(a) {
    K(this.getName(), ["consentSettings:!PixieMap"], arguments);
    var b = I(a),
      c;
    for (c in b) b.hasOwnProperty(c) && L(this, "access_consent", c, "write");
    var d = PA(this);
    Dy(zy("consent", "update", b), d.eventId, GB(d));
  }
  nK.T = "updateConsentState";
  var oK;
  function pK(a, b, c) {
    oK = oK || new fh();
    oK.add(a, b, c);
  }
  function qK(a, b) {
    var c = (oK = oK || new fh());
    if (c.j.hasOwnProperty(a))
      throw Error(
        "Attempting to add a private function which already exists: " + a + "."
      );
    if (c.contains(a))
      throw Error(
        "Attempting to add a private function with an existing API name: " +
          a +
          "."
      );
    c.j[a] = Za(b) ? Cg(a, b) : Dg(a, b);
  }
  function rK() {
    return function (a) {
      var b;
      var c = oK;
      if (c.contains(a)) b = c.get(a, this);
      else {
        var d;
        if ((d = c.j.hasOwnProperty(a))) {
          var e = !1,
            f = this.D.j;
          if (f) {
            var g = f.nb();
            if (g) {
              g.indexOf("__cvt_") !== 0 && (e = !0);
            }
          } else e = !0;
          d = e;
        }
        if (d) {
          var k = c.j.hasOwnProperty(a) ? c.j[a] : void 0;
          b = k;
        } else throw Error(a + " is not a valid API name.");
      }
      return b;
    };
  }
  function sK() {
    var a = function (c) {
        return void qK(c.F, c);
      },
      b = function (c) {
        return void pK(c.T, c);
      };
    b(JA);
    b(QA);
    b(dC);
    b(fC);
    b(gC);
    b(nC);
    b(pC);
    b(tC);
    b(uJ());
    b(vC);
    b(MF);
    b(NF);
    b(fG);
    b(gG);
    b(hG);
    b(nG);
    b(bJ);
    b(dJ);
    b(lJ);
    b(pJ);
    b(yJ);
    b(BJ);
    b(EJ);
    b(FJ);
    b(HJ);
    b(SJ);
    b(VJ);
    b(YJ);
    b(bK);
    b(eK);
    b(hK);
    b(nK);
    pK("Math", Hg());
    pK("Object", dh);
    pK("TestHelper", hh());
    pK("assertApi", Eg);
    pK("assertThat", Fg);
    pK("decodeUri", Jg);
    pK("decodeUriComponent", Kg);
    pK("encodeUri", Lg);
    pK("encodeUriComponent", Mg);
    pK("fail", Rg);
    pK("generateRandom", Sg);
    pK("getTimestamp", Tg);
    pK("getTimestampMillis", Tg);
    pK("getType", Ug);
    pK("makeInteger", Wg);
    pK("makeNumber", Xg);
    pK("makeString", Yg);
    pK("makeTableMap", Zg);
    pK("mock", bh);
    pK("fromBase64", HF, !("atob" in B));
    pK("localStorage", xJ, !wJ());
    pK("toBase64", kK, !("btoa" in B));
    a(IA);
    a(MA);
    a(gB);
    a(sB);
    a(zB);
    a(EB);
    a(TB);
    a(bC);
    a(eC);
    a(hC);
    a(iC);
    a(jC);
    a(kC);
    a(lC);
    a(mC);
    a(oC);
    a(qC);
    a(sC);
    a(uC);
    a(wC);
    a(yC);
    a(zC);
    a(AC);
    a(BC);
    a(CC);
    a(GC);
    a(OC);
    a(PC);
    a($C);
    a(eD);
    a(jD);
    a(sD);
    a(xD);
    a(KD);
    a(MD);
    a($D);
    a(aE);
    a(cE);
    a(FF);
    a(GF);
    a(IF);
    a(JF);
    a(KF);
    a(OF);
    a(PF);
    a(QF);
    a(RF);
    a(SF);
    a(TF);
    a(UF);
    a(VF);
    a(WF);
    a(XF);
    a(YF);
    a($F);
    a(aG);
    a(bG);
    a(cG);
    a(dG);
    a(eG);
    a(iG);
    a(jG);
    a(kG);
    a(lG);
    a(mG);
    a(pG);
    a(ZI);
    a(fJ);
    a(oJ);
    a(qJ);
    a(rJ);
    a(sJ);
    a(tJ);
    a(vJ);
    a(RB);
    a(zJ);
    a(AJ);
    a(CJ);
    a(DJ);
    a(GJ);
    a(IJ);
    a(JJ);
    a(LJ);
    a(MJ);
    a(NJ);
    a(PJ);
    a(QJ);
    a(RJ);
    a(TJ);
    a(UJ);
    a(WJ);
    a(XJ);
    a(ZJ);
    a($J);
    a(aK);
    a(cK);
    a(dK);
    a(fK);
    a(gK);
    a(jK);
    a(lK);
    a(mK);
    qK("internal.CrossContainerSchema", xC());
    qK("internal.GtagSchema", $I());
    qK("internal.IframingStateSchema", cJ());
    pK("mockObject", ch);
    return rK();
  }
  var GA;
  function tK() {
    GA.j.j.H = function (a, b, c) {
      Ki.SANDBOXED_JS_SEMAPHORE = Ki.SANDBOXED_JS_SEMAPHORE || 0;
      Ki.SANDBOXED_JS_SEMAPHORE++;
      try {
        return a.apply(b, c);
      } finally {
        Ki.SANDBOXED_JS_SEMAPHORE--;
      }
    };
  }
  function uK(a) {
    a &&
      gb(a, function (b, c) {
        for (var d = 0; d < c.length; d++) {
          var e = c[d].replace(/^_*/, "");
          $i[e] = $i[e] || [];
          $i[e].push(b);
        }
      });
  }
  function vK(a) {
    Dy(yy("developer_id." + a, !0), 0, {});
  }
  var wK = Array.isArray;
  function xK(a, b) {
    return Rc(a, b || null);
  }
  function X(a) {
    return window.encodeURIComponent(a);
  }
  function yK(a, b, c) {
    qc(a, b, c);
  }
  function zK(a, b) {
    if (!a) return !1;
    var c = zj(Fj(a), "host");
    if (!c) return !1;
    for (var d = 0; b && d < b.length; d++) {
      var e = b[d] && b[d].toLowerCase();
      if (e) {
        var f = c.length - e.length;
        f > 0 && e.charAt(0) !== "." && (f--, (e = "." + e));
        if (f >= 0 && c.indexOf(e, f) === f) return !0;
      }
    }
    return !1;
  }
  function AK(a, b, c) {
    for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
      a[f] &&
        a[f].hasOwnProperty(b) &&
        a[f].hasOwnProperty(c) &&
        ((d[a[f][b]] = a[f][c]), (e = !0));
    return e ? d : null;
  }
  var JK = B.clearTimeout,
    KK = B.setTimeout;
  function LK(a, b, c) {
    if (Mo()) {
      b && H(b);
    } else return mc(a, b, c);
  }
  function MK() {
    return B.location.href;
  }
  function NK(a, b) {
    return mj(a, b || 2);
  }
  function OK(a, b) {
    B[a] = b;
  }
  function PK(a, b, c) {
    b && (B[a] === void 0 || (c && !B[a])) && (B[a] = b);
    return B[a];
  }
  function QK(a, b) {
    if (Mo()) {
      b && H(b);
    } else oc(a, b);
  }

  var RK = {};
  var Y = { securityGroups: {} };

  (Y.securityGroups.vis = ["google"]),
    (function () {
      var a = {};
      (function (b) {
        Y.__vis = b;
        Y.__vis.o = "vis";
        Y.__vis.isVendorTemplate = !0;
        Y.__vis.priorityOverride = 0;
        Y.__vis.isInfrastructure = !0;
        Y.__vis.runInSiloedMode = !1;
      })(function (b) {
        var c,
          d = [];
        d.push(
          b.vtp_selectorType === "CSS"
            ? b.vtp_elementSelector
            : "#" + b.vtp_elementId
        );
        d.push(b.vtp_outputMethod);
        b.vtp_outputMethod == "BOOLEAN" && d.push(b.vtp_onScreenRatio);
        c = d.join("&");
        var e = a[c],
          f = Number(new Date());
        if (e && f - e.time < 250) return e.value;
        e = { time: f, value: null };
        var g = b.vtp_outputMethod,
          k = null;
        if (b.vtp_selectorType == "CSS")
          try {
            var m = Mh(b.vtp_elementSelector);
            m && m.length > 0 && (k = m[0]);
          } catch (p) {
            k = null;
          }
        else k = E.getElementById(b.vtp_elementId);
        if (k)
          switch (g) {
            case "BOOLEAN":
              var n = (Number(b.vtp_onScreenRatio) || 50) / 100;
              e.value = Ys(k) >= n && !Ws(k);
              break;
            case "PERCENT":
              (e.value = 0), Ws(k) || (e.value = Math.round(Ys(k) * 1e3) / 10);
          }
        a[c] = e;
        return e.value;
      });
    })();
  (Y.securityGroups.flc = []),
    (Y.__flc = function (a) {
      var b =
          !a.hasOwnProperty("vtp_enableConversionLinker") ||
          !!a.vtp_enableConversionLinker,
        c = AK(a.vtp_customVariable || [], "key", "value") || {},
        d = {},
        e =
          ((d[O.g.ia] = NK(O.g.ia)),
          (d[O.g.Cf] = a.vtp_useImageTag === !0 ? !1 : !0),
          (d[O.g.hb] = a.vtp_conversionCookiePrefix || void 0),
          (d[O.g.xa] = b),
          (d[O.g.Ab] = a.vtp_sessionId),
          (d[O.g.Wg] = a.vtp_matchIdVariable),
          (d.oref = a.vtp_useImageTag ? void 0 : a.vtp_url),
          (d.tran = a.vtp_transactionVariable),
          (d.u = a.vtp_userVariable),
          (d[O.g.Ha] = a.vtp_userDataVariable),
          d);
      S(51) && ((e[O.g.Fa] = NK(O.g.Fa)), (e[O.g.na] = NK(O.g.na)));
      for (var f in c) c.hasOwnProperty(f) && (e[f] = c[f]);
      var g = "DC-" + a.vtp_advertiserId,
        k =
          g +
          "/" +
          a.vtp_groupTag +
          "/" +
          (a.vtp_activityTag +
            "+" +
            ({ UNIQUE: "unique", SESSION: "per_session" }[a.vtp_ordinalType] ||
              "standard"));
      px(g, void 0, { source: 7, fromContainerExecution: !0, siloed: !0 });
      var m = {
        noGtmEvent: !0,
        isGtmEvent: !0,
        onSuccess: a.vtp_gtmOnSuccess,
        onFailure: a.vtp_gtmOnFailure,
      };
      Dy(By(kk(k), "", e), a.vtp_gtmEventId, m);
    }),
    (Y.__flc.o = "flc"),
    (Y.__flc.isVendorTemplate = !0),
    (Y.__flc.priorityOverride = 0),
    (Y.__flc.isInfrastructure = !1),
    (Y.__flc.runInSiloedMode = !1);
  (Y.securityGroups.f = ["google"]),
    (Y.__f = function (a) {
      var b = NK("gtm.referrer", 1) || E.referrer;
      return b
        ? a.vtp_component && a.vtp_component != "URL"
          ? zj(
              Fj(String(b)),
              a.vtp_component,
              a.vtp_stripWww,
              a.vtp_defaultPages,
              a.vtp_queryKey
            )
          : Cj(Fj(String(b)))
        : String(b);
    }),
    (Y.__f.o = "f"),
    (Y.__f.isVendorTemplate = !0),
    (Y.__f.priorityOverride = 0),
    (Y.__f.isInfrastructure = !0),
    (Y.__f.runInSiloedMode = !1);

  (Y.securityGroups.k = ["google"]),
    (Y.__k = function (a) {
      var b = a.vtp_name,
        c = NK("gtm.cookie", 1),
        d = !!a.vtp_decodeCookie;
      return Ro(b, c, d === void 0 ? !0 : !!d)[0];
    }),
    (Y.__k.o = "k"),
    (Y.__k.isVendorTemplate = !0),
    (Y.__k.priorityOverride = 0),
    (Y.__k.isInfrastructure = !0),
    (Y.__k.runInSiloedMode = !1);
  (Y.securityGroups.fls = []),
    (Y.__fls = function (a) {
      var b = [];
      if (a.vtp_enableProductReporting)
        switch (a.vtp_dataSource) {
          case "DATA_LAYER":
            b = NK("ecommerce.purchase.products");
            break;
          case "JSON":
            b = a.vtp_productData;
            break;
          case "STRING":
            for (
              var c = (a.vtp_productData || "").split("|"), d = 0;
              d < c.length;
              d++
            ) {
              var e = c[d].split(":");
              e[1] = (e[1] && X(e[1])) || "";
              c[d] = e.join(":");
              var f = {
                  i: "id",
                  p: "price",
                  q: "quantity",
                  c: "country",
                  l: "language",
                  a: "accountId",
                },
                g = e[0][0],
                k = Number(e[0].slice(1)) - 1,
                m = b[k] || {};
              f.hasOwnProperty(g) && (m[f[g]] = e[1]);
              b[k] = m;
            }
        }
      var n =
          !a.hasOwnProperty("vtp_enableConversionLinker") ||
          !!a.vtp_enableConversionLinker,
        p = AK(a.vtp_customVariable || [], "key", "value") || {},
        q = {},
        r =
          ((q[O.g.ia] = NK(O.g.ia)),
          (q[O.g.Cf] = !a.vtp_useImageTag),
          (q[O.g.da] = b),
          (q[O.g.hb] = a.vtp_conversionCookiePrefix || void 0),
          (q[O.g.xa] = n),
          (q[O.g.ud] = a.vtp_quantity),
          (q[O.g.Ca] = a.vtp_orderId),
          (q[O.g.oa] = a.vtp_revenue),
          (q[O.g.Wg] = a.vtp_matchIdVariable),
          (q.oref = a.vtp_useImageTag ? void 0 : a.vtp_url),
          (q.tran = a.vtp_transactionVariable),
          (q.u = a.vtp_userVariable),
          (q[O.g.Ha] = a.vtp_userDataVariable),
          q);
      S(51) && ((r[O.g.Fa] = NK(O.g.Fa)), (r[O.g.na] = NK(O.g.na)));
      for (var u in p) p.hasOwnProperty(u) && (r[u] = p[u]);
      var v = "DC-" + a.vtp_advertiserId,
        t =
          v +
          "/" +
          a.vtp_groupTag +
          "/" +
          (a.vtp_activityTag +
            "+" +
            (a.vtp_countingMethod === "ITEM_SOLD"
              ? "items_sold"
              : "transactions"));
      px(v, void 0, { source: 7, fromContainerExecution: !0, siloed: !0 });
      var w = {
        noGtmEvent: !0,
        isGtmEvent: !0,
        onSuccess: a.vtp_gtmOnSuccess,
        onFailure: a.vtp_gtmOnFailure,
      };
      Dy(By(kk(t), "", r), a.vtp_gtmEventId, w);
    }),
    (Y.__fls.o = "fls"),
    (Y.__fls.isVendorTemplate = !0),
    (Y.__fls.priorityOverride = 0),
    (Y.__fls.isInfrastructure = !1),
    (Y.__fls.runInSiloedMode = !1);
  (Y.securityGroups.access_globals = ["google"]),
    (function () {
      function a(b, c, d) {
        var e = { key: d, read: !1, write: !1, execute: !1 };
        switch (c) {
          case "read":
            e.read = !0;
            break;
          case "write":
            e.write = !0;
            break;
          case "readwrite":
            e.read = e.write = !0;
            break;
          case "execute":
            e.execute = !0;
            break;
          default:
            throw Error("Invalid " + b + " request " + c);
        }
        return e;
      }
      (function (b) {
        Y.__access_globals = b;
        Y.__access_globals.o = "access_globals";
        Y.__access_globals.isVendorTemplate = !0;
        Y.__access_globals.priorityOverride = 0;
        Y.__access_globals.isInfrastructure = !1;
        Y.__access_globals.runInSiloedMode = !1;
      })(function (b) {
        for (
          var c = b.vtp_keys || [],
            d = b.vtp_createPermissionError,
            e = [],
            f = [],
            g = [],
            k = 0;
          k < c.length;
          k++
        ) {
          var m = c[k],
            n = m.key;
          m.read && e.push(n);
          m.write && f.push(n);
          m.execute && g.push(n);
        }
        return {
          assert: function (p, q, r) {
            if (!z(r)) throw d(p, {}, "Key must be a string.");
            if (q === "read") {
              if (e.indexOf(r) > -1) return;
            } else if (q === "write") {
              if (f.indexOf(r) > -1) return;
            } else if (q === "readwrite") {
              if (f.indexOf(r) > -1 && e.indexOf(r) > -1) return;
            } else if (q === "execute") {
              if (g.indexOf(r) > -1) return;
            } else
              throw d(
                p,
                {},
                "Operation must be either 'read', 'write', or 'execute', was " +
                  q
              );
            throw d(
              p,
              {},
              "Prohibited " + q + " on global variable: " + r + "."
            );
          },
          M: a,
        };
      });
    })();
  (Y.securityGroups.u = ["google"]),
    (function () {
      var a = function (b) {
        return {
          toString: function () {
            return b;
          },
        };
      };
      (function (b) {
        Y.__u = b;
        Y.__u.o = "u";
        Y.__u.isVendorTemplate = !0;
        Y.__u.priorityOverride = 0;
        Y.__u.isInfrastructure = !0;
        Y.__u.runInSiloedMode = !1;
      })(function (b) {
        var c;
        c =
          (c = b.vtp_customUrlSource
            ? b.vtp_customUrlSource
            : NK("gtm.url", 1)) || MK();
        var d = b[a("vtp_component")];
        if (!d || d == "URL") return Cj(Fj(String(c)));
        var e = Fj(String(c)),
          f;
        if (d === "QUERY")
          a: {
            var g = b[a("vtp_multiQueryKeys").toString()],
              k = b[a("vtp_queryKey").toString()] || "",
              m = b[a("vtp_ignoreEmptyQueryParam").toString()],
              n;
            n = g
              ? Array.isArray(k)
                ? k
                : String(k).replace(/\s+/g, "").split(",")
              : [String(k)];
            for (var p = 0; p < n.length; p++) {
              var q = zj(e, "QUERY", void 0, void 0, n[p]);
              if (q != void 0 && (!m || q !== "")) {
                f = q;
                break a;
              }
            }
            f = void 0;
          }
        else
          f = zj(
            e,
            d,
            d == "HOST" ? b[a("vtp_stripWww")] : void 0,
            d == "PATH" ? b[a("vtp_defaultPages")] : void 0
          );
        return f;
      });
    })();
  (Y.securityGroups.v = ["google"]),
    (Y.__v = function (a) {
      var b = a.vtp_name;
      if (!b || !b.replace) return !1;
      var c = NK(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1);
      return c !== void 0 ? c : a.vtp_defaultValue;
    }),
    (Y.__v.o = "v"),
    (Y.__v.isVendorTemplate = !0),
    (Y.__v.priorityOverride = 0),
    (Y.__v.isInfrastructure = !0),
    (Y.__v.runInSiloedMode = !1);

  (Y.securityGroups.ytl = ["google"]),
    (function () {
      function a() {
        var t = Math.round(Math.random() * 1e9) + "";
        return E.getElementById(t) ? a() : t;
      }
      function b(t, w) {
        if (!t) return !1;
        for (var x = 0; x < q.length; x++)
          if (t.indexOf("//" + q[x] + "/" + w) >= 0) return !0;
        return !1;
      }
      function c(t, w) {
        var x = t.getAttribute("src");
        if (b(x, "embed/")) {
          if (x.indexOf("enablejsapi=1") > 0) return !0;
          if (w) {
            var y = t.setAttribute,
              A;
            var C = x.indexOf("?") !== -1 ? "&" : "?";
            if (x.indexOf("origin=") > -1) A = x + C + "enablejsapi=1";
            else {
              if (!u) {
                var D = PK("document");
                u = D.location.protocol + "//" + D.location.hostname;
                D.location.port && (u += ":" + D.location.port);
              }
              A = x + C + "enablejsapi=1&origin=" + encodeURIComponent(u);
            }
            y.call(t, "src", A);
            return !0;
          }
        }
        return !1;
      }
      function d(t, w) {
        if (
          !t.getAttribute("data-gtm-yt-inspected-" + w.Jb) &&
          (t.setAttribute("data-gtm-yt-inspected-" + w.Jb, "true"), c(t, w.Ue))
        ) {
          t.id || (t.id = a());
          var x = PK("YT"),
            y = x.get(t.id);
          y || (y = new x.Player(t.id));
          var A = f(y, w),
            C = {},
            D;
          for (D in A)
            (C = { ff: C.ff }),
              (C.ff = D),
              A.hasOwnProperty(C.ff) &&
                y.addEventListener(
                  C.ff,
                  (function (G) {
                    return function (J) {
                      return A[G.ff](J.data);
                    };
                  })(C)
                );
        }
      }
      function e(t) {
        H(function () {
          function w() {
            for (
              var y = x.getElementsByTagName("iframe"), A = y.length, C = 0;
              C < A;
              C++
            )
              d(y[C], t);
          }
          var x = PK("document");
          w();
          JC(w);
        });
      }
      function f(t, w) {
        var x, y;
        function A() {
          ba = ND(
            function () {
              return {
                url: M,
                title: ea,
                Mh: R,
                hk: t.getCurrentTime(),
                playbackRate: ha,
              };
            },
            w.Jb,
            t.getIframe()
          );
          R = 0;
          ea = M = "";
          ha = 1;
          return C;
        }
        function C(va) {
          switch (va) {
            case r.PLAYING:
              R = Math.round(t.getDuration());
              M = t.getVideoUrl();
              if (t.getVideoData) {
                var La = t.getVideoData();
                ea = La ? La.title : "";
              }
              ha = t.getPlaybackRate();
              w.Gh ? Ez(ba.createEvent("start")) : ba.Dd();
              fa = m(w.ki, w.ji, t.getDuration());
              return D(va);
            default:
              return C;
          }
        }
        function D() {
          da = t.getCurrentTime();
          ta = new Date().getTime();
          ba.Bk();
          Z();
          return G;
        }
        function G(va) {
          var La;
          switch (va) {
            case r.ENDED:
              return F(va);
            case r.PAUSED:
              La = "pause";
            case r.BUFFERING:
              var cb = t.getCurrentTime() - da;
              La =
                Math.abs(((new Date().getTime() - ta) / 1e3) * ha - cb) > 1
                  ? "seek"
                  : La || "buffering";
              t.getCurrentTime() && (w.Fh ? Ez(ba.createEvent(La)) : ba.Dd());
              N();
              return J;
            case r.UNSTARTED:
              return A(va);
            default:
              return G;
          }
        }
        function J(va) {
          switch (va) {
            case r.ENDED:
              return F(va);
            case r.PLAYING:
              return D(va);
            case r.UNSTARTED:
              return A(va);
            default:
              return J;
          }
        }
        function F() {
          for (; y; ) {
            var va = x;
            JK(y);
            va();
          }
          w.Eh && Ez(ba.createEvent("complete", 1));
          return A(r.UNSTARTED);
        }
        function T() {}
        function N() {
          y && (JK(y), (y = 0), (x = T));
        }
        function Z() {
          if (fa.length && ha !== 0) {
            var va = -1,
              La;
            do {
              La = fa[0];
              if (La.Ja > t.getDuration()) return;
              va = (La.Ja - t.getCurrentTime()) / ha;
              if (va < 0 && (fa.shift(), fa.length === 0)) return;
            } while (va < 0);
            x = function () {
              y = 0;
              x = T;
              fa.length > 0 &&
                fa[0].Ja === La.Ja &&
                (fa.shift(), Ez(ba.createEvent("progress", La.nf, La.rf)));
              Z();
            };
            y = KK(x, va * 1e3);
          }
        }
        var ba,
          fa = [],
          R,
          M,
          ea,
          ha,
          da,
          ta,
          Na = A(r.UNSTARTED);
        y = 0;
        x = T;
        return {
          onStateChange: function (va) {
            Na = Na(va);
          },
          onPlaybackRateChange: function (va) {
            da = t.getCurrentTime();
            ta = new Date().getTime();
            ba.Dd();
            ha = va;
            N();
            Z();
          },
        };
      }
      function g(t) {
        for (var w = t.split(","), x = w.length, y = [], A = 0; A < x; A++) {
          var C = parseInt(w[A], 10);
          isNaN(C) || C > 100 || C < 0 || y.push(C / 100);
        }
        y.sort(function (D, G) {
          return D - G;
        });
        return y;
      }
      function k(t) {
        for (var w = t.split(","), x = w.length, y = [], A = 0; A < x; A++) {
          var C = parseInt(w[A], 10);
          isNaN(C) || C < 0 || y.push(C);
        }
        y.sort(function (D, G) {
          return D - G;
        });
        return y;
      }
      function m(t, w, x) {
        var y = t.map(function (D) {
          return { Ja: D, rf: D, nf: void 0 };
        });
        if (!w.length) return y;
        var A = w.map(function (D) {
          return { Ja: D * x, rf: void 0, nf: D };
        });
        if (!y.length) return A;
        var C = y.concat(A);
        C.sort(function (D, G) {
          return D.Ja - G.Ja;
        });
        return C;
      }
      function n(t) {
        t.vtp_triggerStartOption
          ? p(t)
          : vx(function () {
              p(t);
            });
      }
      function p(t) {
        var w = !!t.vtp_captureStart,
          x = !!t.vtp_captureComplete,
          y = !!t.vtp_capturePause,
          A = g(t.vtp_progressThresholdsPercent + ""),
          C = k(t.vtp_progressThresholdsTimeInSeconds + ""),
          D = !!t.vtp_fixMissingApi;
        if (w || x || y || A.length || C.length) {
          var G = {
              Gh: w,
              Eh: x,
              Fh: y,
              ji: A,
              ki: C,
              Ue: D,
              Jb: t.vtp_uniqueTriggerId === void 0 ? "" : t.vtp_uniqueTriggerId,
            },
            J = PK("YT"),
            F = function () {
              e(G);
            };
          H(t.vtp_gtmOnSuccess);
          if (J) J.ready && J.ready(F);
          else {
            var T = PK("onYouTubeIframeAPIReady");
            OK("onYouTubeIframeAPIReady", function () {
              T && T();
              F();
            });
            H(function () {
              for (
                var N = PK("document"),
                  Z = N.getElementsByTagName("script"),
                  ba = Z.length,
                  fa = 0;
                fa < ba;
                fa++
              ) {
                var R = Z[fa].getAttribute("src");
                if (b(R, "iframe_api") || b(R, "player_api")) return;
              }
              for (
                var M = N.getElementsByTagName("iframe"), ea = M.length, ha = 0;
                ha < ea;
                ha++
              )
                if (!v && c(M[ha], G.Ue)) {
                  LK("https://www.youtube.com/iframe_api");
                  v = !0;
                  break;
                }
            });
          }
        } else H(t.vtp_gtmOnSuccess);
      }
      var q = ["www.youtube.com", "www.youtube-nocookie.com"],
        r = {
          UNSTARTED: -1,
          ENDED: 0,
          PLAYING: 1,
          PAUSED: 2,
          BUFFERING: 3,
          CUED: 5,
        },
        u,
        v = !1;
      Y.__ytl = n;
      Y.__ytl.o = "ytl";
      Y.__ytl.isVendorTemplate = !0;
      Y.__ytl.priorityOverride = 0;
      Y.__ytl.isInfrastructure = !1;
      Y.__ytl.runInSiloedMode = !1;
    })();
  (Y.securityGroups.read_event_data = ["google"]),
    (function () {
      function a(b, c) {
        return { key: c };
      }
      (function (b) {
        Y.__read_event_data = b;
        Y.__read_event_data.o = "read_event_data";
        Y.__read_event_data.isVendorTemplate = !0;
        Y.__read_event_data.priorityOverride = 0;
        Y.__read_event_data.isInfrastructure = !1;
        Y.__read_event_data.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_eventDataAccess,
          d = b.vtp_keyPatterns || [],
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g) {
            if (g != null && !z(g))
              throw e(f, { key: g }, "Key must be a string.");
            if (c !== "any") {
              try {
                if (c === "specific" && g != null && gg(g, d)) return;
              } catch (k) {
                throw e(f, { key: g }, "Invalid key filter.");
              }
              throw e(f, { key: g }, "Prohibited read from event data.");
            }
          },
          M: a,
        };
      });
    })();
  (Y.securityGroups.gclidw = ["google"]),
    (function () {
      var a = ["aw", "dc", "gf", "ha", "gb"];
      (function (b) {
        Y.__gclidw = b;
        Y.__gclidw.o = "gclidw";
        Y.__gclidw.isVendorTemplate = !0;
        Y.__gclidw.priorityOverride = 100;
        Y.__gclidw.isInfrastructure = !1;
        Y.__gclidw.runInSiloedMode = !1;
      })(function (b) {
        H(b.vtp_gtmOnSuccess);
        var c, d, e, f;
        b.vtp_enableCookieOverrides &&
          ((e = b.vtp_cookiePrefix),
          (c = b.vtp_path),
          (d = b.vtp_domain),
          (f = b.vtp_cookieFlags));
        var g = NK(O.g.ia);
        g = g != void 0 && g !== !1;
        if (S(22)) {
          var k = {},
            m =
              ((k[O.g.Na] = e),
              (k[O.g.wb] = c),
              (k[O.g.Ra] = d),
              (k[O.g.ab] = f),
              (k[O.g.ia] = g),
              k);
          b.vtp_enableUrlPassthrough && (m[O.g.eb] = !0);
          if (b.vtp_enableCrossDomain && b.vtp_linkerDomains) {
            var n = {};
            m[O.g.ya] =
              ((n[O.g.Hc] = b.vtp_acceptIncoming),
              (n[O.g.X] = b.vtp_linkerDomains
                .toString()
                .replace(/\s+/g, "")
                .split(",")),
              (n[O.g.Pb] = b.vtp_urlPosition),
              (n[O.g.zb] = b.vtp_formDecoration),
              n);
          }
          var p = Dm(
            Cm(
              Bm(
                Am(tm(new sm(b.vtp_gtmEventId, b.vtp_gtmPriorityId), m), Ya),
                Ya
              ),
              !0
            )
          );
          p.eventMetadata.hit_type_override = "page_view";
          gE("", O.g.ba, Date.now(), p);
        } else {
          var q = { prefix: e, path: c, domain: d, flags: f };
          if (!b.vtp_enableCrossDomain || b.vtp_acceptIncoming !== !1)
            if (b.vtp_enableCrossDomain || Np()) ar(a, q), $p(q);
          (S(95) || S(122)) && Nn() !== 2 ? Zq(q) : Xq(q);
          gr(["aw", "dc"], q);
          Br(q, void 0, void 0, g);
          if (b.vtp_enableCrossDomain && b.vtp_linkerDomains) {
            var r = b.vtp_linkerDomains
              .toString()
              .replace(/\s+/g, "")
              .split(",");
            er(a, r, b.vtp_urlPosition, !!b.vtp_formDecoration, q.prefix);
            aq(Tp(q.prefix), r, b.vtp_urlPosition, !!b.vtp_formDecoration, q);
            aq("FPAU", r, b.vtp_urlPosition, !!b.vtp_formDecoration, q);
          }
          !gj() && !Si && S(111) && ou(void 0, Math.round(nb()), S(110));
          us({
            m: Dm(new sm(b.vtp_gtmEventId, b.vtp_gtmPriorityId)),
            Jh: !1,
            Pd: g,
            rc: q,
            qg: !0,
          });
          il = !0;
          b.vtp_enableUrlPassthrough && jr(["aw", "dc", "gb"]);
          lr(["aw", "dc", "gb"]);
        }
      });
    })();
  (Y.securityGroups.process_dom_events = ["google"]),
    (function () {
      function a(b, c, d) {
        return { targetType: c, eventName: d };
      }
      (function (b) {
        Y.__process_dom_events = b;
        Y.__process_dom_events.o = "process_dom_events";
        Y.__process_dom_events.isVendorTemplate = !0;
        Y.__process_dom_events.priorityOverride = 0;
        Y.__process_dom_events.isInfrastructure = !1;
        Y.__process_dom_events.runInSiloedMode = !1;
      })(function (b) {
        for (
          var c = b.vtp_targets || [],
            d = b.vtp_createPermissionError,
            e = {},
            f = 0;
          f < c.length;
          f++
        ) {
          var g = c[f];
          e[g.targetType] = e[g.targetType] || [];
          e[g.targetType].push(g.eventName);
        }
        return {
          assert: function (k, m, n) {
            if (!e[m]) throw d(k, {}, "Prohibited event target " + m + ".");
            if (e[m].indexOf(n) === -1)
              throw d(
                k,
                {},
                "Prohibited listener registration for DOM event " + n + "."
              );
          },
          M: a,
        };
      });
    })();
  (Y.securityGroups.aev = ["google"]),
    (function () {
      function a(r, u, v, t, w) {
        w || (w = "element");
        var x = u + "." + v,
          y;
        if (n.hasOwnProperty(x)) y = n[x];
        else {
          var A = r[w];
          if (A && ((y = t(A)), (n[x] = y), p.push(x), p.length > 35)) {
            var C = p.shift();
            delete n[C];
          }
        }
        return y;
      }
      function b(r, u, v) {
        var t = r[q[u]];
        return t !== void 0 ? t : v;
      }
      function c(r, u) {
        if (!r) return !1;
        var v = d(MK());
        Array.isArray(u) ||
          (u = String(u || "")
            .replace(/\s+/g, "")
            .split(","));
        for (var t = [v], w = 0; w < u.length; w++) {
          var x = u[w];
          if (x.hasOwnProperty("is_regex"))
            if (x.is_regex)
              try {
                x = new RegExp(x.domain);
              } catch (C) {
                continue;
              }
            else x = x.domain;
          var y = d(r);
          if (x instanceof RegExp) {
            if (x.test(y)) return !1;
          } else {
            var A = x;
            if (A.length != 0) {
              if (y.indexOf(A) >= 0) return !1;
              t.push(d(A));
            }
          }
        }
        return !zK(r, t);
      }
      function d(r) {
        m.test(r) || (r = "http://" + r);
        return zj(Fj(r), "HOST", !0);
      }
      function e(r, u, v, t) {
        switch (r) {
          case "SUBMIT_TEXT":
            return a(u, v, "FORM." + r, f, "formSubmitElement") || t;
          case "LENGTH":
            var w = a(u, v, "FORM." + r, g);
            return w === void 0 ? t : w;
          case "INTERACTED_FIELD_ID":
            return k(u, "id", t);
          case "INTERACTED_FIELD_NAME":
            return k(u, "name", t);
          case "INTERACTED_FIELD_TYPE":
            return k(u, "type", t);
          case "INTERACTED_FIELD_POSITION":
            var x = u.interactedFormFieldPosition;
            return x === void 0 ? t : x;
          case "INTERACT_SEQUENCE_NUMBER":
            var y = u.interactSequenceNumber;
            return y === void 0 ? t : y;
          default:
            return t;
        }
      }
      function f(r) {
        switch (r.tagName.toLowerCase()) {
          case "input":
            return tc(r, "value");
          case "button":
            return uc(r);
          default:
            return null;
        }
      }
      function g(r) {
        if (r.tagName.toLowerCase() === "form" && r.elements) {
          for (var u = 0, v = 0; v < r.elements.length; v++)
            YA(r.elements[v]) && u++;
          return u;
        }
      }
      function k(r, u, v) {
        var t = r.interactedFormField;
        return (t && tc(t, u)) || v;
      }
      var m = /^https?:\/\//i,
        n = {},
        p = [],
        q = {
          ATTRIBUTE: "elementAttribute",
          CLASSES: "elementClasses",
          ELEMENT: "element",
          ID: "elementId",
          HISTORY_CHANGE_SOURCE: "historyChangeSource",
          HISTORY_NEW_STATE: "newHistoryState",
          HISTORY_NEW_URL_FRAGMENT: "newUrlFragment",
          HISTORY_OLD_STATE: "oldHistoryState",
          HISTORY_OLD_URL_FRAGMENT: "oldUrlFragment",
          TARGET: "elementTarget",
        };
      (function (r) {
        Y.__aev = r;
        Y.__aev.o = "aev";
        Y.__aev.isVendorTemplate = !0;
        Y.__aev.priorityOverride = 0;
        Y.__aev.isInfrastructure = !0;
        Y.__aev.runInSiloedMode = !1;
      })(function (r) {
        var u = r.vtp_gtmEventId,
          v = r.vtp_defaultValue,
          t = r.vtp_varType,
          w = r.vtp_gtmCachedValues.gtm;
        switch (t) {
          case "TAG_NAME":
            var x = w.element;
            return (x && x.tagName) || v;
          case "TEXT":
            return a(w, u, t, uc) || v;
          case "URL":
            var y;
            a: {
              var A = String(w.elementUrl || v || ""),
                C = Fj(A),
                D = String(r.vtp_component || "URL");
              switch (D) {
                case "URL":
                  y = A;
                  break a;
                case "IS_OUTBOUND":
                  y = c(A, r.vtp_affiliatedDomains);
                  break a;
                default:
                  y = zj(
                    C,
                    D,
                    r.vtp_stripWww,
                    r.vtp_defaultPages,
                    r.vtp_queryKey
                  );
              }
            }
            return y;
          case "ATTRIBUTE":
            var G;
            if (r.vtp_attribute === void 0) G = b(w, t, v);
            else {
              var J = w.element;
              G = (J && tc(J, r.vtp_attribute)) || v || "";
            }
            return G;
          case "MD":
            var F = r.vtp_mdValue,
              T = a(w, u, "MD", EK);
            return F && T ? BK(T, F) || v : T || v;
          case "FORM":
            return e(String(r.vtp_component || "SUBMIT_TEXT"), w, u, v);
          default:
            return b(w, t, v);
        }
      });
    })();
  (Y.securityGroups.smm = ["google"]),
    (Y.__smm = function (a) {
      var b = a.vtp_input,
        c = AK(a.vtp_map, "key", "value") || {};
      return c.hasOwnProperty(b) ? c[b] : a.vtp_defaultValue;
    }),
    (Y.__smm.o = "smm"),
    (Y.__smm.isVendorTemplate = !0),
    (Y.__smm.priorityOverride = 0),
    (Y.__smm.isInfrastructure = !0),
    (Y.__smm.runInSiloedMode = !1);
  (Y.securityGroups.detect_element_visibility_events = ["google"]),
    (function () {
      function a() {
        return {};
      }
      (function (b) {
        Y.__detect_element_visibility_events = b;
        Y.__detect_element_visibility_events.o =
          "detect_element_visibility_events";
        Y.__detect_element_visibility_events.isVendorTemplate = !0;
        Y.__detect_element_visibility_events.priorityOverride = 0;
        Y.__detect_element_visibility_events.isInfrastructure = !1;
        Y.__detect_element_visibility_events.runInSiloedMode = !1;
      })(function () {
        return { assert: function () {}, M: a };
      });
    })();

  (Y.securityGroups.detect_history_change_events = ["google"]),
    (function () {
      function a() {
        return {};
      }
      (function (b) {
        Y.__detect_history_change_events = b;
        Y.__detect_history_change_events.o = "detect_history_change_events";
        Y.__detect_history_change_events.isVendorTemplate = !0;
        Y.__detect_history_change_events.priorityOverride = 0;
        Y.__detect_history_change_events.isInfrastructure = !1;
        Y.__detect_history_change_events.runInSiloedMode = !1;
      })(function () {
        return { assert: function () {}, M: a };
      });
    })();

  (Y.securityGroups.gaawe = ["google"]),
    (function () {
      function a(f, g, k) {
        for (var m = 0; m < g.length; m++)
          f.hasOwnProperty(g[m]) && (f[g[m]] = k(f[g[m]]));
      }
      function b(f, g, k) {
        var m = {},
          n = function (v, t) {
            m[v] = m[v] || t;
          },
          p = function (v, t, w) {
            w = w === void 0 ? !1 : w;
            c.push(6);
            if (v) {
              m.items = m.items || [];
              for (var x = {}, y = 0; y < v.length; x = { kf: void 0 }, y++)
                (x.kf = {}),
                  gb(
                    v[y],
                    (function (C) {
                      return function (D, G) {
                        w && D === "id"
                          ? (C.kf.promotion_id = G)
                          : w && D === "name"
                          ? (C.kf.promotion_name = G)
                          : (C.kf[D] = G);
                      };
                    })(x)
                  ),
                  m.items.push(x.kf);
            }
            if (t)
              for (var A in t) d.hasOwnProperty(A) ? n(d[A], t[A]) : n(A, t[A]);
          },
          q;
        f.vtp_getEcommerceDataFrom === "dataLayer"
          ? (q = f.vtp_gtmCachedValues.eventModel) ||
            (q = f.vtp_gtmCachedValues.ecommerce)
          : ((q = f.vtp_ecommerceMacroData),
            Qc(q) && q.ecommerce && !q.items && (q = q.ecommerce));
        if (Qc(q)) {
          var r = !1,
            u;
          for (u in q)
            q.hasOwnProperty(u) &&
              (r || (c.push(5), (r = !0)),
              u === "currencyCode"
                ? n("currency", q.currencyCode)
                : u === "impressions" && g === O.g.rb
                ? p(q.impressions, null)
                : u === "promoClick" && g === O.g.Lb
                ? p(q.promoClick.promotions, q.promoClick.actionField, !0)
                : u === "promoView" && g === O.g.sb
                ? p(q.promoView.promotions, q.promoView.actionField, !0)
                : e.hasOwnProperty(u)
                ? g === e[u] && p(q[u].products, q[u].actionField)
                : (m[u] = q[u]));
          xK(m, k);
        }
      }
      var c = [],
        d = { id: "transaction_id", revenue: "value", list: "item_list_name" },
        e = {
          click: "select_item",
          detail: "view_item",
          add: "add_to_cart",
          remove: "remove_from_cart",
          checkout: "begin_checkout",
          checkout_option: "checkout_option",
          purchase: "purchase",
          refund: "refund",
        };
      (function (f) {
        Y.__gaawe = f;
        Y.__gaawe.o = "gaawe";
        Y.__gaawe.isVendorTemplate = !0;
        Y.__gaawe.priorityOverride = 0;
        Y.__gaawe.isInfrastructure = !1;
        Y.__gaawe.runInSiloedMode = !1;
      })(function (f) {
        var g;
        g = f.vtp_migratedToV2
          ? String(f.vtp_measurementIdOverride)
          : String(f.vtp_measurementIdOverride || f.vtp_measurementId);
        if (z(g) && g.indexOf("G-") === 0) {
          var k = String(f.vtp_eventName),
            m = {};
          c = [];
          f.vtp_sendEcommerceData &&
            (nh.hasOwnProperty(k) || k === "checkout_option") &&
            b(f, k, m);
          var n = f.vtp_eventSettingsVariable;
          if (n) for (var p in n) n.hasOwnProperty(p) && (m[p] = n[p]);
          if (f.vtp_eventSettingsTable) {
            var q = AK(f.vtp_eventSettingsTable, "parameter", "parameterValue"),
              r;
            for (r in q) m[r] = q[r];
          }
          var u = AK(f.vtp_eventParameters, "name", "value"),
            v;
          for (v in u) u.hasOwnProperty(v) && (m[v] = u[v]);
          var t = f.vtp_userDataVariable;
          t && (m[O.g.Ha] = t);
          if (m.hasOwnProperty(O.g.lb) || f.vtp_userProperties) {
            var w = m[O.g.lb] || {};
            xK(AK(f.vtp_userProperties, "name", "value"), w);
            m[O.g.lb] = w;
          }
          var x = {
            originatingEntity: xx(1, f.vtp_gtmEntityIndex, f.vtp_gtmEntityName),
          };
          if (c.length > 0) {
            var y = {};
            x.eventMetadata = ((y.event_usage = c), y);
          }
          a(m, oh, function (C) {
            return jb(C);
          });
          a(m, qh, function (C) {
            return Number(C);
          });
          var A = f.vtp_gtmEventId;
          x.noGtmEvent = !0;
          Dy(By(g, k, m), A, x);
          H(f.vtp_gtmOnSuccess);
        } else H(f.vtp_gtmOnFailure);
      });
    })();

  (Y.securityGroups.detect_link_click_events = ["google"]),
    (function () {
      function a(b, c) {
        return { options: c };
      }
      (function (b) {
        Y.__detect_link_click_events = b;
        Y.__detect_link_click_events.o = "detect_link_click_events";
        Y.__detect_link_click_events.isVendorTemplate = !0;
        Y.__detect_link_click_events.priorityOverride = 0;
        Y.__detect_link_click_events.isInfrastructure = !1;
        Y.__detect_link_click_events.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_allowWaitForTags,
          d = b.vtp_createPermissionError;
        return {
          assert: function (e, f) {
            if (!c && f && f.waitForTags)
              throw d(e, {}, "Prohibited option waitForTags.");
          },
          M: a,
        };
      });
    })();
  (Y.securityGroups.detect_form_submit_events = ["google"]),
    (function () {
      function a(b, c) {
        return { options: c };
      }
      (function (b) {
        Y.__detect_form_submit_events = b;
        Y.__detect_form_submit_events.o = "detect_form_submit_events";
        Y.__detect_form_submit_events.isVendorTemplate = !0;
        Y.__detect_form_submit_events.priorityOverride = 0;
        Y.__detect_form_submit_events.isInfrastructure = !1;
        Y.__detect_form_submit_events.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_allowWaitForTags,
          d = b.vtp_createPermissionError;
        return {
          assert: function (e, f) {
            if (!c && f && f.waitForTags)
              throw d(e, {}, "Prohibited option waitForTags.");
          },
          M: a,
        };
      });
    })();
  (Y.securityGroups.load_google_tags = ["google"]),
    (function () {
      function a(b, c, d) {
        return { tagId: c, firstPartyUrl: d };
      }
      (function (b) {
        Y.__load_google_tags = b;
        Y.__load_google_tags.o = "load_google_tags";
        Y.__load_google_tags.isVendorTemplate = !0;
        Y.__load_google_tags.priorityOverride = 0;
        Y.__load_google_tags.isInfrastructure = !1;
        Y.__load_google_tags.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_allowedTagIds || "specific",
          d = b.vtp_allowFirstPartyUrls || !1,
          e = b.vtp_allowedFirstPartyUrls || "specific",
          f = b.vtp_urls || [],
          g = b.vtp_tagIds || [],
          k = b.vtp_createPermissionError;
        return {
          assert: function (m, n, p) {
            (function (q) {
              if (!z(q)) throw k(m, {}, "Tag ID must be a string.");
              if (c !== "any" && (c !== "specific" || g.indexOf(q) === -1))
                throw k(m, {}, "Prohibited Tag ID: " + q + ".");
            })(n);
            (function (q) {
              if (q !== void 0) {
                if (!z(q)) throw k(m, {}, "First party URL must be a string.");
                if (d) {
                  if (e === "any") return;
                  if (e === "specific")
                    try {
                      if (xg(Fj(q), f)) return;
                    } catch (r) {
                      throw k(m, {}, "Invalid first party URL filter.");
                    }
                }
                throw k(m, {}, "Prohibited first party URL: " + q);
              }
            })(p);
          },
          M: a,
        };
      });
    })();
  (Y.securityGroups.read_container_data = ["google"]),
    (Y.__read_container_data = function () {
      return {
        assert: function () {},
        M: function () {
          return {};
        },
      };
    }),
    (Y.__read_container_data.o = "read_container_data"),
    (Y.__read_container_data.isVendorTemplate = !0),
    (Y.__read_container_data.priorityOverride = 0),
    (Y.__read_container_data.isInfrastructure = !1),
    (Y.__read_container_data.runInSiloedMode = !1);

  (Y.securityGroups.tg = ["google"]),
    (function () {
      function a(k) {
        g.push(k);
        g.length > 1 ||
          H(function () {
            var m = g.join(",");
            g = [];
            Ez({ event: "gtm.triggerGroup", "gtm.triggers": m });
          });
      }
      function b(k, m) {
        var n = d[m],
          p = n.indexOf(k);
        p !== -1 && (n.splice(p, 1), n.length || a(m));
      }
      function c(k) {
        H(k.vtp_gtmOnSuccess);
        var m = k.vtp_uniqueTriggerId,
          n = k.vtp_triggerIds,
          p = k.vtp_firingId;
        if (k.vtp_isListeningTag) {
          var q = e[p];
          q ? b(p, q) : f.push(p);
        } else {
          d[m] = n;
          for (var r = 0, u; (u = n[r]); r++) e[u] = m;
          for (var v = 0; v < f.length; v++) b(f[v], m);
        }
      }
      var d = {},
        e = {},
        f = [],
        g = [];
      Y.__tg = c;
      Y.__tg.o = "tg";
      Y.__tg.isVendorTemplate = !0;
      Y.__tg.priorityOverride = 0;
      Y.__tg.isInfrastructure = !1;
      Y.__tg.runInSiloedMode = !1;
    })();
  (Y.securityGroups.detect_timer_events = ["google"]),
    (function () {
      function a() {
        return {};
      }
      (function (b) {
        Y.__detect_timer_events = b;
        Y.__detect_timer_events.o = "detect_timer_events";
        Y.__detect_timer_events.isVendorTemplate = !0;
        Y.__detect_timer_events.priorityOverride = 0;
        Y.__detect_timer_events.isInfrastructure = !1;
        Y.__detect_timer_events.runInSiloedMode = !1;
      })(function () {
        return { assert: function () {}, M: a };
      });
    })();

  (Y.securityGroups.access_consent = ["google"]),
    (function () {
      function a(b, c, d) {
        var e = { consentType: c, read: !1, write: !1 };
        switch (d) {
          case "read":
            e.read = !0;
            break;
          case "write":
            e.write = !0;
            break;
          default:
            throw Error("Invalid " + b + " request " + d);
        }
        return e;
      }
      (function (b) {
        Y.__access_consent = b;
        Y.__access_consent.o = "access_consent";
        Y.__access_consent.isVendorTemplate = !0;
        Y.__access_consent.priorityOverride = 0;
        Y.__access_consent.isInfrastructure = !1;
        Y.__access_consent.runInSiloedMode = !1;
      })(function (b) {
        for (
          var c = b.vtp_consentTypes || [],
            d = b.vtp_createPermissionError,
            e = [],
            f = [],
            g = 0;
          g < c.length;
          g++
        ) {
          var k = c[g],
            m = k.consentType;
          k.read && e.push(m);
          k.write && f.push(m);
        }
        return {
          assert: function (n, p, q) {
            if (!z(p)) throw d(n, {}, "Consent type must be a string.");
            if (q === "read") {
              if (e.indexOf(p) > -1) return;
            } else if (q === "write") {
              if (f.indexOf(p) > -1) return;
            } else
              throw d(
                n,
                {},
                "Access type must be either 'read', or 'write', was " + q
              );
            throw d(n, {}, "Prohibited " + q + " on consent type: " + p + ".");
          },
          M: a,
        };
      });
    })();
  (Y.securityGroups.inject_script = ["google"]),
    (function () {
      function a(b, c) {
        return { url: c };
      }
      (function (b) {
        Y.__inject_script = b;
        Y.__inject_script.o = "inject_script";
        Y.__inject_script.isVendorTemplate = !0;
        Y.__inject_script.priorityOverride = 0;
        Y.__inject_script.isInfrastructure = !1;
        Y.__inject_script.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_urls || [],
          d = b.vtp_createPermissionError;
        return {
          assert: function (e, f) {
            if (!z(f)) throw d(e, {}, "Script URL must be a string.");
            try {
              if (xg(Fj(f), c)) return;
            } catch (g) {
              throw d(e, {}, "Invalid script URL filter.");
            }
            throw d(e, {}, "Prohibited script URL: " + f);
          },
          M: a,
        };
      });
    })();
  (Y.securityGroups.unsafe_run_arbitrary_javascript = ["google"]),
    (function () {
      function a() {
        return {};
      }
      (function (b) {
        Y.__unsafe_run_arbitrary_javascript = b;
        Y.__unsafe_run_arbitrary_javascript.o =
          "unsafe_run_arbitrary_javascript";
        Y.__unsafe_run_arbitrary_javascript.isVendorTemplate = !0;
        Y.__unsafe_run_arbitrary_javascript.priorityOverride = 0;
        Y.__unsafe_run_arbitrary_javascript.isInfrastructure = !1;
        Y.__unsafe_run_arbitrary_javascript.runInSiloedMode = !1;
      })(function () {
        return { assert: function () {}, M: a };
      });
    })();

  (Y.securityGroups.awct = ["google"]),
    (function () {
      function a(b, c, d) {
        return function (e, f, g, k) {
          k = k === void 0 ? !1 : k;
          var m = d === "DATA_LAYER" ? NK(g) : b[f];
          (k && m == null) || (c[e] = m);
        };
      }
      (function (b) {
        Y.__awct = b;
        Y.__awct.o = "awct";
        Y.__awct.isVendorTemplate = !0;
        Y.__awct.priorityOverride = 0;
        Y.__awct.isInfrastructure = !1;
        Y.__awct.runInSiloedMode = !1;
      })(function (b) {
        var c =
            !b.hasOwnProperty("vtp_enableConversionLinker") ||
            !!b.vtp_enableConversionLinker,
          d =
            !!b.vtp_enableEnhancedConversions ||
            !!b.vtp_enableEnhancedConversion,
          e = AK(b.vtp_customVariables, "varName", "value") || {},
          f = {},
          g =
            ((f[O.g.oa] = b.vtp_conversionValue || 0),
            (f[O.g.Ba] = b.vtp_currencyCode),
            (f[O.g.Ca] = b.vtp_orderId),
            (f[O.g.hb] = b.vtp_conversionCookiePrefix),
            (f[O.g.xa] = c),
            (f[O.g.Yd] = d),
            (f[O.g.ia] = NK(O.g.ia)),
            (f[O.g.fa] = NK("developer_id")),
            f);
        (g[O.g.Fa] = NK(O.g.Fa)),
          (g[O.g.na] = NK(O.g.na)),
          (g[O.g.bc] = NK(O.g.bc)),
          (g[O.g.Oa] = NK(O.g.Oa));
        b.vtp_rdp && (g[O.g.Qb] = !0);
        if (b.vtp_enableCustomParams)
          for (var k in e) vh.hasOwnProperty(k) || (g[k] = e[k]);
        if (b.vtp_enableProductReporting) {
          var m = a(b, g, b.vtp_productReportingDataSource);
          m(O.g.ce, "vtp_awMerchantId", "aw_merchant_id");
          m(O.g.ae, "vtp_awFeedCountry", "aw_feed_country");
          m(O.g.be, "vtp_awFeedLanguage", "aw_feed_language");
          S(97) &&
            (m(O.g.Of, "vtp_awMerchantId", "merchant_id", !0),
            m(O.g.Mf, "vtp_awFeedCountry", "merchant_feed_label", !0),
            m(O.g.Nf, "vtp_awFeedLanguage", "merchant_feed_language", !0));
          m(O.g.Zd, "vtp_discount", "discount");
          m(O.g.da, "vtp_items", "items");
        }
        b.vtp_enableShippingData &&
          ((g[O.g.xd] = b.vtp_deliveryPostalCode),
          (g[O.g.ke] = b.vtp_estimatedDeliveryDate),
          (g[O.g.Bc] = b.vtp_deliveryCountry),
          (g[O.g.md] = b.vtp_shippingFee));
        b.vtp_transportUrl && (g[O.g.Sb] = b.vtp_transportUrl);
        if (b.vtp_enableNewCustomerReporting) {
          var n = a(b, g, b.vtp_newCustomerReportingDataSource);
          n(O.g.rd, "vtp_awNewCustomer", "new_customer");
          n(O.g.de, "vtp_awCustomerLTV", "customer_lifetime_value");
        }
        var p;
        a: {
          if (b.vtp_enableEnhancedConversion) {
            var q =
              b.vtp_cssProvidedEnhancedConversionValue ||
              b.vtp_enhancedConversionObject;
            if (q) {
              p = {
                enhanced_conversions_mode: "manual",
                enhanced_conversions_manual_var: q,
              };
              break a;
            }
          }
          p = void 0;
        }
        var r = p;
        if (r) {
          var u = {};
          g[O.g.je] = ((u[b.vtp_conversionLabel] = r), u);
        }
        var v = "AW-" + b.vtp_conversionId,
          t = v + "/" + b.vtp_conversionLabel;
        px(v, b.vtp_transportUrl, {
          source: 7,
          fromContainerExecution: !0,
          siloed: !0,
        });
        var w = {},
          x = {
            eventMetadata: ((w.hit_type_override = "conversion"), w),
            noGtmEvent: !0,
            isGtmEvent: !0,
            onSuccess: b.vtp_gtmOnSuccess,
            onFailure: b.vtp_gtmOnFailure,
          };
        Dy(By(kk(t), O.g.Ma, g), b.vtp_gtmEventId, x);
      });
    })();
  (Y.securityGroups.unsafe_inject_arbitrary_html = ["google"]),
    (function () {
      function a(b, c, d) {
        return { useIframe: c, supportDocumentWrite: d };
      }
      (function (b) {
        Y.__unsafe_inject_arbitrary_html = b;
        Y.__unsafe_inject_arbitrary_html.o = "unsafe_inject_arbitrary_html";
        Y.__unsafe_inject_arbitrary_html.isVendorTemplate = !0;
        Y.__unsafe_inject_arbitrary_html.priorityOverride = 0;
        Y.__unsafe_inject_arbitrary_html.isInfrastructure = !1;
        Y.__unsafe_inject_arbitrary_html.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_createPermissionError;
        return {
          assert: function (d, e, f) {
            if (e && f)
              throw c(
                d,
                {},
                "Only one of useIframe and supportDocumentWrite can be true."
              );
            if (e !== void 0 && typeof e !== "boolean")
              throw c(d, {}, "useIframe must be a boolean.");
            if (f !== void 0 && typeof f !== "boolean")
              throw c(d, {}, "supportDocumentWrite must be a boolean.");
          },
          M: a,
        };
      });
    })();
  (Y.securityGroups.remm = ["google"]),
    (Y.__remm = function (a) {
      for (
        var b = a.vtp_input,
          c = a.vtp_map || [],
          d = a.vtp_fullMatch,
          e = a.vtp_ignoreCase ? "gi" : "g",
          f = a.vtp_defaultValue,
          g = 0;
        g < c.length;
        g++
      ) {
        var k = c[g].key || "";
        d && (k = "^" + k + "$");
        var m = new RegExp(k, e);
        if (m.test(b)) {
          var n = c[g].value;
          a.vtp_replaceAfterMatch && (n = String(b).replace(m, n));
          f = n;
          break;
        }
      }
      return f;
    }),
    (Y.__remm.o = "remm"),
    (Y.__remm.isVendorTemplate = !0),
    (Y.__remm.priorityOverride = 0),
    (Y.__remm.isInfrastructure = !0),
    (Y.__remm.runInSiloedMode = !1);

  (Y.securityGroups.write_data_layer = ["google"]),
    (function () {
      function a(b, c) {
        return { key: c };
      }
      (function (b) {
        Y.__write_data_layer = b;
        Y.__write_data_layer.o = "write_data_layer";
        Y.__write_data_layer.isVendorTemplate = !0;
        Y.__write_data_layer.priorityOverride = 0;
        Y.__write_data_layer.isInfrastructure = !1;
        Y.__write_data_layer.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_keyPatterns || [],
          d = b.vtp_createPermissionError;
        return {
          assert: function (e, f) {
            if (!z(f)) throw d(e, {}, "Keys must be strings.");
            try {
              if (gg(f, c)) return;
            } catch (g) {
              throw d(e, {}, "Invalid key filter.");
            }
            throw d(
              e,
              {},
              "Prohibited write to data layer variable: " + f + "."
            );
          },
          M: a,
        };
      });
    })();
  (Y.securityGroups.detect_click_events = ["google"]),
    (function () {
      function a(b, c, d) {
        return { matchCommonButtons: c, cssSelector: d };
      }
      (function (b) {
        Y.__detect_click_events = b;
        Y.__detect_click_events.o = "detect_click_events";
        Y.__detect_click_events.isVendorTemplate = !0;
        Y.__detect_click_events.priorityOverride = 0;
        Y.__detect_click_events.isInfrastructure = !1;
        Y.__detect_click_events.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_createPermissionError;
        return {
          assert: function (d, e, f) {
            if (e !== void 0 && typeof e !== "boolean")
              throw c(d, {}, "matchCommonButtons must be a boolean.");
            if (f !== void 0 && typeof f !== "string")
              throw c(d, {}, "cssSelector must be a string.");
          },
          M: a,
        };
      });
    })();
  (Y.securityGroups.logging = ["google"]),
    (function () {
      function a() {
        return {};
      }
      (function (b) {
        Y.__logging = b;
        Y.__logging.o = "logging";
        Y.__logging.isVendorTemplate = !0;
        Y.__logging.priorityOverride = 0;
        Y.__logging.isInfrastructure = !1;
        Y.__logging.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_environments || "debug",
          d = b.vtp_createPermissionError;
        return {
          assert: function (e) {
            var f;
            if ((f = c !== "all" && !0)) {
              var g = !1;
              f = !g;
            }
            if (f) throw d(e, {}, "Logging is not enabled in all environments");
          },
          M: a,
        };
      });
    })();

  (Y.securityGroups.configure_google_tags = ["google"]),
    (function () {
      function a(b, c, d) {
        return { tagId: c, configuration: d };
      }
      (function (b) {
        Y.__configure_google_tags = b;
        Y.__configure_google_tags.o = "configure_google_tags";
        Y.__configure_google_tags.isVendorTemplate = !0;
        Y.__configure_google_tags.priorityOverride = 0;
        Y.__configure_google_tags.isInfrastructure = !1;
        Y.__configure_google_tags.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_allowedTagIds || "specific",
          d = b.vtp_tagIds || [],
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g) {
            if (!z(g)) throw e(f, {}, "Tag ID must be a string.");
            if (c !== "any" && (c !== "specific" || d.indexOf(g) === -1))
              throw e(f, {}, "Prohibited configuration for Tag ID: " + g + ".");
          },
          M: a,
        };
      });
    })();

  (Y.securityGroups.detect_scroll_events = ["google"]),
    (function () {
      function a() {
        return {};
      }
      (function (b) {
        Y.__detect_scroll_events = b;
        Y.__detect_scroll_events.o = "detect_scroll_events";
        Y.__detect_scroll_events.isVendorTemplate = !0;
        Y.__detect_scroll_events.priorityOverride = 0;
        Y.__detect_scroll_events.isInfrastructure = !1;
        Y.__detect_scroll_events.runInSiloedMode = !1;
      })(function () {
        return { assert: function () {}, M: a };
      });
    })();

  (Y.securityGroups.img = ["customPixels"]),
    (Y.__img = function (a) {
      var b = vc('<a href="' + a.vtp_url + '"></a>')[0].href,
        c = a.vtp_cacheBusterQueryParam;
      if (a.vtp_useCacheBuster) {
        c || (c = "gtmcb");
        var d = b.charAt(b.length - 1),
          e = b.indexOf("?") >= 0 ? (d == "?" || d == "&" ? "" : "&") : "?";
        b += e + c + "=" + a.vtp_randomNumber;
      }
      yK(b, a.vtp_gtmOnSuccess, a.vtp_gtmOnFailure);
    }),
    (Y.__img.o = "img"),
    (Y.__img.isVendorTemplate = !0),
    (Y.__img.priorityOverride = 0),
    (Y.__img.isInfrastructure = !1),
    (Y.__img.runInSiloedMode = !1);

  (Y.securityGroups.get_cookies = ["google"]),
    (function () {
      function a(b, c) {
        return { name: c };
      }
      (function (b) {
        Y.__get_cookies = b;
        Y.__get_cookies.o = "get_cookies";
        Y.__get_cookies.isVendorTemplate = !0;
        Y.__get_cookies.priorityOverride = 0;
        Y.__get_cookies.isInfrastructure = !1;
        Y.__get_cookies.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_cookieAccess || "specific",
          d = b.vtp_cookieNames || [],
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g) {
            if (!z(g)) throw e(f, {}, "Cookie name must be a string.");
            if (c !== "any" && !(c === "specific" && d.indexOf(g) >= 0))
              throw e(f, {}, 'Access to cookie "' + g + '" is prohibited.');
          },
          M: a,
        };
      });
    })();
  var SK = {
    dataLayer: nj,
    callback: function (a) {
      Zi.hasOwnProperty(a) && Za(Zi[a]) && Zi[a]();
      delete Zi[a];
    },
    bootstrap: 0,
    _spx: !1,
  };
  (SK.onHtmlSuccess = sA(!0)), (SK.onHtmlFailure = sA(!1));
  function TK() {
    Ki[mk()] = Ki[mk()] || SK;
    wk();
    Ak() ||
      gb(Bk(), function (d, e) {
        px(d, e.transportUrl, e.context);
        U(92);
      });
    qb($i, Y.securityGroups);
    var a = qk(rk()),
      b,
      c = a == null ? void 0 : (b = a.context) == null ? void 0 : b.source;
    (c !== 2 && c !== 4 && c !== 3) || U(142);
    oA(),
      nf({
        Jm: function (d) {
          return d === mA;
        },
        Wl: function (d) {
          return new pA(d);
        },
        Km: function (d) {
          for (var e = !1, f = !1, g = 2; g < d.length; g++)
            (e = e || d[g] === 8), (f = f || d[g] === 16);
          return e && f;
        },
        fn: function (d) {
          var e;
          if (d === mA) e = d;
          else {
            var f = aj();
            nA[f] = d;
            e = 'google_tag_manager["rm"]["' + ok() + '"](' + f + ")";
          }
          return e;
        },
      });
    pf = Gf;
  }
  var Dersim = !1;
  (function (a) {
    function b() {
      n = E.documentElement.getAttribute("data-tag-assistant-present");
      Oz(n) && (m = k.Dj);
    }
    function c() {
      m && fc ? g(m) : a();
    }
    if (!B["__TAGGY_INSTALLED"]) {
      var d = !1;
      if (E.referrer) {
        var e = Fj(E.referrer);
        d = Bj(e, "host") === "cct.google";
      }
      if (!d) {
        var f = Ro("googTaggyReferrer");
        d = !(!f.length || !f[0].length);
      }
      d &&
        ((B["__TAGGY_INSTALLED"] = !0),
        mc("https://cct.google/taggy/agent.js"));
    }
    var g = function (v) {
        var t = "GTM",
          w = "GTM";
        Qi && ((t = "OGT"), (w = "GTAG"));
        var x = B["google.tagmanager.debugui2.queue"];
        x ||
          ((x = []),
          (B["google.tagmanager.debugui2.queue"] = x),
          mc(
            "https://" +
              Ji.Af +
              "/debug/bootstrap?id=" +
              Mf.ctid +
              "&src=" +
              w +
              "&cond=" +
              v +
              "&gtm=" +
              Oo()
          ));
        var y = {
          messageType: "CONTAINER_STARTING",
          data: {
            scriptSource: fc,
            containerProduct: t,
            debug: !1,
            id: Mf.ctid,
            targetRef: { ctid: Mf.ctid, isDestination: gk() },
            aliases: jk(),
            destinations: hk(),
          },
        };
        y.data.resume = function () {
          a();
        };
        Ji.Tk && (y.data.initialPublish = !0);
        x.push(y);
      },
      k = { vl: 1, Fj: 2, Tj: 3, Gi: 4, Dj: 5 };
    k[k.vl] = "GTM_DEBUG_LEGACY_PARAM";
    k[k.Fj] = "GTM_DEBUG_PARAM";
    k[k.Tj] = "REFERRER";
    k[k.Gi] = "COOKIE";
    k[k.Dj] = "EXTENSION_PARAM";
    var m = void 0,
      n = void 0,
      p = zj(B.location, "query", !1, void 0, "gtm_debug");
    Oz(p) && (m = k.Fj);
    if (!m && E.referrer) {
      var q = Fj(E.referrer);
      Bj(q, "host") === "tagassistant.google.com" && (m = k.Tj);
    }
    if (!m) {
      var r = Ro("__TAG_ASSISTANT");
      r.length && r[0].length && (m = k.Gi);
    }
    m || b();
    if (!m && Pz(n)) {
      var u = !1;
      rc(
        E,
        "TADebugSignal",
        function () {
          u || ((u = !0), b(), c());
        },
        !1
      );
      B.setTimeout(function () {
        u || ((u = !0), b(), c());
      }, 200);
    } else c();
  })(function () {
    try {
      var a;
      if (!(a = Dersim)) {
        var b;
        a: {
          for (var c = ak(), d = l(ik()), e = d.next(); !e.done; e = d.next())
            if (c.injectedFirstPartyContainers[e.value]) {
              b = !0;
              break a;
            }
          b = !1;
        }
        a = !b;
      }
      if (a) {
        uk();
        if (S(88)) {
        }
        Wh[9] = !0;
        gk();
        if (!Il) {
          Il = !0;
          for (var f = Jl.length - 1; f >= 0; f--) Jl[f]();
          Jl = [];
        }
        go();
        Sl();
        var g = ok();
        if (ak().canonical[g]) {
          var k = Ki.zones;
          k && k.unregisterChild(ik());
          ax().removeExternalRestrictions(ok());
        } else {
          Hu();
          var m = dj.aa,
            n = Ii.Cn;
          m.j = new Set();
          if (n !== "")
            for (var p = l(n.split("~")), q = p.next(); !q.done; q = p.next()) {
              var r = Number(q.value);
              isNaN(r) || m.j.add(r);
            }
          dj.H = "";
          dj.Ua =
            "ad_storage|analytics_storage|ad_user_data|ad_personalization";
          dj.P = "ad_storage|analytics_storage|ad_user_data";
          dj.K = "4bj0";
          dj.K = "4c30";
          lx();
          for (
            var u = data.resource || {}, v = u.macros || [], t = 0;
            t < v.length;
            t++
          )
            ef.push(v[t]);
          for (var w = u.tags || [], x = 0; x < w.length; x++) hf.push(w[x]);
          for (var y = u.predicates || [], A = 0; A < y.length; A++)
            gf.push(y[A]);
          for (var C = u.rules || [], D = 0; D < C.length; D++) {
            for (var G = C[D], J = {}, F = 0; F < G.length; F++) {
              var T = G[F][0];
              J[T] = Array.prototype.slice.call(G[F], 1);
              (T !== "if" && T !== "unless") || of(J[T]);
            }
            ff.push(J);
          }
          kf = Y;
          lf = uA;
          If = new Pf();
          var N = data.sandboxed_scripts,
            Z = data.security_groups;
          a: {
            var ba = data.runtime || [],
              fa = data.runtime_lines;
            GA = new ze();
            tK();
            df = FA();
            var R = GA,
              M = sK(),
              ea = new Wc("require", M);
            ea.Ia();
            R.j.j.set("require", ea);
            for (var ha = [], da = 0; da < ba.length; da++) {
              var ta = ba[da];
              if (!Array.isArray(ta) || ta.length < 3) {
                if (ta.length === 0) continue;
                break a;
              }
              fa && fa[da] && fa[da].length && zf(ta, fa[da]);
              try {
                GA.execute(ta), S(101) && Tj && ta[0] === 50 && ha.push(ta[1]);
              } catch (lo) {}
            }
            S(101) && (qf = ha);
          }
          if (N && N.length)
            for (var Na = ["sandboxedScripts"], va = 0; va < N.length; va++) {
              var La = N[va].replace(/^_*/, "");
              $i[La] = Na;
            }
          uK(Z);
          TK();
          if (!Ui)
            for (
              var cb = rl() ? hj(dj.P) : hj(dj.Ua), lc = 0;
              lc < vl.length;
              lc++
            ) {
              var ge = vl[lc],
                Dh = ge,
                VK = cb[ge] ? "granted" : "denied";
              Rk().implicit(Dh, VK);
            }
          Nz();
          qx = !1;
          rx = 0;
          if (
            (E.readyState === "interactive" && !E.createEventObject) ||
            E.readyState === "complete"
          )
            tx();
          else {
            rc(E, "DOMContentLoaded", tx);
            rc(E, "readystatechange", tx);
            if (E.createEventObject && E.documentElement.doScroll) {
              var Gy = !0;
              try {
                Gy = !B.frameElement;
              } catch (lo) {}
              Gy && ux();
            }
            rc(B, "load", tx);
          }
          sz = !1;
          E.readyState === "complete" ? uz() : rc(B, "load", uz);
          Tj &&
            (Gm(Tm),
            B.setInterval(Sm, 864e5),
            Gm(xA),
            Gm(Ux),
            Gm(Jv),
            Gm(Wm),
            Gm(CA),
            Gm(ey),
            S(101) && (Gm(Zx), Gm($x), Gm(ay)));
          if (Uj) {
            Qk();
            mm();
            var Hy,
              Iy = Fj(B.location.href);
            (Hy = Iy.hostname + Iy.pathname) &&
              Ik("dl", encodeURIComponent(Hy));
            var mo;
            var Jy = Mf.ctid;
            if (Jy) {
              var XK = ek.Ce ? 1 : 0,
                Fh,
                Ky = qk(rk());
              Fh = Ky && Ky.context;
              mo =
                Jy +
                ";" +
                Mf.canonicalContainerId +
                ";" +
                (Fh && Fh.fromContainerExecution ? 1 : 0) +
                ";" +
                ((Fh && Fh.source) || 0) +
                ";" +
                XK;
            } else mo = void 0;
            var Ly = mo;
            Ly && Ik("tdp", Ly);
            var My = Nn(!0);
            My !== void 0 && Ik("frm", String(My));
            var no;
            var Gh = qk(rk());
            if (Gh) {
              for (; Gh.parent; ) {
                var Ny = qk(Gh.parent);
                if (!Ny) break;
                Gh = Ny;
              }
              no = Gh;
            } else no = void 0;
            var Qe = no;
            if (!Qe) U(144);
            else if (S(54) || Qe.canonicalContainerId) {
              var oo;
              a: {
                var Oy,
                  Py = (Oy = Qe.scriptElement) == null ? void 0 : Oy.src;
                if (Py) {
                  var po;
                  try {
                    var Qy;
                    po =
                      (Qy = Fc()) == null
                        ? void 0
                        : Qy.getEntriesByType("resource");
                  } catch (lo) {}
                  if (po) {
                    for (
                      var Ry = -1, Sy = l(po), qo = Sy.next();
                      !qo.done;
                      qo = Sy.next()
                    ) {
                      var Ty = qo.value;
                      if (Ty.initiatorType === "script") {
                        Ry += 1;
                        var ro = Ty.name,
                          so = Py;
                        S(53) &&
                          ((ro = ro.replace(Qz, "")),
                          (so = so.replace(Qz, "")));
                        if (ro === so) {
                          oo = Ry;
                          break a;
                        }
                      }
                    }
                    U(146);
                  } else U(145);
                }
                oo = void 0;
              }
              var Uy = oo;
              Uy !== void 0 &&
                (Qe.canonicalContainerId &&
                  Ik("rtg", String(Qe.canonicalContainerId)),
                Ik("slo", String(Uy)),
                Ik("hlo", Qe.htmlLoadOrder || "-1"),
                Ik("lst", String(Qe.loadScriptType || "0")));
            }
            var ck;
            var Hh = pk();
            if (Hh)
              if (Hh.canonicalContainerId) ck = Hh.canonicalContainerId;
              else {
                var Vy,
                  Wy =
                    Hh.scriptContainerId ||
                    ((Vy = Hh.destinations) == null ? void 0 : Vy[0]);
                ck = Wy ? "_" + Wy : void 0;
              }
            else ck = void 0;
            var Xy = ck;
            Xy && Ik("pcid", Xy);
            S(37) &&
              (Ik("bt", String(dj.C ? 2 : Si ? 1 : 0)),
              Ik("ct", String(dj.C ? 0 : Si ? 1 : Mo() ? 2 : 3)));
          }
          google_tag_manager_external.postscribe.installPostscribe();
          kA();
          ml(1);
          PB();
          Yi = nb();
          SK.bootstrap = Yi;
          if (S(88)) {
          }
          S(115) &&
            (typeof B.name === "string" &&
            sb(B.name, "web-pixel-sandbox-CUSTOM") &&
            Gc()
              ? vK("dMDg0Yz")
              : B.Shopify && Gc() && vK("dNTU0Yz"));
        }
      }
    } catch (lo) {
      if ((ml(4), Tj)) {
        var YK = Nm(!0, !0);
        qc(YK);
      }
    }
  });
})();
