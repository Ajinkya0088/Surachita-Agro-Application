(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{"4cNi":function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class e{}var i=u("pMnS"),s=u("MKJQ"),r=u("sZkV"),b=u("SVse"),o=u("iInd"),a=u("SmdQ");class h{constructor(l,n,u){this.router=l,this.userData=n,this.http=u,this.user={username:"",password:"",name:"",age:"",members_count:0,gender:"",phonenumber:"",members:[]},this.submitted=!1,this.password="",this.members=[],this.message="",this.flag=!1,this.flag1=!1,this.flag2=!1,this.flag3=!1,this.flag4=!1,this.flag5=!1,this.flag6=!1,this.flag7=!1,this.flag8=!1,this.flag9=!1,this.flag10=!1,this.f=!1,this.agree="",this.i=0}onSignup(l){this.submitted=!0,l.valid&&(this.user.members=this.members,this.user={name:"",username:"",password:"",age:"",members_count:0,gender:"",phonenumber:"",members:[]},this.userData.signup(this.user.username),this.router.navigateByUrl("/login"))}change(l){for(console.log(l),this.members=[],this.i=0;this.i<this.user.members_count;this.i++)this.members.push({name:"",age:"",gender:""})}}var g=u("IheW"),c=t.nb({encapsulation:0,styles:[[".signup-logo[_ngcontent-%COMP%]{padding:20px 0;min-height:200px;text-align:center}.signup-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:150px}.list[_ngcontent-%COMP%]{margin-bottom:0}.label[_ngcontent-%COMP%]{font-size:1.5em}.label1[_ngcontent-%COMP%]{font-size:1.2em}"]],data:{}});function m(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,11,"ion-header",[],null,null,null,s.V,s.n)),t.ob(1,49152,null,0,r.A,[t.h,t.k,t.x],null,null),(l()(),t.pb(2,0,null,0,9,"ion-toolbar",[["color","tertiary"]],null,null,null,s.pb,s.H)),t.ob(3,49152,null,0,r.yb,[t.h,t.k,t.x],{color:[0,"color"]},null),(l()(),t.pb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,s.K,s.c)),t.ob(5,49152,null,0,r.k,[t.h,t.k,t.x],null,null),(l()(),t.pb(6,0,null,0,1,"ion-menu-button",[],null,null,null,s.cb,s.v)),t.ob(7,49152,null,0,r.Q,[t.h,t.k,t.x],null,null),(l()(),t.pb(8,0,null,0,3,"ion-title",[],null,null,null,s.nb,s.F)),t.ob(9,49152,null,0,r.wb,[t.h,t.k,t.x],null,null),(l()(),t.pb(10,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),t.Eb(-1,null,["\u0928\u094b\u0902\u0926\u0923\u0940"])),(l()(),t.pb(12,0,null,null,13,"ion-content",[],null,null,null,s.Q,s.i)),t.ob(13,49152,null,0,r.t,[t.h,t.k,t.x],null,null),(l()(),t.pb(14,0,null,0,11,"div",[["size","4"]],null,null,null,null,null)),(l()(),t.pb(15,0,null,null,1,"div",[["class","signup-logo"]],null,null,null,null,null)),(l()(),t.pb(16,0,null,null,0,"img",[["alt","Ionic Logo"],["src","assets/img/about/surachita.jpeg"]],null,null,null,null,null)),(l()(),t.pb(17,0,null,null,2,"div",[["align","center"]],null,null,null,null,null)),(l()(),t.pb(18,0,null,null,1,"iframe",[["frameborder","0"],["height","900px"],["marginheight","0"],["marginwidth","0"],["src","https://docs.google.com/forms/d/e/1FAIpQLSftm8VFH0Yzhhma5nvnVwKYmiBmvkhHEOVfJEFyzFyBbjIjrQ/viewform?embedded=true"],["width","100%"]],null,null,null,null,null)),(l()(),t.Eb(-1,null,["Loading\u2026 "])),(l()(),t.pb(20,0,null,null,5,"div",[["class","ion-text-center"]],null,null,null,null,null)),(l()(),t.pb(21,0,null,null,4,"a",[["routerLink","/crop-list"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Ab(l,22).onClick(u)&&e),"click"===n&&(e=!1!==t.Ab(l,23).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e}),null,null)),t.ob(22,737280,null,0,r.Gb,[b.g,r.Db,t.k,o.m,[2,o.n]],null,null),t.ob(23,671744,null,0,o.p,[o.m,o.a,b.g],{routerLink:[0,"routerLink"]},null),(l()(),t.pb(24,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Eb(-1,null,["Already register???"]))],(function(l,n){l(n,3,0,"tertiary"),l(n,22,0),l(n,23,0,"/crop-list")}),(function(l,n){l(n,21,0,t.Ab(n,23).target,t.Ab(n,23).href)}))}function p(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,1,"page-signup",[],null,null,null,m,c)),t.ob(1,49152,null,0,h,[o.m,a.a,g.c],null,null)],null,null)}var d=t.lb("page-signup",h,p,{},{},[]),f=u("s7LF");class y{}u.d(n,"SignUpModuleNgFactory",(function(){return k}));var k=t.mb(e,[],(function(l){return t.xb([t.yb(512,t.j,t.X,[[8,[i.a,d]],[3,t.j],t.v]),t.yb(4608,b.k,b.j,[t.s,[2,b.r]]),t.yb(4608,f.l,f.l,[]),t.yb(4608,r.b,r.b,[t.x,t.g]),t.yb(4608,r.Cb,r.Cb,[r.b,t.j,t.p]),t.yb(4608,r.Fb,r.Fb,[r.b,t.j,t.p]),t.yb(1073742336,b.b,b.b,[]),t.yb(1073742336,f.k,f.k,[]),t.yb(1073742336,f.b,f.b,[]),t.yb(1073742336,r.Ab,r.Ab,[]),t.yb(1073742336,o.q,o.q,[[2,o.v],[2,o.m]]),t.yb(1073742336,y,y,[]),t.yb(1073742336,e,e,[]),t.yb(1024,o.k,(function(){return[[{path:"",component:h}]]}),[])])}))}}]);