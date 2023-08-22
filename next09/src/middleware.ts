import { NextResponse } from "next/server";

const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? ["https://www.yoursite.com", "https://yoursite.com"]
    : ["http://localhost:3000"];

export function middleware(request: Request) {
  console.log("middleware");
  console.log("in middleware, request.method: ", request.method);
  console.log("in middleware, request.url: ", request.url);
  const origin = request.headers.get("origin");
  console.log("in middleware, origin: ", origin);

  if (origin && !allowedOrigins.includes(origin)) {
    return new NextResponse(null, {
      status: 400,
      statusText: "Bad Request",
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*",
};
