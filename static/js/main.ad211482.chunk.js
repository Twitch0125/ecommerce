(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{211:function(e,t,a){e.exports=a(350)},216:function(e,t,a){},217:function(e,t,a){},350:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(30),o=a.n(c),l=(a(216),a(18)),i=a(19),s=a(21),u=a(20),m=a(22),p=(a(217),a(137)),d=a(123),h={products:[],categories:[],selectedCategory:"",cart:[]};var E=Object(d.a)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){default:return e;case"ADD_PRODUCTS":return Object.assign({},e,{products:t.products});case"ADD_CATEGORIES":return Object.assign({},e,{categories:t.categories});case"ADD_TO_CART":return Object.assign({},e,{cart:[].concat(Object(p.a)(e.cart),[t.product])});case"REMOVE_FROM_CART":var a=e.cart.filter(function(e){return e.cartId!==t.cartId});return console.log("removed item from cart. newCart: ",a),Object.assign({},e,{cart:a});case"SET_SELECTED_CATEGORY":return Object.assign({},e,{selectedCategory:t.category})}}),f=a(5),g=(a(88),a(10)),b=a(40),y=a(62),v=a.n(y),O=a(39),j=a.n(O),k=a(48),C=a.n(k),w=a(51),T=a.n(w),S=a(50),x=a.n(S),A=a(64),N=a.n(A),D=a(49),I=a.n(D),R=a(32),_=a.n(R),L=a(23),P=a.n(L),M=a(33),U=a.n(M),B=a(135),F=a.n(B),W=a(63),G=a.n(W),z=a(38),H=a.n(z),Y=a(133),$=a.n(Y),q=a(125),J=a.n(q),K=a(126),V=a.n(K),Q=a(129),X=a.n(Q),Z=a(130),ee=a.n(Z),te=a(127),ae=a.n(te),ne=a(128),re=a.n(ne),ce=a(131),oe=a.n(ce),le=a(24),ie=a(31),se=a.n(ie),ue=a(134),me=a.n(ue),pe=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={mobileOpen:!1},a.handleDrawerToggle=function(){a.setState(function(e){return{mobileOpen:!e.mobileOpen}})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.subscribe(function(){return e.forceUpdate()})}},{key:"renderCategoriesIcons",value:function(e){switch(e){case"phone":return r.a.createElement(P.a,null,r.a.createElement(J.a,null));case"tv":return r.a.createElement(P.a,null,r.a.createElement(V.a,null));case"small-appliance":return r.a.createElement(P.a,null,r.a.createElement(ae.a,null));case"refrigerator":return r.a.createElement(P.a,null,r.a.createElement(re.a,null));case"watch":return r.a.createElement(P.a,null,r.a.createElement(X.a,null));case"action-camera":return r.a.createElement(P.a,null,r.a.createElement(ee.a,null));default:return""}}},{key:"handleClick",value:function(e){E.dispatch({type:"SET_SELECTED_CATEGORY",category:e})}},{key:"renderCategories",value:function(){var e=this;return E.getState().categories.map(function(t,a){return r.a.createElement(_.a,{onClick:function(){return e.handleClick(t)},button:!0,key:t},e.renderCategoriesIcons(t),r.a.createElement(U.a,{primary:t}))})}},{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.theme,c=r.a.createElement("div",null,r.a.createElement("div",{className:a.toolbar}),r.a.createElement(C.a,null),r.a.createElement(I.a,{className:a.categories},this.renderCategories(),r.a.createElement(_.a,{onClick:function(){return e.handleClick("")},button:!0,key:""},r.a.createElement(P.a,null,r.a.createElement(oe.a,null)),r.a.createElement(U.a,null,"Show All Items"))),r.a.createElement(C.a,null),r.a.createElement(I.a,null,r.a.createElement(le.b,{className:a.myLink,to:"/cart"},r.a.createElement(_.a,{button:!0},r.a.createElement(P.a,null,r.a.createElement($.a,null)),r.a.createElement(U.a,null,"Your Cart"))),r.a.createElement(le.b,{className:a.myLink,to:"/"},r.a.createElement(_.a,{button:!0},r.a.createElement(P.a,null,r.a.createElement(me.a,null)),r.a.createElement(U.a,null,"Home")))));return r.a.createElement(se.a,{elevation:4,className:a.root},r.a.createElement(j.a,null),r.a.createElement(v.a,{position:"fixed",className:a.appBar,color:"primary"},r.a.createElement(G.a,null,r.a.createElement(N.a,{color:"inherit","aria-label":"Open drawer",onClick:this.handleDrawerToggle,className:a.menuButton},r.a.createElement(F.a,null)),r.a.createElement(H.a,{variant:"h3",color:"inherit",noWrap:!0},r.a.createElement(le.b,{className:a.myLink,to:"/"},"Kaleb Co.")))),r.a.createElement("nav",{className:a.drawer},r.a.createElement(x.a,{smUp:!0,implementation:"css"},r.a.createElement(T.a,{container:this.props.container,variant:"temporary",anchor:"rtl"===n.direction?"right":"left",open:this.state.mobileOpen,onClose:this.handleDrawerToggle,classes:{paper:a.drawerPaper}},c)),r.a.createElement(x.a,{xsDown:!0,implementation:"css"},r.a.createElement(T.a,{classes:{paper:a.drawerPaper},variant:"permanent",open:!0},c))),r.a.createElement("main",{className:a.content},r.a.createElement("div",{className:a.toolbar})))}}]),t}(r.a.Component),de=Object(g.withStyles)(function(e){return{root:{display:"flex"},drawer:Object(b.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0,backgroundColor:e.palette.primary.main}),appBar:Object(b.a)({marginLeft:240},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(240,"px)")}),menuButton:Object(b.a)({marginRight:20},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:240},content:{flexGrow:1,padding:.5*e.spacing.unit},myLink:{textDecoration:"none",color:"inherit"},categories:{textTransform:"Capitalize"}}},{withTheme:!0})(pe),he=a(136),Ee=a(335),fe=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"renderRating",value:function(e){var t=[];return function(){for(var a=0;a<Math.floor(e);a++)t.push({type:"FULL_STAR"});e%1>=.5?t.push({type:"HALF_STAR"}):r.a.createElement("span",null)}(),t.map(function(e){switch(e.type){case"HALF_STAR":return r.a.createElement(f.i,{color:"primary"},"star_half");case"FULL_STAR":return r.a.createElement(f.i,{color:"primary"},"star");default:return r.a.createElement("span",null)}})}},{key:"addToCart",value:function(e){console.log("adding to cart",e);var t=Ee();E.dispatch({type:"ADD_TO_CART",product:Object(he.a)({},e,{cartId:t})}),console.log("cart now contains:",E.getState().cart)}},{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement(f.h,{sm:10,md:4,lg:3,item:!0},r.a.createElement(f.c,{className:t.card,raised:!0},r.a.createElement(f.f,{className:t.cardHead,title:this.props.product.title}),r.a.createElement(f.g,{className:t.image,image:this.props.product.img,alt:this.props.product.title}),r.a.createElement("div",{className:t.price},r.a.createElement(f.f,{titleTypographyProps:{color:"default"},title:"$".concat(this.props.product.price)}),r.a.createElement("span",{className:t.rating},r.a.createElement(f.f,{title:"".concat(this.props.product.rating)}),this.renderRating(this.props.product.rating))),r.a.createElement(f.e,null,r.a.createElement(f.r,{className:t.description,noWrap:!0},this.props.product.description)),r.a.createElement(f.d,{className:t.buttons},r.a.createElement(f.b,{color:"primary",onClick:function(){return e.addToCart(e.props.product)},variant:"outlined"},"Add To Cart"),r.a.createElement(le.b,{to:"/products/".concat(this.props.product.id),className:t.myLink},r.a.createElement(f.b,{color:"primary",variant:"outlined"},"More Info")))))}}]),t}(r.a.Component),ge=Object(g.withStyles)(function(){return{root:{marginLeft:"".concat(248,"px")},image:{height:"30vh",backgroundSize:"contain",backgroundRepeat:"no-repeat"},"@media screen and (max-width: 600px)":{root:{marginLeft:"0px"},description:{whiteSpace:"normal"}},buttons:{justifyContent:"space-evenly"},myLink:{textDecoration:"none",color:"inherit"},price:{display:"flex",justifyContent:"space-evenly"},card:{},rating:{display:"flex",alignItems:"center"}}})(fe),be=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"renderCard",value:function(e){return r.a.createElement(ge,{product:e})}},{key:"renderProducts",value:function(e){var t=this;return console.log(E),""!==e?E.getState().products.filter(function(t){return t.category===e}).map(function(e){return t.renderCard(e)}):""===e?E.getState().products.map(function(e){return t.renderCard(e)}):void 0}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(f.q,{elevation:0,className:e.root},r.a.createElement(f.h,{spacing:40,container:!0,justify:"space-evenly"},this.renderProducts(E.getState().selectedCategory)))}}]),t}(r.a.Component),ye=Object(g.withStyles)(function(e){return{root:{marginLeft:"".concat(248,"px")},image:{height:"30vh",backgroundSize:"contain",backgroundRepeat:"no-repeat"},"@media screen and (max-width: 600px)":{root:{marginLeft:"0px"},description:{whiteSpace:"normal"}},buttons:{justifyContent:"space-evenly"},myLink:{textDecoration:"none",color:"inherit"},price:{display:"flex",justifyContent:"space-evenly"},card:{},rating:{display:"flex",alignItems:"center"}}},{withTheme:!0})(be),ve=a(34),Oe=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).productId=a.props.match.params.productId,a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"getProductInfo",value:function(){var e=this;return console.log(E.getState().products,"productdetails store"),E.getState().products.find(function(t){return t.id==e.productId})}},{key:"render",value:function(){var e=this.props.classes,t=this.getProductInfo();return r.a.createElement("div",{className:e.root},r.a.createElement(f.c,{className:e.card,raised:!1},r.a.createElement(f.f,{title:t.title}),r.a.createElement(f.g,{className:e.image,image:t.img,alt:t.title}),r.a.createElement(f.f,{title:"$".concat(t.price)}),r.a.createElement(f.e,null,r.a.createElement(f.r,{component:"p"},this.getProductInfo().description)),r.a.createElement(f.d,null,r.a.createElement(le.b,{className:e.link,to:"/"},r.a.createElement(f.b,{variant:"flat"},"BACK")),r.a.createElement(f.b,{variant:"flat"},"Add To Cart"))))}}]),t}(r.a.Component),je=Object(g.withStyles)(function(){return{root:{marginLeft:"".concat(240,"px !important")},link:{color:"inherit",textDecoration:"none"},card:{maxWidth:"50%"},image:{height:"50vh",backgroundSize:"contain"}}},{withTheme:!0})(Oe),ke=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){console.log("cart mounted, this is in the cart:",E.getState().cart)}},{key:"handleClick",value:function(e){var t=this;E.subscribe(function(){return t.forceUpdate()}),E.dispatch({type:"REMOVE_FROM_CART",cartId:e})}},{key:"renderProducts",value:function(){var e=this;return E.getState().cart.map(function(t){return r.a.createElement(f.l,{key:t.cartId},r.a.createElement(f.m,null,r.a.createElement(f.a,{alt:t.title,src:t.img})),r.a.createElement(f.o,null,t.title),r.a.createElement(f.p,{component:"div"},"$".concat(t.price)),r.a.createElement(f.n,null,r.a.createElement(f.j,{onClick:function(){return e.handleClick(t.cartId)},color:"primary"},r.a.createElement(f.i,null,"delete_outline"))))})}},{key:"render",value:function(){var e=this.props.classes;return 0===E.getState().cart.length?r.a.createElement(f.r,{className:e.root,variant:"h2"},"Your Cart Is Empty"):r.a.createElement(f.q,{elevation:2,className:e.root},r.a.createElement(f.k,null,this.renderProducts()))}}]),t}(r.a.Component),Ce=Object(g.withStyles)(function(e){return{root:{margin:"0 auto",width:"50vw",display:"flex",justifyContent:"center",alignItems:"center"}}},{withTheme:!0})(ke),we=Object(g.createMuiTheme)({palette:{primary:{main:"#ab4967",contrastText:"#dcd4e1"},secondary:{main:"#0c1713",contrastText:"#ab4967"}}}),Te=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.subscribe(function(){return e.forceUpdate()}),fetch("https://my-json-server.typicode.com/tdmichaelis/json-api/products").then(function(e){return e.json()}).then(function(e){E.dispatch({type:"ADD_PRODUCTS",products:e})}),fetch("https://my-json-server.typicode.com/tdmichaelis/json-api/categories").then(function(e){return e.json()}).then(function(e){E.dispatch({type:"ADD_CATEGORIES",categories:e})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(g.MuiThemeProvider,{theme:we},r.a.createElement(j.a,null),r.a.createElement(de,null),r.a.createElement(ve.d,null,r.a.createElement(ve.b,{exact:!0,path:"/ecommerce",component:ye}),r.a.createElement(ve.b,{exact:!0,path:"/products/:productId",component:je}),r.a.createElement(ve.b,{exact:!0,path:"/cart",component:Ce}),r.a.createElement(ve.a,{to:"/ecommerce"}))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(le.a,null,r.a.createElement(Te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},88:function(e,t,a){}},[[211,1,2]]]);
//# sourceMappingURL=main.ad211482.chunk.js.map