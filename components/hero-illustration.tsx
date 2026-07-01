'use client';

import { motion } from 'framer-motion';

export function HeroIllustration() {
  const floatTransition = {
    duration: 6,
    repeat: Infinity,
    repeatType: 'reverse' as const,
    ease: 'easeInOut' as const
  };

  return (
    <div className="relative mx-auto w-full max-w-[720px] px-4">
      <div className="relative flex items-center justify-center">
        {/* Background soft glow */}
        <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-blue-50/40 to-transparent blur-3xl" />

        {/* Left: ERP Dashboard (slightly behind) */}
        <motion.div
          className="relative z-10 -mr-8 w-[260px] rounded-2xl border border-slate-200 bg-white shadow-lg"
          initial={{ y: 8, rotate: -2 }}
          animate={{ y: [8, -6, 8], rotate: [-2, 1.5, -2] }}
          transition={floatTransition}
        >
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div className="h-3 w-20 rounded-full bg-slate-100" />
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-green-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-red-400" />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2">
              <div className="rounded-lg bg-slate-50 p-2 text-center">
                <div className="text-xs text-muted">Orders</div>
                <div className="mt-1 text-sm font-semibold">1,248</div>
              </div>
              <div className="rounded-lg bg-slate-50 p-2 text-center">
                <div className="text-xs text-muted">Revenue</div>
                <div className="mt-1 text-sm font-semibold">$94.2k</div>
              </div>
              <div className="rounded-lg bg-slate-50 p-2 text-center">
                <div className="text-xs text-muted">Fulfillment</div>
                <div className="mt-1 text-sm font-semibold">98.6%</div>
              </div>
            </div>

            <div className="mt-4 h-24 rounded-md bg-gradient-to-b from-white to-slate-50 p-3 shadow-inner">
              {/* Simple sparkline */}
              <svg viewBox="0 0 100 28" className="w-full h-full">
                <path d="M0,20 L15,18 L30,10 L45,12 L60,6 L75,8 L90,4 L100,2" stroke="#2563eb" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between text-xs text-muted">
                <div>Latest orders</div>
                <div className="font-medium">View</div>
              </div>
              <div className="grid gap-2">
                <div className="flex items-center justify-between rounded-md bg-white px-3 py-2 shadow-sm">
                  <div className="text-sm">#9812</div>
                  <div className="text-xs text-muted">Paid</div>
                </div>
                <div className="flex items-center justify-between rounded-md bg-white px-3 py-2 shadow-sm">
                  <div className="text-sm">#9804</div>
                  <div className="text-xs text-muted">Pending</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Center: Salon Management (front) */}
        <motion.div
          className="relative z-20 w-[320px] -translate-y-2 rounded-2xl border border-slate-200 bg-white shadow-2xl"
          initial={{ y: -6, rotate: 2 }}
          animate={{ y: [-6, 6, -6], rotate: [2, -1.5, 2] }}
          transition={{ ...floatTransition, duration: 5.5 }}
        >
          <div className="p-5">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold">Salon Dashboard</div>
              <div className="text-xs text-muted">Mon • 09:42</div>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <div className="rounded-md bg-indigo-50 p-2 text-center">
                <div className="text-xs text-muted">Open</div>
                <div className="text-sm font-semibold">12</div>
              </div>
              <div className="rounded-md bg-slate-50 p-2 text-center">
                <div className="text-xs text-muted">Booked</div>
                <div className="text-sm font-semibold">34</div>
              </div>
              <div className="rounded-md bg-slate-50 p-2 text-center">
                <div className="text-xs text-muted">Clients</div>
                <div className="text-sm font-semibold">1,204</div>
              </div>
            </div>

            <div className="mt-4 rounded-md bg-slate-50 p-3">
              <div className="flex items-center justify-between mb-2 text-xs text-muted">
                <div>Today’s schedule</div>
                <div className="text-xs">3 items</div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between rounded-md bg-white px-3 py-2 shadow-sm">
                  <div className="text-sm">10:00 — Haircut • Alex</div>
                  <div className="text-xs text-muted">Confirmed</div>
                </div>
                <div className="flex items-center justify-between rounded-md bg-white px-3 py-2 shadow-sm">
                  <div className="text-sm">12:30 — Color • Maya</div>
                  <div className="text-xs text-muted">Confirmed</div>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <button className="rounded-full bg-primary px-4 py-2 text-white text-sm shadow">New booking</button>
              <div className="text-xs text-muted">Sync • Cloud</div>
            </div>
          </div>
        </motion.div>

        {/* Right: AI Analytics (slightly behind) */}
        <motion.div
          className="relative z-0 -ml-8 w-[280px] rounded-2xl border border-slate-200 bg-white shadow-lg"
          initial={{ y: 6, rotate: -1 }}
          animate={{ y: [6, -4, 6], rotate: [-1, 2, -1] }}
          transition={{ ...floatTransition, duration: 6.5 }}
        >
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold">AI Analytics</div>
              <div className="text-xs text-muted">Realtime</div>
            </div>

            <div className="mt-3 flex items-center gap-3">
              <div className="rounded-md bg-slate-50 p-3 text-center">
                <div className="text-xs text-muted">NPS</div>
                <div className="text-sm font-semibold">62</div>
              </div>
              <div className="rounded-md bg-slate-50 p-3 text-center">
                <div className="text-xs text-muted">Conversion</div>
                <div className="text-sm font-semibold">7.4%</div>
              </div>
            </div>

            <div className="mt-4 h-28 rounded-md bg-gradient-to-b from-white to-slate-50 p-3 shadow-inner">
              {/* Bar chart */}
              <svg viewBox="0 0 100 40" className="w-full h-full">
                <rect x="6" y="18" width="8" height="20" rx="1" fill="#60a5fa" />
                <rect x="22" y="10" width="8" height="28" rx="1" fill="#3b82f6" />
                <rect x="38" y="6" width="8" height="32" rx="1" fill="#2563eb" />
                <rect x="54" y="14" width="8" height="24" rx="1" fill="#1e40af" />
                <rect x="70" y="4" width="8" height="34" rx="1" fill="#1e3a8a" />
              </svg>
            </div>

            <div className="mt-4 text-xs text-muted">Model latency: 18ms • Uptime 99.99%</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
