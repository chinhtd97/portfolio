import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, languages } from "./i18n/settings";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/images") ||
    pathname.includes(".") // Bỏ qua file static
  ) {
    return NextResponse.next();
  }

  const pathnameIsMissingLocale = languages.every(
    (lang) => !pathname.startsWith(`/${lang}/`) && pathname !== `/${lang}`
  );

  if (pathnameIsMissingLocale) {
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}${pathname}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|images|.*\\..*).*)"],
};
