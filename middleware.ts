import { authMiddleware } from "@clerk/nextjs";
import createMiddleware from "next-intl/middleware";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware

const intlMiddleware = createMiddleware({
  locales: ['en', 'zh'],
  defaultLocale: 'en'
});

export default authMiddleware({
  beforeAuth(request) {
    return intlMiddleware(request);
  },
  publicRoutes: ["/", "/zh", "/en", "/api/webhook", "/sign-up", "/sign-in"],
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
