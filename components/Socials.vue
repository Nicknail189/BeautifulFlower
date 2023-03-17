<template>
  <div class="wrapper text-center">
    <!-- add logo -->
    <h2 class="body-header border py-3 uppercase">Beautiful Flower</h2>
    <br />
    <p class="body-text">
      As a florist, we make every occasion unforgettable with our blooming
      flower delivery from our online Shop.
      <br />
      Leaving you with sweet memories.
      <br />
      <br />
      Rebecca H.
    </p>
    <div class="center-flex mt-10">
      <NuxtLink to="">
        <icon name="uil:facebook-f" />
      </NuxtLink>
      <NuxtLink to="">
        <icon name="uil:envelope" />
      </NuxtLink>
      <NuxtLink to="">
        <icon name="uil:phone" />
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.icon {
  font-size: 30px;
  margin: 0px 20px;
  padding-bottom: 5px;
  transition: all 0.3s ease-in-out;
}

.icon:hover {
  border-bottom: solid 1px;
}
</style>