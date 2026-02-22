/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Shield, FileText, Trash2, Mail, Phone, ArrowRight, Sun, Zap } from "lucide-react";
import { ReactNode } from "react";

const Section = ({ id, title, icon: Icon, children }: { id: string, title: string, icon: any, children: ReactNode }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="mb-24 scroll-mt-24"
  >
    <div className="flex items-center gap-3 mb-8">
      <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
        <Icon size={24} />
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-white">{title}</h2>
    </div>
    <div className="glass-card p-8 md:p-12">
      <div className="space-y-6 text-zinc-400 leading-relaxed">
        {children}
      </div>
    </div>
  </motion.section>
);

export default function App() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Atmospheric Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-500/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute top-[20%] right-[10%] w-[20%] h-[20%] rounded-full bg-purple-500/5 blur-[100px]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.4)]">
              <Sun className="text-black" size={24} />
            </div>
            <span className="font-bold text-xl tracking-tighter uppercase glow-text">Royeno <span className="text-emerald-400">SolarTech</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo('privacy')} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors cursor-pointer">Privacy</button>
            <button onClick={() => scrollTo('terms')} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors cursor-pointer">Terms</button>
            <button onClick={() => scrollTo('deletion')} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors cursor-pointer">Data Rights</button>
            <a href="mailto:info@royenosolartech.co.zw" className="px-5 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-emerald-400 transition-all duration-300">
              Contact Us
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-40 pb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-32"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold tracking-widest uppercase mb-6">
            <Zap size={14} /> Legal Documentation
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
            Transparency <br />
            <span className="text-emerald-400">By Design.</span>
          </h1>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto mb-12">
            Royeno SolarTech is committed to securing your data while providing world-class solar and borehole solutions through our WhatsApp ecosystem.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => scrollTo('privacy')} className="group flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-all">
              Get Started <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* Privacy Policy */}
        <Section id="privacy" title="Privacy Policy" icon={Shield}>
          <div className="flex justify-between items-start border-b border-white/5 pb-6 mb-6">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-1">Effective Date</p>
              <p className="text-white font-medium">22 February 2026</p>
            </div>
            <div className="text-right">
              <p className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-1">Status</p>
              <p className="text-white font-medium">Active</p>
            </div>
          </div>
          
          <p>Royeno SolarTech ("we", "our", "us") is committed to protecting your privacy. This policy explains how we collect, use, and store information when you interact with our WhatsApp chatbot.</p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="space-y-4">
              <h3 className="text-white font-semibold flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Information We Collect
              </h3>
              <ul className="space-y-2 list-disc list-inside">
                <li>Name, contact number, installation location</li>
                <li>Preferred installation date for quotations</li>
                <li>Chat interactions for service quality</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-white font-semibold flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                How We Use It
              </h3>
              <ul className="space-y-2 list-disc list-inside">
                <li>Provide accurate quotations</li>
                <li>Schedule services and follow-ups</li>
                <li>Improve WhatsApp communication</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 rounded-xl bg-white/5 border border-white/5">
            <h3 className="text-white font-semibold mb-4">Data Storage & Security</h3>
            <p className="mb-4">Your data is stored securely and is only accessible by authorized Royeno SolarTech staff. Data is not shared with third parties except as required for service delivery.</p>
            <p>You may request access to your data, or deletion of your data at any time. Contact us at <span className="text-white">0774161316</span> or <span className="text-white">info@royenosolartech.co.zw</span>.</p>
          </div>
          
          <p className="mt-8 text-sm italic">By interacting with our chatbot, you consent to the collection and use of your information as described above.</p>
        </Section>

        {/* Terms of Service */}
        <Section id="terms" title="Terms of Service" icon={FileText}>
          <div className="flex justify-between items-start border-b border-white/5 pb-6 mb-6">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-1">Effective Date</p>
              <p className="text-white font-medium">22 February 2026</p>
            </div>
          </div>

          <p>Welcome to the Royeno SolarTech WhatsApp chatbot. By using our service, you agree to these terms:</p>

          <div className="space-y-8 mt-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <h4 className="text-white font-medium">Service Use</h4>
                <p className="text-sm">The chatbot provides information and quotations for solar systems, borehole services, Starlink internet installation, and irrigation solutions. All responses are for informational purposes; actual quotations may vary based on site evaluation.</p>
              </div>
              <div className="space-y-3">
                <h4 className="text-white font-medium">Accuracy</h4>
                <p className="text-sm">We strive to provide accurate and up-to-date information. Prices and availability are subject to change without prior notice.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <h4 className="text-white font-medium">Quotation Requests</h4>
                <p className="text-sm">To receive a quotation, you must provide your name, contact number, installation location, and preferred installation date. Submitted requests are forwarded to staff for follow-up.</p>
              </div>
              <div className="space-y-3">
                <h4 className="text-white font-medium">Liability</h4>
                <p className="text-sm">Royeno SolarTech is not responsible for any errors, miscommunications, or service delays through the WhatsApp chatbot platform.</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/5">
            <p className="text-sm">We may update these Terms at any time. Continued use of the chatbot constitutes acceptance of the updated Terms.</p>
          </div>
        </Section>

        {/* Data Deletion */}
        <Section id="deletion" title="Data Deletion & User Rights" icon={Trash2}>
          <div className="flex justify-between items-start border-b border-white/5 pb-6 mb-6">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-1">Effective Date</p>
              <p className="text-white font-medium">22 February 2026</p>
            </div>
          </div>

          <p className="mb-8">Your privacy is important. This page explains your rights regarding the data collected by our WhatsApp chatbot.</p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/10">
              <h4 className="text-white font-semibold mb-3">Right to Delete</h4>
              <p className="text-sm">You may request the deletion of your personal data at any time. We will remove it within 30 days.</p>
            </div>
            <div className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/10">
              <h4 className="text-white font-semibold mb-3">Right to Access</h4>
              <p className="text-sm">You may request a copy of all stored data associated with your contact number.</p>
            </div>
            <div className="p-6 rounded-2xl bg-purple-500/5 border border-purple-500/10">
              <h4 className="text-white font-semibold mb-3">Right to Correct</h4>
              <p className="text-sm">You may request corrections to any inaccurate information stored in our systems.</p>
            </div>
          </div>

          <div className="mt-12 glass-card p-8 border-emerald-500/20">
            <h3 className="text-xl font-semibold text-white mb-6">How to exercise your rights</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <a href="https://wa.me/263774161316" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                <div className="p-3 rounded-lg bg-emerald-500/20 text-emerald-400">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase font-mono">WhatsApp</p>
                  <p className="text-white font-medium">0774161316</p>
                </div>
              </a>
              <a href="mailto:info@royenosolartech.co.zw" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                <div className="p-3 rounded-lg bg-blue-500/20 text-blue-400">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase font-mono">Email</p>
                  <p className="text-white font-medium">info@royenosolartech.co.zw</p>
                </div>
              </a>
            </div>
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-12 bg-black/50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Sun className="text-emerald-400" size={20} />
            <span className="font-bold tracking-tighter uppercase text-sm">Royeno SolarTech</span>
          </div>
          <p className="text-zinc-500 text-xs font-mono">
            &copy; 2026 ROYENO SOLARTECH. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Mail size={18} /></a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Phone size={18} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
