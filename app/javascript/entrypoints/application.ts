import url from '@planningcenter/url'
import { Client } from '@planningcenter/api-client'

console.log('Vite ⚡️ Rails')

console.log('Visit the guide for more information: ', 'https://vite-ruby.netlify.app/guide/rails')

console.log('The url lib itself works', url('development')('people'))

const client = new Client({ app: 'people' })

console.log("But trying to use it through api-client doesn't")
client.get({ url: 'me', fields: {} })
