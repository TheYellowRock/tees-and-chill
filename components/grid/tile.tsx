import clsx from 'clsx';
import Image from 'next/image';

import Price from 'components/price';

export function GridTileImage({
  isInteractive = true,
  background,
  active,
  labels,
  ...props
}: {
  isInteractive?: boolean;
  background?: 'white' | 'pink' | 'purple' | 'black' | 'purple-dark' | 'blue' | 'cyan' | 'gray';
  active?: boolean;
  labels?: {
    title: string;
    amount: string;
    currencyCode: string;
    isSmall?: boolean;
  };
} & React.ComponentProps<typeof Image>) {
  return (
    <div
      className={clsx('relative flex h-full w-full items-center justify-center overflow-hidden', {
        'bg-white': background === 'white',
        'bg-[#ff0080]': background === 'pink',
        'bg-[#7928ca] ': background === 'purple',
        'bg-gray-900': background === 'black',
        'bg-violetDark ': background === 'purple-dark',
        'bg-blue-500 ': background === 'blue',
        'bg-cyan-500 ': background === 'cyan',
        'bg-gray-100 ': background === 'gray',

        relative: labels
      })}
    >
      {active !== undefined && active ? (
        <span className="absolute h-full w-full bg-white opacity-25"></span>
      ) : null}
      {props.src ? (
        <Image
          className={clsx('relative h-full w-full object-contain', {
            'transition duration-300 ease-in-out hover:scale-105': isInteractive
          })}
          {...props}
          alt={props.title || ''}
        />
      ) : null}
      {labels ? (
        labels.isSmall ? (
          <div className="absolute bottom-0 left-0 w-3/4 text-black">
            <h3
              data-testid="product-name"
              className={clsx(
                'inline bg-white box-decoration-clone px-2 py-2 text-sm font-semibold leading-loose shadow-[1.25rem_0_0] shadow-white sm:text-lg  md:text-xl lg:text-xl '
              )}
            >
              {labels.title}
            </h3>
            <Price
              className="lg:text-md w-fit bg-white px-2 py-1 text-xs font-semibold md:text-sm"
              amount={labels.amount}
              currencyCode={labels.currencyCode}
            />
          </div>
        ) : (
          <div className="absolute bottom-0 left-0 w-3/4 text-black">
            <h3
              data-testid="product-name"
              className={clsx(
                'inline bg-white box-decoration-clone py-3 pl-2 text-3xl font-semibold leading-loose shadow-[1.25rem_0_0] shadow-white md:pl-5 md:text-3xl lg:text-5xl '
              )}
            >
              {labels.title}
            </h3>
            <Price
              className="w-fit bg-white px-5 py-3 text-lg font-semibold md:text-lg lg:text-xl"
              amount={labels.amount}
              currencyCode={labels.currencyCode}
            />
          </div>
        )
      ) : null}
    </div>
  );
}
