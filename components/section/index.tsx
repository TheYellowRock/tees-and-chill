import { CheckIcon } from '@heroicons/react/20/solid';

const features = [
  {
    name: 'Select your style',
    description:
      ' If you’re looking for a promotional giveaway, our printed T-shirts work best. If you want to create a consistent look for your team members, our embroidered or 100% cotton T-shirts are ideal.'
  },
  {
    name: 'Choose your sleeve length',
    description:
      'We have short sleeve and long sleeve options, so you can pick the one that best fits your needs and the season.'
  },
  {
    name: 'Add your T-shirt design',
    description:
      ' Once you’ve selected your favorite tee and the quantity you need to order, create your own T-shirt by choosing a design from our gallery (with many industries and styles to choose from) or upload your own artwork or logo.'
  },
  {
    name: 'Preview and share your design',
    description:
      'Once you’ve added your final touches to your personalized T-shirts, you can preview and even save your design to share it with your colleagues or friends before you complete your purchase.'
  }
];

export default function CustomTeesSection() {
  return (
    <div className=" bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <h2 className="text-base font-semibold leading-7 text-gray-600">Everything you need</h2>
            <p className="mt-2 text-5xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              T-shirt printing made easy.
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600">
              We offer cotton, blend and polyester options. Our soft-touch tees are made of 100%
              ringspun cotton, which is more breathable and feels softer. We also have T-shirts made
              from performance fabric, which is moisture-wicking for maximum comfort.
            </p>
          </div>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  <CheckIcon
                    className="absolute left-0 top-1 h-5 w-5 text-indigo-500"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-2">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
