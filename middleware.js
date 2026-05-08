import { rewrite } from '@vercel/edge'

export default function middleware(request) {
    const host = request.headers.get('host') || ''
    const { pathname } = new URL(request.url)

    if (host.includes('somon-logistik')) {
        if (pathname === '/') return rewrite(new URL('/index-logistik.html', request.url))
        if (pathname === '/sitemap.xml') return rewrite(new URL('/sitemap-logistik.xml', request.url))
        if (pathname === '/robots.txt') return rewrite(new URL('/robots-logistik.txt', request.url))
    }

    if (host.includes('somon-go')) {
        if (pathname === '/') return rewrite(new URL('/index-go.html', request.url))
        if (pathname === '/sitemap.xml') return rewrite(new URL('/sitemap-go.xml', request.url))
        if (pathname === '/robots.txt') return rewrite(new URL('/robots-go.txt', request.url))
    }
}

export const config = { matcher: ['/', '/sitemap.xml', '/robots.txt'] }
