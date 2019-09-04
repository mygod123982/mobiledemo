<template>
<!-- 侧边导航条 -->
<div class="productlist">
  <div class="left wrapper" ref="wrapper">
    <van-sidebar v-model="activeKey">
      <van-sidebar-item :title="item.name" v-for="item in categorylist" :key="item.id"/>
    </van-sidebar>
  </div>

<!-- 动态渲染的内容列表 -->
  <div class="content">
    <p>1233</p>
    <p>1233</p>
    <p>1233</p>
    <p>1233</p>
    <p>1233</p>
    <p>1233</p>
  </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      activeKey: 0,
      categorylist: [],
      productlist: {}
    }
  },
  methods: {
    async meus () {
      const { data } = await this.$axios.get('/api/list')
      if (data.errno === 0) {
        console.log(data)
        this.categorylist = data.data.categories
        this.productlist = data.data.products
      }
    }
  },
  async created () {
    const { data } = await this.$axios.get('/api/list')
    if (data.errno === 0) {
      console.log(data)
      this.categorylist = data.data.categories
      this.productlist = data.data.products
    }
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {})
    })
  },
  mounted () {

  }

}
</script>

<style lang="scss">
.productlist {
  height: 100%;
  overflow: auto;
  display: flex;

}
  .van-nav-bar {
    background-color: yellow;
  }

</style>
