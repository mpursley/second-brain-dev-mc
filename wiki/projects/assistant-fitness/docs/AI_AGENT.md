### **1\. The Deterministic Wrapper (Input/Output Guardrails)**

Never let the LLM do the math or make the final safety decision. You need a programmatic wrapper sitting between the user and the model.

- **Input Interception:** Use a fast classification model or rule-based logic (like NeMo Guardrails) to scan incoming prompts. If a user asks about "cutting," "fasting," or explicitly requests calories below the medical floors (~1,200 kcal for women, ~1,500 kcal for men), the wrapper intercepts the request _before_ it hits the conversational LLM.
- **Deterministic Routing:** Instead of letting the LLM improvise a refusal, the wrapper routes the flagged prompt to a strict, pre-approved "Refusal Pathway." The LLM is then instructed to format a refusal using specific, clinical-board-approved language.

### **2\. The "Auditor" Multi-Agent Setup**

You can separate the "Personality" from the "Dietitian."

- **Agent 1 (FIG):** Generates the initial response based on the user's historical context, maintaining that firm, anti-diet worldview.
- **Agent 2 (The Auditor):** A smaller, highly constrained LLM runs invisibly in the background. Its only job is to review Agent 1's output against the "do-not-print" list and safety constraints. If Agent 2 detects any diet-culture phrasing, medical advice, or numbers below the floor, it kicks the response back to Agent 1 for a rewrite or defaults to a safe, hardcoded fallback.

### **3\. Context Injection (The Retention Engine)**

To fulfill the promise that FIG "remembers the week", you need a robust state-management system.

- Store the user's daily check-in bands (Energy, Mood, Sleep, Hunger, Joy) in a fast key-value store.
- Before the prompt reaches FIG, dynamically inject the trailing 7-to-14 days of this data directly into the system prompt. This gives FIG the grounding to push back effectively (e.g., _"Your sleep's been rough all month - go aggressive now and your top set disappears"_).

### **4\. Continuous Observability & Tracing**

Because the Advisory Board requires review of the refusal logic and intervention alerts, your monitoring stack needs to treat prompts and responses as critical telemetry.

- **Log Everything:** Pipe every user prompt, FIG response, and triggered guardrail event into a centralized logging system (like Loki).
- **Trace the Hops:** Use distributed tracing (like Tempo) to track exactly how long the Guardrail, Agent 1, and Agent 2 took to process a message. This ensures the complex safety checks don't result in a 10-second lag for the user.
- **Custom Dashboards:** Build a Grafana dashboard specifically for the Clinical and Mental Health advisors. They need to see a live feed of every time a user hits an intake floor or triggers the National Alliance for Eating Disorders escalation path. This proves the system is actually working.

---

## Legend

- `[ ]` TODO
- `[I]` In progress
- `[C]` Complete
- `[X]` Deployed to Prod/Active version

## Implementation Tasks

### 1. The Deterministic Wrapper (Input/Output Guardrails)

- `[C]` Implement Input Interception logic (classification model / NeMo Guardrails)
- `[C]` Define trigger conditions (e.g., "cutting," "fasting," calories below medical floors)
- `[C]` Implement Deterministic Routing (strict pre-approved "Refusal Pathway")

### 2. The "Auditor" Multi-Agent Setup

- `[C]` Architect Agent 1 (FIG) focusing on personality and contextual response
- `[C]` Architect Agent 2 (The Auditor) focusing on constraint checking
- `[C]` Build the feedback loop from Auditor back to FIG (rewrite or hardcoded fallback)

### 3. Context Injection (The Retention Engine)

- `[C]` Setup fast key-value store for daily check-in bands (Energy, Mood, Sleep, Hunger, Joy)
- `[C]` Build dynamic prompt injection for the trailing 7-14 days of data

### 4. Continuous Observability & Tracing

- `[C]` Set up centralized logging for all prompts, responses, and events
- `[C]` Validate that metrics are being collected and displayed in GCP CloudRun Metrics (https://console.cloud.google.com/run/detail/us-central1/assistant-fitness-com/observability/metrics) and Logs (http://console.cloud.google.com/run/detail/us-central1/assistant-fitness-com/observability/logs)
