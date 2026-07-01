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

        <MotionGroup className="mt-10 grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <MotionItem key={project.title}>
              <MotionCard className="group h-full">
                <Card className="h-full overflow-hidden border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)] group-hover:shadow-[0_24px_70px_rgba(15,23,42,0.09)]">
                  <div className="relative aspect-[16/12] overflow-hidden border-b border-border bg-slate-50 sm:aspect-[16/11]">
                    <div className="absolute inset-0 p-3 sm:p-4">
                      {/* Render realistic UI previews purely with HTML/CSS/SVG */}
                      {project.title.includes('ERP') ? (
                        <div className="grid h-full w-full gap-3 sm:grid-cols-[minmax(0,0.32fr)_minmax(0,1fr)]">
                          <div className="rounded-md bg-slate-100 p-2">
                            <div className="mb-3 h-3 w-full rounded bg-slate-200" />
                            <div className="space-y-2">
                              {['Dashboard', 'Orders', 'Products', 'Employees'].map((t) => (
                                <div key={t} className="flex h-8 items-center rounded bg-white px-2 text-xs shadow-sm">
                                  <div className="mr-2 h-2 w-2 rounded-full bg-slate-300" />
                                  <span className="text-[11px] text-slate-500">{t}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="flex min-w-0 flex-col rounded-md bg-white p-3 shadow-inner">
                            <div className="grid grid-cols-3 gap-2">
                              <div className="rounded-md bg-slate-50 p-2 text-center">
                                <div className="text-xs text-slate-400">Revenue</div>
                                <div className="mt-1 text-sm font-semibold">$94.2k</div>
                              </div>
                              <div className="rounded-md bg-slate-50 p-2 text-center">
                                <div className="text-xs text-slate-400">Orders</div>
                                <div className="mt-1 text-sm font-semibold">1,248</div>
                              </div>
                              <div className="rounded-md bg-slate-50 p-2 text-center">
                                <div className="text-xs text-slate-400">Employees</div>
                                <div className="mt-1 text-sm font-semibold">312</div>
                              </div>
                            </div>

                            <div className="mt-3 h-24 rounded-md bg-gradient-to-b from-white to-slate-50 p-2 shadow-inner">
                              <svg viewBox="0 0 120 40" className="h-full w-full">
                                <path d="M0,30 L12,26 L24,18 L36,20 L48,12 L60,18 L72,8 L84,12 L96,6 L108,4 L120,2" stroke="#2563eb" strokeWidth="3" fill="none" strokeLinecap="round" />
                              </svg>
                            </div>

                            <div className="mt-3 flex-1 overflow-hidden">
                              <div className="text-xs text-slate-400">Employees</div>
                              <div className="mt-2 grid gap-2">
                                <div className="flex items-center justify-between rounded-md bg-white px-3 py-2 shadow-sm">
                                  <div className="text-sm">Alice Johnson</div>
                                  <div className="text-xs text-slate-400">Engineer</div>
                                </div>
                                <div className="flex items-center justify-between rounded-md bg-white px-3 py-2 shadow-sm">
                                  <div className="text-sm">Mohammad Ali</div>
                                  <div className="text-xs text-slate-400">Support</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : project.title.includes('Marketplace') ? (
                        <div className="grid h-full w-full gap-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,0.42fr)]">
                          <div className="min-w-0 rounded-md bg-white p-3 shadow-inner">
                            <div className="flex items-center justify-between">
                              <div className="h-3 w-1/2 rounded bg-slate-100" />
                              <div className="h-3 w-1/4 rounded bg-slate-100" />
                            </div>

                            <div className="mt-3 grid grid-cols-3 gap-3">
                              {[1, 2, 3].map((n) => (
                                <div key={n} className="rounded-md bg-slate-50 p-3 shadow-sm">
                                  <div className="h-10 rounded-md bg-white mb-2 shadow" />
                                  <div className="text-sm font-semibold">Product {n}</div>
                                  <div className="text-xs text-slate-400">$ { (n * 29).toString() }</div>
                                </div>
                              ))}
                            </div>

                            <div className="mt-3 flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className="h-3 w-3 rounded-full bg-green-400" />
                                <div className="text-xs text-slate-400">Active sellers</div>
                              </div>
                              <div className="text-xs text-slate-400">Payments • Orders</div>
                            </div>
                          </div>

                          <div className="rounded-md bg-white p-3 shadow-sm">
                            <div className="text-xs text-slate-400">Orders</div>
                            <div className="mt-2 space-y-2">
                              <div className="flex items-center justify-between">
                                <div className="text-sm">#1092</div>
                                <div className="text-xs text-slate-400">Paid</div>
                              </div>
                              <div className="flex items-center justify-between">
                                <div className="text-sm">#1091</div>
                                <div className="text-xs text-slate-400">Pending</div>
                              </div>
                            </div>

                            <div className="mt-3">
                              <div className="text-xs text-slate-400">Seller analytics</div>
                              <svg viewBox="0 0 60 24" className="mt-2 h-12 w-full">
                                <path d="M0,18 L10,12 L20,6 L30,10 L40,4 L50,8 L60,2" stroke="#1e40af" strokeWidth="2" fill="none" strokeLinecap="round" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="grid h-full w-full gap-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,0.42fr)]">
                          <div className="min-w-0 rounded-md bg-white p-3 shadow-inner">
                            <div className="flex items-center justify-between">
                              <div className="text-sm font-semibold">Appointments</div>
                              <div className="text-xs text-slate-400">Today</div>
                            </div>

                            <div className="mt-3 grid grid-cols-2 gap-2">
                              <div className="rounded-md bg-slate-50 p-2">
                                <div className="text-xs text-slate-400">Revenue</div>
                                <div className="mt-1 text-sm font-semibold">$3,420</div>
                                <div className="mt-2 h-16 rounded bg-white shadow" />
                              </div>
                              <div className="rounded-md bg-slate-50 p-2">
                                <div className="text-xs text-slate-400">Staff</div>
                                <div className="mt-1 text-sm font-semibold">8</div>
                                <div className="mt-2 space-y-2">
                                  <div className="h-8 rounded bg-white shadow flex items-center px-2">Anna • 10:00</div>
                                  <div className="h-8 rounded bg-white shadow flex items-center px-2">Maya • 11:30</div>
                                </div>
                              </div>
                            </div>

                            <div className="mt-3">
                              <div className="text-xs text-slate-400">Booking timeline</div>
                              <div className="mt-2 h-8 rounded bg-white shadow flex items-center px-2 text-sm">09:00 • 10:00 • 11:00 • 12:00</div>
                            </div>
                          </div>

                          <div className="rounded-md bg-white p-3 shadow-sm">
                            <div className="text-xs text-slate-400">Customer</div>
                            <div className="mt-2 text-sm font-semibold">Maya Chen</div>
                            <div className="mt-2 text-xs text-slate-400">Visits: 12</div>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-white/85 via-white/20 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="absolute left-4 top-4 rounded-full border border-border bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500 shadow-sm sm:left-5 sm:top-5">
                      Case study preview
                    </div>
                  </div>
                  <CardHeader className="p-5 sm:p-6 lg:p-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">{project.category}</p>
                    <CardTitle className="mt-2 text-[1rem] sm:text-[1.1rem]">{project.title}</CardTitle>
                    <CardDescription className="mt-1 text-sm leading-7">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="px-5 pb-5 pt-0 sm:px-6 sm:pb-6 lg:px-7 lg:pb-7">
                    <div className="flex flex-wrap gap-2 border-t border-border pt-5 text-xs font-medium text-slate-500">
                      <span className="rounded-full border border-border bg-slate-50 px-3 py-1">Strategy</span>
                      <span className="rounded-full border border-border bg-slate-50 px-3 py-1">Delivery</span>
                      <span className="rounded-full border border-border bg-slate-50 px-3 py-1">Scale</span>
                    </div>
                    <Button asChild variant="secondary" size="sm" className="mt-5 w-full">
                      <Link href="/#contact" aria-label={`View project: ${project.title}`}>
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
