<template>
  <div class="layout">
    <Navbar />
    <hr class="mb-16" />
    <div class="container mb-40">
      <slot />
    </div>

    <hr />
    <!-- <footer class="footer py-6 md:flex items-center justify-between text-center md:text-left">
      <p>
        Not Only CSS is proudly
        <br />running on
        <a
          href="https://www.netlify.com/"
          target="_blank"
          rel="noopener noreferrer"
        >Netlify</a>.
      </p>
      <p class="py-3 md:py-0">
        <a href="mailto:info@notonlycss.com">
          Write for us
          <i class="fas fa-pencil-alt ml-2"></i>
        </a>
      </p>
      <ul class="flex justify-center md:justify-end">
        <li>
          <a
            href="https://www.facebook.com/notOnlyCSS/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <i class="fab fa-facebook-f text-2xl"></i>
          </a>
        </li>
        <li class="mx-5">
          <a
            href="https://twitter.com/NotOnlyCSS"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <i class="fab fa-twitter text-2xl"></i>
          </a>
        </li>
        <li>
          <a
            href="https://medium.com/notonlycss"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Medium"
          >
            <i class="fab fa-medium-m text-2xl"></i>
          </a>
        </li>
      </ul>
    </footer> -->
  </div>
</template>


<script>
import Navbar from "~/components/Navbar.vue";
export default {
  components: {
    Navbar
  },

  methods: {
    hamburger: function(el) {
      document
        .querySelector(".hamburger")
        .classList.toggle("hamburger--active");
      document.querySelector("nav").classList.toggle("nav--active");
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap");
hr {
  border-color: rgba(255, 255, 255, 0.1);
}

body {
  font-family: "Roboto", sans-serif;
  background-color: #0c2437;
  color: #fff;
}
.bg-primary {
  background-color: #0e2d43;
}
.layout {
  max-width: 960px;
  margin: 0 auto;
  padding-left: 30px;
  padding-right: 30px;
  @media screen and (max-width: 576px) {
    max-width: 100%;
  }
}
.logo {
  width: 200px;
}
.hamburger-container {
  width: 30px;
  height: 30px;
}
.hamburger {
  width: 26px;
  height: 1px;
  background-color: #fff;
  position: relative;
  z-index: 9;
  position: relative;

  &:before {
    content: "";
    width: 30px;
    height: 1px;
    background-color: #fff;
    top: -8px;
    position: absolute;
    transition: all 0.2s;
  }
  &:after {
    content: "";
    width: 30px;
    height: 1px;
    background-color: #fff;
    top: 8px;
    position: absolute;
    transition: all 0.2s;
  }
  &--active {
    background-color: transparent;
    &:before {
      background-color: #fff;
      top: 0;
      transform: rotate(45deg);
    }
    &:after {
      background-color: #fff;
      top: 0;
      transform: rotate(-45deg);
    }
  }
}

.nav {
  a {
    font-size: 20px;
  }
  @media screen and (max-width: 576px) {
    visibility: hidden;
    position: fixed;
    left: -100%;
    transition: all 0.2s;
    top: 0;
    width: 100%;
    bottom: 0;
    background-color: #0c2437;
    padding-top: 100px;
    opacity: 0;
    z-index: 1;
    a {
      display: block;
      padding: 30px;
      font-size: 26px;
    }
  }
  &--active {
    visibility: visible;
    opacity: 1;
    left: 0;
  }
}
.btn-cta {
  background-color: #3399ff;
  transition: all 0.2s;
  border: 1px solid transparent;
  &:hover {
    border: 1px solid #fff;
    background-color: #3399ff;
  }
}
</style>
