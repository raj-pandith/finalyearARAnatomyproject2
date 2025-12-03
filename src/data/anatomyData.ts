import { AnatomySystem } from '../types/anatomy';

export const anatomySystems: AnatomySystem[] = [
  {
    id: 'skeletal',
    name: 'Skeletal System',
    threedmodel: 'https://mywebar.com/p/Project_0_6qjyeysu5d',
    description: 'The framework of bones that supports and protects the body',
    imageUrl: 'https://1.bp.blogspot.com/-ZJH1Wb4cejA/X_UBJs1cbYI/AAAAAAAAKd0/KPibosJhi2U3MqDfBIsOb8aw8npZx1PQACLcBGAsYHQ/s2048/skeleton.jpg',
    category: 'systems',
    difficulty: 'beginner',
    keyPoints: [
      '206 bones in the adult human body',
      'Provides structural support and protection',
      'Produces blood cells in bone marrow',
      'Stores minerals like calcium and phosphorus'
    ],
    funFacts: [
      'The femur is the longest bone in the human body',
      'Bones are actually living tissue that constantly regenerates',
      'The smallest bone is the stapes in the ear'
    ],
    relatedSystems: ['muscular', 'circulatory'],
    htmlnotesName: "Ar_skeleton.html"
  },
  {
    id: 'Kidney',
    name: 'Kidney',
    threedmodel: 'https://mywebar.com/p/Project_0_r16wi1kd2y',
    description: 'The network of muscles that enables movement and maintains posture',
    imageUrl: 'https://tse1.mm.bing.net/th/id/OIP.q0kqJWWE9-I0OoL-xOdR2wAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    category: 'systems',
    difficulty: 'intermediate',
    keyPoints: [
      'Over 600 muscles in the human body',
      'Three types: skeletal, cardiac, and smooth muscle',
      'Works with the skeletal system for movement',
      'Generates heat to maintain body temperature'
    ],
    funFacts: [
      'The strongest muscle is the masseter (jaw muscle)',
      'Muscles make up about 40% of body weight',
      'The heart is the hardest working muscle'
    ],
    relatedSystems: ['skeletal', 'nervous'],
    htmlnotesName: "Ar_kidney.html"
  },
  {
    id: 'Heart',
    name: 'Heart',
    threedmodel: 'https://mywebar.com/p/Project_2_ddtqyvws24',
    description: 'The heart, blood vessels, and blood that transport nutrients throughout the body',
    imageUrl: 'https://p.turbosquid.com/ts-thumb/z2/IaTtq6/Cr7U0Y7M/sig0000/jpg/1562528759/600x600/fit_q87/08e1b218672ba8c67c9b219f1919dfa80faa5f6b/sig0000.jpg',
    category: 'systems',
    difficulty: 'intermediate',
    keyPoints: [
      'Heart pumps about 2,000 gallons of blood daily',
      'Blood carries oxygen, nutrients, and waste products',
      'Two main circuits: pulmonary and systemic',
      'Blood vessels include arteries, veins, and capillaries'
    ],
    funFacts: [
      'The heart beats about 100,000 times per day',
      'Blood makes up about 7% of body weight',
      'Red blood cells live for about 120 days'
    ],
    relatedSystems: ['respiratory', 'lymphatic'],
    htmlnotesName: "Ar_Heart.html"
  },
  {
    id: 'Brain',
    name: 'Brain',
    threedmodel: 'https://mywebar.com/p/Project_0_8r3xbbthb6',
    description: 'The brain, spinal cord, and nerves that control body functions',
    imageUrl: 'https://tse2.mm.bing.net/th/id/OIP.zJvZKgdMd5HQkqUrgZ8YJgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    category: 'systems',
    difficulty: 'advanced',
    keyPoints: [
      'Central nervous system (brain and spinal cord)',
      'Peripheral nervous system (all other nerves)',
      'Controls voluntary and involuntary functions',
      'Processes sensory information and coordinates responses'
    ],
    funFacts: [
      'The brain contains about 86 billion neurons',
      'Nerve impulses can travel up to 268 mph',
      'The brain uses about 20% of the body\'s energy'
    ],
    relatedSystems: ['muscular', 'endocrine'],
    htmlnotesName: "Ar_Brain.html"
  },
  {
    id: 'Lungs',
    name: 'Lungs',
    threedmodel: 'https://mywebar.com/p/Project_0_hcsf0vfbtz',
    description: 'The lungs and airways that enable breathing and gas exchange',
    imageUrl: 'https://media.sketchfab.com/models/066a1eafdcf54865b4c6b8688dac5834/thumbnails/98e7a275be7a4366a44860a2f0c4ed91/fc7505af33ad4247b36bd1d83cd53d0f.jpeg',
    category: 'systems',
    difficulty: 'beginner',
    keyPoints: [
      'Primary function is gas exchange (oxygen and carbon dioxide)',
      'Includes nose, trachea, bronchi, and lungs',
      'Alveoli are tiny air sacs where gas exchange occurs',
      'Works closely with the circulatory system'
    ],
    funFacts: [
      'We breathe about 20,000 times per day',
      'Lungs contain about 300 million alveoli',
      'The surface area of lungs is about the size of a tennis court'
    ],
    relatedSystems: ['circulatory', 'muscular'],
    htmlnotesName: "Ar_Lungs.html"
  },
  {
    id: 'eye',
    name: 'eye',
    threedmodel: 'https://mywebar.com/p/Project_0_jvgmo5vo4z',
    description: 'The organs that break down food and absorb nutrients',
    imageUrl: 'https://cdna.artstation.com/p/assets/images/images/026/148/004/large/alexander-beim-hyper-realistic-human-eye-iris-3d-cg-alexander-beim.jpg?1588008829',
    category: 'systems',
    difficulty: 'intermediate',
    keyPoints: [
      'Breaks down food into nutrients the body can use',
      'Includes mouth, esophagus, stomach, and intestines',
      'Liver and pancreas aid in digestion',
      'Small intestine is where most absorption occurs'
    ],
    funFacts: [
      'The small intestine is about 20 feet long',
      'Stomach acid is strong enough to dissolve metal',
      'It takes about 24-72 hours for food to travel through the system'
    ],
    relatedSystems: ['circulatory', 'nervous'],
    htmlnotesName: "Ar_eye.html"
  }
];