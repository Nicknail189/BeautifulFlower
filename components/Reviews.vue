<template>
  <div class="wrapper flex justify-center">
    <div class="w-6/12">
      <h2 class="body-header text-center pb-4 border-b-[1px] mb-10">
        TOP VERIFIED REVIEWS
      </h2>
      <div
        v-for="review in reviews"
        :key="review.name"
        class="flex items-start mb-6"
      >
        <div class="flex flex-col justify-end text-right truncate md:w-4/12">
          <h2 class="text-[14px] font-medium">{{ review.name }}</h2>
          <h4 class="text-[12px] font-medium">{{ review.date }}</h4>
        </div>
        <div class="flex flex-col ml-5">
          <div class="flex items-center">
            <icon name="uil:star" />
            <icon name="uil:star" />
            <icon name="uil:star" />
            <icon name="uil:star" />
            <icon name="uil:star" />
          </div>
          <div class="body-text text-[12px]">{{ review.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            reviews: [
                {
                    name: 'Gabrielle G.',
                    date: '03-03-2023',
                    text: "Since this was an arrangement for someone else, I did not actually see the end product. My review is for the over-the-phone and online experience. I had intially ordered flowers from another local shop and last minute it was cancelled. Beautiful came to my rescue when I called.",
                },
                {
                    name: 'Peter J.',
                    date: '01-23-2023',
                    text: "The vase was a lot smaller than I thought. I don’t like that I had been calling the shop for 2 days and no one could speak English. I live in Texas and wanted something special for my sister’s 80th birthday. I finally ordered on line put in the special instructions and it didn’t happen.",
                },
                {
                    name: 'Tommy Q.',
                    date: '11-07-2022',
                    text: "Beautiful flowers and staff is always so nice and sweet and more than willing to help. I made my order online and had no issues. Will be ordering all my flowers from Beautiful’s flowers Shop",
                }
            ]
        }
    }
}
</script>

<style scoped>
.icon {
  color: rgb(245, 44, 91);
}
</style>