import{_ as a,o as s,c as i,F as r,f as l,e,t as c}from"./index-e3a6da98.js";const _={name:"SelectUsers",props:{type:String,users:Array},setup(){return{}}},p={key:0},h=["onClick"],g={style:{display:"flex","flex-direction":"row"}},m=["src"],y={style:{"margin-top":"15px","margin-left":"5px"}},u=e("div",{style:{background:"grey",width:"300px",height:"1px","margin-top":"5px"}},null,-1),x={key:1},v=["onClick"],f={style:{display:"flex","flex-direction":"row"}},k=["src"],S={style:{"margin-top":"15px","margin-left":"5px"}},w=e("div",{style:{background:"grey",width:"300px",height:"1px","margin-top":"5px"}},null,-1);function $(o,C,n,b,B,F){return s(),i("div",null,[n.type==="obs"?(s(),i("div",p,[(s(!0),i(r,null,l(n.users,t=>(s(),i("div",{key:t,style:{"margin-top":"10px"},onClick:d=>o.$emit("userSelect",t)},[e("div",g,[e("img",{src:t.avatar,width:"60",height:"60"},null,8,m),e("div",y,c(t.nom),1)]),u],8,h))),128))])):(s(),i("div",x,[(s(!0),i(r,null,l(n.users,t=>(s(),i("div",{key:t,style:{"margin-top":"10px"},onClick:d=>o.$emit("userSelect",t)},[e("div",f,[e("img",{src:t.avatar,width:"60",height:"60"},null,8,k),e("div",S,c(t.nom),1)]),w],8,v))),128))]))])}const A=a(_,[["render",$]]);export{A as S};