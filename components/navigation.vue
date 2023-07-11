<template>
  <div class="navigation">
    <div class="nav-wrap">
      <!-- add logo -->
      <div></div>

      <!-- nav links -->
      <ul class="nav-ul">
        <li class="nav-li">
          <p class="nav-p">Home</p>
        </li>
        <li @click="scroll('flowers')" class="nav-li">
          <p class="nav-p">Flowers</p>
        </li>
        <!-- <li
          @mouseenter="show('occations')"
          @mouseleave="leave('occations')"
          class="nav-li"
        >
          <p class="nav-p">Occations</p>
        </li> -->
        <li
          @mouseenter="show('colors')"
          @mouseleave="leave('colors')"
          class="nav-li"
        >
          <p class="nav-p">Colors</p>
        </li>
        <li
          @click="scroll('about')"
          @mouseenter="show('aboutLink')"
          @mouseleave="leave('aboutLink')"
          class="nav-li"
        >
          <p class="nav-p">About Us</p>
        </li>
        <li
          @mouseenter="show('openings')"
          @mouseleave="leave('openings')"
          class="nav-li"
        >
          <p class="nav-p">Openings</p>
        </li>
      </ul>
      

<div class="flex items-center">
      <!-- create account -->
      <div 
        @click="openCreateAccount = true"
       class="px-6 py-2 border-[2px] flex items-center mr-10">
            <button class="text-sm mr-4">Create Account</button>
        <icon class="text-sm text-[#4b5563]" name="uil:user" />
      </div>
      
      <!-- carting icon -->
      <div
        @click="openCart = true"
        class="relative bg-red-400 rounded-md p-3 flex justify-center items-center"
      >
        <div
          class="absolute top-[-5px] right-[-5px] w-[24px] h-[24px] leading-4 rounded-[50%] bg-green-700 center-flex text-[12px] text-white"
        >
          {{ store.inCart.length }}
        </div>
        <icon class="text-[24px] text-white" name="uil:shopping-cart-alt" />
      </div>
    </div>
</div>

    <!-- About links -->
    <div class="center-flex">
      <div
        @mouseenter="show('aboutLink')"
        @mouseleave="leave('aboutLink')"
        id="aboutLink"
        class="w-full md:w-4/12 bg-white hidden"
      >
        <ul class="flex flex-col py-5 text-gray-600 text-[14px]">
          <li @click="scroll('delivery-info')" class="nav-p">Delivery</li>
          <li @click="scroll('reviews')" class="nav-p">Reviews</li>
          <li @click="scroll('socials')" class="nav-p">Contact</li>
        </ul>
      </div>
    </div>

    <!-- Occassions links -->
    <!-- <div class="center-flex">
      <div
        @mouseenter="show('occations')"
        @mouseleave="leave('occations')"
        id="occations"
        class="w-full md:w-4/12 bg-white hidden"
      >
        <ul class="flex flex-col py-5 text-gray-600 text-[14px]">
          <li class="nav-p">Proposal</li>
          <li class="nav-p">Wedding</li>
          <li class="nav-p">Anniversary</li>
          <li class="nav-p">Birthday</li>
          <li class="nav-p">Congrats</li>
          <li class="nav-p">Decoration</li>
          <li class="nav-p">Get Well Soon</li>
          <li class="nav-p">I'm Sorry</li>
          <li class="nav-p">Thank You</li>
          <li class="nav-p">Sympathy & Funeral</li>
        </ul>
      </div>
    </div> -->

    <!-- Color links -->
    <div class="center-flex">
      <div
        @mouseenter="show('colors')"
        @mouseleave="leave('colors')"
        id="colors"
        class="w-full md:w-4/12 bg-white hidden"
      >
        <ul class="flex flex-col py-5 text-gray-600 text-[14px]">
          <li class="nav-p">Red</li>
          <li class="nav-p">Yellow</li>
          <li class="nav-p">White</li>
          <li class="nav-p">Blue</li>
        </ul>
      </div>
    </div>

    <!-- Opening hours -->
    <div class="center-flex">
      <div
        @mouseenter="show('openings')"
        @mouseleave="leave('openings')"
        id="openings"
        class="w-full md:w-4/12 bg-white hidden"
      >
        <ul class="flex flex-col py-5 text-gray-600 text-[14px]">
          <li class="nav-p hover:bg-white">Monday: 8:00 am to 7:00 pm</li>
          <li class="nav-p hover:bg-white">Tuesday: 8:00 am to 7:00 pm</li>
          <li class="nav-p hover:bg-white">Wednesday: 8:00 am to 7:00 pm</li>
          <li class="nav-p hover:bg-white">Thursday: 8:00 am to 7:00 pm</li>
          <li class="nav-p hover:bg-white">Friday: 8:00 am to 7:00 pm</li>
          <li class="nav-p hover:bg-white">Weekends: 8:00 am to 7:00 pm</li>
        </ul>
      </div>
    </div>
  </div>
  <!-- Cart system -->
  <cart v-if="openCart === true" @closeCart="openCart = false" />

  <!-- subscribe -->
  <create-account v-if="openCreateAccount === true" @closeCreateAccount="openCreateAccount = false" />

</template>

<script>
import { store } from '~~/store/cart'
export default {
  data(){
    return{
      store,
      openCart: false,
      openCreateAccount: false,
    }
  },

  methods: {
    scroll (refName) {
      const element = document.getElementById(refName)
      element.scrollIntoView({ behavior: 'smooth' })
    },

    show (refName) {
      const nav = document.getElementById(refName).style.display = 'block';
    },

    leave (refName) {
      const nav = document.getElementById(refName).style.display = 'none';
    }
  }
}
</script>