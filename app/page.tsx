import Categories from 'components/categories';
import Hero, { HeroBusiness, HeroCustomTees } from 'components/hero';
import Footer from 'components/layout/footer';
import MenList from 'components/lists/men';
import WomenList from 'components/lists/women';
import CustomTeesSection from 'components/section';
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
      <Hero />
      <Categories />

      <Suspense>
        {/* @ts-expect-error Server Component */}
        <WomenList />
        <Suspense>
          {/* @ts-expect-error Server Component */}
          <MenList />
          <HeroCustomTees />
          <CustomTeesSection />
          <HeroBusiness />
          <Suspense>
            <Footer />
          </Suspense>
        </Suspense>
      </Suspense>
    </>
  );
}
