import { rewrite } from '@vercel/edge'

export default function middleware(request) {
    const host = request.headers.get('host') || ''
    const url = new URL(request.url)

    if (url.pathname !== '/') return

    if (host.includes('somon-logistik')) {
        return rewrite(new URL('/index-logistik.html', request.url))
    }
    if (host.includes('somon-go')) {
        return rewrite(new URL('/index-go.html', request.url))
    }
}

export const config = { matcher: ['/'] }
