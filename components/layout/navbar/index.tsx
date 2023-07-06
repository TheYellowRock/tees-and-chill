import Cart from 'components/cart';
import CartIcon from 'components/icons/cart';
import { Suspense } from 'react';
import { MainNavigation, MobileNavigation } from './navbar';

export default function Navbar() {
  return (
    <div className="bg-white">
      <MobileNavigation />
      <header className="relative bg-white">
        <p className="flex h-16 items-center justify-center bg-gray-900 px-4 text-lg font-light text-white sm:px-6 lg:px-8">
          Get free delivery on orders over $100
        </p>

        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-28 items-center">
              <div className="flex w-1/3">
                <MainNavigation />
              </div>

              {/* Logo */}
              <div className="my-4 flex w-1/3 justify-center text-3xl lg:text-5xl font-extrabold">
                <a href="/">Tees&Chill</a>
              </div>

              <div className="ml-auto flex w-1/3 items-center justify-end">
                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Suspense fallback={<CartIcon className="h-6" />}>
                    {/* @ts-expect-error Server Component */}
                    <Cart />
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
