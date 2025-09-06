import React, { useState } from 'react';
import { Header } from './components/Header';
import { AnatomyGrid } from './components/AnatomyGrid';
import { AnatomyDetail } from './components/AnatomyDetail';
import { SearchBar } from './components/SearchBar';
import { ProgressTracker } from './components/ProgressTracker';
import { QuizMode } from './components/QuizMode';
import { AnatomySystem } from './types/anatomy';
import { anatomySystems } from './data/anatomyData';

function App() {
  const [selectedSystem, setSelectedSystem] = useState<AnatomySystem | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentView, setCurrentView] = useState<'explore' | 'quiz' | 'progress'>('explore');
  const [studiedSystems, setStudiedSystems] = useState<Set<string>>(new Set());

  const filteredSystems = anatomySystems.filter(system =>
    system.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    system.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSystemSelect = (system: AnatomySystem) => {
    setSelectedSystem(system);
    setStudiedSystems(prev => new Set([...prev, system.id]));
  };

  const handleBackToGrid = () => {
    setSelectedSystem(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header
        currentView={currentView}
        onViewChange={setCurrentView}
        studiedCount={studiedSystems.size}
        totalCount={anatomySystems.length}
      />

      <main className="container mx-auto px-4 py-8">
        {currentView === 'explore' && (
          <>
            {!selectedSystem ? (
              <>
                <div className="mb-8">
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
                    Human Anatomy Explorer
                  </h1>
                  <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
                    Discover the fascinating world of human anatomy through <b> Interactive 3d model </b> learning
                  </p>
                </div>

                <SearchBar
                  searchQuery={searchQuery}
                  onSearchChange={setSearchQuery}
                />

                <AnatomyGrid
                  systems={filteredSystems}
                  onSystemSelect={handleSystemSelect}
                  studiedSystems={studiedSystems}
                />
              </>
            ) : (
              <AnatomyDetail
                system={selectedSystem}
                onBack={handleBackToGrid}
              />
            )}
          </>
        )}

        {currentView === 'quiz' && (
          <QuizMode
            systems={anatomySystems}
            studiedSystems={studiedSystems}
          />
        )}

        {currentView === 'progress' && (
          <ProgressTracker
            studiedSystems={studiedSystems}
            totalSystems={anatomySystems.length}
            systems={anatomySystems}
          />
        )}
      </main>
    </div>
  );
}

export default App;