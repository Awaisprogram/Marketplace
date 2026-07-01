// Compatibility shim for the installed next-sanity version.
import type { QueryParams } from 'next-sanity'
import { client } from './client'

export const sanityFetch = async <T = unknown>(query: string, params?: QueryParams) => {
  return client.fetch<T>(query, params as QueryParams)
}

export const SanityLive = () => null

