webpackJsonp([5],{"/59Y":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAbCAIAAAAPqBNFAAABq0lEQVRIDe1TO0sDQRi8Uw8TOUWToIiPSkgKtVQQwVpErCwtLawt/A0W1oJW/gQLsbZURAsFRewkhEjigwg5CXLOOfq5bHaPa67Lcizfzs7M7s3uumEYOim0rhQ8I8uOL4NNK4ce27kdTvRzavOpgSJ+aDDBPWtvB+N+NeM014tXiz5rDOUDwikgqNvlQBwjSmUQBPRSrdUa7jZfa77h0fX7YGaoGb2atdrHccFHgR61/PVdpSy1Vlh9G7m+7Fv4mnU1AYZcY2C1OHb5v4ZGs/qC522UyOY2ZbPccsxmI5UxX4DMEeeGEJmyFALawo07N561OHIZ9OIuiHFnbuTd1p7/YmWU+PHdEW+n2mIvIHXDP2ereZh9QeJDkJsA5L77s/TVS73gfDWaKYZWX406s5UhcrMfaFPGofkdL+39PmJozrajd5yb8vKF0XqtQheVIBxOsbfes+WV6dmFFkiahSBC4MKqKWqz78tj6+K8Xn6YpDU1c/N5EQMnAUwB1cKaLwLFv4MKJQts8PTkVhVjyha31VfVq2sAt3mpkkS+qiBhbc43oTiG1vFlON/R6XnPaZHOGgAAAABJRU5ErkJggg=="},"8Env":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAaCAIAAADE9MDgAAABq0lEQVRIDe2SvUoDQRSFd/OnjY2xCcYfULBRSwUtUgffwDew1efQ1jfwDcQ6hYW22igKEQ1pjI2NJibrt5xwGTaZIU0KwWVZ7t4557t37kycJEk0hSc3BWaK/OdqsNOaQyFwbg9nw6obxwNk4d8MJ/bdMyhLtXxpMb2FzxeD6kopXu3LnDTzby/dtcO0arcVvzb6KuyiQ3MQ9Pu6QAFA4HAKSoY8rzQuUXGIiwLnzP4PLENTgFg1RnGWCXHZI1DQsMygQBlW0WSW9BvimkENqmXF7rhN5gbec0PkHh1dc25MkwYZAp0i8B0aS95+gdIUZ42ZF5Bivtq+oGjs/rn9hu4vDVYj0Olw2X7ULibNOGrnuq0BdFGkcYnDvO/+sqxGIBoFdFTpyWn50cuLIDRf+e27dTSr+O78y5K+wDuH2umceRonn8Tz68XyQqXz3lbeFZCRxizec0NRP9jc3kt3nUFYxgQZKAIv9+Opd3vTaT0uC42UZ2e3rIAveQlQWtKC0HwZKHtHilMBDV5d3ptZS2PHHeK6frcG+bEsVz8p1/VMEnvnO4k5oPlr3F+XKOdG+10LSwAAAABJRU5ErkJggg=="},S05J:function(e,t){},V2KC:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAcCAIAAAASrSP9AAABWklEQVRIDe2UIU/DUBSFGRkJgpkNg0GRqm1iczMESToMfwCN5nfsR8wvM5snmLlVTFaSkBpQoECU05zk5OVxS18hE0vWNC/n3b773ZvT2zbyPD/YwnW4BWaB3HNpbPM//t5Oo7fXjITO6dn8LhXt7/5eTlqCXsddESka4XOG7txkQPujL0Y2q6Onh3f3aZAPHlH5wEl7orpfQV37GETLXpuih/rrQpGMrcwVyxUV3PHN+HMW4YZw0yp1qQ8CpR8bUKKTPlbo9PGZUMwDBMbLdMPgkjgcDNfJmgiioUGnJr13f9y+KF7dT5dtHwDFaawUwKlfCtbDqlFThMLnolmw4jj2zmmLfosyV+eKmMLn4hChQrNlMxnBl9QuYHDLELXiQdzfWzbr2d9xkiRZVvyoMBKCum/M1UHc5WKpyYVGDrfU3hZDVvbVGfNr1q8bDPK3LhTn91yatms+fANPGoO6Sw6f5QAAAABJRU5ErkJggg=="},jKoA:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("VsUZ"),s=i("X2Oc"),n={data:function(){return{userInfo:JSON.parse(localStorage.getItem("userdata")),item:JSON.parse(decodeURIComponent(this.$route.query.item)),temfielPath:"http://localhost:8089/img/",imgurl:i("ujvZ"),haoping:i("/59Y"),zhongping:i("8Env"),chaping:i("V2KC"),degree:"4",content:"",valueText1:0,valueText2:0,valueText3:0,imgData:"",imgchoseList:[],imgName:"",visible:!1,uploadList:[]}},mounted:function(){this.uploadList=this.$refs.upload.fileList},methods:{handleView:function(e){console.log(e),this.imgName=e,this.visible=!0},handleRemove:function(e){var t=this.$refs.upload.fileList;this.$refs.upload.fileList.splice(t.indexOf(e),1),this.imgchoseList.splice(this.imgchoseList.indexOf(e.response.extend.imgData),1),console.log(this.imgchoseList)},handleSuccess:function(e,t,i){console.log(t),console.log(i);var a=[];i.forEach(function(e){a.push(e.response.extend.imgData)}),console.log(a),this.imgchoseList=a},handleFormatError:function(e){this.$Notice.warning({title:"文件格式不正确",desc:"文件格式 "+e.name+" 不正确的，请选择jpg或者png文件."})},handleMaxSize:function(e){this.$Notice.warning({title:"图片大小",desc:"图片  "+e.name+" 太大了，最多不能超过2M."})},handleBeforeUpload:function(){var e=this.uploadList.length<5;return e||this.$Notice.warning({title:"最多可以上传5张图片"}),e},exit:function(){var e=this;this.$confirm("退出后，当前内容将不会保存?","提示",{confirmButtonText:"确定",cancelButtonText:"不了",type:"warning"}).then(function(){e.$router.back()}).catch(function(){})},submitReview:function(){var e=this,t={},i={},n=(new Date).getTime();i.userId=this.userInfo.id,i.goodsId=this.item.orderGoodsId,i.goodsSize=this.item.size,i.orderId=this.item.orderId,i.orderitemId=this.item.itemId,i.degree=this.degree,i.content=this.content,i.goodscore=this.valueText1,i.shopscore=this.valueText2,i.logisticscore=this.valueText3,i.createTime=n,i.img=this.imgchoseList.join(","),t.send=i,t.url="review/insertReview",Object(s.a)(t,function(t){100==t.code?(e.$Message.success("评论成功！！！"),a.a.updateItemStatus(i.orderitemId,1).then(function(t){100==t.code&&(e.updateRemark(e.item.orderGoodsId),e.isAllReview(e.item.orderId))}),e.$router.back()):e.$Message.error("网络卡顿，请稍后重试一下！！")})},isAllReview:function(e){var t={},i={};i.orderId=e,t.send=i,t.url="orderItem/isAllReview",Object(s.a)(t,function(e){e.code})},updateRemark:function(e){var t={},i={};i.id=e,t.send=i,t.url="goods/updateRemrk",Object(s.a)(t,function(e){console.log(e),e.code})}}},o={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"center-box"},[i("div",{staticClass:"tabbed-box-hd"},[i("p",{staticClass:"title"},[e._v("评价宝贝")]),e._v(" "),i("ul",{staticClass:"help-nav"},[i("li",[i("el-popover",{attrs:{placement:"top-start",title:"评价须知",width:"200",trigger:"hover",content:"请您根据本次交易，给予真实、客观、仔细地评价。您的评价将是其他会员的参考，也将影响卖家的信用。"}},[i("el-button",{staticClass:"btn",attrs:{slot:"reference"},slot:"reference"},[e._v("评价须知")])],1)],1)])]),e._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"top-content"},[i("div",{staticClass:"item-rate-info"},[i("div",{staticClass:"item-detail"},[i("a",{staticClass:"item-d-img"},[i("img",{attrs:{src:e.temfielPath+e.item.goods.picture}})]),e._v(" "),i("div",{staticClass:"item-title"},[i("a",[e._v(e._s(e.item.goods.description))])]),e._v(" "),i("div",[e._v("颜色分类:默认")]),e._v(" "),i("div",[e._v("参数:"+e._s(e.item.size))])])]),e._v(" "),i("div",{staticClass:"item-rate-main"},[i("div",{staticStyle:{"margin-top":"10px",padding:"10px",display:"flex","flex-direction":"row"}},[i("RadioGroup",{staticStyle:{"min-width":"200px"},model:{value:e.degree,callback:function(t){e.degree=t},expression:"degree"}},[i("Radio",{attrs:{label:"0"}},[i("span",[i("img",{attrs:{src:e.haoping}})])]),e._v(" "),i("Radio",{attrs:{label:"1"}},[i("span",[i("img",{attrs:{src:e.zhongping}})])]),e._v(" "),i("Radio",{attrs:{label:"2"}},[i("span",[i("img",{attrs:{src:e.chaping}})])])],1),e._v(" "),0==e.degree?i("div",[e._v("亲，好评无法修改和删除，请验货后再对商品和购物感受做出评论。")]):e._e(),e._v(" "),1==e.degree||2==e.degree?i("div",[e._v("亲，很抱歉没能给您带来良好的购物体验，如有不满，您可联系卖家协商或发起售后维权")]):e._e()],1),e._v(" "),i("div",{staticStyle:{"margin-top":"10px"}},[i("div",{staticClass:"review-content"},[i("Input",{attrs:{type:"textarea",rows:4,placeholder:"在此输入你的评论"},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}}),e._v(" "),i("div",{staticStyle:{display:"flex","flex-direction":"row"}},[i("div",{staticClass:"shaitu"},[i("Icon",{attrs:{type:"ios-film-outline"}}),e._v("晒图")],1),e._v(" "),i("span",{staticStyle:{"padding-left":"20px","padding-top":"10px"}},[e._v("最多只能上传5张图片哦~")])]),e._v(" "),i("div",{staticStyle:{"margin-top":"10px","margin-left":"5px"}},[e._l(e.uploadList,function(t){return i("div",{staticClass:"demo-upload-list"},["finished"===t.status?[i("img",{attrs:{src:e.temfielPath+"review/"+t.response.extend.imgData}}),e._v(" "),i("div",{staticClass:"demo-upload-list-cover"},[i("Icon",{attrs:{type:"ios-eye-outline"},nativeOn:{click:function(i){return e.handleView(t.response.extend.imgData)}}}),e._v(" "),i("Icon",{attrs:{type:"ios-trash-outline"},nativeOn:{click:function(i){return e.handleRemove(t)}}})],1)]:[t.showProgress?i("Progress",{attrs:{percent:t.percentage,"hide-info":""}}):e._e()]],2)}),e._v(" "),i("Upload",{ref:"upload",staticStyle:{display:"inline-block",width:"58px"},attrs:{"show-upload-list":!1,"on-success":e.handleSuccess,format:["jpg","jpeg","png"],"max-size":2048,"on-format-error":e.handleFormatError,"on-exceeded-size":e.handleMaxSize,"before-upload":e.handleBeforeUpload,multiple:"",type:"drag",action:"http://localhost:8089/hf/review/upload"}},[i("div",{staticStyle:{width:"58px",height:"58px","line-height":"58px"}},[i("Icon",{attrs:{type:"ios-camera",size:"20"}})],1)]),e._v(" "),i("Modal",{attrs:{title:"查看大图"},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[e.visible?i("img",{staticStyle:{width:"100%"},attrs:{src:e.temfielPath+"review/"+e.imgName}}):e._e()])],2)],1)])])]),e._v(" "),i("div",{staticClass:"ses-content"},[i("div",{staticClass:"ses-title"},[e._v("\n             店铺动态评分\n         ")]),e._v(" "),i("div",{staticClass:"ses-degree"},[i("div",{staticStyle:{"margin-bottom":"10px"}},[e._v("宝贝与描述相符  "),i("Rate",{attrs:{"show-text":""},model:{value:e.valueText1,callback:function(t){e.valueText1=t},expression:"valueText1"}}),e._v(" "),1==e.valueText1?i("span",[e._v("- 差得太离谱，与卖家描述的严重不符，非常不满")]):e._e(),e._v(" "),2==e.valueText1?i("span",[e._v("- 部分有破损，与卖家描述的不符，不满意")]):e._e(),e._v(" "),3==e.valueText1?i("span",[e._v("- 质量一般，没有卖家描述的那么好")]):e._e(),e._v(" "),4==e.valueText1?i("span",[e._v(" - 质量不错，与卖家描述的基本一致，还是挺满意的")]):e._e(),e._v(" "),5==e.valueText1?i("span",[e._v(" - 质量非常好，与卖家描述的完全一致，非常满意")]):e._e()],1),e._v(" "),i("div",{staticStyle:{"margin-bottom":"10px"}},[e._v("卖家的服务态度  "),i("Rate",{attrs:{"show-text":""},model:{value:e.valueText2,callback:function(t){e.valueText2=t},expression:"valueText2"}}),e._v(" "),1==e.valueText2?i("span",[e._v("- 卖家态度很差，还骂人、说脏话，简直不把顾客当回事")]):e._e(),e._v(" "),2==e.valueText2?i("span",[e._v("- 卖家有点不耐烦，承诺的服务也兑现不了")]):e._e(),e._v(" "),3==e.valueText2?i("span",[e._v("- 卖家回复问题很慢，态度一般，谈不上沟通顺畅")]):e._e(),e._v(" "),4==e.valueText2?i("span",[e._v("卖家服务挺好的，沟通挺顺畅的，总体满意")]):e._e(),e._v(" "),5==e.valueText2?i("span",[e._v("- 卖家的服务太棒了，考虑非常周到，完全超出期望值")]):e._e()],1),e._v(" "),i("div",{staticStyle:{"margin-bottom":"10px"}},[e._v("物流服务的质量  "),i("Rate",{attrs:{"show-text":""},model:{value:e.valueText3,callback:function(t){e.valueText3=t},expression:"valueText3"}}),e._v(" "),1==e.valueText3?i("span",[e._v("- 到货速度严重延误，货物破损，派件员态度恶劣")]):e._e(),e._v(" "),2==e.valueText3?i("span",[e._v("- 到货速度慢，外包装严重变形，派件员不耐烦，态度差")]):e._e(),e._v(" "),3==e.valueText3?i("span",[e._v("- 到货速度一般，外包装变形，派件员态度一般")]):e._e(),e._v(" "),4==e.valueText3?i("span",[e._v("- 到货速度及时，派件员态度较好")]):e._e(),e._v(" "),5==e.valueText3?i("span",[e._v("- 到货速度非常快，商品完好无损，派件员态度很好")]):e._e()],1)])])]),e._v(" "),i("div",{staticClass:"submit-btn"},[i("Button",{attrs:{type:"primary"},on:{click:e.submitReview}},[e._v("发表评论")]),e._v(" "),i("Button",{on:{click:e.exit}},[e._v("退出评价")])],1)])},staticRenderFns:[]};var l=i("VU/8")(n,o,!1,function(e){i("S05J"),i("ucnl")},"data-v-ef642052",null);t.default=l.exports},ucnl:function(e,t){}});
//# sourceMappingURL=5.f9ee1ca20d3d6e26ddbc.js.map