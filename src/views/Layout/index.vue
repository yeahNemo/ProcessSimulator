<template>
    <div>
        <div class="home_container">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>

        <!-- 底部导航 -->
        <van-tabbar active-color="#52A38C" v-model="active">
            <van-tabbar-item name="home" icon="home-o" to="/layout/home">主页
            </van-tabbar-item>
            <van-tabbar-item name="friends" icon="setting-o" to="/layout/setting">设置
            </van-tabbar-item>
        </van-tabbar>

    </div>
</template>

<script>
export default {
  name: 'Layout',
  data () {
    return {
      active: 'home'
    }
  }
}
</script>

<style scoped lang="less">
    /* 内容底部内边距(把内容往上挤压, 防止内部被底部导航挡住) */
    .home_container {
        padding-bottom: 50px;
    }

    /* 底部导航上边框 */
    .van-tabbar {
        border-top: 1px solid #f8f8f8;
    }
</style>
