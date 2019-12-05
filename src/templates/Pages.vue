<template>
  <Layout>
    <div class="eventPage">
      <h1 class="text-3xl md:text-4xl font-bold mb-6">{{$page.page.title}}</h1>
      <div
        class="eventPage__image"
        :style="{ 'background-image': 'url(' + $page.page.image + ')' }"
      ></div>
      <!-- <i><time>{{$page.event.date}}</time></i> -->
      <!-- <div v-html="$page.event.content"></div> -->
    </div>
  </Layout>
</template>

<page-query>
query ($path: String!) {
    page: pages (path: $path) {
      title
      headerTitle
      headerSubtitle
      headerDescription
      headerImage
    }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.page.title
    };
  }
};
</script>
<style lang="scss">

</style>

