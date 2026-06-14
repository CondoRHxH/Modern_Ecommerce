import sanityClient from '@sanity/client';

import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId : 'i84j8yey',
    dataset : 'production',
    apiVersion : '2026-06-14',
    useCdn : true,
    token : process.env.SANITY_TOKEN
})

const builder = imageUrlBuilder(client)

export const bb = (source) => builder.image(source)