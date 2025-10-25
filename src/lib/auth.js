import { cookies } from 'next/headers';

const BASE_URL = process.env.NEXTAUTH_URL || 'http://localhost:3000';

export async function getSessionServer() {
    const cookieList = cookies().getAll();
    const cookieHeader = cookieList.map(c => `${c.name}=${c.value}`).join('; ');

    const res = await fetch(`${BASE_URL}/api/auth/session`, {
        headers: { cookie: cookieHeader },
        cache: 'no-store',
    });

    if (!res.ok) return null;
    return res.json();
}

export async function getSessionFromRequest(request) {
    const cookieHeader = request.headers.get('cookie') || '';

    const res = await fetch(`${BASE_URL}/api/auth/session`, {
        headers: { cookie: cookieHeader },
        cache: 'no-store',
    });

    if (!res.ok) return null;
    return res.json();
}
