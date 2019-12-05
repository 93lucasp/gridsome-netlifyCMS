<template>
  <nav class="navbar">
    <ul class="flex flex-wrap">
        <li v-for="link in $static.links.edges" :key="link.id" class="mx-10">
             {{link.node.title}} <br>
            <div v-if="link.node.submenu == true ">
                {{link.node.title1}}
                {{link.node.title2}}
                {{link.node.title3}}
                {{link.node.title4}}
                {{link.node.title5}}
                {{link.node.title6}}
                {{link.node.title7}}
                {{link.node.title8}}
            </div>
          
        </li>
    </ul>
  </nav>
</template>
<static-query>
query {
  links: allNav {
    edges {
      node {
        title
        page
        submenu
        title1
        page1
        title1
        page1
        title2
        page2
        title3
        page3
        title4
        page4
        title5
        page5
        title6
        page6
        title7
        page7
        title8
        page8

        
      }
    }
  }
}
</static-query>
<script>
export default {
  name: "Navbar"
};
</script>

<style>
.card {
  padding: 20px;
  background: #fff;
}
</style>