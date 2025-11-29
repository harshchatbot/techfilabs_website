// build-zip.js
import { execSync } from "child_process";
import fs from "fs";
import path from "path";

// Convert month number → name
const months = [
  "jan", "feb", "mar", "apr", "may", "jun",
  "jul", "aug", "sep", "oct", "nov", "dec"
];

// Build your custom date format (6thnov, 21stjul etc.)
function formatDateCustom() {
  const d = new Date();
  const day = d.getDate();
  const month = months[d.getMonth()];

  // Add th/st/nd/rd suffix
  const suffix =
    day === 1 ? "st" :
    day === 2 ? "nd" :
    day === 3 ? "rd" : "th";

  return `${day}${suffix}${month}`;
}

const version = "v1.1"; // <-- Change version any time
const customDate = formatDateCustom();
const filename = `${customDate}_website_vite_${version}.zip`;

const distPath = path.resolve("dist");
const outFile = path.resolve(filename);

console.log("\n🚀 Starting Production Build...\n");

// Run Vite build
execSync("npm run build", { stdio: "inherit" });

// Validate dist
if (!fs.existsSync(distPath)) {
  console.error("❌ ERROR: dist folder missing. Build failed?");
  // eslint-disable-next-line no-undef
  process.exit(1);
}

// Remove existing ZIP (if same name exists)
if (fs.existsSync(outFile)) {
  console.log("⚠ Removing existing ZIP...");
  fs.unlinkSync(outFile);
}

console.log(`📦 Creating ZIP: ${filename}`);

// Important: zip FROM INSIDE dist folder
execSync(`cd dist && zip -r "${outFile}" *`, { stdio: "inherit" });

console.log(`
✅ Success!
📁 ZIP created: ${filename}
Upload this to GoDaddy and Extract.
`);
