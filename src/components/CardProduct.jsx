import { Link } from 'react-router-dom';

function cn(...cns) {
  return cns.join(' ');
}

const datas = [
  {
    id: 1,
    image: 'https://source.unsplash.com/640x480?watch',
    product: 'Apple Watch',
    price: '$300,00',
    alt: 'image1',
  },
  {
    id: 2,
    image: 'https://source.unsplash.com/640x480?sneaker',
    product: 'Air Sneaker',
    price: '$90,00',
    alt: 'image2',
  },
  {
    id: 3,
    image: 'https://source.unsplash.com/640x480?sofa',
    product: 'Modern Sofa',
    price: '$270,00',
    alt: 'image3',
  },
  {
    id: 4,
    image: 'https://source.unsplash.com/640x480?television',
    product: 'Television',
    price: '$120,00',
    alt: 'image4',
  },
  {
    id: 5,
    image: 'https://source.unsplash.com/640x480?book',
    product: 'Adult Book',
    price: '$10,00',
    alt: 'image5',
  },
  {
    id: 6,
    image: 'https://source.unsplash.com/640x480?jeans',
    product: 'Denim Jeans',
    price: '$20,00',
    alt: 'image6',
  },
  {
    id: 7,
    image: 'https://source.unsplash.com/640x480?jacket',
    product: 'Vest Jacket',
    price: '$35,00',
    alt: 'image7',
  },
  {
    id: 8,
    image: 'https://source.unsplash.com/640x480?guitar',
    product: 'Accoustic Guitar',
    price: '$150,00',
    alt: 'image8',
  },
];

export default function CardProduct() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col font-poppins mb-10">
      <div className="text-xl font-semibold mb-6 pl-4 lg:pl-0">
        <h1>New Products</h1>
      </div>

      <div className="flex flex-wrap -mx-2 p-4 lg:p-0">
        {datas.map((data) => (
          <div
            key={data.id}
            className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 px-2 mb-5 lg:mb-7"
          >
            <Link to="/detail">
              <div
                className={cn(
                  'overflow-hidden',
                  'rounded',
                  'group',
                  'relative',
                  'hover:transition-all',
                  'duration-500',
                  'mb-2'
                )}
              >
                <img
                  src={data.image}
                  alt={data.alt}
                  className={cn(
                    'cursor-pointer',
                    'group-hover:scale-125',
                    'transition-all',
                    'duration-500',
                    'w-full',
                    'h-48',
                    'md:h-[190px]',
                    'bg-cover',
                    'bg-center'
                  )}
                />
              </div>
              <div>
                <h3 className="text-lg">{data.product}</h3>
                <p className="text-red-500">{data.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
