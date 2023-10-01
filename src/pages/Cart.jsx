import { useEffect } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Footer from '../components/Footer';
import NavigationAuth from '../components/NavigationAuth';

const products = [
  {
    id: 1,
    image: '/images/product1.jpg',
    name: 'Best Sofa',
    author: 'Justin Way',
    price: '$800,00',
    currency: 'USD',
  },
  {
    id: 2,
    image: '/images/product2.jpg',
    name: 'Sneaker 550',
    author: 'Bobby John',
    price: '$90,00',
    currency: 'USD',
  },
  {
    id: 3,
    image: '/images/product3.jpg',
    name: 'Stereo Headphone X',
    author: 'Jessica Alexander',
    price: '$120,00',
    currency: 'USD',
  },
];

const prices = [
  {
    id: 1,
    countryTax: 25.0,
    productInsurance: 40.0,
    ship: 15.0,
    total: 435.0,
  },
];

const Cart = () => {
  useEffect(() => {
    document.title = 'Store - Cart';
  }, []);

  return (
    <>
      <NavigationAuth />
      <BreadCrumb name="Cart" />

      <div className="max-w-7xl mx-auto mt-10 font-poppins mb-10 flex flex-col">
        <div className="border-b py-4">
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-900">
                <tr>
                  <th
                    scope="col-xl"
                    className="lg:px-0 px-6 py-3 text-base font-normal"
                  >
                    Product name
                  </th>
                  <th
                    scope="col"
                    className="lg:px-0 px-6 py-3 text-base font-normal"
                  >
                    Name & Seller
                  </th>
                  <th
                    scope="col"
                    className="lg:px-0 px-6 py-3 text-base font-normal"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="lg:pl-16 lg:px-0 px-6 py-3 text-base font-normal"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="bg-white">
                    <td className="lg:px-0 px-6 py-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="rounded-lg"
                        width={320}
                      />
                    </td>
                    <td className="lg:px-0 px-6 py-4 w-1/5">
                      <div className="">
                        <h1 className="text-lg text-black">{product.name}</h1>
                        <p className="text-sm text-gray-400">
                          by {product.author}
                        </p>
                      </div>
                    </td>
                    <td className="lg:px-0 px-6 py-4">
                      <div className="">
                        <h1 className="text-lg text-black">{product.price}</h1>
                        <p className="text-sm text-gray-400">
                          {product.currency}
                        </p>
                      </div>
                    </td>
                    <td className="lg:pl-16 lg:px-0 px-6 py-4">
                      <button className="px-5 py-3 bg-red-500 text-white text-base rounded-lg font-medium">
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex flex-col pt-4">
          <div className="mb-4 p-3 lg:p-0">
            <h2 className="font-bold text-base">Shipping Detail</h2>
          </div>

          <div className="w-full lg:max-w-6xl p-3 lg:p-0">
            <form className="">
              <div className="flex gap-4">
                <div className="w-6/12">
                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-base text-gray-900 "
                    >
                      Address 1
                    </label>
                    <input
                      type="text"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                      placeholder="Example Street No 33"
                      required
                    />
                  </div>
                </div>
                <div className="w-6/12">
                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-base text-gray-900 "
                    >
                      Address 2
                    </label>
                    <input
                      type="text"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                      placeholder="Example Street No 55"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-6/12">
                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-base text-gray-900 "
                    >
                      Province
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                      placeholder="Berlin"
                      required
                    />
                  </div>
                </div>
                <div className="w-6/12">
                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-base text-gray-900 "
                    >
                      City
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                      placeholder="Berlin"
                      required
                    />
                  </div>
                </div>
                <div className="w-6/12">
                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-base text-gray-900 "
                    >
                      Postal Code
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                      placeholder="11455"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-6/12">
                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-base text-gray-900 "
                    >
                      Country
                    </label>
                    <input
                      type="text"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                      placeholder="Germany"
                      required
                    />
                  </div>
                </div>
                <div className="w-6/12">
                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-base text-gray-900 "
                    >
                      Mobile
                    </label>
                    <input
                      type="number"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                      placeholder="0988 9877 889"
                      required
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="flex flex-col pt-4 ">
          <div className="mb-4 p-3 lg:p-0">
            <h2 className="font-bold text-base">Payment Informations</h2>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between w-full lg:max-w-6xl p-3 lg:p-0">
            {prices.map((price) => (
              <div
                key={price.id}
                className="flex justify-between lg:flex-row lg:gap-28 mb-6 lg:mb-0"
              >
                <div className="mb-5">
                  <p className="mb-2 text-lg">${price.countryTax}</p>
                  <p className="text-sm text-gray-400">Country Tax</p>
                </div>
                <div className="mb-5">
                  <p className="mb-2 text-lg">${price.productInsurance}</p>
                  <p className="text-sm text-gray-400">Product Insurance</p>
                </div>
                <div className="mb-5">
                  <p className="mb-2 text-lg">${price.ship}</p>
                  <p className="text-sm text-gray-400">Ship to Your Country</p>
                </div>
                <div className="mb-5">
                  <p className="mb-2 text-lg text-green-500">${price.total}</p>
                  <p className="text-sm text-gray-400">Total</p>
                </div>
              </div>
            ))}

            <button className="px-7 py-3 bg-green-600 text-white rounded-lg">
              Checkout Now
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Cart;
