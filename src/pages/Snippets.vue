<template>
  <Layout>
    <h1 class="text-3xl md:text-4xl font-semibold mb-3">Snippets <i class="fas fa-code ml-2 text-2xl"></i></h1>
    <p
      class="text-lg md:text-xl mb-12 font-light"
    >As <b>Frontend Developers</b> we love <b>Animations</b> and <b>amazing effects</b>, so we decided to created a list of them. <br> We decided to embed Codepen to have the code of every single animation always available for <b>everyone</b>.</p>

    <ul>
      <li
        v-for="snippet in $page.snippets.edges"
        :key="snippet.id"
        class="snippet p-8 mb-16 md:flex rounded bg-primary">
        <div class="lg:w-5/12 pr-4 mb-8 md:mb-0">
          <h1 class="text-2xl md:text-3xl font-bold mb-2">{{snippet.node.title}}</h1>
          <p class="mb-4 ">by {{snippet.node.author}}</p>
          <p class="text-lg md:text-xl font-light">{{snippet.node.abstract}}</p>
        </div>

        <div v-html="snippet.node.content" class="lg:w-7/12"></div>
      </li>
    </ul>
  </Layout>
</template>
<page-query>
query {
  snippets: allSnippets {
    edges {
      node {
        title
        abstract
        content
        author
      }
    }
  }
}
</page-query>
<script>
export default {
  metaInfo: {
    title: "",
    meta: [
      { name: "description", content: "" },
      { property: "og:title", content: "" },
      {
        property: "og:description",
        content: ""
      },
      {
        property: "og:image",
        content: ""
      },
      { property: "og:url", content: "" },
      {
        property: "twitter:card",
        content: "summary"
      },
      {
        property: "twitter:title",
        content: "Not Only CSS | Snippets"
      },
      {
        property: "twitter:description",
        content: ""
      },
      {
        property: "twitter:image",
        content: ""
      },
    ]
  }
};
</script>
<style>

</style>