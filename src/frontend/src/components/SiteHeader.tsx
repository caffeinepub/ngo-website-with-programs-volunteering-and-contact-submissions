import { Link, useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function SiteHeader() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Programs', path: '/programs' },
    { label: 'Get Involved', path: '/get-involved' },
    { label: 'Donate', path: '/donate' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleNavClick = (path: string) => {
    setIsOpen(false);
    navigate({ to: path });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/assets/generated/samarpan-trust-logo-2025.dim_512x512.png"
            alt="Samarpan Trust Logo"
            className="h-10 w-10 object-contain"
          />
          <span className="text-xl font-bold tracking-tight text-foreground">
            Samarpan Trust
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Button
              key={link.path}
              variant="ghost"
              asChild
              className="text-sm font-medium"
            >
              <Link to={link.path}>{link.label}</Link>
            </Button>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px]">
            <nav className="flex flex-col gap-4 pt-8">
              {navLinks.map((link) => (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className="text-left text-lg font-medium text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
