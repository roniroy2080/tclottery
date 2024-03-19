const Navbar = () => {
  return (
    <nav style={{backgroundColor: 'black'}} className="border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://ossimg.9987cw.cc/TC/other/h5setting_20231215032755xgv9.png"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="text-white self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            TC LOTTERY
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
