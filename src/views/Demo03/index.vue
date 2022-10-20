<template>
    <div>
        <van-nav-bar title="模拟生产消费者" fixed>
        </van-nav-bar>
        <div class="thread-list">
          <van-notice-bar color="#1989fa" background="#ecf9ff" left-icon="info-o">
            制作 By NEMO
          </van-notice-bar>
          <ProcessItem></ProcessItem>
        </div>
    </div>
</template>

<script>
import ProcessItem from './processItem.vue'
export default {
  components: { ProcessItem },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style>
/* 内容底部内边距(把内容往上挤压, 防止内部被底部导航挡住) */
.home_container {
    padding-bottom: 50px;
}

/* 底部导航上边框 */
.van-tabbar {
    border-top: 1px solid #f8f8f8;
}
</style>
