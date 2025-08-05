// src/app/[locale]/page.tsx
import { redirect } from "next/navigation";

export default function Home({ params }: { params: { locale: string } }) {
  redirect(`/${params.locale}/about`);
}
