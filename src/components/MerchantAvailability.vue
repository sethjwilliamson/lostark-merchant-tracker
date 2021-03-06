<template>
    <div class="merchant-availability">
        <template v-if="isActive">
            <active-indicator />
            <span>
                Ends {{ now.clone().set('minutes', 55).fromNow() }}
            </span>
        </template>
        <template v-else>
            <span>
                Starts {{ now.clone().set('hour', nextHourAvailable).set('minutes', 30).fromNow() }}
            </span>
        </template>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ActiveIndicator from './ActiveIndicator.vue'
import dayjs, { Dayjs } from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(relativeTime)

declare interface BaseComponentData {
  now: Dayjs,
  interval: number
}

export default Vue.extend({
    components: {
        ActiveIndicator
    },
    props: {
        times: Array as () => number[]
    },
    data: function () : BaseComponentData {
        return {
            now: dayjs() as Dayjs,
            interval: 0
        }
    },
    created: function () {
        this.interval = setInterval(() => {
            this.now = dayjs().tz('America/New_York') as Dayjs
        }, 1000) as number
    },
    beforeDestroy: function () {
        clearInterval(this.interval)
    },
    computed: {
        isActive: function () : boolean {
            if (this.now.minute() < 30 || this.now.minute() >= 55) {
                return false
            }

            if (this.times.includes(this.now.hour())) {
                return true
            }

            return false
        },
        nextHourAvailable: function () : number {
            let minAllowedHour = 24

            for (const hour of this.times) {
                if (this.now.hour() === hour && this.now.minute() < 30) {
                    return hour
                }

                if (hour < minAllowedHour && hour > this.now.hour()) {
                    minAllowedHour = hour
                }
            }

            return minAllowedHour
        }
    }
})
</script>

<style scoped>
.merchant-availability {
    display: flex;
    align-items: center;
    grid-gap: 10px;
    justify-content: center;
}
</style>
