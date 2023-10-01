import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const Register = () => {
  return (
    <>
      <Navigation />

      <div className="w-full lg:max-w-7xl lg:ml-[360px] mx-auto flex justify-center flex-col items-center font-poppins mt-10 mb-20">
        <h1 className="text-2xl lg:text-3xl lg:w-1/3 mb-8 w-full text-center lg:text-left">
          Memulai untuk jual beli dengan cara terbaru
        </h1>

        <form className="lg:w-1/4 lg:-ml-24">
          <div className="flex flex-col">
            <div className="w-full">
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block mb-2 text-base text-gray-900 "
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  required
                />
              </div>
            </div>
            <div className="w-full">
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-base text-gray-900 "
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  required
                />
              </div>
            </div>
            <div className="w-full">
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block mb-2 text-base text-gray-900 "
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  required
                />
              </div>
            </div>
            <div>
              <h2 className="text-base">Store</h2>
              <p className="text-base text-gray-400">
                Do you also want to open a shop?
              </p>
              <div className="flex gap-5 mb-3">
                <span className="flex gap-1">
                  <input type="radio" />
                  <label>Ya</label>
                </span>
                <span className="flex gap-1">
                  <input type="radio" />
                  <label>Not now</label>
                </span>
              </div>
            </div>
            <div className="w-full">
              <div className="mb-6">
                <label
                  htmlFor="storeName"
                  className="block mb-2 text-base text-gray-900 "
                >
                  Store Name
                </label>
                <input
                  type="text"
                  id="storeName"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  required
                />
              </div>
            </div>
            <div className="w-full">
              <div className="mb-6">
                <label
                  htmlFor="category"
                  className="block mb-2 text-base text-gray-900 "
                >
                  Category
                </label>
                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                  <option value="business">Business</option>
                  <option value="company">Company</option>
                  <option value="mitra">Mitra</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-3 w-full">
              <button className="bg-green-500 text-white rounded-lg px-2 py-3 text-base">
                Sign Up Now
              </button>
              <button className="bg-gray-100 text-gray-400 rounded-lg px-2 py-3 text-base">
                Back to Sign In
              </button>
            </div>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Register;
