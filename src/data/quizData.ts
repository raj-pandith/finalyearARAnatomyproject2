import { QuizQuestion } from '../types/anatomy';

export const quizQuestions: QuizQuestion[] = [
  // BEGINNER LEVEL QUESTIONS
  {
    id: 'skeletal-1',
    question: 'How many bones are in the adult human body?',
    options: ['186 bones', '206 bones', '226 bones', '246 bones'],
    correctAnswer: 1,
    explanation: 'The adult human body has 206 bones. Babies are born with about 270 bones, but many fuse together as they grow.',
    systemId: 'skeletal',
    difficulty: 'beginner'
  },
  {
    id: 'skeletal-2',
    question: 'What is the longest bone in the human body?',
    options: ['Tibia', 'Humerus', 'Femur', 'Radius'],
    correctAnswer: 2,
    explanation: 'The femur (thighbone) is the longest and strongest bone in the human body, extending from the hip to the knee.',
    systemId: 'skeletal',
    difficulty: 'beginner'
  },
  {
    id: 'respiratory-1',
    question: 'How many times does the average person breathe per day?',
    options: ['15,000 times', '20,000 times', '25,000 times', '30,000 times'],
    correctAnswer: 1,
    explanation: 'The average person breathes about 20,000 times per day, taking in oxygen and releasing carbon dioxide.',
    systemId: 'respiratory',
    difficulty: 'beginner'
  },
  {
    id: 'respiratory-2',
    question: 'What are the tiny air sacs in the lungs called?',
    options: ['Bronchi', 'Alveoli', 'Trachea', 'Pleura'],
    correctAnswer: 1,
    explanation: 'Alveoli are tiny air sacs where gas exchange occurs. There are about 300 million alveoli in healthy lungs.',
    systemId: 'respiratory',
    difficulty: 'beginner'
  },
  {
    id: 'heart-1',
    question: 'How many chambers does the human heart have?',
    options: ['2 chambers', '3 chambers', '4 chambers', '5 chambers'],
    correctAnswer: 2,
    explanation: 'The human heart has 4 chambers: left and right atria (upper chambers) and left and right ventricles (lower chambers).',
    systemId: 'heart',
    difficulty: 'beginner'
  },
  {
    id: 'digestive-1',
    question: 'Approximately how long is the small intestine?',
    options: ['10 feet', '15 feet', '20 feet', '25 feet'],
    correctAnswer: 2,
    explanation: 'The small intestine is about 20 feet long and is where most nutrient absorption occurs.',
    systemId: 'digestive',
    difficulty: 'beginner'
  },
  {
    id: 'muscular-1',
    question: 'What percentage of body weight do muscles make up?',
    options: ['30%', '40%', '50%', '60%'],
    correctAnswer: 1,
    explanation: 'Muscles make up about 40% of total body weight in healthy adults.',
    systemId: 'muscular',
    difficulty: 'beginner'
  },
  {
    id: 'circulatory-1',
    question: 'How much blood does the heart pump daily?',
    options: ['1,000 gallons', '2,000 gallons', '3,000 gallons', '4,000 gallons'],
    correctAnswer: 1,
    explanation: 'The heart pumps approximately 2,000 gallons of blood throughout the body every day.',
    systemId: 'circulatory',
    difficulty: 'beginner'
  },
  {
    id: 'brain-1',
    question: 'What percentage of the body\'s energy does the brain use?',
    options: ['10%', '15%', '20%', '25%'],
    correctAnswer: 2,
    explanation: 'Despite being only 2% of body weight, the brain uses about 20% of the body\'s total energy.',
    systemId: 'brain',
    difficulty: 'beginner'
  },
  {
    id: 'general-1',
    question: 'What is the smallest bone in the human body?',
    options: ['Stapes', 'Malleus', 'Incus', 'Hyoid'],
    correctAnswer: 0,
    explanation: 'The stapes, located in the middle ear, is the smallest bone in the human body, measuring only 2-3 millimeters.',
    systemId: 'skeletal',
    difficulty: 'beginner'
  },

  // INTERMEDIATE LEVEL QUESTIONS
  {
    id: 'nervous-1',
    question: 'How fast can nerve impulses travel?',
    options: ['120 mph', '180 mph', '220 mph', '268 mph'],
    correctAnswer: 3,
    explanation: 'Nerve impulses can travel up to 268 mph (120 meters per second) through myelinated nerve fibers.',
    systemId: 'nervous',
    difficulty: 'intermediate'
  },
  {
    id: 'circulatory-2',
    question: 'How long do red blood cells typically live?',
    options: ['90 days', '120 days', '150 days', '180 days'],
    correctAnswer: 1,
    explanation: 'Red blood cells have a lifespan of approximately 120 days before they are recycled by the spleen.',
    systemId: 'circulatory',
    difficulty: 'intermediate'
  },
  {
    id: 'muscular-2',
    question: 'What is the strongest muscle in the human body?',
    options: ['Quadriceps', 'Gluteus maximus', 'Masseter', 'Gastrocnemius'],
    correctAnswer: 2,
    explanation: 'The masseter (jaw muscle) is the strongest muscle based on its ability to exert force, capable of generating up to 200 pounds of pressure.',
    systemId: 'muscular',
    difficulty: 'intermediate'
  },
  {
    id: 'digestive-2',
    question: 'How strong is stomach acid compared to battery acid?',
    options: ['Half as strong', 'Equally strong', 'Twice as strong', 'Ten times stronger'],
    correctAnswer: 0,
    explanation: 'Stomach acid (pH 1.5-2) is about half as strong as battery acid, but strong enough to dissolve metal over time.',
    systemId: 'digestive',
    difficulty: 'intermediate'
  },
  {
    id: 'heart-2',
    question: 'Which chamber of the heart has the thickest muscular wall?',
    options: ['Right atrium', 'Left atrium', 'Right ventricle', 'Left ventricle'],
    correctAnswer: 3,
    explanation: 'The left ventricle has the thickest wall because it needs to pump blood to the entire body, requiring more force.',
    systemId: 'heart',
    difficulty: 'intermediate'
  },
  {
    id: 'respiratory-3',
    question: 'What is the total surface area of the lungs?',
    options: ['Size of a ping pong table', 'Size of a tennis court', 'Size of a basketball court', 'Size of a football field'],
    correctAnswer: 1,
    explanation: 'The total surface area of the lungs is approximately the size of a tennis court (about 70 square meters).',
    systemId: 'respiratory',
    difficulty: 'intermediate'
  },
  {
    id: 'skeletal-3',
    question: 'Where are blood cells primarily produced?',
    options: ['Liver', 'Spleen', 'Bone marrow', 'Lymph nodes'],
    correctAnswer: 2,
    explanation: 'Blood cells are primarily produced in the bone marrow through a process called hematopoiesis.',
    systemId: 'skeletal',
    difficulty: 'intermediate'
  },
  {
    id: 'brain-2',
    question: 'What percentage of the brain is water?',
    options: ['65%', '70%', '75%', '80%'],
    correctAnswer: 2,
    explanation: 'The brain is approximately 75% water, which is why proper hydration is crucial for brain function.',
    systemId: 'brain',
    difficulty: 'intermediate'
  },
  {
    id: 'circulatory-3',
    question: 'What is the resting heart rate range for healthy adults?',
    options: ['50-70 bpm', '60-100 bpm', '70-110 bpm', '80-120 bpm'],
    correctAnswer: 1,
    explanation: 'A normal resting heart rate for healthy adults ranges from 60 to 100 beats per minute.',
    systemId: 'circulatory',
    difficulty: 'intermediate'
  },
  {
    id: 'muscular-3',
    question: 'What type of muscle tissue is found in the heart?',
    options: ['Skeletal muscle', 'Smooth muscle', 'Cardiac muscle', 'Voluntary muscle'],
    correctAnswer: 2,
    explanation: 'Cardiac muscle is a specialized type of muscle tissue found only in the heart, combining features of both skeletal and smooth muscle.',
    systemId: 'muscular',
    difficulty: 'intermediate'
  },

  // ADVANCED LEVEL QUESTIONS
  {
    id: 'nervous-2',
    question: 'How many neurons are estimated to be in the human brain?',
    options: ['56 billion', '76 billion', '86 billion', '96 billion'],
    correctAnswer: 2,
    explanation: 'The human brain contains approximately 86 billion neurons, each forming thousands of connections with other neurons.',
    systemId: 'nervous',
    difficulty: 'advanced'
  },
  {
    id: 'brain-3',
    question: 'At what stage of pregnancy does the heart start beating?',
    options: ['2 weeks', '3 weeks', '4 weeks', '5 weeks'],
    correctAnswer: 1,
    explanation: 'The heart begins beating at approximately 3 weeks of pregnancy, even before many women know they are pregnant.',
    systemId: 'heart',
    difficulty: 'advanced'
  },
  {
    id: 'digestive-3',
    question: 'How long does it typically take for food to travel through the entire digestive system?',
    options: ['12-24 hours', '24-72 hours', '72-96 hours', '96-120 hours'],
    correctAnswer: 1,
    explanation: 'Food typically takes 24-72 hours to travel through the entire digestive system, from mouth to elimination.',
    systemId: 'digestive',
    difficulty: 'advanced'
  },
  {
    id: 'circulatory-4',
    question: 'What percentage of body weight does blood represent?',
    options: ['5%', '7%', '9%', '11%'],
    correctAnswer: 1,
    explanation: 'Blood makes up approximately 7% of total body weight, or about 5-6 liters in an average adult.',
    systemId: 'circulatory',
    difficulty: 'advanced'
  },
  {
    id: 'respiratory-4',
    question: 'How many alveoli are in healthy human lungs?',
    options: ['200 million', '300 million', '400 million', '500 million'],
    correctAnswer: 1,
    explanation: 'Healthy human lungs contain approximately 300 million alveoli, providing an enormous surface area for gas exchange.',
    systemId: 'respiratory',
    difficulty: 'advanced'
  },
  {
    id: 'skeletal-4',
    question: 'What mineral is primarily stored in bones?',
    options: ['Iron', 'Magnesium', 'Calcium', 'Potassium'],
    correctAnswer: 2,
    explanation: 'Bones primarily store calcium and phosphorus, serving as the body\'s mineral reservoir and maintaining blood calcium levels.',
    systemId: 'skeletal',
    difficulty: 'advanced'
  },
  {
    id: 'muscular-4',
    question: 'Which muscle is considered the hardest working in the body?',
    options: ['Diaphragm', 'Heart', 'Masseter', 'Quadriceps'],
    correctAnswer: 1,
    explanation: 'The heart is the hardest working muscle, beating approximately 100,000 times per day without rest.',
    systemId: 'heart',
    difficulty: 'advanced'
  },
  {
    id: 'brain-4',
    question: 'How much power does the brain generate?',
    options: ['10 watts', '20 watts', '30 watts', '40 watts'],
    correctAnswer: 1,
    explanation: 'The human brain generates about 20 watts of power, enough to power a dim light bulb.',
    systemId: 'brain',
    difficulty: 'advanced'
  },
  {
    id: 'nervous-3',
    question: 'Why doesn\'t the brain feel pain when touched directly?',
    options: ['It has thick protection', 'It has no pain receptors', 'It has natural anesthesia', 'It processes pain differently'],
    correctAnswer: 1,
    explanation: 'The brain has no pain receptors (nociceptors), which is why brain surgery can be performed on conscious patients.',
    systemId: 'brain',
    difficulty: 'advanced'
  },
  {
    id: 'circulatory-5',
    question: 'What is the difference between pulmonary and systemic circulation?',
    options: [
      'Pulmonary carries oxygen, systemic carries waste',
      'Pulmonary goes to lungs, systemic goes to body',
      'Pulmonary is faster, systemic is slower',
      'Pulmonary uses arteries, systemic uses veins'
    ],
    correctAnswer: 1,
    explanation: 'Pulmonary circulation carries blood between the heart and lungs, while systemic circulation carries blood between the heart and the rest of the body.',
    systemId: 'circulatory',
    difficulty: 'advanced'
  }
];