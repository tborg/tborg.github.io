webpackJsonp([2,0],[function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}var a=n(70),o=s(a),r=n(54),i=s(r);new o["default"]({el:"#app",template:"<App/>",components:{App:i["default"]}})},,,,,,,,,,function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),n(46),n(47);var a=n(52),o=s(a),r=n(58),i=s(r),u=n(60),c=s(u),l=n(57),d=s(l);e["default"]={name:"app",components:{HeaderNav:i["default"],LeftNav:c["default"],Experience:d["default"]},data:function(){return o["default"]}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={name:"about",props:["about"],data:function(){return{}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={name:"education",props:["education"],data:function(){return{}}}},function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(18),o=s(a),r=n(53),i=s(r);e["default"]={name:"left-nav",props:["experience"],data:function(){return{}},computed:{jobs:function(){return this.experience.map(function(t){return(0,o["default"])({},t,{description:(0,i["default"])(t.description),sidebar:(0,i["default"])(t.sidebar)})})}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={name:"header-nav",props:["name","print","fork"],data:function(){return{}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={name:"languages",props:["languages"],data:function(){return{}}}},function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(55),o=s(a),r=n(56),i=s(r),u=n(61),c=s(u),l=n(59),d=s(l);e["default"]={name:"left-nav",props:["education","tools","languages","about"],data:function(){return{}},components:{About:o["default"],Education:i["default"],Tools:c["default"],Languages:d["default"]}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={name:"tools",props:["tools"],data:function(){return{}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){t.exports={keywords:["resume","software","front end","development","web","full stack","advertising","social media","api","javascript","python","go","rust","elixir"],print:"https://raw.githubusercontent.com/tborg/resume/master/src/assets/resume.yaml",fork:"https://github.com/tborg/resume",name:{first:"Trevor",last:"Borg"},email:"trevor.borg@gmail.com",site:"github.com/tborg",about:"I'm a full stack web dev, leading partner API integrations with social media\nadvertising platforms at 4C since 2013.\n",education:[{school:"Loyola University",city:"Chicago",degrees:[{degree:"M.A.",year:2013,subjects:["Digital Humanities"]},{degree:"B.A.",year:2010,subjects:["English","Classical Studies"]}]}],tools:[{subject:"Client",tags:["Ember","breeze","redux","chai"]},{subject:"Server",tags:["flask","sqlalchemy","alembic","mysql","celery","rabbitmq","redis","mongodb","elasticsearch","OAuth"]},{subject:"Ops",tags:["sentry","ansible","fabric","logstash","kibana","vagrant"]}],languages:[{status:"Working",tags:["javascript","coffeescript","es6","python"]},{status:"Playing",tags:["elixir","clojure","rust","go"]}],experience:[{company:"4C Insights",website:"https://www.4cinsights.com",title:"Software Engineer",from:"August 2012",to:"Present",sidebar:"- **Which API Integrations?**\n  - Snapchat — 2016\n  - Pinterest — 2015\n  - LinkedIn — 2014\n  - Twitter — 2013\n  - Facebook — 2012\n\n\n- **What goes into an API Integration?**\n  - Authentication\n  - API Client\n  - Management UI\n  - Validation\n  - Reporting UI\n  - Aggregation\n  - Automation\n\n\n- **What can you do with automation?**\n  - Budgeting\n  - Day Partitioning\n  - Rule-based Alerting\n  - Rule-based Optimization\n  - TV Sync (teletrax)\n  - Sports Sync (sportsradar)\n  - Weather Sync\n",description:"\n**I work on a large single-page web application.** I specialize in the social\nad management platform, our SaaS product's critical revenue stream.\n\nWhen I started at 4C we were called VoxSup and operated on biweekly meetups\nin a Northwestern professor's office. As of late 2016 I have nearly 200\ncoworkers with offices from Seattle to New York, London to Eindhoven. In\nthat time I have had the opportunity to **lead every new social advertising\npartner API integration.**\n\nProducts at 4C focus on **the intersection of TV and social media**. The ad\nmanagement platform delivers automation tools for delivering the right\nmessage at the right time to the right people. The same tools are enabled\nacross **all major social ad publishers**, integrated into our standard platform.\n\nAs the partners multiply so do the ingredients in 4C's special sauce. I designed\nand built key parts of the **reporting and automation infrastructure**. I wrote\nbrowser-based tools for transforming ad hierarchies **to and from Excel\nspreadsheets**. I helped write and maintain libraries for **bulk-editing** data grids\nin our Ember frontend.\n\nI do a lot of things at 4C so I hand a lot of things off. This has put me\nin a position to **mentor** a number of junior developers. Keeping up with\npeople is just as much of what I do as keeping up with javascript.\n"}]}},,function(t,e,n){var s,a;n(48),s=n(10);var o=n(62);a=s=s||{},"object"!=typeof s["default"]&&"function"!=typeof s["default"]||(a=s=s["default"]),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,t.exports=s},function(t,e,n){var s,a;s=n(11);var o=n(67);a=s=s||{},"object"!=typeof s["default"]&&"function"!=typeof s["default"]||(a=s=s["default"]),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,t.exports=s},function(t,e,n){var s,a;s=n(12);var o=n(64);a=s=s||{},"object"!=typeof s["default"]&&"function"!=typeof s["default"]||(a=s=s["default"]),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,t.exports=s},function(t,e,n){var s,a;n(50),s=n(13);var o=n(66);a=s=s||{},"object"!=typeof s["default"]&&"function"!=typeof s["default"]||(a=s=s["default"]),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,t.exports=s},function(t,e,n){var s,a;n(49),s=n(14);var o=n(63);a=s=s||{},"object"!=typeof s["default"]&&"function"!=typeof s["default"]||(a=s=s["default"]),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,a._scopeId="data-v-3b735032",t.exports=s},function(t,e,n){var s,a;s=n(15);var o=n(65);a=s=s||{},"object"!=typeof s["default"]&&"function"!=typeof s["default"]||(a=s=s["default"]),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,t.exports=s},function(t,e,n){var s,a;n(51),s=n(16);var o=n(68);a=s=s||{},"object"!=typeof s["default"]&&"function"!=typeof s["default"]||(a=s=s["default"]),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,t.exports=s},function(t,e,n){var s,a;s=n(17);var o=n(69);a=s=s||{},"object"!=typeof s["default"]&&"function"!=typeof s["default"]||(a=s=s["default"]),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,t.exports=s},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"container",attrs:{id:"app"}},[_h("header-nav",{attrs:{name:name,print:print,fork:fork}})," ",_h("section",{staticClass:"row"},[_h("div",{staticClass:"three columns"},[_h("left-nav",{attrs:{education:education,tools:tools,languages:languages,about:about}})])," ",_h("div",{staticClass:"nine columns"},[_h("experience",{attrs:{experience:experience}})])])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("section",{staticClass:"row header"},[_h("div",{staticClass:"eleven columns name"},[_h("h2",[_h("span",{staticClass:"first"},[_s(name.first)])," ",_h("span",{staticClass:"last"},[_s(name.last)])])])," ",_h("div",{staticClass:"one column links"},[_h("a",{attrs:{href:fork}},["fork"])," ",_h("a",{attrs:{href:print}},["print"])])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"row education"},[_m(0)," ",_h("div",{staticClass:"twelve columns"},[_l(education,function(t){return _h("div",{staticClass:"row school-group"},[_h("p",{staticClass:"twelve columns"},[_h("span",{staticClass:"school"},[_s(t.school)])," ",_h("span",{staticClass:"city"},[_s(t.city)])])," ",_l(t.degrees,function(t){return _h("p",{staticClass:"twelve columns"},[_h("span",{staticClass:"degree"},[_s(t.degree)])," ",_h("span",{staticClass:"majors"},[_s(t.subjects.join(", "))+", "+_s(t.year)])])})])})])])},staticRenderFns:[function(){with(this)return _h("h6",{staticClass:" twelve columns"},["Education"])}]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"row languages"},[_m(0)," ",_l(languages,function(t){return _h("div",{staticClass:"twelve columns language"},[_h("div",{staticClass:"tags row"},[_h("span",{staticClass:"tag u-pull-left leader"},[_s(t.status)])," ",_l(t.tags,function(t){return _h("span",{staticClass:"tag u-pull-left"},[_s(t)])})])])})])},staticRenderFns:[function(){with(this)return _h("h6",{staticClass:" twelve columns"},["Languages"])}]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"experience row"},[_l(jobs,function(t){return _h("div",{staticClass:"job"},[_h("div",{staticClass:"company row"},[_h("div",{staticClass:"eight columns"},[_h("h6",[_h("a",{attrs:{href:t.website,target:"_blank"}}),_s(t.company)+" - "+_s(t.title)])])," ",_h("div",{staticClass:"four columns"},[_h("p",{staticClass:"period"},[_s(t.from)+" - "+_s(t.to)])])])," ",_h("div",{staticClass:"sidebar four columns u-pull-right",domProps:{innerHTML:_s(t.sidebar)}})," ",_h("div",{staticClass:"description eight columns",domProps:{innerHTML:_s(t.description)}})])})])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"row about"},[_m(0)," ",_h("p",{staticClass:"twelve columns"},[_s(about)])])},staticRenderFns:[function(){with(this)return _h("h6",{staticClass:"twelve columns"},["About"])}]}},function(module,exports){module.exports={render:function(){with(this)return _h("section",{staticClass:"sidebar"},[_h("About",{attrs:{about:about}})," ",_h("Education",{attrs:{education:education}})," ",_h("Tools",{attrs:{tools:tools}})," ",_h("Languages",{attrs:{languages:languages}})])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"row tools"},[_m(0)," ",_l(tools,function(t){return _h("div",{staticClass:"twelve columns tool"},[_h("div",{staticClass:"tags row"},[_h("span",{staticClass:"tag u-pull-left leader"},[_s(t.subject)])," ",_l(t.tags,function(t){return _h("span",{staticClass:"tag u-pull-left"},[_s(t)])})])])})])},staticRenderFns:[function(){with(this)return _h("h6",{staticClass:" twelve columns"},["Tools"])}]}}]);
//# sourceMappingURL=app.d50a5983b01bcb2ae38c.js.map