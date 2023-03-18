<template>
  <div class="cart-overlay">
    <keep-alive>
      <div class="cart-display">
        <div class="flex items-center justify-between">
          <table class="w-full h-auto text-center">
            <tr>
              <th>S/N</th>
              <th class="text-left">NAME</th>
              <th>PRICE</th>
              <th>UNIT</th>
              <th>ACTION</th>
              <th>TOTAL PRICE</th>
            </tr>

            <!-- item in cart -->
            <tr
              v-for="(flower, index) in store.inCart"
              :key="index"
              class="text-sm py-3"
            >
              <td>{{ index + 1 }}</td>
              <td class="text-left">{{ flower.name }}</td>
              <td>{{ flower.price }}</td>
              <td>
                <div class="">
                  <icon
                    v-if="flower.quantity > 1"
                    @click="flower.quantity--"
                    class="quantityIcon"
                    name="uil:minus"
                  />
                  {{ flower.quantity }}
                  <icon
                    v-if="flower.quantity < 100"
                    @click="flower.quantity++"
                    class="quantityIcon"
                    name="uil:plus"
                  />
                </div>
              </td>
              <td>
                <button
                  id="btn"
                  @click="removeFromCart(flower, index)"
                  class="order-btn bg-red-400/40 hover:bg-red-600"
                >
                  Remove
                </button>
              </td>
              <td>
                {{ flower.price * flower.quantity }}
              </td>
              <hr />
            </tr>
          </table>
        </div>

        <!-- total price & proceed to payment -->
        <div class="mt-16 flex flex-col items-end justify-end">
          <div class="mb-2 text-[#1f1f1f] tracking-wide">
            <p>
              <span>{{ "$" + totalPrice }}</span>
            </p>
          </div>
          <button
            class="large-btn mt-10"
          >
            Proceed to payment
          </button>
        </div>

        <!-- close cart button -->
        <button class="close-cart" @click="$emit('closeCart')">
          <icon
            class="text-[30px] text-[#1f1f1f]"
            name="uit:arrow-circle-left"
          />
        </button>
      </div>
    </keep-alive>
  </div>
</template>

<style scoped>
p {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

p span {
  font-size: 24px;
  font-weight: 800;
}

table th {
  font-size: 14px;
  font-weight: 400;
}

table td {
  font-size: 14px;
  font-weight: 300;
}

th,
tr {
  padding-bottom: 12px;
}
</style>

<script>
import { store } from '~~/store/cart'

export default {

    emits: ['closeCart'],
    methods: {
        removeFromCart(flower,index){
            this.store.inCart.splice(index,1)
        },
    },

    computed:{

        // totalUnit(){
        //   return this.unit.reduce((total, curr) => (total = total + curr), 0)
        // },

        totalPrice(){
          return this.store.inCart.reduce((total, curr) => (total = total + curr.price * curr.quantity), 0)
        }
    },


    data() {
      return{
        store,
        product: store.product,
        unit: 1,
      }
    }
}
</script>