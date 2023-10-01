import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

function cn(...cns) {
  return cns.join(' ');
}

const Login = () => {
  return (
    <>
      <Navigation />
      <div
        className={cn(
          'max-w-7xl',
          'mx-auto',
          'justify-center',
          'items-center',
          'flex',
          'gap-x-44',
          'mt-10',
          'font-poppins',
          'mb-48',
          'lg:mb-28'
        )}
      >
        <div className="hidden lg:flex">
          <img src="/images/login-pic.jpg" alt="login" />
        </div>

        <div className="flex flex-col p-5 lg:p-0">
          <h1 className="text-3xl lg:w-4/5 mb-6 w-full">
            Belanja kebutuhan utama, menjadi lebih mudah
          </h1>
          <form className="">
            <div className="flex flex-col">
              <div className="w-full lg:w-3/5">
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-base text-gray-900 "
                  >
                    Email Address
                  </label>
                  <input
                    type="text"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    required
                  />
                </div>
              </div>
              <div className="w-full lg:w-3/5">
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
              <div className="flex flex-col gap-3 w-full lg:w-3/5">
                <button className="bg-green-500 text-white rounded-lg px-2 py-3 text-base">
                  Sign In to My Account
                </button>
                <button className="bg-gray-100 text-gray-400 rounded-lg px-2 py-3 text-base">
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Login;
