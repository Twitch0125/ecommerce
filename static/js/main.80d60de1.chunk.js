(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{210:function(e,t,a){e.exports=a(350)},215:function(e,t,a){},216:function(e,t,a){},218:function(e,t,a){},350:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(30),l=a.n(c),o=(a(215),a(25)),i=a(26),s=a(28),u=a(27),m=a(29),p=(a(216),a(122)),d=a(136),h=a(123),E={products:[],categories:[],selectedCategory:"",cart:[]};var f=Object(h.a)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){default:return e;case"ADD_PRODUCTS":return Object.assign({},e,{products:t.products});case"ADD_CATEGORIES":return Object.assign({},e,{categories:t.categories});case"ADD_TO_CART":return Object.assign({},e,{cart:[].concat(Object(d.a)(e.cart),[t.product])});case"REMOVE_FROM_CART":var a=e.cart.filter(function(e){return e.cartId!==t.cartId});return console.log("removed item from cart. newCart: ",a),Object.assign({},e,{cart:a});case"SET_SELECTED_CATEGORY":return Object.assign({},e,{selectedCategory:t.category})}}),g=a(5),b=(a(218),a(19)),y=a(10),v=a(40),O=a(62),j=a.n(O),k=a(39),C=a.n(k),w=a(48),T=a.n(w),S=a(51),A=a.n(S),N=a(50),x=a.n(N),D=a(64),I=a.n(D),R=a(49),_=a.n(R),L=a(32),P=a.n(L),M=a(18),U=a.n(M),B=a(33),F=a.n(B),W=a(135),G=a.n(W),H=a(63),Y=a.n(H),$=a(38),z=a.n($),q=a(133),J=a.n(q),K=a(125),V=a.n(K),Q=a(126),X=a.n(Q),Z=a(129),ee=a.n(Z),te=a(130),ae=a.n(te),ne=a(127),re=a.n(ne),ce=a(128),le=a.n(ce),oe=a(131),ie=a.n(oe),se=a(31),ue=a.n(se),me=a(134),pe=a.n(me),de=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={mobileOpen:!1},a.handleDrawerToggle=function(){a.setState(function(e){return{mobileOpen:!e.mobileOpen}})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.subscribe(function(){return e.forceUpdate()})}},{key:"renderCategoriesIcons",value:function(e){switch(e){case"phone":return r.a.createElement(U.a,null,r.a.createElement(V.a,null));case"tv":return r.a.createElement(U.a,null,r.a.createElement(X.a,null));case"small-appliance":return r.a.createElement(U.a,null,r.a.createElement(re.a,null));case"refrigerator":return r.a.createElement(U.a,null,r.a.createElement(le.a,null));case"watch":return r.a.createElement(U.a,null,r.a.createElement(ee.a,null));case"action-camera":return r.a.createElement(U.a,null,r.a.createElement(ae.a,null));default:return""}}},{key:"handleClick",value:function(e){f.dispatch({type:"SET_SELECTED_CATEGORY",category:e})}},{key:"renderCategories",value:function(){var e=this;return f.getState().categories.map(function(t,a){return r.a.createElement(P.a,{onClick:function(){return e.handleClick(t)},button:!0,key:t},e.renderCategoriesIcons(t),r.a.createElement(F.a,{primary:t}))})}},{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.theme,c=r.a.createElement("div",null,r.a.createElement("div",{className:a.toolbar}),r.a.createElement(T.a,null),r.a.createElement(_.a,{className:a.categories},this.renderCategories(),r.a.createElement(P.a,{onClick:function(){return e.handleClick("")},button:!0,key:""},r.a.createElement(U.a,null,r.a.createElement(ie.a,null)),r.a.createElement(F.a,null,"Show All Items"))),r.a.createElement(T.a,null),r.a.createElement(_.a,null,r.a.createElement(b.b,{className:a.myLink,to:"/cart"},r.a.createElement(P.a,{button:!0},r.a.createElement(U.a,null,r.a.createElement(J.a,null)),r.a.createElement(F.a,null,"Your Cart"))),r.a.createElement(b.b,{className:a.myLink,to:"/"},r.a.createElement(P.a,{button:!0},r.a.createElement(U.a,null,r.a.createElement(pe.a,null)),r.a.createElement(F.a,null,"Home")))));return r.a.createElement(ue.a,{elevation:4,className:a.root},r.a.createElement(C.a,null),r.a.createElement(j.a,{position:"fixed",className:a.appBar,color:"primary"},r.a.createElement(Y.a,null,r.a.createElement(I.a,{color:"inherit","aria-label":"Open drawer",onClick:this.handleDrawerToggle,className:a.menuButton},r.a.createElement(G.a,null)),r.a.createElement(z.a,{variant:"h3",color:"inherit",noWrap:!0},r.a.createElement(b.b,{className:a.myLink,to:"/"},"Kaleb Co.")))),r.a.createElement("nav",{className:a.drawer},r.a.createElement(x.a,{smUp:!0,implementation:"css"},r.a.createElement(A.a,{container:this.props.container,variant:"temporary",anchor:"rtl"===n.direction?"right":"left",open:this.state.mobileOpen,onClose:this.handleDrawerToggle,classes:{paper:a.drawerPaper}},c)),r.a.createElement(x.a,{xsDown:!0,implementation:"css"},r.a.createElement(A.a,{classes:{paper:a.drawerPaper},variant:"permanent",open:!0},c))),r.a.createElement("main",{className:a.content},r.a.createElement("div",{className:a.toolbar})))}}]),t}(r.a.Component),he=Object(y.withStyles)(function(e){return{root:{display:"flex"},drawer:Object(v.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0,backgroundColor:e.palette.primary.main}),appBar:Object(v.a)({marginLeft:240},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(240,"px)")}),menuButton:Object(v.a)({marginRight:20},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:240},content:{flexGrow:1,padding:.5*e.spacing.unit},myLink:{textDecoration:"none",color:"inherit"},categories:{textTransform:"Capitalize"}}},{withTheme:!0})(de),Ee=a(335),fe=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"addToCart",value:function(e){console.log("adding to cart",e);var t=Ee();f.dispatch({type:"ADD_TO_CART",product:Object(p.a)({},e,{cartId:t})}),console.log("cart now contains:",f.getState().cart)}},{key:"renderRating",value:function(e){var t=[];return function(){for(var a=0;a<Math.floor(e);a++)t.push({type:"FULL_STAR"});e%1>=.5?t.push({type:"HALF_STAR"}):r.a.createElement("span",null)}(),t.map(function(e){switch(e.type){case"HALF_STAR":return r.a.createElement(g.i,{color:"primary"},"star_half");case"FULL_STAR":return r.a.createElement(g.i,{color:"primary"},"star");default:return r.a.createElement("span",null)}})}},{key:"renderCard",value:function(e){var t=this,a=this.props,n=a.classes;a.theme;return r.a.createElement(g.h,{sm:10,md:4,lg:3,item:!0},r.a.createElement(g.c,{className:n.card,raised:!0},r.a.createElement(g.f,{className:n.cardHead,title:e.title}),r.a.createElement(g.g,{className:n.image,image:e.img,alt:e.title}),r.a.createElement("div",{className:n.price},r.a.createElement(g.f,{titleTypographyProps:{color:"priamry"},title:"$".concat(e.price)}),r.a.createElement("span",{className:n.rating},r.a.createElement(g.f,{title:"".concat(e.rating)}),this.renderRating(e.rating))),r.a.createElement(g.e,null,r.a.createElement(g.r,{className:n.description,noWrap:!0},e.description)),r.a.createElement(g.d,{className:n.buttons},r.a.createElement(g.b,{color:"primary",onClick:function(){return t.addToCart(e)},variant:"outlined"},"Add To Cart"),r.a.createElement(b.b,{to:"/products/".concat(e.id),className:n.myLink},r.a.createElement(g.b,{color:"primary",variant:"outlined"},"More Info")))))}},{key:"renderProducts",value:function(e){var t=this,a=this.props;a.classes,a.theme;return console.log(f),""!=e?f.getState().products.filter(function(t){return t.category==e}).map(function(e){return t.renderCard(e)}):""==e?f.getState().products.map(function(e){return t.renderCard(e)}):void 0}},{key:"render",value:function(){var e=this.props,t=e.classes;e.theme;return r.a.createElement(g.q,{elevation:2,className:t.root},r.a.createElement(g.h,{spacing:40,container:!0,justify:"space-evenly"},this.renderProducts(f.getState().selectedCategory)))}}]),t}(r.a.Component),ge=Object(y.withStyles)(function(e){return{root:{marginLeft:"".concat(248,"px")},image:{height:"30vh",backgroundSize:"contain",backgroundRepeat:"no-repeat"},"@media screen and (max-width: 600px)":{root:{marginLeft:"0px"},description:{whiteSpace:"normal"}},buttons:{justifyContent:"space-evenly"},myLink:{textDecoration:"none",color:"inherit"},price:{display:"flex",justifyContent:"space-evenly"},card:{},rating:{display:"flex",alignItems:"center"}}},{withTheme:!0})(fe),be=a(34),ye=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).productId=a.props.match.params.productId,a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"getProductInfo",value:function(){var e=this;return console.log(f.getState().products,"productdetails store"),f.getState().products.find(function(t){return t.id==e.productId})}},{key:"render",value:function(){var e=this.props,t=e.classes,a=(e.theme,this.getProductInfo());return r.a.createElement("div",{className:t.root},r.a.createElement(g.c,{className:t.card,raised:!1},r.a.createElement(g.f,{title:a.title}),r.a.createElement(g.g,{className:t.image,image:a.img,alt:a.title}),r.a.createElement(g.f,{title:"$".concat(a.price)}),r.a.createElement(g.e,null,r.a.createElement(g.r,{component:"p"},this.getProductInfo().description)),r.a.createElement(g.d,null,r.a.createElement(b.b,{className:t.link,to:"/"},r.a.createElement(g.b,{variant:"flat"},"BACK")),r.a.createElement(g.b,{variant:"flat"},"Add To Cart"))))}}]),t}(r.a.Component),ve=Object(y.withStyles)(function(e){return{root:{marginLeft:"".concat(240,"px !important")},link:{color:"inherit",textDecoration:"none"},card:{maxWidth:"50%"},image:{height:"50vh",backgroundSize:"contain"}}},{withTheme:!0})(ye),Oe=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){console.log("cart mounted, this is in the cart:",f.getState().cart)}},{key:"handleClick",value:function(e){var t=this;f.subscribe(function(){return t.forceUpdate()}),f.dispatch({type:"REMOVE_FROM_CART",cartId:e})}},{key:"renderProducts",value:function(){var e=this,t=this.props;t.classes,t.theme;return f.getState().cart.map(function(t){return r.a.createElement(g.l,{key:t.cartId},r.a.createElement(g.m,null,r.a.createElement(g.a,{alt:t.title,src:t.img})),r.a.createElement(g.o,null,t.title),r.a.createElement(g.p,{component:"div"},"$".concat(t.price)),r.a.createElement(g.n,null,r.a.createElement(g.j,{onClick:function(){return e.handleClick(t.cartId)},color:"primary"},r.a.createElement(g.i,null,"delete_outline"))))})}},{key:"render",value:function(){var e=this.props,t=e.classes;e.theme;return 0===f.getState().cart.length?r.a.createElement(g.r,{className:t.root,variant:"h2"},"Your Cart Is Empty"):r.a.createElement(g.q,{elevation:2,className:t.root},r.a.createElement(g.k,null,this.renderProducts()))}}]),t}(r.a.Component),je=Object(y.withStyles)(function(e){return{root:{margin:"0 auto",width:"50vw",display:"flex",justifyContent:"center",alignItems:"center"}}},{withTheme:!0})(Oe),ke=Object(y.createMuiTheme)({palette:{primary:{main:"#ab4967",contrastText:"#dcd4e1"},secondary:{main:"#0c1713",contrastText:"#ab4967"}}}),Ce=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.subscribe(function(){return e.forceUpdate()}),fetch("https://my-json-server.typicode.com/tdmichaelis/json-api/products").then(function(e){return e.json()}).then(function(e){f.dispatch({type:"ADD_PRODUCTS",products:e})}),fetch("https://my-json-server.typicode.com/tdmichaelis/json-api/categories").then(function(e){return e.json()}).then(function(e){f.dispatch({type:"ADD_CATEGORIES",categories:e})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(y.MuiThemeProvider,{theme:ke},r.a.createElement(C.a,null),r.a.createElement(he,null),r.a.createElement(be.d,null,r.a.createElement(be.b,{exact:!0,path:"/",component:ge}),r.a.createElement(be.b,{exact:!0,path:"/products/:productId",component:ve}),r.a.createElement(be.b,{exact:!0,path:"/cart",component:je}),r.a.createElement(be.a,{to:"/"}))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(b.a,null,r.a.createElement(Ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[210,1,2]]]);
//# sourceMappingURL=main.80d60de1.chunk.js.map