/** @format */

import fs from "fs";
import path from "path";
import https from "https";
import http from "http";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, "..", "public", "images");
if (!fs.existsSync(imagesDir)) {
	fs.mkdirSync(imagesDir, { recursive: true });
}

// Extract Unsplash photo ID from URL
function getPhotoId(url) {
	const match = url.match(/photo-(\d+)-([a-f0-9]+)/);
	if (match) {
		return match[2]; // Return the hash part
	}
	return null;
}

// Download image function
function downloadImage(url, filepath) {
	return new Promise((resolve, reject) => {
		const protocol = url.startsWith("https") ? https : http;

		protocol
			.get(url, (response) => {
				if (response.statusCode === 301 || response.statusCode === 302) {
					// Handle redirect
					return downloadImage(response.headers.location, filepath)
						.then(resolve)
						.catch(reject);
				}

				if (response.statusCode !== 200) {
					reject(new Error(`Failed to download: ${response.statusCode}`));
					return;
				}

				const fileStream = fs.createWriteStream(filepath);
				response.pipe(fileStream);

				fileStream.on("finish", () => {
					fileStream.close();
					resolve();
				});

				fileStream.on("error", reject);
			})
			.on("error", reject);
	});
}

// All unique image URLs found in the codebase
const imageUrls = [
	// From FinalCTASection.tsx
	"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",

	// From realEstateImages.ts
	"https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
	"https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
	"https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
	"https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
	"https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
	"https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
	"https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
	"https://images.unsplash.com/photo-1615529182904-14819c35db37?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
	"https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
	"https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
	"https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
	"https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
	"https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
	"https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
	"https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
	"https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
	"https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
	"https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
	"https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
	"https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
	"https://images.unsplash.com/photo-1487956382158-bb926046304a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
	"https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",

	// From MissionVisionSection.tsx
	"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",

	// From ComparisonSection.tsx
	"https://images.unsplash.com/photo-1558036117-15e82a2c9a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",

	// From ComplianceSection.tsx
	"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",

	// From about/page.tsx
	"https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
	"https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
	"https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
	"https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
	"https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
	"https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
	"https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
	"https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w-400&q=80",
	"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w-400&q=80",
	"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w-400&q=80",
	"https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w-400&q=80",

	// From marketplace/page.tsx
	"https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&auto=format&fit=crop",
	"https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&auto=format&fit=crop",
	"https://images.unsplash.com/photo-1616587226154-91eab0a51dc7?w=800&auto=format&fit=crop",
	"https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&auto=format&fit=crop",
	"https://images.unsplash.com/photo-1613977257592-4871e5fcd7a4?w=800&auto=format&fit=crop",

	// From dummy-data.ts (smaller versions)
	"https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800&auto=format&fit=crop&q=80",
	"https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800&auto=format&fit=crop&q=80",
	"https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&auto=format&fit=crop&q=80",
	"https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80",
	"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&auto=format&fit=crop&q=80",
	"https://images.unsplash.com/photo-1487956382158-bb926046304a?w=800&auto=format&fit=crop&q=80",
	"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&auto=format&fit=crop&q=80",
	"https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=80",
];

// Get unique URLs - use original URLs directly, but normalize to get unique photo IDs
const urlToPhotoId = new Map();
const photoIdToUrl = new Map();

imageUrls.forEach((url) => {
	const photoId = getPhotoId(url);
	if (photoId) {
		// Keep the highest quality URL for each photo ID
		if (!photoIdToUrl.has(photoId) || url.includes("w=2000")) {
			photoIdToUrl.set(photoId, url);
		}
		urlToPhotoId.set(url, photoId);
	}
});

const uniquePhotoIds = Array.from(photoIdToUrl.keys());
console.log(`Found ${uniquePhotoIds.length} unique images to download`);

// Create URL mapping
const urlMapping = {};

// Download all images
async function downloadAllImages() {
	let successCount = 0;
	let failCount = 0;

	for (let i = 0; i < uniquePhotoIds.length; i++) {
		const photoId = uniquePhotoIds[i];
		const originalUrl = photoIdToUrl.get(photoId);

		// Use high quality version - ensure w=2000
		let downloadUrl = originalUrl
			.replace(/w=\d+/, "w=2000")
			.replace(/&q=\d+/, "&q=80");
		if (!downloadUrl.includes("w=")) {
			// Add width parameter if missing
			const separator = downloadUrl.includes("?") ? "&" : "?";
			downloadUrl = `${originalUrl}${separator}w=2000&q=80`;
		}

		const filename = `unsplash-${photoId}.jpg`;
		const filepath = path.join(imagesDir, filename);

		// Skip if already downloaded
		if (fs.existsSync(filepath)) {
			console.log(
				`[${i + 1}/${
					uniquePhotoIds.length
				}] Skipping ${filename} (already exists)`,
			);
			// Map all URLs with this photo ID
			imageUrls.forEach((url) => {
				if (getPhotoId(url) === photoId) {
					urlMapping[url] = `/images/${filename}`;
				}
			});
			continue;
		}

		try {
			console.log(
				`[${i + 1}/${uniquePhotoIds.length}] Downloading ${filename}...`,
			);
			await downloadImage(downloadUrl, filepath);
			// Map all URLs with this photo ID
			imageUrls.forEach((url) => {
				if (getPhotoId(url) === photoId) {
					urlMapping[url] = `/images/${filename}`;
				}
			});
			successCount++;
		} catch (error) {
			console.error(`Failed to download ${filename}:`, error.message);
			failCount++;
		}

		// Small delay to avoid rate limiting
		await new Promise((resolve) => setTimeout(resolve, 300));
	}

	console.log(`\nDownload complete!`);
	console.log(`Success: ${successCount}`);
	console.log(`Failed: ${failCount}`);

	// Save mapping file
	const mappingPath = path.join(
		__dirname,
		"..",
		"public",
		"images",
		"url-mapping.json",
	);
	fs.writeFileSync(mappingPath, JSON.stringify(urlMapping, null, 2));
	console.log(`\nURL mapping saved to: ${mappingPath}`);
}

downloadAllImages().catch(console.error);
