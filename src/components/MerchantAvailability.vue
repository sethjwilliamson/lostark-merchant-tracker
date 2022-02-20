<template>
    <div class="merchant-availability">
        <template v-if="isActive">
            <active-indicator v-if="isActive" />
        </template>
        <template v-else>
            Not Active
        </template>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ActiveIndicator from './ActiveIndicator.vue'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(timezone)

export default Vue.extend({
    components: {
        ActiveIndicator
    },
    props: {
        times: Array
    },
    data: function () {
        return {
            now: dayjs(),
            interval: 0
        }
    },
    created: function () {
        this.interval = setInterval(() => {
            this.now = dayjs().tz('America/New_York')
        }, 1000)
    },
    beforeDestroy: function () {
        clearInterval(this.interval)
    },
    computed: {
        isActive: function () {
            for (const hour of this.times) {
                if (dayjs() >= this.now.clone().set('hour', hour).set('minutes', 30) &&
                    dayjs() < this.now.clone().set('hour', hour).set('minutes', 55)) {
                    return true
                }
            }

            return false
        }
    }
})
</script>
