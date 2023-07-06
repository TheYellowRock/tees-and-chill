'use client';

import { useState } from 'react';

import clsx from 'clsx';
import { GridTileImage } from 'components/grid/tile';
import ArrowLeftIcon from 'components/icons/arrow-left';

export function Gallery({
  title,
  amount,
  currencyCode,
  images
}: {
  title: string;
  amount: string;
  currencyCode: string;
  images: { src: string; altText: string }[];
}) {
  const [currentImage, setCurrentImage] = useState(0);

  function handleNavigate(direction: 'next' | 'previous') {
    if (direction === 'next') {
      setCurrentImage(currentImage + 1 < images.length ? currentImage + 1 : 0);
    } else {
      setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
    }
  }

  const buttonClassName =
    'px-9 cursor-pointer ease-in-and-out duration-200 border border-white shadow-xl transition-bg bg-gray-500 hover:bg-gray-700';

  return (
    <div className="h-full">
      <div className="relative h-full max-h-[600px] overflow-hidden">
        {images[currentImage] && (
          <GridTileImage
            src={images[currentImage]?.src as string}
            alt={images[currentImage]?.altText as string}
            width={600}
            height={600}
            isInteractive={false}
            priority={true}
            background="white"
          />
        )}

        {images.length > 1 ? (
          <div className="absolute bottom-10 flex h-12 w-full flex-row justify-between  text-white ">
            <button
              aria-label="Previous product image"
              className={clsx(buttonClassName)}
              onClick={() => handleNavigate('previous')}
            >
              <ArrowLeftIcon className="h-6" />
            </button>
            <button
              aria-label="Next product image"
              className={clsx(buttonClassName)}
              onClick={() => handleNavigate('next')}
            >
              <ArrowLeftIcon className="h-6 rotate-180" />
            </button>
          </div>
        ) : null}
      </div>

      {images.length > 1 ? (
        <div className="flex">
          {images.map((image, index) => {
            const isActive = index === currentImage;
            return (
              <button
                aria-label="Enlarge product image"
                key={image.src}
                className="w-1/4 overflow-hidden"
                onClick={() => setCurrentImage(index)}
              >
                <GridTileImage
                  alt={image?.altText}
                  src={image.src}
                  width={600}
                  height={600}
                  background="white"
                  active={isActive}
                />
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
