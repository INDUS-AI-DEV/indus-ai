interface CaseStudy {
  slug: string;
  title: string;
  excerpt: string;
  client: string;
  industry: string;
  duration: string;
  results: string[];
  challenge: string;
  solution: string;
  impact: string[];
  testimonial: {
    text: string;
    author: string;
    role: string;
    company: string;
  };
  logoUrl: string;
  coverImage: string;
  stats: {
    value: string;
    label: string;
  }[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "dhmc-healthcare-ai",
    title: "Revolutionizing Patient Care at DHMC with AI-Powered Diagnostics",
    excerpt: "How DHMC reduced diagnostic time by 60% and improved patient outcomes with IndusAI's intelligent diagnostic system.",
    client: "Dartmouth-Hitchcock Medical Center",
    industry: "Healthcare",
    duration: "6 Months",
    results: [
      "60% reduction in diagnostic time",
      "45% improvement in early disease detection",
      "30% reduction in operational costs",
      "95% accuracy in preliminary diagnoses"
    ],
    challenge: "DHMC was facing challenges with increasing patient loads and limited specialist availability, leading to longer diagnosis times and delayed treatments. The hospital needed a solution to process medical imaging and patient data more efficiently while maintaining high accuracy standards.",
    solution: "IndusAI implemented a comprehensive AI diagnostic system that integrates with DHMC's existing EMR systems. Our solution included:\n\n1. Custom AI models trained on millions of anonymized medical images\n2. Natural language processing for analyzing patient histories\n3. Real-time decision support for radiologists\n4. Automated preliminary reporting\n\nImplementation was completed with minimal disruption to existing workflows, and staff were trained through our comprehensive onboarding program.",
    impact: [
      "Reduced average diagnosis time from 48 hours to under 19 hours",
      "Identified 28% more early-stage conditions in the first 3 months",
      "Enabled radiologists to handle 40% more cases daily",
      "Achieved 99.8% system uptime since deployment"
    ],
    testimonial: {
      text: "The IndusAI system has transformed our diagnostic process. We're detecting conditions earlier and providing faster treatment to our patients. The accuracy and efficiency gains have been remarkable.",
      author: "Dr. Sarah Mitchell",
      role: "Chief Radiologist",
      company: "Dartmouth-Hitchcock Medical Center"
    },
    logoUrl: "/images/case-studies/logos/dhmc-logo.png",
    coverImage: "/images/case-studies/covers/healthcare-ai.jpg",
    stats: [
      { value: "60%", label: "Faster Diagnosis" },
      { value: "45%", label: "Better Detection" },
      { value: "30%", label: "Cost Reduction" },
      { value: "95%", label: "Accuracy Rate" }
    ]
  },
  {
    slug: "grand-horizon-hospital",
    title: "Transforming Patient Experience at Grand Horizon Hospital with AI Concierge",
    excerpt: "How Grand Horizon Hospital improved patient satisfaction scores by 75% with IndusAI's virtual health assistant.",
    client: "Grand Horizon Hospital",
    industry: "Healthcare",
    duration: "4 Months",
    results: [
      "75% improvement in patient satisfaction",
      "50% reduction in administrative workload",
      "40% faster patient check-ins",
      "90% accuracy in patient queries"
    ],
    challenge: "Grand Horizon Hospital was struggling with patient satisfaction due to long wait times and communication gaps between patients and staff. The administrative burden was overwhelming staff, leading to decreased efficiency and patient experience.",
    solution: "IndusAI deployed a comprehensive AI-powered patient engagement platform featuring:\n\n1. 24/7 virtual health assistant for patient queries\n2. Automated appointment scheduling and reminders\n3. Real-time wait time updates\n4. Multilingual support\n5. Integration with hospital systems\n\nOur solution was implemented with a focus on maintaining the human touch while automating routine tasks.",
    impact: [
      "Reduced average check-in time from 15 minutes to 9 minutes",
      "Decreased no-show rate by 35%",
      "Handled over 5,000 patient interactions weekly",
      "Freed up 20+ hours per week for clinical staff"
    ],
    testimonial: {
      text: "The IndusAI platform has revolutionized our patient interactions. Our staff can focus on care while the AI handles routine inquiries. The impact on patient satisfaction has been extraordinary.",
      author: "Michael Chen",
      role: "Hospital Administrator",
      company: "Grand Horizon Hospital"
    },
    logoUrl: "/images/case-studies/logos/gh-hospital-logo.png",
    coverImage: "/images/case-studies/covers/hospital-ai.jpg",
    stats: [
      { value: "75%", label: "Patient Satisfaction" },
      { value: "50%", label: "Workload Reduction" },
      { value: "40%", label: "Faster Check-ins" },
      { value: "90%", label: "Query Accuracy" }
    ]
  },
  {
    slug: "oasis-resorts-ai-concierge",
    title: "Elevating Guest Experience at Oasis Resorts with AI Concierge",
    excerpt: "How Oasis Resorts increased direct bookings by 45% and improved guest satisfaction with IndusAI's intelligent concierge.",
    client: "Oasis Resorts & Spas",
    industry: "Hospitality",
    duration: "3 Months",
    results: [
      "45% increase in direct bookings",
      "35% higher guest satisfaction scores",
      "60% reduction in front desk queries",
      "28% increase in on-property spending"
    ],
    challenge: "Oasis Resorts was facing challenges with managing guest requests efficiently while maintaining high service standards. The increasing volume of pre-arrival and in-stay queries was overwhelming staff and leading to slower response times.",
    solution: "IndusAI implemented a comprehensive guest experience platform featuring:\n\n1. AI-powered virtual concierge available 24/7\n2. Personalized recommendations engine\n3. Seamless booking and upsell opportunities\n4. Multilingual support\n5. Integration with property management systems\n\nOur solution was designed to enhance, not replace, the personal touch that Oasis Resorts is known for.",
    impact: [
      "Reduced average response time from 22 minutes to under 2 minutes",
      "Increased average room revenue by 18% through smart upselling",
      "Handled 85% of routine guest inquiries without staff intervention",
      "Achieved 4.8/5 guest satisfaction rating for digital services"
    ],
    testimonial: {
      text: "The IndusAI concierge has transformed our guest experience. We're seeing higher satisfaction scores and increased revenue, all while reducing operational costs. It's been a game-changer for our brand.",
      author: "Emily Rodriguez",
      role: "Director of Guest Experience",
      company: "Oasis Resorts & Spas"
    },
    logoUrl: "/images/case-studies/logos/oasis-logo.png",
    coverImage: "/images/case-studies/covers/hotel-ai.jpg",
    stats: [
      { value: "45%", label: "More Direct Bookings" },
      { value: "35%", label: "Higher Satisfaction" },
      { value: "60%", label: "Fewer Front Desk Queries" },
      { value: "28%", label: "Increased On-site Spend" }
    ]
  },
  {
    slug: "urban-space-real-estate",
    title: "Transforming Property Sales at Urban Space with AI Virtual Agents",
    excerpt: "How Urban Space Realty increased lead conversion by 65% with IndusAI's intelligent property assistant.",
    client: "Urban Space Realty",
    industry: "Real Estate",
    duration: "5 Months",
    results: [
      "65% increase in lead conversion",
      "40% more qualified appointments",
      "80% reduction in response time",
      "35% increase in agent productivity"
    ],
    challenge: "Urban Space Realty was struggling with high lead volume but low conversion rates. Their agents were spending too much time on initial inquiries and scheduling, leaving less time for high-value interactions. They needed a solution to qualify leads better and improve response times.",
    solution: "IndusAI implemented a comprehensive real estate automation platform featuring:\n\n1. AI-powered property matching assistant\n2. 24/7 lead qualification and response system\n3. Automated appointment scheduling\n4. Virtual property tours with AI guidance\n5. CRM integration\n\nOur solution was customized to reflect Urban Space's brand voice and property portfolio.",
    impact: [
      "Reduced average response time from 2 hours to under 2 minutes",
      "Increased lead-to-appointment conversion by 78%",
      "Handled 1,200+ inquiries monthly without additional staff",
      "Generated 45% more qualified leads through better targeting"
    ],
    testimonial: {
      text: "The IndusAI platform has revolutionized how we handle leads. Our agents are more productive, our clients are happier, and our business is growing faster than ever before.",
      author: "David Kim",
      role: "Managing Director",
      company: "Urban Space Realty"
    },
    logoUrl: "/images/case-studies/logos/urban-space-logo.png",
    coverImage: "/images/case-studies/covers/real-estate-ai.jpg",
    stats: [
      { value: "65%", label: "Higher Lead Conversion" },
      { value: "40%", label: "More Appointments" },
      { value: "80%", label: "Faster Response" },
      { value: "35%", label: "Agent Productivity" }
    ]
  }
];
