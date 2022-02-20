<template>
    <tr class="wandering-merchant">
        <td class="wandering-merchant-column wandering-merchant-name">
            {{ merchant.name }}
        </td>
        <td class="wandering-merchant-column wandering-merchant-location">
            {{ merchant.location }}
        </td>
        <td class="wandering-merchant-column wandering-merchant-location">
            {{ "merchant.items" }}
        </td>
        <td class="wandering-merchant-column">
            <merchant-availability :times="merchant.startTimes" />
        </td>
    </tr>
</template>

<script lang="ts">
import Vue from 'vue'
import MerchantAvailability from './MerchantAvailability.vue'

export default Vue.extend({
    components: {
        MerchantAvailability
    },
    props: {
        merchant: Object
    }
})
</script>

<style scoped>
.wandering-merchant {

}
</style>
