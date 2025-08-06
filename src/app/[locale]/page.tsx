// src/app/[locale]/page.tsx
import { redirect } from "next/navigation";

export default async function Home({ params }: { params: { locale: string } }) {
  const lang = await params.locale;
  redirect(`/${lang}/about`);
}
