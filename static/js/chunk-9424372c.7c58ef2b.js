(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-9424372c"],{"0534":function(e,t,i){"use strict";i("2b78")},"11de":function(e,t,i){"use strict";i("6254")},"2b78":function(e,t,i){},"2e6c":function(e,t,i){"use strict";i.r(t);var n=i("52e4"),a=i("6b03"),s=(i("d9e2"),i("cc33")),l=i("5a0c"),r=i.n(l),o=i("1ed0"),u=i("af28"),l=i("2ef0"),c={data(){return{title:this.$t("createConfiguration"),dialogVisible:!0,configForm:{ruleName:"",riskLevel:"high",createBy:Object(s.b)("username"),createTime:r()().format("YYYY-MM-DD HH:mm:ss"),dbTypeList:[],ruleDetail:[{ruleType:"",ruleContent:""}]},typeEnumeration:{prefix:{label:this.$t("prefixLabel")},contain:{label:this.$t("containLabel")},regex:{label:this.$t("regexLabel")}},dataSourceObject:{},checkAll:!1,rules:{ruleName:[{required:!0,message:this.$t("placeholder"),trigger:"blur"}],riskLevel:[{required:!0,message:this.$t("placeholderselect"),trigger:"blur"}],dbTypeList:[{type:"array",required:!0,message:this.$t("placeholderselect"),trigger:"blur"}],ruleDetail:[{validator:this.validateRuleDetail,trigger:"blur"}],comment:[{required:!0,message:this.$t("placeholder"),trigger:"blur"}]}}},mounted(){var e;this.dataSourceObject=null!=(e=null==(e=Object(o.A)())||null==(e=e.all)?void 0:e.data)?e:{}},methods:{setFormData(e){e.ruleId?(e.createTime&&(e.createTime=this.formatDateTimeString(e.createTime)),this.configForm=e):this.configForm={ruleName:"",riskLevel:"high",createBy:Object(s.b)("username"),createTime:r()().format("YYYY-MM-DD HH:mm:ss"),dbTypeList:[],ruleDetail:[{ruleType:"",ruleContent:""}]},e.dbTypeList?this.handleCheckedChange(e.dbTypeList):this.checkAll=!1},formatDateTimeString(e){var t;return/^\d+$/.test(e)?(t=parseInt(e),r()(t).format("YYYY-MM-DD HH:mm:ss")):/\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/.test(e)?r()(e).format("YYYY-MM-DD HH:mm:ss"):e},handleCheckAllChange(e){this.configForm.dbTypeList=e?Object.keys(this.dataSourceObject):[]},handleCheckedChange(e){var e=e.length;this.checkAll=e===(null==(e=Object.keys(this.dataSourceObject))?void 0:e.length)},delectRuleItem(e){this.configForm.ruleDetail.splice(e,1)},addRuleItem(){this.configForm.ruleDetail.unshift({ruleType:"",ruleContent:""})},reset(){this.configForm={ruleName:"",riskLevel:"high",createBy:Object(s.b)("username"),createTime:r()().format("YYYY-MM-DD HH:mm:ss"),dbTypeList:[],ruleDetail:[{ruleType:"",ruleContent:""}]}},saveHandle(){this.$refs.configFormRef.validate(e=>{if(e){const e=this.configForm.ruleId?u.p:u.l;e(this.configForm).then(e=>{1==e.data.code?(this.$message.success(this.$t("operationSucceeded")),this.$emit("refreshPage",this.configForm.ruleId)):this.$message.error(null!=(e=null==e||null==(e=e.data)?void 0:e.msg)?e:"error")}).catch(e=>{})}})},validateRuleDetail(e,t,i){t.some(e=>!e.ruleContent||!e.ruleType)?i(new Error("请设置正确的规则")):i()}}},d=(i("c7d0"),i("2877")),c=Object(d.a)(c,function(){var n=this,a=n._self._c;return a("div",{staticClass:"configForm-wrap"},[a("div",{staticClass:"config-form-wrap"},[a("el-form",{ref:"configFormRef",attrs:{model:n.configForm,"label-position":"right","label-width":"110px",rules:n.rules,size:"small"}},[a("el-form-item",{attrs:{label:n.$t("importFile.name"),prop:"ruleName"}},[a("el-input",{attrs:{placeholder:n.$t("placeholder")},model:{value:n.configForm.ruleName,callback:function(e){n.$set(n.configForm,"ruleName",e)},expression:"configForm.ruleName"}})],1),a("el-form-item",{attrs:{label:n.$t("riskLevel"),prop:"riskLevel"}},[a("el-select",{attrs:{placeholder:n.$t("placeholderselect")},model:{value:n.configForm.riskLevel,callback:function(e){n.$set(n.configForm,"riskLevel",e)},expression:"configForm.riskLevel"}},n._l(["high","middle","low"],function(e){return a("el-option",{key:e,attrs:{label:n.$t(e),value:e}})}),1)],1),a("el-form-item",{attrs:{label:n.$t("createdBy"),required:""}},[n._v(" "+n._s(n.configForm.createBy)+" ")]),a("el-form-item",{attrs:{label:n.$t("creationTime")}},[n._v(" "+n._s(n.configForm.createTime)+" ")]),a("el-form-item",{attrs:{label:n.$t("form.Databasetype"),prop:"dbTypeList"}},[a("el-checkbox",{on:{change:n.handleCheckAllChange},model:{value:n.checkAll,callback:function(e){n.checkAll=e},expression:"checkAll"}},[n._v(n._s(n.$t("databaseBackup.selectAll")))]),a("el-checkbox-group",{on:{change:n.handleCheckedChange},model:{value:n.configForm.dbTypeList,callback:function(e){n.$set(n.configForm,"dbTypeList",e)},expression:"configForm.dbTypeList"}},n._l(n.dataSourceObject,function(e,t){return a("el-checkbox",{key:t,attrs:{label:t}},[a("div",{staticClass:"flex-row-center database-item"},[a("img",{staticClass:"database-item-img",attrs:{src:i("bb6e")("./"+e.icon),alt:"database icon"}}),n._v(" "+n._s(e.label)+" ")])])}),1)],1),a("el-form-item",{attrs:{label:n.$t("rulesLabel"),prop:"ruleDetail",required:""}},[a("div",{staticClass:"rules-list-wrap"},n._l(n.configForm.ruleDetail,function(t,i){return a("div",{key:i,staticClass:"flex-row-center"},[a("el-select",{staticStyle:{width:"150px"},attrs:{slot:"prepend",placeholder:n.$t("placeholderselect")},slot:"prepend",model:{value:t.ruleType,callback:function(e){n.$set(t,"ruleType",e)},expression:"item.ruleType"}},n._l(n.typeEnumeration,function(e,t){return a("el-option",{key:t,attrs:{label:e.label,value:t}})}),1),a("el-input",{staticStyle:{flex:"1",margin:"0 10px"},attrs:{placeholder:""},model:{value:t.ruleContent,callback:function(e){n.$set(t,"ruleContent",e)},expression:"item.ruleContent"}}),a("i",i?{staticClass:"el-icon-delete",on:{click:function(e){return n.delectRuleItem(i)}}}:{staticClass:"el-icon-plus",on:{click:n.addRuleItem}})],1)}),0)]),a("el-form-item",{attrs:{label:n.$t("des"),prop:"comment"}},[a("el-input",{attrs:{type:"textarea"},model:{value:n.configForm.comment,callback:function(e){n.$set(n.configForm,"comment",e)},expression:"configForm.comment"}})],1)],1)],1),a("div",{staticClass:"foot-wrap"},[n.configForm.ruleId?n._e():a("el-button",{staticClass:"button-default",on:{click:n.reset}},[n._v(n._s(n.$t("btn.reset")))]),a("el-button",{staticClass:"button-default-blue",on:{click:n.saveHandle}},[n._v(n._s(n.$t("save")))])],1)])},[],!1,null,"06291c3b",null).exports,n={components:{resizableFilterBar:n.a,RightMouseMenu:a.a,CreateConfiguration:c},data(){return{filterText:"",treeData:[],rightMenuObj:{delete:{textName:"del",svgIcon:"delete-flow-icon"}},rightMouseEvent:null,rightMouseItem:null,selectId:""}},mounted(){this.getTreeData()},methods:{handleInput:Object(l.debounce)(function(){this.getTreeData()},300),async getTreeData(n){this.treeData=await Object(u.o)({name:this.filterText}).then(e=>{var t,e=null!=(e=null==e||null==(e=e.data)?void 0:e.data)?e:[];this.selectId="";let i={};return i=n?e.find(e=>e.ruleId===n):null!=(t=null==e?void 0:e[0])?t:{},this.treeItemSelect(i),e}).catch(e=>[])},createRiskConfiguration(){this.selectId="",this.$refs.createConfigurationRef.setFormData({})},treeItemSelect(e){this.selectId=this.selectId==e.ruleId?"":e.ruleId,this.$refs.createConfigurationRef.setFormData(e)},contextmenu(e,t){this.rightMouseEvent=e,this.rightMouseItem=t},executeTipItem(e){"delete"===e&&this.deleteHandle()},deleteHandle(){this.$messageBox.confirm(this.$t("confirm.deleteConfirmation"),this.$t("confirm.tishi"),{confirmButtonText:this.$t("btn.sure"),cancelButtonText:this.$t("btn.cancel"),type:"warning"}).then(()=>{Object(u.m)([this.rightMouseItem.ruleId]).then(e=>{var t;1==(null==e||null==(t=e.data)?void 0:t.code)?(this.$message({type:"success",message:"删除成功!"}),this.getTreeData()):this.$message.error(null!=(e=null==e||null==(t=e.data)?void 0:t.msg)?e:"error")})})}}},a=(i("11de"),Object(d.a)(n,function(){var i=this,e=i._self._c;return e("div",{staticStyle:{width:"100%",height:"100%"}},[e("resizable-filter-bar",{attrs:{"title-label":"customRiskConfigurations"},scopedSlots:i._u([{key:"menuList",fn:function(){return[e("div",{staticClass:"tree-wrap"},[e("div",{staticClass:"header-wrap"},[e("div",{staticClass:"search-wrap border-box flex-row-center"},[e("svg-icon",{attrs:{"icon-class":"input-search-icon"}}),e("input",{directives:[{name:"model",rawName:"v-model",value:i.filterText,expression:"filterText"}],staticClass:"input",attrs:{placeholder:i.$t("placeholderLeftMenu")},domProps:{value:i.filterText},on:{input:[function(e){e.target.composing||(i.filterText=e.target.value)},i.handleInput]}})],1)]),e("div",{staticClass:"body-wrap"},[e("ul",{staticClass:"tree-wrap"},i._l(i.treeData,function(t){return e("li",{key:t.ruleId,class:{isShow:i.selectId===t.ruleId},on:{click:function(e){return i.treeItemSelect(t)}}},[e("div",{staticClass:"tree-title",on:{contextmenu:function(e){return e.preventDefault(),i.contextmenu(e,t)}}},[i._v(" "+i._s(t.ruleName)+" ")])])}),0)])])]},proxy:!0}])},[e("div",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[i._v(" "+i._s(i.$t("customRiskConfigurations"))+" "),e("div",{staticClass:"add-btn-wrap"},[e("i",{staticClass:"el-icon-plus",on:{click:i.createRiskConfiguration}})])]),[e("create-configuration",{ref:"createConfigurationRef",on:{refreshPage:i.getTreeData}})]],2),e("right-mouse-menu",{attrs:{rightMenuObj:i.rightMenuObj,rightMouseEvent:i.rightMouseEvent},on:{menuTap:i.executeTipItem}})],1)},[],!1,null,"d69c4498",null));t.default=a.exports},3505:function(e,t,i){"use strict";i("e12a")},"52e4":function(e,t,i){"use strict";var n={props:{menuList:{type:Array,default(){return[]}},titleLabel:{type:String,default:""},resizable:{type:Boolean,default:!1}},data(){return{isDragging:!1,startX:0,leftWidth:300}},mounted:function(){document.addEventListener("mousemove",this.handleDrag),document.addEventListener("mouseup",this.stopDrag)},computed:{isCollapse(){return!1}},methods:{startDrag(e){this.isDragging=!0,this.startX=e.clientX},handleDrag(e){var t;this.isDragging&&(t=e.clientX-this.startX,200<(t=this.leftWidth+=t)?(this.leftWidth=t,this.startX=e.clientX):this.leftWidth=200)},stopDrag(){this.isDragging=!1}},beforeDestroy:function(){document.removeEventListener("mousemove",this.handleDrag),document.removeEventListener("mouseup",this.stopDrag)}},i=(i("0534"),i("2877")),i=Object(i.a)(n,function(){var e=this,t=e._self._c;return t("div",{staticClass:"filter-bar-wrap"},[t("div",{staticClass:"left-menu",class:{isCollapse:e.isCollapse},style:{width:e.leftWidth+"px"}},[e._t("title",function(){return[t("div",{staticClass:"title"},[e._v(" "+e._s(e.$t(e.titleLabel))+" ")])]}),t("div",{staticClass:"menu-list"},[e._t("menuList")],2),e.resizable?t("div",{staticClass:"resizable-wrap",on:{mousedown:e.startDrag}},[t("i",{staticClass:"el-icon-sort"})]):e._e()],2),t("div",{staticClass:"right-content"},[e._t("default")],2)])},[],!1,null,"2d233102",null);t.a=i.exports},"5b2e":function(e,t,i){},6254:function(e,t,i){},"6b03":function(e,t,i){"use strict";var a=i("fa7d"),n={components:{SqlResultsCol:i("cf17").a},name:"rightMouseMenu",props:{rightMenuObj:{type:[Array,Object],required:!0},rightMouseEvent:{},menuWidth:{type:Number,default:180},optionHeight:{type:Number,default:34},isChildMenu:{type:Boolean,default:!1},scrollElement:{default:()=>null}},data(){return{menuIsShow:!1,rightClickEvent:null,childEvent:null,childMenu:[],childMenuWidth:0,menuTAndBPadding:5}},computed:{menuBoxOffset(){let e,t=window.innerHeight,i=window.innerWidth,n=this.menuOptionLength*this.optionHeight+2*this.menuTAndBPadding;return this.rightMouseEvent?(e={x:this.rightMouseEvent.x,y:this.rightMouseEvent.y},this.handleMenu(!0)):(e={x:0,y:0},this.handleMenu(!1)),e.y<n&&(e.y=0),e.y+n>t&&(e.y=t-n-(t-e.y)-5,this.isChildMenu)&&(e.y+=this.optionHeight+this.menuTAndBPadding),e.x>i-this.menuWidth-10&&(this.isChildMenu?e.x-=2*this.menuWidth:e.x=i-this.menuWidth-10-(i-e.x)),e},menuBoxStyle(){return{left:this.menuBoxOffset.x+"px",top:this.menuBoxOffset.y+"px",width:this.menuWidth+"px"}},menuOptionLength(){let e=0;for(var t in this.rightMenuObj)!1!==this.rightMenuObj[t].visible&&e++;return e},hasChildren(){return 0<this.childMenu.length},isObjectMenu(){return"object"===Object(a.f)(this.rightMenuObj)}},created(){this.rightClickEvent=()=>this.handleMenu(!1),addEventListener("contextmenu",this.rightClickEvent,!0)},methods:{handleMenu(e){const t=this;this.menuIsShow=!0===e&&e,this.$nextTick(()=>{this.$emit("menuChange",this.menuIsShow),this.scrollElement&&(this.menuIsShow?this.scrollElement.addEventListener("scroll",function(){t.handleMenu(!1)}):this.scrollElement.removeEventListener("scroll",function(){}))})},onRightMenuItemTap(e,t,i){this.onMenuItemMouseEnter(i,t.children),""===e||t.disabled||(this.isObjectMenu?this.$emit("menuTap",i,t):this.$emit("menuTap",e,t,i),this.handleMenu())},onMenuItemMouseEnter(e,t){var i;t?(this.childMenu=t,this.childMenuWidth=this.rightMenuObj[e].childMenuWidth||this.menuWidth,{x:t,y:i}=this.menuBoxOffset,this.childEvent={x:t+this.menuWidth,y:i+e*this.optionHeight+this.menuTAndBPadding}):(this.childMenu=[],this.childEvent=null)},getIconSize({iconWidth:e,iconHeight:t}){var i,n={width:"14px",height:"14px"};return Object(a.r)(e)&&Object(a.r)(t)||(i=Object(a.u)(e)?e+"px":e,n.width=Object(a.r)(e)?"auto":i,e=Object(a.u)(t)?t+"px":t,n.height=Object(a.r)(t)?"auto":e),n}},beforeDestroy(){removeEventListener("contextmenu",this.rightClickEvent,!0)}},i=(i("3505"),i("2877")),i=Object(i.a)(n,function(){var n=this,e=n._self._c;return e("div",[e("div",{directives:[{name:"show",rawName:"v-show",value:n.menuIsShow,expression:"menuIsShow"},{name:"click-outside",rawName:"v-click-outside.capture",value:n.handleMenu,expression:"handleMenu",modifiers:{capture:!0}}],staticClass:"showByMouseRight",style:n.menuBoxStyle,on:{contextmenu:function(e){e.stopPropagation(),e.preventDefault()}}},n._l(n.rightMenuObj,function(t,i){return e("div",{directives:[{name:"show",rawName:"v-show",value:!1!==t.visible,expression:"menuItem.visible !== false"}],key:i,staticClass:"showByMouseRightItem",class:{mouseRightItemDivisionLine:t.hasBottomLine,[t.className]:t.className,"selected-item":t.isSelected,"disabled-item":t.disabled},style:`height:${n.optionHeight}px`,on:{click:function(e){return n.onRightMenuItemTap(t.key,t,i)},mouseenter:function(e){return n.onMenuItemMouseEnter(i,t.children)}}},[t.icon?e("img",{staticClass:"list-icon list-add",style:`width:${n.getIconSize(t).width};height:${n.getIconSize(t).height};`,attrs:{src:t.icon,alt:""}}):t.svgIcon?e("svg-icon",{attrs:{"icon-class":t.svgIcon}}):t.elIcon?e("i",{staticClass:"menu-elicon",class:t.elIcon}):n._e(),e("span",{staticClass:"textByMenu"},[n._v(n._s(n.$t(t.textName||t.label)))]),e("div",{staticClass:"list-right"},[n._t("right",function(){return[n._v(" "+n._s(t.rightTitle)+" "),t.children?e("div",{staticClass:"right-hasChild-icon"}):n._e()]},{menuItem:t}),t.isSelected?n._t("selected",function(){return[e("div",{staticClass:"right-selected-icon"})]},{menuItem:t}):n._e()],2)],1)}),0),n.hasChildren?e("rightMouseMenu",{attrs:{menuWidth:n.childMenuWidth,rightMenuObj:n.childMenu,rightMouseEvent:n.childEvent,isChildMenu:!0},on:{menuTap:n.onRightMenuItemTap}}):n._e()],1)},[],!1,null,"717b85a4",null);t.a=i.exports},"8a35":function(e,t,i){},af28:function(e,t,i){"use strict";i.d(t,"g",function(){return a}),i.d(t,"e",function(){return s}),i.d(t,"b",function(){return l}),i.d(t,"a",function(){return r}),i.d(t,"k",function(){return o}),i.d(t,"j",function(){return u}),i.d(t,"f",function(){return c}),i.d(t,"c",function(){return d}),i.d(t,"i",function(){return h}),i.d(t,"h",function(){return m}),i.d(t,"d",function(){return p}),i.d(t,"n",function(){return f}),i.d(t,"l",function(){return g}),i.d(t,"o",function(){return b}),i.d(t,"p",function(){return v}),i.d(t,"m",function(){return y});var n=i("b775"),t=i("bc3a");function a(e){return Object(n.a)({method:"post",url:"approval/queryUserApplyList",data:e})}function s(e){return Object(n.a)({method:"post",url:"approval/queryPermissionCustomRule",data:e})}function l(e){return Object(n.a)({method:"post",url:"approval/createApply",data:e})}function r(e){return Object(n.a)({method:"post",url:"approval/createAndSubmitApply",data:e})}function o(e){return Object(n.a)({method:"post",url:"approval/updateApply",data:e})}function u(e){return Object(n.a)({method:"post",url:"approval/updateAndSubmitApply",data:e})}function c(e){return Object(n.a)({method:"post",url:"approval/queryUserApplyDetail",data:e})}function d(e){return Object(n.a)({method:"post",url:"approval/operateApply",data:e})}function h(e){return Object(n.a)({method:"post",url:"approval/queryUserApprovalList",data:e})}function m(e){return Object(n.a)({method:"post",url:"approval/queryUserApprovalDetail",data:e})}function p(e){return Object(n.a)({method:"post",url:"approval/operateApproval",data:e})}function f(e){return Object(n.a)({method:"post",url:"/approval/queryGroupDsRules",data:e})}function g(e){return Object(n.a)({method:"post",url:"/global/config/createPermissionRule",data:e})}function b(e){return Object(n.a)({method:"post",url:"/global/config/queryPermissionRule",data:e})}function v(e){return Object(n.a)({method:"post",url:"/global/config/updatePermissionRule",data:e})}function y(e){return Object(n.a)({method:"post",url:"/global/config/deletePermissionRule",data:e})}i.n(t).a.CancelToken},c7d0:function(e,t,i){"use strict";i("8a35")},cf17:function(e,t,i){"use strict";i("14d9"),i("4ad3");var n=i("7a26"),a=i("fa7d"),o=i("1ed0"),s=i("5875"),n={components:{customTable:n.a,LynxDialog:s.a},props:{initData:{type:Array,default:()=>({})},tabsHeadDDLAllData:{type:Array,default:()=>[]},nodeData:{type:Object,default:()=>({})}},data(){return{dialogVisible:!1,tableData:[]}},methods:{closeDialog(){this.dialogVisible=!1},initValue(e=0){var t=Object(a.k)(this.initData);this.dialogVisible=!0;const r=[];t.forEach((e,t)=>{let i=e.name,n=e.value,a=this.tabsHeadDDLAllData[t].type,s=Object(o.L)(a),l="";switch(s){case"string":l="ABC";break;case"number":l="123";break;default:l=s}e={columnName:i,columnTypeStr:l,columnType:s,value:n};r.push(e)}),this.tableData=r},closeCol(){this.$emit("changeShowIt",!1)}}},s=(i("e168"),i("2877")),i=Object(s.a)(n,function(){var t=this,i=t._self._c;return i("lynx-dialog",{attrs:{title:t.$t("form.singleLineData"),visible:t.dialogVisible},on:{closeDialogClick:t.closeDialog}},[i("div",{staticClass:"table-wrap-flex"},[i("custom-table",{attrs:{tableOptions:{data:t.tableData},showsearchBar:!1,showPagination:!1,padding:"0"}},[[i("el-table-column",{attrs:{label:t.$t("dataType"),prop:"columnTypeStr",width:"100px"}}),i("el-table-column",{attrs:{label:t.$t("columnName"),prop:"columnName",width:"150px"}}),i("el-table-column",{attrs:{label:t.$t("importFile.value"),prop:"value"},scopedSlots:t._u([{key:"default",fn:function({row:e}){return[i("span",[t._v(t._s(null===e.value?"[NULL]":e.value))])]}}])})]],2)],1),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{staticClass:"blue-button",attrs:{size:"mini"},on:{click:t.closeDialog}},[t._v(t._s(t.$t("sqlPreview.cancel")))])],1)])},[],!1,null,"c0c5a416",null);t.a=i.exports},e12a:function(e,t,i){},e168:function(e,t,i){"use strict";i("5b2e")}}]);