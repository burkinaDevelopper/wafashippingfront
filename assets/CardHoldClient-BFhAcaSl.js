import{q as c,o as t,c as d,a as s,t as o,F as l,p as i,e as n}from"./index-CIabCGaw.js";const _={class:"vertical-align"},h={class:"p-2 border"},p={class:"ms-2 d-flex justify-content-between"},m={class:"p-2 border"},g={class:"p-2 border"},b={class:"p-2 border"},u={class:"p-0 border"},v={key:0},f={__name:"CardHoldClient",props:["hold"],setup(r){const e=r;return(x,C)=>(t(),d("div",_,[s("div",h,[s("strong",p,[s("span",null,o(e.hold.name)+"- "+o(e.hold.type),1)])]),s("div",m,o(e.hold.Total_cargo),1),s("div",g,o(e.hold.Total_discharged),1),s("div",b,o((e.hold.Total_cargo-e.hold.Total_discharged).toFixed(3)),1),s("div",u,[e.hold.holdHistories.length?(t(),d("div",v,[(t(!0),d(l,null,i(e.hold.holdHistories,a=>(t(),d("p",{key:a.id,class:"card-text mt-0 mb-0 fs-6 border heighborder"},o(a.discharged)+"      ",1))),128))])):n("",!0)])]))}},y=c(f,[["__scopeId","data-v-a5156ce0"]]);export{y as C};
