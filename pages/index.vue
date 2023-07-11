<template>
  <div class="relative">
  <!-- <Front-Page id="frontpage"/> -->
    <Newsletter/>
    <!-- cart system -->
    <QuickBuy id="flowers" />
    <About-Us id="about" />
    <Delivery id="delivery-info" />
    <Reviews id="reviews" />
    <!-- <socials id="socials" /> -->
    <div @click="scroll('frontpage')" class="navigate-to-top">
      <icon class="text-[32px]" name="uit:arrow-circle-up" />
    </div>
  </div>
</template>


<script>
export default {
  data(){return{open: false}},
  methods: {
    scroll (refName) {
      const element = document.getElementById(refName)
      element.scrollIntoView({ behavior: 'smooth' })
    },
  }
}
</script>