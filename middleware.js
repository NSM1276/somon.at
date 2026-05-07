export default async function middleware(request) {
    const host = request.headers.get('host') || ''
    const url = new URL(request.url)

    if (url.pathname !== '/') return

    if (host.includes('somon-logistik')) {
        return fetch(new URL('/index-logistik.html', request.url))
    }
    if (host.includes('somon-go')) {
        return fetch(new URL('/index-go.html', request.url))
    }
}

export const config = { matcher: ['/'] }
