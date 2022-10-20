<template>
    <div>
    <div class="thread-container">
      <div class="van-hairline--bottom">
        <van-row type="flex" justify="space-between" align="center">
          <van-col align="center">
            <p class="thread-name">进程</p>
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
  name: 'processItem',
  props: ['delayTime', 'isTimeSlice'],
  mounted () {
    this.subId = pubsub.subscribe('startAnimaEv', (name, data) => {
      this.delayPlay()
    })
    this.subId = pubsub.subscribe('stopAnimaEv', (name, data) => {
      this.styleAnimaStr = ''
    })
  },
  data () {
    return {
      styleAnimaStr: '',
      animaDelay: this.delayTime * 1000
    }
  },
  methods: {
    pause () {
      this.styleAnimaStr = 'animation:progress 0.8s alternate;animation-fill-mode:forwards;animation-play-state: paused;'
      setTimeout(this.resume, '100')
    },
    resume () {
      this.styleAnimaStr = 'animation:progress 0.8s alternate;animation-fill-mode:forwards;animation-play-state: running;'
    },
    startAnima () {
      this.styleAnimaStr = 'animation:progress 0.8s alternate;animation-fill-mode:forwards;'
      if (this.isTimeSlice) {
        setInterval(this.pause, '100')
      }
    },
    delayPlay () {
      setTimeout(this.startAnima, this.animaDelay)
    }
  },
  watch: {
  },
  computed: {
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
