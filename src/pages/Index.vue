<template>
  <Layout>
    <!-- <h1 class="text-3xl md:text-4xl font-bold mb-3">Articles <i class="fas fa-book-reader ml-2 text-2xl"></i></h1>
    <div class="flex items-start rounded bg-primary px-8 py-3 mb-16">
      <div>
        <i class="fas fa-info text-xs"></i>
      </div>
      <p class="ml-6 font-light">
        Our articles are published on
        <span class="font-bold">Medium</span>, we write for free and only Medium through the
        <a
          href="https://medium.com/creators"
          target="_blank"
          rel="noopener noreferrer"
        >Medium Partner Program</a> allows us to get a remuneration for the commitment. <br>
        The links of Medium that we provide guarantee everyone <b>free access</b> to all our articles.

      </p>
    </div>-->

    <!-- <ul class="articles-list">
      <li
        v-for="article in $page.articles.edges"
        :key="article.id"
        class="article rounded mb-16 md:flex relative p-10 bg-primary"
      >
        <div>
          <div
            class="article__preview rounded bg-cover bg-center md:mr-8"
            :style="{ 'background-image': 'url(' + article.node.image + ')' }"
          ></div>
        </div>
        <div>
          <h1
            class="article__title text-2xl md:text-3xl font-bold leading-tight mb-4"
          >{{article.node.title}}</h1>
          <p class="article__abstract text-lg md:text-xl mb-4 font-light">{{article.node.abstract}}</p>
          <div class="flex items-center mb-5 text-sm">
            <p>{{article.node.author}}</p>
            <span class="mx-2">-</span>
            <p>{{formatDate(article.node.date)}}</p>
          </div>
          <a :href="article.node.link" target="_blank" class="article__link py-2 px-10 rounded block text-center md:inline-block">
            Read on Medium
            <i class="fas fa-external-link-alt ml-2"></i>
          </a>
        </div>
      </li>
    </ul>-->

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!-- <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>Hello, world!</h1>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
    </p>
    <hr>
    manual
    <ul>
      <li>
        <g-link to="/blog-html/blog-post-one">Post 1</g-link>
      </li>
      <li>
        <g-link to="/blog-html/blog-post-two">Post 2</g-link>
      </li>
      <li>
        <g-link to="/blog-html/blog-post-three">Post 3</g-link>
      </li>
    </ul>

    <hr>
  dynamic
    <ul>
      <li v-for="post in $page.posts.edges" :key="post.id">
        <g-link :to="post.node.path">
          {{post.node.title}}
        </g-link>
      </li>
    </ul>
    <hr>-->
    <!-- <ul>
      <li class="article" v-for="postReddit in $page.redditPost.edges" :key="postReddit.id">
        <div>
          <div
            class="article__img"
            :style="{'background-image': 'url(' + postReddit.node.thumbnail + ')'}"
          ></div>
        </div>
        <div>
          <h1 class="article__title">{{postReddit.node.title}}</h1>
          <g-link :to="postReddit.node.link">Read</g-link>
        </div>
      </li>
    </ul>-->
  </Layout>
</template>

<page-query>
query {
  articles: allArticles(order: DESC) {
    edges {
      node {
        title
        abstract
        image
        link
        date
        author
      }
    }
  }
 
}
</page-query>
<script>
export default {
  metaInfo: {
    meta: [
      {
        name: "description",
        content: ""
      },
      { property: "og:title", content: "" },
      {
        property: "og:description",
        content: ""
      },
      {
        property: "og:image",
        content: "https://www.notonlycss.com/uploads/share.png"
      },
      {
        property: "twitter:card",
        content: "summary"
      },
      {
        property: "twitter:title",
        content: ""
      },
      {
        property: "twitter:description",
        content: ""
      },
      {
        property: "twitter:image",
        content: "https://www.notonlycss.com/uploads/share.png"
      },
      { property: "og:url", content: "https://www.notonlycss.com" }
    ]
  },
  methods: {
    formatDate(date) {
      var newDate = new Date(date);
      var options = { year: "numeric", month: "short", day: "numeric" };
      return newDate.toLocaleDateString("en", options);
    }
  }
};
</script>

<style lang="scss">
.article {
  transition: all 0.2s;
  &__link {
    background-color: #123954;
    transition: all 0.2s;
    border: 1px solid transparent;
    &:hover {
      border: 1px solid #fff;
      background-color: #0c2437;
    }
  }
  &__abstract {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  }
  &__preview {
    width: 240px;
    height: 160px;
    @media screen and (max-width: 576px) {
      width: 100%;
      height: 160px;
      margin-bottom: 30px;
    }
  }
}
</style>
