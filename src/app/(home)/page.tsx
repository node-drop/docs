'use client';

import Link from 'next/link';
import { 
  Workflow, 
  Zap, 
  Shield, 
  Activity, 
  Container, 
  Palette,
  ArrowRight,
  Github,
  Terminal
} from 'lucide-react';

const features = [
  {
    icon: Workflow,
    title: 'Visual Workflow Builder',
    description: 'Drag-and-drop interface to create powerful automations without code.',
  },
  {
    icon: Zap,
    title: 'Extensible Node System',
    description: 'Build custom integrations with our flexible node architecture.',
  },
  {
    icon: Shield,
    title: 'Secure by Default',
    description: 'Enterprise-grade authentication and authorization built-in.',
  },
  {
    icon: Activity,
    title: 'Real-time Monitoring',
    description: 'Watch your workflows execute in real-time with detailed logs.',
  },
  {
    icon: Container,
    title: 'Docker Ready',
    description: 'Single-container architecture for easy deployment anywhere.',
  },
  {
    icon: Palette,
    title: 'Modern UI',
    description: 'Beautiful, responsive interface built with React and TypeScript.',
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-fd-primary/10 px-4 py-2 text-sm font-medium text-fd-primary">
              <Zap className="size-4" />
              Open Source Workflow Automation
            </span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Build Powerful Automations,{' '}
            <span className="text-fd-primary">Your Way</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-fd-muted-foreground">
            NodeDrop is a self-hosted workflow automation platform. Create, deploy, and monitor 
            automations with a beautiful visual interface. No vendor lock-in, full control.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 rounded-full bg-fd-primary px-6 py-3 text-sm font-semibold text-fd-primary-foreground shadow-sm transition-colors hover:bg-fd-primary/90"
            >
              Get Started
              <ArrowRight className="size-4" />
            </Link>
            <a
              href="https://github.com/node-drop/nodedrop"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-fd-border bg-fd-background px-6 py-3 text-sm font-semibold shadow-sm transition-colors hover:bg-fd-accent"
            >
              <Github className="size-4" />
              View on GitHub
            </a>
          </div>

          {/* Quick Start */}
          <div className="mt-16">
            <div className="rounded-2xl border p-8 shadow-lg text-left">
              <div className="mb-4 flex items-center gap-2 text-fd-muted-foreground">
                <Terminal className="size-5" />
                <span className="text-sm font-medium">Quick Start</span>
              </div>
              <pre className="overflow-x-auto rounded-lg bg-fd-secondary p-4 text-sm">
                <code className="text-fd-foreground">npm create nodedrop</code>
              </pre>
              <p className="mt-4 text-sm text-fd-muted-foreground">
                That's it! Visit <code className="rounded bg-fd-secondary px-1.5 py-0.5">http://localhost:5678</code> to start building workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need for automation
            </h2>
            <p className="mt-4 text-lg text-fd-muted-foreground">
              Powerful features to build, deploy, and scale your workflows.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group flex flex-col gap-4 rounded-lg border border-fd-border bg-transparent p-6 transition-colors hover:border-fd-primary/50 hover:bg-fd-accent/5"
              >
                <div className="inline-flex size-12 items-center justify-center rounded-md border border-fd-border bg-fd-background">
                  <feature.icon className="size-5 text-fd-primary" />
                </div>
                <div>
                  <h3 className="text-base font-semibold">{feature.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-fd-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to automate?
          </h2>
          <p className="mt-4 text-lg text-fd-muted-foreground">
            Get started with NodeDrop in minutes. Free, open source, and self-hosted.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 rounded-full bg-fd-primary px-6 py-3 text-sm font-semibold text-fd-primary-foreground shadow-sm transition-colors hover:bg-fd-primary/90"
            >
              Read the Docs
              <ArrowRight className="size-4" />
            </Link>
            <a
              href="https://github.com/node-drop/nodedrop"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-fd-border bg-fd-background px-6 py-3 text-sm font-semibold shadow-sm transition-colors hover:bg-fd-accent"
            >
              <Github className="size-4" />
              Star on GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
