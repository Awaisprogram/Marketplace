import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  ...(process.env.SANITY_API ? { token: process.env.SANITY_API } : {}),
  useCdn: false,
})
