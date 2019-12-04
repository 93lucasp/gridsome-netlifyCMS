<template>
  <Layout>
    <div class="eventPage">
      <h1 class="text-3xl md:text-4xl font-bold mb-6">{{$page.event.title}}</h1>
      <div
        class="eventPage__image"
        :style="{ 'background-image': 'url(' + $page.event.image + ')' }"
      ></div>
      <!-- <i><time>{{$page.event.date}}</time></i> -->
      <div v-html="$page.event.content"></div>
    </div>
  </Layout>
</template>

<page-query>
query ($path: String!) {
    event: events (path: $path) {
      title
      content
      dateMeeting
      image
    }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.event.title
    };
  }
};
</script>
<style lang="scss">
.eventPage {
  background-color: #0e2d43;
  padding: 50px;
  margin-bottom: 100px;
  h1 {
    margin-top: 30px;
    font-size: 2em;
    font-weight: bold;
    &:first-child {
      margin-top: 0;
    }
  }
  h2 {
    font-size: 1.5em;
    font-weight: bold;
  }
  h3 {
    font-size: 1.17em;
    font-weight: bold;
  }
  h4 {
    font-size: 1em;
    font-weight: bold;
  }
  h5 {
    font-size: .83em;
    font-weight: bold;
  }
  h6 {
    font-size: .67em;
    font-weight: bold;
  }
  p {
    
    font-size: 18px;
  }
  ul {
    list-style: disc;
    padding-inline-start: 40px;
  }
  a {
    text-decoration: underline;
  }
}
.eventPage__image {
  width: 100%;
  height: 400px;
  background-position: center;
  background-size: cover;
  border-radius: 5px;
  margin-bottom: 30px;
}
</style>

