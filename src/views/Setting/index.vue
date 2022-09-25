<template>
  <div>
    <van-nav-bar title="设置" fixed> </van-nav-bar>
    <div class="main">
      <van-field label="单进程速度">
        <template #extra>
          <van-stepper
            v-model="speedMultiplier"
            theme="round"
            button-size="22"
            disable-input
          />
        </template>
      </van-field>
    </div>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  mounted () {
    this.subId = pubsub.subscribe('sendSpeedEv', (name, data) => {
      this.onChangeSpeed()
    })
  },
  data () {
    return {
      speedMultiplier: 1
    }
  },
  methods: {
    onChangeSpeed () {
      pubsub.publish('speedChangeEv', this.speedMultiplier)
    }
  },
  watch: {
    speedMultiplier (newVal, oldVal) {
      this.onChangeSpeed(newVal)
    }
  }
}
</script>

<style scoped>
.main {
  padding-top: 50px;
}
</style>
