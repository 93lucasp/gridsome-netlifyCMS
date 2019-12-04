<template>
  <Layout> 
    <h1 class="text-3xl md:text-4xl font-bold mb-3">Newsletter <i class="far fa-envelope ml-2 text-2xl"></i></h1>
    <h2 class="text-xl md:text-2xl mb-4">The best <b>Frontend articles</b> in your inbox weekly</h2>
    <p class="text-lg md:text-xl font-light">The Not Only CSS newsletter will tell you something new every week.</p>
    <p class="text-lg md:text-xl mb-12 font-light">We publish articles <b>every Tuesday</b>, you can receive them <b>directly in your inbox, just join our newsletter!</b> </p>
    <a href="https://upscri.be/ekrivb" target="_blank" rel="noopener noreferrer" class="btn-cta py-2 px-10 rounded">Join now</a>

    
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Newsletter",
    meta: [
      { name: 'description', content: 'Join the newsletter of Not Only CSS to be always updated on frontend technologies' },
      { property: 'og:title', content: 'Not Only CSS | Newsletter' },
      { property: 'og:description', content: 'Join the newsletter of Not Only CSS to be always updated on frontend technologies' },
      { property: 'og:image', content: 'https://www.notonlycss.com/uploads/share.png' },
      { property: 'og:url', content: 'https://www.notonlycss.com/newsletter' },
      {
        property: "twitter:card",
        content: "summary"
      },
      {
        property: "twitter:title",
        content: "Not Only CSS | Newsletter"
      },
      {
        property: "twitter:description",
        content: "Join the newsletter of Not Only CSS to be always updated on frontend technologies"
      },
      {
        property: "twitter:image",
        content: "https://www.notonlycss.com/uploads/share.png"
      },
    ]
  }
}
</script>
<style>

</style>
