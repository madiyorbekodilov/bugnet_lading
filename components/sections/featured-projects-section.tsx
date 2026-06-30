import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { MotionCard, MotionGroup, MotionItem, MotionSection } from '@/components/motion';
import { SectionHeading } from '@/components/section-heading';
import { SectionShell } from '@/components/section-shell';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { projects } from '@/lib/site';

export function FeaturedProjectsSection() {
  return (
    <SectionShell id="projects">
      <MotionSection>
        <SectionHeading
          eyebrow="Projects"
          title="Featured work with premium interface and infrastructure thinking."
          description="These placeholders represent the kind of systems we build: polished, scalable, and shaped around real business operations."
        />

        <MotionGroup className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <MotionItem key={project.title}>
              <MotionCard className="group h-full">
                <Card className="h-full overflow-hidden border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)] group-hover:shadow-[0_24px_70px_rgba(15,23,42,0.09)]">
                  <div className="relative aspect-[16/11] overflow-hidden border-b border-border bg-slate-50">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/85 via-white/20 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="absolute left-5 top-5 rounded-full border border-border bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500 shadow-sm">
                      Case study preview
                    </div>
                  </div>
                  <CardHeader className="p-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">{project.category}</p>
                    <CardTitle className="mt-2 text-[1.1rem]">{project.title}</CardTitle>
                    <CardDescription className="mt-1">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="px-7 pb-7 pt-0">
                    <div className="flex flex-wrap gap-2 border-t border-border pt-5 text-xs font-medium text-slate-500">
                      <span className="rounded-full border border-border bg-slate-50 px-3 py-1">Strategy</span>
                      <span className="rounded-full border border-border bg-slate-50 px-3 py-1">Delivery</span>
                      <span className="rounded-full border border-border bg-slate-50 px-3 py-1">Scale</span>
                    </div>
                    <Button asChild variant="secondary" size="sm" className="mt-5 w-full">
                      <Link href="#contact" aria-label={`View project: ${project.title}`}>
                        View Project
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </MotionCard>
            </MotionItem>
          ))}
        </MotionGroup>
      </MotionSection>
    </SectionShell>
  );
}
