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
      if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.md')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('./src');
files.push(path.resolve('./README.md'));
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = content.replace(/SmartSocietyHub/g, 'ReManage Society')
                          .replace(/SmartSociety/g, 'ReManage Society')
                          .replace(/Smart Society Hub/gi, 'ReManage Society')
                          .replace(/Smart Society/gi, 'ReManage Society')
                          .replace(/smartsocietyhub\.co/g, 'remanagesociety.com')
                          .replace(/smartsocietyhub/g, 'remanagesociety');
  if (content !== newContent) {
    fs.writeFileSync(file, newContent);
    console.log(`Updated ${file}`);
  }
});

// Update colors in globals.css
let cssPath = path.resolve('./src/app/globals.css');
if (fs.existsSync(cssPath)) {
  let css = fs.readFileSync(cssPath, 'utf8');
  let newCss = css.replace(/--color-primary:\s*#2563eb;/g, '--color-primary: #f97316;')
           .replace(/--color-primary-hover:\s*#1d4ed8;/g, '--color-primary-hover: #ea580c;')
           .replace(/--color-primary-light:\s*#60a5fa;/g, '--color-primary-light: #fb923c;')
           .replace(/--color-accent:\s*#f97316;/g, '--color-accent: #334155;')
           .replace(/--primary:\s*#2563eb;/g, '--primary: #f97316;')
           .replace(/--ring:\s*#2563eb;/g, '--ring: #f97316;')
           .replace(/#2563eb/g, '#f97316')
           .replace(/rgba\(14, 165, 233, /g, 'rgba(249, 115, 22, '); // update divider color
  fs.writeFileSync(cssPath, newCss);
  console.log('Updated globals.css');
}
