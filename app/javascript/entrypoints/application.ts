import { Client } from '@planningcenter/api-client'

console.log('Vite ⚡️ Rails')

console.log('Visit the guide for more information: ', 'https://vite-ruby.netlify.app/guide/rails')

const client = new Client({ app: 'people' })

client.get({ url: 'me', data: { fields: {} } })

