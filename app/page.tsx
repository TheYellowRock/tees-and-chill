import Create from 'components/banner/create';
import SaleBanner from 'components/banner/sale';
import { ThreeItemGrid } from 'components/grid/three-items';
import Footer from 'components/layout/footer';
import MenList from 'components/lists/men';
import WomenList from 'components/lists/women';
import { Suspense } from 'react';

export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    images: [
      {
        url: `/api/og?title=${encodeURIComponent(process.env.SITE_NAME || '')}`,
        width: 1200,
        height: 630
      }
    ],
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <ThreeItemGrid />
      <Suspense>
        <SaleBanner />
        <Suspense>
          {/* @ts-expect-error Server Component */}
          <WomenList />
          <Suspense>
            {/* @ts-expect-error Server Component */}
            <MenList />
            <Create />
            <Suspense>
              {/* @ts-expect-error Server Component */}
              <Footer />
            </Suspense>
          </Suspense>
        </Suspense>
      </Suspense>
    </>
  );
}
