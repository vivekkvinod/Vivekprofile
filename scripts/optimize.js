import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, '../src/assets');

async function optimizeImages() {
    if (!fs.existsSync(assetsDir)) {
        console.error('Assets directory not found');
        return;
    }

    const files = fs.readdirSync(assetsDir);

    for (const file of files) {
        if (file.match(/\.(jpg|jpeg|png)$/i) && !file.includes('profile')) {
            const filePath = path.join(assetsDir, file);
            const stats = fs.statSync(filePath);

            // Only optimize if > 500KB
            if (stats.size > 500 * 1024) {
                console.log(`Optimizing ${file} (${(stats.size / 1024 / 1024).toFixed(2)} MB)...`);

                try {
                    const tempPath = filePath + '.temp';
                    await sharp(filePath)
                        .resize({ width: 1920, withoutEnlargement: true })
                        .jpeg({ quality: 80, mozjpeg: true })
                        .toFile(tempPath);

                    fs.unlinkSync(filePath);
                    fs.renameSync(tempPath, filePath);

                    const newStats = fs.statSync(filePath);
                    console.log(`Done! New size: ${(newStats.size / 1024 / 1024).toFixed(2)} MB`);
                } catch (err) {
                    console.error(`Failed to optimize ${file}:`, err);
                }
            } else {
                console.log(`Skipping ${file} (already small enough)`);
            }
        }
    }
}

optimizeImages();
