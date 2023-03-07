#!/usr/bin/env node

import path from 'node:path'
import { fileURLToPath } from 'node:url'
import fs from 'node:fs/promises'

// @ts-ignore
import * as packageJson from '../package.json' assert { type: 'json' }

if (false) {
  console.error('[OnMetas]', 'Failed to find token.')
  process.exit(1)
}

// const pulledMetas = { '/': '/', '/a': 'a' }
let metas = {}

try {
  // const response = await fetch('https://api.onmetas.com')
  // console.log('response', response)
} catch (error) {
  console.error('[OnMetas]', 'Failed to pull metas.', error)
  process.exit(1)
}

console.log('[OnMetas]', 'Metas pulled successfully.')

const cachedData: {
  version: string
  metas: Record<string, string>
} = { version: packageJson.version, metas }

try {
  const targetFolder = path.dirname(fileURLToPath(import.meta.url))
  const targetFile = path.resolve(targetFolder, '..', 'cache.json')
  
  await fs.writeFile(targetFile, JSON.stringify(cachedData))
} catch (error) {
  console.error('[OnMetas]', 'Failed to cache metas.', error)
  process.exit(1)
}

console.log('[OnMetas]', 'Metas cached successfully.')
