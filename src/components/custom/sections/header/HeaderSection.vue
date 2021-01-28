<template>
  <section class="py-12 px-4 text-center ">
    <div class="w-full max-w-2xl mx-auto">
      <span class="font-semibold">{{ header.title }}</span>
      <h2 class="text-4xl mt-2 mb-6 leading-tight font-semibold font-heading">
        {{ header.subtitle }}
      </h2>
      <p  v-html="header.content" class="mb-8 text-gray-700 leading-relaxed">
       
      </p>
      <div>
        <g-link
          class="rounded-md learn-button px-5 py-3 mr-3 font-semibold"
          v-if="header.btn1"
          :to="header.link1"
          >{{ header.btn1 }}</g-link
        ><g-link
          class="rounded-md learn-button px-5 py-3 mr-3 font-semibold"
          v-if="header.btn2"
          :to="header.link2"
          >{{ header.btn2 }}</g-link
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["header"],
};
</script>
