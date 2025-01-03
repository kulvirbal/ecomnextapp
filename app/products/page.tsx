import ProductsContainer from "@/components/products/ProductsContainer";

const ProductsPage =  async ({searchParams}: {searchParams: Promise<{layout?:string, search?:string}>} ) => {
  const searchParameters = await searchParams;
  console.log(searchParameters);
  const layout = searchParameters.layout || 'grid';
  const search = searchParameters.search || '';

  return (
    <>
      <ProductsContainer layout={layout} search={search} />
    </>
  );
}

export default ProductsPage