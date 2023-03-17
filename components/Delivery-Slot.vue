<template>
  <div class="text-[#9d9d9d] flex items-start">
    <div class="p-5 border-[2px] mr-3">
      <slot name="icon"></slot>
    </div>
    <div>
      <h2 class="body-header text-gray-700 uppercase">
        <slot name="header"></slot>
      </h2>
      <br />
      <div class="body-text text-[12px] max-h-[340px] overflow-auto">
        <slot name="body"></slot>
      </div>
    </div>
  </div>
</template>

<style>
a {
  color: rgb(88, 88, 88);
}
</style>
