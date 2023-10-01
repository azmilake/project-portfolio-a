import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import Navigation from '../components/NavigationAuth';
import { useEffect } from 'react';

function cn(...cns) {
  return cns.join(' ');
}

const products = [
  {
    id: 1,
    name: 'Comfort Sofa',
    author: 'Jessica Alexander',
    price: '$1,500,00',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

const customers = [
  {
    id: 1,
    photo: '/images/profile.jpg',
    name: 'Jessica Alexander',
    review:
      'I thought it was not good for living room. I really happy todecided buy this product last week now feels like homey',
  },
  {
    id: 2,
    photo: '/images/profile.jpg',
    name: 'Jessica Alexander',
    review:
      'When I saw at first, it was really awesome to have with. Just let me know if there is another upcoming product like this.',
  },
  {
    id: 3,
    photo: '/images/profile.jpg',
    name: 'Jessica Alexander',
    review:
      'Color is great with the minimalist concept. Even I thought it was made by Cactus industry. I do really satisfied with this.',
  },
];

const Detail = () => {
  useEffect(() => {
    document.title = 'Store - Detail Product';
  }, []);

  return (
    <div>
      <Navigation />
      <BreadCrumb name="Product Detail" />
      <Gallery />

      <div className="w-full lg:max-w-7xl mx-auto mt-5 font-poppins mb-20">
        <div className="flex justify-between items-center lg:w-3/4 w-full p-5 lg:p-0">
          {products.map((product) => (
            <div key={product.id} className="leading-normal">
              <h1 className="text-lg lg:text-2xl">{product.name}</h1>
              <p className="text-sm text-gray-500">By {product.author}</p>
              <p className="text-md lg:text-lg text-red-400 font-medium">
                {product.price}
              </p>
            </div>
          ))}

          <Link to="/cart">
            <button
              className={cn(
                'px-6',
                'py-2',
                'lg:px-16',
                'lg:py-3',
                'bg-green-600',
                'text-white',
                'rounded-md',
                'text-base',
                'font-medium'
              )}
            >
              Add To Cart
            </button>
          </Link>
        </div>

        {products.map((product) => (
          <p
            key={product.id}
            className="w-full lg:w-2/4 lg:text-lg text-gray-600 mt-3 p-5 lg:p-0"
          >
            {' '}
            {product.description}
          </p>
        ))}

        <div className="mt-5 flex flex-col p-5 lg:p-0 gap-y-4">
          <div>
            <h2>Customers Review ({customers.length})</h2>
          </div>

          {customers.map((customer) => (
            <div key={customer.id} className="flex gap-x-5 items-center mt-4">
              <img src={customer.photo} alt="customer" className="h-16 w-16" />
              <div className="flex flex-col">
                <p className="text-base font-medium mb-2">{customer.name}</p>
                <p className="lg:w-2/4 text-base text-gray-600">
                  {customer.review}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Detail;
