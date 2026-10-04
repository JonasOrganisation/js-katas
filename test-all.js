const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const srcPath = path.join(__dirname, "src");

function findJsFiles(folder) {
  const files = fs.readdirSync(folder, { withFileTypes: true });

  return files.flatMap((file) => {
    const fullPath = path.join(folder, file.name);

    if (file.isDirectory()) {
      return findJsFiles(fullPath);
    }

    if (file.isFile() && file.name.endsWith(".js")) {
      return [fullPath];
    }

    return [];
  });
}

const files = findJsFiles(srcPath);

const results = [];

for (const file of files) {
  try {
    execFileSync("node", [file], {
      stdio: "pipe",
    });

    results.push({
      file,
      success: true,
    });
  } catch (error) {
    const output =
      error.stderr?.toString() || error.stdout?.toString() || error.message;

    const lines = output
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);

    const usefulError =
      lines.find((line) => line.startsWith("AssertionError")) ||
      lines.find((line) => line.includes("ReferenceError")) ||
      lines.find((line) => line.includes("TypeError")) ||
      lines.find((line) => line.includes("SyntaxError")) ||
      "Erreur dans les tests";

    results.push({
      file,
      success: false,
      error: usefulError,
    });
  }
}

// Regroupement par premier dossier après src
const groups = {};

for (const result of results) {
  const relativePath = path.relative(srcPath, result.file);
  const category = relativePath.split(path.sep)[0];

  if (!groups[category]) {
    groups[category] = [];
  }

  groups[category].push(result);
}

let success = 0;
let failed = 0;

console.log(`\n🧪 ${files.length} fichiers à tester\n`);

for (const [category, categoryResults] of Object.entries(groups)) {
  const allSuccess = categoryResults.every((result) => result.success);

  if (allSuccess) {
    console.log(`🎉 src\\${category}\\`);
    success += categoryResults.length;
    continue;
  }

  console.log(`\n📁 src\\${category}\\`);

  for (const result of categoryResults) {
    const relativePath = path.relative(__dirname, result.file);

    if (result.success) {
      console.log(`   🎉 ${relativePath}`);
      success++;
    } else {
      console.log(`   ❌ ${relativePath}`);
      console.log(`      ↳ ${result.error}`);
      failed++;
    }
  }
}

console.log("\n-----------------------");
console.log(`🎉 Réussis : ${success}`);
console.log(`❌ Échoués : ${failed}`);
console.log(`📦 Total   : ${files.length}`);
