### **Introductory Call Script: AI-First SWE (60 Minutes)**

#### **1\. Rapport & The "Stealth" Context (0:00 \- 0:05)**

**Goal:** Break the ice, confirm they reviewed the materials, and establish your technical foundation.

* **The Icebreaker:** "Thanks for taking the time to chat today. You’ve probably seen my background, but to give you the quick context: I’m an Infra/SRE and DevOps guy by trade. I’ve built the technical engine and the blueprints for OpenWorldTech, but I’m jumping into the deep end on the 'Startup/CEO' mechanics right now."  
* **Document Check:** "Were you able to review the pitch deck and the architecture materials I sent over after the NDA? Do you have any immediate red flags or specific questions you want to hit before I give you the high-level summary?"

#### 

#### **AI-First SWE Workflow**

Before we go into the project, I’d like to get an (unprompted) idea for how you prefer to setup prototypes (backends, frontend, observability, etc) from scratch.

After this part we can go into the project, my ideas, etc.

Does that sound like something we can do?  Sorry for the lack of background/context.. We can definitely do that after…

**Ok, let’s start with this:**

#### 1\. Start with a simple Tic-Tac-Toe game where the user plays the computer. Set it up so the page is scalable to allow for 100s or 1000s of players at a time.

#### 2\. Add Checkers and Chess with Stockfish. The player should be able to select the ELO rating of the computer opponent.

#### 3\. Get the code and check this into GitHub in a private repo that requires pull requests for updates and code owners.

#### 4\. Add a contact screen so the user can provide feedback

#### 5\. Add Google authentication, so only users that have Google logins can log in and play 

#### 6\. Add a white list so that we can control which Gmail addresses are allowed to log in and play

#### 7\. Add local Dev test and production releases each with their own white list so that we can add game testers to the Dev and test releases

#### 

#### 

#### 

#### **2\. The Vision: Agentic AI & The "Genius Suite" (0:05 \- 0:15)**

**Goal:** Pitch the technical roadmap and see if they get excited about the architecture.

* **The Problem:** "The complexity of modern cloud and SRE is outpacing human capacity. I am building the 'Genius Suite'—an autonomous SRE and Software Engineering ecosystem that I wish I had in my previous roles."  
* **The Go-To-Market Strategy:** "To get there, we are using a 'Magnet' strategy. We are building lightweight consumer media tools—our 'Creative Suite'—to act as top-of-funnel magnets that drive user acquisition for the broader autonomous ecosystem."  
* **The "AI-Architect" Dynamic:** "I see myself as the 'AI Architect' here. I'm looking for a visionary fullstack partner to help build the robust React/Node/Go applications that these LLMs and agentic wrappers will actually live inside."

#### 

#### **3\. The Candidate's "AI-First" Mindset (0:15 \- 0:35)**

**Goal:** Let them talk. You need to verify if they actually build *with* AI, or if they just use ChatGPT to write boilerplate.

* **The Workflow Question:** "We are an AI-first team. Talk to me about your daily development workflow. How heavily are you leveraging tools like Claude Code, Gemini CLI, or Cursor to multiply your output?"  
* **The Agentic Experience (Tailor this based on the candidate):**  
  * *(For Richard/Matthew)*: "I saw you have hands-on experience with frameworks like LangChain/SuperAGI. What is the hardest part about getting multi-agent or agent-to-agent (A2A) workflows to reliably execute in production?"  
  * *(For Josh A.)*: "You have massive scale experience on GCP and K8s. How would you approach deploying and orchestrating stateful AI agents within a Kubernetes cluster?"  
* **The Zero-to-One Mindset:** "What is it about the 'Zero-to-One' phase that attracts you right now, compared to a later-stage tech company with a massive engineering org?"

#### 

#### **4\. The Tech Stack & Lean Philosophy (0:35 \- 0:45)**

**Goal:** Ensure they are comfortable with your exact stack and the "Scenario D" philosophy.

* **The Stack Check:** "The core stack we are running with is React 19, Vite, and Tailwind 4 on the frontend. The backend is Node.js and Go, leveraging SQLite, and it is all containerized via Docker and orchestrated on K8s and ArgoCD over on GCP. How comfortable are you operating across that entire surface area?"  
* **The Lean Philosophy:** "Our philosophy is that we don't need a 50-person engineering team. We are building a company that uses its own product. The goal is a highly concentrated team leveraging AI agents to do the heavy lifting. How does that hyper-lean environment sound to you?"

#### 

#### **5\. The Startup Reality Check (0:45 \- 0:50)**

**Goal:** Be transparent about the pre-seed stage and compensation to avoid wasting time.

* **The Cap Table & Funding:** "To give you full transparency on where the business is at: we are currently in stealth mode, operating pre-seed. I am actively interviewing C-level COO candidates right now whose day-one mission is to close our initial $1M raise via YC SAFEs."  
* **Compensation Expectations:** "Because we are pre-seed, compensation for this foundational engineering role is going to be heavily weighted in early-stage equity until that funding clears. I want to be upfront about that—is that the kind of risk profile you are comfortable taking on right now?"

#### 

#### **6\. Q\&A and Next Steps (0:50 \- 1:00)**

**Goal:** Open the floor to them and set the stage for the technical evaluation.

* **Their Turn:** "I’ve thrown a lot of context at you. What concerns or questions do you have about the architecture, the market, or how we operate?"  
* **Next Steps:** "Let’s both sleep on this. If we are feeling a mutual fit over the next 48 hours, the next step would be a technical deep-dive—likely a short, asynchronous prompt-engineering or architecture assessment to see how we tackle problems together." 

