<template>
    <div class="wandering-merchant">
        <div class="wandering-merchant-column wandering-merchant-name">
            {{ merchant.name }}
        </div>
        <div class="wandering-merchant-column wandering-merchant-location">
            {{ merchant.location }}
        </div>
        <div class="wandering-merchant-column wandering-merchant-location">
            {{ "merchant.items" }}
        </div>
        <div class="wandering-merchant-column">
            <merchant-availability :times="merchant.startTimes" />
        </div>
    </div>
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
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}
</style>
