import React from 'react';
import { Search, Filter } from 'lucide-react';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  onSearchChange
}) => {
  return (
    <div className="mb-8">
      <div className="max-w-2xl mx-auto">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search anatomy systems, organs, or functions..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-12 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-lg placeholder-gray-500 bg-white/80 backdrop-blur-sm"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <Filter className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};