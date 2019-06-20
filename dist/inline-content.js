module.exports=function(n){var e={};function t(r){if(e[r])return e[r].exports;var l=e[r]={i:r,l:!1,exports:{}};return n[r].call(l.exports,l,l.exports,t),l.l=!0,l.exports}return t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var l in n)t.d(r,l,function(e){return n[e]}.bind(null,l));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=3)}([function(n,e){n.exports=require("react")},function(n,e){n.exports=require("styled-components")},function(n,e){n.exports=require("@fdmg/fd-typography")},function(n,e,t){n.exports=t(4)},function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(5);e.BulletPoints=r.BulletPoints,e.BulletPointsStyle=r.BulletPointsStyle;var l=t(6);e.LinkBlock=l.LinkBlock,e.LinkBlockStyle=l.LinkBlockStyle;var a=t(8);e.NumberFrame=a.NumberFrame,e.NumberFrameStyle=a.NumberFrameStyle;var i=t(9);e.Quote=i.Quote,e.QuoteStyle=i.QuoteStyle;var o=t(10);e.StackFrame=o.StackFrame,e.StackFrameStyle=o.StackFrameStyle;var c=t(11);e.Stock=c.Stock,e.StockStyle=c.StockStyle;var u=t(12);e.Summary=u.Summary,e.SummaryStyle=u.SummaryStyle;var d=t(13);e.TextFrame=d.TextFrame,e.TextFrameStyle=d.TextFrameStyle},function(n,e,t){"use strict";var r=this&&this.__makeTemplateObject||function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n},l=this&&this.__importDefault||function(n){return n&&n.__esModule?n:{default:n}},a=this&&this.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(null!=n)for(var t in n)Object.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e.default=n,e};Object.defineProperty(e,"__esModule",{value:!0});var i=l(t(0)),o=a(t(2)),c=t(1);e.BulletPoints=function(n){return i.default.createElement(i.default.Fragment,null,i.default.createElement(f,null),i.default.createElement("div",{className:"inline-content bullet-points"+(n.align?" "+n.align:" right")+(n.className?" "+n.className:"")},n.bullets?n.bullets.map(function(n,e){return i.default.createElement(o.default,{key:e,textStyle:"article-p-inline-bullet-points"},i.default.createElement("p",null,n))}):null))};var u,d,p,s=c.css(u||(u=r(["\n.inline-content.bullet-points {\n    clear: both;\n    display: block;\n    width: auto;\n    margin: 40px auto;\n    box-sizing: border-box;\n\n    p:before {\n        content: url(https://fd.nl/img/fd/icons/bullet.svg);\n        float: left;\n        width: 20px;\n        height: 20px;\n        margin: 3px 10px 10px 0;\n    }\n\n    @media only screen and (min-width: 641px) {\n        &.right {\n            float: right;\n            margin: 40px 0 40px 60px;\n            width: 50%;\n        }\n    }\n}\n\n.full-width {\n    .inline-content.bullet-points {\n        p:before {\n            content: url(https://fd.nl/img/fd/icons/bullet_longread.svg);\n        }\n    }\n}\n"],["\n.inline-content.bullet-points {\n    clear: both;\n    display: block;\n    width: auto;\n    margin: 40px auto;\n    box-sizing: border-box;\n\n    p:before {\n        content: url(https://fd.nl/img/fd/icons/bullet.svg);\n        float: left;\n        width: 20px;\n        height: 20px;\n        margin: 3px 10px 10px 0;\n    }\n\n    @media only screen and (min-width: 641px) {\n        &.right {\n            float: right;\n            margin: 40px 0 40px 60px;\n            width: 50%;\n        }\n    }\n}\n\n.full-width {\n    .inline-content.bullet-points {\n        p:before {\n            content: url(https://fd.nl/img/fd/icons/bullet_longread.svg);\n        }\n    }\n}\n"]))),f=c.createGlobalStyle(d||(d=r(["",""],["",""])),s);e.BulletPointsStyle=c.css(p||(p=r(["\n","\n","\n"],["\n","\n","\n"])),o.getAllTextStyles(["article-p-inline-bullet-points"]),s)},function(n,e,t){"use strict";var r=this&&this.__makeTemplateObject||function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n},l=this&&this.__importDefault||function(n){return n&&n.__esModule?n:{default:n}},a=this&&this.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(null!=n)for(var t in n)Object.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e.default=n,e};Object.defineProperty(e,"__esModule",{value:!0});var i=l(t(0)),o=a(t(2)),c=t(1),u=t(7);e.LinkBlock=function(n){return i.default.createElement(i.default.Fragment,null,i.default.createElement(m,null),i.default.createElement("a",{target:"_blank",className:"inline-content fd-card article related-link"+(n.align?" "+n.align:" right")+(n.className?" "+n.className:""),href:n.url},i.default.createElement(o.default,{textStyle:"article-p-inline-link-block"},i.default.createElement("p",null,n.title)),i.default.createElement(o.default,{textStyle:"article-h-inline-link-block"},i.default.createElement("h2",null,n.description)),i.default.createElement("i",{className:"icon-chevron-right"})))};var d,p,s,f=c.css(d||(d=r(["\n","\n.inline-content.related-link {\n    clear: both;\n    text-decoration: none;\n    padding: 12px 40px 12px 15px;\n    display: block;\n    width: auto;\n    color: #49a4a2;\n    margin: 40px auto;\n    box-sizing: border-box;\n    i {\n        position: absolute;\n        right: 20px;\n        margin: 0;\n        top: calc(50% - 8px);\n        color: #677381;\n    }\n    p {\n        margin-bottom: .5rem;\n    }\n    @media only screen and (min-width: 641px) {\n        &.right {\n            float: right;\n            margin: 40px 0 40px 60px;\n            width: 50%;\n        }\n    }\n}\n\n.full-width {\n    .inline-content.related-link {\n        p {\n            color: #f05031;\n        }\n    }\n}\n"],["\n","\n.inline-content.related-link {\n    clear: both;\n    text-decoration: none;\n    padding: 12px 40px 12px 15px;\n    display: block;\n    width: auto;\n    color: #49a4a2;\n    margin: 40px auto;\n    box-sizing: border-box;\n    i {\n        position: absolute;\n        right: 20px;\n        margin: 0;\n        top: calc(50% - 8px);\n        color: #677381;\n    }\n    p {\n        margin-bottom: .5rem;\n    }\n    @media only screen and (min-width: 641px) {\n        &.right {\n            float: right;\n            margin: 40px 0 40px 60px;\n            width: 50%;\n        }\n    }\n}\n\n.full-width {\n    .inline-content.related-link {\n        p {\n            color: #f05031;\n        }\n    }\n}\n"])),u.getAllCardStyles(["article"])),m=c.createGlobalStyle(p||(p=r(["",""],["",""])),f);e.LinkBlockStyle=c.css(s||(s=r(["\n","\n","\n"],["\n","\n","\n"])),o.getAllTextStyles(["article-h-inline-link-block","article-p-inline-link-block"]),f)},function(n,e){n.exports=require("@fdmg/fd-card")},function(n,e,t){"use strict";var r=this&&this.__makeTemplateObject||function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n},l=this&&this.__importDefault||function(n){return n&&n.__esModule?n:{default:n}},a=this&&this.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(null!=n)for(var t in n)Object.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e.default=n,e};Object.defineProperty(e,"__esModule",{value:!0});var i=l(t(0)),o=a(t(2)),c=t(1);e.NumberFrame=function(n){return i.default.createElement(i.default.Fragment,null,i.default.createElement(f,null),i.default.createElement("div",{className:"inline-content cyferkader"+(n.align?" "+n.align:" right")+(n.className?" "+n.className:"")},i.default.createElement(o.default,{textStyle:"article-h-inline-number-frame"},i.default.createElement("h3",null,n.title)),i.default.createElement(o.default,{textStyle:"article-p-inline-number-frame"},i.default.createElement("p",null,n.paragraph))))};var u,d,p,s=c.css(u||(u=r(["\n.inline-content.cyferkader {\n    clear: both;\n    display: block;\n    width: auto;\n    color: #49a4a2;\n    margin: 40px auto;\n    box-sizing: border-box;\n    @media only screen and (min-width: 641px) {\n        &.right {\n            float: right;\n            margin: 40px 0 40px 60px;\n            width: 50%;\n        }\n    }\n}\n\n.full-width {\n    .inline-content.cyferkader {\n        h3, p {\n            color: #f05031;\n        }\n    }\n}\n"],["\n.inline-content.cyferkader {\n    clear: both;\n    display: block;\n    width: auto;\n    color: #49a4a2;\n    margin: 40px auto;\n    box-sizing: border-box;\n    @media only screen and (min-width: 641px) {\n        &.right {\n            float: right;\n            margin: 40px 0 40px 60px;\n            width: 50%;\n        }\n    }\n}\n\n.full-width {\n    .inline-content.cyferkader {\n        h3, p {\n            color: #f05031;\n        }\n    }\n}\n"]))),f=c.createGlobalStyle(d||(d=r(["",""],["",""])),s);e.NumberFrameStyle=c.css(p||(p=r(["\n","\n","\n"],["\n","\n","\n"])),o.getAllTextStyles(["article-h-inline-number-frame","article-p-inline-number-frame"]),s)},function(n,e,t){"use strict";var r=this&&this.__makeTemplateObject||function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n},l=this&&this.__importDefault||function(n){return n&&n.__esModule?n:{default:n}},a=this&&this.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(null!=n)for(var t in n)Object.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e.default=n,e};Object.defineProperty(e,"__esModule",{value:!0});var i=l(t(0)),o=a(t(2)),c=t(1);e.Quote=function(n){return i.default.createElement(i.default.Fragment,null,i.default.createElement(f,null),i.default.createElement(o.default,{textStyle:"article-inline-quote",className:"inline-content quote"+(n.align?" "+n.align:" right")+(n.className?" "+n.className:"")},i.default.createElement("figure",null,i.default.createElement("blockquote",null,"‘",n.quote,"’"),i.default.createElement("figcaption",null,"• ",n.figcaption))))};var u,d,p,s=c.css(u||(u=r(["\n.inline-content.quote {\n    clear: both;\n    display: block;\n    width: auto;\n    color: #49a4a2;\n    margin: 40px auto;\n    box-sizing: border-box;\n    @media only screen and (min-width: 641px) {\n        &.right {\n            float: right;\n            margin: 40px 0 40px 60px;\n            width: 50%;\n        }\n    }\n}\n\n.full-width {\n    .inline-content.quote {\n        blockquote, figcaption {\n            color: #f05031;\n        }\n    }\n}\n"],["\n.inline-content.quote {\n    clear: both;\n    display: block;\n    width: auto;\n    color: #49a4a2;\n    margin: 40px auto;\n    box-sizing: border-box;\n    @media only screen and (min-width: 641px) {\n        &.right {\n            float: right;\n            margin: 40px 0 40px 60px;\n            width: 50%;\n        }\n    }\n}\n\n.full-width {\n    .inline-content.quote {\n        blockquote, figcaption {\n            color: #f05031;\n        }\n    }\n}\n"]))),f=c.createGlobalStyle(d||(d=r(["",""],["",""])),s);e.QuoteStyle=c.css(p||(p=r(["\n","\n","\n"],["\n","\n","\n"])),o.getAllTextStyles(["article-inline-quote"]),s)},function(n,e,t){"use strict";var r=this&&this.__makeTemplateObject||function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n},l=this&&this.__importDefault||function(n){return n&&n.__esModule?n:{default:n}},a=this&&this.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(null!=n)for(var t in n)Object.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e.default=n,e};Object.defineProperty(e,"__esModule",{value:!0});var i=l(t(0)),o=a(t(2)),c=t(1);e.StackFrame=function(n){return i.default.createElement(i.default.Fragment,null,i.default.createElement(f,null),i.default.createElement("div",{className:"inline-content stapelkader"+(n.align?" "+n.align:" right")+(n.className?" "+n.className:"")},n.stackFrames?n.stackFrames.map(function(n,e){return i.default.createElement(i.default.Fragment,{key:e},i.default.createElement(o.default,{textStyle:"article-h-inline-stack-frame"},i.default.createElement("h3",null,n.title)),i.default.createElement(o.default,{textStyle:"article-p-inline-stack-frame"},i.default.createElement("p",null,n.paragraph)))}):null))};var u,d,p,s=c.css(u||(u=r(["\n.inline-content.stapelkader {\n    clear: both;\n    display: block;\n    width: auto;\n    border-left: 8px solid #4d494c;\n    box-sizing: border-box;\n    margin: 40px auto;\n    padding-left: 15px;\n    P:empty {\n        display: none;\n    }\n    @media only screen and (min-width: 641px) {\n        &.right {\n            float: right;\n            margin: 40px 0 40px 60px;\n            width: 50%;\n        }\n    }\n}\n\n.full-width {\n    .inline-content.stapelkader {\n        p {\n            color: #f05031;\n        }\n    }\n}\n"],["\n.inline-content.stapelkader {\n    clear: both;\n    display: block;\n    width: auto;\n    border-left: 8px solid #4d494c;\n    box-sizing: border-box;\n    margin: 40px auto;\n    padding-left: 15px;\n    P:empty {\n        display: none;\n    }\n    @media only screen and (min-width: 641px) {\n        &.right {\n            float: right;\n            margin: 40px 0 40px 60px;\n            width: 50%;\n        }\n    }\n}\n\n.full-width {\n    .inline-content.stapelkader {\n        p {\n            color: #f05031;\n        }\n    }\n}\n"]))),f=c.createGlobalStyle(d||(d=r(["",""],["",""])),s);e.StackFrameStyle=c.css(p||(p=r(["\n","\n","\n"],["\n","\n","\n"])),o.getAllTextStyles(["article-h-inline-stack-frame","article-p-inline-stack-frame"]),s)},function(n,e,t){"use strict";var r=this&&this.__makeTemplateObject||function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n},l=this&&this.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(e,"__esModule",{value:!0});var a=l(t(0)),i=t(1);e.Stock=function(n){var e="",t="";n.difference>0?(e="+",t="climb"):n.difference<0&&(t="drop");var r=n.locale?n.locale:"nl-NL",l={useGrouping:!1,minimumFractionDigits:2};return a.default.createElement(a.default.Fragment,null,a.default.createElement(d,null),a.default.createElement("a",{"data-isin":n.isin,"data-exchange":n.exchange,className:"company-quote"+(n.className?" "+n.className:""),target:"_blank",href:n.url},a.default.createElement("span",null,n.name),a.default.createElement("span",null,"€",n.price.toLocaleString(r,l)),a.default.createElement("span",{className:t},e,n.difference.toLocaleString(r,l),"%")))};var o=i.css(c||(c=r(["\n.company-quote {\n    clear: both;\n    text-decoration: none;\n    font-family: 'ArnhemProBlond', serif;\n    color: #677381;\n    font-size: 14px;\n    line-height: 1.5;\n\n    &:empty:before {\n        vertical-align: middle\n    }\n\n    &:empty:after {\n        content: ''\n    }\n\n    span {\n        display: inline-block;\n        margin: 0 0 0 6px;\n    }\n\n    span:first-child {\n        margin: 0;\n    }\n\n    span:first-child:after {\n        content: \":\"\n    }\n\n    .climb, .drop {\n        padding: 0 5px;\n        border-radius: 3px\n    }\n    .climb {\n        color: #42aa88;\n        background-color: rgba(66,170,136,0.1);\n        border: 1px solid rgba(66,170,136,0.1);\n    }\n    .drop {\n        color: #f3736b;\n        background-color: rgba(234,115,107,0.1);\n        border: 1px solid rgba(234,115,107,0.1);\n    }\n}\n\n.full-width {\n    .company-quote {\n        color: #f05031;\n    }\n}\n"],["\n.company-quote {\n    clear: both;\n    text-decoration: none;\n    font-family: 'ArnhemProBlond', serif;\n    color: #677381;\n    font-size: 14px;\n    line-height: 1.5;\n\n    &:empty:before {\n        vertical-align: middle\n    }\n\n    &:empty:after {\n        content: ''\n    }\n\n    span {\n        display: inline-block;\n        margin: 0 0 0 6px;\n    }\n\n    span:first-child {\n        margin: 0;\n    }\n\n    span:first-child:after {\n        content: \":\"\n    }\n\n    .climb, .drop {\n        padding: 0 5px;\n        border-radius: 3px\n    }\n    .climb {\n        color: #42aa88;\n        background-color: rgba(66,170,136,0.1);\n        border: 1px solid rgba(66,170,136,0.1);\n    }\n    .drop {\n        color: #f3736b;\n        background-color: rgba(234,115,107,0.1);\n        border: 1px solid rgba(234,115,107,0.1);\n    }\n}\n\n.full-width {\n    .company-quote {\n        color: #f05031;\n    }\n}\n"])));e.StockStyle=o;var c,u,d=i.createGlobalStyle(u||(u=r(["",""],["",""])),o)},function(n,e,t){"use strict";var r=this&&this.__makeTemplateObject||function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n},l=this&&this.__importDefault||function(n){return n&&n.__esModule?n:{default:n}},a=this&&this.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(null!=n)for(var t in n)Object.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e.default=n,e};Object.defineProperty(e,"__esModule",{value:!0});var i=l(t(0)),o=a(t(2)),c=t(1);e.Summary=function(n){return i.default.createElement(i.default.Fragment,null,i.default.createElement(f,null),i.default.createElement("div",{className:"inline-content article-summary"+(n.align?" "+n.align:" right")+(n.className?" "+n.className:"")},i.default.createElement(o.default,{textStyle:"article-h-inline",className:"outline"},i.default.createElement("h3",null,n.title)),n.bullets?n.bullets.map(function(n,e){return i.default.createElement(o.default,{key:e,textStyle:"article-p-inline-summary"},i.default.createElement("p",null,n))}):null))};var u,d,p,s=c.css(u||(u=r(['\n.inline-content.article-summary {\n    clear: both;\n    display: block;\n    width: auto;\n    margin: 40px auto;\n    box-sizing: border-box;\n    border-bottom: 1px solid #191919;\n\n    .outline {\n        position: relative;\n        background: linear-gradient(#191919, #191919) 0 0/100% 1px,linear-gradient(#191919, #191919) 0 4px/100% 1px,linear-gradient(#191919, #191919) 0 8px/100% 1px;\n        background-repeat: no-repeat;\n        padding: 22px 0 15px 0;\n        border-bottom: 1px solid #191919;\n    }\n\n    p:before {\n        content: "";\n        width: 8px;\n        height: 8px;\n        border-radius: 50%;\n        float: left;\n        margin: 8px 8px 0 0;\n        background-color: #49a4a2;\n    }\n\n    @media only screen and (min-width: 641px) {\n        &.right {\n            float: right;\n            margin: 40px 0 40px 60px;\n            width: 50%;\n        }\n    }\n}\n\n.full-width {\n    .inline-content.article-summary {\n        h3 {\n            color: #f05031;\n        }\n        p:before {\n            background-color: #f05031;\n        }\n    }\n}\n'],['\n.inline-content.article-summary {\n    clear: both;\n    display: block;\n    width: auto;\n    margin: 40px auto;\n    box-sizing: border-box;\n    border-bottom: 1px solid #191919;\n\n    .outline {\n        position: relative;\n        background: linear-gradient(#191919, #191919) 0 0/100% 1px,linear-gradient(#191919, #191919) 0 4px/100% 1px,linear-gradient(#191919, #191919) 0 8px/100% 1px;\n        background-repeat: no-repeat;\n        padding: 22px 0 15px 0;\n        border-bottom: 1px solid #191919;\n    }\n\n    p:before {\n        content: "";\n        width: 8px;\n        height: 8px;\n        border-radius: 50%;\n        float: left;\n        margin: 8px 8px 0 0;\n        background-color: #49a4a2;\n    }\n\n    @media only screen and (min-width: 641px) {\n        &.right {\n            float: right;\n            margin: 40px 0 40px 60px;\n            width: 50%;\n        }\n    }\n}\n\n.full-width {\n    .inline-content.article-summary {\n        h3 {\n            color: #f05031;\n        }\n        p:before {\n            background-color: #f05031;\n        }\n    }\n}\n']))),f=c.createGlobalStyle(d||(d=r(["",""],["",""])),s);e.SummaryStyle=c.css(p||(p=r(["\n","\n","\n"],["\n","\n","\n"])),o.getAllTextStyles(["article-h-inline","article-p-inline-summary"]),s)},function(n,e,t){"use strict";var r=this&&this.__makeTemplateObject||function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n},l=this&&this.__importDefault||function(n){return n&&n.__esModule?n:{default:n}},a=this&&this.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(null!=n)for(var t in n)Object.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e.default=n,e};Object.defineProperty(e,"__esModule",{value:!0});var i=l(t(0)),o=a(t(2)),c=t(1),u=t(14);e.TextFrame=function(n){return i.default.createElement(i.default.Fragment,null,i.default.createElement(m,null),i.default.createElement("div",{className:"inline-content text-frame"+(n.align?" "+n.align:" right")+(n.className?" "+n.className:"")},i.default.createElement("h3",{className:"outline"},n.title),n.sourceSets?i.default.createElement(u.TeaserFigure,{image:n.image,sourceSets:n.sourceSets}):null,n.paragraphs?n.paragraphs.map(function(n,e){return i.default.createElement(o.default,{key:e,textStyle:"article-p-inline-text-frame"},i.default.createElement("p",{dangerouslySetInnerHTML:{__html:n}}))}):null))};var d,p,s,f=c.css(d||(d=r(["\n.inline-content.text-frame {\n    clear: both;\n    display: block;\n    width: auto;\n    color: #191919;\n    margin: 40px auto;\n    box-sizing: border-box;\n    &.block {\n        clear: both;\n        width: 100%;\n    }\n\n    h3 {\n        margin-top: 0;\n        font-size: 1.25rem;\n        font-family: 'ProximaNovaBold', sans-serif;\n        color: #49a4a2;\n        margin-bottom: 15px;\n    }\n\n    .outline {\n        position: relative;\n        background: linear-gradient(#191919, #191919) 0 0/100% 1px,linear-gradient(#191919, #191919) 0 4px/100% 1px,linear-gradient(#191919, #191919) 0 8px/100% 1px;\n        background-repeat: no-repeat;\n        padding: 22px 0 15px 0;\n        border-bottom: 1px solid #191919;\n    }\n\n    figure {\n        margin: 0 0 20px 0;\n        img {\n            width: 100%;\n        }\n    }\n\n    p {\n        display: inline-block;\n        width: 100%;\n        font-size: 17px;\n        font-family: 'ProximaNovaRegular', sans-serif;\n        line-height: 1.434375rem;\n        margin: 0 0 1.15622rem 0;\n        &:first-of-type::first-letter {\n            text-transform: capitalize;\n            font-size: 4.75em;\n            line-height: 0.75em;\n            color: #49a4a2;\n            float: left;\n            margin: 3px 5px 0 0;\n        }\n    }\n\n    @media only screen and (min-width: 641px) {\n        &.right {\n            float: right;\n            margin: 40px 0 40px 60px;\n            width: 50%;\n        }\n    }\n}\n\n.full-width {\n    .inline-content.text-frame {\n        h3, p:first-of-type::first-letter {\n            color: #f05031;\n        }\n    }\n}\n"],["\n.inline-content.text-frame {\n    clear: both;\n    display: block;\n    width: auto;\n    color: #191919;\n    margin: 40px auto;\n    box-sizing: border-box;\n    &.block {\n        clear: both;\n        width: 100%;\n    }\n\n    h3 {\n        margin-top: 0;\n        font-size: 1.25rem;\n        font-family: 'ProximaNovaBold', sans-serif;\n        color: #49a4a2;\n        margin-bottom: 15px;\n    }\n\n    .outline {\n        position: relative;\n        background: linear-gradient(#191919, #191919) 0 0/100% 1px,linear-gradient(#191919, #191919) 0 4px/100% 1px,linear-gradient(#191919, #191919) 0 8px/100% 1px;\n        background-repeat: no-repeat;\n        padding: 22px 0 15px 0;\n        border-bottom: 1px solid #191919;\n    }\n\n    figure {\n        margin: 0 0 20px 0;\n        img {\n            width: 100%;\n        }\n    }\n\n    p {\n        display: inline-block;\n        width: 100%;\n        font-size: 17px;\n        font-family: 'ProximaNovaRegular', sans-serif;\n        line-height: 1.434375rem;\n        margin: 0 0 1.15622rem 0;\n        &:first-of-type::first-letter {\n            text-transform: capitalize;\n            font-size: 4.75em;\n            line-height: 0.75em;\n            color: #49a4a2;\n            float: left;\n            margin: 3px 5px 0 0;\n        }\n    }\n\n    @media only screen and (min-width: 641px) {\n        &.right {\n            float: right;\n            margin: 40px 0 40px 60px;\n            width: 50%;\n        }\n    }\n}\n\n.full-width {\n    .inline-content.text-frame {\n        h3, p:first-of-type::first-letter {\n            color: #f05031;\n        }\n    }\n}\n"]))),m=c.createGlobalStyle(p||(p=r(["",""],["",""])),f);e.TextFrameStyle=c.css(s||(s=r(["\n","\n","\n"],["\n","\n","\n"])),o.getAllTextStyles(["article-p-inline-text-frame"]),f)},function(n,e){n.exports=require("@fdmg/fd-teaser")}]);