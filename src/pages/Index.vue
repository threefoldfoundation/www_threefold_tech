<template>
  <Layout :hideHeader="true" :disableScroll="true">
    <g-image
      v-if="$page.markdownPage.solution_image"
      :src="$page.markdownPage.solution_image.src"
    />

    <SolutionsHeader
      v-if="$page.markdownPage.header"
      :header="$page.markdownPage.header"
    />

    <Header
      :title="$page.markdownPage.header_title"
      :image="$page.markdownPage.header_image"
      :excerpt="$page.markdownPage.header_excerpt"
      :button="$page.markdownPage.button"
      :link="$url($page.markdownPage.link)"
    />

    <ShowcaseProducts
      :main="$page.markdownPage.productsMain"
      :products="$page.markdownPage.productData"
      v-if="
        $page.markdownPage.productData &&
        $page.markdownPage.productData.length > 0
      "
    />

    <g-image
      v-if="$page.markdownPage.solution_image_2"
      :src="$page.markdownPage.solution_image_2.src"
    />

    <SolutionsHeader
      v-if="$page.markdownPage.headerSolution"
      :header="$page.markdownPage.headerSolution"
    />

    <SolutionsHeader
      v-if="$page.markdownPage.header2"
      :header="$page.markdownPage.header2"
    />

    <SolutionsHeader
      v-if="$page.markdownPage.header3"
      :header="$page.markdownPage.header3"
    />

    <g-image
      v-if="$page.markdownPage.solution_image_3"
      :src="$page.markdownPage.solution_image_3.src"
    />

    <SolutionsHeader
      v-if="$page.markdownPage.header4"
      :header="$page.markdownPage.header4"
    />

    <g-image
      v-if="$page.markdownPage.solution_image_4"
      :src="$page.markdownPage.solution_image_4.src"
    />
    <SolutionsHeader
      v-if="$page.markdownPage.header5"
      :header="$page.markdownPage.header5"
    />

    <Comparison
      v-if="
        $page.markdownPage.comparisonSecs &&
        $page.markdownPage.comparisonSecs.length > 0
      "
      :main="$page.markdownPage.comparisonMain"
      :sections="$page.markdownPage.comparisonSecs"
    />

       <!-- <logoShowcase class="m-auto py-20"
      v-if="$page.markdownPage.logos.length > 0"
      :logos="$page.markdownPage.logos"
    /> -->

    <HeaderSectionInnovat
      v-if="$page.markdownPage.header6"
      :header="$page.markdownPage.header6"
    />

    <g-image
      class="m-auto mb-10"
      v-if="$page.markdownPage.solution_image_6"
      :src="$page.markdownPage.solution_image_6.src"
    />


    <CallToAction v-if="$page.markdownPage.cta" :cta="$page.markdownPage.cta" />

    <g-image
      v-if="$page.markdownPage.solution_image_5"
      :src="$page.markdownPage.solution_image_5.src"
    />
  </Layout>
</template>

<page-query>
  query {
    markdownPage(id: "home") {
        id
        path
        content
        metaTitle
        metaDesc
        metaImg
        header_title
        header_image
        header_excerpt
        button
        link
        solution_image
        solution_image_2
        solution_image_3
        solution_image_4
        solution_image_5
        solution_image_6
        header{
         title
         subtitle
         excerpt(length: 2000)
         btn1
         link1
         btn2
         link2
         content
       }
        header2{
         title
         subtitle
         excerpt(length: 2000)
         btn1
         link1
         btn2
         link2
         content
       }
        header3{
         title
         subtitle
         excerpt(length: 2000)
         btn1
         link1
         btn2
         link2
         content
       }
        header4{
         title
         subtitle
         excerpt(length: 2000)
         btn1
         link1
         btn2
         link2
         content
       }
        header5{
         title
         subtitle
         excerpt(length: 2000)
         btn1
         link1
         btn2
         link2
         content
       }
       header6{
         title
         subtitle
         excerpt(length: 2000)
         btn1
         link1
         btn2
         link2
         content
       }
        headerSolution{
         subtitle
         excerpt(length: 2000)
       }
       productsMain{
          id
          title
          subtitle
          image
        }
       productData{
         id
         title
         excerpt
         image
       }
        logos{
          id
          image
          url
        }
        
        cta{
          id
          title
          excerpt(length: 2000)
          button
          link
          content
        }
        comparisonMain{
          id
          title
          description
          button
          link
        }
        comparisonSecs{
          id
          svg
          title
          excerpt(length: 2000)
          url
        }
    }  
  }

</page-query>

<script>
import SolutionsHeader from "~/components/custom/sections/header/HeaderSection.vue";
import HeaderSectionInnovat from "~/components/custom/sections/header/HeaderSectionInnovat.vue";
import Header from "~/components/marketing/sections/cta-sections/Header.vue";
import Getintouch from "~/components/custom/Navbar/Getintouch.vue";
import logoShowcase from "~/components/marketing/sections/cta-sections/logoShowcase.vue";
import CallToAction from "~/components/custom/sections/CallToAction.vue";
import Comparison from "~/components/custom/sections/Comparison.vue";
import ShowcaseProducts from "~/components/marketing/sections/cta-sections/ShowcaseProducts.vue";

export default {
  components: {
    SolutionsHeader,
    HeaderSectionInnovat,
    Header,
    ShowcaseProducts,
    Getintouch,
    logoShowcase,
    CallToAction,
    Comparison,
  },
  computed: {
    getImg() {
      let image = "";
      if (process.isClient) {
        image = `${window.location.origin}${this.img}`;
      }
      return image;
    },
    img() {
      if (!this.$page.markdownPage.metaImg) return "";
      if (this.$page.markdownPage.metaImg.src)
        return this.$page.markdownPage.metaImg.src;
      return this.$page.markdownPage.metaImg;
    },
  },
  metaInfo() {
    return {
      title: "",
      titleTemplate: this.$page.markdownPage.metaTitle,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.$page.markdownPage.metaDesc,
        },
        {
          key: "og:title",
          property: "og:title",
          content: this.$page.markdownPage.metaTitle,
        },
        {
          key: "og:description",
          property: "og:description",
          content: this.$page.markdownPage.metaDesc,
        },
        {
          key: "og:image",
          property: "og:image",
          content: this.getImg,
        },
        {
          key: "twitter:description",
          name: "twitter:description",
          content: this.$page.markdownPage.metaDesc,
        },
        {
          key: "twitter:image",
          property: "twitter:image",
          content: this.getImg,
        },
        {
          key: "twitter:title",
          property: "twitter:title",
          content: this.$page.markdownPage.metaTitle,
        },
      ],
    };
  },
};
</script>
<style scoped>
/* h2 {
  padding-bottom: 8rem;
} */
</style> >

    <!-- <div class="container sm:pxi-0 mx-auto overflow-x-hidden py-5" div/> -->


  <!-- cards{
          id
          title
          image
          button
          link
          order
          excerpt(length: 2000)
        }
        roadmap{
          id
          title
          excerpt
          content
        }
       featuresMain{
          id
          title 
          btn 
          link
          excerpt(length: 2000)
        }
        featuresMain2{
          id
          title 
          btn 
          link
          excerpt(length: 2000)
        }
        features{
          id
          title 
          svg
          excerpt(length: 2000)
        }
        features2{
          id
          title 
          svg
          excerpt(length: 2000)
        }
        inTheNews {
          id
          excerpt(length: 2000)
          partners {
            path
            logo
          }
        } -->