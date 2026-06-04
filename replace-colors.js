const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.resolve(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.css')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('./src');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = content
    .replace(/\bsky-/g, 'orange-')
    .replace(/\bblue-/g, 'orange-')
    .replace(/\bindigo-/g, 'orange-')
    // Fix any potential orange-orange- if there was a typo, though the regex word boundary \b prevents this.
    ;
    
  if (content !== newContent) {
    fs.writeFileSync(file, newContent);
    console.log(`Updated colors in ${file}`);
  }
});
