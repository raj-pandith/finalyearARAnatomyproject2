import React from 'react';
import { Brain, BookOpen, BarChart3, Zap } from 'lucide-react';

interface HeaderProps {
  currentView: 'explore' | 'quiz' | 'progress';
  onViewChange: (view: 'explore' | 'quiz' | 'progress') => void;
  studiedCount: number;
  totalCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onViewChange,
  studiedCount,
  totalCount
}) => {
  const navItems = [
    { id: 'explore', label: 'Explore', icon: BookOpen },
    { id: 'quiz', label: 'Quiz', icon: Zap },
    { id: 'progress', label: 'Progress', icon: BarChart3 }
  ] as const;

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-xl">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">AR Anatomy Explorer</h1>
              <p className="text-sm text-gray-600">Interactive Human Anatomy</p>
            </div>
          </div>

          <nav className="flex items-center space-x-1">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => onViewChange(id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${currentView === id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
              >
                <Icon className="w-4 h-4" />
                <span className="font-medium">{label}</span>
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">
                {studiedCount}/{totalCount} Systems
              </p>
              <p className="text-xs text-gray-500">Studied</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">
                {Math.round((studiedCount / totalCount) * 100)}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};