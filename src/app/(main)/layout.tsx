import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WebSiteSchema } from "@/components/seo/JsonLd";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <WebSiteSchema />
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
}
