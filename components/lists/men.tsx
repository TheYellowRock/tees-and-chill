import Grid from 'components/grid';
import ProductGridItems from 'components/layout/product-grid-items';
import { getCollectionProducts } from 'lib/shopify';

export default async function MenList() {
  const products = await getCollectionProducts('hidden-top-pick-for-men');
  return (
    <div className="bg-white my-10">
      <div className="mx-auto max-w-2xl px-4 pt-10 sm:px-6 sm:py-14 lg:max-w-7xl lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Top Pick for men</h2>
          <a
            href="#"
            className="hidden text-lg font-medium text-gray-500 hover:text-gray-700 md:block"
          >
            Discover More
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
        <Grid className="grid-cols-2 lg:grid-cols-4">
          <ProductGridItems products={products} />
        </Grid>

        <div className="mt-8 text-sm md:hidden">
          <a href="#" className="font-medium text-gray-500 hover:text-gray-700">
            Discover More
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}
