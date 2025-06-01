import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { MenuSection } from "@/components/partials/homepage/menu-section";
import { ProductList } from "@/components/ProductList";
import { shophost } from "@/lib/shophost.lib";

const ProductsPage = async () => {
  // Get locale from context
  const locale = "pl";

  // In a real app, you would fetch data from an API or database
  // This is just mock data for demonstration
  const productCategories = await shophost.productCategory.getProductCategories(
    {
      params: {
        organizationId: process.env.NEXT_PUBLIC_ORGANIZATION_ID!,
      },
      query: {
        limit: 100,
        locale,
        published: true,
      },
    }
  );

  const data = await shophost.product.getProducts({
    params: {
      organizationId: process.env.NEXT_PUBLIC_ORGANIZATION_ID!,
    },
    query: {
      page: 1,
      limit: 1000,
      search: "",
      locale,
    },
  });

  if (data.status !== 200) {
    throw new Error("Error occured");
  }

  if (productCategories.status !== 200) {
    throw new Error("Failed to fetch product categories");
  }

  console.log(data.body.list);

  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <section className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">Wszystkie produkty</h1>
          </section>

          <MenuSection
            productCategories={productCategories.body.list || []}
            products={data.body.list || []}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;
