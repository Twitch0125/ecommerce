(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{5421:function(e,t,a){e.exports=a(5561)},5426:function(e,t,a){},5427:function(e,t,a){},5561:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(30),o=a.n(c),l=(a(5426),a(18)),i=a(19),s=a(21),u=a(20),m=a(22),p=(a(5427),a(79),a(2)),d=a(17),h=a(135),E=a(23),f=a(35),g=a(28),y=a(139),b=a(136),v={products:[],categories:[],selectedCategory:"",cart:[]};var O=Object(b.a)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){default:return e;case"ADD_PRODUCTS":return Object.assign({},e,{products:t.products});case"ADD_CATEGORIES":return Object.assign({},e,{categories:t.categories});case"ADD_TO_CART":return Object.assign({},e,{cart:[].concat(Object(y.a)(e.cart),[t.product])});case"REMOVE_FROM_CART":var a=e.cart.filter(function(e){return e.cartId!==t.cartId});return console.log("removed item from cart. newCart: ",a),Object.assign({},e,{cart:a});case"SET_SELECTED_CATEGORY":return Object.assign({},e,{selectedCategory:t.category})}}),j=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={mobileOpen:!1},a.handleDrawerToggle=function(){a.setState(function(e){return{mobileOpen:!e.mobileOpen}})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;O.subscribe(function(){return e.forceUpdate()})}},{key:"renderCategoriesIcons",value:function(e){switch(e){case"phone":return r.a.createElement(p.t,null,r.a.createElement(g.h,null));case"tv":return r.a.createElement(p.t,null,r.a.createElement(g.i,null));case"small-appliance":return r.a.createElement(p.t,null,r.a.createElement(g.a,null));case"refrigerator":return r.a.createElement(p.t,null,r.a.createElement(g.d,null));case"watch":return r.a.createElement(p.t,null,r.a.createElement(g.j,null));case"action-camera":return r.a.createElement(p.t,null,r.a.createElement(g.f,null));default:return""}}},{key:"handleClick",value:function(e){O.dispatch({type:"SET_SELECTED_CATEGORY",category:e})}},{key:"renderCategories",value:function(){var e=this;return O.getState().categories.map(function(t,a){return r.a.createElement(p.r,{onClick:function(){return e.handleClick(t)},button:!0,key:t},e.renderCategoriesIcons(t),r.a.createElement(p.u,{primary:t}))})}},{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.theme,c=r.a.createElement("div",null,r.a.createElement("div",{className:a.toolbar}),r.a.createElement(p.k,null),r.a.createElement(E.b,{className:a.myLink,to:"/"},r.a.createElement(p.q,{className:a.categories},this.renderCategories(),r.a.createElement(p.r,{onClick:function(){return e.handleClick("")},button:!0,key:""},r.a.createElement(p.t,null,r.a.createElement(g.b,null)),r.a.createElement(p.u,null,"Show All Items")))),r.a.createElement(p.k,null),r.a.createElement(p.q,null,r.a.createElement(E.b,{className:a.myLink,to:"/cart"},r.a.createElement(p.r,{button:!0},r.a.createElement(p.c,{badgeContent:O.getState().cart.length,color:"primary"},r.a.createElement(p.t,null,r.a.createElement(g.g,null))),r.a.createElement(p.u,null,"Your Cart"))),r.a.createElement(E.b,{className:a.myLink,to:"/"},r.a.createElement(p.r,{button:!0},r.a.createElement(p.t,null,r.a.createElement(g.c,null)),r.a.createElement(p.u,null,"Home")))));return r.a.createElement(p.w,{elevation:4,className:a.root},r.a.createElement(p.j,null),r.a.createElement(p.a,{position:"fixed",className:a.appBar,color:"primary"},r.a.createElement(p.x,null,r.a.createElement(p.p,{color:"inherit","aria-label":"Open drawer",onClick:this.handleDrawerToggle,className:a.menuButton},r.a.createElement(g.e,null)),r.a.createElement(p.y,{variant:"h3",color:"inherit",noWrap:!0},r.a.createElement(E.b,{className:a.myLink,to:"/"},"Kaleb Co.")))),r.a.createElement("nav",{className:a.drawer},r.a.createElement(p.n,{smUp:!0,implementation:"css"},r.a.createElement(p.l,{container:this.props.container,variant:"temporary",anchor:"rtl"===n.direction?"right":"left",open:this.state.mobileOpen,onClose:this.handleDrawerToggle,classes:{paper:a.drawerPaper}},c)),r.a.createElement(p.n,{xsDown:!0,implementation:"css"},r.a.createElement(p.l,{classes:{paper:a.drawerPaper},variant:"permanent",open:!0},c))),r.a.createElement("main",{className:a.content},r.a.createElement("div",{className:a.toolbar})))}}]),t}(r.a.Component),k=Object(d.withStyles)(function(e){return{root:{display:"flex"},drawer:Object(f.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0,backgroundColor:e.palette.primary.main}),appBar:Object(f.a)({marginLeft:240},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(240,"px)")}),menuButton:Object(f.a)({marginRight:20},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:240},content:{flexGrow:1,padding:.5*e.spacing.unit},myLink:{textDecoration:"none",color:"inherit"},categories:{textTransform:"Capitalize"}}},{withTheme:!0})(j),C=a(5558),w=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"renderRating",value:function(e){var t=[];return function(){for(var a=0;a<Math.floor(e);a++)t.push({type:"FULL_STAR"});e%1>=.5?t.push({type:"HALF_STAR"}):r.a.createElement("span",null)}(),t.map(function(e){switch(e.type){case"HALF_STAR":return r.a.createElement(p.o,{color:"primary"},"star_half");case"FULL_STAR":return r.a.createElement(p.o,{color:"primary"},"star");default:return r.a.createElement("span",null)}})}},{key:"addToCart",value:function(e){console.log("adding to cart",e);var t=C();O.dispatch({type:"ADD_TO_CART",product:Object(h.a)({},e,{cartId:t})}),console.log("cart now contains:",O.getState().cart)}},{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement(p.m,{sm:10,md:4,lg:3,item:!0},r.a.createElement(p.e,{className:t.card,raised:!0},r.a.createElement(p.h,{className:t.cardHead,title:this.props.product.title}),r.a.createElement(p.i,{className:t.image,image:this.props.product.img,alt:this.props.product.title}),r.a.createElement("div",{className:t.price},r.a.createElement(p.h,{titleTypographyProps:{color:"default"},title:"$".concat(this.props.product.price)}),r.a.createElement("span",{className:t.rating},r.a.createElement(p.h,{title:"".concat(this.props.product.rating)}),this.renderRating(this.props.product.rating))),r.a.createElement(p.g,null,r.a.createElement(p.y,{className:t.description,noWrap:!0},this.props.product.description)),r.a.createElement(p.f,{className:t.buttons},r.a.createElement(p.d,{color:"primary",onClick:function(){return e.addToCart(e.props.product)},variant:"outlined"},"Add To Cart"),r.a.createElement(E.b,{to:"/products/".concat(this.props.product.id),className:t.myLink},r.a.createElement(p.d,{color:"primary",variant:"outlined"},"More Info")))))}}]),t}(r.a.Component),T=Object(d.withStyles)(function(){return{root:{marginLeft:"".concat(248,"px")},image:{height:"30vh",backgroundSize:"contain",backgroundRepeat:"no-repeat"},"@media screen and (max-width: 600px)":{root:{marginLeft:"0px"},description:{whiteSpace:"normal"}},buttons:{justifyContent:"space-evenly"},myLink:{textDecoration:"none",color:"inherit"},price:{display:"flex",justifyContent:"space-evenly"},card:{},rating:{display:"flex",alignItems:"center"}}})(w),S=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"renderCard",value:function(e){return r.a.createElement(T,{product:e})}},{key:"renderProducts",value:function(e){var t=this;return console.log(O),""!==e?O.getState().products.filter(function(t){return t.category===e}).map(function(e){return t.renderCard(e)}):""===e?O.getState().products.map(function(e){return t.renderCard(e)}):void 0}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(p.w,{elevation:0,className:e.root},r.a.createElement(p.m,{spacing:40,container:!0,justify:"space-evenly"},this.renderProducts(O.getState().selectedCategory)))}}]),t}(r.a.Component),x=Object(d.withStyles)(function(e){return{root:{marginLeft:"".concat(248,"px")},image:{height:"30vh",backgroundSize:"contain",backgroundRepeat:"no-repeat"},"@media screen and (max-width: 600px)":{root:{marginLeft:"0px"},description:{whiteSpace:"normal"}},buttons:{justifyContent:"space-evenly"},myLink:{textDecoration:"none",color:"inherit"},price:{display:"flex",justifyContent:"space-evenly"},card:{},rating:{display:"flex",alignItems:"center"}}},{withTheme:!0})(S),N=a(31),A=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).productId=a.props.match.params.productId,a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"getProductInfo",value:function(){var e=this;return console.log(O.getState().products,"productdetails store"),O.getState().products.find(function(t){return t.id==e.productId})}},{key:"render",value:function(){var e=this.props.classes,t=this.getProductInfo();return r.a.createElement("div",{className:e.root},r.a.createElement(p.e,{className:e.card,raised:!1},r.a.createElement(p.h,{title:t.title}),r.a.createElement(p.i,{className:e.image,image:t.img,alt:t.title}),r.a.createElement(p.h,{title:"$".concat(t.price)}),r.a.createElement(p.g,null,r.a.createElement(p.y,{component:"p"},this.getProductInfo().description)),r.a.createElement(p.f,null,r.a.createElement(E.b,{className:e.link,to:"/"},r.a.createElement(p.d,{variant:"flat"},"BACK")),r.a.createElement(p.d,{variant:"flat"},"Add To Cart"))))}}]),t}(r.a.Component),D=Object(d.withStyles)(function(){return{root:{marginLeft:"".concat(240,"px !important")},link:{color:"inherit",textDecoration:"none"},card:{maxWidth:"50%"},image:{height:"50vh",backgroundSize:"contain"}}},{withTheme:!0})(A),I=a(55),R=a.n(I),L=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){console.log("cart mounted, this is in the cart:",O.getState().cart)}},{key:"handleClick",value:function(e){var t=this;O.subscribe(function(){return t.forceUpdate()}),O.dispatch({type:"REMOVE_FROM_CART",cartId:e})}},{key:"renderProducts",value:function(){var e=this;return O.getState().cart.map(function(t){return r.a.createElement(p.r,{key:t.cartId},r.a.createElement(p.s,null,r.a.createElement(p.b,{alt:t.title,src:t.img})),r.a.createElement(p.u,null,t.title),r.a.createElement(p.v,{component:"div"},"$".concat(t.price)),r.a.createElement(p.t,null,r.a.createElement(p.p,{onClick:function(){return e.handleClick(t.cartId)},color:"primary"},r.a.createElement(p.o,null,"delete_outline"))))})}},{key:"render",value:function(){var e=this.props.classes;return 0===O.getState().cart.length?r.a.createElement(p.y,{className:e.root,variant:"h2"},"Your Cart Is Empty"):r.a.createElement(p.w,{elevation:2,className:e.root},r.a.createElement(p.q,null,this.renderProducts()))}}]),t}(r.a.Component),_=Object(d.withStyles)(function(e){return{root:{margin:"0 auto",width:"50vw",display:"flex",justifyContent:"center",alignItems:"center"}}},{withTheme:!0})(L),P=Object(d.createMuiTheme)({palette:{primary:{main:"#ab4967",contrastText:"#dcd4e1"},secondary:{main:"#0c1713",contrastText:"#ab4967"}}}),M=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;O.subscribe(function(){return e.forceUpdate()}),fetch("https://my-json-server.typicode.com/tdmichaelis/json-api/products").then(function(e){return e.json()}).then(function(e){O.dispatch({type:"ADD_PRODUCTS",products:e})}),fetch("https://my-json-server.typicode.com/tdmichaelis/json-api/categories").then(function(e){return e.json()}).then(function(e){O.dispatch({type:"ADD_CATEGORIES",categories:e})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d.MuiThemeProvider,{theme:P},r.a.createElement(R.a,null),r.a.createElement(k,null),r.a.createElement(N.d,null,r.a.createElement(N.b,{exact:!0,path:"/ecommerce",component:x}),r.a.createElement(N.b,{exact:!0,path:"/products/:productId",component:D}),r.a.createElement(N.b,{exact:!0,path:"/cart",component:_}),r.a.createElement(N.a,{to:"/ecommerce"}))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(E.a,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},79:function(e,t,a){}},[[5421,1,2]]]);
//# sourceMappingURL=main.861b0f1a.chunk.js.map