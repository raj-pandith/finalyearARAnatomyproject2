import React from 'react';
import { AnatomyCard } from './AnatomyCard';
import { AnatomySystem } from '../types/anatomy';

interface AnatomyGridProps {
  systems: AnatomySystem[];
  onSystemSelect: (system: AnatomySystem) => void;
  studiedSystems: Set<string>;
}

export const AnatomyGrid: React.FC<AnatomyGridProps> = ({
  systems,
  onSystemSelect,
  studiedSystems
}) => {
  const categories = {
    systems: systems.filter(s => s.category === 'systems'),
    organs: systems.filter(s => s.category === 'organs'),
    tissues: systems.filter(s => s.category === 'tissues')
  };

  const renderCategory = (title: string, items: AnatomySystem[]) => {
    if (items.length === 0) return null;

    return (
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          {title}
          <span className="ml-3 text-sm font-normal text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
            {items.length} items
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map(system => (
            <AnatomyCard
              key={system.id}
              system={system}
              onClick={() => onSystemSelect(system)}
              isStudied={studiedSystems.has(system.id)}
            />
          ))}
        </div>
      </section>
    );
  };

  return (
    <div className="space-y-8">
      {renderCategory('Body Systems', categories.systems)}
      {renderCategory('Major Organs', categories.organs)}
      {renderCategory('Tissues', categories.tissues)}
    </div>
  );
};