<template>
  <section class="py-12 px-4">
    <div class="flex flex-wrap items-center text-center lg:text-left -mx-2">
      <div class="lg:w-1/2 px-2 lg:pr-10 mt-10 lg:mt-0 order-1 lg:order-none">
        <h2
          class="text-5xl lg:text-8xl mb-6 leading-tight font-semibold font-heading"
        >
          {{ title }}
        </h2>
        <p class="mb-8 text-white leading-relaxed">{{ excerpt }}</p>
        <div v-if="button">
          <g-link
            class="bg-gray-900 learn-button hover:bg-gray-700 text-gray-100 px-5 py-3 mr-3 font-semibold rounded shadow"
            :to="link"
            >{{ button }}</g-link
          >
          <!-- <a class="text-gray-600 hover:underline" href="#">Learn more</a> -->
        </div>
      </div>
      <div class="lg:w-1/2 px-2"><g-image :src="img" :alt="altImg" /></div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["title", "excerpt", "altImg", "image", "button", "link"],
  computed: {
    img: function () {
      if (!this.image) return "";
      if (this.image.src) return this.image.src;
      return this.image;
    },
  },
};
</script>

<style scoped>
.text-8xl {
  font-size: 6rem;
  line-height: 1;
}
</style>
