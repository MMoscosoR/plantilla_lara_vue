(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d98fce0"],{"1a01":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-page-title"},[n("div",{staticClass:"page-title-wrapper"},[n("div",{staticClass:"page-title-heading"},[n("div",{staticClass:"page-title-icon"},[n("i",{class:e.icon})]),n("div",[e._v("\n        "+e._s(e.heading)+"\n        "),n("div",{staticClass:"page-title-subheading"},[e._v("\n          "+e._s(e.subheading)+"\n        ")])])]),n("div",{staticClass:"page-title-actions"},[e.noCreateNew?e._e():n("button",{staticClass:"btn-shadow d-inline-flex align-items-center btn btn-success",attrs:{type:"button"},on:{click:e.onCreateNew}},[n("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:"plus"}}),e._v("\n        Create New\n      ")],1)])])])},s=[],i=n("ecee"),r=n("c074"),c=n("ad3d");i["c"].add(r["F"]);var o={components:{"font-awesome-icon":c["a"]},props:{icon:String,heading:String,subheading:String,noCreateNew:Boolean},methods:{onCreateNew:function(){this.$emit("create-new")}}},l=o,u=n("2877"),d=Object(u["a"])(l,a,s,!1,null,null,null);t["a"]=d.exports},"4dde":function(e,t,n){"use strict";t["a"]=function(e){if(e){var t=new Date(e);return t.toLocaleDateString()+" "+t.toLocaleTimeString()}return"N/A"}},"8aef":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("page-title",{attrs:{heading:e.heading,icon:e.icon,"no-create-new":""}}),n("b-alert",{attrs:{show:""!==e.successMessage,variant:"success",dismissible:""}},[e._v("\n    "+e._s(e.successMessage)+"\n  ")]),n("b-card",{staticClass:"main-card mb-4"},[n("datatable",{ref:"clientsTable",attrs:{apiUrl:e.apiUrl,fields:e.fields},scopedSlots:e._u([{key:"cell(actions)",fn:function(t){return[t.item.is_enabled?n("b-button",{staticClass:"mr-2 mb-2",attrs:{variant:"danger",size:"sm"},on:{click:function(n){return e.changeEnabledStatus(t.item.id)}}},[e._v("\n          Disable\n        ")]):e._e(),t.item.is_enabled?e._e():n("b-button",{staticClass:"mr-2 mb-2",attrs:{variant:"primary",size:"sm"},on:{click:function(n){return e.changeEnabledStatus(t.item.id)}}},[e._v("\n          Enable\n        ")]),n("b-button",{staticClass:"mr-2 mb-2",attrs:{variant:"danger",size:"sm"},on:{click:function(n){return e.destroy(t.item.id)}}},[e._v("\n          Delete\n        ")])]}}])})],1)],1)},s=[],i=n("1a01"),r=n("4dde"),c={components:{PageTitle:i["a"]},data:function(){return{heading:"Clients",icon:"pe-7s-phone icon-gradient bg-happy-itmeo",apiUrl:"/api/clients",fields:[{key:"row_no",label:"#"},{key:"user_name",sortable:!0},{key:"client",sortable:!0},{key:"platform",sortable:!0},{key:"ip",sortable:!0},{key:"is_enabled",formatter:function(e){return e?"Yes":"No"}},{key:"logged_in_at",formatter:function(e){return Object(r["a"])(e)},sortable:!0},{key:"created_at",formatter:function(e){return Object(r["a"])(e)},sortable:!0},"actions"],successMessage:""}},methods:{changeEnabledStatus:function(e){var t=this;axios.patch("/api/clients/"+e+"/enabled").then((function(e){t.successMessage=e.data.message,t.$refs.clientsTable.refresh()})).catch((function(e){return console.error(e.response.message)}))},destroy:function(e){var t=this;this.$bvModal.msgBoxConfirm("Are you sure you want to delete this?",{title:"Please Confirm",okVariant:"danger",okTitle:"YES",cancelTitle:"NO"}).then((function(n){n&&axios.delete("/api/clients/"+e).then((function(e){t.successMessage=e.data.message,t.$refs.clientsTable.refresh()})).catch((function(e){return console.error(e.response.data.message)}))})).catch((function(e){return console.error(e.response.data.message)}))}}},o=c,l=n("2877"),u=Object(l["a"])(o,a,s,!1,null,null,null);t["default"]=u.exports}}]);