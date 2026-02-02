import { createClient } from '@sanity/client'
import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
})

export async function getPhotos() {
  return await client.fetch(
    `*[_type == "photo"] | order(coalesce(publishedAt, _createdAt) desc){
      _id,
      title,
      description,
      pinterestUrl,
      "imageUrl": image.asset->url,
      "width": image.asset->metadata.dimensions.width,
      "height": image.asset->metadata.dimensions.height
    }`
  )
}
