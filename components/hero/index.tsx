export default function Hero() {
  return (
    <div className="relative flex  overflow-hidden ">
      <img
        className="absolute inset-0 h-full w-full object-cover object-center"
        src="https://cdn.shopify.com/s/files/1/0730/4622/9321/files/Hero_fc471a56-2ce5-4baf-ac8b-a48a4a35bf0f.jpg?v=1688624508"
      />
      <div className="relative flex h-full w-full items-center p-10 lg:p-40 ">
        <div className="w-1/2"></div>
        <div className=" text-2xlxl w-1/2 justify-end font-bold lg:text-7xl lg:font-extrabold ">
          <div className="lg:p-2">Soft.</div>
          <div className="lg:p-2">Compfy.</div>
          <div className="lg:p-2">Trendy.</div>
          <div className="lg:p-2">&</div>
          <div className="lg:p-2">Customizable!</div>
          <button className=" mt-5 border border-gray-900 p-2 text-sm font-light uppercase text-gray-900 hover:bg-gray-900 hover:text-white lg:mt-10 lg:border-2 lg:p-5 lg:text-3xl">
            Discover The Collection
            <span aria-hidden="true"> &rarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export function HeroCustomTees() {
  return (
    <div className="relative flex  overflow-hidden ">
      <img
        className="absolute inset-0 h-full w-full object-cover object-center"
        src="https://cdn.shopify.com/s/files/1/0730/4622/9321/files/Hero1.jpg?v=1688624508"
      />
      <div className="relative flex h-full w-full items-center p-10 lg:p-40 ">
        <div className=" w-1/2  text-white  ">
          <div className="text-3xl font-bold lg:p-2 lg:text-7xl lg:font-extrabold">
            Custom <br /> T-shirts
          </div>
          <div className="mt-5 text-lg font-extralight lg:mt-10 lg:p-2 lg:text-5xl">
            Create branded T-shirts that feel good and look great – available in a range of designs,
            colors and styles.
          </div>
          <button className="mt-5 border border-white p-2 text-sm font-extralight uppercase text-white hover:bg-white hover:text-gray-900 lg:mt-10 lg:border-2 lg:p-5 lg:text-3xl">
            Create It
            <span aria-hidden="true"> &rarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export function HeroBusiness() {
  return (
    <div className="relative flex  overflow-hidden ">
      <img
        className="absolute inset-0 h-full w-full object-cover object-center"
        src="https://cdn.shopify.com/s/files/1/0730/4622/9321/files/Hero2.jpg?v=1688624509"
      />
      <div className="relative flex h-full w-full items-center p-10 lg:p-40 ">
        <div className="w-1/2"></div>
        <div className=" w-1/2  text-gray-900">
          <div className="text-3xl font-bold lg:p-2 lg:text-7xl lg:font-extrabold">
            Designing tees for your team just got easier.
          </div>
          <div className="mt-5 text-lg font-extralight lg:mt-10 lg:p-2 lg:text-5xl">
            Create a look for the entire team without the need to start your design from scratch.
            Easy, simple, fast.
          </div>
          <button className=" mt-5 border border-gray-900 p-2 text-sm font-extralight uppercase text-gray-900 hover:bg-gray-900 hover:text-white lg:mt-10 lg:border-2 lg:p-5 lg:text-3xl">
            Inquire Now
            <span aria-hidden="true"> &rarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
}
