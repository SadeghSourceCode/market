import{a as f}from"./chunk-MQV4CJWY.js";import{h as l,j as m}from"./chunk-7HHI6YDF.js";import{a as d}from"./chunk-GIQTAER3.js";import"./chunk-L4ZBA2CZ.js";import{Aa as i,Ea as r,Oa as a,Wa as c,Xa as p,ab as s}from"./chunk-SX66N3MW.js";var u=class n{constructor(e,t,o){this._router=e;this._activatedRoute=t;this._coinEckoService=o}cryptoId;coinDetail={};ngOnInit(){this.cryptoId=this._activatedRoute.snapshot.params.id,this._coinEckoService.getCoinDetail(this.cryptoId).subscribe(e=>{e&&(this.coinDetail=e)})}onBackHandler(){this._router.navigate(["/"])}static \u0275fac=function(t){return new(t||n)(i(m),i(l),i(f))};static \u0275cmp=r({type:n,selectors:[["app-crypto-profile"]],decls:1,vars:2,consts:[[3,"actionButtonClicked","title","back"]],template:function(t,o){t&1&&(c(0,"app-header",0),s("actionButtonClicked",function(){return o.onBackHandler()}),p()),t&2&&a("title",o.coinDetail.name)("back",!0)},dependencies:[d],encapsulation:2})};export{u as CryptoProfileComponent};
