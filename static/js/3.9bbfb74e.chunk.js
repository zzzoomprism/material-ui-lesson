(this["webpackJsonpmaterial-ui-lesson"]=this["webpackJsonpmaterial-ui-lesson"]||[]).push([[3],{551:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(549),l=a(506),i=a(432);const c=Object(i.a)(e=>({large:{width:e.spacing(15),height:e.spacing(15),cursor:"pointer"}}));t.a=({click:e,picture:t,children:a})=>{let n=c();return r.a.createElement(l.a,{color:"secondary",overlap:"circle",badgeContent:" ",onClick:e,anchorOrigin:{vertical:"top",horizontal:"right"}},r.a.createElement(o.a,{src:t||"",className:n.large}),a)}},552:function(e,t,a){"use strict";var n=a(14),r=a(27),o=a(0),l=a.n(o),i=a(261),c=a(262);var s=({followed:e,followingThunk:t,unfollowingThunk:a,getUserFollowingInfo:n,id:s,peopleSetLoading:d,followQueue:m})=>{let u=m.includes(s);const p=Object(o.useState)(!1),g=Object(r.a)(p,2),b=g[0],f=g[1];return Object(o.useEffect)(()=>{f(!0),n(s),setTimeout(()=>{f(!1)},300)},[]),l.a.createElement(o.Fragment,null,u||d||b?l.a.createElement(c.a,null):e?l.a.createElement(i.a,{variant:"contained",color:"primary",onClick:()=>a(s)},"UNFOLLOW"):l.a.createElement(i.a,{variant:"outlined",color:"primary",onClick:()=>t(s)},"FOLLOW"))},d=a(168);t.a=Object(n.b)(e=>({peopleSetLoading:e.people.loading,followQueue:e.people.followQueue}),{followingThunk:d.b,unfollowingThunk:d.f,getUserFollowingInfo:d.d})(s)},553:function(e,t,a){"use strict";var n=a(17);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),o=(0,n(a(19)).default)(r.default.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.29 16.29L5.7 12.7a.9959.9959 0 010-1.41c.39-.39 1.02-.39 1.41 0L10 14.17l6.88-6.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-7.59 7.59c-.38.39-1.02.39-1.41 0z"}),"CheckCircleRounded");t.default=o},554:function(e,t,a){"use strict";var n=a(17);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),o=(0,n(a(19)).default)(r.default.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm4.3 14.3c-.39.39-1.02.39-1.41 0L12 13.41 9.11 16.3c-.39.39-1.02.39-1.41 0a.9959.9959 0 010-1.41L10.59 12 7.7 9.11a.9959.9959 0 010-1.41c.39-.39 1.02-.39 1.41 0L12 10.59l2.89-2.89c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41L13.41 12l2.89 2.89c.38.38.38 1.02 0 1.41z"}),"CancelRounded");t.default=o},559:function(e,t,a){"use strict";a.r(t);var n=a(14),r=a(0),o=a.n(r),l=a(163),i=a(432),c=a(162),s=a(57),d=a(508),m=a(445),u=a(27),p=a(546),g=a(520),b=a(217),f=a.n(b),E=a(203),h=a.n(E),v=a(83);const y=e=>({currentUserId:e.profile.user.userId,myId:e.app.user}),O=e=>{let t=t=>{let a=t.currentUserId===t.myId;const n=Object(r.useState)(!1),l=Object(u.a)(n,2),i=l[0],c=l[1];return o.a.createElement(e,Object.assign({},t,{showEditMode:a,isEdit:i,closeEditMode:()=>c(!1),editButton:a&&o.a.createElement(p.a,{title:"Edit","aria-label":"add",onClick:()=>c(!i)},o.a.createElement(g.a,{size:"small",color:"secondary"},i?o.a.createElement(h.a,null):o.a.createElement(f.a,null)))}))};return t=Object(n.b)(y,{updateProfile:v.d})(t),t};var w=a(24),j=a(219),F=a(169),k=a(215);var C=Object(j.a)({form:"biography",enableReinitialize:!0})(({handleSubmit:e,isFetching:t})=>o.a.createElement("form",{onSubmit:e},o.a.createElement(m.a,{mt:2},o.a.createElement(k.a,null),o.a.createElement(m.a,{mt:3},Object(F.a)(t,"Save","contained","primary"))))),S=a(528);var x=({editButton:e,headline:t})=>o.a.createElement(r.Fragment,null,o.a.createElement(l.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center"},o.a.createElement(l.a,{item:!0},o.a.createElement(s.a,{variant:"h3"},t)),o.a.createElement(l.a,{item:!0},e)),o.a.createElement(S.a,null)),z=a(170);const R=Object(i.a)(e=>({paper:{padding:e.spacing(3)}}));var I=Object(w.d)(O)(({description:e,fullname:t,editButton:a,isEdit:n,closeEditMode:r,user:l,isFetching:i,error:u,updateProfile:p})=>{const g=R();return o.a.createElement(c.a,{className:g.paper},o.a.createElement(x,{editButton:a,headline:"Biography"}),n?o.a.createElement(C,{isFetching:i,initialValues:l,onSubmit:e=>{p(e,"biography").then(()=>{r()})}}):o.a.createElement(m.a,null,t?o.a.createElement(s.a,{variant:"caption",color:"secondary"},"A little flash back of ",t):o.a.createElement(d.a,{animation:"wave",height:10,width:"25%"}),e?o.a.createElement(s.a,{variant:"body2"},e||"There is no description."):o.a.createElement(d.a,{animation:"wave",height:10,width:"25%"})),u&&!i&&o.a.createElement(z.a,{error:u,successAlert:"Your information about you update successfully!"}))});var B=Object(n.b)(e=>({user:e.profile.user,isFetching:e.profile.isFetching,error:e.profile.error}),{updateProfile:v.d})(I),T=a(549),N=a(110),L=a(506),A=a(66);const P=Object(i.a)(e=>({paper:{marginBottom:e.spacing(1),padding:e.spacing(3)},button:{width:"calc(100% / 3 - "+e.spacing(1)+"px)",height:e.spacing(15),marginRight:e.spacing(1),marginTop:e.spacing(2)},badge:{width:"100%",height:"100%"},largeAvatar:{width:"100%",height:"100%",filter:"grayscale(50%)"},namesOfAvatar:{marginTop:e.spacing(10)}}));var U=({countOfFollowing:e,followingPeople:t})=>{const a=P();if(!t)return o.a.createElement(A.a,null);const n=t.map(e=>o.a.createElement(N.a,{className:a.button},o.a.createElement(L.a,{color:"primary",badgeContent:" ",overlap:"circle",variant:"dot",component:"div",className:a.badge},o.a.createElement(T.a,{variant:"rounded",alt:e.name,src:e.photos.large,className:a.largeAvatar},o.a.createElement(s.a,{variant:"caption",color:"primary",className:a.namesOfAvatar},e.name)))));return o.a.createElement(c.a,{className:a.paper},o.a.createElement(s.a,{variant:"h3"},"Following - ",e),o.a.createElement(S.a,null),o.a.createElement(m.a,{display:"flex"},n))};var J=Object(n.b)(e=>({countOfFollowing:e.profile.followingCount,followingPeople:e.profile.followingPeople}),{})(U),M=a(551);var _=({profile_info:e})=>o.a.createElement(m.a,{display:"flex",alignItems:"center",justifyContent:"center"},e?o.a.createElement(M.a,{picture:e?e.photos.large:""}):o.a.createElement(d.a,{variant:"circle"},o.a.createElement(M.a,null)),o.a.createElement(s.a,{component:"div"},e?o.a.createElement(m.a,{fontSize:"h4.fontSize",ml:2,mr:2},e.fullName):o.a.createElement(d.a,{animation:"wave",height:10,width:150},o.a.createElement(m.a,{fontSize:"h4.fontSize",ml:2,mr:2})),e?o.a.createElement(m.a,{fontSize:"body2.fontSize",ml:2,mr:2},e.lookingForAJobDescription):o.a.createElement(d.a,{animation:"wave",height:10,width:150}))),W=a(1),V=a(2),D=(a(47),a(4),a(3)),H=a(6),Q=a(8),Y=a(5),$=a(261);$.a.styles;var G=r.forwardRef((function(e,t){var a=e.children,n=e.classes,o=e.className,l=e.color,i=void 0===l?"default":l,c=e.component,s=void 0===c?"div":c,d=e.disabled,m=void 0!==d&&d,u=e.disableElevation,p=void 0!==u&&u,g=e.disableFocusRipple,b=void 0!==g&&g,f=e.disableRipple,E=void 0!==f&&f,h=e.fullWidth,v=void 0!==h&&h,y=e.orientation,O=void 0===y?"horizontal":y,w=e.size,j=void 0===w?"medium":w,F=e.variant,k=void 0===F?"outlined":F,C=Object(V.a)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","disableRipple","fullWidth","orientation","size","variant"]),S=Object(D.a)(n.grouped,n["grouped".concat(Object(H.a)(O))],n["grouped".concat(Object(H.a)(k))],n["grouped".concat(Object(H.a)(k)).concat(Object(H.a)(O))],n["grouped".concat(Object(H.a)(k)).concat("default"!==i?Object(H.a)(i):"")],m&&n.disabled);return r.createElement(s,Object(W.a)({role:"group",className:Object(D.a)(n.root,o,v&&n.fullWidth,p&&n.disableElevation,"contained"===k&&n.contained,"vertical"===O&&n.vertical),ref:t},C),r.Children.map(a,(function(e){return r.isValidElement(e)?r.cloneElement(e,{className:Object(D.a)(S,e.props.className),color:e.props.color||i,disabled:e.props.disabled||m,disableElevation:e.props.disableElevation||p,disableFocusRipple:b,disableRipple:E,fullWidth:v,size:e.props.size||j,variant:e.props.variant||k}):null})))})),q=Object(Y.a)((function(e){return{root:{display:"inline-flex",borderRadius:e.shape.borderRadius},contained:{boxShadow:e.shadows[2]},disableElevation:{boxShadow:"none"},disabled:{},fullWidth:{width:"100%"},vertical:{flexDirection:"column"},grouped:{minWidth:40},groupedHorizontal:{"&:not(:first-child)":{borderTopLeftRadius:0,borderBottomLeftRadius:0},"&:not(:last-child)":{borderTopRightRadius:0,borderBottomRightRadius:0}},groupedVertical:{"&:not(:first-child)":{borderTopRightRadius:0,borderTopLeftRadius:0},"&:not(:last-child)":{borderBottomRightRadius:0,borderBottomLeftRadius:0}},groupedText:{},groupedTextHorizontal:{"&:not(:last-child)":{borderRight:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")}},groupedTextVertical:{"&:not(:last-child)":{borderBottom:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")}},groupedTextPrimary:{"&:not(:last-child)":{borderColor:Object(Q.c)(e.palette.primary.main,.5)}},groupedTextSecondary:{"&:not(:last-child)":{borderColor:Object(Q.c)(e.palette.secondary.main,.5)}},groupedOutlined:{},groupedOutlinedHorizontal:{"&:not(:first-child)":{marginLeft:-1},"&:not(:last-child)":{borderRightColor:"transparent"}},groupedOutlinedVertical:{"&:not(:first-child)":{marginTop:-1},"&:not(:last-child)":{borderBottomColor:"transparent"}},groupedOutlinedPrimary:{"&:hover":{borderColor:e.palette.primary.main}},groupedOutlinedSecondary:{"&:hover":{borderColor:e.palette.secondary.main}},groupedContained:{boxShadow:"none"},groupedContainedHorizontal:{"&:not(:last-child)":{borderRight:"1px solid ".concat(e.palette.grey[400]),"&$disabled":{borderRight:"1px solid ".concat(e.palette.action.disabled)}}},groupedContainedVertical:{"&:not(:last-child)":{borderBottom:"1px solid ".concat(e.palette.grey[400]),"&$disabled":{borderBottom:"1px solid ".concat(e.palette.action.disabled)}}},groupedContainedPrimary:{"&:not(:last-child)":{borderColor:e.palette.primary.dark}},groupedContainedSecondary:{"&:not(:last-child)":{borderColor:e.palette.secondary.dark}}}}),{name:"MuiButtonGroup"})(G),K=a(31);var X=({followingCount:e})=>o.a.createElement(m.a,{display:"flex",alignItems:"center",justifyContent:"center",mt:3},o.a.createElement(q,{variant:"text",color:"primary","aria-label":"text primary button group"},o.a.createElement($.a,{size:"small",component:K.c,to:"/socials/following"},o.a.createElement(m.a,null,o.a.createElement(m.a,{fontSize:"h4.fontSize",display:"block"},e),o.a.createElement(m.a,{fontSize:"body2.fontSize",display:"block"},"following"))),o.a.createElement($.a,{size:"small"},o.a.createElement(m.a,null,o.a.createElement(m.a,{fontSize:"h4.fontSize",display:"block"},"847"),o.a.createElement(m.a,{fontSize:"body2.fontSize",display:"block"},"followers"))))),Z=a(182),ee=a.n(Z),te=a(262),ae=a(552);const ne=Object(i.a)(e=>({container:{background:"#333",minHeight:200,padding:e.spacing(3),[e.breakpoints.down("md")]:{justifyContent:"center"}},large:{width:e.spacing(15),height:e.spacing(15),cursor:"pointer"},menuBlock:{marginTop:e.spacing(5)},links:{padding:e.spacing(3),textDecoration:"none",color:"white","&:hover":{color:e.palette.primary}}}));var re=({profile_info:e,userId:t,getFollowLoading:a,isCurrentUserFollowed:n})=>{const i=ne();return o.a.createElement(r.Fragment,null,e&&t===e.userId?o.a.createElement(l.a,{className:i.menuBlock,container:!0,justify:"space-between",alignItems:"center"},o.a.createElement(l.a,{item:!0},o.a.createElement(K.b,{to:"#",className:i.links},"About !"),o.a.createElement(K.b,{to:"#",className:i.links},"Friends !"),o.a.createElement(K.b,{to:"#",className:i.links},"Saved Jobs !")),o.a.createElement(l.a,{item:!0},o.a.createElement($.a,{startIcon:o.a.createElement(ee.a,null),component:K.c,to:"/settings/profile"},"Settings"))):o.a.createElement(l.a,{className:i.menuBlock,container:!0,justify:"flex-end",alignItems:"center"},o.a.createElement(l.a,{item:!0},a?o.a.createElement(te.a,null):o.a.createElement(ae.a,{id:e?e.userId:0,followed:n}))))};const oe=Object(i.a)(e=>({container:{background:"#333",minHeight:200,padding:e.spacing(3),[e.breakpoints.down("md")]:{justifyContent:"center"}},large:{width:e.spacing(15),height:e.spacing(15),cursor:"pointer"},menuBlock:{marginTop:e.spacing(5)},links:{padding:e.spacing(3),textDecoration:"none",color:"white","&:hover":{color:e.palette.primary}}}));var le=({profile_info:e,userId:t,getCurrentUserFollow:a,isCurrentUserFollowed:n,followingCount:i})=>{const c=oe(),s=Object(r.useState)(!1),d=Object(u.a)(s,2),m=d[0],p=d[1];return Object(r.useEffect)(()=>{e?(p(!0),a(e.userId),setTimeout(()=>p(!1),1e3)):p(!0)},[e]),o.a.createElement(r.Fragment,null,o.a.createElement(l.a,{container:!0,className:c.container,direction:"row",alignItems:"center",justify:"space-between"},o.a.createElement(l.a,{item:!0,xs:12,sm:12,md:6},o.a.createElement(_,{profile_info:e})),o.a.createElement(l.a,{item:!0,xs:12,sm:12,md:5},o.a.createElement(X,{followingCount:i})),o.a.createElement(re,{getFollowLoading:m,isCurrentUserFollowed:n,profile_info:e,userId:t})))},ie=a(168);var ce=Object(n.b)(e=>({profile_info:e.profile.user,userId:e.app.user,isCurrentUserFollowed:e.people.isCurrentUserFollowed,people:e.people.people,followingCount:e.profile.followingCount}),{getCurrentUserFollow:ie.c})(le),se=a(124),de=a(512),me=a(435),ue=a(509),pe=a(514),ge=a(553),be=a.n(ge),fe=a(554),Ee=a.n(fe),he=a(216);var ve=Object(j.a)({form:"aboutCardForm"})(({handleSubmit:e,lookingJob:t,isFetching:a})=>o.a.createElement("form",{onSubmit:e},o.a.createElement(he.a,{lookingJob:t}),o.a.createElement(m.a,{mt:3},Object(F.a)(a,"Save","contained","primary"))));const ye=Object(i.a)(e=>({paper:{padding:e.spacing(3)}}));var Oe=Object(w.d)(O)(({updateProfile:e,user:t,editButton:a,isEdit:n,closeEditMode:r,isFetching:i,error:s})=>{const d=ye();if(!t)return o.a.createElement(A.a,null);return o.a.createElement(c.a,{className:d.paper},o.a.createElement(x,{editButton:a,headline:"About"}),n?o.a.createElement(ve,{initialValues:t,lookingJob:t.lookingForAJob,isFetching:i,onSubmit:t=>{e(t,"aboutCardForm").then(()=>{r()})}}):o.a.createElement(l.a,{container:!0},o.a.createElement(l.a,{item:!0,xs:12,sm:12,md:6},o.a.createElement(de.a,{component:"nav"},o.a.createElement(me.a,null,o.a.createElement(pe.a,null,t.lookingForAJob?o.a.createElement(be.a,{color:"primary"}):o.a.createElement(Ee.a,null)),o.a.createElement(ue.a,{secondary:"Looking job?",primary:t.lookingForAJobDescription}))))),s&&!i&&o.a.createElement(z.a,{error:s,successAlert:"Your information about you update successfully!"}))});var we=Object(n.b)(e=>({user:e.profile.user,myIdUser:e.app.user,isFetching:e.profile.isFetching,error:e.profile.error}),{updateProfile:v.d})(Oe),je=a(214);var Fe=Object(j.a)({form:"contacts",enableReinitialize:!0})(({handleSubmit:e,userInfo:t,isFetching:a})=>t?o.a.createElement("form",{onSubmit:e},o.a.createElement(je.a,{userInfo:t}),o.a.createElement(m.a,{mt:3},Object(F.a)(a,"Save","contained","primary"))):o.a.createElement(A.a,null)),ke=a(213),Ce=a(59);const Se=Object(i.a)(e=>({contact:{padding:e.spacing(3),[e.breakpoints.down("md")]:{marginTop:e.spacing(2)}}}));var xe=Object(w.d)(O)(({user:e,editButton:t,isEdit:a,closeEditMode:n,updateProfile:r,error:l,isFetching:i})=>{const d=Se();let m=[];if(!e)return o.a.createElement(A.a,null);for(var p=0,g=Object.entries(e.contacts);p<g.length;p++){let e=Object(u.a)(g[p],2),t=e[0],a=e[1];a&&(m=[...m,o.a.createElement(me.a,{key:a+"-edit-form"},o.a.createElement(pe.a,null,Object(ke.a)(t)),o.a.createElement(ue.a,null,o.a.createElement(s.a,{noWrap:!0,variant:"body2"},a)))])}return o.a.createElement(c.a,{className:d.contact},o.a.createElement(x,{editButton:t,headline:"Contacts"}),a?o.a.createElement(Fe,{isFetching:i,initialValues:e,userInfo:e,onSubmit:e=>{r(e,"contacts").then(()=>{n()}).catch(e=>{Object(Ce.a)("contacts",e)})}}):o.a.createElement(de.a,{component:"nav"},m),l&&!i&&o.a.createElement(z.a,{error:l,successAlert:"Your information about you update successfully!"}))});var ze=Object(n.b)(e=>({user:e.profile.user,isFetching:e.profile.isFetching,error:e.profile.error}),{updateProfile:v.d})(xe);const Re=Object(i.a)(e=>({paper:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3),marginTop:-e.spacing(2)},secondPaperBlock:{marginTop:-e.spacing(2),paddingLeft:e.spacing(3),paddingRight:e.spacing(3)},block:{marginRight:e.spacing(2)}}));var Ie=Object(w.d)(se.a)(({user:e,isFetching:t,match:a,getUserByIdThunk:n})=>{const i=Re();let c=a.params.id;return Object(r.useEffect)(()=>{n(c)},[c]),!e||t?o.a.createElement(A.a,null):o.a.createElement(r.Fragment,null,o.a.createElement(ce,null),o.a.createElement(l.a,{container:!0,justify:"space-between",alignItems:"flex-start",className:i.paper},o.a.createElement(l.a,{container:!0,item:!0,xs:12,sm:12,md:7,spacing:1},o.a.createElement(l.a,{item:!0,xs:12,sm:12,md:12},o.a.createElement(we,{lookingForAJob:e.lookingForAJob,jobDescription:e.lookingForAJobDescription})),o.a.createElement(l.a,{item:!0,xs:12,sm:12,md:12},o.a.createElement(B,{description:e.aboutMe,fullname:e.fullName}))),o.a.createElement(l.a,{container:!0,item:!0,xs:12,sm:12,md:5,spacing:1},o.a.createElement(l.a,{item:!0,xs:12,sm:12,md:12},o.a.createElement(ze,null)),o.a.createElement(l.a,{item:!0,xs:12,sm:12,md:12},o.a.createElement(J,null)))))});t.default=Object(n.b)(e=>({user:e.profile.user,isFetching:e.profile.isFetching}),{getUserByIdThunk:v.b})(Ie)}}]);
//# sourceMappingURL=3.9bbfb74e.chunk.js.map