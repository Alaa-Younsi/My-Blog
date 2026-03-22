import type { Article } from '../types'

export const articles: Article[] = [
  {
    id: '1',
    slug: 'building-resilient-systems-chaos-engineering',
    title: 'Building Resilient Systems with Chaos Engineering',
    subtitle: 'Break things deliberately before production breaks them for you',
    date: '2025-03-05',
    keywords: ['engineering', 'chaos', 'reliability', 'distributed systems', 'SRE'],
    coverImage: 'https://picsum.photos/seed/chaos301/1200/600',
    readTime: '10 min read',
    category: 'Engineering',
    content: [
      {
        type: 'paragraph',
        content:
          'Every distributed system will fail. The question is not if, but when, and whether that failure will be a surprise or an anticipated, handled event. Chaos engineering is the discipline of proactively injecting failure into your systems to discover weaknesses before they manifest in production at the worst possible time.',
      },
      {
        type: 'heading',
        content: 'The Philosophy of Controlled Failure',
      },
      {
        type: 'paragraph',
        content:
          'Netflix pioneered the practice with Chaos Monkey, a tool that randomly terminated production instances. The philosophy was simple and brutal: if your system cannot survive random instance termination, you\'ll discover that fact eventually, on a random Friday night at 2am. Better to discover it Tuesday at 10am when your engineering team is alert and caffeinated.',
      },
      {
        type: 'paragraph',
        content:
          'Modern chaos engineering has evolved far beyond random termination. Practioners now inject network latency, corrupt data at the boundary, exhaust file descriptors, simulate regional outages, and introduce Byzantine faults — failures where a node behaves incorrectly rather than simply going silent. The goal is to map the failure space before the failure space maps you.',
      },
      {
        type: 'image',
        content: 'https://picsum.photos/seed/chaos302/1200/500',
        alt: 'Complex distributed system architecture diagram with failure injection points',
        caption: 'A resilience map: every dependency is a potential failure domain.',
      },
      {
        type: 'heading',
        content: 'Implementing a Chaos Program',
      },
      {
        type: 'paragraph',
        content:
          'Starting a chaos program requires more organizational maturity than technical sophistication. The hardest part is cultural: convincing stakeholders that deliberately breaking production (in controlled, reversible ways) is a sign of engineering strength, not recklessness. Build that case with data before throwing the first monkey wrench.',
      },
      {
        type: 'list',
        items: [
          'Define steady state: what does "working" look like, quantitatively? (latency p99, error rate, throughput)',
          'Start in staging: validate your chaos tooling and hypotheses before touching production',
          'Limit blast radius: use feature flags, canary deployments, and traffic shaping to contain experiments',
          'Automate rollback: every experiment must have a one-command abort procedure',
          'Document hypotheses: "We believe the system will degrade gracefully when database replica lag exceeds 5s"',
          'Run in production eventually: staging lies. Your real failure modes live in production traffic patterns',
          'Build a Game Day culture: scheduled, announced chaos experiments with cross-team observers',
        ],
      },
      {
        type: 'quote',
        content:
          '"Hope is not a strategy. Testing resilience is not pessimism — it is the most optimistic act an engineer can perform."',
      },
      {
        type: 'code',
        language: 'yaml',
        content: `# Chaos Mesh experiment: inject 500ms network latency
# to simulate degraded upstream API
apiVersion: chaos-mesh.org/v1alpha1
kind: NetworkChaos
metadata:
  name: api-latency-experiment
  namespace: production
spec:
  action: delay
  mode: fixed
  value: "5"
  selector:
    namespaces: [production]
    labelSelectors:
      app: payment-service
  delay:
    latency: "500ms"
    jitter: "100ms"
    correlation: "25"
  duration: "3m"
  scheduler:
    cron: "@every 1h"`,
      },
      {
        type: 'divider',
      },
      {
        type: 'paragraph',
        content:
          'The organizations that invest in chaos engineering don\'t have fewer incidents. They have faster recovery times, smaller blast radii, and engineers who sleep better at night because they\'ve felt the failure modes with their hands, in controlled conditions, and know exactly what to do when reality replicates the experiment.',
      },
    ],
  },
  {
    id: '2',
    slug: 'the-programmer-as-philosopher',
    title: 'The Programmer as Philosopher',
    subtitle: 'Writing code is an act of applied ontology — you are building worlds',
    date: '2025-03-18',
    keywords: ['philosophy', 'programming', 'craft', 'abstraction', 'design'],
    coverImage: 'https://picsum.photos/seed/philo401/1200/600',
    readTime: '8 min read',
    category: 'Philosophy',
    content: [
      {
        type: 'paragraph',
        content:
          'When you write code, you are doing something philosophy departments have struggled with for centuries: you are making explicit the implicit. Every function signature is a claim about the nature of the problem. Every type is an assertion about what kinds of things exist in your domain. Programming is applied metaphysics with compile-time feedback.',
      },
      {
        type: 'heading',
        content: 'Types as Ontological Commitments',
      },
      {
        type: 'paragraph',
        content:
          'The type system is not bureaucracy. It is the program\'s theory of its own world. When you define a type, you are answering the philosopher\'s question: "What kind of thing is this?" A string is not a name. An integer is not a user ID. The decision to make these distinctions explicit — or to paper over them — is a philosophical choice with consequences that compound over years and codebases.',
      },
      {
        type: 'paragraph',
        content:
          'Domain-driven design understood this intuitively before it had the language to say it: your code should speak the language of the domain, not the language of the implementation. When the business analyst and the programmer use the same words to mean the same things, you\'ve achieved something rare and precious: shared ontology.',
      },
      {
        type: 'image',
        content: 'https://picsum.photos/seed/philo402/1200/500',
        alt: 'A philosopher staring at a terminal with code cascading in the background',
        caption: 'Every line of code is a philosophical position rendered executable.',
      },
      {
        type: 'heading',
        content: 'Abstraction as World-Making',
      },
      {
        type: 'paragraph',
        content:
          'The act of abstraction is the act of deciding what matters. When you build a leaky abstraction, you\'re not just making a technical error — you\'re making a claim about the world that turns out to be false. The details you tried to hide come bleeding through, exposing the gap between your model and reality.',
      },
      {
        type: 'list',
        items: [
          'Naming is the most philosophical act in programming — a good name is a true claim about the nature of a thing',
          'Every abstraction is a simplification, and every simplification is a lie told for pragmatic purposes',
          'The best lies are consistent: they hold up under examination and don\'t contradict each other',
          'Refactoring is epistemological revision — updating your model when reality has taught you something',
          'Technical debt is unresolved philosophical confusion, deferred to a future self',
          'Comments explain the why, not the what — they document the intention, the ontological choice',
        ],
      },
      {
        type: 'quote',
        content:
          '"A programming language is a tool that has a profound influence on our thinking habits." — Edsger W. Dijkstra',
      },
      {
        type: 'code',
        language: 'typescript',
        content: `// Bad ontology — strings masquerading as domain objects
function processPayment(userId: string, amount: number): string {
  // What IS a userId? What IS an amount? What IS the return?
  // This function makes no commitments.
}

// Better ontology — explicit domain commitments
type UserId = string & { readonly __brand: 'UserId' }
type Money = { readonly amount: number; readonly currency: 'USD' | 'EUR' | 'GBP' }
type PaymentResult =
  | { status: 'success'; transactionId: string }
  | { status: 'declined'; reason: string }
  | { status: 'error'; code: number }

function processPayment(userId: UserId, payment: Money): Promise<PaymentResult> {
  // Now the function's world-model is explicit and verifiable
}`,
      },
      {
        type: 'divider',
      },
      {
        type: 'paragraph',
        content:
          'The programmers who write software that survives decades — the code that accumulates respect rather than contempt — are the ones who took the philosophical questions seriously from the start. They asked not just "how does this work?" but "what does this mean?" The difference shows in the code, and it compounds over time.',
      },
    ],
  },
  {
    id: '3',
    slug: 'open-source-gift-economy-of-code',
    title: 'Open Source: The Gift Economy of Code',
    subtitle: 'How millions of strangers built the infrastructure of the modern world for free',
    date: '2025-04-02',
    keywords: ['open source', 'culture', 'community', 'software', 'economics'],
    coverImage: 'https://picsum.photos/seed/oss501/1200/600',
    readTime: '7 min read',
    category: 'Culture',
    content: [
      {
        type: 'paragraph',
        content:
          'The internet runs on software that nobody owns. Linux powers most of the servers that power most of the websites that power most of human communication. It was written, over decades, by thousands of contributors operating under no contract, for no direct compensation, in a collective act of creation with no parallel in human history.',
      },
      {
        type: 'heading',
        content: 'The Tragedy That Wasn\'t',
      },
      {
        type: 'paragraph',
        content:
          'Economic theory predicted open source would fail. Garrett Hardin\'s "tragedy of the commons" suggested that shared resources would be exploited and depleted. The software commons defied this. Contributors kept contributing. Code kept improving. The commons grew.',
      },
      {
        type: 'paragraph',
        content:
          'Elinor Ostrom won a Nobel Prize for explaining why: communities develop their own governance mechanisms for managing shared resources. The question is not markets versus states, but whether communities can self-organize around shared values. Open source communities answered with an emphatic yes, then demonstrated their answer by building the infrastructure of the modern world.',
      },
      {
        type: 'image',
        content: 'https://picsum.photos/seed/oss502/1200/500',
        alt: 'World map with nodes and connections representing global open source contributions',
        caption: 'The global mesh of open source contribution: millions of nodes, no central authority.',
      },
      {
        type: 'heading',
        content: 'The Gift and Its Discontents',
      },
      {
        type: 'paragraph',
        content:
          'But the gift economy has fault lines. The infrastructure of trillion-dollar companies is often maintained by one developer in Nebraska, as the xkcd comic memorably depicted. The disconnect between the value extracted and the value returned to maintainers has reached crisis point: maintainer burnout, abandoned packages, and supply chain attacks on unmaintained dependencies are symptoms of a system under strain.',
      },
      {
        type: 'list',
        items: [
          'The average npm package is depended on by thousands of projects but maintained by less than 2 people',
          'Major security vulnerabilities (Log4Shell, Heartbleed) have hit universally-depended open source projects',
          'Sponsorship platforms have helped but reach less than 1% of critical maintainers',
          'Companies like Red Hat, Canonical, and HashiCorp shifting to proprietary licenses signal the tension',
          'The FOSS community is developing new models: open core, dual licensing, sustainability funds',
          'FOSS contributor demographics remain deeply unrepresentative — a diversity problem with systemic causes',
        ],
      },
      {
        type: 'quote',
        content:
          '"Open source is not a business model. It is a philosophy that some have managed to build businesses around." — Anonymous maintainer, post-burnout',
      },
      {
        type: 'code',
        language: 'markdown',
        content: `# SUSTAINABILITY.md

This project is maintained by one person in their spare time.

## It is used in production by:
- Thousands of companies (including several Fortune 500)
- Millions of end users (indirectly)
- You (right now, probably)

## What it costs to maintain:
- ~15 hours/week
- $0 in direct compensation

## What you can do:
- [ ] Star the repo (visibility)
- [ ] Report bugs with reproduction cases (time savings)
- [ ] Sponsor via GitHub Sponsors (sustainability)
- [ ] Submit well-scoped PRs (contribution)
- [ ] Write documentation (often more valuable than code)

## What happens if you don't:
- See: leftpad incident (2016)
- See: colors/faker incident (2022)
- See: XZ Utils backdoor (2024)`,
      },
      {
        type: 'divider',
      },
      {
        type: 'paragraph',
        content:
          'The open source ecosystem is the most remarkable collective achievement in the history of software. It is also fragile, unequally distributed in its costs and benefits, and in need of intentional stewardship. The challenge for the next decade is not technical. It is social and economic: building systems that sustain the people who sustain the code that sustains everything else.',
      },
    ],
  },
]
