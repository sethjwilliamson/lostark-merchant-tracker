<template>
    <div class="merchant-availability">
        {{ now }}
        <active-indicator />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ActiveIndicator from './ActiveIndicator.vue'
import dayjs from 'dayjs'

export default Vue.extend({
    components: {
        ActiveIndicator
    },
    data: function () {
        return {
            now: dayjs(),
            interval: 0
        }
    },
    created: function () {
        this.interval = setInterval(() => {
            this.now = dayjs()
        }, 1000)
    },
    beforeDestroy: function () {
        clearInterval(this.interval)
    },
    computed: {

    }
})
</script>
