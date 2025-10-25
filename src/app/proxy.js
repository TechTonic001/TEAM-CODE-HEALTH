import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
    const token = await getToken({ req: request });

    // Check if the path requires authentication
    const authPaths = [
        "/dashboard",
        "/profile",
        "/bookings",
        "/payments",
        "/settings",
        "/admin"
    ];

    const isAuthPath = authPaths.some(path =>
        request.nextUrl.pathname.startsWith(path)
    );

    // Redirect to signin if accessing auth required path without token
    if (isAuthPath && !token) {
        return NextResponse.redirect(new URL("/auth/signin", request.url));
    }

    // Continue with the request if authenticated or accessing public path
    return NextResponse.next();
}

// Configure paths that should trigger proxy middleware
export const config = {
    matcher: [
        "/dashboard/:path*",
        "/profile/:path*",
        "/bookings/:path*",
        "/payments/:path*",
        "/settings/:path*",
        "/admin/:path*"
    ]
};