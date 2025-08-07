import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="navbar-shadow bg-background/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary">
              FAKENIX
            </h1>
          </div>

          {/* Navigation Menu - Hidden on mobile */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#"
                className="text-foreground hover:text-primary transition-smooth font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-smooth font-medium"
              >
                Report Deepfake
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-smooth font-medium"
              >
                Track Reports
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-smooth font-medium"
              >
                Forum
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-smooth font-medium"
              >
                Roadmap
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-smooth font-medium"
              >
                About
              </a>
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-foreground hover:text-primary">
              Log in
            </Button>
            <Button className="button-shadow bg-primary hover:bg-primary-hover">
              Sign up
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;