#!/usr/bin/env node
/**
 * Image Optimization Script
 * Converts images to WebP format with appropriate sizing.
 * Run: node scripts/optimize-images.mjs
 */

import sharp from "sharp";
import { readdir, stat, mkdir, rm } from "fs/promises";
import { join, extname, basename } from "path";

const IMAGES_DIR = join(process.cwd(), "public", "images");
const OPTIMIZED_DIR = join(process.cwd(), "public", "images-optimized");

// Images actually referenced in the codebase and their target sizes
const IMAGE_CONFIG = {
  // Hero profile photo — displayed at max 256x256
  "profile.jpeg": { width: 512, height: 512, quality: 80, fit: "cover" },

  // Navbar/Footer tiny avatar — displayed at ~32x32
  "lmo1.jpeg": { width: 64, height: 64, quality: 75, fit: "cover" },

  // Project hardware images — displayed in cards at ~800px wide
  "project1.JPG": { width: 800, height: 600, quality: 78, fit: "cover" },
  "project2.JPG": { width: 800, height: 600, quality: 78, fit: "cover" },
  "project3.JPG": { width: 800, height: 600, quality: 78, fit: "cover" },
  "project4.JPG": { width: 800, height: 600, quality: 78, fit: "cover" },

  // Activity images — displayed in smaller cards at ~640px wide
  "nowmaker.JPG": { width: 640, height: 480, quality: 75, fit: "cover" },
  "cor1.JPG": { width: 640, height: 480, quality: 75, fit: "cover" },
  "cor2.jpg": { width: 640, height: 480, quality: 75, fit: "cover" },
  "wrg.jpg": { width: 640, height: 480, quality: 75, fit: "cover" },
  "wrg1.jpg": { width: 640, height: 480, quality: 75, fit: "cover" },
  "rc.jpg": { width: 640, height: 480, quality: 75, fit: "cover" },
  "pc2.JPG": { width: 640, height: 480, quality: 75, fit: "cover" },
  "suic.jpeg": { width: 640, height: 480, quality: 75, fit: "cover" },
};

async function getFileSize(filePath) {
  try {
    const s = await stat(filePath);
    return s.size;
  } catch {
    return 0;
  }
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

async function optimizeImage(filename, config) {
  const inputPath = join(IMAGES_DIR, filename);
  const outputName = basename(filename, extname(filename)) + ".webp";
  const outputPath = join(OPTIMIZED_DIR, outputName);

  const originalSize = await getFileSize(inputPath);
  if (originalSize === 0) {
    console.log(`  ⚠️  Skipping ${filename} — file not found`);
    return null;
  }

  await sharp(inputPath)
    .resize(config.width, config.height, {
      fit: config.fit || "cover",
      withoutEnlargement: true,
    })
    .webp({ quality: config.quality || 78 })
    .toFile(outputPath);

  const newSize = await getFileSize(outputPath);
  const savings = ((1 - newSize / originalSize) * 100).toFixed(1);

  console.log(
    `  ✅ ${filename.padEnd(25)} ${formatBytes(originalSize).padStart(10)} → ${formatBytes(newSize).padStart(10)}  (${savings}% smaller)`
  );

  return { original: originalSize, optimized: newSize };
}

async function main() {
  console.log("\n🔧 Image Optimization Script");
  console.log("━".repeat(70));

  // Create output directory
  await mkdir(OPTIMIZED_DIR, { recursive: true });

  console.log("\n📸 Optimizing referenced images to WebP...\n");

  let totalOriginal = 0;
  let totalOptimized = 0;
  let count = 0;

  for (const [filename, config] of Object.entries(IMAGE_CONFIG)) {
    const result = await optimizeImage(filename, config);
    if (result) {
      totalOriginal += result.original;
      totalOptimized += result.optimized;
      count++;
    }
  }

  console.log("\n" + "━".repeat(70));
  console.log(`\n📊 Results:`);
  console.log(`   Images optimized:  ${count}`);
  console.log(`   Original total:    ${formatBytes(totalOriginal)}`);
  console.log(`   Optimized total:   ${formatBytes(totalOptimized)}`);
  console.log(
    `   Total savings:     ${formatBytes(totalOriginal - totalOptimized)} (${((1 - totalOptimized / totalOriginal) * 100).toFixed(1)}%)`
  );

  // List unused images
  console.log("\n🗑️  Unused images (not referenced in code):");
  const allFiles = await readdir(IMAGES_DIR);
  const usedFiles = new Set(Object.keys(IMAGE_CONFIG));
  const unusedFiles = allFiles.filter(
    (f) =>
      !usedFiles.has(f) &&
      !f.startsWith(".") &&
      f !== "images-optimized" &&
      [".jpg", ".jpeg", ".png", ".gif", ".webp", ".pdf"].includes(
        extname(f).toLowerCase()
      )
  );

  for (const f of unusedFiles) {
    const size = await getFileSize(join(IMAGES_DIR, f));
    console.log(`   🔸 ${f.padEnd(55)} ${formatBytes(size)}`);
  }

  console.log(
    "\n✨ Done! Optimized images saved to: public/images-optimized/"
  );
  console.log(
    "   Next step: Replace originals and update code references.\n"
  );
}

main().catch(console.error);
