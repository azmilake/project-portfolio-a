import HeadphonesIcon from '@mui/icons-material/Headphones';
import ChairOutlinedIcon from '@mui/icons-material/ChairOutlined';
import CheckroomOutlinedIcon from '@mui/icons-material/CheckroomOutlined';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
import ChildFriendlyOutlinedIcon from '@mui/icons-material/ChildFriendlyOutlined';
import ColorLensIcon from '@mui/icons-material/ColorLens';

function cn(...cns) {
  return cns.join(' ');
}

const categories = [
  {
    id: 1,
    name: 'Gadget',
    icon: <HeadphonesIcon fontSize="large" />,
  },
  {
    id: 2,
    name: 'Furniture',
    icon: <ChairOutlinedIcon fontSize="large" />,
  },
  {
    id: 3,
    name: 'Fashion',
    icon: <CheckroomOutlinedIcon fontSize="large" />,
  },
  {
    id: 4,
    name: 'Tools',
    icon: <ConstructionOutlinedIcon fontSize="large" />,
  },
  {
    id: 5,
    name: 'Baby',
    icon: <ChildFriendlyOutlinedIcon fontSize="large" />,
  },
  {
    id: 6,
    name: 'Hobby',
    icon: <ColorLensIcon fontSize="large" />,
  },
];

export default function Card() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col mt-10 font-poppins mb-10">
      <div className="text-xl font-semibold mb-6 pl-2 lg:pl-0">
        <h1>Category Popular</h1>
      </div>

      <div className="flex flex-col gap-5 lg:flex-row">
        {categories.map((category) => (
          <div
            key={category.id}
            className={cn(
              'w-full',
              'lg:w-2/12',
              'px-4',
              'lg:px-0',
              'hover:cursor-pointer',
              'hover:scale-105',
              'ease-in-out',
              'duration-300'
            )}
          >
            <div
              className={cn(
                'w-full',
                'h-52',
                'bg-color1',
                'flex',
                'flex-col',
                'justify-center',
                'items-center',
                'rounded'
              )}
            >
              <span
                className={cn(
                  'rounded-full',
                  'bg-color2',
                  'h-24',
                  'w-24',
                  'text-black',
                  'flex',
                  'justify-center',
                  'items-center',
                  'mb-3',
                  'lg:mb-6',
                  'text-lg',
                  'font-semibold'
                )}
              >
                {category.icon}
              </span>
              <h3 className="text-xl text-center">{category.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
