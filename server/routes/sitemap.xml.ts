/*
import { SitemapStream, streamToPromise } from 'sitemap'
import { serverQueryContent } from '#content/server'

export default defineEventHandler(async (event) => {
  // Fetch all documents
  const docs = await serverQueryContent(event).find()
  const sitemap = new SitemapStream({
    hostname: 'https://canvas.hrcd.fr',
  })

  for (const doc of docs) {
    sitemap.write({
      url: doc._path,
      changefreq: 'daily',
    })
  }
  // add other pages like /about, /contact etc
  sitemap.write({
    url: '/',
    changefreq: 'daily',
  })
  sitemap.write({
    url: '/about',
    changefreq: 'daily',
  })
  sitemap.write({
    url: '/contact',
    changefreq: 'daily',
  })
  sitemap.write({
    url: '/works',
    changefreq: 'daily',
  })
  sitemap.write({
    url: '/writing',
    changefreq: 'daily',
  })
  sitemap.end()

  return streamToPromise(sitemap)
})
*/
