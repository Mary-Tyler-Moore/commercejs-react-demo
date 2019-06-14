(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(8),i=a.n(c),o=(a(16),a(2)),s=a(3),l=a(5),u=a(4),m=a(1),p=a(6);var d=function(e){var t=e.id,a=e.is.sold_out,r=e.media.source,c=e.name,i=e.price,o=e.addProductToCart;return n.a.createElement("div",{className:"products-container__product fl w-third pa1 flex flex-column justify-center"},n.a.createElement("div",{className:"aspect-ratio aspect-ratio--5x8 bg-black-50",style:{backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"contain",backgroundImage:"url(".concat(r,")")}}),n.a.createElement("p",{className:"tracked f7 flex justify-between items-center"},c,n.a.createElement("span",null,"$",i.formatted_with_code)),n.a.createElement("button",{className:"dim b1 b--mid-gray outline-0 pointer pa2",disabled:a,onClick:function(){return o(t)}},a?"Sold Out":"Add to Cart"))};var h=function(e){var t=e.id,a=e.name,r=e.quantity,c=e.removeProductFromCart,i=e.line_total;return n.a.createElement("div",{className:"cart-container__line-item w-100 flex items-center justify-between pb2"},n.a.createElement("div",{className:"w-auto pr1"},n.a.createElement("p",{className:"tracked ttc f7"},a," - (",r,") - $",i.formatted_with_code)),n.a.createElement("button",{className:"dim b1 b--mid-gray outline-0 pointer pa2",onClick:function(){return c(t)}},"Remove from Cart"))};var b=function(e){var t=e.cart,a=e.removeProductFromCart,r=e.createCheckout;if(t){var c=t.total_items,i=t.subtotal,o=t.line_items,s=(void 0===o?[]:o).map(function(e,t){return n.a.createElement("li",{key:t},n.a.createElement(h,Object.assign({},e,{removeProductFromCart:a})))});return n.a.createElement("div",{className:"cart-container mw7 center"},n.a.createElement("h2",{className:"tracked ttu gray flex justify-between"},"Cart (",c,")",n.a.createElement("span",{className:"flex flex-column f7"},n.a.createElement("span",null,"subtotal: $",i.formatted_with_code))),c>0?n.a.createElement("ul",{className:"w-100 list-reset ma0 pv0 ph4"},s):n.a.createElement("p",{className:"f7 tracked"},"Your cart is empty"),n.a.createElement("button",{className:"dim b1 ".concat(0===c?"b--light-gray":"b--mid-gray"," outline-0 pointer pa2 mt2 db w-100"),disabled:0===c,onClick:r},"Checkout"))}return n.a.createElement("p",null,"Loading Cart ...")},v=a(9);var g=function(e){e.id;var t=e.product_name,a=e.quantity,r=e.line_total;return n.a.createElement("div",{className:"cart-container__line-item w-100 flex items-center justify-between pb2"},n.a.createElement("div",{className:"w-auto pr1"},n.a.createElement("p",{className:"tracked ttc f7"},t," - (",a,")")),n.a.createElement("p",{className:"pa0 ma0"},"$",r.formatted_with_code))},f=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).captureOrder=a.captureOrder.bind(Object(m.a)(a)),a.handleChange=a.handleChange.bind(Object(m.a)(a)),a.getAllCountries=a.getAllCountries.bind(Object(m.a)(a)),a.getRegions=a.getRegions.bind(Object(m.a)(a)),a.getShippingOptions=a.getShippingOptions.bind(Object(m.a)(a)),a.state={customerFirstName:"",customerLastName:"",customerEmail:"",country:"US",shippingFullName:"",streetAddress:"",city:"",provinceRegionState:"",postalZipcode:"",shippingOption:"",shippingOptions:[],shippingOptionsById:{},cardNumber:"4242 4242 4242 4242",expMonth:"01",expYear:"2021",ccv:"123",billingPostalZipcode:"32825",countries:{},subdivisions:{}},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getAllCountries(),this.getRegions("US"),this.getShippingOptions(this.props.checkout.id,"US")}},{key:"getAllCountries",value:function(){var e=this;this.props.commerce.Services.localeListShippingCountries(this.props.checkout.id,function(t){e.setState({countries:t.countries})})}},{key:"getRegions",value:function(e){var t=this;this.props.commerce.Services.localeListSubdivisions(e,function(e){t.setState({subdivisions:e.subdivisions})})}},{key:"getShippingOptions",value:function(e,t){var a=this;this.props.commerce.Checkout.getShippingOptions(e,{country:t},function(e){e.error?a.setState({shippingOptions:[]}):a.setState({shippingOptions:e,shippingOptionsById:e.reduce(function(e,t){return e[t.id]=t,e},{})})})}},{key:"handleChange",value:function(e){this.setState(Object(v.a)({},e.target.name,e.target.value)),"country"===e.target.name&&(this.getRegions(e.target.value),this.getShippingOptions(this.props.checkout.id,e.target.value))}},{key:"captureOrder",value:function(){var e={line_items:this.props.checkout.live.line_items.reduce(function(e,t){return e[t.id]={quantity:t.quantity},e},{}),customer:{firstname:this.state.customerFirstName,lastname:this.state.customerLastName,email:this.state.customerEmail},shipping:{name:this.state.shippingFullName,country:this.state.country,street:this.state.streetAddress,town_city:this.state.city,county_state:this.state.provinceRegionState,postal_zip_code:this.state.postalZipcode},fulfillment:{shipping_method:this.state.shippingOption},payment:{gateway:"test_gateway",card:{number:this.state.cardNumber,expiry_month:this.state.expMonth,expiry_year:this.state.expYear,cvc:this.state.ccv,postal_zip_code:this.state.billingPostalZipcode}}};console.log("The order constructed",e),this.props.captureOrder(this.props.checkout.id,e)}},{key:"render",value:function(){var e=this,t=this.props,a=(t.captureOrder,t.cancelCheckout),r=t.checkout,c=this.state,i=c.customerFirstName,o=c.customerLastName,s=c.customerEmail,l=c.country,u=c.countries,m=c.shippingFullName,p=c.streetAddress,d=c.city,h=c.provinceRegionState,b=c.subdivisions,v=c.postalZipcode,f=c.shippingOption,y=c.shippingOptions,k=c.shippingOptionsById,E=c.cardNumber,C=c.expMonth,N=c.expYear,O=c.ccv,w=c.billingPostalZipcode,_=r.live,x=_.line_items,j=(_.shipping,_.total_due),S=x.map(function(e,t){return n.a.createElement("li",{key:t},n.a.createElement(g,e))}),P=Object.keys(u).map(function(e,t){return n.a.createElement("option",{value:e,key:t},u[e])}),F=Object.keys(b).map(function(e,t){return n.a.createElement("option",{value:e,key:t},b[e])}),R=y.map(function(e,t){return n.a.createElement("option",{value:e.id,key:t},"".concat(e.description," - $").concat(e.price.formatted_with_code))}),A=k[f]&&k[f].price.formatted_with_code||"----";return n.a.createElement("div",{className:"checkout-container mw7 center pb4"},n.a.createElement("h2",{className:"tracked ttu gray flex justify-between"},"Checkout"),n.a.createElement("ul",{className:"w-100 list-reset ma0 pv0 ph4"},S),n.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.captureOrder()},onChange:this.handleChange},n.a.createElement("h4",{className:"tracked ttu gray flex justify-between"},"Customer Details"),n.a.createElement("input",{className:"db mb1",type:"text",name:"customerFirstName",value:i,placeholder:"First Name"}),n.a.createElement("input",{className:"db mb1",type:"text",name:"customerLastName",value:o,placeholder:"Last Name"}),n.a.createElement("input",{className:"db mb1",type:"email",name:"customerEmail",value:s,placeholder:"Email"}),n.a.createElement("h4",{className:"tracked ttu gray flex justify-between"},"shipping address"),n.a.createElement("input",{className:"db mb1",type:"text",name:"shippingFullName",value:m,placeholder:"Name"}),n.a.createElement("input",{className:"db mb1",type:"text",name:"streetAddress",value:p,placeholder:"Street Address"}),n.a.createElement("input",{className:"db mb1",type:"text",name:"city",value:d,placeholder:"City"}),n.a.createElement("input",{className:"db mb1",type:"text",name:"postalZipcode",value:v,placeholder:"Postal/Zip Code"}),n.a.createElement("select",{value:l,name:"country",className:"db mb2"},n.a.createElement("option",{value:"",disabled:!0},"Country"),P),n.a.createElement("select",{value:h,name:"provinceRegionState",className:"db mb2"},n.a.createElement("option",{value:"",disabled:!0},"Province/Region/State"),F),n.a.createElement("h4",{className:"tracked ttu gray flex justify-between"},"choose a shipping method"),y.length>0?n.a.createElement("select",{value:f,name:"shippingOption",className:"db mb2"},n.a.createElement("option",{value:"",disabled:!0},"Choose a shipping method"),R):"There are no shipping options available for the selected country.",n.a.createElement("h4",{className:"tracked ttu gray flex justify-between"},"Payment"),n.a.createElement("input",{className:"db mb1",type:"text",name:"cardNumber",value:E,placeholder:"Card Number"}),n.a.createElement("input",{className:"db mb1",type:"text",name:"expMonth",value:C,placeholder:"Exp Month"}),n.a.createElement("input",{className:"db mb1",type:"text",name:"expYear",value:N,placeholder:"Exp Year"}),n.a.createElement("input",{className:"db mb1",type:"text",name:"ccv",value:O,placeholder:"Security Code (CCV)"}),n.a.createElement("input",{className:"db mb1",type:"text",name:"billingPostalZipcode",value:w,placeholder:"Billing Postal/Zip Code"}),n.a.createElement("p",null,"Subtotal: ",j.formatted_with_code),n.a.createElement("p",null,"Shipping: ",A),n.a.createElement("button",{disabled:!y.length,className:"dim b1 ".concat(y.length?"b--mid-gray":"b--light-gray"," outline-0 pointer pa2 mt2 db w-100 ttc")},"complete order")),n.a.createElement("span",{className:"db tracked ttu tc mv2"},"or"),n.a.createElement("button",{className:"dim b1  b--mid-gray outline-0 pointer pa2 mt2 db w-100 ttc",onClick:a},"continue shopping"))}}]),t}(r.Component),y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).addProductToCart=a.addProductToCart.bind(Object(m.a)(a)),a.removeProductFromCart=a.removeProductFromCart.bind(Object(m.a)(a)),a.createCheckout=a.createCheckout.bind(Object(m.a)(a)),a.cancelCheckout=a.cancelCheckout.bind(Object(m.a)(a)),a.captureOrder=a.captureOrder.bind(Object(m.a)(a)),a.refreshCart=a.refreshCart.bind(Object(m.a)(a)),a.state={products:[],cart:null,checkout:null,order:null},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.commerce;void 0!==t&&"undefined"!==typeof t&&(t.Products.list(function(t){e.setState({products:t.data})},function(e){}),window.addEventListener("Commercejs.Cart.Ready",function(e){var a=this;t.Cart.retrieve(function(e){if(!e.error)return a.setState({cart:e})})}.bind(this)))}},{key:"addProductToCart",value:function(e){var t=this;this.props.commerce.Cart.add({id:e},function(e){e.error||t.setState({cart:e.cart})})}},{key:"removeProductFromCart",value:function(e){var t=this;this.props.commerce.Cart.remove(e,function(e){e.error||t.setState({cart:e.cart})})}},{key:"refreshCart",value:function(){this.props.commerce.Cart.refresh(function(e){},function(e){return console.log(e)})}},{key:"createCheckout",value:function(){var e=this;this.state.cart.total_items>0&&this.props.commerce.Checkout.generateToken(this.state.cart.id,{type:"cart"},function(t){e.setState({checkout:t})},function(e){console.log("Error:",e)})}},{key:"cancelCheckout",value:function(){this.setState({checkout:null})}},{key:"captureOrder",value:function(e,t){var a=this;this.props.commerce.Checkout.capture(e,t,function(e){a.refreshCart(),a.setState({checkout:null,order:e})},function(e){return console.log(e)})}},{key:"render",value:function(){var e=this,t=this.state,a=t.products,c=t.cart,i=t.checkout,o=t.order,s=a.map(function(t,a){if(t.active)return n.a.createElement(d,Object.assign({},t,{addProductToCart:e.addProductToCart,key:a}))});return n.a.createElement("div",{className:"App ph2 pv4"},o&&n.a.createElement("div",{className:"mw7 center"},n.a.createElement("h2",{className:"tracked ttu green"},"Thank you for shopping!"),n.a.createElement("h4",{className:"tracked ttu gray flex justify-between"},"Your order number is #",this.state.order.id)),i&&n.a.createElement(f,{checkout:i,commerce:this.props.commerce,captureOrder:this.captureOrder,cancelCheckout:this.cancelCheckout}),!i&&n.a.createElement(r.Fragment,null,n.a.createElement(b,{cart:c,createCheckout:this.createCheckout,removeProductFromCart:this.removeProductFromCart}),n.a.createElement("div",{className:"products-container mw7 center cf"},n.a.createElement("h2",{className:"tracked ttu gray"},"All Products"),s.length?s:"There no products available right now")))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var k=new window.Commerce("pk_test_1551355ddcd1fde4b5d32b066305d6c6a172eea886ae6",!1);i.a.render(n.a.createElement(y,{commerce:k}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.e4302c1d.chunk.js.map