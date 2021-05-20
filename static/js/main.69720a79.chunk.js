(this.webpackJsonprecipes=this.webpackJsonprecipes||[]).push([[0],{103:function(e,t,n){},104:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n(15),r=n.n(c),s=(n(31),n(1)),a=function(){return Object(s.jsx)("div",{children:Object(s.jsx)("a",{href:"https://akselinkoodit.github.io/Recipes/",children:Object(s.jsx)("h1",{className:"logo",children:Object(s.jsx)("img",{src:"https://img.icons8.com/ios-filled/50/000000/salt-bae.png"})})})})},j=function(){return Object(s.jsxs)("footer",{children:[Object(s.jsx)("hr",{}),Object(s.jsx)("p",{children:"This tiny thing here is the footer"}),Object(s.jsx)("a",{href:"https://icons8.com/icon/41086/salt-bae",children:"Icons from Icons8"})]})},d=n(12),l=n(7),o=n(68),h=n.p+"static/media/video.c7358f4d.mp4",b=n(40),x=n(14),O=function(){return Object(s.jsxs)(b.a,{children:[Object(s.jsx)(x.a,{children:Object(s.jsx)(o.a,{fluid:!0,children:Object(s.jsx)("video",{className:"bgVideo",muted:!0,autoPlay:!0,loop:!0,children:Object(s.jsx)("source",{src:h,type:"video/mp4"})})})}),Object(s.jsx)("h1",{children:"Akseli's special recipes"}),Object(s.jsxs)("div",{children:[Object(s.jsxs)("p",{children:["Welcome to my recipes page! Here I'll bring you the finest, most delicious vegetarian dishes to your screen. Using React.js and"," ",Object(s.jsx)("em",{className:"strikethrough",children:"css"})," React.bootstrap libraries I'll make this a thing of beauty!"]}),Object(s.jsx)("p",{children:"My girlfriend is vegetarian which pretty much means I'm vegetarian. I've always loved to cook but hadn't had a lot of knowledge about vegetarian recipes before. This page is made for others like me who want to cut meat off the menu but are struggling to find truly tasty and filling vegetarian recipes. Here I've listed the best vegetarian recipes that I've learned (spoiler: the secret is cheese. A lot of it)."}),Object(s.jsxs)("p",{children:["Feel free to add your own"," ",Object(s.jsx)("a",{href:"https://akselinkoodit.github.io/Recipes/#/add",children:" here!"})]})]})]})},p=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)(x.a,{}),Object(s.jsx)("h1",{children:"About"}),Object(s.jsx)("p",{children:"This is a study project for React course at Helsinki Business College"})]})},u=n(18),g=n(22),m=n(24),f=n(33),v=function(e){var t=void 0;return t=e?Object(s.jsxs)(m.a,{className:"recipecard",children:[Object(s.jsx)(m.a.Title,{children:e.name}),""==e.image?Object(s.jsx)(m.a.Img,{src:"https://source.unsplash.com/1600x900/?".concat(e.name),alt:e.name}):Object(s.jsx)(m.a.Img,{src:"".concat(e.image),alt:e.name}),Object(s.jsxs)(m.a.Text,{children:["Preparation time: ",e.prepTime," min"]}),Object(s.jsxs)(m.a.Text,{children:["Servings: ",e.servings]}),Object(s.jsx)(g.a,{children:Object(s.jsx)(d.Link,{to:"/allRecipes/".concat(e.link),children:"See instructions"})})]},e.id):Object(s.jsx)(f.a,{animation:"border",variant:"primary"}),Object(s.jsx)("div",{children:t})},y=function(e){return Object(s.jsx)("div",{children:Object(s.jsx)("input",{type:"text",onChange:e.search,placeholder:"Search recipes"})})},k=n(20),N=n.n(k),C=n(47),R=n(25),L=function(){var e=Object(i.useState)(),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(l.m)().id,a=Object(l.k)();Object(i.useEffect)((function(){n||N.a.get("https://gentle-plateau-95526.herokuapp.com/recipe/find/"+r).then((function(e){return c(e.data)}))}));var j=Object(s.jsxs)(R.a,{id:"popover-basic",children:[Object(s.jsx)(R.a.Title,{as:"h3",children:"Recipe removed"}),Object(s.jsx)(R.a.Content,{children:"The recipe was removed from database.Refresh the recipes page to see the change."})]}),d=void 0;return n||(d=Object(s.jsx)(f.a,{animation:"border",variant:"primary"})),n&&(d=Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h4",{children:"Ingredients:"}),Object(s.jsxs)("ul",{className:"list",children:[Object(s.jsxs)("li",{children:[n.ingredients[0].quantity," of ",n.ingredients[0].ingredientName]}),n.ingredients[1]&&Object(s.jsxs)("li",{children:[n.ingredients[1].quantity," of ",n.ingredients[1].ingredientName]}),n.ingredients[2]&&Object(s.jsxs)("li",{children:[n.ingredients[2].quantity," of ",n.ingredients[2].ingredientName]}),n.ingredients[3]&&Object(s.jsxs)("li",{children:[n.ingredients[3].quantity," of ",n.ingredients[3].ingredientName]}),n.ingredients[4]&&Object(s.jsxs)("li",{children:[n.ingredients[4].quantity," of ",n.ingredients[4].ingredientName]}),n.ingredients[5]&&Object(s.jsxs)("li",{children:[n.ingredients[5].quantity," of ",n.ingredients[5].ingredientName]}),n.ingredients[6]&&Object(s.jsxs)("li",{children:[n.ingredients[6].quantity," of ",n.ingredients[6].ingredientName]}),n.ingredients[7]&&Object(s.jsxs)("li",{children:[n.ingredients[7].quantity," of ",n.ingredients[7].ingredientName]}),n.ingredients[8]&&Object(s.jsxs)("li",{children:[n.ingredients[8].quantity," of ",n.ingredients[8].ingredientName]})]}),Object(s.jsx)("h4",{children:"Instructions:"}),Object(s.jsx)("p",{children:n.instructions}),Object(s.jsx)(g.a,{onClick:function(){return a.goBack()},children:"Back to recipes"}),Object(s.jsx)(C.a,{trigger:"click",placement:"bottom",overlay:j,children:Object(s.jsx)(g.a,{size:"sm",variant:"danger",onClick:function(){N.a.delete("https://gentle-plateau-95526.herokuapp.com/recipe/remove/"+r),console.log("Trying to remove a recipe..."+r)},children:"Remove this recipe"})})]})),Object(s.jsx)("div",{children:d})},I=function(){var e=Object(i.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(i.useState)(""),a=Object(u.a)(r,2),j=a[0],d=a[1],o=Object(i.useState)(!1),h=Object(u.a)(o,2),O=h[0],p=h[1];Object(i.useEffect)((function(){N.a.get("https://gentle-plateau-95526.herokuapp.com/recipe/all").then((function(e){return c(e.data)})).then(p(!0))}),[]);var g=n.filter((function(e){return e.name.toLowerCase().includes(j.toLowerCase())})).map((function(e){return Object(s.jsx)(b.a,{fluid:!0,children:Object(s.jsx)(v,{name:e.name,image:e.image,servings:e.servings,prepTime:e.prepTime,ingredient1:e.ingredient1,ingredient2:e.ingredient2,ingredient3:e.ingredient3,ingredient4:e.ingredient4,ingredient5:e.ingredient5,instructions:e.instructions,link:e.id},e.id)})})),m="";return m=O?Object(s.jsx)("div",{className:"recipelistlist",children:g}):Object(s.jsxs)("div",{children:["Loading... ",Object(s.jsx)(f.a,{animation:"border",variant:"primary"})]}),Object(s.jsxs)("div",{className:"recipes",children:[Object(s.jsx)(x.a,{}),Object(s.jsxs)(l.g,{children:[Object(s.jsxs)(l.d,{path:"/:recipes",exact:!0,children:[Object(s.jsxs)("div",{className:"card2",children:[Object(s.jsx)("h1",{children:"Recipe page"}),Object(s.jsx)(y,{search:function(e){d(e.target.value),console.log(e.target.value)}})]}),Object(s.jsx)("div",{children:m})]}),Object(s.jsx)(l.d,{path:"/allRecipes/:id",children:Object(s.jsx)(L,{})})]})]})},T=n(56),w=n(46),q=n(38),S=n(30),F=n(27),A=function(){var e=Object(i.useState)({name:"",prepTime:"",servings:"",incredients:[],instructions:"",image:""}),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(i.useState)([{id:1,quantity:"",ingredientName:""}]),a=Object(u.a)(r,2),j=a[0],d=a[1],l=function(e){c(Object(q.a)(Object(q.a)({},n),{},Object(w.a)({},e.target.name,e.target.value)))},o=function(e,t){var i=e.target,r=i.name,s=i.value,a=Object(T.a)(j);a[t][r]=s,d(a),c(Object(q.a)(Object(q.a)({},n),{},{ingredients:j}))},h=Object(s.jsxs)(R.a,{id:"popover-basic",children:[Object(s.jsx)(R.a.Title,{as:"h3",children:"Recipe posted"}),Object(s.jsxs)(R.a.Content,{children:["You're recepie was ",Object(s.jsx)("strong",{children:"succesfully posted"}),". You'll find it now at recepies-page."]})]});return Object(s.jsxs)("div",{children:[Object(s.jsx)(x.a,{}),Object(s.jsx)("h1",{children:"Add a new recipe:"}),Object(s.jsx)("div",{className:"form",children:Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),N.a.post("https://gentle-plateau-95526.herokuapp.com/recipe/add",n),e.target.reset()},children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{htmlFor:"name",children:"Recipe name:"}),Object(s.jsx)("input",{type:"text",placeholder:"example",maxLength:"30",name:"name",id:"name",onChange:l,required:!0})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{htmlFor:"image",children:"Image url (optional):"}),Object(s.jsx)("input",{type:"text",maxLength:"255",placeholder:"https://exampleimages.com/example.png",name:"image",id:"image",onChange:l})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{htmlFor:"prepTime",children:"Preparation time (minutes):"}),Object(s.jsx)("input",{type:"number",placeholder:"45",name:"prepTime",id:"prepTime",max:"999",min:"0",onChange:l})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{htmlFor:"servings",children:"How many servings:"}),Object(s.jsx)("input",{type:"number",name:"servings",placeholder:"4",id:"servings",max:"99",min:"0",onChange:l})]}),Object(s.jsxs)("section",{children:[Object(s.jsx)(S.a.Label,{children:"Ingredients:"}),j.map((function(e,t){return Object(s.jsx)(S.a.Group,{children:Object(s.jsxs)(x.a,{children:[Object(s.jsxs)(F.a,{children:[Object(s.jsx)(S.a.Label,{htmlFor:"quantity",children:"Quantity"}),Object(s.jsx)(S.a.Control,{type:"text",name:"quantity",onChange:function(e){return o(e,t)}})]}),Object(s.jsxs)(F.a,{children:[Object(s.jsx)(S.a.Label,{htmlFor:"inggredientName",children:"Ingredient"}),Object(s.jsx)(S.a.Control,{maxLength:"255",type:"text",name:"ingredientName",onChange:function(e){return o(e,t)}})]})]})},t)})),Object(s.jsx)(g.a,{variant:"secondary",onClick:function(e){e.preventDefault();var t={id:j.length+1,ingredientName:"",quantity:""};d((function(e){return[].concat(Object(T.a)(e),[t])}))},children:"add another ingredient"})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{htmlFor:"instructions",children:"Instructions (max 255 characters):"}),Object(s.jsx)("textarea",{name:"instructions",placeholder:"mix everything and cook it",id:"instructions",maxLength:"255",onChange:l,required:!0})]}),Object(s.jsx)(C.a,{trigger:"click",placement:"right",overlay:h,children:Object(s.jsx)(g.a,{type:"submit",children:"Add recipe"})})]})})]})},H=n(19),B=function(){return Object(s.jsx)("div",{children:Object(s.jsx)(O,{})})},P=function(){return Object(s.jsx)(H.a,{children:Object(s.jsx)(p,{})})},E=function(){return Object(s.jsx)(H.a,{children:Object(s.jsx)(I,{})})},D=function(){return Object(s.jsx)(d.HashRouter,{children:Object(s.jsxs)(l.g,{children:[Object(s.jsx)(l.d,{path:"/",exact:!0,component:B}),Object(s.jsx)(l.d,{path:"/allRecipes",component:E,children:Object(s.jsx)(I,{})}),Object(s.jsx)(l.d,{path:"/about",component:P}),Object(s.jsx)(l.d,{path:"/add",children:Object(s.jsx)("div",{className:"newRecipePage",children:Object(s.jsx)(A,{})})}),Object(s.jsxs)(l.d,{path:"/allRecipes/:id",children:[Object(s.jsx)(L,{}),Object(s.jsx)("p",{children:"Recipe here"})]})]})})},J=n(57),Y=n(49),z=n(36),G=function(){return Object(s.jsx)(d.HashRouter,{children:Object(s.jsxs)(J.a,{collapseOnSelect:!0,expand:"md",children:[Object(s.jsx)(J.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(s.jsx)(z.IndexLinkContainer,{to:"/",children:Object(s.jsx)(H.a.Link,{children:"Akseli's specials"})}),Object(s.jsx)(Y.a,{children:Object(s.jsxs)(H.a,{variant:"tabs",children:[Object(s.jsx)(z.LinkContainer,{to:"/allRecipes",children:Object(s.jsx)(H.a.Link,{children:"Recipes"})}),Object(s.jsx)(z.LinkContainer,{to:"/add",children:Object(s.jsx)(H.a.Link,{children:"Add recipe"})}),Object(s.jsx)(z.LinkContainer,{to:"/about",children:Object(s.jsx)(H.a.Link,{children:"About"})})]})})]})})},M=function(){return Object(s.jsx)(b.a,{className:"bg",children:Object(s.jsxs)(d.BrowserRouter,{children:[Object(s.jsxs)(x.a,{className:"header",children:[Object(s.jsx)(a,{}),Object(s.jsx)(G,{})]}),Object(s.jsx)("hr",{}),Object(s.jsx)(D,{}),Object(s.jsx)(j,{})]})})};n(102),n(103);r.a.render(Object(s.jsx)(M,{}),document.getElementById("root"))},31:function(e,t,n){}},[[104,1,2]]]);
//# sourceMappingURL=main.69720a79.chunk.js.map