import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/shared/Users'
import { Media } from './collections/shared/Media'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const ALLOWED_ORIGINS = [
  'http://localhost:3002', // anchor dev
  'http://localhost:3003', // veros dev
  'http://localhost:3004', // ripple dev
  process.env.ANCHOR_URL,
  process.env.VEROS_URL,
  process.env.RIPPLE_URL,
].filter(Boolean) as string[]

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    // Output generated types to @vantage/payload-types package
    outputFile: path.resolve(dirname, '../../../../packages/payload-types/src/types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  sharp,
  cors: ALLOWED_ORIGINS,
  csrf: ALLOWED_ORIGINS,
  plugins: [],
})
