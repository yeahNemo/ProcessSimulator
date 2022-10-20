<template>
    <div>
        <van-nav-bar title="模拟进程调度" fixed>
        </van-nav-bar>
        <div class="thread-list">
          <van-notice-bar color="#1989fa" background="#ecf9ff" left-icon="info-o">
            制作 By NEMO
          </van-notice-bar>
            <!-- <ThreadItem :id="count" :speedMultiplier="activeCount" :countAdd="countAdd" :countMinus="countMinus"
            v-for="count in threadCount" :key="count"></ThreadItem> -->
            <!-- <ProcessItem  v-for="i in 3" :key="i" ></ProcessItem> -->
            <div v-show="!checked">
              <ProcessItem delayTime="0" :isTimeSlice="false"></ProcessItem>
              <ProcessItem delayTime="0.8" :isTimeSlice="false"></ProcessItem>
              <ProcessItem delayTime="1.6" :isTimeSlice="false"></ProcessItem>
            </div>
            <div v-show="checked">
              <ProcessItem delayTime="0" :isTimeSlice="true"></ProcessItem>
              <ProcessItem delayTime="0.1" :isTimeSlice="true"></ProcessItem>
              <ProcessItem delayTime="0.2" :isTimeSlice="true"></ProcessItem>
            </div>

        </div>

        <van-row type="flex" justify="center" align="center">
          <van-switch size="24px" v-model="checked" />
          <van-col span="1"></van-col>
          <p style="font-size:80%">时间片轮转</p>
        </van-row>

        <van-row class="button-group" type="flex" justify="center">
          <van-button plain round type="primary" @click="startAnima">开始</van-button>
          <van-col span="3"></van-col>
          <van-button plain round type="primary" @click="stopAnima">停止</van-button>
        </van-row>
    </div>
</template>

<script>
import ProcessItem from './processItem.vue'
import pubsub from 'pubsub-js'
export default {
  components: { ProcessItem },
  data () {
    return {
      checked: false
    }
  },
  methods: {
    startAnima () {
      pubsub.publish('startAnimaEv', '')
    },
    stopAnima () {
      pubsub.publish('stopAnimaEv', '')
    }
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
