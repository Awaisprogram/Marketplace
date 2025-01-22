import { type SchemaTypeDefinition } from 'sanity'
import hero from './hero'
import banner from './banner'
import post from './post'
import neutral from './neutral'
import about from './about'
import product from './product'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hero,banner,post,neutral,about,product],
}
