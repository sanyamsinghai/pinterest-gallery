import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
})

export async function getPhotos() {
  return await client.fetch(
    `*[_type == "photo"] | order(publishedAt desc){
      _id,
      title,
      description,
      pinterestUrl,
      "imageUrl": image.asset->url,
      "width": image.asset->metadata.dimensions.width,
      "height": image.asset->metadata.dimensions.height
    }`,
    {},
    { cache: 'no-store' }
  )
}
