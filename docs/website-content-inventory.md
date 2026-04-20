# IndusAI Website Content Inventory

Generated from the current Next.js source in `app/` on 2026-04-11.

## Scope

This document captures:

- The current route map
- Shared site elements
- Visible page content and copy
- Major UI elements on each page
- Demo page interaction elements
- Legal/blog page content structure

Notes:

- "Rendered" means the element is currently part of a route output.
- "Commented out" means content exists in code but is not currently shown.
- Some referenced assets/routes are broken in the current codebase; those are called out at the end.

## Route Map

| Route | Purpose |
| --- | --- |
| `/` | Main marketing homepage |
| `/solutions` | Solutions overview |
| `/products` | Products and technical expertise overview |
| `/about` | Company story, vision, values |
| `/contact` | Contact page with Calendly embed |
| `/careers` | Careers and open positions |
| `/blog` | Blog index |
| `/blog/agentic-ai` | Blog article |
| `/blog/ai-agents-today` | Blog article |
| `/blog/aws-enterprise-ai-agents` | Blog article |
| `/demo` | Demo bot directory |
| `/demo/medibot` | Healthcare voice demo |
| `/demo/loanbot` | Loan recovery / finance demo |
| `/demo/hotelbot` | Hotel voice demo |
| `/demo/ramcharitmanas` | Ramcharitmanas / query demo |
| `/testing` | Internal testing voice demo |
| `/privacy` | Privacy policy |
| `/terms` | Terms and conditions |

## Shared Site Elements

### Global Metadata and Theme

- Site title: `Indus AI`
- Site description: `Empowering businesses with cutting-edge AI solutions`
- Primary site font: `Raleway`
- Styling approach: Tailwind CSS v4 plus custom global classes for animation and text effects
- Notable global visual utilities:
  - Floating animation classes
  - Blob animation
  - `animated-underline`
  - `gradient-text`

### Main Navigation (`Navbar`)

- Brand logo linking to `/`
- Primary nav links:
  - `Solutions`
  - `Products`
  - `About`
  - `Careers`
  - `Contact`
  - `Dashboard` (external: `https://dashboard.indusai.app`)
- Language dropdown:
  - English
  - Hindi
  - Tamil
  - Telugu
  - Kannada
  - Marathi
  - Bengali
- Primary CTA button: `Book a Demo`
- Mobile nav:
  - Hamburger toggle
  - Same route list as desktop

### Reusable Buttons / Containers

- `Button` supports:
  - Variants: `primary`, `secondary`, `outline`
  - Sizes: `sm`, `md`, `lg`
- `Container` is a centered max-width wrapper used throughout the site

### Shared CTA Section (`ReadyToTransform`)

- Heading: `Ready to Transform Your Business?`
- Supporting copy: `Let's discuss how our AI solutions can help you achieve your goals.`
- Buttons:
  - `Get Started`
  - `Talk to Expert`
- Both CTAs point to Calendly

### Footer Variants

There are two footer implementations in the codebase.

#### New Footer (`FooterNew`)

- Brand logo
- Brand statement:
  - `Enterprise AI products for voice, lead management, financial workflows, and autonomous business operations.`
- Stats:
  - `4 Core Products`
  - `22+ Languages`
  - `CRM Lead Routing`
  - `24/7 Autonomous Ops`
- Social links:
  - LinkedIn
  - Twitter
  - YouTube
- Footer columns:
  - Products
    - IndusLabs
    - Marketing Automation Agent
    - FinoLabs
    - Agentic AI SM
    - Platform
  - Use Cases
  - Company
  - Support
- Footer CTA block:
  - Heading: `Ready to Deploy Agentic AI in Production?`
  - Copy: `Explore how IndusAI products can support your customer operations, finance workflows, and enterprise automation roadmap.`
  - Buttons:
    - `Book Product Demo`
    - `Explore Products`

#### Legacy Footer (`Footer`)

- Simpler company/footer layout
- Links:
  - Solutions
  - Products
  - About Us
  - Careers
  - Contact Us
- Legal:
  - Privacy Policy
  - Terms of Service
- Social:
  - LinkedIn

## Homepage (`/`)

### Section: Hero

- Trust badge: `Enterprise Agentic AI Products for Real Business Workflows`
- Main headline: `The Agentic AI Product Suite for Modern Enterprises`
- Supporting copy:
  - `IndusAI builds agentic AI products that help enterprises automate conversations, workflows, and decisions across customer support, finance, operations, and growth.`
  - `Deploy voice agents, lead management automation, financial workflow automation, and autonomous enterprise systems from a single AI product ecosystem.`
- Metrics:
  - `4 Core Products`
  - `22+ Languages`
  - `24/7 Autonomous Ops`
  - `Enterprise Deployment Ready`
- Buttons:
  - `Explore Products`
  - `Explore Use Cases`
- Visual elements:
  - 3D robot model rendered with `react-three-fiber`
  - Floating badges:
    - `Product Suite Active`
    - `Voice, Leads, Finance, and Workflows`

### Section: Products

- Eyebrow: `Our Products`
- Heading: `A Product Suite for Agentic Enterprise Automation`
- Supporting copy:
  - `From conversational AI and lead management to financial workflows and autonomous enterprise agents, our products are built to help businesses automate operations, customer engagement, and decision-making at scale.`

Product cards:

#### IndusLabs

- Domain badge: `induslabs.io`
- Category: `Enterprise Voice AI Platform`
- Description: `Build and deploy multilingual voice agents for support, sales, collections, booking, onboarding, and customer operations.`
- Features:
  - Real-time voice agents
  - Multilingual conversations
  - Telephony and CRM integrations
  - Analytics and workflow automation
- CTA: `Explore IndusLabs`

#### FinoLabs

- Domain badge: `finolabs.io`
- Category: `AI for Financial Operations`
- Description: `Purpose-built AI workflows for lending, collections, financial servicing, customer verification, and process automation in BFSI.`
- Features:
  - Loan servicing and collections
  - Financial customer support
  - Verification and compliance workflows
  - Automation for operations teams
- CTA: `Explore FinoLabs`

#### Agentic AI SM

- Domain badge: `Auto Socials`
- Category: `Auto Socials`
- Description: `Deploy agentic systems that can reason, act, coordinate across tools, and automate complex business workflows beyond chat and voice.`
- Features:
  - Multi-agent orchestration
  - Workflow execution
  - Tool use and business actions
  - Enterprise-grade observability
- CTA: `Explore Agentic AI SM`

#### Marketing Automation Agent

- Domain badge: `Lead Management AI`
- Category: `AI Agent for Lead Management`
- Description: `Automate lead capture, qualification, follow-up, and CRM handoff so sales teams can focus on high-intent opportunities.`
- Features:
  - Inbound and outbound lead handling
  - Qualification and scoring
  - Automated follow-up workflows
  - CRM routing and sales handoff
- CTA: `Explore Marketing Automation Agent`

### Section: Platform Capabilities

- Eyebrow: `Platform Capabilities`
- Heading: `One Platform, Multiple Agentic Capabilities`
- Supporting copy:
  - `Our platform supports real-time voice, task execution, enterprise integrations, human oversight, and measurable operational intelligence across multiple AI products.`
- Capability cards:
  - Voice Agents
  - Lead Management
  - Autonomous Workflows
  - Multilingual Intelligence
  - Enterprise Integrations
  - CRM Routing
  - Analytics & Observability
  - Human Handoff & Control

### Section: Client Logos

- Section label: `Supported by`
- Marquee logo list:
  - 7Span
  - Codelessly
  - Dabur
  - Flipkart
  - Flutter
  - HDFC Sky
  - Massist
  - Nonstop
  - Serverpod
  - Tata Digital
  - Tide
  - Welltested AI
  - Zoho

### Section: Services / Industries

- Section headline: `Voice AI Solutions, Purpose-Built for Your Industry`
- Supporting copy:
  - `Our AI voice agents are customized to meet the unique needs of your business, delivering exceptional customer experiences across multiple languages.`

Industry cards:

#### Hospitality

- Subtitle: `Elevate Guest Experience`
- Description: `24/7 multilingual support for hotels, resorts, and travel services with seamless booking and guest services`
- Benefits:
  - 24/7 Room Booking & Reservations
  - Multilingual Guest Support
  - Concierge Services Automation
  - Dining & Amenities Booking
  - Feedback & Review Collection
- Metric badge: `50% Faster Bookings`
- CTA: `Learn More →`

#### Banking & Finance

- Subtitle: `Secure & Compliant CX`
- Description: `Enterprise-grade voice AI with SOC2, PCI-DSS compliance for financial institutions`
- Benefits:
  - Secure Customer Verification
  - Account Balance & Transaction Queries
  - Loan Application Processing
  - Loan Recovery System
  - Fraud Detection Support
  - Personalized Product Recommendations
- Metric badge: `89% First-Call Resolution`
- CTA: `Learn More →`

#### D2C & FMCG

- Subtitle: `Scale Customer Love`
- Description: `Boost retention and optimize supply chains with intelligent automation`
- Benefits:
  - Order Status & Tracking
  - Return & Exchange Processing
  - Supply Chain Communication
  - Inventory Management Alerts
  - Customer Feedback Collection
- Metric badge: `3x Higher Customer LTV`
- CTA: `Learn More →`

#### Sales & Growth

- Subtitle: `Lead management and qualification`
- Description: `Automate inbound and outbound lead handling, qualification, follow-up, CRM routing, and sales handoff.`
- Benefits:
  - Lead Capture & Enrichment
  - Qualification & Scoring
  - Automated Follow-up
  - CRM Routing & Handoff
  - Campaign Response Handling
- Metric badge: `24/7 Lead Response`
- CTA: `Explore Use Case`

#### Healthcare

- Subtitle: `Patient-First Care`
- Description: `HIPAA-compliant voice AI for appointment scheduling and patient support`
- Benefits:
  - Appointment Scheduling
  - Prescription Reminders
  - Insurance Verification
  - Symptom Pre-screening
  - Post-care Follow-ups
- Metric badge: `40% Reduced No-shows`
- CTA: `Learn More →`

#### Automotive

- Subtitle: `Drive Sales & Service Excellence`
- Description: `24/7 lead qualification, service automation, and customer engagement for dealerships and OEMs`
- Benefits:
  - 24/7 Test Drive Scheduling
  - Automated Service Appointments
  - Lead Qualification & Follow-up
  - After-sales Support Automation
  - Logistics Communication
- Metric badge: `65% Faster Service Bookings`
- CTA: `Learn More →`

Bottom CTA card:

- Heading: `Ready to Transform Your Industry?`
- Copy: `Join 20+ enterprises already using IndusAI to automate conversations and boost efficiency.`
- Button: `Request Industry Demo`

### Section: Testimonials

- Badge: `Customer Success Stories`
- Headline: `Trusted by India's Leading Enterprises`
- Supporting copy: `See how enterprises across industries are achieving measurable results with IndusAI's voice automation platform.`

Testimonials:

- Rajesh Kumar, Chief Technology Officer, HDFC Bank
  - Quote centers on `89% first-call resolution` and `45%` lower operational cost
  - Metrics chip: `95% FCR, 45% Cost Reduction`
- Priya Sharma, General Manager, Maruti Suzuki Dealership
  - Quote centers on dealership automation and `35%` higher satisfaction
  - Metrics chip: `35% Higher CSAT, 24/7 Availability`
- Nilanjan Das, Founder & CEO, Exide Batteries
  - Quote centers on `80%` automated queries and higher LTV
  - Metrics chip: `80% Query Automation, 3x Customer LTV`

Additional stats row:

- `22+ Enterprise Clients`
- `95% Avg. FCR Rate`
- `45% Cost Reduction`
- `24/7 AI Availability`

### Section: FAQ

- Eyebrow: `Need Help?`
- Heading: `Frequently Asked Questions`
- Supporting text: `Everything you need to know about our AI solutions. Can't find the answer you're looking for? Contact our team.`

FAQ items:

- What is Indus AI, and how is it different from other AI companies?
- What products does Indus AI offer?
- Why should businesses choose Indus AI for AI deployment?
- Can SMEs afford AI solutions from Indus AI?
- How does IndusAI improve customer support?
- What industries can benefit from IndusAI solutions?
- How does Indus AI ensure data security and privacy?
- Can I integrate Indus AI products into my existing system?
- What's the future of AI at Indus AI?
- How can I get started with Indus AI?

Bottom CTA:

- Copy: `Still have questions?`
- Button: `Contact Support`

## Solutions Page (`/solutions`)

### Hero

- Eyebrow: `Use Cases and Solutions`
- Heading: `Agentic AI Products for High-Impact Enterprise Workflows`
- Supporting copy:
  - `Our products map to repeatable workflows across customer operations, revenue operations, financial servicing, and autonomous business automation. This is where product capability meets production use case.`
- Buttons:
  - `Explore Product Suite`
  - `Book a Demo`

### Functional Use Cases

#### Customer Operations

- Product fit: `Best fit: IndusLabs + Agentic AI SM`
- Workflows:
  - Voice-led support automation
  - Appointment and booking flows
  - Customer onboarding journeys
  - Escalation and human handoff

#### Financial Workflows

- Product fit: `Best fit: FinoLabs + IndusLabs`
- Workflows:
  - Collections and recovery workflows
  - Loan servicing and reminders
  - Customer verification and compliance support
  - BFSI operations automation

#### Revenue Operations

- Product fit: `Best fit: Marketing Automation Agent + IndusLabs`
- Workflows:
  - Lead capture and enrichment
  - Qualification and scoring
  - Follow-up and nurture journeys
  - CRM routing and sales handoff

#### Enterprise Automation

- Product fit: `Best fit: Agentic AI SM`
- Workflows:
  - Task orchestration across tools
  - Operations workflow execution
  - Cross-functional process automation
  - Observability and control loops

### Industry Deployments

- Banking & Finance
- Hospitality
- Healthcare
- Retail & Commerce
- Automotive
- Enterprise Operations

### CTA

- Shared `Ready to Transform Your Business?` section

## Products Page (`/products`)

### Hero

- Eyebrow: `Product Suite`
- Heading: `Enterprise Agentic AI Products Built for Production Workflows`
- Supporting copy:
  - `IndusAI offers a product suite for voice, lead management, financial operations, and autonomous business automation. Each product is designed for repeatable enterprise workflows, measurable outcomes, and real-world deployment.`
- Buttons:
  - `Explore Products`
  - `Book a Demo`

### Product Cards

#### IndusLabs

- Category: `Enterprise Voice AI Platform`
- Description: `A production-grade product for multilingual voice agents across support, collections, booking, onboarding, and customer operations.`
- Best fit for: `Customer operations, support, sales, hospitality, BFSI, service teams`
- Core workflows:
  - Inbound and outbound voice automation
  - Multilingual customer conversations
  - Telephony and CRM-connected flows
  - Escalation, analytics, and workflow automation

#### FinoLabs

- Category: `AI for Financial Operations`
- Description: `Purpose-built financial workflow automation for lending, collections, servicing, verification, and regulated customer operations.`
- Best fit for: `BFSI, lending, collections, servicing, verification, ops teams`
- Core workflows:
  - Loan servicing and repayment journeys
  - Collections and recovery workflows
  - Customer verification and KYC support
  - Finance operations automation and oversight

#### Agentic AI SM

- Domain badge: `Auto Socials`
- Category: `Auto Socials`
- Description: `A broader enterprise system for orchestrating agents that reason, act, use tools, and automate multi-step business workflows.`
- Best fit for: `Operations, internal platforms, enterprise transformation, workflow owners`
- Core workflows:
  - Multi-agent orchestration
  - Tool use and task execution
  - Cross-system workflow automation
  - Observability, review, and operational control

#### Marketing Automation Agent

- Category: `AI Agent for Lead Management`
- Description: `An AI agent for managing inbound and outbound leads, qualifying prospects, routing high-intent opportunities, and keeping sales teams focused on conversion-ready conversations.`
- Best fit for: `Sales, marketing, growth, customer acquisition, CRM, and revenue operations teams`
- Core workflows:
  - Lead capture and enrichment
  - Lead qualification and scoring
  - Automated follow-up and nurturing
  - CRM updates, routing, and sales handoff

### Shared Platform Capabilities

- Voice agents
- Lead management automation
- Autonomous workflow execution
- Multilingual intelligence
- Enterprise integrations
- CRM routing and handoff
- Analytics and observability
- Human-in-the-loop controls

### Built for Enterprise Deployment

Deployment benefit cards:

- Production-Ready Architecture
- Modular Product Design
- Enterprise Integration Layer
- Operational Control

## About Page (`/about`)

### Hero

- Eyebrow: `About IndusAI`
- Heading: `Building Enterprise Agentic AI Products for Real-World Operations`
- Supporting copy:
  - `IndusAI is evolving from a voice-AI-first company into a broader enterprise agentic AI product company. We build products for voice, lead management, financial operations, and autonomous workflow execution across modern enterprise teams.`

### Stats

- `4 Core Products`
- `22+ Language Coverage`
- `24/7 Autonomous Ops`
- `Enterprise Deployment Focus`

### Mission Block

- Eyebrow: `Our Mission`
- Heading: `Move enterprises from manual workflows to agentic execution`
- Copy references:
  - Voice systems that can operate in real time
  - Finance workflows that can execute reliably
  - Autonomous agents that coordinate work across business tools
  - Measurable value in customer operations, financial servicing, growth operations, and enterprise automation

### What We Are Building

- Key points:
  - IndusLabs for multilingual enterprise voice AI
  - Marketing Automation Agent for lead management and qualification
  - FinoLabs for BFSI and financial workflow automation
  - Agentic AI SM for broader enterprise orchestration and multi-step business execution
  - Shared platform layer for integrations, analytics, observability, and human control

### How We Build

- Product-Led Thinking
- Workflow-First Design
- Enterprise Readiness
- Agentic Systems, Not Just Interfaces

### CTA

- Shared `Ready to Transform Your Business?` section

## Contact Page (`/contact`)

### Hero

- Heading: `Get in Touch`
- Supporting text: `Have questions about our AI solutions? We're here to help :)`

### Main Functional Element

- Embedded Calendly widget pointing to `https://calendly.com/indusai-app/meet`

### Commented Out / Not Rendered

- Contact methods cards:
  - Sales
  - Support
  - Partnerships
- Contact form:
  - First Name
  - Last Name
  - Email
  - Subject
  - Message
  - `Send Message` button

### CTA and Footer

- Shared `Ready to Transform Your Business?` section
- Legacy footer

## Careers Page (`/careers`)

### Why Join Our Team?

- Intro copy:
  - `We're building the future of voice AI, and we want you to be part of our journey.`
- Cards:
  - Cutting-Edge Work
  - Learning & Growth
  - Flexible Work

### Open Positions

Current listing:

- AI Engineering Intern
  - Type: Internship
  - Location: Remote
  - Role summary: work on voice AI solutions, models, and infrastructure
  - Responsibilities:
    - Develop and optimize AI/ML models for voice processing
    - Implement and test new algorithms
    - Integrate AI components
    - Participate in code reviews
    - Document findings and implementation details
  - Requirements:
    - CS/AI-related degree path
    - Python
    - PyTorch or TensorFlow familiarity
    - Basic NLP/speech understanding
    - Problem-solving and communication skills
  - Buttons/links:
    - `Apply Now`
    - mailto links to `hr@indusai.app`

Additional block:

- Heading: `Don't see the perfect role?`
- Copy inviting general applications
- Button: `Send Us Your Resume`

### Bottom CTA

- Heading: `Ready to build the future of voice AI with us?`
- Buttons:
  - `Contact Our Team`
  - `View Open Positions`

## Blog Index (`/blog`)

### Hero

- Heading: `Insights & Updates`
- Supporting text: `The latest in AI technology, enterprise solutions, and industry trends.`

### Blog Cards

- `Agentic AI: The Future of Work Is Here`
  - Category: AI Technology
  - Date: August 14, 2025
  - Read time: 12 min read
- `Deploying AI Agents at Enterprise Scale with AWS`
  - Category: Enterprise Solutions
  - Date: August 14, 2025
  - Read time: 15 min read
- `Beyond the Hype: Real AI Agents You Can Use Today`
  - Category: AI Applications
  - Date: August 14, 2025
  - Read time: 10 min read

Each card includes:

- Placeholder visual tile
- Title
- Excerpt
- `Read more` link

### Subscription UI

- Copy: `Stay updated with the latest insights`
- Input: email field
- Button: `Subscribe`

## Blog Article: Agentic AI (`/blog/agentic-ai`)

### Visible Structure

- Back link: `Back to Blog`
- Date: August 14, 2025
- Read time: 12 min read
- Title: `Agentic AI: The Future of Work Is Here`

### Content Sections

- Intro on the rise of proactive AI systems
- `From Automation to Autonomy`
- `Key Characteristics of Agentic AI`
  - Goal-Oriented
  - Proactive
  - Adaptive
  - Collaborative
- `Transforming Industries`
  - Healthcare
  - Manufacturing
  - Customer Service
- `The Human-AI Partnership`
- Pull quote about agentic AI elevating the nature of work
- `Challenges and Considerations`
- `Looking Ahead`
- Tags:
  - AI
  - Automation
  - Future of Work
  - Digital Transformation

## Blog Article: AI Agents Today (`/blog/ai-agents-today`)

### Visible Structure

- Back link
- Date: August 14, 2025
- Read time: 10 min read
- Title: `Beyond the Hype: Real AI Agents You Can Use Today`

### Content Sections

- Intro on production-ready AI agents in 2025
- `1. AI Coding Assistants`
  - GitHub Copilot X
  - Amazon CodeWhisperer Pro
  - Tabnine Enterprise
- `2. Research and Analysis Agents`
  - Perplexity Pro
  - Elicit
  - Claude Research
- `3. Voice and Conversational Agents`
  - Google Duplex
  - Amazon Lex V2
  - IndusAI Voice
- `4. Business Process Automation`
  - n8n
  - Zapier Interfaces
  - Make
- `5. Creative and Content Creation`
  - Jasper for Business
  - Runway ML
  - Copy.ai
- `Implementing AI Agents: Key Considerations`
  - Data Privacy
  - Integration
  - Customization
  - Scalability
  - ROI
- `The Future Is Now`
- Tags:
  - AI Tools
  - Productivity
  - Automation
  - Business Technology
  - AI Applications

## Blog Article: AWS Enterprise AI Agents (`/blog/aws-enterprise-ai-agents`)

### Visible Structure

- Back link
- Date: August 14, 2025
- Read time: 15 min read
- Title: `Deploying AI Agents at Enterprise Scale with AWS`

### Content Sections

- Intro on moving from prototypes to enterprise deployments
- `The AWS AI/ML Stack for Agent Development`
  - Amazon Bedrock
  - AWS AgentCore
  - Amazon SageMaker
  - AWS Step Functions
  - Amazon Kendra
- `Architecting for Scale`
  - Multi-Agent Systems
  - Knowledge Integration
  - Security and Compliance
- `Operationalizing AI Agents`
  - Monitoring and Observability
  - Continuous Improvement
- `Real-World Implementation: Customer Service Automation`
- `Best Practices for Enterprise Deployment`
- `Measuring Success`
  - Task Completion Rate
  - Resolution Time
  - User Satisfaction
  - Cost Savings
  - Business Impact
- Tags:
  - AWS
  - Enterprise AI
  - Cloud Computing
  - AI Deployment
  - Scalability

## Demo Index (`/demo`)

### Hero

- Heading: `Experience Our AI Solutions`
- Supporting text about interactive demo bots and business transformation

### Demo Cards

- HotelBot
  - Category: Hospitality
  - Description: hotel management assistant for guest engagement, booking, and support
- MediBot
  - Category: Healthcare
  - Description: patient queries, scheduling, and support
- LoanBot
  - Category: Finance
  - Description: loan eligibility, application guidance, and status updates

Each card includes:

- Icon
- Category chip
- Preview image
- Title
- Description
- CTA button: `Try <Bot Name>`

### Demo CTA Section

- Heading: `Ready to Transform Your Business?`
- Buttons:
  - `Schedule Demo`
  - `Learn More`

## Demo Page Pattern

The demo pages share a common interaction pattern:

- Phone mockup UI
- Toggle between `Web Call` and `Telephony`
- LiveKit connection flow
- Start/end call button
- Speaking indicator
- Conversation/transcript display where applicable
- Telephony inputs where applicable:
  - Phone Number
  - Client Name

## Demo: MediBot (`/demo/medibot`)

### Visible Elements

- Header labels:
  - `Web Call`
  - `Telephony`
- Brand area:
  - Indus AI logo
  - Subtitle: `AI Medicare System`
- Telephony inputs:
  - Phone Number
  - Client Name
- Primary call control:
  - `START CALL`
  - `END CALL`
- Status text:
  - `Connecting to the agent...`
  - `Agent is speaking...`
  - Telephony success/error states

### Behavior Notes

- Web mode starts a LiveKit audio session
- Telephony mode attempts to call `/api/start-telephony-call`

## Demo: HotelBot (`/demo/hotelbot`)

### Visible Elements

- Same core call UI as MediBot
- Language dropdown:
  - Hindi
  - English
  - Tamil
  - Arabic
  - African
- Subtitle: `AI Hotel Management System`
- Background image uses hotel-themed artwork

## Demo: LoanBot (`/demo/loanbot`)

### Visible Elements

- More form-heavy desktop layout
- Pre-filled loan recovery / banking fields:
  - bot_name
  - bank_name
  - customer_name
  - reason
  - loan_type
  - amount_disbursed
  - principal_outstanding
  - over_due_principal_amount
  - over_due_interest_amount
  - over_due_total_amount
  - over_due_days
- Language selector
- Call controls
- Conversation transcript area

### Default Sample Content

- Bot name: `Maya`
- Bank name: `ICICI Bank`
- Customer name: `Manish`
- Reason: `your last 3 repayments have been missed`

## Demo: Ramcharitmanas (`/demo/ramcharitmanas`)

### Visible Elements

- Same call UI pattern as HotelBot
- Language dropdown
- Subtitle: `AI Queries System`
- Uses Ramcharitmanas-specific token and websocket environment variables

## Testing Page (`/testing`)

### Purpose

- Internal test harness for arbitrary `agent_type` values

### Visible Elements

- Same call UI pattern as HotelBot
- Subtitle: `AI Testing System`
- Extra input:
  - `Enter Agent Type`
- Language dropdown
- Telephony toggle and call controls

## Privacy Policy (`/privacy`)

### Header

- Title: `Privacy Policy`
- Effective date: `January 1, 2025`
- Back link: `Back to Home`

### Sections

- 1. Introduction
- 2. Scope & Applicability
- 3. What Personal Data We Collect
- 4. How We Collect Data
- 5. Purposes of Processing
- 6. Legal Basis for Processing
- 7. Data Sharing & Disclosure
- 8. Cross-Border Transfers
- 9. Data Retention
- 10. Your Rights as a Data Principal
- 11. Cookies & Similar Technologies
- 12. Security Measures
- 13. Changes to This Policy
- 14. Contact Information & Grievance Officer

Contact shown:

- Data Protection Officer
- `info@indusai.app`

## Terms & Conditions (`/terms`)

### Header

- Title: `Terms & Conditions`
- Effective date: `January 1, 2025`
- Back link: `Back to Home`

### Sections

- 1. Acceptance of the Terms
- 2. Eligibility
- 3. Account Registration & Security
- 4. Permitted Use
- 5. Intellectual Property
- 6. Termination
- 7. Disclaimers
- 8. Limitation of Liability
- 9. Indemnification
- 10. Modification of Terms
- 11. Governing Law & Dispute Resolution
- 12. Entire Agreement & Severability

## Not Currently Rendered But Present in Code

- About page team grid
- Contact methods cards
- Contact form
- Several extra demo cards in `/demo` are commented out:
  - EduBot
  - RetailBot
  - TravelBot
  - HRBot
  - SupportBot

## Known Broken or Inconsistent Elements

- Footer link points to `/contact-sales`, but that route does not exist
- Missing image asset references include:
  - `/images/support/massist.png`
  - testimonial avatar assets
  - testimonial company logo assets
- Demo telephony mode references `/api/start-telephony-call`, but no local `app/api` route exists in the repo
- The `products` page uses `indus-*` utility classes that are not clearly defined in the local theme setup
