import{d as n,s as r,a as s,b as i,o as c,f as d,g as e,G as o,x as u,l as _,u as p}from"./index.70a3808d.js";import{P as b}from"./pinia.6fd774a7.js";const g={class:"color-page"},m={class:"sebastia-content"},v={style:{"border-collapse":"collapse"},border:"1",bordercolor:"#fefefe"},f=e("tr",null,[e("td",{colspan:"2"},[e("div",{class:"table-title"}," SEBASTIA > SOUND ARCHIVE ")])],-1),h=["innerHTML"],y=["src"],S={class:"table-number"},k=e("td",{rowspan:"2"},[e("div",{class:"next-sound"},"> NEXT SOUND")],-1),x=e("tr",null,[e("td",null,[e("div",{class:"keyword"},"KEYWORD")])],-1),D=n({__name:"sebastia",setup(B){const a=b(),{getUserMsg:l,selectVideo:t}=r(a);return a.userMsg="red",_(),p(),s(!1),s(!1),s(),s(),s(),i(()=>{console.log(l.value,t.value)}),(E,M)=>(c(),d("div",g,[e("div",m,[e("table",v,[f,e("tr",null,[e("td",null,[e("div",{class:"sebastia-video",innerHTML:o(t).imagevideo},null,8,h)]),e("td",null,[e("div",null,[e("img",{src:`https://raw.githubusercontent.com/superBoyXdy/videobg/master/${o(t).imagekey}.png`,class:"sebastia-image",alt:""},null,8,y)])])]),e("tr",null,[e("td",null,[e("div",S,u(o(t).imagekey),1)]),k]),x])])]))}});export{D as default};
