(this.webpackJsonpwebcdb=this.webpackJsonpwebcdb||[]).push([[4],{847:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return L}));var o=n(1),a=n(14),i=n.n(a),c=n(25),s=n(11),r=n(0),b=n(59),x=n(591),l=n(539),j=n(260),u=n.n(j),d=n(590),g=n(851),h=n(203),O=n(60),m=n(637),p=n.n(m),f=n(116),y=(n(71),n(85),n(64)),S=n(850),w=n(848),v=n(23),N=n(638),k=n.n(N),T=n(9),J=n(13),C=Object(v.b)(),B=new v.a(C);function L(e){var t=Object(T.b)(),n=Object(T.d)((function(e){return e.box})),a=Object(T.d)((function(e){return e.app})),j=Object(r.useState)(!1),m=Object(s.a)(j,2),v=m[0],N=m[1],C=Object(h.a)(),L=function(){var e=Object(c.a)(i.a.mark((function e(){var o,a,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={boxToken:n.boxToken,boxLayout:JSON.stringify(n.boxSettings.layout),boxDataField:JSON.stringify(n.boxSettings.dataField),boxActiveConnection:n.boxSettings.activeConnection,boxConfigConnection:JSON.stringify(n.boxSettings.connection)},a={boxToken:n.boxToken,boxName:n.boxName,boxTagName:n.boxTagName,boxDescription:n.boxDescription},e.prev=2,t(Object(J.g)(!0)),e.next=6,B.updateAll([B.updateBoxSettings(n.boxToken,o),B.updateBox(n.boxToken,a)]);case 6:200===(c=e.sent)[0].status&&200===c[1].status&&t(Object(J.f)({message:"Box Settings has been saved, Congratulations!",severity:"success",isOpen:!0,fetchingStatus:!1})),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),console.error("Box Settings",e.t0),t(Object(J.f)({message:"Something wrong, while updating your box settings :(",severity:"error",isOpen:!0,fetchingStatus:!1}));case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}();return Object(o.jsxs)(x.a,{container:!0,justify:"space-between",alignItems:"center",direction:"row",children:[Object(o.jsxs)(x.a,{item:!0,xs:8,md:6,lg:6,children:[Object(o.jsxs)(g.a,{style:{marginBottom:10},separator:Object(o.jsx)(p.a,{fontSize:"small"}),"aria-label":"breadcrumb",children:[Object(o.jsx)(O.b,{color:"inherit",to:"/box/".concat(n.boxToken),children:"Box"}),Object(o.jsx)(b.a,{color:"textPrimary",children:"Settings"})]}),Object(o.jsx)(b.a,{variant:"h4",component:"h2",children:""===n.boxName?Object(o.jsx)(f.a,{width:400,height:40}):"Settings: ".concat(n.boxName)}),Object(o.jsx)(b.a,{variant:"subtitle1",component:"h4",color:"textSecondary",children:""===n.boxTagName?Object(o.jsx)(f.a,{width:300,height:20}):n.boxTagName})]}),Object(o.jsx)(x.a,{item:!0,xs:4,md:6,lg:6,children:Object(o.jsxs)(x.a,{container:!0,spacing:2,direction:"row",justify:"flex-end",alignItems:"center",children:[Object(o.jsx)(x.a,{item:!0,children:Object(o.jsx)(l.a,{variant:"contained",style:{backgroundColor:C.palette.success.main,color:"white"},size:"large",startIcon:a.fetchingStatus?null:Object(o.jsx)(k.a,{}),disabled:a.fetchingStatus,onClick:function(){return N((function(e){return!e}))},children:a.fetchingStatus?Object(o.jsx)(d.a,{color:"primary"}):"Code"})}),Object(o.jsx)(x.a,{item:!0,children:Object(o.jsx)(l.a,{variant:"contained",color:"primary",size:"large",startIcon:a.fetchingStatus?null:Object(o.jsx)(u.a,{}),disabled:a.fetchingStatus,onClick:L,children:a.fetchingStatus?Object(o.jsx)(d.a,{color:"primary"}):"Save"})})]})}),Object(o.jsxs)(x.a,{style:{display:v?"block":"none"},item:!0,xs:!0,children:[Object(o.jsx)(b.a,{variant:"textPrimary",component:"h4",color:"textPrimary",children:"Developer code it used to see and analyze how your box was configured. This data is on JSON Format. You can save it for later. Or, you just wanna see whats going on with your box."}),Object(o.jsx)(b.a,{variant:"subtitle1",component:"h6",color:"textSecondary",children:"Your Box Code:"}),Object(o.jsx)(S.a,{wrapLongLines:!0,wrapLines:!1,language:"json",style:w.a,children:"{\n  boxId:".concat(JSON.stringify(n.boxId),",\n  boxToken:").concat(JSON.stringify(n.boxToken),",\n  boxName:").concat(JSON.stringify(n.boxName),",\n  boxTagName:").concat(JSON.stringify(n.boxTagName),",\n  boxDescription:").concat(JSON.stringify(n.boxDescription),",\n}")}),Object(o.jsx)(b.a,{variant:"subtitle1",component:"h4",color:"textSecondary",children:"Your box settings code:"}),Object(o.jsx)(S.a,{wrapLongLines:!0,wrapLines:!1,language:"json",style:w.a,children:JSON.stringify(Object(y.f)(n.boxSettings))})]})]})}}}]);
//# sourceMappingURL=4.bbd5bae1.chunk.js.map