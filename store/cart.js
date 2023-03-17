
// export const state = () => ({
//     list: []
// })

// export const mutations = {
//     add(state, text) {
//         state.list.push({
//             text,
//             done: false
//         })
//     },
//     remove(state, { todo }) {
//         state.list.splice(state.list.indexOf(todo), 1)
//     },
//     toggle(state, todo) {
//         todo.done = !todo.done
//     }
// }\

// export const mutations = {
//     addToCart(state, text) {
//         state.list.push({
//             text,
//             done: false
//         })
//     },
//     remove(state, { todo }) {
//         state.list.splice(state.list.indexOf(todo), 1)
//     },
//     toggle(state, todo) {
//         todo.done = !todo.done
//     }
// }

import { reactive } from 'vue'

export const store = reactive({
    count: 0,
    inCart: [],
    product: [
        {
            image: '<img class="h-full w-full" src="images/bouquet-quick-buy/red-roses.jpg" alt=""/>',
            price: 90.99,
            name: 'Red Roses'
        },
        {
            image: '<img class="h-full w-full" src="images/bouquet-quick-buy/sun-flower.jpg" alt=""/>',
            price: 48.99,
            name: 'Sun Flower'
        },
        {
            image: '<img class="h-full w-full" src="images/bouquet-quick-buy/daisies-flower.jpg" alt=""/>',
            price: 34.99,
            name: 'Daisies Flower'
        },
        {
            image: '<img class="h-full w-full" src="images/bouquet-quick-buy/proposal-bouquet.jpg" alt=""/>',
            price: 149.99,
            name: 'Proposal Bouquet'
        },
        {
            image: '<img class="h-full w-full" src="images/bouquet-quick-buy/surprise-bouquet.jpg" alt=""/>',
            price: 32.99,
            name: 'Surprise Bouquet'
        },
        {
            image: '<img class="h-full w-full" src="images/bouquet-quick-buy/birthday-basket.jpg" alt=""/>',
            price: 99.99,
            name: 'Birthday Basket'
        },
        {
            image: '<img class="h-full w-full" src="images/blue/bouquet-flower-pot-decoration-table.jpg" alt=""/>',
            price: 22.99,
            name: 'Blue Flower'
        },
        {
            image: '<img class="h-full w-full" src="images/bouquet-quick-buy/pink-tulip-flowers-bouquet-wooden-table.jpg" alt=""/>',
            price: 23.99,
            name: 'Tulip Flower'
        },
        {
            image: '<img class="h-full w-full" src="images/bouquet-quick-buy/vertical-shot-tulip-bouquet.jpg" alt=""/>',
            price: 79.99,
            name: 'Tulip Bouquet'
        },
        {
            image: '<img class="h-full w-full" src="images/bouquet-quick-buy/peace-lily-plant-pot.jpg" alt=""/>',
            price: 25.99,
            name: 'Lily Plant'
        },
        {
            image: '<img class="h-full w-full" src="images/bouquet-quick-buy/fresh-beautiful-peony.jpg" alt=""/>',
            price: 23.99,
            name: 'Beautiful Peony'
        },
        {
            image: '<img class="h-full w-full" src="images/bouquet-quick-buy/pink-color-alstroemeria-flowers.jpg" alt=""/>',
            price: 69.99,
            name: 'Pink Alstroemeria Flower'
        },

        // white
        {
            image: '<img class="h-full w-full" src="images/white/beautiful-bride-with-bouquet.jpg" alt=""/>',
            price: 129.99,
            name: 'Wedding Bouquet'
        },
        {
            image: '<img class="h-full w-full" src="images/white/beautiful-white-poinsettia-assortement.jpg" alt=""/>',
            price: 35.99,
            name: 'Beautiful Poinsettia'
        },
        {
            image: '<img class="h-full w-full" src="images/white/white-phalaenopsis-orchid-flowers.jpg" alt=""/>',
            price: 102.99,
            name: 'White Orchid Flower'
        },
        {
            image: '<img class="h-full w-full" src="images/white/beautiful-white-poinsettia-composition.jpg" alt=""/>',
            price: 35.99,
            name: 'White Poinsettia'
        },

        // blue
        {
            image: '<img class="h-full w-full" src="images/blue/bouquet-blue-chrysanthemums.jpg" alt=""/>',
            price: 24.99,
            name: 'Blue Chrysanthemums'
        },

        // red
        {
            image: '<img class="h-full w-full" src="images/red/beautiful-roses-vase-front-blue-wall.jpg" alt=""/>',
            price: 49.99,
            name: 'Beautiful Roses Vase'
        },

        // yellow
        {
            image: '<img class="h-full w-full" src="images/yellow/heart-shaped-bouquet-white-yellow-roses.jpg" alt=""/>',
            price: 79.99,
            name: 'Heart Shaped Yellow Roses'
        },
        {
            image: '<img class="h-full w-full" src="images/yellow/two-gifts-vase-with-flowers.jpg" alt=""/>',
            price: 79.99,
            name: 'Two Gift Vase with Flowers'
        },

    ]
})