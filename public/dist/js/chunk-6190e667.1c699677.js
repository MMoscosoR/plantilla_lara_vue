(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6190e667"],{4467:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"h-100 bg-plum-plate bg-animation"},[s("div",{staticClass:"d-flex h-100 justify-content-center align-items-center"},[s("b-col",{staticClass:"mx-auto app-login-box",attrs:{md:"8"}},[s("b-alert",{attrs:{show:e.form.hasSuccessMessage(),variant:"success",dismissible:""}},[e._v("\n                    "+e._s(e.form.getSuccessMessage())+"\n                ")]),s("b-alert",{attrs:{show:e.form.errors.hasMessage(),variant:"danger",dismissible:""}},[e._v("\n                    "+e._s(e.form.errors.getMessage())+"\n                ")]),s("div",{staticClass:"modal-dialog w-100 mx-auto"},[s("b-form",{attrs:{id:"send-email-form"},on:{submit:function(t){return t.preventDefault(),e.sendEmail(t)},keydown:function(t){return e.form.errors.clear()}}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-body"},[s("div",{staticClass:"h5 modal-title text-center"},[s("h4",{staticClass:"mt-2"},[s("div",[e._v(e._s(e.app.name))]),s("span",[e._v("Please enter your email.")])])]),s("b-form-group",{attrs:{id:"emailInputGroup","label-for":"email"}},[s("b-form-input",{attrs:{id:"email",type:"email",name:"email",placeholder:"Enter email..."},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),s("b-form-invalid-feedback",{attrs:{state:!e.form.errors.has("email")},domProps:{textContent:e._s(e.form.errors.get("email"))}})],1),s("div",{staticClass:"divider"})],1),s("div",{staticClass:"modal-footer clearfix"},[s("div",{staticClass:"float-right"},[s("b-button",{attrs:{id:"send-email",type:"submit",variant:"primary",size:"lg",disabled:e.form.errors.any()||e.form.isLoading()}},[e.form.isLoading()?s("b-spinner",{staticClass:"spinner",attrs:{small:""}}):e._e(),e._v("\n                                        Send Password Reset Link\n                                    ")],1)],1)])])])],1),s("div",{staticClass:"text-center text-white opacity-8 mt-3"},[e._v("\n                    Copyright © "+e._s(e.app.companyName)+" "+e._s(e.year)+"\n                ")])],1)],1)])])},r=[],i=s("dbcd"),n={data:function(){return{app:app,year:(new Date).getFullYear(),form:new i["a"]({email:""})}},methods:{sendEmail:function(){this.form.post("/api/password/email").catch((function(e){return console.error(e.message)}))}}},o=n,u=s("2877"),l=Object(u["a"])(o,a,r,!1,null,null,null);t["default"]=l.exports},dbcd:function(e,t,s){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var s=0;s<t.length;s++){var a=t[s];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function i(e,t,s){return t&&r(e.prototype,t),s&&r(e,s),e}s("ac6a"),s("456d");var n=function(){function e(){a(this,e),this.message="",this.errors={}}return i(e,[{key:"hasMessage",value:function(){return!!this.message&&this.any()}},{key:"getMessage",value:function(){return this.message}},{key:"has",value:function(e){return this.errors.hasOwnProperty(e)}},{key:"any",value:function(){return Object.keys(this.errors).length>0}},{key:"get",value:function(e){if(this.errors[e])return this.errors[e][0]}},{key:"record",value:function(e){this.message=e.message,this.errors=e.errors}},{key:"clear",value:function(e){e?delete this.errors[e]:(this.message="",this.errors={})}}]),e}(),o=function(){function e(t){for(var s in a(this,e),this.originalData=t,t)this[s]=t[s];this.errors=new n,this.successMessage="",this.loading=!1}return i(e,[{key:"isLoading",value:function(){return this.loading}},{key:"hasSuccessMessage",value:function(){return!!this.successMessage}},{key:"getSuccessMessage",value:function(){return this.successMessage}},{key:"data",value:function(){var e={};for(var t in this.originalData)e[t]=this[t];return e}},{key:"remove",value:function(e){e&&delete this.originalData[e]}},{key:"reset",value:function(){for(var e in this.originalData)this[e]="";this.errors.clear()}},{key:"post",value:function(e){return this.submit("post",e)}},{key:"put",value:function(e){return this.submit("put",e)}},{key:"patch",value:function(e){return this.submit("patch",e)}},{key:"delete",value:function(e){return this.submit("delete",e)}},{key:"submit",value:function(e,t){var s=this;return this.loading=!0,new Promise((function(a,r){axios[e](t,s.data()).then((function(e){s.onSuccess(e.data),a(e.data)})).catch((function(e){s.onFail(e.response.data),r(e.response.data)}))}))}},{key:"onSuccess",value:function(e){this.successMessage=e.message,this.reset(),this.loading=!1}},{key:"onFail",value:function(e){this.errors.record(e),this.loading=!1}}]),e}();t["a"]=o}}]);