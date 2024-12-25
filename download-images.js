const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
    {
        name: 'hero-image.jpg',
        url: 'https://placehold.co/1920x1080/0d6efd/white/png?text=Healthcare+Technology+Hero+Image'
    },
    {
        name: 'medical-system.jpg',
        url: 'https://placehold.co/800x600/0d6efd/white/png?text=Advanced+Medical+System'
    },
    {
        name: 'analytics-platform.jpg',
        url: 'https://placehold.co/800x600/0d6efd/white/png?text=Healthcare+Analytics+Platform'
    },
    {
        name: 'cert-hipaa.png',
        url: 'https://placehold.co/200x200/198754/white/png?text=HIPAA+Certified'
    },
    {
        name: 'cert-iso.png',
        url: 'https://placehold.co/200x200/198754/white/png?text=ISO+27001'
    },
    {
        name: 'cert-hitrust.png',
        url: 'https://placehold.co/200x200/198754/white/png?text=HITRUST+CSF'
    },
    {
        name: 'cert-soc2.png',
        url: 'https://placehold.co/200x200/198754/white/png?text=SOC+2+Type+II'
    },
    {
        name: 'company-overview.jpg',
        url: 'https://placehold.co/1200x600/0d6efd/white/png?text=Modern+Healthcare+Facility'
    },
    {
        name: 'team-ceo.jpg',
        url: 'https://placehold.co/400x400/6c757d/white/png?text=CEO'
    },
    {
        name: 'team-cto.jpg',
        url: 'https://placehold.co/400x400/6c757d/white/png?text=CTO'
    },
    {
        name: 'team-cso.jpg',
        url: 'https://placehold.co/400x400/6c757d/white/png?text=CSO'
    },
    {
        name: 'testimonial1.jpg',
        url: 'https://placehold.co/150x150/6c757d/white/png?text=Dr.+Sarah+J'
    },
    {
        name: 'testimonial2.jpg',
        url: 'https://placehold.co/150x150/6c757d/white/png?text=James+W'
    }
];

const downloadImage = (url, filename) => {
    return new Promise((resolve, reject) => {
        const imagePath = path.join(__dirname, 'public', 'images', filename);
        const file = fs.createWriteStream(imagePath);

        https.get(url, (response) => {
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log(`Downloaded ${filename}`);
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(imagePath, () => reject(err));
        });
    });
};

async function downloadAllImages() {
    try {
        for (const image of images) {
            await downloadImage(image.url, image.name);
        }
        console.log('All images downloaded successfully!');
    } catch (error) {
        console.error('Error downloading images:', error);
    }
}

downloadAllImages();
