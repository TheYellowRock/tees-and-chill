const categories = [
  {
    name: "Men's Collection",
    href: '#',
    imageSrc: 'https://cdn.shopify.com/s/files/1/0730/4622/9321/files/forMen.jpg?v=1688201528',
    imageAlt: 'Customizable Tees for Men',
    description:
      'Each season, we collaborate with world-class designers to create a collection inspired by the natural world.'
  },
  {
    name: "Women's Collection",
    href: '#',
    imageSrc: 'https://cdn.shopify.com/s/files/1/0730/4622/9321/files/forWomen.jpg?v=1688201528',
    imageAlt: 'Customizable Tees for Women',
    description:
      'Each season, we collaborate with world-class designers to create a collection inspired by the natural world.'
  },
  {
    name: "Kids' Collection",
    href: '#',
    imageSrc: 'https://cdn.shopify.com/s/files/1/0730/4622/9321/files/forKids.jpg?v=1688201528',
    imageAlt: 'Customizable Tees for Kids',
    description:
      'Each season, we collaborate with world-class designers to create a collection inspired by the natural world.'
  }
];

export default function Categories() {
  return (
    <div className=" bg-gray-100">
      <div className="mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="mt-10 text-5xl font-bold tracking-tight text-gray-900">
          Find a fit for everyone
        </h2>
        <p className="mt-4 text-base text-gray-500">
          Each season, we collaborate with world-class designers to create a collection inspired by
          the natural world.
        </p>

        <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
          {categories.map((category) => (
            <a key={category.name} href={category.href} className="group block">
              <div
                aria-hidden="true"
                className="aspect-h-2 aspect-w-3 overflow-hidden  lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75"
              >
                <img
                  src={category.imageSrc}
                  alt={category.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{category.name}</h3>
              <p className="mt-2 text-sm text-gray-500">{category.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
