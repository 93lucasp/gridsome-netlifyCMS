// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

//gridsome.config.js
const tailwindcss = require("tailwindcss")
module.exports = {
  siteName: 'test',
  siteUrl: 'https://www.test.com/',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          tailwindcss,
        ],
      },
    },
  },
  plugins: [
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
        // exclude: ['/exclude-me'],
        config: {
          '/events/*': {
            changefreq: 'weekly',
            priority: 0.9
          },
          '/about': {
            changefreq: 'monthly',
            priority: 0.6
          },
          '/snippets': {
            changefreq: 'weekly',
            priority: 0.8
          },
          '/newsletter': {
            changefreq: 'monthly',
            priority: 0.8
          },
          '/': {
            changefreq: 'weekly',
            priority: 1.0
          }
        }
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-152557322-1'
      }
    },
    {
      use: 'gridsome-plugin-purgecss',
      // default options, the following will be included if you don't provide anything
      options: {
        content: [
          './src/**/*.vue',
          './src/**/*.js',
          './src/**/*.jsx',
          './src/**/*.pug',
          './src/**/*.md'
        ],
        defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'events/**/*.md',
        typeName: 'Events',
        remark: {
          // remark options
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'snippets/**/*.md',
        typeName: 'Snippets',
        remark: {
          // remark options
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'articles/**/*.md',
        typeName: 'Articles',
        remark: {
          // remark options
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'navs/**/*.md',
        typeName: 'Nav',
        remark: {
          // remark options
        }
      }
    }
  ],
  transformers: {
    remark: {
      // global remark options
    }
  }
}