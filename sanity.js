import sanityClient from '@sanity/client'
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: '2022-07-17',
	useCdn: true,
	token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
})

export function urlFor(source) {
	const builder = imageUrlBuilder(client)
  	return builder.image(source)
}
