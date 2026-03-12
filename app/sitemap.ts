import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {

  const baseUrl = "https://cefin.com"

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/cursos`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/eventos`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/instructores`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/membresias`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: new Date(),
    },
  ]

}