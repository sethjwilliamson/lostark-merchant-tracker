<template>
  <div id="app">
    <wandering-merchant />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import dayjs from 'dayjs'
import WanderingMerchant from './components/WanderingMerchant.vue'

export default Vue.extend({
  name: 'App',
  components: {
    WanderingMerchant

  },
  computed: {
    today: function () {
      return dayjs()
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
