<template>
    <div class="cart-overlay">
    <div class="p-4 rounded-md bg-white w-11/12 md:w-4/12 md:min-w-[400px] grid place-items-center">
    <icon class="text-green-600 text-[40px]" name="mdi-light:check-circle"/>
    <p class="body-text mt-2">You have been successfully added to our weekly newsletter. Enjoy as we bring you every news, update and amazing offers.</p>
    <button @click="$emit('continue')" class="mt-4 bg-gray-100 rounded-sm px-4 py-1">Continue</button>
    </div>
    </div>
</template>

<script>
export default {
emits: ['continue']
}
</script>