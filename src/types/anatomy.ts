export interface AnatomySystem {
  id: string;
  name: string;
  threedmodel: string;
  description: string;
  imageUrl: string;
  category: 'systems' | 'organs' | 'tissues';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  keyPoints: string[];
  funFacts: string[];
  relatedSystems: string[];
  htmlnotesName: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  systemId: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}