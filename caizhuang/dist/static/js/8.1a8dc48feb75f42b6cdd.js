webpackJsonp([8],{"2ikn":function(t,s,e){"use strict";var a=e("VsUZ"),i=e("X2Oc"),o={name:"HotCart",beforeRouteEnter:function(t,s,e){window.scrollTo(0,0),e()},props:{a:{type:String,default:"0"},searchData:{type:String}},data:function(){return{noGoods:e("wv4G"),chose:!1,collectList:[],temfielPath:"http://localhost:8089/img/"}},mounted:function(){"0"!==this.a?this.getCollection():this.getAllCollection()},methods:{choseItem:function(t){t.choseItem=!t.choseItem},showBtn:function(t){var s=document.getElementById("btn");t.offsetX<50&&t.offsetY<50?s.style.backgroundColor="red":s.style.backgroundColor="#EFEFEF"},del:function(t){var s=this,e=t.srcElement.dataset.goodsid;if(t.offsetX<50&&t.offsetY<50){console.log("12312412");var a=t.srcElement.dataset.likeid;this.$confirm("是否取消收藏该商品?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var t={},e={};e.id=a,t.send=e,t.url="like/cancelLike",console.log(t),Object(i.a)(t,function(t){if(console.log(t),100==t.code){for(var e=s.collectList,i=0;i<e.length;i++)e[i].id==a&&(e.splice(i,1),s.collectList=e);s.$message({type:"success",message:"操作成功!"})}})}).catch(function(){s.$message({type:"info",message:"已取消操作"})})}else this.$router.push({path:"/goodsDetail",query:{goodsId:e}})},hideDelete:function(t){t.seen=!1},deleteLike:function(t){t.seen=!0},getCollection:function(){var t=this;arguments.length>0&&void 0!==arguments[0]&&arguments[0];a.a.getAllCollection().then(function(s){t.collectList=s.extend.likeList.slice(0,10)})},getAllCollection:function(){var t=this,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;a.a.getAllCollection(s).then(function(e){console.log(s),console.log(t.searchData);var a=e.extend.likeList;a.forEach(function(t){t.seen=!1,t.choseItem=!1}),t.collectList=a,console.log(t.collectList)})}}},c={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container1"},[e("div",{staticClass:"goods-box2"},[e("div",{staticClass:"goods-box-box"},[e("div",{staticClass:"goods-list"},[t._l(t.collectList,function(s,a){return e("div",{key:a,staticClass:"goods-info-show"},[e("div",{staticClass:"goods-show-img",on:{mouseover:function(e){return t.deleteLike(s)},mouseout:function(e){return t.hideDelete(s)}}},[e("img",{staticClass:"goods-img",attrs:{src:t.temfielPath+s.goods.picture}}),t._v(" "),s.seen?e("button",{staticClass:"btn",attrs:{id:"btn"}},[e("i",{staticClass:"el-icon-delete"})]):t._e(),t._v(" "),e("div",{staticClass:"a",attrs:{"data-likeId":s.id,"data-goodsId":s.goodsId},on:{click:t.del,mousemove:t.showBtn}})]),t._v(" "),e("div",{staticClass:"goods-show-price"},[e("span",[e("Icon",{attrs:{type:"social-yen text-danger"}}),t._v(" "),e("span",{staticClass:"seckill-price text-danger"},[t._v(t._s(s.goods.sellPrice))])],1)]),t._v(" "),e("div",{staticClass:"goods-show-detail"},[e("router-link",{attrs:{title:"商品专区",target:"_blank",to:{path:"/goodsDetail",query:{goodsId:s.goodsId}}}},[e("span",[t._v(t._s(s.goods.description))])])],1),t._v(" "),e("div",{staticClass:"goods-show-num"},[t._v("\n              已有"),e("span",[t._v(t._s(s.goods.remark))]),t._v("人评价\n            ")]),t._v(" "),e("div",{staticClass:"goods-show-seller"},[e("span",[t._v(t._s(s.goods.goodsname))]),t._v(" "),t.chose?e("div",{class:s.choseItem?"mark":"btn-chose",on:{click:function(e){return t.choseItem(s)}}},[e("Icon",{attrs:{type:"md-checkmark"}})],1):t._e()])])}),t._v(" "),0==t.collectList.length&&""==t.searchData?e("div",{staticClass:"no-list"},[e("div",[e("img",{staticClass:"no-goods",attrs:{src:t.noGoods}})]),t._v(" "),e("div",{staticClass:"no-text"},[e("p",{staticStyle:{"margin-top":"30px"}},[t._v("您暂时还未收藏任何商品。")]),t._v(" "),e("p",[t._v("请前往"),e("router-link",{attrs:{to:"/"}},[t._v("商品区")]),t._v("进行收藏吧")],1)])]):t._e(),t._v(" "),0==t.collectList.length&&""!=t.searchData&&null!=t.searchData?e("div",{staticClass:"no-list"},[e("div",[e("img",{staticClass:"no-goods",attrs:{src:t.noGoods}})]),t._v(" "),e("div",[e("p",{staticClass:"no-text"},[t._v('您的收藏夹，木有与"'+t._s(t.searchData)+'"相关的宝贝商品哦')]),t._v(" "),e("p",[t._v("看看输入的文字是否有误")]),t._v(" "),e("p",[t._v("去掉不必要的字或词，如“的”、“什么”等")]),t._v(" "),e("p",[t._v("调整关键字，如“移动充值”改为“移动 充值”或“移动”")]),t._v(" "),e("p",[t._v("去看看其他"),e("router-link",{attrs:{to:"/"}},[t._v("商品吧")])],1)])]):t._e()],2)])])])},staticRenderFns:[]};var n=e("VU/8")(o,c,!1,function(t){e("E46L")},"data-v-0173bfa6",null);s.a=n.exports},E46L:function(t,s){},XyBG:function(t,s){},"h/Zr":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("mvHQ"),i=e.n(a),o=e("VsUZ"),c=e("q3TC"),n=e("2ikn"),l=(e("YtJ0"),e("X2Oc")),r={name:"ShowCart",components:{HotCart:c.a,Collection:n.a},data:function(){return{activeName:"first",searchData:"",tempfilePath:"http://localhost:8089/img/",searchImgurl:e(!function(){var t=new Error('Cannot find module "../../static/img/index/logo.png"');throw t.code="MODULE_NOT_FOUND",t}()),cartList:[],cartListChosed:!1,cartchoseNum:0,allNum:0,allPrice:0}},beforeRouteEnter:function(t,s,e){window.scrollTo(0,0),e()},created:function(){this.getCartList()},mounted:function(){window.onscroll=function(t){var s=window.innerHeight,e=document.documentElement.scrollTop||document.body.scrollTop,a=document.body.scrollHeight,i=document.getElementById("bar-bottom");i&&(i.style.position=a-e-390-800<s?"relative":"fixed")}},methods:{cartToLike:function(t){var s=this,e={},a={};a.userId=t.userId,a.id=t.id,a.goodsId=t.goodsId,e.send=a,e.url="cart/cartToLike",Object(l.a)(e,function(t){100==t.code?(s.$Message.success("移动成功！"),s.getCartList()):s.$Message.error("移动失败！")})},toPay:function(){var t=[];this.cartList.forEach(function(s){s.choosed&&t.push(s)}),this.$router.push({path:"/order",query:{listItem:i()(t),totalPrice:this.allPrice}})},clearOpen:function(){var t=this;this.$confirm("确定清空购物车吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.clearCart()}).catch(function(){t.$message({type:"info",message:"取消清空"})})},clearCart:function(){var t=this,s=JSON.parse(localStorage.getItem("userdata")).id,e={},a={};a.userId=s,e.send=a,e.url="cart/clearCart",Object(l.a)(e,function(s){100==s.code&&(t.cartList=[],t.$message({type:"success",message:"清空成功!"}))})},deleteByBatch:function(){var t=this,s=[];this.cartList.forEach(function(t){t.choosed&&s.push(t.id)}),this.$confirm("是否删除这些商品?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.delByBatch(s)}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},delByBatch:function(t){var s=this;console.log(t);this.axios({method:"GET",url:"http://localhost:8089/hf/cart/deleteByBatch?ids="+t}).then(function(t){console.log(t),100==t.data.code?(s.getCartList(),s.$message({type:"success",message:"删除成功!"})):s.$message({type:"error",message:"删除失败!"})})},choose:function(t){t.choosed?this.chooseItemfalse(t):this.chooseItemtrue(t)},chooseItemtrue:function(t){t.choosed=!0,++this.cartchoseNum===this.cartList.length?this.cartListChosed=!0:this.cartListChosed=!1,this.allNum+=parseInt(t.quantity),this.allPrice+=parseInt(t.sum)},chooseItemfalse:function(t){t.choosed=!1,--this.cartchoseNum,this.cartListChosed=!1,this.allNum-=parseInt(t.quantity),this.allPrice-=parseInt(t.sum)},choosefalse:function(t){var s=this;this.cartList.forEach(function(t){1==t.choosed&&s.chooseItemfalse(t)})},choosetrue:function(t){var s=this;this.cartList.forEach(function(t){0==t.choosed&&s.chooseItemtrue(t)})},cartchoose:function(){var t=this;this.cartListChosed=!this.cartListChosed,this.cartListChosed?this.cartList.forEach(function(s){t.choosetrue(s)}):this.cartList.forEach(function(s){t.choosefalse(s)})},open:function(t){var s=this;console.log(t),this.$confirm("是否删除该商品?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var e={},a={};a.id=t,e.send=a,e.url="cart/deleteOne",Object(l.a)(e,function(e){if(100==e.code){for(var a=s.cartList,i=0;i<a.length;i++)a[i].id==t&&(a.splice(i,1),s.cartList=a);s.$message({type:"success",message:"删除成功!"})}})}).catch(function(){s.$message({type:"info",message:"已取消删除"})})},calculate:function(t){var s=t.sum,e=s/t.goods.sellPrice;t.quantity=parseInt(t.quantity),0==t.quantity?(this.$Message.error("数量不可以为0"),t.quantity=e):t.sum=t.quantity*t.goods.sellPrice,t.quantity>50&&(this.$Message.error("最多只能添加50个哦"),t.quantity=50,t.sum=t.quantity*t.goods.sellPrice);var a=t.sum-s,i=t.quantity-e;t.choosed&&(this.allPrice+=a,this.allNum+=i);var c=t.id,n=t.quantity;o.a.updateCart(c,n).then(function(t){})},reduce:function(t){if(1!==t.quantity){t.quantity--,t.sum-=t.goods.sellPrice,t.choosed&&(this.allNum--,this.allPrice-=t.goods.sellPrice);var s=t.id,e=t.quantity;o.a.updateCart(s,e).then(function(t){})}},add:function(t){if(50!==t.quantity){t.quantity++,t.sum+=t.goods.sellPrice,t.choosed&&(console.log("i am chosed"),this.allNum++,this.allPrice+=t.goods.sellPrice);var s=t.id,e=t.quantity;o.a.updateCart(s,e).then(function(t){})}},handleClick:function(t,s){},getCartList:function(){var t=this,s={},e={},a=JSON.parse(localStorage.getItem("userdata")).id;console.log(a),e.userId=a,null!=a||void 0!=a?(s.send=e,s.url="cart/showCart",Object(l.a)(s,function(s){console.log(s),100==s.code&&(s.extend.cartList.forEach(function(t){t.choosed=!1,t.sum=t.quantity*t.goods.sellPrice}),t.cartList=s.extend.cartList)})):this.$router.push("/loign")},goSearch:function(){}}},u={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"top0"},[e("div",{staticClass:"top1"},[e("img",{attrs:{src:t.searchImgurl}})]),t._v(" "),e("div",{staticClass:"top2"},[e("Input",{staticClass:"sousuo",staticStyle:{outline:"none"},attrs:{size:"large",placeholder:"输入你想查找的商品"},model:{value:t.searchData,callback:function(s){t.searchData=s},expression:"searchData"}},[e("Button",{staticClass:"searchBtn",attrs:{slot:"append",icon:"ios-search"},on:{click:t.goSearch},slot:"append"})],1)],1)]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"goods-list-container"},[e("div",{attrs:{id:"cart"}},[e("section",{directives:[{name:"show",rawName:"v-show",value:0==t.cartList.length,expression:"cartList.length ==0"}],staticClass:"cartMain"},[e("div",{staticClass:"no-cart"},[e("p",{staticClass:"no-cart-text"},[t._v("您的购物车当前木有商品\r\n            "),e("router-link",{attrs:{to:"/"}},[t._v("立即购买")])],1)])]),t._v(" "),e("section",{directives:[{name:"show",rawName:"v-show",value:0!=t.cartList.length,expression:"cartList.length !=0"}],staticClass:"cartMain",attrs:{id:"cartMain"}},[e("div",{staticClass:"cartMain_hd"},[e("ul",{staticClass:"order_lists cartTop"},[e("li",{staticClass:"list_chk"},[e("input",{staticClass:"whole_check",attrs:{type:"checkbox",id:"all"}}),t._v(" "),e("label",{class:t.cartListChosed?"mark":"",attrs:{for:"all"},on:{click:function(s){return t.cartchoose()}}}),t._v(" "),t._v("\r\n                        全选\r\n                    ")]),t._v(" "),e("li",{staticClass:"list_con"},[t._v("商品信息")]),t._v(" "),e("li",{staticClass:"list_info"},[t._v("商品参数")]),t._v(" "),e("li",{staticClass:"list_price"},[t._v("单价")]),t._v(" "),e("li",{staticClass:"list_amount"},[t._v("数量")]),t._v(" "),e("li",{staticClass:"list_sum"},[t._v("金额")]),t._v(" "),e("li",{staticClass:"list_op"},[t._v("操作")])])]),t._v(" "),e("div",{staticClass:"cartBox",attrs:{id:"cartBox"}},[e("div",{staticClass:"shop_info"},[e("div",{staticClass:"shop_name"},[t._v("\r\n                        店铺："),e("router-link",{attrs:{to:"/aboutUs"}},[t._v("XX彩妆")])],1)]),t._v(" "),e("div",{staticClass:"order_content"},t._l(t.cartList,function(s,a){return e("ul",{key:a,staticClass:"order_lists list-border"},[e("li",{staticClass:"list_chk"},[e("input",{staticClass:"son_check",attrs:{type:"checkbox",id:"checkbox_2"}}),t._v(" "),e("label",{class:s.choosed?"mark":"",attrs:{for:"checkbox_2","data-goodsId":s.id},on:{click:function(e){return t.choose(s)}}})]),t._v(" "),e("li",{staticClass:"list_con"},[e("div",{staticClass:"list_img"},[e("a",{attrs:{href:"javascript:;"}},[e("el-popover",{attrs:{placement:"right",title:"",trigger:"hover"}},[e("img",{staticClass:"img-cart",staticStyle:{width:"200px",height:"200px"},attrs:{src:t.tempfilePath+s.goods.picture,alt:""}}),t._v(" "),e("img",{staticStyle:{width:"80px",height:"80px"},attrs:{slot:"reference",src:t.tempfilePath+s.goods.picture,alt:""},slot:"reference"})])],1)]),t._v(" "),e("div",{staticClass:"list_text"},[e("router-link",{attrs:{target:"_blank",to:{path:"/goodsDetail",query:{goodsId:s.goods.id}}}},[t._v("\r\n                                "+t._s(s.goods.description)+"\r\n                              ")]),t._v(" "),e("span",{staticClass:"list_custom"},[t._v("定制")])],1)]),t._v(" "),e("li",{staticClass:"list_info"},[e("p",[t._v("规格：默认")]),t._v(" "),e("p",[t._v("尺码："+t._s(s.size))])]),t._v(" "),e("li",{staticClass:"list_price"},[e("p",{staticClass:"price"},[t._v("￥"+t._s(s.goods.sellPrice))]),t._v(" "),t._m(1,!0)]),t._v(" "),e("li",{staticClass:"list_amount"},[e("div",{staticClass:"amount_box"},[e("a",{staticClass:"reduce reSty",attrs:{href:"javascript:;"},on:{click:function(e){return t.reduce(s)}}},[t._v("-")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:s.quantity,expression:"item.quantity"}],staticClass:"sum",attrs:{type:"number",max:"50",min:"1",minlength:"1"},domProps:{value:s.quantity},on:{input:[function(e){e.target.composing||t.$set(s,"quantity",e.target.value)},function(e){return t.calculate(s)}]}}),t._v(" "),e("a",{staticClass:"plus",attrs:{href:"javascript:;"},on:{click:function(e){return t.add(s)}}},[t._v("+")])])]),t._v(" "),e("li",{staticClass:"list_sum"},[e("p",{staticClass:"sum_price"},[t._v("￥"+t._s(s.sum))])]),t._v(" "),e("li",{staticClass:"list_op"},[e("p",{staticClass:"collect",on:{click:function(e){return t.cartToLike(s)}}},[e("a",{staticClass:"colBtn"},[t._v("移到收藏夹")])]),t._v(" "),e("p",{staticClass:"del"},[e("el-button",{attrs:{type:"text"},on:{click:function(e){return t.open(s.id)}}},[e("a",{staticClass:"delBtn"},[t._v("删除商品")])])],1)])])}),0)]),t._v(" "),e("div",{staticClass:"bar-wrapper",attrs:{id:"bar-bottom"}},[e("div",{staticClass:"bar-left"},[e("div",{staticClass:"left-chose"},[e("input",{attrs:{type:"checkbox",id:"forAll"}}),e("label",{class:t.cartListChosed?"mark":"",attrs:{for:"forAll"},on:{click:function(s){return t.cartchoose()}}})]),t._v(" "),e("div",{staticClass:"left-all"},[t._v(" 全选")]),t._v(" "),e("div",{staticClass:"left-del"},[e("el-button",{attrs:{type:"text"},on:{click:function(s){return t.deleteByBatch()}}},[e("a",{staticClass:"colBtn"},[t._v("删除")])])],1),t._v(" "),t._m(2),t._v(" "),e("div",{staticClass:"left-op"},[e("el-button",{attrs:{type:"text"},on:{click:function(s){return t.clearOpen()}}},[e("a",{staticClass:"colBtn",attrs:{href:"javascript:;"}},[t._v("清空购物车")])])],1)]),t._v(" "),e("div",{staticClass:"bar-right"},[e("div",{staticClass:"piece"},[t._v("已选商品"),e("strong",{staticClass:"piece_num"},[t._v(t._s(t.allNum))]),t._v("件")]),t._v(" "),e("div",{staticClass:"totalMoney"},[t._v("共计: "),e("strong",{staticClass:"total_text"},[t._v("￥"+t._s(t.allPrice))])]),t._v(" "),e("div",{staticClass:"calBtn"},[e("a",{class:0!=t.allPrice?"btn_sty":"",on:{click:function(s){return t.toPay()}}},[t._v("结算")])])])])])])]),t._v(" "),e("div",{staticClass:"last"},[e("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(s){t.activeName=s},expression:"activeName"}},[e("el-tab-pane",{attrs:{label:"掌柜热卖",name:"first"}},[e("hot-cart")],1),t._v(" "),e("el-tab-pane",{attrs:{label:"最近收藏",name:"second"}},[e("collection",{attrs:{a:"a"}})],1)],1)],1)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"search-nav"},[s("div",{staticClass:"search-nav-container"},[s("ul",[s("li",[this._v("全部商品")]),this._v(" "),s("li",[this._v("库存不足")]),this._v(" "),s("li",[this._v("降价商品")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"charge"},[s("p",[this._v("更多促销")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"left-op"},[s("a",{staticClass:"colBtn",attrs:{href:"javascript:;"}},[this._v("移到收藏夹")])])}]};var d=e("VU/8")(r,u,!1,function(t){e("t1kg"),e("XyBG")},"data-v-51ae9b80",null);s.default=d.exports},t1kg:function(t,s){},wv4G:function(t,s,e){t.exports=e.p+"static/img/no-goods.abb4d7a.png"}});
//# sourceMappingURL=8.1a8dc48feb75f42b6cdd.js.map