(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-12ef4962"],{"7f88":function(t,e,a){},"89b7":function(t,e,a){"use strict";a("7f88")},d821:function(t,e,a){"use strict";a.r(e);a("14d9");var n=a("5550"),o=a("0c25"),r=a("cc33"),i=a("b0b9"),l=a("ffd7"),n={components:{filterTable:n.a},data(){return{tableData:[],buttonLoading:!1,filterFields:[{label:this.$t("table.Creationtime"),columnName:"create_time",componentType:"date"}],curindex:0,isBulkSelection:!1,multipleSelection:[]}},activated(){Object(r.n)(-1),this.getTableData()},methods:{getTableData(){this.buttonLoading=!0,Object(o.f)({wheres:{}}).then(t=>{var e;this.$resultSuccess(t)?(e=t.data.data,this.tableData=e.map(t=>{var e;return{...t,group_id:t.groupId,group_name:t.groupName,create_time:t.createTime,desc:t.description,users:null!=(e=null==t||null==(e=t.userNames)?void 0:e.toString())?e:"",sum:null==t.userNames?0:t.userNames.length}})):this.$handleError(t)}).finally(()=>this.buttonLoading=!1)},handleEdit(t){0===this.curindex?this.$router.push({name:"group",query:{id:t.group_id}}):this.$router.push({name:"VirtualGroup",query:{id:t.group_id}})},handleDelete(t){this.$messageBox.confirm(this.$t("confirm.groupdel"),this.$t("confirm.tishi"),{confirmButtonText:this.$t("btn.sure"),cancelButtonText:this.$t("btn.cancel"),type:"warning"}).then(()=>{Object(l.a)({groupId:t.group_id}).then(t=>{this.$resultSuccess(t)?(this.getTableData(),Object(i.c)(this)):this.$handleError(t)})}).catch(()=>{})},handleAddGroupOperation(){this.$router.push({name:"group"})},handleSelectionChange(t){this.multipleSelection=t}}},a=(a("89b7"),a("2877")),a=Object(a.a)(n,function(){var a=this,t=a._self._c;return t("div",{staticClass:"limit-page-wrap"},[t("filter-table",{ref:"limitManageTableRef",attrs:{"full-table-data":a.tableData,tableLoading:a.buttonLoading,tableOptions:{border:!1},filterFields:a.filterFields,"row-key":"group_id"},on:{"selection-change":a.handleSelectionChange}},[t("template",{slot:"toolbar"},[t("div",{staticClass:"flex-row-center"},[t("el-button",{staticClass:"button-default-blue",attrs:{loading:a.buttonLoading},on:{click:a.getTableData}},[a._v(a._s(a.$t("refresh"))+" ")]),t("el-button",{staticClass:"button-default-blue",on:{click:a.handleAddGroupOperation}},[a._v(" "+a._s(a.$t("btn.addGroupLabel"))+" ")])],1)]),[a.isBulkSelection?t("el-table-column",{attrs:{type:"selection",width:"55"}}):a._e(),t("el-table-column",{attrs:{label:a.$t("table.group"),width:"200%",prop:"group_name","column-key":"group_name","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{label:a.$t("table.desp"),prop:"desc",width:"200%","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{label:a.$t("table.Staff"),"show-overflow-tooltip":"",prop:"users"}}),t("el-table-column",{attrs:{label:a.$t("table.Totalstaff"),prop:"sum",width:"200%","show-overflow-tooltip":""}}),t("el-table-column",{attrs:{label:a.$t("table.Creationtime"),prop:"create_time","show-overflow-tooltip":""},scopedSlots:a._u([{key:"default",fn:function({row:t}){return[a._v(" "+a._s(a._f("timeStamp")(t.create_time))+" ")]}}])}),t("el-table-column",{attrs:{label:a.$t("table.Operating"),width:"90px",align:"center"},scopedSlots:a._u([{key:"default",fn:function({row:e}){return[t("svg-icon",{staticStyle:{"font-size":"15px"},attrs:{"icon-class":"edit-pen-icon"},on:{click:function(t){return a.handleEdit(e)}}}),t("svg-icon",{staticStyle:{"font-size":"15px","margin-left":"10px"},attrs:{"icon-class":"delete-icon"},on:{click:function(t){return a.handleDelete(e)}}})]}}])})]],2)],1)},[],!1,null,"a33e7560",null);e.default=a.exports},ffd7:function(t,e,a){"use strict";a.d(e,"e",function(){return o}),a.d(e,"c",function(){return r}),a.d(e,"f",function(){return i}),a.d(e,"d",function(){return l}),a.d(e,"g",function(){return s}),a.d(e,"a",function(){return u}),a.d(e,"b",function(){return c});var n=a("b775");function o(t){return Object(n.a)({method:"post",url:"permissionManage/saveBaseInfo",data:t})}function r(t){return Object(n.a)({method:"post",url:"/permissionManage/getPermissionDatasouceList",data:t})}function i(t){return Object(n.a)({method:"post",url:"/permissionManage/saveDsName",data:t})}function l(t){return Object(n.a)({method:"post",url:"permissionManage/queryPermissionUsers",data:t})}function s(t){return Object(n.a)({method:"post",url:"permissionManage/savePermissionUsers",data:t})}function u(t){return Object(n.a)({method:"post",url:"permissionManage/delete",data:t})}function c(t){return Object(n.a)({method:"post",url:"permissionManage/getGroupInformation",data:t})}}}]);