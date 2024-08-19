import{J as l,H as a}from"./index-CV8vgmQs.js";const n=l("client",{state:()=>({user:localStorage.getItem("wafaauth")?localStorage.getItem("wafaauth"):null,token:localStorage.getItem("wafatoken")?localStorage.getItem("wafatoken"):null,url:"https://www.developpeur-junior.com/api",ships:[],ship:[],bls:[],sumBl:[],blByCategory:[],holds:[]}),getters:{getUser:t=>t.user?JSON.parse(t.user):null,getToken:t=>t.token,getBlLength:t=>t.sumBl.length,getTotalMarchandise:t=>t.sumBl.reduce((s,o)=>s+o.sumTotal,0),getTotalMarchandiseOf:t=>t.sumBl.reduce((s,o)=>s+o.sumTotalOf,0)},actions:{csrf(){a.get("/sanctum/csrf-cookie")},async shipByUser(){this.ships=[],await this.csrf(),a.defaults.headers.common.Authorization=`Bearer ${this.getToken}`,a.get(this.url+"/ships/client/?id="+this.getUser.id).then(t=>{t.status==200&&(this.ships=t.data.data)}).catch(t=>{console.log(t)})},async ship(t){this.ship=[],await this.csrf(),a.defaults.headers.common.Authorization=`Bearer ${this.getToken}`,a.get(this.url+"/client/ship/?id="+t).then(s=>{s.status==200&&(this.ship=s.data.data[0])}).catch(s=>{console.log(s)})},async bls(){this.bls=[],this.csrf(),a.defaults.headers.common.Authorization=`Bearer ${this.getToken}`,a.get(this.url+"/client/bls/?id="+this.getUser.id).then(t=>{t.status==200&&(this.bls=t.data.data)}).catch(t=>{console.log(t)})},async holds(t){this.holds=[],this.csrf(),a.defaults.headers.common.Authorization=`Bearer ${this.getToken}`,a.get(this.url+"/client/holds/?id="+t).then(s=>{console.log(s),s.status==200&&(this.holds=s.data.data)}).catch(s=>{console.log(s)})},async blsByShip(t){this.bls=[],this.sumBl=[],this.blByCategory=[],await this.csrf(),a.defaults.headers.common.Authorization=`Bearer ${this.getToken}`,await a.get(this.url+"/bls/client/?shipId="+t).then(s=>{if(s.status===200){this.bls=s.data.data,this.bls.sort((i,e)=>i.marchandise.localeCompare(e.marchandise));const o=this.bls.reduce((i,e)=>(i[e.marchandise]||(i[e.marchandise]=[]),i[e.marchandise].push(e),i),{});this.blByCategory=Object.entries(o).map(([i,e])=>({marchandise:i,items:e})),this.sumByCategory(this.blByCategory)}}).catch(s=>{console.log(s)})},async sumByCategory(t){this.sumBl=[],t.length&&t.forEach(s=>{const o=s.items.reduce((e,h)=>h.date_reception!="non_recu"?e+h.tonnage_mt:e+0,0),i=s.items.reduce((e,h)=>h.date_reception=="non_recu"?e+h.tonnage_mt:e+0,0);this.sumBl.push({sumTotal:o,sumTotalOf:i,category:s.marchandise})})}}});export{n as u};
