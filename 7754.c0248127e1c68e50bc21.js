"use strict";(self.webpackChunkpeopleforce_prospector=self.webpackChunkpeopleforce_prospector||[]).push([[7754],{7754:(I,p,c)=>{c.r(p),c.d(p,{ion_picker_internal:()=>f});var s=c(3652),d=c(989);const f=class{constructor(a){(0,s.r)(this,a),this.ionInputModeChange=(0,s.e)(this,"ionInputModeChange",7),this.useInputMode=!1,this.isInHighlightBounds=t=>{const{highlightEl:e}=this;if(!e)return!1;const n=e.getBoundingClientRect();return!(t.clientX<n.left||t.clientX>n.right||t.clientY<n.top||t.clientY>n.bottom)},this.onFocusOut=t=>{const{relatedTarget:e}=t;(!e||"ION-PICKER-COLUMN-INTERNAL"!==e.tagName&&e!==this.inputEl)&&this.exitInputMode()},this.onFocusIn=t=>{const{target:e}=t;if("ION-PICKER-COLUMN-INTERNAL"===e.tagName&&!this.actionOnClick){const n=e;n.numericInput?this.enterInputMode(n,!1):this.exitInputMode()}},this.onClick=()=>{const{actionOnClick:t}=this;t&&(t(),this.actionOnClick=void 0)},this.onPointerDown=t=>{const{useInputMode:e,inputModeColumn:n,el:o}=this;if(this.isInHighlightBounds(t))if(e)this.actionOnClick="ION-PICKER-COLUMN-INTERNAL"===t.target.tagName?n&&n===t.target?()=>{this.enterInputMode()}:()=>{this.enterInputMode(t.target)}:()=>{this.exitInputMode()};else{const i=1===o.querySelectorAll("ion-picker-column-internal.picker-column-numeric-input").length?t.target:void 0;this.actionOnClick=()=>{this.enterInputMode(i)}}else this.actionOnClick=()=>{this.exitInputMode()}},this.enterInputMode=(t,e=!0)=>{const{inputEl:n,el:o}=this;!n||!o.querySelector("ion-picker-column-internal.picker-column-numeric-input")||(this.useInputMode=!0,this.inputModeColumn=t,e?(this.destroyKeypressListener&&(this.destroyKeypressListener(),this.destroyKeypressListener=void 0),n.focus()):(o.addEventListener("keypress",this.onKeyPress),this.destroyKeypressListener=()=>{o.removeEventListener("keypress",this.onKeyPress)}),this.emitInputModeChange())},this.exitInputMode=()=>{const{inputEl:t,useInputMode:e}=this;!e||!t||(this.useInputMode=!1,this.inputModeColumn=void 0,t.blur(),t.value="",this.destroyKeypressListener&&(this.destroyKeypressListener(),this.destroyKeypressListener=void 0),this.emitInputModeChange())},this.onKeyPress=t=>{const{inputEl:e}=this;if(!e)return;const n=parseInt(t.key,10);Number.isNaN(n)||(e.value+=t.key,this.onInputChange())},this.selectSingleColumn=()=>{const{inputEl:t,inputModeColumn:e,singleColumnSearchTimeout:n}=this;if(!t||!e)return;const o=e.items;if(n&&clearTimeout(n),this.singleColumnSearchTimeout=setTimeout(()=>{t.value="",this.singleColumnSearchTimeout=void 0},1e3),t.value.length>=3){const l=t.value.substring(t.value.length-2);return t.value=l,void this.selectSingleColumn()}const r=o.find(({text:i})=>i.replace(/^0+/,"")===t.value);if(r)e.value=r.value;else if(2===t.value.length){const i=t.value.substring(t.value.length-1);t.value=i,this.selectSingleColumn()}},this.searchColumn=(t,e,n="start")=>{let o;const r="start"===n?/^0+/:/0$/;o=t.items.find(({text:i})=>i.replace(r,"")===e),o&&(t.value=o.value)},this.selectMultiColumn=()=>{const{inputEl:t,el:e}=this;if(!t)return;const n=Array.from(e.querySelectorAll("ion-picker-column-internal")).filter(u=>u.numericInput),o=n[0],r=n[1];let l,i=t.value;switch(i.length){case 1:this.searchColumn(o,i);break;case 2:const u=t.value.substring(0,1);i="0"===u||"1"===u?t.value:u,this.searchColumn(o,i),1===i.length&&(l=t.value.substring(t.value.length-1),this.searchColumn(r,l,"end"));break;case 3:const h=t.value.substring(0,1);i="0"===h||"1"===h?t.value.substring(0,2):h,this.searchColumn(o,i),l=t.value.substring(1===i.length?1:2),this.searchColumn(r,l,"end");break;case 4:const g=t.value.substring(0,1);i="0"===g||"1"===g?t.value.substring(0,2):g,this.searchColumn(o,i);const k=t.value.substring(1===i.length?1:2,t.value.length);this.searchColumn(r,k,"end");break;default:const C=t.value.substring(t.value.length-4);t.value=C,this.selectMultiColumn()}},this.onInputChange=()=>{const{useInputMode:t,inputEl:e,inputModeColumn:n}=this;!t||!e||(n?this.selectSingleColumn():this.selectMultiColumn())},this.emitInputModeChange=()=>{const{useInputMode:t,inputModeColumn:e}=this;this.ionInputModeChange.emit({useInputMode:t,inputModeColumn:e})}}componentWillLoad(){(0,d.g)(this.el).addEventListener("focusin",this.onFocusIn),(0,d.g)(this.el).addEventListener("focusout",this.onFocusOut)}render(){return(0,s.h)(s.H,{onPointerDown:a=>this.onPointerDown(a),onClick:()=>this.onClick()},(0,s.h)("input",{"aria-hidden":"true",tabindex:-1,inputmode:"numeric",type:"number",ref:a=>this.inputEl=a,onInput:()=>this.onInputChange(),onBlur:()=>this.exitInputMode()}),(0,s.h)("div",{class:"picker-before"}),(0,s.h)("div",{class:"picker-after"}),(0,s.h)("div",{class:"picker-highlight",ref:a=>this.highlightEl=a}),(0,s.h)("slot",null))}get el(){return(0,s.i)(this)}};f.style={ios:":host{display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:200px;direction:ltr;z-index:0}:host .picker-before,:host .picker-after{position:absolute;width:100%;z-index:1;pointer-events:none}:host .picker-before{left:0;top:0;height:83px}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host .picker-after{left:0;top:116px;height:84px}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host .picker-highlight{border-radius:8px;left:0;right:0;top:50%;bottom:0;margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;position:absolute;width:calc(100% - 16px);height:34px;-webkit-transform:translateY(-50%);transform:translateY(-50%);z-index:-1}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .picker-highlight{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}:host input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host ::slotted(ion-picker-column-internal:first-of-type){text-align:start}:host ::slotted(ion-picker-column-internal:last-of-type){text-align:end}:host .picker-before{background:-webkit-gradient(linear, left top, left bottom, color-stop(20%, var(--background, var(--ion-background-color, #fff))), to(rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8)));background:linear-gradient(to bottom, var(--background, var(--ion-background-color, #fff)) 20%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8) 100%)}:host .picker-after{background:-webkit-gradient(linear, left bottom, left top, color-stop(20%, var(--background, var(--ion-background-color, #fff))), to(rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8)));background:linear-gradient(to top, var(--background, var(--ion-background-color, #fff)) 20%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8) 100%)}:host .picker-highlight{background:var(--ion-color-step-150, #eeeeef)}",md:":host{display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:200px;direction:ltr;z-index:0}:host .picker-before,:host .picker-after{position:absolute;width:100%;z-index:1;pointer-events:none}:host .picker-before{left:0;top:0;height:83px}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host .picker-after{left:0;top:116px;height:84px}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host .picker-highlight{border-radius:8px;left:0;right:0;top:50%;bottom:0;margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;position:absolute;width:calc(100% - 16px);height:34px;-webkit-transform:translateY(-50%);transform:translateY(-50%);z-index:-1}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .picker-highlight{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}:host input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host ::slotted(ion-picker-column-internal:first-of-type){text-align:start}:host ::slotted(ion-picker-column-internal:last-of-type){text-align:end}:host .picker-before{background:-webkit-gradient(linear, left top, left bottom, color-stop(20%, var(--background, var(--ion-background-color, #fff))), color-stop(90%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0)));background:linear-gradient(to bottom, var(--background, var(--ion-background-color, #fff)) 20%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0) 90%)}:host .picker-after{background:-webkit-gradient(linear, left bottom, left top, color-stop(30%, var(--background, var(--ion-background-color, #fff))), color-stop(90%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0)));background:linear-gradient(to top, var(--background, var(--ion-background-color, #fff)) 30%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0) 90%)}"}}}]);
//# sourceMappingURL=7754.c0248127e1c68e50bc21.js.map