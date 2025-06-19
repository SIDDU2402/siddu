
import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { Switch } from '@/components/ui/switch';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

const ThemeToggle = ({ isDark, onToggle }: ThemeToggleProps) => {
  return (
    <div className="flex items-center space-x-3 bg-card/50 backdrop-blur-sm rounded-full px-4 py-2 border border-primary/20">
      <Sun 
        className={`w-4 h-4 transition-colors duration-300 ${
          !isDark ? 'text-yellow-500' : 'text-muted-foreground'
        }`} 
      />
      <Switch
        checked={isDark}
        onCheckedChange={onToggle}
        className="data-[state=checked]:bg-primary"
      />
      <Moon 
        className={`w-4 h-4 transition-colors duration-300 ${
          isDark ? 'text-blue-400' : 'text-muted-foreground'
        }`} 
      />
    </div>
  );
};

export default ThemeToggle;
