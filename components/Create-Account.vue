<template>
 <div class="cart-overlay">
 <div class="cart-display relative">
 <div class="flex flex-col items-center justify-center">
 <input required class="input" v-model="subscribe.email" placeholder="Enter email" type="email"/>
 <input required class="input" v-model="subscribe.password" placeholder="Create password" type="password"/>
 <button @click="alertCreatedAccount(), $emit('closeCreateAccount')"  class="large-btn mt-10">Create an account</button>

         <!-- close create account -->
        <button class="close-cart" @click="$emit('closeCreateAccount')">
          <icon
            class="text-[30px] text-[#1f1f1f]"
            name="uit:arrow-circle-left"
          />
        </button>
 </div>
 </div>
 </div>
</template>

<script>
export default {
    emits:['closeCreateAccount'],
    data(){
        return{
            subscribe:{
                email: '',
                password: '',
            }
        }
    },

    methods: {
      alertCreatedAccount(){
        alert(this.subscribe.email + " " + "Your account has been successfully created")
      }
    }
}
</script>