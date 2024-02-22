const Navbar: React.FC = () => {
  return (
    <nav
      id="header"
      className="w-full h-20 py-2 bg-blue-500 shadow-lg border-b border-blue-300"
    >
      <div className="w-full flex items-center justify-between mt-0 px-6 py-2">
        <div className="w-full">
          <nav>
            <div className="items-center justify-between text-base text-white">
              <a
                className="inline-block no-underline hover:text-gray-200 font-medium text-lg py-2 px-4"
                href="/"
              >
                Zoo Animal Catalog
              </a>
            </div>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
