<template>
    <div class="wandering-merchant">
        <div class="wandering-merchant-column wandering-merchant-name">
        </div>
        <div class="wandering-merchant-column">
            <merchant-availability />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MerchantAvailability from './MerchantAvailability.vue'

export default Vue.extend({
    components: {
        MerchantAvailability
    }
})
</script>
