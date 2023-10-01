import { useState } from 'react';

const imgs = [
  { id: 0, value: 'https://source.unsplash.com/640x480?nature' },
  { id: 1, value: 'https://source.unsplash.com/640x480?livingroom' },
  { id: 2, value: 'https://source.unsplash.com/640x480?sport' },
  { id: 3, value: 'https://source.unsplash.com/640x480?art' },
];

const Gallery = () => {
  const [wordData, setWordData] = useState(imgs[0]);
  const [val, setVal] = useState(0);

  const handleClick = (index) => {
    console.log(index);
    setVal(index);
    const wordSlider = imgs[index];
    setWordData(wordSlider);
  };

  return (
    <>
      <div className="w-full md:max-w-7xl md:mx-auto lg:flex gap-x-5 items-center mt-5">
        <div className="lg:w-3/4">
          <img
            src={wordData.value}
            loading="eager"
            alt="images1"
            className="rounded-2xl p-3 lg:p-0 w-full lg:h-[540px] object-cover"
          />
        </div>

        <div className="flex lg:flex-col gap-x-2 pl-3 lg:gap-x-0 p-3 lg:p-0 md:justify-center">
          {imgs.map((data, i) => (
            <div key={i} className="mb-3">
              <img
                className={`${
                  wordData.id == i ? 'clicked border-4 border-green-500/40' : ''
                } rounded-lg cursor-pointer`}
                src={data.value}
                onClick={() => handleClick(i)}
                height={90}
                width={160}
                loading="eager"
                alt="images"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
