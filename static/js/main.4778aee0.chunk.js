(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){e.exports=a.p+"static/media/tel.4d432396.svg"},34:function(e,t,a){e.exports=a(47)},39:function(e,t,a){},40:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),l=a.n(c),o=(a(39),a(14)),i=(a(40),a(41),a(12)),m=a(2),s=a(3),u=a(5),d=a(4),p=a(6),f=a(7),E=a(27),v=a.n(E),h=a(13);function b(){var e=Object(i.a)(["\ntext-transform:capitalize;\nfont-size:1.2rem;\nbackground:transparent;\nborder:0.25rem solid var(--lightBlue);\nborder-color:",";\ncolor: ",";\nborder-radius: 0.5rem;\npadding: 0.2rem 0.5rem;\ncursor:pointer;\nmargin:0.2rem 0.5rem 0.2rem 0;\ntransition: all 0.5s ease-in-out;\n&:hover{\n    background:var(--lightBlue);\n    color:var(--mainBlue);\n}\n&:focus{\n    outline:none;\n}\n"]);return b=function(){return e},e}var g=h.a.button(b(),function(e){return e.cart?"var(--mainYellow)":"var(--lightBlue)"},function(e){return e.cart?"var(--mainYellow)":"var(--lightBlue)"});function x(){var e=Object(i.a)(["\nbackground: var(--mainBlue);\n.nav-link{\n    color:var(--mainWhite)!important;\n    font-size:1.3rem;\n    text-transform:capitalize;\n}\n"]);return x=function(){return e},e}var N=function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(y,{className:"navbar navbar-expand-sm bg-primary navbar-dark px-sm-5"},r.a.createElement(f.b,{to:"/"},r.a.createElement("img",{src:v.a,height:"40px",alt:"store",className:"navbar-brand"})),r.a.createElement("ul",{className:"navbar-nav align-items-center"},r.a.createElement("li",{className:"nav-item ml-5"},r.a.createElement(f.b,{to:"/",className:"nav-link"},"products"))),r.a.createElement(f.b,{to:"/cart",className:"ml-auto"},r.a.createElement(g,null,r.a.createElement("span",{className:"mr-2"},r.a.createElement("i",{className:"fa fa-cart-plus fa-lg"})),"my cart")))}}]),t}(r.a.Component),y=h.a.nav(x()),O=N;var j=function(e){var t=e.name,a=e.title;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto my-2 text-center text-title"},r.a.createElement("h1",{className:"text-capitalize font-weight-bold"},t,r.a.createElement("strong",{className:"text-blue ml-4"},a))))},k=a(10),C=a(23),w=[{id:1,title:"IPHONE X",img:"img/iphonex.jpg",price:1e3,company:"IPHONE",info:"Iphone Photos offers unlimited, online storage for all photos and videos uploaded in high quality. Photos and videos uploaded in high quality may be compressed or resized. Requires an Account and an Internet connection. Data rates may apply. g.co/help/photostorage",inCart:!1,count:0,total:0},{id:2,title:"Samsung Galaxy S10",img:"img/samsungx.jpg",price:1100,company:"SAMSUNG",info:"Samsung Photos offers unlimited, online storage for all photos and videos uploaded in high quality. Photos and videos uploaded in high quality may be compressed or resized. Requires an Account and an Internet connection. Data rates may apply. g.co/help/photostorage",inCart:!1,count:0,total:0},{id:3,title:"Samsung Galaxy S10+",img:"img/samsungxplus.jpg",price:1200,company:"SAMSUNG",info:"Samsung Photos offers unlimited, online storage for all photos and videos uploaded in high quality. Photos and videos uploaded in high quality may be compressed or resized. Requires an Account and an Internet connection. Data rates may apply. g.co/help/photostorage",inCart:!1,count:0,total:0},{id:4,title:"Samsung Galaxy NOTE 10",img:"img/samsungnotex.jpg",price:1300,company:"SAMSUNG",info:"Samsung Photos offers unlimited, online storage for all photos and videos uploaded in high quality. Photos and videos uploaded in high quality may be compressed or resized. Requires an Account and an Internet connection. Data rates may apply. g.co/help/photostorage",inCart:!1,count:0,total:0}],S={id:1,title:"IphoneX - Black",img:"img/iphonex.jpg",price:1e3,company:"Iphone",info:"Iphone Photos offers unlimited, online storage for all photos and videos uploaded in high quality. Photos and videos uploaded in high quality may be compressed or resized. Requires an Account and an Internet connection. Data rates may apply. g.co/help/photostorage",inCart:!1,count:0,total:0},P=r.a.createContext(),I=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={products:[],detailProduct:S,cart:[],modalOpen:!1,modalProduct:S,cartSubTotal:0,cartTax:0,cartTotal:0},a.setProducts=function(){var e=[];w.forEach(function(t){var a=Object(C.a)({},t);e=[].concat(Object(k.a)(e),[a])}),a.setState(function(){return{products:e}})},a.getItem=function(e){return a.state.products.find(function(t){return t.id===e})},a.handleDetail=function(e){var t=a.getItem(e);a.setState(function(){return{detailProduct:t}})},a.addToCart=function(e){var t=Object(k.a)(a.state.products),n=t.indexOf(a.getItem(e)),r=t[n];r.inCart=!0,r.count=1;var c=r.price;r.total=c,a.setState(function(){return{products:t,cart:[].concat(Object(k.a)(a.state.cart),[r])}},function(){a.addTotals()})},a.openModal=function(e){var t=a.getItem(e);a.setState(function(){return{modalProduct:t,modalOpen:!0}})},a.closeModal=function(){a.setState(function(){return{modalOpen:!1}})},a.increment=function(e){var t=Object(k.a)(a.state.cart),n=t.find(function(t){return t.id===e}),r=t.indexOf(n),c=t[r];c.count=c.count+1,c.total=c.count*c.price,a.setState(function(){return{cart:Object(k.a)(t)}},function(){a.addTotals()})},a.decrement=function(e){var t=Object(k.a)(a.state.cart),n=t.find(function(t){return t.id===e}),r=t.indexOf(n),c=t[r];c.count=c.count-1,0===c.count?a.removeItem(e):(c.total=c.count*c.price,a.setState(function(){return{cart:Object(k.a)(t)}},function(){a.addTotals()}))},a.removeItem=function(e){var t=Object(k.a)(a.state.products),n=Object(k.a)(a.state.cart);n=n.filter(function(t){return t.id!==e});var r=t.indexOf(a.getItem(e)),c=t[r];c.inCart=!1,c.count=0,c.total=0,a.setState(function(){return{cart:Object(k.a)(n),products:Object(k.a)(t)}},function(){a.addTotals()})},a.clearCart=function(){a.setState(function(){return{cart:[]}},function(){a.setProducts(),a.addTotals()})},a.addTotals=function(){var e=0;a.state.cart.map(function(t){return e+=t.total});var t=parseFloat((.1*e).toFixed(2)),n=e+t;a.setState(function(){return{cartSubTotal:e,cartTax:t,cartTotal:n}})},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setProducts()}},{key:"render",value:function(){return r.a.createElement(P.Provider,{value:Object(C.a)({},this.state,{handleDetail:this.handleDetail,addToCart:this.addToCart,openModal:this.openModal,closeModal:this.closeModal,increment:this.increment,decrement:this.decrement,removeItem:this.removeItem,clearCart:this.clearCart})},this.props.children)}}]),t}(n.Component),T=P.Consumer;function z(){var e=Object(i.a)(["\n.card{\n  border-color:transparent;\n  transition:all 1s linear;  \n}\n.card-footer{\n  background:transparent;\n  border-top:transparent;\n  transition:all 1s linear; \n}\n&:hover{\n  .card{\n    border:0.04rem solid rgba(0,0,0,0.2);\n    box-shadow:2px 2px 5px 0px (0,0,0,0.2);    \n  }\n  .card-footer{\n    background:rgba(247,247,247);\n  }\n}\n.img-container{\n  position:relative;\n  overflow:hidden;\n}\n.card-img-top{\n  transition:all 1s linear;\n}\n.img-container:hover .card-img-top{\n  transform:scale(1.2);\n}\n.cart-btn{\n  position:absolute;\n  bottom:0;\n  right:0;\n  padding:0.2rem 0.4rem;\n  background:var(--lightBlue);\n  border:none;\n  color:var(--mainWhite);\n  font-size:1.4rem; \n  border-radius:0.5rem 0 0 0;\n  transform:translate(100%,100%);\n  transition:all 1s linear;\n}\n.img-container:hover .cart-btn{\n  transform:translate(0,0);\n}\n.cart-btn:hover{\n  color: var(--mainBlue);\n  cursor:pointer;\n}\n"]);return z=function(){return e},e}var q=function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.product,t=e.id,a=e.title,n=e.img,c=e.price,l=e.inCart;return r.a.createElement(M,{className:"col-9 mx-auto col-md-6 col-lg-3 my-3"},r.a.createElement("div",{className:"card"},r.a.createElement(T,null,function(e){return r.a.createElement("div",{className:"img-container p-5",onClick:function(){return e.handleDetail(t)}},r.a.createElement(f.b,{to:"/details"},r.a.createElement("img",{src:n,alt:"product",className:"card-img-top"})),r.a.createElement("button",{className:"cart-btn",disabled:!!l,onClick:function(){e.addToCart(t),e.openModal(t)}},l?r.a.createElement("p",{className:"text-capitalize mb-0",disabled:!0},"in cart"):r.a.createElement("i",{className:"fa fa-cart-plus fa-lg"})))}),r.a.createElement("div",{className:"card-footer d-flex justify-content-between"},r.a.createElement("p",{className:"align-self-center mb-0"},a),r.a.createElement("h5",{className:"text-blue font-italic mb-0"},r.a.createElement("span",{className:"mr-1"},"$"),c))))}}]),t}(r.a.Component),M=h.a.div(z()),B=q,D=function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"py-5"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(j,{name:"our",title:"products"})),r.a.createElement("div",{className:"row"},r.a.createElement(T,null,function(e){return e.products.map(function(e){return r.a.createElement(B,{key:e.id,product:e})})})))))}}]),t}(r.a.Component),A=function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(T,null,function(e){var t=e.detailProduct,a=t.id,n=t.company,c=t.img,l=t.info,o=t.price,i=t.title,m=t.inCart;return r.a.createElement("div",{className:"container py-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto text-center text-slanted text-blue my-5"},r.a.createElement("h1",null,i))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto col-md-6 my-3"},r.a.createElement("img",{src:c,className:"img-fluid",alt:"product"})),r.a.createElement("div",{className:"col-10 mx-auto col-md-6 my-3 text-capitalize"},r.a.createElement("h2",null,"model : ",i),r.a.createElement("h4",{className:"text-title text-uppercase text-muted mt-3 mb-2"},"made by: ",r.a.createElement("span",{className:"text-uppercase"},n)),r.a.createElement("h4",{className:"text-blue"},r.a.createElement("strong",null,"price: ",r.a.createElement("span",null,"$"),o)),r.a.createElement("p",{className:"text-capitalize font-weight-bold mt-3 mb-0"},"some info about product:"),r.a.createElement("p",{className:"text-muted lead"},l),r.a.createElement("div",null,r.a.createElement(f.b,{to:"/"},r.a.createElement(g,null,"back to products")),r.a.createElement(g,{cart:!0,disabled:!!m,onClick:function(){e.addToCart(a),e.openModal(a)}},m?"inCart":"add to cart")))))})}}]),t}(n.Component);function $(){return r.a.createElement("div",{className:"container-fluid text-center d-none d-lg-block"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("p",{className:"text-uppercase"},"products")),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("p",{className:"text-uppercase"},"name of product")),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("p",{className:"text-uppercase"},"price")),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("p",{className:"text-uppercase"},"quantity")),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("p",{className:"text-uppercase"},"remove")),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("p",{className:"text-uppercase"},"total"))))}function F(){return r.a.createElement("div",{className:"container mt-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto text-center text-title"},r.a.createElement("h1",null,"your cart is currently empty"))))}function G(e){var t=e.item,a=e.value,n=t.id,c=t.title,l=t.img,o=t.price,i=t.total,m=t.count,s=a.increment,u=a.decrement,d=a.removeItem;return r.a.createElement("div",{className:"row my-2 text-capitalize text-center"},r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("img",{src:l,style:{width:"5rem",height:"5rem"},className:"img-fluid",alt:"product"})),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("span",{className:"d-lg-none"},"product:"),c),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("span",{className:"d-lg-none"},"price:"),o),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2 my-2 my-lg-0"},r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",null,r.a.createElement("span",{className:"btn btn-black mx-1",onClick:function(){return u(n)}},"-"),r.a.createElement("span",{className:"btn btn-black mx-1"},m),r.a.createElement("span",{className:"btn btn-black mx-1",onClick:function(){return s(n)}},"+")))),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("div",{className:"cart-icon",onClick:function(){return d(n)}},r.a.createElement("i",{className:"fa fa-trash"}))),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("strong",null,"item total: $ ",i," ")))}function R(e){var t=e.value,a=t.cart;return r.a.createElement("div",{className:"container-fluid"},a.map(function(e){return r.a.createElement(G,{key:e.id,item:e,value:t})}))}function W(e){var t=e.value,a=t.cartSubTotal,n=t.cartTax,c=t.cartTotal,l=t.clearCart;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right"},r.a.createElement(f.b,{to:"/"},r.a.createElement("button",{className:"btn btn-outline-danger text-uppercase mb-3 px-5",type:"button",onClick:function(){return l()}},"clear cart")),r.a.createElement("h5",null,r.a.createElement("span",{className:"text-title"},"subtotal:"),r.a.createElement("strong",null,"$ ",a)),r.a.createElement("h5",null,r.a.createElement("span",{className:"text-title"},"tax:"),r.a.createElement("strong",null,"$ ",n)),r.a.createElement("h5",null,r.a.createElement("span",{className:"text-title"},"total:"),r.a.createElement("strong",null,"$ ",c))))))}var U=function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("section",null,r.a.createElement(T,null,function(e){return e.cart.length>0?r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{name:"your",title:"cart"}),r.a.createElement($,null),r.a.createElement(R,{value:e}),r.a.createElement(W,{value:e})):r.a.createElement(F,null)}))}}]),t}(n.Component),H=function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null," ",r.a.createElement("h3",null,"Page not found! ")," ")}}]),t}(n.Component);function J(){var e=Object(i.a)(["\nposition:fixed;\ntop:0;\nleft:0;\nright:0;\nbottom:0;\nbackground:rgba(0,0,0,0.3);\ndisplay:flex;\nalign-items:center;\njustify-content:center;\n#modal{\n    background:var(--mainWhite);\n}\n"]);return J=function(){return e},e}var X=function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(T,null,function(e){var t=e.modalOpen,a=e.closeModal,n=e.modalProduct,c=n.img,l=n.title,o=n.price;return t?r.a.createElement(Y,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{id:"modal",className:"col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"},r.a.createElement("h5",null,"item added to the cart"),r.a.createElement("img",{src:c,className:"img-fluid",alt:"product"}),r.a.createElement("h5",null,l),r.a.createElement("h5",{className:"text-muted"},"price:",r.a.createElement("span",{className:"font-italic m-2"},"$",o)),r.a.createElement(f.b,{to:"/"},r.a.createElement(g,{onClick:function(){return a()}},"continue shopping")),r.a.createElement(f.b,{to:"/cart"},r.a.createElement(g,{cart:!0,onClick:function(){return a()}},"go to cart")))))):null})}}]),t}(n.Component),Y=h.a.div(J());var K=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,null),r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:D}),r.a.createElement(o.a,{path:"/details",component:A}),r.a.createElement(o.a,{path:"/cart",component:U}),r.a.createElement(o.a,{component:H})),r.a.createElement(X,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(I,null,r.a.createElement(f.a,null,r.a.createElement(K,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.4778aee0.chunk.js.map