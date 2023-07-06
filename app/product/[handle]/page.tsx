import Price from 'components/price';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

import Grid from 'components/grid';
import Footer from 'components/layout/footer';
import ProductGridItems from 'components/layout/product-grid-items';
import { AddToCart } from 'components/product/add-to-cart';
import { Gallery } from 'components/product/gallery';
import { VariantSelector } from 'components/product/variant-selector';
import SizeGuideModal from 'components/size/size-modal';
import { HIDDEN_PRODUCT_TAG } from 'lib/constants';
import { getProduct, getProductRecommendations } from 'lib/shopify';
import { Image } from 'lib/shopify/types';

export const runtime = 'edge';

export async function generateMetadata({
  params
}: {
  params: { handle: string };
}): Promise<Metadata> {
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const { url, width, height, altText: alt } = product.featuredImage || {};
  const hide = !product.tags.includes(HIDDEN_PRODUCT_TAG);

  return {
    title: product.seo.title || product.title,
    description: product.seo.description || product.description,
    robots: {
      index: hide,
      follow: hide,
      googleBot: {
        index: hide,
        follow: hide
      }
    },
    openGraph: url
      ? {
          images: [
            {
              url,
              width,
              height,
              alt
            }
          ]
        }
      : null
  };
}

export default async function ProductPage({ params }: { params: { handle: string } }) {
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  return (
    <div>
      <div className="mx-auto max-w-7xl mt-20 lg:grid lg:grid-cols-6">
        <div className="lg:col-span-3">
          <Gallery
            title={product.title}
            amount={product.priceRange.maxVariantPrice.amount}
            currencyCode={product.priceRange.maxVariantPrice.currencyCode}
            images={product.images.map((image: Image) => ({
              src: image.url,
              altText: image.altText
            }))}
          />
        </div>

        <div className="px-28 lg:col-span-3">
          <div className="mb-4 text-5xl font-bold">{product.title}</div>

          <Price
            className="mb-4 text-xl font-medium"
            amount={product.priceRange.maxVariantPrice.amount}
            currencyCode={product.priceRange.minVariantPrice.currencyCode}
          />
          <div className="mb-4 text-base font-light">{product.description}</div>
          {/* @ts-expect-error Server Component */}
          <VariantSelector options={product.options} variants={product.variants} />

          <div className="w-full pt-12">
            <div className="mt-8">
              <SizeGuideModal />
            </div>

            <div className="mt-4">
              <AddToCart variants={product.variants} availableForSale={product.availableForSale} />
            </div>
          </div>
        </div>
      </div>
      <Suspense>
        {/* @ts-expect-error Server Component */}
        <RelatedProducts id={product.id} />
        <Suspense>
          <Footer />
        </Suspense>
      </Suspense>
    </div>
  );
}

async function RelatedProducts({ id }: { id: string }) {
  const relatedProducts = await getProductRecommendations(id);

  if (!relatedProducts.length) return null;

  return (
    <div className="mx-auto max-w-7xl  mt-20 px-4 py-8 border-t-2 border-gray-500">
      <div className="mb-4 text-3xl font-bold">Related Products</div>
      <Grid className="grid-cols-2 lg:grid-cols-5">
        <ProductGridItems products={relatedProducts} />
      </Grid>
    </div>
  );
}
