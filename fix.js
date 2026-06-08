const fs = require('fs');
const path = require('path');
const dir = process.cwd();
const publicDir = path.join(dir, 'public');

if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
}

const exts = ['.jpeg', '.png', '.mp4', '.pdf', '.docx', '.html'];
const files = fs.readdirSync(dir);
files.forEach(f => {
    if (exts.includes(path.extname(f).toLowerCase())) {
        fs.copyFileSync(path.join(dir, f), path.join(publicDir, f));
    }
});

const htmlFiles = [
    path.join(dir, 'index.html'),
    path.join(dir, 'posters.html'),
    path.join(publicDir, 'index.html'),
    path.join(publicDir, 'posters.html')
];

const assets = [
    'logo.png', '1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg', 
    '6.jpeg', '7.jpeg', '8.jpeg', 'SystemDiagram.png', 'UI_Main.jpeg', 
    'user_flow.png', 'UI_1.jpeg', 'UI_2.jpeg', 'Mobile_UI.png', 
    'backVideo.mp4', 'Performance.png', 'Abstract.pdf', 'Final PPT.pdf', 
    'User_Manual.pdf', 'Paper.pdf', 'P1.jpeg', 'P2.jpeg', 'P3.jpeg', 
    'P4.jpeg', 'P5.jpeg', 'P6.jpeg', 'index.html', 'posters.html'
];

htmlFiles.forEach(f => {
    if (fs.existsSync(f)) {
        let content = fs.readFileSync(f, 'utf8');
        content = content.replace(/Mobile_UI\.PNG/g, 'Mobile_UI.png');
        
        assets.forEach(asset => {
            const escapedAsset = asset.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
            
            // Replaces src="1.jpeg" with src="/1.jpeg"
            const regex = new RegExp(`(src|href|poster)="(${escapedAsset})"`, 'g');
            content = content.replace(regex, '$1="/$2"');
            
            // Replaces url('1.jpeg') with url('/1.jpeg')
            const regexUrl = new RegExp(`(url\\(['"])(${escapedAsset})(['"]\\))`, 'g');
            content = content.replace(regexUrl, '$1/$2$3');
        });
        
        fs.writeFileSync(f, content);
    }
});

console.log('Done');
