<template>
  <div>
  <div class="thread-container">
    <div class="van-hairline--bottom">
      <van-row type="flex" justify="space-between" align="center">
        <van-col align="center">
          <p class="thread-name">进程{{id}}</p>
          <van-switch size="24px" v-model="checked" />
        </van-col>

          <van-col class="single-thread">
              <div class="filler" :style="styleAnimaStr">

              </div>
          </van-col>
      </van-row>
    </div>

  </div>
  </div>
  </template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: 'threadItem',
  props: ['countAdd', 'countMinus', 'speedMultiplier', 'id'],
  mounted () {
    this.subId = pubsub.subscribe('speedChangeEv', (name, data) => {
      // 改变速率
      this.time = 0.5 / data
    })
    pubsub.publish('sendSpeedEv', '')
  },
  data () {
    return {
      checked: true,
      time: 0.5
    }
  },
  watch: {
    checked: {
      immediate: true,
      handler (newVal, oldVal) {
        if (newVal === true) this.countAdd()
        else this.countMinus()
      }
    }
  },
  computed: {
    styleAnimaStr () {
      if (this.checked) {
        return `animation:progress ${this.time * this.speedMultiplier}s infinite alternate`
      } else {
        return ''
      }
    }
  }
}
</script>

  <style>
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
