<template>
    <div class="cart-overlay">
    <div class="p-4 rounded-md bg-white w-11/12 md:w-4/12 md:min-w-[400px] grid place-items-center">
    <icon class="text-green-600 text-[40px]" name="mdi-light:check-circle"/>
    <p class="body-text mt-2"><span class="font-medium">Dear customer</span><br>
    Your payment have been successfully made. Thank you for patronizing Beautiful flower.
    </p>
    <NuxtLink to="/">
    <button class="mt-4 bg-gray-100 rounded-sm px-4 py-1">Continue Shopping</button>
    </NuxtLink>
    </div>
    </div>
</template>