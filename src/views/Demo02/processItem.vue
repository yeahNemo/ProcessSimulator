<template>
<div>
<div class="thread-container">
  <div class="single-container">
    <van-row type="flex" justify="space-between" align="center">
      <van-col align="center">
        <p class="thread-name">进程1</p>
      </van-col>

        <van-col class="single-thread">
            <div class="filler" :style="styleAnimaStr01">
            </div>
        </van-col>
    </van-row>
  </div>
  <div class="single-container">
    <van-row type="flex" justify="space-between" align="center">
      <van-col align="center">
        <p class="thread-name">进程2</p>
      </van-col>

        <van-col class="single-thread">
            <div class="filler" :style="styleAnimaStr02">
            </div>
        </van-col>
    </van-row>
  </div>
  <div class="single-container">
    <van-row type="flex" justify="space-between" align="center">
      <van-col align="center">
        <p class="thread-name">进程3</p>
      </van-col>

        <van-col class="single-thread">
            <div class="filler" :style="styleAnimaStr03">
            </div>
        </van-col>
    </van-row>
  </div>
  <van-row type="flex" justify="center" align="center">
          <van-switch size="24px" v-model="isTimeSlice" />
          <van-col span="1"></van-col>
          <p style="font-size:80%">时间片轮转</p>
        </van-row>
  <van-row class="button-group" type="flex" justify="center">
    <van-button plain round type="primary" @click="start">开始</van-button>
    <van-col span="3"></van-col>
    <van-button plain round type="primary" @click="stop">停止</van-button>
  </van-row>

</div>
</div>
</template>

<script>
export default {
  name: 'processItem',
  data () {
    return {
      styleAnimaStr01: '',
      styleAnimaStr02: '',
      styleAnimaStr03: '',
      isTimeSlice: false,
      width01: 10,
      width02: 10,
      width03: 10,
      timer01: null,
      timer02: null,
      timer03: null
    }
  },
  methods: {
    timeSliceStart () {
      // 先进行重置操作
      this.stop()
      setTimeout(() => {
        this.styleAnimaStr01 = `width:${this.width01}%`
        this.timer01 = setInterval(() => {
          if (this.width01 < 100) {
            this.width01 += 10
            this.styleAnimaStr01 = `width:${this.width01}%`
          }
        }, 1500)
      }, 0)
      setTimeout(() => {
        this.styleAnimaStr02 = `width:${this.width02}%`
        this.timer02 = setInterval(() => {
          if (this.width02 < 100) {
            this.width02 += 10
            this.styleAnimaStr02 = `width:${this.width02}%`
          }
        }, 1500)
      }, 500)
      setTimeout(() => {
        this.styleAnimaStr03 = `width:${this.width03}%`
        this.timer03 = setInterval(() => {
          if (this.width03 < 100) {
            this.width03 += 10
            this.styleAnimaStr03 = `width:${this.width03}%`
          }
        }, 1500)
      }, 1000)
    },
    start () {
      if (!this.isTimeSlice) {
        this.styleAnimaStr01 = 'animation:progress 1.0s alternate;animation-fill-mode:forwards;'
        setTimeout(() => {
          this.styleAnimaStr02 = 'animation:progress 1.0s alternate;animation-fill-mode:forwards;'
          setTimeout(() => {
            this.styleAnimaStr03 = 'animation:progress 1.0s alternate;animation-fill-mode:forwards;'
          }, '1000')
        }, '1000')
      } else {
        this.timeSliceStart()
      }
    },
    stop () {
      this.styleAnimaStr01 = this.styleAnimaStr02 = this.styleAnimaStr03 = ''
      clearInterval(this.timer01)
      this.width01 = 10
      clearInterval(this.timer02)
      this.width02 = 10
      clearInterval(this.timer03)
      this.width03 = 10
    },
    pause () {
      this.styleAnimaStr = 'animation:progress 0.8s alternate;animation-fill-mode:forwards;animation-play-state: paused;'
      setTimeout(this.resume, '100')
    },
    resume () {
      this.styleAnimaStr = 'animation:progress 0.8s alternate;animation-fill-mode:forwards;animation-play-state: running;'
    },
    startAnima () {
      this.styleAnimaStr = 'animation:progress 0.8s alternate;animation-fill-mode:forwards;'
    },
    delayPlay () {
      setTimeout(this.startAnima, this.animaDelay)
    }
  },
  watch: {
    width01 (newVal) {
      if (newVal === 100) {
        clearInterval(this.timer01)
        this.width01 = 10
      }
    },
    width02 (newVal) {
      if (newVal === 100) {
        clearInterval(this.timer02)
        this.width02 = 10
      }
    },
    width03 (newVal) {
      if (newVal === 100) {
        clearInterval(this.timer03)
        this.width03 = 10
      }
    }
  },
  computed: {
  }
}
</script>

<style>
.single-container {
  margin-bottom: 20px;
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
        padding-bottom: 15px;
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
