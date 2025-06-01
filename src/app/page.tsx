import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <section className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Our Shop</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the latest products with amazing quality and affordable
              prices.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
