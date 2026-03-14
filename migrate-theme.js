const fs = require('fs');
const path = require('path');

const srcDir = path.join(process.cwd(), 'src');

const classMap = {
  'text-white': 'text-foreground',
  'text-white/40': 'text-foreground/40',
  'text-white/50': 'text-foreground/50',
  'text-white/70': 'text-foreground/70',
  'text-white/80': 'text-foreground/80',
  'text-white/90': 'text-foreground/90',
  
  'bg-black': 'bg-background',
  'bg-black/40': 'bg-background/40',
  'bg-black/50': 'bg-background/50',
  'bg-black/60': 'bg-background/60',
  'bg-black/70': 'bg-background/70',
  'bg-black/80': 'bg-background/80',
  'bg-black/85': 'bg-background/85',
  'bg-black/90': 'bg-background/90',

  'from-black/30': 'from-background/30',
  'from-black/50': 'from-background/50',
  'via-black/50': 'via-background/50',
  'to-black': 'to-background',
  'from-black': 'from-background',
  
  'border-white/5': 'border-foreground/5',
  'border-white/10': 'border-foreground/10',
  'border-white/15': 'border-foreground/15',
  'border-white/20': 'border-foreground/20',
  
  'bg-white/5': 'bg-foreground/5',
  'bg-white/10': 'bg-foreground/10',
  
  'text-black': 'text-background',
  'bg-white': 'bg-foreground',
};

// Sort descending by length so longer strings (like text-white/70) are replaced before shorter ones (text-white)
const sortedPairs = Object.entries(classMap).sort((a, b) => b[0].length - a[0].length);

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      if (fullPath.includes('globals.css') || fullPath.includes('Navbar.tsx')) continue;
      
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;

      for (const [oldClass, newClass] of sortedPairs) {
        // Safe regex strictly replacing defined css classes in className strings
        const escapedOld = oldClass.replace(/\//g, '\\/');
        const regex = new RegExp(`(?<=[\\s"'\\\`:])${escapedOld}(?=[\\s"'\\\`])`, 'g');
        if (content.match(regex)) {
          content = content.replace(regex, newClass);
          changed = true;
        }
      }

      if (changed) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log('Migrated classes in:', fullPath);
      }
    }
  }
}

processDirectory(srcDir);
