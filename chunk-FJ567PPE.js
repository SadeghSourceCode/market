import{a as be}from"./chunk-UUIEUFCO.js";import{a as Q,i as ye,k as Ce,p as Ve,q as De}from"./chunk-XALAGNMC.js";import{$ as L,$a as M,Aa as s,Ea as fe,Fa as z,Ga as g,Ia as D,Ja as pe,La as ge,N as U,Oa as Z,P as H,Pa as me,Qa as Y,R as f,Ra as X,Va as d,Wa as h,Xa as b,Ya as K,_ as ce,a,aa as $,ab as A,b as u,ba as de,bb as _e,fa as N,fb as m,gb as ve,hb as E,ib as J,j as se,ka as W,m as ae,ma as O,mb as _,nb as v,qa as he,r as le,w as ue,wa as l,wb as P,xb as p,za as q}from"./chunk-GWAPPGSB.js";var Se=(()=>{class n{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,i){this._renderer=t,this._elementRef=i}setProperty(t,i){this._renderer.setProperty(this._elementRef.nativeElement,t,i)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static \u0275fac=function(i){return new(i||n)(s(q),s(W))};static \u0275dir=g({type:n})}return n})(),Ye=(()=>{class n extends Se{static \u0275fac=(()=>{let t;return function(r){return(t||(t=de(n)))(r||n)}})();static \u0275dir=g({type:n,features:[D]})}return n})(),xe=new f("");var Xe={provide:xe,useExisting:U(()=>j),multi:!0};function Ke(){let n=Q()?Q().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var Je=new f(""),j=(()=>{class n extends Se{_compositionMode;_composing=!1;constructor(t,i,r){super(t,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!Ke())}writeValue(t){let i=t??"";this.setProperty("value",i)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static \u0275fac=function(i){return new(i||n)(s(q),s(W),s(Je,8))};static \u0275dir=g({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&M("input",function(c){return r._handleInput(c.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(c){return r._compositionEnd(c.target.value)})},standalone:!1,features:[J([Xe]),D]})}return n})();var Qe=new f(""),et=new f("");function Ne(n){return n!=null}function Oe(n){return ge(n)?ae(n):n}function Pe(n){let e={};return n.forEach(t=>{e=t!=null?a(a({},e),t):e}),Object.keys(e).length===0?null:e}function ke(n,e){return e.map(t=>t(n))}function tt(n){return!n.validate}function Te(n){return n.map(e=>tt(e)?e:t=>e.validate(t))}function nt(n){if(!n)return null;let e=n.filter(Ne);return e.length==0?null:function(t){return Pe(ke(t,e))}}function Re(n){return n!=null?nt(Te(n)):null}function it(n){if(!n)return null;let e=n.filter(Ne);return e.length==0?null:function(t){let i=ke(t,e).map(Oe);return ue(i).pipe(le(Pe))}}function Ge(n){return n!=null?it(Te(n)):null}function Me(n,e){return n===null?[e]:Array.isArray(n)?[...n,e]:[n,e]}function je(n){return n._rawValidators}function Be(n){return n._rawAsyncValidators}function ee(n){return n?Array.isArray(n)?n:[n]:[]}function T(n,e){return Array.isArray(n)?n.includes(e):n===e}function Ae(n,e){let t=ee(e);return ee(n).forEach(r=>{T(t,r)||t.push(r)}),t}function Ee(n,e){return ee(e).filter(t=>!T(n,t))}var te=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Re(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Ge(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}};var x=class extends te{_parent=null;name=null;valueAccessor=null},ne=class{_cd;constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},rt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},zt=u(a({},rt),{"[class.ng-submitted]":"isSubmitted"}),Ue=(()=>{class n extends ne{constructor(t){super(t)}static \u0275fac=function(i){return new(i||n)(s(x,2))};static \u0275dir=g({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&me("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[D]})}return n})();var w="VALID",k="INVALID",y="PENDING",F="DISABLED",V=class{},R=class extends V{value;source;constructor(e,t){super(),this.value=e,this.source=t}},I=class extends V{pristine;source;constructor(e,t){super(),this.pristine=e,this.source=t}},S=class extends V{touched;source;constructor(e,t){super(),this.touched=e,this.source=t}},C=class extends V{status;source;constructor(e,t){super(),this.status=e,this.source=t}};function ot(n){return(B(n)?n.validators:n)||null}function st(n){return Array.isArray(n)?Re(n):n||null}function at(n,e){return(B(e)?e.asyncValidators:n)||null}function lt(n){return Array.isArray(n)?Ge(n):n||null}function B(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}var ie=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(e,t){this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return p(this.statusReactive)}set status(e){p(()=>this.statusReactive.set(e))}_status=P(()=>this.statusReactive());statusReactive=O(void 0);get valid(){return this.status===w}get invalid(){return this.status===k}get pending(){return this.status==y}get disabled(){return this.status===F}get enabled(){return this.status!==F}errors;get pristine(){return p(this.pristineReactive)}set pristine(e){p(()=>this.pristineReactive.set(e))}_pristine=P(()=>this.pristineReactive());pristineReactive=O(!0);get dirty(){return!this.pristine}get touched(){return p(this.touchedReactive)}set touched(e){p(()=>this.touchedReactive.set(e))}_touched=P(()=>this.touchedReactive());touchedReactive=O(!1);get untouched(){return!this.touched}_events=new se;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Ae(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Ae(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Ee(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Ee(e,this._rawAsyncValidators))}hasValidator(e){return T(this._rawValidators,e)}hasAsyncValidator(e){return T(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(u(a({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new S(!0,i))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:i})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,i),t&&e.emitEvent!==!1&&this._events.next(new S(!1,i))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(u(a({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new I(!1,i))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,i),t&&e.emitEvent!==!1&&this._events.next(new I(!0,i))}markAsPending(e={}){this.status=y;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new C(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(u(a({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=F,this.errors=null,this._forEachChild(r=>{r.disable(u(a({},e),{onlySelf:!0}))}),this._updateValue();let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new R(this.value,i)),this._events.next(new C(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(u(a({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=w,this._forEachChild(i=>{i.enable(u(a({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(u(a({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e,t){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===w||this.status===y)&&this._runAsyncValidator(i,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new R(this.value,t)),this._events.next(new C(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(u(a({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?F:w}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=y,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let i=Oe(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((i,r)=>i&&i._find(r),this)}getError(e,t){let i=t?this.get(t):this;return i&&i.errors?i.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,i){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||i)&&this._events.next(new C(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,i)}_initObservables(){this.valueChanges=new N,this.statusChanges=new N}_calculateStatus(){return this._allControlsDisabled()?F:this.errors?k:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(y)?y:this._anyControlsHaveStatus(k)?k:w}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),r&&this._events.next(new I(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new S(this.touched,t)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t)}_onDisabledChange=[];_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){B(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=st(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=lt(this._rawAsyncValidators)}};var He=new f("",{providedIn:"root",factory:()=>re}),re="always";function ut(n,e,t=re){dt(n,e),e.valueAccessor.writeValue(n.value),(n.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(n.disabled),ft(n,e),gt(n,e),pt(n,e),ct(n,e)}function we(n,e,t=!0){let i=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(i),e.valueAccessor.registerOnTouched(i)),ht(n,e),n&&(e._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function G(n,e){n.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function ct(n,e){if(e.valueAccessor.setDisabledState){let t=i=>{e.valueAccessor.setDisabledState(i)};n.registerOnDisabledChange(t),e._registerOnDestroy(()=>{n._unregisterOnDisabledChange(t)})}}function dt(n,e){let t=je(n);e.validator!==null?n.setValidators(Me(t,e.validator)):typeof t=="function"&&n.setValidators([t]);let i=Be(n);e.asyncValidator!==null?n.setAsyncValidators(Me(i,e.asyncValidator)):typeof i=="function"&&n.setAsyncValidators([i]);let r=()=>n.updateValueAndValidity();G(e._rawValidators,r),G(e._rawAsyncValidators,r)}function ht(n,e){let t=!1;if(n!==null){if(e.validator!==null){let r=je(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(c=>c!==e.validator);o.length!==r.length&&(t=!0,n.setValidators(o))}}if(e.asyncValidator!==null){let r=Be(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(c=>c!==e.asyncValidator);o.length!==r.length&&(t=!0,n.setAsyncValidators(o))}}}let i=()=>{};return G(e._rawValidators,i),G(e._rawAsyncValidators,i),t}function ft(n,e){e.valueAccessor.registerOnChange(t=>{n._pendingValue=t,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&Le(n,e)})}function pt(n,e){e.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&Le(n,e),n.updateOn!=="submit"&&n.markAsTouched()})}function Le(n,e){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function gt(n,e){let t=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};n.registerOnChange(t),e._registerOnDestroy(()=>{n._unregisterOnChange(t)})}function mt(n,e){if(!n.hasOwnProperty("model"))return!1;let t=n.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function _t(n){return Object.getPrototypeOf(n.constructor)===Ye}function vt(n,e){if(!e)return null;Array.isArray(e);let t,i,r;return e.forEach(o=>{o.constructor===j?t=o:_t(o)?i=o:r=o}),r||i||t||null}function Fe(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function Ie(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var $e=class extends ie{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(e=null,t,i){super(ot(t),at(i,t)),this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),B(t)&&(t.nonNullable||t.initialValueIsDefault)&&(Ie(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Fe(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Fe(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Ie(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var We=new f(""),yt={provide:x,useExisting:U(()=>oe)},oe=(()=>{class n extends x{_ngModelWarningConfig;callSetDisabledState;viewModel;form;set isDisabled(t){}model;update=new N;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(t,i,r,o,c){super(),this._ngModelWarningConfig=o,this.callSetDisabledState=c,this._setValidators(t),this._setAsyncValidators(i),this.valueAccessor=vt(this,r)}ngOnChanges(t){if(this._isControlChanged(t)){let i=t.form.previousValue;i&&we(i,this,!1),ut(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}mt(t,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&we(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_isControlChanged(t){return t.hasOwnProperty("form")}static \u0275fac=function(i){return new(i||n)(s(Qe,10),s(et,10),s(xe,10),s(We,8),s(He,8))};static \u0275dir=g({type:n,selectors:[["","formControl",""]],inputs:{form:[0,"formControl","form"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],standalone:!1,features:[J([yt]),D,ce]})}return n})();var Ct=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=z({type:n});static \u0275inj=H({})}return n})();var qe=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:We,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:He,useValue:t.callSetDisabledState??re}]}}static \u0275fac=function(i){return new(i||n)};static \u0275mod=z({type:n});static \u0275inj=H({imports:[Ct]})}return n})();function Dt(n,e){if(n&1){let t=K();d(0,"div",5),M("click",function(){L(t);let r=A();return $(r.copyToClipboard(r.stopLossPrice))}),d(1,"div",6)(2,"span",7),m(3),_(4,"translate"),h(),d(5,"div",8)(6,"span",9),m(7),h(),b(8,"span"),h()()()}if(n&2){let t=A();l(3),E(" ",v(4,4,"STOP_LOSSE")," "),l(4),E(" ",t.stopLossPrice.toString()," "),l(),Y("icon "+(t.coppiedText===t.stopLossPrice&&t.coppiedText?"check-circle text-green-500":"copy text-gray-500"))}}function bt(n,e){if(n&1){let t=K();d(0,"div",5),M("click",function(){L(t);let r=A();return $(r.copyToClipboard(r.profitPrice))}),d(1,"div",6)(2,"span",7),m(3),_(4,"translate"),h(),d(5,"div",8)(6,"span",10),m(7),h(),b(8,"span"),h()()()}if(n&2){let t=A();l(3),E(" ",v(4,4,"STOP_PROFIT")," "),l(4),E(" ",t.profitPrice.toString()," "),l(),Y("icon "+(t.coppiedText===t.profitPrice&&t.coppiedText?"check-circle text-green-500":"copy text-gray-500"))}}var ze=class n{constructor(e){this.platformId=e;this.priceControl.valueChanges.subscribe(t=>{t===null||isNaN(Number(t))?this.priceControl.setValue(""):(this.calculateStopLoss(),this.calculateProfit())})}priceControl=new $e("");stopLossPrice;profitPrice;coppiedText;calculateProfit(){let e=Number(this.priceControl.value),t=e*.1;this.profitPrice=e+t}calculateStopLoss(){let e=Number(this.priceControl.value);this.stopLossPrice=e*.9}copyToClipboard(e){Ce(this.platformId)&&navigator.clipboard.writeText(e.toString()).then(()=>{this.coppiedText=e,setTimeout(()=>{this.coppiedText=0},3e3)},t=>{console.error("Could not copy text: ",t)})}static \u0275fac=function(t){return new(t||n)(s(he))};static \u0275cmp=fe({type:n,selectors:[["app-calculate"]],decls:11,vars:13,consts:[[1,"w-full","px-4","flex","flex-wrap"],[1,"w-full",3,"title","back"],[1,"w-full","my-4","p-4","rounded-2xl"],["type","text","id","price","name","price","autocomplete","off",1,"mt-3","w-full",3,"placeholder","formControl"],[1,"w-full","mt-4","cursor-pointer"],[1,"w-full","mt-4","cursor-pointer",3,"click"],[1,"w-full","flex","flex-wrap","align-center","justify-between"],[1,"text-lg","font-medium","dir-rtl"],[1,"flex","justify-end","gap-2","items-center"],[1,"font-medium","text-red-500"],[1,"font-medium","text-green-500"]],template:function(t,i){t&1&&(d(0,"div",0),b(1,"app-header",1),_(2,"translate"),d(3,"div",2)(4,"label"),m(5),_(6,"translate"),h(),b(7,"input",3),_(8,"translate"),pe(9,Dt,9,6,"div",4)(10,bt,9,6,"div",4),h()()),t&2&&(l(),Z("title",v(2,7,"CALCULATE_HEADER"))("back",!0),l(4),ve(v(6,9,"BUY_PRICE")),l(2),_e("placeholder",v(8,11,"INSERT_PRICE")),Z("formControl",i.priceControl),l(2),X(i.stopLossPrice?9:-1),l(),X(i.profitPrice?10:-1))},dependencies:[ye,be,De,Ve,qe,j,Ue,oe],encapsulation:2})};export{ze as CalculateComponent};
