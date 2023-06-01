import{_ as x,N as L,r as h,s as m,a as w,o as t,c as _,b as u,e,t as n,j as y,d as a,F as k,f as g,p as N,i as C}from"./index-e3a6da98.js";const T={name:"UsuariInfo",components:{NavBar:L},setup(){let o=window.location.href.split("/");h(o[o.length-1]);let c=h("timeline"),i=h([]),v=h([]);function f(p){m("usuaris/"+p+"/","GET","").then(d=>this.userLogged=d)}return{userLogged:v,allUsers:i,mostrar:c,updateData:f}},mounted(){let o=window.location.href.split("/"),c=o[o.length-1];m("usuaris/","GET","").then(i=>this.allUsers=i),m("usuaris/"+c+"/","GET","").then(i=>this.userLogged=i)}},l=r=>(N("data-v-a2ca3850"),r=r(),C(),r),I={class:"profile centered",style:{"margin-left":"50px"}},U={class:"profile-bar"},B={key:0},D=["src"],S={key:1},E=["src"],V={class:"profile-data"},j={key:0,class:"not-full-name"},z={key:1,class:"not-full-name"},F=l(()=>e("p",null,"Nom no trobat",-1)),G=[F],W={key:2,class:"username"},q={key:3,class:"username"},A=l(()=>e("p",null,"@UsernameNoTrobat",-1)),Y=[A],H=l(()=>e("div",{class:"profile-stats"},[e("div",{class:"stat"})],-1)),J={key:2,class:"profile-quote"},K={class:"main"},M={style:{width:"450px","border-collapse":"separate","border-spacing":"0px 5px"}},O=l(()=>e("td",null,[e("h1",null," ")],-1)),P=l(()=>e("h1",null,[a(" "),e("u",null,"Timeline"),a("   ")],-1)),Q=[P],R=l(()=>e("h1",null," Timeline   ",-1)),X=[R],Z=l(()=>e("h1",null,[a(" "),e("u",null,"Watched"),a("   ")],-1)),$=[Z],ee=l(()=>e("h1",null," Watched   ",-1)),se=[ee],te={key:0},_e={key:1},ie=l(()=>e("h1",null,[a(" "),e("u",null,"Token"),a(" ")],-1)),oe=[ie],ne=l(()=>e("h1",null," Token ",-1)),ae=[ne],le=l(()=>e("p",{style:{color:"darkgrey"}},"______________________________________________________________________________",-1)),re={key:0,class:"watched"},de={class:"issues-table",style:{width:"100%","border-collapse":"separate","border-spacing":"0 10px"}},ce={style:{display:"flex","align-items":"center"}},he={key:0,style:{display:"flex","align-items":"center"}},ue=["src"],ye={key:1,style:{display:"flex","align-items":"center"}},pe=["src"],me={key:2},ke=["href"],ge=l(()=>e("p",{style:{color:"darkgrey"}},"______________________________________________________________________________",-1)),ve={key:1,class:"token"},fe={key:2,class:"timeline"},we={class:"issue-page",style:{width:"100%"}},be={class:"issues-table",style:{width:"100%","border-collapse":"separate","border-spacing":"0 10px"}},xe={class:"row table-main",style:{"background-color":"white"}},Le={style:{display:"flex","align-items":"center"}},Ne=["src"],Ce={style:{display:"inline-block"}},Te=["href"],Ie={key:0,style:{display:"inline"}},Ue={key:1,style:{display:"inline"}},Be={key:0,style:{display:"inline"}},De={key:1,style:{display:"inline"}},Se={key:2,style:{display:"inline"}},Ee={key:0,style:{display:"inline"}},Ve={key:1,style:{display:"inline"}},je={key:3,style:{display:"inline"}},ze={key:0,style:{display:"inline"}},Fe={key:1,style:{display:"inline"}},Ge={key:4,style:{display:"inline"}},We={key:0,style:{display:"inline"}},qe={key:1,style:{display:"inline"}},Ae={key:5,style:{display:"inline"}},Ye={key:0,style:{display:"inline"}},He={key:1,style:{display:"inline"}},Je={key:2,style:{display:"inline"}},Ke={key:3,style:{display:"inline"}},Me=l(()=>e("span",{style:{display:"inline"}},"issue ",-1)),Oe={key:6},Pe=["href"],Qe={key:7},Re=l(()=>e("p",null," ",-1)),Xe={style:{color:"darkgrey","font-size":"15px"}},Ze=l(()=>e("p",{style:{color:"darkgrey"}},"__________________________________________________________________________________________",-1)),$e={class:"timeline-wrapper",style:{"margin-left":"30px",width:"130px"}},es=l(()=>e("h1",{style:{"white-space":"nowrap"}},"Your team",-1)),ss=["href","onClick"],ts=["src"];function _s(r,o,c,i,v,f){const p=w("NavBar"),d=w("font-awesome-icon");return t(),_("div",null,[u(p),e("div",I,[e("section",U,[i.userLogged.avatar?(t(),_("div",B,[e("img",{src:i.userLogged.avatar,width:"200",height:"200"},null,8,D)])):(t(),_("div",S,[e("img",{src:"https://issuestorage.s3.us-west-2.amazonaws.com/media/avatar/unnamed.png",width:"200",height:"200"},null,8,E)])),e("div",V,[i.userLogged.nom?(t(),_("h1",j,[e("p",null,n(i.userLogged.nom),1)])):(t(),_("h1",z,G)),i.userLogged.username?(t(),_("div",W,[e("p",null,"@"+n(i.userLogged.username),1)])):(t(),_("div",q,Y))]),H,i.userLogged.bio?(t(),_("div",J,[e("span",null,n(i.userLogged.bio),1)])):y("",!0)]),e("div",K,[e("div",null,[e("table",M,[e("tr",null,[O,e("td",null,[e("h1",{onClick:o[0]||(o[0]=s=>i.mostrar="timeline"),style:{cursor:"default"}},[u(d,{icon:"lock"})])]),e("td",null,[i.mostrar==="timeline"?(t(),_("a",{key:0,onClick:o[1]||(o[1]=s=>i.mostrar="timeline"),style:{cursor:"default"}},Q)):(t(),_("a",{key:1,onClick:o[2]||(o[2]=s=>i.mostrar="timeline"),style:{cursor:"default"}},X))]),e("td",null,[e("a",{onClick:o[3]||(o[3]=s=>i.mostrar="watched"),style:{cursor:"default"}},[e("h1",null,[a(" "),u(d,{icon:"lock"})])])]),e("td",null,[i.mostrar==="watched"?(t(),_("a",{key:0,onClick:o[4]||(o[4]=s=>i.mostrar="watched"),style:{cursor:"default"}},$)):(t(),_("a",{key:1,onClick:o[5]||(o[5]=s=>i.mostrar="watched"),style:{cursor:"default"}},se))]),i.userLogged.token?(t(),_("td",te,[e("a",{onClick:o[6]||(o[6]=s=>i.mostrar="token"),style:{cursor:"default"}},[e("h1",null,[u(d,{icon:"lock"})])])])):y("",!0),i.userLogged.token?(t(),_("td",_e,[i.mostrar==="token"?(t(),_("a",{key:0,onClick:o[7]||(o[7]=s=>i.mostrar="token"),style:{cursor:"default"}},oe)):(t(),_("a",{key:1,onClick:o[8]||(o[8]=s=>i.mostrar="token"),style:{cursor:"default"}},ae))])):y("",!0)])]),le,e("div",null,[i.mostrar==="watched"?(t(),_("section",re,[e("table",de,[(t(!0),_(k,null,g(i.userLogged.observats,s=>(t(),_("tr",null,[e("td",null,[e("div",ce,[s.assignacio?(t(),_("div",he,[e("img",{src:s.assignacio.avatar,width:"40",height:"40",style:{"border-radius":"50%","margin-right":"5px"}},null,8,ue)])):(t(),_("div",ye,[e("img",{src:"https://issuestorage.s3.us-west-2.amazonaws.com/media/avatar/unnamed.png",width:"40",height:"40",style:{"border-radius":"50%","margin-right":"5px"}},null,8,pe)])),s.assignacio?(t(),_("span",me,n(s.assignacio.username)+" ",1)):y("",!0),e("a",{href:"/#/edit/"+s.id},"#"+n(s.id)+" "+n(s.subject),9,ke),a("  "+n(s.estat),1)]),ge])]))),256))])])):i.userLogged.token&&i.mostrar==="token"?(t(),_("section",ve,[e("p",null,"Token "+n(i.userLogged.token),1)])):(t(),_("section",fe,[e("div",we,[e("table",be,[(t(!0),_(k,null,g(i.userLogged.logs,s=>(t(),_("tr",xe,[e("td",null,[e("div",Le,[e("img",{src:s.usuari.avatar,width:"40",height:"40",style:{"border-radius":"50%","margin-right":"5px"}},null,8,Ne),e("div",Ce,[e("a",{onClick:o[9]||(o[9]=b=>i.updateData(r.usuari.id)),href:"/#/usuari/"+s.usuari.id},n(s.usuari.username)+"  ",9,Te),s.tipus==="Creada"?(t(),_("span",Ie,"ha creat l'")):s.tipus==="Nou attachment"?(t(),_("span",Ue,[a("ha afegit el fitxer "),s.valor_nou?(t(),_("a",Be,n(s.valor_nou),1)):(t(),_("a",De,"No definit")),a(" al ")])):s.tipus==="Attachment esborrat"?(t(),_("span",Se,[a("ha esborrat el fitxer "),s.valor_previ?(t(),_("span",Ee,n(s.valor_previ),1)):(t(),_("span",Ve,"No definit")),a(" al ")])):s.tipus==="Tag afegida"?(t(),_("span",je,[a("ha afegit el tag "),s.valor_nou?(t(),_("a",ze,n(s.valor_nou),1)):(t(),_("a",Fe,"No definit")),a(" al ")])):s.tipus==="Tag esborrada"?(t(),_("span",Ge,[a("ha esborrat el tag "),s.valor_previ?(t(),_("span",We,n(s.valor_previ),1)):(t(),_("span",qe,"No definit")),a(" al ")])):(t(),_("span",Ae,[a("ha canviat l'atribut "+n(s.tipus)+" de ",1),s.valor_nou?(t(),_("a",Ye,n(s.valor_nou),1)):(t(),_("a",He,"No definit")),a(" a "),s.valor_previ?(t(),_("span",Je,n(s.valor_previ),1)):(t(),_("span",Ke,"No definit")),a(" del ")])),Me,s.issue?(t(),_("span",Oe,[e("a",{href:"/#/edit/"+s.issue.id},"#"+n(s.issue.id)+" "+n(s.issue.subject),9,Pe)])):(t(),_("span",Qe,"esborrat"))])]),Re,e("p",Xe,n(new Date(s.data).toLocaleString()),1),Ze])]))),256))])])]))])])]),e("div",$e,[es,e("div",null,[(t(!0),_(k,null,g(i.allUsers,s=>(t(),_("a",{href:"/#/usuari/"+s.id,onClick:b=>i.updateData(s.id)},[e("img",{src:s.avatar,width:"32",height:"32",style:{"border-radius":"50%","margin-right":"5px"}},null,8,ts)],8,ss))),256))])])])])}const os=x(T,[["render",_s],["__scopeId","data-v-a2ca3850"]]);export{os as default};