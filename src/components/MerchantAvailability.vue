<template>
    <div class="merchant-availability">
        <template v-if="isActive">
            <active-indicator />
            <span>
                Ends {{ now.clone().set('minutes', 55).fromNow() }}
            </span>
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
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(relativeTime)

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
            if (this.now.minute < 0 || this.now.minute >= 55) {
                return false
            }

            if (this.times.includes(this.now.hour())) {
                return true
            }

            return false
        },
        nextHourAvailable: function () {
            return 0
        }

    }
})
</script>
