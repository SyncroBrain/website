#!/usr/bin/env node
/**
 * Renders SyncroBrain favicons from SVG + source PNG.
 * Usage: node scripts/render-logo-png.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { Resvg } from '@resvg/resvg-js'
import sharp from 'sharp'

const __dirname = dirname(fileURLToPath(import.meta.url))
const publicDir = join(__dirname, '..', 'public')

function renderSvg(name, size) {
  const svgPath = join(publicDir, name.endsWith('.svg') ? name : `${name}.svg`)
  const svg = readFileSync(svgPath, 'utf8')
  const resvg = new Resvg(svg, {
    fitTo: { mode: 'width', value: size },
  })
  return resvg.render().asPng()
}

async function renderFromSource(name, size, background) {
  const input = join(publicDir, 'logo-mark.png')
  return sharp(input)
    .resize(size, size, {
      fit: 'contain',
      background,
    })
    .png()
    .toBuffer()
}

const darkBg = { r: 10, g: 15, b: 30, alpha: 1 }
const lightBg = { r: 248, g: 250, b: 252, alpha: 1 }

writeFileSync(join(publicDir, 'apple-icon.png'), await renderFromSource('apple-icon', 180, darkBg))
console.log('Wrote apple-icon.png (180x180) from logo-mark.png')

writeFileSync(join(publicDir, 'icon-dark-32x32.png'), renderSvg('icon', 32))
console.log('Wrote icon-dark-32x32.png (32x32) from icon.svg')

writeFileSync(
  join(publicDir, 'icon-light-32x32.png'),
  await renderFromSource('icon-light', 32, lightBg),
)
console.log('Wrote icon-light-32x32.png (32x32) from logo-mark.png')

writeFileSync(join(publicDir, 'logo-icon.png'), renderSvg('logo', 180))
console.log('Wrote logo-icon.png (180x180) from logo.svg')
