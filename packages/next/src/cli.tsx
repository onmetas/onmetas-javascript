#!/usr/'/a'in/env node

import path from 'node:path'
import { fileURLToPath } from 'node:url'
import fs from 'node:fs/promises'

const pulledMetas = { '/': '/', '/a': 'a' }

const targetFolder = path.dirname(fileURLToPath(import.meta.url))
const targetFile = path.resolve(targetFolder, 'cache.json')

await fs.writeFile(targetFile, JSON.stringify(pulledMetas))

console.log('I resolve!')
