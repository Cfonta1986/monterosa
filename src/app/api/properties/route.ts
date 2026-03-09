import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';

export const revalidate = 3600; // Cache for 1 hour

export async function GET() {
    try {
        const response = await fetch('https://www.argenprop.com/monterosa-negocios-inmobiliarios', {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
                'Accept-Language': 'es-AR,es;q=0.8,en-US;q=0.5,en;q=0.3',
            },
            next: { revalidate: 3600 },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch Argenprop: ${response.status}`);
        }

        const html = await response.text();
        const $ = cheerio.load(html);

        // Check if we hit a captcha/cloudflare block
        if (html.includes('Cloudflare') || html.includes('Just a moment...')) {
            throw new Error('Blocked by Cloudflare/Captcha');
        }

        const properties: any[] = [];

        $('.listing__item').each((i, el) => {
            const urlPath = $(el).find('a').attr('href');
            const address = $(el).find('.card__address').text().trim() || $(el).find('.card__title').text().trim();
            const priceText = $(el).find('.card__price').text().trim().replace(/\s+/g, ' ');
            const imageUrl = $(el).find('img').first().attr('src') || $(el).find('img').first().attr('data-src');

            const features: string[] = [];
            $(el).find('.card__main-features li').each((j, f) => {
                const featureText = $(f).text().trim().replace(/\s+/g, ' ');
                if (featureText) features.push(featureText);
            });

            if (urlPath && address) {
                properties.push({
                    id: urlPath.split('--').pop() || i.toString(),
                    url: `https://www.argenprop.com${urlPath}`,
                    address,
                    price: priceText,
                    image: imageUrl || null,
                    features
                });
            }
        });

        return NextResponse.json({ success: true, count: properties.length, properties });
    } catch (error: any) {
        console.error('Error scraping properties:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
