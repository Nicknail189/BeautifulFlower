<template>
  <div class="wrapper">
    <h2 class="body-header uppercase mb-4">
      Flowers - <span class="font-light"> Quick Buy</span>
    </h2>
    <div class="flower-grid">
      <div
        v-for="(flower, index) in store.product"
        :key="index"
        class="card background overflow-hidden"
      >
        <div v-html="flower.image" class="card-image h-full"></div>

        <div class="bouquet">
          <div class="card-info">
            <p class="body-text">{{ flower.name }}</p>
            <div class="flex items-center text-green-700">
              <icon name="uil:pricetag-alt" />
              <p class="text-[12px] ml-2">${{ flower.price }}</p>
            </div>
          </div>

          <div class="card-info">
            <div class="card-info px-0 justify-start">
              <icon name="uil:truck" />
              <p class="body-text ml-3">Same day delivery</p>
            </div>
            <!-- Add to cart btn -->
            <button
              id="btn"
              @click="addItemToCart(flower)"
              class="order-btn bg-green-700/40 hover:bg-green-700"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from '~~/store/cart'

export default {

  data(){
    return{
      store,
      product: store.product,
    }
  },

  methods: {
  addItemToCart(flower){
    this.store.inCart.push({...flower, quantity: 1})
    console.log('item', this.store.inCart)
  }
  },
}
</script>