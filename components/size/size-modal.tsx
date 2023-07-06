'use client';
import { Dialog, RadioGroup, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

const abdoSizesVariants = [
  {
    name: 'Slim',
    womanMetric: 'X cm - Y cm',
    womanImperial: 'X in - Y in',
    menMetric: 'X cm - Y cm',
    menImperial: 'X in - Y in',
    inStock: true
  },
  {
    name: 'Normal',
    womanMetric: 'X cm - Y cm',
    womanImperial: 'X in - Y in',
    menMetric: 'X cm - Y cm',
    menImperial: 'X in - Y in',
    inStock: true
  },
  {
    name: 'Chubby',
    womanMetric: 'X cm - Y cm',
    womanImperial: 'X in - Y in',
    menMetric: 'X cm - Y cm',
    menImperial: 'X in - Y in',
    inStock: true
  },
  {
    name: 'Overweight',
    womanMetric: 'X cm - Y cm',
    womanImperial: 'X in - Y in',
    menMetric: 'X cm - Y cm',
    menImperial: 'X in - Y in',
    inStock: true
  }
];

const shoulderSizesVariants = [
  {
    name: 'Narrow',
    womanMetric: 'X cm - Y cm',
    womanImperial: 'X in - Y in',
    menMetric: 'X cm - Y cm',
    menImperial: 'X in - Y in',
    inStock: true
  },
  {
    name: 'Normal',
    womanMetric: 'X cm - Y cm',
    womanImperial: 'X in - Y in',
    menMetric: 'X cm - Y cm',
    menImperial: 'X in - Y in',
    inStock: true
  },
  {
    name: 'Wide',
    womanMetric: 'X cm - Y cm',
    womanImperial: 'X in - Y in',
    menMetric: 'X cm - Y cm',
    menImperial: 'X in - Y in',
    inStock: true
  }
];
const fitVariants = [
  { name: 'Slim', inStock: true },
  { name: 'Regular', inStock: true },
  { name: 'Relaxed', inStock: true },
  { name: 'Oversized', inStock: true }
];
const measurments = [
  { id: 1, name: 'cm / kg' },
  { id: 2, name: 'in / lbs' }
];

export default function SizeGuideModal() {
  const [open, setOpen] = useState(false);
  const [slide, setSlide] = useState(<></>);

  const [fit, setFit] = useState(fitVariants[2]);
  const [shoulderSize, setShoulderSize] = useState(shoulderSizesVariants[1]);
  const [abdoSize, setAbdoSize] = useState(abdoSizesVariants[1]);
  const [selected, setSelected] = useState(measurments[1]);

  const fourthSlideHandler = () => {
    setOpen(false);
    setSlide(FirstSlide);
  };

  function FinalSlide() {
    return (
      <div className="m-5">
        <div className="grid-col-1 lg:grid-col-2 lg:flex  w-full">
          <div className="w-full overflow-hidden p-5 lg:w-1/2">
            <img
              className="object-fit"
              src="https://cdn.shopify.com/s/files/1/0730/4622/9321/files/model-image--i_H_A22.png?v=1688363836"
            />
          </div>
          <div className="w-full p-8 lg:p-16 lg:w-1/2">
            <div className="my-4 lg:my-8 text-3xl font-medium">Our size Recommenation for you is</div>
            <div className="my-4 lg:my-8 text-5xl font-extrabold">XL</div>
          </div>
        </div>
        <div className="mt-5 sm:mt-6">
          <button
            type="button"
            className="inline-flex w-1/4  items-center justify-center bg-black p-4 text-sm uppercase tracking-wide text-white opacity-90 hover:opacity-100"
            onClick={fourthSlideHandler}
          >
            close
          </button>
        </div>
      </div>
    );
  }

  function FourthSlide() {
    return (
      <div className="m-5">
        <p className="py-5 text-lg font-light text-black">
          Please select your abdominals circomference{' '}
        </p>
        <div className="grid-col-1 lg:grid-col-2 lg:flex  w-full">
          <div className="w-full overflow-hidden p-5 lg:w-1/2">
            <img
              className="object-fit"
              src="https://cdn.shopify.com/s/files/1/0730/4622/9321/files/78325927.jpg?v=1688671021"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <RadioGroup value={abdoSize} onChange={setAbdoSize} className="my-8">
              <div className="mx-auto grid max-w-3xl grid-cols-1 gap-3">
                {abdoSizesVariants.map((size) => (
                  <RadioGroup.Option
                    key={size.name}
                    value={size}
                    className={({ active }) =>
                      classNames(
                        active ? 'ring-2 ring-gray-600' : 'border-gray-300',
                        'flex-inline  cursor-pointer  items-center border bg-white px-6 py-2   shadow-sm hover:bg-gray-100 sm:flex sm:justify-between'
                      )
                    }
                  >
                    {({ active, checked }) => (
                      <>
                        <span className="mx-auto flex w-full items-center justify-center">
                          <span className="flex flex-col text-sm">
                            <RadioGroup.Label
                              className="flex w-full justify-center py-2 text-center font-bold uppercase"
                              as="span"
                            >
                              <div>{size.name}</div>
                            </RadioGroup.Label>
                            <RadioGroup.Description
                              as="span"
                              className="mx-auto mt-2 flex w-full text-sm sm:ml-4 sm:mt-0 sm:flex-col sm:text-center"
                            >
                              <div className="grid grid-cols-2 gap-16">
                                <div className="flex flex-col">
                                  <span className="p-1 font-bold text-gray-900">Women</span>
                                  <span className="font-medium text-gray-900">
                                    {size.womanMetric}
                                  </span>
                                  <span className="font-medium text-gray-900">
                                    {size.womanImperial}
                                  </span>
                                </div>
                                <div className="flex flex-col">
                                  <span className="p-1 font-bold text-gray-900">Men</span>
                                  <span className="font-medium text-gray-900">
                                    {size.menMetric}
                                  </span>
                                  <span className="font-medium text-gray-900">
                                    {size.menImperial}
                                  </span>
                                </div>
                              </div>
                            </RadioGroup.Description>
                          </span>
                        </span>
                        <span
                          className={classNames(
                            active ? 'border' : 'border-2',
                            checked ? 'border-indigo-600' : 'border-transparent',
                            'pointer-events-none absolute -inset-px rounded-lg'
                          )}
                          aria-hidden="true"
                        />
                      </>
                    )}
                  </RadioGroup.Option>
                ))}
              </div>
            </RadioGroup>
          </div>
        </div>

        <div className="mt-5 sm:mt-6">
          <button
            type="button"
            className="inline-flex w-1/4  items-center justify-center bg-black p-4 text-sm uppercase tracking-wide text-white opacity-90 hover:opacity-100"
            onClick={() => setSlide(FinalSlide)}
          >
            Next
          </button>
        </div>
      </div>
    );
  }

  function ThirdSlide() {
    return (
      <div className="m-5">
        <p className="py-5 text-lg font-light text-black">
          Please select your shoulders estimated size{' '}
        </p>
        <div className="grid-col-1 lg:grid-col-2 lg:flex  w-full">
          <div className="w-full overflow-hidden p-5 lg:w-1/2">
            <img
              className="object-fit"
              src="https://cdn.shopify.com/s/files/1/0730/4622/9321/files/main-qimg-df984decf94b4e4b9024dd88c37ffcde-lq.jpg?v=1688670989"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <RadioGroup value={shoulderSize} onChange={setShoulderSize} className="my-8">
              <div className="mx-auto grid max-w-3xl grid-cols-1 gap-3">
                {shoulderSizesVariants.map((size) => (
                  <RadioGroup.Option
                    key={size.name}
                    value={size}
                    className={({ active }) =>
                      classNames(
                        active ? 'ring-2 ring-gray-600' : 'border-gray-300',
                        'flex-inline  cursor-pointer  items-center border bg-white px-6 py-2   shadow-sm hover:bg-gray-100 sm:flex sm:justify-between'
                      )
                    }
                  >
                    {({ active, checked }) => (
                      <>
                        <span className="mx-auto flex w-full items-center justify-center">
                          <span className="flex flex-col text-sm">
                            <RadioGroup.Label
                              className="flex w-full justify-center py-2 text-center font-bold uppercase"
                              as="span"
                            >
                              <div>{size.name}</div>
                            </RadioGroup.Label>
                            <RadioGroup.Description
                              as="span"
                              className="mx-auto mt-2 flex w-full text-sm sm:ml-4 sm:mt-0 sm:flex-col sm:text-center"
                            >
                              <div className="grid grid-cols-2 gap-16">
                                <div className="flex flex-col">
                                  <span className="p-1 font-bold text-gray-900">Women</span>
                                  <span className="font-medium text-gray-900">
                                    {size.womanMetric}
                                  </span>
                                  <span className="font-medium text-gray-900">
                                    {size.womanImperial}
                                  </span>
                                </div>
                                <div className="flex flex-col">
                                  <span className="p-1 font-bold text-gray-900">Men</span>
                                  <span className="font-medium text-gray-900">
                                    {size.menMetric}
                                  </span>
                                  <span className="font-medium text-gray-900">
                                    {size.menImperial}
                                  </span>
                                </div>
                              </div>
                            </RadioGroup.Description>
                          </span>
                        </span>
                        <span
                          className={classNames(
                            active ? 'border' : 'border-2',
                            checked ? 'border-indigo-600' : 'border-transparent',
                            'pointer-events-none absolute -inset-px rounded-lg'
                          )}
                          aria-hidden="true"
                        />
                      </>
                    )}
                  </RadioGroup.Option>
                ))}
              </div>
            </RadioGroup>
          </div>
        </div>

        <div className="mt-5 sm:mt-6">
          <button
            type="button"
            className="inline-flex w-1/4  items-center justify-center bg-black p-4 text-sm uppercase tracking-wide text-white opacity-90 hover:opacity-100"
            onClick={() => setSlide(FourthSlide)}
          >
            Next
          </button>
        </div>
      </div>
    );
  }

  function SecondSlide() {
    return (
      <div className="m-5">
        <p className="py-5 text-lg font-light text-black">Please select your prefered fit</p>
        <div className=" grid-col-1 lg:grid-col-2 lg:flex  w-full">
          <div className="w-full overflow-hidden p-5 lg:w-1/2">
            <img
              className="object-fit"
              src="https://cdn.shopify.com/s/files/1/0730/4622/9321/files/model-image--i_H_A22.png?v=1688363836"
            />
          </div>
          <div className="w-full p-8 lg:p-16 lg:w-1/2">
            <RadioGroup value={fit} onChange={setFit} className="my-8">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-6 ">
                {fitVariants.map((option) => (
                  <RadioGroup.Option
                    key={option.name}
                    value={option}
                    className={({ active }) =>
                      classNames(
                        active ? 'ring-2 ring-gray-600' : 'border-gray-300',
                        'flex-inline  cursor-pointer  items-center border bg-white px-6 py-2   shadow-sm hover:bg-gray-100 sm:flex sm:justify-between'
                      )
                    }
                  >
                    {({ active, checked }) => (
                      <RadioGroup.Label
                        className="flex w-full justify-center text-center font-bold uppercase"
                        as="span"
                      >
                        <div>{option.name}</div>
                      </RadioGroup.Label>
                    )}
                  </RadioGroup.Option>
                ))}
              </div>
            </RadioGroup>
          </div>
        </div>
        <div className="mt-5 sm:mt-6">
          <button
            type="button"
            className="inline-flex w-1/4  items-center justify-center bg-black p-4 text-sm uppercase tracking-wide text-white opacity-90 hover:opacity-100"
            onClick={() => setSlide(ThirdSlide)}
          >
            Next
          </button>
        </div>
      </div>
    );
  }

  function FirstSlide() {
    return (
      <div className="m-5">
        <p className="py-5 text-lg font-light text-black">Please define your Hight and Weight </p>
        <div className="grid-col-1 lg:grid-col-2 lg:flex  w-full">
          <div className="w-full overflow-hidden p-5 lg:w-1/2">
            <img
              className="object-fit w-full"
              src="https://cdn.shopify.com/s/files/1/0730/4622/9321/files/total_guitar--id_1ab31bf1-6122-47a4-94f8-6a5c4e601597.jpg?v=1688276019"
            />
          </div>
          <div className="w-full p-8 lg:p-16 lg:w-1/2">
            <div className="flex flex-col">
              <div className=" w-full p-5">
                <label
                  htmlFor="height"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Height
                </label>
                <div className="mt-2 flex justify-center ">
                  <input
                    type="text"
                    name="height"
                    id="height"
                    defaultValue="172"
                    className="block w-full lg:max-w-sm  border-0 py-1.5 text-center text-gray-900 shadow-sm ring-1 ring-gray-700 placeholder:text-center placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm sm:leading-6"
                    placeholder="172"
                  />
                </div>
              </div>
              <div className="p-5">
                <label
                  htmlFor="Weight"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Weight
                </label>
                <div className="mt-2  flex justify-center">
                  <input
                    type="text"
                    name="weight"
                    id="weight"
                    defaultValue="73"
                    className="block w-full lg:max-w-sm border-0 py-1.5 text-center text-gray-900 shadow-sm ring-1 ring-gray-700 placeholder:text-center placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm sm:leading-6"
                    placeholder="73"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 sm:mt-6">
          <button
            type="button"
            className="inline-flex w-1/4 items-center justify-center bg-black p-4 text-sm uppercase tracking-wide text-white opacity-90 hover:opacity-100"
            onClick={() => setSlide(SecondSlide)}
          >
            Next
          </button>
        </div>
      </div>
    );
  }

  useEffect(() => setSlide(FirstSlide), []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex w-full items-center justify-center border border-black p-4 text-sm uppercase tracking-wide text-black opacity-90 hover:border-2 hover:font-bold"
      >
        Size Guide
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6 lg:max-w-5xl">
                  <div>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title
                        as="h3"
                        className="border-b-2 border-gray-900 py-5 text-3xl font-bold text-gray-900"
                      >
                        Size Guide
                      </Dialog.Title>
                      <div>{slide}</div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
