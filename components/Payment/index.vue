<template>
    <div class="text-center mt-10">
        <ModalVue v-if="success === true"/>
        <div>
            <form action="" class="grid place-items-center">
                <div class="w-full p-3 md:p-20 md:pt-6 md:w-10/12 bg-white/50 grid place-items-center gap-4">
                <h2 class="body-header italic mb-2">Shipping Address</h2>
                <div class="flex flex-col md:flex-row gap-4">
                    <input placeholder="Firstname*" type="text" v-model="paymentInfo.firstname">
                    <input placeholder="Lastname*" type="text" v-model="paymentInfo.lastname">
                </div>
                <div class="flex flex-col md:flex-row gap-4">
                    <input placeholder="Email*" type="text" v-model="paymentInfo.email">
                    <input placeholder="Phone*" type="text" v-model="paymentInfo.phone">
                </div>
                <div class="flex flex-col md:flex-row gap-4">
                    <input placeholder="Address 1*" type="text" v-model="paymentInfo.address1">
                    <input placeholder="Address 2*" type="text" v-model="paymentInfo.address2">
                </div>

                <div class="flex flex-col md:flex-row gap-4">
                    <input placeholder="Country*" type="text" v-model="paymentInfo.country">
                    <input placeholder="Zipcode*" type="text" v-model="paymentInfo.zipcode">
                </div>

                <div class="flex flex-col md:flex-row gap-4">
                    <input placeholder="City*" type="text" v-model="paymentInfo.city">
                    <input placeholder="State" type="text" v-model="paymentInfo.state">
                </div>
                <NuxtLink to="https://www.paypal.com/ng/webapps/mpp/send-money-online"><button class="phaseBtn mt-6 md:mt-12 bg-blue-700 hover:bg-blue-800"><icon class="text-[24px]" name="ic:baseline-paypal"/> Checkout with Paypal</button></NuxtLink>
                <NuxtLink to="https://www.apple.com/shop/buy-giftcard/giftcard"><button class="phaseBtn mt-3 bg-black/80 hover:bg-black/100"><icon class="text-[24px]" name="ic:baseline-apple"/> Checkout with Apple gift card</button></NuxtLink>
                <NuxtLink to="/"><button class="phaseBtn mt-3">Go Home</button></NuxtLink>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import ModalVue from './Modal.vue'
export default {
    components: {ModalVue},
    data() {
        return {
            success: false,
            paymentInfo: {
                firstname: "",
                lastname: "",
                email: "",
                phone: "",
                address1: "",
                address2: "",
                country: "",
                zipcode: "",
                city: "",
                state: "",

            }
        }
    },
}
</script>

<style scoped>
input {
    padding: 10px 14px;
    outline: none;
    border: solid .4px green;
    border-radius: 4px;
    min-width: 300px;
}
</style>