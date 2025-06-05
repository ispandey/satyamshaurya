
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { Button } from '@/components/ui/button';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-full transition-all duration-500 hover:scale-110 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-slate-700 dark:to-slate-600 hover:from-blue-200 hover:to-purple-200 dark:hover:from-slate-600 dark:hover:to-slate-500"
    >
      <Sun className={`h-5 w-5 rotate-0 scale-100 transition-all duration-500 ${theme === 'dark' ? 'rotate-90 scale-0' : ''} text-yellow-500`} />
      <Moon className={`absolute h-5 w-5 rotate-90 scale-0 transition-all duration-500 ${theme === 'dark' ? 'rotate-0 scale-100' : ''} text-blue-400`} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
