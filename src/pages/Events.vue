<template>
  <Layout>
    <h1 class="text-3xl md:text-4xl font-bold mb-3">Events <i class="far fa-calendar-alt ml-2 text-2xl"></i></h1>
    <p class="text-lg md:text-xl mb-12 font-light">
     We are an international community and we like meetups where we discuss <b>frontend technologies</b>.
      <br /> <b>Join us</b> and become part of our community
    </p>
    <ul>
      <li
        v-for="event in $page.events.edges"
        :key="event.id"
        class="event md:flex p-8 rounded mb-16 bg-primary"
      >
        <div>
          <div
            class="event__preview bg-cover bg-center rounded md:mr-8 mb-8 md:mb-0"
            :style="{ 'background-image': 'url(' + event.node.image + ')' }"
          ></div>
        </div>
        <div class="event__body">
          <div>
            <h1 class="text-2xl md:text-3xl font-bold mb-2">{{event.node.title}}</h1>
            <p class="text-lg md:text-xl mb-4 font-light">{{event.node.abstract}}</p>
            <div class="mb-4">
              <p>
                Date:
                <time>{{event.node.dateMeeting}}</time>
              </p>
            </div>
            <g-link
              :to="event.node.path"
              class="event__link py-2 px-10 rounded block text-center md:inline-block"
            >Find out more and register</g-link>
          </div>
        </div>
      </li>
    </ul>
  </Layout>
</template>
<page-query>
query {
  events: allEvents {
    edges {
      node {
        path
        title
        abstract
        image
        dateMeeting
      }
    }
  }
}
</page-query>
<script>
export default {
  metaInfo: {
    title: "Events",
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
        content: ""
      },
      { property: "og:url", content: "" },
      { name: "robots", content: "index, follow" }
    ]
  }
};
</script>
<style lang="scss">
.event {
  &__link {
    background-color: #123954;
    transition: all 0.2s;
    border: 1px solid transparent;
    &:hover {
      border: 1px solid #fff;
      background-color: #0c2437;
    }
  }
  &__preview {
    width: 340px;
    height: 240px;
    @media screen and (max-width: 576px) {
      width: 100%;
      height: 160px;
    }
  }
}
</style>
