import { Metadata } from 'next';
import Link from 'next/link';
import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Agentic AI: The Future of Work Is Here | IndusAI',
  description: 'Explore how AI agents are transforming industries by moving from reactive automation to proactive, goal-driven execution, enabling humans to focus on creative and strategic tasks.',
};

export default function AgenticAIPost() {
  return (
    <article className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="prose prose-lg prose-indigo mx-auto">
        <Link href="/blog" className="inline-flex items-center text-green-700 hover:text-green-800 mb-6">
          <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Blog
        </Link>
        
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <div className="flex items-center mr-6">
            <CalendarIcon className="h-4 w-4 mr-1" />
            <time dateTime="2025-08-14">August 14, 2025</time>
          </div>
          <div className="flex items-center">
            <ClockIcon className="h-4 w-4 mr-1" />
            <span>12 min read</span>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-6">Agentic AI: The Future of Work Is Here</h1>
        
        <p className="text-xl text-gray-600 mb-8">
          The evolution of artificial intelligence has reached a pivotal moment with the advent of agentic AI systems. 
          These aren't just tools that respond to commands—they're proactive partners that understand goals, make decisions, 
          and execute complex tasks with minimal human intervention.
        </p>

        <h2>From Automation to Autonomy</h2>
        <p>
          Traditional automation has been largely reactive, following predefined rules and workflows. Agentic AI represents 
          a paradigm shift—these systems can understand context, learn from interactions, and make independent decisions 
          to achieve specified objectives. They don't just process data; they understand intent and take initiative.
        </p>

        <h2>Key Characteristics of Agentic AI</h2>
        <ul>
          <li><strong>Goal-Oriented:</strong> Works towards specific outcomes rather than just completing tasks</li>
          <li><strong>Proactive:</strong> Identifies and acts on opportunities without explicit instructions</li>
          <li><strong>Adaptive:</strong> Learns and adjusts behavior based on feedback and changing environments</li>
          <li><strong>Collaborative:</strong> Works alongside humans, understanding when to act and when to seek input</li>
        </ul>

        <h2>Transforming Industries</h2>
        <h3>Healthcare</h3>
        <p>
          Agentic AI is revolutionizing patient care by continuously monitoring health data, predicting potential issues, 
          and coordinating with healthcare providers. These systems can manage medication schedules, track symptoms, and 
          even provide preliminary diagnoses, allowing medical professionals to focus on complex cases.
        </p>

        <h3>Manufacturing</h3>
        <p>
          In smart factories, agentic systems optimize production lines in real-time, predict maintenance needs, and 
          coordinate supply chains. They can adjust to material shortages, equipment failures, and changing demand patterns 
          without human intervention.
        </p>

        <h3>Customer Service</h3>
        <p>
          Beyond simple chatbots, agentic AI can handle complex customer journeys, resolving issues from start to finish 
          while maintaining context across multiple interactions. They can access company systems, process returns, 
          and even negotiate solutions when standard policies don't fit.
        </p>

        <h2>The Human-AI Partnership</h2>
        <p>
          The most successful implementations of agentic AI focus on augmenting human capabilities rather than replacing them. 
          These systems handle routine operations, data processing, and initial analysis, freeing human workers to focus on 
          creative problem-solving, strategy, and relationship-building.
        </p>

        <blockquote>
          "Agentic AI doesn't just make us more efficient—it elevates the nature of work itself, 
          allowing human creativity and strategic thinking to flourish."
        </blockquote>

        <h2>Challenges and Considerations</h2>
        <p>
          Implementing agentic AI comes with challenges around trust, accountability, and ethical considerations. 
          Organizations must establish clear boundaries, maintain human oversight, and ensure transparency in AI decision-making 
          processes.
        </p>

        <h2>Looking Ahead</h2>
        <p>
          As agentic AI continues to evolve, we'll see even more sophisticated applications across every sector. 
          The future of work will be defined by seamless human-AI collaboration, where each plays to their strengths, 
          driving innovation and productivity to unprecedented levels.
        </p>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            <strong>Tags:</strong> AI, Automation, Future of Work, Digital Transformation
          </p>
        </div>
      </div>
    </article>
  );
}
