export default function Topbar() {
  return (
      <nav className="inset-x-0 top-0 motion-preset-slide-down-lg">
        <div className="container px-4 md:px-6">
          <div className="flex h-20 items-center">
            <nav className="ml-auto flex items-center space-x-4">
              <a
                href="#"
                className="font-medium text-sm  transition-colors hover:text-gray-900 hover:border-gray-100 dark:hover:text-gray-50 dark:hover:border-gray-800"
              >
                Home
              </a>
              <a
                href="#"
                className="font-medium text-sm transition-colors hover:text-gray-900 hover:border-gray-100 dark:hover:text-gray-50 dark:hover:border-gray-800"
              >
                Features
              </a>
              <a
                href="#"
                className="font-medium text-sm transition-colors hover:text-gray-900 hover:border-gray-100 dark:hover:text-gray-50 dark:hover:border-gray-800"
              >
                Pricing
              </a>
              <a
                href="#"
                className="font-medium text-sm transition-colors hover:text-gray-900 hover:border-gray-100 dark:hover:text-gray-50 dark:hover:border-gray-800"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
        </nav>
      
  );
}

