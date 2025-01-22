import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

type PublicMetadata = {
  role?: string; // Define the role type here
};

const isAdminRoute = createRouteMatcher(["/admin(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  const sessionClaims = (await auth()).sessionClaims;

  const publicMetadata = sessionClaims?.publicMetadata as PublicMetadata;

  if (isAdminRoute(req) && publicMetadata?.role !== "admin") {
    const url = new URL("/", req.url);
    return NextResponse.redirect(url);
  }
});

export const config = {
  matcher: ["/((?!_next|[^?]*\\.(?:html?|css|js|png|jpg|webp|svg)).*)"],
};
