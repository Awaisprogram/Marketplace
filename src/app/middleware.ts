import { NextResponse } from "next/server";
import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  // Optional: Define any Clerk-specific options here
});

export const config = {
  matcher: [
    // Match API and TRPC routes (always run middleware here)
    "/(api|trpc)(.*)",

    // Match all routes except static files, `_next`, and `/studio`
    "/((?!_next|/studio|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
  ],
};
