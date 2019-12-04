// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import "./assets/css/global.css";
import DefaultLayout from '~/layouts/Default.vue'
export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  head.script.push(
  {
    src: 'https://kit.fontawesome.com/97471774c6.js',
    body: true,
    crossorigin:"anonymous"
  })
 
}


       