<template>
    <div>
    <div class="thread-container">
      <div class="main-container">
        <van-row type="flex" justify="space-between" align="center">
          <van-col align="center">
            <van-row type="flex">
              <van-checkbox v-model="producer_is_active"></van-checkbox>
              <p class="thread-name">生产者</p>
            </van-row>
            <van-switch size="24px" v-model="producer_is_start" :disabled="!producer_is_active"/>
          </van-col>
          <van-col class="single-thread">
              <div class="filler" :style="styleAnimaStr">

              </div>
          </van-col>
        </van-row>

        <van-row class="circle-progress">
          缓冲区占用：{{itemNum}}
        </van-row>
        <!-- 圆形进度条 -->
        <van-row type="flex" justify="center">
          <van-circle v-model="currentRate" :rate="itemNum*10" :speed="50" :text="text" :color="gradientColor" />
        </van-row>
        <!-- 消费者 -->
        <van-row type="flex" justify="space-between" align="center">
          <van-col align="center">
            <van-row type="flex">
              <van-checkbox v-model="consumer_is_active"></van-checkbox>
              <p class="thread-name">消费者</p>
            </van-row>
            <van-switch size="24px" v-model="consumer_is_start" :disabled="!consumer_is_active"/>
          </van-col>
            <van-col class="single-thread">
                <div class="filler" :style="styleAnimaStr2">

                </div>
            </van-col>
        </van-row>
        <!-- 按钮 -->
        <van-row type="flex" justify="center">
          <van-button plain round type="primary" @click="reset">重置</van-button>
          <van-col span="3"></van-col>
          <van-button plain round type="primary" @click="showInfo">提示</van-button>
        </van-row>

      </div>

    </div>
    </div>
    </template>

<script>
import { Dialog } from 'vant'
export default {
  name: 'processItem',
  props: [],
  methods: {
    showInfo () {
      Dialog.alert({
        title: '提示',
        message: '单选框为是否激活进程,\n开关为手动暂停/开始进程'
      }).then(() => {
      // on close
      })
    },
    reset () {
      this.itemNum = 0
      this.producer_anima_stop()
      this.consumer_anima_stop()
      this.producer_anima_start = false
      this.consumer_anima_start = false
      this.consumer_is_active = false
      this.producer_is_active = false
    },
    addItem () {
      if (this.itemNum < 10) {
        this.itemNum++
      }
    },
    delItem () {
      if (this.itemNum > 0) {
        this.itemNum--
      }
    },
    producer_anima_start () {
      if (!this.producer_anima_flag) {
        this.styleAnimaStr = 'animation:progress 0.5s infinite;'
        this.proTimeIntervalId = setInterval(this.addItem, '500')
        this.producer_anima_flag = true
      }
    },
    producer_anima_stop () {
      if (this.producer_anima_flag) {
        this.styleAnimaStr = ''
        clearInterval(this.proTimeIntervalId)
        this.producer_anima_flag = false
      }
    },
    consumer_anima_start () {
      if (!this.consumer_anima_flag) {
        this.styleAnimaStr2 = 'animation:progress 1.0s infinite;'
        this.proTimeIntervalId2 = setInterval(this.delItem, '1000')
        this.consumer_anima_flag = true
      }
    },
    consumer_anima_stop () {
      if (this.consumer_anima_flag) {
        this.styleAnimaStr2 = ''
        clearInterval(this.proTimeIntervalId2)
        this.consumer_anima_flag = false
      }
    }
  },
  data () {
    return {
      styleAnimaStr: '',
      styleAnimaStr2: '',
      itemNum: 0, // 每一次动画结束+1
      proTimeIntervalId: '',
      proTimeIntervalId2: '',
      currentRate: 0,
      gradientColor: {
        '0%': '#3fecff',
        '100%': '#6149f6'
      },
      producer_is_active: false,
      consumer_is_active: false,
      producer_is_start: false,
      consumer_is_start: false,
      producer_anima_flag: false,
      consumer_anima_flag: false
    }
  },
  watch: {
    producer_is_start (newVal) {
      if (!this.producer_is_active) {
        return
      }
      if (newVal) {
        this.producer_anima_start()
      } else {
        this.producer_anima_stop()
      }
    },
    consumer_is_start (newVal) {
      if (!this.consumer_is_active) {
        return
      }
      if (newVal) {
        this.consumer_anima_start()
      } else {
        this.consumer_anima_stop()
      }
    },
    producer_is_active (newVal) {
      if (newVal) {
        this.producer_anima_start()
        this.producer_is_start = true
      } else {
        this.producer_anima_stop()
        this.producer_is_start = false
      }
    },
    consumer_is_active (newVal) {
      if (newVal) {
        this.consumer_anima_start()
        this.consumer_is_start = true
      } else {
        this.consumer_anima_stop()
        this.consumer_is_start = false
      }
    },
    // 唤醒和停止
    itemNum (newVal, oldVal) {
      if (this.producer_is_active) {
        if (newVal < 10) {
          this.producer_anima_start()
          this.producer_is_start = true
        }
      }
      if (this.consumer_is_active) {
        if (newVal > 0) {
          this.consumer_anima_start(true)
          this.consumer_is_start = true
        }
      }
      if (newVal === 0) {
        this.consumer_anima_stop()
        this.consumer_is_start = false
      } else if (newVal === 10) {
        this.producer_anima_stop()
        this.producer_is_start = false
      }
    }
  },
  computed: {
    text () {
      return this.currentRate.toFixed(0) + '%'
    }
  }
}
</script>

<style>
    .main-container{
      margin-top:4px
    }
    .circle-progress{
      margin-top: 15px;
      margin-bottom: 15px
    }
    .thread-name{
      font-size: 16px;
      margin-top: 9px;
      margin-bottom: 9px;
    }
    .button-group{
        padding-top: 10px;
    }
    .thread-container{
        padding-top: 10px;
        padding-left: 10px;
        padding-right: 10px;
    }
    .single-thread{
        /* border: 2px solid black; */
        width: 80%;
        height:40px;
        border-radius: 25px;
    }

    .filler{
        /* background-color: rgba(49, 98, 187, 0.898); */
        background-color: rgba(81, 140, 249, 0.898);
        width:0%;
        height: 100%;
        border-radius: 25px;
    }

    @keyframes progress {
        from{
            width: 0%
        }
        to{
            width:100%
        }
    }
    </style>
