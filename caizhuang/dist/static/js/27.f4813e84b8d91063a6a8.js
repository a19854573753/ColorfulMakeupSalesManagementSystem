webpackJsonp([27],{DVhw:function(t,e){},c1kl:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("mvHQ"),o=a.n(s),i=a("X2Oc"),n={name:"MySetting",data:function(){return{tempfilePath:"http://localhost:8089/img/",userInfo:"",activeTitle:"账号管理",bar:{updateAccount:"个人资料",myAddress:"收货地址",myAccount:"账号管理"}}},watch:{},created:function(){this.userInfo=JSON.parse(localStorage.getItem("userdata"))},methods:{beforeAvatarUpload:function(t){var e="image/jpeg"===t.type,a=t.size/1024/1024<2;return e||this.$message.error("上传头像图片只能是 JPG 格式!"),a||this.$message.error("上传头像图片大小不能超过 2MB!"),e&&a},upload:function(t,e){var a=this,s=this;console.log(t),this.file=t.raw,this.fileName=t.name,console.log(this.file,this.fileName);var n=new FormData;n.append("file",this.file);var r={url:"user/upload"};r.send=n,Object(i.a)(r,function(t){console.log(t),100==t.code&&(s.$message({message:"上传成功",type:"success"}),s.userInfo.img=t.extend.imgData,a.updateImg(t.extend.imgData),localStorage.setItem("userdata",o()(s.userInfo)))})},updateImg:function(t){var e={},a={};a.id=this.userInfo.id,a.img=t,e.send=a,e.url="customer/updateImg",Object(i.a)(e,function(t){console.log(t)})},goSearch:function(){},onSelect:function(t){console.log(t),this.activeTitle=this.bar[t],console.log(this.bar[t]),console.log(this.activeTitle),this.$router.push("/home/mySetting/"+t)}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"setting-box"},[a("Layout",{staticClass:"layout"},[a("Sider",{ref:"side",staticClass:"side-bar",style:{background:"#fff",overflow:"auto"},attrs:{"collapsed-width":78}},[a("Menu",{attrs:{theme:"light",width:"auto"},on:{"on-select":t.onSelect}},[a("div",{staticClass:"user-icon"},[a("el-upload",{ref:"upload",staticClass:"avatar-uploader",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","auto-upload":!1,multiple:!1,limit:1,accept:"image/jpeg,image/gif,image/png","on-change":t.upload,"show-file-list":!1,"before-upload":t.beforeAvatarUpload}},[t.userInfo.img?a("img",{staticClass:"avatar",attrs:{src:t.tempfilePath+t.userInfo.img,title:"点击修改头像"}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]),t._v(" "),a("p",[t._v(t._s(t.userInfo.userName))])],1),t._v(" "),a("div",{staticClass:"menuitem"},[a("MenuItem",{attrs:{name:"myAccount"}},[a("Icon",{attrs:{type:"ios-navigate"}}),t._v(" "),a("span",[t._v("账号管理")])],1),t._v(" "),a("MenuItem",{attrs:{name:"updateAccount"}},[a("Icon",{attrs:{type:"ios-contact-outline"}}),t._v(" "),a("span",[t._v("个人资料")])],1),t._v(" "),a("MenuItem",{attrs:{name:"myAddress"}},[a("Icon",{attrs:{type:"ios-home-outline"}}),t._v(" "),a("span",[t._v("收货地址")])],1)],1)])],1),t._v(" "),a("Layout",{staticClass:"layout"},[a("Header",{style:{background:"#fff"}},[t._v("\n        "+t._s(t.activeTitle)+"\n      ")]),t._v(" "),a("Content",{staticClass:"content"},[a("transition",{attrs:{mode:"out-in"}},[a("router-view")],1)],1)],1)],1)],1)},staticRenderFns:[]};var l=a("VU/8")(n,r,!1,function(t){a("DVhw")},null,null);e.default=l.exports}});
//# sourceMappingURL=27.f4813e84b8d91063a6a8.js.map