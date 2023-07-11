<template>
<div class="w-full grid place-items-center">
    <div class="p-6 bg-white rounded-md w-full md:max-w-[600px] mt-10">
        <h2 class="body-header font-bold mb-2">Subscribe to our newsletter</h2>
        <p class="body-text text-lg">Signup for our weekly newsletter to get the latest news, updates and amazing offers delivered directly in your inbox.</p>
        <div class="flex gap-2 items-center mt-6">
            <input class="py-1 px-3 h-10 bg-gray-100 border rounded-sm w-10/12 outline-none" placeholder="Enter your email address" v-model="mail" type="email">
            <button @click="modal = true" class="phaseBtn">Subscribe</button>
        </div>
    </div>
  <SuccessModalVue v-if="modal === true" @continue="modal = false"/>
</div>
</template>

<script>
import SuccessModalVue from './Success-Modal.vue'
export default {
    components: {SuccessModalVue},
    emits: ['continue'],
    data() {
        return{
            mail: "",
            modal: false
        }
    },
}
</script>
