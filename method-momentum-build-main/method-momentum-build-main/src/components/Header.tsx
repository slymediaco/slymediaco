import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToApply = () => {
    const applySection = document.getElementById('apply');
    if (applySection) {
      applySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/placeholder.svg" 
              alt="Momentum Method" 
              className="h-8 sm:h-10 w-auto object-contain"
            />
          </div>

          {/* Limited Spots */}
          <div className="hidden md:flex items-center gap-2 px-4 py-2 squircle bg-secondary/50 border border-primary/20">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Limited Spots Left</span>
          </div>

          {/* Apply Button */}
          <Button size="lg" onClick={scrollToApply} className="hidden sm:flex">
            Apply Now
          </Button>
          <Button size="sm" onClick={scrollToApply} className="sm:hidden">
            Apply
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
