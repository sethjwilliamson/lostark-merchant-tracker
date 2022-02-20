<template>
    <tr class="wandering-merchant">
        <td class="wandering-merchant-column wandering-merchant-name">
            {{ merchant.name }}
        </td>
        <td class="wandering-merchant-column wandering-merchant-location">
            {{ merchant.location }}
        </td>
        <td class="wandering-merchant-column wandering-merchant-location" ref="list-items-tippy">
            List Items
        </td>
        <td class="wandering-merchant-column">
            <merchant-availability :times="merchant.startTimes" />
        </td>
    </tr>
</template>

<script lang="ts">
import Vue from 'vue'
import tippy from 'tippy.js'
import 'tippy.js/dist/tippy.css'
import MerchantAvailability from './MerchantAvailability.vue'

export default Vue.extend({
    components: {
        MerchantAvailability
    },
    props: {
        merchant: Object
    },
    data: function () {
        return {
        }
    },
    mounted: function () {
        tippy(this.$refs['list-items-tippy'] as HTMLElement, {
            content: this.merchant.items
        })
    }
})
</script>

<style scoped>
.wandering-merchant {

}
</style>
