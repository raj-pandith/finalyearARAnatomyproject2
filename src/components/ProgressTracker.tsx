import React from 'react';
import { Trophy, Target, BookOpen, TrendingUp, CheckCircle } from 'lucide-react';
import { AnatomySystem } from '../types/anatomy';

interface ProgressTrackerProps {
  studiedSystems: Set<string>;
  totalSystems: number;
  systems: AnatomySystem[];
}

export const ProgressTracker: React.FC<ProgressTrackerProps> = ({
  studiedSystems,
  totalSystems,
  systems
}) => {
  const progressPercentage = Math.round((studiedSystems.size / totalSystems) * 100);

  const categoryProgress = {
    systems: systems.filter(s => s.category === 'systems' && studiedSystems.has(s.id)).length,
    organs: systems.filter(s => s.category === 'organs' && studiedSystems.has(s.id)).length,
    tissues: systems.filter(s => s.category === 'tissues' && studiedSystems.has(s.id)).length
  };

  const difficultyProgress = {
    beginner: systems.filter(s => s.difficulty === 'beginner' && studiedSystems.has(s.id)).length,
    intermediate: systems.filter(s => s.difficulty === 'intermediate' && studiedSystems.has(s.id)).length,
    advanced: systems.filter(s => s.difficulty === 'advanced' && studiedSystems.has(s.id)).length
  };

  const achievements = [
    {
      title: 'First Steps',
      description: 'Study your first anatomy system',
      achieved: studiedSystems.size >= 1,
      icon: BookOpen,
      color: 'text-green-600'
    },
    {
      title: 'Explorer',
      description: 'Study 3 different systems',
      achieved: studiedSystems.size >= 3,
      icon: Target,
      color: 'text-blue-600'
    },
    {
      title: 'Anatomy Expert',
      description: 'Study 5 different systems',
      achieved: studiedSystems.size >= 5,
      icon: Trophy,
      color: 'text-yellow-600'
    },
    {
      title: 'Master Scholar',
      description: 'Study all available systems',
      achieved: studiedSystems.size === totalSystems,
      icon: TrendingUp,
      color: 'text-purple-600'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Learning Progress</h1>
        <p className="text-xl text-gray-600">Track your anatomy learning journey</p>
      </div>

      {/* Overall Progress */}
      <div className="bg-white rounded-3xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Overall Progress</h2>
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-600">Systems Studied</span>
          <span className="text-2xl font-bold text-blue-600">
            {studiedSystems.size}/{totalSystems}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
          <div
            className="bg-gradient-to-r from-blue-500 to-teal-500 h-4 rounded-full transition-all duration-500"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        <div className="text-center">
          <span className="text-3xl font-bold text-gray-900">{progressPercentage}%</span>
          <span className="text-gray-600 ml-2">Complete</span>
        </div>
      </div>

      {/* Category Breakdown */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">AR Human Anatomy</h3>
          <div className="text-3xl font-bold text-blue-600 mb-2">
            {categoryProgress.systems}
          </div>
          <p className="text-gray-600">Systems studied</p>
        </div>
        {/* <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Major Organs</h3>
          <div className="text-3xl font-bold text-teal-600 mb-2">
            {categoryProgress.organs}
          </div>
          <p className="text-gray-600">Organs studied</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Tissues</h3>
          <div className="text-3xl font-bold text-purple-600 mb-2">
            {categoryProgress.tissues}
          </div>
          <p className="text-gray-600">Tissues studied</p>
        </div> */}
      </div>

      {/* Difficulty Progress */}
      <div className="bg-white rounded-3xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Learning Difficulty</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600 mb-2">
              {difficultyProgress.beginner}
            </div>
            <p className="text-gray-600">Beginner Topics</p>
            <div className="w-full bg-green-100 rounded-full h-2 mt-2">
              <div
                className="bg-green-500 h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${(difficultyProgress.beginner / systems.filter(s => s.difficulty === 'beginner').length) * 100}%`
                }}
              />
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-600 mb-2">
              {difficultyProgress.intermediate}
            </div>
            <p className="text-gray-600">Intermediate Topics</p>
            <div className="w-full bg-yellow-100 rounded-full h-2 mt-2">
              <div
                className="bg-yellow-500 h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${(difficultyProgress.intermediate / systems.filter(s => s.difficulty === 'intermediate').length) * 100}%`
                }}
              />
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600 mb-2">
              {difficultyProgress.advanced}
            </div>
            <p className="text-gray-600">Advanced Topics</p>
            <div className="w-full bg-red-100 rounded-full h-2 mt-2">
              <div
                className="bg-red-500 h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${(difficultyProgress.advanced / systems.filter(s => s.difficulty === 'advanced').length) * 100}%`
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-white rounded-3xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Achievements</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl border-2 transition-all duration-200 ${achievement.achieved
                ? 'border-green-200 bg-green-50'
                : 'border-gray-200 bg-gray-50'
                }`}
            >
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-full ${achievement.achieved ? 'bg-green-100' : 'bg-gray-100'
                  }`}>
                  <achievement.icon className={`w-6 h-6 ${achievement.achieved ? achievement.color : 'text-gray-400'
                    }`} />
                </div>
                <div className="flex-1">
                  <h3 className={`font-bold mb-1 ${achievement.achieved ? 'text-gray-900' : 'text-gray-500'
                    }`}>
                    {achievement.title}
                  </h3>
                  <p className={`text-sm ${achievement.achieved ? 'text-gray-600' : 'text-gray-400'
                    }`}>
                    {achievement.description}
                  </p>
                </div>
                {achievement.achieved && (
                  <CheckCircle className="w-6 h-6 text-green-600" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};