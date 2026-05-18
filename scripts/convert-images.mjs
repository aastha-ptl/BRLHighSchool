import { promises as fs } from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const imagesRoot = path.resolve('src/assets/images')
const inputExtensions = new Set(['.png', '.jpg', '.jpeg'])

async function walk(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name)
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)))
      continue
    }

    if (inputExtensions.has(path.extname(entry.name).toLowerCase())) {
      files.push(fullPath)
    }
  }

  return files
}

async function convertImage(filePath) {
  const outputPath = filePath.replace(/\.(png|jpe?g)$/i, '.webp')
  await sharp(filePath).webp({ quality: 82 }).toFile(outputPath)
  console.log(`Created ${path.relative(process.cwd(), outputPath)}`)
}

const files = await walk(imagesRoot)

for (const filePath of files) {
  await convertImage(filePath)
}