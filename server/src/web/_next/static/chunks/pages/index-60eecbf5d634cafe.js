(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9537:function(e,t,o){"use strict";var r=o(6835),a=o(9499),n=o(7294),i=o(9494),d=o(2822),u=o(998),c=o(2863),p=o(5757),l=o(6869),s=o(5258),m=o(8358),g=o(6967),h=o(2210),y=o(1120),f=o(5117),b=o(1163),I=o(3797),x=o(5893),j=function(e){var t=[{name:"\u30c8\u30c3\u30d7\u30da\u30fc\u30b8",href:"/",icon:"home"},{name:"\u3054\u5229\u7528\u898f\u7d04",href:"/TermsPage",icon:"assignment"},{name:"\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc",href:"/PrivacyPolicyPage",icon:"security"},{name:"\u304a\u554f\u3044\u5408\u308f\u305b",href:"/HelpPage",icon:"help_outline"},{name:"\u958b\u767a\u753b\u9762",href:"/",icon:"build"}];return e.isLogined?t.push({name:"\u30de\u30a4\u30da\u30fc\u30b8",href:"/MyPage",icon:"person"}):(t.push({name:"\u4f1a\u54e1\u767b\u9332",href:"/SignUpPage",icon:"person_add"}),t.push({name:"\u30ed\u30b0\u30a4\u30f3",href:"/SignInPage",icon:"person"})),t},v=(0,y.Z)((function(e){var t;return(0,f.Z)({toolbar:(t={height:56,paddingTop:4,paddingBottom:4},(0,a.Z)(t,"".concat(e.breakpoints.up("xs")," and (orientation: landscape)"),{height:48}),(0,a.Z)(t,e.breakpoints.up("sm"),{height:64}),t)})}));t.Z=function(e){var t=(0,i.Z)(),o=v(),a=n.useState(!1),y=(0,r.Z)(a,2),f=y[0],V=y[1],G=(0,I.CG)((function(e){return e.auth})),k=(0,I.TL)(),Z=(0,b.useRouter)();return(0,x.jsxs)("div",{children:[(0,x.jsx)(s.Z,{position:"fixed",color:"primary",children:(0,x.jsxs)(m.Z,{children:[(0,x.jsx)("div",{className:o.toolbar,children:(0,x.jsx)("img",{style:{objectFit:"contain",height:"100%"},src:"https://lh3.googleusercontent.com/pw/ACtC-3f9V0NNZ1ksqKeXNHmed9tfg1yLQgzM1aKhSgVoz0yGXNPndqSZbaeach5hZXcNJ2JcDDSd0qb2yLtc2Oz436gJXt1Wedgn5npqTLPXqOCAfQPZwlLZ41m3WDdY5JOV1Q8n3hU7cOp_3tvm-tUwlQM=w200-h64-no?authuser=0",onClick:function(){Z.push("/")},alt:"site logo",width:"100%",height:"100%"})}),(0,x.jsx)("div",{style:{flexGrow:1}}),G.isLogin&&(0,x.jsx)(g.Z,{color:"inherit",onClick:function(){k(I.Lt.updateLoginStatus(!1)),Z.push("/SignInPage")},"aria-label":"logout",children:(0,x.jsx)(c.Z,{children:"exit_to_app"})}),(0,x.jsx)(g.Z,{color:"inherit",onClick:function(){return V(!f)},"aria-label":"open drawer",children:(0,x.jsx)(c.Z,{children:"menu"})})]})}),(0,x.jsx)(h.Z,{anchor:"top",open:f,onOpen:function(){return V(!0)},onClose:function(){return V(!1)},children:(0,x.jsx)(d.Z,{children:j({isLogined:G.isLogin}).filter((function(e){return e.href!==Z.pathname})).map((function(e,t){return(0,x.jsxs)(u.Z,{button:!0,onClick:function(){return Z.push(e.href)},style:{width:"100%"},children:[(0,x.jsx)(l.Z,{children:(0,x.jsx)(c.Z,{color:"inherit",children:e.icon})}),(0,x.jsx)(p.Z,{color:"inherit",primary:e.name,style:{paddingRight:"5em"}})]},t)}))})}),(0,x.jsx)("div",{className:t.toolbar,style:{marginBottom:"1em"}}),e.children]})}},4844:function(e,t,o){"use strict";function r(){return{clsxJoin:function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return t.join(" ")},clsxSwitch:function(e,t,o){return o?e:t},switchPhotoSize:function(e,t){return"".concat(e,t?"=w600?authuser=0":"=w1920?authuser=0")}}}o.d(t,{Z:function(){return r}})},4525:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return D}});var r=o(6835),a=o(7294),n=o(268),i=o(5517),d=o(1120),u=o(5117),c=o(1163),p=o(2772),l=o(9494),s=o(3797),m=o(6059),g=o(3758),h=o(2863),y=o(6605),f=o(1749),b=o(7159),I=o(5893),x=(0,d.Z)((function(e){return(0,m.Z)({parentFab:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2),background:e.palette.secondary.main,color:"white"},childFab:{background:e.palette.secondary.light,color:"white"},childModalCard:{position:"fixed",bottom:e.spacing(11),right:e.spacing(2)}})}));function j(e){var t=x(),o=a.useState(!1),i=(0,r.Z)(o,2),d=i[0],u=i[1];return(0,I.jsxs)(a.Fragment,{children:[(0,I.jsx)(y.ZP,{title:e.parentTitle,placement:"left",children:(0,I.jsx)(g.Z,{variant:"round",className:t.parentFab,onClick:function(){u(!0)},children:(0,I.jsx)(h.Z,{children:e.parentIcon})})}),(0,I.jsx)(n.Z,{open:d,onClose:function(){u(!1)},closeAfterTransition:!0,children:(0,I.jsx)("div",{className:t.childModalCard,children:(0,I.jsx)(f.Z,{container:!0,direction:"column",justify:"flex-end",spacing:2,children:e.childButtonProperty.map((function(e,o){return(0,I.jsx)(f.Z,{item:!0,children:(0,I.jsx)(b.Z,{in:d,children:(0,I.jsx)("div",{children:(0,I.jsx)(y.ZP,{title:e.title,placement:"left",open:!0,children:(0,I.jsx)(g.Z,{variant:"round",onClick:e.handle,className:t.childFab,children:(0,I.jsx)(h.Z,{children:e.icon})})})})})},o)}))})})})]})}var v=o(3832),V=o(4212),G=o(7397),k=o(998),Z=o(4844),S=(0,d.Z)((function(e){return(0,u.Z)({searchInput:{padding:e.spacing(1)},cardContainer:{width:"100%"},cardContentTitle:{fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightBold,marginTop:"0.5em",marginBottom:"1em"}})}));function A(e){var t=S(),o=(0,l.Z)(),n=a.useState(""),i=(0,r.Z)(n,2),d=i[0],u=i[1],p=(0,s.TL)(),m=(0,c.useRouter)(),g=(0,Z.Z)().clsxJoin;return(0,I.jsxs)(v.Z,{children:[(0,I.jsx)("div",{className:g(o.text_align,o.text_h5,o.text_primary),style:{padding:"1em",paddingTop:"2em"},children:"\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8"}),(0,I.jsxs)(f.Z,{container:!0,direction:"row",justify:"flex-start",alignItems:"stretch",spacing:2,children:[(0,I.jsx)(f.Z,{item:!0,xs:12,children:(0,I.jsx)(V.Z,{fullWidth:!0,variant:"outlined",color:"secondary",placeholder:"\u691c\u7d22\u3057\u307e\u3059...",onChange:function(e){u(e.currentTarget.value)},className:t.searchInput,InputProps:{endAdornment:(0,I.jsx)(G.Z,{position:"end",children:(0,I.jsx)(h.Z,{children:"search"})})}})}),e.contents.filter((function(e){return new RegExp(d).test(e.title)||new RegExp(d).test(e.description)})).map((function(e,r){return(0,I.jsx)(f.Z,{item:!0,xs:12,sm:6,md:4,children:(0,I.jsx)(k.Z,{button:!0,onClick:function(t){return o=e.code,p(s.r6.importJson(o)),void m.push("/EditerPage");var o},style:{height:"100%"},children:(0,I.jsxs)("div",{className:g(t.cardContainer,o.card_basic),style:{textAlign:"center",height:"100%"},children:[(0,I.jsx)(h.Z,{fontSize:"large",style:{color:e.iconColor},children:e.icon}),(0,I.jsx)("div",{className:g(o.text_h6,t.cardContentTitle),children:e.title}),(0,I.jsx)("div",{className:g(o.text_body),children:e.description})]})})},r)}))]})]})}var w=o(3259),C=o(7559),O=o(3165),N=o(8118),$="send",B="rate_review",_="timer_off",F="border_all",P="event",z={blue:w.Z[800],green:C.Z[800],red:O.Z[800],purple:N.Z[800]},T=[{icon:$,iconColor:z.blue,title:"\u4eca\u65e5\u306e\u4e88\u5b9a\u4e00\u89a7\u3092\u9001\u4fe1",description:"\u30ab\u30ec\u30f3\u30c0\u30fc\u306b\u767b\u9332\u3055\u308c\u3066\u3044\u308b\u4eca\u65e5\u306e\u4e88\u5b9a\u4ef6\u540d\u4e00\u89a7\u3092Gmail\u3067\u9001\u308a\u307e\u3059",code:{current:[{currentGroupId:"root",currentParentCardId:"root",currentParentGroupId:"root",argsFromParent:[]}],entities:{root:[{id:"179da4e67c919b7edd88b2995b608ee",categoryId:"Calendar",methodId:"openDefault",inputBaseValue:"",inputArgumentValue:[],outputVariableName:"calender",comment:"",childGroupId:"",parentGroup:{grouptId:"root",id:"root"},groupId:"root"},{id:"179da4f71992978f0b5a11a2c779218",categoryId:"Date",methodId:"TodayDate",inputBaseValue:"",inputArgumentValue:[],outputVariableName:"today",comment:"",childGroupId:"",parentGroup:{grouptId:"root",id:"root"},groupId:"root"},{id:"179da4fae3c257879f11518bb669ead",categoryId:"Calendar",methodId:"getEventsForDay",inputBaseValue:"$calender$",inputArgumentValue:[{key:"date",value:"$today$",isObject:!1}],outputVariableName:"events",comment:"",childGroupId:"",parentGroup:{grouptId:"root",id:"root"},groupId:"root"},{id:"179da5050a92255a92e102488e0765c",categoryId:"Array",methodId:"map",inputBaseValue:"$events$",inputArgumentValue:[],outputVariableName:"result",comment:"",childGroupId:"group1",parentGroup:{grouptId:"root",id:"root"},groupId:"root"},{id:"179da5170e41f46286c15186421fd01",categoryId:"Array",methodId:"join",inputBaseValue:"$result$",inputArgumentValue:[{key:"value",value:"'\\n'",isObject:!1}],outputVariableName:"body",comment:"",childGroupId:"",parentGroup:{grouptId:"root",id:"root"},groupId:"root"},{id:"179da521197284cea92be2461185caa",categoryId:"Gmail",methodId:"sendEmail",inputBaseValue:"",inputArgumentValue:[{key:"recipient",value:"'xxxxxxxxxx@gmail.com'",isObject:!1},{key:"subject",value:"'\u672c\u65e5\u306e\u4e88\u5b9a\u3092\u304a\u9001\u308a\u3057\u307e\u3059'",isObject:!1},{key:"body",value:"$body$",isObject:!1},{key:"attachments",value:"",isObject:!0},{key:"bcc",value:"",isObject:!0},{key:"cc",value:"",isObject:!0},{key:"from",value:"",isObject:!0},{key:"htmlBody",value:"",isObject:!0},{key:"name",value:"",isObject:!0}],outputVariableName:"",comment:"",childGroupId:"",parentGroup:{grouptId:"root",id:"root"},groupId:"root"}],group1:[{id:"179da50af772671131d1329e59cdca1",categoryId:"CalendarEvent",methodId:"getTitle",inputBaseValue:"$group1Value$",inputArgumentValue:[],outputVariableName:"title",comment:"",childGroupId:"",parentGroup:{grouptId:"root",id:"179da5050a92255a92e102488e0765c"},groupId:"group1"},{id:"179da5109661ac9a74bea2e2f96c306",categoryId:"Array",methodId:"return",inputBaseValue:"$title$",inputArgumentValue:[],outputVariableName:"",comment:"",childGroupId:"",parentGroup:{grouptId:"root",id:"179da5050a92255a92e102488e0765c"},groupId:"group1"}]},RunOptions:{categoryId:"",methodId:"",frequency1Argument:"",frequency2Argument:""}}},{icon:B,iconColor:z.green,title:"Gmail\u3092Spreadsheet\u66f8\u304d\u8fbc\u307f",description:"Gmail\u306e\u53d7\u4fe1\u30c8\u30ec\u30a4\u306b\u3042\u308b\u4ef6\u540d\u306e\u4e00\u89a7\u3092Spreadsheet\u306b\u66f8\u304d\u51fa\u3057\u307e\u3059",code:{current:[{currentGroupId:"root",currentParentCardId:"root",currentParentGroupId:"root",argsFromParent:[]}],entities:{root:[{id:"179da558d39183feb9188281b0b120c",categoryId:"Gmail",methodId:"search",inputBaseValue:"",inputArgumentValue:[{key:"query",value:"'label:inbox'",isObject:!1},{key:"start",value:"0",isObject:!1},{key:"max",value:"30",isObject:!1}],outputVariableName:"threads",comment:"\u53d7\u4fe1\u30c8\u30ec\u30a4\u3088\u308aGmail\u30b9\u30ec\u30c3\u30c9\u3092\u53d6\u5f97\u3057\u307e\u3059",childGroupId:"",parentGroup:{grouptId:"root",id:"root"},groupId:"root"},{id:"179da6166dc2ad752db8d24f7b37ba6",categoryId:"Spreadsheet",methodId:"getActiveSpreadsheet",inputBaseValue:"",inputArgumentValue:[],outputVariableName:"spreadsheet",comment:"",childGroupId:"",parentGroup:{grouptId:"root",id:"root"},groupId:"root"},{id:"179da61b04e2365b211c525cba4e69b",categoryId:"Spreadsheet",methodId:"getSheetByName",inputBaseValue:"$spreadsheet$",inputArgumentValue:[{key:"name",value:"'sheetName'",isObject:!1}],outputVariableName:"sheet",comment:"",childGroupId:"",parentGroup:{grouptId:"root",id:"root"},groupId:"root"},{id:"179da5687fe1a7c342dd72b26c73b8e",categoryId:"Array",methodId:"forEach",inputBaseValue:"$threads$",inputArgumentValue:[],outputVariableName:"result",comment:"",childGroupId:"group1",parentGroup:{grouptId:"root",id:"root"},groupId:"root"}],group1:[{id:"179da57d07324b4a89f562bb5d1333c",categoryId:"GmailThread",methodId:"getFirstMessageSubject",inputBaseValue:"$group1Value$",inputArgumentValue:[],outputVariableName:"subject",comment:"",childGroupId:"",parentGroup:{grouptId:"root",id:"179da5687fe1a7c342dd72b26c73b8e"},groupId:"group1"},{id:"179da588c701b9456b53f2e6d6088d2",categoryId:"GmailThread",methodId:"getMessages",inputBaseValue:"$group1Value$",inputArgumentValue:[],outputVariableName:"messages",comment:"",childGroupId:"",parentGroup:{grouptId:"root",id:"179da5687fe1a7c342dd72b26c73b8e"},groupId:"group1"},{id:"179da594a1f2d2d13efd92d7a24ab0c",categoryId:"Array",methodId:"indexAccess",inputBaseValue:"$messages$",inputArgumentValue:[{key:"value",value:"0",isObject:!1}],outputVariableName:"message",comment:"\u30b9\u30ec\u30c3\u30c9\u306e\u6700\u521d\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b",childGroupId:"group2",parentGroup:{grouptId:"root",id:"179da5687fe1a7c342dd72b26c73b8e"},groupId:"group1"},{id:"179da59e28e26356ac1452165b73d31",categoryId:"GmailMessage",methodId:"getFrom",inputBaseValue:"$message$",inputArgumentValue:[],outputVariableName:"fromAddress",comment:"",childGroupId:"",parentGroup:{grouptId:"root",id:"179da5687fe1a7c342dd72b26c73b8e"},groupId:"group1"},{id:"179da5a67221c8187c5f02afaba766c",categoryId:"Literal",methodId:"BlankArrayLiteral",inputBaseValue:"",inputArgumentValue:[],outputVariableName:"array",comment:"",childGroupId:"",parentGroup:{grouptId:"root",id:"179da5687fe1a7c342dd72b26c73b8e"},groupId:"group1"},{id:"179da5b782429770a53162703fbb360",categoryId:"Array",methodId:"push",inputBaseValue:"$array$",inputArgumentValue:[{key:"value",value:"$subject$",isObject:!1}],outputVariableName:"",comment:"",childGroupId:"",parentGroup:{grouptId:"root",id:"179da5687fe1a7c342dd72b26c73b8e"},groupId:"group1"},{id:"179da5bd0fa21bd4d2ad720173e3934",categoryId:"Array",methodId:"push",inputBaseValue:"$array$",inputArgumentValue:[{key:"value",value:"$fromAddress$",isObject:!1}],outputVariableName:"",comment:"",childGroupId:"",parentGroup:{grouptId:"root",id:"179da5687fe1a7c342dd72b26c73b8e"},groupId:"group1"},{id:"179da84e1f42a07ab44b4212d435320",categoryId:"SpreadsheetSheet",methodId:"appendRow",inputBaseValue:"$sheet$",inputArgumentValue:[{key:"array",value:"$array$",isObject:!1}],outputVariableName:"",comment:"",childGroupId:"",parentGroup:{grouptId:"root",id:"179da5687fe1a7c342dd72b26c73b8e"},groupId:"group1"}],group2:[]},RunOptions:{categoryId:"",methodId:"",frequency1Argument:"",frequency2Argument:""}}},{icon:$,iconColor:z.blue,title:"Gmail\u3092\u6bce\u65e5\u9001\u4fe1",description:"\u6bce\u65e5\u6307\u5b9a\u6642\u9593\u306bGmail\u3092\u9001\u4fe1\u3057\u307e\u3059",code:{current:[{currentGroupId:"root",currentParentCardId:"root",currentParentGroupId:"root",argsFromParent:[]}],RunOptions:{categoryId:"TimeTrigger",methodId:"everyDays",frequency1Argument:"9",frequency2Argument:""},entities:{root:[{id:"17a9b0aca3d27a5abbff51f3a97258a",categoryId:"Literal",methodId:"StringLiteral",inputBaseValue:"'xxxxxxxxxx@gmail.com'",inputArgumentValue:[],outputVariableName:"recipient",comment:"\u9001\u4fe1\u5148\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9",childGroupId:"",parentGroup:{grouptId:"root",id:"root"},groupId:"root"},{id:"17a9b0b51442c06fbc28b1f5d07fffc",categoryId:"Gmail",methodId:"sendEmail",inputBaseValue:"",inputArgumentValue:[{key:"recipient",value:"$recipient$",isObject:!1},{key:"subject",value:"'\u3010\u81ea\u52d5\u9001\u4fe1\u3011\u4ef6\u540d'",isObject:!1},{key:"body",value:"'\u5b9b\u5148\u5404\u4f4d\\n\\nGAS\u306b\u3066\u30e1\u30fc\u30eb\u3092\u9001\u4fe1\u3057\u3066\u307f\u307e\u3059\u3002\\n\u3054\u78ba\u8a8d\u4e0b\u3055\u3044\u3002\\n'",isObject:!1},{key:"attachments",value:"",isObject:!0},{key:"bcc",value:"",isObject:!0},{key:"cc",value:"",isObject:!0},{key:"from",value:"",isObject:!0},{key:"htmlBody",value:"",isObject:!0},{key:"name",value:"",isObject:!0}],outputVariableName:"",comment:"",childGroupId:"",parentGroup:{grouptId:"root",id:"root"},groupId:"root"}]}}},{icon:_,iconColor:z.red,title:"\u5168\u3066\u306e\u30c8\u30ea\u30ac\u30fc\u3092\u524a\u9664",description:"\u30b9\u30af\u30ea\u30d7\u30c8\u306b\u8a2d\u5b9a\u3055\u308c\u305f\u5168\u3066\u306e\u30c8\u30ea\u30ac\u30fc\u3092\u524a\u9664\u3057\u307e\u3059",code:{current:[{currentGroupId:"root",currentParentCardId:"root",currentParentGroupId:"root",argsFromParent:[]}],RunOptions:{categoryId:"",methodId:"",frequency1Argument:"",frequency2Argument:""},entities:{root:[{id:"17a9b20f1dc19b478c822213769faaf",categoryId:"Utility",methodId:"deleteAllTrigger",inputBaseValue:"",inputArgumentValue:[],outputVariableName:"",comment:"\u5168\u3066\u306e\u30c8\u30ea\u30ac\u30fc\u3092\u524a\u9664",childGroupId:"",parentGroup:{grouptId:"root",id:"root"},groupId:"root"}]}}},{icon:F,iconColor:z.green,title:"Spreadsheet\u306e\u5024\u3092Gmail\u3067\u9001\u4ed8",description:"Spreadsheet\u306e\u6307\u5b9a\u30bb\u30eb\u306e\u5024\u3092Gmail\u3067\u9001\u4fe1\u3057\u307e\u3059",code:{current:[{currentGroupId:"root",currentParentCardId:"root",currentParentGroupId:"root",argsFromParent:[]}],RunOptions:{categoryId:"",methodId:"",frequency1Argument:"",frequency2Argument:""},entities:{root:[{id:"17a9b2534412adce382832cd8a8bda9",categoryId:"Spreadsheet",methodId:"getActiveSpreadsheet",inputBaseValue:"",inputArgumentValue:[],outputVariableName:"ss",comment:"\u30b9\u30af\u30ea\u30d7\u30c8\u304c\u7d10\u3065\u304fSpreadsheet\u3078\u30a2\u30af\u30bb\u30b9",childGroupId:"",parentGroup:{grouptId:"root",id:"root"},groupId:"root"},{id:"17a9b259f4b25cc01ab4828d9390518",categoryId:"Spreadsheet",methodId:"getSheetByName",inputBaseValue:"$ss$",inputArgumentValue:[{key:"name",value:"'\u30b7\u30fc\u30c8\u540d'",isObject:!1}],outputVariableName:"sheet",comment:"\u5f15\u6570-0\u306e\u30b7\u30fc\u30c8\u3092\u958b\u304f",childGroupId:"",parentGroup:{grouptId:"root",id:"root"},groupId:"root"},{id:"17a9b270c342bcdbe4c6c2c774ad930",categoryId:"SpreadsheetSheet",methodId:"getRangeByString",inputBaseValue:"$sheet$",inputArgumentValue:[{key:"range",value:"'A1'",isObject:!1}],outputVariableName:"range",comment:"A1\u30bb\u30eb\u3092\u7bc4\u56f2\u9078\u629e\u3057\u307e\u3059",childGroupId:"",parentGroup:{grouptId:"root",id:"root"},groupId:"root"},{id:"17a9b27e52f18fb5dcf7d24d75a05f5",categoryId:"SpreadsheetRange",methodId:"getValue",inputBaseValue:"$range$",inputArgumentValue:[],outputVariableName:"value",comment:"\u6307\u5b9a\u3057\u305f\u30bb\u30eb\u306e\u5024\u3092\u53d6\u5f97\u3057\u307e\u3059",childGroupId:"",parentGroup:{grouptId:"root",id:"root"},groupId:"root"},{id:"17a9b28701125d263f2d12d15c5ca65",categoryId:"Gmail",methodId:"sendEmail",inputBaseValue:"",inputArgumentValue:[{key:"recipient",value:"'xxxxxxxx@gmail.com'",isObject:!1},{key:"subject",value:"'\u3010\u81ea\u52d5\u9001\u4fe1\u3011Spreadsheet\u306e\u53d6\u5f97\u7d50\u679c\u3092\u9001\u4ed8\u3057\u307e\u3059'",isObject:!1},{key:"body",value:"'\u5b9b\u5148\u5404\u4f4d\\n\\n\u5bfe\u8c61\u306eSpreadsheetA1\u306e\u5024\u306f'+$value$+'\\n\\n\u3067\u3059'",isObject:!1},{key:"attachments",value:"",isObject:!0},{key:"bcc",value:"",isObject:!0},{key:"cc",value:"",isObject:!0},{key:"from",value:"",isObject:!0},{key:"htmlBody",value:"",isObject:!0},{key:"name",value:"",isObject:!0}],outputVariableName:"",comment:"",childGroupId:"",parentGroup:{grouptId:"root",id:"root"},groupId:"root"}]}}},{icon:P,iconColor:z.purple,title:"\u4e88\u5b9a\u3092\u6bce\u9031\u81ea\u52d5\u4f5c\u6210",description:"\u6bce\u9031\u6708\u66dc\u65e5\u65e9\u671d\u306b\u540c\u65e59\u6642\u958b\u59cb\u306e\u4e88\u5b9a\u3092\u81ea\u52d5\u4f5c\u6210\u3057\u307e\u3059",code:{current:[{currentGroupId:"root",currentParentCardId:"root",currentParentGroupId:"root",argsFromParent:[]}],RunOptions:{categoryId:"",methodId:"",frequency1Argument:"",frequency2Argument:""},entities:{root:[{id:"17a9b2d4bbb259a15a0c61bee4a36f4",categoryId:"Calendar",methodId:"openDefault",inputBaseValue:"",inputArgumentValue:[],outputVariableName:"calender",comment:"\u5b9f\u884c\u8005\u306e\u30ab\u30ec\u30f3\u30c0\u30fc\u3078\u30a2\u30af\u30bb\u30b9",childGroupId:"",parentGroup:{grouptId:"root",id:"root"},groupId:"root"},{id:"17a9b2de7de2bc9f9f7231f8d58be05",categoryId:"Date",methodId:"TodayDate",inputBaseValue:"",inputArgumentValue:[],outputVariableName:"today",comment:"\u5b9f\u884c\u65e5\u6642\u3092\u53d6\u5f97",childGroupId:"",parentGroup:{grouptId:"root",id:"root"},groupId:"root"},{id:"17a9b2e7ad923c0b67e142cc620fc02",categoryId:"Date",methodId:"setHour",inputBaseValue:"$today$",inputArgumentValue:[{key:"num",value:"9",isObject:!1}],outputVariableName:"",comment:"",childGroupId:"",parentGroup:{grouptId:"root",id:"root"},groupId:"root"},{id:"17a9b2ed144221fd0e7861f39169ea8",categoryId:"Date",methodId:"setMinutes",inputBaseValue:"$today$",inputArgumentValue:[{key:"num",value:"0",isObject:!1}],outputVariableName:"",comment:"",childGroupId:"",parentGroup:{grouptId:"root",id:"root"},groupId:"root"},{id:"17a9b2f406025d5ca3a1d2cb7f69f54",categoryId:"Calendar",methodId:"createEvent",inputBaseValue:"$calender$",inputArgumentValue:[{key:"title",value:"'\u3010\u5b9a\u671f\u3011\u81ea\u52d5\u751f\u6210\u30a4\u30d9\u30f3\u30c8'",isObject:!1},{key:"start",value:"$today$",isObject:!1},{key:"end",value:"$today$",isObject:!1},{key:"description",value:"'\u4e88\u5b9a\u3092\u4f5c\u6210\u3057\u307e\u3057\u305f'",isObject:!0},{key:"location",value:"'Web\u4f1a\u8b70'",isObject:!0},{key:"guests",value:"",isObject:!0},{key:"sendInvites",value:"true",isObject:!0}],outputVariableName:"event",comment:"",childGroupId:"",parentGroup:{grouptId:"root",id:"root"},groupId:"root"}]}}}],W=o(9537),R=o(9008),q=o.n(R),E=o(282),L=(0,d.Z)((function(e){return(0,u.Z)({cardContainer:{width:"100%",padding:"5vh"},modalCardContainer:{minWidth:"40vw",maxWidth:"50vw"},icon:{fontSize:"7em",color:e.palette.text.primary}})}));function D(){var e=L(),t=(0,l.Z)(),o=a.useState(!1),d=(0,r.Z)(o,2),u=d[0],m=d[1],g=a.useState(""),h=(0,r.Z)(g,2),y=h[0],f=h[1],b=a.useState(""),x=(0,r.Z)(b,2),v=x[0],V=x[1],G=(0,s.TL)(),k=(0,c.useRouter)(),S=(0,Z.Z)().clsxJoin;return(0,I.jsxs)(a.Fragment,{children:[(0,I.jsx)(q(),{children:(0,I.jsxs)("title",{children:["Rapid.gs"," - \u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u9078\u629e|GAS \u30ed\u30fc\u30b3\u30fc\u30c9\u4f5c\u6210\u30a2\u30d7\u30ea"]})}),(0,I.jsxs)(W.Z,{children:[(0,I.jsx)(A,{contents:T}),(0,I.jsx)(j,{parentTitle:"\u958b\u304f",parentIcon:"folder",childButtonProperty:[{title:"\u65b0\u898f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u958b\u304f",icon:"add",handle:function(){k.push("/EditerPage")}},{title:"\u65e2\u5b58\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u958b\u304f",icon:"folder_open",handle:function(){f(""),V(""),m(!0)}}]}),(0,I.jsx)(n.Z,{open:u,onClose:function(){m(!1)},children:(0,I.jsxs)("div",{className:S(t.card_basic,t.positionFixedCentering,e.modalCardContainer),children:[(0,I.jsxs)(E.Z,{variant:"contained",disabled:""!==y,color:"secondary",component:"label",fullWidth:!0,children:[""===y?"\u8aad\u307f\u8fbc\u307f\uff08.json\uff09":"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a1\u30a4\u30eb\u3092\u8aad\u307f\u8fbc\u307f\u307e\u3057\u305f",(0,I.jsx)("input",{type:"file",onChange:function(e){(0,p.Ft)(e.currentTarget.files)||(V(e.currentTarget.files[0].name),e.currentTarget.files[0].text().then((function(e){f(e)})))},style:{display:"none"}})]}),0!==v.length&&(0,I.jsx)("div",{className:S(t.text_body,t.text_secondary,t.text_noWrap),style:{paddingTop:"1em",paddingBottom:"1em",overflowX:"hidden"},children:v}),(0,I.jsx)(i.Z,{style:{marginTop:"1em",marginBottom:"1em"}}),(0,I.jsx)(E.Z,{disabled:""===y,color:""===y?"primary":"secondary",variant:"contained",fullWidth:!0,onClick:function(){var e=JSON.parse(y);G(s.r6.importJson(e)),m(!1),k.push("/EditerPage")},children:""===y?"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30d5\u30a1\u30a4\u30eb\u3092\u8aad\u307f\u8fbc\u3093\u3067\u4e0b\u3055\u3044":"\u7de8\u96c6\u753b\u9762\u3092\u958b\u304f"})]})})]})]})}},9494:function(e,t,o){"use strict";var r=o(9499),a=o(1120),n=o(5117);t.Z=(0,a.Z)((function(e){return(0,n.Z)({text_h1:(0,r.Z)({fontSize:e.typography.h2.fontSize,fontFamily:e.typography.h1.fontFamily,fontWeight:"bolder"},e.breakpoints.down("md"),{fontSize:e.typography.h3.fontSize}),text_h2:(0,r.Z)({fontSize:e.typography.h2.fontSize,fontFamily:e.typography.h2.fontFamily,fontWeight:"bolder"},e.breakpoints.down("md"),{fontSize:e.typography.h3.fontSize}),text_h3:(0,r.Z)({fontSize:e.typography.h3.fontSize,fontFamily:e.typography.h3.fontFamily,fontWeight:"bolder"},e.breakpoints.down("md"),{fontSize:e.typography.h4.fontSize}),text_h4:(0,r.Z)({fontSize:e.typography.h4.fontSize,fontFamily:e.typography.h4.fontFamily,fontWeight:"bolder"},e.breakpoints.down("md"),{fontSize:e.typography.h5.fontSize}),text_h5:(0,r.Z)({fontSize:e.typography.h5.fontSize,fontFamily:e.typography.h5.fontFamily,fontWeight:"bolder"},e.breakpoints.down("md"),{fontSize:e.typography.h6.fontSize}),text_h6:(0,r.Z)({fontSize:e.typography.h6.fontSize,fontFamily:e.typography.h6.fontFamily,fontWeight:"bolder"},e.breakpoints.down("md"),{fontSize:e.typography.subtitle1.fontSize}),text_body:(0,r.Z)({fontSize:e.typography.body1.fontSize,fontFamily:e.typography.body1.fontFamily},e.breakpoints.down("md"),{fontSize:e.typography.body2.fontSize}),text_remark:{fontSize:e.typography.caption.fontSize,fontFamily:e.typography.caption.fontFamily},text_align:{textAlign:"center"},text_error:{color:e.palette.error.main},text_secondary:{color:e.palette.text.secondary},text_primary:{color:e.palette.text.primary},text_noWrap:{whiteSpace:"nowrap",overflow:"scroll",overflowY:"hidden"},modalBasic:(0,r.Z)({width:"100%",backgroundColor:e.palette.background.paper,padding:"2em",borderRadius:"10px"},e.breakpoints.down("sm"),{padding:"0.5em"}),card_basic:(0,r.Z)({backgroundColor:e.palette.background.paper,borderRadius:e.shape.borderRadius,boxShadow:e.shadows[3],padding:"2em"},e.breakpoints.down("sm"),{padding:"1em"}),positionCentering:{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},positionRight:{display:"flex",flexWrap:"wrap",justifyContent:"flex-end",alignItems:"center",width:"100%",height:"100%"},positionXCenterYBottom:{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"flex-end",width:"100%",height:"100%"},positionXCenterYTop:{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"flex-start",width:"100%",height:"100%"},positionFixedCentering:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%,-50%)"},position_flex_col_y_centering:{display:"flex",flexWrap:"wrap",flex:"0 0 100%",justifyContent:"center",alignItems:"flexStart",flexDirection:"column",width:"100%",height:"100%"},"@keyframes SimpleFadeIn":{from:{opacity:0},to:{opacity:1}},transitionSimpleFadeIn:{animation:"$SimpleFadeIn",animationDuration:"1s",animationTimingFunction:e.transitions.easing.easeInOut},transitionFadeInDownPending:{opacity:0,transform:"translateY(-10vh)"},transitionFadeInUpPending:{opacity:0,transform:"translateY(10vh)"},transitionFadeInRightPending:{opacity:0,transform:"translateX(100vw)"},transitionFadeInLeftPending:{opacity:0,transform:"translateX(-100vw)"},transitionFadeInRun:{transition:e.transitions.create(["opacity","transform"],{duration:e.transitions.duration.complex,easing:e.transitions.easing.easeInOut}),opacity:1,transform:"translateX(0px)"},transitionFadeInEnd:{opacity:1,transform:"translateX(0px)"},contentSectionContainer:(0,r.Z)({maxWidth:e.breakpoints.values.md},e.breakpoints.down("sm"),{padding:e.spacing(1)}),rootContainer:{overflow:"hidden",width:"100%"},drawerContainer:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary},toolbar:e.mixins.toolbar})}))},8312:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return o(4525)}])}},function(e){e.O(0,[166,187,491,774,888,179],(function(){return t=8312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);