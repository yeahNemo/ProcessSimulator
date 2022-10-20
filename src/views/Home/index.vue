<template>
    <div>
        <van-nav-bar title="进程并发模拟" fixed>
        </van-nav-bar>
        <div class="thread-list">
          <van-notice-bar color="#1989fa" background="#ecf9ff" left-icon="info-o">
            制作 By NEMO
          </van-notice-bar>
            <ThreadItem :id="count" :speedMultiplier="activeCount" :countAdd="countAdd" :countMinus="countMinus"
            v-for="count in threadCount" :key="count"></ThreadItem>
        </div>

        <van-row class="button-group" type="flex" justify="center">
            <van-button plain round type="primary" @click="totalCountAdd">添加进程</van-button>
            <van-col span="3"></van-col>
            <van-button plain round type="primary" @click="totalCountMinus">删除进程</van-button>
        </van-row>
    </div>
</template>

<script>
import ThreadItem from '@/views/Home/threadItem.vue'
export default {
  name: 'threadList',
  data () {
    return {
      threadCount: 1,
      activeCount: 0
    }
  },
  methods: {
    totalCountAdd () {
      this.threadCount++
    },
    totalCountMinus () {
      if (this.threadCount <= 1) {
        this.$toast('至少留有一个进程')
        return
      }
      this.threadCount--
      if (this.activeCount > 1) {
        this.activeCount--
      }
    },
    countAdd () {
      this.activeCount++
    },
    countMinus () {
      if (this.activeCount === 0) { return }
      this.activeCount--
    }
  },
  components: { ThreadItem }
}
</script>

<style>
.button-group{
    padding-top: 50px;
}
.thread-list{
    padding-top: 46px;
}
</style>
