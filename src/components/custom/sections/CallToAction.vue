<template>
  <section class="py-12 px-4 text-center">
    <div class="w-full max-w-2xl mx-auto">
      <h2 class="text-4xl leading-tight font-semibold font-heading">
        {{ cta.title }}
      </h2>
      <p class="mt-6 mb-8 text-white leading-relaxed">{{ cta.excerpt }}</p>
      <!-- <p v-html="cta.content" class="mt-6 mb-8 text-white leading-relaxed"> -->
        
      </p>
      <g-link
        v-if="cta.button"
        class="rounded-md learn-button px-5 py-3 mr-3 font-semibold"
        :to="cta.link"
        >{{ cta.button }}</g-link
      >
    </div>
  </section>
</template>

<script>
export default {
  props: ["cta"],
};
</script>