const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const baseUrl = 'https://saiyam-jenny.invitationmedia.in';

const assets = [
  { url: `${baseUrl}/fonts/Candlescript.otf`, dest: 'downloaded_assets/fonts/Candlescript.otf' },
  { url: `${baseUrl}/intro-poster.jpg`, dest: 'downloaded_assets/intro-poster.jpg' },
  { url: `${baseUrl}/intro-compressed.mp4`, dest: 'downloaded_assets/intro-compressed.mp4' },
  { url: `${baseUrl}/assets/homehero-CxdqYPUA.jpeg`, dest: 'downloaded_assets/assets/homehero.jpeg' },
  { url: `${baseUrl}/assets/lunch-_CrstTAQ.jpeg`, dest: 'downloaded_assets/assets/lunch.jpeg' },
  { url: `${baseUrl}/assets/sangeet-LIdARYt1.jpeg`, dest: 'downloaded_assets/assets/sangeet.jpeg' },
  { url: `${baseUrl}/assets/mayra-BjkRfZro.jpeg`, dest: 'downloaded_assets/assets/mayra.jpeg' },
  { url: `${baseUrl}/assets/wedding-DnA4PNoy.jpeg`, dest: 'downloaded_assets/assets/wedding.jpeg' },
  { url: `${baseUrl}/countdown-frame.png`, dest: 'downloaded_assets/countdown-frame.png' },
  { url: `${baseUrl}/__l5e/assets-v1/780dfac1-eefc-4514-bc00-3771ac2436a9/countdown-frame.png`, dest: 'downloaded_assets/countdown-frame-alt.png' },
  { url: `${baseUrl}/audio/background.mp3`, dest: 'downloaded_assets/audio/background.mp3' },
  { url: 'https://storage.googleapis.com/gpt-engineer-file-uploads/vIqaRTSLkYaT047ILJV8fuelrRc2/social-images/social-1782198798799-Media.webp', dest: 'downloaded_assets/social-og.webp' }
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    const proto = url.startsWith('https') ? https : http;
    const req = proto.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let redirectUrl = res.headers.location;
        if (redirectUrl.startsWith('/')) {
          redirectUrl = baseUrl + redirectUrl;
        }
        console.log(`Redirecting ${url} -> ${redirectUrl}`);
        return download(redirectUrl, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        console.warn(`Failed ${url}: HTTP ${res.statusCode}`);
        return resolve({ url, success: false, status: res.statusCode });
      }
      const fileStream = fs.createWriteStream(dest);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        const stat = fs.statSync(dest);
        console.log(`Saved ${dest} (${stat.size} bytes)`);
        resolve({ url, success: true, size: stat.size });
      });
    });
    req.on('error', (err) => {
      console.error(`Error downloading ${url}:`, err.message);
      resolve({ url, success: false, error: err.message });
    });
  });
}

async function run() {
  for (const item of assets) {
    await download(item.url, item.dest);
  }
  console.log('All downloads finished.');
}

run();
