import sanityClient from '@sanity/client';

import { createImageUrlBuilder } from '@sanity/image-url';

export const client = sanityClient({
    projectId : 'i84j8yey',
    dataset : 'production',
    apiVersion : '2026-06-14',
    useCdn : true,
    token : process.env.SANITY_TOKEN
})

const builder = createImageUrlBuilder(client)

export const urlFor = (source) => builder.image(source).url()