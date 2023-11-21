<template>
  <section class="py-12 px-4 text-center">
    <h2 class="text-4xl mb-6 leading-tight font-semibold font-heading">
      {{ main.title }}
    </h2>
    <p class="text-white mb-10">{{ main.description }}</p>
    <div class="flex flex-wrap -mx-8">
      <div
        class="w-1/2 md:w-1/3 px-8 mb-8 active--exact active"
        v-for="(section, index) in sections"
        :key="index"
      >
        <g-link :to="section.url">
          <g-image
            class="w-1/8 mx-auto mb-8 h-30"
            :src="section.svg.src"
            :alt="section.title"
          />
        </g-link>
        <p class="text-lg leading-tight text-white mb-6 mx-3">
          <!-- <span
            class="inline-flex items-center justify-center h-12 w-12 mr-2 border rounded-full"
            >{{ index + 1 }}</span
          > -->
          <span>{{ section.title }}</span>
        </p>
        <p class="text-white">
          {{ section.excerpt }}
        </p>
      </div>
    </div>
    <div>
      <g-link
        v-if="main.button"
        class="bg-gray-900 learn-button hover:bg-gray-700 text-gray-100 px-5 py-3 mr-3 font-semibold rounded shadow"
        :to="main.link"
        >{{ main.button }}</g-link
      >
    </div>
  </section>
</template>

<script>
export default {
  props: ["main", "sections"],
};
</script>

<!-- <div class="flex flex-wrap items-center -mx-8 mt-12 mb-2"> -->
<!-- class="w-1/2 mx-auto mb-8 h-30" -->
<!-- class="lg:w-1/3 px-8 mb-8" -->
