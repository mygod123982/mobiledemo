<template>
  <div class="mk-index">
    <!-- 头部区域 -->
  <van-nav-bar  title="demo商店" fixed/>
  <!-- 中间内容部分 -->
  <router-view></router-view>
  <!-- 底部分页部分 -->
  <van-tabbar v-model="active" fixed route >
    <van-tabbar-item name="product" icon="home-o" replace
    to="/product">首页</van-tabbar-item>
    <van-tabbar-item name="productlist" icon="search" replace to="/productlist">超市商品</van-tabbar-item>
    <van-tabbar-item name="productcart" icon="shopping-cart-o" replace to="/productcart">购物车</van-tabbar-item>
    <van-tabbar-item name="user" icon="friends-o" replace to="/user">我的</van-tabbar-item>
  </van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 'productlist'
    }
  }
}
</script>

<style scoped lang="scss">
.mk-index {
  height: 100%;
  padding-bottom: 50px;
  padding-top: 46px;
  .van-nav-bar {
    background-color: skyblue;
    .van-nav-bar__title {
      font-size: 26px;
      font-weight: bold;
    }
  }
  .van-tabbar {
    border-top: 1px solid #efefef;
  }
}

</style>
